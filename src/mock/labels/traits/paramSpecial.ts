import type { DomainLabel, SpecialParamLabels } from "@RpgTypes/schema";

export const MockParamSpecialLabels = {
  domainName: "特殊能力値",
  options: {
    targetRate: "狙われ率",
    guradEffectRate: "防御効果率",
    recoveryEffectRate: "回復効果率",
    pharmacology: "薬の知識",
    mpCostRate: "MP消費率",
    tpChargeRate: "TPチャージ率",
    physicalDamageRate: "物理ダメージ率",
    magicDamageRate: "魔法ダメージ率",
    floorDamageRate: "床ダメージ率",
    experienceRate: "経験値率",
  },
} as const satisfies DomainLabel<SpecialParamLabels>;
