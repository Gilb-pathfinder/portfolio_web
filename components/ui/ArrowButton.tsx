import Link from "next/link";
import { ReactNode } from "react";

type Variant = "solid" | "outline" | "text";

const base =
  "group inline-flex items-center gap-3 font-mono text-meta uppercase transition-colors duration-300";

const variants: Record<Variant, string> = {
  solid:
    "bg-ink text-white px-6 py-4 hover:bg-gray-800",
  outline:
    "border border-border-strong px-6 py-4 text-text-primary hover:border-ink",
  text: "text-text-primary border-b border-transparent hover:border-ink pb-1",
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
  const content = (
    <>
      <span>{children}</span>
      <span className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
        &#8599;
      </span>
    </>
  );

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
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
