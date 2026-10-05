"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { GraphicCategory, GraphicItem, graphicCategories, graphicProjects } from "@/lib/content";
import { ArrowUpRightIcon } from "@/components/ui/icons";

const PER_SLIDE = 4;
const INTERVAL = 5000;

function chunk<T>(list: T[], size: number): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size));
  return out;
}

function Card({ item }: { item: GraphicItem }) {
  return (
    <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface">
      <div className="relative aspect-[4/5] w-full bg-bg-alt">
        {item.media.kind === "video" ? (
          <video className="absolute inset-0 h-full w-full object-cover" src={item.media.src} controls preload="metadata" playsInline />
        ) : (
          <Image src={item.media.src} alt={item.title} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover" />
        )}
      </div>
      <figcaption className="flex flex-1 flex-col gap-2 p-4">
        <p className="font-home-display text-base font-semibold text-text-primary">{item.title}</p>
        {item.description && <p className="text-sm text-text-secondary">{item.description}</p>}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {item.tags.map((t) => (
            <span key={t} className="rounded-full border border-border-strong px-2.5 py-0.5 text-[11px] text-text-secondary">
              {t}
            </span>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}

export function GraphicCarousel() {
  const availableCategories = useMemo(() => {
    const used = new Set(graphicProjects.map((g) => g.category));
    return graphicCategories.filter((c) => c.value === "all" || used.has(c.value as GraphicCategory));
  }, []);

  const [filter, setFilter] = useState<GraphicCategory | "all">("all");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const items = useMemo(
    () => (filter === "all" ? graphicProjects : graphicProjects.filter((g) => g.category === filter)),
    [filter]
  );
  const slides = useMemo(() => chunk(items, PER_SLIDE), [items]);
  const count = slides.length;

  const next = useCallback(() => setIndex((i) => (count ? (i + 1) % count : 0)), [count]);
  const prev = useCallback(() => setIndex((i) => (count ? (i - 1 + count) % count : 0)), [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = window.setInterval(next, INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, count, next]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="flex flex-wrap gap-2">
        {availableCategories.map((c) => (
          <button
            key={c.value}
            type="button"
            onClick={() => {
              setFilter(c.value);
              setIndex(0);
            }}
            aria-pressed={filter === c.value}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              filter === c.value
                ? "border-accent bg-accent text-ink"
                : "border-border-strong text-text-secondary hover:border-accent hover:text-text-primary"
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="relative mt-8 overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, si) => (
            <div key={si} className="grid w-full shrink-0 grid-cols-2 gap-4 lg:grid-cols-4" aria-hidden={si !== index}>
              {slide.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {count > 1 && (
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-text-primary transition-colors hover:border-accent"
          >
            <ArrowUpRightIcon className="h-4 w-4 rotate-[225deg]" />
          </button>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-6 bg-accent" : "w-2 bg-white/25"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            aria-label="Next"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-text-primary transition-colors hover:border-accent"
          >
            <ArrowUpRightIcon className="h-4 w-4 rotate-45" />
          </button>
        </div>
      )}
    </div>
  );
}
