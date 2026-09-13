import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { Reveal } from "@/components/ui/Reveal";
import { experience, site } from "@/lib/content";

export function Experience({ index = "05" }: { index?: string }) {
  return (
    <section style={{ paddingBlock: "var(--section-y)" }}>
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <Reveal>
              <SectionLabel index={index} label="Experience" />
              <h2 className="font-display text-h1 mt-4 max-w-sm">
                Where I&apos;ve worked
              </h2>
              <p className="mt-4 max-w-xs text-text-secondary">
                Across a range of industries, with an appetite for new and
                challenging work.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-8">
            {experience.map((entry, i) => (
              <Reveal key={entry.period + entry.organisation} delay={i * 80}>
                <div className="grid grid-cols-1 gap-2 border-t border-border py-8 last:border-b sm:grid-cols-12 sm:gap-6">
                  <p className="font-mono text-meta uppercase text-text-muted sm:col-span-3">
                    {entry.period}
                  </p>
                  <div className="sm:col-span-9">
                    <h3 className="font-display text-h3">
                      {entry.role}
                      <span className="text-text-muted"> &middot; {entry.organisation}</span>
                    </h3>
                    <p className="mt-2 max-w-md text-text-secondary">
                      {entry.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={experience.length * 80}>
              <div className="pt-8">
                <ArrowButton
                  href={`mailto:${site.email}?subject=CV%20request`}
                  variant="outline"
                  external
                >
                  Request CV
                </ArrowButton>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
