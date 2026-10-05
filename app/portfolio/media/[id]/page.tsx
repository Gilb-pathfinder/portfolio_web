import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { ArrowUpRightIcon } from "@/components/ui/icons";
import { describe, graphicProjects } from "@/lib/content";

export function generateStaticParams() {
  return graphicProjects.map((g) => ({ id: g.id }));
}

export async function generateMetadata(props: PageProps<"/portfolio/media/[id]">): Promise<Metadata> {
  const { id } = await props.params;
  const item = graphicProjects.find((g) => g.id === id);
  if (!item) return {};
  return { title: item.title, description: describe(item) };
}

export default async function MediaPage(props: PageProps<"/portfolio/media/[id]">) {
  const { id } = await props.params;
  const index = graphicProjects.findIndex((g) => g.id === id);
  if (index === -1) notFound();

  const item = graphicProjects[index];
  const prev = graphicProjects[(index - 1 + graphicProjects.length) % graphicProjects.length];
  const next = graphicProjects[(index + 1) % graphicProjects.length];

  return (
    <section className="pt-28 md:pt-36" style={{ paddingBottom: "var(--section-y)" }}>
      <Container>
        <Link href="/portfolio" className="text-sm uppercase tracking-wide text-text-muted hover:text-text-primary">
          ← All portfolio
        </Link>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-surface">
              {item.media.kind === "video" ? (
                <video className="block max-h-[80vh] w-full bg-black" src={item.media.src} controls playsInline preload="metadata" />
              ) : (
                <div className="relative aspect-[4/5] max-h-[80vh] w-full sm:aspect-[3/4]">
                  <Image
                    src={item.media.src}
                    alt={item.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 66vw, 100vw"
                    className="object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          <aside className="lg:col-span-4">
            <p className="text-sm uppercase tracking-wide text-text-muted">{item.category}</p>
            <h1 className="font-home-display text-h2 mt-3 font-bold">{item.title}</h1>
            <p className="mt-5 text-text-secondary">{describe(item)}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.tags.map((t) => (
                <span key={t} className="rounded-full border border-border-strong px-3 py-1 text-xs text-text-secondary">
                  {t}
                </span>
              ))}
            </div>

            {item.media.kind === "image" && (
              <a
                href={item.media.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 text-sm text-text-primary underline decoration-border-strong underline-offset-4 hover:decoration-accent"
              >
                Open full resolution
                <ArrowUpRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            )}

            <div className="mt-12 grid grid-cols-2 gap-4 border-t border-border pt-8">
              <Link href={`/portfolio/media/${prev.id}`} className="text-sm text-text-secondary hover:text-text-primary">
                ← {prev.title}
              </Link>
              <Link href={`/portfolio/media/${next.id}`} className="text-right text-sm text-text-secondary hover:text-text-primary">
                {next.title} →
              </Link>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
