import type { DomainLabel } from "@RpgTypes/schema";
import type { ClassLabels } from "./classLabels";

export const DEFAULT_CLASS_LABELS = {
  domainName: "職業",
  options: {
    params: "パラメータ",
    learnings: "習得スキル",
    expParams: "経験値パラメータ",
  },
} as const satisfies DomainLabel<ClassLabels>;
