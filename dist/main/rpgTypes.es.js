import e from "ajv";
const t = (e2, t2) => `\\${e2}[${t2}]`, a = (e2, a2) => a2.map((a3, r2) => ({ text: a3, controlChar: t(e2, r2) })), r = (e2) => Array.from(e2.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e3) => ({
  char: e3[1],
  id: parseInt(e3[2], 10)
})), i = (e2) => e2.map((e3) => ({ text: e3.name, controlChar: t("N", e3.id) })), s = (e2) => e2.variables.map((e3, a2) => ({
  text: e3 || "",
  controlChar: t("V", a2)
})).filter((e3) => "" !== e3.text), n = (e2 = {}) => ({ id: e2.id ?? 0, name: e2.name ?? "", trigger: e2.trigger ?? 0, list: e2.list ?? [], switchId: e2.switchId ?? 0 }), o = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  members: e2.members ?? [],
  pages: e2.pages ?? []
}), m = (e2 = {}) => ({ enemyId: e2.enemyId ?? 0, x: e2.x ?? 0, y: e2.y ?? 0, hidden: e2.hidden ?? false }), p = (e2 = {}) => ({
  actorHp: e2.actorHp ?? 0,
  actorId: e2.actorId ?? 0,
  enemyValid: e2.enemyValid ?? 0,
  switchValid: e2.switchValid ?? 0
}), c = (e2 = {}) => ({
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
}), d = 0, l = 101, y = 401, u = 102, g = 402, f = 103, h = 104, b = 105, v = 405, I = 108, P = 408, k = 109, x = 111, N = 411, w = 112, T = 113, S = 115, A = 117, q = 118, R = 119, F = 121, D = 122, j = 123, B = 124, C = 125, M = 126, E = 127, z = 128, H = 129, L = 132, V = 133, O = 134, W = 135, G = 136, X = 137, Y = 138, K = 139, _ = 140, $ = 201, U = 202, Z = 203, J = 204, Q = 205, ee = 206, te = 211, ae = 212, re = 213, ie = 214, se = 216, ne = 217, oe = 221, me = 222, pe = 223, ce = 224, de = 225, le = 230, ye = 231, ue = 232, ge = 233, fe = 234, he = 235, be = 236, ve = 241, Ie = 242, Pe = 243, ke = 244, xe = 245, Ne = 246, we = 249, Te = 250, Se = 251, Ae = 261, qe = 282, Re = 283, Fe = 284, De = 285, je = 301, Be = 302, Ce = 605, Me = 303, Ee = 311, ze = 312, He = 313, Le = 314, Ve = 315, Oe = 320, We = 321, Ge = 322, Xe = 323, Ye = 324, Ke = 325, _e = 331, $e = 332, Ue = 333, Ze = 334, Je = 335, Qe = 336, et = 337, tt = 339, at = 340, rt = 351, it = 342, st = 352, nt = 353, ot = 354, mt = 355, pt = 655, ct = 356, dt = 357, lt = (e2, t2, a2 = 0) => ({
  code: e2,
  indent: a2,
  parameters: t2
}), yt = 0, ut = 1, gt = 2, ft = 3, ht = 4, bt = 5, vt = 6, It = 7, Pt = 8, kt = 9, xt = 10, Nt = 11, wt = 12, Tt = 13, St = 14, At = 15, qt = 16, Rt = 17, Ft = 18, Dt = 19, jt = 20, Bt = 21, Ct = 22, Mt = 23, Et = 24, zt = 25, Ht = 26, Lt = 27, Vt = 28, Ot = 29, Wt = 30, Gt = 31, Xt = 32, Yt = 33, Kt = 34, _t = 35, $t = 36, Ut = 37, Zt = 38, Jt = 39, Qt = 40, ea = 41, ta = 42, aa = 43, ra = 44, ia = 45, sa = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), na = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), oa = () => ({ conditions: c(), list: [], directionFix: false, image: {
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}, moveFrequency: 5, moveRoute: { list: [], repeat: false, skippable: false, wait: false } }), ma = (e2 = {}) => ({
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
}, ca = {
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
}, da = {
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
      pages: { type: "array", items: ca }
    } } }
  }
}, la = new e({ strict: true }), ya = la.compile({
  type: "object",
  required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: {
    type: "integer"
  }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } }
}), ua = la.compile(da), ga = (e2) => ya(e2), fa = (e2) => ua(e2), ha = (e2, t2) => [ba(e2.skills, t2), va(e2.actors, t2), Ia(e2.states, t2), Pa(e2.armors, t2), ka(e2.classes, t2), xa(e2.enemies, t2), Na(e2.items, t2), wa(e2.weapons, t2), Ta(e2.commonEvents, t2)], ba = (e2, t2) => ({
  label: t2.skill.title,
  items: e2,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), va = (e2, t2) => ({
  items: e2,
  label: t2.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), Ia = (e2, t2) => ({ items: e2, label: t2.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), Pa = (e2, t2) => ({ items: e2, label: t2.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), ka = (e2, t2) => ({ items: e2, label: t2.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), xa = (e2, t2) => ({ items: e2, label: t2.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), Na = (e2, t2) => ({ items: e2, label: t2.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), wa = (e2, t2) => ({ items: e2, label: t2.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), Ta = (e2, t2) => ({ items: e2, label: t2.commonEvent.title, source: { author: "rmmz", module: "data", kind: "common_event" } }), Sa = {
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
}, Aa = {
  title: "ダメージ",
  options: {}
}, qa = (e2 = {}) => ({ type: e2.type ?? 0, elementId: e2.elementId ?? 0, formula: e2.formula ?? "", variance: e2.variance ?? 0, critical: e2.critical ?? false }), Ra = (e2 = {}) => ({
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
}), Fa = (e2) => ({
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
}), Da = (e2 = {}) => ({
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
}), ja = (e2 = {}) => ({ name: e2.name ?? "", id: e2.id ?? 0, traits: [], note: e2.note ?? "", params: [0, 0, 0, 0, 0, 0, 0, 0], learnings: e2.learnings ?? [], expParams: e2.expParams ?? [] }), Ba = (e2 = {}) => ({
  dataId: e2.dataId ?? 0,
  denominator: e2.denominator ?? 0,
  kind: e2.kind ?? 0
}), Ca = (e2 = {}) => ({
  conditionParam1: e2.conditionParam1 ?? 0,
  conditionParam2: e2.conditionParam2 ?? 0,
  conditionType: e2.conditionType ?? 0,
  rating: e2.rating ?? 0,
  skillId: e2.skillId ?? 0
}), Ma = (e2 = {}) => {
  var _a2;
  return {
    name: e2.name ?? "",
    id: e2.id ?? 0,
    battlerName: e2.battlerName ?? "",
    battlerHue: e2.battlerHue ?? 0,
    dropItems: ((_a2 = e2.dropItems) == null ? void 0 : _a2.map(() => Ba())) ?? [],
    exp: e2.exp ?? 0,
    gold: e2.gold ?? 0,
    traits: [],
    note: e2.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, Ea = {
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
}, za = (e2 = {}) => ({
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
}), Ha = 11, La = 12, Va = 13, Oa = 14, Wa = 21, Ga = 22, Xa = 23, Ya = 31, Ka = 32, _a = 33, $a = 34, Ua = 35, Za = 41, Ja = 42, Qa = 43, er = 44, tr = 51, ar = 52, rr = 53, ir = 54, sr = 55, nr = 61, or = 62, mr = 63, pr = 64, cr = 0, dr = 1, lr = 2, yr = 3, ur = (e2, t2) => ({
  items: gr(e2.options, t2),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), gr = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, { id: 2, name: e2.instantCollaps }, {
  id: 3,
  name: e2.noneCollaps
}], fr = 0, hr = 1, br = 2, vr = 3, Ir = 4, Pr = 5, kr = 6, xr = 7, Nr = 8, wr = 9, Tr = (e2) => ({
  items: Sr(e2.options),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), Sr = (e2) => [{ id: 0, name: e2.hitRate }, { id: 1, name: e2.evasionRate }, { id: 2, name: e2.criticalRate }, { id: 3, name: e2.criticalEvasionRate }, { id: 4, name: e2.magicEvasionRate }, {
  id: 5,
  name: e2.magicReflectionRate
}, { id: 6, name: e2.counterAttackRate }, { id: 7, name: e2.hpRegenerationRate }, { id: 8, name: e2.mpRegenerationRate }, { id: 9, name: e2.tpRegenerationRate }], Ar = (e2, t2) => {
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
}, qr = 0, Rr = 1, Fr = 2, Dr = 3, jr = 4, Br = 5, Cr = 6, Mr = 7, Er = (e2) => ({ items: zr(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "params" } }), zr = (e2) => [{
  id: 0,
  name: e2.maxHp
}, { id: 1, name: e2.maxMp }, { id: 2, name: e2.atk }, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, { id: 5, name: e2.mdef }, { id: 6, name: e2.agi }, { id: 7, name: e2.luk }], Hr = (e2, t2) => {
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
}, Lr = 0, Vr = 1, Or = 2, Wr = 3, Gr = 4, Xr = 5, Yr = 6, Kr = 7, _r = 8, $r = 9, Ur = (e2) => ({ items: Zr(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), Zr = (e2) => [{
  id: 0,
  name: e2.targetRate
}, { id: 1, name: e2.guardEffectRate }, { id: 2, name: e2.recoveryEffectRate }, { id: 3, name: e2.pharmacology }, { id: 4, name: e2.mpCostRate }, { id: 5, name: e2.tpChargeRate }, {
  id: 6,
  name: e2.physicalDamageRate
}, { id: 7, name: e2.magicDamageRate }, { id: 8, name: e2.floorDamageRate }, { id: 9, name: e2.experienceRate }], Jr = (e2, t2) => {
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
}, Qr = 0, ei = 1, ti = 2, ai = 3, ri = 4, ii = 5, si = (e2) => ({
  items: ni(e2.options),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), ni = (e2) => [{ id: 0, name: e2.encounterHalf }, { id: 1, name: e2.encounterNone }, { id: 2, name: e2.cancelSurprise }, {
  id: 3,
  name: e2.raisePreemptive
}, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], oi = 0, mi = 1, pi = 2, ci = 3, di = (e2) => ({ items: li(e2.options), label: e2.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), li = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
  id: 3,
  name: e2.preventEscape
}], yi = "{name}", ui = "{name} * {value}%", gi = "{name} + {value}%", fi = "{value}", hi = {
  title: "特徴",
  options: {
    regularParam: { title: "基本能力値", format: ui, options: {
      maxHp: "最大HP",
      maxMp: "最大MP",
      atk: "攻撃力",
      def: "防御力",
      matk: "魔法攻撃力",
      mdef: "魔法防御力",
      agi: "敏捷性",
      luk: "運"
    } },
    extraParam: { title: "追加能力値", format: gi, options: {
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
    specialParam: { title: "特殊能力値", format: ui, options: {
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
      format: yi,
      options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
    },
    collaps: { title: "消滅エフェクト", format: yi, options: {
      bossCollaps: "ボス崩壊",
      instantCollaps: "即時崩壊",
      noneCollaps: "崩壊なし"
    } },
    partyAbility: { title: "パーティ能力", format: yi, options: {
      cancelSurprise: "不意打ち無効",
      dropItemDouble: "アイテムドロップ2倍",
      encounterHalf: "エンカウント半減",
      encounterNone: "エンカウントなし",
      goldDouble: "ゴールド2倍",
      raisePreemptive: "先制攻撃率アップ"
    } },
    elementRate: { title: "属性有効度", format: ui },
    debuffRate: { title: "弱体有効度", format: ui },
    stateRate: { title: "ステート有効度", format: ui },
    stateResist: {
      title: "ステート無効",
      format: yi
    },
    attackElement: { title: "攻撃属性", format: yi },
    attackState: { title: "攻撃ステート", format: gi },
    attackSpeed: { title: "攻撃速度補正", format: fi },
    attackTimes: {
      title: "攻撃追加回数",
      format: fi
    },
    actionPlus: { title: "行動追加", format: ui },
    attackSkill: { title: "攻撃スキル", format: yi },
    equipWeaponType: { title: "装備武器タイプ", format: yi },
    equipArmorType: { title: "装備防具タイプ", format: yi },
    equipLock: {
      title: "装備固定",
      format: yi
    },
    equipSeal: { title: "装備封印", format: yi },
    slotType: { title: "スロットタイプ", format: yi },
    skillAdd: { title: "スキル追加", format: yi },
    skillSeal: { title: "スキルタイプ封印", format: yi },
    skillTypeAdd: { title: "スキルタイプ追加", format: yi },
    skillTypeSeal: { title: "スキルタイプ封印", format: yi }
  }
}, bi = (e2, t2) => [Er(e2.regularParam), Tr(e2.extraParam), Ur(e2.specialParam), ur(e2.collaps, t2), di(e2.specialFlag), si(e2.partyAbility)], vi = "rmmz", Ii = "colors", Pi = (e2) => e2.map((e3) => ({
  dataKey: e3,
  placeHolder: `{${e3}}`
})), ki = (e2) => ({
  dataKey: e2.dataIdKey,
  placeHolder: `{${e2.dataIdKey}}`,
  sourceId: { author: e2.sourceId.author, kind: e2.sourceId.kind, module: e2.sourceId.module }
}), xi = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, Ni = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : [...t2];
}, wi = (e2, t2 = []) => {
  return {
    itemMappers: [...Ni(e2), ...t2].map(Ti),
    fallbackFormat: { text: Si(e2), label: Ai(e2) },
    properties: (a2 = e2.placeHolder ?? {}, {
      numbers: a2.numbers ? Pi(a2.numbers) : [],
      strings: a2.strings ? Pi(a2.strings) : []
    }),
    arrayIndex: e2.arrayIndex ? e2.arrayIndex.map(ki) : []
  };
  var a2;
}, Ti = (e2) => ({ placeHolder: `{${e2.placeHolder}}`, kindKey: e2.kindKey, dataIdKey: e2.dataIdKey }), Si = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const t2 = ((e3) => {
    var _a2, _b, _c2;
    return /* @__PURE__ */ new Set([...((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? [], ...((_b = e3.placeHolder) == null ? void 0 : _b.strings) ?? [], ...((_c2 = e3.arrayIndex) == null ? void 0 : _c2.map((e4) => e4.dataIdKey)) ?? []]);
  })(e2);
  return 0 === t2.size ? "value not found" : Array.from(t2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, Ai = (e2) => {
  var _a2;
  return void 0 !== ((_a2 = e2.fallbackFormat) == null ? void 0 : _a2.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, qi = (e2, t2, a2) => {
  const r2 = t2[a2.dataKey];
  return null == r2 ? e2 : e2.replaceAll(a2.placeHolder, String(r2));
}, Ri = (e2, t2, a2, r2 = { placeHolderMaxLength: 50, formatMaxLength: 200 }) => e2.pattern.length >= r2.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{
  message: a2.formatVeryLong,
  reason: e2.pattern.slice(0, r2.formatMaxLength)
}], semanticErrors: [] } : {
  formatLabel: e2.label,
  semanticErrors: Di(e2, t2, a2),
  syntaxErrors: Fi(e2.pattern, t2, a2, r2.placeHolderMaxLength)
}, Fi = (e2, t2, a2, r2) => {
  const i2 = Array.from(e2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), s2 = ((e3) => {
    var _a2, _b, _c2, _d2;
    return /* @__PURE__ */ new Set([...((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? [], ...e3.itemMapper ? [e3.itemMapper.placeHolder] : [], ...((_b = e3.itemMappers) == null ? void 0 : _b.map((e4) => e4.placeHolder)) ?? [], ...((_c2 = e3.placeHolder) == null ? void 0 : _c2.strings) ?? [], ...((_d2 = e3.arrayIndex) == null ? void 0 : _d2.map((e4) => e4.dataIdKey)) ?? []]);
  })(t2);
  return i2.reduce((e3, t3) => {
    const i3 = t3[1];
    return 0 === i3.length ? e3 : i3.length > r2 ? (e3.push({ message: a2.longPlaceHolder, reason: i3.slice(0, r2) }), e3) : (s2.has(i3) || e3.push({
      message: a2.extraPlaceHolder,
      reason: i3
    }), e3);
  }, []);
}, Di = (e2, t2, a2) => Ni(t2).reduce((t3, r2) => {
  const i2 = ji(e2, r2, a2);
  return i2 && t3.push(i2), t3;
}, []), ji = (e2, t2, a2) => {
  const r2 = e2.pattern.includes(t2.placeHolder), i2 = !!e2.dataSource;
  return !r2 && i2 ? { message: a2.missingName, reason: t2.placeHolder } : r2 && !i2 ? { message: a2.missingSourceId, reason: t2.placeHolder } : void 0;
}, Bi = (e2, t2) => {
  const a2 = Ei(t2);
  return e2.reduce((e3, t3) => {
    const r2 = Ci(t3, a2);
    return e3.set(t3.kindId, r2), e3;
  }, /* @__PURE__ */ new Map());
}, Ci = (e2, t2) => {
  const a2 = Mi(e2.dataSource, t2);
  return { patternCompiled: e2.pattern, label: e2.label, data: a2 ? a2.items : void 0 };
}, Mi = (e2, t2) => {
  if (e2) return t2.get(xi(e2));
}, Ei = (e2) => e2.reduce((e3, t2) => {
  const a2 = { items: zi(t2.items), source: t2.source, label: t2.label };
  return e3.set(xi(t2.source), a2), e3;
}, /* @__PURE__ */ new Map()), zi = (e2) => e2.map((e3) => ({
  id: e3.id,
  name: e3.name
})), Hi = (e2, t2, a2, r2, i2) => {
  const s2 = ((e3, t3, a3) => {
    const r3 = a3.properties.numbers.reduce((e4, a4) => qi(e4, t3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => qi(e4, t3, a4), r3);
  })(r2, e2, a2);
  return t2 ? Li(s2, e2, a2, t2, i2) : s2;
}, Li = (e2, t2, a2, r2, i2) => {
  const s2 = ((e3, t3) => {
    const a3 = ((e4, t4) => {
      const a4 = t4[e4];
      return a4 && a4.id === e4 ? a4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return a3 ? a3.name : `?data[${t3}]`;
  })(r2, i2(t2));
  return a2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, s2), e2);
}, Vi = {
  itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" },
  placeHolder: { numbers: ["value"] }
}, Oi = (e2, t2, a2) => {
  const r2 = wi(Vi);
  return Hi(t2, a2, r2, e2.pattern, (e3) => e3.dataId);
}, Wi = (e2 = {}) => ({
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
  damage: qa(e2.damage ?? {}),
  wtypeId: e2.wtypeId ?? 0
}), Gi = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Xi = 0, Yi = 1, Ki = 2, _i = 11, $i = 12, Ui = 13, Zi = 21, Ji = 22, Qi = 31, es = 32, ts = 33, as = 34, rs = 41, is = 42, ss = 43, ns = 44, os = (e2) => [cs(e2), ds(e2), ls(e2), ys(e2), us(e2), gs(e2), fs(e2), hs(e2), bs(e2), ps(e2), vs(e2), Is(e2), Ps(e2)], ms = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), ps = (e2) => ms(41, e2.special), cs = (e2) => ms(11, e2.recoverHp), ds = (e2) => ms(12, e2.recoverMp), ls = (e2) => ms(13, e2.gainTp), ys = (e2) => ms(21, e2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), us = (e2) => ms(22, e2.removeState, { author: "rmmz", module: "data", kind: "state" }), gs = (e2) => ms(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), fs = (e2) => ms(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), hs = (e2) => ms(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), bs = (e2) => ms(34, e2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), vs = (e2) => ms(42, e2.grow, { author: "rmmz", module: "trait", kind: "params" }), Is = (e2) => ms(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), Ps = (e2) => ms(44, e2.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), ks = "{name} {value1}%", xs = "{value1}% + {value2}", Ns = "{name} {value1}ターン", ws = "{name}", Ts = { title: "使用効果", options: { addBuff: {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: Ns
}, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: Ns }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: xs }, grow: {
  desc: "成長効果",
  domainName: "成長効果",
  format: "{name} + {value1}"
}, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: ws }, recoverHp: {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: xs
}, recoverMp: {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: xs
}, removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: ws }, removeDebuff: {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: ws
}, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: ks }, special: { desc: "特殊効果", domainName: "特殊効果", format: ws }, addState: {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: ks
}, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: ws } } }, Ss = 0, As = (e2, t2, a2) => {
  const r2 = a2.find((e3) => e3.id === t2.dataId), i2 = r2 ? r2.name : "Unknown Item";
  return e2.pattern.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", i2);
}, qs = { title: "アイテム", options: { consumable: "消耗品" } }, Rs = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Fs = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Ds = (e2 = {}) => ({
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
  damage: qa(e2.damage ?? {}),
  effects: [],
  price: 0
}), js = (e2 = {}) => ({
  stypeId: e2.stypeId ?? 0,
  requiredWtypeId1: e2.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e2.requiredWtypeId2 ?? 0,
  animationId: e2.animationId ?? 0,
  damage: qa(e2.damage ?? {}),
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
}), Bs = { type: "integer" }, Cs = { type: "integer", minimum: 0 }, Ms = { type: "string" }, Es = {
  type: "object",
  properties: { type: { type: "integer" }, elementId: Cs, formula: Ms, variance: Bs, critical: { type: "boolean" } },
  required: ["type", "elementId", "formula", "variance", "critical"],
  additionalProperties: false
}, zs = { type: "object", properties: { code: Bs, dataId: Cs, value1: Bs, value2: Bs }, required: ["code", "dataId", "value1", "value2"], additionalProperties: false }, Hs = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "message1", "message2", "messageType", "mpCost", "requiredWtypeId1", "requiredWtypeId2", "stypeId", "tpCost", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "note", "effects"],
  properties: {
    name: Ms,
    id: Cs,
    description: Ms,
    iconIndex: Cs,
    message1: Ms,
    message2: Ms,
    messageType: Cs,
    mpCost: Bs,
    requiredWtypeId1: Cs,
    requiredWtypeId2: Cs,
    stypeId: Cs,
    tpCost: Bs,
    animationId: Cs,
    hitType: Cs,
    occasion: { type: "integer" },
    repeats: Cs,
    scope: Bs,
    speed: Bs,
    successRate: Bs,
    tpGain: Bs,
    note: Ms,
    effects: { type: "array", items: zs },
    damage: Es
  },
  additionalProperties: false
}, Ls = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "note", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "consumable", "price", "effects"],
  properties: { name: Ms, id: Cs, description: Ms, iconIndex: Cs, note: Ms, animationId: Cs, hitType: Bs, occasion: Bs, repeats: Bs, scope: Bs, speed: Bs, successRate: Bs, tpGain: Bs, consumable: {
    type: "boolean"
  }, price: Cs, itypeId: Cs, effects: { type: "array", items: zs }, damage: Es }
}, Vs = new e({ strict: true }), Os = Vs.compile(Ls), Ws = (e2) => Os(e2), Gs = Vs.compile(Hs), Xs = (e2) => Gs(e2), Ys = Vs.compile({
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
}), Ks = (e2) => Ys(e2), _s = Vs.compile({
  type: "object",
  required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"],
  properties: { name: {
    type: "string"
  }, id: { type: "integer", minimum: 0 }, description: { type: "string" }, iconIndex: { type: "integer", minimum: 0 }, price: { type: "integer", minimum: 0 }, note: { type: "string" }, etypeId: {
    type: "integer",
    minimum: 0
  }, wtypeId: { type: "integer", minimum: 0 }, animationId: { type: "integer", minimum: 0 }, params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 }, damage: {
    type: "object",
    properties: {
      type: { type: "integer", minimum: 0 },
      elementId: { type: "integer", minimum: 0 },
      formula: { type: "string" },
      variance: { type: "integer", minimum: 0, maximum: 100 },
      critical: { type: "boolean", default: false }
    },
    required: ["type", "elementId", "formula", "variance", "critical"]
  }, traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: {
    type: "integer"
  } }, required: ["code", "dataId", "value"] } } }
}), $s = (e2) => _s(e2), Us = (e2, t2) => `<${e2}:${t2}>`, Zs = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, Js = (e2, t2) => en(e2.note, (a2, r2) => t2(a2, r2, e2)), Qs = (e2) => en(e2, (e3, t2) => [e3, t2]), en = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, tn = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (e3, a2, r2) => {
    const i2 = t2(a2, r2);
    if (i2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return Us(a2, i2);
  });
}, an = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return r2 ? r2[2] : void 0;
}, rn = (e2, t2, a2) => {
  const r2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(r2, (e3, r3) => r3 === t2 ? Us(r3, a2) : e3);
}, sn = "data", nn = "actor", on = "map", mn = "enemy", pn = "state", cn = "skill", dn = "item", ln = "weapon", yn = "armor", un = "class", gn = "common_event", fn = "troop", hn = (e2) => [bn(e2.elementRate), vn(e2.debuffRate), In(e2.stateRate), Pn(e2.stateResist), kn(e2.regularParam), xn(e2.extraParam), Nn(e2.specialParam), wn(e2.attackElement), Tn(e2.attackState), Sn(e2.attackSpeed), An(e2.attackTimes), qn(e2.attackSkill), Rn(e2.skillTypeAdd), Fn(e2.skillTypeSeal), Dn(e2.skillAdd), jn(e2.skillSeal), Bn(e2.equipWeaponType), Cn(e2.equipArmorType), Mn(e2.equipLock), En(e2.equipSeal), zn(e2.slotType), Hn(e2.actionPlus), Ln(e2.specialFlag), Vn(e2.collaps), On(e2.partyAbility)], bn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 11,
  dataSource: Xn()
}), vn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), In = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 13,
  dataSource: Wn()
}), Pn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 14, dataSource: Wn() }), kn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), xn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), Nn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), wn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 31, dataSource: Xn() }), Tn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 32,
  dataSource: Wn()
}), Sn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 33 }), An = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 34 }), qn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 35,
  dataSource: Gn()
}), Rn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 41, dataSource: Yn() }), Fn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 42,
  dataSource: Yn()
}), Dn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 43, dataSource: Gn() }), jn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 44, dataSource: Gn() }), Bn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 51,
  dataSource: Kn()
}), Cn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 52, dataSource: _n() }), Mn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 53,
  dataSource: $n()
}), En = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 54, dataSource: $n() }), zn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 55, dataSource: $n() }), Hn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 61
}), Ln = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), Vn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), On = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), Wn = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), Gn = () => ({ author: "rmmz", module: "data", kind: "skill" }), Xn = () => ({ author: "rmmz", module: "system", kind: "elements" }), Yn = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), Kn = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), _n = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), $n = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), Un = {
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
}, Zn = () => ({ rpg: { damage: Aa, data: Sa, traits: hi, itemEffect: Ts }, global: Un }), Jn = (e2 = {}) => ({
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
}), Qn = (e2) => "number" == typeof e2 && !Number.isNaN(e2), eo = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
}), to = (e2 = {}) => [eo(e2.cursor), eo(e2.ok), eo(e2.cancel), eo(e2.buzzer), eo(e2.equip), eo(e2.save), eo(e2.load), eo(e2.battleStart), eo(e2.escape), eo(e2.enemyAttack), eo(e2.enemyDamage), eo(e2.enemyCollapse), eo(e2.bossCollapes1), eo(e2.bossCollapes2), eo(e2.actorDamage), eo(e2.actorCollapse), eo(e2.playRecovery), eo(e2.playMiss), eo(e2.playEvasion), eo(e2.playMagicEvasion), eo(e2.playReflection), eo(e2.shop), eo(e2.useItem), eo(e2.useSkill)], ao = (e2) => ({
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
}), ro = (e2) => e2.menuCommands[0], io = (e2) => e2.menuCommands[1], so = (e2) => e2.menuCommands[2], no = (e2) => e2.menuCommands[3], oo = (e2) => e2.menuCommands[4], mo = (e2) => e2.menuCommands[5], po = (e2) => e2.itemCategories[0], co = (e2) => e2.itemCategories[1], lo = (e2) => e2.itemCategories[2], yo = (e2) => e2.itemCategories[3], uo = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], go = (e2) => ({
  item: e2[0],
  weapon: e2[1],
  armor: e2[2],
  keyItem: e2[3]
}), fo = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], ho = (e2) => ({
  item: e2[0],
  skill: e2[1],
  equip: e2[2],
  status: e2[3],
  formation: e2[4],
  save: e2[5]
}), bo = { required: ["itemCategories", "menuCommands"], additionalProperties: false, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, vo = (e2 = {}) => ({
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
}), Io = { type: "boolean" }, Po = {
  type: "object",
  additionalProperties: false,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: Io,
    optDisplayTp: Io,
    optDrawTitle: Io,
    optExtraExp: Io,
    optFloorDeath: Io,
    optFollowers: Io,
    optKeyItemsNumber: Io,
    optSideView: Io,
    optSlipDeath: Io,
    optTransparent: Io,
    optMessageSkip: Io,
    optSplashScreen: Io
  }
}, ko = (e2 = {}) => ({
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0,
  partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1]
}), xo = (e2, t2) => ({
  name: e2,
  id: t2
}), No = (e2) => e2.variables.map(xo), wo = (e2) => e2.elements.map(xo), To = (e2) => e2.equipTypes.map(xo), So = (e2) => e2.skillTypes.map(xo), Ao = (e2) => e2.weaponTypes.map(xo), qo = (e2) => e2.armorTypes.map(xo), Ro = (e2) => e2.switches.map(xo), Fo = (e2, t2) => [jo(e2, t2), Bo(e2, t2), zo(e2, t2), Co(e2, t2), Do(e2, t2), Mo(e2, t2), Eo(e2, t2)], Do = (e2, t2) => ({
  items: qo(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), jo = (e2, t2) => ({ items: wo(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Bo = (e2, t2) => ({ items: To(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Co = (e2, t2) => ({
  items: So(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), Mo = (e2, t2) => ({ items: No(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Eo = (e2, t2) => ({ items: Ro(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), zo = (e2, t2) => ({
  items: Ao(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), Ho = (e2) => ({
  armorTypes: Lo(e2.armorTypes),
  elements: Lo(e2.elements),
  equipTypes: Lo(e2.equipTypes),
  weaponTypes: Lo(e2.weaponTypes),
  skillTypes: Lo(e2.skillTypes),
  variables: Lo(e2.variables),
  switches: Lo(e2.switches)
}), Lo = (e2) => e2 ? [...e2] : [], Vo = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], Oo = (e2) => e2.terms.params.map((e3, t2) => ({
  name: e3,
  id: t2
})), Wo = (e2) => ({ background: e2.background ?? 0, offsetX: e2.offsetX ?? 0, offsetY: e2.offsetY ?? 0 }), Go = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: eo(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), Xo = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), Yo = { title: "オプション", options: {
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
} }, Ko = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, _o = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, $o = { title: "コマンド", options: {
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
} }, Uo = {
  type: "object",
  additionalProperties: false,
  required: ["type", "weaponImageId"],
  properties: { type: { type: "number" }, weaponImageId: { type: "number" } }
}, Zo = {
  additionalProperties: false,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } }
}, Jo = {
  additionalProperties: false,
  type: "object",
  required: ["actorId", "equips", "level"],
  properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: {
    type: "integer"
  } } }
}, Qo = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }, em = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: Qo, victoryMe: Qo, gameoverMe: Qo, titleBgm: Qo, defeatMe: Qo, sounds: {
    type: "array",
    items: Qo,
    minItems: 24,
    maxItems: 24
  } }
}, tm = { type: "object", additionalProperties: false, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: true
}, battleSystem: { type: "number" } } }, am = { additionalProperties: false, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, rm = {
  additionalProperties: false,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, im = {
  type: "object",
  additionalProperties: false,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, sm = { type: "array", items: { type: "string" } }, nm = {
  additionalProperties: false,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: sm,
    skillTypes: sm,
    elements: sm,
    variables: sm,
    equipTypes: sm,
    switches: sm,
    armorTypes: sm
  }
}, om = { type: "string" }, mm = { type: "string", nullable: true }, pm = { type: "string" }, cm = {
  required: ["terms", "currencyUnit", "gameTitle"],
  additionalProperties: false,
  type: "object",
  properties: { currencyUnit: { type: "string" }, gameTitle: { type: "string" }, terms: {
    additionalProperties: false,
    type: "object",
    required: ["messages", "commands", "basic", "params"],
    properties: { messages: {
      type: "object",
      additionalProperties: false,
      required: ["actionFailure", "actorDamage", "actorNoDamage", "actorRecovery", "actorGain", "actorLoss", "actorDrain", "alwaysDash", "bgmVolume", "bgsVolume", "commandRemember", "criticalToActor", "criticalToEnemy", "counterAttack", "debuffAdd", "defeat", "enemyDamage", "enemyNoDamage", "enemyRecovery", "enemyGain", "enemyLoss", "enemyDrain", "evasion", "expNext", "expTotal", "escapeFailure", "escapeStart", "file", "loadMessage", "meVolume", "magicEvasion", "magicReflection", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "partyName", "preemptive", "saveMessage", "seVolume", "substitute", "touchUI", "victory", "useItem"],
      properties: {
        actionFailure: pm,
        actorDamage: pm,
        actorNoDamage: pm,
        actorRecovery: pm,
        actorGain: pm,
        actorLoss: pm,
        actorDrain: pm,
        alwaysDash: pm,
        bgmVolume: pm,
        bgsVolume: pm,
        commandRemember: pm,
        criticalToActor: pm,
        criticalToEnemy: pm,
        counterAttack: pm,
        debuffAdd: pm,
        defeat: pm,
        enemyDamage: pm,
        enemyNoDamage: pm,
        enemyRecovery: pm,
        enemyGain: pm,
        enemyLoss: pm,
        enemyDrain: pm,
        evasion: pm,
        expNext: pm,
        expTotal: pm,
        escapeFailure: pm,
        escapeStart: pm,
        file: pm,
        loadMessage: pm,
        meVolume: pm,
        magicEvasion: pm,
        magicReflection: pm,
        obtainExp: pm,
        obtainGold: pm,
        obtainItem: pm,
        obtainSkill: pm,
        partyName: pm,
        preemptive: pm,
        saveMessage: pm,
        seVolume: pm,
        substitute: pm,
        touchUI: pm,
        victory: pm,
        useItem: pm,
        buffAdd: pm,
        buffRemove: pm,
        actorNoHit: pm,
        enemyNoHit: pm,
        autosave: pm,
        emerge: pm,
        levelUp: pm,
        possession: pm,
        surprise: pm
      }
    }, commands: {
      type: "array",
      items: [om, om, om, om, om, om, om, om, om, om, om, om, om, om, om, om, om, om, om, om, mm, om, om, mm, om, om],
      minItems: 26,
      maxItems: 26
    }, basic: { type: "array", items: { type: "string" }, minItems: 10, maxItems: 10 }, params: {
      type: "array",
      items: { type: "string", minLength: 1 },
      minItems: 10,
      maxItems: 10,
      uniqueItems: true
    } }
  } }
}, dm = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: Jo },
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
}, lm = {
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
}, ym = { additionalProperties: false, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
  airship: lm,
  boat: lm,
  ship: lm,
  advanced: {
    type: "object",
    properties: {
      gameId: { type: "integer" },
      screenWidth: { type: "integer" },
      screenHeight: { type: "integer" },
      uiAreaWidth: { type: "integer" },
      uiAreaHeight: {
        type: "integer"
      },
      windowOpacity: { type: "integer" },
      screenScale: { type: "number" },
      numberFontFilename: { type: "string" },
      mainFontFilename: { type: "string" },
      fallbackFonts: { type: "string" },
      fontSize: { type: "integer" }
    },
    required: ["gameId", "screenWidth", "screenHeight", "uiAreaWidth", "uiAreaHeight", "windowOpacity", "screenScale", "numberFontFilename", "mainFontFilename", "fallbackFonts", "fontSize"],
    additionalProperties: false
  },
  attackMotions: { type: "array", items: Uo }
} }, um = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), {
  required: [],
  properties: {}
}), gm = new e({ strict: true }), fm = ((e2) => {
  const t2 = um(e2);
  return {
    additionalProperties: false,
    type: "object",
    required: Array.from(new Set(t2.required)),
    properties: t2.properties
  };
})([ym, em, tm, bo, Po, am, Zo, im, nm, cm, rm, dm]), hm = gm.compile(fm), bm = (e2) => hm(e2), vm = gm.compile(Jo);
gm.compile(Uo);
const Im = gm.compile(Zo), Pm = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], km = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], xm = (e2, t2) => "string" == typeof e2 ? e2 : t2, Nm = (e2) => {
  var _a2, _b, _c2, _d2, _e2, _f, _g, _h, _i2, _j, _k, _l, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u, _v;
  const t2 = Sm(e2.size);
  return {
    ...vo(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: to(e2.sounds),
    editor: Xo(e2.editing),
    advanced: Jn(e2.advanced),
    title1Name: ((_c2 = e2.images) == null ? void 0 : _c2.title1Name) ?? "",
    title2Name: ((_d2 = e2.images) == null ? void 0 : _d2.title2Name) ?? "",
    ...Ho(e2.dataNames ?? {}),
    magicSkills: Tm([]),
    airship: Go((_e2 = e2.vehicles) == null ? void 0 : _e2.airship),
    boat: Go((_f = e2.vehicles) == null ? void 0 : _f.boat),
    ship: Go((_g = e2.vehicles) == null ? void 0 : _g.ship),
    defeatMe: eo((_h = e2.me) == null ? void 0 : _h.defeatMe),
    gameoverMe: eo((_i2 = e2.me) == null ? void 0 : _i2.gameoverMe),
    titleBgm: eo((_j = e2.bgm) == null ? void 0 : _j.titleBgm),
    tileSize: t2.tileSize,
    faceSize: t2.faceSize,
    iconSize: t2.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((_k = e2.battleTest) == null ? void 0 : _k.battleback1Name) ?? "",
    battleback2Name: ((_l = e2.battleTest) == null ? void 0 : _l.battleback2Name) ?? "",
    testTroopId: ((_m2 = e2.battleTest) == null ? void 0 : _m2.testTroopId) ?? 0,
    testBattlers: Am((_n2 = e2.battleTest) == null ? void 0 : _n2.testBattlers, qm),
    battleBgm: eo((_o2 = e2.bgm) == null ? void 0 : _o2.battleBgm),
    victoryMe: eo((_p2 = e2.me) == null ? void 0 : _p2.victoryMe),
    editMapId: ((_q = e2.editorTemporary) == null ? void 0 : _q.editMapId) ?? 0,
    battlerName: ((_r2 = e2.editorTemporary) == null ? void 0 : _r2.battlerName) ?? "",
    locale: "",
    startMapId: ((_s2 = e2.gameInit) == null ? void 0 : _s2.startMapId) ?? 0,
    startX: ((_t2 = e2.gameInit) == null ? void 0 : _t2.startX) ?? 0,
    startY: ((_u = e2.gameInit) == null ? void 0 : _u.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: wm(e2.terms ?? {}),
    itemCategories: uo(e2.itemCategories),
    partyMembersArray: Tm((_v = e2.gameInit) == null ? void 0 : _v.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: fo(e2.menuComamnds)
  };
}, wm = (e2) => {
  return { basic: Pm(e2.basic ?? {}), commands: (a2 = e2.commands ?? {}, km(a2, "")), params: Vo(e2.params ?? {}), messages: (t2 = e2.messages ?? {}, {
    actionFailure: xm(t2.actionFailure, "Action failed."),
    actorDamage: xm(t2.actorDamage, "%1 took %2 damage."),
    actorRecovery: xm(t2.actorRecovery, "%1 recovered %2 HP."),
    actorGain: xm(t2.actorGain, "%1 gained %2."),
    actorLoss: xm(t2.actorLoss, "%1 lost %2."),
    actorDrain: xm(t2.actorDrain, "%1 drained %2 HP."),
    actorNoDamage: xm(t2.actorNoDamage, "%1 was not damaged."),
    actorNoHit: xm(t2.actorNoHit, "%1 was not hit."),
    alwaysDash: xm(t2.alwaysDash, "Always dash."),
    bgmVolume: xm(t2.bgmVolume, "BGM volume"),
    bgsVolume: xm(t2.bgsVolume, "BGS volume"),
    commandRemember: xm(t2.commandRemember, "Command remember."),
    criticalToActor: xm(t2.criticalToActor, "%1 dealt %2 damage to %3."),
    criticalToEnemy: xm(t2.criticalToEnemy, "%1 dealt %2 damage to %3."),
    counterAttack: xm(t2.counterAttack, "%1 countered!"),
    debuffAdd: xm(t2.debuffAdd, "%1's %2 was lowered."),
    defeat: xm(t2.defeat, "Defeat."),
    enemyDamage: xm(t2.enemyDamage, "%1 took %2 damage."),
    enemyDrain: xm(t2.enemyDrain, "%1 drained %2 HP."),
    enemyGain: xm(t2.enemyGain, "%1 gained %2."),
    enemyLoss: xm(t2.enemyLoss, "%1 lost %2."),
    enemyNoDamage: xm(t2.enemyNoDamage, "%1 was not damaged."),
    enemyNoHit: xm(t2.enemyNoHit, "%1 was not hit."),
    enemyRecovery: xm(t2.enemyRecovery, "%1 recovered %2 HP."),
    evasion: xm(t2.evasion, "%1 evaded the attack!"),
    autosave: xm(t2.autosave, "Autosave"),
    escapeFailure: xm(t2.escapeFailure, "Escape failed."),
    escapeStart: xm(t2.escapeStart, "%1 started to escape!"),
    emerge: xm(t2.emerge, "%1 appeared!"),
    expNext: xm(t2.expNext, "Next level in %1 EXP."),
    expTotal: xm(t2.expTotal, "Total EXP: %1"),
    file: xm(t2.file, "File"),
    buffAdd: xm(t2.buffAdd, "%1's %2 was raised."),
    buffRemove: xm(t2.buffRemove, "%1's %2 was lowered."),
    obtainExp: xm(t2.obtainExp, "%1 EXP obtained."),
    obtainGold: xm(t2.obtainGold, "%1 gold obtained."),
    obtainItem: xm(t2.obtainItem, "%1 obtained %2."),
    obtainSkill: xm(t2.obtainSkill, "%1 learned %2."),
    levelUp: xm(t2.levelUp, "%1 leveled up!"),
    partyName: xm(t2.partyName, "Party"),
    loadMessage: xm(t2.loadMessage, "Load %1?"),
    meVolume: xm(t2.meVolume, "ME volume"),
    possession: xm(t2.possession, "Possession"),
    preemptive: xm(t2.preemptive, "%1 attacked first!"),
    saveMessage: xm(t2.saveMessage, "Save %1?"),
    seVolume: xm(t2.seVolume, "SE volume"),
    magicEvasion: xm(t2.magicEvasion, "%1 evaded the magic!"),
    magicReflection: xm(t2.magicReflection, "%1 reflected the magic!"),
    substitute: xm(t2.substitute, "%1 took the hit!"),
    surprise: xm(t2.surprise, "%1 surprised the enemy!"),
    touchUI: xm(t2.touchUI, "Touch UI"),
    useItem: xm(t2.useItem, "%1 used %2."),
    victory: xm(t2.victory, "Victory!")
  }) };
  var t2, a2;
}, Tm = (e2) => e2 ? [...e2] : [], Sm = (e2) => ((e3) => Im(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Am = (e2, t2) => e2 ? e2.map(t2) : [], qm = (e2) => ((e3) => vm(e3))(e2) ? { actorId: e2.actorId, equips: Tm(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, Rm = (e2, t2, a2, r2, i2, s2) => [...bi(a2, r2), ...ha(e2, t2), ...Fo(i2, s2)], Fm = (e2, t2) => Bi(hn(t2), e2), Dm = (e2, t2, a2) => {
  const r2 = os(t2);
  return Bi(a2 ? [...r2, ...a2] : r2, e2);
}, jm = (e2) => Object.entries(e2).map(([, e3]) => e3.title), Bm = (e2, t2 = 0) => ({ code: 320, parameters: [e2.actorId, e2.name], indent: t2 }), Cm = (e2, t2 = 0) => ({
  code: 324,
  parameters: [e2.actorId, e2.nickname],
  indent: t2
}), Mm = (e2, t2 = 0) => ({ code: 325, parameters: [e2.actorId, e2.profile], indent: t2 }), Em = (e2, t2) => zm(e2, eo({ name: t2 })), zm = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [eo(t2)],
  indent: a2
}), Hm = (e2, t2 = 0) => zm(241, e2, t2), Lm = (e2, t2 = 0) => zm(245, e2, t2), Vm = (e2, t2 = 0) => zm(249, e2, t2), Om = (e2, t2 = 0) => zm(250, e2, t2), Wm = (e2, t2 = 0) => zm(132, e2, t2), Gm = (e2, t2 = 0) => zm(133, e2, t2), Xm = (e2, t2 = 0) => zm(139, e2, t2), Ym = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: _m(e2 ?? {})
}), Km = (e2) => ({ eventId: e2[0] }), _m = (e2) => [e2.eventId ?? 0], $m = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), Um = (e2) => [e2.min, e2.max, e2.value], Zm = (e2, t2 = 0) => ({
  code: 121,
  indent: t2,
  parameters: Um(e2)
}), Jm = (e2) => [e2], Qm = (e2) => ({ comment: e2[0] }), ep = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: Jm(e2) }), tp = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: Jm(e2)
}), ap = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? ep(e3, t2) : tp(e3, t2)), rp = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], ip = (e2) => ({ variableId: e2[0], digits: e2[1] }), sp = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: rp(e2 ?? {})
}), np = (e2, t2 = 0) => ({ code: 402, indent: t2, parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""] }), op = (e2) => ({ index: e2[0], name: e2[1] }), mp = (e2) => [e2.index ?? 0, e2.name ?? ""], pp = (e2) => ({
  choices: e2[0],
  cancelType: e2[1],
  defaultType: e2[2],
  positionType: e2[3],
  background: e2[4]
}), cp = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], dp = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), lp = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), yp = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), up = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), gp = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName], fp = (e2, t2 = 0) => ({ code: 401, indent: t2, parameters: [e2] }), hp = (e2, t2 = 0) => ({
  code: 355,
  indent: t2,
  parameters: [e2]
}), bp = (e2, t2 = 0) => ({ code: 655, indent: t2, parameters: [e2] }), vp = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? hp(e3, t2) : bp(e3, t2)), Ip = 0, Pp = 1, kp = 2, xp = 3, Np = 4, wp = {
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
}, Tp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], Sp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], Ap = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], qp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], Rp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], Fp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], Dp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, wp[t2.param]], jp = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, Bp = (e2, t2) => {
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
}, Cp = (e2) => [...e2], Mp = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: Cp(e2.parameters)
}), Ep = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, zp = (e2) => e2.parameters.every(Ep), Hp = new e({ strict: true }), Lp = Hp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{
    type: "integer",
    minimum: 0
  }, { type: "string" }] } },
  additionalProperties: false
}), Vp = (e2) => Lp(e2), Op = Hp.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } }, required: ["code", "indent", "parameters"] }), Wp = (e2) => Op(e2), Gp = Hp.compile({
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
}), Xp = (e2) => Gp(e2), Yp = Hp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
    type: "integer",
    enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
  } },
  additionalProperties: false
}), Kp = (e2) => Yp(e2), _p = Hp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), $p = (e2) => _p(e2), Up = Hp.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), Zp = (e2) => Up(e2), Jp = Hp.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } },
  required: ["code", "indent", "parameters"]
}), Qp = (e2) => Jp(e2), ec = Hp.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 402
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } },
  required: ["code", "indent", "parameters"]
}), tc = (e2) => ec(e2), ac = Hp.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), rc = (e2) => ac(e2), ic = Hp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), sc = (e2) => ic(e2), nc = (e2) => Xp(e2) && 241 === e2.code, oc = (e2) => Xp(e2) && 245 === e2.code, mc = (e2) => Xp(e2) && 249 === e2.code, pc = (e2) => Xp(e2) && 250 === e2.code, cc = (e2) => Xp(e2) && 132 === e2.code, dc = (e2) => Xp(e2) && 133 === e2.code, lc = (e2) => Xp(e2) && 139 === e2.code, yc = (e2) => $p(e2) && 401 === e2.code, uc = (e2) => $p(e2) && 405 === e2.code, gc = (e2) => $p(e2) && 108 === e2.code, fc = (e2) => $p(e2) && 408 === e2.code, hc = (e2) => $p(e2) && 355 === e2.code, bc = (e2) => $p(e2) && 655 === e2.code, vc = "bgm", Ic = "se", Pc = "me", kc = "bgs", xc = "battlebacks1", Nc = "battlebacks2", wc = "characters", Tc = "enemies", Sc = "faces", Ac = "parallaxes", qc = "pictures", Rc = "sv_actors", Fc = "sv_enemies", Dc = "system", jc = "tilesets", Bc = "titles1", Cc = "titles2", Mc = "System.json", Ec = "Actors.json", zc = "Classes.json", Hc = "Skills.json", Lc = "Items.json", Vc = "Weapons.json", Oc = "Armors.json", Wc = "Enemies.json", Gc = "Troops.json", Xc = "States.json", Yc = "Animations.json", Kc = "Tilesets.json", _c = "CommonEvents.json", $c = "MapInfos.json", Uc = "data", Zc = "img", Jc = "audio", Qc = "js", ed = (e2, t2) => ({
  type: "array",
  items: t2,
  ...td(e2),
  ...ad(e2.default)
}), td = (e2) => ({ ..."string" == typeof e2.text ? { title: e2.text } : {}, ..."string" == typeof e2.desc ? { description: e2.desc } : {} }), ad = (e2) => void 0 !== e2 ? {
  default: e2
} : {}, rd = (e2) => void 0 === e2 || 0 === e2, id = (e2) => ed(e2, { type: "string" }), sd = (e2) => {
  switch (e2.kind) {
    case "string":
    case "multiline_string":
      return ((e3) => ({
        type: "string",
        ...td(e3),
        ...ad(e3.default)
      }))(e2);
    case "file":
    case "combo":
      return ((e3) => ({ type: "string", ...ad(e3.default), ...td(e3) }))(e2);
    case "select":
      return ((e3) => ({ type: "string", ...ad(e3.default), ...td(e3), ...e3.options ? {
        enum: e3.options.map((e4) => e4.value)
      } : {} }))(e2);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return id(e2);
    case "number[]":
      return ((e3) => ({ type: "array", items: {
        type: rd(e3.decimals) ? "integer" : "number"
      }, ...ad(e3.default), ...td(e3) }))(e2);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ((e3) => ed(e3, { type: "integer" }))(e2);
    case "number":
      return ((e3) => ({ type: rd(e3.decimals) ? "integer" : "number", ...ad(e3.default), ...td(e3) }))(e2);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((e3) => ({ type: "integer", ...ad(e3.default), ...td(e3) }))(e2);
    case "boolean":
      return ((e3) => ({ type: "boolean", ...ad(e3.default), ...td(e3) }))(e2);
    case "struct":
      return { $ref: `#/definitions/${(t2 = e2).struct}`, ...td(t2) };
    default:
      return {};
  }
  var t2;
}, nd = (e2, t2) => Object.entries(t2).reduce((t3, [a2, r2]) => {
  if (a2 in e2) {
    const i2 = e2[a2];
    if ("string" == typeof i2) return { ...t3, [a2]: r2(i2) };
  }
  return t3;
}, {}), od = (e2, t2, a2, r2) => ({
  default: t2,
  ...nd(a2, r2),
  kind: e2
}), md = (e2, t2, a2) => ({ default: [], ...nd(t2, a2), kind: e2 }), pd = "help", cd = "kind", dd = "text", ld = "struct", yd = (e2) => {
  const t2 = JSON.parse(e2);
  return Array.isArray(t2) ? t2.map(ud) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, ud(t3)])) : t2;
}, ud = (e2) => {
  if ("string" != typeof e2) return e2;
  try {
    const t2 = JSON.parse(e2);
    return Array.isArray(t2) ? t2.map(ud) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, ud(t3)])) : t2;
  } catch {
    return e2;
  }
}, gd = (e2) => {
  if (cd in e2.attr) {
    const t2 = xd[e2.attr.kind];
    if (t2) return t2(e2);
  }
  return od("any", "", e2.attr, bd);
}, fd = (e2) => e2, hd = (e2) => e2.replace("[", "").replace("]", "").split(",").map((e3) => parseFloat(e3.replaceAll('"', "").trim())).filter((e3) => !isNaN(e3)), bd = {
  default: fd,
  text: fd,
  desc: fd,
  parent: fd
}, vd = (e2) => od("string", "", e2.attr, bd), Id = (e2) => {
  const t2 = { default: (e3) => yd(e3), text: fd, desc: fd, parent: fd };
  return md("string[]", e2.attr, t2);
}, Pd = (e2, t2) => {
  const a2 = {
    default: hd,
    text: fd,
    desc: fd,
    parent: fd
  };
  return md(t2, e2.attr, a2);
}, kd = (e2, t2) => {
  const a2 = { default: (e3) => parseInt(e3, 10), text: fd, desc: fd, parent: fd };
  return od(t2, 0, e2.attr, a2);
}, xd = {
  number: (e2) => ((e3) => {
    const t2 = {
      default: (e4) => parseFloat(e4),
      text: fd,
      desc: fd,
      decimals: (e4) => parseInt(e4, 10),
      min: (e4) => parseFloat(e4),
      max: (e4) => parseFloat(e4),
      parent: fd
    };
    return od("number", 0, e3.attr, t2);
  })(e2),
  "number[]": (e2) => {
    const t2 = { default: hd, text: fd, desc: fd, decimals: (e3) => parseInt(e3, 10), min: (e3) => parseFloat(e3), max: (e3) => parseFloat(e3), parent: fd };
    return md("number[]", e2.attr, t2);
  },
  string: vd,
  "string[]": Id,
  multiline_string: vd,
  "multiline_string[]": Id,
  combo: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => e3.option)) ?? [];
    return { ...od("combo", "", e2.attr, bd), options: t2 };
  },
  select: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => ({ option: e3.option, value: e3.value }))) ?? [];
    return { ...od("select", "", e2.attr, bd), options: t2 };
  },
  actor: (e2) => kd(e2, "actor"),
  "actor[]": (e2) => Pd(e2, "actor[]"),
  class: (e2) => kd(e2, "class"),
  "class[]": (e2) => Pd(e2, "class[]"),
  skill: (e2) => kd(e2, "skill"),
  "skill[]": (e2) => Pd(e2, "skill[]"),
  item: (e2) => kd(e2, "item"),
  "item[]": (e2) => Pd(e2, "item[]"),
  weapon: (e2) => kd(e2, "weapon"),
  "weapon[]": (e2) => Pd(e2, "weapon[]"),
  armor: (e2) => kd(e2, "armor"),
  "armor[]": (e2) => Pd(e2, "armor[]"),
  state: (e2) => kd(e2, "state"),
  "state[]": (e2) => Pd(e2, "state[]"),
  enemy: (e2) => kd(e2, "enemy"),
  "enemy[]": (e2) => Pd(e2, "enemy[]"),
  common_event: (e2) => kd(e2, "common_event"),
  "common_event[]": (e2) => Pd(e2, "common_event[]"),
  switch: (e2) => kd(e2, "switch"),
  "switch[]": (e2) => Pd(e2, "switch[]"),
  variable: (e2) => kd(e2, "variable"),
  "variable[]": (e2) => Pd(e2, "variable[]"),
  troop: (e2) => kd(e2, "troop"),
  "troop[]": (e2) => Pd(e2, "troop[]"),
  boolean: (e2) => {
    const t2 = {
      default: (e3) => "true" === e3,
      text: fd,
      desc: fd,
      on: fd,
      off: fd,
      parent: fd
    };
    return od("boolean", true, e2.attr, t2);
  },
  file: (e2) => {
    const t2 = { default: fd, text: fd, desc: fd, parent: fd, dir: fd };
    return { dir: "", ...od("file", "", e2.attr, t2) };
  },
  "file[]": (e2) => {
    const t2 = { default: (e3) => yd(e3), text: fd, desc: fd, parent: fd, dir: fd };
    return { dir: "", ...md("file[]", e2.attr, t2) };
  }
}, Nd = "BODY", wd = "STRUCT", Td = "NONE", Sd = (e2, t2) => {
  const a2 = e2.lines.length > 0 ? qd(e2) : e2, r2 = t2[1] || void 0;
  return { ...a2, structName: r2, blockType: r2 ? wd : "INVALID", locale: t2[2], lines: [] };
}, Ad = (e2) => ({
  ...e2.lines.length > 0 ? qd(e2) : e2,
  blockType: Nd,
  structName: void 0,
  locale: void 0,
  lines: []
}), qd = (e2) => e2.blockType === Nd ? { ...e2, bodies: e2.bodies.concat([{ lines: [...e2.lines] }]), lines: [], blockType: Td } : e2.structName && e2.blockType === wd ? {
  ...e2,
  structs: e2.structs.concat([{ struct: e2.structName, locale: e2.locale, lines: [...e2.lines] }]),
  blockType: Td,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e2,
  blockType: Td,
  structName: void 0,
  lines: []
}, Rd = (e2) => e2.currentOption ? { items: e2.items.concat({ option: e2.currentOption, value: e2.currentOption }) } : e2, Fd = (e2) => ({
  ..."string" == typeof e2.desc ? { desc: e2.desc } : {},
  ..."string" == typeof e2.text ? { text: e2.text } : {}
}), Dd = (e2) => {
  const t2 = jd(e2), a2 = Cd(t2);
  return Bd(a2);
}, jd = (e2) => {
  if (e2.currentParam && e2.currentOption) {
    const t2 = e2.currentParam.attr.kind;
    if ("select" === t2 || "combo" === t2) return { ...e2, currentParam: { ...e2.currentParam, options: Rd(e2.currentOption).items } };
  }
  return e2;
}, Bd = (e2) => e2.currentParam ? {
  ...e2,
  params: [...e2.params, e2.currentParam],
  currentParam: null,
  currentContext: null
} : e2, Cd = (e2) => {
  if (e2.currentCommand) {
    const t2 = e2.currentParam ? [...e2.currentCommand.args, e2.currentParam] : e2.currentCommand.args, a2 = { ...Fd(e2.currentCommand), command: e2.currentCommand.command, args: t2 };
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
}, Md = (e2, t2) => {
  const a2 = e2.lines.reduce((e3, a3) => {
    const r2 = a3.trim().replace(/^\*\s?/, "");
    if (!r2.startsWith("@")) return e3.currentContext === pd ? { ...e3, helpLines: e3.helpLines.concat(r2) } : e3;
    const [i2, ...s2] = r2.slice(1).split(" "), n2 = s2.join(" ").trim(), o2 = t2[i2];
    return o2 ? o2(e3, n2) : e3;
  }, zd());
  return Dd(a2);
}, Ed = (e2, t2) => {
  const a2 = ((e3) => {
    const t3 = e3.split("\n"), a3 = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: Td
    }, r3 = t3.reduce((e4, t4) => {
      const a4 = t4.trim(), r4 = a4.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return r4 ? Sd(e4, r4) : "/*:" === a4 ? Ad(e4) : "*/" === a4 ? e4.lines.length > 0 ? qd(e4) : e4 : { ...e4, lines: e4.lines.concat([a4]) };
    }, a3);
    return { structs: r3.structs, bodies: r3.bodies };
  })(e2), r2 = a2.structs.map((e3) => ((e4) => {
    const t3 = Md(e4, Vd);
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
  const s2 = Md(i2, t2);
  return { params: s2.params, commands: s2.commands, meta: s2.meta, helpLines: s2.helpLines, structs: r2 };
}, zd = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), Hd = (e2, t2, a2) => e2.currentParam && !(t2 in e2.currentParam.attr) ? {
  ...e2,
  currentParam: { ...e2.currentParam, attr: { ...e2.currentParam.attr, [t2]: a2 } }
} : e2, Ld = (e2, t2, a2) => ({ ...e2, meta: { [t2]: a2, ...e2.meta } }), Vd = {
  param: (e2, t2) => {
    const a2 = Dd(e2);
    return a2.params.some((e3) => e3.name === t2) ? a2 : { ...a2, currentContext: "param", currentParam: { name: t2, attr: {} } };
  },
  text: (e2, t2) => e2.currentParam ? Hd(e2, dd, t2) : e2.currentCommand && !(dd in e2.currentCommand) ? { ...e2, currentCommand: {
    ...Fd(e2.currentCommand),
    command: e2.currentCommand.command,
    args: e2.currentCommand.args,
    [dd]: t2
  } } : e2,
  desc: (e2, t2) => e2.currentParam ? Hd(e2, "desc", t2) : e2.currentCommand ? { ...e2, currentCommand: { ...e2.currentCommand, desc: t2 } } : e2,
  command: (e2, t2) => {
    const a2 = Dd(e2);
    return a2.commands.some((e3) => e3.command === t2) ? a2 : { ...a2, currentCommand: { command: t2, args: [] }, currentParam: null };
  },
  arg: (e2, t2) => {
    if (!e2.currentCommand) return e2;
    if (e2.currentParam) {
      const a2 = {
        ...Fd(e2.currentCommand),
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
  help: (e2) => ({ ...Dd(e2), currentContext: pd }),
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
      const a2 = t2.slice(7, -1), r2 = Hd(e2, ld, a2);
      return Hd(r2, cd, ld);
    }
    return e2.currentParam ? Hd(e2, cd, t2) : e2;
  },
  default: (e2, t2) => Hd(e2, "default", t2),
  on: (e2, t2) => Hd(e2, "on", t2),
  off: (e2, t2) => Hd(e2, "off", t2),
  min: (e2, t2) => Hd(e2, "min", t2),
  max: (e2, t2) => Hd(e2, "max", t2),
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
  author: (e2, t2) => Ld(e2, "author", t2),
  plugindesc: (e2, t2) => Ld(e2, "plugindesc", t2),
  url: (e2, t2) => Ld(e2, "url", t2)
}, Od = (e2) => Wd(((e3) => Ed(e3, Vd))(e2)), Wd = (e2) => ({
  target: "MZ",
  meta: e2.meta,
  commands: Xd(e2.commands),
  params: Gd(e2.params)
}), Gd = (e2) => e2.reduce((e3, t2) => ({ [t2.name]: gd(t2), ...e3 }), {}), Xd = (e2) => e2.reduce((e3, t2) => {
  const a2 = { desc: t2.desc, text: t2.text, args: Gd(t2.args) };
  return { [t2.command]: a2, ...e3 };
}, {}), Yd = (e2) => Od(e2), Kd = (e2) => ((e3) => {
  const t2 = Object.entries(e3).reduce((e4, [t3, a2]) => {
    const r2 = sd(a2);
    return { ...e4, [t3]: r2 };
  }, {});
  return {
    type: "object",
    properties: t2,
    required: Object.keys(t2),
    additionalProperties: false
  };
})(e2);
function _d(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var $d, Ud = { exports: {} };
const Zd = _d(function() {
  if ($d) return Ud.exports;
  function e2(t2, { instancePath: a2 = "", parentData: r2, parentDataProperty: i2, rootData: s2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{
      instancePath: a2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let r3;
      if (void 0 === t2.name && (r3 = "name") || void 0 === t2.id && (r3 = "id") || void 0 === t2.nickname && (r3 = "nickname") || void 0 === t2.battlerName && (r3 = "battlerName") || void 0 === t2.characterName && (r3 = "characterName") || void 0 === t2.characterIndex && (r3 = "characterIndex") || void 0 === t2.faceName && (r3 = "faceName") || void 0 === t2.faceIndex && (r3 = "faceIndex") || void 0 === t2.classId && (r3 = "classId") || void 0 === t2.initialLevel && (r3 = "initialLevel") || void 0 === t2.maxLevel && (r3 = "maxLevel")) return e2.errors = [{
        instancePath: a2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: r3 },
        message: "must have required property '" + r3 + "'"
      }], false;
      if (void 0 !== t2.name) {
        const r4 = 0;
        if ("string" != typeof t2.name) return e2.errors = [{ instancePath: a2 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var n2 = 0 === r4;
      } else n2 = true;
      if (n2) {
        if (void 0 !== t2.battlerName) {
          const r4 = 0;
          if ("string" != typeof t2.battlerName) return e2.errors = [{
            instancePath: a2 + "/battlerName",
            schemaPath: "#/properties/battlerName/type",
            keyword: "type",
            params: { type: "string" },
            message: "must be string"
          }], false;
          n2 = 0 === r4;
        } else n2 = true;
        if (n2) {
          if (void 0 !== t2.characterName) {
            const r4 = 0;
            if ("string" != typeof t2.characterName) return e2.errors = [{
              instancePath: a2 + "/characterName",
              schemaPath: "#/properties/characterName/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            n2 = 0 === r4;
          } else n2 = true;
          if (n2) {
            if (void 0 !== t2.characterIndex) {
              let r4 = t2.characterIndex;
              const i3 = 0;
              if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{ instancePath: a2 + "/characterIndex", schemaPath: "#/properties/characterIndex/type", keyword: "type", params: {
                type: "integer"
              }, message: "must be integer" }], false;
              n2 = 0 === i3;
            } else n2 = true;
            if (n2) {
              if (void 0 !== t2.faceName) {
                const r4 = 0;
                if ("string" != typeof t2.faceName) return e2.errors = [{
                  instancePath: a2 + "/faceName",
                  schemaPath: "#/properties/faceName/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], false;
                n2 = 0 === r4;
              } else n2 = true;
              if (n2) {
                if (void 0 !== t2.faceIndex) {
                  let r4 = t2.faceIndex;
                  const i3 = 0;
                  if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                    instancePath: a2 + "/faceIndex",
                    schemaPath: "#/properties/faceIndex/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], false;
                  if ("number" == typeof r4 && isFinite(r4)) {
                    if (r4 > 7 || isNaN(r4)) return e2.errors = [{
                      instancePath: a2 + "/faceIndex",
                      schemaPath: "#/properties/faceIndex/maximum",
                      keyword: "maximum",
                      params: { comparison: "<=", limit: 7 },
                      message: "must be <= 7"
                    }], false;
                    if (r4 < 0 || isNaN(r4)) return e2.errors = [{
                      instancePath: a2 + "/faceIndex",
                      schemaPath: "#/properties/faceIndex/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                  }
                  n2 = 0 === i3;
                } else n2 = true;
                if (n2) {
                  if (void 0 !== t2.id) {
                    let r4 = t2.id;
                    const i3 = 0;
                    if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                      instancePath: a2 + "/id",
                      schemaPath: "#/properties/id/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    if ("number" == typeof r4 && isFinite(r4) && (r4 < 0 || isNaN(r4))) return e2.errors = [{
                      instancePath: a2 + "/id",
                      schemaPath: "#/properties/id/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                    n2 = 0 === i3;
                  } else n2 = true;
                  if (n2) {
                    if (void 0 !== t2.nickname) {
                      const r4 = 0;
                      if ("string" != typeof t2.nickname) return e2.errors = [{
                        instancePath: a2 + "/nickname",
                        schemaPath: "#/properties/nickname/type",
                        keyword: "type",
                        params: { type: "string" },
                        message: "must be string"
                      }], false;
                      n2 = 0 === r4;
                    } else n2 = true;
                    if (n2) {
                      if (void 0 !== t2.profile) {
                        const r4 = 0;
                        if ("string" != typeof t2.profile) return e2.errors = [{ instancePath: a2 + "/profile", schemaPath: "#/properties/profile/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
                        n2 = 0 === r4;
                      } else n2 = true;
                      if (n2) {
                        if (void 0 !== t2.initialLevel) {
                          let r4 = t2.initialLevel;
                          const i3 = 0;
                          if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                            instancePath: a2 + "/initialLevel",
                            schemaPath: "#/properties/initialLevel/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          if ("number" == typeof r4 && isFinite(r4) && (r4 < 0 || isNaN(r4))) return e2.errors = [{ instancePath: a2 + "/initialLevel", schemaPath: "#/properties/initialLevel/minimum", keyword: "minimum", params: {
                            comparison: ">=",
                            limit: 0
                          }, message: "must be >= 0" }], false;
                          n2 = 0 === i3;
                        } else n2 = true;
                        if (n2) {
                          if (void 0 !== t2.maxLevel) {
                            let r4 = t2.maxLevel;
                            const i3 = 0;
                            if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                              instancePath: a2 + "/maxLevel",
                              schemaPath: "#/properties/maxLevel/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            n2 = 0 === i3;
                          } else n2 = true;
                          if (n2) {
                            if (void 0 !== t2.classId) {
                              let r4 = t2.classId;
                              const i3 = 0;
                              if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                                instancePath: a2 + "/classId",
                                schemaPath: "#/properties/classId/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], false;
                              if ("number" == typeof r4 && isFinite(r4) && (r4 < 0 || isNaN(r4))) return e2.errors = [{ instancePath: a2 + "/classId", schemaPath: "#/properties/classId/minimum", keyword: "minimum", params: {
                                comparison: ">=",
                                limit: 0
                              }, message: "must be >= 0" }], false;
                              n2 = 0 === i3;
                            } else n2 = true;
                            if (n2) {
                              if (void 0 !== t2.equips) {
                                let r4 = t2.equips;
                                const i3 = 0;
                                if (!Array.isArray(r4)) return e2.errors = [{
                                  instancePath: a2 + "/equips",
                                  schemaPath: "#/properties/equips/type",
                                  keyword: "type",
                                  params: { type: "array" },
                                  message: "must be array"
                                }], false;
                                {
                                  const t3 = r4.length;
                                  for (let i4 = 0; i4 < t3; i4++) {
                                    let t4 = r4[i4];
                                    const s3 = 0;
                                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: a2 + "/equips/" + i4, schemaPath: "#/properties/equips/items/type", keyword: "type", params: {
                                      type: "integer"
                                    }, message: "must be integer" }], false;
                                    if (!(0 === s3)) break;
                                  }
                                }
                                n2 = 0 === i3;
                              } else n2 = true;
                              if (n2) {
                                if (void 0 !== t2.note) {
                                  const r4 = 0;
                                  if ("string" != typeof t2.note) return e2.errors = [{
                                    instancePath: a2 + "/note",
                                    schemaPath: "#/properties/note/type",
                                    keyword: "type",
                                    params: { type: "string" },
                                    message: "must be string"
                                  }], false;
                                  n2 = 0 === r4;
                                } else n2 = true;
                                if (n2) if (void 0 !== t2.traits) {
                                  let r4 = t2.traits;
                                  const i3 = 0;
                                  if (!Array.isArray(r4)) return e2.errors = [{
                                    instancePath: a2 + "/traits",
                                    schemaPath: "#/properties/traits/type",
                                    keyword: "type",
                                    params: { type: "array" },
                                    message: "must be array"
                                  }], false;
                                  {
                                    const t3 = r4.length;
                                    for (let i4 = 0; i4 < t3; i4++) {
                                      let t4 = r4[i4];
                                      const s3 = 0;
                                      if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                                        instancePath: a2 + "/traits/" + i4,
                                        schemaPath: "#/properties/traits/items/type",
                                        keyword: "type",
                                        params: { type: "object" },
                                        message: "must be object"
                                      }], false;
                                      {
                                        let r5;
                                        if (void 0 === t4.code && (r5 = "code") || void 0 === t4.dataId && (r5 = "dataId") || void 0 === t4.value && (r5 = "value")) return e2.errors = [{
                                          instancePath: a2 + "/traits/" + i4,
                                          schemaPath: "#/properties/traits/items/required",
                                          keyword: "required",
                                          params: { missingProperty: r5 },
                                          message: "must have required property '" + r5 + "'"
                                        }], false;
                                        if (void 0 !== t4.code) {
                                          let r6 = t4.code;
                                          const s4 = 0;
                                          if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                            instancePath: a2 + "/traits/" + i4 + "/code",
                                            schemaPath: "#/properties/traits/items/properties/code/type",
                                            keyword: "type",
                                            params: { type: "integer" },
                                            message: "must be integer"
                                          }], false;
                                          var o2 = 0 === s4;
                                        } else o2 = true;
                                        if (o2) {
                                          if (void 0 !== t4.dataId) {
                                            let r6 = t4.dataId;
                                            const s4 = 0;
                                            if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                              instancePath: a2 + "/traits/" + i4 + "/dataId",
                                              schemaPath: "#/properties/traits/items/properties/dataId/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            o2 = 0 === s4;
                                          } else o2 = true;
                                          if (o2) if (void 0 !== t4.value) {
                                            let r6 = t4.value;
                                            const s4 = 0;
                                            if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                              instancePath: a2 + "/traits/" + i4 + "/value",
                                              schemaPath: "#/properties/traits/items/properties/value/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            o2 = 0 === s4;
                                          } else o2 = true;
                                        }
                                      }
                                      if (!(0 === s3)) break;
                                    }
                                  }
                                  n2 = 0 === i3;
                                } else n2 = true;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return e2.errors = null, true;
  }
  return $d = 1, Ud.exports = e2, Ud.exports.default = e2, Ud.exports;
}()), Jd = (e2) => Zd(e2);
var Qd, el = { exports: {} };
const tl = _d(function() {
  if (Qd) return el.exports;
  function e2(t2, { instancePath: a2 = "", parentData: r2, parentDataProperty: i2, rootData: s2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{
      instancePath: a2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let r3;
      if (void 0 === t2.name && (r3 = "name") || void 0 === t2.id && (r3 = "id") || void 0 === t2.battlerName && (r3 = "battlerName") || void 0 === t2.battlerHue && (r3 = "battlerHue") || void 0 === t2.exp && (r3 = "exp") || void 0 === t2.gold && (r3 = "gold") || void 0 === t2.note && (r3 = "note") || void 0 === t2.params && (r3 = "params") || void 0 === t2.dropItems && (r3 = "dropItems") || void 0 === t2.traits && (r3 = "traits") || void 0 === t2.actions && (r3 = "actions")) return e2.errors = [{
        instancePath: a2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: r3 },
        message: "must have required property '" + r3 + "'"
      }], false;
      if (void 0 !== t2.name) {
        const r4 = 0;
        if ("string" != typeof t2.name) return e2.errors = [{ instancePath: a2 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var n2 = 0 === r4;
      } else n2 = true;
      if (n2) {
        if (void 0 !== t2.id) {
          let r4 = t2.id;
          const i3 = 0;
          if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
            instancePath: a2 + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          if ("number" == typeof r4 && isFinite(r4) && (r4 < 0 || isNaN(r4))) return e2.errors = [{
            instancePath: a2 + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], false;
          n2 = 0 === i3;
        } else n2 = true;
        if (n2) {
          if (void 0 !== t2.battlerHue) {
            let r4 = t2.battlerHue;
            const i3 = 0;
            if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
              instancePath: a2 + "/battlerHue",
              schemaPath: "#/properties/battlerHue/type",
              keyword: "type",
              params: { type: "integer" },
              message: "must be integer"
            }], false;
            if ("number" == typeof r4 && isFinite(r4) && (r4 < 0 || isNaN(r4))) return e2.errors = [{ instancePath: a2 + "/battlerHue", schemaPath: "#/properties/battlerHue/minimum", keyword: "minimum", params: {
              comparison: ">=",
              limit: 0
            }, message: "must be >= 0" }], false;
            n2 = 0 === i3;
          } else n2 = true;
          if (n2) {
            if (void 0 !== t2.battlerName) {
              const r4 = 0;
              if ("string" != typeof t2.battlerName) return e2.errors = [{
                instancePath: a2 + "/battlerName",
                schemaPath: "#/properties/battlerName/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string"
              }], false;
              n2 = 0 === r4;
            } else n2 = true;
            if (n2) {
              if (void 0 !== t2.exp) {
                let r4 = t2.exp;
                const i3 = 0;
                if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                  instancePath: a2 + "/exp",
                  schemaPath: "#/properties/exp/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer"
                }], false;
                if ("number" == typeof r4 && isFinite(r4) && (r4 < 0 || isNaN(r4))) return e2.errors = [{
                  instancePath: a2 + "/exp",
                  schemaPath: "#/properties/exp/minimum",
                  keyword: "minimum",
                  params: { comparison: ">=", limit: 0 },
                  message: "must be >= 0"
                }], false;
                n2 = 0 === i3;
              } else n2 = true;
              if (n2) {
                if (void 0 !== t2.gold) {
                  let r4 = t2.gold;
                  const i3 = 0;
                  if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                    instancePath: a2 + "/gold",
                    schemaPath: "#/properties/gold/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], false;
                  if ("number" == typeof r4 && isFinite(r4) && (r4 < 0 || isNaN(r4))) return e2.errors = [{
                    instancePath: a2 + "/gold",
                    schemaPath: "#/properties/gold/minimum",
                    keyword: "minimum",
                    params: { comparison: ">=", limit: 0 },
                    message: "must be >= 0"
                  }], false;
                  n2 = 0 === i3;
                } else n2 = true;
                if (n2) {
                  if (void 0 !== t2.note) {
                    const r4 = 0;
                    if ("string" != typeof t2.note) return e2.errors = [{
                      instancePath: a2 + "/note",
                      schemaPath: "#/properties/note/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string"
                    }], false;
                    n2 = 0 === r4;
                  } else n2 = true;
                  if (n2) {
                    if (void 0 !== t2.params) {
                      let r4 = t2.params;
                      const i3 = 0;
                      if (!Array.isArray(r4)) return e2.errors = [{
                        instancePath: a2 + "/params",
                        schemaPath: "#/properties/params/type",
                        keyword: "type",
                        params: { type: "array" },
                        message: "must be array"
                      }], false;
                      if (r4.length > 8) return e2.errors = [{
                        instancePath: a2 + "/params",
                        schemaPath: "#/properties/params/maxItems",
                        keyword: "maxItems",
                        params: { limit: 8 },
                        message: "must NOT have more than 8 items"
                      }], false;
                      if (r4.length < 8) return e2.errors = [{ instancePath: a2 + "/params", schemaPath: "#/properties/params/minItems", keyword: "minItems", params: {
                        limit: 8
                      }, message: "must NOT have fewer than 8 items" }], false;
                      {
                        const t3 = r4.length;
                        if (t3 > 0) {
                          let t4 = r4[0];
                          const i4 = 0;
                          if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                            instancePath: a2 + "/params/0",
                            schemaPath: "#/properties/params/items/0/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          var o2 = 0 === i4;
                        }
                        if (o2) {
                          if (t3 > 1) {
                            let t4 = r4[1];
                            const i4 = 0;
                            if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: a2 + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                              type: "integer"
                            }, message: "must be integer" }], false;
                            o2 = 0 === i4;
                          }
                          if (o2) {
                            if (t3 > 2) {
                              let t4 = r4[2];
                              const i4 = 0;
                              if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                instancePath: a2 + "/params/2",
                                schemaPath: "#/properties/params/items/2/type",
                                keyword: "type",
                                params: { type: "integer" },
                                message: "must be integer"
                              }], false;
                              o2 = 0 === i4;
                            }
                            if (o2) {
                              if (t3 > 3) {
                                let t4 = r4[3];
                                const i4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: a2 + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                                  type: "integer"
                                }, message: "must be integer" }], false;
                                o2 = 0 === i4;
                              }
                              if (o2) {
                                if (t3 > 4) {
                                  let t4 = r4[4];
                                  const i4 = 0;
                                  if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                    instancePath: a2 + "/params/4",
                                    schemaPath: "#/properties/params/items/4/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  o2 = 0 === i4;
                                }
                                if (o2) {
                                  if (t3 > 5) {
                                    let t4 = r4[5];
                                    const i4 = 0;
                                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: a2 + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                      type: "integer"
                                    }, message: "must be integer" }], false;
                                    o2 = 0 === i4;
                                  }
                                  if (o2) {
                                    if (t3 > 6) {
                                      let t4 = r4[6];
                                      const i4 = 0;
                                      if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                        instancePath: a2 + "/params/6",
                                        schemaPath: "#/properties/params/items/6/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      o2 = 0 === i4;
                                    }
                                    if (o2 && t3 > 7) {
                                      let t4 = r4[7];
                                      const i4 = 0;
                                      if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: a2 + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                        type: "integer"
                                      }, message: "must be integer" }], false;
                                      o2 = 0 === i4;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                      n2 = 0 === i3;
                    } else n2 = true;
                    if (n2) {
                      if (void 0 !== t2.actions) {
                        let r4 = t2.actions;
                        const i3 = 0;
                        if (!Array.isArray(r4)) return e2.errors = [{
                          instancePath: a2 + "/actions",
                          schemaPath: "#/properties/actions/type",
                          keyword: "type",
                          params: { type: "array" },
                          message: "must be array"
                        }], false;
                        {
                          const t3 = r4.length;
                          for (let i4 = 0; i4 < t3; i4++) {
                            let t4 = r4[i4];
                            const s3 = 0;
                            if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{ instancePath: a2 + "/actions/" + i4, schemaPath: "#/properties/actions/items/type", keyword: "type", params: {
                              type: "object"
                            }, message: "must be object" }], false;
                            {
                              let r5;
                              if (void 0 === t4.conditionParam1 && (r5 = "conditionParam1") || void 0 === t4.conditionParam2 && (r5 = "conditionParam2") || void 0 === t4.conditionType && (r5 = "conditionType") || void 0 === t4.skillId && (r5 = "skillId") || void 0 === t4.rating && (r5 = "rating")) return e2.errors = [{
                                instancePath: a2 + "/actions/" + i4,
                                schemaPath: "#/properties/actions/items/required",
                                keyword: "required",
                                params: { missingProperty: r5 },
                                message: "must have required property '" + r5 + "'"
                              }], false;
                              if (void 0 !== t4.conditionParam1) {
                                let r6 = t4.conditionParam1;
                                const s4 = 0;
                                if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                  instancePath: a2 + "/actions/" + i4 + "/conditionParam1",
                                  schemaPath: "#/properties/actions/items/properties/conditionParam1/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                var m2 = 0 === s4;
                              } else m2 = true;
                              if (m2) {
                                if (void 0 !== t4.conditionParam2) {
                                  let r6 = t4.conditionParam2;
                                  const s4 = 0;
                                  if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                    instancePath: a2 + "/actions/" + i4 + "/conditionParam2",
                                    schemaPath: "#/properties/actions/items/properties/conditionParam2/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  m2 = 0 === s4;
                                } else m2 = true;
                                if (m2) {
                                  if (void 0 !== t4.conditionType) {
                                    let r6 = t4.conditionType;
                                    const s4 = 0;
                                    if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                      instancePath: a2 + "/actions/" + i4 + "/conditionType",
                                      schemaPath: "#/properties/actions/items/properties/conditionType/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], false;
                                    m2 = 0 === s4;
                                  } else m2 = true;
                                  if (m2) {
                                    if (void 0 !== t4.skillId) {
                                      let r6 = t4.skillId;
                                      const s4 = 0;
                                      if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                        instancePath: a2 + "/actions/" + i4 + "/skillId",
                                        schemaPath: "#/properties/actions/items/properties/skillId/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      m2 = 0 === s4;
                                    } else m2 = true;
                                    if (m2) if (void 0 !== t4.rating) {
                                      let r6 = t4.rating;
                                      const s4 = 0;
                                      if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                        instancePath: a2 + "/actions/" + i4 + "/rating",
                                        schemaPath: "#/properties/actions/items/properties/rating/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      m2 = 0 === s4;
                                    } else m2 = true;
                                  }
                                }
                              }
                            }
                            if (!(0 === s3)) break;
                          }
                        }
                        n2 = 0 === i3;
                      } else n2 = true;
                      if (n2) {
                        if (void 0 !== t2.traits) {
                          let r4 = t2.traits;
                          const i3 = 0;
                          if (!Array.isArray(r4)) return e2.errors = [{
                            instancePath: a2 + "/traits",
                            schemaPath: "#/properties/traits/type",
                            keyword: "type",
                            params: { type: "array" },
                            message: "must be array"
                          }], false;
                          {
                            const t3 = r4.length;
                            for (let i4 = 0; i4 < t3; i4++) {
                              let t4 = r4[i4];
                              const s3 = 0;
                              if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                                instancePath: a2 + "/traits/" + i4,
                                schemaPath: "#/properties/traits/items/type",
                                keyword: "type",
                                params: { type: "object" },
                                message: "must be object"
                              }], false;
                              {
                                let r5;
                                if (void 0 === t4.code && (r5 = "code") || void 0 === t4.dataId && (r5 = "dataId") || void 0 === t4.value && (r5 = "value")) return e2.errors = [{
                                  instancePath: a2 + "/traits/" + i4,
                                  schemaPath: "#/properties/traits/items/required",
                                  keyword: "required",
                                  params: { missingProperty: r5 },
                                  message: "must have required property '" + r5 + "'"
                                }], false;
                                if (void 0 !== t4.code) {
                                  let r6 = t4.code;
                                  const s4 = 0;
                                  if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                    instancePath: a2 + "/traits/" + i4 + "/code",
                                    schemaPath: "#/properties/traits/items/properties/code/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  var p2 = 0 === s4;
                                } else p2 = true;
                                if (p2) {
                                  if (void 0 !== t4.dataId) {
                                    let r6 = t4.dataId;
                                    const s4 = 0;
                                    if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                      instancePath: a2 + "/traits/" + i4 + "/dataId",
                                      schemaPath: "#/properties/traits/items/properties/dataId/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], false;
                                    p2 = 0 === s4;
                                  } else p2 = true;
                                  if (p2) if (void 0 !== t4.value) {
                                    let r6 = t4.value;
                                    const s4 = 0;
                                    if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                      instancePath: a2 + "/traits/" + i4 + "/value",
                                      schemaPath: "#/properties/traits/items/properties/value/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], false;
                                    p2 = 0 === s4;
                                  } else p2 = true;
                                }
                              }
                              if (!(0 === s3)) break;
                            }
                          }
                          n2 = 0 === i3;
                        } else n2 = true;
                        if (n2) if (void 0 !== t2.dropItems) {
                          let r4 = t2.dropItems;
                          const i3 = 0;
                          if (!Array.isArray(r4)) return e2.errors = [{
                            instancePath: a2 + "/dropItems",
                            schemaPath: "#/properties/dropItems/type",
                            keyword: "type",
                            params: { type: "array" },
                            message: "must be array"
                          }], false;
                          {
                            const t3 = r4.length;
                            for (let i4 = 0; i4 < t3; i4++) {
                              let t4 = r4[i4];
                              const s3 = 0;
                              if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                                instancePath: a2 + "/dropItems/" + i4,
                                schemaPath: "#/properties/dropItems/items/type",
                                keyword: "type",
                                params: { type: "object" },
                                message: "must be object"
                              }], false;
                              {
                                let r5;
                                if (void 0 === t4.kind && (r5 = "kind") || void 0 === t4.dataId && (r5 = "dataId") || void 0 === t4.denominator && (r5 = "denominator")) return e2.errors = [{
                                  instancePath: a2 + "/dropItems/" + i4,
                                  schemaPath: "#/properties/dropItems/items/required",
                                  keyword: "required",
                                  params: { missingProperty: r5 },
                                  message: "must have required property '" + r5 + "'"
                                }], false;
                                if (void 0 !== t4.kind) {
                                  let r6 = t4.kind;
                                  const s4 = 0;
                                  if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                    instancePath: a2 + "/dropItems/" + i4 + "/kind",
                                    schemaPath: "#/properties/dropItems/items/properties/kind/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  var c2 = 0 === s4;
                                } else c2 = true;
                                if (c2) {
                                  if (void 0 !== t4.dataId) {
                                    let r6 = t4.dataId;
                                    const s4 = 0;
                                    if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                      instancePath: a2 + "/dropItems/" + i4 + "/dataId",
                                      schemaPath: "#/properties/dropItems/items/properties/dataId/type",
                                      keyword: "type",
                                      params: { type: "integer" },
                                      message: "must be integer"
                                    }], false;
                                    c2 = 0 === s4;
                                  } else c2 = true;
                                  if (c2) {
                                    if (void 0 !== t4.denominator) {
                                      let r6 = t4.denominator;
                                      const s4 = 0;
                                      if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                        instancePath: a2 + "/dropItems/" + i4 + "/denominator",
                                        schemaPath: "#/properties/dropItems/items/properties/denominator/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      if ("number" == typeof r6 && isFinite(r6) && (r6 < 0 || isNaN(r6))) return e2.errors = [{
                                        instancePath: a2 + "/dropItems/" + i4 + "/denominator",
                                        schemaPath: "#/properties/dropItems/items/properties/denominator/minimum",
                                        keyword: "minimum",
                                        params: { comparison: ">=", limit: 0 },
                                        message: "must be >= 0"
                                      }], false;
                                      c2 = 0 === s4;
                                    } else c2 = true;
                                    if (c2) if (void 0 !== t4.rate) {
                                      let r6 = t4.rate;
                                      const s4 = 0;
                                      if ("number" != typeof r6 || !isFinite(r6)) return e2.errors = [{
                                        instancePath: a2 + "/dropItems/" + i4 + "/rate",
                                        schemaPath: "#/properties/dropItems/items/properties/rate/type",
                                        keyword: "type",
                                        params: { type: "number" },
                                        message: "must be number"
                                      }], false;
                                      c2 = 0 === s4;
                                    } else c2 = true;
                                  }
                                }
                              }
                              if (!(0 === s3)) break;
                            }
                          }
                          n2 = 0 === i3;
                        } else n2 = true;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return e2.errors = null, true;
  }
  return Qd = 1, el.exports = e2, el.exports.default = e2, el.exports;
}()), al = (e2) => tl(e2);
var rl, il = { exports: {} };
const sl = _d(function() {
  if (rl) return il.exports;
  function e2(t2, { instancePath: a2 = "", parentData: r2, parentDataProperty: i2, rootData: s2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{
      instancePath: a2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let r3;
      if (void 0 === t2.name && (r3 = "name") || void 0 === t2.id && (r3 = "id") || void 0 === t2.note && (r3 = "note") || void 0 === t2.expParams && (r3 = "expParams") || void 0 === t2.params && (r3 = "params") || void 0 === t2.learnings && (r3 = "learnings") || void 0 === t2.traits && (r3 = "traits")) return e2.errors = [{
        instancePath: a2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: r3 },
        message: "must have required property '" + r3 + "'"
      }], false;
      for (const r4 in t2) if ("name" !== r4 && "id" !== r4 && "note" !== r4 && "expParams" !== r4 && "params" !== r4 && "learnings" !== r4 && "traits" !== r4) return e2.errors = [{
        instancePath: a2,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: r4 },
        message: "must NOT have additional properties"
      }], false;
      if (void 0 !== t2.name) {
        const r4 = 0;
        if ("string" != typeof t2.name) return e2.errors = [{ instancePath: a2 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var n2 = 0 === r4;
      } else n2 = true;
      if (n2) {
        if (void 0 !== t2.id) {
          let r4 = t2.id;
          const i3 = 0;
          if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
            instancePath: a2 + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          if ("number" == typeof r4 && isFinite(r4) && (r4 < 0 || isNaN(r4))) return e2.errors = [{
            instancePath: a2 + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], false;
          n2 = 0 === i3;
        } else n2 = true;
        if (n2) {
          if (void 0 !== t2.note) {
            const r4 = 0;
            if ("string" != typeof t2.note) return e2.errors = [{
              instancePath: a2 + "/note",
              schemaPath: "#/properties/note/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            n2 = 0 === r4;
          } else n2 = true;
          if (n2) {
            if (void 0 !== t2.expParams) {
              let r4 = t2.expParams;
              const i3 = 0;
              if (!Array.isArray(r4)) return e2.errors = [{
                instancePath: a2 + "/expParams",
                schemaPath: "#/properties/expParams/type",
                keyword: "type",
                params: { type: "array" },
                message: "must be array"
              }], false;
              {
                const t3 = r4.length;
                for (let i4 = 0; i4 < t3; i4++) {
                  let t4 = r4[i4];
                  const s3 = 0;
                  if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: a2 + "/expParams/" + i4, schemaPath: "#/properties/expParams/items/type", keyword: "type", params: {
                    type: "integer"
                  }, message: "must be integer" }], false;
                  if (!(0 === s3)) break;
                }
              }
              n2 = 0 === i3;
            } else n2 = true;
            if (n2) {
              if (void 0 !== t2.params) {
                let r4 = t2.params;
                const i3 = 0;
                if (!Array.isArray(r4)) return e2.errors = [{
                  instancePath: a2 + "/params",
                  schemaPath: "#/properties/params/type",
                  keyword: "type",
                  params: { type: "array" },
                  message: "must be array"
                }], false;
                if (r4.length > 8) return e2.errors = [{
                  instancePath: a2 + "/params",
                  schemaPath: "#/properties/params/maxItems",
                  keyword: "maxItems",
                  params: { limit: 8 },
                  message: "must NOT have more than 8 items"
                }], false;
                if (r4.length < 8) return e2.errors = [{
                  instancePath: a2 + "/params",
                  schemaPath: "#/properties/params/minItems",
                  keyword: "minItems",
                  params: { limit: 8 },
                  message: "must NOT have fewer than 8 items"
                }], false;
                {
                  const t3 = r4.length;
                  if (t3 > 0) {
                    let t4 = r4[0];
                    const i4 = 0;
                    if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                      instancePath: a2 + "/params/0",
                      schemaPath: "#/properties/params/items/0/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    var o2 = 0 === i4;
                  }
                  if (o2) {
                    if (t3 > 1) {
                      let t4 = r4[1];
                      const i4 = 0;
                      if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: a2 + "/params/1", schemaPath: "#/properties/params/items/1/type", keyword: "type", params: {
                        type: "integer"
                      }, message: "must be integer" }], false;
                      o2 = 0 === i4;
                    }
                    if (o2) {
                      if (t3 > 2) {
                        let t4 = r4[2];
                        const i4 = 0;
                        if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                          instancePath: a2 + "/params/2",
                          schemaPath: "#/properties/params/items/2/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], false;
                        o2 = 0 === i4;
                      }
                      if (o2) {
                        if (t3 > 3) {
                          let t4 = r4[3];
                          const i4 = 0;
                          if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: a2 + "/params/3", schemaPath: "#/properties/params/items/3/type", keyword: "type", params: {
                            type: "integer"
                          }, message: "must be integer" }], false;
                          o2 = 0 === i4;
                        }
                        if (o2) {
                          if (t3 > 4) {
                            let t4 = r4[4];
                            const i4 = 0;
                            if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                              instancePath: a2 + "/params/4",
                              schemaPath: "#/properties/params/items/4/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            o2 = 0 === i4;
                          }
                          if (o2) {
                            if (t3 > 5) {
                              let t4 = r4[5];
                              const i4 = 0;
                              if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: a2 + "/params/5", schemaPath: "#/properties/params/items/5/type", keyword: "type", params: {
                                type: "integer"
                              }, message: "must be integer" }], false;
                              o2 = 0 === i4;
                            }
                            if (o2) {
                              if (t3 > 6) {
                                let t4 = r4[6];
                                const i4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{
                                  instancePath: a2 + "/params/6",
                                  schemaPath: "#/properties/params/items/6/type",
                                  keyword: "type",
                                  params: { type: "integer" },
                                  message: "must be integer"
                                }], false;
                                o2 = 0 === i4;
                              }
                              if (o2 && t3 > 7) {
                                let t4 = r4[7];
                                const i4 = 0;
                                if ("number" != typeof t4 || t4 % 1 || isNaN(t4) || !isFinite(t4)) return e2.errors = [{ instancePath: a2 + "/params/7", schemaPath: "#/properties/params/items/7/type", keyword: "type", params: {
                                  type: "integer"
                                }, message: "must be integer" }], false;
                                o2 = 0 === i4;
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
                n2 = 0 === i3;
              } else n2 = true;
              if (n2) {
                if (void 0 !== t2.learnings) {
                  let r4 = t2.learnings;
                  const i3 = 0;
                  if (!Array.isArray(r4)) return e2.errors = [{
                    instancePath: a2 + "/learnings",
                    schemaPath: "#/properties/learnings/type",
                    keyword: "type",
                    params: { type: "array" },
                    message: "must be array"
                  }], false;
                  {
                    const t3 = r4.length;
                    for (let i4 = 0; i4 < t3; i4++) {
                      let t4 = r4[i4];
                      const s3 = 0;
                      if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                        instancePath: a2 + "/learnings/" + i4,
                        schemaPath: "#/properties/learnings/items/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], false;
                      {
                        let r5;
                        if (void 0 === t4.level && (r5 = "level") || void 0 === t4.skillId && (r5 = "skillId")) return e2.errors = [{
                          instancePath: a2 + "/learnings/" + i4,
                          schemaPath: "#/properties/learnings/items/required",
                          keyword: "required",
                          params: { missingProperty: r5 },
                          message: "must have required property '" + r5 + "'"
                        }], false;
                        for (const r6 in t4) if ("level" !== r6 && "skillId" !== r6 && "note" !== r6) return e2.errors = [{
                          instancePath: a2 + "/learnings/" + i4,
                          schemaPath: "#/properties/learnings/items/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: r6 },
                          message: "must NOT have additional properties"
                        }], false;
                        if (void 0 !== t4.level) {
                          let r6 = t4.level;
                          const s4 = 0;
                          if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                            instancePath: a2 + "/learnings/" + i4 + "/level",
                            schemaPath: "#/properties/learnings/items/properties/level/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          var m2 = 0 === s4;
                        } else m2 = true;
                        if (m2) {
                          if (void 0 !== t4.skillId) {
                            let r6 = t4.skillId;
                            const s4 = 0;
                            if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                              instancePath: a2 + "/learnings/" + i4 + "/skillId",
                              schemaPath: "#/properties/learnings/items/properties/skillId/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            m2 = 0 === s4;
                          } else m2 = true;
                          if (m2) if (void 0 !== t4.note) {
                            const r6 = 0;
                            if ("string" != typeof t4.note) return e2.errors = [{
                              instancePath: a2 + "/learnings/" + i4 + "/note",
                              schemaPath: "#/properties/learnings/items/properties/note/type",
                              keyword: "type",
                              params: { type: "string" },
                              message: "must be string"
                            }], false;
                            m2 = 0 === r6;
                          } else m2 = true;
                        }
                      }
                      if (!(0 === s3)) break;
                    }
                  }
                  n2 = 0 === i3;
                } else n2 = true;
                if (n2) if (void 0 !== t2.traits) {
                  let r4 = t2.traits;
                  const i3 = 0;
                  if (!Array.isArray(r4)) return e2.errors = [{
                    instancePath: a2 + "/traits",
                    schemaPath: "#/properties/traits/type",
                    keyword: "type",
                    params: { type: "array" },
                    message: "must be array"
                  }], false;
                  {
                    const t3 = r4.length;
                    for (let i4 = 0; i4 < t3; i4++) {
                      let t4 = r4[i4];
                      const s3 = 0;
                      if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                        instancePath: a2 + "/traits/" + i4,
                        schemaPath: "#/properties/traits/items/type",
                        keyword: "type",
                        params: { type: "object" },
                        message: "must be object"
                      }], false;
                      {
                        let r5;
                        if (void 0 === t4.code && (r5 = "code") || void 0 === t4.dataId && (r5 = "dataId") || void 0 === t4.value && (r5 = "value")) return e2.errors = [{
                          instancePath: a2 + "/traits/" + i4,
                          schemaPath: "#/properties/traits/items/required",
                          keyword: "required",
                          params: { missingProperty: r5 },
                          message: "must have required property '" + r5 + "'"
                        }], false;
                        for (const r6 in t4) if ("code" !== r6 && "dataId" !== r6 && "value" !== r6) return e2.errors = [{
                          instancePath: a2 + "/traits/" + i4,
                          schemaPath: "#/properties/traits/items/additionalProperties",
                          keyword: "additionalProperties",
                          params: { additionalProperty: r6 },
                          message: "must NOT have additional properties"
                        }], false;
                        if (void 0 !== t4.code) {
                          let r6 = t4.code;
                          const s4 = 0;
                          if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                            instancePath: a2 + "/traits/" + i4 + "/code",
                            schemaPath: "#/properties/traits/items/properties/code/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          var p2 = 0 === s4;
                        } else p2 = true;
                        if (p2) {
                          if (void 0 !== t4.dataId) {
                            let r6 = t4.dataId;
                            const s4 = 0;
                            if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                              instancePath: a2 + "/traits/" + i4 + "/dataId",
                              schemaPath: "#/properties/traits/items/properties/dataId/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            p2 = 0 === s4;
                          } else p2 = true;
                          if (p2) if (void 0 !== t4.value) {
                            let r6 = t4.value;
                            const s4 = 0;
                            if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                              instancePath: a2 + "/traits/" + i4 + "/value",
                              schemaPath: "#/properties/traits/items/properties/value/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            p2 = 0 === s4;
                          } else p2 = true;
                        }
                      }
                      if (!(0 === s3)) break;
                    }
                  }
                  n2 = 0 === i3;
                } else n2 = true;
              }
            }
          }
        }
      }
    }
    return e2.errors = null, true;
  }
  return rl = 1, il.exports = e2, il.exports.default = e2, il.exports;
}()), nl = (e2) => sl(e2);
var ol, ml = { exports: {} };
const pl = _d(function() {
  if (ol) return ml.exports;
  function e2(t2, { instancePath: a2 = "", parentData: r2, parentDataProperty: i2, rootData: s2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{
      instancePath: a2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let r3;
      if (void 0 === t2.name && (r3 = "name") || void 0 === t2.id && (r3 = "id") || void 0 === t2.iconIndex && (r3 = "iconIndex") || void 0 === t2.message1 && (r3 = "message1") || void 0 === t2.message2 && (r3 = "message2") || void 0 === t2.message3 && (r3 = "message3") || void 0 === t2.message4 && (r3 = "message4") || void 0 === t2.restriction && (r3 = "restriction") || void 0 === t2.priority && (r3 = "priority") || void 0 === t2.motion && (r3 = "motion") || void 0 === t2.overlay && (r3 = "overlay") || void 0 === t2.removeAtBattleEnd && (r3 = "removeAtBattleEnd") || void 0 === t2.removeByDamage && (r3 = "removeByDamage") || void 0 === t2.removeByWalking && (r3 = "removeByWalking") || void 0 === t2.removeByRestriction && (r3 = "removeByRestriction") || void 0 === t2.autoRemovalTiming && (r3 = "autoRemovalTiming") || void 0 === t2.minTurns && (r3 = "minTurns") || void 0 === t2.maxTurns && (r3 = "maxTurns") || void 0 === t2.chanceByDamage && (r3 = "chanceByDamage") || void 0 === t2.stepsToRemove && (r3 = "stepsToRemove") || void 0 === t2.note && (r3 = "note")) return e2.errors = [{
        instancePath: a2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: r3 },
        message: "must have required property '" + r3 + "'"
      }], false;
      if (void 0 !== t2.name) {
        const r4 = 0;
        if ("string" != typeof t2.name) return e2.errors = [{ instancePath: a2 + "/name", schemaPath: "#/properties/name/type", keyword: "type", params: { type: "string" }, message: "must be string" }], false;
        var n2 = 0 === r4;
      } else n2 = true;
      if (n2) {
        if (void 0 !== t2.id) {
          let r4 = t2.id;
          const i3 = 0;
          if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
            instancePath: a2 + "/id",
            schemaPath: "#/properties/id/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          if ("number" == typeof r4 && isFinite(r4) && (r4 < 0 || isNaN(r4))) return e2.errors = [{
            instancePath: a2 + "/id",
            schemaPath: "#/properties/id/minimum",
            keyword: "minimum",
            params: { comparison: ">=", limit: 0 },
            message: "must be >= 0"
          }], false;
          n2 = 0 === i3;
        } else n2 = true;
        if (n2) {
          if (void 0 !== t2.iconIndex) {
            let r4 = t2.iconIndex;
            const i3 = 0;
            if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
              instancePath: a2 + "/iconIndex",
              schemaPath: "#/properties/iconIndex/type",
              keyword: "type",
              params: { type: "integer" },
              message: "must be integer"
            }], false;
            if ("number" == typeof r4 && isFinite(r4) && (r4 < 0 || isNaN(r4))) return e2.errors = [{ instancePath: a2 + "/iconIndex", schemaPath: "#/properties/iconIndex/minimum", keyword: "minimum", params: {
              comparison: ">=",
              limit: 0
            }, message: "must be >= 0" }], false;
            n2 = 0 === i3;
          } else n2 = true;
          if (n2) {
            if (void 0 !== t2.message1) {
              const r4 = 0;
              if ("string" != typeof t2.message1) return e2.errors = [{
                instancePath: a2 + "/message1",
                schemaPath: "#/properties/message1/type",
                keyword: "type",
                params: { type: "string" },
                message: "must be string"
              }], false;
              n2 = 0 === r4;
            } else n2 = true;
            if (n2) {
              if (void 0 !== t2.message2) {
                const r4 = 0;
                if ("string" != typeof t2.message2) return e2.errors = [{ instancePath: a2 + "/message2", schemaPath: "#/properties/message2/type", keyword: "type", params: {
                  type: "string"
                }, message: "must be string" }], false;
                n2 = 0 === r4;
              } else n2 = true;
              if (n2) {
                if (void 0 !== t2.message3) {
                  const r4 = 0;
                  if ("string" != typeof t2.message3) return e2.errors = [{
                    instancePath: a2 + "/message3",
                    schemaPath: "#/properties/message3/type",
                    keyword: "type",
                    params: { type: "string" },
                    message: "must be string"
                  }], false;
                  n2 = 0 === r4;
                } else n2 = true;
                if (n2) {
                  if (void 0 !== t2.message4) {
                    const r4 = 0;
                    if ("string" != typeof t2.message4) return e2.errors = [{
                      instancePath: a2 + "/message4",
                      schemaPath: "#/properties/message4/type",
                      keyword: "type",
                      params: { type: "string" },
                      message: "must be string"
                    }], false;
                    n2 = 0 === r4;
                  } else n2 = true;
                  if (n2) {
                    if (void 0 !== t2.restriction) {
                      let r4 = t2.restriction;
                      const i3 = 0;
                      if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                        instancePath: a2 + "/restriction",
                        schemaPath: "#/properties/restriction/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], false;
                      n2 = 0 === i3;
                    } else n2 = true;
                    if (n2) {
                      if (void 0 !== t2.priority) {
                        let r4 = t2.priority;
                        const i3 = 0;
                        if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                          instancePath: a2 + "/priority",
                          schemaPath: "#/properties/priority/type",
                          keyword: "type",
                          params: { type: "integer" },
                          message: "must be integer"
                        }], false;
                        n2 = 0 === i3;
                      } else n2 = true;
                      if (n2) {
                        if (void 0 !== t2.motion) {
                          let r4 = t2.motion;
                          const i3 = 0;
                          if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                            instancePath: a2 + "/motion",
                            schemaPath: "#/properties/motion/type",
                            keyword: "type",
                            params: { type: "integer" },
                            message: "must be integer"
                          }], false;
                          n2 = 0 === i3;
                        } else n2 = true;
                        if (n2) {
                          if (void 0 !== t2.overlay) {
                            let r4 = t2.overlay;
                            const i3 = 0;
                            if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                              instancePath: a2 + "/overlay",
                              schemaPath: "#/properties/overlay/type",
                              keyword: "type",
                              params: { type: "integer" },
                              message: "must be integer"
                            }], false;
                            n2 = 0 === i3;
                          } else n2 = true;
                          if (n2) {
                            if (void 0 !== t2.removeAtBattleEnd) {
                              const r4 = 0;
                              if ("boolean" != typeof t2.removeAtBattleEnd) return e2.errors = [{
                                instancePath: a2 + "/removeAtBattleEnd",
                                schemaPath: "#/properties/removeAtBattleEnd/type",
                                keyword: "type",
                                params: { type: "boolean" },
                                message: "must be boolean"
                              }], false;
                              n2 = 0 === r4;
                            } else n2 = true;
                            if (n2) {
                              if (void 0 !== t2.removeByDamage) {
                                const r4 = 0;
                                if ("boolean" != typeof t2.removeByDamage) return e2.errors = [{ instancePath: a2 + "/removeByDamage", schemaPath: "#/properties/removeByDamage/type", keyword: "type", params: {
                                  type: "boolean"
                                }, message: "must be boolean" }], false;
                                n2 = 0 === r4;
                              } else n2 = true;
                              if (n2) {
                                if (void 0 !== t2.removeByWalking) {
                                  const r4 = 0;
                                  if ("boolean" != typeof t2.removeByWalking) return e2.errors = [{
                                    instancePath: a2 + "/removeByWalking",
                                    schemaPath: "#/properties/removeByWalking/type",
                                    keyword: "type",
                                    params: { type: "boolean" },
                                    message: "must be boolean"
                                  }], false;
                                  n2 = 0 === r4;
                                } else n2 = true;
                                if (n2) {
                                  if (void 0 !== t2.removeByRestriction) {
                                    const r4 = 0;
                                    if ("boolean" != typeof t2.removeByRestriction) return e2.errors = [{
                                      instancePath: a2 + "/removeByRestriction",
                                      schemaPath: "#/properties/removeByRestriction/type",
                                      keyword: "type",
                                      params: { type: "boolean" },
                                      message: "must be boolean"
                                    }], false;
                                    n2 = 0 === r4;
                                  } else n2 = true;
                                  if (n2) {
                                    if (void 0 !== t2.messageType) {
                                      let r4 = t2.messageType;
                                      const i3 = 0;
                                      if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                                        instancePath: a2 + "/messageType",
                                        schemaPath: "#/properties/messageType/type",
                                        keyword: "type",
                                        params: { type: "integer" },
                                        message: "must be integer"
                                      }], false;
                                      n2 = 0 === i3;
                                    } else n2 = true;
                                    if (n2) {
                                      if (void 0 !== t2.releaseByDamage) {
                                        const r4 = 0;
                                        if ("boolean" != typeof t2.releaseByDamage) return e2.errors = [{
                                          instancePath: a2 + "/releaseByDamage",
                                          schemaPath: "#/properties/releaseByDamage/type",
                                          keyword: "type",
                                          params: { type: "boolean" },
                                          message: "must be boolean"
                                        }], false;
                                        n2 = 0 === r4;
                                      } else n2 = true;
                                      if (n2) {
                                        if (void 0 !== t2.autoRemovalTiming) {
                                          let r4 = t2.autoRemovalTiming;
                                          const i3 = 0;
                                          if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{ instancePath: a2 + "/autoRemovalTiming", schemaPath: "#/properties/autoRemovalTiming/type", keyword: "type", params: {
                                            type: "integer"
                                          }, message: "must be integer" }], false;
                                          n2 = 0 === i3;
                                        } else n2 = true;
                                        if (n2) {
                                          if (void 0 !== t2.minTurns) {
                                            let r4 = t2.minTurns;
                                            const i3 = 0;
                                            if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                                              instancePath: a2 + "/minTurns",
                                              schemaPath: "#/properties/minTurns/type",
                                              keyword: "type",
                                              params: { type: "integer" },
                                              message: "must be integer"
                                            }], false;
                                            n2 = 0 === i3;
                                          } else n2 = true;
                                          if (n2) {
                                            if (void 0 !== t2.maxTurns) {
                                              let r4 = t2.maxTurns;
                                              const i3 = 0;
                                              if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                                                instancePath: a2 + "/maxTurns",
                                                schemaPath: "#/properties/maxTurns/type",
                                                keyword: "type",
                                                params: { type: "integer" },
                                                message: "must be integer"
                                              }], false;
                                              n2 = 0 === i3;
                                            } else n2 = true;
                                            if (n2) {
                                              if (void 0 !== t2.chanceByDamage) {
                                                let r4 = t2.chanceByDamage;
                                                const i3 = 0;
                                                if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                                                  instancePath: a2 + "/chanceByDamage",
                                                  schemaPath: "#/properties/chanceByDamage/type",
                                                  keyword: "type",
                                                  params: { type: "integer" },
                                                  message: "must be integer"
                                                }], false;
                                                n2 = 0 === i3;
                                              } else n2 = true;
                                              if (n2) {
                                                if (void 0 !== t2.stepsToRemove) {
                                                  let r4 = t2.stepsToRemove;
                                                  const i3 = 0;
                                                  if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                                                    instancePath: a2 + "/stepsToRemove",
                                                    schemaPath: "#/properties/stepsToRemove/type",
                                                    keyword: "type",
                                                    params: { type: "integer" },
                                                    message: "must be integer"
                                                  }], false;
                                                  n2 = 0 === i3;
                                                } else n2 = true;
                                                if (n2) {
                                                  if (void 0 !== t2.note) {
                                                    const r4 = 0;
                                                    if ("string" != typeof t2.note) return e2.errors = [{
                                                      instancePath: a2 + "/note",
                                                      schemaPath: "#/properties/note/type",
                                                      keyword: "type",
                                                      params: { type: "string" },
                                                      message: "must be string"
                                                    }], false;
                                                    n2 = 0 === r4;
                                                  } else n2 = true;
                                                  if (n2) if (void 0 !== t2.traits) {
                                                    let r4 = t2.traits;
                                                    const i3 = 0;
                                                    if (!Array.isArray(r4)) return e2.errors = [{
                                                      instancePath: a2 + "/traits",
                                                      schemaPath: "#/properties/traits/type",
                                                      keyword: "type",
                                                      params: { type: "array" },
                                                      message: "must be array"
                                                    }], false;
                                                    {
                                                      const t3 = r4.length;
                                                      for (let i4 = 0; i4 < t3; i4++) {
                                                        let t4 = r4[i4];
                                                        const s3 = 0;
                                                        if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{
                                                          instancePath: a2 + "/traits/" + i4,
                                                          schemaPath: "#/properties/traits/items/type",
                                                          keyword: "type",
                                                          params: { type: "object" },
                                                          message: "must be object"
                                                        }], false;
                                                        {
                                                          let r5;
                                                          if (void 0 === t4.code && (r5 = "code") || void 0 === t4.dataId && (r5 = "dataId") || void 0 === t4.value && (r5 = "value")) return e2.errors = [{
                                                            instancePath: a2 + "/traits/" + i4,
                                                            schemaPath: "#/properties/traits/items/required",
                                                            keyword: "required",
                                                            params: { missingProperty: r5 },
                                                            message: "must have required property '" + r5 + "'"
                                                          }], false;
                                                          if (void 0 !== t4.code) {
                                                            let r6 = t4.code;
                                                            const s4 = 0;
                                                            if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                                              instancePath: a2 + "/traits/" + i4 + "/code",
                                                              schemaPath: "#/properties/traits/items/properties/code/type",
                                                              keyword: "type",
                                                              params: { type: "integer" },
                                                              message: "must be integer"
                                                            }], false;
                                                            var o2 = 0 === s4;
                                                          } else o2 = true;
                                                          if (o2) {
                                                            if (void 0 !== t4.dataId) {
                                                              let r6 = t4.dataId;
                                                              const s4 = 0;
                                                              if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                                                instancePath: a2 + "/traits/" + i4 + "/dataId",
                                                                schemaPath: "#/properties/traits/items/properties/dataId/type",
                                                                keyword: "type",
                                                                params: { type: "integer" },
                                                                message: "must be integer"
                                                              }], false;
                                                              o2 = 0 === s4;
                                                            } else o2 = true;
                                                            if (o2) if (void 0 !== t4.value) {
                                                              let r6 = t4.value;
                                                              const s4 = 0;
                                                              if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                                                instancePath: a2 + "/traits/" + i4 + "/value",
                                                                schemaPath: "#/properties/traits/items/properties/value/type",
                                                                keyword: "type",
                                                                params: { type: "integer" },
                                                                message: "must be integer"
                                                              }], false;
                                                              o2 = 0 === s4;
                                                            } else o2 = true;
                                                          }
                                                        }
                                                        if (!(0 === s3)) break;
                                                      }
                                                    }
                                                    n2 = 0 === i3;
                                                  } else n2 = true;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    return e2.errors = null, true;
  }
  return ol = 1, ml.exports = e2, ml.exports.default = e2, ml.exports;
}()), cl = (e2) => pl(e2);
export {
  at as ABORT_BATTLE,
  vi as AUTHOR_RMMZ,
  je as BATTLE_PROCESSING,
  Ge as CHANGE_ACTOR_IMAGES,
  z as CHANGE_ARMORS,
  Re as CHANGE_BATTLE_BACKGROUND,
  L as CHANGE_BATTLE_BGM,
  We as CHANGE_CLASS,
  K as CHANGE_DEFEAT_ME,
  G as CHANGE_ENCOUNTER,
  _e as CHANGE_ENEMY_HP,
  $e as CHANGE_ENEMY_MP,
  Ue as CHANGE_ENEMY_STATE,
  it as CHANGE_ENEMY_TP,
  Ve as CHANGE_EXP,
  X as CHANGE_FORMATION_ACCESS,
  C as CHANGE_GOLD,
  Ee as CHANGE_HP,
  M as CHANGE_ITEMS,
  W as CHANGE_MENU_ACCESS,
  ze as CHANGE_MP,
  Oe as CHANGE_NAME,
  Ye as CHANGE_NICKNAME,
  Fe as CHANGE_PARALLAX,
  H as CHANGE_PARTY_MEMBER,
  se as CHANGE_PLAYER_FOLLOWERS,
  Ke as CHANGE_PROFILE,
  O as CHANGE_SAVE_ACCESS,
  qe as CHANGE_TILESET,
  He as CHANGE_TP,
  te as CHANGE_TRANSPARENCY,
  _ as CHANGE_VEHICLE_BGM,
  Xe as CHANGE_VEHICLE_IMAGE,
  V as CHANGE_VICTORY_ME,
  E as CHANGE_WEAPONS,
  Y as CHANGE_WINDOW_COLOR,
  dr as COLLAPS_BOSS,
  lr as COLLAPS_INSTANT,
  yr as COLLAPS_NONE,
  cr as COLLAPS_NORMAL,
  P as COMMENT_BODY,
  I as COMMENT_HEAD,
  A as COMMON_EVENT,
  x as CONDITIONAL_BRANCH,
  N as CONDITIONAL_BRANCH_ELSE,
  j as CONTROL_SELF_SWITCH,
  F as CONTROL_SWITCHES,
  B as CONTROL_TIMER,
  D as CONTROL_VARIABLES,
  Aa as DEFAULT_DAMAGE_LABELS,
  Un as DEFAULT_GLOBAL_LABELS,
  qs as DEFAULT_ITEM_LABELS,
  Rs as DEFAULT_SKILL_LABELS,
  Yo as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Ko as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Fs as DEFAULT_USABLE_ITEM_LABELS,
  Qi as EFFECT_ADD_BUFF,
  es as EFFECT_ADD_DEBUFF,
  Zi as EFFECT_ADD_STATE,
  ns as EFFECT_COMMON_EVENT,
  Ui as EFFECT_GAIN_TP,
  is as EFFECT_GROW,
  ss as EFFECT_LEARN_SKILL,
  _i as EFFECT_RECOVER_HP,
  $i as EFFECT_RECOVER_MP,
  ts as EFFECT_REMOVE_BUFF,
  as as EFFECT_REMOVE_DEBUFF,
  Ji as EFFECT_REMOVE_STATE,
  rs as EFFECT_SPECIAL,
  Je as ENEMY_APPEAR,
  Ze as ENEMY_RECOVER_ALL,
  Qe as ENEMY_TRANSFORM,
  ie as ERASE_EVENT,
  he as ERASE_PICTURE,
  S as EXIT_EVENT_PROCESSING,
  vr as EXTRA_PARAM_CEV,
  kr as EXTRA_PARAM_CNT,
  br as EXTRA_PARAM_CRI,
  hr as EXTRA_PARAM_EVA,
  fr as EXTRA_PARAM_HIT,
  xr as EXTRA_PARAM_HRG,
  Ir as EXTRA_PARAM_MEV,
  Pr as EXTRA_PARAM_MRF,
  Nr as EXTRA_PARAM_MRG,
  wr as EXTRA_PARAM_TRG,
  me as FADEIN_SCREEN,
  Ie as FADEOUT_BGM,
  Ne as FADEOUT_BGS,
  oe as FADEOUT_SCREEN,
  Ec as FILENAME_ACTORS,
  Yc as FILENAME_ANIMATIONS,
  Oc as FILENAME_ARMORS,
  zc as FILENAME_CLASSES,
  _c as FILENAME_COMMON_EVENTS,
  Wc as FILENAME_ENEMIES,
  Lc as FILENAME_ITEMS,
  $c as FILENAME_MAP_INFOS,
  Hc as FILENAME_SKILLS,
  Xc as FILENAME_STATES,
  Mc as FILENAME_SYSTEM,
  Kc as FILENAME_TILESET,
  Gc as FILENAME_TROOPS,
  Vc as FILENAME_WEAPONS,
  oi as FLAG_ID_AUTO_BATTLE,
  mi as FLAG_ID_GUARD,
  ci as FLAG_ID_PRESERVE_TP,
  pi as FLAG_ID_SUBSTITUTE,
  ce as FLASH_SCREEN,
  Jc as FOLDER_AUDIO,
  vc as FOLDER_AUDIO_BGM,
  kc as FOLDER_AUDIO_BGS,
  Pc as FOLDER_AUDIO_ME,
  Ic as FOLDER_AUDIO_SE,
  Uc as FOLDER_DATA,
  Zc as FOLDER_IMG,
  xc as FOLDER_IMG_BATTLEBACK1,
  Nc as FOLDER_IMG_BATTLEBACK2,
  wc as FOLDER_IMG_CHACTERS,
  Tc as FOLDER_IMG_ENEMIES,
  Sc as FOLDER_IMG_FACES,
  Ac as FOLDER_IMG_PARALLACES,
  qc as FOLDER_IMG_PICTURES,
  Rc as FOLDER_IMG_SV_ACTORS,
  Fc as FOLDER_IMG_SV_ENEMIES,
  Dc as FOLDER_IMG_SYSTEM,
  jc as FOLDER_IMG_TILESETS,
  Bc as FOLDER_IMG_TITLES1,
  Cc as FOLDER_IMG_TITLES2,
  Qc as FOLDER_JS,
  tt as FORCE_ACTION,
  nt as GAME_OVER,
  ne as GATHER_FOLLOWERS,
  De as GET_LOCATION_INFO,
  ee as GET_ONOFF_VEHICLE,
  Xi as HITTYPE_CERTAIN,
  Ki as HITTYPE_MAGICAL,
  Yi as HITTYPE_PHYSICAL,
  f as INPUT_NUMBER,
  q as LABEL,
  Gi as LABELS_DATA_WEAPON,
  _o as LABELS_SYSTEM_BATTLER_PARAMS,
  $o as LABELS_SYSTEM_GAME_COMMANDS,
  R as LABEL_JUMP,
  Sa as LABEL_SET_DATA,
  Ts as LABEL_SET_ITEM_EFFECT,
  hi as LABEL_SET_TRAIT,
  w as LOOP,
  T as LOOP_BREAK,
  sn as MODULE_DATA,
  ue as MOVE_PICTURE,
  Me as NAME_INPUT_PROCESSING,
  d as NO_OPERATION,
  rt as OPEN_MENU_SCREEN,
  st as OPEN_SAVE_SCREEN,
  Ip as OPERAND_CONSTANT,
  xp as OPERAND_GAMEDATA,
  kp as OPERAND_RANDOM,
  Np as OPERAND_SCRIPT,
  Pp as OPERAND_VARIABLE,
  ti as PARTY_ABILITY_CANCEL_SURPRISE,
  ii as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Qr as PARTY_ABILITY_ENCOUNTER_HALF,
  ei as PARTY_ABILITY_ENCOUNTER_NONE,
  ri as PARTY_ABILITY_GOLD_DOUBLE,
  ai as PARTY_ABILITY_RAISE_PREEMPTIVE,
  ve as PLAY_BGM,
  xe as PLAY_BGS,
  we as PLAY_ME,
  Ae as PLAY_MOVIE,
  Te as PLAY_SE,
  ct as PLUGIN_COMMAND_MV,
  dt as PLUGIN_COMMAND_MZ,
  Le as RECOVER_ALL,
  Cr as REGULAR_PARAM_AGI,
  Fr as REGULAR_PARAM_ATK,
  Dr as REGULAR_PARAM_DEF,
  Mr as REGULAR_PARAM_LUK,
  jr as REGULAR_PARAM_MATK,
  qr as REGULAR_PARAM_MAX_HP,
  Rr as REGULAR_PARAM_MAX_MP,
  Br as REGULAR_PARAM_MDEF,
  ke as RESUME_BGM,
  ot as RETURN_TO_TITLE_SCREEN,
  ge as ROTATE_PICTURE,
  aa as ROUTE_CHANGE_BLEND_MODE,
  Wt as ROUTE_CHANGE_FREQ,
  ea as ROUTE_CHANGE_IMAGE,
  ta as ROUTE_CHANGE_OPACITY,
  Ot as ROUTE_CHANGE_SPEED,
  $t as ROUTE_DIR_FIX_OFF,
  _t as ROUTE_DIR_FIX_ON,
  yt as ROUTE_END,
  St as ROUTE_JUMP,
  Nt as ROUTE_MOVE_AWAY,
  Tt as ROUTE_MOVE_BACKWARD,
  ut as ROUTE_MOVE_DOWN,
  wt as ROUTE_MOVE_FORWARD,
  gt as ROUTE_MOVE_LEFT,
  bt as ROUTE_MOVE_LOWER_L,
  vt as ROUTE_MOVE_LOWER_R,
  kt as ROUTE_MOVE_RANDOM,
  ft as ROUTE_MOVE_RIGHT,
  xt as ROUTE_MOVE_TOWARD,
  ht as ROUTE_MOVE_UP,
  It as ROUTE_MOVE_UPPER_L,
  Pt as ROUTE_MOVE_UPPER_R,
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
  Ct as ROUTE_TURN_180D,
  Bt as ROUTE_TURN_90D_L,
  jt as ROUTE_TURN_90D_R,
  Mt as ROUTE_TURN_90D_R_L,
  Ht as ROUTE_TURN_AWAY,
  qt as ROUTE_TURN_DOWN,
  Rt as ROUTE_TURN_LEFT,
  Et as ROUTE_TURN_RANDOM,
  Ft as ROUTE_TURN_RIGHT,
  zt as ROUTE_TURN_TOWARD,
  Dt as ROUTE_TURN_UP,
  At as ROUTE_WAIT,
  Xt as ROUTE_WALK_ANIME_OFF,
  Gt as ROUTE_WALK_ANIME_ON,
  Pe as SAVE_BGM,
  Ea as SCHEMA_DATA_STATE,
  mt as SCRIPT_EVAL,
  pt as SCRIPT_EVAL_BODY,
  J as SCROLL_MAP,
  h as SELECT_ITEM,
  Z as SET_EVENT_LOCATION,
  Q as SET_MOVEMENT_ROUTE,
  U as SET_VEHICLE_LOCATION,
  be as SET_WEATHER_EFFECT,
  de as SHAKE_SCREEN,
  Be as SHOP_PROCESSING,
  Ce as SHOP_PROCESSING_BODY,
  ae as SHOW_ANIMATION,
  re as SHOW_BALLOON_ICON,
  et as SHOW_BATTLE_ANIMATION,
  u as SHOW_CHOICES,
  g as SHOW_CHOICES_ITEM,
  l as SHOW_MESSAGE,
  y as SHOW_MESSAGE_BODY,
  ye as SHOW_PICTURE,
  b as SHOW_SCROLLING_TEXT,
  v as SHOW_SCROLLING_TEXT_BODY,
  k as SKIP,
  Ss as SPECIAL_EFFECT_ESCAPE,
  $r as SPECIAL_PARAM_EXR,
  _r as SPECIAL_PARAM_FDR,
  Vr as SPECIAL_PARAM_GRD,
  Gr as SPECIAL_PARAM_MCR,
  Kr as SPECIAL_PARAM_MDR,
  Yr as SPECIAL_PARAM_PDR,
  Wr as SPECIAL_PARAM_PHA,
  Or as SPECIAL_PARAM_REC,
  Xr as SPECIAL_PARAM_TCR,
  Lr as SPECIAL_PARAM_TGR,
  Ii as SRC_COLOR,
  nn as SRC_DATA_ACTOR,
  yn as SRC_DATA_ARMOR,
  un as SRC_DATA_CLASS,
  gn as SRC_DATA_COMMON_EVNET,
  mn as SRC_DATA_ENEMY,
  dn as SRC_DATA_ITEMS,
  on as SRC_DATA_MAP,
  cn as SRC_DATA_SKILL,
  pn as SRC_DATA_STATE,
  fn as SRC_DATA_TROOP,
  ln as SRC_DATA_WEAPON,
  Se as STOP_SE,
  fe as TINT_PICTURE,
  pe as TINT_SCREEN,
  nr as TRAIT_ACTION_PLUS,
  Ya as TRAIT_ATTACK_ELEMENT,
  Ua as TRAIT_ATTACK_SKILL,
  _a as TRAIT_ATTACK_SPEED,
  Ka as TRAIT_ATTACK_STATE,
  $a as TRAIT_ATTACK_TIMES,
  mr as TRAIT_COLLAPSE_TYPE,
  La as TRAIT_DEBUFF_RATE,
  Ha as TRAIT_ELEMENT_RATE,
  ar as TRAIT_EQUIP_ARMOR_TYPE,
  rr as TRAIT_EQUIP_LOCK,
  ir as TRAIT_EQUIP_SEAL,
  tr as TRAIT_EQUIP_WEAPON_TYPE,
  Wa as TRAIT_PARAM,
  pr as TRAIT_PARTY_ABILITY,
  Qa as TRAIT_SKILL_ADD,
  er as TRAIT_SKILL_SEAL,
  Za as TRAIT_SKILL_TYPE_ADD,
  Ja as TRAIT_SKILL_TYPE_SEAL,
  sr as TRAIT_SLOT_TYPE,
  Xa as TRAIT_SPARAM,
  or as TRAIT_SPECIAL_FLAG,
  Va as TRAIT_STATE_RATE,
  Oa as TRAIT_STATE_RESIST,
  Ga as TRAIT_XPARAM,
  $ as TRANSFER_PLAYER,
  le as WAIT,
  Hi as applyFormatRule,
  Rm as buildReferenceItemSources,
  lp as cloneChoices,
  Mp as cloneEventCommand,
  Cp as cloneParameters,
  gr as collapsOptionsToArray,
  wi as compileFormatRule,
  Dm as compileItemEffectDisplayData,
  Fm as compileTraitDisplayData,
  Qm as convertCommentArrayToObject,
  i as createActorControlChars,
  t as createControlCharFormat,
  lt as createEventCommand,
  Us as createNoteEntity,
  s as createSystemVariableControlChars,
  ha as defineGameDataSources,
  Fo as defineSystemItems,
  ur as defineTraitCollapseType,
  Tr as defineTraitExtraParam,
  bi as defineTraitItems,
  si as defineTraitPartyAbility,
  Er as defineTraitRegularParam,
  di as defineTraitSpecialFlag,
  Ur as defineTraitSpecialParam,
  Ri as detectFormatErrors,
  jm as domainNames,
  Ar as extraParamName,
  Sr as extraParamsToArray,
  As as formatItemEffectText,
  Oi as formatTraitText,
  Km as fromArrayCommonEvent,
  $m as fromArrayControlSwitches,
  ip as fromArrayInputNumber,
  pp as fromArraySetupChoice,
  op as fromArraySetupChoiceItem,
  up as fromArrayShowMessageHeader,
  a as fromStringArray,
  Bp as getActorValue,
  lo as getArmorCategoryEnabled,
  qo as getArmorTypes,
  r as getControlChars,
  wo as getElementTypes,
  jp as getEnemyValue,
  so as getEquipCommandEnabled,
  To as getEquipTypes,
  oo as getFormationCommandEnabled,
  po as getItemCategoryEnabled,
  ro as getItemCommandEnabled,
  yo as getKeyItemCategoryEnabled,
  an as getNoteValue,
  Oo as getParamNames,
  mo as getSaveCommandEnabled,
  io as getSkillCommandEnabled,
  So as getSkillTypes,
  no as getStatusCommandEnabled,
  Ro as getSwitches,
  No as getVariableNames,
  co as getWeaponCategoryEnabled,
  Ao as getWeaponTypes,
  zp as isCloneableCommand,
  Xp as isCommandAudio,
  Vp as isCommandChangeActorText,
  cc as isCommandChangeBattleBgm,
  lc as isCommandChangeDefeatMe,
  dc as isCommandChangeVictoryMe,
  fc as isCommandCommentBody,
  gc as isCommandCommentHeader,
  Zp as isCommandCommonEvent,
  rc as isCommandInputNumber,
  Kp as isCommandNonParam,
  nc as isCommandPlayBgm,
  oc as isCommandPlayBgs,
  mc as isCommandPlayMe,
  pc as isCommandPlaySe,
  bc as isCommandScriptBody,
  hc as isCommandScriptHeader,
  Wp as isCommandScrollTextHead,
  tc as isCommandShowChoiceItem,
  Qp as isCommandShowChoices,
  sc as isCommandShowMessage,
  yc as isCommandShowMessageBody,
  uc as isCommandShowScrollingTextBody,
  $p as isCommandTextBody,
  Jd as isDataActor,
  Ks as isDataArmor,
  nl as isDataClass,
  al as isDataEnemy,
  Ws as isDataItem,
  fa as isDataMap,
  ga as isDataMapInfo,
  Xs as isDataSkill,
  cl as isDataState,
  bm as isDataSystem,
  $s as isDataWeapon,
  Qn as isValidNumber,
  Zn as labelsRegistry,
  Ra as makeActorData,
  Da as makeArmorData,
  Em as makeAudioCommand,
  eo as makeAudioFileParams,
  vo as makeBooleanOptions,
  ja as makeClassData,
  zm as makeCommandAudioAny,
  Bm as makeCommandChangeActorName,
  Cm as makeCommandChangeActorNickName,
  Mm as makeCommandChangeActorProfile,
  Wm as makeCommandChangeBattleBGM,
  Xm as makeCommandChangeDefeatME,
  Gm as makeCommandChangeVictoryME,
  tp as makeCommandCommentBody,
  ep as makeCommandCommentHeader,
  Ym as makeCommandCommonEvent,
  Zm as makeCommandControlSwitches,
  sp as makeCommandInputNumber,
  Hm as makeCommandPlayBGM,
  Lm as makeCommandPlayBGS,
  Vm as makeCommandPlayME,
  Om as makeCommandPlaySE,
  vp as makeCommandScriptArray,
  bp as makeCommandScriptBody,
  hp as makeCommandScriptHeader,
  dp as makeCommandSetupChoice,
  np as makeCommandShowChoiceItem,
  yp as makeCommandShowMessage,
  fp as makeCommandShowMessageBody,
  Jm as makeCommentArray,
  ap as makeCommentCommandArray,
  n as makeCommonEventData,
  qa as makeDamage,
  Ho as makeDataNames,
  Ba as makeDropItem,
  Xo as makeEditorSetting,
  Ca as makeEnemyAction,
  Ma as makeEnemyData,
  c as makeEventPageCondition,
  ko as makeGameInitial,
  uo as makeItemCategories,
  go as makeItemCategoriesFromArray,
  Ds as makeItemData,
  ma as makeMapData,
  sa as makeMapEvent,
  na as makeMapEventIamge,
  oa as makeMapEventPage,
  pa as makeMapInfoData,
  fo as makeMenuCommandsEnabled,
  ho as makeMenuCommandsEnabledFromArray,
  Vo as makeParamNamesArray,
  Zs as makeRegex,
  js as makeSkillData,
  to as makeSoundsArray,
  ao as makeSoundsObject,
  za as makeStateData,
  Jn as makeSystemAdvanced,
  Nm as makeSystemData,
  Wo as makeTitleCommandWindow,
  o as makeTroopData,
  p as makeTroopEventConditions,
  m as makeTroopMember,
  Go as makeVehicleData,
  Wi as makeWeaponData,
  Bi as mergeItemsSource,
  Fa as normalizeDataActor,
  ni as partyAbilityToArray,
  Yd as pluginSourceToJSON,
  Qs as readNote,
  Js as readNoteObject,
  Hr as regularParamName,
  zr as regularParamsToArray,
  tn as replaceNote,
  os as resolveItemEffectLabels,
  hn as resolveTraitLabels,
  rn as setNoteValue,
  li as specialFlagToArray,
  Jr as specialParamName,
  Zr as specialParamsToArray,
  Kd as structToJSONSchema,
  _m as toArrayCommonEvent,
  Um as toArrayControlSwitches,
  rp as toArrayInputNumber,
  Fp as toArrayOperandActorStatus,
  Tp as toArrayOperandConstant,
  Dp as toArrayOperandEnemyStatus,
  Rp as toArrayOperandItemData,
  Ap as toArrayOperandRandom,
  qp as toArrayOperandScript,
  Sp as toArrayOperandVariable,
  cp as toArraySetupChoice,
  mp as toArraySetupChoiceItem,
  gp as toArrayShowMessageHeader
};
//# sourceMappingURL=rpgTypes.es.js.map
