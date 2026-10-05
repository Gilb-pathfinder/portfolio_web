import { Container } from "@/components/ui/Container";
import { PillButtonWithArrow } from "./PillButton";
import { HomeProjectCard } from "./HomeProjectCard";
import { projects, homeCopy } from "@/lib/content";

export function HomeProjects() {
  return (
    <section id="work" style={{ paddingBlock: "var(--section-y)" }}>
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <span className="inline-flex w-fit rounded-full bg-bg-alt px-5 py-2 text-sm font-medium text-text-secondary">
            {homeCopy.projectsBadge}
          </span>
          <h2 className="font-home-display text-h2 font-medium">
            {homeCopy.projectsHeading}
          </h2>
        </div>

        <div className="mt-12 space-y-8">
          {projects.map((project) => (
            <HomeProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <PillButtonWithArrow href="/portfolio" variant="outline">
            View All
          </PillButtonWithArrow>
        </div>
      </Container>
    </section>
  );
}
