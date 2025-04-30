const Ae = "bgm", ce = "se", _e = "me", Ee = "bgs", ie = "battlebacks1", Re = "battlebacks2", Te = "characters", re = "enemies", me = "faces", Se = "parallaxes", de = "pictures", Ie = "sv_actors", pe = "sv_enemies", Le = "system", Pe = "tilesets", Me = "titles1", Ne = "titles2", Oe = "System.json", Ce = "Actors.json", ue = "Classes.json", le = "Skills.json", fe = "Items.json", De = "Weapons.json", Ue = "Armors.json", Fe = "Enemies.json", Ge = "Troops.json", ge = "States.json", ye = "Animations.json", He = "Tilesets.json", Be = "CommonEvents.json", ve = "MapInfos.json", he = "data", Ye = "img", ke = "audio", Ve = "js", H = (t, e) => {
  const o = { ...t };
  for (const n in t) {
    const _ = e[n];
    typeof _ == "string" && (o[n] = _);
  }
  return o;
}, We = (t, e) => ({
  domainName: e.domainName ?? t.domainName,
  options: H(t.options, e.options ?? {})
}), Ke = (t, e) => {
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
}), Xe = (t) => t.variables.map(T), qe = (t) => t.elements.map(T), xe = (t) => t.equipTypes.map(T), we = (t) => t.skillTypes.map(T), je = (t) => t.weaponTypes.map(T), Qe = (t) => t.armorTypes.map(T), $e = (t) => t.terms.params.map(T), r = "rmmz", O = "trait", B = "data", v = "system", Je = 11, ze = 12, Ze = 13, be = 14, to = 21, eo = 22, oo = 23, no = 31, so = 32, ao = 33, Ao = 34, co = 35, _o = 41, Eo = 42, io = 43, Ro = 44, To = 51, ro = 52, mo = 53, So = 54, Io = 55, po = 61, Lo = 62, Po = 63, Mo = 64, No = 0, Oo = 1, Co = 2, uo = 3, lo = 0, fo = 1, Do = 2, Uo = 3, Fo = 4, Go = 5, go = 0, yo = 1, Ho = 2, Bo = 3, vo = 0, ho = 1, Yo = 2, ko = 3, Vo = 4, Wo = 5, Ko = 6, Xo = 7, qo = 8, xo = 9, wo = 0, jo = 1, Qo = 2, $o = 3, Jo = 4, zo = 5, Zo = 6, bo = 7, tn = 0, en = 1, on = 2, nn = 3, sn = 4, an = 5, An = 6, cn = 7, _n = 8, En = 9, Rn = (t, e) => {
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
}, Tn = (t, e) => {
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
}, rn = (t, e) => {
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
}, $ = (t, e) => [
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
], J = (t) => [
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
], z = (t) => [
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
], S = (t, e, o) => ({
  items: o(e.options),
  label: e.domainName,
  source: {
    author: r,
    module: O,
    kind: t
  }
}), mn = (t, e) => S(
  V,
  t,
  (o) => $(o, e)
), Sn = (t) => S(W, t, J), dn = (t) => S(I, t, z), In = (t) => S(Y, t, Z), pn = (t) => S(k, t, b), Ln = (t) => S(K, t, tt), A = "{name}", m = "{name} * {value}%", C = "{name} + {value}%", u = "{value}", s = {
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
      format: C,
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
      format: C
    },
    attackSpeed: {
      domainName: "攻撃速度補正",
      format: u
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: u
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
}, h = /^[a-zA-Z0-9]+$/, Pn = (t) => h.test(t) ? t : void 0, M = (t) => typeof t == "string" ? h.test(t) : !1, Mn = (t) => [t.author, t.module, t.kind].join("."), Nn = (t) => M(t.author) && M(t.module) && M(t.kind), I = "params", Y = "xparams", k = "sparams", V = "collaps", W = "partyAbiility", K = "sflag", On = "actors", Cn = "variables", un = "map", ln = "enemy", p = "state", X = "skill", fn = "items", Dn = "weapon", Un = "armor", Fn = "class", et = "common_event", Gn = "troop", gn = "colors", ot = "weaponTypes", nt = "armorTypes", yn = "equipTypes", Hn = "switches", Bn = "skillTypes", st = "elements", l = "{value}", f = "{name}";
class at {
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
const vn = (t) => [
  At(t.elementRate),
  ct(t.debuffRate),
  _t(t.stateRate),
  Et(t.stateResist),
  it(t.regularParam),
  Rt(t.extraParam),
  Tt(t.specialParam),
  rt(t.attackElement),
  mt(t.attackState),
  St(t.attackSpeed),
  dt(t.attackTimes),
  It(t.attackSkill),
  Ut(t.skillTypeAdd),
  Ft(t.skillTypeSeal),
  lt(t.skillAdd),
  ft(t.skillSeal),
  Nt(t.equipWeaponType),
  Ot(t.equipArmorType),
  Ct(t.equipLock),
  ut(t.equipSeal),
  Dt(t.slotType),
  pt(t.actionPlus),
  Lt(t.specialFlag),
  Pt(t.collaps),
  Mt(t.partyAbility)
], D = (t, e) => typeof e == "string" ? e : t, a = (t, e, o, n) => {
  const _ = D(e.domainName, o.domainName), R = D(e.format, o.format);
  return new at(t, _, R, n);
}, q = () => ({
  module: v,
  author: r,
  kind: st
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
}), At = (t) => a(
  11,
  s.options.elementRate,
  t,
  q()
), ct = (t) => a(
  12,
  s.options.debuffRate,
  t,
  i(I)
), _t = (t) => a(
  13,
  s.options.stateRate,
  t,
  i(I)
), Et = (t) => a(
  14,
  s.options.stateResist,
  t,
  x(p)
), it = (t) => a(
  21,
  s.options.regularParam,
  t,
  i(I)
), Rt = (t) => a(
  22,
  s.options.extraParam,
  t,
  i(Y)
), Tt = (t) => a(
  23,
  s.options.specialParam,
  t,
  i(k)
), rt = (t) => a(
  31,
  s.options.attackElement,
  t,
  q()
), mt = (t) => a(
  32,
  s.options.attackState,
  t,
  i(p)
), St = (t) => a(33, s.options.attackSpeed, t), dt = (t) => a(34, s.options.attackTimes, t), It = (t) => a(
  35,
  s.options.attackSkill,
  t,
  x(X)
), pt = (t) => a(61, s.options.actionPlus, t), Lt = (t) => a(
  62,
  s.options.specialFlag,
  t,
  i(K)
), Pt = (t) => a(
  63,
  s.options.collaps,
  t,
  i(V)
), Mt = (t) => a(
  64,
  s.options.partyAbility,
  t,
  i(W)
), Nt = (t) => a(
  51,
  s.options.equipWeaponType,
  t,
  w(ot)
), Ot = (t) => a(
  52,
  s.options.equipArmorType,
  t,
  w(nt)
), Ct = (t) => a(53, s.options.equipLock, t), ut = (t) => a(54, s.options.equipSeal, t), lt = (t) => a(43, s.options.skillAdd, t), ft = (t) => a(44, s.options.skillSeal, t), Dt = (t) => a(55, s.options.slotType, t), Ut = (t) => a(
  41,
  s.options.skillTypeAdd,
  t
), Ft = (t) => a(
  42,
  s.options.skillTypeSeal,
  t
), hn = () => ({
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
}), Yn = (t = {}) => ({
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
}), kn = (t) => ({
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
}), Vn = (t = {}) => ({
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
}), Wn = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Gt = (t = {}) => ({
  dataId: t.dataId ?? 0,
  denominator: t.denominator ?? 0,
  kind: t.kind ?? 0
}), Kn = (t) => ({
  conditionParam1: t.conditionParam1 ?? 0,
  conditionParam2: t.conditionParam2 ?? 0,
  conditionType: t.conditionType ?? 0,
  rating: t.rating ?? 0,
  skillId: t.skillId ?? 0
}), Xn = (t) => {
  var e;
  return {
    name: t.name ?? "",
    id: t.id ?? 0,
    battlerName: t.battlerName ?? "",
    battlerHue: t.battlerHue ?? 0,
    dropItems: ((e = t.dropItems) == null ? void 0 : e.map(() => Gt())) ?? [],
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
}, qn = 0, xn = 1, wn = 2, jn = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, gt = "{name} + {value1}", U = "{name} {value1}%", N = "{value1}% + {value2}", F = "{name} {value1}ターン", d = "{name}", c = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: F
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: F
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: N
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: gt
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: d
    },
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: N
    },
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: N
    },
    removeBuff: {
      desc: "バフを解除する",
      domainName: "バフ解除",
      format: d
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: d
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: U
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: d
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: U
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: d
    }
  }
}, Qn = 0, yt = 11, Ht = 12, Bt = 13, vt = 21, ht = 22, Yt = 31, kt = 32, Vt = 33, Wt = 34, $n = 41, Kt = 42, Xt = 43, qt = 44, G = "{value1}", g = "{value2}", y = "{name}";
class xt {
  constructor(e, o, n, _, R) {
    this.codeId = e, this.label = o, this.format = n, this.description = _, this.dataSource = R;
  }
  formatText(e, o) {
    const n = this.format.replaceAll(G, e.value1.toString()).replaceAll(g, e.value2.toString());
    return this.dataSource ? n.replaceAll(
      y,
      o(this.dataSource, e.dataId)
    ) : n;
  }
  requiresValue1() {
    return this.format.includes(G);
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
const Jn = (t, e, o) => t.format.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", o), zn = (t) => [
  wt(t.options.recoverHp),
  jt(t.options.recoverMp),
  Qt(t.options.gainTp),
  $t(t.options.addState),
  Jt(t.options.removeState),
  zt(t.options.addBuff),
  te(t.options.addDebuff),
  Zt(t.options.removeBuff),
  ee(t.options.removeDebuff),
  bt(t.options.learnSkill),
  oe(t.options.commonEvent)
], L = () => ({
  author: r,
  module: O,
  kind: I
}), P = (t) => ({
  author: r,
  module: B,
  kind: t
}), E = (t, e, o, n) => {
  const _ = o.domainName ?? e.domainName, R = o.format ?? e.format, Q = o.desc ?? e.desc;
  return new xt(t, _, R, Q, n);
}, wt = (t) => E(
  yt,
  c.options.recoverHp,
  t
), jt = (t) => E(
  Ht,
  c.options.recoverMp,
  t
), Qt = (t) => E(Bt, c.options.gainTp, t), Zn = (t) => E(Kt, c.options.grow, t), $t = (t) => E(
  vt,
  c.options.addState,
  t,
  P(p)
), Jt = (t) => E(
  ht,
  c.options.removeState,
  t,
  P(p)
), zt = (t) => E(
  Yt,
  c.options.addBuff,
  t,
  L()
), Zt = (t) => E(
  Vt,
  c.options.removeBuff,
  t,
  L()
), bt = (t) => E(
  Xt,
  c.options.learnSkill,
  t,
  P(X)
), te = (t) => E(
  kt,
  c.options.addBuff,
  t,
  L()
), ee = (t) => E(
  Wt,
  c.options.removeDebuff,
  t,
  L()
), oe = (t) => E(
  qt,
  c.options.commonEvent,
  t,
  P(et)
), bn = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, ts = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, es = (t = {}) => ({
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
  damage: j(t.damage ?? {}),
  effects: [],
  price: 0
}), os = (t = {}) => ({
  stypeId: t.stypeId ?? 0,
  requiredWtypeId1: t.requiredWtypeId1 ?? 0,
  requiredWtypeId2: t.requiredWtypeId2 ?? 0,
  animationId: t.animationId ?? 0,
  damage: j(t.damage ?? {}),
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
}, se = {
  domainName: "ダメージ",
  options: {}
}, j = (t = {}) => ({
  type: t.type ?? 0,
  elementId: t.elementId ?? 0,
  formula: t.formula ?? "",
  variance: t.variance ?? 0,
  critical: t.critical ?? !1
}), ns = 0, ss = 101, as = 401, As = 102, cs = 402, _s = 103, Es = 104, is = 105, Rs = 405, Ts = 108, rs = 408, ms = 109, Ss = 111, ds = 411, Is = 112, ps = 113, Ls = 115, Ps = 117, Ms = 118, Ns = 119, Os = 121, Cs = 122, us = 123, ls = 124, fs = 125, Ds = 126, Us = 127, Fs = 128, Gs = 129, gs = 132, ys = 133, Hs = 134, Bs = 135, vs = 136, hs = 137, Ys = 138, ks = 139, Vs = 140, Ws = 201, Ks = 202, Xs = 203, qs = 204, xs = 205, ws = 206, js = 211, Qs = 212, $s = 213, Js = 214, zs = 216, Zs = 217, bs = 221, ta = 222, ea = 223, oa = 224, na = 225, sa = 230, aa = 231, Aa = 232, ca = 233, _a = 234, Ea = 235, ia = 236, Ra = 241, Ta = 242, ra = 243, ma = 244, Sa = 245, da = 246, Ia = 249, pa = 250, La = 251, Pa = 261, Ma = 282, Na = 283, Oa = 284, Ca = 285, ua = 301, la = 302, fa = 605, Da = 303, Ua = 311, Fa = 312, Ga = 313, ga = 314, ya = 315, Ha = 320, Ba = 321, va = 322, ha = 323, Ya = 324, ka = 325, Va = 331, Wa = 332, Ka = 333, Xa = 334, qa = 335, xa = 336, wa = 337, ja = 339, Qa = 340, $a = 351, Ja = 342, za = 352, Za = 353, ba = 354, tA = 355, eA = 655, oA = 356, nA = 357, sA = 0, aA = 1, AA = 2, cA = 3, _A = 4, EA = 5, iA = 6, RA = 7, TA = 8, rA = 9, mA = 10, SA = 11, dA = 12, IA = 13, pA = 14, LA = 15, PA = 16, MA = 17, NA = 18, OA = 19, CA = 20, uA = 21, lA = 22, fA = 23, DA = 24, UA = 25, FA = 26, GA = 27, gA = 28, yA = 29, HA = 30, BA = 31, vA = 32, hA = 33, YA = 34, kA = 35, VA = 36, WA = 37, KA = 38, XA = 39, qA = 40, xA = 41, wA = 42, jA = 43, QA = 44, $A = 45, JA = {
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
}, zA = {
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
}, ae = {
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
}, ZA = {
  rpg: {
    damage: se,
    data: ne,
    traits: s,
    itemEffect: c
  },
  global: ae
};
export {
  Qa as ABORT_BATTLE,
  r as AUTHOR_RMMZ,
  ua as BATTLE_PROCESSING,
  va as CHANGE_ACTOR_IMAGES,
  Fs as CHANGE_ARMORS,
  Na as CHANGE_BATTLE_BACKGROUND,
  gs as CHANGE_BATTLE_BGM,
  Ba as CHANGE_CLASS,
  ks as CHANGE_DEFEAT_ME,
  vs as CHANGE_ENCOUNTER,
  Va as CHANGE_ENEMY_HP,
  Wa as CHANGE_ENEMY_MP,
  Ka as CHANGE_ENEMY_STATE,
  Ja as CHANGE_ENEMY_TP,
  ya as CHANGE_EXP,
  hs as CHANGE_FORMATION_ACCESS,
  fs as CHANGE_GOLD,
  Ua as CHANGE_HP,
  Ds as CHANGE_ITEMS,
  Bs as CHANGE_MENU_ACCESS,
  Fa as CHANGE_MP,
  Ha as CHANGE_NAME,
  Ya as CHANGE_NICKNAME,
  Oa as CHANGE_PARALLAX,
  Gs as CHANGE_PARTY_MEMBER,
  zs as CHANGE_PLAYER_FOLLOWERS,
  ka as CHANGE_PROFILE,
  Hs as CHANGE_SAVE_ACCESS,
  Ma as CHANGE_TILESET,
  Ga as CHANGE_TP,
  js as CHANGE_TRANSPARENCY,
  Vs as CHANGE_VEHICLE_BGM,
  ha as CHANGE_VEHICLE_IMAGE,
  ys as CHANGE_VICTORY_ME,
  Us as CHANGE_WEAPONS,
  Ys as CHANGE_WINDOW_COLOR,
  Oo as COLLAPS_BOSS,
  Co as COLLAPS_INSTANT,
  uo as COLLAPS_NONE,
  No as COLLAPS_NORMAL,
  Ts as COMMENT,
  rs as COMMENT_BODY,
  Ps as COMMON_EVENT,
  Ss as CONDITIONAL_BRANCH,
  ds as CONDITIONAL_BRANCH_ELSE,
  us as CONTROL_SELF_SWITCH,
  Os as CONTROL_SWITCHES,
  ls as CONTROL_TIMER,
  Cs as CONTROL_VARIABLES,
  se as DEFAULT_DAMAGE_LABELS,
  ae as DEFAULT_GLOBAL_LABELS,
  jn as DEFAULT_ITEM_LABELS,
  bn as DEFAULT_SKILL_LABELS,
  JA as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  ts as DEFAULT_USABLE_ITEM_LABELS,
  Yt as EFFECT_ADD_BUFF,
  kt as EFFECT_ADD_DEBUFF,
  vt as EFFECT_ADD_STATE,
  qt as EFFECT_COMMON_EVENT,
  Bt as EFFECT_GAIN_TP,
  Kt as EFFECT_GROW,
  Xt as EFFECT_LEARN_SKILL,
  yt as EFFECT_RECOVER_HP,
  Ht as EFFECT_RECOVER_MP,
  Vt as EFFECT_REMOVE_BUFF,
  Wt as EFFECT_REMOVE_DEBUFF,
  ht as EFFECT_REMOVE_STATE,
  $n as EFFECT_SPECIAL,
  qa as ENEMY_APPEAR,
  Xa as ENEMY_RECOVER_ALL,
  xa as ENEMY_TRANSFORM,
  Js as ERASE_EVENT,
  Ea as ERASE_PICTURE,
  Ls as EXIT_EVENT_PROCESSING,
  ko as EXTRA_PARAM_CEV,
  Ko as EXTRA_PARAM_CNT,
  Yo as EXTRA_PARAM_CRI,
  ho as EXTRA_PARAM_EVA,
  vo as EXTRA_PARAM_HIT,
  Xo as EXTRA_PARAM_HRG,
  Vo as EXTRA_PARAM_MEV,
  Wo as EXTRA_PARAM_MRF,
  qo as EXTRA_PARAM_MRG,
  xo as EXTRA_PARAM_TRG,
  ta as FADEIN_SCREEN,
  Ta as FADEOUT_BGM,
  da as FADEOUT_BGS,
  bs as FADEOUT_SCREEN,
  ue as FILANAME_CLASSES,
  Ce as FILENAME_ACTORS,
  ye as FILENAME_ANIMATIONS,
  Ue as FILENAME_ARMORS,
  Be as FILENAME_COMMON_EVENTS,
  Fe as FILENAME_ENEMIES,
  fe as FILENAME_ITEMS,
  ve as FILENAME_MAP_INFOS,
  le as FILENAME_SKILLS,
  ge as FILENAME_STATES,
  Oe as FILENAME_SYSTEM,
  He as FILENAME_TILESET,
  Ge as FILENAME_TROOPS,
  De as FILENAME_WEAPONS,
  go as FLAG_ID_AUTO_BATTLE,
  yo as FLAG_ID_GUARD,
  Bo as FLAG_ID_PRESERVE_TP,
  Ho as FLAG_ID_SUBSTITUTE,
  oa as FLASH_SCREEN,
  ke as FOLDER_AUDIO,
  Ae as FOLDER_AUDIO_BGM,
  Ee as FOLDER_AUDIO_BGS,
  _e as FOLDER_AUDIO_ME,
  ce as FOLDER_AUDIO_SE,
  he as FOLDER_DATA,
  Ye as FOLDER_IMG,
  ie as FOLDER_IMG_BATTLEBACK1,
  Re as FOLDER_IMG_BATTLEBACK2,
  Te as FOLDER_IMG_CHACTERS,
  re as FOLDER_IMG_ENEMIES,
  me as FOLDER_IMG_FACES,
  Se as FOLDER_IMG_PARALLACES,
  de as FOLDER_IMG_PICTURES,
  Ie as FOLDER_IMG_SV_ACTORS,
  pe as FOLDER_IMG_SV_ENEMIES,
  Le as FOLDER_IMG_SYSTEM,
  Pe as FOLDER_IMG_TILESETS,
  Me as FOLDER_IMG_TITLES1,
  Ne as FOLDER_IMG_TITLES2,
  Ve as FOLDER_JS,
  ja as FORCE_ACTION,
  Za as GAME_OVER,
  Zs as GATHER_FOLLOWERS,
  Ca as GET_LOCATION_INFO,
  ws as GET_ONOFF_VEHICLE,
  qn as HITTYPE_CERTAIN,
  wn as HITTYPE_MAGICAL,
  xn as HITTYPE_PHYSICAL,
  _s as INPUT_NUMBER,
  Ms as LABEL,
  Wn as LABELS_DATA_WEAPON,
  Ns as LABEL_JUMP,
  ZA as LABEL_REGISTRY_JP,
  ne as LABEL_SET_DATA,
  c as LABEL_SET_ITEM_EFFECT,
  s as LABEL_SET_TRAIT,
  Is as LOOP,
  ps as LOOP_BREAK,
  B as MODULE_DATA,
  v as MODULE_SYSTEM,
  O as MODULE_TRAIT,
  Aa as MOVE_PICTURE,
  zA as MockSystemLabelDataTypes,
  Da as NAME_INPUT_PROCESSING,
  ns as NO_OPERATION,
  $a as OPEN_MENU_SCREEN,
  za as OPEN_SAVE_SCREEN,
  Do as PARTY_ABILITY_CANCEL_SURPRISE,
  Go as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  lo as PARTY_ABILITY_ENCOUNTER_HALF,
  fo as PARTY_ABILITY_ENCOUNTER_NONE,
  Fo as PARTY_ABILITY_GOLD_DOUBLE,
  Uo as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Ra as PLAY_BGM,
  Sa as PLAY_BGS,
  Ia as PLAY_ME,
  Pa as PLAY_MOVIE,
  pa as PLAY_SE,
  oA as PLUGIN_COMMAND_MV,
  nA as PLUGIN_COMMAND_MZ,
  ga as RECOVER_ALL,
  Zo as REGULAR_PARAM_AGI,
  Qo as REGULAR_PARAM_ATK,
  $o as REGULAR_PARAM_DEF,
  bo as REGULAR_PARAM_LUK,
  Jo as REGULAR_PARAM_MATK,
  wo as REGULAR_PARAM_MAX_HP,
  jo as REGULAR_PARAM_MAX_MP,
  zo as REGULAR_PARAM_MDEF,
  ma as RESUME_BGM,
  ba as RETURN_TO_TITLE_SCREEN,
  ca as ROTATE_PICTURE,
  jA as ROUTE_CHANGE_BLEND_MODE,
  HA as ROUTE_CHANGE_FREQ,
  xA as ROUTE_CHANGE_IMAGE,
  wA as ROUTE_CHANGE_OPACITY,
  yA as ROUTE_CHANGE_SPEED,
  VA as ROUTE_DIR_FIX_OFF,
  kA as ROUTE_DIR_FIX_ON,
  sA as ROUTE_END,
  pA as ROUTE_JUMP,
  SA as ROUTE_MOVE_AWAY,
  IA as ROUTE_MOVE_BACKWARD,
  aA as ROUTE_MOVE_DOWN,
  dA as ROUTE_MOVE_FORWARD,
  AA as ROUTE_MOVE_LEFT,
  EA as ROUTE_MOVE_LOWER_L,
  iA as ROUTE_MOVE_LOWER_R,
  rA as ROUTE_MOVE_RANDOM,
  cA as ROUTE_MOVE_RIGHT,
  mA as ROUTE_MOVE_TOWARD,
  _A as ROUTE_MOVE_UP,
  RA as ROUTE_MOVE_UPPER_L,
  TA as ROUTE_MOVE_UPPER_R,
  QA as ROUTE_PLAY_SE,
  $A as ROUTE_SCRIPT,
  YA as ROUTE_STEP_ANIME_OFF,
  hA as ROUTE_STEP_ANIME_ON,
  gA as ROUTE_SWITCH_OFF,
  GA as ROUTE_SWITCH_ON,
  KA as ROUTE_THROUGH_OFF,
  WA as ROUTE_THROUGH_ON,
  qA as ROUTE_TRANSPARENT_OFF,
  XA as ROUTE_TRANSPARENT_ON,
  lA as ROUTE_TURN_180D,
  uA as ROUTE_TURN_90D_L,
  CA as ROUTE_TURN_90D_R,
  fA as ROUTE_TURN_90D_R_L,
  FA as ROUTE_TURN_AWAY,
  PA as ROUTE_TURN_DOWN,
  MA as ROUTE_TURN_LEFT,
  DA as ROUTE_TURN_RANDOM,
  NA as ROUTE_TURN_RIGHT,
  UA as ROUTE_TURN_TOWARD,
  OA as ROUTE_TURN_UP,
  LA as ROUTE_WAIT,
  vA as ROUTE_WALK_ANIME_OFF,
  BA as ROUTE_WALK_ANIME_ON,
  ra as SAVE_BGM,
  tA as SCRIPT_EVAL,
  eA as SCRIPT_EVAL_BODY,
  qs as SCROLL_MAP,
  Es as SELECT_ITEM,
  Xs as SET_EVENT_LOCATION,
  xs as SET_MOVEMENT_ROUTE,
  Ks as SET_VEHICLE_LOCATION,
  ia as SET_WEATHER_EFFECT,
  na as SHAKE_SCREEN,
  la as SHOP_PROCESSING,
  fa as SHOP_PROCESSING_BODY,
  Qs as SHOW_ANIMATION,
  $s as SHOW_BALLOON_ICON,
  wa as SHOW_BATTLE_ANIMATION,
  As as SHOW_CHOICES,
  cs as SHOW_CHOICES_ITEM,
  ss as SHOW_MESSAGE,
  as as SHOW_MESSAGE_BODY,
  aa as SHOW_PICTURE,
  is as SHOW_SCROLLING_TEXT,
  Rs as SHOW_SCROLLING_TEXT_BODY,
  ms as SKIP,
  Qn as SPECIAL_EFFECT_ESCAPE,
  En as SPECIAL_PARAM_EXR,
  _n as SPECIAL_PARAM_FDR,
  en as SPECIAL_PARAM_GRD,
  sn as SPECIAL_PARAM_MCR,
  cn as SPECIAL_PARAM_MDR,
  An as SPECIAL_PARAM_PDR,
  nn as SPECIAL_PARAM_PHA,
  on as SPECIAL_PARAM_REC,
  an as SPECIAL_PARAM_TCR,
  tn as SPECIAL_PARAM_TGR,
  nt as SRC_ARMOR_TYPES,
  gn as SRC_COLOR,
  et as SRC_COMMON_EVNET,
  On as SRC_DATA_ACTOR,
  Un as SRC_DATA_ARMOR,
  Fn as SRC_DATA_CLASS,
  ln as SRC_DATA_ENEMY,
  fn as SRC_DATA_ITEMS,
  un as SRC_DATA_MAP,
  X as SRC_DATA_SKILL,
  p as SRC_DATA_STATE,
  Cn as SRC_DATA_VARIABLE,
  Dn as SRC_DATA_WEAPON,
  st as SRC_ELEMENTS,
  yn as SRC_EQUIP_TYPES,
  Y as SRC_PARAMS_EXTRA,
  I as SRC_PARAMS_REGULAR,
  k as SRC_PARAMS_SPECIAL,
  Bn as SRC_SKILL_TYPES,
  Hn as SRC_SWITCHES,
  V as SRC_TRAIT_COLLAPS,
  W as SRC_TRAIT_PARTY_ABILITY,
  K as SRC_TRAIT_SPECIAL_FLAG,
  Gn as SRC_TROOP,
  ot as SRC_WEAPON_TYPES,
  La as STOP_SE,
  _a as TINT_PICTURE,
  ea as TINT_SCREEN,
  po as TRAIT_ACTION_PLUS,
  no as TRAIT_ATTACK_ELEMENT,
  co as TRAIT_ATTACK_SKILL,
  ao as TRAIT_ATTACK_SPEED,
  so as TRAIT_ATTACK_STATE,
  Ao as TRAIT_ATTACK_TIMES,
  Po as TRAIT_COLLAPSE_TYPE,
  ze as TRAIT_DEBUFF_RATE,
  Je as TRAIT_ELEMENT_RATE,
  ro as TRAIT_EQUIP_ARMOR_TYPE,
  mo as TRAIT_EQUIP_LOCK,
  So as TRAIT_EQUIP_SEAL,
  To as TRAIT_EQUIP_WEAPON_TYPE,
  to as TRAIT_PARAM,
  Mo as TRAIT_PARTY_ABILITY,
  io as TRAIT_SKILL_ADD,
  Ro as TRAIT_SKILL_SEAL,
  _o as TRAIT_SKILL_TYPE_ADD,
  Eo as TRAIT_SKILL_TYPE_SEAL,
  Io as TRAIT_SLOT_TYPE,
  oo as TRAIT_SPARAM,
  Lo as TRAIT_SPECIAL_FLAG,
  Ze as TRAIT_STATE_RATE,
  be as TRAIT_STATE_RESIST,
  eo as TRAIT_XPARAM,
  Ws as TRANSFER_PLAYER,
  at as TraitDescriptor,
  sa as WAIT,
  mn as buildCollapsSource,
  In as buildExtraParamSource,
  Sn as buildPartyAbilitySource,
  dn as buildRegularParamSource,
  Ln as buildSpecialFlagSource,
  pn as buildSpecialParamSource,
  zt as defineEffectAddBuff,
  te as defineEffectAddDebuff,
  $t as defineEffectAddState,
  oe as defineEffectCommonEvent,
  Qt as defineEffectGainTp,
  Zn as defineEffectGrow,
  bt as defineEffectLearnSkill,
  wt as defineEffectRecoverHp,
  jt as defineEffectRecoverMp,
  Zt as defineEffectRemoveBuff,
  ee as defineEffectRemoveDebuff,
  Jt as defineEffectRemoveState,
  Tn as extraParamName,
  $ as foldCollapsOptions,
  Z as foldExtraParam,
  J as foldPartyAbilityOptions,
  z as foldRegularParam,
  tt as foldSpecialFlag,
  b as foldSpecialParams,
  Jn as formatItemEffectText,
  Qe as getArmorTypes,
  qe as getElementTypes,
  xe as getEquipTypes,
  $e as getParamNames,
  we as getSkillTypes,
  Xe as getVariableNames,
  je as getWeaponTypes,
  Nn as isValid,
  Mn as joinSourceKey,
  hn as makeActor,
  Yn as makeArmor,
  kn as makeClass,
  j as makeDamage,
  Gt as makeDropItem,
  Kn as makeEnemyAction,
  Xn as makeEnemyData,
  es as makeItem,
  os as makeSkill,
  Vn as makeState,
  We as mergeDomainLabel,
  Ke as mergeNestedPrimitiveRecords,
  H as mergeWithDefaults,
  Rn as regularParamName,
  zn as resolveItemEffectLabels,
  vn as resolveTraitLabels,
  Pn as sanitizeKey,
  rn as specialParamName,
  M as testUnknonwKey,
  S as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
