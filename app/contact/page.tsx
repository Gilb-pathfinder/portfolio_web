import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about a software, UI/UX or design project.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        index="—"
        label="Contact"
        title="Have a project in mind? Let's build something meaningful."
        description="Whether it's a full product build or a design pass on something existing — tell me what you're working on."
      />

      <section style={{ paddingBlock: "0 var(--section-y)" }}>
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-4">
              <Reveal>
                <SectionLabel index="01" label="Direct" />
                <a
                  href={`mailto:${site.email}`}
                  className="font-display text-h3 mt-4 block break-all border-b border-transparent hover:border-ink transition-colors duration-300"
                >
                  {site.email}
                </a>

                <div className="mt-10 flex flex-col gap-3">
                  <a
                    href={site.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-meta uppercase text-text-secondary hover:text-text-primary transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={site.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-meta uppercase text-text-secondary hover:text-text-primary transition-colors duration-300"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-meta uppercase text-text-secondary hover:text-text-primary transition-colors duration-300"
                  >
                    Instagram
                  </a>
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-8">
              <Reveal>
                <SectionLabel index="02" label="Message" />
              </Reveal>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
