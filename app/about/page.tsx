import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { Experience } from "@/components/sections/Experience";
import { CTA } from "@/components/sections/CTA";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/home/icons";
import { about, approach, education, expertise, heroStats, techStack, site } from "@/lib/content";

const socials = [
  { label: "GitHub", href: site.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
];

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

      {/* Profile — photo, contact details, portfolio links, quick stats */}
      <section>
        <Container>
          <Reveal>
            <div className="grid grid-cols-1 gap-10 border-t border-border py-12 md:grid-cols-12 md:items-center">
              <div className="md:col-span-3">
                <div className="relative mx-auto aspect-[4/5] w-full max-w-[220px] overflow-hidden rounded-2xl border border-border md:mx-0">
                  <Image
                    src="/images/my profile.jpg"
                    alt={site.name}
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="md:col-span-5">
                <dl className="space-y-4">
                  <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                    <dt className="font-mono text-meta uppercase text-text-muted">Email</dt>
                    <dd>
                      <a href={`mailto:${site.email}`} className="hover:text-text-primary">
                        {site.email}
                      </a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-border pb-4">
                    <dt className="font-mono text-meta uppercase text-text-muted">Phone</dt>
                    <dd>
                      <a href={`tel:${site.phone.replace(/\s+/g, "")}`}>{site.phone}</a>
                    </dd>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <dt className="font-mono text-meta uppercase text-text-muted">Based in</dt>
                    <dd>{site.address}</dd>
                  </div>
                </dl>

                <div className="mt-6 flex items-center gap-3">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border-strong text-text-secondary transition-colors duration-300 hover:border-ink hover:text-ink"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="md:col-span-4">
                <div className="grid grid-cols-3 gap-4">
                  {heroStats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-border p-4 text-center">
                      <p className="font-display text-h3">{stat.value}</p>
                      <p className="mt-1 text-xs leading-snug text-text-muted">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Marquee items={techStack} />

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
