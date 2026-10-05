import Link from "next/link";
import { Project } from "@/lib/content";

function MockPanel({ title }: { title: string }) {
  const initials = title
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-bg-alt">
      <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--gray-300)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--gray-300)" }} />
        <span className="h-2.5 w-2.5 rounded-full" style={{ background: "var(--gray-300)" }} />
      </div>
      <div className="relative flex aspect-[16/11] items-center justify-center">
        <span className="font-home-display select-none text-[6rem] font-semibold text-text-primary/[0.08]">
          {initials}
        </span>
      </div>
    </div>
  );
}

export function HomeProjectCard({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-1 items-center gap-8 rounded-2xl border border-border p-6 sm:p-8 md:grid-cols-2 md:gap-10">
      <div>
        <h3 className="font-home-display text-h3 font-semibold">{project.title}</h3>
        <p className="mt-3 max-w-sm text-text-secondary">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-border-strong px-3 py-1 text-xs text-text-secondary"
            >
              {t}
            </li>
          ))}
        </ul>
        <Link
          href={`/work/${project.id}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-text-primary underline decoration-border-strong underline-offset-4 hover:decoration-accent"
        >
          View project
        </Link>
      </div>

      <MockPanel title={project.title} />
    </div>
  );
}
