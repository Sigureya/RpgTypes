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
}, n = new e(), m = n.compile(o), p = n.compile(s), d = (e2, t2) => [l(e2.skills, t2), c(e2.actors, t2), u(e2.states, t2), y(e2.armors, t2), x(e2.classes, t2), g(e2.enemies, t2), E(e2.items, t2), A(e2.weapons, t2), T(e2.commonEvents, t2)], l = (e2, t2) => ({
  label: t2.skill.title,
  items: e2,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), c = (e2, t2) => ({
  items: e2,
  label: t2.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), u = (e2, t2) => ({ items: e2, label: t2.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), y = (e2, t2) => ({ items: e2, label: t2.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), x = (e2, t2) => ({ items: e2, label: t2.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), g = (e2, t2) => ({ items: e2, label: t2.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), E = (e2, t2) => ({ items: e2, label: t2.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), A = (e2, t2) => ({ items: e2, label: t2.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), T = (e2, t2) => ({ items: e2, label: t2.commonEvent.title, source: { author: "rmmz", module: "data", kind: "common_event" } }), I = {
  actor: {
    title: "アクター",
    options: {
      initialEquipments: "初期装備",
      faceImage: "顔画像",
      characterImage: "キャラクター画像",
      svBattlerImage: "SVバトラー画像",
      nickname: "ニックネーム",
      profile: "プロフィール",
      classId: "職業ID",
      initialLevel: "初期レベル",
      maxLevel: "最大レベル"
    }
  },
  class: { title: "職業", options: { params: "パラメータ", learnings: "習得スキル", expParams: "経験値パラメータ" } },
  armor: { title: "防具", options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" } },
  enemy: { title: "敵キャラ", options: { dropItems: "ドロップアイテム", battlerHue: "バトラーヒュー", battlerName: "バトラー名", gold: "ゴールド" } },
  item: { title: "アイテム", options: { consumable: "消耗品" } },
  skill: { title: "スキル", options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  } },
  state: { title: "ステート", options: {
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
  weapon: { title: "武器", options: { weaponTypeId: "武器タイプID" } },
  usableItem: { title: "", options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  } },
  commonEvent: { title: "コモンイベント", options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" } }
}, _ = { title: "ダメージ", options: {} }, b = (e2 = {}) => ({
  type: e2.type ?? 0,
  elementId: e2.elementId ?? 0,
  formula: e2.formula ?? "",
  variance: e2.variance ?? 0,
  critical: e2.critical ?? false
}), S = {
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
}, R = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "atypeId"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, description: { type: "string" }, iconIndex: { type: "integer", minimum: 0 }, price: { type: "integer", minimum: 0 }, note: {
    type: "string"
  }, etypeId: { type: "integer", minimum: 0 }, atypeId: { type: "integer", minimum: 0 }, params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 }, traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: {
    type: "integer"
  }, value: { type: "integer" } }, required: ["code", "dataId", "value"] } } }
}, C = { type: "object", required: ["name", "id", "note", "expParams", "params", "learnings", "traits"], properties: {
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
}, additionalProperties: false }, f = {
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
}, N = (e2 = {}) => ({
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
  items: v(e2.options, t2),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), v = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, { id: 2, name: e2.instantCollaps }, {
  id: 3,
  name: e2.noneCollaps
}], k = (e2) => ({ items: O(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "xparams" } }), O = (e2) => [{ id: 0, name: e2.hitRate }, { id: 1, name: e2.evasionRate }, { id: 2, name: e2.criticalRate }, {
  id: 3,
  name: e2.criticalEvasionRate
}, { id: 4, name: e2.magicEvasionRate }, { id: 5, name: e2.magicReflectionRate }, { id: 6, name: e2.counterAttackRate }, { id: 7, name: e2.hpRegenerationRate }, {
  id: 8,
  name: e2.mpRegenerationRate
}, { id: 9, name: e2.tpRegenerationRate }], P = (e2) => ({ items: L(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "params" } }), L = (e2) => [{
  id: 0,
  name: e2.maxHp
}, { id: 1, name: e2.maxMp }, { id: 2, name: e2.atk }, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, { id: 5, name: e2.mdef }, { id: 6, name: e2.agi }, { id: 7, name: e2.luk }], D = (e2) => ({
  items: F(e2.options),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "sparams" }
}), F = (e2) => [{ id: 0, name: e2.targetRate }, { id: 1, name: e2.guardEffectRate }, { id: 2, name: e2.recoveryEffectRate }, { id: 3, name: e2.pharmacology }, {
  id: 4,
  name: e2.mpCostRate
}, { id: 5, name: e2.tpChargeRate }, { id: 6, name: e2.physicalDamageRate }, { id: 7, name: e2.magicDamageRate }, { id: 8, name: e2.floorDamageRate }, {
  id: 9,
  name: e2.experienceRate
}], H = (e2) => ({ items: w(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "partyAbility" } }), w = (e2) => [{ id: 0, name: e2.encounterHalf }, { id: 1, name: e2.encounterNone }, {
  id: 2,
  name: e2.cancelSurprise
}, { id: 3, name: e2.raisePreemptive }, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], B = (e2) => ({ items: G(e2.options), label: e2.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), G = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
  id: 3,
  name: e2.preventEscape
}], U = "{name}", q = "{name} * {value}%", V = "{name} + {value}%", j = "{value}", Y = {
  title: "特徴",
  options: {
    regularParam: { title: "基本能力値", format: q, options: {
      maxHp: "最大HP",
      maxMp: "最大MP",
      atk: "攻撃力",
      def: "防御力",
      matk: "魔法攻撃力",
      mdef: "魔法防御力",
      agi: "敏捷性",
      luk: "運"
    } },
    extraParam: { title: "追加能力値", format: V, options: {
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
    } },
    specialParam: { title: "特殊能力値", format: q, options: {
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
    } },
    specialFlag: {
      title: "特殊フラグ",
      format: U,
      options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
    },
    collaps: { title: "消滅エフェクト", format: U, options: {
      bossCollaps: "ボス崩壊",
      instantCollaps: "即時崩壊",
      noneCollaps: "崩壊なし"
    } },
    partyAbility: { title: "パーティ能力", format: U, options: {
      cancelSurprise: "不意打ち無効",
      dropItemDouble: "アイテムドロップ2倍",
      encounterHalf: "エンカウント半減",
      encounterNone: "エンカウントなし",
      goldDouble: "ゴールド2倍",
      raisePreemptive: "先制攻撃率アップ"
    } },
    elementRate: { title: "属性有効度", format: q },
    debuffRate: { title: "弱体有効度", format: q },
    stateRate: { title: "ステート有効度", format: q },
    stateResist: {
      title: "ステート無効",
      format: U
    },
    attackElement: { title: "攻撃属性", format: U },
    attackState: { title: "攻撃ステート", format: V },
    attackSpeed: { title: "攻撃速度補正", format: j },
    attackTimes: { title: "攻撃追加回数", format: j },
    actionPlus: { title: "行動追加", format: q },
    attackSkill: { title: "攻撃スキル", format: U },
    equipWeaponType: { title: "装備武器タイプ", format: U },
    equipArmorType: { title: "装備防具タイプ", format: U },
    equipLock: {
      title: "装備固定",
      format: U
    },
    equipSeal: { title: "装備封印", format: U },
    slotType: { title: "スロットタイプ", format: U },
    skillAdd: { title: "スキル追加", format: U },
    skillSeal: { title: "スキルタイプ封印", format: U },
    skillTypeAdd: {
      title: "スキルタイプ追加",
      format: U
    },
    skillTypeSeal: { title: "スキルタイプ封印", format: U }
  }
}, W = (e2, t2) => [P(e2.regularParam), k(e2.extraParam), D(e2.specialParam), h(e2.collaps, t2), B(e2.specialFlag), H(e2.partyAbility)], z = (e2) => e2.map((e3) => ({ dataKey: e3, placeHolder: `{${e3}}` })), K = (e2) => ({
  dataKey: e2.dataIdKey,
  placeHolder: `{${e2.dataIdKey}}`,
  sourceId: { author: e2.sourceId.author, kind: e2.sourceId.kind, module: e2.sourceId.module }
}), X = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, $ = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : [...t2];
}, Z = (e2, t2 = []) => {
  return {
    itemMappers: [...$(e2), ...t2].map(J),
    fallbackFormat: { text: Q(e2), label: ee(e2) },
    properties: (a2 = e2.placeHolder ?? {}, { numbers: a2.numbers ? z(a2.numbers) : [], strings: a2.strings ? z(a2.strings) : [] }),
    arrayIndex: e2.arrayIndex ? e2.arrayIndex.map(K) : []
  };
  var a2;
}, J = (e2) => ({ placeHolder: `{${e2.placeHolder}}`, kindKey: e2.kindKey, dataIdKey: e2.dataIdKey }), Q = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const t2 = ((e3) => {
    var _a2, _b, _c;
    return /* @__PURE__ */ new Set([...((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? [], ...((_b = e3.placeHolder) == null ? void 0 : _b.strings) ?? [], ...((_c = e3.arrayIndex) == null ? void 0 : _c.map((e4) => e4.dataIdKey)) ?? []]);
  })(e2);
  return 0 === t2.size ? "value not found" : Array.from(t2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, ee = (e2) => {
  var _a2;
  return void 0 !== ((_a2 = e2.fallbackFormat) == null ? void 0 : _a2.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, te = (e2, t2, a2) => {
  const r2 = t2[a2.dataKey];
  return null == r2 ? e2 : e2.replaceAll(a2.placeHolder, String(r2));
}, ae = (e2, t2, a2, r2) => {
  const o2 = Array.from(e2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), i2 = ((e3) => {
    var _a2, _b, _c, _d;
    return /* @__PURE__ */ new Set([...((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? [], ...e3.itemMapper ? [e3.itemMapper.placeHolder] : [], ...((_b = e3.itemMappers) == null ? void 0 : _b.map((e4) => e4.placeHolder)) ?? [], ...((_c = e3.placeHolder) == null ? void 0 : _c.strings) ?? [], ...((_d = e3.arrayIndex) == null ? void 0 : _d.map((e4) => e4.dataIdKey)) ?? []]);
  })(t2);
  return o2.reduce((e3, t3) => {
    const o3 = t3[1];
    return 0 === o3.length ? e3 : o3.length > r2 ? (e3.push({ message: a2.longPlaceHolder, reason: o3.slice(0, r2) }), e3) : (i2.has(o3) || e3.push({
      message: a2.extraPlaceHolder,
      reason: o3
    }), e3);
  }, []);
}, re = (e2, t2, a2) => $(t2).reduce((t3, r2) => {
  const o2 = oe(e2, r2, a2);
  return o2 && t3.push(o2), t3;
}, []), oe = (e2, t2, a2) => {
  const r2 = e2.pattern.includes(t2.placeHolder), o2 = !!e2.dataSource;
  return !r2 && o2 ? { message: a2.missingName, reason: t2.placeHolder } : r2 && !o2 ? { message: a2.missingSourceId, reason: t2.placeHolder } : void 0;
}, ie = (e2, t2) => {
  const a2 = me(t2);
  return e2.reduce((e3, t3) => {
    const r2 = se(t3, a2);
    return e3.set(t3.kindId, r2), e3;
  }, /* @__PURE__ */ new Map());
}, se = (e2, t2) => {
  const a2 = ne(e2.dataSource, t2);
  return { patternCompiled: e2.pattern, label: e2.label, data: a2 ? a2.items : void 0 };
}, ne = (e2, t2) => {
  if (e2) return t2.get(X(e2));
}, me = (e2) => e2.reduce((e3, t2) => {
  const a2 = { items: pe(t2.items), source: t2.source, label: t2.label };
  return e3.set(X(t2.source), a2), e3;
}, /* @__PURE__ */ new Map()), pe = (e2) => e2.map((e3) => ({
  id: e3.id,
  name: e3.name
})), de = (e2, t2, a2, r2, o2) => {
  const i2 = ((e3, t3, a3) => {
    const r3 = a3.properties.numbers.reduce((e4, a4) => te(e4, t3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => te(e4, t3, a4), r3);
  })(r2, e2, a2);
  return t2 ? le(i2, e2, a2, t2, o2) : i2;
}, le = (e2, t2, a2, r2, o2) => {
  const i2 = ((e3, t3) => {
    const a3 = ((e4, t4) => {
      const a4 = t4[e4];
      return a4 && a4.id === e4 ? a4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return a3 ? a3.name : `?data[${t3}]`;
  })(r2, o2(t2));
  return a2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, i2), e2);
}, ce = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: { numbers: ["value"] } }, ue = {
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
}, ye = (e2) => [Ee(e2), Ae(e2), Te(e2), Ie(e2), _e(e2), be(e2), Se(e2), Re(e2), Ce(e2), ge(e2), fe(e2), Ne(e2), Me(e2)], xe = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), ge = (e2) => xe(41, e2.special), Ee = (e2) => xe(11, e2.recoverHp), Ae = (e2) => xe(12, e2.recoverMp), Te = (e2) => xe(13, e2.gainTp), Ie = (e2) => xe(21, e2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), _e = (e2) => xe(22, e2.removeState, { author: "rmmz", module: "data", kind: "state" }), be = (e2) => xe(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), Se = (e2) => xe(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Re = (e2) => xe(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), Ce = (e2) => xe(34, e2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), fe = (e2) => xe(42, e2.grow, { author: "rmmz", module: "trait", kind: "params" }), Ne = (e2) => xe(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), Me = (e2) => xe(44, e2.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), he = "{name} {value1}%", ve = "{value1}% + {value2}", ke = "{name} {value1}ターン", Oe = "{name}", Pe = { title: "使用効果", options: { addBuff: {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: ke
}, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: ke }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: ve }, grow: {
  desc: "成長効果",
  domainName: "成長効果",
  format: "{name} + {value1}"
}, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: Oe }, recoverHp: {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: ve
}, recoverMp: {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: ve
}, removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: Oe }, removeDebuff: {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: Oe
}, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: he }, special: { desc: "特殊効果", domainName: "特殊効果", format: Oe }, addState: {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: he
}, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: Oe } } }, Le = { type: "string" }, De = { type: "integer" }, Fe = {
  type: "integer",
  minimum: 0
}, He = {
  type: "object",
  properties: { type: { type: "integer" }, elementId: Fe, formula: Le, variance: De, critical: { type: "boolean" } },
  required: ["type", "elementId", "formula", "variance", "critical"],
  additionalProperties: false
}, we = {
  type: "object",
  properties: { code: De, dataId: Fe, value1: De, value2: De },
  required: ["code", "dataId", "value1", "value2"],
  additionalProperties: false
}, Be = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "message1", "message2", "messageType", "mpCost", "requiredWtypeId1", "requiredWtypeId2", "stypeId", "tpCost", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "note", "effects"],
  properties: {
    name: Le,
    id: Fe,
    description: Le,
    iconIndex: Fe,
    message1: Le,
    message2: Le,
    messageType: Fe,
    mpCost: De,
    requiredWtypeId1: Fe,
    requiredWtypeId2: Fe,
    stypeId: Fe,
    tpCost: De,
    animationId: Fe,
    hitType: Fe,
    occasion: { type: "integer" },
    repeats: Fe,
    scope: De,
    speed: De,
    successRate: De,
    tpGain: De,
    note: Le,
    effects: { type: "array", items: we },
    damage: He
  },
  additionalProperties: false
}, Ge = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "note", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "consumable", "price", "effects"],
  properties: { name: Le, id: Fe, description: Le, iconIndex: Fe, note: Le, animationId: Fe, hitType: De, occasion: De, repeats: De, scope: De, speed: De, successRate: De, tpGain: De, consumable: {
    type: "boolean"
  }, price: Fe, itypeId: Fe, effects: { type: "array", items: we }, damage: He }
}, Ue = new e(), qe = Ue.compile(Ge), Ve = Ue.compile(Be), je = Ue.compile(S), Ye = Ue.compile(R), We = Ue.compile(ue), ze = Ue.compile(f), Ke = Ue.compile(M), Xe = Ue.compile(C), $e = (e2, t2) => `<${e2}:${t2}>`, Ze = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, Je = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, Qe = (e2) => [et(e2.elementRate), tt(e2.debuffRate), at(e2.stateRate), rt(e2.stateResist), ot(e2.regularParam), it(e2.extraParam), st(e2.specialParam), nt(e2.attackElement), mt(e2.attackState), pt(e2.attackSpeed), dt(e2.attackTimes), lt(e2.attackSkill), ct(e2.skillTypeAdd), ut(e2.skillTypeSeal), yt(e2.skillAdd), xt(e2.skillSeal), gt(e2.equipWeaponType), Et(e2.equipArmorType), At(e2.equipLock), Tt(e2.equipSeal), It(e2.slotType), _t(e2.actionPlus), bt(e2.specialFlag), St(e2.collaps), Rt(e2.partyAbility)], et = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 11,
  dataSource: Nt()
}), tt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), at = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 13,
  dataSource: Ct()
}), rt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 14, dataSource: Ct() }), ot = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), it = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), st = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), nt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 31, dataSource: Nt() }), mt = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 32,
  dataSource: Ct()
}), pt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 33 }), dt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 34 }), lt = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 35,
  dataSource: ft()
}), ct = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 41, dataSource: Mt() }), ut = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 42,
  dataSource: Mt()
}), yt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 43, dataSource: ft() }), xt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 44, dataSource: ft() }), gt = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 51,
  dataSource: ht()
}), Et = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 52, dataSource: vt() }), At = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 53,
  dataSource: kt()
}), Tt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 54, dataSource: kt() }), It = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 55, dataSource: kt() }), _t = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 61
}), bt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), St = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Rt = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), Ct = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), ft = () => ({ author: "rmmz", module: "data", kind: "skill" }), Nt = () => ({ author: "rmmz", module: "system", kind: "elements" }), Mt = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), ht = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), vt = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), kt = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), Ot = {
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
}, Pt = (e2 = {}) => ({
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
}), Lt = {
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
    fontSize: { type: "integer" }
  },
  required: ["gameId", "screenWidth", "screenHeight", "uiAreaWidth", "uiAreaHeight", "windowOpacity", "screenScale", "numberFontFilename", "mainFontFilename", "fallbackFonts", "fontSize"],
  additionalProperties: false
}, Dt = { type: "object", additionalProperties: false, required: ["type", "weaponImageId"], properties: { type: { type: "number" }, weaponImageId: { type: "number" } } }, Ft = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
}), Ht = (e2 = {}) => [Ft(e2.cursor), Ft(e2.ok), Ft(e2.cancel), Ft(e2.buzzer), Ft(e2.equip), Ft(e2.save), Ft(e2.load), Ft(e2.battleStart), Ft(e2.escape), Ft(e2.enemyAttack), Ft(e2.enemyDamage), Ft(e2.enemyCollapse), Ft(e2.bossCollapes1), Ft(e2.bossCollapes2), Ft(e2.actorDamage), Ft(e2.actorCollapse), Ft(e2.playRecovery), Ft(e2.playMiss), Ft(e2.playEvasion), Ft(e2.playMagicEvasion), Ft(e2.playReflection), Ft(e2.shop), Ft(e2.useItem), Ft(e2.useSkill)], wt = {
  type: "object",
  properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
    type: "integer",
    minimum: -100,
    maximum: 100
  } },
  required: ["name", "volume", "pitch", "pan"],
  additionalProperties: false
}, Bt = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: wt, victoryMe: wt, gameoverMe: wt, titleBgm: wt, defeatMe: wt, sounds: {
    type: "array",
    items: wt,
    minItems: 24,
    maxItems: 24
  } }
}, Gt = {
  type: "object",
  additionalProperties: false,
  required: ["magicSkills", "battleSystem"],
  properties: { magicSkills: {
    type: "array",
    items: { type: "number" },
    minItems: 0,
    uniqueItems: true
  }, battleSystem: { type: "number" } }
}, Ut = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], qt = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], Vt = {
  required: ["itemCategories", "menuCommands"],
  additionalProperties: false,
  type: "object",
  properties: {
    itemCategories: { type: "array", maxItems: 4, minItems: 4, items: { type: "boolean" } },
    menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } }
  }
}, jt = (e2 = {}) => ({
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
}), Yt = {
  type: "boolean"
}, Wt = {
  type: "object",
  additionalProperties: false,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: Yt,
    optDisplayTp: Yt,
    optDrawTitle: Yt,
    optExtraExp: Yt,
    optFloorDeath: Yt,
    optFollowers: Yt,
    optKeyItemsNumber: Yt,
    optSideView: Yt,
    optSlipDeath: Yt,
    optTransparent: Yt,
    optMessageSkip: Yt,
    optSplashScreen: Yt
  }
}, zt = { additionalProperties: false, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: { startMapId: {
  type: "integer",
  minimum: 0
}, startX: { type: "integer", minimum: 0 }, startY: { type: "integer", minimum: 0 }, partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } } } }, Kt = {
  additionalProperties: false,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: {
    type: "integer",
    minimum: 0
  } }
}, Xt = { additionalProperties: false, type: "object", required: ["title1Name", "title2Name"], properties: { title1Name: { type: "string" }, title2Name: { type: "string" } } }, $t = {
  type: "object",
  additionalProperties: false,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: { type: "array", items: {
    type: "number"
  }, minItems: 4, maxItems: 4 } }
}, Zt = (e2, t2) => ({
  name: e2,
  id: t2
}), Jt = (e2) => e2.variables.map(Zt), Qt = (e2) => e2.elements.map(Zt), ea = (e2) => e2.equipTypes.map(Zt), ta = (e2) => e2.skillTypes.map(Zt), aa = (e2) => e2.weaponTypes.map(Zt), ra = (e2) => e2.armorTypes.map(Zt), oa = (e2) => e2.switches.map(Zt), ia = (e2, t2) => [na(e2, t2), ma(e2, t2), ca(e2, t2), pa(e2, t2), sa(e2, t2), da(e2, t2), la(e2, t2)], sa = (e2, t2) => ({
  items: ra(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), na = (e2, t2) => ({ items: Qt(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), ma = (e2, t2) => ({ items: ea(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), pa = (e2, t2) => ({
  items: ta(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), da = (e2, t2) => ({ items: Jt(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), la = (e2, t2) => ({ items: oa(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), ca = (e2, t2) => ({
  items: aa(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), ua = { type: "array", items: { type: "string" } }, ya = {
  additionalProperties: false,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: ua,
    skillTypes: ua,
    elements: ua,
    variables: ua,
    equipTypes: ua,
    switches: ua,
    armorTypes: ua
  }
}, xa = (e2) => ({
  armorTypes: ga(e2.armorTypes),
  elements: ga(e2.elements),
  equipTypes: ga(e2.equipTypes),
  weaponTypes: ga(e2.weaponTypes),
  skillTypes: ga(e2.skillTypes),
  variables: ga(e2.variables),
  switches: ga(e2.switches)
}), ga = (e2) => e2 ? [...e2] : [], Ea = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], Aa = (e2) => Ta(e2, ""), Ta = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], Ia = (e2, t2) => "string" == typeof e2 ? e2 : t2, _a = (e2) => ({
  actionFailure: Ia(e2.actionFailure, "Action failed."),
  actorDamage: Ia(e2.actorDamage, "%1 took %2 damage."),
  actorRecovery: Ia(e2.actorRecovery, "%1 recovered %2 HP."),
  actorGain: Ia(e2.actorGain, "%1 gained %2."),
  actorLoss: Ia(e2.actorLoss, "%1 lost %2."),
  actorDrain: Ia(e2.actorDrain, "%1 drained %2 HP."),
  actorNoDamage: Ia(e2.actorNoDamage, "%1 was not damaged."),
  actorNoHit: Ia(e2.actorNoHit, "%1 was not hit."),
  alwaysDash: Ia(e2.alwaysDash, "Always dash."),
  bgmVolume: Ia(e2.bgmVolume, "BGM volume"),
  bgsVolume: Ia(e2.bgsVolume, "BGS volume"),
  commandRemember: Ia(e2.commandRemember, "Command remember."),
  criticalToActor: Ia(e2.criticalToActor, "%1 dealt %2 damage to %3."),
  criticalToEnemy: Ia(e2.criticalToEnemy, "%1 dealt %2 damage to %3."),
  counterAttack: Ia(e2.counterAttack, "%1 countered!"),
  debuffAdd: Ia(e2.debuffAdd, "%1's %2 was lowered."),
  defeat: Ia(e2.defeat, "Defeat."),
  enemyDamage: Ia(e2.enemyDamage, "%1 took %2 damage."),
  enemyDrain: Ia(e2.enemyDrain, "%1 drained %2 HP."),
  enemyGain: Ia(e2.enemyGain, "%1 gained %2."),
  enemyLoss: Ia(e2.enemyLoss, "%1 lost %2."),
  enemyNoDamage: Ia(e2.enemyNoDamage, "%1 was not damaged."),
  enemyNoHit: Ia(e2.enemyNoHit, "%1 was not hit."),
  enemyRecovery: Ia(e2.enemyRecovery, "%1 recovered %2 HP."),
  evasion: Ia(e2.evasion, "%1 evaded the attack!"),
  autosave: Ia(e2.autosave, "Autosave"),
  escapeFailure: Ia(e2.escapeFailure, "Escape failed."),
  escapeStart: Ia(e2.escapeStart, "%1 started to escape!"),
  emerge: Ia(e2.emerge, "%1 appeared!"),
  expNext: Ia(e2.expNext, "Next level in %1 EXP."),
  expTotal: Ia(e2.expTotal, "Total EXP: %1"),
  file: Ia(e2.file, "File"),
  buffAdd: Ia(e2.buffAdd, "%1's %2 was raised."),
  buffRemove: Ia(e2.buffRemove, "%1's %2 was lowered."),
  obtainExp: Ia(e2.obtainExp, "%1 EXP obtained."),
  obtainGold: Ia(e2.obtainGold, "%1 gold obtained."),
  obtainItem: Ia(e2.obtainItem, "%1 obtained %2."),
  obtainSkill: Ia(e2.obtainSkill, "%1 learned %2."),
  levelUp: Ia(e2.levelUp, "%1 leveled up!"),
  partyName: Ia(e2.partyName, "Party"),
  loadMessage: Ia(e2.loadMessage, "Load %1?"),
  meVolume: Ia(e2.meVolume, "ME volume"),
  possession: Ia(e2.possession, "Possession"),
  preemptive: Ia(e2.preemptive, "%1 attacked first!"),
  saveMessage: Ia(e2.saveMessage, "Save %1?"),
  seVolume: Ia(e2.seVolume, "SE volume"),
  magicEvasion: Ia(e2.magicEvasion, "%1 evaded the magic!"),
  magicReflection: Ia(e2.magicReflection, "%1 reflected the magic!"),
  substitute: Ia(e2.substitute, "%1 took the hit!"),
  surprise: Ia(e2.surprise, "%1 surprised the enemy!"),
  touchUI: Ia(e2.touchUI, "Touch UI"),
  useItem: Ia(e2.useItem, "%1 used %2."),
  victory: Ia(e2.victory, "Victory!")
}), ba = { type: "string" }, Sa = {
  type: "string",
  nullable: true
}, Ra = { type: "string" }, Ca = { required: ["terms", "currencyUnit", "gameTitle"], additionalProperties: false, type: "object", properties: {
  currencyUnit: { type: "string" },
  gameTitle: { type: "string" },
  terms: { additionalProperties: false, type: "object", required: ["messages", "commands", "basic", "params"], properties: { messages: {
    type: "object",
    additionalProperties: false,
    required: ["actionFailure", "actorDamage", "actorNoDamage", "actorRecovery", "actorGain", "actorLoss", "actorDrain", "alwaysDash", "bgmVolume", "bgsVolume", "commandRemember", "criticalToActor", "criticalToEnemy", "counterAttack", "debuffAdd", "defeat", "enemyDamage", "enemyNoDamage", "enemyRecovery", "enemyGain", "enemyLoss", "enemyDrain", "evasion", "expNext", "expTotal", "escapeFailure", "escapeStart", "file", "loadMessage", "meVolume", "magicEvasion", "magicReflection", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "partyName", "preemptive", "saveMessage", "seVolume", "substitute", "touchUI", "victory", "useItem"],
    properties: {
      actionFailure: Ra,
      actorDamage: Ra,
      actorNoDamage: Ra,
      actorRecovery: Ra,
      actorGain: Ra,
      actorLoss: Ra,
      actorDrain: Ra,
      alwaysDash: Ra,
      bgmVolume: Ra,
      bgsVolume: Ra,
      commandRemember: Ra,
      criticalToActor: Ra,
      criticalToEnemy: Ra,
      counterAttack: Ra,
      debuffAdd: Ra,
      defeat: Ra,
      enemyDamage: Ra,
      enemyNoDamage: Ra,
      enemyRecovery: Ra,
      enemyGain: Ra,
      enemyLoss: Ra,
      enemyDrain: Ra,
      evasion: Ra,
      expNext: Ra,
      expTotal: Ra,
      escapeFailure: Ra,
      escapeStart: Ra,
      file: Ra,
      loadMessage: Ra,
      meVolume: Ra,
      magicEvasion: Ra,
      magicReflection: Ra,
      obtainExp: Ra,
      obtainGold: Ra,
      obtainItem: Ra,
      obtainSkill: Ra,
      partyName: Ra,
      preemptive: Ra,
      saveMessage: Ra,
      seVolume: Ra,
      substitute: Ra,
      touchUI: Ra,
      victory: Ra,
      useItem: Ra,
      buffAdd: Ra,
      buffRemove: Ra,
      actorNoHit: Ra,
      enemyNoHit: Ra,
      autosave: Ra,
      emerge: Ra,
      levelUp: Ra,
      possession: Ra,
      surprise: Ra
    }
  }, commands: {
    type: "array",
    items: [ba, ba, ba, ba, ba, ba, ba, ba, ba, ba, ba, ba, ba, ba, ba, ba, ba, ba, ba, ba, Sa, ba, ba, Sa, ba, ba],
    minItems: 26,
    maxItems: 26
  }, basic: { type: "array", items: { type: "string" }, minItems: 10, maxItems: 10 }, params: {
    type: "array",
    items: { type: "string", minLength: 1 },
    minItems: 10,
    maxItems: 10,
    uniqueItems: true
  } } }
} }, fa = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], Na = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: Ft(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), Ma = {
  additionalProperties: false,
  type: "object",
  required: ["characterIndex", "characterName", "bgm", "startMapId", "startX", "startY"],
  properties: {
    characterIndex: { type: "integer", minimum: 0, maximum: 7 },
    characterName: {
      type: "string",
      minLength: 1
    },
    bgm: { type: "object", additionalProperties: false, required: ["name", "volume", "pitch", "pan"], properties: {
      name: { type: "string" },
      volume: { type: "integer", minimum: 0, maximum: 100 },
      pitch: { type: "integer", minimum: 50, maximum: 150 },
      pan: { type: "integer", minimum: -100, maximum: 100 }
    } },
    startMapId: { type: "integer", minimum: 0 },
    startX: { type: "integer", minimum: 0, maximum: 5e3 },
    startY: { type: "integer", minimum: 0, maximum: 5e3 }
  }
}, ha = (e2 = {}) => ({ jsonFormatLevel: e2.jsonFormatLevel ?? 0, messageWidth1: e2.messageWidth1 ?? 816, messageWidth2: e2.messageWidth2 ?? 816 }), va = {
  additionalProperties: false,
  type: "object",
  required: ["actorId", "equips", "level"],
  properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: {
    type: "integer"
  } } }
}, ka = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: va },
    testTroopId: { type: "integer", minimum: 0 },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
    editMapId: { type: "integer", minimum: 0 },
    battlerHue: { type: "integer", minimum: 0 },
    battlerName: { type: "string" },
    editor: { additionalProperties: false, type: "object", required: ["messageWidth1", "messageWidth2", "jsonFormatLevel"], properties: { messageWidth1: {
      type: "integer",
      minimum: 0,
      maximum: 1e3
    }, messageWidth2: { type: "integer", minimum: 0, maximum: 1e3 }, jsonFormatLevel: { type: "integer", minimum: 0, maximum: 4 } } }
  }
}, Oa = {
  additionalProperties: false,
  required: ["airship", "boat", "ship", "advanced", "attackMotions"],
  type: "object",
  properties: { airship: Ma, boat: Ma, ship: Ma, advanced: Lt, attackMotions: { type: "array", items: Dt } }
}, Pa = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), { required: [], properties: {} }), La = new e({ strict: true }), Da = ((e2) => {
  const t2 = Pa(e2);
  return { additionalProperties: false, type: "object", required: Array.from(new Set(t2.required)), properties: t2.properties };
})([Oa, Bt, Gt, Vt, Wt, zt, Kt, $t, ya, Ca, Xt, ka]), Fa = La.compile(Da), Ha = La.compile(va);
La.compile(Dt);
const wa = La.compile(Kt), Ba = (e2) => ({
  basic: Ea(e2.basic ?? {}),
  commands: Aa(e2.commands ?? {}),
  params: fa(e2.params ?? {}),
  messages: _a(e2.messages ?? {})
}), Ga = (e2) => e2 ? [...e2] : [], Ua = (e2) => ((e3) => wa(e3))(e2) ? { tileSize: e2.tileSize, faceSize: e2.faceSize, iconSize: e2.iconSize } : {
  tileSize: 48,
  faceSize: 144,
  iconSize: 32
}, qa = (e2, t2) => e2 ? e2.map(t2) : [], Va = (e2) => ((e3) => Ha(e3))(e2) ? { actorId: e2.actorId, equips: Ga(e2.equips), level: e2.level } : { actorId: 0, equips: [], level: 1 }, ja = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [Ft(t2)],
  indent: a2
}), Ya = (e2) => [e2.eventId ?? 0], Wa = (e2) => [e2.min, e2.max, e2.value], za = (e2) => [e2], Ka = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: za(e2) }), Xa = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: za(e2)
}), $a = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], Za = (e2 = {}) => [(e2 == null ? void 0 : e2.speed) ?? 4, (e2 == null ? void 0 : e2.skip) ?? false], Ja = (e2 = "") => [e2], Qa = (e2, t2 = 0) => ({ code: 355, indent: t2, parameters: [e2] }), er = (e2, t2 = 0) => ({
  code: 655,
  indent: t2,
  parameters: [e2]
}), tr = {
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
}, ar = (e2) => [...e2], rr = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, or = new e(), ir = or.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: {
    type: "integer",
    enum: [320, 324, 325]
  }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer", minimum: 0 }, { type: "string" }] } },
  additionalProperties: false
}), sr = or.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "boolean" }]
} }, required: ["code", "indent", "parameters"] }), nr = or.compile({
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
}), mr = (e2) => nr(e2), pr = or.compile({ type: "object", required: ["code", "parameters", "indent"], properties: {
  indent: { type: "integer", minimum: 0 },
  parameters: { type: "array", minItems: 0, maxItems: 0 },
  code: { type: "integer", enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411] }
}, additionalProperties: false }), dr = or.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), lr = (e2) => dr(e2), cr = or.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), ur = or.compile({ type: "object", properties: {
  code: { type: "number", const: 102 },
  indent: { type: "integer", minimum: 0 },
  parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }] }
}, required: ["code", "indent", "parameters"] }), yr = or.compile({ type: "object", properties: { code: { type: "number", const: 402 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } }, required: ["code", "indent", "parameters"] }), xr = or.compile({
  type: "object",
  properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "number" }] } },
  required: ["code", "indent", "parameters"]
}), gr = or.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { code: { type: "integer", const: 101 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", items: [{ type: "string" }, { type: "integer", minimum: 0, maximum: 7 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, {
  type: "string"
}], minItems: 5, maxItems: 5 } } }), Er = (e2, t2) => ({ type: "array", items: t2, ...Ar(e2), ...Tr(e2.default) }), Ar = (e2) => ({
  ..."string" == typeof e2.text ? { title: e2.text } : {},
  ..."string" == typeof e2.desc ? { description: e2.desc } : {}
}), Tr = (e2) => void 0 !== e2 ? { default: e2 } : {}, Ir = (e2) => void 0 === e2 || 0 === e2, _r = (e2) => Er(e2, { type: "string" }), br = (e2) => {
  switch (e2.kind) {
    case "string":
    case "multiline_string":
      return ((e3) => ({ type: "string", ...Ar(e3), ...Tr(e3.default) }))(e2);
    case "file":
    case "combo":
      return ((e3) => ({ type: "string", ...Tr(e3.default), ...Ar(e3) }))(e2);
    case "select":
      return ((e3) => ({ type: "string", ...Tr(e3.default), ...Ar(e3), ...e3.options ? { enum: e3.options.map((e4) => e4.value) } : {} }))(e2);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return _r(e2);
    case "number[]":
      return ((e3) => ({ type: "array", items: { type: Ir(e3.decimals) ? "integer" : "number" }, ...Tr(e3.default), ...Ar(e3) }))(e2);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ((e3) => Er(e3, { type: "integer" }))(e2);
    case "number":
      return ((e3) => ({
        type: Ir(e3.decimals) ? "integer" : "number",
        ...Tr(e3.default),
        ...Ar(e3)
      }))(e2);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((e3) => ({
        type: "integer",
        ...Tr(e3.default),
        ...Ar(e3)
      }))(e2);
    case "boolean":
      return ((e3) => ({ type: "boolean", ...Tr(e3.default), ...Ar(e3) }))(e2);
    case "struct":
      return { $ref: `#/definitions/${(t2 = e2).struct}`, ...Ar(t2) };
    default:
      return {};
  }
  var t2;
}, Sr = (e2, t2) => Object.entries(t2).reduce((t3, [a2, r2]) => {
  if (a2 in e2) {
    const o2 = e2[a2];
    if ("string" == typeof o2) return { ...t3, [a2]: r2(o2) };
  }
  return t3;
}, {}), Rr = (e2, t2, a2, r2) => ({
  default: t2,
  ...Sr(a2, r2),
  kind: e2
}), Cr = (e2, t2, a2) => ({ default: [], ...Sr(t2, a2), kind: e2 }), fr = "help", Nr = "kind", Mr = "text", hr = "struct", vr = (e2) => {
  const t2 = JSON.parse(e2);
  return Array.isArray(t2) ? t2.map(kr) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, kr(t3)])) : t2;
}, kr = (e2) => {
  if ("string" != typeof e2) return e2;
  try {
    const t2 = JSON.parse(e2);
    return Array.isArray(t2) ? t2.map(kr) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, kr(t3)])) : t2;
  } catch {
    return e2;
  }
}, Or = (e2) => {
  if (Nr in e2.attr) {
    const t2 = Gr[e2.attr.kind];
    if (t2) return t2(e2);
  }
  return Rr("any", "", e2.attr, Dr);
}, Pr = (e2) => e2, Lr = (e2) => e2.replace("[", "").replace("]", "").split(",").map((e3) => parseFloat(e3.replaceAll('"', "").trim())).filter((e3) => !isNaN(e3)), Dr = {
  default: Pr,
  text: Pr,
  desc: Pr,
  parent: Pr
}, Fr = (e2) => Rr("string", "", e2.attr, Dr), Hr = (e2) => {
  const t2 = { default: (e3) => vr(e3), text: Pr, desc: Pr, parent: Pr };
  return Cr("string[]", e2.attr, t2);
}, wr = (e2, t2) => {
  const a2 = {
    default: Lr,
    text: Pr,
    desc: Pr,
    parent: Pr
  };
  return Cr(t2, e2.attr, a2);
}, Br = (e2, t2) => {
  const a2 = { default: (e3) => parseInt(e3, 10), text: Pr, desc: Pr, parent: Pr };
  return Rr(t2, 0, e2.attr, a2);
}, Gr = {
  number: (e2) => ((e3) => {
    const t2 = {
      default: (e4) => parseFloat(e4),
      text: Pr,
      desc: Pr,
      decimals: (e4) => parseInt(e4, 10),
      min: (e4) => parseFloat(e4),
      max: (e4) => parseFloat(e4),
      parent: Pr
    };
    return Rr("number", 0, e3.attr, t2);
  })(e2),
  "number[]": (e2) => {
    const t2 = { default: Lr, text: Pr, desc: Pr, decimals: (e3) => parseInt(e3, 10), min: (e3) => parseFloat(e3), max: (e3) => parseFloat(e3), parent: Pr };
    return Cr("number[]", e2.attr, t2);
  },
  string: Fr,
  "string[]": Hr,
  multiline_string: Fr,
  "multiline_string[]": Hr,
  combo: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => e3.option)) ?? [];
    return { ...Rr("combo", "", e2.attr, Dr), options: t2 };
  },
  select: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => ({ option: e3.option, value: e3.value }))) ?? [];
    return { ...Rr("select", "", e2.attr, Dr), options: t2 };
  },
  actor: (e2) => Br(e2, "actor"),
  "actor[]": (e2) => wr(e2, "actor[]"),
  class: (e2) => Br(e2, "class"),
  "class[]": (e2) => wr(e2, "class[]"),
  skill: (e2) => Br(e2, "skill"),
  "skill[]": (e2) => wr(e2, "skill[]"),
  item: (e2) => Br(e2, "item"),
  "item[]": (e2) => wr(e2, "item[]"),
  weapon: (e2) => Br(e2, "weapon"),
  "weapon[]": (e2) => wr(e2, "weapon[]"),
  armor: (e2) => Br(e2, "armor"),
  "armor[]": (e2) => wr(e2, "armor[]"),
  state: (e2) => Br(e2, "state"),
  "state[]": (e2) => wr(e2, "state[]"),
  enemy: (e2) => Br(e2, "enemy"),
  "enemy[]": (e2) => wr(e2, "enemy[]"),
  common_event: (e2) => Br(e2, "common_event"),
  "common_event[]": (e2) => wr(e2, "common_event[]"),
  switch: (e2) => Br(e2, "switch"),
  "switch[]": (e2) => wr(e2, "switch[]"),
  variable: (e2) => Br(e2, "variable"),
  "variable[]": (e2) => wr(e2, "variable[]"),
  troop: (e2) => Br(e2, "troop"),
  "troop[]": (e2) => wr(e2, "troop[]"),
  boolean: (e2) => {
    const t2 = {
      default: (e3) => "true" === e3,
      text: Pr,
      desc: Pr,
      on: Pr,
      off: Pr,
      parent: Pr
    };
    return Rr("boolean", true, e2.attr, t2);
  },
  file: (e2) => {
    const t2 = { default: Pr, text: Pr, desc: Pr, parent: Pr, dir: Pr };
    return { dir: "", ...Rr("file", "", e2.attr, t2) };
  },
  "file[]": (e2) => {
    const t2 = { default: (e3) => vr(e3), text: Pr, desc: Pr, parent: Pr, dir: Pr };
    return { dir: "", ...Cr("file[]", e2.attr, t2) };
  }
}, Ur = "BODY", qr = "STRUCT", Vr = "NONE", jr = (e2, t2) => {
  const a2 = e2.lines.length > 0 ? Wr(e2) : e2, r2 = t2[1] || void 0;
  return { ...a2, structName: r2, blockType: r2 ? qr : "INVALID", locale: t2[2], lines: [] };
}, Yr = (e2) => ({
  ...e2.lines.length > 0 ? Wr(e2) : e2,
  blockType: Ur,
  structName: void 0,
  locale: void 0,
  lines: []
}), Wr = (e2) => e2.blockType === Ur ? { ...e2, bodies: e2.bodies.concat([{ lines: [...e2.lines] }]), lines: [], blockType: Vr } : e2.structName && e2.blockType === qr ? {
  ...e2,
  structs: e2.structs.concat([{ struct: e2.structName, locale: e2.locale, lines: [...e2.lines] }]),
  blockType: Vr,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e2,
  blockType: Vr,
  structName: void 0,
  lines: []
}, zr = (e2) => e2.currentOption ? { items: e2.items.concat({ option: e2.currentOption, value: e2.currentOption }) } : e2, Kr = (e2) => ({
  ..."string" == typeof e2.desc ? { desc: e2.desc } : {},
  ..."string" == typeof e2.text ? { text: e2.text } : {}
}), Xr = (e2) => {
  const t2 = $r(e2), a2 = Jr(t2);
  return Zr(a2);
}, $r = (e2) => {
  if (e2.currentParam && e2.currentOption) {
    const t2 = e2.currentParam.attr.kind;
    if ("select" === t2 || "combo" === t2) return { ...e2, currentParam: { ...e2.currentParam, options: zr(e2.currentOption).items } };
  }
  return e2;
}, Zr = (e2) => e2.currentParam ? {
  ...e2,
  params: [...e2.params, e2.currentParam],
  currentParam: null,
  currentContext: null
} : e2, Jr = (e2) => {
  if (e2.currentCommand) {
    const t2 = e2.currentParam ? [...e2.currentCommand.args, e2.currentParam] : e2.currentCommand.args, a2 = { ...Kr(e2.currentCommand), command: e2.currentCommand.command, args: t2 };
    return {
      ...e2,
      commands: [...e2.commands, a2],
      currentCommand: null,
      currentParam: null,
      currentContext: null,
      currentOption: null
    };
  }
  return e2;
}, Qr = (e2, t2) => {
  const a2 = e2.lines.reduce((e3, a3) => {
    const r2 = a3.trim().replace(/^\*\s?/, "");
    if (!r2.startsWith("@")) return e3.currentContext === fr ? { ...e3, helpLines: e3.helpLines.concat(r2) } : e3;
    const [o2, ...i2] = r2.slice(1).split(" "), s2 = i2.join(" ").trim(), n2 = t2[o2];
    return n2 ? n2(e3, s2) : e3;
  }, to());
  return Xr(a2);
}, eo = (e2, t2) => {
  const a2 = ((e3) => {
    const t3 = e3.split("\n"), a3 = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: Vr
    }, r3 = t3.reduce((e4, t4) => {
      const a4 = t4.trim(), r4 = a4.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return r4 ? jr(e4, r4) : "/*:" === a4 ? Yr(e4) : "*/" === a4 ? e4.lines.length > 0 ? Wr(e4) : e4 : { ...e4, lines: e4.lines.concat([a4]) };
    }, a3);
    return { structs: r3.structs, bodies: r3.bodies };
  })(e2), r2 = a2.structs.map((e3) => ((e4) => {
    const t3 = Qr(e4, oo);
    return { name: e4.struct, params: t3.params };
  })(e3)), o2 = ((e3) => {
    if (0 !== e3.bodies.length) return e3.bodies[0];
  })(a2);
  if (!o2) return {
    params: [],
    commands: [],
    meta: {},
    helpLines: [],
    structs: r2
  };
  const i2 = Qr(o2, t2);
  return { params: i2.params, commands: i2.commands, meta: i2.meta, helpLines: i2.helpLines, structs: r2 };
}, to = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), ao = (e2, t2, a2) => e2.currentParam && !(t2 in e2.currentParam.attr) ? {
  ...e2,
  currentParam: { ...e2.currentParam, attr: { ...e2.currentParam.attr, [t2]: a2 } }
} : e2, ro = (e2, t2, a2) => ({ ...e2, meta: { [t2]: a2, ...e2.meta } }), oo = {
  param: (e2, t2) => {
    const a2 = Xr(e2);
    return a2.params.some((e3) => e3.name === t2) ? a2 : { ...a2, currentContext: "param", currentParam: { name: t2, attr: {} } };
  },
  text: (e2, t2) => e2.currentParam ? ao(e2, Mr, t2) : e2.currentCommand && !(Mr in e2.currentCommand) ? { ...e2, currentCommand: {
    ...Kr(e2.currentCommand),
    command: e2.currentCommand.command,
    args: e2.currentCommand.args,
    [Mr]: t2
  } } : e2,
  desc: (e2, t2) => e2.currentParam ? ao(e2, "desc", t2) : e2.currentCommand ? { ...e2, currentCommand: { ...e2.currentCommand, desc: t2 } } : e2,
  command: (e2, t2) => {
    const a2 = Xr(e2);
    return a2.commands.some((e3) => e3.command === t2) ? a2 : { ...a2, currentCommand: { command: t2, args: [] }, currentParam: null };
  },
  arg: (e2, t2) => {
    if (!e2.currentCommand) return e2;
    if (e2.currentParam) {
      const a2 = {
        ...Kr(e2.currentCommand),
        command: e2.currentCommand.command,
        args: e2.currentCommand.args.concat(e2.currentParam)
      };
      return {
        ...e2,
        commands: e2.commands,
        currentCommand: a2,
        currentContext: "arg",
        currentParam: { name: t2, attr: {} }
      };
    }
    return { ...e2, currentParam: { name: t2, attr: {} } };
  },
  help: (e2) => ({ ...Xr(e2), currentContext: fr }),
  option: (e2, t2) => {
    if (!e2.currentParam) return e2;
    const a2 = ((e3, t3) => e3.currentOption ? { items: e3.items.concat({ option: e3.currentOption, value: e3.currentOption }), currentOption: t3 } : { items: e3.items, currentOption: t3 })(e2.currentOption ?? {
      items: []
    }, t2);
    return { ...e2, currentOption: a2 };
  },
  value: (e2, t2) => {
    if (!e2.currentOption) return e2;
    const a2 = ((e3, t3) => e3.currentOption ? { items: e3.items.concat({ option: e3.currentOption, value: t3 }) } : {
      items: e3.items
    })(e2.currentOption, t2);
    return { ...e2, currentOption: a2 };
  },
  type: (e2, t2) => {
    if (((e3) => e3.endsWith(">") && e3.startsWith("struct<"))(t2)) {
      const a2 = t2.slice(7, -1), r2 = ao(e2, hr, a2);
      return ao(r2, Nr, hr);
    }
    return e2.currentParam ? ao(e2, Nr, t2) : e2;
  },
  default: (e2, t2) => ao(e2, "default", t2),
  on: (e2, t2) => ao(e2, "on", t2),
  off: (e2, t2) => ao(e2, "off", t2),
  min: (e2, t2) => ao(e2, "min", t2),
  max: (e2, t2) => ao(e2, "max", t2),
  base: (e2, t2) => {
    return { ...e2, dependencies: (a2 = e2.dependencies, r2 = t2, { orderAfter: a2.orderAfter, orderBefore: a2.orderBefore, base: a2.base.concat(r2) }) };
    var a2, r2;
  },
  orderAfter: (e2, t2) => {
    return { ...e2, dependencies: (a2 = e2.dependencies, r2 = t2, { base: a2.base, orderBefore: a2.orderBefore, orderAfter: a2.orderAfter.concat(r2) }) };
    var a2, r2;
  },
  orderBefore: (e2, t2) => {
    return {
      ...e2,
      dependencies: (a2 = e2.dependencies, r2 = t2, { base: a2.base, orderAfter: a2.orderAfter, orderBefore: a2.orderBefore.concat(r2) })
    };
    var a2, r2;
  },
  author: (e2, t2) => ro(e2, "author", t2),
  plugindesc: (e2, t2) => ro(e2, "plugindesc", t2),
  url: (e2, t2) => ro(e2, "url", t2)
}, io = (e2) => so(((e3) => eo(e3, oo))(e2)), so = (e2) => ({
  target: "MZ",
  meta: e2.meta,
  commands: mo(e2.commands),
  params: no(e2.params)
}), no = (e2) => e2.reduce((e3, t2) => ({ [t2.name]: Or(t2), ...e3 }), {}), mo = (e2) => e2.reduce((e3, t2) => {
  const a2 = { desc: t2.desc, text: t2.text, args: no(t2.args) };
  return { [t2.command]: a2, ...e3 };
}, {});
exports.ABORT_BATTLE = 340, exports.AUTHOR_RMMZ = "rmmz", exports.BATTLE_PROCESSING = 301, exports.CHANGE_ACTOR_IMAGES = 322, exports.CHANGE_ARMORS = 128, exports.CHANGE_BATTLE_BACKGROUND = 283, exports.CHANGE_BATTLE_BGM = 132, exports.CHANGE_CLASS = 321, exports.CHANGE_DEFEAT_ME = 139, exports.CHANGE_ENCOUNTER = 136, exports.CHANGE_ENEMY_HP = 331, exports.CHANGE_ENEMY_MP = 332, exports.CHANGE_ENEMY_STATE = 333, exports.CHANGE_ENEMY_TP = 342, exports.CHANGE_EXP = 315, exports.CHANGE_FORMATION_ACCESS = 137, exports.CHANGE_GOLD = 125, exports.CHANGE_HP = 311, exports.CHANGE_ITEMS = 126, exports.CHANGE_MENU_ACCESS = 135, exports.CHANGE_MP = 312, exports.CHANGE_NAME = 320, exports.CHANGE_NICKNAME = 324, exports.CHANGE_PARALLAX = 284, exports.CHANGE_PARTY_MEMBER = 129, exports.CHANGE_PLAYER_FOLLOWERS = 216, exports.CHANGE_PROFILE = 325, exports.CHANGE_SAVE_ACCESS = 134, exports.CHANGE_TILESET = 282, exports.CHANGE_TP = 313, exports.CHANGE_TRANSPARENCY = 211, exports.CHANGE_VEHICLE_BGM = 140, exports.CHANGE_VEHICLE_IMAGE = 323, exports.CHANGE_VICTORY_ME = 133, exports.CHANGE_WEAPONS = 127, exports.CHANGE_WINDOW_COLOR = 138, exports.COLLAPS_BOSS = 1, exports.COLLAPS_INSTANT = 2, exports.COLLAPS_NONE = 3, exports.COLLAPS_NORMAL = 0, exports.COMMENT_BODY = 408, exports.COMMENT_HEAD = 108, exports.COMMON_EVENT = 117, exports.CONDITIONAL_BRANCH = 111, exports.CONDITIONAL_BRANCH_ELSE = 411, exports.CONTROL_SELF_SWITCH = 123, exports.CONTROL_SWITCHES = 121, exports.CONTROL_TIMER = 124, exports.CONTROL_VARIABLES = 122, exports.DEFAULT_DAMAGE_LABELS = _, exports.DEFAULT_GLOBAL_LABELS = Ot, exports.DEFAULT_ITEM_LABELS = { title: "アイテム", options: { consumable: "消耗品" } }, exports.DEFAULT_SKILL_LABELS = { title: "スキル", options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" } }, exports.DEFAULT_SYSTEM_LABELS_BOOLEAN = { title: "オプション", options: {
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
} }, exports.DEFAULT_SYSTEM_LABELS_DATA_TYPES = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, exports.DEFAULT_USABLE_ITEM_LABELS = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, exports.EFFECT_ADD_BUFF = 31, exports.EFFECT_ADD_DEBUFF = 32, exports.EFFECT_ADD_STATE = 21, exports.EFFECT_COMMON_EVENT = 44, exports.EFFECT_GAIN_TP = 13, exports.EFFECT_GROW = 42, exports.EFFECT_LEARN_SKILL = 43, exports.EFFECT_RECOVER_HP = 11, exports.EFFECT_RECOVER_MP = 12, exports.EFFECT_REMOVE_BUFF = 33, exports.EFFECT_REMOVE_DEBUFF = 34, exports.EFFECT_REMOVE_STATE = 22, exports.EFFECT_SPECIAL = 41, exports.ENEMY_APPEAR = 335, exports.ENEMY_RECOVER_ALL = 334, exports.ENEMY_TRANSFORM = 336, exports.ERASE_EVENT = 214, exports.ERASE_PICTURE = 235, exports.EXIT_EVENT_PROCESSING = 115, exports.EXTRA_PARAM_CEV = 3, exports.EXTRA_PARAM_CNT = 6, exports.EXTRA_PARAM_CRI = 2, exports.EXTRA_PARAM_EVA = 1, exports.EXTRA_PARAM_HIT = 0, exports.EXTRA_PARAM_HRG = 7, exports.EXTRA_PARAM_MEV = 4, exports.EXTRA_PARAM_MRF = 5, exports.EXTRA_PARAM_MRG = 8, exports.EXTRA_PARAM_TRG = 9, exports.FADEIN_SCREEN = 222, exports.FADEOUT_BGM = 242, exports.FADEOUT_BGS = 246, exports.FADEOUT_SCREEN = 221, exports.FILENAME_ACTORS = "Actors.json", exports.FILENAME_ANIMATIONS = "Animations.json", exports.FILENAME_ARMORS = "Armors.json", exports.FILENAME_CLASSES = "Classes.json", exports.FILENAME_COMMON_EVENTS = "CommonEvents.json", exports.FILENAME_ENEMIES = "Enemies.json", exports.FILENAME_ITEMS = "Items.json", exports.FILENAME_MAP_INFOS = "MapInfos.json", exports.FILENAME_SKILLS = "Skills.json", exports.FILENAME_STATES = "States.json", exports.FILENAME_SYSTEM = "System.json", exports.FILENAME_TILESET = "Tilesets.json", exports.FILENAME_TROOPS = "Troops.json", exports.FILENAME_WEAPONS = "Weapons.json", exports.FLAG_ID_AUTO_BATTLE = 0, exports.FLAG_ID_GUARD = 1, exports.FLAG_ID_PRESERVE_TP = 3, exports.FLAG_ID_SUBSTITUTE = 2, exports.FLASH_SCREEN = 224, exports.FOLDER_AUDIO = "audio", exports.FOLDER_AUDIO_BGM = "bgm", exports.FOLDER_AUDIO_BGS = "bgs", exports.FOLDER_AUDIO_ME = "me", exports.FOLDER_AUDIO_SE = "se", exports.FOLDER_DATA = "data", exports.FOLDER_IMG = "img", exports.FOLDER_IMG_BATTLEBACK1 = "battlebacks1", exports.FOLDER_IMG_BATTLEBACK2 = "battlebacks2", exports.FOLDER_IMG_CHACTERS = "characters", exports.FOLDER_IMG_ENEMIES = "enemies", exports.FOLDER_IMG_FACES = "faces", exports.FOLDER_IMG_PARALLACES = "parallaxes", exports.FOLDER_IMG_PICTURES = "pictures", exports.FOLDER_IMG_SV_ACTORS = "sv_actors", exports.FOLDER_IMG_SV_ENEMIES = "sv_enemies", exports.FOLDER_IMG_SYSTEM = "system", exports.FOLDER_IMG_TILESETS = "tilesets", exports.FOLDER_IMG_TITLES1 = "titles1", exports.FOLDER_IMG_TITLES2 = "titles2", exports.FOLDER_JS = "js", exports.FORCE_ACTION = 339, exports.GAME_OVER = 353, exports.GATHER_FOLLOWERS = 217, exports.GET_LOCATION_INFO = 285, exports.GET_ONOFF_VEHICLE = 206, exports.HITTYPE_CERTAIN = 0, exports.HITTYPE_MAGICAL = 2, exports.HITTYPE_PHYSICAL = 1, exports.INPUT_NUMBER = 103, exports.LABEL = 118, exports.LABELS_DATA_WEAPON = { title: "武器", options: { weaponTypeId: "武器タイプID" } }, exports.LABELS_SYSTEM_BATTLER_PARAMS = { title: "能力値", options: {
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
} }, exports.LABELS_SYSTEM_GAME_COMMANDS = { title: "コマンド", options: {
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
} }, exports.LABEL_JUMP = 119, exports.LABEL_SET_DATA = I, exports.LABEL_SET_ITEM_EFFECT = Pe, exports.LABEL_SET_TRAIT = Y, exports.LOOP = 112, exports.LOOP_BREAK = 113, exports.MODULE_DATA = "data", exports.MOVE_PICTURE = 232, exports.NAME_INPUT_PROCESSING = 303, exports.NO_OPERATION = 0, exports.OPEN_MENU_SCREEN = 351, exports.OPEN_SAVE_SCREEN = 352, exports.OPERAND_CONSTANT = 0, exports.OPERAND_GAMEDATA = 3, exports.OPERAND_RANDOM = 2, exports.OPERAND_SCRIPT = 4, exports.OPERAND_VARIABLE = 1, exports.PARTY_ABILITY_CANCEL_SURPRISE = 2, exports.PARTY_ABILITY_DROP_ITEM_DOUBLE = 5, exports.PARTY_ABILITY_ENCOUNTER_HALF = 0, exports.PARTY_ABILITY_ENCOUNTER_NONE = 1, exports.PARTY_ABILITY_GOLD_DOUBLE = 4, exports.PARTY_ABILITY_RAISE_PREEMPTIVE = 3, exports.PLAY_BGM = 241, exports.PLAY_BGS = 245, exports.PLAY_ME = 249, exports.PLAY_MOVIE = 261, exports.PLAY_SE = 250, exports.PLUGIN_COMMAND_MV = 356, exports.PLUGIN_COMMAND_MZ = 357, exports.RECOVER_ALL = 314, exports.REGULAR_PARAM_AGI = 6, exports.REGULAR_PARAM_ATK = 2, exports.REGULAR_PARAM_DEF = 3, exports.REGULAR_PARAM_LUK = 7, exports.REGULAR_PARAM_MATK = 4, exports.REGULAR_PARAM_MAX_HP = 0, exports.REGULAR_PARAM_MAX_MP = 1, exports.REGULAR_PARAM_MDEF = 5, exports.RESUME_BGM = 244, exports.RETURN_TO_TITLE_SCREEN = 354, exports.ROTATE_PICTURE = 233, exports.ROUTE_CHANGE_BLEND_MODE = 43, exports.ROUTE_CHANGE_FREQ = 30, exports.ROUTE_CHANGE_IMAGE = 41, exports.ROUTE_CHANGE_OPACITY = 42, exports.ROUTE_CHANGE_SPEED = 29, exports.ROUTE_DIR_FIX_OFF = 36, exports.ROUTE_DIR_FIX_ON = 35, exports.ROUTE_END = 0, exports.ROUTE_JUMP = 14, exports.ROUTE_MOVE_AWAY = 11, exports.ROUTE_MOVE_BACKWARD = 13, exports.ROUTE_MOVE_DOWN = 1, exports.ROUTE_MOVE_FORWARD = 12, exports.ROUTE_MOVE_LEFT = 2, exports.ROUTE_MOVE_LOWER_L = 5, exports.ROUTE_MOVE_LOWER_R = 6, exports.ROUTE_MOVE_RANDOM = 9, exports.ROUTE_MOVE_RIGHT = 3, exports.ROUTE_MOVE_TOWARD = 10, exports.ROUTE_MOVE_UP = 4, exports.ROUTE_MOVE_UPPER_L = 7, exports.ROUTE_MOVE_UPPER_R = 8, exports.ROUTE_PLAY_SE = 44, exports.ROUTE_SCRIPT = 45, exports.ROUTE_STEP_ANIME_OFF = 34, exports.ROUTE_STEP_ANIME_ON = 33, exports.ROUTE_SWITCH_OFF = 28, exports.ROUTE_SWITCH_ON = 27, exports.ROUTE_THROUGH_OFF = 38, exports.ROUTE_THROUGH_ON = 37, exports.ROUTE_TRANSPARENT_OFF = 40, exports.ROUTE_TRANSPARENT_ON = 39, exports.ROUTE_TURN_180D = 22, exports.ROUTE_TURN_90D_L = 21, exports.ROUTE_TURN_90D_R = 20, exports.ROUTE_TURN_90D_R_L = 23, exports.ROUTE_TURN_AWAY = 26, exports.ROUTE_TURN_DOWN = 16, exports.ROUTE_TURN_LEFT = 17, exports.ROUTE_TURN_RANDOM = 24, exports.ROUTE_TURN_RIGHT = 18, exports.ROUTE_TURN_TOWARD = 25, exports.ROUTE_TURN_UP = 19, exports.ROUTE_WAIT = 15, exports.ROUTE_WALK_ANIME_OFF = 32, exports.ROUTE_WALK_ANIME_ON = 31, exports.SAVE_BGM = 243, exports.SCHEMA_DAMAGE = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: { type: { type: "integer", minimum: 0 }, elementId: { type: "integer", minimum: 0 }, formula: { type: "string" }, variance: {
    type: "integer"
  }, critical: { type: "boolean" } }
}, exports.SCHEMA_DATA_ACTOR = S, exports.SCHEMA_DATA_ARMMOR = R, exports.SCHEMA_DATA_CLASS = C, exports.SCHEMA_DATA_ENEMY = f, exports.SCHEMA_DATA_MAP_INFO = o, exports.SCHEMA_DATA_STATE = M, exports.SCHEMA_DATA_WEAPON = ue, exports.SCHEMA_SYSTEM_ADVANCED = Lt, exports.SCHEMA_SYSTEM_AUDIOFILES = Bt, exports.SCHEMA_SYSTEM_BATTLE_RULE_RMMZ = Gt, exports.SCHEMA_SYSTEM_BOOLEAN_GAMEMENU_OPTIONS = Vt, exports.SCHEMA_SYSTEM_BOOLEAN_OPTIONS = Wt, exports.SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE = ka, exports.SCHEMA_SYSTEM_GAME_INITIAL = zt, exports.SCHEMA_SYSTEM_IMAGE_SIZE = Kt, exports.SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION = Dt, exports.SCHEMA_SYSTEM_OTHER_DATA = $t, exports.SCHEMA_SYSTEM_RPG_DATA_NAMES = ya, exports.SCHEMA_SYSTEM_TERMS_BUNDLE = Ca, exports.SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW = {
  additionalProperties: false,
  type: "object",
  required: ["background", "offsetX", "offsetY"],
  properties: { background: { type: "integer", minimum: 0, maximum: 1e3 }, offsetX: { type: "integer", minimum: -1e3, maximum: 1e3 }, offsetY: {
    type: "integer",
    minimum: -1e3,
    maximum: 1e3
  } }
}, exports.SCHEMA_SYSTEM_TITLE_IMAGES = Xt, exports.SCHEMA_SYSTEM_VEHICLE = Ma, exports.SCHEMA_TRAIT = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }
}, exports.SCRIPT_EVAL = 355, exports.SCRIPT_EVAL_BODY = 655, exports.SCROLL_MAP = 204, exports.SELECT_ITEM = 104, exports.SET_EVENT_LOCATION = 203, exports.SET_MOVEMENT_ROUTE = 205, exports.SET_VEHICLE_LOCATION = 202, exports.SET_WEATHER_EFFECT = 236, exports.SHAKE_SCREEN = 225, exports.SHOP_PROCESSING = 302, exports.SHOP_PROCESSING_BODY = 605, exports.SHOW_ANIMATION = 212, exports.SHOW_BALLOON_ICON = 213, exports.SHOW_BATTLE_ANIMATION = 337, exports.SHOW_CHOICES = 102, exports.SHOW_CHOICES_ITEM = 402, exports.SHOW_MESSAGE = 101, exports.SHOW_MESSAGE_BODY = 401, exports.SHOW_PICTURE = 231, exports.SHOW_SCROLLING_TEXT = 105, exports.SHOW_SCROLLING_TEXT_BODY = 405, exports.SKIP = 109, exports.SPECIAL_EFFECT_ESCAPE = 0, exports.SPECIAL_PARAM_EXR = 9, exports.SPECIAL_PARAM_FDR = 8, exports.SPECIAL_PARAM_GRD = 1, exports.SPECIAL_PARAM_MCR = 4, exports.SPECIAL_PARAM_MDR = 7, exports.SPECIAL_PARAM_PDR = 6, exports.SPECIAL_PARAM_PHA = 3, exports.SPECIAL_PARAM_REC = 2, exports.SPECIAL_PARAM_TCR = 5, exports.SPECIAL_PARAM_TGR = 0, exports.SRC_COLOR = "colors", exports.SRC_DATA_ACTOR = "actor", exports.SRC_DATA_ARMOR = "armor", exports.SRC_DATA_CLASS = "class", exports.SRC_DATA_COMMON_EVNET = "common_event", exports.SRC_DATA_ENEMY = "enemy", exports.SRC_DATA_ITEMS = "item", exports.SRC_DATA_MAP = "map", exports.SRC_DATA_SKILL = "skill", exports.SRC_DATA_STATE = "state", exports.SRC_DATA_TROOP = "troop", exports.SRC_DATA_WEAPON = "weapon", exports.STOP_SE = 251, exports.TINT_PICTURE = 234, exports.TINT_SCREEN = 223, exports.TRAIT_ACTION_PLUS = 61, exports.TRAIT_ATTACK_ELEMENT = 31, exports.TRAIT_ATTACK_SKILL = 35, exports.TRAIT_ATTACK_SPEED = 33, exports.TRAIT_ATTACK_STATE = 32, exports.TRAIT_ATTACK_TIMES = 34, exports.TRAIT_COLLAPSE_TYPE = 63, exports.TRAIT_DEBUFF_RATE = 12, exports.TRAIT_ELEMENT_RATE = 11, exports.TRAIT_EQUIP_ARMOR_TYPE = 52, exports.TRAIT_EQUIP_LOCK = 53, exports.TRAIT_EQUIP_SEAL = 54, exports.TRAIT_EQUIP_WEAPON_TYPE = 51, exports.TRAIT_PARAM = 21, exports.TRAIT_PARTY_ABILITY = 64, exports.TRAIT_SKILL_ADD = 43, exports.TRAIT_SKILL_SEAL = 44, exports.TRAIT_SKILL_TYPE_ADD = 41, exports.TRAIT_SKILL_TYPE_SEAL = 42, exports.TRAIT_SLOT_TYPE = 55, exports.TRAIT_SPARAM = 23, exports.TRAIT_SPECIAL_FLAG = 62, exports.TRAIT_STATE_RATE = 13, exports.TRAIT_STATE_RESIST = 14, exports.TRAIT_XPARAM = 22, exports.TRANSFER_PLAYER = 201, exports.TYPENAME_TRAIT = "Trait", exports.WAIT = 230, exports.applyFormatRule = de, exports.buildReferenceItemSources = (e2, t2, a2, r2, o2, i2) => [...W(a2, r2), ...d(e2, t2), ...ia(o2, i2)], exports.cloneChoices = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), exports.cloneEventCommand = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: ar(e2.parameters)
}), exports.cloneParameters = ar, exports.collapsOptionsToArray = v, exports.compileFormatRule = Z, exports.compileItemEffectDisplayData = (e2, t2, a2) => {
  const r2 = ye(t2);
  return ie(a2 ? [...r2, ...a2] : r2, e2);
}, exports.compileTraitDisplayData = (e2, t2) => ie(Qe(t2), e2), exports.convertCommentArrayToObject = (e2) => ({ comment: e2[0] }), exports.createActorControlChars = (e2) => e2.map((e3) => ({ text: e3.name, controlChar: t("N", e3.id) })), exports.createControlCharFormat = t, exports.createEventCommand = (e2, t2, a2 = 0) => ({
  code: e2,
  indent: a2,
  parameters: t2
}), exports.createNoteEntity = $e, exports.createSystemVariableControlChars = (e2) => e2.variables.map((e3, a2) => ({ text: e3 || "", controlChar: t("V", a2) })).filter((e3) => "" !== e3.text), exports.defineGameDataSources = d, exports.defineSystemItems = ia, exports.defineTraitCollapseType = h, exports.defineTraitExtraParam = k, exports.defineTraitItems = W, exports.defineTraitPartyAbility = H, exports.defineTraitRegularParam = P, exports.defineTraitSpecialFlag = B, exports.defineTraitSpecialParam = D, exports.detectFormatErrors = (e2, t2, a2, r2 = {
  placeHolderMaxLength: 50,
  formatMaxLength: 200
}) => e2.pattern.length >= r2.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{
  message: a2.formatVeryLong,
  reason: e2.pattern.slice(0, r2.formatMaxLength)
}], semanticErrors: [] } : { formatLabel: e2.label, semanticErrors: re(e2, t2, a2), syntaxErrors: ae(e2.pattern, t2, a2, r2.placeHolderMaxLength) }, exports.domainNames = (e2) => Object.entries(e2).map(([, e3]) => e3.title), exports.extraParamName = (e2, t2) => {
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
  const r2 = Z(ce);
  return de(t2, a2, r2, e2.pattern, (e3) => e3.dataId);
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
}, exports.getArmorCategoryEnabled = (e2) => e2.itemCategories[2], exports.getArmorTypes = ra, exports.getControlChars = (e2) => Array.from(e2.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e3) => ({ char: e3[1], id: parseInt(e3[2], 10) })), exports.getElementTypes = Qt, exports.getEnemyValue = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, exports.getEquipCommandEnabled = (e2) => e2.menuCommands[2], exports.getEquipTypes = ea, exports.getFormationCommandEnabled = (e2) => e2.menuCommands[4], exports.getItemCategoryEnabled = (e2) => e2.itemCategories[0], exports.getItemCommandEnabled = (e2) => e2.menuCommands[0], exports.getKeyItemCategoryEnabled = (e2) => e2.itemCategories[3], exports.getNoteValue = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return r2 ? r2[2] : void 0;
}, exports.getParamNames = (e2) => e2.terms.params.map((e3, t2) => ({
  name: e3,
  id: t2
})), exports.getSaveCommandEnabled = (e2) => e2.menuCommands[5], exports.getSkillCommandEnabled = (e2) => e2.menuCommands[1], exports.getSkillTypes = ta, exports.getStatusCommandEnabled = (e2) => e2.menuCommands[3], exports.getSwitches = oa, exports.getVariableNames = Jt, exports.getWeaponCategoryEnabled = (e2) => e2.itemCategories[1], exports.getWeaponTypes = aa, exports.isCloneableCommand = (e2) => e2.parameters.every(rr), exports.isCommandAudio = mr, exports.isCommandChangeActorText = (e2) => ir(e2), exports.isCommandChangeBattleBgm = (e2) => mr(e2) && 132 === e2.code, exports.isCommandChangeDefeatMe = (e2) => mr(e2) && 139 === e2.code, exports.isCommandChangeVictoryMe = (e2) => mr(e2) && 133 === e2.code, exports.isCommandCommentBody = (e2) => lr(e2) && 408 === e2.code, exports.isCommandCommentHeader = (e2) => lr(e2) && 108 === e2.code, exports.isCommandCommonEvent = (e2) => cr(e2), exports.isCommandInputNumber = (e2) => xr(e2), exports.isCommandNonParam = (e2) => pr(e2), exports.isCommandPlayBgm = (e2) => mr(e2) && 241 === e2.code, exports.isCommandPlayBgs = (e2) => mr(e2) && 245 === e2.code, exports.isCommandPlayMe = (e2) => mr(e2) && 249 === e2.code, exports.isCommandPlaySe = (e2) => mr(e2) && 250 === e2.code, exports.isCommandScriptBody = (e2) => lr(e2) && 655 === e2.code, exports.isCommandScriptHeader = (e2) => lr(e2) && 355 === e2.code, exports.isCommandScrollTextHead = (e2) => sr(e2), exports.isCommandShowChoiceItem = (e2) => yr(e2), exports.isCommandShowChoices = (e2) => ur(e2), exports.isCommandShowMessage = (e2) => gr(e2), exports.isCommandShowMessageBody = (e2) => lr(e2) && 401 === e2.code, exports.isCommandShowScrollingTextBody = (e2) => lr(e2) && 405 === e2.code, exports.isCommandTextBody = lr, exports.isDataActor = (e2) => je(e2), exports.isDataArmor = (e2) => Ye(e2), exports.isDataClass = (e2) => Xe(e2), exports.isDataEnemy = (e2) => ze(e2), exports.isDataItem = (e2) => qe(e2), exports.isDataMap = (e2) => p(e2), exports.isDataMapInfo = (e2) => m(e2), exports.isDataSkill = (e2) => Ve(e2), exports.isDataState = (e2) => Ke(e2), exports.isDataSystem = (e2) => Fa(e2), exports.isDataWeapon = (e2) => We(e2), exports.isValidNumber = (e2) => "number" == typeof e2 && !Number.isNaN(e2), exports.labelsRegistry = () => ({ rpg: { damage: _, data: I, traits: Y, itemEffect: Pe }, global: Ot }), exports.makeActorData = (e2 = {}) => ({
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
}), exports.makeAudioCommand = (e2, t2) => ja(e2, Ft({ name: t2 })), exports.makeAudioFileParams = Ft, exports.makeBooleanOptions = jt, exports.makeClassData = (e2 = {}) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  traits: [],
  note: e2.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e2.learnings ?? [],
  expParams: e2.expParams ?? []
}), exports.makeCommandAudioAny = ja, exports.makeCommandChangeActorName = (e2, t2 = 0) => ({ code: 320, parameters: [e2.actorId, e2.name], indent: t2 }), exports.makeCommandChangeActorNickName = (e2, t2 = 0) => ({ code: 324, parameters: [e2.actorId, e2.nickname], indent: t2 }), exports.makeCommandChangeActorProfile = (e2, t2 = 0) => ({
  code: 325,
  parameters: [e2.actorId, e2.profile],
  indent: t2
}), exports.makeCommandChangeBattleBGM = (e2, t2 = 0) => ja(132, e2, t2), exports.makeCommandChangeDefeatME = (e2, t2 = 0) => ja(139, e2, t2), exports.makeCommandChangeVictoryME = (e2, t2 = 0) => ja(133, e2, t2), exports.makeCommandCommentBody = Xa, exports.makeCommandCommentHeader = Ka, exports.makeCommandCommonEvent = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: Ya(e2 ?? {})
}), exports.makeCommandControlSwitches = (e2, t2 = 0) => ({ code: 121, indent: t2, parameters: Wa(e2) }), exports.makeCommandInputNumber = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: $a(e2 ?? {})
}), exports.makeCommandPlayBGM = (e2, t2 = 0) => ja(241, e2, t2), exports.makeCommandPlayBGS = (e2, t2 = 0) => ja(245, e2, t2), exports.makeCommandPlayME = (e2, t2 = 0) => ja(249, e2, t2), exports.makeCommandPlaySE = (e2, t2 = 0) => ja(250, e2, t2), exports.makeCommandScriptArray = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Qa(e3, t2) : er(e3, t2)), exports.makeCommandScriptBody = er, exports.makeCommandScriptHeader = Qa, exports.makeCommandScrollingTextBody = (e2 = "", t2 = 0) => ({ code: 405, indent: t2 ?? 0, parameters: Ja(e2) }), exports.makeCommandScrollingTextHeader = (e2 = {}, t2 = 0) => ({
  code: 105,
  indent: t2,
  parameters: Za(e2)
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
}), exports.makeCommentArray = za, exports.makeCommentCommandArray = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Ka(e3, t2) : Xa(e3, t2)), exports.makeCommonEventData = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  trigger: e2.trigger ?? 0,
  list: e2.list ?? [],
  switchId: e2.switchId ?? 0
}), exports.makeDamage = b, exports.makeDataNames = xa, exports.makeDropItem = N, exports.makeEditorSetting = ha, exports.makeEnemyAction = (e2 = {}) => ({
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
    dropItems: ((_a2 = e2.dropItems) == null ? void 0 : _a2.map(() => N())) ?? [],
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
}), exports.makeItemCategories = Ut, exports.makeItemCategoriesFromArray = (e2) => ({ item: e2[0], weapon: e2[1], armor: e2[2], keyItem: e2[3] }), exports.makeItemData = (e2 = {}) => ({
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
  damage: b(e2.damage ?? {}),
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
}, exports.makeMenuCommandsEnabled = qt, exports.makeMenuCommandsEnabledFromArray = (e2) => ({ item: e2[0], skill: e2[1], equip: e2[2], status: e2[3], formation: e2[4], save: e2[5] }), exports.makeParamNamesArray = fa, exports.makeRegex = Ze, exports.makeSkillData = (e2 = {}) => ({
  stypeId: e2.stypeId ?? 0,
  requiredWtypeId1: e2.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e2.requiredWtypeId2 ?? 0,
  animationId: e2.animationId ?? 0,
  damage: b(e2.damage ?? {}),
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
}), exports.makeSoundsArray = Ht, exports.makeSoundsObject = (e2) => ({
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
}), exports.makeSystemAdvanced = Pt, exports.makeSystemData = (e2) => {
  var _a2, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r2, _s, _t2, _u, _v;
  const t2 = Ua(e2.size);
  return {
    ...jt(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: Ht(e2.sounds),
    editor: ha(e2.editing),
    advanced: Pt(e2.advanced),
    title1Name: ((_c = e2.images) == null ? void 0 : _c.title1Name) ?? "",
    title2Name: ((_d = e2.images) == null ? void 0 : _d.title2Name) ?? "",
    ...xa(e2.dataNames ?? {}),
    magicSkills: Ga([]),
    airship: Na((_e2 = e2.vehicles) == null ? void 0 : _e2.airship),
    boat: Na((_f = e2.vehicles) == null ? void 0 : _f.boat),
    ship: Na((_g = e2.vehicles) == null ? void 0 : _g.ship),
    defeatMe: Ft((_h = e2.me) == null ? void 0 : _h.defeatMe),
    gameoverMe: Ft((_i = e2.me) == null ? void 0 : _i.gameoverMe),
    titleBgm: Ft((_j = e2.bgm) == null ? void 0 : _j.titleBgm),
    tileSize: t2.tileSize,
    faceSize: t2.faceSize,
    iconSize: t2.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((_k = e2.battleTest) == null ? void 0 : _k.battleback1Name) ?? "",
    battleback2Name: ((_l = e2.battleTest) == null ? void 0 : _l.battleback2Name) ?? "",
    testTroopId: ((_m = e2.battleTest) == null ? void 0 : _m.testTroopId) ?? 0,
    testBattlers: qa((_n = e2.battleTest) == null ? void 0 : _n.testBattlers, Va),
    battleBgm: Ft((_o = e2.bgm) == null ? void 0 : _o.battleBgm),
    victoryMe: Ft((_p = e2.me) == null ? void 0 : _p.victoryMe),
    editMapId: ((_q = e2.editorTemporary) == null ? void 0 : _q.editMapId) ?? 0,
    battlerName: ((_r2 = e2.editorTemporary) == null ? void 0 : _r2.battlerName) ?? "",
    locale: "",
    startMapId: ((_s = e2.gameInit) == null ? void 0 : _s.startMapId) ?? 0,
    startX: ((_t2 = e2.gameInit) == null ? void 0 : _t2.startX) ?? 0,
    startY: ((_u = e2.gameInit) == null ? void 0 : _u.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Ba(e2.terms ?? {}),
    itemCategories: Ut(e2.itemCategories),
    partyMembersArray: Ga((_v = e2.gameInit) == null ? void 0 : _v.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: qt(e2.menuComamnds)
  };
}, exports.makeTermsBasic = Ea, exports.makeTermsBasicFromArray = (e2) => ({
  level: e2[0],
  levelA: e2[1],
  hp: e2[2],
  hpA: e2[3],
  mp: e2[4],
  mpA: e2[5],
  tp: e2[6],
  tpA: e2[7],
  experience: e2[8],
  exp: e2[9]
}), exports.makeTermsCommand = Aa, exports.makeTermsCommandFromArray = (e2) => ({
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
}), exports.makeTermsMessages = _a, exports.makeTitleCommandWindow = (e2) => ({ background: e2.background ?? 0, offsetX: e2.offsetX ?? 0, offsetY: e2.offsetY ?? 0 }), exports.makeTroopData = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  members: e2.members ?? [],
  pages: e2.pages ?? []
}), exports.makeTroopEventConditions = (e2 = {}) => ({
  actorHp: e2.actorHp ?? 0,
  actorId: e2.actorId ?? 0,
  enemyValid: e2.enemyValid ?? 0,
  switchValid: e2.switchValid ?? 0
}), exports.makeTroopMember = (e2 = {}) => ({ enemyId: e2.enemyId ?? 0, x: e2.x ?? 0, y: e2.y ?? 0, hidden: e2.hidden ?? false }), exports.makeVehicleData = Na, exports.makeWeaponData = (e2 = {}) => ({
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
  damage: b(e2.damage ?? {}),
  wtypeId: e2.wtypeId ?? 0
}), exports.mergeItemsSource = ie, exports.normalizeDataActor = (e2) => ({
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
}), exports.partyAbilityToArray = w, exports.pluginSourceToJSON = (e2) => io(e2), exports.readNote = (e2) => Je(e2, (e3, t2) => [e3, t2]), exports.readNoteObject = (e2, t2) => Je(e2.note, (a2, r2) => t2(a2, r2, e2)), exports.regularParamName = (e2, t2) => {
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
    return $e(a2, o2);
  });
}, exports.resolveItemEffectLabels = ye, exports.resolveTraitLabels = Qe, exports.setNoteValue = (e2, t2, a2) => {
  const r2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(r2, (e3, r3) => r3 === t2 ? $e(r3, a2) : e3);
}, exports.specialFlagToArray = G, exports.specialParamName = (e2, t2) => {
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
}, exports.specialParamsToArray = F, exports.structToJSONSchema = (e2) => ((e3) => {
  const t2 = Object.entries(e3).reduce((e4, [t3, a2]) => {
    const r2 = br(a2);
    return { ...e4, [t3]: r2 };
  }, {});
  return { type: "object", properties: t2, required: Object.keys(t2), additionalProperties: false };
})(e2), exports.toArrayCommonEvent = Ya, exports.toArrayControlSwitches = Wa, exports.toArrayInputNumber = $a, exports.toArrayOperandActorStatus = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], exports.toArrayOperandConstant = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], exports.toArrayOperandEnemyStatus = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, tr[t2.param]], exports.toArrayOperandItemData = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], exports.toArrayOperandRandom = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], exports.toArrayOperandScript = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], exports.toArrayOperandVariable = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], exports.toArrayScrollingTextBody = Ja, exports.toArrayScrollingTextHeader = Za, exports.toArraySetupChoice = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], exports.toArraySetupChoiceItem = (e2) => [e2.index ?? 0, e2.name ?? ""], exports.toArrayShowMessageHeader = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName];
//# sourceMappingURL=rpgTypes.cjs.js.map
