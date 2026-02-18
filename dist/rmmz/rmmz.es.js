import { aG as ca, aK as Ea, aL as Ta, ay as oa, az as na, aA as ia, af as Aa, aj as Ia, al as _a, am as Ca, G as Ra, H as Sa, Q as ya, au as h, q as Na, v as Ma, A as M, c$ as R, d1 as S, d2 as A, d0 as y, B as g, D as k, C as ga, k as ba, h as Oa, j as ua, a_ as La, a$ as ka, av as Pa, aw as va, w as n, cV as Da, c_ as ha, cX as fa, cS as Fa, cT as Ga, cU as Ba, cY as Ua, cW as Ha } from "../shared/commands.es.js";
import { aU as Ln, aI as kn, aD as Pn, ar as vn, aH as Dn, M as hn, aM as fn, aN as Fn, aO as Gn, aW as Bn, aC as Un, O as Hn, z as xn, ap as Vn, K as wn, as as Yn, aE as Wn, F as qn, a1 as Xn, J as Kn, aF as zn, aq as jn, Z as Qn, R as Zn, aJ as Jn, P as $n, bw as ai, bx as ei, by as ti, bv as si, n as ri, o as mi, x as oi, y as ni, cs as ii, ct as di, cq as pi, cz as li, cp as ci, cx as Ei, cy as Ti, cn as Ai, co as Ii, cu as _i, cv as Ci, cr as Ri, cw as Si, aQ as yi, aP as Ni, aR as Mi, a0 as gi, ad as bi, E as Oi, bC as ui, bF as Li, bB as ki, bA as Pi, bz as vi, bG as Di, bD as hi, bE as fi, bH as Fi, bI as Gi, a4 as Bi, ag as Ui, ak as Hi, a3 as xi, cg as Vi, ch as wi, cj as Yi, ci as Wi, a6 as qi, aT as Xi, aY as Ki, a2 as zi, at as ji, Y as Qi, I as Zi, s as Ji, u as $i, L as ad, p as ed, aa as td, ax as sd, N as rd, aV as md, aX as od, ca as nd, cd as id, c8 as dd, c9 as pd, cc as ld, cb as cd, ao as Ed, b0 as Td, b1 as Ad, aB as Id, bS as _d, bO as Cd, bP as Rd, bT as Sd, bQ as yd, bM as Nd, bN as Md, bR as gd, ai as bd, aZ as Od, ab as ud, ah as Ld, W as kd, e as Pd, V as vd, X as Dd, U as hd, ae as fd, a7 as Fd, _ as Gd, $ as Bd, aS as Ud, c as Hd, d as xd, S as Vd, b as wd, a9 as Yd, l as Wd, c4 as qd, c3 as Xd, bY as Kd, b$ as zd, c2 as jd, c1 as Qd, b_ as Zd, bZ as Jd, c0 as $d, bX as ap, an as ep, ac as tp, a5 as sp, bp as rp, bb as mp, bf as op, bd as np, bc as ip, be as dp, br as pp, b5 as lp, b4 as cp, bl as Ep, bm as Tp, bn as Ap, bk as Ip, b8 as _p, bs as Cp, bi as Rp, bj as Sp, bg as yp, bh as Np, bo as Mp, ba as gp, bq as bp, b6 as Op, b7 as up, b9 as Lp, T as kp, a8 as Pp, cA as vp, bu as Dp, cF as hp, b2 as fp, cR as Fp, bt as Gp, bJ as Bp, b3 as Up, ce as Hp, bU as xp, ck as Vp, c5 as wp, bL as Yp, bK as Wp, f as qp, cP as Xp, cL as Kp, cM as zp, g as jp, cI as Qp, cN as Zp, cQ as Jp, cK as $p, cO as al, i as el, m as tl, a as sl, cZ as rl, cB as ml, cf as ol, cC as nl, cD as il, cE as dl, bW as pl, bV as ll, cG as cl, cH as El, cm as Tl, r as Al, cJ as Il, cl as _l, c7 as Cl, c6 as Rl, t as Sl } from "../shared/commands.es.js";
import { c as xa, a as Va, m as r } from "../shared/make.es.js";
const We = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), qe = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [1, a.targetSelectVariableId]
}), Xe = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: m = "", battlerName: o = "" } = {}, i = 0) => ({
  code: 322,
  indent: i,
  parameters: [a, m, s, t, e, o]
}), f = (a, e) => `\\${a}[${e}]`, Ke = (a, e) => e.map((t, s) => ({ text: t, controlChar: f(a, s) })), ze = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e) => ({
  char: e[1],
  id: parseInt(e[2], 10)
})), je = (a) => a.map((e) => ({ text: e.name, controlChar: f("N", e.id) })), Qe = (a) => a.variables.map((e, t) => ({
  text: e || "",
  controlChar: f("V", t)
})).filter((e) => e.text !== ""), Ze = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", trigger: a.trigger ?? 0, list: a.list ?? [], switchId: a.switchId ?? 0 }), Je = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  members: a.members ?? [],
  pages: a.pages ?? []
}), $e = (a) => ({ span: a.span ?? 0, conditions: wa(a.conditions ?? {}), list: a.list ?? [] }), at = (a = {}) => ({
  enemyId: a.enemyId ?? 0,
  x: a.x ?? 0,
  y: a.y ?? 0,
  hidden: a.hidden ?? !1
}), wa = (a = {}) => ({ actorHp: a.actorHp ?? 0, actorId: a.actorId ?? 0, enemyValid: a.enemyValid ?? 0, switchValid: a.switchValid ?? 0 }), Ya = (a = {}) => ({
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
}), et = 0, tt = 1, st = 2, rt = 3, mt = 4, ot = 5, nt = 6, it = 7, dt = 8, pt = 9, lt = 10, ct = 11, Et = 12, Tt = 13, At = 14, It = 15, _t = 16, Ct = 17, Rt = 18, St = 19, yt = 20, Nt = 21, Mt = 22, gt = 23, bt = 24, Ot = 25, ut = 26, Lt = 27, kt = 28, Pt = 29, vt = 30, Dt = 31, ht = 32, ft = 33, Ft = 34, Gt = 35, Bt = 36, Ut = 37, Ht = 38, xt = 39, Vt = 40, wt = 41, Yt = 42, Wt = 43, qt = 44, Xt = 45, Kt = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: m = 0, y: o = 0 } = {}) => ({
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
}), zt = ({ list: a = [], conditions: e = Ya(), image: t = Wa(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: o = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: i = 1, stepAnime: p = !1, through: l = !1, walkAnime: I = !1, moveSpeed: b = 3, moveType: O = 0, trigger: u = 0 } = {}) => ({
  walkAnime: I,
  stepAnime: p,
  through: l,
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
}), jt = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), Qt = (a = {}) => ({
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
}), Zt = (a = { id: 0 }) => {
  return { name: a.name ?? (e = a.id, e.toString().padStart(3, "0")), id: a.id, expanded: a.expanded ?? !1, order: a.order ?? 0, parentId: a.parentId ?? 0, scrollX: a.scrollX ?? 0, scrollY: a.scrollY ?? 0 };
  var e;
}, Jt = (a, e) => a.map((t) => t ? {
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
}), $t = (a = {}) => ({
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
}), as = (a) => ({
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
}), es = (a = {}) => ({
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
}), ts = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: [],
  note: a.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), za = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: m = 0, mdf: o = 0, agi: i = 0, luk: p = 0 }) => [a, e, t, s, m, o, i, p], ss = (a) => {
  const [e, t, s, m, o, i, p, l] = a;
  return { mhp: e, mmp: t, atk: s, def: m, mat: o, mdf: i, agi: p, luk: l };
}, ja = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), rs = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), ms = (a = {}) => {
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
}, os = (a = {}) => ({
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
} }, ns = (a, e, t) => {
  const s = xa(Za);
  return Va(e, t, s, a.pattern, (m) => m.dataId);
}, is = (a = {}) => ({
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
}), ds = {
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
}, ps = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, ls = 0, cs = 1, Es = 2, ra = "{name} {value1}%", v = "{value1}% + {value2}", ma = "{name} {value1}ターン", N = "{name}", Ja = { title: "使用効果", options: {
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
} }, Ts = 0, As = (a, e, t) => {
  const s = t.find((o) => o.id === e.dataId), m = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", m);
}, Is = { title: "アイテム", options: { consumable: "消耗品" } }, _s = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Cs = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, Rs = (a = {}) => ({
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
}), Ss = (a = {}) => ({
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
}), ys = "data", Ns = "actor", Ms = "map", gs = "enemy", bs = "state", Os = "skill", us = "item", Ls = "weapon", ks = "armor", Ps = "class", vs = "common_event", Ds = "troop", $a = {
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
}, hs = () => ({ rpg: { damage: Ka, data: Xa, traits: Qa, itemEffect: Ja }, global: $a }), fs = (a, e = 0) => ({ code: ca, parameters: [a.actorId, a.name], indent: e }), Fs = (a, e = 0) => ({
  code: Ea,
  parameters: [a.actorId, a.nickname],
  indent: e
}), Gs = (a, e = 0) => ({ code: Ta, parameters: [a.actorId, a.profile], indent: e }), C = { direct: 0, variable: 1 }, Bs = (a, e = 0) => ({
  code: oa,
  indent: e,
  parameters: da(0, a)
}), Us = (a, e = 0) => ({ code: oa, indent: e, parameters: da(1, a) }), Hs = (a, e = 0) => ({ code: ia, indent: e, parameters: P(0, a) }), xs = (a, e = 0) => ({
  code: ia,
  indent: e,
  parameters: P(1, a)
}), Vs = (a, e = 0) => ({ code: na, indent: e, parameters: P(0, a) }), ws = (a, e = 0) => ({
  code: na,
  indent: e,
  parameters: P(1, a)
}), P = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value], da = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value, e.allowDeath], Ys = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), Ws = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), qs = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), Xs = (a = 0) => ({ code: 244, indent: a, parameters: [] }), Ks = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), zs = (a, e) => E(a, r({ name: e })), E = (a, e, t = 0) => ({
  code: a,
  parameters: [r(e)],
  indent: t
}), js = (a, e = 0) => E(Aa, a, e), Qs = (a, e = 0) => E(Ia, a, e), Zs = (a, e = 0) => E(_a, a, e), Js = (a, e = 0) => E(Ca, a, e), $s = (a, e = 0) => E(Ra, a, e), ar = (a, e = 0) => E(Sa, a, e), er = (a, e = 0) => E(ya, a, e), tr = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), sr = 0, rr = 1, mr = 2, or = (a) => a.parameters[0] === 1, nr = ({ troopId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({
  code: h,
  indent: s,
  parameters: [0, a, e, t]
}), ir = ({ variableId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({ code: h, indent: s, parameters: [1, a, e, t] }), dr = ({ canEscape: a = !1, canLose: e = !1 }, t = 0) => ({
  code: h,
  indent: t,
  parameters: [2, 0, a, e]
}), ae = { plus: 0, minus: 1 }, pr = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [ae[a ?? "plus"] ?? 0, e ?? 0] });
function lr(a, e = 0) {
  return {
    code: 336,
    parameters: [a.enemyId, a.newEnemyId],
    indent: e
  };
}
const cr = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), Er = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 0, a.stateId] }), Tr = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 1, a.stateId]
}), Ar = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 0, a.stateId] }), Ir = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [-1, 1, a.stateId]
}), _r = (a = 0) => ({ code: 334, indent: a, parameters: [0] }), Cr = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), Rr = (a, e = 0) => ({ code: Na, indent: e, parameters: ee(a ?? {}) }), Sr = (a) => ({
  eventId: a[0]
}), ee = (a) => [a.eventId ?? 0], yr = (a) => ({ min: a[0], max: a[1], value: a[2] }), te = (a) => [a.min, a.max, a.value], Nr = (a, e = 0) => ({ code: Ma, indent: e, parameters: te(a) }), Mr = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), gr = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], br = (a) => ({ variableId: a[0], maxDigits: a[1] }), Or = (a) => a.parameters[3] === A, ur = (a) => ({
  operation: a[1],
  itemId: a[0],
  value: a[3],
  operand: a[2]
}), Lr = (a, e = 0) => ({ code: M, indent: e, parameters: [a.itemId, a.operation, a.operand, a.value] }), kr = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [a.itemId, R, S, a.value]
}), Pr = (a, e = 0) => ({ code: M, indent: e, parameters: [a.itemId, R, A, a.variableId] }), vr = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [a.itemId, y, S, a.value]
}), Dr = (a, e = 0) => ({ code: M, indent: e, parameters: [a.itemId, y, A, a.variableId] }), hr = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), fr = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), Fr = (a, e = 0) => ({ code: g, indent: e, parameters: [a.weaponId, R, S, a.value, !1] }), Gr = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.weaponId, R, A, a.variableId, !1]
}), Br = (a, e = 0) => ({ code: g, indent: e, parameters: [a.weaponId, y, S, a.value, !1] }), Ur = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.weaponId, y, A, a.variableId, !1]
}), Hr = (a, e = 0) => ({ code: k, indent: e, parameters: [a.armorId, R, S, a.value, !1] }), xr = (a, e = 0) => ({
  code: k,
  indent: e,
  parameters: [a.armorId, R, A, a.variableId, !1]
}), Vr = (a, e = 0) => ({ code: k, indent: e, parameters: [a.armorId, y, S, a.value, !1] }), wr = (a, e = 0) => ({
  code: k,
  indent: e,
  parameters: [a.armorId, y, A, a.variableId, !1]
}), Yr = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), Wr = (a) => ({ variableId: a[0], itemType: a[1] }), qr = (a = 0) => ({
  code: 135,
  parameters: [1],
  indent: a
}), Xr = (a = 0) => ({ code: 135, parameters: [0], indent: a }), Kr = (a = 0) => ({ code: 134, parameters: [1], indent: a }), zr = (a = 0) => ({ code: 134, parameters: [0], indent: a }), jr = (a = 0) => ({
  code: 137,
  parameters: [1],
  indent: a
}), Qr = (a = 0) => ({ code: 137, parameters: [0], indent: a }), pa = (a) => [a], Zr = (a) => ({ comment: a[0] }), se = (a, e = 0) => ({ code: ga, indent: e, parameters: pa(a) }), re = (a, e = 0) => ({
  code: ba,
  indent: e,
  parameters: pa(a)
}), Jr = (a, e = 0) => a.map((t, s) => s === 0 ? se(t, e) : re(t, e)), me = (a = {}) => [(a == null ? void 0 : a.speed) ?? 4, (a == null ? void 0 : a.skip) ?? !1], $r = (a) => ({ speed: a[0], skip: a[1] }), am = (a = {}, e = 0) => ({
  code: Oa,
  indent: e,
  parameters: me(a)
}), oe = (a = "") => [a], em = (a) => ({ content: a[0] }), tm = (a = "", e = 0) => ({ code: ua, indent: e ?? 0, parameters: oe(a) }), sm = (a, e = 0) => ({
  code: 402,
  indent: e,
  parameters: [(a == null ? void 0 : a.index) ?? 0, (a == null ? void 0 : a.name) ?? ""]
}), rm = (a) => ({ index: a[0], name: a[1] }), mm = (a) => [a.index ?? 0, a.name ?? ""], om = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), nm = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], im = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [(a == null ? void 0 : a.choices) ?? [], (a == null ? void 0 : a.cancelType) ?? 0, (a == null ? void 0 : a.defaultType) ?? 0, (a == null ? void 0 : a.positionType) ?? 2, (a == null ? void 0 : a.background) ?? 0]
}), dm = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), pm = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), lm = (a) => ({
  filename: a[0]
}), cm = ({ args: a = {}, commandName: e, commandTitle: t = "", pluginName: s }, m = 0) => ({ code: 357, indent: m, parameters: [s, e, t, { ...a }] }), Em = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), Tm = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), Am = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), Im = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), _m = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), Cm = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), Rm = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), Sm = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: m = 0, scaleX: o = 100, scaleY: i = 100, opacity: p = 255, blendMode: l = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, m, o, i, p, l]
}), ym = ({ pictureId: a, origin: e, x: t, y: s, scaleX: m, scaleY: o, opacity: i, blendMode: p, wait: l = !1, easingType: I = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, t, s, m, o, i, p, l, I]
}), Nm = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), Mm = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), gm = (a = 0) => ({ code: 221, indent: a, parameters: [] }), bm = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), Om = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), um = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), ne = (a, e = 0) => ({ code: La, indent: e, parameters: [a] }), ie = (a, e = 0) => ({
  code: ka,
  indent: e,
  parameters: [a]
}), Lm = (a, e = 0) => a.map((t, s) => s === 0 ? ne(t, e) : ie(t, e)), km = 1, Pm = 0, L = { item: 0, weapon: 1, armors: 2 }, vm = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map((s, m) => {
  const o = ((i) => i.customPrice !== void 0 && i.customPrice !== 0)(s) ? 1 : 0;
  return m === 0 ? { code: Pa, indent: t, parameters: [L[s.itemType] ?? L.item, s.id, o, s.customPrice ?? 0, e] } : {
    code: va,
    indent: t,
    parameters: [L[s.itemType] ?? L.item, s.id, o, s.customPrice ?? 0]
  };
}), Dm = 0, hm = 1, fm = 2, Fm = 3, Gm = 4, Bm = 5, Um = 0, Hm = 1, xm = 2, Vm = 3, wm = 4, Ym = 0, Wm = 1, qm = 2, Xm = (a) => a.parameters[2] === 1, de = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 1, e.variableId], Km = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: de(a, e, t.operation ?? 0)
}), zm = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 0] }), jm = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 1]
}), Qm = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 3] }), Zm = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 2]
}), Jm = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 4] }), $m = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 5]
}), ao = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 6] }), eo = (a, e = 0) => ({
  code: n,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 7]
}), to = (a, e = 0) => ({ code: n, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 8] }), so = (a, e = 0) => ({
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
}, ro = (a, e, t = {}) => ({ code: n, indent: t.indent ?? 0, parameters: le(a, e) }), le = (a, e) => [a.startId, a.endId ?? a.startId, 0, 3, 8, pe[e.param]], mo = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.hp;
    case 1:
      return a.mp;
    case 10:
      return a.tp;
  }
  return e[6] >= 2 && e[6] <= 9 ? a.param(e[6] - 2) : 0;
}, oo = (a, e) => {
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
}, ce = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], no = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: ce(a, e, t.operation ?? 0)
}), Ee = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], io = (a, e) => ({
  code: n,
  indent: 0,
  parameters: Ee(a, e, 0)
}), Te = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], po = (a, e, t = {}) => ({ code: n, indent: t.indent ?? 0, parameters: Te(a, e, t.operation ?? 0) }), Ae = {
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
}, Ie = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, Ae[e.param]], lo = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ie(a, e, t.operation ?? 0)
}), co = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: _e(a, e, t.operation ?? 0)
}), _e = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], Ce = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], Eo = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Ce(a, e, t.operation ?? 0)
}), Re = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 4, e.code], To = (a, e, t = {}) => ({
  code: n,
  indent: t.indent ?? 0,
  parameters: Re(a, e, t.operation ?? 0)
}), Se = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 1, e.weaponId], Ao = (a, e) => ({ code: n, indent: 0, parameters: Se(a, e, 0) }), Io = (a = 0) => ({ code: 206, indent: a, parameters: [] }), _o = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), Co = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, r(a.bgm)] }), Ro = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), So = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), yo = 0, No = 1, Mo = 2, ye = (a) => [...a], go = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: ye(a.parameters)
}), Ne = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", bo = (a) => a.parameters.every(Ne), Oo = "bgm", uo = "se", Lo = "me", ko = "bgs", Po = "battlebacks1", vo = "battlebacks2", Do = "characters", ho = "enemies", fo = "faces", Fo = "parallaxes", Go = "pictures", Bo = "sv_actors", Uo = "sv_enemies", Ho = "system", xo = "tilesets", Vo = "titles1", wo = "titles2", Yo = "System.json", Wo = "Actors.json", qo = "Classes.json", Xo = "Skills.json", Ko = "Items.json", zo = "Weapons.json", jo = "Armors.json", Qo = "Enemies.json", Zo = "Troops.json", Jo = "States.json", $o = "Animations.json", an = "Tilesets.json", en = "CommonEvents.json", tn = "MapInfos.json", sn = "data", rn = "img", mn = "audio", on = "js", Me = (a = {}) => ({
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
}), ge = (a = {}) => [r(a.cursor), r(a.ok), r(a.cancel), r(a.buzzer), r(a.equip), r(a.save), r(a.load), r(a.battleStart), r(a.escape), r(a.enemyAttack), r(a.enemyDamage), r(a.enemyCollapse), r(a.bossCollapes1), r(a.bossCollapes2), r(a.actorDamage), r(a.actorCollapse), r(a.playRecovery), r(a.playMiss), r(a.playEvasion), r(a.playMagicEvasion), r(a.playReflection), r(a.shop), r(a.useItem), r(a.useSkill)], be = (a) => ({
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
  skill: Le(a),
  equip: ke(a),
  status: Pe(a),
  formation: ve(a),
  save: De(a)
}), ue = (a) => a.menuCommands[0], Le = (a) => a.menuCommands[1], ke = (a) => a.menuCommands[2], Pe = (a) => a.menuCommands[3], ve = (a) => a.menuCommands[4], De = (a) => a.menuCommands[5], nn = (a) => a.itemCategories[0], dn = (a) => a.itemCategories[1], pn = (a) => a.itemCategories[2], ln = (a) => a.itemCategories[3], he = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], cn = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), fe = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], En = (a) => ({
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
}), Tn = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), An = (a) => ({
  armorTypes: T(a.armorTypes),
  elements: T(a.elements),
  equipTypes: T(a.equipTypes),
  weaponTypes: T(a.weaponTypes),
  skillTypes: T(a.skillTypes),
  variables: T(a.variables),
  switches: T(a.switches)
}), T = (a) => a ? [...a] : [], In = (a) => a.terms.params.map((e, t) => ({
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
}), _n = { title: "オプション", options: {
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
} }, Cn = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, Rn = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Sn = {
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
}, yn = (a = la({})) => ({
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
}), Nn = (a) => la({
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
}), la = (a) => {
  var t, s, m, o, i, p, l, I, b, O, u, G, B, U, H, x, V, w, Y, W, q, X, K, z, j, Q, Z, J, $, aa, ea;
  const e = He(a.size);
  return {
    ...Fe(a.options),
    titleCommandWindow: Ge(a.titleCommandWindow ?? {}),
    currencyUnit: ((t = a.texts) == null ? void 0 : t.currencyUnit) ?? "",
    gameTitle: ((s = a.texts) == null ? void 0 : s.gameTitle) ?? "",
    sounds: ge(a.sounds),
    editor: Be(a.editing),
    advanced: Me(a.advanced),
    title1Name: ((m = a.images) == null ? void 0 : m.title1Name) ?? "",
    title2Name: ((o = a.images) == null ? void 0 : o.title2Name) ?? "",
    armorTypes: c((i = a.dataNames) == null ? void 0 : i.armorTypes),
    equipTypes: c((p = a.dataNames) == null ? void 0 : p.equipTypes),
    elements: c((l = a.dataNames) == null ? void 0 : l.elements),
    skillTypes: c((I = a.dataNames) == null ? void 0 : I.skillTypes),
    weaponTypes: c((b = a.dataNames) == null ? void 0 : b.weaponTypes),
    switches: c((O = a.dataNames) == null ? void 0 : O.switches),
    variables: c((u = a.dataNames) == null ? void 0 : u.variables),
    magicSkills: c((G = a.battle) == null ? void 0 : G.magicSkills),
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
    testBattlers: xe((K = a.battleTest) == null ? void 0 : K.testBattlers, Ve),
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
    partyMembers: c((ea = a.gameInit) == null ? void 0 : ea.partyMembers),
    battlerHue: 0,
    menuCommands: fe(a.menuCommands)
  };
}, Ue = (a) => ({ basic: Ha(a.basic ?? {}), commands: Ua(a.commands ?? {}), params: Ba(a.params ?? {}), messages: Ga(a.messages ?? {}) }), c = (a) => a ? [...a] : [], He = (a) => a ? {
  tileSize: a.tileSize ?? 48,
  faceSize: a.faceSize ?? 144,
  iconSize: a.iconSize ?? 32
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, xe = (a, e) => a ? a.map(e) : [], Ve = (a) => a ? {
  actorId: a.actorId,
  equips: c(a.equips),
  level: a.level
} : { actorId: 0, equips: [], level: 1 }, Mn = (a) => ({ ...a.text ? { text: a.text } : {}, ...a.desc ? { desc: a.desc } : {} }), gn = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, bn = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  Ln as ABORT_BATTLE,
  sr as BATTLE_DIRECT,
  mr as BATTLE_ENCOUNT,
  h as BATTLE_PROCESSING,
  rr as BATTLE_VARIABLE,
  kn as CHANGE_ACTOR_IMAGES,
  Pn as CHANGE_ACTOR_STATE,
  k as CHANGE_ARMORS,
  vn as CHANGE_BATTLE_BACKGROUND,
  Ra as CHANGE_BATTLE_BGM,
  Dn as CHANGE_CLASS,
  ya as CHANGE_DEFEAT_ME,
  hn as CHANGE_ENCOUNTER,
  fn as CHANGE_ENEMY_HP,
  Fn as CHANGE_ENEMY_MP,
  Gn as CHANGE_ENEMY_STATE,
  Bn as CHANGE_ENEMY_TP,
  Un as CHANGE_EXP,
  Hn as CHANGE_FORMATION_ACCESS,
  xn as CHANGE_GOLD,
  oa as CHANGE_HP,
  M as CHANGE_ITEMS,
  Vn as CHANGE_MAP_NAME_DISPLAY,
  wn as CHANGE_MENU_ACCESS,
  na as CHANGE_MP,
  ca as CHANGE_NAME,
  Ea as CHANGE_NICKNAME,
  Yn as CHANGE_PARALLAX,
  Wn as CHANGE_PARAMETER,
  qn as CHANGE_PARTY_MEMBER,
  Xn as CHANGE_PLAYER_FOLLOWERS,
  Ta as CHANGE_PROFILE,
  Kn as CHANGE_SAVE_ACCESS,
  zn as CHANGE_SKILL,
  jn as CHANGE_TILESET,
  ia as CHANGE_TP,
  Qn as CHANGE_TRANSPARENCY,
  Zn as CHANGE_VEHICLE_BGM,
  Jn as CHANGE_VEHICLE_IMAGE,
  Sa as CHANGE_VICTORY_ME,
  g as CHANGE_WEAPONS,
  $n as CHANGE_WINDOW_COLOR,
  ai as COLLAPS_BOSS,
  ei as COLLAPS_INSTANT,
  ti as COLLAPS_NONE,
  si as COLLAPS_NORMAL,
  ba as COMMENT_BODY,
  ga as COMMENT_HEAD,
  Na as COMMON_EVENT,
  ri as CONDITIONAL_BRANCH,
  mi as CONDITIONAL_BRANCH_ELSE,
  oi as CONTROL_SELF_SWITCH,
  Ma as CONTROL_SWITCHES,
  ni as CONTROL_TIMER,
  n as CONTROL_VARIABLES,
  km as CUSTOM_PRICE,
  Ka as DEFAULT_DAMAGE_LABELS,
  $a as DEFAULT_GLOBAL_LABELS,
  Is as DEFAULT_ITEM_LABELS,
  _s as DEFAULT_SKILL_LABELS,
  _n as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Cn as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Cs as DEFAULT_USABLE_ITEM_LABELS,
  gn as DIRECTION,
  ii as EFFECT_ADD_BUFF,
  di as EFFECT_ADD_DEBUFF,
  pi as EFFECT_ADD_STATE,
  li as EFFECT_COMMON_EVENT,
  ci as EFFECT_GAIN_TP,
  Ei as EFFECT_GROW,
  Ti as EFFECT_LEARN_SKILL,
  Ai as EFFECT_RECOVER_HP,
  Ii as EFFECT_RECOVER_MP,
  _i as EFFECT_REMOVE_BUFF,
  Ci as EFFECT_REMOVE_DEBUFF,
  Ri as EFFECT_REMOVE_STATE,
  Si as EFFECT_SPECIAL,
  yi as ENEMY_APPEAR,
  Ni as ENEMY_RECOVER_ALL,
  Mi as ENEMY_TRANSFORM,
  gi as ERASE_EVENT,
  bi as ERASE_PICTURE,
  Oi as EXIT_EVENT_PROCESSING,
  ui as EXTRA_PARAM_CEV,
  Li as EXTRA_PARAM_CNT,
  ki as EXTRA_PARAM_CRI,
  Pi as EXTRA_PARAM_EVA,
  vi as EXTRA_PARAM_HIT,
  Di as EXTRA_PARAM_HRG,
  hi as EXTRA_PARAM_MEV,
  fi as EXTRA_PARAM_MRF,
  Fi as EXTRA_PARAM_MRG,
  Gi as EXTRA_PARAM_TRG,
  Bi as FADEIN_SCREEN,
  Ui as FADEOUT_BGM,
  Hi as FADEOUT_BGS,
  xi as FADEOUT_SCREEN,
  Wo as FILENAME_ACTORS,
  $o as FILENAME_ANIMATIONS,
  jo as FILENAME_ARMORS,
  qo as FILENAME_CLASSES,
  en as FILENAME_COMMON_EVENTS,
  Qo as FILENAME_ENEMIES,
  Ko as FILENAME_ITEMS,
  tn as FILENAME_MAP_INFOS,
  Xo as FILENAME_SKILLS,
  Jo as FILENAME_STATES,
  Yo as FILENAME_SYSTEM,
  an as FILENAME_TILESET,
  Zo as FILENAME_TROOPS,
  zo as FILENAME_WEAPONS,
  Vi as FLAG_ID_AUTO_BATTLE,
  wi as FLAG_ID_GUARD,
  Yi as FLAG_ID_PRESERVE_TP,
  Wi as FLAG_ID_SUBSTITUTE,
  qi as FLASH_SCREEN,
  mn as FOLDER_AUDIO,
  Oo as FOLDER_AUDIO_BGM,
  ko as FOLDER_AUDIO_BGS,
  Lo as FOLDER_AUDIO_ME,
  uo as FOLDER_AUDIO_SE,
  sn as FOLDER_DATA,
  rn as FOLDER_IMG,
  Po as FOLDER_IMG_BATTLEBACK1,
  vo as FOLDER_IMG_BATTLEBACK2,
  Do as FOLDER_IMG_CHACTERS,
  ho as FOLDER_IMG_ENEMIES,
  fo as FOLDER_IMG_FACES,
  Fo as FOLDER_IMG_PARALLACES,
  Go as FOLDER_IMG_PICTURES,
  Bo as FOLDER_IMG_SV_ACTORS,
  Uo as FOLDER_IMG_SV_ENEMIES,
  Ho as FOLDER_IMG_SYSTEM,
  xo as FOLDER_IMG_TILESETS,
  Vo as FOLDER_IMG_TITLES1,
  wo as FOLDER_IMG_TITLES2,
  on as FOLDER_JS,
  Xi as FORCE_ACTION,
  Ki as GAME_OVER,
  zi as GATHER_FOLLOWERS,
  ji as GET_LOCATION_INFO,
  Qi as GET_ONOFF_VEHICLE,
  ls as HITTYPE_CERTAIN,
  Es as HITTYPE_MAGICAL,
  cs as HITTYPE_PHYSICAL,
  Zi as INPUT_NUMBER,
  Ji as LABEL,
  ps as LABELS_DATA_WEAPON,
  Rn as LABELS_SYSTEM_BATTLER_PARAMS,
  Sn as LABELS_SYSTEM_GAME_COMMANDS,
  $i as LABEL_JUMP,
  Xa as LABEL_SET_DATA,
  Ja as LABEL_SET_ITEM_EFFECT,
  Qa as LABEL_SET_TRAIT,
  ad as LOOP,
  ed as LOOP_BREAK,
  ys as MODULE_DATA,
  td as MOVE_PICTURE,
  sd as NAME_INPUT_PROCESSING,
  Pm as NORMAL_PRICE,
  rd as NO_OPERATION,
  md as OPEN_MENU_SCREEN,
  od as OPEN_SAVE_SCREEN,
  Um as OPERAND_CONSTANT,
  Vm as OPERAND_GAMEDATA,
  xm as OPERAND_RANDOM,
  wm as OPERAND_SCRIPT,
  Hm as OPERAND_VARIABLE,
  hm as OPERATION_ADD,
  Gm as OPERATION_DIVIDE,
  Bm as OPERATION_MOD,
  Fm as OPERATION_MULTIPLY,
  Dm as OPERATION_SET,
  fm as OPERATION_SUBTRACT,
  nd as PARTY_ABILITY_CANCEL_SURPRISE,
  id as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  dd as PARTY_ABILITY_ENCOUNTER_HALF,
  pd as PARTY_ABILITY_ENCOUNTER_NONE,
  ld as PARTY_ABILITY_GOLD_DOUBLE,
  cd as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Aa as PLAY_BGM,
  Ia as PLAY_BGS,
  _a as PLAY_ME,
  Ed as PLAY_MOVIE,
  Ca as PLAY_SE,
  Td as PLUGIN_COMMAND_MV,
  Ad as PLUGIN_COMMAND_MZ,
  Id as RECOVER_ALL,
  _d as REGULAR_PARAM_AGI,
  Cd as REGULAR_PARAM_ATK,
  Rd as REGULAR_PARAM_DEF,
  Sd as REGULAR_PARAM_LUK,
  yd as REGULAR_PARAM_MATK,
  Nd as REGULAR_PARAM_MAX_HP,
  Md as REGULAR_PARAM_MAX_MP,
  gd as REGULAR_PARAM_MDEF,
  bd as RESUME_BGM,
  Od as RETURN_TO_TITLE_SCREEN,
  ud as ROTATE_PICTURE,
  Wt as ROUTE_CHANGE_BLEND_MODE,
  vt as ROUTE_CHANGE_FREQ,
  wt as ROUTE_CHANGE_IMAGE,
  Yt as ROUTE_CHANGE_OPACITY,
  Pt as ROUTE_CHANGE_SPEED,
  Bt as ROUTE_DIR_FIX_OFF,
  Gt as ROUTE_DIR_FIX_ON,
  et as ROUTE_END,
  At as ROUTE_JUMP,
  ct as ROUTE_MOVE_AWAY,
  Tt as ROUTE_MOVE_BACKWARD,
  tt as ROUTE_MOVE_DOWN,
  Et as ROUTE_MOVE_FORWARD,
  st as ROUTE_MOVE_LEFT,
  ot as ROUTE_MOVE_LOWER_L,
  nt as ROUTE_MOVE_LOWER_R,
  pt as ROUTE_MOVE_RANDOM,
  rt as ROUTE_MOVE_RIGHT,
  lt as ROUTE_MOVE_TOWARD,
  mt as ROUTE_MOVE_UP,
  it as ROUTE_MOVE_UPPER_L,
  dt as ROUTE_MOVE_UPPER_R,
  qt as ROUTE_PLAY_SE,
  Xt as ROUTE_SCRIPT,
  Ft as ROUTE_STEP_ANIME_OFF,
  ft as ROUTE_STEP_ANIME_ON,
  kt as ROUTE_SWITCH_OFF,
  Lt as ROUTE_SWITCH_ON,
  Ht as ROUTE_THROUGH_OFF,
  Ut as ROUTE_THROUGH_ON,
  Vt as ROUTE_TRANSPARENT_OFF,
  xt as ROUTE_TRANSPARENT_ON,
  Mt as ROUTE_TURN_180D,
  Nt as ROUTE_TURN_90D_L,
  yt as ROUTE_TURN_90D_R,
  gt as ROUTE_TURN_90D_R_L,
  ut as ROUTE_TURN_AWAY,
  _t as ROUTE_TURN_DOWN,
  Ct as ROUTE_TURN_LEFT,
  bt as ROUTE_TURN_RANDOM,
  Rt as ROUTE_TURN_RIGHT,
  Ot as ROUTE_TURN_TOWARD,
  St as ROUTE_TURN_UP,
  It as ROUTE_WAIT,
  ht as ROUTE_WALK_ANIME_OFF,
  Dt as ROUTE_WALK_ANIME_ON,
  Ld as SAVE_BGM,
  ds as SCHEMA_DATA_WEAPON,
  La as SCRIPT_EVAL,
  ka as SCRIPT_EVAL_BODY,
  kd as SCROLL_MAP,
  Pd as SELECT_ITEM,
  vd as SET_EVENT_LOCATION,
  Dd as SET_MOVEMENT_ROUTE,
  hd as SET_VEHICLE_LOCATION,
  fd as SET_WEATHER_EFFECT,
  Fd as SHAKE_SCREEN,
  Pa as SHOP_PROCESSING,
  va as SHOP_PROCESSING_BODY,
  Gd as SHOW_ANIMATION,
  Bd as SHOW_BALLOON_ICON,
  Ud as SHOW_BATTLE_ANIMATION,
  Hd as SHOW_CHOICES,
  xd as SHOW_CHOICES_ITEM,
  Vd as SHOW_MESSAGE,
  wd as SHOW_MESSAGE_BODY,
  Yd as SHOW_PICTURE,
  Oa as SHOW_SCROLLING_TEXT,
  ua as SHOW_SCROLLING_TEXT_BODY,
  Wd as SKIP,
  Ts as SPECIAL_EFFECT_ESCAPE,
  qd as SPECIAL_PARAM_EXR,
  Xd as SPECIAL_PARAM_FDR,
  Kd as SPECIAL_PARAM_GRD,
  zd as SPECIAL_PARAM_MCR,
  jd as SPECIAL_PARAM_MDR,
  Qd as SPECIAL_PARAM_PDR,
  Zd as SPECIAL_PARAM_PHA,
  Jd as SPECIAL_PARAM_REC,
  $d as SPECIAL_PARAM_TCR,
  ap as SPECIAL_PARAM_TGR,
  Ns as SRC_DATA_ACTOR,
  ks as SRC_DATA_ARMOR,
  Ps as SRC_DATA_CLASS,
  vs as SRC_DATA_COMMON_EVNET,
  gs as SRC_DATA_ENEMY,
  us as SRC_DATA_ITEMS,
  Ms as SRC_DATA_MAP,
  Os as SRC_DATA_SKILL,
  bs as SRC_DATA_STATE,
  Ds as SRC_DATA_TROOP,
  Ls as SRC_DATA_WEAPON,
  ep as STOP_SE,
  tp as TINT_PICTURE,
  sp as TINT_SCREEN,
  rp as TRAIT_ACTION_PLUS,
  mp as TRAIT_ATTACK_ELEMENT,
  op as TRAIT_ATTACK_SKILL,
  np as TRAIT_ATTACK_SPEED,
  ip as TRAIT_ATTACK_STATE,
  dp as TRAIT_ATTACK_TIMES,
  pp as TRAIT_COLLAPSE_TYPE,
  lp as TRAIT_DEBUFF_RATE,
  cp as TRAIT_ELEMENT_RATE,
  Ep as TRAIT_EQUIP_ARMOR_TYPE,
  Tp as TRAIT_EQUIP_LOCK,
  Ap as TRAIT_EQUIP_SEAL,
  Ip as TRAIT_EQUIP_WEAPON_TYPE,
  _p as TRAIT_PARAM,
  Cp as TRAIT_PARTY_ABILITY,
  Rp as TRAIT_SKILL_ADD,
  Sp as TRAIT_SKILL_SEAL,
  yp as TRAIT_SKILL_TYPE_ADD,
  Np as TRAIT_SKILL_TYPE_SEAL,
  Mp as TRAIT_SLOT_TYPE,
  gp as TRAIT_SPARAM,
  bp as TRAIT_SPECIAL_FLAG,
  Op as TRAIT_STATE_RATE,
  up as TRAIT_STATE_RESIST,
  Lp as TRAIT_XPARAM,
  kp as TRANSFER_PLAYER,
  qm as TYPE_ARMOR,
  Ym as TYPE_ITEM,
  Wm as TYPE_WEAPON,
  Mo as VEHICLE_AIRSHIP,
  yo as VEHICLE_BOAT,
  No as VEHICLE_SHIP,
  Pp as WAIT,
  vp as buildNoteFromNormalized,
  dm as cloneChoices,
  go as cloneEventCommand,
  ye as cloneParameters,
  Dp as collapsOptionsToArray,
  Zr as convertCommentArrayToObject,
  Fa as convertTermsMessageMZtoMV,
  je as createActorControlChars,
  f as createControlCharFormat,
  Oe as createMenuCommandState,
  hp as createNoteEntity,
  Qe as createSystemVariableControlChars,
  fp as defineGameDataSources,
  Fp as defineSystemItems,
  Gp as defineTraitCollapseType,
  Bp as defineTraitExtraParam,
  Up as defineTraitItems,
  Hp as defineTraitPartyAbility,
  xp as defineTraitRegularParam,
  Vp as defineTraitSpecialFlag,
  wp as defineTraitSpecialParam,
  Yp as extraParamName,
  Wp as extraParamsToArray,
  bn as extractFileName,
  As as formatItemEffectText,
  ns as formatTraitText,
  ur as fromArrayChangeItems,
  hr as fromArrayChangeWeapons,
  Sr as fromArrayCommonEvent,
  yr as fromArrayControlSwitches,
  cr as fromArrayEnemyTransform,
  br as fromArrayInputNumber,
  lm as fromArrayPlayMovie,
  Em as fromArrayPluginCommandMZ,
  em as fromArrayScrollingTextBody,
  $r as fromArrayScrollingTextHeader,
  Wr as fromArraySelectItem,
  om as fromArraySetupChoice,
  rm as fromArraySetupChoiceItem,
  qp as fromArrayShowMessageHeader,
  Ke as fromStringArray,
  oo as getActorValue,
  pn as getArmorCategoryEnabled,
  Xp as getArmorTypes,
  ze as getControlChars,
  Kp as getElementTypes,
  mo as getEnemyValue,
  ke as getEquipCommandEnabled,
  zp as getEquipTypes,
  ve as getFormationCommandEnabled,
  nn as getItemCategoryEnabled,
  ue as getItemCommandEnabled,
  jp as getItemIdFromItemCommand,
  ln as getKeyItemCategoryEnabled,
  Qp as getNoteValue,
  In as getParamNames,
  De as getSaveCommandEnabled,
  Le as getSkillCommandEnabled,
  Zp as getSkillTypes,
  Pe as getStatusCommandEnabled,
  Jp as getSwitches,
  $p as getVariableNames,
  dn as getWeaponCategoryEnabled,
  al as getWeaponTypes,
  bo as isCloneableCommand,
  or as isCommandBattleProcessingVariable,
  Xm as isCommandOperandVariables,
  el as isUsingVariableItemCommand,
  Or as isUsingVaribleCommandChangingItems,
  hs as labelsRegistry,
  $t as makeActorData,
  es as makeArmorData,
  zs as makeAudioCommand,
  $e as makeBattleEventPage,
  Fe as makeBooleanOptions,
  ts as makeClassData,
  Ar as makeCommandAddEachEnemyState,
  Er as makeCommandAddEnemyState,
  Tm as makeCommandAddPartyMember,
  E as makeCommandAudioAny,
  nr as makeCommandBattleProcessingDirect,
  dr as makeCommandBattleProcessingEncount,
  ir as makeCommandBattleProcessingVariable,
  Xe as makeCommandChangeActorImages,
  fs as makeCommandChangeActorName,
  Fs as makeCommandChangeActorNickName,
  Gs as makeCommandChangeActorProfile,
  $s as makeCommandChangeBattleBGM,
  er as makeCommandChangeDefeatME,
  Lr as makeCommandChangeItems,
  Co as makeCommandChangeVehicleBGM,
  _o as makeCommandChangeVehicleImage,
  ar as makeCommandChangeVictoryME,
  fr as makeCommandChangeWeapons,
  re as makeCommandCommentBody,
  se as makeCommandCommentHeader,
  Rr as makeCommandCommonEvent,
  Nr as makeCommandControlSwitches,
  pr as makeCommandControlTimer,
  jr as makeCommandDisableFormationAccess,
  qr as makeCommandDisableMenuAccess,
  Kr as makeCommandDisableSaveAccess,
  Qr as makeCommandEnableFormationAccess,
  Xr as makeCommandEnableMenuAccess,
  zr as makeCommandEnableSaveAccess,
  Cr as makeCommandEnemyRecoverAll,
  _r as makeCommandEnemyRecoverAllEach,
  lr as makeCommandEnemyTransform,
  Mm as makeCommandFadeInScreen,
  Ws as makeCommandFadeOutBGM,
  Ks as makeCommandFadeOutBGS,
  gm as makeCommandFadeOutScreen,
  bm as makeCommandFlashScreen,
  Bs as makeCommandGainActorHP,
  Vs as makeCommandGainActorMP,
  Hs as makeCommandGainActorTP,
  Hr as makeCommandGainArmor,
  xr as makeCommandGainArmorByVariable,
  Im as makeCommandGainGold,
  Cm as makeCommandGainGoldByVariable,
  kr as makeCommandGainItem,
  Pr as makeCommandGainItemV,
  Fr as makeCommandGainWeapon,
  Gr as makeCommandGainWeaponV,
  Io as makeCommandGetOnOffVehicle,
  Mr as makeCommandInputNumber,
  Us as makeCommandLoseActorHP,
  ws as makeCommandLoseActorMP,
  xs as makeCommandLoseActorTP,
  Vr as makeCommandLoseArmor,
  wr as makeCommandLoseArmorByVariable,
  _m as makeCommandLoseGold,
  Rm as makeCommandLoseGoldByVariable,
  vr as makeCommandLoseItem,
  Dr as makeCommandLoseItemV,
  Br as makeCommandLoseWeapon,
  Ur as makeCommandLoseWeaponV,
  ym as makeCommandMovePicture,
  js as makeCommandPlayBGM,
  Qs as makeCommandPlayBGS,
  Zs as makeCommandPlayME,
  pm as makeCommandPlayMovie,
  Js as makeCommandPlaySE,
  cm as makeCommandPluginCommandMZ,
  We as makeCommandRecoverAll,
  qe as makeCommandRecoverAllTarget,
  Ir as makeCommandRemoveEachEnemyState,
  Tr as makeCommandRemoveEnemyState,
  Am as makeCommandRemovePartyMember,
  Xs as makeCommandResumeBGM,
  qs as makeCommandSaveBGM,
  Lm as makeCommandScriptArray,
  ie as makeCommandScriptBody,
  ne as makeCommandScriptHeader,
  tm as makeCommandScrollingTextBody,
  am as makeCommandScrollingTextHeader,
  Yr as makeCommandSelectItem,
  Ro as makeCommandSetVehicleLocation,
  So as makeCommandSetVehicleLocationFromVariables,
  Nm as makeCommandSetWeatherEffect,
  im as makeCommandSetupChoice,
  Om as makeCommandShakeScreen,
  vm as makeCommandShopProcessing,
  Ys as makeCommandShowAnimation,
  tr as makeCommandShowBalloonIcon,
  sm as makeCommandShowChoiceItem,
  tl as makeCommandShowMessage,
  sl as makeCommandShowMessageBody,
  Sm as makeCommandShowPicture,
  eo as makeCommandSystemBattleCount,
  so as makeCommandSystemEscapeCount,
  ao as makeCommandSystemSaveCount,
  $m as makeCommandSystemTimer,
  to as makeCommandSystemWinCount,
  um as makeCommandTintScreen,
  no as makeCommandVariableFromActorStatusData,
  io as makeCommandVariableFromArmor,
  po as makeCommandVariableFromConstant,
  lo as makeCommandVariableFromEnemyData,
  co as makeCommandVariableFromItemData,
  zm as makeCommandVariableFromMapId,
  Zm as makeCommandVariableFromPartyGold,
  jm as makeCommandVariableFromPartyMembers,
  Qm as makeCommandVariableFromPartySteps,
  Jm as makeCommandVariableFromPlaytime,
  Eo as makeCommandVariableFromRandom,
  To as makeCommandVariableFromScript,
  ro as makeCommandVariableFromTempLastData,
  Km as makeCommandVariableFromVariable,
  Ao as makeCommandVariableFromWeapon,
  pa as makeCommentArray,
  Jr as makeCommentCommandArray,
  Ze as makeCommonEventData,
  F as makeDamage,
  An as makeDataNames,
  ja as makeDropItem,
  Be as makeEditorSetting,
  rs as makeEnemyAction,
  ms as makeEnemyData,
  Ya as makeEventPageCondition,
  Tn as makeGameInitial,
  he as makeItemCategories,
  cn as makeItemCategoriesFromArray,
  Rs as makeItemData,
  Qt as makeMapData,
  Kt as makeMapEvent,
  Wa as makeMapEventIamge,
  zt as makeMapEventPage,
  jt as makeMapFileInfo,
  Zt as makeMapInfoData,
  fe as makeMenuCommandsEnabled,
  En as makeMenuCommandsEnabledFromArray,
  za as makeParamArray,
  Ba as makeParamNamesArray,
  Da as makeParamNamesFromArray,
  Ss as makeSkillData,
  ge as makeSoundsArray,
  be as makeSoundsObject,
  os as makeStateData,
  Me as makeSystemAdvanced,
  la as makeSystemData,
  Nn as makeSystemDataFromMV,
  yn as makeSystemDataMV,
  Ha as makeTermsBasic,
  fa as makeTermsBasicFromArray,
  Ua as makeTermsCommandArray,
  rl as makeTermsCommandArrayWithNulls,
  ha as makeTermsCommandFromArray,
  Ga as makeTermsMessages,
  Ge as makeTitleCommandWindow,
  Je as makeTroopData,
  wa as makeTroopEventConditions,
  at as makeTroopMember,
  D as makeVehicleData,
  is as makeWeaponData,
  as as normalizeDataActor,
  ml as normalizeNote,
  ss as paramArrayToObject,
  ol as partyAbilityToArray,
  nl as readNote,
  il as readNoteEx,
  dl as readNoteObject,
  pl as regularParamName,
  ll as regularParamsToArray,
  cl as replaceNote,
  El as replaceNoteWithHandlers,
  Jt as repleaceMapEventCommands,
  Tl as resolveItemEffectLabels,
  Al as resolveTraitLabels,
  Il as setNoteValue,
  _l as specialFlagToArray,
  Cl as specialParamName,
  Rl as specialParamsToArray,
  Mn as textAndDesc,
  ee as toArrayCommonEvent,
  te as toArrayControlSwitches,
  gr as toArrayInputNumber,
  ce as toArrayOperandActorStatus,
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
  nm as toArraySetupChoice,
  mm as toArraySetupChoiceItem,
  Sl as toArrayShowMessageHeader
};
