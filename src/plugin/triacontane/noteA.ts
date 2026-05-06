import type { PluginMeta } from "@RpgTypes/libs";

export const PLUGIN_ACCUMULATE_STATE = {
  author: "triacontane",
  pluginName: "AccumulateState",
  noteSchema: [
    { valueType: "boolean", key: "蓄積型", script: false },
    { valueType: "boolean", key: "Accumulate", script: false },
    { valueType: "number", script: false, key: "蓄積ゲージステート" },
    { valueType: "number", key: "AccumulateGaugeState", script: false },
    { valueType: "number", key: "蓄積ゲージX", script: false },
    { valueType: "number", key: "AccumulateGaugeX", script: false },
    { valueType: "number", key: "蓄積ゲージY", script: false },
    { valueType: "number", key: "AccumulateGaugeY", script: false },
    { valueType: "number", key: "蓄積マップゲージX", script: false },
    { valueType: "number", key: "AccumulateMapGaugeX", script: false },
    { valueType: "number", key: "蓄積マップゲージY", script: false },
    { valueType: "number", key: "AccumulateMapGaugeY", script: false },
    { valueType: "number", key: "蓄積ステータスゲージX", script: false },
    { valueType: "number", key: "AccumulateStatusGaugeX", script: false },
    { valueType: "number", key: "蓄積ステータスゲージY", script: false },
    { valueType: "number", key: "AccumulateStatusGaugeY", script: false },
  ],
} as const satisfies PluginMeta;

export const PLUGIN_ACTION_EFFECT_EXTEND = {
  author: "triacontane",
  pluginName: "ActionEffectExtend",
  noteSchema: [{ valueType: "string", key: "effect", script: false }],
} as const satisfies PluginMeta;

export const PLUGIN_ADDITIONAL_DESCRIPTION = {
  author: "triacontane",
  pluginName: "AdditionalDescription",
  noteSchema: [
    { valueType: "string", key: "AD説明", script: false },
    { valueType: "string", key: "ADDescription", script: false },
    { valueType: "string", key: "ADスクリプト", script: true },
    { valueType: "string", key: "ADScript", script: true },
  ],
} as const satisfies PluginMeta;

export const PLUGIN_ADDITIONAL_SKILL_MESSAGE = {
  author: "triacontane",
  pluginName: "AdditionalSkillMessage",
  noteSchema: [
    { valueType: "string", key: "ASM_メッセージ*", script: false },
    { valueType: "string", key: "ASM_Message*", script: false },
  ],
} as const satisfies PluginMeta;

export const PLUGIN_ANIMATION_BY_SUBJECT = {
  author: "triacontane",
  pluginName: "AnimationBySubject",
  noteSchema: [],
} as const satisfies PluginMeta;

export const PLUGIN_AIRSHIP_EVENT = {
  author: "triacontane",
  pluginName: "AirshipEvent",
  noteSchema: [{ valueType: "boolean", key: "AirEvent", script: false }],
} as const satisfies PluginMeta;

export const PLUGIN_AUTO_SELF_SWITCH = {
  author: "triacontane",
  pluginName: "AutoSelfSwitch",
  noteSchema: [],
} as const satisfies PluginMeta;

export const PLUGIN_AUTO_RAISE = {
  author: "triacontane",
  pluginName: "AutoRaise",
  noteSchema: [
    { valueType: "number", key: "自動蘇生", script: false },
    { valueType: "number", key: "AutoRaise", script: false },
    { valueType: "number", key: "蘇生HPレート", script: false },
    { valueType: "number", key: "RaiseHpRate", script: false },
    { valueType: "number", key: "蘇生確率", script: false },
    { valueType: "number", key: "RaiseProb", script: false },
    { valueType: "boolean", key: "一時自動蘇生", script: false },
    { valueType: "boolean", key: "TempAutoRaise", script: false },
    { valueType: "number", key: "蘇生MPコスト", script: false },
    { valueType: "number", key: "RaiseMpCost", script: false },
    { valueType: "number", key: "蘇生TPコスト", script: false },
    { valueType: "number", key: "RaiseTpCost", script: false },
    { valueType: "boolean", key: "蘇生ロスト", script: false },
    { valueType: "boolean", key: "RaiseLost", script: false },
  ],
} as const satisfies PluginMeta;

export const PLUGIN_AUTOMATIC_STATE = {
  author: "triacontane",
  pluginName: "AutomaticState",
  noteSchema: [
    { valueType: "number", key: "ASスイッチ", script: false },
    { valueType: "string", key: "AS計算式", script: true },
    { valueType: "number", key: "AS上限HP", script: false },
    { valueType: "number", key: "AS下限HP", script: false },
    { valueType: "number", key: "AS上限MP", script: false },
    { valueType: "number", key: "AS下限MP", script: false },
    { valueType: "number", key: "AS上限TP", script: false },
    { valueType: "number", key: "AS下限TP", script: false },
    { valueType: "string", key: "ASアクター", script: false },
    { valueType: "string", key: "AS敵キャラ", script: false },
    { valueType: "number", key: "AS武器装備", script: false },
    { valueType: "number", key: "AS防具装備", script: false },
    { valueType: "number", key: "AS並び順", script: false },
  ],
} as const satisfies PluginMeta;

export const PLUGIN_ATTACK_CHAIN = {
  author: "triacontane",
  pluginName: "AttackChain",
  noteSchema: [{ valueType: "boolean", key: "Combo", script: false }],
} as const satisfies PluginMeta;
