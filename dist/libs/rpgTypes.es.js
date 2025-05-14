import L from "ajv";
const Ho = "bgm", ko = "se", Uo = "me", xo = "bgs", Go = "battlebacks1", Bo = "battlebacks2", bo = "characters", Vo = "enemies", qo = "faces", Wo = "parallaxes", Yo = "pictures", wo = "sv_actors", jo = "sv_enemies", Ko = "system", Xo = "tilesets", $o = "titles1", zo = "titles2", Qo = "System.json", Jo = "Actors.json", Zo = "Classes.json", ea = "Skills.json", ta = "Items.json", na = "Weapons.json", oa = "Armors.json", aa = "Enemies.json", ia = "Troops.json", ra = "States.json", sa = "Animations.json", ca = "Tilesets.json", ma = "CommonEvents.json", pa = "MapInfos.json", da = "data", Ea = "img", Aa = "audio", _a = "js", W = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const s = t[o];
    typeof s == "string" && (n[o] = s);
  }
  return n;
}, Ta = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: W(e.options, t.options ?? {})
}), la = (e, t) => {
  const n = {};
  for (const o in e) {
    const s = e[o], p = t[o] ?? {};
    n[o] = W(
      s,
      p
    );
  }
  return n;
}, _ = (e, t) => ({
  name: e,
  id: t
}), ya = (e) => e.variables.map(_), ua = (e) => e.elements.map(_), Ra = (e) => e.equipTypes.map(_), Ia = (e) => e.skillTypes.map(_), ga = (e) => e.weaponTypes.map(_), Sa = (e) => e.armorTypes.map(_), Na = (e) => e.terms.params.map(_), T = "rmmz", P = "trait", Y = "data", w = "system", Fe = 11, He = 12, ke = 13, Ue = 14, xe = 21, Ge = 22, Be = 23, be = 31, Ve = 32, qe = 33, We = 34, Ye = 35, we = 41, je = 42, Ke = 43, Xe = 44, $e = 51, ze = 52, Qe = 53, Je = 54, Ze = 55, et = 61, tt = 62, nt = 63, ot = 64, at = 0, it = 1, rt = 2, st = 3, ct = 0, mt = 1, pt = 2, dt = 3, Et = 4, At = 5, _t = 0, Tt = 1, lt = 2, yt = 3, j = 0, K = 1, X = 2, $ = 3, z = 4, Q = 5, J = 6, Z = 7, ee = 8, te = 9, ne = 0, oe = 1, ae = 2, ie = 3, re = 4, se = 5, ce = 6, me = 7, pe = 0, de = 1, Ee = 2, Ae = 3, _e = 4, Te = 5, le = 6, ye = 7, ue = 8, Re = 9, Ca = (e, t) => {
  switch (e) {
    case ne:
      return t.maxHp;
    case oe:
      return t.maxMp;
    case ae:
      return t.atk;
    case ie:
      return t.def;
    case re:
      return t.matk;
    case se:
      return t.mdef;
    case ce:
      return t.agi;
    case me:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, fa = (e, t) => {
  switch (e) {
    case $:
      return t.criticalEvasionRate;
    case K:
      return t.evasionRate;
    case J:
      return t.counterAttackRate;
    case X:
      return t.criticalRate;
    case j:
      return t.hitRate;
    case Z:
      return t.hpRegenerationRate;
    case z:
      return t.magicEvasionRate;
    case Q:
      return t.magicReflectionRate;
    case ee:
      return t.mpRegenerationRate;
    case te:
      return t.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, Oa = (e, t) => {
  switch (e) {
    case Re:
      return t.experienceRate;
    case pe:
      return t.targetRate;
    case ue:
      return t.floorDamageRate;
    case de:
      return t.guradEffectRate;
    case _e:
      return t.mpCostRate;
    case Te:
      return t.tpChargeRate;
    case le:
      return t.physicalDamageRate;
    case ye:
      return t.magicDamageRate;
    case Ae:
      return t.pharmacology;
    case Ee:
      return t.recoveryEffectRate;
  }
  return `?sparams[${e}]`;
}, ut = (e, t) => [
  {
    id: at,
    name: t.normal
  },
  {
    id: it,
    name: e.bossCollaps
  },
  {
    id: rt,
    name: e.instantCollaps
  },
  {
    id: st,
    name: e.noneCollaps
  }
], Rt = (e) => [
  {
    id: ct,
    name: e.encounterHalf
  },
  {
    id: mt,
    name: e.encounterNone
  },
  {
    id: pt,
    name: e.cancelSurprise
  },
  {
    id: dt,
    name: e.raisePreemptive
  },
  {
    id: Et,
    name: e.goldDouble
  },
  {
    id: At,
    name: e.dropItemDouble
  }
], It = (e) => [
  { id: ne, name: e.maxHp },
  { id: oe, name: e.maxMp },
  { id: ae, name: e.atk },
  { id: ie, name: e.def },
  { id: re, name: e.matk },
  { id: se, name: e.mdef },
  { id: ce, name: e.agi },
  { id: me, name: e.luk }
], gt = (e) => [
  {
    id: j,
    name: e.hitRate
  },
  {
    id: K,
    name: e.evasionRate
  },
  {
    id: X,
    name: e.criticalRate
  },
  {
    id: $,
    name: e.criticalEvasionRate
  },
  {
    id: z,
    name: e.magicEvasionRate
  },
  {
    id: Q,
    name: e.magicReflectionRate
  },
  {
    id: J,
    name: e.counterAttackRate
  },
  {
    id: Z,
    name: e.hpRegenerationRate
  },
  {
    id: ee,
    name: e.mpRegenerationRate
  },
  {
    id: te,
    name: e.tpRegenerationRate
  }
], St = (e) => [
  {
    id: pe,
    name: e.targetRate
  },
  {
    id: de,
    name: e.guradEffectRate
  },
  {
    id: Ee,
    name: e.recoveryEffectRate
  },
  {
    id: Ae,
    name: e.pharmacology
  },
  {
    id: _e,
    name: e.mpCostRate
  },
  {
    id: Te,
    name: e.tpChargeRate
  },
  {
    id: le,
    name: e.physicalDamageRate
  },
  {
    id: ye,
    name: e.magicDamageRate
  },
  {
    id: ue,
    name: e.floorDamageRate
  },
  {
    id: Re,
    name: e.experienceRate
  }
], Nt = (e) => [
  {
    id: _t,
    name: e.autoBattle
  },
  {
    id: Tt,
    name: e.guard
  },
  {
    id: lt,
    name: e.substitute
  },
  {
    id: yt,
    name: e.preventEscape
  }
], u = (e, t, n) => ({
  items: n(t.options),
  label: t.domainName,
  source: {
    author: T,
    module: P,
    kind: e
  }
}), Ma = (e, t) => u(
  Oe,
  e,
  (n) => ut(n, t)
), La = (e) => u(Me, e, Rt), Pa = (e) => u(g, e, It), Da = (e) => u(Ce, e, gt), ha = (e) => u(fe, e, St), va = (e) => u(Le, e, Nt), c = "{name}", y = "{name} * {value}%", F = "{name} + {value}%", H = "{value}", a = {
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
      format: F,
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
      format: F
    },
    attackSpeed: {
      domainName: "攻撃速度補正",
      format: H
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: H
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
}, k = "{value}", U = "{name}";
class Ct {
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
      k,
      t.value.toString()
    );
    return this.dataSource ? o.replaceAll(
      U,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue() {
    return this.format.includes(k);
  }
  requiresName() {
    return this.format.includes(U);
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
const Fa = (e) => [
  ft(e.elementRate),
  Ot(e.debuffRate),
  Mt(e.stateRate),
  Lt(e.stateResist),
  Pt(e.regularParam),
  Dt(e.extraParam),
  ht(e.specialParam),
  vt(e.attackElement),
  Ft(e.attackState),
  Ht(e.attackSpeed),
  kt(e.attackTimes),
  Ut(e.attackSkill),
  Xt(e.skillTypeAdd),
  $t(e.skillTypeSeal),
  wt(e.skillAdd),
  jt(e.skillSeal),
  Vt(e.equipWeaponType),
  qt(e.equipArmorType),
  Wt(e.equipLock),
  Yt(e.equipSeal),
  Kt(e.slotType),
  xt(e.actionPlus),
  Gt(e.specialFlag),
  Bt(e.collaps),
  bt(e.partyAbility)
], x = (e, t) => typeof t == "string" ? t : e, r = (e, t, n, o) => {
  const s = x(t.domainName, n.domainName), p = x(t.format, n.format);
  return new Ct(e, s, p, o);
}, Ie = () => ({
  module: w,
  author: T,
  kind: Sn
}), ge = (e) => ({
  module: Y,
  author: T,
  kind: e
}), E = (e) => ({
  author: T,
  module: P,
  kind: e
}), Se = (e) => ({
  author: T,
  module: w,
  kind: e
}), ft = (e) => r(
  Fe,
  a.options.elementRate,
  e,
  Ie()
), Ot = (e) => r(
  He,
  a.options.debuffRate,
  e,
  E(g)
), Mt = (e) => r(
  ke,
  a.options.stateRate,
  e,
  E(g)
), Lt = (e) => r(
  Ue,
  a.options.stateResist,
  e,
  ge(S)
), Pt = (e) => r(
  xe,
  a.options.regularParam,
  e,
  E(g)
), Dt = (e) => r(
  Ge,
  a.options.extraParam,
  e,
  E(Ce)
), ht = (e) => r(
  Be,
  a.options.specialParam,
  e,
  E(fe)
), vt = (e) => r(
  be,
  a.options.attackElement,
  e,
  Ie()
), Ft = (e) => r(
  Ve,
  a.options.attackState,
  e,
  E(S)
), Ht = (e) => r(qe, a.options.attackSpeed, e), kt = (e) => r(We, a.options.attackTimes, e), Ut = (e) => r(
  Ye,
  a.options.attackSkill,
  e,
  ge(Pe)
), xt = (e) => r(et, a.options.actionPlus, e), Gt = (e) => r(
  tt,
  a.options.specialFlag,
  e,
  E(Le)
), Bt = (e) => r(
  nt,
  a.options.collaps,
  e,
  E(Oe)
), bt = (e) => r(
  ot,
  a.options.partyAbility,
  e,
  E(Me)
), Vt = (e) => r(
  $e,
  a.options.equipWeaponType,
  e,
  Se(In)
), qt = (e) => r(
  ze,
  a.options.equipArmorType,
  e,
  Se(gn)
), Wt = (e) => r(Qe, a.options.equipLock, e), Yt = (e) => r(Je, a.options.equipSeal, e), wt = (e) => r(Ke, a.options.skillAdd, e), jt = (e) => r(Xe, a.options.skillSeal, e), Kt = (e) => r(Ze, a.options.slotType, e), Xt = (e) => r(
  we,
  a.options.skillTypeAdd,
  e
), $t = (e) => r(
  je,
  a.options.skillTypeSeal,
  e
), Ha = "Trait", ka = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, Ua = (e = {}) => ({
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
}), zt = {
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
}, xa = (e) => ({
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
}), Ga = (e = {}) => ({
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
}), Qt = {
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
}, Ba = (e = {}) => ({
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
}), Jt = {
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
}, ba = (e = {}) => ({
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
}), Zt = {
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
}, Va = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, qa = (e = {}) => ({
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
  damage: D(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), en = {
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
}, tn = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), Wa = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Ya = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => tn())) ?? [],
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
}, nn = {
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
}, wa = (e = {}) => ({
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
  damage: D(e.damage ?? {}),
  effects: [],
  price: 0
}), ja = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: D(e.damage ?? {}),
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
}), on = {
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
}, an = {
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
}, Ka = 0, Xa = 1, $a = 2, rn = "{name} + {value1}", G = "{name} {value1}%", O = "{value1}% + {value2}", B = "{name} {value1}ターン", I = "{name}", m = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: B
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: B
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: O
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: rn
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: I
    },
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: O
    },
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: O
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
      format: G
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: I
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: G
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: I
    }
  }
}, sn = 11, cn = 12, mn = 13, pn = 21, dn = 22, En = 31, An = 32, _n = 33, Tn = 34, za = 41, ln = 42, yn = 43, un = 44, Qa = 0, Ne = /^[a-zA-Z0-9]+$/, Ja = (e) => Ne.test(e) ? e : void 0, M = (e) => typeof e == "string" ? Ne.test(e) : !1, Za = (e) => [e.author, e.module, e.kind].join("."), ei = (e) => M(e.author) && M(e.module) && M(e.kind), g = "params", Ce = "xparams", fe = "sparams", Oe = "collaps", Me = "partyAbiility", Le = "sflag", ti = "actor", ni = "variables", oi = "map", ai = "enemy", S = "state", Pe = "skill", ii = "items", ri = "weapon", si = "armor", ci = "class", Rn = "common_event", mi = "troop", pi = "colors", In = "weaponTypes", gn = "armorTypes", di = "equipTypes", Ei = "switches", Ai = "skillTypes", Sn = "elements", b = "{value1}", V = "{value2}", q = "{name}";
class Nn {
  constructor(t, n, o, s, p) {
    this.codeId = t, this.label = n, this.format = o, this.description = s, this.dataSource = p;
  }
  formatText(t, n) {
    const o = this.format.replaceAll(b, t.value1.toString()).replaceAll(V, t.value2.toString());
    return this.dataSource ? o.replaceAll(
      q,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue1() {
    return this.format.includes(b);
  }
  requiresValue2() {
    return this.format.includes(V);
  }
  requiresName() {
    return this.format.includes(q);
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
const _i = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), Ti = (e) => [
  Cn(e.options.recoverHp),
  fn(e.options.recoverMp),
  On(e.options.gainTp),
  Mn(e.options.addState),
  Ln(e.options.removeState),
  Pn(e.options.addBuff),
  vn(e.options.addDebuff),
  Dn(e.options.removeBuff),
  Fn(e.options.removeDebuff),
  hn(e.options.learnSkill),
  Hn(e.options.commonEvent)
], N = () => ({
  author: T,
  module: P,
  kind: g
}), C = (e) => ({
  author: T,
  module: Y,
  kind: e
}), d = (e, t, n, o) => {
  const s = n.domainName ?? t.domainName, p = n.format ?? t.format, ve = n.desc ?? t.desc;
  return new Nn(e, s, p, ve, o);
}, Cn = (e) => d(
  sn,
  m.options.recoverHp,
  e
), fn = (e) => d(
  cn,
  m.options.recoverMp,
  e
), On = (e) => d(mn, m.options.gainTp, e), li = (e) => d(ln, m.options.grow, e), Mn = (e) => d(
  pn,
  m.options.addState,
  e,
  C(S)
), Ln = (e) => d(
  dn,
  m.options.removeState,
  e,
  C(S)
), Pn = (e) => d(
  En,
  m.options.addBuff,
  e,
  N()
), Dn = (e) => d(
  _n,
  m.options.removeBuff,
  e,
  N()
), hn = (e) => d(
  yn,
  m.options.learnSkill,
  e,
  C(Pe)
), vn = (e) => d(
  An,
  m.options.addBuff,
  e,
  N()
), Fn = (e) => d(
  Tn,
  m.options.removeDebuff,
  e,
  N()
), Hn = (e) => d(
  un,
  m.options.commonEvent,
  e,
  C(Rn)
), yi = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, ui = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, Ri = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, kn = {
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
}, Un = {
  domainName: "ダメージ",
  options: {}
}, D = (e = {}) => ({
  type: e.type ?? 0,
  elementId: e.elementId ?? 0,
  formula: e.formula ?? "",
  variance: e.variance ?? 0,
  critical: e.critical ?? !1
}), Ii = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, A = new L(), xn = A.compile(an), Gn = A.compile(on), Bn = A.compile(zt), bn = A.compile(Qt), Vn = A.compile(en), qn = A.compile(nn), Wn = A.compile(Zt), Yn = A.compile(Jt), gi = (e) => xn(e), Si = (e) => Gn(e), Ni = (e) => Bn(e), Ci = (e) => bn(e), fi = (e) => Vn(e), Oi = (e) => qn(e), Mi = (e) => Wn(e), Li = (e) => Yn(e), Pi = 0, wn = 101, Di = 401, jn = 102, Kn = 402, Xn = 103, hi = 104, vi = 105, Fi = 405, Hi = 108, ki = 408, Ui = 109, xi = 111, Gi = 411, Bi = 112, bi = 113, Vi = 115, $n = 117, qi = 118, Wi = 119, Yi = 121, wi = 122, ji = 123, Ki = 124, Xi = 125, $i = 126, zi = 127, Qi = 128, Ji = 129, zn = 132, Qn = 133, Zi = 134, er = 135, tr = 136, nr = 137, or = 138, Jn = 139, ar = 140, ir = 201, rr = 202, sr = 203, cr = 204, mr = 205, pr = 206, dr = 211, Er = 212, Ar = 213, _r = 214, Tr = 216, lr = 217, yr = 221, ur = 222, Rr = 223, Ir = 224, gr = 225, Sr = 230, Nr = 231, Cr = 232, fr = 233, Or = 234, Mr = 235, Lr = 236, Zn = 241, Pr = 242, Dr = 243, hr = 244, eo = 245, vr = 246, to = 249, no = 250, Fr = 251, Hr = 261, kr = 282, Ur = 283, xr = 284, Gr = 285, Br = 301, br = 302, Vr = 605, qr = 303, Wr = 311, Yr = 312, wr = 313, jr = 314, Kr = 315, Xr = 320, $r = 321, zr = 322, Qr = 323, Jr = 324, Zr = 325, es = 331, ts = 332, ns = 333, os = 334, as = 335, is = 336, rs = 337, ss = 339, cs = 340, ms = 351, ps = 342, ds = 352, Es = 353, As = 354, _s = 355, Ts = 655, ls = 356, ys = 357, us = 0, Rs = 1, Is = 2, gs = 3, Ss = 4, Ns = 5, Cs = 6, fs = 7, Os = 8, Ms = 9, Ls = 10, Ps = 11, Ds = 12, hs = 13, vs = 14, Fs = 15, Hs = 16, ks = 17, Us = 18, xs = 19, Gs = 20, Bs = 21, bs = 22, Vs = 23, qs = 24, Ws = 25, Ys = 26, ws = 27, js = 28, Ks = 29, Xs = 30, $s = 31, zs = 32, Qs = 33, Js = 34, Zs = 35, ec = 36, tc = 37, nc = 38, oc = 39, ac = 40, ic = 41, rc = 42, sc = 43, cc = 44, mc = 45, pc = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), oo = () => ({
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}), ao = (e = {}) => ({
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
}), dc = () => ({
  conditions: ao(),
  list: [],
  directionFix: !1,
  image: oo(),
  moveFrequency: 5,
  moveRoute: {
    list: [],
    repeat: !1,
    skippable: !1,
    wait: !1
  }
}), io = {
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
}, ro = (e) => e.toString().padStart(3, "0"), Ec = (e = { id: 0 }) => ({
  name: e.name ?? ro(e.id),
  id: e.id,
  expanded: e.expanded ?? !1,
  order: e.order ?? 0,
  parentId: e.parentId ?? 0,
  scrollX: e.scrollX ?? 0,
  scrollY: e.scrollY ?? 0
}), Ac = (e = {}) => ({
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
}), _c = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), Tc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), lc = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), yc = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), so = new L(), co = so.compile(io), uc = (e) => co(e), Rc = (e = {}) => ({
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
}), Ic = {
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
}, i = (e = {}) => ({
  name: e.name ?? "",
  volume: e.volume ?? 100,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
}), gc = (e) => [
  i(e.cursor),
  i(e.ok),
  i(e.cancel),
  i(e.buzzer),
  i(e.equip),
  i(e.save),
  i(e.load),
  i(e.battleStart),
  i(e.escape),
  i(e.enemyAttack),
  i(e.enemyDamage),
  i(e.enemyCollapse),
  i(e.bossCollapes1),
  i(e.bossCollapes2),
  i(e.actorDamage),
  i(e.actorCollapse),
  i(e.playRecovery),
  i(e.playMiss),
  i(e.playEvasion),
  i(e.playMagicEvasion),
  i(e.playReflection),
  i(e.shop),
  i(e.useItem),
  i(e.useSkill)
], Sc = {
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
}, Nc = {
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
}, De = (e, t) => `<${e}:${t}>`, f = () => /<([^<>:]+):([^>]*)>/g, Cc = (e, t) => he(e.note, (n, o) => t(n, o, e)), fc = (e) => he(e, (t, n) => [t, n]), he = (e, t) => {
  const n = f();
  return Array.from(e.matchAll(n), (o) => t(o[1], o[2]));
}, Oc = (e, t) => e.replaceAll(
  f(),
  (n, o, s) => {
    const p = t(o, s);
    return De(o, p);
  }
), Mc = (e, t) => {
  const n = f(), o = Array.from(e.matchAll(n)).find(
    (s) => s[1] === t
  );
  return o ? o[2] : void 0;
}, Lc = (e, t, n) => {
  const o = f();
  return e.replaceAll(o, (s, p) => p === t ? De(p, n) : s);
}, h = (e, t) => `\\${e}[${t}]`, Pc = (e, t) => t.map((n, o) => ({
  text: n,
  controlChar: h(e, o)
})), Dc = (e) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g;
  return Array.from(e.matchAll(t)).map(
    (n) => ({
      char: n[1],
      id: parseInt(n[2], 10)
    })
  );
}, mo = "N", po = "V", hc = (e) => e.map((t) => ({
  text: t.name,
  controlChar: h(mo, t.id)
})), vc = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: h(po, n)
})).filter((t) => t.text !== ""), Eo = {
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
}, Fc = {
  rpg: {
    damage: Un,
    data: kn,
    traits: a,
    itemEffect: m
  },
  global: Eo
}, Hc = (e, t = 0) => ({
  code: $n,
  indent: t,
  parameters: Ao(e ?? {})
}), kc = (e) => ({
  eventId: e[0]
}), Ao = (e) => [e.eventId ?? 0], _o = {
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
}, To = (e) => [e.variableId ?? 0, e.digits ?? 0], Uc = (e) => ({
  variableId: e[0],
  digits: e[1]
}), xc = (e, t = 0) => ({
  code: Xn,
  indent: t,
  parameters: To(e ?? {})
}), lo = {
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
}, Gc = {
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
}, Bc = {
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
}, bc = (e, t = 0) => ({
  code: Kn,
  indent: t,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), Vc = (e) => ({
  index: e[0],
  name: e[1]
}), qc = (e) => [e.index ?? 0, e.name ?? ""], Wc = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Yc = (e) => [
  e.choices ?? [],
  e.cancelType ?? 0,
  e.defaultType ?? 0,
  e.positionType ?? 2,
  e.background ?? 0
], wc = (e, t = 0) => ({
  code: jn,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.choices) ?? [],
    (e == null ? void 0 : e.cancelType) ?? 0,
    (e == null ? void 0 : e.defaultType) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.background) ?? 0
  ]
}), yo = {
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
}, uo = {
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
}, Ro = (e, t = 0) => ({
  code: wn,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.facename) ?? "",
    (e == null ? void 0 : e.faceIndex) ?? 0,
    (e == null ? void 0 : e.background) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.speakerName) ?? ""
  ]
}), jc = {
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
  makeCommand: (e, t = 0) => Ro(e, t)
}, Io = {
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
}, go = {
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
}, l = (e, t, n = 0) => ({
  code: e,
  parameters: [i(t)],
  indent: n
}), Kc = (e, t = 0) => l(Zn, e, t), Xc = (e, t = 0) => l(eo, e, t), $c = (e, t = 0) => l(to, e, t), zc = (e, t = 0) => l(no, e, t), Qc = (e, t = 0) => l(zn, e, t), Jc = (e, t = 0) => l(Qn, e, t), Zc = (e, t = 0) => l(Jn, e, t), So = 0, No = 1, Co = 2, v = 3, fo = 4, em = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return t[6] >= 2 && t[6] <= 9 ? e.param(t[6] - 2) : 0;
}, tm = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.level;
    case 1:
      return e.currentExp();
    case 2:
      return e.hp;
    case 3:
      return e.mp;
    case 12:
      return e.tp;
  }
  return t[6] >= 4 && t[6] <= 11 ? e.param(t[6] - 4) : 0;
}, Oo = {
  HP: 0,
  MP: 1,
  MHP: 2,
  MMP: 3,
  ATK: 4,
  DEF: 5,
  MAT: 6,
  MDF: 7,
  AGI: 8,
  LUK: 9,
  TP: 10
}, nm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  So,
  t.value
], om = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  No,
  t.variableId
], am = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  Co,
  t.min,
  t.max
], im = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  fo,
  t.code
], rm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  v,
  t.type,
  t.itemId
], sm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  v,
  3,
  t.index,
  t.param
], cm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  v,
  4,
  t.index,
  Oo[t.param]
], R = new L(), Mo = R.compile(_o), Lo = R.compile(Io), Po = R.compile(uo), Do = R.compile(yo), ho = R.compile(lo), vo = R.compile(go), mm = (e) => vo(e), pm = (e) => Mo(e), dm = (e) => Po(e), Em = (e) => Do(e), Am = (e) => ho(e), _m = (e) => Lo(e);
export {
  cs as ABORT_BATTLE,
  T as AUTHOR_RMMZ,
  Br as BATTLE_PROCESSING,
  zr as CHANGE_ACTOR_IMAGES,
  Qi as CHANGE_ARMORS,
  Ur as CHANGE_BATTLE_BACKGROUND,
  zn as CHANGE_BATTLE_BGM,
  $r as CHANGE_CLASS,
  Jn as CHANGE_DEFEAT_ME,
  tr as CHANGE_ENCOUNTER,
  es as CHANGE_ENEMY_HP,
  ts as CHANGE_ENEMY_MP,
  ns as CHANGE_ENEMY_STATE,
  ps as CHANGE_ENEMY_TP,
  Kr as CHANGE_EXP,
  nr as CHANGE_FORMATION_ACCESS,
  Xi as CHANGE_GOLD,
  Wr as CHANGE_HP,
  $i as CHANGE_ITEMS,
  er as CHANGE_MENU_ACCESS,
  Yr as CHANGE_MP,
  Xr as CHANGE_NAME,
  Jr as CHANGE_NICKNAME,
  xr as CHANGE_PARALLAX,
  Ji as CHANGE_PARTY_MEMBER,
  Tr as CHANGE_PLAYER_FOLLOWERS,
  Zr as CHANGE_PROFILE,
  Zi as CHANGE_SAVE_ACCESS,
  kr as CHANGE_TILESET,
  wr as CHANGE_TP,
  dr as CHANGE_TRANSPARENCY,
  ar as CHANGE_VEHICLE_BGM,
  Qr as CHANGE_VEHICLE_IMAGE,
  Qn as CHANGE_VICTORY_ME,
  zi as CHANGE_WEAPONS,
  or as CHANGE_WINDOW_COLOR,
  it as COLLAPS_BOSS,
  rt as COLLAPS_INSTANT,
  st as COLLAPS_NONE,
  at as COLLAPS_NORMAL,
  Hi as COMMENT,
  ki as COMMENT_BODY,
  $n as COMMON_EVENT,
  xi as CONDITIONAL_BRANCH,
  Gi as CONDITIONAL_BRANCH_ELSE,
  ji as CONTROL_SELF_SWITCH,
  Yi as CONTROL_SWITCHES,
  Ki as CONTROL_TIMER,
  wi as CONTROL_VARIABLES,
  jc as CommandShowMessage,
  Un as DEFAULT_DAMAGE_LABELS,
  Eo as DEFAULT_GLOBAL_LABELS,
  yi as DEFAULT_ITEM_LABELS,
  ui as DEFAULT_SKILL_LABELS,
  Sc as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Ri as DEFAULT_USABLE_ITEM_LABELS,
  En as EFFECT_ADD_BUFF,
  An as EFFECT_ADD_DEBUFF,
  pn as EFFECT_ADD_STATE,
  un as EFFECT_COMMON_EVENT,
  mn as EFFECT_GAIN_TP,
  ln as EFFECT_GROW,
  yn as EFFECT_LEARN_SKILL,
  sn as EFFECT_RECOVER_HP,
  cn as EFFECT_RECOVER_MP,
  _n as EFFECT_REMOVE_BUFF,
  Tn as EFFECT_REMOVE_DEBUFF,
  dn as EFFECT_REMOVE_STATE,
  za as EFFECT_SPECIAL,
  as as ENEMY_APPEAR,
  os as ENEMY_RECOVER_ALL,
  is as ENEMY_TRANSFORM,
  _r as ERASE_EVENT,
  Mr as ERASE_PICTURE,
  Vi as EXIT_EVENT_PROCESSING,
  $ as EXTRA_PARAM_CEV,
  J as EXTRA_PARAM_CNT,
  X as EXTRA_PARAM_CRI,
  K as EXTRA_PARAM_EVA,
  j as EXTRA_PARAM_HIT,
  Z as EXTRA_PARAM_HRG,
  z as EXTRA_PARAM_MEV,
  Q as EXTRA_PARAM_MRF,
  ee as EXTRA_PARAM_MRG,
  te as EXTRA_PARAM_TRG,
  ur as FADEIN_SCREEN,
  Pr as FADEOUT_BGM,
  vr as FADEOUT_BGS,
  yr as FADEOUT_SCREEN,
  Jo as FILENAME_ACTORS,
  sa as FILENAME_ANIMATIONS,
  oa as FILENAME_ARMORS,
  Zo as FILENAME_CLASSES,
  ma as FILENAME_COMMON_EVENTS,
  aa as FILENAME_ENEMIES,
  ta as FILENAME_ITEMS,
  pa as FILENAME_MAP_INFOS,
  ea as FILENAME_SKILLS,
  ra as FILENAME_STATES,
  Qo as FILENAME_SYSTEM,
  ca as FILENAME_TILESET,
  ia as FILENAME_TROOPS,
  na as FILENAME_WEAPONS,
  _t as FLAG_ID_AUTO_BATTLE,
  Tt as FLAG_ID_GUARD,
  yt as FLAG_ID_PRESERVE_TP,
  lt as FLAG_ID_SUBSTITUTE,
  Ir as FLASH_SCREEN,
  Aa as FOLDER_AUDIO,
  Ho as FOLDER_AUDIO_BGM,
  xo as FOLDER_AUDIO_BGS,
  Uo as FOLDER_AUDIO_ME,
  ko as FOLDER_AUDIO_SE,
  da as FOLDER_DATA,
  Ea as FOLDER_IMG,
  Go as FOLDER_IMG_BATTLEBACK1,
  Bo as FOLDER_IMG_BATTLEBACK2,
  bo as FOLDER_IMG_CHACTERS,
  Vo as FOLDER_IMG_ENEMIES,
  qo as FOLDER_IMG_FACES,
  Wo as FOLDER_IMG_PARALLACES,
  Yo as FOLDER_IMG_PICTURES,
  wo as FOLDER_IMG_SV_ACTORS,
  jo as FOLDER_IMG_SV_ENEMIES,
  Ko as FOLDER_IMG_SYSTEM,
  Xo as FOLDER_IMG_TILESETS,
  $o as FOLDER_IMG_TITLES1,
  zo as FOLDER_IMG_TITLES2,
  _a as FOLDER_JS,
  ss as FORCE_ACTION,
  Es as GAME_OVER,
  lr as GATHER_FOLLOWERS,
  Gr as GET_LOCATION_INFO,
  pr as GET_ONOFF_VEHICLE,
  Ka as HITTYPE_CERTAIN,
  $a as HITTYPE_MAGICAL,
  Xa as HITTYPE_PHYSICAL,
  Xn as INPUT_NUMBER,
  qi as LABEL,
  Va as LABELS_DATA_WEAPON,
  Wi as LABEL_JUMP,
  Fc as LABEL_REGISTRY_JP,
  kn as LABEL_SET_DATA,
  m as LABEL_SET_ITEM_EFFECT,
  a as LABEL_SET_TRAIT,
  Bi as LOOP,
  bi as LOOP_BREAK,
  Y as MODULE_DATA,
  w as MODULE_SYSTEM,
  P as MODULE_TRAIT,
  Cr as MOVE_PICTURE,
  Nc as MockSystemLabelDataTypes,
  qr as NAME_INPUT_PROCESSING,
  Pi as NO_OPERATION,
  ms as OPEN_MENU_SCREEN,
  ds as OPEN_SAVE_SCREEN,
  So as OPERAND_CONSTANT,
  v as OPERAND_GAMEDATA,
  Co as OPERAND_RANDOM,
  fo as OPERAND_SCRIPT,
  No as OPERAND_VARIABLE,
  pt as PARTY_ABILITY_CANCEL_SURPRISE,
  At as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  ct as PARTY_ABILITY_ENCOUNTER_HALF,
  mt as PARTY_ABILITY_ENCOUNTER_NONE,
  Et as PARTY_ABILITY_GOLD_DOUBLE,
  dt as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Zn as PLAY_BGM,
  eo as PLAY_BGS,
  to as PLAY_ME,
  Hr as PLAY_MOVIE,
  no as PLAY_SE,
  ls as PLUGIN_COMMAND_MV,
  ys as PLUGIN_COMMAND_MZ,
  jr as RECOVER_ALL,
  ce as REGULAR_PARAM_AGI,
  ae as REGULAR_PARAM_ATK,
  ie as REGULAR_PARAM_DEF,
  me as REGULAR_PARAM_LUK,
  re as REGULAR_PARAM_MATK,
  ne as REGULAR_PARAM_MAX_HP,
  oe as REGULAR_PARAM_MAX_MP,
  se as REGULAR_PARAM_MDEF,
  hr as RESUME_BGM,
  As as RETURN_TO_TITLE_SCREEN,
  fr as ROTATE_PICTURE,
  sc as ROUTE_CHANGE_BLEND_MODE,
  Xs as ROUTE_CHANGE_FREQ,
  ic as ROUTE_CHANGE_IMAGE,
  rc as ROUTE_CHANGE_OPACITY,
  Ks as ROUTE_CHANGE_SPEED,
  ec as ROUTE_DIR_FIX_OFF,
  Zs as ROUTE_DIR_FIX_ON,
  us as ROUTE_END,
  vs as ROUTE_JUMP,
  Ps as ROUTE_MOVE_AWAY,
  hs as ROUTE_MOVE_BACKWARD,
  Rs as ROUTE_MOVE_DOWN,
  Ds as ROUTE_MOVE_FORWARD,
  Is as ROUTE_MOVE_LEFT,
  Ns as ROUTE_MOVE_LOWER_L,
  Cs as ROUTE_MOVE_LOWER_R,
  Ms as ROUTE_MOVE_RANDOM,
  gs as ROUTE_MOVE_RIGHT,
  Ls as ROUTE_MOVE_TOWARD,
  Ss as ROUTE_MOVE_UP,
  fs as ROUTE_MOVE_UPPER_L,
  Os as ROUTE_MOVE_UPPER_R,
  cc as ROUTE_PLAY_SE,
  mc as ROUTE_SCRIPT,
  Js as ROUTE_STEP_ANIME_OFF,
  Qs as ROUTE_STEP_ANIME_ON,
  js as ROUTE_SWITCH_OFF,
  ws as ROUTE_SWITCH_ON,
  nc as ROUTE_THROUGH_OFF,
  tc as ROUTE_THROUGH_ON,
  ac as ROUTE_TRANSPARENT_OFF,
  oc as ROUTE_TRANSPARENT_ON,
  bs as ROUTE_TURN_180D,
  Bs as ROUTE_TURN_90D_L,
  Gs as ROUTE_TURN_90D_R,
  Vs as ROUTE_TURN_90D_R_L,
  Ys as ROUTE_TURN_AWAY,
  Hs as ROUTE_TURN_DOWN,
  ks as ROUTE_TURN_LEFT,
  qs as ROUTE_TURN_RANDOM,
  Us as ROUTE_TURN_RIGHT,
  Ws as ROUTE_TURN_TOWARD,
  xs as ROUTE_TURN_UP,
  Fs as ROUTE_WAIT,
  zs as ROUTE_WALK_ANIME_OFF,
  $s as ROUTE_WALK_ANIME_ON,
  Dr as SAVE_BGM,
  go as SCHEMA_COMMAND_ANY_AUDIO,
  _o as SCHEMA_COMMAND_CALL_COMMON_EVENT,
  lo as SCHEMA_COMMAND_INPUT_NUMBER,
  Bc as SCHEMA_COMMAND_SCROLL_TEXT_BODY,
  Gc as SCHEMA_COMMAND_SCROLL_TEXT_HEAD,
  uo as SCHEMA_COMMAND_SHOW_CHOICES,
  yo as SCHEMA_COMMAND_SHOW_CHOICE_ITEM,
  Io as SCHEMA_COMMAND_SHOW_MESSAGE,
  Ii as SCHEMA_DAMAGE,
  zt as SCHEMA_DATA_ACTOR,
  Qt as SCHEMA_DATA_ARMMOR,
  Jt as SCHEMA_DATA_CLASS,
  nn as SCHEMA_DATA_ENEMY,
  an as SCHEMA_DATA_ITEM,
  io as SCHEMA_DATA_MAP_INFO,
  on as SCHEMA_DATA_SKILL,
  Zt as SCHEMA_DATA_STATE,
  en as SCHEMA_DATA_WEAPON,
  Ic as SCHEMA_SYSTEM_ADVANCED,
  ka as SCHEMA_TRAIT,
  _s as SCRIPT_EVAL,
  Ts as SCRIPT_EVAL_BODY,
  cr as SCROLL_MAP,
  hi as SELECT_ITEM,
  sr as SET_EVENT_LOCATION,
  mr as SET_MOVEMENT_ROUTE,
  rr as SET_VEHICLE_LOCATION,
  Lr as SET_WEATHER_EFFECT,
  gr as SHAKE_SCREEN,
  br as SHOP_PROCESSING,
  Vr as SHOP_PROCESSING_BODY,
  Er as SHOW_ANIMATION,
  Ar as SHOW_BALLOON_ICON,
  rs as SHOW_BATTLE_ANIMATION,
  jn as SHOW_CHOICES,
  Kn as SHOW_CHOICES_ITEM,
  wn as SHOW_MESSAGE,
  Di as SHOW_MESSAGE_BODY,
  Nr as SHOW_PICTURE,
  vi as SHOW_SCROLLING_TEXT,
  Fi as SHOW_SCROLLING_TEXT_BODY,
  Ui as SKIP,
  Qa as SPECIAL_EFFECT_ESCAPE,
  Re as SPECIAL_PARAM_EXR,
  ue as SPECIAL_PARAM_FDR,
  de as SPECIAL_PARAM_GRD,
  _e as SPECIAL_PARAM_MCR,
  ye as SPECIAL_PARAM_MDR,
  le as SPECIAL_PARAM_PDR,
  Ae as SPECIAL_PARAM_PHA,
  Ee as SPECIAL_PARAM_REC,
  Te as SPECIAL_PARAM_TCR,
  pe as SPECIAL_PARAM_TGR,
  gn as SRC_ARMOR_TYPES,
  pi as SRC_COLOR,
  ti as SRC_DATA_ACTOR,
  si as SRC_DATA_ARMOR,
  ci as SRC_DATA_CLASS,
  Rn as SRC_DATA_COMMON_EVNET,
  ai as SRC_DATA_ENEMY,
  ii as SRC_DATA_ITEMS,
  oi as SRC_DATA_MAP,
  Pe as SRC_DATA_SKILL,
  S as SRC_DATA_STATE,
  mi as SRC_DATA_TROOP,
  ni as SRC_DATA_VARIABLE,
  ri as SRC_DATA_WEAPON,
  Sn as SRC_ELEMENTS,
  di as SRC_EQUIP_TYPES,
  Ce as SRC_PARAMS_EXTRA,
  g as SRC_PARAMS_REGULAR,
  fe as SRC_PARAMS_SPECIAL,
  Ai as SRC_SKILL_TYPES,
  Ei as SRC_SWITCHES,
  Oe as SRC_TRAIT_COLLAPS,
  Me as SRC_TRAIT_PARTY_ABILITY,
  Le as SRC_TRAIT_SPECIAL_FLAG,
  In as SRC_WEAPON_TYPES,
  Fr as STOP_SE,
  Or as TINT_PICTURE,
  Rr as TINT_SCREEN,
  et as TRAIT_ACTION_PLUS,
  be as TRAIT_ATTACK_ELEMENT,
  Ye as TRAIT_ATTACK_SKILL,
  qe as TRAIT_ATTACK_SPEED,
  Ve as TRAIT_ATTACK_STATE,
  We as TRAIT_ATTACK_TIMES,
  nt as TRAIT_COLLAPSE_TYPE,
  He as TRAIT_DEBUFF_RATE,
  Fe as TRAIT_ELEMENT_RATE,
  ze as TRAIT_EQUIP_ARMOR_TYPE,
  Qe as TRAIT_EQUIP_LOCK,
  Je as TRAIT_EQUIP_SEAL,
  $e as TRAIT_EQUIP_WEAPON_TYPE,
  xe as TRAIT_PARAM,
  ot as TRAIT_PARTY_ABILITY,
  Ke as TRAIT_SKILL_ADD,
  Xe as TRAIT_SKILL_SEAL,
  we as TRAIT_SKILL_TYPE_ADD,
  je as TRAIT_SKILL_TYPE_SEAL,
  Ze as TRAIT_SLOT_TYPE,
  Be as TRAIT_SPARAM,
  tt as TRAIT_SPECIAL_FLAG,
  ke as TRAIT_STATE_RATE,
  Ue as TRAIT_STATE_RESIST,
  Ge as TRAIT_XPARAM,
  ir as TRANSFER_PLAYER,
  Ha as TYPENAME_TRAIT,
  Ct as TraitDescriptor,
  Sr as WAIT,
  Ma as buildCollapsSource,
  Da as buildExtraParamSource,
  La as buildPartyAbilitySource,
  Pa as buildRegularParamSource,
  va as buildSpecialFlagSource,
  ha as buildSpecialParamSource,
  hc as createActorControlChars,
  h as createControlCharFormat,
  De as createNoteEntity,
  vc as createSystemVariableControlChars,
  Pn as defineEffectAddBuff,
  vn as defineEffectAddDebuff,
  Mn as defineEffectAddState,
  Hn as defineEffectCommonEvent,
  On as defineEffectGainTp,
  li as defineEffectGrow,
  hn as defineEffectLearnSkill,
  Cn as defineEffectRecoverHp,
  fn as defineEffectRecoverMp,
  Dn as defineEffectRemoveBuff,
  Fn as defineEffectRemoveDebuff,
  Ln as defineEffectRemoveState,
  fa as extraParamName,
  ut as foldCollapsOptions,
  gt as foldExtraParam,
  Rt as foldPartyAbilityOptions,
  It as foldRegularParam,
  Nt as foldSpecialFlag,
  St as foldSpecialParams,
  _i as formatItemEffectText,
  kc as fromArrayCommonEvent,
  Uc as fromArrayInputNumber,
  Wc as fromArraySetupChoice,
  Vc as fromArraySetupChoiceItem,
  Pc as fromStringArray,
  tm as getActorValue,
  Sa as getArmorTypes,
  Dc as getControlChars,
  ua as getElementTypes,
  em as getEnemyValue,
  Ra as getEquipTypes,
  Mc as getNoteValue,
  Na as getParamNames,
  Ia as getSkillTypes,
  ya as getVariableNames,
  ga as getWeaponTypes,
  mm as isCommandAudio,
  pm as isCommandCommonEvent,
  Am as isCommandInputNumber,
  Em as isCommandShowChoiceItem,
  dm as isCommandShowChoices,
  _m as isCommandShowMessage,
  Ni as isDataActor,
  Ci as isDataArmor,
  Li as isDataClass,
  Oi as isDataEnemy,
  gi as isDataItem,
  uc as isDataMapInfo,
  Si as isDataSkill,
  Mi as isDataState,
  fi as isDataWeapon,
  ei as isValid,
  Za as joinSourceKey,
  Ua as makeActorData,
  Ga as makeArmorData,
  i as makeAudioFileParams,
  Ba as makeClassData,
  Hc as makeCommand2_CommonEvent,
  bc as makeCommand2_ShowChoiceItem,
  l as makeCommandAudioAny,
  Qc as makeCommandChangeBattleBGM,
  Zc as makeCommandChangeDefeatME,
  Jc as makeCommandChangeVictoryME,
  xc as makeCommandInputNumber,
  Kc as makeCommandPlayBGM,
  Xc as makeCommandPlayBGS,
  $c as makeCommandPlayME,
  zc as makeCommandPlaySE,
  wc as makeCommandSetupChoice,
  Ro as makeCommandShowMessage,
  _c as makeCommonEventData,
  D as makeDamage,
  tn as makeDropItem,
  Wa as makeEnemyAction,
  Ya as makeEnemyData,
  ao as makeEventPageCondition,
  wa as makeItemData,
  Ac as makeMapData,
  pc as makeMapEvent,
  oo as makeMapEventIamge,
  dc as makeMapEventPage,
  Ec as makeMapInfoData,
  f as makeRegex,
  ja as makeSkillData,
  gc as makeSoundsArray,
  ba as makeStateData,
  Rc as makeSystemAdvanced,
  Tc as makeTroopData,
  yc as makeTroopEventConditions,
  lc as makeTroopMember,
  qa as makeWeaponData,
  Ta as mergeDomainLabel,
  la as mergeNestedPrimitiveRecords,
  W as mergeWithDefaults,
  xa as normalizeDataActor,
  fc as readNote,
  he as readNoteEx,
  Cc as readNoteObject,
  Ca as regularParamName,
  Oc as replaceNote,
  Ti as resolveItemEffectLabels,
  Fa as resolveTraitLabels,
  Ja as sanitizeKey,
  Lc as setNoteValue,
  Oa as specialParamName,
  M as testUnknonwKey,
  Ao as toArrayCommonEvent,
  To as toArrayInputNumber,
  sm as toArrayOperandActorStatus,
  nm as toArrayOperandConstant,
  cm as toArrayOperandEnemyStatus,
  rm as toArrayOperandItemData,
  am as toArrayOperandRandom,
  im as toArrayOperandScript,
  om as toArrayOperandVariable,
  Yc as toArraySetupChoice,
  qc as toArraySetupChoiceItem,
  u as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
