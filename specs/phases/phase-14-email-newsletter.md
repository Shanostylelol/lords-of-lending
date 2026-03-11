# Phase 14: Email Capture & Newsletter System

**Priority:** Medium
**Estimated Duration:** 4-6 hours
**Dependencies:** Choose email provider (ConvertKit, Resend, or Mailchimp)
**Goal:** Capture email subscribers for "SBA Lending This Week" newsletter, grow owned audience, reduce dependency on search traffic alone

---

## Pre-Read

- `src/app/[slug]/page.tsx` — Where to inject inline email capture
- `src/components/layout/footer.tsx` — Add footer email capture
- `src/components/sections/hero.tsx` — Homepage hero CTA options
- `src/lib/constants.ts` — SITE_CONFIG for branding

---

## Sub-Steps

### 14.1: Email Capture Component

**Files:**
- Create `src/components/ui/email-capture.tsx`

**Action:**
- Client-side component ("use client")
- Props: `variant: "inline" | "footer" | "banner"`, `heading?: string`, `subheading?: string`
- Inline variant: Appears within articles after the 2nd H2 section — subtle, not disruptive
- Footer variant: Compact form in site footer
- Banner variant: Full-width CTA block at bottom of articles (before related articles)
- All variants: Email input + Submit button + "Join 500+ SBA professionals" social proof text
- Success state: "You're in! Check your inbox." message
- Error state: "Something went wrong. Try again." with retry
- Style: Dark card, gold CTA button, matches site design
- Form submits to `/api/subscribe` endpoint

**Build:** `npx tsc --noEmit`

---

### 14.2: Subscribe API Route

**Files:**
- Create `src/app/api/subscribe/route.ts`

**Action:**
- POST endpoint accepting `{ email: string }`
- Validate email format (basic regex)
- Rate limiting: max 5 requests per IP per minute (simple in-memory map, reset on deploy)
- Integration options (implement ONE, document others):
  - **Option A: ConvertKit** — POST to ConvertKit Forms API with form ID
  - **Option B: Resend** — Add contact to Resend audience
  - **Option C: Simple file/DB** — Append to a JSON file or Supabase table as MVP
- Return 200 on success, 400 on invalid email, 429 on rate limit
- No sensitive data logging

**Build:** `npx tsc --noEmit`

---

### 14.3: Inject Email Capture into Article Pages

**Files:**
- Modify `src/app/[slug]/page.tsx`

**Action:**
- Add `<EmailCapture variant="banner" />` before the related articles / CTA section on:
  - Pillar articles
  - Supporting articles
  - Blog posts
- Add `<EmailCapture variant="inline" />` after the 2nd H2 in pillar articles only (longest content)
- Do NOT add to state or industry pages (they already have training CTAs)

**Build:** `npx tsc --noEmit`

---

### 14.4: Footer Email Capture

**Files:**
- Modify `src/components/layout/footer.tsx`

**Action:**
- Add `<EmailCapture variant="footer" />` to the footer
- Place above the copyright line, below the navigation links
- Heading: "SBA Lending This Week"
- Subheading: "Weekly insights for originators and brokers. Free."

**Build:** `npx tsc --noEmit`

---

## Gate Criteria

- [ ] Email capture renders in 3 variants (inline, footer, banner)
- [ ] API route validates email and returns appropriate status codes
- [ ] Banner version appears on pillar, supporting, and blog article pages
- [ ] Footer version appears site-wide
- [ ] Success/error states display correctly
- [ ] No email is submitted without basic validation
- [ ] Mobile responsive
- [ ] Zero TypeScript errors
- [ ] Build passes

## Build Command

```bash
npx tsc --noEmit && npm run build
```

## Notes

- Email provider choice should be made before executing this phase
- ConvertKit is recommended for content creators (free tier up to 1,000 subscribers)
- The API route is designed to be swappable — change the provider integration without touching the frontend
- Consider adding a honeypot field for spam prevention (hidden input that bots fill)
