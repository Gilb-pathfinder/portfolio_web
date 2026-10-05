export function CircleBadge({ text, size = 160 }: { text: string; size?: number }) {
  const pathId = "circle-badge-path";
  return (
    <div className="relative inline-block" style={{ width: size, height: size }} aria-hidden>
      <svg viewBox="0 0 200 200" width={size} height={size} className="animate-[spin_18s_linear_infinite] motion-reduce:animate-none">
        <defs>
          <path id={pathId} d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
        </defs>
        <text style={{ fontSize: 12, letterSpacing: "0.28em" }} className="fill-white uppercase">
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>
      <span
        className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent"
        style={{ width: size * 0.36, height: size * 0.36 }}
      >
        <span className="h-2.5 w-2.5 rounded-full bg-ink" />
      </span>
    </div>
  );
}
