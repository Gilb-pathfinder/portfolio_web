import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { PillButtonWithArrow } from "./PillButton";
import { HeroCarousel } from "./HeroCarousel";
import { heroStats, roles, hero } from "@/lib/content";

const heroBackground = {
  backgroundImage: [
    "radial-gradient(55% 65% at 82% 42%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 62%)",
    "radial-gradient(40% 45% at 96% 92%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 65%)",
    "radial-gradient(45% 55% at 8% 10%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%)",
    "radial-gradient(70% 60% at 20% 105%, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0) 62%)",
    "linear-gradient(135deg, #050505 0%, #0a0a0a 38%, #0d0d0d 62%, #070707 100%)",
  ].join(", "),
};

const gridOverlay = {
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
  backgroundSize: "56px 56px",
  WebkitMaskImage: "radial-gradient(70% 70% at 60% 45%, #000 0%, transparent 75%)",
  maskImage: "radial-gradient(70% 70% at 60% 45%, #000 0%, transparent 75%)",
};

export function HomeHero() {
  return (
    <>
      <section
        className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 md:pt-24"
        style={heroBackground}
      >
        <div className="absolute inset-0 -z-10" style={gridOverlay} aria-hidden />

        <Container className="relative w-full">
          <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-6">
              <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 py-1.5 pl-4 pr-1.5 text-sm text-white backdrop-blur-sm">
                Open to new projects
                <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-ink">
                  Let&apos;s talk
                </span>
              </span>

              <h1
                className="mt-7 max-w-[12ch] text-5xl font-bold sm:text-6xl lg:text-7xl"
                style={{
                  lineHeight: 1.02,
                  letterSpacing: "-0.03em",
                  backgroundImage: "linear-gradient(100deg, #fcfcfd 0%, #fcfcfd 55%, #9a9a9a 100%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {hero.greeting} {hero.role}.
              </h1>

              <p className="mt-5 max-w-md text-lg text-white/75">{hero.description}</p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <PillButtonWithArrow href="#work" variant="accent">
                  Get Started
                </PillButtonWithArrow>
                <PillButtonWithArrow href="#work" variant="outlineLight">
                  View Projects
                </PillButtonWithArrow>
              </div>

              <div className="mt-12 max-w-md border-t border-white/10 pt-6">
                <div className="flex flex-wrap gap-x-8 gap-y-4">
                  {heroStats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-home-display text-2xl font-bold text-white">{stat.value}</p>
                      <p className="mt-0.5 text-xs text-white/55">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-span-6">
              <HeroCarousel />
            </div>
          </div>
        </Container>
      </section>

      <Marquee items={roles} />
    </>
  );
}
