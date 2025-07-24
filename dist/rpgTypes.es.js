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
}), s = (e2 = {}) => ({ enemyId: e2.enemyId ?? 0, x: e2.x ?? 0, y: e2.y ?? 0, hidden: e2.hidden ?? false }), p = (e2 = {}) => ({
  actorHp: e2.actorHp ?? 0,
  actorId: e2.actorId ?? 0,
  enemyValid: e2.enemyValid ?? 0,
  switchValid: e2.switchValid ?? 0
}), l = (e2 = {}) => ({
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
}), d = 0, c = 101, u = 401, y = 102, g = 402, b = 103, I = 104, f = 105, h = 405, v = 108, k = 408, x = 109, T = 111, S = 411, w = 112, N = 113, P = 115, R = 117, q = 118, A = 119, j = 121, C = 122, D = 123, M = 124, z = 125, E = 126, F = 127, B = 128, H = 129, L = 132, V = 133, W = 134, O = 135, G = 136, X = 137, Y = 138, K = 139, $ = 140, _ = 201, U = 202, Z = 203, J = 204, Q = 205, ee = 206, te = 211, ae = 212, re = 213, ie = 214, ne = 216, oe = 217, me = 221, se = 222, pe = 223, le = 224, de = 225, ce = 230, ue = 231, ye = 232, ge = 233, be = 234, Ie = 235, fe = 236, he = 241, ve = 242, ke = 243, xe = 244, Te = 245, Se = 246, we = 249, Ne = 250, Pe = 251, Re = 261, qe = 282, Ae = 283, je = 284, Ce = 285, De = 301, Me = 302, ze = 605, Ee = 303, Fe = 311, Be = 312, He = 313, Le = 314, Ve = 315, We = 320, Oe = 321, Ge = 322, Xe = 323, Ye = 324, Ke = 325, $e = 331, _e = 332, Ue = 333, Ze = 334, Je = 335, Qe = 336, et = 337, tt = 339, at = 340, rt = 351, it = 342, nt = 352, ot = 353, mt = 354, st = 355, pt = 655, lt = 356, dt = 357, ct = (e2, t2, a2 = 0) => ({
  code: e2,
  indent: a2,
  parameters: t2
}), ut = 0, yt = 1, gt = 2, bt = 3, It = 4, ft = 5, ht = 6, vt = 7, kt = 8, xt = 9, Tt = 10, St = 11, wt = 12, Nt = 13, Pt = 14, Rt = 15, qt = 16, At = 17, jt = 18, Ct = 19, Dt = 20, Mt = 21, zt = 22, Et = 23, Ft = 24, Bt = 25, Ht = 26, Lt = 27, Vt = 28, Wt = 29, Ot = 30, Gt = 31, Xt = 32, Yt = 33, Kt = 34, $t = 35, _t = 36, Ut = 37, Zt = 38, Jt = 39, Qt = 40, ea = 41, ta = 42, aa = 43, ra = 44, ia = 45, na = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), oa = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), ma = () => ({ conditions: l(), list: [], directionFix: false, image: {
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}, moveFrequency: 5, moveRoute: { list: [], repeat: false, skippable: false, wait: false } }), sa = (e2 = {}) => ({
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
}), pa = (e2 = { id: 0 }) => {
  return { name: e2.name ?? (t2 = e2.id, t2.toString().padStart(3, "0")), id: e2.id, expanded: e2.expanded ?? false, order: e2.order ?? 0, parentId: e2.parentId ?? 0, scrollX: e2.scrollX ?? 0, scrollY: e2.scrollY ?? 0 };
  var t2;
}, la = {
  type: "object",
  required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: {
    type: "integer"
  }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } }
}, da = {
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
      pages: { type: "array", items: da }
    } } }
  }
}, ua = new e({
  code: { source: false },
  strict: true
}), ya = ua.compile(la), ga = ua.compile(ca), ba = (e2) => ya(e2), Ia = (e2) => ga(e2), fa = (e2, t2) => [ha(e2.skills, t2), va(e2.actors, t2), ka(e2.states, t2), xa(e2.armors, t2), Ta(e2.classes, t2), Sa(e2.enemies, t2), wa(e2.items, t2), Na(e2.weapons, t2), Pa(e2.commonEvents, t2)], ha = (e2, t2) => ({
  label: t2.skill.title,
  items: e2,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), va = (e2, t2) => ({
  items: e2,
  label: t2.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), ka = (e2, t2) => ({ items: e2, label: t2.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), xa = (e2, t2) => ({ items: e2, label: t2.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), Ta = (e2, t2) => ({ items: e2, label: t2.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), Sa = (e2, t2) => ({ items: e2, label: t2.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), wa = (e2, t2) => ({ items: e2, label: t2.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), Na = (e2, t2) => ({ items: e2, label: t2.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), Pa = (e2, t2) => ({ items: e2, label: t2.commonEvent.title, source: { author: "rmmz", module: "data", kind: "common_event" } }), Ra = {
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
}, qa = {
  title: "ダメージ",
  options: {}
}, Aa = (e2 = {}) => ({ type: e2.type ?? 0, elementId: e2.elementId ?? 0, formula: e2.formula ?? "", variance: e2.variance ?? 0, critical: e2.critical ?? false }), ja = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: { type: { type: "integer", minimum: 0 }, elementId: { type: "integer", minimum: 0 }, formula: { type: "string" }, variance: {
    type: "integer"
  }, critical: { type: "boolean" } }
}, Ca = (e2 = {}) => ({
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
}), Da = (e2) => ({
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
}), Ma = {
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
}, za = (e2 = {}) => ({
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
}), Ea = {
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
}, Ba = (e2 = {}) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  traits: [],
  note: e2.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e2.learnings ?? [],
  expParams: e2.expParams ?? []
}), Ha = {
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
}, Oa = {
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
}), Xa = 11, Ya = 12, Ka = 13, $a = 14, _a = 21, Ua = 22, Za = 23, Ja = 31, Qa = 32, er = 33, tr = 34, ar = 35, rr = 41, ir = 42, nr = 43, or = 44, mr = 51, sr = 52, pr = 53, lr = 54, dr = 55, cr = 61, ur = 62, yr = 63, gr = 64, br = 0, Ir = 1, fr = 2, hr = 3, vr = (e2, t2) => ({
  items: kr(e2.options, t2),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), kr = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, { id: 2, name: e2.instantCollaps }, {
  id: 3,
  name: e2.noneCollaps
}], xr = 0, Tr = 1, Sr = 2, wr = 3, Nr = 4, Pr = 5, Rr = 6, qr = 7, Ar = 8, jr = 9, Cr = (e2) => ({
  items: Dr(e2.options),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), Dr = (e2) => [{ id: 0, name: e2.hitRate }, { id: 1, name: e2.evasionRate }, { id: 2, name: e2.criticalRate }, { id: 3, name: e2.criticalEvasionRate }, { id: 4, name: e2.magicEvasionRate }, {
  id: 5,
  name: e2.magicReflectionRate
}, { id: 6, name: e2.counterAttackRate }, { id: 7, name: e2.hpRegenerationRate }, { id: 8, name: e2.mpRegenerationRate }, { id: 9, name: e2.tpRegenerationRate }], Mr = (e2, t2) => {
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
}, zr = 0, Er = 1, Fr = 2, Br = 3, Hr = 4, Lr = 5, Vr = 6, Wr = 7, Or = (e2) => ({ items: Gr(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "params" } }), Gr = (e2) => [{
  id: 0,
  name: e2.maxHp
}, { id: 1, name: e2.maxMp }, { id: 2, name: e2.atk }, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, { id: 5, name: e2.mdef }, { id: 6, name: e2.agi }, { id: 7, name: e2.luk }], Xr = (e2, t2) => {
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
}, Yr = 0, Kr = 1, $r = 2, _r = 3, Ur = 4, Zr = 5, Jr = 6, Qr = 7, ei = 8, ti = 9, ai = (e2) => ({ items: ri(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), ri = (e2) => [{
  id: 0,
  name: e2.targetRate
}, { id: 1, name: e2.guardEffectRate }, { id: 2, name: e2.recoveryEffectRate }, { id: 3, name: e2.pharmacology }, { id: 4, name: e2.mpCostRate }, { id: 5, name: e2.tpChargeRate }, {
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
}, ni = 0, oi = 1, mi = 2, si = 3, pi = 4, li = 5, di = (e2) => ({
  items: ci(e2.options),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), ci = (e2) => [{ id: 0, name: e2.encounterHalf }, { id: 1, name: e2.encounterNone }, { id: 2, name: e2.cancelSurprise }, {
  id: 3,
  name: e2.raisePreemptive
}, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], ui = 0, yi = 1, gi = 2, bi = 3, Ii = (e2) => ({ items: fi(e2.options), label: e2.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), fi = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
  id: 3,
  name: e2.preventEscape
}], hi = "{name}", vi = "{name} * {value}%", ki = "{name} + {value}%", xi = "{value}", Ti = {
  title: "特徴",
  options: {
    regularParam: { title: "基本能力値", format: vi, options: {
      maxHp: "最大HP",
      maxMp: "最大MP",
      atk: "攻撃力",
      def: "防御力",
      matk: "魔法攻撃力",
      mdef: "魔法防御力",
      agi: "敏捷性",
      luk: "運"
    } },
    extraParam: { title: "追加能力値", format: ki, options: {
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
    specialParam: { title: "特殊能力値", format: vi, options: {
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
      format: hi,
      options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
    },
    collaps: { title: "消滅エフェクト", format: hi, options: {
      bossCollaps: "ボス崩壊",
      instantCollaps: "即時崩壊",
      noneCollaps: "崩壊なし"
    } },
    partyAbility: { title: "パーティ能力", format: hi, options: {
      cancelSurprise: "不意打ち無効",
      dropItemDouble: "アイテムドロップ2倍",
      encounterHalf: "エンカウント半減",
      encounterNone: "エンカウントなし",
      goldDouble: "ゴールド2倍",
      raisePreemptive: "先制攻撃率アップ"
    } },
    elementRate: { title: "属性有効度", format: vi },
    debuffRate: { title: "弱体有効度", format: vi },
    stateRate: { title: "ステート有効度", format: vi },
    stateResist: {
      title: "ステート無効",
      format: hi
    },
    attackElement: { title: "攻撃属性", format: hi },
    attackState: { title: "攻撃ステート", format: ki },
    attackSpeed: { title: "攻撃速度補正", format: xi },
    attackTimes: {
      title: "攻撃追加回数",
      format: xi
    },
    actionPlus: { title: "行動追加", format: vi },
    attackSkill: { title: "攻撃スキル", format: hi },
    equipWeaponType: { title: "装備武器タイプ", format: hi },
    equipArmorType: { title: "装備防具タイプ", format: hi },
    equipLock: {
      title: "装備固定",
      format: hi
    },
    equipSeal: { title: "装備封印", format: hi },
    slotType: { title: "スロットタイプ", format: hi },
    skillAdd: { title: "スキル追加", format: hi },
    skillSeal: { title: "スキルタイプ封印", format: hi },
    skillTypeAdd: { title: "スキルタイプ追加", format: hi },
    skillTypeSeal: { title: "スキルタイプ封印", format: hi }
  }
}, Si = (e2, t2) => [Or(e2.regularParam), Cr(e2.extraParam), ai(e2.specialParam), vr(e2.collaps, t2), Ii(e2.specialFlag), di(e2.partyAbility)], wi = "Trait", Ni = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }
}, Pi = "rmmz", Ri = "colors", qi = (e2) => e2.map((e3) => ({
  dataKey: e3,
  placeHolder: `{${e3}}`
})), Ai = (e2) => ({
  dataKey: e2.dataIdKey,
  placeHolder: `{${e2.dataIdKey}}`,
  sourceId: { author: e2.sourceId.author, kind: e2.sourceId.kind, module: e2.sourceId.module }
}), ji = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, Ci = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : [...t2];
}, Di = (e2, t2 = []) => {
  return {
    itemMappers: [...Ci(e2), ...t2].map(Mi),
    fallbackFormat: { text: zi(e2), label: Ei(e2) },
    properties: (a2 = e2.placeHolder ?? {}, {
      numbers: a2.numbers ? qi(a2.numbers) : [],
      strings: a2.strings ? qi(a2.strings) : []
    }),
    arrayIndex: e2.arrayIndex ? e2.arrayIndex.map(Ai) : []
  };
  var a2;
}, Mi = (e2) => ({ placeHolder: `{${e2.placeHolder}}`, kindKey: e2.kindKey, dataIdKey: e2.dataIdKey }), zi = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const t2 = ((e3) => {
    var _a2, _b, _c;
    return /* @__PURE__ */ new Set([...((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? [], ...((_b = e3.placeHolder) == null ? void 0 : _b.strings) ?? [], ...((_c = e3.arrayIndex) == null ? void 0 : _c.map((e4) => e4.dataIdKey)) ?? []]);
  })(e2);
  return 0 === t2.size ? "value not found" : Array.from(t2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, Ei = (e2) => {
  var _a2;
  return void 0 !== ((_a2 = e2.fallbackFormat) == null ? void 0 : _a2.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, Fi = (e2, t2, a2) => {
  const r2 = t2[a2.dataKey];
  return null == r2 ? e2 : e2.replaceAll(a2.placeHolder, String(r2));
}, Bi = (e2, t2, a2, r2 = { placeHolderMaxLength: 50, formatMaxLength: 200 }) => e2.pattern.length >= r2.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{
  message: a2.formatVeryLong,
  reason: e2.pattern.slice(0, r2.formatMaxLength)
}], semanticErrors: [] } : {
  formatLabel: e2.label,
  semanticErrors: Li(e2, t2, a2),
  syntaxErrors: Hi(e2.pattern, t2, a2, r2.placeHolderMaxLength)
}, Hi = (e2, t2, a2, r2) => {
  const i2 = Array.from(e2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), n2 = ((e3) => {
    var _a2, _b, _c, _d2;
    return /* @__PURE__ */ new Set([...((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? [], ...e3.itemMapper ? [e3.itemMapper.placeHolder] : [], ...((_b = e3.itemMappers) == null ? void 0 : _b.map((e4) => e4.placeHolder)) ?? [], ...((_c = e3.placeHolder) == null ? void 0 : _c.strings) ?? [], ...((_d2 = e3.arrayIndex) == null ? void 0 : _d2.map((e4) => e4.dataIdKey)) ?? []]);
  })(t2);
  return i2.reduce((e3, t3) => {
    const i3 = t3[1];
    return 0 === i3.length ? e3 : i3.length > r2 ? (e3.push({ message: a2.longPlaceHolder, reason: i3.slice(0, r2) }), e3) : (n2.has(i3) || e3.push({
      message: a2.extraPlaceHolder,
      reason: i3
    }), e3);
  }, []);
}, Li = (e2, t2, a2) => Ci(t2).reduce((t3, r2) => {
  const i2 = Vi(e2, r2, a2);
  return i2 && t3.push(i2), t3;
}, []), Vi = (e2, t2, a2) => {
  const r2 = e2.pattern.includes(t2.placeHolder), i2 = !!e2.dataSource;
  return !r2 && i2 ? { message: a2.missingName, reason: t2.placeHolder } : r2 && !i2 ? { message: a2.missingSourceId, reason: t2.placeHolder } : void 0;
}, Wi = (e2, t2) => {
  const a2 = Xi(t2);
  return e2.reduce((e3, t3) => {
    const r2 = Oi(t3, a2);
    return e3.set(t3.kindId, r2), e3;
  }, /* @__PURE__ */ new Map());
}, Oi = (e2, t2) => {
  const a2 = Gi(e2.dataSource, t2);
  return { patternCompiled: e2.pattern, label: e2.label, data: a2 ? a2.items : void 0 };
}, Gi = (e2, t2) => {
  if (e2) return t2.get(ji(e2));
}, Xi = (e2) => e2.reduce((e3, t2) => {
  const a2 = { items: Yi(t2.items), source: t2.source, label: t2.label };
  return e3.set(ji(t2.source), a2), e3;
}, /* @__PURE__ */ new Map()), Yi = (e2) => e2.map((e3) => ({
  id: e3.id,
  name: e3.name
})), Ki = (e2, t2, a2, r2, i2) => {
  const n2 = ((e3, t3, a3) => {
    const r3 = a3.properties.numbers.reduce((e4, a4) => Fi(e4, t3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => Fi(e4, t3, a4), r3);
  })(r2, e2, a2);
  return t2 ? $i(n2, e2, a2, t2, i2) : n2;
}, $i = (e2, t2, a2, r2, i2) => {
  const n2 = ((e3, t3) => {
    const a3 = ((e4, t4) => {
      const a4 = t4[e4];
      return a4 && a4.id === e4 ? a4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return a3 ? a3.name : `?data[${t3}]`;
  })(r2, i2(t2));
  return a2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, n2), e2);
}, _i = {
  itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" },
  placeHolder: { numbers: ["value"] }
}, Ui = (e2, t2, a2) => {
  const r2 = Di(_i);
  return Ki(t2, a2, r2, e2.pattern, (e3) => e3.dataId);
}, Zi = (e2 = {}) => ({
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
}), Ji = { type: "object", required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"], properties: {
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
} }, Qi = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, en = 0, tn = 1, an = 2, rn = 11, nn = 12, on = 13, mn = 21, sn = 22, pn = 31, ln = 32, dn = 33, cn = 34, un = 41, yn = 42, gn = 43, bn = 44, In = (e2) => [vn(e2), kn(e2), xn(e2), Tn(e2), Sn(e2), wn(e2), Nn(e2), Pn(e2), Rn(e2), hn(e2), qn(e2), An(e2), jn(e2)], fn = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), hn = (e2) => fn(41, e2.special), vn = (e2) => fn(11, e2.recoverHp), kn = (e2) => fn(12, e2.recoverMp), xn = (e2) => fn(13, e2.gainTp), Tn = (e2) => fn(21, e2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), Sn = (e2) => fn(22, e2.removeState, { author: "rmmz", module: "data", kind: "state" }), wn = (e2) => fn(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), Nn = (e2) => fn(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Pn = (e2) => fn(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), Rn = (e2) => fn(34, e2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), qn = (e2) => fn(42, e2.grow, { author: "rmmz", module: "trait", kind: "params" }), An = (e2) => fn(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), jn = (e2) => fn(44, e2.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), Cn = "{name} {value1}%", Dn = "{value1}% + {value2}", Mn = "{name} {value1}ターン", zn = "{name}", En = { title: "使用効果", options: { addBuff: {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: Mn
}, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: Mn }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: Dn }, grow: {
  desc: "成長効果",
  domainName: "成長効果",
  format: "{name} + {value1}"
}, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: zn }, recoverHp: {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: Dn
}, recoverMp: {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: Dn
}, removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: zn }, removeDebuff: {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: zn
}, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: Cn }, special: { desc: "特殊効果", domainName: "特殊効果", format: zn }, addState: {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: Cn
}, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: zn } } }, Fn = 0, Bn = (e2, t2, a2) => {
  const r2 = a2.find((e3) => e3.id === t2.dataId), i2 = r2 ? r2.name : "Unknown Item";
  return e2.pattern.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", i2);
}, Hn = { title: "アイテム", options: { consumable: "消耗品" } }, Ln = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Vn = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Wn = (e2 = {}) => ({
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
}), On = (e2 = {}) => ({
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
}), Gn = { type: "string" }, Xn = { type: "integer" }, Yn = { type: "integer", minimum: 0 }, Kn = {
  type: "object",
  properties: { type: { type: "integer" }, elementId: Yn, formula: Gn, variance: Xn, critical: { type: "boolean" } },
  required: ["type", "elementId", "formula", "variance", "critical"],
  additionalProperties: false
}, $n = { type: "object", properties: { code: Xn, dataId: Yn, value1: Xn, value2: Xn }, required: ["code", "dataId", "value1", "value2"], additionalProperties: false }, _n = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "message1", "message2", "messageType", "mpCost", "requiredWtypeId1", "requiredWtypeId2", "stypeId", "tpCost", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "note", "effects"],
  properties: {
    name: Gn,
    id: Yn,
    description: Gn,
    iconIndex: Yn,
    message1: Gn,
    message2: Gn,
    messageType: Yn,
    mpCost: Xn,
    requiredWtypeId1: Yn,
    requiredWtypeId2: Yn,
    stypeId: Yn,
    tpCost: Xn,
    animationId: Yn,
    hitType: Yn,
    occasion: { type: "integer" },
    repeats: Yn,
    scope: Xn,
    speed: Xn,
    successRate: Xn,
    tpGain: Xn,
    note: Gn,
    effects: { type: "array", items: $n },
    damage: Kn
  },
  additionalProperties: false
}, Un = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "note", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "consumable", "price", "effects"],
  properties: { name: Gn, id: Yn, description: Gn, iconIndex: Yn, note: Gn, animationId: Yn, hitType: Xn, occasion: Xn, repeats: Xn, scope: Xn, speed: Xn, successRate: Xn, tpGain: Xn, consumable: {
    type: "boolean"
  }, price: Yn, itypeId: Yn, effects: { type: "array", items: $n }, damage: Kn }
}, Zn = new e({
  code: { source: false },
  strict: true
}), Jn = Zn.compile(Un), Qn = (e2) => Jn(e2), eo = Zn.compile(_n), to = (e2) => eo(e2), ao = Zn.compile(Ma), ro = (e2) => ao(e2), io = Zn.compile(Ea), no = (e2) => io(e2), oo = Zn.compile(Ji), mo = (e2) => oo(e2), so = Zn.compile(Ha), po = (e2) => so(e2), lo = Zn.compile(Oa), co = (e2) => lo(e2), uo = Zn.compile(Fa), yo = (e2) => uo(e2), go = (e2, t2) => `<${e2}:${t2}>`, bo = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, Io = (e2, t2) => ho(e2.note, (a2, r2) => t2(a2, r2, e2)), fo = (e2) => ho(e2, (e3, t2) => [e3, t2]), ho = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, vo = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (e3, a2, r2) => {
    const i2 = t2(a2, r2);
    if (i2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return go(a2, i2);
  });
}, ko = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return r2 ? r2[2] : void 0;
}, xo = (e2, t2, a2) => {
  const r2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(r2, (e3, r3) => r3 === t2 ? go(r3, a2) : e3);
}, To = "data", So = "actor", wo = "map", No = "enemy", Po = "state", Ro = "skill", qo = "item", Ao = "weapon", jo = "armor", Co = "class", Do = "common_event", Mo = "troop", zo = (e2) => [Eo(e2.elementRate), Fo(e2.debuffRate), Bo(e2.stateRate), Ho(e2.stateResist), Lo(e2.regularParam), Vo(e2.extraParam), Wo(e2.specialParam), Oo(e2.attackElement), Go(e2.attackState), Xo(e2.attackSpeed), Yo(e2.attackTimes), Ko(e2.attackSkill), $o(e2.skillTypeAdd), _o(e2.skillTypeSeal), Uo(e2.skillAdd), Zo(e2.skillSeal), Jo(e2.equipWeaponType), Qo(e2.equipArmorType), em(e2.equipLock), tm(e2.equipSeal), am(e2.slotType), rm(e2.actionPlus), im(e2.specialFlag), nm(e2.collaps), om(e2.partyAbility)], Eo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 11,
  dataSource: pm()
}), Fo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), Bo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 13,
  dataSource: mm()
}), Ho = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 14, dataSource: mm() }), Lo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), Vo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), Wo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), Oo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 31, dataSource: pm() }), Go = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 32,
  dataSource: mm()
}), Xo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 33 }), Yo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 34 }), Ko = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 35,
  dataSource: sm()
}), $o = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 41, dataSource: lm() }), _o = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 42,
  dataSource: lm()
}), Uo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 43, dataSource: sm() }), Zo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 44, dataSource: sm() }), Jo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 51,
  dataSource: dm()
}), Qo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 52, dataSource: cm() }), em = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 53,
  dataSource: um()
}), tm = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 54, dataSource: um() }), am = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 55, dataSource: um() }), rm = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 61
}), im = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), nm = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), om = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), mm = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), sm = () => ({ author: "rmmz", module: "data", kind: "skill" }), pm = () => ({ author: "rmmz", module: "system", kind: "elements" }), lm = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), dm = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), cm = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), um = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), ym = {
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
}, gm = () => ({ rpg: { damage: qa, data: Ra, traits: Ti, itemEffect: En }, global: ym }), bm = (e2 = {}) => ({
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
}), Im = {
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
}, fm = {
  type: "object",
  additionalProperties: false,
  required: ["type", "weaponImageId"],
  properties: { type: { type: "number" }, weaponImageId: { type: "number" } }
}, hm = (e2) => "number" == typeof e2 && !Number.isNaN(e2), vm = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
}), km = (e2 = {}) => [vm(e2.cursor), vm(e2.ok), vm(e2.cancel), vm(e2.buzzer), vm(e2.equip), vm(e2.save), vm(e2.load), vm(e2.battleStart), vm(e2.escape), vm(e2.enemyAttack), vm(e2.enemyDamage), vm(e2.enemyCollapse), vm(e2.bossCollapes1), vm(e2.bossCollapes2), vm(e2.actorDamage), vm(e2.actorCollapse), vm(e2.playRecovery), vm(e2.playMiss), vm(e2.playEvasion), vm(e2.playMagicEvasion), vm(e2.playReflection), vm(e2.shop), vm(e2.useItem), vm(e2.useSkill)], xm = (e2) => ({
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
}), Tm = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }, Sm = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: Tm, victoryMe: Tm, gameoverMe: Tm, titleBgm: Tm, defeatMe: Tm, sounds: {
    type: "array",
    items: Tm,
    minItems: 24,
    maxItems: 24
  } }
}, wm = {
  type: "object",
  additionalProperties: false,
  required: ["magicSkills", "battleSystem"],
  properties: { magicSkills: {
    type: "array",
    items: { type: "number" },
    minItems: 0,
    uniqueItems: true
  }, battleSystem: { type: "number" } }
}, Nm = (e2) => e2.menuCommands[0], Pm = (e2) => e2.menuCommands[1], Rm = (e2) => e2.menuCommands[2], qm = (e2) => e2.menuCommands[3], Am = (e2) => e2.menuCommands[4], jm = (e2) => e2.menuCommands[5], Cm = (e2) => e2.itemCategories[0], Dm = (e2) => e2.itemCategories[1], Mm = (e2) => e2.itemCategories[2], zm = (e2) => e2.itemCategories[3], Em = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], Fm = (e2) => ({
  item: e2[0],
  weapon: e2[1],
  armor: e2[2],
  keyItem: e2[3]
}), Bm = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], Hm = (e2) => ({
  item: e2[0],
  skill: e2[1],
  equip: e2[2],
  status: e2[3],
  formation: e2[4],
  save: e2[5]
}), Lm = { required: ["itemCategories", "menuCommands"], additionalProperties: false, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, Vm = (e2 = {}) => ({
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
}), Wm = { type: "boolean" }, Om = {
  type: "object",
  additionalProperties: false,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: Wm,
    optDisplayTp: Wm,
    optDrawTitle: Wm,
    optExtraExp: Wm,
    optFloorDeath: Wm,
    optFollowers: Wm,
    optKeyItemsNumber: Wm,
    optSideView: Wm,
    optSlipDeath: Wm,
    optTransparent: Wm,
    optMessageSkip: Wm,
    optSplashScreen: Wm
  }
}, Gm = (e2 = {}) => ({
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0,
  partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1]
}), Xm = {
  additionalProperties: false,
  type: "object",
  required: ["startMapId", "startX", "startY", "partyMembersArray"],
  properties: { startMapId: { type: "integer", minimum: 0 }, startX: { type: "integer", minimum: 0 }, startY: { type: "integer", minimum: 0 }, partyMembersArray: { type: "array", items: {
    type: "integer",
    minimum: 0
  } } }
}, Ym = { additionalProperties: false, type: "object", required: ["tileSize", "faceSize", "iconSize"], properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: {
  type: "integer",
  minimum: 0
}, iconSize: { type: "integer", minimum: 0 } } }, Km = { additionalProperties: false, type: "object", required: ["title1Name", "title2Name"], properties: { title1Name: { type: "string" }, title2Name: {
  type: "string"
} } }, $m = { type: "object", additionalProperties: false, required: ["locale", "versionId", "windowTone"], properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
  type: "array",
  items: { type: "number" },
  minItems: 4,
  maxItems: 4
} } }, _m = (e2, t2) => ({
  name: e2,
  id: t2
}), Um = (e2) => e2.variables.map(_m), Zm = (e2) => e2.elements.map(_m), Jm = (e2) => e2.equipTypes.map(_m), Qm = (e2) => e2.skillTypes.map(_m), es = (e2) => e2.weaponTypes.map(_m), ts = (e2) => e2.armorTypes.map(_m), as = (e2) => e2.switches.map(_m), rs = (e2, t2) => [ns(e2, t2), os(e2, t2), ls(e2, t2), ms(e2, t2), is(e2, t2), ss(e2, t2), ps(e2, t2)], is = (e2, t2) => ({
  items: ts(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), ns = (e2, t2) => ({ items: Zm(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), os = (e2, t2) => ({ items: Jm(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), ms = (e2, t2) => ({
  items: Qm(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), ss = (e2, t2) => ({ items: Um(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), ps = (e2, t2) => ({ items: as(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), ls = (e2, t2) => ({
  items: es(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), ds = { type: "array", items: { type: "string" } }, cs = {
  additionalProperties: false,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: ds,
    skillTypes: ds,
    elements: ds,
    variables: ds,
    equipTypes: ds,
    switches: ds,
    armorTypes: ds
  }
}, us = (e2) => ({
  armorTypes: ys(e2.armorTypes),
  elements: ys(e2.elements),
  equipTypes: ys(e2.equipTypes),
  weaponTypes: ys(e2.weaponTypes),
  skillTypes: ys(e2.skillTypes),
  variables: ys(e2.variables),
  switches: ys(e2.switches)
}), ys = (e2) => e2 ? [...e2] : [], gs = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], bs = (e2) => ({
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
}), Is = (e2) => fs(e2, ""), fs = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], hs = (e2) => ({
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
}), vs = (e2, t2) => "string" == typeof e2 ? e2 : t2, ks = (e2) => ({
  actionFailure: vs(e2.actionFailure, "Action failed."),
  actorDamage: vs(e2.actorDamage, "%1 took %2 damage."),
  actorRecovery: vs(e2.actorRecovery, "%1 recovered %2 HP."),
  actorGain: vs(e2.actorGain, "%1 gained %2."),
  actorLoss: vs(e2.actorLoss, "%1 lost %2."),
  actorDrain: vs(e2.actorDrain, "%1 drained %2 HP."),
  actorNoDamage: vs(e2.actorNoDamage, "%1 was not damaged."),
  actorNoHit: vs(e2.actorNoHit, "%1 was not hit."),
  alwaysDash: vs(e2.alwaysDash, "Always dash."),
  bgmVolume: vs(e2.bgmVolume, "BGM volume"),
  bgsVolume: vs(e2.bgsVolume, "BGS volume"),
  commandRemember: vs(e2.commandRemember, "Command remember."),
  criticalToActor: vs(e2.criticalToActor, "%1 dealt %2 damage to %3."),
  criticalToEnemy: vs(e2.criticalToEnemy, "%1 dealt %2 damage to %3."),
  counterAttack: vs(e2.counterAttack, "%1 countered!"),
  debuffAdd: vs(e2.debuffAdd, "%1's %2 was lowered."),
  defeat: vs(e2.defeat, "Defeat."),
  enemyDamage: vs(e2.enemyDamage, "%1 took %2 damage."),
  enemyDrain: vs(e2.enemyDrain, "%1 drained %2 HP."),
  enemyGain: vs(e2.enemyGain, "%1 gained %2."),
  enemyLoss: vs(e2.enemyLoss, "%1 lost %2."),
  enemyNoDamage: vs(e2.enemyNoDamage, "%1 was not damaged."),
  enemyNoHit: vs(e2.enemyNoHit, "%1 was not hit."),
  enemyRecovery: vs(e2.enemyRecovery, "%1 recovered %2 HP."),
  evasion: vs(e2.evasion, "%1 evaded the attack!"),
  autosave: vs(e2.autosave, "Autosave"),
  escapeFailure: vs(e2.escapeFailure, "Escape failed."),
  escapeStart: vs(e2.escapeStart, "%1 started to escape!"),
  emerge: vs(e2.emerge, "%1 appeared!"),
  expNext: vs(e2.expNext, "Next level in %1 EXP."),
  expTotal: vs(e2.expTotal, "Total EXP: %1"),
  file: vs(e2.file, "File"),
  buffAdd: vs(e2.buffAdd, "%1's %2 was raised."),
  buffRemove: vs(e2.buffRemove, "%1's %2 was lowered."),
  obtainExp: vs(e2.obtainExp, "%1 EXP obtained."),
  obtainGold: vs(e2.obtainGold, "%1 gold obtained."),
  obtainItem: vs(e2.obtainItem, "%1 obtained %2."),
  obtainSkill: vs(e2.obtainSkill, "%1 learned %2."),
  levelUp: vs(e2.levelUp, "%1 leveled up!"),
  partyName: vs(e2.partyName, "Party"),
  loadMessage: vs(e2.loadMessage, "Load %1?"),
  meVolume: vs(e2.meVolume, "ME volume"),
  possession: vs(e2.possession, "Possession"),
  preemptive: vs(e2.preemptive, "%1 attacked first!"),
  saveMessage: vs(e2.saveMessage, "Save %1?"),
  seVolume: vs(e2.seVolume, "SE volume"),
  magicEvasion: vs(e2.magicEvasion, "%1 evaded the magic!"),
  magicReflection: vs(e2.magicReflection, "%1 reflected the magic!"),
  substitute: vs(e2.substitute, "%1 took the hit!"),
  surprise: vs(e2.surprise, "%1 surprised the enemy!"),
  touchUI: vs(e2.touchUI, "Touch UI"),
  useItem: vs(e2.useItem, "%1 used %2."),
  victory: vs(e2.victory, "Victory!")
}), xs = { type: "string" }, Ts = {
  type: "string",
  nullable: true
}, Ss = { type: "string" }, ws = { required: ["terms", "currencyUnit", "gameTitle"], additionalProperties: false, type: "object", properties: {
  currencyUnit: { type: "string" },
  gameTitle: { type: "string" },
  terms: { additionalProperties: false, type: "object", required: ["messages", "commands", "basic", "params"], properties: { messages: {
    type: "object",
    additionalProperties: false,
    required: ["actionFailure", "actorDamage", "actorNoDamage", "actorRecovery", "actorGain", "actorLoss", "actorDrain", "alwaysDash", "bgmVolume", "bgsVolume", "commandRemember", "criticalToActor", "criticalToEnemy", "counterAttack", "debuffAdd", "defeat", "enemyDamage", "enemyNoDamage", "enemyRecovery", "enemyGain", "enemyLoss", "enemyDrain", "evasion", "expNext", "expTotal", "escapeFailure", "escapeStart", "file", "loadMessage", "meVolume", "magicEvasion", "magicReflection", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "partyName", "preemptive", "saveMessage", "seVolume", "substitute", "touchUI", "victory", "useItem"],
    properties: {
      actionFailure: Ss,
      actorDamage: Ss,
      actorNoDamage: Ss,
      actorRecovery: Ss,
      actorGain: Ss,
      actorLoss: Ss,
      actorDrain: Ss,
      alwaysDash: Ss,
      bgmVolume: Ss,
      bgsVolume: Ss,
      commandRemember: Ss,
      criticalToActor: Ss,
      criticalToEnemy: Ss,
      counterAttack: Ss,
      debuffAdd: Ss,
      defeat: Ss,
      enemyDamage: Ss,
      enemyNoDamage: Ss,
      enemyRecovery: Ss,
      enemyGain: Ss,
      enemyLoss: Ss,
      enemyDrain: Ss,
      evasion: Ss,
      expNext: Ss,
      expTotal: Ss,
      escapeFailure: Ss,
      escapeStart: Ss,
      file: Ss,
      loadMessage: Ss,
      meVolume: Ss,
      magicEvasion: Ss,
      magicReflection: Ss,
      obtainExp: Ss,
      obtainGold: Ss,
      obtainItem: Ss,
      obtainSkill: Ss,
      partyName: Ss,
      preemptive: Ss,
      saveMessage: Ss,
      seVolume: Ss,
      substitute: Ss,
      touchUI: Ss,
      victory: Ss,
      useItem: Ss,
      buffAdd: Ss,
      buffRemove: Ss,
      actorNoHit: Ss,
      enemyNoHit: Ss,
      autosave: Ss,
      emerge: Ss,
      levelUp: Ss,
      possession: Ss,
      surprise: Ss
    }
  }, commands: {
    type: "array",
    items: [xs, xs, xs, xs, xs, xs, xs, xs, xs, xs, xs, xs, xs, xs, xs, xs, xs, xs, xs, xs, Ts, xs, xs, Ts, xs, xs],
    minItems: 26,
    maxItems: 26
  }, basic: { type: "array", items: { type: "string" }, minItems: 10, maxItems: 10 }, params: {
    type: "array",
    items: { type: "string", minLength: 1 },
    minItems: 10,
    maxItems: 10,
    uniqueItems: true
  } } }
} }, Ns = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], Ps = (e2) => e2.terms.params.map((e3, t2) => ({
  name: e3,
  id: t2
})), Rs = (e2) => ({ background: e2.background ?? 0, offsetX: e2.offsetX ?? 0, offsetY: e2.offsetY ?? 0 }), qs = {
  additionalProperties: false,
  type: "object",
  required: ["background", "offsetX", "offsetY"],
  properties: { background: { type: "integer", minimum: 0, maximum: 1e3 }, offsetX: { type: "integer", minimum: -1e3, maximum: 1e3 }, offsetY: { type: "integer", minimum: -1e3, maximum: 1e3 } }
}, As = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: vm(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), js = {
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
}, Cs = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), Ds = { additionalProperties: false, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: {
  type: "integer",
  minimum: 1
}, equips: { type: "array", items: { type: "integer" } } } }, Ms = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: Ds },
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
}, zs = { title: "オプション", options: {
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
} }, Es = {
  title: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, Fs = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Bs = { title: "コマンド", options: {
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
} }, Hs = {
  additionalProperties: false,
  required: ["airship", "boat", "ship", "advanced", "attackMotions"],
  type: "object",
  properties: { airship: js, boat: js, ship: js, advanced: Im, attackMotions: { type: "array", items: fm } }
}, Ls = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), { required: [], properties: {} }), Vs = new e({
  strict: true,
  code: { source: false }
}), Ws = ((e2) => {
  const t2 = Ls(e2);
  return { additionalProperties: false, type: "object", required: Array.from(new Set(t2.required)), properties: t2.properties };
})([Hs, Sm, wm, Lm, Om, Xm, Ym, $m, cs, ws, Km, Ms]), Os = Vs.compile(Ws), Gs = (e2) => Os(e2), Xs = Vs.compile(Ds);
Vs.compile(fm);
const Ys = Vs.compile(Ym), Ks = (e2) => {
  var _a2, _b, _c, _d2, _e2, _f, _g, _h, _i2, _j, _k, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u, _v;
  const t2 = Us(e2.size);
  return {
    ...Vm(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: km(e2.sounds),
    editor: Cs(e2.editing),
    advanced: bm(e2.advanced),
    title1Name: ((_c = e2.images) == null ? void 0 : _c.title1Name) ?? "",
    title2Name: ((_d2 = e2.images) == null ? void 0 : _d2.title2Name) ?? "",
    ...us(e2.dataNames ?? {}),
    magicSkills: _s([]),
    airship: As((_e2 = e2.vehicles) == null ? void 0 : _e2.airship),
    boat: As((_f = e2.vehicles) == null ? void 0 : _f.boat),
    ship: As((_g = e2.vehicles) == null ? void 0 : _g.ship),
    defeatMe: vm((_h = e2.me) == null ? void 0 : _h.defeatMe),
    gameoverMe: vm((_i2 = e2.me) == null ? void 0 : _i2.gameoverMe),
    titleBgm: vm((_j = e2.bgm) == null ? void 0 : _j.titleBgm),
    tileSize: t2.tileSize,
    faceSize: t2.faceSize,
    iconSize: t2.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((_k = e2.battleTest) == null ? void 0 : _k.battleback1Name) ?? "",
    battleback2Name: ((_l2 = e2.battleTest) == null ? void 0 : _l2.battleback2Name) ?? "",
    testTroopId: ((_m2 = e2.battleTest) == null ? void 0 : _m2.testTroopId) ?? 0,
    testBattlers: Zs((_n2 = e2.battleTest) == null ? void 0 : _n2.testBattlers, Js),
    battleBgm: vm((_o2 = e2.bgm) == null ? void 0 : _o2.battleBgm),
    victoryMe: vm((_p2 = e2.me) == null ? void 0 : _p2.victoryMe),
    editMapId: ((_q = e2.editorTemporary) == null ? void 0 : _q.editMapId) ?? 0,
    battlerName: ((_r2 = e2.editorTemporary) == null ? void 0 : _r2.battlerName) ?? "",
    locale: "",
    startMapId: ((_s2 = e2.gameInit) == null ? void 0 : _s2.startMapId) ?? 0,
    startX: ((_t2 = e2.gameInit) == null ? void 0 : _t2.startX) ?? 0,
    startY: ((_u = e2.gameInit) == null ? void 0 : _u.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: $s(e2.terms ?? {}),
    itemCategories: Em(e2.itemCategories),
    partyMembersArray: _s((_v = e2.gameInit) == null ? void 0 : _v.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: Bm(e2.menuComamnds)
  };
}, $s = (e2) => ({
  basic: gs(e2.basic ?? {}),
  commands: Is(e2.commands ?? {}),
  params: Ns(e2.params ?? {}),
  messages: ks(e2.messages ?? {})
}), _s = (e2) => e2 ? [...e2] : [], Us = (e2) => ((e3) => Ys(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Zs = (e2, t2) => e2 ? e2.map(t2) : [], Js = (e2) => ((e3) => Xs(e3))(e2) ? { actorId: e2.actorId, equips: _s(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, Qs = (e2, t2, a2, r2, i2, n2) => [...Si(a2, r2), ...fa(e2, t2), ...rs(i2, n2)], ep = (e2, t2) => Wi(zo(t2), e2), tp = (e2, t2, a2) => {
  const r2 = In(t2);
  return Wi(a2 ? [...r2, ...a2] : r2, e2);
}, ap = (e2) => Object.entries(e2).map(([, e3]) => e3.title), rp = (e2, t2 = 0) => ({ code: 320, parameters: [e2.actorId, e2.name], indent: t2 }), ip = (e2, t2 = 0) => ({
  code: 324,
  parameters: [e2.actorId, e2.nickname],
  indent: t2
}), np = (e2, t2 = 0) => ({ code: 325, parameters: [e2.actorId, e2.profile], indent: t2 }), op = (e2, t2) => mp(e2, vm({ name: t2 })), mp = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [vm(t2)],
  indent: a2
}), sp = (e2, t2 = 0) => mp(241, e2, t2), pp = (e2, t2 = 0) => mp(245, e2, t2), lp = (e2, t2 = 0) => mp(249, e2, t2), dp = (e2, t2 = 0) => mp(250, e2, t2), cp = (e2, t2 = 0) => mp(132, e2, t2), up = (e2, t2 = 0) => mp(133, e2, t2), yp = (e2, t2 = 0) => mp(139, e2, t2), gp = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: Ip(e2 ?? {})
}), bp = (e2) => ({ eventId: e2[0] }), Ip = (e2) => [e2.eventId ?? 0], fp = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), hp = (e2) => [e2.min, e2.max, e2.value], vp = (e2, t2 = 0) => ({
  code: 121,
  indent: t2,
  parameters: hp(e2)
}), kp = (e2) => [e2], xp = (e2) => ({ comment: e2[0] }), Tp = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: kp(e2) }), Sp = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: kp(e2)
}), wp = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Tp(e3, t2) : Sp(e3, t2)), Np = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], Pp = (e2) => ({ variableId: e2[0], digits: e2[1] }), Rp = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: Np(e2 ?? {})
}), qp = (e2 = {}) => [(e2 == null ? void 0 : e2.speed) ?? 4, (e2 == null ? void 0 : e2.skip) ?? false], Ap = (e2) => ({ speed: e2[0], skip: e2[1] }), jp = (e2 = {}, t2 = 0) => ({ code: 105, indent: t2, parameters: qp(e2) }), Cp = (e2 = "") => [e2], Dp = (e2) => ({ content: e2[0] }), Mp = (e2 = "", t2 = 0) => ({
  code: 405,
  indent: t2 ?? 0,
  parameters: Cp(e2)
}), zp = (e2, t2 = 0) => ({ code: 402, indent: t2, parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""] }), Ep = (e2) => ({ index: e2[0], name: e2[1] }), Fp = (e2) => [e2.index ?? 0, e2.name ?? ""], Bp = (e2) => ({
  choices: e2[0],
  cancelType: e2[1],
  defaultType: e2[2],
  positionType: e2[3],
  background: e2[4]
}), Hp = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], Lp = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), Vp = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), Wp = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), Op = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), Gp = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName], Xp = (e2, t2 = 0) => ({ code: 401, indent: t2, parameters: [e2] }), Yp = (e2, t2 = 0) => ({
  code: 355,
  indent: t2,
  parameters: [e2]
}), Kp = (e2, t2 = 0) => ({ code: 655, indent: t2, parameters: [e2] }), $p = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Yp(e3, t2) : Kp(e3, t2)), _p = 0, Up = 1, Zp = 2, Jp = 3, Qp = 4, el = {
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
}, tl = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], al = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], rl = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], il = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], nl = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], ol = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], ml = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, el[t2.param]], sl = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, pl = (e2, t2) => {
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
}, ll = (e2) => [...e2], dl = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: ll(e2.parameters)
}), cl = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, ul = (e2) => e2.parameters.every(cl), yl = new e({ code: { source: false }, strict: true }), gl = yl.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: {
    type: "array",
    minItems: 2,
    maxItems: 2,
    items: [{ type: "integer", minimum: 0 }, { type: "string" }]
  } },
  additionalProperties: false
}), bl = (e2) => gl(e2), Il = yl.compile({
  type: "object",
  properties: { code: { type: "number", const: 105 }, indent: {
    type: "integer",
    minimum: 0
  }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } },
  required: ["code", "indent", "parameters"]
}), fl = (e2) => Il(e2), hl = yl.compile({ type: "object", required: ["code", "parameters", "indent"], properties: {
  code: { type: "integer", enum: [132, 133, 139, 241, 245, 249, 250] },
  indent: { type: "integer" },
  parameters: { type: "array", minItems: 1, maxItems: 1, items: [{
    type: "object",
    properties: { name: { type: "string" }, volume: { type: "integer" }, pitch: { type: "integer" }, pan: { type: "integer" } },
    required: ["name", "volume", "pitch", "pan"],
    additionalProperties: false
  }] }
}, additionalProperties: false }), vl = (e2) => hl(e2), kl = yl.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
    type: "integer",
    enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
  } },
  additionalProperties: false
}), xl = (e2) => kl(e2), Tl = yl.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), Sl = (e2) => Tl(e2), wl = yl.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), Nl = (e2) => wl(e2), Pl = yl.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } },
  required: ["code", "indent", "parameters"]
}), Rl = (e2) => Pl(e2), ql = yl.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 402
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } },
  required: ["code", "indent", "parameters"]
}), Al = (e2) => ql(e2), jl = yl.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), Cl = (e2) => jl(e2), Dl = yl.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), Ml = (e2) => Dl(e2), zl = (e2) => vl(e2) && 241 === e2.code, El = (e2) => vl(e2) && 245 === e2.code, Fl = (e2) => vl(e2) && 249 === e2.code, Bl = (e2) => vl(e2) && 250 === e2.code, Hl = (e2) => vl(e2) && 132 === e2.code, Ll = (e2) => vl(e2) && 133 === e2.code, Vl = (e2) => vl(e2) && 139 === e2.code, Wl = (e2) => Sl(e2) && 401 === e2.code, Ol = (e2) => Sl(e2) && 405 === e2.code, Gl = (e2) => Sl(e2) && 108 === e2.code, Xl = (e2) => Sl(e2) && 408 === e2.code, Yl = (e2) => Sl(e2) && 355 === e2.code, Kl = (e2) => Sl(e2) && 655 === e2.code, $l = "bgm", _l = "se", Ul = "me", Zl = "bgs", Jl = "battlebacks1", Ql = "battlebacks2", ed = "characters", td = "enemies", ad = "faces", rd = "parallaxes", id = "pictures", nd = "sv_actors", od = "sv_enemies", md = "system", sd = "tilesets", pd = "titles1", ld = "titles2", dd = "System.json", cd = "Actors.json", ud = "Classes.json", yd = "Skills.json", gd = "Items.json", bd = "Weapons.json", Id = "Armors.json", fd = "Enemies.json", hd = "Troops.json", vd = "States.json", kd = "Animations.json", xd = "Tilesets.json", Td = "CommonEvents.json", Sd = "MapInfos.json", wd = "data", Nd = "img", Pd = "audio", Rd = "js", qd = (e2, t2) => ({
  type: "array",
  items: t2,
  ...Ad(e2),
  ...jd(e2.default)
}), Ad = (e2) => ({ ..."string" == typeof e2.text ? { title: e2.text } : {}, ..."string" == typeof e2.desc ? { description: e2.desc } : {} }), jd = (e2) => void 0 !== e2 ? {
  default: e2
} : {}, Cd = (e2) => void 0 === e2 || 0 === e2, Dd = (e2) => qd(e2, { type: "string" }), Md = (e2) => {
  switch (e2.kind) {
    case "string":
    case "multiline_string":
      return ((e3) => ({
        type: "string",
        ...Ad(e3),
        ...jd(e3.default)
      }))(e2);
    case "file":
    case "combo":
      return ((e3) => ({ type: "string", ...jd(e3.default), ...Ad(e3) }))(e2);
    case "select":
      return ((e3) => ({ type: "string", ...jd(e3.default), ...Ad(e3), ...e3.options ? {
        enum: e3.options.map((e4) => e4.value)
      } : {} }))(e2);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return Dd(e2);
    case "number[]":
      return ((e3) => ({ type: "array", items: {
        type: Cd(e3.decimals) ? "integer" : "number"
      }, ...jd(e3.default), ...Ad(e3) }))(e2);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ((e3) => qd(e3, { type: "integer" }))(e2);
    case "number":
      return ((e3) => ({ type: Cd(e3.decimals) ? "integer" : "number", ...jd(e3.default), ...Ad(e3) }))(e2);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((e3) => ({ type: "integer", ...jd(e3.default), ...Ad(e3) }))(e2);
    case "boolean":
      return ((e3) => ({ type: "boolean", ...jd(e3.default), ...Ad(e3) }))(e2);
    case "struct":
      return { $ref: `#/definitions/${(t2 = e2).struct}`, ...Ad(t2) };
    default:
      return {};
  }
  var t2;
}, zd = (e2, t2) => Object.entries(t2).reduce((t3, [a2, r2]) => {
  if (a2 in e2) {
    const i2 = e2[a2];
    if ("string" == typeof i2) return { ...t3, [a2]: r2(i2) };
  }
  return t3;
}, {}), Ed = (e2, t2, a2, r2) => ({
  default: t2,
  ...zd(a2, r2),
  kind: e2
}), Fd = (e2, t2, a2) => ({ default: [], ...zd(t2, a2), kind: e2 }), Bd = "help", Hd = "kind", Ld = "text", Vd = "struct", Wd = (e2) => {
  const t2 = JSON.parse(e2);
  return Array.isArray(t2) ? t2.map(Od) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, Od(t3)])) : t2;
}, Od = (e2) => {
  if ("string" != typeof e2) return e2;
  try {
    const t2 = JSON.parse(e2);
    return Array.isArray(t2) ? t2.map(Od) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, Od(t3)])) : t2;
  } catch {
    return e2;
  }
}, Gd = (e2) => {
  if (Hd in e2.attr) {
    const t2 = Jd[e2.attr.kind];
    if (t2) return t2(e2);
  }
  return Ed("any", "", e2.attr, Kd);
}, Xd = (e2) => e2, Yd = (e2) => e2.replace("[", "").replace("]", "").split(",").map((e3) => parseFloat(e3.replaceAll('"', "").trim())).filter((e3) => !isNaN(e3)), Kd = {
  default: Xd,
  text: Xd,
  desc: Xd,
  parent: Xd
}, $d = (e2) => Ed("string", "", e2.attr, Kd), _d = (e2) => {
  const t2 = { default: (e3) => Wd(e3), text: Xd, desc: Xd, parent: Xd };
  return Fd("string[]", e2.attr, t2);
}, Ud = (e2, t2) => {
  const a2 = {
    default: Yd,
    text: Xd,
    desc: Xd,
    parent: Xd
  };
  return Fd(t2, e2.attr, a2);
}, Zd = (e2, t2) => {
  const a2 = { default: (e3) => parseInt(e3, 10), text: Xd, desc: Xd, parent: Xd };
  return Ed(t2, 0, e2.attr, a2);
}, Jd = {
  number: (e2) => ((e3) => {
    const t2 = {
      default: (e4) => parseFloat(e4),
      text: Xd,
      desc: Xd,
      decimals: (e4) => parseInt(e4, 10),
      min: (e4) => parseFloat(e4),
      max: (e4) => parseFloat(e4),
      parent: Xd
    };
    return Ed("number", 0, e3.attr, t2);
  })(e2),
  "number[]": (e2) => {
    const t2 = { default: Yd, text: Xd, desc: Xd, decimals: (e3) => parseInt(e3, 10), min: (e3) => parseFloat(e3), max: (e3) => parseFloat(e3), parent: Xd };
    return Fd("number[]", e2.attr, t2);
  },
  string: $d,
  "string[]": _d,
  multiline_string: $d,
  "multiline_string[]": _d,
  combo: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => e3.option)) ?? [];
    return { ...Ed("combo", "", e2.attr, Kd), options: t2 };
  },
  select: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => ({ option: e3.option, value: e3.value }))) ?? [];
    return { ...Ed("select", "", e2.attr, Kd), options: t2 };
  },
  actor: (e2) => Zd(e2, "actor"),
  "actor[]": (e2) => Ud(e2, "actor[]"),
  class: (e2) => Zd(e2, "class"),
  "class[]": (e2) => Ud(e2, "class[]"),
  skill: (e2) => Zd(e2, "skill"),
  "skill[]": (e2) => Ud(e2, "skill[]"),
  item: (e2) => Zd(e2, "item"),
  "item[]": (e2) => Ud(e2, "item[]"),
  weapon: (e2) => Zd(e2, "weapon"),
  "weapon[]": (e2) => Ud(e2, "weapon[]"),
  armor: (e2) => Zd(e2, "armor"),
  "armor[]": (e2) => Ud(e2, "armor[]"),
  state: (e2) => Zd(e2, "state"),
  "state[]": (e2) => Ud(e2, "state[]"),
  enemy: (e2) => Zd(e2, "enemy"),
  "enemy[]": (e2) => Ud(e2, "enemy[]"),
  common_event: (e2) => Zd(e2, "common_event"),
  "common_event[]": (e2) => Ud(e2, "common_event[]"),
  switch: (e2) => Zd(e2, "switch"),
  "switch[]": (e2) => Ud(e2, "switch[]"),
  variable: (e2) => Zd(e2, "variable"),
  "variable[]": (e2) => Ud(e2, "variable[]"),
  troop: (e2) => Zd(e2, "troop"),
  "troop[]": (e2) => Ud(e2, "troop[]"),
  boolean: (e2) => {
    const t2 = {
      default: (e3) => "true" === e3,
      text: Xd,
      desc: Xd,
      on: Xd,
      off: Xd,
      parent: Xd
    };
    return Ed("boolean", true, e2.attr, t2);
  },
  file: (e2) => {
    const t2 = { default: Xd, text: Xd, desc: Xd, parent: Xd, dir: Xd };
    return { dir: "", ...Ed("file", "", e2.attr, t2) };
  },
  "file[]": (e2) => {
    const t2 = { default: (e3) => Wd(e3), text: Xd, desc: Xd, parent: Xd, dir: Xd };
    return { dir: "", ...Fd("file[]", e2.attr, t2) };
  }
}, Qd = "BODY", ec = "STRUCT", tc = "NONE", ac = (e2, t2) => {
  const a2 = e2.lines.length > 0 ? ic(e2) : e2, r2 = t2[1] || void 0;
  return { ...a2, structName: r2, blockType: r2 ? ec : "INVALID", locale: t2[2], lines: [] };
}, rc = (e2) => ({
  ...e2.lines.length > 0 ? ic(e2) : e2,
  blockType: Qd,
  structName: void 0,
  locale: void 0,
  lines: []
}), ic = (e2) => e2.blockType === Qd ? { ...e2, bodies: e2.bodies.concat([{ lines: [...e2.lines] }]), lines: [], blockType: tc } : e2.structName && e2.blockType === ec ? {
  ...e2,
  structs: e2.structs.concat([{ struct: e2.structName, locale: e2.locale, lines: [...e2.lines] }]),
  blockType: tc,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e2,
  blockType: tc,
  structName: void 0,
  lines: []
}, nc = (e2) => e2.currentOption ? { items: e2.items.concat({ option: e2.currentOption, value: e2.currentOption }) } : e2, oc = (e2) => ({
  ..."string" == typeof e2.desc ? { desc: e2.desc } : {},
  ..."string" == typeof e2.text ? { text: e2.text } : {}
}), mc = (e2) => {
  const t2 = sc(e2), a2 = lc(t2);
  return pc(a2);
}, sc = (e2) => {
  if (e2.currentParam && e2.currentOption) {
    const t2 = e2.currentParam.attr.kind;
    if ("select" === t2 || "combo" === t2) return { ...e2, currentParam: { ...e2.currentParam, options: nc(e2.currentOption).items } };
  }
  return e2;
}, pc = (e2) => e2.currentParam ? {
  ...e2,
  params: [...e2.params, e2.currentParam],
  currentParam: null,
  currentContext: null
} : e2, lc = (e2) => {
  if (e2.currentCommand) {
    const t2 = e2.currentParam ? [...e2.currentCommand.args, e2.currentParam] : e2.currentCommand.args, a2 = { ...oc(e2.currentCommand), command: e2.currentCommand.command, args: t2 };
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
}, dc = (e2, t2) => {
  const a2 = e2.lines.reduce((e3, a3) => {
    const r2 = a3.trim().replace(/^\*\s?/, "");
    if (!r2.startsWith("@")) return e3.currentContext === Bd ? { ...e3, helpLines: e3.helpLines.concat(r2) } : e3;
    const [i2, ...n2] = r2.slice(1).split(" "), o2 = n2.join(" ").trim(), m2 = t2[i2];
    return m2 ? m2(e3, o2) : e3;
  }, uc());
  return mc(a2);
}, cc = (e2, t2) => {
  const a2 = ((e3) => {
    const t3 = e3.split("\n"), a3 = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: tc
    }, r3 = t3.reduce((e4, t4) => {
      const a4 = t4.trim(), r4 = a4.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return r4 ? ac(e4, r4) : "/*:" === a4 ? rc(e4) : "*/" === a4 ? e4.lines.length > 0 ? ic(e4) : e4 : { ...e4, lines: e4.lines.concat([a4]) };
    }, a3);
    return { structs: r3.structs, bodies: r3.bodies };
  })(e2), r2 = a2.structs.map((e3) => ((e4) => {
    const t3 = dc(e4, bc);
    return { name: e4.struct, params: t3.params };
  })(e3)), i2 = ((e3) => {
    if (0 !== e3.bodies.length) return e3.bodies[0];
  })(a2);
  if (!i2) return {
    params: [],
    commands: [],
    meta: {},
    helpLines: [],
    structs: r2
  };
  const n2 = dc(i2, t2);
  return { params: n2.params, commands: n2.commands, meta: n2.meta, helpLines: n2.helpLines, structs: r2 };
}, uc = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), yc = (e2, t2, a2) => e2.currentParam && !(t2 in e2.currentParam.attr) ? {
  ...e2,
  currentParam: { ...e2.currentParam, attr: { ...e2.currentParam.attr, [t2]: a2 } }
} : e2, gc = (e2, t2, a2) => ({ ...e2, meta: { [t2]: a2, ...e2.meta } }), bc = {
  param: (e2, t2) => {
    const a2 = mc(e2);
    return a2.params.some((e3) => e3.name === t2) ? a2 : { ...a2, currentContext: "param", currentParam: { name: t2, attr: {} } };
  },
  text: (e2, t2) => e2.currentParam ? yc(e2, Ld, t2) : e2.currentCommand && !(Ld in e2.currentCommand) ? { ...e2, currentCommand: {
    ...oc(e2.currentCommand),
    command: e2.currentCommand.command,
    args: e2.currentCommand.args,
    [Ld]: t2
  } } : e2,
  desc: (e2, t2) => e2.currentParam ? yc(e2, "desc", t2) : e2.currentCommand ? { ...e2, currentCommand: { ...e2.currentCommand, desc: t2 } } : e2,
  command: (e2, t2) => {
    const a2 = mc(e2);
    return a2.commands.some((e3) => e3.command === t2) ? a2 : { ...a2, currentCommand: { command: t2, args: [] }, currentParam: null };
  },
  arg: (e2, t2) => {
    if (!e2.currentCommand) return e2;
    if (e2.currentParam) {
      const a2 = {
        ...oc(e2.currentCommand),
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
  help: (e2) => ({ ...mc(e2), currentContext: Bd }),
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
      const a2 = t2.slice(7, -1), r2 = yc(e2, Vd, a2);
      return yc(r2, Hd, Vd);
    }
    return e2.currentParam ? yc(e2, Hd, t2) : e2;
  },
  default: (e2, t2) => yc(e2, "default", t2),
  on: (e2, t2) => yc(e2, "on", t2),
  off: (e2, t2) => yc(e2, "off", t2),
  min: (e2, t2) => yc(e2, "min", t2),
  max: (e2, t2) => yc(e2, "max", t2),
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
  author: (e2, t2) => gc(e2, "author", t2),
  plugindesc: (e2, t2) => gc(e2, "plugindesc", t2),
  url: (e2, t2) => gc(e2, "url", t2)
}, Ic = (e2) => fc(((e3) => cc(e3, bc))(e2)), fc = (e2) => ({
  target: "MZ",
  meta: e2.meta,
  commands: vc(e2.commands),
  params: hc(e2.params)
}), hc = (e2) => e2.reduce((e3, t2) => ({ [t2.name]: Gd(t2), ...e3 }), {}), vc = (e2) => e2.reduce((e3, t2) => {
  const a2 = { desc: t2.desc, text: t2.text, args: hc(t2.args) };
  return { [t2.command]: a2, ...e3 };
}, {}), kc = (e2) => Ic(e2), xc = (e2) => ((e3) => {
  const t2 = Object.entries(e3).reduce((e4, [t3, a2]) => {
    const r2 = Md(a2);
    return { ...e4, [t3]: r2 };
  }, {});
  return {
    type: "object",
    properties: t2,
    required: Object.keys(t2),
    additionalProperties: false
  };
})(e2);
export {
  at as ABORT_BATTLE,
  Pi as AUTHOR_RMMZ,
  De as BATTLE_PROCESSING,
  Ge as CHANGE_ACTOR_IMAGES,
  B as CHANGE_ARMORS,
  Ae as CHANGE_BATTLE_BACKGROUND,
  L as CHANGE_BATTLE_BGM,
  Oe as CHANGE_CLASS,
  K as CHANGE_DEFEAT_ME,
  G as CHANGE_ENCOUNTER,
  $e as CHANGE_ENEMY_HP,
  _e as CHANGE_ENEMY_MP,
  Ue as CHANGE_ENEMY_STATE,
  it as CHANGE_ENEMY_TP,
  Ve as CHANGE_EXP,
  X as CHANGE_FORMATION_ACCESS,
  z as CHANGE_GOLD,
  Fe as CHANGE_HP,
  E as CHANGE_ITEMS,
  O as CHANGE_MENU_ACCESS,
  Be as CHANGE_MP,
  We as CHANGE_NAME,
  Ye as CHANGE_NICKNAME,
  je as CHANGE_PARALLAX,
  H as CHANGE_PARTY_MEMBER,
  ne as CHANGE_PLAYER_FOLLOWERS,
  Ke as CHANGE_PROFILE,
  W as CHANGE_SAVE_ACCESS,
  qe as CHANGE_TILESET,
  He as CHANGE_TP,
  te as CHANGE_TRANSPARENCY,
  $ as CHANGE_VEHICLE_BGM,
  Xe as CHANGE_VEHICLE_IMAGE,
  V as CHANGE_VICTORY_ME,
  F as CHANGE_WEAPONS,
  Y as CHANGE_WINDOW_COLOR,
  Ir as COLLAPS_BOSS,
  fr as COLLAPS_INSTANT,
  hr as COLLAPS_NONE,
  br as COLLAPS_NORMAL,
  k as COMMENT_BODY,
  v as COMMENT_HEAD,
  R as COMMON_EVENT,
  T as CONDITIONAL_BRANCH,
  S as CONDITIONAL_BRANCH_ELSE,
  D as CONTROL_SELF_SWITCH,
  j as CONTROL_SWITCHES,
  M as CONTROL_TIMER,
  C as CONTROL_VARIABLES,
  qa as DEFAULT_DAMAGE_LABELS,
  ym as DEFAULT_GLOBAL_LABELS,
  Hn as DEFAULT_ITEM_LABELS,
  Ln as DEFAULT_SKILL_LABELS,
  zs as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Es as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Vn as DEFAULT_USABLE_ITEM_LABELS,
  pn as EFFECT_ADD_BUFF,
  ln as EFFECT_ADD_DEBUFF,
  mn as EFFECT_ADD_STATE,
  bn as EFFECT_COMMON_EVENT,
  on as EFFECT_GAIN_TP,
  yn as EFFECT_GROW,
  gn as EFFECT_LEARN_SKILL,
  rn as EFFECT_RECOVER_HP,
  nn as EFFECT_RECOVER_MP,
  dn as EFFECT_REMOVE_BUFF,
  cn as EFFECT_REMOVE_DEBUFF,
  sn as EFFECT_REMOVE_STATE,
  un as EFFECT_SPECIAL,
  Je as ENEMY_APPEAR,
  Ze as ENEMY_RECOVER_ALL,
  Qe as ENEMY_TRANSFORM,
  ie as ERASE_EVENT,
  Ie as ERASE_PICTURE,
  P as EXIT_EVENT_PROCESSING,
  wr as EXTRA_PARAM_CEV,
  Rr as EXTRA_PARAM_CNT,
  Sr as EXTRA_PARAM_CRI,
  Tr as EXTRA_PARAM_EVA,
  xr as EXTRA_PARAM_HIT,
  qr as EXTRA_PARAM_HRG,
  Nr as EXTRA_PARAM_MEV,
  Pr as EXTRA_PARAM_MRF,
  Ar as EXTRA_PARAM_MRG,
  jr as EXTRA_PARAM_TRG,
  se as FADEIN_SCREEN,
  ve as FADEOUT_BGM,
  Se as FADEOUT_BGS,
  me as FADEOUT_SCREEN,
  cd as FILENAME_ACTORS,
  kd as FILENAME_ANIMATIONS,
  Id as FILENAME_ARMORS,
  ud as FILENAME_CLASSES,
  Td as FILENAME_COMMON_EVENTS,
  fd as FILENAME_ENEMIES,
  gd as FILENAME_ITEMS,
  Sd as FILENAME_MAP_INFOS,
  yd as FILENAME_SKILLS,
  vd as FILENAME_STATES,
  dd as FILENAME_SYSTEM,
  xd as FILENAME_TILESET,
  hd as FILENAME_TROOPS,
  bd as FILENAME_WEAPONS,
  ui as FLAG_ID_AUTO_BATTLE,
  yi as FLAG_ID_GUARD,
  bi as FLAG_ID_PRESERVE_TP,
  gi as FLAG_ID_SUBSTITUTE,
  le as FLASH_SCREEN,
  Pd as FOLDER_AUDIO,
  $l as FOLDER_AUDIO_BGM,
  Zl as FOLDER_AUDIO_BGS,
  Ul as FOLDER_AUDIO_ME,
  _l as FOLDER_AUDIO_SE,
  wd as FOLDER_DATA,
  Nd as FOLDER_IMG,
  Jl as FOLDER_IMG_BATTLEBACK1,
  Ql as FOLDER_IMG_BATTLEBACK2,
  ed as FOLDER_IMG_CHACTERS,
  td as FOLDER_IMG_ENEMIES,
  ad as FOLDER_IMG_FACES,
  rd as FOLDER_IMG_PARALLACES,
  id as FOLDER_IMG_PICTURES,
  nd as FOLDER_IMG_SV_ACTORS,
  od as FOLDER_IMG_SV_ENEMIES,
  md as FOLDER_IMG_SYSTEM,
  sd as FOLDER_IMG_TILESETS,
  pd as FOLDER_IMG_TITLES1,
  ld as FOLDER_IMG_TITLES2,
  Rd as FOLDER_JS,
  tt as FORCE_ACTION,
  ot as GAME_OVER,
  oe as GATHER_FOLLOWERS,
  Ce as GET_LOCATION_INFO,
  ee as GET_ONOFF_VEHICLE,
  en as HITTYPE_CERTAIN,
  an as HITTYPE_MAGICAL,
  tn as HITTYPE_PHYSICAL,
  b as INPUT_NUMBER,
  q as LABEL,
  Qi as LABELS_DATA_WEAPON,
  Fs as LABELS_SYSTEM_BATTLER_PARAMS,
  Bs as LABELS_SYSTEM_GAME_COMMANDS,
  A as LABEL_JUMP,
  Ra as LABEL_SET_DATA,
  En as LABEL_SET_ITEM_EFFECT,
  Ti as LABEL_SET_TRAIT,
  w as LOOP,
  N as LOOP_BREAK,
  To as MODULE_DATA,
  ye as MOVE_PICTURE,
  Ee as NAME_INPUT_PROCESSING,
  d as NO_OPERATION,
  rt as OPEN_MENU_SCREEN,
  nt as OPEN_SAVE_SCREEN,
  _p as OPERAND_CONSTANT,
  Jp as OPERAND_GAMEDATA,
  Zp as OPERAND_RANDOM,
  Qp as OPERAND_SCRIPT,
  Up as OPERAND_VARIABLE,
  mi as PARTY_ABILITY_CANCEL_SURPRISE,
  li as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  ni as PARTY_ABILITY_ENCOUNTER_HALF,
  oi as PARTY_ABILITY_ENCOUNTER_NONE,
  pi as PARTY_ABILITY_GOLD_DOUBLE,
  si as PARTY_ABILITY_RAISE_PREEMPTIVE,
  he as PLAY_BGM,
  Te as PLAY_BGS,
  we as PLAY_ME,
  Re as PLAY_MOVIE,
  Ne as PLAY_SE,
  lt as PLUGIN_COMMAND_MV,
  dt as PLUGIN_COMMAND_MZ,
  Le as RECOVER_ALL,
  Vr as REGULAR_PARAM_AGI,
  Fr as REGULAR_PARAM_ATK,
  Br as REGULAR_PARAM_DEF,
  Wr as REGULAR_PARAM_LUK,
  Hr as REGULAR_PARAM_MATK,
  zr as REGULAR_PARAM_MAX_HP,
  Er as REGULAR_PARAM_MAX_MP,
  Lr as REGULAR_PARAM_MDEF,
  xe as RESUME_BGM,
  mt as RETURN_TO_TITLE_SCREEN,
  ge as ROTATE_PICTURE,
  aa as ROUTE_CHANGE_BLEND_MODE,
  Ot as ROUTE_CHANGE_FREQ,
  ea as ROUTE_CHANGE_IMAGE,
  ta as ROUTE_CHANGE_OPACITY,
  Wt as ROUTE_CHANGE_SPEED,
  _t as ROUTE_DIR_FIX_OFF,
  $t as ROUTE_DIR_FIX_ON,
  ut as ROUTE_END,
  Pt as ROUTE_JUMP,
  St as ROUTE_MOVE_AWAY,
  Nt as ROUTE_MOVE_BACKWARD,
  yt as ROUTE_MOVE_DOWN,
  wt as ROUTE_MOVE_FORWARD,
  gt as ROUTE_MOVE_LEFT,
  ft as ROUTE_MOVE_LOWER_L,
  ht as ROUTE_MOVE_LOWER_R,
  xt as ROUTE_MOVE_RANDOM,
  bt as ROUTE_MOVE_RIGHT,
  Tt as ROUTE_MOVE_TOWARD,
  It as ROUTE_MOVE_UP,
  vt as ROUTE_MOVE_UPPER_L,
  kt as ROUTE_MOVE_UPPER_R,
  ra as ROUTE_PLAY_SE,
  ia as ROUTE_SCRIPT,
  Kt as ROUTE_STEP_ANIME_OFF,
  Yt as ROUTE_STEP_ANIME_ON,
  Vt as ROUTE_SWITCH_OFF,
  Lt as ROUTE_SWITCH_ON,
  Zt as ROUTE_THROUGH_OFF,
  Ut as ROUTE_THROUGH_ON,
  Qt as ROUTE_TRANSPARENT_OFF,
  Jt as ROUTE_TRANSPARENT_ON,
  zt as ROUTE_TURN_180D,
  Mt as ROUTE_TURN_90D_L,
  Dt as ROUTE_TURN_90D_R,
  Et as ROUTE_TURN_90D_R_L,
  Ht as ROUTE_TURN_AWAY,
  qt as ROUTE_TURN_DOWN,
  At as ROUTE_TURN_LEFT,
  Ft as ROUTE_TURN_RANDOM,
  jt as ROUTE_TURN_RIGHT,
  Bt as ROUTE_TURN_TOWARD,
  Ct as ROUTE_TURN_UP,
  Rt as ROUTE_WAIT,
  Xt as ROUTE_WALK_ANIME_OFF,
  Gt as ROUTE_WALK_ANIME_ON,
  ke as SAVE_BGM,
  ja as SCHEMA_DAMAGE,
  Ma as SCHEMA_DATA_ACTOR,
  Ea as SCHEMA_DATA_ARMMOR,
  Fa as SCHEMA_DATA_CLASS,
  Ha as SCHEMA_DATA_ENEMY,
  la as SCHEMA_DATA_MAP_INFO,
  Oa as SCHEMA_DATA_STATE,
  Ji as SCHEMA_DATA_WEAPON,
  Im as SCHEMA_SYSTEM_ADVANCED,
  Sm as SCHEMA_SYSTEM_AUDIOFILES,
  wm as SCHEMA_SYSTEM_BATTLE_RULE_RMMZ,
  Lm as SCHEMA_SYSTEM_BOOLEAN_GAMEMENU_OPTIONS,
  Om as SCHEMA_SYSTEM_BOOLEAN_OPTIONS,
  Ms as SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE,
  Xm as SCHEMA_SYSTEM_GAME_INITIAL,
  Ym as SCHEMA_SYSTEM_IMAGE_SIZE,
  fm as SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION,
  $m as SCHEMA_SYSTEM_OTHER_DATA,
  cs as SCHEMA_SYSTEM_RPG_DATA_NAMES,
  ws as SCHEMA_SYSTEM_TERMS_BUNDLE,
  qs as SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW,
  Km as SCHEMA_SYSTEM_TITLE_IMAGES,
  js as SCHEMA_SYSTEM_VEHICLE,
  Ni as SCHEMA_TRAIT,
  st as SCRIPT_EVAL,
  pt as SCRIPT_EVAL_BODY,
  J as SCROLL_MAP,
  I as SELECT_ITEM,
  Z as SET_EVENT_LOCATION,
  Q as SET_MOVEMENT_ROUTE,
  U as SET_VEHICLE_LOCATION,
  fe as SET_WEATHER_EFFECT,
  de as SHAKE_SCREEN,
  Me as SHOP_PROCESSING,
  ze as SHOP_PROCESSING_BODY,
  ae as SHOW_ANIMATION,
  re as SHOW_BALLOON_ICON,
  et as SHOW_BATTLE_ANIMATION,
  y as SHOW_CHOICES,
  g as SHOW_CHOICES_ITEM,
  c as SHOW_MESSAGE,
  u as SHOW_MESSAGE_BODY,
  ue as SHOW_PICTURE,
  f as SHOW_SCROLLING_TEXT,
  h as SHOW_SCROLLING_TEXT_BODY,
  x as SKIP,
  Fn as SPECIAL_EFFECT_ESCAPE,
  ti as SPECIAL_PARAM_EXR,
  ei as SPECIAL_PARAM_FDR,
  Kr as SPECIAL_PARAM_GRD,
  Ur as SPECIAL_PARAM_MCR,
  Qr as SPECIAL_PARAM_MDR,
  Jr as SPECIAL_PARAM_PDR,
  _r as SPECIAL_PARAM_PHA,
  $r as SPECIAL_PARAM_REC,
  Zr as SPECIAL_PARAM_TCR,
  Yr as SPECIAL_PARAM_TGR,
  Ri as SRC_COLOR,
  So as SRC_DATA_ACTOR,
  jo as SRC_DATA_ARMOR,
  Co as SRC_DATA_CLASS,
  Do as SRC_DATA_COMMON_EVNET,
  No as SRC_DATA_ENEMY,
  qo as SRC_DATA_ITEMS,
  wo as SRC_DATA_MAP,
  Ro as SRC_DATA_SKILL,
  Po as SRC_DATA_STATE,
  Mo as SRC_DATA_TROOP,
  Ao as SRC_DATA_WEAPON,
  Pe as STOP_SE,
  be as TINT_PICTURE,
  pe as TINT_SCREEN,
  cr as TRAIT_ACTION_PLUS,
  Ja as TRAIT_ATTACK_ELEMENT,
  ar as TRAIT_ATTACK_SKILL,
  er as TRAIT_ATTACK_SPEED,
  Qa as TRAIT_ATTACK_STATE,
  tr as TRAIT_ATTACK_TIMES,
  yr as TRAIT_COLLAPSE_TYPE,
  Ya as TRAIT_DEBUFF_RATE,
  Xa as TRAIT_ELEMENT_RATE,
  sr as TRAIT_EQUIP_ARMOR_TYPE,
  pr as TRAIT_EQUIP_LOCK,
  lr as TRAIT_EQUIP_SEAL,
  mr as TRAIT_EQUIP_WEAPON_TYPE,
  _a as TRAIT_PARAM,
  gr as TRAIT_PARTY_ABILITY,
  nr as TRAIT_SKILL_ADD,
  or as TRAIT_SKILL_SEAL,
  rr as TRAIT_SKILL_TYPE_ADD,
  ir as TRAIT_SKILL_TYPE_SEAL,
  dr as TRAIT_SLOT_TYPE,
  Za as TRAIT_SPARAM,
  ur as TRAIT_SPECIAL_FLAG,
  Ka as TRAIT_STATE_RATE,
  $a as TRAIT_STATE_RESIST,
  Ua as TRAIT_XPARAM,
  _ as TRANSFER_PLAYER,
  wi as TYPENAME_TRAIT,
  ce as WAIT,
  Ki as applyFormatRule,
  Qs as buildReferenceItemSources,
  Vp as cloneChoices,
  dl as cloneEventCommand,
  ll as cloneParameters,
  kr as collapsOptionsToArray,
  Di as compileFormatRule,
  tp as compileItemEffectDisplayData,
  ep as compileTraitDisplayData,
  xp as convertCommentArrayToObject,
  i as createActorControlChars,
  t as createControlCharFormat,
  ct as createEventCommand,
  go as createNoteEntity,
  n as createSystemVariableControlChars,
  fa as defineGameDataSources,
  rs as defineSystemItems,
  vr as defineTraitCollapseType,
  Cr as defineTraitExtraParam,
  Si as defineTraitItems,
  di as defineTraitPartyAbility,
  Or as defineTraitRegularParam,
  Ii as defineTraitSpecialFlag,
  ai as defineTraitSpecialParam,
  Bi as detectFormatErrors,
  ap as domainNames,
  Mr as extraParamName,
  Dr as extraParamsToArray,
  Bn as formatItemEffectText,
  Ui as formatTraitText,
  bp as fromArrayCommonEvent,
  fp as fromArrayControlSwitches,
  Pp as fromArrayInputNumber,
  Dp as fromArrayScrollingTextBody,
  Ap as fromArrayScrollingTextHeader,
  Bp as fromArraySetupChoice,
  Ep as fromArraySetupChoiceItem,
  Op as fromArrayShowMessageHeader,
  a as fromStringArray,
  pl as getActorValue,
  Mm as getArmorCategoryEnabled,
  ts as getArmorTypes,
  r as getControlChars,
  Zm as getElementTypes,
  sl as getEnemyValue,
  Rm as getEquipCommandEnabled,
  Jm as getEquipTypes,
  Am as getFormationCommandEnabled,
  Cm as getItemCategoryEnabled,
  Nm as getItemCommandEnabled,
  zm as getKeyItemCategoryEnabled,
  ko as getNoteValue,
  Ps as getParamNames,
  jm as getSaveCommandEnabled,
  Pm as getSkillCommandEnabled,
  Qm as getSkillTypes,
  qm as getStatusCommandEnabled,
  as as getSwitches,
  Um as getVariableNames,
  Dm as getWeaponCategoryEnabled,
  es as getWeaponTypes,
  ul as isCloneableCommand,
  vl as isCommandAudio,
  bl as isCommandChangeActorText,
  Hl as isCommandChangeBattleBgm,
  Vl as isCommandChangeDefeatMe,
  Ll as isCommandChangeVictoryMe,
  Xl as isCommandCommentBody,
  Gl as isCommandCommentHeader,
  Nl as isCommandCommonEvent,
  Cl as isCommandInputNumber,
  xl as isCommandNonParam,
  zl as isCommandPlayBgm,
  El as isCommandPlayBgs,
  Fl as isCommandPlayMe,
  Bl as isCommandPlaySe,
  Kl as isCommandScriptBody,
  Yl as isCommandScriptHeader,
  fl as isCommandScrollTextHead,
  Al as isCommandShowChoiceItem,
  Rl as isCommandShowChoices,
  Ml as isCommandShowMessage,
  Wl as isCommandShowMessageBody,
  Ol as isCommandShowScrollingTextBody,
  Sl as isCommandTextBody,
  ro as isDataActor,
  no as isDataArmor,
  yo as isDataClass,
  po as isDataEnemy,
  Qn as isDataItem,
  Ia as isDataMap,
  ba as isDataMapInfo,
  to as isDataSkill,
  co as isDataState,
  Gs as isDataSystem,
  mo as isDataWeapon,
  hm as isValidNumber,
  gm as labelsRegistry,
  Ca as makeActorData,
  za as makeArmorData,
  op as makeAudioCommand,
  vm as makeAudioFileParams,
  Vm as makeBooleanOptions,
  Ba as makeClassData,
  mp as makeCommandAudioAny,
  rp as makeCommandChangeActorName,
  ip as makeCommandChangeActorNickName,
  np as makeCommandChangeActorProfile,
  cp as makeCommandChangeBattleBGM,
  yp as makeCommandChangeDefeatME,
  up as makeCommandChangeVictoryME,
  Sp as makeCommandCommentBody,
  Tp as makeCommandCommentHeader,
  gp as makeCommandCommonEvent,
  vp as makeCommandControlSwitches,
  Rp as makeCommandInputNumber,
  sp as makeCommandPlayBGM,
  pp as makeCommandPlayBGS,
  lp as makeCommandPlayME,
  dp as makeCommandPlaySE,
  $p as makeCommandScriptArray,
  Kp as makeCommandScriptBody,
  Yp as makeCommandScriptHeader,
  Mp as makeCommandScrollingTextBody,
  jp as makeCommandScrollingTextHeader,
  Lp as makeCommandSetupChoice,
  zp as makeCommandShowChoiceItem,
  Wp as makeCommandShowMessage,
  Xp as makeCommandShowMessageBody,
  kp as makeCommentArray,
  wp as makeCommentCommandArray,
  o as makeCommonEventData,
  Aa as makeDamage,
  us as makeDataNames,
  La as makeDropItem,
  Cs as makeEditorSetting,
  Va as makeEnemyAction,
  Wa as makeEnemyData,
  l as makeEventPageCondition,
  Gm as makeGameInitial,
  Em as makeItemCategories,
  Fm as makeItemCategoriesFromArray,
  Wn as makeItemData,
  sa as makeMapData,
  na as makeMapEvent,
  oa as makeMapEventIamge,
  ma as makeMapEventPage,
  pa as makeMapInfoData,
  Bm as makeMenuCommandsEnabled,
  Hm as makeMenuCommandsEnabledFromArray,
  Ns as makeParamNamesArray,
  bo as makeRegex,
  On as makeSkillData,
  km as makeSoundsArray,
  xm as makeSoundsObject,
  Ga as makeStateData,
  bm as makeSystemAdvanced,
  Ks as makeSystemData,
  gs as makeTermsBasic,
  bs as makeTermsBasicFromArray,
  Is as makeTermsCommand,
  hs as makeTermsCommandFromArray,
  ks as makeTermsMessages,
  Rs as makeTitleCommandWindow,
  m as makeTroopData,
  p as makeTroopEventConditions,
  s as makeTroopMember,
  As as makeVehicleData,
  Zi as makeWeaponData,
  Wi as mergeItemsSource,
  Da as normalizeDataActor,
  ci as partyAbilityToArray,
  kc as pluginSourceToJSON,
  fo as readNote,
  Io as readNoteObject,
  Xr as regularParamName,
  Gr as regularParamsToArray,
  vo as replaceNote,
  In as resolveItemEffectLabels,
  zo as resolveTraitLabels,
  xo as setNoteValue,
  fi as specialFlagToArray,
  ii as specialParamName,
  ri as specialParamsToArray,
  xc as structToJSONSchema,
  Ip as toArrayCommonEvent,
  hp as toArrayControlSwitches,
  Np as toArrayInputNumber,
  ol as toArrayOperandActorStatus,
  tl as toArrayOperandConstant,
  ml as toArrayOperandEnemyStatus,
  nl as toArrayOperandItemData,
  rl as toArrayOperandRandom,
  il as toArrayOperandScript,
  al as toArrayOperandVariable,
  Cp as toArrayScrollingTextBody,
  qp as toArrayScrollingTextHeader,
  Hp as toArraySetupChoice,
  Fp as toArraySetupChoiceItem,
  Gp as toArrayShowMessageHeader
};
//# sourceMappingURL=rpgTypes.es.js.map
