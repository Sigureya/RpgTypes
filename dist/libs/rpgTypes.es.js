import P from "ajv";
const Ko = "bgm", Xo = "se", $o = "me", zo = "bgs", Qo = "battlebacks1", Jo = "battlebacks2", Zo = "characters", ea = "enemies", ta = "faces", na = "parallaxes", oa = "pictures", aa = "sv_actors", ia = "sv_enemies", ra = "system", sa = "tilesets", ca = "titles1", ma = "titles2", pa = "System.json", da = "Actors.json", Ea = "Classes.json", Aa = "Skills.json", _a = "Items.json", Ta = "Weapons.json", la = "Armors.json", ya = "Enemies.json", ua = "Troops.json", Ra = "States.json", Ia = "Animations.json", ga = "Tilesets.json", Sa = "CommonEvents.json", Ca = "MapInfos.json", Na = "data", fa = "img", Oa = "audio", Ma = "js", q = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const s = t[o];
    typeof s == "string" && (n[o] = s);
  }
  return n;
}, La = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: q(e.options, t.options ?? {})
}), Pa = (e, t) => {
  const n = {};
  for (const o in e) {
    const s = e[o], p = t[o] ?? {};
    n[o] = q(
      s,
      p
    );
  }
  return n;
}, T = (e, t) => ({
  name: e,
  id: t
}), Da = (e) => e.variables.map(T), ha = (e) => e.elements.map(T), va = (e) => e.equipTypes.map(T), Fa = (e) => e.skillTypes.map(T), ka = (e) => e.weaponTypes.map(T), Ha = (e) => e.armorTypes.map(T), Ua = (e) => e.terms.params.map(T), l = "rmmz", D = "trait", Y = "data", w = "system", be = 11, Ve = 12, We = 13, qe = 14, Ye = 21, we = 22, je = 23, Ke = 31, Xe = 32, $e = 33, ze = 34, Qe = 35, Je = 41, Ze = 42, et = 43, tt = 44, nt = 51, ot = 52, at = 53, it = 54, rt = 55, st = 61, ct = 62, mt = 63, pt = 64, dt = 0, Et = 1, At = 2, _t = 3, Tt = 0, lt = 1, yt = 2, ut = 3, Rt = 4, It = 5, gt = 0, St = 1, Ct = 2, Nt = 3, j = 0, K = 1, X = 2, $ = 3, z = 4, Q = 5, J = 6, Z = 7, ee = 8, te = 9, ne = 0, oe = 1, ae = 2, ie = 3, re = 4, se = 5, ce = 6, me = 7, pe = 0, de = 1, Ee = 2, Ae = 3, _e = 4, Te = 5, le = 6, ye = 7, ue = 8, Re = 9, xa = (e, t) => {
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
}, Ba = (e, t) => {
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
}, Ga = (e, t) => {
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
}, ft = (e, t) => [
  {
    id: dt,
    name: t.normal
  },
  {
    id: Et,
    name: e.bossCollaps
  },
  {
    id: At,
    name: e.instantCollaps
  },
  {
    id: _t,
    name: e.noneCollaps
  }
], Ot = (e) => [
  {
    id: Tt,
    name: e.encounterHalf
  },
  {
    id: lt,
    name: e.encounterNone
  },
  {
    id: yt,
    name: e.cancelSurprise
  },
  {
    id: ut,
    name: e.raisePreemptive
  },
  {
    id: Rt,
    name: e.goldDouble
  },
  {
    id: It,
    name: e.dropItemDouble
  }
], Mt = (e) => [
  { id: ne, name: e.maxHp },
  { id: oe, name: e.maxMp },
  { id: ae, name: e.atk },
  { id: ie, name: e.def },
  { id: re, name: e.matk },
  { id: se, name: e.mdef },
  { id: ce, name: e.agi },
  { id: me, name: e.luk }
], Lt = (e) => [
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
], Pt = (e) => [
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
], Dt = (e) => [
  {
    id: gt,
    name: e.autoBattle
  },
  {
    id: St,
    name: e.guard
  },
  {
    id: Ct,
    name: e.substitute
  },
  {
    id: Nt,
    name: e.preventEscape
  }
], R = (e, t, n) => ({
  items: n(t.options),
  label: t.domainName,
  source: {
    author: l,
    module: D,
    kind: e
  }
}), ba = (e, t) => R(
  Oe,
  e,
  (n) => ft(n, t)
), Va = (e) => R(Me, e, Ot), Wa = (e) => R(S, e, Mt), qa = (e) => R(Ne, e, Lt), Ya = (e) => R(fe, e, Pt), wa = (e) => R(Le, e, Dt), c = "{name}", u = "{name} * {value}%", F = "{name} + {value}%", k = "{value}", i = {
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
      format: F
    },
    attackSpeed: {
      domainName: "攻撃速度補正",
      format: k
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: k
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
}, H = "{value}", U = "{name}";
class ht {
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
      U,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue() {
    return this.format.includes(H);
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
const ja = (e) => [
  vt(e.elementRate),
  Ft(e.debuffRate),
  kt(e.stateRate),
  Ht(e.stateResist),
  Ut(e.regularParam),
  xt(e.extraParam),
  Bt(e.specialParam),
  Gt(e.attackElement),
  bt(e.attackState),
  Vt(e.attackSpeed),
  Wt(e.attackTimes),
  qt(e.attackSkill),
  tn(e.skillTypeAdd),
  nn(e.skillTypeSeal),
  Jt(e.skillAdd),
  Zt(e.skillSeal),
  Xt(e.equipWeaponType),
  $t(e.equipArmorType),
  zt(e.equipLock),
  Qt(e.equipSeal),
  en(e.slotType),
  Yt(e.actionPlus),
  wt(e.specialFlag),
  jt(e.collaps),
  Kt(e.partyAbility)
], x = (e, t) => typeof t == "string" ? t : e, r = (e, t, n, o) => {
  const s = x(t.domainName, n.domainName), p = x(t.format, n.format);
  return new ht(e, s, p, o);
}, Ie = () => ({
  module: w,
  author: l,
  kind: Pn
}), ge = (e) => ({
  module: Y,
  author: l,
  kind: e
}), E = (e) => ({
  author: l,
  module: D,
  kind: e
}), Se = (e) => ({
  author: l,
  module: w,
  kind: e
}), vt = (e) => r(
  be,
  i.options.elementRate,
  e,
  Ie()
), Ft = (e) => r(
  Ve,
  i.options.debuffRate,
  e,
  E(S)
), kt = (e) => r(
  We,
  i.options.stateRate,
  e,
  E(S)
), Ht = (e) => r(
  qe,
  i.options.stateResist,
  e,
  ge(C)
), Ut = (e) => r(
  Ye,
  i.options.regularParam,
  e,
  E(S)
), xt = (e) => r(
  we,
  i.options.extraParam,
  e,
  E(Ne)
), Bt = (e) => r(
  je,
  i.options.specialParam,
  e,
  E(fe)
), Gt = (e) => r(
  Ke,
  i.options.attackElement,
  e,
  Ie()
), bt = (e) => r(
  Xe,
  i.options.attackState,
  e,
  E(C)
), Vt = (e) => r($e, i.options.attackSpeed, e), Wt = (e) => r(ze, i.options.attackTimes, e), qt = (e) => r(
  Qe,
  i.options.attackSkill,
  e,
  ge(Pe)
), Yt = (e) => r(st, i.options.actionPlus, e), wt = (e) => r(
  ct,
  i.options.specialFlag,
  e,
  E(Le)
), jt = (e) => r(
  mt,
  i.options.collaps,
  e,
  E(Oe)
), Kt = (e) => r(
  pt,
  i.options.partyAbility,
  e,
  E(Me)
), Xt = (e) => r(
  nt,
  i.options.equipWeaponType,
  e,
  Se(Mn)
), $t = (e) => r(
  ot,
  i.options.equipArmorType,
  e,
  Se(Ln)
), zt = (e) => r(at, i.options.equipLock, e), Qt = (e) => r(it, i.options.equipSeal, e), Jt = (e) => r(et, i.options.skillAdd, e), Zt = (e) => r(tt, i.options.skillSeal, e), en = (e) => r(rt, i.options.slotType, e), tn = (e) => r(
  Je,
  i.options.skillTypeAdd,
  e
), nn = (e) => r(
  Ze,
  i.options.skillTypeSeal,
  e
), Ka = "Trait", Xa = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, $a = (e = {}) => ({
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
}), on = {
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
}, za = (e) => ({
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
}), Qa = (e = {}) => ({
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
}), an = {
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
}, Ja = (e = {}) => ({
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
}), rn = {
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
}, Za = (e = {}) => ({
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
}), sn = {
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
}, ei = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, ti = (e = {}) => ({
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
  damage: h(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), cn = {
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
}, mn = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), ni = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), oi = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => mn())) ?? [],
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
}, pn = {
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
}, ai = (e = {}) => ({
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
  damage: h(e.damage ?? {}),
  effects: [],
  price: 0
}), ii = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: h(e.damage ?? {}),
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
}), dn = {
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
}, En = {
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
}, ri = 0, si = 1, ci = 2, An = "{name} + {value1}", B = "{name} {value1}%", M = "{value1}% + {value2}", G = "{name} {value1}ターン", g = "{name}", m = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: G
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: G
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: M
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: An
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: g
    },
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: M
    },
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: M
    },
    removeBuff: {
      desc: "バフを解除する",
      domainName: "バフ解除",
      format: g
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: g
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: B
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: g
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: B
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: g
    }
  }
}, _n = 11, Tn = 12, ln = 13, yn = 21, un = 22, Rn = 31, In = 32, gn = 33, Sn = 34, mi = 41, Cn = 42, Nn = 43, fn = 44, pi = 0, Ce = /^[a-zA-Z0-9]+$/, di = (e) => Ce.test(e) ? e : void 0, L = (e) => typeof e == "string" ? Ce.test(e) : !1, Ei = (e) => [e.author, e.module, e.kind].join("."), Ai = (e) => L(e.author) && L(e.module) && L(e.kind), S = "params", Ne = "xparams", fe = "sparams", Oe = "collaps", Me = "partyAbiility", Le = "sflag", _i = "actor", Ti = "variables", li = "map", yi = "enemy", C = "state", Pe = "skill", ui = "items", Ri = "weapon", Ii = "armor", gi = "class", On = "common_event", Si = "troop", Ci = "colors", Mn = "weaponTypes", Ln = "armorTypes", Ni = "equipTypes", fi = "switches", Oi = "skillTypes", Pn = "elements", b = "{value1}", V = "{value2}", W = "{name}";
class Dn {
  constructor(t, n, o, s, p) {
    this.codeId = t, this.label = n, this.format = o, this.description = s, this.dataSource = p;
  }
  formatText(t, n) {
    const o = this.format.replaceAll(b, t.value1.toString()).replaceAll(V, t.value2.toString());
    return this.dataSource ? o.replaceAll(
      W,
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
    return this.format.includes(W);
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
const Mi = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), Li = (e) => [
  hn(e.options.recoverHp),
  vn(e.options.recoverMp),
  Fn(e.options.gainTp),
  kn(e.options.addState),
  Hn(e.options.removeState),
  Un(e.options.addBuff),
  Gn(e.options.addDebuff),
  xn(e.options.removeBuff),
  bn(e.options.removeDebuff),
  Bn(e.options.learnSkill),
  Vn(e.options.commonEvent)
], N = () => ({
  author: l,
  module: D,
  kind: S
}), f = (e) => ({
  author: l,
  module: Y,
  kind: e
}), d = (e, t, n, o) => {
  const s = n.domainName ?? t.domainName, p = n.format ?? t.format, Ge = n.desc ?? t.desc;
  return new Dn(e, s, p, Ge, o);
}, hn = (e) => d(
  _n,
  m.options.recoverHp,
  e
), vn = (e) => d(
  Tn,
  m.options.recoverMp,
  e
), Fn = (e) => d(ln, m.options.gainTp, e), Pi = (e) => d(Cn, m.options.grow, e), kn = (e) => d(
  yn,
  m.options.addState,
  e,
  f(C)
), Hn = (e) => d(
  un,
  m.options.removeState,
  e,
  f(C)
), Un = (e) => d(
  Rn,
  m.options.addBuff,
  e,
  N()
), xn = (e) => d(
  gn,
  m.options.removeBuff,
  e,
  N()
), Bn = (e) => d(
  Nn,
  m.options.learnSkill,
  e,
  f(Pe)
), Gn = (e) => d(
  In,
  m.options.addBuff,
  e,
  N()
), bn = (e) => d(
  Sn,
  m.options.removeDebuff,
  e,
  N()
), Vn = (e) => d(
  fn,
  m.options.commonEvent,
  e,
  f(On)
), Di = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, hi = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, vi = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, Wn = {
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
}, qn = {
  domainName: "ダメージ",
  options: {}
}, h = (e = {}) => ({
  type: e.type ?? 0,
  elementId: e.elementId ?? 0,
  formula: e.formula ?? "",
  variance: e.variance ?? 0,
  critical: e.critical ?? !1
}), Fi = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, A = new P(), Yn = A.compile(En), wn = A.compile(dn), jn = A.compile(on), Kn = A.compile(an), Xn = A.compile(cn), $n = A.compile(pn), zn = A.compile(sn), Qn = A.compile(rn), ki = (e) => Yn(e), Hi = (e) => wn(e), Ui = (e) => jn(e), xi = (e) => Kn(e), Bi = (e) => Xn(e), Gi = (e) => $n(e), bi = (e) => zn(e), Vi = (e) => Qn(e), Wi = 0, Jn = 101, De = 401, Zn = 102, eo = 402, to = 103, qi = 104, no = 105, he = 405, ve = 108, Fe = 408, Yi = 109, wi = 111, ji = 411, Ki = 112, Xi = 113, $i = 115, oo = 117, zi = 118, Qi = 119, Ji = 121, Zi = 122, er = 123, tr = 124, nr = 125, or = 126, ar = 127, ir = 128, rr = 129, ao = 132, io = 133, sr = 134, cr = 135, mr = 136, pr = 137, dr = 138, ro = 139, Er = 140, Ar = 201, _r = 202, Tr = 203, lr = 204, yr = 205, ur = 206, Rr = 211, Ir = 212, gr = 213, Sr = 214, Cr = 216, Nr = 217, fr = 221, Or = 222, Mr = 223, Lr = 224, Pr = 225, Dr = 230, hr = 231, vr = 232, Fr = 233, kr = 234, Hr = 235, Ur = 236, so = 241, xr = 242, Br = 243, Gr = 244, co = 245, br = 246, mo = 249, po = 250, Vr = 251, Wr = 261, qr = 282, Yr = 283, wr = 284, jr = 285, Kr = 301, Xr = 302, $r = 605, zr = 303, Qr = 311, Jr = 312, Zr = 313, es = 314, ts = 315, Eo = 320, ns = 321, os = 322, as = 323, Ao = 324, _o = 325, is = 331, rs = 332, ss = 333, cs = 334, ms = 335, ps = 336, ds = 337, Es = 339, As = 340, _s = 351, Ts = 342, ls = 352, ys = 353, us = 354, ke = 355, He = 655, Rs = 356, Is = 357, gs = 0, Ss = 1, Cs = 2, Ns = 3, fs = 4, Os = 5, Ms = 6, Ls = 7, Ps = 8, Ds = 9, hs = 10, vs = 11, Fs = 12, ks = 13, Hs = 14, Us = 15, xs = 16, Bs = 17, Gs = 18, bs = 19, Vs = 20, Ws = 21, qs = 22, Ys = 23, ws = 24, js = 25, Ks = 26, Xs = 27, $s = 28, zs = 29, Qs = 30, Js = 31, Zs = 32, ec = 33, tc = 34, nc = 35, oc = 36, ac = 37, ic = 38, rc = 39, sc = 40, cc = 41, mc = 42, pc = 43, dc = 44, Ec = 45, Ac = (e, t, n = 0) => ({
  code: e,
  indent: n,
  parameters: t
}), _c = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), To = () => ({
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}), lo = (e = {}) => ({
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
}), Tc = () => ({
  conditions: lo(),
  list: [],
  directionFix: !1,
  image: To(),
  moveFrequency: 5,
  moveRoute: {
    list: [],
    repeat: !1,
    skippable: !1,
    wait: !1
  }
}), yo = {
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
}, uo = (e) => e.toString().padStart(3, "0"), lc = (e = { id: 0 }) => ({
  name: e.name ?? uo(e.id),
  id: e.id,
  expanded: e.expanded ?? !1,
  order: e.order ?? 0,
  parentId: e.parentId ?? 0,
  scrollX: e.scrollX ?? 0,
  scrollY: e.scrollY ?? 0
}), yc = (e = {}) => ({
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
}), uc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), Rc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), Ic = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), gc = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), Ro = new P(), Io = Ro.compile(yo), Sc = (e) => Io(e), Cc = (e = {}) => ({
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
}), Nc = {
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
}), fc = (e) => [
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
], Oc = {
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
}, Mc = {
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
}, Ue = (e, t) => `<${e}:${t}>`, O = () => /<([^<>:]+):([^>]*)>/g, Lc = (e, t) => xe(e.note, (n, o) => t(n, o, e)), Pc = (e) => xe(e, (t, n) => [t, n]), xe = (e, t) => {
  const n = O();
  return Array.from(e.matchAll(n), (o) => t(o[1], o[2]));
}, Dc = (e, t) => e.replaceAll(
  O(),
  (n, o, s) => {
    const p = t(o, s);
    return Ue(o, p);
  }
), hc = (e, t) => {
  const n = O(), o = Array.from(e.matchAll(n)).find(
    (s) => s[1] === t
  );
  return o ? o[2] : void 0;
}, vc = (e, t, n) => {
  const o = O();
  return e.replaceAll(o, (s, p) => p === t ? Ue(p, n) : s);
}, v = (e, t) => `\\${e}[${t}]`, Fc = (e, t) => t.map((n, o) => ({
  text: n,
  controlChar: v(e, o)
})), kc = (e) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g;
  return Array.from(e.matchAll(t)).map(
    (n) => ({
      char: n[1],
      id: parseInt(n[2], 10)
    })
  );
}, go = "N", So = "V", Hc = (e) => e.map((t) => ({
  text: t.name,
  controlChar: v(go, t.id)
})), Uc = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: v(So, n)
})).filter((t) => t.text !== ""), Co = {
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
}, xc = {
  rpg: {
    damage: qn,
    data: Wn,
    traits: i,
    itemEffect: m
  },
  global: Co
}, No = {
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
}, fo = {
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
}, Oo = {
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
}, Mo = {
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
}, Lo = {
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
}, Po = {
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
}, Do = {
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
}, y = new P(), ho = y.compile(fo), vo = y.compile(Do), Fo = y.compile(Po), ko = y.compile(Oo), Ho = y.compile(No), Uo = y.compile(Mo), xo = y.compile(Lo), I = (e) => Ho(e), Bc = (e) => xo(e), Gc = (e) => Uo(e), bc = (e) => vo(e), Vc = (e) => Fo(e), Wc = (e) => ko(e), qc = (e) => ho(e), Yc = (e) => I(e) && e.code === De, wc = (e) => I(e) && e.code === he, jc = (e) => I(e) && e.code === Fe, Kc = (e) => I(e) && e.code === ve, Xc = (e) => I(e) && e.code === He, $c = (e) => I(e) && e.code === ke, zc = (e, t = 0) => ({
  code: Eo,
  parameters: [e.actorId, e.name],
  indent: t
}), Qc = (e, t = 0) => ({
  code: Ao,
  parameters: [e.actorId, e.nickname],
  indent: t
}), Jc = (e, t = 0) => ({
  code: _o,
  parameters: [e.actorId, e.profile],
  indent: t
}), Zc = (e, t) => _(e, a({ name: t })), _ = (e, t, n = 0) => ({
  code: e,
  parameters: [a(t)],
  indent: n
}), em = (e, t = 0) => _(so, e, t), tm = (e, t = 0) => _(co, e, t), nm = (e, t = 0) => _(mo, e, t), om = (e, t = 0) => _(po, e, t), am = (e, t = 0) => _(ao, e, t), im = (e, t = 0) => _(io, e, t), rm = (e, t = 0) => _(ro, e, t), sm = (e, t = 0) => ({
  code: oo,
  indent: t,
  parameters: Bo(e ?? {})
}), cm = (e) => ({
  eventId: e[0]
}), Bo = (e) => [e.eventId ?? 0], Be = (e) => [e], mm = (e) => ({
  comment: e[0]
}), Go = (e, t = 0) => ({
  code: ve,
  indent: t,
  parameters: Be(e)
}), bo = (e, t = 0) => ({
  code: Fe,
  indent: t,
  parameters: Be(e)
}), pm = (e, t = 0) => e.map(
  (n, o) => o === 0 ? Go(n, t) : bo(n, t)
), Vo = (e) => [e.variableId ?? 0, e.digits ?? 0], dm = (e) => ({
  variableId: e[0],
  digits: e[1]
}), Em = (e, t = 0) => ({
  code: to,
  indent: t,
  parameters: Vo(e ?? {})
}), Wo = (e = {}) => [(e == null ? void 0 : e.speed) ?? 4, (e == null ? void 0 : e.skip) ?? !1], Am = (e) => ({
  speed: e[0],
  skip: e[1]
}), _m = (e = {}, t = 0) => ({
  code: no,
  indent: t,
  parameters: Wo(e)
}), qo = (e = "") => [e], Tm = (e) => ({
  content: e[0]
}), lm = (e = "", t = 0) => ({
  code: he,
  indent: t ?? 0,
  parameters: qo(e)
}), ym = (e, t = 0) => ({
  code: eo,
  indent: t,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), um = (e) => ({
  index: e[0],
  name: e[1]
}), Rm = (e) => [e.index ?? 0, e.name ?? ""], Im = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), gm = (e) => [
  e.choices ?? [],
  e.cancelType ?? 0,
  e.defaultType ?? 0,
  e.positionType ?? 2,
  e.background ?? 0
], Sm = (e, t = 0) => ({
  code: Zn,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.choices) ?? [],
    (e == null ? void 0 : e.cancelType) ?? 0,
    (e == null ? void 0 : e.defaultType) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.background) ?? 0
  ]
}), Cm = (e, t = 0) => ({
  code: Jn,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.facename) ?? "",
    (e == null ? void 0 : e.faceIndex) ?? 0,
    (e == null ? void 0 : e.background) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.speakerName) ?? ""
  ]
}), Nm = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4]
}), fm = (e) => [
  e.facename,
  e.faceIndex,
  e.background,
  e.positionType,
  e.speakerName
], Om = (e, t = 0) => ({
  code: De,
  indent: t,
  parameters: [e]
}), Yo = (e, t = 0) => ({
  code: ke,
  indent: t,
  parameters: [e]
}), wo = (e, t = 0) => ({
  code: He,
  indent: t,
  parameters: [e]
}), Mm = (e, t = 0) => e.map(
  (n, o) => o === 0 ? Yo(n, t) : wo(n, t)
);
export {
  As as ABORT_BATTLE,
  l as AUTHOR_RMMZ,
  Kr as BATTLE_PROCESSING,
  os as CHANGE_ACTOR_IMAGES,
  ir as CHANGE_ARMORS,
  Yr as CHANGE_BATTLE_BACKGROUND,
  ao as CHANGE_BATTLE_BGM,
  ns as CHANGE_CLASS,
  ro as CHANGE_DEFEAT_ME,
  mr as CHANGE_ENCOUNTER,
  is as CHANGE_ENEMY_HP,
  rs as CHANGE_ENEMY_MP,
  ss as CHANGE_ENEMY_STATE,
  Ts as CHANGE_ENEMY_TP,
  ts as CHANGE_EXP,
  pr as CHANGE_FORMATION_ACCESS,
  nr as CHANGE_GOLD,
  Qr as CHANGE_HP,
  or as CHANGE_ITEMS,
  cr as CHANGE_MENU_ACCESS,
  Jr as CHANGE_MP,
  Eo as CHANGE_NAME,
  Ao as CHANGE_NICKNAME,
  wr as CHANGE_PARALLAX,
  rr as CHANGE_PARTY_MEMBER,
  Cr as CHANGE_PLAYER_FOLLOWERS,
  _o as CHANGE_PROFILE,
  sr as CHANGE_SAVE_ACCESS,
  qr as CHANGE_TILESET,
  Zr as CHANGE_TP,
  Rr as CHANGE_TRANSPARENCY,
  Er as CHANGE_VEHICLE_BGM,
  as as CHANGE_VEHICLE_IMAGE,
  io as CHANGE_VICTORY_ME,
  ar as CHANGE_WEAPONS,
  dr as CHANGE_WINDOW_COLOR,
  Et as COLLAPS_BOSS,
  At as COLLAPS_INSTANT,
  _t as COLLAPS_NONE,
  dt as COLLAPS_NORMAL,
  Fe as COMMENT_BODY,
  ve as COMMENT_HEAD,
  oo as COMMON_EVENT,
  wi as CONDITIONAL_BRANCH,
  ji as CONDITIONAL_BRANCH_ELSE,
  er as CONTROL_SELF_SWITCH,
  Ji as CONTROL_SWITCHES,
  tr as CONTROL_TIMER,
  Zi as CONTROL_VARIABLES,
  qn as DEFAULT_DAMAGE_LABELS,
  Co as DEFAULT_GLOBAL_LABELS,
  Di as DEFAULT_ITEM_LABELS,
  hi as DEFAULT_SKILL_LABELS,
  Oc as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  vi as DEFAULT_USABLE_ITEM_LABELS,
  Rn as EFFECT_ADD_BUFF,
  In as EFFECT_ADD_DEBUFF,
  yn as EFFECT_ADD_STATE,
  fn as EFFECT_COMMON_EVENT,
  ln as EFFECT_GAIN_TP,
  Cn as EFFECT_GROW,
  Nn as EFFECT_LEARN_SKILL,
  _n as EFFECT_RECOVER_HP,
  Tn as EFFECT_RECOVER_MP,
  gn as EFFECT_REMOVE_BUFF,
  Sn as EFFECT_REMOVE_DEBUFF,
  un as EFFECT_REMOVE_STATE,
  mi as EFFECT_SPECIAL,
  ms as ENEMY_APPEAR,
  cs as ENEMY_RECOVER_ALL,
  ps as ENEMY_TRANSFORM,
  Sr as ERASE_EVENT,
  Hr as ERASE_PICTURE,
  $i as EXIT_EVENT_PROCESSING,
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
  Or as FADEIN_SCREEN,
  xr as FADEOUT_BGM,
  br as FADEOUT_BGS,
  fr as FADEOUT_SCREEN,
  da as FILENAME_ACTORS,
  Ia as FILENAME_ANIMATIONS,
  la as FILENAME_ARMORS,
  Ea as FILENAME_CLASSES,
  Sa as FILENAME_COMMON_EVENTS,
  ya as FILENAME_ENEMIES,
  _a as FILENAME_ITEMS,
  Ca as FILENAME_MAP_INFOS,
  Aa as FILENAME_SKILLS,
  Ra as FILENAME_STATES,
  pa as FILENAME_SYSTEM,
  ga as FILENAME_TILESET,
  ua as FILENAME_TROOPS,
  Ta as FILENAME_WEAPONS,
  gt as FLAG_ID_AUTO_BATTLE,
  St as FLAG_ID_GUARD,
  Nt as FLAG_ID_PRESERVE_TP,
  Ct as FLAG_ID_SUBSTITUTE,
  Lr as FLASH_SCREEN,
  Oa as FOLDER_AUDIO,
  Ko as FOLDER_AUDIO_BGM,
  zo as FOLDER_AUDIO_BGS,
  $o as FOLDER_AUDIO_ME,
  Xo as FOLDER_AUDIO_SE,
  Na as FOLDER_DATA,
  fa as FOLDER_IMG,
  Qo as FOLDER_IMG_BATTLEBACK1,
  Jo as FOLDER_IMG_BATTLEBACK2,
  Zo as FOLDER_IMG_CHACTERS,
  ea as FOLDER_IMG_ENEMIES,
  ta as FOLDER_IMG_FACES,
  na as FOLDER_IMG_PARALLACES,
  oa as FOLDER_IMG_PICTURES,
  aa as FOLDER_IMG_SV_ACTORS,
  ia as FOLDER_IMG_SV_ENEMIES,
  ra as FOLDER_IMG_SYSTEM,
  sa as FOLDER_IMG_TILESETS,
  ca as FOLDER_IMG_TITLES1,
  ma as FOLDER_IMG_TITLES2,
  Ma as FOLDER_JS,
  Es as FORCE_ACTION,
  ys as GAME_OVER,
  Nr as GATHER_FOLLOWERS,
  jr as GET_LOCATION_INFO,
  ur as GET_ONOFF_VEHICLE,
  ri as HITTYPE_CERTAIN,
  ci as HITTYPE_MAGICAL,
  si as HITTYPE_PHYSICAL,
  to as INPUT_NUMBER,
  zi as LABEL,
  ei as LABELS_DATA_WEAPON,
  Qi as LABEL_JUMP,
  xc as LABEL_REGISTRY_JP,
  Wn as LABEL_SET_DATA,
  m as LABEL_SET_ITEM_EFFECT,
  i as LABEL_SET_TRAIT,
  Ki as LOOP,
  Xi as LOOP_BREAK,
  Y as MODULE_DATA,
  w as MODULE_SYSTEM,
  D as MODULE_TRAIT,
  vr as MOVE_PICTURE,
  Mc as MockSystemLabelDataTypes,
  zr as NAME_INPUT_PROCESSING,
  Wi as NO_OPERATION,
  _s as OPEN_MENU_SCREEN,
  ls as OPEN_SAVE_SCREEN,
  yt as PARTY_ABILITY_CANCEL_SURPRISE,
  It as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Tt as PARTY_ABILITY_ENCOUNTER_HALF,
  lt as PARTY_ABILITY_ENCOUNTER_NONE,
  Rt as PARTY_ABILITY_GOLD_DOUBLE,
  ut as PARTY_ABILITY_RAISE_PREEMPTIVE,
  so as PLAY_BGM,
  co as PLAY_BGS,
  mo as PLAY_ME,
  Wr as PLAY_MOVIE,
  po as PLAY_SE,
  Rs as PLUGIN_COMMAND_MV,
  Is as PLUGIN_COMMAND_MZ,
  es as RECOVER_ALL,
  ce as REGULAR_PARAM_AGI,
  ae as REGULAR_PARAM_ATK,
  ie as REGULAR_PARAM_DEF,
  me as REGULAR_PARAM_LUK,
  re as REGULAR_PARAM_MATK,
  ne as REGULAR_PARAM_MAX_HP,
  oe as REGULAR_PARAM_MAX_MP,
  se as REGULAR_PARAM_MDEF,
  Gr as RESUME_BGM,
  us as RETURN_TO_TITLE_SCREEN,
  Fr as ROTATE_PICTURE,
  pc as ROUTE_CHANGE_BLEND_MODE,
  Qs as ROUTE_CHANGE_FREQ,
  cc as ROUTE_CHANGE_IMAGE,
  mc as ROUTE_CHANGE_OPACITY,
  zs as ROUTE_CHANGE_SPEED,
  oc as ROUTE_DIR_FIX_OFF,
  nc as ROUTE_DIR_FIX_ON,
  gs as ROUTE_END,
  Hs as ROUTE_JUMP,
  vs as ROUTE_MOVE_AWAY,
  ks as ROUTE_MOVE_BACKWARD,
  Ss as ROUTE_MOVE_DOWN,
  Fs as ROUTE_MOVE_FORWARD,
  Cs as ROUTE_MOVE_LEFT,
  Os as ROUTE_MOVE_LOWER_L,
  Ms as ROUTE_MOVE_LOWER_R,
  Ds as ROUTE_MOVE_RANDOM,
  Ns as ROUTE_MOVE_RIGHT,
  hs as ROUTE_MOVE_TOWARD,
  fs as ROUTE_MOVE_UP,
  Ls as ROUTE_MOVE_UPPER_L,
  Ps as ROUTE_MOVE_UPPER_R,
  dc as ROUTE_PLAY_SE,
  Ec as ROUTE_SCRIPT,
  tc as ROUTE_STEP_ANIME_OFF,
  ec as ROUTE_STEP_ANIME_ON,
  $s as ROUTE_SWITCH_OFF,
  Xs as ROUTE_SWITCH_ON,
  ic as ROUTE_THROUGH_OFF,
  ac as ROUTE_THROUGH_ON,
  sc as ROUTE_TRANSPARENT_OFF,
  rc as ROUTE_TRANSPARENT_ON,
  qs as ROUTE_TURN_180D,
  Ws as ROUTE_TURN_90D_L,
  Vs as ROUTE_TURN_90D_R,
  Ys as ROUTE_TURN_90D_R_L,
  Ks as ROUTE_TURN_AWAY,
  xs as ROUTE_TURN_DOWN,
  Bs as ROUTE_TURN_LEFT,
  ws as ROUTE_TURN_RANDOM,
  Gs as ROUTE_TURN_RIGHT,
  js as ROUTE_TURN_TOWARD,
  bs as ROUTE_TURN_UP,
  Us as ROUTE_WAIT,
  Zs as ROUTE_WALK_ANIME_OFF,
  Js as ROUTE_WALK_ANIME_ON,
  Br as SAVE_BGM,
  Fi as SCHEMA_DAMAGE,
  on as SCHEMA_DATA_ACTOR,
  an as SCHEMA_DATA_ARMMOR,
  rn as SCHEMA_DATA_CLASS,
  pn as SCHEMA_DATA_ENEMY,
  En as SCHEMA_DATA_ITEM,
  yo as SCHEMA_DATA_MAP_INFO,
  dn as SCHEMA_DATA_SKILL,
  sn as SCHEMA_DATA_STATE,
  cn as SCHEMA_DATA_WEAPON,
  Nc as SCHEMA_SYSTEM_ADVANCED,
  Xa as SCHEMA_TRAIT,
  ke as SCRIPT_EVAL,
  He as SCRIPT_EVAL_BODY,
  lr as SCROLL_MAP,
  qi as SELECT_ITEM,
  Tr as SET_EVENT_LOCATION,
  yr as SET_MOVEMENT_ROUTE,
  _r as SET_VEHICLE_LOCATION,
  Ur as SET_WEATHER_EFFECT,
  Pr as SHAKE_SCREEN,
  Xr as SHOP_PROCESSING,
  $r as SHOP_PROCESSING_BODY,
  Ir as SHOW_ANIMATION,
  gr as SHOW_BALLOON_ICON,
  ds as SHOW_BATTLE_ANIMATION,
  Zn as SHOW_CHOICES,
  eo as SHOW_CHOICES_ITEM,
  Jn as SHOW_MESSAGE,
  De as SHOW_MESSAGE_BODY,
  hr as SHOW_PICTURE,
  no as SHOW_SCROLLING_TEXT,
  he as SHOW_SCROLLING_TEXT_BODY,
  Yi as SKIP,
  pi as SPECIAL_EFFECT_ESCAPE,
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
  Ln as SRC_ARMOR_TYPES,
  Ci as SRC_COLOR,
  _i as SRC_DATA_ACTOR,
  Ii as SRC_DATA_ARMOR,
  gi as SRC_DATA_CLASS,
  On as SRC_DATA_COMMON_EVNET,
  yi as SRC_DATA_ENEMY,
  ui as SRC_DATA_ITEMS,
  li as SRC_DATA_MAP,
  Pe as SRC_DATA_SKILL,
  C as SRC_DATA_STATE,
  Si as SRC_DATA_TROOP,
  Ti as SRC_DATA_VARIABLE,
  Ri as SRC_DATA_WEAPON,
  Pn as SRC_ELEMENTS,
  Ni as SRC_EQUIP_TYPES,
  Ne as SRC_PARAMS_EXTRA,
  S as SRC_PARAMS_REGULAR,
  fe as SRC_PARAMS_SPECIAL,
  Oi as SRC_SKILL_TYPES,
  fi as SRC_SWITCHES,
  Oe as SRC_TRAIT_COLLAPS,
  Me as SRC_TRAIT_PARTY_ABILITY,
  Le as SRC_TRAIT_SPECIAL_FLAG,
  Mn as SRC_WEAPON_TYPES,
  Vr as STOP_SE,
  kr as TINT_PICTURE,
  Mr as TINT_SCREEN,
  st as TRAIT_ACTION_PLUS,
  Ke as TRAIT_ATTACK_ELEMENT,
  Qe as TRAIT_ATTACK_SKILL,
  $e as TRAIT_ATTACK_SPEED,
  Xe as TRAIT_ATTACK_STATE,
  ze as TRAIT_ATTACK_TIMES,
  mt as TRAIT_COLLAPSE_TYPE,
  Ve as TRAIT_DEBUFF_RATE,
  be as TRAIT_ELEMENT_RATE,
  ot as TRAIT_EQUIP_ARMOR_TYPE,
  at as TRAIT_EQUIP_LOCK,
  it as TRAIT_EQUIP_SEAL,
  nt as TRAIT_EQUIP_WEAPON_TYPE,
  Ye as TRAIT_PARAM,
  pt as TRAIT_PARTY_ABILITY,
  et as TRAIT_SKILL_ADD,
  tt as TRAIT_SKILL_SEAL,
  Je as TRAIT_SKILL_TYPE_ADD,
  Ze as TRAIT_SKILL_TYPE_SEAL,
  rt as TRAIT_SLOT_TYPE,
  je as TRAIT_SPARAM,
  ct as TRAIT_SPECIAL_FLAG,
  We as TRAIT_STATE_RATE,
  qe as TRAIT_STATE_RESIST,
  we as TRAIT_XPARAM,
  Ar as TRANSFER_PLAYER,
  Ka as TYPENAME_TRAIT,
  ht as TraitDescriptor,
  Dr as WAIT,
  ba as buildCollapsSource,
  qa as buildExtraParamSource,
  Va as buildPartyAbilitySource,
  Wa as buildRegularParamSource,
  wa as buildSpecialFlagSource,
  Ya as buildSpecialParamSource,
  mm as convertCommentArrayToObject,
  Hc as createActorControlChars,
  v as createControlCharFormat,
  Ac as createEventCommand,
  Ue as createNoteEntity,
  Uc as createSystemVariableControlChars,
  Un as defineEffectAddBuff,
  Gn as defineEffectAddDebuff,
  kn as defineEffectAddState,
  Vn as defineEffectCommonEvent,
  Fn as defineEffectGainTp,
  Pi as defineEffectGrow,
  Bn as defineEffectLearnSkill,
  hn as defineEffectRecoverHp,
  vn as defineEffectRecoverMp,
  xn as defineEffectRemoveBuff,
  bn as defineEffectRemoveDebuff,
  Hn as defineEffectRemoveState,
  Ba as extraParamName,
  ft as foldCollapsOptions,
  Lt as foldExtraParam,
  Ot as foldPartyAbilityOptions,
  Mt as foldRegularParam,
  Dt as foldSpecialFlag,
  Pt as foldSpecialParams,
  Mi as formatItemEffectText,
  cm as fromArrayCommonEvent,
  dm as fromArrayInputNumber,
  Tm as fromArrayScrollingTextBody,
  Am as fromArrayScrollingTextHeader,
  Im as fromArraySetupChoice,
  um as fromArraySetupChoiceItem,
  Nm as fromArrayShowMessageHeader,
  Fc as fromStringArray,
  Ha as getArmorTypes,
  kc as getControlChars,
  ha as getElementTypes,
  va as getEquipTypes,
  hc as getNoteValue,
  Ua as getParamNames,
  Fa as getSkillTypes,
  Da as getVariableNames,
  ka as getWeaponTypes,
  Bc as isCommandAudio,
  jc as isCommandCommentBody,
  Kc as isCommandCommentHeader,
  Gc as isCommandCommonEvent,
  Wc as isCommandInputNumber,
  Xc as isCommandScriptBody,
  $c as isCommandScriptHeader,
  Vc as isCommandShowChoiceItem,
  bc as isCommandShowChoices,
  qc as isCommandShowMessage,
  Yc as isCommandShowMessageBody,
  wc as isCommandShowScrollingTextBody,
  I as isCommandTextBody,
  Ui as isDataActor,
  xi as isDataArmor,
  Vi as isDataClass,
  Gi as isDataEnemy,
  ki as isDataItem,
  Sc as isDataMapInfo,
  Hi as isDataSkill,
  bi as isDataState,
  Bi as isDataWeapon,
  Ai as isValid,
  Ei as joinSourceKey,
  $a as makeActorData,
  Qa as makeArmorData,
  Zc as makeAudioCommand,
  a as makeAudioFileParams,
  Ja as makeClassData,
  sm as makeCommand2_CommonEvent,
  ym as makeCommand2_ShowChoiceItem,
  _ as makeCommandAudioAny,
  zc as makeCommandChangeActorName,
  Qc as makeCommandChangeActorNickName,
  Jc as makeCommandChangeActorProfile,
  am as makeCommandChangeBattleBGM,
  rm as makeCommandChangeDefeatME,
  im as makeCommandChangeVictoryME,
  bo as makeCommandCommentBody,
  Go as makeCommandCommentHeader,
  Em as makeCommandInputNumber,
  em as makeCommandPlayBGM,
  tm as makeCommandPlayBGS,
  nm as makeCommandPlayME,
  om as makeCommandPlaySE,
  Mm as makeCommandScriptArray,
  wo as makeCommandScriptBody,
  Yo as makeCommandScriptHeader,
  lm as makeCommandScrollingTextBody,
  _m as makeCommandScrollingTextHeader,
  Sm as makeCommandSetupChoice,
  Cm as makeCommandShowMessage,
  Om as makeCommandShowMessageBody,
  Be as makeCommentArray,
  pm as makeCommentCommandArray,
  uc as makeCommonEventData,
  h as makeDamage,
  mn as makeDropItem,
  ni as makeEnemyAction,
  oi as makeEnemyData,
  lo as makeEventPageCondition,
  ai as makeItemData,
  yc as makeMapData,
  _c as makeMapEvent,
  To as makeMapEventIamge,
  Tc as makeMapEventPage,
  lc as makeMapInfoData,
  O as makeRegex,
  ii as makeSkillData,
  fc as makeSoundsArray,
  Za as makeStateData,
  Cc as makeSystemAdvanced,
  Rc as makeTroopData,
  gc as makeTroopEventConditions,
  Ic as makeTroopMember,
  ti as makeWeaponData,
  La as mergeDomainLabel,
  Pa as mergeNestedPrimitiveRecords,
  q as mergeWithDefaults,
  za as normalizeDataActor,
  Pc as readNote,
  xe as readNoteEx,
  Lc as readNoteObject,
  xa as regularParamName,
  Dc as replaceNote,
  Li as resolveItemEffectLabels,
  ja as resolveTraitLabels,
  di as sanitizeKey,
  vc as setNoteValue,
  Ga as specialParamName,
  L as testUnknonwKey,
  Bo as toArrayCommonEvent,
  Vo as toArrayInputNumber,
  qo as toArrayScrollingTextBody,
  Wo as toArrayScrollingTextHeader,
  gm as toArraySetupChoice,
  Rm as toArraySetupChoiceItem,
  fm as toArrayShowMessageHeader,
  R as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
