import type { SpecialFlagOptions, DomainLabel } from "@RpgTypes/schema";
export const MockSpecialFlagLabels = {
  domainName: "特殊フラグ",
  options: {
    autoBattle: "自動戦闘",
    guard: "防御",
    substitute: "身代わり",
    preventEscape: "逃走防止",
  },
} as const satisfies DomainLabel<SpecialFlagOptions>;
