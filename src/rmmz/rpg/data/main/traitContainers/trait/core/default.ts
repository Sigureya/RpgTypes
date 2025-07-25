import type { DomainLabel } from "src/libs/templates";
import type {
  CollapsOptionLabels,
  ExtraParamLabels,
  PartyAbilityOptionLabels,
  RegularParamLabels,
  SpecialFlagOptions,
  SpecialParamLabels,
  RawTraitLabel,
  TraitLabelWithOption,
} from "./items";
import type { TraitLabelSet } from "./labelSet";

const FORMAT_NAME = "{name}" as const;
const FORMAT_PARAM_RATE_MUL = "{name} * {value}%" as const;
const FORMAT_PARAM_RATE_PLUS = "{name} + {value}%" as const;
const FORMAT_PARAM_VALUE = "{value}" as const;

export const LABEL_SET_TRAIT = {
  title: "特徴",
  options: {
    regularParam: {
      title: "基本能力値",
      format: FORMAT_PARAM_RATE_MUL,
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
    } as const satisfies TraitLabelWithOption<RegularParamLabels>,
    extraParam: {
      title: "追加能力値",
      format: FORMAT_PARAM_RATE_PLUS,
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
    } as const satisfies TraitLabelWithOption<ExtraParamLabels>,
    specialParam: {
      title: "特殊能力値",
      format: FORMAT_PARAM_RATE_MUL,
      options: {
        targetRate: "狙われ率",
        guardEffectRate: "防御効果率",
        recoveryEffectRate: "回復効果率",
        pharmacology: "薬の知識",
        mpCostRate: "MP消費率",
        tpChargeRate: "TPチャージ率",
        physicalDamageRate: "物理ダメージ率",
        magicDamageRate: "魔法ダメージ率",
        floorDamageRate: "床ダメージ率",
        experienceRate: "経験値率",
      },
    } as const satisfies TraitLabelWithOption<SpecialParamLabels>,
    specialFlag: {
      title: "特殊フラグ",
      format: FORMAT_NAME,
      options: {
        autoBattle: "自動戦闘",
        guard: "防御",
        substitute: "身代わり",
        preventEscape: "逃走防止",
      },
    } as const satisfies TraitLabelWithOption<SpecialFlagOptions>,
    collaps: {
      title: "消滅エフェクト",
      format: FORMAT_NAME,
      options: {
        bossCollaps: "ボス崩壊",
        instantCollaps: "即時崩壊",
        noneCollaps: "崩壊なし",
      },
    } as const satisfies TraitLabelWithOption<CollapsOptionLabels>,
    partyAbility: {
      title: "パーティ能力",
      format: FORMAT_NAME,
      options: {
        cancelSurprise: "不意打ち無効",
        dropItemDouble: "アイテムドロップ2倍",
        encounterHalf: "エンカウント半減",
        encounterNone: "エンカウントなし",
        goldDouble: "ゴールド2倍",
        raisePreemptive: "先制攻撃率アップ",
      },
    } as const satisfies TraitLabelWithOption<PartyAbilityOptionLabels>,
    elementRate: {
      title: "属性有効度",
      format: FORMAT_PARAM_RATE_MUL,
    } as const satisfies RawTraitLabel,
    debuffRate: {
      title: "弱体有効度",
      format: FORMAT_PARAM_RATE_MUL,
    } as const satisfies RawTraitLabel,
    stateRate: {
      title: "ステート有効度",
      format: FORMAT_PARAM_RATE_MUL,
    } as const satisfies RawTraitLabel,
    stateResist: {
      title: "ステート無効",
      format: FORMAT_NAME,
    } as const satisfies RawTraitLabel,
    attackElement: {
      title: "攻撃属性",
      format: FORMAT_NAME,
    } as const satisfies RawTraitLabel,
    attackState: {
      title: "攻撃ステート",
      format: FORMAT_PARAM_RATE_PLUS,
    } as const satisfies RawTraitLabel,
    attackSpeed: {
      title: "攻撃速度補正",
      format: FORMAT_PARAM_VALUE,
    } as const satisfies RawTraitLabel,
    attackTimes: {
      title: "攻撃追加回数",
      format: FORMAT_PARAM_VALUE,
    } as const satisfies RawTraitLabel,
    actionPlus: {
      title: "行動追加",
      format: FORMAT_PARAM_RATE_MUL,
    } as const satisfies RawTraitLabel,
    attackSkill: {
      title: "攻撃スキル",
      format: FORMAT_NAME,
    } as const satisfies RawTraitLabel,
    equipWeaponType: {
      title: "装備武器タイプ",
      format: FORMAT_NAME,
    } as const satisfies RawTraitLabel,
    equipArmorType: {
      title: "装備防具タイプ",
      format: FORMAT_NAME,
    } as const satisfies RawTraitLabel,
    equipLock: {
      title: "装備固定",
      format: FORMAT_NAME,
    } as const satisfies RawTraitLabel,
    equipSeal: {
      title: "装備封印",
      format: FORMAT_NAME,
    } as const satisfies RawTraitLabel,
    slotType: {
      title: "スロットタイプ",
      format: FORMAT_NAME,
    } as const satisfies RawTraitLabel,
    skillAdd: {
      title: "スキル追加",
      format: FORMAT_NAME,
    } as const satisfies RawTraitLabel,
    skillSeal: {
      title: "スキルタイプ封印",
      format: FORMAT_NAME,
    } as const satisfies RawTraitLabel,
    skillTypeAdd: {
      title: "スキルタイプ追加",
      format: FORMAT_NAME,
    } as const satisfies RawTraitLabel,
    skillTypeSeal: {
      title: "スキルタイプ封印",
      format: FORMAT_NAME,
    } as const satisfies RawTraitLabel,
  },
} as const satisfies DomainLabel<TraitLabelSet>;
