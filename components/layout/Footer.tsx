import Link from "next/link";
import { nav, site } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/home/icons";

const contactItems = [
  { label: `Phone: ${site.phone}`, href: `tel:${site.phone.replace(/\s+/g, "")}` },
  { label: `Mail: ${site.email}`, href: `mailto:${site.email}` },
  { label: `Address: ${site.address}`, href: undefined },
];

const socials = [
  { label: "GitHub", href: site.social.github, Icon: GithubIcon },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-invert-bg text-invert-text">
      <Container className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-invert-text-muted transition-colors duration-300 hover:text-invert-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-invert-text-muted">
          {contactItems.map((item, i) => (
            <span key={item.label} className="flex items-center gap-6">
              {item.href ? (
                <a
                  href={item.href}
                  className="transition-colors duration-300 hover:text-invert-text"
                >
                  {item.label}
                </a>
              ) : (
                <span>{item.label}</span>
              )}
              {i < contactItems.length - 1 && (
                <span
                  className="hidden h-4 w-px sm:inline"
                  style={{ background: "var(--invert-border)" }}
                  aria-hidden
                />
              )}
            </span>
          ))}
        </div>
      </Container>

      <div className="border-t" style={{ borderColor: "var(--invert-border)" }}>
        <Container className="grid grid-cols-1 items-center gap-4 py-6 sm:grid-cols-3">
          <span className="text-sm text-invert-text justify-self-start">{site.name}</span>

          <span className="text-sm text-invert-text-muted text-center justify-self-center">
            Copyright &copy; {year} {site.name}. All rights reserved.
          </span>

          <div className="flex items-center gap-3 justify-self-start sm:justify-self-end">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border text-invert-text-muted transition-colors duration-300 hover:text-invert-text hover:border-[color:var(--invert-text)]"
                style={{ borderColor: "var(--invert-border)" }}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
