import type { DomainLabel } from "@RpgTypes/templates";
import type { PartyAbilityOptionLabels } from "./partyAbility";

export const DEFAULT_PARTY_ABILITY_LABELS = {
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
