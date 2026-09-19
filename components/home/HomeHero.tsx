import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Marquee } from "@/components/ui/Marquee";
import { PillButtonWithArrow } from "./PillButton";
import { StarRating } from "./icons";
import { heroStats, heroRating, roles, hero } from "@/lib/content";

export function HomeHero() {
  return (
    <>
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden pt-24 md:pt-16">
        <Image
          src="/backgrounds/hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black via-black/75 to-black/45" />

        <Container className="relative w-full py-16">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-6">
            <div className="md:col-span-7">
              <h1
                className="font-home-display text-h1 font-bold text-white"
                style={{ lineHeight: 0.92 }}
              >
                <span className="text-gray-300">{hero.greeting}</span>{" "}
                <span>{hero.role}.</span>
              </h1>
              <p
                className="mt-6 max-w-md text-gray-300"
                style={{ fontSize: "var(--fs-body-lg)" }}
              >
                {hero.description}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <PillButtonWithArrow href="#work" variant="inverted">
                  Get Started
                </PillButtonWithArrow>
                <PillButtonWithArrow href="#work" variant="outlineLight">
                  View Projects
                </PillButtonWithArrow>
              </div>
            </div>

            <div className="md:col-span-4 md:col-start-9">
              <div className="rounded-2xl bg-black/55 p-6 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-1">
                  {heroStats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-home-display text-h3 font-semibold text-white">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-sm text-gray-300">{stat.label}</p>
                    </div>
                  ))}
                  <div>
                    <StarRating starClassName="text-white" />
                    <p className="mt-1 text-sm text-gray-300">{heroRating.label}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Marquee items={roles} />
    </>
  );
}
