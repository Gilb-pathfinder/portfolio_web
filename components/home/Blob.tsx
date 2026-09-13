export function Blob({
  className = "",
  tone = "dark",
}: {
  className?: string;
  tone?: "dark" | "light";
}) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        background: tone === "dark" ? "var(--gray-900)" : "var(--gray-200)",
        borderRadius: "68% 32% 61% 39% / 42% 68% 32% 58%",
      }}
      aria-hidden
    />
  );
}
