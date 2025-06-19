import e from "ajv";
const t = (e2, t2) => `\\${e2}[${t2}]`, a = (e2, a2) => a2.map((a3, i2) => ({ text: a3, controlChar: t(e2, i2) })), i = (e2) => Array.from(e2.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e3) => ({
  char: e3[1],
  id: parseInt(e3[2], 10)
})), r = (e2) => e2.map((e3) => ({ text: e3.name, controlChar: t("N", e3.id) })), n = (e2) => e2.variables.map((e3, a2) => ({
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
}), l = 0, c = 101, y = 401, u = 102, g = 402, b = 103, I = 104, v = 105, h = 405, f = 108, k = 408, x = 109, T = 111, S = 411, w = 112, q = 113, R = 115, N = 117, P = 118, D = 119, A = 121, M = 122, j = 123, z = 124, E = 125, C = 126, H = 127, F = 128, B = 129, L = 132, V = 133, W = 134, G = 135, X = 136, Y = 137, K = 138, $ = 139, U = 140, O = 201, _ = 202, Z = 203, J = 204, Q = 205, ee = 206, te = 211, ae = 212, ie = 213, re = 214, ne = 216, oe = 217, me = 221, se = 222, pe = 223, de = 224, le = 225, ce = 230, ye = 231, ue = 232, ge = 233, be = 234, Ie = 235, ve = 236, he = 241, fe = 242, ke = 243, xe = 244, Te = 245, Se = 246, we = 249, qe = 250, Re = 251, Ne = 261, Pe = 282, De = 283, Ae = 284, Me = 285, je = 301, ze = 302, Ee = 605, Ce = 303, He = 311, Fe = 312, Be = 313, Le = 314, Ve = 315, We = 320, Ge = 321, Xe = 322, Ye = 323, Ke = 324, $e = 325, Ue = 331, Oe = 332, _e = 333, Ze = 334, Je = 335, Qe = 336, et = 337, tt = 339, at = 340, it = 351, rt = 342, nt = 352, ot = 353, mt = 354, st = 355, pt = 655, dt = 356, lt = 357, ct = (e2, t2, a2 = 0) => ({
  code: e2,
  indent: a2,
  parameters: t2
}), yt = 0, ut = 1, gt = 2, bt = 3, It = 4, vt = 5, ht = 6, ft = 7, kt = 8, xt = 9, Tt = 10, St = 11, wt = 12, qt = 13, Rt = 14, Nt = 15, Pt = 16, Dt = 17, At = 18, Mt = 19, jt = 20, zt = 21, Et = 22, Ct = 23, Ht = 24, Ft = 25, Bt = 26, Lt = 27, Vt = 28, Wt = 29, Gt = 30, Xt = 31, Yt = 32, Kt = 33, $t = 34, Ut = 35, Ot = 36, _t = 37, Zt = 38, Jt = 39, Qt = 40, ea = 41, ta = 42, aa = 43, ia = 44, ra = 45, na = () => ({
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
}, ya = new e(), ua = ya.compile(da), ga = ya.compile(ca), ba = (e2) => ua(e2), Ia = (e2) => ga(e2), va = (e2, t2) => [ha(e2.skills, t2), fa(e2.actors, t2), ka(e2.states, t2), xa(e2.armors, t2), Ta(e2.classes, t2), Sa(e2.enemies, t2), wa(e2.items, t2), qa(e2.weapons, t2), Ra(e2.commonEvents, t2)], ha = (e2, t2) => ({
  label: t2.skill.title,
  items: e2,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), fa = (e2, t2) => ({
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
} }), wa = (e2, t2) => ({ items: e2, label: t2.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), qa = (e2, t2) => ({ items: e2, label: t2.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), Ra = (e2, t2) => ({ items: e2, label: t2.commonEvent.title, source: { author: "rmmz", module: "data", kind: "common_event" } }), Na = {
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
}, Pa = {
  title: "ダメージ",
  options: {}
}, Da = (e2 = {}) => ({ type: e2.type ?? 0, elementId: e2.elementId ?? 0, formula: e2.formula ?? "", variance: e2.variance ?? 0, critical: e2.critical ?? false }), Aa = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: { type: { type: "integer", minimum: 0 }, elementId: { type: "integer", minimum: 0 }, formula: { type: "string" }, variance: {
    type: "integer"
  }, critical: { type: "boolean" } }
}, Ma = (e2 = {}) => ({
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
}), Ca = {
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
}, Ha = {
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
}), Ya = 11, Ka = 12, $a = 13, Ua = 14, Oa = 21, _a = 22, Za = 23, Ja = 31, Qa = 32, ei = 33, ti = 34, ai = 35, ii = 41, ri = 42, ni = 43, oi = 44, mi = 51, si = 52, pi = 53, di = 54, li = 55, ci = 61, yi = 62, ui = 63, gi = 64, bi = 0, Ii = 1, vi = 2, hi = 3, fi = (e2, t2) => ({
  items: ki(e2.options, t2),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), ki = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, { id: 2, name: e2.instantCollaps }, {
  id: 3,
  name: e2.noneCollaps
}], xi = 0, Ti = 1, Si = 2, wi = 3, qi = 4, Ri = 5, Ni = 6, Pi = 7, Di = 8, Ai = 9, Mi = (e2) => ({
  items: ji(e2.options),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), ji = (e2) => [{ id: 0, name: e2.hitRate }, { id: 1, name: e2.evasionRate }, { id: 2, name: e2.criticalRate }, { id: 3, name: e2.criticalEvasionRate }, { id: 4, name: e2.magicEvasionRate }, {
  id: 5,
  name: e2.magicReflectionRate
}, { id: 6, name: e2.counterAttackRate }, { id: 7, name: e2.hpRegenerationRate }, { id: 8, name: e2.mpRegenerationRate }, { id: 9, name: e2.tpRegenerationRate }], zi = (e2, t2) => {
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
}, Ei = 0, Ci = 1, Hi = 2, Fi = 3, Bi = 4, Li = 5, Vi = 6, Wi = 7, Gi = (e2) => ({ items: Xi(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "params" } }), Xi = (e2) => [{
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
}, Ki = 0, $i = 1, Ui = 2, Oi = 3, _i = 4, Zi = 5, Ji = 6, Qi = 7, er = 8, tr = 9, ar = (e2) => ({ items: ir(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), ir = (e2) => [{
  id: 0,
  name: e2.targetRate
}, { id: 1, name: e2.guardEffectRate }, { id: 2, name: e2.recoveryEffectRate }, { id: 3, name: e2.pharmacology }, { id: 4, name: e2.mpCostRate }, { id: 5, name: e2.tpChargeRate }, {
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
}, nr = 0, or = 1, mr = 2, sr = 3, pr = 4, dr = 5, lr = (e2) => ({
  items: cr(e2.options),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), cr = (e2) => [{ id: 0, name: e2.encounterHalf }, { id: 1, name: e2.encounterNone }, { id: 2, name: e2.cancelSurprise }, {
  id: 3,
  name: e2.raisePreemptive
}, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], yr = 0, ur = 1, gr = 2, br = 3, Ir = (e2) => ({ items: vr(e2.options), label: e2.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), vr = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
  id: 3,
  name: e2.preventEscape
}], hr = "{name}", fr = "{name} * {value}%", kr = "{name} + {value}%", xr = "{value}", Tr = {
  title: "特徴",
  options: {
    regularParam: { title: "基本能力値", format: fr, options: {
      maxHp: "最大HP",
      maxMp: "最大MP",
      atk: "攻撃力",
      def: "防御力",
      matk: "魔法攻撃力",
      mdef: "魔法防御力",
      agi: "敏捷性",
      luk: "運"
    } },
    extraParam: { title: "追加能力値", format: kr, options: {
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
    specialParam: { title: "特殊能力値", format: fr, options: {
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
      format: hr,
      options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
    },
    collaps: { title: "消滅エフェクト", format: hr, options: {
      bossCollaps: "ボス崩壊",
      instantCollaps: "即時崩壊",
      noneCollaps: "崩壊なし"
    } },
    partyAbility: { title: "パーティ能力", format: hr, options: {
      cancelSurprise: "不意打ち無効",
      dropItemDouble: "アイテムドロップ2倍",
      encounterHalf: "エンカウント半減",
      encounterNone: "エンカウントなし",
      goldDouble: "ゴールド2倍",
      raisePreemptive: "先制攻撃率アップ"
    } },
    elementRate: { title: "属性有効度", format: fr },
    debuffRate: { title: "弱体有効度", format: fr },
    stateRate: { title: "ステート有効度", format: fr },
    stateResist: {
      title: "ステート無効",
      format: hr
    },
    attackElement: { title: "攻撃属性", format: hr },
    attackState: { title: "攻撃ステート", format: kr },
    attackSpeed: { title: "攻撃速度補正", format: xr },
    attackTimes: {
      title: "攻撃追加回数",
      format: xr
    },
    actionPlus: { title: "行動追加", format: fr },
    attackSkill: { title: "攻撃スキル", format: hr },
    equipWeaponType: { title: "装備武器タイプ", format: hr },
    equipArmorType: { title: "装備防具タイプ", format: hr },
    equipLock: {
      title: "装備固定",
      format: hr
    },
    equipSeal: { title: "装備封印", format: hr },
    slotType: { title: "スロットタイプ", format: hr },
    skillAdd: { title: "スキル追加", format: hr },
    skillSeal: { title: "スキルタイプ封印", format: hr },
    skillTypeAdd: { title: "スキルタイプ追加", format: hr },
    skillTypeSeal: { title: "スキルタイプ封印", format: hr }
  }
}, Sr = (e2, t2) => [Gi(e2.regularParam), Mi(e2.extraParam), ar(e2.specialParam), fi(e2.collaps, t2), Ir(e2.specialFlag), lr(e2.partyAbility)], wr = "Trait", qr = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }
}, Rr = "rmmz", Nr = "colors", Pr = (e2) => e2.map((e3) => ({
  dataKey: e3,
  placeHolder: `{${e3}}`
})), Dr = (e2) => ({
  dataKey: e2.dataIdKey,
  placeHolder: `{${e2.dataIdKey}}`,
  sourceId: { author: e2.sourceId.author, kind: e2.sourceId.kind, module: e2.sourceId.module }
}), Ar = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, Mr = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : [...t2];
}, jr = (e2, t2 = []) => {
  return {
    itemMappers: [...Mr(e2), ...t2].map(zr),
    fallbackFormat: { text: Er(e2), label: Cr(e2) },
    properties: (a2 = e2.placeHolder ?? {}, {
      numbers: a2.numbers ? Pr(a2.numbers) : [],
      strings: a2.strings ? Pr(a2.strings) : []
    }),
    arrayIndex: e2.arrayIndex ? e2.arrayIndex.map(Dr) : []
  };
  var a2;
}, zr = (e2) => ({ placeHolder: `{${e2.placeHolder}}`, kindKey: e2.kindKey, dataIdKey: e2.dataIdKey }), Er = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const t2 = ((e3) => {
    var _a2, _b, _c;
    return /* @__PURE__ */ new Set([...((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? [], ...((_b = e3.placeHolder) == null ? void 0 : _b.strings) ?? [], ...((_c = e3.arrayIndex) == null ? void 0 : _c.map((e4) => e4.dataIdKey)) ?? []]);
  })(e2);
  return 0 === t2.size ? "value not found" : Array.from(t2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, Cr = (e2) => {
  var _a2;
  return void 0 !== ((_a2 = e2.fallbackFormat) == null ? void 0 : _a2.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, Hr = (e2, t2, a2) => {
  const i2 = t2[a2.dataKey];
  return null == i2 ? e2 : e2.replaceAll(a2.placeHolder, String(i2));
}, Fr = (e2, t2, a2, i2 = { placeHolderMaxLength: 50, formatMaxLength: 200 }) => e2.pattern.length >= i2.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{
  message: a2.formatVeryLong,
  reason: e2.pattern.slice(0, i2.formatMaxLength)
}], semanticErrors: [] } : {
  formatLabel: e2.label,
  semanticErrors: Lr(e2, t2, a2),
  syntaxErrors: Br(e2.pattern, t2, a2, i2.placeHolderMaxLength)
}, Br = (e2, t2, a2, i2) => {
  const r2 = Array.from(e2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), n2 = ((e3) => {
    var _a2, _b, _c, _d2;
    return /* @__PURE__ */ new Set([...((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? [], ...e3.itemMapper ? [e3.itemMapper.placeHolder] : [], ...((_b = e3.itemMappers) == null ? void 0 : _b.map((e4) => e4.placeHolder)) ?? [], ...((_c = e3.placeHolder) == null ? void 0 : _c.strings) ?? [], ...((_d2 = e3.arrayIndex) == null ? void 0 : _d2.map((e4) => e4.dataIdKey)) ?? []]);
  })(t2);
  return r2.reduce((e3, t3) => {
    const r3 = t3[1];
    return 0 === r3.length ? e3 : r3.length > i2 ? (e3.push({ message: a2.longPlaceHolder, reason: r3.slice(0, i2) }), e3) : (n2.has(r3) || e3.push({
      message: a2.extraPlaceHolder,
      reason: r3
    }), e3);
  }, []);
}, Lr = (e2, t2, a2) => Mr(t2).reduce((t3, i2) => {
  const r2 = Vr(e2, i2, a2);
  return r2 && t3.push(r2), t3;
}, []), Vr = (e2, t2, a2) => {
  const i2 = e2.pattern.includes(t2.placeHolder), r2 = !!e2.dataSource;
  return !i2 && r2 ? { message: a2.missingName, reason: t2.placeHolder } : i2 && !r2 ? { message: a2.missingSourceId, reason: t2.placeHolder } : void 0;
}, Wr = (e2, t2) => {
  const a2 = Yr(t2);
  return e2.reduce((e3, t3) => {
    const i2 = Gr(t3, a2);
    return e3.set(t3.kindId, i2), e3;
  }, /* @__PURE__ */ new Map());
}, Gr = (e2, t2) => {
  const a2 = Xr(e2.dataSource, t2);
  return { patternCompiled: e2.pattern, label: e2.label, data: a2 ? a2.items : void 0 };
}, Xr = (e2, t2) => {
  if (e2) return t2.get(Ar(e2));
}, Yr = (e2) => e2.reduce((e3, t2) => {
  const a2 = { items: Kr(t2.items), source: t2.source, label: t2.label };
  return e3.set(Ar(t2.source), a2), e3;
}, /* @__PURE__ */ new Map()), Kr = (e2) => e2.map((e3) => ({
  id: e3.id,
  name: e3.name
})), $r = (e2, t2, a2, i2, r2) => {
  const n2 = ((e3, t3, a3) => {
    const i3 = a3.properties.numbers.reduce((e4, a4) => Hr(e4, t3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => Hr(e4, t3, a4), i3);
  })(i2, e2, a2);
  return t2 ? Ur(n2, e2, a2, t2, r2) : n2;
}, Ur = (e2, t2, a2, i2, r2) => {
  const n2 = ((e3, t3) => {
    const a3 = ((e4, t4) => {
      const a4 = t4[e4];
      return a4 && a4.id === e4 ? a4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return a3 ? a3.name : `?data[${t3}]`;
  })(i2, r2(t2));
  return a2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, n2), e2);
}, Or = {
  itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" },
  placeHolder: { numbers: ["value"] }
}, _r = (e2, t2, a2) => {
  const i2 = jr(Or);
  return $r(t2, a2, i2, e2.pattern, (e3) => e3.dataId);
}, Zr = (e2 = {}) => ({
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
  damage: Da(e2.damage ?? {}),
  wtypeId: e2.wtypeId ?? 0
}), Jr = { type: "object", required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"], properties: {
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
} }, Qr = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, en = 0, tn = 1, an = 2, rn = 11, nn = 12, on = 13, mn = 21, sn = 22, pn = 31, dn = 32, ln = 33, cn = 34, yn = 41, un = 42, gn = 43, bn = 44, In = (e2) => [fn(e2), kn(e2), xn(e2), Tn(e2), Sn(e2), wn(e2), qn(e2), Rn(e2), Nn(e2), hn(e2), Pn(e2), Dn(e2), An(e2)], vn = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), hn = (e2) => vn(41, e2.special), fn = (e2) => vn(11, e2.recoverHp), kn = (e2) => vn(12, e2.recoverMp), xn = (e2) => vn(13, e2.gainTp), Tn = (e2) => vn(21, e2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), Sn = (e2) => vn(22, e2.removeState, { author: "rmmz", module: "data", kind: "state" }), wn = (e2) => vn(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), qn = (e2) => vn(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Rn = (e2) => vn(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), Nn = (e2) => vn(34, e2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), Pn = (e2) => vn(42, e2.grow, { author: "rmmz", module: "trait", kind: "params" }), Dn = (e2) => vn(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), An = (e2) => vn(44, e2.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), Mn = "{name} {value1}%", jn = "{value1}% + {value2}", zn = "{name} {value1}ターン", En = "{name}", Cn = { title: "使用効果", options: { addBuff: {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: zn
}, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: zn }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: jn }, grow: {
  desc: "成長効果",
  domainName: "成長効果",
  format: "{name} + {value1}"
}, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: En }, recoverHp: {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: jn
}, recoverMp: {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: jn
}, removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: En }, removeDebuff: {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: En
}, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: Mn }, special: { desc: "特殊効果", domainName: "特殊効果", format: En }, addState: {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: Mn
}, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: En } } }, Hn = 0, Fn = (e2, t2, a2) => {
  const i2 = a2.find((e3) => e3.id === t2.dataId), r2 = i2 ? i2.name : "Unknown Item";
  return e2.pattern.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", r2);
}, Bn = { title: "アイテム", options: { consumable: "消耗品" } }, Ln = {
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
  damage: Da(e2.damage ?? {}),
  effects: [],
  price: 0
}), Gn = {
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
}, Xn = {
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
}, Yn = (e2 = {}) => ({
  stypeId: e2.stypeId ?? 0,
  requiredWtypeId1: e2.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e2.requiredWtypeId2 ?? 0,
  animationId: e2.animationId ?? 0,
  damage: Da(e2.damage ?? {}),
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
}), Kn = new e(), $n = Kn.compile(Xn), Un = Kn.compile(Gn), On = Kn.compile(za), _n = Kn.compile(Ca), Zn = Kn.compile(Jr), Jn = Kn.compile(Ba), Qn = Kn.compile(Ga), eo = Kn.compile(Ha), to = (e2) => $n(e2), ao = (e2) => Un(e2), io = (e2) => On(e2), ro = (e2) => _n(e2), no = (e2) => Zn(e2), oo = (e2) => Jn(e2), mo = (e2) => Qn(e2), so = (e2) => eo(e2), po = (e2, t2) => `<${e2}:${t2}>`, lo = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, co = (e2, t2) => uo(e2.note, (a2, i2) => t2(a2, i2, e2)), yo = (e2) => uo(e2, (e3, t2) => [e3, t2]), uo = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, go = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (e3, a2, i2) => {
    const r2 = t2(a2, i2);
    if (r2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return po(a2, r2);
  });
}, bo = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, i2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return i2 ? i2[2] : void 0;
}, Io = (e2, t2, a2) => {
  const i2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(i2, (e3, i3) => i3 === t2 ? po(i3, a2) : e3);
}, vo = "data", ho = "actor", fo = "map", ko = "enemy", xo = "state", To = "skill", So = "item", wo = "weapon", qo = "armor", Ro = "class", No = "common_event", Po = "troop", Do = (e2) => [Ao(e2.elementRate), Mo(e2.debuffRate), jo(e2.stateRate), zo(e2.stateResist), Eo(e2.regularParam), Co(e2.extraParam), Ho(e2.specialParam), Fo(e2.attackElement), Bo(e2.attackState), Lo(e2.attackSpeed), Vo(e2.attackTimes), Wo(e2.attackSkill), Go(e2.skillTypeAdd), Xo(e2.skillTypeSeal), Yo(e2.skillAdd), Ko(e2.skillSeal), $o(e2.equipWeaponType), Uo(e2.equipArmorType), Oo(e2.equipLock), _o(e2.equipSeal), Zo(e2.slotType), Jo(e2.actionPlus), Qo(e2.specialFlag), em(e2.collaps), tm(e2.partyAbility)], Ao = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 11,
  dataSource: rm()
}), Mo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), jo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 13,
  dataSource: am()
}), zo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 14, dataSource: am() }), Eo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), Co = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), Ho = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), Fo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 31, dataSource: rm() }), Bo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 32,
  dataSource: am()
}), Lo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 33 }), Vo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 34 }), Wo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 35,
  dataSource: im()
}), Go = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 41, dataSource: nm() }), Xo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 42,
  dataSource: nm()
}), Yo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 43, dataSource: im() }), Ko = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 44, dataSource: im() }), $o = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 51,
  dataSource: om()
}), Uo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 52, dataSource: mm() }), Oo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 53,
  dataSource: sm()
}), _o = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 54, dataSource: sm() }), Zo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 55, dataSource: sm() }), Jo = (e2) => ({
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
}), im = () => ({ author: "rmmz", module: "data", kind: "skill" }), rm = () => ({ author: "rmmz", module: "system", kind: "elements" }), nm = () => ({
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
}, dm = () => ({ rpg: { damage: Pa, data: Na, traits: Tr, itemEffect: Cn }, global: pm }), lm = (e2 = {}) => ({
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
}, ym = {
  type: "object",
  additionalProperties: false,
  required: ["type", "weaponImageId"],
  properties: { type: { type: "number" }, weaponImageId: { type: "number" } }
}, um = (e2) => "number" == typeof e2 && !Number.isNaN(e2), gm = (e2 = {}) => ({
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
}), vm = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }, hm = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: vm, victoryMe: vm, gameoverMe: vm, titleBgm: vm, defeatMe: vm, sounds: {
    type: "array",
    items: vm,
    minItems: 24,
    maxItems: 24
  } }
}, fm = {
  type: "object",
  additionalProperties: false,
  required: ["magicSkills", "battleSystem"],
  properties: { magicSkills: {
    type: "array",
    items: { type: "number" },
    minItems: 0,
    uniqueItems: true
  }, battleSystem: { type: "number" } }
}, km = (e2) => e2.menuCommands[0], xm = (e2) => e2.menuCommands[1], Tm = (e2) => e2.menuCommands[2], Sm = (e2) => e2.menuCommands[3], wm = (e2) => e2.menuCommands[4], qm = (e2) => e2.menuCommands[5], Rm = (e2) => e2.itemCategories[0], Nm = (e2) => e2.itemCategories[1], Pm = (e2) => e2.itemCategories[2], Dm = (e2) => e2.itemCategories[3], Am = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], Mm = (e2) => ({
  item: e2[0],
  weapon: e2[1],
  armor: e2[2],
  keyItem: e2[3]
}), jm = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], zm = (e2) => ({
  item: e2[0],
  skill: e2[1],
  equip: e2[2],
  status: e2[3],
  formation: e2[4],
  save: e2[5]
}), Em = { required: ["itemCategories", "menuCommands"], additionalProperties: false, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, Cm = (e2 = {}) => ({
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
}), Hm = { type: "boolean" }, Fm = {
  type: "object",
  additionalProperties: false,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: Hm,
    optDisplayTp: Hm,
    optDrawTitle: Hm,
    optExtraExp: Hm,
    optFloorDeath: Hm,
    optFollowers: Hm,
    optKeyItemsNumber: Hm,
    optSideView: Hm,
    optSlipDeath: Hm,
    optTransparent: Hm,
    optMessageSkip: Hm,
    optSplashScreen: Hm
  }
}, Bm = (e2 = {}) => ({
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
} } }, Gm = { type: "object", additionalProperties: false, required: ["locale", "versionId", "windowTone"], properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
  type: "array",
  items: { type: "number" },
  minItems: 4,
  maxItems: 4
} } }, Xm = (e2, t2) => ({
  name: e2,
  id: t2
}), Ym = (e2) => e2.variables.map(Xm), Km = (e2) => e2.elements.map(Xm), $m = (e2) => e2.equipTypes.map(Xm), Um = (e2) => e2.skillTypes.map(Xm), Om = (e2) => e2.weaponTypes.map(Xm), _m = (e2) => e2.armorTypes.map(Xm), Zm = (e2) => e2.switches.map(Xm), Jm = (e2, t2) => [es(e2, t2), ts(e2, t2), ns(e2, t2), as(e2, t2), Qm(e2, t2), is(e2, t2), rs(e2, t2)], Qm = (e2, t2) => ({
  items: _m(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), es = (e2, t2) => ({ items: Km(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), ts = (e2, t2) => ({ items: $m(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), as = (e2, t2) => ({
  items: Um(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), is = (e2, t2) => ({ items: Ym(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), rs = (e2, t2) => ({ items: Zm(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), ns = (e2, t2) => ({
  items: Om(e2),
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
}), ps = (e2) => e2 ? [...e2] : [], ds = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], ls = (e2) => ({
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
}), cs = (e2) => ys(e2, ""), ys = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], us = (e2) => ({
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
}), Is = { type: "string" }, vs = {
  type: "string",
  nullable: true
}, hs = { type: "string" }, fs = { required: ["terms", "currencyUnit", "gameTitle"], additionalProperties: false, type: "object", properties: {
  currencyUnit: { type: "string" },
  gameTitle: { type: "string" },
  terms: { additionalProperties: false, type: "object", required: ["messages", "commands", "basic", "params"], properties: { messages: {
    type: "object",
    additionalProperties: false,
    required: ["actionFailure", "actorDamage", "actorNoDamage", "actorRecovery", "actorGain", "actorLoss", "actorDrain", "alwaysDash", "bgmVolume", "bgsVolume", "commandRemember", "criticalToActor", "criticalToEnemy", "counterAttack", "debuffAdd", "defeat", "enemyDamage", "enemyNoDamage", "enemyRecovery", "enemyGain", "enemyLoss", "enemyDrain", "evasion", "expNext", "expTotal", "escapeFailure", "escapeStart", "file", "loadMessage", "meVolume", "magicEvasion", "magicReflection", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "partyName", "preemptive", "saveMessage", "seVolume", "substitute", "touchUI", "victory", "useItem"],
    properties: {
      actionFailure: hs,
      actorDamage: hs,
      actorNoDamage: hs,
      actorRecovery: hs,
      actorGain: hs,
      actorLoss: hs,
      actorDrain: hs,
      alwaysDash: hs,
      bgmVolume: hs,
      bgsVolume: hs,
      commandRemember: hs,
      criticalToActor: hs,
      criticalToEnemy: hs,
      counterAttack: hs,
      debuffAdd: hs,
      defeat: hs,
      enemyDamage: hs,
      enemyNoDamage: hs,
      enemyRecovery: hs,
      enemyGain: hs,
      enemyLoss: hs,
      enemyDrain: hs,
      evasion: hs,
      expNext: hs,
      expTotal: hs,
      escapeFailure: hs,
      escapeStart: hs,
      file: hs,
      loadMessage: hs,
      meVolume: hs,
      magicEvasion: hs,
      magicReflection: hs,
      obtainExp: hs,
      obtainGold: hs,
      obtainItem: hs,
      obtainSkill: hs,
      partyName: hs,
      preemptive: hs,
      saveMessage: hs,
      seVolume: hs,
      substitute: hs,
      touchUI: hs,
      victory: hs,
      useItem: hs,
      buffAdd: hs,
      buffRemove: hs,
      actorNoHit: hs,
      enemyNoHit: hs,
      autosave: hs,
      emerge: hs,
      levelUp: hs,
      possession: hs,
      surprise: hs
    }
  }, commands: {
    type: "array",
    items: [Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, Is, vs, Is, Is, vs, Is, Is],
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
}), qs = {
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
}, Rs = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), Ns = { additionalProperties: false, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: {
  type: "integer",
  minimum: 1
}, equips: { type: "array", items: { type: "integer" } } } }, Ps = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: Ns },
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
}, Ds = { title: "オプション", options: {
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
} }, As = {
  title: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, Ms = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, js = { title: "コマンド", options: {
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
} }, zs = {
  additionalProperties: false,
  required: ["airship", "boat", "ship", "advanced", "attackMotions"],
  type: "object",
  properties: { airship: qs, boat: qs, ship: qs, advanced: cm, attackMotions: { type: "array", items: ym } }
}, Es = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), { required: [], properties: {} }), Cs = new e({ strict: true }), Hs = ((e2) => {
  const t2 = Es(e2);
  return { additionalProperties: false, type: "object", required: Array.from(new Set(t2.required)), properties: t2.properties };
})([zs, hm, fm, Em, Fm, Lm, Vm, Gm, ms, fs, Wm, Ps]), Fs = Cs.compile(Hs), Bs = (e2) => Fs(e2), Ls = Cs.compile(Ns);
Cs.compile(ym);
const Vs = Cs.compile(Vm), Ws = (e2) => {
  var _a2, _b, _c, _d2, _e2, _f, _g, _h, _i2, _j, _k, _l, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u, _v;
  const t2 = Ys(e2.size);
  return {
    ...Cm(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: bm(e2.sounds),
    editor: Rs(e2.editing),
    advanced: lm(e2.advanced),
    title1Name: ((_c = e2.images) == null ? void 0 : _c.title1Name) ?? "",
    title2Name: ((_d2 = e2.images) == null ? void 0 : _d2.title2Name) ?? "",
    ...ss(e2.dataNames ?? {}),
    magicSkills: Xs([]),
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
    battleback2Name: ((_l = e2.battleTest) == null ? void 0 : _l.battleback2Name) ?? "",
    testTroopId: ((_m2 = e2.battleTest) == null ? void 0 : _m2.testTroopId) ?? 0,
    testBattlers: Ks((_n2 = e2.battleTest) == null ? void 0 : _n2.testBattlers, $s),
    battleBgm: gm((_o2 = e2.bgm) == null ? void 0 : _o2.battleBgm),
    victoryMe: gm((_p2 = e2.me) == null ? void 0 : _p2.victoryMe),
    editMapId: ((_q = e2.editorTemporary) == null ? void 0 : _q.editMapId) ?? 0,
    battlerName: ((_r2 = e2.editorTemporary) == null ? void 0 : _r2.battlerName) ?? "",
    locale: "",
    startMapId: ((_s2 = e2.gameInit) == null ? void 0 : _s2.startMapId) ?? 0,
    startX: ((_t2 = e2.gameInit) == null ? void 0 : _t2.startX) ?? 0,
    startY: ((_u = e2.gameInit) == null ? void 0 : _u.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Gs(e2.terms ?? {}),
    itemCategories: Am(e2.itemCategories),
    partyMembersArray: Xs((_v = e2.gameInit) == null ? void 0 : _v.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: jm(e2.menuComamnds)
  };
}, Gs = (e2) => ({
  basic: ds(e2.basic ?? {}),
  commands: cs(e2.commands ?? {}),
  params: ks(e2.params ?? {}),
  messages: bs(e2.messages ?? {})
}), Xs = (e2) => e2 ? [...e2] : [], Ys = (e2) => ((e3) => Vs(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Ks = (e2, t2) => e2 ? e2.map(t2) : [], $s = (e2) => ((e3) => Ls(e3))(e2) ? { actorId: e2.actorId, equips: Xs(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, Us = (e2, t2, a2, i2, r2, n2) => [...Sr(a2, i2), ...va(e2, t2), ...Jm(r2, n2)], Os = (e2, t2) => Wr(Do(t2), e2), _s = (e2, t2, a2) => {
  const i2 = In(t2);
  return Wr(a2 ? [...i2, ...a2] : i2, e2);
}, Zs = (e2) => Object.entries(e2).map(([, e3]) => e3.title), Js = (e2, t2 = 0) => ({ code: 320, parameters: [e2.actorId, e2.name], indent: t2 }), Qs = (e2, t2 = 0) => ({
  code: 324,
  parameters: [e2.actorId, e2.nickname],
  indent: t2
}), ep = (e2, t2 = 0) => ({ code: 325, parameters: [e2.actorId, e2.profile], indent: t2 }), tp = (e2, t2) => ap(e2, gm({ name: t2 })), ap = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [gm(t2)],
  indent: a2
}), ip = (e2, t2 = 0) => ap(241, e2, t2), rp = (e2, t2 = 0) => ap(245, e2, t2), np = (e2, t2 = 0) => ap(249, e2, t2), op = (e2, t2 = 0) => ap(250, e2, t2), mp = (e2, t2 = 0) => ap(132, e2, t2), sp = (e2, t2 = 0) => ap(133, e2, t2), pp = (e2, t2 = 0) => ap(139, e2, t2), dp = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: cp(e2 ?? {})
}), lp = (e2) => ({ eventId: e2[0] }), cp = (e2) => [e2.eventId ?? 0], yp = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), up = (e2) => [e2.min, e2.max, e2.value], gp = (e2, t2 = 0) => ({
  code: 121,
  indent: t2,
  parameters: up(e2)
}), bp = (e2) => [e2], Ip = (e2) => ({ comment: e2[0] }), vp = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: bp(e2) }), hp = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: bp(e2)
}), fp = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? vp(e3, t2) : hp(e3, t2)), kp = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], xp = (e2) => ({ variableId: e2[0], digits: e2[1] }), Tp = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: kp(e2 ?? {})
}), Sp = (e2 = {}) => [(e2 == null ? void 0 : e2.speed) ?? 4, (e2 == null ? void 0 : e2.skip) ?? false], wp = (e2) => ({ speed: e2[0], skip: e2[1] }), qp = (e2 = {}, t2 = 0) => ({ code: 105, indent: t2, parameters: Sp(e2) }), Rp = (e2 = "") => [e2], Np = (e2) => ({ content: e2[0] }), Pp = (e2 = "", t2 = 0) => ({
  code: 405,
  indent: t2 ?? 0,
  parameters: Rp(e2)
}), Dp = (e2, t2 = 0) => ({ code: 402, indent: t2, parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""] }), Ap = (e2) => ({ index: e2[0], name: e2[1] }), Mp = (e2) => [e2.index ?? 0, e2.name ?? ""], jp = (e2) => ({
  choices: e2[0],
  cancelType: e2[1],
  defaultType: e2[2],
  positionType: e2[3],
  background: e2[4]
}), zp = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], Ep = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), Cp = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), Hp = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), Fp = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), Bp = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName], Lp = (e2, t2 = 0) => ({ code: 401, indent: t2, parameters: [e2] }), Vp = (e2, t2 = 0) => ({
  code: 355,
  indent: t2,
  parameters: [e2]
}), Wp = (e2, t2 = 0) => ({ code: 655, indent: t2, parameters: [e2] }), Gp = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Vp(e3, t2) : Wp(e3, t2)), Xp = 0, Yp = 1, Kp = 2, $p = 3, Up = 4, Op = {
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
}, _p = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], Zp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], Jp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], Qp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], ed = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], td = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], ad = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, Op[t2.param]], id = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, rd = (e2, t2) => {
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
}, nd = (e2) => [...e2], od = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: nd(e2.parameters)
}), md = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, sd = (e2) => e2.parameters.every(md), pd = new e(), dd = pd.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{
    type: "integer",
    minimum: 0
  }, { type: "string" }] } },
  additionalProperties: false
}), ld = (e2) => dd(e2), cd = pd.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } }, required: ["code", "indent", "parameters"] }), yd = (e2) => cd(e2), ud = pd.compile({
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
}), gd = (e2) => ud(e2), bd = pd.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
    type: "integer",
    enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
  } },
  additionalProperties: false
}), Id = (e2) => bd(e2), vd = pd.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), hd = (e2) => vd(e2), fd = pd.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), kd = (e2) => fd(e2), xd = pd.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } },
  required: ["code", "indent", "parameters"]
}), Td = (e2) => xd(e2), Sd = pd.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 402
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } },
  required: ["code", "indent", "parameters"]
}), wd = (e2) => Sd(e2), qd = pd.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), Rd = (e2) => qd(e2), Nd = pd.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), Pd = (e2) => Nd(e2), Dd = (e2) => gd(e2) && 241 === e2.code, Ad = (e2) => gd(e2) && 245 === e2.code, Md = (e2) => gd(e2) && 249 === e2.code, jd = (e2) => gd(e2) && 250 === e2.code, zd = (e2) => gd(e2) && 132 === e2.code, Ed = (e2) => gd(e2) && 133 === e2.code, Cd = (e2) => gd(e2) && 139 === e2.code, Hd = (e2) => hd(e2) && 401 === e2.code, Fd = (e2) => hd(e2) && 405 === e2.code, Bd = (e2) => hd(e2) && 108 === e2.code, Ld = (e2) => hd(e2) && 408 === e2.code, Vd = (e2) => hd(e2) && 355 === e2.code, Wd = (e2) => hd(e2) && 655 === e2.code, Gd = "bgm", Xd = "se", Yd = "me", Kd = "bgs", $d = "battlebacks1", Ud = "battlebacks2", Od = "characters", _d = "enemies", Zd = "faces", Jd = "parallaxes", Qd = "pictures", el = "sv_actors", tl = "sv_enemies", al = "system", il = "tilesets", rl = "titles1", nl = "titles2", ol = "System.json", ml = "Actors.json", sl = "Classes.json", pl = "Skills.json", dl = "Items.json", ll = "Weapons.json", cl = "Armors.json", yl = "Enemies.json", ul = "Troops.json", gl = "States.json", bl = "Animations.json", Il = "Tilesets.json", vl = "CommonEvents.json", hl = "MapInfos.json", fl = "data", kl = "img", xl = "audio", Tl = "js";
export {
  at as ABORT_BATTLE,
  Rr as AUTHOR_RMMZ,
  je as BATTLE_PROCESSING,
  Xe as CHANGE_ACTOR_IMAGES,
  F as CHANGE_ARMORS,
  De as CHANGE_BATTLE_BACKGROUND,
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
  He as CHANGE_HP,
  C as CHANGE_ITEMS,
  G as CHANGE_MENU_ACCESS,
  Fe as CHANGE_MP,
  We as CHANGE_NAME,
  Ke as CHANGE_NICKNAME,
  Ae as CHANGE_PARALLAX,
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
  H as CHANGE_WEAPONS,
  K as CHANGE_WINDOW_COLOR,
  Ii as COLLAPS_BOSS,
  vi as COLLAPS_INSTANT,
  hi as COLLAPS_NONE,
  bi as COLLAPS_NORMAL,
  k as COMMENT_BODY,
  f as COMMENT_HEAD,
  N as COMMON_EVENT,
  T as CONDITIONAL_BRANCH,
  S as CONDITIONAL_BRANCH_ELSE,
  j as CONTROL_SELF_SWITCH,
  A as CONTROL_SWITCHES,
  z as CONTROL_TIMER,
  M as CONTROL_VARIABLES,
  Pa as DEFAULT_DAMAGE_LABELS,
  pm as DEFAULT_GLOBAL_LABELS,
  Bn as DEFAULT_ITEM_LABELS,
  Ln as DEFAULT_SKILL_LABELS,
  Ds as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  As as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Vn as DEFAULT_USABLE_ITEM_LABELS,
  pn as EFFECT_ADD_BUFF,
  dn as EFFECT_ADD_DEBUFF,
  mn as EFFECT_ADD_STATE,
  bn as EFFECT_COMMON_EVENT,
  on as EFFECT_GAIN_TP,
  un as EFFECT_GROW,
  gn as EFFECT_LEARN_SKILL,
  rn as EFFECT_RECOVER_HP,
  nn as EFFECT_RECOVER_MP,
  ln as EFFECT_REMOVE_BUFF,
  cn as EFFECT_REMOVE_DEBUFF,
  sn as EFFECT_REMOVE_STATE,
  yn as EFFECT_SPECIAL,
  Je as ENEMY_APPEAR,
  Ze as ENEMY_RECOVER_ALL,
  Qe as ENEMY_TRANSFORM,
  re as ERASE_EVENT,
  Ie as ERASE_PICTURE,
  R as EXIT_EVENT_PROCESSING,
  wi as EXTRA_PARAM_CEV,
  Ni as EXTRA_PARAM_CNT,
  Si as EXTRA_PARAM_CRI,
  Ti as EXTRA_PARAM_EVA,
  xi as EXTRA_PARAM_HIT,
  Pi as EXTRA_PARAM_HRG,
  qi as EXTRA_PARAM_MEV,
  Ri as EXTRA_PARAM_MRF,
  Di as EXTRA_PARAM_MRG,
  Ai as EXTRA_PARAM_TRG,
  se as FADEIN_SCREEN,
  fe as FADEOUT_BGM,
  Se as FADEOUT_BGS,
  me as FADEOUT_SCREEN,
  ml as FILENAME_ACTORS,
  bl as FILENAME_ANIMATIONS,
  cl as FILENAME_ARMORS,
  sl as FILENAME_CLASSES,
  vl as FILENAME_COMMON_EVENTS,
  yl as FILENAME_ENEMIES,
  dl as FILENAME_ITEMS,
  hl as FILENAME_MAP_INFOS,
  pl as FILENAME_SKILLS,
  gl as FILENAME_STATES,
  ol as FILENAME_SYSTEM,
  Il as FILENAME_TILESET,
  ul as FILENAME_TROOPS,
  ll as FILENAME_WEAPONS,
  yr as FLAG_ID_AUTO_BATTLE,
  ur as FLAG_ID_GUARD,
  br as FLAG_ID_PRESERVE_TP,
  gr as FLAG_ID_SUBSTITUTE,
  de as FLASH_SCREEN,
  xl as FOLDER_AUDIO,
  Gd as FOLDER_AUDIO_BGM,
  Kd as FOLDER_AUDIO_BGS,
  Yd as FOLDER_AUDIO_ME,
  Xd as FOLDER_AUDIO_SE,
  fl as FOLDER_DATA,
  kl as FOLDER_IMG,
  $d as FOLDER_IMG_BATTLEBACK1,
  Ud as FOLDER_IMG_BATTLEBACK2,
  Od as FOLDER_IMG_CHACTERS,
  _d as FOLDER_IMG_ENEMIES,
  Zd as FOLDER_IMG_FACES,
  Jd as FOLDER_IMG_PARALLACES,
  Qd as FOLDER_IMG_PICTURES,
  el as FOLDER_IMG_SV_ACTORS,
  tl as FOLDER_IMG_SV_ENEMIES,
  al as FOLDER_IMG_SYSTEM,
  il as FOLDER_IMG_TILESETS,
  rl as FOLDER_IMG_TITLES1,
  nl as FOLDER_IMG_TITLES2,
  Tl as FOLDER_JS,
  tt as FORCE_ACTION,
  ot as GAME_OVER,
  oe as GATHER_FOLLOWERS,
  Me as GET_LOCATION_INFO,
  ee as GET_ONOFF_VEHICLE,
  en as HITTYPE_CERTAIN,
  an as HITTYPE_MAGICAL,
  tn as HITTYPE_PHYSICAL,
  b as INPUT_NUMBER,
  P as LABEL,
  Qr as LABELS_DATA_WEAPON,
  Ms as LABELS_SYSTEM_BATTLER_PARAMS,
  js as LABELS_SYSTEM_GAME_COMMANDS,
  D as LABEL_JUMP,
  Na as LABEL_SET_DATA,
  Cn as LABEL_SET_ITEM_EFFECT,
  Tr as LABEL_SET_TRAIT,
  w as LOOP,
  q as LOOP_BREAK,
  vo as MODULE_DATA,
  ue as MOVE_PICTURE,
  Ce as NAME_INPUT_PROCESSING,
  l as NO_OPERATION,
  it as OPEN_MENU_SCREEN,
  nt as OPEN_SAVE_SCREEN,
  Xp as OPERAND_CONSTANT,
  $p as OPERAND_GAMEDATA,
  Kp as OPERAND_RANDOM,
  Up as OPERAND_SCRIPT,
  Yp as OPERAND_VARIABLE,
  mr as PARTY_ABILITY_CANCEL_SURPRISE,
  dr as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  nr as PARTY_ABILITY_ENCOUNTER_HALF,
  or as PARTY_ABILITY_ENCOUNTER_NONE,
  pr as PARTY_ABILITY_GOLD_DOUBLE,
  sr as PARTY_ABILITY_RAISE_PREEMPTIVE,
  he as PLAY_BGM,
  Te as PLAY_BGS,
  we as PLAY_ME,
  Ne as PLAY_MOVIE,
  qe as PLAY_SE,
  dt as PLUGIN_COMMAND_MV,
  lt as PLUGIN_COMMAND_MZ,
  Le as RECOVER_ALL,
  Vi as REGULAR_PARAM_AGI,
  Hi as REGULAR_PARAM_ATK,
  Fi as REGULAR_PARAM_DEF,
  Wi as REGULAR_PARAM_LUK,
  Bi as REGULAR_PARAM_MATK,
  Ei as REGULAR_PARAM_MAX_HP,
  Ci as REGULAR_PARAM_MAX_MP,
  Li as REGULAR_PARAM_MDEF,
  xe as RESUME_BGM,
  mt as RETURN_TO_TITLE_SCREEN,
  ge as ROTATE_PICTURE,
  aa as ROUTE_CHANGE_BLEND_MODE,
  Gt as ROUTE_CHANGE_FREQ,
  ea as ROUTE_CHANGE_IMAGE,
  ta as ROUTE_CHANGE_OPACITY,
  Wt as ROUTE_CHANGE_SPEED,
  Ot as ROUTE_DIR_FIX_OFF,
  Ut as ROUTE_DIR_FIX_ON,
  yt as ROUTE_END,
  Rt as ROUTE_JUMP,
  St as ROUTE_MOVE_AWAY,
  qt as ROUTE_MOVE_BACKWARD,
  ut as ROUTE_MOVE_DOWN,
  wt as ROUTE_MOVE_FORWARD,
  gt as ROUTE_MOVE_LEFT,
  vt as ROUTE_MOVE_LOWER_L,
  ht as ROUTE_MOVE_LOWER_R,
  xt as ROUTE_MOVE_RANDOM,
  bt as ROUTE_MOVE_RIGHT,
  Tt as ROUTE_MOVE_TOWARD,
  It as ROUTE_MOVE_UP,
  ft as ROUTE_MOVE_UPPER_L,
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
  Ct as ROUTE_TURN_90D_R_L,
  Bt as ROUTE_TURN_AWAY,
  Pt as ROUTE_TURN_DOWN,
  Dt as ROUTE_TURN_LEFT,
  Ht as ROUTE_TURN_RANDOM,
  At as ROUTE_TURN_RIGHT,
  Ft as ROUTE_TURN_TOWARD,
  Mt as ROUTE_TURN_UP,
  Nt as ROUTE_WAIT,
  Yt as ROUTE_WALK_ANIME_OFF,
  Xt as ROUTE_WALK_ANIME_ON,
  ke as SAVE_BGM,
  Aa as SCHEMA_DAMAGE,
  za as SCHEMA_DATA_ACTOR,
  Ca as SCHEMA_DATA_ARMMOR,
  Ha as SCHEMA_DATA_CLASS,
  Ba as SCHEMA_DATA_ENEMY,
  Xn as SCHEMA_DATA_ITEM,
  da as SCHEMA_DATA_MAP_INFO,
  Gn as SCHEMA_DATA_SKILL,
  Ga as SCHEMA_DATA_STATE,
  Jr as SCHEMA_DATA_WEAPON,
  cm as SCHEMA_SYSTEM_ADVANCED,
  hm as SCHEMA_SYSTEM_AUDIOFILES,
  fm as SCHEMA_SYSTEM_BATTLE_RULE_RMMZ,
  Em as SCHEMA_SYSTEM_BOOLEAN_GAMEMENU_OPTIONS,
  Fm as SCHEMA_SYSTEM_BOOLEAN_OPTIONS,
  Ps as SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE,
  Lm as SCHEMA_SYSTEM_GAME_INITIAL,
  Vm as SCHEMA_SYSTEM_IMAGE_SIZE,
  ym as SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION,
  Gm as SCHEMA_SYSTEM_OTHER_DATA,
  ms as SCHEMA_SYSTEM_RPG_DATA_NAMES,
  fs as SCHEMA_SYSTEM_TERMS_BUNDLE,
  Ss as SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW,
  Wm as SCHEMA_SYSTEM_TITLE_IMAGES,
  qs as SCHEMA_SYSTEM_VEHICLE,
  qr as SCHEMA_TRAIT,
  st as SCRIPT_EVAL,
  pt as SCRIPT_EVAL_BODY,
  J as SCROLL_MAP,
  I as SELECT_ITEM,
  Z as SET_EVENT_LOCATION,
  Q as SET_MOVEMENT_ROUTE,
  _ as SET_VEHICLE_LOCATION,
  ve as SET_WEATHER_EFFECT,
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
  v as SHOW_SCROLLING_TEXT,
  h as SHOW_SCROLLING_TEXT_BODY,
  x as SKIP,
  Hn as SPECIAL_EFFECT_ESCAPE,
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
  Nr as SRC_COLOR,
  ho as SRC_DATA_ACTOR,
  qo as SRC_DATA_ARMOR,
  Ro as SRC_DATA_CLASS,
  No as SRC_DATA_COMMON_EVNET,
  ko as SRC_DATA_ENEMY,
  So as SRC_DATA_ITEMS,
  fo as SRC_DATA_MAP,
  To as SRC_DATA_SKILL,
  xo as SRC_DATA_STATE,
  Po as SRC_DATA_TROOP,
  wo as SRC_DATA_WEAPON,
  Re as STOP_SE,
  be as TINT_PICTURE,
  pe as TINT_SCREEN,
  ci as TRAIT_ACTION_PLUS,
  Ja as TRAIT_ATTACK_ELEMENT,
  ai as TRAIT_ATTACK_SKILL,
  ei as TRAIT_ATTACK_SPEED,
  Qa as TRAIT_ATTACK_STATE,
  ti as TRAIT_ATTACK_TIMES,
  ui as TRAIT_COLLAPSE_TYPE,
  Ka as TRAIT_DEBUFF_RATE,
  Ya as TRAIT_ELEMENT_RATE,
  si as TRAIT_EQUIP_ARMOR_TYPE,
  pi as TRAIT_EQUIP_LOCK,
  di as TRAIT_EQUIP_SEAL,
  mi as TRAIT_EQUIP_WEAPON_TYPE,
  Oa as TRAIT_PARAM,
  gi as TRAIT_PARTY_ABILITY,
  ni as TRAIT_SKILL_ADD,
  oi as TRAIT_SKILL_SEAL,
  ii as TRAIT_SKILL_TYPE_ADD,
  ri as TRAIT_SKILL_TYPE_SEAL,
  li as TRAIT_SLOT_TYPE,
  Za as TRAIT_SPARAM,
  yi as TRAIT_SPECIAL_FLAG,
  $a as TRAIT_STATE_RATE,
  Ua as TRAIT_STATE_RESIST,
  _a as TRAIT_XPARAM,
  O as TRANSFER_PLAYER,
  wr as TYPENAME_TRAIT,
  ce as WAIT,
  $r as applyFormatRule,
  Us as buildReferenceItemSources,
  Cp as cloneChoices,
  od as cloneEventCommand,
  nd as cloneParameters,
  ki as collapsOptionsToArray,
  jr as compileFormatRule,
  _s as compileItemEffectDisplayData,
  Os as compileTraitDisplayData,
  Ip as convertCommentArrayToObject,
  r as createActorControlChars,
  t as createControlCharFormat,
  ct as createEventCommand,
  po as createNoteEntity,
  n as createSystemVariableControlChars,
  va as defineGameDataSources,
  Jm as defineSystemItems,
  fi as defineTraitCollapseType,
  Mi as defineTraitExtraParam,
  Sr as defineTraitItems,
  lr as defineTraitPartyAbility,
  Gi as defineTraitRegularParam,
  Ir as defineTraitSpecialFlag,
  ar as defineTraitSpecialParam,
  Fr as detectFormatErrors,
  Zs as domainNames,
  zi as extraParamName,
  ji as extraParamsToArray,
  Fn as formatItemEffectText,
  _r as formatTraitText,
  lp as fromArrayCommonEvent,
  yp as fromArrayControlSwitches,
  xp as fromArrayInputNumber,
  Np as fromArrayScrollingTextBody,
  wp as fromArrayScrollingTextHeader,
  jp as fromArraySetupChoice,
  Ap as fromArraySetupChoiceItem,
  Fp as fromArrayShowMessageHeader,
  a as fromStringArray,
  rd as getActorValue,
  Pm as getArmorCategoryEnabled,
  _m as getArmorTypes,
  i as getControlChars,
  Km as getElementTypes,
  id as getEnemyValue,
  Tm as getEquipCommandEnabled,
  $m as getEquipTypes,
  wm as getFormationCommandEnabled,
  Rm as getItemCategoryEnabled,
  km as getItemCommandEnabled,
  Dm as getKeyItemCategoryEnabled,
  bo as getNoteValue,
  xs as getParamNames,
  qm as getSaveCommandEnabled,
  xm as getSkillCommandEnabled,
  Um as getSkillTypes,
  Sm as getStatusCommandEnabled,
  Zm as getSwitches,
  Ym as getVariableNames,
  Nm as getWeaponCategoryEnabled,
  Om as getWeaponTypes,
  sd as isCloneableCommand,
  gd as isCommandAudio,
  ld as isCommandChangeActorText,
  zd as isCommandChangeBattleBgm,
  Cd as isCommandChangeDefeatMe,
  Ed as isCommandChangeVictoryMe,
  Ld as isCommandCommentBody,
  Bd as isCommandCommentHeader,
  kd as isCommandCommonEvent,
  Rd as isCommandInputNumber,
  Id as isCommandNonParam,
  Dd as isCommandPlayBgm,
  Ad as isCommandPlayBgs,
  Md as isCommandPlayMe,
  jd as isCommandPlaySe,
  Wd as isCommandScriptBody,
  Vd as isCommandScriptHeader,
  yd as isCommandScrollTextHead,
  wd as isCommandShowChoiceItem,
  Td as isCommandShowChoices,
  Pd as isCommandShowMessage,
  Hd as isCommandShowMessageBody,
  Fd as isCommandShowScrollingTextBody,
  hd as isCommandTextBody,
  io as isDataActor,
  ro as isDataArmor,
  so as isDataClass,
  oo as isDataEnemy,
  to as isDataItem,
  Ia as isDataMap,
  ba as isDataMapInfo,
  ao as isDataSkill,
  mo as isDataState,
  Bs as isDataSystem,
  no as isDataWeapon,
  um as isValidNumber,
  dm as labelsRegistry,
  Ma as makeActorData,
  Ea as makeArmorData,
  tp as makeAudioCommand,
  gm as makeAudioFileParams,
  Cm as makeBooleanOptions,
  Fa as makeClassData,
  ap as makeCommandAudioAny,
  Js as makeCommandChangeActorName,
  Qs as makeCommandChangeActorNickName,
  ep as makeCommandChangeActorProfile,
  mp as makeCommandChangeBattleBGM,
  pp as makeCommandChangeDefeatME,
  sp as makeCommandChangeVictoryME,
  hp as makeCommandCommentBody,
  vp as makeCommandCommentHeader,
  dp as makeCommandCommonEvent,
  gp as makeCommandControlSwitches,
  Tp as makeCommandInputNumber,
  ip as makeCommandPlayBGM,
  rp as makeCommandPlayBGS,
  np as makeCommandPlayME,
  op as makeCommandPlaySE,
  Gp as makeCommandScriptArray,
  Wp as makeCommandScriptBody,
  Vp as makeCommandScriptHeader,
  Pp as makeCommandScrollingTextBody,
  qp as makeCommandScrollingTextHeader,
  Ep as makeCommandSetupChoice,
  Dp as makeCommandShowChoiceItem,
  Hp as makeCommandShowMessage,
  Lp as makeCommandShowMessageBody,
  bp as makeCommentArray,
  fp as makeCommentCommandArray,
  o as makeCommonEventData,
  Da as makeDamage,
  ss as makeDataNames,
  La as makeDropItem,
  Rs as makeEditorSetting,
  Va as makeEnemyAction,
  Wa as makeEnemyData,
  d as makeEventPageCondition,
  Bm as makeGameInitial,
  Am as makeItemCategories,
  Mm as makeItemCategoriesFromArray,
  Wn as makeItemData,
  sa as makeMapData,
  na as makeMapEvent,
  oa as makeMapEventIamge,
  ma as makeMapEventPage,
  pa as makeMapInfoData,
  jm as makeMenuCommandsEnabled,
  zm as makeMenuCommandsEnabledFromArray,
  ks as makeParamNamesArray,
  lo as makeRegex,
  Yn as makeSkillData,
  bm as makeSoundsArray,
  Im as makeSoundsObject,
  Xa as makeStateData,
  lm as makeSystemAdvanced,
  Ws as makeSystemData,
  ds as makeTermsBasic,
  ls as makeTermsBasicFromArray,
  cs as makeTermsCommand,
  us as makeTermsCommandFromArray,
  bs as makeTermsMessages,
  Ts as makeTitleCommandWindow,
  m as makeTroopData,
  p as makeTroopEventConditions,
  s as makeTroopMember,
  ws as makeVehicleData,
  Zr as makeWeaponData,
  Wr as mergeItemsSource,
  ja as normalizeDataActor,
  cr as partyAbilityToArray,
  yo as readNote,
  co as readNoteObject,
  Yi as regularParamName,
  Xi as regularParamsToArray,
  go as replaceNote,
  In as resolveItemEffectLabels,
  Do as resolveTraitLabels,
  Io as setNoteValue,
  vr as specialFlagToArray,
  rr as specialParamName,
  ir as specialParamsToArray,
  cp as toArrayCommonEvent,
  up as toArrayControlSwitches,
  kp as toArrayInputNumber,
  td as toArrayOperandActorStatus,
  _p as toArrayOperandConstant,
  ad as toArrayOperandEnemyStatus,
  ed as toArrayOperandItemData,
  Jp as toArrayOperandRandom,
  Qp as toArrayOperandScript,
  Zp as toArrayOperandVariable,
  Rp as toArrayScrollingTextBody,
  Sp as toArrayScrollingTextHeader,
  zp as toArraySetupChoice,
  Mp as toArraySetupChoiceItem,
  Bp as toArrayShowMessageHeader
};
//# sourceMappingURL=rpgTypes.es.js.map
