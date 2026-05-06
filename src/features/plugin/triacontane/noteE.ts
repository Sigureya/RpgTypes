import type { PluginMeta } from "@RpgTypes/libs";
export const PLUGIN_EFFECT_CONDITIONS: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "EffectConditions",
  noteSchema: [
    //    { valueType: "string", key: "EffectCond_*", script: false },
    //  { valueType: "string", key: "効果条件_*", script: false },
  ],
};
export const PLUGIN_ENEMY_REWARD_RATE: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "EnemyRewardRate",
  noteSchema: [
    { valueType: "number", key: "経験値倍率", script: false },
    { valueType: "number", key: "ExpRate", script: false },
    { valueType: "number", key: "金額倍率", script: false },
    { valueType: "number", key: "GoldRate", script: false },
  ],
};
export const PLUGIN_EQUIP_CONDITION_EXTEND: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "EquipConditionExtend",
  noteSchema: [
    { valueType: "string", key: "装備条件スキル", script: false },
    { valueType: "string", key: "EquipCondSkill", script: false },
    { valueType: "string", key: "装備条件ステート", script: false },
    { valueType: "string", key: "EquipCondState", script: false },
    { valueType: "string", key: "装備条件アクター", script: false },
    { valueType: "string", key: "EquipCondActor", script: false },
    { valueType: "string", key: "装備条件スイッチ", script: false },
    { valueType: "string", key: "EquipCondSwitch", script: false },
    { valueType: "string", key: "装備条件武器", script: false },
    { valueType: "string", key: "EquipCondWeapon", script: false },
    { valueType: "string", key: "装備条件防具", script: false },
    { valueType: "string", key: "EquipCondArmor", script: false },
    { valueType: "number", key: "装備条件HP", script: false },
    { valueType: "number", key: "EquipCondHp", script: false },
    { valueType: "number", key: "装備条件MP", script: false },
    { valueType: "number", key: "EquipCondMp", script: false },
    { valueType: "number", key: "装備条件攻撃", script: false },
    { valueType: "number", key: "EquipCondAtk", script: false },
    { valueType: "number", key: "装備条件防御", script: false },
    { valueType: "number", key: "EquipCondDef", script: false },
    { valueType: "number", key: "装備条件魔法", script: false },
    { valueType: "number", key: "EquipCondMat", script: false },
    { valueType: "number", key: "装備条件魔防", script: false },
    { valueType: "number", key: "EquipCondMdf", script: false },
    { valueType: "number", key: "装備条件敏捷", script: false },
    { valueType: "number", key: "EquipCondAgi", script: false },
    { valueType: "number", key: "装備条件運", script: false },
    { valueType: "number", key: "EquipCondLuk", script: false },
    { valueType: "string", key: "装備条件計算式", script: true },
    { valueType: "string", key: "EquipCondFormula", script: true },
    { valueType: "boolean", key: "装備条件反転", script: false },
  ],
};
export const PLUGIN_EQUIP_SLOT_INVALIDATE: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "EquipSlotInvalidate",
  noteSchema: [
    { valueType: "number", key: "装備無効", script: false },
    { valueType: "number", key: "EquipInvalid", script: false },
  ],
};
export const PLUGIN_EVASION_IGNORE: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "EvasionIgnore",
  noteSchema: [
    { valueType: "boolean", key: "回避無視", script: false },
    { valueType: "boolean", key: "EvasionIgnore", script: false },
  ],
};
export const PLUGIN_EVENT_INTERCEPTOR: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "EventInterceptor",
  noteSchema: [
    //   { valueType: "string", key: "<tagNameで指定した任意タグ>", script: false },
  ],
};
export const PLUGIN_EVENT_LABEL: PluginMeta = {
  author: "triacontane",
  pluginName: "EventLabel",
  noteSchema: [
    { valueType: "string", key: "LB", script: false },
    { valueType: "boolean", key: "LB_No", script: false },
    { valueType: "number", key: "LB_X", script: false },
    { valueType: "number", key: "LB_Y", script: false },
    { valueType: "number", key: "LB_Z", script: false },
    { valueType: "string", key: "LB_S", script: false },
    { valueType: "boolean", key: "LB_T", script: false },
  ],
};
export const PLUGIN_EVENT_MOVABLE_LIMITATION: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "EventMovableLimitation",
  noteSchema: [
    { valueType: "string", key: "移動制限", script: false },
    { valueType: "string", key: "Movable", script: false },
  ],
};
export const PLUGIN_EVENT_NO_LOCK: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "EventNoLock",
  noteSchema: [
    { valueType: "boolean", key: "ロック無効", script: false },
    { valueType: "boolean", key: "DisableLock", script: false },
  ],
};
export const PLUGIN_EVENT_RE_SPAWN: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "EventReSpawn",
  noteSchema: [{ valueType: "number", key: "CP", script: false }],
};
export const PLUGIN_EVENT_START_SE: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "EventStartSe",
  noteSchema: [{ valueType: "string", key: "StartSe", script: false }],
};
export const PLUGIN_EXP_FOR_OUTSIDE_PARTY: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "ExpForOutsideParty",
  noteSchema: [
    { valueType: "number", key: "OutsidePartyExpRate", script: false },
    { valueType: "number", key: "パーティ外経験値レート", script: false },
  ],
};
