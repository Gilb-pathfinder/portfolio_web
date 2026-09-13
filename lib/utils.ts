import type { CSSProperties } from "react";

/** Build a style object for arbitrary CSS custom properties (e.g. animation delays). */
export function cssVars(vars: Record<string, string | number>): CSSProperties {
  return vars as CSSProperties;
}
