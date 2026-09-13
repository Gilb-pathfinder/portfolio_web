"use client";

import { useMemo, useState } from "react";
import { Project, projectFilters } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";
import { Reveal } from "@/components/ui/Reveal";

export function PortfolioGrid({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<(typeof projectFilters)[number]["value"]>("all");

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.group === filter)),
    [projects, filter]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-3 border-b border-border pb-8">
        {projectFilters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setFilter(f.value)}
            className={`font-mono text-meta uppercase px-4 py-2 border transition-colors duration-300 ${
              filter === f.value
                ? "border-ink bg-ink text-white"
                : "border-border-strong text-text-secondary hover:border-ink hover:text-text-primary"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={(i % 2) * 80}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      ) : (
        <p className="mt-16 text-text-secondary">
          More work in this category is on its way — check back soon.
        </p>
      )}
    </div>
  );
}
