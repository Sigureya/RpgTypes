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
}), d = 0, l = 101, u = 401, y = 102, g = 402, f = 103, h = 104, b = 105, v = 405, I = 108, k = 408, P = 109, x = 111, N = 411, w = 112, T = 113, S = 115, q = 117, A = 118, R = 119, F = 121, j = 122, D = 123, C = 124, M = 125, z = 126, E = 127, L = 128, H = 129, B = 132, V = 133, O = 134, W = 135, G = 136, X = 137, Y = 138, K = 139, _ = 140, $ = 201, U = 202, Z = 203, J = 204, Q = 205, ee = 206, te = 211, ae = 212, re = 213, ie = 214, se = 216, ne = 217, oe = 221, me = 222, pe = 223, ce = 224, de = 225, le = 230, ue = 231, ye = 232, ge = 233, fe = 234, he = 235, be = 236, ve = 241, Ie = 242, ke = 243, Pe = 244, xe = 245, Ne = 246, we = 249, Te = 250, Se = 251, qe = 261, Ae = 282, Re = 283, Fe = 284, je = 285, De = 301, Ce = 302, Me = 605, ze = 303, Ee = 311, Le = 312, He = 313, Be = 314, Ve = 315, Oe = 320, We = 321, Ge = 322, Xe = 323, Ye = 324, Ke = 325, _e = 331, $e = 332, Ue = 333, Ze = 334, Je = 335, Qe = 336, et = 337, tt = 339, at = 340, rt = 351, it = 342, st = 352, nt = 353, ot = 354, mt = 355, pt = 655, ct = 356, dt = 357, lt = (e2, t2, a2 = 0) => ({
  code: e2,
  indent: a2,
  parameters: t2
}), ut = 0, yt = 1, gt = 2, ft = 3, ht = 4, bt = 5, vt = 6, It = 7, kt = 8, Pt = 9, xt = 10, Nt = 11, wt = 12, Tt = 13, St = 14, qt = 15, At = 16, Rt = 17, Ft = 18, jt = 19, Dt = 20, Ct = 21, Mt = 22, zt = 23, Et = 24, Lt = 25, Ht = 26, Bt = 27, Vt = 28, Ot = 29, Wt = 30, Gt = 31, Xt = 32, Yt = 33, Kt = 34, _t = 35, $t = 36, Ut = 37, Zt = 38, Jt = 39, Qt = 40, ea = 41, ta = 42, aa = 43, ra = 44, ia = 45, sa = () => ({
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
}, la = new e({ strict: true }), ua = la.compile({
  type: "object",
  required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: {
    type: "integer"
  }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } }
}), ya = la.compile(da), ga = (e2) => ua(e2), fa = (e2) => ya(e2), ha = (e2, t2) => [ba(e2.skills, t2), va(e2.actors, t2), Ia(e2.states, t2), ka(e2.armors, t2), Pa(e2.classes, t2), xa(e2.enemies, t2), Na(e2.items, t2), wa(e2.weapons, t2), Ta(e2.commonEvents, t2)], ba = (e2, t2) => ({
  label: t2.skill.title,
  items: e2,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), va = (e2, t2) => ({
  items: e2,
  label: t2.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), Ia = (e2, t2) => ({ items: e2, label: t2.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), ka = (e2, t2) => ({ items: e2, label: t2.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), Pa = (e2, t2) => ({ items: e2, label: t2.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), xa = (e2, t2) => ({ items: e2, label: t2.enemy.title, source: {
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
}, qa = {
  title: "ダメージ",
  options: {}
}, Aa = (e2 = {}) => ({ type: e2.type ?? 0, elementId: e2.elementId ?? 0, formula: e2.formula ?? "", variance: e2.variance ?? 0, critical: e2.critical ?? false }), Ra = (e2 = {}) => ({
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
}), ja = (e2 = {}) => ({
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
}), Da = (e2 = {}) => ({ name: e2.name ?? "", id: e2.id ?? 0, traits: [], note: e2.note ?? "", params: [0, 0, 0, 0, 0, 0, 0, 0], learnings: e2.learnings ?? [], expParams: e2.expParams ?? [] }), Ca = (e2 = {}) => ({
  dataId: e2.dataId ?? 0,
  denominator: e2.denominator ?? 0,
  kind: e2.kind ?? 0
}), Ma = (e2 = {}) => ({
  conditionParam1: e2.conditionParam1 ?? 0,
  conditionParam2: e2.conditionParam2 ?? 0,
  conditionType: e2.conditionType ?? 0,
  rating: e2.rating ?? 0,
  skillId: e2.skillId ?? 0
}), za = (e2 = {}) => {
  var _a2;
  return {
    name: e2.name ?? "",
    id: e2.id ?? 0,
    battlerName: e2.battlerName ?? "",
    battlerHue: e2.battlerHue ?? 0,
    dropItems: ((_a2 = e2.dropItems) == null ? void 0 : _a2.map(() => Ca())) ?? [],
    exp: e2.exp ?? 0,
    gold: e2.gold ?? 0,
    traits: [],
    note: e2.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, Ea = (e2 = {}) => ({
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
}), La = 11, Ha = 12, Ba = 13, Va = 14, Oa = 21, Wa = 22, Ga = 23, Xa = 31, Ya = 32, Ka = 33, _a = 34, $a = 35, Ua = 41, Za = 42, Ja = 43, Qa = 44, er = 51, tr = 52, ar = 53, rr = 54, ir = 55, sr = 61, nr = 62, or = 63, mr = 64, pr = 0, cr = 1, dr = 2, lr = 3, ur = (e2, t2) => ({
  items: yr(e2.options, t2),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), yr = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, { id: 2, name: e2.instantCollaps }, {
  id: 3,
  name: e2.noneCollaps
}], gr = 0, fr = 1, hr = 2, br = 3, vr = 4, Ir = 5, kr = 6, Pr = 7, xr = 8, Nr = 9, wr = (e2) => ({
  items: Tr(e2.options),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), Tr = (e2) => [{ id: 0, name: e2.hitRate }, { id: 1, name: e2.evasionRate }, { id: 2, name: e2.criticalRate }, { id: 3, name: e2.criticalEvasionRate }, { id: 4, name: e2.magicEvasionRate }, {
  id: 5,
  name: e2.magicReflectionRate
}, { id: 6, name: e2.counterAttackRate }, { id: 7, name: e2.hpRegenerationRate }, { id: 8, name: e2.mpRegenerationRate }, { id: 9, name: e2.tpRegenerationRate }], Sr = (e2, t2) => {
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
}, qr = 0, Ar = 1, Rr = 2, Fr = 3, jr = 4, Dr = 5, Cr = 6, Mr = 7, zr = (e2) => ({ items: Er(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "params" } }), Er = (e2) => [{
  id: 0,
  name: e2.maxHp
}, { id: 1, name: e2.maxMp }, { id: 2, name: e2.atk }, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, { id: 5, name: e2.mdef }, { id: 6, name: e2.agi }, { id: 7, name: e2.luk }], Lr = (e2, t2) => {
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
}, Hr = 0, Br = 1, Vr = 2, Or = 3, Wr = 4, Gr = 5, Xr = 6, Yr = 7, Kr = 8, _r = 9, $r = (e2) => ({ items: Ur(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), Ur = (e2) => [{
  id: 0,
  name: e2.targetRate
}, { id: 1, name: e2.guardEffectRate }, { id: 2, name: e2.recoveryEffectRate }, { id: 3, name: e2.pharmacology }, { id: 4, name: e2.mpCostRate }, { id: 5, name: e2.tpChargeRate }, {
  id: 6,
  name: e2.physicalDamageRate
}, { id: 7, name: e2.magicDamageRate }, { id: 8, name: e2.floorDamageRate }, { id: 9, name: e2.experienceRate }], Zr = (e2, t2) => {
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
}, Jr = 0, Qr = 1, ei = 2, ti = 3, ai = 4, ri = 5, ii = (e2) => ({
  items: si(e2.options),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), si = (e2) => [{ id: 0, name: e2.encounterHalf }, { id: 1, name: e2.encounterNone }, { id: 2, name: e2.cancelSurprise }, {
  id: 3,
  name: e2.raisePreemptive
}, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], ni = 0, oi = 1, mi = 2, pi = 3, ci = (e2) => ({ items: di(e2.options), label: e2.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), di = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
  id: 3,
  name: e2.preventEscape
}], li = "{name}", ui = "{name} * {value}%", yi = "{name} + {value}%", gi = "{value}", fi = {
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
    extraParam: { title: "追加能力値", format: yi, options: {
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
      format: li,
      options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
    },
    collaps: { title: "消滅エフェクト", format: li, options: {
      bossCollaps: "ボス崩壊",
      instantCollaps: "即時崩壊",
      noneCollaps: "崩壊なし"
    } },
    partyAbility: { title: "パーティ能力", format: li, options: {
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
      format: li
    },
    attackElement: { title: "攻撃属性", format: li },
    attackState: { title: "攻撃ステート", format: yi },
    attackSpeed: { title: "攻撃速度補正", format: gi },
    attackTimes: {
      title: "攻撃追加回数",
      format: gi
    },
    actionPlus: { title: "行動追加", format: ui },
    attackSkill: { title: "攻撃スキル", format: li },
    equipWeaponType: { title: "装備武器タイプ", format: li },
    equipArmorType: { title: "装備防具タイプ", format: li },
    equipLock: {
      title: "装備固定",
      format: li
    },
    equipSeal: { title: "装備封印", format: li },
    slotType: { title: "スロットタイプ", format: li },
    skillAdd: { title: "スキル追加", format: li },
    skillSeal: { title: "スキルタイプ封印", format: li },
    skillTypeAdd: { title: "スキルタイプ追加", format: li },
    skillTypeSeal: { title: "スキルタイプ封印", format: li }
  }
}, hi = (e2, t2) => [zr(e2.regularParam), wr(e2.extraParam), $r(e2.specialParam), ur(e2.collaps, t2), ci(e2.specialFlag), ii(e2.partyAbility)], bi = "rmmz", vi = "colors", Ii = (e2) => e2.map((e3) => ({
  dataKey: e3,
  placeHolder: `{${e3}}`
})), ki = (e2) => ({
  dataKey: e2.dataIdKey,
  placeHolder: `{${e2.dataIdKey}}`,
  sourceId: { author: e2.sourceId.author, kind: e2.sourceId.kind, module: e2.sourceId.module }
}), Pi = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, xi = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : [...t2];
}, Ni = (e2, t2 = []) => {
  return {
    itemMappers: [...xi(e2), ...t2].map(wi),
    fallbackFormat: { text: Ti(e2), label: Si(e2) },
    properties: (a2 = e2.placeHolder ?? {}, {
      numbers: a2.numbers ? Ii(a2.numbers) : [],
      strings: a2.strings ? Ii(a2.strings) : []
    }),
    arrayIndex: e2.arrayIndex ? e2.arrayIndex.map(ki) : []
  };
  var a2;
}, wi = (e2) => ({ placeHolder: `{${e2.placeHolder}}`, kindKey: e2.kindKey, dataIdKey: e2.dataIdKey }), Ti = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const t2 = ((e3) => {
    var _a2, _b, _c2;
    return /* @__PURE__ */ new Set([...((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? [], ...((_b = e3.placeHolder) == null ? void 0 : _b.strings) ?? [], ...((_c2 = e3.arrayIndex) == null ? void 0 : _c2.map((e4) => e4.dataIdKey)) ?? []]);
  })(e2);
  return 0 === t2.size ? "value not found" : Array.from(t2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, Si = (e2) => {
  var _a2;
  return void 0 !== ((_a2 = e2.fallbackFormat) == null ? void 0 : _a2.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, qi = (e2, t2, a2) => {
  const r2 = t2[a2.dataKey];
  return null == r2 ? e2 : e2.replaceAll(a2.placeHolder, String(r2));
}, Ai = (e2, t2, a2, r2 = { placeHolderMaxLength: 50, formatMaxLength: 200 }) => e2.pattern.length >= r2.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{
  message: a2.formatVeryLong,
  reason: e2.pattern.slice(0, r2.formatMaxLength)
}], semanticErrors: [] } : {
  formatLabel: e2.label,
  semanticErrors: Fi(e2, t2, a2),
  syntaxErrors: Ri(e2.pattern, t2, a2, r2.placeHolderMaxLength)
}, Ri = (e2, t2, a2, r2) => {
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
}, Fi = (e2, t2, a2) => xi(t2).reduce((t3, r2) => {
  const i2 = ji(e2, r2, a2);
  return i2 && t3.push(i2), t3;
}, []), ji = (e2, t2, a2) => {
  const r2 = e2.pattern.includes(t2.placeHolder), i2 = !!e2.dataSource;
  return !r2 && i2 ? { message: a2.missingName, reason: t2.placeHolder } : r2 && !i2 ? { message: a2.missingSourceId, reason: t2.placeHolder } : void 0;
}, Di = (e2, t2) => {
  const a2 = zi(t2);
  return e2.reduce((e3, t3) => {
    const r2 = Ci(t3, a2);
    return e3.set(t3.kindId, r2), e3;
  }, /* @__PURE__ */ new Map());
}, Ci = (e2, t2) => {
  const a2 = Mi(e2.dataSource, t2);
  return { patternCompiled: e2.pattern, label: e2.label, data: a2 ? a2.items : void 0 };
}, Mi = (e2, t2) => {
  if (e2) return t2.get(Pi(e2));
}, zi = (e2) => e2.reduce((e3, t2) => {
  const a2 = { items: Ei(t2.items), source: t2.source, label: t2.label };
  return e3.set(Pi(t2.source), a2), e3;
}, /* @__PURE__ */ new Map()), Ei = (e2) => e2.map((e3) => ({
  id: e3.id,
  name: e3.name
})), Li = (e2, t2, a2, r2, i2) => {
  const s2 = ((e3, t3, a3) => {
    const r3 = a3.properties.numbers.reduce((e4, a4) => qi(e4, t3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => qi(e4, t3, a4), r3);
  })(r2, e2, a2);
  return t2 ? Hi(s2, e2, a2, t2, i2) : s2;
}, Hi = (e2, t2, a2, r2, i2) => {
  const s2 = ((e3, t3) => {
    const a3 = ((e4, t4) => {
      const a4 = t4[e4];
      return a4 && a4.id === e4 ? a4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return a3 ? a3.name : `?data[${t3}]`;
  })(r2, i2(t2));
  return a2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, s2), e2);
}, Bi = {
  itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" },
  placeHolder: { numbers: ["value"] }
}, Vi = (e2, t2, a2) => {
  const r2 = Ni(Bi);
  return Li(t2, a2, r2, e2.pattern, (e3) => e3.dataId);
}, Oi = (e2 = {}) => ({
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
}), Wi = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Gi = 0, Xi = 1, Yi = 2, Ki = 11, _i = 12, $i = 13, Ui = 21, Zi = 22, Ji = 31, Qi = 32, es = 33, ts = 34, as = 41, rs = 42, is = 43, ss = 44, ns = (e2) => [ps(e2), cs(e2), ds(e2), ls(e2), us(e2), ys(e2), gs(e2), fs(e2), hs(e2), ms(e2), bs(e2), vs(e2), Is(e2)], os = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), ms = (e2) => os(41, e2.special), ps = (e2) => os(11, e2.recoverHp), cs = (e2) => os(12, e2.recoverMp), ds = (e2) => os(13, e2.gainTp), ls = (e2) => os(21, e2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), us = (e2) => os(22, e2.removeState, { author: "rmmz", module: "data", kind: "state" }), ys = (e2) => os(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), gs = (e2) => os(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), fs = (e2) => os(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), hs = (e2) => os(34, e2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), bs = (e2) => os(42, e2.grow, { author: "rmmz", module: "trait", kind: "params" }), vs = (e2) => os(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), Is = (e2) => os(44, e2.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), ks = "{name} {value1}%", Ps = "{value1}% + {value2}", xs = "{name} {value1}ターン", Ns = "{name}", ws = { title: "使用効果", options: { addBuff: {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: xs
}, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: xs }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: Ps }, grow: {
  desc: "成長効果",
  domainName: "成長効果",
  format: "{name} + {value1}"
}, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: Ns }, recoverHp: {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: Ps
}, recoverMp: {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: Ps
}, removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: Ns }, removeDebuff: {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: Ns
}, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: ks }, special: { desc: "特殊効果", domainName: "特殊効果", format: Ns }, addState: {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: ks
}, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: Ns } } }, Ts = 0, Ss = (e2, t2, a2) => {
  const r2 = a2.find((e3) => e3.id === t2.dataId), i2 = r2 ? r2.name : "Unknown Item";
  return e2.pattern.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", i2);
}, qs = { title: "アイテム", options: { consumable: "消耗品" } }, As = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Rs = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Fs = (e2 = {}) => ({
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
}), js = (e2 = {}) => ({
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
}), Ds = { type: "integer" }, Cs = { type: "integer", minimum: 0 }, Ms = { type: "string" }, zs = {
  type: "object",
  properties: { type: { type: "integer" }, elementId: Cs, formula: Ms, variance: Ds, critical: { type: "boolean" } },
  required: ["type", "elementId", "formula", "variance", "critical"],
  additionalProperties: false
}, Es = { type: "object", properties: { code: Ds, dataId: Cs, value1: Ds, value2: Ds }, required: ["code", "dataId", "value1", "value2"], additionalProperties: false }, Ls = {
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
    mpCost: Ds,
    requiredWtypeId1: Cs,
    requiredWtypeId2: Cs,
    stypeId: Cs,
    tpCost: Ds,
    animationId: Cs,
    hitType: Cs,
    occasion: { type: "integer" },
    repeats: Cs,
    scope: Ds,
    speed: Ds,
    successRate: Ds,
    tpGain: Ds,
    note: Ms,
    effects: { type: "array", items: Es },
    damage: zs
  },
  additionalProperties: false
}, Hs = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "note", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "consumable", "price", "effects"],
  properties: { name: Ms, id: Cs, description: Ms, iconIndex: Cs, note: Ms, animationId: Cs, hitType: Ds, occasion: Ds, repeats: Ds, scope: Ds, speed: Ds, successRate: Ds, tpGain: Ds, consumable: {
    type: "boolean"
  }, price: Cs, itypeId: Cs, effects: { type: "array", items: Es }, damage: zs }
}, Bs = new e({ strict: true }), Vs = Bs.compile(Hs), Os = (e2) => Vs(e2), Ws = Bs.compile(Ls), Gs = (e2) => Ws(e2), Xs = Bs.compile({
  type: "object",
  required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
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
    damage: { type: "object", properties: { type: { type: "integer", minimum: 0 }, elementId: { type: "integer", minimum: 0 }, formula: {
      type: "string"
    }, variance: { type: "integer", minimum: 0, maximum: 100 }, critical: { type: "boolean", default: false } }, required: ["type", "elementId", "formula", "variance", "critical"] },
    traits: {
      type: "array",
      items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }, required: ["code", "dataId", "value"] }
    }
  }
}), Ys = (e2) => Xs(e2), Ks = (e2, t2) => `<${e2}:${t2}>`, _s = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, $s = (e2, t2) => Zs(e2.note, (a2, r2) => t2(a2, r2, e2)), Us = (e2) => Zs(e2, (e3, t2) => [e3, t2]), Zs = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, Js = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (e3, a2, r2) => {
    const i2 = t2(a2, r2);
    if (i2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return Ks(a2, i2);
  });
}, Qs = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return r2 ? r2[2] : void 0;
}, en = (e2, t2, a2) => {
  const r2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(r2, (e3, r3) => r3 === t2 ? Ks(r3, a2) : e3);
}, tn = "data", an = "actor", rn = "map", sn = "enemy", nn = "state", on = "skill", mn = "item", pn = "weapon", cn = "armor", dn = "class", ln = "common_event", un = "troop", yn = (e2) => [gn(e2.elementRate), fn(e2.debuffRate), hn(e2.stateRate), bn(e2.stateResist), vn(e2.regularParam), In(e2.extraParam), kn(e2.specialParam), Pn(e2.attackElement), xn(e2.attackState), Nn(e2.attackSpeed), wn(e2.attackTimes), Tn(e2.attackSkill), Sn(e2.skillTypeAdd), qn(e2.skillTypeSeal), An(e2.skillAdd), Rn(e2.skillSeal), Fn(e2.equipWeaponType), jn(e2.equipArmorType), Dn(e2.equipLock), Cn(e2.equipSeal), Mn(e2.slotType), zn(e2.actionPlus), En(e2.specialFlag), Ln(e2.collaps), Hn(e2.partyAbility)], gn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 11,
  dataSource: On()
}), fn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), hn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 13,
  dataSource: Bn()
}), bn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 14, dataSource: Bn() }), vn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), In = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), kn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), Pn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 31, dataSource: On() }), xn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 32,
  dataSource: Bn()
}), Nn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 33 }), wn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 34 }), Tn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 35,
  dataSource: Vn()
}), Sn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 41, dataSource: Wn() }), qn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 42,
  dataSource: Wn()
}), An = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 43, dataSource: Vn() }), Rn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 44, dataSource: Vn() }), Fn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 51,
  dataSource: Gn()
}), jn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 52, dataSource: Xn() }), Dn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 53,
  dataSource: Yn()
}), Cn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 54, dataSource: Yn() }), Mn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 55, dataSource: Yn() }), zn = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 61
}), En = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), Ln = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Hn = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), Bn = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), Vn = () => ({ author: "rmmz", module: "data", kind: "skill" }), On = () => ({ author: "rmmz", module: "system", kind: "elements" }), Wn = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), Gn = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), Xn = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), Yn = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), Kn = {
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
}, _n = () => ({ rpg: { damage: qa, data: Sa, traits: fi, itemEffect: ws }, global: Kn }), $n = (e2 = {}) => ({
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
}), Un = (e2) => "number" == typeof e2 && !Number.isNaN(e2), Zn = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
}), Jn = (e2 = {}) => [Zn(e2.cursor), Zn(e2.ok), Zn(e2.cancel), Zn(e2.buzzer), Zn(e2.equip), Zn(e2.save), Zn(e2.load), Zn(e2.battleStart), Zn(e2.escape), Zn(e2.enemyAttack), Zn(e2.enemyDamage), Zn(e2.enemyCollapse), Zn(e2.bossCollapes1), Zn(e2.bossCollapes2), Zn(e2.actorDamage), Zn(e2.actorCollapse), Zn(e2.playRecovery), Zn(e2.playMiss), Zn(e2.playEvasion), Zn(e2.playMagicEvasion), Zn(e2.playReflection), Zn(e2.shop), Zn(e2.useItem), Zn(e2.useSkill)], Qn = (e2) => ({
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
}), eo = (e2) => e2.menuCommands[0], to = (e2) => e2.menuCommands[1], ao = (e2) => e2.menuCommands[2], ro = (e2) => e2.menuCommands[3], io = (e2) => e2.menuCommands[4], so = (e2) => e2.menuCommands[5], no = (e2) => e2.itemCategories[0], oo = (e2) => e2.itemCategories[1], mo = (e2) => e2.itemCategories[2], po = (e2) => e2.itemCategories[3], co = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], lo = (e2) => ({
  item: e2[0],
  weapon: e2[1],
  armor: e2[2],
  keyItem: e2[3]
}), uo = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], yo = (e2) => ({
  item: e2[0],
  skill: e2[1],
  equip: e2[2],
  status: e2[3],
  formation: e2[4],
  save: e2[5]
}), go = { required: ["itemCategories", "menuCommands"], additionalProperties: false, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, fo = (e2 = {}) => ({
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
}), ho = { type: "boolean" }, bo = {
  type: "object",
  additionalProperties: false,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: ho,
    optDisplayTp: ho,
    optDrawTitle: ho,
    optExtraExp: ho,
    optFloorDeath: ho,
    optFollowers: ho,
    optKeyItemsNumber: ho,
    optSideView: ho,
    optSlipDeath: ho,
    optTransparent: ho,
    optMessageSkip: ho,
    optSplashScreen: ho
  }
}, vo = (e2 = {}) => ({
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0,
  partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1]
}), Io = (e2, t2) => ({
  name: e2,
  id: t2
}), ko = (e2) => e2.variables.map(Io), Po = (e2) => e2.elements.map(Io), xo = (e2) => e2.equipTypes.map(Io), No = (e2) => e2.skillTypes.map(Io), wo = (e2) => e2.weaponTypes.map(Io), To = (e2) => e2.armorTypes.map(Io), So = (e2) => e2.switches.map(Io), qo = (e2, t2) => [Ro(e2, t2), Fo(e2, t2), Mo(e2, t2), jo(e2, t2), Ao(e2, t2), Do(e2, t2), Co(e2, t2)], Ao = (e2, t2) => ({
  items: To(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), Ro = (e2, t2) => ({ items: Po(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Fo = (e2, t2) => ({ items: xo(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), jo = (e2, t2) => ({
  items: No(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), Do = (e2, t2) => ({ items: ko(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Co = (e2, t2) => ({ items: So(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Mo = (e2, t2) => ({
  items: wo(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), zo = (e2) => ({
  armorTypes: Eo(e2.armorTypes),
  elements: Eo(e2.elements),
  equipTypes: Eo(e2.equipTypes),
  weaponTypes: Eo(e2.weaponTypes),
  skillTypes: Eo(e2.skillTypes),
  variables: Eo(e2.variables),
  switches: Eo(e2.switches)
}), Eo = (e2) => e2 ? [...e2] : [], Lo = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], Ho = (e2) => e2.terms.params.map((e3, t2) => ({
  name: e3,
  id: t2
})), Bo = (e2) => ({ background: e2.background ?? 0, offsetX: e2.offsetX ?? 0, offsetY: e2.offsetY ?? 0 }), Vo = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: Zn(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), Oo = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), Wo = { title: "オプション", options: {
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
} }, Go = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, Xo = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Yo = { title: "コマンド", options: {
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
} }, Ko = {
  type: "object",
  additionalProperties: false,
  required: ["type", "weaponImageId"],
  properties: { type: { type: "number" }, weaponImageId: { type: "number" } }
}, _o = {
  additionalProperties: false,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } }
}, $o = {
  additionalProperties: false,
  type: "object",
  required: ["actorId", "equips", "level"],
  properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: {
    type: "integer"
  } } }
}, Uo = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }, Zo = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: Uo, victoryMe: Uo, gameoverMe: Uo, titleBgm: Uo, defeatMe: Uo, sounds: {
    type: "array",
    items: Uo,
    minItems: 24,
    maxItems: 24
  } }
}, Jo = { type: "object", additionalProperties: false, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: true
}, battleSystem: { type: "number" } } }, Qo = { additionalProperties: false, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, em = {
  additionalProperties: false,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, tm = {
  type: "object",
  additionalProperties: false,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, am = { type: "array", items: { type: "string" } }, rm = {
  additionalProperties: false,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: am,
    skillTypes: am,
    elements: am,
    variables: am,
    equipTypes: am,
    switches: am,
    armorTypes: am
  }
}, im = { type: "string" }, sm = { type: "string", nullable: true }, nm = { type: "string" }, om = {
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
        actionFailure: nm,
        actorDamage: nm,
        actorNoDamage: nm,
        actorRecovery: nm,
        actorGain: nm,
        actorLoss: nm,
        actorDrain: nm,
        alwaysDash: nm,
        bgmVolume: nm,
        bgsVolume: nm,
        commandRemember: nm,
        criticalToActor: nm,
        criticalToEnemy: nm,
        counterAttack: nm,
        debuffAdd: nm,
        defeat: nm,
        enemyDamage: nm,
        enemyNoDamage: nm,
        enemyRecovery: nm,
        enemyGain: nm,
        enemyLoss: nm,
        enemyDrain: nm,
        evasion: nm,
        expNext: nm,
        expTotal: nm,
        escapeFailure: nm,
        escapeStart: nm,
        file: nm,
        loadMessage: nm,
        meVolume: nm,
        magicEvasion: nm,
        magicReflection: nm,
        obtainExp: nm,
        obtainGold: nm,
        obtainItem: nm,
        obtainSkill: nm,
        partyName: nm,
        preemptive: nm,
        saveMessage: nm,
        seVolume: nm,
        substitute: nm,
        touchUI: nm,
        victory: nm,
        useItem: nm,
        buffAdd: nm,
        buffRemove: nm,
        actorNoHit: nm,
        enemyNoHit: nm,
        autosave: nm,
        emerge: nm,
        levelUp: nm,
        possession: nm,
        surprise: nm
      }
    }, commands: {
      type: "array",
      items: [im, im, im, im, im, im, im, im, im, im, im, im, im, im, im, im, im, im, im, im, sm, im, im, sm, im, im],
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
}, mm = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: $o },
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
}, pm = {
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
}, cm = { additionalProperties: false, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
  airship: pm,
  boat: pm,
  ship: pm,
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
  attackMotions: { type: "array", items: Ko }
} }, dm = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), {
  required: [],
  properties: {}
}), lm = new e({ strict: true }), um = ((e2) => {
  const t2 = dm(e2);
  return {
    additionalProperties: false,
    type: "object",
    required: Array.from(new Set(t2.required)),
    properties: t2.properties
  };
})([cm, Zo, Jo, go, bo, Qo, _o, tm, rm, om, em, mm]), ym = lm.compile(um), gm = (e2) => ym(e2), fm = lm.compile($o);
lm.compile(Ko);
const hm = lm.compile(_o), bm = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], vm = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], Im = (e2, t2) => "string" == typeof e2 ? e2 : t2, km = (e2) => {
  var _a2, _b, _c2, _d2, _e2, _f, _g, _h, _i2, _j, _k, _l, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u, _v;
  const t2 = Nm(e2.size);
  return {
    ...fo(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: Jn(e2.sounds),
    editor: Oo(e2.editing),
    advanced: $n(e2.advanced),
    title1Name: ((_c2 = e2.images) == null ? void 0 : _c2.title1Name) ?? "",
    title2Name: ((_d2 = e2.images) == null ? void 0 : _d2.title2Name) ?? "",
    ...zo(e2.dataNames ?? {}),
    magicSkills: xm([]),
    airship: Vo((_e2 = e2.vehicles) == null ? void 0 : _e2.airship),
    boat: Vo((_f = e2.vehicles) == null ? void 0 : _f.boat),
    ship: Vo((_g = e2.vehicles) == null ? void 0 : _g.ship),
    defeatMe: Zn((_h = e2.me) == null ? void 0 : _h.defeatMe),
    gameoverMe: Zn((_i2 = e2.me) == null ? void 0 : _i2.gameoverMe),
    titleBgm: Zn((_j = e2.bgm) == null ? void 0 : _j.titleBgm),
    tileSize: t2.tileSize,
    faceSize: t2.faceSize,
    iconSize: t2.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((_k = e2.battleTest) == null ? void 0 : _k.battleback1Name) ?? "",
    battleback2Name: ((_l = e2.battleTest) == null ? void 0 : _l.battleback2Name) ?? "",
    testTroopId: ((_m2 = e2.battleTest) == null ? void 0 : _m2.testTroopId) ?? 0,
    testBattlers: wm((_n2 = e2.battleTest) == null ? void 0 : _n2.testBattlers, Tm),
    battleBgm: Zn((_o2 = e2.bgm) == null ? void 0 : _o2.battleBgm),
    victoryMe: Zn((_p2 = e2.me) == null ? void 0 : _p2.victoryMe),
    editMapId: ((_q = e2.editorTemporary) == null ? void 0 : _q.editMapId) ?? 0,
    battlerName: ((_r2 = e2.editorTemporary) == null ? void 0 : _r2.battlerName) ?? "",
    locale: "",
    startMapId: ((_s2 = e2.gameInit) == null ? void 0 : _s2.startMapId) ?? 0,
    startX: ((_t2 = e2.gameInit) == null ? void 0 : _t2.startX) ?? 0,
    startY: ((_u = e2.gameInit) == null ? void 0 : _u.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Pm(e2.terms ?? {}),
    itemCategories: co(e2.itemCategories),
    partyMembersArray: xm((_v = e2.gameInit) == null ? void 0 : _v.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: uo(e2.menuComamnds)
  };
}, Pm = (e2) => {
  return { basic: bm(e2.basic ?? {}), commands: (a2 = e2.commands ?? {}, vm(a2, "")), params: Lo(e2.params ?? {}), messages: (t2 = e2.messages ?? {}, {
    actionFailure: Im(t2.actionFailure, "Action failed."),
    actorDamage: Im(t2.actorDamage, "%1 took %2 damage."),
    actorRecovery: Im(t2.actorRecovery, "%1 recovered %2 HP."),
    actorGain: Im(t2.actorGain, "%1 gained %2."),
    actorLoss: Im(t2.actorLoss, "%1 lost %2."),
    actorDrain: Im(t2.actorDrain, "%1 drained %2 HP."),
    actorNoDamage: Im(t2.actorNoDamage, "%1 was not damaged."),
    actorNoHit: Im(t2.actorNoHit, "%1 was not hit."),
    alwaysDash: Im(t2.alwaysDash, "Always dash."),
    bgmVolume: Im(t2.bgmVolume, "BGM volume"),
    bgsVolume: Im(t2.bgsVolume, "BGS volume"),
    commandRemember: Im(t2.commandRemember, "Command remember."),
    criticalToActor: Im(t2.criticalToActor, "%1 dealt %2 damage to %3."),
    criticalToEnemy: Im(t2.criticalToEnemy, "%1 dealt %2 damage to %3."),
    counterAttack: Im(t2.counterAttack, "%1 countered!"),
    debuffAdd: Im(t2.debuffAdd, "%1's %2 was lowered."),
    defeat: Im(t2.defeat, "Defeat."),
    enemyDamage: Im(t2.enemyDamage, "%1 took %2 damage."),
    enemyDrain: Im(t2.enemyDrain, "%1 drained %2 HP."),
    enemyGain: Im(t2.enemyGain, "%1 gained %2."),
    enemyLoss: Im(t2.enemyLoss, "%1 lost %2."),
    enemyNoDamage: Im(t2.enemyNoDamage, "%1 was not damaged."),
    enemyNoHit: Im(t2.enemyNoHit, "%1 was not hit."),
    enemyRecovery: Im(t2.enemyRecovery, "%1 recovered %2 HP."),
    evasion: Im(t2.evasion, "%1 evaded the attack!"),
    autosave: Im(t2.autosave, "Autosave"),
    escapeFailure: Im(t2.escapeFailure, "Escape failed."),
    escapeStart: Im(t2.escapeStart, "%1 started to escape!"),
    emerge: Im(t2.emerge, "%1 appeared!"),
    expNext: Im(t2.expNext, "Next level in %1 EXP."),
    expTotal: Im(t2.expTotal, "Total EXP: %1"),
    file: Im(t2.file, "File"),
    buffAdd: Im(t2.buffAdd, "%1's %2 was raised."),
    buffRemove: Im(t2.buffRemove, "%1's %2 was lowered."),
    obtainExp: Im(t2.obtainExp, "%1 EXP obtained."),
    obtainGold: Im(t2.obtainGold, "%1 gold obtained."),
    obtainItem: Im(t2.obtainItem, "%1 obtained %2."),
    obtainSkill: Im(t2.obtainSkill, "%1 learned %2."),
    levelUp: Im(t2.levelUp, "%1 leveled up!"),
    partyName: Im(t2.partyName, "Party"),
    loadMessage: Im(t2.loadMessage, "Load %1?"),
    meVolume: Im(t2.meVolume, "ME volume"),
    possession: Im(t2.possession, "Possession"),
    preemptive: Im(t2.preemptive, "%1 attacked first!"),
    saveMessage: Im(t2.saveMessage, "Save %1?"),
    seVolume: Im(t2.seVolume, "SE volume"),
    magicEvasion: Im(t2.magicEvasion, "%1 evaded the magic!"),
    magicReflection: Im(t2.magicReflection, "%1 reflected the magic!"),
    substitute: Im(t2.substitute, "%1 took the hit!"),
    surprise: Im(t2.surprise, "%1 surprised the enemy!"),
    touchUI: Im(t2.touchUI, "Touch UI"),
    useItem: Im(t2.useItem, "%1 used %2."),
    victory: Im(t2.victory, "Victory!")
  }) };
  var t2, a2;
}, xm = (e2) => e2 ? [...e2] : [], Nm = (e2) => ((e3) => hm(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, wm = (e2, t2) => e2 ? e2.map(t2) : [], Tm = (e2) => ((e3) => fm(e3))(e2) ? { actorId: e2.actorId, equips: xm(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, Sm = (e2, t2, a2, r2, i2, s2) => [...hi(a2, r2), ...ha(e2, t2), ...qo(i2, s2)], qm = (e2, t2) => Di(yn(t2), e2), Am = (e2, t2, a2) => {
  const r2 = ns(t2);
  return Di(a2 ? [...r2, ...a2] : r2, e2);
}, Rm = (e2) => Object.entries(e2).map(([, e3]) => e3.title), Fm = (e2, t2 = 0) => ({ code: 320, parameters: [e2.actorId, e2.name], indent: t2 }), jm = (e2, t2 = 0) => ({
  code: 324,
  parameters: [e2.actorId, e2.nickname],
  indent: t2
}), Dm = (e2, t2 = 0) => ({ code: 325, parameters: [e2.actorId, e2.profile], indent: t2 }), Cm = (e2, t2) => Mm(e2, Zn({ name: t2 })), Mm = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [Zn(t2)],
  indent: a2
}), zm = (e2, t2 = 0) => Mm(241, e2, t2), Em = (e2, t2 = 0) => Mm(245, e2, t2), Lm = (e2, t2 = 0) => Mm(249, e2, t2), Hm = (e2, t2 = 0) => Mm(250, e2, t2), Bm = (e2, t2 = 0) => Mm(132, e2, t2), Vm = (e2, t2 = 0) => Mm(133, e2, t2), Om = (e2, t2 = 0) => Mm(139, e2, t2), Wm = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: Xm(e2 ?? {})
}), Gm = (e2) => ({ eventId: e2[0] }), Xm = (e2) => [e2.eventId ?? 0], Ym = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), Km = (e2) => [e2.min, e2.max, e2.value], _m = (e2, t2 = 0) => ({
  code: 121,
  indent: t2,
  parameters: Km(e2)
}), $m = (e2) => [e2], Um = (e2) => ({ comment: e2[0] }), Zm = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: $m(e2) }), Jm = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: $m(e2)
}), Qm = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Zm(e3, t2) : Jm(e3, t2)), ep = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], tp = (e2) => ({ variableId: e2[0], digits: e2[1] }), ap = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: ep(e2 ?? {})
}), rp = (e2, t2 = 0) => ({ code: 402, indent: t2, parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""] }), ip = (e2) => ({ index: e2[0], name: e2[1] }), sp = (e2) => [e2.index ?? 0, e2.name ?? ""], np = (e2) => ({
  choices: e2[0],
  cancelType: e2[1],
  defaultType: e2[2],
  positionType: e2[3],
  background: e2[4]
}), op = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], mp = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), pp = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), cp = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), dp = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), lp = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName], up = (e2, t2 = 0) => ({ code: 401, indent: t2, parameters: [e2] }), yp = (e2, t2 = 0) => ({
  code: 355,
  indent: t2,
  parameters: [e2]
}), gp = (e2, t2 = 0) => ({ code: 655, indent: t2, parameters: [e2] }), fp = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? yp(e3, t2) : gp(e3, t2)), hp = 0, bp = 1, vp = 2, Ip = 3, kp = 4, Pp = {
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
}, xp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], Np = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], wp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], Tp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], Sp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], qp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], Ap = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, Pp[t2.param]], Rp = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, Fp = (e2, t2) => {
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
}, jp = (e2) => [...e2], Dp = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: jp(e2.parameters)
}), Cp = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, Mp = (e2) => e2.parameters.every(Cp), zp = new e({ strict: true }), Ep = zp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{
    type: "integer",
    minimum: 0
  }, { type: "string" }] } },
  additionalProperties: false
}), Lp = (e2) => Ep(e2), Hp = zp.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } }, required: ["code", "indent", "parameters"] }), Bp = (e2) => Hp(e2), Vp = zp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
    type: "integer",
    enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
  } },
  additionalProperties: false
}), Op = (e2) => Vp(e2), Wp = zp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), Gp = (e2) => Wp(e2), Xp = zp.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), Yp = (e2) => Xp(e2), Kp = zp.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } },
  required: ["code", "indent", "parameters"]
}), _p = (e2) => Kp(e2), $p = zp.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 402
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } },
  required: ["code", "indent", "parameters"]
}), Up = (e2) => $p(e2), Zp = zp.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), Jp = (e2) => Zp(e2), Qp = zp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), ec = (e2) => Qp(e2), tc = (e2) => Gp(e2) && 401 === e2.code, ac = (e2) => Gp(e2) && 405 === e2.code, rc = (e2) => Gp(e2) && 108 === e2.code, ic = (e2) => Gp(e2) && 408 === e2.code, sc = (e2) => Gp(e2) && 355 === e2.code, nc = (e2) => Gp(e2) && 655 === e2.code, oc = "bgm", mc = "se", pc = "me", cc = "bgs", dc = "battlebacks1", lc = "battlebacks2", uc = "characters", yc = "enemies", gc = "faces", fc = "parallaxes", hc = "pictures", bc = "sv_actors", vc = "sv_enemies", Ic = "system", kc = "tilesets", Pc = "titles1", xc = "titles2", Nc = "System.json", wc = "Actors.json", Tc = "Classes.json", Sc = "Skills.json", qc = "Items.json", Ac = "Weapons.json", Rc = "Armors.json", Fc = "Enemies.json", jc = "Troops.json", Dc = "States.json", Cc = "Animations.json", Mc = "Tilesets.json", zc = "CommonEvents.json", Ec = "MapInfos.json", Lc = "data", Hc = "img", Bc = "audio", Vc = "js", Oc = (e2, t2) => ({
  type: "array",
  items: t2,
  ...Wc(e2),
  ...Gc(e2.default)
}), Wc = (e2) => ({ ..."string" == typeof e2.text ? { title: e2.text } : {}, ..."string" == typeof e2.desc ? { description: e2.desc } : {} }), Gc = (e2) => void 0 !== e2 ? {
  default: e2
} : {}, Xc = (e2) => void 0 === e2 || 0 === e2, Yc = (e2) => Oc(e2, { type: "string" }), Kc = (e2) => {
  switch (e2.kind) {
    case "string":
    case "multiline_string":
      return ((e3) => ({
        type: "string",
        ...Wc(e3),
        ...Gc(e3.default)
      }))(e2);
    case "file":
    case "combo":
      return ((e3) => ({ type: "string", ...Gc(e3.default), ...Wc(e3) }))(e2);
    case "select":
      return ((e3) => ({ type: "string", ...Gc(e3.default), ...Wc(e3), ...e3.options ? {
        enum: e3.options.map((e4) => e4.value)
      } : {} }))(e2);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return Yc(e2);
    case "number[]":
      return ((e3) => ({ type: "array", items: {
        type: Xc(e3.decimals) ? "integer" : "number"
      }, ...Gc(e3.default), ...Wc(e3) }))(e2);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ((e3) => Oc(e3, { type: "integer" }))(e2);
    case "number":
      return ((e3) => ({ type: Xc(e3.decimals) ? "integer" : "number", ...Gc(e3.default), ...Wc(e3) }))(e2);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((e3) => ({ type: "integer", ...Gc(e3.default), ...Wc(e3) }))(e2);
    case "boolean":
      return ((e3) => ({ type: "boolean", ...Gc(e3.default), ...Wc(e3) }))(e2);
    case "struct":
      return { $ref: `#/definitions/${(t2 = e2).struct}`, ...Wc(t2) };
    default:
      return {};
  }
  var t2;
}, _c = (e2, t2) => Object.entries(t2).reduce((t3, [a2, r2]) => {
  if (a2 in e2) {
    const i2 = e2[a2];
    if ("string" == typeof i2) return { ...t3, [a2]: r2(i2) };
  }
  return t3;
}, {}), $c = (e2, t2, a2, r2) => ({
  default: t2,
  ..._c(a2, r2),
  kind: e2
}), Uc = (e2, t2, a2) => ({ default: [], ..._c(t2, a2), kind: e2 }), Zc = "help", Jc = "kind", Qc = "text", ed = "struct", td = (e2) => {
  const t2 = JSON.parse(e2);
  return Array.isArray(t2) ? t2.map(ad) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, ad(t3)])) : t2;
}, ad = (e2) => {
  if ("string" != typeof e2) return e2;
  try {
    const t2 = JSON.parse(e2);
    return Array.isArray(t2) ? t2.map(ad) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, ad(t3)])) : t2;
  } catch {
    return e2;
  }
}, rd = (e2) => {
  if (Jc in e2.attr) {
    const t2 = dd[e2.attr.kind];
    if (t2) return t2(e2);
  }
  return $c("any", "", e2.attr, nd);
}, id = (e2) => e2, sd = (e2) => e2.replace("[", "").replace("]", "").split(",").map((e3) => parseFloat(e3.replaceAll('"', "").trim())).filter((e3) => !isNaN(e3)), nd = {
  default: id,
  text: id,
  desc: id,
  parent: id
}, od = (e2) => $c("string", "", e2.attr, nd), md = (e2) => {
  const t2 = { default: (e3) => td(e3), text: id, desc: id, parent: id };
  return Uc("string[]", e2.attr, t2);
}, pd = (e2, t2) => {
  const a2 = {
    default: sd,
    text: id,
    desc: id,
    parent: id
  };
  return Uc(t2, e2.attr, a2);
}, cd = (e2, t2) => {
  const a2 = { default: (e3) => parseInt(e3, 10), text: id, desc: id, parent: id };
  return $c(t2, 0, e2.attr, a2);
}, dd = {
  number: (e2) => ((e3) => {
    const t2 = {
      default: (e4) => parseFloat(e4),
      text: id,
      desc: id,
      decimals: (e4) => parseInt(e4, 10),
      min: (e4) => parseFloat(e4),
      max: (e4) => parseFloat(e4),
      parent: id
    };
    return $c("number", 0, e3.attr, t2);
  })(e2),
  "number[]": (e2) => {
    const t2 = { default: sd, text: id, desc: id, decimals: (e3) => parseInt(e3, 10), min: (e3) => parseFloat(e3), max: (e3) => parseFloat(e3), parent: id };
    return Uc("number[]", e2.attr, t2);
  },
  string: od,
  "string[]": md,
  multiline_string: od,
  "multiline_string[]": md,
  combo: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => e3.option)) ?? [];
    return { ...$c("combo", "", e2.attr, nd), options: t2 };
  },
  select: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => ({ option: e3.option, value: e3.value }))) ?? [];
    return { ...$c("select", "", e2.attr, nd), options: t2 };
  },
  actor: (e2) => cd(e2, "actor"),
  "actor[]": (e2) => pd(e2, "actor[]"),
  class: (e2) => cd(e2, "class"),
  "class[]": (e2) => pd(e2, "class[]"),
  skill: (e2) => cd(e2, "skill"),
  "skill[]": (e2) => pd(e2, "skill[]"),
  item: (e2) => cd(e2, "item"),
  "item[]": (e2) => pd(e2, "item[]"),
  weapon: (e2) => cd(e2, "weapon"),
  "weapon[]": (e2) => pd(e2, "weapon[]"),
  armor: (e2) => cd(e2, "armor"),
  "armor[]": (e2) => pd(e2, "armor[]"),
  state: (e2) => cd(e2, "state"),
  "state[]": (e2) => pd(e2, "state[]"),
  enemy: (e2) => cd(e2, "enemy"),
  "enemy[]": (e2) => pd(e2, "enemy[]"),
  common_event: (e2) => cd(e2, "common_event"),
  "common_event[]": (e2) => pd(e2, "common_event[]"),
  switch: (e2) => cd(e2, "switch"),
  "switch[]": (e2) => pd(e2, "switch[]"),
  variable: (e2) => cd(e2, "variable"),
  "variable[]": (e2) => pd(e2, "variable[]"),
  troop: (e2) => cd(e2, "troop"),
  "troop[]": (e2) => pd(e2, "troop[]"),
  boolean: (e2) => {
    const t2 = {
      default: (e3) => "true" === e3,
      text: id,
      desc: id,
      on: id,
      off: id,
      parent: id
    };
    return $c("boolean", true, e2.attr, t2);
  },
  file: (e2) => {
    const t2 = { default: id, text: id, desc: id, parent: id, dir: id };
    return { dir: "", ...$c("file", "", e2.attr, t2) };
  },
  "file[]": (e2) => {
    const t2 = { default: (e3) => td(e3), text: id, desc: id, parent: id, dir: id };
    return { dir: "", ...Uc("file[]", e2.attr, t2) };
  }
}, ld = "BODY", ud = "STRUCT", yd = "NONE", gd = (e2, t2) => {
  const a2 = e2.lines.length > 0 ? hd(e2) : e2, r2 = t2[1] || void 0;
  return { ...a2, structName: r2, blockType: r2 ? ud : "INVALID", locale: t2[2], lines: [] };
}, fd = (e2) => ({
  ...e2.lines.length > 0 ? hd(e2) : e2,
  blockType: ld,
  structName: void 0,
  locale: void 0,
  lines: []
}), hd = (e2) => e2.blockType === ld ? { ...e2, bodies: e2.bodies.concat([{ lines: [...e2.lines] }]), lines: [], blockType: yd } : e2.structName && e2.blockType === ud ? {
  ...e2,
  structs: e2.structs.concat([{ struct: e2.structName, locale: e2.locale, lines: [...e2.lines] }]),
  blockType: yd,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e2,
  blockType: yd,
  structName: void 0,
  lines: []
}, bd = (e2) => e2.currentOption ? { items: e2.items.concat({ option: e2.currentOption, value: e2.currentOption }) } : e2, vd = (e2) => ({
  ..."string" == typeof e2.desc ? { desc: e2.desc } : {},
  ..."string" == typeof e2.text ? { text: e2.text } : {}
}), Id = (e2) => {
  const t2 = kd(e2), a2 = xd(t2);
  return Pd(a2);
}, kd = (e2) => {
  if (e2.currentParam && e2.currentOption) {
    const t2 = e2.currentParam.attr.kind;
    if ("select" === t2 || "combo" === t2) return { ...e2, currentParam: { ...e2.currentParam, options: bd(e2.currentOption).items } };
  }
  return e2;
}, Pd = (e2) => e2.currentParam ? {
  ...e2,
  params: [...e2.params, e2.currentParam],
  currentParam: null,
  currentContext: null
} : e2, xd = (e2) => {
  if (e2.currentCommand) {
    const t2 = e2.currentParam ? [...e2.currentCommand.args, e2.currentParam] : e2.currentCommand.args, a2 = { ...vd(e2.currentCommand), command: e2.currentCommand.command, args: t2 };
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
}, Nd = (e2, t2) => {
  const a2 = e2.lines.reduce((e3, a3) => {
    const r2 = a3.trim().replace(/^\*\s?/, "");
    if (!r2.startsWith("@")) return e3.currentContext === Zc ? { ...e3, helpLines: e3.helpLines.concat(r2) } : e3;
    const [i2, ...s2] = r2.slice(1).split(" "), n2 = s2.join(" ").trim(), o2 = t2[i2];
    return o2 ? o2(e3, n2) : e3;
  }, Td());
  return Id(a2);
}, wd = (e2, t2) => {
  const a2 = ((e3) => {
    const t3 = e3.split("\n"), a3 = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: yd
    }, r3 = t3.reduce((e4, t4) => {
      const a4 = t4.trim(), r4 = a4.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return r4 ? gd(e4, r4) : "/*:" === a4 ? fd(e4) : "*/" === a4 ? e4.lines.length > 0 ? hd(e4) : e4 : { ...e4, lines: e4.lines.concat([a4]) };
    }, a3);
    return { structs: r3.structs, bodies: r3.bodies };
  })(e2), r2 = a2.structs.map((e3) => ((e4) => {
    const t3 = Nd(e4, Ad);
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
  const s2 = Nd(i2, t2);
  return { params: s2.params, commands: s2.commands, meta: s2.meta, helpLines: s2.helpLines, structs: r2 };
}, Td = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), Sd = (e2, t2, a2) => e2.currentParam && !(t2 in e2.currentParam.attr) ? {
  ...e2,
  currentParam: { ...e2.currentParam, attr: { ...e2.currentParam.attr, [t2]: a2 } }
} : e2, qd = (e2, t2, a2) => ({ ...e2, meta: { [t2]: a2, ...e2.meta } }), Ad = {
  param: (e2, t2) => {
    const a2 = Id(e2);
    return a2.params.some((e3) => e3.name === t2) ? a2 : { ...a2, currentContext: "param", currentParam: { name: t2, attr: {} } };
  },
  text: (e2, t2) => e2.currentParam ? Sd(e2, Qc, t2) : e2.currentCommand && !(Qc in e2.currentCommand) ? { ...e2, currentCommand: {
    ...vd(e2.currentCommand),
    command: e2.currentCommand.command,
    args: e2.currentCommand.args,
    [Qc]: t2
  } } : e2,
  desc: (e2, t2) => e2.currentParam ? Sd(e2, "desc", t2) : e2.currentCommand ? { ...e2, currentCommand: { ...e2.currentCommand, desc: t2 } } : e2,
  command: (e2, t2) => {
    const a2 = Id(e2);
    return a2.commands.some((e3) => e3.command === t2) ? a2 : { ...a2, currentCommand: { command: t2, args: [] }, currentParam: null };
  },
  arg: (e2, t2) => {
    if (!e2.currentCommand) return e2;
    if (e2.currentParam) {
      const a2 = {
        ...vd(e2.currentCommand),
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
  help: (e2) => ({ ...Id(e2), currentContext: Zc }),
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
      const a2 = t2.slice(7, -1), r2 = Sd(e2, ed, a2);
      return Sd(r2, Jc, ed);
    }
    return e2.currentParam ? Sd(e2, Jc, t2) : e2;
  },
  default: (e2, t2) => Sd(e2, "default", t2),
  on: (e2, t2) => Sd(e2, "on", t2),
  off: (e2, t2) => Sd(e2, "off", t2),
  min: (e2, t2) => Sd(e2, "min", t2),
  max: (e2, t2) => Sd(e2, "max", t2),
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
  author: (e2, t2) => qd(e2, "author", t2),
  plugindesc: (e2, t2) => qd(e2, "plugindesc", t2),
  url: (e2, t2) => qd(e2, "url", t2)
}, Rd = (e2) => Fd(((e3) => wd(e3, Ad))(e2)), Fd = (e2) => ({
  target: "MZ",
  meta: e2.meta,
  commands: Dd(e2.commands),
  params: jd(e2.params)
}), jd = (e2) => e2.reduce((e3, t2) => ({ [t2.name]: rd(t2), ...e3 }), {}), Dd = (e2) => e2.reduce((e3, t2) => {
  const a2 = { desc: t2.desc, text: t2.text, args: jd(t2.args) };
  return { [t2.command]: a2, ...e3 };
}, {}), Cd = (e2) => Rd(e2), Md = (e2) => ((e3) => {
  const t2 = Object.entries(e3).reduce((e4, [t3, a2]) => {
    const r2 = Kc(a2);
    return { ...e4, [t3]: r2 };
  }, {});
  return {
    type: "object",
    properties: t2,
    required: Object.keys(t2),
    additionalProperties: false
  };
})(e2);
function zd(e2) {
  return e2 && e2.__esModule && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
}
var Ed, Ld = { exports: {} };
const Hd = zd(function() {
  if (Ed) return Ld.exports;
  Ed = 1, Ld.exports = t2, Ld.exports.default = t2;
  const e2 = { properties: { code: { enum: [132, 133, 139, 241, 245, 249, 250] } } };
  function t2(a2, { instancePath: r2 = "", parentData: i2, parentDataProperty: s2, rootData: n2 = a2 } = {}) {
    if (!a2 || "object" != typeof a2 || Array.isArray(a2)) return t2.errors = [{
      instancePath: r2,
      schemaPath: "#/type",
      keyword: "type",
      params: { type: "object" },
      message: "must be object"
    }], false;
    {
      let i3;
      if (void 0 === a2.code && (i3 = "code") || void 0 === a2.parameters && (i3 = "parameters") || void 0 === a2.indent && (i3 = "indent")) return t2.errors = [{
        instancePath: r2,
        schemaPath: "#/required",
        keyword: "required",
        params: { missingProperty: i3 },
        message: "must have required property '" + i3 + "'"
      }], false;
      for (const e3 in a2) if ("code" !== e3 && "indent" !== e3 && "parameters" !== e3) return t2.errors = [{
        instancePath: r2,
        schemaPath: "#/additionalProperties",
        keyword: "additionalProperties",
        params: { additionalProperty: e3 },
        message: "must NOT have additional properties"
      }], false;
      if (void 0 !== a2.code) {
        let i4 = a2.code;
        const s3 = 0;
        if ("number" != typeof i4 || i4 % 1 || isNaN(i4) || !isFinite(i4)) return t2.errors = [{
          instancePath: r2 + "/code",
          schemaPath: "#/properties/code/type",
          keyword: "type",
          params: { type: "integer" },
          message: "must be integer"
        }], false;
        if (132 !== i4 && 133 !== i4 && 139 !== i4 && 241 !== i4 && 245 !== i4 && 249 !== i4 && 250 !== i4) return t2.errors = [{
          instancePath: r2 + "/code",
          schemaPath: "#/properties/code/enum",
          keyword: "enum",
          params: { allowedValues: e2.properties.code.enum },
          message: "must be equal to one of the allowed values"
        }], false;
        var o2 = 0 === s3;
      } else o2 = true;
      if (o2) {
        if (void 0 !== a2.indent) {
          let e3 = a2.indent;
          const i4 = 0;
          if ("number" != typeof e3 || e3 % 1 || isNaN(e3) || !isFinite(e3)) return t2.errors = [{
            instancePath: r2 + "/indent",
            schemaPath: "#/properties/indent/type",
            keyword: "type",
            params: { type: "integer" },
            message: "must be integer"
          }], false;
          o2 = 0 === i4;
        } else o2 = true;
        if (o2) if (void 0 !== a2.parameters) {
          let e3 = a2.parameters;
          const i4 = 0;
          if (!Array.isArray(e3)) return t2.errors = [{
            instancePath: r2 + "/parameters",
            schemaPath: "#/properties/parameters/type",
            keyword: "type",
            params: { type: "array" },
            message: "must be array"
          }], false;
          if (e3.length > 1) return t2.errors = [{
            instancePath: r2 + "/parameters",
            schemaPath: "#/properties/parameters/maxItems",
            keyword: "maxItems",
            params: { limit: 1 },
            message: "must NOT have more than 1 items"
          }], false;
          if (e3.length < 1) return t2.errors = [{
            instancePath: r2 + "/parameters",
            schemaPath: "#/properties/parameters/minItems",
            keyword: "minItems",
            params: { limit: 1 },
            message: "must NOT have fewer than 1 items"
          }], false;
          if (e3.length > 0) {
            let a3 = e3[0];
            if (!a3 || "object" != typeof a3 || Array.isArray(a3)) return t2.errors = [{
              instancePath: r2 + "/parameters/0",
              schemaPath: "#/properties/parameters/items/0/type",
              keyword: "type",
              params: { type: "object" },
              message: "must be object"
            }], false;
            {
              let e4;
              if (void 0 === a3.name && (e4 = "name") || void 0 === a3.volume && (e4 = "volume") || void 0 === a3.pitch && (e4 = "pitch") || void 0 === a3.pan && (e4 = "pan")) return t2.errors = [{
                instancePath: r2 + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/required",
                keyword: "required",
                params: { missingProperty: e4 },
                message: "must have required property '" + e4 + "'"
              }], false;
              for (const e5 in a3) if ("name" !== e5 && "volume" !== e5 && "pitch" !== e5 && "pan" !== e5) return t2.errors = [{
                instancePath: r2 + "/parameters/0",
                schemaPath: "#/properties/parameters/items/0/additionalProperties",
                keyword: "additionalProperties",
                params: { additionalProperty: e5 },
                message: "must NOT have additional properties"
              }], false;
              if (void 0 !== a3.name) {
                const e5 = 0;
                if ("string" != typeof a3.name) return t2.errors = [{
                  instancePath: r2 + "/parameters/0/name",
                  schemaPath: "#/properties/parameters/items/0/properties/name/type",
                  keyword: "type",
                  params: { type: "string" },
                  message: "must be string"
                }], false;
                var m2 = 0 === e5;
              } else m2 = true;
              if (m2) {
                if (void 0 !== a3.volume) {
                  let e5 = a3.volume;
                  const i5 = 0;
                  if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return t2.errors = [{
                    instancePath: r2 + "/parameters/0/volume",
                    schemaPath: "#/properties/parameters/items/0/properties/volume/type",
                    keyword: "type",
                    params: { type: "integer" },
                    message: "must be integer"
                  }], false;
                  m2 = 0 === i5;
                } else m2 = true;
                if (m2) {
                  if (void 0 !== a3.pitch) {
                    let e5 = a3.pitch;
                    const i5 = 0;
                    if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return t2.errors = [{
                      instancePath: r2 + "/parameters/0/pitch",
                      schemaPath: "#/properties/parameters/items/0/properties/pitch/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    m2 = 0 === i5;
                  } else m2 = true;
                  if (m2) if (void 0 !== a3.pan) {
                    let e5 = a3.pan;
                    const i5 = 0;
                    if ("number" != typeof e5 || e5 % 1 || isNaN(e5) || !isFinite(e5)) return t2.errors = [{
                      instancePath: r2 + "/parameters/0/pan",
                      schemaPath: "#/properties/parameters/items/0/properties/pan/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    m2 = 0 === i5;
                  } else m2 = true;
                }
              }
            }
          }
          o2 = 0 === i4;
        } else o2 = true;
      }
    }
    return t2.errors = null, true;
  }
  return Ld.exports;
}()), Bd = (e2) => Hd(e2);
var Vd, Od = {
  exports: {}
};
const Wd = zd(function() {
  if (Vd) return Od.exports;
  function e2(t2, { instancePath: a2 = "", parentData: r2, parentDataProperty: i2, rootData: s2 = t2 } = {}) {
    if (!t2 || "object" != typeof t2 || Array.isArray(t2)) return e2.errors = [{ instancePath: a2, schemaPath: "#/type", keyword: "type", params: { type: "object" }, message: "must be object" }], false;
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
  return Vd = 1, Od.exports = e2, Od.exports.default = e2, Od.exports;
}()), Gd = (e2) => Wd(e2);
var Xd, Yd = { exports: {} };
const Kd = zd(function() {
  if (Xd) return Yd.exports;
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
      if (void 0 === t2.name && (r3 = "name") || void 0 === t2.id && (r3 = "id") || void 0 === t2.description && (r3 = "description") || void 0 === t2.iconIndex && (r3 = "iconIndex") || void 0 === t2.price && (r3 = "price") || void 0 === t2.params && (r3 = "params") || void 0 === t2.traits && (r3 = "traits") || void 0 === t2.note && (r3 = "note") || void 0 === t2.etypeId && (r3 = "etypeId") || void 0 === t2.atypeId && (r3 = "atypeId")) return e2.errors = [{
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
          if (void 0 !== t2.description) {
            const r4 = 0;
            if ("string" != typeof t2.description) return e2.errors = [{
              instancePath: a2 + "/description",
              schemaPath: "#/properties/description/type",
              keyword: "type",
              params: { type: "string" },
              message: "must be string"
            }], false;
            n2 = 0 === r4;
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
              if ("number" == typeof r4 && isFinite(r4) && (r4 < 0 || isNaN(r4))) return e2.errors = [{
                instancePath: a2 + "/iconIndex",
                schemaPath: "#/properties/iconIndex/minimum",
                keyword: "minimum",
                params: { comparison: ">=", limit: 0 },
                message: "must be >= 0"
              }], false;
              n2 = 0 === i3;
            } else n2 = true;
            if (n2) {
              if (void 0 !== t2.price) {
                let r4 = t2.price;
                const i3 = 0;
                if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                  instancePath: a2 + "/price",
                  schemaPath: "#/properties/price/type",
                  keyword: "type",
                  params: { type: "integer" },
                  message: "must be integer"
                }], false;
                if ("number" == typeof r4 && isFinite(r4) && (r4 < 0 || isNaN(r4))) return e2.errors = [{
                  instancePath: a2 + "/price",
                  schemaPath: "#/properties/price/minimum",
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
                  if (void 0 !== t2.etypeId) {
                    let r4 = t2.etypeId;
                    const i3 = 0;
                    if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                      instancePath: a2 + "/etypeId",
                      schemaPath: "#/properties/etypeId/type",
                      keyword: "type",
                      params: { type: "integer" },
                      message: "must be integer"
                    }], false;
                    if ("number" == typeof r4 && isFinite(r4) && (r4 < 0 || isNaN(r4))) return e2.errors = [{
                      instancePath: a2 + "/etypeId",
                      schemaPath: "#/properties/etypeId/minimum",
                      keyword: "minimum",
                      params: { comparison: ">=", limit: 0 },
                      message: "must be >= 0"
                    }], false;
                    n2 = 0 === i3;
                  } else n2 = true;
                  if (n2) {
                    if (void 0 !== t2.atypeId) {
                      let r4 = t2.atypeId;
                      const i3 = 0;
                      if ("number" != typeof r4 || r4 % 1 || isNaN(r4) || !isFinite(r4)) return e2.errors = [{
                        instancePath: a2 + "/atypeId",
                        schemaPath: "#/properties/atypeId/type",
                        keyword: "type",
                        params: { type: "integer" },
                        message: "must be integer"
                      }], false;
                      if ("number" == typeof r4 && isFinite(r4) && (r4 < 0 || isNaN(r4))) return e2.errors = [{
                        instancePath: a2 + "/atypeId",
                        schemaPath: "#/properties/atypeId/minimum",
                        keyword: "minimum",
                        params: { comparison: ">=", limit: 0 },
                        message: "must be >= 0"
                      }], false;
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
                            if (!t4 || "object" != typeof t4 || Array.isArray(t4)) return e2.errors = [{ instancePath: a2 + "/traits/" + i4, schemaPath: "#/properties/traits/items/type", keyword: "type", params: {
                              type: "object"
                            }, message: "must be object" }], false;
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
                                var m2 = 0 === s4;
                              } else m2 = true;
                              if (m2) {
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
                                  m2 = 0 === s4;
                                } else m2 = true;
                                if (m2) if (void 0 !== t4.value) {
                                  let r6 = t4.value;
                                  const s4 = 0;
                                  if ("number" != typeof r6 || r6 % 1 || isNaN(r6) || !isFinite(r6)) return e2.errors = [{
                                    instancePath: a2 + "/traits/" + i4 + "/value",
                                    schemaPath: "#/properties/traits/items/properties/value/type",
                                    keyword: "type",
                                    params: { type: "integer" },
                                    message: "must be integer"
                                  }], false;
                                  m2 = 0 === s4;
                                } else m2 = true;
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
    return e2.errors = null, true;
  }
  return Xd = 1, Yd.exports = e2, Yd.exports.default = e2, Yd.exports;
}()), _d = (e2) => Kd(e2);
var $d, Ud = { exports: {} };
const Zd = zd(function() {
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
  return $d = 1, Ud.exports = e2, Ud.exports.default = e2, Ud.exports;
}()), Jd = (e2) => Zd(e2);
export {
  at as ABORT_BATTLE,
  bi as AUTHOR_RMMZ,
  De as BATTLE_PROCESSING,
  Ge as CHANGE_ACTOR_IMAGES,
  L as CHANGE_ARMORS,
  Re as CHANGE_BATTLE_BACKGROUND,
  B as CHANGE_BATTLE_BGM,
  We as CHANGE_CLASS,
  K as CHANGE_DEFEAT_ME,
  G as CHANGE_ENCOUNTER,
  _e as CHANGE_ENEMY_HP,
  $e as CHANGE_ENEMY_MP,
  Ue as CHANGE_ENEMY_STATE,
  it as CHANGE_ENEMY_TP,
  Ve as CHANGE_EXP,
  X as CHANGE_FORMATION_ACCESS,
  M as CHANGE_GOLD,
  Ee as CHANGE_HP,
  z as CHANGE_ITEMS,
  W as CHANGE_MENU_ACCESS,
  Le as CHANGE_MP,
  Oe as CHANGE_NAME,
  Ye as CHANGE_NICKNAME,
  Fe as CHANGE_PARALLAX,
  H as CHANGE_PARTY_MEMBER,
  se as CHANGE_PLAYER_FOLLOWERS,
  Ke as CHANGE_PROFILE,
  O as CHANGE_SAVE_ACCESS,
  Ae as CHANGE_TILESET,
  He as CHANGE_TP,
  te as CHANGE_TRANSPARENCY,
  _ as CHANGE_VEHICLE_BGM,
  Xe as CHANGE_VEHICLE_IMAGE,
  V as CHANGE_VICTORY_ME,
  E as CHANGE_WEAPONS,
  Y as CHANGE_WINDOW_COLOR,
  cr as COLLAPS_BOSS,
  dr as COLLAPS_INSTANT,
  lr as COLLAPS_NONE,
  pr as COLLAPS_NORMAL,
  k as COMMENT_BODY,
  I as COMMENT_HEAD,
  q as COMMON_EVENT,
  x as CONDITIONAL_BRANCH,
  N as CONDITIONAL_BRANCH_ELSE,
  D as CONTROL_SELF_SWITCH,
  F as CONTROL_SWITCHES,
  C as CONTROL_TIMER,
  j as CONTROL_VARIABLES,
  qa as DEFAULT_DAMAGE_LABELS,
  Kn as DEFAULT_GLOBAL_LABELS,
  qs as DEFAULT_ITEM_LABELS,
  As as DEFAULT_SKILL_LABELS,
  Wo as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Go as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Rs as DEFAULT_USABLE_ITEM_LABELS,
  Ji as EFFECT_ADD_BUFF,
  Qi as EFFECT_ADD_DEBUFF,
  Ui as EFFECT_ADD_STATE,
  ss as EFFECT_COMMON_EVENT,
  $i as EFFECT_GAIN_TP,
  rs as EFFECT_GROW,
  is as EFFECT_LEARN_SKILL,
  Ki as EFFECT_RECOVER_HP,
  _i as EFFECT_RECOVER_MP,
  es as EFFECT_REMOVE_BUFF,
  ts as EFFECT_REMOVE_DEBUFF,
  Zi as EFFECT_REMOVE_STATE,
  as as EFFECT_SPECIAL,
  Je as ENEMY_APPEAR,
  Ze as ENEMY_RECOVER_ALL,
  Qe as ENEMY_TRANSFORM,
  ie as ERASE_EVENT,
  he as ERASE_PICTURE,
  S as EXIT_EVENT_PROCESSING,
  br as EXTRA_PARAM_CEV,
  kr as EXTRA_PARAM_CNT,
  hr as EXTRA_PARAM_CRI,
  fr as EXTRA_PARAM_EVA,
  gr as EXTRA_PARAM_HIT,
  Pr as EXTRA_PARAM_HRG,
  vr as EXTRA_PARAM_MEV,
  Ir as EXTRA_PARAM_MRF,
  xr as EXTRA_PARAM_MRG,
  Nr as EXTRA_PARAM_TRG,
  me as FADEIN_SCREEN,
  Ie as FADEOUT_BGM,
  Ne as FADEOUT_BGS,
  oe as FADEOUT_SCREEN,
  wc as FILENAME_ACTORS,
  Cc as FILENAME_ANIMATIONS,
  Rc as FILENAME_ARMORS,
  Tc as FILENAME_CLASSES,
  zc as FILENAME_COMMON_EVENTS,
  Fc as FILENAME_ENEMIES,
  qc as FILENAME_ITEMS,
  Ec as FILENAME_MAP_INFOS,
  Sc as FILENAME_SKILLS,
  Dc as FILENAME_STATES,
  Nc as FILENAME_SYSTEM,
  Mc as FILENAME_TILESET,
  jc as FILENAME_TROOPS,
  Ac as FILENAME_WEAPONS,
  ni as FLAG_ID_AUTO_BATTLE,
  oi as FLAG_ID_GUARD,
  pi as FLAG_ID_PRESERVE_TP,
  mi as FLAG_ID_SUBSTITUTE,
  ce as FLASH_SCREEN,
  Bc as FOLDER_AUDIO,
  oc as FOLDER_AUDIO_BGM,
  cc as FOLDER_AUDIO_BGS,
  pc as FOLDER_AUDIO_ME,
  mc as FOLDER_AUDIO_SE,
  Lc as FOLDER_DATA,
  Hc as FOLDER_IMG,
  dc as FOLDER_IMG_BATTLEBACK1,
  lc as FOLDER_IMG_BATTLEBACK2,
  uc as FOLDER_IMG_CHACTERS,
  yc as FOLDER_IMG_ENEMIES,
  gc as FOLDER_IMG_FACES,
  fc as FOLDER_IMG_PARALLACES,
  hc as FOLDER_IMG_PICTURES,
  bc as FOLDER_IMG_SV_ACTORS,
  vc as FOLDER_IMG_SV_ENEMIES,
  Ic as FOLDER_IMG_SYSTEM,
  kc as FOLDER_IMG_TILESETS,
  Pc as FOLDER_IMG_TITLES1,
  xc as FOLDER_IMG_TITLES2,
  Vc as FOLDER_JS,
  tt as FORCE_ACTION,
  nt as GAME_OVER,
  ne as GATHER_FOLLOWERS,
  je as GET_LOCATION_INFO,
  ee as GET_ONOFF_VEHICLE,
  Gi as HITTYPE_CERTAIN,
  Yi as HITTYPE_MAGICAL,
  Xi as HITTYPE_PHYSICAL,
  f as INPUT_NUMBER,
  A as LABEL,
  Wi as LABELS_DATA_WEAPON,
  Xo as LABELS_SYSTEM_BATTLER_PARAMS,
  Yo as LABELS_SYSTEM_GAME_COMMANDS,
  R as LABEL_JUMP,
  Sa as LABEL_SET_DATA,
  ws as LABEL_SET_ITEM_EFFECT,
  fi as LABEL_SET_TRAIT,
  w as LOOP,
  T as LOOP_BREAK,
  tn as MODULE_DATA,
  ye as MOVE_PICTURE,
  ze as NAME_INPUT_PROCESSING,
  d as NO_OPERATION,
  rt as OPEN_MENU_SCREEN,
  st as OPEN_SAVE_SCREEN,
  hp as OPERAND_CONSTANT,
  Ip as OPERAND_GAMEDATA,
  vp as OPERAND_RANDOM,
  kp as OPERAND_SCRIPT,
  bp as OPERAND_VARIABLE,
  ei as PARTY_ABILITY_CANCEL_SURPRISE,
  ri as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Jr as PARTY_ABILITY_ENCOUNTER_HALF,
  Qr as PARTY_ABILITY_ENCOUNTER_NONE,
  ai as PARTY_ABILITY_GOLD_DOUBLE,
  ti as PARTY_ABILITY_RAISE_PREEMPTIVE,
  ve as PLAY_BGM,
  xe as PLAY_BGS,
  we as PLAY_ME,
  qe as PLAY_MOVIE,
  Te as PLAY_SE,
  ct as PLUGIN_COMMAND_MV,
  dt as PLUGIN_COMMAND_MZ,
  Be as RECOVER_ALL,
  Cr as REGULAR_PARAM_AGI,
  Rr as REGULAR_PARAM_ATK,
  Fr as REGULAR_PARAM_DEF,
  Mr as REGULAR_PARAM_LUK,
  jr as REGULAR_PARAM_MATK,
  qr as REGULAR_PARAM_MAX_HP,
  Ar as REGULAR_PARAM_MAX_MP,
  Dr as REGULAR_PARAM_MDEF,
  Pe as RESUME_BGM,
  ot as RETURN_TO_TITLE_SCREEN,
  ge as ROTATE_PICTURE,
  aa as ROUTE_CHANGE_BLEND_MODE,
  Wt as ROUTE_CHANGE_FREQ,
  ea as ROUTE_CHANGE_IMAGE,
  ta as ROUTE_CHANGE_OPACITY,
  Ot as ROUTE_CHANGE_SPEED,
  $t as ROUTE_DIR_FIX_OFF,
  _t as ROUTE_DIR_FIX_ON,
  ut as ROUTE_END,
  St as ROUTE_JUMP,
  Nt as ROUTE_MOVE_AWAY,
  Tt as ROUTE_MOVE_BACKWARD,
  yt as ROUTE_MOVE_DOWN,
  wt as ROUTE_MOVE_FORWARD,
  gt as ROUTE_MOVE_LEFT,
  bt as ROUTE_MOVE_LOWER_L,
  vt as ROUTE_MOVE_LOWER_R,
  Pt as ROUTE_MOVE_RANDOM,
  ft as ROUTE_MOVE_RIGHT,
  xt as ROUTE_MOVE_TOWARD,
  ht as ROUTE_MOVE_UP,
  It as ROUTE_MOVE_UPPER_L,
  kt as ROUTE_MOVE_UPPER_R,
  ra as ROUTE_PLAY_SE,
  ia as ROUTE_SCRIPT,
  Kt as ROUTE_STEP_ANIME_OFF,
  Yt as ROUTE_STEP_ANIME_ON,
  Vt as ROUTE_SWITCH_OFF,
  Bt as ROUTE_SWITCH_ON,
  Zt as ROUTE_THROUGH_OFF,
  Ut as ROUTE_THROUGH_ON,
  Qt as ROUTE_TRANSPARENT_OFF,
  Jt as ROUTE_TRANSPARENT_ON,
  Mt as ROUTE_TURN_180D,
  Ct as ROUTE_TURN_90D_L,
  Dt as ROUTE_TURN_90D_R,
  zt as ROUTE_TURN_90D_R_L,
  Ht as ROUTE_TURN_AWAY,
  At as ROUTE_TURN_DOWN,
  Rt as ROUTE_TURN_LEFT,
  Et as ROUTE_TURN_RANDOM,
  Ft as ROUTE_TURN_RIGHT,
  Lt as ROUTE_TURN_TOWARD,
  jt as ROUTE_TURN_UP,
  qt as ROUTE_WAIT,
  Xt as ROUTE_WALK_ANIME_OFF,
  Gt as ROUTE_WALK_ANIME_ON,
  ke as SAVE_BGM,
  mt as SCRIPT_EVAL,
  pt as SCRIPT_EVAL_BODY,
  J as SCROLL_MAP,
  h as SELECT_ITEM,
  Z as SET_EVENT_LOCATION,
  Q as SET_MOVEMENT_ROUTE,
  U as SET_VEHICLE_LOCATION,
  be as SET_WEATHER_EFFECT,
  de as SHAKE_SCREEN,
  Ce as SHOP_PROCESSING,
  Me as SHOP_PROCESSING_BODY,
  ae as SHOW_ANIMATION,
  re as SHOW_BALLOON_ICON,
  et as SHOW_BATTLE_ANIMATION,
  y as SHOW_CHOICES,
  g as SHOW_CHOICES_ITEM,
  l as SHOW_MESSAGE,
  u as SHOW_MESSAGE_BODY,
  ue as SHOW_PICTURE,
  b as SHOW_SCROLLING_TEXT,
  v as SHOW_SCROLLING_TEXT_BODY,
  P as SKIP,
  Ts as SPECIAL_EFFECT_ESCAPE,
  _r as SPECIAL_PARAM_EXR,
  Kr as SPECIAL_PARAM_FDR,
  Br as SPECIAL_PARAM_GRD,
  Wr as SPECIAL_PARAM_MCR,
  Yr as SPECIAL_PARAM_MDR,
  Xr as SPECIAL_PARAM_PDR,
  Or as SPECIAL_PARAM_PHA,
  Vr as SPECIAL_PARAM_REC,
  Gr as SPECIAL_PARAM_TCR,
  Hr as SPECIAL_PARAM_TGR,
  vi as SRC_COLOR,
  an as SRC_DATA_ACTOR,
  cn as SRC_DATA_ARMOR,
  dn as SRC_DATA_CLASS,
  ln as SRC_DATA_COMMON_EVNET,
  sn as SRC_DATA_ENEMY,
  mn as SRC_DATA_ITEMS,
  rn as SRC_DATA_MAP,
  on as SRC_DATA_SKILL,
  nn as SRC_DATA_STATE,
  un as SRC_DATA_TROOP,
  pn as SRC_DATA_WEAPON,
  Se as STOP_SE,
  fe as TINT_PICTURE,
  pe as TINT_SCREEN,
  sr as TRAIT_ACTION_PLUS,
  Xa as TRAIT_ATTACK_ELEMENT,
  $a as TRAIT_ATTACK_SKILL,
  Ka as TRAIT_ATTACK_SPEED,
  Ya as TRAIT_ATTACK_STATE,
  _a as TRAIT_ATTACK_TIMES,
  or as TRAIT_COLLAPSE_TYPE,
  Ha as TRAIT_DEBUFF_RATE,
  La as TRAIT_ELEMENT_RATE,
  tr as TRAIT_EQUIP_ARMOR_TYPE,
  ar as TRAIT_EQUIP_LOCK,
  rr as TRAIT_EQUIP_SEAL,
  er as TRAIT_EQUIP_WEAPON_TYPE,
  Oa as TRAIT_PARAM,
  mr as TRAIT_PARTY_ABILITY,
  Ja as TRAIT_SKILL_ADD,
  Qa as TRAIT_SKILL_SEAL,
  Ua as TRAIT_SKILL_TYPE_ADD,
  Za as TRAIT_SKILL_TYPE_SEAL,
  ir as TRAIT_SLOT_TYPE,
  Ga as TRAIT_SPARAM,
  nr as TRAIT_SPECIAL_FLAG,
  Ba as TRAIT_STATE_RATE,
  Va as TRAIT_STATE_RESIST,
  Wa as TRAIT_XPARAM,
  $ as TRANSFER_PLAYER,
  le as WAIT,
  Li as applyFormatRule,
  Sm as buildReferenceItemSources,
  pp as cloneChoices,
  Dp as cloneEventCommand,
  jp as cloneParameters,
  yr as collapsOptionsToArray,
  Ni as compileFormatRule,
  Am as compileItemEffectDisplayData,
  qm as compileTraitDisplayData,
  Um as convertCommentArrayToObject,
  i as createActorControlChars,
  t as createControlCharFormat,
  lt as createEventCommand,
  Ks as createNoteEntity,
  s as createSystemVariableControlChars,
  ha as defineGameDataSources,
  qo as defineSystemItems,
  ur as defineTraitCollapseType,
  wr as defineTraitExtraParam,
  hi as defineTraitItems,
  ii as defineTraitPartyAbility,
  zr as defineTraitRegularParam,
  ci as defineTraitSpecialFlag,
  $r as defineTraitSpecialParam,
  Ai as detectFormatErrors,
  Rm as domainNames,
  Sr as extraParamName,
  Tr as extraParamsToArray,
  Ss as formatItemEffectText,
  Vi as formatTraitText,
  Gm as fromArrayCommonEvent,
  Ym as fromArrayControlSwitches,
  tp as fromArrayInputNumber,
  np as fromArraySetupChoice,
  ip as fromArraySetupChoiceItem,
  dp as fromArrayShowMessageHeader,
  a as fromStringArray,
  Fp as getActorValue,
  mo as getArmorCategoryEnabled,
  To as getArmorTypes,
  r as getControlChars,
  Po as getElementTypes,
  Rp as getEnemyValue,
  ao as getEquipCommandEnabled,
  xo as getEquipTypes,
  io as getFormationCommandEnabled,
  no as getItemCategoryEnabled,
  eo as getItemCommandEnabled,
  po as getKeyItemCategoryEnabled,
  Qs as getNoteValue,
  Ho as getParamNames,
  so as getSaveCommandEnabled,
  to as getSkillCommandEnabled,
  No as getSkillTypes,
  ro as getStatusCommandEnabled,
  So as getSwitches,
  ko as getVariableNames,
  oo as getWeaponCategoryEnabled,
  wo as getWeaponTypes,
  Bd as isAudioCommand,
  Mp as isCloneableCommand,
  Lp as isCommandChangeActorText,
  ic as isCommandCommentBody,
  rc as isCommandCommentHeader,
  Yp as isCommandCommonEvent,
  Jp as isCommandInputNumber,
  Op as isCommandNonParam,
  nc as isCommandScriptBody,
  sc as isCommandScriptHeader,
  Bp as isCommandScrollTextHead,
  Up as isCommandShowChoiceItem,
  _p as isCommandShowChoices,
  ec as isCommandShowMessage,
  tc as isCommandShowMessageBody,
  ac as isCommandShowScrollingTextBody,
  Gp as isCommandTextBody,
  Gd as isDataActor,
  _d as isDataArmor2,
  Jd as isDataClass,
  Os as isDataItem,
  fa as isDataMap,
  ga as isDataMapInfo,
  Gs as isDataSkill,
  gm as isDataSystem,
  Ys as isDataWeapon,
  Un as isValidNumber,
  _n as labelsRegistry,
  Ra as makeActorData,
  ja as makeArmorData,
  Cm as makeAudioCommand,
  Zn as makeAudioFileParams,
  fo as makeBooleanOptions,
  Da as makeClassData,
  Mm as makeCommandAudioAny,
  Fm as makeCommandChangeActorName,
  jm as makeCommandChangeActorNickName,
  Dm as makeCommandChangeActorProfile,
  Bm as makeCommandChangeBattleBGM,
  Om as makeCommandChangeDefeatME,
  Vm as makeCommandChangeVictoryME,
  Jm as makeCommandCommentBody,
  Zm as makeCommandCommentHeader,
  Wm as makeCommandCommonEvent,
  _m as makeCommandControlSwitches,
  ap as makeCommandInputNumber,
  zm as makeCommandPlayBGM,
  Em as makeCommandPlayBGS,
  Lm as makeCommandPlayME,
  Hm as makeCommandPlaySE,
  fp as makeCommandScriptArray,
  gp as makeCommandScriptBody,
  yp as makeCommandScriptHeader,
  mp as makeCommandSetupChoice,
  rp as makeCommandShowChoiceItem,
  cp as makeCommandShowMessage,
  up as makeCommandShowMessageBody,
  $m as makeCommentArray,
  Qm as makeCommentCommandArray,
  n as makeCommonEventData,
  Aa as makeDamage,
  zo as makeDataNames,
  Ca as makeDropItem,
  Oo as makeEditorSetting,
  Ma as makeEnemyAction,
  za as makeEnemyData,
  c as makeEventPageCondition,
  vo as makeGameInitial,
  co as makeItemCategories,
  lo as makeItemCategoriesFromArray,
  Fs as makeItemData,
  ma as makeMapData,
  sa as makeMapEvent,
  na as makeMapEventIamge,
  oa as makeMapEventPage,
  pa as makeMapInfoData,
  uo as makeMenuCommandsEnabled,
  yo as makeMenuCommandsEnabledFromArray,
  Lo as makeParamNamesArray,
  _s as makeRegex,
  js as makeSkillData,
  Jn as makeSoundsArray,
  Qn as makeSoundsObject,
  Ea as makeStateData,
  $n as makeSystemAdvanced,
  km as makeSystemData,
  Bo as makeTitleCommandWindow,
  o as makeTroopData,
  p as makeTroopEventConditions,
  m as makeTroopMember,
  Vo as makeVehicleData,
  Oi as makeWeaponData,
  Di as mergeItemsSource,
  Fa as normalizeDataActor,
  si as partyAbilityToArray,
  Cd as pluginSourceToJSON,
  Us as readNote,
  $s as readNoteObject,
  Lr as regularParamName,
  Er as regularParamsToArray,
  Js as replaceNote,
  ns as resolveItemEffectLabels,
  yn as resolveTraitLabels,
  en as setNoteValue,
  di as specialFlagToArray,
  Zr as specialParamName,
  Ur as specialParamsToArray,
  Md as structToJSONSchema,
  Xm as toArrayCommonEvent,
  Km as toArrayControlSwitches,
  ep as toArrayInputNumber,
  qp as toArrayOperandActorStatus,
  xp as toArrayOperandConstant,
  Ap as toArrayOperandEnemyStatus,
  Sp as toArrayOperandItemData,
  wp as toArrayOperandRandom,
  Tp as toArrayOperandScript,
  Np as toArrayOperandVariable,
  op as toArraySetupChoice,
  sp as toArraySetupChoiceItem,
  lp as toArrayShowMessageHeader
};
//# sourceMappingURL=rpgTypes.es.js.map
