export declare const LABEL_SET_DATA: {
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
    readonly class: {
        readonly domainName: "職業";
        readonly options: {
            readonly params: "パラメータ";
            readonly learnings: "習得スキル";
            readonly expParams: "経験値パラメータ";
        };
    };
    readonly armor: {
        readonly domainName: "防具";
        readonly options: {
            readonly armorTypeId: "防具タイプID";
            readonly slotTypeId: "スロットタイプID";
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
    readonly item: {
        readonly domainName: "アイテム";
        readonly options: {
            readonly consumable: "消耗品";
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
    readonly weapon: {
        readonly domainName: "武器";
        readonly options: {
            readonly weaponTypeId: "武器タイプID";
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
    readonly commonEvent: {
        readonly domainName: "コモンイベント";
        readonly options: {
            readonly trigger: "トリガー";
            readonly switchId: "スイッチID";
            readonly name: "名前";
            readonly id: "ID";
            readonly list: "コマンドリスト";
        };
    };
};
