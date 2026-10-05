"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { projects, site } from "@/lib/content";

const INTERVAL = 4200;

type Slide =
  | { kind: "profile"; title: string; caption: string; href: string }
  | { kind: "project"; id: string; title: string; tech: string[]; href: string };

const slides: Slide[] = [
  { kind: "profile", title: site.name, caption: "Software Developer", href: "/about" },
  ...projects.map((p): Slide => ({ kind: "project", id: p.id, title: p.title, tech: p.tech, href: `/work/${p.id}` })),
];

/** Where a card sits relative to the active one: 0 = front, ±1 = tilted neighbours. */
function offsetOf(i: number, active: number, n: number) {
  let d = (i - active + n) % n;
  if (d > n / 2) d -= n;
  return d;
}

function initialsOf(title: string) {
  return title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

const posStyle: Record<string, string> = {
  "0": "translate-x-0 translate-y-0 rotate-0 scale-100 opacity-100 z-30",
  "-1": "-translate-x-[58%] translate-y-3 -rotate-6 scale-[0.82] opacity-100 z-20 brightness-[0.55]",
  "1": "translate-x-[58%] translate-y-3 rotate-6 scale-[0.82] opacity-100 z-20 brightness-[0.55]",
  far: "scale-[0.6] opacity-0 z-10",
};

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const n = slides.length;

  const go = useCallback((step: number) => setActive((a) => (a + step + n) % n), [n]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (paused || reduced) return;
    const id = window.setInterval(() => go(1), INTERVAL);
    return () => window.clearInterval(id);
  }, [paused, reduced, go]);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Gilbert Mugisha — selected work"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative h-[420px] sm:h-[460px]">
        {slides.map((slide, i) => {
          const pos = offsetOf(i, active, n);
          const isFront = pos === 0;
          const visible = Math.abs(pos) <= 1;
          const key = Math.abs(pos) > 1 ? "far" : String(pos);

          return (
            <div
              key={slide.kind === "profile" ? "profile" : slide.id}
              aria-hidden={!visible}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} / ${n}: ${slide.title}`}
              className={`absolute left-1/2 top-1/2 h-[340px] w-[260px] -ml-[130px] -mt-[170px] overflow-hidden rounded-[1.4rem] border border-white/10 bg-invert-surface shadow-[0_40px_80px_rgba(0,0,0,0.55)] transition-all duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-[380px] sm:w-[290px] sm:-ml-[145px] sm:-mt-[190px] ${posStyle[key]}`}
            >
              {slide.kind === "profile" ? (
                <Image
                  src="/images/my profile.jpg"
                  alt={slide.title}
                  fill
                  priority
                  sizes="290px"
                  className="object-cover"
                />
              ) : (
                <>
                  <div
                    className="absolute inset-0 opacity-[0.08]"
                    style={{
                      backgroundImage:
                        "repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 1px, transparent 32px)",
                    }}
                  />
                  <span
                    className="font-home-display absolute inset-0 flex select-none items-center justify-center text-[7rem] font-bold text-white/[0.06]"
                    aria-hidden
                  >
                    {initialsOf(slide.title)}
                  </span>
                </>
              )}

              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/90" />

              <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
                {String(i + 1).padStart(2, "0")}
              </span>

              {isFront ? (
                <Link
                  href={slide.href}
                  aria-label={slide.kind === "profile" ? "About Gilbert Mugisha" : `View project: ${slide.title}`}
                  tabIndex={visible ? 0 : -1}
                  className="absolute left-1/2 top-[44%] -ml-8 -mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-accent shadow-[0_0_0_8px_rgba(255,255,255,0.12)] transition-colors hover:bg-white"
                >
                  <ArrowUpRightIcon className="h-6 w-6 text-ink" />
                </Link>
              ) : (
                <button
                  type="button"
                  aria-label={slide.title}
                  tabIndex={visible ? 0 : -1}
                  onClick={() => go(pos)}
                  className="absolute inset-0 z-20 bg-transparent"
                />
              )}

              <div className="absolute inset-x-5 bottom-5">
                <h3 className="font-home-display text-xl font-semibold text-white">{slide.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {slide.kind === "profile" ? (
                    <span className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] text-white/85">
                      {slide.caption}
                    </span>
                  ) : (
                    slide.tech.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/20 bg-black/40 px-2.5 py-1 text-[11px] text-white/85"
                      >
                        {t}
                      </span>
                    ))
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-invert-surface text-white transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowUpRightIcon className="h-4 w-4 rotate-[225deg]" />
        </button>

        <div role="tablist" className="flex gap-1.5">
          {slides.map((slide, i) => (
            <button
              key={slide.kind === "profile" ? "profile" : slide.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={slide.title}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-accent" : "w-2 bg-white/25"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-invert-surface text-white transition-colors hover:border-accent hover:text-accent"
        >
          <ArrowUpRightIcon className="h-4 w-4 rotate-45" />
        </button>
      </div>
    </div>
  );
}
