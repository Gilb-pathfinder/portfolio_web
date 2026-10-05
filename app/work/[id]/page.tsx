import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowButton } from "@/components/ui/ArrowButton";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { ProjectVisual } from "@/components/work/ProjectVisual";
import { projects } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata(
  props: PageProps<"/work/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage(props: PageProps<"/work/[id]">) {
  const { id } = await props.params;
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <div className="pt-36 md:pt-44">
        <Container>
          <Reveal>
            <Link
              href="/work"
              className="font-mono text-meta uppercase text-text-muted hover:text-text-primary transition-colors duration-300"
            >
              &#8592; All Work
            </Link>

            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <SectionLabel index={String(index + 1).padStart(2, "0")} label={project.category} />
                <h1 className="font-display text-h1 mt-4 max-w-2xl">{project.title}</h1>
              </div>
              <div className="flex gap-8 font-mono text-meta uppercase text-text-muted">
                <div>
                  <p className="text-text-primary">{project.year}</p>
                  <p>Year</p>
                </div>
                <div>
                  <p className="text-text-primary">{project.role}</p>
                  <p>Role</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12">
              <ProjectVisual title={project.title} index={String(index + 1).padStart(2, "0")} image={project.image?.full} />
            </div>
          </Reveal>
        </Container>
      </div>

      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12" style={{ paddingBlock: "var(--section-y)" }}>
          <div className="md:col-span-4">
            <Reveal>
              <SectionLabel index="—" label="Overview" />
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <p className="font-display text-h3 max-w-2xl">{project.description}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <li
                    key={t}
                    className="border border-border px-3 py-1.5 font-mono text-meta uppercase text-text-secondary"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={100}>
              <div className="mt-12 border border-dashed border-border-strong p-8">
                <p className="font-mono text-meta uppercase text-text-muted">
                  Full case study
                </p>
                <p className="mt-3 max-w-md text-text-secondary">
                  A detailed write-up of the challenge, approach and technical
                  implementation behind {project.title} is in progress and
                  will be added here.
                </p>
              </div>
            </Reveal>

            {project.links?.live || project.links?.github ? (
              <Reveal delay={160}>
                <div className="mt-10 flex flex-wrap gap-4">
                  {project.links?.live ? (
                    <ArrowButton href={project.links.live} variant="solid" external>
                      Live Project
                    </ArrowButton>
                  ) : null}
                  {project.links?.github ? (
                    <ArrowButton href={project.links.github} variant="outline" external>
                      Source
                    </ArrowButton>
                  ) : null}
                </div>
              </Reveal>
            ) : null}
          </div>
        </div>
      </Container>

      <div className="border-t border-border">
        <Container>
          <Link
            href={`/work/${next.id}`}
            className="group flex items-center justify-between py-16"
          >
            <div>
              <p className="font-mono text-meta uppercase text-text-muted">
                Next Project
              </p>
              <p className="font-display text-h2 mt-2 transition-transform duration-300 group-hover:translate-x-2">
                {next.title}
              </p>
            </div>
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRightIcon className="h-5 w-5" />
            </span>
          </Link>
        </Container>
      </div>
    </>
  );
}
