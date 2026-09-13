import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/ui/PageHeader";
import { PortfolioGrid } from "@/components/work/PortfolioGrid";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description:
    "A collection of software, interface and visual design work by Gilbert Mugisha.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        index="01"
        label="Work"
        title="Selected work."
        description="Software builds first, with the interface and visual design work that sits alongside them."
      />
      <Container>
        <div style={{ paddingBottom: "var(--section-y)" }}>
          <PortfolioGrid projects={projects} />
        </div>
      </Container>
    </>
  );
}
