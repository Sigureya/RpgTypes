import { aF as ea, aJ as ta, aK as sa, ax as Q, ay as Z, az as J, ae as ra, ai as ma, ak as na, al as oa, F as ia, G as da, P as pa, p as ca, u as Ea, z as y, cZ as I, cY as R, c$ as A, c_ as C, A as N, B as g, C as la, j as Aa, h as Ta, i as _a, aZ as Ia, a_ as Ra, au as Ca, av as Sa, v as c, cX as ya, cQ as Na, cU as Oa, cS as Ma } from "../shared/make.es2.js";
import { aT as ln, at as An, aH as Tn, aC as _n, aq as In, aG as Rn, K as Cn, aL as Sn, aM as yn, aN as Nn, aV as On, aB as Mn, M as gn, y as Ln, ao as un, J as Pn, ar as bn, aD as kn, D as Dn, a0 as vn, H as fn, aE as Fn, ap as hn, Y as Gn, Q as Un, aI as Hn, O as Bn, bv as xn, bw as Vn, bx as wn, bu as Yn, l as Wn, n as Kn, w as Xn, x as qn, cr as zn, cs as jn, cp as Qn, cy as Zn, co as Jn, cw as $n, cx as ao, cm as eo, cn as to, ct as so, cu as ro, cq as mo, cv as no, aP as oo, aO as io, aQ as po, $ as co, ac as Eo, E as lo, bB as Ao, bE as To, bA as _o, bz as Io, by as Ro, bF as Co, bC as So, bD as yo, bG as No, bH as Oo, a3 as Mo, af as go, aj as Lo, a2 as uo, cf as Po, cg as bo, ci as ko, ch as Do, a5 as vo, aS as fo, aX as Fo, a1 as ho, as as Go, X as Uo, I as Ho, q as Bo, s as xo, L as Vo, o as wo, a9 as Yo, aw as Wo, N as Ko, aU as Xo, aW as qo, c9 as zo, cc as jo, c7 as Qo, c8 as Zo, cb as Jo, ca as $o, an as ai, a$ as ei, b0 as ti, aA as si, bR as ri, bN as mi, bO as ni, bS as oi, bP as ii, bL as di, bM as pi, bQ as ci, ah as Ei, aY as li, aa as Ai, ag as Ti, V as _i, g as Ii, U as Ri, W as Ci, R as Si, ad as yi, a6 as Ni, Z as Oi, _ as Mi, aR as gi, d as Li, e as ui, S as Pi, c as bi, a8 as ki, k as Di, c3 as vi, c2 as fi, bX as Fi, b_ as hi, c1 as Gi, c0 as Ui, bZ as Hi, bY as Bi, b$ as xi, bW as Vi, am as wi, ab as Yi, a4 as Wi, bo as Ki, ba as Xi, be as qi, bc as zi, bb as ji, bd as Qi, bq as Zi, b4 as Ji, b3 as $i, bk as ad, bl as ed, bm as td, bj as sd, b7 as rd, br as md, bh as nd, bi as od, bf as id, bg as dd, bn as pd, b9 as cd, bp as Ed, b5 as ld, b6 as Ad, b8 as Td, T as _d, a7 as Id, cz as Rd, bt as Cd, cE as Sd, b1 as yd, cP as Nd, bs as Od, bI as Md, b2 as gd, cd as Ld, bT as ud, cj as Pd, c4 as bd, bK as kd, bJ as Dd, f as vd, cN as fd, cJ as Fd, cK as hd, cG as Gd, cL as Ud, cO as Hd, cI as Bd, cM as xd, m as Vd, a as wd, cR as Yd, cT as Wd, cV as Kd, cW as Xd, cA as qd, ce as zd, cB as jd, cC as Qd, cD as Zd, bV as Jd, bU as $d, cF as ap, b as ep, cl as tp, r as sp, cH as rp, ck as mp, c6 as np, c5 as op, t as ip } from "../shared/make.es2.js";
import { c as ga, a as La, m as r } from "../shared/make.es.js";
const _e = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), Ie = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [1, a.targetSelectVariableId]
}), Re = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: m = "", battlerName: n = "" } = {}, o = 0) => ({
  code: 322,
  indent: o,
  parameters: [a, m, s, t, e, n]
}), k = (a, e) => `\\${a}[${e}]`, Ce = (a, e) => e.map((t, s) => ({ text: t, controlChar: k(a, s) })), Se = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e) => ({
  char: e[1],
  id: parseInt(e[2], 10)
})), ye = (a) => a.map((e) => ({ text: e.name, controlChar: k("N", e.id) })), Ne = (a) => a.variables.map((e, t) => ({
  text: e || "",
  controlChar: k("V", t)
})).filter((e) => e.text !== ""), Oe = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", trigger: a.trigger ?? 0, list: a.list ?? [], switchId: a.switchId ?? 0 }), Me = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  members: a.members ?? [],
  pages: a.pages ?? []
}), ge = (a = {}) => ({ enemyId: a.enemyId ?? 0, x: a.x ?? 0, y: a.y ?? 0, hidden: a.hidden ?? !1 }), Le = (a = {}) => ({
  actorHp: a.actorHp ?? 0,
  actorId: a.actorId ?? 0,
  enemyValid: a.enemyValid ?? 0,
  switchValid: a.switchValid ?? 0
}), ua = (a = {}) => ({
  switch1Id: a.switch1Id ?? 0,
  switch1Valid: a.switch1Id !== void 0,
  switch2Id: a.switch2Id ?? 0,
  switch2Valid: a.switch2Id !== void 0,
  variableId: a.variableId ?? 0,
  variableValid: a.variableId !== void 0,
  variableValue: a.variableValue ?? 0,
  selfSwitchCh: a.selfSwitchCh ?? "A",
  selfSwitchValid: a.selfSwitchCh !== void 0,
  itemId: a.itemId ?? 0,
  itemValid: a.itemId !== void 0,
  actorId: a.actorId ?? 0,
  actorValid: a.actorId !== void 0
}), ue = 0, Pe = 1, be = 2, ke = 3, De = 4, ve = 5, fe = 6, Fe = 7, he = 8, Ge = 9, Ue = 10, He = 11, Be = 12, xe = 13, Ve = 14, we = 15, Ye = 16, We = 17, Ke = 18, Xe = 19, qe = 20, ze = 21, je = 22, Qe = 23, Ze = 24, Je = 25, $e = 26, at = 27, et = 28, tt = 29, st = 30, rt = 31, mt = 32, nt = 33, ot = 34, it = 35, dt = 36, pt = 37, ct = 38, Et = 39, lt = 40, At = 41, Tt = 42, _t = 43, It = 44, Rt = 45, Ct = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: m = 0, y: n = 0 } = {}) => ({
  id: a,
  name: e,
  pages: t,
  note: s,
  x: m,
  y: n
}), Pa = ({ characterIndex: a = 0, characterName: e = "", direction: t = 2, pattern: s = 0, tileId: m = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: t,
  pattern: s,
  tileId: m
}), St = ({ list: a = [], conditions: e = ua(), image: t = Pa(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: n = { list: [], repeat: !1, skippable: !1, wait: !1 }, priorityType: o = 1 } = {}) => ({
  conditions: e,
  list: a,
  directionFix: m,
  image: t,
  priorityType: o,
  moveFrequency: s,
  moveRoute: { list: n.list, repeat: n.repeat, skippable: n.skippable, wait: n.wait }
}), yt = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), Nt = (a = {}) => ({
  tilesetId: a.tilesetId ?? 1,
  data: a.data ?? [],
  battleback1Name: a.battleback1Name ?? "",
  battleback2Name: a.battleback2Name ?? "",
  autoplayBgm: a.autoplayBgm ?? !1,
  autoplayBgs: a.autoplayBgs ?? !1,
  parallaxLoopX: a.parallaxLoopX ?? !1,
  parallaxLoopY: a.parallaxLoopY ?? !1,
  parallaxName: a.parallaxName ?? "",
  parallaxShow: a.parallaxShow ?? !1,
  parallaxSx: a.parallaxSx ?? 0,
  parallaxSy: a.parallaxSy ?? 0,
  x: a.x ?? 0,
  y: a.y ?? 0,
  width: a.width ?? 0,
  height: a.height ?? 0,
  note: a.note ?? "",
  bgm: a.bgm ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  bgs: a.bgs ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  disableDashing: a.disableDashing ?? !1,
  displayName: a.displayName ?? "",
  encounterList: a.encounterList ?? [],
  events: a.events ?? []
}), Ot = (a = { id: 0 }) => {
  return {
    name: a.name ?? (e = a.id, e.toString().padStart(3, "0")),
    id: a.id,
    expanded: a.expanded ?? !1,
    order: a.order ?? 0,
    parentId: a.parentId ?? 0,
    scrollX: a.scrollX ?? 0,
    scrollY: a.scrollY ?? 0
  };
  var e;
}, ba = { actor: { title: "アクター", options: {
  initialEquipments: "初期装備",
  faceImage: "顔画像",
  characterImage: "キャラクター画像",
  svBattlerImage: "SVバトラー画像",
  nickname: "ニックネーム",
  profile: "プロフィール",
  classId: "職業ID",
  initialLevel: "初期レベル",
  maxLevel: "最大レベル"
} }, class: { title: "職業", options: {
  params: "パラメータ",
  learnings: "習得スキル",
  expParams: "経験値パラメータ"
} }, armor: { title: "防具", options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" } }, enemy: { title: "敵キャラ", options: {
  dropItems: "ドロップアイテム",
  battlerHue: "バトラーヒュー",
  battlerName: "バトラー名",
  gold: "ゴールド"
} }, item: { title: "アイテム", options: { consumable: "消耗品" } }, skill: { title: "スキル", options: {
  requiredWeaponTypeId1: "必要武器タイプ1",
  requiredWeaponTypeId2: "必要武器タイプ2",
  mpCost: "MP消費",
  tpCost: "TP消費"
} }, state: { title: "ステート", options: {
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
} }, weapon: { title: "武器", options: { weaponTypeId: "武器タイプID" } }, usableItem: { title: "", options: { scope: "範囲", speed: "速度補正", successRate: "成功率" } }, commonEvent: {
  title: "コモンイベント",
  options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" }
} }, ka = { title: "ダメージ", options: {} }, D = (a = {}) => ({
  type: a.type ?? 0,
  elementId: a.elementId ?? 0,
  formula: a.formula ?? "",
  variance: a.variance ?? 0,
  critical: a.critical ?? !1
}), Mt = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  characterName: a.characterName ?? "",
  characterIndex: a.characterIndex ?? 0,
  faceName: a.faceName ?? "",
  faceIndex: a.faceIndex ?? 0,
  traits: [],
  note: a.note ?? "",
  classId: a.classId ?? 0,
  nickname: a.nickname ?? "",
  profile: a.profile ?? "",
  equips: [],
  initialLevel: a.initialLevel ?? 0,
  maxLevel: a.maxLevel ?? 0
}), gt = (a) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  battlerName: a.battlerName ?? "",
  characterName: a.characterName ?? "",
  characterIndex: a.characterIndex ?? 0,
  faceName: a.faceName ?? "",
  faceIndex: a.faceIndex ?? 0,
  traits: [],
  note: a.note ?? "",
  classId: a.classId ?? 0,
  nickname: a.nickname ?? "",
  profile: a.profile ?? "",
  equips: [],
  initialLevel: a.initialLevel ?? 0,
  maxLevel: a.maxLevel ?? 0
}), Lt = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  iconIndex: a.iconIndex ?? 0,
  description: a.description ?? "",
  traits: a.traits ?? [],
  note: a.note ?? "",
  atypeId: a.atypeId ?? 0,
  params: a.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: a.etypeId ?? 0,
  price: a.price ?? 0
}), ut = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: [],
  note: a.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), Da = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: m = 0, mdf: n = 0, agi: o = 0, luk: d = 0 }) => [a, e, t, s, m, n, o, d], Pt = (a) => {
  const [e, t, s, m, n, o, d, p] = a;
  return { mhp: e, mmp: t, atk: s, def: m, mat: n, mdf: o, agi: d, luk: p };
}, va = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), bt = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), kt = (a = {}) => {
  var e;
  return {
    name: a.name ?? "",
    id: a.id ?? 0,
    battlerName: a.battlerName ?? "",
    battlerHue: a.battlerHue ?? 0,
    dropItems: ((e = a.dropItems) == null ? void 0 : e.map(() => va())) ?? [],
    exp: a.exp ?? 0,
    gold: a.gold ?? 0,
    traits: [],
    note: a.note ?? "",
    params: a.params ? [...a.params] : Da({
      mhp: 0,
      mmp: 0,
      atk: 0,
      def: 0,
      mat: 0,
      mdf: 0,
      agi: 0,
      luk: 0
    }),
    actions: []
  };
}, Dt = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  iconIndex: a.iconIndex ?? 0,
  message1: a.message1 ?? "",
  message2: a.message2 ?? "",
  message3: a.message3 ?? "",
  message4: a.message4 ?? "",
  traits: [],
  note: a.note ?? "",
  messageType: a.messageType ?? 0,
  releaseByDamage: a.releaseByDamage ?? !1,
  restriction: a.restriction ?? 0,
  priority: a.priority ?? 0,
  motion: a.motion ?? 0,
  overlay: a.overlay ?? 0,
  removeAtBattleEnd: a.removeAtBattleEnd ?? !1,
  removeByRestriction: a.removeByRestriction ?? !1,
  autoRemovalTiming: a.autoRemovalTiming ?? 0,
  minTurns: a.minTurns ?? 0,
  maxTurns: a.maxTurns ?? 0,
  removeByDamage: a.removeByDamage ?? !1,
  chanceByDamage: a.chanceByDamage ?? 0,
  removeByWalking: a.removeByWalking ?? !1,
  stepsToRemove: a.stepsToRemove ?? 0
}), i = "{name}", T = "{name} * {value}%", X = "{name} + {value}%", q = "{value}", fa = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: T, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } },
  extraParam: { title: "追加能力値", format: X, options: {
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
  specialParam: { title: "特殊能力値", format: T, options: {
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
    format: i,
    options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
  },
  collaps: { title: "消滅エフェクト", format: i, options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  } },
  partyAbility: { title: "パーティ能力", format: i, options: {
    cancelSurprise: "不意打ち無効",
    dropItemDouble: "アイテムドロップ2倍",
    encounterHalf: "エンカウント半減",
    encounterNone: "エンカウントなし",
    goldDouble: "ゴールド2倍",
    raisePreemptive: "先制攻撃率アップ"
  } },
  elementRate: { title: "属性有効度", format: T },
  debuffRate: { title: "弱体有効度", format: T },
  stateRate: { title: "ステート有効度", format: T },
  stateResist: {
    title: "ステート無効",
    format: i
  },
  attackElement: { title: "攻撃属性", format: i },
  attackState: { title: "攻撃ステート", format: X },
  attackSpeed: { title: "攻撃速度補正", format: q },
  attackTimes: {
    title: "攻撃追加回数",
    format: q
  },
  actionPlus: { title: "行動追加", format: T },
  attackSkill: { title: "攻撃スキル", format: i },
  equipWeaponType: { title: "装備武器タイプ", format: i },
  equipArmorType: { title: "装備防具タイプ", format: i },
  equipLock: {
    title: "装備固定",
    format: i
  },
  equipSeal: { title: "装備封印", format: i },
  slotType: { title: "スロットタイプ", format: i },
  skillAdd: { title: "スキル追加", format: i },
  skillSeal: { title: "スキルタイプ封印", format: i },
  skillTypeAdd: { title: "スキルタイプ追加", format: i },
  skillTypeSeal: { title: "スキルタイプ封印", format: i }
} }, Fa = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, vt = (a, e, t) => {
  const s = ga(Fa);
  return La(e, t, s, a.pattern, (m) => m.dataId);
}, ft = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  iconIndex: a.iconIndex ?? 0,
  description: a.description ?? "",
  traits: a.traits ?? [],
  note: a.note ?? "",
  animationId: a.animationId ?? 0,
  params: a.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: a.etypeId ?? 0,
  price: a.price ?? 0,
  damage: D(a.damage ?? {}),
  wtypeId: a.wtypeId ?? 0
}), Ft = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, description: { type: "string" }, iconIndex: { type: "integer", minimum: 0 }, price: { type: "integer", minimum: 0 }, note: {
    type: "string"
  }, etypeId: { type: "integer", minimum: 0 }, wtypeId: { type: "integer", minimum: 0 }, animationId: { type: "integer", minimum: 0 }, params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 }, damage: {
    type: "object",
    properties: { type: {
      type: "integer",
      minimum: 0
    }, elementId: { type: "integer", minimum: 0 }, formula: { type: "string" }, variance: { type: "integer", minimum: 0, maximum: 100 }, critical: { type: "boolean", default: !1 } },
    required: ["type", "elementId", "formula", "variance", "critical"]
  }, traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: {
    type: "integer"
  } }, required: ["code", "dataId", "value"] } } }
}, ht = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Gt = 0, Ut = 1, Ht = 2, z = "{name} {value1}%", u = "{value1}% + {value2}", j = "{name} {value1}ターン", S = "{name}", ha = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: j },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: j },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: u },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: S },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: u
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: u },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: S
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: S },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: z },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: S
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: z },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: S }
} }, Bt = 0, xt = (a, e, t) => {
  const s = t.find((n) => n.id === e.dataId), m = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", m);
}, Vt = { title: "アイテム", options: { consumable: "消耗品" } }, wt = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Yt = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Wt = (a = {}) => ({
  animationId: a.animationId ?? 0,
  id: a.id ?? 0,
  name: a.name ?? "",
  iconIndex: a.iconIndex ?? 0,
  description: a.description ?? "",
  itypeId: a.itypeId ?? 0,
  note: a.note ?? "",
  consumable: a.consumable ?? !1,
  scope: a.scope ?? 0,
  occasion: a.occasion ?? 0,
  speed: a.speed ?? 0,
  successRate: a.successRate ?? 0,
  repeats: a.repeats ?? 0,
  tpGain: a.tpGain ?? 0,
  hitType: a.hitType ?? 0,
  damage: D(a.damage ?? {}),
  effects: [],
  price: 0
}), Kt = (a = {}) => ({
  stypeId: a.stypeId ?? 0,
  requiredWtypeId1: a.requiredWtypeId1 ?? 0,
  requiredWtypeId2: a.requiredWtypeId2 ?? 0,
  animationId: a.animationId ?? 0,
  damage: D(a.damage ?? {}),
  description: a.description ?? "",
  effects: [],
  hitType: a.hitType ?? 0,
  iconIndex: a.iconIndex ?? 0,
  id: a.id ?? 0,
  message1: a.message1 ?? "",
  message2: a.message2 ?? "",
  messageType: a.messageType ?? 0,
  name: a.name ?? "",
  note: a.note ?? "",
  mpCost: a.mpCost ?? 0,
  occasion: a.occasion ?? 0,
  repeats: a.repeats ?? 0,
  scope: a.scope ?? 0,
  speed: a.speed ?? 0,
  successRate: a.successRate ?? 0,
  tpCost: a.tpCost ?? 0,
  tpGain: a.tpGain ?? 0
}), Xt = "data", qt = "actor", zt = "map", jt = "enemy", Qt = "state", Zt = "skill", Jt = "item", $t = "weapon", as = "armor", es = "class", ts = "common_event", ss = "troop", Ga = {
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
}, rs = () => ({ rpg: { damage: ka, data: ba, traits: fa, itemEffect: ha }, global: Ga }), ms = (a, e = 0) => ({ code: ea, parameters: [a.actorId, a.name], indent: e }), ns = (a, e = 0) => ({
  code: ta,
  parameters: [a.actorId, a.nickname],
  indent: e
}), os = (a, e = 0) => ({ code: sa, parameters: [a.actorId, a.profile], indent: e }), _ = { direct: 0, variable: 1 }, is = (a, e = 0) => ({
  code: Q,
  indent: e,
  parameters: $(0, a)
}), ds = (a, e = 0) => ({ code: Q, indent: e, parameters: $(1, a) }), ps = (a, e = 0) => ({ code: J, indent: e, parameters: L(0, a) }), cs = (a, e = 0) => ({
  code: J,
  indent: e,
  parameters: L(1, a)
}), Es = (a, e = 0) => ({ code: Z, indent: e, parameters: L(0, a) }), ls = (a, e = 0) => ({
  code: Z,
  indent: e,
  parameters: L(1, a)
}), L = (a, e) => [e.targetType === "variable" ? _.variable : _.direct, e.targetType === "each" ? 0 : e.target, a, _[e.operand.mode], e.operand.value], $ = (a, e) => [e.targetType === "variable" ? _.variable : _.direct, e.targetType === "each" ? 0 : e.target, a, _[e.operand.mode], e.operand.value, e.allowDeath], As = (a, e = 0) => ({
  code: 242,
  indent: e,
  parameters: [a.duration]
}), Ts = (a = 0) => ({ code: 243, indent: a, parameters: [] }), _s = (a = 0) => ({ code: 244, indent: a, parameters: [] }), Is = (a, e = 0) => ({
  code: 246,
  indent: e,
  parameters: [a.duration]
}), Rs = (a, e) => E(a, r({ name: e })), E = (a, e, t = 0) => ({
  code: a,
  parameters: [r(e)],
  indent: t
}), Cs = (a, e = 0) => E(ra, a, e), Ss = (a, e = 0) => E(ma, a, e), ys = (a, e = 0) => E(na, a, e), Ns = (a, e = 0) => E(oa, a, e), Os = (a, e = 0) => E(ia, a, e), Ms = (a, e = 0) => E(da, a, e), gs = (a, e = 0) => E(pa, a, e), Ua = {
  plus: 0,
  minus: 1
}, Ls = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [Ua[a ?? "plus"] ?? 0, e ?? 0] });
function us(a, e = 0) {
  return { code: 336, parameters: [a.enemyId, a.newEnemyId], indent: e };
}
const Ps = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), bs = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 0, a.stateId] }), ks = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 1, a.stateId]
}), Ds = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 0, a.stateId] }), vs = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), fs = (a = 0) => ({
  code: 334,
  indent: a,
  parameters: [0]
}), Fs = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), hs = (a, e = 0) => ({ code: ca, indent: e, parameters: Ha(a ?? {}) }), Gs = (a) => ({
  eventId: a[0]
}), Ha = (a) => [a.eventId ?? 0], Us = (a) => ({ min: a[0], max: a[1], value: a[2] }), Ba = (a) => [a.min, a.max, a.value], Hs = (a, e = 0) => ({ code: Ea, indent: e, parameters: Ba(a) }), Bs = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), xs = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], Vs = (a) => ({ variableId: a[0], maxDigits: a[1] }), ws = (a) => a.parameters[3] === A, Ys = (a) => ({
  operation: a[0],
  itemId: a[1],
  value: a[2],
  operand: a[3]
}), Ws = (a, e = 0) => ({ code: y, indent: e, parameters: [a.operation, a.itemId, a.value, a.operand] }), Ks = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [I, a.itemId, a.value, R]
}), Xs = (a, e = 0) => ({ code: y, indent: e, parameters: [I, a.itemId, a.variableId, A] }), qs = (a, e = 0) => ({
  code: y,
  indent: e,
  parameters: [C, a.itemId, a.value, R]
}), zs = (a, e = 0) => ({ code: y, indent: e, parameters: [C, a.itemId, a.variableId, A] }), js = (a) => ({ operation: a[0], weaponId: a[1], value: a[2], operand: a[3], includesEquip: a[4] }), Qs = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [a.operation, a.weaponId, a.value, a.operand, a.includesEquip]
}), Zs = (a, e = 0) => ({ code: N, indent: e, parameters: [I, a.weaponId, a.value, R, !1] }), Js = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [I, a.weaponId, a.variableId, A, !1]
}), $s = (a, e = 0) => ({ code: N, indent: e, parameters: [C, a.weaponId, a.value, R, !1] }), ar = (a, e = 0) => ({
  code: N,
  indent: e,
  parameters: [C, a.weaponId, a.variableId, A, !1]
}), er = (a, e = 0) => ({ code: g, indent: e, parameters: [I, a.armorId, a.value, R, !1] }), tr = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [I, a.armorId, a.variableId, A, !1]
}), sr = (a, e = 0) => ({ code: g, indent: e, parameters: [C, a.armorId, a.value, R, !1] }), rr = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [C, a.armorId, a.variableId, A, !1]
}), mr = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), nr = (a) => ({ variableId: a[0], itemType: a[1] }), or = (a = 0) => ({
  code: 135,
  parameters: [1],
  indent: a
}), ir = (a = 0) => ({ code: 135, parameters: [0], indent: a }), dr = (a = 0) => ({ code: 134, parameters: [1], indent: a }), pr = (a = 0) => ({ code: 134, parameters: [0], indent: a }), cr = (a = 0) => ({
  code: 137,
  parameters: [1],
  indent: a
}), Er = (a = 0) => ({ code: 137, parameters: [0], indent: a }), aa = (a) => [a], lr = (a) => ({ comment: a[0] }), xa = (a, e = 0) => ({ code: la, indent: e, parameters: aa(a) }), Va = (a, e = 0) => ({
  code: Aa,
  indent: e,
  parameters: aa(a)
}), Ar = (a, e = 0) => a.map((t, s) => s === 0 ? xa(t, e) : Va(t, e)), wa = (a = {}) => [(a == null ? void 0 : a.speed) ?? 4, (a == null ? void 0 : a.skip) ?? !1], Tr = (a) => ({ speed: a[0], skip: a[1] }), _r = (a = {}, e = 0) => ({
  code: Ta,
  indent: e,
  parameters: wa(a)
}), Ya = (a = "") => [a], Ir = (a) => ({ content: a[0] }), Rr = (a = "", e = 0) => ({ code: _a, indent: e ?? 0, parameters: Ya(a) }), Cr = (a, e = 0) => ({
  code: 402,
  indent: e,
  parameters: [(a == null ? void 0 : a.index) ?? 0, (a == null ? void 0 : a.name) ?? ""]
}), Sr = (a) => ({ index: a[0], name: a[1] }), yr = (a) => [a.index ?? 0, a.name ?? ""], Nr = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), Or = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], Mr = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [(a == null ? void 0 : a.choices) ?? [], (a == null ? void 0 : a.cancelType) ?? 0, (a == null ? void 0 : a.defaultType) ?? 0, (a == null ? void 0 : a.positionType) ?? 2, (a == null ? void 0 : a.background) ?? 0]
}), gr = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Lr = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), ur = (a) => ({
  filename: a[0]
}), Pr = ({ args: a = {}, commandName: e, commandTitle: t = "", pluginName: s }, m = 0) => ({ code: 357, indent: m, parameters: [s, e, t, { ...a }] }), br = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), kr = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), Dr = (a, e = 0) => ({
  code: 129,
  parameters: [1, a.actorId],
  indent: e
}), vr = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: m = 0, scaleX: n = 100, scaleY: o = 100, opacity: d = 255, blendMode: p = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, m, n, o, d, p]
}), fr = ({ pictureId: a, origin: e, x: t, y: s, scaleX: m, scaleY: n, opacity: o, blendMode: d, wait: p = !1, easingType: O = 0 }) => ({ code: 232, indent: 0, parameters: [a, e, t, s, m, n, o, d, p, O] }), Wa = (a, e = 0) => ({
  code: Ia,
  indent: e,
  parameters: [a]
}), Ka = (a, e = 0) => ({ code: Ra, indent: e, parameters: [a] }), Fr = (a, e = 0) => a.map((t, s) => s === 0 ? Wa(t, e) : Ka(t, e)), hr = 1, Gr = 0, M = {
  item: 0,
  weapon: 1,
  armors: 2
}, Ur = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map((s, m) => {
  const n = ((o) => o.customPrice !== void 0 && o.customPrice !== 0)(s) ? 1 : 0;
  return m === 0 ? {
    code: Ca,
    indent: t,
    parameters: [M[s.itemType] ?? M.item, s.id, n, s.customPrice ?? 0, e]
  } : { code: Sa, indent: t, parameters: [M[s.itemType] ?? M.item, s.id, n, s.customPrice ?? 0] };
}), Hr = 0, Br = 1, xr = 2, Vr = 3, wr = 4, Yr = 0, Wr = 1, Kr = 2, Xr = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.hp;
    case 1:
      return a.mp;
    case 10:
      return a.tp;
  }
  return e[6] >= 2 && e[6] <= 9 ? a.param(e[6] - 2) : 0;
}, qr = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.level;
    case 1:
      return a.currentExp();
    case 2:
      return a.hp;
    case 3:
      return a.mp;
    case 12:
      return a.tp;
  }
  return e[6] >= 4 && e[6] <= 11 ? a.param(e[6] - 4) : 0;
}, zr = (a) => a.parameters[2] === 1, Xa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], jr = (a, e, t = {}) => ({
  code: c,
  indent: t.indent ?? 0,
  parameters: Xa(a, e, t.operation ?? 0)
}), qa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], Qr = (a, e) => ({
  code: c,
  indent: 0,
  parameters: qa(a, e, 0)
}), za = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], Zr = (a, e, t = {}) => ({ code: c, indent: t.indent ?? 0, parameters: za(a, e, t.operation ?? 0) }), ja = {
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
}, Qa = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, ja[e.param]], Jr = (a, e, t = {}) => ({
  code: c,
  indent: t.indent ?? 0,
  parameters: Qa(a, e, t.operation ?? 0)
}), $r = (a, e, t = {}) => ({
  code: c,
  indent: t.indent ?? 0,
  parameters: Za(a, e, t.operation ?? 0)
}), Za = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], Ja = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], am = (a, e, t = {}) => ({
  code: c,
  indent: t.indent ?? 0,
  parameters: Ja(a, e, t.operation ?? 0)
}), $a = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 4, e.code], em = (a, e, t = {}) => ({
  code: c,
  indent: t.indent ?? 0,
  parameters: $a(a, e, t.operation ?? 0)
}), ae = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 1, e.weaponId], tm = (a, e) => ({ code: c, indent: 0, parameters: ae(a, e, 0) }), ee = (a) => [...a], sm = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: ee(a.parameters)
}), te = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", rm = (a) => a.parameters.every(te), mm = "bgm", nm = "se", om = "me", im = "bgs", dm = "battlebacks1", pm = "battlebacks2", cm = "characters", Em = "enemies", lm = "faces", Am = "parallaxes", Tm = "pictures", _m = "sv_actors", Im = "sv_enemies", Rm = "system", Cm = "tilesets", Sm = "titles1", ym = "titles2", Nm = "System.json", Om = "Actors.json", Mm = "Classes.json", gm = "Skills.json", Lm = "Items.json", um = "Weapons.json", Pm = "Armors.json", bm = "Enemies.json", km = "Troops.json", Dm = "States.json", vm = "Animations.json", fm = "Tilesets.json", Fm = "CommonEvents.json", hm = "MapInfos.json", Gm = "data", Um = "img", Hm = "audio", Bm = "js", se = (a = {}) => ({
  gameId: a.gameId ?? 0,
  screenWidth: a.screenWidth ?? 0,
  screenHeight: a.screenHeight ?? 0,
  uiAreaWidth: a.uiAreaWidth ?? 0,
  uiAreaHeight: a.uiAreaHeight ?? 0,
  windowOpacity: a.windowOpacity ?? 0,
  screenScale: a.screenScale ?? 1,
  numberFontFilename: a.numberFontFilename ?? "",
  mainFontFilename: a.mainFontFilename ?? "",
  fallbackFonts: a.fallbackFonts ?? "",
  fontSize: a.fontSize ?? 28
}), re = (a = {}) => [r(a.cursor), r(a.ok), r(a.cancel), r(a.buzzer), r(a.equip), r(a.save), r(a.load), r(a.battleStart), r(a.escape), r(a.enemyAttack), r(a.enemyDamage), r(a.enemyCollapse), r(a.bossCollapes1), r(a.bossCollapes2), r(a.actorDamage), r(a.actorCollapse), r(a.playRecovery), r(a.playMiss), r(a.playEvasion), r(a.playMagicEvasion), r(a.playReflection), r(a.shop), r(a.useItem), r(a.useSkill)], xm = (a) => ({
  cursor: a[0],
  ok: a[1],
  cancel: a[2],
  buzzer: a[3],
  equip: a[4],
  save: a[5],
  load: a[6],
  battleStart: a[7],
  escape: a[8],
  enemyAttack: a[9],
  enemyDamage: a[10],
  enemyCollapse: a[11],
  bossCollapes1: a[12],
  bossCollapes2: a[13],
  actorDamage: a[14],
  actorCollapse: a[15],
  playRecovery: a[16],
  playMiss: a[17],
  playEvasion: a[18],
  playMagicEvasion: a[19],
  playReflection: a[20],
  shop: a[21],
  useItem: a[22],
  useSkill: a[23]
}), Vm = (a) => a.menuCommands[0], wm = (a) => a.menuCommands[1], Ym = (a) => a.menuCommands[2], Wm = (a) => a.menuCommands[3], Km = (a) => a.menuCommands[4], Xm = (a) => a.menuCommands[5], qm = (a) => a.itemCategories[0], zm = (a) => a.itemCategories[1], jm = (a) => a.itemCategories[2], Qm = (a) => a.itemCategories[3], me = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], Zm = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), ne = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], Jm = (a) => ({
  item: a[0],
  skill: a[1],
  equip: a[2],
  status: a[3],
  formation: a[4],
  save: a[5]
}), oe = (a = {}) => ({
  optAutosave: a.optAutosave ?? !0,
  optDisplayTp: a.optDisplayTp ?? !0,
  optDrawTitle: a.optDrawTitle ?? !0,
  optExtraExp: a.optExtraExp ?? !0,
  optFloorDeath: a.optFloorDeath ?? !0,
  optFollowers: a.optFollowers ?? !0,
  optKeyItemsNumber: a.optKeyItemsNumber ?? !0,
  optSideView: a.optSideView ?? !0,
  optSlipDeath: a.optSlipDeath ?? !0,
  optTransparent: a.optTransparent ?? !0,
  optMessageSkip: a.optMessageSkip ?? !0,
  optSplashScreen: a.optSplashScreen ?? !0
}), $m = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembersArray: a.partyMembersArray ? Array.from(a.partyMembersArray) : [1]
}), ie = (a) => ({
  armorTypes: l(a.armorTypes),
  elements: l(a.elements),
  equipTypes: l(a.equipTypes),
  weaponTypes: l(a.weaponTypes),
  skillTypes: l(a.skillTypes),
  variables: l(a.variables),
  switches: l(a.switches)
}), l = (a) => a ? [...a] : [], an = (a) => a.terms.params.map((e, t) => ({ name: e, id: t })), en = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), P = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: r(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), de = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), tn = { title: "オプション", options: {
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
} }, sn = {
  title: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, rn = { title: "能力値", options: {
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
} }, mn = { title: "コマンド", options: {
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
  continueGame: "続きから",
  equip2: "装備2",
  keyItem: "大事なもの",
  optimize: "最強装備",
  toTitle: "タイトルへ戻る"
} }, nn = (a) => {
  var t, s, m, n, o, d, p, O, v, f, F, h, G, U, H, B, x, V, w, Y, W, K;
  const e = ce(a.size);
  return {
    ...oe(a.options),
    currencyUnit: ((t = a.texts) == null ? void 0 : t.currencyUnit) ?? "",
    gameTitle: ((s = a.texts) == null ? void 0 : s.gameTitle) ?? "",
    sounds: re(a.sounds),
    editor: de(a.editing),
    advanced: se(a.advanced),
    title1Name: ((m = a.images) == null ? void 0 : m.title1Name) ?? "",
    title2Name: ((n = a.images) == null ? void 0 : n.title2Name) ?? "",
    ...ie(a.dataNames ?? {}),
    magicSkills: b([]),
    airship: P((o = a.vehicles) == null ? void 0 : o.airship),
    boat: P((d = a.vehicles) == null ? void 0 : d.boat),
    ship: P((p = a.vehicles) == null ? void 0 : p.ship),
    defeatMe: r((O = a.me) == null ? void 0 : O.defeatMe),
    gameoverMe: r((v = a.me) == null ? void 0 : v.gameoverMe),
    titleBgm: r((f = a.bgm) == null ? void 0 : f.titleBgm),
    tileSize: e.tileSize,
    faceSize: e.faceSize,
    iconSize: e.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((F = a.battleTest) == null ? void 0 : F.battleback1Name) ?? "",
    battleback2Name: ((h = a.battleTest) == null ? void 0 : h.battleback2Name) ?? "",
    testTroopId: ((G = a.battleTest) == null ? void 0 : G.testTroopId) ?? 0,
    testBattlers: Ee((U = a.battleTest) == null ? void 0 : U.testBattlers, le),
    battleBgm: r((H = a.bgm) == null ? void 0 : H.battleBgm),
    victoryMe: r((B = a.me) == null ? void 0 : B.victoryMe),
    editMapId: ((x = a.editorTemporary) == null ? void 0 : x.editMapId) ?? 0,
    battlerName: ((V = a.editorTemporary) == null ? void 0 : V.battlerName) ?? "",
    locale: "",
    startMapId: ((w = a.gameInit) == null ? void 0 : w.startMapId) ?? 0,
    startX: ((Y = a.gameInit) == null ? void 0 : Y.startX) ?? 0,
    startY: ((W = a.gameInit) == null ? void 0 : W.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: pe(a.terms ?? {}),
    itemCategories: me(a.itemCategories),
    partyMembersArray: b((K = a.gameInit) == null ? void 0 : K.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: ne(a.menuComamnds)
  };
}, pe = (a) => ({
  basic: Ma(a.basic ?? {}),
  commands: Oa(a.commands ?? {}),
  params: Na(a.params ?? {}),
  messages: ya(a.messages ?? {})
}), b = (a) => a ? [...a] : [], ce = (a) => a ? {
  tileSize: a.tileSize ?? 48,
  faceSize: a.faceSize ?? 144,
  iconSize: a.iconSize ?? 32
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Ee = (a, e) => a ? a.map(e) : [], le = (a) => a ? { actorId: a.actorId, equips: b(a.equips), level: a.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, on = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), dn = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, pn = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  ln as ABORT_BATTLE,
  An as BATTLE_PROCESSING,
  Tn as CHANGE_ACTOR_IMAGES,
  _n as CHANGE_ACTOR_STATE,
  g as CHANGE_ARMORS,
  In as CHANGE_BATTLE_BACKGROUND,
  ia as CHANGE_BATTLE_BGM,
  Rn as CHANGE_CLASS,
  pa as CHANGE_DEFEAT_ME,
  Cn as CHANGE_ENCOUNTER,
  Sn as CHANGE_ENEMY_HP,
  yn as CHANGE_ENEMY_MP,
  Nn as CHANGE_ENEMY_STATE,
  On as CHANGE_ENEMY_TP,
  Mn as CHANGE_EXP,
  gn as CHANGE_FORMATION_ACCESS,
  Ln as CHANGE_GOLD,
  Q as CHANGE_HP,
  y as CHANGE_ITEMS,
  un as CHANGE_MAP_NAME_DISPLAY,
  Pn as CHANGE_MENU_ACCESS,
  Z as CHANGE_MP,
  ea as CHANGE_NAME,
  ta as CHANGE_NICKNAME,
  bn as CHANGE_PARALLAX,
  kn as CHANGE_PARAMETER,
  Dn as CHANGE_PARTY_MEMBER,
  vn as CHANGE_PLAYER_FOLLOWERS,
  sa as CHANGE_PROFILE,
  fn as CHANGE_SAVE_ACCESS,
  Fn as CHANGE_SKILL,
  hn as CHANGE_TILESET,
  J as CHANGE_TP,
  Gn as CHANGE_TRANSPARENCY,
  Un as CHANGE_VEHICLE_BGM,
  Hn as CHANGE_VEHICLE_IMAGE,
  da as CHANGE_VICTORY_ME,
  N as CHANGE_WEAPONS,
  Bn as CHANGE_WINDOW_COLOR,
  xn as COLLAPS_BOSS,
  Vn as COLLAPS_INSTANT,
  wn as COLLAPS_NONE,
  Yn as COLLAPS_NORMAL,
  Aa as COMMENT_BODY,
  la as COMMENT_HEAD,
  ca as COMMON_EVENT,
  Wn as CONDITIONAL_BRANCH,
  Kn as CONDITIONAL_BRANCH_ELSE,
  Xn as CONTROL_SELF_SWITCH,
  Ea as CONTROL_SWITCHES,
  qn as CONTROL_TIMER,
  c as CONTROL_VARIABLES,
  hr as CUSTOM_PRICE,
  ka as DEFAULT_DAMAGE_LABELS,
  Ga as DEFAULT_GLOBAL_LABELS,
  Vt as DEFAULT_ITEM_LABELS,
  wt as DEFAULT_SKILL_LABELS,
  tn as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  sn as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Yt as DEFAULT_USABLE_ITEM_LABELS,
  dn as DIRECTION,
  zn as EFFECT_ADD_BUFF,
  jn as EFFECT_ADD_DEBUFF,
  Qn as EFFECT_ADD_STATE,
  Zn as EFFECT_COMMON_EVENT,
  Jn as EFFECT_GAIN_TP,
  $n as EFFECT_GROW,
  ao as EFFECT_LEARN_SKILL,
  eo as EFFECT_RECOVER_HP,
  to as EFFECT_RECOVER_MP,
  so as EFFECT_REMOVE_BUFF,
  ro as EFFECT_REMOVE_DEBUFF,
  mo as EFFECT_REMOVE_STATE,
  no as EFFECT_SPECIAL,
  oo as ENEMY_APPEAR,
  io as ENEMY_RECOVER_ALL,
  po as ENEMY_TRANSFORM,
  co as ERASE_EVENT,
  Eo as ERASE_PICTURE,
  lo as EXIT_EVENT_PROCESSING,
  Ao as EXTRA_PARAM_CEV,
  To as EXTRA_PARAM_CNT,
  _o as EXTRA_PARAM_CRI,
  Io as EXTRA_PARAM_EVA,
  Ro as EXTRA_PARAM_HIT,
  Co as EXTRA_PARAM_HRG,
  So as EXTRA_PARAM_MEV,
  yo as EXTRA_PARAM_MRF,
  No as EXTRA_PARAM_MRG,
  Oo as EXTRA_PARAM_TRG,
  Mo as FADEIN_SCREEN,
  go as FADEOUT_BGM,
  Lo as FADEOUT_BGS,
  uo as FADEOUT_SCREEN,
  Om as FILENAME_ACTORS,
  vm as FILENAME_ANIMATIONS,
  Pm as FILENAME_ARMORS,
  Mm as FILENAME_CLASSES,
  Fm as FILENAME_COMMON_EVENTS,
  bm as FILENAME_ENEMIES,
  Lm as FILENAME_ITEMS,
  hm as FILENAME_MAP_INFOS,
  gm as FILENAME_SKILLS,
  Dm as FILENAME_STATES,
  Nm as FILENAME_SYSTEM,
  fm as FILENAME_TILESET,
  km as FILENAME_TROOPS,
  um as FILENAME_WEAPONS,
  Po as FLAG_ID_AUTO_BATTLE,
  bo as FLAG_ID_GUARD,
  ko as FLAG_ID_PRESERVE_TP,
  Do as FLAG_ID_SUBSTITUTE,
  vo as FLASH_SCREEN,
  Hm as FOLDER_AUDIO,
  mm as FOLDER_AUDIO_BGM,
  im as FOLDER_AUDIO_BGS,
  om as FOLDER_AUDIO_ME,
  nm as FOLDER_AUDIO_SE,
  Gm as FOLDER_DATA,
  Um as FOLDER_IMG,
  dm as FOLDER_IMG_BATTLEBACK1,
  pm as FOLDER_IMG_BATTLEBACK2,
  cm as FOLDER_IMG_CHACTERS,
  Em as FOLDER_IMG_ENEMIES,
  lm as FOLDER_IMG_FACES,
  Am as FOLDER_IMG_PARALLACES,
  Tm as FOLDER_IMG_PICTURES,
  _m as FOLDER_IMG_SV_ACTORS,
  Im as FOLDER_IMG_SV_ENEMIES,
  Rm as FOLDER_IMG_SYSTEM,
  Cm as FOLDER_IMG_TILESETS,
  Sm as FOLDER_IMG_TITLES1,
  ym as FOLDER_IMG_TITLES2,
  Bm as FOLDER_JS,
  fo as FORCE_ACTION,
  Fo as GAME_OVER,
  ho as GATHER_FOLLOWERS,
  Go as GET_LOCATION_INFO,
  Uo as GET_ONOFF_VEHICLE,
  Gt as HITTYPE_CERTAIN,
  Ht as HITTYPE_MAGICAL,
  Ut as HITTYPE_PHYSICAL,
  Ho as INPUT_NUMBER,
  Bo as LABEL,
  ht as LABELS_DATA_WEAPON,
  rn as LABELS_SYSTEM_BATTLER_PARAMS,
  mn as LABELS_SYSTEM_GAME_COMMANDS,
  xo as LABEL_JUMP,
  ba as LABEL_SET_DATA,
  ha as LABEL_SET_ITEM_EFFECT,
  fa as LABEL_SET_TRAIT,
  Vo as LOOP,
  wo as LOOP_BREAK,
  Xt as MODULE_DATA,
  Yo as MOVE_PICTURE,
  Wo as NAME_INPUT_PROCESSING,
  Gr as NORMAL_PRICE,
  Ko as NO_OPERATION,
  Xo as OPEN_MENU_SCREEN,
  qo as OPEN_SAVE_SCREEN,
  Hr as OPERAND_CONSTANT,
  Vr as OPERAND_GAMEDATA,
  xr as OPERAND_RANDOM,
  wr as OPERAND_SCRIPT,
  Br as OPERAND_VARIABLE,
  zo as PARTY_ABILITY_CANCEL_SURPRISE,
  jo as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Qo as PARTY_ABILITY_ENCOUNTER_HALF,
  Zo as PARTY_ABILITY_ENCOUNTER_NONE,
  Jo as PARTY_ABILITY_GOLD_DOUBLE,
  $o as PARTY_ABILITY_RAISE_PREEMPTIVE,
  ra as PLAY_BGM,
  ma as PLAY_BGS,
  na as PLAY_ME,
  ai as PLAY_MOVIE,
  oa as PLAY_SE,
  ei as PLUGIN_COMMAND_MV,
  ti as PLUGIN_COMMAND_MZ,
  si as RECOVER_ALL,
  ri as REGULAR_PARAM_AGI,
  mi as REGULAR_PARAM_ATK,
  ni as REGULAR_PARAM_DEF,
  oi as REGULAR_PARAM_LUK,
  ii as REGULAR_PARAM_MATK,
  di as REGULAR_PARAM_MAX_HP,
  pi as REGULAR_PARAM_MAX_MP,
  ci as REGULAR_PARAM_MDEF,
  Ei as RESUME_BGM,
  li as RETURN_TO_TITLE_SCREEN,
  Ai as ROTATE_PICTURE,
  _t as ROUTE_CHANGE_BLEND_MODE,
  st as ROUTE_CHANGE_FREQ,
  At as ROUTE_CHANGE_IMAGE,
  Tt as ROUTE_CHANGE_OPACITY,
  tt as ROUTE_CHANGE_SPEED,
  dt as ROUTE_DIR_FIX_OFF,
  it as ROUTE_DIR_FIX_ON,
  ue as ROUTE_END,
  Ve as ROUTE_JUMP,
  He as ROUTE_MOVE_AWAY,
  xe as ROUTE_MOVE_BACKWARD,
  Pe as ROUTE_MOVE_DOWN,
  Be as ROUTE_MOVE_FORWARD,
  be as ROUTE_MOVE_LEFT,
  ve as ROUTE_MOVE_LOWER_L,
  fe as ROUTE_MOVE_LOWER_R,
  Ge as ROUTE_MOVE_RANDOM,
  ke as ROUTE_MOVE_RIGHT,
  Ue as ROUTE_MOVE_TOWARD,
  De as ROUTE_MOVE_UP,
  Fe as ROUTE_MOVE_UPPER_L,
  he as ROUTE_MOVE_UPPER_R,
  It as ROUTE_PLAY_SE,
  Rt as ROUTE_SCRIPT,
  ot as ROUTE_STEP_ANIME_OFF,
  nt as ROUTE_STEP_ANIME_ON,
  et as ROUTE_SWITCH_OFF,
  at as ROUTE_SWITCH_ON,
  ct as ROUTE_THROUGH_OFF,
  pt as ROUTE_THROUGH_ON,
  lt as ROUTE_TRANSPARENT_OFF,
  Et as ROUTE_TRANSPARENT_ON,
  je as ROUTE_TURN_180D,
  ze as ROUTE_TURN_90D_L,
  qe as ROUTE_TURN_90D_R,
  Qe as ROUTE_TURN_90D_R_L,
  $e as ROUTE_TURN_AWAY,
  Ye as ROUTE_TURN_DOWN,
  We as ROUTE_TURN_LEFT,
  Ze as ROUTE_TURN_RANDOM,
  Ke as ROUTE_TURN_RIGHT,
  Je as ROUTE_TURN_TOWARD,
  Xe as ROUTE_TURN_UP,
  we as ROUTE_WAIT,
  mt as ROUTE_WALK_ANIME_OFF,
  rt as ROUTE_WALK_ANIME_ON,
  Ti as SAVE_BGM,
  Ft as SCHEMA_DATA_WEAPON,
  Ia as SCRIPT_EVAL,
  Ra as SCRIPT_EVAL_BODY,
  _i as SCROLL_MAP,
  Ii as SELECT_ITEM,
  Ri as SET_EVENT_LOCATION,
  Ci as SET_MOVEMENT_ROUTE,
  Si as SET_VEHICLE_LOCATION,
  yi as SET_WEATHER_EFFECT,
  Ni as SHAKE_SCREEN,
  Ca as SHOP_PROCESSING,
  Sa as SHOP_PROCESSING_BODY,
  Oi as SHOW_ANIMATION,
  Mi as SHOW_BALLOON_ICON,
  gi as SHOW_BATTLE_ANIMATION,
  Li as SHOW_CHOICES,
  ui as SHOW_CHOICES_ITEM,
  Pi as SHOW_MESSAGE,
  bi as SHOW_MESSAGE_BODY,
  ki as SHOW_PICTURE,
  Ta as SHOW_SCROLLING_TEXT,
  _a as SHOW_SCROLLING_TEXT_BODY,
  Di as SKIP,
  Bt as SPECIAL_EFFECT_ESCAPE,
  vi as SPECIAL_PARAM_EXR,
  fi as SPECIAL_PARAM_FDR,
  Fi as SPECIAL_PARAM_GRD,
  hi as SPECIAL_PARAM_MCR,
  Gi as SPECIAL_PARAM_MDR,
  Ui as SPECIAL_PARAM_PDR,
  Hi as SPECIAL_PARAM_PHA,
  Bi as SPECIAL_PARAM_REC,
  xi as SPECIAL_PARAM_TCR,
  Vi as SPECIAL_PARAM_TGR,
  qt as SRC_DATA_ACTOR,
  as as SRC_DATA_ARMOR,
  es as SRC_DATA_CLASS,
  ts as SRC_DATA_COMMON_EVNET,
  jt as SRC_DATA_ENEMY,
  Jt as SRC_DATA_ITEMS,
  zt as SRC_DATA_MAP,
  Zt as SRC_DATA_SKILL,
  Qt as SRC_DATA_STATE,
  ss as SRC_DATA_TROOP,
  $t as SRC_DATA_WEAPON,
  wi as STOP_SE,
  Yi as TINT_PICTURE,
  Wi as TINT_SCREEN,
  Ki as TRAIT_ACTION_PLUS,
  Xi as TRAIT_ATTACK_ELEMENT,
  qi as TRAIT_ATTACK_SKILL,
  zi as TRAIT_ATTACK_SPEED,
  ji as TRAIT_ATTACK_STATE,
  Qi as TRAIT_ATTACK_TIMES,
  Zi as TRAIT_COLLAPSE_TYPE,
  Ji as TRAIT_DEBUFF_RATE,
  $i as TRAIT_ELEMENT_RATE,
  ad as TRAIT_EQUIP_ARMOR_TYPE,
  ed as TRAIT_EQUIP_LOCK,
  td as TRAIT_EQUIP_SEAL,
  sd as TRAIT_EQUIP_WEAPON_TYPE,
  rd as TRAIT_PARAM,
  md as TRAIT_PARTY_ABILITY,
  nd as TRAIT_SKILL_ADD,
  od as TRAIT_SKILL_SEAL,
  id as TRAIT_SKILL_TYPE_ADD,
  dd as TRAIT_SKILL_TYPE_SEAL,
  pd as TRAIT_SLOT_TYPE,
  cd as TRAIT_SPARAM,
  Ed as TRAIT_SPECIAL_FLAG,
  ld as TRAIT_STATE_RATE,
  Ad as TRAIT_STATE_RESIST,
  Td as TRAIT_XPARAM,
  _d as TRANSFER_PLAYER,
  Kr as TYPE_ARMOR,
  Yr as TYPE_ITEM,
  Wr as TYPE_WEAPON,
  Id as WAIT,
  Rd as buildNoteFromNormalized,
  gr as cloneChoices,
  sm as cloneEventCommand,
  ee as cloneParameters,
  Cd as collapsOptionsToArray,
  lr as convertCommentArrayToObject,
  ye as createActorControlChars,
  k as createControlCharFormat,
  Sd as createNoteEntity,
  Ne as createSystemVariableControlChars,
  yd as defineGameDataSources,
  Nd as defineSystemItems,
  Od as defineTraitCollapseType,
  Md as defineTraitExtraParam,
  gd as defineTraitItems,
  Ld as defineTraitPartyAbility,
  ud as defineTraitRegularParam,
  Pd as defineTraitSpecialFlag,
  bd as defineTraitSpecialParam,
  kd as extraParamName,
  Dd as extraParamsToArray,
  pn as extractFileName,
  xt as formatItemEffectText,
  vt as formatTraitText,
  Ys as fromArrayChangeItems,
  js as fromArrayChangeWeapons,
  Gs as fromArrayCommonEvent,
  Us as fromArrayControlSwitches,
  Ps as fromArrayEnemyTransform,
  Vs as fromArrayInputNumber,
  ur as fromArrayPlayMovie,
  br as fromArrayPluginCommandMZ,
  Ir as fromArrayScrollingTextBody,
  Tr as fromArrayScrollingTextHeader,
  nr as fromArraySelectItem,
  Nr as fromArraySetupChoice,
  Sr as fromArraySetupChoiceItem,
  vd as fromArrayShowMessageHeader,
  Ce as fromStringArray,
  qr as getActorValue,
  jm as getArmorCategoryEnabled,
  fd as getArmorTypes,
  Se as getControlChars,
  Fd as getElementTypes,
  Xr as getEnemyValue,
  Ym as getEquipCommandEnabled,
  hd as getEquipTypes,
  Km as getFormationCommandEnabled,
  qm as getItemCategoryEnabled,
  Vm as getItemCommandEnabled,
  Qm as getKeyItemCategoryEnabled,
  Gd as getNoteValue,
  an as getParamNames,
  Xm as getSaveCommandEnabled,
  wm as getSkillCommandEnabled,
  Ud as getSkillTypes,
  Wm as getStatusCommandEnabled,
  Hd as getSwitches,
  Bd as getVariableNames,
  zm as getWeaponCategoryEnabled,
  xd as getWeaponTypes,
  rm as isCloneableCommand,
  zr as isCommandOperandVariables,
  ws as isUsingVaribleCommandChangingItems,
  rs as labelsRegistry,
  Mt as makeActorData,
  Lt as makeArmorData,
  Rs as makeAudioCommand,
  oe as makeBooleanOptions,
  ut as makeClassData,
  Ds as makeCommandAddEachEnemyState,
  bs as makeCommandAddEnemyState,
  kr as makeCommandAddPartyMember,
  E as makeCommandAudioAny,
  Re as makeCommandChangeActorImages,
  ms as makeCommandChangeActorName,
  ns as makeCommandChangeActorNickName,
  os as makeCommandChangeActorProfile,
  Os as makeCommandChangeBattleBGM,
  gs as makeCommandChangeDefeatME,
  Ws as makeCommandChangeItems,
  Ms as makeCommandChangeVictoryME,
  Qs as makeCommandChangeWeapons,
  Va as makeCommandCommentBody,
  xa as makeCommandCommentHeader,
  hs as makeCommandCommonEvent,
  Hs as makeCommandControlSwitches,
  Ls as makeCommandControlTimer,
  cr as makeCommandDisableFormationAccess,
  or as makeCommandDisableMenuAccess,
  dr as makeCommandDisableSaveAccess,
  Er as makeCommandEnableFormationAccess,
  ir as makeCommandEnableMenuAccess,
  pr as makeCommandEnableSaveAccess,
  Fs as makeCommandEnemyRecoverAll,
  fs as makeCommandEnemyRecoverAllEach,
  us as makeCommandEnemyTransform,
  As as makeCommandFadeOutBGM,
  Is as makeCommandFadeOutBGS,
  is as makeCommandGainActorHP,
  Es as makeCommandGainActorMP,
  ps as makeCommandGainActorTP,
  er as makeCommandGainArmor,
  tr as makeCommandGainArmorByVariable,
  Ks as makeCommandGainItem,
  Xs as makeCommandGainItemV,
  Zs as makeCommandGainWeapon,
  Js as makeCommandGainWeaponV,
  Bs as makeCommandInputNumber,
  ds as makeCommandLoseActorHP,
  ls as makeCommandLoseActorMP,
  cs as makeCommandLoseActorTP,
  sr as makeCommandLoseArmor,
  rr as makeCommandLoseArmorByVariable,
  qs as makeCommandLoseItem,
  zs as makeCommandLoseItemV,
  $s as makeCommandLoseWeapon,
  ar as makeCommandLoseWeaponV,
  fr as makeCommandMovePicture,
  Cs as makeCommandPlayBGM,
  Ss as makeCommandPlayBGS,
  ys as makeCommandPlayME,
  Lr as makeCommandPlayMovie,
  Ns as makeCommandPlaySE,
  Pr as makeCommandPluginCommandMZ,
  _e as makeCommandRecoverAll,
  Ie as makeCommandRecoverAllTarget,
  vs as makeCommandRemoveEachEnemyState,
  ks as makeCommandRemoveEnemyState,
  Dr as makeCommandRemovePartyMember,
  _s as makeCommandResumeBGM,
  Ts as makeCommandSaveBGM,
  Fr as makeCommandScriptArray,
  Ka as makeCommandScriptBody,
  Wa as makeCommandScriptHeader,
  Rr as makeCommandScrollingTextBody,
  _r as makeCommandScrollingTextHeader,
  mr as makeCommandSelectItem,
  Mr as makeCommandSetupChoice,
  Ur as makeCommandShopProcessing,
  Cr as makeCommandShowChoiceItem,
  Vd as makeCommandShowMessage,
  wd as makeCommandShowMessageBody,
  vr as makeCommandShowPicture,
  jr as makeCommandVariableFromActorStatusData,
  Qr as makeCommandVariableFromArmor,
  Zr as makeCommandVariableFromConstant,
  Jr as makeCommandVariableFromEnemyData,
  $r as makeCommandVariableFromItemData,
  am as makeCommandVariableFromRandom,
  em as makeCommandVariableFromScript,
  tm as makeCommandVariableFromWeapon,
  aa as makeCommentArray,
  Ar as makeCommentCommandArray,
  Oe as makeCommonEventData,
  D as makeDamage,
  ie as makeDataNames,
  va as makeDropItem,
  de as makeEditorSetting,
  bt as makeEnemyAction,
  kt as makeEnemyData,
  ua as makeEventPageCondition,
  $m as makeGameInitial,
  me as makeItemCategories,
  Zm as makeItemCategoriesFromArray,
  Wt as makeItemData,
  Nt as makeMapData,
  Ct as makeMapEvent,
  Pa as makeMapEventIamge,
  St as makeMapEventPage,
  yt as makeMapFileInfo,
  Ot as makeMapInfoData,
  ne as makeMenuCommandsEnabled,
  Jm as makeMenuCommandsEnabledFromArray,
  Da as makeParamArray,
  Na as makeParamNamesArray,
  Yd as makeParamNamesFromArray,
  Kt as makeSkillData,
  re as makeSoundsArray,
  xm as makeSoundsObject,
  Dt as makeStateData,
  se as makeSystemAdvanced,
  nn as makeSystemData,
  Ma as makeTermsBasic,
  Wd as makeTermsBasicFromArray,
  Oa as makeTermsCommandArray,
  Kd as makeTermsCommandArrayWithNulls,
  Xd as makeTermsCommandFromArray,
  ya as makeTermsMessages,
  en as makeTitleCommandWindow,
  Me as makeTroopData,
  Le as makeTroopEventConditions,
  ge as makeTroopMember,
  P as makeVehicleData,
  ft as makeWeaponData,
  gt as normalizeDataActor,
  qd as normalizeNote,
  Pt as paramArrayToObject,
  zd as partyAbilityToArray,
  jd as readNote,
  Qd as readNoteEx,
  Zd as readNoteObject,
  Jd as regularParamName,
  $d as regularParamsToArray,
  ap as replaceNote,
  ep as repleaceMapEventCommands,
  tp as resolveItemEffectLabels,
  sp as resolveTraitLabels,
  rp as setNoteValue,
  mp as specialFlagToArray,
  np as specialParamName,
  op as specialParamsToArray,
  on as textAndDesc,
  Ha as toArrayCommonEvent,
  Ba as toArrayControlSwitches,
  xs as toArrayInputNumber,
  Xa as toArrayOperandActorStatus,
  qa as toArrayOperandArmorData,
  za as toArrayOperandConstant,
  Qa as toArrayOperandEnemyStatus,
  Za as toArrayOperandItemData,
  Ja as toArrayOperandRandom,
  $a as toArrayOperandScript,
  ae as toArrayOperandWeaponData,
  Ya as toArrayScrollingTextBody,
  wa as toArrayScrollingTextHeader,
  Or as toArraySetupChoice,
  yr as toArraySetupChoiceItem,
  ip as toArrayShowMessageHeader
};
