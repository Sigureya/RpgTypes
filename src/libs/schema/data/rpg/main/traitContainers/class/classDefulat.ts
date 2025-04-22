import type { DomainLabel } from "@RpgTypes/templates";
import type { ClassLabels } from "./classLabels";

export const LABELS_DATA_CLASS = {
  domainName: "職業",
  options: {
    params: "パラメータ",
    learnings: "習得スキル",
    expParams: "経験値パラメータ",
  },
} as const satisfies DomainLabel<ClassLabels>;
