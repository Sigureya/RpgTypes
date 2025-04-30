const Ae = "bgm", ce = "se", _e = "me", Ee = "bgs", ie = "battlebacks1", Re = "battlebacks2", Te = "characters", re = "enemies", me = "faces", de = "parallaxes", Se = "pictures", pe = "sv_actors", Ie = "sv_enemies", Pe = "system", Le = "tilesets", Me = "titles1", Ce = "titles2", Oe = "System.json", H = (t, e) => {
  const o = { ...t };
  for (const n in t) {
    const _ = e[n];
    typeof _ == "string" && (o[n] = _);
  }
  return o;
}, ue = (t, e) => ({
  domainName: e.domainName ?? t.domainName,
  options: H(t.options, e.options ?? {})
}), Ne = (t, e) => {
  const o = {};
  for (const n in t) {
    const _ = t[n], R = e[n] ?? {};
    o[n] = H(
      _,
      R
    );
  }
  return o;
}, T = (t, e) => ({
  name: t,
  id: e
}), le = (t) => t.variables.map(T), fe = (t) => t.elements.map(T), De = (t) => t.equipTypes.map(T), Ue = (t) => t.skillTypes.map(T), Ge = (t) => t.weaponTypes.map(T), Fe = (t) => t.armorTypes.map(T), ge = (t) => t.terms.params.map(T), r = "rmmz", O = "trait", B = "data", v = "system", ye = 11, He = 12, Be = 13, ve = 14, he = 21, Ye = 22, ke = 23, Ve = 31, We = 32, Xe = 33, Ke = 34, qe = 35, xe = 41, we = 42, Qe = 43, $e = 44, je = 51, ze = 52, Je = 53, Ze = 54, be = 55, to = 61, eo = 62, oo = 63, no = 64, ao = 0, so = 1, Ao = 2, co = 3, _o = 0, Eo = 1, io = 2, Ro = 3, To = 4, ro = 5, mo = 0, So = 1, po = 2, Io = 3, Po = 0, Lo = 1, Mo = 2, Co = 3, Oo = 4, uo = 5, No = 6, lo = 7, fo = 8, Do = 9, Uo = 0, Go = 1, Fo = 2, go = 3, yo = 4, Ho = 5, Bo = 6, vo = 7, ho = 0, Yo = 1, ko = 2, Vo = 3, Wo = 4, Xo = 5, Ko = 6, qo = 7, xo = 8, wo = 9, Qo = (t, e) => {
  switch (t) {
    case 0:
      return e.maxHp;
    case 1:
      return e.maxMp;
    case 2:
      return e.atk;
    case 3:
      return e.def;
    case 4:
      return e.matk;
    case 5:
      return e.mdef;
    case 6:
      return e.agi;
    case 7:
      return e.luk;
    default:
      return `?rparams[${t}]`;
  }
}, $o = (t, e) => {
  switch (t) {
    case 3:
      return e.criticalEvasionRate;
    case 1:
      return e.evasionRate;
    case 6:
      return e.counterAttackRate;
    case 2:
      return e.criticalRate;
    case 0:
      return e.hitRate;
    case 7:
      return e.hpRegenerationRate;
    case 4:
      return e.magicEvasionRate;
    case 5:
      return e.magicReflectionRate;
    case 8:
      return e.mpRegenerationRate;
    case 9:
      return e.tpRegenerationRate;
  }
  return `?xparams[${t}]`;
}, jo = (t, e) => {
  switch (t) {
    case 9:
      return e.experienceRate;
    case 0:
      return e.targetRate;
    case 8:
      return e.floorDamageRate;
    case 1:
      return e.guradEffectRate;
    case 4:
      return e.mpCostRate;
    case 5:
      return e.tpChargeRate;
    case 6:
      return e.physicalDamageRate;
    case 7:
      return e.magicDamageRate;
    case 3:
      return e.pharmacology;
    case 2:
      return e.recoveryEffectRate;
  }
  return `?sparams[${t}]`;
}, j = (t, e) => [
  {
    id: 0,
    name: e.normal
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
], z = (t) => [
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
], J = (t) => [
  { id: 0, name: t.maxHp },
  { id: 1, name: t.maxMp },
  { id: 2, name: t.atk },
  { id: 3, name: t.def },
  { id: 4, name: t.matk },
  { id: 5, name: t.mdef },
  { id: 6, name: t.agi },
  { id: 7, name: t.luk }
], Z = (t) => [
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
], b = (t) => [
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
], tt = (t) => [
  {
    id: 0,
    name: t.autoBattle
  },
  {
    id: 1,
    name: t.guard
  },
  {
    id: 2,
    name: t.substitute
  },
  {
    id: 3,
    name: t.preventEscape
  }
], d = (t, e, o) => ({
  items: o(e.options),
  label: e.domainName,
  source: {
    author: r,
    module: O,
    kind: t
  }
}), zo = (t, e) => d(
  V,
  t,
  (o) => j(o, e)
), Jo = (t) => d(W, t, z), Zo = (t) => d(p, t, J), bo = (t) => d(Y, t, Z), tn = (t) => d(k, t, b), en = (t) => d(X, t, tt), A = "{name}", m = "{name} * {value}%", u = "{name} + {value}%", N = "{value}", a = {
  domainName: "特徴",
  options: {
    regularParam: {
      domainName: "基本能力値",
      format: m,
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
    },
    extraParam: {
      domainName: "追加能力値",
      format: u,
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
    },
    specialParam: {
      domainName: "特殊能力値",
      format: m,
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
    },
    specialFlag: {
      domainName: "特殊フラグ",
      format: A,
      options: {
        autoBattle: "自動戦闘",
        guard: "防御",
        substitute: "身代わり",
        preventEscape: "逃走防止"
      }
    },
    collaps: {
      domainName: "消滅エフェクト",
      format: A,
      options: {
        bossCollaps: "ボス崩壊",
        instantCollaps: "即時崩壊",
        noneCollaps: "崩壊なし"
      }
    },
    partyAbility: {
      domainName: "パーティ能力",
      format: A,
      options: {
        cancelSurprise: "不意打ち無効",
        dropItemDouble: "アイテムドロップ2倍",
        encounterHalf: "エンカウント半減",
        encounterNone: "エンカウントなし",
        goldDouble: "ゴールド2倍",
        raisePreemptive: "先制攻撃率アップ"
      }
    },
    elementRate: {
      domainName: "属性有効度",
      format: m
    },
    debuffRate: {
      domainName: "弱体有効度",
      format: m
    },
    stateRate: {
      domainName: "ステート有効度",
      format: m
    },
    stateResist: {
      domainName: "ステート無効",
      format: A
    },
    attackElement: {
      domainName: "攻撃属性",
      format: A
    },
    attackState: {
      domainName: "攻撃ステート",
      format: u
    },
    attackSpeed: {
      domainName: "攻撃速度補正",
      format: N
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: N
    },
    actionPlus: {
      domainName: "行動追加",
      format: m
    },
    attackSkill: {
      domainName: "攻撃スキル",
      format: A
    },
    equipWeaponType: {
      domainName: "装備武器タイプ",
      format: A
    },
    equipArmorType: {
      domainName: "装備防具タイプ",
      format: A
    },
    equipLock: {
      domainName: "装備固定",
      format: A
    },
    equipSeal: {
      domainName: "装備封印",
      format: A
    },
    slotType: {
      domainName: "スロットタイプ",
      format: A
    },
    skillAdd: {
      domainName: "スキル追加",
      format: A
    },
    skillSeal: {
      domainName: "スキルタイプ封印",
      format: A
    },
    skillTypeAdd: {
      domainName: "スキルタイプ追加",
      format: A
    },
    skillTypeSeal: {
      domainName: "スキルタイプ封印",
      format: A
    }
  }
}, h = /^[a-zA-Z0-9]+$/, on = (t) => h.test(t) ? t : void 0, M = (t) => typeof t == "string" ? h.test(t) : !1, nn = (t) => [t.author, t.module, t.kind].join("."), an = (t) => M(t.author) && M(t.module) && M(t.kind), p = "params", Y = "xparams", k = "sparams", V = "collaps", W = "partyAbiility", X = "sflag", sn = "actors", An = "variables", cn = "map", _n = "enemy", I = "state", K = "skill", En = "items", Rn = "weapon", Tn = "armor", rn = "class", et = "common_event", mn = "troop", dn = "colors", ot = "weaponTypes", nt = "armorTypes", Sn = "equipTypes", pn = "switches", In = "skillTypes", at = "elements", l = "{value}", f = "{name}";
class st {
  constructor(e, o, n, _) {
    this.code = e, this.label = o, this.format = n, this.dataSource = _;
  }
  match(e) {
    return this.code === e.code;
  }
  testTraitCode(e) {
    this.match(e);
  }
  formatText(e, o) {
    this.testTraitCode(e);
    const n = this.format.replaceAll(
      l,
      e.value.toString()
    );
    return this.dataSource ? n.replaceAll(
      f,
      o(this.dataSource, e.dataId)
    ) : n;
  }
  requiresValue() {
    return this.format.includes(l);
  }
  requiresName() {
    return this.format.includes(f);
  }
  invalidPlaceHolder() {
    const e = ["value", "name"];
    return [
      ...this.format.matchAll(/\{([^}]+)\}/g)
    ].map((n) => n[1]).filter((n) => !e.includes(n));
  }
  isFormatValidForDataSource() {
    return !(this.dataSource && !this.requiresName());
  }
  diagnose() {
    const e = !this.isFormatValidForDataSource(), o = this.requiresName() && !this.dataSource, n = this.invalidPlaceHolder();
    return {
      code: this.code,
      label: this.label,
      format: this.format,
      hasError: e || o || n.length > 0,
      missingDataSourceError: e,
      sourceMismatchError: o,
      invalidPlaceHolders: n
    };
  }
}
const Pn = (t) => [
  At(t.elementRate),
  ct(t.debuffRate),
  _t(t.stateRate),
  Et(t.stateResist),
  it(t.regularParam),
  Rt(t.extraParam),
  Tt(t.specialParam),
  rt(t.attackElement),
  mt(t.attackState),
  dt(t.attackSpeed),
  St(t.attackTimes),
  pt(t.attackSkill),
  Ut(t.skillTypeAdd),
  Gt(t.skillTypeSeal),
  lt(t.skillAdd),
  ft(t.skillSeal),
  Ct(t.equipWeaponType),
  Ot(t.equipArmorType),
  ut(t.equipLock),
  Nt(t.equipSeal),
  Dt(t.slotType),
  It(t.actionPlus),
  Pt(t.specialFlag),
  Lt(t.collaps),
  Mt(t.partyAbility)
], D = (t, e) => typeof e == "string" ? e : t, s = (t, e, o, n) => {
  const _ = D(e.domainName, o.domainName), R = D(e.format, o.format);
  return new st(t, _, R, n);
}, q = () => ({
  module: v,
  author: r,
  kind: at
}), x = (t) => ({
  module: B,
  author: r,
  kind: t
}), i = (t) => ({
  author: r,
  module: O,
  kind: t
}), w = (t) => ({
  author: r,
  module: v,
  kind: t
}), At = (t) => s(
  11,
  a.options.elementRate,
  t,
  q()
), ct = (t) => s(
  12,
  a.options.debuffRate,
  t,
  i(p)
), _t = (t) => s(
  13,
  a.options.stateRate,
  t,
  i(p)
), Et = (t) => s(
  14,
  a.options.stateResist,
  t,
  x(I)
), it = (t) => s(
  21,
  a.options.regularParam,
  t,
  i(p)
), Rt = (t) => s(
  22,
  a.options.extraParam,
  t,
  i(Y)
), Tt = (t) => s(
  23,
  a.options.specialParam,
  t,
  i(k)
), rt = (t) => s(
  31,
  a.options.attackElement,
  t,
  q()
), mt = (t) => s(
  32,
  a.options.attackState,
  t,
  i(I)
), dt = (t) => s(33, a.options.attackSpeed, t), St = (t) => s(34, a.options.attackTimes, t), pt = (t) => s(
  35,
  a.options.attackSkill,
  t,
  x(K)
), It = (t) => s(61, a.options.actionPlus, t), Pt = (t) => s(
  62,
  a.options.specialFlag,
  t,
  i(X)
), Lt = (t) => s(
  63,
  a.options.collaps,
  t,
  i(V)
), Mt = (t) => s(
  64,
  a.options.partyAbility,
  t,
  i(W)
), Ct = (t) => s(
  51,
  a.options.equipWeaponType,
  t,
  w(ot)
), Ot = (t) => s(
  52,
  a.options.equipArmorType,
  t,
  w(nt)
), ut = (t) => s(53, a.options.equipLock, t), Nt = (t) => s(54, a.options.equipSeal, t), lt = (t) => s(43, a.options.skillAdd, t), ft = (t) => s(44, a.options.skillSeal, t), Dt = (t) => s(55, a.options.slotType, t), Ut = (t) => s(
  41,
  a.options.skillTypeAdd,
  t
), Gt = (t) => s(
  42,
  a.options.skillTypeSeal,
  t
), Ln = () => ({
  name: "",
  id: 0,
  profile: "",
  nickname: "",
  initialLevel: 0,
  maxLevel: 0,
  classId: 0,
  battlerName: "",
  characterIndex: 0,
  characterName: "",
  equips: [],
  faceIndex: 0,
  faceName: "",
  traits: [],
  note: ""
}), Mn = (t = {}) => ({
  id: t.id ?? 0,
  name: t.name ?? "",
  iconIndex: t.iconIndex ?? 0,
  description: t.description ?? "",
  traits: t.traits ?? [],
  note: t.note ?? "",
  params: t.params ?? [
    0,
    // maxhp
    0,
    // maxmp
    0,
    // atk
    0,
    // def
    0,
    // mat
    0,
    // mdf
    0,
    // agi
    0
    // luk
  ],
  etypeId: t.etypeId ?? 0,
  price: t.price ?? 0
}), Cn = (t) => ({
  name: t.name ?? "",
  id: t.id ?? 0,
  traits: [],
  note: t.note ?? "",
  params: [
    0,
    // maxhp
    0,
    // maxmp
    0,
    // atk
    0,
    // def
    0,
    // mat
    0,
    // mdf
    0,
    // agi
    0
    // luk
  ],
  learnings: t.learnings ?? [],
  expParams: t.expParams ?? []
}), On = (t = {}) => ({
  name: t.name ?? "",
  id: t.id ?? 0,
  iconIndex: t.iconIndex ?? 0,
  message1: t.message1 ?? "",
  message2: t.message2 ?? "",
  message3: t.message3 ?? "",
  message4: t.message4 ?? "",
  traits: [],
  note: t.note ?? "",
  restriction: t.restriction ?? 0,
  priority: t.priority ?? 0,
  motion: t.motion ?? 0,
  overlay: t.overlay ?? 0,
  removeAtBattleEnd: t.removeAtBattleEnd ?? !1,
  removeByRestriction: t.removeByRestriction ?? !1,
  autoRemovalTiming: t.autoRemovalTiming ?? 0,
  minTurns: t.minTurns ?? 0,
  maxTurns: t.maxTurns ?? 0,
  removeByDamage: t.removeByDamage ?? !1,
  chanceByDamage: t.chanceByDamage ?? 0,
  removeByWalking: t.removeByWalking ?? !1,
  stepsToRemove: t.stepsToRemove ?? 0
}), un = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Ft = (t = {}) => ({
  dataId: t.dataId ?? 0,
  denominator: t.denominator ?? 0,
  kind: t.kind ?? 0
}), Nn = (t) => ({
  conditionParam1: t.conditionParam1 ?? 0,
  conditionParam2: t.conditionParam2 ?? 0,
  conditionType: t.conditionType ?? 0,
  rating: t.rating ?? 0,
  skillId: t.skillId ?? 0
}), ln = (t) => {
  var e;
  return {
    name: t.name ?? "",
    id: t.id ?? 0,
    battlerName: t.battlerName ?? "",
    battlerHue: t.battlerHue ?? 0,
    dropItems: ((e = t.dropItems) == null ? void 0 : e.map(() => Ft())) ?? [],
    exp: t.exp ?? 0,
    gold: t.gold ?? 0,
    traits: [],
    note: t.note ?? "",
    params: [
      0,
      // maxhp
      0,
      // maxmp
      0,
      // atk
      0,
      // def
      0,
      // mat
      0,
      // mdf
      0,
      // agi
      0
      // luk
    ],
    actions: []
  };
}, fn = 0, Dn = 1, Un = 2, Gn = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, gt = "{name} + {value1}", U = "{name} {value1}%", C = "{value1}% + {value2}", G = "{name} {value1}ターン", S = "{name}", c = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: G
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: G
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: C
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: gt
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: S
    },
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: C
    },
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: C
    },
    removeBuff: {
      desc: "バフを解除する",
      domainName: "バフ解除",
      format: S
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: S
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: U
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: S
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: U
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: S
    }
  }
}, Fn = 0, yt = 11, Ht = 12, Bt = 13, vt = 21, ht = 22, Yt = 31, kt = 32, Vt = 33, Wt = 34, gn = 41, Xt = 42, Kt = 43, qt = 44, F = "{value1}", g = "{value2}", y = "{name}";
class xt {
  constructor(e, o, n, _, R) {
    this.codeId = e, this.label = o, this.format = n, this.description = _, this.dataSource = R;
  }
  formatText(e, o) {
    const n = this.format.replaceAll(F, e.value1.toString()).replaceAll(g, e.value2.toString());
    return this.dataSource ? n.replaceAll(
      y,
      o(this.dataSource, e.dataId)
    ) : n;
  }
  requiresValue1() {
    return this.format.includes(F);
  }
  requiresValue2() {
    return this.format.includes(g);
  }
  requiresName() {
    return this.format.includes(y);
  }
  invalidPlaceHolder() {
    const e = ["value1", "value2", "name"];
    return [
      ...this.format.matchAll(/\{([^}]+)\}/g)
    ].map((n) => n[1]).filter((n) => !e.includes(n));
  }
  isFormatValidForDataSource() {
    return !(this.dataSource && !this.requiresName());
  }
}
const yn = (t, e, o) => t.format.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", o), Hn = (t) => [
  wt(t.options.recoverHp),
  Qt(t.options.recoverMp),
  $t(t.options.gainTp),
  jt(t.options.addState),
  zt(t.options.removeState),
  Jt(t.options.addBuff),
  te(t.options.addDebuff),
  Zt(t.options.removeBuff),
  ee(t.options.removeDebuff),
  bt(t.options.learnSkill),
  oe(t.options.commonEvent)
], P = () => ({
  author: r,
  module: O,
  kind: p
}), L = (t) => ({
  author: r,
  module: B,
  kind: t
}), E = (t, e, o, n) => {
  const _ = o.domainName ?? e.domainName, R = o.format ?? e.format, $ = o.desc ?? e.desc;
  return new xt(t, _, R, $, n);
}, wt = (t) => E(
  yt,
  c.options.recoverHp,
  t
), Qt = (t) => E(
  Ht,
  c.options.recoverMp,
  t
), $t = (t) => E(Bt, c.options.gainTp, t), Bn = (t) => E(Xt, c.options.grow, t), jt = (t) => E(
  vt,
  c.options.addState,
  t,
  L(I)
), zt = (t) => E(
  ht,
  c.options.removeState,
  t,
  L(I)
), Jt = (t) => E(
  Yt,
  c.options.addBuff,
  t,
  P()
), Zt = (t) => E(
  Vt,
  c.options.removeBuff,
  t,
  P()
), bt = (t) => E(
  Kt,
  c.options.learnSkill,
  t,
  L(K)
), te = (t) => E(
  kt,
  c.options.addBuff,
  t,
  P()
), ee = (t) => E(
  Wt,
  c.options.removeDebuff,
  t,
  P()
), oe = (t) => E(
  qt,
  c.options.commonEvent,
  t,
  L(et)
), vn = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, hn = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, Yn = (t = {}) => ({
  animationId: t.animationId ?? 0,
  id: t.id ?? 0,
  name: t.name ?? "",
  iconIndex: t.iconIndex ?? 0,
  description: t.description ?? "",
  note: t.note ?? "",
  consumable: t.consumable ?? !1,
  scope: t.scope ?? 0,
  occasion: t.occasion ?? 0,
  speed: t.speed ?? 0,
  successRate: t.successRate ?? 0,
  repeats: t.repeats ?? 0,
  tpGain: t.tpGain ?? 0,
  hitType: t.hitType ?? 0,
  damage: Q(t.damage ?? {}),
  effects: [],
  price: 0
}), kn = (t = {}) => ({
  stypeId: t.stypeId ?? 0,
  requiredWtypeId1: t.requiredWtypeId1 ?? 0,
  requiredWtypeId2: t.requiredWtypeId2 ?? 0,
  animationId: t.animationId ?? 0,
  damage: Q(t.damage ?? {}),
  description: t.description ?? "",
  effects: [],
  hitType: t.hitType ?? 0,
  iconIndex: t.iconIndex ?? 0,
  id: t.id ?? 0,
  message1: t.message1 ?? "",
  message2: t.message2 ?? "",
  messageType: t.messageType ?? 0,
  name: t.name ?? "",
  note: t.note ?? "",
  mpCost: t.mpCost ?? 0,
  occasion: t.occasion ?? 0,
  repeats: t.repeats ?? 0,
  scope: t.scope ?? 0,
  speed: t.speed ?? 0,
  successRate: t.successRate ?? 0,
  tpCost: t.tpCost ?? 0,
  tpGain: t.tpGain ?? 0
}), ne = {
  actor: {
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
  },
  class: {
    domainName: "職業",
    options: {
      params: "パラメータ",
      learnings: "習得スキル",
      expParams: "経験値パラメータ"
    }
  },
  armor: {
    domainName: "防具",
    options: {
      armorTypeId: "防具タイプID",
      slotTypeId: "スロットタイプID"
    }
  },
  enemy: {
    domainName: "敵キャラ",
    options: {
      dropItems: "ドロップアイテム",
      battlerHue: "バトラーヒュー",
      battlerName: "バトラー名",
      gold: "ゴールド"
    }
  },
  item: {
    domainName: "アイテム",
    options: {
      consumable: "消耗品"
    }
  },
  skill: {
    domainName: "スキル",
    options: {
      requiredWeaponTypeId1: "必要武器タイプ1",
      requiredWeaponTypeId2: "必要武器タイプ2",
      mpCost: "MP消費",
      tpCost: "TP消費"
    }
  },
  state: {
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
  },
  weapon: {
    domainName: "武器",
    options: {
      weaponTypeId: "武器タイプID"
    }
  },
  usableItem: {
    domainName: "",
    options: {
      scope: "範囲",
      speed: "速度補正",
      successRate: "成功率"
    }
  }
}, ae = {
  domainName: "ダメージ",
  options: {}
}, Q = (t = {}) => ({
  type: t.type ?? 0,
  elementId: t.elementId ?? 0,
  formula: t.formula ?? "",
  variance: t.variance ?? 0,
  critical: t.critical ?? !1
}), Vn = 0, Wn = 101, Xn = 401, Kn = 102, qn = 402, xn = 103, wn = 104, Qn = 105, $n = 405, jn = 108, zn = 408, Jn = 109, Zn = 111, bn = 411, ta = 112, ea = 113, oa = 115, na = 117, aa = 118, sa = 119, Aa = 121, ca = 122, _a = 123, Ea = 124, ia = 125, Ra = 126, Ta = 127, ra = 128, ma = 129, da = 132, Sa = 133, pa = 134, Ia = 135, Pa = 136, La = 137, Ma = 138, Ca = 139, Oa = 140, ua = 201, Na = 202, la = 203, fa = 204, Da = 205, Ua = 206, Ga = 211, Fa = 212, ga = 213, ya = 214, Ha = 216, Ba = 217, va = 221, ha = 222, Ya = 223, ka = 224, Va = 225, Wa = 230, Xa = 231, Ka = 232, qa = 233, xa = 234, wa = 235, Qa = 236, $a = 241, ja = 242, za = 243, Ja = 244, Za = 245, ba = 246, ts = 249, es = 250, os = 251, ns = 261, as = 282, ss = 283, As = 284, cs = 285, _s = 301, Es = 302, is = 605, Rs = 303, Ts = 311, rs = 312, ms = 313, ds = 314, Ss = 315, ps = 320, Is = 321, Ps = 322, Ls = 323, Ms = 324, Cs = 325, Os = 331, us = 332, Ns = 333, ls = 334, fs = 335, Ds = 336, Us = 337, Gs = 339, Fs = 340, gs = 351, ys = 342, Hs = 352, Bs = 353, vs = 354, hs = 355, Ys = 655, ks = 356, Vs = 357, Ws = 0, Xs = 1, Ks = 2, qs = 3, xs = 4, ws = 5, Qs = 6, $s = 7, js = 8, zs = 9, Js = 10, Zs = 11, bs = 12, tA = 13, eA = 14, oA = 15, nA = 16, aA = 17, sA = 18, AA = 19, cA = 20, _A = 21, EA = 22, iA = 23, RA = 24, TA = 25, rA = 26, mA = 27, dA = 28, SA = 29, pA = 30, IA = 31, PA = 32, LA = 33, MA = 34, CA = 35, OA = 36, uA = 37, NA = 38, lA = 39, fA = 40, DA = 41, UA = 42, GA = 43, FA = 44, gA = 45, yA = {
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
}, HA = {
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
}, se = {
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
}, BA = {
  rpg: {
    damage: ae,
    data: ne,
    traits: a,
    itemEffect: c
  },
  global: se
};
export {
  Fs as ABORT_BATTLE,
  r as AUTHOR_RMMZ,
  _s as BATTLE_PROCESSING,
  Ps as CHANGE_ACTOR_IMAGES,
  ra as CHANGE_ARMORS,
  ss as CHANGE_BATTLE_BACKGROUND,
  da as CHANGE_BATTLE_BGM,
  Is as CHANGE_CLASS,
  Ca as CHANGE_DEFEAT_ME,
  Pa as CHANGE_ENCOUNTER,
  Os as CHANGE_ENEMY_HP,
  us as CHANGE_ENEMY_MP,
  Ns as CHANGE_ENEMY_STATE,
  ys as CHANGE_ENEMY_TP,
  Ss as CHANGE_EXP,
  La as CHANGE_FORMATION_ACCESS,
  ia as CHANGE_GOLD,
  Ts as CHANGE_HP,
  Ra as CHANGE_ITEMS,
  Ia as CHANGE_MENU_ACCESS,
  rs as CHANGE_MP,
  ps as CHANGE_NAME,
  Ms as CHANGE_NICKNAME,
  As as CHANGE_PARALLAX,
  ma as CHANGE_PARTY_MEMBER,
  Ha as CHANGE_PLAYER_FOLLOWERS,
  Cs as CHANGE_PROFILE,
  pa as CHANGE_SAVE_ACCESS,
  as as CHANGE_TILESET,
  ms as CHANGE_TP,
  Ga as CHANGE_TRANSPARENCY,
  Oa as CHANGE_VEHICLE_BGM,
  Ls as CHANGE_VEHICLE_IMAGE,
  Sa as CHANGE_VICTORY_ME,
  Ta as CHANGE_WEAPONS,
  Ma as CHANGE_WINDOW_COLOR,
  so as COLLAPS_BOSS,
  Ao as COLLAPS_INSTANT,
  co as COLLAPS_NONE,
  ao as COLLAPS_NORMAL,
  jn as COMMENT,
  zn as COMMENT_BODY,
  na as COMMON_EVENT,
  Zn as CONDITIONAL_BRANCH,
  bn as CONDITIONAL_BRANCH_ELSE,
  _a as CONTROL_SELF_SWITCH,
  Aa as CONTROL_SWITCHES,
  Ea as CONTROL_TIMER,
  ca as CONTROL_VARIABLES,
  ae as DEFAULT_DAMAGE_LABELS,
  se as DEFAULT_GLOBAL_LABELS,
  Gn as DEFAULT_ITEM_LABELS,
  vn as DEFAULT_SKILL_LABELS,
  yA as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  hn as DEFAULT_USABLE_ITEM_LABELS,
  Yt as EFFECT_ADD_BUFF,
  kt as EFFECT_ADD_DEBUFF,
  vt as EFFECT_ADD_STATE,
  qt as EFFECT_COMMON_EVENT,
  Bt as EFFECT_GAIN_TP,
  Xt as EFFECT_GROW,
  Kt as EFFECT_LEARN_SKILL,
  yt as EFFECT_RECOVER_HP,
  Ht as EFFECT_RECOVER_MP,
  Vt as EFFECT_REMOVE_BUFF,
  Wt as EFFECT_REMOVE_DEBUFF,
  ht as EFFECT_REMOVE_STATE,
  gn as EFFECT_SPECIAL,
  fs as ENEMY_APPEAR,
  ls as ENEMY_RECOVER_ALL,
  Ds as ENEMY_TRANSFORM,
  ya as ERASE_EVENT,
  wa as ERASE_PICTURE,
  oa as EXIT_EVENT_PROCESSING,
  Co as EXTRA_PARAM_CEV,
  No as EXTRA_PARAM_CNT,
  Mo as EXTRA_PARAM_CRI,
  Lo as EXTRA_PARAM_EVA,
  Po as EXTRA_PARAM_HIT,
  lo as EXTRA_PARAM_HRG,
  Oo as EXTRA_PARAM_MEV,
  uo as EXTRA_PARAM_MRF,
  fo as EXTRA_PARAM_MRG,
  Do as EXTRA_PARAM_TRG,
  ha as FADEIN_SCREEN,
  ja as FADEOUT_BGM,
  ba as FADEOUT_BGS,
  va as FADEOUT_SCREEN,
  Oe as FILENAME_SYSTEM,
  mo as FLAG_ID_AUTO_BATTLE,
  So as FLAG_ID_GUARD,
  Io as FLAG_ID_PRESERVE_TP,
  po as FLAG_ID_SUBSTITUTE,
  ka as FLASH_SCREEN,
  Ae as FOLDER_AUDIO_BGM,
  Ee as FOLDER_AUDIO_BGS,
  _e as FOLDER_AUDIO_ME,
  ce as FOLDER_AUDIO_SE,
  ie as FOLDER_IMG_BATTLEBACK1,
  Re as FOLDER_IMG_BATTLEBACK2,
  Te as FOLDER_IMG_CHACTERS,
  re as FOLDER_IMG_ENEMIES,
  me as FOLDER_IMG_FACES,
  de as FOLDER_IMG_PARALLACES,
  Se as FOLDER_IMG_PICTURES,
  pe as FOLDER_IMG_SV_ACTORS,
  Ie as FOLDER_IMG_SV_ENEMIES,
  Pe as FOLDER_IMG_SYSTEM,
  Le as FOLDER_IMG_TILESETS,
  Me as FOLDER_IMG_TITLES1,
  Ce as FOLDER_IMG_TITLES2,
  Gs as FORCE_ACTION,
  Bs as GAME_OVER,
  Ba as GATHER_FOLLOWERS,
  cs as GET_LOCATION_INFO,
  Ua as GET_ONOFF_VEHICLE,
  fn as HITTYPE_CERTAIN,
  Un as HITTYPE_MAGICAL,
  Dn as HITTYPE_PHYSICAL,
  xn as INPUT_NUMBER,
  aa as LABEL,
  un as LABELS_DATA_WEAPON,
  sa as LABEL_JUMP,
  BA as LABEL_REGISTRY_JP,
  ne as LABEL_SET_DATA,
  c as LABEL_SET_ITEM_EFFECT,
  a as LABEL_SET_TRAIT,
  ta as LOOP,
  ea as LOOP_BREAK,
  B as MODULE_DATA,
  v as MODULE_SYSTEM,
  O as MODULE_TRAIT,
  Ka as MOVE_PICTURE,
  HA as MockSystemLabelDataTypes,
  Rs as NAME_INPUT_PROCESSING,
  Vn as NO_OPERATION,
  gs as OPEN_MENU_SCREEN,
  Hs as OPEN_SAVE_SCREEN,
  io as PARTY_ABILITY_CANCEL_SURPRISE,
  ro as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  _o as PARTY_ABILITY_ENCOUNTER_HALF,
  Eo as PARTY_ABILITY_ENCOUNTER_NONE,
  To as PARTY_ABILITY_GOLD_DOUBLE,
  Ro as PARTY_ABILITY_RAISE_PREEMPTIVE,
  $a as PLAY_BGM,
  Za as PLAY_BGS,
  ts as PLAY_ME,
  ns as PLAY_MOVIE,
  es as PLAY_SE,
  ks as PLUGIN_COMMAND_MV,
  Vs as PLUGIN_COMMAND_MZ,
  ds as RECOVER_ALL,
  Bo as REGULAR_PARAM_AGI,
  Fo as REGULAR_PARAM_ATK,
  go as REGULAR_PARAM_DEF,
  vo as REGULAR_PARAM_LUK,
  yo as REGULAR_PARAM_MATK,
  Uo as REGULAR_PARAM_MAX_HP,
  Go as REGULAR_PARAM_MAX_MP,
  Ho as REGULAR_PARAM_MDEF,
  Ja as RESUME_BGM,
  vs as RETURN_TO_TITLE_SCREEN,
  qa as ROTATE_PICTURE,
  GA as ROUTE_CHANGE_BLEND_MODE,
  pA as ROUTE_CHANGE_FREQ,
  DA as ROUTE_CHANGE_IMAGE,
  UA as ROUTE_CHANGE_OPACITY,
  SA as ROUTE_CHANGE_SPEED,
  OA as ROUTE_DIR_FIX_OFF,
  CA as ROUTE_DIR_FIX_ON,
  Ws as ROUTE_END,
  eA as ROUTE_JUMP,
  Zs as ROUTE_MOVE_AWAY,
  tA as ROUTE_MOVE_BACKWARD,
  Xs as ROUTE_MOVE_DOWN,
  bs as ROUTE_MOVE_FORWARD,
  Ks as ROUTE_MOVE_LEFT,
  ws as ROUTE_MOVE_LOWER_L,
  Qs as ROUTE_MOVE_LOWER_R,
  zs as ROUTE_MOVE_RANDOM,
  qs as ROUTE_MOVE_RIGHT,
  Js as ROUTE_MOVE_TOWARD,
  xs as ROUTE_MOVE_UP,
  $s as ROUTE_MOVE_UPPER_L,
  js as ROUTE_MOVE_UPPER_R,
  FA as ROUTE_PLAY_SE,
  gA as ROUTE_SCRIPT,
  MA as ROUTE_STEP_ANIME_OFF,
  LA as ROUTE_STEP_ANIME_ON,
  dA as ROUTE_SWITCH_OFF,
  mA as ROUTE_SWITCH_ON,
  NA as ROUTE_THROUGH_OFF,
  uA as ROUTE_THROUGH_ON,
  fA as ROUTE_TRANSPARENT_OFF,
  lA as ROUTE_TRANSPARENT_ON,
  EA as ROUTE_TURN_180D,
  _A as ROUTE_TURN_90D_L,
  cA as ROUTE_TURN_90D_R,
  iA as ROUTE_TURN_90D_R_L,
  rA as ROUTE_TURN_AWAY,
  nA as ROUTE_TURN_DOWN,
  aA as ROUTE_TURN_LEFT,
  RA as ROUTE_TURN_RANDOM,
  sA as ROUTE_TURN_RIGHT,
  TA as ROUTE_TURN_TOWARD,
  AA as ROUTE_TURN_UP,
  oA as ROUTE_WAIT,
  PA as ROUTE_WALK_ANIME_OFF,
  IA as ROUTE_WALK_ANIME_ON,
  za as SAVE_BGM,
  hs as SCRIPT_EVAL,
  Ys as SCRIPT_EVAL_BODY,
  fa as SCROLL_MAP,
  wn as SELECT_ITEM,
  la as SET_EVENT_LOCATION,
  Da as SET_MOVEMENT_ROUTE,
  Na as SET_VEHICLE_LOCATION,
  Qa as SET_WEATHER_EFFECT,
  Va as SHAKE_SCREEN,
  Es as SHOP_PROCESSING,
  is as SHOP_PROCESSING_BODY,
  Fa as SHOW_ANIMATION,
  ga as SHOW_BALLOON_ICON,
  Us as SHOW_BATTLE_ANIMATION,
  Kn as SHOW_CHOICES,
  qn as SHOW_CHOICES_ITEM,
  Wn as SHOW_MESSAGE,
  Xn as SHOW_MESSAGE_BODY,
  Xa as SHOW_PICTURE,
  Qn as SHOW_SCROLLING_TEXT,
  $n as SHOW_SCROLLING_TEXT_BODY,
  Jn as SKIP,
  Fn as SPECIAL_EFFECT_ESCAPE,
  wo as SPECIAL_PARAM_EXR,
  xo as SPECIAL_PARAM_FDR,
  Yo as SPECIAL_PARAM_GRD,
  Wo as SPECIAL_PARAM_MCR,
  qo as SPECIAL_PARAM_MDR,
  Ko as SPECIAL_PARAM_PDR,
  Vo as SPECIAL_PARAM_PHA,
  ko as SPECIAL_PARAM_REC,
  Xo as SPECIAL_PARAM_TCR,
  ho as SPECIAL_PARAM_TGR,
  nt as SRC_ARMOR_TYPES,
  dn as SRC_COLOR,
  et as SRC_COMMON_EVNET,
  sn as SRC_DATA_ACTOR,
  Tn as SRC_DATA_ARMOR,
  rn as SRC_DATA_CLASS,
  _n as SRC_DATA_ENEMY,
  En as SRC_DATA_ITEMS,
  cn as SRC_DATA_MAP,
  K as SRC_DATA_SKILL,
  I as SRC_DATA_STATE,
  An as SRC_DATA_VARIABLE,
  Rn as SRC_DATA_WEAPON,
  at as SRC_ELEMENTS,
  Sn as SRC_EQUIP_TYPES,
  Y as SRC_PARAMS_EXTRA,
  p as SRC_PARAMS_REGULAR,
  k as SRC_PARAMS_SPECIAL,
  In as SRC_SKILL_TYPES,
  pn as SRC_SWITCHES,
  V as SRC_TRAIT_COLLAPS,
  W as SRC_TRAIT_PARTY_ABILITY,
  X as SRC_TRAIT_SPECIAL_FLAG,
  mn as SRC_TROOP,
  ot as SRC_WEAPON_TYPES,
  os as STOP_SE,
  xa as TINT_PICTURE,
  Ya as TINT_SCREEN,
  to as TRAIT_ACTION_PLUS,
  Ve as TRAIT_ATTACK_ELEMENT,
  qe as TRAIT_ATTACK_SKILL,
  Xe as TRAIT_ATTACK_SPEED,
  We as TRAIT_ATTACK_STATE,
  Ke as TRAIT_ATTACK_TIMES,
  oo as TRAIT_COLLAPSE_TYPE,
  He as TRAIT_DEBUFF_RATE,
  ye as TRAIT_ELEMENT_RATE,
  ze as TRAIT_EQUIP_ARMOR_TYPE,
  Je as TRAIT_EQUIP_LOCK,
  Ze as TRAIT_EQUIP_SEAL,
  je as TRAIT_EQUIP_WEAPON_TYPE,
  he as TRAIT_PARAM,
  no as TRAIT_PARTY_ABILITY,
  Qe as TRAIT_SKILL_ADD,
  $e as TRAIT_SKILL_SEAL,
  xe as TRAIT_SKILL_TYPE_ADD,
  we as TRAIT_SKILL_TYPE_SEAL,
  be as TRAIT_SLOT_TYPE,
  ke as TRAIT_SPARAM,
  eo as TRAIT_SPECIAL_FLAG,
  Be as TRAIT_STATE_RATE,
  ve as TRAIT_STATE_RESIST,
  Ye as TRAIT_XPARAM,
  ua as TRANSFER_PLAYER,
  st as TraitDescriptor,
  Wa as WAIT,
  zo as buildCollapsSource,
  bo as buildExtraParamSource,
  Jo as buildPartyAbilitySource,
  Zo as buildRegularParamSource,
  en as buildSpecialFlagSource,
  tn as buildSpecialParamSource,
  Jt as defineEffectAddBuff,
  te as defineEffectAddDebuff,
  jt as defineEffectAddState,
  oe as defineEffectCommonEvent,
  $t as defineEffectGainTp,
  Bn as defineEffectGrow,
  bt as defineEffectLearnSkill,
  wt as defineEffectRecoverHp,
  Qt as defineEffectRecoverMp,
  Zt as defineEffectRemoveBuff,
  ee as defineEffectRemoveDebuff,
  zt as defineEffectRemoveState,
  $o as extraParamName,
  j as foldCollapsOptions,
  Z as foldExtraParam,
  z as foldPartyAbilityOptions,
  J as foldRegularParam,
  tt as foldSpecialFlag,
  b as foldSpecialParams,
  yn as formatItemEffectText,
  Fe as getArmorTypes,
  fe as getElementTypes,
  De as getEquipTypes,
  ge as getParamNames,
  Ue as getSkillTypes,
  le as getVariableNames,
  Ge as getWeaponTypes,
  an as isValid,
  nn as joinSourceKey,
  Ln as makeActor,
  Mn as makeArmor,
  Cn as makeClass,
  Q as makeDamage,
  Ft as makeDropItem,
  Nn as makeEnemyAction,
  ln as makeEnemyData,
  Yn as makeItem,
  kn as makeSkill,
  On as makeState,
  ue as mergeDomainLabel,
  Ne as mergeNestedPrimitiveRecords,
  H as mergeWithDefaults,
  Qo as regularParamName,
  Hn as resolveItemEffectLabels,
  Pn as resolveTraitLabels,
  on as sanitizeKey,
  jo as specialParamName,
  M as testUnknonwKey,
  d as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
