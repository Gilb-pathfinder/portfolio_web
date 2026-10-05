import { ReactNode } from "react";

export function DashCard({
  title,
  children,
  className = "",
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-border bg-surface p-6 sm:p-7 ${className}`}>
      {title && (
        <>
          <h2 className="font-home-display text-lg font-semibold text-text-primary">{title}</h2>
          <span className="mt-2 block h-px w-16 bg-accent" aria-hidden />
        </>
      )}
      <div className={title ? "mt-6" : ""}>{children}</div>
    </div>
  );
}
