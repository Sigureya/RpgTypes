const p = { author: "CutieVirus", pluginName: "MZ3D", noteSchema: [{ script: !1, key: "mz3d", valueType: "not text" }, { script: !1, key: "TE", valueType: "not text" }] }, a = {
  author: "triacontane",
  pluginName: "AccumulateState",
  noteSchema: [{ valueType: "boolean", key: "蓄積型", script: !1 }, { valueType: "boolean", key: "Accumulate", script: !1 }, { valueType: "number", script: !1, key: "蓄積ゲージステート" }, {
    valueType: "number",
    key: "AccumulateGaugeState",
    script: !1
  }, { valueType: "number", key: "蓄積ゲージX", script: !1 }, { valueType: "number", key: "AccumulateGaugeX", script: !1 }, {
    valueType: "number",
    key: "蓄積ゲージY",
    script: !1
  }, { valueType: "number", key: "AccumulateGaugeY", script: !1 }, { valueType: "number", key: "蓄積マップゲージX", script: !1 }, {
    valueType: "number",
    key: "AccumulateMapGaugeX",
    script: !1
  }, { valueType: "number", key: "蓄積マップゲージY", script: !1 }, { valueType: "number", key: "AccumulateMapGaugeY", script: !1 }, { valueType: "number", key: "蓄積ステータスゲージX", script: !1 }, {
    valueType: "number",
    key: "AccumulateStatusGaugeX",
    script: !1
  }, { valueType: "number", key: "蓄積ステータスゲージY", script: !1 }, { valueType: "number", key: "AccumulateStatusGaugeY", script: !1 }]
}, r = {
  author: "triacontane",
  pluginName: "ActionEffectExtend",
  noteSchema: [{ valueType: "string", key: "effect", script: !1 }]
}, i = { author: "triacontane", pluginName: "AdditionalDescription", noteSchema: [{
  valueType: "string",
  key: "AD説明",
  script: !1
}, { valueType: "string", key: "ADDescription", script: !1 }, { valueType: "string", key: "ADスクリプト", script: !0 }, {
  valueType: "string",
  key: "ADScript",
  script: !0
}] }, u = { author: "triacontane", pluginName: "AdditionalSkillMessage", noteSchema: [{ valueType: "string", key: "ASM_メッセージ*", script: !1 }, {
  valueType: "string",
  key: "ASM_Message*",
  script: !1
}] }, y = { author: "triacontane", pluginName: "AnimationBySubject", noteSchema: [] }, n = { author: "triacontane", pluginName: "AirshipEvent", noteSchema: [{
  valueType: "boolean",
  key: "AirEvent",
  script: !1
}] }, s = { author: "triacontane", pluginName: "AutoSelfSwitch", noteSchema: [] }, l = { author: "triacontane", pluginName: "AutoRaise", noteSchema: [{
  valueType: "number",
  key: "自動蘇生",
  script: !1
}, { valueType: "number", key: "AutoRaise", script: !1 }, { valueType: "number", key: "蘇生HPレート", script: !1 }, { valueType: "number", key: "RaiseHpRate", script: !1 }, {
  valueType: "number",
  key: "蘇生確率",
  script: !1
}, { valueType: "number", key: "RaiseProb", script: !1 }, { valueType: "boolean", key: "一時自動蘇生", script: !1 }, {
  valueType: "boolean",
  key: "TempAutoRaise",
  script: !1
}, { valueType: "number", key: "蘇生MPコスト", script: !1 }, { valueType: "number", key: "RaiseMpCost", script: !1 }, { valueType: "number", key: "蘇生TPコスト", script: !1 }, {
  valueType: "number",
  key: "RaiseTpCost",
  script: !1
}, { valueType: "boolean", key: "蘇生ロスト", script: !1 }, { valueType: "boolean", key: "RaiseLost", script: !1 }] }, c = {
  author: "triacontane",
  pluginName: "AutomaticState",
  noteSchema: [{ valueType: "number", key: "ASスイッチ", script: !1 }, { valueType: "string", key: "AS計算式", script: !0 }, { valueType: "number", key: "AS上限HP", script: !1 }, {
    valueType: "number",
    key: "AS下限HP",
    script: !1
  }, { valueType: "number", key: "AS上限MP", script: !1 }, { valueType: "number", key: "AS下限MP", script: !1 }, { valueType: "number", key: "AS上限TP", script: !1 }, {
    valueType: "number",
    key: "AS下限TP",
    script: !1
  }, { valueType: "string", key: "ASアクター", script: !1 }, { valueType: "string", key: "AS敵キャラ", script: !1 }, { valueType: "number", key: "AS武器装備", script: !1 }, {
    valueType: "number",
    key: "AS防具装備",
    script: !1
  }, { valueType: "number", key: "AS並び順", script: !1 }]
}, T = { author: "triacontane", pluginName: "AttackChain", noteSchema: [{ valueType: "boolean", key: "Combo", script: !1 }] }, o = {
  author: "triacontane",
  pluginName: "BalloonPosition",
  noteSchema: [{ valueType: "number", key: "BalloonX", script: !1 }, { valueType: "number", key: "BalloonY", script: !1 }]
}, k = {
  author: "Triacontane",
  pluginName: "BattleBalloon",
  noteSchema: [{ valueType: "number", key: "BalloonX", script: !1 }, { valueType: "number", key: "フキダシX", script: !1 }, { valueType: "number", key: "BalloonY", script: !1 }, {
    valueType: "number",
    key: "フキダシY",
    script: !1
  }, { valueType: "number", key: "BalloonInput", script: !1 }, { valueType: "number", key: "決定時フキダシ", script: !1 }, {
    valueType: "number",
    key: "BalloonUsing",
    script: !1
  }, { valueType: "number", key: "使用時フキダシ", script: !1 }]
}, v = { author: "トリアコンタン", pluginName: "BattleFormationCustomize", noteSchema: [{ valueType: "string", key: "BFC_座標", script: !1 }, {
  valueType: "string",
  key: "BFC_Pos",
  script: !1
}, { valueType: "string", key: "BFC_相対座標", script: !1 }, { valueType: "string", key: "BFC_DeltaPos", script: !1 }] }, m = {
  author: "トリアコンタン",
  pluginName: "BattlerGraphicExtend",
  noteSchema: [{ valueType: "number", key: "BGE高度", script: !1 }, { valueType: "number", key: "BGEAltitude", script: !1 }, {
    valueType: "number",
    key: "BGE不透明度",
    script: !1
  }, { valueType: "number", key: "BGEOpacity", script: !1 }, { valueType: "string", key: "BGE色調", script: !1 }, { valueType: "string", key: "BGETone", script: !1 }, {
    valueType: "string",
    key: "BGEフラッシュ",
    script: !1
  }, { valueType: "string", key: "BGEFlash", script: !1 }, { valueType: "number", key: "BGEフラッシュ間隔", script: !1 }, { valueType: "number", key: "BGEFlashInterval", script: !1 }, {
    valueType: "number",
    key: "BGE合成方法",
    script: !1
  }, { valueType: "number", key: "BGEBlendMode", script: !1 }, { valueType: "number", key: "BGE拡大率X", script: !1 }, {
    valueType: "number",
    key: "BGEScaleX",
    script: !1
  }, { valueType: "number", key: "BGE拡大率Y", script: !1 }, { valueType: "number", key: "BGEScaleY", script: !1 }, { valueType: "number", key: "BGEモーション倍率", script: !1 }, {
    valueType: "number",
    key: "BGEMotionRate",
    script: !1
  }]
}, g = { author: "triacontane", pluginName: "BattleSpecialCommand", noteSchema: [{ valueType: "boolean", key: "BSC特殊コマンド", script: !1 }, {
  valueType: "boolean",
  key: "BSCSpecialCommand",
  script: !1
}, { valueType: "string", key: "BSC追加位置", script: !1 }, { valueType: "string", key: "BSCAddPosition", script: !1 }, {
  valueType: "number",
  key: "BSC条件ステート有効",
  script: !0
}, { valueType: "number", key: "BSCCondStateValid", script: !0 }, { valueType: "number", key: "BSC条件ステート無効", script: !0 }, { valueType: "number", key: "BSCCondStateInvalid", script: !0 }, {
  valueType: "number",
  key: "BSC条件スイッチON",
  script: !0
}, { valueType: "number", key: "BSCCondSwitchOn", script: !0 }, { valueType: "number", key: "BSC条件スイッチOFF", script: !0 }, {
  valueType: "number",
  key: "BSCCondSwitchOff",
  script: !0
}, { valueType: "string", key: "BSC条件スクリプト", script: !1 }, { valueType: "string", key: "BSCCondScript", script: !1 }, {
  valueType: "number",
  key: "BSCスキルタイプ*条件ステート有効",
  script: !0
}, { valueType: "number", key: "BSCSkillType*CondStateValid", script: !0 }, { valueType: "number", key: "BSCスキルタイプ*条件ステート無効", script: !0 }, {
  valueType: "number",
  key: "BSCSkillType*CondStateInvalid",
  script: !0
}, { valueType: "number", key: "BSCスキルタイプ*条件スイッチON", script: !0 }, { valueType: "number", key: "BSCSkillType*CondSwitchOn", script: !0 }, {
  valueType: "number",
  key: "BSCスキルタイプ*条件スイッチOFF",
  script: !0
}, { valueType: "number", key: "BSCSkillType*CondSwitchOff", script: !0 }, { valueType: "string", key: "BSCスキルタイプ*条件スクリプト", script: !1 }, {
  valueType: "string",
  key: "BSCSkillType*CondScript",
  script: !1
}, { valueType: "number", key: "BSCアイテム条件ステート有効", script: !0 }, { valueType: "number", key: "BSCItemCondStateValid", script: !0 }, {
  valueType: "number",
  key: "BSCアイテム条件ステート無効",
  script: !0
}, { valueType: "number", key: "BSCItemCondStateInvalid", script: !0 }, { valueType: "number", key: "BSCアイテム条件スイッチON", script: !0 }, {
  valueType: "number",
  key: "BSCItemCondSwitchOn",
  script: !0
}, { valueType: "number", key: "BSCアイテム条件スイッチOFF", script: !0 }, { valueType: "number", key: "BSCItemCondSwitchOff", script: !0 }, {
  valueType: "string",
  key: "BSCアイテム条件スクリプト",
  script: !1
}, { valueType: "string", key: "BSCItemCondScript", script: !1 }] }, S = { author: "トリアコンタン", pluginName: "BigEnemy", noteSchema: [{
  valueType: "boolean",
  key: "BigEnemy",
  script: !1
}] }, b = { author: "トリアコンタン", pluginName: "CharacterGraphicManager", noteSchema: [{ valueType: "string", key: "CGMノーマル", script: !0 }, {
  valueType: "string",
  key: "CGM耐久*",
  script: !0
}] }, C = { author: "トリアコンタン", pluginName: "ChargeTimeControl", noteSchema: [{ valueType: "number", key: "ChargeTime", script: !1 }, {
  valueType: "string",
  key: "ChargeTimeJs",
  script: !0
}, { valueType: "number", key: "ChargeTimePlusRate", script: !1 }, { valueType: "number", key: "ChargeTimeMinusRate", script: !1 }] }, E = {
  author: "トリアコンタン",
  pluginName: "CommandSkill",
  noteSchema: [{ valueType: "string", key: "CommandSkill", script: !1 }, { valueType: "string", key: "コマンドスキル", script: !1 }, {
    valueType: "boolean",
    key: "HiddenCommandSkill",
    script: !1
  }, { valueType: "boolean", key: "隠しコマンドスキル", script: !1 }]
}, A = { author: "トリアコンタン", pluginName: "ConditionalState", noteSchema: [{ valueType: "string", key: "CS_上限HP", script: !1 }, {
  valueType: "string",
  key: "CS_UpperHp",
  script: !1
}, { valueType: "string", key: "CS_下限HP", script: !1 }, { valueType: "string", key: "CS_LowerHp", script: !1 }, {
  valueType: "string",
  key: "CS_上限MP",
  script: !1
}, { valueType: "string", key: "CS_UpperMp", script: !1 }, { valueType: "string", key: "CS_下限MP", script: !1 }, { valueType: "string", key: "CS_LowerMp", script: !1 }, {
  valueType: "string",
  key: "CS_上限TP",
  script: !1
}, { valueType: "string", key: "CS_UpperTp", script: !1 }, { valueType: "string", key: "CS_下限TP", script: !1 }, { valueType: "string", key: "CS_LowerTp", script: !1 }, {
  valueType: "string",
  key: "CS_上限HP値",
  script: !1
}, { valueType: "string", key: "CS_UpperHpValue", script: !1 }, { valueType: "string", key: "CS_下限HP値", script: !1 }, {
  valueType: "string",
  key: "CS_LowerHpValue",
  script: !1
}, { valueType: "string", key: "CS_上限MP値", script: !1 }, { valueType: "string", key: "CS_UpperMpValue", script: !1 }, { valueType: "string", key: "CS_下限MP値", script: !1 }, {
  valueType: "string",
  key: "CS_LowerMpValue",
  script: !1
}, { valueType: "string", key: "CS_上限TP値", script: !1 }, { valueType: "string", key: "CS_UpperTpValue", script: !1 }, {
  valueType: "string",
  key: "CS_下限TP値",
  script: !1
}, { valueType: "string", key: "CS_LowerTpValue", script: !1 }] }, h = { author: "トリアコンタン", pluginName: "ConditionalXparam", noteSchema: [{
  valueType: "boolean",
  key: "<xparamList.tagで指定した任意タグ>",
  script: !1
}] }, _ = { author: "トリアコンタン", pluginName: "CounterExtend", noteSchema: [{ valueType: "string", key: "CounterExtend", script: !1 }, {
  valueType: "string",
  key: "反撃拡張",
  script: !1
}, { valueType: "number", key: "CounterEvasion", script: !1 }, { valueType: "number", key: "反撃回避", script: !1 }, {
  valueType: "number",
  key: "<SkillList.FrequencyTagで指定した任意タグ>",
  script: !1
}, { valueType: "boolean", key: "<SkillList.MemoTagConditionで指定した任意タグ>", script: !1 }] }, N = { author: "トリアコンタン", pluginName: "CursedAction", noteSchema: [{
  valueType: "string",
  key: "CursedAction",
  script: !1
}, { valueType: "string", key: "呪い行動", script: !1 }] }, D = { author: "トリアコンタン", pluginName: "CustomizeAttackGuard", noteSchema: [{
  valueType: "number",
  key: "CAGAttack",
  script: !1
}, { valueType: "number", key: "CAG攻撃", script: !1 }, { valueType: "number", key: "CAGGuard", script: !1 }, { valueType: "number", key: "CAG防御", script: !1 }] }, P = {
  author: "トリアコンタン",
  pluginName: "CustomizeCritical",
  noteSchema: [{ valueType: "string", key: "CC計算式", script: !0 }, { valueType: "string", key: "CCFormula", script: !0 }, { valueType: "number", key: "CC確率加算", script: !1 }, {
    valueType: "number",
    key: "CCProbAdd",
    script: !1
  }, { valueType: "number", key: "CC確率変更", script: !1 }, { valueType: "number", key: "CCProbChange", script: !1 }, {
    valueType: "number",
    key: "CCアニメ",
    script: !1
  }, { valueType: "number", key: "CCAnimation", script: !1 }, { valueType: "number", key: "CC演出", script: !1 }, { valueType: "number", key: "CCエフェクト", script: !1 }, {
    valueType: "string",
    key: "CCメッセージ",
    script: !1
  }, { valueType: "string", key: "CCMessage", script: !1 }]
}, d = { author: "トリアコンタン", pluginName: "CustomizeFailureMessage", noteSchema: [{
  valueType: "string",
  key: "FailureMessage",
  script: !1
}, { valueType: "string", key: "失敗メッセージ", script: !1 }] }, B = { author: "トリアコンタン", pluginName: "DamageLimitation", noteSchema: [{
  valueType: "number",
  key: "MaxInflicted",
  script: !1
}, { valueType: "number", key: "最大与ダメージ", script: !1 }, { valueType: "number", key: "MaxReceived", script: !1 }, { valueType: "number", key: "最大被ダメージ", script: !1 }] }, I = {
  author: "トリアコンタン",
  pluginName: "DeathLostMpTp",
  noteSchema: [{ valueType: "number", key: "DeathLostMp", script: !1 }, { valueType: "number", key: "DeathLostTp", script: !1 }]
}, L = {
  author: "トリアコンタン",
  pluginName: "DescriptionExtend",
  noteSchema: [{ valueType: "string", key: "ExtendDesc", script: !1 }, { valueType: "string", key: "拡張説明", script: !1 }]
}, G = {
  author: "トリアコンタン",
  pluginName: "DescriptionTemplate",
  noteSchema: [{ valueType: "number", key: "TemplateIndex", script: !1 }, { valueType: "boolean", key: "NoDescTemplate", script: !1 }]
}, M = {
  author: "トリアコンタン",
  pluginName: "DestinationWindow",
  noteSchema: [{ valueType: "boolean", key: "noDestinationWindow", script: !1 }]
}, U = { author: "triacontane", pluginName: "DirectlyAttackEffect", noteSchema: [{
  valueType: "string",
  key: "DAE攻撃",
  script: !1
}, { valueType: "string", key: "DAEAttack", script: !1 }, { valueType: "string", key: "DAE帰投", script: !1 }, { valueType: "string", key: "DAEReturn", script: !1 }, {
  valueType: "boolean",
  key: "DAE姿隠し",
  script: !1
}, { valueType: "boolean", key: "DAEHidden", script: !1 }, { valueType: "boolean", key: "DAE残像", script: !1 }, {
  valueType: "boolean",
  key: "DAEAfterimage",
  script: !1
}, { valueType: "boolean", key: "DAE帰投なし", script: !1 }, { valueType: "boolean", key: "DAENoReturn", script: !1 }, { valueType: "number", key: "DAEアニメ", script: !1 }, {
  valueType: "number",
  key: "DAEAnimation",
  script: !1
}, { valueType: "number", key: "DAE攻撃アニメ", script: !1 }, { valueType: "number", key: "DAEAttackAnimation", script: !1 }, { valueType: "number", key: "DAE対象者アニメ", script: !1 }, {
  valueType: "number",
  key: "DAETargetAnimation",
  script: !1
}, { valueType: "string", key: "DAE絶対位置", script: !0 }, { valueType: "string", key: "DAEAbsolutePos", script: !0 }, {
  valueType: "string",
  key: "DAE相対位置",
  script: !0
}, { valueType: "string", key: "DAERelativePos", script: !0 }, { valueType: "string", key: "DAE自己相対位置", script: !0 }, {
  valueType: "string",
  key: "DAESelfRelativePos",
  script: !0
}, { valueType: "string", key: "DAE瞬間移動", script: !0 }, { valueType: "string", key: "DAETeleport", script: !0 }, { valueType: "boolean", key: "DAEアクターのみ", script: !1 }, {
  valueType: "boolean",
  key: "DAEActorOnly",
  script: !1
}, { valueType: "boolean", key: "DAE敵キャラのみ", script: !1 }, { valueType: "boolean", key: "DAEEnemyOnly", script: !1 }, { valueType: "number", key: "DAE武器", script: !1 }, {
  valueType: "number",
  key: "DAEWeapon",
  script: !1
}, { valueType: "string", key: "DAEモーション", script: !1 }, { valueType: "string", key: "DAEMotion", script: !1 }, {
  valueType: "string",
  key: "DAE開始モーション",
  script: !1
}, { valueType: "string", key: "DAEStartMotion", script: !1 }, { valueType: "string", key: "DAE終了モーション", script: !1 }, { valueType: "string", key: "DAEEndMotion", script: !1 }, {
  valueType: "boolean",
  key: "DAEVanish",
  script: !1
}, { valueType: "boolean", key: "DAE消滅", script: !1 }] }, O = { author: "トリアコンタン", pluginName: "DrainExtend", noteSchema: [{
  valueType: "string",
  key: "DrainEx",
  script: !1
}, { valueType: "string", key: "吸収拡張", script: !1 }, { valueType: "string", key: "DrainRate", script: !0 }, { valueType: "string", key: "吸収有効率", script: !0 }] }, R = {
  author: "トリアコンタン",
  pluginName: "DynamicActorGraphic",
  noteSchema: [{ valueType: "boolean", key: "<list.tagで指定した任意タグ>", script: !1 }]
}, f = { author: "トリアコンタン", pluginName: "DynamicBattlerParam", noteSchema: [] }, F = {
  author: "トリアコンタン",
  pluginName: "DynamicDatabase",
  noteSchema: [{ valueType: "string", key: "DD<項目名>", script: !0 }]
}, H = { author: "トリアコンタン", pluginName: "DynamicEquipParam", noteSchema: [{
  valueType: "string",
  key: "DEP_最大HP",
  script: !0
}, { valueType: "string", key: "DEP_Mhp", script: !0 }, { valueType: "string", key: "DEP_最大MP", script: !0 }, {
  valueType: "string",
  key: "DEP_Mmp",
  script: !0
}, { valueType: "string", key: "DEP_攻撃力", script: !0 }, { valueType: "string", key: "DEP_Atk", script: !0 }, { valueType: "string", key: "DEP_防御力", script: !0 }, {
  valueType: "string",
  key: "DEP_Def",
  script: !0
}, { valueType: "string", key: "DEP_魔法力", script: !0 }, { valueType: "string", key: "DEP_Mat", script: !0 }, { valueType: "string", key: "DEP_魔法防御", script: !0 }, {
  valueType: "string",
  key: "DEP_Mdf",
  script: !0
}, { valueType: "string", key: "DEP_敏捷性", script: !0 }, { valueType: "string", key: "DEP_Agi", script: !0 }, { valueType: "string", key: "DEP_運", script: !0 }, {
  valueType: "string",
  key: "DEP_Luk",
  script: !0
}, { valueType: "number", key: "<計算式中 a.special('tag') で参照する任意タグ>", script: !1 }] }, x = { author: "トリアコンタン", pluginName: "EffectConditions", noteSchema: [] }, q = {
  author: "トリアコンタン",
  pluginName: "EnemyRewardRate",
  noteSchema: [{ valueType: "number", key: "経験値倍率", script: !1 }, { valueType: "number", key: "ExpRate", script: !1 }, { valueType: "number", key: "金額倍率", script: !1 }, {
    valueType: "number",
    key: "GoldRate",
    script: !1
  }]
}, w = { author: "トリアコンタン", pluginName: "EquipConditionExtend", noteSchema: [{ valueType: "string", key: "装備条件スキル", script: !1 }, {
  valueType: "string",
  key: "EquipCondSkill",
  script: !1
}, { valueType: "string", key: "装備条件ステート", script: !1 }, { valueType: "string", key: "EquipCondState", script: !1 }, { valueType: "string", key: "装備条件アクター", script: !1 }, {
  valueType: "string",
  key: "EquipCondActor",
  script: !1
}, { valueType: "string", key: "装備条件スイッチ", script: !1 }, { valueType: "string", key: "EquipCondSwitch", script: !1 }, {
  valueType: "string",
  key: "装備条件武器",
  script: !1
}, { valueType: "string", key: "EquipCondWeapon", script: !1 }, { valueType: "string", key: "装備条件防具", script: !1 }, { valueType: "string", key: "EquipCondArmor", script: !1 }, {
  valueType: "number",
  key: "装備条件HP",
  script: !1
}, { valueType: "number", key: "EquipCondHp", script: !1 }, { valueType: "number", key: "装備条件MP", script: !1 }, {
  valueType: "number",
  key: "EquipCondMp",
  script: !1
}, { valueType: "number", key: "装備条件攻撃", script: !1 }, { valueType: "number", key: "EquipCondAtk", script: !1 }, { valueType: "number", key: "装備条件防御", script: !1 }, {
  valueType: "number",
  key: "EquipCondDef",
  script: !1
}, { valueType: "number", key: "装備条件魔法", script: !1 }, { valueType: "number", key: "EquipCondMat", script: !1 }, { valueType: "number", key: "装備条件魔防", script: !1 }, {
  valueType: "number",
  key: "EquipCondMdf",
  script: !1
}, { valueType: "number", key: "装備条件敏捷", script: !1 }, { valueType: "number", key: "EquipCondAgi", script: !1 }, {
  valueType: "number",
  key: "装備条件運",
  script: !1
}, { valueType: "number", key: "EquipCondLuk", script: !1 }, { valueType: "string", key: "装備条件計算式", script: !0 }, { valueType: "string", key: "EquipCondFormula", script: !0 }, {
  valueType: "boolean",
  key: "装備条件反転",
  script: !1
}] }, X = { author: "トリアコンタン", pluginName: "EquipSlotInvalidate", noteSchema: [{ valueType: "number", key: "装備無効", script: !1 }, {
  valueType: "number",
  key: "EquipInvalid",
  script: !1
}] }, Y = { author: "トリアコンタン", pluginName: "EvasionIgnore", noteSchema: [{ valueType: "boolean", key: "回避無視", script: !1 }, {
  valueType: "boolean",
  key: "EvasionIgnore",
  script: !1
}] }, V = { author: "トリアコンタン", pluginName: "EventInterceptor", noteSchema: [] }, Z = { author: "triacontane", pluginName: "EventLabel", noteSchema: [{ valueType: "string", key: "LB", script: !1 }, {
  valueType: "boolean",
  key: "LB_No",
  script: !1
}, { valueType: "number", key: "LB_X", script: !1 }, { valueType: "number", key: "LB_Y", script: !1 }, { valueType: "number", key: "LB_Z", script: !1 }, {
  valueType: "string",
  key: "LB_S",
  script: !1
}, { valueType: "boolean", key: "LB_T", script: !1 }] }, z = { author: "トリアコンタン", pluginName: "EventMovableLimitation", noteSchema: [{
  valueType: "string",
  key: "移動制限",
  script: !1
}, { valueType: "string", key: "Movable", script: !1 }] }, K = { author: "トリアコンタン", pluginName: "EventNoLock", noteSchema: [{ valueType: "boolean", key: "ロック無効", script: !1 }, {
  valueType: "boolean",
  key: "DisableLock",
  script: !1
}] }, W = { author: "トリアコンタン", pluginName: "EventReSpawn", noteSchema: [{ valueType: "number", key: "CP", script: !1 }] }, J = {
  author: "トリアコンタン",
  pluginName: "EventStartSe",
  noteSchema: [{ valueType: "string", key: "StartSe", script: !1 }]
}, j = {
  author: "トリアコンタン",
  pluginName: "ExpForOutsideParty",
  noteSchema: [{
    valueType: "number",
    key: "OutsidePartyExpRate",
    script: !1
  }, { valueType: "number", key: "パーティ外経験値レート", script: !1 }]
}, $ = () => [p, a, r, i, u, n, y, T, c, l, s, o, k, v, m, g, S, b, C, E, A, h, _, N, D, P, d, B, I, L, G, M, U, O, R, f, F, H, x, q, w, X, Y, V, Z, z, K, W, J, j], ee = (e) => e.flatMap(Q), Q = (e) => e.noteSchema.filter(((t) => t.valueType === "text")).map(((t) => t.key));
export {
  a as PLUGIN_ACCUMULATE_STATE,
  r as PLUGIN_ACTION_EFFECT_EXTEND,
  i as PLUGIN_ADDITIONAL_DESCRIPTION,
  u as PLUGIN_ADDITIONAL_SKILL_MESSAGE,
  n as PLUGIN_AIRSHIP_EVENT,
  y as PLUGIN_ANIMATION_BY_SUBJECT,
  T as PLUGIN_ATTACK_CHAIN,
  c as PLUGIN_AUTOMATIC_STATE,
  l as PLUGIN_AUTO_RAISE,
  s as PLUGIN_AUTO_SELF_SWITCH,
  o as PLUGIN_BALLOON_POSITION,
  m as PLUGIN_BATTLER_GRAPHIC_EXTEND,
  k as PLUGIN_BATTLE_BALLOON,
  v as PLUGIN_BATTLE_FORMATION_CUSTOMIZE,
  g as PLUGIN_BATTLE_SPECIAL_COMMAND,
  S as PLUGIN_BIG_ENEMY,
  b as PLUGIN_CHARACTER_GRAPHIC_MANAGER,
  C as PLUGIN_CHARGE_TIME_CONTROL,
  E as PLUGIN_COMMAND_SKILL,
  A as PLUGIN_CONDITIONAL_STATE,
  h as PLUGIN_CONDITIONAL_XPARAM,
  _ as PLUGIN_COUNTER_EXTEND,
  N as PLUGIN_CURSED_ACTION,
  D as PLUGIN_CUSTOMIZE_ATTACK_GUARD,
  P as PLUGIN_CUSTOMIZE_CRITICAL,
  d as PLUGIN_CUSTOMIZE_FAILURE_MESSAGE,
  p as PLUGIN_MZ3D,
  $ as allNoteSchemas,
  ee as definedTextKeys
};
