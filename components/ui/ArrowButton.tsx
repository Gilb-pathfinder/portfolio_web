import Link from "next/link";
import { ReactNode } from "react";
import { ArrowUpRightIcon } from "./icons";

type Variant = "solid" | "outline" | "text";

const pillStyles: Record<Variant, string> = {
  solid: "bg-ink text-white group-hover:bg-gray-800",
  outline: "border border-border-strong text-text-primary group-hover:border-ink",
  text: "",
};

const circleStyles: Record<Variant, string> = {
  solid: "bg-ink text-white group-hover:bg-gray-800",
  outline: "border border-border-strong text-text-primary group-hover:border-ink",
  text: "",
};

export function ArrowButton({
  href,
  children,
  variant = "outline",
  className = "",
  external = false,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
}) {
  // "text" stays a minimal inline link — no pill, no circle.
  if (variant === "text") {
    const content = (
      <>
        <span className="border-b border-transparent pb-1 transition-colors duration-300 group-hover:border-ink">
          {children}
        </span>
        <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
          <ArrowUpRightIcon className="h-3.5 w-3.5" />
        </span>
      </>
    );
    const textClasses = `group inline-flex items-center gap-2 text-text-primary transition-colors duration-300 ${className}`;
    return external ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={textClasses}>
        {content}
      </a>
    ) : (
      <Link href={href} className={textClasses}>
        {content}
      </Link>
    );
  }

  const content = (
    <>
      <span
        className={`inline-flex items-center rounded-full px-6 py-3.5 text-sm font-medium transition-colors duration-300 ${pillStyles[variant]}`}
      >
        {children}
      </span>
      <span
        className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-[transform,background-color,color] duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${circleStyles[variant]}`}
        aria-hidden
      >
        <ArrowUpRightIcon className="h-4 w-4" />
      </span>
    </>
  );

  const classes = `group inline-flex items-center gap-3 ${className}`;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
