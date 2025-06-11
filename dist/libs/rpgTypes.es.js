import e from "ajv";
const t = (e2, t2) => `\\${e2}[${t2}]`, a = (e2, a2) => a2.map((a3, r2) => ({ text: a3, controlChar: t(e2, r2) })), r = (e2) => Array.from(e2.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e3) => ({
  char: e3[1],
  id: parseInt(e3[2], 10)
})), i = (e2) => e2.map((e3) => ({ text: e3.name, controlChar: t("N", e3.id) })), n = (e2) => e2.variables.map((e3, a2) => ({
  text: e3 || "",
  controlChar: t("V", a2)
})).filter((e3) => "" !== e3.text), o = (e2 = {}) => ({ id: e2.id ?? 0, name: e2.name ?? "", trigger: e2.trigger ?? 0, list: e2.list ?? [], switchId: e2.switchId ?? 0 }), m = (e2 = {}) => ({
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
}), l = 0, c = 101, y = 401, u = 102, g = 402, b = 103, I = 104, h = 105, f = 405, v = 108, k = 408, x = 109, N = 111, T = 411, S = 112, w = 113, R = 115, q = 117, P = 118, A = 119, z = 121, D = 122, M = 123, E = 124, j = 125, H = 126, C = 127, F = 128, B = 129, L = 132, V = 133, W = 134, X = 135, G = 136, K = 137, Y = 138, $ = 139, U = 140, O = 201, _ = 202, Z = 203, J = 204, Q = 205, ee = 206, te = 211, ae = 212, re = 213, ie = 214, ne = 216, oe = 217, me = 221, pe = 222, se = 223, de = 224, le = 225, ce = 230, ye = 231, ue = 232, ge = 233, be = 234, Ie = 235, he = 236, fe = 241, ve = 242, ke = 243, xe = 244, Ne = 245, Te = 246, Se = 249, we = 250, Re = 251, qe = 261, Pe = 282, Ae = 283, ze = 284, De = 285, Me = 301, Ee = 302, je = 605, He = 303, Ce = 311, Fe = 312, Be = 313, Le = 314, Ve = 315, We = 320, Xe = 321, Ge = 322, Ke = 323, Ye = 324, $e = 325, Ue = 331, Oe = 332, _e = 333, Ze = 334, Je = 335, Qe = 336, et = 337, tt = 339, at = 340, rt = 351, it = 342, nt = 352, ot = 353, mt = 354, pt = 355, st = 655, dt = 356, lt = 357, ct = (e2, t2, a2 = 0) => ({
  code: e2,
  indent: a2,
  parameters: t2
}), yt = 0, ut = 1, gt = 2, bt = 3, It = 4, ht = 5, ft = 6, vt = 7, kt = 8, xt = 9, Nt = 10, Tt = 11, St = 12, wt = 13, Rt = 14, qt = 15, Pt = 16, At = 17, zt = 18, Dt = 19, Mt = 20, Et = 21, jt = 22, Ht = 23, Ct = 24, Ft = 25, Bt = 26, Lt = 27, Vt = 28, Wt = 29, Xt = 30, Gt = 31, Kt = 32, Yt = 33, $t = 34, Ut = 35, Ot = 36, _t = 37, Zt = 38, Jt = 39, Qt = 40, ea = 41, ta = 42, aa = 43, ra = 44, ia = 45, na = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), oa = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), ma = () => ({ conditions: d(), list: [], directionFix: false, image: {
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
}, ya = new e(), ua = ya.compile(da), ga = ya.compile(ca), ba = (e2) => ua(e2), Ia = (e2) => ga(e2), ha = (e2, t2) => [fa(e2.skills, t2), va(e2.actors, t2), ka(e2.states, t2), xa(e2.armors, t2), Na(e2.classes, t2), Ta(e2.enemies, t2), Sa(e2.items, t2), wa(e2.weapons, t2), Ra(e2.commonEvents, t2)], fa = (e2, t2) => ({
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
}), Ra = (e2, t2) => ({ items: e2, label: t2.commonEvent.domainName, source: {
  author: "rmmz",
  module: "data",
  kind: "common_event"
} }), qa = {
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
}, Pa = { domainName: "ダメージ", options: {} }, Aa = (e2 = {}) => ({
  type: e2.type ?? 0,
  elementId: e2.elementId ?? 0,
  formula: e2.formula ?? "",
  variance: e2.variance ?? 0,
  critical: e2.critical ?? false
}), za = { type: "object", required: ["type", "elementId", "formula", "variance", "critical"], properties: {
  type: { type: "integer", minimum: 0 },
  elementId: { type: "integer", minimum: 0 },
  formula: { type: "string" },
  variance: { type: "integer" },
  critical: { type: "boolean" }
} }, Da = (e2 = {}) => ({
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
}), Ma = (e2) => ({
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
}), Ea = {
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
}, ja = (e2 = {}) => ({
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
}, Ca = {
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
}, Fa = (e2 = {}) => ({
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
}, Xa = {
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
}, Ga = (e2 = {}) => ({
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
}), Ka = 11, Ya = 12, $a = 13, Ua = 14, Oa = 21, _a = 22, Za = 23, Ja = 31, Qa = 32, er = 33, tr = 34, ar = 35, rr = 41, ir = 42, nr = 43, or = 44, mr = 51, pr = 52, sr = 53, dr = 54, lr = 55, cr = 61, yr = 62, ur = 63, gr = 64, br = 0, Ir = 1, hr = 2, fr = 3, vr = (e2, t2) => ({
  items: kr(e2.options, t2),
  label: e2.domainName,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), kr = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, {
  id: 2,
  name: e2.instantCollaps
}, { id: 3, name: e2.noneCollaps }], xr = 0, Nr = 1, Tr = 2, Sr = 3, wr = 4, Rr = 5, qr = 6, Pr = 7, Ar = 8, zr = 9, Dr = (e2) => ({ items: Mr(e2.options), label: e2.domainName, source: {
  author: "rmmz",
  module: "trait",
  kind: "xparams"
} }), Mr = (e2) => [{ id: 0, name: e2.hitRate }, { id: 1, name: e2.evasionRate }, { id: 2, name: e2.criticalRate }, { id: 3, name: e2.criticalEvasionRate }, {
  id: 4,
  name: e2.magicEvasionRate
}, { id: 5, name: e2.magicReflectionRate }, { id: 6, name: e2.counterAttackRate }, { id: 7, name: e2.hpRegenerationRate }, { id: 8, name: e2.mpRegenerationRate }, { id: 9, name: e2.tpRegenerationRate }], Er = (e2, t2) => {
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
}, jr = 0, Hr = 1, Cr = 2, Fr = 3, Br = 4, Lr = 5, Vr = 6, Wr = 7, Xr = (e2) => ({ items: Gr(e2.options), label: e2.domainName, source: { author: "rmmz", module: "trait", kind: "params" } }), Gr = (e2) => [{
  id: 0,
  name: e2.maxHp
}, { id: 1, name: e2.maxMp }, { id: 2, name: e2.atk }, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, { id: 5, name: e2.mdef }, { id: 6, name: e2.agi }, { id: 7, name: e2.luk }], Kr = (e2, t2) => {
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
}, Yr = 0, $r = 1, Ur = 2, Or = 3, _r = 4, Zr = 5, Jr = 6, Qr = 7, ei = 8, ti = 9, ai = (e2) => ({
  items: ri(e2.options),
  label: e2.domainName,
  source: { author: "rmmz", module: "trait", kind: "sparams" }
}), ri = (e2) => [{ id: 0, name: e2.targetRate }, { id: 1, name: e2.guardEffectRate }, { id: 2, name: e2.recoveryEffectRate }, { id: 3, name: e2.pharmacology }, { id: 4, name: e2.mpCostRate }, { id: 5, name: e2.tpChargeRate }, {
  id: 6,
  name: e2.physicalDamageRate
}, { id: 7, name: e2.magicDamageRate }, { id: 8, name: e2.floorDamageRate }, { id: 9, name: e2.experienceRate }], ii = (e2, t2) => {
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
}, ni = 0, oi = 1, mi = 2, pi = 3, si = 4, di = 5, li = (e2) => ({ items: ci(e2.options), label: e2.domainName, source: { author: "rmmz", module: "trait", kind: "partyAbility" } }), ci = (e2) => [{ id: 0, name: e2.encounterHalf }, {
  id: 1,
  name: e2.encounterNone
}, { id: 2, name: e2.cancelSurprise }, { id: 3, name: e2.raisePreemptive }, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], yi = 0, ui = 1, gi = 2, bi = 3, Ii = (e2) => ({
  items: hi(e2.options),
  label: e2.domainName,
  source: { author: "rmmz", module: "trait", kind: "sflag" }
}), hi = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
  id: 3,
  name: e2.preventEscape
}], fi = "{name}", vi = "{name} * {value}%", ki = "{name} + {value}%", xi = "{value}", Ni = {
  domainName: "特徴",
  options: { regularParam: { domainName: "基本能力値", format: vi, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } }, extraParam: { domainName: "追加能力値", format: ki, options: {
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
  } }, specialParam: { domainName: "特殊能力値", format: vi, options: {
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
    format: fi,
    options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
  }, collaps: { domainName: "消滅エフェクト", format: fi, options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  } }, partyAbility: { domainName: "パーティ能力", format: fi, options: {
    cancelSurprise: "不意打ち無効",
    dropItemDouble: "アイテムドロップ2倍",
    encounterHalf: "エンカウント半減",
    encounterNone: "エンカウントなし",
    goldDouble: "ゴールド2倍",
    raisePreemptive: "先制攻撃率アップ"
  } }, elementRate: { domainName: "属性有効度", format: vi }, debuffRate: { domainName: "弱体有効度", format: vi }, stateRate: {
    domainName: "ステート有効度",
    format: vi
  }, stateResist: { domainName: "ステート無効", format: fi }, attackElement: { domainName: "攻撃属性", format: fi }, attackState: { domainName: "攻撃ステート", format: ki }, attackSpeed: {
    domainName: "攻撃速度補正",
    format: xi
  }, attackTimes: { domainName: "攻撃追加回数", format: xi }, actionPlus: { domainName: "行動追加", format: vi }, attackSkill: { domainName: "攻撃スキル", format: fi }, equipWeaponType: {
    domainName: "装備武器タイプ",
    format: fi
  }, equipArmorType: { domainName: "装備防具タイプ", format: fi }, equipLock: { domainName: "装備固定", format: fi }, equipSeal: { domainName: "装備封印", format: fi }, slotType: {
    domainName: "スロットタイプ",
    format: fi
  }, skillAdd: { domainName: "スキル追加", format: fi }, skillSeal: { domainName: "スキルタイプ封印", format: fi }, skillTypeAdd: { domainName: "スキルタイプ追加", format: fi }, skillTypeSeal: {
    domainName: "スキルタイプ封印",
    format: fi
  } }
}, Ti = (e2, t2) => [Xr(e2.regularParam), Dr(e2.extraParam), ai(e2.specialParam), vr(e2.collaps, t2), Ii(e2.specialFlag), li(e2.partyAbility)], Si = (e2) => [wi(e2.elementRate), Ri(e2.debuffRate), qi(e2.stateRate), Pi(e2.stateResist), Ai(e2.regularParam), zi(e2.extraParam), Di(e2.specialParam), Mi(e2.attackElement), Ei(e2.attackState), ji(e2.attackSpeed), Hi(e2.attackTimes), Ci(e2.attackSkill), Fi(e2.skillTypeAdd), Bi(e2.skillTypeSeal), Li(e2.skillAdd), Vi(e2.skillSeal), Wi(e2.equipWeaponType), Xi(e2.equipArmorType), Gi(e2.equipLock), Ki(e2.equipSeal), Yi(e2.slotType), $i(e2.actionPlus), Ui(e2.specialFlag), Oi(e2.collaps), _i(e2.partyAbility)], wi = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 11,
  dataSource: Qi()
}), Ri = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 12,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), qi = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 13, dataSource: Zi() }), Pi = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 14, dataSource: Zi() }), Ai = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), zi = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 22, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "xparams"
} }), Di = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 23, dataSource: { author: "rmmz", module: "trait", kind: "sparams" } }), Mi = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 31,
  dataSource: Qi()
}), Ei = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 32, dataSource: Zi() }), ji = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 33
}), Hi = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 34 }), Ci = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 35, dataSource: Ji() }), Fi = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 41,
  dataSource: en()
}), Bi = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 42, dataSource: en() }), Li = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 43, dataSource: Ji() }), Vi = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 44,
  dataSource: Ji()
}), Wi = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 51, dataSource: tn() }), Xi = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 52,
  dataSource: an()
}), Gi = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 53, dataSource: rn() }), Ki = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 54, dataSource: rn() }), Yi = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 55,
  dataSource: rn()
}), $i = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 61 }), Ui = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 62,
  dataSource: { author: "rmmz", module: "trait", kind: "sflag" }
}), Oi = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 63, dataSource: { author: "rmmz", module: "trait", kind: "collaps" } }), _i = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 64,
  dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), Zi = () => ({ author: "rmmz", module: "data", kind: "state" }), Ji = () => ({
  author: "rmmz",
  module: "data",
  kind: "skill"
}), Qi = () => ({ author: "rmmz", module: "system", kind: "elements" }), en = () => ({ author: "rmmz", module: "system", kind: "skillTypes" }), tn = () => ({
  author: "rmmz",
  module: "system",
  kind: "weaponTypes"
}), an = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), rn = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), nn = "Trait", on = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }
}, mn = "rmmz", pn = "colors", sn = (e2) => e2.map((e3) => ({ dataKey: e3, placeHolder: `{${e3}}` })), dn = (e2) => ({ dataKey: e2.dataIdKey, placeHolder: `{${e2.dataIdKey}}`, sourceId: {
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
  const r2 = t2[a2.dataKey];
  return null == r2 ? e2 : e2.replaceAll(a2.placeHolder, String(r2));
}, hn = (e2, t2, a2, r2 = { placeHolderMaxLength: 50, formatMaxLength: 200 }) => e2.pattern.length >= r2.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{
  message: a2.formatVeryLong,
  reason: e2.pattern.slice(0, r2.formatMaxLength)
}], semanticErrors: [] } : {
  formatLabel: e2.label,
  semanticErrors: vn(e2, t2, a2),
  syntaxErrors: fn(e2.pattern, t2, a2, r2.placeHolderMaxLength)
}, fn = (e2, t2, a2, r2) => {
  const i2 = Array.from(e2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), n2 = ((e3) => {
    var _a2;
    const t3 = new Set(((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? []);
    return e3.itemMapper && t3.add(e3.itemMapper.placeHolder), e3.itemMappers && e3.itemMappers.forEach((e4) => {
      t3.add(e4.placeHolder);
    }), t3;
  })(t2);
  return i2.reduce((e3, t3) => {
    const i3 = t3[1];
    return 0 === i3.length ? e3 : i3.length > r2 ? (e3.push({
      message: a2.longPlaceHolder,
      reason: i3.slice(0, r2)
    }), e3) : (n2.has(i3) || e3.push({ message: a2.extraPlaceHolder, reason: i3 }), e3);
  }, []);
}, vn = (e2, t2, a2) => cn(t2).reduce((t3, r2) => {
  const i2 = kn(e2, r2, a2);
  return i2 && t3.push(i2), t3;
}, []), kn = (e2, t2, a2) => {
  const r2 = e2.pattern.includes(t2.placeHolder), i2 = !!e2.dataSource;
  return !r2 && i2 ? { message: a2.missingName, reason: t2.placeHolder } : r2 && !i2 ? {
    message: a2.missingSourceId,
    reason: t2.placeHolder
  } : void 0;
}, xn = (e2, t2) => {
  const a2 = Sn(t2);
  return e2.reduce((e3, t3) => {
    const r2 = Nn(t3, a2);
    return e3.set(t3.kindId, r2), e3;
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
}, /* @__PURE__ */ new Map()), wn = (e2) => e2.map((e3) => ({ id: e3.id, name: e3.name })), Rn = (e2, t2, a2, r2, i2) => {
  const n2 = ((e3, t3, a3) => {
    const r3 = a3.properties.numbers.reduce((e4, a4) => In(e4, t3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => In(e4, t3, a4), r3);
  })(r2, e2, a2);
  return t2 ? qn(n2, e2, a2, t2, i2) : n2;
}, qn = (e2, t2, a2, r2, i2) => {
  const n2 = ((e3, t3) => {
    const a3 = ((e4, t4) => {
      const a4 = t4[e4];
      return a4 && a4.id === e4 ? a4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return a3 ? a3.name : `?data[${t3}]`;
  })(r2, i2(t2));
  return a2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, n2), e2);
}, Pn = {
  itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" },
  placeHolder: { numbers: ["value"] }
}, An = (e2, t2, a2) => {
  const r2 = yn(Pn);
  return Rn(t2, a2, r2, e2.pattern, (e3) => e3.dataId);
}, zn = (e2 = {}) => ({
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
  damage: Aa(e2.damage ?? {}),
  wtypeId: e2.wtypeId ?? 0
}), Dn = { type: "object", required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"], properties: {
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
} }, Mn = {
  domainName: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, En = 0, jn = 1, Hn = 2, Cn = 11, Fn = 12, Bn = 13, Ln = 21, Vn = 22, Wn = 31, Xn = 32, Gn = 33, Kn = 34, Yn = 41, $n = 42, Un = 43, On = 44, _n = (e2, t2) => [{
  items: [{ id: fo, name: t2.escape }],
  label: e2.special.domainName,
  source: Jn()
}], Zn = (e2) => [to(e2), ao(e2), ro(e2), io(e2), no(e2), oo(e2), mo(e2), po(e2), so(e2), eo(e2), lo(e2), co(e2), yo(e2)], Jn = () => ({ author: "rmmz", module: "effect", kind: "special" }), Qn = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), eo = (e2) => Qn(41, e2.special, Jn()), to = (e2) => Qn(11, e2.recoverHp), ao = (e2) => Qn(12, e2.recoverMp), ro = (e2) => Qn(13, e2.gainTp), io = (e2) => Qn(21, e2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), no = (e2) => Qn(22, e2.removeState, { author: "rmmz", module: "data", kind: "state" }), oo = (e2) => Qn(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), mo = (e2) => Qn(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), po = (e2) => Qn(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), so = (e2) => Qn(34, e2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), lo = (e2) => Qn(42, e2.grow, { author: "rmmz", module: "trait", kind: "params" }), co = (e2) => Qn(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), yo = (e2) => Qn(44, e2.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), uo = "{name} {value1}%", go = "{value1}% + {value2}", bo = "{name} {value1}ターン", Io = "{name}", ho = { domainName: "使用効果", options: { addBuff: {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: bo
}, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: bo }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: go }, grow: {
  desc: "成長効果",
  domainName: "成長効果",
  format: "{name} + {value1}"
}, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: Io }, recoverHp: {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: go
}, recoverMp: {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: go
}, removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: Io }, removeDebuff: {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: Io
}, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: uo }, special: { desc: "特殊効果", domainName: "特殊効果", format: Io }, addState: {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: uo
}, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: Io } } }, fo = 0, vo = (e2, t2, a2) => {
  const r2 = a2.find((e3) => e3.id === t2.dataId), i2 = r2 ? r2.name : "Unknown Item";
  return e2.pattern.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", i2);
}, ko = {
  domainName: "アイテム",
  options: { consumable: "消耗品" }
}, xo = { domainName: "スキル", options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" } }, No = { domainName: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, To = () => ({ author: mn, module: em, kind: om }), So = (e2 = {}) => ({
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
  damage: Aa(e2.damage ?? {}),
  effects: [],
  price: 0
}), wo = {
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
}, Ro = {
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
}, qo = (e2 = {}) => ({
  stypeId: e2.stypeId ?? 0,
  requiredWtypeId1: e2.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e2.requiredWtypeId2 ?? 0,
  animationId: e2.animationId ?? 0,
  damage: Aa(e2.damage ?? {}),
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
}), Po = new e(), Ao = Po.compile(Ro), zo = Po.compile(wo), Do = Po.compile(Ea), Mo = Po.compile(Ha), Eo = Po.compile(Dn), jo = Po.compile(Ba), Ho = Po.compile(Xa), Co = Po.compile(Ca), Fo = (e2) => Ao(e2), Bo = (e2) => zo(e2), Lo = (e2) => Do(e2), Vo = (e2) => Mo(e2), Wo = (e2) => Eo(e2), Xo = (e2) => jo(e2), Go = (e2) => Ho(e2), Ko = (e2) => Co(e2), Yo = (e2, t2) => `<${e2}:${t2}>`, $o = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, Uo = (e2, t2) => _o(e2.note, (a2, r2) => t2(a2, r2, e2)), Oo = (e2) => _o(e2, (e3, t2) => [e3, t2]), _o = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, Zo = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (e3, a2, r2) => {
    const i2 = t2(a2, r2);
    if (i2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return Yo(a2, i2);
  });
}, Jo = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return r2 ? r2[2] : void 0;
}, Qo = (e2, t2, a2) => {
  const r2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(r2, (e3, r3) => r3 === t2 ? Yo(r3, a2) : e3);
}, em = "data", tm = "actor", am = "map", rm = "enemy", im = "state", nm = "skill", om = "item", mm = "weapon", pm = "armor", sm = "class", dm = "common_event", lm = "troop", cm = {
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
}, ym = () => ({ rpg: { damage: Pa, data: qa, traits: Ni, itemEffect: ho }, global: cm }), um = (e2, t2 = 0) => ({ code: 320, parameters: [e2.actorId, e2.name], indent: t2 }), gm = (e2, t2 = 0) => ({
  code: 324,
  parameters: [e2.actorId, e2.nickname],
  indent: t2
}), bm = (e2, t2 = 0) => ({ code: 325, parameters: [e2.actorId, e2.profile], indent: t2 }), Im = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
}), hm = (e2, t2) => fm(e2, Im({ name: t2 })), fm = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [Im(t2)],
  indent: a2
}), vm = (e2, t2 = 0) => fm(241, e2, t2), km = (e2, t2 = 0) => fm(245, e2, t2), xm = (e2, t2 = 0) => fm(249, e2, t2), Nm = (e2, t2 = 0) => fm(250, e2, t2), Tm = (e2, t2 = 0) => fm(132, e2, t2), Sm = (e2, t2 = 0) => fm(133, e2, t2), wm = (e2, t2 = 0) => fm(139, e2, t2), Rm = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: Pm(e2 ?? {})
}), qm = (e2) => ({ eventId: e2[0] }), Pm = (e2) => [e2.eventId ?? 0], Am = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), zm = (e2) => [e2.min, e2.max, e2.value], Dm = (e2, t2 = 0) => ({
  code: 121,
  indent: t2,
  parameters: zm(e2)
}), Mm = (e2) => [e2], Em = (e2) => ({ comment: e2[0] }), jm = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: Mm(e2) }), Hm = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: Mm(e2)
}), Cm = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? jm(e3, t2) : Hm(e3, t2)), Fm = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], Bm = (e2) => ({ variableId: e2[0], digits: e2[1] }), Lm = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: Fm(e2 ?? {})
}), Vm = (e2 = {}) => [(e2 == null ? void 0 : e2.speed) ?? 4, (e2 == null ? void 0 : e2.skip) ?? false], Wm = (e2) => ({ speed: e2[0], skip: e2[1] }), Xm = (e2 = {}, t2 = 0) => ({ code: 105, indent: t2, parameters: Vm(e2) }), Gm = (e2 = "") => [e2], Km = (e2) => ({ content: e2[0] }), Ym = (e2 = "", t2 = 0) => ({
  code: 405,
  indent: t2 ?? 0,
  parameters: Gm(e2)
}), $m = (e2, t2 = 0) => ({ code: 402, indent: t2, parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""] }), Um = (e2) => ({ index: e2[0], name: e2[1] }), Om = (e2) => [e2.index ?? 0, e2.name ?? ""], _m = (e2) => ({
  choices: e2[0],
  cancelType: e2[1],
  defaultType: e2[2],
  positionType: e2[3],
  background: e2[4]
}), Zm = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], Jm = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), Qm = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), ep = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), tp = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), ap = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName], rp = (e2, t2 = 0) => ({ code: 401, indent: t2, parameters: [e2] }), ip = (e2, t2 = 0) => ({
  code: 355,
  indent: t2,
  parameters: [e2]
}), np = (e2, t2 = 0) => ({ code: 655, indent: t2, parameters: [e2] }), op = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? ip(e3, t2) : np(e3, t2)), mp = 0, pp = 1, sp = 2, dp = 3, lp = 4, cp = {
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
}, yp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], up = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], gp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], bp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], Ip = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], hp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], fp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, cp[t2.param]], vp = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, kp = (e2, t2) => {
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
}, xp = (e2) => [...e2], Np = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: xp(e2.parameters)
}), Tp = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, Sp = (e2) => e2.parameters.every(Tp), wp = new e(), Rp = wp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{
    type: "integer",
    minimum: 0
  }, { type: "string" }] } },
  additionalProperties: false
}), qp = (e2) => Rp(e2), Pp = wp.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } }, required: ["code", "indent", "parameters"] }), Ap = (e2) => Pp(e2), zp = wp.compile({
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
}), Dp = (e2) => zp(e2), Mp = wp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
    type: "integer",
    enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
  } },
  additionalProperties: false
}), Ep = (e2) => Mp(e2), jp = wp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), Hp = (e2) => jp(e2), Cp = wp.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), Fp = (e2) => Cp(e2), Bp = wp.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } },
  required: ["code", "indent", "parameters"]
}), Lp = (e2) => Bp(e2), Vp = wp.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 402
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } },
  required: ["code", "indent", "parameters"]
}), Wp = (e2) => Vp(e2), Xp = wp.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), Gp = (e2) => Xp(e2), Kp = wp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), Yp = (e2) => Kp(e2), $p = (e2) => Dp(e2) && 241 === e2.code, Up = (e2) => Dp(e2) && 245 === e2.code, Op = (e2) => Dp(e2) && 249 === e2.code, _p = (e2) => Dp(e2) && 250 === e2.code, Zp = (e2) => Dp(e2) && 132 === e2.code, Jp = (e2) => Dp(e2) && 133 === e2.code, Qp = (e2) => Dp(e2) && 139 === e2.code, es = (e2) => Hp(e2) && 401 === e2.code, ts = (e2) => Hp(e2) && 405 === e2.code, as = (e2) => Hp(e2) && 108 === e2.code, rs = (e2) => Hp(e2) && 408 === e2.code, is = (e2) => Hp(e2) && 355 === e2.code, ns = (e2) => Hp(e2) && 655 === e2.code, os = "bgm", ms = "se", ps = "me", ss = "bgs", ds = "battlebacks1", ls = "battlebacks2", cs = "characters", ys = "enemies", us = "faces", gs = "parallaxes", bs = "pictures", Is = "sv_actors", hs = "sv_enemies", fs = "system", vs = "tilesets", ks = "titles1", xs = "titles2", Ns = "System.json", Ts = "Actors.json", Ss = "Classes.json", ws = "Skills.json", Rs = "Items.json", qs = "Weapons.json", Ps = "Armors.json", As = "Enemies.json", zs = "Troops.json", Ds = "States.json", Ms = "Animations.json", Es = "Tilesets.json", js = "CommonEvents.json", Hs = "MapInfos.json", Cs = "data", Fs = "img", Bs = "audio", Ls = "js", Vs = (e2 = {}) => ({
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
}), Ws = {
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
}, Xs = (e2 = {}) => [Im(e2.cursor), Im(e2.ok), Im(e2.cancel), Im(e2.buzzer), Im(e2.equip), Im(e2.save), Im(e2.load), Im(e2.battleStart), Im(e2.escape), Im(e2.enemyAttack), Im(e2.enemyDamage), Im(e2.enemyCollapse), Im(e2.bossCollapes1), Im(e2.bossCollapes2), Im(e2.actorDamage), Im(e2.actorCollapse), Im(e2.playRecovery), Im(e2.playMiss), Im(e2.playEvasion), Im(e2.playMagicEvasion), Im(e2.playReflection), Im(e2.shop), Im(e2.useItem), Im(e2.useSkill)], Gs = (e2) => ({
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
}), Ks = (e2 = {}) => ({
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
}), Ys = {
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
}, $s = (e2, t2) => ({
  name: e2,
  id: t2
}), Us = (e2) => e2.variables.map($s), Os = (e2) => e2.elements.map($s), _s = (e2) => e2.equipTypes.map($s), Zs = (e2) => e2.skillTypes.map($s), Js = (e2) => e2.weaponTypes.map($s), Qs = (e2) => e2.armorTypes.map($s), ed = (e2) => e2.terms.params.map($s), td = (e2) => e2.switches.map($s), ad = (e2, t2) => [id(e2, t2), nd(e2, t2), sd(e2, t2), od(e2, t2), rd(e2, t2), md(e2, t2), pd(e2, t2)], rd = (e2, t2) => ({
  items: Qs(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), id = (e2, t2) => ({ items: Os(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), nd = (e2, t2) => ({ items: _s(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), od = (e2, t2) => ({
  items: Zs(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), md = (e2, t2) => ({ items: Us(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variables"
} }), pd = (e2, t2) => ({ items: td(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switches" } }), sd = (e2, t2) => ({
  items: Js(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), dd = (e2) => ({
  armorTypes: ld(e2.armorTypes),
  elements: ld(e2.elements),
  equipTypes: ld(e2.equipTypes),
  weaponTypes: ld(e2.weaponTypes),
  skillTypes: ld(e2.skillTypes),
  variables: ld(e2.variables),
  switches: ld(e2.switches)
}), ld = (e2) => e2 ? [...e2] : [], cd = (e2 = {}) => ({
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0,
  partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1]
}), yd = {
  additionalProperties: true,
  type: "object",
  required: ["startMapId", "startX", "startY", "partyMembersArray"],
  properties: { startMapId: { type: "integer", minimum: 0 }, startX: { type: "integer", minimum: 0 }, startY: { type: "integer", minimum: 0 }, partyMembersArray: { type: "array", items: {
    type: "integer",
    minimum: 0
  } } }
}, ud = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], gd = (e2) => ({
  item: e2[0],
  weapon: e2[1],
  armor: e2[2],
  keyItem: e2[3]
}), bd = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], Id = (e2) => ({
  item: e2[0],
  skill: e2[1],
  equip: e2[2],
  status: e2[3],
  formation: e2[4],
  save: e2[5]
}), hd = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], fd = (e2) => ({
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
}), vd = (e2) => kd(e2, ""), kd = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], xd = (e2) => ({
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
}), Nd = (e2, t2) => "string" == typeof e2 ? e2 : t2, Td = (e2) => ({
  actionFailure: Nd(e2.actionFailure, "Action failed."),
  actorDamage: Nd(e2.actorDamage, "%1 took %2 damage."),
  actorRecovery: Nd(e2.actorRecovery, "%1 recovered %2 HP."),
  actorGain: Nd(e2.actorGain, "%1 gained %2."),
  actorLoss: Nd(e2.actorLoss, "%1 lost %2."),
  actorDrain: Nd(e2.actorDrain, "%1 drained %2 HP."),
  actorNoDamage: Nd(e2.actorNoDamage, "%1 was not damaged."),
  actorNoHit: Nd(e2.actorNoHit, "%1 was not hit."),
  alwaysDash: Nd(e2.alwaysDash, "Always dash."),
  bgmVolume: Nd(e2.bgmVolume, "BGM volume"),
  bgsVolume: Nd(e2.bgsVolume, "BGS volume"),
  commandRemember: Nd(e2.commandRemember, "Command remember."),
  criticalToActor: Nd(e2.criticalToActor, "%1 dealt %2 damage to %3."),
  criticalToEnemy: Nd(e2.criticalToEnemy, "%1 dealt %2 damage to %3."),
  counterAttack: Nd(e2.counterAttack, "%1 countered!"),
  debuffAdd: Nd(e2.debuffAdd, "%1's %2 was lowered."),
  defeat: Nd(e2.defeat, "Defeat."),
  enemyDamage: Nd(e2.enemyDamage, "%1 took %2 damage."),
  enemyDrain: Nd(e2.enemyDrain, "%1 drained %2 HP."),
  enemyGain: Nd(e2.enemyGain, "%1 gained %2."),
  enemyLoss: Nd(e2.enemyLoss, "%1 lost %2."),
  enemyNoDamage: Nd(e2.enemyNoDamage, "%1 was not damaged."),
  enemyNoHit: Nd(e2.enemyNoHit, "%1 was not hit."),
  enemyRecovery: Nd(e2.enemyRecovery, "%1 recovered %2 HP."),
  evasion: Nd(e2.evasion, "%1 evaded the attack!"),
  autosave: Nd(e2.autosave, "Autosave"),
  escapeFailure: Nd(e2.escapeFailure, "Escape failed."),
  escapeStart: Nd(e2.escapeStart, "%1 started to escape!"),
  emerge: Nd(e2.emerge, "%1 appeared!"),
  expNext: Nd(e2.expNext, "Next level in %1 EXP."),
  expTotal: Nd(e2.expTotal, "Total EXP: %1"),
  file: Nd(e2.file, "File"),
  buffAdd: Nd(e2.buffAdd, "%1's %2 was raised."),
  buffRemove: Nd(e2.buffRemove, "%1's %2 was lowered."),
  obtainExp: Nd(e2.obtainExp, "%1 EXP obtained."),
  obtainGold: Nd(e2.obtainGold, "%1 gold obtained."),
  obtainItem: Nd(e2.obtainItem, "%1 obtained %2."),
  obtainSkill: Nd(e2.obtainSkill, "%1 learned %2."),
  levelUp: Nd(e2.levelUp, "%1 leveled up!"),
  partyName: Nd(e2.partyName, "Party"),
  loadMessage: Nd(e2.loadMessage, "Load %1?"),
  meVolume: Nd(e2.meVolume, "ME volume"),
  possession: Nd(e2.possession, "Possession"),
  preemptive: Nd(e2.preemptive, "%1 attacked first!"),
  saveMessage: Nd(e2.saveMessage, "Save %1?"),
  seVolume: Nd(e2.seVolume, "SE volume"),
  magicEvasion: Nd(e2.magicEvasion, "%1 evaded the magic!"),
  magicReflection: Nd(e2.magicReflection, "%1 reflected the magic!"),
  substitute: Nd(e2.substitute, "%1 took the hit!"),
  surprise: Nd(e2.surprise, "%1 surprised the enemy!"),
  touchUI: Nd(e2.touchUI, "Touch UI"),
  useItem: Nd(e2.useItem, "%1 used %2."),
  victory: Nd(e2.victory, "Victory!")
}), Sd = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], wd = (e2) => ({
  background: e2.background ?? 0,
  offsetX: e2.offsetX ?? 0,
  offsetY: e2.offsetY ?? 0
}), Rd = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: Im(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), qd = (e2 = {}) => ({ jsonFormatLevel: e2.jsonFormatLevel ?? 0, messageWidth1: e2.messageWidth1 ?? 816, messageWidth2: e2.messageWidth2 ?? 816 }), Pd = { domainName: "オプション", options: {
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
} }, Ad = {
  domainName: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, zd = {
  domainName: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Dd = { domainName: "コマンド", options: {
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
} }, Md = new e({ strict: false });
Md.compile(Ys);
const Ed = Md.compile({ additionalProperties: false, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: {
  type: "array",
  items: { type: "integer" }
} } });
Md.compile({ type: "object", additionalProperties: false, required: ["type", "weaponImageId"], properties: { type: { type: "number" }, weaponImageId: {
  type: "number"
} } });
const jd = Md.compile({ additionalProperties: false, type: "object", required: ["tileSize", "faceSize", "iconSize"], properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: {
  type: "integer",
  minimum: 0
}, iconSize: { type: "integer", minimum: 0 } } }), Hd = (e2) => {
  var _a2, _b, _c, _d, _e2;
  const t2 = e2.vehicles ?? {}, a2 = e2.dataNames ?? {}, r2 = e2.debug ?? {}, i2 = e2.images ?? {}, n2 = e2.gameInit ?? {}, o2 = e2.bgm ?? {}, m2 = Bd(e2.size);
  return {
    ...Ks(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: Xs(e2.sounds),
    editor: qd(e2.editing),
    advanced: Vs(e2.advanced),
    title1Name: i2.title1Name ?? "",
    title2Name: i2.title2Name ?? "",
    battleback1Name: i2.battleback1Name ?? "",
    battleback2Name: i2.battleback2Name ?? "",
    ...dd(a2),
    magicSkills: Fd([]),
    airship: Rd(t2.airship),
    boat: Rd(t2.boat),
    ship: Rd(t2.ship),
    defeatMe: Im((_c = e2.me) == null ? void 0 : _c.defeatMe),
    gameoverMe: Im((_d = e2.me) == null ? void 0 : _d.gameoverMe),
    titleBgm: Im(o2.titleBgm),
    tileSize: m2.tileSize,
    faceSize: m2.faceSize,
    iconSize: m2.iconSize,
    versionId: 1,
    attackMotions: [],
    testBattlers: Ld(r2.testBattlers, Vd),
    battleBgm: Im(o2.battleBgm),
    victoryMe: Im((_e2 = e2.me) == null ? void 0 : _e2.victoryMe),
    editMapId: r2.editMapId ?? 0,
    locale: "",
    startMapId: n2.startMapId ?? 0,
    startX: n2.startX ?? 0,
    startY: n2.startY ?? 0,
    testTroopId: r2.testTroopId ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Cd(e2.terms ?? {}),
    itemCategories: ud(e2.itemCategories),
    partyMembersArray: Fd(n2.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    battlerName: r2.battlerName ?? "",
    menuCommands: bd(e2.menuComamnds)
  };
}, Cd = (e2) => ({
  basic: hd(e2.basic ?? {}),
  commands: vd(e2.commands ?? {}),
  params: Sd(e2.params ?? {}),
  messages: Td(e2.messages ?? {})
}), Fd = (e2) => e2 ? [...e2] : [], Bd = (e2) => ((e3) => jd(e3))(e2) ? { tileSize: e2.tileSize, faceSize: e2.faceSize, iconSize: e2.iconSize } : {
  tileSize: 48,
  faceSize: 144,
  iconSize: 32
}, Ld = (e2, t2) => e2 ? e2.map(t2) : [], Vd = (e2) => ((e3) => Ed(e3))(e2) ? { actorId: e2.actorId, equips: Fd(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, Wd = (e2) => Object.entries(e2).map(([, e3]) => e3.domainName);
export {
  at as ABORT_BATTLE,
  mn as AUTHOR_RMMZ,
  Me as BATTLE_PROCESSING,
  Ge as CHANGE_ACTOR_IMAGES,
  F as CHANGE_ARMORS,
  Ae as CHANGE_BATTLE_BACKGROUND,
  L as CHANGE_BATTLE_BGM,
  Xe as CHANGE_CLASS,
  $ as CHANGE_DEFEAT_ME,
  G as CHANGE_ENCOUNTER,
  Ue as CHANGE_ENEMY_HP,
  Oe as CHANGE_ENEMY_MP,
  _e as CHANGE_ENEMY_STATE,
  it as CHANGE_ENEMY_TP,
  Ve as CHANGE_EXP,
  K as CHANGE_FORMATION_ACCESS,
  j as CHANGE_GOLD,
  Ce as CHANGE_HP,
  H as CHANGE_ITEMS,
  X as CHANGE_MENU_ACCESS,
  Fe as CHANGE_MP,
  We as CHANGE_NAME,
  Ye as CHANGE_NICKNAME,
  ze as CHANGE_PARALLAX,
  B as CHANGE_PARTY_MEMBER,
  ne as CHANGE_PLAYER_FOLLOWERS,
  $e as CHANGE_PROFILE,
  W as CHANGE_SAVE_ACCESS,
  Pe as CHANGE_TILESET,
  Be as CHANGE_TP,
  te as CHANGE_TRANSPARENCY,
  U as CHANGE_VEHICLE_BGM,
  Ke as CHANGE_VEHICLE_IMAGE,
  V as CHANGE_VICTORY_ME,
  C as CHANGE_WEAPONS,
  Y as CHANGE_WINDOW_COLOR,
  Ir as COLLAPS_BOSS,
  hr as COLLAPS_INSTANT,
  fr as COLLAPS_NONE,
  br as COLLAPS_NORMAL,
  k as COMMENT_BODY,
  v as COMMENT_HEAD,
  q as COMMON_EVENT,
  N as CONDITIONAL_BRANCH,
  T as CONDITIONAL_BRANCH_ELSE,
  M as CONTROL_SELF_SWITCH,
  z as CONTROL_SWITCHES,
  E as CONTROL_TIMER,
  D as CONTROL_VARIABLES,
  Pa as DEFAULT_DAMAGE_LABELS,
  cm as DEFAULT_GLOBAL_LABELS,
  ko as DEFAULT_ITEM_LABELS,
  xo as DEFAULT_SKILL_LABELS,
  Pd as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Ad as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  No as DEFAULT_USABLE_ITEM_LABELS,
  Wn as EFFECT_ADD_BUFF,
  Xn as EFFECT_ADD_DEBUFF,
  Ln as EFFECT_ADD_STATE,
  On as EFFECT_COMMON_EVENT,
  Bn as EFFECT_GAIN_TP,
  $n as EFFECT_GROW,
  Un as EFFECT_LEARN_SKILL,
  Cn as EFFECT_RECOVER_HP,
  Fn as EFFECT_RECOVER_MP,
  Gn as EFFECT_REMOVE_BUFF,
  Kn as EFFECT_REMOVE_DEBUFF,
  Vn as EFFECT_REMOVE_STATE,
  Yn as EFFECT_SPECIAL,
  Je as ENEMY_APPEAR,
  Ze as ENEMY_RECOVER_ALL,
  Qe as ENEMY_TRANSFORM,
  ie as ERASE_EVENT,
  Ie as ERASE_PICTURE,
  R as EXIT_EVENT_PROCESSING,
  Sr as EXTRA_PARAM_CEV,
  qr as EXTRA_PARAM_CNT,
  Tr as EXTRA_PARAM_CRI,
  Nr as EXTRA_PARAM_EVA,
  xr as EXTRA_PARAM_HIT,
  Pr as EXTRA_PARAM_HRG,
  wr as EXTRA_PARAM_MEV,
  Rr as EXTRA_PARAM_MRF,
  Ar as EXTRA_PARAM_MRG,
  zr as EXTRA_PARAM_TRG,
  pe as FADEIN_SCREEN,
  ve as FADEOUT_BGM,
  Te as FADEOUT_BGS,
  me as FADEOUT_SCREEN,
  Ts as FILENAME_ACTORS,
  Ms as FILENAME_ANIMATIONS,
  Ps as FILENAME_ARMORS,
  Ss as FILENAME_CLASSES,
  js as FILENAME_COMMON_EVENTS,
  As as FILENAME_ENEMIES,
  Rs as FILENAME_ITEMS,
  Hs as FILENAME_MAP_INFOS,
  ws as FILENAME_SKILLS,
  Ds as FILENAME_STATES,
  Ns as FILENAME_SYSTEM,
  Es as FILENAME_TILESET,
  zs as FILENAME_TROOPS,
  qs as FILENAME_WEAPONS,
  yi as FLAG_ID_AUTO_BATTLE,
  ui as FLAG_ID_GUARD,
  bi as FLAG_ID_PRESERVE_TP,
  gi as FLAG_ID_SUBSTITUTE,
  de as FLASH_SCREEN,
  Bs as FOLDER_AUDIO,
  os as FOLDER_AUDIO_BGM,
  ss as FOLDER_AUDIO_BGS,
  ps as FOLDER_AUDIO_ME,
  ms as FOLDER_AUDIO_SE,
  Cs as FOLDER_DATA,
  Fs as FOLDER_IMG,
  ds as FOLDER_IMG_BATTLEBACK1,
  ls as FOLDER_IMG_BATTLEBACK2,
  cs as FOLDER_IMG_CHACTERS,
  ys as FOLDER_IMG_ENEMIES,
  us as FOLDER_IMG_FACES,
  gs as FOLDER_IMG_PARALLACES,
  bs as FOLDER_IMG_PICTURES,
  Is as FOLDER_IMG_SV_ACTORS,
  hs as FOLDER_IMG_SV_ENEMIES,
  fs as FOLDER_IMG_SYSTEM,
  vs as FOLDER_IMG_TILESETS,
  ks as FOLDER_IMG_TITLES1,
  xs as FOLDER_IMG_TITLES2,
  Ls as FOLDER_JS,
  tt as FORCE_ACTION,
  ot as GAME_OVER,
  oe as GATHER_FOLLOWERS,
  De as GET_LOCATION_INFO,
  ee as GET_ONOFF_VEHICLE,
  En as HITTYPE_CERTAIN,
  Hn as HITTYPE_MAGICAL,
  jn as HITTYPE_PHYSICAL,
  b as INPUT_NUMBER,
  P as LABEL,
  Mn as LABELS_DATA_WEAPON,
  zd as LABELS_SYSTEM_BATTLER_PARAMS,
  Dd as LABELS_SYSTEM_GAME_COMMANDS,
  A as LABEL_JUMP,
  qa as LABEL_SET_DATA,
  ho as LABEL_SET_ITEM_EFFECT,
  Ni as LABEL_SET_TRAIT,
  S as LOOP,
  w as LOOP_BREAK,
  em as MODULE_DATA,
  ue as MOVE_PICTURE,
  He as NAME_INPUT_PROCESSING,
  l as NO_OPERATION,
  rt as OPEN_MENU_SCREEN,
  nt as OPEN_SAVE_SCREEN,
  mp as OPERAND_CONSTANT,
  dp as OPERAND_GAMEDATA,
  sp as OPERAND_RANDOM,
  lp as OPERAND_SCRIPT,
  pp as OPERAND_VARIABLE,
  mi as PARTY_ABILITY_CANCEL_SURPRISE,
  di as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  ni as PARTY_ABILITY_ENCOUNTER_HALF,
  oi as PARTY_ABILITY_ENCOUNTER_NONE,
  si as PARTY_ABILITY_GOLD_DOUBLE,
  pi as PARTY_ABILITY_RAISE_PREEMPTIVE,
  fe as PLAY_BGM,
  Ne as PLAY_BGS,
  Se as PLAY_ME,
  qe as PLAY_MOVIE,
  we as PLAY_SE,
  dt as PLUGIN_COMMAND_MV,
  lt as PLUGIN_COMMAND_MZ,
  Le as RECOVER_ALL,
  Vr as REGULAR_PARAM_AGI,
  Cr as REGULAR_PARAM_ATK,
  Fr as REGULAR_PARAM_DEF,
  Wr as REGULAR_PARAM_LUK,
  Br as REGULAR_PARAM_MATK,
  jr as REGULAR_PARAM_MAX_HP,
  Hr as REGULAR_PARAM_MAX_MP,
  Lr as REGULAR_PARAM_MDEF,
  xe as RESUME_BGM,
  mt as RETURN_TO_TITLE_SCREEN,
  ge as ROTATE_PICTURE,
  aa as ROUTE_CHANGE_BLEND_MODE,
  Xt as ROUTE_CHANGE_FREQ,
  ea as ROUTE_CHANGE_IMAGE,
  ta as ROUTE_CHANGE_OPACITY,
  Wt as ROUTE_CHANGE_SPEED,
  Ot as ROUTE_DIR_FIX_OFF,
  Ut as ROUTE_DIR_FIX_ON,
  yt as ROUTE_END,
  Rt as ROUTE_JUMP,
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
  ra as ROUTE_PLAY_SE,
  ia as ROUTE_SCRIPT,
  $t as ROUTE_STEP_ANIME_OFF,
  Yt as ROUTE_STEP_ANIME_ON,
  Vt as ROUTE_SWITCH_OFF,
  Lt as ROUTE_SWITCH_ON,
  Zt as ROUTE_THROUGH_OFF,
  _t as ROUTE_THROUGH_ON,
  Qt as ROUTE_TRANSPARENT_OFF,
  Jt as ROUTE_TRANSPARENT_ON,
  jt as ROUTE_TURN_180D,
  Et as ROUTE_TURN_90D_L,
  Mt as ROUTE_TURN_90D_R,
  Ht as ROUTE_TURN_90D_R_L,
  Bt as ROUTE_TURN_AWAY,
  Pt as ROUTE_TURN_DOWN,
  At as ROUTE_TURN_LEFT,
  Ct as ROUTE_TURN_RANDOM,
  zt as ROUTE_TURN_RIGHT,
  Ft as ROUTE_TURN_TOWARD,
  Dt as ROUTE_TURN_UP,
  qt as ROUTE_WAIT,
  Kt as ROUTE_WALK_ANIME_OFF,
  Gt as ROUTE_WALK_ANIME_ON,
  ke as SAVE_BGM,
  za as SCHEMA_DAMAGE,
  Ea as SCHEMA_DATA_ACTOR,
  Ha as SCHEMA_DATA_ARMMOR,
  Ca as SCHEMA_DATA_CLASS,
  Ba as SCHEMA_DATA_ENEMY,
  Ro as SCHEMA_DATA_ITEM,
  da as SCHEMA_DATA_MAP_INFO,
  wo as SCHEMA_DATA_SKILL,
  Xa as SCHEMA_DATA_STATE,
  Dn as SCHEMA_DATA_WEAPON,
  Ws as SCHEMA_SYSTEM_ADVANCED,
  Ys as SCHEMA_SYSTEM_BOOLEAN_OPTIONS,
  yd as SCHEMA_SYSTEM_GAME_INITIAL,
  on as SCHEMA_TRAIT,
  pt as SCRIPT_EVAL,
  st as SCRIPT_EVAL_BODY,
  J as SCROLL_MAP,
  I as SELECT_ITEM,
  Z as SET_EVENT_LOCATION,
  Q as SET_MOVEMENT_ROUTE,
  _ as SET_VEHICLE_LOCATION,
  he as SET_WEATHER_EFFECT,
  le as SHAKE_SCREEN,
  Ee as SHOP_PROCESSING,
  je as SHOP_PROCESSING_BODY,
  ae as SHOW_ANIMATION,
  re as SHOW_BALLOON_ICON,
  et as SHOW_BATTLE_ANIMATION,
  u as SHOW_CHOICES,
  g as SHOW_CHOICES_ITEM,
  c as SHOW_MESSAGE,
  y as SHOW_MESSAGE_BODY,
  ye as SHOW_PICTURE,
  h as SHOW_SCROLLING_TEXT,
  f as SHOW_SCROLLING_TEXT_BODY,
  x as SKIP,
  fo as SPECIAL_EFFECT_ESCAPE,
  ti as SPECIAL_PARAM_EXR,
  ei as SPECIAL_PARAM_FDR,
  $r as SPECIAL_PARAM_GRD,
  _r as SPECIAL_PARAM_MCR,
  Qr as SPECIAL_PARAM_MDR,
  Jr as SPECIAL_PARAM_PDR,
  Or as SPECIAL_PARAM_PHA,
  Ur as SPECIAL_PARAM_REC,
  Zr as SPECIAL_PARAM_TCR,
  Yr as SPECIAL_PARAM_TGR,
  pn as SRC_COLOR,
  tm as SRC_DATA_ACTOR,
  pm as SRC_DATA_ARMOR,
  sm as SRC_DATA_CLASS,
  dm as SRC_DATA_COMMON_EVNET,
  rm as SRC_DATA_ENEMY,
  om as SRC_DATA_ITEMS,
  am as SRC_DATA_MAP,
  nm as SRC_DATA_SKILL,
  im as SRC_DATA_STATE,
  lm as SRC_DATA_TROOP,
  mm as SRC_DATA_WEAPON,
  Re as STOP_SE,
  be as TINT_PICTURE,
  se as TINT_SCREEN,
  cr as TRAIT_ACTION_PLUS,
  Ja as TRAIT_ATTACK_ELEMENT,
  ar as TRAIT_ATTACK_SKILL,
  er as TRAIT_ATTACK_SPEED,
  Qa as TRAIT_ATTACK_STATE,
  tr as TRAIT_ATTACK_TIMES,
  ur as TRAIT_COLLAPSE_TYPE,
  Ya as TRAIT_DEBUFF_RATE,
  Ka as TRAIT_ELEMENT_RATE,
  pr as TRAIT_EQUIP_ARMOR_TYPE,
  sr as TRAIT_EQUIP_LOCK,
  dr as TRAIT_EQUIP_SEAL,
  mr as TRAIT_EQUIP_WEAPON_TYPE,
  Oa as TRAIT_PARAM,
  gr as TRAIT_PARTY_ABILITY,
  nr as TRAIT_SKILL_ADD,
  or as TRAIT_SKILL_SEAL,
  rr as TRAIT_SKILL_TYPE_ADD,
  ir as TRAIT_SKILL_TYPE_SEAL,
  lr as TRAIT_SLOT_TYPE,
  Za as TRAIT_SPARAM,
  yr as TRAIT_SPECIAL_FLAG,
  $a as TRAIT_STATE_RATE,
  Ua as TRAIT_STATE_RESIST,
  _a as TRAIT_XPARAM,
  O as TRANSFER_PLAYER,
  nn as TYPENAME_TRAIT,
  ce as WAIT,
  Rn as applyFormatRule,
  Qm as cloneChoices,
  Np as cloneEventCommand,
  xp as cloneParameters,
  kr as collapsOptionsToArray,
  yn as compileFormatRule,
  Em as convertCommentArrayToObject,
  i as createActorControlChars,
  t as createControlCharFormat,
  ct as createEventCommand,
  Yo as createNoteEntity,
  n as createSystemVariableControlChars,
  ha as defineGameDataSources,
  ad as defineSystemItems,
  vr as defineTraitCollapseType,
  Dr as defineTraitExtraParam,
  Ti as defineTraitItems,
  li as defineTraitPartyAbility,
  Xr as defineTraitRegularParam,
  Ii as defineTraitSpecialFlag,
  ai as defineTraitSpecialParam,
  _n as definetItemEffectEntries,
  hn as detectFormatErrors,
  Wd as domainNames,
  Er as extraParamName,
  Mr as extraParamsToArray,
  vo as formatItemEffectText,
  An as formatTraitText,
  qm as fromArrayCommonEvent,
  Am as fromArrayControlSwitches,
  Bm as fromArrayInputNumber,
  Km as fromArrayScrollingTextBody,
  Wm as fromArrayScrollingTextHeader,
  _m as fromArraySetupChoice,
  Um as fromArraySetupChoiceItem,
  tp as fromArrayShowMessageHeader,
  a as fromStringArray,
  kp as getActorValue,
  Qs as getArmorTypes,
  r as getControlChars,
  Os as getElementTypes,
  vp as getEnemyValue,
  _s as getEquipTypes,
  Jo as getNoteValue,
  ed as getParamNames,
  Zs as getSkillTypes,
  td as getSwitches,
  Us as getVariableNames,
  Js as getWeaponTypes,
  Sp as isCloneableCommand,
  Dp as isCommandAudio,
  qp as isCommandChangeActorText,
  Zp as isCommandChangeBattleBgm,
  Qp as isCommandChangeDefeatMe,
  Jp as isCommandChangeVictoryMe,
  rs as isCommandCommentBody,
  as as isCommandCommentHeader,
  Fp as isCommandCommonEvent,
  Gp as isCommandInputNumber,
  Ep as isCommandNonParam,
  $p as isCommandPlayBgm,
  Up as isCommandPlayBgs,
  Op as isCommandPlayMe,
  _p as isCommandPlaySe,
  ns as isCommandScriptBody,
  is as isCommandScriptHeader,
  Ap as isCommandScrollTextHead,
  Wp as isCommandShowChoiceItem,
  Lp as isCommandShowChoices,
  Yp as isCommandShowMessage,
  es as isCommandShowMessageBody,
  ts as isCommandShowScrollingTextBody,
  Hp as isCommandTextBody,
  Lo as isDataActor,
  Vo as isDataArmor,
  Ko as isDataClass,
  Xo as isDataEnemy,
  Fo as isDataItem,
  Ia as isDataMap,
  ba as isDataMapInfo,
  Bo as isDataSkill,
  Go as isDataState,
  Wo as isDataWeapon,
  To as itemSourceId,
  ym as labelsRegistry,
  Da as makeActorData,
  ja as makeArmorData,
  hm as makeAudioCommand,
  Im as makeAudioFileParams,
  Ks as makeBooleanOptions,
  Fa as makeClassData,
  fm as makeCommandAudioAny,
  um as makeCommandChangeActorName,
  gm as makeCommandChangeActorNickName,
  bm as makeCommandChangeActorProfile,
  Tm as makeCommandChangeBattleBGM,
  wm as makeCommandChangeDefeatME,
  Sm as makeCommandChangeVictoryME,
  Hm as makeCommandCommentBody,
  jm as makeCommandCommentHeader,
  Rm as makeCommandCommonEvent,
  Dm as makeCommandControlSwitches,
  Lm as makeCommandInputNumber,
  vm as makeCommandPlayBGM,
  km as makeCommandPlayBGS,
  xm as makeCommandPlayME,
  Nm as makeCommandPlaySE,
  op as makeCommandScriptArray,
  np as makeCommandScriptBody,
  ip as makeCommandScriptHeader,
  Ym as makeCommandScrollingTextBody,
  Xm as makeCommandScrollingTextHeader,
  Jm as makeCommandSetupChoice,
  $m as makeCommandShowChoiceItem,
  ep as makeCommandShowMessage,
  rp as makeCommandShowMessageBody,
  Mm as makeCommentArray,
  Cm as makeCommentCommandArray,
  o as makeCommonEventData,
  Aa as makeDamage,
  dd as makeDataNames,
  La as makeDropItem,
  qd as makeEditorSetting,
  Va as makeEnemyAction,
  Wa as makeEnemyData,
  d as makeEventPageCondition,
  cd as makeGameInitial,
  ud as makeItemCategories,
  gd as makeItemCategoriesFromArray,
  So as makeItemData,
  pa as makeMapData,
  na as makeMapEvent,
  oa as makeMapEventIamge,
  ma as makeMapEventPage,
  sa as makeMapInfoData,
  bd as makeMenuCommandsEnabled,
  Id as makeMenuCommandsEnabledFromArray,
  Sd as makeParamNamesArray,
  $o as makeRegex,
  qo as makeSkillData,
  Xs as makeSoundsArray,
  Gs as makeSoundsObject,
  Ga as makeStateData,
  Vs as makeSystemAdvanced,
  Hd as makeSystemData,
  hd as makeTermsBasic,
  fd as makeTermsBasicFromArray,
  vd as makeTermsCommand,
  xd as makeTermsCommandFromArray,
  Td as makeTermsMessages,
  wd as makeTitleCommandWindow,
  m as makeTroopData,
  s as makeTroopEventConditions,
  p as makeTroopMember,
  Rd as makeVehicleData,
  zn as makeWeaponData,
  xn as mergeItemsSource,
  Ma as normalizeDataActor,
  ci as partyAbilityToArray,
  Oo as readNote,
  Uo as readNoteObject,
  Kr as regularParamName,
  Gr as regularParamsToArray,
  Zo as replaceNote,
  Zn as resolveItemEffectLabels,
  Si as resolveTraitLabels,
  Qo as setNoteValue,
  hi as specialFlagToArray,
  ii as specialParamName,
  ri as specialParamsToArray,
  Pm as toArrayCommonEvent,
  zm as toArrayControlSwitches,
  Fm as toArrayInputNumber,
  hp as toArrayOperandActorStatus,
  yp as toArrayOperandConstant,
  fp as toArrayOperandEnemyStatus,
  Ip as toArrayOperandItemData,
  gp as toArrayOperandRandom,
  bp as toArrayOperandScript,
  up as toArrayOperandVariable,
  Gm as toArrayScrollingTextBody,
  Vm as toArrayScrollingTextHeader,
  Zm as toArraySetupChoice,
  Om as toArraySetupChoiceItem,
  ap as toArrayShowMessageHeader
};
//# sourceMappingURL=rpgTypes.es.js.map
