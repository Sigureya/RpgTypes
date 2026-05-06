import type { PluginMeta } from "@RpgTypes/libs";

export const PLUGIN_DAMAGE_LIMIATION: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "DamageLimitation",
  noteSchema: [
    { valueType: "number", key: "MaxInflicted", script: false },
    { valueType: "number", key: "最大与ダメージ", script: false },
    { valueType: "number", key: "MaxReceived", script: false },
    { valueType: "number", key: "最大被ダメージ", script: false },
  ],
};

export const PLUGIN_DEATH_LOST_MP_TP: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "DeathLostMpTp",
  noteSchema: [
    { valueType: "number", key: "DeathLostMp", script: false },
    { valueType: "number", key: "DeathLostTp", script: false },
  ],
};

export const PLUGIN_DESCRIPTION_EXTEND: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "DescriptionExtend",
  noteSchema: [
    { valueType: "string", key: "ExtendDesc", script: false },
    { valueType: "string", key: "拡張説明", script: false },
  ],
};

export const PLUGIN_DESCRIPTION_TEMPLATE: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "DescriptionTemplate",
  noteSchema: [
    { valueType: "number", key: "TemplateIndex", script: false },
    { valueType: "boolean", key: "NoDescTemplate", script: false },
  ],
};

export const PLUGIN_DESTINATION_WINDOW: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "DestinationWindow",
  noteSchema: [
    { valueType: "boolean", key: "noDestinationWindow", script: false },
  ],
};

export const PLUGIN_DIRECTLY_ATTACK_EFFECT: PluginMeta = {
  author: "triacontane",
  pluginName: "DirectlyAttackEffect",
  noteSchema: [
    { valueType: "string", key: "DAE攻撃", script: false },
    { valueType: "string", key: "DAEAttack", script: false },
    { valueType: "string", key: "DAE帰投", script: false },
    { valueType: "string", key: "DAEReturn", script: false },
    { valueType: "boolean", key: "DAE姿隠し", script: false },
    { valueType: "boolean", key: "DAEHidden", script: false },
    { valueType: "boolean", key: "DAE残像", script: false },
    { valueType: "boolean", key: "DAEAfterimage", script: false },
    { valueType: "boolean", key: "DAE帰投なし", script: false },
    { valueType: "boolean", key: "DAENoReturn", script: false },
    { valueType: "number", key: "DAEアニメ", script: false },
    { valueType: "number", key: "DAEAnimation", script: false },
    { valueType: "number", key: "DAE攻撃アニメ", script: false },
    { valueType: "number", key: "DAEAttackAnimation", script: false },
    { valueType: "number", key: "DAE対象者アニメ", script: false },
    { valueType: "number", key: "DAETargetAnimation", script: false },
    { valueType: "string", key: "DAE絶対位置", script: true },
    { valueType: "string", key: "DAEAbsolutePos", script: true },
    { valueType: "string", key: "DAE相対位置", script: true },
    { valueType: "string", key: "DAERelativePos", script: true },
    { valueType: "string", key: "DAE自己相対位置", script: true },
    { valueType: "string", key: "DAESelfRelativePos", script: true },
    { valueType: "string", key: "DAE瞬間移動", script: true },
    { valueType: "string", key: "DAETeleport", script: true },
    { valueType: "boolean", key: "DAEアクターのみ", script: false },
    { valueType: "boolean", key: "DAEActorOnly", script: false },
    { valueType: "boolean", key: "DAE敵キャラのみ", script: false },
    { valueType: "boolean", key: "DAEEnemyOnly", script: false },
    { valueType: "number", key: "DAE武器", script: false },
    { valueType: "number", key: "DAEWeapon", script: false },
    { valueType: "string", key: "DAEモーション", script: false },
    { valueType: "string", key: "DAEMotion", script: false },
    { valueType: "string", key: "DAE開始モーション", script: false },
    { valueType: "string", key: "DAEStartMotion", script: false },
    { valueType: "string", key: "DAE終了モーション", script: false },
    { valueType: "string", key: "DAEEndMotion", script: false },
    { valueType: "boolean", key: "DAEVanish", script: false },
    { valueType: "boolean", key: "DAE消滅", script: false },
  ],
};

export const PLUGIN_DRAIN_EXTEND: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "DrainExtend",
  noteSchema: [
    { valueType: "string", key: "DrainEx", script: false },
    { valueType: "string", key: "吸収拡張", script: false },
    { valueType: "string", key: "DrainRate", script: true },
    { valueType: "string", key: "吸収有効率", script: true },
  ],
};
export const PLUGIN_DYNAMIC_ACTOR_GRAPHIC: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "DynamicActorGraphic",
  noteSchema: [
    {
      valueType: "boolean",
      key: "<list.tagで指定した任意タグ>",
      script: false,
    },
  ],
};

export const PLUGIN_DYNAMIC_BATTLER_PARAM: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "DynamicBattlerParam",
  noteSchema: [],
};
export const PLUGIN_DYNAMIC_DATABASE: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "DynamicDatabase",
  noteSchema: [{ valueType: "string", key: "DD<項目名>", script: true }],
};
export const PLUGIN_DYNAMIC_EQUIP_PARAM: PluginMeta = {
  author: "トリアコンタン",
  pluginName: "DynamicEquipParam",
  noteSchema: [
    { valueType: "string", key: "DEP_最大HP", script: true },
    { valueType: "string", key: "DEP_Mhp", script: true },
    { valueType: "string", key: "DEP_最大MP", script: true },
    { valueType: "string", key: "DEP_Mmp", script: true },
    { valueType: "string", key: "DEP_攻撃力", script: true },
    { valueType: "string", key: "DEP_Atk", script: true },
    { valueType: "string", key: "DEP_防御力", script: true },
    { valueType: "string", key: "DEP_Def", script: true },
    { valueType: "string", key: "DEP_魔法力", script: true },
    { valueType: "string", key: "DEP_Mat", script: true },
    { valueType: "string", key: "DEP_魔法防御", script: true },
    { valueType: "string", key: "DEP_Mdf", script: true },
    { valueType: "string", key: "DEP_敏捷性", script: true },
    { valueType: "string", key: "DEP_Agi", script: true },
    { valueType: "string", key: "DEP_運", script: true },
    { valueType: "string", key: "DEP_Luk", script: true },
    {
      valueType: "number",
      key: "<計算式中 a.special('tag') で参照する任意タグ>",
      script: false,
    },
  ],
};
