import P from "ajv";
const Zo = "bgm", ea = "se", ta = "me", na = "bgs", oa = "battlebacks1", aa = "battlebacks2", ia = "characters", ra = "enemies", sa = "faces", ca = "parallaxes", ma = "pictures", pa = "sv_actors", da = "sv_enemies", Ea = "system", Aa = "tilesets", _a = "titles1", Ta = "titles2", la = "System.json", ya = "Actors.json", ua = "Classes.json", Ra = "Skills.json", Ia = "Items.json", ga = "Weapons.json", Sa = "Armors.json", Ca = "Enemies.json", Na = "Troops.json", fa = "States.json", Oa = "Animations.json", Ma = "Tilesets.json", La = "CommonEvents.json", Pa = "MapInfos.json", Da = "data", ha = "img", va = "audio", Fa = "js", Y = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const s = t[o];
    typeof s == "string" && (n[o] = s);
  }
  return n;
}, Ha = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: Y(e.options, t.options ?? {})
}), ka = (e, t) => {
  const n = {};
  for (const o in e) {
    const s = e[o], p = t[o] ?? {};
    n[o] = Y(
      s,
      p
    );
  }
  return n;
}, T = (e, t) => ({
  name: e,
  id: t
}), Ua = (e) => e.variables.map(T), xa = (e) => e.elements.map(T), Ba = (e) => e.equipTypes.map(T), Ga = (e) => e.skillTypes.map(T), ba = (e) => e.weaponTypes.map(T), Va = (e) => e.armorTypes.map(T), Wa = (e) => e.terms.params.map(T), l = "rmmz", D = "trait", w = "data", j = "system", Ve = 11, We = 12, qe = 13, Ye = 14, we = 21, je = 22, Ke = 23, Xe = 31, $e = 32, ze = 33, Qe = 34, Je = 35, Ze = 41, et = 42, tt = 43, nt = 44, ot = 51, at = 52, it = 53, rt = 54, st = 55, ct = 61, mt = 62, pt = 63, dt = 64, Et = 0, At = 1, _t = 2, Tt = 3, lt = 0, yt = 1, ut = 2, Rt = 3, It = 4, gt = 5, St = 0, Ct = 1, Nt = 2, ft = 3, K = 0, X = 1, $ = 2, z = 3, Q = 4, J = 5, Z = 6, ee = 7, te = 8, ne = 9, oe = 0, ae = 1, ie = 2, re = 3, se = 4, ce = 5, me = 6, pe = 7, de = 0, Ee = 1, Ae = 2, _e = 3, Te = 4, le = 5, ye = 6, ue = 7, Re = 8, Ie = 9, qa = (e, t) => {
  switch (e) {
    case oe:
      return t.maxHp;
    case ae:
      return t.maxMp;
    case ie:
      return t.atk;
    case re:
      return t.def;
    case se:
      return t.matk;
    case ce:
      return t.mdef;
    case me:
      return t.agi;
    case pe:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, Ya = (e, t) => {
  switch (e) {
    case z:
      return t.criticalEvasionRate;
    case X:
      return t.evasionRate;
    case Z:
      return t.counterAttackRate;
    case $:
      return t.criticalRate;
    case K:
      return t.hitRate;
    case ee:
      return t.hpRegenerationRate;
    case Q:
      return t.magicEvasionRate;
    case J:
      return t.magicReflectionRate;
    case te:
      return t.mpRegenerationRate;
    case ne:
      return t.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, wa = (e, t) => {
  switch (e) {
    case Ie:
      return t.experienceRate;
    case de:
      return t.targetRate;
    case Re:
      return t.floorDamageRate;
    case Ee:
      return t.guradEffectRate;
    case Te:
      return t.mpCostRate;
    case le:
      return t.tpChargeRate;
    case ye:
      return t.physicalDamageRate;
    case ue:
      return t.magicDamageRate;
    case _e:
      return t.pharmacology;
    case Ae:
      return t.recoveryEffectRate;
  }
  return `?sparams[${e}]`;
}, Ot = (e, t) => [
  {
    id: Et,
    name: t.normal
  },
  {
    id: At,
    name: e.bossCollaps
  },
  {
    id: _t,
    name: e.instantCollaps
  },
  {
    id: Tt,
    name: e.noneCollaps
  }
], Mt = (e) => [
  {
    id: lt,
    name: e.encounterHalf
  },
  {
    id: yt,
    name: e.encounterNone
  },
  {
    id: ut,
    name: e.cancelSurprise
  },
  {
    id: Rt,
    name: e.raisePreemptive
  },
  {
    id: It,
    name: e.goldDouble
  },
  {
    id: gt,
    name: e.dropItemDouble
  }
], Lt = (e) => [
  { id: oe, name: e.maxHp },
  { id: ae, name: e.maxMp },
  { id: ie, name: e.atk },
  { id: re, name: e.def },
  { id: se, name: e.matk },
  { id: ce, name: e.mdef },
  { id: me, name: e.agi },
  { id: pe, name: e.luk }
], Pt = (e) => [
  {
    id: K,
    name: e.hitRate
  },
  {
    id: X,
    name: e.evasionRate
  },
  {
    id: $,
    name: e.criticalRate
  },
  {
    id: z,
    name: e.criticalEvasionRate
  },
  {
    id: Q,
    name: e.magicEvasionRate
  },
  {
    id: J,
    name: e.magicReflectionRate
  },
  {
    id: Z,
    name: e.counterAttackRate
  },
  {
    id: ee,
    name: e.hpRegenerationRate
  },
  {
    id: te,
    name: e.mpRegenerationRate
  },
  {
    id: ne,
    name: e.tpRegenerationRate
  }
], Dt = (e) => [
  {
    id: de,
    name: e.targetRate
  },
  {
    id: Ee,
    name: e.guradEffectRate
  },
  {
    id: Ae,
    name: e.recoveryEffectRate
  },
  {
    id: _e,
    name: e.pharmacology
  },
  {
    id: Te,
    name: e.mpCostRate
  },
  {
    id: le,
    name: e.tpChargeRate
  },
  {
    id: ye,
    name: e.physicalDamageRate
  },
  {
    id: ue,
    name: e.magicDamageRate
  },
  {
    id: Re,
    name: e.floorDamageRate
  },
  {
    id: Ie,
    name: e.experienceRate
  }
], ht = (e) => [
  {
    id: St,
    name: e.autoBattle
  },
  {
    id: Ct,
    name: e.guard
  },
  {
    id: Nt,
    name: e.substitute
  },
  {
    id: ft,
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
}), ja = (e, t) => R(
  Me,
  e,
  (n) => Ot(n, t)
), Ka = (e) => R(Le, e, Mt), Xa = (e) => R(S, e, Lt), $a = (e) => R(fe, e, Pt), za = (e) => R(Oe, e, Dt), Qa = (e) => R(Pe, e, ht), c = "{name}", u = "{name} * {value}%", H = "{name} + {value}%", k = "{value}", i = {
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
      format: H,
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
      format: H
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
}, U = "{value}", x = "{name}";
class vt {
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
      U,
      t.value.toString()
    );
    return this.dataSource ? o.replaceAll(
      x,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue() {
    return this.format.includes(U);
  }
  requiresName() {
    return this.format.includes(x);
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
const Ja = (e) => [
  Ft(e.elementRate),
  Ht(e.debuffRate),
  kt(e.stateRate),
  Ut(e.stateResist),
  xt(e.regularParam),
  Bt(e.extraParam),
  Gt(e.specialParam),
  bt(e.attackElement),
  Vt(e.attackState),
  Wt(e.attackSpeed),
  qt(e.attackTimes),
  Yt(e.attackSkill),
  nn(e.skillTypeAdd),
  on(e.skillTypeSeal),
  Zt(e.skillAdd),
  en(e.skillSeal),
  $t(e.equipWeaponType),
  zt(e.equipArmorType),
  Qt(e.equipLock),
  Jt(e.equipSeal),
  tn(e.slotType),
  wt(e.actionPlus),
  jt(e.specialFlag),
  Kt(e.collaps),
  Xt(e.partyAbility)
], B = (e, t) => typeof t == "string" ? t : e, r = (e, t, n, o) => {
  const s = B(t.domainName, n.domainName), p = B(t.format, n.format);
  return new vt(e, s, p, o);
}, ge = () => ({
  module: j,
  author: l,
  kind: Dn
}), Se = (e) => ({
  module: w,
  author: l,
  kind: e
}), E = (e) => ({
  author: l,
  module: D,
  kind: e
}), Ce = (e) => ({
  author: l,
  module: j,
  kind: e
}), Ft = (e) => r(
  Ve,
  i.options.elementRate,
  e,
  ge()
), Ht = (e) => r(
  We,
  i.options.debuffRate,
  e,
  E(S)
), kt = (e) => r(
  qe,
  i.options.stateRate,
  e,
  E(S)
), Ut = (e) => r(
  Ye,
  i.options.stateResist,
  e,
  Se(C)
), xt = (e) => r(
  we,
  i.options.regularParam,
  e,
  E(S)
), Bt = (e) => r(
  je,
  i.options.extraParam,
  e,
  E(fe)
), Gt = (e) => r(
  Ke,
  i.options.specialParam,
  e,
  E(Oe)
), bt = (e) => r(
  Xe,
  i.options.attackElement,
  e,
  ge()
), Vt = (e) => r(
  $e,
  i.options.attackState,
  e,
  E(C)
), Wt = (e) => r(ze, i.options.attackSpeed, e), qt = (e) => r(Qe, i.options.attackTimes, e), Yt = (e) => r(
  Je,
  i.options.attackSkill,
  e,
  Se(De)
), wt = (e) => r(ct, i.options.actionPlus, e), jt = (e) => r(
  mt,
  i.options.specialFlag,
  e,
  E(Pe)
), Kt = (e) => r(
  pt,
  i.options.collaps,
  e,
  E(Me)
), Xt = (e) => r(
  dt,
  i.options.partyAbility,
  e,
  E(Le)
), $t = (e) => r(
  ot,
  i.options.equipWeaponType,
  e,
  Ce(Ln)
), zt = (e) => r(
  at,
  i.options.equipArmorType,
  e,
  Ce(Pn)
), Qt = (e) => r(it, i.options.equipLock, e), Jt = (e) => r(rt, i.options.equipSeal, e), Zt = (e) => r(tt, i.options.skillAdd, e), en = (e) => r(nt, i.options.skillSeal, e), tn = (e) => r(st, i.options.slotType, e), nn = (e) => r(
  Ze,
  i.options.skillTypeAdd,
  e
), on = (e) => r(
  et,
  i.options.skillTypeSeal,
  e
), Za = "Trait", ei = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, ti = (e = {}) => ({
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
}), an = {
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
}, ni = (e) => ({
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
}), oi = (e = {}) => ({
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
}), rn = {
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
}, ai = (e = {}) => ({
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
}), sn = {
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
}, ii = (e = {}) => ({
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
}), cn = {
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
}, ri = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, si = (e = {}) => ({
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
}), mn = {
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
}, pn = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), ci = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), mi = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => pn())) ?? [],
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
}, dn = {
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
}, pi = (e = {}) => ({
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
}), di = (e = {}) => ({
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
}), En = {
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
}, An = {
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
}, Ei = 0, Ai = 1, _i = 2, _n = "{name} + {value1}", G = "{name} {value1}%", M = "{value1}% + {value2}", b = "{name} {value1}ターン", g = "{name}", m = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: b
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: b
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: M
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: _n
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
      format: G
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: g
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: G
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: g
    }
  }
}, Tn = 11, ln = 12, yn = 13, un = 21, Rn = 22, In = 31, gn = 32, Sn = 33, Cn = 34, Ti = 41, Nn = 42, fn = 43, On = 44, li = 0, Ne = /^[a-zA-Z0-9]+$/, yi = (e) => Ne.test(e) ? e : void 0, L = (e) => typeof e == "string" ? Ne.test(e) : !1, ui = (e) => [e.author, e.module, e.kind].join("."), Ri = (e) => L(e.author) && L(e.module) && L(e.kind), S = "params", fe = "xparams", Oe = "sparams", Me = "collaps", Le = "partyAbiility", Pe = "sflag", Ii = "actor", gi = "variables", Si = "map", Ci = "enemy", C = "state", De = "skill", Ni = "items", fi = "weapon", Oi = "armor", Mi = "class", Mn = "common_event", Li = "troop", Pi = "colors", Ln = "weaponTypes", Pn = "armorTypes", Di = "equipTypes", hi = "switches", vi = "skillTypes", Dn = "elements", V = "{value1}", W = "{value2}", q = "{name}";
class hn {
  constructor(t, n, o, s, p) {
    this.codeId = t, this.label = n, this.format = o, this.description = s, this.dataSource = p;
  }
  formatText(t, n) {
    const o = this.format.replaceAll(V, t.value1.toString()).replaceAll(W, t.value2.toString());
    return this.dataSource ? o.replaceAll(
      q,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue1() {
    return this.format.includes(V);
  }
  requiresValue2() {
    return this.format.includes(W);
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
const Fi = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), Hi = (e) => [
  vn(e.options.recoverHp),
  Fn(e.options.recoverMp),
  Hn(e.options.gainTp),
  kn(e.options.addState),
  Un(e.options.removeState),
  xn(e.options.addBuff),
  bn(e.options.addDebuff),
  Bn(e.options.removeBuff),
  Vn(e.options.removeDebuff),
  Gn(e.options.learnSkill),
  Wn(e.options.commonEvent)
], N = () => ({
  author: l,
  module: D,
  kind: S
}), f = (e) => ({
  author: l,
  module: w,
  kind: e
}), d = (e, t, n, o) => {
  const s = n.domainName ?? t.domainName, p = n.format ?? t.format, be = n.desc ?? t.desc;
  return new hn(e, s, p, be, o);
}, vn = (e) => d(
  Tn,
  m.options.recoverHp,
  e
), Fn = (e) => d(
  ln,
  m.options.recoverMp,
  e
), Hn = (e) => d(yn, m.options.gainTp, e), ki = (e) => d(Nn, m.options.grow, e), kn = (e) => d(
  un,
  m.options.addState,
  e,
  f(C)
), Un = (e) => d(
  Rn,
  m.options.removeState,
  e,
  f(C)
), xn = (e) => d(
  In,
  m.options.addBuff,
  e,
  N()
), Bn = (e) => d(
  Sn,
  m.options.removeBuff,
  e,
  N()
), Gn = (e) => d(
  fn,
  m.options.learnSkill,
  e,
  f(De)
), bn = (e) => d(
  gn,
  m.options.addBuff,
  e,
  N()
), Vn = (e) => d(
  Cn,
  m.options.removeDebuff,
  e,
  N()
), Wn = (e) => d(
  On,
  m.options.commonEvent,
  e,
  f(Mn)
), Ui = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, xi = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, Bi = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, qn = {
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
}, Yn = {
  domainName: "ダメージ",
  options: {}
}, h = (e = {}) => ({
  type: e.type ?? 0,
  elementId: e.elementId ?? 0,
  formula: e.formula ?? "",
  variance: e.variance ?? 0,
  critical: e.critical ?? !1
}), Gi = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, A = new P(), wn = A.compile(An), jn = A.compile(En), Kn = A.compile(an), Xn = A.compile(rn), $n = A.compile(mn), zn = A.compile(dn), Qn = A.compile(cn), Jn = A.compile(sn), bi = (e) => wn(e), Vi = (e) => jn(e), Wi = (e) => Kn(e), qi = (e) => Xn(e), Yi = (e) => $n(e), wi = (e) => zn(e), ji = (e) => Qn(e), Ki = (e) => Jn(e), Xi = 0, Zn = 101, he = 401, eo = 102, to = 402, no = 103, $i = 104, oo = 105, ve = 405, Fe = 108, He = 408, zi = 109, Qi = 111, Ji = 411, Zi = 112, er = 113, tr = 115, ao = 117, nr = 118, or = 119, ar = 121, ir = 122, rr = 123, sr = 124, cr = 125, mr = 126, pr = 127, dr = 128, Er = 129, io = 132, ro = 133, Ar = 134, _r = 135, Tr = 136, lr = 137, yr = 138, so = 139, ur = 140, Rr = 201, Ir = 202, gr = 203, Sr = 204, Cr = 205, Nr = 206, fr = 211, Or = 212, Mr = 213, Lr = 214, Pr = 216, Dr = 217, hr = 221, vr = 222, Fr = 223, Hr = 224, kr = 225, Ur = 230, xr = 231, Br = 232, Gr = 233, br = 234, Vr = 235, Wr = 236, co = 241, qr = 242, Yr = 243, wr = 244, mo = 245, jr = 246, po = 249, Eo = 250, Kr = 251, Xr = 261, $r = 282, zr = 283, Qr = 284, Jr = 285, Zr = 301, es = 302, ts = 605, ns = 303, os = 311, as = 312, is = 313, rs = 314, ss = 315, Ao = 320, cs = 321, ms = 322, ps = 323, _o = 324, To = 325, ds = 331, Es = 332, As = 333, _s = 334, Ts = 335, ls = 336, ys = 337, us = 339, Rs = 340, Is = 351, gs = 342, Ss = 352, Cs = 353, Ns = 354, ke = 355, Ue = 655, fs = 356, Os = 357, Ms = 0, Ls = 1, Ps = 2, Ds = 3, hs = 4, vs = 5, Fs = 6, Hs = 7, ks = 8, Us = 9, xs = 10, Bs = 11, Gs = 12, bs = 13, Vs = 14, Ws = 15, qs = 16, Ys = 17, ws = 18, js = 19, Ks = 20, Xs = 21, $s = 22, zs = 23, Qs = 24, Js = 25, Zs = 26, ec = 27, tc = 28, nc = 29, oc = 30, ac = 31, ic = 32, rc = 33, sc = 34, cc = 35, mc = 36, pc = 37, dc = 38, Ec = 39, Ac = 40, _c = 41, Tc = 42, lc = 43, yc = 44, uc = 45, Rc = (e, t, n = 0) => ({
  code: e,
  indent: n,
  parameters: t
}), Ic = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), lo = () => ({
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}), yo = (e = {}) => ({
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
}), gc = () => ({
  conditions: yo(),
  list: [],
  directionFix: !1,
  image: lo(),
  moveFrequency: 5,
  moveRoute: {
    list: [],
    repeat: !1,
    skippable: !1,
    wait: !1
  }
}), uo = {
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
}, Ro = (e) => e.toString().padStart(3, "0"), Sc = (e = { id: 0 }) => ({
  name: e.name ?? Ro(e.id),
  id: e.id,
  expanded: e.expanded ?? !1,
  order: e.order ?? 0,
  parentId: e.parentId ?? 0,
  scrollX: e.scrollX ?? 0,
  scrollY: e.scrollY ?? 0
}), Cc = (e = {}) => ({
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
}), Nc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), fc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), Oc = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), Mc = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), Io = new P(), go = Io.compile(uo), Lc = (e) => go(e), Pc = (e = {}) => ({
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
}), Dc = {
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
}), hc = (e) => [
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
], vc = {
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
}, Fc = {
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
}, xe = (e, t) => `<${e}:${t}>`, O = () => /<([^<>:]+):([^>]*)>/g, Hc = (e, t) => Be(e.note, (n, o) => t(n, o, e)), kc = (e) => Be(e, (t, n) => [t, n]), Be = (e, t) => {
  const n = O();
  return Array.from(e.matchAll(n), (o) => t(o[1], o[2]));
}, Uc = (e, t) => e.replaceAll(
  O(),
  (n, o, s) => {
    const p = t(o, s);
    return xe(o, p);
  }
), xc = (e, t) => {
  const n = O(), o = Array.from(e.matchAll(n)).find(
    (s) => s[1] === t
  );
  return o ? o[2] : void 0;
}, Bc = (e, t, n) => {
  const o = O();
  return e.replaceAll(o, (s, p) => p === t ? xe(p, n) : s);
}, v = (e, t) => `\\${e}[${t}]`, Gc = (e, t) => t.map((n, o) => ({
  text: n,
  controlChar: v(e, o)
})), bc = (e) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g;
  return Array.from(e.matchAll(t)).map(
    (n) => ({
      char: n[1],
      id: parseInt(n[2], 10)
    })
  );
}, So = "N", Co = "V", Vc = (e) => e.map((t) => ({
  text: t.name,
  controlChar: v(So, t.id)
})), Wc = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: v(Co, n)
})).filter((t) => t.text !== ""), No = {
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
}, qc = {
  rpg: {
    damage: Yn,
    data: qn,
    traits: i,
    itemEffect: m
  },
  global: No
}, fo = {
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
}, Oo = {
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
}, Mo = {
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
}, Lo = {
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
}, Po = {
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
}, Do = {
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
}, ho = {
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
}, y = new P(), vo = y.compile(Oo), Fo = y.compile(ho), Ho = y.compile(Do), ko = y.compile(Mo), Uo = y.compile(fo), xo = y.compile(Lo), Bo = y.compile(Po), I = (e) => Uo(e), Yc = (e) => Bo(e), wc = (e) => xo(e), jc = (e) => Fo(e), Kc = (e) => Ho(e), Xc = (e) => ko(e), $c = (e) => vo(e), zc = (e) => I(e) && e.code === he, Qc = (e) => I(e) && e.code === ve, Jc = (e) => I(e) && e.code === He, Zc = (e) => I(e) && e.code === Fe, em = (e) => I(e) && e.code === Ue, tm = (e) => I(e) && e.code === ke, nm = (e, t = 0) => ({
  code: Ao,
  parameters: [e.actorId, e.name],
  indent: t
}), om = (e, t = 0) => ({
  code: _o,
  parameters: [e.actorId, e.nickname],
  indent: t
}), am = (e, t = 0) => ({
  code: To,
  parameters: [e.actorId, e.profile],
  indent: t
}), im = (e, t) => _(e, a({ name: t })), _ = (e, t, n = 0) => ({
  code: e,
  parameters: [a(t)],
  indent: n
}), rm = (e, t = 0) => _(co, e, t), sm = (e, t = 0) => _(mo, e, t), cm = (e, t = 0) => _(po, e, t), mm = (e, t = 0) => _(Eo, e, t), pm = (e, t = 0) => _(io, e, t), dm = (e, t = 0) => _(ro, e, t), Em = (e, t = 0) => _(so, e, t), Am = (e, t = 0) => ({
  code: ao,
  indent: t,
  parameters: Go(e ?? {})
}), _m = (e) => ({
  eventId: e[0]
}), Go = (e) => [e.eventId ?? 0], Ge = (e) => [e], Tm = (e) => ({
  comment: e[0]
}), bo = (e, t = 0) => ({
  code: Fe,
  indent: t,
  parameters: Ge(e)
}), Vo = (e, t = 0) => ({
  code: He,
  indent: t,
  parameters: Ge(e)
}), lm = (e, t = 0) => e.map(
  (n, o) => o === 0 ? bo(n, t) : Vo(n, t)
), Wo = (e) => [e.variableId ?? 0, e.digits ?? 0], ym = (e) => ({
  variableId: e[0],
  digits: e[1]
}), um = (e, t = 0) => ({
  code: no,
  indent: t,
  parameters: Wo(e ?? {})
}), qo = (e = {}) => [(e == null ? void 0 : e.speed) ?? 4, (e == null ? void 0 : e.skip) ?? !1], Rm = (e) => ({
  speed: e[0],
  skip: e[1]
}), Im = (e = {}, t = 0) => ({
  code: oo,
  indent: t,
  parameters: qo(e)
}), Yo = (e = "") => [e], gm = (e) => ({
  content: e[0]
}), Sm = (e = "", t = 0) => ({
  code: ve,
  indent: t ?? 0,
  parameters: Yo(e)
}), Cm = (e, t = 0) => ({
  code: to,
  indent: t,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), Nm = (e) => ({
  index: e[0],
  name: e[1]
}), fm = (e) => [e.index ?? 0, e.name ?? ""], Om = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Mm = (e) => [
  e.choices ?? [],
  e.cancelType ?? 0,
  e.defaultType ?? 0,
  e.positionType ?? 2,
  e.background ?? 0
], Lm = (e, t = 0) => ({
  code: eo,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.choices) ?? [],
    (e == null ? void 0 : e.cancelType) ?? 0,
    (e == null ? void 0 : e.defaultType) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.background) ?? 0
  ]
}), Pm = (e, t = 0) => ({
  code: Zn,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.facename) ?? "",
    (e == null ? void 0 : e.faceIndex) ?? 0,
    (e == null ? void 0 : e.background) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.speakerName) ?? ""
  ]
}), Dm = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4]
}), hm = (e) => [
  e.facename,
  e.faceIndex,
  e.background,
  e.positionType,
  e.speakerName
], vm = (e, t = 0) => ({
  code: he,
  indent: t,
  parameters: [e]
}), wo = (e, t = 0) => ({
  code: ke,
  indent: t,
  parameters: [e]
}), jo = (e, t = 0) => ({
  code: Ue,
  indent: t,
  parameters: [e]
}), Fm = (e, t = 0) => e.map(
  (n, o) => o === 0 ? wo(n, t) : jo(n, t)
), Ko = 0, Xo = 1, $o = 2, F = 3, zo = 4, Hm = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return t[6] >= 2 && t[6] <= 9 ? e.param(t[6] - 2) : 0;
}, km = (e, t) => {
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
}, Qo = {
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
}, Um = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  Ko,
  t.value
], xm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  Xo,
  t.variableId
], Bm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  $o,
  t.min,
  t.max
], Gm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  zo,
  t.code
], bm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  F,
  t.type,
  t.itemId
], Vm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  F,
  3,
  t.index,
  t.param
], Wm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  F,
  4,
  t.index,
  Qo[t.param]
];
export {
  Rs as ABORT_BATTLE,
  l as AUTHOR_RMMZ,
  Zr as BATTLE_PROCESSING,
  ms as CHANGE_ACTOR_IMAGES,
  dr as CHANGE_ARMORS,
  zr as CHANGE_BATTLE_BACKGROUND,
  io as CHANGE_BATTLE_BGM,
  cs as CHANGE_CLASS,
  so as CHANGE_DEFEAT_ME,
  Tr as CHANGE_ENCOUNTER,
  ds as CHANGE_ENEMY_HP,
  Es as CHANGE_ENEMY_MP,
  As as CHANGE_ENEMY_STATE,
  gs as CHANGE_ENEMY_TP,
  ss as CHANGE_EXP,
  lr as CHANGE_FORMATION_ACCESS,
  cr as CHANGE_GOLD,
  os as CHANGE_HP,
  mr as CHANGE_ITEMS,
  _r as CHANGE_MENU_ACCESS,
  as as CHANGE_MP,
  Ao as CHANGE_NAME,
  _o as CHANGE_NICKNAME,
  Qr as CHANGE_PARALLAX,
  Er as CHANGE_PARTY_MEMBER,
  Pr as CHANGE_PLAYER_FOLLOWERS,
  To as CHANGE_PROFILE,
  Ar as CHANGE_SAVE_ACCESS,
  $r as CHANGE_TILESET,
  is as CHANGE_TP,
  fr as CHANGE_TRANSPARENCY,
  ur as CHANGE_VEHICLE_BGM,
  ps as CHANGE_VEHICLE_IMAGE,
  ro as CHANGE_VICTORY_ME,
  pr as CHANGE_WEAPONS,
  yr as CHANGE_WINDOW_COLOR,
  At as COLLAPS_BOSS,
  _t as COLLAPS_INSTANT,
  Tt as COLLAPS_NONE,
  Et as COLLAPS_NORMAL,
  He as COMMENT_BODY,
  Fe as COMMENT_HEAD,
  ao as COMMON_EVENT,
  Qi as CONDITIONAL_BRANCH,
  Ji as CONDITIONAL_BRANCH_ELSE,
  rr as CONTROL_SELF_SWITCH,
  ar as CONTROL_SWITCHES,
  sr as CONTROL_TIMER,
  ir as CONTROL_VARIABLES,
  Yn as DEFAULT_DAMAGE_LABELS,
  No as DEFAULT_GLOBAL_LABELS,
  Ui as DEFAULT_ITEM_LABELS,
  xi as DEFAULT_SKILL_LABELS,
  vc as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Bi as DEFAULT_USABLE_ITEM_LABELS,
  In as EFFECT_ADD_BUFF,
  gn as EFFECT_ADD_DEBUFF,
  un as EFFECT_ADD_STATE,
  On as EFFECT_COMMON_EVENT,
  yn as EFFECT_GAIN_TP,
  Nn as EFFECT_GROW,
  fn as EFFECT_LEARN_SKILL,
  Tn as EFFECT_RECOVER_HP,
  ln as EFFECT_RECOVER_MP,
  Sn as EFFECT_REMOVE_BUFF,
  Cn as EFFECT_REMOVE_DEBUFF,
  Rn as EFFECT_REMOVE_STATE,
  Ti as EFFECT_SPECIAL,
  Ts as ENEMY_APPEAR,
  _s as ENEMY_RECOVER_ALL,
  ls as ENEMY_TRANSFORM,
  Lr as ERASE_EVENT,
  Vr as ERASE_PICTURE,
  tr as EXIT_EVENT_PROCESSING,
  z as EXTRA_PARAM_CEV,
  Z as EXTRA_PARAM_CNT,
  $ as EXTRA_PARAM_CRI,
  X as EXTRA_PARAM_EVA,
  K as EXTRA_PARAM_HIT,
  ee as EXTRA_PARAM_HRG,
  Q as EXTRA_PARAM_MEV,
  J as EXTRA_PARAM_MRF,
  te as EXTRA_PARAM_MRG,
  ne as EXTRA_PARAM_TRG,
  vr as FADEIN_SCREEN,
  qr as FADEOUT_BGM,
  jr as FADEOUT_BGS,
  hr as FADEOUT_SCREEN,
  ya as FILENAME_ACTORS,
  Oa as FILENAME_ANIMATIONS,
  Sa as FILENAME_ARMORS,
  ua as FILENAME_CLASSES,
  La as FILENAME_COMMON_EVENTS,
  Ca as FILENAME_ENEMIES,
  Ia as FILENAME_ITEMS,
  Pa as FILENAME_MAP_INFOS,
  Ra as FILENAME_SKILLS,
  fa as FILENAME_STATES,
  la as FILENAME_SYSTEM,
  Ma as FILENAME_TILESET,
  Na as FILENAME_TROOPS,
  ga as FILENAME_WEAPONS,
  St as FLAG_ID_AUTO_BATTLE,
  Ct as FLAG_ID_GUARD,
  ft as FLAG_ID_PRESERVE_TP,
  Nt as FLAG_ID_SUBSTITUTE,
  Hr as FLASH_SCREEN,
  va as FOLDER_AUDIO,
  Zo as FOLDER_AUDIO_BGM,
  na as FOLDER_AUDIO_BGS,
  ta as FOLDER_AUDIO_ME,
  ea as FOLDER_AUDIO_SE,
  Da as FOLDER_DATA,
  ha as FOLDER_IMG,
  oa as FOLDER_IMG_BATTLEBACK1,
  aa as FOLDER_IMG_BATTLEBACK2,
  ia as FOLDER_IMG_CHACTERS,
  ra as FOLDER_IMG_ENEMIES,
  sa as FOLDER_IMG_FACES,
  ca as FOLDER_IMG_PARALLACES,
  ma as FOLDER_IMG_PICTURES,
  pa as FOLDER_IMG_SV_ACTORS,
  da as FOLDER_IMG_SV_ENEMIES,
  Ea as FOLDER_IMG_SYSTEM,
  Aa as FOLDER_IMG_TILESETS,
  _a as FOLDER_IMG_TITLES1,
  Ta as FOLDER_IMG_TITLES2,
  Fa as FOLDER_JS,
  us as FORCE_ACTION,
  Cs as GAME_OVER,
  Dr as GATHER_FOLLOWERS,
  Jr as GET_LOCATION_INFO,
  Nr as GET_ONOFF_VEHICLE,
  Ei as HITTYPE_CERTAIN,
  _i as HITTYPE_MAGICAL,
  Ai as HITTYPE_PHYSICAL,
  no as INPUT_NUMBER,
  nr as LABEL,
  ri as LABELS_DATA_WEAPON,
  or as LABEL_JUMP,
  qc as LABEL_REGISTRY_JP,
  qn as LABEL_SET_DATA,
  m as LABEL_SET_ITEM_EFFECT,
  i as LABEL_SET_TRAIT,
  Zi as LOOP,
  er as LOOP_BREAK,
  w as MODULE_DATA,
  j as MODULE_SYSTEM,
  D as MODULE_TRAIT,
  Br as MOVE_PICTURE,
  Fc as MockSystemLabelDataTypes,
  ns as NAME_INPUT_PROCESSING,
  Xi as NO_OPERATION,
  Is as OPEN_MENU_SCREEN,
  Ss as OPEN_SAVE_SCREEN,
  Ko as OPERAND_CONSTANT,
  F as OPERAND_GAMEDATA,
  $o as OPERAND_RANDOM,
  zo as OPERAND_SCRIPT,
  Xo as OPERAND_VARIABLE,
  ut as PARTY_ABILITY_CANCEL_SURPRISE,
  gt as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  lt as PARTY_ABILITY_ENCOUNTER_HALF,
  yt as PARTY_ABILITY_ENCOUNTER_NONE,
  It as PARTY_ABILITY_GOLD_DOUBLE,
  Rt as PARTY_ABILITY_RAISE_PREEMPTIVE,
  co as PLAY_BGM,
  mo as PLAY_BGS,
  po as PLAY_ME,
  Xr as PLAY_MOVIE,
  Eo as PLAY_SE,
  fs as PLUGIN_COMMAND_MV,
  Os as PLUGIN_COMMAND_MZ,
  rs as RECOVER_ALL,
  me as REGULAR_PARAM_AGI,
  ie as REGULAR_PARAM_ATK,
  re as REGULAR_PARAM_DEF,
  pe as REGULAR_PARAM_LUK,
  se as REGULAR_PARAM_MATK,
  oe as REGULAR_PARAM_MAX_HP,
  ae as REGULAR_PARAM_MAX_MP,
  ce as REGULAR_PARAM_MDEF,
  wr as RESUME_BGM,
  Ns as RETURN_TO_TITLE_SCREEN,
  Gr as ROTATE_PICTURE,
  lc as ROUTE_CHANGE_BLEND_MODE,
  oc as ROUTE_CHANGE_FREQ,
  _c as ROUTE_CHANGE_IMAGE,
  Tc as ROUTE_CHANGE_OPACITY,
  nc as ROUTE_CHANGE_SPEED,
  mc as ROUTE_DIR_FIX_OFF,
  cc as ROUTE_DIR_FIX_ON,
  Ms as ROUTE_END,
  Vs as ROUTE_JUMP,
  Bs as ROUTE_MOVE_AWAY,
  bs as ROUTE_MOVE_BACKWARD,
  Ls as ROUTE_MOVE_DOWN,
  Gs as ROUTE_MOVE_FORWARD,
  Ps as ROUTE_MOVE_LEFT,
  vs as ROUTE_MOVE_LOWER_L,
  Fs as ROUTE_MOVE_LOWER_R,
  Us as ROUTE_MOVE_RANDOM,
  Ds as ROUTE_MOVE_RIGHT,
  xs as ROUTE_MOVE_TOWARD,
  hs as ROUTE_MOVE_UP,
  Hs as ROUTE_MOVE_UPPER_L,
  ks as ROUTE_MOVE_UPPER_R,
  yc as ROUTE_PLAY_SE,
  uc as ROUTE_SCRIPT,
  sc as ROUTE_STEP_ANIME_OFF,
  rc as ROUTE_STEP_ANIME_ON,
  tc as ROUTE_SWITCH_OFF,
  ec as ROUTE_SWITCH_ON,
  dc as ROUTE_THROUGH_OFF,
  pc as ROUTE_THROUGH_ON,
  Ac as ROUTE_TRANSPARENT_OFF,
  Ec as ROUTE_TRANSPARENT_ON,
  $s as ROUTE_TURN_180D,
  Xs as ROUTE_TURN_90D_L,
  Ks as ROUTE_TURN_90D_R,
  zs as ROUTE_TURN_90D_R_L,
  Zs as ROUTE_TURN_AWAY,
  qs as ROUTE_TURN_DOWN,
  Ys as ROUTE_TURN_LEFT,
  Qs as ROUTE_TURN_RANDOM,
  ws as ROUTE_TURN_RIGHT,
  Js as ROUTE_TURN_TOWARD,
  js as ROUTE_TURN_UP,
  Ws as ROUTE_WAIT,
  ic as ROUTE_WALK_ANIME_OFF,
  ac as ROUTE_WALK_ANIME_ON,
  Yr as SAVE_BGM,
  Gi as SCHEMA_DAMAGE,
  an as SCHEMA_DATA_ACTOR,
  rn as SCHEMA_DATA_ARMMOR,
  sn as SCHEMA_DATA_CLASS,
  dn as SCHEMA_DATA_ENEMY,
  An as SCHEMA_DATA_ITEM,
  uo as SCHEMA_DATA_MAP_INFO,
  En as SCHEMA_DATA_SKILL,
  cn as SCHEMA_DATA_STATE,
  mn as SCHEMA_DATA_WEAPON,
  Dc as SCHEMA_SYSTEM_ADVANCED,
  ei as SCHEMA_TRAIT,
  ke as SCRIPT_EVAL,
  Ue as SCRIPT_EVAL_BODY,
  Sr as SCROLL_MAP,
  $i as SELECT_ITEM,
  gr as SET_EVENT_LOCATION,
  Cr as SET_MOVEMENT_ROUTE,
  Ir as SET_VEHICLE_LOCATION,
  Wr as SET_WEATHER_EFFECT,
  kr as SHAKE_SCREEN,
  es as SHOP_PROCESSING,
  ts as SHOP_PROCESSING_BODY,
  Or as SHOW_ANIMATION,
  Mr as SHOW_BALLOON_ICON,
  ys as SHOW_BATTLE_ANIMATION,
  eo as SHOW_CHOICES,
  to as SHOW_CHOICES_ITEM,
  Zn as SHOW_MESSAGE,
  he as SHOW_MESSAGE_BODY,
  xr as SHOW_PICTURE,
  oo as SHOW_SCROLLING_TEXT,
  ve as SHOW_SCROLLING_TEXT_BODY,
  zi as SKIP,
  li as SPECIAL_EFFECT_ESCAPE,
  Ie as SPECIAL_PARAM_EXR,
  Re as SPECIAL_PARAM_FDR,
  Ee as SPECIAL_PARAM_GRD,
  Te as SPECIAL_PARAM_MCR,
  ue as SPECIAL_PARAM_MDR,
  ye as SPECIAL_PARAM_PDR,
  _e as SPECIAL_PARAM_PHA,
  Ae as SPECIAL_PARAM_REC,
  le as SPECIAL_PARAM_TCR,
  de as SPECIAL_PARAM_TGR,
  Pn as SRC_ARMOR_TYPES,
  Pi as SRC_COLOR,
  Ii as SRC_DATA_ACTOR,
  Oi as SRC_DATA_ARMOR,
  Mi as SRC_DATA_CLASS,
  Mn as SRC_DATA_COMMON_EVNET,
  Ci as SRC_DATA_ENEMY,
  Ni as SRC_DATA_ITEMS,
  Si as SRC_DATA_MAP,
  De as SRC_DATA_SKILL,
  C as SRC_DATA_STATE,
  Li as SRC_DATA_TROOP,
  gi as SRC_DATA_VARIABLE,
  fi as SRC_DATA_WEAPON,
  Dn as SRC_ELEMENTS,
  Di as SRC_EQUIP_TYPES,
  fe as SRC_PARAMS_EXTRA,
  S as SRC_PARAMS_REGULAR,
  Oe as SRC_PARAMS_SPECIAL,
  vi as SRC_SKILL_TYPES,
  hi as SRC_SWITCHES,
  Me as SRC_TRAIT_COLLAPS,
  Le as SRC_TRAIT_PARTY_ABILITY,
  Pe as SRC_TRAIT_SPECIAL_FLAG,
  Ln as SRC_WEAPON_TYPES,
  Kr as STOP_SE,
  br as TINT_PICTURE,
  Fr as TINT_SCREEN,
  ct as TRAIT_ACTION_PLUS,
  Xe as TRAIT_ATTACK_ELEMENT,
  Je as TRAIT_ATTACK_SKILL,
  ze as TRAIT_ATTACK_SPEED,
  $e as TRAIT_ATTACK_STATE,
  Qe as TRAIT_ATTACK_TIMES,
  pt as TRAIT_COLLAPSE_TYPE,
  We as TRAIT_DEBUFF_RATE,
  Ve as TRAIT_ELEMENT_RATE,
  at as TRAIT_EQUIP_ARMOR_TYPE,
  it as TRAIT_EQUIP_LOCK,
  rt as TRAIT_EQUIP_SEAL,
  ot as TRAIT_EQUIP_WEAPON_TYPE,
  we as TRAIT_PARAM,
  dt as TRAIT_PARTY_ABILITY,
  tt as TRAIT_SKILL_ADD,
  nt as TRAIT_SKILL_SEAL,
  Ze as TRAIT_SKILL_TYPE_ADD,
  et as TRAIT_SKILL_TYPE_SEAL,
  st as TRAIT_SLOT_TYPE,
  Ke as TRAIT_SPARAM,
  mt as TRAIT_SPECIAL_FLAG,
  qe as TRAIT_STATE_RATE,
  Ye as TRAIT_STATE_RESIST,
  je as TRAIT_XPARAM,
  Rr as TRANSFER_PLAYER,
  Za as TYPENAME_TRAIT,
  vt as TraitDescriptor,
  Ur as WAIT,
  ja as buildCollapsSource,
  $a as buildExtraParamSource,
  Ka as buildPartyAbilitySource,
  Xa as buildRegularParamSource,
  Qa as buildSpecialFlagSource,
  za as buildSpecialParamSource,
  Tm as convertCommentArrayToObject,
  Vc as createActorControlChars,
  v as createControlCharFormat,
  Rc as createEventCommand,
  xe as createNoteEntity,
  Wc as createSystemVariableControlChars,
  xn as defineEffectAddBuff,
  bn as defineEffectAddDebuff,
  kn as defineEffectAddState,
  Wn as defineEffectCommonEvent,
  Hn as defineEffectGainTp,
  ki as defineEffectGrow,
  Gn as defineEffectLearnSkill,
  vn as defineEffectRecoverHp,
  Fn as defineEffectRecoverMp,
  Bn as defineEffectRemoveBuff,
  Vn as defineEffectRemoveDebuff,
  Un as defineEffectRemoveState,
  Ya as extraParamName,
  Ot as foldCollapsOptions,
  Pt as foldExtraParam,
  Mt as foldPartyAbilityOptions,
  Lt as foldRegularParam,
  ht as foldSpecialFlag,
  Dt as foldSpecialParams,
  Fi as formatItemEffectText,
  _m as fromArrayCommonEvent,
  ym as fromArrayInputNumber,
  gm as fromArrayScrollingTextBody,
  Rm as fromArrayScrollingTextHeader,
  Om as fromArraySetupChoice,
  Nm as fromArraySetupChoiceItem,
  Dm as fromArrayShowMessageHeader,
  Gc as fromStringArray,
  km as getActorValue,
  Va as getArmorTypes,
  bc as getControlChars,
  xa as getElementTypes,
  Hm as getEnemyValue,
  Ba as getEquipTypes,
  xc as getNoteValue,
  Wa as getParamNames,
  Ga as getSkillTypes,
  Ua as getVariableNames,
  ba as getWeaponTypes,
  Yc as isCommandAudio,
  Jc as isCommandCommentBody,
  Zc as isCommandCommentHeader,
  wc as isCommandCommonEvent,
  Xc as isCommandInputNumber,
  em as isCommandScriptBody,
  tm as isCommandScriptHeader,
  Kc as isCommandShowChoiceItem,
  jc as isCommandShowChoices,
  $c as isCommandShowMessage,
  zc as isCommandShowMessageBody,
  Qc as isCommandShowScrollingTextBody,
  I as isCommandTextBody,
  Wi as isDataActor,
  qi as isDataArmor,
  Ki as isDataClass,
  wi as isDataEnemy,
  bi as isDataItem,
  Lc as isDataMapInfo,
  Vi as isDataSkill,
  ji as isDataState,
  Yi as isDataWeapon,
  Ri as isValid,
  ui as joinSourceKey,
  ti as makeActorData,
  oi as makeArmorData,
  im as makeAudioCommand,
  a as makeAudioFileParams,
  ai as makeClassData,
  Am as makeCommand2_CommonEvent,
  Cm as makeCommand2_ShowChoiceItem,
  _ as makeCommandAudioAny,
  nm as makeCommandChangeActorName,
  om as makeCommandChangeActorNickName,
  am as makeCommandChangeActorProfile,
  pm as makeCommandChangeBattleBGM,
  Em as makeCommandChangeDefeatME,
  dm as makeCommandChangeVictoryME,
  Vo as makeCommandCommentBody,
  bo as makeCommandCommentHeader,
  um as makeCommandInputNumber,
  rm as makeCommandPlayBGM,
  sm as makeCommandPlayBGS,
  cm as makeCommandPlayME,
  mm as makeCommandPlaySE,
  Fm as makeCommandScriptArray,
  jo as makeCommandScriptBody,
  wo as makeCommandScriptHeader,
  Sm as makeCommandScrollingTextBody,
  Im as makeCommandScrollingTextHeader,
  Lm as makeCommandSetupChoice,
  Pm as makeCommandShowMessage,
  vm as makeCommandShowMessageBody,
  Ge as makeCommentArray,
  lm as makeCommentCommandArray,
  Nc as makeCommonEventData,
  h as makeDamage,
  pn as makeDropItem,
  ci as makeEnemyAction,
  mi as makeEnemyData,
  yo as makeEventPageCondition,
  pi as makeItemData,
  Cc as makeMapData,
  Ic as makeMapEvent,
  lo as makeMapEventIamge,
  gc as makeMapEventPage,
  Sc as makeMapInfoData,
  O as makeRegex,
  di as makeSkillData,
  hc as makeSoundsArray,
  ii as makeStateData,
  Pc as makeSystemAdvanced,
  fc as makeTroopData,
  Mc as makeTroopEventConditions,
  Oc as makeTroopMember,
  si as makeWeaponData,
  Ha as mergeDomainLabel,
  ka as mergeNestedPrimitiveRecords,
  Y as mergeWithDefaults,
  ni as normalizeDataActor,
  kc as readNote,
  Be as readNoteEx,
  Hc as readNoteObject,
  qa as regularParamName,
  Uc as replaceNote,
  Hi as resolveItemEffectLabels,
  Ja as resolveTraitLabels,
  yi as sanitizeKey,
  Bc as setNoteValue,
  wa as specialParamName,
  L as testUnknonwKey,
  Go as toArrayCommonEvent,
  Wo as toArrayInputNumber,
  Vm as toArrayOperandActorStatus,
  Um as toArrayOperandConstant,
  Wm as toArrayOperandEnemyStatus,
  bm as toArrayOperandItemData,
  Bm as toArrayOperandRandom,
  Gm as toArrayOperandScript,
  xm as toArrayOperandVariable,
  Yo as toArrayScrollingTextBody,
  qo as toArrayScrollingTextHeader,
  Mm as toArraySetupChoice,
  fm as toArraySetupChoiceItem,
  hm as toArrayShowMessageHeader,
  R as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
