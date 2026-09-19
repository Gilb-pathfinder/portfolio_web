import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRightIcon } from "@/components/ui/icons";

type Variant = "solid" | "outline" | "inverted" | "outlineLight";

const variants: Record<Variant, string> = {
  solid: "bg-ink text-white hover:bg-gray-800",
  outline: "border border-border-strong text-text-primary hover:border-ink hover:bg-bg-alt",
  inverted: "bg-white text-ink hover:bg-gray-100",
  // for use over a dark/photo background
  outlineLight: "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

export function PillButton({
  href,
  children,
  variant = "solid",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  const classes = `inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300 ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export function CircleArrow({
  variant = "outline",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      aria-hidden
    >
      <ArrowUpRightIcon className="h-4 w-4" />
    </span>
  );
}

export function PillButtonWithArrow({
  href,
  children,
  variant = "outline",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  external?: boolean;
}) {
  const inner = (
    <>
      <span
        className={`inline-flex items-center rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300 ${variants[variant]}`}
      >
        {children}
      </span>
      <CircleArrow variant={variant} />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-3">
        {inner}
      </a>
    );
  }

  return (
    <Link href={href} className="group inline-flex items-center gap-3">
      {inner}
    </Link>
  );
}
