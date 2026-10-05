import Image from "next/image";
import { GraphicItem } from "@/lib/content";

export function GraphicCard({ item }: { item: GraphicItem }) {
  return (
    <div className="h-full overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative aspect-[4/3] w-full bg-bg-alt">
        {item.media.kind === "video" ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={item.media.src}
            poster={item.media.poster}
            controls
            preload="metadata"
            playsInline
          />
        ) : (
          <Image
            src={item.media.src}
            alt={item.title}
            fill
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        )}
      </div>
      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap gap-2">
          {item.tags.map((t) => (
            <span key={t} className="rounded-full border border-border-strong px-3 py-1 text-xs text-text-secondary">
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-home-display text-xl font-semibold text-text-primary mt-4">{item.title}</h3>
        <p className="mt-3 text-text-secondary">{item.description}</p>
      </div>
    </div>
  );
}
