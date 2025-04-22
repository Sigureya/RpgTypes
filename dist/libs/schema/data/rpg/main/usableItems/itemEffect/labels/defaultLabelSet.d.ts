export declare const DEFAULT_EFFECT_LABELS_SET: {
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
