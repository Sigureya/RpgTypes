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
}), l = 0, c = 101, u = 401, y = 102, g = 402, b = 103, I = 104, f = 105, h = 405, v = 108, k = 408, x = 109, T = 111, S = 411, w = 112, N = 113, P = 115, R = 117, q = 118, A = 119, j = 121, C = 122, D = 123, M = 124, z = 125, E = 126, F = 127, B = 128, H = 129, L = 132, V = 133, W = 134, O = 135, G = 136, X = 137, Y = 138, K = 139, $ = 140, _ = 201, U = 202, Z = 203, J = 204, Q = 205, ee = 206, te = 211, ae = 212, re = 213, ie = 214, ne = 216, oe = 217, me = 221, se = 222, pe = 223, de = 224, le = 225, ce = 230, ue = 231, ye = 232, ge = 233, be = 234, Ie = 235, fe = 236, he = 241, ve = 242, ke = 243, xe = 244, Te = 245, Se = 246, we = 249, Ne = 250, Pe = 251, Re = 261, qe = 282, Ae = 283, je = 284, Ce = 285, De = 301, Me = 302, ze = 605, Ee = 303, Fe = 311, Be = 312, He = 313, Le = 314, Ve = 315, We = 320, Oe = 321, Ge = 322, Xe = 323, Ye = 324, Ke = 325, $e = 331, _e = 332, Ue = 333, Ze = 334, Je = 335, Qe = 336, et = 337, tt = 339, at = 340, rt = 351, it = 342, nt = 352, ot = 353, mt = 354, st = 355, pt = 655, dt = 356, lt = 357, ct = (e2, t2, a2 = 0) => ({
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
}, la = {
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
}, ca = new e({ strict: true }), ua = ca.compile({
  type: "object",
  required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: {
    type: "integer"
  }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } }
}), ya = ca.compile(la), ga = (e2) => ua(e2), ba = (e2) => ya(e2), Ia = (e2, t2) => [fa(e2.skills, t2), ha(e2.actors, t2), va(e2.states, t2), ka(e2.armors, t2), xa(e2.classes, t2), Ta(e2.enemies, t2), Sa(e2.items, t2), wa(e2.weapons, t2), Na(e2.commonEvents, t2)], fa = (e2, t2) => ({
  label: t2.skill.title,
  items: e2,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), ha = (e2, t2) => ({
  items: e2,
  label: t2.actor.title,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), va = (e2, t2) => ({ items: e2, label: t2.state.title, source: { author: "rmmz", module: "data", kind: "state" } }), ka = (e2, t2) => ({ items: e2, label: t2.armor.title, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), xa = (e2, t2) => ({ items: e2, label: t2.class.title, source: { author: "rmmz", module: "data", kind: "class" } }), Ta = (e2, t2) => ({ items: e2, label: t2.enemy.title, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), Sa = (e2, t2) => ({ items: e2, label: t2.item.title, source: { author: "rmmz", module: "data", kind: "item" } }), wa = (e2, t2) => ({ items: e2, label: t2.weapon.title, source: {
  author: "rmmz",
  module: "data",
  kind: "weapon"
} }), Na = (e2, t2) => ({ items: e2, label: t2.commonEvent.title, source: { author: "rmmz", module: "data", kind: "common_event" } }), Pa = {
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
}, qa = (e2 = {}) => ({ type: e2.type ?? 0, elementId: e2.elementId ?? 0, formula: e2.formula ?? "", variance: e2.variance ?? 0, critical: e2.critical ?? false }), Aa = (e2 = {}) => ({
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
}), Ca = (e2 = {}) => ({
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
}), Da = (e2 = {}) => ({ name: e2.name ?? "", id: e2.id ?? 0, traits: [], note: e2.note ?? "", params: [0, 0, 0, 0, 0, 0, 0, 0], learnings: e2.learnings ?? [], expParams: e2.expParams ?? [] }), Ma = (e2 = {}) => ({
  dataId: e2.dataId ?? 0,
  denominator: e2.denominator ?? 0,
  kind: e2.kind ?? 0
}), za = (e2 = {}) => ({
  conditionParam1: e2.conditionParam1 ?? 0,
  conditionParam2: e2.conditionParam2 ?? 0,
  conditionType: e2.conditionType ?? 0,
  rating: e2.rating ?? 0,
  skillId: e2.skillId ?? 0
}), Ea = (e2 = {}) => {
  var _a2;
  return {
    name: e2.name ?? "",
    id: e2.id ?? 0,
    battlerName: e2.battlerName ?? "",
    battlerHue: e2.battlerHue ?? 0,
    dropItems: ((_a2 = e2.dropItems) == null ? void 0 : _a2.map(() => Ma())) ?? [],
    exp: e2.exp ?? 0,
    gold: e2.gold ?? 0,
    traits: [],
    note: e2.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, Fa = (e2 = {}) => ({
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
}), Ba = 11, Ha = 12, La = 13, Va = 14, Wa = 21, Oa = 22, Ga = 23, Xa = 31, Ya = 32, Ka = 33, $a = 34, _a = 35, Ua = 41, Za = 42, Ja = 43, Qa = 44, er = 51, tr = 52, ar = 53, rr = 54, ir = 55, nr = 61, or = 62, mr = 63, sr = 64, pr = 0, dr = 1, lr = 2, cr = 3, ur = (e2, t2) => ({
  items: yr(e2.options, t2),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), yr = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, { id: 2, name: e2.instantCollaps }, {
  id: 3,
  name: e2.noneCollaps
}], gr = 0, br = 1, Ir = 2, fr = 3, hr = 4, vr = 5, kr = 6, xr = 7, Tr = 8, Sr = 9, wr = (e2) => ({
  items: Nr(e2.options),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "xparams" }
}), Nr = (e2) => [{ id: 0, name: e2.hitRate }, { id: 1, name: e2.evasionRate }, { id: 2, name: e2.criticalRate }, { id: 3, name: e2.criticalEvasionRate }, { id: 4, name: e2.magicEvasionRate }, {
  id: 5,
  name: e2.magicReflectionRate
}, { id: 6, name: e2.counterAttackRate }, { id: 7, name: e2.hpRegenerationRate }, { id: 8, name: e2.mpRegenerationRate }, { id: 9, name: e2.tpRegenerationRate }], Pr = (e2, t2) => {
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
}, Rr = 0, qr = 1, Ar = 2, jr = 3, Cr = 4, Dr = 5, Mr = 6, zr = 7, Er = (e2) => ({ items: Fr(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "params" } }), Fr = (e2) => [{
  id: 0,
  name: e2.maxHp
}, { id: 1, name: e2.maxMp }, { id: 2, name: e2.atk }, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, { id: 5, name: e2.mdef }, { id: 6, name: e2.agi }, { id: 7, name: e2.luk }], Br = (e2, t2) => {
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
}, Hr = 0, Lr = 1, Vr = 2, Wr = 3, Or = 4, Gr = 5, Xr = 6, Yr = 7, Kr = 8, $r = 9, _r = (e2) => ({ items: Ur(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "sparams" } }), Ur = (e2) => [{
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
  items: ni(e2.options),
  label: e2.title,
  source: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), ni = (e2) => [{ id: 0, name: e2.encounterHalf }, { id: 1, name: e2.encounterNone }, { id: 2, name: e2.cancelSurprise }, {
  id: 3,
  name: e2.raisePreemptive
}, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], oi = 0, mi = 1, si = 2, pi = 3, di = (e2) => ({ items: li(e2.options), label: e2.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), li = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
  id: 3,
  name: e2.preventEscape
}], ci = "{name}", ui = "{name} * {value}%", yi = "{name} + {value}%", gi = "{value}", bi = {
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
      format: ci,
      options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
    },
    collaps: { title: "消滅エフェクト", format: ci, options: {
      bossCollaps: "ボス崩壊",
      instantCollaps: "即時崩壊",
      noneCollaps: "崩壊なし"
    } },
    partyAbility: { title: "パーティ能力", format: ci, options: {
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
      format: ci
    },
    attackElement: { title: "攻撃属性", format: ci },
    attackState: { title: "攻撃ステート", format: yi },
    attackSpeed: { title: "攻撃速度補正", format: gi },
    attackTimes: {
      title: "攻撃追加回数",
      format: gi
    },
    actionPlus: { title: "行動追加", format: ui },
    attackSkill: { title: "攻撃スキル", format: ci },
    equipWeaponType: { title: "装備武器タイプ", format: ci },
    equipArmorType: { title: "装備防具タイプ", format: ci },
    equipLock: {
      title: "装備固定",
      format: ci
    },
    equipSeal: { title: "装備封印", format: ci },
    slotType: { title: "スロットタイプ", format: ci },
    skillAdd: { title: "スキル追加", format: ci },
    skillSeal: { title: "スキルタイプ封印", format: ci },
    skillTypeAdd: { title: "スキルタイプ追加", format: ci },
    skillTypeSeal: { title: "スキルタイプ封印", format: ci }
  }
}, Ii = (e2, t2) => [Er(e2.regularParam), wr(e2.extraParam), _r(e2.specialParam), ur(e2.collaps, t2), di(e2.specialFlag), ii(e2.partyAbility)], fi = "Trait", hi = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }
}, vi = "rmmz", ki = "colors", xi = (e2) => e2.map((e3) => ({
  dataKey: e3,
  placeHolder: `{${e3}}`
})), Ti = (e2) => ({
  dataKey: e2.dataIdKey,
  placeHolder: `{${e2.dataIdKey}}`,
  sourceId: { author: e2.sourceId.author, kind: e2.sourceId.kind, module: e2.sourceId.module }
}), Si = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, wi = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : [...t2];
}, Ni = (e2, t2 = []) => {
  return {
    itemMappers: [...wi(e2), ...t2].map(Pi),
    fallbackFormat: { text: Ri(e2), label: qi(e2) },
    properties: (a2 = e2.placeHolder ?? {}, {
      numbers: a2.numbers ? xi(a2.numbers) : [],
      strings: a2.strings ? xi(a2.strings) : []
    }),
    arrayIndex: e2.arrayIndex ? e2.arrayIndex.map(Ti) : []
  };
  var a2;
}, Pi = (e2) => ({ placeHolder: `{${e2.placeHolder}}`, kindKey: e2.kindKey, dataIdKey: e2.dataIdKey }), Ri = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const t2 = ((e3) => {
    var _a2, _b, _c;
    return /* @__PURE__ */ new Set([...((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? [], ...((_b = e3.placeHolder) == null ? void 0 : _b.strings) ?? [], ...((_c = e3.arrayIndex) == null ? void 0 : _c.map((e4) => e4.dataIdKey)) ?? []]);
  })(e2);
  return 0 === t2.size ? "value not found" : Array.from(t2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, qi = (e2) => {
  var _a2;
  return void 0 !== ((_a2 = e2.fallbackFormat) == null ? void 0 : _a2.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, Ai = (e2, t2, a2) => {
  const r2 = t2[a2.dataKey];
  return null == r2 ? e2 : e2.replaceAll(a2.placeHolder, String(r2));
}, ji = (e2, t2, a2, r2 = { placeHolderMaxLength: 50, formatMaxLength: 200 }) => e2.pattern.length >= r2.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{
  message: a2.formatVeryLong,
  reason: e2.pattern.slice(0, r2.formatMaxLength)
}], semanticErrors: [] } : {
  formatLabel: e2.label,
  semanticErrors: Di(e2, t2, a2),
  syntaxErrors: Ci(e2.pattern, t2, a2, r2.placeHolderMaxLength)
}, Ci = (e2, t2, a2, r2) => {
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
}, Di = (e2, t2, a2) => wi(t2).reduce((t3, r2) => {
  const i2 = Mi(e2, r2, a2);
  return i2 && t3.push(i2), t3;
}, []), Mi = (e2, t2, a2) => {
  const r2 = e2.pattern.includes(t2.placeHolder), i2 = !!e2.dataSource;
  return !r2 && i2 ? { message: a2.missingName, reason: t2.placeHolder } : r2 && !i2 ? { message: a2.missingSourceId, reason: t2.placeHolder } : void 0;
}, zi = (e2, t2) => {
  const a2 = Bi(t2);
  return e2.reduce((e3, t3) => {
    const r2 = Ei(t3, a2);
    return e3.set(t3.kindId, r2), e3;
  }, /* @__PURE__ */ new Map());
}, Ei = (e2, t2) => {
  const a2 = Fi(e2.dataSource, t2);
  return { patternCompiled: e2.pattern, label: e2.label, data: a2 ? a2.items : void 0 };
}, Fi = (e2, t2) => {
  if (e2) return t2.get(Si(e2));
}, Bi = (e2) => e2.reduce((e3, t2) => {
  const a2 = { items: Hi(t2.items), source: t2.source, label: t2.label };
  return e3.set(Si(t2.source), a2), e3;
}, /* @__PURE__ */ new Map()), Hi = (e2) => e2.map((e3) => ({
  id: e3.id,
  name: e3.name
})), Li = (e2, t2, a2, r2, i2) => {
  const n2 = ((e3, t3, a3) => {
    const r3 = a3.properties.numbers.reduce((e4, a4) => Ai(e4, t3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => Ai(e4, t3, a4), r3);
  })(r2, e2, a2);
  return t2 ? Vi(n2, e2, a2, t2, i2) : n2;
}, Vi = (e2, t2, a2, r2, i2) => {
  const n2 = ((e3, t3) => {
    const a3 = ((e4, t4) => {
      const a4 = t4[e4];
      return a4 && a4.id === e4 ? a4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return a3 ? a3.name : `?data[${t3}]`;
  })(r2, i2(t2));
  return a2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, n2), e2);
}, Wi = {
  itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" },
  placeHolder: { numbers: ["value"] }
}, Oi = (e2, t2, a2) => {
  const r2 = Ni(Wi);
  return Li(t2, a2, r2, e2.pattern, (e3) => e3.dataId);
}, Gi = (e2 = {}) => ({
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
}), Xi = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Yi = 0, Ki = 1, $i = 2, _i = 11, Ui = 12, Zi = 13, Ji = 21, Qi = 22, en = 31, tn = 32, an = 33, rn = 34, nn = 41, on = 42, mn = 43, sn = 44, pn = (e2) => [cn(e2), un(e2), yn(e2), gn(e2), bn(e2), In(e2), fn(e2), hn(e2), vn(e2), ln(e2), kn(e2), xn(e2), Tn(e2)], dn = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), ln = (e2) => dn(41, e2.special), cn = (e2) => dn(11, e2.recoverHp), un = (e2) => dn(12, e2.recoverMp), yn = (e2) => dn(13, e2.gainTp), gn = (e2) => dn(21, e2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), bn = (e2) => dn(22, e2.removeState, { author: "rmmz", module: "data", kind: "state" }), In = (e2) => dn(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), fn = (e2) => dn(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), hn = (e2) => dn(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), vn = (e2) => dn(34, e2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), kn = (e2) => dn(42, e2.grow, { author: "rmmz", module: "trait", kind: "params" }), xn = (e2) => dn(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), Tn = (e2) => dn(44, e2.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), Sn = "{name} {value1}%", wn = "{value1}% + {value2}", Nn = "{name} {value1}ターン", Pn = "{name}", Rn = { title: "使用効果", options: { addBuff: {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: Nn
}, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: Nn }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: wn }, grow: {
  desc: "成長効果",
  domainName: "成長効果",
  format: "{name} + {value1}"
}, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: Pn }, recoverHp: {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: wn
}, recoverMp: {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: wn
}, removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: Pn }, removeDebuff: {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: Pn
}, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: Sn }, special: { desc: "特殊効果", domainName: "特殊効果", format: Pn }, addState: {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: Sn
}, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: Pn } } }, qn = 0, An = (e2, t2, a2) => {
  const r2 = a2.find((e3) => e3.id === t2.dataId), i2 = r2 ? r2.name : "Unknown Item";
  return e2.pattern.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", i2);
}, jn = { title: "アイテム", options: { consumable: "消耗品" } }, Cn = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Dn = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Mn = (e2 = {}) => ({
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
}), zn = (e2 = {}) => ({
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
}), En = { type: "string" }, Fn = { type: "integer" }, Bn = { type: "integer", minimum: 0 }, Hn = {
  type: "object",
  properties: { type: { type: "integer" }, elementId: Bn, formula: En, variance: Fn, critical: { type: "boolean" } },
  required: ["type", "elementId", "formula", "variance", "critical"],
  additionalProperties: false
}, Ln = { type: "object", properties: { code: Fn, dataId: Bn, value1: Fn, value2: Fn }, required: ["code", "dataId", "value1", "value2"], additionalProperties: false }, Vn = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "message1", "message2", "messageType", "mpCost", "requiredWtypeId1", "requiredWtypeId2", "stypeId", "tpCost", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "note", "effects"],
  properties: {
    name: En,
    id: Bn,
    description: En,
    iconIndex: Bn,
    message1: En,
    message2: En,
    messageType: Bn,
    mpCost: Fn,
    requiredWtypeId1: Bn,
    requiredWtypeId2: Bn,
    stypeId: Bn,
    tpCost: Fn,
    animationId: Bn,
    hitType: Bn,
    occasion: { type: "integer" },
    repeats: Bn,
    scope: Fn,
    speed: Fn,
    successRate: Fn,
    tpGain: Fn,
    note: En,
    effects: { type: "array", items: Ln },
    damage: Hn
  },
  additionalProperties: false
}, Wn = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "note", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "consumable", "price", "effects"],
  properties: { name: En, id: Bn, description: En, iconIndex: Bn, note: En, animationId: Bn, hitType: Fn, occasion: Fn, repeats: Fn, scope: Fn, speed: Fn, successRate: Fn, tpGain: Fn, consumable: {
    type: "boolean"
  }, price: Bn, itypeId: Bn, effects: { type: "array", items: Ln }, damage: Hn }
}, On = new e({ strict: true }), Gn = On.compile(Wn), Xn = (e2) => Gn(e2), Yn = On.compile(Vn), Kn = (e2) => Yn(e2), $n = On.compile({
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
}), _n = (e2) => $n(e2), Un = On.compile({
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
}), Zn = (e2) => Un(e2), Jn = On.compile({ type: "object", required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"], properties: { name: {
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
} }, required: ["code", "dataId", "value"] } } } }), Qn = (e2) => Jn(e2), eo = On.compile({
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
}), to = (e2) => eo(e2), ao = On.compile({
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
}), ro = (e2) => ao(e2), io = On.compile({
  type: "object",
  required: ["name", "id", "note", "expParams", "params", "learnings", "traits"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, note: { type: "string" }, expParams: {
    type: "array",
    items: { type: "integer" }
  }, params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, {
    type: "integer"
  }], minItems: 8, maxItems: 8 }, learnings: { type: "array", items: {
    type: "object",
    properties: { level: { type: "integer" }, skillId: { type: "integer" }, note: { type: "string" } },
    required: ["level", "skillId"],
    additionalProperties: false
  } }, traits: { type: "array", items: {
    type: "object",
    properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } },
    required: ["code", "dataId", "value"],
    additionalProperties: false
  } } },
  additionalProperties: false
}), no = (e2) => io(e2), oo = (e2, t2) => `<${e2}:${t2}>`, mo = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, so = (e2, t2) => lo(e2.note, (a2, r2) => t2(a2, r2, e2)), po = (e2) => lo(e2, (e3, t2) => [e3, t2]), lo = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, co = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (e3, a2, r2) => {
    const i2 = t2(a2, r2);
    if (i2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return oo(a2, i2);
  });
}, uo = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return r2 ? r2[2] : void 0;
}, yo = (e2, t2, a2) => {
  const r2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(r2, (e3, r3) => r3 === t2 ? oo(r3, a2) : e3);
}, go = "data", bo = "actor", Io = "map", fo = "enemy", ho = "state", vo = "skill", ko = "item", xo = "weapon", To = "armor", So = "class", wo = "common_event", No = "troop", Po = (e2) => [Ro(e2.elementRate), qo(e2.debuffRate), Ao(e2.stateRate), jo(e2.stateResist), Co(e2.regularParam), Do(e2.extraParam), Mo(e2.specialParam), zo(e2.attackElement), Eo(e2.attackState), Fo(e2.attackSpeed), Bo(e2.attackTimes), Ho(e2.attackSkill), Lo(e2.skillTypeAdd), Vo(e2.skillTypeSeal), Wo(e2.skillAdd), Oo(e2.skillSeal), Go(e2.equipWeaponType), Xo(e2.equipArmorType), Yo(e2.equipLock), Ko(e2.equipSeal), $o(e2.slotType), _o(e2.actionPlus), Uo(e2.specialFlag), Zo(e2.collaps), Jo(e2.partyAbility)], Ro = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 11,
  dataSource: tm()
}), qo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), Ao = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 13,
  dataSource: Qo()
}), jo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 14, dataSource: Qo() }), Co = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), Do = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), Mo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), zo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 31, dataSource: tm() }), Eo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 32,
  dataSource: Qo()
}), Fo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 33 }), Bo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 34 }), Ho = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 35,
  dataSource: em()
}), Lo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 41, dataSource: am() }), Vo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 42,
  dataSource: am()
}), Wo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 43, dataSource: em() }), Oo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 44, dataSource: em() }), Go = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 51,
  dataSource: rm()
}), Xo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 52, dataSource: im() }), Yo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 53,
  dataSource: nm()
}), Ko = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 54, dataSource: nm() }), $o = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 55, dataSource: nm() }), _o = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 61
}), Uo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), Zo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Jo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), Qo = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), em = () => ({ author: "rmmz", module: "data", kind: "skill" }), tm = () => ({ author: "rmmz", module: "system", kind: "elements" }), am = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), rm = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), im = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), nm = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), om = {
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
}, mm = () => ({ rpg: { damage: Ra, data: Pa, traits: bi, itemEffect: Rn }, global: om }), sm = (e2 = {}) => ({
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
}), pm = (e2) => "number" == typeof e2 && !Number.isNaN(e2), dm = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
}), lm = (e2 = {}) => [dm(e2.cursor), dm(e2.ok), dm(e2.cancel), dm(e2.buzzer), dm(e2.equip), dm(e2.save), dm(e2.load), dm(e2.battleStart), dm(e2.escape), dm(e2.enemyAttack), dm(e2.enemyDamage), dm(e2.enemyCollapse), dm(e2.bossCollapes1), dm(e2.bossCollapes2), dm(e2.actorDamage), dm(e2.actorCollapse), dm(e2.playRecovery), dm(e2.playMiss), dm(e2.playEvasion), dm(e2.playMagicEvasion), dm(e2.playReflection), dm(e2.shop), dm(e2.useItem), dm(e2.useSkill)], cm = (e2) => ({
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
}), um = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }, ym = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: um, victoryMe: um, gameoverMe: um, titleBgm: um, defeatMe: um, sounds: {
    type: "array",
    items: um,
    minItems: 24,
    maxItems: 24
  } }
}, gm = {
  type: "object",
  additionalProperties: false,
  required: ["magicSkills", "battleSystem"],
  properties: { magicSkills: {
    type: "array",
    items: { type: "number" },
    minItems: 0,
    uniqueItems: true
  }, battleSystem: { type: "number" } }
}, bm = (e2) => e2.menuCommands[0], Im = (e2) => e2.menuCommands[1], fm = (e2) => e2.menuCommands[2], hm = (e2) => e2.menuCommands[3], vm = (e2) => e2.menuCommands[4], km = (e2) => e2.menuCommands[5], xm = (e2) => e2.itemCategories[0], Tm = (e2) => e2.itemCategories[1], Sm = (e2) => e2.itemCategories[2], wm = (e2) => e2.itemCategories[3], Nm = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], Pm = (e2) => ({
  item: e2[0],
  weapon: e2[1],
  armor: e2[2],
  keyItem: e2[3]
}), Rm = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], qm = (e2) => ({
  item: e2[0],
  skill: e2[1],
  equip: e2[2],
  status: e2[3],
  formation: e2[4],
  save: e2[5]
}), Am = { required: ["itemCategories", "menuCommands"], additionalProperties: false, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, jm = (e2 = {}) => ({
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
}), Cm = { type: "boolean" }, Dm = {
  type: "object",
  additionalProperties: false,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: Cm,
    optDisplayTp: Cm,
    optDrawTitle: Cm,
    optExtraExp: Cm,
    optFloorDeath: Cm,
    optFollowers: Cm,
    optKeyItemsNumber: Cm,
    optSideView: Cm,
    optSlipDeath: Cm,
    optTransparent: Cm,
    optMessageSkip: Cm,
    optSplashScreen: Cm
  }
}, Mm = (e2 = {}) => ({
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0,
  partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1]
}), zm = {
  additionalProperties: false,
  type: "object",
  required: ["startMapId", "startX", "startY", "partyMembersArray"],
  properties: { startMapId: { type: "integer", minimum: 0 }, startX: { type: "integer", minimum: 0 }, startY: { type: "integer", minimum: 0 }, partyMembersArray: { type: "array", items: {
    type: "integer",
    minimum: 0
  } } }
}, Em = { additionalProperties: false, type: "object", required: ["tileSize", "faceSize", "iconSize"], properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: {
  type: "integer",
  minimum: 0
}, iconSize: { type: "integer", minimum: 0 } } }, Fm = { additionalProperties: false, type: "object", required: ["title1Name", "title2Name"], properties: { title1Name: { type: "string" }, title2Name: {
  type: "string"
} } }, Bm = { type: "object", additionalProperties: false, required: ["locale", "versionId", "windowTone"], properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
  type: "array",
  items: { type: "number" },
  minItems: 4,
  maxItems: 4
} } }, Hm = (e2, t2) => ({
  name: e2,
  id: t2
}), Lm = (e2) => e2.variables.map(Hm), Vm = (e2) => e2.elements.map(Hm), Wm = (e2) => e2.equipTypes.map(Hm), Om = (e2) => e2.skillTypes.map(Hm), Gm = (e2) => e2.weaponTypes.map(Hm), Xm = (e2) => e2.armorTypes.map(Hm), Ym = (e2) => e2.switches.map(Hm), Km = (e2, t2) => [_m(e2, t2), Um(e2, t2), es(e2, t2), Zm(e2, t2), $m(e2, t2), Jm(e2, t2), Qm(e2, t2)], $m = (e2, t2) => ({
  items: Xm(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), _m = (e2, t2) => ({ items: Vm(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Um = (e2, t2) => ({ items: Wm(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Zm = (e2, t2) => ({
  items: Om(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), Jm = (e2, t2) => ({ items: Lm(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Qm = (e2, t2) => ({ items: Ym(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), es = (e2, t2) => ({
  items: Gm(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), ts = { type: "array", items: { type: "string" } }, as = {
  additionalProperties: false,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: ts,
    skillTypes: ts,
    elements: ts,
    variables: ts,
    equipTypes: ts,
    switches: ts,
    armorTypes: ts
  }
}, rs = (e2) => ({
  armorTypes: is(e2.armorTypes),
  elements: is(e2.elements),
  equipTypes: is(e2.equipTypes),
  weaponTypes: is(e2.weaponTypes),
  skillTypes: is(e2.skillTypes),
  variables: is(e2.variables),
  switches: is(e2.switches)
}), is = (e2) => e2 ? [...e2] : [], ns = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], os = (e2) => ({
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
}), ms = (e2) => ss(e2, ""), ss = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], ps = (e2) => ({
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
}), ds = (e2, t2) => "string" == typeof e2 ? e2 : t2, ls = (e2) => ({
  actionFailure: ds(e2.actionFailure, "Action failed."),
  actorDamage: ds(e2.actorDamage, "%1 took %2 damage."),
  actorRecovery: ds(e2.actorRecovery, "%1 recovered %2 HP."),
  actorGain: ds(e2.actorGain, "%1 gained %2."),
  actorLoss: ds(e2.actorLoss, "%1 lost %2."),
  actorDrain: ds(e2.actorDrain, "%1 drained %2 HP."),
  actorNoDamage: ds(e2.actorNoDamage, "%1 was not damaged."),
  actorNoHit: ds(e2.actorNoHit, "%1 was not hit."),
  alwaysDash: ds(e2.alwaysDash, "Always dash."),
  bgmVolume: ds(e2.bgmVolume, "BGM volume"),
  bgsVolume: ds(e2.bgsVolume, "BGS volume"),
  commandRemember: ds(e2.commandRemember, "Command remember."),
  criticalToActor: ds(e2.criticalToActor, "%1 dealt %2 damage to %3."),
  criticalToEnemy: ds(e2.criticalToEnemy, "%1 dealt %2 damage to %3."),
  counterAttack: ds(e2.counterAttack, "%1 countered!"),
  debuffAdd: ds(e2.debuffAdd, "%1's %2 was lowered."),
  defeat: ds(e2.defeat, "Defeat."),
  enemyDamage: ds(e2.enemyDamage, "%1 took %2 damage."),
  enemyDrain: ds(e2.enemyDrain, "%1 drained %2 HP."),
  enemyGain: ds(e2.enemyGain, "%1 gained %2."),
  enemyLoss: ds(e2.enemyLoss, "%1 lost %2."),
  enemyNoDamage: ds(e2.enemyNoDamage, "%1 was not damaged."),
  enemyNoHit: ds(e2.enemyNoHit, "%1 was not hit."),
  enemyRecovery: ds(e2.enemyRecovery, "%1 recovered %2 HP."),
  evasion: ds(e2.evasion, "%1 evaded the attack!"),
  autosave: ds(e2.autosave, "Autosave"),
  escapeFailure: ds(e2.escapeFailure, "Escape failed."),
  escapeStart: ds(e2.escapeStart, "%1 started to escape!"),
  emerge: ds(e2.emerge, "%1 appeared!"),
  expNext: ds(e2.expNext, "Next level in %1 EXP."),
  expTotal: ds(e2.expTotal, "Total EXP: %1"),
  file: ds(e2.file, "File"),
  buffAdd: ds(e2.buffAdd, "%1's %2 was raised."),
  buffRemove: ds(e2.buffRemove, "%1's %2 was lowered."),
  obtainExp: ds(e2.obtainExp, "%1 EXP obtained."),
  obtainGold: ds(e2.obtainGold, "%1 gold obtained."),
  obtainItem: ds(e2.obtainItem, "%1 obtained %2."),
  obtainSkill: ds(e2.obtainSkill, "%1 learned %2."),
  levelUp: ds(e2.levelUp, "%1 leveled up!"),
  partyName: ds(e2.partyName, "Party"),
  loadMessage: ds(e2.loadMessage, "Load %1?"),
  meVolume: ds(e2.meVolume, "ME volume"),
  possession: ds(e2.possession, "Possession"),
  preemptive: ds(e2.preemptive, "%1 attacked first!"),
  saveMessage: ds(e2.saveMessage, "Save %1?"),
  seVolume: ds(e2.seVolume, "SE volume"),
  magicEvasion: ds(e2.magicEvasion, "%1 evaded the magic!"),
  magicReflection: ds(e2.magicReflection, "%1 reflected the magic!"),
  substitute: ds(e2.substitute, "%1 took the hit!"),
  surprise: ds(e2.surprise, "%1 surprised the enemy!"),
  touchUI: ds(e2.touchUI, "Touch UI"),
  useItem: ds(e2.useItem, "%1 used %2."),
  victory: ds(e2.victory, "Victory!")
}), cs = { type: "string" }, us = {
  type: "string",
  nullable: true
}, ys = { type: "string" }, gs = { required: ["terms", "currencyUnit", "gameTitle"], additionalProperties: false, type: "object", properties: {
  currencyUnit: { type: "string" },
  gameTitle: { type: "string" },
  terms: { additionalProperties: false, type: "object", required: ["messages", "commands", "basic", "params"], properties: { messages: {
    type: "object",
    additionalProperties: false,
    required: ["actionFailure", "actorDamage", "actorNoDamage", "actorRecovery", "actorGain", "actorLoss", "actorDrain", "alwaysDash", "bgmVolume", "bgsVolume", "commandRemember", "criticalToActor", "criticalToEnemy", "counterAttack", "debuffAdd", "defeat", "enemyDamage", "enemyNoDamage", "enemyRecovery", "enemyGain", "enemyLoss", "enemyDrain", "evasion", "expNext", "expTotal", "escapeFailure", "escapeStart", "file", "loadMessage", "meVolume", "magicEvasion", "magicReflection", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "partyName", "preemptive", "saveMessage", "seVolume", "substitute", "touchUI", "victory", "useItem"],
    properties: {
      actionFailure: ys,
      actorDamage: ys,
      actorNoDamage: ys,
      actorRecovery: ys,
      actorGain: ys,
      actorLoss: ys,
      actorDrain: ys,
      alwaysDash: ys,
      bgmVolume: ys,
      bgsVolume: ys,
      commandRemember: ys,
      criticalToActor: ys,
      criticalToEnemy: ys,
      counterAttack: ys,
      debuffAdd: ys,
      defeat: ys,
      enemyDamage: ys,
      enemyNoDamage: ys,
      enemyRecovery: ys,
      enemyGain: ys,
      enemyLoss: ys,
      enemyDrain: ys,
      evasion: ys,
      expNext: ys,
      expTotal: ys,
      escapeFailure: ys,
      escapeStart: ys,
      file: ys,
      loadMessage: ys,
      meVolume: ys,
      magicEvasion: ys,
      magicReflection: ys,
      obtainExp: ys,
      obtainGold: ys,
      obtainItem: ys,
      obtainSkill: ys,
      partyName: ys,
      preemptive: ys,
      saveMessage: ys,
      seVolume: ys,
      substitute: ys,
      touchUI: ys,
      victory: ys,
      useItem: ys,
      buffAdd: ys,
      buffRemove: ys,
      actorNoHit: ys,
      enemyNoHit: ys,
      autosave: ys,
      emerge: ys,
      levelUp: ys,
      possession: ys,
      surprise: ys
    }
  }, commands: {
    type: "array",
    items: [cs, cs, cs, cs, cs, cs, cs, cs, cs, cs, cs, cs, cs, cs, cs, cs, cs, cs, cs, cs, us, cs, cs, us, cs, cs],
    minItems: 26,
    maxItems: 26
  }, basic: { type: "array", items: { type: "string" }, minItems: 10, maxItems: 10 }, params: {
    type: "array",
    items: { type: "string", minLength: 1 },
    minItems: 10,
    maxItems: 10,
    uniqueItems: true
  } } }
} }, bs = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], Is = (e2) => e2.terms.params.map((e3, t2) => ({
  name: e3,
  id: t2
})), fs = (e2) => ({ background: e2.background ?? 0, offsetX: e2.offsetX ?? 0, offsetY: e2.offsetY ?? 0 }), hs = {
  additionalProperties: false,
  type: "object",
  required: ["background", "offsetX", "offsetY"],
  properties: { background: { type: "integer", minimum: 0, maximum: 1e3 }, offsetX: { type: "integer", minimum: -1e3, maximum: 1e3 }, offsetY: { type: "integer", minimum: -1e3, maximum: 1e3 } }
}, vs = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: dm(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), ks = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), xs = {
  additionalProperties: false,
  type: "object",
  required: ["actorId", "equips", "level"],
  properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: { type: "integer" } } }
}, Ts = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: xs },
    testTroopId: { type: "integer", minimum: 0 },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
    editMapId: { type: "integer", minimum: 0 },
    battlerHue: { type: "integer", minimum: 0 },
    battlerName: { type: "string" },
    editor: {
      additionalProperties: false,
      type: "object",
      required: ["messageWidth1", "messageWidth2", "jsonFormatLevel"],
      properties: { messageWidth1: { type: "integer", minimum: 0, maximum: 1e3 }, messageWidth2: { type: "integer", minimum: 0, maximum: 1e3 }, jsonFormatLevel: { type: "integer", minimum: 0, maximum: 4 } }
    }
  }
}, Ss = {
  title: "オプション",
  options: {
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
  }
}, ws = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, Ns = { title: "能力値", options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" } }, Ps = {
  title: "コマンド",
  options: {
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
  }
}, Rs = {
  type: "object",
  additionalProperties: false,
  required: ["type", "weaponImageId"],
  properties: { type: { type: "number" }, weaponImageId: { type: "number" } }
}, qs = {
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
}, As = { additionalProperties: false, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
  airship: qs,
  boat: qs,
  ship: qs,
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
  attackMotions: { type: "array", items: Rs }
} }, js = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), {
  required: [],
  properties: {}
}), Cs = new e({ strict: true }), Ds = ((e2) => {
  const t2 = js(e2);
  return {
    additionalProperties: false,
    type: "object",
    required: Array.from(new Set(t2.required)),
    properties: t2.properties
  };
})([As, ym, gm, Am, Dm, zm, Em, Bm, as, gs, Fm, Ts]), Ms = Cs.compile(Ds), zs = (e2) => Ms(e2), Es = Cs.compile(xs);
Cs.compile(Rs);
const Fs = Cs.compile(Em), Bs = (e2) => {
  var _a2, _b, _c, _d2, _e2, _f, _g, _h, _i2, _j, _k, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u, _v;
  const t2 = Vs(e2.size);
  return {
    ...jm(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: lm(e2.sounds),
    editor: ks(e2.editing),
    advanced: sm(e2.advanced),
    title1Name: ((_c = e2.images) == null ? void 0 : _c.title1Name) ?? "",
    title2Name: ((_d2 = e2.images) == null ? void 0 : _d2.title2Name) ?? "",
    ...rs(e2.dataNames ?? {}),
    magicSkills: Ls([]),
    airship: vs((_e2 = e2.vehicles) == null ? void 0 : _e2.airship),
    boat: vs((_f = e2.vehicles) == null ? void 0 : _f.boat),
    ship: vs((_g = e2.vehicles) == null ? void 0 : _g.ship),
    defeatMe: dm((_h = e2.me) == null ? void 0 : _h.defeatMe),
    gameoverMe: dm((_i2 = e2.me) == null ? void 0 : _i2.gameoverMe),
    titleBgm: dm((_j = e2.bgm) == null ? void 0 : _j.titleBgm),
    tileSize: t2.tileSize,
    faceSize: t2.faceSize,
    iconSize: t2.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((_k = e2.battleTest) == null ? void 0 : _k.battleback1Name) ?? "",
    battleback2Name: ((_l2 = e2.battleTest) == null ? void 0 : _l2.battleback2Name) ?? "",
    testTroopId: ((_m2 = e2.battleTest) == null ? void 0 : _m2.testTroopId) ?? 0,
    testBattlers: Ws((_n2 = e2.battleTest) == null ? void 0 : _n2.testBattlers, Os),
    battleBgm: dm((_o2 = e2.bgm) == null ? void 0 : _o2.battleBgm),
    victoryMe: dm((_p2 = e2.me) == null ? void 0 : _p2.victoryMe),
    editMapId: ((_q = e2.editorTemporary) == null ? void 0 : _q.editMapId) ?? 0,
    battlerName: ((_r2 = e2.editorTemporary) == null ? void 0 : _r2.battlerName) ?? "",
    locale: "",
    startMapId: ((_s2 = e2.gameInit) == null ? void 0 : _s2.startMapId) ?? 0,
    startX: ((_t2 = e2.gameInit) == null ? void 0 : _t2.startX) ?? 0,
    startY: ((_u = e2.gameInit) == null ? void 0 : _u.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Hs(e2.terms ?? {}),
    itemCategories: Nm(e2.itemCategories),
    partyMembersArray: Ls((_v = e2.gameInit) == null ? void 0 : _v.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: Rm(e2.menuComamnds)
  };
}, Hs = (e2) => ({
  basic: ns(e2.basic ?? {}),
  commands: ms(e2.commands ?? {}),
  params: bs(e2.params ?? {}),
  messages: ls(e2.messages ?? {})
}), Ls = (e2) => e2 ? [...e2] : [], Vs = (e2) => ((e3) => Fs(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Ws = (e2, t2) => e2 ? e2.map(t2) : [], Os = (e2) => ((e3) => Es(e3))(e2) ? { actorId: e2.actorId, equips: Ls(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, Gs = (e2, t2, a2, r2, i2, n2) => [...Ii(a2, r2), ...Ia(e2, t2), ...Km(i2, n2)], Xs = (e2, t2) => zi(Po(t2), e2), Ys = (e2, t2, a2) => {
  const r2 = pn(t2);
  return zi(a2 ? [...r2, ...a2] : r2, e2);
}, Ks = (e2) => Object.entries(e2).map(([, e3]) => e3.title), $s = (e2, t2 = 0) => ({ code: 320, parameters: [e2.actorId, e2.name], indent: t2 }), _s = (e2, t2 = 0) => ({
  code: 324,
  parameters: [e2.actorId, e2.nickname],
  indent: t2
}), Us = (e2, t2 = 0) => ({ code: 325, parameters: [e2.actorId, e2.profile], indent: t2 }), Zs = (e2, t2) => Js(e2, dm({ name: t2 })), Js = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [dm(t2)],
  indent: a2
}), Qs = (e2, t2 = 0) => Js(241, e2, t2), ep = (e2, t2 = 0) => Js(245, e2, t2), tp = (e2, t2 = 0) => Js(249, e2, t2), ap = (e2, t2 = 0) => Js(250, e2, t2), rp = (e2, t2 = 0) => Js(132, e2, t2), ip = (e2, t2 = 0) => Js(133, e2, t2), np = (e2, t2 = 0) => Js(139, e2, t2), op = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: sp(e2 ?? {})
}), mp = (e2) => ({ eventId: e2[0] }), sp = (e2) => [e2.eventId ?? 0], pp = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), dp = (e2) => [e2.min, e2.max, e2.value], lp = (e2, t2 = 0) => ({
  code: 121,
  indent: t2,
  parameters: dp(e2)
}), cp = (e2) => [e2], up = (e2) => ({ comment: e2[0] }), yp = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: cp(e2) }), gp = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: cp(e2)
}), bp = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? yp(e3, t2) : gp(e3, t2)), Ip = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], fp = (e2) => ({ variableId: e2[0], digits: e2[1] }), hp = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: Ip(e2 ?? {})
}), vp = (e2 = {}) => [(e2 == null ? void 0 : e2.speed) ?? 4, (e2 == null ? void 0 : e2.skip) ?? false], kp = (e2) => ({ speed: e2[0], skip: e2[1] }), xp = (e2 = {}, t2 = 0) => ({ code: 105, indent: t2, parameters: vp(e2) }), Tp = (e2 = "") => [e2], Sp = (e2) => ({ content: e2[0] }), wp = (e2 = "", t2 = 0) => ({
  code: 405,
  indent: t2 ?? 0,
  parameters: Tp(e2)
}), Np = (e2, t2 = 0) => ({ code: 402, indent: t2, parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""] }), Pp = (e2) => ({ index: e2[0], name: e2[1] }), Rp = (e2) => [e2.index ?? 0, e2.name ?? ""], qp = (e2) => ({
  choices: e2[0],
  cancelType: e2[1],
  defaultType: e2[2],
  positionType: e2[3],
  background: e2[4]
}), Ap = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], jp = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), Cp = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), Dp = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), Mp = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), zp = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName], Ep = (e2, t2 = 0) => ({ code: 401, indent: t2, parameters: [e2] }), Fp = (e2, t2 = 0) => ({
  code: 355,
  indent: t2,
  parameters: [e2]
}), Bp = (e2, t2 = 0) => ({ code: 655, indent: t2, parameters: [e2] }), Hp = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Fp(e3, t2) : Bp(e3, t2)), Lp = 0, Vp = 1, Wp = 2, Op = 3, Gp = 4, Xp = {
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
}, Yp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], Kp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], $p = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], _p = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], Up = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], Zp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], Jp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, Xp[t2.param]], Qp = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, ed = (e2, t2) => {
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
}, td = (e2) => [...e2], ad = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: td(e2.parameters)
}), rd = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, id = (e2) => e2.parameters.every(rd), nd = new e({ code: { source: false }, strict: true }), od = nd.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: {
    type: "array",
    minItems: 2,
    maxItems: 2,
    items: [{ type: "integer", minimum: 0 }, { type: "string" }]
  } },
  additionalProperties: false
}), md = (e2) => od(e2), sd = nd.compile({
  type: "object",
  properties: { code: { type: "number", const: 105 }, indent: {
    type: "integer",
    minimum: 0
  }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } },
  required: ["code", "indent", "parameters"]
}), pd = (e2) => sd(e2), dd = nd.compile({ type: "object", required: ["code", "parameters", "indent"], properties: {
  code: { type: "integer", enum: [132, 133, 139, 241, 245, 249, 250] },
  indent: { type: "integer" },
  parameters: { type: "array", minItems: 1, maxItems: 1, items: [{
    type: "object",
    properties: { name: { type: "string" }, volume: { type: "integer" }, pitch: { type: "integer" }, pan: { type: "integer" } },
    required: ["name", "volume", "pitch", "pan"],
    additionalProperties: false
  }] }
}, additionalProperties: false }), ld = (e2) => dd(e2), cd = nd.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
    type: "integer",
    enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
  } },
  additionalProperties: false
}), ud = (e2) => cd(e2), yd = nd.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), gd = (e2) => yd(e2), bd = nd.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), Id = (e2) => bd(e2), fd = nd.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } },
  required: ["code", "indent", "parameters"]
}), hd = (e2) => fd(e2), vd = nd.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 402
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } },
  required: ["code", "indent", "parameters"]
}), kd = (e2) => vd(e2), xd = nd.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), Td = (e2) => xd(e2), Sd = nd.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), wd = (e2) => Sd(e2), Nd = (e2) => ld(e2) && 241 === e2.code, Pd = (e2) => ld(e2) && 245 === e2.code, Rd = (e2) => ld(e2) && 249 === e2.code, qd = (e2) => ld(e2) && 250 === e2.code, Ad = (e2) => ld(e2) && 132 === e2.code, jd = (e2) => ld(e2) && 133 === e2.code, Cd = (e2) => ld(e2) && 139 === e2.code, Dd = (e2) => gd(e2) && 401 === e2.code, Md = (e2) => gd(e2) && 405 === e2.code, zd = (e2) => gd(e2) && 108 === e2.code, Ed = (e2) => gd(e2) && 408 === e2.code, Fd = (e2) => gd(e2) && 355 === e2.code, Bd = (e2) => gd(e2) && 655 === e2.code, Hd = "bgm", Ld = "se", Vd = "me", Wd = "bgs", Od = "battlebacks1", Gd = "battlebacks2", Xd = "characters", Yd = "enemies", Kd = "faces", $d = "parallaxes", _d = "pictures", Ud = "sv_actors", Zd = "sv_enemies", Jd = "system", Qd = "tilesets", el = "titles1", tl = "titles2", al = "System.json", rl = "Actors.json", il = "Classes.json", nl = "Skills.json", ol = "Items.json", ml = "Weapons.json", sl = "Armors.json", pl = "Enemies.json", dl = "Troops.json", ll = "States.json", cl = "Animations.json", ul = "Tilesets.json", yl = "CommonEvents.json", gl = "MapInfos.json", bl = "data", Il = "img", fl = "audio", hl = "js", vl = (e2, t2) => ({
  type: "array",
  items: t2,
  ...kl(e2),
  ...xl(e2.default)
}), kl = (e2) => ({ ..."string" == typeof e2.text ? { title: e2.text } : {}, ..."string" == typeof e2.desc ? { description: e2.desc } : {} }), xl = (e2) => void 0 !== e2 ? {
  default: e2
} : {}, Tl = (e2) => void 0 === e2 || 0 === e2, Sl = (e2) => vl(e2, { type: "string" }), wl = (e2) => {
  switch (e2.kind) {
    case "string":
    case "multiline_string":
      return ((e3) => ({
        type: "string",
        ...kl(e3),
        ...xl(e3.default)
      }))(e2);
    case "file":
    case "combo":
      return ((e3) => ({ type: "string", ...xl(e3.default), ...kl(e3) }))(e2);
    case "select":
      return ((e3) => ({ type: "string", ...xl(e3.default), ...kl(e3), ...e3.options ? {
        enum: e3.options.map((e4) => e4.value)
      } : {} }))(e2);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return Sl(e2);
    case "number[]":
      return ((e3) => ({ type: "array", items: {
        type: Tl(e3.decimals) ? "integer" : "number"
      }, ...xl(e3.default), ...kl(e3) }))(e2);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ((e3) => vl(e3, { type: "integer" }))(e2);
    case "number":
      return ((e3) => ({ type: Tl(e3.decimals) ? "integer" : "number", ...xl(e3.default), ...kl(e3) }))(e2);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((e3) => ({ type: "integer", ...xl(e3.default), ...kl(e3) }))(e2);
    case "boolean":
      return ((e3) => ({ type: "boolean", ...xl(e3.default), ...kl(e3) }))(e2);
    case "struct":
      return { $ref: `#/definitions/${(t2 = e2).struct}`, ...kl(t2) };
    default:
      return {};
  }
  var t2;
}, Nl = (e2, t2) => Object.entries(t2).reduce((t3, [a2, r2]) => {
  if (a2 in e2) {
    const i2 = e2[a2];
    if ("string" == typeof i2) return { ...t3, [a2]: r2(i2) };
  }
  return t3;
}, {}), Pl = (e2, t2, a2, r2) => ({
  default: t2,
  ...Nl(a2, r2),
  kind: e2
}), Rl = (e2, t2, a2) => ({ default: [], ...Nl(t2, a2), kind: e2 }), ql = "help", Al = "kind", jl = "text", Cl = "struct", Dl = (e2) => {
  const t2 = JSON.parse(e2);
  return Array.isArray(t2) ? t2.map(Ml) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, Ml(t3)])) : t2;
}, Ml = (e2) => {
  if ("string" != typeof e2) return e2;
  try {
    const t2 = JSON.parse(e2);
    return Array.isArray(t2) ? t2.map(Ml) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, Ml(t3)])) : t2;
  } catch {
    return e2;
  }
}, zl = (e2) => {
  if (Al in e2.attr) {
    const t2 = Ol[e2.attr.kind];
    if (t2) return t2(e2);
  }
  return Pl("any", "", e2.attr, Bl);
}, El = (e2) => e2, Fl = (e2) => e2.replace("[", "").replace("]", "").split(",").map((e3) => parseFloat(e3.replaceAll('"', "").trim())).filter((e3) => !isNaN(e3)), Bl = {
  default: El,
  text: El,
  desc: El,
  parent: El
}, Hl = (e2) => Pl("string", "", e2.attr, Bl), Ll = (e2) => {
  const t2 = { default: (e3) => Dl(e3), text: El, desc: El, parent: El };
  return Rl("string[]", e2.attr, t2);
}, Vl = (e2, t2) => {
  const a2 = {
    default: Fl,
    text: El,
    desc: El,
    parent: El
  };
  return Rl(t2, e2.attr, a2);
}, Wl = (e2, t2) => {
  const a2 = { default: (e3) => parseInt(e3, 10), text: El, desc: El, parent: El };
  return Pl(t2, 0, e2.attr, a2);
}, Ol = {
  number: (e2) => ((e3) => {
    const t2 = {
      default: (e4) => parseFloat(e4),
      text: El,
      desc: El,
      decimals: (e4) => parseInt(e4, 10),
      min: (e4) => parseFloat(e4),
      max: (e4) => parseFloat(e4),
      parent: El
    };
    return Pl("number", 0, e3.attr, t2);
  })(e2),
  "number[]": (e2) => {
    const t2 = { default: Fl, text: El, desc: El, decimals: (e3) => parseInt(e3, 10), min: (e3) => parseFloat(e3), max: (e3) => parseFloat(e3), parent: El };
    return Rl("number[]", e2.attr, t2);
  },
  string: Hl,
  "string[]": Ll,
  multiline_string: Hl,
  "multiline_string[]": Ll,
  combo: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => e3.option)) ?? [];
    return { ...Pl("combo", "", e2.attr, Bl), options: t2 };
  },
  select: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => ({ option: e3.option, value: e3.value }))) ?? [];
    return { ...Pl("select", "", e2.attr, Bl), options: t2 };
  },
  actor: (e2) => Wl(e2, "actor"),
  "actor[]": (e2) => Vl(e2, "actor[]"),
  class: (e2) => Wl(e2, "class"),
  "class[]": (e2) => Vl(e2, "class[]"),
  skill: (e2) => Wl(e2, "skill"),
  "skill[]": (e2) => Vl(e2, "skill[]"),
  item: (e2) => Wl(e2, "item"),
  "item[]": (e2) => Vl(e2, "item[]"),
  weapon: (e2) => Wl(e2, "weapon"),
  "weapon[]": (e2) => Vl(e2, "weapon[]"),
  armor: (e2) => Wl(e2, "armor"),
  "armor[]": (e2) => Vl(e2, "armor[]"),
  state: (e2) => Wl(e2, "state"),
  "state[]": (e2) => Vl(e2, "state[]"),
  enemy: (e2) => Wl(e2, "enemy"),
  "enemy[]": (e2) => Vl(e2, "enemy[]"),
  common_event: (e2) => Wl(e2, "common_event"),
  "common_event[]": (e2) => Vl(e2, "common_event[]"),
  switch: (e2) => Wl(e2, "switch"),
  "switch[]": (e2) => Vl(e2, "switch[]"),
  variable: (e2) => Wl(e2, "variable"),
  "variable[]": (e2) => Vl(e2, "variable[]"),
  troop: (e2) => Wl(e2, "troop"),
  "troop[]": (e2) => Vl(e2, "troop[]"),
  boolean: (e2) => {
    const t2 = {
      default: (e3) => "true" === e3,
      text: El,
      desc: El,
      on: El,
      off: El,
      parent: El
    };
    return Pl("boolean", true, e2.attr, t2);
  },
  file: (e2) => {
    const t2 = { default: El, text: El, desc: El, parent: El, dir: El };
    return { dir: "", ...Pl("file", "", e2.attr, t2) };
  },
  "file[]": (e2) => {
    const t2 = { default: (e3) => Dl(e3), text: El, desc: El, parent: El, dir: El };
    return { dir: "", ...Rl("file[]", e2.attr, t2) };
  }
}, Gl = "BODY", Xl = "STRUCT", Yl = "NONE", Kl = (e2, t2) => {
  const a2 = e2.lines.length > 0 ? _l(e2) : e2, r2 = t2[1] || void 0;
  return { ...a2, structName: r2, blockType: r2 ? Xl : "INVALID", locale: t2[2], lines: [] };
}, $l = (e2) => ({
  ...e2.lines.length > 0 ? _l(e2) : e2,
  blockType: Gl,
  structName: void 0,
  locale: void 0,
  lines: []
}), _l = (e2) => e2.blockType === Gl ? { ...e2, bodies: e2.bodies.concat([{ lines: [...e2.lines] }]), lines: [], blockType: Yl } : e2.structName && e2.blockType === Xl ? {
  ...e2,
  structs: e2.structs.concat([{ struct: e2.structName, locale: e2.locale, lines: [...e2.lines] }]),
  blockType: Yl,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e2,
  blockType: Yl,
  structName: void 0,
  lines: []
}, Ul = (e2) => e2.currentOption ? { items: e2.items.concat({ option: e2.currentOption, value: e2.currentOption }) } : e2, Zl = (e2) => ({
  ..."string" == typeof e2.desc ? { desc: e2.desc } : {},
  ..."string" == typeof e2.text ? { text: e2.text } : {}
}), Jl = (e2) => {
  const t2 = Ql(e2), a2 = tc(t2);
  return ec(a2);
}, Ql = (e2) => {
  if (e2.currentParam && e2.currentOption) {
    const t2 = e2.currentParam.attr.kind;
    if ("select" === t2 || "combo" === t2) return { ...e2, currentParam: { ...e2.currentParam, options: Ul(e2.currentOption).items } };
  }
  return e2;
}, ec = (e2) => e2.currentParam ? {
  ...e2,
  params: [...e2.params, e2.currentParam],
  currentParam: null,
  currentContext: null
} : e2, tc = (e2) => {
  if (e2.currentCommand) {
    const t2 = e2.currentParam ? [...e2.currentCommand.args, e2.currentParam] : e2.currentCommand.args, a2 = { ...Zl(e2.currentCommand), command: e2.currentCommand.command, args: t2 };
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
}, ac = (e2, t2) => {
  const a2 = e2.lines.reduce((e3, a3) => {
    const r2 = a3.trim().replace(/^\*\s?/, "");
    if (!r2.startsWith("@")) return e3.currentContext === ql ? { ...e3, helpLines: e3.helpLines.concat(r2) } : e3;
    const [i2, ...n2] = r2.slice(1).split(" "), o2 = n2.join(" ").trim(), m2 = t2[i2];
    return m2 ? m2(e3, o2) : e3;
  }, ic());
  return Jl(a2);
}, rc = (e2, t2) => {
  const a2 = ((e3) => {
    const t3 = e3.split("\n"), a3 = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: Yl
    }, r3 = t3.reduce((e4, t4) => {
      const a4 = t4.trim(), r4 = a4.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return r4 ? Kl(e4, r4) : "/*:" === a4 ? $l(e4) : "*/" === a4 ? e4.lines.length > 0 ? _l(e4) : e4 : { ...e4, lines: e4.lines.concat([a4]) };
    }, a3);
    return { structs: r3.structs, bodies: r3.bodies };
  })(e2), r2 = a2.structs.map((e3) => ((e4) => {
    const t3 = ac(e4, mc);
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
  const n2 = ac(i2, t2);
  return { params: n2.params, commands: n2.commands, meta: n2.meta, helpLines: n2.helpLines, structs: r2 };
}, ic = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), nc = (e2, t2, a2) => e2.currentParam && !(t2 in e2.currentParam.attr) ? {
  ...e2,
  currentParam: { ...e2.currentParam, attr: { ...e2.currentParam.attr, [t2]: a2 } }
} : e2, oc = (e2, t2, a2) => ({ ...e2, meta: { [t2]: a2, ...e2.meta } }), mc = {
  param: (e2, t2) => {
    const a2 = Jl(e2);
    return a2.params.some((e3) => e3.name === t2) ? a2 : { ...a2, currentContext: "param", currentParam: { name: t2, attr: {} } };
  },
  text: (e2, t2) => e2.currentParam ? nc(e2, jl, t2) : e2.currentCommand && !(jl in e2.currentCommand) ? { ...e2, currentCommand: {
    ...Zl(e2.currentCommand),
    command: e2.currentCommand.command,
    args: e2.currentCommand.args,
    [jl]: t2
  } } : e2,
  desc: (e2, t2) => e2.currentParam ? nc(e2, "desc", t2) : e2.currentCommand ? { ...e2, currentCommand: { ...e2.currentCommand, desc: t2 } } : e2,
  command: (e2, t2) => {
    const a2 = Jl(e2);
    return a2.commands.some((e3) => e3.command === t2) ? a2 : { ...a2, currentCommand: { command: t2, args: [] }, currentParam: null };
  },
  arg: (e2, t2) => {
    if (!e2.currentCommand) return e2;
    if (e2.currentParam) {
      const a2 = {
        ...Zl(e2.currentCommand),
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
  help: (e2) => ({ ...Jl(e2), currentContext: ql }),
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
      const a2 = t2.slice(7, -1), r2 = nc(e2, Cl, a2);
      return nc(r2, Al, Cl);
    }
    return e2.currentParam ? nc(e2, Al, t2) : e2;
  },
  default: (e2, t2) => nc(e2, "default", t2),
  on: (e2, t2) => nc(e2, "on", t2),
  off: (e2, t2) => nc(e2, "off", t2),
  min: (e2, t2) => nc(e2, "min", t2),
  max: (e2, t2) => nc(e2, "max", t2),
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
  author: (e2, t2) => oc(e2, "author", t2),
  plugindesc: (e2, t2) => oc(e2, "plugindesc", t2),
  url: (e2, t2) => oc(e2, "url", t2)
}, sc = (e2) => pc(((e3) => rc(e3, mc))(e2)), pc = (e2) => ({
  target: "MZ",
  meta: e2.meta,
  commands: lc(e2.commands),
  params: dc(e2.params)
}), dc = (e2) => e2.reduce((e3, t2) => ({ [t2.name]: zl(t2), ...e3 }), {}), lc = (e2) => e2.reduce((e3, t2) => {
  const a2 = { desc: t2.desc, text: t2.text, args: dc(t2.args) };
  return { [t2.command]: a2, ...e3 };
}, {}), cc = (e2) => sc(e2), uc = (e2) => ((e3) => {
  const t2 = Object.entries(e3).reduce((e4, [t3, a2]) => {
    const r2 = wl(a2);
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
  vi as AUTHOR_RMMZ,
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
  dr as COLLAPS_BOSS,
  lr as COLLAPS_INSTANT,
  cr as COLLAPS_NONE,
  pr as COLLAPS_NORMAL,
  k as COMMENT_BODY,
  v as COMMENT_HEAD,
  R as COMMON_EVENT,
  T as CONDITIONAL_BRANCH,
  S as CONDITIONAL_BRANCH_ELSE,
  D as CONTROL_SELF_SWITCH,
  j as CONTROL_SWITCHES,
  M as CONTROL_TIMER,
  C as CONTROL_VARIABLES,
  Ra as DEFAULT_DAMAGE_LABELS,
  om as DEFAULT_GLOBAL_LABELS,
  jn as DEFAULT_ITEM_LABELS,
  Cn as DEFAULT_SKILL_LABELS,
  Ss as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  ws as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Dn as DEFAULT_USABLE_ITEM_LABELS,
  en as EFFECT_ADD_BUFF,
  tn as EFFECT_ADD_DEBUFF,
  Ji as EFFECT_ADD_STATE,
  sn as EFFECT_COMMON_EVENT,
  Zi as EFFECT_GAIN_TP,
  on as EFFECT_GROW,
  mn as EFFECT_LEARN_SKILL,
  _i as EFFECT_RECOVER_HP,
  Ui as EFFECT_RECOVER_MP,
  an as EFFECT_REMOVE_BUFF,
  rn as EFFECT_REMOVE_DEBUFF,
  Qi as EFFECT_REMOVE_STATE,
  nn as EFFECT_SPECIAL,
  Je as ENEMY_APPEAR,
  Ze as ENEMY_RECOVER_ALL,
  Qe as ENEMY_TRANSFORM,
  ie as ERASE_EVENT,
  Ie as ERASE_PICTURE,
  P as EXIT_EVENT_PROCESSING,
  fr as EXTRA_PARAM_CEV,
  kr as EXTRA_PARAM_CNT,
  Ir as EXTRA_PARAM_CRI,
  br as EXTRA_PARAM_EVA,
  gr as EXTRA_PARAM_HIT,
  xr as EXTRA_PARAM_HRG,
  hr as EXTRA_PARAM_MEV,
  vr as EXTRA_PARAM_MRF,
  Tr as EXTRA_PARAM_MRG,
  Sr as EXTRA_PARAM_TRG,
  se as FADEIN_SCREEN,
  ve as FADEOUT_BGM,
  Se as FADEOUT_BGS,
  me as FADEOUT_SCREEN,
  rl as FILENAME_ACTORS,
  cl as FILENAME_ANIMATIONS,
  sl as FILENAME_ARMORS,
  il as FILENAME_CLASSES,
  yl as FILENAME_COMMON_EVENTS,
  pl as FILENAME_ENEMIES,
  ol as FILENAME_ITEMS,
  gl as FILENAME_MAP_INFOS,
  nl as FILENAME_SKILLS,
  ll as FILENAME_STATES,
  al as FILENAME_SYSTEM,
  ul as FILENAME_TILESET,
  dl as FILENAME_TROOPS,
  ml as FILENAME_WEAPONS,
  oi as FLAG_ID_AUTO_BATTLE,
  mi as FLAG_ID_GUARD,
  pi as FLAG_ID_PRESERVE_TP,
  si as FLAG_ID_SUBSTITUTE,
  de as FLASH_SCREEN,
  fl as FOLDER_AUDIO,
  Hd as FOLDER_AUDIO_BGM,
  Wd as FOLDER_AUDIO_BGS,
  Vd as FOLDER_AUDIO_ME,
  Ld as FOLDER_AUDIO_SE,
  bl as FOLDER_DATA,
  Il as FOLDER_IMG,
  Od as FOLDER_IMG_BATTLEBACK1,
  Gd as FOLDER_IMG_BATTLEBACK2,
  Xd as FOLDER_IMG_CHACTERS,
  Yd as FOLDER_IMG_ENEMIES,
  Kd as FOLDER_IMG_FACES,
  $d as FOLDER_IMG_PARALLACES,
  _d as FOLDER_IMG_PICTURES,
  Ud as FOLDER_IMG_SV_ACTORS,
  Zd as FOLDER_IMG_SV_ENEMIES,
  Jd as FOLDER_IMG_SYSTEM,
  Qd as FOLDER_IMG_TILESETS,
  el as FOLDER_IMG_TITLES1,
  tl as FOLDER_IMG_TITLES2,
  hl as FOLDER_JS,
  tt as FORCE_ACTION,
  ot as GAME_OVER,
  oe as GATHER_FOLLOWERS,
  Ce as GET_LOCATION_INFO,
  ee as GET_ONOFF_VEHICLE,
  Yi as HITTYPE_CERTAIN,
  $i as HITTYPE_MAGICAL,
  Ki as HITTYPE_PHYSICAL,
  b as INPUT_NUMBER,
  q as LABEL,
  Xi as LABELS_DATA_WEAPON,
  Ns as LABELS_SYSTEM_BATTLER_PARAMS,
  Ps as LABELS_SYSTEM_GAME_COMMANDS,
  A as LABEL_JUMP,
  Pa as LABEL_SET_DATA,
  Rn as LABEL_SET_ITEM_EFFECT,
  bi as LABEL_SET_TRAIT,
  w as LOOP,
  N as LOOP_BREAK,
  go as MODULE_DATA,
  ye as MOVE_PICTURE,
  Ee as NAME_INPUT_PROCESSING,
  l as NO_OPERATION,
  rt as OPEN_MENU_SCREEN,
  nt as OPEN_SAVE_SCREEN,
  Lp as OPERAND_CONSTANT,
  Op as OPERAND_GAMEDATA,
  Wp as OPERAND_RANDOM,
  Gp as OPERAND_SCRIPT,
  Vp as OPERAND_VARIABLE,
  ei as PARTY_ABILITY_CANCEL_SURPRISE,
  ri as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Jr as PARTY_ABILITY_ENCOUNTER_HALF,
  Qr as PARTY_ABILITY_ENCOUNTER_NONE,
  ai as PARTY_ABILITY_GOLD_DOUBLE,
  ti as PARTY_ABILITY_RAISE_PREEMPTIVE,
  he as PLAY_BGM,
  Te as PLAY_BGS,
  we as PLAY_ME,
  Re as PLAY_MOVIE,
  Ne as PLAY_SE,
  dt as PLUGIN_COMMAND_MV,
  lt as PLUGIN_COMMAND_MZ,
  Le as RECOVER_ALL,
  Mr as REGULAR_PARAM_AGI,
  Ar as REGULAR_PARAM_ATK,
  jr as REGULAR_PARAM_DEF,
  zr as REGULAR_PARAM_LUK,
  Cr as REGULAR_PARAM_MATK,
  Rr as REGULAR_PARAM_MAX_HP,
  qr as REGULAR_PARAM_MAX_MP,
  Dr as REGULAR_PARAM_MDEF,
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
  ym as SCHEMA_SYSTEM_AUDIOFILES,
  gm as SCHEMA_SYSTEM_BATTLE_RULE_RMMZ,
  Am as SCHEMA_SYSTEM_BOOLEAN_GAMEMENU_OPTIONS,
  Dm as SCHEMA_SYSTEM_BOOLEAN_OPTIONS,
  Ts as SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE,
  zm as SCHEMA_SYSTEM_GAME_INITIAL,
  Em as SCHEMA_SYSTEM_IMAGE_SIZE,
  Bm as SCHEMA_SYSTEM_OTHER_DATA,
  as as SCHEMA_SYSTEM_RPG_DATA_NAMES,
  gs as SCHEMA_SYSTEM_TERMS_BUNDLE,
  hs as SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW,
  Fm as SCHEMA_SYSTEM_TITLE_IMAGES,
  hi as SCHEMA_TRAIT,
  st as SCRIPT_EVAL,
  pt as SCRIPT_EVAL_BODY,
  J as SCROLL_MAP,
  I as SELECT_ITEM,
  Z as SET_EVENT_LOCATION,
  Q as SET_MOVEMENT_ROUTE,
  U as SET_VEHICLE_LOCATION,
  fe as SET_WEATHER_EFFECT,
  le as SHAKE_SCREEN,
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
  qn as SPECIAL_EFFECT_ESCAPE,
  $r as SPECIAL_PARAM_EXR,
  Kr as SPECIAL_PARAM_FDR,
  Lr as SPECIAL_PARAM_GRD,
  Or as SPECIAL_PARAM_MCR,
  Yr as SPECIAL_PARAM_MDR,
  Xr as SPECIAL_PARAM_PDR,
  Wr as SPECIAL_PARAM_PHA,
  Vr as SPECIAL_PARAM_REC,
  Gr as SPECIAL_PARAM_TCR,
  Hr as SPECIAL_PARAM_TGR,
  ki as SRC_COLOR,
  bo as SRC_DATA_ACTOR,
  To as SRC_DATA_ARMOR,
  So as SRC_DATA_CLASS,
  wo as SRC_DATA_COMMON_EVNET,
  fo as SRC_DATA_ENEMY,
  ko as SRC_DATA_ITEMS,
  Io as SRC_DATA_MAP,
  vo as SRC_DATA_SKILL,
  ho as SRC_DATA_STATE,
  No as SRC_DATA_TROOP,
  xo as SRC_DATA_WEAPON,
  Pe as STOP_SE,
  be as TINT_PICTURE,
  pe as TINT_SCREEN,
  nr as TRAIT_ACTION_PLUS,
  Xa as TRAIT_ATTACK_ELEMENT,
  _a as TRAIT_ATTACK_SKILL,
  Ka as TRAIT_ATTACK_SPEED,
  Ya as TRAIT_ATTACK_STATE,
  $a as TRAIT_ATTACK_TIMES,
  mr as TRAIT_COLLAPSE_TYPE,
  Ha as TRAIT_DEBUFF_RATE,
  Ba as TRAIT_ELEMENT_RATE,
  tr as TRAIT_EQUIP_ARMOR_TYPE,
  ar as TRAIT_EQUIP_LOCK,
  rr as TRAIT_EQUIP_SEAL,
  er as TRAIT_EQUIP_WEAPON_TYPE,
  Wa as TRAIT_PARAM,
  sr as TRAIT_PARTY_ABILITY,
  Ja as TRAIT_SKILL_ADD,
  Qa as TRAIT_SKILL_SEAL,
  Ua as TRAIT_SKILL_TYPE_ADD,
  Za as TRAIT_SKILL_TYPE_SEAL,
  ir as TRAIT_SLOT_TYPE,
  Ga as TRAIT_SPARAM,
  or as TRAIT_SPECIAL_FLAG,
  La as TRAIT_STATE_RATE,
  Va as TRAIT_STATE_RESIST,
  Oa as TRAIT_XPARAM,
  _ as TRANSFER_PLAYER,
  fi as TYPENAME_TRAIT,
  ce as WAIT,
  Li as applyFormatRule,
  Gs as buildReferenceItemSources,
  Cp as cloneChoices,
  ad as cloneEventCommand,
  td as cloneParameters,
  yr as collapsOptionsToArray,
  Ni as compileFormatRule,
  Ys as compileItemEffectDisplayData,
  Xs as compileTraitDisplayData,
  up as convertCommentArrayToObject,
  i as createActorControlChars,
  t as createControlCharFormat,
  ct as createEventCommand,
  oo as createNoteEntity,
  n as createSystemVariableControlChars,
  Ia as defineGameDataSources,
  Km as defineSystemItems,
  ur as defineTraitCollapseType,
  wr as defineTraitExtraParam,
  Ii as defineTraitItems,
  ii as defineTraitPartyAbility,
  Er as defineTraitRegularParam,
  di as defineTraitSpecialFlag,
  _r as defineTraitSpecialParam,
  ji as detectFormatErrors,
  Ks as domainNames,
  Pr as extraParamName,
  Nr as extraParamsToArray,
  An as formatItemEffectText,
  Oi as formatTraitText,
  mp as fromArrayCommonEvent,
  pp as fromArrayControlSwitches,
  fp as fromArrayInputNumber,
  Sp as fromArrayScrollingTextBody,
  kp as fromArrayScrollingTextHeader,
  qp as fromArraySetupChoice,
  Pp as fromArraySetupChoiceItem,
  Mp as fromArrayShowMessageHeader,
  a as fromStringArray,
  ed as getActorValue,
  Sm as getArmorCategoryEnabled,
  Xm as getArmorTypes,
  r as getControlChars,
  Vm as getElementTypes,
  Qp as getEnemyValue,
  fm as getEquipCommandEnabled,
  Wm as getEquipTypes,
  vm as getFormationCommandEnabled,
  xm as getItemCategoryEnabled,
  bm as getItemCommandEnabled,
  wm as getKeyItemCategoryEnabled,
  uo as getNoteValue,
  Is as getParamNames,
  km as getSaveCommandEnabled,
  Im as getSkillCommandEnabled,
  Om as getSkillTypes,
  hm as getStatusCommandEnabled,
  Ym as getSwitches,
  Lm as getVariableNames,
  Tm as getWeaponCategoryEnabled,
  Gm as getWeaponTypes,
  id as isCloneableCommand,
  ld as isCommandAudio,
  md as isCommandChangeActorText,
  Ad as isCommandChangeBattleBgm,
  Cd as isCommandChangeDefeatMe,
  jd as isCommandChangeVictoryMe,
  Ed as isCommandCommentBody,
  zd as isCommandCommentHeader,
  Id as isCommandCommonEvent,
  Td as isCommandInputNumber,
  ud as isCommandNonParam,
  Nd as isCommandPlayBgm,
  Pd as isCommandPlayBgs,
  Rd as isCommandPlayMe,
  qd as isCommandPlaySe,
  Bd as isCommandScriptBody,
  Fd as isCommandScriptHeader,
  pd as isCommandScrollTextHead,
  kd as isCommandShowChoiceItem,
  hd as isCommandShowChoices,
  wd as isCommandShowMessage,
  Dd as isCommandShowMessageBody,
  Md as isCommandShowScrollingTextBody,
  gd as isCommandTextBody,
  _n as isDataActor,
  Zn as isDataArmor,
  no as isDataClass,
  to as isDataEnemy,
  Xn as isDataItem,
  ba as isDataMap,
  ga as isDataMapInfo,
  Kn as isDataSkill,
  ro as isDataState,
  zs as isDataSystem,
  Qn as isDataWeapon,
  pm as isValidNumber,
  mm as labelsRegistry,
  Aa as makeActorData,
  Ca as makeArmorData,
  Zs as makeAudioCommand,
  dm as makeAudioFileParams,
  jm as makeBooleanOptions,
  Da as makeClassData,
  Js as makeCommandAudioAny,
  $s as makeCommandChangeActorName,
  _s as makeCommandChangeActorNickName,
  Us as makeCommandChangeActorProfile,
  rp as makeCommandChangeBattleBGM,
  np as makeCommandChangeDefeatME,
  ip as makeCommandChangeVictoryME,
  gp as makeCommandCommentBody,
  yp as makeCommandCommentHeader,
  op as makeCommandCommonEvent,
  lp as makeCommandControlSwitches,
  hp as makeCommandInputNumber,
  Qs as makeCommandPlayBGM,
  ep as makeCommandPlayBGS,
  tp as makeCommandPlayME,
  ap as makeCommandPlaySE,
  Hp as makeCommandScriptArray,
  Bp as makeCommandScriptBody,
  Fp as makeCommandScriptHeader,
  wp as makeCommandScrollingTextBody,
  xp as makeCommandScrollingTextHeader,
  jp as makeCommandSetupChoice,
  Np as makeCommandShowChoiceItem,
  Dp as makeCommandShowMessage,
  Ep as makeCommandShowMessageBody,
  cp as makeCommentArray,
  bp as makeCommentCommandArray,
  o as makeCommonEventData,
  qa as makeDamage,
  rs as makeDataNames,
  Ma as makeDropItem,
  ks as makeEditorSetting,
  za as makeEnemyAction,
  Ea as makeEnemyData,
  d as makeEventPageCondition,
  Mm as makeGameInitial,
  Nm as makeItemCategories,
  Pm as makeItemCategoriesFromArray,
  Mn as makeItemData,
  sa as makeMapData,
  na as makeMapEvent,
  oa as makeMapEventIamge,
  ma as makeMapEventPage,
  pa as makeMapInfoData,
  Rm as makeMenuCommandsEnabled,
  qm as makeMenuCommandsEnabledFromArray,
  bs as makeParamNamesArray,
  mo as makeRegex,
  zn as makeSkillData,
  lm as makeSoundsArray,
  cm as makeSoundsObject,
  Fa as makeStateData,
  sm as makeSystemAdvanced,
  Bs as makeSystemData,
  ns as makeTermsBasic,
  os as makeTermsBasicFromArray,
  ms as makeTermsCommand,
  ps as makeTermsCommandFromArray,
  ls as makeTermsMessages,
  fs as makeTitleCommandWindow,
  m as makeTroopData,
  p as makeTroopEventConditions,
  s as makeTroopMember,
  vs as makeVehicleData,
  Gi as makeWeaponData,
  zi as mergeItemsSource,
  ja as normalizeDataActor,
  ni as partyAbilityToArray,
  cc as pluginSourceToJSON,
  po as readNote,
  so as readNoteObject,
  Br as regularParamName,
  Fr as regularParamsToArray,
  co as replaceNote,
  pn as resolveItemEffectLabels,
  Po as resolveTraitLabels,
  yo as setNoteValue,
  li as specialFlagToArray,
  Zr as specialParamName,
  Ur as specialParamsToArray,
  uc as structToJSONSchema,
  sp as toArrayCommonEvent,
  dp as toArrayControlSwitches,
  Ip as toArrayInputNumber,
  Zp as toArrayOperandActorStatus,
  Yp as toArrayOperandConstant,
  Jp as toArrayOperandEnemyStatus,
  Up as toArrayOperandItemData,
  $p as toArrayOperandRandom,
  _p as toArrayOperandScript,
  Kp as toArrayOperandVariable,
  Tp as toArrayScrollingTextBody,
  vp as toArrayScrollingTextHeader,
  Ap as toArraySetupChoice,
  Rp as toArraySetupChoiceItem,
  zp as toArrayShowMessageHeader
};
//# sourceMappingURL=rpgTypes.es.js.map
