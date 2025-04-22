export declare const LABEL_REGISTRY_JP: {
    readonly rpg: {
        readonly damage: {
            readonly domainName: "ダメージ";
            readonly options: {};
        };
        readonly data: {
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
        };
        readonly traits: {
            readonly domainName: "特徴";
            readonly options: {
                readonly collaps: {
                    readonly domainName: "消滅エフェクト";
                    readonly format: "{name}";
                    readonly options: {
                        readonly bossCollaps: "ボス崩壊";
                        readonly instantCollaps: "即時崩壊";
                        readonly noneCollaps: "崩壊なし";
                    };
                };
                readonly regularParam: {
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
                readonly specialParam: {
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
                readonly actionPlus: {
                    readonly domainName: "行動追加";
                    readonly format: "{name} * {value}%";
                };
                readonly attackElement: {
                    readonly domainName: "攻撃属性";
                    readonly format: "{name}";
                };
                readonly attackSkill: {
                    readonly domainName: "攻撃スキル";
                    readonly format: "{name}";
                };
                readonly attackSpeed: {
                    readonly domainName: "攻撃速度補正";
                    readonly format: "{value}";
                };
                readonly attackState: {
                    readonly domainName: "攻撃ステート";
                    readonly format: "{name} + {value}%";
                };
                readonly attackTimes: {
                    readonly domainName: "攻撃追加回数";
                    readonly format: "{value}";
                };
                readonly debuffRate: {
                    readonly domainName: "弱体有効度";
                    readonly format: "{name} * {value}%";
                };
                readonly elementRate: {
                    readonly domainName: "属性有効度";
                    readonly format: "{name} * {value}%";
                };
                readonly equipWeaponType: {
                    readonly domainName: "装備武器タイプ";
                    readonly format: "{name}";
                };
                readonly equipArmorType: {
                    readonly domainName: "装備防具タイプ";
                    readonly format: "{name}";
                };
                readonly equipLock: {
                    readonly domainName: "装備固定";
                    readonly format: "{name}";
                };
                readonly equipSeal: {
                    readonly domainName: "装備封印";
                    readonly format: "{name}";
                };
                readonly skillAdd: {
                    readonly domainName: "スキル追加";
                    readonly format: "{name}";
                };
                readonly skillSeal: {
                    readonly domainName: "スキル封印";
                    readonly format: "{name}";
                };
                readonly stateRate: {
                    readonly domainName: "ステート有効度";
                    readonly format: "{name} * {value}%";
                };
                readonly stateResist: {
                    readonly domainName: "ステート無効";
                    readonly format: "{name}";
                };
                readonly skillTypeAdd: {
                    readonly domainName: "スキルタイプ追加";
                    readonly format: "{name}";
                };
                readonly skillTypeSeal: {
                    readonly domainName: "スキルタイプ封印";
                    readonly format: "{name}";
                };
                readonly slotType: {
                    readonly domainName: "スロットタイプ";
                    readonly format: "{name}";
                };
            };
        };
        readonly itemEffect: {
            readonly domainName: "使用効果";
            readonly options: {
                readonly addBuff: {
                    readonly desc: "バフを付与する";
                    readonly domainName: "バフ付与";
                    readonly format: "{name} {value1}ターン";
                };
                readonly addDebuff: {
                    readonly desc: "デバフを付与する";
                    readonly domainName: "デバフ付与";
                    readonly format: "{name} {value1}ターン";
                };
                readonly gainTp: {
                    readonly desc: "TPを指定した量だけ増加させます。";
                    readonly domainName: "TP増加";
                    readonly format: "{value1}% + {value2}";
                };
                readonly grow: {
                    readonly desc: "成長効果";
                    readonly domainName: "成長効果";
                    readonly format: "{name} + {value1}";
                };
                readonly learnSkill: {
                    readonly desc: "スキルを習得する";
                    readonly domainName: "スキル習得";
                    readonly format: "{name}";
                };
                readonly recoverHp: {
                    readonly desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。";
                    readonly domainName: "HP回復";
                    readonly format: "{value1}% + {value2}";
                };
                readonly recoverMp: {
                    readonly desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。";
                    readonly domainName: "MP回復";
                    readonly format: "{value1}% + {value2}";
                };
                readonly removeBuff: {
                    readonly desc: "バフを解除する";
                    readonly domainName: "バフ解除";
                    readonly format: "{name}";
                };
                readonly removeDebuff: {
                    readonly desc: "デバフを解除する";
                    readonly domainName: "デバフ解除";
                    readonly format: "{name}";
                };
                readonly removeState: {
                    readonly desc: "状態異常を解除する";
                    readonly domainName: "ステート解除";
                    readonly format: "{name} {value1}%";
                };
                readonly special: {
                    readonly desc: "特殊効果";
                    readonly domainName: "特殊効果";
                    readonly format: "{name}";
                };
                readonly addState: {
                    readonly desc: "指定したステートを付加します。";
                    readonly domainName: "ステート付加";
                    readonly format: "{name} {value1}%";
                };
                readonly commonEvent: {
                    readonly desc: "コモンイベントを実行する";
                    readonly domainName: "コモンイベント";
                    readonly format: "{name}";
                };
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
