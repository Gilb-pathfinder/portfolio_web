import Image from "next/image";
import { ArrowUpRightIcon } from "@/components/ui/icons";

export function ProjectVisual({
  title,
  index,
  image,
}: {
  title: string;
  index: string;
  image?: string;
}) {
  const initials = title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-border bg-bg-alt transition-colors duration-500 group-hover:border-accent">
      {image ? (
        <Image
          src={image}
          alt={`${title} screenshot`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 48px), repeating-linear-gradient(90deg, var(--border) 0, var(--border) 1px, transparent 1px, transparent 48px)",
          }}
        >
          <span
            className="font-home-display absolute -bottom-6 left-1/2 -translate-x-1/2 select-none text-[8rem] leading-none text-text-primary/[0.06] transition-transform duration-700 ease-out group-hover:scale-105 sm:text-[11rem]"
            aria-hidden
          >
            {initials}
          </span>
        </div>
      )}
      <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
        {index}
      </span>
      <span className="absolute bottom-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
        View project <ArrowUpRightIcon className="h-3.5 w-3.5" />
      </span>
    </div>
  );
}
