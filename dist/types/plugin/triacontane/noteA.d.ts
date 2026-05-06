export declare const PLUGIN_ACCUMULATE_STATE: {
    readonly author: "triacontane";
    readonly pluginName: "AccumulateState";
    readonly noteSchema: [{
        readonly valueType: "boolean";
        readonly key: "蓄積型";
        readonly script: false;
    }, {
        readonly valueType: "boolean";
        readonly key: "Accumulate";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly script: false;
        readonly key: "蓄積ゲージステート";
    }, {
        readonly valueType: "number";
        readonly key: "AccumulateGaugeState";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "蓄積ゲージX";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "AccumulateGaugeX";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "蓄積ゲージY";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "AccumulateGaugeY";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "蓄積マップゲージX";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "AccumulateMapGaugeX";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "蓄積マップゲージY";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "AccumulateMapGaugeY";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "蓄積ステータスゲージX";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "AccumulateStatusGaugeX";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "蓄積ステータスゲージY";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "AccumulateStatusGaugeY";
        readonly script: false;
    }];
};
export declare const PLUGIN_ACTION_EFFECT_EXTEND: {
    readonly author: "triacontane";
    readonly pluginName: "ActionEffectExtend";
    readonly noteSchema: [{
        readonly valueType: "string";
        readonly key: "effect";
        readonly script: false;
    }];
};
export declare const PLUGIN_ADDITIONAL_DESCRIPTION: {
    readonly author: "triacontane";
    readonly pluginName: "AdditionalDescription";
    readonly noteSchema: [{
        readonly valueType: "string";
        readonly key: "AD説明";
        readonly script: false;
    }, {
        readonly valueType: "string";
        readonly key: "ADDescription";
        readonly script: false;
    }, {
        readonly valueType: "string";
        readonly key: "ADスクリプト";
        readonly script: true;
    }, {
        readonly valueType: "string";
        readonly key: "ADScript";
        readonly script: true;
    }];
};
export declare const PLUGIN_ADDITIONAL_SKILL_MESSAGE: {
    readonly author: "triacontane";
    readonly pluginName: "AdditionalSkillMessage";
    readonly noteSchema: [{
        readonly valueType: "string";
        readonly key: "ASM_メッセージ*";
        readonly script: false;
    }, {
        readonly valueType: "string";
        readonly key: "ASM_Message*";
        readonly script: false;
    }];
};
export declare const PLUGIN_ANIMATION_BY_SUBJECT: {
    readonly author: "triacontane";
    readonly pluginName: "AnimationBySubject";
    readonly noteSchema: [];
};
export declare const PLUGIN_AIRSHIP_EVENT: {
    readonly author: "triacontane";
    readonly pluginName: "AirshipEvent";
    readonly noteSchema: [{
        readonly valueType: "boolean";
        readonly key: "AirEvent";
        readonly script: false;
    }];
};
export declare const PLUGIN_AUTO_SELF_SWITCH: {
    readonly author: "triacontane";
    readonly pluginName: "AutoSelfSwitch";
    readonly noteSchema: [];
};
export declare const PLUGIN_AUTO_RAISE: {
    readonly author: "triacontane";
    readonly pluginName: "AutoRaise";
    readonly noteSchema: [{
        readonly valueType: "number";
        readonly key: "自動蘇生";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "AutoRaise";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "蘇生HPレート";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "RaiseHpRate";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "蘇生確率";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "RaiseProb";
        readonly script: false;
    }, {
        readonly valueType: "boolean";
        readonly key: "一時自動蘇生";
        readonly script: false;
    }, {
        readonly valueType: "boolean";
        readonly key: "TempAutoRaise";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "蘇生MPコスト";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "RaiseMpCost";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "蘇生TPコスト";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "RaiseTpCost";
        readonly script: false;
    }, {
        readonly valueType: "boolean";
        readonly key: "蘇生ロスト";
        readonly script: false;
    }, {
        readonly valueType: "boolean";
        readonly key: "RaiseLost";
        readonly script: false;
    }];
};
export declare const PLUGIN_AUTOMATIC_STATE: {
    readonly author: "triacontane";
    readonly pluginName: "AutomaticState";
    readonly noteSchema: [{
        readonly valueType: "number";
        readonly key: "ASスイッチ";
        readonly script: false;
    }, {
        readonly valueType: "string";
        readonly key: "AS計算式";
        readonly script: true;
    }, {
        readonly valueType: "number";
        readonly key: "AS上限HP";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "AS下限HP";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "AS上限MP";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "AS下限MP";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "AS上限TP";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "AS下限TP";
        readonly script: false;
    }, {
        readonly valueType: "string";
        readonly key: "ASアクター";
        readonly script: false;
    }, {
        readonly valueType: "string";
        readonly key: "AS敵キャラ";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "AS武器装備";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "AS防具装備";
        readonly script: false;
    }, {
        readonly valueType: "number";
        readonly key: "AS並び順";
        readonly script: false;
    }];
};
export declare const PLUGIN_ATTACK_CHAIN: {
    readonly author: "triacontane";
    readonly pluginName: "AttackChain";
    readonly noteSchema: [{
        readonly valueType: "boolean";
        readonly key: "Combo";
        readonly script: false;
    }];
};
