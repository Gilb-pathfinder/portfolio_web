import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/content";

const socials = [
  { label: "GitHub", href: site.social.github },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Instagram", href: site.social.instagram },
];

export function CTA({
  index = "07",
  heading = (
    <>Have a project in mind? Let&apos;s build something worth shipping.</>
  ),
}: {
  index?: string;
  heading?: ReactNode;
}) {
  return (
    <section
      id="contact"
      className="bg-invert-bg text-invert-text"
      style={{ paddingBlock: "var(--section-y-cta)" }}
    >
      <Container>
        <Reveal>
          <p className="font-mono text-meta uppercase text-invert-text-muted">
            {index} / Contact
          </p>
          <h2 className="font-display text-h1 mt-6 max-w-2xl">{heading}</h2>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-col gap-8 border-t border-[color:var(--invert-border)] pt-10 sm:flex-row sm:items-end sm:justify-between">
            <a
              href={`mailto:${site.email}`}
              className="font-display text-h2 border-b border-transparent hover:border-invert-text transition-colors duration-300 break-all"
            >
              {site.email}
            </a>

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-meta uppercase text-invert-text-muted hover:text-invert-text transition-colors duration-300"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
