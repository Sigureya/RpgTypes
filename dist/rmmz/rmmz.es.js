import { aH as la, aL as Ea, aM as Ta, ay as oa, az as na, aA as ia, af as Aa, aj as Ia, al as _a, am as Ca, G as Ra, H as Sa, Q as ya, au as h, q as Na, v as ga, A as g, d0 as R, d2 as S, d3 as A, d1 as y, B as M, D as L, C as Ma, k as ba, h as Oa, j as ua, a$ as ka, b0 as La, av as Pa, aw as va, w as n, cW as Da, c$ as ha, cY as fa, cT as Fa, cU as Ga, cV as Ba, cZ as Ua, cX as Ha } from "../shared/commands.es.js";
import { aV as xn, aJ as wn, aD as Vn, ar as Yn, aI as Wn, M as qn, aN as Xn, aO as Kn, aP as zn, aX as jn, aG as Qn, aC as Zn, O as Jn, z as $n, ap as ai, K as ei, as as ti, aE as si, F as ri, a1 as mi, J as oi, aF as ni, aq as ii, Z as di, R as pi, aK as ci, P as li, bx as Ei, by as Ti, bz as Ai, bw as Ii, n as _i, o as Ci, x as Ri, y as Si, ct as yi, cu as Ni, cr as gi, cA as Mi, cq as bi, cy as Oi, cz as ui, co as ki, cp as Li, cv as Pi, cw as vi, cs as Di, cx as hi, aR as fi, aQ as Fi, aS as Gi, a0 as Bi, ad as Ui, E as Hi, bD as xi, bG as wi, bC as Vi, bB as Yi, bA as Wi, bH as qi, bE as Xi, bF as Ki, bI as zi, bJ as ji, a4 as Qi, ag as Zi, ak as Ji, a3 as $i, ch as ad, ci as ed, ck as td, cj as sd, a6 as rd, aU as md, aZ as od, a2 as nd, at as id, Y as dd, I as pd, s as cd, u as ld, L as Ed, p as Td, aa as Ad, ax as Id, N as _d, aW as Cd, aY as Rd, cb as Sd, ce as yd, c9 as Nd, ca as gd, cd as Md, cc as bd, ao as Od, b1 as ud, b2 as kd, aB as Ld, bT as Pd, bP as vd, bQ as Dd, bU as hd, bR as fd, bN as Fd, bO as Gd, bS as Bd, ai as Ud, a_ as Hd, ab as xd, ah as wd, W as Vd, e as Yd, V as Wd, X as qd, U as Xd, ae as Kd, a7 as zd, _ as jd, $ as Qd, aT as Zd, c as Jd, d as $d, S as ap, b as ep, a9 as tp, l as sp, c5 as rp, c4 as mp, bZ as op, c0 as np, c3 as ip, c2 as dp, b$ as pp, b_ as cp, c1 as lp, bY as Ep, an as Tp, ac as Ap, a5 as Ip, bq as _p, bc as Cp, bg as Rp, be as Sp, bd as yp, bf as Np, bs as gp, b6 as Mp, b5 as bp, bm as Op, bn as up, bo as kp, bl as Lp, b9 as Pp, bt as vp, bj as Dp, bk as hp, bh as fp, bi as Fp, bp as Gp, bb as Bp, br as Up, b7 as Hp, b8 as xp, ba as wp, T as Vp, a8 as Yp, cB as Wp, bv as qp, cG as Xp, b3 as Kp, cS as zp, bu as jp, bK as Qp, b4 as Zp, cf as Jp, bV as $p, cl as ac, c6 as ec, bM as tc, bL as sc, f as rc, cQ as mc, cM as oc, cN as nc, g as ic, cJ as dc, cO as pc, cR as cc, cL as lc, cP as Ec, i as Tc, m as Ac, a as Ic, c_ as _c, cC as Cc, cg as Rc, cD as Sc, cE as yc, cF as Nc, bX as gc, bW as Mc, cH as bc, cI as Oc, cn as uc, r as kc, cK as Lc, cm as Pc, c8 as vc, c7 as Dc, t as hc } from "../shared/commands.es.js";
import { c as xa, a as wa, m as r } from "../shared/make.es.js";
const We = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, a.actorId, 0, a.stateId] }), qe = (a, e = 0) => ({
  code: 313,
  indent: e,
  parameters: [0, a.actorId, 1, a.stateId]
}), Xe = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 0, a.stateId] }), Ke = (a, e = 0) => ({ code: 313, indent: e, parameters: [0, 0, 1, a.stateId] }), ze = (a, e = 0) => ({
  code: 321,
  parameters: [a.actorId, a.classId, a.keepExp],
  indent: e
}), je = (a, e = 0) => ({
  code: 319,
  parameters: [a.actorId, a.equipType, a.equipId],
  indent: e
}), Qe = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: m = "", battlerName: o = "" } = {}, i = 0) => ({ code: 322, indent: i, parameters: [a, m, s, t, e, o] }), Ze = (a = 0) => ({
  code: 314,
  indent: a,
  parameters: [0, 0]
}), Je = (a, e = 0) => ({ code: 314, indent: e, parameters: [1, a.targetSelectVariableId] }), f = (a, e) => `\\${a}[${e}]`, $e = (a, e) => e.map((t, s) => ({
  text: t,
  controlChar: f(a, s)
})), at = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e) => ({ char: e[1], id: parseInt(e[2], 10) })), et = (a) => a.map((e) => ({
  text: e.name,
  controlChar: f("N", e.id)
})), tt = (a) => a.variables.map((e, t) => ({ text: e || "", controlChar: f("V", t) })).filter((e) => e.text !== ""), st = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  trigger: a.trigger ?? 0,
  list: a.list ?? [],
  switchId: a.switchId ?? 0
}), rt = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", members: a.members ?? [], pages: a.pages ?? [] }), mt = (a) => ({
  span: a.span ?? 0,
  conditions: Va(a.conditions ?? {}),
  list: a.list ?? []
}), ot = (a = {}) => ({ enemyId: a.enemyId ?? 0, x: a.x ?? 0, y: a.y ?? 0, hidden: a.hidden ?? !1 }), Va = (a = {}) => ({
  actorHp: a.actorHp ?? 0,
  actorId: a.actorId ?? 0,
  enemyValid: a.enemyValid ?? 0,
  switchValid: a.switchValid ?? 0
}), Ya = (a = {}) => ({
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
}), nt = 0, it = 1, dt = 2, pt = 3, ct = 4, lt = 5, Et = 6, Tt = 7, At = 8, It = 9, _t = 10, Ct = 11, Rt = 12, St = 13, yt = 14, Nt = 15, gt = 16, Mt = 17, bt = 18, Ot = 19, ut = 20, kt = 21, Lt = 22, Pt = 23, vt = 24, Dt = 25, ht = 26, ft = 27, Ft = 28, Gt = 29, Bt = 30, Ut = 31, Ht = 32, xt = 33, wt = 34, Vt = 35, Yt = 36, Wt = 37, qt = 38, Xt = 39, Kt = 40, zt = 41, jt = 42, Qt = 43, Zt = 44, Jt = 45, $t = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: m = 0, y: o = 0 } = {}) => ({
  id: a,
  name: e,
  pages: t,
  note: s,
  x: m,
  y: o
}), Wa = ({ characterIndex: a = 0, characterName: e = "", direction: t = 2, pattern: s = 0, tileId: m = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: t,
  pattern: s,
  tileId: m
}), as = ({ list: a = [], conditions: e = Ya(), image: t = Wa(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: o = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: i = 1, stepAnime: p = !1, through: c = !1, walkAnime: I = !1, moveSpeed: b = 3, moveType: O = 0, trigger: u = 0 } = {}) => ({
  walkAnime: I,
  stepAnime: p,
  through: c,
  conditions: e,
  list: a,
  directionFix: m,
  image: t,
  priorityType: i,
  moveFrequency: s,
  moveSpeed: b,
  moveType: O,
  trigger: u,
  moveRoute: { list: o.list, repeat: o.repeat, skippable: o.skippable, wait: o.wait }
}), es = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), ts = (a = {}) => ({
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
}), ss = (a = { id: 0 }) => {
  return { name: a.name ?? (e = a.id, e.toString().padStart(3, "0")), id: a.id, expanded: a.expanded ?? !1, order: a.order ?? 0, parentId: a.parentId ?? 0, scrollX: a.scrollX ?? 0, scrollY: a.scrollY ?? 0 };
  var e;
}, rs = (a, e) => a.map((t) => t ? {
  ...t,
  pages: qa(t, e)
} : null), qa = (a, e) => a.pages.map((t) => ({ ...t, list: e(t.list) })), Xa = { actor: { title: "アクター", options: {
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
} }, Ka = { title: "ダメージ", options: {} }, F = (a = {}) => ({
  type: a.type ?? 0,
  elementId: a.elementId ?? 0,
  formula: a.formula ?? "",
  variance: a.variance ?? 0,
  critical: a.critical ?? !1
}), ms = (a = {}) => ({
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
}), os = (a) => ({
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
}), ns = (a = {}) => ({
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
}), is = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: [],
  note: a.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), za = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: m = 0, mdf: o = 0, agi: i = 0, luk: p = 0 }) => [a, e, t, s, m, o, i, p], ds = (a) => {
  const [e, t, s, m, o, i, p, c] = a;
  return { mhp: e, mmp: t, atk: s, def: m, mat: o, mdf: i, agi: p, luk: c };
}, ja = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), ps = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), cs = (a = {}) => {
  var e;
  return {
    name: a.name ?? "",
    id: a.id ?? 0,
    battlerName: a.battlerName ?? "",
    battlerHue: a.battlerHue ?? 0,
    dropItems: ((e = a.dropItems) == null ? void 0 : e.map(() => ja())) ?? [],
    exp: a.exp ?? 0,
    gold: a.gold ?? 0,
    traits: [],
    note: a.note ?? "",
    params: a.params ? [...a.params] : za({
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
}, ls = (a = {}) => ({
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
}), d = "{name}", _ = "{name} * {value}%", ta = "{name} + {value}%", sa = "{value}", Qa = { title: "特徴", options: {
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
} }, Za = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Es = (a, e, t) => {
  const s = xa(Za);
  return wa(e, t, s, a.pattern, (m) => m.dataId);
}, Ts = (a = {}) => ({
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
}), As = {
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
}, Is = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, _s = 0, Cs = 1, Rs = 2, ra = "{name} {value1}%", v = "{value1}% + {value2}", ma = "{name} {value1}ターン", N = "{name}", Ja = { title: "使用効果", options: {
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
} }, Ss = 0, ys = (a, e, t) => {
  const s = t.find((o) => o.id === e.dataId), m = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", m);
}, Ns = { title: "アイテム", options: { consumable: "消耗品" } }, gs = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Ms = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, bs = (a = {}) => ({
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
}), Os = (a = {}) => ({
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
}), us = "data", ks = "actor", Ls = "map", Ps = "enemy", vs = "state", Ds = "skill", hs = "item", fs = "weapon", Fs = "armor", Gs = "class", Bs = "common_event", Us = "troop", $a = {
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
}, Hs = () => ({ rpg: { damage: Ka, data: Xa, traits: Qa, itemEffect: Ja }, global: $a }), xs = (a, e = 0) => ({ code: la, parameters: [a.actorId, a.name], indent: e }), ws = (a, e = 0) => ({
  code: Ea,
  parameters: [a.actorId, a.nickname],
  indent: e
}), Vs = (a, e = 0) => ({ code: Ta, parameters: [a.actorId, a.profile], indent: e }), C = { direct: 0, variable: 1 }, Ys = (a, e = 0) => ({
  code: oa,
  indent: e,
  parameters: da(0, a)
}), Ws = (a, e = 0) => ({ code: oa, indent: e, parameters: da(1, a) }), qs = (a, e = 0) => ({ code: ia, indent: e, parameters: P(0, a) }), Xs = (a, e = 0) => ({
  code: ia,
  indent: e,
  parameters: P(1, a)
}), Ks = (a, e = 0) => ({ code: na, indent: e, parameters: P(0, a) }), zs = (a, e = 0) => ({
  code: na,
  indent: e,
  parameters: P(1, a)
}), P = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value], da = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value, e.allowDeath], js = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), Qs = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), Zs = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), Js = (a = 0) => ({ code: 244, indent: a, parameters: [] }), $s = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), ar = (a, e) => E(a, r({ name: e })), E = (a, e, t = 0) => ({
  code: a,
  parameters: [r(e)],
  indent: t
}), er = (a, e = 0) => E(Aa, a, e), tr = (a, e = 0) => E(Ia, a, e), sr = (a, e = 0) => E(_a, a, e), rr = (a, e = 0) => E(Ca, a, e), mr = (a, e = 0) => E(Ra, a, e), or = (a, e = 0) => E(Sa, a, e), nr = (a, e = 0) => E(ya, a, e), ir = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), dr = (a = {}, e = 0) => ({
  code: 283,
  indent: e,
  parameters: [a.background1 ?? "", a.background2 ?? ""]
}), pr = 0, cr = 1, lr = 2, Er = (a) => a.parameters[0] === 1, Tr = ({ troopId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({
  code: h,
  indent: s,
  parameters: [0, a, e, t]
}), Ar = ({ variableId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({ code: h, indent: s, parameters: [1, a, e, t] }), Ir = ({ canEscape: a = !1, canLose: e = !1 }, t = 0) => ({
  code: h,
  indent: t,
  parameters: [2, 0, a, e]
}), ae = { plus: 0, minus: 1 }, _r = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [ae[a ?? "plus"] ?? 0, e ?? 0] });
function Cr(a, e = 0) {
  return {
    code: 336,
    parameters: [a.enemyId, a.newEnemyId],
    indent: e
  };
}
const Rr = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), Sr = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 0, a.stateId] }), yr = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 1, a.stateId]
}), Nr = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 0, a.stateId] }), gr = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), Mr = (a = 0) => ({
  code: 334,
  indent: a,
  parameters: [0]
}), br = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), Or = (a, e = 0) => ({ code: Na, indent: e, parameters: ee(a ?? {}) }), ur = (a) => ({
  eventId: a[0]
}), ee = (a) => [a.eventId ?? 0], kr = (a) => ({ min: a[0], max: a[1], value: a[2] }), te = (a) => [a.min, a.max, a.value], Lr = (a, e = 0) => ({ code: ga, indent: e, parameters: te(a) }), Pr = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), vr = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], Dr = (a) => ({ variableId: a[0], maxDigits: a[1] }), hr = (a) => a.parameters[3] === A, fr = (a) => ({
  operation: a[1],
  itemId: a[0],
  value: a[3],
  operand: a[2]
}), Fr = (a, e = 0) => ({ code: g, indent: e, parameters: [a.itemId, a.operation, a.operand, a.value] }), Gr = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.itemId, R, S, a.value]
}), Br = (a, e = 0) => ({ code: g, indent: e, parameters: [a.itemId, R, A, a.variableId] }), Ur = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.itemId, y, S, a.value]
}), Hr = (a, e = 0) => ({ code: g, indent: e, parameters: [a.itemId, y, A, a.variableId] }), xr = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), wr = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), Vr = (a, e = 0) => ({ code: M, indent: e, parameters: [a.weaponId, R, S, a.value, !1] }), Yr = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [a.weaponId, R, A, a.variableId, !1]
}), Wr = (a, e = 0) => ({ code: M, indent: e, parameters: [a.weaponId, y, S, a.value, !1] }), qr = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [a.weaponId, y, A, a.variableId, !1]
}), Xr = (a, e = 0) => ({ code: L, indent: e, parameters: [a.armorId, R, S, a.value, !1] }), Kr = (a, e = 0) => ({
  code: L,
  indent: e,
  parameters: [a.armorId, R, A, a.variableId, !1]
}), zr = (a, e = 0) => ({ code: L, indent: e, parameters: [a.armorId, y, S, a.value, !1] }), jr = (a, e = 0) => ({
  code: L,
  indent: e,
  parameters: [a.armorId, y, A, a.variableId, !1]
}), Qr = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), Zr = (a) => ({ variableId: a[0], itemType: a[1] }), Jr = (a, e = 0) => ({
  code: 284,
  indent: e,
  parameters: [a.parallaxName, a.loopX, a.loopY, a.sx, a.sy]
}), $r = (a, e = 0) => ({ code: 204, indent: e, parameters: [a.direction, a.distance, a.speed, a.waiting] }), am = (a = 0) => ({
  code: 281,
  indent: a,
  parameters: [0]
}), em = (a = 0) => ({ code: 281, indent: a, parameters: [1] }), tm = (a = {}, e = 0) => ({ code: 282, indent: e, parameters: [a.tilesetId ?? 0] }), sm = (a = 0) => ({
  code: 135,
  parameters: [1],
  indent: a
}), rm = (a = 0) => ({ code: 135, parameters: [0], indent: a }), mm = (a = 0) => ({ code: 134, parameters: [1], indent: a }), om = (a = 0) => ({ code: 134, parameters: [0], indent: a }), nm = (a = 0) => ({
  code: 137,
  parameters: [1],
  indent: a
}), im = (a = 0) => ({ code: 137, parameters: [0], indent: a }), pa = (a) => [a], dm = (a) => ({ comment: a[0] }), se = (a, e = 0) => ({ code: Ma, indent: e, parameters: pa(a) }), re = (a, e = 0) => ({
  code: ba,
  indent: e,
  parameters: pa(a)
}), pm = (a, e = 0) => a.map((t, s) => s === 0 ? se(t, e) : re(t, e)), me = (a = {}) => [(a == null ? void 0 : a.speed) ?? 4, (a == null ? void 0 : a.skip) ?? !1], cm = (a) => ({ speed: a[0], skip: a[1] }), lm = (a = {}, e = 0) => ({
  code: Oa,
  indent: e,
  parameters: me(a)
}), oe = (a = "") => [a], Em = (a) => ({ content: a[0] }), Tm = (a = "", e = 0) => ({ code: ua, indent: e ?? 0, parameters: oe(a) }), Am = (a, e = 0) => ({
  code: 402,
  indent: e,
  parameters: [(a == null ? void 0 : a.index) ?? 0, (a == null ? void 0 : a.name) ?? ""]
}), Im = (a) => ({ index: a[0], name: a[1] }), _m = (a) => [a.index ?? 0, a.name ?? ""], Cm = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), Rm = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], Sm = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [(a == null ? void 0 : a.choices) ?? [], (a == null ? void 0 : a.cancelType) ?? 0, (a == null ? void 0 : a.defaultType) ?? 0, (a == null ? void 0 : a.positionType) ?? 2, (a == null ? void 0 : a.background) ?? 0]
}), ym = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Nm = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), gm = (a) => ({
  filename: a[0]
}), Mm = ({ args: a = {}, commandName: e, commandTitle: t = "", pluginName: s }, m = 0) => ({ code: 357, indent: m, parameters: [s, e, t, { ...a }] }), bm = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), Om = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), um = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), km = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), Lm = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), Pm = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), vm = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), Dm = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: m = 0, scaleX: o = 100, scaleY: i = 100, opacity: p = 255, blendMode: c = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, m, o, i, p, c]
}), hm = ({ pictureId: a, origin: e, x: t, y: s, scaleX: m, scaleY: o, opacity: i, blendMode: p, wait: c = !1, easingType: I = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, t, s, m, o, i, p, c, I]
}), fm = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), Fm = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), Gm = (a = 0) => ({ code: 221, indent: a, parameters: [] }), Bm = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), Um = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), Hm = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), ne = (a, e = 0) => ({ code: ka, indent: e, parameters: [a] }), ie = (a, e = 0) => ({
  code: La,
  indent: e,
  parameters: [a]
}), xm = (a, e = 0) => a.map((t, s) => s === 0 ? ne(t, e) : ie(t, e)), wm = 1, Vm = 0, k = { item: 0, weapon: 1, armors: 2 }, Ym = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map((s, m) => {
  const o = ((i) => i.customPrice !== void 0 && i.customPrice !== 0)(s) ? 1 : 0;
  return m === 0 ? { code: Pa, indent: t, parameters: [k[s.itemType] ?? k.item, s.id, o, s.customPrice ?? 0, e] } : {
    code: va,
    indent: t,
    parameters: [k[s.itemType] ?? k.item, s.id, o, s.customPrice ?? 0]
  };
}), Wm = 0, qm = 1, Xm = 2, Km = 3, zm = 4, jm = 5, Qm = 0, Zm = 1, Jm = 2, $m = 3, ao = 4, eo = 0, to = 1, so = 2, ro = (a) => a.parameters[2] === 1, de = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 1, e.variableId], mo = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: de(a, e, t.operation ?? 0)
}), oo = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 0] }), no = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 1]
}), io = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 3] }), po = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 2]
}), co = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 4] }), lo = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 5]
}), Eo = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 6] }), To = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 7]
}), Ao = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 8] }), Io = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 9]
}), pe = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, _o = (a, e, t = {}) => ({ code: n, indent: t.indent ?? 0, parameters: ce(a, e) }), ce = (a, e) => [a.startId, a.endId ?? a.startId, 0, 3, 8, pe[e.param]], Co = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.hp;
    case 1:
      return a.mp;
    case 10:
      return a.tp;
  }
  return e[6] >= 2 && e[6] <= 9 ? a.param(e[6] - 2) : 0;
}, Ro = (a, e) => {
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
}, le = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], So = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: le(a, e, t.operation ?? 0)
}), Ee = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], yo = (a, e) => ({
  code: n,
  indent: 0,
  parameters: Ee(a, e, 0)
}), Te = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], No = (a, e, t = {}) => ({ code: n, indent: t.indent ?? 0, parameters: Te(a, e, t.operation ?? 0) }), Ae = {
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
}, Ie = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, Ae[e.param]], go = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ie(a, e, t.operation ?? 0)
}), Mo = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: _e(a, e, t.operation ?? 0)
}), _e = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], Ce = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], bo = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ce(a, e, t.operation ?? 0)
}), Re = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 4, e.code], Oo = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Re(a, e, t.operation ?? 0)
}), Se = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 1, e.weaponId], uo = (a, e) => ({ code: n, indent: 0, parameters: Se(a, e, 0) }), ko = (a = 0) => ({ code: 206, indent: a, parameters: [] }), Lo = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), Po = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, r(a.bgm)] }), vo = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), Do = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), ho = 0, fo = 1, Fo = 2, ye = (a) => [...a], Go = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: ye(a.parameters)
}), Ne = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", Bo = (a) => a.parameters.every(Ne), Uo = "bgm", Ho = "se", xo = "me", wo = "bgs", Vo = "battlebacks1", Yo = "battlebacks2", Wo = "characters", qo = "enemies", Xo = "faces", Ko = "parallaxes", zo = "pictures", jo = "sv_actors", Qo = "sv_enemies", Zo = "system", Jo = "tilesets", $o = "titles1", an = "titles2", en = "System.json", tn = "Actors.json", sn = "Classes.json", rn = "Skills.json", mn = "Items.json", on = "Weapons.json", nn = "Armors.json", dn = "Enemies.json", pn = "Troops.json", cn = "States.json", ln = "Animations.json", En = "Tilesets.json", Tn = "CommonEvents.json", An = "MapInfos.json", In = "data", _n = "img", Cn = "audio", Rn = "js", ge = (a = {}) => ({
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
}), Me = (a = {}) => [r(a.cursor), r(a.ok), r(a.cancel), r(a.buzzer), r(a.equip), r(a.save), r(a.load), r(a.battleStart), r(a.escape), r(a.enemyAttack), r(a.enemyDamage), r(a.enemyCollapse), r(a.bossCollapes1), r(a.bossCollapes2), r(a.actorDamage), r(a.actorCollapse), r(a.playRecovery), r(a.playMiss), r(a.playEvasion), r(a.playMagicEvasion), r(a.playReflection), r(a.shop), r(a.useItem), r(a.useSkill)], be = (a) => ({
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
}), Oe = (a) => ({
  item: ue(a),
  skill: ke(a),
  equip: Le(a),
  status: Pe(a),
  formation: ve(a),
  save: De(a)
}), ue = (a) => a.menuCommands[0], ke = (a) => a.menuCommands[1], Le = (a) => a.menuCommands[2], Pe = (a) => a.menuCommands[3], ve = (a) => a.menuCommands[4], De = (a) => a.menuCommands[5], Sn = (a) => a.itemCategories[0], yn = (a) => a.itemCategories[1], Nn = (a) => a.itemCategories[2], gn = (a) => a.itemCategories[3], he = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], Mn = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), fe = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], bn = (a) => ({
  item: a[0],
  skill: a[1],
  equip: a[2],
  status: a[3],
  formation: a[4],
  save: a[5]
}), Fe = (a = {}) => ({
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
}), On = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), un = (a) => ({
  armorTypes: T(a.armorTypes),
  elements: T(a.elements),
  equipTypes: T(a.equipTypes),
  weaponTypes: T(a.weaponTypes),
  skillTypes: T(a.skillTypes),
  variables: T(a.variables),
  switches: T(a.switches)
}), T = (a) => a ? [...a] : [], kn = (a) => a.terms.params.map((e, t) => ({
  name: e,
  id: t
})), Ge = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), D = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: r(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), Be = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), Ln = { title: "オプション", options: {
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
} }, Pn = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, vn = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Dn = {
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
}, hn = (a = ca({})) => ({
  versionId: a.versionId,
  menuCommands: a.menuCommands,
  locale: a.locale,
  startMapId: a.startMapId,
  startX: a.startX,
  startY: a.startY,
  partyMembers: a.partyMembers,
  magicSkills: a.magicSkills,
  title1Name: a.title1Name,
  title2Name: a.title2Name,
  gameTitle: a.gameTitle,
  currencyUnit: a.currencyUnit,
  windowTone: a.windowTone,
  battleback1Name: a.battleback1Name,
  battleback2Name: a.battleback2Name,
  testTroopId: a.testTroopId,
  testBattlers: a.testBattlers,
  attackMotions: a.attackMotions,
  battlerHue: a.battlerHue,
  battlerName: a.battlerName,
  airship: a.airship,
  boat: a.boat,
  ship: a.ship,
  defeatMe: a.defeatMe,
  gameoverMe: a.gameoverMe,
  optDisplayTp: a.optDisplayTp,
  optDrawTitle: a.optDrawTitle,
  optExtraExp: a.optExtraExp,
  optFloorDeath: a.optFloorDeath,
  optSideView: a.optSideView,
  optFollowers: a.optFollowers,
  optSlipDeath: a.optSlipDeath,
  optTransparent: a.optTransparent,
  skillTypes: a.skillTypes,
  weaponTypes: a.weaponTypes,
  armorTypes: a.armorTypes,
  elements: a.elements,
  equipTypes: a.equipTypes,
  switches: a.switches,
  variables: a.variables,
  titleBgm: a.titleBgm,
  battleBgm: a.battleBgm,
  victoryMe: a.victoryMe,
  editMapId: a.editMapId,
  sounds: a.sounds,
  terms: {
    basic: a.terms.basic,
    commands: a.terms.commands,
    params: a.terms.params,
    messages: Fa(a.terms.messages)
  }
}), fn = (a) => ca({
  versionId: a.versionId,
  menuCommands: Oe(a),
  locale: a.locale,
  gameInit: {
    startMapId: a.startMapId,
    startX: a.startX,
    startY: a.startY,
    partyMembers: a.partyMembers
  },
  battle: { magicSkills: a.magicSkills },
  bgm: { titleBgm: a.titleBgm, battleBgm: a.battleBgm },
  options: a,
  vehicles: { airship: a.airship, boat: a.boat, ship: a.ship },
  images: { title1Name: a.title1Name, title2Name: a.title2Name },
  me: { defeatMe: a.defeatMe, gameoverMe: a.gameoverMe, victoryMe: a.victoryMe },
  battleTest: {
    battleback1Name: a.battleback1Name,
    battleback2Name: a.battleback2Name,
    testTroopId: a.testTroopId,
    testBattlers: a.testBattlers
  },
  attackMotion: a.attackMotions,
  sounds: be(a.sounds),
  dataNames: {
    skillTypes: a.skillTypes,
    weaponTypes: a.weaponTypes,
    armorTypes: a.armorTypes,
    elements: a.elements,
    equipTypes: a.equipTypes,
    switches: a.switches,
    variables: a.variables
  },
  texts: {
    currencyUnit: a.currencyUnit,
    gameTitle: a.gameTitle
  },
  editorTemporary: { editMapId: a.editMapId, battlerName: a.battlerName, battlerHue: a.battlerHue },
  terms: {
    basic: fa(a.terms.basic),
    commands: ha(a.terms.commands),
    params: Da(a.terms.params),
    messages: a.terms.messages
  }
}), ca = (a) => {
  var t, s, m, o, i, p, c, I, b, O, u, G, B, U, H, x, w, V, Y, W, q, X, K, z, j, Q, Z, J, $, aa, ea;
  const e = He(a.size);
  return {
    ...Fe(a.options),
    titleCommandWindow: Ge(a.titleCommandWindow ?? {}),
    currencyUnit: ((t = a.texts) == null ? void 0 : t.currencyUnit) ?? "",
    gameTitle: ((s = a.texts) == null ? void 0 : s.gameTitle) ?? "",
    sounds: Me(a.sounds),
    editor: Be(a.editing),
    advanced: ge(a.advanced),
    title1Name: ((m = a.images) == null ? void 0 : m.title1Name) ?? "",
    title2Name: ((o = a.images) == null ? void 0 : o.title2Name) ?? "",
    armorTypes: l((i = a.dataNames) == null ? void 0 : i.armorTypes),
    equipTypes: l((p = a.dataNames) == null ? void 0 : p.equipTypes),
    elements: l((c = a.dataNames) == null ? void 0 : c.elements),
    skillTypes: l((I = a.dataNames) == null ? void 0 : I.skillTypes),
    weaponTypes: l((b = a.dataNames) == null ? void 0 : b.weaponTypes),
    switches: l((O = a.dataNames) == null ? void 0 : O.switches),
    variables: l((u = a.dataNames) == null ? void 0 : u.variables),
    magicSkills: l((G = a.battle) == null ? void 0 : G.magicSkills),
    battleSystem: ((B = a.battle) == null ? void 0 : B.battleSystem) ?? 0,
    airship: D((U = a.vehicles) == null ? void 0 : U.airship),
    boat: D((H = a.vehicles) == null ? void 0 : H.boat),
    ship: D((x = a.vehicles) == null ? void 0 : x.ship),
    defeatMe: r((w = a.me) == null ? void 0 : w.defeatMe),
    gameoverMe: r((V = a.me) == null ? void 0 : V.gameoverMe),
    titleBgm: r((Y = a.bgm) == null ? void 0 : Y.titleBgm),
    tileSize: e.tileSize,
    faceSize: e.faceSize,
    iconSize: e.iconSize,
    versionId: a.versionId ?? 1,
    attackMotions: a.attackMotion ? [...a.attackMotion] : [],
    battleback1Name: ((W = a.battleTest) == null ? void 0 : W.battleback1Name) ?? "",
    battleback2Name: ((q = a.battleTest) == null ? void 0 : q.battleback2Name) ?? "",
    testTroopId: ((X = a.battleTest) == null ? void 0 : X.testTroopId) ?? 0,
    testBattlers: xe((K = a.battleTest) == null ? void 0 : K.testBattlers, we),
    battleBgm: r((z = a.bgm) == null ? void 0 : z.battleBgm),
    victoryMe: r((j = a.me) == null ? void 0 : j.victoryMe),
    editMapId: ((Q = a.editorTemporary) == null ? void 0 : Q.editMapId) ?? 0,
    battlerName: ((Z = a.editorTemporary) == null ? void 0 : Z.battlerName) ?? "",
    locale: a.locale ?? "en-US",
    startMapId: ((J = a.gameInit) == null ? void 0 : J.startMapId) ?? 0,
    startX: (($ = a.gameInit) == null ? void 0 : $.startX) ?? 0,
    startY: ((aa = a.gameInit) == null ? void 0 : aa.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Ue(a.terms ?? {}),
    itemCategories: he(a.itemCategories),
    partyMembers: l((ea = a.gameInit) == null ? void 0 : ea.partyMembers),
    battlerHue: 0,
    menuCommands: fe(a.menuCommands)
  };
}, Ue = (a) => ({ basic: Ha(a.basic ?? {}), commands: Ua(a.commands ?? {}), params: Ba(a.params ?? {}), messages: Ga(a.messages ?? {}) }), l = (a) => a ? [...a] : [], He = (a) => a ? {
  tileSize: a.tileSize ?? 48,
  faceSize: a.faceSize ?? 144,
  iconSize: a.iconSize ?? 32
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, xe = (a, e) => a ? a.map(e) : [], we = (a) => a ? {
  actorId: a.actorId,
  equips: l(a.equips),
  level: a.level
} : { actorId: 0, equips: [], level: 1 }, Fn = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), Gn = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, Bn = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  xn as ABORT_BATTLE,
  pr as BATTLE_DIRECT,
  lr as BATTLE_ENCOUNT,
  h as BATTLE_PROCESSING,
  cr as BATTLE_VARIABLE,
  wn as CHANGE_ACTOR_IMAGES,
  Vn as CHANGE_ACTOR_STATE,
  L as CHANGE_ARMORS,
  Yn as CHANGE_BATTLE_BACKGROUND,
  Ra as CHANGE_BATTLE_BGM,
  Wn as CHANGE_CLASS,
  ya as CHANGE_DEFEAT_ME,
  qn as CHANGE_ENCOUNTER,
  Xn as CHANGE_ENEMY_HP,
  Kn as CHANGE_ENEMY_MP,
  zn as CHANGE_ENEMY_STATE,
  jn as CHANGE_ENEMY_TP,
  Qn as CHANGE_EQUIP,
  Zn as CHANGE_EXP,
  Jn as CHANGE_FORMATION_ACCESS,
  $n as CHANGE_GOLD,
  oa as CHANGE_HP,
  g as CHANGE_ITEMS,
  ai as CHANGE_MAP_NAME_DISPLAY,
  ei as CHANGE_MENU_ACCESS,
  na as CHANGE_MP,
  la as CHANGE_NAME,
  Ea as CHANGE_NICKNAME,
  ti as CHANGE_PARALLAX,
  si as CHANGE_PARAMETER,
  ri as CHANGE_PARTY_MEMBER,
  mi as CHANGE_PLAYER_FOLLOWERS,
  Ta as CHANGE_PROFILE,
  oi as CHANGE_SAVE_ACCESS,
  ni as CHANGE_SKILL,
  ii as CHANGE_TILESET,
  ia as CHANGE_TP,
  di as CHANGE_TRANSPARENCY,
  pi as CHANGE_VEHICLE_BGM,
  ci as CHANGE_VEHICLE_IMAGE,
  Sa as CHANGE_VICTORY_ME,
  M as CHANGE_WEAPONS,
  li as CHANGE_WINDOW_COLOR,
  Ei as COLLAPS_BOSS,
  Ti as COLLAPS_INSTANT,
  Ai as COLLAPS_NONE,
  Ii as COLLAPS_NORMAL,
  ba as COMMENT_BODY,
  Ma as COMMENT_HEAD,
  Na as COMMON_EVENT,
  _i as CONDITIONAL_BRANCH,
  Ci as CONDITIONAL_BRANCH_ELSE,
  Ri as CONTROL_SELF_SWITCH,
  ga as CONTROL_SWITCHES,
  Si as CONTROL_TIMER,
  n as CONTROL_VARIABLES,
  wm as CUSTOM_PRICE,
  Ka as DEFAULT_DAMAGE_LABELS,
  $a as DEFAULT_GLOBAL_LABELS,
  Ns as DEFAULT_ITEM_LABELS,
  gs as DEFAULT_SKILL_LABELS,
  Ln as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Pn as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Ms as DEFAULT_USABLE_ITEM_LABELS,
  Gn as DIRECTION,
  yi as EFFECT_ADD_BUFF,
  Ni as EFFECT_ADD_DEBUFF,
  gi as EFFECT_ADD_STATE,
  Mi as EFFECT_COMMON_EVENT,
  bi as EFFECT_GAIN_TP,
  Oi as EFFECT_GROW,
  ui as EFFECT_LEARN_SKILL,
  ki as EFFECT_RECOVER_HP,
  Li as EFFECT_RECOVER_MP,
  Pi as EFFECT_REMOVE_BUFF,
  vi as EFFECT_REMOVE_DEBUFF,
  Di as EFFECT_REMOVE_STATE,
  hi as EFFECT_SPECIAL,
  fi as ENEMY_APPEAR,
  Fi as ENEMY_RECOVER_ALL,
  Gi as ENEMY_TRANSFORM,
  Bi as ERASE_EVENT,
  Ui as ERASE_PICTURE,
  Hi as EXIT_EVENT_PROCESSING,
  xi as EXTRA_PARAM_CEV,
  wi as EXTRA_PARAM_CNT,
  Vi as EXTRA_PARAM_CRI,
  Yi as EXTRA_PARAM_EVA,
  Wi as EXTRA_PARAM_HIT,
  qi as EXTRA_PARAM_HRG,
  Xi as EXTRA_PARAM_MEV,
  Ki as EXTRA_PARAM_MRF,
  zi as EXTRA_PARAM_MRG,
  ji as EXTRA_PARAM_TRG,
  Qi as FADEIN_SCREEN,
  Zi as FADEOUT_BGM,
  Ji as FADEOUT_BGS,
  $i as FADEOUT_SCREEN,
  tn as FILENAME_ACTORS,
  ln as FILENAME_ANIMATIONS,
  nn as FILENAME_ARMORS,
  sn as FILENAME_CLASSES,
  Tn as FILENAME_COMMON_EVENTS,
  dn as FILENAME_ENEMIES,
  mn as FILENAME_ITEMS,
  An as FILENAME_MAP_INFOS,
  rn as FILENAME_SKILLS,
  cn as FILENAME_STATES,
  en as FILENAME_SYSTEM,
  En as FILENAME_TILESET,
  pn as FILENAME_TROOPS,
  on as FILENAME_WEAPONS,
  ad as FLAG_ID_AUTO_BATTLE,
  ed as FLAG_ID_GUARD,
  td as FLAG_ID_PRESERVE_TP,
  sd as FLAG_ID_SUBSTITUTE,
  rd as FLASH_SCREEN,
  Cn as FOLDER_AUDIO,
  Uo as FOLDER_AUDIO_BGM,
  wo as FOLDER_AUDIO_BGS,
  xo as FOLDER_AUDIO_ME,
  Ho as FOLDER_AUDIO_SE,
  In as FOLDER_DATA,
  _n as FOLDER_IMG,
  Vo as FOLDER_IMG_BATTLEBACK1,
  Yo as FOLDER_IMG_BATTLEBACK2,
  Wo as FOLDER_IMG_CHACTERS,
  qo as FOLDER_IMG_ENEMIES,
  Xo as FOLDER_IMG_FACES,
  Ko as FOLDER_IMG_PARALLACES,
  zo as FOLDER_IMG_PICTURES,
  jo as FOLDER_IMG_SV_ACTORS,
  Qo as FOLDER_IMG_SV_ENEMIES,
  Zo as FOLDER_IMG_SYSTEM,
  Jo as FOLDER_IMG_TILESETS,
  $o as FOLDER_IMG_TITLES1,
  an as FOLDER_IMG_TITLES2,
  Rn as FOLDER_JS,
  md as FORCE_ACTION,
  od as GAME_OVER,
  nd as GATHER_FOLLOWERS,
  id as GET_LOCATION_INFO,
  dd as GET_ONOFF_VEHICLE,
  _s as HITTYPE_CERTAIN,
  Rs as HITTYPE_MAGICAL,
  Cs as HITTYPE_PHYSICAL,
  pd as INPUT_NUMBER,
  cd as LABEL,
  Is as LABELS_DATA_WEAPON,
  vn as LABELS_SYSTEM_BATTLER_PARAMS,
  Dn as LABELS_SYSTEM_GAME_COMMANDS,
  ld as LABEL_JUMP,
  Xa as LABEL_SET_DATA,
  Ja as LABEL_SET_ITEM_EFFECT,
  Qa as LABEL_SET_TRAIT,
  Ed as LOOP,
  Td as LOOP_BREAK,
  us as MODULE_DATA,
  Ad as MOVE_PICTURE,
  Id as NAME_INPUT_PROCESSING,
  Vm as NORMAL_PRICE,
  _d as NO_OPERATION,
  Cd as OPEN_MENU_SCREEN,
  Rd as OPEN_SAVE_SCREEN,
  Qm as OPERAND_CONSTANT,
  $m as OPERAND_GAMEDATA,
  Jm as OPERAND_RANDOM,
  ao as OPERAND_SCRIPT,
  Zm as OPERAND_VARIABLE,
  qm as OPERATION_ADD,
  zm as OPERATION_DIVIDE,
  jm as OPERATION_MOD,
  Km as OPERATION_MULTIPLY,
  Wm as OPERATION_SET,
  Xm as OPERATION_SUBTRACT,
  Sd as PARTY_ABILITY_CANCEL_SURPRISE,
  yd as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Nd as PARTY_ABILITY_ENCOUNTER_HALF,
  gd as PARTY_ABILITY_ENCOUNTER_NONE,
  Md as PARTY_ABILITY_GOLD_DOUBLE,
  bd as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Aa as PLAY_BGM,
  Ia as PLAY_BGS,
  _a as PLAY_ME,
  Od as PLAY_MOVIE,
  Ca as PLAY_SE,
  ud as PLUGIN_COMMAND_MV,
  kd as PLUGIN_COMMAND_MZ,
  Ld as RECOVER_ALL,
  Pd as REGULAR_PARAM_AGI,
  vd as REGULAR_PARAM_ATK,
  Dd as REGULAR_PARAM_DEF,
  hd as REGULAR_PARAM_LUK,
  fd as REGULAR_PARAM_MATK,
  Fd as REGULAR_PARAM_MAX_HP,
  Gd as REGULAR_PARAM_MAX_MP,
  Bd as REGULAR_PARAM_MDEF,
  Ud as RESUME_BGM,
  Hd as RETURN_TO_TITLE_SCREEN,
  xd as ROTATE_PICTURE,
  Qt as ROUTE_CHANGE_BLEND_MODE,
  Bt as ROUTE_CHANGE_FREQ,
  zt as ROUTE_CHANGE_IMAGE,
  jt as ROUTE_CHANGE_OPACITY,
  Gt as ROUTE_CHANGE_SPEED,
  Yt as ROUTE_DIR_FIX_OFF,
  Vt as ROUTE_DIR_FIX_ON,
  nt as ROUTE_END,
  yt as ROUTE_JUMP,
  Ct as ROUTE_MOVE_AWAY,
  St as ROUTE_MOVE_BACKWARD,
  it as ROUTE_MOVE_DOWN,
  Rt as ROUTE_MOVE_FORWARD,
  dt as ROUTE_MOVE_LEFT,
  lt as ROUTE_MOVE_LOWER_L,
  Et as ROUTE_MOVE_LOWER_R,
  It as ROUTE_MOVE_RANDOM,
  pt as ROUTE_MOVE_RIGHT,
  _t as ROUTE_MOVE_TOWARD,
  ct as ROUTE_MOVE_UP,
  Tt as ROUTE_MOVE_UPPER_L,
  At as ROUTE_MOVE_UPPER_R,
  Zt as ROUTE_PLAY_SE,
  Jt as ROUTE_SCRIPT,
  wt as ROUTE_STEP_ANIME_OFF,
  xt as ROUTE_STEP_ANIME_ON,
  Ft as ROUTE_SWITCH_OFF,
  ft as ROUTE_SWITCH_ON,
  qt as ROUTE_THROUGH_OFF,
  Wt as ROUTE_THROUGH_ON,
  Kt as ROUTE_TRANSPARENT_OFF,
  Xt as ROUTE_TRANSPARENT_ON,
  Lt as ROUTE_TURN_180D,
  kt as ROUTE_TURN_90D_L,
  ut as ROUTE_TURN_90D_R,
  Pt as ROUTE_TURN_90D_R_L,
  ht as ROUTE_TURN_AWAY,
  gt as ROUTE_TURN_DOWN,
  Mt as ROUTE_TURN_LEFT,
  vt as ROUTE_TURN_RANDOM,
  bt as ROUTE_TURN_RIGHT,
  Dt as ROUTE_TURN_TOWARD,
  Ot as ROUTE_TURN_UP,
  Nt as ROUTE_WAIT,
  Ht as ROUTE_WALK_ANIME_OFF,
  Ut as ROUTE_WALK_ANIME_ON,
  wd as SAVE_BGM,
  As as SCHEMA_DATA_WEAPON,
  ka as SCRIPT_EVAL,
  La as SCRIPT_EVAL_BODY,
  Vd as SCROLL_MAP,
  Yd as SELECT_ITEM,
  Wd as SET_EVENT_LOCATION,
  qd as SET_MOVEMENT_ROUTE,
  Xd as SET_VEHICLE_LOCATION,
  Kd as SET_WEATHER_EFFECT,
  zd as SHAKE_SCREEN,
  Pa as SHOP_PROCESSING,
  va as SHOP_PROCESSING_BODY,
  jd as SHOW_ANIMATION,
  Qd as SHOW_BALLOON_ICON,
  Zd as SHOW_BATTLE_ANIMATION,
  Jd as SHOW_CHOICES,
  $d as SHOW_CHOICES_ITEM,
  ap as SHOW_MESSAGE,
  ep as SHOW_MESSAGE_BODY,
  tp as SHOW_PICTURE,
  Oa as SHOW_SCROLLING_TEXT,
  ua as SHOW_SCROLLING_TEXT_BODY,
  sp as SKIP,
  Ss as SPECIAL_EFFECT_ESCAPE,
  rp as SPECIAL_PARAM_EXR,
  mp as SPECIAL_PARAM_FDR,
  op as SPECIAL_PARAM_GRD,
  np as SPECIAL_PARAM_MCR,
  ip as SPECIAL_PARAM_MDR,
  dp as SPECIAL_PARAM_PDR,
  pp as SPECIAL_PARAM_PHA,
  cp as SPECIAL_PARAM_REC,
  lp as SPECIAL_PARAM_TCR,
  Ep as SPECIAL_PARAM_TGR,
  ks as SRC_DATA_ACTOR,
  Fs as SRC_DATA_ARMOR,
  Gs as SRC_DATA_CLASS,
  Bs as SRC_DATA_COMMON_EVNET,
  Ps as SRC_DATA_ENEMY,
  hs as SRC_DATA_ITEMS,
  Ls as SRC_DATA_MAP,
  Ds as SRC_DATA_SKILL,
  vs as SRC_DATA_STATE,
  Us as SRC_DATA_TROOP,
  fs as SRC_DATA_WEAPON,
  Tp as STOP_SE,
  Ap as TINT_PICTURE,
  Ip as TINT_SCREEN,
  _p as TRAIT_ACTION_PLUS,
  Cp as TRAIT_ATTACK_ELEMENT,
  Rp as TRAIT_ATTACK_SKILL,
  Sp as TRAIT_ATTACK_SPEED,
  yp as TRAIT_ATTACK_STATE,
  Np as TRAIT_ATTACK_TIMES,
  gp as TRAIT_COLLAPSE_TYPE,
  Mp as TRAIT_DEBUFF_RATE,
  bp as TRAIT_ELEMENT_RATE,
  Op as TRAIT_EQUIP_ARMOR_TYPE,
  up as TRAIT_EQUIP_LOCK,
  kp as TRAIT_EQUIP_SEAL,
  Lp as TRAIT_EQUIP_WEAPON_TYPE,
  Pp as TRAIT_PARAM,
  vp as TRAIT_PARTY_ABILITY,
  Dp as TRAIT_SKILL_ADD,
  hp as TRAIT_SKILL_SEAL,
  fp as TRAIT_SKILL_TYPE_ADD,
  Fp as TRAIT_SKILL_TYPE_SEAL,
  Gp as TRAIT_SLOT_TYPE,
  Bp as TRAIT_SPARAM,
  Up as TRAIT_SPECIAL_FLAG,
  Hp as TRAIT_STATE_RATE,
  xp as TRAIT_STATE_RESIST,
  wp as TRAIT_XPARAM,
  Vp as TRANSFER_PLAYER,
  so as TYPE_ARMOR,
  eo as TYPE_ITEM,
  to as TYPE_WEAPON,
  Fo as VEHICLE_AIRSHIP,
  ho as VEHICLE_BOAT,
  fo as VEHICLE_SHIP,
  Yp as WAIT,
  Wp as buildNoteFromNormalized,
  ym as cloneChoices,
  Go as cloneEventCommand,
  ye as cloneParameters,
  qp as collapsOptionsToArray,
  dm as convertCommentArrayToObject,
  Fa as convertTermsMessageMZtoMV,
  et as createActorControlChars,
  f as createControlCharFormat,
  Oe as createMenuCommandState,
  Xp as createNoteEntity,
  tt as createSystemVariableControlChars,
  Kp as defineGameDataSources,
  zp as defineSystemItems,
  jp as defineTraitCollapseType,
  Qp as defineTraitExtraParam,
  Zp as defineTraitItems,
  Jp as defineTraitPartyAbility,
  $p as defineTraitRegularParam,
  ac as defineTraitSpecialFlag,
  ec as defineTraitSpecialParam,
  tc as extraParamName,
  sc as extraParamsToArray,
  Bn as extractFileName,
  ys as formatItemEffectText,
  Es as formatTraitText,
  fr as fromArrayChangeItems,
  xr as fromArrayChangeWeapons,
  ur as fromArrayCommonEvent,
  kr as fromArrayControlSwitches,
  Rr as fromArrayEnemyTransform,
  Dr as fromArrayInputNumber,
  gm as fromArrayPlayMovie,
  bm as fromArrayPluginCommandMZ,
  Em as fromArrayScrollingTextBody,
  cm as fromArrayScrollingTextHeader,
  Zr as fromArraySelectItem,
  Cm as fromArraySetupChoice,
  Im as fromArraySetupChoiceItem,
  rc as fromArrayShowMessageHeader,
  $e as fromStringArray,
  Ro as getActorValue,
  Nn as getArmorCategoryEnabled,
  mc as getArmorTypes,
  at as getControlChars,
  oc as getElementTypes,
  Co as getEnemyValue,
  Le as getEquipCommandEnabled,
  nc as getEquipTypes,
  ve as getFormationCommandEnabled,
  Sn as getItemCategoryEnabled,
  ue as getItemCommandEnabled,
  ic as getItemIdFromItemCommand,
  gn as getKeyItemCategoryEnabled,
  dc as getNoteValue,
  kn as getParamNames,
  De as getSaveCommandEnabled,
  ke as getSkillCommandEnabled,
  pc as getSkillTypes,
  Pe as getStatusCommandEnabled,
  cc as getSwitches,
  lc as getVariableNames,
  yn as getWeaponCategoryEnabled,
  Ec as getWeaponTypes,
  Bo as isCloneableCommand,
  Er as isCommandBattleProcessingVariable,
  ro as isCommandOperandVariables,
  Tc as isUsingVariableItemCommand,
  hr as isUsingVaribleCommandChangingItems,
  Hs as labelsRegistry,
  ms as makeActorData,
  ns as makeArmorData,
  ar as makeAudioCommand,
  mt as makeBattleEventPage,
  Fe as makeBooleanOptions,
  is as makeClassData,
  Xe as makeCommandAddActorStateEach,
  We as makeCommandAddActorStateTarget,
  Nr as makeCommandAddEachEnemyState,
  Sr as makeCommandAddEnemyState,
  Om as makeCommandAddPartyMember,
  E as makeCommandAudioAny,
  Tr as makeCommandBattleProcessingDirect,
  Ir as makeCommandBattleProcessingEncount,
  Ar as makeCommandBattleProcessingVariable,
  Qe as makeCommandChangeActorImages,
  xs as makeCommandChangeActorName,
  ws as makeCommandChangeActorNickName,
  Vs as makeCommandChangeActorProfile,
  mr as makeCommandChangeBattleBGM,
  dr as makeCommandChangeBattleBackground,
  ze as makeCommandChangeClass,
  nr as makeCommandChangeDefeatME,
  je as makeCommandChangeEquip,
  Fr as makeCommandChangeItems,
  Jr as makeCommandChangeParallax,
  tm as makeCommandChangeTileset,
  Po as makeCommandChangeVehicleBGM,
  Lo as makeCommandChangeVehicleImage,
  or as makeCommandChangeVictoryME,
  wr as makeCommandChangeWeapons,
  re as makeCommandCommentBody,
  se as makeCommandCommentHeader,
  Or as makeCommandCommonEvent,
  Lr as makeCommandControlSwitches,
  _r as makeCommandControlTimer,
  nm as makeCommandDisableFormationAccess,
  sm as makeCommandDisableMenuAccess,
  mm as makeCommandDisableSaveAccess,
  im as makeCommandEnableFormationAccess,
  rm as makeCommandEnableMenuAccess,
  om as makeCommandEnableSaveAccess,
  br as makeCommandEnemyRecoverAll,
  Mr as makeCommandEnemyRecoverAllEach,
  Cr as makeCommandEnemyTransform,
  Fm as makeCommandFadeInScreen,
  Qs as makeCommandFadeOutBGM,
  $s as makeCommandFadeOutBGS,
  Gm as makeCommandFadeOutScreen,
  Bm as makeCommandFlashScreen,
  Ys as makeCommandGainActorHP,
  Ks as makeCommandGainActorMP,
  qs as makeCommandGainActorTP,
  Xr as makeCommandGainArmor,
  Kr as makeCommandGainArmorByVariable,
  km as makeCommandGainGold,
  Pm as makeCommandGainGoldByVariable,
  Gr as makeCommandGainItem,
  Br as makeCommandGainItemV,
  Vr as makeCommandGainWeapon,
  Yr as makeCommandGainWeaponV,
  ko as makeCommandGetOnOffVehicle,
  em as makeCommandHideMapName,
  Pr as makeCommandInputNumber,
  Ws as makeCommandLoseActorHP,
  zs as makeCommandLoseActorMP,
  Xs as makeCommandLoseActorTP,
  zr as makeCommandLoseArmor,
  jr as makeCommandLoseArmorByVariable,
  Lm as makeCommandLoseGold,
  vm as makeCommandLoseGoldByVariable,
  Ur as makeCommandLoseItem,
  Hr as makeCommandLoseItemV,
  Wr as makeCommandLoseWeapon,
  qr as makeCommandLoseWeaponV,
  hm as makeCommandMovePicture,
  er as makeCommandPlayBGM,
  tr as makeCommandPlayBGS,
  sr as makeCommandPlayME,
  Nm as makeCommandPlayMovie,
  rr as makeCommandPlaySE,
  Mm as makeCommandPluginCommandMZ,
  Ze as makeCommandRecoverAll,
  Je as makeCommandRecoverAllTarget,
  Ke as makeCommandRemoveActorStateEach,
  qe as makeCommandRemoveActorStateTarget,
  gr as makeCommandRemoveEachEnemyState,
  yr as makeCommandRemoveEnemyState,
  um as makeCommandRemovePartyMember,
  Js as makeCommandResumeBGM,
  Zs as makeCommandSaveBGM,
  xm as makeCommandScriptArray,
  ie as makeCommandScriptBody,
  ne as makeCommandScriptHeader,
  $r as makeCommandScrollMap,
  Tm as makeCommandScrollingTextBody,
  lm as makeCommandScrollingTextHeader,
  Qr as makeCommandSelectItem,
  vo as makeCommandSetVehicleLocation,
  Do as makeCommandSetVehicleLocationFromVariables,
  fm as makeCommandSetWeatherEffect,
  Sm as makeCommandSetupChoice,
  Um as makeCommandShakeScreen,
  Ym as makeCommandShopProcessing,
  js as makeCommandShowAnimation,
  ir as makeCommandShowBalloonIcon,
  Am as makeCommandShowChoiceItem,
  am as makeCommandShowMapName,
  Ac as makeCommandShowMessage,
  Ic as makeCommandShowMessageBody,
  Dm as makeCommandShowPicture,
  To as makeCommandSystemBattleCount,
  Io as makeCommandSystemEscapeCount,
  Eo as makeCommandSystemSaveCount,
  lo as makeCommandSystemTimer,
  Ao as makeCommandSystemWinCount,
  Hm as makeCommandTintScreen,
  So as makeCommandVariableFromActorStatusData,
  yo as makeCommandVariableFromArmor,
  No as makeCommandVariableFromConstant,
  go as makeCommandVariableFromEnemyData,
  Mo as makeCommandVariableFromItemData,
  oo as makeCommandVariableFromMapId,
  po as makeCommandVariableFromPartyGold,
  no as makeCommandVariableFromPartyMembers,
  io as makeCommandVariableFromPartySteps,
  co as makeCommandVariableFromPlaytime,
  bo as makeCommandVariableFromRandom,
  Oo as makeCommandVariableFromScript,
  _o as makeCommandVariableFromTempLastData,
  mo as makeCommandVariableFromVariable,
  uo as makeCommandVariableFromWeapon,
  pa as makeCommentArray,
  pm as makeCommentCommandArray,
  st as makeCommonEventData,
  F as makeDamage,
  un as makeDataNames,
  ja as makeDropItem,
  Be as makeEditorSetting,
  ps as makeEnemyAction,
  cs as makeEnemyData,
  Ya as makeEventPageCondition,
  On as makeGameInitial,
  he as makeItemCategories,
  Mn as makeItemCategoriesFromArray,
  bs as makeItemData,
  ts as makeMapData,
  $t as makeMapEvent,
  Wa as makeMapEventIamge,
  as as makeMapEventPage,
  es as makeMapFileInfo,
  ss as makeMapInfoData,
  fe as makeMenuCommandsEnabled,
  bn as makeMenuCommandsEnabledFromArray,
  za as makeParamArray,
  Ba as makeParamNamesArray,
  Da as makeParamNamesFromArray,
  Os as makeSkillData,
  Me as makeSoundsArray,
  be as makeSoundsObject,
  ls as makeStateData,
  ge as makeSystemAdvanced,
  ca as makeSystemData,
  fn as makeSystemDataFromMV,
  hn as makeSystemDataMV,
  Ha as makeTermsBasic,
  fa as makeTermsBasicFromArray,
  Ua as makeTermsCommandArray,
  _c as makeTermsCommandArrayWithNulls,
  ha as makeTermsCommandFromArray,
  Ga as makeTermsMessages,
  Ge as makeTitleCommandWindow,
  rt as makeTroopData,
  Va as makeTroopEventConditions,
  ot as makeTroopMember,
  D as makeVehicleData,
  Ts as makeWeaponData,
  os as normalizeDataActor,
  Cc as normalizeNote,
  ds as paramArrayToObject,
  Rc as partyAbilityToArray,
  Sc as readNote,
  yc as readNoteEx,
  Nc as readNoteObject,
  gc as regularParamName,
  Mc as regularParamsToArray,
  bc as replaceNote,
  Oc as replaceNoteWithHandlers,
  rs as repleaceMapEventCommands,
  uc as resolveItemEffectLabels,
  kc as resolveTraitLabels,
  Lc as setNoteValue,
  Pc as specialFlagToArray,
  vc as specialParamName,
  Dc as specialParamsToArray,
  Fn as textAndDesc,
  ee as toArrayCommonEvent,
  te as toArrayControlSwitches,
  vr as toArrayInputNumber,
  le as toArrayOperandActorStatus,
  Ee as toArrayOperandArmorData,
  Te as toArrayOperandConstant,
  Ie as toArrayOperandEnemyStatus,
  _e as toArrayOperandItemData,
  Ce as toArrayOperandRandom,
  Re as toArrayOperandScript,
  de as toArrayOperandVariable,
  Se as toArrayOperandWeaponData,
  oe as toArrayScrollingTextBody,
  me as toArrayScrollingTextHeader,
  Rm as toArraySetupChoice,
  _m as toArraySetupChoiceItem,
  hc as toArrayShowMessageHeader
};
