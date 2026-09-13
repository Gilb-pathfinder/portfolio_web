export function SectionLabel({
  index,
  label,
  invert = false,
}: {
  index: string;
  label: string;
  invert?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-meta uppercase ${
        invert ? "text-invert-text-muted" : "text-text-muted"
      }`}
    >
      <span>{index}</span>
      <span
        className={`h-px w-8 ${
          invert ? "bg-[color:var(--invert-border)]" : "bg-border-strong"
        }`}
      />
      <span>{label}</span>
    </div>
  );
}
