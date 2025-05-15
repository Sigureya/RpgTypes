import M from "ajv";
const Uo = "bgm", Go = "se", xo = "me", Bo = "bgs", bo = "battlebacks1", Vo = "battlebacks2", Wo = "characters", qo = "enemies", Yo = "faces", wo = "parallaxes", jo = "pictures", Ko = "sv_actors", Xo = "sv_enemies", $o = "system", zo = "tilesets", Qo = "titles1", Jo = "titles2", Zo = "System.json", ea = "Actors.json", ta = "Classes.json", na = "Skills.json", oa = "Items.json", aa = "Weapons.json", ia = "Armors.json", ra = "Enemies.json", sa = "Troops.json", ca = "States.json", ma = "Animations.json", pa = "Tilesets.json", da = "CommonEvents.json", Ea = "MapInfos.json", Aa = "data", _a = "img", Ta = "audio", la = "js", W = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const s = t[o];
    typeof s == "string" && (n[o] = s);
  }
  return n;
}, ya = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: W(e.options, t.options ?? {})
}), ua = (e, t) => {
  const n = {};
  for (const o in e) {
    const s = e[o], p = t[o] ?? {};
    n[o] = W(
      s,
      p
    );
  }
  return n;
}, T = (e, t) => ({
  name: e,
  id: t
}), Ra = (e) => e.variables.map(T), Ia = (e) => e.elements.map(T), ga = (e) => e.equipTypes.map(T), Sa = (e) => e.skillTypes.map(T), Ca = (e) => e.weaponTypes.map(T), Na = (e) => e.armorTypes.map(T), fa = (e) => e.terms.params.map(T), l = "rmmz", P = "trait", q = "data", Y = "system", Fe = 11, He = 12, ke = 13, Ue = 14, Ge = 21, xe = 22, Be = 23, be = 31, Ve = 32, We = 33, qe = 34, Ye = 35, we = 41, je = 42, Ke = 43, Xe = 44, $e = 51, ze = 52, Qe = 53, Je = 54, Ze = 55, et = 61, tt = 62, nt = 63, ot = 64, at = 0, it = 1, rt = 2, st = 3, ct = 0, mt = 1, pt = 2, dt = 3, Et = 4, At = 5, _t = 0, Tt = 1, lt = 2, yt = 3, w = 0, j = 1, K = 2, X = 3, $ = 4, z = 5, Q = 6, J = 7, Z = 8, ee = 9, te = 0, ne = 1, oe = 2, ae = 3, ie = 4, re = 5, se = 6, ce = 7, me = 0, pe = 1, de = 2, Ee = 3, Ae = 4, _e = 5, Te = 6, le = 7, ye = 8, ue = 9, Oa = (e, t) => {
  switch (e) {
    case te:
      return t.maxHp;
    case ne:
      return t.maxMp;
    case oe:
      return t.atk;
    case ae:
      return t.def;
    case ie:
      return t.matk;
    case re:
      return t.mdef;
    case se:
      return t.agi;
    case ce:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, La = (e, t) => {
  switch (e) {
    case X:
      return t.criticalEvasionRate;
    case j:
      return t.evasionRate;
    case Q:
      return t.counterAttackRate;
    case K:
      return t.criticalRate;
    case w:
      return t.hitRate;
    case J:
      return t.hpRegenerationRate;
    case $:
      return t.magicEvasionRate;
    case z:
      return t.magicReflectionRate;
    case Z:
      return t.mpRegenerationRate;
    case ee:
      return t.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, Ma = (e, t) => {
  switch (e) {
    case ue:
      return t.experienceRate;
    case me:
      return t.targetRate;
    case ye:
      return t.floorDamageRate;
    case pe:
      return t.guradEffectRate;
    case Ae:
      return t.mpCostRate;
    case _e:
      return t.tpChargeRate;
    case Te:
      return t.physicalDamageRate;
    case le:
      return t.magicDamageRate;
    case Ee:
      return t.pharmacology;
    case de:
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
  { id: te, name: e.maxHp },
  { id: ne, name: e.maxMp },
  { id: oe, name: e.atk },
  { id: ae, name: e.def },
  { id: ie, name: e.matk },
  { id: re, name: e.mdef },
  { id: se, name: e.agi },
  { id: ce, name: e.luk }
], gt = (e) => [
  {
    id: w,
    name: e.hitRate
  },
  {
    id: j,
    name: e.evasionRate
  },
  {
    id: K,
    name: e.criticalRate
  },
  {
    id: X,
    name: e.criticalEvasionRate
  },
  {
    id: $,
    name: e.magicEvasionRate
  },
  {
    id: z,
    name: e.magicReflectionRate
  },
  {
    id: Q,
    name: e.counterAttackRate
  },
  {
    id: J,
    name: e.hpRegenerationRate
  },
  {
    id: Z,
    name: e.mpRegenerationRate
  },
  {
    id: ee,
    name: e.tpRegenerationRate
  }
], St = (e) => [
  {
    id: me,
    name: e.targetRate
  },
  {
    id: pe,
    name: e.guradEffectRate
  },
  {
    id: de,
    name: e.recoveryEffectRate
  },
  {
    id: Ee,
    name: e.pharmacology
  },
  {
    id: Ae,
    name: e.mpCostRate
  },
  {
    id: _e,
    name: e.tpChargeRate
  },
  {
    id: Te,
    name: e.physicalDamageRate
  },
  {
    id: le,
    name: e.magicDamageRate
  },
  {
    id: ye,
    name: e.floorDamageRate
  },
  {
    id: ue,
    name: e.experienceRate
  }
], Ct = (e) => [
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
], R = (e, t, n) => ({
  items: n(t.options),
  label: t.domainName,
  source: {
    author: l,
    module: P,
    kind: e
  }
}), Pa = (e, t) => R(
  fe,
  e,
  (n) => ut(n, t)
), Da = (e) => R(Oe, e, Rt), ha = (e) => R(g, e, It), va = (e) => R(Ce, e, gt), Fa = (e) => R(Ne, e, St), Ha = (e) => R(Le, e, Ct), c = "{name}", u = "{name} * {value}%", v = "{name} + {value}%", F = "{value}", i = {
  domainName: "特徴",
  options: {
    regularParam: {
      domainName: "基本能力値",
      format: u,
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
      format: u,
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
      format: u
    },
    debuffRate: {
      domainName: "弱体有効度",
      format: u
    },
    stateRate: {
      domainName: "ステート有効度",
      format: u
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
      format: F
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: F
    },
    actionPlus: {
      domainName: "行動追加",
      format: u
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
}, H = "{value}", k = "{name}";
class Nt {
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
      H,
      t.value.toString()
    );
    return this.dataSource ? o.replaceAll(
      k,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue() {
    return this.format.includes(H);
  }
  requiresName() {
    return this.format.includes(k);
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
const ka = (e) => [
  ft(e.elementRate),
  Ot(e.debuffRate),
  Lt(e.stateRate),
  Mt(e.stateResist),
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
  Wt(e.equipArmorType),
  qt(e.equipLock),
  Yt(e.equipSeal),
  Kt(e.slotType),
  Gt(e.actionPlus),
  xt(e.specialFlag),
  Bt(e.collaps),
  bt(e.partyAbility)
], U = (e, t) => typeof t == "string" ? t : e, r = (e, t, n, o) => {
  const s = U(t.domainName, n.domainName), p = U(t.format, n.format);
  return new Nt(e, s, p, o);
}, Re = () => ({
  module: Y,
  author: l,
  kind: Sn
}), Ie = (e) => ({
  module: q,
  author: l,
  kind: e
}), E = (e) => ({
  author: l,
  module: P,
  kind: e
}), ge = (e) => ({
  author: l,
  module: Y,
  kind: e
}), ft = (e) => r(
  Fe,
  i.options.elementRate,
  e,
  Re()
), Ot = (e) => r(
  He,
  i.options.debuffRate,
  e,
  E(g)
), Lt = (e) => r(
  ke,
  i.options.stateRate,
  e,
  E(g)
), Mt = (e) => r(
  Ue,
  i.options.stateResist,
  e,
  Ie(S)
), Pt = (e) => r(
  Ge,
  i.options.regularParam,
  e,
  E(g)
), Dt = (e) => r(
  xe,
  i.options.extraParam,
  e,
  E(Ce)
), ht = (e) => r(
  Be,
  i.options.specialParam,
  e,
  E(Ne)
), vt = (e) => r(
  be,
  i.options.attackElement,
  e,
  Re()
), Ft = (e) => r(
  Ve,
  i.options.attackState,
  e,
  E(S)
), Ht = (e) => r(We, i.options.attackSpeed, e), kt = (e) => r(qe, i.options.attackTimes, e), Ut = (e) => r(
  Ye,
  i.options.attackSkill,
  e,
  Ie(Me)
), Gt = (e) => r(et, i.options.actionPlus, e), xt = (e) => r(
  tt,
  i.options.specialFlag,
  e,
  E(Le)
), Bt = (e) => r(
  nt,
  i.options.collaps,
  e,
  E(fe)
), bt = (e) => r(
  ot,
  i.options.partyAbility,
  e,
  E(Oe)
), Vt = (e) => r(
  $e,
  i.options.equipWeaponType,
  e,
  ge(In)
), Wt = (e) => r(
  ze,
  i.options.equipArmorType,
  e,
  ge(gn)
), qt = (e) => r(Qe, i.options.equipLock, e), Yt = (e) => r(Je, i.options.equipSeal, e), wt = (e) => r(Ke, i.options.skillAdd, e), jt = (e) => r(Xe, i.options.skillSeal, e), Kt = (e) => r(Ze, i.options.slotType, e), Xt = (e) => r(
  we,
  i.options.skillTypeAdd,
  e
), $t = (e) => r(
  je,
  i.options.skillTypeSeal,
  e
), Ua = "Trait", Ga = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, xa = (e = {}) => ({
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
}, Ba = (e) => ({
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
}), ba = (e = {}) => ({
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
}, Va = (e = {}) => ({
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
}, Wa = (e = {}) => ({
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
}, qa = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Ya = (e = {}) => ({
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
}), wa = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), ja = (e = {}) => {
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
}, Ka = (e = {}) => ({
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
}), Xa = (e = {}) => ({
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
}, $a = 0, za = 1, Qa = 2, rn = "{name} + {value1}", G = "{name} {value1}%", O = "{value1}% + {value2}", x = "{name} {value1}ターン", I = "{name}", m = {
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
}, sn = 11, cn = 12, mn = 13, pn = 21, dn = 22, En = 31, An = 32, _n = 33, Tn = 34, Ja = 41, ln = 42, yn = 43, un = 44, Za = 0, Se = /^[a-zA-Z0-9]+$/, ei = (e) => Se.test(e) ? e : void 0, L = (e) => typeof e == "string" ? Se.test(e) : !1, ti = (e) => [e.author, e.module, e.kind].join("."), ni = (e) => L(e.author) && L(e.module) && L(e.kind), g = "params", Ce = "xparams", Ne = "sparams", fe = "collaps", Oe = "partyAbiility", Le = "sflag", oi = "actor", ai = "variables", ii = "map", ri = "enemy", S = "state", Me = "skill", si = "items", ci = "weapon", mi = "armor", pi = "class", Rn = "common_event", di = "troop", Ei = "colors", In = "weaponTypes", gn = "armorTypes", Ai = "equipTypes", _i = "switches", Ti = "skillTypes", Sn = "elements", B = "{value1}", b = "{value2}", V = "{name}";
class Cn {
  constructor(t, n, o, s, p) {
    this.codeId = t, this.label = n, this.format = o, this.description = s, this.dataSource = p;
  }
  formatText(t, n) {
    const o = this.format.replaceAll(B, t.value1.toString()).replaceAll(b, t.value2.toString());
    return this.dataSource ? o.replaceAll(
      V,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue1() {
    return this.format.includes(B);
  }
  requiresValue2() {
    return this.format.includes(b);
  }
  requiresName() {
    return this.format.includes(V);
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
const li = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), yi = (e) => [
  Nn(e.options.recoverHp),
  fn(e.options.recoverMp),
  On(e.options.gainTp),
  Ln(e.options.addState),
  Mn(e.options.removeState),
  Pn(e.options.addBuff),
  vn(e.options.addDebuff),
  Dn(e.options.removeBuff),
  Fn(e.options.removeDebuff),
  hn(e.options.learnSkill),
  Hn(e.options.commonEvent)
], C = () => ({
  author: l,
  module: P,
  kind: g
}), N = (e) => ({
  author: l,
  module: q,
  kind: e
}), d = (e, t, n, o) => {
  const s = n.domainName ?? t.domainName, p = n.format ?? t.format, ve = n.desc ?? t.desc;
  return new Cn(e, s, p, ve, o);
}, Nn = (e) => d(
  sn,
  m.options.recoverHp,
  e
), fn = (e) => d(
  cn,
  m.options.recoverMp,
  e
), On = (e) => d(mn, m.options.gainTp, e), ui = (e) => d(ln, m.options.grow, e), Ln = (e) => d(
  pn,
  m.options.addState,
  e,
  N(S)
), Mn = (e) => d(
  dn,
  m.options.removeState,
  e,
  N(S)
), Pn = (e) => d(
  En,
  m.options.addBuff,
  e,
  C()
), Dn = (e) => d(
  _n,
  m.options.removeBuff,
  e,
  C()
), hn = (e) => d(
  yn,
  m.options.learnSkill,
  e,
  N(Me)
), vn = (e) => d(
  An,
  m.options.addBuff,
  e,
  C()
), Fn = (e) => d(
  Tn,
  m.options.removeDebuff,
  e,
  C()
), Hn = (e) => d(
  un,
  m.options.commonEvent,
  e,
  N(Rn)
), Ri = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Ii = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, gi = {
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
}), Si = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, A = new M(), Gn = A.compile(an), xn = A.compile(on), Bn = A.compile(zt), bn = A.compile(Qt), Vn = A.compile(en), Wn = A.compile(nn), qn = A.compile(Zt), Yn = A.compile(Jt), Ci = (e) => Gn(e), Ni = (e) => xn(e), fi = (e) => Bn(e), Oi = (e) => bn(e), Li = (e) => Vn(e), Mi = (e) => Wn(e), Pi = (e) => qn(e), Di = (e) => Yn(e), hi = 0, vi = 101, Fi = 401, wn = 102, jn = 402, Kn = 103, Hi = 104, ki = 105, Ui = 405, Xn = 108, $n = 408, Gi = 109, xi = 111, Bi = 411, bi = 112, Vi = 113, Wi = 115, zn = 117, qi = 118, Yi = 119, wi = 121, ji = 122, Ki = 123, Xi = 124, $i = 125, zi = 126, Qi = 127, Ji = 128, Zi = 129, Qn = 132, Jn = 133, er = 134, tr = 135, nr = 136, or = 137, ar = 138, Zn = 139, ir = 140, rr = 201, sr = 202, cr = 203, mr = 204, pr = 205, dr = 206, Er = 211, Ar = 212, _r = 213, Tr = 214, lr = 216, yr = 217, ur = 221, Rr = 222, Ir = 223, gr = 224, Sr = 225, Cr = 230, Nr = 231, fr = 232, Or = 233, Lr = 234, Mr = 235, Pr = 236, eo = 241, Dr = 242, hr = 243, vr = 244, to = 245, Fr = 246, no = 249, oo = 250, Hr = 251, kr = 261, Ur = 282, Gr = 283, xr = 284, Br = 285, br = 301, Vr = 302, Wr = 605, qr = 303, Yr = 311, wr = 312, jr = 313, Kr = 314, Xr = 315, ao = 320, $r = 321, zr = 322, Qr = 323, io = 324, ro = 325, Jr = 331, Zr = 332, es = 333, ts = 334, ns = 335, os = 336, as = 337, is = 339, rs = 340, ss = 351, cs = 342, ms = 352, ps = 353, ds = 354, Es = 355, As = 655, _s = 356, Ts = 357, ls = 0, ys = 1, us = 2, Rs = 3, Is = 4, gs = 5, Ss = 6, Cs = 7, Ns = 8, fs = 9, Os = 10, Ls = 11, Ms = 12, Ps = 13, Ds = 14, hs = 15, vs = 16, Fs = 17, Hs = 18, ks = 19, Us = 20, Gs = 21, xs = 22, Bs = 23, bs = 24, Vs = 25, Ws = 26, qs = 27, Ys = 28, ws = 29, js = 30, Ks = 31, Xs = 32, $s = 33, zs = 34, Qs = 35, Js = 36, Zs = 37, ec = 38, tc = 39, nc = 40, oc = 41, ac = 42, ic = 43, rc = 44, sc = 45, cc = (e, t, n = 0) => ({
  code: e,
  indent: n,
  parameters: t
}), mc = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), so = () => ({
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}), co = (e = {}) => ({
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
}), pc = () => ({
  conditions: co(),
  list: [],
  directionFix: !1,
  image: so(),
  moveFrequency: 5,
  moveRoute: {
    list: [],
    repeat: !1,
    skippable: !1,
    wait: !1
  }
}), mo = {
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
}, po = (e) => e.toString().padStart(3, "0"), dc = (e = { id: 0 }) => ({
  name: e.name ?? po(e.id),
  id: e.id,
  expanded: e.expanded ?? !1,
  order: e.order ?? 0,
  parentId: e.parentId ?? 0,
  scrollX: e.scrollX ?? 0,
  scrollY: e.scrollY ?? 0
}), Ec = (e = {}) => ({
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
}), Ac = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), _c = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), Tc = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), lc = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), Eo = new M(), Ao = Eo.compile(mo), yc = (e) => Ao(e), uc = (e = {}) => ({
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
}), Rc = {
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
}, a = (e = {}) => ({
  name: e.name ?? "",
  volume: e.volume ?? 100,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
}), Ic = (e) => [
  a(e.cursor),
  a(e.ok),
  a(e.cancel),
  a(e.buzzer),
  a(e.equip),
  a(e.save),
  a(e.load),
  a(e.battleStart),
  a(e.escape),
  a(e.enemyAttack),
  a(e.enemyDamage),
  a(e.enemyCollapse),
  a(e.bossCollapes1),
  a(e.bossCollapes2),
  a(e.actorDamage),
  a(e.actorCollapse),
  a(e.playRecovery),
  a(e.playMiss),
  a(e.playEvasion),
  a(e.playMagicEvasion),
  a(e.playReflection),
  a(e.shop),
  a(e.useItem),
  a(e.useSkill)
], gc = {
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
}, Sc = {
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
}, Pe = (e, t) => `<${e}:${t}>`, f = () => /<([^<>:]+):([^>]*)>/g, Cc = (e, t) => De(e.note, (n, o) => t(n, o, e)), Nc = (e) => De(e, (t, n) => [t, n]), De = (e, t) => {
  const n = f();
  return Array.from(e.matchAll(n), (o) => t(o[1], o[2]));
}, fc = (e, t) => e.replaceAll(
  f(),
  (n, o, s) => {
    const p = t(o, s);
    return Pe(o, p);
  }
), Oc = (e, t) => {
  const n = f(), o = Array.from(e.matchAll(n)).find(
    (s) => s[1] === t
  );
  return o ? o[2] : void 0;
}, Lc = (e, t, n) => {
  const o = f();
  return e.replaceAll(o, (s, p) => p === t ? Pe(p, n) : s);
}, h = (e, t) => `\\${e}[${t}]`, Mc = (e, t) => t.map((n, o) => ({
  text: n,
  controlChar: h(e, o)
})), Pc = (e) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g;
  return Array.from(e.matchAll(t)).map(
    (n) => ({
      char: n[1],
      id: parseInt(n[2], 10)
    })
  );
}, _o = "N", To = "V", Dc = (e) => e.map((t) => ({
  text: t.name,
  controlChar: h(_o, t.id)
})), hc = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: h(To, n)
})).filter((t) => t.text !== ""), lo = {
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
}, vc = {
  rpg: {
    damage: Un,
    data: kn,
    traits: i,
    itemEffect: m
  },
  global: lo
}, yo = {
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
}, uo = {
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
}, Ro = {
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
}, Io = {
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
}, So = {
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
}, Co = {
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
}, y = new M(), No = y.compile(uo), fo = y.compile(Co), Oo = y.compile(So), Lo = y.compile(Ro), Mo = y.compile(yo), Po = y.compile(Io), Do = y.compile(go), Fc = (e) => Mo(e), Hc = (e) => Do(e), kc = (e) => Po(e), Uc = (e) => fo(e), Gc = (e) => Oo(e), xc = (e) => Lo(e), Bc = (e) => No(e), bc = (e, t = 0) => ({
  code: ao,
  parameters: [e.actorId, e.name],
  indent: t
}), Vc = (e, t = 0) => ({
  code: io,
  parameters: [e.actorId, e.nickname],
  indent: t
}), Wc = (e, t = 0) => ({
  code: ro,
  parameters: [e.actorId, e.profile],
  indent: t
}), qc = (e, t) => _(e, a({ name: t })), _ = (e, t, n = 0) => ({
  code: e,
  parameters: [a(t)],
  indent: n
}), Yc = (e, t = 0) => _(eo, e, t), wc = (e, t = 0) => _(to, e, t), jc = (e, t = 0) => _(no, e, t), Kc = (e, t = 0) => _(oo, e, t), Xc = (e, t = 0) => _(Qn, e, t), $c = (e, t = 0) => _(Jn, e, t), zc = (e, t = 0) => _(Zn, e, t), Qc = (e, t = 0) => ({
  code: zn,
  indent: t,
  parameters: ho(e ?? {})
}), Jc = (e) => ({
  eventId: e[0]
}), ho = (e) => [e.eventId ?? 0], he = (e) => [e], Zc = (e) => ({
  comment: e[0]
}), vo = (e, t = 0) => ({
  code: Xn,
  indent: t,
  parameters: he(e)
}), Fo = (e, t = 0) => ({
  code: $n,
  indent: t,
  parameters: he(e)
}), em = (e, t = 0) => e.map(
  (n, o) => o === 0 ? vo(n, t) : Fo(n, t)
), Ho = (e) => [e.variableId ?? 0, e.digits ?? 0], tm = (e) => ({
  variableId: e[0],
  digits: e[1]
}), nm = (e, t = 0) => ({
  code: Kn,
  indent: t,
  parameters: Ho(e ?? {})
}), om = (e, t = 0) => ({
  code: jn,
  indent: t,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), am = (e) => ({
  index: e[0],
  name: e[1]
}), im = (e) => [e.index ?? 0, e.name ?? ""], rm = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), sm = (e) => [
  e.choices ?? [],
  e.cancelType ?? 0,
  e.defaultType ?? 0,
  e.positionType ?? 2,
  e.background ?? 0
], cm = (e, t = 0) => ({
  code: wn,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.choices) ?? [],
    (e == null ? void 0 : e.cancelType) ?? 0,
    (e == null ? void 0 : e.defaultType) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.background) ?? 0
  ]
});
export {
  rs as ABORT_BATTLE,
  l as AUTHOR_RMMZ,
  br as BATTLE_PROCESSING,
  zr as CHANGE_ACTOR_IMAGES,
  Ji as CHANGE_ARMORS,
  Gr as CHANGE_BATTLE_BACKGROUND,
  Qn as CHANGE_BATTLE_BGM,
  $r as CHANGE_CLASS,
  Zn as CHANGE_DEFEAT_ME,
  nr as CHANGE_ENCOUNTER,
  Jr as CHANGE_ENEMY_HP,
  Zr as CHANGE_ENEMY_MP,
  es as CHANGE_ENEMY_STATE,
  cs as CHANGE_ENEMY_TP,
  Xr as CHANGE_EXP,
  or as CHANGE_FORMATION_ACCESS,
  $i as CHANGE_GOLD,
  Yr as CHANGE_HP,
  zi as CHANGE_ITEMS,
  tr as CHANGE_MENU_ACCESS,
  wr as CHANGE_MP,
  ao as CHANGE_NAME,
  io as CHANGE_NICKNAME,
  xr as CHANGE_PARALLAX,
  Zi as CHANGE_PARTY_MEMBER,
  lr as CHANGE_PLAYER_FOLLOWERS,
  ro as CHANGE_PROFILE,
  er as CHANGE_SAVE_ACCESS,
  Ur as CHANGE_TILESET,
  jr as CHANGE_TP,
  Er as CHANGE_TRANSPARENCY,
  ir as CHANGE_VEHICLE_BGM,
  Qr as CHANGE_VEHICLE_IMAGE,
  Jn as CHANGE_VICTORY_ME,
  Qi as CHANGE_WEAPONS,
  ar as CHANGE_WINDOW_COLOR,
  it as COLLAPS_BOSS,
  rt as COLLAPS_INSTANT,
  st as COLLAPS_NONE,
  at as COLLAPS_NORMAL,
  Xn as COMMENT,
  $n as COMMENT_BODY,
  zn as COMMON_EVENT,
  xi as CONDITIONAL_BRANCH,
  Bi as CONDITIONAL_BRANCH_ELSE,
  Ki as CONTROL_SELF_SWITCH,
  wi as CONTROL_SWITCHES,
  Xi as CONTROL_TIMER,
  ji as CONTROL_VARIABLES,
  Un as DEFAULT_DAMAGE_LABELS,
  lo as DEFAULT_GLOBAL_LABELS,
  Ri as DEFAULT_ITEM_LABELS,
  Ii as DEFAULT_SKILL_LABELS,
  gc as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  gi as DEFAULT_USABLE_ITEM_LABELS,
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
  Ja as EFFECT_SPECIAL,
  ns as ENEMY_APPEAR,
  ts as ENEMY_RECOVER_ALL,
  os as ENEMY_TRANSFORM,
  Tr as ERASE_EVENT,
  Mr as ERASE_PICTURE,
  Wi as EXIT_EVENT_PROCESSING,
  X as EXTRA_PARAM_CEV,
  Q as EXTRA_PARAM_CNT,
  K as EXTRA_PARAM_CRI,
  j as EXTRA_PARAM_EVA,
  w as EXTRA_PARAM_HIT,
  J as EXTRA_PARAM_HRG,
  $ as EXTRA_PARAM_MEV,
  z as EXTRA_PARAM_MRF,
  Z as EXTRA_PARAM_MRG,
  ee as EXTRA_PARAM_TRG,
  Rr as FADEIN_SCREEN,
  Dr as FADEOUT_BGM,
  Fr as FADEOUT_BGS,
  ur as FADEOUT_SCREEN,
  ea as FILENAME_ACTORS,
  ma as FILENAME_ANIMATIONS,
  ia as FILENAME_ARMORS,
  ta as FILENAME_CLASSES,
  da as FILENAME_COMMON_EVENTS,
  ra as FILENAME_ENEMIES,
  oa as FILENAME_ITEMS,
  Ea as FILENAME_MAP_INFOS,
  na as FILENAME_SKILLS,
  ca as FILENAME_STATES,
  Zo as FILENAME_SYSTEM,
  pa as FILENAME_TILESET,
  sa as FILENAME_TROOPS,
  aa as FILENAME_WEAPONS,
  _t as FLAG_ID_AUTO_BATTLE,
  Tt as FLAG_ID_GUARD,
  yt as FLAG_ID_PRESERVE_TP,
  lt as FLAG_ID_SUBSTITUTE,
  gr as FLASH_SCREEN,
  Ta as FOLDER_AUDIO,
  Uo as FOLDER_AUDIO_BGM,
  Bo as FOLDER_AUDIO_BGS,
  xo as FOLDER_AUDIO_ME,
  Go as FOLDER_AUDIO_SE,
  Aa as FOLDER_DATA,
  _a as FOLDER_IMG,
  bo as FOLDER_IMG_BATTLEBACK1,
  Vo as FOLDER_IMG_BATTLEBACK2,
  Wo as FOLDER_IMG_CHACTERS,
  qo as FOLDER_IMG_ENEMIES,
  Yo as FOLDER_IMG_FACES,
  wo as FOLDER_IMG_PARALLACES,
  jo as FOLDER_IMG_PICTURES,
  Ko as FOLDER_IMG_SV_ACTORS,
  Xo as FOLDER_IMG_SV_ENEMIES,
  $o as FOLDER_IMG_SYSTEM,
  zo as FOLDER_IMG_TILESETS,
  Qo as FOLDER_IMG_TITLES1,
  Jo as FOLDER_IMG_TITLES2,
  la as FOLDER_JS,
  is as FORCE_ACTION,
  ps as GAME_OVER,
  yr as GATHER_FOLLOWERS,
  Br as GET_LOCATION_INFO,
  dr as GET_ONOFF_VEHICLE,
  $a as HITTYPE_CERTAIN,
  Qa as HITTYPE_MAGICAL,
  za as HITTYPE_PHYSICAL,
  Kn as INPUT_NUMBER,
  qi as LABEL,
  qa as LABELS_DATA_WEAPON,
  Yi as LABEL_JUMP,
  vc as LABEL_REGISTRY_JP,
  kn as LABEL_SET_DATA,
  m as LABEL_SET_ITEM_EFFECT,
  i as LABEL_SET_TRAIT,
  bi as LOOP,
  Vi as LOOP_BREAK,
  q as MODULE_DATA,
  Y as MODULE_SYSTEM,
  P as MODULE_TRAIT,
  fr as MOVE_PICTURE,
  Sc as MockSystemLabelDataTypes,
  qr as NAME_INPUT_PROCESSING,
  hi as NO_OPERATION,
  ss as OPEN_MENU_SCREEN,
  ms as OPEN_SAVE_SCREEN,
  pt as PARTY_ABILITY_CANCEL_SURPRISE,
  At as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  ct as PARTY_ABILITY_ENCOUNTER_HALF,
  mt as PARTY_ABILITY_ENCOUNTER_NONE,
  Et as PARTY_ABILITY_GOLD_DOUBLE,
  dt as PARTY_ABILITY_RAISE_PREEMPTIVE,
  eo as PLAY_BGM,
  to as PLAY_BGS,
  no as PLAY_ME,
  kr as PLAY_MOVIE,
  oo as PLAY_SE,
  _s as PLUGIN_COMMAND_MV,
  Ts as PLUGIN_COMMAND_MZ,
  Kr as RECOVER_ALL,
  se as REGULAR_PARAM_AGI,
  oe as REGULAR_PARAM_ATK,
  ae as REGULAR_PARAM_DEF,
  ce as REGULAR_PARAM_LUK,
  ie as REGULAR_PARAM_MATK,
  te as REGULAR_PARAM_MAX_HP,
  ne as REGULAR_PARAM_MAX_MP,
  re as REGULAR_PARAM_MDEF,
  vr as RESUME_BGM,
  ds as RETURN_TO_TITLE_SCREEN,
  Or as ROTATE_PICTURE,
  ic as ROUTE_CHANGE_BLEND_MODE,
  js as ROUTE_CHANGE_FREQ,
  oc as ROUTE_CHANGE_IMAGE,
  ac as ROUTE_CHANGE_OPACITY,
  ws as ROUTE_CHANGE_SPEED,
  Js as ROUTE_DIR_FIX_OFF,
  Qs as ROUTE_DIR_FIX_ON,
  ls as ROUTE_END,
  Ds as ROUTE_JUMP,
  Ls as ROUTE_MOVE_AWAY,
  Ps as ROUTE_MOVE_BACKWARD,
  ys as ROUTE_MOVE_DOWN,
  Ms as ROUTE_MOVE_FORWARD,
  us as ROUTE_MOVE_LEFT,
  gs as ROUTE_MOVE_LOWER_L,
  Ss as ROUTE_MOVE_LOWER_R,
  fs as ROUTE_MOVE_RANDOM,
  Rs as ROUTE_MOVE_RIGHT,
  Os as ROUTE_MOVE_TOWARD,
  Is as ROUTE_MOVE_UP,
  Cs as ROUTE_MOVE_UPPER_L,
  Ns as ROUTE_MOVE_UPPER_R,
  rc as ROUTE_PLAY_SE,
  sc as ROUTE_SCRIPT,
  zs as ROUTE_STEP_ANIME_OFF,
  $s as ROUTE_STEP_ANIME_ON,
  Ys as ROUTE_SWITCH_OFF,
  qs as ROUTE_SWITCH_ON,
  ec as ROUTE_THROUGH_OFF,
  Zs as ROUTE_THROUGH_ON,
  nc as ROUTE_TRANSPARENT_OFF,
  tc as ROUTE_TRANSPARENT_ON,
  xs as ROUTE_TURN_180D,
  Gs as ROUTE_TURN_90D_L,
  Us as ROUTE_TURN_90D_R,
  Bs as ROUTE_TURN_90D_R_L,
  Ws as ROUTE_TURN_AWAY,
  vs as ROUTE_TURN_DOWN,
  Fs as ROUTE_TURN_LEFT,
  bs as ROUTE_TURN_RANDOM,
  Hs as ROUTE_TURN_RIGHT,
  Vs as ROUTE_TURN_TOWARD,
  ks as ROUTE_TURN_UP,
  hs as ROUTE_WAIT,
  Xs as ROUTE_WALK_ANIME_OFF,
  Ks as ROUTE_WALK_ANIME_ON,
  hr as SAVE_BGM,
  Si as SCHEMA_DAMAGE,
  zt as SCHEMA_DATA_ACTOR,
  Qt as SCHEMA_DATA_ARMMOR,
  Jt as SCHEMA_DATA_CLASS,
  nn as SCHEMA_DATA_ENEMY,
  an as SCHEMA_DATA_ITEM,
  mo as SCHEMA_DATA_MAP_INFO,
  on as SCHEMA_DATA_SKILL,
  Zt as SCHEMA_DATA_STATE,
  en as SCHEMA_DATA_WEAPON,
  Rc as SCHEMA_SYSTEM_ADVANCED,
  Ga as SCHEMA_TRAIT,
  Es as SCRIPT_EVAL,
  As as SCRIPT_EVAL_BODY,
  mr as SCROLL_MAP,
  Hi as SELECT_ITEM,
  cr as SET_EVENT_LOCATION,
  pr as SET_MOVEMENT_ROUTE,
  sr as SET_VEHICLE_LOCATION,
  Pr as SET_WEATHER_EFFECT,
  Sr as SHAKE_SCREEN,
  Vr as SHOP_PROCESSING,
  Wr as SHOP_PROCESSING_BODY,
  Ar as SHOW_ANIMATION,
  _r as SHOW_BALLOON_ICON,
  as as SHOW_BATTLE_ANIMATION,
  wn as SHOW_CHOICES,
  jn as SHOW_CHOICES_ITEM,
  vi as SHOW_MESSAGE,
  Fi as SHOW_MESSAGE_BODY,
  Nr as SHOW_PICTURE,
  ki as SHOW_SCROLLING_TEXT,
  Ui as SHOW_SCROLLING_TEXT_BODY,
  Gi as SKIP,
  Za as SPECIAL_EFFECT_ESCAPE,
  ue as SPECIAL_PARAM_EXR,
  ye as SPECIAL_PARAM_FDR,
  pe as SPECIAL_PARAM_GRD,
  Ae as SPECIAL_PARAM_MCR,
  le as SPECIAL_PARAM_MDR,
  Te as SPECIAL_PARAM_PDR,
  Ee as SPECIAL_PARAM_PHA,
  de as SPECIAL_PARAM_REC,
  _e as SPECIAL_PARAM_TCR,
  me as SPECIAL_PARAM_TGR,
  gn as SRC_ARMOR_TYPES,
  Ei as SRC_COLOR,
  oi as SRC_DATA_ACTOR,
  mi as SRC_DATA_ARMOR,
  pi as SRC_DATA_CLASS,
  Rn as SRC_DATA_COMMON_EVNET,
  ri as SRC_DATA_ENEMY,
  si as SRC_DATA_ITEMS,
  ii as SRC_DATA_MAP,
  Me as SRC_DATA_SKILL,
  S as SRC_DATA_STATE,
  di as SRC_DATA_TROOP,
  ai as SRC_DATA_VARIABLE,
  ci as SRC_DATA_WEAPON,
  Sn as SRC_ELEMENTS,
  Ai as SRC_EQUIP_TYPES,
  Ce as SRC_PARAMS_EXTRA,
  g as SRC_PARAMS_REGULAR,
  Ne as SRC_PARAMS_SPECIAL,
  Ti as SRC_SKILL_TYPES,
  _i as SRC_SWITCHES,
  fe as SRC_TRAIT_COLLAPS,
  Oe as SRC_TRAIT_PARTY_ABILITY,
  Le as SRC_TRAIT_SPECIAL_FLAG,
  In as SRC_WEAPON_TYPES,
  Hr as STOP_SE,
  Lr as TINT_PICTURE,
  Ir as TINT_SCREEN,
  et as TRAIT_ACTION_PLUS,
  be as TRAIT_ATTACK_ELEMENT,
  Ye as TRAIT_ATTACK_SKILL,
  We as TRAIT_ATTACK_SPEED,
  Ve as TRAIT_ATTACK_STATE,
  qe as TRAIT_ATTACK_TIMES,
  nt as TRAIT_COLLAPSE_TYPE,
  He as TRAIT_DEBUFF_RATE,
  Fe as TRAIT_ELEMENT_RATE,
  ze as TRAIT_EQUIP_ARMOR_TYPE,
  Qe as TRAIT_EQUIP_LOCK,
  Je as TRAIT_EQUIP_SEAL,
  $e as TRAIT_EQUIP_WEAPON_TYPE,
  Ge as TRAIT_PARAM,
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
  xe as TRAIT_XPARAM,
  rr as TRANSFER_PLAYER,
  Ua as TYPENAME_TRAIT,
  Nt as TraitDescriptor,
  Cr as WAIT,
  Pa as buildCollapsSource,
  va as buildExtraParamSource,
  Da as buildPartyAbilitySource,
  ha as buildRegularParamSource,
  Ha as buildSpecialFlagSource,
  Fa as buildSpecialParamSource,
  Zc as convertCommentArrayToObject,
  Dc as createActorControlChars,
  h as createControlCharFormat,
  cc as createEventCommand,
  Pe as createNoteEntity,
  hc as createSystemVariableControlChars,
  Pn as defineEffectAddBuff,
  vn as defineEffectAddDebuff,
  Ln as defineEffectAddState,
  Hn as defineEffectCommonEvent,
  On as defineEffectGainTp,
  ui as defineEffectGrow,
  hn as defineEffectLearnSkill,
  Nn as defineEffectRecoverHp,
  fn as defineEffectRecoverMp,
  Dn as defineEffectRemoveBuff,
  Fn as defineEffectRemoveDebuff,
  Mn as defineEffectRemoveState,
  La as extraParamName,
  ut as foldCollapsOptions,
  gt as foldExtraParam,
  Rt as foldPartyAbilityOptions,
  It as foldRegularParam,
  Ct as foldSpecialFlag,
  St as foldSpecialParams,
  li as formatItemEffectText,
  Jc as fromArrayCommonEvent,
  tm as fromArrayInputNumber,
  rm as fromArraySetupChoice,
  am as fromArraySetupChoiceItem,
  Mc as fromStringArray,
  Na as getArmorTypes,
  Pc as getControlChars,
  Ia as getElementTypes,
  ga as getEquipTypes,
  Oc as getNoteValue,
  fa as getParamNames,
  Sa as getSkillTypes,
  Ra as getVariableNames,
  Ca as getWeaponTypes,
  Hc as isCommandAudio,
  kc as isCommandCommonEvent,
  xc as isCommandInputNumber,
  Gc as isCommandShowChoiceItem,
  Uc as isCommandShowChoices,
  Bc as isCommandShowMessage,
  Fc as isCommandTextBody,
  fi as isDataActor,
  Oi as isDataArmor,
  Di as isDataClass,
  Mi as isDataEnemy,
  Ci as isDataItem,
  yc as isDataMapInfo,
  Ni as isDataSkill,
  Pi as isDataState,
  Li as isDataWeapon,
  ni as isValid,
  ti as joinSourceKey,
  xa as makeActorData,
  ba as makeArmorData,
  qc as makeAudioCommand,
  a as makeAudioFileParams,
  Va as makeClassData,
  Qc as makeCommand2_CommonEvent,
  om as makeCommand2_ShowChoiceItem,
  _ as makeCommandAudioAny,
  bc as makeCommandChangeActorName,
  Vc as makeCommandChangeActorNickName,
  Wc as makeCommandChangeActorProfile,
  Xc as makeCommandChangeBattleBGM,
  zc as makeCommandChangeDefeatME,
  $c as makeCommandChangeVictoryME,
  Fo as makeCommandCommentBody,
  vo as makeCommandCommentHeader,
  nm as makeCommandInputNumber,
  Yc as makeCommandPlayBGM,
  wc as makeCommandPlayBGS,
  jc as makeCommandPlayME,
  Kc as makeCommandPlaySE,
  cm as makeCommandSetupChoice,
  he as makeCommentArray,
  em as makeCommentCommandArray,
  Ac as makeCommonEventData,
  D as makeDamage,
  tn as makeDropItem,
  wa as makeEnemyAction,
  ja as makeEnemyData,
  co as makeEventPageCondition,
  Ka as makeItemData,
  Ec as makeMapData,
  mc as makeMapEvent,
  so as makeMapEventIamge,
  pc as makeMapEventPage,
  dc as makeMapInfoData,
  f as makeRegex,
  Xa as makeSkillData,
  Ic as makeSoundsArray,
  Wa as makeStateData,
  uc as makeSystemAdvanced,
  _c as makeTroopData,
  lc as makeTroopEventConditions,
  Tc as makeTroopMember,
  Ya as makeWeaponData,
  ya as mergeDomainLabel,
  ua as mergeNestedPrimitiveRecords,
  W as mergeWithDefaults,
  Ba as normalizeDataActor,
  Nc as readNote,
  De as readNoteEx,
  Cc as readNoteObject,
  Oa as regularParamName,
  fc as replaceNote,
  yi as resolveItemEffectLabels,
  ka as resolveTraitLabels,
  ei as sanitizeKey,
  Lc as setNoteValue,
  Ma as specialParamName,
  L as testUnknonwKey,
  ho as toArrayCommonEvent,
  Ho as toArrayInputNumber,
  sm as toArraySetupChoice,
  im as toArraySetupChoiceItem,
  R as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
