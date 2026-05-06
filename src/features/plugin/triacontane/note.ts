import type { PluginMeta } from "@RpgTypes/libs";

const PLUGIN_ACCUMULATE_STATE: PluginMeta = {
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
};
const PLUGIN_ACTION_EFFECT_EXTEND: PluginMeta = {
  author: "triacontane",
  pluginName: "ActionEffectExtend",
  noteSchema: [{ valueType: "string", key: "effect", script: false }],
};
const PLUGIN_ADDITIONAL_DESCRIPTION: PluginMeta = {
  author: "triacontane",
  pluginName: "AdditionalDescription",
  noteSchema: [
    { valueType: "string", key: "AD説明", script: false },
    { valueType: "string", key: "ADDescription", script: false },
    { valueType: "string", key: "ADスクリプト", script: true },
    { valueType: "string", key: "ADScript", script: true },
  ],
};
const PLUGIN_ADDITIONAL_SKILL_MESSAGE: PluginMeta = {
  author: "triacontane",
  pluginName: "AdditionalSkillMessage",
  noteSchema: [
    { valueType: "string", key: "ASM_メッセージ*", script: false },
    { valueType: "string", key: "ASM_Message*", script: false },
  ],
};
const PLUGIN_ANIMATION_BY_SUBJECT: PluginMeta = {
  author: "triacontane",
  pluginName: "AnimationBySubject",
  noteSchema: [],
};
const PLUGIN_AIRSHIP_EVENT: PluginMeta = {
  author: "s.f.",
  pluginName: "AirshipEvent",
  noteSchema: [{ valueType: "boolean", key: "AirEvent", script: false }],
};
const PLUGIN_AUTO_SELF_SWITCH: PluginMeta = {
  author: "triacontane",
  pluginName: "AutoSelfSwitch",
  noteSchema: [],
};
const PLUGIN_AUTO_RAISE: PluginMeta = {
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
};
const PLUGIN_AUTOMATIC_STATE: PluginMeta = {
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
};
const PLUGIN_ATTACK_CHAIN: PluginMeta = {
  author: "triacontane",
  pluginName: "AttackChain",
  noteSchema: [{ valueType: "boolean", key: "Combo", script: false }],
};
