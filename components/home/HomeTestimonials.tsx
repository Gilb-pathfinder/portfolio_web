import { Container } from "@/components/ui/Container";
import { PillButtonWithArrow } from "./PillButton";
import { QuoteIcon, StarRating } from "./icons";
import { testimonials, homeCopy } from "@/lib/content";

function TestimonialCard({
  quote,
  name,
  title,
}: {
  quote: string;
  name: string;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-8">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-ink">
        <QuoteIcon className="h-4 w-4" />
      </span>
      <p className="mt-5 text-text-secondary">{quote}</p>
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="h-10 w-10 rounded-full bg-white/10" aria-hidden />
          <div>
            <p className="font-medium text-text-primary">{name}</p>
            <p className="text-sm text-text-muted">{title}</p>
          </div>
        </div>
        <StarRating starClassName="text-accent" />
      </div>
    </div>
  );
}

export function HomeTestimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section style={{ paddingBlock: "var(--section-y)" }}>
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-home-display text-h1 font-medium max-w-xs">
              {homeCopy.feedbackHeading}
            </h2>
            <p className="mt-4 max-w-xs text-text-secondary">{homeCopy.feedbackBody}</p>
            <div className="mt-6">
              <PillButtonWithArrow href="/work" variant="solid">
                See All Feedback
              </PillButtonWithArrow>
            </div>
          </div>

          <div className="md:col-span-8">
            <TestimonialCard {...featured} />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
          {rest.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </Container>
    </section>
  );
}
