import { aG as ca, aK as la, aL as Ea, ay as oa, az as na, aA as ia, af as Aa, aj as Ta, al as Ia, am as _a, G as Ca, H as Ra, Q as Sa, au as h, q as ya, v as Na, A as O, c_ as R, d0 as S, d1 as T, c$ as y, B as g, D as k, C as Oa, k as ga, h as Ma, j as ua, a_ as ba, a$ as La, av as ka, aw as Pa, w as n, cZ as va, cS as Da, cW as ha, cU as fa } from "../shared/make.es2.js";
import { aU as On, aI as gn, aD as Mn, ar as un, aH as bn, M as Ln, aM as kn, aN as Pn, aO as vn, aW as Dn, aC as hn, O as fn, z as Fn, ap as Gn, K as Bn, as as Un, aE as Hn, F as xn, a1 as Vn, J as wn, aF as Yn, aq as Wn, Z as qn, R as Xn, aJ as Kn, P as zn, bw as jn, bx as Qn, by as Zn, bv as Jn, n as $n, o as ai, x as ei, y as ti, cs as si, ct as ri, cq as mi, cz as oi, cp as ni, cx as ii, cy as di, cn as pi, co as ci, cu as li, cv as Ei, cr as Ai, cw as Ti, aQ as Ii, aP as _i, aR as Ci, a0 as Ri, ad as Si, E as yi, bC as Ni, bF as Oi, bB as gi, bA as Mi, bz as ui, bG as bi, bD as Li, bE as ki, bH as Pi, bI as vi, a4 as Di, ag as hi, ak as fi, a3 as Fi, cg as Gi, ch as Bi, cj as Ui, ci as Hi, a6 as xi, aT as Vi, aY as wi, a2 as Yi, at as Wi, Y as qi, I as Xi, s as Ki, u as zi, L as ji, p as Qi, aa as Zi, ax as Ji, N as $i, aV as ad, aX as ed, ca as td, cd as sd, c8 as rd, c9 as md, cc as od, cb as nd, ao as id, b0 as dd, b1 as pd, aB as cd, bS as ld, bO as Ed, bP as Ad, bT as Td, bQ as Id, bM as _d, bN as Cd, bR as Rd, ai as Sd, aZ as yd, ab as Nd, ah as Od, W as gd, e as Md, V as ud, X as bd, U as Ld, ae as kd, a7 as Pd, _ as vd, $ as Dd, aS as hd, c as fd, d as Fd, S as Gd, b as Bd, a9 as Ud, l as Hd, c4 as xd, c3 as Vd, bY as wd, b$ as Yd, c2 as Wd, c1 as qd, b_ as Xd, bZ as Kd, c0 as zd, bX as jd, an as Qd, ac as Zd, a5 as Jd, bp as $d, bb as ap, bf as ep, bd as tp, bc as sp, be as rp, br as mp, b5 as op, b4 as np, bl as ip, bm as dp, bn as pp, bk as cp, b8 as lp, bs as Ep, bi as Ap, bj as Tp, bg as Ip, bh as _p, bo as Cp, ba as Rp, bq as Sp, b6 as yp, b7 as Np, b9 as Op, T as gp, a8 as Mp, cA as up, bu as bp, cF as Lp, b2 as kp, cR as Pp, bt as vp, bJ as Dp, b3 as hp, ce as fp, bU as Fp, ck as Gp, c5 as Bp, bL as Up, bK as Hp, f as xp, cP as Vp, cL as wp, cM as Yp, g as Wp, cI as qp, cN as Xp, cQ as Kp, cK as zp, cO as jp, i as Qp, m as Zp, a as Jp, cT as $p, cV as ac, cX as ec, cY as tc, cB as sc, cf as rc, cC as mc, cD as oc, cE as nc, bW as ic, bV as dc, cG as pc, cH as cc, cm as lc, r as Ec, cJ as Ac, cl as Tc, c7 as Ic, c6 as _c, t as Cc } from "../shared/make.es2.js";
import { c as Fa, a as Ga, m as r } from "../shared/make.es.js";
const xe = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), Ve = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [1, a.targetSelectVariableId]
}), we = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: m = "", battlerName: o = "" } = {}, i = 0) => ({
  code: 322,
  indent: i,
  parameters: [a, m, s, t, e, o]
}), f = (a, e) => `\\${a}[${e}]`, Ye = (a, e) => e.map((t, s) => ({ text: t, controlChar: f(a, s) })), We = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e) => ({
  char: e[1],
  id: parseInt(e[2], 10)
})), qe = (a) => a.map((e) => ({ text: e.name, controlChar: f("N", e.id) })), Xe = (a) => a.variables.map((e, t) => ({
  text: e || "",
  controlChar: f("V", t)
})).filter((e) => e.text !== ""), Ke = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", trigger: a.trigger ?? 0, list: a.list ?? [], switchId: a.switchId ?? 0 }), ze = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  members: a.members ?? [],
  pages: a.pages ?? []
}), je = (a) => ({ span: a.span ?? 0, conditions: Ba(a.conditions ?? {}), list: a.list ?? [] }), Qe = (a = {}) => ({
  enemyId: a.enemyId ?? 0,
  x: a.x ?? 0,
  y: a.y ?? 0,
  hidden: a.hidden ?? !1
}), Ba = (a = {}) => ({ actorHp: a.actorHp ?? 0, actorId: a.actorId ?? 0, enemyValid: a.enemyValid ?? 0, switchValid: a.switchValid ?? 0 }), Ua = (a = {}) => ({
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
}), Ze = 0, Je = 1, $e = 2, at = 3, et = 4, tt = 5, st = 6, rt = 7, mt = 8, ot = 9, nt = 10, it = 11, dt = 12, pt = 13, ct = 14, lt = 15, Et = 16, At = 17, Tt = 18, It = 19, _t = 20, Ct = 21, Rt = 22, St = 23, yt = 24, Nt = 25, Ot = 26, gt = 27, Mt = 28, ut = 29, bt = 30, Lt = 31, kt = 32, Pt = 33, vt = 34, Dt = 35, ht = 36, ft = 37, Ft = 38, Gt = 39, Bt = 40, Ut = 41, Ht = 42, xt = 43, Vt = 44, wt = 45, Yt = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: m = 0, y: o = 0 } = {}) => ({
  id: a,
  name: e,
  pages: t,
  note: s,
  x: m,
  y: o
}), Ha = ({ characterIndex: a = 0, characterName: e = "", direction: t = 2, pattern: s = 0, tileId: m = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: t,
  pattern: s,
  tileId: m
}), Wt = ({ list: a = [], conditions: e = Ua(), image: t = Ha(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: o = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: i = 1, stepAnime: p = !1, through: c = !1, walkAnime: I = !1, moveSpeed: M = 3, moveType: u = 0, trigger: b = 0 } = {}) => ({
  walkAnime: I,
  stepAnime: p,
  through: c,
  conditions: e,
  list: a,
  directionFix: m,
  image: t,
  priorityType: i,
  moveFrequency: s,
  moveSpeed: M,
  moveType: u,
  trigger: b,
  moveRoute: { list: o.list, repeat: o.repeat, skippable: o.skippable, wait: o.wait }
}), qt = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), Xt = (a = {}) => ({
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
  encounterStep: a.encounterStep ?? 30,
  scrollType: a.scrollType ?? 0,
  specifyBattleback: a.specifyBattleback ?? !1,
  width: a.width ?? 0,
  height: a.height ?? 0,
  note: a.note ?? "",
  bgm: a.bgm ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  bgs: a.bgs ?? {
    name: "",
    pan: 0,
    pitch: 100,
    volume: 100
  },
  disableDashing: a.disableDashing ?? !1,
  displayName: a.displayName ?? "",
  encounterList: a.encounterList ?? [],
  events: a.events ?? []
}), Kt = (a = { id: 0 }) => {
  return { name: a.name ?? (e = a.id, e.toString().padStart(3, "0")), id: a.id, expanded: a.expanded ?? !1, order: a.order ?? 0, parentId: a.parentId ?? 0, scrollX: a.scrollX ?? 0, scrollY: a.scrollY ?? 0 };
  var e;
}, zt = (a, e) => a.map((t) => t ? {
  ...t,
  pages: xa(t, e)
} : null), xa = (a, e) => a.pages.map((t) => ({ ...t, list: e(t.list) })), Va = { actor: { title: "アクター", options: {
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
} }, wa = { title: "ダメージ", options: {} }, F = (a = {}) => ({
  type: a.type ?? 0,
  elementId: a.elementId ?? 0,
  formula: a.formula ?? "",
  variance: a.variance ?? 0,
  critical: a.critical ?? !1
}), jt = (a = {}) => ({
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
}), Qt = (a) => ({
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
}), Zt = (a = {}) => ({
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
}), Jt = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: [],
  note: a.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), Ya = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: m = 0, mdf: o = 0, agi: i = 0, luk: p = 0 }) => [a, e, t, s, m, o, i, p], $t = (a) => {
  const [e, t, s, m, o, i, p, c] = a;
  return { mhp: e, mmp: t, atk: s, def: m, mat: o, mdf: i, agi: p, luk: c };
}, Wa = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), as = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), es = (a = {}) => {
  var e;
  return {
    name: a.name ?? "",
    id: a.id ?? 0,
    battlerName: a.battlerName ?? "",
    battlerHue: a.battlerHue ?? 0,
    dropItems: ((e = a.dropItems) == null ? void 0 : e.map(() => Wa())) ?? [],
    exp: a.exp ?? 0,
    gold: a.gold ?? 0,
    traits: [],
    note: a.note ?? "",
    params: a.params ? [...a.params] : Ya({
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
}, ts = (a = {}) => ({
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
}), d = "{name}", _ = "{name} * {value}%", ta = "{name} + {value}%", sa = "{value}", qa = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: _, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } },
  extraParam: { title: "追加能力値", format: ta, options: {
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
  specialParam: { title: "特殊能力値", format: _, options: {
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
    format: d,
    options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
  },
  collaps: { title: "消滅エフェクト", format: d, options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  } },
  partyAbility: { title: "パーティ能力", format: d, options: {
    cancelSurprise: "不意打ち無効",
    dropItemDouble: "アイテムドロップ2倍",
    encounterHalf: "エンカウント半減",
    encounterNone: "エンカウントなし",
    goldDouble: "ゴールド2倍",
    raisePreemptive: "先制攻撃率アップ"
  } },
  elementRate: { title: "属性有効度", format: _ },
  debuffRate: { title: "弱体有効度", format: _ },
  stateRate: { title: "ステート有効度", format: _ },
  stateResist: {
    title: "ステート無効",
    format: d
  },
  attackElement: { title: "攻撃属性", format: d },
  attackState: { title: "攻撃ステート", format: ta },
  attackSpeed: { title: "攻撃速度補正", format: sa },
  attackTimes: {
    title: "攻撃追加回数",
    format: sa
  },
  actionPlus: { title: "行動追加", format: _ },
  attackSkill: { title: "攻撃スキル", format: d },
  equipWeaponType: { title: "装備武器タイプ", format: d },
  equipArmorType: { title: "装備防具タイプ", format: d },
  equipLock: {
    title: "装備固定",
    format: d
  },
  equipSeal: { title: "装備封印", format: d },
  slotType: { title: "スロットタイプ", format: d },
  skillAdd: { title: "スキル追加", format: d },
  skillSeal: { title: "スキルタイプ封印", format: d },
  skillTypeAdd: { title: "スキルタイプ追加", format: d },
  skillTypeSeal: { title: "スキルタイプ封印", format: d }
} }, Xa = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, ss = (a, e, t) => {
  const s = Fa(Xa);
  return Ga(e, t, s, a.pattern, (m) => m.dataId);
}, rs = (a = {}) => ({
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
  damage: F(a.damage ?? {}),
  wtypeId: a.wtypeId ?? 0
}), ms = {
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
}, os = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, ns = 0, is = 1, ds = 2, ra = "{name} {value1}%", v = "{value1}% + {value2}", ma = "{name} {value1}ターン", N = "{name}", Ka = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: ma },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: ma },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: v },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: N },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: v
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: v },
  removeBuff: {
    desc: "バフを解除する",
    domainName: "バフ解除",
    format: N
  },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: N },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: ra },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: N
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: ra },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: N }
} }, ps = 0, cs = (a, e, t) => {
  const s = t.find((o) => o.id === e.dataId), m = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", m);
}, ls = { title: "アイテム", options: { consumable: "消耗品" } }, Es = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, As = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Ts = (a = {}) => ({
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
  damage: F(a.damage ?? {}),
  effects: [],
  price: 0
}), Is = (a = {}) => ({
  stypeId: a.stypeId ?? 0,
  requiredWtypeId1: a.requiredWtypeId1 ?? 0,
  requiredWtypeId2: a.requiredWtypeId2 ?? 0,
  animationId: a.animationId ?? 0,
  damage: F(a.damage ?? {}),
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
}), _s = "data", Cs = "actor", Rs = "map", Ss = "enemy", ys = "state", Ns = "skill", Os = "item", gs = "weapon", Ms = "armor", us = "class", bs = "common_event", Ls = "troop", za = {
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
}, ks = () => ({ rpg: { damage: wa, data: Va, traits: qa, itemEffect: Ka }, global: za }), Ps = (a, e = 0) => ({ code: ca, parameters: [a.actorId, a.name], indent: e }), vs = (a, e = 0) => ({
  code: la,
  parameters: [a.actorId, a.nickname],
  indent: e
}), Ds = (a, e = 0) => ({ code: Ea, parameters: [a.actorId, a.profile], indent: e }), C = { direct: 0, variable: 1 }, hs = (a, e = 0) => ({
  code: oa,
  indent: e,
  parameters: da(0, a)
}), fs = (a, e = 0) => ({ code: oa, indent: e, parameters: da(1, a) }), Fs = (a, e = 0) => ({ code: ia, indent: e, parameters: P(0, a) }), Gs = (a, e = 0) => ({
  code: ia,
  indent: e,
  parameters: P(1, a)
}), Bs = (a, e = 0) => ({ code: na, indent: e, parameters: P(0, a) }), Us = (a, e = 0) => ({
  code: na,
  indent: e,
  parameters: P(1, a)
}), P = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value], da = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value, e.allowDeath], Hs = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), xs = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), Vs = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), ws = (a = 0) => ({ code: 244, indent: a, parameters: [] }), Ys = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), Ws = (a, e) => E(a, r({ name: e })), E = (a, e, t = 0) => ({
  code: a,
  parameters: [r(e)],
  indent: t
}), qs = (a, e = 0) => E(Aa, a, e), Xs = (a, e = 0) => E(Ta, a, e), Ks = (a, e = 0) => E(Ia, a, e), zs = (a, e = 0) => E(_a, a, e), js = (a, e = 0) => E(Ca, a, e), Qs = (a, e = 0) => E(Ra, a, e), Zs = (a, e = 0) => E(Sa, a, e), Js = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), $s = 0, ar = 1, er = 2, tr = (a) => a.parameters[0] === 1, sr = ({ troopId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({
  code: h,
  indent: s,
  parameters: [0, a, e, t]
}), rr = ({ variableId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({ code: h, indent: s, parameters: [1, a, e, t] }), mr = ({ canEscape: a = !1, canLose: e = !1 }, t = 0) => ({
  code: h,
  indent: t,
  parameters: [2, 0, a, e]
}), ja = { plus: 0, minus: 1 }, or = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [ja[a ?? "plus"] ?? 0, e ?? 0] });
function nr(a, e = 0) {
  return {
    code: 336,
    parameters: [a.enemyId, a.newEnemyId],
    indent: e
  };
}
const ir = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), dr = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 0, a.stateId] }), pr = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 1, a.stateId]
}), cr = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 0, a.stateId] }), lr = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [-1, 1, a.stateId]
}), Er = (a = 0) => ({ code: 334, indent: a, parameters: [0] }), Ar = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), Tr = (a, e = 0) => ({ code: ya, indent: e, parameters: Qa(a ?? {}) }), Ir = (a) => ({
  eventId: a[0]
}), Qa = (a) => [a.eventId ?? 0], _r = (a) => ({ min: a[0], max: a[1], value: a[2] }), Za = (a) => [a.min, a.max, a.value], Cr = (a, e = 0) => ({ code: Na, indent: e, parameters: Za(a) }), Rr = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), Sr = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], yr = (a) => ({ variableId: a[0], maxDigits: a[1] }), Nr = (a) => a.parameters[3] === T, Or = (a) => ({
  operation: a[1],
  itemId: a[0],
  value: a[3],
  operand: a[2]
}), gr = (a, e = 0) => ({ code: O, indent: e, parameters: [a.itemId, a.operation, a.operand, a.value] }), Mr = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.itemId, R, S, a.value]
}), ur = (a, e = 0) => ({ code: O, indent: e, parameters: [a.itemId, R, T, a.variableId] }), br = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.itemId, y, S, a.value]
}), Lr = (a, e = 0) => ({ code: O, indent: e, parameters: [a.itemId, y, T, a.variableId] }), kr = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), Pr = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), vr = (a, e = 0) => ({ code: g, indent: e, parameters: [a.weaponId, R, S, a.value, !1] }), Dr = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.weaponId, R, T, a.variableId, !1]
}), hr = (a, e = 0) => ({ code: g, indent: e, parameters: [a.weaponId, y, S, a.value, !1] }), fr = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.weaponId, y, T, a.variableId, !1]
}), Fr = (a, e = 0) => ({ code: k, indent: e, parameters: [a.armorId, R, S, a.value, !1] }), Gr = (a, e = 0) => ({
  code: k,
  indent: e,
  parameters: [a.armorId, R, T, a.variableId, !1]
}), Br = (a, e = 0) => ({ code: k, indent: e, parameters: [a.armorId, y, S, a.value, !1] }), Ur = (a, e = 0) => ({
  code: k,
  indent: e,
  parameters: [a.armorId, y, T, a.variableId, !1]
}), Hr = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), xr = (a) => ({ variableId: a[0], itemType: a[1] }), Vr = (a = 0) => ({
  code: 135,
  parameters: [1],
  indent: a
}), wr = (a = 0) => ({ code: 135, parameters: [0], indent: a }), Yr = (a = 0) => ({ code: 134, parameters: [1], indent: a }), Wr = (a = 0) => ({ code: 134, parameters: [0], indent: a }), qr = (a = 0) => ({
  code: 137,
  parameters: [1],
  indent: a
}), Xr = (a = 0) => ({ code: 137, parameters: [0], indent: a }), pa = (a) => [a], Kr = (a) => ({ comment: a[0] }), Ja = (a, e = 0) => ({ code: Oa, indent: e, parameters: pa(a) }), $a = (a, e = 0) => ({
  code: ga,
  indent: e,
  parameters: pa(a)
}), zr = (a, e = 0) => a.map((t, s) => s === 0 ? Ja(t, e) : $a(t, e)), ae = (a = {}) => [(a == null ? void 0 : a.speed) ?? 4, (a == null ? void 0 : a.skip) ?? !1], jr = (a) => ({ speed: a[0], skip: a[1] }), Qr = (a = {}, e = 0) => ({
  code: Ma,
  indent: e,
  parameters: ae(a)
}), ee = (a = "") => [a], Zr = (a) => ({ content: a[0] }), Jr = (a = "", e = 0) => ({ code: ua, indent: e ?? 0, parameters: ee(a) }), $r = (a, e = 0) => ({
  code: 402,
  indent: e,
  parameters: [(a == null ? void 0 : a.index) ?? 0, (a == null ? void 0 : a.name) ?? ""]
}), am = (a) => ({ index: a[0], name: a[1] }), em = (a) => [a.index ?? 0, a.name ?? ""], tm = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), sm = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], rm = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [(a == null ? void 0 : a.choices) ?? [], (a == null ? void 0 : a.cancelType) ?? 0, (a == null ? void 0 : a.defaultType) ?? 0, (a == null ? void 0 : a.positionType) ?? 2, (a == null ? void 0 : a.background) ?? 0]
}), mm = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), om = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), nm = (a) => ({
  filename: a[0]
}), im = ({ args: a = {}, commandName: e, commandTitle: t = "", pluginName: s }, m = 0) => ({ code: 357, indent: m, parameters: [s, e, t, { ...a }] }), dm = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), pm = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), cm = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), lm = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), Em = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), Am = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), Tm = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), Im = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: m = 0, scaleX: o = 100, scaleY: i = 100, opacity: p = 255, blendMode: c = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, m, o, i, p, c]
}), _m = ({ pictureId: a, origin: e, x: t, y: s, scaleX: m, scaleY: o, opacity: i, blendMode: p, wait: c = !1, easingType: I = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, t, s, m, o, i, p, c, I]
}), Cm = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), Rm = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), Sm = (a = 0) => ({ code: 221, indent: a, parameters: [] }), ym = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), Nm = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), Om = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), te = (a, e = 0) => ({ code: ba, indent: e, parameters: [a] }), se = (a, e = 0) => ({
  code: La,
  indent: e,
  parameters: [a]
}), gm = (a, e = 0) => a.map((t, s) => s === 0 ? te(t, e) : se(t, e)), Mm = 1, um = 0, L = { item: 0, weapon: 1, armors: 2 }, bm = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map((s, m) => {
  const o = ((i) => i.customPrice !== void 0 && i.customPrice !== 0)(s) ? 1 : 0;
  return m === 0 ? { code: ka, indent: t, parameters: [L[s.itemType] ?? L.item, s.id, o, s.customPrice ?? 0, e] } : {
    code: Pa,
    indent: t,
    parameters: [L[s.itemType] ?? L.item, s.id, o, s.customPrice ?? 0]
  };
}), Lm = 0, km = 1, Pm = 2, vm = 3, Dm = 4, hm = 5, fm = 0, Fm = 1, Gm = 2, Bm = 3, Um = 4, Hm = 0, xm = 1, Vm = 2, wm = (a) => a.parameters[2] === 1, re = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 1, e.variableId], Ym = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: re(a, e, t.operation ?? 0)
}), Wm = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 0] }), qm = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 1]
}), Xm = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 3] }), Km = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 2]
}), zm = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 4] }), jm = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 5]
}), Qm = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 6] }), Zm = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 7]
}), Jm = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 8] }), $m = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 9]
}), me = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, ao = (a, e, t = {}) => ({ code: n, indent: t.indent ?? 0, parameters: oe(a, e) }), oe = (a, e) => [a.startId, a.endId ?? a.startId, 0, 3, 8, me[e.param]], eo = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.hp;
    case 1:
      return a.mp;
    case 10:
      return a.tp;
  }
  return e[6] >= 2 && e[6] <= 9 ? a.param(e[6] - 2) : 0;
}, to = (a, e) => {
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
}, ne = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], so = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: ne(a, e, t.operation ?? 0)
}), ie = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], ro = (a, e) => ({
  code: n,
  indent: 0,
  parameters: ie(a, e, 0)
}), de = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], mo = (a, e, t = {}) => ({ code: n, indent: t.indent ?? 0, parameters: de(a, e, t.operation ?? 0) }), pe = {
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
}, ce = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, pe[e.param]], oo = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: ce(a, e, t.operation ?? 0)
}), no = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: le(a, e, t.operation ?? 0)
}), le = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], Ee = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], io = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ee(a, e, t.operation ?? 0)
}), Ae = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 4, e.code], po = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ae(a, e, t.operation ?? 0)
}), Te = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 1, e.weaponId], co = (a, e) => ({ code: n, indent: 0, parameters: Te(a, e, 0) }), lo = (a = 0) => ({ code: 206, indent: a, parameters: [] }), Eo = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), Ao = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, r(a.bgm)] }), To = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), Io = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), _o = 0, Co = 1, Ro = 2, Ie = (a) => [...a], So = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: Ie(a.parameters)
}), _e = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", yo = (a) => a.parameters.every(_e), No = "bgm", Oo = "se", go = "me", Mo = "bgs", uo = "battlebacks1", bo = "battlebacks2", Lo = "characters", ko = "enemies", Po = "faces", vo = "parallaxes", Do = "pictures", ho = "sv_actors", fo = "sv_enemies", Fo = "system", Go = "tilesets", Bo = "titles1", Uo = "titles2", Ho = "System.json", xo = "Actors.json", Vo = "Classes.json", wo = "Skills.json", Yo = "Items.json", Wo = "Weapons.json", qo = "Armors.json", Xo = "Enemies.json", Ko = "Troops.json", zo = "States.json", jo = "Animations.json", Qo = "Tilesets.json", Zo = "CommonEvents.json", Jo = "MapInfos.json", $o = "data", an = "img", en = "audio", tn = "js", Ce = (a = {}) => ({
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
  fontSize: a.fontSize ?? 28,
  picturesUpperLimit: a.picturesUpperLimit ?? 100
}), Re = (a = {}) => [r(a.cursor), r(a.ok), r(a.cancel), r(a.buzzer), r(a.equip), r(a.save), r(a.load), r(a.battleStart), r(a.escape), r(a.enemyAttack), r(a.enemyDamage), r(a.enemyCollapse), r(a.bossCollapes1), r(a.bossCollapes2), r(a.actorDamage), r(a.actorCollapse), r(a.playRecovery), r(a.playMiss), r(a.playEvasion), r(a.playMagicEvasion), r(a.playReflection), r(a.shop), r(a.useItem), r(a.useSkill)], Se = (a) => ({
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
}), ye = (a) => ({
  item: Ne(a),
  skill: Oe(a),
  equip: ge(a),
  status: Me(a),
  formation: ue(a),
  save: be(a)
}), Ne = (a) => a.menuCommands[0], Oe = (a) => a.menuCommands[1], ge = (a) => a.menuCommands[2], Me = (a) => a.menuCommands[3], ue = (a) => a.menuCommands[4], be = (a) => a.menuCommands[5], sn = (a) => a.itemCategories[0], rn = (a) => a.itemCategories[1], mn = (a) => a.itemCategories[2], on = (a) => a.itemCategories[3], Le = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], nn = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), ke = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], dn = (a) => ({
  item: a[0],
  skill: a[1],
  equip: a[2],
  status: a[3],
  formation: a[4],
  save: a[5]
}), Pe = (a = {}) => ({
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
}), pn = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), cn = (a) => ({
  armorTypes: A(a.armorTypes),
  elements: A(a.elements),
  equipTypes: A(a.equipTypes),
  weaponTypes: A(a.weaponTypes),
  skillTypes: A(a.skillTypes),
  variables: A(a.variables),
  switches: A(a.switches)
}), A = (a) => a ? [...a] : [], ln = (a) => a.terms.params.map((e, t) => ({
  name: e,
  id: t
})), ve = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), D = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: r(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), De = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), En = { title: "オプション", options: {
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
} }, An = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, Tn = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, In = {
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
    continueGame: "続きから",
    equip2: "装備2",
    keyItem: "大事なもの",
    optimize: "最強装備",
    toTitle: "タイトルへ戻る"
  }
}, _n = (a) => he({
  versionId: a.versionId,
  menuCommands: ye(a),
  locale: a.locale,
  gameInit: { startMapId: a.startMapId, startX: a.startX, startY: a.startY, partyMembers: a.partyMembers },
  battle: {
    magicSkills: a.magicSkills
  },
  bgm: { titleBgm: a.titleBgm, battleBgm: a.battleBgm },
  options: a,
  vehicles: { airship: a.airship, boat: a.boat, ship: a.ship },
  images: {
    title1Name: a.title1Name,
    title2Name: a.title2Name
  },
  me: { defeatMe: a.defeatMe, gameoverMe: a.gameoverMe, victoryMe: a.victoryMe },
  battleTest: {
    battleback1Name: a.battleback1Name,
    battleback2Name: a.battleback2Name,
    testTroopId: a.testTroopId,
    testBattlers: a.testBattlers
  },
  attackMotion: a.attackMotions,
  sounds: Se(a.sounds),
  dataNames: {
    skillTypes: a.skillTypes,
    weaponTypes: a.weaponTypes,
    armorTypes: a.armorTypes,
    elements: a.elements,
    equipTypes: a.equipTypes,
    switches: a.switches,
    variables: a.variables
  },
  texts: { currencyUnit: a.currencyUnit, gameTitle: a.gameTitle },
  editorTemporary: { editMapId: a.editMapId, battlerName: a.battlerName, battlerHue: a.battlerHue }
}), he = (a) => {
  var t, s, m, o, i, p, c, I, M, u, b, G, B, U, H, x, V, w, Y, W, q, X, K, z, j, Q, Z, J, $, aa, ea;
  const e = Fe(a.size);
  return {
    ...Pe(a.options),
    titleCommandWindow: ve(a.titleCommandWindow ?? {}),
    currencyUnit: ((t = a.texts) == null ? void 0 : t.currencyUnit) ?? "",
    gameTitle: ((s = a.texts) == null ? void 0 : s.gameTitle) ?? "",
    sounds: Re(a.sounds),
    editor: De(a.editing),
    advanced: Ce(a.advanced),
    title1Name: ((m = a.images) == null ? void 0 : m.title1Name) ?? "",
    title2Name: ((o = a.images) == null ? void 0 : o.title2Name) ?? "",
    armorTypes: l((i = a.dataNames) == null ? void 0 : i.armorTypes),
    equipTypes: l((p = a.dataNames) == null ? void 0 : p.equipTypes),
    elements: l((c = a.dataNames) == null ? void 0 : c.elements),
    skillTypes: l((I = a.dataNames) == null ? void 0 : I.skillTypes),
    weaponTypes: l((M = a.dataNames) == null ? void 0 : M.weaponTypes),
    switches: l((u = a.dataNames) == null ? void 0 : u.switches),
    variables: l((b = a.dataNames) == null ? void 0 : b.variables),
    magicSkills: l((G = a.battle) == null ? void 0 : G.magicSkills),
    battleSystem: ((B = a.battle) == null ? void 0 : B.battleSystem) ?? 0,
    airship: D((U = a.vehicles) == null ? void 0 : U.airship),
    boat: D((H = a.vehicles) == null ? void 0 : H.boat),
    ship: D((x = a.vehicles) == null ? void 0 : x.ship),
    defeatMe: r((V = a.me) == null ? void 0 : V.defeatMe),
    gameoverMe: r((w = a.me) == null ? void 0 : w.gameoverMe),
    titleBgm: r((Y = a.bgm) == null ? void 0 : Y.titleBgm),
    tileSize: e.tileSize,
    faceSize: e.faceSize,
    iconSize: e.iconSize,
    versionId: a.versionId ?? 1,
    attackMotions: a.attackMotion ? [...a.attackMotion] : [],
    battleback1Name: ((W = a.battleTest) == null ? void 0 : W.battleback1Name) ?? "",
    battleback2Name: ((q = a.battleTest) == null ? void 0 : q.battleback2Name) ?? "",
    testTroopId: ((X = a.battleTest) == null ? void 0 : X.testTroopId) ?? 0,
    testBattlers: Ge((K = a.battleTest) == null ? void 0 : K.testBattlers, Be),
    battleBgm: r((z = a.bgm) == null ? void 0 : z.battleBgm),
    victoryMe: r((j = a.me) == null ? void 0 : j.victoryMe),
    editMapId: ((Q = a.editorTemporary) == null ? void 0 : Q.editMapId) ?? 0,
    battlerName: ((Z = a.editorTemporary) == null ? void 0 : Z.battlerName) ?? "",
    locale: a.locale ?? "en-US",
    startMapId: ((J = a.gameInit) == null ? void 0 : J.startMapId) ?? 0,
    startX: (($ = a.gameInit) == null ? void 0 : $.startX) ?? 0,
    startY: ((aa = a.gameInit) == null ? void 0 : aa.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: fe(a.terms ?? {}),
    itemCategories: Le(a.itemCategories),
    partyMembers: l((ea = a.gameInit) == null ? void 0 : ea.partyMembers),
    battlerHue: 0,
    menuCommands: ke(a.menuCommands)
  };
}, fe = (a) => ({ basic: fa(a.basic ?? {}), commands: ha(a.commands ?? {}), params: Da(a.params ?? {}), messages: va(a.messages ?? {}) }), l = (a) => a ? [...a] : [], Fe = (a) => a ? {
  tileSize: a.tileSize ?? 48,
  faceSize: a.faceSize ?? 144,
  iconSize: a.iconSize ?? 32
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Ge = (a, e) => a ? a.map(e) : [], Be = (a) => a ? {
  actorId: a.actorId,
  equips: l(a.equips),
  level: a.level
} : { actorId: 0, equips: [], level: 1 }, Cn = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), Rn = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, Sn = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  On as ABORT_BATTLE,
  $s as BATTLE_DIRECT,
  er as BATTLE_ENCOUNT,
  h as BATTLE_PROCESSING,
  ar as BATTLE_VARIABLE,
  gn as CHANGE_ACTOR_IMAGES,
  Mn as CHANGE_ACTOR_STATE,
  k as CHANGE_ARMORS,
  un as CHANGE_BATTLE_BACKGROUND,
  Ca as CHANGE_BATTLE_BGM,
  bn as CHANGE_CLASS,
  Sa as CHANGE_DEFEAT_ME,
  Ln as CHANGE_ENCOUNTER,
  kn as CHANGE_ENEMY_HP,
  Pn as CHANGE_ENEMY_MP,
  vn as CHANGE_ENEMY_STATE,
  Dn as CHANGE_ENEMY_TP,
  hn as CHANGE_EXP,
  fn as CHANGE_FORMATION_ACCESS,
  Fn as CHANGE_GOLD,
  oa as CHANGE_HP,
  O as CHANGE_ITEMS,
  Gn as CHANGE_MAP_NAME_DISPLAY,
  Bn as CHANGE_MENU_ACCESS,
  na as CHANGE_MP,
  ca as CHANGE_NAME,
  la as CHANGE_NICKNAME,
  Un as CHANGE_PARALLAX,
  Hn as CHANGE_PARAMETER,
  xn as CHANGE_PARTY_MEMBER,
  Vn as CHANGE_PLAYER_FOLLOWERS,
  Ea as CHANGE_PROFILE,
  wn as CHANGE_SAVE_ACCESS,
  Yn as CHANGE_SKILL,
  Wn as CHANGE_TILESET,
  ia as CHANGE_TP,
  qn as CHANGE_TRANSPARENCY,
  Xn as CHANGE_VEHICLE_BGM,
  Kn as CHANGE_VEHICLE_IMAGE,
  Ra as CHANGE_VICTORY_ME,
  g as CHANGE_WEAPONS,
  zn as CHANGE_WINDOW_COLOR,
  jn as COLLAPS_BOSS,
  Qn as COLLAPS_INSTANT,
  Zn as COLLAPS_NONE,
  Jn as COLLAPS_NORMAL,
  ga as COMMENT_BODY,
  Oa as COMMENT_HEAD,
  ya as COMMON_EVENT,
  $n as CONDITIONAL_BRANCH,
  ai as CONDITIONAL_BRANCH_ELSE,
  ei as CONTROL_SELF_SWITCH,
  Na as CONTROL_SWITCHES,
  ti as CONTROL_TIMER,
  n as CONTROL_VARIABLES,
  Mm as CUSTOM_PRICE,
  wa as DEFAULT_DAMAGE_LABELS,
  za as DEFAULT_GLOBAL_LABELS,
  ls as DEFAULT_ITEM_LABELS,
  Es as DEFAULT_SKILL_LABELS,
  En as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  An as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  As as DEFAULT_USABLE_ITEM_LABELS,
  Rn as DIRECTION,
  si as EFFECT_ADD_BUFF,
  ri as EFFECT_ADD_DEBUFF,
  mi as EFFECT_ADD_STATE,
  oi as EFFECT_COMMON_EVENT,
  ni as EFFECT_GAIN_TP,
  ii as EFFECT_GROW,
  di as EFFECT_LEARN_SKILL,
  pi as EFFECT_RECOVER_HP,
  ci as EFFECT_RECOVER_MP,
  li as EFFECT_REMOVE_BUFF,
  Ei as EFFECT_REMOVE_DEBUFF,
  Ai as EFFECT_REMOVE_STATE,
  Ti as EFFECT_SPECIAL,
  Ii as ENEMY_APPEAR,
  _i as ENEMY_RECOVER_ALL,
  Ci as ENEMY_TRANSFORM,
  Ri as ERASE_EVENT,
  Si as ERASE_PICTURE,
  yi as EXIT_EVENT_PROCESSING,
  Ni as EXTRA_PARAM_CEV,
  Oi as EXTRA_PARAM_CNT,
  gi as EXTRA_PARAM_CRI,
  Mi as EXTRA_PARAM_EVA,
  ui as EXTRA_PARAM_HIT,
  bi as EXTRA_PARAM_HRG,
  Li as EXTRA_PARAM_MEV,
  ki as EXTRA_PARAM_MRF,
  Pi as EXTRA_PARAM_MRG,
  vi as EXTRA_PARAM_TRG,
  Di as FADEIN_SCREEN,
  hi as FADEOUT_BGM,
  fi as FADEOUT_BGS,
  Fi as FADEOUT_SCREEN,
  xo as FILENAME_ACTORS,
  jo as FILENAME_ANIMATIONS,
  qo as FILENAME_ARMORS,
  Vo as FILENAME_CLASSES,
  Zo as FILENAME_COMMON_EVENTS,
  Xo as FILENAME_ENEMIES,
  Yo as FILENAME_ITEMS,
  Jo as FILENAME_MAP_INFOS,
  wo as FILENAME_SKILLS,
  zo as FILENAME_STATES,
  Ho as FILENAME_SYSTEM,
  Qo as FILENAME_TILESET,
  Ko as FILENAME_TROOPS,
  Wo as FILENAME_WEAPONS,
  Gi as FLAG_ID_AUTO_BATTLE,
  Bi as FLAG_ID_GUARD,
  Ui as FLAG_ID_PRESERVE_TP,
  Hi as FLAG_ID_SUBSTITUTE,
  xi as FLASH_SCREEN,
  en as FOLDER_AUDIO,
  No as FOLDER_AUDIO_BGM,
  Mo as FOLDER_AUDIO_BGS,
  go as FOLDER_AUDIO_ME,
  Oo as FOLDER_AUDIO_SE,
  $o as FOLDER_DATA,
  an as FOLDER_IMG,
  uo as FOLDER_IMG_BATTLEBACK1,
  bo as FOLDER_IMG_BATTLEBACK2,
  Lo as FOLDER_IMG_CHACTERS,
  ko as FOLDER_IMG_ENEMIES,
  Po as FOLDER_IMG_FACES,
  vo as FOLDER_IMG_PARALLACES,
  Do as FOLDER_IMG_PICTURES,
  ho as FOLDER_IMG_SV_ACTORS,
  fo as FOLDER_IMG_SV_ENEMIES,
  Fo as FOLDER_IMG_SYSTEM,
  Go as FOLDER_IMG_TILESETS,
  Bo as FOLDER_IMG_TITLES1,
  Uo as FOLDER_IMG_TITLES2,
  tn as FOLDER_JS,
  Vi as FORCE_ACTION,
  wi as GAME_OVER,
  Yi as GATHER_FOLLOWERS,
  Wi as GET_LOCATION_INFO,
  qi as GET_ONOFF_VEHICLE,
  ns as HITTYPE_CERTAIN,
  ds as HITTYPE_MAGICAL,
  is as HITTYPE_PHYSICAL,
  Xi as INPUT_NUMBER,
  Ki as LABEL,
  os as LABELS_DATA_WEAPON,
  Tn as LABELS_SYSTEM_BATTLER_PARAMS,
  In as LABELS_SYSTEM_GAME_COMMANDS,
  zi as LABEL_JUMP,
  Va as LABEL_SET_DATA,
  Ka as LABEL_SET_ITEM_EFFECT,
  qa as LABEL_SET_TRAIT,
  ji as LOOP,
  Qi as LOOP_BREAK,
  _s as MODULE_DATA,
  Zi as MOVE_PICTURE,
  Ji as NAME_INPUT_PROCESSING,
  um as NORMAL_PRICE,
  $i as NO_OPERATION,
  ad as OPEN_MENU_SCREEN,
  ed as OPEN_SAVE_SCREEN,
  fm as OPERAND_CONSTANT,
  Bm as OPERAND_GAMEDATA,
  Gm as OPERAND_RANDOM,
  Um as OPERAND_SCRIPT,
  Fm as OPERAND_VARIABLE,
  km as OPERATION_ADD,
  Dm as OPERATION_DIVIDE,
  hm as OPERATION_MOD,
  vm as OPERATION_MULTIPLY,
  Lm as OPERATION_SET,
  Pm as OPERATION_SUBTRACT,
  td as PARTY_ABILITY_CANCEL_SURPRISE,
  sd as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  rd as PARTY_ABILITY_ENCOUNTER_HALF,
  md as PARTY_ABILITY_ENCOUNTER_NONE,
  od as PARTY_ABILITY_GOLD_DOUBLE,
  nd as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Aa as PLAY_BGM,
  Ta as PLAY_BGS,
  Ia as PLAY_ME,
  id as PLAY_MOVIE,
  _a as PLAY_SE,
  dd as PLUGIN_COMMAND_MV,
  pd as PLUGIN_COMMAND_MZ,
  cd as RECOVER_ALL,
  ld as REGULAR_PARAM_AGI,
  Ed as REGULAR_PARAM_ATK,
  Ad as REGULAR_PARAM_DEF,
  Td as REGULAR_PARAM_LUK,
  Id as REGULAR_PARAM_MATK,
  _d as REGULAR_PARAM_MAX_HP,
  Cd as REGULAR_PARAM_MAX_MP,
  Rd as REGULAR_PARAM_MDEF,
  Sd as RESUME_BGM,
  yd as RETURN_TO_TITLE_SCREEN,
  Nd as ROTATE_PICTURE,
  xt as ROUTE_CHANGE_BLEND_MODE,
  bt as ROUTE_CHANGE_FREQ,
  Ut as ROUTE_CHANGE_IMAGE,
  Ht as ROUTE_CHANGE_OPACITY,
  ut as ROUTE_CHANGE_SPEED,
  ht as ROUTE_DIR_FIX_OFF,
  Dt as ROUTE_DIR_FIX_ON,
  Ze as ROUTE_END,
  ct as ROUTE_JUMP,
  it as ROUTE_MOVE_AWAY,
  pt as ROUTE_MOVE_BACKWARD,
  Je as ROUTE_MOVE_DOWN,
  dt as ROUTE_MOVE_FORWARD,
  $e as ROUTE_MOVE_LEFT,
  tt as ROUTE_MOVE_LOWER_L,
  st as ROUTE_MOVE_LOWER_R,
  ot as ROUTE_MOVE_RANDOM,
  at as ROUTE_MOVE_RIGHT,
  nt as ROUTE_MOVE_TOWARD,
  et as ROUTE_MOVE_UP,
  rt as ROUTE_MOVE_UPPER_L,
  mt as ROUTE_MOVE_UPPER_R,
  Vt as ROUTE_PLAY_SE,
  wt as ROUTE_SCRIPT,
  vt as ROUTE_STEP_ANIME_OFF,
  Pt as ROUTE_STEP_ANIME_ON,
  Mt as ROUTE_SWITCH_OFF,
  gt as ROUTE_SWITCH_ON,
  Ft as ROUTE_THROUGH_OFF,
  ft as ROUTE_THROUGH_ON,
  Bt as ROUTE_TRANSPARENT_OFF,
  Gt as ROUTE_TRANSPARENT_ON,
  Rt as ROUTE_TURN_180D,
  Ct as ROUTE_TURN_90D_L,
  _t as ROUTE_TURN_90D_R,
  St as ROUTE_TURN_90D_R_L,
  Ot as ROUTE_TURN_AWAY,
  Et as ROUTE_TURN_DOWN,
  At as ROUTE_TURN_LEFT,
  yt as ROUTE_TURN_RANDOM,
  Tt as ROUTE_TURN_RIGHT,
  Nt as ROUTE_TURN_TOWARD,
  It as ROUTE_TURN_UP,
  lt as ROUTE_WAIT,
  kt as ROUTE_WALK_ANIME_OFF,
  Lt as ROUTE_WALK_ANIME_ON,
  Od as SAVE_BGM,
  ms as SCHEMA_DATA_WEAPON,
  ba as SCRIPT_EVAL,
  La as SCRIPT_EVAL_BODY,
  gd as SCROLL_MAP,
  Md as SELECT_ITEM,
  ud as SET_EVENT_LOCATION,
  bd as SET_MOVEMENT_ROUTE,
  Ld as SET_VEHICLE_LOCATION,
  kd as SET_WEATHER_EFFECT,
  Pd as SHAKE_SCREEN,
  ka as SHOP_PROCESSING,
  Pa as SHOP_PROCESSING_BODY,
  vd as SHOW_ANIMATION,
  Dd as SHOW_BALLOON_ICON,
  hd as SHOW_BATTLE_ANIMATION,
  fd as SHOW_CHOICES,
  Fd as SHOW_CHOICES_ITEM,
  Gd as SHOW_MESSAGE,
  Bd as SHOW_MESSAGE_BODY,
  Ud as SHOW_PICTURE,
  Ma as SHOW_SCROLLING_TEXT,
  ua as SHOW_SCROLLING_TEXT_BODY,
  Hd as SKIP,
  ps as SPECIAL_EFFECT_ESCAPE,
  xd as SPECIAL_PARAM_EXR,
  Vd as SPECIAL_PARAM_FDR,
  wd as SPECIAL_PARAM_GRD,
  Yd as SPECIAL_PARAM_MCR,
  Wd as SPECIAL_PARAM_MDR,
  qd as SPECIAL_PARAM_PDR,
  Xd as SPECIAL_PARAM_PHA,
  Kd as SPECIAL_PARAM_REC,
  zd as SPECIAL_PARAM_TCR,
  jd as SPECIAL_PARAM_TGR,
  Cs as SRC_DATA_ACTOR,
  Ms as SRC_DATA_ARMOR,
  us as SRC_DATA_CLASS,
  bs as SRC_DATA_COMMON_EVNET,
  Ss as SRC_DATA_ENEMY,
  Os as SRC_DATA_ITEMS,
  Rs as SRC_DATA_MAP,
  Ns as SRC_DATA_SKILL,
  ys as SRC_DATA_STATE,
  Ls as SRC_DATA_TROOP,
  gs as SRC_DATA_WEAPON,
  Qd as STOP_SE,
  Zd as TINT_PICTURE,
  Jd as TINT_SCREEN,
  $d as TRAIT_ACTION_PLUS,
  ap as TRAIT_ATTACK_ELEMENT,
  ep as TRAIT_ATTACK_SKILL,
  tp as TRAIT_ATTACK_SPEED,
  sp as TRAIT_ATTACK_STATE,
  rp as TRAIT_ATTACK_TIMES,
  mp as TRAIT_COLLAPSE_TYPE,
  op as TRAIT_DEBUFF_RATE,
  np as TRAIT_ELEMENT_RATE,
  ip as TRAIT_EQUIP_ARMOR_TYPE,
  dp as TRAIT_EQUIP_LOCK,
  pp as TRAIT_EQUIP_SEAL,
  cp as TRAIT_EQUIP_WEAPON_TYPE,
  lp as TRAIT_PARAM,
  Ep as TRAIT_PARTY_ABILITY,
  Ap as TRAIT_SKILL_ADD,
  Tp as TRAIT_SKILL_SEAL,
  Ip as TRAIT_SKILL_TYPE_ADD,
  _p as TRAIT_SKILL_TYPE_SEAL,
  Cp as TRAIT_SLOT_TYPE,
  Rp as TRAIT_SPARAM,
  Sp as TRAIT_SPECIAL_FLAG,
  yp as TRAIT_STATE_RATE,
  Np as TRAIT_STATE_RESIST,
  Op as TRAIT_XPARAM,
  gp as TRANSFER_PLAYER,
  Vm as TYPE_ARMOR,
  Hm as TYPE_ITEM,
  xm as TYPE_WEAPON,
  Ro as VEHICLE_AIRSHIP,
  _o as VEHICLE_BOAT,
  Co as VEHICLE_SHIP,
  Mp as WAIT,
  up as buildNoteFromNormalized,
  mm as cloneChoices,
  So as cloneEventCommand,
  Ie as cloneParameters,
  bp as collapsOptionsToArray,
  Kr as convertCommentArrayToObject,
  qe as createActorControlChars,
  f as createControlCharFormat,
  ye as createMenuCommandState,
  Lp as createNoteEntity,
  Xe as createSystemVariableControlChars,
  kp as defineGameDataSources,
  Pp as defineSystemItems,
  vp as defineTraitCollapseType,
  Dp as defineTraitExtraParam,
  hp as defineTraitItems,
  fp as defineTraitPartyAbility,
  Fp as defineTraitRegularParam,
  Gp as defineTraitSpecialFlag,
  Bp as defineTraitSpecialParam,
  Up as extraParamName,
  Hp as extraParamsToArray,
  Sn as extractFileName,
  cs as formatItemEffectText,
  ss as formatTraitText,
  Or as fromArrayChangeItems,
  kr as fromArrayChangeWeapons,
  Ir as fromArrayCommonEvent,
  _r as fromArrayControlSwitches,
  ir as fromArrayEnemyTransform,
  yr as fromArrayInputNumber,
  nm as fromArrayPlayMovie,
  dm as fromArrayPluginCommandMZ,
  Zr as fromArrayScrollingTextBody,
  jr as fromArrayScrollingTextHeader,
  xr as fromArraySelectItem,
  tm as fromArraySetupChoice,
  am as fromArraySetupChoiceItem,
  xp as fromArrayShowMessageHeader,
  Ye as fromStringArray,
  to as getActorValue,
  mn as getArmorCategoryEnabled,
  Vp as getArmorTypes,
  We as getControlChars,
  wp as getElementTypes,
  eo as getEnemyValue,
  ge as getEquipCommandEnabled,
  Yp as getEquipTypes,
  ue as getFormationCommandEnabled,
  sn as getItemCategoryEnabled,
  Ne as getItemCommandEnabled,
  Wp as getItemIdFromItemCommand,
  on as getKeyItemCategoryEnabled,
  qp as getNoteValue,
  ln as getParamNames,
  be as getSaveCommandEnabled,
  Oe as getSkillCommandEnabled,
  Xp as getSkillTypes,
  Me as getStatusCommandEnabled,
  Kp as getSwitches,
  zp as getVariableNames,
  rn as getWeaponCategoryEnabled,
  jp as getWeaponTypes,
  yo as isCloneableCommand,
  tr as isCommandBattleProcessingVariable,
  wm as isCommandOperandVariables,
  Qp as isUsingVariableItemCommand,
  Nr as isUsingVaribleCommandChangingItems,
  ks as labelsRegistry,
  jt as makeActorData,
  Zt as makeArmorData,
  Ws as makeAudioCommand,
  je as makeBattleEventPage,
  Pe as makeBooleanOptions,
  Jt as makeClassData,
  cr as makeCommandAddEachEnemyState,
  dr as makeCommandAddEnemyState,
  pm as makeCommandAddPartyMember,
  E as makeCommandAudioAny,
  sr as makeCommandBattleProcessingDirect,
  mr as makeCommandBattleProcessingEncount,
  rr as makeCommandBattleProcessingVariable,
  we as makeCommandChangeActorImages,
  Ps as makeCommandChangeActorName,
  vs as makeCommandChangeActorNickName,
  Ds as makeCommandChangeActorProfile,
  js as makeCommandChangeBattleBGM,
  Zs as makeCommandChangeDefeatME,
  gr as makeCommandChangeItems,
  Ao as makeCommandChangeVehicleBGM,
  Eo as makeCommandChangeVehicleImage,
  Qs as makeCommandChangeVictoryME,
  Pr as makeCommandChangeWeapons,
  $a as makeCommandCommentBody,
  Ja as makeCommandCommentHeader,
  Tr as makeCommandCommonEvent,
  Cr as makeCommandControlSwitches,
  or as makeCommandControlTimer,
  qr as makeCommandDisableFormationAccess,
  Vr as makeCommandDisableMenuAccess,
  Yr as makeCommandDisableSaveAccess,
  Xr as makeCommandEnableFormationAccess,
  wr as makeCommandEnableMenuAccess,
  Wr as makeCommandEnableSaveAccess,
  Ar as makeCommandEnemyRecoverAll,
  Er as makeCommandEnemyRecoverAllEach,
  nr as makeCommandEnemyTransform,
  Rm as makeCommandFadeInScreen,
  xs as makeCommandFadeOutBGM,
  Ys as makeCommandFadeOutBGS,
  Sm as makeCommandFadeOutScreen,
  ym as makeCommandFlashScreen,
  hs as makeCommandGainActorHP,
  Bs as makeCommandGainActorMP,
  Fs as makeCommandGainActorTP,
  Fr as makeCommandGainArmor,
  Gr as makeCommandGainArmorByVariable,
  lm as makeCommandGainGold,
  Am as makeCommandGainGoldByVariable,
  Mr as makeCommandGainItem,
  ur as makeCommandGainItemV,
  vr as makeCommandGainWeapon,
  Dr as makeCommandGainWeaponV,
  lo as makeCommandGetOnOffVehicle,
  Rr as makeCommandInputNumber,
  fs as makeCommandLoseActorHP,
  Us as makeCommandLoseActorMP,
  Gs as makeCommandLoseActorTP,
  Br as makeCommandLoseArmor,
  Ur as makeCommandLoseArmorByVariable,
  Em as makeCommandLoseGold,
  Tm as makeCommandLoseGoldByVariable,
  br as makeCommandLoseItem,
  Lr as makeCommandLoseItemV,
  hr as makeCommandLoseWeapon,
  fr as makeCommandLoseWeaponV,
  _m as makeCommandMovePicture,
  qs as makeCommandPlayBGM,
  Xs as makeCommandPlayBGS,
  Ks as makeCommandPlayME,
  om as makeCommandPlayMovie,
  zs as makeCommandPlaySE,
  im as makeCommandPluginCommandMZ,
  xe as makeCommandRecoverAll,
  Ve as makeCommandRecoverAllTarget,
  lr as makeCommandRemoveEachEnemyState,
  pr as makeCommandRemoveEnemyState,
  cm as makeCommandRemovePartyMember,
  ws as makeCommandResumeBGM,
  Vs as makeCommandSaveBGM,
  gm as makeCommandScriptArray,
  se as makeCommandScriptBody,
  te as makeCommandScriptHeader,
  Jr as makeCommandScrollingTextBody,
  Qr as makeCommandScrollingTextHeader,
  Hr as makeCommandSelectItem,
  To as makeCommandSetVehicleLocation,
  Io as makeCommandSetVehicleLocationFromVariables,
  Cm as makeCommandSetWeatherEffect,
  rm as makeCommandSetupChoice,
  Nm as makeCommandShakeScreen,
  bm as makeCommandShopProcessing,
  Hs as makeCommandShowAnimation,
  Js as makeCommandShowBalloonIcon,
  $r as makeCommandShowChoiceItem,
  Zp as makeCommandShowMessage,
  Jp as makeCommandShowMessageBody,
  Im as makeCommandShowPicture,
  Zm as makeCommandSystemBattleCount,
  $m as makeCommandSystemEscapeCount,
  Qm as makeCommandSystemSaveCount,
  jm as makeCommandSystemTimer,
  Jm as makeCommandSystemWinCount,
  Om as makeCommandTintScreen,
  so as makeCommandVariableFromActorStatusData,
  ro as makeCommandVariableFromArmor,
  mo as makeCommandVariableFromConstant,
  oo as makeCommandVariableFromEnemyData,
  no as makeCommandVariableFromItemData,
  Wm as makeCommandVariableFromMapId,
  Km as makeCommandVariableFromPartyGold,
  qm as makeCommandVariableFromPartyMembers,
  Xm as makeCommandVariableFromPartySteps,
  zm as makeCommandVariableFromPlaytime,
  io as makeCommandVariableFromRandom,
  po as makeCommandVariableFromScript,
  ao as makeCommandVariableFromTempLastData,
  Ym as makeCommandVariableFromVariable,
  co as makeCommandVariableFromWeapon,
  pa as makeCommentArray,
  zr as makeCommentCommandArray,
  Ke as makeCommonEventData,
  F as makeDamage,
  cn as makeDataNames,
  Wa as makeDropItem,
  De as makeEditorSetting,
  as as makeEnemyAction,
  es as makeEnemyData,
  Ua as makeEventPageCondition,
  pn as makeGameInitial,
  Le as makeItemCategories,
  nn as makeItemCategoriesFromArray,
  Ts as makeItemData,
  Xt as makeMapData,
  Yt as makeMapEvent,
  Ha as makeMapEventIamge,
  Wt as makeMapEventPage,
  qt as makeMapFileInfo,
  Kt as makeMapInfoData,
  ke as makeMenuCommandsEnabled,
  dn as makeMenuCommandsEnabledFromArray,
  Ya as makeParamArray,
  Da as makeParamNamesArray,
  $p as makeParamNamesFromArray,
  Is as makeSkillData,
  Re as makeSoundsArray,
  Se as makeSoundsObject,
  ts as makeStateData,
  Ce as makeSystemAdvanced,
  he as makeSystemData,
  _n as makeSystemDataFromMV,
  fa as makeTermsBasic,
  ac as makeTermsBasicFromArray,
  ha as makeTermsCommandArray,
  ec as makeTermsCommandArrayWithNulls,
  tc as makeTermsCommandFromArray,
  va as makeTermsMessages,
  ve as makeTitleCommandWindow,
  ze as makeTroopData,
  Ba as makeTroopEventConditions,
  Qe as makeTroopMember,
  D as makeVehicleData,
  rs as makeWeaponData,
  Qt as normalizeDataActor,
  sc as normalizeNote,
  $t as paramArrayToObject,
  rc as partyAbilityToArray,
  mc as readNote,
  oc as readNoteEx,
  nc as readNoteObject,
  ic as regularParamName,
  dc as regularParamsToArray,
  pc as replaceNote,
  cc as replaceNoteWithHandlers,
  zt as repleaceMapEventCommands,
  lc as resolveItemEffectLabels,
  Ec as resolveTraitLabels,
  Ac as setNoteValue,
  Tc as specialFlagToArray,
  Ic as specialParamName,
  _c as specialParamsToArray,
  Cn as textAndDesc,
  Qa as toArrayCommonEvent,
  Za as toArrayControlSwitches,
  Sr as toArrayInputNumber,
  ne as toArrayOperandActorStatus,
  ie as toArrayOperandArmorData,
  de as toArrayOperandConstant,
  ce as toArrayOperandEnemyStatus,
  le as toArrayOperandItemData,
  Ee as toArrayOperandRandom,
  Ae as toArrayOperandScript,
  re as toArrayOperandVariable,
  Te as toArrayOperandWeaponData,
  ee as toArrayScrollingTextBody,
  ae as toArrayScrollingTextHeader,
  sm as toArraySetupChoice,
  em as toArraySetupChoiceItem,
  Cc as toArrayShowMessageHeader
};
