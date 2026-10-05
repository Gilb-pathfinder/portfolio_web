import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CircleBadge } from "@/components/ui/CircleBadge";
import { PhoneIcon, MailIcon } from "@/components/ui/icons";
import { ContactForm } from "@/components/contact/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { site, whatsappLink, testimonials } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${site.name} about a software, UI/UX or design project.`,
};

const helpCards = [
  {
    Icon: PhoneIcon,
    title: "WhatsApp & Call",
    text: "The fastest way to reach me — send a short brief, a voice note, or just say hello.",
    link: "Chat on WhatsApp",
    href: whatsappLink("Hi Gilbert, I'd like to talk about a project."),
    external: true,
    sub: { label: site.phone, href: `tel:${site.phone.replace(/\s+/g, "")}` },
  },
  {
    Icon: MailIcon,
    title: "Send an Email",
    text: "Share documents, a brief, or anything that needs more detail than a chat.",
    link: site.email,
    href: `mailto:${site.email}`,
    external: false,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ───────── Hero ───────── */}
      <section className="relative overflow-hidden bg-invert-bg pb-16 pt-32 md:pt-40">
        <Container className="relative">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start">
            <div className="md:col-span-7">
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs uppercase tracking-wide text-white/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  {site.name} &middot; Kigali &middot; Rwanda
                </span>
                <h1 className="mt-6 max-w-xl text-4xl font-bold leading-[1.05] text-white sm:text-5xl">
                  Need help? I&apos;m here for you — let&apos;s talk.
                </h1>
              </Reveal>
            </div>
            <div className="hidden justify-end md:col-span-5 md:flex">
              <CircleBadge text={`${site.name} • Kigali • Rwanda •`} />
            </div>
          </div>
        </Container>
      </section>

      {/* ───────── Help cards ───────── */}
      <section style={{ paddingBlock: "var(--section-y)" }}>
        <Container>
          <Reveal>
            <div className="mx-auto max-w-xl text-center">
              <h2 className="font-display text-h2">Get Help Quickly</h2>
              <p className="mt-3 text-text-secondary">
                Choose the channel that suits you best — I reply within one working day.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
            {helpCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 100}>
                <div className="h-full rounded-2xl border border-border bg-surface p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                    <card.Icon className="h-6 w-6 text-ink" />
                  </span>
                  <h3 className="font-display text-h3 mt-6">{card.title}</h3>
                  <p className="mt-3 text-text-secondary">{card.text}</p>
                  <a
                    href={card.href}
                    target={card.external ? "_blank" : undefined}
                    rel={card.external ? "noopener noreferrer" : undefined}
                    className="mt-5 inline-block font-semibold text-text-primary underline decoration-border-strong underline-offset-4 hover:decoration-accent"
                  >
                    {card.link}
                  </a>
                  {card.sub && (
                    <a href={card.sub.href} className="mt-1 block text-text-secondary hover:text-text-primary">
                      {card.sub.label}
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-10 text-center text-sm text-text-muted">
              Usually available Monday – Saturday, East Africa Time.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ───────── Message form ───────── */}
      <section className="bg-invert-bg" style={{ paddingBlock: "var(--section-y)" }}>
        <Container>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Reveal>
                <p className="font-mono text-meta uppercase text-accent">Get in touch</p>
                <h2 className="font-display text-h2 mt-4 text-white">
                  Tell me about your project
                </h2>
              </Reveal>

              <Reveal delay={100}>
                <div className="mt-10 space-y-4">
                  <p className="text-sm text-white/50">What people say after working together</p>
                  {testimonials.slice(0, 2).map((t) => (
                    <div key={t.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
                      <p className="text-sm text-white/75">&ldquo;{t.quote}&rdquo;</p>
                      <p className="mt-3 text-sm font-semibold text-white">
                        {t.name} <span className="font-normal text-white/50">&middot; {t.title}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="md:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <FAQ />
    </>
  );
}
