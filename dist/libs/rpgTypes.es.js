import G from "ajv";
const jn = "bgm", wn = "se", Kn = "me", Xn = "bgs", $n = "battlebacks1", Qn = "battlebacks2", zn = "characters", Jn = "enemies", Zn = "faces", eo = "parallaxes", to = "pictures", no = "sv_actors", oo = "sv_enemies", ao = "system", io = "tilesets", so = "titles1", ro = "titles2", co = "System.json", mo = "Actors.json", po = "Classes.json", Eo = "Skills.json", _o = "Items.json", Ao = "Weapons.json", To = "Armors.json", Ro = "Enemies.json", lo = "Troops.json", yo = "States.json", uo = "Animations.json", Io = "Tilesets.json", go = "CommonEvents.json", So = "MapInfos.json", No = "data", fo = "img", Oo = "audio", Lo = "js", k = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const c = t[o];
    typeof c == "string" && (n[o] = c);
  }
  return n;
}, Co = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: k(e.options, t.options ?? {})
}), Mo = (e, t) => {
  const n = {};
  for (const o in e) {
    const c = e[o], d = t[o] ?? {};
    n[o] = k(
      c,
      d
    );
  }
  return n;
}, _ = (e, t) => ({
  name: e,
  id: t
}), Po = (e) => e.variables.map(_), Do = (e) => e.elements.map(_), vo = (e) => e.equipTypes.map(_), Fo = (e) => e.skillTypes.map(_), Uo = (e) => e.weaponTypes.map(_), ho = (e) => e.armorTypes.map(_), Ho = (e) => e.terms.params.map(_), A = "rmmz", f = "trait", B = "data", x = "system", Oe = 11, Le = 12, Ce = 13, Me = 14, Pe = 21, De = 22, ve = 23, Fe = 31, Ue = 32, he = 33, He = 34, Ge = 35, ke = 41, Be = 42, xe = 43, Ve = 44, Ye = 51, qe = 52, We = 53, be = 54, je = 55, we = 61, Ke = 62, Xe = 63, $e = 64, Qe = 0, ze = 1, Je = 2, Ze = 3, et = 0, tt = 1, nt = 2, ot = 3, at = 4, it = 5, st = 0, rt = 1, ct = 2, mt = 3, V = 0, Y = 1, q = 2, W = 3, b = 4, j = 5, w = 6, K = 7, X = 8, $ = 9, Q = 0, z = 1, J = 2, Z = 3, ee = 4, te = 5, ne = 6, oe = 7, ae = 0, ie = 1, se = 2, re = 3, ce = 4, me = 5, pe = 6, Ee = 7, de = 8, _e = 9, Go = (e, t) => {
  switch (e) {
    case Q:
      return t.maxHp;
    case z:
      return t.maxMp;
    case J:
      return t.atk;
    case Z:
      return t.def;
    case ee:
      return t.matk;
    case te:
      return t.mdef;
    case ne:
      return t.agi;
    case oe:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, ko = (e, t) => {
  switch (e) {
    case W:
      return t.criticalEvasionRate;
    case Y:
      return t.evasionRate;
    case w:
      return t.counterAttackRate;
    case q:
      return t.criticalRate;
    case V:
      return t.hitRate;
    case K:
      return t.hpRegenerationRate;
    case b:
      return t.magicEvasionRate;
    case j:
      return t.magicReflectionRate;
    case X:
      return t.mpRegenerationRate;
    case $:
      return t.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, Bo = (e, t) => {
  switch (e) {
    case _e:
      return t.experienceRate;
    case ae:
      return t.targetRate;
    case de:
      return t.floorDamageRate;
    case ie:
      return t.guradEffectRate;
    case ce:
      return t.mpCostRate;
    case me:
      return t.tpChargeRate;
    case pe:
      return t.physicalDamageRate;
    case Ee:
      return t.magicDamageRate;
    case re:
      return t.pharmacology;
    case se:
      return t.recoveryEffectRate;
  }
  return `?sparams[${e}]`;
}, pt = (e, t) => [
  {
    id: Qe,
    name: t.normal
  },
  {
    id: ze,
    name: e.bossCollaps
  },
  {
    id: Je,
    name: e.instantCollaps
  },
  {
    id: Ze,
    name: e.noneCollaps
  }
], Et = (e) => [
  {
    id: et,
    name: e.encounterHalf
  },
  {
    id: tt,
    name: e.encounterNone
  },
  {
    id: nt,
    name: e.cancelSurprise
  },
  {
    id: ot,
    name: e.raisePreemptive
  },
  {
    id: at,
    name: e.goldDouble
  },
  {
    id: it,
    name: e.dropItemDouble
  }
], dt = (e) => [
  { id: Q, name: e.maxHp },
  { id: z, name: e.maxMp },
  { id: J, name: e.atk },
  { id: Z, name: e.def },
  { id: ee, name: e.matk },
  { id: te, name: e.mdef },
  { id: ne, name: e.agi },
  { id: oe, name: e.luk }
], _t = (e) => [
  {
    id: V,
    name: e.hitRate
  },
  {
    id: Y,
    name: e.evasionRate
  },
  {
    id: q,
    name: e.criticalRate
  },
  {
    id: W,
    name: e.criticalEvasionRate
  },
  {
    id: b,
    name: e.magicEvasionRate
  },
  {
    id: j,
    name: e.magicReflectionRate
  },
  {
    id: w,
    name: e.counterAttackRate
  },
  {
    id: K,
    name: e.hpRegenerationRate
  },
  {
    id: X,
    name: e.mpRegenerationRate
  },
  {
    id: $,
    name: e.tpRegenerationRate
  }
], At = (e) => [
  {
    id: ae,
    name: e.targetRate
  },
  {
    id: ie,
    name: e.guradEffectRate
  },
  {
    id: se,
    name: e.recoveryEffectRate
  },
  {
    id: re,
    name: e.pharmacology
  },
  {
    id: ce,
    name: e.mpCostRate
  },
  {
    id: me,
    name: e.tpChargeRate
  },
  {
    id: pe,
    name: e.physicalDamageRate
  },
  {
    id: Ee,
    name: e.magicDamageRate
  },
  {
    id: de,
    name: e.floorDamageRate
  },
  {
    id: _e,
    name: e.experienceRate
  }
], Tt = (e) => [
  {
    id: st,
    name: e.autoBattle
  },
  {
    id: rt,
    name: e.guard
  },
  {
    id: ct,
    name: e.substitute
  },
  {
    id: mt,
    name: e.preventEscape
  }
], R = (e, t, n) => ({
  items: n(t.options),
  label: t.domainName,
  source: {
    author: A,
    module: f,
    kind: e
  }
}), xo = (e, t) => R(
  Ie,
  e,
  (n) => pt(n, t)
), Vo = (e) => R(ge, e, Et), Yo = (e) => R(y, e, dt), qo = (e) => R(ye, e, _t), Wo = (e) => R(ue, e, At), bo = (e) => R(Se, e, Tt), s = "{name}", T = "{name} * {value}%", L = "{name} + {value}%", C = "{value}", a = {
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
      format: L,
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
      format: L
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
}, M = "{value}", P = "{name}";
class Rt {
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
      M,
      t.value.toString()
    );
    return this.dataSource ? o.replaceAll(
      P,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue() {
    return this.format.includes(M);
  }
  requiresName() {
    return this.format.includes(P);
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
const jo = (e) => [
  lt(e.elementRate),
  yt(e.debuffRate),
  ut(e.stateRate),
  It(e.stateResist),
  gt(e.regularParam),
  St(e.extraParam),
  Nt(e.specialParam),
  ft(e.attackElement),
  Ot(e.attackState),
  Lt(e.attackSpeed),
  Ct(e.attackTimes),
  Mt(e.attackSkill),
  Vt(e.skillTypeAdd),
  Yt(e.skillTypeSeal),
  kt(e.skillAdd),
  Bt(e.skillSeal),
  Ut(e.equipWeaponType),
  ht(e.equipArmorType),
  Ht(e.equipLock),
  Gt(e.equipSeal),
  xt(e.slotType),
  Pt(e.actionPlus),
  Dt(e.specialFlag),
  vt(e.collaps),
  Ft(e.partyAbility)
], D = (e, t) => typeof t == "string" ? t : e, i = (e, t, n, o) => {
  const c = D(t.domainName, n.domainName), d = D(t.format, n.format);
  return new Rt(e, c, d, o);
}, Ae = () => ({
  module: x,
  author: A,
  kind: An
}), Te = (e) => ({
  module: B,
  author: A,
  kind: e
}), p = (e) => ({
  author: A,
  module: f,
  kind: e
}), Re = (e) => ({
  author: A,
  module: x,
  kind: e
}), lt = (e) => i(
  Oe,
  a.options.elementRate,
  e,
  Ae()
), yt = (e) => i(
  Le,
  a.options.debuffRate,
  e,
  p(y)
), ut = (e) => i(
  Ce,
  a.options.stateRate,
  e,
  p(y)
), It = (e) => i(
  Me,
  a.options.stateResist,
  e,
  Te(u)
), gt = (e) => i(
  Pe,
  a.options.regularParam,
  e,
  p(y)
), St = (e) => i(
  De,
  a.options.extraParam,
  e,
  p(ye)
), Nt = (e) => i(
  ve,
  a.options.specialParam,
  e,
  p(ue)
), ft = (e) => i(
  Fe,
  a.options.attackElement,
  e,
  Ae()
), Ot = (e) => i(
  Ue,
  a.options.attackState,
  e,
  p(u)
), Lt = (e) => i(he, a.options.attackSpeed, e), Ct = (e) => i(He, a.options.attackTimes, e), Mt = (e) => i(
  Ge,
  a.options.attackSkill,
  e,
  Te(Ne)
), Pt = (e) => i(we, a.options.actionPlus, e), Dt = (e) => i(
  Ke,
  a.options.specialFlag,
  e,
  p(Se)
), vt = (e) => i(
  Xe,
  a.options.collaps,
  e,
  p(Ie)
), Ft = (e) => i(
  $e,
  a.options.partyAbility,
  e,
  p(ge)
), Ut = (e) => i(
  Ye,
  a.options.equipWeaponType,
  e,
  Re(dn)
), ht = (e) => i(
  qe,
  a.options.equipArmorType,
  e,
  Re(_n)
), Ht = (e) => i(We, a.options.equipLock, e), Gt = (e) => i(be, a.options.equipSeal, e), kt = (e) => i(xe, a.options.skillAdd, e), Bt = (e) => i(Ve, a.options.skillSeal, e), xt = (e) => i(je, a.options.slotType, e), Vt = (e) => i(
  ke,
  a.options.skillTypeAdd,
  e
), Yt = (e) => i(
  Be,
  a.options.skillTypeSeal,
  e
), wo = "Trait", Ko = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, Xo = (e = {}) => ({
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
}), qt = {
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
}, $o = (e) => ({
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
}), Qo = (e = {}) => ({
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
}), Wt = {
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
}, zo = (e = {}) => ({
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
}), bt = {
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
}, Jo = (e = {}) => ({
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
}, Zo = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, ea = (e = {}) => ({
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
  damage: O(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), wt = {
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
}, Kt = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), ta = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), na = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => Kt())) ?? [],
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
}, Xt = {
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
}, oa = (e = {}) => ({
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
  damage: O(e.damage ?? {}),
  effects: [],
  price: 0
}), aa = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: O(e.damage ?? {}),
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
}), $t = {
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
}, Qt = {
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
}, ia = 0, sa = 1, ra = 2, zt = "{name} + {value1}", v = "{name} {value1}%", S = "{value1}% + {value2}", F = "{name} {value1}ターン", l = "{name}", r = {
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
      format: S
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: zt
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: l
    },
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: S
    },
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: S
    },
    removeBuff: {
      desc: "バフを解除する",
      domainName: "バフ解除",
      format: l
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: l
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: v
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: l
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: v
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: l
    }
  }
}, Jt = 11, Zt = 12, en = 13, tn = 21, nn = 22, on = 31, an = 32, sn = 33, rn = 34, ca = 41, cn = 42, mn = 43, pn = 44, ma = 0, le = /^[a-zA-Z0-9]+$/, pa = (e) => le.test(e) ? e : void 0, N = (e) => typeof e == "string" ? le.test(e) : !1, Ea = (e) => [e.author, e.module, e.kind].join("."), da = (e) => N(e.author) && N(e.module) && N(e.kind), y = "params", ye = "xparams", ue = "sparams", Ie = "collaps", ge = "partyAbiility", Se = "sflag", _a = "actor", Aa = "variables", Ta = "map", Ra = "enemy", u = "state", Ne = "skill", la = "items", ya = "weapon", ua = "armor", Ia = "class", En = "common_event", ga = "troop", Sa = "colors", dn = "weaponTypes", _n = "armorTypes", Na = "equipTypes", fa = "switches", Oa = "skillTypes", An = "elements", U = "{value1}", h = "{value2}", H = "{name}";
class Tn {
  constructor(t, n, o, c, d) {
    this.codeId = t, this.label = n, this.format = o, this.description = c, this.dataSource = d;
  }
  formatText(t, n) {
    const o = this.format.replaceAll(U, t.value1.toString()).replaceAll(h, t.value2.toString());
    return this.dataSource ? o.replaceAll(
      H,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue1() {
    return this.format.includes(U);
  }
  requiresValue2() {
    return this.format.includes(h);
  }
  requiresName() {
    return this.format.includes(H);
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
const La = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), Ca = (e) => [
  Rn(e.options.recoverHp),
  ln(e.options.recoverMp),
  yn(e.options.gainTp),
  un(e.options.addState),
  In(e.options.removeState),
  gn(e.options.addBuff),
  fn(e.options.addDebuff),
  Sn(e.options.removeBuff),
  On(e.options.removeDebuff),
  Nn(e.options.learnSkill),
  Ln(e.options.commonEvent)
], I = () => ({
  author: A,
  module: f,
  kind: y
}), g = (e) => ({
  author: A,
  module: B,
  kind: e
}), m = (e, t, n, o) => {
  const c = n.domainName ?? t.domainName, d = n.format ?? t.format, fe = n.desc ?? t.desc;
  return new Tn(e, c, d, fe, o);
}, Rn = (e) => m(
  Jt,
  r.options.recoverHp,
  e
), ln = (e) => m(
  Zt,
  r.options.recoverMp,
  e
), yn = (e) => m(en, r.options.gainTp, e), Ma = (e) => m(cn, r.options.grow, e), un = (e) => m(
  tn,
  r.options.addState,
  e,
  g(u)
), In = (e) => m(
  nn,
  r.options.removeState,
  e,
  g(u)
), gn = (e) => m(
  on,
  r.options.addBuff,
  e,
  I()
), Sn = (e) => m(
  sn,
  r.options.removeBuff,
  e,
  I()
), Nn = (e) => m(
  mn,
  r.options.learnSkill,
  e,
  g(Ne)
), fn = (e) => m(
  an,
  r.options.addBuff,
  e,
  I()
), On = (e) => m(
  rn,
  r.options.removeDebuff,
  e,
  I()
), Ln = (e) => m(
  pn,
  r.options.commonEvent,
  e,
  g(En)
), Pa = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Da = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, va = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, Cn = {
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
}, Mn = {
  domainName: "ダメージ",
  options: {}
}, O = (e = {}) => ({
  type: e.type ?? 0,
  elementId: e.elementId ?? 0,
  formula: e.formula ?? "",
  variance: e.variance ?? 0,
  critical: e.critical ?? !1
}), Fa = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, E = new G(), Pn = E.compile(Qt), Dn = E.compile($t), vn = E.compile(qt), Fn = E.compile(Wt), Un = E.compile(wt), hn = E.compile(Xt), Hn = E.compile(jt), Gn = E.compile(bt), Ua = (e) => Pn(e), ha = (e) => Dn(e), Ha = (e) => vn(e), Ga = (e) => Fn(e), ka = (e) => Un(e), Ba = (e) => hn(e), xa = (e) => Hn(e), Va = (e) => Gn(e), Ya = 0, qa = 101, Wa = 401, ba = 102, ja = 402, wa = 103, Ka = 104, Xa = 105, $a = 405, Qa = 108, za = 408, Ja = 109, Za = 111, ei = 411, ti = 112, ni = 113, oi = 115, ai = 117, ii = 118, si = 119, ri = 121, ci = 122, mi = 123, pi = 124, Ei = 125, di = 126, _i = 127, Ai = 128, Ti = 129, Ri = 132, li = 133, yi = 134, ui = 135, Ii = 136, gi = 137, Si = 138, Ni = 139, fi = 140, Oi = 201, Li = 202, Ci = 203, Mi = 204, Pi = 205, Di = 206, vi = 211, Fi = 212, Ui = 213, hi = 214, Hi = 216, Gi = 217, ki = 221, Bi = 222, xi = 223, Vi = 224, Yi = 225, qi = 230, Wi = 231, bi = 232, ji = 233, wi = 234, Ki = 235, Xi = 236, $i = 241, Qi = 242, zi = 243, Ji = 244, Zi = 245, es = 246, ts = 249, ns = 250, os = 251, as = 261, is = 282, ss = 283, rs = 284, cs = 285, ms = 301, ps = 302, Es = 605, ds = 303, _s = 311, As = 312, Ts = 313, Rs = 314, ls = 315, ys = 320, us = 321, Is = 322, gs = 323, Ss = 324, Ns = 325, fs = 331, Os = 332, Ls = 333, Cs = 334, Ms = 335, Ps = 336, Ds = 337, vs = 339, Fs = 340, Us = 351, hs = 342, Hs = 352, Gs = 353, ks = 354, Bs = 355, xs = 655, Vs = 356, Ys = 357, qs = 0, Ws = 1, bs = 2, js = 3, ws = 4, Ks = 5, Xs = 6, $s = 7, Qs = 8, zs = 9, Js = 10, Zs = 11, er = 12, tr = 13, nr = 14, or = 15, ar = 16, ir = 17, sr = 18, rr = 19, cr = 20, mr = 21, pr = 22, Er = 23, dr = 24, _r = 25, Ar = 26, Tr = 27, Rr = 28, lr = 29, yr = 30, ur = 31, Ir = 32, gr = 33, Sr = 34, Nr = 35, fr = 36, Or = 37, Lr = 38, Cr = 39, Mr = 40, Pr = 41, Dr = 42, vr = 43, Fr = 44, Ur = 45, hr = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), kn = () => ({
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}), Bn = () => ({
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
}), Hr = () => ({
  conditions: Bn(),
  list: [],
  directionFix: !1,
  image: kn(),
  moveFrequency: 5,
  moveRoute: {
    list: [],
    repeat: !1,
    skippable: !1,
    wait: !1
  }
}), xn = {
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
}, Vn = (e) => e.toString().padStart(3, "0"), Gr = (e = { id: 0 }) => ({
  name: e.name ?? Vn(e.id),
  id: e.id,
  expanded: e.expanded ?? !1,
  order: e.order ?? 0,
  parentId: e.parentId ?? 0,
  scrollX: e.scrollX ?? 0,
  scrollY: e.scrollY ?? 0
}), kr = (e = {}) => ({
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
}), Br = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), xr = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), Vr = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), Yr = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), Yn = new G(), qn = Yn.compile(xn), qr = (e) => qn(e), Wr = {
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
}, br = {
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
}, Wn = {
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
}, jr = {
  rpg: {
    damage: Mn,
    data: Cn,
    traits: a,
    itemEffect: r
  },
  global: Wn
}, wr = (e) => ({
  name: e.name ?? "",
  volume: e.volume ?? 100,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
});
export {
  Fs as ABORT_BATTLE,
  A as AUTHOR_RMMZ,
  ms as BATTLE_PROCESSING,
  Is as CHANGE_ACTOR_IMAGES,
  Ai as CHANGE_ARMORS,
  ss as CHANGE_BATTLE_BACKGROUND,
  Ri as CHANGE_BATTLE_BGM,
  us as CHANGE_CLASS,
  Ni as CHANGE_DEFEAT_ME,
  Ii as CHANGE_ENCOUNTER,
  fs as CHANGE_ENEMY_HP,
  Os as CHANGE_ENEMY_MP,
  Ls as CHANGE_ENEMY_STATE,
  hs as CHANGE_ENEMY_TP,
  ls as CHANGE_EXP,
  gi as CHANGE_FORMATION_ACCESS,
  Ei as CHANGE_GOLD,
  _s as CHANGE_HP,
  di as CHANGE_ITEMS,
  ui as CHANGE_MENU_ACCESS,
  As as CHANGE_MP,
  ys as CHANGE_NAME,
  Ss as CHANGE_NICKNAME,
  rs as CHANGE_PARALLAX,
  Ti as CHANGE_PARTY_MEMBER,
  Hi as CHANGE_PLAYER_FOLLOWERS,
  Ns as CHANGE_PROFILE,
  yi as CHANGE_SAVE_ACCESS,
  is as CHANGE_TILESET,
  Ts as CHANGE_TP,
  vi as CHANGE_TRANSPARENCY,
  fi as CHANGE_VEHICLE_BGM,
  gs as CHANGE_VEHICLE_IMAGE,
  li as CHANGE_VICTORY_ME,
  _i as CHANGE_WEAPONS,
  Si as CHANGE_WINDOW_COLOR,
  ze as COLLAPS_BOSS,
  Je as COLLAPS_INSTANT,
  Ze as COLLAPS_NONE,
  Qe as COLLAPS_NORMAL,
  Qa as COMMENT,
  za as COMMENT_BODY,
  ai as COMMON_EVENT,
  Za as CONDITIONAL_BRANCH,
  ei as CONDITIONAL_BRANCH_ELSE,
  mi as CONTROL_SELF_SWITCH,
  ri as CONTROL_SWITCHES,
  pi as CONTROL_TIMER,
  ci as CONTROL_VARIABLES,
  Mn as DEFAULT_DAMAGE_LABELS,
  Wn as DEFAULT_GLOBAL_LABELS,
  Pa as DEFAULT_ITEM_LABELS,
  Da as DEFAULT_SKILL_LABELS,
  Wr as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  va as DEFAULT_USABLE_ITEM_LABELS,
  on as EFFECT_ADD_BUFF,
  an as EFFECT_ADD_DEBUFF,
  tn as EFFECT_ADD_STATE,
  pn as EFFECT_COMMON_EVENT,
  en as EFFECT_GAIN_TP,
  cn as EFFECT_GROW,
  mn as EFFECT_LEARN_SKILL,
  Jt as EFFECT_RECOVER_HP,
  Zt as EFFECT_RECOVER_MP,
  sn as EFFECT_REMOVE_BUFF,
  rn as EFFECT_REMOVE_DEBUFF,
  nn as EFFECT_REMOVE_STATE,
  ca as EFFECT_SPECIAL,
  Ms as ENEMY_APPEAR,
  Cs as ENEMY_RECOVER_ALL,
  Ps as ENEMY_TRANSFORM,
  hi as ERASE_EVENT,
  Ki as ERASE_PICTURE,
  oi as EXIT_EVENT_PROCESSING,
  W as EXTRA_PARAM_CEV,
  w as EXTRA_PARAM_CNT,
  q as EXTRA_PARAM_CRI,
  Y as EXTRA_PARAM_EVA,
  V as EXTRA_PARAM_HIT,
  K as EXTRA_PARAM_HRG,
  b as EXTRA_PARAM_MEV,
  j as EXTRA_PARAM_MRF,
  X as EXTRA_PARAM_MRG,
  $ as EXTRA_PARAM_TRG,
  Bi as FADEIN_SCREEN,
  Qi as FADEOUT_BGM,
  es as FADEOUT_BGS,
  ki as FADEOUT_SCREEN,
  mo as FILENAME_ACTORS,
  uo as FILENAME_ANIMATIONS,
  To as FILENAME_ARMORS,
  po as FILENAME_CLASSES,
  go as FILENAME_COMMON_EVENTS,
  Ro as FILENAME_ENEMIES,
  _o as FILENAME_ITEMS,
  So as FILENAME_MAP_INFOS,
  Eo as FILENAME_SKILLS,
  yo as FILENAME_STATES,
  co as FILENAME_SYSTEM,
  Io as FILENAME_TILESET,
  lo as FILENAME_TROOPS,
  Ao as FILENAME_WEAPONS,
  st as FLAG_ID_AUTO_BATTLE,
  rt as FLAG_ID_GUARD,
  mt as FLAG_ID_PRESERVE_TP,
  ct as FLAG_ID_SUBSTITUTE,
  Vi as FLASH_SCREEN,
  Oo as FOLDER_AUDIO,
  jn as FOLDER_AUDIO_BGM,
  Xn as FOLDER_AUDIO_BGS,
  Kn as FOLDER_AUDIO_ME,
  wn as FOLDER_AUDIO_SE,
  No as FOLDER_DATA,
  fo as FOLDER_IMG,
  $n as FOLDER_IMG_BATTLEBACK1,
  Qn as FOLDER_IMG_BATTLEBACK2,
  zn as FOLDER_IMG_CHACTERS,
  Jn as FOLDER_IMG_ENEMIES,
  Zn as FOLDER_IMG_FACES,
  eo as FOLDER_IMG_PARALLACES,
  to as FOLDER_IMG_PICTURES,
  no as FOLDER_IMG_SV_ACTORS,
  oo as FOLDER_IMG_SV_ENEMIES,
  ao as FOLDER_IMG_SYSTEM,
  io as FOLDER_IMG_TILESETS,
  so as FOLDER_IMG_TITLES1,
  ro as FOLDER_IMG_TITLES2,
  Lo as FOLDER_JS,
  vs as FORCE_ACTION,
  Gs as GAME_OVER,
  Gi as GATHER_FOLLOWERS,
  cs as GET_LOCATION_INFO,
  Di as GET_ONOFF_VEHICLE,
  ia as HITTYPE_CERTAIN,
  ra as HITTYPE_MAGICAL,
  sa as HITTYPE_PHYSICAL,
  wa as INPUT_NUMBER,
  ii as LABEL,
  Zo as LABELS_DATA_WEAPON,
  si as LABEL_JUMP,
  jr as LABEL_REGISTRY_JP,
  Cn as LABEL_SET_DATA,
  r as LABEL_SET_ITEM_EFFECT,
  a as LABEL_SET_TRAIT,
  ti as LOOP,
  ni as LOOP_BREAK,
  B as MODULE_DATA,
  x as MODULE_SYSTEM,
  f as MODULE_TRAIT,
  bi as MOVE_PICTURE,
  br as MockSystemLabelDataTypes,
  ds as NAME_INPUT_PROCESSING,
  Ya as NO_OPERATION,
  Us as OPEN_MENU_SCREEN,
  Hs as OPEN_SAVE_SCREEN,
  nt as PARTY_ABILITY_CANCEL_SURPRISE,
  it as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  et as PARTY_ABILITY_ENCOUNTER_HALF,
  tt as PARTY_ABILITY_ENCOUNTER_NONE,
  at as PARTY_ABILITY_GOLD_DOUBLE,
  ot as PARTY_ABILITY_RAISE_PREEMPTIVE,
  $i as PLAY_BGM,
  Zi as PLAY_BGS,
  ts as PLAY_ME,
  as as PLAY_MOVIE,
  ns as PLAY_SE,
  Vs as PLUGIN_COMMAND_MV,
  Ys as PLUGIN_COMMAND_MZ,
  Rs as RECOVER_ALL,
  ne as REGULAR_PARAM_AGI,
  J as REGULAR_PARAM_ATK,
  Z as REGULAR_PARAM_DEF,
  oe as REGULAR_PARAM_LUK,
  ee as REGULAR_PARAM_MATK,
  Q as REGULAR_PARAM_MAX_HP,
  z as REGULAR_PARAM_MAX_MP,
  te as REGULAR_PARAM_MDEF,
  Ji as RESUME_BGM,
  ks as RETURN_TO_TITLE_SCREEN,
  ji as ROTATE_PICTURE,
  vr as ROUTE_CHANGE_BLEND_MODE,
  yr as ROUTE_CHANGE_FREQ,
  Pr as ROUTE_CHANGE_IMAGE,
  Dr as ROUTE_CHANGE_OPACITY,
  lr as ROUTE_CHANGE_SPEED,
  fr as ROUTE_DIR_FIX_OFF,
  Nr as ROUTE_DIR_FIX_ON,
  qs as ROUTE_END,
  nr as ROUTE_JUMP,
  Zs as ROUTE_MOVE_AWAY,
  tr as ROUTE_MOVE_BACKWARD,
  Ws as ROUTE_MOVE_DOWN,
  er as ROUTE_MOVE_FORWARD,
  bs as ROUTE_MOVE_LEFT,
  Ks as ROUTE_MOVE_LOWER_L,
  Xs as ROUTE_MOVE_LOWER_R,
  zs as ROUTE_MOVE_RANDOM,
  js as ROUTE_MOVE_RIGHT,
  Js as ROUTE_MOVE_TOWARD,
  ws as ROUTE_MOVE_UP,
  $s as ROUTE_MOVE_UPPER_L,
  Qs as ROUTE_MOVE_UPPER_R,
  Fr as ROUTE_PLAY_SE,
  Ur as ROUTE_SCRIPT,
  Sr as ROUTE_STEP_ANIME_OFF,
  gr as ROUTE_STEP_ANIME_ON,
  Rr as ROUTE_SWITCH_OFF,
  Tr as ROUTE_SWITCH_ON,
  Lr as ROUTE_THROUGH_OFF,
  Or as ROUTE_THROUGH_ON,
  Mr as ROUTE_TRANSPARENT_OFF,
  Cr as ROUTE_TRANSPARENT_ON,
  pr as ROUTE_TURN_180D,
  mr as ROUTE_TURN_90D_L,
  cr as ROUTE_TURN_90D_R,
  Er as ROUTE_TURN_90D_R_L,
  Ar as ROUTE_TURN_AWAY,
  ar as ROUTE_TURN_DOWN,
  ir as ROUTE_TURN_LEFT,
  dr as ROUTE_TURN_RANDOM,
  sr as ROUTE_TURN_RIGHT,
  _r as ROUTE_TURN_TOWARD,
  rr as ROUTE_TURN_UP,
  or as ROUTE_WAIT,
  Ir as ROUTE_WALK_ANIME_OFF,
  ur as ROUTE_WALK_ANIME_ON,
  zi as SAVE_BGM,
  Fa as SCHEMA_DAMAGE,
  qt as SCHEMA_DATA_ACTOR,
  Wt as SCHEMA_DATA_ARMMOR,
  bt as SCHEMA_DATA_CLASS,
  Xt as SCHEMA_DATA_ENEMY,
  Qt as SCHEMA_DATA_ITEM,
  xn as SCHEMA_DATA_MAP_INFO,
  $t as SCHEMA_DATA_SKILL,
  jt as SCHEMA_DATA_STATE,
  wt as SCHEMA_DATA_WEAPON,
  Ko as SCHEMA_TRAIT,
  Bs as SCRIPT_EVAL,
  xs as SCRIPT_EVAL_BODY,
  Mi as SCROLL_MAP,
  Ka as SELECT_ITEM,
  Ci as SET_EVENT_LOCATION,
  Pi as SET_MOVEMENT_ROUTE,
  Li as SET_VEHICLE_LOCATION,
  Xi as SET_WEATHER_EFFECT,
  Yi as SHAKE_SCREEN,
  ps as SHOP_PROCESSING,
  Es as SHOP_PROCESSING_BODY,
  Fi as SHOW_ANIMATION,
  Ui as SHOW_BALLOON_ICON,
  Ds as SHOW_BATTLE_ANIMATION,
  ba as SHOW_CHOICES,
  ja as SHOW_CHOICES_ITEM,
  qa as SHOW_MESSAGE,
  Wa as SHOW_MESSAGE_BODY,
  Wi as SHOW_PICTURE,
  Xa as SHOW_SCROLLING_TEXT,
  $a as SHOW_SCROLLING_TEXT_BODY,
  Ja as SKIP,
  ma as SPECIAL_EFFECT_ESCAPE,
  _e as SPECIAL_PARAM_EXR,
  de as SPECIAL_PARAM_FDR,
  ie as SPECIAL_PARAM_GRD,
  ce as SPECIAL_PARAM_MCR,
  Ee as SPECIAL_PARAM_MDR,
  pe as SPECIAL_PARAM_PDR,
  re as SPECIAL_PARAM_PHA,
  se as SPECIAL_PARAM_REC,
  me as SPECIAL_PARAM_TCR,
  ae as SPECIAL_PARAM_TGR,
  _n as SRC_ARMOR_TYPES,
  Sa as SRC_COLOR,
  _a as SRC_DATA_ACTOR,
  ua as SRC_DATA_ARMOR,
  Ia as SRC_DATA_CLASS,
  En as SRC_DATA_COMMON_EVNET,
  Ra as SRC_DATA_ENEMY,
  la as SRC_DATA_ITEMS,
  Ta as SRC_DATA_MAP,
  Ne as SRC_DATA_SKILL,
  u as SRC_DATA_STATE,
  ga as SRC_DATA_TROOP,
  Aa as SRC_DATA_VARIABLE,
  ya as SRC_DATA_WEAPON,
  An as SRC_ELEMENTS,
  Na as SRC_EQUIP_TYPES,
  ye as SRC_PARAMS_EXTRA,
  y as SRC_PARAMS_REGULAR,
  ue as SRC_PARAMS_SPECIAL,
  Oa as SRC_SKILL_TYPES,
  fa as SRC_SWITCHES,
  Ie as SRC_TRAIT_COLLAPS,
  ge as SRC_TRAIT_PARTY_ABILITY,
  Se as SRC_TRAIT_SPECIAL_FLAG,
  dn as SRC_WEAPON_TYPES,
  os as STOP_SE,
  wi as TINT_PICTURE,
  xi as TINT_SCREEN,
  we as TRAIT_ACTION_PLUS,
  Fe as TRAIT_ATTACK_ELEMENT,
  Ge as TRAIT_ATTACK_SKILL,
  he as TRAIT_ATTACK_SPEED,
  Ue as TRAIT_ATTACK_STATE,
  He as TRAIT_ATTACK_TIMES,
  Xe as TRAIT_COLLAPSE_TYPE,
  Le as TRAIT_DEBUFF_RATE,
  Oe as TRAIT_ELEMENT_RATE,
  qe as TRAIT_EQUIP_ARMOR_TYPE,
  We as TRAIT_EQUIP_LOCK,
  be as TRAIT_EQUIP_SEAL,
  Ye as TRAIT_EQUIP_WEAPON_TYPE,
  Pe as TRAIT_PARAM,
  $e as TRAIT_PARTY_ABILITY,
  xe as TRAIT_SKILL_ADD,
  Ve as TRAIT_SKILL_SEAL,
  ke as TRAIT_SKILL_TYPE_ADD,
  Be as TRAIT_SKILL_TYPE_SEAL,
  je as TRAIT_SLOT_TYPE,
  ve as TRAIT_SPARAM,
  Ke as TRAIT_SPECIAL_FLAG,
  Ce as TRAIT_STATE_RATE,
  Me as TRAIT_STATE_RESIST,
  De as TRAIT_XPARAM,
  Oi as TRANSFER_PLAYER,
  wo as TYPENAME_TRAIT,
  Rt as TraitDescriptor,
  qi as WAIT,
  xo as buildCollapsSource,
  qo as buildExtraParamSource,
  Vo as buildPartyAbilitySource,
  Yo as buildRegularParamSource,
  bo as buildSpecialFlagSource,
  Wo as buildSpecialParamSource,
  gn as defineEffectAddBuff,
  fn as defineEffectAddDebuff,
  un as defineEffectAddState,
  Ln as defineEffectCommonEvent,
  yn as defineEffectGainTp,
  Ma as defineEffectGrow,
  Nn as defineEffectLearnSkill,
  Rn as defineEffectRecoverHp,
  ln as defineEffectRecoverMp,
  Sn as defineEffectRemoveBuff,
  On as defineEffectRemoveDebuff,
  In as defineEffectRemoveState,
  ko as extraParamName,
  pt as foldCollapsOptions,
  _t as foldExtraParam,
  Et as foldPartyAbilityOptions,
  dt as foldRegularParam,
  Tt as foldSpecialFlag,
  At as foldSpecialParams,
  La as formatItemEffectText,
  ho as getArmorTypes,
  Do as getElementTypes,
  vo as getEquipTypes,
  Ho as getParamNames,
  Fo as getSkillTypes,
  Po as getVariableNames,
  Uo as getWeaponTypes,
  Ha as isDataActor,
  Ga as isDataArmor,
  Va as isDataClass,
  Ba as isDataEnemy,
  Ua as isDataItem,
  qr as isDataMapInfo,
  ha as isDataSkill,
  xa as isDataState,
  ka as isDataWeapon,
  da as isValid,
  Ea as joinSourceKey,
  Xo as makeActorData,
  Qo as makeArmorData,
  wr as makeAudioFileParams,
  zo as makeClassData,
  Br as makeCommonEventData,
  O as makeDamage,
  Kt as makeDropItem,
  ta as makeEnemyAction,
  na as makeEnemyData,
  Bn as makeEventPageCondition,
  oa as makeItemData,
  kr as makeMapData,
  hr as makeMapEvent,
  kn as makeMapEventIamge,
  Hr as makeMapEventPage,
  Gr as makeMapInfoData,
  aa as makeSkillData,
  Jo as makeStateData,
  xr as makeTroopData,
  Yr as makeTroopEventConditions,
  Vr as makeTroopMember,
  ea as makeWeaponData,
  Co as mergeDomainLabel,
  Mo as mergeNestedPrimitiveRecords,
  k as mergeWithDefaults,
  $o as normalizeDataActor,
  Go as regularParamName,
  Ca as resolveItemEffectLabels,
  jo as resolveTraitLabels,
  pa as sanitizeKey,
  Bo as specialParamName,
  N as testUnknonwKey,
  R as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
