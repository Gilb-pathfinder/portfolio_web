import { Container } from "@/components/ui/Container";
import { PillButtonWithArrow } from "./PillButton";
import { ChevronIcon } from "./icons";
import { homeExpertise, homeCopy } from "@/lib/content";

export function HomeExpertise() {
  return (
    <section style={{ paddingBlock: "var(--section-y)" }}>
      <Container>
        <span className="inline-flex rounded-full bg-bg-alt px-5 py-2 text-sm font-medium text-text-secondary">
          {homeCopy.expertiseBadge}
        </span>
        <h2 className="font-home-display text-h1 font-medium mt-6 max-w-2xl">
          {homeCopy.expertiseHeading}
        </h2>

        <div className="mt-12 border-t border-border">
          {homeExpertise.map((item) => (
            <div
              key={item.index}
              className="group grid grid-cols-1 items-center gap-4 border-b border-border px-6 py-8 transition-colors duration-300 hover:bg-white/[0.06] sm:grid-cols-12 sm:px-8"
            >
              <div className="sm:col-span-4">
                <p className="font-home-display text-h3 font-medium text-text-primary transition-colors duration-300 group-hover:text-white">
                  <span className="mr-3 text-sm text-text-muted transition-colors duration-300 group-hover:text-gray-400">
                    {item.index}
                  </span>
                  {item.title}
                </p>
              </div>

              <div className="sm:col-span-5">
                <p className="text-sm text-text-secondary transition-colors duration-300 group-hover:text-gray-300">
                  {item.tagline}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-border-strong px-3 py-1 text-xs text-text-secondary transition-colors duration-300 group-hover:border-gray-600 group-hover:text-gray-300"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex justify-start sm:col-span-3 sm:justify-end">
                <div className="hidden group-hover:block">
                  <PillButtonWithArrow href="/contact" variant="inverted">
                    Let&apos;s Talk
                  </PillButtonWithArrow>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-text-secondary group-hover:hidden">
                  <ChevronIcon className="h-4 w-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
