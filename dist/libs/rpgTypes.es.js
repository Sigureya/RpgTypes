import L from "ajv";
const Lo = "bgm", Po = "se", Do = "me", ho = "bgs", vo = "battlebacks1", Fo = "battlebacks2", Ho = "characters", ko = "enemies", Uo = "faces", Go = "parallaxes", xo = "pictures", Bo = "sv_actors", bo = "sv_enemies", Vo = "system", qo = "tilesets", Wo = "titles1", Yo = "titles2", wo = "System.json", jo = "Actors.json", Ko = "Classes.json", Xo = "Skills.json", $o = "Items.json", zo = "Weapons.json", Qo = "Armors.json", Jo = "Enemies.json", Zo = "Troops.json", ei = "States.json", ti = "Animations.json", ni = "Tilesets.json", oi = "CommonEvents.json", ii = "MapInfos.json", ai = "data", si = "img", ri = "audio", ci = "js", q = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const r = t[o];
    typeof r == "string" && (n[o] = r);
  }
  return n;
}, mi = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: q(e.options, t.options ?? {})
}), pi = (e, t) => {
  const n = {};
  for (const o in e) {
    const r = e[o], p = t[o] ?? {};
    n[o] = q(
      r,
      p
    );
  }
  return n;
}, _ = (e, t) => ({
  name: e,
  id: t
}), di = (e) => e.variables.map(_), Ei = (e) => e.elements.map(_), Ai = (e) => e.equipTypes.map(_), _i = (e) => e.skillTypes.map(_), Ti = (e) => e.weaponTypes.map(_), li = (e) => e.armorTypes.map(_), yi = (e) => e.terms.params.map(_), T = "rmmz", P = "trait", W = "data", Y = "system", ve = 11, Fe = 12, He = 13, ke = 14, Ue = 21, Ge = 22, xe = 23, Be = 31, be = 32, Ve = 33, qe = 34, We = 35, Ye = 41, we = 42, je = 43, Ke = 44, Xe = 51, $e = 52, ze = 53, Qe = 54, Je = 55, Ze = 61, et = 62, tt = 63, nt = 64, ot = 0, it = 1, at = 2, st = 3, rt = 0, ct = 1, mt = 2, pt = 3, dt = 4, Et = 5, At = 0, _t = 1, Tt = 2, lt = 3, w = 0, j = 1, K = 2, X = 3, $ = 4, z = 5, Q = 6, J = 7, Z = 8, ee = 9, te = 0, ne = 1, oe = 2, ie = 3, ae = 4, se = 5, re = 6, ce = 7, me = 0, pe = 1, de = 2, Ee = 3, Ae = 4, _e = 5, Te = 6, le = 7, ye = 8, ue = 9, ui = (e, t) => {
  switch (e) {
    case te:
      return t.maxHp;
    case ne:
      return t.maxMp;
    case oe:
      return t.atk;
    case ie:
      return t.def;
    case ae:
      return t.matk;
    case se:
      return t.mdef;
    case re:
      return t.agi;
    case ce:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, Ri = (e, t) => {
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
}, Ii = (e, t) => {
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
}, yt = (e, t) => [
  {
    id: ot,
    name: t.normal
  },
  {
    id: it,
    name: e.bossCollaps
  },
  {
    id: at,
    name: e.instantCollaps
  },
  {
    id: st,
    name: e.noneCollaps
  }
], ut = (e) => [
  {
    id: rt,
    name: e.encounterHalf
  },
  {
    id: ct,
    name: e.encounterNone
  },
  {
    id: mt,
    name: e.cancelSurprise
  },
  {
    id: pt,
    name: e.raisePreemptive
  },
  {
    id: dt,
    name: e.goldDouble
  },
  {
    id: Et,
    name: e.dropItemDouble
  }
], Rt = (e) => [
  { id: te, name: e.maxHp },
  { id: ne, name: e.maxMp },
  { id: oe, name: e.atk },
  { id: ie, name: e.def },
  { id: ae, name: e.matk },
  { id: se, name: e.mdef },
  { id: re, name: e.agi },
  { id: ce, name: e.luk }
], It = (e) => [
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
], gt = (e) => [
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
], St = (e) => [
  {
    id: At,
    name: e.autoBattle
  },
  {
    id: _t,
    name: e.guard
  },
  {
    id: Tt,
    name: e.substitute
  },
  {
    id: lt,
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
}), gi = (e, t) => u(
  fe,
  e,
  (n) => yt(n, t)
), Si = (e) => u(Oe, e, ut), Ci = (e) => u(g, e, Rt), Ni = (e) => u(Ce, e, It), fi = (e) => u(Ne, e, gt), Oi = (e) => u(Me, e, St), c = "{name}", y = "{name} * {value}%", v = "{name} + {value}%", F = "{value}", i = {
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
      format: F
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: F
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
}, H = "{value}", k = "{name}";
class Ct {
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
const Mi = (e) => [
  Nt(e.elementRate),
  ft(e.debuffRate),
  Ot(e.stateRate),
  Mt(e.stateResist),
  Lt(e.regularParam),
  Pt(e.extraParam),
  Dt(e.specialParam),
  ht(e.attackElement),
  vt(e.attackState),
  Ft(e.attackSpeed),
  Ht(e.attackTimes),
  kt(e.attackSkill),
  Kt(e.skillTypeAdd),
  Xt(e.skillTypeSeal),
  Yt(e.skillAdd),
  wt(e.skillSeal),
  bt(e.equipWeaponType),
  Vt(e.equipArmorType),
  qt(e.equipLock),
  Wt(e.equipSeal),
  jt(e.slotType),
  Ut(e.actionPlus),
  Gt(e.specialFlag),
  xt(e.collaps),
  Bt(e.partyAbility)
], U = (e, t) => typeof t == "string" ? t : e, s = (e, t, n, o) => {
  const r = U(t.domainName, n.domainName), p = U(t.format, n.format);
  return new Ct(e, r, p, o);
}, Re = () => ({
  module: Y,
  author: T,
  kind: gn
}), Ie = (e) => ({
  module: W,
  author: T,
  kind: e
}), E = (e) => ({
  author: T,
  module: P,
  kind: e
}), ge = (e) => ({
  author: T,
  module: Y,
  kind: e
}), Nt = (e) => s(
  ve,
  i.options.elementRate,
  e,
  Re()
), ft = (e) => s(
  Fe,
  i.options.debuffRate,
  e,
  E(g)
), Ot = (e) => s(
  He,
  i.options.stateRate,
  e,
  E(g)
), Mt = (e) => s(
  ke,
  i.options.stateResist,
  e,
  Ie(S)
), Lt = (e) => s(
  Ue,
  i.options.regularParam,
  e,
  E(g)
), Pt = (e) => s(
  Ge,
  i.options.extraParam,
  e,
  E(Ce)
), Dt = (e) => s(
  xe,
  i.options.specialParam,
  e,
  E(Ne)
), ht = (e) => s(
  Be,
  i.options.attackElement,
  e,
  Re()
), vt = (e) => s(
  be,
  i.options.attackState,
  e,
  E(S)
), Ft = (e) => s(Ve, i.options.attackSpeed, e), Ht = (e) => s(qe, i.options.attackTimes, e), kt = (e) => s(
  We,
  i.options.attackSkill,
  e,
  Ie(Le)
), Ut = (e) => s(Ze, i.options.actionPlus, e), Gt = (e) => s(
  et,
  i.options.specialFlag,
  e,
  E(Me)
), xt = (e) => s(
  tt,
  i.options.collaps,
  e,
  E(fe)
), Bt = (e) => s(
  nt,
  i.options.partyAbility,
  e,
  E(Oe)
), bt = (e) => s(
  Xe,
  i.options.equipWeaponType,
  e,
  ge(Rn)
), Vt = (e) => s(
  $e,
  i.options.equipArmorType,
  e,
  ge(In)
), qt = (e) => s(ze, i.options.equipLock, e), Wt = (e) => s(Qe, i.options.equipSeal, e), Yt = (e) => s(je, i.options.skillAdd, e), wt = (e) => s(Ke, i.options.skillSeal, e), jt = (e) => s(Je, i.options.slotType, e), Kt = (e) => s(
  Ye,
  i.options.skillTypeAdd,
  e
), Xt = (e) => s(
  we,
  i.options.skillTypeSeal,
  e
), Li = "Trait", Pi = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, Di = (e = {}) => ({
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
}), $t = {
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
}, hi = (e) => ({
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
}), vi = (e = {}) => ({
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
}), zt = {
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
}, Fi = (e = {}) => ({
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
}), Qt = {
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
}, Hi = (e = {}) => ({
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
}), Jt = {
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
}, ki = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Ui = (e = {}) => ({
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
}), Zt = {
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
}, en = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), Gi = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), xi = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => en())) ?? [],
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
}, tn = {
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
}, Bi = (e = {}) => ({
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
}), bi = (e = {}) => ({
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
}), nn = {
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
}, on = {
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
}, Vi = 0, qi = 1, Wi = 2, an = "{name} + {value1}", G = "{name} {value1}%", O = "{value1}% + {value2}", x = "{name} {value1}ターン", I = "{name}", m = {
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
      format: an
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
}, sn = 11, rn = 12, cn = 13, mn = 21, pn = 22, dn = 31, En = 32, An = 33, _n = 34, Yi = 41, Tn = 42, ln = 43, yn = 44, wi = 0, Se = /^[a-zA-Z0-9]+$/, ji = (e) => Se.test(e) ? e : void 0, M = (e) => typeof e == "string" ? Se.test(e) : !1, Ki = (e) => [e.author, e.module, e.kind].join("."), Xi = (e) => M(e.author) && M(e.module) && M(e.kind), g = "params", Ce = "xparams", Ne = "sparams", fe = "collaps", Oe = "partyAbiility", Me = "sflag", $i = "actor", zi = "variables", Qi = "map", Ji = "enemy", S = "state", Le = "skill", Zi = "items", ea = "weapon", ta = "armor", na = "class", un = "common_event", oa = "troop", ia = "colors", Rn = "weaponTypes", In = "armorTypes", aa = "equipTypes", sa = "switches", ra = "skillTypes", gn = "elements", B = "{value1}", b = "{value2}", V = "{name}";
class Sn {
  constructor(t, n, o, r, p) {
    this.codeId = t, this.label = n, this.format = o, this.description = r, this.dataSource = p;
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
const ca = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), ma = (e) => [
  Cn(e.options.recoverHp),
  Nn(e.options.recoverMp),
  fn(e.options.gainTp),
  On(e.options.addState),
  Mn(e.options.removeState),
  Ln(e.options.addBuff),
  hn(e.options.addDebuff),
  Pn(e.options.removeBuff),
  vn(e.options.removeDebuff),
  Dn(e.options.learnSkill),
  Fn(e.options.commonEvent)
], C = () => ({
  author: T,
  module: P,
  kind: g
}), N = (e) => ({
  author: T,
  module: W,
  kind: e
}), d = (e, t, n, o) => {
  const r = n.domainName ?? t.domainName, p = n.format ?? t.format, he = n.desc ?? t.desc;
  return new Sn(e, r, p, he, o);
}, Cn = (e) => d(
  sn,
  m.options.recoverHp,
  e
), Nn = (e) => d(
  rn,
  m.options.recoverMp,
  e
), fn = (e) => d(cn, m.options.gainTp, e), pa = (e) => d(Tn, m.options.grow, e), On = (e) => d(
  mn,
  m.options.addState,
  e,
  N(S)
), Mn = (e) => d(
  pn,
  m.options.removeState,
  e,
  N(S)
), Ln = (e) => d(
  dn,
  m.options.addBuff,
  e,
  C()
), Pn = (e) => d(
  An,
  m.options.removeBuff,
  e,
  C()
), Dn = (e) => d(
  ln,
  m.options.learnSkill,
  e,
  N(Le)
), hn = (e) => d(
  En,
  m.options.addBuff,
  e,
  C()
), vn = (e) => d(
  _n,
  m.options.removeDebuff,
  e,
  C()
), Fn = (e) => d(
  yn,
  m.options.commonEvent,
  e,
  N(un)
), da = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Ea = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, Aa = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, Hn = {
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
}, kn = {
  domainName: "ダメージ",
  options: {}
}, D = (e = {}) => ({
  type: e.type ?? 0,
  elementId: e.elementId ?? 0,
  formula: e.formula ?? "",
  variance: e.variance ?? 0,
  critical: e.critical ?? !1
}), _a = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, A = new L(), Un = A.compile(on), Gn = A.compile(nn), xn = A.compile($t), Bn = A.compile(zt), bn = A.compile(Zt), Vn = A.compile(tn), qn = A.compile(Jt), Wn = A.compile(Qt), Ta = (e) => Un(e), la = (e) => Gn(e), ya = (e) => xn(e), ua = (e) => Bn(e), Ra = (e) => bn(e), Ia = (e) => Vn(e), ga = (e) => qn(e), Sa = (e) => Wn(e), Ca = 0, Yn = 101, Na = 401, wn = 102, jn = 402, Kn = 103, fa = 104, Oa = 105, Ma = 405, La = 108, Pa = 408, Da = 109, ha = 111, va = 411, Fa = 112, Ha = 113, ka = 115, Xn = 117, Ua = 118, Ga = 119, xa = 121, Ba = 122, ba = 123, Va = 124, qa = 125, Wa = 126, Ya = 127, wa = 128, ja = 129, $n = 132, zn = 133, Ka = 134, Xa = 135, $a = 136, za = 137, Qa = 138, Qn = 139, Ja = 140, Za = 201, es = 202, ts = 203, ns = 204, os = 205, is = 206, as = 211, ss = 212, rs = 213, cs = 214, ms = 216, ps = 217, ds = 221, Es = 222, As = 223, _s = 224, Ts = 225, ls = 230, ys = 231, us = 232, Rs = 233, Is = 234, gs = 235, Ss = 236, Jn = 241, Cs = 242, Ns = 243, fs = 244, Zn = 245, Os = 246, eo = 249, to = 250, Ms = 251, Ls = 261, Ps = 282, Ds = 283, hs = 284, vs = 285, Fs = 301, Hs = 302, ks = 605, Us = 303, Gs = 311, xs = 312, Bs = 313, bs = 314, Vs = 315, qs = 320, Ws = 321, Ys = 322, ws = 323, js = 324, Ks = 325, Xs = 331, $s = 332, zs = 333, Qs = 334, Js = 335, Zs = 336, er = 337, tr = 339, nr = 340, or = 351, ir = 342, ar = 352, sr = 353, rr = 354, cr = 355, mr = 655, pr = 356, dr = 357, Er = 0, Ar = 1, _r = 2, Tr = 3, lr = 4, yr = 5, ur = 6, Rr = 7, Ir = 8, gr = 9, Sr = 10, Cr = 11, Nr = 12, fr = 13, Or = 14, Mr = 15, Lr = 16, Pr = 17, Dr = 18, hr = 19, vr = 20, Fr = 21, Hr = 22, kr = 23, Ur = 24, Gr = 25, xr = 26, Br = 27, br = 28, Vr = 29, qr = 30, Wr = 31, Yr = 32, wr = 33, jr = 34, Kr = 35, Xr = 36, $r = 37, zr = 38, Qr = 39, Jr = 40, Zr = 41, ec = 42, tc = 43, nc = 44, oc = 45, ic = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), no = () => ({
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}), oo = (e = {}) => ({
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
  conditions: oo(),
  list: [],
  directionFix: !1,
  image: no(),
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
}, ao = (e) => e.toString().padStart(3, "0"), sc = (e = { id: 0 }) => ({
  name: e.name ?? ao(e.id),
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
}), cc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), mc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), pc = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), dc = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), so = new L(), ro = so.compile(io), Ec = (e) => ro(e), Ac = (e = {}) => ({
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
}), _c = {
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
}), Tc = (e) => [
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
], lc = {
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
}, yc = {
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
}, Pe = (e, t) => `<${e}:${t}>`, f = () => /<([^<>:]+):([^>]*)>/g, uc = (e, t) => De(e.note, (n, o) => t(n, o, e)), Rc = (e) => De(e, (t, n) => [t, n]), De = (e, t) => {
  const n = f();
  return Array.from(e.matchAll(n), (o) => t(o[1], o[2]));
}, Ic = (e, t) => e.replaceAll(
  f(),
  (n, o, r) => {
    const p = t(o, r);
    return Pe(o, p);
  }
), gc = (e, t) => {
  const n = f(), o = Array.from(e.matchAll(n)).find(
    (r) => r[1] === t
  );
  return o ? o[2] : void 0;
}, Sc = (e, t, n) => {
  const o = f();
  return e.replaceAll(o, (r, p) => p === t ? Pe(p, n) : r);
}, h = (e, t) => `\\${e}[${t}]`, Cc = (e, t) => t.map((n, o) => ({
  text: n,
  controlChar: h(e, o)
})), Nc = (e) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g;
  return Array.from(e.matchAll(t)).map(
    (n) => ({
      char: n[1],
      id: parseInt(n[2], 10)
    })
  );
}, co = "N", mo = "V", fc = (e) => e.map((t) => ({
  text: t.name,
  controlChar: h(co, t.id)
})), Oc = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: h(mo, n)
})).filter((t) => t.text !== ""), po = {
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
}, Mc = {
  rpg: {
    damage: kn,
    data: Hn,
    traits: i,
    itemEffect: m
  },
  global: po
}, Lc = (e, t = 0) => ({
  code: Xn,
  indent: t,
  parameters: Eo(e ?? {})
}), Pc = (e) => ({
  eventId: e[0]
}), Eo = (e) => [e.eventId ?? 0], Ao = {
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
}, _o = (e) => [e.variableId ?? 0, e.digits ?? 0], Dc = (e) => ({
  variableId: e[0],
  digits: e[1]
}), hc = (e, t = 0) => ({
  code: Kn,
  indent: t,
  parameters: _o(e ?? {})
}), To = {
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
}, vc = {
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
}, Fc = {
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
}, Hc = (e, t = 0) => ({
  code: jn,
  indent: t,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), kc = (e) => ({
  index: e[0],
  name: e[1]
}), Uc = (e) => [e.index ?? 0, e.name ?? ""], Gc = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), xc = (e) => [
  e.choices ?? [],
  e.cancelType ?? 0,
  e.defaultType ?? 0,
  e.positionType ?? 2,
  e.background ?? 0
], Bc = (e, t = 0) => ({
  code: wn,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.choices) ?? [],
    (e == null ? void 0 : e.cancelType) ?? 0,
    (e == null ? void 0 : e.defaultType) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.background) ?? 0
  ]
}), lo = {
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
}, yo = {
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
}, uo = (e, t = 0) => ({
  code: Yn,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.facename) ?? "",
    (e == null ? void 0 : e.faceIndex) ?? 0,
    (e == null ? void 0 : e.background) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.speakerName) ?? ""
  ]
}), bc = {
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
  makeCommand: (e, t = 0) => uo(e, t)
}, Ro = {
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
}, Io = {
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
  parameters: [a(t)],
  indent: n
}), Vc = (e, t = 0) => l(Jn, e, t), qc = (e, t = 0) => l(Zn, e, t), Wc = (e, t = 0) => l(eo, e, t), Yc = (e, t = 0) => l(to, e, t), wc = (e, t = 0) => l($n, e, t), jc = (e, t = 0) => l(zn, e, t), Kc = (e, t = 0) => l(Qn, e, t), R = new L(), go = R.compile(Ao), So = R.compile(Ro), Co = R.compile(yo), No = R.compile(lo), fo = R.compile(To), Oo = R.compile(Io), Xc = (e) => Oo(e), $c = (e) => go(e), zc = (e) => Co(e), Qc = (e) => No(e), Jc = (e) => fo(e), Zc = (e) => So(e);
export {
  nr as ABORT_BATTLE,
  T as AUTHOR_RMMZ,
  Fs as BATTLE_PROCESSING,
  Ys as CHANGE_ACTOR_IMAGES,
  wa as CHANGE_ARMORS,
  Ds as CHANGE_BATTLE_BACKGROUND,
  $n as CHANGE_BATTLE_BGM,
  Ws as CHANGE_CLASS,
  Qn as CHANGE_DEFEAT_ME,
  $a as CHANGE_ENCOUNTER,
  Xs as CHANGE_ENEMY_HP,
  $s as CHANGE_ENEMY_MP,
  zs as CHANGE_ENEMY_STATE,
  ir as CHANGE_ENEMY_TP,
  Vs as CHANGE_EXP,
  za as CHANGE_FORMATION_ACCESS,
  qa as CHANGE_GOLD,
  Gs as CHANGE_HP,
  Wa as CHANGE_ITEMS,
  Xa as CHANGE_MENU_ACCESS,
  xs as CHANGE_MP,
  qs as CHANGE_NAME,
  js as CHANGE_NICKNAME,
  hs as CHANGE_PARALLAX,
  ja as CHANGE_PARTY_MEMBER,
  ms as CHANGE_PLAYER_FOLLOWERS,
  Ks as CHANGE_PROFILE,
  Ka as CHANGE_SAVE_ACCESS,
  Ps as CHANGE_TILESET,
  Bs as CHANGE_TP,
  as as CHANGE_TRANSPARENCY,
  Ja as CHANGE_VEHICLE_BGM,
  ws as CHANGE_VEHICLE_IMAGE,
  zn as CHANGE_VICTORY_ME,
  Ya as CHANGE_WEAPONS,
  Qa as CHANGE_WINDOW_COLOR,
  it as COLLAPS_BOSS,
  at as COLLAPS_INSTANT,
  st as COLLAPS_NONE,
  ot as COLLAPS_NORMAL,
  La as COMMENT,
  Pa as COMMENT_BODY,
  Xn as COMMON_EVENT,
  ha as CONDITIONAL_BRANCH,
  va as CONDITIONAL_BRANCH_ELSE,
  ba as CONTROL_SELF_SWITCH,
  xa as CONTROL_SWITCHES,
  Va as CONTROL_TIMER,
  Ba as CONTROL_VARIABLES,
  bc as CommandShowMessage,
  kn as DEFAULT_DAMAGE_LABELS,
  po as DEFAULT_GLOBAL_LABELS,
  da as DEFAULT_ITEM_LABELS,
  Ea as DEFAULT_SKILL_LABELS,
  lc as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Aa as DEFAULT_USABLE_ITEM_LABELS,
  dn as EFFECT_ADD_BUFF,
  En as EFFECT_ADD_DEBUFF,
  mn as EFFECT_ADD_STATE,
  yn as EFFECT_COMMON_EVENT,
  cn as EFFECT_GAIN_TP,
  Tn as EFFECT_GROW,
  ln as EFFECT_LEARN_SKILL,
  sn as EFFECT_RECOVER_HP,
  rn as EFFECT_RECOVER_MP,
  An as EFFECT_REMOVE_BUFF,
  _n as EFFECT_REMOVE_DEBUFF,
  pn as EFFECT_REMOVE_STATE,
  Yi as EFFECT_SPECIAL,
  Js as ENEMY_APPEAR,
  Qs as ENEMY_RECOVER_ALL,
  Zs as ENEMY_TRANSFORM,
  cs as ERASE_EVENT,
  gs as ERASE_PICTURE,
  ka as EXIT_EVENT_PROCESSING,
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
  Es as FADEIN_SCREEN,
  Cs as FADEOUT_BGM,
  Os as FADEOUT_BGS,
  ds as FADEOUT_SCREEN,
  jo as FILENAME_ACTORS,
  ti as FILENAME_ANIMATIONS,
  Qo as FILENAME_ARMORS,
  Ko as FILENAME_CLASSES,
  oi as FILENAME_COMMON_EVENTS,
  Jo as FILENAME_ENEMIES,
  $o as FILENAME_ITEMS,
  ii as FILENAME_MAP_INFOS,
  Xo as FILENAME_SKILLS,
  ei as FILENAME_STATES,
  wo as FILENAME_SYSTEM,
  ni as FILENAME_TILESET,
  Zo as FILENAME_TROOPS,
  zo as FILENAME_WEAPONS,
  At as FLAG_ID_AUTO_BATTLE,
  _t as FLAG_ID_GUARD,
  lt as FLAG_ID_PRESERVE_TP,
  Tt as FLAG_ID_SUBSTITUTE,
  _s as FLASH_SCREEN,
  ri as FOLDER_AUDIO,
  Lo as FOLDER_AUDIO_BGM,
  ho as FOLDER_AUDIO_BGS,
  Do as FOLDER_AUDIO_ME,
  Po as FOLDER_AUDIO_SE,
  ai as FOLDER_DATA,
  si as FOLDER_IMG,
  vo as FOLDER_IMG_BATTLEBACK1,
  Fo as FOLDER_IMG_BATTLEBACK2,
  Ho as FOLDER_IMG_CHACTERS,
  ko as FOLDER_IMG_ENEMIES,
  Uo as FOLDER_IMG_FACES,
  Go as FOLDER_IMG_PARALLACES,
  xo as FOLDER_IMG_PICTURES,
  Bo as FOLDER_IMG_SV_ACTORS,
  bo as FOLDER_IMG_SV_ENEMIES,
  Vo as FOLDER_IMG_SYSTEM,
  qo as FOLDER_IMG_TILESETS,
  Wo as FOLDER_IMG_TITLES1,
  Yo as FOLDER_IMG_TITLES2,
  ci as FOLDER_JS,
  tr as FORCE_ACTION,
  sr as GAME_OVER,
  ps as GATHER_FOLLOWERS,
  vs as GET_LOCATION_INFO,
  is as GET_ONOFF_VEHICLE,
  Vi as HITTYPE_CERTAIN,
  Wi as HITTYPE_MAGICAL,
  qi as HITTYPE_PHYSICAL,
  Kn as INPUT_NUMBER,
  Ua as LABEL,
  ki as LABELS_DATA_WEAPON,
  Ga as LABEL_JUMP,
  Mc as LABEL_REGISTRY_JP,
  Hn as LABEL_SET_DATA,
  m as LABEL_SET_ITEM_EFFECT,
  i as LABEL_SET_TRAIT,
  Fa as LOOP,
  Ha as LOOP_BREAK,
  W as MODULE_DATA,
  Y as MODULE_SYSTEM,
  P as MODULE_TRAIT,
  us as MOVE_PICTURE,
  yc as MockSystemLabelDataTypes,
  Us as NAME_INPUT_PROCESSING,
  Ca as NO_OPERATION,
  or as OPEN_MENU_SCREEN,
  ar as OPEN_SAVE_SCREEN,
  mt as PARTY_ABILITY_CANCEL_SURPRISE,
  Et as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  rt as PARTY_ABILITY_ENCOUNTER_HALF,
  ct as PARTY_ABILITY_ENCOUNTER_NONE,
  dt as PARTY_ABILITY_GOLD_DOUBLE,
  pt as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Jn as PLAY_BGM,
  Zn as PLAY_BGS,
  eo as PLAY_ME,
  Ls as PLAY_MOVIE,
  to as PLAY_SE,
  pr as PLUGIN_COMMAND_MV,
  dr as PLUGIN_COMMAND_MZ,
  bs as RECOVER_ALL,
  re as REGULAR_PARAM_AGI,
  oe as REGULAR_PARAM_ATK,
  ie as REGULAR_PARAM_DEF,
  ce as REGULAR_PARAM_LUK,
  ae as REGULAR_PARAM_MATK,
  te as REGULAR_PARAM_MAX_HP,
  ne as REGULAR_PARAM_MAX_MP,
  se as REGULAR_PARAM_MDEF,
  fs as RESUME_BGM,
  rr as RETURN_TO_TITLE_SCREEN,
  Rs as ROTATE_PICTURE,
  tc as ROUTE_CHANGE_BLEND_MODE,
  qr as ROUTE_CHANGE_FREQ,
  Zr as ROUTE_CHANGE_IMAGE,
  ec as ROUTE_CHANGE_OPACITY,
  Vr as ROUTE_CHANGE_SPEED,
  Xr as ROUTE_DIR_FIX_OFF,
  Kr as ROUTE_DIR_FIX_ON,
  Er as ROUTE_END,
  Or as ROUTE_JUMP,
  Cr as ROUTE_MOVE_AWAY,
  fr as ROUTE_MOVE_BACKWARD,
  Ar as ROUTE_MOVE_DOWN,
  Nr as ROUTE_MOVE_FORWARD,
  _r as ROUTE_MOVE_LEFT,
  yr as ROUTE_MOVE_LOWER_L,
  ur as ROUTE_MOVE_LOWER_R,
  gr as ROUTE_MOVE_RANDOM,
  Tr as ROUTE_MOVE_RIGHT,
  Sr as ROUTE_MOVE_TOWARD,
  lr as ROUTE_MOVE_UP,
  Rr as ROUTE_MOVE_UPPER_L,
  Ir as ROUTE_MOVE_UPPER_R,
  nc as ROUTE_PLAY_SE,
  oc as ROUTE_SCRIPT,
  jr as ROUTE_STEP_ANIME_OFF,
  wr as ROUTE_STEP_ANIME_ON,
  br as ROUTE_SWITCH_OFF,
  Br as ROUTE_SWITCH_ON,
  zr as ROUTE_THROUGH_OFF,
  $r as ROUTE_THROUGH_ON,
  Jr as ROUTE_TRANSPARENT_OFF,
  Qr as ROUTE_TRANSPARENT_ON,
  Hr as ROUTE_TURN_180D,
  Fr as ROUTE_TURN_90D_L,
  vr as ROUTE_TURN_90D_R,
  kr as ROUTE_TURN_90D_R_L,
  xr as ROUTE_TURN_AWAY,
  Lr as ROUTE_TURN_DOWN,
  Pr as ROUTE_TURN_LEFT,
  Ur as ROUTE_TURN_RANDOM,
  Dr as ROUTE_TURN_RIGHT,
  Gr as ROUTE_TURN_TOWARD,
  hr as ROUTE_TURN_UP,
  Mr as ROUTE_WAIT,
  Yr as ROUTE_WALK_ANIME_OFF,
  Wr as ROUTE_WALK_ANIME_ON,
  Ns as SAVE_BGM,
  Io as SCHEMA_COMMAND_ANY_AUDIO,
  Ao as SCHEMA_COMMAND_CALL_COMMON_EVENT,
  To as SCHEMA_COMMAND_INPUT_NUMBER,
  Fc as SCHEMA_COMMAND_SCROLL_TEXT_BODY,
  vc as SCHEMA_COMMAND_SCROLL_TEXT_HEAD,
  yo as SCHEMA_COMMAND_SHOW_CHOICES,
  lo as SCHEMA_COMMAND_SHOW_CHOICE_ITEM,
  Ro as SCHEMA_COMMAND_SHOW_MESSAGE,
  _a as SCHEMA_DAMAGE,
  $t as SCHEMA_DATA_ACTOR,
  zt as SCHEMA_DATA_ARMMOR,
  Qt as SCHEMA_DATA_CLASS,
  tn as SCHEMA_DATA_ENEMY,
  on as SCHEMA_DATA_ITEM,
  io as SCHEMA_DATA_MAP_INFO,
  nn as SCHEMA_DATA_SKILL,
  Jt as SCHEMA_DATA_STATE,
  Zt as SCHEMA_DATA_WEAPON,
  _c as SCHEMA_SYSTEM_ADVANCED,
  Pi as SCHEMA_TRAIT,
  cr as SCRIPT_EVAL,
  mr as SCRIPT_EVAL_BODY,
  ns as SCROLL_MAP,
  fa as SELECT_ITEM,
  ts as SET_EVENT_LOCATION,
  os as SET_MOVEMENT_ROUTE,
  es as SET_VEHICLE_LOCATION,
  Ss as SET_WEATHER_EFFECT,
  Ts as SHAKE_SCREEN,
  Hs as SHOP_PROCESSING,
  ks as SHOP_PROCESSING_BODY,
  ss as SHOW_ANIMATION,
  rs as SHOW_BALLOON_ICON,
  er as SHOW_BATTLE_ANIMATION,
  wn as SHOW_CHOICES,
  jn as SHOW_CHOICES_ITEM,
  Yn as SHOW_MESSAGE,
  Na as SHOW_MESSAGE_BODY,
  ys as SHOW_PICTURE,
  Oa as SHOW_SCROLLING_TEXT,
  Ma as SHOW_SCROLLING_TEXT_BODY,
  Da as SKIP,
  wi as SPECIAL_EFFECT_ESCAPE,
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
  In as SRC_ARMOR_TYPES,
  ia as SRC_COLOR,
  $i as SRC_DATA_ACTOR,
  ta as SRC_DATA_ARMOR,
  na as SRC_DATA_CLASS,
  un as SRC_DATA_COMMON_EVNET,
  Ji as SRC_DATA_ENEMY,
  Zi as SRC_DATA_ITEMS,
  Qi as SRC_DATA_MAP,
  Le as SRC_DATA_SKILL,
  S as SRC_DATA_STATE,
  oa as SRC_DATA_TROOP,
  zi as SRC_DATA_VARIABLE,
  ea as SRC_DATA_WEAPON,
  gn as SRC_ELEMENTS,
  aa as SRC_EQUIP_TYPES,
  Ce as SRC_PARAMS_EXTRA,
  g as SRC_PARAMS_REGULAR,
  Ne as SRC_PARAMS_SPECIAL,
  ra as SRC_SKILL_TYPES,
  sa as SRC_SWITCHES,
  fe as SRC_TRAIT_COLLAPS,
  Oe as SRC_TRAIT_PARTY_ABILITY,
  Me as SRC_TRAIT_SPECIAL_FLAG,
  Rn as SRC_WEAPON_TYPES,
  Ms as STOP_SE,
  Is as TINT_PICTURE,
  As as TINT_SCREEN,
  Ze as TRAIT_ACTION_PLUS,
  Be as TRAIT_ATTACK_ELEMENT,
  We as TRAIT_ATTACK_SKILL,
  Ve as TRAIT_ATTACK_SPEED,
  be as TRAIT_ATTACK_STATE,
  qe as TRAIT_ATTACK_TIMES,
  tt as TRAIT_COLLAPSE_TYPE,
  Fe as TRAIT_DEBUFF_RATE,
  ve as TRAIT_ELEMENT_RATE,
  $e as TRAIT_EQUIP_ARMOR_TYPE,
  ze as TRAIT_EQUIP_LOCK,
  Qe as TRAIT_EQUIP_SEAL,
  Xe as TRAIT_EQUIP_WEAPON_TYPE,
  Ue as TRAIT_PARAM,
  nt as TRAIT_PARTY_ABILITY,
  je as TRAIT_SKILL_ADD,
  Ke as TRAIT_SKILL_SEAL,
  Ye as TRAIT_SKILL_TYPE_ADD,
  we as TRAIT_SKILL_TYPE_SEAL,
  Je as TRAIT_SLOT_TYPE,
  xe as TRAIT_SPARAM,
  et as TRAIT_SPECIAL_FLAG,
  He as TRAIT_STATE_RATE,
  ke as TRAIT_STATE_RESIST,
  Ge as TRAIT_XPARAM,
  Za as TRANSFER_PLAYER,
  Li as TYPENAME_TRAIT,
  Ct as TraitDescriptor,
  ls as WAIT,
  gi as buildCollapsSource,
  Ni as buildExtraParamSource,
  Si as buildPartyAbilitySource,
  Ci as buildRegularParamSource,
  Oi as buildSpecialFlagSource,
  fi as buildSpecialParamSource,
  fc as createActorControlChars,
  h as createControlCharFormat,
  Pe as createNoteEntity,
  Oc as createSystemVariableControlChars,
  Ln as defineEffectAddBuff,
  hn as defineEffectAddDebuff,
  On as defineEffectAddState,
  Fn as defineEffectCommonEvent,
  fn as defineEffectGainTp,
  pa as defineEffectGrow,
  Dn as defineEffectLearnSkill,
  Cn as defineEffectRecoverHp,
  Nn as defineEffectRecoverMp,
  Pn as defineEffectRemoveBuff,
  vn as defineEffectRemoveDebuff,
  Mn as defineEffectRemoveState,
  Ri as extraParamName,
  yt as foldCollapsOptions,
  It as foldExtraParam,
  ut as foldPartyAbilityOptions,
  Rt as foldRegularParam,
  St as foldSpecialFlag,
  gt as foldSpecialParams,
  ca as formatItemEffectText,
  Pc as fromArrayCommonEvent,
  Dc as fromArrayInputNumber,
  Gc as fromArraySetupChoice,
  kc as fromArraySetupChoiceItem,
  Cc as fromStringArray,
  li as getArmorTypes,
  Nc as getControlChars,
  Ei as getElementTypes,
  Ai as getEquipTypes,
  gc as getNoteValue,
  yi as getParamNames,
  _i as getSkillTypes,
  di as getVariableNames,
  Ti as getWeaponTypes,
  Xc as isCommandAudio,
  $c as isCommandCommonEvent,
  Jc as isCommandInputNumber,
  Qc as isCommandShowChoiceItem,
  zc as isCommandShowChoices,
  Zc as isCommandShowMessage,
  ya as isDataActor,
  ua as isDataArmor,
  Sa as isDataClass,
  Ia as isDataEnemy,
  Ta as isDataItem,
  Ec as isDataMapInfo,
  la as isDataSkill,
  ga as isDataState,
  Ra as isDataWeapon,
  Xi as isValid,
  Ki as joinSourceKey,
  Di as makeActorData,
  vi as makeArmorData,
  a as makeAudioFileParams,
  Fi as makeClassData,
  Lc as makeCommand2_CommonEvent,
  Hc as makeCommand2_ShowChoiceItem,
  l as makeCommandAudioAny,
  wc as makeCommandChangeBattleBGM,
  Kc as makeCommandChangeDefeatME,
  jc as makeCommandChangeVictoryME,
  hc as makeCommandInputNumber,
  Vc as makeCommandPlayBGM,
  qc as makeCommandPlayBGS,
  Wc as makeCommandPlayME,
  Yc as makeCommandPlaySE,
  Bc as makeCommandSetupChoice,
  uo as makeCommandShowMessage,
  cc as makeCommonEventData,
  D as makeDamage,
  en as makeDropItem,
  Gi as makeEnemyAction,
  xi as makeEnemyData,
  oo as makeEventPageCondition,
  Bi as makeItemData,
  rc as makeMapData,
  ic as makeMapEvent,
  no as makeMapEventIamge,
  ac as makeMapEventPage,
  sc as makeMapInfoData,
  f as makeRegex,
  bi as makeSkillData,
  Tc as makeSoundsArray,
  Hi as makeStateData,
  Ac as makeSystemAdvanced,
  mc as makeTroopData,
  dc as makeTroopEventConditions,
  pc as makeTroopMember,
  Ui as makeWeaponData,
  mi as mergeDomainLabel,
  pi as mergeNestedPrimitiveRecords,
  q as mergeWithDefaults,
  hi as normalizeDataActor,
  Rc as readNote,
  De as readNoteEx,
  uc as readNoteObject,
  ui as regularParamName,
  Ic as replaceNote,
  ma as resolveItemEffectLabels,
  Mi as resolveTraitLabels,
  ji as sanitizeKey,
  Sc as setNoteValue,
  Ii as specialParamName,
  M as testUnknonwKey,
  Eo as toArrayCommonEvent,
  _o as toArrayInputNumber,
  xc as toArraySetupChoice,
  Uc as toArraySetupChoiceItem,
  u as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
