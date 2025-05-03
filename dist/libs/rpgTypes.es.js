const it = "bgm", ct = "se", rt = "me", At = "bgs", Et = "battlebacks1", _t = "battlebacks2", Tt = "characters", Rt = "enemies", mt = "faces", pt = "parallaxes", dt = "pictures", It = "sv_actors", St = "sv_enemies", Lt = "system", Pt = "tilesets", lt = "titles1", ut = "titles2", Mt = "System.json", Nt = "Actors.json", Ct = "Classes.json", Ot = "Skills.json", ft = "Items.json", yt = "Weapons.json", gt = "Armors.json", Dt = "Enemies.json", Ut = "Troops.json", Ft = "States.json", Gt = "Animations.json", vt = "Tilesets.json", Ht = "CommonEvents.json", ht = "MapInfos.json", Bt = "data", kt = "img", Yt = "audio", Vt = "js", H = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const r = t[o];
    typeof r == "string" && (n[o] = r);
  }
  return n;
}, Wt = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: H(e.options, t.options ?? {})
}), xt = (e, t) => {
  const n = {};
  for (const o in e) {
    const r = e[o], _ = t[o] ?? {};
    n[o] = H(
      r,
      _
    );
  }
  return n;
}, T = (e, t) => ({
  name: e,
  id: t
}), Xt = (e) => e.variables.map(T), Kt = (e) => e.elements.map(T), qt = (e) => e.equipTypes.map(T), bt = (e) => e.skillTypes.map(T), jt = (e) => e.weaponTypes.map(T), wt = (e) => e.armorTypes.map(T), Qt = (e) => e.terms.params.map(T), R = "rmmz", M = "trait", h = "data", B = "system", $t = 11, Jt = 12, zt = 13, Zt = 14, en = 21, tn = 22, nn = 23, on = 31, an = 32, sn = 33, cn = 34, rn = 35, An = 41, En = 42, _n = 43, Tn = 44, Rn = 51, mn = 52, pn = 53, dn = 54, In = 55, Sn = 61, Ln = 62, Pn = 63, ln = 64, un = 0, Mn = 1, Nn = 2, Cn = 3, On = 0, fn = 1, yn = 2, gn = 3, Dn = 4, Un = 5, Fn = 0, Gn = 1, vn = 2, Hn = 3, hn = 0, Bn = 1, kn = 2, Yn = 3, Vn = 4, Wn = 5, xn = 6, Xn = 7, Kn = 8, qn = 9, bn = 0, jn = 1, wn = 2, Qn = 3, $n = 4, Jn = 5, zn = 6, Zn = 7, eo = 0, to = 1, no = 2, oo = 3, ao = 4, so = 5, io = 6, co = 7, ro = 8, Ao = 9, Eo = (e, t) => {
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
}, _o = (e, t) => {
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
}, To = (e, t) => {
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
], p = (e, t, n) => ({
  items: n(t.options),
  label: t.domainName,
  source: {
    author: R,
    module: M,
    kind: e
  }
}), Ro = (e, t) => p(
  K,
  e,
  (n) => Q(n, t)
), mo = (e) => p(q, e, $), po = (e) => p(I, e, J), Io = (e) => p(x, e, z), So = (e) => p(X, e, Z), Lo = (e) => p(b, e, ee), i = "{name}", m = "{name} * {value}%", C = "{name} + {value}%", O = "{value}", a = {
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
      format: i,
      options: {
        autoBattle: "自動戦闘",
        guard: "防御",
        substitute: "身代わり",
        preventEscape: "逃走防止"
      }
    },
    collaps: {
      domainName: "消滅エフェクト",
      format: i,
      options: {
        bossCollaps: "ボス崩壊",
        instantCollaps: "即時崩壊",
        noneCollaps: "崩壊なし"
      }
    },
    partyAbility: {
      domainName: "パーティ能力",
      format: i,
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
      format: i
    },
    attackElement: {
      domainName: "攻撃属性",
      format: i
    },
    attackState: {
      domainName: "攻撃ステート",
      format: C
    },
    attackSpeed: {
      domainName: "攻撃速度補正",
      format: O
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: O
    },
    actionPlus: {
      domainName: "行動追加",
      format: m
    },
    attackSkill: {
      domainName: "攻撃スキル",
      format: i
    },
    equipWeaponType: {
      domainName: "装備武器タイプ",
      format: i
    },
    equipArmorType: {
      domainName: "装備防具タイプ",
      format: i
    },
    equipLock: {
      domainName: "装備固定",
      format: i
    },
    equipSeal: {
      domainName: "装備封印",
      format: i
    },
    slotType: {
      domainName: "スロットタイプ",
      format: i
    },
    skillAdd: {
      domainName: "スキル追加",
      format: i
    },
    skillSeal: {
      domainName: "スキルタイプ封印",
      format: i
    },
    skillTypeAdd: {
      domainName: "スキルタイプ追加",
      format: i
    },
    skillTypeSeal: {
      domainName: "スキルタイプ封印",
      format: i
    }
  }
}, f = "{value}", y = "{name}";
class te {
  constructor(t, n, o, r) {
    this.code = t, this.label = n, this.format = o, this.dataSource = r;
  }
  match(t) {
    return this.code === t.code;
  }
  testTraitCode(t) {
    this.match(t);
  }
  formatText(t, n) {
    this.testTraitCode(t);
    const o = this.format.replaceAll(
      f,
      t.value.toString()
    );
    return this.dataSource ? o.replaceAll(
      y,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue() {
    return this.format.includes(f);
  }
  requiresName() {
    return this.format.includes(y);
  }
  invalidPlaceHolder() {
    const t = ["value", "name"];
    return [
      ...this.format.matchAll(/\{([^}]+)\}/g)
    ].map((o) => o[1]).filter((o) => !t.includes(o));
  }
  isFormatValidForDataSource() {
    return !(this.dataSource && !this.requiresName());
  }
  diagnose() {
    const t = !this.isFormatValidForDataSource(), n = this.requiresName() && !this.dataSource, o = this.invalidPlaceHolder();
    return {
      code: this.code,
      label: this.label,
      format: this.format,
      hasError: t || n || o.length > 0,
      missingDataSourceError: t,
      sourceMismatchError: n,
      invalidPlaceHolders: o
    };
  }
}
const Po = (e) => [
  ne(e.elementRate),
  oe(e.debuffRate),
  ae(e.stateRate),
  se(e.stateResist),
  ie(e.regularParam),
  ce(e.extraParam),
  re(e.specialParam),
  Ae(e.attackElement),
  Ee(e.attackState),
  _e(e.attackSpeed),
  Te(e.attackTimes),
  Re(e.attackSkill),
  Ce(e.skillTypeAdd),
  Oe(e.skillTypeSeal),
  ue(e.skillAdd),
  Me(e.skillSeal),
  Se(e.equipWeaponType),
  Le(e.equipArmorType),
  Pe(e.equipLock),
  le(e.equipSeal),
  Ne(e.slotType),
  me(e.actionPlus),
  pe(e.specialFlag),
  de(e.collaps),
  Ie(e.partyAbility)
], g = (e, t) => typeof t == "string" ? t : e, s = (e, t, n, o) => {
  const r = g(t.domainName, n.domainName), _ = g(t.format, n.format);
  return new te(e, r, _, o);
}, k = () => ({
  module: B,
  author: R,
  kind: Ke
}), Y = (e) => ({
  module: h,
  author: R,
  kind: e
}), E = (e) => ({
  author: R,
  module: M,
  kind: e
}), V = (e) => ({
  author: R,
  module: B,
  kind: e
}), ne = (e) => s(
  11,
  a.options.elementRate,
  e,
  k()
), oe = (e) => s(
  12,
  a.options.debuffRate,
  e,
  E(I)
), ae = (e) => s(
  13,
  a.options.stateRate,
  e,
  E(I)
), se = (e) => s(
  14,
  a.options.stateResist,
  e,
  Y(S)
), ie = (e) => s(
  21,
  a.options.regularParam,
  e,
  E(I)
), ce = (e) => s(
  22,
  a.options.extraParam,
  e,
  E(x)
), re = (e) => s(
  23,
  a.options.specialParam,
  e,
  E(X)
), Ae = (e) => s(
  31,
  a.options.attackElement,
  e,
  k()
), Ee = (e) => s(
  32,
  a.options.attackState,
  e,
  E(S)
), _e = (e) => s(33, a.options.attackSpeed, e), Te = (e) => s(34, a.options.attackTimes, e), Re = (e) => s(
  35,
  a.options.attackSkill,
  e,
  Y(j)
), me = (e) => s(61, a.options.actionPlus, e), pe = (e) => s(
  62,
  a.options.specialFlag,
  e,
  E(b)
), de = (e) => s(
  63,
  a.options.collaps,
  e,
  E(K)
), Ie = (e) => s(
  64,
  a.options.partyAbility,
  e,
  E(q)
), Se = (e) => s(
  51,
  a.options.equipWeaponType,
  e,
  V(xe)
), Le = (e) => s(
  52,
  a.options.equipArmorType,
  e,
  V(Xe)
), Pe = (e) => s(53, a.options.equipLock, e), le = (e) => s(54, a.options.equipSeal, e), ue = (e) => s(43, a.options.skillAdd, e), Me = (e) => s(44, a.options.skillSeal, e), Ne = (e) => s(55, a.options.slotType, e), Ce = (e) => s(
  41,
  a.options.skillTypeAdd,
  e
), Oe = (e) => s(
  42,
  a.options.skillTypeSeal,
  e
), lo = "Trait", uo = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, Mo = (e = {}) => ({
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
}), No = (e = {}) => ({
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
}), Co = (e = {}) => ({
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
}), Oo = (e = {}) => ({
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
}), fo = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, yo = (e = {}) => ({
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
  damage: N(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), fe = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), go = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Do = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => fe())) ?? [],
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
}, Uo = (e = {}) => ({
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
  damage: N(e.damage ?? {}),
  effects: [],
  price: 0
}), Fo = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: N(e.damage ?? {}),
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
}), Go = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "message1",
    "message2",
    "messageType",
    "mpCost",
    "requiredWtypeId1",
    "requiredWtypeId2",
    "stypeId",
    "tpCost",
    "animationId",
    "hitType",
    "occasion",
    "repeats",
    "scope",
    "speed",
    "successRate",
    "tpGain",
    "note",
    "effects"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    message1: { type: "string" },
    message2: { type: "string" },
    messageType: { type: "integer" },
    mpCost: { type: "integer" },
    requiredWtypeId1: { type: "integer" },
    requiredWtypeId2: { type: "integer" },
    stypeId: { type: "integer" },
    tpCost: { type: "integer" },
    animationId: { type: "integer", minimum: 0 },
    hitType: { type: "integer" },
    occasion: { type: "integer" },
    repeats: { type: "integer" },
    scope: { type: "integer" },
    speed: { type: "integer" },
    successRate: { type: "integer" },
    tpGain: { type: "integer" },
    note: { type: "string" },
    effects: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value1: { type: "integer" },
          value2: { type: "integer" }
        },
        required: ["code", "dataId", "value1", "value2"],
        additionalProperties: !1
      }
    },
    damage: {
      type: "object",
      properties: {
        type: { type: "integer" },
        elementId: { type: "integer" },
        formula: { type: "string" },
        variance: { type: "integer" },
        critical: { type: "boolean" }
      },
      required: ["type", "elementId", "formula", "variance", "critical"],
      additionalProperties: !1
    }
  },
  additionalProperties: !1
}, vo = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "note",
    "animationId",
    "hitType",
    "occasion",
    "repeats",
    "scope",
    "speed",
    "successRate",
    "tpGain",
    "consumable",
    "price",
    "effects"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    note: { type: "string" },
    animationId: { type: "integer", minimum: 0 },
    hitType: { type: "integer" },
    occasion: { type: "integer" },
    repeats: { type: "integer" },
    scope: { type: "integer" },
    speed: { type: "integer" },
    successRate: { type: "integer" },
    tpGain: { type: "integer" },
    consumable: { type: "boolean" },
    price: { type: "integer", minimum: 0 },
    effects: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value1: { type: "integer" },
          value2: { type: "integer" }
        },
        required: ["code", "dataId", "value1", "value2"],
        additionalProperties: !1
      }
    },
    damage: {
      type: "object",
      properties: {
        type: { type: "integer" },
        elementId: { type: "integer" },
        formula: { type: "string" },
        variance: { type: "integer" },
        critical: { type: "boolean" }
      },
      required: ["type", "elementId", "formula", "variance", "critical"],
      additionalProperties: !1
    }
  }
}, Ho = 0, ho = 1, Bo = 2, ye = "{name} + {value1}", D = "{name} {value1}%", l = "{value1}% + {value2}", U = "{name} {value1}ターン", d = "{name}", c = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: U
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: U
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: l
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: ye
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: d
    },
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: l
    },
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: l
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
      format: D
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: d
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: D
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: d
    }
  }
}, ge = 11, De = 12, Ue = 13, Fe = 21, Ge = 22, ve = 31, He = 32, he = 33, Be = 34, ko = 41, ke = 42, Ye = 43, Ve = 44, Yo = 0, W = /^[a-zA-Z0-9]+$/, Vo = (e) => W.test(e) ? e : void 0, u = (e) => typeof e == "string" ? W.test(e) : !1, Wo = (e) => [e.author, e.module, e.kind].join("."), xo = (e) => u(e.author) && u(e.module) && u(e.kind), I = "params", x = "xparams", X = "sparams", K = "collaps", q = "partyAbiility", b = "sflag", Xo = "actors", Ko = "variables", qo = "map", bo = "enemy", S = "state", j = "skill", jo = "items", wo = "weapon", Qo = "armor", $o = "class", We = "common_event", Jo = "troop", zo = "colors", xe = "weaponTypes", Xe = "armorTypes", Zo = "equipTypes", ea = "switches", ta = "skillTypes", Ke = "elements", F = "{value1}", G = "{value2}", v = "{name}";
class qe {
  constructor(t, n, o, r, _) {
    this.codeId = t, this.label = n, this.format = o, this.description = r, this.dataSource = _;
  }
  formatText(t, n) {
    const o = this.format.replaceAll(F, t.value1.toString()).replaceAll(G, t.value2.toString());
    return this.dataSource ? o.replaceAll(
      v,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue1() {
    return this.format.includes(F);
  }
  requiresValue2() {
    return this.format.includes(G);
  }
  requiresName() {
    return this.format.includes(v);
  }
  invalidPlaceHolder() {
    const t = ["value1", "value2", "name"];
    return [
      ...this.format.matchAll(/\{([^}]+)\}/g)
    ].map((o) => o[1]).filter((o) => !t.includes(o));
  }
  isFormatValidForDataSource() {
    return !(this.dataSource && !this.requiresName());
  }
}
const na = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), oa = (e) => [
  be(e.options.recoverHp),
  je(e.options.recoverMp),
  we(e.options.gainTp),
  Qe(e.options.addState),
  $e(e.options.removeState),
  Je(e.options.addBuff),
  et(e.options.addDebuff),
  ze(e.options.removeBuff),
  tt(e.options.removeDebuff),
  Ze(e.options.learnSkill),
  nt(e.options.commonEvent)
], L = () => ({
  author: R,
  module: M,
  kind: I
}), P = (e) => ({
  author: R,
  module: h,
  kind: e
}), A = (e, t, n, o) => {
  const r = n.domainName ?? t.domainName, _ = n.format ?? t.format, w = n.desc ?? t.desc;
  return new qe(e, r, _, w, o);
}, be = (e) => A(
  ge,
  c.options.recoverHp,
  e
), je = (e) => A(
  De,
  c.options.recoverMp,
  e
), we = (e) => A(Ue, c.options.gainTp, e), aa = (e) => A(ke, c.options.grow, e), Qe = (e) => A(
  Fe,
  c.options.addState,
  e,
  P(S)
), $e = (e) => A(
  Ge,
  c.options.removeState,
  e,
  P(S)
), Je = (e) => A(
  ve,
  c.options.addBuff,
  e,
  L()
), ze = (e) => A(
  he,
  c.options.removeBuff,
  e,
  L()
), Ze = (e) => A(
  Ye,
  c.options.learnSkill,
  e,
  P(j)
), et = (e) => A(
  He,
  c.options.addBuff,
  e,
  L()
), tt = (e) => A(
  Be,
  c.options.removeDebuff,
  e,
  L()
), nt = (e) => A(
  Ve,
  c.options.commonEvent,
  e,
  P(We)
), sa = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, ia = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, ca = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, ot = {
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
}, at = {
  domainName: "ダメージ",
  options: {}
}, N = (e = {}) => ({
  type: e.type ?? 0,
  elementId: e.elementId ?? 0,
  formula: e.formula ?? "",
  variance: e.variance ?? 0,
  critical: e.critical ?? !1
}), ra = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, Aa = 0, Ea = 101, _a = 401, Ta = 102, Ra = 402, ma = 103, pa = 104, da = 105, Ia = 405, Sa = 108, La = 408, Pa = 109, la = 111, ua = 411, Ma = 112, Na = 113, Ca = 115, Oa = 117, fa = 118, ya = 119, ga = 121, Da = 122, Ua = 123, Fa = 124, Ga = 125, va = 126, Ha = 127, ha = 128, Ba = 129, ka = 132, Ya = 133, Va = 134, Wa = 135, xa = 136, Xa = 137, Ka = 138, qa = 139, ba = 140, ja = 201, wa = 202, Qa = 203, $a = 204, Ja = 205, za = 206, Za = 211, es = 212, ts = 213, ns = 214, os = 216, as = 217, ss = 221, is = 222, cs = 223, rs = 224, As = 225, Es = 230, _s = 231, Ts = 232, Rs = 233, ms = 234, ps = 235, ds = 236, Is = 241, Ss = 242, Ls = 243, Ps = 244, ls = 245, us = 246, Ms = 249, Ns = 250, Cs = 251, Os = 261, fs = 282, ys = 283, gs = 284, Ds = 285, Us = 301, Fs = 302, Gs = 605, vs = 303, Hs = 311, hs = 312, Bs = 313, ks = 314, Ys = 315, Vs = 320, Ws = 321, xs = 322, Xs = 323, Ks = 324, qs = 325, bs = 331, js = 332, ws = 333, Qs = 334, $s = 335, Js = 336, zs = 337, Zs = 339, ei = 340, ti = 351, ni = 342, oi = 352, ai = 353, si = 354, ii = 355, ci = 655, ri = 356, Ai = 357, Ei = 0, _i = 1, Ti = 2, Ri = 3, mi = 4, pi = 5, di = 6, Ii = 7, Si = 8, Li = 9, Pi = 10, li = 11, ui = 12, Mi = 13, Ni = 14, Ci = 15, Oi = 16, fi = 17, yi = 18, gi = 19, Di = 20, Ui = 21, Fi = 22, Gi = 23, vi = 24, Hi = 25, hi = 26, Bi = 27, ki = 28, Yi = 29, Vi = 30, Wi = 31, xi = 32, Xi = 33, Ki = 34, qi = 35, bi = 36, ji = 37, wi = 38, Qi = 39, $i = 40, Ji = 41, zi = 42, Zi = 43, ec = 44, tc = 45, nc = (e = {}) => ({
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
}), oc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), ac = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), sc = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), ic = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), cc = {
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
}, rc = {
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
}, st = {
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
}, Ac = {
  rpg: {
    damage: at,
    data: ot,
    traits: a,
    itemEffect: c
  },
  global: st
}, Ec = (e) => ({
  name: e.name ?? "",
  volume: e.volume ?? 100,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
});
export {
  ei as ABORT_BATTLE,
  R as AUTHOR_RMMZ,
  Us as BATTLE_PROCESSING,
  xs as CHANGE_ACTOR_IMAGES,
  ha as CHANGE_ARMORS,
  ys as CHANGE_BATTLE_BACKGROUND,
  ka as CHANGE_BATTLE_BGM,
  Ws as CHANGE_CLASS,
  qa as CHANGE_DEFEAT_ME,
  xa as CHANGE_ENCOUNTER,
  bs as CHANGE_ENEMY_HP,
  js as CHANGE_ENEMY_MP,
  ws as CHANGE_ENEMY_STATE,
  ni as CHANGE_ENEMY_TP,
  Ys as CHANGE_EXP,
  Xa as CHANGE_FORMATION_ACCESS,
  Ga as CHANGE_GOLD,
  Hs as CHANGE_HP,
  va as CHANGE_ITEMS,
  Wa as CHANGE_MENU_ACCESS,
  hs as CHANGE_MP,
  Vs as CHANGE_NAME,
  Ks as CHANGE_NICKNAME,
  gs as CHANGE_PARALLAX,
  Ba as CHANGE_PARTY_MEMBER,
  os as CHANGE_PLAYER_FOLLOWERS,
  qs as CHANGE_PROFILE,
  Va as CHANGE_SAVE_ACCESS,
  fs as CHANGE_TILESET,
  Bs as CHANGE_TP,
  Za as CHANGE_TRANSPARENCY,
  ba as CHANGE_VEHICLE_BGM,
  Xs as CHANGE_VEHICLE_IMAGE,
  Ya as CHANGE_VICTORY_ME,
  Ha as CHANGE_WEAPONS,
  Ka as CHANGE_WINDOW_COLOR,
  Mn as COLLAPS_BOSS,
  Nn as COLLAPS_INSTANT,
  Cn as COLLAPS_NONE,
  un as COLLAPS_NORMAL,
  Sa as COMMENT,
  La as COMMENT_BODY,
  Oa as COMMON_EVENT,
  la as CONDITIONAL_BRANCH,
  ua as CONDITIONAL_BRANCH_ELSE,
  Ua as CONTROL_SELF_SWITCH,
  ga as CONTROL_SWITCHES,
  Fa as CONTROL_TIMER,
  Da as CONTROL_VARIABLES,
  at as DEFAULT_DAMAGE_LABELS,
  st as DEFAULT_GLOBAL_LABELS,
  sa as DEFAULT_ITEM_LABELS,
  ia as DEFAULT_SKILL_LABELS,
  cc as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  ca as DEFAULT_USABLE_ITEM_LABELS,
  ve as EFFECT_ADD_BUFF,
  He as EFFECT_ADD_DEBUFF,
  Fe as EFFECT_ADD_STATE,
  Ve as EFFECT_COMMON_EVENT,
  Ue as EFFECT_GAIN_TP,
  ke as EFFECT_GROW,
  Ye as EFFECT_LEARN_SKILL,
  ge as EFFECT_RECOVER_HP,
  De as EFFECT_RECOVER_MP,
  he as EFFECT_REMOVE_BUFF,
  Be as EFFECT_REMOVE_DEBUFF,
  Ge as EFFECT_REMOVE_STATE,
  ko as EFFECT_SPECIAL,
  $s as ENEMY_APPEAR,
  Qs as ENEMY_RECOVER_ALL,
  Js as ENEMY_TRANSFORM,
  ns as ERASE_EVENT,
  ps as ERASE_PICTURE,
  Ca as EXIT_EVENT_PROCESSING,
  Yn as EXTRA_PARAM_CEV,
  xn as EXTRA_PARAM_CNT,
  kn as EXTRA_PARAM_CRI,
  Bn as EXTRA_PARAM_EVA,
  hn as EXTRA_PARAM_HIT,
  Xn as EXTRA_PARAM_HRG,
  Vn as EXTRA_PARAM_MEV,
  Wn as EXTRA_PARAM_MRF,
  Kn as EXTRA_PARAM_MRG,
  qn as EXTRA_PARAM_TRG,
  is as FADEIN_SCREEN,
  Ss as FADEOUT_BGM,
  us as FADEOUT_BGS,
  ss as FADEOUT_SCREEN,
  Ct as FILANAME_CLASSES,
  Nt as FILENAME_ACTORS,
  Gt as FILENAME_ANIMATIONS,
  gt as FILENAME_ARMORS,
  Ht as FILENAME_COMMON_EVENTS,
  Dt as FILENAME_ENEMIES,
  ft as FILENAME_ITEMS,
  ht as FILENAME_MAP_INFOS,
  Ot as FILENAME_SKILLS,
  Ft as FILENAME_STATES,
  Mt as FILENAME_SYSTEM,
  vt as FILENAME_TILESET,
  Ut as FILENAME_TROOPS,
  yt as FILENAME_WEAPONS,
  Fn as FLAG_ID_AUTO_BATTLE,
  Gn as FLAG_ID_GUARD,
  Hn as FLAG_ID_PRESERVE_TP,
  vn as FLAG_ID_SUBSTITUTE,
  rs as FLASH_SCREEN,
  Yt as FOLDER_AUDIO,
  it as FOLDER_AUDIO_BGM,
  At as FOLDER_AUDIO_BGS,
  rt as FOLDER_AUDIO_ME,
  ct as FOLDER_AUDIO_SE,
  Bt as FOLDER_DATA,
  kt as FOLDER_IMG,
  Et as FOLDER_IMG_BATTLEBACK1,
  _t as FOLDER_IMG_BATTLEBACK2,
  Tt as FOLDER_IMG_CHACTERS,
  Rt as FOLDER_IMG_ENEMIES,
  mt as FOLDER_IMG_FACES,
  pt as FOLDER_IMG_PARALLACES,
  dt as FOLDER_IMG_PICTURES,
  It as FOLDER_IMG_SV_ACTORS,
  St as FOLDER_IMG_SV_ENEMIES,
  Lt as FOLDER_IMG_SYSTEM,
  Pt as FOLDER_IMG_TILESETS,
  lt as FOLDER_IMG_TITLES1,
  ut as FOLDER_IMG_TITLES2,
  Vt as FOLDER_JS,
  Zs as FORCE_ACTION,
  ai as GAME_OVER,
  as as GATHER_FOLLOWERS,
  Ds as GET_LOCATION_INFO,
  za as GET_ONOFF_VEHICLE,
  Ho as HITTYPE_CERTAIN,
  Bo as HITTYPE_MAGICAL,
  ho as HITTYPE_PHYSICAL,
  ma as INPUT_NUMBER,
  fa as LABEL,
  fo as LABELS_DATA_WEAPON,
  ya as LABEL_JUMP,
  Ac as LABEL_REGISTRY_JP,
  ot as LABEL_SET_DATA,
  c as LABEL_SET_ITEM_EFFECT,
  a as LABEL_SET_TRAIT,
  Ma as LOOP,
  Na as LOOP_BREAK,
  h as MODULE_DATA,
  B as MODULE_SYSTEM,
  M as MODULE_TRAIT,
  Ts as MOVE_PICTURE,
  rc as MockSystemLabelDataTypes,
  vs as NAME_INPUT_PROCESSING,
  Aa as NO_OPERATION,
  ti as OPEN_MENU_SCREEN,
  oi as OPEN_SAVE_SCREEN,
  yn as PARTY_ABILITY_CANCEL_SURPRISE,
  Un as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  On as PARTY_ABILITY_ENCOUNTER_HALF,
  fn as PARTY_ABILITY_ENCOUNTER_NONE,
  Dn as PARTY_ABILITY_GOLD_DOUBLE,
  gn as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Is as PLAY_BGM,
  ls as PLAY_BGS,
  Ms as PLAY_ME,
  Os as PLAY_MOVIE,
  Ns as PLAY_SE,
  ri as PLUGIN_COMMAND_MV,
  Ai as PLUGIN_COMMAND_MZ,
  ks as RECOVER_ALL,
  zn as REGULAR_PARAM_AGI,
  wn as REGULAR_PARAM_ATK,
  Qn as REGULAR_PARAM_DEF,
  Zn as REGULAR_PARAM_LUK,
  $n as REGULAR_PARAM_MATK,
  bn as REGULAR_PARAM_MAX_HP,
  jn as REGULAR_PARAM_MAX_MP,
  Jn as REGULAR_PARAM_MDEF,
  Ps as RESUME_BGM,
  si as RETURN_TO_TITLE_SCREEN,
  Rs as ROTATE_PICTURE,
  Zi as ROUTE_CHANGE_BLEND_MODE,
  Vi as ROUTE_CHANGE_FREQ,
  Ji as ROUTE_CHANGE_IMAGE,
  zi as ROUTE_CHANGE_OPACITY,
  Yi as ROUTE_CHANGE_SPEED,
  bi as ROUTE_DIR_FIX_OFF,
  qi as ROUTE_DIR_FIX_ON,
  Ei as ROUTE_END,
  Ni as ROUTE_JUMP,
  li as ROUTE_MOVE_AWAY,
  Mi as ROUTE_MOVE_BACKWARD,
  _i as ROUTE_MOVE_DOWN,
  ui as ROUTE_MOVE_FORWARD,
  Ti as ROUTE_MOVE_LEFT,
  pi as ROUTE_MOVE_LOWER_L,
  di as ROUTE_MOVE_LOWER_R,
  Li as ROUTE_MOVE_RANDOM,
  Ri as ROUTE_MOVE_RIGHT,
  Pi as ROUTE_MOVE_TOWARD,
  mi as ROUTE_MOVE_UP,
  Ii as ROUTE_MOVE_UPPER_L,
  Si as ROUTE_MOVE_UPPER_R,
  ec as ROUTE_PLAY_SE,
  tc as ROUTE_SCRIPT,
  Ki as ROUTE_STEP_ANIME_OFF,
  Xi as ROUTE_STEP_ANIME_ON,
  ki as ROUTE_SWITCH_OFF,
  Bi as ROUTE_SWITCH_ON,
  wi as ROUTE_THROUGH_OFF,
  ji as ROUTE_THROUGH_ON,
  $i as ROUTE_TRANSPARENT_OFF,
  Qi as ROUTE_TRANSPARENT_ON,
  Fi as ROUTE_TURN_180D,
  Ui as ROUTE_TURN_90D_L,
  Di as ROUTE_TURN_90D_R,
  Gi as ROUTE_TURN_90D_R_L,
  hi as ROUTE_TURN_AWAY,
  Oi as ROUTE_TURN_DOWN,
  fi as ROUTE_TURN_LEFT,
  vi as ROUTE_TURN_RANDOM,
  yi as ROUTE_TURN_RIGHT,
  Hi as ROUTE_TURN_TOWARD,
  gi as ROUTE_TURN_UP,
  Ci as ROUTE_WAIT,
  xi as ROUTE_WALK_ANIME_OFF,
  Wi as ROUTE_WALK_ANIME_ON,
  Ls as SAVE_BGM,
  ra as SCHEMA_DAMAGE,
  vo as SCHEMA_ITEM,
  Go as SCHEMA_SKILL,
  uo as SCHEMA_TRAIT,
  ii as SCRIPT_EVAL,
  ci as SCRIPT_EVAL_BODY,
  $a as SCROLL_MAP,
  pa as SELECT_ITEM,
  Qa as SET_EVENT_LOCATION,
  Ja as SET_MOVEMENT_ROUTE,
  wa as SET_VEHICLE_LOCATION,
  ds as SET_WEATHER_EFFECT,
  As as SHAKE_SCREEN,
  Fs as SHOP_PROCESSING,
  Gs as SHOP_PROCESSING_BODY,
  es as SHOW_ANIMATION,
  ts as SHOW_BALLOON_ICON,
  zs as SHOW_BATTLE_ANIMATION,
  Ta as SHOW_CHOICES,
  Ra as SHOW_CHOICES_ITEM,
  Ea as SHOW_MESSAGE,
  _a as SHOW_MESSAGE_BODY,
  _s as SHOW_PICTURE,
  da as SHOW_SCROLLING_TEXT,
  Ia as SHOW_SCROLLING_TEXT_BODY,
  Pa as SKIP,
  Yo as SPECIAL_EFFECT_ESCAPE,
  Ao as SPECIAL_PARAM_EXR,
  ro as SPECIAL_PARAM_FDR,
  to as SPECIAL_PARAM_GRD,
  ao as SPECIAL_PARAM_MCR,
  co as SPECIAL_PARAM_MDR,
  io as SPECIAL_PARAM_PDR,
  oo as SPECIAL_PARAM_PHA,
  no as SPECIAL_PARAM_REC,
  so as SPECIAL_PARAM_TCR,
  eo as SPECIAL_PARAM_TGR,
  Xe as SRC_ARMOR_TYPES,
  zo as SRC_COLOR,
  We as SRC_COMMON_EVNET,
  Xo as SRC_DATA_ACTOR,
  Qo as SRC_DATA_ARMOR,
  $o as SRC_DATA_CLASS,
  bo as SRC_DATA_ENEMY,
  jo as SRC_DATA_ITEMS,
  qo as SRC_DATA_MAP,
  j as SRC_DATA_SKILL,
  S as SRC_DATA_STATE,
  Ko as SRC_DATA_VARIABLE,
  wo as SRC_DATA_WEAPON,
  Ke as SRC_ELEMENTS,
  Zo as SRC_EQUIP_TYPES,
  x as SRC_PARAMS_EXTRA,
  I as SRC_PARAMS_REGULAR,
  X as SRC_PARAMS_SPECIAL,
  ta as SRC_SKILL_TYPES,
  ea as SRC_SWITCHES,
  K as SRC_TRAIT_COLLAPS,
  q as SRC_TRAIT_PARTY_ABILITY,
  b as SRC_TRAIT_SPECIAL_FLAG,
  Jo as SRC_TROOP,
  xe as SRC_WEAPON_TYPES,
  Cs as STOP_SE,
  ms as TINT_PICTURE,
  cs as TINT_SCREEN,
  Sn as TRAIT_ACTION_PLUS,
  on as TRAIT_ATTACK_ELEMENT,
  rn as TRAIT_ATTACK_SKILL,
  sn as TRAIT_ATTACK_SPEED,
  an as TRAIT_ATTACK_STATE,
  cn as TRAIT_ATTACK_TIMES,
  Pn as TRAIT_COLLAPSE_TYPE,
  Jt as TRAIT_DEBUFF_RATE,
  $t as TRAIT_ELEMENT_RATE,
  mn as TRAIT_EQUIP_ARMOR_TYPE,
  pn as TRAIT_EQUIP_LOCK,
  dn as TRAIT_EQUIP_SEAL,
  Rn as TRAIT_EQUIP_WEAPON_TYPE,
  en as TRAIT_PARAM,
  ln as TRAIT_PARTY_ABILITY,
  _n as TRAIT_SKILL_ADD,
  Tn as TRAIT_SKILL_SEAL,
  An as TRAIT_SKILL_TYPE_ADD,
  En as TRAIT_SKILL_TYPE_SEAL,
  In as TRAIT_SLOT_TYPE,
  nn as TRAIT_SPARAM,
  Ln as TRAIT_SPECIAL_FLAG,
  zt as TRAIT_STATE_RATE,
  Zt as TRAIT_STATE_RESIST,
  tn as TRAIT_XPARAM,
  ja as TRANSFER_PLAYER,
  lo as TYPENAME_TRAIT,
  te as TraitDescriptor,
  Es as WAIT,
  Ro as buildCollapsSource,
  Io as buildExtraParamSource,
  mo as buildPartyAbilitySource,
  po as buildRegularParamSource,
  Lo as buildSpecialFlagSource,
  So as buildSpecialParamSource,
  Je as defineEffectAddBuff,
  et as defineEffectAddDebuff,
  Qe as defineEffectAddState,
  nt as defineEffectCommonEvent,
  we as defineEffectGainTp,
  aa as defineEffectGrow,
  Ze as defineEffectLearnSkill,
  be as defineEffectRecoverHp,
  je as defineEffectRecoverMp,
  ze as defineEffectRemoveBuff,
  tt as defineEffectRemoveDebuff,
  $e as defineEffectRemoveState,
  _o as extraParamName,
  Q as foldCollapsOptions,
  z as foldExtraParam,
  $ as foldPartyAbilityOptions,
  J as foldRegularParam,
  ee as foldSpecialFlag,
  Z as foldSpecialParams,
  na as formatItemEffectText,
  wt as getArmorTypes,
  Kt as getElementTypes,
  qt as getEquipTypes,
  Qt as getParamNames,
  bt as getSkillTypes,
  Xt as getVariableNames,
  jt as getWeaponTypes,
  xo as isValid,
  Wo as joinSourceKey,
  Mo as makeActor,
  No as makeArmor,
  Ec as makeAudioFileParams,
  Co as makeClass,
  oc as makeCommonEventData,
  N as makeDamage,
  fe as makeDropItem,
  Do as makeEnemy,
  go as makeEnemyAction,
  Uo as makeItem,
  nc as makeMapData,
  Fo as makeSkill,
  Oo as makeState,
  ac as makeTroopData,
  ic as makeTroopEventConditions,
  sc as makeTroopMember,
  yo as makeWeapon,
  Wt as mergeDomainLabel,
  xt as mergeNestedPrimitiveRecords,
  H as mergeWithDefaults,
  Eo as regularParamName,
  oa as resolveItemEffectLabels,
  Po as resolveTraitLabels,
  Vo as sanitizeKey,
  To as specialParamName,
  u as testUnknonwKey,
  p as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
