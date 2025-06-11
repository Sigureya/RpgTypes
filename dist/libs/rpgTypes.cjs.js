"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const e = require("ajv"), t = (e2, t2) => `\\${e2}[${t2}]`, a = (e2 = {}) => ({
  switch1Id: e2.switch1Id ?? 0,
  switch1Valid: void 0 !== e2.switch1Id,
  switch2Id: e2.switch2Id ?? 0,
  switch2Valid: void 0 !== e2.switch2Id,
  variableId: e2.variableId ?? 0,
  variableValid: void 0 !== e2.variableId,
  variableValue: e2.variableValue ?? 0,
  selfSwitchCh: e2.selfSwitchCh ?? "A",
  selfSwitchValid: void 0 !== e2.selfSwitchCh,
  itemId: e2.itemId ?? 0,
  itemValid: void 0 !== e2.itemId,
  actorId: e2.actorId ?? 0,
  actorValid: void 0 !== e2.actorId
}), r = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), o = {
  type: "object",
  required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: {
    type: "integer"
  }, parentId: { type: "integer" }, scrollX: { type: "integer" }, scrollY: { type: "integer" } }
}, i = {
  type: "object",
  required: ["image", "moveRoute", "conditions", "directionFix", "moveFrequency"],
  properties: { moveFrequency: { type: "integer" }, directionFix: { type: "boolean" }, conditions: {
    type: "object",
    required: ["switch1Id", "switch1Valid", "switch2Id", "switch2Valid", "variableId", "variableValid", "selfSwitchCh", "selfSwitchValid", "variableValue", "itemId", "itemValid", "actorId", "actorValid"],
    properties: { switch1Id: { type: "integer", minimum: 0 }, switch1Valid: { type: "boolean" }, switch2Id: { type: "integer", minimum: 0 }, switch2Valid: { type: "boolean" }, variableId: {
      type: "integer",
      minimum: 0
    }, variableValid: { type: "boolean" }, selfSwitchCh: { type: "string" }, selfSwitchValid: { type: "boolean" }, variableValue: { type: "integer" }, itemId: { type: "integer", minimum: 0 }, itemValid: {
      type: "boolean"
    }, actorId: { type: "integer" }, actorValid: { type: "boolean" } }
  }, image: { type: "object", required: ["characterIndex", "characterName", "direction", "pattern", "tileId"], properties: {
    characterIndex: { type: "integer", minimum: 0 },
    characterName: { type: "string" },
    direction: { type: "integer", enum: [2, 4, 6, 8] },
    pattern: { type: "integer" },
    tileId: { type: "integer" }
  } }, moveRoute: {
    type: "object",
    required: ["wait", "repeat", "skippable", "list"],
    properties: { wait: { type: "boolean" }, repeat: { type: "boolean" }, skippable: { type: "boolean" }, list: { type: "array", items: {
      type: "object",
      required: ["code", "parameters"],
      properties: { code: { type: "integer" }, parameters: { type: "array", items: { oneOf: [{ type: "string" }, { type: "number" }, {
        type: "object",
        required: ["name", "pan", "pitch", "volume"],
        properties: { name: { type: "string" }, pan: { type: "integer" }, pitch: { type: "integer" }, volume: { type: "integer" } }
      }] } } }
    } } }
  } }
}, s = {
  type: "object",
  required: ["battleback1Name", "battleback2Name", "note", "width", "height", "x", "y", "parallaxSy", "parallaxSx", "parallaxLoopY", "parallaxLoopX", "disableDashing", "parallaxName", "parallaxShow", "displayName", "data", "autoplayBgm", "bgm", "autoplayBgs", "bgs"],
  properties: {
    data: { type: "array", items: { type: "integer" } },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
    parallaxLoopY: { type: "boolean" },
    parallaxLoopX: {
      type: "boolean"
    },
    parallaxName: { type: "string" },
    parallaxShow: { type: "boolean" },
    parallaxSy: { type: "integer" },
    parallaxSx: { type: "integer" },
    x: { type: "integer", minimum: 0 },
    y: { type: "integer", minimum: 0 },
    width: { type: "integer", minimum: 0 },
    height: { type: "integer", minimum: 0 },
    note: { type: "string" },
    displayName: { type: "string" },
    disableDashing: { type: "boolean" },
    autoplayBgm: { type: "boolean" },
    bgm: { type: "object", required: ["name", "pan", "pitch", "volume"], properties: { name: { type: "string" }, pan: { type: "integer" }, pitch: { type: "integer" }, volume: { type: "integer" } } },
    autoplayBgs: {
      type: "boolean"
    },
    bgs: { type: "object", required: ["name", "pan", "pitch", "volume"], properties: { name: { type: "string" }, pan: { type: "integer" }, pitch: { type: "integer" }, volume: { type: "integer" } } },
    encounterList: { type: "array", items: { type: "object", required: ["regionSet", "troopId", "weight"], properties: {
      regionSet: { type: "array", items: { type: "integer" } },
      troopId: { type: "integer" },
      weight: { type: "integer" }
    } } },
    events: { type: "array", items: { type: "object", required: ["id", "name", "x", "y", "pages"], properties: {
      id: { type: "integer" },
      name: { type: "string" },
      x: { type: "integer" },
      y: { type: "integer" },
      note: { type: "string" },
      pages: { type: "array", items: i }
    } } }
  }
}, p = new e(), n = p.compile(o), m = p.compile(s), d = (e2, t2) => ({ label: t2.skill.domainName, items: e2, source: {
  author: "rmmz",
  module: "data",
  kind: "skill"
} }), l = (e2, t2) => ({ items: e2, label: t2.actor.domainName, source: { author: "rmmz", module: "data", kind: "actor" } }), c = (e2, t2) => ({ items: e2, label: t2.state.domainName, source: {
  author: "rmmz",
  module: "data",
  kind: "state"
} }), y = (e2, t2) => ({ items: e2, label: t2.armor.domainName, source: { author: "rmmz", kind: "armor", module: "data" } }), u = (e2, t2) => ({
  items: e2,
  label: t2.class.domainName,
  source: { author: "rmmz", module: "data", kind: "class" }
}), x = (e2, t2) => ({
  items: e2,
  label: t2.enemy.domainName,
  source: { author: "rmmz", module: "data", kind: "enemy" }
}), E = (e2, t2) => ({ items: e2, label: t2.item.domainName, source: { author: "rmmz", module: "data", kind: "item" } }), g = (e2, t2) => ({ items: e2, label: t2.weapon.domainName, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), A = (e2, t2) => ({ items: e2, label: t2.commonEvent.domainName, source: { author: "rmmz", module: "data", kind: "common_event" } }), T = {
  actor: { domainName: "アクター", options: {
    initialEquipments: "初期装備",
    faceImage: "顔画像",
    characterImage: "キャラクター画像",
    svBattlerImage: "SVバトラー画像",
    nickname: "ニックネーム",
    profile: "プロフィール",
    classId: "職業ID",
    initialLevel: "初期レベル",
    maxLevel: "最大レベル"
  } },
  class: { domainName: "職業", options: { params: "パラメータ", learnings: "習得スキル", expParams: "経験値パラメータ" } },
  armor: { domainName: "防具", options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" } },
  enemy: {
    domainName: "敵キャラ",
    options: { dropItems: "ドロップアイテム", battlerHue: "バトラーヒュー", battlerName: "バトラー名", gold: "ゴールド" }
  },
  item: { domainName: "アイテム", options: { consumable: "消耗品" } },
  skill: {
    domainName: "スキル",
    options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
  },
  state: { domainName: "ステート", options: {
    restriction: "制約",
    priority: "優先度",
    motion: "モーション",
    overlay: "オーバーレイ",
    removeAtBattleEnd: "戦闘終了時解除",
    removeByRestriction: "制約による解除",
    autoRemovalTiming: "自動解除タイミング",
    minTurns: "最小ターン数",
    maxTurns: "最大ターン数",
    removeByDamage: "ダメージによる解除",
    chanceByDamage: "ダメージによる解除確率",
    removeByWalking: "歩行による解除",
    stepsToRemove: "解除までの歩数"
  } },
  weapon: { domainName: "武器", options: { weaponTypeId: "武器タイプID" } },
  usableItem: {
    domainName: "",
    options: { scope: "範囲", speed: "速度補正", successRate: "成功率" }
  },
  commonEvent: { domainName: "コモンイベント", options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" } }
}, I = { domainName: "ダメージ", options: {} }, _ = (e2 = {}) => ({ type: e2.type ?? 0, elementId: e2.elementId ?? 0, formula: e2.formula ?? "", variance: e2.variance ?? 0, critical: e2.critical ?? false }), R = {
  type: "object",
  required: ["name", "id", "nickname", "battlerName", "characterName", "characterIndex", "faceName", "faceIndex", "classId", "initialLevel", "maxLevel"],
  properties: {
    name: { type: "string" },
    battlerName: { type: "string" },
    characterName: { type: "string" },
    characterIndex: { type: "integer" },
    faceName: { type: "string" },
    faceIndex: { type: "integer", minimum: 0, maximum: 7 },
    id: {
      type: "integer",
      minimum: 0
    },
    nickname: { type: "string" },
    profile: { type: "string" },
    initialLevel: { type: "integer", minimum: 0 },
    maxLevel: { type: "integer" },
    classId: { type: "integer", minimum: 0 },
    equips: { type: "array", items: { type: "integer" } },
    note: { type: "string" },
    traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: {
      type: "integer"
    } }, required: ["code", "dataId", "value"] } }
  }
}, S = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "atypeId"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, description: { type: "string" }, iconIndex: { type: "integer", minimum: 0 }, price: { type: "integer", minimum: 0 }, note: {
    type: "string"
  }, etypeId: { type: "integer", minimum: 0 }, atypeId: { type: "integer", minimum: 0 }, params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 }, traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: {
    type: "integer"
  }, value: { type: "integer" } }, required: ["code", "dataId", "value"] } } }
}, N = { type: "object", required: ["name", "id", "note", "expParams", "params", "learnings", "traits"], properties: {
  name: { type: "string" },
  id: { type: "integer", minimum: 0 },
  note: { type: "string" },
  expParams: { type: "array", items: { type: "integer" } },
  params: { type: "array", items: [{ type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 },
  learnings: { type: "array", items: {
    type: "object",
    properties: { level: { type: "integer" }, skillId: { type: "integer" }, note: { type: "string" } },
    required: ["level", "skillId"],
    additionalProperties: false
  } },
  traits: { type: "array", items: {
    type: "object",
    properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } },
    required: ["code", "dataId", "value"],
    additionalProperties: false
  } }
}, additionalProperties: false }, b = {
  type: "object",
  required: ["name", "id", "battlerName", "battlerHue", "exp", "gold", "note", "params", "dropItems", "traits", "actions"],
  properties: {
    name: { type: "string" },
    id: {
      type: "integer",
      minimum: 0
    },
    battlerHue: { type: "integer", minimum: 0 },
    battlerName: { type: "string" },
    exp: { type: "integer", minimum: 0 },
    gold: { type: "integer", minimum: 0 },
    note: { type: "string" },
    params: {
      type: "array",
      items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }],
      minItems: 8,
      maxItems: 8
    },
    actions: { type: "array", items: { type: "object", required: ["conditionParam1", "conditionParam2", "conditionType", "skillId", "rating"], properties: {
      conditionParam1: { type: "integer" },
      conditionParam2: { type: "integer" },
      conditionType: { type: "integer" },
      skillId: { type: "integer" },
      rating: { type: "integer" }
    } } },
    traits: { type: "array", items: { type: "object", properties: { code: {
      type: "integer"
    }, dataId: { type: "integer" }, value: { type: "integer" } }, required: ["code", "dataId", "value"] } },
    dropItems: { type: "array", items: { type: "object", properties: {
      kind: { type: "integer" },
      dataId: { type: "integer" },
      denominator: { type: "integer", minimum: 0 },
      rate: { type: "number" }
    }, required: ["kind", "dataId", "denominator"] } }
  }
}, C = (e2 = {}) => ({
  dataId: e2.dataId ?? 0,
  denominator: e2.denominator ?? 0,
  kind: e2.kind ?? 0
}), M = {
  type: "object",
  required: ["name", "id", "iconIndex", "message1", "message2", "message3", "message4", "restriction", "priority", "motion", "overlay", "removeAtBattleEnd", "removeByDamage", "removeByWalking", "removeByRestriction", "autoRemovalTiming", "minTurns", "maxTurns", "chanceByDamage", "stepsToRemove", "note"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    iconIndex: { type: "integer", minimum: 0 },
    message1: { type: "string" },
    message2: { type: "string" },
    message3: { type: "string" },
    message4: { type: "string" },
    restriction: { type: "integer" },
    priority: { type: "integer" },
    motion: { type: "integer" },
    overlay: { type: "integer" },
    removeAtBattleEnd: { type: "boolean" },
    removeByDamage: {
      type: "boolean"
    },
    removeByWalking: { type: "boolean" },
    removeByRestriction: { type: "boolean" },
    messageType: { type: "integer" },
    releaseByDamage: { type: "boolean" },
    autoRemovalTiming: {
      type: "integer"
    },
    minTurns: { type: "integer" },
    maxTurns: { type: "integer" },
    chanceByDamage: { type: "integer" },
    stepsToRemove: { type: "integer" },
    note: { type: "string" },
    traits: { type: "array", items: {
      type: "object",
      properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } },
      required: ["code", "dataId", "value"]
    } }
  }
}, h = (e2, t2) => ({
  items: f(e2.options, t2),
  label: e2.domainName,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), f = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, { id: 2, name: e2.instantCollaps }, {
  id: 3,
  name: e2.noneCollaps
}], k = (e2) => ({ items: O(e2.options), label: e2.domainName, source: { author: "rmmz", module: "trait", kind: "xparams" } }), O = (e2) => [{ id: 0, name: e2.hitRate }, { id: 1, name: e2.evasionRate }, {
  id: 2,
  name: e2.criticalRate
}, { id: 3, name: e2.criticalEvasionRate }, { id: 4, name: e2.magicEvasionRate }, { id: 5, name: e2.magicReflectionRate }, { id: 6, name: e2.counterAttackRate }, {
  id: 7,
  name: e2.hpRegenerationRate
}, { id: 8, name: e2.mpRegenerationRate }, { id: 9, name: e2.tpRegenerationRate }], v = (e2) => ({ items: L(e2.options), label: e2.domainName, source: {
  author: "rmmz",
  module: "trait",
  kind: "params"
} }), L = (e2) => [{ id: 0, name: e2.maxHp }, { id: 1, name: e2.maxMp }, { id: 2, name: e2.atk }, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, { id: 5, name: e2.mdef }, { id: 6, name: e2.agi }, {
  id: 7,
  name: e2.luk
}], P = (e2) => ({ items: D(e2.options), label: e2.domainName, source: { author: "rmmz", module: "trait", kind: "sparams" } }), D = (e2) => [{ id: 0, name: e2.targetRate }, { id: 1, name: e2.guardEffectRate }, {
  id: 2,
  name: e2.recoveryEffectRate
}, { id: 3, name: e2.pharmacology }, { id: 4, name: e2.mpCostRate }, { id: 5, name: e2.tpChargeRate }, { id: 6, name: e2.physicalDamageRate }, { id: 7, name: e2.magicDamageRate }, {
  id: 8,
  name: e2.floorDamageRate
}, { id: 9, name: e2.experienceRate }], F = (e2) => ({ items: H(e2.options), label: e2.domainName, source: { author: "rmmz", module: "trait", kind: "partyAbility" } }), H = (e2) => [{
  id: 0,
  name: e2.encounterHalf
}, { id: 1, name: e2.encounterNone }, { id: 2, name: e2.cancelSurprise }, { id: 3, name: e2.raisePreemptive }, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], w = (e2) => ({
  items: B(e2.options),
  label: e2.domainName,
  source: { author: "rmmz", module: "trait", kind: "sflag" }
}), B = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
  id: 3,
  name: e2.preventEscape
}], G = "{name}", U = "{name} * {value}%", q = "{name} + {value}%", V = "{value}", z = { domainName: "特徴", options: { regularParam: { domainName: "基本能力値", format: U, options: {
  maxHp: "最大HP",
  maxMp: "最大MP",
  atk: "攻撃力",
  def: "防御力",
  matk: "魔法攻撃力",
  mdef: "魔法防御力",
  agi: "敏捷性",
  luk: "運"
} }, extraParam: { domainName: "追加能力値", format: q, options: {
  hitRate: "命中率",
  evasionRate: "回避率",
  criticalRate: "クリティカル率",
  criticalEvasionRate: "クリティカル回避率",
  magicEvasionRate: "魔法回避率",
  magicReflectionRate: "魔法反射率",
  counterAttackRate: "反撃率",
  hpRegenerationRate: "HP再生率",
  mpRegenerationRate: "MP再生率",
  tpRegenerationRate: "TP再生率"
} }, specialParam: { domainName: "特殊能力値", format: U, options: {
  targetRate: "狙われ率",
  guardEffectRate: "防御効果率",
  recoveryEffectRate: "回復効果率",
  pharmacology: "薬の知識",
  mpCostRate: "MP消費率",
  tpChargeRate: "TPチャージ率",
  physicalDamageRate: "物理ダメージ率",
  magicDamageRate: "魔法ダメージ率",
  floorDamageRate: "床ダメージ率",
  experienceRate: "経験値率"
} }, specialFlag: {
  domainName: "特殊フラグ",
  format: G,
  options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
}, collaps: { domainName: "消滅エフェクト", format: G, options: {
  bossCollaps: "ボス崩壊",
  instantCollaps: "即時崩壊",
  noneCollaps: "崩壊なし"
} }, partyAbility: { domainName: "パーティ能力", format: G, options: {
  cancelSurprise: "不意打ち無効",
  dropItemDouble: "アイテムドロップ2倍",
  encounterHalf: "エンカウント半減",
  encounterNone: "エンカウントなし",
  goldDouble: "ゴールド2倍",
  raisePreemptive: "先制攻撃率アップ"
} }, elementRate: { domainName: "属性有効度", format: U }, debuffRate: { domainName: "弱体有効度", format: U }, stateRate: {
  domainName: "ステート有効度",
  format: U
}, stateResist: { domainName: "ステート無効", format: G }, attackElement: { domainName: "攻撃属性", format: G }, attackState: { domainName: "攻撃ステート", format: q }, attackSpeed: {
  domainName: "攻撃速度補正",
  format: V
}, attackTimes: { domainName: "攻撃追加回数", format: V }, actionPlus: { domainName: "行動追加", format: U }, attackSkill: { domainName: "攻撃スキル", format: G }, equipWeaponType: {
  domainName: "装備武器タイプ",
  format: G
}, equipArmorType: { domainName: "装備防具タイプ", format: G }, equipLock: { domainName: "装備固定", format: G }, equipSeal: { domainName: "装備封印", format: G }, slotType: {
  domainName: "スロットタイプ",
  format: G
}, skillAdd: { domainName: "スキル追加", format: G }, skillSeal: { domainName: "スキルタイプ封印", format: G }, skillTypeAdd: { domainName: "スキルタイプ追加", format: G }, skillTypeSeal: {
  domainName: "スキルタイプ封印",
  format: G
} } }, Y = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 11, dataSource: Ae() }), W = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 12, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "params"
} }), j = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 13, dataSource: Ee() }), K = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 14,
  dataSource: Ee()
}), X = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 21, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), $ = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 22,
  dataSource: { author: "rmmz", module: "trait", kind: "xparams" }
}), Q = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), Z = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 31, dataSource: Ae() }), J = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 32, dataSource: Ee() }), ee = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 33
}), te = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 34 }), ae = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 35, dataSource: ge() }), re = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 41,
  dataSource: Te()
}), oe = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 42, dataSource: Te() }), ie = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 43,
  dataSource: ge()
}), se = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 44, dataSource: ge() }), pe = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 51, dataSource: Ie() }), ne = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 52,
  dataSource: _e()
}), me = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 53, dataSource: Re() }), de = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 54,
  dataSource: Re()
}), le = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 55, dataSource: Re() }), ce = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 61 }), ye = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 62,
  dataSource: { author: "rmmz", module: "trait", kind: "sflag" }
}), ue = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), xe = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), Ee = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), ge = () => ({ author: "rmmz", module: "data", kind: "skill" }), Ae = () => ({ author: "rmmz", module: "system", kind: "elements" }), Te = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), Ie = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), _e = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), Re = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), Se = "rmmz", Ne = (e2) => e2.map((e3) => ({ dataKey: e3, placeHolder: `{${e3}}` })), be = (e2) => ({ dataKey: e2.dataIdKey, placeHolder: `{${e2.dataIdKey}}`, sourceId: {
  author: e2.sourceId.author,
  kind: e2.sourceId.kind,
  module: e2.sourceId.module
} }), Ce = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, Me = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : [...t2];
}, he = (e2, t2 = []) => {
  return { itemMappers: [...Me(e2), ...t2].map(fe), fallbackFormat: { text: ke(e2), label: Oe(e2) }, properties: (a2 = e2.placeHolder ?? {}, {
    numbers: a2.numbers ? Ne(a2.numbers) : [],
    strings: a2.strings ? Ne(a2.strings) : []
  }), arrayIndex: e2.arrayIndex ? e2.arrayIndex.map(be) : [] };
  var a2;
}, fe = (e2) => ({
  placeHolder: `{${e2.placeHolder}}`,
  kindKey: e2.kindKey,
  dataIdKey: e2.dataIdKey
}), ke = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const t2 = ((e3) => {
    var _a2;
    const t3 = new Set(((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? []);
    return e3.itemMapper && t3.add(e3.itemMapper.kindKey), e3.itemMappers && e3.itemMappers.forEach((e4) => {
      t3.add(e4.kindKey);
    }), t3;
  })(e2);
  return 0 === t2.size ? "value not found" : Array.from(t2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, Oe = (e2) => {
  var _a2;
  return void 0 !== ((_a2 = e2.fallbackFormat) == null ? void 0 : _a2.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, ve = (e2, t2, a2) => {
  const r2 = t2[a2.dataKey];
  return null == r2 ? e2 : e2.replaceAll(a2.placeHolder, String(r2));
}, Le = (e2, t2, a2, r2) => {
  const o2 = Array.from(e2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), i2 = ((e3) => {
    var _a2;
    const t3 = new Set(((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? []);
    return e3.itemMapper && t3.add(e3.itemMapper.placeHolder), e3.itemMappers && e3.itemMappers.forEach((e4) => {
      t3.add(e4.placeHolder);
    }), t3;
  })(t2);
  return o2.reduce((e3, t3) => {
    const o3 = t3[1];
    return 0 === o3.length ? e3 : o3.length > r2 ? (e3.push({
      message: a2.longPlaceHolder,
      reason: o3.slice(0, r2)
    }), e3) : (i2.has(o3) || e3.push({ message: a2.extraPlaceHolder, reason: o3 }), e3);
  }, []);
}, Pe = (e2, t2, a2) => Me(t2).reduce((t3, r2) => {
  const o2 = De(e2, r2, a2);
  return o2 && t3.push(o2), t3;
}, []), De = (e2, t2, a2) => {
  const r2 = e2.pattern.includes(t2.placeHolder), o2 = !!e2.dataSource;
  return !r2 && o2 ? { message: a2.missingName, reason: t2.placeHolder } : r2 && !o2 ? {
    message: a2.missingSourceId,
    reason: t2.placeHolder
  } : void 0;
}, Fe = (e2, t2) => {
  const a2 = He(e2.dataSource, t2);
  return { patternCompiled: e2.pattern, label: e2.label, data: a2 ? a2.items : void 0 };
}, He = (e2, t2) => {
  if (e2) return t2.get(Ce(e2));
}, we = (e2) => e2.reduce((e3, t2) => {
  const a2 = { items: Be(t2.items), source: t2.source, label: t2.label };
  return e3.set(Ce(t2.source), a2), e3;
}, /* @__PURE__ */ new Map()), Be = (e2) => e2.map((e3) => ({
  id: e3.id,
  name: e3.name
})), Ge = (e2, t2, a2, r2, o2) => {
  const i2 = ((e3, t3, a3) => {
    const r3 = a3.properties.numbers.reduce((e4, a4) => ve(e4, t3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => ve(e4, t3, a4), r3);
  })(r2, e2, a2);
  return t2 ? Ue(i2, e2, a2, t2, o2) : i2;
}, Ue = (e2, t2, a2, r2, o2) => {
  const i2 = ((e3, t3) => {
    const a3 = ((e4, t4) => {
      const a4 = t4[e4];
      return a4 && a4.id === e4 ? a4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return a3 ? a3.name : `?data[${t3}]`;
  })(r2, o2(t2));
  return a2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, i2), e2);
}, qe = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: { numbers: ["value"] } }, Ve = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"],
  properties: {
    name: { type: "string" },
    id: {
      type: "integer",
      minimum: 0
    },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    wtypeId: {
      type: "integer",
      minimum: 0
    },
    animationId: { type: "integer", minimum: 0 },
    params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, {
      type: "integer"
    }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 },
    damage: { type: "object", properties: {
      type: { type: "integer", minimum: 0 },
      elementId: { type: "integer", minimum: 0 },
      formula: { type: "string" },
      variance: { type: "integer", minimum: 0, maximum: 100 },
      critical: { type: "boolean", default: false }
    }, required: ["type", "elementId", "formula", "variance", "critical"] },
    traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }, required: ["code", "dataId", "value"] } }
  }
}, ze = () => ({
  author: "rmmz",
  module: "effect",
  kind: "special"
}), Ye = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), We = (e2) => Ye(41, e2.special, ze()), je = (e2) => Ye(11, e2.recoverHp), Ke = (e2) => Ye(12, e2.recoverMp), Xe = (e2) => Ye(13, e2.gainTp), $e = (e2) => Ye(21, e2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), Qe = (e2) => Ye(22, e2.removeState, { author: "rmmz", module: "data", kind: "state" }), Ze = (e2) => Ye(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), Je = (e2) => Ye(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), et = (e2) => Ye(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), tt = (e2) => Ye(34, e2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), at = (e2) => Ye(42, e2.grow, { author: "rmmz", module: "trait", kind: "params" }), rt = (e2) => Ye(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), ot = (e2) => Ye(44, e2.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), it = "{name} {value1}%", st = "{value1}% + {value2}", pt = "{name} {value1}ターン", nt = "{name}", mt = { domainName: "使用効果", options: { addBuff: {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: pt
}, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: pt }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: st }, grow: {
  desc: "成長効果",
  domainName: "成長効果",
  format: "{name} + {value1}"
}, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: nt }, recoverHp: {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: st
}, recoverMp: {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: st
}, removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: nt }, removeDebuff: {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: nt
}, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: it }, special: { desc: "特殊効果", domainName: "特殊効果", format: nt }, addState: {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: it
}, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: nt } } }, dt = 0, lt = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "message1", "message2", "messageType", "mpCost", "requiredWtypeId1", "requiredWtypeId2", "stypeId", "tpCost", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "note", "effects"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    message1: { type: "string" },
    message2: { type: "string" },
    messageType: { type: "integer" },
    mpCost: { type: "integer" },
    requiredWtypeId1: { type: "integer" },
    requiredWtypeId2: { type: "integer" },
    stypeId: { type: "integer" },
    tpCost: { type: "integer" },
    animationId: { type: "integer", minimum: 0 },
    hitType: { type: "integer" },
    occasion: { type: "integer" },
    repeats: { type: "integer" },
    scope: { type: "integer" },
    speed: { type: "integer" },
    successRate: {
      type: "integer"
    },
    tpGain: { type: "integer" },
    note: { type: "string" },
    effects: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value1: {
      type: "integer"
    }, value2: { type: "integer" } }, required: ["code", "dataId", "value1", "value2"], additionalProperties: false } },
    damage: { type: "object", properties: { type: { type: "integer" }, elementId: {
      type: "integer"
    }, formula: { type: "string" }, variance: { type: "integer" }, critical: { type: "boolean" } }, required: ["type", "elementId", "formula", "variance", "critical"], additionalProperties: false }
  },
  additionalProperties: false
}, ct = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "note", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "consumable", "price", "effects"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, description: { type: "string" }, iconIndex: { type: "integer", minimum: 0 }, note: { type: "string" }, animationId: {
    type: "integer",
    minimum: 0
  }, hitType: { type: "integer" }, occasion: { type: "integer" }, repeats: { type: "integer" }, scope: { type: "integer" }, speed: { type: "integer" }, successRate: { type: "integer" }, tpGain: {
    type: "integer"
  }, consumable: { type: "boolean" }, price: { type: "integer", minimum: 0 }, itypeId: { type: "integer" }, effects: { type: "array", items: { type: "object", properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value1: { type: "integer" },
    value2: { type: "integer" }
  }, required: ["code", "dataId", "value1", "value2"], additionalProperties: false } }, damage: {
    type: "object",
    properties: {
      type: { type: "integer" },
      elementId: { type: "integer" },
      formula: { type: "string" },
      variance: { type: "integer" },
      critical: { type: "boolean" }
    },
    required: ["type", "elementId", "formula", "variance", "critical"],
    additionalProperties: false
  } }
}, yt = new e(), ut = yt.compile(ct), xt = yt.compile(lt), Et = yt.compile(R), gt = yt.compile(S), At = yt.compile(Ve), Tt = yt.compile(b), It = yt.compile(M), _t = yt.compile(N), Rt = (e2, t2) => `<${e2}:${t2}>`, St = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, Nt = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, bt = "data", Ct = "item", Mt = {
  id: "識別子",
  name: "名前",
  note: "メモ",
  description: "説明",
  iconIndex: "アイコンインデックス",
  occasion: "使用タイミング",
  params: "パラメータ",
  repeats: "繰り返し回数",
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率",
  animationId: "アニメーションID",
  displayType: "表示タイプ",
  characterIndex: "キャラクターインデックス",
  characterName: "キャラクター名",
  effectName: "効果名",
  faceIndex: "顔グラフィックインデックス",
  faceName: "顔グラフィック名",
  flashTimings: "フラッシュタイミング",
  list: "リスト",
  messageType: "メッセージタイプ",
  offsetX: "オフセットX",
  offsetY: "オフセットY",
  overlay: "オーバーレイ",
  priority: "優先度",
  restriction: "制約",
  rotation: "回転",
  scale: "スケール",
  soundTimings: "サウンドタイミング",
  stepsToRemove: "解除までの歩数",
  type: "タイプ",
  variance: "分散度",
  unknownCode: "不明なコード",
  content: "内容",
  apply: "適用",
  turn: "ターン",
  commonEvent: "コモンイベント",
  normal: "通常",
  dualWield: "二刀流",
  bossCollaps: "ボス崩壊",
  instantCollaps: "即時崩壊",
  noneCollaps: "崩壊なし",
  escape: "逃走"
}, ht = (e2 = {}) => ({ name: e2.name ?? "", volume: e2.volume ?? 100, pitch: e2.pitch ?? 100, pan: e2.pan ?? 0 }), ft = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [ht(t2)],
  indent: a2
}), kt = (e2) => [e2.eventId ?? 0], Ot = (e2) => [e2.min, e2.max, e2.value], vt = (e2) => [e2], Lt = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: vt(e2) }), Pt = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: vt(e2)
}), Dt = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], Ft = (e2 = {}) => [(e2 == null ? void 0 : e2.speed) ?? 4, (e2 == null ? void 0 : e2.skip) ?? false], Ht = (e2 = "") => [e2], wt = (e2, t2 = 0) => ({ code: 355, indent: t2, parameters: [e2] }), Bt = (e2, t2 = 0) => ({
  code: 655,
  indent: t2,
  parameters: [e2]
}), Gt = {
  HP: 0,
  MP: 1,
  MHP: 2,
  MMP: 3,
  ATK: 4,
  DEF: 5,
  MAT: 6,
  MDF: 7,
  AGI: 8,
  LUK: 9,
  TP: 10
}, Ut = (e2) => [...e2], qt = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, Vt = new e(), zt = Vt.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: {
    type: "integer",
    enum: [320, 324, 325]
  }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer", minimum: 0 }, { type: "string" }] } },
  additionalProperties: false
}), Yt = Vt.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "boolean" }]
} }, required: ["code", "indent", "parameters"] }), Wt = Vt.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: {
    type: "integer",
    enum: [132, 133, 139, 241, 245, 249, 250]
  }, indent: { type: "integer" }, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "object", properties: {
    name: { type: "string" },
    volume: { type: "integer" },
    pitch: { type: "integer" },
    pan: { type: "integer" }
  }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }] } },
  additionalProperties: false
}), jt = (e2) => Wt(e2), Kt = Vt.compile({ type: "object", required: ["code", "parameters", "indent"], properties: {
  indent: { type: "integer", minimum: 0 },
  parameters: { type: "array", minItems: 0, maxItems: 0 },
  code: { type: "integer", enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411] }
}, additionalProperties: false }), Xt = Vt.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), $t = (e2) => Xt(e2), Qt = Vt.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), Zt = Vt.compile({ type: "object", properties: {
  code: { type: "number", const: 102 },
  indent: { type: "integer", minimum: 0 },
  parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }] }
}, required: ["code", "indent", "parameters"] }), Jt = Vt.compile({ type: "object", properties: { code: { type: "number", const: 402 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } }, required: ["code", "indent", "parameters"] }), ea = Vt.compile({
  type: "object",
  properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "number" }] } },
  required: ["code", "indent", "parameters"]
}), ta = Vt.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { code: { type: "integer", const: 101 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", items: [{ type: "string" }, { type: "integer", minimum: 0, maximum: 7 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, {
  type: "string"
}], minItems: 5, maxItems: 5 } } }), aa = (e2 = {}) => ({
  gameId: e2.gameId ?? 0,
  screenWidth: e2.screenWidth ?? 0,
  screenHeight: e2.screenHeight ?? 0,
  uiAreaWidth: e2.uiAreaWidth ?? 0,
  uiAreaHeight: e2.uiAreaHeight ?? 0,
  windowOpacity: e2.windowOpacity ?? 0,
  screenScale: e2.screenScale ?? 1,
  numberFontFilename: e2.numberFontFilename ?? "",
  mainFontFilename: e2.mainFontFilename ?? "",
  fallbackFonts: e2.fallbackFonts ?? "",
  fontSize: e2.fontSize ?? 28
}), ra = (e2 = {}) => [ht(e2.cursor), ht(e2.ok), ht(e2.cancel), ht(e2.buzzer), ht(e2.equip), ht(e2.save), ht(e2.load), ht(e2.battleStart), ht(e2.escape), ht(e2.enemyAttack), ht(e2.enemyDamage), ht(e2.enemyCollapse), ht(e2.bossCollapes1), ht(e2.bossCollapes2), ht(e2.actorDamage), ht(e2.actorCollapse), ht(e2.playRecovery), ht(e2.playMiss), ht(e2.playEvasion), ht(e2.playMagicEvasion), ht(e2.playReflection), ht(e2.shop), ht(e2.useItem), ht(e2.useSkill)], oa = (e2 = {}) => ({
  optAutosave: e2.optAutosave ?? true,
  optDisplayTp: e2.optDisplayTp ?? true,
  optDrawTitle: e2.optDrawTitle ?? true,
  optExtraExp: e2.optExtraExp ?? true,
  optFloorDeath: e2.optFloorDeath ?? true,
  optFollowers: e2.optFollowers ?? true,
  optKeyItemsNumber: e2.optKeyItemsNumber ?? true,
  optSideView: e2.optSideView ?? true,
  optSlipDeath: e2.optSlipDeath ?? true,
  optTransparent: e2.optTransparent ?? true,
  optMessageSkip: e2.optMessageSkip ?? true,
  optSplashScreen: e2.optSplashScreen ?? true
}), ia = {
  type: "object",
  additionalProperties: true,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: { type: "boolean" },
    optDisplayTp: { type: "boolean" },
    optDrawTitle: { type: "boolean" },
    optExtraExp: { type: "boolean" },
    optFloorDeath: { type: "boolean" },
    optFollowers: {
      type: "boolean"
    },
    optKeyItemsNumber: { type: "boolean" },
    optSideView: { type: "boolean" },
    optSlipDeath: { type: "boolean" },
    optTransparent: { type: "boolean" },
    optMessageSkip: { type: "boolean" },
    optSplashScreen: { type: "boolean" }
  }
}, sa = (e2, t2) => ({
  name: e2,
  id: t2
}), pa = (e2) => e2.variables.map(sa), na = (e2) => e2.elements.map(sa), ma = (e2) => e2.equipTypes.map(sa), da = (e2) => e2.skillTypes.map(sa), la = (e2) => e2.weaponTypes.map(sa), ca = (e2) => e2.armorTypes.map(sa), ya = (e2) => e2.switches.map(sa), ua = (e2, t2) => ({
  items: ca(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), xa = (e2, t2) => ({ items: na(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Ea = (e2, t2) => ({ items: ma(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), ga = (e2, t2) => ({
  items: da(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), Aa = (e2, t2) => ({ items: pa(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variables"
} }), Ta = (e2, t2) => ({ items: ya(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switches" } }), Ia = (e2, t2) => ({
  items: la(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), _a = (e2) => ({
  armorTypes: Ra(e2.armorTypes),
  elements: Ra(e2.elements),
  equipTypes: Ra(e2.equipTypes),
  weaponTypes: Ra(e2.weaponTypes),
  skillTypes: Ra(e2.skillTypes),
  variables: Ra(e2.variables),
  switches: Ra(e2.switches)
}), Ra = (e2) => e2 ? [...e2] : [], Sa = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], Na = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], ba = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], Ca = (e2) => Ma(e2, ""), Ma = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], ha = (e2, t2) => "string" == typeof e2 ? e2 : t2, fa = (e2) => ({
  actionFailure: ha(e2.actionFailure, "Action failed."),
  actorDamage: ha(e2.actorDamage, "%1 took %2 damage."),
  actorRecovery: ha(e2.actorRecovery, "%1 recovered %2 HP."),
  actorGain: ha(e2.actorGain, "%1 gained %2."),
  actorLoss: ha(e2.actorLoss, "%1 lost %2."),
  actorDrain: ha(e2.actorDrain, "%1 drained %2 HP."),
  actorNoDamage: ha(e2.actorNoDamage, "%1 was not damaged."),
  actorNoHit: ha(e2.actorNoHit, "%1 was not hit."),
  alwaysDash: ha(e2.alwaysDash, "Always dash."),
  bgmVolume: ha(e2.bgmVolume, "BGM volume"),
  bgsVolume: ha(e2.bgsVolume, "BGS volume"),
  commandRemember: ha(e2.commandRemember, "Command remember."),
  criticalToActor: ha(e2.criticalToActor, "%1 dealt %2 damage to %3."),
  criticalToEnemy: ha(e2.criticalToEnemy, "%1 dealt %2 damage to %3."),
  counterAttack: ha(e2.counterAttack, "%1 countered!"),
  debuffAdd: ha(e2.debuffAdd, "%1's %2 was lowered."),
  defeat: ha(e2.defeat, "Defeat."),
  enemyDamage: ha(e2.enemyDamage, "%1 took %2 damage."),
  enemyDrain: ha(e2.enemyDrain, "%1 drained %2 HP."),
  enemyGain: ha(e2.enemyGain, "%1 gained %2."),
  enemyLoss: ha(e2.enemyLoss, "%1 lost %2."),
  enemyNoDamage: ha(e2.enemyNoDamage, "%1 was not damaged."),
  enemyNoHit: ha(e2.enemyNoHit, "%1 was not hit."),
  enemyRecovery: ha(e2.enemyRecovery, "%1 recovered %2 HP."),
  evasion: ha(e2.evasion, "%1 evaded the attack!"),
  autosave: ha(e2.autosave, "Autosave"),
  escapeFailure: ha(e2.escapeFailure, "Escape failed."),
  escapeStart: ha(e2.escapeStart, "%1 started to escape!"),
  emerge: ha(e2.emerge, "%1 appeared!"),
  expNext: ha(e2.expNext, "Next level in %1 EXP."),
  expTotal: ha(e2.expTotal, "Total EXP: %1"),
  file: ha(e2.file, "File"),
  buffAdd: ha(e2.buffAdd, "%1's %2 was raised."),
  buffRemove: ha(e2.buffRemove, "%1's %2 was lowered."),
  obtainExp: ha(e2.obtainExp, "%1 EXP obtained."),
  obtainGold: ha(e2.obtainGold, "%1 gold obtained."),
  obtainItem: ha(e2.obtainItem, "%1 obtained %2."),
  obtainSkill: ha(e2.obtainSkill, "%1 learned %2."),
  levelUp: ha(e2.levelUp, "%1 leveled up!"),
  partyName: ha(e2.partyName, "Party"),
  loadMessage: ha(e2.loadMessage, "Load %1?"),
  meVolume: ha(e2.meVolume, "ME volume"),
  possession: ha(e2.possession, "Possession"),
  preemptive: ha(e2.preemptive, "%1 attacked first!"),
  saveMessage: ha(e2.saveMessage, "Save %1?"),
  seVolume: ha(e2.seVolume, "SE volume"),
  magicEvasion: ha(e2.magicEvasion, "%1 evaded the magic!"),
  magicReflection: ha(e2.magicReflection, "%1 reflected the magic!"),
  substitute: ha(e2.substitute, "%1 took the hit!"),
  surprise: ha(e2.surprise, "%1 surprised the enemy!"),
  touchUI: ha(e2.touchUI, "Touch UI"),
  useItem: ha(e2.useItem, "%1 used %2."),
  victory: ha(e2.victory, "Victory!")
}), ka = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], Oa = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: ht(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), va = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), La = new e({ strict: false });
La.compile(ia);
const Pa = La.compile({
  additionalProperties: false,
  type: "object",
  required: ["actorId", "equips", "level"],
  properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: { type: "integer" } } }
});
La.compile({
  type: "object",
  additionalProperties: false,
  required: ["type", "weaponImageId"],
  properties: { type: { type: "number" }, weaponImageId: { type: "number" } }
});
const Da = La.compile({
  additionalProperties: false,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: {
    type: "integer",
    minimum: 0
  } }
}), Fa = (e2) => ({ basic: ba(e2.basic ?? {}), commands: Ca(e2.commands ?? {}), params: ka(e2.params ?? {}), messages: fa(e2.messages ?? {}) }), Ha = (e2) => e2 ? [...e2] : [], wa = (e2) => ((e3) => Da(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Ba = (e2, t2) => e2 ? e2.map(t2) : [], Ga = (e2) => ((e3) => Pa(e3))(e2) ? {
  actorId: e2.actorId,
  equips: Ha(e2.equips),
  level: e2.level
} : { actorId: 0, equips: [], level: 1 };
exports.ABORT_BATTLE = 340, exports.AUTHOR_RMMZ = Se, exports.BATTLE_PROCESSING = 301, exports.CHANGE_ACTOR_IMAGES = 322, exports.CHANGE_ARMORS = 128, exports.CHANGE_BATTLE_BACKGROUND = 283, exports.CHANGE_BATTLE_BGM = 132, exports.CHANGE_CLASS = 321, exports.CHANGE_DEFEAT_ME = 139, exports.CHANGE_ENCOUNTER = 136, exports.CHANGE_ENEMY_HP = 331, exports.CHANGE_ENEMY_MP = 332, exports.CHANGE_ENEMY_STATE = 333, exports.CHANGE_ENEMY_TP = 342, exports.CHANGE_EXP = 315, exports.CHANGE_FORMATION_ACCESS = 137, exports.CHANGE_GOLD = 125, exports.CHANGE_HP = 311, exports.CHANGE_ITEMS = 126, exports.CHANGE_MENU_ACCESS = 135, exports.CHANGE_MP = 312, exports.CHANGE_NAME = 320, exports.CHANGE_NICKNAME = 324, exports.CHANGE_PARALLAX = 284, exports.CHANGE_PARTY_MEMBER = 129, exports.CHANGE_PLAYER_FOLLOWERS = 216, exports.CHANGE_PROFILE = 325, exports.CHANGE_SAVE_ACCESS = 134, exports.CHANGE_TILESET = 282, exports.CHANGE_TP = 313, exports.CHANGE_TRANSPARENCY = 211, exports.CHANGE_VEHICLE_BGM = 140, exports.CHANGE_VEHICLE_IMAGE = 323, exports.CHANGE_VICTORY_ME = 133, exports.CHANGE_WEAPONS = 127, exports.CHANGE_WINDOW_COLOR = 138, exports.COLLAPS_BOSS = 1, exports.COLLAPS_INSTANT = 2, exports.COLLAPS_NONE = 3, exports.COLLAPS_NORMAL = 0, exports.COMMENT_BODY = 408, exports.COMMENT_HEAD = 108, exports.COMMON_EVENT = 117, exports.CONDITIONAL_BRANCH = 111, exports.CONDITIONAL_BRANCH_ELSE = 411, exports.CONTROL_SELF_SWITCH = 123, exports.CONTROL_SWITCHES = 121, exports.CONTROL_TIMER = 124, exports.CONTROL_VARIABLES = 122, exports.DEFAULT_DAMAGE_LABELS = I, exports.DEFAULT_GLOBAL_LABELS = Mt, exports.DEFAULT_ITEM_LABELS = {
  domainName: "アイテム",
  options: { consumable: "消耗品" }
}, exports.DEFAULT_SKILL_LABELS = { domainName: "スキル", options: {
  requiredWeaponTypeId1: "必要武器タイプ1",
  requiredWeaponTypeId2: "必要武器タイプ2",
  mpCost: "MP消費",
  tpCost: "TP消費"
} }, exports.DEFAULT_SYSTEM_LABELS_BOOLEAN = { domainName: "オプション", options: {
  optDrawTitle: "ゲームタイトルの描画",
  optDisplayTp: "ウィンドウにTPを表示",
  optFloorDeath: "床ダメージで戦闘不能",
  optSlipDeath: "スリップダメージで戦闘不能",
  optAutosave: "オートセーブを有効化",
  optExtraExp: "控えメンバーも経験値を獲得",
  optFollowers: "隊列歩行",
  optSideView: "戦闘をサイドビューにする",
  optKeyItemsNumber: "大事なものの個数を表示",
  optTransparent: "透明状態で開始",
  optMessageSkip: "メッセージスキップを有効化",
  optSplashScreen: "スプラッシュ画面を表示"
} }, exports.DEFAULT_SYSTEM_LABELS_DATA_TYPES = { domainName: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, exports.DEFAULT_USABLE_ITEM_LABELS = {
  domainName: "",
  options: { scope: "範囲", speed: "速度補正", successRate: "成功率" }
}, exports.EFFECT_ADD_BUFF = 31, exports.EFFECT_ADD_DEBUFF = 32, exports.EFFECT_ADD_STATE = 21, exports.EFFECT_COMMON_EVENT = 44, exports.EFFECT_GAIN_TP = 13, exports.EFFECT_GROW = 42, exports.EFFECT_LEARN_SKILL = 43, exports.EFFECT_RECOVER_HP = 11, exports.EFFECT_RECOVER_MP = 12, exports.EFFECT_REMOVE_BUFF = 33, exports.EFFECT_REMOVE_DEBUFF = 34, exports.EFFECT_REMOVE_STATE = 22, exports.EFFECT_SPECIAL = 41, exports.ENEMY_APPEAR = 335, exports.ENEMY_RECOVER_ALL = 334, exports.ENEMY_TRANSFORM = 336, exports.ERASE_EVENT = 214, exports.ERASE_PICTURE = 235, exports.EXIT_EVENT_PROCESSING = 115, exports.EXTRA_PARAM_CEV = 3, exports.EXTRA_PARAM_CNT = 6, exports.EXTRA_PARAM_CRI = 2, exports.EXTRA_PARAM_EVA = 1, exports.EXTRA_PARAM_HIT = 0, exports.EXTRA_PARAM_HRG = 7, exports.EXTRA_PARAM_MEV = 4, exports.EXTRA_PARAM_MRF = 5, exports.EXTRA_PARAM_MRG = 8, exports.EXTRA_PARAM_TRG = 9, exports.FADEIN_SCREEN = 222, exports.FADEOUT_BGM = 242, exports.FADEOUT_BGS = 246, exports.FADEOUT_SCREEN = 221, exports.FILENAME_ACTORS = "Actors.json", exports.FILENAME_ANIMATIONS = "Animations.json", exports.FILENAME_ARMORS = "Armors.json", exports.FILENAME_CLASSES = "Classes.json", exports.FILENAME_COMMON_EVENTS = "CommonEvents.json", exports.FILENAME_ENEMIES = "Enemies.json", exports.FILENAME_ITEMS = "Items.json", exports.FILENAME_MAP_INFOS = "MapInfos.json", exports.FILENAME_SKILLS = "Skills.json", exports.FILENAME_STATES = "States.json", exports.FILENAME_SYSTEM = "System.json", exports.FILENAME_TILESET = "Tilesets.json", exports.FILENAME_TROOPS = "Troops.json", exports.FILENAME_WEAPONS = "Weapons.json", exports.FLAG_ID_AUTO_BATTLE = 0, exports.FLAG_ID_GUARD = 1, exports.FLAG_ID_PRESERVE_TP = 3, exports.FLAG_ID_SUBSTITUTE = 2, exports.FLASH_SCREEN = 224, exports.FOLDER_AUDIO = "audio", exports.FOLDER_AUDIO_BGM = "bgm", exports.FOLDER_AUDIO_BGS = "bgs", exports.FOLDER_AUDIO_ME = "me", exports.FOLDER_AUDIO_SE = "se", exports.FOLDER_DATA = "data", exports.FOLDER_IMG = "img", exports.FOLDER_IMG_BATTLEBACK1 = "battlebacks1", exports.FOLDER_IMG_BATTLEBACK2 = "battlebacks2", exports.FOLDER_IMG_CHACTERS = "characters", exports.FOLDER_IMG_ENEMIES = "enemies", exports.FOLDER_IMG_FACES = "faces", exports.FOLDER_IMG_PARALLACES = "parallaxes", exports.FOLDER_IMG_PICTURES = "pictures", exports.FOLDER_IMG_SV_ACTORS = "sv_actors", exports.FOLDER_IMG_SV_ENEMIES = "sv_enemies", exports.FOLDER_IMG_SYSTEM = "system", exports.FOLDER_IMG_TILESETS = "tilesets", exports.FOLDER_IMG_TITLES1 = "titles1", exports.FOLDER_IMG_TITLES2 = "titles2", exports.FOLDER_JS = "js", exports.FORCE_ACTION = 339, exports.GAME_OVER = 353, exports.GATHER_FOLLOWERS = 217, exports.GET_LOCATION_INFO = 285, exports.GET_ONOFF_VEHICLE = 206, exports.HITTYPE_CERTAIN = 0, exports.HITTYPE_MAGICAL = 2, exports.HITTYPE_PHYSICAL = 1, exports.INPUT_NUMBER = 103, exports.LABEL = 118, exports.LABELS_DATA_WEAPON = { domainName: "武器", options: { weaponTypeId: "武器タイプID" } }, exports.LABELS_SYSTEM_BATTLER_PARAMS = { domainName: "能力値", options: {
  agi: "敏捷",
  atk: "攻撃力",
  def: "防御力",
  eva: "回避",
  hit: "命中",
  luk: "運",
  mat: "魔法攻撃力",
  mdf: "魔法防御力",
  mhp: "最大HP",
  mmp: "最大MP"
} }, exports.LABELS_SYSTEM_GAME_COMMANDS = { domainName: "コマンド", options: {
  item: "アイテム",
  skill: "スキル",
  equip: "装備",
  status: "ステータス",
  formation: "編成",
  options: "オプション",
  save: "セーブ",
  gameEnd: "ゲーム終了",
  armor: "防具",
  weapon: "武器",
  newGame: "ニューゲーム",
  attack: "攻撃",
  guard: "防御",
  escape: "逃げる",
  fight: "戦う",
  buy: "買う",
  sell: "売る",
  cancel: "キャンセル",
  clear: "クリア",
  continue_: "続きから",
  equip2: "装備2",
  keyItem: "大事なもの",
  optimize: "最強装備",
  toTitle: "タイトルへ戻る"
} }, exports.LABEL_JUMP = 119, exports.LABEL_SET_DATA = T, exports.LABEL_SET_ITEM_EFFECT = mt, exports.LABEL_SET_TRAIT = z, exports.LOOP = 112, exports.LOOP_BREAK = 113, exports.MODULE_DATA = bt, exports.MOVE_PICTURE = 232, exports.NAME_INPUT_PROCESSING = 303, exports.NO_OPERATION = 0, exports.OPEN_MENU_SCREEN = 351, exports.OPEN_SAVE_SCREEN = 352, exports.OPERAND_CONSTANT = 0, exports.OPERAND_GAMEDATA = 3, exports.OPERAND_RANDOM = 2, exports.OPERAND_SCRIPT = 4, exports.OPERAND_VARIABLE = 1, exports.PARTY_ABILITY_CANCEL_SURPRISE = 2, exports.PARTY_ABILITY_DROP_ITEM_DOUBLE = 5, exports.PARTY_ABILITY_ENCOUNTER_HALF = 0, exports.PARTY_ABILITY_ENCOUNTER_NONE = 1, exports.PARTY_ABILITY_GOLD_DOUBLE = 4, exports.PARTY_ABILITY_RAISE_PREEMPTIVE = 3, exports.PLAY_BGM = 241, exports.PLAY_BGS = 245, exports.PLAY_ME = 249, exports.PLAY_MOVIE = 261, exports.PLAY_SE = 250, exports.PLUGIN_COMMAND_MV = 356, exports.PLUGIN_COMMAND_MZ = 357, exports.RECOVER_ALL = 314, exports.REGULAR_PARAM_AGI = 6, exports.REGULAR_PARAM_ATK = 2, exports.REGULAR_PARAM_DEF = 3, exports.REGULAR_PARAM_LUK = 7, exports.REGULAR_PARAM_MATK = 4, exports.REGULAR_PARAM_MAX_HP = 0, exports.REGULAR_PARAM_MAX_MP = 1, exports.REGULAR_PARAM_MDEF = 5, exports.RESUME_BGM = 244, exports.RETURN_TO_TITLE_SCREEN = 354, exports.ROTATE_PICTURE = 233, exports.ROUTE_CHANGE_BLEND_MODE = 43, exports.ROUTE_CHANGE_FREQ = 30, exports.ROUTE_CHANGE_IMAGE = 41, exports.ROUTE_CHANGE_OPACITY = 42, exports.ROUTE_CHANGE_SPEED = 29, exports.ROUTE_DIR_FIX_OFF = 36, exports.ROUTE_DIR_FIX_ON = 35, exports.ROUTE_END = 0, exports.ROUTE_JUMP = 14, exports.ROUTE_MOVE_AWAY = 11, exports.ROUTE_MOVE_BACKWARD = 13, exports.ROUTE_MOVE_DOWN = 1, exports.ROUTE_MOVE_FORWARD = 12, exports.ROUTE_MOVE_LEFT = 2, exports.ROUTE_MOVE_LOWER_L = 5, exports.ROUTE_MOVE_LOWER_R = 6, exports.ROUTE_MOVE_RANDOM = 9, exports.ROUTE_MOVE_RIGHT = 3, exports.ROUTE_MOVE_TOWARD = 10, exports.ROUTE_MOVE_UP = 4, exports.ROUTE_MOVE_UPPER_L = 7, exports.ROUTE_MOVE_UPPER_R = 8, exports.ROUTE_PLAY_SE = 44, exports.ROUTE_SCRIPT = 45, exports.ROUTE_STEP_ANIME_OFF = 34, exports.ROUTE_STEP_ANIME_ON = 33, exports.ROUTE_SWITCH_OFF = 28, exports.ROUTE_SWITCH_ON = 27, exports.ROUTE_THROUGH_OFF = 38, exports.ROUTE_THROUGH_ON = 37, exports.ROUTE_TRANSPARENT_OFF = 40, exports.ROUTE_TRANSPARENT_ON = 39, exports.ROUTE_TURN_180D = 22, exports.ROUTE_TURN_90D_L = 21, exports.ROUTE_TURN_90D_R = 20, exports.ROUTE_TURN_90D_R_L = 23, exports.ROUTE_TURN_AWAY = 26, exports.ROUTE_TURN_DOWN = 16, exports.ROUTE_TURN_LEFT = 17, exports.ROUTE_TURN_RANDOM = 24, exports.ROUTE_TURN_RIGHT = 18, exports.ROUTE_TURN_TOWARD = 25, exports.ROUTE_TURN_UP = 19, exports.ROUTE_WAIT = 15, exports.ROUTE_WALK_ANIME_OFF = 32, exports.ROUTE_WALK_ANIME_ON = 31, exports.SAVE_BGM = 243, exports.SCHEMA_DAMAGE = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: { type: { type: "integer", minimum: 0 }, elementId: { type: "integer", minimum: 0 }, formula: { type: "string" }, variance: {
    type: "integer"
  }, critical: { type: "boolean" } }
}, exports.SCHEMA_DATA_ACTOR = R, exports.SCHEMA_DATA_ARMMOR = S, exports.SCHEMA_DATA_CLASS = N, exports.SCHEMA_DATA_ENEMY = b, exports.SCHEMA_DATA_ITEM = ct, exports.SCHEMA_DATA_MAP_INFO = o, exports.SCHEMA_DATA_SKILL = lt, exports.SCHEMA_DATA_STATE = M, exports.SCHEMA_DATA_WEAPON = Ve, exports.SCHEMA_SYSTEM_ADVANCED = {
  type: "object",
  properties: {
    gameId: { type: "integer" },
    screenWidth: { type: "integer" },
    screenHeight: { type: "integer" },
    uiAreaWidth: { type: "integer" },
    uiAreaHeight: { type: "integer" },
    windowOpacity: { type: "integer" },
    screenScale: { type: "number" },
    numberFontFilename: { type: "string" },
    mainFontFilename: { type: "string" },
    fallbackFonts: { type: "string" },
    fontSize: {
      type: "integer"
    }
  },
  required: ["gameId", "screenWidth", "screenHeight", "uiAreaWidth", "uiAreaHeight", "windowOpacity", "screenScale", "numberFontFilename", "mainFontFilename", "fallbackFonts", "fontSize"],
  additionalProperties: false
}, exports.SCHEMA_SYSTEM_BOOLEAN_OPTIONS = ia, exports.SCHEMA_SYSTEM_GAME_INITIAL = {
  additionalProperties: true,
  type: "object",
  required: ["startMapId", "startX", "startY", "partyMembersArray"],
  properties: {
    startMapId: { type: "integer", minimum: 0 },
    startX: { type: "integer", minimum: 0 },
    startY: { type: "integer", minimum: 0 },
    partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
  }
}, exports.SCHEMA_TRAIT = { type: "object", required: ["code", "dataId", "value"], properties: {
  code: { type: "integer" },
  dataId: { type: "integer" },
  value: { type: "integer" }
} }, exports.SCRIPT_EVAL = 355, exports.SCRIPT_EVAL_BODY = 655, exports.SCROLL_MAP = 204, exports.SELECT_ITEM = 104, exports.SET_EVENT_LOCATION = 203, exports.SET_MOVEMENT_ROUTE = 205, exports.SET_VEHICLE_LOCATION = 202, exports.SET_WEATHER_EFFECT = 236, exports.SHAKE_SCREEN = 225, exports.SHOP_PROCESSING = 302, exports.SHOP_PROCESSING_BODY = 605, exports.SHOW_ANIMATION = 212, exports.SHOW_BALLOON_ICON = 213, exports.SHOW_BATTLE_ANIMATION = 337, exports.SHOW_CHOICES = 102, exports.SHOW_CHOICES_ITEM = 402, exports.SHOW_MESSAGE = 101, exports.SHOW_MESSAGE_BODY = 401, exports.SHOW_PICTURE = 231, exports.SHOW_SCROLLING_TEXT = 105, exports.SHOW_SCROLLING_TEXT_BODY = 405, exports.SKIP = 109, exports.SPECIAL_EFFECT_ESCAPE = dt, exports.SPECIAL_PARAM_EXR = 9, exports.SPECIAL_PARAM_FDR = 8, exports.SPECIAL_PARAM_GRD = 1, exports.SPECIAL_PARAM_MCR = 4, exports.SPECIAL_PARAM_MDR = 7, exports.SPECIAL_PARAM_PDR = 6, exports.SPECIAL_PARAM_PHA = 3, exports.SPECIAL_PARAM_REC = 2, exports.SPECIAL_PARAM_TCR = 5, exports.SPECIAL_PARAM_TGR = 0, exports.SRC_COLOR = "colors", exports.SRC_DATA_ACTOR = "actor", exports.SRC_DATA_ARMOR = "armor", exports.SRC_DATA_CLASS = "class", exports.SRC_DATA_COMMON_EVNET = "common_event", exports.SRC_DATA_ENEMY = "enemy", exports.SRC_DATA_ITEMS = Ct, exports.SRC_DATA_MAP = "map", exports.SRC_DATA_SKILL = "skill", exports.SRC_DATA_STATE = "state", exports.SRC_DATA_TROOP = "troop", exports.SRC_DATA_WEAPON = "weapon", exports.STOP_SE = 251, exports.TINT_PICTURE = 234, exports.TINT_SCREEN = 223, exports.TRAIT_ACTION_PLUS = 61, exports.TRAIT_ATTACK_ELEMENT = 31, exports.TRAIT_ATTACK_SKILL = 35, exports.TRAIT_ATTACK_SPEED = 33, exports.TRAIT_ATTACK_STATE = 32, exports.TRAIT_ATTACK_TIMES = 34, exports.TRAIT_COLLAPSE_TYPE = 63, exports.TRAIT_DEBUFF_RATE = 12, exports.TRAIT_ELEMENT_RATE = 11, exports.TRAIT_EQUIP_ARMOR_TYPE = 52, exports.TRAIT_EQUIP_LOCK = 53, exports.TRAIT_EQUIP_SEAL = 54, exports.TRAIT_EQUIP_WEAPON_TYPE = 51, exports.TRAIT_PARAM = 21, exports.TRAIT_PARTY_ABILITY = 64, exports.TRAIT_SKILL_ADD = 43, exports.TRAIT_SKILL_SEAL = 44, exports.TRAIT_SKILL_TYPE_ADD = 41, exports.TRAIT_SKILL_TYPE_SEAL = 42, exports.TRAIT_SLOT_TYPE = 55, exports.TRAIT_SPARAM = 23, exports.TRAIT_SPECIAL_FLAG = 62, exports.TRAIT_STATE_RATE = 13, exports.TRAIT_STATE_RESIST = 14, exports.TRAIT_XPARAM = 22, exports.TRANSFER_PLAYER = 201, exports.TYPENAME_TRAIT = "Trait", exports.WAIT = 230, exports.applyFormatRule = Ge, exports.cloneChoices = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), exports.cloneEventCommand = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: Ut(e2.parameters)
}), exports.cloneParameters = Ut, exports.collapsOptionsToArray = f, exports.compileFormatRule = he, exports.convertCommentArrayToObject = (e2) => ({ comment: e2[0] }), exports.createActorControlChars = (e2) => e2.map((e3) => ({ text: e3.name, controlChar: t("N", e3.id) })), exports.createControlCharFormat = t, exports.createEventCommand = (e2, t2, a2 = 0) => ({
  code: e2,
  indent: a2,
  parameters: t2
}), exports.createNoteEntity = Rt, exports.createSystemVariableControlChars = (e2) => e2.variables.map((e3, a2) => ({ text: e3 || "", controlChar: t("V", a2) })).filter((e3) => "" !== e3.text), exports.defineGameDataSources = (e2, t2) => [d(e2.skills, t2), l(e2.actors, t2), c(e2.states, t2), y(e2.armors, t2), u(e2.classes, t2), x(e2.enemies, t2), E(e2.items, t2), g(e2.weapons, t2), A(e2.commonEvents, t2)], exports.defineSystemItems = (e2, t2) => [xa(e2, t2), Ea(e2, t2), Ia(e2, t2), ga(e2, t2), ua(e2, t2), Aa(e2, t2), Ta(e2, t2)], exports.defineTraitCollapseType = h, exports.defineTraitExtraParam = k, exports.defineTraitItems = (e2, t2) => [v(e2.regularParam), k(e2.extraParam), P(e2.specialParam), h(e2.collaps, t2), w(e2.specialFlag), F(e2.partyAbility)], exports.defineTraitPartyAbility = F, exports.defineTraitRegularParam = v, exports.defineTraitSpecialFlag = w, exports.defineTraitSpecialParam = P, exports.definetItemEffectEntries = (e2, t2) => [{
  items: [{ id: dt, name: t2.escape }],
  label: e2.special.domainName,
  source: ze()
}], exports.detectFormatErrors = (e2, t2, a2, r2 = { placeHolderMaxLength: 50, formatMaxLength: 200 }) => e2.pattern.length >= r2.formatMaxLength ? {
  formatLabel: e2.label,
  syntaxErrors: [{ message: a2.formatVeryLong, reason: e2.pattern.slice(0, r2.formatMaxLength) }],
  semanticErrors: []
} : {
  formatLabel: e2.label,
  semanticErrors: Pe(e2, t2, a2),
  syntaxErrors: Le(e2.pattern, t2, a2, r2.placeHolderMaxLength)
}, exports.domainNames = (e2) => Object.entries(e2).map(([, e3]) => e3.domainName), exports.extraParamName = (e2, t2) => {
  switch (e2) {
    case 3:
      return t2.criticalEvasionRate;
    case 1:
      return t2.evasionRate;
    case 6:
      return t2.counterAttackRate;
    case 2:
      return t2.criticalRate;
    case 0:
      return t2.hitRate;
    case 7:
      return t2.hpRegenerationRate;
    case 4:
      return t2.magicEvasionRate;
    case 5:
      return t2.magicReflectionRate;
    case 8:
      return t2.mpRegenerationRate;
    case 9:
      return t2.tpRegenerationRate;
  }
  return `?xparams[${e2}]`;
}, exports.extraParamsToArray = O, exports.formatItemEffectText = (e2, t2, a2) => {
  const r2 = a2.find((e3) => e3.id === t2.dataId), o2 = r2 ? r2.name : "Unknown Item";
  return e2.pattern.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", o2);
}, exports.formatTraitText = (e2, t2, a2) => {
  const r2 = he(qe);
  return Ge(t2, a2, r2, e2.pattern, (e3) => e3.dataId);
}, exports.fromArrayCommonEvent = (e2) => ({ eventId: e2[0] }), exports.fromArrayControlSwitches = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), exports.fromArrayInputNumber = (e2) => ({ variableId: e2[0], digits: e2[1] }), exports.fromArrayScrollingTextBody = (e2) => ({ content: e2[0] }), exports.fromArrayScrollingTextHeader = (e2) => ({
  speed: e2[0],
  skip: e2[1]
}), exports.fromArraySetupChoice = (e2) => ({ choices: e2[0], cancelType: e2[1], defaultType: e2[2], positionType: e2[3], background: e2[4] }), exports.fromArraySetupChoiceItem = (e2) => ({
  index: e2[0],
  name: e2[1]
}), exports.fromArrayShowMessageHeader = (e2) => ({ facename: e2[0], faceIndex: e2[1], background: e2[2], positionType: e2[3], speakerName: e2[4] }), exports.fromStringArray = (e2, a2) => a2.map((a3, r2) => ({ text: a3, controlChar: t(e2, r2) })), exports.getActorValue = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.level;
    case 1:
      return e2.currentExp();
    case 2:
      return e2.hp;
    case 3:
      return e2.mp;
    case 12:
      return e2.tp;
  }
  return t2[6] >= 4 && t2[6] <= 11 ? e2.param(t2[6] - 4) : 0;
}, exports.getArmorTypes = ca, exports.getControlChars = (e2) => Array.from(e2.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e3) => ({ char: e3[1], id: parseInt(e3[2], 10) })), exports.getElementTypes = na, exports.getEnemyValue = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, exports.getEquipTypes = ma, exports.getNoteValue = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return r2 ? r2[2] : void 0;
}, exports.getParamNames = (e2) => e2.terms.params.map(sa), exports.getSkillTypes = da, exports.getSwitches = ya, exports.getVariableNames = pa, exports.getWeaponTypes = la, exports.isCloneableCommand = (e2) => e2.parameters.every(qt), exports.isCommandAudio = jt, exports.isCommandChangeActorText = (e2) => zt(e2), exports.isCommandChangeBattleBgm = (e2) => jt(e2) && 132 === e2.code, exports.isCommandChangeDefeatMe = (e2) => jt(e2) && 139 === e2.code, exports.isCommandChangeVictoryMe = (e2) => jt(e2) && 133 === e2.code, exports.isCommandCommentBody = (e2) => $t(e2) && 408 === e2.code, exports.isCommandCommentHeader = (e2) => $t(e2) && 108 === e2.code, exports.isCommandCommonEvent = (e2) => Qt(e2), exports.isCommandInputNumber = (e2) => ea(e2), exports.isCommandNonParam = (e2) => Kt(e2), exports.isCommandPlayBgm = (e2) => jt(e2) && 241 === e2.code, exports.isCommandPlayBgs = (e2) => jt(e2) && 245 === e2.code, exports.isCommandPlayMe = (e2) => jt(e2) && 249 === e2.code, exports.isCommandPlaySe = (e2) => jt(e2) && 250 === e2.code, exports.isCommandScriptBody = (e2) => $t(e2) && 655 === e2.code, exports.isCommandScriptHeader = (e2) => $t(e2) && 355 === e2.code, exports.isCommandScrollTextHead = (e2) => Yt(e2), exports.isCommandShowChoiceItem = (e2) => Jt(e2), exports.isCommandShowChoices = (e2) => Zt(e2), exports.isCommandShowMessage = (e2) => ta(e2), exports.isCommandShowMessageBody = (e2) => $t(e2) && 401 === e2.code, exports.isCommandShowScrollingTextBody = (e2) => $t(e2) && 405 === e2.code, exports.isCommandTextBody = $t, exports.isDataActor = (e2) => Et(e2), exports.isDataArmor = (e2) => gt(e2), exports.isDataClass = (e2) => _t(e2), exports.isDataEnemy = (e2) => Tt(e2), exports.isDataItem = (e2) => ut(e2), exports.isDataMap = (e2) => m(e2), exports.isDataMapInfo = (e2) => n(e2), exports.isDataSkill = (e2) => xt(e2), exports.isDataState = (e2) => It(e2), exports.isDataWeapon = (e2) => At(e2), exports.itemSourceId = () => ({ author: Se, module: bt, kind: Ct }), exports.labelsRegistry = () => ({ rpg: { damage: I, data: T, traits: z, itemEffect: mt }, global: Mt }), exports.makeActorData = (e2 = {}) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  battlerName: e2.battlerName ?? "",
  characterName: e2.characterName ?? "",
  characterIndex: e2.characterIndex ?? 0,
  faceName: e2.faceName ?? "",
  faceIndex: e2.faceIndex ?? 0,
  traits: [],
  note: e2.note ?? "",
  classId: e2.classId ?? 0,
  nickname: e2.nickname ?? "",
  profile: e2.profile ?? "",
  equips: [],
  initialLevel: e2.initialLevel ?? 0,
  maxLevel: e2.maxLevel ?? 0
}), exports.makeArmorData = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  iconIndex: e2.iconIndex ?? 0,
  description: e2.description ?? "",
  traits: e2.traits ?? [],
  note: e2.note ?? "",
  atypeId: e2.atypeId ?? 0,
  params: e2.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: e2.etypeId ?? 0,
  price: e2.price ?? 0
}), exports.makeAudioCommand = (e2, t2) => ft(e2, ht({
  name: t2
})), exports.makeAudioFileParams = ht, exports.makeBooleanOptions = oa, exports.makeClassData = (e2 = {}) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  traits: [],
  note: e2.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e2.learnings ?? [],
  expParams: e2.expParams ?? []
}), exports.makeCommandAudioAny = ft, exports.makeCommandChangeActorName = (e2, t2 = 0) => ({
  code: 320,
  parameters: [e2.actorId, e2.name],
  indent: t2
}), exports.makeCommandChangeActorNickName = (e2, t2 = 0) => ({ code: 324, parameters: [e2.actorId, e2.nickname], indent: t2 }), exports.makeCommandChangeActorProfile = (e2, t2 = 0) => ({
  code: 325,
  parameters: [e2.actorId, e2.profile],
  indent: t2
}), exports.makeCommandChangeBattleBGM = (e2, t2 = 0) => ft(132, e2, t2), exports.makeCommandChangeDefeatME = (e2, t2 = 0) => ft(139, e2, t2), exports.makeCommandChangeVictoryME = (e2, t2 = 0) => ft(133, e2, t2), exports.makeCommandCommentBody = Pt, exports.makeCommandCommentHeader = Lt, exports.makeCommandCommonEvent = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: kt(e2 ?? {})
}), exports.makeCommandControlSwitches = (e2, t2 = 0) => ({ code: 121, indent: t2, parameters: Ot(e2) }), exports.makeCommandInputNumber = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: Dt(e2 ?? {})
}), exports.makeCommandPlayBGM = (e2, t2 = 0) => ft(241, e2, t2), exports.makeCommandPlayBGS = (e2, t2 = 0) => ft(245, e2, t2), exports.makeCommandPlayME = (e2, t2 = 0) => ft(249, e2, t2), exports.makeCommandPlaySE = (e2, t2 = 0) => ft(250, e2, t2), exports.makeCommandScriptArray = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? wt(e3, t2) : Bt(e3, t2)), exports.makeCommandScriptBody = Bt, exports.makeCommandScriptHeader = wt, exports.makeCommandScrollingTextBody = (e2 = "", t2 = 0) => ({ code: 405, indent: t2 ?? 0, parameters: Ht(e2) }), exports.makeCommandScrollingTextHeader = (e2 = {}, t2 = 0) => ({
  code: 105,
  indent: t2,
  parameters: Ft(e2)
}), exports.makeCommandSetupChoice = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), exports.makeCommandShowChoiceItem = (e2, t2 = 0) => ({
  code: 402,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""]
}), exports.makeCommandShowMessage = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), exports.makeCommandShowMessageBody = (e2, t2 = 0) => ({
  code: 401,
  indent: t2,
  parameters: [e2]
}), exports.makeCommentArray = vt, exports.makeCommentCommandArray = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Lt(e3, t2) : Pt(e3, t2)), exports.makeCommonEventData = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  trigger: e2.trigger ?? 0,
  list: e2.list ?? [],
  switchId: e2.switchId ?? 0
}), exports.makeDamage = _, exports.makeDataNames = _a, exports.makeDropItem = C, exports.makeEditorSetting = va, exports.makeEnemyAction = (e2 = {}) => ({
  conditionParam1: e2.conditionParam1 ?? 0,
  conditionParam2: e2.conditionParam2 ?? 0,
  conditionType: e2.conditionType ?? 0,
  rating: e2.rating ?? 0,
  skillId: e2.skillId ?? 0
}), exports.makeEnemyData = (e2 = {}) => {
  var _a2;
  return {
    name: e2.name ?? "",
    id: e2.id ?? 0,
    battlerName: e2.battlerName ?? "",
    battlerHue: e2.battlerHue ?? 0,
    dropItems: ((_a2 = e2.dropItems) == null ? void 0 : _a2.map(() => C())) ?? [],
    exp: e2.exp ?? 0,
    gold: e2.gold ?? 0,
    traits: [],
    note: e2.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, exports.makeEventPageCondition = a, exports.makeGameInitial = (e2 = {}) => ({
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0,
  partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1]
}), exports.makeItemCategories = Sa, exports.makeItemCategoriesFromArray = (e2) => ({ item: e2[0], weapon: e2[1], armor: e2[2], keyItem: e2[3] }), exports.makeItemData = (e2 = {}) => ({
  animationId: e2.animationId ?? 0,
  id: e2.id ?? 0,
  name: e2.name ?? "",
  iconIndex: e2.iconIndex ?? 0,
  description: e2.description ?? "",
  itypeId: e2.itypeId ?? 0,
  note: e2.note ?? "",
  consumable: e2.consumable ?? false,
  scope: e2.scope ?? 0,
  occasion: e2.occasion ?? 0,
  speed: e2.speed ?? 0,
  successRate: e2.successRate ?? 0,
  repeats: e2.repeats ?? 0,
  tpGain: e2.tpGain ?? 0,
  hitType: e2.hitType ?? 0,
  damage: _(e2.damage ?? {}),
  effects: [],
  price: 0
}), exports.makeMapData = (e2 = {}) => ({
  data: e2.data ?? [],
  battleback1Name: e2.battleback1Name ?? "",
  battleback2Name: e2.battleback2Name ?? "",
  autoplayBgm: e2.autoplayBgm ?? false,
  autoplayBgs: e2.autoplayBgs ?? false,
  parallaxLoopX: e2.parallaxLoopX ?? false,
  parallaxLoopY: e2.parallaxLoopY ?? false,
  parallaxName: e2.parallaxName ?? "",
  parallaxShow: e2.parallaxShow ?? false,
  parallaxSx: e2.parallaxSx ?? 0,
  parallaxSy: e2.parallaxSy ?? 0,
  x: e2.x ?? 0,
  y: e2.y ?? 0,
  width: e2.width ?? 0,
  height: e2.height ?? 0,
  note: e2.note ?? "",
  bgm: e2.bgm ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  bgs: e2.bgs ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  disableDashing: e2.disableDashing ?? false,
  displayName: e2.displayName ?? "",
  encounterList: e2.encounterList ?? [],
  events: e2.events ?? []
}), exports.makeMapEvent = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), exports.makeMapEventIamge = r, exports.makeMapEventPage = () => ({ conditions: a(), list: [], directionFix: false, image: {
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}, moveFrequency: 5, moveRoute: { list: [], repeat: false, skippable: false, wait: false } }), exports.makeMapInfoData = (e2 = { id: 0 }) => {
  return {
    name: e2.name ?? (t2 = e2.id, t2.toString().padStart(3, "0")),
    id: e2.id,
    expanded: e2.expanded ?? false,
    order: e2.order ?? 0,
    parentId: e2.parentId ?? 0,
    scrollX: e2.scrollX ?? 0,
    scrollY: e2.scrollY ?? 0
  };
  var t2;
}, exports.makeMenuCommandsEnabled = Na, exports.makeMenuCommandsEnabledFromArray = (e2) => ({ item: e2[0], skill: e2[1], equip: e2[2], status: e2[3], formation: e2[4], save: e2[5] }), exports.makeParamNamesArray = ka, exports.makeRegex = St, exports.makeSkillData = (e2 = {}) => ({
  stypeId: e2.stypeId ?? 0,
  requiredWtypeId1: e2.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e2.requiredWtypeId2 ?? 0,
  animationId: e2.animationId ?? 0,
  damage: _(e2.damage ?? {}),
  description: e2.description ?? "",
  effects: [],
  hitType: e2.hitType ?? 0,
  iconIndex: e2.iconIndex ?? 0,
  id: e2.id ?? 0,
  message1: e2.message1 ?? "",
  message2: e2.message2 ?? "",
  messageType: e2.messageType ?? 0,
  name: e2.name ?? "",
  note: e2.note ?? "",
  mpCost: e2.mpCost ?? 0,
  occasion: e2.occasion ?? 0,
  repeats: e2.repeats ?? 0,
  scope: e2.scope ?? 0,
  speed: e2.speed ?? 0,
  successRate: e2.successRate ?? 0,
  tpCost: e2.tpCost ?? 0,
  tpGain: e2.tpGain ?? 0
}), exports.makeSoundsArray = ra, exports.makeSoundsObject = (e2) => ({
  cursor: e2[0],
  ok: e2[1],
  cancel: e2[2],
  buzzer: e2[3],
  equip: e2[4],
  save: e2[5],
  load: e2[6],
  battleStart: e2[7],
  escape: e2[8],
  enemyAttack: e2[9],
  enemyDamage: e2[10],
  enemyCollapse: e2[11],
  bossCollapes1: e2[12],
  bossCollapes2: e2[13],
  actorDamage: e2[14],
  actorCollapse: e2[15],
  playRecovery: e2[16],
  playMiss: e2[17],
  playEvasion: e2[18],
  playMagicEvasion: e2[19],
  playReflection: e2[20],
  shop: e2[21],
  useItem: e2[22],
  useSkill: e2[23]
}), exports.makeStateData = (e2 = {}) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  iconIndex: e2.iconIndex ?? 0,
  message1: e2.message1 ?? "",
  message2: e2.message2 ?? "",
  message3: e2.message3 ?? "",
  message4: e2.message4 ?? "",
  traits: [],
  note: e2.note ?? "",
  messageType: e2.messageType ?? 0,
  releaseByDamage: e2.releaseByDamage ?? false,
  restriction: e2.restriction ?? 0,
  priority: e2.priority ?? 0,
  motion: e2.motion ?? 0,
  overlay: e2.overlay ?? 0,
  removeAtBattleEnd: e2.removeAtBattleEnd ?? false,
  removeByRestriction: e2.removeByRestriction ?? false,
  autoRemovalTiming: e2.autoRemovalTiming ?? 0,
  minTurns: e2.minTurns ?? 0,
  maxTurns: e2.maxTurns ?? 0,
  removeByDamage: e2.removeByDamage ?? false,
  chanceByDamage: e2.chanceByDamage ?? 0,
  removeByWalking: e2.removeByWalking ?? false,
  stepsToRemove: e2.stepsToRemove ?? 0
}), exports.makeSystemAdvanced = aa, exports.makeSystemData = (e2) => {
  var _a2, _b, _c, _d, _e2;
  const t2 = e2.vehicles ?? {}, a2 = e2.dataNames ?? {}, r2 = e2.debug ?? {}, o2 = e2.images ?? {}, i2 = e2.gameInit ?? {}, s2 = e2.bgm ?? {}, p2 = wa(e2.size);
  return {
    ...oa(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: ra(e2.sounds),
    editor: va(e2.editing),
    advanced: aa(e2.advanced),
    title1Name: o2.title1Name ?? "",
    title2Name: o2.title2Name ?? "",
    battleback1Name: o2.battleback1Name ?? "",
    battleback2Name: o2.battleback2Name ?? "",
    ..._a(a2),
    magicSkills: Ha([]),
    airship: Oa(t2.airship),
    boat: Oa(t2.boat),
    ship: Oa(t2.ship),
    defeatMe: ht((_c = e2.me) == null ? void 0 : _c.defeatMe),
    gameoverMe: ht((_d = e2.me) == null ? void 0 : _d.gameoverMe),
    titleBgm: ht(s2.titleBgm),
    tileSize: p2.tileSize,
    faceSize: p2.faceSize,
    iconSize: p2.iconSize,
    versionId: 1,
    attackMotions: [],
    testBattlers: Ba(r2.testBattlers, Ga),
    battleBgm: ht(s2.battleBgm),
    victoryMe: ht((_e2 = e2.me) == null ? void 0 : _e2.victoryMe),
    editMapId: r2.editMapId ?? 0,
    locale: "",
    startMapId: i2.startMapId ?? 0,
    startX: i2.startX ?? 0,
    startY: i2.startY ?? 0,
    testTroopId: r2.testTroopId ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Fa(e2.terms ?? {}),
    itemCategories: Sa(e2.itemCategories),
    partyMembersArray: Ha(i2.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    battlerName: r2.battlerName ?? "",
    menuCommands: Na(e2.menuComamnds)
  };
}, exports.makeTermsBasic = ba, exports.makeTermsBasicFromArray = (e2) => ({ level: e2[0], levelA: e2[1], hp: e2[2], hpA: e2[3], mp: e2[4], mpA: e2[5], tp: e2[6], tpA: e2[7], experience: e2[8], exp: e2[9] }), exports.makeTermsCommand = Ca, exports.makeTermsCommandFromArray = (e2) => ({
  fight: e2[0],
  escape: e2[1],
  attack: e2[2],
  guard: e2[3],
  item: e2[4],
  skill: e2[5],
  equip: e2[6],
  status: e2[7],
  formation: e2[8],
  save: e2[9],
  gameEnd: e2[10],
  options: e2[11],
  weapon: e2[12],
  armor: e2[13],
  keyItem: e2[14],
  equip2: e2[15],
  optimize: e2[16],
  clear: e2[17],
  newGame: e2[18],
  continue_: e2[19],
  toTitle: e2[21],
  cancel: e2[22],
  buy: e2[24],
  sell: e2[25]
}), exports.makeTermsMessages = fa, exports.makeTitleCommandWindow = (e2) => ({ background: e2.background ?? 0, offsetX: e2.offsetX ?? 0, offsetY: e2.offsetY ?? 0 }), exports.makeTroopData = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  members: e2.members ?? [],
  pages: e2.pages ?? []
}), exports.makeTroopEventConditions = (e2 = {}) => ({
  actorHp: e2.actorHp ?? 0,
  actorId: e2.actorId ?? 0,
  enemyValid: e2.enemyValid ?? 0,
  switchValid: e2.switchValid ?? 0
}), exports.makeTroopMember = (e2 = {}) => ({ enemyId: e2.enemyId ?? 0, x: e2.x ?? 0, y: e2.y ?? 0, hidden: e2.hidden ?? false }), exports.makeVehicleData = Oa, exports.makeWeaponData = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  iconIndex: e2.iconIndex ?? 0,
  description: e2.description ?? "",
  traits: e2.traits ?? [],
  note: e2.note ?? "",
  animationId: e2.animationId ?? 0,
  params: e2.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: e2.etypeId ?? 0,
  price: e2.price ?? 0,
  damage: _(e2.damage ?? {}),
  wtypeId: e2.wtypeId ?? 0
}), exports.mergeItemsSource = (e2, t2) => {
  const a2 = we(t2);
  return e2.reduce((e3, t3) => {
    const r2 = Fe(t3, a2);
    return e3.set(t3.kindId, r2), e3;
  }, /* @__PURE__ */ new Map());
}, exports.normalizeDataActor = (e2) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  battlerName: e2.battlerName ?? "",
  characterName: e2.characterName ?? "",
  characterIndex: e2.characterIndex ?? 0,
  faceName: e2.faceName ?? "",
  faceIndex: e2.faceIndex ?? 0,
  traits: [],
  note: e2.note ?? "",
  classId: e2.classId ?? 0,
  nickname: e2.nickname ?? "",
  profile: e2.profile ?? "",
  equips: [],
  initialLevel: e2.initialLevel ?? 0,
  maxLevel: e2.maxLevel ?? 0
}), exports.partyAbilityToArray = H, exports.readNote = (e2) => Nt(e2, (e3, t2) => [e3, t2]), exports.readNoteObject = (e2, t2) => Nt(e2.note, (a2, r2) => t2(a2, r2, e2)), exports.regularParamName = (e2, t2) => {
  switch (e2) {
    case 0:
      return t2.maxHp;
    case 1:
      return t2.maxMp;
    case 2:
      return t2.atk;
    case 3:
      return t2.def;
    case 4:
      return t2.matk;
    case 5:
      return t2.mdef;
    case 6:
      return t2.agi;
    case 7:
      return t2.luk;
    default:
      return `?rparams[${e2}]`;
  }
}, exports.regularParamsToArray = L, exports.replaceNote = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (e3, a2, r2) => {
    const o2 = t2(a2, r2);
    if (o2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return Rt(a2, o2);
  });
}, exports.resolveItemEffectLabels = (e2) => [je(e2), Ke(e2), Xe(e2), $e(e2), Qe(e2), Ze(e2), Je(e2), et(e2), tt(e2), We(e2), at(e2), rt(e2), ot(e2)], exports.resolveTraitLabels = (e2) => [Y(e2.elementRate), W(e2.debuffRate), j(e2.stateRate), K(e2.stateResist), X(e2.regularParam), $(e2.extraParam), Q(e2.specialParam), Z(e2.attackElement), J(e2.attackState), ee(e2.attackSpeed), te(e2.attackTimes), ae(e2.attackSkill), re(e2.skillTypeAdd), oe(e2.skillTypeSeal), ie(e2.skillAdd), se(e2.skillSeal), pe(e2.equipWeaponType), ne(e2.equipArmorType), me(e2.equipLock), de(e2.equipSeal), le(e2.slotType), ce(e2.actionPlus), ye(e2.specialFlag), ue(e2.collaps), xe(e2.partyAbility)], exports.setNoteValue = (e2, t2, a2) => {
  const r2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(r2, (e3, r3) => r3 === t2 ? Rt(r3, a2) : e3);
}, exports.specialFlagToArray = B, exports.specialParamName = (e2, t2) => {
  switch (e2) {
    case 9:
      return t2.experienceRate;
    case 0:
      return t2.targetRate;
    case 8:
      return t2.floorDamageRate;
    case 1:
      return t2.guardEffectRate;
    case 4:
      return t2.mpCostRate;
    case 5:
      return t2.tpChargeRate;
    case 6:
      return t2.physicalDamageRate;
    case 7:
      return t2.magicDamageRate;
    case 3:
      return t2.pharmacology;
    case 2:
      return t2.recoveryEffectRate;
  }
  return `?sparams[${e2}]`;
}, exports.specialParamsToArray = D, exports.toArrayCommonEvent = kt, exports.toArrayControlSwitches = Ot, exports.toArrayInputNumber = Dt, exports.toArrayOperandActorStatus = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], exports.toArrayOperandConstant = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], exports.toArrayOperandEnemyStatus = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, Gt[t2.param]], exports.toArrayOperandItemData = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], exports.toArrayOperandRandom = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], exports.toArrayOperandScript = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], exports.toArrayOperandVariable = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], exports.toArrayScrollingTextBody = Ht, exports.toArrayScrollingTextHeader = Ft, exports.toArraySetupChoice = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], exports.toArraySetupChoiceItem = (e2) => [e2.index ?? 0, e2.name ?? ""], exports.toArrayShowMessageHeader = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName];
//# sourceMappingURL=rpgTypes.cjs.js.map
