import type { DomainLabel } from "@RpgTypes/templates";
import type { EffectLabelDefinition, ItemEffectLabelSet } from "./types";

const FORMAT_GROW = "{name} + {value1}" as const;
const FORMAT_STATE = "{name} {value1}%" as const;
const FORMAT_RECOVER = "{value1}% + {value2}" as const;
const FORMAT_ADD_BUFF = "{name} {value1}ターン" as const;
const FORMAT_NAME = "{name}" as const;

export const LABEL_SET_ITEM_EFFECT = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: FORMAT_ADD_BUFF,
    } as const satisfies EffectLabelDefinition,
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: FORMAT_ADD_BUFF,
    } as const satisfies EffectLabelDefinition,
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: FORMAT_RECOVER,
    } as const satisfies EffectLabelDefinition,
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: FORMAT_GROW,
    } as const satisfies EffectLabelDefinition,
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: FORMAT_NAME,
    } as const satisfies EffectLabelDefinition,
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: FORMAT_RECOVER,
    } as const satisfies EffectLabelDefinition,
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: FORMAT_RECOVER,
    } as const satisfies EffectLabelDefinition,
    removeBuff: {
      desc: "バフを解除する",
      domainName: "バフ解除",
      format: FORMAT_NAME,
    } as const satisfies EffectLabelDefinition,
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: FORMAT_NAME,
    } as const satisfies EffectLabelDefinition,
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: FORMAT_STATE,
    } as const satisfies EffectLabelDefinition,
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: FORMAT_NAME,
    } as const satisfies EffectLabelDefinition,
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: FORMAT_STATE,
    } as const satisfies EffectLabelDefinition,
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: FORMAT_NAME,
    } as const satisfies EffectLabelDefinition,
  },
} as const satisfies DomainLabel<ItemEffectLabelSet>;
