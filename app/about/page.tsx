import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { DashCard } from "@/components/about/DashCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { PhoneIcon, MailIcon, PinIcon, ArrowUpRightIcon } from "@/components/ui/icons";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/home/icons";
import {
  about,
  certificates,
  education,
  experience,
  expertise,
  heroStats,
  projects,
  site,
  techStack,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${site.name} — software developer, UI/UX designer and graphic designer.`,
};

const portfolioLinks = [
  { label: "GitHub", href: site.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
];

const allSkills = Array.from(new Set(expertise.flatMap((e) => e.tools)));

export default function AboutPage() {
  return (
    <section className="pt-28 md:pt-36" style={{ paddingBottom: "var(--section-y)" }}>
      <Container>
        <Reveal>
          <p className="text-sm uppercase tracking-wide text-text-muted">About</p>
          <h1 className="font-home-display text-h1 mt-3 max-w-2xl font-bold">
            Software Developer, with design skills in UI/UX and graphic design.
          </h1>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-12">
          {/* ───────── Sidebar ───────── */}
          <div className="space-y-6 md:col-span-4">
            <Reveal>
              <DashCard>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                  <Image src="/images/my profile.jpg" alt={site.name} fill sizes="320px" className="object-cover" />
                </div>
                <h3 className="font-home-display text-xl font-semibold text-text-primary mt-6">{site.name}</h3>
                <p className="mt-1 text-text-muted">{site.role}</p>
                <span className="mt-5 block h-px w-16 bg-accent" />

                <ul className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <PhoneIcon className="h-5 w-5 shrink-0 text-text-muted" />
                    <div>
                      <p className="text-sm text-text-muted">Phone</p>
                      <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="text-text-primary">
                        {site.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MailIcon className="h-5 w-5 shrink-0 text-text-muted" />
                    <div>
                      <p className="text-sm text-text-muted">Email</p>
                      <a href={`mailto:${site.email}`} className="text-text-primary break-all">
                        {site.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <PinIcon className="h-5 w-5 shrink-0 text-text-muted" />
                    <div>
                      <p className="text-sm text-text-muted">Based in</p>
                      <p className="text-text-primary">{site.address}</p>
                    </div>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${site.email}?subject=CV%20request`}
                    className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-white"
                  >
                    Request CV
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-border-strong px-5 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent"
                  >
                    Contact Now
                  </Link>
                </div>
              </DashCard>
            </Reveal>

            <Reveal delay={80}>
              <DashCard title="Tech Stack">
                <div className="flex flex-wrap gap-2">
                  {techStack.map((t) => (
                    <span key={t} className="rounded-full border border-border-strong px-3 py-1.5 text-xs text-text-secondary">
                      {t}
                    </span>
                  ))}
                </div>
              </DashCard>
            </Reveal>

            <Reveal delay={120}>
              <DashCard title="Portfolio Links">
                <ul className="space-y-3">
                  {portfolioLinks.map(({ label, href, Icon }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-xl border border-border px-4 py-3 transition-colors hover:border-accent"
                      >
                        <span className="flex items-center gap-3">
                          <Icon className="h-4 w-4 text-text-muted" />
                          <span className="text-text-primary">{label}</span>
                        </span>
                        <ArrowUpRightIcon className="h-3.5 w-3.5 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                      </a>
                    </li>
                  ))}
                </ul>
              </DashCard>
            </Reveal>
          </div>

          {/* ───────── Main ───────── */}
          <div className="space-y-6 md:col-span-8">
            <Reveal>
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-border bg-surface p-5 sm:p-7">
                    <p className="font-home-display text-3xl font-bold text-text-primary sm:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs leading-snug text-text-muted sm:text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={60}>
              <DashCard title="Biography">
                <div className="space-y-4">
                  {about.bio.map((p, i) => (
                    <p key={i} className="text-text-secondary">
                      {p}
                    </p>
                  ))}
                </div>
              </DashCard>
            </Reveal>

            <Reveal delay={100}>
              <DashCard title="Education">
                {education.length > 0 ? (
                  <ul className="space-y-7">
                    {education.map((entry) => (
                      <li key={entry.title}>
                        <span className="inline-flex rounded-full border border-border bg-bg-alt px-3 py-1 text-xs text-text-muted">
                          {entry.period}
                        </span>
                        <h3 className="font-home-display text-lg font-medium text-text-primary mt-3">
                          {entry.title}
                        </h3>
                        <p className="text-text-muted">{entry.institution}</p>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-text-muted">Education details to be added.</p>
                )}
              </DashCard>
            </Reveal>

            <Reveal delay={120}>
              <DashCard title="Certificates">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {certificates.map((c) => (
                    <a
                      key={c.image}
                      href={c.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block overflow-hidden rounded-xl border border-border transition-colors hover:border-accent"
                    >
                      <div className="relative aspect-[4/3] w-full bg-bg-alt">
                        <Image
                          src={c.image}
                          alt={`${c.title} certificate`}
                          fill
                          sizes="(min-width: 640px) 50vw, 100vw"
                          className="object-contain p-2 transition-transform duration-500 group-hover:scale-[1.02]"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-home-display text-base font-semibold text-text-primary">{c.title}</h3>
                        <p className="mt-1 text-sm text-text-muted">{c.issuer}</p>
                        {c.date && <p className="mt-2 text-xs text-text-muted">{c.date}</p>}
                      </div>
                    </a>
                  ))}
                </div>
              </DashCard>
            </Reveal>

            <Reveal delay={140}>
              <DashCard title="Experience">
                <div className="space-y-5">
                  {experience.map((entry) => (
                    <div key={entry.period + entry.organisation} className="rounded-xl border border-border p-6">
                      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-border pb-5">
                        <div>
                          <h3 className="font-home-display text-lg font-medium text-text-primary">{entry.role}</h3>
                          <p className="mt-1 text-text-muted">{entry.organisation}</p>
                        </div>
                        <span className="rounded-full border border-border bg-bg-alt px-3 py-1 text-xs text-text-muted">
                          {entry.period}
                        </span>
                      </div>
                      <p className="mt-5 text-text-secondary">{entry.description}</p>
                    </div>
                  ))}
                </div>
              </DashCard>
            </Reveal>

            <Reveal delay={180}>
              <DashCard title="Skills">
                <div className="flex flex-wrap gap-2">
                  {allSkills.map((s) => (
                    <span key={s} className="rounded-full border border-border-strong px-4 py-2 text-sm text-text-secondary">
                      {s}
                    </span>
                  ))}
                </div>
              </DashCard>
            </Reveal>

            <Reveal delay={220}>
              <DashCard title="Projects">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  {projects.map((p) => (
                    <Link
                      key={p.id}
                      href={`/portfolio/${p.id}`}
                      className="group rounded-xl border border-border p-5 transition-colors hover:border-accent"
                    >
                      <p className="text-xs uppercase tracking-wide text-text-muted">{p.category}</p>
                      <h3 className="font-home-display text-base font-semibold text-text-primary mt-2">
                        {p.title}
                      </h3>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm text-text-secondary">
                        View project
                        <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center justify-center rounded-full border border-border-strong px-6 py-2.5 text-sm font-medium text-text-primary transition-colors hover:border-accent"
                  >
                    View More
                  </Link>
                </div>
              </DashCard>
            </Reveal>

            <Reveal delay={260}>
              <DashCard title="Get In Touch">
                <ContactForm />
              </DashCard>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
