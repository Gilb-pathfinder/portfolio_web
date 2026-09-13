import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { PillButton } from "./PillButton";
import { Blob } from "./Blob";
import { StarRating } from "./icons";
import { heroStats, heroRating, roles, hero } from "@/lib/content";

export function HomeHero() {
  return (
    <section className="relative pt-32 md:pt-40">
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-6">
          <div className="md:col-span-6">
            <h1 className="font-home-display text-h1 font-medium">
              <span className="text-text-secondary">{hero.greeting}</span>{" "}
              <span className="font-semibold">{hero.role}.</span>
            </h1>
            <p
              className="mt-6 max-w-md text-text-secondary"
              style={{ fontSize: "var(--fs-body-lg)" }}
            >
              {hero.description}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PillButton href="#work" variant="solid">
                Get Started
              </PillButton>
              <PillButton href="#work" variant="outline">
                View Projects
              </PillButton>
            </div>
          </div>

          <div className="flex items-center justify-center md:col-span-3">
            <div className="relative h-56 w-56 sm:h-64 sm:w-64">
              <Blob tone="light" className="inset-2 translate-x-6 translate-y-6" />
              <Blob tone="dark" className="inset-6" />
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-1">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-home-display text-h3 font-semibold">{stat.value}</p>
                  <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
                </div>
              ))}
              <div>
                <StarRating />
                <p className="mt-1 text-sm text-text-secondary">{heroRating.label}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="mt-14 md:mt-20">
        <Marquee items={roles} />
      </div>
    </section>
  );
}
