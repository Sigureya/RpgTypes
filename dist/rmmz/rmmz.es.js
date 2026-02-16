import { aG as ca, aK as la, aL as Ea, ay as oa, az as na, aA as ia, af as Aa, aj as Ta, al as Ia, am as _a, G as Ca, H as Ra, Q as Sa, au as f, q as ya, v as Na, A as O, c_ as R, d0 as S, d1 as T, c$ as y, B as g, D as P, C as Oa, k as ga, h as Ma, j as La, a_ as ua, a$ as ba, av as Pa, aw as ka, w as n, cZ as Da, cS as va, cW as fa, cU as Fa } from "../shared/make.es2.js";
import { aU as yn, aI as Nn, aD as On, ar as gn, aH as Mn, M as Ln, aM as un, aN as bn, aO as Pn, aW as kn, aC as Dn, O as vn, z as fn, ap as Fn, K as hn, as as Gn, aE as Un, F as Bn, a1 as Hn, J as xn, aF as Vn, aq as wn, Z as Wn, R as Yn, aJ as Xn, P as qn, bw as Kn, bx as zn, by as jn, bv as Qn, n as Zn, o as Jn, x as $n, y as ai, cs as ei, ct as ti, cq as si, cz as ri, cp as mi, cx as oi, cy as ni, cn as ii, co as di, cu as pi, cv as ci, cr as li, cw as Ei, aQ as Ai, aP as Ti, aR as Ii, a0 as _i, ad as Ci, E as Ri, bC as Si, bF as yi, bB as Ni, bA as Oi, bz as gi, bG as Mi, bD as Li, bE as ui, bH as bi, bI as Pi, a4 as ki, ag as Di, ak as vi, a3 as fi, cg as Fi, ch as hi, cj as Gi, ci as Ui, a6 as Bi, aT as Hi, aY as xi, a2 as Vi, at as wi, Y as Wi, I as Yi, s as Xi, u as qi, L as Ki, p as zi, aa as ji, ax as Qi, N as Zi, aV as Ji, aX as $i, ca as ad, cd as ed, c8 as td, c9 as sd, cc as rd, cb as md, ao as od, b0 as nd, b1 as id, aB as dd, bS as pd, bO as cd, bP as ld, bT as Ed, bQ as Ad, bM as Td, bN as Id, bR as _d, ai as Cd, aZ as Rd, ab as Sd, ah as yd, W as Nd, e as Od, V as gd, X as Md, U as Ld, ae as ud, a7 as bd, _ as Pd, $ as kd, aS as Dd, c as vd, d as fd, S as Fd, b as hd, a9 as Gd, l as Ud, c4 as Bd, c3 as Hd, bY as xd, b$ as Vd, c2 as wd, c1 as Wd, b_ as Yd, bZ as Xd, c0 as qd, bX as Kd, an as zd, ac as jd, a5 as Qd, bp as Zd, bb as Jd, bf as $d, bd as ap, bc as ep, be as tp, br as sp, b5 as rp, b4 as mp, bl as op, bm as np, bn as ip, bk as dp, b8 as pp, bs as cp, bi as lp, bj as Ep, bg as Ap, bh as Tp, bo as Ip, ba as _p, bq as Cp, b6 as Rp, b7 as Sp, b9 as yp, T as Np, a8 as Op, cA as gp, bu as Mp, cF as Lp, b2 as up, cR as bp, bt as Pp, bJ as kp, b3 as Dp, ce as vp, bU as fp, ck as Fp, c5 as hp, bL as Gp, bK as Up, f as Bp, cP as Hp, cL as xp, cM as Vp, g as wp, cI as Wp, cN as Yp, cQ as Xp, cK as qp, cO as Kp, i as zp, m as jp, a as Qp, cT as Zp, cV as Jp, cX as $p, cY as ac, cB as ec, cf as tc, cC as sc, cD as rc, cE as mc, bW as oc, bV as nc, cG as ic, cH as dc, cm as pc, r as cc, cJ as lc, cl as Ec, c7 as Ac, c6 as Tc, t as Ic } from "../shared/make.es2.js";
import { c as ha, a as Ga, m as r } from "../shared/make.es.js";
const De = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), ve = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [1, a.targetSelectVariableId]
}), fe = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: m = "", battlerName: o = "" } = {}, i = 0) => ({
  code: 322,
  indent: i,
  parameters: [a, m, s, t, e, o]
}), F = (a, e) => `\\${a}[${e}]`, Fe = (a, e) => e.map((t, s) => ({ text: t, controlChar: F(a, s) })), he = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e) => ({
  char: e[1],
  id: parseInt(e[2], 10)
})), Ge = (a) => a.map((e) => ({ text: e.name, controlChar: F("N", e.id) })), Ue = (a) => a.variables.map((e, t) => ({
  text: e || "",
  controlChar: F("V", t)
})).filter((e) => e.text !== ""), Be = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", trigger: a.trigger ?? 0, list: a.list ?? [], switchId: a.switchId ?? 0 }), He = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  members: a.members ?? [],
  pages: a.pages ?? []
}), xe = (a) => ({ span: a.span ?? 0, conditions: Ua(a.conditions ?? {}), list: a.list ?? [] }), Ve = (a = {}) => ({
  enemyId: a.enemyId ?? 0,
  x: a.x ?? 0,
  y: a.y ?? 0,
  hidden: a.hidden ?? !1
}), Ua = (a = {}) => ({ actorHp: a.actorHp ?? 0, actorId: a.actorId ?? 0, enemyValid: a.enemyValid ?? 0, switchValid: a.switchValid ?? 0 }), Ba = (a = {}) => ({
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
}), we = 0, We = 1, Ye = 2, Xe = 3, qe = 4, Ke = 5, ze = 6, je = 7, Qe = 8, Ze = 9, Je = 10, $e = 11, at = 12, et = 13, tt = 14, st = 15, rt = 16, mt = 17, ot = 18, nt = 19, it = 20, dt = 21, pt = 22, ct = 23, lt = 24, Et = 25, At = 26, Tt = 27, It = 28, _t = 29, Ct = 30, Rt = 31, St = 32, yt = 33, Nt = 34, Ot = 35, gt = 36, Mt = 37, Lt = 38, ut = 39, bt = 40, Pt = 41, kt = 42, Dt = 43, vt = 44, ft = 45, Ft = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: m = 0, y: o = 0 } = {}) => ({
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
}), ht = ({ list: a = [], conditions: e = Ba(), image: t = Ha(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: o = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: i = 1, stepAnime: p = !1, through: c = !1, walkAnime: I = !1, moveSpeed: M = 3, moveType: L = 0, trigger: u = 0 } = {}) => ({
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
  moveType: L,
  trigger: u,
  moveRoute: { list: o.list, repeat: o.repeat, skippable: o.skippable, wait: o.wait }
}), Gt = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), Ut = (a = {}) => ({
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
}), Bt = (a = { id: 0 }) => {
  return { name: a.name ?? (e = a.id, e.toString().padStart(3, "0")), id: a.id, expanded: a.expanded ?? !1, order: a.order ?? 0, parentId: a.parentId ?? 0, scrollX: a.scrollX ?? 0, scrollY: a.scrollY ?? 0 };
  var e;
}, Ht = (a, e) => a.map((t) => t ? {
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
} }, wa = { title: "ダメージ", options: {} }, h = (a = {}) => ({
  type: a.type ?? 0,
  elementId: a.elementId ?? 0,
  formula: a.formula ?? "",
  variance: a.variance ?? 0,
  critical: a.critical ?? !1
}), xt = (a = {}) => ({
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
}), Vt = (a) => ({
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
}), wt = (a = {}) => ({
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
}), Wt = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: [],
  note: a.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), Wa = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: m = 0, mdf: o = 0, agi: i = 0, luk: p = 0 }) => [a, e, t, s, m, o, i, p], Yt = (a) => {
  const [e, t, s, m, o, i, p, c] = a;
  return { mhp: e, mmp: t, atk: s, def: m, mat: o, mdf: i, agi: p, luk: c };
}, Ya = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), Xt = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), qt = (a = {}) => {
  var e;
  return {
    name: a.name ?? "",
    id: a.id ?? 0,
    battlerName: a.battlerName ?? "",
    battlerHue: a.battlerHue ?? 0,
    dropItems: ((e = a.dropItems) == null ? void 0 : e.map(() => Ya())) ?? [],
    exp: a.exp ?? 0,
    gold: a.gold ?? 0,
    traits: [],
    note: a.note ?? "",
    params: a.params ? [...a.params] : Wa({
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
}, Kt = (a = {}) => ({
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
}), d = "{name}", _ = "{name} * {value}%", ta = "{name} + {value}%", sa = "{value}", Xa = { title: "特徴", options: {
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
} }, qa = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, zt = (a, e, t) => {
  const s = ha(qa);
  return Ga(e, t, s, a.pattern, (m) => m.dataId);
}, jt = (a = {}) => ({
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
  damage: h(a.damage ?? {}),
  wtypeId: a.wtypeId ?? 0
}), Qt = {
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
}, Zt = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Jt = 0, $t = 1, as = 2, ra = "{name} {value1}%", D = "{value1}% + {value2}", ma = "{name} {value1}ターン", N = "{name}", Ka = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: ma },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: ma },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: D },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: N },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: D
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: D },
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
} }, es = 0, ts = (a, e, t) => {
  const s = t.find((o) => o.id === e.dataId), m = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", m);
}, ss = { title: "アイテム", options: { consumable: "消耗品" } }, rs = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, ms = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, os = (a = {}) => ({
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
  damage: h(a.damage ?? {}),
  effects: [],
  price: 0
}), ns = (a = {}) => ({
  stypeId: a.stypeId ?? 0,
  requiredWtypeId1: a.requiredWtypeId1 ?? 0,
  requiredWtypeId2: a.requiredWtypeId2 ?? 0,
  animationId: a.animationId ?? 0,
  damage: h(a.damage ?? {}),
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
}), is = "data", ds = "actor", ps = "map", cs = "enemy", ls = "state", Es = "skill", As = "item", Ts = "weapon", Is = "armor", _s = "class", Cs = "common_event", Rs = "troop", za = {
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
}, Ss = () => ({ rpg: { damage: wa, data: Va, traits: Xa, itemEffect: Ka }, global: za }), ys = (a, e = 0) => ({ code: ca, parameters: [a.actorId, a.name], indent: e }), Ns = (a, e = 0) => ({
  code: la,
  parameters: [a.actorId, a.nickname],
  indent: e
}), Os = (a, e = 0) => ({ code: Ea, parameters: [a.actorId, a.profile], indent: e }), C = { direct: 0, variable: 1 }, gs = (a, e = 0) => ({
  code: oa,
  indent: e,
  parameters: da(0, a)
}), Ms = (a, e = 0) => ({ code: oa, indent: e, parameters: da(1, a) }), Ls = (a, e = 0) => ({ code: ia, indent: e, parameters: k(0, a) }), us = (a, e = 0) => ({
  code: ia,
  indent: e,
  parameters: k(1, a)
}), bs = (a, e = 0) => ({ code: na, indent: e, parameters: k(0, a) }), Ps = (a, e = 0) => ({
  code: na,
  indent: e,
  parameters: k(1, a)
}), k = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value], da = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value, e.allowDeath], ks = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), Ds = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), vs = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), fs = (a = 0) => ({ code: 244, indent: a, parameters: [] }), Fs = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), hs = (a, e) => E(a, r({ name: e })), E = (a, e, t = 0) => ({
  code: a,
  parameters: [r(e)],
  indent: t
}), Gs = (a, e = 0) => E(Aa, a, e), Us = (a, e = 0) => E(Ta, a, e), Bs = (a, e = 0) => E(Ia, a, e), Hs = (a, e = 0) => E(_a, a, e), xs = (a, e = 0) => E(Ca, a, e), Vs = (a, e = 0) => E(Ra, a, e), ws = (a, e = 0) => E(Sa, a, e), Ws = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), Ys = 0, Xs = 1, qs = 2, Ks = (a) => a.parameters[0] === 1, zs = ({ troopId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({
  code: f,
  indent: s,
  parameters: [0, a, e, t]
}), js = ({ variableId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({ code: f, indent: s, parameters: [1, a, e, t] }), Qs = ({ canEscape: a = !1, canLose: e = !1 }, t = 0) => ({
  code: f,
  indent: t,
  parameters: [2, 0, a, e]
}), ja = { plus: 0, minus: 1 }, Zs = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [ja[a ?? "plus"] ?? 0, e ?? 0] });
function Js(a, e = 0) {
  return {
    code: 336,
    parameters: [a.enemyId, a.newEnemyId],
    indent: e
  };
}
const $s = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), ar = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 0, a.stateId] }), er = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 1, a.stateId]
}), tr = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 0, a.stateId] }), sr = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [-1, 1, a.stateId]
}), rr = (a = 0) => ({ code: 334, indent: a, parameters: [0] }), mr = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), or = (a, e = 0) => ({ code: ya, indent: e, parameters: Qa(a ?? {}) }), nr = (a) => ({
  eventId: a[0]
}), Qa = (a) => [a.eventId ?? 0], ir = (a) => ({ min: a[0], max: a[1], value: a[2] }), Za = (a) => [a.min, a.max, a.value], dr = (a, e = 0) => ({ code: Na, indent: e, parameters: Za(a) }), pr = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), cr = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], lr = (a) => ({ variableId: a[0], maxDigits: a[1] }), Er = (a) => a.parameters[3] === T, Ar = (a) => ({
  operation: a[1],
  itemId: a[0],
  value: a[3],
  operand: a[2]
}), Tr = (a, e = 0) => ({ code: O, indent: e, parameters: [a.itemId, a.operation, a.operand, a.value] }), Ir = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.itemId, R, S, a.value]
}), _r = (a, e = 0) => ({ code: O, indent: e, parameters: [a.itemId, R, T, a.variableId] }), Cr = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.itemId, y, S, a.value]
}), Rr = (a, e = 0) => ({ code: O, indent: e, parameters: [a.itemId, y, T, a.variableId] }), Sr = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), yr = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), Nr = (a, e = 0) => ({ code: g, indent: e, parameters: [a.weaponId, R, S, a.value, !1] }), Or = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.weaponId, R, T, a.variableId, !1]
}), gr = (a, e = 0) => ({ code: g, indent: e, parameters: [a.weaponId, y, S, a.value, !1] }), Mr = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.weaponId, y, T, a.variableId, !1]
}), Lr = (a, e = 0) => ({ code: P, indent: e, parameters: [a.armorId, R, S, a.value, !1] }), ur = (a, e = 0) => ({
  code: P,
  indent: e,
  parameters: [a.armorId, R, T, a.variableId, !1]
}), br = (a, e = 0) => ({ code: P, indent: e, parameters: [a.armorId, y, S, a.value, !1] }), Pr = (a, e = 0) => ({
  code: P,
  indent: e,
  parameters: [a.armorId, y, T, a.variableId, !1]
}), kr = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), Dr = (a) => ({ variableId: a[0], itemType: a[1] }), vr = (a = 0) => ({
  code: 135,
  parameters: [1],
  indent: a
}), fr = (a = 0) => ({ code: 135, parameters: [0], indent: a }), Fr = (a = 0) => ({ code: 134, parameters: [1], indent: a }), hr = (a = 0) => ({ code: 134, parameters: [0], indent: a }), Gr = (a = 0) => ({
  code: 137,
  parameters: [1],
  indent: a
}), Ur = (a = 0) => ({ code: 137, parameters: [0], indent: a }), pa = (a) => [a], Br = (a) => ({ comment: a[0] }), Ja = (a, e = 0) => ({ code: Oa, indent: e, parameters: pa(a) }), $a = (a, e = 0) => ({
  code: ga,
  indent: e,
  parameters: pa(a)
}), Hr = (a, e = 0) => a.map((t, s) => s === 0 ? Ja(t, e) : $a(t, e)), ae = (a = {}) => [(a == null ? void 0 : a.speed) ?? 4, (a == null ? void 0 : a.skip) ?? !1], xr = (a) => ({ speed: a[0], skip: a[1] }), Vr = (a = {}, e = 0) => ({
  code: Ma,
  indent: e,
  parameters: ae(a)
}), ee = (a = "") => [a], wr = (a) => ({ content: a[0] }), Wr = (a = "", e = 0) => ({ code: La, indent: e ?? 0, parameters: ee(a) }), Yr = (a, e = 0) => ({
  code: 402,
  indent: e,
  parameters: [(a == null ? void 0 : a.index) ?? 0, (a == null ? void 0 : a.name) ?? ""]
}), Xr = (a) => ({ index: a[0], name: a[1] }), qr = (a) => [a.index ?? 0, a.name ?? ""], Kr = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), zr = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], jr = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [(a == null ? void 0 : a.choices) ?? [], (a == null ? void 0 : a.cancelType) ?? 0, (a == null ? void 0 : a.defaultType) ?? 0, (a == null ? void 0 : a.positionType) ?? 2, (a == null ? void 0 : a.background) ?? 0]
}), Qr = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Zr = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), Jr = (a) => ({
  filename: a[0]
}), $r = ({ args: a = {}, commandName: e, commandTitle: t = "", pluginName: s }, m = 0) => ({ code: 357, indent: m, parameters: [s, e, t, { ...a }] }), am = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), em = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), tm = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), sm = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), rm = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), mm = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), om = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), nm = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: m = 0, scaleX: o = 100, scaleY: i = 100, opacity: p = 255, blendMode: c = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, m, o, i, p, c]
}), im = ({ pictureId: a, origin: e, x: t, y: s, scaleX: m, scaleY: o, opacity: i, blendMode: p, wait: c = !1, easingType: I = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, t, s, m, o, i, p, c, I]
}), dm = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), pm = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), cm = (a = 0) => ({ code: 221, indent: a, parameters: [] }), lm = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), Em = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), Am = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), te = (a, e = 0) => ({ code: ua, indent: e, parameters: [a] }), se = (a, e = 0) => ({
  code: ba,
  indent: e,
  parameters: [a]
}), Tm = (a, e = 0) => a.map((t, s) => s === 0 ? te(t, e) : se(t, e)), Im = 1, _m = 0, b = { item: 0, weapon: 1, armors: 2 }, Cm = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map((s, m) => {
  const o = ((i) => i.customPrice !== void 0 && i.customPrice !== 0)(s) ? 1 : 0;
  return m === 0 ? { code: Pa, indent: t, parameters: [b[s.itemType] ?? b.item, s.id, o, s.customPrice ?? 0, e] } : {
    code: ka,
    indent: t,
    parameters: [b[s.itemType] ?? b.item, s.id, o, s.customPrice ?? 0]
  };
}), Rm = 0, Sm = 1, ym = 2, Nm = 3, Om = 4, gm = 5, Mm = 0, Lm = 1, um = 2, bm = 3, Pm = 4, km = 0, Dm = 1, vm = 2, fm = (a) => a.parameters[2] === 1, re = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 1, e.variableId], Fm = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: re(a, e, t.operation ?? 0)
}), hm = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 0] }), Gm = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 1]
}), Um = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 3] }), Bm = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 2]
}), Hm = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 4] }), xm = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 5]
}), Vm = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 6] }), wm = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 7]
}), Wm = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 8] }), Ym = (a, e = 0) => ({
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
}, Xm = (a, e, t = {}) => ({ code: n, indent: t.indent ?? 0, parameters: oe(a, e) }), oe = (a, e) => [a.startId, a.endId ?? a.startId, 0, 3, 8, me[e.param]], qm = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.hp;
    case 1:
      return a.mp;
    case 10:
      return a.tp;
  }
  return e[6] >= 2 && e[6] <= 9 ? a.param(e[6] - 2) : 0;
}, Km = (a, e) => {
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
}, ne = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], zm = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: ne(a, e, t.operation ?? 0)
}), ie = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], jm = (a, e) => ({
  code: n,
  indent: 0,
  parameters: ie(a, e, 0)
}), de = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], Qm = (a, e, t = {}) => ({ code: n, indent: t.indent ?? 0, parameters: de(a, e, t.operation ?? 0) }), pe = {
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
}, ce = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, pe[e.param]], Zm = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: ce(a, e, t.operation ?? 0)
}), Jm = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: le(a, e, t.operation ?? 0)
}), le = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], Ee = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], $m = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ee(a, e, t.operation ?? 0)
}), Ae = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 4, e.code], ao = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ae(a, e, t.operation ?? 0)
}), Te = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 1, e.weaponId], eo = (a, e) => ({ code: n, indent: 0, parameters: Te(a, e, 0) }), to = (a = 0) => ({ code: 206, indent: a, parameters: [] }), so = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), ro = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, r(a.bgm)] }), mo = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), oo = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), no = 0, io = 1, po = 2, Ie = (a) => [...a], co = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: Ie(a.parameters)
}), _e = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", lo = (a) => a.parameters.every(_e), Eo = "bgm", Ao = "se", To = "me", Io = "bgs", _o = "battlebacks1", Co = "battlebacks2", Ro = "characters", So = "enemies", yo = "faces", No = "parallaxes", Oo = "pictures", go = "sv_actors", Mo = "sv_enemies", Lo = "system", uo = "tilesets", bo = "titles1", Po = "titles2", ko = "System.json", Do = "Actors.json", vo = "Classes.json", fo = "Skills.json", Fo = "Items.json", ho = "Weapons.json", Go = "Armors.json", Uo = "Enemies.json", Bo = "Troops.json", Ho = "States.json", xo = "Animations.json", Vo = "Tilesets.json", wo = "CommonEvents.json", Wo = "MapInfos.json", Yo = "data", Xo = "img", qo = "audio", Ko = "js", Ce = (a = {}) => ({
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
}), Re = (a = {}) => [r(a.cursor), r(a.ok), r(a.cancel), r(a.buzzer), r(a.equip), r(a.save), r(a.load), r(a.battleStart), r(a.escape), r(a.enemyAttack), r(a.enemyDamage), r(a.enemyCollapse), r(a.bossCollapes1), r(a.bossCollapes2), r(a.actorDamage), r(a.actorCollapse), r(a.playRecovery), r(a.playMiss), r(a.playEvasion), r(a.playMagicEvasion), r(a.playReflection), r(a.shop), r(a.useItem), r(a.useSkill)], zo = (a) => ({
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
}), jo = (a) => a.menuCommands[0], Qo = (a) => a.menuCommands[1], Zo = (a) => a.menuCommands[2], Jo = (a) => a.menuCommands[3], $o = (a) => a.menuCommands[4], an = (a) => a.menuCommands[5], en = (a) => a.itemCategories[0], tn = (a) => a.itemCategories[1], sn = (a) => a.itemCategories[2], rn = (a) => a.itemCategories[3], Se = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], mn = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), ye = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], on = (a) => ({
  item: a[0],
  skill: a[1],
  equip: a[2],
  status: a[3],
  formation: a[4],
  save: a[5]
}), Ne = (a = {}) => ({
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
}), nn = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), dn = (a) => ({
  armorTypes: A(a.armorTypes),
  elements: A(a.elements),
  equipTypes: A(a.equipTypes),
  weaponTypes: A(a.weaponTypes),
  skillTypes: A(a.skillTypes),
  variables: A(a.variables),
  switches: A(a.switches)
}), A = (a) => a ? [...a] : [], pn = (a) => a.terms.params.map((e, t) => ({
  name: e,
  id: t
})), Oe = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), v = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: r(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), ge = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), cn = { title: "オプション", options: {
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
} }, ln = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, En = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, An = {
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
}, Tn = (a) => {
  var t, s, m, o, i, p, c, I, M, L, u, G, U, B, H, x, V, w, W, Y, X, q, K, z, j, Q, Z, J, $, aa, ea;
  const e = Le(a.size);
  return {
    ...Ne(a.options),
    titleCommandWindow: Oe(a.titleCommandWindow ?? {}),
    currencyUnit: ((t = a.texts) == null ? void 0 : t.currencyUnit) ?? "",
    gameTitle: ((s = a.texts) == null ? void 0 : s.gameTitle) ?? "",
    sounds: Re(a.sounds),
    editor: ge(a.editing),
    advanced: Ce(a.advanced),
    title1Name: ((m = a.images) == null ? void 0 : m.title1Name) ?? "",
    title2Name: ((o = a.images) == null ? void 0 : o.title2Name) ?? "",
    armorTypes: l((i = a.dataNames) == null ? void 0 : i.armorTypes),
    equipTypes: l((p = a.dataNames) == null ? void 0 : p.equipTypes),
    elements: l((c = a.dataNames) == null ? void 0 : c.elements),
    skillTypes: l((I = a.dataNames) == null ? void 0 : I.skillTypes),
    weaponTypes: l((M = a.dataNames) == null ? void 0 : M.weaponTypes),
    switches: l((L = a.dataNames) == null ? void 0 : L.switches),
    variables: l((u = a.dataNames) == null ? void 0 : u.variables),
    magicSkills: l((G = a.battle) == null ? void 0 : G.magicSkills),
    battleSystem: ((U = a.battle) == null ? void 0 : U.battleSystem) ?? 0,
    airship: v((B = a.vehicles) == null ? void 0 : B.airship),
    boat: v((H = a.vehicles) == null ? void 0 : H.boat),
    ship: v((x = a.vehicles) == null ? void 0 : x.ship),
    defeatMe: r((V = a.me) == null ? void 0 : V.defeatMe),
    gameoverMe: r((w = a.me) == null ? void 0 : w.gameoverMe),
    titleBgm: r((W = a.bgm) == null ? void 0 : W.titleBgm),
    tileSize: e.tileSize,
    faceSize: e.faceSize,
    iconSize: e.iconSize,
    versionId: 1,
    attackMotions: a.attackMotion ? [...a.attackMotion] : [],
    battleback1Name: ((Y = a.battleTest) == null ? void 0 : Y.battleback1Name) ?? "",
    battleback2Name: ((X = a.battleTest) == null ? void 0 : X.battleback2Name) ?? "",
    testTroopId: ((q = a.battleTest) == null ? void 0 : q.testTroopId) ?? 0,
    testBattlers: ue((K = a.battleTest) == null ? void 0 : K.testBattlers, be),
    battleBgm: r((z = a.bgm) == null ? void 0 : z.battleBgm),
    victoryMe: r((j = a.me) == null ? void 0 : j.victoryMe),
    editMapId: ((Q = a.editorTemporary) == null ? void 0 : Q.editMapId) ?? 0,
    battlerName: ((Z = a.editorTemporary) == null ? void 0 : Z.battlerName) ?? "",
    locale: a.locale ?? "en-US",
    startMapId: ((J = a.gameInit) == null ? void 0 : J.startMapId) ?? 0,
    startX: (($ = a.gameInit) == null ? void 0 : $.startX) ?? 0,
    startY: ((aa = a.gameInit) == null ? void 0 : aa.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Me(a.terms ?? {}),
    itemCategories: Se(a.itemCategories),
    partyMembers: l((ea = a.gameInit) == null ? void 0 : ea.partyMembers),
    battlerHue: 0,
    menuCommands: ye(a.menuComamnds)
  };
}, Me = (a) => ({
  basic: Fa(a.basic ?? {}),
  commands: fa(a.commands ?? {}),
  params: va(a.params ?? {}),
  messages: Da(a.messages ?? {})
}), l = (a) => a ? [...a] : [], Le = (a) => a ? { tileSize: a.tileSize ?? 48, faceSize: a.faceSize ?? 144, iconSize: a.iconSize ?? 32 } : {
  tileSize: 48,
  faceSize: 144,
  iconSize: 32
}, ue = (a, e) => a ? a.map(e) : [], be = (a) => a ? { actorId: a.actorId, equips: l(a.equips), level: a.level } : { actorId: 0, equips: [], level: 1 }, In = (a) => ({
  ...a.text ? { text: a.text } : {},
  ...a.desc ? { desc: a.desc } : {}
}), _n = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, Cn = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  yn as ABORT_BATTLE,
  Ys as BATTLE_DIRECT,
  qs as BATTLE_ENCOUNT,
  f as BATTLE_PROCESSING,
  Xs as BATTLE_VARIABLE,
  Nn as CHANGE_ACTOR_IMAGES,
  On as CHANGE_ACTOR_STATE,
  P as CHANGE_ARMORS,
  gn as CHANGE_BATTLE_BACKGROUND,
  Ca as CHANGE_BATTLE_BGM,
  Mn as CHANGE_CLASS,
  Sa as CHANGE_DEFEAT_ME,
  Ln as CHANGE_ENCOUNTER,
  un as CHANGE_ENEMY_HP,
  bn as CHANGE_ENEMY_MP,
  Pn as CHANGE_ENEMY_STATE,
  kn as CHANGE_ENEMY_TP,
  Dn as CHANGE_EXP,
  vn as CHANGE_FORMATION_ACCESS,
  fn as CHANGE_GOLD,
  oa as CHANGE_HP,
  O as CHANGE_ITEMS,
  Fn as CHANGE_MAP_NAME_DISPLAY,
  hn as CHANGE_MENU_ACCESS,
  na as CHANGE_MP,
  ca as CHANGE_NAME,
  la as CHANGE_NICKNAME,
  Gn as CHANGE_PARALLAX,
  Un as CHANGE_PARAMETER,
  Bn as CHANGE_PARTY_MEMBER,
  Hn as CHANGE_PLAYER_FOLLOWERS,
  Ea as CHANGE_PROFILE,
  xn as CHANGE_SAVE_ACCESS,
  Vn as CHANGE_SKILL,
  wn as CHANGE_TILESET,
  ia as CHANGE_TP,
  Wn as CHANGE_TRANSPARENCY,
  Yn as CHANGE_VEHICLE_BGM,
  Xn as CHANGE_VEHICLE_IMAGE,
  Ra as CHANGE_VICTORY_ME,
  g as CHANGE_WEAPONS,
  qn as CHANGE_WINDOW_COLOR,
  Kn as COLLAPS_BOSS,
  zn as COLLAPS_INSTANT,
  jn as COLLAPS_NONE,
  Qn as COLLAPS_NORMAL,
  ga as COMMENT_BODY,
  Oa as COMMENT_HEAD,
  ya as COMMON_EVENT,
  Zn as CONDITIONAL_BRANCH,
  Jn as CONDITIONAL_BRANCH_ELSE,
  $n as CONTROL_SELF_SWITCH,
  Na as CONTROL_SWITCHES,
  ai as CONTROL_TIMER,
  n as CONTROL_VARIABLES,
  Im as CUSTOM_PRICE,
  wa as DEFAULT_DAMAGE_LABELS,
  za as DEFAULT_GLOBAL_LABELS,
  ss as DEFAULT_ITEM_LABELS,
  rs as DEFAULT_SKILL_LABELS,
  cn as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  ln as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  ms as DEFAULT_USABLE_ITEM_LABELS,
  _n as DIRECTION,
  ei as EFFECT_ADD_BUFF,
  ti as EFFECT_ADD_DEBUFF,
  si as EFFECT_ADD_STATE,
  ri as EFFECT_COMMON_EVENT,
  mi as EFFECT_GAIN_TP,
  oi as EFFECT_GROW,
  ni as EFFECT_LEARN_SKILL,
  ii as EFFECT_RECOVER_HP,
  di as EFFECT_RECOVER_MP,
  pi as EFFECT_REMOVE_BUFF,
  ci as EFFECT_REMOVE_DEBUFF,
  li as EFFECT_REMOVE_STATE,
  Ei as EFFECT_SPECIAL,
  Ai as ENEMY_APPEAR,
  Ti as ENEMY_RECOVER_ALL,
  Ii as ENEMY_TRANSFORM,
  _i as ERASE_EVENT,
  Ci as ERASE_PICTURE,
  Ri as EXIT_EVENT_PROCESSING,
  Si as EXTRA_PARAM_CEV,
  yi as EXTRA_PARAM_CNT,
  Ni as EXTRA_PARAM_CRI,
  Oi as EXTRA_PARAM_EVA,
  gi as EXTRA_PARAM_HIT,
  Mi as EXTRA_PARAM_HRG,
  Li as EXTRA_PARAM_MEV,
  ui as EXTRA_PARAM_MRF,
  bi as EXTRA_PARAM_MRG,
  Pi as EXTRA_PARAM_TRG,
  ki as FADEIN_SCREEN,
  Di as FADEOUT_BGM,
  vi as FADEOUT_BGS,
  fi as FADEOUT_SCREEN,
  Do as FILENAME_ACTORS,
  xo as FILENAME_ANIMATIONS,
  Go as FILENAME_ARMORS,
  vo as FILENAME_CLASSES,
  wo as FILENAME_COMMON_EVENTS,
  Uo as FILENAME_ENEMIES,
  Fo as FILENAME_ITEMS,
  Wo as FILENAME_MAP_INFOS,
  fo as FILENAME_SKILLS,
  Ho as FILENAME_STATES,
  ko as FILENAME_SYSTEM,
  Vo as FILENAME_TILESET,
  Bo as FILENAME_TROOPS,
  ho as FILENAME_WEAPONS,
  Fi as FLAG_ID_AUTO_BATTLE,
  hi as FLAG_ID_GUARD,
  Gi as FLAG_ID_PRESERVE_TP,
  Ui as FLAG_ID_SUBSTITUTE,
  Bi as FLASH_SCREEN,
  qo as FOLDER_AUDIO,
  Eo as FOLDER_AUDIO_BGM,
  Io as FOLDER_AUDIO_BGS,
  To as FOLDER_AUDIO_ME,
  Ao as FOLDER_AUDIO_SE,
  Yo as FOLDER_DATA,
  Xo as FOLDER_IMG,
  _o as FOLDER_IMG_BATTLEBACK1,
  Co as FOLDER_IMG_BATTLEBACK2,
  Ro as FOLDER_IMG_CHACTERS,
  So as FOLDER_IMG_ENEMIES,
  yo as FOLDER_IMG_FACES,
  No as FOLDER_IMG_PARALLACES,
  Oo as FOLDER_IMG_PICTURES,
  go as FOLDER_IMG_SV_ACTORS,
  Mo as FOLDER_IMG_SV_ENEMIES,
  Lo as FOLDER_IMG_SYSTEM,
  uo as FOLDER_IMG_TILESETS,
  bo as FOLDER_IMG_TITLES1,
  Po as FOLDER_IMG_TITLES2,
  Ko as FOLDER_JS,
  Hi as FORCE_ACTION,
  xi as GAME_OVER,
  Vi as GATHER_FOLLOWERS,
  wi as GET_LOCATION_INFO,
  Wi as GET_ONOFF_VEHICLE,
  Jt as HITTYPE_CERTAIN,
  as as HITTYPE_MAGICAL,
  $t as HITTYPE_PHYSICAL,
  Yi as INPUT_NUMBER,
  Xi as LABEL,
  Zt as LABELS_DATA_WEAPON,
  En as LABELS_SYSTEM_BATTLER_PARAMS,
  An as LABELS_SYSTEM_GAME_COMMANDS,
  qi as LABEL_JUMP,
  Va as LABEL_SET_DATA,
  Ka as LABEL_SET_ITEM_EFFECT,
  Xa as LABEL_SET_TRAIT,
  Ki as LOOP,
  zi as LOOP_BREAK,
  is as MODULE_DATA,
  ji as MOVE_PICTURE,
  Qi as NAME_INPUT_PROCESSING,
  _m as NORMAL_PRICE,
  Zi as NO_OPERATION,
  Ji as OPEN_MENU_SCREEN,
  $i as OPEN_SAVE_SCREEN,
  Mm as OPERAND_CONSTANT,
  bm as OPERAND_GAMEDATA,
  um as OPERAND_RANDOM,
  Pm as OPERAND_SCRIPT,
  Lm as OPERAND_VARIABLE,
  Sm as OPERATION_ADD,
  Om as OPERATION_DIVIDE,
  gm as OPERATION_MOD,
  Nm as OPERATION_MULTIPLY,
  Rm as OPERATION_SET,
  ym as OPERATION_SUBTRACT,
  ad as PARTY_ABILITY_CANCEL_SURPRISE,
  ed as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  td as PARTY_ABILITY_ENCOUNTER_HALF,
  sd as PARTY_ABILITY_ENCOUNTER_NONE,
  rd as PARTY_ABILITY_GOLD_DOUBLE,
  md as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Aa as PLAY_BGM,
  Ta as PLAY_BGS,
  Ia as PLAY_ME,
  od as PLAY_MOVIE,
  _a as PLAY_SE,
  nd as PLUGIN_COMMAND_MV,
  id as PLUGIN_COMMAND_MZ,
  dd as RECOVER_ALL,
  pd as REGULAR_PARAM_AGI,
  cd as REGULAR_PARAM_ATK,
  ld as REGULAR_PARAM_DEF,
  Ed as REGULAR_PARAM_LUK,
  Ad as REGULAR_PARAM_MATK,
  Td as REGULAR_PARAM_MAX_HP,
  Id as REGULAR_PARAM_MAX_MP,
  _d as REGULAR_PARAM_MDEF,
  Cd as RESUME_BGM,
  Rd as RETURN_TO_TITLE_SCREEN,
  Sd as ROTATE_PICTURE,
  Dt as ROUTE_CHANGE_BLEND_MODE,
  Ct as ROUTE_CHANGE_FREQ,
  Pt as ROUTE_CHANGE_IMAGE,
  kt as ROUTE_CHANGE_OPACITY,
  _t as ROUTE_CHANGE_SPEED,
  gt as ROUTE_DIR_FIX_OFF,
  Ot as ROUTE_DIR_FIX_ON,
  we as ROUTE_END,
  tt as ROUTE_JUMP,
  $e as ROUTE_MOVE_AWAY,
  et as ROUTE_MOVE_BACKWARD,
  We as ROUTE_MOVE_DOWN,
  at as ROUTE_MOVE_FORWARD,
  Ye as ROUTE_MOVE_LEFT,
  Ke as ROUTE_MOVE_LOWER_L,
  ze as ROUTE_MOVE_LOWER_R,
  Ze as ROUTE_MOVE_RANDOM,
  Xe as ROUTE_MOVE_RIGHT,
  Je as ROUTE_MOVE_TOWARD,
  qe as ROUTE_MOVE_UP,
  je as ROUTE_MOVE_UPPER_L,
  Qe as ROUTE_MOVE_UPPER_R,
  vt as ROUTE_PLAY_SE,
  ft as ROUTE_SCRIPT,
  Nt as ROUTE_STEP_ANIME_OFF,
  yt as ROUTE_STEP_ANIME_ON,
  It as ROUTE_SWITCH_OFF,
  Tt as ROUTE_SWITCH_ON,
  Lt as ROUTE_THROUGH_OFF,
  Mt as ROUTE_THROUGH_ON,
  bt as ROUTE_TRANSPARENT_OFF,
  ut as ROUTE_TRANSPARENT_ON,
  pt as ROUTE_TURN_180D,
  dt as ROUTE_TURN_90D_L,
  it as ROUTE_TURN_90D_R,
  ct as ROUTE_TURN_90D_R_L,
  At as ROUTE_TURN_AWAY,
  rt as ROUTE_TURN_DOWN,
  mt as ROUTE_TURN_LEFT,
  lt as ROUTE_TURN_RANDOM,
  ot as ROUTE_TURN_RIGHT,
  Et as ROUTE_TURN_TOWARD,
  nt as ROUTE_TURN_UP,
  st as ROUTE_WAIT,
  St as ROUTE_WALK_ANIME_OFF,
  Rt as ROUTE_WALK_ANIME_ON,
  yd as SAVE_BGM,
  Qt as SCHEMA_DATA_WEAPON,
  ua as SCRIPT_EVAL,
  ba as SCRIPT_EVAL_BODY,
  Nd as SCROLL_MAP,
  Od as SELECT_ITEM,
  gd as SET_EVENT_LOCATION,
  Md as SET_MOVEMENT_ROUTE,
  Ld as SET_VEHICLE_LOCATION,
  ud as SET_WEATHER_EFFECT,
  bd as SHAKE_SCREEN,
  Pa as SHOP_PROCESSING,
  ka as SHOP_PROCESSING_BODY,
  Pd as SHOW_ANIMATION,
  kd as SHOW_BALLOON_ICON,
  Dd as SHOW_BATTLE_ANIMATION,
  vd as SHOW_CHOICES,
  fd as SHOW_CHOICES_ITEM,
  Fd as SHOW_MESSAGE,
  hd as SHOW_MESSAGE_BODY,
  Gd as SHOW_PICTURE,
  Ma as SHOW_SCROLLING_TEXT,
  La as SHOW_SCROLLING_TEXT_BODY,
  Ud as SKIP,
  es as SPECIAL_EFFECT_ESCAPE,
  Bd as SPECIAL_PARAM_EXR,
  Hd as SPECIAL_PARAM_FDR,
  xd as SPECIAL_PARAM_GRD,
  Vd as SPECIAL_PARAM_MCR,
  wd as SPECIAL_PARAM_MDR,
  Wd as SPECIAL_PARAM_PDR,
  Yd as SPECIAL_PARAM_PHA,
  Xd as SPECIAL_PARAM_REC,
  qd as SPECIAL_PARAM_TCR,
  Kd as SPECIAL_PARAM_TGR,
  ds as SRC_DATA_ACTOR,
  Is as SRC_DATA_ARMOR,
  _s as SRC_DATA_CLASS,
  Cs as SRC_DATA_COMMON_EVNET,
  cs as SRC_DATA_ENEMY,
  As as SRC_DATA_ITEMS,
  ps as SRC_DATA_MAP,
  Es as SRC_DATA_SKILL,
  ls as SRC_DATA_STATE,
  Rs as SRC_DATA_TROOP,
  Ts as SRC_DATA_WEAPON,
  zd as STOP_SE,
  jd as TINT_PICTURE,
  Qd as TINT_SCREEN,
  Zd as TRAIT_ACTION_PLUS,
  Jd as TRAIT_ATTACK_ELEMENT,
  $d as TRAIT_ATTACK_SKILL,
  ap as TRAIT_ATTACK_SPEED,
  ep as TRAIT_ATTACK_STATE,
  tp as TRAIT_ATTACK_TIMES,
  sp as TRAIT_COLLAPSE_TYPE,
  rp as TRAIT_DEBUFF_RATE,
  mp as TRAIT_ELEMENT_RATE,
  op as TRAIT_EQUIP_ARMOR_TYPE,
  np as TRAIT_EQUIP_LOCK,
  ip as TRAIT_EQUIP_SEAL,
  dp as TRAIT_EQUIP_WEAPON_TYPE,
  pp as TRAIT_PARAM,
  cp as TRAIT_PARTY_ABILITY,
  lp as TRAIT_SKILL_ADD,
  Ep as TRAIT_SKILL_SEAL,
  Ap as TRAIT_SKILL_TYPE_ADD,
  Tp as TRAIT_SKILL_TYPE_SEAL,
  Ip as TRAIT_SLOT_TYPE,
  _p as TRAIT_SPARAM,
  Cp as TRAIT_SPECIAL_FLAG,
  Rp as TRAIT_STATE_RATE,
  Sp as TRAIT_STATE_RESIST,
  yp as TRAIT_XPARAM,
  Np as TRANSFER_PLAYER,
  vm as TYPE_ARMOR,
  km as TYPE_ITEM,
  Dm as TYPE_WEAPON,
  po as VEHICLE_AIRSHIP,
  no as VEHICLE_BOAT,
  io as VEHICLE_SHIP,
  Op as WAIT,
  gp as buildNoteFromNormalized,
  Qr as cloneChoices,
  co as cloneEventCommand,
  Ie as cloneParameters,
  Mp as collapsOptionsToArray,
  Br as convertCommentArrayToObject,
  Ge as createActorControlChars,
  F as createControlCharFormat,
  Lp as createNoteEntity,
  Ue as createSystemVariableControlChars,
  up as defineGameDataSources,
  bp as defineSystemItems,
  Pp as defineTraitCollapseType,
  kp as defineTraitExtraParam,
  Dp as defineTraitItems,
  vp as defineTraitPartyAbility,
  fp as defineTraitRegularParam,
  Fp as defineTraitSpecialFlag,
  hp as defineTraitSpecialParam,
  Gp as extraParamName,
  Up as extraParamsToArray,
  Cn as extractFileName,
  ts as formatItemEffectText,
  zt as formatTraitText,
  Ar as fromArrayChangeItems,
  Sr as fromArrayChangeWeapons,
  nr as fromArrayCommonEvent,
  ir as fromArrayControlSwitches,
  $s as fromArrayEnemyTransform,
  lr as fromArrayInputNumber,
  Jr as fromArrayPlayMovie,
  am as fromArrayPluginCommandMZ,
  wr as fromArrayScrollingTextBody,
  xr as fromArrayScrollingTextHeader,
  Dr as fromArraySelectItem,
  Kr as fromArraySetupChoice,
  Xr as fromArraySetupChoiceItem,
  Bp as fromArrayShowMessageHeader,
  Fe as fromStringArray,
  Km as getActorValue,
  sn as getArmorCategoryEnabled,
  Hp as getArmorTypes,
  he as getControlChars,
  xp as getElementTypes,
  qm as getEnemyValue,
  Zo as getEquipCommandEnabled,
  Vp as getEquipTypes,
  $o as getFormationCommandEnabled,
  en as getItemCategoryEnabled,
  jo as getItemCommandEnabled,
  wp as getItemIdFromItemCommand,
  rn as getKeyItemCategoryEnabled,
  Wp as getNoteValue,
  pn as getParamNames,
  an as getSaveCommandEnabled,
  Qo as getSkillCommandEnabled,
  Yp as getSkillTypes,
  Jo as getStatusCommandEnabled,
  Xp as getSwitches,
  qp as getVariableNames,
  tn as getWeaponCategoryEnabled,
  Kp as getWeaponTypes,
  lo as isCloneableCommand,
  Ks as isCommandBattleProcessingVariable,
  fm as isCommandOperandVariables,
  zp as isUsingVariableItemCommand,
  Er as isUsingVaribleCommandChangingItems,
  Ss as labelsRegistry,
  xt as makeActorData,
  wt as makeArmorData,
  hs as makeAudioCommand,
  xe as makeBattleEventPage,
  Ne as makeBooleanOptions,
  Wt as makeClassData,
  tr as makeCommandAddEachEnemyState,
  ar as makeCommandAddEnemyState,
  em as makeCommandAddPartyMember,
  E as makeCommandAudioAny,
  zs as makeCommandBattleProcessingDirect,
  Qs as makeCommandBattleProcessingEncount,
  js as makeCommandBattleProcessingVariable,
  fe as makeCommandChangeActorImages,
  ys as makeCommandChangeActorName,
  Ns as makeCommandChangeActorNickName,
  Os as makeCommandChangeActorProfile,
  xs as makeCommandChangeBattleBGM,
  ws as makeCommandChangeDefeatME,
  Tr as makeCommandChangeItems,
  ro as makeCommandChangeVehicleBGM,
  so as makeCommandChangeVehicleImage,
  Vs as makeCommandChangeVictoryME,
  yr as makeCommandChangeWeapons,
  $a as makeCommandCommentBody,
  Ja as makeCommandCommentHeader,
  or as makeCommandCommonEvent,
  dr as makeCommandControlSwitches,
  Zs as makeCommandControlTimer,
  Gr as makeCommandDisableFormationAccess,
  vr as makeCommandDisableMenuAccess,
  Fr as makeCommandDisableSaveAccess,
  Ur as makeCommandEnableFormationAccess,
  fr as makeCommandEnableMenuAccess,
  hr as makeCommandEnableSaveAccess,
  mr as makeCommandEnemyRecoverAll,
  rr as makeCommandEnemyRecoverAllEach,
  Js as makeCommandEnemyTransform,
  pm as makeCommandFadeInScreen,
  Ds as makeCommandFadeOutBGM,
  Fs as makeCommandFadeOutBGS,
  cm as makeCommandFadeOutScreen,
  lm as makeCommandFlashScreen,
  gs as makeCommandGainActorHP,
  bs as makeCommandGainActorMP,
  Ls as makeCommandGainActorTP,
  Lr as makeCommandGainArmor,
  ur as makeCommandGainArmorByVariable,
  sm as makeCommandGainGold,
  mm as makeCommandGainGoldByVariable,
  Ir as makeCommandGainItem,
  _r as makeCommandGainItemV,
  Nr as makeCommandGainWeapon,
  Or as makeCommandGainWeaponV,
  to as makeCommandGetOnOffVehicle,
  pr as makeCommandInputNumber,
  Ms as makeCommandLoseActorHP,
  Ps as makeCommandLoseActorMP,
  us as makeCommandLoseActorTP,
  br as makeCommandLoseArmor,
  Pr as makeCommandLoseArmorByVariable,
  rm as makeCommandLoseGold,
  om as makeCommandLoseGoldByVariable,
  Cr as makeCommandLoseItem,
  Rr as makeCommandLoseItemV,
  gr as makeCommandLoseWeapon,
  Mr as makeCommandLoseWeaponV,
  im as makeCommandMovePicture,
  Gs as makeCommandPlayBGM,
  Us as makeCommandPlayBGS,
  Bs as makeCommandPlayME,
  Zr as makeCommandPlayMovie,
  Hs as makeCommandPlaySE,
  $r as makeCommandPluginCommandMZ,
  De as makeCommandRecoverAll,
  ve as makeCommandRecoverAllTarget,
  sr as makeCommandRemoveEachEnemyState,
  er as makeCommandRemoveEnemyState,
  tm as makeCommandRemovePartyMember,
  fs as makeCommandResumeBGM,
  vs as makeCommandSaveBGM,
  Tm as makeCommandScriptArray,
  se as makeCommandScriptBody,
  te as makeCommandScriptHeader,
  Wr as makeCommandScrollingTextBody,
  Vr as makeCommandScrollingTextHeader,
  kr as makeCommandSelectItem,
  mo as makeCommandSetVehicleLocation,
  oo as makeCommandSetVehicleLocationFromVariables,
  dm as makeCommandSetWeatherEffect,
  jr as makeCommandSetupChoice,
  Em as makeCommandShakeScreen,
  Cm as makeCommandShopProcessing,
  ks as makeCommandShowAnimation,
  Ws as makeCommandShowBalloonIcon,
  Yr as makeCommandShowChoiceItem,
  jp as makeCommandShowMessage,
  Qp as makeCommandShowMessageBody,
  nm as makeCommandShowPicture,
  wm as makeCommandSystemBattleCount,
  Ym as makeCommandSystemEscapeCount,
  Vm as makeCommandSystemSaveCount,
  xm as makeCommandSystemTimer,
  Wm as makeCommandSystemWinCount,
  Am as makeCommandTintScreen,
  zm as makeCommandVariableFromActorStatusData,
  jm as makeCommandVariableFromArmor,
  Qm as makeCommandVariableFromConstant,
  Zm as makeCommandVariableFromEnemyData,
  Jm as makeCommandVariableFromItemData,
  hm as makeCommandVariableFromMapId,
  Bm as makeCommandVariableFromPartyGold,
  Gm as makeCommandVariableFromPartyMembers,
  Um as makeCommandVariableFromPartySteps,
  Hm as makeCommandVariableFromPlaytime,
  $m as makeCommandVariableFromRandom,
  ao as makeCommandVariableFromScript,
  Xm as makeCommandVariableFromTempLastData,
  Fm as makeCommandVariableFromVariable,
  eo as makeCommandVariableFromWeapon,
  pa as makeCommentArray,
  Hr as makeCommentCommandArray,
  Be as makeCommonEventData,
  h as makeDamage,
  dn as makeDataNames,
  Ya as makeDropItem,
  ge as makeEditorSetting,
  Xt as makeEnemyAction,
  qt as makeEnemyData,
  Ba as makeEventPageCondition,
  nn as makeGameInitial,
  Se as makeItemCategories,
  mn as makeItemCategoriesFromArray,
  os as makeItemData,
  Ut as makeMapData,
  Ft as makeMapEvent,
  Ha as makeMapEventIamge,
  ht as makeMapEventPage,
  Gt as makeMapFileInfo,
  Bt as makeMapInfoData,
  ye as makeMenuCommandsEnabled,
  on as makeMenuCommandsEnabledFromArray,
  Wa as makeParamArray,
  va as makeParamNamesArray,
  Zp as makeParamNamesFromArray,
  ns as makeSkillData,
  Re as makeSoundsArray,
  zo as makeSoundsObject,
  Kt as makeStateData,
  Ce as makeSystemAdvanced,
  Tn as makeSystemData,
  Fa as makeTermsBasic,
  Jp as makeTermsBasicFromArray,
  fa as makeTermsCommandArray,
  $p as makeTermsCommandArrayWithNulls,
  ac as makeTermsCommandFromArray,
  Da as makeTermsMessages,
  Oe as makeTitleCommandWindow,
  He as makeTroopData,
  Ua as makeTroopEventConditions,
  Ve as makeTroopMember,
  v as makeVehicleData,
  jt as makeWeaponData,
  Vt as normalizeDataActor,
  ec as normalizeNote,
  Yt as paramArrayToObject,
  tc as partyAbilityToArray,
  sc as readNote,
  rc as readNoteEx,
  mc as readNoteObject,
  oc as regularParamName,
  nc as regularParamsToArray,
  ic as replaceNote,
  dc as replaceNoteWithHandlers,
  Ht as repleaceMapEventCommands,
  pc as resolveItemEffectLabels,
  cc as resolveTraitLabels,
  lc as setNoteValue,
  Ec as specialFlagToArray,
  Ac as specialParamName,
  Tc as specialParamsToArray,
  In as textAndDesc,
  Qa as toArrayCommonEvent,
  Za as toArrayControlSwitches,
  cr as toArrayInputNumber,
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
  zr as toArraySetupChoice,
  qr as toArraySetupChoiceItem,
  Ic as toArrayShowMessageHeader
};
