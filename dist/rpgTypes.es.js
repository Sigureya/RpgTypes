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
}), d = 0, c = 101, u = 401, y = 102, g = 402, b = 103, I = 104, f = 105, h = 405, v = 108, k = 408, x = 109, T = 111, S = 411, w = 112, N = 113, P = 115, R = 117, q = 118, A = 119, C = 121, D = 122, j = 123, M = 124, z = 125, E = 126, F = 127, B = 128, H = 129, L = 132, V = 133, W = 134, O = 135, G = 136, X = 137, Y = 138, K = 139, $ = 140, _ = 201, U = 202, Z = 203, J = 204, Q = 205, ee = 206, te = 211, ae = 212, re = 213, ie = 214, ne = 216, oe = 217, me = 221, se = 222, pe = 223, le = 224, de = 225, ce = 230, ue = 231, ye = 232, ge = 233, be = 234, Ie = 235, fe = 236, he = 241, ve = 242, ke = 243, xe = 244, Te = 245, Se = 246, we = 249, Ne = 250, Pe = 251, Re = 261, qe = 282, Ae = 283, Ce = 284, De = 285, je = 301, Me = 302, ze = 605, Ee = 303, Fe = 311, Be = 312, He = 313, Le = 314, Ve = 315, We = 320, Oe = 321, Ge = 322, Xe = 323, Ye = 324, Ke = 325, $e = 331, _e = 332, Ue = 333, Ze = 334, Je = 335, Qe = 336, et = 337, tt = 339, at = 340, rt = 351, it = 342, nt = 352, ot = 353, mt = 354, st = 355, pt = 655, lt = 356, dt = 357, ct = (e2, t2, a2 = 0) => ({
  code: e2,
  indent: a2,
  parameters: t2
}), ut = 0, yt = 1, gt = 2, bt = 3, It = 4, ft = 5, ht = 6, vt = 7, kt = 8, xt = 9, Tt = 10, St = 11, wt = 12, Nt = 13, Pt = 14, Rt = 15, qt = 16, At = 17, Ct = 18, Dt = 19, jt = 20, Mt = 21, zt = 22, Et = 23, Ft = 24, Bt = 25, Ht = 26, Lt = 27, Vt = 28, Wt = 29, Ot = 30, Gt = 31, Xt = 32, Yt = 33, Kt = 34, $t = 35, _t = 36, Ut = 37, Zt = 38, Jt = 39, Qt = 40, ea = 41, ta = 42, aa = 43, ra = 44, ia = 45, na = () => ({
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
      pages: { type: "array", items: la }
    } } }
  }
}, ca = new e({ strict: true }), ua = ca.compile({
  type: "object",
  required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: {
    type: "integer"
  }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } }
}), ya = ca.compile(da), ga = (e2) => ua(e2), ba = (e2) => ya(e2), Ia = (e2, t2) => [fa(e2.skills, t2), ha(e2.actors, t2), va(e2.states, t2), ka(e2.armors, t2), xa(e2.classes, t2), Ta(e2.enemies, t2), Sa(e2.items, t2), wa(e2.weapons, t2), Na(e2.commonEvents, t2)], fa = (e2, t2) => ({
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
}), Ca = (e2) => ({
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
}), ja = (e2 = {}) => ({ name: e2.name ?? "", id: e2.id ?? 0, traits: [], note: e2.note ?? "", params: [0, 0, 0, 0, 0, 0, 0, 0], learnings: e2.learnings ?? [], expParams: e2.expParams ?? [] }), Ma = (e2 = {}) => ({
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
}), Ba = 11, Ha = 12, La = 13, Va = 14, Wa = 21, Oa = 22, Ga = 23, Xa = 31, Ya = 32, Ka = 33, $a = 34, _a = 35, Ua = 41, Za = 42, Ja = 43, Qa = 44, er = 51, tr = 52, ar = 53, rr = 54, ir = 55, nr = 61, or = 62, mr = 63, sr = 64, pr = 0, lr = 1, dr = 2, cr = 3, ur = (e2, t2) => ({
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
}, Rr = 0, qr = 1, Ar = 2, Cr = 3, Dr = 4, jr = 5, Mr = 6, zr = 7, Er = (e2) => ({ items: Fr(e2.options), label: e2.title, source: { author: "rmmz", module: "trait", kind: "params" } }), Fr = (e2) => [{
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
}, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], oi = 0, mi = 1, si = 2, pi = 3, li = (e2) => ({ items: di(e2.options), label: e2.title, source: {
  author: "rmmz",
  module: "trait",
  kind: "sflag"
} }), di = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
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
}, Ii = (e2, t2) => [Er(e2.regularParam), wr(e2.extraParam), _r(e2.specialParam), ur(e2.collaps, t2), li(e2.specialFlag), ii(e2.partyAbility)], fi = "rmmz", hi = "colors", vi = (e2) => e2.map((e3) => ({
  dataKey: e3,
  placeHolder: `{${e3}}`
})), ki = (e2) => ({
  dataKey: e2.dataIdKey,
  placeHolder: `{${e2.dataIdKey}}`,
  sourceId: { author: e2.sourceId.author, kind: e2.sourceId.kind, module: e2.sourceId.module }
}), xi = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, Ti = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : [...t2];
}, Si = (e2, t2 = []) => {
  return {
    itemMappers: [...Ti(e2), ...t2].map(wi),
    fallbackFormat: { text: Ni(e2), label: Pi(e2) },
    properties: (a2 = e2.placeHolder ?? {}, {
      numbers: a2.numbers ? vi(a2.numbers) : [],
      strings: a2.strings ? vi(a2.strings) : []
    }),
    arrayIndex: e2.arrayIndex ? e2.arrayIndex.map(ki) : []
  };
  var a2;
}, wi = (e2) => ({ placeHolder: `{${e2.placeHolder}}`, kindKey: e2.kindKey, dataIdKey: e2.dataIdKey }), Ni = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const t2 = ((e3) => {
    var _a2, _b, _c;
    return /* @__PURE__ */ new Set([...((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? [], ...((_b = e3.placeHolder) == null ? void 0 : _b.strings) ?? [], ...((_c = e3.arrayIndex) == null ? void 0 : _c.map((e4) => e4.dataIdKey)) ?? []]);
  })(e2);
  return 0 === t2.size ? "value not found" : Array.from(t2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, Pi = (e2) => {
  var _a2;
  return void 0 !== ((_a2 = e2.fallbackFormat) == null ? void 0 : _a2.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, Ri = (e2, t2, a2) => {
  const r2 = t2[a2.dataKey];
  return null == r2 ? e2 : e2.replaceAll(a2.placeHolder, String(r2));
}, qi = (e2, t2, a2, r2 = { placeHolderMaxLength: 50, formatMaxLength: 200 }) => e2.pattern.length >= r2.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{
  message: a2.formatVeryLong,
  reason: e2.pattern.slice(0, r2.formatMaxLength)
}], semanticErrors: [] } : {
  formatLabel: e2.label,
  semanticErrors: Ci(e2, t2, a2),
  syntaxErrors: Ai(e2.pattern, t2, a2, r2.placeHolderMaxLength)
}, Ai = (e2, t2, a2, r2) => {
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
}, Ci = (e2, t2, a2) => Ti(t2).reduce((t3, r2) => {
  const i2 = Di(e2, r2, a2);
  return i2 && t3.push(i2), t3;
}, []), Di = (e2, t2, a2) => {
  const r2 = e2.pattern.includes(t2.placeHolder), i2 = !!e2.dataSource;
  return !r2 && i2 ? { message: a2.missingName, reason: t2.placeHolder } : r2 && !i2 ? { message: a2.missingSourceId, reason: t2.placeHolder } : void 0;
}, ji = (e2, t2) => {
  const a2 = Ei(t2);
  return e2.reduce((e3, t3) => {
    const r2 = Mi(t3, a2);
    return e3.set(t3.kindId, r2), e3;
  }, /* @__PURE__ */ new Map());
}, Mi = (e2, t2) => {
  const a2 = zi(e2.dataSource, t2);
  return { patternCompiled: e2.pattern, label: e2.label, data: a2 ? a2.items : void 0 };
}, zi = (e2, t2) => {
  if (e2) return t2.get(xi(e2));
}, Ei = (e2) => e2.reduce((e3, t2) => {
  const a2 = { items: Fi(t2.items), source: t2.source, label: t2.label };
  return e3.set(xi(t2.source), a2), e3;
}, /* @__PURE__ */ new Map()), Fi = (e2) => e2.map((e3) => ({
  id: e3.id,
  name: e3.name
})), Bi = (e2, t2, a2, r2, i2) => {
  const n2 = ((e3, t3, a3) => {
    const r3 = a3.properties.numbers.reduce((e4, a4) => Ri(e4, t3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => Ri(e4, t3, a4), r3);
  })(r2, e2, a2);
  return t2 ? Hi(n2, e2, a2, t2, i2) : n2;
}, Hi = (e2, t2, a2, r2, i2) => {
  const n2 = ((e3, t3) => {
    const a3 = ((e4, t4) => {
      const a4 = t4[e4];
      return a4 && a4.id === e4 ? a4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return a3 ? a3.name : `?data[${t3}]`;
  })(r2, i2(t2));
  return a2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, n2), e2);
}, Li = {
  itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" },
  placeHolder: { numbers: ["value"] }
}, Vi = (e2, t2, a2) => {
  const r2 = Si(Li);
  return Bi(t2, a2, r2, e2.pattern, (e3) => e3.dataId);
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
}), Oi = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Gi = 0, Xi = 1, Yi = 2, Ki = 11, $i = 12, _i = 13, Ui = 21, Zi = 22, Ji = 31, Qi = 32, en = 33, tn = 34, an = 41, rn = 42, nn = 43, on = 44, mn = (e2) => [ln(e2), dn(e2), cn(e2), un(e2), yn(e2), gn(e2), bn(e2), In(e2), fn(e2), pn(e2), hn(e2), vn(e2), kn(e2)], sn = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), pn = (e2) => sn(41, e2.special), ln = (e2) => sn(11, e2.recoverHp), dn = (e2) => sn(12, e2.recoverMp), cn = (e2) => sn(13, e2.gainTp), un = (e2) => sn(21, e2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), yn = (e2) => sn(22, e2.removeState, { author: "rmmz", module: "data", kind: "state" }), gn = (e2) => sn(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), bn = (e2) => sn(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), In = (e2) => sn(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), fn = (e2) => sn(34, e2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), hn = (e2) => sn(42, e2.grow, { author: "rmmz", module: "trait", kind: "params" }), vn = (e2) => sn(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), kn = (e2) => sn(44, e2.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), xn = "{name} {value1}%", Tn = "{value1}% + {value2}", Sn = "{name} {value1}ターン", wn = "{name}", Nn = { title: "使用効果", options: { addBuff: {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: Sn
}, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: Sn }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: Tn }, grow: {
  desc: "成長効果",
  domainName: "成長効果",
  format: "{name} + {value1}"
}, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: wn }, recoverHp: {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: Tn
}, recoverMp: {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: Tn
}, removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: wn }, removeDebuff: {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: wn
}, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: xn }, special: { desc: "特殊効果", domainName: "特殊効果", format: wn }, addState: {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: xn
}, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: wn } } }, Pn = 0, Rn = (e2, t2, a2) => {
  const r2 = a2.find((e3) => e3.id === t2.dataId), i2 = r2 ? r2.name : "Unknown Item";
  return e2.pattern.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", i2);
}, qn = { title: "アイテム", options: { consumable: "消耗品" } }, An = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Cn = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Dn = (e2 = {}) => ({
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
}), jn = (e2 = {}) => ({
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
}), Mn = { type: "integer" }, zn = { type: "integer", minimum: 0 }, En = { type: "string" }, Fn = {
  type: "object",
  properties: { type: { type: "integer" }, elementId: zn, formula: En, variance: Mn, critical: { type: "boolean" } },
  required: ["type", "elementId", "formula", "variance", "critical"],
  additionalProperties: false
}, Bn = { type: "object", properties: { code: Mn, dataId: zn, value1: Mn, value2: Mn }, required: ["code", "dataId", "value1", "value2"], additionalProperties: false }, Hn = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "message1", "message2", "messageType", "mpCost", "requiredWtypeId1", "requiredWtypeId2", "stypeId", "tpCost", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "note", "effects"],
  properties: {
    name: En,
    id: zn,
    description: En,
    iconIndex: zn,
    message1: En,
    message2: En,
    messageType: zn,
    mpCost: Mn,
    requiredWtypeId1: zn,
    requiredWtypeId2: zn,
    stypeId: zn,
    tpCost: Mn,
    animationId: zn,
    hitType: zn,
    occasion: { type: "integer" },
    repeats: zn,
    scope: Mn,
    speed: Mn,
    successRate: Mn,
    tpGain: Mn,
    note: En,
    effects: { type: "array", items: Bn },
    damage: Fn
  },
  additionalProperties: false
}, Ln = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "note", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "consumable", "price", "effects"],
  properties: { name: En, id: zn, description: En, iconIndex: zn, note: En, animationId: zn, hitType: Mn, occasion: Mn, repeats: Mn, scope: Mn, speed: Mn, successRate: Mn, tpGain: Mn, consumable: {
    type: "boolean"
  }, price: zn, itypeId: zn, effects: { type: "array", items: Bn }, damage: Fn }
}, Vn = new e({ strict: true }), Wn = Vn.compile(Ln), On = (e2) => Wn(e2), Gn = Vn.compile(Hn), Xn = (e2) => Gn(e2), Yn = Vn.compile({
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
}), Kn = (e2) => Yn(e2), $n = Vn.compile({
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
}), _n = (e2) => $n(e2), Un = Vn.compile({ type: "object", required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"], properties: { name: {
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
} }, required: ["code", "dataId", "value"] } } } }), Zn = (e2) => Un(e2), Jn = Vn.compile({
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
}), Qn = (e2) => Jn(e2), eo = Vn.compile({
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
}), to = (e2) => eo(e2), ao = Vn.compile({
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
}), ro = (e2) => ao(e2), io = (e2, t2) => `<${e2}:${t2}>`, no = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, oo = (e2, t2) => so(e2.note, (a2, r2) => t2(a2, r2, e2)), mo = (e2) => so(e2, (e3, t2) => [e3, t2]), so = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, po = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (e3, a2, r2) => {
    const i2 = t2(a2, r2);
    if (i2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return io(a2, i2);
  });
}, lo = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return r2 ? r2[2] : void 0;
}, co = (e2, t2, a2) => {
  const r2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(r2, (e3, r3) => r3 === t2 ? io(r3, a2) : e3);
}, uo = "data", yo = "actor", go = "map", bo = "enemy", Io = "state", fo = "skill", ho = "item", vo = "weapon", ko = "armor", xo = "class", To = "common_event", So = "troop", wo = (e2) => [No(e2.elementRate), Po(e2.debuffRate), Ro(e2.stateRate), qo(e2.stateResist), Ao(e2.regularParam), Co(e2.extraParam), Do(e2.specialParam), jo(e2.attackElement), Mo(e2.attackState), zo(e2.attackSpeed), Eo(e2.attackTimes), Fo(e2.attackSkill), Bo(e2.skillTypeAdd), Ho(e2.skillTypeSeal), Lo(e2.skillAdd), Vo(e2.skillSeal), Wo(e2.equipWeaponType), Oo(e2.equipArmorType), Go(e2.equipLock), Xo(e2.equipSeal), Yo(e2.slotType), Ko(e2.actionPlus), $o(e2.specialFlag), _o(e2.collaps), Uo(e2.partyAbility)], No = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 11,
  dataSource: Qo()
}), Po = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 12, dataSource: { author: "rmmz", module: "trait", kind: "params" } }), Ro = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 13,
  dataSource: Zo()
}), qo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 14, dataSource: Zo() }), Ao = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), Co = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 22, dataSource: { author: "rmmz", module: "trait", kind: "xparams" } }), Do = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 23,
  dataSource: { author: "rmmz", module: "trait", kind: "sparams" }
}), jo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 31, dataSource: Qo() }), Mo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 32,
  dataSource: Zo()
}), zo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 33 }), Eo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 34 }), Fo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 35,
  dataSource: Jo()
}), Bo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 41, dataSource: em() }), Ho = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 42,
  dataSource: em()
}), Lo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 43, dataSource: Jo() }), Vo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 44, dataSource: Jo() }), Wo = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 51,
  dataSource: tm()
}), Oo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 52, dataSource: am() }), Go = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 53,
  dataSource: rm()
}), Xo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 54, dataSource: rm() }), Yo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 55, dataSource: rm() }), Ko = (e2) => ({
  pattern: e2.format,
  label: e2.title,
  kindId: 61
}), $o = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 62, dataSource: { author: "rmmz", module: "trait", kind: "sflag" } }), _o = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 63, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "collaps"
} }), Uo = (e2) => ({ pattern: e2.format, label: e2.title, kindId: 64, dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" } }), Zo = () => ({
  author: "rmmz",
  module: "data",
  kind: "state"
}), Jo = () => ({ author: "rmmz", module: "data", kind: "skill" }), Qo = () => ({ author: "rmmz", module: "system", kind: "elements" }), em = () => ({
  author: "rmmz",
  module: "system",
  kind: "skillTypes"
}), tm = () => ({ author: "rmmz", module: "system", kind: "weaponTypes" }), am = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), rm = () => ({
  author: "rmmz",
  module: "system",
  kind: "equipTypes"
}), im = {
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
}, nm = () => ({ rpg: { damage: Ra, data: Pa, traits: bi, itemEffect: Nn }, global: im }), om = (e2 = {}) => ({
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
}), mm = (e2) => "number" == typeof e2 && !Number.isNaN(e2), sm = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
}), pm = (e2 = {}) => [sm(e2.cursor), sm(e2.ok), sm(e2.cancel), sm(e2.buzzer), sm(e2.equip), sm(e2.save), sm(e2.load), sm(e2.battleStart), sm(e2.escape), sm(e2.enemyAttack), sm(e2.enemyDamage), sm(e2.enemyCollapse), sm(e2.bossCollapes1), sm(e2.bossCollapes2), sm(e2.actorDamage), sm(e2.actorCollapse), sm(e2.playRecovery), sm(e2.playMiss), sm(e2.playEvasion), sm(e2.playMagicEvasion), sm(e2.playReflection), sm(e2.shop), sm(e2.useItem), sm(e2.useSkill)], lm = (e2) => ({
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
}), dm = (e2) => e2.menuCommands[0], cm = (e2) => e2.menuCommands[1], um = (e2) => e2.menuCommands[2], ym = (e2) => e2.menuCommands[3], gm = (e2) => e2.menuCommands[4], bm = (e2) => e2.menuCommands[5], Im = (e2) => e2.itemCategories[0], fm = (e2) => e2.itemCategories[1], hm = (e2) => e2.itemCategories[2], vm = (e2) => e2.itemCategories[3], km = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], xm = (e2) => ({
  item: e2[0],
  weapon: e2[1],
  armor: e2[2],
  keyItem: e2[3]
}), Tm = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], Sm = (e2) => ({
  item: e2[0],
  skill: e2[1],
  equip: e2[2],
  status: e2[3],
  formation: e2[4],
  save: e2[5]
}), wm = { required: ["itemCategories", "menuCommands"], additionalProperties: false, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, Nm = (e2 = {}) => ({
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
}), Pm = { type: "boolean" }, Rm = {
  type: "object",
  additionalProperties: false,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: Pm,
    optDisplayTp: Pm,
    optDrawTitle: Pm,
    optExtraExp: Pm,
    optFloorDeath: Pm,
    optFollowers: Pm,
    optKeyItemsNumber: Pm,
    optSideView: Pm,
    optSlipDeath: Pm,
    optTransparent: Pm,
    optMessageSkip: Pm,
    optSplashScreen: Pm
  }
}, qm = (e2 = {}) => ({
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0,
  partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1]
}), Am = (e2, t2) => ({
  name: e2,
  id: t2
}), Cm = (e2) => e2.variables.map(Am), Dm = (e2) => e2.elements.map(Am), jm = (e2) => e2.equipTypes.map(Am), Mm = (e2) => e2.skillTypes.map(Am), zm = (e2) => e2.weaponTypes.map(Am), Em = (e2) => e2.armorTypes.map(Am), Fm = (e2) => e2.switches.map(Am), Bm = (e2, t2) => [Lm(e2, t2), Vm(e2, t2), Xm(e2, t2), Wm(e2, t2), Hm(e2, t2), Om(e2, t2), Gm(e2, t2)], Hm = (e2, t2) => ({
  items: Em(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), Lm = (e2, t2) => ({ items: Dm(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), Vm = (e2, t2) => ({ items: jm(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Wm = (e2, t2) => ({
  items: Mm(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), Om = (e2, t2) => ({ items: Cm(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variable"
} }), Gm = (e2, t2) => ({ items: Fm(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switch" } }), Xm = (e2, t2) => ({
  items: zm(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), Ym = (e2) => ({
  armorTypes: Km(e2.armorTypes),
  elements: Km(e2.elements),
  equipTypes: Km(e2.equipTypes),
  weaponTypes: Km(e2.weaponTypes),
  skillTypes: Km(e2.skillTypes),
  variables: Km(e2.variables),
  switches: Km(e2.switches)
}), Km = (e2) => e2 ? [...e2] : [], $m = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], _m = (e2) => e2.terms.params.map((e3, t2) => ({
  name: e3,
  id: t2
})), Um = (e2) => ({ background: e2.background ?? 0, offsetX: e2.offsetX ?? 0, offsetY: e2.offsetY ?? 0 }), Zm = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: sm(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), Jm = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), Qm = { title: "オプション", options: {
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
} }, es = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, ts = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, as = { title: "コマンド", options: {
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
} }, rs = {
  type: "object",
  additionalProperties: false,
  required: ["type", "weaponImageId"],
  properties: { type: { type: "number" }, weaponImageId: { type: "number" } }
}, is = {
  additionalProperties: false,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } }
}, ns = {
  additionalProperties: false,
  type: "object",
  required: ["actorId", "equips", "level"],
  properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: {
    type: "integer"
  } } }
}, os = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }, ms = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: os, victoryMe: os, gameoverMe: os, titleBgm: os, defeatMe: os, sounds: {
    type: "array",
    items: os,
    minItems: 24,
    maxItems: 24
  } }
}, ss = { type: "object", additionalProperties: false, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: true
}, battleSystem: { type: "number" } } }, ps = { additionalProperties: false, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, ls = {
  additionalProperties: false,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, ds = {
  type: "object",
  additionalProperties: false,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, cs = { type: "array", items: { type: "string" } }, us = {
  additionalProperties: false,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: cs,
    skillTypes: cs,
    elements: cs,
    variables: cs,
    equipTypes: cs,
    switches: cs,
    armorTypes: cs
  }
}, ys = { type: "string" }, gs = { type: "string", nullable: true }, bs = { type: "string" }, Is = {
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
        actionFailure: bs,
        actorDamage: bs,
        actorNoDamage: bs,
        actorRecovery: bs,
        actorGain: bs,
        actorLoss: bs,
        actorDrain: bs,
        alwaysDash: bs,
        bgmVolume: bs,
        bgsVolume: bs,
        commandRemember: bs,
        criticalToActor: bs,
        criticalToEnemy: bs,
        counterAttack: bs,
        debuffAdd: bs,
        defeat: bs,
        enemyDamage: bs,
        enemyNoDamage: bs,
        enemyRecovery: bs,
        enemyGain: bs,
        enemyLoss: bs,
        enemyDrain: bs,
        evasion: bs,
        expNext: bs,
        expTotal: bs,
        escapeFailure: bs,
        escapeStart: bs,
        file: bs,
        loadMessage: bs,
        meVolume: bs,
        magicEvasion: bs,
        magicReflection: bs,
        obtainExp: bs,
        obtainGold: bs,
        obtainItem: bs,
        obtainSkill: bs,
        partyName: bs,
        preemptive: bs,
        saveMessage: bs,
        seVolume: bs,
        substitute: bs,
        touchUI: bs,
        victory: bs,
        useItem: bs,
        buffAdd: bs,
        buffRemove: bs,
        actorNoHit: bs,
        enemyNoHit: bs,
        autosave: bs,
        emerge: bs,
        levelUp: bs,
        possession: bs,
        surprise: bs
      }
    }, commands: {
      type: "array",
      items: [ys, ys, ys, ys, ys, ys, ys, ys, ys, ys, ys, ys, ys, ys, ys, ys, ys, ys, ys, ys, gs, ys, ys, gs, ys, ys],
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
}, fs = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: ns },
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
}, hs = {
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
}, vs = { additionalProperties: false, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
  airship: hs,
  boat: hs,
  ship: hs,
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
  attackMotions: { type: "array", items: rs }
} }, ks = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), {
  required: [],
  properties: {}
}), xs = new e({ strict: true }), Ts = ((e2) => {
  const t2 = ks(e2);
  return {
    additionalProperties: false,
    type: "object",
    required: Array.from(new Set(t2.required)),
    properties: t2.properties
  };
})([vs, ms, ss, wm, Rm, ps, is, ds, us, Is, ls, fs]), Ss = xs.compile(Ts), ws = (e2) => Ss(e2), Ns = xs.compile(ns);
xs.compile(rs);
const Ps = xs.compile(is), Rs = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], qs = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], As = (e2, t2) => "string" == typeof e2 ? e2 : t2, Cs = (e2) => {
  var _a2, _b, _c, _d2, _e2, _f, _g, _h, _i2, _j, _k, _l2, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u, _v;
  const t2 = Ms(e2.size);
  return {
    ...Nm(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: pm(e2.sounds),
    editor: Jm(e2.editing),
    advanced: om(e2.advanced),
    title1Name: ((_c = e2.images) == null ? void 0 : _c.title1Name) ?? "",
    title2Name: ((_d2 = e2.images) == null ? void 0 : _d2.title2Name) ?? "",
    ...Ym(e2.dataNames ?? {}),
    magicSkills: js([]),
    airship: Zm((_e2 = e2.vehicles) == null ? void 0 : _e2.airship),
    boat: Zm((_f = e2.vehicles) == null ? void 0 : _f.boat),
    ship: Zm((_g = e2.vehicles) == null ? void 0 : _g.ship),
    defeatMe: sm((_h = e2.me) == null ? void 0 : _h.defeatMe),
    gameoverMe: sm((_i2 = e2.me) == null ? void 0 : _i2.gameoverMe),
    titleBgm: sm((_j = e2.bgm) == null ? void 0 : _j.titleBgm),
    tileSize: t2.tileSize,
    faceSize: t2.faceSize,
    iconSize: t2.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((_k = e2.battleTest) == null ? void 0 : _k.battleback1Name) ?? "",
    battleback2Name: ((_l2 = e2.battleTest) == null ? void 0 : _l2.battleback2Name) ?? "",
    testTroopId: ((_m2 = e2.battleTest) == null ? void 0 : _m2.testTroopId) ?? 0,
    testBattlers: zs((_n2 = e2.battleTest) == null ? void 0 : _n2.testBattlers, Es),
    battleBgm: sm((_o2 = e2.bgm) == null ? void 0 : _o2.battleBgm),
    victoryMe: sm((_p2 = e2.me) == null ? void 0 : _p2.victoryMe),
    editMapId: ((_q = e2.editorTemporary) == null ? void 0 : _q.editMapId) ?? 0,
    battlerName: ((_r2 = e2.editorTemporary) == null ? void 0 : _r2.battlerName) ?? "",
    locale: "",
    startMapId: ((_s2 = e2.gameInit) == null ? void 0 : _s2.startMapId) ?? 0,
    startX: ((_t2 = e2.gameInit) == null ? void 0 : _t2.startX) ?? 0,
    startY: ((_u = e2.gameInit) == null ? void 0 : _u.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Ds(e2.terms ?? {}),
    itemCategories: km(e2.itemCategories),
    partyMembersArray: js((_v = e2.gameInit) == null ? void 0 : _v.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: Tm(e2.menuComamnds)
  };
}, Ds = (e2) => {
  return { basic: Rs(e2.basic ?? {}), commands: (a2 = e2.commands ?? {}, qs(a2, "")), params: $m(e2.params ?? {}), messages: (t2 = e2.messages ?? {}, {
    actionFailure: As(t2.actionFailure, "Action failed."),
    actorDamage: As(t2.actorDamage, "%1 took %2 damage."),
    actorRecovery: As(t2.actorRecovery, "%1 recovered %2 HP."),
    actorGain: As(t2.actorGain, "%1 gained %2."),
    actorLoss: As(t2.actorLoss, "%1 lost %2."),
    actorDrain: As(t2.actorDrain, "%1 drained %2 HP."),
    actorNoDamage: As(t2.actorNoDamage, "%1 was not damaged."),
    actorNoHit: As(t2.actorNoHit, "%1 was not hit."),
    alwaysDash: As(t2.alwaysDash, "Always dash."),
    bgmVolume: As(t2.bgmVolume, "BGM volume"),
    bgsVolume: As(t2.bgsVolume, "BGS volume"),
    commandRemember: As(t2.commandRemember, "Command remember."),
    criticalToActor: As(t2.criticalToActor, "%1 dealt %2 damage to %3."),
    criticalToEnemy: As(t2.criticalToEnemy, "%1 dealt %2 damage to %3."),
    counterAttack: As(t2.counterAttack, "%1 countered!"),
    debuffAdd: As(t2.debuffAdd, "%1's %2 was lowered."),
    defeat: As(t2.defeat, "Defeat."),
    enemyDamage: As(t2.enemyDamage, "%1 took %2 damage."),
    enemyDrain: As(t2.enemyDrain, "%1 drained %2 HP."),
    enemyGain: As(t2.enemyGain, "%1 gained %2."),
    enemyLoss: As(t2.enemyLoss, "%1 lost %2."),
    enemyNoDamage: As(t2.enemyNoDamage, "%1 was not damaged."),
    enemyNoHit: As(t2.enemyNoHit, "%1 was not hit."),
    enemyRecovery: As(t2.enemyRecovery, "%1 recovered %2 HP."),
    evasion: As(t2.evasion, "%1 evaded the attack!"),
    autosave: As(t2.autosave, "Autosave"),
    escapeFailure: As(t2.escapeFailure, "Escape failed."),
    escapeStart: As(t2.escapeStart, "%1 started to escape!"),
    emerge: As(t2.emerge, "%1 appeared!"),
    expNext: As(t2.expNext, "Next level in %1 EXP."),
    expTotal: As(t2.expTotal, "Total EXP: %1"),
    file: As(t2.file, "File"),
    buffAdd: As(t2.buffAdd, "%1's %2 was raised."),
    buffRemove: As(t2.buffRemove, "%1's %2 was lowered."),
    obtainExp: As(t2.obtainExp, "%1 EXP obtained."),
    obtainGold: As(t2.obtainGold, "%1 gold obtained."),
    obtainItem: As(t2.obtainItem, "%1 obtained %2."),
    obtainSkill: As(t2.obtainSkill, "%1 learned %2."),
    levelUp: As(t2.levelUp, "%1 leveled up!"),
    partyName: As(t2.partyName, "Party"),
    loadMessage: As(t2.loadMessage, "Load %1?"),
    meVolume: As(t2.meVolume, "ME volume"),
    possession: As(t2.possession, "Possession"),
    preemptive: As(t2.preemptive, "%1 attacked first!"),
    saveMessage: As(t2.saveMessage, "Save %1?"),
    seVolume: As(t2.seVolume, "SE volume"),
    magicEvasion: As(t2.magicEvasion, "%1 evaded the magic!"),
    magicReflection: As(t2.magicReflection, "%1 reflected the magic!"),
    substitute: As(t2.substitute, "%1 took the hit!"),
    surprise: As(t2.surprise, "%1 surprised the enemy!"),
    touchUI: As(t2.touchUI, "Touch UI"),
    useItem: As(t2.useItem, "%1 used %2."),
    victory: As(t2.victory, "Victory!")
  }) };
  var t2, a2;
}, js = (e2) => e2 ? [...e2] : [], Ms = (e2) => ((e3) => Ps(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, zs = (e2, t2) => e2 ? e2.map(t2) : [], Es = (e2) => ((e3) => Ns(e3))(e2) ? { actorId: e2.actorId, equips: js(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, Fs = (e2, t2, a2, r2, i2, n2) => [...Ii(a2, r2), ...Ia(e2, t2), ...Bm(i2, n2)], Bs = (e2, t2) => ji(wo(t2), e2), Hs = (e2, t2, a2) => {
  const r2 = mn(t2);
  return ji(a2 ? [...r2, ...a2] : r2, e2);
}, Ls = (e2) => Object.entries(e2).map(([, e3]) => e3.title), Vs = (e2, t2 = 0) => ({ code: 320, parameters: [e2.actorId, e2.name], indent: t2 }), Ws = (e2, t2 = 0) => ({
  code: 324,
  parameters: [e2.actorId, e2.nickname],
  indent: t2
}), Os = (e2, t2 = 0) => ({ code: 325, parameters: [e2.actorId, e2.profile], indent: t2 }), Gs = (e2, t2) => Xs(e2, sm({ name: t2 })), Xs = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [sm(t2)],
  indent: a2
}), Ys = (e2, t2 = 0) => Xs(241, e2, t2), Ks = (e2, t2 = 0) => Xs(245, e2, t2), $s = (e2, t2 = 0) => Xs(249, e2, t2), _s = (e2, t2 = 0) => Xs(250, e2, t2), Us = (e2, t2 = 0) => Xs(132, e2, t2), Zs = (e2, t2 = 0) => Xs(133, e2, t2), Js = (e2, t2 = 0) => Xs(139, e2, t2), Qs = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: tp(e2 ?? {})
}), ep = (e2) => ({ eventId: e2[0] }), tp = (e2) => [e2.eventId ?? 0], ap = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), rp = (e2) => [e2.min, e2.max, e2.value], ip = (e2, t2 = 0) => ({
  code: 121,
  indent: t2,
  parameters: rp(e2)
}), np = (e2) => [e2], op = (e2) => ({ comment: e2[0] }), mp = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: np(e2) }), sp = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: np(e2)
}), pp = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? mp(e3, t2) : sp(e3, t2)), lp = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], dp = (e2) => ({ variableId: e2[0], digits: e2[1] }), cp = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: lp(e2 ?? {})
}), up = (e2, t2 = 0) => ({ code: 402, indent: t2, parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""] }), yp = (e2) => ({ index: e2[0], name: e2[1] }), gp = (e2) => [e2.index ?? 0, e2.name ?? ""], bp = (e2) => ({
  choices: e2[0],
  cancelType: e2[1],
  defaultType: e2[2],
  positionType: e2[3],
  background: e2[4]
}), Ip = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], fp = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), hp = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), vp = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), kp = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), xp = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName], Tp = (e2, t2 = 0) => ({ code: 401, indent: t2, parameters: [e2] }), Sp = (e2, t2 = 0) => ({
  code: 355,
  indent: t2,
  parameters: [e2]
}), wp = (e2, t2 = 0) => ({ code: 655, indent: t2, parameters: [e2] }), Np = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Sp(e3, t2) : wp(e3, t2)), Pp = 0, Rp = 1, qp = 2, Ap = 3, Cp = 4, Dp = {
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
}, jp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], Mp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], zp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], Ep = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], Fp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], Bp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], Hp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, Dp[t2.param]], Lp = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, Vp = (e2, t2) => {
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
}, Wp = (e2) => [...e2], Op = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: Wp(e2.parameters)
}), Gp = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, Xp = (e2) => e2.parameters.every(Gp), Yp = new e({ strict: true }), Kp = Yp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{
    type: "integer",
    minimum: 0
  }, { type: "string" }] } },
  additionalProperties: false
}), $p = (e2) => Kp(e2), _p = Yp.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } }, required: ["code", "indent", "parameters"] }), Up = (e2) => _p(e2), Zp = Yp.compile({
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
}), Jp = (e2) => Zp(e2), Qp = Yp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
    type: "integer",
    enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
  } },
  additionalProperties: false
}), el = (e2) => Qp(e2), tl = Yp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), al = (e2) => tl(e2), rl = Yp.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), il = (e2) => rl(e2), nl = Yp.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } },
  required: ["code", "indent", "parameters"]
}), ol = (e2) => nl(e2), ml = Yp.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 402
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } },
  required: ["code", "indent", "parameters"]
}), sl = (e2) => ml(e2), pl = Yp.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), ll = (e2) => pl(e2), dl = Yp.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), cl = (e2) => dl(e2), ul = (e2) => Jp(e2) && 241 === e2.code, yl = (e2) => Jp(e2) && 245 === e2.code, gl = (e2) => Jp(e2) && 249 === e2.code, bl = (e2) => Jp(e2) && 250 === e2.code, Il = (e2) => Jp(e2) && 132 === e2.code, fl = (e2) => Jp(e2) && 133 === e2.code, hl = (e2) => Jp(e2) && 139 === e2.code, vl = (e2) => al(e2) && 401 === e2.code, kl = (e2) => al(e2) && 405 === e2.code, xl = (e2) => al(e2) && 108 === e2.code, Tl = (e2) => al(e2) && 408 === e2.code, Sl = (e2) => al(e2) && 355 === e2.code, wl = (e2) => al(e2) && 655 === e2.code, Nl = "bgm", Pl = "se", Rl = "me", ql = "bgs", Al = "battlebacks1", Cl = "battlebacks2", Dl = "characters", jl = "enemies", Ml = "faces", zl = "parallaxes", El = "pictures", Fl = "sv_actors", Bl = "sv_enemies", Hl = "system", Ll = "tilesets", Vl = "titles1", Wl = "titles2", Ol = "System.json", Gl = "Actors.json", Xl = "Classes.json", Yl = "Skills.json", Kl = "Items.json", $l = "Weapons.json", _l = "Armors.json", Ul = "Enemies.json", Zl = "Troops.json", Jl = "States.json", Ql = "Animations.json", ed = "Tilesets.json", td = "CommonEvents.json", ad = "MapInfos.json", rd = "data", id = "img", nd = "audio", od = "js", md = (e2, t2) => ({
  type: "array",
  items: t2,
  ...sd(e2),
  ...pd(e2.default)
}), sd = (e2) => ({ ..."string" == typeof e2.text ? { title: e2.text } : {}, ..."string" == typeof e2.desc ? { description: e2.desc } : {} }), pd = (e2) => void 0 !== e2 ? {
  default: e2
} : {}, ld = (e2) => void 0 === e2 || 0 === e2, dd = (e2) => md(e2, { type: "string" }), cd = (e2) => {
  switch (e2.kind) {
    case "string":
    case "multiline_string":
      return ((e3) => ({
        type: "string",
        ...sd(e3),
        ...pd(e3.default)
      }))(e2);
    case "file":
    case "combo":
      return ((e3) => ({ type: "string", ...pd(e3.default), ...sd(e3) }))(e2);
    case "select":
      return ((e3) => ({ type: "string", ...pd(e3.default), ...sd(e3), ...e3.options ? {
        enum: e3.options.map((e4) => e4.value)
      } : {} }))(e2);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return dd(e2);
    case "number[]":
      return ((e3) => ({ type: "array", items: {
        type: ld(e3.decimals) ? "integer" : "number"
      }, ...pd(e3.default), ...sd(e3) }))(e2);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ((e3) => md(e3, { type: "integer" }))(e2);
    case "number":
      return ((e3) => ({ type: ld(e3.decimals) ? "integer" : "number", ...pd(e3.default), ...sd(e3) }))(e2);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((e3) => ({ type: "integer", ...pd(e3.default), ...sd(e3) }))(e2);
    case "boolean":
      return ((e3) => ({ type: "boolean", ...pd(e3.default), ...sd(e3) }))(e2);
    case "struct":
      return { $ref: `#/definitions/${(t2 = e2).struct}`, ...sd(t2) };
    default:
      return {};
  }
  var t2;
}, ud = (e2, t2) => Object.entries(t2).reduce((t3, [a2, r2]) => {
  if (a2 in e2) {
    const i2 = e2[a2];
    if ("string" == typeof i2) return { ...t3, [a2]: r2(i2) };
  }
  return t3;
}, {}), yd = (e2, t2, a2, r2) => ({
  default: t2,
  ...ud(a2, r2),
  kind: e2
}), gd = (e2, t2, a2) => ({ default: [], ...ud(t2, a2), kind: e2 }), bd = "help", Id = "kind", fd = "text", hd = "struct", vd = (e2) => {
  const t2 = JSON.parse(e2);
  return Array.isArray(t2) ? t2.map(kd) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, kd(t3)])) : t2;
}, kd = (e2) => {
  if ("string" != typeof e2) return e2;
  try {
    const t2 = JSON.parse(e2);
    return Array.isArray(t2) ? t2.map(kd) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, kd(t3)])) : t2;
  } catch {
    return e2;
  }
}, xd = (e2) => {
  if (Id in e2.attr) {
    const t2 = Ad[e2.attr.kind];
    if (t2) return t2(e2);
  }
  return yd("any", "", e2.attr, wd);
}, Td = (e2) => e2, Sd = (e2) => e2.replace("[", "").replace("]", "").split(",").map((e3) => parseFloat(e3.replaceAll('"', "").trim())).filter((e3) => !isNaN(e3)), wd = {
  default: Td,
  text: Td,
  desc: Td,
  parent: Td
}, Nd = (e2) => yd("string", "", e2.attr, wd), Pd = (e2) => {
  const t2 = { default: (e3) => vd(e3), text: Td, desc: Td, parent: Td };
  return gd("string[]", e2.attr, t2);
}, Rd = (e2, t2) => {
  const a2 = {
    default: Sd,
    text: Td,
    desc: Td,
    parent: Td
  };
  return gd(t2, e2.attr, a2);
}, qd = (e2, t2) => {
  const a2 = { default: (e3) => parseInt(e3, 10), text: Td, desc: Td, parent: Td };
  return yd(t2, 0, e2.attr, a2);
}, Ad = {
  number: (e2) => ((e3) => {
    const t2 = {
      default: (e4) => parseFloat(e4),
      text: Td,
      desc: Td,
      decimals: (e4) => parseInt(e4, 10),
      min: (e4) => parseFloat(e4),
      max: (e4) => parseFloat(e4),
      parent: Td
    };
    return yd("number", 0, e3.attr, t2);
  })(e2),
  "number[]": (e2) => {
    const t2 = { default: Sd, text: Td, desc: Td, decimals: (e3) => parseInt(e3, 10), min: (e3) => parseFloat(e3), max: (e3) => parseFloat(e3), parent: Td };
    return gd("number[]", e2.attr, t2);
  },
  string: Nd,
  "string[]": Pd,
  multiline_string: Nd,
  "multiline_string[]": Pd,
  combo: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => e3.option)) ?? [];
    return { ...yd("combo", "", e2.attr, wd), options: t2 };
  },
  select: (e2) => {
    var _a2;
    const t2 = ((_a2 = e2.options) == null ? void 0 : _a2.map((e3) => ({ option: e3.option, value: e3.value }))) ?? [];
    return { ...yd("select", "", e2.attr, wd), options: t2 };
  },
  actor: (e2) => qd(e2, "actor"),
  "actor[]": (e2) => Rd(e2, "actor[]"),
  class: (e2) => qd(e2, "class"),
  "class[]": (e2) => Rd(e2, "class[]"),
  skill: (e2) => qd(e2, "skill"),
  "skill[]": (e2) => Rd(e2, "skill[]"),
  item: (e2) => qd(e2, "item"),
  "item[]": (e2) => Rd(e2, "item[]"),
  weapon: (e2) => qd(e2, "weapon"),
  "weapon[]": (e2) => Rd(e2, "weapon[]"),
  armor: (e2) => qd(e2, "armor"),
  "armor[]": (e2) => Rd(e2, "armor[]"),
  state: (e2) => qd(e2, "state"),
  "state[]": (e2) => Rd(e2, "state[]"),
  enemy: (e2) => qd(e2, "enemy"),
  "enemy[]": (e2) => Rd(e2, "enemy[]"),
  common_event: (e2) => qd(e2, "common_event"),
  "common_event[]": (e2) => Rd(e2, "common_event[]"),
  switch: (e2) => qd(e2, "switch"),
  "switch[]": (e2) => Rd(e2, "switch[]"),
  variable: (e2) => qd(e2, "variable"),
  "variable[]": (e2) => Rd(e2, "variable[]"),
  troop: (e2) => qd(e2, "troop"),
  "troop[]": (e2) => Rd(e2, "troop[]"),
  boolean: (e2) => {
    const t2 = {
      default: (e3) => "true" === e3,
      text: Td,
      desc: Td,
      on: Td,
      off: Td,
      parent: Td
    };
    return yd("boolean", true, e2.attr, t2);
  },
  file: (e2) => {
    const t2 = { default: Td, text: Td, desc: Td, parent: Td, dir: Td };
    return { dir: "", ...yd("file", "", e2.attr, t2) };
  },
  "file[]": (e2) => {
    const t2 = { default: (e3) => vd(e3), text: Td, desc: Td, parent: Td, dir: Td };
    return { dir: "", ...gd("file[]", e2.attr, t2) };
  }
}, Cd = "BODY", Dd = "STRUCT", jd = "NONE", Md = (e2, t2) => {
  const a2 = e2.lines.length > 0 ? Ed(e2) : e2, r2 = t2[1] || void 0;
  return { ...a2, structName: r2, blockType: r2 ? Dd : "INVALID", locale: t2[2], lines: [] };
}, zd = (e2) => ({
  ...e2.lines.length > 0 ? Ed(e2) : e2,
  blockType: Cd,
  structName: void 0,
  locale: void 0,
  lines: []
}), Ed = (e2) => e2.blockType === Cd ? { ...e2, bodies: e2.bodies.concat([{ lines: [...e2.lines] }]), lines: [], blockType: jd } : e2.structName && e2.blockType === Dd ? {
  ...e2,
  structs: e2.structs.concat([{ struct: e2.structName, locale: e2.locale, lines: [...e2.lines] }]),
  blockType: jd,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e2,
  blockType: jd,
  structName: void 0,
  lines: []
}, Fd = (e2) => e2.currentOption ? { items: e2.items.concat({ option: e2.currentOption, value: e2.currentOption }) } : e2, Bd = (e2) => ({
  ..."string" == typeof e2.desc ? { desc: e2.desc } : {},
  ..."string" == typeof e2.text ? { text: e2.text } : {}
}), Hd = (e2) => {
  const t2 = Ld(e2), a2 = Wd(t2);
  return Vd(a2);
}, Ld = (e2) => {
  if (e2.currentParam && e2.currentOption) {
    const t2 = e2.currentParam.attr.kind;
    if ("select" === t2 || "combo" === t2) return { ...e2, currentParam: { ...e2.currentParam, options: Fd(e2.currentOption).items } };
  }
  return e2;
}, Vd = (e2) => e2.currentParam ? {
  ...e2,
  params: [...e2.params, e2.currentParam],
  currentParam: null,
  currentContext: null
} : e2, Wd = (e2) => {
  if (e2.currentCommand) {
    const t2 = e2.currentParam ? [...e2.currentCommand.args, e2.currentParam] : e2.currentCommand.args, a2 = { ...Bd(e2.currentCommand), command: e2.currentCommand.command, args: t2 };
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
}, Od = (e2, t2) => {
  const a2 = e2.lines.reduce((e3, a3) => {
    const r2 = a3.trim().replace(/^\*\s?/, "");
    if (!r2.startsWith("@")) return e3.currentContext === bd ? { ...e3, helpLines: e3.helpLines.concat(r2) } : e3;
    const [i2, ...n2] = r2.slice(1).split(" "), o2 = n2.join(" ").trim(), m2 = t2[i2];
    return m2 ? m2(e3, o2) : e3;
  }, Xd());
  return Hd(a2);
}, Gd = (e2, t2) => {
  const a2 = ((e3) => {
    const t3 = e3.split("\n"), a3 = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: jd
    }, r3 = t3.reduce((e4, t4) => {
      const a4 = t4.trim(), r4 = a4.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return r4 ? Md(e4, r4) : "/*:" === a4 ? zd(e4) : "*/" === a4 ? e4.lines.length > 0 ? Ed(e4) : e4 : { ...e4, lines: e4.lines.concat([a4]) };
    }, a3);
    return { structs: r3.structs, bodies: r3.bodies };
  })(e2), r2 = a2.structs.map((e3) => ((e4) => {
    const t3 = Od(e4, $d);
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
  const n2 = Od(i2, t2);
  return { params: n2.params, commands: n2.commands, meta: n2.meta, helpLines: n2.helpLines, structs: r2 };
}, Xd = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), Yd = (e2, t2, a2) => e2.currentParam && !(t2 in e2.currentParam.attr) ? {
  ...e2,
  currentParam: { ...e2.currentParam, attr: { ...e2.currentParam.attr, [t2]: a2 } }
} : e2, Kd = (e2, t2, a2) => ({ ...e2, meta: { [t2]: a2, ...e2.meta } }), $d = {
  param: (e2, t2) => {
    const a2 = Hd(e2);
    return a2.params.some((e3) => e3.name === t2) ? a2 : { ...a2, currentContext: "param", currentParam: { name: t2, attr: {} } };
  },
  text: (e2, t2) => e2.currentParam ? Yd(e2, fd, t2) : e2.currentCommand && !(fd in e2.currentCommand) ? { ...e2, currentCommand: {
    ...Bd(e2.currentCommand),
    command: e2.currentCommand.command,
    args: e2.currentCommand.args,
    [fd]: t2
  } } : e2,
  desc: (e2, t2) => e2.currentParam ? Yd(e2, "desc", t2) : e2.currentCommand ? { ...e2, currentCommand: { ...e2.currentCommand, desc: t2 } } : e2,
  command: (e2, t2) => {
    const a2 = Hd(e2);
    return a2.commands.some((e3) => e3.command === t2) ? a2 : { ...a2, currentCommand: { command: t2, args: [] }, currentParam: null };
  },
  arg: (e2, t2) => {
    if (!e2.currentCommand) return e2;
    if (e2.currentParam) {
      const a2 = {
        ...Bd(e2.currentCommand),
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
  help: (e2) => ({ ...Hd(e2), currentContext: bd }),
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
      const a2 = t2.slice(7, -1), r2 = Yd(e2, hd, a2);
      return Yd(r2, Id, hd);
    }
    return e2.currentParam ? Yd(e2, Id, t2) : e2;
  },
  default: (e2, t2) => Yd(e2, "default", t2),
  on: (e2, t2) => Yd(e2, "on", t2),
  off: (e2, t2) => Yd(e2, "off", t2),
  min: (e2, t2) => Yd(e2, "min", t2),
  max: (e2, t2) => Yd(e2, "max", t2),
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
  author: (e2, t2) => Kd(e2, "author", t2),
  plugindesc: (e2, t2) => Kd(e2, "plugindesc", t2),
  url: (e2, t2) => Kd(e2, "url", t2)
}, _d = (e2) => Ud(((e3) => Gd(e3, $d))(e2)), Ud = (e2) => ({
  target: "MZ",
  meta: e2.meta,
  commands: Jd(e2.commands),
  params: Zd(e2.params)
}), Zd = (e2) => e2.reduce((e3, t2) => ({ [t2.name]: xd(t2), ...e3 }), {}), Jd = (e2) => e2.reduce((e3, t2) => {
  const a2 = { desc: t2.desc, text: t2.text, args: Zd(t2.args) };
  return { [t2.command]: a2, ...e3 };
}, {}), Qd = (e2) => _d(e2), ec = (e2) => ((e3) => {
  const t2 = Object.entries(e3).reduce((e4, [t3, a2]) => {
    const r2 = cd(a2);
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
  fi as AUTHOR_RMMZ,
  je as BATTLE_PROCESSING,
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
  Ce as CHANGE_PARALLAX,
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
  lr as COLLAPS_BOSS,
  dr as COLLAPS_INSTANT,
  cr as COLLAPS_NONE,
  pr as COLLAPS_NORMAL,
  k as COMMENT_BODY,
  v as COMMENT_HEAD,
  R as COMMON_EVENT,
  T as CONDITIONAL_BRANCH,
  S as CONDITIONAL_BRANCH_ELSE,
  j as CONTROL_SELF_SWITCH,
  C as CONTROL_SWITCHES,
  M as CONTROL_TIMER,
  D as CONTROL_VARIABLES,
  Ra as DEFAULT_DAMAGE_LABELS,
  im as DEFAULT_GLOBAL_LABELS,
  qn as DEFAULT_ITEM_LABELS,
  An as DEFAULT_SKILL_LABELS,
  Qm as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  es as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Cn as DEFAULT_USABLE_ITEM_LABELS,
  Ji as EFFECT_ADD_BUFF,
  Qi as EFFECT_ADD_DEBUFF,
  Ui as EFFECT_ADD_STATE,
  on as EFFECT_COMMON_EVENT,
  _i as EFFECT_GAIN_TP,
  rn as EFFECT_GROW,
  nn as EFFECT_LEARN_SKILL,
  Ki as EFFECT_RECOVER_HP,
  $i as EFFECT_RECOVER_MP,
  en as EFFECT_REMOVE_BUFF,
  tn as EFFECT_REMOVE_DEBUFF,
  Zi as EFFECT_REMOVE_STATE,
  an as EFFECT_SPECIAL,
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
  Gl as FILENAME_ACTORS,
  Ql as FILENAME_ANIMATIONS,
  _l as FILENAME_ARMORS,
  Xl as FILENAME_CLASSES,
  td as FILENAME_COMMON_EVENTS,
  Ul as FILENAME_ENEMIES,
  Kl as FILENAME_ITEMS,
  ad as FILENAME_MAP_INFOS,
  Yl as FILENAME_SKILLS,
  Jl as FILENAME_STATES,
  Ol as FILENAME_SYSTEM,
  ed as FILENAME_TILESET,
  Zl as FILENAME_TROOPS,
  $l as FILENAME_WEAPONS,
  oi as FLAG_ID_AUTO_BATTLE,
  mi as FLAG_ID_GUARD,
  pi as FLAG_ID_PRESERVE_TP,
  si as FLAG_ID_SUBSTITUTE,
  le as FLASH_SCREEN,
  nd as FOLDER_AUDIO,
  Nl as FOLDER_AUDIO_BGM,
  ql as FOLDER_AUDIO_BGS,
  Rl as FOLDER_AUDIO_ME,
  Pl as FOLDER_AUDIO_SE,
  rd as FOLDER_DATA,
  id as FOLDER_IMG,
  Al as FOLDER_IMG_BATTLEBACK1,
  Cl as FOLDER_IMG_BATTLEBACK2,
  Dl as FOLDER_IMG_CHACTERS,
  jl as FOLDER_IMG_ENEMIES,
  Ml as FOLDER_IMG_FACES,
  zl as FOLDER_IMG_PARALLACES,
  El as FOLDER_IMG_PICTURES,
  Fl as FOLDER_IMG_SV_ACTORS,
  Bl as FOLDER_IMG_SV_ENEMIES,
  Hl as FOLDER_IMG_SYSTEM,
  Ll as FOLDER_IMG_TILESETS,
  Vl as FOLDER_IMG_TITLES1,
  Wl as FOLDER_IMG_TITLES2,
  od as FOLDER_JS,
  tt as FORCE_ACTION,
  ot as GAME_OVER,
  oe as GATHER_FOLLOWERS,
  De as GET_LOCATION_INFO,
  ee as GET_ONOFF_VEHICLE,
  Gi as HITTYPE_CERTAIN,
  Yi as HITTYPE_MAGICAL,
  Xi as HITTYPE_PHYSICAL,
  b as INPUT_NUMBER,
  q as LABEL,
  Oi as LABELS_DATA_WEAPON,
  ts as LABELS_SYSTEM_BATTLER_PARAMS,
  as as LABELS_SYSTEM_GAME_COMMANDS,
  A as LABEL_JUMP,
  Pa as LABEL_SET_DATA,
  Nn as LABEL_SET_ITEM_EFFECT,
  bi as LABEL_SET_TRAIT,
  w as LOOP,
  N as LOOP_BREAK,
  uo as MODULE_DATA,
  ye as MOVE_PICTURE,
  Ee as NAME_INPUT_PROCESSING,
  d as NO_OPERATION,
  rt as OPEN_MENU_SCREEN,
  nt as OPEN_SAVE_SCREEN,
  Pp as OPERAND_CONSTANT,
  Ap as OPERAND_GAMEDATA,
  qp as OPERAND_RANDOM,
  Cp as OPERAND_SCRIPT,
  Rp as OPERAND_VARIABLE,
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
  lt as PLUGIN_COMMAND_MV,
  dt as PLUGIN_COMMAND_MZ,
  Le as RECOVER_ALL,
  Mr as REGULAR_PARAM_AGI,
  Ar as REGULAR_PARAM_ATK,
  Cr as REGULAR_PARAM_DEF,
  zr as REGULAR_PARAM_LUK,
  Dr as REGULAR_PARAM_MATK,
  Rr as REGULAR_PARAM_MAX_HP,
  qr as REGULAR_PARAM_MAX_MP,
  jr as REGULAR_PARAM_MDEF,
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
  jt as ROUTE_TURN_90D_R,
  Et as ROUTE_TURN_90D_R_L,
  Ht as ROUTE_TURN_AWAY,
  qt as ROUTE_TURN_DOWN,
  At as ROUTE_TURN_LEFT,
  Ft as ROUTE_TURN_RANDOM,
  Ct as ROUTE_TURN_RIGHT,
  Bt as ROUTE_TURN_TOWARD,
  Dt as ROUTE_TURN_UP,
  Rt as ROUTE_WAIT,
  Xt as ROUTE_WALK_ANIME_OFF,
  Gt as ROUTE_WALK_ANIME_ON,
  ke as SAVE_BGM,
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
  Pn as SPECIAL_EFFECT_ESCAPE,
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
  hi as SRC_COLOR,
  yo as SRC_DATA_ACTOR,
  ko as SRC_DATA_ARMOR,
  xo as SRC_DATA_CLASS,
  To as SRC_DATA_COMMON_EVNET,
  bo as SRC_DATA_ENEMY,
  ho as SRC_DATA_ITEMS,
  go as SRC_DATA_MAP,
  fo as SRC_DATA_SKILL,
  Io as SRC_DATA_STATE,
  So as SRC_DATA_TROOP,
  vo as SRC_DATA_WEAPON,
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
  ce as WAIT,
  Bi as applyFormatRule,
  Fs as buildReferenceItemSources,
  hp as cloneChoices,
  Op as cloneEventCommand,
  Wp as cloneParameters,
  yr as collapsOptionsToArray,
  Si as compileFormatRule,
  Hs as compileItemEffectDisplayData,
  Bs as compileTraitDisplayData,
  op as convertCommentArrayToObject,
  i as createActorControlChars,
  t as createControlCharFormat,
  ct as createEventCommand,
  io as createNoteEntity,
  n as createSystemVariableControlChars,
  Ia as defineGameDataSources,
  Bm as defineSystemItems,
  ur as defineTraitCollapseType,
  wr as defineTraitExtraParam,
  Ii as defineTraitItems,
  ii as defineTraitPartyAbility,
  Er as defineTraitRegularParam,
  li as defineTraitSpecialFlag,
  _r as defineTraitSpecialParam,
  qi as detectFormatErrors,
  Ls as domainNames,
  Pr as extraParamName,
  Nr as extraParamsToArray,
  Rn as formatItemEffectText,
  Vi as formatTraitText,
  ep as fromArrayCommonEvent,
  ap as fromArrayControlSwitches,
  dp as fromArrayInputNumber,
  bp as fromArraySetupChoice,
  yp as fromArraySetupChoiceItem,
  kp as fromArrayShowMessageHeader,
  a as fromStringArray,
  Vp as getActorValue,
  hm as getArmorCategoryEnabled,
  Em as getArmorTypes,
  r as getControlChars,
  Dm as getElementTypes,
  Lp as getEnemyValue,
  um as getEquipCommandEnabled,
  jm as getEquipTypes,
  gm as getFormationCommandEnabled,
  Im as getItemCategoryEnabled,
  dm as getItemCommandEnabled,
  vm as getKeyItemCategoryEnabled,
  lo as getNoteValue,
  _m as getParamNames,
  bm as getSaveCommandEnabled,
  cm as getSkillCommandEnabled,
  Mm as getSkillTypes,
  ym as getStatusCommandEnabled,
  Fm as getSwitches,
  Cm as getVariableNames,
  fm as getWeaponCategoryEnabled,
  zm as getWeaponTypes,
  Xp as isCloneableCommand,
  Jp as isCommandAudio,
  $p as isCommandChangeActorText,
  Il as isCommandChangeBattleBgm,
  hl as isCommandChangeDefeatMe,
  fl as isCommandChangeVictoryMe,
  Tl as isCommandCommentBody,
  xl as isCommandCommentHeader,
  il as isCommandCommonEvent,
  ll as isCommandInputNumber,
  el as isCommandNonParam,
  ul as isCommandPlayBgm,
  yl as isCommandPlayBgs,
  gl as isCommandPlayMe,
  bl as isCommandPlaySe,
  wl as isCommandScriptBody,
  Sl as isCommandScriptHeader,
  Up as isCommandScrollTextHead,
  sl as isCommandShowChoiceItem,
  ol as isCommandShowChoices,
  cl as isCommandShowMessage,
  vl as isCommandShowMessageBody,
  kl as isCommandShowScrollingTextBody,
  al as isCommandTextBody,
  Kn as isDataActor,
  _n as isDataArmor,
  ro as isDataClass,
  Qn as isDataEnemy,
  On as isDataItem,
  ba as isDataMap,
  ga as isDataMapInfo,
  Xn as isDataSkill,
  to as isDataState,
  ws as isDataSystem,
  Zn as isDataWeapon,
  mm as isValidNumber,
  nm as labelsRegistry,
  Aa as makeActorData,
  Da as makeArmorData,
  Gs as makeAudioCommand,
  sm as makeAudioFileParams,
  Nm as makeBooleanOptions,
  ja as makeClassData,
  Xs as makeCommandAudioAny,
  Vs as makeCommandChangeActorName,
  Ws as makeCommandChangeActorNickName,
  Os as makeCommandChangeActorProfile,
  Us as makeCommandChangeBattleBGM,
  Js as makeCommandChangeDefeatME,
  Zs as makeCommandChangeVictoryME,
  sp as makeCommandCommentBody,
  mp as makeCommandCommentHeader,
  Qs as makeCommandCommonEvent,
  ip as makeCommandControlSwitches,
  cp as makeCommandInputNumber,
  Ys as makeCommandPlayBGM,
  Ks as makeCommandPlayBGS,
  $s as makeCommandPlayME,
  _s as makeCommandPlaySE,
  Np as makeCommandScriptArray,
  wp as makeCommandScriptBody,
  Sp as makeCommandScriptHeader,
  fp as makeCommandSetupChoice,
  up as makeCommandShowChoiceItem,
  vp as makeCommandShowMessage,
  Tp as makeCommandShowMessageBody,
  np as makeCommentArray,
  pp as makeCommentCommandArray,
  o as makeCommonEventData,
  qa as makeDamage,
  Ym as makeDataNames,
  Ma as makeDropItem,
  Jm as makeEditorSetting,
  za as makeEnemyAction,
  Ea as makeEnemyData,
  l as makeEventPageCondition,
  qm as makeGameInitial,
  km as makeItemCategories,
  xm as makeItemCategoriesFromArray,
  Dn as makeItemData,
  sa as makeMapData,
  na as makeMapEvent,
  oa as makeMapEventIamge,
  ma as makeMapEventPage,
  pa as makeMapInfoData,
  Tm as makeMenuCommandsEnabled,
  Sm as makeMenuCommandsEnabledFromArray,
  $m as makeParamNamesArray,
  no as makeRegex,
  jn as makeSkillData,
  pm as makeSoundsArray,
  lm as makeSoundsObject,
  Fa as makeStateData,
  om as makeSystemAdvanced,
  Cs as makeSystemData,
  Um as makeTitleCommandWindow,
  m as makeTroopData,
  p as makeTroopEventConditions,
  s as makeTroopMember,
  Zm as makeVehicleData,
  Wi as makeWeaponData,
  ji as mergeItemsSource,
  Ca as normalizeDataActor,
  ni as partyAbilityToArray,
  Qd as pluginSourceToJSON,
  mo as readNote,
  oo as readNoteObject,
  Br as regularParamName,
  Fr as regularParamsToArray,
  po as replaceNote,
  mn as resolveItemEffectLabels,
  wo as resolveTraitLabels,
  co as setNoteValue,
  di as specialFlagToArray,
  Zr as specialParamName,
  Ur as specialParamsToArray,
  ec as structToJSONSchema,
  tp as toArrayCommonEvent,
  rp as toArrayControlSwitches,
  lp as toArrayInputNumber,
  Bp as toArrayOperandActorStatus,
  jp as toArrayOperandConstant,
  Hp as toArrayOperandEnemyStatus,
  Fp as toArrayOperandItemData,
  zp as toArrayOperandRandom,
  Ep as toArrayOperandScript,
  Mp as toArrayOperandVariable,
  Ip as toArraySetupChoice,
  gp as toArraySetupChoiceItem,
  xp as toArrayShowMessageHeader
};
//# sourceMappingURL=rpgTypes.es.js.map
