import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Experience } from "@/components/sections/Experience";
import { CTA } from "@/components/sections/CTA";
import { about, approach, education, expertise, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — software developer, UI/UX designer and graphic designer.`,
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        index="—"
        label="About"
        title={`${site.role}, based in ${site.location}.`}
        description="Software first — with the design instinct to know what a good interface should feel like before a line of code is written."
      />

      {/* 01 — Bio */}
      <section style={{ paddingBlock: "var(--section-y)" }}>
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <SectionLabel index="01" label="Biography" />
              </Reveal>
            </div>
            <div className="md:col-span-8 space-y-6">
              {about.bio.map((paragraph, i) => (
                <Reveal key={i} delay={i * 100}>
                  <p className="font-display text-h3 max-w-2xl">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 02 — Skills */}
      <section className="border-t border-border" style={{ paddingBlock: "var(--section-y)" }}>
        <Container>
          <Reveal>
            <SectionLabel index="02" label="Skills" />
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
            {expertise.map((item, i) => (
              <Reveal key={item.index} delay={i * 100}>
                <div className="border-t border-border pt-6">
                  <p className="font-mono text-meta uppercase text-text-muted">
                    {item.index}
                  </p>
                  <h3 className="font-display text-h3 mt-3">{item.title}</h3>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <li
                        key={tool}
                        className="border border-border px-3 py-1.5 font-mono text-meta uppercase text-text-secondary"
                      >
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* 03 — Experience */}
      <div className="border-t border-border">
        <Experience index="03" />
      </div>

      {/* 04 — Education */}
      <section className="border-t border-border" style={{ paddingBlock: "var(--section-y)" }}>
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <SectionLabel index="04" label="Education" />
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <Reveal>
                {education.length > 0 ? (
                  <ul>
                    {education.map((entry) => (
                      <li
                        key={entry.title}
                        className="border-t border-border py-6 last:border-b"
                      >
                        <p className="font-mono text-meta uppercase text-text-muted">
                          {entry.period}
                        </p>
                        <h3 className="font-display text-h3 mt-2">
                          {entry.title}
                        </h3>
                        <p className="mt-1 text-text-secondary">
                          {entry.institution}
                        </p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="border border-dashed border-border-strong p-8 text-text-secondary">
                    Education details to be added.
                  </p>
                )}
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* 05 — Approach */}
      <section className="border-t border-border" style={{ paddingBlock: "var(--section-y)" }}>
        <Container>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <SectionLabel index="05" label="Approach" />
                <h2 className="font-display text-h1 mt-4 max-w-sm">
                  How I work
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-8">
              <ol>
                {approach.map((line, i) => (
                  <Reveal key={i} delay={i * 100}>
                    <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-border py-6 last:border-b">
                      <span className="font-mono text-meta uppercase text-text-muted">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="max-w-xl text-text-secondary">{line}</p>
                    </li>
                  </Reveal>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      <CTA index="06" />
    </>
  );
}
