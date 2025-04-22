export declare const LABELS_TRAIT_ELEMENT_RATE: {
    readonly domainName: "属性有効度";
    readonly format: "{name} * {value}%";
};
export declare const LABELS_TRAIT_DEBUFF_RATE: {
    readonly domainName: "弱体有効度";
    readonly format: "{name} * {value}%";
};
export declare const LABELS_TRAIT_STATE_RATE: {
    readonly domainName: "ステート有効度";
    readonly format: "{name} * {value}%";
};
export declare const LABELS_TRAIT_STATE_RESIST: {
    readonly domainName: "ステート無効";
    readonly format: "{name}";
};
export declare const LABELS_PARAM_REGULAR: {
    readonly domainName: "基本能力値";
    readonly format: "{name} * {value}%";
    readonly options: {
        readonly maxHp: "最大HP";
        readonly maxMp: "最大MP";
        readonly atk: "攻撃力";
        readonly def: "防御力";
        readonly matk: "魔法攻撃力";
        readonly mdef: "魔法防御力";
        readonly agi: "敏捷性";
        readonly luk: "運";
    };
};
export declare const LABELS_EXTRA_PARAM: {
    readonly domainName: "追加能力値";
    readonly format: "{name} + {value}%";
    readonly options: {
        readonly hitRate: "命中率";
        readonly evasionRate: "回避率";
        readonly criticalRate: "クリティカル率";
        readonly criticalEvasionRate: "クリティカル回避率";
        readonly magicEvasionRate: "魔法回避率";
        readonly magicReflectionRate: "魔法反射率";
        readonly counterAttackRate: "反撃率";
        readonly hpRegenerationRate: "HP再生率";
        readonly mpRegenerationRate: "MP再生率";
        readonly tpRegenerationRate: "TP再生率";
    };
};
export declare const LABELS_PARAM_SPECIAL: {
    readonly domainName: "特殊能力値";
    readonly format: "{name} * {value}%";
    readonly options: {
        readonly targetRate: "狙われ率";
        readonly guradEffectRate: "防御効果率";
        readonly recoveryEffectRate: "回復効果率";
        readonly pharmacology: "薬の知識";
        readonly mpCostRate: "MP消費率";
        readonly tpChargeRate: "TPチャージ率";
        readonly physicalDamageRate: "物理ダメージ率";
        readonly magicDamageRate: "魔法ダメージ率";
        readonly floorDamageRate: "床ダメージ率";
        readonly experienceRate: "経験値率";
    };
};
export declare const LABELS_TRAIT_ATTACK_ELEMENT: {
    readonly domainName: "攻撃属性";
    readonly format: "{name}";
};
export declare const LABELS_TRAIT_ATTACK_STATE: {
    readonly domainName: "攻撃ステート";
    readonly format: "{name} + {value}%";
};
export declare const LABELS_TRAIT_ATTACK_SPEED: {
    readonly domainName: "攻撃速度補正";
    readonly format: "{value}";
};
export declare const LABELS_TRAIT_ATTACK_TIMES: {
    readonly domainName: "攻撃追加回数";
    readonly format: "{value}";
};
export declare const LABELS_TRAIT_ACTION_PLUS: {
    readonly domainName: "行動追加";
    readonly format: "{name} * {value}%";
};
export declare const LABELS_TRAIT_ATTACK_SKILL: {
    readonly domainName: "攻撃スキル";
    readonly format: "{name}";
};
export declare const LABELS_EQUIP_WTYPE: {
    readonly domainName: "装備武器タイプ";
    readonly format: "{name}";
};
export declare const LABELS_TRAIT_EQUIP_ATYPE: {
    readonly domainName: "装備防具タイプ";
    readonly format: "{name}";
};
export declare const LABELS_TRAIT_EQUIP_LOCK: {
    readonly domainName: "装備固定";
    readonly format: "{name}";
};
export declare const LABELS_TRAIT_EQUIP_SEAL: {
    readonly domainName: "装備封印";
    readonly format: "{name}";
};
export declare const LABELS_TRAIT_SLOT_TYPE: {
    readonly domainName: "スロットタイプ";
    readonly format: "{name}";
};
export declare const LABELS_TRAIT_SKILL_ADD: {
    readonly domainName: "スキル追加";
    readonly format: "{name}";
};
export declare const LABELS_TRAIT_SKILL_SEAL: {
    readonly domainName: "スキル封印";
    readonly format: "{name}";
};
export declare const LABELS_TRAIT_SKILL_TYPE_ADD: {
    readonly domainName: "スキルタイプ追加";
    readonly format: "{name}";
};
export declare const LABELS_TRAIT_SKILL_TYPE_SEAL: {
    readonly domainName: "スキルタイプ封印";
    readonly format: "{name}";
};
export declare const LABELS_TRAIT_SPECIALFLAG: {
    readonly domainName: "特殊フラグ";
    readonly format: "{name}";
    readonly options: {
        readonly autoBattle: "自動戦闘";
        readonly guard: "防御";
        readonly substitute: "身代わり";
        readonly preventEscape: "逃走防止";
    };
};
export declare const LABELS_COLLAPS: {
    readonly domainName: "消滅エフェクト";
    readonly format: "{name}";
    readonly options: {
        readonly bossCollaps: "ボス崩壊";
        readonly instantCollaps: "即時崩壊";
        readonly noneCollaps: "崩壊なし";
    };
};
export declare const LABELS_PARTY_ABILITY: {
    readonly domainName: "パーティ能力";
    readonly format: "{name}";
    readonly options: {
        readonly cancelSurprise: "不意打ち無効";
        readonly dropItemDouble: "アイテムドロップ2倍";
        readonly encounterHalf: "エンカウント半減";
        readonly encounterNone: "エンカウントなし";
        readonly goldDouble: "ゴールド2倍";
        readonly raisePreemptive: "先制攻撃率アップ";
    };
};
