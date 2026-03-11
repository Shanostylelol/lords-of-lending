import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile, mkdir } from "fs/promises";
import { join } from "path";

/* ---------- Rate limiting ---------- */

const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

// Periodically clean up expired entries to avoid memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of rateLimitMap) {
    if (now > entry.resetAt) {
      rateLimitMap.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW_MS * 2);

/* ---------- Email validation ---------- */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* ---------- Handler ---------- */

export async function POST(req: NextRequest) {
  // Rate limit by IP
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    req.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many requests. Try again later." },
      { status: 429 },
    );
  }

  let body: { email?: string; _hp?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { email, _hp } = body;

  // Honeypot check — bots fill hidden fields. Silently accept to avoid tipping them off.
  if (_hp) {
    return NextResponse.json({ ok: true });
  }

  // Validate email
  if (!email || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  // Persist to data/subscribers.json
  const dataDir = join(process.cwd(), "data");
  const filePath = join(dataDir, "subscribers.json");

  try {
    await mkdir(dataDir, { recursive: true });

    let subscribers: { email: string; subscribedAt: string; ip: string }[] = [];
    try {
      const raw = await readFile(filePath, "utf-8");
      subscribers = JSON.parse(raw);
    } catch {
      // File doesn't exist yet — start fresh
    }

    // Check for duplicate
    if (subscribers.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
      return NextResponse.json({ ok: true }); // Already subscribed — silent success
    }

    subscribers.push({
      email: email.toLowerCase(),
      subscribedAt: new Date().toISOString(),
      ip,
    });

    await writeFile(filePath, JSON.stringify(subscribers, null, 2), "utf-8");

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Failed to save subscription." },
      { status: 500 },
    );
  }
}
