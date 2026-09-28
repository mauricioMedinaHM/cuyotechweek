import type { CSSProperties } from "react";

export function retraso(ms: string): CSSProperties {
  return { "--d": ms } as CSSProperties;
}
