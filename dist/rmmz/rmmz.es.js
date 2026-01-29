import { aH as pa, aL as ca, aM as la, az as ma, aA as na, aB as oa, ag as Ea, ak as Aa, am as Ta, an as _a, H as Ia, J as Ca, R as Ra, s as Sa, w as ya, B as O, c_ as R, d0 as S, d1 as T, c$ as y, D as M, F as P, C as Na, l as Oa, j as Ma, k as ga, a$ as La, b0 as ua, aw as ba, ax as Pa, x as o, cZ as ka, cS as Da, cW as va, cU as fa } from "../shared/make.es2.js";
import { aV as to, av as so, aJ as ro, aE as mo, as as no, aI as oo, O as io, aN as po, aO as co, aP as lo, aX as Eo, aD as Ao, P as To, A as _o, aq as Io, M as Co, at as Ro, aF as So, G as yo, a2 as No, K as Oo, aG as Mo, ar as go, _ as Lo, T as uo, aK as bo, Q as Po, bx as ko, by as Do, bz as vo, bw as fo, o as Fo, p as ho, y as Go, z as Uo, ct as Bo, cu as Ho, cr as xo, cA as Vo, cq as wo, cy as Yo, cz as Wo, co as Xo, cp as qo, cv as Ko, cw as zo, cs as jo, cx as Qo, aR as Jo, aQ as Zo, aS as $o, a1 as ai, ae as ei, E as ti, bD as si, bG as ri, bC as mi, bB as ni, bA as oi, bH as ii, bE as di, bF as pi, bI as ci, bJ as li, a5 as Ei, ah as Ai, al as Ti, a4 as _i, ch as Ii, ci as Ci, ck as Ri, cj as Si, a7 as yi, aU as Ni, aZ as Oi, a3 as Mi, au as gi, Z as Li, I as ui, u as bi, v as Pi, L as ki, q as Di, ab as vi, ay as fi, N as Fi, aW as hi, aY as Gi, cb as Ui, ce as Bi, c9 as Hi, ca as xi, cd as Vi, cc as wi, ap as Yi, b1 as Wi, b2 as Xi, aC as qi, bT as Ki, bP as zi, bQ as ji, bU as Qi, bR as Ji, bN as Zi, bO as $i, bS as ad, aj as ed, a_ as td, ac as sd, ai as rd, X as md, h as nd, W as od, Y as id, V as dd, af as pd, a8 as cd, $ as ld, a0 as Ed, aT as Ad, d as Td, e as _d, S as Id, c as Cd, aa as Rd, n as Sd, c5 as yd, c4 as Nd, bZ as Od, c0 as Md, c3 as gd, c2 as Ld, b$ as ud, b_ as bd, c1 as Pd, bY as kd, ao as Dd, ad as vd, a6 as fd, bq as Fd, bc as hd, bg as Gd, be as Ud, bd as Bd, bf as Hd, bs as xd, b6 as Vd, b5 as wd, bm as Yd, bn as Wd, bo as Xd, bl as qd, b9 as Kd, bt as zd, bj as jd, bk as Qd, bh as Jd, bi as Zd, bp as $d, bb as ap, br as ep, b7 as tp, b8 as sp, ba as rp, U as mp, a9 as np, cB as op, bv as ip, cG as dp, b3 as pp, cR as cp, bu as lp, bK as Ep, b4 as Ap, cf as Tp, bV as _p, cl as Ip, c6 as Cp, bM as Rp, bL as Sp, f as yp, cP as Np, cL as Op, cM as Mp, g as gp, cI as Lp, cN as up, cQ as bp, cK as Pp, cO as kp, i as Dp, m as vp, a as fp, cT as Fp, cV as hp, cX as Gp, cY as Up, cC as Bp, cg as Hp, cD as xp, cE as Vp, cF as wp, bX as Yp, bW as Wp, cH as Xp, b as qp, cn as Kp, r as zp, cJ as jp, cm as Qp, c8 as Jp, c7 as Zp, t as $p } from "../shared/make.es2.js";
import { c as Fa, a as ha, m as r } from "../shared/make.es.js";
const Pe = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), ke = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [1, a.targetSelectVariableId]
}), De = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: m = "", battlerName: n = "" } = {}, i = 0) => ({
  code: 322,
  indent: i,
  parameters: [a, m, s, t, e, n]
}), f = (a, e) => `\\${a}[${e}]`, ve = (a, e) => e.map((t, s) => ({ text: t, controlChar: f(a, s) })), fe = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e) => ({
  char: e[1],
  id: parseInt(e[2], 10)
})), Fe = (a) => a.map((e) => ({ text: e.name, controlChar: f("N", e.id) })), he = (a) => a.variables.map((e, t) => ({
  text: e || "",
  controlChar: f("V", t)
})).filter((e) => e.text !== ""), Ge = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", trigger: a.trigger ?? 0, list: a.list ?? [], switchId: a.switchId ?? 0 }), Ue = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  members: a.members ?? [],
  pages: a.pages ?? []
}), Be = (a) => ({ span: a.span ?? 0, conditions: Ga(a.conditions ?? {}), list: a.list ?? [] }), He = (a = {}) => ({
  enemyId: a.enemyId ?? 0,
  x: a.x ?? 0,
  y: a.y ?? 0,
  hidden: a.hidden ?? !1
}), Ga = (a = {}) => ({ actorHp: a.actorHp ?? 0, actorId: a.actorId ?? 0, enemyValid: a.enemyValid ?? 0, switchValid: a.switchValid ?? 0 }), Ua = (a = {}) => ({
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
}), xe = 0, Ve = 1, we = 2, Ye = 3, We = 4, Xe = 5, qe = 6, Ke = 7, ze = 8, je = 9, Qe = 10, Je = 11, Ze = 12, $e = 13, at = 14, et = 15, tt = 16, st = 17, rt = 18, mt = 19, nt = 20, ot = 21, it = 22, dt = 23, pt = 24, ct = 25, lt = 26, Et = 27, At = 28, Tt = 29, _t = 30, It = 31, Ct = 32, Rt = 33, St = 34, yt = 35, Nt = 36, Ot = 37, Mt = 38, gt = 39, Lt = 40, ut = 41, bt = 42, Pt = 43, kt = 44, Dt = 45, vt = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: m = 0, y: n = 0 } = {}) => ({
  id: a,
  name: e,
  pages: t,
  note: s,
  x: m,
  y: n
}), Ba = ({ characterIndex: a = 0, characterName: e = "", direction: t = 2, pattern: s = 0, tileId: m = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: t,
  pattern: s,
  tileId: m
}), ft = ({ list: a = [], conditions: e = Ua(), image: t = Ba(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: n = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: i = 1, stepAnime: p = !1, through: c = !1, walkAnime: _ = !1, moveSpeed: g = 3, moveType: L = 0, trigger: u = 0 } = {}) => ({
  walkAnime: _,
  stepAnime: p,
  through: c,
  conditions: e,
  list: a,
  directionFix: m,
  image: t,
  priorityType: i,
  moveFrequency: s,
  moveSpeed: g,
  moveType: L,
  trigger: u,
  moveRoute: { list: n.list, repeat: n.repeat, skippable: n.skippable, wait: n.wait }
}), Ft = (a, e) => ({
  map: e,
  filename: `Map${a.id.toString().padStart(3, "0")}`,
  editingName: a.name
}), ht = (a = {}) => ({
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
}), Gt = (a = { id: 0 }) => {
  return { name: a.name ?? (e = a.id, e.toString().padStart(3, "0")), id: a.id, expanded: a.expanded ?? !1, order: a.order ?? 0, parentId: a.parentId ?? 0, scrollX: a.scrollX ?? 0, scrollY: a.scrollY ?? 0 };
  var e;
}, Ha = {
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
}, xa = {
  title: "ダメージ",
  options: {}
}, F = (a = {}) => ({ type: a.type ?? 0, elementId: a.elementId ?? 0, formula: a.formula ?? "", variance: a.variance ?? 0, critical: a.critical ?? !1 }), Ut = (a = {}) => ({
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
}), Bt = (a) => ({
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
}), Ht = (a = {}) => ({
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
}), xt = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: [],
  note: a.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), Va = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: m = 0, mdf: n = 0, agi: i = 0, luk: p = 0 }) => [a, e, t, s, m, n, i, p], Vt = (a) => {
  const [e, t, s, m, n, i, p, c] = a;
  return { mhp: e, mmp: t, atk: s, def: m, mat: n, mdf: i, agi: p, luk: c };
}, wa = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), wt = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), Yt = (a = {}) => {
  var e;
  return {
    name: a.name ?? "",
    id: a.id ?? 0,
    battlerName: a.battlerName ?? "",
    battlerHue: a.battlerHue ?? 0,
    dropItems: ((e = a.dropItems) == null ? void 0 : e.map(() => wa())) ?? [],
    exp: a.exp ?? 0,
    gold: a.gold ?? 0,
    traits: [],
    note: a.note ?? "",
    params: a.params ? [...a.params] : Va({
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
}, Wt = (a = {}) => ({
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
}), d = "{name}", I = "{name} * {value}%", ea = "{name} + {value}%", ta = "{value}", Ya = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: I, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } },
  extraParam: { title: "追加能力値", format: ea, options: {
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
  specialParam: { title: "特殊能力値", format: I, options: {
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
  elementRate: { title: "属性有効度", format: I },
  debuffRate: { title: "弱体有効度", format: I },
  stateRate: { title: "ステート有効度", format: I },
  stateResist: {
    title: "ステート無効",
    format: d
  },
  attackElement: { title: "攻撃属性", format: d },
  attackState: { title: "攻撃ステート", format: ea },
  attackSpeed: { title: "攻撃速度補正", format: ta },
  attackTimes: {
    title: "攻撃追加回数",
    format: ta
  },
  actionPlus: { title: "行動追加", format: I },
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
} }, Wa = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Xt = (a, e, t) => {
  const s = Fa(Wa);
  return ha(e, t, s, a.pattern, (m) => m.dataId);
}, qt = (a = {}) => ({
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
}), Kt = {
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
}, zt = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, jt = 0, Qt = 1, Jt = 2, sa = "{name} {value1}%", D = "{value1}% + {value2}", ra = "{name} {value1}ターン", N = "{name}", Xa = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: ra },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: ra },
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
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: sa },
  special: {
    desc: "特殊効果",
    domainName: "特殊効果",
    format: N
  },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: sa },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: N }
} }, Zt = 0, $t = (a, e, t) => {
  const s = t.find((n) => n.id === e.dataId), m = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", m);
}, as = { title: "アイテム", options: { consumable: "消耗品" } }, es = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, ts = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, ss = (a = {}) => ({
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
}), rs = (a = {}) => ({
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
}), ms = "data", ns = "actor", os = "map", is = "enemy", ds = "state", ps = "skill", cs = "item", ls = "weapon", Es = "armor", As = "class", Ts = "common_event", _s = "troop", qa = {
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
}, Is = () => ({ rpg: { damage: xa, data: Ha, traits: Ya, itemEffect: Xa }, global: qa }), Cs = (a, e = 0) => ({ code: pa, parameters: [a.actorId, a.name], indent: e }), Rs = (a, e = 0) => ({
  code: ca,
  parameters: [a.actorId, a.nickname],
  indent: e
}), Ss = (a, e = 0) => ({ code: la, parameters: [a.actorId, a.profile], indent: e }), C = { direct: 0, variable: 1 }, ys = (a, e = 0) => ({
  code: ma,
  indent: e,
  parameters: ia(0, a)
}), Ns = (a, e = 0) => ({ code: ma, indent: e, parameters: ia(1, a) }), Os = (a, e = 0) => ({ code: oa, indent: e, parameters: k(0, a) }), Ms = (a, e = 0) => ({
  code: oa,
  indent: e,
  parameters: k(1, a)
}), gs = (a, e = 0) => ({ code: na, indent: e, parameters: k(0, a) }), Ls = (a, e = 0) => ({
  code: na,
  indent: e,
  parameters: k(1, a)
}), k = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value], ia = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value, e.allowDeath], us = (a, e = 0) => ({
  code: 242,
  indent: e,
  parameters: [a.duration]
}), bs = (a = 0) => ({ code: 243, indent: a, parameters: [] }), Ps = (a = 0) => ({ code: 244, indent: a, parameters: [] }), ks = (a, e = 0) => ({
  code: 246,
  indent: e,
  parameters: [a.duration]
}), Ds = (a, e) => E(a, r({ name: e })), E = (a, e, t = 0) => ({
  code: a,
  parameters: [r(e)],
  indent: t
}), vs = (a, e = 0) => E(Ea, a, e), fs = (a, e = 0) => E(Aa, a, e), Fs = (a, e = 0) => E(Ta, a, e), hs = (a, e = 0) => E(_a, a, e), Gs = (a, e = 0) => E(Ia, a, e), Us = (a, e = 0) => E(Ca, a, e), Bs = (a, e = 0) => E(Ra, a, e), Ka = {
  plus: 0,
  minus: 1
}, Hs = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [Ka[a ?? "plus"] ?? 0, e ?? 0] });
function xs(a, e = 0) {
  return { code: 336, parameters: [a.enemyId, a.newEnemyId], indent: e };
}
const Vs = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), ws = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 0, a.stateId] }), Ys = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 1, a.stateId]
}), Ws = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 0, a.stateId] }), Xs = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), qs = (a = 0) => ({
  code: 334,
  indent: a,
  parameters: [0]
}), Ks = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), zs = (a, e = 0) => ({ code: Sa, indent: e, parameters: za(a ?? {}) }), js = (a) => ({
  eventId: a[0]
}), za = (a) => [a.eventId ?? 0], Qs = (a) => ({ min: a[0], max: a[1], value: a[2] }), ja = (a) => [a.min, a.max, a.value], Js = (a, e = 0) => ({ code: ya, indent: e, parameters: ja(a) }), Zs = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), $s = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], ar = (a) => ({ variableId: a[0], maxDigits: a[1] }), er = (a) => a.parameters[3] === T, tr = (a) => ({
  operation: a[1],
  itemId: a[0],
  value: a[3],
  operand: a[2]
}), sr = (a, e = 0) => ({ code: O, indent: e, parameters: [a.itemId, a.operation, a.operand, a.value] }), rr = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.itemId, R, S, a.value]
}), mr = (a, e = 0) => ({ code: O, indent: e, parameters: [a.itemId, R, T, a.variableId] }), nr = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [a.itemId, y, S, a.value]
}), or = (a, e = 0) => ({ code: O, indent: e, parameters: [a.itemId, y, T, a.variableId] }), ir = (a) => ({ operation: a[1], weaponId: a[0], value: a[3], operand: a[2], includesEquip: a[4] }), dr = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [a.weaponId, a.operation, a.operand, a.value, a.includesEquip]
}), pr = (a, e = 0) => ({ code: M, indent: e, parameters: [a.weaponId, R, S, a.value, !1] }), cr = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [a.weaponId, R, T, a.variableId, !1]
}), lr = (a, e = 0) => ({ code: M, indent: e, parameters: [a.weaponId, y, S, a.value, !1] }), Er = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [a.weaponId, y, T, a.variableId, !1]
}), Ar = (a, e = 0) => ({ code: P, indent: e, parameters: [a.armorId, R, S, a.value, !1] }), Tr = (a, e = 0) => ({
  code: P,
  indent: e,
  parameters: [a.armorId, R, T, a.variableId, !1]
}), _r = (a, e = 0) => ({ code: P, indent: e, parameters: [a.armorId, y, S, a.value, !1] }), Ir = (a, e = 0) => ({
  code: P,
  indent: e,
  parameters: [a.armorId, y, T, a.variableId, !1]
}), Cr = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), Rr = (a) => ({ variableId: a[0], itemType: a[1] }), Sr = (a = 0) => ({
  code: 135,
  parameters: [1],
  indent: a
}), yr = (a = 0) => ({ code: 135, parameters: [0], indent: a }), Nr = (a = 0) => ({ code: 134, parameters: [1], indent: a }), Or = (a = 0) => ({ code: 134, parameters: [0], indent: a }), Mr = (a = 0) => ({
  code: 137,
  parameters: [1],
  indent: a
}), gr = (a = 0) => ({ code: 137, parameters: [0], indent: a }), da = (a) => [a], Lr = (a) => ({ comment: a[0] }), Qa = (a, e = 0) => ({ code: Na, indent: e, parameters: da(a) }), Ja = (a, e = 0) => ({
  code: Oa,
  indent: e,
  parameters: da(a)
}), ur = (a, e = 0) => a.map((t, s) => s === 0 ? Qa(t, e) : Ja(t, e)), Za = (a = {}) => [(a == null ? void 0 : a.speed) ?? 4, (a == null ? void 0 : a.skip) ?? !1], br = (a) => ({ speed: a[0], skip: a[1] }), Pr = (a = {}, e = 0) => ({
  code: Ma,
  indent: e,
  parameters: Za(a)
}), $a = (a = "") => [a], kr = (a) => ({ content: a[0] }), Dr = (a = "", e = 0) => ({ code: ga, indent: e ?? 0, parameters: $a(a) }), vr = (a, e = 0) => ({
  code: 402,
  indent: e,
  parameters: [(a == null ? void 0 : a.index) ?? 0, (a == null ? void 0 : a.name) ?? ""]
}), fr = (a) => ({ index: a[0], name: a[1] }), Fr = (a) => [a.index ?? 0, a.name ?? ""], hr = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), Gr = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], Ur = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [(a == null ? void 0 : a.choices) ?? [], (a == null ? void 0 : a.cancelType) ?? 0, (a == null ? void 0 : a.defaultType) ?? 0, (a == null ? void 0 : a.positionType) ?? 2, (a == null ? void 0 : a.background) ?? 0]
}), Br = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), Hr = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), xr = (a) => ({
  filename: a[0]
}), Vr = ({ args: a = {}, commandName: e, commandTitle: t = "", pluginName: s }, m = 0) => ({ code: 357, indent: m, parameters: [s, e, t, { ...a }] }), wr = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), Yr = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), Wr = (a, e = 0) => ({ code: 129, parameters: [1, a.actorId], indent: e }), Xr = (a, e = 0) => ({
  code: 125,
  parameters: [0, 0, a.value],
  indent: e
}), qr = (a, e = 0) => ({ code: 125, parameters: [1, 0, a.value], indent: e }), Kr = (a, e = 0) => ({ code: 125, parameters: [0, 1, a.variableId], indent: e }), zr = (a, e = 0) => ({
  code: 125,
  parameters: [1, 1, a.variableId],
  indent: e
}), jr = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: m = 0, scaleX: n = 100, scaleY: i = 100, opacity: p = 255, blendMode: c = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, m, n, i, p, c]
}), Qr = ({ pictureId: a, origin: e, x: t, y: s, scaleX: m, scaleY: n, opacity: i, blendMode: p, wait: c = !1, easingType: _ = 0 }) => ({
  code: 232,
  indent: 0,
  parameters: [a, e, t, s, m, n, i, p, c, _]
}), ae = (a, e = 0) => ({ code: La, indent: e, parameters: [a] }), ee = (a, e = 0) => ({
  code: ua,
  indent: e,
  parameters: [a]
}), Jr = (a, e = 0) => a.map((t, s) => s === 0 ? ae(t, e) : ee(t, e)), Zr = 1, $r = 0, b = { item: 0, weapon: 1, armors: 2 }, am = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map((s, m) => {
  const n = ((i) => i.customPrice !== void 0 && i.customPrice !== 0)(s) ? 1 : 0;
  return m === 0 ? { code: ba, indent: t, parameters: [b[s.itemType] ?? b.item, s.id, n, s.customPrice ?? 0, e] } : {
    code: Pa,
    indent: t,
    parameters: [b[s.itemType] ?? b.item, s.id, n, s.customPrice ?? 0]
  };
}), em = 0, tm = 1, sm = 2, rm = 3, mm = 4, nm = 5, om = 0, im = 1, dm = 2, pm = 3, cm = 4, lm = 0, Em = 1, Am = 2, Tm = (a) => a.parameters[2] === 1, te = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 1, e.variableId], _m = (a, e, t = {}) => ({
  code: o,
  indent: t.indent ?? 0,
  parameters: te(a, e, t.operation ?? 0)
}), Im = (a, e = 0) => ({ code: o, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 0] }), Cm = (a, e = 0) => ({
  code: o,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 1]
}), Rm = (a, e = 0) => ({ code: o, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 3] }), Sm = (a, e = 0) => ({
  code: o,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 2]
}), ym = (a, e = 0) => ({ code: o, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 4] }), Nm = (a, e = 0) => ({
  code: o,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 5]
}), Om = (a, e = 0) => ({ code: o, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 6] }), Mm = (a, e = 0) => ({
  code: o,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 7]
}), gm = (a, e = 0) => ({ code: o, indent: 0, parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 8] }), Lm = (a, e = 0) => ({
  code: o,
  indent: 0,
  parameters: [a.startId, a.endId ?? a.startId, e, 3, 7, 9]
}), se = {
  USED_SKILL_ID: 0,
  USED_ITEM_ID: 1,
  ACTION_ACTOR_ID: 2,
  ACTION_ENEMY_INDEX: 3,
  TARGET_ACTOR_ID: 4,
  TARGET_ENEMY_INDEX: 5
}, um = (a, e, t = {}) => ({ code: o, indent: t.indent ?? 0, parameters: re(a, e) }), re = (a, e) => [a.startId, a.endId ?? a.startId, 0, 3, 8, se[e.param]], bm = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.hp;
    case 1:
      return a.mp;
    case 10:
      return a.tp;
  }
  return e[6] >= 2 && e[6] <= 9 ? a.param(e[6] - 2) : 0;
}, Pm = (a, e) => {
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
}, me = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], km = (a, e, t = {}) => ({
  code: o,
  indent: t.indent ?? 0,
  parameters: me(a, e, t.operation ?? 0)
}), ne = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], Dm = (a, e) => ({
  code: o,
  indent: 0,
  parameters: ne(a, e, 0)
}), oe = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], vm = (a, e, t = {}) => ({ code: o, indent: t.indent ?? 0, parameters: oe(a, e, t.operation ?? 0) }), ie = {
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
}, de = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, ie[e.param]], fm = (a, e, t = {}) => ({
  code: o,
  indent: t.indent ?? 0,
  parameters: de(a, e, t.operation ?? 0)
}), Fm = (a, e, t = {}) => ({
  code: o,
  indent: t.indent ?? 0,
  parameters: pe(a, e, t.operation ?? 0)
}), pe = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], ce = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], hm = (a, e, t = {}) => ({
  code: o,
  indent: t.indent ?? 0,
  parameters: ce(a, e, t.operation ?? 0)
}), le = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 4, e.code], Gm = (a, e, t = {}) => ({
  code: o,
  indent: t.indent ?? 0,
  parameters: le(a, e, t.operation ?? 0)
}), Ee = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 1, e.weaponId], Um = (a, e) => ({ code: o, indent: 0, parameters: Ee(a, e, 0) }), Bm = (a = 0) => ({ code: 206, indent: a, parameters: [] }), Hm = (a, e = 0) => ({
  code: 323,
  indent: e,
  parameters: [a.vehicleId, a.characterImage, a.characterIndex]
}), xm = (a, e = 0) => ({ code: 140, indent: e, parameters: [a.vheicleId, r(a.bgm)] }), Vm = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 0, a.mapId, a.x, a.y]
}), wm = (a, e = 0) => ({
  code: 202,
  indent: e,
  parameters: [a.vehicleId, 1, a.variableMapId, a.variableX, a.variableY]
}), Ym = 0, Wm = 1, Xm = 2, Ae = (a) => [...a], qm = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: Ae(a.parameters)
}), Te = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", Km = (a) => a.parameters.every(Te), zm = "bgm", jm = "se", Qm = "me", Jm = "bgs", Zm = "battlebacks1", $m = "battlebacks2", an = "characters", en = "enemies", tn = "faces", sn = "parallaxes", rn = "pictures", mn = "sv_actors", nn = "sv_enemies", on = "system", dn = "tilesets", pn = "titles1", cn = "titles2", ln = "System.json", En = "Actors.json", An = "Classes.json", Tn = "Skills.json", _n = "Items.json", In = "Weapons.json", Cn = "Armors.json", Rn = "Enemies.json", Sn = "Troops.json", yn = "States.json", Nn = "Animations.json", On = "Tilesets.json", Mn = "CommonEvents.json", gn = "MapInfos.json", Ln = "data", un = "img", bn = "audio", Pn = "js", _e = (a = {}) => ({
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
}), Ie = (a = {}) => [r(a.cursor), r(a.ok), r(a.cancel), r(a.buzzer), r(a.equip), r(a.save), r(a.load), r(a.battleStart), r(a.escape), r(a.enemyAttack), r(a.enemyDamage), r(a.enemyCollapse), r(a.bossCollapes1), r(a.bossCollapes2), r(a.actorDamage), r(a.actorCollapse), r(a.playRecovery), r(a.playMiss), r(a.playEvasion), r(a.playMagicEvasion), r(a.playReflection), r(a.shop), r(a.useItem), r(a.useSkill)], kn = (a) => ({
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
}), Dn = (a) => a.menuCommands[0], vn = (a) => a.menuCommands[1], fn = (a) => a.menuCommands[2], Fn = (a) => a.menuCommands[3], hn = (a) => a.menuCommands[4], Gn = (a) => a.menuCommands[5], Un = (a) => a.itemCategories[0], Bn = (a) => a.itemCategories[1], Hn = (a) => a.itemCategories[2], xn = (a) => a.itemCategories[3], Ce = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], Vn = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), Re = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], wn = (a) => ({
  item: a[0],
  skill: a[1],
  equip: a[2],
  status: a[3],
  formation: a[4],
  save: a[5]
}), Se = (a = {}) => ({
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
}), Yn = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), Wn = (a) => ({
  armorTypes: A(a.armorTypes),
  elements: A(a.elements),
  equipTypes: A(a.equipTypes),
  weaponTypes: A(a.weaponTypes),
  skillTypes: A(a.skillTypes),
  variables: A(a.variables),
  switches: A(a.switches)
}), A = (a) => a ? [...a] : [], Xn = (a) => a.terms.params.map((e, t) => ({
  name: e,
  id: t
})), ye = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), v = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: r(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), Ne = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), qn = { title: "オプション", options: {
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
} }, Kn = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, zn = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, jn = {
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
}, Qn = (a) => {
  var t, s, m, n, i, p, c, _, g, L, u, h, G, U, B, H, x, V, w, Y, W, X, q, K, z, j, Q, J, Z, $, aa;
  const e = Me(a.size);
  return {
    ...Se(a.options),
    titleCommandWindow: ye(a.titleCommandWindow ?? {}),
    currencyUnit: ((t = a.texts) == null ? void 0 : t.currencyUnit) ?? "",
    gameTitle: ((s = a.texts) == null ? void 0 : s.gameTitle) ?? "",
    sounds: Ie(a.sounds),
    editor: Ne(a.editing),
    advanced: _e(a.advanced),
    title1Name: ((m = a.images) == null ? void 0 : m.title1Name) ?? "",
    title2Name: ((n = a.images) == null ? void 0 : n.title2Name) ?? "",
    armorTypes: l((i = a.dataNames) == null ? void 0 : i.armorTypes),
    equipTypes: l((p = a.dataNames) == null ? void 0 : p.equipTypes),
    elements: l((c = a.dataNames) == null ? void 0 : c.elements),
    skillTypes: l((_ = a.dataNames) == null ? void 0 : _.skillTypes),
    weaponTypes: l((g = a.dataNames) == null ? void 0 : g.weaponTypes),
    switches: l((L = a.dataNames) == null ? void 0 : L.switches),
    variables: l((u = a.dataNames) == null ? void 0 : u.variables),
    magicSkills: l((h = a.battle) == null ? void 0 : h.magicSkills),
    battleSystem: ((G = a.battle) == null ? void 0 : G.battleSystem) ?? 0,
    airship: v((U = a.vehicles) == null ? void 0 : U.airship),
    boat: v((B = a.vehicles) == null ? void 0 : B.boat),
    ship: v((H = a.vehicles) == null ? void 0 : H.ship),
    defeatMe: r((x = a.me) == null ? void 0 : x.defeatMe),
    gameoverMe: r((V = a.me) == null ? void 0 : V.gameoverMe),
    titleBgm: r((w = a.bgm) == null ? void 0 : w.titleBgm),
    tileSize: e.tileSize,
    faceSize: e.faceSize,
    iconSize: e.iconSize,
    versionId: 1,
    attackMotions: a.attackMotion ? [...a.attackMotion] : [],
    battleback1Name: ((Y = a.battleTest) == null ? void 0 : Y.battleback1Name) ?? "",
    battleback2Name: ((W = a.battleTest) == null ? void 0 : W.battleback2Name) ?? "",
    testTroopId: ((X = a.battleTest) == null ? void 0 : X.testTroopId) ?? 0,
    testBattlers: ge((q = a.battleTest) == null ? void 0 : q.testBattlers, Le),
    battleBgm: r((K = a.bgm) == null ? void 0 : K.battleBgm),
    victoryMe: r((z = a.me) == null ? void 0 : z.victoryMe),
    editMapId: ((j = a.editorTemporary) == null ? void 0 : j.editMapId) ?? 0,
    battlerName: ((Q = a.editorTemporary) == null ? void 0 : Q.battlerName) ?? "",
    locale: a.locale ?? "en-US",
    startMapId: ((J = a.gameInit) == null ? void 0 : J.startMapId) ?? 0,
    startX: ((Z = a.gameInit) == null ? void 0 : Z.startX) ?? 0,
    startY: (($ = a.gameInit) == null ? void 0 : $.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Oe(a.terms ?? {}),
    itemCategories: Ce(a.itemCategories),
    partyMembers: l((aa = a.gameInit) == null ? void 0 : aa.partyMembers),
    battlerHue: 0,
    menuCommands: Re(a.menuComamnds)
  };
}, Oe = (a) => ({
  basic: fa(a.basic ?? {}),
  commands: va(a.commands ?? {}),
  params: Da(a.params ?? {}),
  messages: ka(a.messages ?? {})
}), l = (a) => a ? [...a] : [], Me = (a) => a ? { tileSize: a.tileSize ?? 48, faceSize: a.faceSize ?? 144, iconSize: a.iconSize ?? 32 } : {
  tileSize: 48,
  faceSize: 144,
  iconSize: 32
}, ge = (a, e) => a ? a.map(e) : [], Le = (a) => a ? { actorId: a.actorId, equips: l(a.equips), level: a.level } : { actorId: 0, equips: [], level: 1 }, Jn = (a) => ({
  ...a.text ? { text: a.text } : {},
  ...a.desc ? { desc: a.desc } : {}
}), Zn = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, $n = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  to as ABORT_BATTLE,
  so as BATTLE_PROCESSING,
  ro as CHANGE_ACTOR_IMAGES,
  mo as CHANGE_ACTOR_STATE,
  P as CHANGE_ARMORS,
  no as CHANGE_BATTLE_BACKGROUND,
  Ia as CHANGE_BATTLE_BGM,
  oo as CHANGE_CLASS,
  Ra as CHANGE_DEFEAT_ME,
  io as CHANGE_ENCOUNTER,
  po as CHANGE_ENEMY_HP,
  co as CHANGE_ENEMY_MP,
  lo as CHANGE_ENEMY_STATE,
  Eo as CHANGE_ENEMY_TP,
  Ao as CHANGE_EXP,
  To as CHANGE_FORMATION_ACCESS,
  _o as CHANGE_GOLD,
  ma as CHANGE_HP,
  O as CHANGE_ITEMS,
  Io as CHANGE_MAP_NAME_DISPLAY,
  Co as CHANGE_MENU_ACCESS,
  na as CHANGE_MP,
  pa as CHANGE_NAME,
  ca as CHANGE_NICKNAME,
  Ro as CHANGE_PARALLAX,
  So as CHANGE_PARAMETER,
  yo as CHANGE_PARTY_MEMBER,
  No as CHANGE_PLAYER_FOLLOWERS,
  la as CHANGE_PROFILE,
  Oo as CHANGE_SAVE_ACCESS,
  Mo as CHANGE_SKILL,
  go as CHANGE_TILESET,
  oa as CHANGE_TP,
  Lo as CHANGE_TRANSPARENCY,
  uo as CHANGE_VEHICLE_BGM,
  bo as CHANGE_VEHICLE_IMAGE,
  Ca as CHANGE_VICTORY_ME,
  M as CHANGE_WEAPONS,
  Po as CHANGE_WINDOW_COLOR,
  ko as COLLAPS_BOSS,
  Do as COLLAPS_INSTANT,
  vo as COLLAPS_NONE,
  fo as COLLAPS_NORMAL,
  Oa as COMMENT_BODY,
  Na as COMMENT_HEAD,
  Sa as COMMON_EVENT,
  Fo as CONDITIONAL_BRANCH,
  ho as CONDITIONAL_BRANCH_ELSE,
  Go as CONTROL_SELF_SWITCH,
  ya as CONTROL_SWITCHES,
  Uo as CONTROL_TIMER,
  o as CONTROL_VARIABLES,
  Zr as CUSTOM_PRICE,
  xa as DEFAULT_DAMAGE_LABELS,
  qa as DEFAULT_GLOBAL_LABELS,
  as as DEFAULT_ITEM_LABELS,
  es as DEFAULT_SKILL_LABELS,
  qn as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Kn as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  ts as DEFAULT_USABLE_ITEM_LABELS,
  Zn as DIRECTION,
  Bo as EFFECT_ADD_BUFF,
  Ho as EFFECT_ADD_DEBUFF,
  xo as EFFECT_ADD_STATE,
  Vo as EFFECT_COMMON_EVENT,
  wo as EFFECT_GAIN_TP,
  Yo as EFFECT_GROW,
  Wo as EFFECT_LEARN_SKILL,
  Xo as EFFECT_RECOVER_HP,
  qo as EFFECT_RECOVER_MP,
  Ko as EFFECT_REMOVE_BUFF,
  zo as EFFECT_REMOVE_DEBUFF,
  jo as EFFECT_REMOVE_STATE,
  Qo as EFFECT_SPECIAL,
  Jo as ENEMY_APPEAR,
  Zo as ENEMY_RECOVER_ALL,
  $o as ENEMY_TRANSFORM,
  ai as ERASE_EVENT,
  ei as ERASE_PICTURE,
  ti as EXIT_EVENT_PROCESSING,
  si as EXTRA_PARAM_CEV,
  ri as EXTRA_PARAM_CNT,
  mi as EXTRA_PARAM_CRI,
  ni as EXTRA_PARAM_EVA,
  oi as EXTRA_PARAM_HIT,
  ii as EXTRA_PARAM_HRG,
  di as EXTRA_PARAM_MEV,
  pi as EXTRA_PARAM_MRF,
  ci as EXTRA_PARAM_MRG,
  li as EXTRA_PARAM_TRG,
  Ei as FADEIN_SCREEN,
  Ai as FADEOUT_BGM,
  Ti as FADEOUT_BGS,
  _i as FADEOUT_SCREEN,
  En as FILENAME_ACTORS,
  Nn as FILENAME_ANIMATIONS,
  Cn as FILENAME_ARMORS,
  An as FILENAME_CLASSES,
  Mn as FILENAME_COMMON_EVENTS,
  Rn as FILENAME_ENEMIES,
  _n as FILENAME_ITEMS,
  gn as FILENAME_MAP_INFOS,
  Tn as FILENAME_SKILLS,
  yn as FILENAME_STATES,
  ln as FILENAME_SYSTEM,
  On as FILENAME_TILESET,
  Sn as FILENAME_TROOPS,
  In as FILENAME_WEAPONS,
  Ii as FLAG_ID_AUTO_BATTLE,
  Ci as FLAG_ID_GUARD,
  Ri as FLAG_ID_PRESERVE_TP,
  Si as FLAG_ID_SUBSTITUTE,
  yi as FLASH_SCREEN,
  bn as FOLDER_AUDIO,
  zm as FOLDER_AUDIO_BGM,
  Jm as FOLDER_AUDIO_BGS,
  Qm as FOLDER_AUDIO_ME,
  jm as FOLDER_AUDIO_SE,
  Ln as FOLDER_DATA,
  un as FOLDER_IMG,
  Zm as FOLDER_IMG_BATTLEBACK1,
  $m as FOLDER_IMG_BATTLEBACK2,
  an as FOLDER_IMG_CHACTERS,
  en as FOLDER_IMG_ENEMIES,
  tn as FOLDER_IMG_FACES,
  sn as FOLDER_IMG_PARALLACES,
  rn as FOLDER_IMG_PICTURES,
  mn as FOLDER_IMG_SV_ACTORS,
  nn as FOLDER_IMG_SV_ENEMIES,
  on as FOLDER_IMG_SYSTEM,
  dn as FOLDER_IMG_TILESETS,
  pn as FOLDER_IMG_TITLES1,
  cn as FOLDER_IMG_TITLES2,
  Pn as FOLDER_JS,
  Ni as FORCE_ACTION,
  Oi as GAME_OVER,
  Mi as GATHER_FOLLOWERS,
  gi as GET_LOCATION_INFO,
  Li as GET_ONOFF_VEHICLE,
  jt as HITTYPE_CERTAIN,
  Jt as HITTYPE_MAGICAL,
  Qt as HITTYPE_PHYSICAL,
  ui as INPUT_NUMBER,
  bi as LABEL,
  zt as LABELS_DATA_WEAPON,
  zn as LABELS_SYSTEM_BATTLER_PARAMS,
  jn as LABELS_SYSTEM_GAME_COMMANDS,
  Pi as LABEL_JUMP,
  Ha as LABEL_SET_DATA,
  Xa as LABEL_SET_ITEM_EFFECT,
  Ya as LABEL_SET_TRAIT,
  ki as LOOP,
  Di as LOOP_BREAK,
  ms as MODULE_DATA,
  vi as MOVE_PICTURE,
  fi as NAME_INPUT_PROCESSING,
  $r as NORMAL_PRICE,
  Fi as NO_OPERATION,
  hi as OPEN_MENU_SCREEN,
  Gi as OPEN_SAVE_SCREEN,
  om as OPERAND_CONSTANT,
  pm as OPERAND_GAMEDATA,
  dm as OPERAND_RANDOM,
  cm as OPERAND_SCRIPT,
  im as OPERAND_VARIABLE,
  tm as OPERATION_ADD,
  mm as OPERATION_DIVIDE,
  nm as OPERATION_MOD,
  rm as OPERATION_MULTIPLY,
  em as OPERATION_SET,
  sm as OPERATION_SUBTRACT,
  Ui as PARTY_ABILITY_CANCEL_SURPRISE,
  Bi as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Hi as PARTY_ABILITY_ENCOUNTER_HALF,
  xi as PARTY_ABILITY_ENCOUNTER_NONE,
  Vi as PARTY_ABILITY_GOLD_DOUBLE,
  wi as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Ea as PLAY_BGM,
  Aa as PLAY_BGS,
  Ta as PLAY_ME,
  Yi as PLAY_MOVIE,
  _a as PLAY_SE,
  Wi as PLUGIN_COMMAND_MV,
  Xi as PLUGIN_COMMAND_MZ,
  qi as RECOVER_ALL,
  Ki as REGULAR_PARAM_AGI,
  zi as REGULAR_PARAM_ATK,
  ji as REGULAR_PARAM_DEF,
  Qi as REGULAR_PARAM_LUK,
  Ji as REGULAR_PARAM_MATK,
  Zi as REGULAR_PARAM_MAX_HP,
  $i as REGULAR_PARAM_MAX_MP,
  ad as REGULAR_PARAM_MDEF,
  ed as RESUME_BGM,
  td as RETURN_TO_TITLE_SCREEN,
  sd as ROTATE_PICTURE,
  Pt as ROUTE_CHANGE_BLEND_MODE,
  _t as ROUTE_CHANGE_FREQ,
  ut as ROUTE_CHANGE_IMAGE,
  bt as ROUTE_CHANGE_OPACITY,
  Tt as ROUTE_CHANGE_SPEED,
  Nt as ROUTE_DIR_FIX_OFF,
  yt as ROUTE_DIR_FIX_ON,
  xe as ROUTE_END,
  at as ROUTE_JUMP,
  Je as ROUTE_MOVE_AWAY,
  $e as ROUTE_MOVE_BACKWARD,
  Ve as ROUTE_MOVE_DOWN,
  Ze as ROUTE_MOVE_FORWARD,
  we as ROUTE_MOVE_LEFT,
  Xe as ROUTE_MOVE_LOWER_L,
  qe as ROUTE_MOVE_LOWER_R,
  je as ROUTE_MOVE_RANDOM,
  Ye as ROUTE_MOVE_RIGHT,
  Qe as ROUTE_MOVE_TOWARD,
  We as ROUTE_MOVE_UP,
  Ke as ROUTE_MOVE_UPPER_L,
  ze as ROUTE_MOVE_UPPER_R,
  kt as ROUTE_PLAY_SE,
  Dt as ROUTE_SCRIPT,
  St as ROUTE_STEP_ANIME_OFF,
  Rt as ROUTE_STEP_ANIME_ON,
  At as ROUTE_SWITCH_OFF,
  Et as ROUTE_SWITCH_ON,
  Mt as ROUTE_THROUGH_OFF,
  Ot as ROUTE_THROUGH_ON,
  Lt as ROUTE_TRANSPARENT_OFF,
  gt as ROUTE_TRANSPARENT_ON,
  it as ROUTE_TURN_180D,
  ot as ROUTE_TURN_90D_L,
  nt as ROUTE_TURN_90D_R,
  dt as ROUTE_TURN_90D_R_L,
  lt as ROUTE_TURN_AWAY,
  tt as ROUTE_TURN_DOWN,
  st as ROUTE_TURN_LEFT,
  pt as ROUTE_TURN_RANDOM,
  rt as ROUTE_TURN_RIGHT,
  ct as ROUTE_TURN_TOWARD,
  mt as ROUTE_TURN_UP,
  et as ROUTE_WAIT,
  Ct as ROUTE_WALK_ANIME_OFF,
  It as ROUTE_WALK_ANIME_ON,
  rd as SAVE_BGM,
  Kt as SCHEMA_DATA_WEAPON,
  La as SCRIPT_EVAL,
  ua as SCRIPT_EVAL_BODY,
  md as SCROLL_MAP,
  nd as SELECT_ITEM,
  od as SET_EVENT_LOCATION,
  id as SET_MOVEMENT_ROUTE,
  dd as SET_VEHICLE_LOCATION,
  pd as SET_WEATHER_EFFECT,
  cd as SHAKE_SCREEN,
  ba as SHOP_PROCESSING,
  Pa as SHOP_PROCESSING_BODY,
  ld as SHOW_ANIMATION,
  Ed as SHOW_BALLOON_ICON,
  Ad as SHOW_BATTLE_ANIMATION,
  Td as SHOW_CHOICES,
  _d as SHOW_CHOICES_ITEM,
  Id as SHOW_MESSAGE,
  Cd as SHOW_MESSAGE_BODY,
  Rd as SHOW_PICTURE,
  Ma as SHOW_SCROLLING_TEXT,
  ga as SHOW_SCROLLING_TEXT_BODY,
  Sd as SKIP,
  Zt as SPECIAL_EFFECT_ESCAPE,
  yd as SPECIAL_PARAM_EXR,
  Nd as SPECIAL_PARAM_FDR,
  Od as SPECIAL_PARAM_GRD,
  Md as SPECIAL_PARAM_MCR,
  gd as SPECIAL_PARAM_MDR,
  Ld as SPECIAL_PARAM_PDR,
  ud as SPECIAL_PARAM_PHA,
  bd as SPECIAL_PARAM_REC,
  Pd as SPECIAL_PARAM_TCR,
  kd as SPECIAL_PARAM_TGR,
  ns as SRC_DATA_ACTOR,
  Es as SRC_DATA_ARMOR,
  As as SRC_DATA_CLASS,
  Ts as SRC_DATA_COMMON_EVNET,
  is as SRC_DATA_ENEMY,
  cs as SRC_DATA_ITEMS,
  os as SRC_DATA_MAP,
  ps as SRC_DATA_SKILL,
  ds as SRC_DATA_STATE,
  _s as SRC_DATA_TROOP,
  ls as SRC_DATA_WEAPON,
  Dd as STOP_SE,
  vd as TINT_PICTURE,
  fd as TINT_SCREEN,
  Fd as TRAIT_ACTION_PLUS,
  hd as TRAIT_ATTACK_ELEMENT,
  Gd as TRAIT_ATTACK_SKILL,
  Ud as TRAIT_ATTACK_SPEED,
  Bd as TRAIT_ATTACK_STATE,
  Hd as TRAIT_ATTACK_TIMES,
  xd as TRAIT_COLLAPSE_TYPE,
  Vd as TRAIT_DEBUFF_RATE,
  wd as TRAIT_ELEMENT_RATE,
  Yd as TRAIT_EQUIP_ARMOR_TYPE,
  Wd as TRAIT_EQUIP_LOCK,
  Xd as TRAIT_EQUIP_SEAL,
  qd as TRAIT_EQUIP_WEAPON_TYPE,
  Kd as TRAIT_PARAM,
  zd as TRAIT_PARTY_ABILITY,
  jd as TRAIT_SKILL_ADD,
  Qd as TRAIT_SKILL_SEAL,
  Jd as TRAIT_SKILL_TYPE_ADD,
  Zd as TRAIT_SKILL_TYPE_SEAL,
  $d as TRAIT_SLOT_TYPE,
  ap as TRAIT_SPARAM,
  ep as TRAIT_SPECIAL_FLAG,
  tp as TRAIT_STATE_RATE,
  sp as TRAIT_STATE_RESIST,
  rp as TRAIT_XPARAM,
  mp as TRANSFER_PLAYER,
  Am as TYPE_ARMOR,
  lm as TYPE_ITEM,
  Em as TYPE_WEAPON,
  Xm as VEHICLE_AIRSHIP,
  Ym as VEHICLE_BOAT,
  Wm as VEHICLE_SHIP,
  np as WAIT,
  op as buildNoteFromNormalized,
  Br as cloneChoices,
  qm as cloneEventCommand,
  Ae as cloneParameters,
  ip as collapsOptionsToArray,
  Lr as convertCommentArrayToObject,
  Fe as createActorControlChars,
  f as createControlCharFormat,
  dp as createNoteEntity,
  he as createSystemVariableControlChars,
  pp as defineGameDataSources,
  cp as defineSystemItems,
  lp as defineTraitCollapseType,
  Ep as defineTraitExtraParam,
  Ap as defineTraitItems,
  Tp as defineTraitPartyAbility,
  _p as defineTraitRegularParam,
  Ip as defineTraitSpecialFlag,
  Cp as defineTraitSpecialParam,
  Rp as extraParamName,
  Sp as extraParamsToArray,
  $n as extractFileName,
  $t as formatItemEffectText,
  Xt as formatTraitText,
  tr as fromArrayChangeItems,
  ir as fromArrayChangeWeapons,
  js as fromArrayCommonEvent,
  Qs as fromArrayControlSwitches,
  Vs as fromArrayEnemyTransform,
  ar as fromArrayInputNumber,
  xr as fromArrayPlayMovie,
  wr as fromArrayPluginCommandMZ,
  kr as fromArrayScrollingTextBody,
  br as fromArrayScrollingTextHeader,
  Rr as fromArraySelectItem,
  hr as fromArraySetupChoice,
  fr as fromArraySetupChoiceItem,
  yp as fromArrayShowMessageHeader,
  ve as fromStringArray,
  Pm as getActorValue,
  Hn as getArmorCategoryEnabled,
  Np as getArmorTypes,
  fe as getControlChars,
  Op as getElementTypes,
  bm as getEnemyValue,
  fn as getEquipCommandEnabled,
  Mp as getEquipTypes,
  hn as getFormationCommandEnabled,
  Un as getItemCategoryEnabled,
  Dn as getItemCommandEnabled,
  gp as getItemIdFromItemCommand,
  xn as getKeyItemCategoryEnabled,
  Lp as getNoteValue,
  Xn as getParamNames,
  Gn as getSaveCommandEnabled,
  vn as getSkillCommandEnabled,
  up as getSkillTypes,
  Fn as getStatusCommandEnabled,
  bp as getSwitches,
  Pp as getVariableNames,
  Bn as getWeaponCategoryEnabled,
  kp as getWeaponTypes,
  Km as isCloneableCommand,
  Tm as isCommandOperandVariables,
  Dp as isUsingVariableItemCommand,
  er as isUsingVaribleCommandChangingItems,
  Is as labelsRegistry,
  Ut as makeActorData,
  Ht as makeArmorData,
  Ds as makeAudioCommand,
  Be as makeBattleEventPage,
  Se as makeBooleanOptions,
  xt as makeClassData,
  Ws as makeCommandAddEachEnemyState,
  ws as makeCommandAddEnemyState,
  Yr as makeCommandAddPartyMember,
  E as makeCommandAudioAny,
  De as makeCommandChangeActorImages,
  Cs as makeCommandChangeActorName,
  Rs as makeCommandChangeActorNickName,
  Ss as makeCommandChangeActorProfile,
  Gs as makeCommandChangeBattleBGM,
  Bs as makeCommandChangeDefeatME,
  sr as makeCommandChangeItems,
  xm as makeCommandChangeVehicleBGM,
  Hm as makeCommandChangeVehicleImage,
  Us as makeCommandChangeVictoryME,
  dr as makeCommandChangeWeapons,
  Ja as makeCommandCommentBody,
  Qa as makeCommandCommentHeader,
  zs as makeCommandCommonEvent,
  Js as makeCommandControlSwitches,
  Hs as makeCommandControlTimer,
  Mr as makeCommandDisableFormationAccess,
  Sr as makeCommandDisableMenuAccess,
  Nr as makeCommandDisableSaveAccess,
  gr as makeCommandEnableFormationAccess,
  yr as makeCommandEnableMenuAccess,
  Or as makeCommandEnableSaveAccess,
  Ks as makeCommandEnemyRecoverAll,
  qs as makeCommandEnemyRecoverAllEach,
  xs as makeCommandEnemyTransform,
  us as makeCommandFadeOutBGM,
  ks as makeCommandFadeOutBGS,
  ys as makeCommandGainActorHP,
  gs as makeCommandGainActorMP,
  Os as makeCommandGainActorTP,
  Ar as makeCommandGainArmor,
  Tr as makeCommandGainArmorByVariable,
  Xr as makeCommandGainGold,
  Kr as makeCommandGainGoldByVariable,
  rr as makeCommandGainItem,
  mr as makeCommandGainItemV,
  pr as makeCommandGainWeapon,
  cr as makeCommandGainWeaponV,
  Bm as makeCommandGetOnOffVehicle,
  Zs as makeCommandInputNumber,
  Ns as makeCommandLoseActorHP,
  Ls as makeCommandLoseActorMP,
  Ms as makeCommandLoseActorTP,
  _r as makeCommandLoseArmor,
  Ir as makeCommandLoseArmorByVariable,
  qr as makeCommandLoseGold,
  zr as makeCommandLoseGoldByVariable,
  nr as makeCommandLoseItem,
  or as makeCommandLoseItemV,
  lr as makeCommandLoseWeapon,
  Er as makeCommandLoseWeaponV,
  Qr as makeCommandMovePicture,
  vs as makeCommandPlayBGM,
  fs as makeCommandPlayBGS,
  Fs as makeCommandPlayME,
  Hr as makeCommandPlayMovie,
  hs as makeCommandPlaySE,
  Vr as makeCommandPluginCommandMZ,
  Pe as makeCommandRecoverAll,
  ke as makeCommandRecoverAllTarget,
  Xs as makeCommandRemoveEachEnemyState,
  Ys as makeCommandRemoveEnemyState,
  Wr as makeCommandRemovePartyMember,
  Ps as makeCommandResumeBGM,
  bs as makeCommandSaveBGM,
  Jr as makeCommandScriptArray,
  ee as makeCommandScriptBody,
  ae as makeCommandScriptHeader,
  Dr as makeCommandScrollingTextBody,
  Pr as makeCommandScrollingTextHeader,
  Cr as makeCommandSelectItem,
  Vm as makeCommandSetVehicleLocation,
  wm as makeCommandSetVehicleLocationFromVariables,
  Ur as makeCommandSetupChoice,
  am as makeCommandShopProcessing,
  vr as makeCommandShowChoiceItem,
  vp as makeCommandShowMessage,
  fp as makeCommandShowMessageBody,
  jr as makeCommandShowPicture,
  Mm as makeCommandSystemBattleCount,
  Lm as makeCommandSystemEscapeCount,
  Om as makeCommandSystemSaveCount,
  Nm as makeCommandSystemTimer,
  gm as makeCommandSystemWinCount,
  km as makeCommandVariableFromActorStatusData,
  Dm as makeCommandVariableFromArmor,
  vm as makeCommandVariableFromConstant,
  fm as makeCommandVariableFromEnemyData,
  Fm as makeCommandVariableFromItemData,
  Im as makeCommandVariableFromMapId,
  Sm as makeCommandVariableFromPartyGold,
  Cm as makeCommandVariableFromPartyMembers,
  Rm as makeCommandVariableFromPartySteps,
  ym as makeCommandVariableFromPlaytime,
  hm as makeCommandVariableFromRandom,
  Gm as makeCommandVariableFromScript,
  um as makeCommandVariableFromTempLastData,
  _m as makeCommandVariableFromVariable,
  Um as makeCommandVariableFromWeapon,
  da as makeCommentArray,
  ur as makeCommentCommandArray,
  Ge as makeCommonEventData,
  F as makeDamage,
  Wn as makeDataNames,
  wa as makeDropItem,
  Ne as makeEditorSetting,
  wt as makeEnemyAction,
  Yt as makeEnemyData,
  Ua as makeEventPageCondition,
  Yn as makeGameInitial,
  Ce as makeItemCategories,
  Vn as makeItemCategoriesFromArray,
  ss as makeItemData,
  ht as makeMapData,
  vt as makeMapEvent,
  Ba as makeMapEventIamge,
  ft as makeMapEventPage,
  Ft as makeMapFileInfo,
  Gt as makeMapInfoData,
  Re as makeMenuCommandsEnabled,
  wn as makeMenuCommandsEnabledFromArray,
  Va as makeParamArray,
  Da as makeParamNamesArray,
  Fp as makeParamNamesFromArray,
  rs as makeSkillData,
  Ie as makeSoundsArray,
  kn as makeSoundsObject,
  Wt as makeStateData,
  _e as makeSystemAdvanced,
  Qn as makeSystemData,
  fa as makeTermsBasic,
  hp as makeTermsBasicFromArray,
  va as makeTermsCommandArray,
  Gp as makeTermsCommandArrayWithNulls,
  Up as makeTermsCommandFromArray,
  ka as makeTermsMessages,
  ye as makeTitleCommandWindow,
  Ue as makeTroopData,
  Ga as makeTroopEventConditions,
  He as makeTroopMember,
  v as makeVehicleData,
  qt as makeWeaponData,
  Bt as normalizeDataActor,
  Bp as normalizeNote,
  Vt as paramArrayToObject,
  Hp as partyAbilityToArray,
  xp as readNote,
  Vp as readNoteEx,
  wp as readNoteObject,
  Yp as regularParamName,
  Wp as regularParamsToArray,
  Xp as replaceNote,
  qp as repleaceMapEventCommands,
  Kp as resolveItemEffectLabels,
  zp as resolveTraitLabels,
  jp as setNoteValue,
  Qp as specialFlagToArray,
  Jp as specialParamName,
  Zp as specialParamsToArray,
  Jn as textAndDesc,
  za as toArrayCommonEvent,
  ja as toArrayControlSwitches,
  $s as toArrayInputNumber,
  me as toArrayOperandActorStatus,
  ne as toArrayOperandArmorData,
  oe as toArrayOperandConstant,
  de as toArrayOperandEnemyStatus,
  pe as toArrayOperandItemData,
  ce as toArrayOperandRandom,
  le as toArrayOperandScript,
  te as toArrayOperandVariable,
  Ee as toArrayOperandWeaponData,
  $a as toArrayScrollingTextBody,
  Za as toArrayScrollingTextHeader,
  Gr as toArraySetupChoice,
  Fr as toArraySetupChoiceItem,
  $p as toArrayShowMessageHeader
};
