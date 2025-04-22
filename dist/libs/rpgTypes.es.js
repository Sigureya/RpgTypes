const oA = "bgm", EA = "se", eA = "me", TA = "bgs", RA = "battlebacks1", sA = "battlebacks2", cA = "characters", aA = "enemies", LA = "faces", rA = "parallaxes", iA = "pictures", SA = "sv_actors", mA = "sv_enemies", IA = "system", PA = "tilesets", MA = "titles1", OA = "titles2", CA = "System.json", N = (t, A) => {
  const n = { ...t };
  for (const e in t) {
    const i = A[e];
    typeof i == "string" && (n[e] = i);
  }
  return n;
}, NA = (t, A) => ({
  domainName: A.domainName ?? t.domainName,
  options: N(t.options, A.options ?? {})
}), dA = (t, A) => {
  const n = {};
  for (const e in t) {
    const i = t[e], _t = A[e] ?? {};
    n[e] = N(
      i,
      _t
    );
  }
  return n;
}, R = (t, A) => ({
  name: t,
  id: A
}), DA = (t) => t.variables.map(R), UA = (t) => t.elements.map(R), fA = (t) => t.equipTypes.map(R), pA = (t) => t.skillTypes.map(R), uA = (t) => t.weaponTypes.map(R), FA = (t) => t.armorTypes.map(R), lA = (t) => t.terms.params.map(R), s = "rmmz", M = "trait", d = "data", D = "system", GA = 11, BA = 12, HA = 13, YA = 14, gA = 21, yA = 22, KA = 23, VA = 31, vA = 32, XA = 33, WA = 34, hA = 35, kA = 41, wA = 42, xA = 43, QA = 44, qA = 51, bA = 52, $A = 53, jA = 54, zA = 55, JA = 61, ZA = 62, t_ = 63, A_ = 64, __ = 0, n_ = 1, o_ = 2, E_ = 3, e_ = 0, T_ = 1, R_ = 2, s_ = 3, c_ = 4, a_ = 5, L_ = 0, r_ = 1, i_ = 2, S_ = 3, m_ = 0, I_ = 1, P_ = 2, M_ = 3, O_ = 4, C_ = 5, N_ = 6, d_ = 7, D_ = 8, U_ = 9, f_ = 0, p_ = 1, u_ = 2, F_ = 3, l_ = 4, G_ = 5, B_ = 6, H_ = 7, Y_ = 0, g_ = 1, y_ = 2, K_ = 3, V_ = 4, v_ = 5, X_ = 6, W_ = 7, h_ = 8, k_ = 9, w_ = (t, A) => {
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
}, x_ = (t, A) => {
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
}, Q_ = (t, A) => {
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
}, nt = (t, A) => [
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
], ot = (t) => [
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
], Et = (t) => [
  { id: 0, name: t.maxHp },
  { id: 1, name: t.maxMp },
  { id: 2, name: t.atk },
  { id: 3, name: t.def },
  { id: 4, name: t.matk },
  { id: 5, name: t.mdef },
  { id: 6, name: t.agi },
  { id: 7, name: t.luk }
], et = (t) => [
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
], Tt = (t) => [
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
], a = (t, A, n) => ({
  items: n(A.options),
  label: A.domainName,
  source: {
    author: s,
    module: M,
    sourceKey: t
  }
}), q_ = (t, A) => a(
  y,
  t,
  (n) => nt(n, A)
), b_ = (t) => a(K, t, ot), $_ = (t) => a(L, t, Et), j_ = (t) => a(Y, t, et), z_ = (t) => a(g, t, Tt), o = "{name}", c = "{name} * {value}%", U = "{name} + {value}%", f = "{value}", Rt = {
  domainName: "属性有効度",
  format: c
}, st = {
  domainName: "弱体有効度",
  format: c
}, ct = {
  domainName: "ステート有効度",
  format: c
}, at = {
  domainName: "ステート無効",
  format: o
}, p = {
  domainName: "基本能力値",
  format: c,
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
}, u = {
  domainName: "追加能力値",
  format: U,
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
}, F = {
  domainName: "特殊能力値",
  format: c,
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
}, Lt = {
  domainName: "攻撃属性",
  format: o
}, rt = {
  domainName: "攻撃ステート",
  format: U
}, it = {
  domainName: "攻撃速度補正",
  format: f
}, St = {
  domainName: "攻撃追加回数",
  format: f
}, mt = {
  domainName: "行動追加",
  format: c
}, It = {
  domainName: "攻撃スキル",
  format: o
}, Pt = {
  domainName: "装備武器タイプ",
  format: o
}, Mt = {
  domainName: "装備防具タイプ",
  format: o
}, Ot = {
  domainName: "装備固定",
  format: o
}, Ct = {
  domainName: "装備封印",
  format: o
}, Nt = {
  domainName: "スロットタイプ",
  format: o
}, dt = {
  domainName: "スキル追加",
  format: o
}, Dt = {
  domainName: "スキル封印",
  format: o
}, Ut = {
  domainName: "スキルタイプ追加",
  format: o
}, ft = {
  domainName: "スキルタイプ封印",
  format: o
}, l = {
  domainName: "特殊フラグ",
  format: o,
  options: {
    autoBattle: "自動戦闘",
    guard: "防御",
    substitute: "身代わり",
    preventEscape: "逃走防止"
  }
}, G = {
  domainName: "消滅エフェクト",
  format: o,
  options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  }
}, B = {
  domainName: "パーティ能力",
  format: o,
  options: {
    cancelSurprise: "不意打ち無効",
    dropItemDouble: "アイテムドロップ2倍",
    encounterHalf: "エンカウント半減",
    encounterNone: "エンカウントなし",
    goldDouble: "ゴールド2倍",
    raisePreemptive: "先制攻撃率アップ"
  }
}, H = /^[a-zA-Z0-9]+$/, J_ = (t) => H.test(t) ? t : void 0, P = (t) => typeof t == "string" ? H.test(t) : !1, Z_ = (t) => [t.author, t.module, t.sourceKey].join("."), tn = (t) => P(t.author) && P(t.module) && P(t.sourceKey), L = "params", Y = "xparams", g = "sparams", y = "collaps", K = "partyAbiility", pt = "sflag", An = "actors", _n = "variables", nn = "map", on = "enemy", S = "state", V = "skill", En = "items", en = "weapon", Tn = "armor", Rn = "class", ut = "common_event", sn = "troop", cn = "colors", Ft = "weaponTypes", lt = "armorTypes", an = "equipTypes", Ln = "switches", rn = "skillTypes", Gt = "elements", Sn = (t, A, n) => t.format.replaceAll("{value}", A.value.toString()).replaceAll("{name}", n), C = (t, A) => typeof A == "string" ? A : t, _ = (t, A, n, e) => ({
  codeId: t,
  label: C(A.domainName, n.domainName),
  format: C(A.format, n.format),
  dataSource: e
}), v = () => ({
  module: D,
  author: s,
  sourceKey: Gt
}), X = (t) => ({
  module: d,
  author: s,
  sourceKey: t
}), T = (t) => ({
  author: s,
  module: M,
  sourceKey: t
}), W = (t) => ({
  author: s,
  module: D,
  sourceKey: t
}), mn = (t) => _(
  11,
  Rt,
  t,
  v()
), In = (t) => _(
  12,
  st,
  t,
  T(L)
), Pn = (t) => _(
  13,
  ct,
  t,
  T(L)
), Mn = (t) => _(
  14,
  at,
  t,
  X(S)
), On = (t) => _(
  21,
  p,
  t,
  T(L)
), Cn = (t) => _(
  22,
  u,
  t,
  T(Y)
), Nn = (t) => _(
  23,
  F,
  t,
  T(g)
), dn = (t) => _(
  31,
  Lt,
  t,
  v()
), Dn = (t) => _(
  32,
  rt,
  t,
  T(S)
), Un = (t) => _(33, it, t), fn = (t) => _(34, St, t), pn = (t) => _(
  35,
  It,
  t,
  X(V)
), un = (t) => _(61, mt, t), Fn = (t) => _(
  62,
  l,
  t,
  T(pt)
), ln = (t) => _(
  63,
  G,
  t,
  T(y)
), Gn = (t) => _(
  64,
  B,
  t,
  T(K)
), Bn = (t) => _(
  51,
  Pt,
  t,
  W(Ft)
), Hn = (t) => _(
  52,
  Mt,
  t,
  W(lt)
), Yn = (t) => _(53, Ot, t), gn = (t) => _(54, Ct, t), yn = (t) => _(43, dt, t), Kn = (t) => _(44, Dt, t), Vn = (t) => _(55, Nt, t), vn = (t) => _(41, Ut, t), Xn = (t) => _(42, ft, t), Bt = {
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
}, Ht = {
  domainName: "防具",
  options: {
    armorTypeId: "防具タイプID",
    slotTypeId: "スロットタイプID"
  }
}, Yt = {
  domainName: "職業",
  options: {
    params: "パラメータ",
    learnings: "習得スキル",
    expParams: "経験値パラメータ"
  }
}, gt = {
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
}, yt = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Kt = {
  domainName: "敵キャラ",
  options: {
    dropItems: "ドロップアイテム",
    battlerHue: "バトラーヒュー",
    battlerName: "バトラー名",
    gold: "ゴールド"
  }
}, Vt = {
  domainName: "ダメージ",
  options: {}
}, Wn = 0, hn = 1, kn = 2, vt = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Xt = "{name} + {value1}", h = "{name} {value1}%", O = "{value1}% + {value2}", k = "{name} {value1}ターン", r = "{name}", w = {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: O
}, x = {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: O
}, Q = {
  desc: "TPを指定した量だけ増加させます。",
  domainName: "TP増加",
  format: O
}, q = {
  desc: "指定したステートを付加します。",
  domainName: "ステート付加",
  format: h
}, b = {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: h
}, $ = {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: k
}, j = {
  desc: "デバフを付与する",
  domainName: "デバフ付与",
  format: k
}, z = {
  desc: "バフを解除する",
  domainName: "バフ解除",
  format: r
}, J = {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: r
}, Wt = {
  desc: "特殊効果",
  domainName: "特殊効果",
  format: r
}, Z = {
  desc: "成長効果",
  domainName: "成長効果",
  format: Xt
}, tt = {
  desc: "スキルを習得する",
  domainName: "スキル習得",
  format: r
}, At = {
  desc: "コモンイベントを実行する",
  domainName: "コモンイベント",
  format: r
}, ht = {
  domainName: "使用効果",
  options: {
    addBuff: $,
    addDebuff: j,
    gainTp: Q,
    grow: Z,
    learnSkill: tt,
    recoverHp: w,
    recoverMp: x,
    removeBuff: z,
    removeDebuff: J,
    removeState: b,
    special: Wt,
    addState: q,
    commonEvent: At
  }
}, wn = 0, kt = 11, wt = 12, xt = 13, Qt = 21, qt = 22, bt = 31, $t = 32, jt = 33, zt = 34, xn = 41, Jt = 42, Zt = 43, tA = 44, Qn = (t, A, n) => t.format.replaceAll("{value1}", A.value1.toString()).replaceAll("{value2}", A.value2.toString()).replaceAll("{name}", n), m = () => ({
  author: s,
  module: M,
  sourceKey: L
}), I = (t) => ({
  author: s,
  module: d,
  sourceKey: t
}), E = (t, A, n, e) => ({
  codeId: t,
  label: n.domainName ?? A.domainName,
  format: n.format ?? A.format,
  description: n.desc ?? A.desc,
  dataSource: e
}), qn = (t) => E(kt, w, t), bn = (t) => E(wt, x, t), $n = (t) => E(xt, Q, t), jn = (t) => E(Jt, Z, t), zn = (t) => E(
  Qt,
  q,
  t,
  I(S)
), Jn = (t) => E(
  qt,
  b,
  t,
  I(S)
), Zn = (t) => E(bt, $, t, m()), to = (t) => E(
  jt,
  z,
  t,
  m()
), Ao = (t) => E(
  Zt,
  tt,
  t,
  I(V)
), _o = (t) => E(
  $t,
  j,
  t,
  m()
), no = (t) => E(
  zt,
  J,
  t,
  m()
), oo = (t) => E(
  tA,
  At,
  t,
  I(ut)
), AA = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, _A = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, Eo = 0, eo = 101, To = 401, Ro = 102, so = 402, co = 103, ao = 104, Lo = 105, ro = 405, io = 108, So = 408, mo = 109, Io = 111, Po = 411, Mo = 112, Oo = 113, Co = 115, No = 117, Do = 118, Uo = 119, fo = 121, po = 122, uo = 123, Fo = 124, lo = 125, Go = 126, Bo = 127, Ho = 128, Yo = 129, go = 132, yo = 133, Ko = 134, Vo = 135, vo = 136, Xo = 137, Wo = 138, ho = 139, ko = 140, wo = 201, xo = 202, Qo = 203, qo = 204, bo = 205, $o = 206, jo = 211, zo = 212, Jo = 213, Zo = 214, tE = 216, AE = 217, _E = 221, nE = 222, oE = 223, EE = 224, eE = 225, TE = 230, RE = 231, sE = 232, cE = 233, aE = 234, LE = 235, rE = 236, iE = 241, SE = 242, mE = 243, IE = 244, PE = 245, ME = 246, OE = 249, CE = 250, NE = 251, dE = 261, DE = 282, UE = 283, fE = 284, pE = 285, uE = 301, FE = 302, lE = 605, GE = 303, BE = 311, HE = 312, YE = 313, gE = 314, yE = 315, KE = 320, VE = 321, vE = 322, XE = 323, WE = 324, hE = 325, kE = 331, wE = 332, xE = 333, QE = 334, qE = 335, bE = 336, $E = 337, jE = 339, zE = 340, JE = 351, ZE = 342, te = 352, Ae = 353, _e = 354, ne = 355, oe = 655, Ee = 356, ee = 357, Te = 0, Re = 1, se = 2, ce = 3, ae = 4, Le = 5, re = 6, ie = 7, Se = 8, me = 9, Ie = 10, Pe = 11, Me = 12, Oe = 13, Ce = 14, Ne = 15, de = 16, De = 17, Ue = 18, fe = 19, pe = 20, ue = 21, Fe = 22, le = 23, Ge = 24, Be = 25, He = 26, Ye = 27, ge = 28, ye = 29, Ke = 30, Ve = 31, ve = 32, Xe = 33, We = 34, he = 35, ke = 36, we = 37, xe = 38, Qe = 39, qe = 40, be = 41, $e = 42, je = 43, ze = 44, Je = 45, Ze = {
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
}, tT = {
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
}, nA = {
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
}, AT = {
  rpg: {
    actor: Bt,
    armor: Ht,
    skill: AA,
    damage: Vt,
    item: vt,
    weapon: yt,
    enemy: Kt,
    state: gt,
    paramSpecial: F,
    paramRegular: p,
    paramExtra: u,
    collaps: G,
    specialFlag: l,
    partyAbility: B,
    class: Yt,
    usableItem: _A,
    itemEffect: ht
  },
  global: nA
};
export {
  zE as ABORT_BATTLE,
  s as AUTHOR_RMMZ,
  uE as BATTLE_PROCESSING,
  vE as CHANGE_ACTOR_IMAGES,
  Ho as CHANGE_ARMORS,
  UE as CHANGE_BATTLE_BACKGROUND,
  go as CHANGE_BATTLE_BGM,
  VE as CHANGE_CLASS,
  ho as CHANGE_DEFEAT_ME,
  vo as CHANGE_ENCOUNTER,
  kE as CHANGE_ENEMY_HP,
  wE as CHANGE_ENEMY_MP,
  xE as CHANGE_ENEMY_STATE,
  ZE as CHANGE_ENEMY_TP,
  yE as CHANGE_EXP,
  Xo as CHANGE_FORMATION_ACCESS,
  lo as CHANGE_GOLD,
  BE as CHANGE_HP,
  Go as CHANGE_ITEMS,
  Vo as CHANGE_MENU_ACCESS,
  HE as CHANGE_MP,
  KE as CHANGE_NAME,
  WE as CHANGE_NICKNAME,
  fE as CHANGE_PARALLAX,
  Yo as CHANGE_PARTY_MEMBER,
  tE as CHANGE_PLAYER_FOLLOWERS,
  hE as CHANGE_PROFILE,
  Ko as CHANGE_SAVE_ACCESS,
  DE as CHANGE_TILESET,
  YE as CHANGE_TP,
  jo as CHANGE_TRANSPARENCY,
  ko as CHANGE_VEHICLE_BGM,
  XE as CHANGE_VEHICLE_IMAGE,
  yo as CHANGE_VICTORY_ME,
  Bo as CHANGE_WEAPONS,
  Wo as CHANGE_WINDOW_COLOR,
  n_ as COLLAPS_BOSS,
  o_ as COLLAPS_INSTANT,
  E_ as COLLAPS_NONE,
  __ as COLLAPS_NORMAL,
  io as COMMENT,
  So as COMMENT_BODY,
  No as COMMON_EVENT,
  Io as CONDITIONAL_BRANCH,
  Po as CONDITIONAL_BRANCH_ELSE,
  uo as CONTROL_SELF_SWITCH,
  fo as CONTROL_SWITCHES,
  Fo as CONTROL_TIMER,
  po as CONTROL_VARIABLES,
  Bt as DEFAULT_ACTOR_LABELS,
  Ht as DEFAULT_ARMOR_LABELS,
  Yt as DEFAULT_CLASS_LABELS,
  Vt as DEFAULT_DAMAGE_LABELS,
  ht as DEFAULT_EFFECT_LABELS_SET,
  Kt as DEFAULT_ENEMY_LABELS,
  nA as DEFAULT_GLOBAL_LABELS,
  vt as DEFAULT_ITEM_LABELS,
  $ as DEFAULT_LABEL_ADD_BUFF,
  j as DEFAULT_LABEL_ADD_DEBUFF,
  q as DEFAULT_LABEL_ADD_STATE,
  At as DEFAULT_LABEL_COMMON_EVENT,
  Q as DEFAULT_LABEL_GAIN_TP,
  Z as DEFAULT_LABEL_GROW,
  tt as DEFAULT_LABEL_LEARN_SKILL,
  w as DEFAULT_LABEL_RECOVER_HP,
  x as DEFAULT_LABEL_RECOVER_MP,
  z as DEFAULT_LABEL_REMOVE_BUFF,
  J as DEFAULT_LABEL_REMOVE_DEBUFF,
  b as DEFAULT_LABEL_REMOVE_STATE,
  Wt as DEFAULT_LABEL_SPECIAL,
  AA as DEFAULT_SKILL_LABELS,
  gt as DEFAULT_STATE_LABELS,
  Ze as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  _A as DEFAULT_USABLE_ITEM_LABELS,
  yt as DEFAULT_WEAPON_LABELS,
  bt as EFFECT_ADD_BUFF,
  $t as EFFECT_ADD_DEBUFF,
  Qt as EFFECT_ADD_STATE,
  tA as EFFECT_COMMON_EVENT,
  xt as EFFECT_GAIN_TP,
  Jt as EFFECT_GROW,
  Zt as EFFECT_LEARN_SKILL,
  kt as EFFECT_RECOVER_HP,
  wt as EFFECT_RECOVER_MP,
  jt as EFFECT_REMOVE_BUFF,
  zt as EFFECT_REMOVE_DEBUFF,
  qt as EFFECT_REMOVE_STATE,
  xn as EFFECT_SPECIAL,
  qE as ENEMY_APPEAR,
  QE as ENEMY_RECOVER_ALL,
  bE as ENEMY_TRANSFORM,
  Zo as ERASE_EVENT,
  LE as ERASE_PICTURE,
  Co as EXIT_EVENT_PROCESSING,
  M_ as EXTRA_PARAM_CEV,
  N_ as EXTRA_PARAM_CNT,
  P_ as EXTRA_PARAM_CRI,
  I_ as EXTRA_PARAM_EVA,
  m_ as EXTRA_PARAM_HIT,
  d_ as EXTRA_PARAM_HRG,
  O_ as EXTRA_PARAM_MEV,
  C_ as EXTRA_PARAM_MRF,
  D_ as EXTRA_PARAM_MRG,
  U_ as EXTRA_PARAM_TRG,
  nE as FADEIN_SCREEN,
  SE as FADEOUT_BGM,
  ME as FADEOUT_BGS,
  _E as FADEOUT_SCREEN,
  CA as FILENAME_SYSTEM,
  L_ as FLAG_ID_AUTO_BATTLE,
  r_ as FLAG_ID_GUARD,
  S_ as FLAG_ID_PRESERVE_TP,
  i_ as FLAG_ID_SUBSTITUTE,
  EE as FLASH_SCREEN,
  oA as FOLDER_AUDIO_BGM,
  TA as FOLDER_AUDIO_BGS,
  eA as FOLDER_AUDIO_ME,
  EA as FOLDER_AUDIO_SE,
  RA as FOLDER_IMG_BATTLEBACK1,
  sA as FOLDER_IMG_BATTLEBACK2,
  cA as FOLDER_IMG_CHACTERS,
  aA as FOLDER_IMG_ENEMIES,
  LA as FOLDER_IMG_FACES,
  rA as FOLDER_IMG_PARALLACES,
  iA as FOLDER_IMG_PICTURES,
  SA as FOLDER_IMG_SV_ACTORS,
  mA as FOLDER_IMG_SV_ENEMIES,
  IA as FOLDER_IMG_SYSTEM,
  PA as FOLDER_IMG_TILESETS,
  MA as FOLDER_IMG_TITLES1,
  OA as FOLDER_IMG_TITLES2,
  jE as FORCE_ACTION,
  Ae as GAME_OVER,
  AE as GATHER_FOLLOWERS,
  pE as GET_LOCATION_INFO,
  $o as GET_ONOFF_VEHICLE,
  Wn as HITTYPE_CERTAIN,
  kn as HITTYPE_MAGICAL,
  hn as HITTYPE_PHYSICAL,
  co as INPUT_NUMBER,
  Do as LABEL,
  G as LABELS_COLLAPS,
  Pt as LABELS_EQUIP_WTYPE,
  u as LABELS_EXTRA_PARAM,
  p as LABELS_PARAM_REGULAR,
  F as LABELS_PARAM_SPECIAL,
  B as LABELS_PARTY_ABILITY,
  mt as LABELS_TRAIT_ACTION_PLUS,
  Lt as LABELS_TRAIT_ATTACK_ELEMENT,
  It as LABELS_TRAIT_ATTACK_SKILL,
  it as LABELS_TRAIT_ATTACK_SPEED,
  rt as LABELS_TRAIT_ATTACK_STATE,
  St as LABELS_TRAIT_ATTACK_TIMES,
  st as LABELS_TRAIT_DEBUFF_RATE,
  Rt as LABELS_TRAIT_ELEMENT_RATE,
  Mt as LABELS_TRAIT_EQUIP_ATYPE,
  Ot as LABELS_TRAIT_EQUIP_LOCK,
  Ct as LABELS_TRAIT_EQUIP_SEAL,
  dt as LABELS_TRAIT_SKILL_ADD,
  Dt as LABELS_TRAIT_SKILL_SEAL,
  Ut as LABELS_TRAIT_SKILL_TYPE_ADD,
  ft as LABELS_TRAIT_SKILL_TYPE_SEAL,
  Nt as LABELS_TRAIT_SLOT_TYPE,
  l as LABELS_TRAIT_SPECIALFLAG,
  ct as LABELS_TRAIT_STATE_RATE,
  at as LABELS_TRAIT_STATE_RESIST,
  Uo as LABEL_JUMP,
  AT as LABEL_REGISTRY_JP,
  Mo as LOOP,
  Oo as LOOP_BREAK,
  d as MODULE_DATA,
  D as MODULE_SYSTEM,
  M as MODULE_TRAIT,
  sE as MOVE_PICTURE,
  tT as MockSystemLabelDataTypes,
  GE as NAME_INPUT_PROCESSING,
  Eo as NO_OPERATION,
  JE as OPEN_MENU_SCREEN,
  te as OPEN_SAVE_SCREEN,
  R_ as PARTY_ABILITY_CANCEL_SURPRISE,
  a_ as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  e_ as PARTY_ABILITY_ENCOUNTER_HALF,
  T_ as PARTY_ABILITY_ENCOUNTER_NONE,
  c_ as PARTY_ABILITY_GOLD_DOUBLE,
  s_ as PARTY_ABILITY_RAISE_PREEMPTIVE,
  iE as PLAY_BGM,
  PE as PLAY_BGS,
  OE as PLAY_ME,
  dE as PLAY_MOVIE,
  CE as PLAY_SE,
  Ee as PLUGIN_COMMAND_MV,
  ee as PLUGIN_COMMAND_MZ,
  gE as RECOVER_ALL,
  B_ as REGULAR_PARAM_AGI,
  u_ as REGULAR_PARAM_ATK,
  F_ as REGULAR_PARAM_DEF,
  H_ as REGULAR_PARAM_LUK,
  l_ as REGULAR_PARAM_MATK,
  f_ as REGULAR_PARAM_MAX_HP,
  p_ as REGULAR_PARAM_MAX_MP,
  G_ as REGULAR_PARAM_MDEF,
  IE as RESUME_BGM,
  _e as RETURN_TO_TITLE_SCREEN,
  cE as ROTATE_PICTURE,
  je as ROUTE_CHANGE_BLEND_MODE,
  Ke as ROUTE_CHANGE_FREQ,
  be as ROUTE_CHANGE_IMAGE,
  $e as ROUTE_CHANGE_OPACITY,
  ye as ROUTE_CHANGE_SPEED,
  ke as ROUTE_DIR_FIX_OFF,
  he as ROUTE_DIR_FIX_ON,
  Te as ROUTE_END,
  Ce as ROUTE_JUMP,
  Pe as ROUTE_MOVE_AWAY,
  Oe as ROUTE_MOVE_BACKWARD,
  Re as ROUTE_MOVE_DOWN,
  Me as ROUTE_MOVE_FORWARD,
  se as ROUTE_MOVE_LEFT,
  Le as ROUTE_MOVE_LOWER_L,
  re as ROUTE_MOVE_LOWER_R,
  me as ROUTE_MOVE_RANDOM,
  ce as ROUTE_MOVE_RIGHT,
  Ie as ROUTE_MOVE_TOWARD,
  ae as ROUTE_MOVE_UP,
  ie as ROUTE_MOVE_UPPER_L,
  Se as ROUTE_MOVE_UPPER_R,
  ze as ROUTE_PLAY_SE,
  Je as ROUTE_SCRIPT,
  We as ROUTE_STEP_ANIME_OFF,
  Xe as ROUTE_STEP_ANIME_ON,
  ge as ROUTE_SWITCH_OFF,
  Ye as ROUTE_SWITCH_ON,
  xe as ROUTE_THROUGH_OFF,
  we as ROUTE_THROUGH_ON,
  qe as ROUTE_TRANSPARENT_OFF,
  Qe as ROUTE_TRANSPARENT_ON,
  Fe as ROUTE_TURN_180D,
  ue as ROUTE_TURN_90D_L,
  pe as ROUTE_TURN_90D_R,
  le as ROUTE_TURN_90D_R_L,
  He as ROUTE_TURN_AWAY,
  de as ROUTE_TURN_DOWN,
  De as ROUTE_TURN_LEFT,
  Ge as ROUTE_TURN_RANDOM,
  Ue as ROUTE_TURN_RIGHT,
  Be as ROUTE_TURN_TOWARD,
  fe as ROUTE_TURN_UP,
  Ne as ROUTE_WAIT,
  ve as ROUTE_WALK_ANIME_OFF,
  Ve as ROUTE_WALK_ANIME_ON,
  mE as SAVE_BGM,
  ne as SCRIPT_EVAL,
  oe as SCRIPT_EVAL_BODY,
  qo as SCROLL_MAP,
  ao as SELECT_ITEM,
  Qo as SET_EVENT_LOCATION,
  bo as SET_MOVEMENT_ROUTE,
  xo as SET_VEHICLE_LOCATION,
  rE as SET_WEATHER_EFFECT,
  eE as SHAKE_SCREEN,
  FE as SHOP_PROCESSING,
  lE as SHOP_PROCESSING_BODY,
  zo as SHOW_ANIMATION,
  Jo as SHOW_BALLOON_ICON,
  $E as SHOW_BATTLE_ANIMATION,
  Ro as SHOW_CHOICES,
  so as SHOW_CHOICES_ITEM,
  eo as SHOW_MESSAGE,
  To as SHOW_MESSAGE_BODY,
  RE as SHOW_PICTURE,
  Lo as SHOW_SCROLLING_TEXT,
  ro as SHOW_SCROLLING_TEXT_BODY,
  mo as SKIP,
  wn as SPECIAL_EFFECT_ESCAPE,
  k_ as SPECIAL_PARAM_EXR,
  h_ as SPECIAL_PARAM_FDR,
  g_ as SPECIAL_PARAM_GRD,
  V_ as SPECIAL_PARAM_MCR,
  W_ as SPECIAL_PARAM_MDR,
  X_ as SPECIAL_PARAM_PDR,
  K_ as SPECIAL_PARAM_PHA,
  y_ as SPECIAL_PARAM_REC,
  v_ as SPECIAL_PARAM_TCR,
  Y_ as SPECIAL_PARAM_TGR,
  lt as SRC_ARMOR_TYPES,
  cn as SRC_COLOR,
  ut as SRC_COMMON_EVNET,
  An as SRC_DATA_ACTOR,
  Tn as SRC_DATA_ARMOR,
  Rn as SRC_DATA_CLASS,
  on as SRC_DATA_ENEMY,
  En as SRC_DATA_ITEMS,
  nn as SRC_DATA_MAP,
  V as SRC_DATA_SKILL,
  S as SRC_DATA_STATE,
  _n as SRC_DATA_VARIABLE,
  en as SRC_DATA_WEAPON,
  Gt as SRC_ELEMENTS,
  an as SRC_EQUIP_TYPES,
  Y as SRC_PARAMS_EXTRA,
  L as SRC_PARAMS_REGULAR,
  g as SRC_PARAMS_SPECIAL,
  rn as SRC_SKILL_TYPES,
  Ln as SRC_SWITCHES,
  y as SRC_TRAIT_COLLAPS,
  K as SRC_TRAIT_PARTY_ABILITY,
  pt as SRC_TRAIT_SPECIAL_FLAG,
  sn as SRC_TROOP,
  Ft as SRC_WEAPON_TYPES,
  NE as STOP_SE,
  aE as TINT_PICTURE,
  oE as TINT_SCREEN,
  JA as TRAIT_ACTION_PLUS,
  VA as TRAIT_ATTACK_ELEMENT,
  hA as TRAIT_ATTACK_SKILL,
  XA as TRAIT_ATTACK_SPEED,
  vA as TRAIT_ATTACK_STATE,
  WA as TRAIT_ATTACK_TIMES,
  t_ as TRAIT_COLLAPSE_TYPE,
  BA as TRAIT_DEBUFF_RATE,
  GA as TRAIT_ELEMENT_RATE,
  bA as TRAIT_EQUIP_ARMOR_TYPE,
  $A as TRAIT_EQUIP_LOCK,
  jA as TRAIT_EQUIP_SEAL,
  qA as TRAIT_EQUIP_WEAPON_TYPE,
  gA as TRAIT_PARAM,
  A_ as TRAIT_PARTY_ABILITY,
  xA as TRAIT_SKILL_ADD,
  QA as TRAIT_SKILL_SEAL,
  kA as TRAIT_SKILL_TYPE_ADD,
  wA as TRAIT_SKILL_TYPE_SEAL,
  zA as TRAIT_SLOT_TYPE,
  KA as TRAIT_SPARAM,
  ZA as TRAIT_SPECIAL_FLAG,
  HA as TRAIT_STATE_RATE,
  YA as TRAIT_STATE_RESIST,
  yA as TRAIT_XPARAM,
  wo as TRANSFER_PLAYER,
  TE as WAIT,
  q_ as buildCollapsSource,
  j_ as buildExtraParamSource,
  b_ as buildPartyAbilitySource,
  $_ as buildRegularParamSource,
  z_ as buildSpecialParamSource,
  E as defineEffect,
  Zn as defineEffectAddBuff,
  _o as defineEffectAddDebuff,
  zn as defineEffectAddState,
  oo as defineEffectCommonEvent,
  $n as defineEffectGainTp,
  jn as defineEffectGrow,
  Ao as defineEffectLearnSkill,
  qn as defineEffectRecoverHp,
  bn as defineEffectRecoverMp,
  to as defineEffectRemoveBuff,
  no as defineEffectRemoveDebuff,
  Jn as defineEffectRemoveState,
  un as defineTraitActionPlus,
  dn as defineTraitAttackElement,
  pn as defineTraitAttackSkill,
  Un as defineTraitAttackSpeed,
  Dn as defineTraitAttackState,
  fn as defineTraitAttackTimes,
  ln as defineTraitCollapseType,
  In as defineTraitDebuffRate,
  mn as defineTraitElementRate,
  Hn as defineTraitEquipArmorType,
  Yn as defineTraitEquipLock,
  gn as defineTraitEquipSeal,
  Bn as defineTraitEquipWeaponType,
  Cn as defineTraitExtraParam,
  Gn as defineTraitPartyAbility,
  On as defineTraitRegularParam,
  vn as defineTraitSTypeAdd,
  Xn as defineTraitSTypeSeal,
  yn as defineTraitSkillAdd,
  Kn as defineTraitSkillSeal,
  Vn as defineTraitSlotType,
  Fn as defineTraitSpecialFlag,
  Nn as defineTraitSpecialParam,
  Pn as defineTraitStateRate,
  Mn as defineTraitStateResist,
  x_ as extraParamName,
  nt as foldCollapsOptions,
  et as foldExtraParam,
  ot as foldPartyAbilityOptions,
  Et as foldRegularParam,
  Tt as foldSpecialParams,
  Qn as formatItemEffectText,
  Sn as formatTraitText,
  FA as getArmorTypes,
  UA as getElementTypes,
  fA as getEquipTypes,
  lA as getParamNames,
  pA as getSkillTypes,
  DA as getVariableNames,
  uA as getWeaponTypes,
  tn as isValid,
  Z_ as joinSourceKey,
  NA as mergeDomainLabel,
  dA as mergeNestedPrimitiveRecords,
  N as mergeWithDefaults,
  w_ as regularParamName,
  J_ as sanitizeKey,
  Q_ as specialParamName,
  P as testUnknonwKey,
  a as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
