import f from "ajv";
const po = "bgm", Eo = "se", _o = "me", Ao = "bgs", To = "battlebacks1", Ro = "battlebacks2", yo = "characters", lo = "enemies", uo = "faces", Io = "parallaxes", go = "pictures", So = "sv_actors", No = "sv_enemies", Co = "system", fo = "tilesets", Oo = "titles1", Lo = "titles2", Mo = "System.json", Po = "Actors.json", Do = "Classes.json", vo = "Skills.json", ho = "Items.json", Fo = "Weapons.json", Ho = "Armors.json", Uo = "Enemies.json", ko = "Troops.json", Go = "States.json", xo = "Animations.json", Bo = "Tilesets.json", bo = "CommonEvents.json", Vo = "MapInfos.json", qo = "data", Wo = "img", Yo = "audio", wo = "js", x = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const c = t[o];
    typeof c == "string" && (n[o] = c);
  }
  return n;
}, jo = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: x(e.options, t.options ?? {})
}), Ko = (e, t) => {
  const n = {};
  for (const o in e) {
    const c = e[o], E = t[o] ?? {};
    n[o] = x(
      c,
      E
    );
  }
  return n;
}, _ = (e, t) => ({
  name: e,
  id: t
}), Xo = (e) => e.variables.map(_), $o = (e) => e.elements.map(_), Qo = (e) => e.equipTypes.map(_), zo = (e) => e.skillTypes.map(_), Jo = (e) => e.weaponTypes.map(_), Zo = (e) => e.armorTypes.map(_), ei = (e) => e.terms.params.map(_), A = "rmmz", O = "trait", B = "data", b = "system", Oe = 11, Le = 12, Me = 13, Pe = 14, De = 21, ve = 22, he = 23, Fe = 31, He = 32, Ue = 33, ke = 34, Ge = 35, xe = 41, Be = 42, be = 43, Ve = 44, qe = 51, We = 52, Ye = 53, we = 54, je = 55, Ke = 61, Xe = 62, $e = 63, Qe = 64, ze = 0, Je = 1, Ze = 2, et = 3, tt = 0, nt = 1, ot = 2, it = 3, at = 4, st = 5, rt = 0, ct = 1, mt = 2, pt = 3, V = 0, q = 1, W = 2, Y = 3, w = 4, j = 5, K = 6, X = 7, $ = 8, Q = 9, z = 0, J = 1, Z = 2, ee = 3, te = 4, ne = 5, oe = 6, ie = 7, ae = 0, se = 1, re = 2, ce = 3, me = 4, pe = 5, de = 6, Ee = 7, _e = 8, Ae = 9, ti = (e, t) => {
  switch (e) {
    case z:
      return t.maxHp;
    case J:
      return t.maxMp;
    case Z:
      return t.atk;
    case ee:
      return t.def;
    case te:
      return t.matk;
    case ne:
      return t.mdef;
    case oe:
      return t.agi;
    case ie:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, ni = (e, t) => {
  switch (e) {
    case Y:
      return t.criticalEvasionRate;
    case q:
      return t.evasionRate;
    case K:
      return t.counterAttackRate;
    case W:
      return t.criticalRate;
    case V:
      return t.hitRate;
    case X:
      return t.hpRegenerationRate;
    case w:
      return t.magicEvasionRate;
    case j:
      return t.magicReflectionRate;
    case $:
      return t.mpRegenerationRate;
    case Q:
      return t.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, oi = (e, t) => {
  switch (e) {
    case Ae:
      return t.experienceRate;
    case ae:
      return t.targetRate;
    case _e:
      return t.floorDamageRate;
    case se:
      return t.guradEffectRate;
    case me:
      return t.mpCostRate;
    case pe:
      return t.tpChargeRate;
    case de:
      return t.physicalDamageRate;
    case Ee:
      return t.magicDamageRate;
    case ce:
      return t.pharmacology;
    case re:
      return t.recoveryEffectRate;
  }
  return `?sparams[${e}]`;
}, dt = (e, t) => [
  {
    id: ze,
    name: t.normal
  },
  {
    id: Je,
    name: e.bossCollaps
  },
  {
    id: Ze,
    name: e.instantCollaps
  },
  {
    id: et,
    name: e.noneCollaps
  }
], Et = (e) => [
  {
    id: tt,
    name: e.encounterHalf
  },
  {
    id: nt,
    name: e.encounterNone
  },
  {
    id: ot,
    name: e.cancelSurprise
  },
  {
    id: it,
    name: e.raisePreemptive
  },
  {
    id: at,
    name: e.goldDouble
  },
  {
    id: st,
    name: e.dropItemDouble
  }
], _t = (e) => [
  { id: z, name: e.maxHp },
  { id: J, name: e.maxMp },
  { id: Z, name: e.atk },
  { id: ee, name: e.def },
  { id: te, name: e.matk },
  { id: ne, name: e.mdef },
  { id: oe, name: e.agi },
  { id: ie, name: e.luk }
], At = (e) => [
  {
    id: V,
    name: e.hitRate
  },
  {
    id: q,
    name: e.evasionRate
  },
  {
    id: W,
    name: e.criticalRate
  },
  {
    id: Y,
    name: e.criticalEvasionRate
  },
  {
    id: w,
    name: e.magicEvasionRate
  },
  {
    id: j,
    name: e.magicReflectionRate
  },
  {
    id: K,
    name: e.counterAttackRate
  },
  {
    id: X,
    name: e.hpRegenerationRate
  },
  {
    id: $,
    name: e.mpRegenerationRate
  },
  {
    id: Q,
    name: e.tpRegenerationRate
  }
], Tt = (e) => [
  {
    id: ae,
    name: e.targetRate
  },
  {
    id: se,
    name: e.guradEffectRate
  },
  {
    id: re,
    name: e.recoveryEffectRate
  },
  {
    id: ce,
    name: e.pharmacology
  },
  {
    id: me,
    name: e.mpCostRate
  },
  {
    id: pe,
    name: e.tpChargeRate
  },
  {
    id: de,
    name: e.physicalDamageRate
  },
  {
    id: Ee,
    name: e.magicDamageRate
  },
  {
    id: _e,
    name: e.floorDamageRate
  },
  {
    id: Ae,
    name: e.experienceRate
  }
], Rt = (e) => [
  {
    id: rt,
    name: e.autoBattle
  },
  {
    id: ct,
    name: e.guard
  },
  {
    id: mt,
    name: e.substitute
  },
  {
    id: pt,
    name: e.preventEscape
  }
], R = (e, t, n) => ({
  items: n(t.options),
  label: t.domainName,
  source: {
    author: A,
    module: O,
    kind: e
  }
}), ii = (e, t) => R(
  ge,
  e,
  (n) => dt(n, t)
), ai = (e) => R(Se, e, Et), si = (e) => R(l, e, _t), ri = (e) => R(ue, e, At), ci = (e) => R(Ie, e, Tt), mi = (e) => R(Ne, e, Rt), s = "{name}", T = "{name} * {value}%", M = "{name} + {value}%", P = "{value}", i = {
  domainName: "特徴",
  options: {
    regularParam: {
      domainName: "基本能力値",
      format: T,
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
      format: M,
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
      format: T,
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
      format: s,
      options: {
        autoBattle: "自動戦闘",
        guard: "防御",
        substitute: "身代わり",
        preventEscape: "逃走防止"
      }
    },
    collaps: {
      domainName: "消滅エフェクト",
      format: s,
      options: {
        bossCollaps: "ボス崩壊",
        instantCollaps: "即時崩壊",
        noneCollaps: "崩壊なし"
      }
    },
    partyAbility: {
      domainName: "パーティ能力",
      format: s,
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
      format: T
    },
    debuffRate: {
      domainName: "弱体有効度",
      format: T
    },
    stateRate: {
      domainName: "ステート有効度",
      format: T
    },
    stateResist: {
      domainName: "ステート無効",
      format: s
    },
    attackElement: {
      domainName: "攻撃属性",
      format: s
    },
    attackState: {
      domainName: "攻撃ステート",
      format: M
    },
    attackSpeed: {
      domainName: "攻撃速度補正",
      format: P
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: P
    },
    actionPlus: {
      domainName: "行動追加",
      format: T
    },
    attackSkill: {
      domainName: "攻撃スキル",
      format: s
    },
    equipWeaponType: {
      domainName: "装備武器タイプ",
      format: s
    },
    equipArmorType: {
      domainName: "装備防具タイプ",
      format: s
    },
    equipLock: {
      domainName: "装備固定",
      format: s
    },
    equipSeal: {
      domainName: "装備封印",
      format: s
    },
    slotType: {
      domainName: "スロットタイプ",
      format: s
    },
    skillAdd: {
      domainName: "スキル追加",
      format: s
    },
    skillSeal: {
      domainName: "スキルタイプ封印",
      format: s
    },
    skillTypeAdd: {
      domainName: "スキルタイプ追加",
      format: s
    },
    skillTypeSeal: {
      domainName: "スキルタイプ封印",
      format: s
    }
  }
}, D = "{value}", v = "{name}";
class yt {
  constructor(t, n, o, c) {
    this.code = t, this.label = n, this.format = o, this.dataSource = c;
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
      D,
      t.value.toString()
    );
    return this.dataSource ? o.replaceAll(
      v,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue() {
    return this.format.includes(D);
  }
  requiresName() {
    return this.format.includes(v);
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
const pi = (e) => [
  lt(e.elementRate),
  ut(e.debuffRate),
  It(e.stateRate),
  gt(e.stateResist),
  St(e.regularParam),
  Nt(e.extraParam),
  Ct(e.specialParam),
  ft(e.attackElement),
  Ot(e.attackState),
  Lt(e.attackSpeed),
  Mt(e.attackTimes),
  Pt(e.attackSkill),
  Vt(e.skillTypeAdd),
  qt(e.skillTypeSeal),
  xt(e.skillAdd),
  Bt(e.skillSeal),
  Ht(e.equipWeaponType),
  Ut(e.equipArmorType),
  kt(e.equipLock),
  Gt(e.equipSeal),
  bt(e.slotType),
  Dt(e.actionPlus),
  vt(e.specialFlag),
  ht(e.collaps),
  Ft(e.partyAbility)
], h = (e, t) => typeof t == "string" ? t : e, a = (e, t, n, o) => {
  const c = h(t.domainName, n.domainName), E = h(t.format, n.format);
  return new yt(e, c, E, o);
}, Te = () => ({
  module: b,
  author: A,
  kind: Tn
}), Re = (e) => ({
  module: B,
  author: A,
  kind: e
}), p = (e) => ({
  author: A,
  module: O,
  kind: e
}), ye = (e) => ({
  author: A,
  module: b,
  kind: e
}), lt = (e) => a(
  Oe,
  i.options.elementRate,
  e,
  Te()
), ut = (e) => a(
  Le,
  i.options.debuffRate,
  e,
  p(l)
), It = (e) => a(
  Me,
  i.options.stateRate,
  e,
  p(l)
), gt = (e) => a(
  Pe,
  i.options.stateResist,
  e,
  Re(I)
), St = (e) => a(
  De,
  i.options.regularParam,
  e,
  p(l)
), Nt = (e) => a(
  ve,
  i.options.extraParam,
  e,
  p(ue)
), Ct = (e) => a(
  he,
  i.options.specialParam,
  e,
  p(Ie)
), ft = (e) => a(
  Fe,
  i.options.attackElement,
  e,
  Te()
), Ot = (e) => a(
  He,
  i.options.attackState,
  e,
  p(I)
), Lt = (e) => a(Ue, i.options.attackSpeed, e), Mt = (e) => a(ke, i.options.attackTimes, e), Pt = (e) => a(
  Ge,
  i.options.attackSkill,
  e,
  Re(Ce)
), Dt = (e) => a(Ke, i.options.actionPlus, e), vt = (e) => a(
  Xe,
  i.options.specialFlag,
  e,
  p(Ne)
), ht = (e) => a(
  $e,
  i.options.collaps,
  e,
  p(ge)
), Ft = (e) => a(
  Qe,
  i.options.partyAbility,
  e,
  p(Se)
), Ht = (e) => a(
  qe,
  i.options.equipWeaponType,
  e,
  ye(_n)
), Ut = (e) => a(
  We,
  i.options.equipArmorType,
  e,
  ye(An)
), kt = (e) => a(Ye, i.options.equipLock, e), Gt = (e) => a(we, i.options.equipSeal, e), xt = (e) => a(be, i.options.skillAdd, e), Bt = (e) => a(Ve, i.options.skillSeal, e), bt = (e) => a(je, i.options.slotType, e), Vt = (e) => a(
  xe,
  i.options.skillTypeAdd,
  e
), qt = (e) => a(
  Be,
  i.options.skillTypeSeal,
  e
), di = "Trait", Ei = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, _i = (e = {}) => ({
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
}), Wt = {
  type: "object",
  required: [
    "name",
    "id",
    "nickname",
    "battlerName",
    "characterName",
    "characterIndex",
    "faceName",
    "faceIndex",
    "classId",
    "initialLevel",
    "maxLevel"
  ],
  properties: {
    name: { type: "string" },
    battlerName: { type: "string" },
    characterName: { type: "string" },
    characterIndex: { type: "integer" },
    faceName: { type: "string" },
    faceIndex: { type: "integer", minimum: 0, maximum: 7 },
    id: { type: "integer", minimum: 0 },
    nickname: { type: "string" },
    profile: { type: "string" },
    initialLevel: { type: "integer", minimum: 0 },
    maxLevel: { type: "integer" },
    classId: { type: "integer", minimum: 0 },
    equips: { type: "array", items: { type: "integer" } },
    note: { type: "string" },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"]
      }
    }
  }
}, Ai = (e) => ({
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
}), Ti = (e = {}) => ({
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
}), Yt = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "price",
    "params",
    "traits",
    "note",
    "etypeId"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    params: {
      type: "array",
      items: [
        { type: "integer" },
        // mhp
        { type: "integer" },
        // mmp
        { type: "integer" },
        // atk
        { type: "integer" },
        // def
        { type: "integer" },
        // mat
        { type: "integer" },
        // mdf
        { type: "integer" },
        // agi
        { type: "integer" }
        // luk
      ],
      minItems: 8,
      maxItems: 8
    },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"]
      }
    }
  }
}, Ri = (e = {}) => ({
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
}), wt = {
  type: "object",
  required: [
    "name",
    "id",
    "note",
    "expParams",
    "params",
    "learnings",
    "traits"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    note: { type: "string" },
    expParams: {
      type: "array",
      items: { type: "integer" }
    },
    params: {
      type: "array",
      items: [
        { type: "integer" },
        // mhp
        { type: "integer" },
        // mmp
        { type: "integer" },
        // atk
        { type: "integer" },
        // def
        { type: "integer" },
        // mat
        { type: "integer" },
        // mdf
        { type: "integer" },
        // agi
        { type: "integer" }
        // luk
      ],
      minItems: 8,
      maxItems: 8
    },
    learnings: {
      type: "array",
      items: {
        type: "object",
        properties: {
          level: { type: "integer" },
          skillId: { type: "integer" },
          note: { type: "string" }
        },
        required: ["level", "skillId"],
        additionalProperties: !1
      }
    },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"],
        additionalProperties: !1
      }
    }
  },
  additionalProperties: !1
}, yi = (e = {}) => ({
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
}), jt = {
  type: "object",
  required: [
    "name",
    "id",
    "iconIndex",
    "message1",
    "message2",
    "message3",
    "message4",
    "restriction",
    "priority",
    "motion",
    "overlay",
    "removeAtBattleEnd",
    "removeByDamage",
    "removeByWalking",
    "removeByRestriction",
    "autoRemovalTiming",
    "minTurns",
    "maxTurns",
    "chanceByDamage",
    "stepsToRemove",
    "note"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    iconIndex: { type: "integer", minimum: 0 },
    message1: { type: "string" },
    message2: { type: "string" },
    message3: { type: "string" },
    message4: { type: "string" },
    restriction: { type: "integer" },
    priority: { type: "integer" },
    motion: { type: "integer" },
    overlay: { type: "integer" },
    removeAtBattleEnd: { type: "boolean" },
    removeByDamage: { type: "boolean" },
    removeByWalking: { type: "boolean" },
    removeByRestriction: { type: "boolean" },
    autoRemovalTiming: { type: "integer" },
    minTurns: { type: "integer" },
    maxTurns: { type: "integer" },
    chanceByDamage: { type: "integer" },
    stepsToRemove: { type: "integer" },
    note: { type: "string" },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"]
      }
    }
  }
}, li = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, ui = (e = {}) => ({
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
  damage: L(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), Kt = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "price",
    "params",
    "traits",
    "note",
    "etypeId"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    wtypeId: { type: "integer", minimum: 0 },
    params: {
      type: "array",
      items: [
        { type: "integer" },
        // mhp
        { type: "integer" },
        // mmp
        { type: "integer" },
        // atk
        { type: "integer" },
        // def
        { type: "integer" },
        // mat
        { type: "integer" },
        // mdf
        { type: "integer" },
        // agi
        { type: "integer" }
        // luk
      ],
      minItems: 8,
      maxItems: 8
    },
    damage: {
      type: "object",
      properties: {
        type: { type: "integer", minimum: 0 },
        elementId: { type: "integer", minimum: 0 },
        formula: { type: "string" },
        variance: { type: "integer", minimum: 0, maximum: 100 },
        critical: { type: "boolean" }
      },
      required: ["type", "elementId", "formula", "variance", "critical"]
    },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"]
      }
    }
  }
}, Xt = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), Ii = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), gi = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => Xt())) ?? [],
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
}, $t = {
  type: "object",
  required: [
    "name",
    "id",
    "battlerName",
    "battlerHue",
    "exp",
    "gold",
    "note",
    "params",
    "dropItems",
    "traits",
    "actions"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    battlerHue: { type: "integer", minimum: 0 },
    battlerName: { type: "string" },
    exp: { type: "integer", minimum: 0 },
    gold: { type: "integer", minimum: 0 },
    note: { type: "string" },
    params: {
      type: "array",
      items: [
        { type: "integer" },
        // mhp
        { type: "integer" },
        // mmp
        { type: "integer" },
        // atk
        { type: "integer" },
        // def
        { type: "integer" },
        // mat
        { type: "integer" },
        // mdf
        { type: "integer" },
        // agi
        { type: "integer" }
        // luk
      ],
      minItems: 8,
      maxItems: 8
    },
    actions: {
      type: "array",
      items: {
        type: "object",
        required: [
          "conditionParam1",
          "conditionParam2",
          "conditionType",
          "skillId",
          "rating"
        ],
        properties: {
          conditionParam1: { type: "integer" },
          conditionParam2: { type: "integer" },
          conditionType: { type: "integer" },
          skillId: { type: "integer" },
          rating: { type: "integer" }
        }
      }
    },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"]
      }
    },
    dropItems: {
      type: "array",
      items: {
        type: "object",
        properties: {
          kind: { type: "integer" },
          dataId: { type: "integer" },
          denominator: { type: "integer", minimum: 0 },
          rate: { type: "number" }
        },
        required: ["kind", "dataId", "denominator"]
      }
    }
  }
}, Si = (e = {}) => ({
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
  damage: L(e.damage ?? {}),
  effects: [],
  price: 0
}), Ni = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: L(e.damage ?? {}),
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
}), Qt = {
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
}, zt = {
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
}, Ci = 0, fi = 1, Oi = 2, Jt = "{name} + {value1}", F = "{name} {value1}%", N = "{value1}% + {value2}", H = "{name} {value1}ターン", y = "{name}", r = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: H
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: H
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: N
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: Jt
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: y
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
      format: y
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: y
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: F
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: y
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: F
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: y
    }
  }
}, Zt = 11, en = 12, tn = 13, nn = 21, on = 22, an = 31, sn = 32, rn = 33, cn = 34, Li = 41, mn = 42, pn = 43, dn = 44, Mi = 0, le = /^[a-zA-Z0-9]+$/, Pi = (e) => le.test(e) ? e : void 0, C = (e) => typeof e == "string" ? le.test(e) : !1, Di = (e) => [e.author, e.module, e.kind].join("."), vi = (e) => C(e.author) && C(e.module) && C(e.kind), l = "params", ue = "xparams", Ie = "sparams", ge = "collaps", Se = "partyAbiility", Ne = "sflag", hi = "actor", Fi = "variables", Hi = "map", Ui = "enemy", I = "state", Ce = "skill", ki = "items", Gi = "weapon", xi = "armor", Bi = "class", En = "common_event", bi = "troop", Vi = "colors", _n = "weaponTypes", An = "armorTypes", qi = "equipTypes", Wi = "switches", Yi = "skillTypes", Tn = "elements", U = "{value1}", k = "{value2}", G = "{name}";
class Rn {
  constructor(t, n, o, c, E) {
    this.codeId = t, this.label = n, this.format = o, this.description = c, this.dataSource = E;
  }
  formatText(t, n) {
    const o = this.format.replaceAll(U, t.value1.toString()).replaceAll(k, t.value2.toString());
    return this.dataSource ? o.replaceAll(
      G,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue1() {
    return this.format.includes(U);
  }
  requiresValue2() {
    return this.format.includes(k);
  }
  requiresName() {
    return this.format.includes(G);
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
const wi = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), ji = (e) => [
  yn(e.options.recoverHp),
  ln(e.options.recoverMp),
  un(e.options.gainTp),
  In(e.options.addState),
  gn(e.options.removeState),
  Sn(e.options.addBuff),
  fn(e.options.addDebuff),
  Nn(e.options.removeBuff),
  On(e.options.removeDebuff),
  Cn(e.options.learnSkill),
  Ln(e.options.commonEvent)
], g = () => ({
  author: A,
  module: O,
  kind: l
}), S = (e) => ({
  author: A,
  module: B,
  kind: e
}), m = (e, t, n, o) => {
  const c = n.domainName ?? t.domainName, E = n.format ?? t.format, fe = n.desc ?? t.desc;
  return new Rn(e, c, E, fe, o);
}, yn = (e) => m(
  Zt,
  r.options.recoverHp,
  e
), ln = (e) => m(
  en,
  r.options.recoverMp,
  e
), un = (e) => m(tn, r.options.gainTp, e), Ki = (e) => m(mn, r.options.grow, e), In = (e) => m(
  nn,
  r.options.addState,
  e,
  S(I)
), gn = (e) => m(
  on,
  r.options.removeState,
  e,
  S(I)
), Sn = (e) => m(
  an,
  r.options.addBuff,
  e,
  g()
), Nn = (e) => m(
  rn,
  r.options.removeBuff,
  e,
  g()
), Cn = (e) => m(
  pn,
  r.options.learnSkill,
  e,
  S(Ce)
), fn = (e) => m(
  sn,
  r.options.addBuff,
  e,
  g()
), On = (e) => m(
  cn,
  r.options.removeDebuff,
  e,
  g()
), Ln = (e) => m(
  dn,
  r.options.commonEvent,
  e,
  S(En)
), Xi = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, $i = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, Qi = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, Mn = {
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
}, Pn = {
  domainName: "ダメージ",
  options: {}
}, L = (e = {}) => ({
  type: e.type ?? 0,
  elementId: e.elementId ?? 0,
  formula: e.formula ?? "",
  variance: e.variance ?? 0,
  critical: e.critical ?? !1
}), zi = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, d = new f(), Dn = d.compile(zt), vn = d.compile(Qt), hn = d.compile(Wt), Fn = d.compile(Yt), Hn = d.compile(Kt), Un = d.compile($t), kn = d.compile(jt), Gn = d.compile(wt), Ji = (e) => Dn(e), Zi = (e) => vn(e), ea = (e) => hn(e), ta = (e) => Fn(e), na = (e) => Hn(e), oa = (e) => Un(e), ia = (e) => kn(e), aa = (e) => Gn(e), sa = 0, xn = 101, ra = 401, Bn = 102, bn = 402, Vn = 103, ca = 104, ma = 105, pa = 405, da = 108, Ea = 408, _a = 109, Aa = 111, Ta = 411, Ra = 112, ya = 113, la = 115, qn = 117, ua = 118, Ia = 119, ga = 121, Sa = 122, Na = 123, Ca = 124, fa = 125, Oa = 126, La = 127, Ma = 128, Pa = 129, Da = 132, va = 133, ha = 134, Fa = 135, Ha = 136, Ua = 137, ka = 138, Ga = 139, xa = 140, Ba = 201, ba = 202, Va = 203, qa = 204, Wa = 205, Ya = 206, wa = 211, ja = 212, Ka = 213, Xa = 214, $a = 216, Qa = 217, za = 221, Ja = 222, Za = 223, es = 224, ts = 225, ns = 230, os = 231, is = 232, as = 233, ss = 234, rs = 235, cs = 236, ms = 241, ps = 242, ds = 243, Es = 244, _s = 245, As = 246, Ts = 249, Rs = 250, ys = 251, ls = 261, us = 282, Is = 283, gs = 284, Ss = 285, Ns = 301, Cs = 302, fs = 605, Os = 303, Ls = 311, Ms = 312, Ps = 313, Ds = 314, vs = 315, hs = 320, Fs = 321, Hs = 322, Us = 323, ks = 324, Gs = 325, xs = 331, Bs = 332, bs = 333, Vs = 334, qs = 335, Ws = 336, Ys = 337, ws = 339, js = 340, Ks = 351, Xs = 342, $s = 352, Qs = 353, zs = 354, Js = 355, Zs = 655, er = 356, tr = 357, nr = 0, or = 1, ir = 2, ar = 3, sr = 4, rr = 5, cr = 6, mr = 7, pr = 8, dr = 9, Er = 10, _r = 11, Ar = 12, Tr = 13, Rr = 14, yr = 15, lr = 16, ur = 17, Ir = 18, gr = 19, Sr = 20, Nr = 21, Cr = 22, fr = 23, Or = 24, Lr = 25, Mr = 26, Pr = 27, Dr = 28, vr = 29, hr = 30, Fr = 31, Hr = 32, Ur = 33, kr = 34, Gr = 35, xr = 36, Br = 37, br = 38, Vr = 39, qr = 40, Wr = 41, Yr = 42, wr = 43, jr = 44, Kr = 45, Xr = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), Wn = () => ({
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}), Yn = () => ({
  actorId: 1,
  itemId: 1,
  selfSwitchCh: "A",
  selfSwitchValid: !1,
  switch1Id: 1,
  switch2Id: 1,
  variableId: 1,
  variableValue: 0,
  actorValid: !1,
  itemValid: !1,
  switch1Valid: !1,
  switch2Valid: !1,
  variableValid: !1
}), $r = () => ({
  conditions: Yn(),
  list: [],
  directionFix: !1,
  image: Wn(),
  moveFrequency: 5,
  moveRoute: {
    list: [],
    repeat: !1,
    skippable: !1,
    wait: !1
  }
}), wn = {
  type: "object",
  required: [
    "name",
    "id",
    "expanded",
    "order",
    "parentId",
    "scrollX",
    "scrollY"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    expanded: { type: "boolean" },
    order: { type: "integer" },
    parentId: { type: "integer" },
    scrollX: { type: "integer" },
    scrollY: { type: "integer" }
  }
}, jn = (e) => e.toString().padStart(3, "0"), Qr = (e = { id: 0 }) => ({
  name: e.name ?? jn(e.id),
  id: e.id,
  expanded: e.expanded ?? !1,
  order: e.order ?? 0,
  parentId: e.parentId ?? 0,
  scrollX: e.scrollX ?? 0,
  scrollY: e.scrollY ?? 0
}), zr = (e = {}) => ({
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
}), Jr = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), Zr = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), ec = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), tc = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), Kn = new f(), Xn = Kn.compile(wn), nc = (e) => Xn(e), oc = {
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
}, ic = {
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
}, $n = {
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
}, ac = {
  rpg: {
    damage: Pn,
    data: Mn,
    traits: i,
    itemEffect: r
  },
  global: $n
}, sc = (e) => ({
  name: e.name ?? "",
  volume: e.volume ?? 100,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
}), rc = (e, t = 0) => ({
  code: qn,
  indent: t,
  parameters: Qn(e ?? {})
}), cc = (e) => ({
  eventId: e[0]
}), Qn = (e) => [e.eventId ?? 0], zn = {
  type: "object",
  properties: {
    code: { type: "number", const: 117 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: [{ type: "number", minimum: 0, default: 0 }]
    }
  },
  required: ["code", "indent", "parameters"]
}, Jn = (e) => [e.variableId ?? 0, e.digits ?? 0], mc = (e) => ({
  variableId: e[0],
  digits: e[1]
}), pc = (e, t = 0) => ({
  code: Vn,
  indent: t,
  parameters: Jn(e ?? {})
}), Zn = {
  type: "object",
  properties: {
    code: { type: "number", const: 103 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "number" },
        // variableId
        { type: "number" }
        // digits
      ]
    }
  },
  required: ["code", "indent", "parameters"]
}, dc = {
  type: "object",
  properties: {
    code: { type: "number", const: 105 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "number" },
        // speed
        { type: "boolean" }
        // skip
      ]
    }
  },
  required: ["code", "indent", "parameters"]
}, Ec = {
  type: "object",
  properties: {
    code: { type: "number", const: 405 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: [{ type: "string" }]
      // content
    }
  },
  required: ["code", "indent", "parameters"]
}, _c = (e, t = 0) => ({
  code: bn,
  indent: t,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), Ac = (e) => ({
  index: e[0],
  name: e[1]
}), Tc = (e) => [e.index ?? 0, e.name ?? ""], Rc = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), yc = (e) => [
  e.choices ?? [],
  e.cancelType ?? 0,
  e.defaultType ?? 0,
  e.positionType ?? 2,
  e.background ?? 0
], lc = (e, t = 0) => ({
  code: Bn,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.choices) ?? [],
    (e == null ? void 0 : e.cancelType) ?? 0,
    (e == null ? void 0 : e.defaultType) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.background) ?? 0
  ]
}), eo = {
  type: "object",
  properties: {
    code: { type: "number", const: 402 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "integer" },
        // index
        { type: "string" }
        // name
      ]
    }
  },
  required: ["code", "indent", "parameters"]
}, to = {
  type: "object",
  properties: {
    code: { type: "number", const: 102 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 5,
      maxItems: 5,
      items: [
        { type: "array", items: { type: "string" } },
        // choices
        { type: "integer" },
        // cancelType
        { type: "integer" },
        // defaultType
        { type: "integer" },
        // positionType
        { type: "integer" }
        // background
      ]
    }
  },
  required: ["code", "indent", "parameters"]
}, no = (e, t = 0) => ({
  code: xn,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.facename) ?? "",
    (e == null ? void 0 : e.faceIndex) ?? 0,
    (e == null ? void 0 : e.background) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.speakerName) ?? ""
  ]
}), uc = {
  fromArray: (e) => ({
    facename: e[0],
    faceIndex: e[1],
    background: e[2],
    positionType: e[3],
    speakerName: e[4]
  }),
  toArray: (e) => [
    e.facename,
    e.faceIndex,
    e.background,
    e.positionType,
    e.speakerName
  ],
  makeCommand: (e, t = 0) => no(e, t)
}, oo = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: { type: "integer", enum: [101] },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      items: [
        { type: "string" },
        // facename
        { type: "integer", minimum: 0, maximum: 7 },
        // faceIndex
        { type: "integer", minimum: 0, maximum: 2 },
        // background
        { type: "integer", minimum: 0, maximum: 2 },
        // positionType
        { type: "string" }
        // speakerName
      ],
      minItems: 5,
      maxItems: 5
    }
  }
}, u = new f(), io = u.compile(zn), ao = u.compile(oo), so = u.compile(to), ro = u.compile(eo), co = u.compile(Zn), Ic = (e) => io(e), gc = (e) => so(e), Sc = (e) => ro(e), Nc = (e) => co(e), Cc = (e) => ao(e);
export {
  js as ABORT_BATTLE,
  A as AUTHOR_RMMZ,
  Ns as BATTLE_PROCESSING,
  Hs as CHANGE_ACTOR_IMAGES,
  Ma as CHANGE_ARMORS,
  Is as CHANGE_BATTLE_BACKGROUND,
  Da as CHANGE_BATTLE_BGM,
  Fs as CHANGE_CLASS,
  Ga as CHANGE_DEFEAT_ME,
  Ha as CHANGE_ENCOUNTER,
  xs as CHANGE_ENEMY_HP,
  Bs as CHANGE_ENEMY_MP,
  bs as CHANGE_ENEMY_STATE,
  Xs as CHANGE_ENEMY_TP,
  vs as CHANGE_EXP,
  Ua as CHANGE_FORMATION_ACCESS,
  fa as CHANGE_GOLD,
  Ls as CHANGE_HP,
  Oa as CHANGE_ITEMS,
  Fa as CHANGE_MENU_ACCESS,
  Ms as CHANGE_MP,
  hs as CHANGE_NAME,
  ks as CHANGE_NICKNAME,
  gs as CHANGE_PARALLAX,
  Pa as CHANGE_PARTY_MEMBER,
  $a as CHANGE_PLAYER_FOLLOWERS,
  Gs as CHANGE_PROFILE,
  ha as CHANGE_SAVE_ACCESS,
  us as CHANGE_TILESET,
  Ps as CHANGE_TP,
  wa as CHANGE_TRANSPARENCY,
  xa as CHANGE_VEHICLE_BGM,
  Us as CHANGE_VEHICLE_IMAGE,
  va as CHANGE_VICTORY_ME,
  La as CHANGE_WEAPONS,
  ka as CHANGE_WINDOW_COLOR,
  Je as COLLAPS_BOSS,
  Ze as COLLAPS_INSTANT,
  et as COLLAPS_NONE,
  ze as COLLAPS_NORMAL,
  da as COMMENT,
  Ea as COMMENT_BODY,
  qn as COMMON_EVENT,
  Aa as CONDITIONAL_BRANCH,
  Ta as CONDITIONAL_BRANCH_ELSE,
  Na as CONTROL_SELF_SWITCH,
  ga as CONTROL_SWITCHES,
  Ca as CONTROL_TIMER,
  Sa as CONTROL_VARIABLES,
  uc as CommandShowMessage,
  Pn as DEFAULT_DAMAGE_LABELS,
  $n as DEFAULT_GLOBAL_LABELS,
  Xi as DEFAULT_ITEM_LABELS,
  $i as DEFAULT_SKILL_LABELS,
  oc as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Qi as DEFAULT_USABLE_ITEM_LABELS,
  an as EFFECT_ADD_BUFF,
  sn as EFFECT_ADD_DEBUFF,
  nn as EFFECT_ADD_STATE,
  dn as EFFECT_COMMON_EVENT,
  tn as EFFECT_GAIN_TP,
  mn as EFFECT_GROW,
  pn as EFFECT_LEARN_SKILL,
  Zt as EFFECT_RECOVER_HP,
  en as EFFECT_RECOVER_MP,
  rn as EFFECT_REMOVE_BUFF,
  cn as EFFECT_REMOVE_DEBUFF,
  on as EFFECT_REMOVE_STATE,
  Li as EFFECT_SPECIAL,
  qs as ENEMY_APPEAR,
  Vs as ENEMY_RECOVER_ALL,
  Ws as ENEMY_TRANSFORM,
  Xa as ERASE_EVENT,
  rs as ERASE_PICTURE,
  la as EXIT_EVENT_PROCESSING,
  Y as EXTRA_PARAM_CEV,
  K as EXTRA_PARAM_CNT,
  W as EXTRA_PARAM_CRI,
  q as EXTRA_PARAM_EVA,
  V as EXTRA_PARAM_HIT,
  X as EXTRA_PARAM_HRG,
  w as EXTRA_PARAM_MEV,
  j as EXTRA_PARAM_MRF,
  $ as EXTRA_PARAM_MRG,
  Q as EXTRA_PARAM_TRG,
  Ja as FADEIN_SCREEN,
  ps as FADEOUT_BGM,
  As as FADEOUT_BGS,
  za as FADEOUT_SCREEN,
  Po as FILENAME_ACTORS,
  xo as FILENAME_ANIMATIONS,
  Ho as FILENAME_ARMORS,
  Do as FILENAME_CLASSES,
  bo as FILENAME_COMMON_EVENTS,
  Uo as FILENAME_ENEMIES,
  ho as FILENAME_ITEMS,
  Vo as FILENAME_MAP_INFOS,
  vo as FILENAME_SKILLS,
  Go as FILENAME_STATES,
  Mo as FILENAME_SYSTEM,
  Bo as FILENAME_TILESET,
  ko as FILENAME_TROOPS,
  Fo as FILENAME_WEAPONS,
  rt as FLAG_ID_AUTO_BATTLE,
  ct as FLAG_ID_GUARD,
  pt as FLAG_ID_PRESERVE_TP,
  mt as FLAG_ID_SUBSTITUTE,
  es as FLASH_SCREEN,
  Yo as FOLDER_AUDIO,
  po as FOLDER_AUDIO_BGM,
  Ao as FOLDER_AUDIO_BGS,
  _o as FOLDER_AUDIO_ME,
  Eo as FOLDER_AUDIO_SE,
  qo as FOLDER_DATA,
  Wo as FOLDER_IMG,
  To as FOLDER_IMG_BATTLEBACK1,
  Ro as FOLDER_IMG_BATTLEBACK2,
  yo as FOLDER_IMG_CHACTERS,
  lo as FOLDER_IMG_ENEMIES,
  uo as FOLDER_IMG_FACES,
  Io as FOLDER_IMG_PARALLACES,
  go as FOLDER_IMG_PICTURES,
  So as FOLDER_IMG_SV_ACTORS,
  No as FOLDER_IMG_SV_ENEMIES,
  Co as FOLDER_IMG_SYSTEM,
  fo as FOLDER_IMG_TILESETS,
  Oo as FOLDER_IMG_TITLES1,
  Lo as FOLDER_IMG_TITLES2,
  wo as FOLDER_JS,
  ws as FORCE_ACTION,
  Qs as GAME_OVER,
  Qa as GATHER_FOLLOWERS,
  Ss as GET_LOCATION_INFO,
  Ya as GET_ONOFF_VEHICLE,
  Ci as HITTYPE_CERTAIN,
  Oi as HITTYPE_MAGICAL,
  fi as HITTYPE_PHYSICAL,
  Vn as INPUT_NUMBER,
  ua as LABEL,
  li as LABELS_DATA_WEAPON,
  Ia as LABEL_JUMP,
  ac as LABEL_REGISTRY_JP,
  Mn as LABEL_SET_DATA,
  r as LABEL_SET_ITEM_EFFECT,
  i as LABEL_SET_TRAIT,
  Ra as LOOP,
  ya as LOOP_BREAK,
  B as MODULE_DATA,
  b as MODULE_SYSTEM,
  O as MODULE_TRAIT,
  is as MOVE_PICTURE,
  ic as MockSystemLabelDataTypes,
  Os as NAME_INPUT_PROCESSING,
  sa as NO_OPERATION,
  Ks as OPEN_MENU_SCREEN,
  $s as OPEN_SAVE_SCREEN,
  ot as PARTY_ABILITY_CANCEL_SURPRISE,
  st as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  tt as PARTY_ABILITY_ENCOUNTER_HALF,
  nt as PARTY_ABILITY_ENCOUNTER_NONE,
  at as PARTY_ABILITY_GOLD_DOUBLE,
  it as PARTY_ABILITY_RAISE_PREEMPTIVE,
  ms as PLAY_BGM,
  _s as PLAY_BGS,
  Ts as PLAY_ME,
  ls as PLAY_MOVIE,
  Rs as PLAY_SE,
  er as PLUGIN_COMMAND_MV,
  tr as PLUGIN_COMMAND_MZ,
  Ds as RECOVER_ALL,
  oe as REGULAR_PARAM_AGI,
  Z as REGULAR_PARAM_ATK,
  ee as REGULAR_PARAM_DEF,
  ie as REGULAR_PARAM_LUK,
  te as REGULAR_PARAM_MATK,
  z as REGULAR_PARAM_MAX_HP,
  J as REGULAR_PARAM_MAX_MP,
  ne as REGULAR_PARAM_MDEF,
  Es as RESUME_BGM,
  zs as RETURN_TO_TITLE_SCREEN,
  as as ROTATE_PICTURE,
  wr as ROUTE_CHANGE_BLEND_MODE,
  hr as ROUTE_CHANGE_FREQ,
  Wr as ROUTE_CHANGE_IMAGE,
  Yr as ROUTE_CHANGE_OPACITY,
  vr as ROUTE_CHANGE_SPEED,
  xr as ROUTE_DIR_FIX_OFF,
  Gr as ROUTE_DIR_FIX_ON,
  nr as ROUTE_END,
  Rr as ROUTE_JUMP,
  _r as ROUTE_MOVE_AWAY,
  Tr as ROUTE_MOVE_BACKWARD,
  or as ROUTE_MOVE_DOWN,
  Ar as ROUTE_MOVE_FORWARD,
  ir as ROUTE_MOVE_LEFT,
  rr as ROUTE_MOVE_LOWER_L,
  cr as ROUTE_MOVE_LOWER_R,
  dr as ROUTE_MOVE_RANDOM,
  ar as ROUTE_MOVE_RIGHT,
  Er as ROUTE_MOVE_TOWARD,
  sr as ROUTE_MOVE_UP,
  mr as ROUTE_MOVE_UPPER_L,
  pr as ROUTE_MOVE_UPPER_R,
  jr as ROUTE_PLAY_SE,
  Kr as ROUTE_SCRIPT,
  kr as ROUTE_STEP_ANIME_OFF,
  Ur as ROUTE_STEP_ANIME_ON,
  Dr as ROUTE_SWITCH_OFF,
  Pr as ROUTE_SWITCH_ON,
  br as ROUTE_THROUGH_OFF,
  Br as ROUTE_THROUGH_ON,
  qr as ROUTE_TRANSPARENT_OFF,
  Vr as ROUTE_TRANSPARENT_ON,
  Cr as ROUTE_TURN_180D,
  Nr as ROUTE_TURN_90D_L,
  Sr as ROUTE_TURN_90D_R,
  fr as ROUTE_TURN_90D_R_L,
  Mr as ROUTE_TURN_AWAY,
  lr as ROUTE_TURN_DOWN,
  ur as ROUTE_TURN_LEFT,
  Or as ROUTE_TURN_RANDOM,
  Ir as ROUTE_TURN_RIGHT,
  Lr as ROUTE_TURN_TOWARD,
  gr as ROUTE_TURN_UP,
  yr as ROUTE_WAIT,
  Hr as ROUTE_WALK_ANIME_OFF,
  Fr as ROUTE_WALK_ANIME_ON,
  ds as SAVE_BGM,
  zn as SCHEMA_COMMAND_CALL_COMMON_EVENT,
  Zn as SCHEMA_COMMAND_INPUT_NUMBER,
  Ec as SCHEMA_COMMAND_SCROLL_TEXT_BODY,
  dc as SCHEMA_COMMAND_SCROLL_TEXT_HEAD,
  to as SCHEMA_COMMAND_SHOW_CHOICES,
  eo as SCHEMA_COMMAND_SHOW_CHOICE_ITEM,
  oo as SCHEMA_COMMAND_SHOW_MESSAGE,
  zi as SCHEMA_DAMAGE,
  Wt as SCHEMA_DATA_ACTOR,
  Yt as SCHEMA_DATA_ARMMOR,
  wt as SCHEMA_DATA_CLASS,
  $t as SCHEMA_DATA_ENEMY,
  zt as SCHEMA_DATA_ITEM,
  wn as SCHEMA_DATA_MAP_INFO,
  Qt as SCHEMA_DATA_SKILL,
  jt as SCHEMA_DATA_STATE,
  Kt as SCHEMA_DATA_WEAPON,
  Ei as SCHEMA_TRAIT,
  Js as SCRIPT_EVAL,
  Zs as SCRIPT_EVAL_BODY,
  qa as SCROLL_MAP,
  ca as SELECT_ITEM,
  Va as SET_EVENT_LOCATION,
  Wa as SET_MOVEMENT_ROUTE,
  ba as SET_VEHICLE_LOCATION,
  cs as SET_WEATHER_EFFECT,
  ts as SHAKE_SCREEN,
  Cs as SHOP_PROCESSING,
  fs as SHOP_PROCESSING_BODY,
  ja as SHOW_ANIMATION,
  Ka as SHOW_BALLOON_ICON,
  Ys as SHOW_BATTLE_ANIMATION,
  Bn as SHOW_CHOICES,
  bn as SHOW_CHOICES_ITEM,
  xn as SHOW_MESSAGE,
  ra as SHOW_MESSAGE_BODY,
  os as SHOW_PICTURE,
  ma as SHOW_SCROLLING_TEXT,
  pa as SHOW_SCROLLING_TEXT_BODY,
  _a as SKIP,
  Mi as SPECIAL_EFFECT_ESCAPE,
  Ae as SPECIAL_PARAM_EXR,
  _e as SPECIAL_PARAM_FDR,
  se as SPECIAL_PARAM_GRD,
  me as SPECIAL_PARAM_MCR,
  Ee as SPECIAL_PARAM_MDR,
  de as SPECIAL_PARAM_PDR,
  ce as SPECIAL_PARAM_PHA,
  re as SPECIAL_PARAM_REC,
  pe as SPECIAL_PARAM_TCR,
  ae as SPECIAL_PARAM_TGR,
  An as SRC_ARMOR_TYPES,
  Vi as SRC_COLOR,
  hi as SRC_DATA_ACTOR,
  xi as SRC_DATA_ARMOR,
  Bi as SRC_DATA_CLASS,
  En as SRC_DATA_COMMON_EVNET,
  Ui as SRC_DATA_ENEMY,
  ki as SRC_DATA_ITEMS,
  Hi as SRC_DATA_MAP,
  Ce as SRC_DATA_SKILL,
  I as SRC_DATA_STATE,
  bi as SRC_DATA_TROOP,
  Fi as SRC_DATA_VARIABLE,
  Gi as SRC_DATA_WEAPON,
  Tn as SRC_ELEMENTS,
  qi as SRC_EQUIP_TYPES,
  ue as SRC_PARAMS_EXTRA,
  l as SRC_PARAMS_REGULAR,
  Ie as SRC_PARAMS_SPECIAL,
  Yi as SRC_SKILL_TYPES,
  Wi as SRC_SWITCHES,
  ge as SRC_TRAIT_COLLAPS,
  Se as SRC_TRAIT_PARTY_ABILITY,
  Ne as SRC_TRAIT_SPECIAL_FLAG,
  _n as SRC_WEAPON_TYPES,
  ys as STOP_SE,
  ss as TINT_PICTURE,
  Za as TINT_SCREEN,
  Ke as TRAIT_ACTION_PLUS,
  Fe as TRAIT_ATTACK_ELEMENT,
  Ge as TRAIT_ATTACK_SKILL,
  Ue as TRAIT_ATTACK_SPEED,
  He as TRAIT_ATTACK_STATE,
  ke as TRAIT_ATTACK_TIMES,
  $e as TRAIT_COLLAPSE_TYPE,
  Le as TRAIT_DEBUFF_RATE,
  Oe as TRAIT_ELEMENT_RATE,
  We as TRAIT_EQUIP_ARMOR_TYPE,
  Ye as TRAIT_EQUIP_LOCK,
  we as TRAIT_EQUIP_SEAL,
  qe as TRAIT_EQUIP_WEAPON_TYPE,
  De as TRAIT_PARAM,
  Qe as TRAIT_PARTY_ABILITY,
  be as TRAIT_SKILL_ADD,
  Ve as TRAIT_SKILL_SEAL,
  xe as TRAIT_SKILL_TYPE_ADD,
  Be as TRAIT_SKILL_TYPE_SEAL,
  je as TRAIT_SLOT_TYPE,
  he as TRAIT_SPARAM,
  Xe as TRAIT_SPECIAL_FLAG,
  Me as TRAIT_STATE_RATE,
  Pe as TRAIT_STATE_RESIST,
  ve as TRAIT_XPARAM,
  Ba as TRANSFER_PLAYER,
  di as TYPENAME_TRAIT,
  yt as TraitDescriptor,
  ns as WAIT,
  ii as buildCollapsSource,
  ri as buildExtraParamSource,
  ai as buildPartyAbilitySource,
  si as buildRegularParamSource,
  mi as buildSpecialFlagSource,
  ci as buildSpecialParamSource,
  Sn as defineEffectAddBuff,
  fn as defineEffectAddDebuff,
  In as defineEffectAddState,
  Ln as defineEffectCommonEvent,
  un as defineEffectGainTp,
  Ki as defineEffectGrow,
  Cn as defineEffectLearnSkill,
  yn as defineEffectRecoverHp,
  ln as defineEffectRecoverMp,
  Nn as defineEffectRemoveBuff,
  On as defineEffectRemoveDebuff,
  gn as defineEffectRemoveState,
  ni as extraParamName,
  dt as foldCollapsOptions,
  At as foldExtraParam,
  Et as foldPartyAbilityOptions,
  _t as foldRegularParam,
  Rt as foldSpecialFlag,
  Tt as foldSpecialParams,
  wi as formatItemEffectText,
  cc as fromArrayCommonEvent,
  mc as fromArrayInputNumber,
  Rc as fromArraySetupChoice,
  Ac as fromArraySetupChoiceItem,
  Zo as getArmorTypes,
  $o as getElementTypes,
  Qo as getEquipTypes,
  ei as getParamNames,
  zo as getSkillTypes,
  Xo as getVariableNames,
  Jo as getWeaponTypes,
  Ic as isCommandCommonEvent,
  Nc as isCommandInputNumber,
  Sc as isCommandShowChoiceItem,
  gc as isCommandShowChoices,
  Cc as isCommandShowMessage,
  ea as isDataActor,
  ta as isDataArmor,
  aa as isDataClass,
  oa as isDataEnemy,
  Ji as isDataItem,
  nc as isDataMapInfo,
  Zi as isDataSkill,
  ia as isDataState,
  na as isDataWeapon,
  vi as isValid,
  Di as joinSourceKey,
  _i as makeActorData,
  Ti as makeArmorData,
  sc as makeAudioFileParams,
  Ri as makeClassData,
  rc as makeCommand2_CommonEvent,
  _c as makeCommand2_ShowChoiceItem,
  pc as makeCommandInputNumber,
  lc as makeCommandSetupChoice,
  no as makeCommandShowMessage,
  Jr as makeCommonEventData,
  L as makeDamage,
  Xt as makeDropItem,
  Ii as makeEnemyAction,
  gi as makeEnemyData,
  Yn as makeEventPageCondition,
  Si as makeItemData,
  zr as makeMapData,
  Xr as makeMapEvent,
  Wn as makeMapEventIamge,
  $r as makeMapEventPage,
  Qr as makeMapInfoData,
  Ni as makeSkillData,
  yi as makeStateData,
  Zr as makeTroopData,
  tc as makeTroopEventConditions,
  ec as makeTroopMember,
  ui as makeWeaponData,
  jo as mergeDomainLabel,
  Ko as mergeNestedPrimitiveRecords,
  x as mergeWithDefaults,
  Ai as normalizeDataActor,
  ti as regularParamName,
  ji as resolveItemEffectLabels,
  pi as resolveTraitLabels,
  Pi as sanitizeKey,
  oi as specialParamName,
  C as testUnknonwKey,
  Qn as toArrayCommonEvent,
  Jn as toArrayInputNumber,
  yc as toArraySetupChoice,
  Tc as toArraySetupChoiceItem,
  R as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
