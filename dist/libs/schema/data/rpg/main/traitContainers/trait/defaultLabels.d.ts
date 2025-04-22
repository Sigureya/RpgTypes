export declare const DEFAULT_TRAIT_LABELS: {
    readonly collaps: {
        readonly domainName: "消滅エフェクト";
        readonly format: "{name}";
        readonly options: {
            readonly bossCollaps: "ボス崩壊";
            readonly instantCollaps: "即時崩壊";
            readonly noneCollaps: "崩壊なし";
        };
    };
    readonly paramRegular: {
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
    readonly paramSpecial: {
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
    readonly partyAbility: {
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
    readonly specialFlag: {
        readonly domainName: "特殊フラグ";
        readonly format: "{name}";
        readonly options: {
            readonly autoBattle: "自動戦闘";
            readonly guard: "防御";
            readonly substitute: "身代わり";
            readonly preventEscape: "逃走防止";
        };
    };
    readonly extraParam: {
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
};
