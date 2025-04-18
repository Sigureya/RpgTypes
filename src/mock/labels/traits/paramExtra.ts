import type { DomainLabel, ExtraParamLabels } from "@RpgTypes/schema";

export const MockParamExtra = {
  domainName: "追加能力値",
  options: {
    hitRate: "命中率",
    evasionRate: "回避率",
    criticalRate: "クリティカル率",
    criticalEvasionRate: "クリティカル回避率",
    magicEvasionRate: "魔法回避率",
    magicReflectionRate: "魔法反射率",
    counterAttackRate: "反撃率",
    hpRegenerationRate: "HP再生率",
    mpRegenerationRate: "MP再生率",
    tpRegenerationRate: "TP再生率",
  },
} as const satisfies DomainLabel<ExtraParamLabels>;
