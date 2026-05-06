import type { PluginMeta } from "@RpgTypes/libs";
const PLUGIN_CHARACTER_GRAPHIC_MANAGER: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "CharacterGraphicManager",
  noteSchema: [
    { valueType: "string", key: "CGMノーマル", script: true },
    { valueType: "string", key: "CGM耐久*", script: true },
  ],
};
const PLUGIN_CHARGE_TIME_CONTROL: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "ChargeTimeControl",
  noteSchema: [
    { valueType: "number", key: "ChargeTime", script: false },
    { valueType: "string", key: "ChargeTimeJs", script: true },
    { valueType: "number", key: "ChargeTimePlusRate", script: false },
    { valueType: "number", key: "ChargeTimeMinusRate", script: false },
  ],
};
const PLUGIN_COMMAND_SKILL: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "CommandSkill",
  noteSchema: [
    { valueType: "string", key: "CommandSkill", script: false },
    { valueType: "string", key: "コマンドスキル", script: false },
    { valueType: "boolean", key: "HiddenCommandSkill", script: false },
    { valueType: "boolean", key: "隠しコマンドスキル", script: false },
  ],
};
const PLUGIN_CONDITIONAL_STATE: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "ConditionalState",
  noteSchema: [
    { valueType: "string", key: "CS_上限HP", script: false },
    { valueType: "string", key: "CS_UpperHp", script: false },
    { valueType: "string", key: "CS_下限HP", script: false },
    { valueType: "string", key: "CS_LowerHp", script: false },
    { valueType: "string", key: "CS_上限MP", script: false },
    { valueType: "string", key: "CS_UpperMp", script: false },
    { valueType: "string", key: "CS_下限MP", script: false },
    { valueType: "string", key: "CS_LowerMp", script: false },
    { valueType: "string", key: "CS_上限TP", script: false },
    { valueType: "string", key: "CS_UpperTp", script: false },
    { valueType: "string", key: "CS_下限TP", script: false },
    { valueType: "string", key: "CS_LowerTp", script: false },
    { valueType: "string", key: "CS_上限HP値", script: false },
    { valueType: "string", key: "CS_UpperHpValue", script: false },
    { valueType: "string", key: "CS_下限HP値", script: false },
    { valueType: "string", key: "CS_LowerHpValue", script: false },
    { valueType: "string", key: "CS_上限MP値", script: false },
    { valueType: "string", key: "CS_UpperMpValue", script: false },
    { valueType: "string", key: "CS_下限MP値", script: false },
    { valueType: "string", key: "CS_LowerMpValue", script: false },
    { valueType: "string", key: "CS_上限TP値", script: false },
    { valueType: "string", key: "CS_UpperTpValue", script: false },
    { valueType: "string", key: "CS_下限TP値", script: false },
    { valueType: "string", key: "CS_LowerTpValue", script: false },
  ],
};
const PLUGIN_CONDITIONAL_XPARAM: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "ConditionalXparam",
  noteSchema: [
    {
      valueType: "boolean",
      key: "<xparamList.tagで指定した任意タグ>",
      script: false,
    },
  ],
};
const PLUGIN_COUNTER_EXTEND: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "CounterExtend",
  noteSchema: [
    { valueType: "string", key: "CounterExtend", script: false },
    { valueType: "string", key: "反撃拡張", script: false },
    { valueType: "number", key: "CounterEvasion", script: false },
    { valueType: "number", key: "反撃回避", script: false },
    {
      valueType: "number",
      key: "<SkillList.FrequencyTagで指定した任意タグ>",
      script: false,
    },
    {
      valueType: "boolean",
      key: "<SkillList.MemoTagConditionで指定した任意タグ>",
      script: false,
    },
  ],
};
const PLUGIN_CURSED_ACTION: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "CursedAction",
  noteSchema: [
    { valueType: "string", key: "CursedAction", script: false },
    { valueType: "string", key: "呪い行動", script: false },
  ],
};
const PLUGIN_CUSTOMIZE_ATTACK_GUARD: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "CustomizeAttackGuard",
  noteSchema: [
    { valueType: "number", key: "CAGAttack", script: false },
    { valueType: "number", key: "CAG攻撃", script: false },
    { valueType: "number", key: "CAGGuard", script: false },
    { valueType: "number", key: "CAG防御", script: false },
  ],
};
const PLUGIN_CUSTOMIZE_CRITICAL: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "CustomizeCritical",
  noteSchema: [
    { valueType: "string", key: "CC計算式", script: true },
    { valueType: "string", key: "CCFormula", script: true },
    { valueType: "number", key: "CC確率加算", script: false },
    { valueType: "number", key: "CCProbAdd", script: false },
    { valueType: "number", key: "CC確率変更", script: false },
    { valueType: "number", key: "CCProbChange", script: false },
    { valueType: "number", key: "CCアニメ", script: false },
    { valueType: "number", key: "CCAnimation", script: false },
    { valueType: "number", key: "CC演出", script: false },
    { valueType: "number", key: "CCエフェクト", script: false },
    { valueType: "string", key: "CCメッセージ", script: false },
    { valueType: "string", key: "CCMessage", script: false },
  ],
};
const PLUGIN_CUSTOMIZE_FAILURE_MESSAGE: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "CustomizeFailureMessage",
  noteSchema: [
    { valueType: "string", key: "FailureMessage", script: false },
    { valueType: "string", key: "失敗メッセージ", script: false },
  ],
};
