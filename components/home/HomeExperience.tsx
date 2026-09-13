import { Container } from "@/components/ui/Container";
import { PillButton } from "./PillButton";
import { experience, homeCopy, site } from "@/lib/content";

export function HomeExperience() {
  return (
    <section style={{ paddingBlock: "var(--section-y)" }}>
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="font-home-display text-h1 font-medium">
              My <span className="font-semibold">Experiences</span>
            </h2>
            <p className="mt-4 max-w-xs text-text-secondary">
              {homeCopy.experienceBody}
            </p>
            <div className="mt-6">
              <PillButton href={`mailto:${site.email}?subject=CV%20request`} variant="solid" external>
                Download CV
              </PillButton>
            </div>
          </div>

          <div className="md:col-span-8">
            {experience.map((entry, i) => (
              <div
                key={entry.period + entry.organisation}
                className={`grid grid-cols-1 items-start gap-3 py-8 sm:grid-cols-12 sm:gap-6 ${
                  i > 0 ? "border-t border-border" : ""
                }`}
              >
                <div className="flex items-center gap-3 sm:col-span-4">
                  <p className="font-medium text-text-primary">{entry.period}</p>
                  <span
                    className="h-3 w-3 shrink-0 rounded-full border-2"
                    style={{ borderColor: "var(--gray-400)" }}
                    aria-hidden
                  />
                </div>
                <div className="sm:col-span-8">
                  <h3 className="font-home-display text-h3 font-medium">
                    {entry.role}
                    <span className="text-text-muted"> : {entry.organisation}</span>
                  </h3>
                  <p className="mt-2 max-w-md text-text-secondary">{entry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
