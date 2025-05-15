import L from "ajv";
const _o = "bgm", To = "se", lo = "me", yo = "bgs", Ro = "battlebacks1", uo = "battlebacks2", Io = "characters", go = "enemies", So = "faces", No = "parallaxes", Co = "pictures", fo = "sv_actors", Oo = "sv_enemies", Lo = "system", Mo = "tilesets", Po = "titles1", Do = "titles2", vo = "System.json", ho = "Actors.json", Fo = "Classes.json", Ho = "Skills.json", Uo = "Items.json", Go = "Weapons.json", xo = "Armors.json", ko = "Enemies.json", Bo = "Troops.json", bo = "States.json", Vo = "Animations.json", Wo = "Tilesets.json", qo = "CommonEvents.json", Yo = "MapInfos.json", wo = "data", jo = "img", Ko = "audio", Xo = "js", V = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const s = t[o];
    typeof s == "string" && (n[o] = s);
  }
  return n;
}, $o = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: V(e.options, t.options ?? {})
}), zo = (e, t) => {
  const n = {};
  for (const o in e) {
    const s = e[o], p = t[o] ?? {};
    n[o] = V(
      s,
      p
    );
  }
  return n;
}, _ = (e, t) => ({
  name: e,
  id: t
}), Qo = (e) => e.variables.map(_), Jo = (e) => e.elements.map(_), Zo = (e) => e.equipTypes.map(_), ea = (e) => e.skillTypes.map(_), ta = (e) => e.weaponTypes.map(_), na = (e) => e.armorTypes.map(_), oa = (e) => e.terms.params.map(_), T = "rmmz", M = "trait", W = "data", q = "system", ve = 11, he = 12, Fe = 13, He = 14, Ue = 21, Ge = 22, xe = 23, ke = 31, Be = 32, be = 33, Ve = 34, We = 35, qe = 41, Ye = 42, we = 43, je = 44, Ke = 51, Xe = 52, $e = 53, ze = 54, Qe = 55, Je = 61, Ze = 62, et = 63, tt = 64, nt = 0, ot = 1, at = 2, it = 3, rt = 0, st = 1, ct = 2, mt = 3, pt = 4, Et = 5, dt = 0, At = 1, _t = 2, Tt = 3, Y = 0, w = 1, j = 2, K = 3, X = 4, $ = 5, z = 6, Q = 7, J = 8, Z = 9, ee = 0, te = 1, ne = 2, oe = 3, ae = 4, ie = 5, re = 6, se = 7, ce = 0, me = 1, pe = 2, Ee = 3, de = 4, Ae = 5, _e = 6, Te = 7, le = 8, ye = 9, aa = (e, t) => {
  switch (e) {
    case ee:
      return t.maxHp;
    case te:
      return t.maxMp;
    case ne:
      return t.atk;
    case oe:
      return t.def;
    case ae:
      return t.matk;
    case ie:
      return t.mdef;
    case re:
      return t.agi;
    case se:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, ia = (e, t) => {
  switch (e) {
    case K:
      return t.criticalEvasionRate;
    case w:
      return t.evasionRate;
    case z:
      return t.counterAttackRate;
    case j:
      return t.criticalRate;
    case Y:
      return t.hitRate;
    case Q:
      return t.hpRegenerationRate;
    case X:
      return t.magicEvasionRate;
    case $:
      return t.magicReflectionRate;
    case J:
      return t.mpRegenerationRate;
    case Z:
      return t.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, ra = (e, t) => {
  switch (e) {
    case ye:
      return t.experienceRate;
    case ce:
      return t.targetRate;
    case le:
      return t.floorDamageRate;
    case me:
      return t.guradEffectRate;
    case de:
      return t.mpCostRate;
    case Ae:
      return t.tpChargeRate;
    case _e:
      return t.physicalDamageRate;
    case Te:
      return t.magicDamageRate;
    case Ee:
      return t.pharmacology;
    case pe:
      return t.recoveryEffectRate;
  }
  return `?sparams[${e}]`;
}, lt = (e, t) => [
  {
    id: nt,
    name: t.normal
  },
  {
    id: ot,
    name: e.bossCollaps
  },
  {
    id: at,
    name: e.instantCollaps
  },
  {
    id: it,
    name: e.noneCollaps
  }
], yt = (e) => [
  {
    id: rt,
    name: e.encounterHalf
  },
  {
    id: st,
    name: e.encounterNone
  },
  {
    id: ct,
    name: e.cancelSurprise
  },
  {
    id: mt,
    name: e.raisePreemptive
  },
  {
    id: pt,
    name: e.goldDouble
  },
  {
    id: Et,
    name: e.dropItemDouble
  }
], Rt = (e) => [
  { id: ee, name: e.maxHp },
  { id: te, name: e.maxMp },
  { id: ne, name: e.atk },
  { id: oe, name: e.def },
  { id: ae, name: e.matk },
  { id: ie, name: e.mdef },
  { id: re, name: e.agi },
  { id: se, name: e.luk }
], ut = (e) => [
  {
    id: Y,
    name: e.hitRate
  },
  {
    id: w,
    name: e.evasionRate
  },
  {
    id: j,
    name: e.criticalRate
  },
  {
    id: K,
    name: e.criticalEvasionRate
  },
  {
    id: X,
    name: e.magicEvasionRate
  },
  {
    id: $,
    name: e.magicReflectionRate
  },
  {
    id: z,
    name: e.counterAttackRate
  },
  {
    id: Q,
    name: e.hpRegenerationRate
  },
  {
    id: J,
    name: e.mpRegenerationRate
  },
  {
    id: Z,
    name: e.tpRegenerationRate
  }
], It = (e) => [
  {
    id: ce,
    name: e.targetRate
  },
  {
    id: me,
    name: e.guradEffectRate
  },
  {
    id: pe,
    name: e.recoveryEffectRate
  },
  {
    id: Ee,
    name: e.pharmacology
  },
  {
    id: de,
    name: e.mpCostRate
  },
  {
    id: Ae,
    name: e.tpChargeRate
  },
  {
    id: _e,
    name: e.physicalDamageRate
  },
  {
    id: Te,
    name: e.magicDamageRate
  },
  {
    id: le,
    name: e.floorDamageRate
  },
  {
    id: ye,
    name: e.experienceRate
  }
], gt = (e) => [
  {
    id: dt,
    name: e.autoBattle
  },
  {
    id: At,
    name: e.guard
  },
  {
    id: _t,
    name: e.substitute
  },
  {
    id: Tt,
    name: e.preventEscape
  }
], R = (e, t, n) => ({
  items: n(t.options),
  label: t.domainName,
  source: {
    author: T,
    module: M,
    kind: e
  }
}), sa = (e, t) => R(
  Ce,
  e,
  (n) => lt(n, t)
), ca = (e) => R(fe, e, yt), ma = (e) => R(I, e, Rt), pa = (e) => R(Se, e, ut), Ea = (e) => R(Ne, e, It), da = (e) => R(Oe, e, gt), c = "{name}", y = "{name} * {value}%", v = "{name} + {value}%", h = "{value}", a = {
  domainName: "特徴",
  options: {
    regularParam: {
      domainName: "基本能力値",
      format: y,
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
      format: v,
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
      format: y,
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
      format: y
    },
    debuffRate: {
      domainName: "弱体有効度",
      format: y
    },
    stateRate: {
      domainName: "ステート有効度",
      format: y
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
      format: v
    },
    attackSpeed: {
      domainName: "攻撃速度補正",
      format: h
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: h
    },
    actionPlus: {
      domainName: "行動追加",
      format: y
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
}, F = "{value}", H = "{name}";
class St {
  constructor(t, n, o, s) {
    this.code = t, this.label = n, this.format = o, this.dataSource = s;
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
      F,
      t.value.toString()
    );
    return this.dataSource ? o.replaceAll(
      H,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue() {
    return this.format.includes(F);
  }
  requiresName() {
    return this.format.includes(H);
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
const Aa = (e) => [
  Nt(e.elementRate),
  Ct(e.debuffRate),
  ft(e.stateRate),
  Ot(e.stateResist),
  Lt(e.regularParam),
  Mt(e.extraParam),
  Pt(e.specialParam),
  Dt(e.attackElement),
  vt(e.attackState),
  ht(e.attackSpeed),
  Ft(e.attackTimes),
  Ht(e.attackSkill),
  jt(e.skillTypeAdd),
  Kt(e.skillTypeSeal),
  qt(e.skillAdd),
  Yt(e.skillSeal),
  Bt(e.equipWeaponType),
  bt(e.equipArmorType),
  Vt(e.equipLock),
  Wt(e.equipSeal),
  wt(e.slotType),
  Ut(e.actionPlus),
  Gt(e.specialFlag),
  xt(e.collaps),
  kt(e.partyAbility)
], U = (e, t) => typeof t == "string" ? t : e, i = (e, t, n, o) => {
  const s = U(t.domainName, n.domainName), p = U(t.format, n.format);
  return new St(e, s, p, o);
}, Re = () => ({
  module: q,
  author: T,
  kind: In
}), ue = (e) => ({
  module: W,
  author: T,
  kind: e
}), d = (e) => ({
  author: T,
  module: M,
  kind: e
}), Ie = (e) => ({
  author: T,
  module: q,
  kind: e
}), Nt = (e) => i(
  ve,
  a.options.elementRate,
  e,
  Re()
), Ct = (e) => i(
  he,
  a.options.debuffRate,
  e,
  d(I)
), ft = (e) => i(
  Fe,
  a.options.stateRate,
  e,
  d(I)
), Ot = (e) => i(
  He,
  a.options.stateResist,
  e,
  ue(g)
), Lt = (e) => i(
  Ue,
  a.options.regularParam,
  e,
  d(I)
), Mt = (e) => i(
  Ge,
  a.options.extraParam,
  e,
  d(Se)
), Pt = (e) => i(
  xe,
  a.options.specialParam,
  e,
  d(Ne)
), Dt = (e) => i(
  ke,
  a.options.attackElement,
  e,
  Re()
), vt = (e) => i(
  Be,
  a.options.attackState,
  e,
  d(g)
), ht = (e) => i(be, a.options.attackSpeed, e), Ft = (e) => i(Ve, a.options.attackTimes, e), Ht = (e) => i(
  We,
  a.options.attackSkill,
  e,
  ue(Le)
), Ut = (e) => i(Je, a.options.actionPlus, e), Gt = (e) => i(
  Ze,
  a.options.specialFlag,
  e,
  d(Oe)
), xt = (e) => i(
  et,
  a.options.collaps,
  e,
  d(Ce)
), kt = (e) => i(
  tt,
  a.options.partyAbility,
  e,
  d(fe)
), Bt = (e) => i(
  Ke,
  a.options.equipWeaponType,
  e,
  Ie(Rn)
), bt = (e) => i(
  Xe,
  a.options.equipArmorType,
  e,
  Ie(un)
), Vt = (e) => i($e, a.options.equipLock, e), Wt = (e) => i(ze, a.options.equipSeal, e), qt = (e) => i(we, a.options.skillAdd, e), Yt = (e) => i(je, a.options.skillSeal, e), wt = (e) => i(Qe, a.options.slotType, e), jt = (e) => i(
  qe,
  a.options.skillTypeAdd,
  e
), Kt = (e) => i(
  Ye,
  a.options.skillTypeSeal,
  e
), _a = "Trait", Ta = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, la = (e = {}) => ({
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
}), Xt = {
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
}, ya = (e) => ({
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
}), Ra = (e = {}) => ({
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
}), $t = {
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
}, ua = (e = {}) => ({
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
}), zt = {
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
}, Ia = (e = {}) => ({
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
}), Qt = {
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
}, ga = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Sa = (e = {}) => ({
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
  damage: P(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), Jt = {
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
}, Zt = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), Na = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Ca = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => Zt())) ?? [],
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
}, en = {
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
}, fa = (e = {}) => ({
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
  damage: P(e.damage ?? {}),
  effects: [],
  price: 0
}), Oa = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: P(e.damage ?? {}),
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
}), tn = {
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
}, nn = {
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
}, La = 0, Ma = 1, Pa = 2, on = "{name} + {value1}", G = "{name} {value1}%", f = "{value1}% + {value2}", x = "{name} {value1}ターン", u = "{name}", m = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: x
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: x
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: f
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: on
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: u
    },
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: f
    },
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: f
    },
    removeBuff: {
      desc: "バフを解除する",
      domainName: "バフ解除",
      format: u
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: u
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: G
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: u
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: G
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: u
    }
  }
}, an = 11, rn = 12, sn = 13, cn = 21, mn = 22, pn = 31, En = 32, dn = 33, An = 34, Da = 41, _n = 42, Tn = 43, ln = 44, va = 0, ge = /^[a-zA-Z0-9]+$/, ha = (e) => ge.test(e) ? e : void 0, O = (e) => typeof e == "string" ? ge.test(e) : !1, Fa = (e) => [e.author, e.module, e.kind].join("."), Ha = (e) => O(e.author) && O(e.module) && O(e.kind), I = "params", Se = "xparams", Ne = "sparams", Ce = "collaps", fe = "partyAbiility", Oe = "sflag", Ua = "actor", Ga = "variables", xa = "map", ka = "enemy", g = "state", Le = "skill", Ba = "items", ba = "weapon", Va = "armor", Wa = "class", yn = "common_event", qa = "troop", Ya = "colors", Rn = "weaponTypes", un = "armorTypes", wa = "equipTypes", ja = "switches", Ka = "skillTypes", In = "elements", k = "{value1}", B = "{value2}", b = "{name}";
class gn {
  constructor(t, n, o, s, p) {
    this.codeId = t, this.label = n, this.format = o, this.description = s, this.dataSource = p;
  }
  formatText(t, n) {
    const o = this.format.replaceAll(k, t.value1.toString()).replaceAll(B, t.value2.toString());
    return this.dataSource ? o.replaceAll(
      b,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue1() {
    return this.format.includes(k);
  }
  requiresValue2() {
    return this.format.includes(B);
  }
  requiresName() {
    return this.format.includes(b);
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
const Xa = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), $a = (e) => [
  Sn(e.options.recoverHp),
  Nn(e.options.recoverMp),
  Cn(e.options.gainTp),
  fn(e.options.addState),
  On(e.options.removeState),
  Ln(e.options.addBuff),
  Dn(e.options.addDebuff),
  Mn(e.options.removeBuff),
  vn(e.options.removeDebuff),
  Pn(e.options.learnSkill),
  hn(e.options.commonEvent)
], S = () => ({
  author: T,
  module: M,
  kind: I
}), N = (e) => ({
  author: T,
  module: W,
  kind: e
}), E = (e, t, n, o) => {
  const s = n.domainName ?? t.domainName, p = n.format ?? t.format, De = n.desc ?? t.desc;
  return new gn(e, s, p, De, o);
}, Sn = (e) => E(
  an,
  m.options.recoverHp,
  e
), Nn = (e) => E(
  rn,
  m.options.recoverMp,
  e
), Cn = (e) => E(sn, m.options.gainTp, e), za = (e) => E(_n, m.options.grow, e), fn = (e) => E(
  cn,
  m.options.addState,
  e,
  N(g)
), On = (e) => E(
  mn,
  m.options.removeState,
  e,
  N(g)
), Ln = (e) => E(
  pn,
  m.options.addBuff,
  e,
  S()
), Mn = (e) => E(
  dn,
  m.options.removeBuff,
  e,
  S()
), Pn = (e) => E(
  Tn,
  m.options.learnSkill,
  e,
  N(Le)
), Dn = (e) => E(
  En,
  m.options.addBuff,
  e,
  S()
), vn = (e) => E(
  An,
  m.options.removeDebuff,
  e,
  S()
), hn = (e) => E(
  ln,
  m.options.commonEvent,
  e,
  N(yn)
), Qa = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Ja = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, Za = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, Fn = {
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
}, Hn = {
  domainName: "ダメージ",
  options: {}
}, P = (e = {}) => ({
  type: e.type ?? 0,
  elementId: e.elementId ?? 0,
  formula: e.formula ?? "",
  variance: e.variance ?? 0,
  critical: e.critical ?? !1
}), ei = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, A = new L(), Un = A.compile(nn), Gn = A.compile(tn), xn = A.compile(Xt), kn = A.compile($t), Bn = A.compile(Jt), bn = A.compile(en), Vn = A.compile(Qt), Wn = A.compile(zt), ti = (e) => Un(e), ni = (e) => Gn(e), oi = (e) => xn(e), ai = (e) => kn(e), ii = (e) => Bn(e), ri = (e) => bn(e), si = (e) => Vn(e), ci = (e) => Wn(e), mi = 0, pi = 101, Ei = 401, di = 102, Ai = 402, _i = 103, Ti = 104, li = 105, yi = 405, Ri = 108, ui = 408, Ii = 109, gi = 111, Si = 411, Ni = 112, Ci = 113, fi = 115, Oi = 117, Li = 118, Mi = 119, Pi = 121, Di = 122, vi = 123, hi = 124, Fi = 125, Hi = 126, Ui = 127, Gi = 128, xi = 129, ki = 132, Bi = 133, bi = 134, Vi = 135, Wi = 136, qi = 137, Yi = 138, wi = 139, ji = 140, Ki = 201, Xi = 202, $i = 203, zi = 204, Qi = 205, Ji = 206, Zi = 211, er = 212, tr = 213, nr = 214, or = 216, ar = 217, ir = 221, rr = 222, sr = 223, cr = 224, mr = 225, pr = 230, Er = 231, dr = 232, Ar = 233, _r = 234, Tr = 235, lr = 236, yr = 241, Rr = 242, ur = 243, Ir = 244, gr = 245, Sr = 246, Nr = 249, Cr = 250, fr = 251, Or = 261, Lr = 282, Mr = 283, Pr = 284, Dr = 285, vr = 301, hr = 302, Fr = 605, Hr = 303, Ur = 311, Gr = 312, xr = 313, kr = 314, Br = 315, br = 320, Vr = 321, Wr = 322, qr = 323, Yr = 324, wr = 325, jr = 331, Kr = 332, Xr = 333, $r = 334, zr = 335, Qr = 336, Jr = 337, Zr = 339, es = 340, ts = 351, ns = 342, os = 352, as = 353, is = 354, rs = 355, ss = 655, cs = 356, ms = 357, ps = 0, Es = 1, ds = 2, As = 3, _s = 4, Ts = 5, ls = 6, ys = 7, Rs = 8, us = 9, Is = 10, gs = 11, Ss = 12, Ns = 13, Cs = 14, fs = 15, Os = 16, Ls = 17, Ms = 18, Ps = 19, Ds = 20, vs = 21, hs = 22, Fs = 23, Hs = 24, Us = 25, Gs = 26, xs = 27, ks = 28, Bs = 29, bs = 30, Vs = 31, Ws = 32, qs = 33, Ys = 34, ws = 35, js = 36, Ks = 37, Xs = 38, $s = 39, zs = 40, Qs = 41, Js = 42, Zs = 43, ec = 44, tc = 45, nc = (e, t, n = 0) => ({
  code: e,
  indent: n,
  parameters: t
}), oc = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), qn = () => ({
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}), Yn = (e = {}) => ({
  switch1Id: e.switch1Id ?? 0,
  switch1Valid: e.switch1Id !== void 0,
  switch2Id: e.switch2Id ?? 0,
  switch2Valid: e.switch2Id !== void 0,
  variableId: e.variableId ?? 0,
  variableValid: e.variableId !== void 0,
  variableValue: e.variableValue ?? 0,
  selfSwitchCh: e.selfSwitchCh ?? "A",
  selfSwitchValid: e.selfSwitchCh !== void 0,
  itemId: e.itemId ?? 0,
  itemValid: e.itemId !== void 0,
  actorId: e.actorId ?? 0,
  actorValid: e.actorId !== void 0
}), ac = () => ({
  conditions: Yn(),
  list: [],
  directionFix: !1,
  image: qn(),
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
}, jn = (e) => e.toString().padStart(3, "0"), ic = (e = { id: 0 }) => ({
  name: e.name ?? jn(e.id),
  id: e.id,
  expanded: e.expanded ?? !1,
  order: e.order ?? 0,
  parentId: e.parentId ?? 0,
  scrollX: e.scrollX ?? 0,
  scrollY: e.scrollY ?? 0
}), rc = (e = {}) => ({
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
}), sc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), cc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), mc = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), pc = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), Kn = new L(), Xn = Kn.compile(wn), Ec = (e) => Xn(e), dc = (e = {}) => ({
  gameId: e.gameId ?? 0,
  screenWidth: e.screenWidth ?? 0,
  screenHeight: e.screenHeight ?? 0,
  uiAreaWidth: e.uiAreaWidth ?? 0,
  uiAreaHeight: e.uiAreaHeight ?? 0,
  windowOpacity: e.windowOpacity ?? 0,
  screenScale: e.screenScale ?? 1,
  numberFontFilename: e.numberFontFilename ?? "",
  mainFontFilename: e.mainFontFilename ?? "",
  fallbackFonts: e.fallbackFonts ?? "",
  fontSize: e.fontSize ?? 28
}), Ac = {
  type: "object",
  properties: {
    gameId: { type: "integer" },
    screenWidth: { type: "integer" },
    screenHeight: { type: "integer" },
    uiAreaWidth: { type: "integer" },
    uiAreaHeight: { type: "integer" },
    windowOpacity: { type: "integer" },
    screenScale: { type: "number" },
    numberFontFilename: { type: "string" },
    mainFontFilename: { type: "string" },
    fallbackFonts: { type: "string" },
    fontSize: { type: "integer" }
  },
  required: [
    "gameId",
    "screenWidth",
    "screenHeight",
    "uiAreaWidth",
    "uiAreaHeight",
    "windowOpacity",
    "screenScale",
    "numberFontFilename",
    "mainFontFilename",
    "fallbackFonts",
    "fontSize"
  ],
  additionalProperties: !1
}, r = (e = {}) => ({
  name: e.name ?? "",
  volume: e.volume ?? 100,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
}), _c = (e) => [
  r(e.cursor),
  r(e.ok),
  r(e.cancel),
  r(e.buzzer),
  r(e.equip),
  r(e.save),
  r(e.load),
  r(e.battleStart),
  r(e.escape),
  r(e.enemyAttack),
  r(e.enemyDamage),
  r(e.enemyCollapse),
  r(e.bossCollapes1),
  r(e.bossCollapes2),
  r(e.actorDamage),
  r(e.actorCollapse),
  r(e.playRecovery),
  r(e.playMiss),
  r(e.playEvasion),
  r(e.playMagicEvasion),
  r(e.playReflection),
  r(e.shop),
  r(e.useItem),
  r(e.useSkill)
], Tc = {
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
}, lc = {
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
}, Me = (e, t) => `<${e}:${t}>`, C = () => /<([^<>:]+):([^>]*)>/g, yc = (e, t) => Pe(e.note, (n, o) => t(n, o, e)), Rc = (e) => Pe(e, (t, n) => [t, n]), Pe = (e, t) => {
  const n = C();
  return Array.from(e.matchAll(n), (o) => t(o[1], o[2]));
}, uc = (e, t) => e.replaceAll(
  C(),
  (n, o, s) => {
    const p = t(o, s);
    return Me(o, p);
  }
), Ic = (e, t) => {
  const n = C(), o = Array.from(e.matchAll(n)).find(
    (s) => s[1] === t
  );
  return o ? o[2] : void 0;
}, gc = (e, t, n) => {
  const o = C();
  return e.replaceAll(o, (s, p) => p === t ? Me(p, n) : s);
}, D = (e, t) => `\\${e}[${t}]`, Sc = (e, t) => t.map((n, o) => ({
  text: n,
  controlChar: D(e, o)
})), Nc = (e) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g;
  return Array.from(e.matchAll(t)).map(
    (n) => ({
      char: n[1],
      id: parseInt(n[2], 10)
    })
  );
}, $n = "N", zn = "V", Cc = (e) => e.map((t) => ({
  text: t.name,
  controlChar: D($n, t.id)
})), fc = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: D(zn, n)
})).filter((t) => t.text !== ""), Qn = {
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
}, Oc = {
  rpg: {
    damage: Hn,
    data: Fn,
    traits: a,
    itemEffect: m
  },
  global: Qn
}, Jn = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: {
      type: "integer",
      enum: [108, 408, 355, 401, 405, 655]
    },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: [{ type: "string" }]
    }
  },
  additionalProperties: !1
}, Zn = {
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
}, eo = {
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
}, to = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: { type: "integer", const: 101 },
    // Assuming 101 is the code for ShowMessage
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
}, no = {
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
}, oo = {
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
}, ao = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: {
      type: "integer",
      enum: [
        132,
        // ChangeBattleBGM
        133,
        // ChangeVictoryME
        139,
        // ChangeDefeatME
        241,
        // PlayBGM
        245,
        // PlayBGS
        249,
        // PlayME
        250
        // PlaySE
      ]
    },
    indent: { type: "integer" },
    parameters: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: [
        {
          type: "object",
          properties: {
            name: { type: "string" },
            volume: { type: "integer" },
            pitch: { type: "integer" },
            pan: { type: "integer" }
          },
          required: ["name", "volume", "pitch", "pan"],
          additionalProperties: !1
        }
      ]
    }
  },
  additionalProperties: !1
}, l = new L(), io = l.compile(to), ro = l.compile(eo), so = l.compile(Zn), co = l.compile(no), mo = l.compile(Jn), po = l.compile(oo), Eo = l.compile(ao), Lc = (e) => mo(e), Mc = (e) => Eo(e), Pc = (e) => po(e), Dc = (e) => ro(e), vc = (e) => so(e), hc = (e) => co(e), Fc = (e) => io(e);
export {
  es as ABORT_BATTLE,
  T as AUTHOR_RMMZ,
  vr as BATTLE_PROCESSING,
  Wr as CHANGE_ACTOR_IMAGES,
  Gi as CHANGE_ARMORS,
  Mr as CHANGE_BATTLE_BACKGROUND,
  ki as CHANGE_BATTLE_BGM,
  Vr as CHANGE_CLASS,
  wi as CHANGE_DEFEAT_ME,
  Wi as CHANGE_ENCOUNTER,
  jr as CHANGE_ENEMY_HP,
  Kr as CHANGE_ENEMY_MP,
  Xr as CHANGE_ENEMY_STATE,
  ns as CHANGE_ENEMY_TP,
  Br as CHANGE_EXP,
  qi as CHANGE_FORMATION_ACCESS,
  Fi as CHANGE_GOLD,
  Ur as CHANGE_HP,
  Hi as CHANGE_ITEMS,
  Vi as CHANGE_MENU_ACCESS,
  Gr as CHANGE_MP,
  br as CHANGE_NAME,
  Yr as CHANGE_NICKNAME,
  Pr as CHANGE_PARALLAX,
  xi as CHANGE_PARTY_MEMBER,
  or as CHANGE_PLAYER_FOLLOWERS,
  wr as CHANGE_PROFILE,
  bi as CHANGE_SAVE_ACCESS,
  Lr as CHANGE_TILESET,
  xr as CHANGE_TP,
  Zi as CHANGE_TRANSPARENCY,
  ji as CHANGE_VEHICLE_BGM,
  qr as CHANGE_VEHICLE_IMAGE,
  Bi as CHANGE_VICTORY_ME,
  Ui as CHANGE_WEAPONS,
  Yi as CHANGE_WINDOW_COLOR,
  ot as COLLAPS_BOSS,
  at as COLLAPS_INSTANT,
  it as COLLAPS_NONE,
  nt as COLLAPS_NORMAL,
  Ri as COMMENT,
  ui as COMMENT_BODY,
  Oi as COMMON_EVENT,
  gi as CONDITIONAL_BRANCH,
  Si as CONDITIONAL_BRANCH_ELSE,
  vi as CONTROL_SELF_SWITCH,
  Pi as CONTROL_SWITCHES,
  hi as CONTROL_TIMER,
  Di as CONTROL_VARIABLES,
  Hn as DEFAULT_DAMAGE_LABELS,
  Qn as DEFAULT_GLOBAL_LABELS,
  Qa as DEFAULT_ITEM_LABELS,
  Ja as DEFAULT_SKILL_LABELS,
  Tc as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Za as DEFAULT_USABLE_ITEM_LABELS,
  pn as EFFECT_ADD_BUFF,
  En as EFFECT_ADD_DEBUFF,
  cn as EFFECT_ADD_STATE,
  ln as EFFECT_COMMON_EVENT,
  sn as EFFECT_GAIN_TP,
  _n as EFFECT_GROW,
  Tn as EFFECT_LEARN_SKILL,
  an as EFFECT_RECOVER_HP,
  rn as EFFECT_RECOVER_MP,
  dn as EFFECT_REMOVE_BUFF,
  An as EFFECT_REMOVE_DEBUFF,
  mn as EFFECT_REMOVE_STATE,
  Da as EFFECT_SPECIAL,
  zr as ENEMY_APPEAR,
  $r as ENEMY_RECOVER_ALL,
  Qr as ENEMY_TRANSFORM,
  nr as ERASE_EVENT,
  Tr as ERASE_PICTURE,
  fi as EXIT_EVENT_PROCESSING,
  K as EXTRA_PARAM_CEV,
  z as EXTRA_PARAM_CNT,
  j as EXTRA_PARAM_CRI,
  w as EXTRA_PARAM_EVA,
  Y as EXTRA_PARAM_HIT,
  Q as EXTRA_PARAM_HRG,
  X as EXTRA_PARAM_MEV,
  $ as EXTRA_PARAM_MRF,
  J as EXTRA_PARAM_MRG,
  Z as EXTRA_PARAM_TRG,
  rr as FADEIN_SCREEN,
  Rr as FADEOUT_BGM,
  Sr as FADEOUT_BGS,
  ir as FADEOUT_SCREEN,
  ho as FILENAME_ACTORS,
  Vo as FILENAME_ANIMATIONS,
  xo as FILENAME_ARMORS,
  Fo as FILENAME_CLASSES,
  qo as FILENAME_COMMON_EVENTS,
  ko as FILENAME_ENEMIES,
  Uo as FILENAME_ITEMS,
  Yo as FILENAME_MAP_INFOS,
  Ho as FILENAME_SKILLS,
  bo as FILENAME_STATES,
  vo as FILENAME_SYSTEM,
  Wo as FILENAME_TILESET,
  Bo as FILENAME_TROOPS,
  Go as FILENAME_WEAPONS,
  dt as FLAG_ID_AUTO_BATTLE,
  At as FLAG_ID_GUARD,
  Tt as FLAG_ID_PRESERVE_TP,
  _t as FLAG_ID_SUBSTITUTE,
  cr as FLASH_SCREEN,
  Ko as FOLDER_AUDIO,
  _o as FOLDER_AUDIO_BGM,
  yo as FOLDER_AUDIO_BGS,
  lo as FOLDER_AUDIO_ME,
  To as FOLDER_AUDIO_SE,
  wo as FOLDER_DATA,
  jo as FOLDER_IMG,
  Ro as FOLDER_IMG_BATTLEBACK1,
  uo as FOLDER_IMG_BATTLEBACK2,
  Io as FOLDER_IMG_CHACTERS,
  go as FOLDER_IMG_ENEMIES,
  So as FOLDER_IMG_FACES,
  No as FOLDER_IMG_PARALLACES,
  Co as FOLDER_IMG_PICTURES,
  fo as FOLDER_IMG_SV_ACTORS,
  Oo as FOLDER_IMG_SV_ENEMIES,
  Lo as FOLDER_IMG_SYSTEM,
  Mo as FOLDER_IMG_TILESETS,
  Po as FOLDER_IMG_TITLES1,
  Do as FOLDER_IMG_TITLES2,
  Xo as FOLDER_JS,
  Zr as FORCE_ACTION,
  as as GAME_OVER,
  ar as GATHER_FOLLOWERS,
  Dr as GET_LOCATION_INFO,
  Ji as GET_ONOFF_VEHICLE,
  La as HITTYPE_CERTAIN,
  Pa as HITTYPE_MAGICAL,
  Ma as HITTYPE_PHYSICAL,
  _i as INPUT_NUMBER,
  Li as LABEL,
  ga as LABELS_DATA_WEAPON,
  Mi as LABEL_JUMP,
  Oc as LABEL_REGISTRY_JP,
  Fn as LABEL_SET_DATA,
  m as LABEL_SET_ITEM_EFFECT,
  a as LABEL_SET_TRAIT,
  Ni as LOOP,
  Ci as LOOP_BREAK,
  W as MODULE_DATA,
  q as MODULE_SYSTEM,
  M as MODULE_TRAIT,
  dr as MOVE_PICTURE,
  lc as MockSystemLabelDataTypes,
  Hr as NAME_INPUT_PROCESSING,
  mi as NO_OPERATION,
  ts as OPEN_MENU_SCREEN,
  os as OPEN_SAVE_SCREEN,
  ct as PARTY_ABILITY_CANCEL_SURPRISE,
  Et as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  rt as PARTY_ABILITY_ENCOUNTER_HALF,
  st as PARTY_ABILITY_ENCOUNTER_NONE,
  pt as PARTY_ABILITY_GOLD_DOUBLE,
  mt as PARTY_ABILITY_RAISE_PREEMPTIVE,
  yr as PLAY_BGM,
  gr as PLAY_BGS,
  Nr as PLAY_ME,
  Or as PLAY_MOVIE,
  Cr as PLAY_SE,
  cs as PLUGIN_COMMAND_MV,
  ms as PLUGIN_COMMAND_MZ,
  kr as RECOVER_ALL,
  re as REGULAR_PARAM_AGI,
  ne as REGULAR_PARAM_ATK,
  oe as REGULAR_PARAM_DEF,
  se as REGULAR_PARAM_LUK,
  ae as REGULAR_PARAM_MATK,
  ee as REGULAR_PARAM_MAX_HP,
  te as REGULAR_PARAM_MAX_MP,
  ie as REGULAR_PARAM_MDEF,
  Ir as RESUME_BGM,
  is as RETURN_TO_TITLE_SCREEN,
  Ar as ROTATE_PICTURE,
  Zs as ROUTE_CHANGE_BLEND_MODE,
  bs as ROUTE_CHANGE_FREQ,
  Qs as ROUTE_CHANGE_IMAGE,
  Js as ROUTE_CHANGE_OPACITY,
  Bs as ROUTE_CHANGE_SPEED,
  js as ROUTE_DIR_FIX_OFF,
  ws as ROUTE_DIR_FIX_ON,
  ps as ROUTE_END,
  Cs as ROUTE_JUMP,
  gs as ROUTE_MOVE_AWAY,
  Ns as ROUTE_MOVE_BACKWARD,
  Es as ROUTE_MOVE_DOWN,
  Ss as ROUTE_MOVE_FORWARD,
  ds as ROUTE_MOVE_LEFT,
  Ts as ROUTE_MOVE_LOWER_L,
  ls as ROUTE_MOVE_LOWER_R,
  us as ROUTE_MOVE_RANDOM,
  As as ROUTE_MOVE_RIGHT,
  Is as ROUTE_MOVE_TOWARD,
  _s as ROUTE_MOVE_UP,
  ys as ROUTE_MOVE_UPPER_L,
  Rs as ROUTE_MOVE_UPPER_R,
  ec as ROUTE_PLAY_SE,
  tc as ROUTE_SCRIPT,
  Ys as ROUTE_STEP_ANIME_OFF,
  qs as ROUTE_STEP_ANIME_ON,
  ks as ROUTE_SWITCH_OFF,
  xs as ROUTE_SWITCH_ON,
  Xs as ROUTE_THROUGH_OFF,
  Ks as ROUTE_THROUGH_ON,
  zs as ROUTE_TRANSPARENT_OFF,
  $s as ROUTE_TRANSPARENT_ON,
  hs as ROUTE_TURN_180D,
  vs as ROUTE_TURN_90D_L,
  Ds as ROUTE_TURN_90D_R,
  Fs as ROUTE_TURN_90D_R_L,
  Gs as ROUTE_TURN_AWAY,
  Os as ROUTE_TURN_DOWN,
  Ls as ROUTE_TURN_LEFT,
  Hs as ROUTE_TURN_RANDOM,
  Ms as ROUTE_TURN_RIGHT,
  Us as ROUTE_TURN_TOWARD,
  Ps as ROUTE_TURN_UP,
  fs as ROUTE_WAIT,
  Ws as ROUTE_WALK_ANIME_OFF,
  Vs as ROUTE_WALK_ANIME_ON,
  ur as SAVE_BGM,
  ei as SCHEMA_DAMAGE,
  Xt as SCHEMA_DATA_ACTOR,
  $t as SCHEMA_DATA_ARMMOR,
  zt as SCHEMA_DATA_CLASS,
  en as SCHEMA_DATA_ENEMY,
  nn as SCHEMA_DATA_ITEM,
  wn as SCHEMA_DATA_MAP_INFO,
  tn as SCHEMA_DATA_SKILL,
  Qt as SCHEMA_DATA_STATE,
  Jt as SCHEMA_DATA_WEAPON,
  Ac as SCHEMA_SYSTEM_ADVANCED,
  Ta as SCHEMA_TRAIT,
  rs as SCRIPT_EVAL,
  ss as SCRIPT_EVAL_BODY,
  zi as SCROLL_MAP,
  Ti as SELECT_ITEM,
  $i as SET_EVENT_LOCATION,
  Qi as SET_MOVEMENT_ROUTE,
  Xi as SET_VEHICLE_LOCATION,
  lr as SET_WEATHER_EFFECT,
  mr as SHAKE_SCREEN,
  hr as SHOP_PROCESSING,
  Fr as SHOP_PROCESSING_BODY,
  er as SHOW_ANIMATION,
  tr as SHOW_BALLOON_ICON,
  Jr as SHOW_BATTLE_ANIMATION,
  di as SHOW_CHOICES,
  Ai as SHOW_CHOICES_ITEM,
  pi as SHOW_MESSAGE,
  Ei as SHOW_MESSAGE_BODY,
  Er as SHOW_PICTURE,
  li as SHOW_SCROLLING_TEXT,
  yi as SHOW_SCROLLING_TEXT_BODY,
  Ii as SKIP,
  va as SPECIAL_EFFECT_ESCAPE,
  ye as SPECIAL_PARAM_EXR,
  le as SPECIAL_PARAM_FDR,
  me as SPECIAL_PARAM_GRD,
  de as SPECIAL_PARAM_MCR,
  Te as SPECIAL_PARAM_MDR,
  _e as SPECIAL_PARAM_PDR,
  Ee as SPECIAL_PARAM_PHA,
  pe as SPECIAL_PARAM_REC,
  Ae as SPECIAL_PARAM_TCR,
  ce as SPECIAL_PARAM_TGR,
  un as SRC_ARMOR_TYPES,
  Ya as SRC_COLOR,
  Ua as SRC_DATA_ACTOR,
  Va as SRC_DATA_ARMOR,
  Wa as SRC_DATA_CLASS,
  yn as SRC_DATA_COMMON_EVNET,
  ka as SRC_DATA_ENEMY,
  Ba as SRC_DATA_ITEMS,
  xa as SRC_DATA_MAP,
  Le as SRC_DATA_SKILL,
  g as SRC_DATA_STATE,
  qa as SRC_DATA_TROOP,
  Ga as SRC_DATA_VARIABLE,
  ba as SRC_DATA_WEAPON,
  In as SRC_ELEMENTS,
  wa as SRC_EQUIP_TYPES,
  Se as SRC_PARAMS_EXTRA,
  I as SRC_PARAMS_REGULAR,
  Ne as SRC_PARAMS_SPECIAL,
  Ka as SRC_SKILL_TYPES,
  ja as SRC_SWITCHES,
  Ce as SRC_TRAIT_COLLAPS,
  fe as SRC_TRAIT_PARTY_ABILITY,
  Oe as SRC_TRAIT_SPECIAL_FLAG,
  Rn as SRC_WEAPON_TYPES,
  fr as STOP_SE,
  _r as TINT_PICTURE,
  sr as TINT_SCREEN,
  Je as TRAIT_ACTION_PLUS,
  ke as TRAIT_ATTACK_ELEMENT,
  We as TRAIT_ATTACK_SKILL,
  be as TRAIT_ATTACK_SPEED,
  Be as TRAIT_ATTACK_STATE,
  Ve as TRAIT_ATTACK_TIMES,
  et as TRAIT_COLLAPSE_TYPE,
  he as TRAIT_DEBUFF_RATE,
  ve as TRAIT_ELEMENT_RATE,
  Xe as TRAIT_EQUIP_ARMOR_TYPE,
  $e as TRAIT_EQUIP_LOCK,
  ze as TRAIT_EQUIP_SEAL,
  Ke as TRAIT_EQUIP_WEAPON_TYPE,
  Ue as TRAIT_PARAM,
  tt as TRAIT_PARTY_ABILITY,
  we as TRAIT_SKILL_ADD,
  je as TRAIT_SKILL_SEAL,
  qe as TRAIT_SKILL_TYPE_ADD,
  Ye as TRAIT_SKILL_TYPE_SEAL,
  Qe as TRAIT_SLOT_TYPE,
  xe as TRAIT_SPARAM,
  Ze as TRAIT_SPECIAL_FLAG,
  Fe as TRAIT_STATE_RATE,
  He as TRAIT_STATE_RESIST,
  Ge as TRAIT_XPARAM,
  Ki as TRANSFER_PLAYER,
  _a as TYPENAME_TRAIT,
  St as TraitDescriptor,
  pr as WAIT,
  sa as buildCollapsSource,
  pa as buildExtraParamSource,
  ca as buildPartyAbilitySource,
  ma as buildRegularParamSource,
  da as buildSpecialFlagSource,
  Ea as buildSpecialParamSource,
  Cc as createActorControlChars,
  D as createControlCharFormat,
  nc as createEventCommand,
  Me as createNoteEntity,
  fc as createSystemVariableControlChars,
  Ln as defineEffectAddBuff,
  Dn as defineEffectAddDebuff,
  fn as defineEffectAddState,
  hn as defineEffectCommonEvent,
  Cn as defineEffectGainTp,
  za as defineEffectGrow,
  Pn as defineEffectLearnSkill,
  Sn as defineEffectRecoverHp,
  Nn as defineEffectRecoverMp,
  Mn as defineEffectRemoveBuff,
  vn as defineEffectRemoveDebuff,
  On as defineEffectRemoveState,
  ia as extraParamName,
  lt as foldCollapsOptions,
  ut as foldExtraParam,
  yt as foldPartyAbilityOptions,
  Rt as foldRegularParam,
  gt as foldSpecialFlag,
  It as foldSpecialParams,
  Xa as formatItemEffectText,
  Sc as fromStringArray,
  na as getArmorTypes,
  Nc as getControlChars,
  Jo as getElementTypes,
  Zo as getEquipTypes,
  Ic as getNoteValue,
  oa as getParamNames,
  ea as getSkillTypes,
  Qo as getVariableNames,
  ta as getWeaponTypes,
  Mc as isCommandAudio,
  Pc as isCommandCommonEvent,
  hc as isCommandInputNumber,
  vc as isCommandShowChoiceItem,
  Dc as isCommandShowChoices,
  Fc as isCommandShowMessage,
  Lc as isCommandTextBody,
  oi as isDataActor,
  ai as isDataArmor,
  ci as isDataClass,
  ri as isDataEnemy,
  ti as isDataItem,
  Ec as isDataMapInfo,
  ni as isDataSkill,
  si as isDataState,
  ii as isDataWeapon,
  Ha as isValid,
  Fa as joinSourceKey,
  la as makeActorData,
  Ra as makeArmorData,
  r as makeAudioFileParams,
  ua as makeClassData,
  sc as makeCommonEventData,
  P as makeDamage,
  Zt as makeDropItem,
  Na as makeEnemyAction,
  Ca as makeEnemyData,
  Yn as makeEventPageCondition,
  fa as makeItemData,
  rc as makeMapData,
  oc as makeMapEvent,
  qn as makeMapEventIamge,
  ac as makeMapEventPage,
  ic as makeMapInfoData,
  C as makeRegex,
  Oa as makeSkillData,
  _c as makeSoundsArray,
  Ia as makeStateData,
  dc as makeSystemAdvanced,
  cc as makeTroopData,
  pc as makeTroopEventConditions,
  mc as makeTroopMember,
  Sa as makeWeaponData,
  $o as mergeDomainLabel,
  zo as mergeNestedPrimitiveRecords,
  V as mergeWithDefaults,
  ya as normalizeDataActor,
  Rc as readNote,
  Pe as readNoteEx,
  yc as readNoteObject,
  aa as regularParamName,
  uc as replaceNote,
  $a as resolveItemEffectLabels,
  Aa as resolveTraitLabels,
  ha as sanitizeKey,
  gc as setNoteValue,
  ra as specialParamName,
  O as testUnknonwKey,
  R as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
