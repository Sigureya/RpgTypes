export declare const MockLabelRegistry: {
    readonly rpg: {
        readonly actor: {
            readonly domainName: "アクター";
            readonly options: {
                readonly initialEquipments: "初期装備";
                readonly faceImage: "顔画像";
                readonly characterImage: "キャラクター画像";
                readonly svBattlerImage: "SVバトラー画像";
                readonly nickname: "ニックネーム";
                readonly profile: "プロフィール";
                readonly classId: "職業ID";
                readonly initialLevel: "初期レベル";
                readonly maxLevel: "最大レベル";
            };
        };
        readonly armor: {
            readonly domainName: "防具";
            readonly options: {
                readonly armorTypeId: "防具タイプID";
                readonly slotTypeId: "スロットタイプID";
            };
        };
        readonly skill: {
            readonly domainName: "スキル";
            readonly options: {
                readonly requiredWeaponTypeId1: "必要武器タイプ1";
                readonly requiredWeaponTypeId2: "必要武器タイプ2";
                readonly mpCost: "MP消費";
                readonly tpCost: "TP消費";
            };
        };
        readonly damage: {
            readonly domainName: "ダメージ";
            readonly options: {};
        };
        readonly item: {
            readonly domainName: "アイテム";
            readonly options: {
                readonly consumable: "消耗品";
            };
        };
        readonly weapon: {
            readonly domainName: "武器";
            readonly options: {
                readonly weaponTypeId: "武器タイプID";
            };
        };
        readonly enemy: {
            readonly domainName: "敵キャラ";
            readonly options: {
                readonly dropItems: "ドロップアイテム";
                readonly battlerHue: "バトラーヒュー";
                readonly battlerName: "バトラー名";
                readonly gold: "ゴールド";
            };
        };
        readonly state: {
            readonly domainName: "ステート";
            readonly options: {
                readonly restriction: "制約";
                readonly priority: "優先度";
                readonly motion: "モーション";
                readonly overlay: "オーバーレイ";
                readonly removeAtBattleEnd: "戦闘終了時解除";
                readonly removeByRestriction: "制約による解除";
                readonly autoRemovalTiming: "自動解除タイミング";
                readonly minTurns: "最小ターン数";
                readonly maxTurns: "最大ターン数";
                readonly removeByDamage: "ダメージによる解除";
                readonly chanceByDamage: "ダメージによる解除確率";
                readonly removeByWalking: "歩行による解除";
                readonly stepsToRemove: "解除までの歩数";
            };
        };
        readonly paramSpecial: {
            readonly domainName: "特殊能力値";
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
        readonly paramRegular: {
            readonly domainName: "基本能力値";
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
        readonly paramExtra: {
            readonly domainName: "追加能力値";
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
        readonly collaps: {
            readonly domainName: "消滅エフェクト";
            readonly options: {
                readonly bossCollaps: "ボス崩壊";
                readonly instantCollaps: "即時崩壊";
                readonly noneCollaps: "崩壊なし";
            };
        };
        readonly specialFlag: {
            readonly domainName: "特殊フラグ";
            readonly options: {
                readonly autoBattle: "自動戦闘";
                readonly guard: "防御";
                readonly substitute: "身代わり";
                readonly preventEscape: "逃走防止";
            };
        };
        readonly partyAbility: {
            readonly domainName: "パーティ能力";
            readonly options: {
                readonly cancelSurprise: "不意打ち無効";
                readonly dropItemDouble: "アイテムドロップ2倍";
                readonly encounterHalf: "エンカウント半減";
                readonly encounterNone: "エンカウントなし";
                readonly goldDouble: "ゴールド2倍";
                readonly raisePreemptive: "先制攻撃率アップ";
            };
        };
        readonly class: {
            readonly domainName: "職業";
            readonly options: {
                readonly params: "パラメータ";
                readonly learnings: "習得スキル";
                readonly expParams: "経験値パラメータ";
            };
        };
        readonly usableItem: {
            readonly domainName: "";
            readonly options: {
                readonly scope: "範囲";
                readonly speed: "速度補正";
                readonly successRate: "成功率";
            };
        };
    };
    readonly global: {
        readonly id: "識別子";
        readonly name: "名前";
        readonly note: "メモ";
        readonly description: "説明";
        readonly iconIndex: "アイコンインデックス";
        readonly occasion: "使用タイミング";
        readonly params: "パラメータ";
        readonly repeats: "繰り返し回数";
        readonly scope: "範囲";
        readonly speed: "速度補正";
        readonly successRate: "成功率";
        readonly animationId: "アニメーションID";
        readonly displayType: "表示タイプ";
        readonly characterIndex: "キャラクターインデックス";
        readonly characterName: "キャラクター名";
        readonly effectName: "効果名";
        readonly faceIndex: "顔グラフィックインデックス";
        readonly faceName: "顔グラフィック名";
        readonly flashTimings: "フラッシュタイミング";
        readonly list: "リスト";
        readonly messageType: "メッセージタイプ";
        readonly offsetX: "オフセットX";
        readonly offsetY: "オフセットY";
        readonly overlay: "オーバーレイ";
        readonly priority: "優先度";
        readonly restriction: "制約";
        readonly rotation: "回転";
        readonly scale: "スケール";
        readonly soundTimings: "サウンドタイミング";
        readonly stepsToRemove: "解除までの歩数";
        readonly type: "タイプ";
        readonly variance: "分散度";
        readonly unknownCode: "不明なコード";
        readonly content: "内容";
        readonly apply: "適用";
        readonly turn: "ターン";
        readonly commonEvent: "コモンイベント";
        readonly normal: "通常";
        readonly dualWield: "二刀流";
        readonly bossCollaps: "ボス崩壊";
        readonly instantCollaps: "即時崩壊";
        readonly noneCollaps: "崩壊なし";
        readonly escape: "逃走";
    };
};
