export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-border">
      <div className="marquee-track py-5">
        {loop.map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="font-mono text-meta uppercase text-text-secondary px-6">
              {item}
            </span>
            <span className="text-border-strong">&#10022;</span>
          </div>
        ))}
      </div>
    </div>
  );
}
