import type { DomainLabel, RegularParamLabels } from "@RpgTypes/schema";

export const DEFAULT_PARAMREGULAR_LABELS = {
  domainName: "基本能力値",
  options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運",
  },
} as const satisfies DomainLabel<RegularParamLabels>;
