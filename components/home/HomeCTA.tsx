import { Container } from "@/components/ui/Container";
import { PillButtonWithArrow } from "./PillButton";
import { homeCopy } from "@/lib/content";

export function HomeCTA() {
  return (
    <section id="contact" className="bg-invert-bg text-invert-text" style={{ paddingBlock: "var(--section-y-cta)" }}>
      <Container>
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-home-display text-h1 font-medium max-w-md">
              {homeCopy.ctaHeading}
            </h2>
            <p className="mt-3 max-w-sm text-invert-text-muted">{homeCopy.ctaBody}</p>
          </div>

          <PillButtonWithArrow href="/contact" variant="inverted">
            Contact
          </PillButtonWithArrow>
        </div>
      </Container>
    </section>
  );
}
