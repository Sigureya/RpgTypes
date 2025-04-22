const EA = "bgm", TA = "se", RA = "me", sA = "bgs", aA = "battlebacks1", cA = "battlebacks2", LA = "characters", rA = "enemies", iA = "faces", SA = "parallaxes", mA = "pictures", IA = "sv_actors", PA = "sv_enemies", CA = "system", MA = "tilesets", OA = "titles1", NA = "titles2", dA = "System.json", N = (t, A) => {
  const e = { ...t };
  for (const E in t) {
    const i = A[E];
    typeof i == "string" && (e[E] = i);
  }
  return e;
}, pA = (t, A) => ({
  domainName: A.domainName ?? t.domainName,
  options: N(t.options, A.options ?? {})
}), fA = (t, A) => {
  const e = {};
  for (const E in t) {
    const i = t[E], Ot = A[E] ?? {};
    e[E] = N(
      i,
      Ot
    );
  }
  return e;
}, R = (t, A) => ({
  name: t,
  id: A
}), DA = (t) => t.variables.map(R), uA = (t) => t.elements.map(R), lA = (t) => t.equipTypes.map(R), FA = (t) => t.skillTypes.map(R), UA = (t) => t.weaponTypes.map(R), GA = (t) => t.armorTypes.map(R), BA = (t) => t.terms.params.map(R), s = "rmmz", C = "trait", d = "data", p = "system", HA = 11, YA = 12, gA = 13, yA = 14, KA = 21, VA = 22, vA = 23, WA = 31, XA = 32, kA = 33, hA = 34, wA = 35, xA = 41, qA = 42, QA = 43, bA = 44, $A = 51, jA = 52, zA = 53, JA = 54, ZA = 55, t_ = 61, A_ = 62, __ = 63, e_ = 64, n_ = 0, o_ = 1, E_ = 2, T_ = 3, R_ = 0, s_ = 1, a_ = 2, c_ = 3, L_ = 4, r_ = 5, i_ = 0, S_ = 1, m_ = 2, I_ = 3, P_ = 0, C_ = 1, M_ = 2, O_ = 3, N_ = 4, d_ = 5, p_ = 6, f_ = 7, D_ = 8, u_ = 9, l_ = 0, F_ = 1, U_ = 2, G_ = 3, B_ = 4, H_ = 5, Y_ = 6, g_ = 7, y_ = 0, K_ = 1, V_ = 2, v_ = 3, W_ = 4, X_ = 5, k_ = 6, h_ = 7, w_ = 8, x_ = 9, q_ = (t, A) => {
  switch (t) {
    case 0:
      return A.maxHp;
    case 1:
      return A.maxMp;
    case 2:
      return A.atk;
    case 3:
      return A.def;
    case 4:
      return A.matk;
    case 5:
      return A.mdef;
    case 6:
      return A.agi;
    case 7:
      return A.luk;
    default:
      return `?rparams[${t}]`;
  }
}, Q_ = (t, A) => {
  switch (t) {
    case 3:
      return A.criticalEvasionRate;
    case 1:
      return A.evasionRate;
    case 6:
      return A.counterAttackRate;
    case 2:
      return A.criticalRate;
    case 0:
      return A.hitRate;
    case 7:
      return A.hpRegenerationRate;
    case 4:
      return A.magicEvasionRate;
    case 5:
      return A.magicReflectionRate;
    case 8:
      return A.mpRegenerationRate;
    case 9:
      return A.tpRegenerationRate;
  }
  return `?xparams[${t}]`;
}, b_ = (t, A) => {
  switch (t) {
    case 9:
      return A.experienceRate;
    case 0:
      return A.targetRate;
    case 8:
      return A.floorDamageRate;
    case 1:
      return A.guradEffectRate;
    case 4:
      return A.mpCostRate;
    case 5:
      return A.tpChargeRate;
    case 6:
      return A.physicalDamageRate;
    case 7:
      return A.magicDamageRate;
    case 3:
      return A.pharmacology;
    case 2:
      return A.recoveryEffectRate;
  }
  return `?sparams[${t}]`;
}, Nt = (t, A) => [
  {
    id: 0,
    name: A.normal
  },
  {
    id: 1,
    name: t.bossCollaps
  },
  {
    id: 2,
    name: t.instantCollaps
  },
  {
    id: 3,
    name: t.noneCollaps
  }
], dt = (t) => [
  {
    id: 0,
    name: t.encounterHalf
  },
  {
    id: 1,
    name: t.encounterNone
  },
  {
    id: 2,
    name: t.cancelSurprise
  },
  {
    id: 3,
    name: t.raisePreemptive
  },
  {
    id: 4,
    name: t.goldDouble
  },
  {
    id: 5,
    name: t.dropItemDouble
  }
], pt = (t) => [
  { id: 0, name: t.maxHp },
  { id: 1, name: t.maxMp },
  { id: 2, name: t.atk },
  { id: 3, name: t.def },
  { id: 4, name: t.matk },
  { id: 5, name: t.mdef },
  { id: 6, name: t.agi },
  { id: 7, name: t.luk }
], ft = (t) => [
  {
    id: 0,
    name: t.hitRate
  },
  {
    id: 1,
    name: t.evasionRate
  },
  {
    id: 2,
    name: t.criticalRate
  },
  {
    id: 3,
    name: t.criticalEvasionRate
  },
  {
    id: 4,
    name: t.magicEvasionRate
  },
  {
    id: 5,
    name: t.magicReflectionRate
  },
  {
    id: 6,
    name: t.counterAttackRate
  },
  {
    id: 7,
    name: t.hpRegenerationRate
  },
  {
    id: 8,
    name: t.mpRegenerationRate
  },
  {
    id: 9,
    name: t.tpRegenerationRate
  }
], Dt = (t) => [
  {
    id: 0,
    name: t.targetRate
  },
  {
    id: 1,
    name: t.guradEffectRate
  },
  {
    id: 2,
    name: t.recoveryEffectRate
  },
  {
    id: 3,
    name: t.pharmacology
  },
  {
    id: 4,
    name: t.mpCostRate
  },
  {
    id: 5,
    name: t.tpChargeRate
  },
  {
    id: 6,
    name: t.physicalDamageRate
  },
  {
    id: 7,
    name: t.magicDamageRate
  },
  {
    id: 8,
    name: t.floorDamageRate
  },
  {
    id: 9,
    name: t.experienceRate
  }
], c = (t, A, e) => ({
  items: e(A.options),
  label: A.domainName,
  source: {
    author: s,
    module: C,
    sourceKey: t
  }
}), $_ = (t, A) => c(
  At,
  t,
  (e) => Nt(e, A)
), j_ = (t) => c(_t, t, dt), z_ = (t) => c(L, t, pt), J_ = (t) => c(Z, t, ft), Z_ = (t) => c(tt, t, Dt), n = "{name}", a = "{name} * {value}%", f = "{name} + {value}%", D = "{value}", u = {
  domainName: "属性有効度",
  format: a
}, l = {
  domainName: "弱体有効度",
  format: a
}, F = {
  domainName: "ステート有効度",
  format: a
}, U = {
  domainName: "ステート無効",
  format: n
}, G = {
  domainName: "基本能力値",
  format: a,
  options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  }
}, B = {
  domainName: "追加能力値",
  format: f,
  options: {
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
  }
}, H = {
  domainName: "特殊能力値",
  format: a,
  options: {
    targetRate: "狙われ率",
    guradEffectRate: "防御効果率",
    recoveryEffectRate: "回復効果率",
    pharmacology: "薬の知識",
    mpCostRate: "MP消費率",
    tpChargeRate: "TPチャージ率",
    physicalDamageRate: "物理ダメージ率",
    magicDamageRate: "魔法ダメージ率",
    floorDamageRate: "床ダメージ率",
    experienceRate: "経験値率"
  }
}, Y = {
  domainName: "攻撃属性",
  format: n
}, g = {
  domainName: "攻撃ステート",
  format: f
}, y = {
  domainName: "攻撃速度補正",
  format: D
}, K = {
  domainName: "攻撃追加回数",
  format: D
}, V = {
  domainName: "行動追加",
  format: a
}, v = {
  domainName: "攻撃スキル",
  format: n
}, W = {
  domainName: "装備武器タイプ",
  format: n
}, X = {
  domainName: "装備防具タイプ",
  format: n
}, k = {
  domainName: "装備固定",
  format: n
}, h = {
  domainName: "装備封印",
  format: n
}, w = {
  domainName: "スロットタイプ",
  format: n
}, x = {
  domainName: "スキル追加",
  format: n
}, q = {
  domainName: "スキル封印",
  format: n
}, Q = {
  domainName: "スキルタイプ追加",
  format: n
}, b = {
  domainName: "スキルタイプ封印",
  format: n
}, $ = {
  domainName: "特殊フラグ",
  format: n,
  options: {
    autoBattle: "自動戦闘",
    guard: "防御",
    substitute: "身代わり",
    preventEscape: "逃走防止"
  }
}, j = {
  domainName: "消滅エフェクト",
  format: n,
  options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  }
}, z = {
  domainName: "パーティ能力",
  format: n,
  options: {
    cancelSurprise: "不意打ち無効",
    dropItemDouble: "アイテムドロップ2倍",
    encounterHalf: "エンカウント半減",
    encounterNone: "エンカウントなし",
    goldDouble: "ゴールド2倍",
    raisePreemptive: "先制攻撃率アップ"
  }
}, J = /^[a-zA-Z0-9]+$/, te = (t) => J.test(t) ? t : void 0, P = (t) => typeof t == "string" ? J.test(t) : !1, Ae = (t) => [t.author, t.module, t.sourceKey].join("."), _e = (t) => P(t.author) && P(t.module) && P(t.sourceKey), L = "params", Z = "xparams", tt = "sparams", At = "collaps", _t = "partyAbiility", ut = "sflag", ee = "actors", ne = "variables", oe = "map", Ee = "enemy", S = "state", et = "skill", Te = "items", Re = "weapon", se = "armor", ae = "class", lt = "common_event", ce = "troop", Le = "colors", Ft = "weaponTypes", Ut = "armorTypes", re = "equipTypes", ie = "switches", Se = "skillTypes", Gt = "elements", me = (t, A, e) => t.format.replaceAll("{value}", A.value.toString()).replaceAll("{name}", e), O = (t, A) => typeof A == "string" ? A : t, _ = (t, A, e, E) => ({
  codeId: t,
  label: O(A.domainName, e.domainName),
  format: O(A.format, e.format),
  dataSource: E
}), nt = () => ({
  module: p,
  author: s,
  sourceKey: Gt
}), ot = (t) => ({
  module: d,
  author: s,
  sourceKey: t
}), T = (t) => ({
  author: s,
  module: C,
  sourceKey: t
}), Et = (t) => ({
  author: s,
  module: p,
  sourceKey: t
}), Ie = (t) => _(
  11,
  u,
  t,
  nt()
), Pe = (t) => _(
  12,
  l,
  t,
  T(L)
), Ce = (t) => _(
  13,
  F,
  t,
  T(L)
), Me = (t) => _(
  14,
  U,
  t,
  ot(S)
), Oe = (t) => _(
  21,
  G,
  t,
  T(L)
), Ne = (t) => _(
  22,
  B,
  t,
  T(Z)
), de = (t) => _(
  23,
  H,
  t,
  T(tt)
), pe = (t) => _(
  31,
  Y,
  t,
  nt()
), fe = (t) => _(
  32,
  g,
  t,
  T(S)
), De = (t) => _(33, y, t), ue = (t) => _(34, K, t), le = (t) => _(
  35,
  v,
  t,
  ot(et)
), Fe = (t) => _(61, V, t), Ue = (t) => _(
  62,
  $,
  t,
  T(ut)
), Ge = (t) => _(
  63,
  j,
  t,
  T(At)
), Be = (t) => _(
  64,
  z,
  t,
  T(_t)
), He = (t) => _(
  51,
  W,
  t,
  Et(Ft)
), Ye = (t) => _(
  52,
  X,
  t,
  Et(Ut)
), ge = (t) => _(53, k, t), ye = (t) => _(54, h, t), Ke = (t) => _(43, x, t), Ve = (t) => _(44, q, t), ve = (t) => _(55, w, t), We = (t) => _(41, Q, t), Xe = (t) => _(42, b, t), Bt = {
  domainName: "特徴",
  options: {
    collaps: j,
    regularParam: G,
    specialParam: H,
    extraParam: B,
    partyAbility: z,
    specialFlag: $,
    actionPlus: V,
    attackElement: Y,
    attackSkill: v,
    attackSpeed: y,
    attackState: g,
    attackTimes: K,
    debuffRate: l,
    elementRate: u,
    equipWeaponType: W,
    equipArmorType: X,
    equipLock: k,
    equipSeal: h,
    skillAdd: x,
    skillSeal: q,
    stateRate: F,
    stateResist: U,
    skillTypeAdd: Q,
    skillTypeSeal: b,
    slotType: w
  }
}, Ht = {
  domainName: "アクター",
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
}, Yt = {
  domainName: "防具",
  options: {
    armorTypeId: "防具タイプID",
    slotTypeId: "スロットタイプID"
  }
}, gt = {
  domainName: "職業",
  options: {
    params: "パラメータ",
    learnings: "習得スキル",
    expParams: "経験値パラメータ"
  }
}, yt = {
  domainName: "ステート",
  options: {
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
  }
}, Kt = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Vt = {
  domainName: "敵キャラ",
  options: {
    dropItems: "ドロップアイテム",
    battlerHue: "バトラーヒュー",
    battlerName: "バトラー名",
    gold: "ゴールド"
  }
}, vt = {
  domainName: "ダメージ",
  options: {}
}, ke = 0, he = 1, we = 2, Wt = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Xt = "{name} + {value1}", Tt = "{name} {value1}%", M = "{value1}% + {value2}", Rt = "{name} {value1}ターン", r = "{name}", st = {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: M
}, at = {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: M
}, ct = {
  desc: "TPを指定した量だけ増加させます。",
  domainName: "TP増加",
  format: M
}, Lt = {
  desc: "指定したステートを付加します。",
  domainName: "ステート付加",
  format: Tt
}, rt = {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: Tt
}, it = {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: Rt
}, St = {
  desc: "デバフを付与する",
  domainName: "デバフ付与",
  format: Rt
}, mt = {
  desc: "バフを解除する",
  domainName: "バフ解除",
  format: r
}, It = {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: r
}, kt = {
  desc: "特殊効果",
  domainName: "特殊効果",
  format: r
}, Pt = {
  desc: "成長効果",
  domainName: "成長効果",
  format: Xt
}, Ct = {
  desc: "スキルを習得する",
  domainName: "スキル習得",
  format: r
}, Mt = {
  desc: "コモンイベントを実行する",
  domainName: "コモンイベント",
  format: r
}, ht = {
  domainName: "使用効果",
  options: {
    addBuff: it,
    addDebuff: St,
    gainTp: ct,
    grow: Pt,
    learnSkill: Ct,
    recoverHp: st,
    recoverMp: at,
    removeBuff: mt,
    removeDebuff: It,
    removeState: rt,
    special: kt,
    addState: Lt,
    commonEvent: Mt
  }
}, xe = 0, wt = 11, xt = 12, qt = 13, Qt = 21, bt = 22, $t = 31, jt = 32, zt = 33, Jt = 34, qe = 41, Zt = 42, tA = 43, AA = 44, Qe = (t, A, e) => t.format.replaceAll("{value1}", A.value1.toString()).replaceAll("{value2}", A.value2.toString()).replaceAll("{name}", e), m = () => ({
  author: s,
  module: C,
  sourceKey: L
}), I = (t) => ({
  author: s,
  module: d,
  sourceKey: t
}), o = (t, A, e, E) => ({
  codeId: t,
  label: e.domainName ?? A.domainName,
  format: e.format ?? A.format,
  description: e.desc ?? A.desc,
  dataSource: E
}), be = (t) => o(wt, st, t), $e = (t) => o(xt, at, t), je = (t) => o(qt, ct, t), ze = (t) => o(Zt, Pt, t), Je = (t) => o(
  Qt,
  Lt,
  t,
  I(S)
), Ze = (t) => o(
  bt,
  rt,
  t,
  I(S)
), tn = (t) => o($t, it, t, m()), An = (t) => o(
  zt,
  mt,
  t,
  m()
), _n = (t) => o(
  tA,
  Ct,
  t,
  I(et)
), en = (t) => o(
  jt,
  St,
  t,
  m()
), nn = (t) => o(
  Jt,
  It,
  t,
  m()
), on = (t) => o(
  AA,
  Mt,
  t,
  I(lt)
), _A = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, eA = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, nA = {
  actor: Ht,
  class: gt,
  armor: Yt,
  enemy: Vt,
  item: Wt,
  skill: _A,
  state: yt,
  weapon: Kt,
  usableItem: eA
}, En = 0, Tn = 101, Rn = 401, sn = 102, an = 402, cn = 103, Ln = 104, rn = 105, Sn = 405, mn = 108, In = 408, Pn = 109, Cn = 111, Mn = 411, On = 112, Nn = 113, dn = 115, pn = 117, fn = 118, Dn = 119, un = 121, ln = 122, Fn = 123, Un = 124, Gn = 125, Bn = 126, Hn = 127, Yn = 128, gn = 129, yn = 132, Kn = 133, Vn = 134, vn = 135, Wn = 136, Xn = 137, kn = 138, hn = 139, wn = 140, xn = 201, qn = 202, Qn = 203, bn = 204, $n = 205, jn = 206, zn = 211, Jn = 212, Zn = 213, to = 214, Ao = 216, _o = 217, eo = 221, no = 222, oo = 223, Eo = 224, To = 225, Ro = 230, so = 231, ao = 232, co = 233, Lo = 234, ro = 235, io = 236, So = 241, mo = 242, Io = 243, Po = 244, Co = 245, Mo = 246, Oo = 249, No = 250, po = 251, fo = 261, Do = 282, uo = 283, lo = 284, Fo = 285, Uo = 301, Go = 302, Bo = 605, Ho = 303, Yo = 311, go = 312, yo = 313, Ko = 314, Vo = 315, vo = 320, Wo = 321, Xo = 322, ko = 323, ho = 324, wo = 325, xo = 331, qo = 332, Qo = 333, bo = 334, $o = 335, jo = 336, zo = 337, Jo = 339, Zo = 340, tE = 351, AE = 342, _E = 352, eE = 353, nE = 354, oE = 355, EE = 655, TE = 356, RE = 357, sE = 0, aE = 1, cE = 2, LE = 3, rE = 4, iE = 5, SE = 6, mE = 7, IE = 8, PE = 9, CE = 10, ME = 11, OE = 12, NE = 13, dE = 14, pE = 15, fE = 16, DE = 17, uE = 18, lE = 19, FE = 20, UE = 21, GE = 22, BE = 23, HE = 24, YE = 25, gE = 26, yE = 27, KE = 28, VE = 29, vE = 30, WE = 31, XE = 32, kE = 33, hE = 34, wE = 35, xE = 36, qE = 37, QE = 38, bE = 39, $E = 40, jE = 41, zE = 42, JE = 43, ZE = 44, tT = 45, AT = {
  domainName: "オプション",
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
}, _T = {
  domainName: "タイプ",
  options: {
    armorTypes: "防具タイプ",
    elements: "属性",
    equipTypes: "装備タイプ",
    skillTypes: "スキルタイプ",
    weaponTypes: "武器タイプ",
    switches: "スイッチ",
    variables: "変数"
  }
}, oA = {
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
}, eT = {
  rpg: {
    damage: vt,
    data: nA,
    traits: Bt,
    itemEffect: ht
  },
  global: oA
};
export {
  Zo as ABORT_BATTLE,
  s as AUTHOR_RMMZ,
  Uo as BATTLE_PROCESSING,
  Xo as CHANGE_ACTOR_IMAGES,
  Yn as CHANGE_ARMORS,
  uo as CHANGE_BATTLE_BACKGROUND,
  yn as CHANGE_BATTLE_BGM,
  Wo as CHANGE_CLASS,
  hn as CHANGE_DEFEAT_ME,
  Wn as CHANGE_ENCOUNTER,
  xo as CHANGE_ENEMY_HP,
  qo as CHANGE_ENEMY_MP,
  Qo as CHANGE_ENEMY_STATE,
  AE as CHANGE_ENEMY_TP,
  Vo as CHANGE_EXP,
  Xn as CHANGE_FORMATION_ACCESS,
  Gn as CHANGE_GOLD,
  Yo as CHANGE_HP,
  Bn as CHANGE_ITEMS,
  vn as CHANGE_MENU_ACCESS,
  go as CHANGE_MP,
  vo as CHANGE_NAME,
  ho as CHANGE_NICKNAME,
  lo as CHANGE_PARALLAX,
  gn as CHANGE_PARTY_MEMBER,
  Ao as CHANGE_PLAYER_FOLLOWERS,
  wo as CHANGE_PROFILE,
  Vn as CHANGE_SAVE_ACCESS,
  Do as CHANGE_TILESET,
  yo as CHANGE_TP,
  zn as CHANGE_TRANSPARENCY,
  wn as CHANGE_VEHICLE_BGM,
  ko as CHANGE_VEHICLE_IMAGE,
  Kn as CHANGE_VICTORY_ME,
  Hn as CHANGE_WEAPONS,
  kn as CHANGE_WINDOW_COLOR,
  o_ as COLLAPS_BOSS,
  E_ as COLLAPS_INSTANT,
  T_ as COLLAPS_NONE,
  n_ as COLLAPS_NORMAL,
  mn as COMMENT,
  In as COMMENT_BODY,
  pn as COMMON_EVENT,
  Cn as CONDITIONAL_BRANCH,
  Mn as CONDITIONAL_BRANCH_ELSE,
  Fn as CONTROL_SELF_SWITCH,
  un as CONTROL_SWITCHES,
  Un as CONTROL_TIMER,
  ln as CONTROL_VARIABLES,
  vt as DEFAULT_DAMAGE_LABELS,
  oA as DEFAULT_GLOBAL_LABELS,
  Wt as DEFAULT_ITEM_LABELS,
  _A as DEFAULT_SKILL_LABELS,
  AT as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  eA as DEFAULT_USABLE_ITEM_LABELS,
  $t as EFFECT_ADD_BUFF,
  jt as EFFECT_ADD_DEBUFF,
  Qt as EFFECT_ADD_STATE,
  AA as EFFECT_COMMON_EVENT,
  qt as EFFECT_GAIN_TP,
  Zt as EFFECT_GROW,
  tA as EFFECT_LEARN_SKILL,
  wt as EFFECT_RECOVER_HP,
  xt as EFFECT_RECOVER_MP,
  zt as EFFECT_REMOVE_BUFF,
  Jt as EFFECT_REMOVE_DEBUFF,
  bt as EFFECT_REMOVE_STATE,
  qe as EFFECT_SPECIAL,
  $o as ENEMY_APPEAR,
  bo as ENEMY_RECOVER_ALL,
  jo as ENEMY_TRANSFORM,
  to as ERASE_EVENT,
  ro as ERASE_PICTURE,
  dn as EXIT_EVENT_PROCESSING,
  O_ as EXTRA_PARAM_CEV,
  p_ as EXTRA_PARAM_CNT,
  M_ as EXTRA_PARAM_CRI,
  C_ as EXTRA_PARAM_EVA,
  P_ as EXTRA_PARAM_HIT,
  f_ as EXTRA_PARAM_HRG,
  N_ as EXTRA_PARAM_MEV,
  d_ as EXTRA_PARAM_MRF,
  D_ as EXTRA_PARAM_MRG,
  u_ as EXTRA_PARAM_TRG,
  no as FADEIN_SCREEN,
  mo as FADEOUT_BGM,
  Mo as FADEOUT_BGS,
  eo as FADEOUT_SCREEN,
  dA as FILENAME_SYSTEM,
  i_ as FLAG_ID_AUTO_BATTLE,
  S_ as FLAG_ID_GUARD,
  I_ as FLAG_ID_PRESERVE_TP,
  m_ as FLAG_ID_SUBSTITUTE,
  Eo as FLASH_SCREEN,
  EA as FOLDER_AUDIO_BGM,
  sA as FOLDER_AUDIO_BGS,
  RA as FOLDER_AUDIO_ME,
  TA as FOLDER_AUDIO_SE,
  aA as FOLDER_IMG_BATTLEBACK1,
  cA as FOLDER_IMG_BATTLEBACK2,
  LA as FOLDER_IMG_CHACTERS,
  rA as FOLDER_IMG_ENEMIES,
  iA as FOLDER_IMG_FACES,
  SA as FOLDER_IMG_PARALLACES,
  mA as FOLDER_IMG_PICTURES,
  IA as FOLDER_IMG_SV_ACTORS,
  PA as FOLDER_IMG_SV_ENEMIES,
  CA as FOLDER_IMG_SYSTEM,
  MA as FOLDER_IMG_TILESETS,
  OA as FOLDER_IMG_TITLES1,
  NA as FOLDER_IMG_TITLES2,
  Jo as FORCE_ACTION,
  eE as GAME_OVER,
  _o as GATHER_FOLLOWERS,
  Fo as GET_LOCATION_INFO,
  jn as GET_ONOFF_VEHICLE,
  ke as HITTYPE_CERTAIN,
  we as HITTYPE_MAGICAL,
  he as HITTYPE_PHYSICAL,
  cn as INPUT_NUMBER,
  fn as LABEL,
  Ht as LABELS_DATA_ACTOR,
  Yt as LABELS_DATA_ARMOR,
  gt as LABELS_DATA_CLASS,
  Vt as LABELS_DATA_ENEMY,
  yt as LABELS_DATA_STATE,
  Kt as LABELS_DATA_WEAPON,
  it as LABELS_EFFECT_ADD_BUFF,
  St as LABELS_EFFECT_ADD_DEBUFF,
  Lt as LABELS_EFFECT_ADD_STATE,
  Mt as LABELS_EFFECT_COMMON_EVENT,
  ct as LABELS_EFFECT_GAIN_TP,
  Pt as LABELS_EFFECT_GROW,
  Ct as LABELS_EFFECT_LEARN_SKILL,
  st as LABELS_EFFECT_RECOVER_HP,
  at as LABELS_EFFECT_RECOVER_MP,
  mt as LABELS_EFFECT_REMOVE_BUFF,
  It as LABELS_EFFECT_REMOVE_DEBUFF,
  rt as LABELS_EFFECT_REMOVE_STATE,
  kt as LABELS_EFFECT_SPECIAL,
  V as LABELS_TRAIT_ACTION_PLUS,
  Y as LABELS_TRAIT_ATTACK_ELEMENT,
  v as LABELS_TRAIT_ATTACK_SKILL,
  y as LABELS_TRAIT_ATTACK_SPEED,
  g as LABELS_TRAIT_ATTACK_STATE,
  K as LABELS_TRAIT_ATTACK_TIMES,
  j as LABELS_TRAIT_COLLAPS,
  l as LABELS_TRAIT_DEBUFF_RATE,
  u as LABELS_TRAIT_ELEMENT_RATE,
  X as LABELS_TRAIT_EQUIP_ARMOR_TYPE,
  k as LABELS_TRAIT_EQUIP_LOCK,
  h as LABELS_TRAIT_EQUIP_SEAL,
  W as LABELS_TRAIT_EQUIP_WEAPON_TYPE,
  B as LABELS_TRAIT_EXTRA_PARAM,
  z as LABELS_TRAIT_PARTY_ABILITY,
  G as LABELS_TRAIT_REGULAR_PARAM,
  x as LABELS_TRAIT_SKILL_ADD,
  q as LABELS_TRAIT_SKILL_SEAL,
  Q as LABELS_TRAIT_SKILL_TYPE_ADD,
  b as LABELS_TRAIT_SKILL_TYPE_SEAL,
  w as LABELS_TRAIT_SLOT_TYPE,
  $ as LABELS_TRAIT_SPECIALFLAG,
  H as LABELS_TRAIT_SPECIAL_PARAM,
  F as LABELS_TRAIT_STATE_RATE,
  U as LABELS_TRAIT_STATE_RESIST,
  Dn as LABEL_JUMP,
  eT as LABEL_REGISTRY_JP,
  nA as LABEL_SET_DATA,
  ht as LABEL_SET_ITEM_EFFECT,
  Bt as LABEL_SET_TRAIT,
  On as LOOP,
  Nn as LOOP_BREAK,
  d as MODULE_DATA,
  p as MODULE_SYSTEM,
  C as MODULE_TRAIT,
  ao as MOVE_PICTURE,
  _T as MockSystemLabelDataTypes,
  Ho as NAME_INPUT_PROCESSING,
  En as NO_OPERATION,
  tE as OPEN_MENU_SCREEN,
  _E as OPEN_SAVE_SCREEN,
  a_ as PARTY_ABILITY_CANCEL_SURPRISE,
  r_ as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  R_ as PARTY_ABILITY_ENCOUNTER_HALF,
  s_ as PARTY_ABILITY_ENCOUNTER_NONE,
  L_ as PARTY_ABILITY_GOLD_DOUBLE,
  c_ as PARTY_ABILITY_RAISE_PREEMPTIVE,
  So as PLAY_BGM,
  Co as PLAY_BGS,
  Oo as PLAY_ME,
  fo as PLAY_MOVIE,
  No as PLAY_SE,
  TE as PLUGIN_COMMAND_MV,
  RE as PLUGIN_COMMAND_MZ,
  Ko as RECOVER_ALL,
  Y_ as REGULAR_PARAM_AGI,
  U_ as REGULAR_PARAM_ATK,
  G_ as REGULAR_PARAM_DEF,
  g_ as REGULAR_PARAM_LUK,
  B_ as REGULAR_PARAM_MATK,
  l_ as REGULAR_PARAM_MAX_HP,
  F_ as REGULAR_PARAM_MAX_MP,
  H_ as REGULAR_PARAM_MDEF,
  Po as RESUME_BGM,
  nE as RETURN_TO_TITLE_SCREEN,
  co as ROTATE_PICTURE,
  JE as ROUTE_CHANGE_BLEND_MODE,
  vE as ROUTE_CHANGE_FREQ,
  jE as ROUTE_CHANGE_IMAGE,
  zE as ROUTE_CHANGE_OPACITY,
  VE as ROUTE_CHANGE_SPEED,
  xE as ROUTE_DIR_FIX_OFF,
  wE as ROUTE_DIR_FIX_ON,
  sE as ROUTE_END,
  dE as ROUTE_JUMP,
  ME as ROUTE_MOVE_AWAY,
  NE as ROUTE_MOVE_BACKWARD,
  aE as ROUTE_MOVE_DOWN,
  OE as ROUTE_MOVE_FORWARD,
  cE as ROUTE_MOVE_LEFT,
  iE as ROUTE_MOVE_LOWER_L,
  SE as ROUTE_MOVE_LOWER_R,
  PE as ROUTE_MOVE_RANDOM,
  LE as ROUTE_MOVE_RIGHT,
  CE as ROUTE_MOVE_TOWARD,
  rE as ROUTE_MOVE_UP,
  mE as ROUTE_MOVE_UPPER_L,
  IE as ROUTE_MOVE_UPPER_R,
  ZE as ROUTE_PLAY_SE,
  tT as ROUTE_SCRIPT,
  hE as ROUTE_STEP_ANIME_OFF,
  kE as ROUTE_STEP_ANIME_ON,
  KE as ROUTE_SWITCH_OFF,
  yE as ROUTE_SWITCH_ON,
  QE as ROUTE_THROUGH_OFF,
  qE as ROUTE_THROUGH_ON,
  $E as ROUTE_TRANSPARENT_OFF,
  bE as ROUTE_TRANSPARENT_ON,
  GE as ROUTE_TURN_180D,
  UE as ROUTE_TURN_90D_L,
  FE as ROUTE_TURN_90D_R,
  BE as ROUTE_TURN_90D_R_L,
  gE as ROUTE_TURN_AWAY,
  fE as ROUTE_TURN_DOWN,
  DE as ROUTE_TURN_LEFT,
  HE as ROUTE_TURN_RANDOM,
  uE as ROUTE_TURN_RIGHT,
  YE as ROUTE_TURN_TOWARD,
  lE as ROUTE_TURN_UP,
  pE as ROUTE_WAIT,
  XE as ROUTE_WALK_ANIME_OFF,
  WE as ROUTE_WALK_ANIME_ON,
  Io as SAVE_BGM,
  oE as SCRIPT_EVAL,
  EE as SCRIPT_EVAL_BODY,
  bn as SCROLL_MAP,
  Ln as SELECT_ITEM,
  Qn as SET_EVENT_LOCATION,
  $n as SET_MOVEMENT_ROUTE,
  qn as SET_VEHICLE_LOCATION,
  io as SET_WEATHER_EFFECT,
  To as SHAKE_SCREEN,
  Go as SHOP_PROCESSING,
  Bo as SHOP_PROCESSING_BODY,
  Jn as SHOW_ANIMATION,
  Zn as SHOW_BALLOON_ICON,
  zo as SHOW_BATTLE_ANIMATION,
  sn as SHOW_CHOICES,
  an as SHOW_CHOICES_ITEM,
  Tn as SHOW_MESSAGE,
  Rn as SHOW_MESSAGE_BODY,
  so as SHOW_PICTURE,
  rn as SHOW_SCROLLING_TEXT,
  Sn as SHOW_SCROLLING_TEXT_BODY,
  Pn as SKIP,
  xe as SPECIAL_EFFECT_ESCAPE,
  x_ as SPECIAL_PARAM_EXR,
  w_ as SPECIAL_PARAM_FDR,
  K_ as SPECIAL_PARAM_GRD,
  W_ as SPECIAL_PARAM_MCR,
  h_ as SPECIAL_PARAM_MDR,
  k_ as SPECIAL_PARAM_PDR,
  v_ as SPECIAL_PARAM_PHA,
  V_ as SPECIAL_PARAM_REC,
  X_ as SPECIAL_PARAM_TCR,
  y_ as SPECIAL_PARAM_TGR,
  Ut as SRC_ARMOR_TYPES,
  Le as SRC_COLOR,
  lt as SRC_COMMON_EVNET,
  ee as SRC_DATA_ACTOR,
  se as SRC_DATA_ARMOR,
  ae as SRC_DATA_CLASS,
  Ee as SRC_DATA_ENEMY,
  Te as SRC_DATA_ITEMS,
  oe as SRC_DATA_MAP,
  et as SRC_DATA_SKILL,
  S as SRC_DATA_STATE,
  ne as SRC_DATA_VARIABLE,
  Re as SRC_DATA_WEAPON,
  Gt as SRC_ELEMENTS,
  re as SRC_EQUIP_TYPES,
  Z as SRC_PARAMS_EXTRA,
  L as SRC_PARAMS_REGULAR,
  tt as SRC_PARAMS_SPECIAL,
  Se as SRC_SKILL_TYPES,
  ie as SRC_SWITCHES,
  At as SRC_TRAIT_COLLAPS,
  _t as SRC_TRAIT_PARTY_ABILITY,
  ut as SRC_TRAIT_SPECIAL_FLAG,
  ce as SRC_TROOP,
  Ft as SRC_WEAPON_TYPES,
  po as STOP_SE,
  Lo as TINT_PICTURE,
  oo as TINT_SCREEN,
  t_ as TRAIT_ACTION_PLUS,
  WA as TRAIT_ATTACK_ELEMENT,
  wA as TRAIT_ATTACK_SKILL,
  kA as TRAIT_ATTACK_SPEED,
  XA as TRAIT_ATTACK_STATE,
  hA as TRAIT_ATTACK_TIMES,
  __ as TRAIT_COLLAPSE_TYPE,
  YA as TRAIT_DEBUFF_RATE,
  HA as TRAIT_ELEMENT_RATE,
  jA as TRAIT_EQUIP_ARMOR_TYPE,
  zA as TRAIT_EQUIP_LOCK,
  JA as TRAIT_EQUIP_SEAL,
  $A as TRAIT_EQUIP_WEAPON_TYPE,
  KA as TRAIT_PARAM,
  e_ as TRAIT_PARTY_ABILITY,
  QA as TRAIT_SKILL_ADD,
  bA as TRAIT_SKILL_SEAL,
  xA as TRAIT_SKILL_TYPE_ADD,
  qA as TRAIT_SKILL_TYPE_SEAL,
  ZA as TRAIT_SLOT_TYPE,
  vA as TRAIT_SPARAM,
  A_ as TRAIT_SPECIAL_FLAG,
  gA as TRAIT_STATE_RATE,
  yA as TRAIT_STATE_RESIST,
  VA as TRAIT_XPARAM,
  xn as TRANSFER_PLAYER,
  Ro as WAIT,
  $_ as buildCollapsSource,
  J_ as buildExtraParamSource,
  j_ as buildPartyAbilitySource,
  z_ as buildRegularParamSource,
  Z_ as buildSpecialParamSource,
  o as defineEffect,
  tn as defineEffectAddBuff,
  en as defineEffectAddDebuff,
  Je as defineEffectAddState,
  on as defineEffectCommonEvent,
  je as defineEffectGainTp,
  ze as defineEffectGrow,
  _n as defineEffectLearnSkill,
  be as defineEffectRecoverHp,
  $e as defineEffectRecoverMp,
  An as defineEffectRemoveBuff,
  nn as defineEffectRemoveDebuff,
  Ze as defineEffectRemoveState,
  Fe as defineTraitActionPlus,
  pe as defineTraitAttackElement,
  le as defineTraitAttackSkill,
  De as defineTraitAttackSpeed,
  fe as defineTraitAttackState,
  ue as defineTraitAttackTimes,
  Ge as defineTraitCollapseType,
  Pe as defineTraitDebuffRate,
  Ie as defineTraitElementRate,
  Ye as defineTraitEquipArmorType,
  ge as defineTraitEquipLock,
  ye as defineTraitEquipSeal,
  He as defineTraitEquipWeaponType,
  Ne as defineTraitExtraParam,
  Be as defineTraitPartyAbility,
  Oe as defineTraitRegularParam,
  We as defineTraitSTypeAdd,
  Xe as defineTraitSTypeSeal,
  Ke as defineTraitSkillAdd,
  Ve as defineTraitSkillSeal,
  ve as defineTraitSlotType,
  Ue as defineTraitSpecialFlag,
  de as defineTraitSpecialParam,
  Ce as defineTraitStateRate,
  Me as defineTraitStateResist,
  Q_ as extraParamName,
  Nt as foldCollapsOptions,
  ft as foldExtraParam,
  dt as foldPartyAbilityOptions,
  pt as foldRegularParam,
  Dt as foldSpecialParams,
  Qe as formatItemEffectText,
  me as formatTraitText,
  GA as getArmorTypes,
  uA as getElementTypes,
  lA as getEquipTypes,
  BA as getParamNames,
  FA as getSkillTypes,
  DA as getVariableNames,
  UA as getWeaponTypes,
  _e as isValid,
  Ae as joinSourceKey,
  pA as mergeDomainLabel,
  fA as mergeNestedPrimitiveRecords,
  N as mergeWithDefaults,
  q_ as regularParamName,
  te as sanitizeKey,
  b_ as specialParamName,
  P as testUnknonwKey,
  c as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
