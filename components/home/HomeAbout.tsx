import { Container } from "@/components/ui/Container";
import { PillButton } from "./PillButton";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons";
import { homeAbout, site } from "@/lib/content";

const socials = [
  { label: "GitHub", href: site.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
];

export function HomeAbout() {
  return (
    <section id="about" style={{ paddingBlock: "var(--section-y)" }}>
      <Container>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
          <div className="flex justify-center md:col-span-4 md:justify-start">
            <div className="relative h-56 w-56 sm:h-64 sm:w-64">
              <div
                className="h-full w-full rounded-full border-2"
                style={{ background: "var(--gray-100)", borderColor: "var(--gray-400)" }}
              />
              <div
                className="absolute -bottom-4 -right-4 flex h-24 w-24 items-center justify-center p-4 text-center text-xs font-medium leading-tight text-white"
                style={{
                  background: "var(--gray-900)",
                  borderRadius: "62% 38% 55% 45% / 48% 42% 58% 52%",
                }}
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
              <PillButton href="/contact" variant="solid">
                Hire Me
              </PillButton>

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
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-text-secondary transition-colors duration-300 hover:border-ink hover:text-ink"
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
