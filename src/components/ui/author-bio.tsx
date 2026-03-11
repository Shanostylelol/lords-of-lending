import Image from "next/image";
import Link from "next/link";

type AuthorKey = "shane" | "steph" | "brian";

interface AuthorData {
  name: string;
  title: string;
  bio: string;
  headshot: string;
  linkedin?: string;
}

const AUTHORS: Record<AuthorKey, AuthorData> = {
  shane: {
    name: "Shane Pierson",
    title: "Founder, Lords of Lending",
    bio: "Shane has originated and structured hundreds of SBA deals across every major industry vertical. He built Lords of Lending to give independent originators the playbook banks keep to themselves.",
    headshot: "/images/headshots/shane-pierson.webp",
    linkedin: "https://www.linkedin.com/in/shanepierson/",
  },
  steph: {
    name: "Stephanie Castagnier Dunn",
    title: "Co-Host, Lords of Lending",
    bio: "Stephanie brings deep SBA underwriting experience and a sharp eye for deal structure. She translates complex lending requirements into plain language originators can use.",
    headshot: "/images/headshots/stephanie-dunn.webp",
    linkedin: "https://www.linkedin.com/in/stephaniedunn/",
  },
  brian: {
    name: "Brian Congelliere",
    title: "Co-Host, Lords of Lending",
    bio: "Brian is a veteran SBA lender who has seen every deal type that walks through the door. His field insights and lender relationships make him a go-to voice in the originator community.",
    headshot: "/images/headshots/brian-congelliere.webp",
    linkedin: "https://www.linkedin.com/in/briancongelliere/",
  },
};

interface AuthorBioProps {
  author: AuthorKey;
  variant?: "full" | "compact";
}

export function AuthorBio({ author, variant = "full" }: AuthorBioProps) {
  const data = AUTHORS[author];

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3">
        <Image
          src={data.headshot}
          alt={data.name}
          width={36}
          height={36}
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-medium text-white">{data.name}</p>
          <p className="text-xs text-white/50">{data.title}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-12 rounded-xl border border-[var(--color-gold)]/20 bg-[var(--color-surface)] p-6">
      <div className="flex items-start gap-4">
        <Image
          src={data.headshot}
          alt={data.name}
          width={64}
          height={64}
          className="shrink-0 rounded-full"
        />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-white">Written by {data.name}</p>
          <p className="mt-0.5 text-xs text-white/50">{data.title}</p>
          <p className="mt-2 text-sm leading-relaxed text-white/60">{data.bio}</p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="https://learn.lordsoflending.com/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-gold-dark)]"
        >
          Start Learning Free
        </a>
        <Link
          href="/podcast"
          className="inline-flex items-center rounded-md border border-[var(--color-gold)] px-4 py-2 text-sm font-semibold text-[var(--color-gold)] transition-colors hover:bg-[var(--color-gold)] hover:text-white"
        >
          Listen to the Podcast
        </Link>
        {data.linkedin && (
          <a
            href={data.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md border border-[var(--color-border)] px-4 py-2 text-sm font-semibold text-white/60 transition-colors hover:border-[var(--color-gold)] hover:text-[var(--color-gold)]"
          >
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
