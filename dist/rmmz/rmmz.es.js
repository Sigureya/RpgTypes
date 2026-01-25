import { aF as pa, aJ as ca, aK as la, ax as ma, ay as na, az as oa, ae as Ea, ai as Aa, ak as Ta, al as _a, F as Ia, G as Ca, P as Ra, p as Sa, u as ya, z as O, cZ as R, cY as S, c$ as T, c_ as y, A as M, B as u, C as Na, j as Oa, h as Ma, i as ga, aZ as ua, a_ as La, au as Pa, av as ba, v as l, cX as ka, cQ as Da, cU as va, cS as fa } from "../shared/make.es2.js";
import { aT as Nn, at as On, aH as Mn, aC as gn, aq as un, aG as Ln, K as Pn, aL as bn, aM as kn, aN as Dn, aV as vn, aB as fn, M as Fn, y as hn, ao as Gn, J as Un, ar as Bn, aD as Hn, D as xn, a0 as Vn, H as wn, aE as Wn, ap as Yn, Y as qn, Q as Kn, aI as Xn, O as zn, bv as jn, bw as Qn, bx as Zn, bu as Jn, l as $n, n as ao, w as eo, x as to, cr as so, cs as ro, cp as mo, cy as no, co as oo, cw as io, cx as po, cm as co, cn as lo, ct as Eo, cu as Ao, cq as To, cv as _o, aP as Io, aO as Co, aQ as Ro, $ as So, ac as yo, E as No, bB as Oo, bE as Mo, bA as go, bz as uo, by as Lo, bF as Po, bC as bo, bD as ko, bG as Do, bH as vo, a3 as fo, af as Fo, aj as ho, a2 as Go, cf as Uo, cg as Bo, ci as Ho, ch as xo, a5 as Vo, aS as wo, aX as Wo, a1 as Yo, as as qo, X as Ko, I as Xo, q as zo, s as jo, L as Qo, o as Zo, a9 as Jo, aw as $o, N as ai, aU as ei, aW as ti, c9 as si, cc as ri, c7 as mi, c8 as ni, cb as oi, ca as ii, an as di, a$ as pi, b0 as ci, aA as li, bR as Ei, bN as Ai, bO as Ti, bS as _i, bP as Ii, bL as Ci, bM as Ri, bQ as Si, ah as yi, aY as Ni, aa as Oi, ag as Mi, V as gi, g as ui, U as Li, W as Pi, R as bi, ad as ki, a6 as Di, Z as vi, _ as fi, aR as Fi, d as hi, e as Gi, S as Ui, c as Bi, a8 as Hi, k as xi, c3 as Vi, c2 as wi, bX as Wi, b_ as Yi, c1 as qi, c0 as Ki, bZ as Xi, bY as zi, b$ as ji, bW as Qi, am as Zi, ab as Ji, a4 as $i, bo as ad, ba as ed, be as td, bc as sd, bb as rd, bd as md, bq as nd, b4 as od, b3 as id, bk as dd, bl as pd, bm as cd, bj as ld, b7 as Ed, br as Ad, bh as Td, bi as _d, bf as Id, bg as Cd, bn as Rd, b9 as Sd, bp as yd, b5 as Nd, b6 as Od, b8 as Md, T as gd, a7 as ud, cz as Ld, bt as Pd, cE as bd, b1 as kd, cP as Dd, bs as vd, bI as fd, b2 as Fd, cd as hd, bT as Gd, cj as Ud, c4 as Bd, bK as Hd, bJ as xd, f as Vd, cN as wd, cJ as Wd, cK as Yd, cG as qd, cL as Kd, cO as Xd, cI as zd, cM as jd, m as Qd, a as Zd, cR as Jd, cT as $d, cV as ap, cW as ep, cA as tp, ce as sp, cB as rp, cC as mp, cD as np, bV as op, bU as ip, cF as dp, b as pp, cl as cp, r as lp, cH as Ep, ck as Ap, c6 as Tp, c5 as _p, t as Ip } from "../shared/make.es2.js";
import { c as Fa, a as ha, m as r } from "../shared/make.es.js";
const ge = (a = 0) => ({ code: 314, indent: a, parameters: [0, 0] }), ue = (a, e = 0) => ({
  code: 314,
  indent: e,
  parameters: [1, a.targetSelectVariableId]
}), Le = ({ actorId: a = 1, faceIndex: e = 0, faceName: t = "", characterIndex: s = 0, characterName: m = "", battlerName: n = "" } = {}, o = 0) => ({
  code: 322,
  indent: o,
  parameters: [a, m, s, t, e, n]
}), k = (a, e) => `\\${a}[${e}]`, Pe = (a, e) => e.map((t, s) => ({ text: t, controlChar: k(a, s) })), be = (a) => Array.from(a.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e) => ({
  char: e[1],
  id: parseInt(e[2], 10)
})), ke = (a) => a.map((e) => ({ text: e.name, controlChar: k("N", e.id) })), De = (a) => a.variables.map((e, t) => ({
  text: e || "",
  controlChar: k("V", t)
})).filter((e) => e.text !== ""), ve = (a = {}) => ({ id: a.id ?? 0, name: a.name ?? "", trigger: a.trigger ?? 0, list: a.list ?? [], switchId: a.switchId ?? 0 }), fe = (a = {}) => ({
  id: a.id ?? 0,
  name: a.name ?? "",
  members: a.members ?? [],
  pages: a.pages ?? []
}), Fe = (a = {}) => ({ enemyId: a.enemyId ?? 0, x: a.x ?? 0, y: a.y ?? 0, hidden: a.hidden ?? !1 }), he = (a = {}) => ({
  actorHp: a.actorHp ?? 0,
  actorId: a.actorId ?? 0,
  enemyValid: a.enemyValid ?? 0,
  switchValid: a.switchValid ?? 0
}), Ga = (a = {}) => ({
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
}), Ge = 0, Ue = 1, Be = 2, He = 3, xe = 4, Ve = 5, we = 6, We = 7, Ye = 8, qe = 9, Ke = 10, Xe = 11, ze = 12, je = 13, Qe = 14, Ze = 15, Je = 16, $e = 17, at = 18, et = 19, tt = 20, st = 21, rt = 22, mt = 23, nt = 24, ot = 25, it = 26, dt = 27, pt = 28, ct = 29, lt = 30, Et = 31, At = 32, Tt = 33, _t = 34, It = 35, Ct = 36, Rt = 37, St = 38, yt = 39, Nt = 40, Ot = 41, Mt = 42, gt = 43, ut = 44, Lt = 45, Pt = ({ id: a = 1, name: e = "", pages: t = [], note: s = "", x: m = 0, y: n = 0 } = {}) => ({
  id: a,
  name: e,
  pages: t,
  note: s,
  x: m,
  y: n
}), Ua = ({ characterIndex: a = 0, characterName: e = "", direction: t = 2, pattern: s = 0, tileId: m = 0 } = {}) => ({
  characterIndex: a,
  characterName: e,
  direction: t,
  pattern: s,
  tileId: m
}), bt = ({ list: a = [], conditions: e = Ga(), image: t = Ua(), moveFrequency: s = 5, directionFix: m = !1, moveRoute: n = {
  list: [],
  repeat: !1,
  skippable: !1,
  wait: !1
}, priorityType: o = 1, stepAnime: d = !1, through: p = !1, walkAnime: _ = !1 } = {}) => ({
  walkAnime: _,
  stepAnime: d,
  through: p,
  conditions: e,
  list: a,
  directionFix: m,
  image: t,
  priorityType: o,
  moveFrequency: s,
  moveRoute: { list: n.list, repeat: n.repeat, skippable: n.skippable, wait: n.wait }
}), kt = (a, e) => ({ map: e, filename: `Map${a.id.toString().padStart(3, "0")}`, editingName: a.name }), Dt = (a = {}) => ({
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
}), vt = (a = { id: 0 }) => {
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
}, Ba = { actor: { title: "アクター", options: {
  initialEquipments: "初期装備",
  faceImage: "顔画像",
  characterImage: "キャラクター画像",
  svBattlerImage: "SVバトラー画像",
  nickname: "ニックネーム",
  profile: "プロフィール",
  classId: "職業ID",
  initialLevel: "初期レベル",
  maxLevel: "最大レベル"
} }, class: {
  title: "職業",
  options: { params: "パラメータ", learnings: "習得スキル", expParams: "経験値パラメータ" }
}, armor: { title: "防具", options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" } }, enemy: { title: "敵キャラ", options: {
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
} }, weapon: { title: "武器", options: { weaponTypeId: "武器タイプID" } }, usableItem: { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, commonEvent: { title: "コモンイベント", options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" } } }, Ha = {
  title: "ダメージ",
  options: {}
}, D = (a = {}) => ({ type: a.type ?? 0, elementId: a.elementId ?? 0, formula: a.formula ?? "", variance: a.variance ?? 0, critical: a.critical ?? !1 }), ft = (a = {}) => ({
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
}), Ft = (a) => ({
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
}), ht = (a = {}) => ({
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
}), Gt = (a = {}) => ({
  name: a.name ?? "",
  id: a.id ?? 0,
  traits: [],
  note: a.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: a.learnings ?? [],
  expParams: a.expParams ?? []
}), xa = ({ mhp: a = 0, mmp: e = 0, atk: t = 0, def: s = 0, mat: m = 0, mdf: n = 0, agi: o = 0, luk: d = 0 }) => [a, e, t, s, m, n, o, d], Ut = (a) => {
  const [e, t, s, m, n, o, d, p] = a;
  return { mhp: e, mmp: t, atk: s, def: m, mat: n, mdf: o, agi: d, luk: p };
}, Va = (a = {}) => ({ dataId: a.dataId ?? 0, denominator: a.denominator ?? 0, kind: a.kind ?? 0 }), Bt = (a = {}) => ({
  conditionParam1: a.conditionParam1 ?? 0,
  conditionParam2: a.conditionParam2 ?? 0,
  conditionType: a.conditionType ?? 0,
  rating: a.rating ?? 0,
  skillId: a.skillId ?? 0
}), Ht = (a = {}) => {
  var e;
  return {
    name: a.name ?? "",
    id: a.id ?? 0,
    battlerName: a.battlerName ?? "",
    battlerHue: a.battlerHue ?? 0,
    dropItems: ((e = a.dropItems) == null ? void 0 : e.map(() => Va())) ?? [],
    exp: a.exp ?? 0,
    gold: a.gold ?? 0,
    traits: [],
    note: a.note ?? "",
    params: a.params ? [...a.params] : xa({
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
}, xt = (a = {}) => ({
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
}), i = "{name}", I = "{name} * {value}%", ea = "{name} + {value}%", ta = "{value}", wa = { title: "特徴", options: {
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
  elementRate: { title: "属性有効度", format: I },
  debuffRate: { title: "弱体有効度", format: I },
  stateRate: { title: "ステート有効度", format: I },
  stateResist: {
    title: "ステート無効",
    format: i
  },
  attackElement: { title: "攻撃属性", format: i },
  attackState: { title: "攻撃ステート", format: ea },
  attackSpeed: { title: "攻撃速度補正", format: ta },
  attackTimes: {
    title: "攻撃追加回数",
    format: ta
  },
  actionPlus: { title: "行動追加", format: I },
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
} }, Wa = { itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" }, placeHolder: {
  numbers: ["value"]
} }, Vt = (a, e, t) => {
  const s = Fa(Wa);
  return ha(e, t, s, a.pattern, (m) => m.dataId);
}, wt = (a = {}) => ({
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
}), Wt = {
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
}, Yt = {
  title: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, qt = 0, Kt = 1, Xt = 2, sa = "{name} {value1}%", P = "{value1}% + {value2}", ra = "{name} {value1}ターン", N = "{name}", Ya = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: ra },
  addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: ra },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: P },
  grow: {
    desc: "成長効果",
    domainName: "成長効果",
    format: "{name} + {value1}"
  },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: N },
  recoverHp: {
    desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
    domainName: "HP回復",
    format: P
  },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: P },
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
} }, zt = 0, jt = (a, e, t) => {
  const s = t.find((n) => n.id === e.dataId), m = s ? s.name : "Unknown Item";
  return a.pattern.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", m);
}, Qt = { title: "アイテム", options: { consumable: "消耗品" } }, Zt = {
  title: "スキル",
  options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" }
}, Jt = { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, $t = (a = {}) => ({
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
}), as = (a = {}) => ({
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
}), es = "data", ts = "actor", ss = "map", rs = "enemy", ms = "state", ns = "skill", os = "item", is = "weapon", ds = "armor", ps = "class", cs = "common_event", ls = "troop", qa = {
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
}, Es = () => ({ rpg: { damage: Ha, data: Ba, traits: wa, itemEffect: Ya }, global: qa }), As = (a, e = 0) => ({ code: pa, parameters: [a.actorId, a.name], indent: e }), Ts = (a, e = 0) => ({
  code: ca,
  parameters: [a.actorId, a.nickname],
  indent: e
}), _s = (a, e = 0) => ({ code: la, parameters: [a.actorId, a.profile], indent: e }), C = { direct: 0, variable: 1 }, Is = (a, e = 0) => ({
  code: ma,
  indent: e,
  parameters: ia(0, a)
}), Cs = (a, e = 0) => ({ code: ma, indent: e, parameters: ia(1, a) }), Rs = (a, e = 0) => ({ code: oa, indent: e, parameters: L(0, a) }), Ss = (a, e = 0) => ({
  code: oa,
  indent: e,
  parameters: L(1, a)
}), ys = (a, e = 0) => ({ code: na, indent: e, parameters: L(0, a) }), Ns = (a, e = 0) => ({
  code: na,
  indent: e,
  parameters: L(1, a)
}), L = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value], ia = (a, e) => [e.targetType === "variable" ? C.variable : C.direct, e.targetType === "each" ? 0 : e.target, a, C[e.operand.mode], e.operand.value, e.allowDeath], Os = (a, e = 0) => ({
  code: 242,
  indent: e,
  parameters: [a.duration]
}), Ms = (a = 0) => ({ code: 243, indent: a, parameters: [] }), gs = (a = 0) => ({ code: 244, indent: a, parameters: [] }), us = (a, e = 0) => ({
  code: 246,
  indent: e,
  parameters: [a.duration]
}), Ls = (a, e) => E(a, r({ name: e })), E = (a, e, t = 0) => ({
  code: a,
  parameters: [r(e)],
  indent: t
}), Ps = (a, e = 0) => E(Ea, a, e), bs = (a, e = 0) => E(Aa, a, e), ks = (a, e = 0) => E(Ta, a, e), Ds = (a, e = 0) => E(_a, a, e), vs = (a, e = 0) => E(Ia, a, e), fs = (a, e = 0) => E(Ca, a, e), Fs = (a, e = 0) => E(Ra, a, e), Ka = {
  plus: 0,
  minus: 1
}, hs = ({ operation: a, time: e }) => ({ code: 124, indent: 0, parameters: [Ka[a ?? "plus"] ?? 0, e ?? 0] });
function Gs(a, e = 0) {
  return { code: 336, parameters: [a.enemyId, a.newEnemyId], indent: e };
}
const Us = (a) => ({ enemyId: a[0], newEnemyId: a[1] }), Bs = (a, e = 0) => ({ code: 333, indent: e, parameters: [a.enemyIndex, 0, a.stateId] }), Hs = (a, e = 0) => ({
  code: 333,
  indent: e,
  parameters: [a.enemyIndex, 1, a.stateId]
}), xs = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 0, a.stateId] }), Vs = (a, e = 0) => ({ code: 333, indent: e, parameters: [-1, 1, a.stateId] }), ws = (a = 0) => ({
  code: 334,
  indent: a,
  parameters: [0]
}), Ws = (a, e = 0) => ({ code: 334, indent: e, parameters: [a.enemyIndex] }), Ys = (a, e = 0) => ({ code: Sa, indent: e, parameters: Xa(a ?? {}) }), qs = (a) => ({
  eventId: a[0]
}), Xa = (a) => [a.eventId ?? 0], Ks = (a) => ({ min: a[0], max: a[1], value: a[2] }), za = (a) => [a.min, a.max, a.value], Xs = (a, e = 0) => ({ code: ya, indent: e, parameters: za(a) }), zs = (a, e = 0) => ({
  code: 103,
  parameters: [a.variableId, a.maxDigits],
  indent: e
}), js = (a) => [a.variableId ?? 0, a.maxDigits ?? 0], Qs = (a) => ({ variableId: a[0], maxDigits: a[1] }), Zs = (a) => a.parameters[3] === T, Js = (a) => ({
  operation: a[0],
  itemId: a[1],
  value: a[2],
  operand: a[3]
}), $s = (a, e = 0) => ({ code: O, indent: e, parameters: [a.operation, a.itemId, a.value, a.operand] }), ar = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [R, a.itemId, a.value, S]
}), er = (a, e = 0) => ({ code: O, indent: e, parameters: [R, a.itemId, a.variableId, T] }), tr = (a, e = 0) => ({
  code: O,
  indent: e,
  parameters: [y, a.itemId, a.value, S]
}), sr = (a, e = 0) => ({ code: O, indent: e, parameters: [y, a.itemId, a.variableId, T] }), rr = (a) => ({ operation: a[0], weaponId: a[1], value: a[2], operand: a[3], includesEquip: a[4] }), mr = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [a.operation, a.weaponId, a.value, a.operand, a.includesEquip]
}), nr = (a, e = 0) => ({ code: M, indent: e, parameters: [R, a.weaponId, a.value, S, !1] }), or = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [R, a.weaponId, a.variableId, T, !1]
}), ir = (a, e = 0) => ({ code: M, indent: e, parameters: [y, a.weaponId, a.value, S, !1] }), dr = (a, e = 0) => ({
  code: M,
  indent: e,
  parameters: [y, a.weaponId, a.variableId, T, !1]
}), pr = (a, e = 0) => ({ code: u, indent: e, parameters: [R, a.armorId, a.value, S, !1] }), cr = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [R, a.armorId, a.variableId, T, !1]
}), lr = (a, e = 0) => ({ code: u, indent: e, parameters: [y, a.armorId, a.value, S, !1] }), Er = (a, e = 0) => ({
  code: u,
  indent: e,
  parameters: [y, a.armorId, a.variableId, T, !1]
}), Ar = (a, e = 0) => ({ code: 104, parameters: [a.variableId, a.itemType], indent: e }), Tr = (a) => ({ variableId: a[0], itemType: a[1] }), _r = (a = 0) => ({
  code: 135,
  parameters: [1],
  indent: a
}), Ir = (a = 0) => ({ code: 135, parameters: [0], indent: a }), Cr = (a = 0) => ({ code: 134, parameters: [1], indent: a }), Rr = (a = 0) => ({ code: 134, parameters: [0], indent: a }), Sr = (a = 0) => ({
  code: 137,
  parameters: [1],
  indent: a
}), yr = (a = 0) => ({ code: 137, parameters: [0], indent: a }), da = (a) => [a], Nr = (a) => ({ comment: a[0] }), ja = (a, e = 0) => ({ code: Na, indent: e, parameters: da(a) }), Qa = (a, e = 0) => ({
  code: Oa,
  indent: e,
  parameters: da(a)
}), Or = (a, e = 0) => a.map((t, s) => s === 0 ? ja(t, e) : Qa(t, e)), Za = (a = {}) => [(a == null ? void 0 : a.speed) ?? 4, (a == null ? void 0 : a.skip) ?? !1], Mr = (a) => ({ speed: a[0], skip: a[1] }), gr = (a = {}, e = 0) => ({
  code: Ma,
  indent: e,
  parameters: Za(a)
}), Ja = (a = "") => [a], ur = (a) => ({ content: a[0] }), Lr = (a = "", e = 0) => ({ code: ga, indent: e ?? 0, parameters: Ja(a) }), Pr = (a, e = 0) => ({
  code: 402,
  indent: e,
  parameters: [(a == null ? void 0 : a.index) ?? 0, (a == null ? void 0 : a.name) ?? ""]
}), br = (a) => ({ index: a[0], name: a[1] }), kr = (a) => [a.index ?? 0, a.name ?? ""], Dr = (a) => ({
  choices: a[0],
  cancelType: a[1],
  defaultType: a[2],
  positionType: a[3],
  background: a[4]
}), vr = (a) => [a.choices ?? [], a.cancelType ?? 0, a.defaultType ?? 0, a.positionType ?? 2, a.background ?? 0], fr = (a, e = 0) => ({
  code: 102,
  indent: e,
  parameters: [(a == null ? void 0 : a.choices) ?? [], (a == null ? void 0 : a.cancelType) ?? 0, (a == null ? void 0 : a.defaultType) ?? 0, (a == null ? void 0 : a.positionType) ?? 2, (a == null ? void 0 : a.background) ?? 0]
}), Fr = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: [[...a.parameters[0]], a.parameters[1], a.parameters[2], a.parameters[3], a.parameters[4]]
}), hr = (a, e = 0) => ({ code: 261, indent: e, parameters: [a.filename] }), Gr = (a) => ({
  filename: a[0]
}), Ur = ({ args: a = {}, commandName: e, commandTitle: t = "", pluginName: s }, m = 0) => ({ code: 357, indent: m, parameters: [s, e, t, { ...a }] }), Br = (a) => ({
  pluginName: a[0],
  commandName: a[1],
  commandTitle: a[2],
  args: { ...a[3] }
}), Hr = (a, e = 0) => ({ code: 129, parameters: [0, a.actorId], indent: e }), xr = (a, e = 0) => ({
  code: 129,
  parameters: [1, a.actorId],
  indent: e
}), Vr = ({ pictureId: a = 0, origin: e = 0, name: t = "", x: s = 0, y: m = 0, scaleX: n = 100, scaleY: o = 100, opacity: d = 255, blendMode: p = 0 }) => ({
  code: 231,
  indent: 0,
  parameters: [a, t, e, s, m, n, o, d, p]
}), wr = ({ pictureId: a, origin: e, x: t, y: s, scaleX: m, scaleY: n, opacity: o, blendMode: d, wait: p = !1, easingType: _ = 0 }) => ({ code: 232, indent: 0, parameters: [a, e, t, s, m, n, o, d, p, _] }), $a = (a, e = 0) => ({
  code: ua,
  indent: e,
  parameters: [a]
}), ae = (a, e = 0) => ({ code: La, indent: e, parameters: [a] }), Wr = (a, e = 0) => a.map((t, s) => s === 0 ? $a(t, e) : ae(t, e)), Yr = 1, qr = 0, g = {
  item: 0,
  weapon: 1,
  armors: 2
}, Kr = ({ goods: a, buyOnly: e = !1 }, t = 0) => a.map((s, m) => {
  const n = ((o) => o.customPrice !== void 0 && o.customPrice !== 0)(s) ? 1 : 0;
  return m === 0 ? {
    code: Pa,
    indent: t,
    parameters: [g[s.itemType] ?? g.item, s.id, n, s.customPrice ?? 0, e]
  } : { code: ba, indent: t, parameters: [g[s.itemType] ?? g.item, s.id, n, s.customPrice ?? 0] };
}), Xr = 0, zr = 1, jr = 2, Qr = 3, Zr = 4, Jr = 0, $r = 1, am = 2, em = (a, e) => {
  switch (e[6]) {
    case 0:
      return a.hp;
    case 1:
      return a.mp;
    case 10:
      return a.tp;
  }
  return e[6] >= 2 && e[6] <= 9 ? a.param(e[6] - 2) : 0;
}, tm = (a, e) => {
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
}, sm = (a) => a.parameters[2] === 1, ee = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 3, e.index, e.param], rm = (a, e, t = {}) => ({
  code: l,
  indent: t.indent ?? 0,
  parameters: ee(a, e, t.operation ?? 0)
}), te = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 2, e.armorId], mm = (a, e) => ({
  code: l,
  indent: 0,
  parameters: te(a, e, 0)
}), se = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 0, e.value], nm = (a, e, t = {}) => ({ code: l, indent: t.indent ?? 0, parameters: se(a, e, t.operation ?? 0) }), re = {
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
}, me = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 4, e.index, re[e.param]], om = (a, e, t = {}) => ({
  code: l,
  indent: t.indent ?? 0,
  parameters: me(a, e, t.operation ?? 0)
}), im = (a, e, t = {}) => ({
  code: l,
  indent: t.indent ?? 0,
  parameters: ne(a, e, t.operation ?? 0)
}), ne = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 0, e.itemId], oe = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 2, e.min, e.max], dm = (a, e, t = {}) => ({
  code: l,
  indent: t.indent ?? 0,
  parameters: oe(a, e, t.operation ?? 0)
}), ie = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 4, e.code], pm = (a, e, t = {}) => ({
  code: l,
  indent: t.indent ?? 0,
  parameters: ie(a, e, t.operation ?? 0)
}), de = (a, e, t = 0) => [a.startId, a.endId ?? a.startId, t, 3, 1, e.weaponId], cm = (a, e) => ({ code: l, indent: 0, parameters: de(a, e, 0) }), pe = (a) => [...a], lm = (a) => ({
  code: a.code,
  indent: a.indent,
  parameters: pe(a.parameters)
}), ce = (a) => typeof a == "string" || typeof a == "number" || typeof a == "boolean", Em = (a) => a.parameters.every(ce), Am = "bgm", Tm = "se", _m = "me", Im = "bgs", Cm = "battlebacks1", Rm = "battlebacks2", Sm = "characters", ym = "enemies", Nm = "faces", Om = "parallaxes", Mm = "pictures", gm = "sv_actors", um = "sv_enemies", Lm = "system", Pm = "tilesets", bm = "titles1", km = "titles2", Dm = "System.json", vm = "Actors.json", fm = "Classes.json", Fm = "Skills.json", hm = "Items.json", Gm = "Weapons.json", Um = "Armors.json", Bm = "Enemies.json", Hm = "Troops.json", xm = "States.json", Vm = "Animations.json", wm = "Tilesets.json", Wm = "CommonEvents.json", Ym = "MapInfos.json", qm = "data", Km = "img", Xm = "audio", zm = "js", le = (a = {}) => ({
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
}), Ee = (a = {}) => [r(a.cursor), r(a.ok), r(a.cancel), r(a.buzzer), r(a.equip), r(a.save), r(a.load), r(a.battleStart), r(a.escape), r(a.enemyAttack), r(a.enemyDamage), r(a.enemyCollapse), r(a.bossCollapes1), r(a.bossCollapes2), r(a.actorDamage), r(a.actorCollapse), r(a.playRecovery), r(a.playMiss), r(a.playEvasion), r(a.playMagicEvasion), r(a.playReflection), r(a.shop), r(a.useItem), r(a.useSkill)], jm = (a) => ({
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
}), Qm = (a) => a.menuCommands[0], Zm = (a) => a.menuCommands[1], Jm = (a) => a.menuCommands[2], $m = (a) => a.menuCommands[3], an = (a) => a.menuCommands[4], en = (a) => a.menuCommands[5], tn = (a) => a.itemCategories[0], sn = (a) => a.itemCategories[1], rn = (a) => a.itemCategories[2], mn = (a) => a.itemCategories[3], Ae = (a = {}) => [a.item ?? !0, a.weapon ?? !0, a.armor ?? !0, a.keyItem ?? !0], nn = (a) => ({
  item: a[0],
  weapon: a[1],
  armor: a[2],
  keyItem: a[3]
}), Te = (a = {}) => [a.item ?? !0, a.skill ?? !0, a.equip ?? !0, a.status ?? !0, a.formation ?? !0, a.save ?? !0], on = (a) => ({
  item: a[0],
  skill: a[1],
  equip: a[2],
  status: a[3],
  formation: a[4],
  save: a[5]
}), _e = (a = {}) => ({
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
}), dn = (a = {}) => ({
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0,
  partyMembers: a.partyMembers ? Array.from(a.partyMembers) : [1]
}), pn = (a) => ({
  armorTypes: A(a.armorTypes),
  elements: A(a.elements),
  equipTypes: A(a.equipTypes),
  weaponTypes: A(a.weaponTypes),
  skillTypes: A(a.skillTypes),
  variables: A(a.variables),
  switches: A(a.switches)
}), A = (a) => a ? [...a] : [], cn = (a) => a.terms.params.map((e, t) => ({
  name: e,
  id: t
})), Ie = (a) => ({ background: a.background ?? 0, offsetX: a.offsetX ?? 0, offsetY: a.offsetY ?? 0 }), b = (a = {}) => ({
  characterIndex: a.characterIndex ?? 0,
  characterName: a.characterName ?? "",
  bgm: r(a.bgm ?? {}),
  startMapId: a.startMapId ?? 0,
  startX: a.startX ?? 0,
  startY: a.startY ?? 0
}), Ce = (a = {}) => ({
  jsonFormatLevel: a.jsonFormatLevel ?? 0,
  messageWidth1: a.messageWidth1 ?? 816,
  messageWidth2: a.messageWidth2 ?? 816
}), ln = { title: "オプション", options: {
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
} }, En = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, An = {
  title: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, Tn = {
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
}, _n = (a) => {
  var t, s, m, n, o, d, p, _, v, f, F, h, G, U, B, H, x, V, w, W, Y, q, K, X, z, j, Q, Z, J, $, aa;
  const e = Se(a.size);
  return {
    ..._e(a.options),
    titleCommandWindow: Ie(a.titleCommandWindow ?? {}),
    currencyUnit: ((t = a.texts) == null ? void 0 : t.currencyUnit) ?? "",
    gameTitle: ((s = a.texts) == null ? void 0 : s.gameTitle) ?? "",
    sounds: Ee(a.sounds),
    editor: Ce(a.editing),
    advanced: le(a.advanced),
    title1Name: ((m = a.images) == null ? void 0 : m.title1Name) ?? "",
    title2Name: ((n = a.images) == null ? void 0 : n.title2Name) ?? "",
    armorTypes: c((o = a.dataNames) == null ? void 0 : o.armorTypes),
    equipTypes: c((d = a.dataNames) == null ? void 0 : d.equipTypes),
    elements: c((p = a.dataNames) == null ? void 0 : p.elements),
    skillTypes: c((_ = a.dataNames) == null ? void 0 : _.skillTypes),
    weaponTypes: c((v = a.dataNames) == null ? void 0 : v.weaponTypes),
    switches: c((f = a.dataNames) == null ? void 0 : f.switches),
    variables: c((F = a.dataNames) == null ? void 0 : F.variables),
    magicSkills: c((h = a.battle) == null ? void 0 : h.magicSkills),
    battleSystem: ((G = a.battle) == null ? void 0 : G.battleSystem) ?? 0,
    airship: b((U = a.vehicles) == null ? void 0 : U.airship),
    boat: b((B = a.vehicles) == null ? void 0 : B.boat),
    ship: b((H = a.vehicles) == null ? void 0 : H.ship),
    defeatMe: r((x = a.me) == null ? void 0 : x.defeatMe),
    gameoverMe: r((V = a.me) == null ? void 0 : V.gameoverMe),
    titleBgm: r((w = a.bgm) == null ? void 0 : w.titleBgm),
    tileSize: e.tileSize,
    faceSize: e.faceSize,
    iconSize: e.iconSize,
    versionId: 1,
    attackMotions: a.attackMotion ? [...a.attackMotion] : [],
    battleback1Name: ((W = a.battleTest) == null ? void 0 : W.battleback1Name) ?? "",
    battleback2Name: ((Y = a.battleTest) == null ? void 0 : Y.battleback2Name) ?? "",
    testTroopId: ((q = a.battleTest) == null ? void 0 : q.testTroopId) ?? 0,
    testBattlers: ye((K = a.battleTest) == null ? void 0 : K.testBattlers, Ne),
    battleBgm: r((X = a.bgm) == null ? void 0 : X.battleBgm),
    victoryMe: r((z = a.me) == null ? void 0 : z.victoryMe),
    editMapId: ((j = a.editorTemporary) == null ? void 0 : j.editMapId) ?? 0,
    battlerName: ((Q = a.editorTemporary) == null ? void 0 : Q.battlerName) ?? "",
    locale: a.locale ?? "en-US",
    startMapId: ((Z = a.gameInit) == null ? void 0 : Z.startMapId) ?? 0,
    startX: ((J = a.gameInit) == null ? void 0 : J.startX) ?? 0,
    startY: (($ = a.gameInit) == null ? void 0 : $.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Re(a.terms ?? {}),
    itemCategories: Ae(a.itemCategories),
    partyMembers: c((aa = a.gameInit) == null ? void 0 : aa.partyMembers),
    battlerHue: 0,
    menuCommands: Te(a.menuComamnds)
  };
}, Re = (a) => ({
  basic: fa(a.basic ?? {}),
  commands: va(a.commands ?? {}),
  params: Da(a.params ?? {}),
  messages: ka(a.messages ?? {})
}), c = (a) => a ? [...a] : [], Se = (a) => a ? { tileSize: a.tileSize ?? 48, faceSize: a.faceSize ?? 144, iconSize: a.iconSize ?? 32 } : {
  tileSize: 48,
  faceSize: 144,
  iconSize: 32
}, ye = (a, e) => a ? a.map(e) : [], Ne = (a) => a ? { actorId: a.actorId, equips: c(a.equips), level: a.level } : { actorId: 0, equips: [], level: 1 }, In = (a) => ({
  ...a.text ? { text: a.text } : {},
  ...a.desc ? { desc: a.desc } : {}
}), Cn = { LEFT: 4, UP: 8, DOWN: 2, RIGHT: 6 }, Rn = (a) => {
  const e = a.split("/");
  return e[e.length - 1];
};
export {
  Nn as ABORT_BATTLE,
  On as BATTLE_PROCESSING,
  Mn as CHANGE_ACTOR_IMAGES,
  gn as CHANGE_ACTOR_STATE,
  u as CHANGE_ARMORS,
  un as CHANGE_BATTLE_BACKGROUND,
  Ia as CHANGE_BATTLE_BGM,
  Ln as CHANGE_CLASS,
  Ra as CHANGE_DEFEAT_ME,
  Pn as CHANGE_ENCOUNTER,
  bn as CHANGE_ENEMY_HP,
  kn as CHANGE_ENEMY_MP,
  Dn as CHANGE_ENEMY_STATE,
  vn as CHANGE_ENEMY_TP,
  fn as CHANGE_EXP,
  Fn as CHANGE_FORMATION_ACCESS,
  hn as CHANGE_GOLD,
  ma as CHANGE_HP,
  O as CHANGE_ITEMS,
  Gn as CHANGE_MAP_NAME_DISPLAY,
  Un as CHANGE_MENU_ACCESS,
  na as CHANGE_MP,
  pa as CHANGE_NAME,
  ca as CHANGE_NICKNAME,
  Bn as CHANGE_PARALLAX,
  Hn as CHANGE_PARAMETER,
  xn as CHANGE_PARTY_MEMBER,
  Vn as CHANGE_PLAYER_FOLLOWERS,
  la as CHANGE_PROFILE,
  wn as CHANGE_SAVE_ACCESS,
  Wn as CHANGE_SKILL,
  Yn as CHANGE_TILESET,
  oa as CHANGE_TP,
  qn as CHANGE_TRANSPARENCY,
  Kn as CHANGE_VEHICLE_BGM,
  Xn as CHANGE_VEHICLE_IMAGE,
  Ca as CHANGE_VICTORY_ME,
  M as CHANGE_WEAPONS,
  zn as CHANGE_WINDOW_COLOR,
  jn as COLLAPS_BOSS,
  Qn as COLLAPS_INSTANT,
  Zn as COLLAPS_NONE,
  Jn as COLLAPS_NORMAL,
  Oa as COMMENT_BODY,
  Na as COMMENT_HEAD,
  Sa as COMMON_EVENT,
  $n as CONDITIONAL_BRANCH,
  ao as CONDITIONAL_BRANCH_ELSE,
  eo as CONTROL_SELF_SWITCH,
  ya as CONTROL_SWITCHES,
  to as CONTROL_TIMER,
  l as CONTROL_VARIABLES,
  Yr as CUSTOM_PRICE,
  Ha as DEFAULT_DAMAGE_LABELS,
  qa as DEFAULT_GLOBAL_LABELS,
  Qt as DEFAULT_ITEM_LABELS,
  Zt as DEFAULT_SKILL_LABELS,
  ln as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  En as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  Jt as DEFAULT_USABLE_ITEM_LABELS,
  Cn as DIRECTION,
  so as EFFECT_ADD_BUFF,
  ro as EFFECT_ADD_DEBUFF,
  mo as EFFECT_ADD_STATE,
  no as EFFECT_COMMON_EVENT,
  oo as EFFECT_GAIN_TP,
  io as EFFECT_GROW,
  po as EFFECT_LEARN_SKILL,
  co as EFFECT_RECOVER_HP,
  lo as EFFECT_RECOVER_MP,
  Eo as EFFECT_REMOVE_BUFF,
  Ao as EFFECT_REMOVE_DEBUFF,
  To as EFFECT_REMOVE_STATE,
  _o as EFFECT_SPECIAL,
  Io as ENEMY_APPEAR,
  Co as ENEMY_RECOVER_ALL,
  Ro as ENEMY_TRANSFORM,
  So as ERASE_EVENT,
  yo as ERASE_PICTURE,
  No as EXIT_EVENT_PROCESSING,
  Oo as EXTRA_PARAM_CEV,
  Mo as EXTRA_PARAM_CNT,
  go as EXTRA_PARAM_CRI,
  uo as EXTRA_PARAM_EVA,
  Lo as EXTRA_PARAM_HIT,
  Po as EXTRA_PARAM_HRG,
  bo as EXTRA_PARAM_MEV,
  ko as EXTRA_PARAM_MRF,
  Do as EXTRA_PARAM_MRG,
  vo as EXTRA_PARAM_TRG,
  fo as FADEIN_SCREEN,
  Fo as FADEOUT_BGM,
  ho as FADEOUT_BGS,
  Go as FADEOUT_SCREEN,
  vm as FILENAME_ACTORS,
  Vm as FILENAME_ANIMATIONS,
  Um as FILENAME_ARMORS,
  fm as FILENAME_CLASSES,
  Wm as FILENAME_COMMON_EVENTS,
  Bm as FILENAME_ENEMIES,
  hm as FILENAME_ITEMS,
  Ym as FILENAME_MAP_INFOS,
  Fm as FILENAME_SKILLS,
  xm as FILENAME_STATES,
  Dm as FILENAME_SYSTEM,
  wm as FILENAME_TILESET,
  Hm as FILENAME_TROOPS,
  Gm as FILENAME_WEAPONS,
  Uo as FLAG_ID_AUTO_BATTLE,
  Bo as FLAG_ID_GUARD,
  Ho as FLAG_ID_PRESERVE_TP,
  xo as FLAG_ID_SUBSTITUTE,
  Vo as FLASH_SCREEN,
  Xm as FOLDER_AUDIO,
  Am as FOLDER_AUDIO_BGM,
  Im as FOLDER_AUDIO_BGS,
  _m as FOLDER_AUDIO_ME,
  Tm as FOLDER_AUDIO_SE,
  qm as FOLDER_DATA,
  Km as FOLDER_IMG,
  Cm as FOLDER_IMG_BATTLEBACK1,
  Rm as FOLDER_IMG_BATTLEBACK2,
  Sm as FOLDER_IMG_CHACTERS,
  ym as FOLDER_IMG_ENEMIES,
  Nm as FOLDER_IMG_FACES,
  Om as FOLDER_IMG_PARALLACES,
  Mm as FOLDER_IMG_PICTURES,
  gm as FOLDER_IMG_SV_ACTORS,
  um as FOLDER_IMG_SV_ENEMIES,
  Lm as FOLDER_IMG_SYSTEM,
  Pm as FOLDER_IMG_TILESETS,
  bm as FOLDER_IMG_TITLES1,
  km as FOLDER_IMG_TITLES2,
  zm as FOLDER_JS,
  wo as FORCE_ACTION,
  Wo as GAME_OVER,
  Yo as GATHER_FOLLOWERS,
  qo as GET_LOCATION_INFO,
  Ko as GET_ONOFF_VEHICLE,
  qt as HITTYPE_CERTAIN,
  Xt as HITTYPE_MAGICAL,
  Kt as HITTYPE_PHYSICAL,
  Xo as INPUT_NUMBER,
  zo as LABEL,
  Yt as LABELS_DATA_WEAPON,
  An as LABELS_SYSTEM_BATTLER_PARAMS,
  Tn as LABELS_SYSTEM_GAME_COMMANDS,
  jo as LABEL_JUMP,
  Ba as LABEL_SET_DATA,
  Ya as LABEL_SET_ITEM_EFFECT,
  wa as LABEL_SET_TRAIT,
  Qo as LOOP,
  Zo as LOOP_BREAK,
  es as MODULE_DATA,
  Jo as MOVE_PICTURE,
  $o as NAME_INPUT_PROCESSING,
  qr as NORMAL_PRICE,
  ai as NO_OPERATION,
  ei as OPEN_MENU_SCREEN,
  ti as OPEN_SAVE_SCREEN,
  Xr as OPERAND_CONSTANT,
  Qr as OPERAND_GAMEDATA,
  jr as OPERAND_RANDOM,
  Zr as OPERAND_SCRIPT,
  zr as OPERAND_VARIABLE,
  si as PARTY_ABILITY_CANCEL_SURPRISE,
  ri as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  mi as PARTY_ABILITY_ENCOUNTER_HALF,
  ni as PARTY_ABILITY_ENCOUNTER_NONE,
  oi as PARTY_ABILITY_GOLD_DOUBLE,
  ii as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Ea as PLAY_BGM,
  Aa as PLAY_BGS,
  Ta as PLAY_ME,
  di as PLAY_MOVIE,
  _a as PLAY_SE,
  pi as PLUGIN_COMMAND_MV,
  ci as PLUGIN_COMMAND_MZ,
  li as RECOVER_ALL,
  Ei as REGULAR_PARAM_AGI,
  Ai as REGULAR_PARAM_ATK,
  Ti as REGULAR_PARAM_DEF,
  _i as REGULAR_PARAM_LUK,
  Ii as REGULAR_PARAM_MATK,
  Ci as REGULAR_PARAM_MAX_HP,
  Ri as REGULAR_PARAM_MAX_MP,
  Si as REGULAR_PARAM_MDEF,
  yi as RESUME_BGM,
  Ni as RETURN_TO_TITLE_SCREEN,
  Oi as ROTATE_PICTURE,
  gt as ROUTE_CHANGE_BLEND_MODE,
  lt as ROUTE_CHANGE_FREQ,
  Ot as ROUTE_CHANGE_IMAGE,
  Mt as ROUTE_CHANGE_OPACITY,
  ct as ROUTE_CHANGE_SPEED,
  Ct as ROUTE_DIR_FIX_OFF,
  It as ROUTE_DIR_FIX_ON,
  Ge as ROUTE_END,
  Qe as ROUTE_JUMP,
  Xe as ROUTE_MOVE_AWAY,
  je as ROUTE_MOVE_BACKWARD,
  Ue as ROUTE_MOVE_DOWN,
  ze as ROUTE_MOVE_FORWARD,
  Be as ROUTE_MOVE_LEFT,
  Ve as ROUTE_MOVE_LOWER_L,
  we as ROUTE_MOVE_LOWER_R,
  qe as ROUTE_MOVE_RANDOM,
  He as ROUTE_MOVE_RIGHT,
  Ke as ROUTE_MOVE_TOWARD,
  xe as ROUTE_MOVE_UP,
  We as ROUTE_MOVE_UPPER_L,
  Ye as ROUTE_MOVE_UPPER_R,
  ut as ROUTE_PLAY_SE,
  Lt as ROUTE_SCRIPT,
  _t as ROUTE_STEP_ANIME_OFF,
  Tt as ROUTE_STEP_ANIME_ON,
  pt as ROUTE_SWITCH_OFF,
  dt as ROUTE_SWITCH_ON,
  St as ROUTE_THROUGH_OFF,
  Rt as ROUTE_THROUGH_ON,
  Nt as ROUTE_TRANSPARENT_OFF,
  yt as ROUTE_TRANSPARENT_ON,
  rt as ROUTE_TURN_180D,
  st as ROUTE_TURN_90D_L,
  tt as ROUTE_TURN_90D_R,
  mt as ROUTE_TURN_90D_R_L,
  it as ROUTE_TURN_AWAY,
  Je as ROUTE_TURN_DOWN,
  $e as ROUTE_TURN_LEFT,
  nt as ROUTE_TURN_RANDOM,
  at as ROUTE_TURN_RIGHT,
  ot as ROUTE_TURN_TOWARD,
  et as ROUTE_TURN_UP,
  Ze as ROUTE_WAIT,
  At as ROUTE_WALK_ANIME_OFF,
  Et as ROUTE_WALK_ANIME_ON,
  Mi as SAVE_BGM,
  Wt as SCHEMA_DATA_WEAPON,
  ua as SCRIPT_EVAL,
  La as SCRIPT_EVAL_BODY,
  gi as SCROLL_MAP,
  ui as SELECT_ITEM,
  Li as SET_EVENT_LOCATION,
  Pi as SET_MOVEMENT_ROUTE,
  bi as SET_VEHICLE_LOCATION,
  ki as SET_WEATHER_EFFECT,
  Di as SHAKE_SCREEN,
  Pa as SHOP_PROCESSING,
  ba as SHOP_PROCESSING_BODY,
  vi as SHOW_ANIMATION,
  fi as SHOW_BALLOON_ICON,
  Fi as SHOW_BATTLE_ANIMATION,
  hi as SHOW_CHOICES,
  Gi as SHOW_CHOICES_ITEM,
  Ui as SHOW_MESSAGE,
  Bi as SHOW_MESSAGE_BODY,
  Hi as SHOW_PICTURE,
  Ma as SHOW_SCROLLING_TEXT,
  ga as SHOW_SCROLLING_TEXT_BODY,
  xi as SKIP,
  zt as SPECIAL_EFFECT_ESCAPE,
  Vi as SPECIAL_PARAM_EXR,
  wi as SPECIAL_PARAM_FDR,
  Wi as SPECIAL_PARAM_GRD,
  Yi as SPECIAL_PARAM_MCR,
  qi as SPECIAL_PARAM_MDR,
  Ki as SPECIAL_PARAM_PDR,
  Xi as SPECIAL_PARAM_PHA,
  zi as SPECIAL_PARAM_REC,
  ji as SPECIAL_PARAM_TCR,
  Qi as SPECIAL_PARAM_TGR,
  ts as SRC_DATA_ACTOR,
  ds as SRC_DATA_ARMOR,
  ps as SRC_DATA_CLASS,
  cs as SRC_DATA_COMMON_EVNET,
  rs as SRC_DATA_ENEMY,
  os as SRC_DATA_ITEMS,
  ss as SRC_DATA_MAP,
  ns as SRC_DATA_SKILL,
  ms as SRC_DATA_STATE,
  ls as SRC_DATA_TROOP,
  is as SRC_DATA_WEAPON,
  Zi as STOP_SE,
  Ji as TINT_PICTURE,
  $i as TINT_SCREEN,
  ad as TRAIT_ACTION_PLUS,
  ed as TRAIT_ATTACK_ELEMENT,
  td as TRAIT_ATTACK_SKILL,
  sd as TRAIT_ATTACK_SPEED,
  rd as TRAIT_ATTACK_STATE,
  md as TRAIT_ATTACK_TIMES,
  nd as TRAIT_COLLAPSE_TYPE,
  od as TRAIT_DEBUFF_RATE,
  id as TRAIT_ELEMENT_RATE,
  dd as TRAIT_EQUIP_ARMOR_TYPE,
  pd as TRAIT_EQUIP_LOCK,
  cd as TRAIT_EQUIP_SEAL,
  ld as TRAIT_EQUIP_WEAPON_TYPE,
  Ed as TRAIT_PARAM,
  Ad as TRAIT_PARTY_ABILITY,
  Td as TRAIT_SKILL_ADD,
  _d as TRAIT_SKILL_SEAL,
  Id as TRAIT_SKILL_TYPE_ADD,
  Cd as TRAIT_SKILL_TYPE_SEAL,
  Rd as TRAIT_SLOT_TYPE,
  Sd as TRAIT_SPARAM,
  yd as TRAIT_SPECIAL_FLAG,
  Nd as TRAIT_STATE_RATE,
  Od as TRAIT_STATE_RESIST,
  Md as TRAIT_XPARAM,
  gd as TRANSFER_PLAYER,
  am as TYPE_ARMOR,
  Jr as TYPE_ITEM,
  $r as TYPE_WEAPON,
  ud as WAIT,
  Ld as buildNoteFromNormalized,
  Fr as cloneChoices,
  lm as cloneEventCommand,
  pe as cloneParameters,
  Pd as collapsOptionsToArray,
  Nr as convertCommentArrayToObject,
  ke as createActorControlChars,
  k as createControlCharFormat,
  bd as createNoteEntity,
  De as createSystemVariableControlChars,
  kd as defineGameDataSources,
  Dd as defineSystemItems,
  vd as defineTraitCollapseType,
  fd as defineTraitExtraParam,
  Fd as defineTraitItems,
  hd as defineTraitPartyAbility,
  Gd as defineTraitRegularParam,
  Ud as defineTraitSpecialFlag,
  Bd as defineTraitSpecialParam,
  Hd as extraParamName,
  xd as extraParamsToArray,
  Rn as extractFileName,
  jt as formatItemEffectText,
  Vt as formatTraitText,
  Js as fromArrayChangeItems,
  rr as fromArrayChangeWeapons,
  qs as fromArrayCommonEvent,
  Ks as fromArrayControlSwitches,
  Us as fromArrayEnemyTransform,
  Qs as fromArrayInputNumber,
  Gr as fromArrayPlayMovie,
  Br as fromArrayPluginCommandMZ,
  ur as fromArrayScrollingTextBody,
  Mr as fromArrayScrollingTextHeader,
  Tr as fromArraySelectItem,
  Dr as fromArraySetupChoice,
  br as fromArraySetupChoiceItem,
  Vd as fromArrayShowMessageHeader,
  Pe as fromStringArray,
  tm as getActorValue,
  rn as getArmorCategoryEnabled,
  wd as getArmorTypes,
  be as getControlChars,
  Wd as getElementTypes,
  em as getEnemyValue,
  Jm as getEquipCommandEnabled,
  Yd as getEquipTypes,
  an as getFormationCommandEnabled,
  tn as getItemCategoryEnabled,
  Qm as getItemCommandEnabled,
  mn as getKeyItemCategoryEnabled,
  qd as getNoteValue,
  cn as getParamNames,
  en as getSaveCommandEnabled,
  Zm as getSkillCommandEnabled,
  Kd as getSkillTypes,
  $m as getStatusCommandEnabled,
  Xd as getSwitches,
  zd as getVariableNames,
  sn as getWeaponCategoryEnabled,
  jd as getWeaponTypes,
  Em as isCloneableCommand,
  sm as isCommandOperandVariables,
  Zs as isUsingVaribleCommandChangingItems,
  Es as labelsRegistry,
  ft as makeActorData,
  ht as makeArmorData,
  Ls as makeAudioCommand,
  _e as makeBooleanOptions,
  Gt as makeClassData,
  xs as makeCommandAddEachEnemyState,
  Bs as makeCommandAddEnemyState,
  Hr as makeCommandAddPartyMember,
  E as makeCommandAudioAny,
  Le as makeCommandChangeActorImages,
  As as makeCommandChangeActorName,
  Ts as makeCommandChangeActorNickName,
  _s as makeCommandChangeActorProfile,
  vs as makeCommandChangeBattleBGM,
  Fs as makeCommandChangeDefeatME,
  $s as makeCommandChangeItems,
  fs as makeCommandChangeVictoryME,
  mr as makeCommandChangeWeapons,
  Qa as makeCommandCommentBody,
  ja as makeCommandCommentHeader,
  Ys as makeCommandCommonEvent,
  Xs as makeCommandControlSwitches,
  hs as makeCommandControlTimer,
  Sr as makeCommandDisableFormationAccess,
  _r as makeCommandDisableMenuAccess,
  Cr as makeCommandDisableSaveAccess,
  yr as makeCommandEnableFormationAccess,
  Ir as makeCommandEnableMenuAccess,
  Rr as makeCommandEnableSaveAccess,
  Ws as makeCommandEnemyRecoverAll,
  ws as makeCommandEnemyRecoverAllEach,
  Gs as makeCommandEnemyTransform,
  Os as makeCommandFadeOutBGM,
  us as makeCommandFadeOutBGS,
  Is as makeCommandGainActorHP,
  ys as makeCommandGainActorMP,
  Rs as makeCommandGainActorTP,
  pr as makeCommandGainArmor,
  cr as makeCommandGainArmorByVariable,
  ar as makeCommandGainItem,
  er as makeCommandGainItemV,
  nr as makeCommandGainWeapon,
  or as makeCommandGainWeaponV,
  zs as makeCommandInputNumber,
  Cs as makeCommandLoseActorHP,
  Ns as makeCommandLoseActorMP,
  Ss as makeCommandLoseActorTP,
  lr as makeCommandLoseArmor,
  Er as makeCommandLoseArmorByVariable,
  tr as makeCommandLoseItem,
  sr as makeCommandLoseItemV,
  ir as makeCommandLoseWeapon,
  dr as makeCommandLoseWeaponV,
  wr as makeCommandMovePicture,
  Ps as makeCommandPlayBGM,
  bs as makeCommandPlayBGS,
  ks as makeCommandPlayME,
  hr as makeCommandPlayMovie,
  Ds as makeCommandPlaySE,
  Ur as makeCommandPluginCommandMZ,
  ge as makeCommandRecoverAll,
  ue as makeCommandRecoverAllTarget,
  Vs as makeCommandRemoveEachEnemyState,
  Hs as makeCommandRemoveEnemyState,
  xr as makeCommandRemovePartyMember,
  gs as makeCommandResumeBGM,
  Ms as makeCommandSaveBGM,
  Wr as makeCommandScriptArray,
  ae as makeCommandScriptBody,
  $a as makeCommandScriptHeader,
  Lr as makeCommandScrollingTextBody,
  gr as makeCommandScrollingTextHeader,
  Ar as makeCommandSelectItem,
  fr as makeCommandSetupChoice,
  Kr as makeCommandShopProcessing,
  Pr as makeCommandShowChoiceItem,
  Qd as makeCommandShowMessage,
  Zd as makeCommandShowMessageBody,
  Vr as makeCommandShowPicture,
  rm as makeCommandVariableFromActorStatusData,
  mm as makeCommandVariableFromArmor,
  nm as makeCommandVariableFromConstant,
  om as makeCommandVariableFromEnemyData,
  im as makeCommandVariableFromItemData,
  dm as makeCommandVariableFromRandom,
  pm as makeCommandVariableFromScript,
  cm as makeCommandVariableFromWeapon,
  da as makeCommentArray,
  Or as makeCommentCommandArray,
  ve as makeCommonEventData,
  D as makeDamage,
  pn as makeDataNames,
  Va as makeDropItem,
  Ce as makeEditorSetting,
  Bt as makeEnemyAction,
  Ht as makeEnemyData,
  Ga as makeEventPageCondition,
  dn as makeGameInitial,
  Ae as makeItemCategories,
  nn as makeItemCategoriesFromArray,
  $t as makeItemData,
  Dt as makeMapData,
  Pt as makeMapEvent,
  Ua as makeMapEventIamge,
  bt as makeMapEventPage,
  kt as makeMapFileInfo,
  vt as makeMapInfoData,
  Te as makeMenuCommandsEnabled,
  on as makeMenuCommandsEnabledFromArray,
  xa as makeParamArray,
  Da as makeParamNamesArray,
  Jd as makeParamNamesFromArray,
  as as makeSkillData,
  Ee as makeSoundsArray,
  jm as makeSoundsObject,
  xt as makeStateData,
  le as makeSystemAdvanced,
  _n as makeSystemData,
  fa as makeTermsBasic,
  $d as makeTermsBasicFromArray,
  va as makeTermsCommandArray,
  ap as makeTermsCommandArrayWithNulls,
  ep as makeTermsCommandFromArray,
  ka as makeTermsMessages,
  Ie as makeTitleCommandWindow,
  fe as makeTroopData,
  he as makeTroopEventConditions,
  Fe as makeTroopMember,
  b as makeVehicleData,
  wt as makeWeaponData,
  Ft as normalizeDataActor,
  tp as normalizeNote,
  Ut as paramArrayToObject,
  sp as partyAbilityToArray,
  rp as readNote,
  mp as readNoteEx,
  np as readNoteObject,
  op as regularParamName,
  ip as regularParamsToArray,
  dp as replaceNote,
  pp as repleaceMapEventCommands,
  cp as resolveItemEffectLabels,
  lp as resolveTraitLabels,
  Ep as setNoteValue,
  Ap as specialFlagToArray,
  Tp as specialParamName,
  _p as specialParamsToArray,
  In as textAndDesc,
  Xa as toArrayCommonEvent,
  za as toArrayControlSwitches,
  js as toArrayInputNumber,
  ee as toArrayOperandActorStatus,
  te as toArrayOperandArmorData,
  se as toArrayOperandConstant,
  me as toArrayOperandEnemyStatus,
  ne as toArrayOperandItemData,
  oe as toArrayOperandRandom,
  ie as toArrayOperandScript,
  de as toArrayOperandWeaponData,
  Ja as toArrayScrollingTextBody,
  Za as toArrayScrollingTextHeader,
  vr as toArraySetupChoice,
  kr as toArraySetupChoiceItem,
  Ip as toArrayShowMessageHeader
};
