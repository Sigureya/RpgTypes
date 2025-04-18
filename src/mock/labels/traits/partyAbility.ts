import type { DomainLabel, PartyAbilityOptionLabels } from "@RpgTypes/schema";
export const MockPartyAbility = {
  domainName: "パーティ能力",
  options: {
    cancelSurprise: "不意打ち無効",
    dropItemDouble: "アイテムドロップ2倍",
    encounterHalf: "エンカウント半減",
    encounterNone: "エンカウントなし",
    goldDouble: "ゴールド2倍",
    raisePreemptive: "先制攻撃率アップ",
  },
} as const satisfies DomainLabel<PartyAbilityOptionLabels>;
