const ht = "bgm", kt = "se", wt = "me", xt = "bgs", Qt = "battlebacks1", bt = "battlebacks2", qt = "characters", $t = "enemies", jt = "faces", zt = "parallaxes", Jt = "pictures", Zt = "sv_actors", tA = "sv_enemies", AA = "system", _A = "tilesets", EA = "titles1", nA = "titles2", oA = "System.json", I = (t, A) => {
  const n = { ...t };
  for (const e in t) {
    const L = A[e];
    typeof L == "string" && (n[e] = L);
  }
  return n;
}, eA = (t, A) => ({
  domainName: A.domainName ?? t.domainName,
  options: I(t.options, A.options ?? {})
}), TA = (t, A) => {
  const n = {};
  for (const e in t) {
    const L = t[e], v = A[e] ?? {};
    n[e] = I(
      L,
      v
    );
  }
  return n;
}, T = (t, A) => ({
  name: t,
  id: A
}), RA = (t) => t.variables.map(T), sA = (t) => t.elements.map(T), aA = (t) => t.equipTypes.map(T), cA = (t) => t.skillTypes.map(T), LA = (t) => t.weaponTypes.map(T), rA = (t) => t.armorTypes.map(T), SA = (t) => t.terms.params.map(T), s = "rmmz", P = "trait", X = "data", M = "system", iA = 11, mA = 12, IA = 13, PA = 14, MA = 21, OA = 22, CA = 23, NA = 31, dA = 32, DA = 33, UA = 34, pA = 35, FA = 41, uA = 42, GA = 43, lA = 44, BA = 51, fA = 52, HA = 53, YA = 54, gA = 55, yA = 61, VA = 62, KA = 63, vA = 64, XA = 0, WA = 1, hA = 2, kA = 3, wA = 0, xA = 1, QA = 2, bA = 3, qA = 4, $A = 5, jA = 0, zA = 1, JA = 2, ZA = 3, t_ = 0, A_ = 1, __ = 2, E_ = 3, n_ = 4, o_ = 5, e_ = 6, T_ = 7, R_ = 8, s_ = 9, a_ = 0, c_ = 1, L_ = 2, r_ = 3, S_ = 4, i_ = 5, m_ = 6, I_ = 7, P_ = 0, M_ = 1, O_ = 2, C_ = 3, N_ = 4, d_ = 5, D_ = 6, U_ = 7, p_ = 8, F_ = 9, u_ = (t, A) => {
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
}, G_ = (t, A) => {
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
}, l_ = (t, A) => {
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
}, W = (t, A) => [
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
], h = (t) => [
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
], k = (t) => [
  { id: 0, name: t.maxHp },
  { id: 1, name: t.maxMp },
  { id: 2, name: t.atk },
  { id: 3, name: t.def },
  { id: 4, name: t.matk },
  { id: 5, name: t.mdef },
  { id: 6, name: t.agi },
  { id: 7, name: t.luk }
], w = (t) => [
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
], x = (t) => [
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
    module: P,
    sourceKey: t
  }
}), B_ = (t, A) => a(
  B,
  t,
  (n) => W(n, A)
), f_ = (t) => a(f, t, h), H_ = (t) => a(r, t, k), Y_ = (t) => a(G, t, w), g_ = (t) => a(l, t, x), E = "{name}", R = "{name} * {value}%", O = "{name} + {value}%", C = "{value}", Q = {
  domainName: "属性有効度",
  format: R
}, b = {
  domainName: "弱体有効度",
  format: R
}, q = {
  domainName: "ステート有効度",
  format: R
}, $ = {
  domainName: "ステート無効",
  format: E
}, N = {
  domainName: "基本能力値",
  format: R,
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
}, d = {
  domainName: "追加能力値",
  format: O,
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
}, D = {
  domainName: "特殊能力値",
  format: R,
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
}, j = {
  domainName: "攻撃属性",
  format: E
}, z = {
  domainName: "攻撃ステート",
  format: O
}, J = {
  domainName: "攻撃速度補正",
  format: C
}, Z = {
  domainName: "攻撃追加回数",
  format: C
}, tt = {
  domainName: "行動追加",
  format: R
}, At = {
  domainName: "攻撃スキル",
  format: E
}, _t = {
  domainName: "装備武器タイプ",
  format: E
}, Et = {
  domainName: "装備防具タイプ",
  format: E
}, nt = {
  domainName: "装備固定",
  format: E
}, ot = {
  domainName: "装備封印",
  format: E
}, et = {
  domainName: "スロットタイプ",
  format: E
}, Tt = {
  domainName: "スキル追加",
  format: E
}, Rt = {
  domainName: "スキル封印",
  format: E
}, st = {
  domainName: "スキルタイプ追加",
  format: E
}, at = {
  domainName: "スキルタイプ封印",
  format: E
}, U = {
  domainName: "特殊フラグ",
  format: E,
  options: {
    autoBattle: "自動戦闘",
    guard: "防御",
    substitute: "身代わり",
    preventEscape: "逃走防止"
  }
}, p = {
  domainName: "消滅エフェクト",
  format: E,
  options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  }
}, F = {
  domainName: "パーティ能力",
  format: E,
  options: {
    cancelSurprise: "不意打ち無効",
    dropItemDouble: "アイテムドロップ2倍",
    encounterHalf: "エンカウント半減",
    encounterNone: "エンカウントなし",
    goldDouble: "ゴールド2倍",
    raisePreemptive: "先制攻撃率アップ"
  }
}, u = /^[a-zA-Z0-9]+$/, y_ = (t) => u.test(t) ? t : void 0, S = (t) => typeof t == "string" ? u.test(t) : !1, V_ = (t) => [t.author, t.module, t.sourceKey].join("."), K_ = (t) => S(t.author) && S(t.module) && S(t.sourceKey), r = "params", G = "xparams", l = "sparams", B = "collaps", f = "partyAbiility", ct = "sflag", v_ = "actors", X_ = "variables", W_ = "map", h_ = "enemy", H = "state", Lt = "skill", k_ = "items", w_ = "weapon", x_ = "armor", Q_ = "class", b_ = "common_event", q_ = "troop", $_ = "colors", rt = "weaponTypes", St = "armorTypes", j_ = "equipTypes", z_ = "switches", J_ = "skillTypes", it = "elements", Z_ = (t, A, n) => t.format.replaceAll("{value}", A.value.toString()).replaceAll("{name}", n), m = (t, A) => typeof A == "string" ? A : t, _ = (t, A, n, e) => ({
  codeId: t,
  label: m(A.domainName, n.domainName),
  format: m(A.format, n.format),
  dataSource: e
}), Y = () => ({
  module: M,
  author: s,
  sourceKey: it
}), g = (t) => ({
  module: X,
  author: s,
  sourceKey: t
}), o = (t) => ({
  author: s,
  module: P,
  sourceKey: t
}), y = (t) => ({
  author: s,
  module: M,
  sourceKey: t
}), tE = (t) => _(
  11,
  Q,
  t,
  Y()
), AE = (t) => _(
  12,
  b,
  t,
  o(r)
), _E = (t) => _(
  13,
  q,
  t,
  o(r)
), EE = (t) => _(
  14,
  $,
  t,
  g(H)
), nE = (t) => _(
  21,
  N,
  t,
  o(r)
), oE = (t) => _(
  22,
  d,
  t,
  o(G)
), eE = (t) => _(
  23,
  D,
  t,
  o(l)
), TE = (t) => _(
  31,
  j,
  t,
  Y()
), RE = (t) => _(
  32,
  z,
  t,
  o(H)
), sE = (t) => _(33, J, t), aE = (t) => _(34, Z, t), cE = (t) => _(
  35,
  At,
  t,
  g(Lt)
), LE = (t) => _(61, tt, t), rE = (t) => _(
  62,
  U,
  t,
  o(ct)
), SE = (t) => _(
  63,
  p,
  t,
  o(B)
), iE = (t) => _(
  64,
  F,
  t,
  o(f)
), mE = (t) => _(
  51,
  _t,
  t,
  y(rt)
), IE = (t) => _(
  52,
  Et,
  t,
  y(St)
), PE = (t) => _(53, nt, t), ME = (t) => _(54, ot, t), OE = (t) => _(43, Tt, t), CE = (t) => _(44, Rt, t), NE = (t) => _(55, et, t), dE = (t) => _(41, st, t), DE = (t) => _(42, at, t), mt = {
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
}, It = {
  domainName: "防具",
  options: {
    armorTypeId: "防具タイプID",
    slotTypeId: "スロットタイプID"
  }
}, Pt = {
  domainName: "職業",
  options: {
    params: "パラメータ",
    learnings: "習得スキル",
    expParams: "経験値パラメータ"
  }
}, Mt = {
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
}, Ot = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Ct = {
  domainName: "敵キャラ",
  options: {
    dropItems: "ドロップアイテム",
    battlerHue: "バトラーヒュー",
    battlerName: "バトラー名",
    gold: "ゴールド"
  }
}, Nt = {
  domainName: "ダメージ",
  options: {}
}, UE = 0, pE = 1, FE = 2, dt = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Dt = "{name} + {value1}", V = "{name} {value1}%", i = "{value1}% + {value2}", K = "{name} {value1}ターン", c = "{name}", Ut = {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: i
}, pt = {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: i
}, Ft = {
  desc: "TPを指定した量だけ増加させます。",
  domainName: "TP増加",
  format: i
}, ut = {
  desc: "指定したステートを付加します。",
  domainName: "ステート付加",
  format: V
}, Gt = {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: V
}, lt = {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: K
}, Bt = {
  desc: "デバフを付与する",
  domainName: "デバフ付与",
  format: K
}, ft = {
  desc: "バフを解除する",
  domainName: "バフ解除",
  format: c
}, Ht = {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: c
}, Yt = {
  desc: "特殊効果",
  domainName: "特殊効果",
  format: c
}, gt = {
  desc: "成長効果",
  domainName: "成長効果",
  format: Dt
}, yt = {
  desc: "スキルを習得する",
  domainName: "スキル習得",
  format: c
}, Vt = {
  desc: "コモンイベントを実行する",
  domainName: "コモンイベント",
  format: c
}, Kt = {
  domainName: "使用効果",
  options: {
    addBuff: lt,
    addDebuff: Bt,
    gainTp: Ft,
    grow: gt,
    learnSkill: yt,
    recoverHp: Ut,
    recoverMp: pt,
    removeBuff: ft,
    removeDebuff: Ht,
    removeState: Gt,
    special: Yt,
    addState: ut,
    commonEvent: Vt
  }
}, uE = 0, GE = 11, lE = 12, BE = 13, fE = 21, HE = 22, YE = 31, gE = 32, yE = 33, VE = 34, KE = 41, vE = 42, XE = 43, WE = 44, vt = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, Xt = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, hE = 0, kE = 101, wE = 401, xE = 102, QE = 402, bE = 103, qE = 104, $E = 105, jE = 405, zE = 108, JE = 408, ZE = 109, tn = 111, An = 411, _n = 112, En = 113, nn = 115, on = 117, en = 118, Tn = 119, Rn = 121, sn = 122, an = 123, cn = 124, Ln = 125, rn = 126, Sn = 127, mn = 128, In = 129, Pn = 132, Mn = 133, On = 134, Cn = 135, Nn = 136, dn = 137, Dn = 138, Un = 139, pn = 140, Fn = 201, un = 202, Gn = 203, ln = 204, Bn = 205, fn = 206, Hn = 211, Yn = 212, gn = 213, yn = 214, Vn = 216, Kn = 217, vn = 221, Xn = 222, Wn = 223, hn = 224, kn = 225, wn = 230, xn = 231, Qn = 232, bn = 233, qn = 234, $n = 235, jn = 236, zn = 241, Jn = 242, Zn = 243, to = 244, Ao = 245, _o = 246, Eo = 249, no = 250, oo = 251, eo = 261, To = 282, Ro = 283, so = 284, ao = 285, co = 301, Lo = 302, ro = 605, So = 303, io = 311, mo = 312, Io = 313, Po = 314, Mo = 315, Oo = 320, Co = 321, No = 322, Do = 323, Uo = 324, po = 325, Fo = 331, uo = 332, Go = 333, lo = 334, Bo = 335, fo = 336, Ho = 337, Yo = 339, go = 340, yo = 351, Vo = 342, Ko = 352, vo = 353, Xo = 354, Wo = 355, ho = 655, ko = 356, wo = 357, xo = 0, Qo = 1, bo = 2, qo = 3, $o = 4, jo = 5, zo = 6, Jo = 7, Zo = 8, te = 9, Ae = 10, _e = 11, Ee = 12, ne = 13, oe = 14, ee = 15, Te = 16, Re = 17, se = 18, ae = 19, ce = 20, Le = 21, re = 22, Se = 23, ie = 24, me = 25, Ie = 26, Pe = 27, Me = 28, Oe = 29, Ce = 30, Ne = 31, de = 32, De = 33, Ue = 34, pe = 35, Fe = 36, ue = 37, Ge = 38, le = 39, Be = 40, fe = 41, He = 42, Ye = 43, ge = 44, ye = 45, Ve = {
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
}, Ke = {
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
}, Wt = {
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
}, ve = {
  rpg: {
    actor: mt,
    armor: It,
    skill: vt,
    damage: Nt,
    item: dt,
    weapon: Ot,
    enemy: Ct,
    state: Mt,
    paramSpecial: D,
    paramRegular: N,
    paramExtra: d,
    collaps: p,
    specialFlag: U,
    partyAbility: F,
    class: Pt,
    usableItem: Xt,
    itemEffect: Kt
  },
  global: Wt
};
export {
  go as ABORT_BATTLE,
  s as AUTHOR_RMMZ,
  co as BATTLE_PROCESSING,
  No as CHANGE_ACTOR_IMAGES,
  mn as CHANGE_ARMORS,
  Ro as CHANGE_BATTLE_BACKGROUND,
  Pn as CHANGE_BATTLE_BGM,
  Co as CHANGE_CLASS,
  Un as CHANGE_DEFEAT_ME,
  Nn as CHANGE_ENCOUNTER,
  Fo as CHANGE_ENEMY_HP,
  uo as CHANGE_ENEMY_MP,
  Go as CHANGE_ENEMY_STATE,
  Vo as CHANGE_ENEMY_TP,
  Mo as CHANGE_EXP,
  dn as CHANGE_FORMATION_ACCESS,
  Ln as CHANGE_GOLD,
  io as CHANGE_HP,
  rn as CHANGE_ITEMS,
  Cn as CHANGE_MENU_ACCESS,
  mo as CHANGE_MP,
  Oo as CHANGE_NAME,
  Uo as CHANGE_NICKNAME,
  so as CHANGE_PARALLAX,
  In as CHANGE_PARTY_MEMBER,
  Vn as CHANGE_PLAYER_FOLLOWERS,
  po as CHANGE_PROFILE,
  On as CHANGE_SAVE_ACCESS,
  To as CHANGE_TILESET,
  Io as CHANGE_TP,
  Hn as CHANGE_TRANSPARENCY,
  pn as CHANGE_VEHICLE_BGM,
  Do as CHANGE_VEHICLE_IMAGE,
  Mn as CHANGE_VICTORY_ME,
  Sn as CHANGE_WEAPONS,
  Dn as CHANGE_WINDOW_COLOR,
  WA as COLLAPS_BOSS,
  hA as COLLAPS_INSTANT,
  kA as COLLAPS_NONE,
  XA as COLLAPS_NORMAL,
  zE as COMMENT,
  JE as COMMENT_BODY,
  on as COMMON_EVENT,
  tn as CONDITIONAL_BRANCH,
  An as CONDITIONAL_BRANCH_ELSE,
  an as CONTROL_SELF_SWITCH,
  Rn as CONTROL_SWITCHES,
  cn as CONTROL_TIMER,
  sn as CONTROL_VARIABLES,
  mt as DEFAULT_ACTOR_LABELS,
  It as DEFAULT_ARMOR_LABELS,
  Pt as DEFAULT_CLASS_LABELS,
  Nt as DEFAULT_DAMAGE_LABELS,
  Kt as DEFAULT_EFFECT_LABELS_SET,
  Ct as DEFAULT_ENEMY_LABELS,
  Wt as DEFAULT_GLOBAL_LABELS,
  dt as DEFAULT_ITEM_LABELS,
  lt as DEFAULT_LABEL_ADD_BUFF,
  Bt as DEFAULT_LABEL_ADD_DEBUFF,
  ut as DEFAULT_LABEL_ADD_STATE,
  Vt as DEFAULT_LABEL_COMMON_EVENT,
  Ft as DEFAULT_LABEL_GAIN_TP,
  gt as DEFAULT_LABEL_GROW,
  yt as DEFAULT_LABEL_LEARN_SKILL,
  Ut as DEFAULT_LABEL_RECOVER_HP,
  pt as DEFAULT_LABEL_RECOVER_MP,
  ft as DEFAULT_LABEL_REMOVE_BUFF,
  Ht as DEFAULT_LABEL_REMOVE_DEBUFF,
  Gt as DEFAULT_LABEL_REMOVE_STATE,
  Yt as DEFAULT_LABEL_SPECIAL,
  vt as DEFAULT_SKILL_LABELS,
  Mt as DEFAULT_STATE_LABELS,
  Ve as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Xt as DEFAULT_USABLE_ITEM_LABELS,
  Ot as DEFAULT_WEAPON_LABELS,
  YE as EFFECT_ADD_BUFF,
  gE as EFFECT_ADD_DEBUFF,
  fE as EFFECT_ADD_STATE,
  WE as EFFECT_COMMON_EVENT,
  BE as EFFECT_GAIN_TP,
  vE as EFFECT_GROW,
  XE as EFFECT_LEARN_SKILL,
  GE as EFFECT_RECOVER_HP,
  lE as EFFECT_RECOVER_MP,
  yE as EFFECT_REMOVE_BUFF,
  VE as EFFECT_REMOVE_DEBUFF,
  HE as EFFECT_REMOVE_STATE,
  KE as EFFECT_SPECIAL,
  Bo as ENEMY_APPEAR,
  lo as ENEMY_RECOVER_ALL,
  fo as ENEMY_TRANSFORM,
  yn as ERASE_EVENT,
  $n as ERASE_PICTURE,
  nn as EXIT_EVENT_PROCESSING,
  E_ as EXTRA_PARAM_CEV,
  e_ as EXTRA_PARAM_CNT,
  __ as EXTRA_PARAM_CRI,
  A_ as EXTRA_PARAM_EVA,
  t_ as EXTRA_PARAM_HIT,
  T_ as EXTRA_PARAM_HRG,
  n_ as EXTRA_PARAM_MEV,
  o_ as EXTRA_PARAM_MRF,
  R_ as EXTRA_PARAM_MRG,
  s_ as EXTRA_PARAM_TRG,
  Xn as FADEIN_SCREEN,
  Jn as FADEOUT_BGM,
  _o as FADEOUT_BGS,
  vn as FADEOUT_SCREEN,
  oA as FILENAME_SYSTEM,
  jA as FLAG_ID_AUTO_BATTLE,
  zA as FLAG_ID_GUARD,
  ZA as FLAG_ID_PRESERVE_TP,
  JA as FLAG_ID_SUBSTITUTE,
  hn as FLASH_SCREEN,
  ht as FOLDER_AUDIO_BGM,
  xt as FOLDER_AUDIO_BGS,
  wt as FOLDER_AUDIO_ME,
  kt as FOLDER_AUDIO_SE,
  Qt as FOLDER_IMG_BATTLEBACK1,
  bt as FOLDER_IMG_BATTLEBACK2,
  qt as FOLDER_IMG_CHACTERS,
  $t as FOLDER_IMG_ENEMIES,
  jt as FOLDER_IMG_FACES,
  zt as FOLDER_IMG_PARALLACES,
  Jt as FOLDER_IMG_PICTURES,
  Zt as FOLDER_IMG_SV_ACTORS,
  tA as FOLDER_IMG_SV_ENEMIES,
  AA as FOLDER_IMG_SYSTEM,
  _A as FOLDER_IMG_TILESETS,
  EA as FOLDER_IMG_TITLES1,
  nA as FOLDER_IMG_TITLES2,
  Yo as FORCE_ACTION,
  vo as GAME_OVER,
  Kn as GATHER_FOLLOWERS,
  ao as GET_LOCATION_INFO,
  fn as GET_ONOFF_VEHICLE,
  UE as HITTYPE_CERTAIN,
  FE as HITTYPE_MAGICAL,
  pE as HITTYPE_PHYSICAL,
  bE as INPUT_NUMBER,
  en as LABEL,
  p as LABELS_COLLAPS,
  _t as LABELS_EQUIP_WTYPE,
  d as LABELS_EXTRA_PARAM,
  N as LABELS_PARAM_REGULAR,
  D as LABELS_PARAM_SPECIAL,
  F as LABELS_PARTY_ABILITY,
  tt as LABELS_TRAIT_ACTION_PLUS,
  j as LABELS_TRAIT_ATTACK_ELEMENT,
  At as LABELS_TRAIT_ATTACK_SKILL,
  J as LABELS_TRAIT_ATTACK_SPEED,
  z as LABELS_TRAIT_ATTACK_STATE,
  Z as LABELS_TRAIT_ATTACK_TIMES,
  b as LABELS_TRAIT_DEBUFF_RATE,
  Q as LABELS_TRAIT_ELEMENT_RATE,
  Et as LABELS_TRAIT_EQUIP_ATYPE,
  nt as LABELS_TRAIT_EQUIP_LOCK,
  ot as LABELS_TRAIT_EQUIP_SEAL,
  Tt as LABELS_TRAIT_SKILL_ADD,
  Rt as LABELS_TRAIT_SKILL_SEAL,
  st as LABELS_TRAIT_SKILL_TYPE_ADD,
  at as LABELS_TRAIT_SKILL_TYPE_SEAL,
  et as LABELS_TRAIT_SLOT_TYPE,
  U as LABELS_TRAIT_SPECIALFLAG,
  q as LABELS_TRAIT_STATE_RATE,
  $ as LABELS_TRAIT_STATE_RESIST,
  Tn as LABEL_JUMP,
  ve as LABEL_REGISTRY_JP,
  _n as LOOP,
  En as LOOP_BREAK,
  X as MODULE_DATA,
  M as MODULE_SYSTEM,
  P as MODULE_TRAIT,
  Qn as MOVE_PICTURE,
  Ke as MockSystemLabelDataTypes,
  So as NAME_INPUT_PROCESSING,
  hE as NO_OPERATION,
  yo as OPEN_MENU_SCREEN,
  Ko as OPEN_SAVE_SCREEN,
  QA as PARTY_ABILITY_CANCEL_SURPRISE,
  $A as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  wA as PARTY_ABILITY_ENCOUNTER_HALF,
  xA as PARTY_ABILITY_ENCOUNTER_NONE,
  qA as PARTY_ABILITY_GOLD_DOUBLE,
  bA as PARTY_ABILITY_RAISE_PREEMPTIVE,
  zn as PLAY_BGM,
  Ao as PLAY_BGS,
  Eo as PLAY_ME,
  eo as PLAY_MOVIE,
  no as PLAY_SE,
  ko as PLUGIN_COMMAND_MV,
  wo as PLUGIN_COMMAND_MZ,
  Po as RECOVER_ALL,
  m_ as REGULAR_PARAM_AGI,
  L_ as REGULAR_PARAM_ATK,
  r_ as REGULAR_PARAM_DEF,
  I_ as REGULAR_PARAM_LUK,
  S_ as REGULAR_PARAM_MATK,
  a_ as REGULAR_PARAM_MAX_HP,
  c_ as REGULAR_PARAM_MAX_MP,
  i_ as REGULAR_PARAM_MDEF,
  to as RESUME_BGM,
  Xo as RETURN_TO_TITLE_SCREEN,
  bn as ROTATE_PICTURE,
  Ye as ROUTE_CHANGE_BLEND_MODE,
  Ce as ROUTE_CHANGE_FREQ,
  fe as ROUTE_CHANGE_IMAGE,
  He as ROUTE_CHANGE_OPACITY,
  Oe as ROUTE_CHANGE_SPEED,
  Fe as ROUTE_DIR_FIX_OFF,
  pe as ROUTE_DIR_FIX_ON,
  xo as ROUTE_END,
  oe as ROUTE_JUMP,
  _e as ROUTE_MOVE_AWAY,
  ne as ROUTE_MOVE_BACKWARD,
  Qo as ROUTE_MOVE_DOWN,
  Ee as ROUTE_MOVE_FORWARD,
  bo as ROUTE_MOVE_LEFT,
  jo as ROUTE_MOVE_LOWER_L,
  zo as ROUTE_MOVE_LOWER_R,
  te as ROUTE_MOVE_RANDOM,
  qo as ROUTE_MOVE_RIGHT,
  Ae as ROUTE_MOVE_TOWARD,
  $o as ROUTE_MOVE_UP,
  Jo as ROUTE_MOVE_UPPER_L,
  Zo as ROUTE_MOVE_UPPER_R,
  ge as ROUTE_PLAY_SE,
  ye as ROUTE_SCRIPT,
  Ue as ROUTE_STEP_ANIME_OFF,
  De as ROUTE_STEP_ANIME_ON,
  Me as ROUTE_SWITCH_OFF,
  Pe as ROUTE_SWITCH_ON,
  Ge as ROUTE_THROUGH_OFF,
  ue as ROUTE_THROUGH_ON,
  Be as ROUTE_TRANSPARENT_OFF,
  le as ROUTE_TRANSPARENT_ON,
  re as ROUTE_TURN_180D,
  Le as ROUTE_TURN_90D_L,
  ce as ROUTE_TURN_90D_R,
  Se as ROUTE_TURN_90D_R_L,
  Ie as ROUTE_TURN_AWAY,
  Te as ROUTE_TURN_DOWN,
  Re as ROUTE_TURN_LEFT,
  ie as ROUTE_TURN_RANDOM,
  se as ROUTE_TURN_RIGHT,
  me as ROUTE_TURN_TOWARD,
  ae as ROUTE_TURN_UP,
  ee as ROUTE_WAIT,
  de as ROUTE_WALK_ANIME_OFF,
  Ne as ROUTE_WALK_ANIME_ON,
  Zn as SAVE_BGM,
  Wo as SCRIPT_EVAL,
  ho as SCRIPT_EVAL_BODY,
  ln as SCROLL_MAP,
  qE as SELECT_ITEM,
  Gn as SET_EVENT_LOCATION,
  Bn as SET_MOVEMENT_ROUTE,
  un as SET_VEHICLE_LOCATION,
  jn as SET_WEATHER_EFFECT,
  kn as SHAKE_SCREEN,
  Lo as SHOP_PROCESSING,
  ro as SHOP_PROCESSING_BODY,
  Yn as SHOW_ANIMATION,
  gn as SHOW_BALLOON_ICON,
  Ho as SHOW_BATTLE_ANIMATION,
  xE as SHOW_CHOICES,
  QE as SHOW_CHOICES_ITEM,
  kE as SHOW_MESSAGE,
  wE as SHOW_MESSAGE_BODY,
  xn as SHOW_PICTURE,
  $E as SHOW_SCROLLING_TEXT,
  jE as SHOW_SCROLLING_TEXT_BODY,
  ZE as SKIP,
  uE as SPECIAL_EFFECT_ESCAPE,
  F_ as SPECIAL_PARAM_EXR,
  p_ as SPECIAL_PARAM_FDR,
  M_ as SPECIAL_PARAM_GRD,
  N_ as SPECIAL_PARAM_MCR,
  U_ as SPECIAL_PARAM_MDR,
  D_ as SPECIAL_PARAM_PDR,
  C_ as SPECIAL_PARAM_PHA,
  O_ as SPECIAL_PARAM_REC,
  d_ as SPECIAL_PARAM_TCR,
  P_ as SPECIAL_PARAM_TGR,
  St as SRC_ARMOR_TYPES,
  $_ as SRC_COLOR,
  b_ as SRC_COMMON_EVNET,
  v_ as SRC_DATA_ACTOR,
  x_ as SRC_DATA_ARMOR,
  Q_ as SRC_DATA_CLASS,
  h_ as SRC_DATA_ENEMY,
  k_ as SRC_DATA_ITEMS,
  W_ as SRC_DATA_MAP,
  Lt as SRC_DATA_SKILL,
  H as SRC_DATA_STATE,
  X_ as SRC_DATA_VARIABLE,
  w_ as SRC_DATA_WEAPON,
  it as SRC_ELEMENTS,
  j_ as SRC_EQUIP_TYPES,
  G as SRC_PARAMS_EXTRA,
  r as SRC_PARAMS_REGULAR,
  l as SRC_PARAMS_SPECIAL,
  J_ as SRC_SKILL_TYPES,
  z_ as SRC_SWITCHES,
  B as SRC_TRAIT_COLLAPS,
  f as SRC_TRAIT_PARTY_ABILITY,
  ct as SRC_TRAIT_SPECIAL_FLAG,
  q_ as SRC_TROOP,
  rt as SRC_WEAPON_TYPES,
  oo as STOP_SE,
  qn as TINT_PICTURE,
  Wn as TINT_SCREEN,
  yA as TRAIT_ACTION_PLUS,
  NA as TRAIT_ATTACK_ELEMENT,
  pA as TRAIT_ATTACK_SKILL,
  DA as TRAIT_ATTACK_SPEED,
  dA as TRAIT_ATTACK_STATE,
  UA as TRAIT_ATTACK_TIMES,
  KA as TRAIT_COLLAPSE_TYPE,
  mA as TRAIT_DEBUFF_RATE,
  iA as TRAIT_ELEMENT_RATE,
  fA as TRAIT_EQUIP_ARMOR_TYPE,
  HA as TRAIT_EQUIP_LOCK,
  YA as TRAIT_EQUIP_SEAL,
  BA as TRAIT_EQUIP_WEAPON_TYPE,
  MA as TRAIT_PARAM,
  vA as TRAIT_PARTY_ABILITY,
  GA as TRAIT_SKILL_ADD,
  lA as TRAIT_SKILL_SEAL,
  FA as TRAIT_SKILL_TYPE_ADD,
  uA as TRAIT_SKILL_TYPE_SEAL,
  gA as TRAIT_SLOT_TYPE,
  CA as TRAIT_SPARAM,
  VA as TRAIT_SPECIAL_FLAG,
  IA as TRAIT_STATE_RATE,
  PA as TRAIT_STATE_RESIST,
  OA as TRAIT_XPARAM,
  Fn as TRANSFER_PLAYER,
  wn as WAIT,
  B_ as buildCollapsSource,
  Y_ as buildExtraParamSource,
  f_ as buildPartyAbilitySource,
  H_ as buildRegularParamSource,
  g_ as buildSpecialParamSource,
  LE as defineTraitActionPlus,
  TE as defineTraitAttackElement,
  cE as defineTraitAttackSkill,
  sE as defineTraitAttackSpeed,
  RE as defineTraitAttackState,
  aE as defineTraitAttackTimes,
  SE as defineTraitCollapseType,
  AE as defineTraitDebuffRate,
  tE as defineTraitElementRate,
  IE as defineTraitEquipArmorType,
  PE as defineTraitEquipLock,
  ME as defineTraitEquipSeal,
  mE as defineTraitEquipWeaponType,
  oE as defineTraitExtraParam,
  iE as defineTraitPartyAbility,
  nE as defineTraitRegularParam,
  dE as defineTraitSTypeAdd,
  DE as defineTraitSTypeSeal,
  OE as defineTraitSkillAdd,
  CE as defineTraitSkillSeal,
  NE as defineTraitSlotType,
  rE as defineTraitSpecialFlag,
  eE as defineTraitSpecialParam,
  _E as defineTraitStateRate,
  EE as defineTraitStateResist,
  G_ as extraParamName,
  W as foldCollapsOptions,
  w as foldExtraParam,
  h as foldPartyAbilityOptions,
  k as foldRegularParam,
  x as foldSpecialParams,
  Z_ as formatTraitText,
  rA as getArmorTypes,
  sA as getElementTypes,
  aA as getEquipTypes,
  SA as getParamNames,
  cA as getSkillTypes,
  RA as getVariableNames,
  LA as getWeaponTypes,
  K_ as isValid,
  V_ as joinSourceKey,
  eA as mergeDomainLabel,
  TA as mergeNestedPrimitiveRecords,
  I as mergeWithDefaults,
  u_ as regularParamName,
  y_ as sanitizeKey,
  l_ as specialParamName,
  S as testUnknonwKey,
  a as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
