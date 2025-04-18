import type { DomainLabel, ClassLabels } from "@RpgTypes/schema";

export const MockClassLables = {
  domainName: "職業",
  options: {
    params: "パラメータ",
    learnings: "習得スキル",
    expParams: "経験値パラメータ",
  },
} as const satisfies DomainLabel<ClassLabels>;
