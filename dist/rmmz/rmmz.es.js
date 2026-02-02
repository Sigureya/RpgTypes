import { aH as ca, aL as la, aM as Ea, az as na, aA as oa, aB as ia, ag as Aa, ak as Ta, am as Ia, an as _a, H as Ca, J as Ra, R as Sa, av as F, s as ya, w as Na, B as O, c_ as R, d0 as S, d1 as T, c$ as y, D as g, F as P, C as Oa, l as ga, j as Ma, k as La, a$ as ua, b0 as ba, aw as Pa, ax as ka, x as o, cZ as Da, cS as va, cW as Fa, cU as fa } from "../shared/make.es2.js";
import { aV as Ro, aJ as So, aE as yo, as as No, aI as Oo, O as go, aN as Mo, aO as Lo, aP as uo, aX as bo, aD as Po, P as ko, A as Do, aq as vo, M as Fo, at as fo, aF as ho, G as Go, a2 as Uo, K as Bo, aG as Ho, ar as xo, _ as Vo, T as wo, aK as Yo, Q as Wo, bx as Xo, by as qo, bz as Ko, bw as zo, o as jo, p as Qo, y as Jo, z as Zo, ct as $o, cu as ai, cr as ei, cA as ti, cq as si, cy as ri, cz as mi, co as ni, cp as oi, cv as ii, cw as di, cs as pi, cx as ci, aR as li, aQ as Ei, aS as Ai, a1 as Ti, ae as Ii, E as _i, bD as Ci, bG as Ri, bC as Si, bB as yi, bA as Ni, bH as Oi, bE as gi, bF as Mi, bI as Li, bJ as ui, a5 as bi, ah as Pi, al as ki, a4 as Di, ch as vi, ci as Fi, ck as fi, cj as hi, a7 as Gi, aU as Ui, aZ as Bi, a3 as Hi, au as xi, Z as Vi, I as wi, u as Yi, v as Wi, L as Xi, q as qi, ab as Ki, ay as zi, N as ji, aW as Qi, aY as Ji, cb as Zi, ce as $i, c9 as ad, ca as ed, cd as td, cc as sd, ap as rd, b1 as md, b2 as nd, aC as od, bT as id, bP as dd, bQ as pd, bU as cd, bR as ld, bN as Ed, bO as Ad, bS as Td, aj as Id, a_ as _d, ac as Cd, ai as Rd, X as Sd, h as yd, W as Nd, Y as Od, V as gd, af as Md, a8 as Ld, $ as ud, a0 as bd, aT as Pd, d as kd, e as Dd, S as vd, c as Fd, aa as fd, n as hd, c5 as Gd, c4 as Ud, bZ as Bd, c0 as Hd, c3 as xd, c2 as Vd, b$ as wd, b_ as Yd, c1 as Wd, bY as Xd, ao as qd, ad as Kd, a6 as zd, bq as jd, bc as Qd, bg as Jd, be as Zd, bd as $d, bf as ap, bs as ep, b6 as tp, b5 as sp, bm as rp, bn as mp, bo as np, bl as op, b9 as ip, bt as dp, bj as pp, bk as cp, bh as lp, bi as Ep, bp as Ap, bb as Tp, br as Ip, b7 as _p, b8 as Cp, ba as Rp, U as Sp, a9 as yp, cB as Np, bv as Op, cG as gp, b3 as Mp, cR as Lp, bu as up, bK as bp, b4 as Pp, cf as kp, bV as Dp, cl as vp, c6 as Fp, bM as fp, bL as hp, f as Gp, cP as Up, cL as Bp, cM as Hp, g as xp, cI as Vp, cN as wp, cQ as Yp, cK as Wp, cO as Xp, i as qp, m as Kp, a as zp, cT as jp, cV as Qp, cX as Jp, cY as Zp, cC as $p, cg as ac, cD as ec, cE as tc, cF as sc, bX as rc, bW as mc, cH as nc, b as oc, cn as ic, r as dc, cJ as pc, cm as cc, c8 as lc, c7 as Ec, t as Ac } from "../shared/make.es2.js";
import { c as ha, a as Ga, m as r } from "../shared/make.es.js";
const ke = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), De = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [1, a.targetSelectVariableId]
}), ve = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: m = "", battlerName: n = "" } = {}, i = 0) => ({
  code: 322,
  indent: i,
  parameters: [a, m, s, t, e, n]
}), f = (a, e) => `\\${a}[${e}]`, Fe = (a, e) => e.map((t, s) => ({ text: t, controlChar: f(a, s) })), fe = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e) => ({
  char: e[1],
  id: parseInt(e[2], 10)
})), he = (a) => a.map((e) => ({ text: e.name, controlChar: f("N", e.id) })), Ge = (a) => a.variables.map((e, t) => ({
  text: e || "",
  controlChar: f("V", t)
})).filter((e) => e.text !== ""), Ue = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", trigger: a.trigger ?? 0, list: a.list ?? [], switchId: a.switchId ?? 0 }), Be = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  members: a.members ?? [],
  pages: a.pages ?? []
}), He = (a) => ({ span: a.span ?? 0, conditions: Ua(a.conditions ?? {}), list: a.list ?? [] }), xe = (a = {}) => ({
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
}), Ve = 0, we = 1, Ye = 2, We = 3, Xe = 4, qe = 5, Ke = 6, ze = 7, je = 8, Qe = 9, Je = 10, Ze = 11, $e = 12, at = 13, et = 14, tt = 15, st = 16, rt = 17, mt = 18, nt = 19, ot = 20, it = 21, dt = 22, pt = 23, ct = 24, lt = 25, Et = 26, At = 27, Tt = 28, It = 29, _t = 30, Ct = 31, Rt = 32, St = 33, yt = 34, Nt = 35, Ot = 36, gt = 37, Mt = 38, Lt = 39, ut = 40, bt = 41, Pt = 42, kt = 43, Dt = 44, vt = 45, Ft = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: m = 0, y: n = 0 } = {}) => ({
  id: a,
  name: e,
  pages: t,
  note: s,
  x: m,
  y: n
}), Ha = ({ characterIndex: a = 0, characterName: e = "", direction: t = 2, pattern: s = 0, tileId: m = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: t,
  pattern: s,
  tileId: m
}), ft = ({ list: a = [], conditions: e = Ba(), image: t = Ha(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: n = {
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
  moveRoute: { list: n.list, repeat: n.repeat, skippable: n.skippable, wait: n.wait }
}), ht = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), Gt = (a = {}) => ({
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
}), Ut = (a = { id: 0 }) => {
  return { name: a.name ?? (e = a.id, e.toString().padStart(3, "0")), id: a.id, expanded: a.expanded ?? !1, order: a.order ?? 0, parentId: a.parentId ?? 0, scrollX: a.scrollX ?? 0, scrollY: a.scrollY ?? 0 };
  var e;
}, xa = {
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
}, Va = {
  title: "ダメージ",
  options: {}
}, h = (a = {}) => ({ type: a.type ?? 0, elementId: a.elementId ?? 0, formula: a.formula ?? "", variance: a.variance ?? 0, critical: a.critical ?? !1 }), Bt = (a = {}) => ({
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
}), Ht = (a) => ({
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
}), xt = (a = {}) => ({
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
}), Vt = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: [],
  note: a.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), wa = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: m = 0, mdf: n = 0, agi: i = 0, luk: p = 0 }) => [a, e, t, s, m, n, i, p], wt = (a) => {
  const [e, t, s, m, n, i, p, c] = a;
  return { mhp: e, mmp: t, atk: s, def: m, mat: n, mdf: i, agi: p, luk: c };
}, Ya = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), Yt = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), Wt = (a = {}) => {
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
    params: a.params ? [...a.params] : wa({
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
}, Xt = (a = {}) => ({
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
}), d = "{name}", _ = "{name} * {value}%", ta = "{name} + {value}%", sa = "{value}", Wa = { title: "特徴", options: {
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
} }, qt = (a, e, t) => {
  const s = ha(Xa);
  return Ga(e, t, s, a.pattern, (m) => m.dataId);
}, Kt = (a = {}) => ({
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
}), zt = {
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
}, jt = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Qt = 0, Jt = 1, Zt = 2, ra = "{name} {value1}%", D = "{value1}% + {value2}", ma = "{name} {value1}ターン", N = "{name}", qa = { title: "使用効果", options: {
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
} }, $t = 0, as = (a, e, t) => {
  const s = t.find((n) => n.id === e.dataId), m = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", m);
}, es = { title: "アイテム", options: { consumable: "消耗品" } }, ts = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, ss = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, rs = (a = {}) => ({
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
}), ms = (a = {}) => ({
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
}), ns = "data", os = "actor", is = "map", ds = "enemy", ps = "state", cs = "skill", ls = "item", Es = "weapon", As = "armor", Ts = "class", Is = "common_event", _s = "troop", Ka = {
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
}, Cs = () => ({ rpg: { damage: Va, data: xa, traits: Wa, itemEffect: qa }, global: Ka }), Rs = (a, e = 0) => ({ code: ca, parameters: [a.actorId, a.name], indent: e }), Ss = (a, e = 0) => ({
  code: la,
  parameters: [a.actorId, a.nickname],
  indent: e
}), ys = (a, e = 0) => ({ code: Ea, parameters: [a.actorId, a.profile], indent: e }), C = { direct: 0, variable: 1 }, Ns = (a, e = 0) => ({
  code: na,
  indent: e,
  parameters: da(0, a)
}), Os = (a, e = 0) => ({ code: na, indent: e, parameters: da(1, a) }), gs = (a, e = 0) => ({ code: ia, indent: e, parameters: k(0, a) }), Ms = (a, e = 0) => ({
  code: ia,
  indent: e,
  parameters: k(1, a)
}), Ls = (a, e = 0) => ({ code: oa, indent: e, parameters: k(0, a) }), us = (a, e = 0) => ({
  code: oa,
  indent: e,
  parameters: k(1, a)
}), k = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value], da = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value, e.allowDeath], bs = (a = {}, e = 0) => ({
  code: 212,
  indent: e,
  parameters: [a.characterId ?? 0, a.animationId ?? 0, a.waiting ?? !1]
}), Ps = (a, e = 0) => ({ code: 242, indent: e, parameters: [a.duration] }), ks = (a = 0) => ({
  code: 243,
  indent: a,
  parameters: []
}), Ds = (a = 0) => ({ code: 244, indent: a, parameters: [] }), vs = (a, e = 0) => ({ code: 246, indent: e, parameters: [a.duration] }), Fs = (a, e) => E(a, r({ name: e })), E = (a, e, t = 0) => ({
  code: a,
  parameters: [r(e)],
  indent: t
}), fs = (a, e = 0) => E(Aa, a, e), hs = (a, e = 0) => E(Ta, a, e), Gs = (a, e = 0) => E(Ia, a, e), Us = (a, e = 0) => E(_a, a, e), Bs = (a, e = 0) => E(Ca, a, e), Hs = (a, e = 0) => E(Ra, a, e), xs = (a, e = 0) => E(Sa, a, e), Vs = (a, e = 0) => ({
  code: 213,
  indent: e,
  parameters: [a.characterId, a.balloonId, a.waiting]
}), ws = 0, Ys = 1, Ws = 2, Xs = (a) => a.parameters[0] === 1, qs = ({ troopId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({
  code: F,
  indent: s,
  parameters: [0, a, e, t]
}), Ks = ({ variableId: a = 0, canEscape: e = !1, canLose: t = !1 }, s = 0) => ({ code: F, indent: s, parameters: [1, a, e, t] }), zs = ({ canEscape: a = !1, canLose: e = !1 }, t = 0) => ({
  code: F,
  indent: t,
  parameters: [2, 0, a, e]
}), za = { plus: 0, minus: 1 }, js = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [za[a ?? "plus"] ?? 0, e ?? 0] });
function Qs(a, e = 0) {
  return {
    code: 336,
    parameters: [a.enemyId, a.newEnemyId],
    indent: e
  };
}
const Js = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), Zs = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 0, a.stateId] }), $s = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 1, a.stateId]
}), ar = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 0, a.stateId] }), er = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [-1, 1, a.stateId]
}), tr = (a = 0) => ({ code: 334, indent: a, parameters: [0] }), sr = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), rr = (a, e = 0) => ({ code: ya, indent: e, parameters: ja(a ?? {}) }), mr = (a) => ({
  eventId: a[0]
}), ja = (a) => [a.eventId ?? 0], nr = (a) => ({ min: a[0], max: a[1], value: a[2] }), Qa = (a) => [a.min, a.max, a.value], or = (a, e = 0) => ({ code: Na, indent: e, parameters: Qa(a) }), ir = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), dr = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], pr = (a) => ({ variableId: a[0], maxDigits: a[1] }), cr = (a) => a.parameters[3] === T, lr = (a) => ({
  operation: a[1],
  itemId: a[0],
  value: a[3],
  operand: a[2]
}), Er = (a, e = 0) => ({ code: O, indent: e, parameters: [a.itemId, a.operation, a.operand, a.value] }), Ar = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.itemId, R, S, a.value]
}), Tr = (a, e = 0) => ({ code: O, indent: e, parameters: [a.itemId, R, T, a.variableId] }), Ir = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.itemId, y, S, a.value]
}), _r = (a, e = 0) => ({ code: O, indent: e, parameters: [a.itemId, y, T, a.variableId] }), Cr = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), Rr = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), Sr = (a, e = 0) => ({ code: g, indent: e, parameters: [a.weaponId, R, S, a.value, !1] }), yr = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.weaponId, R, T, a.variableId, !1]
}), Nr = (a, e = 0) => ({ code: g, indent: e, parameters: [a.weaponId, y, S, a.value, !1] }), Or = (a, e = 0) => ({
  code: g,
  indent: e,
  parameters: [a.weaponId, y, T, a.variableId, !1]
}), gr = (a, e = 0) => ({ code: P, indent: e, parameters: [a.armorId, R, S, a.value, !1] }), Mr = (a, e = 0) => ({
  code: P,
  indent: e,
  parameters: [a.armorId, R, T, a.variableId, !1]
}), Lr = (a, e = 0) => ({ code: P, indent: e, parameters: [a.armorId, y, S, a.value, !1] }), ur = (a, e = 0) => ({
  code: P,
  indent: e,
  parameters: [a.armorId, y, T, a.variableId, !1]
}), br = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), Pr = (a) => ({ variableId: a[0], itemType: a[1] }), kr = (a = 0) => ({
  code: 135,
  parameters: [1],
  indent: a
}), Dr = (a = 0) => ({ code: 135, parameters: [0], indent: a }), vr = (a = 0) => ({ code: 134, parameters: [1], indent: a }), Fr = (a = 0) => ({ code: 134, parameters: [0], indent: a }), fr = (a = 0) => ({
  code: 137,
  parameters: [1],
  indent: a
}), hr = (a = 0) => ({ code: 137, parameters: [0], indent: a }), pa = (a) => [a], Gr = (a) => ({ comment: a[0] }), Ja = (a, e = 0) => ({ code: Oa, indent: e, parameters: pa(a) }), Za = (a, e = 0) => ({
  code: ga,
  indent: e,
  parameters: pa(a)
}), Ur = (a, e = 0) => a.map((t, s) => s === 0 ? Ja(t, e) : Za(t, e)), $a = (a = {}) => [(a == null ? void 0 : a.speed) ?? 4, (a == null ? void 0 : a.skip) ?? !1], Br = (a) => ({ speed: a[0], skip: a[1] }), Hr = (a = {}, e = 0) => ({
  code: Ma,
  indent: e,
  parameters: $a(a)
}), ae = (a = "") => [a], xr = (a) => ({ content: a[0] }), Vr = (a = "", e = 0) => ({ code: La, indent: e ?? 0, parameters: ae(a) }), wr = (a, e = 0) => ({
  code: 402,
  indent: e,
  parameters: [(a == null ? void 0 : a.index) ?? 0, (a == null ? void 0 : a.name) ?? ""]
}), Yr = (a) => ({ index: a[0], name: a[1] }), Wr = (a) => [a.index ?? 0, a.name ?? ""], Xr = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), qr = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], Kr = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [(a == null ? void 0 : a.choices) ?? [], (a == null ? void 0 : a.cancelType) ?? 0, (a == null ? void 0 : a.defaultType) ?? 0, (a == null ? void 0 : a.positionType) ?? 2, (a == null ? void 0 : a.background) ?? 0]
}), zr = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), jr = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), Qr = (a) => ({
  filename: a[0]
}), Jr = ({ args: a = {}, commandName: e, commandTitle: t = "", pluginName: s }, m = 0) => ({ code: 357, indent: m, parameters: [s, e, t, { ...a }] }), Zr = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), $r = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), am = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), em = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), tm = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), sm = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), rm = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), mm = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: m = 0, scaleX: n = 100, scaleY: i = 100, opacity: p = 255, blendMode: c = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, m, n, i, p, c]
}), nm = ({ pictureId: a, origin: e, x: t, y: s, scaleX: m, scaleY: n, opacity: i, blendMode: p, wait: c = !1, easingType: I = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, t, s, m, n, i, p, c, I]
}), om = (a, e = 0) => ({ code: 236, indent: e, parameters: [a.type ?? "none", a.power ?? 0, a.duration ?? 0, a.wait ?? !1] }), im = (a = 0) => ({
  code: 222,
  indent: a,
  parameters: []
}), dm = (a = 0) => ({ code: 221, indent: a, parameters: [] }), pm = (a, e = 0) => ({
  code: 224,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [255, 255, 255, 255], a.duration ?? 0, a.wait ?? !1]
}), cm = (a, e = 0) => ({
  code: 225,
  indent: e,
  parameters: [a.power ?? 5, a.speed ?? 5, a.duration ?? 60, a.wait ?? !1]
}), lm = (a, e = 0) => ({
  code: 223,
  indent: e,
  parameters: [a.color ? [a.color[0], a.color[1], a.color[2], a.color[3]] : [0, 0, 0, 0], a.duration ?? 60, a.wait ?? !1]
}), ee = (a, e = 0) => ({ code: ua, indent: e, parameters: [a] }), te = (a, e = 0) => ({
  code: ba,
  indent: e,
  parameters: [a]
}), Em = (a, e = 0) => a.map((t, s) => s === 0 ? ee(t, e) : te(t, e)), Am = 1, Tm = 0, b = { item: 0, weapon: 1, armors: 2 }, Im = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map((s, m) => {
  const n = ((i) => i.customPrice !== void 0 && i.customPrice !== 0)(s) ? 1 : 0;
  return m === 0 ? { code: Pa, indent: t, parameters: [b[s.itemType] ?? b.item, s.id, n, s.customPrice ?? 0, e] } : {
    code: ka,
    indent: t,
    parameters: [b[s.itemType] ?? b.item, s.id, n, s.customPrice ?? 0]
  };
}), _m = 0, Cm = 1, Rm = 2, Sm = 3, ym = 4, Nm = 5, Om = 0, gm = 1, Mm = 2, Lm = 3, um = 4, bm = 0, Pm = 1, km = 2, Dm = (a) => a.parameters[2] === 1, se = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 1, e.variableId], vm = (a, e, t = {}) => ({
  code: o,
  indent: t.indent ?? 0,
  parameters: se(a, e, t.operation ?? 0)
}), Fm = (a, e = 0) => ({ code: o, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 0] }), fm = (a, e = 0) => ({
  code: o,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 1]
}), hm = (a, e = 0) => ({ code: o, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 3] }), Gm = (a, e = 0) => ({
  code: o,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 2]
}), Um = (a, e = 0) => ({ code: o, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 4] }), Bm = (a, e = 0) => ({
  code: o,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 5]
}), Hm = (a, e = 0) => ({ code: o, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 6] }), xm = (a, e = 0) => ({
  code: o,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 7]
}), Vm = (a, e = 0) => ({ code: o, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 8] }), wm = (a, e = 0) => ({
  code: o,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 9]
}), re = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, Ym = (a, e, t = {}) => ({ code: o, indent: t.indent ?? 0, parameters: me(a, e) }), me = (a, e) => [a.startId, a.endId ?? a.startId, 0, 3, 8, re[e.param]], Wm = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.hp;
    case 1:
      return a.mp;
    case 10:
      return a.tp;
  }
  return e[6] >= 2 && e[6] <= 9 ? a.param(e[6] - 2) : 0;
}, Xm = (a, e) => {
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
}, ne = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], qm = (a, e, t = {}) => ({
  code: o,
  indent: t.indent ?? 0,
  parameters: ne(a, e, t.operation ?? 0)
}), oe = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], Km = (a, e) => ({
  code: o,
  indent: 0,
  parameters: oe(a, e, 0)
}), ie = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], zm = (a, e, t = {}) => ({ code: o, indent: t.indent ?? 0, parameters: ie(a, e, t.operation ?? 0) }), de = {
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
}, pe = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, de[e.param]], jm = (a, e, t = {}) => ({
  code: o,
  indent: t.indent ?? 0,
  parameters: pe(a, e, t.operation ?? 0)
}), Qm = (a, e, t = {}) => ({
  code: o,
  indent: t.indent ?? 0,
  parameters: ce(a, e, t.operation ?? 0)
}), ce = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], le = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], Jm = (a, e, t = {}) => ({
  code: o,
  indent: t.indent ?? 0,
  parameters: le(a, e, t.operation ?? 0)
}), Ee = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 4, e.code], Zm = (a, e, t = {}) => ({
  code: o,
  indent: t.indent ?? 0,
  parameters: Ee(a, e, t.operation ?? 0)
}), Ae = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 1, e.weaponId], $m = (a, e) => ({ code: o, indent: 0, parameters: Ae(a, e, 0) }), an = (a = 0) => ({ code: 206, indent: a, parameters: [] }), en = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), tn = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, r(a.bgm)] }), sn = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), rn = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), mn = 0, nn = 1, on = 2, Te = (a) => [...a], dn = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: Te(a.parameters)
}), Ie = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", pn = (a) => a.parameters.every(Ie), cn = "bgm", ln = "se", En = "me", An = "bgs", Tn = "battlebacks1", In = "battlebacks2", _n = "characters", Cn = "enemies", Rn = "faces", Sn = "parallaxes", yn = "pictures", Nn = "sv_actors", On = "sv_enemies", gn = "system", Mn = "tilesets", Ln = "titles1", un = "titles2", bn = "System.json", Pn = "Actors.json", kn = "Classes.json", Dn = "Skills.json", vn = "Items.json", Fn = "Weapons.json", fn = "Armors.json", hn = "Enemies.json", Gn = "Troops.json", Un = "States.json", Bn = "Animations.json", Hn = "Tilesets.json", xn = "CommonEvents.json", Vn = "MapInfos.json", wn = "data", Yn = "img", Wn = "audio", Xn = "js", _e = (a = {}) => ({
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
}), Ce = (a = {}) => [r(a.cursor), r(a.ok), r(a.cancel), r(a.buzzer), r(a.equip), r(a.save), r(a.load), r(a.battleStart), r(a.escape), r(a.enemyAttack), r(a.enemyDamage), r(a.enemyCollapse), r(a.bossCollapes1), r(a.bossCollapes2), r(a.actorDamage), r(a.actorCollapse), r(a.playRecovery), r(a.playMiss), r(a.playEvasion), r(a.playMagicEvasion), r(a.playReflection), r(a.shop), r(a.useItem), r(a.useSkill)], qn = (a) => ({
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
}), Kn = (a) => a.menuCommands[0], zn = (a) => a.menuCommands[1], jn = (a) => a.menuCommands[2], Qn = (a) => a.menuCommands[3], Jn = (a) => a.menuCommands[4], Zn = (a) => a.menuCommands[5], $n = (a) => a.itemCategories[0], ao = (a) => a.itemCategories[1], eo = (a) => a.itemCategories[2], to = (a) => a.itemCategories[3], Re = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], so = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), Se = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], ro = (a) => ({
  item: a[0],
  skill: a[1],
  equip: a[2],
  status: a[3],
  formation: a[4],
  save: a[5]
}), ye = (a = {}) => ({
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
}), mo = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), no = (a) => ({
  armorTypes: A(a.armorTypes),
  elements: A(a.elements),
  equipTypes: A(a.equipTypes),
  weaponTypes: A(a.weaponTypes),
  skillTypes: A(a.skillTypes),
  variables: A(a.variables),
  switches: A(a.switches)
}), A = (a) => a ? [...a] : [], oo = (a) => a.terms.params.map((e, t) => ({
  name: e,
  id: t
})), Ne = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), v = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: r(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), Oe = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), io = { title: "オプション", options: {
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
} }, po = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, co = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, lo = {
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
}, Eo = (a) => {
  var t, s, m, n, i, p, c, I, M, L, u, G, U, B, H, x, V, w, Y, W, X, q, K, z, j, Q, J, Z, $, aa, ea;
  const e = Me(a.size);
  return {
    ...ye(a.options),
    titleCommandWindow: Ne(a.titleCommandWindow ?? {}),
    currencyUnit: ((t = a.texts) == null ? void 0 : t.currencyUnit) ?? "",
    gameTitle: ((s = a.texts) == null ? void 0 : s.gameTitle) ?? "",
    sounds: Ce(a.sounds),
    editor: Oe(a.editing),
    advanced: _e(a.advanced),
    title1Name: ((m = a.images) == null ? void 0 : m.title1Name) ?? "",
    title2Name: ((n = a.images) == null ? void 0 : n.title2Name) ?? "",
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
    titleBgm: r((Y = a.bgm) == null ? void 0 : Y.titleBgm),
    tileSize: e.tileSize,
    faceSize: e.faceSize,
    iconSize: e.iconSize,
    versionId: 1,
    attackMotions: a.attackMotion ? [...a.attackMotion] : [],
    battleback1Name: ((W = a.battleTest) == null ? void 0 : W.battleback1Name) ?? "",
    battleback2Name: ((X = a.battleTest) == null ? void 0 : X.battleback2Name) ?? "",
    testTroopId: ((q = a.battleTest) == null ? void 0 : q.testTroopId) ?? 0,
    testBattlers: Le((K = a.battleTest) == null ? void 0 : K.testBattlers, ue),
    battleBgm: r((z = a.bgm) == null ? void 0 : z.battleBgm),
    victoryMe: r((j = a.me) == null ? void 0 : j.victoryMe),
    editMapId: ((Q = a.editorTemporary) == null ? void 0 : Q.editMapId) ?? 0,
    battlerName: ((J = a.editorTemporary) == null ? void 0 : J.battlerName) ?? "",
    locale: a.locale ?? "en-US",
    startMapId: ((Z = a.gameInit) == null ? void 0 : Z.startMapId) ?? 0,
    startX: (($ = a.gameInit) == null ? void 0 : $.startX) ?? 0,
    startY: ((aa = a.gameInit) == null ? void 0 : aa.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: ge(a.terms ?? {}),
    itemCategories: Re(a.itemCategories),
    partyMembers: l((ea = a.gameInit) == null ? void 0 : ea.partyMembers),
    battlerHue: 0,
    menuCommands: Se(a.menuComamnds)
  };
}, ge = (a) => ({
  basic: fa(a.basic ?? {}),
  commands: Fa(a.commands ?? {}),
  params: va(a.params ?? {}),
  messages: Da(a.messages ?? {})
}), l = (a) => a ? [...a] : [], Me = (a) => a ? { tileSize: a.tileSize ?? 48, faceSize: a.faceSize ?? 144, iconSize: a.iconSize ?? 32 } : {
  tileSize: 48,
  faceSize: 144,
  iconSize: 32
}, Le = (a, e) => a ? a.map(e) : [], ue = (a) => a ? { actorId: a.actorId, equips: l(a.equips), level: a.level } : { actorId: 0, equips: [], level: 1 }, Ao = (a) => ({
  ...a.text ? { text: a.text } : {},
  ...a.desc ? { desc: a.desc } : {}
}), To = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, Io = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  Ro as ABORT_BATTLE,
  ws as BATTLE_DIRECT,
  Ws as BATTLE_ENCOUNT,
  F as BATTLE_PROCESSING,
  Ys as BATTLE_VARIABLE,
  So as CHANGE_ACTOR_IMAGES,
  yo as CHANGE_ACTOR_STATE,
  P as CHANGE_ARMORS,
  No as CHANGE_BATTLE_BACKGROUND,
  Ca as CHANGE_BATTLE_BGM,
  Oo as CHANGE_CLASS,
  Sa as CHANGE_DEFEAT_ME,
  go as CHANGE_ENCOUNTER,
  Mo as CHANGE_ENEMY_HP,
  Lo as CHANGE_ENEMY_MP,
  uo as CHANGE_ENEMY_STATE,
  bo as CHANGE_ENEMY_TP,
  Po as CHANGE_EXP,
  ko as CHANGE_FORMATION_ACCESS,
  Do as CHANGE_GOLD,
  na as CHANGE_HP,
  O as CHANGE_ITEMS,
  vo as CHANGE_MAP_NAME_DISPLAY,
  Fo as CHANGE_MENU_ACCESS,
  oa as CHANGE_MP,
  ca as CHANGE_NAME,
  la as CHANGE_NICKNAME,
  fo as CHANGE_PARALLAX,
  ho as CHANGE_PARAMETER,
  Go as CHANGE_PARTY_MEMBER,
  Uo as CHANGE_PLAYER_FOLLOWERS,
  Ea as CHANGE_PROFILE,
  Bo as CHANGE_SAVE_ACCESS,
  Ho as CHANGE_SKILL,
  xo as CHANGE_TILESET,
  ia as CHANGE_TP,
  Vo as CHANGE_TRANSPARENCY,
  wo as CHANGE_VEHICLE_BGM,
  Yo as CHANGE_VEHICLE_IMAGE,
  Ra as CHANGE_VICTORY_ME,
  g as CHANGE_WEAPONS,
  Wo as CHANGE_WINDOW_COLOR,
  Xo as COLLAPS_BOSS,
  qo as COLLAPS_INSTANT,
  Ko as COLLAPS_NONE,
  zo as COLLAPS_NORMAL,
  ga as COMMENT_BODY,
  Oa as COMMENT_HEAD,
  ya as COMMON_EVENT,
  jo as CONDITIONAL_BRANCH,
  Qo as CONDITIONAL_BRANCH_ELSE,
  Jo as CONTROL_SELF_SWITCH,
  Na as CONTROL_SWITCHES,
  Zo as CONTROL_TIMER,
  o as CONTROL_VARIABLES,
  Am as CUSTOM_PRICE,
  Va as DEFAULT_DAMAGE_LABELS,
  Ka as DEFAULT_GLOBAL_LABELS,
  es as DEFAULT_ITEM_LABELS,
  ts as DEFAULT_SKILL_LABELS,
  io as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  po as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  ss as DEFAULT_USABLE_ITEM_LABELS,
  To as DIRECTION,
  $o as EFFECT_ADD_BUFF,
  ai as EFFECT_ADD_DEBUFF,
  ei as EFFECT_ADD_STATE,
  ti as EFFECT_COMMON_EVENT,
  si as EFFECT_GAIN_TP,
  ri as EFFECT_GROW,
  mi as EFFECT_LEARN_SKILL,
  ni as EFFECT_RECOVER_HP,
  oi as EFFECT_RECOVER_MP,
  ii as EFFECT_REMOVE_BUFF,
  di as EFFECT_REMOVE_DEBUFF,
  pi as EFFECT_REMOVE_STATE,
  ci as EFFECT_SPECIAL,
  li as ENEMY_APPEAR,
  Ei as ENEMY_RECOVER_ALL,
  Ai as ENEMY_TRANSFORM,
  Ti as ERASE_EVENT,
  Ii as ERASE_PICTURE,
  _i as EXIT_EVENT_PROCESSING,
  Ci as EXTRA_PARAM_CEV,
  Ri as EXTRA_PARAM_CNT,
  Si as EXTRA_PARAM_CRI,
  yi as EXTRA_PARAM_EVA,
  Ni as EXTRA_PARAM_HIT,
  Oi as EXTRA_PARAM_HRG,
  gi as EXTRA_PARAM_MEV,
  Mi as EXTRA_PARAM_MRF,
  Li as EXTRA_PARAM_MRG,
  ui as EXTRA_PARAM_TRG,
  bi as FADEIN_SCREEN,
  Pi as FADEOUT_BGM,
  ki as FADEOUT_BGS,
  Di as FADEOUT_SCREEN,
  Pn as FILENAME_ACTORS,
  Bn as FILENAME_ANIMATIONS,
  fn as FILENAME_ARMORS,
  kn as FILENAME_CLASSES,
  xn as FILENAME_COMMON_EVENTS,
  hn as FILENAME_ENEMIES,
  vn as FILENAME_ITEMS,
  Vn as FILENAME_MAP_INFOS,
  Dn as FILENAME_SKILLS,
  Un as FILENAME_STATES,
  bn as FILENAME_SYSTEM,
  Hn as FILENAME_TILESET,
  Gn as FILENAME_TROOPS,
  Fn as FILENAME_WEAPONS,
  vi as FLAG_ID_AUTO_BATTLE,
  Fi as FLAG_ID_GUARD,
  fi as FLAG_ID_PRESERVE_TP,
  hi as FLAG_ID_SUBSTITUTE,
  Gi as FLASH_SCREEN,
  Wn as FOLDER_AUDIO,
  cn as FOLDER_AUDIO_BGM,
  An as FOLDER_AUDIO_BGS,
  En as FOLDER_AUDIO_ME,
  ln as FOLDER_AUDIO_SE,
  wn as FOLDER_DATA,
  Yn as FOLDER_IMG,
  Tn as FOLDER_IMG_BATTLEBACK1,
  In as FOLDER_IMG_BATTLEBACK2,
  _n as FOLDER_IMG_CHACTERS,
  Cn as FOLDER_IMG_ENEMIES,
  Rn as FOLDER_IMG_FACES,
  Sn as FOLDER_IMG_PARALLACES,
  yn as FOLDER_IMG_PICTURES,
  Nn as FOLDER_IMG_SV_ACTORS,
  On as FOLDER_IMG_SV_ENEMIES,
  gn as FOLDER_IMG_SYSTEM,
  Mn as FOLDER_IMG_TILESETS,
  Ln as FOLDER_IMG_TITLES1,
  un as FOLDER_IMG_TITLES2,
  Xn as FOLDER_JS,
  Ui as FORCE_ACTION,
  Bi as GAME_OVER,
  Hi as GATHER_FOLLOWERS,
  xi as GET_LOCATION_INFO,
  Vi as GET_ONOFF_VEHICLE,
  Qt as HITTYPE_CERTAIN,
  Zt as HITTYPE_MAGICAL,
  Jt as HITTYPE_PHYSICAL,
  wi as INPUT_NUMBER,
  Yi as LABEL,
  jt as LABELS_DATA_WEAPON,
  co as LABELS_SYSTEM_BATTLER_PARAMS,
  lo as LABELS_SYSTEM_GAME_COMMANDS,
  Wi as LABEL_JUMP,
  xa as LABEL_SET_DATA,
  qa as LABEL_SET_ITEM_EFFECT,
  Wa as LABEL_SET_TRAIT,
  Xi as LOOP,
  qi as LOOP_BREAK,
  ns as MODULE_DATA,
  Ki as MOVE_PICTURE,
  zi as NAME_INPUT_PROCESSING,
  Tm as NORMAL_PRICE,
  ji as NO_OPERATION,
  Qi as OPEN_MENU_SCREEN,
  Ji as OPEN_SAVE_SCREEN,
  Om as OPERAND_CONSTANT,
  Lm as OPERAND_GAMEDATA,
  Mm as OPERAND_RANDOM,
  um as OPERAND_SCRIPT,
  gm as OPERAND_VARIABLE,
  Cm as OPERATION_ADD,
  ym as OPERATION_DIVIDE,
  Nm as OPERATION_MOD,
  Sm as OPERATION_MULTIPLY,
  _m as OPERATION_SET,
  Rm as OPERATION_SUBTRACT,
  Zi as PARTY_ABILITY_CANCEL_SURPRISE,
  $i as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  ad as PARTY_ABILITY_ENCOUNTER_HALF,
  ed as PARTY_ABILITY_ENCOUNTER_NONE,
  td as PARTY_ABILITY_GOLD_DOUBLE,
  sd as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Aa as PLAY_BGM,
  Ta as PLAY_BGS,
  Ia as PLAY_ME,
  rd as PLAY_MOVIE,
  _a as PLAY_SE,
  md as PLUGIN_COMMAND_MV,
  nd as PLUGIN_COMMAND_MZ,
  od as RECOVER_ALL,
  id as REGULAR_PARAM_AGI,
  dd as REGULAR_PARAM_ATK,
  pd as REGULAR_PARAM_DEF,
  cd as REGULAR_PARAM_LUK,
  ld as REGULAR_PARAM_MATK,
  Ed as REGULAR_PARAM_MAX_HP,
  Ad as REGULAR_PARAM_MAX_MP,
  Td as REGULAR_PARAM_MDEF,
  Id as RESUME_BGM,
  _d as RETURN_TO_TITLE_SCREEN,
  Cd as ROTATE_PICTURE,
  kt as ROUTE_CHANGE_BLEND_MODE,
  _t as ROUTE_CHANGE_FREQ,
  bt as ROUTE_CHANGE_IMAGE,
  Pt as ROUTE_CHANGE_OPACITY,
  It as ROUTE_CHANGE_SPEED,
  Ot as ROUTE_DIR_FIX_OFF,
  Nt as ROUTE_DIR_FIX_ON,
  Ve as ROUTE_END,
  et as ROUTE_JUMP,
  Ze as ROUTE_MOVE_AWAY,
  at as ROUTE_MOVE_BACKWARD,
  we as ROUTE_MOVE_DOWN,
  $e as ROUTE_MOVE_FORWARD,
  Ye as ROUTE_MOVE_LEFT,
  qe as ROUTE_MOVE_LOWER_L,
  Ke as ROUTE_MOVE_LOWER_R,
  Qe as ROUTE_MOVE_RANDOM,
  We as ROUTE_MOVE_RIGHT,
  Je as ROUTE_MOVE_TOWARD,
  Xe as ROUTE_MOVE_UP,
  ze as ROUTE_MOVE_UPPER_L,
  je as ROUTE_MOVE_UPPER_R,
  Dt as ROUTE_PLAY_SE,
  vt as ROUTE_SCRIPT,
  yt as ROUTE_STEP_ANIME_OFF,
  St as ROUTE_STEP_ANIME_ON,
  Tt as ROUTE_SWITCH_OFF,
  At as ROUTE_SWITCH_ON,
  Mt as ROUTE_THROUGH_OFF,
  gt as ROUTE_THROUGH_ON,
  ut as ROUTE_TRANSPARENT_OFF,
  Lt as ROUTE_TRANSPARENT_ON,
  dt as ROUTE_TURN_180D,
  it as ROUTE_TURN_90D_L,
  ot as ROUTE_TURN_90D_R,
  pt as ROUTE_TURN_90D_R_L,
  Et as ROUTE_TURN_AWAY,
  st as ROUTE_TURN_DOWN,
  rt as ROUTE_TURN_LEFT,
  ct as ROUTE_TURN_RANDOM,
  mt as ROUTE_TURN_RIGHT,
  lt as ROUTE_TURN_TOWARD,
  nt as ROUTE_TURN_UP,
  tt as ROUTE_WAIT,
  Rt as ROUTE_WALK_ANIME_OFF,
  Ct as ROUTE_WALK_ANIME_ON,
  Rd as SAVE_BGM,
  zt as SCHEMA_DATA_WEAPON,
  ua as SCRIPT_EVAL,
  ba as SCRIPT_EVAL_BODY,
  Sd as SCROLL_MAP,
  yd as SELECT_ITEM,
  Nd as SET_EVENT_LOCATION,
  Od as SET_MOVEMENT_ROUTE,
  gd as SET_VEHICLE_LOCATION,
  Md as SET_WEATHER_EFFECT,
  Ld as SHAKE_SCREEN,
  Pa as SHOP_PROCESSING,
  ka as SHOP_PROCESSING_BODY,
  ud as SHOW_ANIMATION,
  bd as SHOW_BALLOON_ICON,
  Pd as SHOW_BATTLE_ANIMATION,
  kd as SHOW_CHOICES,
  Dd as SHOW_CHOICES_ITEM,
  vd as SHOW_MESSAGE,
  Fd as SHOW_MESSAGE_BODY,
  fd as SHOW_PICTURE,
  Ma as SHOW_SCROLLING_TEXT,
  La as SHOW_SCROLLING_TEXT_BODY,
  hd as SKIP,
  $t as SPECIAL_EFFECT_ESCAPE,
  Gd as SPECIAL_PARAM_EXR,
  Ud as SPECIAL_PARAM_FDR,
  Bd as SPECIAL_PARAM_GRD,
  Hd as SPECIAL_PARAM_MCR,
  xd as SPECIAL_PARAM_MDR,
  Vd as SPECIAL_PARAM_PDR,
  wd as SPECIAL_PARAM_PHA,
  Yd as SPECIAL_PARAM_REC,
  Wd as SPECIAL_PARAM_TCR,
  Xd as SPECIAL_PARAM_TGR,
  os as SRC_DATA_ACTOR,
  As as SRC_DATA_ARMOR,
  Ts as SRC_DATA_CLASS,
  Is as SRC_DATA_COMMON_EVNET,
  ds as SRC_DATA_ENEMY,
  ls as SRC_DATA_ITEMS,
  is as SRC_DATA_MAP,
  cs as SRC_DATA_SKILL,
  ps as SRC_DATA_STATE,
  _s as SRC_DATA_TROOP,
  Es as SRC_DATA_WEAPON,
  qd as STOP_SE,
  Kd as TINT_PICTURE,
  zd as TINT_SCREEN,
  jd as TRAIT_ACTION_PLUS,
  Qd as TRAIT_ATTACK_ELEMENT,
  Jd as TRAIT_ATTACK_SKILL,
  Zd as TRAIT_ATTACK_SPEED,
  $d as TRAIT_ATTACK_STATE,
  ap as TRAIT_ATTACK_TIMES,
  ep as TRAIT_COLLAPSE_TYPE,
  tp as TRAIT_DEBUFF_RATE,
  sp as TRAIT_ELEMENT_RATE,
  rp as TRAIT_EQUIP_ARMOR_TYPE,
  mp as TRAIT_EQUIP_LOCK,
  np as TRAIT_EQUIP_SEAL,
  op as TRAIT_EQUIP_WEAPON_TYPE,
  ip as TRAIT_PARAM,
  dp as TRAIT_PARTY_ABILITY,
  pp as TRAIT_SKILL_ADD,
  cp as TRAIT_SKILL_SEAL,
  lp as TRAIT_SKILL_TYPE_ADD,
  Ep as TRAIT_SKILL_TYPE_SEAL,
  Ap as TRAIT_SLOT_TYPE,
  Tp as TRAIT_SPARAM,
  Ip as TRAIT_SPECIAL_FLAG,
  _p as TRAIT_STATE_RATE,
  Cp as TRAIT_STATE_RESIST,
  Rp as TRAIT_XPARAM,
  Sp as TRANSFER_PLAYER,
  km as TYPE_ARMOR,
  bm as TYPE_ITEM,
  Pm as TYPE_WEAPON,
  on as VEHICLE_AIRSHIP,
  mn as VEHICLE_BOAT,
  nn as VEHICLE_SHIP,
  yp as WAIT,
  Np as buildNoteFromNormalized,
  zr as cloneChoices,
  dn as cloneEventCommand,
  Te as cloneParameters,
  Op as collapsOptionsToArray,
  Gr as convertCommentArrayToObject,
  he as createActorControlChars,
  f as createControlCharFormat,
  gp as createNoteEntity,
  Ge as createSystemVariableControlChars,
  Mp as defineGameDataSources,
  Lp as defineSystemItems,
  up as defineTraitCollapseType,
  bp as defineTraitExtraParam,
  Pp as defineTraitItems,
  kp as defineTraitPartyAbility,
  Dp as defineTraitRegularParam,
  vp as defineTraitSpecialFlag,
  Fp as defineTraitSpecialParam,
  fp as extraParamName,
  hp as extraParamsToArray,
  Io as extractFileName,
  as as formatItemEffectText,
  qt as formatTraitText,
  lr as fromArrayChangeItems,
  Cr as fromArrayChangeWeapons,
  mr as fromArrayCommonEvent,
  nr as fromArrayControlSwitches,
  Js as fromArrayEnemyTransform,
  pr as fromArrayInputNumber,
  Qr as fromArrayPlayMovie,
  Zr as fromArrayPluginCommandMZ,
  xr as fromArrayScrollingTextBody,
  Br as fromArrayScrollingTextHeader,
  Pr as fromArraySelectItem,
  Xr as fromArraySetupChoice,
  Yr as fromArraySetupChoiceItem,
  Gp as fromArrayShowMessageHeader,
  Fe as fromStringArray,
  Xm as getActorValue,
  eo as getArmorCategoryEnabled,
  Up as getArmorTypes,
  fe as getControlChars,
  Bp as getElementTypes,
  Wm as getEnemyValue,
  jn as getEquipCommandEnabled,
  Hp as getEquipTypes,
  Jn as getFormationCommandEnabled,
  $n as getItemCategoryEnabled,
  Kn as getItemCommandEnabled,
  xp as getItemIdFromItemCommand,
  to as getKeyItemCategoryEnabled,
  Vp as getNoteValue,
  oo as getParamNames,
  Zn as getSaveCommandEnabled,
  zn as getSkillCommandEnabled,
  wp as getSkillTypes,
  Qn as getStatusCommandEnabled,
  Yp as getSwitches,
  Wp as getVariableNames,
  ao as getWeaponCategoryEnabled,
  Xp as getWeaponTypes,
  pn as isCloneableCommand,
  Xs as isCommandBattleProcessingVariable,
  Dm as isCommandOperandVariables,
  qp as isUsingVariableItemCommand,
  cr as isUsingVaribleCommandChangingItems,
  Cs as labelsRegistry,
  Bt as makeActorData,
  xt as makeArmorData,
  Fs as makeAudioCommand,
  He as makeBattleEventPage,
  ye as makeBooleanOptions,
  Vt as makeClassData,
  ar as makeCommandAddEachEnemyState,
  Zs as makeCommandAddEnemyState,
  $r as makeCommandAddPartyMember,
  E as makeCommandAudioAny,
  qs as makeCommandBattleProcessingDirect,
  zs as makeCommandBattleProcessingEncount,
  Ks as makeCommandBattleProcessingVariable,
  ve as makeCommandChangeActorImages,
  Rs as makeCommandChangeActorName,
  Ss as makeCommandChangeActorNickName,
  ys as makeCommandChangeActorProfile,
  Bs as makeCommandChangeBattleBGM,
  xs as makeCommandChangeDefeatME,
  Er as makeCommandChangeItems,
  tn as makeCommandChangeVehicleBGM,
  en as makeCommandChangeVehicleImage,
  Hs as makeCommandChangeVictoryME,
  Rr as makeCommandChangeWeapons,
  Za as makeCommandCommentBody,
  Ja as makeCommandCommentHeader,
  rr as makeCommandCommonEvent,
  or as makeCommandControlSwitches,
  js as makeCommandControlTimer,
  fr as makeCommandDisableFormationAccess,
  kr as makeCommandDisableMenuAccess,
  vr as makeCommandDisableSaveAccess,
  hr as makeCommandEnableFormationAccess,
  Dr as makeCommandEnableMenuAccess,
  Fr as makeCommandEnableSaveAccess,
  sr as makeCommandEnemyRecoverAll,
  tr as makeCommandEnemyRecoverAllEach,
  Qs as makeCommandEnemyTransform,
  im as makeCommandFadeInScreen,
  Ps as makeCommandFadeOutBGM,
  vs as makeCommandFadeOutBGS,
  dm as makeCommandFadeOutScreen,
  pm as makeCommandFlashScreen,
  Ns as makeCommandGainActorHP,
  Ls as makeCommandGainActorMP,
  gs as makeCommandGainActorTP,
  gr as makeCommandGainArmor,
  Mr as makeCommandGainArmorByVariable,
  em as makeCommandGainGold,
  sm as makeCommandGainGoldByVariable,
  Ar as makeCommandGainItem,
  Tr as makeCommandGainItemV,
  Sr as makeCommandGainWeapon,
  yr as makeCommandGainWeaponV,
  an as makeCommandGetOnOffVehicle,
  ir as makeCommandInputNumber,
  Os as makeCommandLoseActorHP,
  us as makeCommandLoseActorMP,
  Ms as makeCommandLoseActorTP,
  Lr as makeCommandLoseArmor,
  ur as makeCommandLoseArmorByVariable,
  tm as makeCommandLoseGold,
  rm as makeCommandLoseGoldByVariable,
  Ir as makeCommandLoseItem,
  _r as makeCommandLoseItemV,
  Nr as makeCommandLoseWeapon,
  Or as makeCommandLoseWeaponV,
  nm as makeCommandMovePicture,
  fs as makeCommandPlayBGM,
  hs as makeCommandPlayBGS,
  Gs as makeCommandPlayME,
  jr as makeCommandPlayMovie,
  Us as makeCommandPlaySE,
  Jr as makeCommandPluginCommandMZ,
  ke as makeCommandRecoverAll,
  De as makeCommandRecoverAllTarget,
  er as makeCommandRemoveEachEnemyState,
  $s as makeCommandRemoveEnemyState,
  am as makeCommandRemovePartyMember,
  Ds as makeCommandResumeBGM,
  ks as makeCommandSaveBGM,
  Em as makeCommandScriptArray,
  te as makeCommandScriptBody,
  ee as makeCommandScriptHeader,
  Vr as makeCommandScrollingTextBody,
  Hr as makeCommandScrollingTextHeader,
  br as makeCommandSelectItem,
  sn as makeCommandSetVehicleLocation,
  rn as makeCommandSetVehicleLocationFromVariables,
  om as makeCommandSetWeatherEffect,
  Kr as makeCommandSetupChoice,
  cm as makeCommandShakeScreen,
  Im as makeCommandShopProcessing,
  bs as makeCommandShowAnimation,
  Vs as makeCommandShowBalloonIcon,
  wr as makeCommandShowChoiceItem,
  Kp as makeCommandShowMessage,
  zp as makeCommandShowMessageBody,
  mm as makeCommandShowPicture,
  xm as makeCommandSystemBattleCount,
  wm as makeCommandSystemEscapeCount,
  Hm as makeCommandSystemSaveCount,
  Bm as makeCommandSystemTimer,
  Vm as makeCommandSystemWinCount,
  lm as makeCommandTintScreen,
  qm as makeCommandVariableFromActorStatusData,
  Km as makeCommandVariableFromArmor,
  zm as makeCommandVariableFromConstant,
  jm as makeCommandVariableFromEnemyData,
  Qm as makeCommandVariableFromItemData,
  Fm as makeCommandVariableFromMapId,
  Gm as makeCommandVariableFromPartyGold,
  fm as makeCommandVariableFromPartyMembers,
  hm as makeCommandVariableFromPartySteps,
  Um as makeCommandVariableFromPlaytime,
  Jm as makeCommandVariableFromRandom,
  Zm as makeCommandVariableFromScript,
  Ym as makeCommandVariableFromTempLastData,
  vm as makeCommandVariableFromVariable,
  $m as makeCommandVariableFromWeapon,
  pa as makeCommentArray,
  Ur as makeCommentCommandArray,
  Ue as makeCommonEventData,
  h as makeDamage,
  no as makeDataNames,
  Ya as makeDropItem,
  Oe as makeEditorSetting,
  Yt as makeEnemyAction,
  Wt as makeEnemyData,
  Ba as makeEventPageCondition,
  mo as makeGameInitial,
  Re as makeItemCategories,
  so as makeItemCategoriesFromArray,
  rs as makeItemData,
  Gt as makeMapData,
  Ft as makeMapEvent,
  Ha as makeMapEventIamge,
  ft as makeMapEventPage,
  ht as makeMapFileInfo,
  Ut as makeMapInfoData,
  Se as makeMenuCommandsEnabled,
  ro as makeMenuCommandsEnabledFromArray,
  wa as makeParamArray,
  va as makeParamNamesArray,
  jp as makeParamNamesFromArray,
  ms as makeSkillData,
  Ce as makeSoundsArray,
  qn as makeSoundsObject,
  Xt as makeStateData,
  _e as makeSystemAdvanced,
  Eo as makeSystemData,
  fa as makeTermsBasic,
  Qp as makeTermsBasicFromArray,
  Fa as makeTermsCommandArray,
  Jp as makeTermsCommandArrayWithNulls,
  Zp as makeTermsCommandFromArray,
  Da as makeTermsMessages,
  Ne as makeTitleCommandWindow,
  Be as makeTroopData,
  Ua as makeTroopEventConditions,
  xe as makeTroopMember,
  v as makeVehicleData,
  Kt as makeWeaponData,
  Ht as normalizeDataActor,
  $p as normalizeNote,
  wt as paramArrayToObject,
  ac as partyAbilityToArray,
  ec as readNote,
  tc as readNoteEx,
  sc as readNoteObject,
  rc as regularParamName,
  mc as regularParamsToArray,
  nc as replaceNote,
  oc as repleaceMapEventCommands,
  ic as resolveItemEffectLabels,
  dc as resolveTraitLabels,
  pc as setNoteValue,
  cc as specialFlagToArray,
  lc as specialParamName,
  Ec as specialParamsToArray,
  Ao as textAndDesc,
  ja as toArrayCommonEvent,
  Qa as toArrayControlSwitches,
  dr as toArrayInputNumber,
  ne as toArrayOperandActorStatus,
  oe as toArrayOperandArmorData,
  ie as toArrayOperandConstant,
  pe as toArrayOperandEnemyStatus,
  ce as toArrayOperandItemData,
  le as toArrayOperandRandom,
  Ee as toArrayOperandScript,
  se as toArrayOperandVariable,
  Ae as toArrayOperandWeaponData,
  ae as toArrayScrollingTextBody,
  $a as toArrayScrollingTextHeader,
  qr as toArraySetupChoice,
  Wr as toArraySetupChoiceItem,
  Ac as toArrayShowMessageHeader
};
