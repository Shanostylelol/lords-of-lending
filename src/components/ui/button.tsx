import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
}

interface ButtonLinkProps extends ButtonBaseProps {
  href: string;
  external?: boolean;
  onClick?: never;
  type?: never;
}

interface ButtonButtonProps extends ButtonBaseProps {
  href?: never;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit";
}

type ButtonProps = ButtonLinkProps | ButtonButtonProps;

export function Button({
  href,
  children,
  variant = "primary",
  className,
  external,
  onClick,
  type,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold transition-all cursor-pointer";

  const variants = {
    primary:
      "bg-[var(--color-gold)] text-white hover:bg-[var(--color-gold-dark)] hover:shadow-lg",
    outline:
      "border-2 border-[var(--color-gold)] text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-white",
    ghost:
      "text-[var(--color-gold)] hover:bg-[var(--color-gold)]/10",
  };

  const classes = cn(base, variants[variant], className);

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type || "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
