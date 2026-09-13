import { ReactNode } from "react";
import { Container } from "./Container";
import { SectionLabel } from "./SectionLabel";
import { Reveal } from "./Reveal";

export function PageHeader({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className="pt-36 pb-16 md:pt-44 md:pb-20">
      <Container>
        <Reveal>
          <SectionLabel index={index} label={label} />
          <h1 className="font-display text-display mt-6 max-w-3xl">{title}</h1>
          {description ? (
            <p className="mt-6 max-w-lg text-body-lg text-text-secondary" style={{ fontSize: "var(--fs-body-lg)" }}>
              {description}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </div>
  );
}
