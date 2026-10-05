import Image from "next/image";
import { site, techStack } from "@/lib/content";

export function HeroComposition() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[460px] sm:h-[600px]">
      {/* back panel */}
      <div className="absolute right-0 top-0 h-[78%] w-[62%] rounded-[1.6rem] border border-white/10 bg-gradient-to-b from-white/[0.10] to-white/[0.02]" />
      {/* soft circle */}
      <div className="absolute -bottom-6 right-6 h-40 w-40 rounded-full border border-white/10 bg-white/[0.04]" />

      {/* main photo card */}
      <div className="absolute left-1/2 top-[10%] h-[74%] w-[70%] -translate-x-1/2 overflow-hidden rounded-[1.8rem] border border-white/15 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.7)]">
        <Image src="/images/my profile.jpg" alt={site.name} fill priority sizes="(min-width: 640px) 320px, 70vw" className="object-cover object-top" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5 pt-16">
          <p className="font-home-display text-lg font-semibold text-white">{site.name}</p>
          <p className="text-xs text-white/70">{site.role}</p>
        </div>
      </div>

      {/* top-left role chip */}
      <div className="absolute left-0 top-[14%] flex items-center gap-2 rounded-full border border-white/15 bg-black/70 py-2 pl-2 pr-4 text-sm text-white shadow-lg backdrop-blur-md">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent">
          <span className="h-2 w-2 rounded-full bg-ink" />
        </span>
        Software Development
      </div>

      {/* right square stack card */}
      <div className="absolute right-[2%] top-[44%] w-40 rounded-2xl border border-white/15 bg-black/80 p-4 shadow-xl backdrop-blur-md">
        <p className="text-[11px] uppercase tracking-wide text-white/50">Stack</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {techStack.slice(0, 4).map((t) => (
            <span key={t} className="rounded-full border border-white/20 px-2 py-0.5 text-[11px] text-white/85">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* bottom-left card */}
      <div className="absolute -bottom-[2%] left-[2%] w-48 rounded-2xl border border-white/15 bg-white/[0.07] p-4 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/20">
            <Image src="/images/my profile.jpg" alt="" fill sizes="48px" className="object-cover object-top" />
          </div>
          <div>
            <p className="text-xs font-semibold text-white">UI/UX &amp; Graphic</p>
            <p className="text-[11px] text-white/60">Design skills</p>
          </div>
        </div>
        <div className="mt-4 flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        </div>
        <span className="mt-4 block rounded-full bg-accent py-2 text-center text-xs font-medium text-ink">
          Open to work
        </span>
      </div>
    </div>
  );
}
