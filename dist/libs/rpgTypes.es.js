import G from "ajv";
const Yn = "bgm", qn = "se", bn = "me", jn = "bgs", Kn = "battlebacks1", wn = "battlebacks2", Xn = "characters", $n = "enemies", Qn = "faces", zn = "parallaxes", Jn = "pictures", Zn = "sv_actors", eo = "sv_enemies", to = "system", no = "tilesets", oo = "titles1", ao = "titles2", io = "System.json", so = "Actors.json", ro = "Classes.json", co = "Skills.json", mo = "Items.json", po = "Weapons.json", Eo = "Armors.json", _o = "Enemies.json", Ao = "Troops.json", To = "States.json", Ro = "Animations.json", lo = "Tilesets.json", yo = "CommonEvents.json", uo = "MapInfos.json", Io = "data", go = "img", So = "audio", No = "js", B = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const c = t[o];
    typeof c == "string" && (n[o] = c);
  }
  return n;
}, fo = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: B(e.options, t.options ?? {})
}), Oo = (e, t) => {
  const n = {};
  for (const o in e) {
    const c = e[o], d = t[o] ?? {};
    n[o] = B(
      c,
      d
    );
  }
  return n;
}, _ = (e, t) => ({
  name: e,
  id: t
}), Lo = (e) => e.variables.map(_), Co = (e) => e.elements.map(_), Mo = (e) => e.equipTypes.map(_), Po = (e) => e.skillTypes.map(_), Do = (e) => e.weaponTypes.map(_), vo = (e) => e.armorTypes.map(_), Fo = (e) => e.terms.params.map(_), A = "rmmz", f = "trait", k = "data", x = "system", Oe = 11, Le = 12, Ce = 13, Me = 14, Pe = 21, De = 22, ve = 23, Fe = 31, Ue = 32, he = 33, He = 34, Ge = 35, Be = 41, ke = 42, xe = 43, Ve = 44, We = 51, Ye = 52, qe = 53, be = 54, je = 55, Ke = 61, we = 62, Xe = 63, $e = 64, Qe = 0, ze = 1, Je = 2, Ze = 3, et = 0, tt = 1, nt = 2, ot = 3, at = 4, it = 5, st = 0, rt = 1, ct = 2, mt = 3, V = 0, W = 1, Y = 2, q = 3, b = 4, j = 5, K = 6, w = 7, X = 8, $ = 9, Q = 0, z = 1, J = 2, Z = 3, ee = 4, te = 5, ne = 6, oe = 7, ae = 0, ie = 1, se = 2, re = 3, ce = 4, me = 5, pe = 6, Ee = 7, de = 8, _e = 9, Uo = (e, t) => {
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
}, ho = (e, t) => {
  switch (e) {
    case q:
      return t.criticalEvasionRate;
    case W:
      return t.evasionRate;
    case K:
      return t.counterAttackRate;
    case Y:
      return t.criticalRate;
    case V:
      return t.hitRate;
    case w:
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
}, Ho = (e, t) => {
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
    id: W,
    name: e.evasionRate
  },
  {
    id: Y,
    name: e.criticalRate
  },
  {
    id: q,
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
    id: K,
    name: e.counterAttackRate
  },
  {
    id: w,
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
}), Go = (e, t) => R(
  Ie,
  e,
  (n) => pt(n, t)
), Bo = (e) => R(ge, e, Et), ko = (e) => R(y, e, dt), xo = (e) => R(ye, e, _t), Vo = (e) => R(ue, e, At), Wo = (e) => R(Se, e, Tt), s = "{name}", T = "{name} * {value}%", L = "{name} + {value}%", C = "{value}", a = {
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
const Yo = (e) => [
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
  Wt(e.skillTypeSeal),
  Bt(e.skillAdd),
  kt(e.skillSeal),
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
  module: k,
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
), Pt = (e) => i(Ke, a.options.actionPlus, e), Dt = (e) => i(
  we,
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
  We,
  a.options.equipWeaponType,
  e,
  Re(dn)
), ht = (e) => i(
  Ye,
  a.options.equipArmorType,
  e,
  Re(_n)
), Ht = (e) => i(qe, a.options.equipLock, e), Gt = (e) => i(be, a.options.equipSeal, e), Bt = (e) => i(xe, a.options.skillAdd, e), kt = (e) => i(Ve, a.options.skillSeal, e), xt = (e) => i(je, a.options.slotType, e), Vt = (e) => i(
  Be,
  a.options.skillTypeAdd,
  e
), Wt = (e) => i(
  ke,
  a.options.skillTypeSeal,
  e
), qo = "Trait", bo = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, jo = (e = {}) => ({
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
}), Yt = {
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
}, Ko = (e) => ({
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
}), wo = (e = {}) => ({
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
}), qt = {
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
}, Xo = (e = {}) => ({
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
}, $o = (e = {}) => ({
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
}, Qo = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, zo = (e = {}) => ({
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
}, wt = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), Jo = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Zo = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => wt())) ?? [],
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
}, ea = (e = {}) => ({
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
}), ta = (e = {}) => ({
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
}, na = 0, oa = 1, aa = 2, zt = "{name} + {value1}", v = "{name} {value1}%", S = "{value1}% + {value2}", F = "{name} {value1}ターン", l = "{name}", r = {
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
}, Jt = 11, Zt = 12, en = 13, tn = 21, nn = 22, on = 31, an = 32, sn = 33, rn = 34, ia = 41, cn = 42, mn = 43, pn = 44, sa = 0, le = /^[a-zA-Z0-9]+$/, ra = (e) => le.test(e) ? e : void 0, N = (e) => typeof e == "string" ? le.test(e) : !1, ca = (e) => [e.author, e.module, e.kind].join("."), ma = (e) => N(e.author) && N(e.module) && N(e.kind), y = "params", ye = "xparams", ue = "sparams", Ie = "collaps", ge = "partyAbiility", Se = "sflag", pa = "actors", Ea = "variables", da = "map", _a = "enemy", u = "state", Ne = "skill", Aa = "items", Ta = "weapon", Ra = "armor", la = "class", En = "common_event", ya = "troop", ua = "colors", dn = "weaponTypes", _n = "armorTypes", Ia = "equipTypes", ga = "switches", Sa = "skillTypes", An = "elements", U = "{value1}", h = "{value2}", H = "{name}";
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
const Na = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), fa = (e) => [
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
  module: k,
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
), yn = (e) => m(en, r.options.gainTp, e), Oa = (e) => m(cn, r.options.grow, e), un = (e) => m(
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
), La = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Ca = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, Ma = {
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
}), Pa = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, E = new G(), Pn = E.compile(Qt), Dn = E.compile($t), vn = E.compile(Yt), Fn = E.compile(qt), Un = E.compile(Kt), hn = E.compile(Xt), Hn = E.compile(jt), Gn = E.compile(bt), Da = (e) => Pn(e), va = (e) => Dn(e), Fa = (e) => vn(e), Ua = (e) => Fn(e), ha = (e) => Un(e), Ha = (e) => hn(e), Ga = (e) => Hn(e), Ba = (e) => Gn(e), ka = 0, xa = 101, Va = 401, Wa = 102, Ya = 402, qa = 103, ba = 104, ja = 105, Ka = 405, wa = 108, Xa = 408, $a = 109, Qa = 111, za = 411, Ja = 112, Za = 113, ei = 115, ti = 117, ni = 118, oi = 119, ai = 121, ii = 122, si = 123, ri = 124, ci = 125, mi = 126, pi = 127, Ei = 128, di = 129, _i = 132, Ai = 133, Ti = 134, Ri = 135, li = 136, yi = 137, ui = 138, Ii = 139, gi = 140, Si = 201, Ni = 202, fi = 203, Oi = 204, Li = 205, Ci = 206, Mi = 211, Pi = 212, Di = 213, vi = 214, Fi = 216, Ui = 217, hi = 221, Hi = 222, Gi = 223, Bi = 224, ki = 225, xi = 230, Vi = 231, Wi = 232, Yi = 233, qi = 234, bi = 235, ji = 236, Ki = 241, wi = 242, Xi = 243, $i = 244, Qi = 245, zi = 246, Ji = 249, Zi = 250, es = 251, ts = 261, ns = 282, os = 283, as = 284, is = 285, ss = 301, rs = 302, cs = 605, ms = 303, ps = 311, Es = 312, ds = 313, _s = 314, As = 315, Ts = 320, Rs = 321, ls = 322, ys = 323, us = 324, Is = 325, gs = 331, Ss = 332, Ns = 333, fs = 334, Os = 335, Ls = 336, Cs = 337, Ms = 339, Ps = 340, Ds = 351, vs = 342, Fs = 352, Us = 353, hs = 354, Hs = 355, Gs = 655, Bs = 356, ks = 357, xs = 0, Vs = 1, Ws = 2, Ys = 3, qs = 4, bs = 5, js = 6, Ks = 7, ws = 8, Xs = 9, $s = 10, Qs = 11, zs = 12, Js = 13, Zs = 14, er = 15, tr = 16, nr = 17, or = 18, ar = 19, ir = 20, sr = 21, rr = 22, cr = 23, mr = 24, pr = 25, Er = 26, dr = 27, _r = 28, Ar = 29, Tr = 30, Rr = 31, lr = 32, yr = 33, ur = 34, Ir = 35, gr = 36, Sr = 37, Nr = 38, fr = 39, Or = 40, Lr = 41, Cr = 42, Mr = 43, Pr = 44, Dr = 45, Bn = {
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
}, vr = (e = {}) => ({
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
}), Fr = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), Ur = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), hr = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), Hr = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), kn = new G(), xn = kn.compile(Bn), Gr = (e) => xn(e), Br = {
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
}, kr = {
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
}, Vn = {
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
}, xr = {
  rpg: {
    damage: Mn,
    data: Cn,
    traits: a,
    itemEffect: r
  },
  global: Vn
}, Vr = (e) => ({
  name: e.name ?? "",
  volume: e.volume ?? 100,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
});
export {
  Ps as ABORT_BATTLE,
  A as AUTHOR_RMMZ,
  ss as BATTLE_PROCESSING,
  ls as CHANGE_ACTOR_IMAGES,
  Ei as CHANGE_ARMORS,
  os as CHANGE_BATTLE_BACKGROUND,
  _i as CHANGE_BATTLE_BGM,
  Rs as CHANGE_CLASS,
  Ii as CHANGE_DEFEAT_ME,
  li as CHANGE_ENCOUNTER,
  gs as CHANGE_ENEMY_HP,
  Ss as CHANGE_ENEMY_MP,
  Ns as CHANGE_ENEMY_STATE,
  vs as CHANGE_ENEMY_TP,
  As as CHANGE_EXP,
  yi as CHANGE_FORMATION_ACCESS,
  ci as CHANGE_GOLD,
  ps as CHANGE_HP,
  mi as CHANGE_ITEMS,
  Ri as CHANGE_MENU_ACCESS,
  Es as CHANGE_MP,
  Ts as CHANGE_NAME,
  us as CHANGE_NICKNAME,
  as as CHANGE_PARALLAX,
  di as CHANGE_PARTY_MEMBER,
  Fi as CHANGE_PLAYER_FOLLOWERS,
  Is as CHANGE_PROFILE,
  Ti as CHANGE_SAVE_ACCESS,
  ns as CHANGE_TILESET,
  ds as CHANGE_TP,
  Mi as CHANGE_TRANSPARENCY,
  gi as CHANGE_VEHICLE_BGM,
  ys as CHANGE_VEHICLE_IMAGE,
  Ai as CHANGE_VICTORY_ME,
  pi as CHANGE_WEAPONS,
  ui as CHANGE_WINDOW_COLOR,
  ze as COLLAPS_BOSS,
  Je as COLLAPS_INSTANT,
  Ze as COLLAPS_NONE,
  Qe as COLLAPS_NORMAL,
  wa as COMMENT,
  Xa as COMMENT_BODY,
  ti as COMMON_EVENT,
  Qa as CONDITIONAL_BRANCH,
  za as CONDITIONAL_BRANCH_ELSE,
  si as CONTROL_SELF_SWITCH,
  ai as CONTROL_SWITCHES,
  ri as CONTROL_TIMER,
  ii as CONTROL_VARIABLES,
  Mn as DEFAULT_DAMAGE_LABELS,
  Vn as DEFAULT_GLOBAL_LABELS,
  La as DEFAULT_ITEM_LABELS,
  Ca as DEFAULT_SKILL_LABELS,
  Br as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Ma as DEFAULT_USABLE_ITEM_LABELS,
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
  ia as EFFECT_SPECIAL,
  Os as ENEMY_APPEAR,
  fs as ENEMY_RECOVER_ALL,
  Ls as ENEMY_TRANSFORM,
  vi as ERASE_EVENT,
  bi as ERASE_PICTURE,
  ei as EXIT_EVENT_PROCESSING,
  q as EXTRA_PARAM_CEV,
  K as EXTRA_PARAM_CNT,
  Y as EXTRA_PARAM_CRI,
  W as EXTRA_PARAM_EVA,
  V as EXTRA_PARAM_HIT,
  w as EXTRA_PARAM_HRG,
  b as EXTRA_PARAM_MEV,
  j as EXTRA_PARAM_MRF,
  X as EXTRA_PARAM_MRG,
  $ as EXTRA_PARAM_TRG,
  Hi as FADEIN_SCREEN,
  wi as FADEOUT_BGM,
  zi as FADEOUT_BGS,
  hi as FADEOUT_SCREEN,
  so as FILENAME_ACTORS,
  Ro as FILENAME_ANIMATIONS,
  Eo as FILENAME_ARMORS,
  ro as FILENAME_CLASSES,
  yo as FILENAME_COMMON_EVENTS,
  _o as FILENAME_ENEMIES,
  mo as FILENAME_ITEMS,
  uo as FILENAME_MAP_INFOS,
  co as FILENAME_SKILLS,
  To as FILENAME_STATES,
  io as FILENAME_SYSTEM,
  lo as FILENAME_TILESET,
  Ao as FILENAME_TROOPS,
  po as FILENAME_WEAPONS,
  st as FLAG_ID_AUTO_BATTLE,
  rt as FLAG_ID_GUARD,
  mt as FLAG_ID_PRESERVE_TP,
  ct as FLAG_ID_SUBSTITUTE,
  Bi as FLASH_SCREEN,
  So as FOLDER_AUDIO,
  Yn as FOLDER_AUDIO_BGM,
  jn as FOLDER_AUDIO_BGS,
  bn as FOLDER_AUDIO_ME,
  qn as FOLDER_AUDIO_SE,
  Io as FOLDER_DATA,
  go as FOLDER_IMG,
  Kn as FOLDER_IMG_BATTLEBACK1,
  wn as FOLDER_IMG_BATTLEBACK2,
  Xn as FOLDER_IMG_CHACTERS,
  $n as FOLDER_IMG_ENEMIES,
  Qn as FOLDER_IMG_FACES,
  zn as FOLDER_IMG_PARALLACES,
  Jn as FOLDER_IMG_PICTURES,
  Zn as FOLDER_IMG_SV_ACTORS,
  eo as FOLDER_IMG_SV_ENEMIES,
  to as FOLDER_IMG_SYSTEM,
  no as FOLDER_IMG_TILESETS,
  oo as FOLDER_IMG_TITLES1,
  ao as FOLDER_IMG_TITLES2,
  No as FOLDER_JS,
  Ms as FORCE_ACTION,
  Us as GAME_OVER,
  Ui as GATHER_FOLLOWERS,
  is as GET_LOCATION_INFO,
  Ci as GET_ONOFF_VEHICLE,
  na as HITTYPE_CERTAIN,
  aa as HITTYPE_MAGICAL,
  oa as HITTYPE_PHYSICAL,
  qa as INPUT_NUMBER,
  ni as LABEL,
  Qo as LABELS_DATA_WEAPON,
  oi as LABEL_JUMP,
  xr as LABEL_REGISTRY_JP,
  Cn as LABEL_SET_DATA,
  r as LABEL_SET_ITEM_EFFECT,
  a as LABEL_SET_TRAIT,
  Ja as LOOP,
  Za as LOOP_BREAK,
  k as MODULE_DATA,
  x as MODULE_SYSTEM,
  f as MODULE_TRAIT,
  Wi as MOVE_PICTURE,
  kr as MockSystemLabelDataTypes,
  ms as NAME_INPUT_PROCESSING,
  ka as NO_OPERATION,
  Ds as OPEN_MENU_SCREEN,
  Fs as OPEN_SAVE_SCREEN,
  nt as PARTY_ABILITY_CANCEL_SURPRISE,
  it as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  et as PARTY_ABILITY_ENCOUNTER_HALF,
  tt as PARTY_ABILITY_ENCOUNTER_NONE,
  at as PARTY_ABILITY_GOLD_DOUBLE,
  ot as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Ki as PLAY_BGM,
  Qi as PLAY_BGS,
  Ji as PLAY_ME,
  ts as PLAY_MOVIE,
  Zi as PLAY_SE,
  Bs as PLUGIN_COMMAND_MV,
  ks as PLUGIN_COMMAND_MZ,
  _s as RECOVER_ALL,
  ne as REGULAR_PARAM_AGI,
  J as REGULAR_PARAM_ATK,
  Z as REGULAR_PARAM_DEF,
  oe as REGULAR_PARAM_LUK,
  ee as REGULAR_PARAM_MATK,
  Q as REGULAR_PARAM_MAX_HP,
  z as REGULAR_PARAM_MAX_MP,
  te as REGULAR_PARAM_MDEF,
  $i as RESUME_BGM,
  hs as RETURN_TO_TITLE_SCREEN,
  Yi as ROTATE_PICTURE,
  Mr as ROUTE_CHANGE_BLEND_MODE,
  Tr as ROUTE_CHANGE_FREQ,
  Lr as ROUTE_CHANGE_IMAGE,
  Cr as ROUTE_CHANGE_OPACITY,
  Ar as ROUTE_CHANGE_SPEED,
  gr as ROUTE_DIR_FIX_OFF,
  Ir as ROUTE_DIR_FIX_ON,
  xs as ROUTE_END,
  Zs as ROUTE_JUMP,
  Qs as ROUTE_MOVE_AWAY,
  Js as ROUTE_MOVE_BACKWARD,
  Vs as ROUTE_MOVE_DOWN,
  zs as ROUTE_MOVE_FORWARD,
  Ws as ROUTE_MOVE_LEFT,
  bs as ROUTE_MOVE_LOWER_L,
  js as ROUTE_MOVE_LOWER_R,
  Xs as ROUTE_MOVE_RANDOM,
  Ys as ROUTE_MOVE_RIGHT,
  $s as ROUTE_MOVE_TOWARD,
  qs as ROUTE_MOVE_UP,
  Ks as ROUTE_MOVE_UPPER_L,
  ws as ROUTE_MOVE_UPPER_R,
  Pr as ROUTE_PLAY_SE,
  Dr as ROUTE_SCRIPT,
  ur as ROUTE_STEP_ANIME_OFF,
  yr as ROUTE_STEP_ANIME_ON,
  _r as ROUTE_SWITCH_OFF,
  dr as ROUTE_SWITCH_ON,
  Nr as ROUTE_THROUGH_OFF,
  Sr as ROUTE_THROUGH_ON,
  Or as ROUTE_TRANSPARENT_OFF,
  fr as ROUTE_TRANSPARENT_ON,
  rr as ROUTE_TURN_180D,
  sr as ROUTE_TURN_90D_L,
  ir as ROUTE_TURN_90D_R,
  cr as ROUTE_TURN_90D_R_L,
  Er as ROUTE_TURN_AWAY,
  tr as ROUTE_TURN_DOWN,
  nr as ROUTE_TURN_LEFT,
  mr as ROUTE_TURN_RANDOM,
  or as ROUTE_TURN_RIGHT,
  pr as ROUTE_TURN_TOWARD,
  ar as ROUTE_TURN_UP,
  er as ROUTE_WAIT,
  lr as ROUTE_WALK_ANIME_OFF,
  Rr as ROUTE_WALK_ANIME_ON,
  Xi as SAVE_BGM,
  Pa as SCHEMA_DAMAGE,
  Yt as SCHEMA_DATA_ACTOR,
  qt as SCHEMA_DATA_ARMMOR,
  bt as SCHEMA_DATA_CLASS,
  Xt as SCHEMA_DATA_ENEMY,
  Qt as SCHEMA_DATA_ITEM,
  Bn as SCHEMA_DATA_MAP_INFO,
  $t as SCHEMA_DATA_SKILL,
  jt as SCHEMA_DATA_STATE,
  Kt as SCHEMA_DATA_WEAPON,
  bo as SCHEMA_TRAIT,
  Hs as SCRIPT_EVAL,
  Gs as SCRIPT_EVAL_BODY,
  Oi as SCROLL_MAP,
  ba as SELECT_ITEM,
  fi as SET_EVENT_LOCATION,
  Li as SET_MOVEMENT_ROUTE,
  Ni as SET_VEHICLE_LOCATION,
  ji as SET_WEATHER_EFFECT,
  ki as SHAKE_SCREEN,
  rs as SHOP_PROCESSING,
  cs as SHOP_PROCESSING_BODY,
  Pi as SHOW_ANIMATION,
  Di as SHOW_BALLOON_ICON,
  Cs as SHOW_BATTLE_ANIMATION,
  Wa as SHOW_CHOICES,
  Ya as SHOW_CHOICES_ITEM,
  xa as SHOW_MESSAGE,
  Va as SHOW_MESSAGE_BODY,
  Vi as SHOW_PICTURE,
  ja as SHOW_SCROLLING_TEXT,
  Ka as SHOW_SCROLLING_TEXT_BODY,
  $a as SKIP,
  sa as SPECIAL_EFFECT_ESCAPE,
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
  ua as SRC_COLOR,
  En as SRC_COMMON_EVNET,
  pa as SRC_DATA_ACTOR,
  Ra as SRC_DATA_ARMOR,
  la as SRC_DATA_CLASS,
  _a as SRC_DATA_ENEMY,
  Aa as SRC_DATA_ITEMS,
  da as SRC_DATA_MAP,
  Ne as SRC_DATA_SKILL,
  u as SRC_DATA_STATE,
  Ea as SRC_DATA_VARIABLE,
  Ta as SRC_DATA_WEAPON,
  An as SRC_ELEMENTS,
  Ia as SRC_EQUIP_TYPES,
  ye as SRC_PARAMS_EXTRA,
  y as SRC_PARAMS_REGULAR,
  ue as SRC_PARAMS_SPECIAL,
  Sa as SRC_SKILL_TYPES,
  ga as SRC_SWITCHES,
  Ie as SRC_TRAIT_COLLAPS,
  ge as SRC_TRAIT_PARTY_ABILITY,
  Se as SRC_TRAIT_SPECIAL_FLAG,
  ya as SRC_TROOP,
  dn as SRC_WEAPON_TYPES,
  es as STOP_SE,
  qi as TINT_PICTURE,
  Gi as TINT_SCREEN,
  Ke as TRAIT_ACTION_PLUS,
  Fe as TRAIT_ATTACK_ELEMENT,
  Ge as TRAIT_ATTACK_SKILL,
  he as TRAIT_ATTACK_SPEED,
  Ue as TRAIT_ATTACK_STATE,
  He as TRAIT_ATTACK_TIMES,
  Xe as TRAIT_COLLAPSE_TYPE,
  Le as TRAIT_DEBUFF_RATE,
  Oe as TRAIT_ELEMENT_RATE,
  Ye as TRAIT_EQUIP_ARMOR_TYPE,
  qe as TRAIT_EQUIP_LOCK,
  be as TRAIT_EQUIP_SEAL,
  We as TRAIT_EQUIP_WEAPON_TYPE,
  Pe as TRAIT_PARAM,
  $e as TRAIT_PARTY_ABILITY,
  xe as TRAIT_SKILL_ADD,
  Ve as TRAIT_SKILL_SEAL,
  Be as TRAIT_SKILL_TYPE_ADD,
  ke as TRAIT_SKILL_TYPE_SEAL,
  je as TRAIT_SLOT_TYPE,
  ve as TRAIT_SPARAM,
  we as TRAIT_SPECIAL_FLAG,
  Ce as TRAIT_STATE_RATE,
  Me as TRAIT_STATE_RESIST,
  De as TRAIT_XPARAM,
  Si as TRANSFER_PLAYER,
  qo as TYPENAME_TRAIT,
  Rt as TraitDescriptor,
  xi as WAIT,
  Go as buildCollapsSource,
  xo as buildExtraParamSource,
  Bo as buildPartyAbilitySource,
  ko as buildRegularParamSource,
  Wo as buildSpecialFlagSource,
  Vo as buildSpecialParamSource,
  gn as defineEffectAddBuff,
  fn as defineEffectAddDebuff,
  un as defineEffectAddState,
  Ln as defineEffectCommonEvent,
  yn as defineEffectGainTp,
  Oa as defineEffectGrow,
  Nn as defineEffectLearnSkill,
  Rn as defineEffectRecoverHp,
  ln as defineEffectRecoverMp,
  Sn as defineEffectRemoveBuff,
  On as defineEffectRemoveDebuff,
  In as defineEffectRemoveState,
  ho as extraParamName,
  pt as foldCollapsOptions,
  _t as foldExtraParam,
  Et as foldPartyAbilityOptions,
  dt as foldRegularParam,
  Tt as foldSpecialFlag,
  At as foldSpecialParams,
  Na as formatItemEffectText,
  vo as getArmorTypes,
  Co as getElementTypes,
  Mo as getEquipTypes,
  Fo as getParamNames,
  Po as getSkillTypes,
  Lo as getVariableNames,
  Do as getWeaponTypes,
  Fa as isDataActor,
  Ua as isDataArmor,
  Ba as isDataClass,
  Ha as isDataEnemy,
  Da as isDataItem,
  Gr as isDataMapInfo,
  va as isDataSkill,
  Ga as isDataState,
  ha as isDataWeapon,
  ma as isValid,
  ca as joinSourceKey,
  jo as makeActor,
  wo as makeArmor,
  Vr as makeAudioFileParams,
  Xo as makeClass,
  Fr as makeCommonEventData,
  O as makeDamage,
  wt as makeDropItem,
  Zo as makeEnemy,
  Jo as makeEnemyAction,
  ea as makeItem,
  vr as makeMapData,
  ta as makeSkill,
  $o as makeState,
  Ur as makeTroopData,
  Hr as makeTroopEventConditions,
  hr as makeTroopMember,
  zo as makeWeapon,
  fo as mergeDomainLabel,
  Oo as mergeNestedPrimitiveRecords,
  B as mergeWithDefaults,
  Ko as normalizeDataActor,
  Uo as regularParamName,
  fa as resolveItemEffectLabels,
  Yo as resolveTraitLabels,
  ra as sanitizeKey,
  Ho as specialParamName,
  N as testUnknonwKey,
  R as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
