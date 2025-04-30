const ct = "bgm", At = "se", _t = "me", Et = "bgs", it = "battlebacks1", rt = "battlebacks2", Rt = "characters", Tt = "enemies", mt = "faces", dt = "parallaxes", It = "pictures", St = "sv_actors", pt = "sv_enemies", Lt = "system", Pt = "tilesets", Nt = "titles1", Mt = "titles2", Ot = "System.json", lt = "Actors.json", ut = "Classes.json", Ct = "Skills.json", ft = "Items.json", Dt = "Weapons.json", Ut = "Armors.json", Ft = "Enemies.json", gt = "Troops.json", Gt = "States.json", yt = "Animations.json", Ht = "Tilesets.json", ht = "CommonEvents.json", vt = "MapInfos.json", Bt = "data", kt = "img", Yt = "audio", Vt = "js", h = (e, t) => {
  const o = { ...e };
  for (const n in e) {
    const _ = t[n];
    typeof _ == "string" && (o[n] = _);
  }
  return o;
}, Wt = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: h(e.options, t.options ?? {})
}), xt = (e, t) => {
  const o = {};
  for (const n in e) {
    const _ = e[n], r = t[n] ?? {};
    o[n] = h(
      _,
      r
    );
  }
  return o;
}, R = (e, t) => ({
  name: e,
  id: t
}), Xt = (e) => e.variables.map(R), Kt = (e) => e.elements.map(R), qt = (e) => e.equipTypes.map(R), wt = (e) => e.skillTypes.map(R), jt = (e) => e.weaponTypes.map(R), bt = (e) => e.armorTypes.map(R), Qt = (e) => e.terms.params.map(R), T = "rmmz", O = "trait", v = "data", B = "system", $t = 11, Jt = 12, zt = 13, Zt = 14, eo = 21, to = 22, oo = 23, no = 31, so = 32, ao = 33, co = 34, Ao = 35, _o = 41, Eo = 42, io = 43, ro = 44, Ro = 51, To = 52, mo = 53, Io = 54, So = 55, po = 61, Lo = 62, Po = 63, No = 64, Mo = 0, Oo = 1, lo = 2, uo = 3, Co = 0, fo = 1, Do = 2, Uo = 3, Fo = 4, go = 5, Go = 0, yo = 1, Ho = 2, ho = 3, vo = 0, Bo = 1, ko = 2, Yo = 3, Vo = 4, Wo = 5, xo = 6, Xo = 7, Ko = 8, qo = 9, wo = 0, jo = 1, bo = 2, Qo = 3, $o = 4, Jo = 5, zo = 6, Zo = 7, en = 0, tn = 1, on = 2, nn = 3, sn = 4, an = 5, cn = 6, An = 7, _n = 8, En = 9, rn = (e, t) => {
  switch (e) {
    case 0:
      return t.maxHp;
    case 1:
      return t.maxMp;
    case 2:
      return t.atk;
    case 3:
      return t.def;
    case 4:
      return t.matk;
    case 5:
      return t.mdef;
    case 6:
      return t.agi;
    case 7:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, Rn = (e, t) => {
  switch (e) {
    case 3:
      return t.criticalEvasionRate;
    case 1:
      return t.evasionRate;
    case 6:
      return t.counterAttackRate;
    case 2:
      return t.criticalRate;
    case 0:
      return t.hitRate;
    case 7:
      return t.hpRegenerationRate;
    case 4:
      return t.magicEvasionRate;
    case 5:
      return t.magicReflectionRate;
    case 8:
      return t.mpRegenerationRate;
    case 9:
      return t.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, Tn = (e, t) => {
  switch (e) {
    case 9:
      return t.experienceRate;
    case 0:
      return t.targetRate;
    case 8:
      return t.floorDamageRate;
    case 1:
      return t.guradEffectRate;
    case 4:
      return t.mpCostRate;
    case 5:
      return t.tpChargeRate;
    case 6:
      return t.physicalDamageRate;
    case 7:
      return t.magicDamageRate;
    case 3:
      return t.pharmacology;
    case 2:
      return t.recoveryEffectRate;
  }
  return `?sparams[${e}]`;
}, Q = (e, t) => [
  {
    id: 0,
    name: t.normal
  },
  {
    id: 1,
    name: e.bossCollaps
  },
  {
    id: 2,
    name: e.instantCollaps
  },
  {
    id: 3,
    name: e.noneCollaps
  }
], $ = (e) => [
  {
    id: 0,
    name: e.encounterHalf
  },
  {
    id: 1,
    name: e.encounterNone
  },
  {
    id: 2,
    name: e.cancelSurprise
  },
  {
    id: 3,
    name: e.raisePreemptive
  },
  {
    id: 4,
    name: e.goldDouble
  },
  {
    id: 5,
    name: e.dropItemDouble
  }
], J = (e) => [
  { id: 0, name: e.maxHp },
  { id: 1, name: e.maxMp },
  { id: 2, name: e.atk },
  { id: 3, name: e.def },
  { id: 4, name: e.matk },
  { id: 5, name: e.mdef },
  { id: 6, name: e.agi },
  { id: 7, name: e.luk }
], z = (e) => [
  {
    id: 0,
    name: e.hitRate
  },
  {
    id: 1,
    name: e.evasionRate
  },
  {
    id: 2,
    name: e.criticalRate
  },
  {
    id: 3,
    name: e.criticalEvasionRate
  },
  {
    id: 4,
    name: e.magicEvasionRate
  },
  {
    id: 5,
    name: e.magicReflectionRate
  },
  {
    id: 6,
    name: e.counterAttackRate
  },
  {
    id: 7,
    name: e.hpRegenerationRate
  },
  {
    id: 8,
    name: e.mpRegenerationRate
  },
  {
    id: 9,
    name: e.tpRegenerationRate
  }
], Z = (e) => [
  {
    id: 0,
    name: e.targetRate
  },
  {
    id: 1,
    name: e.guradEffectRate
  },
  {
    id: 2,
    name: e.recoveryEffectRate
  },
  {
    id: 3,
    name: e.pharmacology
  },
  {
    id: 4,
    name: e.mpCostRate
  },
  {
    id: 5,
    name: e.tpChargeRate
  },
  {
    id: 6,
    name: e.physicalDamageRate
  },
  {
    id: 7,
    name: e.magicDamageRate
  },
  {
    id: 8,
    name: e.floorDamageRate
  },
  {
    id: 9,
    name: e.experienceRate
  }
], ee = (e) => [
  {
    id: 0,
    name: e.autoBattle
  },
  {
    id: 1,
    name: e.guard
  },
  {
    id: 2,
    name: e.substitute
  },
  {
    id: 3,
    name: e.preventEscape
  }
], d = (e, t, o) => ({
  items: o(t.options),
  label: t.domainName,
  source: {
    author: T,
    module: O,
    kind: e
  }
}), mn = (e, t) => d(
  W,
  e,
  (o) => Q(o, t)
), dn = (e) => d(x, e, $), In = (e) => d(S, e, J), Sn = (e) => d(Y, e, z), pn = (e) => d(V, e, Z), Ln = (e) => d(X, e, ee), c = "{name}", m = "{name} * {value}%", u = "{name} + {value}%", C = "{value}", s = {
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
      format: C
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: C
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
}, k = /^[a-zA-Z0-9]+$/, Pn = (e) => k.test(e) ? e : void 0, N = (e) => typeof e == "string" ? k.test(e) : !1, Nn = (e) => [e.author, e.module, e.kind].join("."), Mn = (e) => N(e.author) && N(e.module) && N(e.kind), S = "params", Y = "xparams", V = "sparams", W = "collaps", x = "partyAbiility", X = "sflag", On = "actors", ln = "variables", un = "map", Cn = "enemy", p = "state", K = "skill", fn = "items", Dn = "weapon", Un = "armor", Fn = "class", te = "common_event", gn = "troop", Gn = "colors", oe = "weaponTypes", ne = "armorTypes", yn = "equipTypes", Hn = "switches", hn = "skillTypes", se = "elements", f = "{value}", D = "{name}";
class ae {
  constructor(t, o, n, _) {
    this.code = t, this.label = o, this.format = n, this.dataSource = _;
  }
  match(t) {
    return this.code === t.code;
  }
  testTraitCode(t) {
    this.match(t);
  }
  formatText(t, o) {
    this.testTraitCode(t);
    const n = this.format.replaceAll(
      f,
      t.value.toString()
    );
    return this.dataSource ? n.replaceAll(
      D,
      o(this.dataSource, t.dataId)
    ) : n;
  }
  requiresValue() {
    return this.format.includes(f);
  }
  requiresName() {
    return this.format.includes(D);
  }
  invalidPlaceHolder() {
    const t = ["value", "name"];
    return [
      ...this.format.matchAll(/\{([^}]+)\}/g)
    ].map((n) => n[1]).filter((n) => !t.includes(n));
  }
  isFormatValidForDataSource() {
    return !(this.dataSource && !this.requiresName());
  }
  diagnose() {
    const t = !this.isFormatValidForDataSource(), o = this.requiresName() && !this.dataSource, n = this.invalidPlaceHolder();
    return {
      code: this.code,
      label: this.label,
      format: this.format,
      hasError: t || o || n.length > 0,
      missingDataSourceError: t,
      sourceMismatchError: o,
      invalidPlaceHolders: n
    };
  }
}
const vn = (e) => [
  ce(e.elementRate),
  Ae(e.debuffRate),
  _e(e.stateRate),
  Ee(e.stateResist),
  ie(e.regularParam),
  re(e.extraParam),
  Re(e.specialParam),
  Te(e.attackElement),
  me(e.attackState),
  de(e.attackSpeed),
  Ie(e.attackTimes),
  Se(e.attackSkill),
  Ue(e.skillTypeAdd),
  Fe(e.skillTypeSeal),
  Ce(e.skillAdd),
  fe(e.skillSeal),
  Me(e.equipWeaponType),
  Oe(e.equipArmorType),
  le(e.equipLock),
  ue(e.equipSeal),
  De(e.slotType),
  pe(e.actionPlus),
  Le(e.specialFlag),
  Pe(e.collaps),
  Ne(e.partyAbility)
], U = (e, t) => typeof t == "string" ? t : e, a = (e, t, o, n) => {
  const _ = U(t.domainName, o.domainName), r = U(t.format, o.format);
  return new ae(e, _, r, n);
}, q = () => ({
  module: B,
  author: T,
  kind: se
}), w = (e) => ({
  module: v,
  author: T,
  kind: e
}), i = (e) => ({
  author: T,
  module: O,
  kind: e
}), j = (e) => ({
  author: T,
  module: B,
  kind: e
}), ce = (e) => a(
  11,
  s.options.elementRate,
  e,
  q()
), Ae = (e) => a(
  12,
  s.options.debuffRate,
  e,
  i(S)
), _e = (e) => a(
  13,
  s.options.stateRate,
  e,
  i(S)
), Ee = (e) => a(
  14,
  s.options.stateResist,
  e,
  w(p)
), ie = (e) => a(
  21,
  s.options.regularParam,
  e,
  i(S)
), re = (e) => a(
  22,
  s.options.extraParam,
  e,
  i(Y)
), Re = (e) => a(
  23,
  s.options.specialParam,
  e,
  i(V)
), Te = (e) => a(
  31,
  s.options.attackElement,
  e,
  q()
), me = (e) => a(
  32,
  s.options.attackState,
  e,
  i(p)
), de = (e) => a(33, s.options.attackSpeed, e), Ie = (e) => a(34, s.options.attackTimes, e), Se = (e) => a(
  35,
  s.options.attackSkill,
  e,
  w(K)
), pe = (e) => a(61, s.options.actionPlus, e), Le = (e) => a(
  62,
  s.options.specialFlag,
  e,
  i(X)
), Pe = (e) => a(
  63,
  s.options.collaps,
  e,
  i(W)
), Ne = (e) => a(
  64,
  s.options.partyAbility,
  e,
  i(x)
), Me = (e) => a(
  51,
  s.options.equipWeaponType,
  e,
  j(oe)
), Oe = (e) => a(
  52,
  s.options.equipArmorType,
  e,
  j(ne)
), le = (e) => a(53, s.options.equipLock, e), ue = (e) => a(54, s.options.equipSeal, e), Ce = (e) => a(43, s.options.skillAdd, e), fe = (e) => a(44, s.options.skillSeal, e), De = (e) => a(55, s.options.slotType, e), Ue = (e) => a(
  41,
  s.options.skillTypeAdd,
  e
), Fe = (e) => a(
  42,
  s.options.skillTypeSeal,
  e
), Bn = (e = {}) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  battlerName: e.battlerName ?? "",
  characterName: e.characterName ?? "",
  characterIndex: e.characterIndex ?? 0,
  faceName: e.faceName ?? "",
  faceIndex: e.faceIndex ?? 0,
  traits: [],
  note: e.note ?? "",
  classId: e.classId ?? 0,
  nickname: e.nickname ?? "",
  profile: e.profile ?? "",
  equips: [],
  initialLevel: e.initialLevel ?? 0,
  maxLevel: e.maxLevel ?? 0
}), kn = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  iconIndex: e.iconIndex ?? 0,
  description: e.description ?? "",
  traits: e.traits ?? [],
  note: e.note ?? "",
  params: e.params ?? [
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
  etypeId: e.etypeId ?? 0,
  price: e.price ?? 0
}), Yn = (e = {}) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  traits: [],
  note: e.note ?? "",
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
  learnings: e.learnings ?? [],
  expParams: e.expParams ?? []
}), Vn = (e = {}) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  iconIndex: e.iconIndex ?? 0,
  message1: e.message1 ?? "",
  message2: e.message2 ?? "",
  message3: e.message3 ?? "",
  message4: e.message4 ?? "",
  traits: [],
  note: e.note ?? "",
  restriction: e.restriction ?? 0,
  priority: e.priority ?? 0,
  motion: e.motion ?? 0,
  overlay: e.overlay ?? 0,
  removeAtBattleEnd: e.removeAtBattleEnd ?? !1,
  removeByRestriction: e.removeByRestriction ?? !1,
  autoRemovalTiming: e.autoRemovalTiming ?? 0,
  minTurns: e.minTurns ?? 0,
  maxTurns: e.maxTurns ?? 0,
  removeByDamage: e.removeByDamage ?? !1,
  chanceByDamage: e.chanceByDamage ?? 0,
  removeByWalking: e.removeByWalking ?? !1,
  stepsToRemove: e.stepsToRemove ?? 0
}), Wn = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, xn = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  iconIndex: e.iconIndex ?? 0,
  description: e.description ?? "",
  traits: e.traits ?? [],
  note: e.note ?? "",
  params: e.params ?? [
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
  etypeId: e.etypeId ?? 0,
  price: e.price ?? 0,
  damage: l(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), ge = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), Xn = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Kn = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => ge())) ?? [],
    exp: e.exp ?? 0,
    gold: e.gold ?? 0,
    traits: [],
    note: e.note ?? "",
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
}, qn = 0, wn = 1, jn = 2, bn = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Ge = "{name} + {value1}", F = "{name} {value1}%", M = "{value1}% + {value2}", g = "{name} {value1}ターン", I = "{name}", A = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: g
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: g
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: M
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: Ge
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: I
    },
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: M
    },
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: M
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
}, Qn = 0, ye = 11, He = 12, he = 13, ve = 21, Be = 22, ke = 31, Ye = 32, Ve = 33, We = 34, $n = 41, xe = 42, Xe = 43, Ke = 44, G = "{value1}", y = "{value2}", H = "{name}";
class qe {
  constructor(t, o, n, _, r) {
    this.codeId = t, this.label = o, this.format = n, this.description = _, this.dataSource = r;
  }
  formatText(t, o) {
    const n = this.format.replaceAll(G, t.value1.toString()).replaceAll(y, t.value2.toString());
    return this.dataSource ? n.replaceAll(
      H,
      o(this.dataSource, t.dataId)
    ) : n;
  }
  requiresValue1() {
    return this.format.includes(G);
  }
  requiresValue2() {
    return this.format.includes(y);
  }
  requiresName() {
    return this.format.includes(H);
  }
  invalidPlaceHolder() {
    const t = ["value1", "value2", "name"];
    return [
      ...this.format.matchAll(/\{([^}]+)\}/g)
    ].map((n) => n[1]).filter((n) => !t.includes(n));
  }
  isFormatValidForDataSource() {
    return !(this.dataSource && !this.requiresName());
  }
}
const Jn = (e, t, o) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", o), zn = (e) => [
  we(e.options.recoverHp),
  je(e.options.recoverMp),
  be(e.options.gainTp),
  Qe(e.options.addState),
  $e(e.options.removeState),
  Je(e.options.addBuff),
  et(e.options.addDebuff),
  ze(e.options.removeBuff),
  tt(e.options.removeDebuff),
  Ze(e.options.learnSkill),
  ot(e.options.commonEvent)
], L = () => ({
  author: T,
  module: O,
  kind: S
}), P = (e) => ({
  author: T,
  module: v,
  kind: e
}), E = (e, t, o, n) => {
  const _ = o.domainName ?? t.domainName, r = o.format ?? t.format, b = o.desc ?? t.desc;
  return new qe(e, _, r, b, n);
}, we = (e) => E(
  ye,
  A.options.recoverHp,
  e
), je = (e) => E(
  He,
  A.options.recoverMp,
  e
), be = (e) => E(he, A.options.gainTp, e), Zn = (e) => E(xe, A.options.grow, e), Qe = (e) => E(
  ve,
  A.options.addState,
  e,
  P(p)
), $e = (e) => E(
  Be,
  A.options.removeState,
  e,
  P(p)
), Je = (e) => E(
  ke,
  A.options.addBuff,
  e,
  L()
), ze = (e) => E(
  Ve,
  A.options.removeBuff,
  e,
  L()
), Ze = (e) => E(
  Xe,
  A.options.learnSkill,
  e,
  P(K)
), et = (e) => E(
  Ye,
  A.options.addBuff,
  e,
  L()
), tt = (e) => E(
  We,
  A.options.removeDebuff,
  e,
  L()
), ot = (e) => E(
  Ke,
  A.options.commonEvent,
  e,
  P(te)
), es = {
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
}, os = (e = {}) => ({
  animationId: e.animationId ?? 0,
  id: e.id ?? 0,
  name: e.name ?? "",
  iconIndex: e.iconIndex ?? 0,
  description: e.description ?? "",
  note: e.note ?? "",
  consumable: e.consumable ?? !1,
  scope: e.scope ?? 0,
  occasion: e.occasion ?? 0,
  speed: e.speed ?? 0,
  successRate: e.successRate ?? 0,
  repeats: e.repeats ?? 0,
  tpGain: e.tpGain ?? 0,
  hitType: e.hitType ?? 0,
  damage: l(e.damage ?? {}),
  effects: [],
  price: 0
}), ns = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: l(e.damage ?? {}),
  description: e.description ?? "",
  effects: [],
  hitType: e.hitType ?? 0,
  iconIndex: e.iconIndex ?? 0,
  id: e.id ?? 0,
  message1: e.message1 ?? "",
  message2: e.message2 ?? "",
  messageType: e.messageType ?? 0,
  name: e.name ?? "",
  note: e.note ?? "",
  mpCost: e.mpCost ?? 0,
  occasion: e.occasion ?? 0,
  repeats: e.repeats ?? 0,
  scope: e.scope ?? 0,
  speed: e.speed ?? 0,
  successRate: e.successRate ?? 0,
  tpCost: e.tpCost ?? 0,
  tpGain: e.tpGain ?? 0
}), nt = {
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
}, st = {
  domainName: "ダメージ",
  options: {}
}, l = (e = {}) => ({
  type: e.type ?? 0,
  elementId: e.elementId ?? 0,
  formula: e.formula ?? "",
  variance: e.variance ?? 0,
  critical: e.critical ?? !1
}), ss = 0, as = 101, cs = 401, As = 102, _s = 402, Es = 103, is = 104, rs = 105, Rs = 405, Ts = 108, ms = 408, ds = 109, Is = 111, Ss = 411, ps = 112, Ls = 113, Ps = 115, Ns = 117, Ms = 118, Os = 119, ls = 121, us = 122, Cs = 123, fs = 124, Ds = 125, Us = 126, Fs = 127, gs = 128, Gs = 129, ys = 132, Hs = 133, hs = 134, vs = 135, Bs = 136, ks = 137, Ys = 138, Vs = 139, Ws = 140, xs = 201, Xs = 202, Ks = 203, qs = 204, ws = 205, js = 206, bs = 211, Qs = 212, $s = 213, Js = 214, zs = 216, Zs = 217, ea = 221, ta = 222, oa = 223, na = 224, sa = 225, aa = 230, ca = 231, Aa = 232, _a = 233, Ea = 234, ia = 235, ra = 236, Ra = 241, Ta = 242, ma = 243, da = 244, Ia = 245, Sa = 246, pa = 249, La = 250, Pa = 251, Na = 261, Ma = 282, Oa = 283, la = 284, ua = 285, Ca = 301, fa = 302, Da = 605, Ua = 303, Fa = 311, ga = 312, Ga = 313, ya = 314, Ha = 315, ha = 320, va = 321, Ba = 322, ka = 323, Ya = 324, Va = 325, Wa = 331, xa = 332, Xa = 333, Ka = 334, qa = 335, wa = 336, ja = 337, ba = 339, Qa = 340, $a = 351, Ja = 342, za = 352, Za = 353, ec = 354, tc = 355, oc = 655, nc = 356, sc = 357, ac = 0, cc = 1, Ac = 2, _c = 3, Ec = 4, ic = 5, rc = 6, Rc = 7, Tc = 8, mc = 9, dc = 10, Ic = 11, Sc = 12, pc = 13, Lc = 14, Pc = 15, Nc = 16, Mc = 17, Oc = 18, lc = 19, uc = 20, Cc = 21, fc = 22, Dc = 23, Uc = 24, Fc = 25, gc = 26, Gc = 27, yc = 28, Hc = 29, hc = 30, vc = 31, Bc = 32, kc = 33, Yc = 34, Vc = 35, Wc = 36, xc = 37, Xc = 38, Kc = 39, qc = 40, wc = 41, jc = 42, bc = 43, Qc = 44, $c = 45, Jc = (e = {}) => ({
  autoplayBgm: e.autoplayBgm ?? !1,
  autoplayBgs: e.autoplayBgs ?? !1,
  battleback1Name: e.battleback1Name ?? "",
  battleback2Name: e.battleback2Name ?? "",
  bgm: e.bgm ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  bgs: e.bgs ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  disableDashing: e.disableDashing ?? !1,
  displayName: e.displayName ?? "",
  encounterList: e.encounterList ?? [],
  events: e.events ?? [],
  height: e.height ?? 0,
  note: e.note ?? "",
  parallaxLoopX: e.parallaxLoopX ?? !1,
  parallaxLoopY: e.parallaxLoopY ?? !1,
  parallaxName: e.parallaxName ?? "",
  parallaxShow: e.parallaxShow ?? !1,
  parallaxSx: e.parallaxSx ?? 0,
  parallaxSy: e.parallaxSy ?? 0,
  width: e.width ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  data: e.data ?? []
}), zc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), Zc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), eA = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), tA = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), oA = {
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
}, nA = {
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
}, at = {
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
}, sA = {
  rpg: {
    damage: st,
    data: nt,
    traits: s,
    itemEffect: A
  },
  global: at
}, aA = (e) => ({
  name: e.name ?? "",
  volume: e.volume ?? 100,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
});
export {
  Qa as ABORT_BATTLE,
  T as AUTHOR_RMMZ,
  Ca as BATTLE_PROCESSING,
  Ba as CHANGE_ACTOR_IMAGES,
  gs as CHANGE_ARMORS,
  Oa as CHANGE_BATTLE_BACKGROUND,
  ys as CHANGE_BATTLE_BGM,
  va as CHANGE_CLASS,
  Vs as CHANGE_DEFEAT_ME,
  Bs as CHANGE_ENCOUNTER,
  Wa as CHANGE_ENEMY_HP,
  xa as CHANGE_ENEMY_MP,
  Xa as CHANGE_ENEMY_STATE,
  Ja as CHANGE_ENEMY_TP,
  Ha as CHANGE_EXP,
  ks as CHANGE_FORMATION_ACCESS,
  Ds as CHANGE_GOLD,
  Fa as CHANGE_HP,
  Us as CHANGE_ITEMS,
  vs as CHANGE_MENU_ACCESS,
  ga as CHANGE_MP,
  ha as CHANGE_NAME,
  Ya as CHANGE_NICKNAME,
  la as CHANGE_PARALLAX,
  Gs as CHANGE_PARTY_MEMBER,
  zs as CHANGE_PLAYER_FOLLOWERS,
  Va as CHANGE_PROFILE,
  hs as CHANGE_SAVE_ACCESS,
  Ma as CHANGE_TILESET,
  Ga as CHANGE_TP,
  bs as CHANGE_TRANSPARENCY,
  Ws as CHANGE_VEHICLE_BGM,
  ka as CHANGE_VEHICLE_IMAGE,
  Hs as CHANGE_VICTORY_ME,
  Fs as CHANGE_WEAPONS,
  Ys as CHANGE_WINDOW_COLOR,
  Oo as COLLAPS_BOSS,
  lo as COLLAPS_INSTANT,
  uo as COLLAPS_NONE,
  Mo as COLLAPS_NORMAL,
  Ts as COMMENT,
  ms as COMMENT_BODY,
  Ns as COMMON_EVENT,
  Is as CONDITIONAL_BRANCH,
  Ss as CONDITIONAL_BRANCH_ELSE,
  Cs as CONTROL_SELF_SWITCH,
  ls as CONTROL_SWITCHES,
  fs as CONTROL_TIMER,
  us as CONTROL_VARIABLES,
  st as DEFAULT_DAMAGE_LABELS,
  at as DEFAULT_GLOBAL_LABELS,
  bn as DEFAULT_ITEM_LABELS,
  es as DEFAULT_SKILL_LABELS,
  oA as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  ts as DEFAULT_USABLE_ITEM_LABELS,
  ke as EFFECT_ADD_BUFF,
  Ye as EFFECT_ADD_DEBUFF,
  ve as EFFECT_ADD_STATE,
  Ke as EFFECT_COMMON_EVENT,
  he as EFFECT_GAIN_TP,
  xe as EFFECT_GROW,
  Xe as EFFECT_LEARN_SKILL,
  ye as EFFECT_RECOVER_HP,
  He as EFFECT_RECOVER_MP,
  Ve as EFFECT_REMOVE_BUFF,
  We as EFFECT_REMOVE_DEBUFF,
  Be as EFFECT_REMOVE_STATE,
  $n as EFFECT_SPECIAL,
  qa as ENEMY_APPEAR,
  Ka as ENEMY_RECOVER_ALL,
  wa as ENEMY_TRANSFORM,
  Js as ERASE_EVENT,
  ia as ERASE_PICTURE,
  Ps as EXIT_EVENT_PROCESSING,
  Yo as EXTRA_PARAM_CEV,
  xo as EXTRA_PARAM_CNT,
  ko as EXTRA_PARAM_CRI,
  Bo as EXTRA_PARAM_EVA,
  vo as EXTRA_PARAM_HIT,
  Xo as EXTRA_PARAM_HRG,
  Vo as EXTRA_PARAM_MEV,
  Wo as EXTRA_PARAM_MRF,
  Ko as EXTRA_PARAM_MRG,
  qo as EXTRA_PARAM_TRG,
  ta as FADEIN_SCREEN,
  Ta as FADEOUT_BGM,
  Sa as FADEOUT_BGS,
  ea as FADEOUT_SCREEN,
  ut as FILANAME_CLASSES,
  lt as FILENAME_ACTORS,
  yt as FILENAME_ANIMATIONS,
  Ut as FILENAME_ARMORS,
  ht as FILENAME_COMMON_EVENTS,
  Ft as FILENAME_ENEMIES,
  ft as FILENAME_ITEMS,
  vt as FILENAME_MAP_INFOS,
  Ct as FILENAME_SKILLS,
  Gt as FILENAME_STATES,
  Ot as FILENAME_SYSTEM,
  Ht as FILENAME_TILESET,
  gt as FILENAME_TROOPS,
  Dt as FILENAME_WEAPONS,
  Go as FLAG_ID_AUTO_BATTLE,
  yo as FLAG_ID_GUARD,
  ho as FLAG_ID_PRESERVE_TP,
  Ho as FLAG_ID_SUBSTITUTE,
  na as FLASH_SCREEN,
  Yt as FOLDER_AUDIO,
  ct as FOLDER_AUDIO_BGM,
  Et as FOLDER_AUDIO_BGS,
  _t as FOLDER_AUDIO_ME,
  At as FOLDER_AUDIO_SE,
  Bt as FOLDER_DATA,
  kt as FOLDER_IMG,
  it as FOLDER_IMG_BATTLEBACK1,
  rt as FOLDER_IMG_BATTLEBACK2,
  Rt as FOLDER_IMG_CHACTERS,
  Tt as FOLDER_IMG_ENEMIES,
  mt as FOLDER_IMG_FACES,
  dt as FOLDER_IMG_PARALLACES,
  It as FOLDER_IMG_PICTURES,
  St as FOLDER_IMG_SV_ACTORS,
  pt as FOLDER_IMG_SV_ENEMIES,
  Lt as FOLDER_IMG_SYSTEM,
  Pt as FOLDER_IMG_TILESETS,
  Nt as FOLDER_IMG_TITLES1,
  Mt as FOLDER_IMG_TITLES2,
  Vt as FOLDER_JS,
  ba as FORCE_ACTION,
  Za as GAME_OVER,
  Zs as GATHER_FOLLOWERS,
  ua as GET_LOCATION_INFO,
  js as GET_ONOFF_VEHICLE,
  qn as HITTYPE_CERTAIN,
  jn as HITTYPE_MAGICAL,
  wn as HITTYPE_PHYSICAL,
  Es as INPUT_NUMBER,
  Ms as LABEL,
  Wn as LABELS_DATA_WEAPON,
  Os as LABEL_JUMP,
  sA as LABEL_REGISTRY_JP,
  nt as LABEL_SET_DATA,
  A as LABEL_SET_ITEM_EFFECT,
  s as LABEL_SET_TRAIT,
  ps as LOOP,
  Ls as LOOP_BREAK,
  v as MODULE_DATA,
  B as MODULE_SYSTEM,
  O as MODULE_TRAIT,
  Aa as MOVE_PICTURE,
  nA as MockSystemLabelDataTypes,
  Ua as NAME_INPUT_PROCESSING,
  ss as NO_OPERATION,
  $a as OPEN_MENU_SCREEN,
  za as OPEN_SAVE_SCREEN,
  Do as PARTY_ABILITY_CANCEL_SURPRISE,
  go as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Co as PARTY_ABILITY_ENCOUNTER_HALF,
  fo as PARTY_ABILITY_ENCOUNTER_NONE,
  Fo as PARTY_ABILITY_GOLD_DOUBLE,
  Uo as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Ra as PLAY_BGM,
  Ia as PLAY_BGS,
  pa as PLAY_ME,
  Na as PLAY_MOVIE,
  La as PLAY_SE,
  nc as PLUGIN_COMMAND_MV,
  sc as PLUGIN_COMMAND_MZ,
  ya as RECOVER_ALL,
  zo as REGULAR_PARAM_AGI,
  bo as REGULAR_PARAM_ATK,
  Qo as REGULAR_PARAM_DEF,
  Zo as REGULAR_PARAM_LUK,
  $o as REGULAR_PARAM_MATK,
  wo as REGULAR_PARAM_MAX_HP,
  jo as REGULAR_PARAM_MAX_MP,
  Jo as REGULAR_PARAM_MDEF,
  da as RESUME_BGM,
  ec as RETURN_TO_TITLE_SCREEN,
  _a as ROTATE_PICTURE,
  bc as ROUTE_CHANGE_BLEND_MODE,
  hc as ROUTE_CHANGE_FREQ,
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
  rc as ROUTE_MOVE_LOWER_R,
  mc as ROUTE_MOVE_RANDOM,
  _c as ROUTE_MOVE_RIGHT,
  dc as ROUTE_MOVE_TOWARD,
  Ec as ROUTE_MOVE_UP,
  Rc as ROUTE_MOVE_UPPER_L,
  Tc as ROUTE_MOVE_UPPER_R,
  Qc as ROUTE_PLAY_SE,
  $c as ROUTE_SCRIPT,
  Yc as ROUTE_STEP_ANIME_OFF,
  kc as ROUTE_STEP_ANIME_ON,
  yc as ROUTE_SWITCH_OFF,
  Gc as ROUTE_SWITCH_ON,
  Xc as ROUTE_THROUGH_OFF,
  xc as ROUTE_THROUGH_ON,
  qc as ROUTE_TRANSPARENT_OFF,
  Kc as ROUTE_TRANSPARENT_ON,
  fc as ROUTE_TURN_180D,
  Cc as ROUTE_TURN_90D_L,
  uc as ROUTE_TURN_90D_R,
  Dc as ROUTE_TURN_90D_R_L,
  gc as ROUTE_TURN_AWAY,
  Nc as ROUTE_TURN_DOWN,
  Mc as ROUTE_TURN_LEFT,
  Uc as ROUTE_TURN_RANDOM,
  Oc as ROUTE_TURN_RIGHT,
  Fc as ROUTE_TURN_TOWARD,
  lc as ROUTE_TURN_UP,
  Pc as ROUTE_WAIT,
  Bc as ROUTE_WALK_ANIME_OFF,
  vc as ROUTE_WALK_ANIME_ON,
  ma as SAVE_BGM,
  tc as SCRIPT_EVAL,
  oc as SCRIPT_EVAL_BODY,
  qs as SCROLL_MAP,
  is as SELECT_ITEM,
  Ks as SET_EVENT_LOCATION,
  ws as SET_MOVEMENT_ROUTE,
  Xs as SET_VEHICLE_LOCATION,
  ra as SET_WEATHER_EFFECT,
  sa as SHAKE_SCREEN,
  fa as SHOP_PROCESSING,
  Da as SHOP_PROCESSING_BODY,
  Qs as SHOW_ANIMATION,
  $s as SHOW_BALLOON_ICON,
  ja as SHOW_BATTLE_ANIMATION,
  As as SHOW_CHOICES,
  _s as SHOW_CHOICES_ITEM,
  as as SHOW_MESSAGE,
  cs as SHOW_MESSAGE_BODY,
  ca as SHOW_PICTURE,
  rs as SHOW_SCROLLING_TEXT,
  Rs as SHOW_SCROLLING_TEXT_BODY,
  ds as SKIP,
  Qn as SPECIAL_EFFECT_ESCAPE,
  En as SPECIAL_PARAM_EXR,
  _n as SPECIAL_PARAM_FDR,
  tn as SPECIAL_PARAM_GRD,
  sn as SPECIAL_PARAM_MCR,
  An as SPECIAL_PARAM_MDR,
  cn as SPECIAL_PARAM_PDR,
  nn as SPECIAL_PARAM_PHA,
  on as SPECIAL_PARAM_REC,
  an as SPECIAL_PARAM_TCR,
  en as SPECIAL_PARAM_TGR,
  ne as SRC_ARMOR_TYPES,
  Gn as SRC_COLOR,
  te as SRC_COMMON_EVNET,
  On as SRC_DATA_ACTOR,
  Un as SRC_DATA_ARMOR,
  Fn as SRC_DATA_CLASS,
  Cn as SRC_DATA_ENEMY,
  fn as SRC_DATA_ITEMS,
  un as SRC_DATA_MAP,
  K as SRC_DATA_SKILL,
  p as SRC_DATA_STATE,
  ln as SRC_DATA_VARIABLE,
  Dn as SRC_DATA_WEAPON,
  se as SRC_ELEMENTS,
  yn as SRC_EQUIP_TYPES,
  Y as SRC_PARAMS_EXTRA,
  S as SRC_PARAMS_REGULAR,
  V as SRC_PARAMS_SPECIAL,
  hn as SRC_SKILL_TYPES,
  Hn as SRC_SWITCHES,
  W as SRC_TRAIT_COLLAPS,
  x as SRC_TRAIT_PARTY_ABILITY,
  X as SRC_TRAIT_SPECIAL_FLAG,
  gn as SRC_TROOP,
  oe as SRC_WEAPON_TYPES,
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
  Jt as TRAIT_DEBUFF_RATE,
  $t as TRAIT_ELEMENT_RATE,
  To as TRAIT_EQUIP_ARMOR_TYPE,
  mo as TRAIT_EQUIP_LOCK,
  Io as TRAIT_EQUIP_SEAL,
  Ro as TRAIT_EQUIP_WEAPON_TYPE,
  eo as TRAIT_PARAM,
  No as TRAIT_PARTY_ABILITY,
  io as TRAIT_SKILL_ADD,
  ro as TRAIT_SKILL_SEAL,
  _o as TRAIT_SKILL_TYPE_ADD,
  Eo as TRAIT_SKILL_TYPE_SEAL,
  So as TRAIT_SLOT_TYPE,
  oo as TRAIT_SPARAM,
  Lo as TRAIT_SPECIAL_FLAG,
  zt as TRAIT_STATE_RATE,
  Zt as TRAIT_STATE_RESIST,
  to as TRAIT_XPARAM,
  xs as TRANSFER_PLAYER,
  ae as TraitDescriptor,
  aa as WAIT,
  mn as buildCollapsSource,
  Sn as buildExtraParamSource,
  dn as buildPartyAbilitySource,
  In as buildRegularParamSource,
  Ln as buildSpecialFlagSource,
  pn as buildSpecialParamSource,
  Je as defineEffectAddBuff,
  et as defineEffectAddDebuff,
  Qe as defineEffectAddState,
  ot as defineEffectCommonEvent,
  be as defineEffectGainTp,
  Zn as defineEffectGrow,
  Ze as defineEffectLearnSkill,
  we as defineEffectRecoverHp,
  je as defineEffectRecoverMp,
  ze as defineEffectRemoveBuff,
  tt as defineEffectRemoveDebuff,
  $e as defineEffectRemoveState,
  Rn as extraParamName,
  Q as foldCollapsOptions,
  z as foldExtraParam,
  $ as foldPartyAbilityOptions,
  J as foldRegularParam,
  ee as foldSpecialFlag,
  Z as foldSpecialParams,
  Jn as formatItemEffectText,
  bt as getArmorTypes,
  Kt as getElementTypes,
  qt as getEquipTypes,
  Qt as getParamNames,
  wt as getSkillTypes,
  Xt as getVariableNames,
  jt as getWeaponTypes,
  Mn as isValid,
  Nn as joinSourceKey,
  Bn as makeActor,
  kn as makeArmor,
  aA as makeAudioFileParams,
  Yn as makeClass,
  zc as makeCommonEventData,
  l as makeDamage,
  ge as makeDropItem,
  Kn as makeEnemy,
  Xn as makeEnemyAction,
  os as makeItem,
  Jc as makeMapData,
  ns as makeSkill,
  Vn as makeState,
  Zc as makeTroopData,
  tA as makeTroopEventConditions,
  eA as makeTroopMember,
  xn as makeWeapon,
  Wt as mergeDomainLabel,
  xt as mergeNestedPrimitiveRecords,
  h as mergeWithDefaults,
  rn as regularParamName,
  zn as resolveItemEffectLabels,
  vn as resolveTraitLabels,
  Pn as sanitizeKey,
  Tn as specialParamName,
  N as testUnknonwKey,
  d as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
