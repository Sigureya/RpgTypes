import L from "ajv";
const Bo = "bgm", bo = "se", Vo = "me", Wo = "bgs", qo = "battlebacks1", Yo = "battlebacks2", wo = "characters", jo = "enemies", Ko = "faces", Xo = "parallaxes", $o = "pictures", zo = "sv_actors", Qo = "sv_enemies", Jo = "system", Zo = "tilesets", ea = "titles1", ta = "titles2", na = "System.json", oa = "Actors.json", aa = "Classes.json", ia = "Skills.json", ra = "Items.json", sa = "Weapons.json", ca = "Armors.json", ma = "Enemies.json", pa = "Troops.json", da = "States.json", Ea = "Animations.json", Aa = "Tilesets.json", _a = "CommonEvents.json", Ta = "MapInfos.json", la = "data", ya = "img", ua = "audio", Ra = "js", W = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const s = t[o];
    typeof s == "string" && (n[o] = s);
  }
  return n;
}, Ia = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: W(e.options, t.options ?? {})
}), ga = (e, t) => {
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
}), Sa = (e) => e.variables.map(T), Ca = (e) => e.elements.map(T), Na = (e) => e.equipTypes.map(T), fa = (e) => e.skillTypes.map(T), Oa = (e) => e.weaponTypes.map(T), Ma = (e) => e.armorTypes.map(T), La = (e) => e.terms.params.map(T), l = "rmmz", P = "trait", q = "data", Y = "system", ke = 11, He = 12, Ue = 13, Ge = 14, xe = 21, Be = 22, be = 23, Ve = 31, We = 32, qe = 33, Ye = 34, we = 35, je = 41, Ke = 42, Xe = 43, $e = 44, ze = 51, Qe = 52, Je = 53, Ze = 54, et = 55, tt = 61, nt = 62, ot = 63, at = 64, it = 0, rt = 1, st = 2, ct = 3, mt = 0, pt = 1, dt = 2, Et = 3, At = 4, _t = 5, Tt = 0, lt = 1, yt = 2, ut = 3, w = 0, j = 1, K = 2, X = 3, $ = 4, z = 5, Q = 6, J = 7, Z = 8, ee = 9, te = 0, ne = 1, oe = 2, ae = 3, ie = 4, re = 5, se = 6, ce = 7, me = 0, pe = 1, de = 2, Ee = 3, Ae = 4, _e = 5, Te = 6, le = 7, ye = 8, ue = 9, Pa = (e, t) => {
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
}, Da = (e, t) => {
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
}, ha = (e, t) => {
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
}, Rt = (e, t) => [
  {
    id: it,
    name: t.normal
  },
  {
    id: rt,
    name: e.bossCollaps
  },
  {
    id: st,
    name: e.instantCollaps
  },
  {
    id: ct,
    name: e.noneCollaps
  }
], It = (e) => [
  {
    id: mt,
    name: e.encounterHalf
  },
  {
    id: pt,
    name: e.encounterNone
  },
  {
    id: dt,
    name: e.cancelSurprise
  },
  {
    id: Et,
    name: e.raisePreemptive
  },
  {
    id: At,
    name: e.goldDouble
  },
  {
    id: _t,
    name: e.dropItemDouble
  }
], gt = (e) => [
  { id: te, name: e.maxHp },
  { id: ne, name: e.maxMp },
  { id: oe, name: e.atk },
  { id: ae, name: e.def },
  { id: ie, name: e.matk },
  { id: re, name: e.mdef },
  { id: se, name: e.agi },
  { id: ce, name: e.luk }
], St = (e) => [
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
], Ct = (e) => [
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
], Nt = (e) => [
  {
    id: Tt,
    name: e.autoBattle
  },
  {
    id: lt,
    name: e.guard
  },
  {
    id: yt,
    name: e.substitute
  },
  {
    id: ut,
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
}), va = (e, t) => R(
  fe,
  e,
  (n) => Rt(n, t)
), Fa = (e) => R(Oe, e, It), ka = (e) => R(g, e, gt), Ha = (e) => R(Ce, e, St), Ua = (e) => R(Ne, e, Ct), Ga = (e) => R(Me, e, Nt), c = "{name}", u = "{name} * {value}%", v = "{name} + {value}%", F = "{value}", i = {
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
}, k = "{value}", H = "{name}";
class ft {
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
      H,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue() {
    return this.format.includes(k);
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
const xa = (e) => [
  Ot(e.elementRate),
  Mt(e.debuffRate),
  Lt(e.stateRate),
  Pt(e.stateResist),
  Dt(e.regularParam),
  ht(e.extraParam),
  vt(e.specialParam),
  Ft(e.attackElement),
  kt(e.attackState),
  Ht(e.attackSpeed),
  Ut(e.attackTimes),
  Gt(e.attackSkill),
  $t(e.skillTypeAdd),
  zt(e.skillTypeSeal),
  jt(e.skillAdd),
  Kt(e.skillSeal),
  Wt(e.equipWeaponType),
  qt(e.equipArmorType),
  Yt(e.equipLock),
  wt(e.equipSeal),
  Xt(e.slotType),
  xt(e.actionPlus),
  Bt(e.specialFlag),
  bt(e.collaps),
  Vt(e.partyAbility)
], U = (e, t) => typeof t == "string" ? t : e, r = (e, t, n, o) => {
  const s = U(t.domainName, n.domainName), p = U(t.format, n.format);
  return new ft(e, s, p, o);
}, Re = () => ({
  module: Y,
  author: l,
  kind: Cn
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
}), Ot = (e) => r(
  ke,
  i.options.elementRate,
  e,
  Re()
), Mt = (e) => r(
  He,
  i.options.debuffRate,
  e,
  E(g)
), Lt = (e) => r(
  Ue,
  i.options.stateRate,
  e,
  E(g)
), Pt = (e) => r(
  Ge,
  i.options.stateResist,
  e,
  Ie(S)
), Dt = (e) => r(
  xe,
  i.options.regularParam,
  e,
  E(g)
), ht = (e) => r(
  Be,
  i.options.extraParam,
  e,
  E(Ce)
), vt = (e) => r(
  be,
  i.options.specialParam,
  e,
  E(Ne)
), Ft = (e) => r(
  Ve,
  i.options.attackElement,
  e,
  Re()
), kt = (e) => r(
  We,
  i.options.attackState,
  e,
  E(S)
), Ht = (e) => r(qe, i.options.attackSpeed, e), Ut = (e) => r(Ye, i.options.attackTimes, e), Gt = (e) => r(
  we,
  i.options.attackSkill,
  e,
  Ie(Le)
), xt = (e) => r(tt, i.options.actionPlus, e), Bt = (e) => r(
  nt,
  i.options.specialFlag,
  e,
  E(Me)
), bt = (e) => r(
  ot,
  i.options.collaps,
  e,
  E(fe)
), Vt = (e) => r(
  at,
  i.options.partyAbility,
  e,
  E(Oe)
), Wt = (e) => r(
  ze,
  i.options.equipWeaponType,
  e,
  ge(gn)
), qt = (e) => r(
  Qe,
  i.options.equipArmorType,
  e,
  ge(Sn)
), Yt = (e) => r(Je, i.options.equipLock, e), wt = (e) => r(Ze, i.options.equipSeal, e), jt = (e) => r(Xe, i.options.skillAdd, e), Kt = (e) => r($e, i.options.skillSeal, e), Xt = (e) => r(et, i.options.slotType, e), $t = (e) => r(
  je,
  i.options.skillTypeAdd,
  e
), zt = (e) => r(
  Ke,
  i.options.skillTypeSeal,
  e
), Ba = "Trait", ba = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, Va = (e = {}) => ({
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
}), Qt = {
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
}, Wa = (e) => ({
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
}), qa = (e = {}) => ({
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
}, Ya = (e = {}) => ({
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
}), Zt = {
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
}, wa = (e = {}) => ({
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
}), en = {
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
}, ja = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Ka = (e = {}) => ({
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
}), tn = {
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
}, nn = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), Xa = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), $a = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => nn())) ?? [],
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
}, on = {
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
}, za = (e = {}) => ({
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
}), Qa = (e = {}) => ({
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
}), an = {
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
}, rn = {
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
}, Ja = 0, Za = 1, ei = 2, sn = "{name} + {value1}", G = "{name} {value1}%", O = "{value1}% + {value2}", x = "{name} {value1}ターン", I = "{name}", m = {
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
      format: sn
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
}, cn = 11, mn = 12, pn = 13, dn = 21, En = 22, An = 31, _n = 32, Tn = 33, ln = 34, ti = 41, yn = 42, un = 43, Rn = 44, ni = 0, Se = /^[a-zA-Z0-9]+$/, oi = (e) => Se.test(e) ? e : void 0, M = (e) => typeof e == "string" ? Se.test(e) : !1, ai = (e) => [e.author, e.module, e.kind].join("."), ii = (e) => M(e.author) && M(e.module) && M(e.kind), g = "params", Ce = "xparams", Ne = "sparams", fe = "collaps", Oe = "partyAbiility", Me = "sflag", ri = "actor", si = "variables", ci = "map", mi = "enemy", S = "state", Le = "skill", pi = "items", di = "weapon", Ei = "armor", Ai = "class", In = "common_event", _i = "troop", Ti = "colors", gn = "weaponTypes", Sn = "armorTypes", li = "equipTypes", yi = "switches", ui = "skillTypes", Cn = "elements", B = "{value1}", b = "{value2}", V = "{name}";
class Nn {
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
const Ri = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), Ii = (e) => [
  fn(e.options.recoverHp),
  On(e.options.recoverMp),
  Mn(e.options.gainTp),
  Ln(e.options.addState),
  Pn(e.options.removeState),
  Dn(e.options.addBuff),
  Fn(e.options.addDebuff),
  hn(e.options.removeBuff),
  kn(e.options.removeDebuff),
  vn(e.options.learnSkill),
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
  const s = n.domainName ?? t.domainName, p = n.format ?? t.format, Fe = n.desc ?? t.desc;
  return new Nn(e, s, p, Fe, o);
}, fn = (e) => d(
  cn,
  m.options.recoverHp,
  e
), On = (e) => d(
  mn,
  m.options.recoverMp,
  e
), Mn = (e) => d(pn, m.options.gainTp, e), gi = (e) => d(yn, m.options.grow, e), Ln = (e) => d(
  dn,
  m.options.addState,
  e,
  N(S)
), Pn = (e) => d(
  En,
  m.options.removeState,
  e,
  N(S)
), Dn = (e) => d(
  An,
  m.options.addBuff,
  e,
  C()
), hn = (e) => d(
  Tn,
  m.options.removeBuff,
  e,
  C()
), vn = (e) => d(
  un,
  m.options.learnSkill,
  e,
  N(Le)
), Fn = (e) => d(
  _n,
  m.options.addBuff,
  e,
  C()
), kn = (e) => d(
  ln,
  m.options.removeDebuff,
  e,
  C()
), Hn = (e) => d(
  Rn,
  m.options.commonEvent,
  e,
  N(In)
), Si = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Ci = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, Ni = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, Un = {
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
}, Gn = {
  domainName: "ダメージ",
  options: {}
}, D = (e = {}) => ({
  type: e.type ?? 0,
  elementId: e.elementId ?? 0,
  formula: e.formula ?? "",
  variance: e.variance ?? 0,
  critical: e.critical ?? !1
}), fi = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, A = new L(), xn = A.compile(rn), Bn = A.compile(an), bn = A.compile(Qt), Vn = A.compile(Jt), Wn = A.compile(tn), qn = A.compile(on), Yn = A.compile(en), wn = A.compile(Zt), Oi = (e) => xn(e), Mi = (e) => Bn(e), Li = (e) => bn(e), Pi = (e) => Vn(e), Di = (e) => Wn(e), hi = (e) => qn(e), vi = (e) => Yn(e), Fi = (e) => wn(e), ki = 0, jn = 101, Pe = 401, Kn = 102, Xn = 402, $n = 103, Hi = 104, Ui = 105, Gi = 405, zn = 108, Qn = 408, xi = 109, Bi = 111, bi = 411, Vi = 112, Wi = 113, qi = 115, Jn = 117, Yi = 118, wi = 119, ji = 121, Ki = 122, Xi = 123, $i = 124, zi = 125, Qi = 126, Ji = 127, Zi = 128, er = 129, Zn = 132, eo = 133, tr = 134, nr = 135, or = 136, ar = 137, ir = 138, to = 139, rr = 140, sr = 201, cr = 202, mr = 203, pr = 204, dr = 205, Er = 206, Ar = 211, _r = 212, Tr = 213, lr = 214, yr = 216, ur = 217, Rr = 221, Ir = 222, gr = 223, Sr = 224, Cr = 225, Nr = 230, fr = 231, Or = 232, Mr = 233, Lr = 234, Pr = 235, Dr = 236, no = 241, hr = 242, vr = 243, Fr = 244, oo = 245, kr = 246, ao = 249, io = 250, Hr = 251, Ur = 261, Gr = 282, xr = 283, Br = 284, br = 285, Vr = 301, Wr = 302, qr = 605, Yr = 303, wr = 311, jr = 312, Kr = 313, Xr = 314, $r = 315, ro = 320, zr = 321, Qr = 322, Jr = 323, so = 324, co = 325, Zr = 331, es = 332, ts = 333, ns = 334, os = 335, as = 336, is = 337, rs = 339, ss = 340, cs = 351, ms = 342, ps = 352, ds = 353, Es = 354, As = 355, _s = 655, Ts = 356, ls = 357, ys = 0, us = 1, Rs = 2, Is = 3, gs = 4, Ss = 5, Cs = 6, Ns = 7, fs = 8, Os = 9, Ms = 10, Ls = 11, Ps = 12, Ds = 13, hs = 14, vs = 15, Fs = 16, ks = 17, Hs = 18, Us = 19, Gs = 20, xs = 21, Bs = 22, bs = 23, Vs = 24, Ws = 25, qs = 26, Ys = 27, ws = 28, js = 29, Ks = 30, Xs = 31, $s = 32, zs = 33, Qs = 34, Js = 35, Zs = 36, ec = 37, tc = 38, nc = 39, oc = 40, ac = 41, ic = 42, rc = 43, sc = 44, cc = 45, mc = (e, t, n = 0) => ({
  code: e,
  indent: n,
  parameters: t
}), pc = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), mo = () => ({
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}), po = (e = {}) => ({
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
  conditions: po(),
  list: [],
  directionFix: !1,
  image: mo(),
  moveFrequency: 5,
  moveRoute: {
    list: [],
    repeat: !1,
    skippable: !1,
    wait: !1
  }
}), Eo = {
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
}, Ao = (e) => e.toString().padStart(3, "0"), Ec = (e = { id: 0 }) => ({
  name: e.name ?? Ao(e.id),
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
}), _o = new L(), To = _o.compile(Eo), uc = (e) => To(e), Rc = (e = {}) => ({
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
}, a = (e = {}) => ({
  name: e.name ?? "",
  volume: e.volume ?? 100,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
}), gc = (e) => [
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
}, Cc = {
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
}, De = (e, t) => `<${e}:${t}>`, f = () => /<([^<>:]+):([^>]*)>/g, Nc = (e, t) => he(e.note, (n, o) => t(n, o, e)), fc = (e) => he(e, (t, n) => [t, n]), he = (e, t) => {
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
}, lo = "N", yo = "V", hc = (e) => e.map((t) => ({
  text: t.name,
  controlChar: h(lo, t.id)
})), vc = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: h(yo, n)
})).filter((t) => t.text !== ""), uo = {
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
    damage: Gn,
    data: Un,
    traits: i,
    itemEffect: m
  },
  global: uo
}, Ro = {
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
}, Io = {
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
}, go = {
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
}, So = {
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
}, Co = {
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
}, No = {
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
}, fo = {
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
}, y = new L(), Oo = y.compile(Io), Mo = y.compile(fo), Lo = y.compile(No), Po = y.compile(go), Do = y.compile(Ro), ho = y.compile(So), vo = y.compile(Co), Fo = (e) => Do(e), kc = (e) => vo(e), Hc = (e) => ho(e), Uc = (e) => Mo(e), Gc = (e) => Lo(e), xc = (e) => Po(e), Bc = (e) => Oo(e), bc = (e) => Fo(e) && e.code === Pe, Vc = (e, t = 0) => ({
  code: ro,
  parameters: [e.actorId, e.name],
  indent: t
}), Wc = (e, t = 0) => ({
  code: so,
  parameters: [e.actorId, e.nickname],
  indent: t
}), qc = (e, t = 0) => ({
  code: co,
  parameters: [e.actorId, e.profile],
  indent: t
}), Yc = (e, t) => _(e, a({ name: t })), _ = (e, t, n = 0) => ({
  code: e,
  parameters: [a(t)],
  indent: n
}), wc = (e, t = 0) => _(no, e, t), jc = (e, t = 0) => _(oo, e, t), Kc = (e, t = 0) => _(ao, e, t), Xc = (e, t = 0) => _(io, e, t), $c = (e, t = 0) => _(Zn, e, t), zc = (e, t = 0) => _(eo, e, t), Qc = (e, t = 0) => _(to, e, t), Jc = (e, t = 0) => ({
  code: Jn,
  indent: t,
  parameters: ko(e ?? {})
}), Zc = (e) => ({
  eventId: e[0]
}), ko = (e) => [e.eventId ?? 0], ve = (e) => [e], em = (e) => ({
  comment: e[0]
}), Ho = (e, t = 0) => ({
  code: zn,
  indent: t,
  parameters: ve(e)
}), Uo = (e, t = 0) => ({
  code: Qn,
  indent: t,
  parameters: ve(e)
}), tm = (e, t = 0) => e.map(
  (n, o) => o === 0 ? Ho(n, t) : Uo(n, t)
), Go = (e) => [e.variableId ?? 0, e.digits ?? 0], nm = (e) => ({
  variableId: e[0],
  digits: e[1]
}), om = (e, t = 0) => ({
  code: $n,
  indent: t,
  parameters: Go(e ?? {})
}), am = (e, t = 0) => ({
  code: Xn,
  indent: t,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), im = (e) => ({
  index: e[0],
  name: e[1]
}), rm = (e) => [e.index ?? 0, e.name ?? ""], sm = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), cm = (e) => [
  e.choices ?? [],
  e.cancelType ?? 0,
  e.defaultType ?? 0,
  e.positionType ?? 2,
  e.background ?? 0
], mm = (e, t = 0) => ({
  code: Kn,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.choices) ?? [],
    (e == null ? void 0 : e.cancelType) ?? 0,
    (e == null ? void 0 : e.defaultType) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.background) ?? 0
  ]
}), pm = (e, t = 0) => ({
  code: jn,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.facename) ?? "",
    (e == null ? void 0 : e.faceIndex) ?? 0,
    (e == null ? void 0 : e.background) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.speakerName) ?? ""
  ]
}), dm = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4]
}), Em = (e) => [
  e.facename,
  e.faceIndex,
  e.background,
  e.positionType,
  e.speakerName
], Am = (e, t = 0) => ({
  code: Pe,
  indent: t,
  parameters: [e]
});
export {
  ss as ABORT_BATTLE,
  l as AUTHOR_RMMZ,
  Vr as BATTLE_PROCESSING,
  Qr as CHANGE_ACTOR_IMAGES,
  Zi as CHANGE_ARMORS,
  xr as CHANGE_BATTLE_BACKGROUND,
  Zn as CHANGE_BATTLE_BGM,
  zr as CHANGE_CLASS,
  to as CHANGE_DEFEAT_ME,
  or as CHANGE_ENCOUNTER,
  Zr as CHANGE_ENEMY_HP,
  es as CHANGE_ENEMY_MP,
  ts as CHANGE_ENEMY_STATE,
  ms as CHANGE_ENEMY_TP,
  $r as CHANGE_EXP,
  ar as CHANGE_FORMATION_ACCESS,
  zi as CHANGE_GOLD,
  wr as CHANGE_HP,
  Qi as CHANGE_ITEMS,
  nr as CHANGE_MENU_ACCESS,
  jr as CHANGE_MP,
  ro as CHANGE_NAME,
  so as CHANGE_NICKNAME,
  Br as CHANGE_PARALLAX,
  er as CHANGE_PARTY_MEMBER,
  yr as CHANGE_PLAYER_FOLLOWERS,
  co as CHANGE_PROFILE,
  tr as CHANGE_SAVE_ACCESS,
  Gr as CHANGE_TILESET,
  Kr as CHANGE_TP,
  Ar as CHANGE_TRANSPARENCY,
  rr as CHANGE_VEHICLE_BGM,
  Jr as CHANGE_VEHICLE_IMAGE,
  eo as CHANGE_VICTORY_ME,
  Ji as CHANGE_WEAPONS,
  ir as CHANGE_WINDOW_COLOR,
  rt as COLLAPS_BOSS,
  st as COLLAPS_INSTANT,
  ct as COLLAPS_NONE,
  it as COLLAPS_NORMAL,
  zn as COMMENT,
  Qn as COMMENT_BODY,
  Jn as COMMON_EVENT,
  Bi as CONDITIONAL_BRANCH,
  bi as CONDITIONAL_BRANCH_ELSE,
  Xi as CONTROL_SELF_SWITCH,
  ji as CONTROL_SWITCHES,
  $i as CONTROL_TIMER,
  Ki as CONTROL_VARIABLES,
  Gn as DEFAULT_DAMAGE_LABELS,
  uo as DEFAULT_GLOBAL_LABELS,
  Si as DEFAULT_ITEM_LABELS,
  Ci as DEFAULT_SKILL_LABELS,
  Sc as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Ni as DEFAULT_USABLE_ITEM_LABELS,
  An as EFFECT_ADD_BUFF,
  _n as EFFECT_ADD_DEBUFF,
  dn as EFFECT_ADD_STATE,
  Rn as EFFECT_COMMON_EVENT,
  pn as EFFECT_GAIN_TP,
  yn as EFFECT_GROW,
  un as EFFECT_LEARN_SKILL,
  cn as EFFECT_RECOVER_HP,
  mn as EFFECT_RECOVER_MP,
  Tn as EFFECT_REMOVE_BUFF,
  ln as EFFECT_REMOVE_DEBUFF,
  En as EFFECT_REMOVE_STATE,
  ti as EFFECT_SPECIAL,
  os as ENEMY_APPEAR,
  ns as ENEMY_RECOVER_ALL,
  as as ENEMY_TRANSFORM,
  lr as ERASE_EVENT,
  Pr as ERASE_PICTURE,
  qi as EXIT_EVENT_PROCESSING,
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
  Ir as FADEIN_SCREEN,
  hr as FADEOUT_BGM,
  kr as FADEOUT_BGS,
  Rr as FADEOUT_SCREEN,
  oa as FILENAME_ACTORS,
  Ea as FILENAME_ANIMATIONS,
  ca as FILENAME_ARMORS,
  aa as FILENAME_CLASSES,
  _a as FILENAME_COMMON_EVENTS,
  ma as FILENAME_ENEMIES,
  ra as FILENAME_ITEMS,
  Ta as FILENAME_MAP_INFOS,
  ia as FILENAME_SKILLS,
  da as FILENAME_STATES,
  na as FILENAME_SYSTEM,
  Aa as FILENAME_TILESET,
  pa as FILENAME_TROOPS,
  sa as FILENAME_WEAPONS,
  Tt as FLAG_ID_AUTO_BATTLE,
  lt as FLAG_ID_GUARD,
  ut as FLAG_ID_PRESERVE_TP,
  yt as FLAG_ID_SUBSTITUTE,
  Sr as FLASH_SCREEN,
  ua as FOLDER_AUDIO,
  Bo as FOLDER_AUDIO_BGM,
  Wo as FOLDER_AUDIO_BGS,
  Vo as FOLDER_AUDIO_ME,
  bo as FOLDER_AUDIO_SE,
  la as FOLDER_DATA,
  ya as FOLDER_IMG,
  qo as FOLDER_IMG_BATTLEBACK1,
  Yo as FOLDER_IMG_BATTLEBACK2,
  wo as FOLDER_IMG_CHACTERS,
  jo as FOLDER_IMG_ENEMIES,
  Ko as FOLDER_IMG_FACES,
  Xo as FOLDER_IMG_PARALLACES,
  $o as FOLDER_IMG_PICTURES,
  zo as FOLDER_IMG_SV_ACTORS,
  Qo as FOLDER_IMG_SV_ENEMIES,
  Jo as FOLDER_IMG_SYSTEM,
  Zo as FOLDER_IMG_TILESETS,
  ea as FOLDER_IMG_TITLES1,
  ta as FOLDER_IMG_TITLES2,
  Ra as FOLDER_JS,
  rs as FORCE_ACTION,
  ds as GAME_OVER,
  ur as GATHER_FOLLOWERS,
  br as GET_LOCATION_INFO,
  Er as GET_ONOFF_VEHICLE,
  Ja as HITTYPE_CERTAIN,
  ei as HITTYPE_MAGICAL,
  Za as HITTYPE_PHYSICAL,
  $n as INPUT_NUMBER,
  Yi as LABEL,
  ja as LABELS_DATA_WEAPON,
  wi as LABEL_JUMP,
  Fc as LABEL_REGISTRY_JP,
  Un as LABEL_SET_DATA,
  m as LABEL_SET_ITEM_EFFECT,
  i as LABEL_SET_TRAIT,
  Vi as LOOP,
  Wi as LOOP_BREAK,
  q as MODULE_DATA,
  Y as MODULE_SYSTEM,
  P as MODULE_TRAIT,
  Or as MOVE_PICTURE,
  Cc as MockSystemLabelDataTypes,
  Yr as NAME_INPUT_PROCESSING,
  ki as NO_OPERATION,
  cs as OPEN_MENU_SCREEN,
  ps as OPEN_SAVE_SCREEN,
  dt as PARTY_ABILITY_CANCEL_SURPRISE,
  _t as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  mt as PARTY_ABILITY_ENCOUNTER_HALF,
  pt as PARTY_ABILITY_ENCOUNTER_NONE,
  At as PARTY_ABILITY_GOLD_DOUBLE,
  Et as PARTY_ABILITY_RAISE_PREEMPTIVE,
  no as PLAY_BGM,
  oo as PLAY_BGS,
  ao as PLAY_ME,
  Ur as PLAY_MOVIE,
  io as PLAY_SE,
  Ts as PLUGIN_COMMAND_MV,
  ls as PLUGIN_COMMAND_MZ,
  Xr as RECOVER_ALL,
  se as REGULAR_PARAM_AGI,
  oe as REGULAR_PARAM_ATK,
  ae as REGULAR_PARAM_DEF,
  ce as REGULAR_PARAM_LUK,
  ie as REGULAR_PARAM_MATK,
  te as REGULAR_PARAM_MAX_HP,
  ne as REGULAR_PARAM_MAX_MP,
  re as REGULAR_PARAM_MDEF,
  Fr as RESUME_BGM,
  Es as RETURN_TO_TITLE_SCREEN,
  Mr as ROTATE_PICTURE,
  rc as ROUTE_CHANGE_BLEND_MODE,
  Ks as ROUTE_CHANGE_FREQ,
  ac as ROUTE_CHANGE_IMAGE,
  ic as ROUTE_CHANGE_OPACITY,
  js as ROUTE_CHANGE_SPEED,
  Zs as ROUTE_DIR_FIX_OFF,
  Js as ROUTE_DIR_FIX_ON,
  ys as ROUTE_END,
  hs as ROUTE_JUMP,
  Ls as ROUTE_MOVE_AWAY,
  Ds as ROUTE_MOVE_BACKWARD,
  us as ROUTE_MOVE_DOWN,
  Ps as ROUTE_MOVE_FORWARD,
  Rs as ROUTE_MOVE_LEFT,
  Ss as ROUTE_MOVE_LOWER_L,
  Cs as ROUTE_MOVE_LOWER_R,
  Os as ROUTE_MOVE_RANDOM,
  Is as ROUTE_MOVE_RIGHT,
  Ms as ROUTE_MOVE_TOWARD,
  gs as ROUTE_MOVE_UP,
  Ns as ROUTE_MOVE_UPPER_L,
  fs as ROUTE_MOVE_UPPER_R,
  sc as ROUTE_PLAY_SE,
  cc as ROUTE_SCRIPT,
  Qs as ROUTE_STEP_ANIME_OFF,
  zs as ROUTE_STEP_ANIME_ON,
  ws as ROUTE_SWITCH_OFF,
  Ys as ROUTE_SWITCH_ON,
  tc as ROUTE_THROUGH_OFF,
  ec as ROUTE_THROUGH_ON,
  oc as ROUTE_TRANSPARENT_OFF,
  nc as ROUTE_TRANSPARENT_ON,
  Bs as ROUTE_TURN_180D,
  xs as ROUTE_TURN_90D_L,
  Gs as ROUTE_TURN_90D_R,
  bs as ROUTE_TURN_90D_R_L,
  qs as ROUTE_TURN_AWAY,
  Fs as ROUTE_TURN_DOWN,
  ks as ROUTE_TURN_LEFT,
  Vs as ROUTE_TURN_RANDOM,
  Hs as ROUTE_TURN_RIGHT,
  Ws as ROUTE_TURN_TOWARD,
  Us as ROUTE_TURN_UP,
  vs as ROUTE_WAIT,
  $s as ROUTE_WALK_ANIME_OFF,
  Xs as ROUTE_WALK_ANIME_ON,
  vr as SAVE_BGM,
  fi as SCHEMA_DAMAGE,
  Qt as SCHEMA_DATA_ACTOR,
  Jt as SCHEMA_DATA_ARMMOR,
  Zt as SCHEMA_DATA_CLASS,
  on as SCHEMA_DATA_ENEMY,
  rn as SCHEMA_DATA_ITEM,
  Eo as SCHEMA_DATA_MAP_INFO,
  an as SCHEMA_DATA_SKILL,
  en as SCHEMA_DATA_STATE,
  tn as SCHEMA_DATA_WEAPON,
  Ic as SCHEMA_SYSTEM_ADVANCED,
  ba as SCHEMA_TRAIT,
  As as SCRIPT_EVAL,
  _s as SCRIPT_EVAL_BODY,
  pr as SCROLL_MAP,
  Hi as SELECT_ITEM,
  mr as SET_EVENT_LOCATION,
  dr as SET_MOVEMENT_ROUTE,
  cr as SET_VEHICLE_LOCATION,
  Dr as SET_WEATHER_EFFECT,
  Cr as SHAKE_SCREEN,
  Wr as SHOP_PROCESSING,
  qr as SHOP_PROCESSING_BODY,
  _r as SHOW_ANIMATION,
  Tr as SHOW_BALLOON_ICON,
  is as SHOW_BATTLE_ANIMATION,
  Kn as SHOW_CHOICES,
  Xn as SHOW_CHOICES_ITEM,
  jn as SHOW_MESSAGE,
  Pe as SHOW_MESSAGE_BODY,
  fr as SHOW_PICTURE,
  Ui as SHOW_SCROLLING_TEXT,
  Gi as SHOW_SCROLLING_TEXT_BODY,
  xi as SKIP,
  ni as SPECIAL_EFFECT_ESCAPE,
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
  Sn as SRC_ARMOR_TYPES,
  Ti as SRC_COLOR,
  ri as SRC_DATA_ACTOR,
  Ei as SRC_DATA_ARMOR,
  Ai as SRC_DATA_CLASS,
  In as SRC_DATA_COMMON_EVNET,
  mi as SRC_DATA_ENEMY,
  pi as SRC_DATA_ITEMS,
  ci as SRC_DATA_MAP,
  Le as SRC_DATA_SKILL,
  S as SRC_DATA_STATE,
  _i as SRC_DATA_TROOP,
  si as SRC_DATA_VARIABLE,
  di as SRC_DATA_WEAPON,
  Cn as SRC_ELEMENTS,
  li as SRC_EQUIP_TYPES,
  Ce as SRC_PARAMS_EXTRA,
  g as SRC_PARAMS_REGULAR,
  Ne as SRC_PARAMS_SPECIAL,
  ui as SRC_SKILL_TYPES,
  yi as SRC_SWITCHES,
  fe as SRC_TRAIT_COLLAPS,
  Oe as SRC_TRAIT_PARTY_ABILITY,
  Me as SRC_TRAIT_SPECIAL_FLAG,
  gn as SRC_WEAPON_TYPES,
  Hr as STOP_SE,
  Lr as TINT_PICTURE,
  gr as TINT_SCREEN,
  tt as TRAIT_ACTION_PLUS,
  Ve as TRAIT_ATTACK_ELEMENT,
  we as TRAIT_ATTACK_SKILL,
  qe as TRAIT_ATTACK_SPEED,
  We as TRAIT_ATTACK_STATE,
  Ye as TRAIT_ATTACK_TIMES,
  ot as TRAIT_COLLAPSE_TYPE,
  He as TRAIT_DEBUFF_RATE,
  ke as TRAIT_ELEMENT_RATE,
  Qe as TRAIT_EQUIP_ARMOR_TYPE,
  Je as TRAIT_EQUIP_LOCK,
  Ze as TRAIT_EQUIP_SEAL,
  ze as TRAIT_EQUIP_WEAPON_TYPE,
  xe as TRAIT_PARAM,
  at as TRAIT_PARTY_ABILITY,
  Xe as TRAIT_SKILL_ADD,
  $e as TRAIT_SKILL_SEAL,
  je as TRAIT_SKILL_TYPE_ADD,
  Ke as TRAIT_SKILL_TYPE_SEAL,
  et as TRAIT_SLOT_TYPE,
  be as TRAIT_SPARAM,
  nt as TRAIT_SPECIAL_FLAG,
  Ue as TRAIT_STATE_RATE,
  Ge as TRAIT_STATE_RESIST,
  Be as TRAIT_XPARAM,
  sr as TRANSFER_PLAYER,
  Ba as TYPENAME_TRAIT,
  ft as TraitDescriptor,
  Nr as WAIT,
  va as buildCollapsSource,
  Ha as buildExtraParamSource,
  Fa as buildPartyAbilitySource,
  ka as buildRegularParamSource,
  Ga as buildSpecialFlagSource,
  Ua as buildSpecialParamSource,
  em as convertCommentArrayToObject,
  hc as createActorControlChars,
  h as createControlCharFormat,
  mc as createEventCommand,
  De as createNoteEntity,
  vc as createSystemVariableControlChars,
  Dn as defineEffectAddBuff,
  Fn as defineEffectAddDebuff,
  Ln as defineEffectAddState,
  Hn as defineEffectCommonEvent,
  Mn as defineEffectGainTp,
  gi as defineEffectGrow,
  vn as defineEffectLearnSkill,
  fn as defineEffectRecoverHp,
  On as defineEffectRecoverMp,
  hn as defineEffectRemoveBuff,
  kn as defineEffectRemoveDebuff,
  Pn as defineEffectRemoveState,
  Da as extraParamName,
  Rt as foldCollapsOptions,
  St as foldExtraParam,
  It as foldPartyAbilityOptions,
  gt as foldRegularParam,
  Nt as foldSpecialFlag,
  Ct as foldSpecialParams,
  Ri as formatItemEffectText,
  Zc as fromArrayCommonEvent,
  nm as fromArrayInputNumber,
  sm as fromArraySetupChoice,
  im as fromArraySetupChoiceItem,
  dm as fromArrayShowMessageHeader,
  Pc as fromStringArray,
  Ma as getArmorTypes,
  Dc as getControlChars,
  Ca as getElementTypes,
  Na as getEquipTypes,
  Mc as getNoteValue,
  La as getParamNames,
  fa as getSkillTypes,
  Sa as getVariableNames,
  Oa as getWeaponTypes,
  kc as isCommandAudio,
  Hc as isCommandCommonEvent,
  xc as isCommandInputNumber,
  Gc as isCommandShowChoiceItem,
  Uc as isCommandShowChoices,
  Bc as isCommandShowMessage,
  bc as isCommandShowMessageBody,
  Fo as isCommandTextBody,
  Li as isDataActor,
  Pi as isDataArmor,
  Fi as isDataClass,
  hi as isDataEnemy,
  Oi as isDataItem,
  uc as isDataMapInfo,
  Mi as isDataSkill,
  vi as isDataState,
  Di as isDataWeapon,
  ii as isValid,
  ai as joinSourceKey,
  Va as makeActorData,
  qa as makeArmorData,
  Yc as makeAudioCommand,
  a as makeAudioFileParams,
  Ya as makeClassData,
  Jc as makeCommand2_CommonEvent,
  am as makeCommand2_ShowChoiceItem,
  _ as makeCommandAudioAny,
  Vc as makeCommandChangeActorName,
  Wc as makeCommandChangeActorNickName,
  qc as makeCommandChangeActorProfile,
  $c as makeCommandChangeBattleBGM,
  Qc as makeCommandChangeDefeatME,
  zc as makeCommandChangeVictoryME,
  Uo as makeCommandCommentBody,
  Ho as makeCommandCommentHeader,
  om as makeCommandInputNumber,
  wc as makeCommandPlayBGM,
  jc as makeCommandPlayBGS,
  Kc as makeCommandPlayME,
  Xc as makeCommandPlaySE,
  mm as makeCommandSetupChoice,
  pm as makeCommandShowMessage,
  Am as makeCommandShowMessageBody,
  ve as makeCommentArray,
  tm as makeCommentCommandArray,
  _c as makeCommonEventData,
  D as makeDamage,
  nn as makeDropItem,
  Xa as makeEnemyAction,
  $a as makeEnemyData,
  po as makeEventPageCondition,
  za as makeItemData,
  Ac as makeMapData,
  pc as makeMapEvent,
  mo as makeMapEventIamge,
  dc as makeMapEventPage,
  Ec as makeMapInfoData,
  f as makeRegex,
  Qa as makeSkillData,
  gc as makeSoundsArray,
  wa as makeStateData,
  Rc as makeSystemAdvanced,
  Tc as makeTroopData,
  yc as makeTroopEventConditions,
  lc as makeTroopMember,
  Ka as makeWeaponData,
  Ia as mergeDomainLabel,
  ga as mergeNestedPrimitiveRecords,
  W as mergeWithDefaults,
  Wa as normalizeDataActor,
  fc as readNote,
  he as readNoteEx,
  Nc as readNoteObject,
  Pa as regularParamName,
  Oc as replaceNote,
  Ii as resolveItemEffectLabels,
  xa as resolveTraitLabels,
  oi as sanitizeKey,
  Lc as setNoteValue,
  ha as specialParamName,
  M as testUnknonwKey,
  ko as toArrayCommonEvent,
  Go as toArrayInputNumber,
  cm as toArraySetupChoice,
  rm as toArraySetupChoiceItem,
  Em as toArrayShowMessageHeader,
  R as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
