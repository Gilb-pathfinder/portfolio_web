import Link from "next/link";
import { Project } from "@/lib/content";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <Link href={`/work/${project.id}`} className="group block">
      <ProjectVisual title={project.title} index={num} />
      <div className="mt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-h3 transition-transform duration-300 group-hover:translate-x-1">
            {project.title}
          </h3>
          <p className="mt-1 font-mono text-meta uppercase text-text-muted">
            {project.category} &middot; {project.year}
          </p>
        </div>
        <span className="mt-1 shrink-0 font-mono text-meta uppercase text-text-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
          &#8599;
        </span>
      </div>
    </Link>
  );
}
