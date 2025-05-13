import L from "ajv";
const Ro = "bgm", uo = "se", Io = "me", go = "bgs", So = "battlebacks1", No = "battlebacks2", Co = "characters", fo = "enemies", Oo = "faces", Lo = "parallaxes", Mo = "pictures", Po = "sv_actors", Do = "sv_enemies", vo = "system", ho = "tilesets", Fo = "titles1", Ho = "titles2", Uo = "System.json", ko = "Actors.json", xo = "Classes.json", Go = "Skills.json", Bo = "Items.json", bo = "Weapons.json", Vo = "Armors.json", Wo = "Enemies.json", qo = "Troops.json", Yo = "States.json", wo = "Animations.json", jo = "Tilesets.json", Ko = "CommonEvents.json", Xo = "MapInfos.json", $o = "data", zo = "img", Qo = "audio", Jo = "js", V = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const r = t[o];
    typeof r == "string" && (n[o] = r);
  }
  return n;
}, Zo = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: V(e.options, t.options ?? {})
}), ei = (e, t) => {
  const n = {};
  for (const o in e) {
    const r = e[o], p = t[o] ?? {};
    n[o] = V(
      r,
      p
    );
  }
  return n;
}, _ = (e, t) => ({
  name: e,
  id: t
}), ti = (e) => e.variables.map(_), ni = (e) => e.elements.map(_), oi = (e) => e.equipTypes.map(_), ii = (e) => e.skillTypes.map(_), ai = (e) => e.weaponTypes.map(_), si = (e) => e.armorTypes.map(_), ri = (e) => e.terms.params.map(_), T = "rmmz", M = "trait", W = "data", q = "system", ve = 11, he = 12, Fe = 13, He = 14, Ue = 21, ke = 22, xe = 23, Ge = 31, Be = 32, be = 33, Ve = 34, We = 35, qe = 41, Ye = 42, we = 43, je = 44, Ke = 51, Xe = 52, $e = 53, ze = 54, Qe = 55, Je = 61, Ze = 62, et = 63, tt = 64, nt = 0, ot = 1, it = 2, at = 3, st = 0, rt = 1, ct = 2, mt = 3, pt = 4, dt = 5, Et = 0, At = 1, _t = 2, Tt = 3, Y = 0, w = 1, j = 2, K = 3, X = 4, $ = 5, z = 6, Q = 7, J = 8, Z = 9, ee = 0, te = 1, ne = 2, oe = 3, ie = 4, ae = 5, se = 6, re = 7, ce = 0, me = 1, pe = 2, de = 3, Ee = 4, Ae = 5, _e = 6, Te = 7, le = 8, ye = 9, ci = (e, t) => {
  switch (e) {
    case ee:
      return t.maxHp;
    case te:
      return t.maxMp;
    case ne:
      return t.atk;
    case oe:
      return t.def;
    case ie:
      return t.matk;
    case ae:
      return t.mdef;
    case se:
      return t.agi;
    case re:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, mi = (e, t) => {
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
}, pi = (e, t) => {
  switch (e) {
    case ye:
      return t.experienceRate;
    case ce:
      return t.targetRate;
    case le:
      return t.floorDamageRate;
    case me:
      return t.guradEffectRate;
    case Ee:
      return t.mpCostRate;
    case Ae:
      return t.tpChargeRate;
    case _e:
      return t.physicalDamageRate;
    case Te:
      return t.magicDamageRate;
    case de:
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
    id: it,
    name: e.instantCollaps
  },
  {
    id: at,
    name: e.noneCollaps
  }
], yt = (e) => [
  {
    id: st,
    name: e.encounterHalf
  },
  {
    id: rt,
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
    id: dt,
    name: e.dropItemDouble
  }
], Rt = (e) => [
  { id: ee, name: e.maxHp },
  { id: te, name: e.maxMp },
  { id: ne, name: e.atk },
  { id: oe, name: e.def },
  { id: ie, name: e.matk },
  { id: ae, name: e.mdef },
  { id: se, name: e.agi },
  { id: re, name: e.luk }
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
    id: de,
    name: e.pharmacology
  },
  {
    id: Ee,
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
    id: Et,
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
], y = (e, t, n) => ({
  items: n(t.options),
  label: t.domainName,
  source: {
    author: T,
    module: M,
    kind: e
  }
}), di = (e, t) => y(
  Ce,
  e,
  (n) => lt(n, t)
), Ei = (e) => y(fe, e, yt), Ai = (e) => y(u, e, Rt), _i = (e) => y(Se, e, ut), Ti = (e) => y(Ne, e, It), li = (e) => y(Oe, e, gt), c = "{name}", l = "{name} * {value}%", v = "{name} + {value}%", h = "{value}", i = {
  domainName: "特徴",
  options: {
    regularParam: {
      domainName: "基本能力値",
      format: l,
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
      format: l,
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
      format: l
    },
    debuffRate: {
      domainName: "弱体有効度",
      format: l
    },
    stateRate: {
      domainName: "ステート有効度",
      format: l
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
      format: l
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
const yi = (e) => [
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
  kt(e.specialFlag),
  xt(e.collaps),
  Gt(e.partyAbility)
], U = (e, t) => typeof t == "string" ? t : e, a = (e, t, n, o) => {
  const r = U(t.domainName, n.domainName), p = U(t.format, n.format);
  return new St(e, r, p, o);
}, Re = () => ({
  module: q,
  author: T,
  kind: In
}), ue = (e) => ({
  module: W,
  author: T,
  kind: e
}), E = (e) => ({
  author: T,
  module: M,
  kind: e
}), Ie = (e) => ({
  author: T,
  module: q,
  kind: e
}), Nt = (e) => a(
  ve,
  i.options.elementRate,
  e,
  Re()
), Ct = (e) => a(
  he,
  i.options.debuffRate,
  e,
  E(u)
), ft = (e) => a(
  Fe,
  i.options.stateRate,
  e,
  E(u)
), Ot = (e) => a(
  He,
  i.options.stateResist,
  e,
  ue(g)
), Lt = (e) => a(
  Ue,
  i.options.regularParam,
  e,
  E(u)
), Mt = (e) => a(
  ke,
  i.options.extraParam,
  e,
  E(Se)
), Pt = (e) => a(
  xe,
  i.options.specialParam,
  e,
  E(Ne)
), Dt = (e) => a(
  Ge,
  i.options.attackElement,
  e,
  Re()
), vt = (e) => a(
  Be,
  i.options.attackState,
  e,
  E(g)
), ht = (e) => a(be, i.options.attackSpeed, e), Ft = (e) => a(Ve, i.options.attackTimes, e), Ht = (e) => a(
  We,
  i.options.attackSkill,
  e,
  ue(Le)
), Ut = (e) => a(Je, i.options.actionPlus, e), kt = (e) => a(
  Ze,
  i.options.specialFlag,
  e,
  E(Oe)
), xt = (e) => a(
  et,
  i.options.collaps,
  e,
  E(Ce)
), Gt = (e) => a(
  tt,
  i.options.partyAbility,
  e,
  E(fe)
), Bt = (e) => a(
  Ke,
  i.options.equipWeaponType,
  e,
  Ie(Rn)
), bt = (e) => a(
  Xe,
  i.options.equipArmorType,
  e,
  Ie(un)
), Vt = (e) => a($e, i.options.equipLock, e), Wt = (e) => a(ze, i.options.equipSeal, e), qt = (e) => a(we, i.options.skillAdd, e), Yt = (e) => a(je, i.options.skillSeal, e), wt = (e) => a(Qe, i.options.slotType, e), jt = (e) => a(
  qe,
  i.options.skillTypeAdd,
  e
), Kt = (e) => a(
  Ye,
  i.options.skillTypeSeal,
  e
), Ri = "Trait", ui = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, Ii = (e = {}) => ({
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
}, gi = (e) => ({
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
}), Si = (e = {}) => ({
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
}, Ni = (e = {}) => ({
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
}, Ci = (e = {}) => ({
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
}, fi = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Oi = (e = {}) => ({
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
}), Li = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Mi = (e = {}) => {
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
}, Pi = (e = {}) => ({
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
}), Di = (e = {}) => ({
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
}, vi = 0, hi = 1, Fi = 2, on = "{name} + {value1}", k = "{name} {value1}%", f = "{value1}% + {value2}", x = "{name} {value1}ターン", R = "{name}", m = {
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
      format: R
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
      format: R
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: R
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: k
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: R
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: k
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: R
    }
  }
}, an = 11, sn = 12, rn = 13, cn = 21, mn = 22, pn = 31, dn = 32, En = 33, An = 34, Hi = 41, _n = 42, Tn = 43, ln = 44, Ui = 0, ge = /^[a-zA-Z0-9]+$/, ki = (e) => ge.test(e) ? e : void 0, O = (e) => typeof e == "string" ? ge.test(e) : !1, xi = (e) => [e.author, e.module, e.kind].join("."), Gi = (e) => O(e.author) && O(e.module) && O(e.kind), u = "params", Se = "xparams", Ne = "sparams", Ce = "collaps", fe = "partyAbiility", Oe = "sflag", Bi = "actor", bi = "variables", Vi = "map", Wi = "enemy", g = "state", Le = "skill", qi = "items", Yi = "weapon", wi = "armor", ji = "class", yn = "common_event", Ki = "troop", Xi = "colors", Rn = "weaponTypes", un = "armorTypes", $i = "equipTypes", zi = "switches", Qi = "skillTypes", In = "elements", G = "{value1}", B = "{value2}", b = "{name}";
class gn {
  constructor(t, n, o, r, p) {
    this.codeId = t, this.label = n, this.format = o, this.description = r, this.dataSource = p;
  }
  formatText(t, n) {
    const o = this.format.replaceAll(G, t.value1.toString()).replaceAll(B, t.value2.toString());
    return this.dataSource ? o.replaceAll(
      b,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue1() {
    return this.format.includes(G);
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
const Ji = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), Zi = (e) => [
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
  kind: u
}), N = (e) => ({
  author: T,
  module: W,
  kind: e
}), d = (e, t, n, o) => {
  const r = n.domainName ?? t.domainName, p = n.format ?? t.format, De = n.desc ?? t.desc;
  return new gn(e, r, p, De, o);
}, Sn = (e) => d(
  an,
  m.options.recoverHp,
  e
), Nn = (e) => d(
  sn,
  m.options.recoverMp,
  e
), Cn = (e) => d(rn, m.options.gainTp, e), ea = (e) => d(_n, m.options.grow, e), fn = (e) => d(
  cn,
  m.options.addState,
  e,
  N(g)
), On = (e) => d(
  mn,
  m.options.removeState,
  e,
  N(g)
), Ln = (e) => d(
  pn,
  m.options.addBuff,
  e,
  S()
), Mn = (e) => d(
  En,
  m.options.removeBuff,
  e,
  S()
), Pn = (e) => d(
  Tn,
  m.options.learnSkill,
  e,
  N(Le)
), Dn = (e) => d(
  dn,
  m.options.addBuff,
  e,
  S()
), vn = (e) => d(
  An,
  m.options.removeDebuff,
  e,
  S()
), hn = (e) => d(
  ln,
  m.options.commonEvent,
  e,
  N(yn)
), ta = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, na = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, oa = {
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
}), ia = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, A = new L(), Un = A.compile(nn), kn = A.compile(tn), xn = A.compile(Xt), Gn = A.compile($t), Bn = A.compile(Jt), bn = A.compile(en), Vn = A.compile(Qt), Wn = A.compile(zt), aa = (e) => Un(e), sa = (e) => kn(e), ra = (e) => xn(e), ca = (e) => Gn(e), ma = (e) => Bn(e), pa = (e) => bn(e), da = (e) => Vn(e), Ea = (e) => Wn(e), Aa = 0, qn = 101, _a = 401, Yn = 102, wn = 402, jn = 103, Ta = 104, la = 105, ya = 405, Ra = 108, ua = 408, Ia = 109, ga = 111, Sa = 411, Na = 112, Ca = 113, fa = 115, Kn = 117, Oa = 118, La = 119, Ma = 121, Pa = 122, Da = 123, va = 124, ha = 125, Fa = 126, Ha = 127, Ua = 128, ka = 129, xa = 132, Ga = 133, Ba = 134, ba = 135, Va = 136, Wa = 137, qa = 138, Ya = 139, wa = 140, ja = 201, Ka = 202, Xa = 203, $a = 204, za = 205, Qa = 206, Ja = 211, Za = 212, es = 213, ts = 214, ns = 216, os = 217, is = 221, as = 222, ss = 223, rs = 224, cs = 225, ms = 230, ps = 231, ds = 232, Es = 233, As = 234, _s = 235, Ts = 236, ls = 241, ys = 242, Rs = 243, us = 244, Is = 245, gs = 246, Ss = 249, Ns = 250, Cs = 251, fs = 261, Os = 282, Ls = 283, Ms = 284, Ps = 285, Ds = 301, vs = 302, hs = 605, Fs = 303, Hs = 311, Us = 312, ks = 313, xs = 314, Gs = 315, Bs = 320, bs = 321, Vs = 322, Ws = 323, qs = 324, Ys = 325, ws = 331, js = 332, Ks = 333, Xs = 334, $s = 335, zs = 336, Qs = 337, Js = 339, Zs = 340, er = 351, tr = 342, nr = 352, or = 353, ir = 354, ar = 355, sr = 655, rr = 356, cr = 357, mr = 0, pr = 1, dr = 2, Er = 3, Ar = 4, _r = 5, Tr = 6, lr = 7, yr = 8, Rr = 9, ur = 10, Ir = 11, gr = 12, Sr = 13, Nr = 14, Cr = 15, fr = 16, Or = 17, Lr = 18, Mr = 19, Pr = 20, Dr = 21, vr = 22, hr = 23, Fr = 24, Hr = 25, Ur = 26, kr = 27, xr = 28, Gr = 29, Br = 30, br = 31, Vr = 32, Wr = 33, qr = 34, Yr = 35, wr = 36, jr = 37, Kr = 38, Xr = 39, $r = 40, zr = 41, Qr = 42, Jr = 43, Zr = 44, ec = 45, tc = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), Xn = () => ({
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}), $n = (e = {}) => ({
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
}), nc = () => ({
  conditions: $n(),
  list: [],
  directionFix: !1,
  image: Xn(),
  moveFrequency: 5,
  moveRoute: {
    list: [],
    repeat: !1,
    skippable: !1,
    wait: !1
  }
}), zn = {
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
}, Qn = (e) => e.toString().padStart(3, "0"), oc = (e = { id: 0 }) => ({
  name: e.name ?? Qn(e.id),
  id: e.id,
  expanded: e.expanded ?? !1,
  order: e.order ?? 0,
  parentId: e.parentId ?? 0,
  scrollX: e.scrollX ?? 0,
  scrollY: e.scrollY ?? 0
}), ic = (e = {}) => ({
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
}), ac = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), sc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), rc = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), cc = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), Jn = new L(), Zn = Jn.compile(zn), mc = (e) => Zn(e), pc = (e = {}) => ({
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
}), dc = {
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
}, s = (e = {}) => ({
  name: e.name ?? "",
  volume: e.volume ?? 100,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
}), Ec = (e) => [
  s(e.cursor),
  s(e.ok),
  s(e.cancel),
  s(e.buzzer),
  s(e.equip),
  s(e.save),
  s(e.load),
  s(e.battleStart),
  s(e.escape),
  s(e.enemyAttack),
  s(e.enemyDamage),
  s(e.enemyCollapse),
  s(e.bossCollapes1),
  s(e.bossCollapes2),
  s(e.actorDamage),
  s(e.actorCollapse),
  s(e.playRecovery),
  s(e.playMiss),
  s(e.playEvasion),
  s(e.playMagicEvasion),
  s(e.playReflection),
  s(e.shop),
  s(e.useItem),
  s(e.useSkill)
], Ac = {
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
}, _c = {
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
}, Me = (e, t) => `<${e}:${t}>`, C = () => /<([^<>:]+):([^>]*)>/g, Tc = (e, t) => Pe(e.note, (n, o) => t(n, o, e)), lc = (e) => Pe(e, (t, n) => [t, n]), Pe = (e, t) => {
  const n = C();
  return Array.from(e.matchAll(n), (o) => t(o[1], o[2]));
}, yc = (e, t) => e.replaceAll(
  C(),
  (n, o, r) => {
    const p = t(o, r);
    return Me(o, p);
  }
), Rc = (e, t) => {
  const n = C(), o = Array.from(e.matchAll(n)).find(
    (r) => r[1] === t
  );
  return o ? o[2] : void 0;
}, uc = (e, t, n) => {
  const o = C();
  return e.replaceAll(o, (r, p) => p === t ? Me(p, n) : r);
}, D = (e, t) => `\\${e}[${t}]`, Ic = (e, t) => t.map((n, o) => ({
  text: n,
  controlChar: D(e, o)
})), gc = (e) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g;
  return Array.from(e.matchAll(t)).map(
    (n) => ({
      char: n[1],
      id: parseInt(n[2], 10)
    })
  );
}, eo = "N", to = "V", Sc = (e) => e.map((t) => ({
  text: t.name,
  controlChar: D(eo, t.id)
})), Nc = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: D(to, n)
})).filter((t) => t.text !== ""), no = {
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
}, Cc = {
  rpg: {
    damage: Hn,
    data: Fn,
    traits: i,
    itemEffect: m
  },
  global: no
}, fc = (e, t = 0) => ({
  code: Kn,
  indent: t,
  parameters: oo(e ?? {})
}), Oc = (e) => ({
  eventId: e[0]
}), oo = (e) => [e.eventId ?? 0], io = {
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
}, ao = (e) => [e.variableId ?? 0, e.digits ?? 0], Lc = (e) => ({
  variableId: e[0],
  digits: e[1]
}), Mc = (e, t = 0) => ({
  code: jn,
  indent: t,
  parameters: ao(e ?? {})
}), so = {
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
}, Pc = {
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
}, Dc = {
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
}, vc = (e, t = 0) => ({
  code: wn,
  indent: t,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), hc = (e) => ({
  index: e[0],
  name: e[1]
}), Fc = (e) => [e.index ?? 0, e.name ?? ""], Hc = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Uc = (e) => [
  e.choices ?? [],
  e.cancelType ?? 0,
  e.defaultType ?? 0,
  e.positionType ?? 2,
  e.background ?? 0
], kc = (e, t = 0) => ({
  code: Yn,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.choices) ?? [],
    (e == null ? void 0 : e.cancelType) ?? 0,
    (e == null ? void 0 : e.defaultType) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.background) ?? 0
  ]
}), ro = {
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
}, co = {
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
}, mo = (e, t = 0) => ({
  code: qn,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.facename) ?? "",
    (e == null ? void 0 : e.faceIndex) ?? 0,
    (e == null ? void 0 : e.background) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.speakerName) ?? ""
  ]
}), xc = {
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
  makeCommand: (e, t = 0) => mo(e, t)
}, po = {
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
}, I = new L(), Eo = I.compile(io), Ao = I.compile(po), _o = I.compile(co), To = I.compile(ro), lo = I.compile(so), Gc = (e) => Eo(e), Bc = (e) => _o(e), bc = (e) => To(e), Vc = (e) => lo(e), Wc = (e) => Ao(e);
export {
  Zs as ABORT_BATTLE,
  T as AUTHOR_RMMZ,
  Ds as BATTLE_PROCESSING,
  Vs as CHANGE_ACTOR_IMAGES,
  Ua as CHANGE_ARMORS,
  Ls as CHANGE_BATTLE_BACKGROUND,
  xa as CHANGE_BATTLE_BGM,
  bs as CHANGE_CLASS,
  Ya as CHANGE_DEFEAT_ME,
  Va as CHANGE_ENCOUNTER,
  ws as CHANGE_ENEMY_HP,
  js as CHANGE_ENEMY_MP,
  Ks as CHANGE_ENEMY_STATE,
  tr as CHANGE_ENEMY_TP,
  Gs as CHANGE_EXP,
  Wa as CHANGE_FORMATION_ACCESS,
  ha as CHANGE_GOLD,
  Hs as CHANGE_HP,
  Fa as CHANGE_ITEMS,
  ba as CHANGE_MENU_ACCESS,
  Us as CHANGE_MP,
  Bs as CHANGE_NAME,
  qs as CHANGE_NICKNAME,
  Ms as CHANGE_PARALLAX,
  ka as CHANGE_PARTY_MEMBER,
  ns as CHANGE_PLAYER_FOLLOWERS,
  Ys as CHANGE_PROFILE,
  Ba as CHANGE_SAVE_ACCESS,
  Os as CHANGE_TILESET,
  ks as CHANGE_TP,
  Ja as CHANGE_TRANSPARENCY,
  wa as CHANGE_VEHICLE_BGM,
  Ws as CHANGE_VEHICLE_IMAGE,
  Ga as CHANGE_VICTORY_ME,
  Ha as CHANGE_WEAPONS,
  qa as CHANGE_WINDOW_COLOR,
  ot as COLLAPS_BOSS,
  it as COLLAPS_INSTANT,
  at as COLLAPS_NONE,
  nt as COLLAPS_NORMAL,
  Ra as COMMENT,
  ua as COMMENT_BODY,
  Kn as COMMON_EVENT,
  ga as CONDITIONAL_BRANCH,
  Sa as CONDITIONAL_BRANCH_ELSE,
  Da as CONTROL_SELF_SWITCH,
  Ma as CONTROL_SWITCHES,
  va as CONTROL_TIMER,
  Pa as CONTROL_VARIABLES,
  xc as CommandShowMessage,
  Hn as DEFAULT_DAMAGE_LABELS,
  no as DEFAULT_GLOBAL_LABELS,
  ta as DEFAULT_ITEM_LABELS,
  na as DEFAULT_SKILL_LABELS,
  Ac as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  oa as DEFAULT_USABLE_ITEM_LABELS,
  pn as EFFECT_ADD_BUFF,
  dn as EFFECT_ADD_DEBUFF,
  cn as EFFECT_ADD_STATE,
  ln as EFFECT_COMMON_EVENT,
  rn as EFFECT_GAIN_TP,
  _n as EFFECT_GROW,
  Tn as EFFECT_LEARN_SKILL,
  an as EFFECT_RECOVER_HP,
  sn as EFFECT_RECOVER_MP,
  En as EFFECT_REMOVE_BUFF,
  An as EFFECT_REMOVE_DEBUFF,
  mn as EFFECT_REMOVE_STATE,
  Hi as EFFECT_SPECIAL,
  $s as ENEMY_APPEAR,
  Xs as ENEMY_RECOVER_ALL,
  zs as ENEMY_TRANSFORM,
  ts as ERASE_EVENT,
  _s as ERASE_PICTURE,
  fa as EXIT_EVENT_PROCESSING,
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
  as as FADEIN_SCREEN,
  ys as FADEOUT_BGM,
  gs as FADEOUT_BGS,
  is as FADEOUT_SCREEN,
  ko as FILENAME_ACTORS,
  wo as FILENAME_ANIMATIONS,
  Vo as FILENAME_ARMORS,
  xo as FILENAME_CLASSES,
  Ko as FILENAME_COMMON_EVENTS,
  Wo as FILENAME_ENEMIES,
  Bo as FILENAME_ITEMS,
  Xo as FILENAME_MAP_INFOS,
  Go as FILENAME_SKILLS,
  Yo as FILENAME_STATES,
  Uo as FILENAME_SYSTEM,
  jo as FILENAME_TILESET,
  qo as FILENAME_TROOPS,
  bo as FILENAME_WEAPONS,
  Et as FLAG_ID_AUTO_BATTLE,
  At as FLAG_ID_GUARD,
  Tt as FLAG_ID_PRESERVE_TP,
  _t as FLAG_ID_SUBSTITUTE,
  rs as FLASH_SCREEN,
  Qo as FOLDER_AUDIO,
  Ro as FOLDER_AUDIO_BGM,
  go as FOLDER_AUDIO_BGS,
  Io as FOLDER_AUDIO_ME,
  uo as FOLDER_AUDIO_SE,
  $o as FOLDER_DATA,
  zo as FOLDER_IMG,
  So as FOLDER_IMG_BATTLEBACK1,
  No as FOLDER_IMG_BATTLEBACK2,
  Co as FOLDER_IMG_CHACTERS,
  fo as FOLDER_IMG_ENEMIES,
  Oo as FOLDER_IMG_FACES,
  Lo as FOLDER_IMG_PARALLACES,
  Mo as FOLDER_IMG_PICTURES,
  Po as FOLDER_IMG_SV_ACTORS,
  Do as FOLDER_IMG_SV_ENEMIES,
  vo as FOLDER_IMG_SYSTEM,
  ho as FOLDER_IMG_TILESETS,
  Fo as FOLDER_IMG_TITLES1,
  Ho as FOLDER_IMG_TITLES2,
  Jo as FOLDER_JS,
  Js as FORCE_ACTION,
  or as GAME_OVER,
  os as GATHER_FOLLOWERS,
  Ps as GET_LOCATION_INFO,
  Qa as GET_ONOFF_VEHICLE,
  vi as HITTYPE_CERTAIN,
  Fi as HITTYPE_MAGICAL,
  hi as HITTYPE_PHYSICAL,
  jn as INPUT_NUMBER,
  Oa as LABEL,
  fi as LABELS_DATA_WEAPON,
  La as LABEL_JUMP,
  Cc as LABEL_REGISTRY_JP,
  Fn as LABEL_SET_DATA,
  m as LABEL_SET_ITEM_EFFECT,
  i as LABEL_SET_TRAIT,
  Na as LOOP,
  Ca as LOOP_BREAK,
  W as MODULE_DATA,
  q as MODULE_SYSTEM,
  M as MODULE_TRAIT,
  ds as MOVE_PICTURE,
  _c as MockSystemLabelDataTypes,
  Fs as NAME_INPUT_PROCESSING,
  Aa as NO_OPERATION,
  er as OPEN_MENU_SCREEN,
  nr as OPEN_SAVE_SCREEN,
  ct as PARTY_ABILITY_CANCEL_SURPRISE,
  dt as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  st as PARTY_ABILITY_ENCOUNTER_HALF,
  rt as PARTY_ABILITY_ENCOUNTER_NONE,
  pt as PARTY_ABILITY_GOLD_DOUBLE,
  mt as PARTY_ABILITY_RAISE_PREEMPTIVE,
  ls as PLAY_BGM,
  Is as PLAY_BGS,
  Ss as PLAY_ME,
  fs as PLAY_MOVIE,
  Ns as PLAY_SE,
  rr as PLUGIN_COMMAND_MV,
  cr as PLUGIN_COMMAND_MZ,
  xs as RECOVER_ALL,
  se as REGULAR_PARAM_AGI,
  ne as REGULAR_PARAM_ATK,
  oe as REGULAR_PARAM_DEF,
  re as REGULAR_PARAM_LUK,
  ie as REGULAR_PARAM_MATK,
  ee as REGULAR_PARAM_MAX_HP,
  te as REGULAR_PARAM_MAX_MP,
  ae as REGULAR_PARAM_MDEF,
  us as RESUME_BGM,
  ir as RETURN_TO_TITLE_SCREEN,
  Es as ROTATE_PICTURE,
  Jr as ROUTE_CHANGE_BLEND_MODE,
  Br as ROUTE_CHANGE_FREQ,
  zr as ROUTE_CHANGE_IMAGE,
  Qr as ROUTE_CHANGE_OPACITY,
  Gr as ROUTE_CHANGE_SPEED,
  wr as ROUTE_DIR_FIX_OFF,
  Yr as ROUTE_DIR_FIX_ON,
  mr as ROUTE_END,
  Nr as ROUTE_JUMP,
  Ir as ROUTE_MOVE_AWAY,
  Sr as ROUTE_MOVE_BACKWARD,
  pr as ROUTE_MOVE_DOWN,
  gr as ROUTE_MOVE_FORWARD,
  dr as ROUTE_MOVE_LEFT,
  _r as ROUTE_MOVE_LOWER_L,
  Tr as ROUTE_MOVE_LOWER_R,
  Rr as ROUTE_MOVE_RANDOM,
  Er as ROUTE_MOVE_RIGHT,
  ur as ROUTE_MOVE_TOWARD,
  Ar as ROUTE_MOVE_UP,
  lr as ROUTE_MOVE_UPPER_L,
  yr as ROUTE_MOVE_UPPER_R,
  Zr as ROUTE_PLAY_SE,
  ec as ROUTE_SCRIPT,
  qr as ROUTE_STEP_ANIME_OFF,
  Wr as ROUTE_STEP_ANIME_ON,
  xr as ROUTE_SWITCH_OFF,
  kr as ROUTE_SWITCH_ON,
  Kr as ROUTE_THROUGH_OFF,
  jr as ROUTE_THROUGH_ON,
  $r as ROUTE_TRANSPARENT_OFF,
  Xr as ROUTE_TRANSPARENT_ON,
  vr as ROUTE_TURN_180D,
  Dr as ROUTE_TURN_90D_L,
  Pr as ROUTE_TURN_90D_R,
  hr as ROUTE_TURN_90D_R_L,
  Ur as ROUTE_TURN_AWAY,
  fr as ROUTE_TURN_DOWN,
  Or as ROUTE_TURN_LEFT,
  Fr as ROUTE_TURN_RANDOM,
  Lr as ROUTE_TURN_RIGHT,
  Hr as ROUTE_TURN_TOWARD,
  Mr as ROUTE_TURN_UP,
  Cr as ROUTE_WAIT,
  Vr as ROUTE_WALK_ANIME_OFF,
  br as ROUTE_WALK_ANIME_ON,
  Rs as SAVE_BGM,
  io as SCHEMA_COMMAND_CALL_COMMON_EVENT,
  so as SCHEMA_COMMAND_INPUT_NUMBER,
  Dc as SCHEMA_COMMAND_SCROLL_TEXT_BODY,
  Pc as SCHEMA_COMMAND_SCROLL_TEXT_HEAD,
  co as SCHEMA_COMMAND_SHOW_CHOICES,
  ro as SCHEMA_COMMAND_SHOW_CHOICE_ITEM,
  po as SCHEMA_COMMAND_SHOW_MESSAGE,
  ia as SCHEMA_DAMAGE,
  Xt as SCHEMA_DATA_ACTOR,
  $t as SCHEMA_DATA_ARMMOR,
  zt as SCHEMA_DATA_CLASS,
  en as SCHEMA_DATA_ENEMY,
  nn as SCHEMA_DATA_ITEM,
  zn as SCHEMA_DATA_MAP_INFO,
  tn as SCHEMA_DATA_SKILL,
  Qt as SCHEMA_DATA_STATE,
  Jt as SCHEMA_DATA_WEAPON,
  dc as SCHEMA_SYSTEM_ADVANCED,
  ui as SCHEMA_TRAIT,
  ar as SCRIPT_EVAL,
  sr as SCRIPT_EVAL_BODY,
  $a as SCROLL_MAP,
  Ta as SELECT_ITEM,
  Xa as SET_EVENT_LOCATION,
  za as SET_MOVEMENT_ROUTE,
  Ka as SET_VEHICLE_LOCATION,
  Ts as SET_WEATHER_EFFECT,
  cs as SHAKE_SCREEN,
  vs as SHOP_PROCESSING,
  hs as SHOP_PROCESSING_BODY,
  Za as SHOW_ANIMATION,
  es as SHOW_BALLOON_ICON,
  Qs as SHOW_BATTLE_ANIMATION,
  Yn as SHOW_CHOICES,
  wn as SHOW_CHOICES_ITEM,
  qn as SHOW_MESSAGE,
  _a as SHOW_MESSAGE_BODY,
  ps as SHOW_PICTURE,
  la as SHOW_SCROLLING_TEXT,
  ya as SHOW_SCROLLING_TEXT_BODY,
  Ia as SKIP,
  Ui as SPECIAL_EFFECT_ESCAPE,
  ye as SPECIAL_PARAM_EXR,
  le as SPECIAL_PARAM_FDR,
  me as SPECIAL_PARAM_GRD,
  Ee as SPECIAL_PARAM_MCR,
  Te as SPECIAL_PARAM_MDR,
  _e as SPECIAL_PARAM_PDR,
  de as SPECIAL_PARAM_PHA,
  pe as SPECIAL_PARAM_REC,
  Ae as SPECIAL_PARAM_TCR,
  ce as SPECIAL_PARAM_TGR,
  un as SRC_ARMOR_TYPES,
  Xi as SRC_COLOR,
  Bi as SRC_DATA_ACTOR,
  wi as SRC_DATA_ARMOR,
  ji as SRC_DATA_CLASS,
  yn as SRC_DATA_COMMON_EVNET,
  Wi as SRC_DATA_ENEMY,
  qi as SRC_DATA_ITEMS,
  Vi as SRC_DATA_MAP,
  Le as SRC_DATA_SKILL,
  g as SRC_DATA_STATE,
  Ki as SRC_DATA_TROOP,
  bi as SRC_DATA_VARIABLE,
  Yi as SRC_DATA_WEAPON,
  In as SRC_ELEMENTS,
  $i as SRC_EQUIP_TYPES,
  Se as SRC_PARAMS_EXTRA,
  u as SRC_PARAMS_REGULAR,
  Ne as SRC_PARAMS_SPECIAL,
  Qi as SRC_SKILL_TYPES,
  zi as SRC_SWITCHES,
  Ce as SRC_TRAIT_COLLAPS,
  fe as SRC_TRAIT_PARTY_ABILITY,
  Oe as SRC_TRAIT_SPECIAL_FLAG,
  Rn as SRC_WEAPON_TYPES,
  Cs as STOP_SE,
  As as TINT_PICTURE,
  ss as TINT_SCREEN,
  Je as TRAIT_ACTION_PLUS,
  Ge as TRAIT_ATTACK_ELEMENT,
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
  ke as TRAIT_XPARAM,
  ja as TRANSFER_PLAYER,
  Ri as TYPENAME_TRAIT,
  St as TraitDescriptor,
  ms as WAIT,
  di as buildCollapsSource,
  _i as buildExtraParamSource,
  Ei as buildPartyAbilitySource,
  Ai as buildRegularParamSource,
  li as buildSpecialFlagSource,
  Ti as buildSpecialParamSource,
  Sc as createActorControlChars,
  D as createControlCharFormat,
  Me as createNoteEntity,
  Nc as createSystemVariableControlChars,
  Ln as defineEffectAddBuff,
  Dn as defineEffectAddDebuff,
  fn as defineEffectAddState,
  hn as defineEffectCommonEvent,
  Cn as defineEffectGainTp,
  ea as defineEffectGrow,
  Pn as defineEffectLearnSkill,
  Sn as defineEffectRecoverHp,
  Nn as defineEffectRecoverMp,
  Mn as defineEffectRemoveBuff,
  vn as defineEffectRemoveDebuff,
  On as defineEffectRemoveState,
  mi as extraParamName,
  lt as foldCollapsOptions,
  ut as foldExtraParam,
  yt as foldPartyAbilityOptions,
  Rt as foldRegularParam,
  gt as foldSpecialFlag,
  It as foldSpecialParams,
  Ji as formatItemEffectText,
  Oc as fromArrayCommonEvent,
  Lc as fromArrayInputNumber,
  Hc as fromArraySetupChoice,
  hc as fromArraySetupChoiceItem,
  Ic as fromStringArray,
  si as getArmorTypes,
  gc as getControlChars,
  ni as getElementTypes,
  oi as getEquipTypes,
  Rc as getNoteValue,
  ri as getParamNames,
  ii as getSkillTypes,
  ti as getVariableNames,
  ai as getWeaponTypes,
  Gc as isCommandCommonEvent,
  Vc as isCommandInputNumber,
  bc as isCommandShowChoiceItem,
  Bc as isCommandShowChoices,
  Wc as isCommandShowMessage,
  ra as isDataActor,
  ca as isDataArmor,
  Ea as isDataClass,
  pa as isDataEnemy,
  aa as isDataItem,
  mc as isDataMapInfo,
  sa as isDataSkill,
  da as isDataState,
  ma as isDataWeapon,
  Gi as isValid,
  xi as joinSourceKey,
  Ii as makeActorData,
  Si as makeArmorData,
  s as makeAudioFileParams,
  Ni as makeClassData,
  fc as makeCommand2_CommonEvent,
  vc as makeCommand2_ShowChoiceItem,
  Mc as makeCommandInputNumber,
  kc as makeCommandSetupChoice,
  mo as makeCommandShowMessage,
  ac as makeCommonEventData,
  P as makeDamage,
  Zt as makeDropItem,
  Li as makeEnemyAction,
  Mi as makeEnemyData,
  $n as makeEventPageCondition,
  Pi as makeItemData,
  ic as makeMapData,
  tc as makeMapEvent,
  Xn as makeMapEventIamge,
  nc as makeMapEventPage,
  oc as makeMapInfoData,
  C as makeRegex,
  Di as makeSkillData,
  Ec as makeSoundsArray,
  Ci as makeStateData,
  pc as makeSystemAdvanced,
  sc as makeTroopData,
  cc as makeTroopEventConditions,
  rc as makeTroopMember,
  Oi as makeWeaponData,
  Zo as mergeDomainLabel,
  ei as mergeNestedPrimitiveRecords,
  V as mergeWithDefaults,
  gi as normalizeDataActor,
  lc as readNote,
  Pe as readNoteEx,
  Tc as readNoteObject,
  ci as regularParamName,
  yc as replaceNote,
  Zi as resolveItemEffectLabels,
  yi as resolveTraitLabels,
  ki as sanitizeKey,
  uc as setNoteValue,
  pi as specialParamName,
  O as testUnknonwKey,
  oo as toArrayCommonEvent,
  ao as toArrayInputNumber,
  Uc as toArraySetupChoice,
  Fc as toArraySetupChoiceItem,
  y as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
