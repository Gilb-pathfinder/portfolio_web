import { ArrowUpRightIcon } from "@/components/ui/icons";

export function ProjectVisual({
  title,
  index,
}: {
  title: string;
  index: string;
}) {
  const initials = title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="relative aspect-[4/3] w-full overflow-hidden border border-border bg-bg-alt transition-colors duration-500 group-hover:border-accent"
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 48px)",
      }}
    >
      <span className="absolute left-4 top-4 font-mono text-meta uppercase text-text-muted">
        {index}
      </span>
      <span
        className="font-display absolute -bottom-6 left-1/2 -translate-x-1/2 select-none text-[8rem] leading-none text-text-primary/[0.06] transition-transform duration-700 ease-out group-hover:scale-105 sm:text-[11rem]"
        aria-hidden
      >
        {initials}
      </span>
      <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 font-mono text-meta uppercase text-text-muted transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 sm:translate-x-2 sm:opacity-0">
        View project <ArrowUpRightIcon className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}
