import type { DomainLabel } from "@RpgTypes/templates";
import type { ItemEffectTypeLabels } from "./itemEffectLabels";

export const DEFAULT_ITEM_EFFECT_LABELS = {
  domainName: "使用効果",
  options: {
    recoverHp: "HP回復",
    recoverMp: "MP回復",
    gainTp: "TP獲得",
    addState: "状態異常付与",
    removeState: "状態異常解除",
    addBuff: "バフ付与",
    addDebuff: "デバフ付与",
    removeBuff: "バフ解除",
    removeDebuff: "デバフ解除",
    special: "特殊効果",
    grow: "成長効果",
    learnSkill: "スキル習得",
  },
} as const satisfies DomainLabel<ItemEffectTypeLabels>;
