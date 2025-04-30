const ce = "bgm", Ae = "se", _e = "me", Ee = "bgs", ie = "battlebacks1", Re = "battlebacks2", Te = "characters", re = "enemies", me = "faces", de = "parallaxes", Ie = "pictures", Se = "sv_actors", pe = "sv_enemies", Le = "system", Pe = "tilesets", Me = "titles1", Ne = "titles2", Oe = "System.json", Ce = "Actors.json", ue = "Classes.json", le = "Skills.json", fe = "Items.json", De = "Weapons.json", Ue = "Armors.json", Fe = "Enemies.json", Ge = "Troops.json", ge = "States.json", ye = "Animations.json", He = "Tilesets.json", Be = "CommonEvents.json", ve = "MapInfos.json", he = "data", ke = "img", Ye = "audio", Ve = "js", B = (t, e) => {
  const o = { ...t };
  for (const n in t) {
    const _ = e[n];
    typeof _ == "string" && (o[n] = _);
  }
  return o;
}, We = (t, e) => ({
  domainName: e.domainName ?? t.domainName,
  options: B(t.options, e.options ?? {})
}), Ke = (t, e) => {
  const o = {};
  for (const n in t) {
    const _ = t[n], R = e[n] ?? {};
    o[n] = B(
      _,
      R
    );
  }
  return o;
}, T = (t, e) => ({
  name: t,
  id: e
}), Xe = (t) => t.variables.map(T), xe = (t) => t.elements.map(T), qe = (t) => t.equipTypes.map(T), we = (t) => t.skillTypes.map(T), je = (t) => t.weaponTypes.map(T), Qe = (t) => t.armorTypes.map(T), $e = (t) => t.terms.params.map(T), r = "rmmz", O = "trait", v = "data", h = "system", Je = 11, ze = 12, Ze = 13, be = 14, to = 21, eo = 22, oo = 23, no = 31, so = 32, ao = 33, co = 34, Ao = 35, _o = 41, Eo = 42, io = 43, Ro = 44, To = 51, ro = 52, mo = 53, Io = 54, So = 55, po = 61, Lo = 62, Po = 63, Mo = 64, No = 0, Oo = 1, Co = 2, uo = 3, lo = 0, fo = 1, Do = 2, Uo = 3, Fo = 4, Go = 5, go = 0, yo = 1, Ho = 2, Bo = 3, vo = 0, ho = 1, ko = 2, Yo = 3, Vo = 4, Wo = 5, Ko = 6, Xo = 7, xo = 8, qo = 9, wo = 0, jo = 1, Qo = 2, $o = 3, Jo = 4, zo = 5, Zo = 6, bo = 7, tn = 0, en = 1, on = 2, nn = 3, sn = 4, an = 5, cn = 6, An = 7, _n = 8, En = 9, Rn = (t, e) => {
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
], d = (t, e, o) => ({
  items: o(e.options),
  label: e.domainName,
  source: {
    author: r,
    module: O,
    kind: t
  }
}), mn = (t, e) => d(
  W,
  t,
  (o) => $(o, e)
), dn = (t) => d(K, t, J), In = (t) => d(S, t, z), Sn = (t) => d(Y, t, Z), pn = (t) => d(V, t, b), Ln = (t) => d(X, t, tt), c = "{name}", m = "{name} * {value}%", u = "{name} + {value}%", l = "{value}", s = {
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
      format: c,
      options: {
        autoBattle: "自動戦闘",
        guard: "防御",
        substitute: "身代わり",
        preventEscape: "逃走防止"
      }
    },
    collaps: {
      domainName: "消滅エフェクト",
      format: c,
      options: {
        bossCollaps: "ボス崩壊",
        instantCollaps: "即時崩壊",
        noneCollaps: "崩壊なし"
      }
    },
    partyAbility: {
      domainName: "パーティ能力",
      format: c,
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
      format: c
    },
    attackElement: {
      domainName: "攻撃属性",
      format: c
    },
    attackState: {
      domainName: "攻撃ステート",
      format: u
    },
    attackSpeed: {
      domainName: "攻撃速度補正",
      format: l
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: l
    },
    actionPlus: {
      domainName: "行動追加",
      format: m
    },
    attackSkill: {
      domainName: "攻撃スキル",
      format: c
    },
    equipWeaponType: {
      domainName: "装備武器タイプ",
      format: c
    },
    equipArmorType: {
      domainName: "装備防具タイプ",
      format: c
    },
    equipLock: {
      domainName: "装備固定",
      format: c
    },
    equipSeal: {
      domainName: "装備封印",
      format: c
    },
    slotType: {
      domainName: "スロットタイプ",
      format: c
    },
    skillAdd: {
      domainName: "スキル追加",
      format: c
    },
    skillSeal: {
      domainName: "スキルタイプ封印",
      format: c
    },
    skillTypeAdd: {
      domainName: "スキルタイプ追加",
      format: c
    },
    skillTypeSeal: {
      domainName: "スキルタイプ封印",
      format: c
    }
  }
}, k = /^[a-zA-Z0-9]+$/, Pn = (t) => k.test(t) ? t : void 0, M = (t) => typeof t == "string" ? k.test(t) : !1, Mn = (t) => [t.author, t.module, t.kind].join("."), Nn = (t) => M(t.author) && M(t.module) && M(t.kind), S = "params", Y = "xparams", V = "sparams", W = "collaps", K = "partyAbiility", X = "sflag", On = "actors", Cn = "variables", un = "map", ln = "enemy", p = "state", x = "skill", fn = "items", Dn = "weapon", Un = "armor", Fn = "class", et = "common_event", Gn = "troop", gn = "colors", ot = "weaponTypes", nt = "armorTypes", yn = "equipTypes", Hn = "switches", Bn = "skillTypes", st = "elements", f = "{value}", D = "{name}";
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
      f,
      e.value.toString()
    );
    return this.dataSource ? n.replaceAll(
      D,
      o(this.dataSource, e.dataId)
    ) : n;
  }
  requiresValue() {
    return this.format.includes(f);
  }
  requiresName() {
    return this.format.includes(D);
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
  ct(t.elementRate),
  At(t.debuffRate),
  _t(t.stateRate),
  Et(t.stateResist),
  it(t.regularParam),
  Rt(t.extraParam),
  Tt(t.specialParam),
  rt(t.attackElement),
  mt(t.attackState),
  dt(t.attackSpeed),
  It(t.attackTimes),
  St(t.attackSkill),
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
], U = (t, e) => typeof e == "string" ? e : t, a = (t, e, o, n) => {
  const _ = U(e.domainName, o.domainName), R = U(e.format, o.format);
  return new at(t, _, R, n);
}, q = () => ({
  module: h,
  author: r,
  kind: st
}), w = (t) => ({
  module: v,
  author: r,
  kind: t
}), i = (t) => ({
  author: r,
  module: O,
  kind: t
}), j = (t) => ({
  author: r,
  module: h,
  kind: t
}), ct = (t) => a(
  11,
  s.options.elementRate,
  t,
  q()
), At = (t) => a(
  12,
  s.options.debuffRate,
  t,
  i(S)
), _t = (t) => a(
  13,
  s.options.stateRate,
  t,
  i(S)
), Et = (t) => a(
  14,
  s.options.stateResist,
  t,
  w(p)
), it = (t) => a(
  21,
  s.options.regularParam,
  t,
  i(S)
), Rt = (t) => a(
  22,
  s.options.extraParam,
  t,
  i(Y)
), Tt = (t) => a(
  23,
  s.options.specialParam,
  t,
  i(V)
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
), dt = (t) => a(33, s.options.attackSpeed, t), It = (t) => a(34, s.options.attackTimes, t), St = (t) => a(
  35,
  s.options.attackSkill,
  t,
  w(x)
), pt = (t) => a(61, s.options.actionPlus, t), Lt = (t) => a(
  62,
  s.options.specialFlag,
  t,
  i(X)
), Pt = (t) => a(
  63,
  s.options.collaps,
  t,
  i(W)
), Mt = (t) => a(
  64,
  s.options.partyAbility,
  t,
  i(K)
), Nt = (t) => a(
  51,
  s.options.equipWeaponType,
  t,
  j(ot)
), Ot = (t) => a(
  52,
  s.options.equipArmorType,
  t,
  j(nt)
), Ct = (t) => a(53, s.options.equipLock, t), ut = (t) => a(54, s.options.equipSeal, t), lt = (t) => a(43, s.options.skillAdd, t), ft = (t) => a(44, s.options.skillSeal, t), Dt = (t) => a(55, s.options.slotType, t), Ut = (t) => a(
  41,
  s.options.skillTypeAdd,
  t
), Ft = (t) => a(
  42,
  s.options.skillTypeSeal,
  t
), hn = (t = {}) => ({
  name: t.name ?? "",
  id: t.id ?? 0,
  battlerName: t.battlerName ?? "",
  characterName: t.characterName ?? "",
  characterIndex: t.characterIndex ?? 0,
  faceName: t.faceName ?? "",
  faceIndex: t.faceIndex ?? 0,
  traits: [],
  note: t.note ?? "",
  classId: t.classId ?? 0,
  nickname: t.nickname ?? "",
  profile: t.profile ?? "",
  equips: [],
  initialLevel: t.initialLevel ?? 0,
  maxLevel: t.maxLevel ?? 0
}), kn = (t = {}) => ({
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
}), Yn = (t = {}) => ({
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
}, Kn = (t = {}) => ({
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
  price: t.price ?? 0,
  damage: C(t.damage ?? {}),
  wtypeId: t.wtypeId ?? 0
}), Gt = (t = {}) => ({
  dataId: t.dataId ?? 0,
  denominator: t.denominator ?? 0,
  kind: t.kind ?? 0
}), Xn = (t = {}) => ({
  conditionParam1: t.conditionParam1 ?? 0,
  conditionParam2: t.conditionParam2 ?? 0,
  conditionType: t.conditionType ?? 0,
  rating: t.rating ?? 0,
  skillId: t.skillId ?? 0
}), xn = (t = {}) => {
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
}, qn = 0, wn = 1, jn = 2, Qn = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, gt = "{name} + {value1}", F = "{name} {value1}%", N = "{value1}% + {value2}", G = "{name} {value1}ターン", I = "{name}", A = {
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
      format: I
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
      format: I
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: I
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: F
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: I
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: F
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: I
    }
  }
}, $n = 0, yt = 11, Ht = 12, Bt = 13, vt = 21, ht = 22, kt = 31, Yt = 32, Vt = 33, Wt = 34, Jn = 41, Kt = 42, Xt = 43, xt = 44, g = "{value1}", y = "{value2}", H = "{name}";
class qt {
  constructor(e, o, n, _, R) {
    this.codeId = e, this.label = o, this.format = n, this.description = _, this.dataSource = R;
  }
  formatText(e, o) {
    const n = this.format.replaceAll(g, e.value1.toString()).replaceAll(y, e.value2.toString());
    return this.dataSource ? n.replaceAll(
      H,
      o(this.dataSource, e.dataId)
    ) : n;
  }
  requiresValue1() {
    return this.format.includes(g);
  }
  requiresValue2() {
    return this.format.includes(y);
  }
  requiresName() {
    return this.format.includes(H);
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
const zn = (t, e, o) => t.format.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", o), Zn = (t) => [
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
  kind: S
}), P = (t) => ({
  author: r,
  module: v,
  kind: t
}), E = (t, e, o, n) => {
  const _ = o.domainName ?? e.domainName, R = o.format ?? e.format, Q = o.desc ?? e.desc;
  return new qt(t, _, R, Q, n);
}, wt = (t) => E(
  yt,
  A.options.recoverHp,
  t
), jt = (t) => E(
  Ht,
  A.options.recoverMp,
  t
), Qt = (t) => E(Bt, A.options.gainTp, t), bn = (t) => E(Kt, A.options.grow, t), $t = (t) => E(
  vt,
  A.options.addState,
  t,
  P(p)
), Jt = (t) => E(
  ht,
  A.options.removeState,
  t,
  P(p)
), zt = (t) => E(
  kt,
  A.options.addBuff,
  t,
  L()
), Zt = (t) => E(
  Vt,
  A.options.removeBuff,
  t,
  L()
), bt = (t) => E(
  Xt,
  A.options.learnSkill,
  t,
  P(x)
), te = (t) => E(
  Yt,
  A.options.addBuff,
  t,
  L()
), ee = (t) => E(
  Wt,
  A.options.removeDebuff,
  t,
  L()
), oe = (t) => E(
  xt,
  A.options.commonEvent,
  t,
  P(et)
), ts = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, es = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, os = (t = {}) => ({
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
  damage: C(t.damage ?? {}),
  effects: [],
  price: 0
}), ns = (t = {}) => ({
  stypeId: t.stypeId ?? 0,
  requiredWtypeId1: t.requiredWtypeId1 ?? 0,
  requiredWtypeId2: t.requiredWtypeId2 ?? 0,
  animationId: t.animationId ?? 0,
  damage: C(t.damage ?? {}),
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
}, C = (t = {}) => ({
  type: t.type ?? 0,
  elementId: t.elementId ?? 0,
  formula: t.formula ?? "",
  variance: t.variance ?? 0,
  critical: t.critical ?? !1
}), ss = 0, as = 101, cs = 401, As = 102, _s = 402, Es = 103, is = 104, Rs = 105, Ts = 405, rs = 108, ms = 408, ds = 109, Is = 111, Ss = 411, ps = 112, Ls = 113, Ps = 115, Ms = 117, Ns = 118, Os = 119, Cs = 121, us = 122, ls = 123, fs = 124, Ds = 125, Us = 126, Fs = 127, Gs = 128, gs = 129, ys = 132, Hs = 133, Bs = 134, vs = 135, hs = 136, ks = 137, Ys = 138, Vs = 139, Ws = 140, Ks = 201, Xs = 202, xs = 203, qs = 204, ws = 205, js = 206, Qs = 211, $s = 212, Js = 213, zs = 214, Zs = 216, bs = 217, ta = 221, ea = 222, oa = 223, na = 224, sa = 225, aa = 230, ca = 231, Aa = 232, _a = 233, Ea = 234, ia = 235, Ra = 236, Ta = 241, ra = 242, ma = 243, da = 244, Ia = 245, Sa = 246, pa = 249, La = 250, Pa = 251, Ma = 261, Na = 282, Oa = 283, Ca = 284, ua = 285, la = 301, fa = 302, Da = 605, Ua = 303, Fa = 311, Ga = 312, ga = 313, ya = 314, Ha = 315, Ba = 320, va = 321, ha = 322, ka = 323, Ya = 324, Va = 325, Wa = 331, Ka = 332, Xa = 333, xa = 334, qa = 335, wa = 336, ja = 337, Qa = 339, $a = 340, Ja = 351, za = 342, Za = 352, ba = 353, tc = 354, ec = 355, oc = 655, nc = 356, sc = 357, ac = 0, cc = 1, Ac = 2, _c = 3, Ec = 4, ic = 5, Rc = 6, Tc = 7, rc = 8, mc = 9, dc = 10, Ic = 11, Sc = 12, pc = 13, Lc = 14, Pc = 15, Mc = 16, Nc = 17, Oc = 18, Cc = 19, uc = 20, lc = 21, fc = 22, Dc = 23, Uc = 24, Fc = 25, Gc = 26, gc = 27, yc = 28, Hc = 29, Bc = 30, vc = 31, hc = 32, kc = 33, Yc = 34, Vc = 35, Wc = 36, Kc = 37, Xc = 38, xc = 39, qc = 40, wc = 41, jc = 42, Qc = 43, $c = 44, Jc = 45, zc = (t) => ({
  id: t.id ?? 0,
  name: t.name ?? "",
  trigger: t.trigger ?? 0,
  list: t.list ?? [],
  switchId: t.switchId ?? 0
}), Zc = (t) => ({
  id: t.id ?? 0,
  name: t.name ?? "",
  members: t.members ?? [],
  pages: t.pages ?? []
}), bc = (t) => ({
  enemyId: t.enemyId ?? 0,
  x: t.x ?? 0,
  y: t.y ?? 0,
  hidden: t.hidden ?? !1
}), tA = (t) => ({
  actorHp: t.actorHp ?? 0,
  actorId: t.actorId ?? 0,
  enemyValid: t.enemyValid ?? 0,
  switchValid: t.switchValid ?? 0
}), eA = {
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
}, oA = {
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
}, nA = {
  rpg: {
    damage: se,
    data: ne,
    traits: s,
    itemEffect: A
  },
  global: ae
};
export {
  $a as ABORT_BATTLE,
  r as AUTHOR_RMMZ,
  la as BATTLE_PROCESSING,
  ha as CHANGE_ACTOR_IMAGES,
  Gs as CHANGE_ARMORS,
  Oa as CHANGE_BATTLE_BACKGROUND,
  ys as CHANGE_BATTLE_BGM,
  va as CHANGE_CLASS,
  Vs as CHANGE_DEFEAT_ME,
  hs as CHANGE_ENCOUNTER,
  Wa as CHANGE_ENEMY_HP,
  Ka as CHANGE_ENEMY_MP,
  Xa as CHANGE_ENEMY_STATE,
  za as CHANGE_ENEMY_TP,
  Ha as CHANGE_EXP,
  ks as CHANGE_FORMATION_ACCESS,
  Ds as CHANGE_GOLD,
  Fa as CHANGE_HP,
  Us as CHANGE_ITEMS,
  vs as CHANGE_MENU_ACCESS,
  Ga as CHANGE_MP,
  Ba as CHANGE_NAME,
  Ya as CHANGE_NICKNAME,
  Ca as CHANGE_PARALLAX,
  gs as CHANGE_PARTY_MEMBER,
  Zs as CHANGE_PLAYER_FOLLOWERS,
  Va as CHANGE_PROFILE,
  Bs as CHANGE_SAVE_ACCESS,
  Na as CHANGE_TILESET,
  ga as CHANGE_TP,
  Qs as CHANGE_TRANSPARENCY,
  Ws as CHANGE_VEHICLE_BGM,
  ka as CHANGE_VEHICLE_IMAGE,
  Hs as CHANGE_VICTORY_ME,
  Fs as CHANGE_WEAPONS,
  Ys as CHANGE_WINDOW_COLOR,
  Oo as COLLAPS_BOSS,
  Co as COLLAPS_INSTANT,
  uo as COLLAPS_NONE,
  No as COLLAPS_NORMAL,
  rs as COMMENT,
  ms as COMMENT_BODY,
  Ms as COMMON_EVENT,
  Is as CONDITIONAL_BRANCH,
  Ss as CONDITIONAL_BRANCH_ELSE,
  ls as CONTROL_SELF_SWITCH,
  Cs as CONTROL_SWITCHES,
  fs as CONTROL_TIMER,
  us as CONTROL_VARIABLES,
  se as DEFAULT_DAMAGE_LABELS,
  ae as DEFAULT_GLOBAL_LABELS,
  Qn as DEFAULT_ITEM_LABELS,
  ts as DEFAULT_SKILL_LABELS,
  eA as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  es as DEFAULT_USABLE_ITEM_LABELS,
  kt as EFFECT_ADD_BUFF,
  Yt as EFFECT_ADD_DEBUFF,
  vt as EFFECT_ADD_STATE,
  xt as EFFECT_COMMON_EVENT,
  Bt as EFFECT_GAIN_TP,
  Kt as EFFECT_GROW,
  Xt as EFFECT_LEARN_SKILL,
  yt as EFFECT_RECOVER_HP,
  Ht as EFFECT_RECOVER_MP,
  Vt as EFFECT_REMOVE_BUFF,
  Wt as EFFECT_REMOVE_DEBUFF,
  ht as EFFECT_REMOVE_STATE,
  Jn as EFFECT_SPECIAL,
  qa as ENEMY_APPEAR,
  xa as ENEMY_RECOVER_ALL,
  wa as ENEMY_TRANSFORM,
  zs as ERASE_EVENT,
  ia as ERASE_PICTURE,
  Ps as EXIT_EVENT_PROCESSING,
  Yo as EXTRA_PARAM_CEV,
  Ko as EXTRA_PARAM_CNT,
  ko as EXTRA_PARAM_CRI,
  ho as EXTRA_PARAM_EVA,
  vo as EXTRA_PARAM_HIT,
  Xo as EXTRA_PARAM_HRG,
  Vo as EXTRA_PARAM_MEV,
  Wo as EXTRA_PARAM_MRF,
  xo as EXTRA_PARAM_MRG,
  qo as EXTRA_PARAM_TRG,
  ea as FADEIN_SCREEN,
  ra as FADEOUT_BGM,
  Sa as FADEOUT_BGS,
  ta as FADEOUT_SCREEN,
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
  na as FLASH_SCREEN,
  Ye as FOLDER_AUDIO,
  ce as FOLDER_AUDIO_BGM,
  Ee as FOLDER_AUDIO_BGS,
  _e as FOLDER_AUDIO_ME,
  Ae as FOLDER_AUDIO_SE,
  he as FOLDER_DATA,
  ke as FOLDER_IMG,
  ie as FOLDER_IMG_BATTLEBACK1,
  Re as FOLDER_IMG_BATTLEBACK2,
  Te as FOLDER_IMG_CHACTERS,
  re as FOLDER_IMG_ENEMIES,
  me as FOLDER_IMG_FACES,
  de as FOLDER_IMG_PARALLACES,
  Ie as FOLDER_IMG_PICTURES,
  Se as FOLDER_IMG_SV_ACTORS,
  pe as FOLDER_IMG_SV_ENEMIES,
  Le as FOLDER_IMG_SYSTEM,
  Pe as FOLDER_IMG_TILESETS,
  Me as FOLDER_IMG_TITLES1,
  Ne as FOLDER_IMG_TITLES2,
  Ve as FOLDER_JS,
  Qa as FORCE_ACTION,
  ba as GAME_OVER,
  bs as GATHER_FOLLOWERS,
  ua as GET_LOCATION_INFO,
  js as GET_ONOFF_VEHICLE,
  qn as HITTYPE_CERTAIN,
  jn as HITTYPE_MAGICAL,
  wn as HITTYPE_PHYSICAL,
  Es as INPUT_NUMBER,
  Ns as LABEL,
  Wn as LABELS_DATA_WEAPON,
  Os as LABEL_JUMP,
  nA as LABEL_REGISTRY_JP,
  ne as LABEL_SET_DATA,
  A as LABEL_SET_ITEM_EFFECT,
  s as LABEL_SET_TRAIT,
  ps as LOOP,
  Ls as LOOP_BREAK,
  v as MODULE_DATA,
  h as MODULE_SYSTEM,
  O as MODULE_TRAIT,
  Aa as MOVE_PICTURE,
  oA as MockSystemLabelDataTypes,
  Ua as NAME_INPUT_PROCESSING,
  ss as NO_OPERATION,
  Ja as OPEN_MENU_SCREEN,
  Za as OPEN_SAVE_SCREEN,
  Do as PARTY_ABILITY_CANCEL_SURPRISE,
  Go as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  lo as PARTY_ABILITY_ENCOUNTER_HALF,
  fo as PARTY_ABILITY_ENCOUNTER_NONE,
  Fo as PARTY_ABILITY_GOLD_DOUBLE,
  Uo as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Ta as PLAY_BGM,
  Ia as PLAY_BGS,
  pa as PLAY_ME,
  Ma as PLAY_MOVIE,
  La as PLAY_SE,
  nc as PLUGIN_COMMAND_MV,
  sc as PLUGIN_COMMAND_MZ,
  ya as RECOVER_ALL,
  Zo as REGULAR_PARAM_AGI,
  Qo as REGULAR_PARAM_ATK,
  $o as REGULAR_PARAM_DEF,
  bo as REGULAR_PARAM_LUK,
  Jo as REGULAR_PARAM_MATK,
  wo as REGULAR_PARAM_MAX_HP,
  jo as REGULAR_PARAM_MAX_MP,
  zo as REGULAR_PARAM_MDEF,
  da as RESUME_BGM,
  tc as RETURN_TO_TITLE_SCREEN,
  _a as ROTATE_PICTURE,
  Qc as ROUTE_CHANGE_BLEND_MODE,
  Bc as ROUTE_CHANGE_FREQ,
  wc as ROUTE_CHANGE_IMAGE,
  jc as ROUTE_CHANGE_OPACITY,
  Hc as ROUTE_CHANGE_SPEED,
  Wc as ROUTE_DIR_FIX_OFF,
  Vc as ROUTE_DIR_FIX_ON,
  ac as ROUTE_END,
  Lc as ROUTE_JUMP,
  Ic as ROUTE_MOVE_AWAY,
  pc as ROUTE_MOVE_BACKWARD,
  cc as ROUTE_MOVE_DOWN,
  Sc as ROUTE_MOVE_FORWARD,
  Ac as ROUTE_MOVE_LEFT,
  ic as ROUTE_MOVE_LOWER_L,
  Rc as ROUTE_MOVE_LOWER_R,
  mc as ROUTE_MOVE_RANDOM,
  _c as ROUTE_MOVE_RIGHT,
  dc as ROUTE_MOVE_TOWARD,
  Ec as ROUTE_MOVE_UP,
  Tc as ROUTE_MOVE_UPPER_L,
  rc as ROUTE_MOVE_UPPER_R,
  $c as ROUTE_PLAY_SE,
  Jc as ROUTE_SCRIPT,
  Yc as ROUTE_STEP_ANIME_OFF,
  kc as ROUTE_STEP_ANIME_ON,
  yc as ROUTE_SWITCH_OFF,
  gc as ROUTE_SWITCH_ON,
  Xc as ROUTE_THROUGH_OFF,
  Kc as ROUTE_THROUGH_ON,
  qc as ROUTE_TRANSPARENT_OFF,
  xc as ROUTE_TRANSPARENT_ON,
  fc as ROUTE_TURN_180D,
  lc as ROUTE_TURN_90D_L,
  uc as ROUTE_TURN_90D_R,
  Dc as ROUTE_TURN_90D_R_L,
  Gc as ROUTE_TURN_AWAY,
  Mc as ROUTE_TURN_DOWN,
  Nc as ROUTE_TURN_LEFT,
  Uc as ROUTE_TURN_RANDOM,
  Oc as ROUTE_TURN_RIGHT,
  Fc as ROUTE_TURN_TOWARD,
  Cc as ROUTE_TURN_UP,
  Pc as ROUTE_WAIT,
  hc as ROUTE_WALK_ANIME_OFF,
  vc as ROUTE_WALK_ANIME_ON,
  ma as SAVE_BGM,
  ec as SCRIPT_EVAL,
  oc as SCRIPT_EVAL_BODY,
  qs as SCROLL_MAP,
  is as SELECT_ITEM,
  xs as SET_EVENT_LOCATION,
  ws as SET_MOVEMENT_ROUTE,
  Xs as SET_VEHICLE_LOCATION,
  Ra as SET_WEATHER_EFFECT,
  sa as SHAKE_SCREEN,
  fa as SHOP_PROCESSING,
  Da as SHOP_PROCESSING_BODY,
  $s as SHOW_ANIMATION,
  Js as SHOW_BALLOON_ICON,
  ja as SHOW_BATTLE_ANIMATION,
  As as SHOW_CHOICES,
  _s as SHOW_CHOICES_ITEM,
  as as SHOW_MESSAGE,
  cs as SHOW_MESSAGE_BODY,
  ca as SHOW_PICTURE,
  Rs as SHOW_SCROLLING_TEXT,
  Ts as SHOW_SCROLLING_TEXT_BODY,
  ds as SKIP,
  $n as SPECIAL_EFFECT_ESCAPE,
  En as SPECIAL_PARAM_EXR,
  _n as SPECIAL_PARAM_FDR,
  en as SPECIAL_PARAM_GRD,
  sn as SPECIAL_PARAM_MCR,
  An as SPECIAL_PARAM_MDR,
  cn as SPECIAL_PARAM_PDR,
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
  x as SRC_DATA_SKILL,
  p as SRC_DATA_STATE,
  Cn as SRC_DATA_VARIABLE,
  Dn as SRC_DATA_WEAPON,
  st as SRC_ELEMENTS,
  yn as SRC_EQUIP_TYPES,
  Y as SRC_PARAMS_EXTRA,
  S as SRC_PARAMS_REGULAR,
  V as SRC_PARAMS_SPECIAL,
  Bn as SRC_SKILL_TYPES,
  Hn as SRC_SWITCHES,
  W as SRC_TRAIT_COLLAPS,
  K as SRC_TRAIT_PARTY_ABILITY,
  X as SRC_TRAIT_SPECIAL_FLAG,
  Gn as SRC_TROOP,
  ot as SRC_WEAPON_TYPES,
  Pa as STOP_SE,
  Ea as TINT_PICTURE,
  oa as TINT_SCREEN,
  po as TRAIT_ACTION_PLUS,
  no as TRAIT_ATTACK_ELEMENT,
  Ao as TRAIT_ATTACK_SKILL,
  ao as TRAIT_ATTACK_SPEED,
  so as TRAIT_ATTACK_STATE,
  co as TRAIT_ATTACK_TIMES,
  Po as TRAIT_COLLAPSE_TYPE,
  ze as TRAIT_DEBUFF_RATE,
  Je as TRAIT_ELEMENT_RATE,
  ro as TRAIT_EQUIP_ARMOR_TYPE,
  mo as TRAIT_EQUIP_LOCK,
  Io as TRAIT_EQUIP_SEAL,
  To as TRAIT_EQUIP_WEAPON_TYPE,
  to as TRAIT_PARAM,
  Mo as TRAIT_PARTY_ABILITY,
  io as TRAIT_SKILL_ADD,
  Ro as TRAIT_SKILL_SEAL,
  _o as TRAIT_SKILL_TYPE_ADD,
  Eo as TRAIT_SKILL_TYPE_SEAL,
  So as TRAIT_SLOT_TYPE,
  oo as TRAIT_SPARAM,
  Lo as TRAIT_SPECIAL_FLAG,
  Ze as TRAIT_STATE_RATE,
  be as TRAIT_STATE_RESIST,
  eo as TRAIT_XPARAM,
  Ks as TRANSFER_PLAYER,
  at as TraitDescriptor,
  aa as WAIT,
  mn as buildCollapsSource,
  Sn as buildExtraParamSource,
  dn as buildPartyAbilitySource,
  In as buildRegularParamSource,
  Ln as buildSpecialFlagSource,
  pn as buildSpecialParamSource,
  zt as defineEffectAddBuff,
  te as defineEffectAddDebuff,
  $t as defineEffectAddState,
  oe as defineEffectCommonEvent,
  Qt as defineEffectGainTp,
  bn as defineEffectGrow,
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
  zn as formatItemEffectText,
  Qe as getArmorTypes,
  xe as getElementTypes,
  qe as getEquipTypes,
  $e as getParamNames,
  we as getSkillTypes,
  Xe as getVariableNames,
  je as getWeaponTypes,
  Nn as isValid,
  Mn as joinSourceKey,
  hn as makeActor,
  kn as makeArmor,
  Yn as makeClass,
  zc as makeCommonEvent,
  C as makeDamage,
  Gt as makeDropItem,
  xn as makeEnemy,
  Xn as makeEnemyAction,
  os as makeItem,
  ns as makeSkill,
  Vn as makeState,
  Zc as makeTroop,
  tA as makeTroopEventConditions,
  bc as makeTroopMember,
  Kn as makeWeapon,
  We as mergeDomainLabel,
  Ke as mergeNestedPrimitiveRecords,
  B as mergeWithDefaults,
  Rn as regularParamName,
  Zn as resolveItemEffectLabels,
  vn as resolveTraitLabels,
  Pn as sanitizeKey,
  rn as specialParamName,
  M as testUnknonwKey,
  d as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
