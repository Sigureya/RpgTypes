import e from "ajv";
const t = (e2, t2) => `\\${e2}[${t2}]`, a = (e2, a2) => a2.map((a3, i2) => ({ text: a3, controlChar: t(e2, i2) })), i = (e2) => Array.from(e2.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e3) => ({
  char: e3[1],
  id: parseInt(e3[2], 10)
})), r = (e2) => e2.map((e3) => ({ text: e3.name, controlChar: t("N", e3.id) })), n = (e2) => e2.variables.map((e3, a2) => ({
  text: e3 || "",
  controlChar: t("V", a2)
})).filter((e3) => "" !== e3.text), m = (e2 = {}) => ({ id: e2.id ?? 0, name: e2.name ?? "", trigger: e2.trigger ?? 0, list: e2.list ?? [], switchId: e2.switchId ?? 0 }), o = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  members: e2.members ?? [],
  pages: e2.pages ?? []
}), p = (e2 = {}) => ({ enemyId: e2.enemyId ?? 0, x: e2.x ?? 0, y: e2.y ?? 0, hidden: e2.hidden ?? false }), s = (e2 = {}) => ({
  actorHp: e2.actorHp ?? 0,
  actorId: e2.actorId ?? 0,
  enemyValid: e2.enemyValid ?? 0,
  switchValid: e2.switchValid ?? 0
}), d = (e2 = {}) => ({
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
}), l = 0, c = 101, y = 401, u = 102, g = 402, b = 103, I = 104, h = 105, f = 405, v = 108, k = 408, x = 109, N = 111, T = 411, S = 112, w = 113, q = 115, R = 117, P = 118, M = 119, D = 121, A = 122, j = 123, z = 124, E = 125, H = 126, F = 127, C = 128, B = 129, L = 132, V = 133, W = 134, G = 135, X = 136, Y = 137, K = 138, $ = 139, U = 140, O = 201, _ = 202, Z = 203, J = 204, Q = 205, ee = 206, te = 211, ae = 212, ie = 213, re = 214, ne = 216, me = 217, oe = 221, pe = 222, se = 223, de = 224, le = 225, ce = 230, ye = 231, ue = 232, ge = 233, be = 234, Ie = 235, he = 236, fe = 241, ve = 242, ke = 243, xe = 244, Ne = 245, Te = 246, Se = 249, we = 250, qe = 251, Re = 261, Pe = 282, Me = 283, De = 284, Ae = 285, je = 301, ze = 302, Ee = 605, He = 303, Fe = 311, Ce = 312, Be = 313, Le = 314, Ve = 315, We = 320, Ge = 321, Xe = 322, Ye = 323, Ke = 324, $e = 325, Ue = 331, Oe = 332, _e = 333, Ze = 334, Je = 335, Qe = 336, et = 337, tt = 339, at = 340, it = 351, rt = 342, nt = 352, mt = 353, ot = 354, pt = 355, st = 655, dt = 356, lt = 357, ct = (e2, t2, a2 = 0) => ({
  code: e2,
  indent: a2,
  parameters: t2
}), yt = 0, ut = 1, gt = 2, bt = 3, It = 4, ht = 5, ft = 6, vt = 7, kt = 8, xt = 9, Nt = 10, Tt = 11, St = 12, wt = 13, qt = 14, Rt = 15, Pt = 16, Mt = 17, Dt = 18, At = 19, jt = 20, zt = 21, Et = 22, Ht = 23, Ft = 24, Ct = 25, Bt = 26, Lt = 27, Vt = 28, Wt = 29, Gt = 30, Xt = 31, Yt = 32, Kt = 33, $t = 34, Ut = 35, Ot = 36, _t = 37, Zt = 38, Jt = 39, Qt = 40, ea = 41, ta = 42, aa = 43, ia = 44, ra = 45, na = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), ma = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), oa = () => ({ conditions: d(), list: [], directionFix: false, image: {
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}, moveFrequency: 5, moveRoute: { list: [], repeat: false, skippable: false, wait: false } }), pa = (e2 = {}) => ({
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
}), sa = (e2 = { id: 0 }) => {
  return { name: e2.name ?? (t2 = e2.id, t2.toString().padStart(3, "0")), id: e2.id, expanded: e2.expanded ?? false, order: e2.order ?? 0, parentId: e2.parentId ?? 0, scrollX: e2.scrollX ?? 0, scrollY: e2.scrollY ?? 0 };
  var t2;
}, da = {
  type: "object",
  required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: {
    type: "integer"
  }, parentId: { type: "integer" }, scrollX: { type: "integer" }, scrollY: { type: "integer" } }
}, la = {
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
}, ca = {
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
      pages: { type: "array", items: la }
    } } }
  }
}, ya = new e(), ua = ya.compile(da), ga = ya.compile(ca), ba = (e2) => ua(e2), Ia = (e2) => ga(e2), ha = (e2, t2) => [fa(e2.skills, t2), va(e2.actors, t2), ka(e2.states, t2), xa(e2.armors, t2), Na(e2.classes, t2), Ta(e2.enemies, t2), Sa(e2.items, t2), wa(e2.weapons, t2), qa(e2.commonEvents, t2)], fa = (e2, t2) => ({
  label: t2.skill.domainName,
  items: e2,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), va = (e2, t2) => ({
  items: e2,
  label: t2.actor.domainName,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), ka = (e2, t2) => ({ items: e2, label: t2.state.domainName, source: { author: "rmmz", module: "data", kind: "state" } }), xa = (e2, t2) => ({ items: e2, label: t2.armor.domainName, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), Na = (e2, t2) => ({ items: e2, label: t2.class.domainName, source: { author: "rmmz", module: "data", kind: "class" } }), Ta = (e2, t2) => ({ items: e2, label: t2.enemy.domainName, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), Sa = (e2, t2) => ({ items: e2, label: t2.item.domainName, source: { author: "rmmz", module: "data", kind: "item" } }), wa = (e2, t2) => ({
  items: e2,
  label: t2.weapon.domainName,
  source: { author: "rmmz", module: "data", kind: "weapon" }
}), qa = (e2, t2) => ({ items: e2, label: t2.commonEvent.domainName, source: {
  author: "rmmz",
  module: "data",
  kind: "common_event"
} }), Ra = {
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
  armor: {
    domainName: "防具",
    options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" }
  },
  enemy: {
    domainName: "敵キャラ",
    options: { dropItems: "ドロップアイテム", battlerHue: "バトラーヒュー", battlerName: "バトラー名", gold: "ゴールド" }
  },
  item: { domainName: "アイテム", options: { consumable: "消耗品" } },
  skill: { domainName: "スキル", options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  } },
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
  usableItem: { domainName: "", options: { scope: "範囲", speed: "速度補正", successRate: "成功率" } },
  commonEvent: { domainName: "コモンイベント", options: {
    trigger: "トリガー",
    switchId: "スイッチID",
    name: "名前",
    id: "ID",
    list: "コマンドリスト"
  } }
}, Pa = { domainName: "ダメージ", options: {} }, Ma = (e2 = {}) => ({
  type: e2.type ?? 0,
  elementId: e2.elementId ?? 0,
  formula: e2.formula ?? "",
  variance: e2.variance ?? 0,
  critical: e2.critical ?? false
}), Da = { type: "object", required: ["type", "elementId", "formula", "variance", "critical"], properties: {
  type: { type: "integer", minimum: 0 },
  elementId: { type: "integer", minimum: 0 },
  formula: { type: "string" },
  variance: { type: "integer" },
  critical: { type: "boolean" }
} }, Aa = (e2 = {}) => ({
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
}), ja = (e2) => ({
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
}), za = {
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
}, Ea = (e2 = {}) => ({
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
}), Ha = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "atypeId"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: {
      type: "string"
    },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    atypeId: { type: "integer", minimum: 0 },
    params: {
      type: "array",
      items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }],
      minItems: 8,
      maxItems: 8
    },
    traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }, required: ["code", "dataId", "value"] } }
  }
}, Fa = {
  type: "object",
  required: ["name", "id", "note", "expParams", "params", "learnings", "traits"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    note: { type: "string" },
    expParams: { type: "array", items: { type: "integer" } },
    params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, {
      type: "integer"
    }, { type: "integer" }], minItems: 8, maxItems: 8 },
    learnings: { type: "array", items: { type: "object", properties: { level: { type: "integer" }, skillId: { type: "integer" }, note: {
      type: "string"
    } }, required: ["level", "skillId"], additionalProperties: false } },
    traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: {
      type: "integer"
    } }, required: ["code", "dataId", "value"], additionalProperties: false } }
  },
  additionalProperties: false
}, Ca = (e2 = {}) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  traits: [],
  note: e2.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e2.learnings ?? [],
  expParams: e2.expParams ?? []
}), Ba = {
  type: "object",
  required: ["name", "id", "battlerName", "battlerHue", "exp", "gold", "note", "params", "dropItems", "traits", "actions"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    battlerHue: { type: "integer", minimum: 0 },
    battlerName: { type: "string" },
    exp: { type: "integer", minimum: 0 },
    gold: { type: "integer", minimum: 0 },
    note: { type: "string" },
    params: { type: "array", items: [{
      type: "integer"
    }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 },
    actions: {
      type: "array",
      items: { type: "object", required: ["conditionParam1", "conditionParam2", "conditionType", "skillId", "rating"], properties: { conditionParam1: { type: "integer" }, conditionParam2: {
        type: "integer"
      }, conditionType: { type: "integer" }, skillId: { type: "integer" }, rating: { type: "integer" } } }
    },
    traits: { type: "array", items: { type: "object", properties: {
      code: { type: "integer" },
      dataId: { type: "integer" },
      value: { type: "integer" }
    }, required: ["code", "dataId", "value"] } },
    dropItems: { type: "array", items: { type: "object", properties: { kind: { type: "integer" }, dataId: {
      type: "integer"
    }, denominator: { type: "integer", minimum: 0 }, rate: { type: "number" } }, required: ["kind", "dataId", "denominator"] } }
  }
}, La = (e2 = {}) => ({
  dataId: e2.dataId ?? 0,
  denominator: e2.denominator ?? 0,
  kind: e2.kind ?? 0
}), Va = (e2 = {}) => ({
  conditionParam1: e2.conditionParam1 ?? 0,
  conditionParam2: e2.conditionParam2 ?? 0,
  conditionType: e2.conditionType ?? 0,
  rating: e2.rating ?? 0,
  skillId: e2.skillId ?? 0
}), Wa = (e2 = {}) => {
  var _a2;
  return {
    name: e2.name ?? "",
    id: e2.id ?? 0,
    battlerName: e2.battlerName ?? "",
    battlerHue: e2.battlerHue ?? 0,
    dropItems: ((_a2 = e2.dropItems) == null ? void 0 : _a2.map(() => La())) ?? [],
    exp: e2.exp ?? 0,
    gold: e2.gold ?? 0,
    traits: [],
    note: e2.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, Ga = {
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
}, Xa = (e2 = {}) => ({
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
}), Ya = 11, Ka = 12, $a = 13, Ua = 14, Oa = 21, _a = 22, Za = 23, Ja = 31, Qa = 32, ei = 33, ti = 34, ai = 35, ii = 41, ri = 42, ni = 43, mi = 44, oi = 51, pi = 52, si = 53, di = 54, li = 55, ci = 61, yi = 62, ui = 63, gi = 64, bi = 0, Ii = 1, hi = 2, fi = 3, vi = (e2, t2) => ({
  items: ki(e2.options, t2),
  label: e2.domainName,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), ki = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, {
  id: 2,
  name: e2.instantCollaps
}, { id: 3, name: e2.noneCollaps }], xi = 0, Ni = 1, Ti = 2, Si = 3, wi = 4, qi = 5, Ri = 6, Pi = 7, Mi = 8, Di = 9, Ai = (e2) => ({ items: ji(e2.options), label: e2.domainName, source: {
  author: "rmmz",
  module: "trait",
  kind: "xparams"
} }), ji = (e2) => [{ id: 0, name: e2.hitRate }, { id: 1, name: e2.evasionRate }, { id: 2, name: e2.criticalRate }, { id: 3, name: e2.criticalEvasionRate }, {
  id: 4,
  name: e2.magicEvasionRate
}, { id: 5, name: e2.magicReflectionRate }, { id: 6, name: e2.counterAttackRate }, { id: 7, name: e2.hpRegenerationRate }, { id: 8, name: e2.mpRegenerationRate }, { id: 9, name: e2.tpRegenerationRate }], zi = (e2, t2) => {
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
}, Ei = 0, Hi = 1, Fi = 2, Ci = 3, Bi = 4, Li = 5, Vi = 6, Wi = 7, Gi = (e2) => ({ items: Xi(e2.options), label: e2.domainName, source: { author: "rmmz", module: "trait", kind: "params" } }), Xi = (e2) => [{
  id: 0,
  name: e2.maxHp
}, { id: 1, name: e2.maxMp }, { id: 2, name: e2.atk }, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, { id: 5, name: e2.mdef }, { id: 6, name: e2.agi }, { id: 7, name: e2.luk }], Yi = (e2, t2) => {
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
}, Ki = 0, $i = 1, Ui = 2, Oi = 3, _i = 4, Zi = 5, Ji = 6, Qi = 7, er = 8, tr = 9, ar = (e2) => ({
  items: ir(e2.options),
  label: e2.domainName,
  source: { author: "rmmz", module: "trait", kind: "sparams" }
}), ir = (e2) => [{ id: 0, name: e2.targetRate }, { id: 1, name: e2.guardEffectRate }, { id: 2, name: e2.recoveryEffectRate }, { id: 3, name: e2.pharmacology }, { id: 4, name: e2.mpCostRate }, { id: 5, name: e2.tpChargeRate }, {
  id: 6,
  name: e2.physicalDamageRate
}, { id: 7, name: e2.magicDamageRate }, { id: 8, name: e2.floorDamageRate }, { id: 9, name: e2.experienceRate }], rr = (e2, t2) => {
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
}, nr = 0, mr = 1, or = 2, pr = 3, sr = 4, dr = 5, lr = (e2) => ({ items: cr(e2.options), label: e2.domainName, source: { author: "rmmz", module: "trait", kind: "partyAbility" } }), cr = (e2) => [{ id: 0, name: e2.encounterHalf }, {
  id: 1,
  name: e2.encounterNone
}, { id: 2, name: e2.cancelSurprise }, { id: 3, name: e2.raisePreemptive }, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], yr = 0, ur = 1, gr = 2, br = 3, Ir = (e2) => ({
  items: hr(e2.options),
  label: e2.domainName,
  source: { author: "rmmz", module: "trait", kind: "sflag" }
}), hr = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
  id: 3,
  name: e2.preventEscape
}], fr = "{name}", vr = "{name} * {value}%", kr = "{name} + {value}%", xr = "{value}", Nr = {
  domainName: "特徴",
  options: { regularParam: { domainName: "基本能力値", format: vr, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } }, extraParam: { domainName: "追加能力値", format: kr, options: {
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
  } }, specialParam: { domainName: "特殊能力値", format: vr, options: {
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
    format: fr,
    options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
  }, collaps: { domainName: "消滅エフェクト", format: fr, options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  } }, partyAbility: { domainName: "パーティ能力", format: fr, options: {
    cancelSurprise: "不意打ち無効",
    dropItemDouble: "アイテムドロップ2倍",
    encounterHalf: "エンカウント半減",
    encounterNone: "エンカウントなし",
    goldDouble: "ゴールド2倍",
    raisePreemptive: "先制攻撃率アップ"
  } }, elementRate: { domainName: "属性有効度", format: vr }, debuffRate: { domainName: "弱体有効度", format: vr }, stateRate: {
    domainName: "ステート有効度",
    format: vr
  }, stateResist: { domainName: "ステート無効", format: fr }, attackElement: { domainName: "攻撃属性", format: fr }, attackState: { domainName: "攻撃ステート", format: kr }, attackSpeed: {
    domainName: "攻撃速度補正",
    format: xr
  }, attackTimes: { domainName: "攻撃追加回数", format: xr }, actionPlus: { domainName: "行動追加", format: vr }, attackSkill: { domainName: "攻撃スキル", format: fr }, equipWeaponType: {
    domainName: "装備武器タイプ",
    format: fr
  }, equipArmorType: { domainName: "装備防具タイプ", format: fr }, equipLock: { domainName: "装備固定", format: fr }, equipSeal: { domainName: "装備封印", format: fr }, slotType: {
    domainName: "スロットタイプ",
    format: fr
  }, skillAdd: { domainName: "スキル追加", format: fr }, skillSeal: { domainName: "スキルタイプ封印", format: fr }, skillTypeAdd: { domainName: "スキルタイプ追加", format: fr }, skillTypeSeal: {
    domainName: "スキルタイプ封印",
    format: fr
  } }
}, Tr = (e2, t2) => [Gi(e2.regularParam), Ai(e2.extraParam), ar(e2.specialParam), vi(e2.collaps, t2), Ir(e2.specialFlag), lr(e2.partyAbility)], Sr = (e2) => [wr(e2.elementRate), qr(e2.debuffRate), Rr(e2.stateRate), Pr(e2.stateResist), Mr(e2.regularParam), Dr(e2.extraParam), Ar(e2.specialParam), jr(e2.attackElement), zr(e2.attackState), Er(e2.attackSpeed), Hr(e2.attackTimes), Fr(e2.attackSkill), Cr(e2.skillTypeAdd), Br(e2.skillTypeSeal), Lr(e2.skillAdd), Vr(e2.skillSeal), Wr(e2.equipWeaponType), Gr(e2.equipArmorType), Xr(e2.equipLock), Yr(e2.equipSeal), Kr(e2.slotType), $r(e2.actionPlus), Ur(e2.specialFlag), Or(e2.collaps), _r(e2.partyAbility)], wr = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 11,
  dataSource: Qr()
}), qr = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 12,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), Rr = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 13, dataSource: Zr() }), Pr = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 14, dataSource: Zr() }), Mr = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), Dr = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 22, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "xparams"
} }), Ar = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 23, dataSource: { author: "rmmz", module: "trait", kind: "sparams" } }), jr = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 31,
  dataSource: Qr()
}), zr = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 32, dataSource: Zr() }), Er = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 33
}), Hr = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 34 }), Fr = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 35, dataSource: Jr() }), Cr = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 41,
  dataSource: en()
}), Br = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 42, dataSource: en() }), Lr = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 43, dataSource: Jr() }), Vr = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 44,
  dataSource: Jr()
}), Wr = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 51, dataSource: tn() }), Gr = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 52,
  dataSource: an()
}), Xr = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 53, dataSource: rn() }), Yr = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 54, dataSource: rn() }), Kr = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 55,
  dataSource: rn()
}), $r = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 61 }), Ur = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 62,
  dataSource: { author: "rmmz", module: "trait", kind: "sflag" }
}), Or = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 63, dataSource: { author: "rmmz", module: "trait", kind: "collaps" } }), _r = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 64,
  dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), Zr = () => ({ author: "rmmz", module: "data", kind: "state" }), Jr = () => ({
  author: "rmmz",
  module: "data",
  kind: "skill"
}), Qr = () => ({ author: "rmmz", module: "system", kind: "elements" }), en = () => ({ author: "rmmz", module: "system", kind: "skillTypes" }), tn = () => ({
  author: "rmmz",
  module: "system",
  kind: "weaponTypes"
}), an = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), rn = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), nn = "Trait", mn = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }
}, on = "rmmz", pn = "colors", sn = (e2) => e2.map((e3) => ({ dataKey: e3, placeHolder: `{${e3}}` })), dn = (e2) => ({ dataKey: e2.dataIdKey, placeHolder: `{${e2.dataIdKey}}`, sourceId: {
  author: e2.sourceId.author,
  kind: e2.sourceId.kind,
  module: e2.sourceId.module
} }), ln = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, cn = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : [...t2];
}, yn = (e2, t2 = []) => {
  return { itemMappers: [...cn(e2), ...t2].map(un), fallbackFormat: { text: gn(e2), label: bn(e2) }, properties: (a2 = e2.placeHolder ?? {}, {
    numbers: a2.numbers ? sn(a2.numbers) : [],
    strings: a2.strings ? sn(a2.strings) : []
  }), arrayIndex: e2.arrayIndex ? e2.arrayIndex.map(dn) : [] };
  var a2;
}, un = (e2) => ({
  placeHolder: `{${e2.placeHolder}}`,
  kindKey: e2.kindKey,
  dataIdKey: e2.dataIdKey
}), gn = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const t2 = ((e3) => {
    var _a2;
    const t3 = new Set(((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? []);
    return e3.itemMapper && t3.add(e3.itemMapper.kindKey), e3.itemMappers && e3.itemMappers.forEach((e4) => {
      t3.add(e4.kindKey);
    }), t3;
  })(e2);
  return 0 === t2.size ? "value not found" : Array.from(t2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, bn = (e2) => {
  var _a2;
  return void 0 !== ((_a2 = e2.fallbackFormat) == null ? void 0 : _a2.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, In = (e2, t2, a2) => {
  const i2 = t2[a2.dataKey];
  return null == i2 ? e2 : e2.replaceAll(a2.placeHolder, String(i2));
}, hn = (e2, t2, a2, i2 = { placeHolderMaxLength: 50, formatMaxLength: 200 }) => e2.pattern.length >= i2.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{
  message: a2.formatVeryLong,
  reason: e2.pattern.slice(0, i2.formatMaxLength)
}], semanticErrors: [] } : {
  formatLabel: e2.label,
  semanticErrors: vn(e2, t2, a2),
  syntaxErrors: fn(e2.pattern, t2, a2, i2.placeHolderMaxLength)
}, fn = (e2, t2, a2, i2) => {
  const r2 = Array.from(e2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), n2 = ((e3) => {
    var _a2;
    const t3 = new Set(((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? []);
    return e3.itemMapper && t3.add(e3.itemMapper.placeHolder), e3.itemMappers && e3.itemMappers.forEach((e4) => {
      t3.add(e4.placeHolder);
    }), t3;
  })(t2);
  return r2.reduce((e3, t3) => {
    const r3 = t3[1];
    return 0 === r3.length ? e3 : r3.length > i2 ? (e3.push({
      message: a2.longPlaceHolder,
      reason: r3.slice(0, i2)
    }), e3) : (n2.has(r3) || e3.push({ message: a2.extraPlaceHolder, reason: r3 }), e3);
  }, []);
}, vn = (e2, t2, a2) => cn(t2).reduce((t3, i2) => {
  const r2 = kn(e2, i2, a2);
  return r2 && t3.push(r2), t3;
}, []), kn = (e2, t2, a2) => {
  const i2 = e2.pattern.includes(t2.placeHolder), r2 = !!e2.dataSource;
  return !i2 && r2 ? { message: a2.missingName, reason: t2.placeHolder } : i2 && !r2 ? {
    message: a2.missingSourceId,
    reason: t2.placeHolder
  } : void 0;
}, xn = (e2, t2) => {
  const a2 = Sn(t2);
  return e2.reduce((e3, t3) => {
    const i2 = Nn(t3, a2);
    return e3.set(t3.kindId, i2), e3;
  }, /* @__PURE__ */ new Map());
}, Nn = (e2, t2) => {
  const a2 = Tn(e2.dataSource, t2);
  return {
    patternCompiled: e2.pattern,
    label: e2.label,
    data: a2 ? a2.items : void 0
  };
}, Tn = (e2, t2) => {
  if (e2) return t2.get(ln(e2));
}, Sn = (e2) => e2.reduce((e3, t2) => {
  const a2 = {
    items: wn(t2.items),
    source: t2.source,
    label: t2.label
  };
  return e3.set(ln(t2.source), a2), e3;
}, /* @__PURE__ */ new Map()), wn = (e2) => e2.map((e3) => ({ id: e3.id, name: e3.name })), qn = (e2, t2, a2, i2, r2) => {
  const n2 = ((e3, t3, a3) => {
    const i3 = a3.properties.numbers.reduce((e4, a4) => In(e4, t3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => In(e4, t3, a4), i3);
  })(i2, e2, a2);
  return t2 ? Rn(n2, e2, a2, t2, r2) : n2;
}, Rn = (e2, t2, a2, i2, r2) => {
  const n2 = ((e3, t3) => {
    const a3 = ((e4, t4) => {
      const a4 = t4[e4];
      return a4 && a4.id === e4 ? a4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return a3 ? a3.name : `?data[${t3}]`;
  })(i2, r2(t2));
  return a2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, n2), e2);
}, Pn = {
  itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" },
  placeHolder: { numbers: ["value"] }
}, Mn = (e2, t2, a2) => {
  const i2 = yn(Pn);
  return qn(t2, a2, i2, e2.pattern, (e3) => e3.dataId);
}, Dn = (e2 = {}) => ({
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
  damage: Ma(e2.damage ?? {}),
  wtypeId: e2.wtypeId ?? 0
}), An = { type: "object", required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"], properties: {
  name: { type: "string" },
  id: { type: "integer", minimum: 0 },
  description: { type: "string" },
  iconIndex: { type: "integer", minimum: 0 },
  price: { type: "integer", minimum: 0 },
  note: { type: "string" },
  etypeId: {
    type: "integer",
    minimum: 0
  },
  wtypeId: { type: "integer", minimum: 0 },
  animationId: { type: "integer", minimum: 0 },
  params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 },
  damage: {
    type: "object",
    properties: { type: { type: "integer", minimum: 0 }, elementId: {
      type: "integer",
      minimum: 0
    }, formula: { type: "string" }, variance: { type: "integer", minimum: 0, maximum: 100 }, critical: { type: "boolean", default: false } },
    required: ["type", "elementId", "formula", "variance", "critical"]
  },
  traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: {
    type: "integer"
  } }, required: ["code", "dataId", "value"] } }
} }, jn = {
  domainName: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, zn = 0, En = 1, Hn = 2, Fn = 11, Cn = 12, Bn = 13, Ln = 21, Vn = 22, Wn = 31, Gn = 32, Xn = 33, Yn = 34, Kn = 41, $n = 42, Un = 43, On = 44, _n = (e2) => [Qn(e2), em(e2), tm(e2), am(e2), im(e2), rm(e2), nm(e2), mm(e2), om(e2), Jn(e2), pm(e2), sm(e2), dm(e2)], Zn = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), Jn = (e2) => Zn(41, e2.special), Qn = (e2) => Zn(11, e2.recoverHp), em = (e2) => Zn(12, e2.recoverMp), tm = (e2) => Zn(13, e2.gainTp), am = (e2) => Zn(21, e2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), im = (e2) => Zn(22, e2.removeState, { author: "rmmz", module: "data", kind: "state" }), rm = (e2) => Zn(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), nm = (e2) => Zn(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), mm = (e2) => Zn(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), om = (e2) => Zn(34, e2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), pm = (e2) => Zn(42, e2.grow, { author: "rmmz", module: "trait", kind: "params" }), sm = (e2) => Zn(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), dm = (e2) => Zn(44, e2.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), lm = "{name} {value1}%", cm = "{value1}% + {value2}", ym = "{name} {value1}ターン", um = "{name}", gm = { domainName: "使用効果", options: { addBuff: {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: ym
}, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: ym }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: cm }, grow: {
  desc: "成長効果",
  domainName: "成長効果",
  format: "{name} + {value1}"
}, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: um }, recoverHp: {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: cm
}, recoverMp: {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: cm
}, removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: um }, removeDebuff: {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: um
}, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: lm }, special: { desc: "特殊効果", domainName: "特殊効果", format: um }, addState: {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: lm
}, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: um } } }, bm = 0, Im = (e2, t2, a2) => {
  const i2 = a2.find((e3) => e3.id === t2.dataId), r2 = i2 ? i2.name : "Unknown Item";
  return e2.pattern.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", r2);
}, hm = {
  domainName: "アイテム",
  options: { consumable: "消耗品" }
}, fm = { domainName: "スキル", options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" } }, vm = { domainName: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, km = () => ({ author: on, module: Zm, kind: io }), xm = (e2 = {}) => ({
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
  damage: Ma(e2.damage ?? {}),
  effects: [],
  price: 0
}), Nm = {
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
}, Tm = {
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
}, Sm = (e2 = {}) => ({
  stypeId: e2.stypeId ?? 0,
  requiredWtypeId1: e2.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e2.requiredWtypeId2 ?? 0,
  animationId: e2.animationId ?? 0,
  damage: Ma(e2.damage ?? {}),
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
}), wm = new e(), qm = wm.compile(Tm), Rm = wm.compile(Nm), Pm = wm.compile(za), Mm = wm.compile(Ha), Dm = wm.compile(An), Am = wm.compile(Ba), jm = wm.compile(Ga), zm = wm.compile(Fa), Em = (e2) => qm(e2), Hm = (e2) => Rm(e2), Fm = (e2) => Pm(e2), Cm = (e2) => Mm(e2), Bm = (e2) => Dm(e2), Lm = (e2) => Am(e2), Vm = (e2) => jm(e2), Wm = (e2) => zm(e2), Gm = (e2, t2) => `<${e2}:${t2}>`, Xm = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, Ym = (e2, t2) => $m(e2.note, (a2, i2) => t2(a2, i2, e2)), Km = (e2) => $m(e2, (e3, t2) => [e3, t2]), $m = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, Um = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (e3, a2, i2) => {
    const r2 = t2(a2, i2);
    if (r2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return Gm(a2, r2);
  });
}, Om = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, i2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return i2 ? i2[2] : void 0;
}, _m = (e2, t2, a2) => {
  const i2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(i2, (e3, i3) => i3 === t2 ? Gm(i3, a2) : e3);
}, Zm = "data", Jm = "actor", Qm = "map", eo = "enemy", to = "state", ao = "skill", io = "item", ro = "weapon", no = "armor", mo = "class", oo = "common_event", po = "troop", so = {
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
}, lo = () => ({ rpg: { damage: Pa, data: Ra, traits: Nr, itemEffect: gm }, global: so }), co = (e2, t2 = 0) => ({ code: 320, parameters: [e2.actorId, e2.name], indent: t2 }), yo = (e2, t2 = 0) => ({
  code: 324,
  parameters: [e2.actorId, e2.nickname],
  indent: t2
}), uo = (e2, t2 = 0) => ({ code: 325, parameters: [e2.actorId, e2.profile], indent: t2 }), go = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
}), bo = (e2, t2) => Io(e2, go({ name: t2 })), Io = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [go(t2)],
  indent: a2
}), ho = (e2, t2 = 0) => Io(241, e2, t2), fo = (e2, t2 = 0) => Io(245, e2, t2), vo = (e2, t2 = 0) => Io(249, e2, t2), ko = (e2, t2 = 0) => Io(250, e2, t2), xo = (e2, t2 = 0) => Io(132, e2, t2), No = (e2, t2 = 0) => Io(133, e2, t2), To = (e2, t2 = 0) => Io(139, e2, t2), So = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: qo(e2 ?? {})
}), wo = (e2) => ({ eventId: e2[0] }), qo = (e2) => [e2.eventId ?? 0], Ro = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), Po = (e2) => [e2.min, e2.max, e2.value], Mo = (e2, t2 = 0) => ({
  code: 121,
  indent: t2,
  parameters: Po(e2)
}), Do = (e2) => [e2], Ao = (e2) => ({ comment: e2[0] }), jo = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: Do(e2) }), zo = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: Do(e2)
}), Eo = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? jo(e3, t2) : zo(e3, t2)), Ho = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], Fo = (e2) => ({ variableId: e2[0], digits: e2[1] }), Co = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: Ho(e2 ?? {})
}), Bo = (e2 = {}) => [(e2 == null ? void 0 : e2.speed) ?? 4, (e2 == null ? void 0 : e2.skip) ?? false], Lo = (e2) => ({ speed: e2[0], skip: e2[1] }), Vo = (e2 = {}, t2 = 0) => ({ code: 105, indent: t2, parameters: Bo(e2) }), Wo = (e2 = "") => [e2], Go = (e2) => ({ content: e2[0] }), Xo = (e2 = "", t2 = 0) => ({
  code: 405,
  indent: t2 ?? 0,
  parameters: Wo(e2)
}), Yo = (e2, t2 = 0) => ({ code: 402, indent: t2, parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""] }), Ko = (e2) => ({ index: e2[0], name: e2[1] }), $o = (e2) => [e2.index ?? 0, e2.name ?? ""], Uo = (e2) => ({
  choices: e2[0],
  cancelType: e2[1],
  defaultType: e2[2],
  positionType: e2[3],
  background: e2[4]
}), Oo = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], _o = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), Zo = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), Jo = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), Qo = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), ep = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName], tp = (e2, t2 = 0) => ({ code: 401, indent: t2, parameters: [e2] }), ap = (e2, t2 = 0) => ({
  code: 355,
  indent: t2,
  parameters: [e2]
}), ip = (e2, t2 = 0) => ({ code: 655, indent: t2, parameters: [e2] }), rp = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? ap(e3, t2) : ip(e3, t2)), np = 0, mp = 1, op = 2, pp = 3, sp = 4, dp = {
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
}, lp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], cp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], yp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], up = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], gp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], bp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], Ip = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, dp[t2.param]], hp = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, fp = (e2, t2) => {
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
}, vp = (e2) => [...e2], kp = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: vp(e2.parameters)
}), xp = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, Np = (e2) => e2.parameters.every(xp), Tp = new e(), Sp = Tp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{
    type: "integer",
    minimum: 0
  }, { type: "string" }] } },
  additionalProperties: false
}), wp = (e2) => Sp(e2), qp = Tp.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } }, required: ["code", "indent", "parameters"] }), Rp = (e2) => qp(e2), Pp = Tp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [132, 133, 139, 241, 245, 249, 250] }, indent: { type: "integer" }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{
      type: "object",
      properties: { name: { type: "string" }, volume: { type: "integer" }, pitch: { type: "integer" }, pan: { type: "integer" } },
      required: ["name", "volume", "pitch", "pan"],
      additionalProperties: false
    }]
  } },
  additionalProperties: false
}), Mp = (e2) => Pp(e2), Dp = Tp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
    type: "integer",
    enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
  } },
  additionalProperties: false
}), Ap = (e2) => Dp(e2), jp = Tp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), zp = (e2) => jp(e2), Ep = Tp.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), Hp = (e2) => Ep(e2), Fp = Tp.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } },
  required: ["code", "indent", "parameters"]
}), Cp = (e2) => Fp(e2), Bp = Tp.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 402
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } },
  required: ["code", "indent", "parameters"]
}), Lp = (e2) => Bp(e2), Vp = Tp.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), Wp = (e2) => Vp(e2), Gp = Tp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), Xp = (e2) => Gp(e2), Yp = (e2) => Mp(e2) && 241 === e2.code, Kp = (e2) => Mp(e2) && 245 === e2.code, $p = (e2) => Mp(e2) && 249 === e2.code, Up = (e2) => Mp(e2) && 250 === e2.code, Op = (e2) => Mp(e2) && 132 === e2.code, _p = (e2) => Mp(e2) && 133 === e2.code, Zp = (e2) => Mp(e2) && 139 === e2.code, Jp = (e2) => zp(e2) && 401 === e2.code, Qp = (e2) => zp(e2) && 405 === e2.code, es = (e2) => zp(e2) && 108 === e2.code, ts = (e2) => zp(e2) && 408 === e2.code, as = (e2) => zp(e2) && 355 === e2.code, is = (e2) => zp(e2) && 655 === e2.code, rs = "bgm", ns = "se", ms = "me", os = "bgs", ps = "battlebacks1", ss = "battlebacks2", ds = "characters", ls = "enemies", cs = "faces", ys = "parallaxes", us = "pictures", gs = "sv_actors", bs = "sv_enemies", Is = "system", hs = "tilesets", fs = "titles1", vs = "titles2", ks = "System.json", xs = "Actors.json", Ns = "Classes.json", Ts = "Skills.json", Ss = "Items.json", ws = "Weapons.json", qs = "Armors.json", Rs = "Enemies.json", Ps = "Troops.json", Ms = "States.json", Ds = "Animations.json", As = "Tilesets.json", js = "CommonEvents.json", zs = "MapInfos.json", Es = "data", Hs = "img", Fs = "audio", Cs = "js", Bs = (e2 = {}) => ({
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
}), Ls = {
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
}, Vs = {
  type: "object",
  additionalProperties: false,
  required: ["type", "weaponImageId"],
  properties: { type: { type: "number" }, weaponImageId: { type: "number" } }
}, Ws = (e2 = {}) => [go(e2.cursor), go(e2.ok), go(e2.cancel), go(e2.buzzer), go(e2.equip), go(e2.save), go(e2.load), go(e2.battleStart), go(e2.escape), go(e2.enemyAttack), go(e2.enemyDamage), go(e2.enemyCollapse), go(e2.bossCollapes1), go(e2.bossCollapes2), go(e2.actorDamage), go(e2.actorCollapse), go(e2.playRecovery), go(e2.playMiss), go(e2.playEvasion), go(e2.playMagicEvasion), go(e2.playReflection), go(e2.shop), go(e2.useItem), go(e2.useSkill)], Gs = (e2) => ({
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
}), Xs = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }, Ys = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: Xs, victoryMe: Xs, gameoverMe: Xs, titleBgm: Xs, defeatMe: Xs, sounds: {
    type: "array",
    items: Xs,
    minItems: 24,
    maxItems: 24
  } }
}, Ks = { type: "object", additionalProperties: false, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: true
}, battleSystem: { type: "number" } } }, $s = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], Us = (e2) => ({
  item: e2[0],
  weapon: e2[1],
  armor: e2[2],
  keyItem: e2[3]
}), Os = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], _s = (e2) => ({ item: e2[0], skill: e2[1], equip: e2[2], status: e2[3], formation: e2[4], save: e2[5] }), Zs = {
  required: ["itemCategories", "menuCommands"],
  additionalProperties: false,
  type: "object",
  properties: {
    itemCategories: { type: "array", maxItems: 4, minItems: 4, items: { type: "boolean" } },
    menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } }
  }
}, Js = (e2 = {}) => ({
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
}), Qs = {
  type: "object",
  additionalProperties: false,
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
}, ed = (e2 = {}) => ({
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0,
  partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1]
}), td = {
  additionalProperties: false,
  type: "object",
  required: ["startMapId", "startX", "startY", "partyMembersArray"],
  properties: { startMapId: { type: "integer", minimum: 0 }, startX: { type: "integer", minimum: 0 }, startY: { type: "integer", minimum: 0 }, partyMembersArray: { type: "array", items: {
    type: "integer",
    minimum: 0
  } } }
}, ad = { additionalProperties: false, type: "object", required: ["tileSize", "faceSize", "iconSize"], properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: {
  type: "integer",
  minimum: 0
}, iconSize: { type: "integer", minimum: 0 } } }, id = { additionalProperties: false, type: "object", required: ["title1Name", "title2Name"], properties: { title1Name: { type: "string" }, title2Name: {
  type: "string"
} } }, rd = { type: "object", additionalProperties: false, required: ["locale", "versionId", "windowTone"], properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
  type: "array",
  items: { type: "number" },
  minItems: 4,
  maxItems: 4
} } }, nd = (e2, t2) => ({
  name: e2,
  id: t2
}), md = (e2) => e2.variables.map(nd), od = (e2) => e2.elements.map(nd), pd = (e2) => e2.equipTypes.map(nd), sd = (e2) => e2.skillTypes.map(nd), dd = (e2) => e2.weaponTypes.map(nd), ld = (e2) => e2.armorTypes.map(nd), cd = (e2) => e2.switches.map(nd), yd = (e2, t2) => [gd(e2, t2), bd(e2, t2), vd(e2, t2), Id(e2, t2), ud(e2, t2), hd(e2, t2), fd(e2, t2)], ud = (e2, t2) => ({
  items: ld(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), gd = (e2, t2) => ({ items: od(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), bd = (e2, t2) => ({ items: pd(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Id = (e2, t2) => ({
  items: sd(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), hd = (e2, t2) => ({ items: md(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variables"
} }), fd = (e2, t2) => ({ items: cd(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switches" } }), vd = (e2, t2) => ({
  items: dd(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), kd = { type: "array", items: { type: "string" } }, xd = {
  additionalProperties: false,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: kd,
    skillTypes: kd,
    elements: kd,
    variables: kd,
    equipTypes: kd,
    switches: kd,
    armorTypes: kd
  }
}, Nd = (e2) => ({
  armorTypes: Td(e2.armorTypes),
  elements: Td(e2.elements),
  equipTypes: Td(e2.equipTypes),
  weaponTypes: Td(e2.weaponTypes),
  skillTypes: Td(e2.skillTypes),
  variables: Td(e2.variables),
  switches: Td(e2.switches)
}), Td = (e2) => e2 ? [...e2] : [], Sd = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], wd = (e2) => ({
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
}), qd = (e2) => Rd(e2, ""), Rd = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], Pd = (e2) => ({
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
}), Md = (e2, t2) => "string" == typeof e2 ? e2 : t2, Dd = (e2) => ({
  actionFailure: Md(e2.actionFailure, "Action failed."),
  actorDamage: Md(e2.actorDamage, "%1 took %2 damage."),
  actorRecovery: Md(e2.actorRecovery, "%1 recovered %2 HP."),
  actorGain: Md(e2.actorGain, "%1 gained %2."),
  actorLoss: Md(e2.actorLoss, "%1 lost %2."),
  actorDrain: Md(e2.actorDrain, "%1 drained %2 HP."),
  actorNoDamage: Md(e2.actorNoDamage, "%1 was not damaged."),
  actorNoHit: Md(e2.actorNoHit, "%1 was not hit."),
  alwaysDash: Md(e2.alwaysDash, "Always dash."),
  bgmVolume: Md(e2.bgmVolume, "BGM volume"),
  bgsVolume: Md(e2.bgsVolume, "BGS volume"),
  commandRemember: Md(e2.commandRemember, "Command remember."),
  criticalToActor: Md(e2.criticalToActor, "%1 dealt %2 damage to %3."),
  criticalToEnemy: Md(e2.criticalToEnemy, "%1 dealt %2 damage to %3."),
  counterAttack: Md(e2.counterAttack, "%1 countered!"),
  debuffAdd: Md(e2.debuffAdd, "%1's %2 was lowered."),
  defeat: Md(e2.defeat, "Defeat."),
  enemyDamage: Md(e2.enemyDamage, "%1 took %2 damage."),
  enemyDrain: Md(e2.enemyDrain, "%1 drained %2 HP."),
  enemyGain: Md(e2.enemyGain, "%1 gained %2."),
  enemyLoss: Md(e2.enemyLoss, "%1 lost %2."),
  enemyNoDamage: Md(e2.enemyNoDamage, "%1 was not damaged."),
  enemyNoHit: Md(e2.enemyNoHit, "%1 was not hit."),
  enemyRecovery: Md(e2.enemyRecovery, "%1 recovered %2 HP."),
  evasion: Md(e2.evasion, "%1 evaded the attack!"),
  autosave: Md(e2.autosave, "Autosave"),
  escapeFailure: Md(e2.escapeFailure, "Escape failed."),
  escapeStart: Md(e2.escapeStart, "%1 started to escape!"),
  emerge: Md(e2.emerge, "%1 appeared!"),
  expNext: Md(e2.expNext, "Next level in %1 EXP."),
  expTotal: Md(e2.expTotal, "Total EXP: %1"),
  file: Md(e2.file, "File"),
  buffAdd: Md(e2.buffAdd, "%1's %2 was raised."),
  buffRemove: Md(e2.buffRemove, "%1's %2 was lowered."),
  obtainExp: Md(e2.obtainExp, "%1 EXP obtained."),
  obtainGold: Md(e2.obtainGold, "%1 gold obtained."),
  obtainItem: Md(e2.obtainItem, "%1 obtained %2."),
  obtainSkill: Md(e2.obtainSkill, "%1 learned %2."),
  levelUp: Md(e2.levelUp, "%1 leveled up!"),
  partyName: Md(e2.partyName, "Party"),
  loadMessage: Md(e2.loadMessage, "Load %1?"),
  meVolume: Md(e2.meVolume, "ME volume"),
  possession: Md(e2.possession, "Possession"),
  preemptive: Md(e2.preemptive, "%1 attacked first!"),
  saveMessage: Md(e2.saveMessage, "Save %1?"),
  seVolume: Md(e2.seVolume, "SE volume"),
  magicEvasion: Md(e2.magicEvasion, "%1 evaded the magic!"),
  magicReflection: Md(e2.magicReflection, "%1 reflected the magic!"),
  substitute: Md(e2.substitute, "%1 took the hit!"),
  surprise: Md(e2.surprise, "%1 surprised the enemy!"),
  touchUI: Md(e2.touchUI, "Touch UI"),
  useItem: Md(e2.useItem, "%1 used %2."),
  victory: Md(e2.victory, "Victory!")
}), Ad = { type: "string" }, jd = {
  type: "string",
  nullable: true
}, zd = {
  required: ["terms", "currencyUnit", "gameTitle"],
  additionalProperties: false,
  type: "object",
  properties: { currencyUnit: { type: "string" }, gameTitle: {
    type: "string"
  }, terms: { additionalProperties: false, type: "object", required: ["messages", "commands", "basic", "params"], properties: { messages: {
    type: "object",
    additionalProperties: false,
    required: ["actionFailure", "actorDamage", "actorNoDamage", "actorRecovery", "actorGain", "actorLoss", "actorDrain", "alwaysDash", "bgmVolume", "bgsVolume", "commandRemember", "criticalToActor", "criticalToEnemy", "counterAttack", "debuffAdd", "defeat", "enemyDamage", "enemyNoDamage", "enemyRecovery", "enemyGain", "enemyLoss", "enemyDrain", "evasion", "expNext", "expTotal", "escapeFailure", "escapeStart", "file", "loadMessage", "meVolume", "magicEvasion", "magicReflection", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "partyName", "preemptive", "saveMessage", "seVolume", "substitute", "touchUI", "victory", "useItem"],
    properties: {
      actionFailure: { type: "string" },
      actorDamage: { type: "string" },
      actorNoDamage: { type: "string" },
      actorRecovery: { type: "string" },
      actorGain: { type: "string" },
      actorLoss: {
        type: "string"
      },
      actorDrain: { type: "string" },
      alwaysDash: { type: "string" },
      bgmVolume: { type: "string" },
      bgsVolume: { type: "string" },
      commandRemember: { type: "string" },
      criticalToActor: { type: "string" },
      criticalToEnemy: { type: "string" },
      counterAttack: { type: "string" },
      debuffAdd: { type: "string" },
      defeat: { type: "string" },
      enemyDamage: { type: "string" },
      enemyNoDamage: { type: "string" },
      enemyRecovery: { type: "string" },
      enemyGain: { type: "string" },
      enemyLoss: { type: "string" },
      enemyDrain: { type: "string" },
      evasion: { type: "string" },
      expNext: { type: "string" },
      expTotal: {
        type: "string"
      },
      escapeFailure: { type: "string" },
      escapeStart: { type: "string" },
      file: { type: "string" },
      loadMessage: { type: "string" },
      meVolume: { type: "string" },
      magicEvasion: { type: "string" },
      magicReflection: {
        type: "string"
      },
      obtainExp: { type: "string" },
      obtainGold: { type: "string" },
      obtainItem: { type: "string" },
      obtainSkill: { type: "string" },
      partyName: { type: "string" },
      preemptive: { type: "string" },
      saveMessage: { type: "string" },
      seVolume: { type: "string" },
      substitute: { type: "string" },
      touchUI: { type: "string" },
      victory: { type: "string" },
      useItem: { type: "string" },
      buffAdd: { type: "string" },
      buffRemove: { type: "string" },
      actorNoHit: { type: "string" },
      enemyNoHit: { type: "string" },
      autosave: { type: "string" },
      emerge: { type: "string" },
      levelUp: { type: "string" },
      possession: { type: "string" },
      surprise: { type: "string" }
    }
  }, commands: { type: "array", items: [Ad, Ad, Ad, Ad, Ad, Ad, Ad, Ad, Ad, Ad, Ad, Ad, Ad, Ad, Ad, Ad, Ad, Ad, Ad, Ad, jd, Ad, Ad, jd, Ad, Ad], minItems: 26, maxItems: 26 }, basic: {
    type: "array",
    items: { type: "string" },
    minItems: 10,
    maxItems: 10
  }, params: { type: "array", items: { type: "string", minLength: 1 }, minItems: 10, maxItems: 10, uniqueItems: true } } } }
}, Ed = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], Hd = (e2) => e2.terms.params.map((e3, t2) => ({ name: e3, id: t2 })), Fd = (e2) => ({
  background: e2.background ?? 0,
  offsetX: e2.offsetX ?? 0,
  offsetY: e2.offsetY ?? 0
}), Cd = { additionalProperties: false, type: "object", required: ["background", "offsetX", "offsetY"], properties: {
  background: { type: "integer", minimum: 0, maximum: 1e3 },
  offsetX: { type: "integer", minimum: -1e3, maximum: 1e3 },
  offsetY: { type: "integer", minimum: -1e3, maximum: 1e3 }
} }, Bd = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: go(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), Ld = {
  additionalProperties: false,
  type: "object",
  required: ["characterIndex", "characterName", "bgm", "startMapId", "startX", "startY"],
  properties: { characterIndex: {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, characterName: { type: "string", minLength: 1 }, bgm: { type: "object", additionalProperties: false, required: ["name", "volume", "pitch", "pan"], properties: { name: { type: "string" }, volume: {
    type: "integer",
    minimum: 0,
    maximum: 100
  }, pitch: { type: "integer", minimum: 50, maximum: 150 }, pan: { type: "integer", minimum: -100, maximum: 100 } } }, startMapId: { type: "integer", minimum: 0 }, startX: {
    type: "integer",
    minimum: 0,
    maximum: 5e3
  }, startY: { type: "integer", minimum: 0, maximum: 5e3 } }
}, Vd = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), Wd = { additionalProperties: false, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: {
  type: "integer",
  minimum: 1
}, equips: { type: "array", items: { type: "integer" } } } }, Gd = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: Wd },
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
}, Xd = { domainName: "オプション", options: {
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
} }, Yd = {
  domainName: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, Kd = {
  domainName: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, $d = { domainName: "コマンド", options: {
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
} }, Ud = {
  additionalProperties: false,
  required: ["airship", "boat", "ship", "advanced", "attackMotions"],
  type: "object",
  properties: { airship: Ld, boat: Ld, ship: Ld, advanced: Ls, attackMotions: { type: "array", items: Vs } }
}, Od = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), { required: [], properties: {} }), _d = new e({ strict: true }), Zd = ((e2) => {
  const t2 = Od(e2);
  return { additionalProperties: false, type: "object", required: Array.from(new Set(t2.required)), properties: t2.properties };
})([Ud, Ys, Ks, Zs, Qs, td, ad, rd, xd, zd, id, Gd]), Jd = _d.compile(Zd), Qd = (e2) => Jd(e2), el = _d.compile(Wd);
_d.compile(Vs);
const tl = _d.compile(ad), al = (e2) => {
  var _a2, _b, _c, _d2, _e2;
  const t2 = e2.vehicles ?? {}, a2 = e2.dataNames ?? {}, i2 = e2.debug ?? {}, r2 = e2.images ?? {}, n2 = e2.gameInit ?? {}, m2 = e2.bgm ?? {}, o2 = nl(e2.size), p2 = e2.battlerTest ?? {};
  return {
    ...Js(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: Ws(e2.sounds),
    editor: Vd(e2.editing),
    advanced: Bs(e2.advanced),
    title1Name: r2.title1Name ?? "",
    title2Name: r2.title2Name ?? "",
    ...Nd(a2),
    magicSkills: rl([]),
    airship: Bd(t2.airship),
    boat: Bd(t2.boat),
    ship: Bd(t2.ship),
    defeatMe: go((_c = e2.me) == null ? void 0 : _c.defeatMe),
    gameoverMe: go((_d2 = e2.me) == null ? void 0 : _d2.gameoverMe),
    titleBgm: go(m2.titleBgm),
    tileSize: o2.tileSize,
    faceSize: o2.faceSize,
    iconSize: o2.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: p2.battleback1Name ?? "",
    battleback2Name: p2.battleback2Name ?? "",
    testTroopId: p2.testTroopId ?? 0,
    testBattlers: ml(p2.testBattlers, ol),
    battleBgm: go(m2.battleBgm),
    victoryMe: go((_e2 = e2.me) == null ? void 0 : _e2.victoryMe),
    editMapId: i2.editMapId ?? 0,
    locale: "",
    startMapId: n2.startMapId ?? 0,
    startX: n2.startX ?? 0,
    startY: n2.startY ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: il(e2.terms ?? {}),
    itemCategories: $s(e2.itemCategories),
    partyMembersArray: rl(n2.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    battlerName: i2.battlerName ?? "",
    menuCommands: Os(e2.menuComamnds)
  };
}, il = (e2) => ({
  basic: Sd(e2.basic ?? {}),
  commands: qd(e2.commands ?? {}),
  params: Ed(e2.params ?? {}),
  messages: Dd(e2.messages ?? {})
}), rl = (e2) => e2 ? [...e2] : [], nl = (e2) => ((e3) => tl(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, ml = (e2, t2) => e2 ? e2.map(t2) : [], ol = (e2) => ((e3) => el(e3))(e2) ? { actorId: e2.actorId, equips: rl(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, pl = (e2) => Object.entries(e2).map(([, e3]) => e3.domainName);
export {
  at as ABORT_BATTLE,
  on as AUTHOR_RMMZ,
  je as BATTLE_PROCESSING,
  Xe as CHANGE_ACTOR_IMAGES,
  C as CHANGE_ARMORS,
  Me as CHANGE_BATTLE_BACKGROUND,
  L as CHANGE_BATTLE_BGM,
  Ge as CHANGE_CLASS,
  $ as CHANGE_DEFEAT_ME,
  X as CHANGE_ENCOUNTER,
  Ue as CHANGE_ENEMY_HP,
  Oe as CHANGE_ENEMY_MP,
  _e as CHANGE_ENEMY_STATE,
  rt as CHANGE_ENEMY_TP,
  Ve as CHANGE_EXP,
  Y as CHANGE_FORMATION_ACCESS,
  E as CHANGE_GOLD,
  Fe as CHANGE_HP,
  H as CHANGE_ITEMS,
  G as CHANGE_MENU_ACCESS,
  Ce as CHANGE_MP,
  We as CHANGE_NAME,
  Ke as CHANGE_NICKNAME,
  De as CHANGE_PARALLAX,
  B as CHANGE_PARTY_MEMBER,
  ne as CHANGE_PLAYER_FOLLOWERS,
  $e as CHANGE_PROFILE,
  W as CHANGE_SAVE_ACCESS,
  Pe as CHANGE_TILESET,
  Be as CHANGE_TP,
  te as CHANGE_TRANSPARENCY,
  U as CHANGE_VEHICLE_BGM,
  Ye as CHANGE_VEHICLE_IMAGE,
  V as CHANGE_VICTORY_ME,
  F as CHANGE_WEAPONS,
  K as CHANGE_WINDOW_COLOR,
  Ii as COLLAPS_BOSS,
  hi as COLLAPS_INSTANT,
  fi as COLLAPS_NONE,
  bi as COLLAPS_NORMAL,
  k as COMMENT_BODY,
  v as COMMENT_HEAD,
  R as COMMON_EVENT,
  N as CONDITIONAL_BRANCH,
  T as CONDITIONAL_BRANCH_ELSE,
  j as CONTROL_SELF_SWITCH,
  D as CONTROL_SWITCHES,
  z as CONTROL_TIMER,
  A as CONTROL_VARIABLES,
  Pa as DEFAULT_DAMAGE_LABELS,
  so as DEFAULT_GLOBAL_LABELS,
  hm as DEFAULT_ITEM_LABELS,
  fm as DEFAULT_SKILL_LABELS,
  Xd as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Yd as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  vm as DEFAULT_USABLE_ITEM_LABELS,
  Wn as EFFECT_ADD_BUFF,
  Gn as EFFECT_ADD_DEBUFF,
  Ln as EFFECT_ADD_STATE,
  On as EFFECT_COMMON_EVENT,
  Bn as EFFECT_GAIN_TP,
  $n as EFFECT_GROW,
  Un as EFFECT_LEARN_SKILL,
  Fn as EFFECT_RECOVER_HP,
  Cn as EFFECT_RECOVER_MP,
  Xn as EFFECT_REMOVE_BUFF,
  Yn as EFFECT_REMOVE_DEBUFF,
  Vn as EFFECT_REMOVE_STATE,
  Kn as EFFECT_SPECIAL,
  Je as ENEMY_APPEAR,
  Ze as ENEMY_RECOVER_ALL,
  Qe as ENEMY_TRANSFORM,
  re as ERASE_EVENT,
  Ie as ERASE_PICTURE,
  q as EXIT_EVENT_PROCESSING,
  Si as EXTRA_PARAM_CEV,
  Ri as EXTRA_PARAM_CNT,
  Ti as EXTRA_PARAM_CRI,
  Ni as EXTRA_PARAM_EVA,
  xi as EXTRA_PARAM_HIT,
  Pi as EXTRA_PARAM_HRG,
  wi as EXTRA_PARAM_MEV,
  qi as EXTRA_PARAM_MRF,
  Mi as EXTRA_PARAM_MRG,
  Di as EXTRA_PARAM_TRG,
  pe as FADEIN_SCREEN,
  ve as FADEOUT_BGM,
  Te as FADEOUT_BGS,
  oe as FADEOUT_SCREEN,
  xs as FILENAME_ACTORS,
  Ds as FILENAME_ANIMATIONS,
  qs as FILENAME_ARMORS,
  Ns as FILENAME_CLASSES,
  js as FILENAME_COMMON_EVENTS,
  Rs as FILENAME_ENEMIES,
  Ss as FILENAME_ITEMS,
  zs as FILENAME_MAP_INFOS,
  Ts as FILENAME_SKILLS,
  Ms as FILENAME_STATES,
  ks as FILENAME_SYSTEM,
  As as FILENAME_TILESET,
  Ps as FILENAME_TROOPS,
  ws as FILENAME_WEAPONS,
  yr as FLAG_ID_AUTO_BATTLE,
  ur as FLAG_ID_GUARD,
  br as FLAG_ID_PRESERVE_TP,
  gr as FLAG_ID_SUBSTITUTE,
  de as FLASH_SCREEN,
  Fs as FOLDER_AUDIO,
  rs as FOLDER_AUDIO_BGM,
  os as FOLDER_AUDIO_BGS,
  ms as FOLDER_AUDIO_ME,
  ns as FOLDER_AUDIO_SE,
  Es as FOLDER_DATA,
  Hs as FOLDER_IMG,
  ps as FOLDER_IMG_BATTLEBACK1,
  ss as FOLDER_IMG_BATTLEBACK2,
  ds as FOLDER_IMG_CHACTERS,
  ls as FOLDER_IMG_ENEMIES,
  cs as FOLDER_IMG_FACES,
  ys as FOLDER_IMG_PARALLACES,
  us as FOLDER_IMG_PICTURES,
  gs as FOLDER_IMG_SV_ACTORS,
  bs as FOLDER_IMG_SV_ENEMIES,
  Is as FOLDER_IMG_SYSTEM,
  hs as FOLDER_IMG_TILESETS,
  fs as FOLDER_IMG_TITLES1,
  vs as FOLDER_IMG_TITLES2,
  Cs as FOLDER_JS,
  tt as FORCE_ACTION,
  mt as GAME_OVER,
  me as GATHER_FOLLOWERS,
  Ae as GET_LOCATION_INFO,
  ee as GET_ONOFF_VEHICLE,
  zn as HITTYPE_CERTAIN,
  Hn as HITTYPE_MAGICAL,
  En as HITTYPE_PHYSICAL,
  b as INPUT_NUMBER,
  P as LABEL,
  jn as LABELS_DATA_WEAPON,
  Kd as LABELS_SYSTEM_BATTLER_PARAMS,
  $d as LABELS_SYSTEM_GAME_COMMANDS,
  M as LABEL_JUMP,
  Ra as LABEL_SET_DATA,
  gm as LABEL_SET_ITEM_EFFECT,
  Nr as LABEL_SET_TRAIT,
  S as LOOP,
  w as LOOP_BREAK,
  Zm as MODULE_DATA,
  ue as MOVE_PICTURE,
  He as NAME_INPUT_PROCESSING,
  l as NO_OPERATION,
  it as OPEN_MENU_SCREEN,
  nt as OPEN_SAVE_SCREEN,
  np as OPERAND_CONSTANT,
  pp as OPERAND_GAMEDATA,
  op as OPERAND_RANDOM,
  sp as OPERAND_SCRIPT,
  mp as OPERAND_VARIABLE,
  or as PARTY_ABILITY_CANCEL_SURPRISE,
  dr as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  nr as PARTY_ABILITY_ENCOUNTER_HALF,
  mr as PARTY_ABILITY_ENCOUNTER_NONE,
  sr as PARTY_ABILITY_GOLD_DOUBLE,
  pr as PARTY_ABILITY_RAISE_PREEMPTIVE,
  fe as PLAY_BGM,
  Ne as PLAY_BGS,
  Se as PLAY_ME,
  Re as PLAY_MOVIE,
  we as PLAY_SE,
  dt as PLUGIN_COMMAND_MV,
  lt as PLUGIN_COMMAND_MZ,
  Le as RECOVER_ALL,
  Vi as REGULAR_PARAM_AGI,
  Fi as REGULAR_PARAM_ATK,
  Ci as REGULAR_PARAM_DEF,
  Wi as REGULAR_PARAM_LUK,
  Bi as REGULAR_PARAM_MATK,
  Ei as REGULAR_PARAM_MAX_HP,
  Hi as REGULAR_PARAM_MAX_MP,
  Li as REGULAR_PARAM_MDEF,
  xe as RESUME_BGM,
  ot as RETURN_TO_TITLE_SCREEN,
  ge as ROTATE_PICTURE,
  aa as ROUTE_CHANGE_BLEND_MODE,
  Gt as ROUTE_CHANGE_FREQ,
  ea as ROUTE_CHANGE_IMAGE,
  ta as ROUTE_CHANGE_OPACITY,
  Wt as ROUTE_CHANGE_SPEED,
  Ot as ROUTE_DIR_FIX_OFF,
  Ut as ROUTE_DIR_FIX_ON,
  yt as ROUTE_END,
  qt as ROUTE_JUMP,
  Tt as ROUTE_MOVE_AWAY,
  wt as ROUTE_MOVE_BACKWARD,
  ut as ROUTE_MOVE_DOWN,
  St as ROUTE_MOVE_FORWARD,
  gt as ROUTE_MOVE_LEFT,
  ht as ROUTE_MOVE_LOWER_L,
  ft as ROUTE_MOVE_LOWER_R,
  xt as ROUTE_MOVE_RANDOM,
  bt as ROUTE_MOVE_RIGHT,
  Nt as ROUTE_MOVE_TOWARD,
  It as ROUTE_MOVE_UP,
  vt as ROUTE_MOVE_UPPER_L,
  kt as ROUTE_MOVE_UPPER_R,
  ia as ROUTE_PLAY_SE,
  ra as ROUTE_SCRIPT,
  $t as ROUTE_STEP_ANIME_OFF,
  Kt as ROUTE_STEP_ANIME_ON,
  Vt as ROUTE_SWITCH_OFF,
  Lt as ROUTE_SWITCH_ON,
  Zt as ROUTE_THROUGH_OFF,
  _t as ROUTE_THROUGH_ON,
  Qt as ROUTE_TRANSPARENT_OFF,
  Jt as ROUTE_TRANSPARENT_ON,
  Et as ROUTE_TURN_180D,
  zt as ROUTE_TURN_90D_L,
  jt as ROUTE_TURN_90D_R,
  Ht as ROUTE_TURN_90D_R_L,
  Bt as ROUTE_TURN_AWAY,
  Pt as ROUTE_TURN_DOWN,
  Mt as ROUTE_TURN_LEFT,
  Ft as ROUTE_TURN_RANDOM,
  Dt as ROUTE_TURN_RIGHT,
  Ct as ROUTE_TURN_TOWARD,
  At as ROUTE_TURN_UP,
  Rt as ROUTE_WAIT,
  Yt as ROUTE_WALK_ANIME_OFF,
  Xt as ROUTE_WALK_ANIME_ON,
  ke as SAVE_BGM,
  Da as SCHEMA_DAMAGE,
  za as SCHEMA_DATA_ACTOR,
  Ha as SCHEMA_DATA_ARMMOR,
  Fa as SCHEMA_DATA_CLASS,
  Ba as SCHEMA_DATA_ENEMY,
  Tm as SCHEMA_DATA_ITEM,
  da as SCHEMA_DATA_MAP_INFO,
  Nm as SCHEMA_DATA_SKILL,
  Ga as SCHEMA_DATA_STATE,
  An as SCHEMA_DATA_WEAPON,
  Ls as SCHEMA_SYSTEM_ADVANCED,
  Ys as SCHEMA_SYSTEM_AUDIOFILES,
  Ks as SCHEMA_SYSTEM_BATTLE_RULE_RMMZ,
  Zs as SCHEMA_SYSTEM_BOOLEAN_GAMEMENU_OPTIONS,
  Qs as SCHEMA_SYSTEM_BOOLEAN_OPTIONS,
  Gd as SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE,
  td as SCHEMA_SYSTEM_GAME_INITIAL,
  ad as SCHEMA_SYSTEM_IMAGE_SIZE,
  Vs as SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION,
  rd as SCHEMA_SYSTEM_OTHER_DATA,
  xd as SCHEMA_SYSTEM_RPG_DATA_NAMES,
  zd as SCHEMA_SYSTEM_TERMS_BUNDLE,
  Cd as SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW,
  id as SCHEMA_SYSTEM_TITLE_IMAGES,
  Ld as SCHEMA_SYSTEM_VEHICLE,
  mn as SCHEMA_TRAIT,
  pt as SCRIPT_EVAL,
  st as SCRIPT_EVAL_BODY,
  J as SCROLL_MAP,
  I as SELECT_ITEM,
  Z as SET_EVENT_LOCATION,
  Q as SET_MOVEMENT_ROUTE,
  _ as SET_VEHICLE_LOCATION,
  he as SET_WEATHER_EFFECT,
  le as SHAKE_SCREEN,
  ze as SHOP_PROCESSING,
  Ee as SHOP_PROCESSING_BODY,
  ae as SHOW_ANIMATION,
  ie as SHOW_BALLOON_ICON,
  et as SHOW_BATTLE_ANIMATION,
  u as SHOW_CHOICES,
  g as SHOW_CHOICES_ITEM,
  c as SHOW_MESSAGE,
  y as SHOW_MESSAGE_BODY,
  ye as SHOW_PICTURE,
  h as SHOW_SCROLLING_TEXT,
  f as SHOW_SCROLLING_TEXT_BODY,
  x as SKIP,
  bm as SPECIAL_EFFECT_ESCAPE,
  tr as SPECIAL_PARAM_EXR,
  er as SPECIAL_PARAM_FDR,
  $i as SPECIAL_PARAM_GRD,
  _i as SPECIAL_PARAM_MCR,
  Qi as SPECIAL_PARAM_MDR,
  Ji as SPECIAL_PARAM_PDR,
  Oi as SPECIAL_PARAM_PHA,
  Ui as SPECIAL_PARAM_REC,
  Zi as SPECIAL_PARAM_TCR,
  Ki as SPECIAL_PARAM_TGR,
  pn as SRC_COLOR,
  Jm as SRC_DATA_ACTOR,
  no as SRC_DATA_ARMOR,
  mo as SRC_DATA_CLASS,
  oo as SRC_DATA_COMMON_EVNET,
  eo as SRC_DATA_ENEMY,
  io as SRC_DATA_ITEMS,
  Qm as SRC_DATA_MAP,
  ao as SRC_DATA_SKILL,
  to as SRC_DATA_STATE,
  po as SRC_DATA_TROOP,
  ro as SRC_DATA_WEAPON,
  qe as STOP_SE,
  be as TINT_PICTURE,
  se as TINT_SCREEN,
  ci as TRAIT_ACTION_PLUS,
  Ja as TRAIT_ATTACK_ELEMENT,
  ai as TRAIT_ATTACK_SKILL,
  ei as TRAIT_ATTACK_SPEED,
  Qa as TRAIT_ATTACK_STATE,
  ti as TRAIT_ATTACK_TIMES,
  ui as TRAIT_COLLAPSE_TYPE,
  Ka as TRAIT_DEBUFF_RATE,
  Ya as TRAIT_ELEMENT_RATE,
  pi as TRAIT_EQUIP_ARMOR_TYPE,
  si as TRAIT_EQUIP_LOCK,
  di as TRAIT_EQUIP_SEAL,
  oi as TRAIT_EQUIP_WEAPON_TYPE,
  Oa as TRAIT_PARAM,
  gi as TRAIT_PARTY_ABILITY,
  ni as TRAIT_SKILL_ADD,
  mi as TRAIT_SKILL_SEAL,
  ii as TRAIT_SKILL_TYPE_ADD,
  ri as TRAIT_SKILL_TYPE_SEAL,
  li as TRAIT_SLOT_TYPE,
  Za as TRAIT_SPARAM,
  yi as TRAIT_SPECIAL_FLAG,
  $a as TRAIT_STATE_RATE,
  Ua as TRAIT_STATE_RESIST,
  _a as TRAIT_XPARAM,
  O as TRANSFER_PLAYER,
  nn as TYPENAME_TRAIT,
  ce as WAIT,
  qn as applyFormatRule,
  Zo as cloneChoices,
  kp as cloneEventCommand,
  vp as cloneParameters,
  ki as collapsOptionsToArray,
  yn as compileFormatRule,
  Ao as convertCommentArrayToObject,
  r as createActorControlChars,
  t as createControlCharFormat,
  ct as createEventCommand,
  Gm as createNoteEntity,
  n as createSystemVariableControlChars,
  ha as defineGameDataSources,
  yd as defineSystemItems,
  vi as defineTraitCollapseType,
  Ai as defineTraitExtraParam,
  Tr as defineTraitItems,
  lr as defineTraitPartyAbility,
  Gi as defineTraitRegularParam,
  Ir as defineTraitSpecialFlag,
  ar as defineTraitSpecialParam,
  hn as detectFormatErrors,
  pl as domainNames,
  zi as extraParamName,
  ji as extraParamsToArray,
  Im as formatItemEffectText,
  Mn as formatTraitText,
  wo as fromArrayCommonEvent,
  Ro as fromArrayControlSwitches,
  Fo as fromArrayInputNumber,
  Go as fromArrayScrollingTextBody,
  Lo as fromArrayScrollingTextHeader,
  Uo as fromArraySetupChoice,
  Ko as fromArraySetupChoiceItem,
  Qo as fromArrayShowMessageHeader,
  a as fromStringArray,
  fp as getActorValue,
  ld as getArmorTypes,
  i as getControlChars,
  od as getElementTypes,
  hp as getEnemyValue,
  pd as getEquipTypes,
  Om as getNoteValue,
  Hd as getParamNames,
  sd as getSkillTypes,
  cd as getSwitches,
  md as getVariableNames,
  dd as getWeaponTypes,
  Np as isCloneableCommand,
  Mp as isCommandAudio,
  wp as isCommandChangeActorText,
  Op as isCommandChangeBattleBgm,
  Zp as isCommandChangeDefeatMe,
  _p as isCommandChangeVictoryMe,
  ts as isCommandCommentBody,
  es as isCommandCommentHeader,
  Hp as isCommandCommonEvent,
  Wp as isCommandInputNumber,
  Ap as isCommandNonParam,
  Yp as isCommandPlayBgm,
  Kp as isCommandPlayBgs,
  $p as isCommandPlayMe,
  Up as isCommandPlaySe,
  is as isCommandScriptBody,
  as as isCommandScriptHeader,
  Rp as isCommandScrollTextHead,
  Lp as isCommandShowChoiceItem,
  Cp as isCommandShowChoices,
  Xp as isCommandShowMessage,
  Jp as isCommandShowMessageBody,
  Qp as isCommandShowScrollingTextBody,
  zp as isCommandTextBody,
  Fm as isDataActor,
  Cm as isDataArmor,
  Wm as isDataClass,
  Lm as isDataEnemy,
  Em as isDataItem,
  Ia as isDataMap,
  ba as isDataMapInfo,
  Hm as isDataSkill,
  Vm as isDataState,
  Qd as isDataSystem,
  Bm as isDataWeapon,
  km as itemSourceId,
  lo as labelsRegistry,
  Aa as makeActorData,
  Ea as makeArmorData,
  bo as makeAudioCommand,
  go as makeAudioFileParams,
  Js as makeBooleanOptions,
  Ca as makeClassData,
  Io as makeCommandAudioAny,
  co as makeCommandChangeActorName,
  yo as makeCommandChangeActorNickName,
  uo as makeCommandChangeActorProfile,
  xo as makeCommandChangeBattleBGM,
  To as makeCommandChangeDefeatME,
  No as makeCommandChangeVictoryME,
  zo as makeCommandCommentBody,
  jo as makeCommandCommentHeader,
  So as makeCommandCommonEvent,
  Mo as makeCommandControlSwitches,
  Co as makeCommandInputNumber,
  ho as makeCommandPlayBGM,
  fo as makeCommandPlayBGS,
  vo as makeCommandPlayME,
  ko as makeCommandPlaySE,
  rp as makeCommandScriptArray,
  ip as makeCommandScriptBody,
  ap as makeCommandScriptHeader,
  Xo as makeCommandScrollingTextBody,
  Vo as makeCommandScrollingTextHeader,
  _o as makeCommandSetupChoice,
  Yo as makeCommandShowChoiceItem,
  Jo as makeCommandShowMessage,
  tp as makeCommandShowMessageBody,
  Do as makeCommentArray,
  Eo as makeCommentCommandArray,
  m as makeCommonEventData,
  Ma as makeDamage,
  Nd as makeDataNames,
  La as makeDropItem,
  Vd as makeEditorSetting,
  Va as makeEnemyAction,
  Wa as makeEnemyData,
  d as makeEventPageCondition,
  ed as makeGameInitial,
  $s as makeItemCategories,
  Us as makeItemCategoriesFromArray,
  xm as makeItemData,
  pa as makeMapData,
  na as makeMapEvent,
  ma as makeMapEventIamge,
  oa as makeMapEventPage,
  sa as makeMapInfoData,
  Os as makeMenuCommandsEnabled,
  _s as makeMenuCommandsEnabledFromArray,
  Ed as makeParamNamesArray,
  Xm as makeRegex,
  Sm as makeSkillData,
  Ws as makeSoundsArray,
  Gs as makeSoundsObject,
  Xa as makeStateData,
  Bs as makeSystemAdvanced,
  al as makeSystemData,
  Sd as makeTermsBasic,
  wd as makeTermsBasicFromArray,
  qd as makeTermsCommand,
  Pd as makeTermsCommandFromArray,
  Dd as makeTermsMessages,
  Fd as makeTitleCommandWindow,
  o as makeTroopData,
  s as makeTroopEventConditions,
  p as makeTroopMember,
  Bd as makeVehicleData,
  Dn as makeWeaponData,
  xn as mergeItemsSource,
  ja as normalizeDataActor,
  cr as partyAbilityToArray,
  Km as readNote,
  Ym as readNoteObject,
  Yi as regularParamName,
  Xi as regularParamsToArray,
  Um as replaceNote,
  _n as resolveItemEffectLabels,
  Sr as resolveTraitLabels,
  _m as setNoteValue,
  hr as specialFlagToArray,
  rr as specialParamName,
  ir as specialParamsToArray,
  qo as toArrayCommonEvent,
  Po as toArrayControlSwitches,
  Ho as toArrayInputNumber,
  bp as toArrayOperandActorStatus,
  lp as toArrayOperandConstant,
  Ip as toArrayOperandEnemyStatus,
  gp as toArrayOperandItemData,
  yp as toArrayOperandRandom,
  up as toArrayOperandScript,
  cp as toArrayOperandVariable,
  Wo as toArrayScrollingTextBody,
  Bo as toArrayScrollingTextHeader,
  Oo as toArraySetupChoice,
  $o as toArraySetupChoiceItem,
  ep as toArrayShowMessageHeader
};
//# sourceMappingURL=rpgTypes.es.js.map
