import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { PillButtonWithArrow } from "./PillButton";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons";
import { homeAbout, site } from "@/lib/content";

const socials = [
  { label: "GitHub", href: site.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
];

export function HomeAbout() {
  return (
    <section id="about" className="border-t border-border" style={{ paddingBlock: "var(--section-y)" }}>
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="flex justify-center md:col-span-4 md:justify-start">
            <div className="relative h-56 w-56 sm:h-64 sm:w-64">
              <div className="relative h-full w-full overflow-hidden rounded-full border border-border-strong">
                <Image src="/images/my profile.jpg" alt={site.name} fill sizes="256px" className="object-cover" />
              </div>
              <div
                className="absolute -bottom-4 -right-4 flex h-24 w-24 items-center justify-center bg-accent p-4 text-center text-xs font-medium leading-tight text-ink"
                style={{ borderRadius: "62% 38% 55% 45% / 48% 42% 58% 52%" }}
              >
                {homeAbout.badge}
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <h2 className="font-home-display text-h1 font-medium">
              About <span className="font-semibold">Me</span>
            </h2>

            <div className="mt-6 space-y-5 max-w-2xl">
              {homeAbout.bio.map((paragraph, i) => (
                <p key={i} className="text-text-secondary">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-8">
              <PillButtonWithArrow href="/contact" variant="solid">
                Hire Me
              </PillButtonWithArrow>

              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-border-strong" aria-hidden />
                <span className="text-sm text-text-secondary">Follow Me</span>
                <div className="flex items-center gap-2">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-text-secondary transition-colors duration-300 hover:border-accent hover:text-accent"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
