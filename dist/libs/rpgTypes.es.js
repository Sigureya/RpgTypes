import Oe from "ajv";
const xn = "bgm", Vn = "se", Wn = "me", Yn = "bgs", qn = "battlebacks1", bn = "battlebacks2", jn = "characters", Kn = "enemies", Xn = "faces", wn = "parallaxes", $n = "pictures", Qn = "sv_actors", zn = "sv_enemies", Jn = "system", Zn = "tilesets", eo = "titles1", to = "titles2", no = "System.json", oo = "Actors.json", ao = "Classes.json", io = "Skills.json", so = "Items.json", ro = "Weapons.json", co = "Armors.json", mo = "Enemies.json", po = "Troops.json", Eo = "States.json", _o = "Animations.json", Ao = "Tilesets.json", To = "CommonEvents.json", Ro = "MapInfos.json", lo = "data", yo = "img", uo = "audio", Io = "js", G = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const c = t[o];
    typeof c == "string" && (n[o] = c);
  }
  return n;
}, go = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: G(e.options, t.options ?? {})
}), So = (e, t) => {
  const n = {};
  for (const o in e) {
    const c = e[o], d = t[o] ?? {};
    n[o] = G(
      c,
      d
    );
  }
  return n;
}, _ = (e, t) => ({
  name: e,
  id: t
}), No = (e) => e.variables.map(_), Oo = (e) => e.elements.map(_), Lo = (e) => e.equipTypes.map(_), fo = (e) => e.skillTypes.map(_), Co = (e) => e.weaponTypes.map(_), Mo = (e) => e.armorTypes.map(_), Po = (e) => e.terms.params.map(_), A = "rmmz", O = "trait", B = "data", k = "system", Le = 11, fe = 12, Ce = 13, Me = 14, Pe = 21, De = 22, ve = 23, Fe = 31, Ue = 32, he = 33, He = 34, Ge = 35, Be = 41, ke = 42, xe = 43, Ve = 44, We = 51, Ye = 52, qe = 53, be = 54, je = 55, Ke = 61, Xe = 62, we = 63, $e = 64, Qe = 0, ze = 1, Je = 2, Ze = 3, et = 0, tt = 1, nt = 2, ot = 3, at = 4, it = 5, st = 0, rt = 1, ct = 2, mt = 3, x = 0, V = 1, W = 2, Y = 3, q = 4, b = 5, j = 6, K = 7, X = 8, w = 9, $ = 0, Q = 1, z = 2, J = 3, Z = 4, ee = 5, te = 6, ne = 7, oe = 0, ae = 1, ie = 2, se = 3, re = 4, ce = 5, me = 6, pe = 7, Ee = 8, de = 9, Do = (e, t) => {
  switch (e) {
    case $:
      return t.maxHp;
    case Q:
      return t.maxMp;
    case z:
      return t.atk;
    case J:
      return t.def;
    case Z:
      return t.matk;
    case ee:
      return t.mdef;
    case te:
      return t.agi;
    case ne:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, vo = (e, t) => {
  switch (e) {
    case Y:
      return t.criticalEvasionRate;
    case V:
      return t.evasionRate;
    case j:
      return t.counterAttackRate;
    case W:
      return t.criticalRate;
    case x:
      return t.hitRate;
    case K:
      return t.hpRegenerationRate;
    case q:
      return t.magicEvasionRate;
    case b:
      return t.magicReflectionRate;
    case X:
      return t.mpRegenerationRate;
    case w:
      return t.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, Fo = (e, t) => {
  switch (e) {
    case de:
      return t.experienceRate;
    case oe:
      return t.targetRate;
    case Ee:
      return t.floorDamageRate;
    case ae:
      return t.guradEffectRate;
    case re:
      return t.mpCostRate;
    case ce:
      return t.tpChargeRate;
    case me:
      return t.physicalDamageRate;
    case pe:
      return t.magicDamageRate;
    case se:
      return t.pharmacology;
    case ie:
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
  { id: $, name: e.maxHp },
  { id: Q, name: e.maxMp },
  { id: z, name: e.atk },
  { id: J, name: e.def },
  { id: Z, name: e.matk },
  { id: ee, name: e.mdef },
  { id: te, name: e.agi },
  { id: ne, name: e.luk }
], _t = (e) => [
  {
    id: x,
    name: e.hitRate
  },
  {
    id: V,
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
    id: q,
    name: e.magicEvasionRate
  },
  {
    id: b,
    name: e.magicReflectionRate
  },
  {
    id: j,
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
    id: w,
    name: e.tpRegenerationRate
  }
], At = (e) => [
  {
    id: oe,
    name: e.targetRate
  },
  {
    id: ae,
    name: e.guradEffectRate
  },
  {
    id: ie,
    name: e.recoveryEffectRate
  },
  {
    id: se,
    name: e.pharmacology
  },
  {
    id: re,
    name: e.mpCostRate
  },
  {
    id: ce,
    name: e.tpChargeRate
  },
  {
    id: me,
    name: e.physicalDamageRate
  },
  {
    id: pe,
    name: e.magicDamageRate
  },
  {
    id: Ee,
    name: e.floorDamageRate
  },
  {
    id: de,
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
    module: O,
    kind: e
  }
}), Uo = (e, t) => R(
  ue,
  e,
  (n) => pt(n, t)
), ho = (e) => R(Ie, e, Et), Ho = (e) => R(y, e, dt), Go = (e) => R(le, e, _t), Bo = (e) => R(ye, e, At), ko = (e) => R(ge, e, Tt), s = "{name}", T = "{name} * {value}%", f = "{name} + {value}%", C = "{value}", a = {
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
      format: f,
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
      format: f
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
const xo = (e) => [
  lt(e.elementRate),
  yt(e.debuffRate),
  ut(e.stateRate),
  It(e.stateResist),
  gt(e.regularParam),
  St(e.extraParam),
  Nt(e.specialParam),
  Ot(e.attackElement),
  Lt(e.attackState),
  ft(e.attackSpeed),
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
}, _e = () => ({
  module: k,
  author: A,
  kind: An
}), Ae = (e) => ({
  module: B,
  author: A,
  kind: e
}), p = (e) => ({
  author: A,
  module: O,
  kind: e
}), Te = (e) => ({
  author: A,
  module: k,
  kind: e
}), lt = (e) => i(
  Le,
  a.options.elementRate,
  e,
  _e()
), yt = (e) => i(
  fe,
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
  Ae(u)
), gt = (e) => i(
  Pe,
  a.options.regularParam,
  e,
  p(y)
), St = (e) => i(
  De,
  a.options.extraParam,
  e,
  p(le)
), Nt = (e) => i(
  ve,
  a.options.specialParam,
  e,
  p(ye)
), Ot = (e) => i(
  Fe,
  a.options.attackElement,
  e,
  _e()
), Lt = (e) => i(
  Ue,
  a.options.attackState,
  e,
  p(u)
), ft = (e) => i(he, a.options.attackSpeed, e), Ct = (e) => i(He, a.options.attackTimes, e), Mt = (e) => i(
  Ge,
  a.options.attackSkill,
  e,
  Ae(Se)
), Pt = (e) => i(Ke, a.options.actionPlus, e), Dt = (e) => i(
  Xe,
  a.options.specialFlag,
  e,
  p(ge)
), vt = (e) => i(
  we,
  a.options.collaps,
  e,
  p(ue)
), Ft = (e) => i(
  $e,
  a.options.partyAbility,
  e,
  p(Ie)
), Ut = (e) => i(
  We,
  a.options.equipWeaponType,
  e,
  Te(dn)
), ht = (e) => i(
  Ye,
  a.options.equipArmorType,
  e,
  Te(_n)
), Ht = (e) => i(qe, a.options.equipLock, e), Gt = (e) => i(be, a.options.equipSeal, e), Bt = (e) => i(xe, a.options.skillAdd, e), kt = (e) => i(Ve, a.options.skillSeal, e), xt = (e) => i(je, a.options.slotType, e), Vt = (e) => i(
  Be,
  a.options.skillTypeAdd,
  e
), Wt = (e) => i(
  ke,
  a.options.skillTypeSeal,
  e
), Vo = "Trait", Wo = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, Yo = (e = {}) => ({
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
}, qo = (e) => ({
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
}), bo = (e = {}) => ({
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
}, jo = (e = {}) => ({
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
}, Ko = (e = {}) => ({
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
}, Xo = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, wo = (e = {}) => ({
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
}), $o = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Qo = (e = {}) => {
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
}, wt = {
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
}, zo = (e = {}) => ({
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
}), Jo = (e = {}) => ({
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
}, Zo = 0, ea = 1, ta = 2, zt = "{name} + {value1}", v = "{name} {value1}%", S = "{value1}% + {value2}", F = "{name} {value1}ターン", l = "{name}", r = {
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
}, Jt = 11, Zt = 12, en = 13, tn = 21, nn = 22, on = 31, an = 32, sn = 33, rn = 34, na = 41, cn = 42, mn = 43, pn = 44, oa = 0, Re = /^[a-zA-Z0-9]+$/, aa = (e) => Re.test(e) ? e : void 0, N = (e) => typeof e == "string" ? Re.test(e) : !1, ia = (e) => [e.author, e.module, e.kind].join("."), sa = (e) => N(e.author) && N(e.module) && N(e.kind), y = "params", le = "xparams", ye = "sparams", ue = "collaps", Ie = "partyAbiility", ge = "sflag", ra = "actors", ca = "variables", ma = "map", pa = "enemy", u = "state", Se = "skill", Ea = "items", da = "weapon", _a = "armor", Aa = "class", En = "common_event", Ta = "troop", Ra = "colors", dn = "weaponTypes", _n = "armorTypes", la = "equipTypes", ya = "switches", ua = "skillTypes", An = "elements", U = "{value1}", h = "{value2}", H = "{name}";
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
const Ia = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), ga = (e) => [
  Rn(e.options.recoverHp),
  ln(e.options.recoverMp),
  yn(e.options.gainTp),
  un(e.options.addState),
  In(e.options.removeState),
  gn(e.options.addBuff),
  On(e.options.addDebuff),
  Sn(e.options.removeBuff),
  Ln(e.options.removeDebuff),
  Nn(e.options.learnSkill),
  fn(e.options.commonEvent)
], I = () => ({
  author: A,
  module: O,
  kind: y
}), g = (e) => ({
  author: A,
  module: B,
  kind: e
}), m = (e, t, n, o) => {
  const c = n.domainName ?? t.domainName, d = n.format ?? t.format, Ne = n.desc ?? t.desc;
  return new Tn(e, c, d, Ne, o);
}, Rn = (e) => m(
  Jt,
  r.options.recoverHp,
  e
), ln = (e) => m(
  Zt,
  r.options.recoverMp,
  e
), yn = (e) => m(en, r.options.gainTp, e), Sa = (e) => m(cn, r.options.grow, e), un = (e) => m(
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
  g(Se)
), On = (e) => m(
  an,
  r.options.addBuff,
  e,
  I()
), Ln = (e) => m(
  rn,
  r.options.removeDebuff,
  e,
  I()
), fn = (e) => m(
  pn,
  r.options.commonEvent,
  e,
  g(En)
), Na = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Oa = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, La = {
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
}, L = (e = {}) => ({
  type: e.type ?? 0,
  elementId: e.elementId ?? 0,
  formula: e.formula ?? "",
  variance: e.variance ?? 0,
  critical: e.critical ?? !1
}), fa = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, E = new Oe(), Pn = E.compile(Qt), Dn = E.compile($t), vn = E.compile(Yt), Fn = E.compile(qt), Un = E.compile(Kt), hn = E.compile(wt), Hn = E.compile(jt), Gn = E.compile(bt), Ca = (e) => Pn(e), Ma = (e) => Dn(e), Pa = (e) => vn(e), Da = (e) => Fn(e), va = (e) => Un(e), Fa = (e) => hn(e), Ua = (e) => Hn(e), ha = (e) => Gn(e), Ha = 0, Ga = 101, Ba = 401, ka = 102, xa = 402, Va = 103, Wa = 104, Ya = 105, qa = 405, ba = 108, ja = 408, Ka = 109, Xa = 111, wa = 411, $a = 112, Qa = 113, za = 115, Ja = 117, Za = 118, ei = 119, ti = 121, ni = 122, oi = 123, ai = 124, ii = 125, si = 126, ri = 127, ci = 128, mi = 129, pi = 132, Ei = 133, di = 134, _i = 135, Ai = 136, Ti = 137, Ri = 138, li = 139, yi = 140, ui = 201, Ii = 202, gi = 203, Si = 204, Ni = 205, Oi = 206, Li = 211, fi = 212, Ci = 213, Mi = 214, Pi = 216, Di = 217, vi = 221, Fi = 222, Ui = 223, hi = 224, Hi = 225, Gi = 230, Bi = 231, ki = 232, xi = 233, Vi = 234, Wi = 235, Yi = 236, qi = 241, bi = 242, ji = 243, Ki = 244, Xi = 245, wi = 246, $i = 249, Qi = 250, zi = 251, Ji = 261, Zi = 282, es = 283, ts = 284, ns = 285, os = 301, as = 302, is = 605, ss = 303, rs = 311, cs = 312, ms = 313, ps = 314, Es = 315, ds = 320, _s = 321, As = 322, Ts = 323, Rs = 324, ls = 325, ys = 331, us = 332, Is = 333, gs = 334, Ss = 335, Ns = 336, Os = 337, Ls = 339, fs = 340, Cs = 351, Ms = 342, Ps = 352, Ds = 353, vs = 354, Fs = 355, Us = 655, hs = 356, Hs = 357, Gs = 0, Bs = 1, ks = 2, xs = 3, Vs = 4, Ws = 5, Ys = 6, qs = 7, bs = 8, js = 9, Ks = 10, Xs = 11, ws = 12, $s = 13, Qs = 14, zs = 15, Js = 16, Zs = 17, er = 18, tr = 19, nr = 20, or = 21, ar = 22, ir = 23, sr = 24, rr = 25, cr = 26, mr = 27, pr = 28, Er = 29, dr = 30, _r = 31, Ar = 32, Tr = 33, Rr = 34, lr = 35, yr = 36, ur = 37, Ir = 38, gr = 39, Sr = 40, Nr = 41, Or = 42, Lr = 43, fr = 44, Cr = 45, Mr = {
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
}, Pr = (e = {}) => ({
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
}), Dr = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), vr = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), Fr = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), Ur = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), hr = {
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
}, Hr = {
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
}, Bn = {
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
}, Gr = {
  rpg: {
    damage: Mn,
    data: Cn,
    traits: a,
    itemEffect: r
  },
  global: Bn
}, Br = (e) => ({
  name: e.name ?? "",
  volume: e.volume ?? 100,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
});
export {
  fs as ABORT_BATTLE,
  A as AUTHOR_RMMZ,
  os as BATTLE_PROCESSING,
  As as CHANGE_ACTOR_IMAGES,
  ci as CHANGE_ARMORS,
  es as CHANGE_BATTLE_BACKGROUND,
  pi as CHANGE_BATTLE_BGM,
  _s as CHANGE_CLASS,
  li as CHANGE_DEFEAT_ME,
  Ai as CHANGE_ENCOUNTER,
  ys as CHANGE_ENEMY_HP,
  us as CHANGE_ENEMY_MP,
  Is as CHANGE_ENEMY_STATE,
  Ms as CHANGE_ENEMY_TP,
  Es as CHANGE_EXP,
  Ti as CHANGE_FORMATION_ACCESS,
  ii as CHANGE_GOLD,
  rs as CHANGE_HP,
  si as CHANGE_ITEMS,
  _i as CHANGE_MENU_ACCESS,
  cs as CHANGE_MP,
  ds as CHANGE_NAME,
  Rs as CHANGE_NICKNAME,
  ts as CHANGE_PARALLAX,
  mi as CHANGE_PARTY_MEMBER,
  Pi as CHANGE_PLAYER_FOLLOWERS,
  ls as CHANGE_PROFILE,
  di as CHANGE_SAVE_ACCESS,
  Zi as CHANGE_TILESET,
  ms as CHANGE_TP,
  Li as CHANGE_TRANSPARENCY,
  yi as CHANGE_VEHICLE_BGM,
  Ts as CHANGE_VEHICLE_IMAGE,
  Ei as CHANGE_VICTORY_ME,
  ri as CHANGE_WEAPONS,
  Ri as CHANGE_WINDOW_COLOR,
  ze as COLLAPS_BOSS,
  Je as COLLAPS_INSTANT,
  Ze as COLLAPS_NONE,
  Qe as COLLAPS_NORMAL,
  ba as COMMENT,
  ja as COMMENT_BODY,
  Ja as COMMON_EVENT,
  Xa as CONDITIONAL_BRANCH,
  wa as CONDITIONAL_BRANCH_ELSE,
  oi as CONTROL_SELF_SWITCH,
  ti as CONTROL_SWITCHES,
  ai as CONTROL_TIMER,
  ni as CONTROL_VARIABLES,
  Mn as DEFAULT_DAMAGE_LABELS,
  Bn as DEFAULT_GLOBAL_LABELS,
  Na as DEFAULT_ITEM_LABELS,
  Oa as DEFAULT_SKILL_LABELS,
  hr as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  La as DEFAULT_USABLE_ITEM_LABELS,
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
  na as EFFECT_SPECIAL,
  Ss as ENEMY_APPEAR,
  gs as ENEMY_RECOVER_ALL,
  Ns as ENEMY_TRANSFORM,
  Mi as ERASE_EVENT,
  Wi as ERASE_PICTURE,
  za as EXIT_EVENT_PROCESSING,
  Y as EXTRA_PARAM_CEV,
  j as EXTRA_PARAM_CNT,
  W as EXTRA_PARAM_CRI,
  V as EXTRA_PARAM_EVA,
  x as EXTRA_PARAM_HIT,
  K as EXTRA_PARAM_HRG,
  q as EXTRA_PARAM_MEV,
  b as EXTRA_PARAM_MRF,
  X as EXTRA_PARAM_MRG,
  w as EXTRA_PARAM_TRG,
  Fi as FADEIN_SCREEN,
  bi as FADEOUT_BGM,
  wi as FADEOUT_BGS,
  vi as FADEOUT_SCREEN,
  ao as FILANAME_CLASSES,
  oo as FILENAME_ACTORS,
  _o as FILENAME_ANIMATIONS,
  co as FILENAME_ARMORS,
  To as FILENAME_COMMON_EVENTS,
  mo as FILENAME_ENEMIES,
  so as FILENAME_ITEMS,
  Ro as FILENAME_MAP_INFOS,
  io as FILENAME_SKILLS,
  Eo as FILENAME_STATES,
  no as FILENAME_SYSTEM,
  Ao as FILENAME_TILESET,
  po as FILENAME_TROOPS,
  ro as FILENAME_WEAPONS,
  st as FLAG_ID_AUTO_BATTLE,
  rt as FLAG_ID_GUARD,
  mt as FLAG_ID_PRESERVE_TP,
  ct as FLAG_ID_SUBSTITUTE,
  hi as FLASH_SCREEN,
  uo as FOLDER_AUDIO,
  xn as FOLDER_AUDIO_BGM,
  Yn as FOLDER_AUDIO_BGS,
  Wn as FOLDER_AUDIO_ME,
  Vn as FOLDER_AUDIO_SE,
  lo as FOLDER_DATA,
  yo as FOLDER_IMG,
  qn as FOLDER_IMG_BATTLEBACK1,
  bn as FOLDER_IMG_BATTLEBACK2,
  jn as FOLDER_IMG_CHACTERS,
  Kn as FOLDER_IMG_ENEMIES,
  Xn as FOLDER_IMG_FACES,
  wn as FOLDER_IMG_PARALLACES,
  $n as FOLDER_IMG_PICTURES,
  Qn as FOLDER_IMG_SV_ACTORS,
  zn as FOLDER_IMG_SV_ENEMIES,
  Jn as FOLDER_IMG_SYSTEM,
  Zn as FOLDER_IMG_TILESETS,
  eo as FOLDER_IMG_TITLES1,
  to as FOLDER_IMG_TITLES2,
  Io as FOLDER_JS,
  Ls as FORCE_ACTION,
  Ds as GAME_OVER,
  Di as GATHER_FOLLOWERS,
  ns as GET_LOCATION_INFO,
  Oi as GET_ONOFF_VEHICLE,
  Zo as HITTYPE_CERTAIN,
  ta as HITTYPE_MAGICAL,
  ea as HITTYPE_PHYSICAL,
  Va as INPUT_NUMBER,
  Za as LABEL,
  Xo as LABELS_DATA_WEAPON,
  ei as LABEL_JUMP,
  Gr as LABEL_REGISTRY_JP,
  Cn as LABEL_SET_DATA,
  r as LABEL_SET_ITEM_EFFECT,
  a as LABEL_SET_TRAIT,
  $a as LOOP,
  Qa as LOOP_BREAK,
  B as MODULE_DATA,
  k as MODULE_SYSTEM,
  O as MODULE_TRAIT,
  ki as MOVE_PICTURE,
  Hr as MockSystemLabelDataTypes,
  ss as NAME_INPUT_PROCESSING,
  Ha as NO_OPERATION,
  Cs as OPEN_MENU_SCREEN,
  Ps as OPEN_SAVE_SCREEN,
  nt as PARTY_ABILITY_CANCEL_SURPRISE,
  it as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  et as PARTY_ABILITY_ENCOUNTER_HALF,
  tt as PARTY_ABILITY_ENCOUNTER_NONE,
  at as PARTY_ABILITY_GOLD_DOUBLE,
  ot as PARTY_ABILITY_RAISE_PREEMPTIVE,
  qi as PLAY_BGM,
  Xi as PLAY_BGS,
  $i as PLAY_ME,
  Ji as PLAY_MOVIE,
  Qi as PLAY_SE,
  hs as PLUGIN_COMMAND_MV,
  Hs as PLUGIN_COMMAND_MZ,
  ps as RECOVER_ALL,
  te as REGULAR_PARAM_AGI,
  z as REGULAR_PARAM_ATK,
  J as REGULAR_PARAM_DEF,
  ne as REGULAR_PARAM_LUK,
  Z as REGULAR_PARAM_MATK,
  $ as REGULAR_PARAM_MAX_HP,
  Q as REGULAR_PARAM_MAX_MP,
  ee as REGULAR_PARAM_MDEF,
  Ki as RESUME_BGM,
  vs as RETURN_TO_TITLE_SCREEN,
  xi as ROTATE_PICTURE,
  Lr as ROUTE_CHANGE_BLEND_MODE,
  dr as ROUTE_CHANGE_FREQ,
  Nr as ROUTE_CHANGE_IMAGE,
  Or as ROUTE_CHANGE_OPACITY,
  Er as ROUTE_CHANGE_SPEED,
  yr as ROUTE_DIR_FIX_OFF,
  lr as ROUTE_DIR_FIX_ON,
  Gs as ROUTE_END,
  Qs as ROUTE_JUMP,
  Xs as ROUTE_MOVE_AWAY,
  $s as ROUTE_MOVE_BACKWARD,
  Bs as ROUTE_MOVE_DOWN,
  ws as ROUTE_MOVE_FORWARD,
  ks as ROUTE_MOVE_LEFT,
  Ws as ROUTE_MOVE_LOWER_L,
  Ys as ROUTE_MOVE_LOWER_R,
  js as ROUTE_MOVE_RANDOM,
  xs as ROUTE_MOVE_RIGHT,
  Ks as ROUTE_MOVE_TOWARD,
  Vs as ROUTE_MOVE_UP,
  qs as ROUTE_MOVE_UPPER_L,
  bs as ROUTE_MOVE_UPPER_R,
  fr as ROUTE_PLAY_SE,
  Cr as ROUTE_SCRIPT,
  Rr as ROUTE_STEP_ANIME_OFF,
  Tr as ROUTE_STEP_ANIME_ON,
  pr as ROUTE_SWITCH_OFF,
  mr as ROUTE_SWITCH_ON,
  Ir as ROUTE_THROUGH_OFF,
  ur as ROUTE_THROUGH_ON,
  Sr as ROUTE_TRANSPARENT_OFF,
  gr as ROUTE_TRANSPARENT_ON,
  ar as ROUTE_TURN_180D,
  or as ROUTE_TURN_90D_L,
  nr as ROUTE_TURN_90D_R,
  ir as ROUTE_TURN_90D_R_L,
  cr as ROUTE_TURN_AWAY,
  Js as ROUTE_TURN_DOWN,
  Zs as ROUTE_TURN_LEFT,
  sr as ROUTE_TURN_RANDOM,
  er as ROUTE_TURN_RIGHT,
  rr as ROUTE_TURN_TOWARD,
  tr as ROUTE_TURN_UP,
  zs as ROUTE_WAIT,
  Ar as ROUTE_WALK_ANIME_OFF,
  _r as ROUTE_WALK_ANIME_ON,
  ji as SAVE_BGM,
  fa as SCHEMA_DAMAGE,
  Yt as SCHEMA_DATA_ACTOR,
  qt as SCHEMA_DATA_ARMMOR,
  bt as SCHEMA_DATA_CLASS,
  wt as SCHEMA_DATA_ENEMY,
  Qt as SCHEMA_DATA_ITEM,
  Mr as SCHEMA_DATA_MAP_INFO,
  $t as SCHEMA_DATA_SKILL,
  jt as SCHEMA_DATA_STATE,
  Kt as SCHEMA_DATA_WEAPON,
  Wo as SCHEMA_TRAIT,
  Fs as SCRIPT_EVAL,
  Us as SCRIPT_EVAL_BODY,
  Si as SCROLL_MAP,
  Wa as SELECT_ITEM,
  gi as SET_EVENT_LOCATION,
  Ni as SET_MOVEMENT_ROUTE,
  Ii as SET_VEHICLE_LOCATION,
  Yi as SET_WEATHER_EFFECT,
  Hi as SHAKE_SCREEN,
  as as SHOP_PROCESSING,
  is as SHOP_PROCESSING_BODY,
  fi as SHOW_ANIMATION,
  Ci as SHOW_BALLOON_ICON,
  Os as SHOW_BATTLE_ANIMATION,
  ka as SHOW_CHOICES,
  xa as SHOW_CHOICES_ITEM,
  Ga as SHOW_MESSAGE,
  Ba as SHOW_MESSAGE_BODY,
  Bi as SHOW_PICTURE,
  Ya as SHOW_SCROLLING_TEXT,
  qa as SHOW_SCROLLING_TEXT_BODY,
  Ka as SKIP,
  oa as SPECIAL_EFFECT_ESCAPE,
  de as SPECIAL_PARAM_EXR,
  Ee as SPECIAL_PARAM_FDR,
  ae as SPECIAL_PARAM_GRD,
  re as SPECIAL_PARAM_MCR,
  pe as SPECIAL_PARAM_MDR,
  me as SPECIAL_PARAM_PDR,
  se as SPECIAL_PARAM_PHA,
  ie as SPECIAL_PARAM_REC,
  ce as SPECIAL_PARAM_TCR,
  oe as SPECIAL_PARAM_TGR,
  _n as SRC_ARMOR_TYPES,
  Ra as SRC_COLOR,
  En as SRC_COMMON_EVNET,
  ra as SRC_DATA_ACTOR,
  _a as SRC_DATA_ARMOR,
  Aa as SRC_DATA_CLASS,
  pa as SRC_DATA_ENEMY,
  Ea as SRC_DATA_ITEMS,
  ma as SRC_DATA_MAP,
  Se as SRC_DATA_SKILL,
  u as SRC_DATA_STATE,
  ca as SRC_DATA_VARIABLE,
  da as SRC_DATA_WEAPON,
  An as SRC_ELEMENTS,
  la as SRC_EQUIP_TYPES,
  le as SRC_PARAMS_EXTRA,
  y as SRC_PARAMS_REGULAR,
  ye as SRC_PARAMS_SPECIAL,
  ua as SRC_SKILL_TYPES,
  ya as SRC_SWITCHES,
  ue as SRC_TRAIT_COLLAPS,
  Ie as SRC_TRAIT_PARTY_ABILITY,
  ge as SRC_TRAIT_SPECIAL_FLAG,
  Ta as SRC_TROOP,
  dn as SRC_WEAPON_TYPES,
  zi as STOP_SE,
  Vi as TINT_PICTURE,
  Ui as TINT_SCREEN,
  Ke as TRAIT_ACTION_PLUS,
  Fe as TRAIT_ATTACK_ELEMENT,
  Ge as TRAIT_ATTACK_SKILL,
  he as TRAIT_ATTACK_SPEED,
  Ue as TRAIT_ATTACK_STATE,
  He as TRAIT_ATTACK_TIMES,
  we as TRAIT_COLLAPSE_TYPE,
  fe as TRAIT_DEBUFF_RATE,
  Le as TRAIT_ELEMENT_RATE,
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
  Xe as TRAIT_SPECIAL_FLAG,
  Ce as TRAIT_STATE_RATE,
  Me as TRAIT_STATE_RESIST,
  De as TRAIT_XPARAM,
  ui as TRANSFER_PLAYER,
  Vo as TYPENAME_TRAIT,
  Rt as TraitDescriptor,
  Gi as WAIT,
  Uo as buildCollapsSource,
  Go as buildExtraParamSource,
  ho as buildPartyAbilitySource,
  Ho as buildRegularParamSource,
  ko as buildSpecialFlagSource,
  Bo as buildSpecialParamSource,
  gn as defineEffectAddBuff,
  On as defineEffectAddDebuff,
  un as defineEffectAddState,
  fn as defineEffectCommonEvent,
  yn as defineEffectGainTp,
  Sa as defineEffectGrow,
  Nn as defineEffectLearnSkill,
  Rn as defineEffectRecoverHp,
  ln as defineEffectRecoverMp,
  Sn as defineEffectRemoveBuff,
  Ln as defineEffectRemoveDebuff,
  In as defineEffectRemoveState,
  vo as extraParamName,
  pt as foldCollapsOptions,
  _t as foldExtraParam,
  Et as foldPartyAbilityOptions,
  dt as foldRegularParam,
  Tt as foldSpecialFlag,
  At as foldSpecialParams,
  Ia as formatItemEffectText,
  Mo as getArmorTypes,
  Oo as getElementTypes,
  Lo as getEquipTypes,
  Po as getParamNames,
  fo as getSkillTypes,
  No as getVariableNames,
  Co as getWeaponTypes,
  Pa as isDataActor,
  Da as isDataArmor,
  ha as isDataClass,
  Fa as isDataEnemy,
  Ca as isDataItem,
  Ma as isDataSkill,
  Ua as isDataState,
  va as isDataWeapon,
  sa as isValid,
  ia as joinSourceKey,
  Yo as makeActor,
  bo as makeArmor,
  Br as makeAudioFileParams,
  jo as makeClass,
  Dr as makeCommonEventData,
  L as makeDamage,
  Xt as makeDropItem,
  Qo as makeEnemy,
  $o as makeEnemyAction,
  zo as makeItem,
  Pr as makeMapData,
  Jo as makeSkill,
  Ko as makeState,
  vr as makeTroopData,
  Ur as makeTroopEventConditions,
  Fr as makeTroopMember,
  wo as makeWeapon,
  go as mergeDomainLabel,
  So as mergeNestedPrimitiveRecords,
  G as mergeWithDefaults,
  qo as normalizeDataActor,
  Do as regularParamName,
  ga as resolveItemEffectLabels,
  xo as resolveTraitLabels,
  aa as sanitizeKey,
  Fo as specialParamName,
  N as testUnknonwKey,
  R as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
