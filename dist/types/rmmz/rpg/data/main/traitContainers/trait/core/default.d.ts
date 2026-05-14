export declare const LABEL_SET_TRAIT: {
    readonly title: "特徴";
    readonly options: {
        readonly regularParam: {
            readonly title: "基本能力値";
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
        readonly extraParam: {
            readonly title: "追加能力値";
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
        readonly specialParam: {
            readonly title: "特殊能力値";
            readonly format: "{name} * {value}%";
            readonly options: {
                readonly targetRate: "狙われ率";
                readonly guardEffectRate: "防御効果率";
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
        readonly specialFlag: {
            readonly title: "特殊フラグ";
            readonly format: "{name}";
            readonly options: {
                readonly autoBattle: "自動戦闘";
                readonly guard: "防御";
                readonly substitute: "身代わり";
                readonly preventEscape: "逃走防止";
            };
        };
        readonly collaps: {
            readonly title: "消滅エフェクト";
            readonly format: "{name}";
            readonly options: {
                readonly bossCollaps: "ボス崩壊";
                readonly instantCollaps: "即時崩壊";
                readonly noneCollaps: "崩壊なし";
            };
        };
        readonly partyAbility: {
            readonly title: "パーティ能力";
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
        readonly elementRate: {
            readonly title: "属性有効度";
            readonly format: "{name} * {value}%";
        };
        readonly debuffRate: {
            readonly title: "弱体有効度";
            readonly format: "{name} * {value}%";
        };
        readonly stateRate: {
            readonly title: "ステート有効度";
            readonly format: "{name} * {value}%";
        };
        readonly stateResist: {
            readonly title: "ステート無効";
            readonly format: "{name}";
        };
        readonly attackElement: {
            readonly title: "攻撃属性";
            readonly format: "{name}";
        };
        readonly attackState: {
            readonly title: "攻撃ステート";
            readonly format: "{name} + {value}%";
        };
        readonly attackSpeed: {
            readonly title: "攻撃速度補正";
            readonly format: "{value}";
        };
        readonly attackTimes: {
            readonly title: "攻撃追加回数";
            readonly format: "{value}";
        };
        readonly actionPlus: {
            readonly title: "行動追加";
            readonly format: "{name} * {value}%";
        };
        readonly attackSkill: {
            readonly title: "攻撃スキル";
            readonly format: "{name}";
        };
        readonly equipWeaponType: {
            readonly title: "装備武器タイプ";
            readonly format: "{name}";
        };
        readonly equipArmorType: {
            readonly title: "装備防具タイプ";
            readonly format: "{name}";
        };
        readonly equipLock: {
            readonly title: "装備固定";
            readonly format: "{name}";
        };
        readonly equipSeal: {
            readonly title: "装備封印";
            readonly format: "{name}";
        };
        readonly slotType: {
            readonly title: "スロットタイプ";
            readonly format: "{name}";
        };
        readonly skillAdd: {
            readonly title: "スキル追加";
            readonly format: "{name}";
        };
        readonly skillSeal: {
            readonly title: "スキルタイプ封印";
            readonly format: "{name}";
        };
        readonly skillTypeAdd: {
            readonly title: "スキルタイプ追加";
            readonly format: "{name}";
        };
        readonly skillTypeSeal: {
            readonly title: "スキルタイプ封印";
            readonly format: "{name}";
        };
    };
};
