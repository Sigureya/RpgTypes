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
}), d = 0, c = 101, u = 401, y = 102, g = 402, b = 103, I = 104, f = 105, v = 405, h = 108, k = 408, x = 109, T = 111, S = 411, w = 112, N = 113, P = 115, q = 117, R = 118, A = 119, j = 121, C = 122, D = 123, M = 124, z = 125, E = 126, F = 127, B = 128, H = 129, L = 132, V = 133, W = 134, O = 135, G = 136, X = 137, Y = 138, K = 139, $ = 140, _ = 201, U = 202, Z = 203, J = 204, Q = 205, ee = 206, te = 211, ae = 212, re = 213, ie = 214, ne = 216, oe = 217, me = 221, se = 222, pe = 223, le = 224, de = 225, ce = 230, ue = 231, ye = 232, ge = 233, be = 234, Ie = 235, fe = 236, ve = 241, he = 242, ke = 243, xe = 244, Te = 245, Se = 246, we = 249, Ne = 250, Pe = 251, qe = 261, Re = 282, Ae = 283, je = 284, Ce = 285, De = 301, Me = 302, ze = 605, Ee = 303, Fe = 311, Be = 312, He = 313, Le = 314, Ve = 315, We = 320, Oe = 321, Ge = 322, Xe = 323, Ye = 324, Ke = 325, $e = 331, _e = 332, Ue = 333, Ze = 334, Je = 335, Qe = 336, et = 337, tt = 339, at = 340, rt = 351, it = 342, nt = 352, ot = 353, mt = 354, st = 355, pt = 655, lt = 356, dt = 357, ct = (e2, t2, a2 = 0) => ({
  code: e2,
  indent: a2,
  parameters: t2
}), ut = 0, yt = 1, gt = 2, bt = 3, It = 4, ft = 5, vt = 6, ht = 7, kt = 8, xt = 9, Tt = 10, St = 11, wt = 12, Nt = 13, Pt = 14, qt = 15, Rt = 16, At = 17, jt = 18, Ct = 19, Dt = 20, Mt = 21, zt = 22, Et = 23, Ft = 24, Bt = 25, Ht = 26, Lt = 27, Vt = 28, Wt = 29, Ot = 30, Gt = 31, Xt = 32, Yt = 33, Kt = 34, $t = 35, _t = 36, Ut = 37, Zt = 38, Jt = 39, Qt = 40, ea = 41, ta = 42, aa = 43, ra = 44, ia = 45, na = () => ({
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
  }, parentId: { type: "integer" }, scrollX: { type: "integer" }, scrollY: { type: "integer" } }
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
}, ua = new e(), ya = ua.compile(la), ga = ua.compile(ca), ba = (e2) => ya(e2), Ia = (e2) => ga(e2), fa = (e2, t2) => [va(e2.skills, t2), ha(e2.actors, t2), ka(e2.states, t2), xa(e2.armors, t2), Ta(e2.classes, t2), Sa(e2.enemies, t2), wa(e2.items, t2), Na(e2.weapons, t2), Pa(e2.commonEvents, t2)], va = (e2, t2) => ({
  label: t2.skill.title,
  items: e2,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), ha = (e2, t2) => ({
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
} }), Pa = (e2, t2) => ({ items: e2, label: t2.commonEvent.title, source: { author: "rmmz", module: "data", kind: "common_event" } }), qa = {
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
}, Ra = {
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
}), Xa = 11, Ya = 12, Ka = 13, $a = 14, _a = 21, Ua = 22, Za = 23, Ja = 31, Qa = 32, er = 33, tr = 34, ar = 35, rr = 41, ir = 42, nr = 43, or = 44, mr = 51, sr = 52, pr = 53, lr = 54, dr = 55, cr = 61, ur = 62, yr = 63, gr = 64, br = 0, Ir = 1, fr = 2, vr = 3, hr = (e2, t2) => ({
  items: kr(e2.options, t2),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), kr = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, { id: 2, name: e2.instantCollaps }, {
  id: 3,
  name: e2.noneCollaps
}], xr = 0, Tr = 1, Sr = 2, wr = 3, Nr = 4, Pr = 5, qr = 6, Rr = 7, Ar = 8, jr = 9, Cr = (e2) => ({
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
}], vi = "{name}", hi = "{name} * {value}%", ki = "{name} + {value}%", xi = "{value}", Ti = {
  title: "特徴",
  options: {
    regularParam: { title: "基本能力値", format: hi, options: {
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
    specialParam: { title: "特殊能力値", format: hi, options: {
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
      format: vi,
      options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
    },
    collaps: { title: "消滅エフェクト", format: vi, options: {
      bossCollaps: "ボス崩壊",
      instantCollaps: "即時崩壊",
      noneCollaps: "崩壊なし"
    } },
    partyAbility: { title: "パーティ能力", format: vi, options: {
      cancelSurprise: "不意打ち無効",
      dropItemDouble: "アイテムドロップ2倍",
      encounterHalf: "エンカウント半減",
      encounterNone: "エンカウントなし",
      goldDouble: "ゴールド2倍",
      raisePreemptive: "先制攻撃率アップ"
    } },
    elementRate: { title: "属性有効度", format: hi },
    debuffRate: { title: "弱体有効度", format: hi },
    stateRate: { title: "ステート有効度", format: hi },
    stateResist: {
      title: "ステート無効",
      format: vi
    },
    attackElement: { title: "攻撃属性", format: vi },
    attackState: { title: "攻撃ステート", format: ki },
    attackSpeed: { title: "攻撃速度補正", format: xi },
    attackTimes: {
      title: "攻撃追加回数",
      format: xi
    },
    actionPlus: { title: "行動追加", format: hi },
    attackSkill: { title: "攻撃スキル", format: vi },
    equipWeaponType: { title: "装備武器タイプ", format: vi },
    equipArmorType: { title: "装備防具タイプ", format: vi },
    equipLock: {
      title: "装備固定",
      format: vi
    },
    equipSeal: { title: "装備封印", format: vi },
    slotType: { title: "スロットタイプ", format: vi },
    skillAdd: { title: "スキル追加", format: vi },
    skillSeal: { title: "スキルタイプ封印", format: vi },
    skillTypeAdd: { title: "スキルタイプ追加", format: vi },
    skillTypeSeal: { title: "スキルタイプ封印", format: vi }
  }
}, Si = (e2, t2) => [Or(e2.regularParam), Cr(e2.extraParam), ai(e2.specialParam), hr(e2.collaps, t2), Ii(e2.specialFlag), di(e2.partyAbility)], wi = "Trait", Ni = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }
}, Pi = "rmmz", qi = "colors", Ri = (e2) => e2.map((e3) => ({
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
      numbers: a2.numbers ? Ri(a2.numbers) : [],
      strings: a2.strings ? Ri(a2.strings) : []
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
}, en = 0, tn = 1, an = 2, rn = 11, nn = 12, on = 13, mn = 21, sn = 22, pn = 31, ln = 32, dn = 33, cn = 34, un = 41, yn = 42, gn = 43, bn = 44, In = (e2) => [hn(e2), kn(e2), xn(e2), Tn(e2), Sn(e2), wn(e2), Nn(e2), Pn(e2), qn(e2), vn(e2), Rn(e2), An(e2), jn(e2)], fn = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), vn = (e2) => fn(41, e2.special), hn = (e2) => fn(11, e2.recoverHp), kn = (e2) => fn(12, e2.recoverMp), xn = (e2) => fn(13, e2.gainTp), Tn = (e2) => fn(21, e2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), Sn = (e2) => fn(22, e2.removeState, { author: "rmmz", module: "data", kind: "state" }), wn = (e2) => fn(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), Nn = (e2) => fn(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Pn = (e2) => fn(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), qn = (e2) => fn(34, e2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Rn = (e2) => fn(42, e2.grow, { author: "rmmz", module: "trait", kind: "params" }), An = (e2) => fn(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), jn = (e2) => fn(44, e2.commonEvent, {
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
}), On = {
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
}, Gn = {
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
}, Xn = (e2 = {}) => ({
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
}), Yn = new e(), Kn = Yn.compile(Gn), $n = Yn.compile(On), _n = Yn.compile(Ma), Un = Yn.compile(Ea), Zn = Yn.compile(Ji), Jn = Yn.compile(Ha), Qn = Yn.compile(Oa), eo = Yn.compile(Fa), to = (e2) => Kn(e2), ao = (e2) => $n(e2), ro = (e2) => _n(e2), io = (e2) => Un(e2), no = (e2) => Zn(e2), oo = (e2) => Jn(e2), mo = (e2) => Qn(e2), so = (e2) => eo(e2), po = (e2, t2) => `<${e2}:${t2}>`, lo = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, co = (e2, t2) => yo(e2.note, (a2, r2) => t2(a2, r2, e2)), uo = (e2) => yo(e2, (e3, t2) => [e3, t2]), yo = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, go = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (e3, a2, r2) => {
    const i2 = t2(a2, r2);
    if (i2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return po(a2, i2);
  });
}, bo = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return r2 ? r2[2] : void 0;
}, Io = (e2, t2, a2) => {
  const r2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(r2, (e3, r3) => r3 === t2 ? po(r3, a2) : e3);
}, fo = "data", vo = "actor", ho = "map", ko = "enemy", xo = "state", To = "skill", So = "item", wo = "weapon", No = "armor", Po = "class", qo = "common_event", Ro = "troop", Ao = (e2) => [jo(e2.elementRate), Co(e2.debuffRate), Do(e2.stateRate), Mo(e2.stateResist), zo(e2.regularParam), Eo(e2.extraParam), Fo(e2.specialParam), Bo(e2.attackElement), Ho(e2.attackState), Lo(e2.attackSpeed), Vo(e2.attackTimes), Wo(e2.attackSkill), Oo(e2.skillTypeAdd), Go(e2.skillTypeSeal), Xo(e2.skillAdd), Yo(e2.skillSeal), Ko(e2.equipWeaponType), $o(e2.equipArmorType), _o(e2.equipLock), Uo(e2.equipSeal), Zo(e2.slotType), Jo(e2.actionPlus), Qo(e2.specialFlag), em(e2.collaps), tm(e2.partyAbility)], jo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 11,
  dataSource: im()
}), Co = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), Do = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 13,
  dataSource: am()
}), Mo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 14, dataSource: am() }), zo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), Eo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), Fo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), Bo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 31, dataSource: im() }), Ho = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 32,
  dataSource: am()
}), Lo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 33 }), Vo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 34 }), Wo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 35,
  dataSource: rm()
}), Oo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 41, dataSource: nm() }), Go = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 42,
  dataSource: nm()
}), Xo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 43, dataSource: rm() }), Yo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 44, dataSource: rm() }), Ko = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 51,
  dataSource: om()
}), $o = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 52, dataSource: mm() }), _o = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 53,
  dataSource: sm()
}), Uo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 54, dataSource: sm() }), Zo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 55, dataSource: sm() }), Jo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 61
}), Qo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), em = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), tm = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), am = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), rm = () => ({ author: "rmmz", module: "data", kind: "skill" }), im = () => ({ author: "rmmz", module: "system", kind: "elements" }), nm = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), om = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), mm = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), sm = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), pm = {
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
}, lm = () => ({ rpg: { damage: Ra, data: qa, traits: Ti, itemEffect: En }, global: pm }), dm = (e2 = {}) => ({
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
}), cm = {
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
}, um = {
  type: "object",
  additionalProperties: false,
  required: ["type", "weaponImageId"],
  properties: { type: { type: "number" }, weaponImageId: { type: "number" } }
}, ym = (e2) => "number" == typeof e2 && !Number.isNaN(e2), gm = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
}), bm = (e2 = {}) => [gm(e2.cursor), gm(e2.ok), gm(e2.cancel), gm(e2.buzzer), gm(e2.equip), gm(e2.save), gm(e2.load), gm(e2.battleStart), gm(e2.escape), gm(e2.enemyAttack), gm(e2.enemyDamage), gm(e2.enemyCollapse), gm(e2.bossCollapes1), gm(e2.bossCollapes2), gm(e2.actorDamage), gm(e2.actorCollapse), gm(e2.playRecovery), gm(e2.playMiss), gm(e2.playEvasion), gm(e2.playMagicEvasion), gm(e2.playReflection), gm(e2.shop), gm(e2.useItem), gm(e2.useSkill)], Im = (e2) => ({
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
}), fm = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }, vm = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: fm, victoryMe: fm, gameoverMe: fm, titleBgm: fm, defeatMe: fm, sounds: {
    type: "array",
    items: fm,
    minItems: 24,
    maxItems: 24
  } }
}, hm = {
  type: "object",
  additionalProperties: false,
  required: ["magicSkills", "battleSystem"],
  properties: { magicSkills: {
    type: "array",
    items: { type: "number" },
    minItems: 0,
    uniqueItems: true
  }, battleSystem: { type: "number" } }
}, km = (e2) => e2.menuCommands[0], xm = (e2) => e2.menuCommands[1], Tm = (e2) => e2.menuCommands[2], Sm = (e2) => e2.menuCommands[3], wm = (e2) => e2.menuCommands[4], Nm = (e2) => e2.menuCommands[5], Pm = (e2) => e2.itemCategories[0], qm = (e2) => e2.itemCategories[1], Rm = (e2) => e2.itemCategories[2], Am = (e2) => e2.itemCategories[3], jm = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], Cm = (e2) => ({
  item: e2[0],
  weapon: e2[1],
  armor: e2[2],
  keyItem: e2[3]
}), Dm = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], Mm = (e2) => ({
  item: e2[0],
  skill: e2[1],
  equip: e2[2],
  status: e2[3],
  formation: e2[4],
  save: e2[5]
}), zm = { required: ["itemCategories", "menuCommands"], additionalProperties: false, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, Em = (e2 = {}) => ({
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
}), Fm = { type: "boolean" }, Bm = {
  type: "object",
  additionalProperties: false,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: Fm,
    optDisplayTp: Fm,
    optDrawTitle: Fm,
    optExtraExp: Fm,
    optFloorDeath: Fm,
    optFollowers: Fm,
    optKeyItemsNumber: Fm,
    optSideView: Fm,
    optSlipDeath: Fm,
    optTransparent: Fm,
    optMessageSkip: Fm,
    optSplashScreen: Fm
  }
}, Hm = (e2 = {}) => ({
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0,
  partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1]
}), Lm = {
  additionalProperties: false,
  type: "object",
  required: ["startMapId", "startX", "startY", "partyMembersArray"],
  properties: { startMapId: { type: "integer", minimum: 0 }, startX: { type: "integer", minimum: 0 }, startY: { type: "integer", minimum: 0 }, partyMembersArray: { type: "array", items: {
    type: "integer",
    minimum: 0
  } } }
}, Vm = { additionalProperties: false, type: "object", required: ["tileSize", "faceSize", "iconSize"], properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: {
  type: "integer",
  minimum: 0
}, iconSize: { type: "integer", minimum: 0 } } }, Wm = { additionalProperties: false, type: "object", required: ["title1Name", "title2Name"], properties: { title1Name: { type: "string" }, title2Name: {
  type: "string"
} } }, Om = { type: "object", additionalProperties: false, required: ["locale", "versionId", "windowTone"], properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
  type: "array",
  items: { type: "number" },
  minItems: 4,
  maxItems: 4
} } }, Gm = (e2, t2) => ({
  name: e2,
  id: t2
}), Xm = (e2) => e2.variables.map(Gm), Ym = (e2) => e2.elements.map(Gm), Km = (e2) => e2.equipTypes.map(Gm), $m = (e2) => e2.skillTypes.map(Gm), _m = (e2) => e2.weaponTypes.map(Gm), Um = (e2) => e2.armorTypes.map(Gm), Zm = (e2) => e2.switches.map(Gm), Jm = (e2, t2) => [es(e2, t2), ts(e2, t2), ns(e2, t2), as(e2, t2), Qm(e2, t2), rs(e2, t2), is(e2, t2)], Qm = (e2, t2) => ({
  items: Um(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), es = (e2, t2) => ({ items: Ym(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), ts = (e2, t2) => ({ items: Km(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), as = (e2, t2) => ({
  items: $m(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), rs = (e2, t2) => ({ items: Xm(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), is = (e2, t2) => ({ items: Zm(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), ns = (e2, t2) => ({
  items: _m(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), os = { type: "array", items: { type: "string" } }, ms = {
  additionalProperties: false,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: os,
    skillTypes: os,
    elements: os,
    variables: os,
    equipTypes: os,
    switches: os,
    armorTypes: os
  }
}, ss = (e2) => ({
  armorTypes: ps(e2.armorTypes),
  elements: ps(e2.elements),
  equipTypes: ps(e2.equipTypes),
  weaponTypes: ps(e2.weaponTypes),
  skillTypes: ps(e2.skillTypes),
  variables: ps(e2.variables),
  switches: ps(e2.switches)
}), ps = (e2) => e2 ? [...e2] : [], ls = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], ds = (e2) => ({
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
}), cs = (e2) => us(e2, ""), us = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], ys = (e2) => ({
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
}), gs = (e2, t2) => "string" == typeof e2 ? e2 : t2, bs = (e2) => ({
  actionFailure: gs(e2.actionFailure, "Action failed."),
  actorDamage: gs(e2.actorDamage, "%1 took %2 damage."),
  actorRecovery: gs(e2.actorRecovery, "%1 recovered %2 HP."),
  actorGain: gs(e2.actorGain, "%1 gained %2."),
  actorLoss: gs(e2.actorLoss, "%1 lost %2."),
  actorDrain: gs(e2.actorDrain, "%1 drained %2 HP."),
  actorNoDamage: gs(e2.actorNoDamage, "%1 was not damaged."),
  actorNoHit: gs(e2.actorNoHit, "%1 was not hit."),
  alwaysDash: gs(e2.alwaysDash, "Always dash."),
  bgmVolume: gs(e2.bgmVolume, "BGM volume"),
  bgsVolume: gs(e2.bgsVolume, "BGS volume"),
  commandRemember: gs(e2.commandRemember, "Command remember."),
  criticalToActor: gs(e2.criticalToActor, "%1 dealt %2 damage to %3."),
  criticalToEnemy: gs(e2.criticalToEnemy, "%1 dealt %2 damage to %3."),
  counterAttack: gs(e2.counterAttack, "%1 countered!"),
  debuffAdd: gs(e2.debuffAdd, "%1's %2 was lowered."),
  defeat: gs(e2.defeat, "Defeat."),
  enemyDamage: gs(e2.enemyDamage, "%1 took %2 damage."),
  enemyDrain: gs(e2.enemyDrain, "%1 drained %2 HP."),
  enemyGain: gs(e2.enemyGain, "%1 gained %2."),
  enemyLoss: gs(e2.enemyLoss, "%1 lost %2."),
  enemyNoDamage: gs(e2.enemyNoDamage, "%1 was not damaged."),
  enemyNoHit: gs(e2.enemyNoHit, "%1 was not hit."),
  enemyRecovery: gs(e2.enemyRecovery, "%1 recovered %2 HP."),
  evasion: gs(e2.evasion, "%1 evaded the attack!"),
  autosave: gs(e2.autosave, "Autosave"),
  escapeFailure: gs(e2.escapeFailure, "Escape failed."),
  escapeStart: gs(e2.escapeStart, "%1 started to escape!"),
  emerge: gs(e2.emerge, "%1 appeared!"),
  expNext: gs(e2.expNext, "Next level in %1 EXP."),
  expTotal: gs(e2.expTotal, "Total EXP: %1"),
  file: gs(e2.file, "File"),
  buffAdd: gs(e2.buffAdd, "%1's %2 was raised."),
  buffRemove: gs(e2.buffRemove, "%1's %2 was lowered."),
  obtainExp: gs(e2.obtainExp, "%1 EXP obtained."),
  obtainGold: gs(e2.obtainGold, "%1 gold obtained."),
  obtainItem: gs(e2.obtainItem, "%1 obtained %2."),
  obtainSkill: gs(e2.obtainSkill, "%1 learned %2."),
  levelUp: gs(e2.levelUp, "%1 leveled up!"),
  partyName: gs(e2.partyName, "Party"),
  loadMessage: gs(e2.loadMessage, "Load %1?"),
  meVolume: gs(e2.meVolume, "ME volume"),
  possession: gs(e2.possession, "Possession"),
  preemptive: gs(e2.preemptive, "%1 attacked first!"),
  saveMessage: gs(e2.saveMessage, "Save %1?"),
  seVolume: gs(e2.seVolume, "SE volume"),
  magicEvasion: gs(e2.magicEvasion, "%1 evaded the magic!"),
  magicReflection: gs(e2.magicReflection, "%1 reflected the magic!"),
  substitute: gs(e2.substitute, "%1 took the hit!"),
  surprise: gs(e2.surprise, "%1 surprised the enemy!"),
  touchUI: gs(e2.touchUI, "Touch UI"),
  useItem: gs(e2.useItem, "%1 used %2."),
  victory: gs(e2.victory, "Victory!")
}), Is = { type: "string" }, fs = {
  type: "string",
  nullable: true
}, vs = { type: "string" }, hs = { required: ["terms", "currencyUnit", "gameTitle"], additionalProperties: false, type: "object", properties: {
  currencyUnit: { type: "string" },
  gameTitle: { type: "string" },
  terms: { additionalProperties: false, type: "object", required: ["messages", "commands", "basic", "params"], properties: { messages: {
    type: "object",
    additionalProperties: false,
    required: ["actionFailure", "actorDamage", "actorNoDamage", "actorRecovery", "actorGain", "actorLoss", "actorDrain", "alwaysDash", "bgmVolume", "bgsVolume", "commandRemember", "criticalToActor", "criticalToEnemy", "counterAttack", "debuffAdd", "defeat", "enemyDamage", "enemyNoDamage", "enemyRecovery", "enemyGain", "enemyLoss", "enemyDrain", "evasion", "expNext", "expTotal", "escapeFailure", "escapeStart", "file", "loadMessage", "meVolume", "magicEvasion", "magicReflection", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "partyName", "preemptive", "saveMessage", "seVolume", "substitute", "touchUI", "victory", "useItem"],
    properties: {
      actionFailure: vs,
      actorDamage: vs,
      actorNoDamage: vs,
      actorRecovery: vs,
      actorGain: vs,
      actorLoss: vs,
      actorDrain: vs,
      alwaysDash: vs,
      bgmVolume: vs,
      bgsVolume: vs,
      commandRemember: vs,
      criticalToActor: vs,
      criticalToEnemy: vs,
      counterAttack: vs,
      debuffAdd: vs,
      defeat: vs,
      enemyDamage: vs,
      enemyNoDamage: vs,
      enemyRecovery: vs,
      enemyGain: vs,
      enemyLoss: vs,
      enemyDrain: vs,
      evasion: vs,
      expNext: vs,
      expTotal: vs,
      escapeFailure: vs,
      escapeStart: vs,
      file: vs,
      loadMessage: vs,
      meVolume: vs,
      magicEvasion: vs,
      magicReflection: vs,
      obtainExp: vs,
      obtainGold: vs,
      obtainItem: vs,
      obtainSkill: vs,
      partyName: vs,
      preemptive: vs,
      saveMessage: vs,
      seVolume: vs,
      substitute: vs,
      touchUI: vs,
      victory: vs,
      useItem: vs,
      buffAdd: vs,
      buffRemove: vs,
      actorNoHit: vs,
      enemyNoHit: vs,
      autosave: vs,
      emerge: vs,
      levelUp: vs,
      possession: vs,
      surprise: vs
    }
  }, commands: {
    type: "array",
    items: [Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, fs, Is, Is, fs, Is, Is],
    minItems: 26,
    maxItems: 26
  }, basic: { type: "array", items: { type: "string" }, minItems: 10, maxItems: 10 }, params: {
    type: "array",
    items: { type: "string", minLength: 1 },
    minItems: 10,
    maxItems: 10,
    uniqueItems: true
  } } }
} }, ks = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], xs = (e2) => e2.terms.params.map((e3, t2) => ({
  name: e3,
  id: t2
})), Ts = (e2) => ({ background: e2.background ?? 0, offsetX: e2.offsetX ?? 0, offsetY: e2.offsetY ?? 0 }), Ss = {
  additionalProperties: false,
  type: "object",
  required: ["background", "offsetX", "offsetY"],
  properties: { background: { type: "integer", minimum: 0, maximum: 1e3 }, offsetX: { type: "integer", minimum: -1e3, maximum: 1e3 }, offsetY: { type: "integer", minimum: -1e3, maximum: 1e3 } }
}, ws = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: gm(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), Ns = {
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
}, Ps = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), qs = { additionalProperties: false, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: {
  type: "integer",
  minimum: 1
}, equips: { type: "array", items: { type: "integer" } } } }, Rs = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: qs },
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
}, As = { title: "オプション", options: {
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
} }, js = {
  title: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, Cs = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Ds = { title: "コマンド", options: {
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
} }, Ms = {
  additionalProperties: false,
  required: ["airship", "boat", "ship", "advanced", "attackMotions"],
  type: "object",
  properties: { airship: Ns, boat: Ns, ship: Ns, advanced: cm, attackMotions: { type: "array", items: um } }
}, zs = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), { required: [], properties: {} }), Es = new e({ strict: true }), Fs = ((e2) => {
  const t2 = zs(e2);
  return { additionalProperties: false, type: "object", required: Array.from(new Set(t2.required)), properties: t2.properties };
})([Ms, vm, hm, zm, Bm, Lm, Vm, Om, ms, hs, Wm, Rs]), Bs = Es.compile(Fs), Hs = (e2) => Bs(e2), Ls = Es.compile(qs);
Es.compile(um);
const Vs = Es.compile(Vm), Ws = (e2) => {
  var _a2, _b, _c, _d2, _e2, _f, _g, _h, _i2, _j, _k, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u, _v;
  const t2 = Xs(e2.size);
  return {
    ...Em(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: bm(e2.sounds),
    editor: Ps(e2.editing),
    advanced: dm(e2.advanced),
    title1Name: ((_c = e2.images) == null ? void 0 : _c.title1Name) ?? "",
    title2Name: ((_d2 = e2.images) == null ? void 0 : _d2.title2Name) ?? "",
    ...ss(e2.dataNames ?? {}),
    magicSkills: Gs([]),
    airship: ws((_e2 = e2.vehicles) == null ? void 0 : _e2.airship),
    boat: ws((_f = e2.vehicles) == null ? void 0 : _f.boat),
    ship: ws((_g = e2.vehicles) == null ? void 0 : _g.ship),
    defeatMe: gm((_h = e2.me) == null ? void 0 : _h.defeatMe),
    gameoverMe: gm((_i2 = e2.me) == null ? void 0 : _i2.gameoverMe),
    titleBgm: gm((_j = e2.bgm) == null ? void 0 : _j.titleBgm),
    tileSize: t2.tileSize,
    faceSize: t2.faceSize,
    iconSize: t2.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((_k = e2.battleTest) == null ? void 0 : _k.battleback1Name) ?? "",
    battleback2Name: ((_l2 = e2.battleTest) == null ? void 0 : _l2.battleback2Name) ?? "",
    testTroopId: ((_m2 = e2.battleTest) == null ? void 0 : _m2.testTroopId) ?? 0,
    testBattlers: Ys((_n2 = e2.battleTest) == null ? void 0 : _n2.testBattlers, Ks),
    battleBgm: gm((_o2 = e2.bgm) == null ? void 0 : _o2.battleBgm),
    victoryMe: gm((_p2 = e2.me) == null ? void 0 : _p2.victoryMe),
    editMapId: ((_q = e2.editorTemporary) == null ? void 0 : _q.editMapId) ?? 0,
    battlerName: ((_r2 = e2.editorTemporary) == null ? void 0 : _r2.battlerName) ?? "",
    locale: "",
    startMapId: ((_s2 = e2.gameInit) == null ? void 0 : _s2.startMapId) ?? 0,
    startX: ((_t2 = e2.gameInit) == null ? void 0 : _t2.startX) ?? 0,
    startY: ((_u = e2.gameInit) == null ? void 0 : _u.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Os(e2.terms ?? {}),
    itemCategories: jm(e2.itemCategories),
    partyMembersArray: Gs((_v = e2.gameInit) == null ? void 0 : _v.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: Dm(e2.menuComamnds)
  };
}, Os = (e2) => ({
  basic: ls(e2.basic ?? {}),
  commands: cs(e2.commands ?? {}),
  params: ks(e2.params ?? {}),
  messages: bs(e2.messages ?? {})
}), Gs = (e2) => e2 ? [...e2] : [], Xs = (e2) => ((e3) => Vs(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Ys = (e2, t2) => e2 ? e2.map(t2) : [], Ks = (e2) => ((e3) => Ls(e3))(e2) ? { actorId: e2.actorId, equips: Gs(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, $s = (e2, t2, a2, r2, i2, n2) => [...Si(a2, r2), ...fa(e2, t2), ...Jm(i2, n2)], _s = (e2, t2) => Wi(Ao(t2), e2), Us = (e2, t2, a2) => {
  const r2 = In(t2);
  return Wi(a2 ? [...r2, ...a2] : r2, e2);
}, Zs = (e2) => Object.entries(e2).map(([, e3]) => e3.title), Js = (e2, t2 = 0) => ({ code: 320, parameters: [e2.actorId, e2.name], indent: t2 }), Qs = (e2, t2 = 0) => ({
  code: 324,
  parameters: [e2.actorId, e2.nickname],
  indent: t2
}), ep = (e2, t2 = 0) => ({ code: 325, parameters: [e2.actorId, e2.profile], indent: t2 }), tp = (e2, t2) => ap(e2, gm({ name: t2 })), ap = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [gm(t2)],
  indent: a2
}), rp = (e2, t2 = 0) => ap(241, e2, t2), ip = (e2, t2 = 0) => ap(245, e2, t2), np = (e2, t2 = 0) => ap(249, e2, t2), op = (e2, t2 = 0) => ap(250, e2, t2), mp = (e2, t2 = 0) => ap(132, e2, t2), sp = (e2, t2 = 0) => ap(133, e2, t2), pp = (e2, t2 = 0) => ap(139, e2, t2), lp = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: cp(e2 ?? {})
}), dp = (e2) => ({ eventId: e2[0] }), cp = (e2) => [e2.eventId ?? 0], up = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), yp = (e2) => [e2.min, e2.max, e2.value], gp = (e2, t2 = 0) => ({
  code: 121,
  indent: t2,
  parameters: yp(e2)
}), bp = (e2) => [e2], Ip = (e2) => ({ comment: e2[0] }), fp = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: bp(e2) }), vp = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: bp(e2)
}), hp = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? fp(e3, t2) : vp(e3, t2)), kp = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], xp = (e2) => ({ variableId: e2[0], digits: e2[1] }), Tp = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: kp(e2 ?? {})
}), Sp = (e2 = {}) => [(e2 == null ? void 0 : e2.speed) ?? 4, (e2 == null ? void 0 : e2.skip) ?? false], wp = (e2) => ({ speed: e2[0], skip: e2[1] }), Np = (e2 = {}, t2 = 0) => ({ code: 105, indent: t2, parameters: Sp(e2) }), Pp = (e2 = "") => [e2], qp = (e2) => ({ content: e2[0] }), Rp = (e2 = "", t2 = 0) => ({
  code: 405,
  indent: t2 ?? 0,
  parameters: Pp(e2)
}), Ap = (e2, t2 = 0) => ({ code: 402, indent: t2, parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""] }), jp = (e2) => ({ index: e2[0], name: e2[1] }), Cp = (e2) => [e2.index ?? 0, e2.name ?? ""], Dp = (e2) => ({
  choices: e2[0],
  cancelType: e2[1],
  defaultType: e2[2],
  positionType: e2[3],
  background: e2[4]
}), Mp = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], zp = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), Ep = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), Fp = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), Bp = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), Hp = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName], Lp = (e2, t2 = 0) => ({ code: 401, indent: t2, parameters: [e2] }), Vp = (e2, t2 = 0) => ({
  code: 355,
  indent: t2,
  parameters: [e2]
}), Wp = (e2, t2 = 0) => ({ code: 655, indent: t2, parameters: [e2] }), Op = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Vp(e3, t2) : Wp(e3, t2)), Gp = 0, Xp = 1, Yp = 2, Kp = 3, $p = 4, _p = {
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
}, Up = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], Zp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], Jp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], Qp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], el = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], tl = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], al = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, _p[t2.param]], rl = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, il = (e2, t2) => {
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
}, nl = (e2) => [...e2], ol = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: nl(e2.parameters)
}), ml = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, sl = (e2) => e2.parameters.every(ml), pl = new e(), ll = pl.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{
    type: "integer",
    minimum: 0
  }, { type: "string" }] } },
  additionalProperties: false
}), dl = (e2) => ll(e2), cl = pl.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } }, required: ["code", "indent", "parameters"] }), ul = (e2) => cl(e2), yl = pl.compile({
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
}), gl = (e2) => yl(e2), bl = pl.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
    type: "integer",
    enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
  } },
  additionalProperties: false
}), Il = (e2) => bl(e2), fl = pl.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), vl = (e2) => fl(e2), hl = pl.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), kl = (e2) => hl(e2), xl = pl.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } },
  required: ["code", "indent", "parameters"]
}), Tl = (e2) => xl(e2), Sl = pl.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 402
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } },
  required: ["code", "indent", "parameters"]
}), wl = (e2) => Sl(e2), Nl = pl.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), Pl = (e2) => Nl(e2), ql = pl.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), Rl = (e2) => ql(e2), Al = (e2) => gl(e2) && 241 === e2.code, jl = (e2) => gl(e2) && 245 === e2.code, Cl = (e2) => gl(e2) && 249 === e2.code, Dl = (e2) => gl(e2) && 250 === e2.code, Ml = (e2) => gl(e2) && 132 === e2.code, zl = (e2) => gl(e2) && 133 === e2.code, El = (e2) => gl(e2) && 139 === e2.code, Fl = (e2) => vl(e2) && 401 === e2.code, Bl = (e2) => vl(e2) && 405 === e2.code, Hl = (e2) => vl(e2) && 108 === e2.code, Ll = (e2) => vl(e2) && 408 === e2.code, Vl = (e2) => vl(e2) && 355 === e2.code, Wl = (e2) => vl(e2) && 655 === e2.code, Ol = "bgm", Gl = "se", Xl = "me", Yl = "bgs", Kl = "battlebacks1", $l = "battlebacks2", _l = "characters", Ul = "enemies", Zl = "faces", Jl = "parallaxes", Ql = "pictures", ed = "sv_actors", td = "sv_enemies", ad = "system", rd = "tilesets", id = "titles1", nd = "titles2", od = "System.json", md = "Actors.json", sd = "Classes.json", pd = "Skills.json", ld = "Items.json", dd = "Weapons.json", cd = "Armors.json", ud = "Enemies.json", yd = "Troops.json", gd = "States.json", bd = "Animations.json", Id = "Tilesets.json", fd = "CommonEvents.json", vd = "MapInfos.json", hd = "data", kd = "img", xd = "audio", Td = "js", Sd = (e2, t2) => ({
  type: "array",
  items: t2,
  ...wd(e2),
  ...Nd(e2.default)
}), wd = (e2) => ({ ..."string" == typeof e2.text ? { title: e2.text } : {}, ..."string" == typeof e2.desc ? { description: e2.desc } : {} }), Nd = (e2) => void 0 !== e2 ? {
  default: e2
} : {}, Pd = (e2) => void 0 === e2 || 0 === e2, qd = (e2) => Sd(e2, { type: "string" }), Rd = (e2) => {
  switch (e2.kind) {
    case "string":
    case "multiline_string":
      return ((e3) => ({
        type: "string",
        ...wd(e3),
        ...Nd(e3.default)
      }))(e2);
    case "file":
    case "combo":
      return ((e3) => ({ type: "string", ...Nd(e3.default), ...wd(e3) }))(e2);
    case "select":
      return ((e3) => ({ type: "string", ...Nd(e3.default), ...wd(e3), ...e3.options ? {
        enum: e3.options.map((e4) => e4.value)
      } : {} }))(e2);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return qd(e2);
    case "number[]":
      return ((e3) => ({ type: "array", items: {
        type: Pd(e3.decimals) ? "integer" : "number"
      }, ...Nd(e3.default), ...wd(e3) }))(e2);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ((e3) => Sd(e3, { type: "integer" }))(e2);
    case "number":
      return ((e3) => ({ type: Pd(e3.decimals) ? "integer" : "number", ...Nd(e3.default), ...wd(e3) }))(e2);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((e3) => ({ type: "integer", ...Nd(e3.default), ...wd(e3) }))(e2);
    case "boolean":
      return ((e3) => ({ type: "boolean", ...Nd(e3.default), ...wd(e3) }))(e2);
    case "struct":
      return { $ref: `#/definitions/${(t2 = e2).struct}`, ...wd(t2) };
    default:
      return {};
  }
  var t2;
}, Ad = (e2, t2) => Object.entries(t2).reduce((t3, [a2, r2]) => {
  if (a2 in e2) {
    const i2 = e2[a2];
    if ("string" == typeof i2) return { ...t3, [a2]: r2(i2) };
  }
  return t3;
}, {}), jd = (e2, t2, a2, r2) => ({
  default: t2,
  ...Ad(a2, r2),
  kind: e2
}), Cd = (e2, t2, a2) => ({ default: [], ...Ad(t2, a2), kind: e2 }), Dd = "help", Md = "kind", zd = "text", Ed = "struct", Fd = (e2) => {
  const t2 = JSON.parse(e2);
  return Array.isArray(t2) ? t2.map(Bd) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, Bd(t3)])) : t2;
}, Bd = (e2) => {
  if ("string" != typeof e2) return e2;
  try {
    const t2 = JSON.parse(e2);
    return Array.isArray(t2) ? t2.map(Bd) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, Bd(t3)])) : t2;
  } catch {
    return e2;
  }
}, Hd = (e2) => {
  if (Md in e2.attr) {
    const t2 = Kd[e2.attr.kind];
    if (t2) return t2(e2);
  }
  return jd("any", "", e2.attr, Wd);
}, Ld = (e2) => e2, Vd = (e2) => e2.replace("[", "").replace("]", "").split(",").map((e3) => parseFloat(e3.replaceAll('"', "").trim())).filter((e3) => !isNaN(e3)), Wd = {
  default: Ld,
  text: Ld,
  desc: Ld,
  parent: Ld
}, Od = (e2) => jd("string", "", e2.attr, Wd), Gd = (e2) => {
  const t2 = { default: (e3) => Fd(e3), text: Ld, desc: Ld, parent: Ld };
  return Cd("string[]", e2.attr, t2);
}, Xd = (e2, t2) => {
  const a2 = {
    default: Vd,
    text: Ld,
    desc: Ld,
    parent: Ld
  };
  return Cd(t2, e2.attr, a2);
}, Yd = (e2, t2) => {
  const a2 = { default: (e3) => parseInt(e3, 10), text: Ld, desc: Ld, parent: Ld };
  return jd(t2, 0, e2.attr, a2);
}, Kd = {
  number: (e2) => ((e3) => {
    const t2 = {
      default: (e4) => parseFloat(e4),
      text: Ld,
      desc: Ld,
      decimals: (e4) => parseInt(e4, 10),
      min: (e4) => parseFloat(e4),
      max: (e4) => parseFloat(e4),
      parent: Ld
    };
    return jd("number", 0, e3.attr, t2);
  })(e2),
  "number[]": (e2) => {
    const t2 = { default: Vd, text: Ld, desc: Ld, decimals: (e3) => parseInt(e3, 10), min: (e3) => parseFloat(e3), max: (e3) => parseFloat(e3), parent: Ld };
    return Cd("number[]", e2.attr, t2);
  },
  string: Od,
  "string[]": Gd,
  multiline_string: Od,
  "multiline_string[]": Gd,
  combo: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => e3.option)) ?? [];
    return { ...jd("combo", "", e2.attr, Wd), options: t2 };
  },
  select: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => ({ option: e3.option, value: e3.value }))) ?? [];
    return { ...jd("select", "", e2.attr, Wd), options: t2 };
  },
  actor: (e2) => Yd(e2, "actor"),
  "actor[]": (e2) => Xd(e2, "actor[]"),
  class: (e2) => Yd(e2, "class"),
  "class[]": (e2) => Xd(e2, "class[]"),
  skill: (e2) => Yd(e2, "skill"),
  "skill[]": (e2) => Xd(e2, "skill[]"),
  item: (e2) => Yd(e2, "item"),
  "item[]": (e2) => Xd(e2, "item[]"),
  weapon: (e2) => Yd(e2, "weapon"),
  "weapon[]": (e2) => Xd(e2, "weapon[]"),
  armor: (e2) => Yd(e2, "armor"),
  "armor[]": (e2) => Xd(e2, "armor[]"),
  state: (e2) => Yd(e2, "state"),
  "state[]": (e2) => Xd(e2, "state[]"),
  enemy: (e2) => Yd(e2, "enemy"),
  "enemy[]": (e2) => Xd(e2, "enemy[]"),
  common_event: (e2) => Yd(e2, "common_event"),
  "common_event[]": (e2) => Xd(e2, "common_event[]"),
  switch: (e2) => Yd(e2, "switch"),
  "switch[]": (e2) => Xd(e2, "switch[]"),
  variable: (e2) => Yd(e2, "variable"),
  "variable[]": (e2) => Xd(e2, "variable[]"),
  troop: (e2) => Yd(e2, "troop"),
  "troop[]": (e2) => Xd(e2, "troop[]"),
  boolean: (e2) => {
    const t2 = {
      default: (e3) => "true" === e3,
      text: Ld,
      desc: Ld,
      on: Ld,
      off: Ld,
      parent: Ld
    };
    return jd("boolean", true, e2.attr, t2);
  },
  file: (e2) => {
    const t2 = { default: Ld, text: Ld, desc: Ld, parent: Ld, dir: Ld };
    return { dir: "", ...jd("file", "", e2.attr, t2) };
  },
  "file[]": (e2) => {
    const t2 = { default: (e3) => Fd(e3), text: Ld, desc: Ld, parent: Ld, dir: Ld };
    return { dir: "", ...Cd("file[]", e2.attr, t2) };
  }
}, $d = "BODY", _d = "STRUCT", Ud = "NONE", Zd = (e2, t2) => {
  const a2 = e2.lines.length > 0 ? Qd(e2) : e2, r2 = t2[1] || void 0;
  return { ...a2, structName: r2, blockType: r2 ? _d : "INVALID", locale: t2[2], lines: [] };
}, Jd = (e2) => ({
  ...e2.lines.length > 0 ? Qd(e2) : e2,
  blockType: $d,
  structName: void 0,
  locale: void 0,
  lines: []
}), Qd = (e2) => e2.blockType === $d ? { ...e2, bodies: e2.bodies.concat([{ lines: [...e2.lines] }]), lines: [], blockType: Ud } : e2.structName && e2.blockType === _d ? {
  ...e2,
  structs: e2.structs.concat([{ struct: e2.structName, locale: e2.locale, lines: [...e2.lines] }]),
  blockType: Ud,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e2,
  blockType: Ud,
  structName: void 0,
  lines: []
}, ec = (e2) => e2.currentOption ? { items: e2.items.concat({ option: e2.currentOption, value: e2.currentOption }) } : e2, tc = (e2) => ({
  ..."string" == typeof e2.desc ? { desc: e2.desc } : {},
  ..."string" == typeof e2.text ? { text: e2.text } : {}
}), ac = (e2) => {
  const t2 = rc(e2), a2 = nc(t2);
  return ic(a2);
}, rc = (e2) => {
  if (e2.currentParam && e2.currentOption) {
    const t2 = e2.currentParam.attr.kind;
    if ("select" === t2 || "combo" === t2) return { ...e2, currentParam: { ...e2.currentParam, options: ec(e2.currentOption).items } };
  }
  return e2;
}, ic = (e2) => e2.currentParam ? {
  ...e2,
  params: [...e2.params, e2.currentParam],
  currentParam: null,
  currentContext: null
} : e2, nc = (e2) => {
  if (e2.currentCommand) {
    const t2 = e2.currentParam ? [...e2.currentCommand.args, e2.currentParam] : e2.currentCommand.args, a2 = { ...tc(e2.currentCommand), command: e2.currentCommand.command, args: t2 };
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
}, oc = (e2, t2) => {
  const a2 = e2.lines.reduce((e3, a3) => {
    const r2 = a3.trim().replace(/^\*\s?/, "");
    if (!r2.startsWith("@")) return e3.currentContext === Dd ? { ...e3, helpLines: e3.helpLines.concat(r2) } : e3;
    const [i2, ...n2] = r2.slice(1).split(" "), o2 = n2.join(" ").trim(), m2 = t2[i2];
    return m2 ? m2(e3, o2) : e3;
  }, sc());
  return ac(a2);
}, mc = (e2, t2) => {
  const a2 = ((e3) => {
    const t3 = e3.split("\n"), a3 = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: Ud
    }, r3 = t3.reduce((e4, t4) => {
      const a4 = t4.trim(), r4 = a4.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return r4 ? Zd(e4, r4) : "/*:" === a4 ? Jd(e4) : "*/" === a4 ? e4.lines.length > 0 ? Qd(e4) : e4 : { ...e4, lines: e4.lines.concat([a4]) };
    }, a3);
    return { structs: r3.structs, bodies: r3.bodies };
  })(e2), r2 = a2.structs.map((e3) => ((e4) => {
    const t3 = oc(e4, dc);
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
  const n2 = oc(i2, t2);
  return { params: n2.params, commands: n2.commands, meta: n2.meta, helpLines: n2.helpLines, structs: r2 };
}, sc = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), pc = (e2, t2, a2) => e2.currentParam && !(t2 in e2.currentParam.attr) ? {
  ...e2,
  currentParam: { ...e2.currentParam, attr: { ...e2.currentParam.attr, [t2]: a2 } }
} : e2, lc = (e2, t2, a2) => ({ ...e2, meta: { [t2]: a2, ...e2.meta } }), dc = {
  param: (e2, t2) => {
    const a2 = ac(e2);
    return a2.params.some((e3) => e3.name === t2) ? a2 : { ...a2, currentContext: "param", currentParam: { name: t2, attr: {} } };
  },
  text: (e2, t2) => e2.currentParam ? pc(e2, zd, t2) : e2.currentCommand && !(zd in e2.currentCommand) ? { ...e2, currentCommand: {
    ...tc(e2.currentCommand),
    command: e2.currentCommand.command,
    args: e2.currentCommand.args,
    [zd]: t2
  } } : e2,
  desc: (e2, t2) => e2.currentParam ? pc(e2, "desc", t2) : e2.currentCommand ? { ...e2, currentCommand: { ...e2.currentCommand, desc: t2 } } : e2,
  command: (e2, t2) => {
    const a2 = ac(e2);
    return a2.commands.some((e3) => e3.command === t2) ? a2 : { ...a2, currentCommand: { command: t2, args: [] }, currentParam: null };
  },
  arg: (e2, t2) => {
    if (!e2.currentCommand) return e2;
    if (e2.currentParam) {
      const a2 = {
        ...tc(e2.currentCommand),
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
  help: (e2) => ({ ...ac(e2), currentContext: Dd }),
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
      const a2 = t2.slice(7, -1), r2 = pc(e2, Ed, a2);
      return pc(r2, Md, Ed);
    }
    return e2.currentParam ? pc(e2, Md, t2) : e2;
  },
  default: (e2, t2) => pc(e2, "default", t2),
  on: (e2, t2) => pc(e2, "on", t2),
  off: (e2, t2) => pc(e2, "off", t2),
  min: (e2, t2) => pc(e2, "min", t2),
  max: (e2, t2) => pc(e2, "max", t2),
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
  author: (e2, t2) => lc(e2, "author", t2),
  plugindesc: (e2, t2) => lc(e2, "plugindesc", t2),
  url: (e2, t2) => lc(e2, "url", t2)
}, cc = (e2) => uc(((e3) => mc(e3, dc))(e2)), uc = (e2) => ({
  target: "MZ",
  meta: e2.meta,
  commands: gc(e2.commands),
  params: yc(e2.params)
}), yc = (e2) => e2.reduce((e3, t2) => ({ [t2.name]: Hd(t2), ...e3 }), {}), gc = (e2) => e2.reduce((e3, t2) => {
  const a2 = { desc: t2.desc, text: t2.text, args: yc(t2.args) };
  return { [t2.command]: a2, ...e3 };
}, {}), bc = (e2) => cc(e2), Ic = (e2) => ((e3) => {
  const t2 = Object.entries(e3).reduce((e4, [t3, a2]) => {
    const r2 = Rd(a2);
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
  Re as CHANGE_TILESET,
  He as CHANGE_TP,
  te as CHANGE_TRANSPARENCY,
  $ as CHANGE_VEHICLE_BGM,
  Xe as CHANGE_VEHICLE_IMAGE,
  V as CHANGE_VICTORY_ME,
  F as CHANGE_WEAPONS,
  Y as CHANGE_WINDOW_COLOR,
  Ir as COLLAPS_BOSS,
  fr as COLLAPS_INSTANT,
  vr as COLLAPS_NONE,
  br as COLLAPS_NORMAL,
  k as COMMENT_BODY,
  h as COMMENT_HEAD,
  q as COMMON_EVENT,
  T as CONDITIONAL_BRANCH,
  S as CONDITIONAL_BRANCH_ELSE,
  D as CONTROL_SELF_SWITCH,
  j as CONTROL_SWITCHES,
  M as CONTROL_TIMER,
  C as CONTROL_VARIABLES,
  Ra as DEFAULT_DAMAGE_LABELS,
  pm as DEFAULT_GLOBAL_LABELS,
  Hn as DEFAULT_ITEM_LABELS,
  Ln as DEFAULT_SKILL_LABELS,
  As as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  js as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
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
  qr as EXTRA_PARAM_CNT,
  Sr as EXTRA_PARAM_CRI,
  Tr as EXTRA_PARAM_EVA,
  xr as EXTRA_PARAM_HIT,
  Rr as EXTRA_PARAM_HRG,
  Nr as EXTRA_PARAM_MEV,
  Pr as EXTRA_PARAM_MRF,
  Ar as EXTRA_PARAM_MRG,
  jr as EXTRA_PARAM_TRG,
  se as FADEIN_SCREEN,
  he as FADEOUT_BGM,
  Se as FADEOUT_BGS,
  me as FADEOUT_SCREEN,
  md as FILENAME_ACTORS,
  bd as FILENAME_ANIMATIONS,
  cd as FILENAME_ARMORS,
  sd as FILENAME_CLASSES,
  fd as FILENAME_COMMON_EVENTS,
  ud as FILENAME_ENEMIES,
  ld as FILENAME_ITEMS,
  vd as FILENAME_MAP_INFOS,
  pd as FILENAME_SKILLS,
  gd as FILENAME_STATES,
  od as FILENAME_SYSTEM,
  Id as FILENAME_TILESET,
  yd as FILENAME_TROOPS,
  dd as FILENAME_WEAPONS,
  ui as FLAG_ID_AUTO_BATTLE,
  yi as FLAG_ID_GUARD,
  bi as FLAG_ID_PRESERVE_TP,
  gi as FLAG_ID_SUBSTITUTE,
  le as FLASH_SCREEN,
  xd as FOLDER_AUDIO,
  Ol as FOLDER_AUDIO_BGM,
  Yl as FOLDER_AUDIO_BGS,
  Xl as FOLDER_AUDIO_ME,
  Gl as FOLDER_AUDIO_SE,
  hd as FOLDER_DATA,
  kd as FOLDER_IMG,
  Kl as FOLDER_IMG_BATTLEBACK1,
  $l as FOLDER_IMG_BATTLEBACK2,
  _l as FOLDER_IMG_CHACTERS,
  Ul as FOLDER_IMG_ENEMIES,
  Zl as FOLDER_IMG_FACES,
  Jl as FOLDER_IMG_PARALLACES,
  Ql as FOLDER_IMG_PICTURES,
  ed as FOLDER_IMG_SV_ACTORS,
  td as FOLDER_IMG_SV_ENEMIES,
  ad as FOLDER_IMG_SYSTEM,
  rd as FOLDER_IMG_TILESETS,
  id as FOLDER_IMG_TITLES1,
  nd as FOLDER_IMG_TITLES2,
  Td as FOLDER_JS,
  tt as FORCE_ACTION,
  ot as GAME_OVER,
  oe as GATHER_FOLLOWERS,
  Ce as GET_LOCATION_INFO,
  ee as GET_ONOFF_VEHICLE,
  en as HITTYPE_CERTAIN,
  an as HITTYPE_MAGICAL,
  tn as HITTYPE_PHYSICAL,
  b as INPUT_NUMBER,
  R as LABEL,
  Qi as LABELS_DATA_WEAPON,
  Cs as LABELS_SYSTEM_BATTLER_PARAMS,
  Ds as LABELS_SYSTEM_GAME_COMMANDS,
  A as LABEL_JUMP,
  qa as LABEL_SET_DATA,
  En as LABEL_SET_ITEM_EFFECT,
  Ti as LABEL_SET_TRAIT,
  w as LOOP,
  N as LOOP_BREAK,
  fo as MODULE_DATA,
  ye as MOVE_PICTURE,
  Ee as NAME_INPUT_PROCESSING,
  d as NO_OPERATION,
  rt as OPEN_MENU_SCREEN,
  nt as OPEN_SAVE_SCREEN,
  Gp as OPERAND_CONSTANT,
  Kp as OPERAND_GAMEDATA,
  Yp as OPERAND_RANDOM,
  $p as OPERAND_SCRIPT,
  Xp as OPERAND_VARIABLE,
  mi as PARTY_ABILITY_CANCEL_SURPRISE,
  li as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  ni as PARTY_ABILITY_ENCOUNTER_HALF,
  oi as PARTY_ABILITY_ENCOUNTER_NONE,
  pi as PARTY_ABILITY_GOLD_DOUBLE,
  si as PARTY_ABILITY_RAISE_PREEMPTIVE,
  ve as PLAY_BGM,
  Te as PLAY_BGS,
  we as PLAY_ME,
  qe as PLAY_MOVIE,
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
  vt as ROUTE_MOVE_LOWER_R,
  xt as ROUTE_MOVE_RANDOM,
  bt as ROUTE_MOVE_RIGHT,
  Tt as ROUTE_MOVE_TOWARD,
  It as ROUTE_MOVE_UP,
  ht as ROUTE_MOVE_UPPER_L,
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
  Rt as ROUTE_TURN_DOWN,
  At as ROUTE_TURN_LEFT,
  Ft as ROUTE_TURN_RANDOM,
  jt as ROUTE_TURN_RIGHT,
  Bt as ROUTE_TURN_TOWARD,
  Ct as ROUTE_TURN_UP,
  qt as ROUTE_WAIT,
  Xt as ROUTE_WALK_ANIME_OFF,
  Gt as ROUTE_WALK_ANIME_ON,
  ke as SAVE_BGM,
  ja as SCHEMA_DAMAGE,
  Ma as SCHEMA_DATA_ACTOR,
  Ea as SCHEMA_DATA_ARMMOR,
  Fa as SCHEMA_DATA_CLASS,
  Ha as SCHEMA_DATA_ENEMY,
  Gn as SCHEMA_DATA_ITEM,
  la as SCHEMA_DATA_MAP_INFO,
  On as SCHEMA_DATA_SKILL,
  Oa as SCHEMA_DATA_STATE,
  Ji as SCHEMA_DATA_WEAPON,
  cm as SCHEMA_SYSTEM_ADVANCED,
  vm as SCHEMA_SYSTEM_AUDIOFILES,
  hm as SCHEMA_SYSTEM_BATTLE_RULE_RMMZ,
  zm as SCHEMA_SYSTEM_BOOLEAN_GAMEMENU_OPTIONS,
  Bm as SCHEMA_SYSTEM_BOOLEAN_OPTIONS,
  Rs as SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE,
  Lm as SCHEMA_SYSTEM_GAME_INITIAL,
  Vm as SCHEMA_SYSTEM_IMAGE_SIZE,
  um as SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION,
  Om as SCHEMA_SYSTEM_OTHER_DATA,
  ms as SCHEMA_SYSTEM_RPG_DATA_NAMES,
  hs as SCHEMA_SYSTEM_TERMS_BUNDLE,
  Ss as SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW,
  Wm as SCHEMA_SYSTEM_TITLE_IMAGES,
  Ns as SCHEMA_SYSTEM_VEHICLE,
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
  v as SHOW_SCROLLING_TEXT_BODY,
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
  qi as SRC_COLOR,
  vo as SRC_DATA_ACTOR,
  No as SRC_DATA_ARMOR,
  Po as SRC_DATA_CLASS,
  qo as SRC_DATA_COMMON_EVNET,
  ko as SRC_DATA_ENEMY,
  So as SRC_DATA_ITEMS,
  ho as SRC_DATA_MAP,
  To as SRC_DATA_SKILL,
  xo as SRC_DATA_STATE,
  Ro as SRC_DATA_TROOP,
  wo as SRC_DATA_WEAPON,
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
  $s as buildReferenceItemSources,
  Ep as cloneChoices,
  ol as cloneEventCommand,
  nl as cloneParameters,
  kr as collapsOptionsToArray,
  Di as compileFormatRule,
  Us as compileItemEffectDisplayData,
  _s as compileTraitDisplayData,
  Ip as convertCommentArrayToObject,
  i as createActorControlChars,
  t as createControlCharFormat,
  ct as createEventCommand,
  po as createNoteEntity,
  n as createSystemVariableControlChars,
  fa as defineGameDataSources,
  Jm as defineSystemItems,
  hr as defineTraitCollapseType,
  Cr as defineTraitExtraParam,
  Si as defineTraitItems,
  di as defineTraitPartyAbility,
  Or as defineTraitRegularParam,
  Ii as defineTraitSpecialFlag,
  ai as defineTraitSpecialParam,
  Bi as detectFormatErrors,
  Zs as domainNames,
  Mr as extraParamName,
  Dr as extraParamsToArray,
  Bn as formatItemEffectText,
  Ui as formatTraitText,
  dp as fromArrayCommonEvent,
  up as fromArrayControlSwitches,
  xp as fromArrayInputNumber,
  qp as fromArrayScrollingTextBody,
  wp as fromArrayScrollingTextHeader,
  Dp as fromArraySetupChoice,
  jp as fromArraySetupChoiceItem,
  Bp as fromArrayShowMessageHeader,
  a as fromStringArray,
  il as getActorValue,
  Rm as getArmorCategoryEnabled,
  Um as getArmorTypes,
  r as getControlChars,
  Ym as getElementTypes,
  rl as getEnemyValue,
  Tm as getEquipCommandEnabled,
  Km as getEquipTypes,
  wm as getFormationCommandEnabled,
  Pm as getItemCategoryEnabled,
  km as getItemCommandEnabled,
  Am as getKeyItemCategoryEnabled,
  bo as getNoteValue,
  xs as getParamNames,
  Nm as getSaveCommandEnabled,
  xm as getSkillCommandEnabled,
  $m as getSkillTypes,
  Sm as getStatusCommandEnabled,
  Zm as getSwitches,
  Xm as getVariableNames,
  qm as getWeaponCategoryEnabled,
  _m as getWeaponTypes,
  sl as isCloneableCommand,
  gl as isCommandAudio,
  dl as isCommandChangeActorText,
  Ml as isCommandChangeBattleBgm,
  El as isCommandChangeDefeatMe,
  zl as isCommandChangeVictoryMe,
  Ll as isCommandCommentBody,
  Hl as isCommandCommentHeader,
  kl as isCommandCommonEvent,
  Pl as isCommandInputNumber,
  Il as isCommandNonParam,
  Al as isCommandPlayBgm,
  jl as isCommandPlayBgs,
  Cl as isCommandPlayMe,
  Dl as isCommandPlaySe,
  Wl as isCommandScriptBody,
  Vl as isCommandScriptHeader,
  ul as isCommandScrollTextHead,
  wl as isCommandShowChoiceItem,
  Tl as isCommandShowChoices,
  Rl as isCommandShowMessage,
  Fl as isCommandShowMessageBody,
  Bl as isCommandShowScrollingTextBody,
  vl as isCommandTextBody,
  ro as isDataActor,
  io as isDataArmor,
  so as isDataClass,
  oo as isDataEnemy,
  to as isDataItem,
  Ia as isDataMap,
  ba as isDataMapInfo,
  ao as isDataSkill,
  mo as isDataState,
  Hs as isDataSystem,
  no as isDataWeapon,
  ym as isValidNumber,
  lm as labelsRegistry,
  Ca as makeActorData,
  za as makeArmorData,
  tp as makeAudioCommand,
  gm as makeAudioFileParams,
  Em as makeBooleanOptions,
  Ba as makeClassData,
  ap as makeCommandAudioAny,
  Js as makeCommandChangeActorName,
  Qs as makeCommandChangeActorNickName,
  ep as makeCommandChangeActorProfile,
  mp as makeCommandChangeBattleBGM,
  pp as makeCommandChangeDefeatME,
  sp as makeCommandChangeVictoryME,
  vp as makeCommandCommentBody,
  fp as makeCommandCommentHeader,
  lp as makeCommandCommonEvent,
  gp as makeCommandControlSwitches,
  Tp as makeCommandInputNumber,
  rp as makeCommandPlayBGM,
  ip as makeCommandPlayBGS,
  np as makeCommandPlayME,
  op as makeCommandPlaySE,
  Op as makeCommandScriptArray,
  Wp as makeCommandScriptBody,
  Vp as makeCommandScriptHeader,
  Rp as makeCommandScrollingTextBody,
  Np as makeCommandScrollingTextHeader,
  zp as makeCommandSetupChoice,
  Ap as makeCommandShowChoiceItem,
  Fp as makeCommandShowMessage,
  Lp as makeCommandShowMessageBody,
  bp as makeCommentArray,
  hp as makeCommentCommandArray,
  o as makeCommonEventData,
  Aa as makeDamage,
  ss as makeDataNames,
  La as makeDropItem,
  Ps as makeEditorSetting,
  Va as makeEnemyAction,
  Wa as makeEnemyData,
  l as makeEventPageCondition,
  Hm as makeGameInitial,
  jm as makeItemCategories,
  Cm as makeItemCategoriesFromArray,
  Wn as makeItemData,
  sa as makeMapData,
  na as makeMapEvent,
  oa as makeMapEventIamge,
  ma as makeMapEventPage,
  pa as makeMapInfoData,
  Dm as makeMenuCommandsEnabled,
  Mm as makeMenuCommandsEnabledFromArray,
  ks as makeParamNamesArray,
  lo as makeRegex,
  Xn as makeSkillData,
  bm as makeSoundsArray,
  Im as makeSoundsObject,
  Ga as makeStateData,
  dm as makeSystemAdvanced,
  Ws as makeSystemData,
  ls as makeTermsBasic,
  ds as makeTermsBasicFromArray,
  cs as makeTermsCommand,
  ys as makeTermsCommandFromArray,
  bs as makeTermsMessages,
  Ts as makeTitleCommandWindow,
  m as makeTroopData,
  p as makeTroopEventConditions,
  s as makeTroopMember,
  ws as makeVehicleData,
  Zi as makeWeaponData,
  Wi as mergeItemsSource,
  Da as normalizeDataActor,
  ci as partyAbilityToArray,
  bc as pluginSourceToJSON,
  uo as readNote,
  co as readNoteObject,
  Xr as regularParamName,
  Gr as regularParamsToArray,
  go as replaceNote,
  In as resolveItemEffectLabels,
  Ao as resolveTraitLabels,
  Io as setNoteValue,
  fi as specialFlagToArray,
  ii as specialParamName,
  ri as specialParamsToArray,
  Ic as structToJSONSchema,
  cp as toArrayCommonEvent,
  yp as toArrayControlSwitches,
  kp as toArrayInputNumber,
  tl as toArrayOperandActorStatus,
  Up as toArrayOperandConstant,
  al as toArrayOperandEnemyStatus,
  el as toArrayOperandItemData,
  Jp as toArrayOperandRandom,
  Qp as toArrayOperandScript,
  Zp as toArrayOperandVariable,
  Pp as toArrayScrollingTextBody,
  Sp as toArrayScrollingTextHeader,
  Mp as toArraySetupChoice,
  Cp as toArraySetupChoiceItem,
  Hp as toArrayShowMessageHeader
};
//# sourceMappingURL=rpgTypes.es.js.map
