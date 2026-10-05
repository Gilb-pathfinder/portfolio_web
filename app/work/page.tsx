import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { GraphicCard } from "@/components/work/GraphicCard";
import { graphicProjects, projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "A collection of software, interface and visual design work by Gilbert Mugisha.",
};

export default function WorkPage() {
  const [featured, ...rest] = projects;

  return (
    <section className="pt-28 md:pt-36" style={{ paddingBottom: "var(--section-y)" }}>
      <Container>
        <Reveal>
          <p className="text-sm uppercase tracking-wide text-text-muted">Work</p>
          <h1 className="font-home-display text-h1 mt-3 max-w-2xl font-bold">
            Selected software, UI/UX and graphic design work.
          </h1>
          <p className="mt-5 max-w-lg text-text-secondary">
            Software builds first, with the interface and visual design work that sits alongside them.
          </p>
        </Reveal>

        <div className="mt-14">
          <p className="text-sm uppercase tracking-wide text-text-muted">Software</p>
          <h2 className="font-home-display text-h2 mt-2 font-bold">Software projects</h2>
        </div>
        <div className="mt-8 space-y-6">
          {featured && (
            <Reveal>
              <div className="rounded-2xl border border-border bg-surface p-6 sm:p-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
                  <div className="order-2 md:order-1">
                    <div className="flex flex-col gap-6 justify-between h-full">
                      <div>
                        <p className="text-xs uppercase tracking-wide text-text-muted">
                          {featured.category} &middot; {featured.year}
                        </p>
                        <h2 className="font-home-display text-2xl font-semibold text-text-primary mt-3">
                          {featured.title}
                        </h2>
                        <p className="mt-4 text-text-secondary max-w-md">{featured.description}</p>
                        <div className="mt-6 flex flex-wrap gap-2">
                          {featured.tech.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-border-strong px-3 py-1 text-xs text-text-secondary"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                      <Link href={`/work/${featured.id}`} className="group inline-flex items-center gap-3 w-fit">
                        <span className="inline-flex items-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-ink transition-colors group-hover:bg-white">
                          View Project
                        </span>
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-ink transition-[transform,background-color] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:bg-white">
                          <ArrowUpRightIcon className="h-4 w-4" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="order-1 md:order-2">
                    <ProjectVisual title={featured.title} index="01" image={featured.image?.card} />
                  </div>
                </div>
              </div>
            </Reveal>
          )}

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {rest.map((p, i) => (
              <Reveal key={p.id} delay={i * 100}>
                <div className="h-full rounded-2xl border border-border bg-surface p-6 sm:p-8">
                  <ProjectVisual title={p.title} index={String(i + 2).padStart(2, "0")} image={p.image?.card} />
                  <h3 className="font-home-display text-xl font-semibold text-text-primary mt-6">{p.title}</h3>
                  <p className="mt-3 text-text-secondary">{p.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="rounded-full border border-border-strong px-3 py-1 text-xs text-text-secondary">
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/work/${p.id}`}
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-text-primary"
                  >
                    View Project
                    <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div className="mt-24">
          <p className="text-sm uppercase tracking-wide text-text-muted">Graphic Design</p>
          <h2 className="font-home-display text-h2 mt-2 font-bold">Flyers, posters, campaigns and video</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {graphicProjects.map((item, i) => (
              <Reveal key={item.id} delay={i * 100}>
                <GraphicCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
