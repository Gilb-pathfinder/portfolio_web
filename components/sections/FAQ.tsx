import { Container } from "@/components/ui/Container";
import { faqs } from "@/lib/content";

export function FAQ({ className = "" }: { className?: string }) {
  return (
    <section className={className} style={{ paddingBlock: "var(--section-y)" }}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-bg-alt px-5 py-2 text-sm font-medium text-text-secondary">
            FAQ
          </span>
          <h2 className="font-home-display text-h2 font-medium mt-6">Good to know</h2>
        </div>

        <div className="mx-auto mt-12 max-w-2xl divide-y divide-border border-y border-border">
          {faqs.map((item) => (
            <details key={item.q} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-text-primary">
                {item.q}
                <span className="shrink-0 text-text-muted transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-xl text-text-secondary">{item.a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
