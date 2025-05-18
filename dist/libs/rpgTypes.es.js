import h from "ajv";
const pa = "bgm", da = "se", Ea = "me", ya = "bgs", Aa = "battlebacks1", la = "battlebacks2", _a = "characters", Ta = "enemies", ua = "faces", Ra = "parallaxes", ga = "pictures", Ia = "sv_actors", Sa = "sv_enemies", Ca = "system", Na = "tilesets", fa = "titles1", Oa = "titles2", Ma = "System.json", La = "Actors.json", Pa = "Classes.json", ha = "Skills.json", Da = "Items.json", va = "Weapons.json", Fa = "Armors.json", Ha = "Enemies.json", xa = "Troops.json", ka = "States.json", ba = "Animations.json", Ua = "Tilesets.json", Ba = "CommonEvents.json", Ga = "MapInfos.json", Va = "data", qa = "img", wa = "audio", Wa = "js", Y = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const s = t[o];
    typeof s == "string" && (n[o] = s);
  }
  return n;
}, Ya = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: Y(e.options, t.options ?? {})
}), ja = (e, t) => {
  const n = {};
  for (const o in e) {
    const s = e[o], p = t[o] ?? {};
    n[o] = Y(
      s,
      p
    );
  }
  return n;
}, _ = (e, t) => ({
  name: e,
  id: t
}), Ka = (e) => e.variables.map(_), Xa = (e) => e.elements.map(_), $a = (e) => e.equipTypes.map(_), za = (e) => e.skillTypes.map(_), Qa = (e) => e.weaponTypes.map(_), Ja = (e) => e.armorTypes.map(_), Za = (e) => e.terms.params.map(_), T = "rmmz", D = "trait", j = "data", K = "system", ze = 11, Qe = 12, Je = 13, Ze = 14, et = 21, tt = 22, nt = 23, ot = 31, at = 32, it = 33, rt = 34, st = 35, ct = 41, mt = 42, pt = 43, dt = 44, Et = 51, yt = 52, At = 53, lt = 54, _t = 55, Tt = 61, ut = 62, Rt = 63, gt = 64, It = 0, St = 1, Ct = 2, Nt = 3, ft = 0, Ot = 1, Mt = 2, Lt = 3, Pt = 4, ht = 5, Dt = 0, vt = 1, Ft = 2, Ht = 3, X = 0, $ = 1, z = 2, Q = 3, J = 4, Z = 5, ee = 6, te = 7, ne = 8, oe = 9, ae = 0, ie = 1, re = 2, se = 3, ce = 4, me = 5, pe = 6, de = 7, Ee = 0, ye = 1, Ae = 2, le = 3, _e = 4, Te = 5, ue = 6, Re = 7, ge = 8, Ie = 9, ei = (e, t) => {
  switch (e) {
    case ae:
      return t.maxHp;
    case ie:
      return t.maxMp;
    case re:
      return t.atk;
    case se:
      return t.def;
    case ce:
      return t.matk;
    case me:
      return t.mdef;
    case pe:
      return t.agi;
    case de:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, ti = (e, t) => {
  switch (e) {
    case Q:
      return t.criticalEvasionRate;
    case $:
      return t.evasionRate;
    case ee:
      return t.counterAttackRate;
    case z:
      return t.criticalRate;
    case X:
      return t.hitRate;
    case te:
      return t.hpRegenerationRate;
    case J:
      return t.magicEvasionRate;
    case Z:
      return t.magicReflectionRate;
    case ne:
      return t.mpRegenerationRate;
    case oe:
      return t.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, ni = (e, t) => {
  switch (e) {
    case Ie:
      return t.experienceRate;
    case Ee:
      return t.targetRate;
    case ge:
      return t.floorDamageRate;
    case ye:
      return t.guradEffectRate;
    case _e:
      return t.mpCostRate;
    case Te:
      return t.tpChargeRate;
    case ue:
      return t.physicalDamageRate;
    case Re:
      return t.magicDamageRate;
    case le:
      return t.pharmacology;
    case Ae:
      return t.recoveryEffectRate;
  }
  return `?sparams[${e}]`;
}, xt = (e, t) => [
  {
    id: It,
    name: t.normal
  },
  {
    id: St,
    name: e.bossCollaps
  },
  {
    id: Ct,
    name: e.instantCollaps
  },
  {
    id: Nt,
    name: e.noneCollaps
  }
], kt = (e) => [
  {
    id: ft,
    name: e.encounterHalf
  },
  {
    id: Ot,
    name: e.encounterNone
  },
  {
    id: Mt,
    name: e.cancelSurprise
  },
  {
    id: Lt,
    name: e.raisePreemptive
  },
  {
    id: Pt,
    name: e.goldDouble
  },
  {
    id: ht,
    name: e.dropItemDouble
  }
], bt = (e) => [
  { id: ae, name: e.maxHp },
  { id: ie, name: e.maxMp },
  { id: re, name: e.atk },
  { id: se, name: e.def },
  { id: ce, name: e.matk },
  { id: me, name: e.mdef },
  { id: pe, name: e.agi },
  { id: de, name: e.luk }
], Ut = (e) => [
  {
    id: X,
    name: e.hitRate
  },
  {
    id: $,
    name: e.evasionRate
  },
  {
    id: z,
    name: e.criticalRate
  },
  {
    id: Q,
    name: e.criticalEvasionRate
  },
  {
    id: J,
    name: e.magicEvasionRate
  },
  {
    id: Z,
    name: e.magicReflectionRate
  },
  {
    id: ee,
    name: e.counterAttackRate
  },
  {
    id: te,
    name: e.hpRegenerationRate
  },
  {
    id: ne,
    name: e.mpRegenerationRate
  },
  {
    id: oe,
    name: e.tpRegenerationRate
  }
], Bt = (e) => [
  {
    id: Ee,
    name: e.targetRate
  },
  {
    id: ye,
    name: e.guradEffectRate
  },
  {
    id: Ae,
    name: e.recoveryEffectRate
  },
  {
    id: le,
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
    id: ue,
    name: e.physicalDamageRate
  },
  {
    id: Re,
    name: e.magicDamageRate
  },
  {
    id: ge,
    name: e.floorDamageRate
  },
  {
    id: Ie,
    name: e.experienceRate
  }
], Gt = (e) => [
  {
    id: Dt,
    name: e.autoBattle
  },
  {
    id: vt,
    name: e.guard
  },
  {
    id: Ft,
    name: e.substitute
  },
  {
    id: Ht,
    name: e.preventEscape
  }
], g = (e, t, n) => ({
  items: n(t.options),
  label: t.domainName,
  source: {
    author: T,
    module: D,
    kind: e
  }
}), oi = (e, t) => g(
  Le,
  e,
  (n) => xt(n, t)
), ai = (e) => g(Pe, e, kt), ii = (e) => g(C, e, bt), ri = (e) => g(Oe, e, Ut), si = (e) => g(Me, e, Bt), ci = (e) => g(he, e, Gt), c = "{name}", R = "{name} * {value}%", x = "{name} + {value}%", k = "{value}", i = {
  domainName: "特徴",
  options: {
    regularParam: {
      domainName: "基本能力値",
      format: R,
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
      format: x,
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
      format: R,
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
      format: R
    },
    debuffRate: {
      domainName: "弱体有効度",
      format: R
    },
    stateRate: {
      domainName: "ステート有効度",
      format: R
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
      format: x
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
      format: R
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
}, b = "{value}", U = "{name}";
class Vt {
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
      b,
      t.value.toString()
    );
    return this.dataSource ? o.replaceAll(
      U,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue() {
    return this.format.includes(b);
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
const mi = (e) => [
  qt(e.elementRate),
  wt(e.debuffRate),
  Wt(e.stateRate),
  Yt(e.stateResist),
  jt(e.regularParam),
  Kt(e.extraParam),
  Xt(e.specialParam),
  $t(e.attackElement),
  zt(e.attackState),
  Qt(e.attackSpeed),
  Jt(e.attackTimes),
  Zt(e.attackSkill),
  En(e.skillTypeAdd),
  yn(e.skillTypeSeal),
  mn(e.skillAdd),
  pn(e.skillSeal),
  an(e.equipWeaponType),
  rn(e.equipArmorType),
  sn(e.equipLock),
  cn(e.equipSeal),
  dn(e.slotType),
  en(e.actionPlus),
  tn(e.specialFlag),
  nn(e.collaps),
  on(e.partyAbility)
], B = (e, t) => typeof t == "string" ? t : e, r = (e, t, n, o) => {
  const s = B(t.domainName, n.domainName), p = B(t.format, n.format);
  return new Vt(e, s, p, o);
}, Se = () => ({
  module: K,
  author: T,
  kind: Bn
}), Ce = (e) => ({
  module: j,
  author: T,
  kind: e
}), E = (e) => ({
  author: T,
  module: D,
  kind: e
}), Ne = (e) => ({
  author: T,
  module: K,
  kind: e
}), qt = (e) => r(
  ze,
  i.options.elementRate,
  e,
  Se()
), wt = (e) => r(
  Qe,
  i.options.debuffRate,
  e,
  E(C)
), Wt = (e) => r(
  Je,
  i.options.stateRate,
  e,
  E(C)
), Yt = (e) => r(
  Ze,
  i.options.stateResist,
  e,
  Ce(N)
), jt = (e) => r(
  et,
  i.options.regularParam,
  e,
  E(C)
), Kt = (e) => r(
  tt,
  i.options.extraParam,
  e,
  E(Oe)
), Xt = (e) => r(
  nt,
  i.options.specialParam,
  e,
  E(Me)
), $t = (e) => r(
  ot,
  i.options.attackElement,
  e,
  Se()
), zt = (e) => r(
  at,
  i.options.attackState,
  e,
  E(N)
), Qt = (e) => r(it, i.options.attackSpeed, e), Jt = (e) => r(rt, i.options.attackTimes, e), Zt = (e) => r(
  st,
  i.options.attackSkill,
  e,
  Ce(De)
), en = (e) => r(Tt, i.options.actionPlus, e), tn = (e) => r(
  ut,
  i.options.specialFlag,
  e,
  E(he)
), nn = (e) => r(
  Rt,
  i.options.collaps,
  e,
  E(Le)
), on = (e) => r(
  gt,
  i.options.partyAbility,
  e,
  E(Pe)
), an = (e) => r(
  Et,
  i.options.equipWeaponType,
  e,
  Ne(bn)
), rn = (e) => r(
  yt,
  i.options.equipArmorType,
  e,
  Ne(Un)
), sn = (e) => r(At, i.options.equipLock, e), cn = (e) => r(lt, i.options.equipSeal, e), mn = (e) => r(pt, i.options.skillAdd, e), pn = (e) => r(dt, i.options.skillSeal, e), dn = (e) => r(_t, i.options.slotType, e), En = (e) => r(
  ct,
  i.options.skillTypeAdd,
  e
), yn = (e) => r(
  mt,
  i.options.skillTypeSeal,
  e
), pi = "Trait", di = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, Ei = (e = {}) => ({
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
}), An = {
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
}, yi = (e) => ({
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
}), Ai = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  iconIndex: e.iconIndex ?? 0,
  description: e.description ?? "",
  traits: e.traits ?? [],
  note: e.note ?? "",
  atypeId: e.atypeId ?? 0,
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
}), ln = {
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
    "etypeId",
    "atypeId"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    atypeId: { type: "integer", minimum: 0 },
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
}, li = (e = {}) => ({
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
}), _n = {
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
}, _i = (e = {}) => ({
  name: e.name ?? "",
  id: e.id ?? 0,
  iconIndex: e.iconIndex ?? 0,
  message1: e.message1 ?? "",
  message2: e.message2 ?? "",
  message3: e.message3 ?? "",
  message4: e.message4 ?? "",
  traits: [],
  note: e.note ?? "",
  messageType: e.messageType ?? 0,
  releaseByDamage: e.releaseByDamage ?? !1,
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
}), Tn = {
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
    messageType: { type: "integer" },
    releaseByDamage: { type: "boolean" },
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
}, Ti = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, ui = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  iconIndex: e.iconIndex ?? 0,
  description: e.description ?? "",
  traits: e.traits ?? [],
  note: e.note ?? "",
  animationId: e.animationId ?? 0,
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
  damage: v(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), un = {
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
    "etypeId",
    "animationId"
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
    animationId: { type: "integer", minimum: 0 },
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
        critical: { type: "boolean", default: !1 }
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
}, Rn = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), Ri = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), gi = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => Rn())) ?? [],
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
}, gn = {
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
}, Ii = (e = {}) => ({
  animationId: e.animationId ?? 0,
  id: e.id ?? 0,
  name: e.name ?? "",
  iconIndex: e.iconIndex ?? 0,
  description: e.description ?? "",
  itypeId: e.itypeId ?? 0,
  note: e.note ?? "",
  consumable: e.consumable ?? !1,
  scope: e.scope ?? 0,
  occasion: e.occasion ?? 0,
  speed: e.speed ?? 0,
  successRate: e.successRate ?? 0,
  repeats: e.repeats ?? 0,
  tpGain: e.tpGain ?? 0,
  hitType: e.hitType ?? 0,
  damage: v(e.damage ?? {}),
  effects: [],
  price: 0
}), Si = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: v(e.damage ?? {}),
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
}), In = {
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
}, Sn = {
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
    itypeId: { type: "integer" },
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
}, Ci = 0, Ni = 1, fi = 2, Cn = "{name} + {value1}", G = "{name} {value1}%", L = "{value1}% + {value2}", V = "{name} {value1}ターン", S = "{name}", m = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: V
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: V
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: L
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: Cn
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: S
    },
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: L
    },
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: L
    },
    removeBuff: {
      desc: "バフを解除する",
      domainName: "バフ解除",
      format: S
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: S
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: G
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: S
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: G
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: S
    }
  }
}, Nn = 11, fn = 12, On = 13, Mn = 21, Ln = 22, Pn = 31, hn = 32, Dn = 33, vn = 34, Oi = 41, Fn = 42, Hn = 43, xn = 44, Mi = 0, fe = /^[a-zA-Z0-9]+$/, Li = (e) => fe.test(e) ? e : void 0, P = (e) => typeof e == "string" ? fe.test(e) : !1, Pi = (e) => [e.author, e.module, e.kind].join("."), hi = (e) => P(e.author) && P(e.module) && P(e.kind), C = "params", Oe = "xparams", Me = "sparams", Le = "collaps", Pe = "partyAbiility", he = "sflag", Di = "actor", vi = "variables", Fi = "map", Hi = "enemy", N = "state", De = "skill", xi = "items", ki = "weapon", bi = "armor", Ui = "class", kn = "common_event", Bi = "troop", Gi = "colors", bn = "weaponTypes", Un = "armorTypes", Vi = "equipTypes", qi = "switches", wi = "skillTypes", Bn = "elements", q = "{value1}", w = "{value2}", W = "{name}";
class Gn {
  constructor(t, n, o, s, p) {
    this.codeId = t, this.label = n, this.format = o, this.description = s, this.dataSource = p;
  }
  formatText(t, n) {
    const o = this.format.replaceAll(q, t.value1.toString()).replaceAll(w, t.value2.toString());
    return this.dataSource ? o.replaceAll(
      W,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue1() {
    return this.format.includes(q);
  }
  requiresValue2() {
    return this.format.includes(w);
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
const Wi = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), Yi = (e) => [
  Vn(e.options.recoverHp),
  qn(e.options.recoverMp),
  wn(e.options.gainTp),
  Wn(e.options.addState),
  Yn(e.options.removeState),
  jn(e.options.addBuff),
  $n(e.options.addDebuff),
  Kn(e.options.removeBuff),
  zn(e.options.removeDebuff),
  Xn(e.options.learnSkill),
  Qn(e.options.commonEvent)
], f = () => ({
  author: T,
  module: D,
  kind: C
}), O = (e) => ({
  author: T,
  module: j,
  kind: e
}), d = (e, t, n, o) => {
  const s = n.domainName ?? t.domainName, p = n.format ?? t.format, $e = n.desc ?? t.desc;
  return new Gn(e, s, p, $e, o);
}, Vn = (e) => d(
  Nn,
  m.options.recoverHp,
  e
), qn = (e) => d(
  fn,
  m.options.recoverMp,
  e
), wn = (e) => d(On, m.options.gainTp, e), ji = (e) => d(Fn, m.options.grow, e), Wn = (e) => d(
  Mn,
  m.options.addState,
  e,
  O(N)
), Yn = (e) => d(
  Ln,
  m.options.removeState,
  e,
  O(N)
), jn = (e) => d(
  Pn,
  m.options.addBuff,
  e,
  f()
), Kn = (e) => d(
  Dn,
  m.options.removeBuff,
  e,
  f()
), Xn = (e) => d(
  Hn,
  m.options.learnSkill,
  e,
  O(De)
), $n = (e) => d(
  hn,
  m.options.addBuff,
  e,
  f()
), zn = (e) => d(
  vn,
  m.options.removeDebuff,
  e,
  f()
), Qn = (e) => d(
  xn,
  m.options.commonEvent,
  e,
  O(kn)
), Ki = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Xi = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, $i = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, Jn = {
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
}, Zn = {
  domainName: "ダメージ",
  options: {}
}, v = (e = {}) => ({
  type: e.type ?? 0,
  elementId: e.elementId ?? 0,
  formula: e.formula ?? "",
  variance: e.variance ?? 0,
  critical: e.critical ?? !1
}), zi = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, A = new h(), eo = A.compile(Sn), to = A.compile(In), no = A.compile(An), oo = A.compile(ln), ao = A.compile(un), io = A.compile(gn), ro = A.compile(Tn), so = A.compile(_n), Qi = (e) => eo(e), Ji = (e) => to(e), Zi = (e) => no(e), er = (e) => oo(e), tr = (e) => ao(e), nr = (e) => io(e), or = (e) => ro(e), ar = (e) => so(e), ir = 0, co = 101, ve = 401, mo = 102, po = 402, Eo = 103, rr = 104, yo = 105, Fe = 405, He = 108, xe = 408, sr = 109, cr = 111, mr = 411, pr = 112, dr = 113, Er = 115, Ao = 117, yr = 118, Ar = 119, lr = 121, _r = 122, Tr = 123, ur = 124, Rr = 125, gr = 126, Ir = 127, Sr = 128, Cr = 129, ke = 132, be = 133, Nr = 134, fr = 135, Or = 136, Mr = 137, Lr = 138, Ue = 139, Pr = 140, hr = 201, Dr = 202, vr = 203, Fr = 204, Hr = 205, xr = 206, kr = 211, br = 212, Ur = 213, Br = 214, Gr = 216, Vr = 217, qr = 221, wr = 222, Wr = 223, Yr = 224, jr = 225, Kr = 230, Xr = 231, $r = 232, zr = 233, Qr = 234, Jr = 235, Zr = 236, Be = 241, es = 242, ts = 243, ns = 244, Ge = 245, os = 246, Ve = 249, qe = 250, as = 251, is = 261, rs = 282, ss = 283, cs = 284, ms = 285, ps = 301, ds = 302, Es = 605, ys = 303, As = 311, ls = 312, _s = 313, Ts = 314, us = 315, lo = 320, Rs = 321, gs = 322, Is = 323, _o = 324, To = 325, Ss = 331, Cs = 332, Ns = 333, fs = 334, Os = 335, Ms = 336, Ls = 337, Ps = 339, hs = 340, Ds = 351, vs = 342, Fs = 352, Hs = 353, xs = 354, we = 355, We = 655, ks = 356, bs = 357, Us = 0, Bs = 1, Gs = 2, Vs = 3, qs = 4, ws = 5, Ws = 6, Ys = 7, js = 8, Ks = 9, Xs = 10, $s = 11, zs = 12, Qs = 13, Js = 14, Zs = 15, ec = 16, tc = 17, nc = 18, oc = 19, ac = 20, ic = 21, rc = 22, sc = 23, cc = 24, mc = 25, pc = 26, dc = 27, Ec = 28, yc = 29, Ac = 30, lc = 31, _c = 32, Tc = 33, uc = 34, Rc = 35, gc = 36, Ic = 37, Sc = 38, Cc = 39, Nc = 40, fc = 41, Oc = 42, Mc = 43, Lc = 44, Pc = 45, hc = (e, t, n = 0) => ({
  code: e,
  indent: n,
  parameters: t
}), uo = (e = {}) => ({
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
}), Dc = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), Ro = () => ({
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}), vc = () => ({
  conditions: uo(),
  list: [],
  directionFix: !1,
  image: Ro(),
  moveFrequency: 5,
  moveRoute: {
    list: [],
    repeat: !1,
    skippable: !1,
    wait: !1
  }
}), go = {
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
}, Io = (e) => e.toString().padStart(3, "0"), Fc = (e = { id: 0 }) => ({
  name: e.name ?? Io(e.id),
  id: e.id,
  expanded: e.expanded ?? !1,
  order: e.order ?? 0,
  parentId: e.parentId ?? 0,
  scrollX: e.scrollX ?? 0,
  scrollY: e.scrollY ?? 0
}), Hc = (e = {}) => ({
  data: e.data ?? [],
  battleback1Name: e.battleback1Name ?? "",
  battleback2Name: e.battleback2Name ?? "",
  autoplayBgm: e.autoplayBgm ?? !1,
  autoplayBgs: e.autoplayBgs ?? !1,
  parallaxLoopX: e.parallaxLoopX ?? !1,
  parallaxLoopY: e.parallaxLoopY ?? !1,
  parallaxName: e.parallaxName ?? "",
  parallaxShow: e.parallaxShow ?? !1,
  parallaxSx: e.parallaxSx ?? 0,
  parallaxSy: e.parallaxSy ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  width: e.width ?? 0,
  height: e.height ?? 0,
  note: e.note ?? "",
  bgm: e.bgm ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  bgs: e.bgs ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  disableDashing: e.disableDashing ?? !1,
  displayName: e.displayName ?? "",
  encounterList: e.encounterList ?? [],
  events: e.events ?? []
}), xc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), kc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), bc = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), Uc = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), So = {
  type: "object",
  required: ["wait", "repeat", "skippable", "list"],
  properties: {
    wait: { type: "boolean" },
    repeat: { type: "boolean" },
    skippable: { type: "boolean" },
    list: {
      type: "array",
      items: {
        type: "object",
        required: ["code", "parameters"],
        properties: {
          code: { type: "integer" },
          parameters: {
            type: "array",
            items: {
              oneOf: [
                { type: "string" },
                { type: "number" },
                {
                  type: "object",
                  required: ["name", "pan", "pitch", "volume"],
                  properties: {
                    name: { type: "string" },
                    pan: { type: "integer" },
                    pitch: { type: "integer" },
                    volume: { type: "integer" }
                  }
                }
              ]
            }
          }
        }
      }
    }
  }
}, Co = {
  type: "object",
  required: [
    "switch1Id",
    "switch1Valid",
    "switch2Id",
    "switch2Valid",
    "variableId",
    "variableValid",
    "selfSwitchCh",
    "selfSwitchValid",
    "variableValue",
    "itemId",
    "itemValid",
    "actorId",
    "actorValid"
  ],
  properties: {
    switch1Id: { type: "integer", minimum: 0 },
    switch1Valid: { type: "boolean" },
    switch2Id: { type: "integer", minimum: 0 },
    switch2Valid: { type: "boolean" },
    variableId: { type: "integer", minimum: 0 },
    variableValid: { type: "boolean" },
    selfSwitchCh: { type: "string" },
    selfSwitchValid: { type: "boolean" },
    variableValue: { type: "integer" },
    itemId: { type: "integer", minimum: 0 },
    itemValid: { type: "boolean" },
    actorId: { type: "integer" },
    actorValid: { type: "boolean" }
  }
}, No = {
  type: "object",
  required: [
    "characterIndex",
    "characterName",
    "direction",
    "pattern",
    "tileId"
  ],
  properties: {
    characterIndex: { type: "integer", minimum: 0 },
    characterName: { type: "string" },
    direction: { type: "integer", enum: [2, 4, 6, 8] },
    pattern: { type: "integer" },
    tileId: { type: "integer" }
  }
}, fo = {
  type: "object",
  required: [
    "image",
    "moveRoute",
    "conditions",
    "directionFix",
    "moveFrequency"
  ],
  properties: {
    moveFrequency: { type: "integer" },
    directionFix: { type: "boolean" },
    conditions: Co,
    image: No,
    moveRoute: So
    // list: {
    //   type: "array",
    //   items: {
    //     type: "object",
    //     required: ["code", "indent", "parameters"],
    //     properties: {
    //       code: { type: "integer" },
    //       indent: { type: "integer" },
    //       parameters: {
    //         type: "array",
    //         items: {},
    //       },
    //     },
    //   },
    // },
  }
}, Oo = {
  type: "object",
  required: [
    "battleback1Name",
    "battleback2Name",
    "note",
    "width",
    "height",
    "x",
    "y",
    "parallaxSy",
    "parallaxSx",
    "parallaxLoopY",
    "parallaxLoopX",
    "disableDashing",
    "parallaxName",
    "parallaxShow",
    "displayName",
    "data",
    "autoplayBgm",
    "bgm",
    "autoplayBgs",
    "bgs"
  ],
  properties: {
    data: { type: "array", items: { type: "integer" } },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
    parallaxLoopY: { type: "boolean" },
    parallaxLoopX: { type: "boolean" },
    parallaxName: { type: "string" },
    parallaxShow: { type: "boolean" },
    parallaxSy: { type: "integer" },
    parallaxSx: { type: "integer" },
    x: { type: "integer", minimum: 0 },
    y: { type: "integer", minimum: 0 },
    width: { type: "integer", minimum: 0 },
    height: { type: "integer", minimum: 0 },
    note: { type: "string" },
    displayName: { type: "string" },
    disableDashing: { type: "boolean" },
    autoplayBgm: { type: "boolean" },
    bgm: {
      type: "object",
      required: ["name", "pan", "pitch", "volume"],
      properties: {
        name: { type: "string" },
        pan: { type: "integer" },
        pitch: { type: "integer" },
        volume: { type: "integer" }
      }
    },
    autoplayBgs: { type: "boolean" },
    bgs: {
      type: "object",
      required: ["name", "pan", "pitch", "volume"],
      properties: {
        name: { type: "string" },
        pan: { type: "integer" },
        pitch: { type: "integer" },
        volume: { type: "integer" }
      }
    },
    encounterList: {
      type: "array",
      items: {
        type: "object",
        required: ["regionSet", "troopId", "weight"],
        properties: {
          regionSet: { type: "array", items: { type: "integer" } },
          troopId: { type: "integer" },
          weight: { type: "integer" }
        }
      }
    },
    events: {
      type: "array",
      items: {
        type: "object",
        required: [
          "id",
          "name",
          "x",
          "y",
          "pages"
        ],
        properties: {
          id: { type: "integer" },
          name: { type: "string" },
          x: { type: "integer" },
          y: { type: "integer" },
          note: { type: "string" },
          pages: {
            type: "array",
            items: fo
          }
        }
      }
    }
  }
  // satisfies Record<keyof Data_Map, unknown>,
}, Ye = new h(), Mo = Ye.compile(go), Lo = Ye.compile(Oo), Bc = (e) => Mo(e), Gc = (e) => Lo(e), Vc = (e = {}) => ({
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
}), qc = {
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
}), wc = (e) => [
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
], Wc = {
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
}, Yc = {
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
}, je = (e, t) => `<${e}:${t}>`, M = () => /<([^<>:]+):([^>]*)>/g, jc = (e, t) => Ke(e.note, (n, o) => t(n, o, e)), Kc = (e) => Ke(e, (t, n) => [t, n]), Ke = (e, t) => {
  const n = M();
  return Array.from(e.matchAll(n), (o) => t(o[1], o[2]));
}, Xc = (e, t) => e.replaceAll(
  M(),
  (n, o, s) => {
    const p = t(o, s);
    return je(o, p);
  }
), $c = (e, t) => {
  const n = M(), o = Array.from(e.matchAll(n)).find(
    (s) => s[1] === t
  );
  return o ? o[2] : void 0;
}, zc = (e, t, n) => {
  const o = M();
  return e.replaceAll(o, (s, p) => p === t ? je(p, n) : s);
}, F = (e, t) => `\\${e}[${t}]`, Qc = (e, t) => t.map((n, o) => ({
  text: n,
  controlChar: F(e, o)
})), Jc = (e) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g;
  return Array.from(e.matchAll(t)).map(
    (n) => ({
      char: n[1],
      id: parseInt(n[2], 10)
    })
  );
}, Po = "N", ho = "V", Zc = (e) => e.map((t) => ({
  text: t.name,
  controlChar: F(Po, t.id)
})), em = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: F(ho, n)
})).filter((t) => t.text !== ""), Do = {
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
}, tm = {
  rpg: {
    damage: Zn,
    data: Jn,
    traits: i,
    itemEffect: m
  },
  global: Do
}, vo = {
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
}, Fo = {
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
}, Ho = {
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
}, xo = {
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
}, ko = {
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
}, bo = {
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
}, Uo = {
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
}, Bo = {
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
}, Go = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: {
      type: "integer",
      enum: [320, 324, 325]
    },
    indent: { type: "integer" },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "integer", minimum: 0 },
        // actorId
        { type: "string" }
        // name
      ]
    }
  },
  additionalProperties: !1
}, y = new h(), Vo = y.compile(Go), qo = y.compile(Ho), wo = y.compile(xo), Wo = y.compile(bo), Yo = y.compile(Fo), jo = y.compile(Uo), Ko = y.compile(vo), Xo = y.compile(ko), $o = y.compile(Bo), nm = (e) => Vo(e), om = (e) => $o(e), I = (e) => Ko(e), u = (e) => Xo(e), am = (e) => wo(e), im = (e) => jo(e), rm = (e) => Wo(e), sm = (e) => qo(e), cm = (e) => Yo(e), mm = (e) => I(e) && e.code === ve, pm = (e) => I(e) && e.code === Fe, dm = (e) => I(e) && e.code === He, Em = (e) => I(e) && e.code === xe, ym = (e) => I(e) && e.code === we, Am = (e) => I(e) && e.code === We, lm = (e, t = 0) => ({
  code: lo,
  parameters: [e.actorId, e.name],
  indent: t
}), _m = (e, t = 0) => ({
  code: _o,
  parameters: [e.actorId, e.nickname],
  indent: t
}), Tm = (e, t = 0) => ({
  code: To,
  parameters: [e.actorId, e.profile],
  indent: t
}), um = (e, t) => l(e, a({ name: t })), l = (e, t, n = 0) => ({
  code: e,
  parameters: [a(t)],
  indent: n
}), Rm = (e, t = 0) => l(Be, e, t), gm = (e, t = 0) => l(Ge, e, t), Im = (e, t = 0) => l(Ve, e, t), Sm = (e, t = 0) => l(qe, e, t), Cm = (e, t = 0) => l(ke, e, t), Nm = (e, t = 0) => l(be, e, t), fm = (e, t = 0) => l(Ue, e, t), Om = (e, t = 0) => ({
  code: Ao,
  indent: t,
  parameters: zo(e ?? {})
}), Mm = (e) => ({
  eventId: e[0]
}), zo = (e) => [e.eventId ?? 0], Xe = (e) => [e], Lm = (e) => ({
  comment: e[0]
}), Qo = (e, t = 0) => ({
  code: He,
  indent: t,
  parameters: Xe(e)
}), Jo = (e, t = 0) => ({
  code: xe,
  indent: t,
  parameters: Xe(e)
}), Pm = (e, t = 0) => e.map(
  (n, o) => o === 0 ? Qo(n, t) : Jo(n, t)
), Zo = (e) => [e.variableId ?? 0, e.digits ?? 0], hm = (e) => ({
  variableId: e[0],
  digits: e[1]
}), Dm = (e, t = 0) => ({
  code: Eo,
  indent: t,
  parameters: Zo(e ?? {})
}), ea = (e = {}) => [(e == null ? void 0 : e.speed) ?? 4, (e == null ? void 0 : e.skip) ?? !1], vm = (e) => ({
  speed: e[0],
  skip: e[1]
}), Fm = (e = {}, t = 0) => ({
  code: yo,
  indent: t,
  parameters: ea(e)
}), ta = (e = "") => [e], Hm = (e) => ({
  content: e[0]
}), xm = (e = "", t = 0) => ({
  code: Fe,
  indent: t ?? 0,
  parameters: ta(e)
}), km = (e, t = 0) => ({
  code: po,
  indent: t,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), bm = (e) => ({
  index: e[0],
  name: e[1]
}), Um = (e) => [e.index ?? 0, e.name ?? ""], Bm = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Gm = (e) => [
  e.choices ?? [],
  e.cancelType ?? 0,
  e.defaultType ?? 0,
  e.positionType ?? 2,
  e.background ?? 0
], Vm = (e, t = 0) => ({
  code: mo,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.choices) ?? [],
    (e == null ? void 0 : e.cancelType) ?? 0,
    (e == null ? void 0 : e.defaultType) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.background) ?? 0
  ]
}), qm = (e, t = 0) => ({
  code: co,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.facename) ?? "",
    (e == null ? void 0 : e.faceIndex) ?? 0,
    (e == null ? void 0 : e.background) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.speakerName) ?? ""
  ]
}), wm = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4]
}), Wm = (e) => [
  e.facename,
  e.faceIndex,
  e.background,
  e.positionType,
  e.speakerName
], Ym = (e, t = 0) => ({
  code: ve,
  indent: t,
  parameters: [e]
}), na = (e, t = 0) => ({
  code: we,
  indent: t,
  parameters: [e]
}), oa = (e, t = 0) => ({
  code: We,
  indent: t,
  parameters: [e]
}), jm = (e, t = 0) => e.map(
  (n, o) => o === 0 ? na(n, t) : oa(n, t)
), aa = 0, ia = 1, ra = 2, H = 3, sa = 4, Km = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return t[6] >= 2 && t[6] <= 9 ? e.param(t[6] - 2) : 0;
}, Xm = (e, t) => {
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
}, ca = {
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
}, $m = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  aa,
  t.value
], zm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  ia,
  t.variableId
], Qm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  ra,
  t.min,
  t.max
], Jm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  sa,
  t.code
], Zm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  H,
  t.type,
  t.itemId
], ep = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  H,
  3,
  t.index,
  t.param
], tp = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  H,
  4,
  t.index,
  ca[t.param]
], np = (e) => u(e) && e.code === Be, op = (e) => u(e) && e.code === Ge, ap = (e) => u(e) && e.code === Ve, ip = (e) => u(e) && e.code === qe, rp = (e) => u(e) && e.code === ke, sp = (e) => u(e) && e.code === be, cp = (e) => u(e) && e.code === Ue;
export {
  hs as ABORT_BATTLE,
  T as AUTHOR_RMMZ,
  ps as BATTLE_PROCESSING,
  gs as CHANGE_ACTOR_IMAGES,
  Sr as CHANGE_ARMORS,
  ss as CHANGE_BATTLE_BACKGROUND,
  ke as CHANGE_BATTLE_BGM,
  Rs as CHANGE_CLASS,
  Ue as CHANGE_DEFEAT_ME,
  Or as CHANGE_ENCOUNTER,
  Ss as CHANGE_ENEMY_HP,
  Cs as CHANGE_ENEMY_MP,
  Ns as CHANGE_ENEMY_STATE,
  vs as CHANGE_ENEMY_TP,
  us as CHANGE_EXP,
  Mr as CHANGE_FORMATION_ACCESS,
  Rr as CHANGE_GOLD,
  As as CHANGE_HP,
  gr as CHANGE_ITEMS,
  fr as CHANGE_MENU_ACCESS,
  ls as CHANGE_MP,
  lo as CHANGE_NAME,
  _o as CHANGE_NICKNAME,
  cs as CHANGE_PARALLAX,
  Cr as CHANGE_PARTY_MEMBER,
  Gr as CHANGE_PLAYER_FOLLOWERS,
  To as CHANGE_PROFILE,
  Nr as CHANGE_SAVE_ACCESS,
  rs as CHANGE_TILESET,
  _s as CHANGE_TP,
  kr as CHANGE_TRANSPARENCY,
  Pr as CHANGE_VEHICLE_BGM,
  Is as CHANGE_VEHICLE_IMAGE,
  be as CHANGE_VICTORY_ME,
  Ir as CHANGE_WEAPONS,
  Lr as CHANGE_WINDOW_COLOR,
  St as COLLAPS_BOSS,
  Ct as COLLAPS_INSTANT,
  Nt as COLLAPS_NONE,
  It as COLLAPS_NORMAL,
  xe as COMMENT_BODY,
  He as COMMENT_HEAD,
  Ao as COMMON_EVENT,
  cr as CONDITIONAL_BRANCH,
  mr as CONDITIONAL_BRANCH_ELSE,
  Tr as CONTROL_SELF_SWITCH,
  lr as CONTROL_SWITCHES,
  ur as CONTROL_TIMER,
  _r as CONTROL_VARIABLES,
  Zn as DEFAULT_DAMAGE_LABELS,
  Do as DEFAULT_GLOBAL_LABELS,
  Ki as DEFAULT_ITEM_LABELS,
  Xi as DEFAULT_SKILL_LABELS,
  Wc as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  $i as DEFAULT_USABLE_ITEM_LABELS,
  Pn as EFFECT_ADD_BUFF,
  hn as EFFECT_ADD_DEBUFF,
  Mn as EFFECT_ADD_STATE,
  xn as EFFECT_COMMON_EVENT,
  On as EFFECT_GAIN_TP,
  Fn as EFFECT_GROW,
  Hn as EFFECT_LEARN_SKILL,
  Nn as EFFECT_RECOVER_HP,
  fn as EFFECT_RECOVER_MP,
  Dn as EFFECT_REMOVE_BUFF,
  vn as EFFECT_REMOVE_DEBUFF,
  Ln as EFFECT_REMOVE_STATE,
  Oi as EFFECT_SPECIAL,
  Os as ENEMY_APPEAR,
  fs as ENEMY_RECOVER_ALL,
  Ms as ENEMY_TRANSFORM,
  Br as ERASE_EVENT,
  Jr as ERASE_PICTURE,
  Er as EXIT_EVENT_PROCESSING,
  Q as EXTRA_PARAM_CEV,
  ee as EXTRA_PARAM_CNT,
  z as EXTRA_PARAM_CRI,
  $ as EXTRA_PARAM_EVA,
  X as EXTRA_PARAM_HIT,
  te as EXTRA_PARAM_HRG,
  J as EXTRA_PARAM_MEV,
  Z as EXTRA_PARAM_MRF,
  ne as EXTRA_PARAM_MRG,
  oe as EXTRA_PARAM_TRG,
  wr as FADEIN_SCREEN,
  es as FADEOUT_BGM,
  os as FADEOUT_BGS,
  qr as FADEOUT_SCREEN,
  La as FILENAME_ACTORS,
  ba as FILENAME_ANIMATIONS,
  Fa as FILENAME_ARMORS,
  Pa as FILENAME_CLASSES,
  Ba as FILENAME_COMMON_EVENTS,
  Ha as FILENAME_ENEMIES,
  Da as FILENAME_ITEMS,
  Ga as FILENAME_MAP_INFOS,
  ha as FILENAME_SKILLS,
  ka as FILENAME_STATES,
  Ma as FILENAME_SYSTEM,
  Ua as FILENAME_TILESET,
  xa as FILENAME_TROOPS,
  va as FILENAME_WEAPONS,
  Dt as FLAG_ID_AUTO_BATTLE,
  vt as FLAG_ID_GUARD,
  Ht as FLAG_ID_PRESERVE_TP,
  Ft as FLAG_ID_SUBSTITUTE,
  Yr as FLASH_SCREEN,
  wa as FOLDER_AUDIO,
  pa as FOLDER_AUDIO_BGM,
  ya as FOLDER_AUDIO_BGS,
  Ea as FOLDER_AUDIO_ME,
  da as FOLDER_AUDIO_SE,
  Va as FOLDER_DATA,
  qa as FOLDER_IMG,
  Aa as FOLDER_IMG_BATTLEBACK1,
  la as FOLDER_IMG_BATTLEBACK2,
  _a as FOLDER_IMG_CHACTERS,
  Ta as FOLDER_IMG_ENEMIES,
  ua as FOLDER_IMG_FACES,
  Ra as FOLDER_IMG_PARALLACES,
  ga as FOLDER_IMG_PICTURES,
  Ia as FOLDER_IMG_SV_ACTORS,
  Sa as FOLDER_IMG_SV_ENEMIES,
  Ca as FOLDER_IMG_SYSTEM,
  Na as FOLDER_IMG_TILESETS,
  fa as FOLDER_IMG_TITLES1,
  Oa as FOLDER_IMG_TITLES2,
  Wa as FOLDER_JS,
  Ps as FORCE_ACTION,
  Hs as GAME_OVER,
  Vr as GATHER_FOLLOWERS,
  ms as GET_LOCATION_INFO,
  xr as GET_ONOFF_VEHICLE,
  Ci as HITTYPE_CERTAIN,
  fi as HITTYPE_MAGICAL,
  Ni as HITTYPE_PHYSICAL,
  Eo as INPUT_NUMBER,
  yr as LABEL,
  Ti as LABELS_DATA_WEAPON,
  Ar as LABEL_JUMP,
  tm as LABEL_REGISTRY_JP,
  Jn as LABEL_SET_DATA,
  m as LABEL_SET_ITEM_EFFECT,
  i as LABEL_SET_TRAIT,
  pr as LOOP,
  dr as LOOP_BREAK,
  j as MODULE_DATA,
  K as MODULE_SYSTEM,
  D as MODULE_TRAIT,
  $r as MOVE_PICTURE,
  Yc as MockSystemLabelDataTypes,
  ys as NAME_INPUT_PROCESSING,
  ir as NO_OPERATION,
  Ds as OPEN_MENU_SCREEN,
  Fs as OPEN_SAVE_SCREEN,
  aa as OPERAND_CONSTANT,
  H as OPERAND_GAMEDATA,
  ra as OPERAND_RANDOM,
  sa as OPERAND_SCRIPT,
  ia as OPERAND_VARIABLE,
  Mt as PARTY_ABILITY_CANCEL_SURPRISE,
  ht as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  ft as PARTY_ABILITY_ENCOUNTER_HALF,
  Ot as PARTY_ABILITY_ENCOUNTER_NONE,
  Pt as PARTY_ABILITY_GOLD_DOUBLE,
  Lt as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Be as PLAY_BGM,
  Ge as PLAY_BGS,
  Ve as PLAY_ME,
  is as PLAY_MOVIE,
  qe as PLAY_SE,
  ks as PLUGIN_COMMAND_MV,
  bs as PLUGIN_COMMAND_MZ,
  Ts as RECOVER_ALL,
  pe as REGULAR_PARAM_AGI,
  re as REGULAR_PARAM_ATK,
  se as REGULAR_PARAM_DEF,
  de as REGULAR_PARAM_LUK,
  ce as REGULAR_PARAM_MATK,
  ae as REGULAR_PARAM_MAX_HP,
  ie as REGULAR_PARAM_MAX_MP,
  me as REGULAR_PARAM_MDEF,
  ns as RESUME_BGM,
  xs as RETURN_TO_TITLE_SCREEN,
  zr as ROTATE_PICTURE,
  Mc as ROUTE_CHANGE_BLEND_MODE,
  Ac as ROUTE_CHANGE_FREQ,
  fc as ROUTE_CHANGE_IMAGE,
  Oc as ROUTE_CHANGE_OPACITY,
  yc as ROUTE_CHANGE_SPEED,
  gc as ROUTE_DIR_FIX_OFF,
  Rc as ROUTE_DIR_FIX_ON,
  Us as ROUTE_END,
  Js as ROUTE_JUMP,
  $s as ROUTE_MOVE_AWAY,
  Qs as ROUTE_MOVE_BACKWARD,
  Bs as ROUTE_MOVE_DOWN,
  zs as ROUTE_MOVE_FORWARD,
  Gs as ROUTE_MOVE_LEFT,
  ws as ROUTE_MOVE_LOWER_L,
  Ws as ROUTE_MOVE_LOWER_R,
  Ks as ROUTE_MOVE_RANDOM,
  Vs as ROUTE_MOVE_RIGHT,
  Xs as ROUTE_MOVE_TOWARD,
  qs as ROUTE_MOVE_UP,
  Ys as ROUTE_MOVE_UPPER_L,
  js as ROUTE_MOVE_UPPER_R,
  Lc as ROUTE_PLAY_SE,
  Pc as ROUTE_SCRIPT,
  uc as ROUTE_STEP_ANIME_OFF,
  Tc as ROUTE_STEP_ANIME_ON,
  Ec as ROUTE_SWITCH_OFF,
  dc as ROUTE_SWITCH_ON,
  Sc as ROUTE_THROUGH_OFF,
  Ic as ROUTE_THROUGH_ON,
  Nc as ROUTE_TRANSPARENT_OFF,
  Cc as ROUTE_TRANSPARENT_ON,
  rc as ROUTE_TURN_180D,
  ic as ROUTE_TURN_90D_L,
  ac as ROUTE_TURN_90D_R,
  sc as ROUTE_TURN_90D_R_L,
  pc as ROUTE_TURN_AWAY,
  ec as ROUTE_TURN_DOWN,
  tc as ROUTE_TURN_LEFT,
  cc as ROUTE_TURN_RANDOM,
  nc as ROUTE_TURN_RIGHT,
  mc as ROUTE_TURN_TOWARD,
  oc as ROUTE_TURN_UP,
  Zs as ROUTE_WAIT,
  _c as ROUTE_WALK_ANIME_OFF,
  lc as ROUTE_WALK_ANIME_ON,
  ts as SAVE_BGM,
  zi as SCHEMA_DAMAGE,
  An as SCHEMA_DATA_ACTOR,
  ln as SCHEMA_DATA_ARMMOR,
  _n as SCHEMA_DATA_CLASS,
  gn as SCHEMA_DATA_ENEMY,
  Sn as SCHEMA_DATA_ITEM,
  go as SCHEMA_DATA_MAP_INFO,
  In as SCHEMA_DATA_SKILL,
  Tn as SCHEMA_DATA_STATE,
  un as SCHEMA_DATA_WEAPON,
  qc as SCHEMA_SYSTEM_ADVANCED,
  di as SCHEMA_TRAIT,
  we as SCRIPT_EVAL,
  We as SCRIPT_EVAL_BODY,
  Fr as SCROLL_MAP,
  rr as SELECT_ITEM,
  vr as SET_EVENT_LOCATION,
  Hr as SET_MOVEMENT_ROUTE,
  Dr as SET_VEHICLE_LOCATION,
  Zr as SET_WEATHER_EFFECT,
  jr as SHAKE_SCREEN,
  ds as SHOP_PROCESSING,
  Es as SHOP_PROCESSING_BODY,
  br as SHOW_ANIMATION,
  Ur as SHOW_BALLOON_ICON,
  Ls as SHOW_BATTLE_ANIMATION,
  mo as SHOW_CHOICES,
  po as SHOW_CHOICES_ITEM,
  co as SHOW_MESSAGE,
  ve as SHOW_MESSAGE_BODY,
  Xr as SHOW_PICTURE,
  yo as SHOW_SCROLLING_TEXT,
  Fe as SHOW_SCROLLING_TEXT_BODY,
  sr as SKIP,
  Mi as SPECIAL_EFFECT_ESCAPE,
  Ie as SPECIAL_PARAM_EXR,
  ge as SPECIAL_PARAM_FDR,
  ye as SPECIAL_PARAM_GRD,
  _e as SPECIAL_PARAM_MCR,
  Re as SPECIAL_PARAM_MDR,
  ue as SPECIAL_PARAM_PDR,
  le as SPECIAL_PARAM_PHA,
  Ae as SPECIAL_PARAM_REC,
  Te as SPECIAL_PARAM_TCR,
  Ee as SPECIAL_PARAM_TGR,
  Un as SRC_ARMOR_TYPES,
  Gi as SRC_COLOR,
  Di as SRC_DATA_ACTOR,
  bi as SRC_DATA_ARMOR,
  Ui as SRC_DATA_CLASS,
  kn as SRC_DATA_COMMON_EVNET,
  Hi as SRC_DATA_ENEMY,
  xi as SRC_DATA_ITEMS,
  Fi as SRC_DATA_MAP,
  De as SRC_DATA_SKILL,
  N as SRC_DATA_STATE,
  Bi as SRC_DATA_TROOP,
  vi as SRC_DATA_VARIABLE,
  ki as SRC_DATA_WEAPON,
  Bn as SRC_ELEMENTS,
  Vi as SRC_EQUIP_TYPES,
  Oe as SRC_PARAMS_EXTRA,
  C as SRC_PARAMS_REGULAR,
  Me as SRC_PARAMS_SPECIAL,
  wi as SRC_SKILL_TYPES,
  qi as SRC_SWITCHES,
  Le as SRC_TRAIT_COLLAPS,
  Pe as SRC_TRAIT_PARTY_ABILITY,
  he as SRC_TRAIT_SPECIAL_FLAG,
  bn as SRC_WEAPON_TYPES,
  as as STOP_SE,
  Qr as TINT_PICTURE,
  Wr as TINT_SCREEN,
  Tt as TRAIT_ACTION_PLUS,
  ot as TRAIT_ATTACK_ELEMENT,
  st as TRAIT_ATTACK_SKILL,
  it as TRAIT_ATTACK_SPEED,
  at as TRAIT_ATTACK_STATE,
  rt as TRAIT_ATTACK_TIMES,
  Rt as TRAIT_COLLAPSE_TYPE,
  Qe as TRAIT_DEBUFF_RATE,
  ze as TRAIT_ELEMENT_RATE,
  yt as TRAIT_EQUIP_ARMOR_TYPE,
  At as TRAIT_EQUIP_LOCK,
  lt as TRAIT_EQUIP_SEAL,
  Et as TRAIT_EQUIP_WEAPON_TYPE,
  et as TRAIT_PARAM,
  gt as TRAIT_PARTY_ABILITY,
  pt as TRAIT_SKILL_ADD,
  dt as TRAIT_SKILL_SEAL,
  ct as TRAIT_SKILL_TYPE_ADD,
  mt as TRAIT_SKILL_TYPE_SEAL,
  _t as TRAIT_SLOT_TYPE,
  nt as TRAIT_SPARAM,
  ut as TRAIT_SPECIAL_FLAG,
  Je as TRAIT_STATE_RATE,
  Ze as TRAIT_STATE_RESIST,
  tt as TRAIT_XPARAM,
  hr as TRANSFER_PLAYER,
  pi as TYPENAME_TRAIT,
  Vt as TraitDescriptor,
  Kr as WAIT,
  oi as buildCollapsSource,
  ri as buildExtraParamSource,
  ai as buildPartyAbilitySource,
  ii as buildRegularParamSource,
  ci as buildSpecialFlagSource,
  si as buildSpecialParamSource,
  Lm as convertCommentArrayToObject,
  Zc as createActorControlChars,
  F as createControlCharFormat,
  hc as createEventCommand,
  je as createNoteEntity,
  em as createSystemVariableControlChars,
  jn as defineEffectAddBuff,
  $n as defineEffectAddDebuff,
  Wn as defineEffectAddState,
  Qn as defineEffectCommonEvent,
  wn as defineEffectGainTp,
  ji as defineEffectGrow,
  Xn as defineEffectLearnSkill,
  Vn as defineEffectRecoverHp,
  qn as defineEffectRecoverMp,
  Kn as defineEffectRemoveBuff,
  zn as defineEffectRemoveDebuff,
  Yn as defineEffectRemoveState,
  ti as extraParamName,
  xt as foldCollapsOptions,
  Ut as foldExtraParam,
  kt as foldPartyAbilityOptions,
  bt as foldRegularParam,
  Gt as foldSpecialFlag,
  Bt as foldSpecialParams,
  Wi as formatItemEffectText,
  Mm as fromArrayCommonEvent,
  hm as fromArrayInputNumber,
  Hm as fromArrayScrollingTextBody,
  vm as fromArrayScrollingTextHeader,
  Bm as fromArraySetupChoice,
  bm as fromArraySetupChoiceItem,
  wm as fromArrayShowMessageHeader,
  Qc as fromStringArray,
  Xm as getActorValue,
  Ja as getArmorTypes,
  Jc as getControlChars,
  Xa as getElementTypes,
  Km as getEnemyValue,
  $a as getEquipTypes,
  $c as getNoteValue,
  Za as getParamNames,
  za as getSkillTypes,
  Ka as getVariableNames,
  Qa as getWeaponTypes,
  u as isCommandAudio,
  nm as isCommandChangeActorText,
  rp as isCommandChangeBattleBgm,
  cp as isCommandChangeDefeatMe,
  sp as isCommandChangeVictoryMe,
  Em as isCommandCommentBody,
  dm as isCommandCommentHeader,
  am as isCommandCommonEvent,
  sm as isCommandInputNumber,
  np as isCommandPlayBgm,
  op as isCommandPlayBgs,
  ap as isCommandPlayMe,
  ip as isCommandPlaySe,
  Am as isCommandScriptBody,
  ym as isCommandScriptHeader,
  om as isCommandScrollTextHead,
  rm as isCommandShowChoiceItem,
  im as isCommandShowChoices,
  cm as isCommandShowMessage,
  mm as isCommandShowMessageBody,
  pm as isCommandShowScrollingTextBody,
  I as isCommandTextBody,
  Zi as isDataActor,
  er as isDataArmor,
  ar as isDataClass,
  nr as isDataEnemy,
  Qi as isDataItem,
  Gc as isDataMap,
  Bc as isDataMapInfo,
  Ji as isDataSkill,
  or as isDataState,
  tr as isDataWeapon,
  hi as isValid,
  Pi as joinSourceKey,
  Ei as makeActorData,
  Ai as makeArmorData,
  um as makeAudioCommand,
  a as makeAudioFileParams,
  li as makeClassData,
  Om as makeCommand2_CommonEvent,
  km as makeCommand2_ShowChoiceItem,
  l as makeCommandAudioAny,
  lm as makeCommandChangeActorName,
  _m as makeCommandChangeActorNickName,
  Tm as makeCommandChangeActorProfile,
  Cm as makeCommandChangeBattleBGM,
  fm as makeCommandChangeDefeatME,
  Nm as makeCommandChangeVictoryME,
  Jo as makeCommandCommentBody,
  Qo as makeCommandCommentHeader,
  Dm as makeCommandInputNumber,
  Rm as makeCommandPlayBGM,
  gm as makeCommandPlayBGS,
  Im as makeCommandPlayME,
  Sm as makeCommandPlaySE,
  jm as makeCommandScriptArray,
  oa as makeCommandScriptBody,
  na as makeCommandScriptHeader,
  xm as makeCommandScrollingTextBody,
  Fm as makeCommandScrollingTextHeader,
  Vm as makeCommandSetupChoice,
  qm as makeCommandShowMessage,
  Ym as makeCommandShowMessageBody,
  Xe as makeCommentArray,
  Pm as makeCommentCommandArray,
  xc as makeCommonEventData,
  v as makeDamage,
  Rn as makeDropItem,
  Ri as makeEnemyAction,
  gi as makeEnemyData,
  uo as makeEventPageCondition,
  Ii as makeItemData,
  Hc as makeMapData,
  Dc as makeMapEvent,
  Ro as makeMapEventIamge,
  vc as makeMapEventPage,
  Fc as makeMapInfoData,
  M as makeRegex,
  Si as makeSkillData,
  wc as makeSoundsArray,
  _i as makeStateData,
  Vc as makeSystemAdvanced,
  kc as makeTroopData,
  Uc as makeTroopEventConditions,
  bc as makeTroopMember,
  ui as makeWeaponData,
  Ya as mergeDomainLabel,
  ja as mergeNestedPrimitiveRecords,
  Y as mergeWithDefaults,
  yi as normalizeDataActor,
  Kc as readNote,
  Ke as readNoteEx,
  jc as readNoteObject,
  ei as regularParamName,
  Xc as replaceNote,
  Yi as resolveItemEffectLabels,
  mi as resolveTraitLabels,
  Li as sanitizeKey,
  zc as setNoteValue,
  ni as specialParamName,
  P as testUnknonwKey,
  zo as toArrayCommonEvent,
  Zo as toArrayInputNumber,
  ep as toArrayOperandActorStatus,
  $m as toArrayOperandConstant,
  tp as toArrayOperandEnemyStatus,
  Zm as toArrayOperandItemData,
  Qm as toArrayOperandRandom,
  Jm as toArrayOperandScript,
  zm as toArrayOperandVariable,
  ta as toArrayScrollingTextBody,
  ea as toArrayScrollingTextHeader,
  Gm as toArraySetupChoice,
  Um as toArraySetupChoiceItem,
  Wm as toArrayShowMessageHeader,
  g as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
