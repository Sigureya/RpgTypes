import h from "ajv";
const la = "bgm", Aa = "se", _a = "me", Ta = "bgs", ua = "battlebacks1", Ra = "battlebacks2", ga = "characters", Ia = "enemies", Sa = "faces", Ca = "parallaxes", Na = "pictures", fa = "sv_actors", Oa = "sv_enemies", Ma = "system", La = "tilesets", Pa = "titles1", ha = "titles2", Da = "System.json", va = "Actors.json", Fa = "Classes.json", Ha = "Skills.json", xa = "Items.json", ka = "Weapons.json", ba = "Armors.json", Ua = "Enemies.json", Ba = "Troops.json", Ga = "States.json", Va = "Animations.json", qa = "Tilesets.json", wa = "CommonEvents.json", Wa = "MapInfos.json", Ya = "data", ja = "img", Ka = "audio", Xa = "js", Y = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const s = t[o];
    typeof s == "string" && (n[o] = s);
  }
  return n;
}, $a = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: Y(e.options, t.options ?? {})
}), za = (e, t) => {
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
}), Qa = (e) => e.variables.map(_), Ja = (e) => e.elements.map(_), Za = (e) => e.equipTypes.map(_), er = (e) => e.skillTypes.map(_), tr = (e) => e.weaponTypes.map(_), nr = (e) => e.armorTypes.map(_), or = (e) => e.terms.params.map(_), T = "rmmz", D = "trait", j = "data", K = "system", ze = 11, Qe = 12, Je = 13, Ze = 14, et = 21, tt = 22, nt = 23, ot = 31, at = 32, rt = 33, it = 34, st = 35, ct = 41, mt = 42, pt = 43, dt = 44, Et = 51, yt = 52, lt = 53, At = 54, _t = 55, Tt = 61, ut = 62, Rt = 63, gt = 64, It = 0, St = 1, Ct = 2, Nt = 3, ft = 0, Ot = 1, Mt = 2, Lt = 3, Pt = 4, ht = 5, Dt = 0, vt = 1, Ft = 2, Ht = 3, X = 0, $ = 1, z = 2, Q = 3, J = 4, Z = 5, ee = 6, te = 7, ne = 8, oe = 9, ae = 0, re = 1, ie = 2, se = 3, ce = 4, me = 5, pe = 6, de = 7, Ee = 0, ye = 1, le = 2, Ae = 3, _e = 4, Te = 5, ue = 6, Re = 7, ge = 8, Ie = 9, ar = (e, t) => {
  switch (e) {
    case ae:
      return t.maxHp;
    case re:
      return t.maxMp;
    case ie:
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
}, rr = (e, t) => {
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
}, ir = (e, t) => {
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
    case Ae:
      return t.pharmacology;
    case le:
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
  { id: re, name: e.maxMp },
  { id: ie, name: e.atk },
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
    id: le,
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
}), sr = (e, t) => g(
  Le,
  e,
  (n) => xt(n, t)
), cr = (e) => g(Pe, e, kt), mr = (e) => g(C, e, bt), pr = (e) => g(Oe, e, Ut), dr = (e) => g(Me, e, Bt), Er = (e) => g(he, e, Gt), c = "{name}", R = "{name} * {value}%", x = "{name} + {value}%", k = "{value}", r = {
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
const yr = (e) => [
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
], B = (e, t) => typeof t == "string" ? t : e, i = (e, t, n, o) => {
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
}), qt = (e) => i(
  ze,
  r.options.elementRate,
  e,
  Se()
), wt = (e) => i(
  Qe,
  r.options.debuffRate,
  e,
  E(C)
), Wt = (e) => i(
  Je,
  r.options.stateRate,
  e,
  E(C)
), Yt = (e) => i(
  Ze,
  r.options.stateResist,
  e,
  Ce(N)
), jt = (e) => i(
  et,
  r.options.regularParam,
  e,
  E(C)
), Kt = (e) => i(
  tt,
  r.options.extraParam,
  e,
  E(Oe)
), Xt = (e) => i(
  nt,
  r.options.specialParam,
  e,
  E(Me)
), $t = (e) => i(
  ot,
  r.options.attackElement,
  e,
  Se()
), zt = (e) => i(
  at,
  r.options.attackState,
  e,
  E(N)
), Qt = (e) => i(rt, r.options.attackSpeed, e), Jt = (e) => i(it, r.options.attackTimes, e), Zt = (e) => i(
  st,
  r.options.attackSkill,
  e,
  Ce(De)
), en = (e) => i(Tt, r.options.actionPlus, e), tn = (e) => i(
  ut,
  r.options.specialFlag,
  e,
  E(he)
), nn = (e) => i(
  Rt,
  r.options.collaps,
  e,
  E(Le)
), on = (e) => i(
  gt,
  r.options.partyAbility,
  e,
  E(Pe)
), an = (e) => i(
  Et,
  r.options.equipWeaponType,
  e,
  Ne(bn)
), rn = (e) => i(
  yt,
  r.options.equipArmorType,
  e,
  Ne(Un)
), sn = (e) => i(lt, r.options.equipLock, e), cn = (e) => i(At, r.options.equipSeal, e), mn = (e) => i(pt, r.options.skillAdd, e), pn = (e) => i(dt, r.options.skillSeal, e), dn = (e) => i(_t, r.options.slotType, e), En = (e) => i(
  ct,
  r.options.skillTypeAdd,
  e
), yn = (e) => i(
  mt,
  r.options.skillTypeSeal,
  e
), lr = "Trait", Ar = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, _r = (e = {}) => ({
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
}), ln = {
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
}, Tr = (e) => ({
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
}), ur = (e = {}) => ({
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
}), An = {
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
}, Rr = (e = {}) => ({
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
}, gr = (e = {}) => ({
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
}, Ir = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Sr = (e = {}) => ({
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
}), Cr = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Nr = (e = {}) => {
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
}, fr = (e = {}) => ({
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
}), Or = (e = {}) => ({
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
}, Mr = 0, Lr = 1, Pr = 2, Cn = "{name} + {value1}", G = "{name} {value1}%", L = "{value1}% + {value2}", V = "{name} {value1}ターン", S = "{name}", m = {
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
}, Nn = 11, fn = 12, On = 13, Mn = 21, Ln = 22, Pn = 31, hn = 32, Dn = 33, vn = 34, hr = 41, Fn = 42, Hn = 43, xn = 44, Dr = 0, fe = /^[a-zA-Z0-9]+$/, vr = (e) => fe.test(e) ? e : void 0, P = (e) => typeof e == "string" ? fe.test(e) : !1, Fr = (e) => [e.author, e.module, e.kind].join("."), Hr = (e) => P(e.author) && P(e.module) && P(e.kind), C = "params", Oe = "xparams", Me = "sparams", Le = "collaps", Pe = "partyAbiility", he = "sflag", xr = "actor", kr = "variables", br = "map", Ur = "enemy", N = "state", De = "skill", Br = "items", Gr = "weapon", Vr = "armor", qr = "class", kn = "common_event", wr = "troop", Wr = "colors", bn = "weaponTypes", Un = "armorTypes", Yr = "equipTypes", jr = "switches", Kr = "skillTypes", Bn = "elements", q = "{value1}", w = "{value2}", W = "{name}";
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
const Xr = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), $r = (e) => [
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
), wn = (e) => d(On, m.options.gainTp, e), zr = (e) => d(Fn, m.options.grow, e), Wn = (e) => d(
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
), Qr = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Jr = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, Zr = {
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
}, l = new h(), eo = l.compile(Sn), to = l.compile(In), no = l.compile(ln), oo = l.compile(An), ao = l.compile(un), ro = l.compile(gn), io = l.compile(Tn), so = l.compile(_n), ti = (e) => eo(e), ni = (e) => to(e), oi = (e) => no(e), ai = (e) => oo(e), ri = (e) => ao(e), ii = (e) => ro(e), si = (e) => io(e), ci = (e) => so(e), mi = 0, co = 101, ve = 401, mo = 102, po = 402, Eo = 103, pi = 104, yo = 105, Fe = 405, He = 108, xe = 408, di = 109, Ei = 111, yi = 411, li = 112, Ai = 113, _i = 115, lo = 117, Ti = 118, ui = 119, Ao = 121, Ri = 122, gi = 123, Ii = 124, Si = 125, Ci = 126, Ni = 127, fi = 128, Oi = 129, ke = 132, be = 133, Mi = 134, Li = 135, Pi = 136, hi = 137, Di = 138, Ue = 139, vi = 140, Fi = 201, Hi = 202, xi = 203, ki = 204, bi = 205, Ui = 206, Bi = 211, Gi = 212, Vi = 213, qi = 214, wi = 216, Wi = 217, Yi = 221, ji = 222, Ki = 223, Xi = 224, $i = 225, zi = 230, Qi = 231, Ji = 232, Zi = 233, es = 234, ts = 235, ns = 236, Be = 241, os = 242, as = 243, rs = 244, Ge = 245, is = 246, Ve = 249, qe = 250, ss = 251, cs = 261, ms = 282, ps = 283, ds = 284, Es = 285, ys = 301, ls = 302, As = 605, _s = 303, Ts = 311, us = 312, Rs = 313, gs = 314, Is = 315, _o = 320, Ss = 321, Cs = 322, Ns = 323, To = 324, uo = 325, fs = 331, Os = 332, Ms = 333, Ls = 334, Ps = 335, hs = 336, Ds = 337, vs = 339, Fs = 340, Hs = 351, xs = 342, ks = 352, bs = 353, Us = 354, we = 355, We = 655, Bs = 356, Gs = 357, Vs = 0, qs = 1, ws = 2, Ws = 3, Ys = 4, js = 5, Ks = 6, Xs = 7, $s = 8, zs = 9, Qs = 10, Js = 11, Zs = 12, ec = 13, tc = 14, nc = 15, oc = 16, ac = 17, rc = 18, ic = 19, sc = 20, cc = 21, mc = 22, pc = 23, dc = 24, Ec = 25, yc = 26, lc = 27, Ac = 28, _c = 29, Tc = 30, uc = 31, Rc = 32, gc = 33, Ic = 34, Sc = 35, Cc = 36, Nc = 37, fc = 38, Oc = 39, Mc = 40, Lc = 41, Pc = 42, hc = 43, Dc = 44, vc = 45, Fc = (e, t, n = 0) => ({
  code: e,
  indent: n,
  parameters: t
}), Ro = (e = {}) => ({
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
}), Hc = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), go = () => ({
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}), xc = () => ({
  conditions: Ro(),
  list: [],
  directionFix: !1,
  image: go(),
  moveFrequency: 5,
  moveRoute: {
    list: [],
    repeat: !1,
    skippable: !1,
    wait: !1
  }
}), Io = {
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
}, So = (e) => e.toString().padStart(3, "0"), kc = (e = { id: 0 }) => ({
  name: e.name ?? So(e.id),
  id: e.id,
  expanded: e.expanded ?? !1,
  order: e.order ?? 0,
  parentId: e.parentId ?? 0,
  scrollX: e.scrollX ?? 0,
  scrollY: e.scrollY ?? 0
}), bc = (e = {}) => ({
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
}), Uc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), Bc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), Gc = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), Vc = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), Co = {
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
}, No = {
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
}, fo = {
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
}, Oo = {
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
    conditions: No,
    image: fo,
    moveRoute: Co
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
}, Mo = {
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
            items: Oo
          }
        }
      }
    }
  }
  // satisfies Record<keyof Data_Map, unknown>,
}, Ye = new h(), Lo = Ye.compile(Io), Po = Ye.compile(Mo), qc = (e) => Lo(e), wc = (e) => Po(e), Wc = (e = {}) => ({
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
}), Yc = {
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
}), jc = (e) => [
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
], Kc = {
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
}, Xc = {
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
}, je = (e, t) => `<${e}:${t}>`, M = () => /<([^<>:]+):([^>]*)>/g, $c = (e, t) => Ke(e.note, (n, o) => t(n, o, e)), zc = (e) => Ke(e, (t, n) => [t, n]), Ke = (e, t) => {
  const n = M();
  return Array.from(e.matchAll(n), (o) => t(o[1], o[2]));
}, Qc = (e, t) => e.replaceAll(
  M(),
  (n, o, s) => {
    const p = t(o, s);
    return je(o, p);
  }
), Jc = (e, t) => {
  const n = M(), o = Array.from(e.matchAll(n)).find(
    (s) => s[1] === t
  );
  return o ? o[2] : void 0;
}, Zc = (e, t, n) => {
  const o = M();
  return e.replace(o, (s, p) => p === t ? je(p, n) : s);
}, F = (e, t) => `\\${e}[${t}]`, em = (e, t) => t.map((n, o) => ({
  text: n,
  controlChar: F(e, o)
})), tm = (e) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g;
  return Array.from(e.matchAll(t)).map(
    (n) => ({
      char: n[1],
      id: parseInt(n[2], 10)
    })
  );
}, ho = "N", Do = "V", nm = (e) => e.map((t) => ({
  text: t.name,
  controlChar: F(ho, t.id)
})), om = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: F(Do, n)
})).filter((t) => t.text !== ""), vo = {
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
}, am = {
  rpg: {
    damage: Zn,
    data: Jn,
    traits: r,
    itemEffect: m
  },
  global: vo
}, Fo = {
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
}, Ho = {
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
}, xo = {
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
}, Vo = {
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
}, y = new h(), qo = y.compile(Go), wo = y.compile(xo), Wo = y.compile(Vo), Yo = y.compile(bo), jo = y.compile(Ho), Ko = y.compile(Uo), Xo = y.compile(Fo), $o = y.compile(ko), zo = y.compile(Bo), rm = (e) => qo(e), im = (e) => zo(e), I = (e) => Xo(e), u = (e) => $o(e), sm = (e) => Wo(e), cm = (e) => Ko(e), mm = (e) => Yo(e), pm = (e) => wo(e), dm = (e) => jo(e), Em = (e) => I(e) && e.code === ve, ym = (e) => I(e) && e.code === Fe, lm = (e) => I(e) && e.code === He, Am = (e) => I(e) && e.code === xe, _m = (e) => I(e) && e.code === we, Tm = (e) => I(e) && e.code === We, um = (e, t = 0) => ({
  code: _o,
  parameters: [e.actorId, e.name],
  indent: t
}), Rm = (e, t = 0) => ({
  code: To,
  parameters: [e.actorId, e.nickname],
  indent: t
}), gm = (e, t = 0) => ({
  code: uo,
  parameters: [e.actorId, e.profile],
  indent: t
}), Im = (e, t) => A(e, a({ name: t })), A = (e, t, n = 0) => ({
  code: e,
  parameters: [a(t)],
  indent: n
}), Sm = (e, t = 0) => A(Be, e, t), Cm = (e, t = 0) => A(Ge, e, t), Nm = (e, t = 0) => A(Ve, e, t), fm = (e, t = 0) => A(qe, e, t), Om = (e, t = 0) => A(ke, e, t), Mm = (e, t = 0) => A(be, e, t), Lm = (e, t = 0) => A(Ue, e, t), Xe = (e) => [e], Pm = (e) => ({
  comment: e[0]
}), Qo = (e, t = 0) => ({
  code: He,
  indent: t,
  parameters: Xe(e)
}), Jo = (e, t = 0) => ({
  code: xe,
  indent: t,
  parameters: Xe(e)
}), hm = (e, t = 0) => e.map(
  (n, o) => o === 0 ? Qo(n, t) : Jo(n, t)
), Zo = (e) => [e.variableId ?? 0, e.digits ?? 0], Dm = (e) => ({
  variableId: e[0],
  digits: e[1]
}), vm = (e, t = 0) => ({
  code: Eo,
  indent: t,
  parameters: Zo(e ?? {})
}), ea = (e = {}) => [(e == null ? void 0 : e.speed) ?? 4, (e == null ? void 0 : e.skip) ?? !1], Fm = (e) => ({
  speed: e[0],
  skip: e[1]
}), Hm = (e = {}, t = 0) => ({
  code: yo,
  indent: t,
  parameters: ea(e)
}), ta = (e = "") => [e], xm = (e) => ({
  content: e[0]
}), km = (e = "", t = 0) => ({
  code: Fe,
  indent: t ?? 0,
  parameters: ta(e)
}), bm = (e, t = 0) => ({
  code: po,
  indent: t,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), Um = (e) => ({
  index: e[0],
  name: e[1]
}), Bm = (e) => [e.index ?? 0, e.name ?? ""], Gm = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Vm = (e) => [
  e.choices ?? [],
  e.cancelType ?? 0,
  e.defaultType ?? 0,
  e.positionType ?? 2,
  e.background ?? 0
], qm = (e, t = 0) => ({
  code: mo,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.choices) ?? [],
    (e == null ? void 0 : e.cancelType) ?? 0,
    (e == null ? void 0 : e.defaultType) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.background) ?? 0
  ]
}), wm = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [
    [...e.parameters[0]],
    e.parameters[1],
    e.parameters[2],
    e.parameters[3],
    e.parameters[4]
  ]
}), Wm = (e, t = 0) => ({
  code: co,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.facename) ?? "",
    (e == null ? void 0 : e.faceIndex) ?? 0,
    (e == null ? void 0 : e.background) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.speakerName) ?? ""
  ]
}), Ym = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4]
}), jm = (e) => [
  e.facename,
  e.faceIndex,
  e.background,
  e.positionType,
  e.speakerName
], Km = (e, t = 0) => ({
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
}), Xm = (e, t = 0) => e.map(
  (n, o) => o === 0 ? na(n, t) : oa(n, t)
), aa = 0, ra = 1, ia = 2, H = 3, sa = 4, $m = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return t[6] >= 2 && t[6] <= 9 ? e.param(t[6] - 2) : 0;
}, zm = (e, t) => {
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
}, Qm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  aa,
  t.value
], Jm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  ra,
  t.variableId
], Zm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  ia,
  t.min,
  t.max
], ep = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  sa,
  t.code
], tp = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  H,
  t.type,
  t.itemId
], np = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  H,
  3,
  t.index,
  t.param
], op = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  H,
  4,
  t.index,
  ca[t.param]
], ap = (e) => ({
  min: e[0],
  max: e[1],
  value: e[2]
}), ma = (e) => [e.min, e.max, e.value], rp = (e, t = 0) => ({
  code: Ao,
  indent: t,
  parameters: ma(e)
}), ip = (e, t = 0) => ({
  code: lo,
  indent: t,
  parameters: pa(e ?? {})
}), sp = (e) => ({
  eventId: e[0]
}), pa = (e) => [e.eventId ?? 0], cp = (e) => u(e) && e.code === Be, mp = (e) => u(e) && e.code === Ge, pp = (e) => u(e) && e.code === Ve, dp = (e) => u(e) && e.code === qe, Ep = (e) => u(e) && e.code === ke, yp = (e) => u(e) && e.code === be, lp = (e) => u(e) && e.code === Ue, da = (e) => [...e], Ap = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: da(e.parameters)
}), Ea = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", _p = (e) => e.parameters.every(Ea);
export {
  Fs as ABORT_BATTLE,
  T as AUTHOR_RMMZ,
  ys as BATTLE_PROCESSING,
  Cs as CHANGE_ACTOR_IMAGES,
  fi as CHANGE_ARMORS,
  ps as CHANGE_BATTLE_BACKGROUND,
  ke as CHANGE_BATTLE_BGM,
  Ss as CHANGE_CLASS,
  Ue as CHANGE_DEFEAT_ME,
  Pi as CHANGE_ENCOUNTER,
  fs as CHANGE_ENEMY_HP,
  Os as CHANGE_ENEMY_MP,
  Ms as CHANGE_ENEMY_STATE,
  xs as CHANGE_ENEMY_TP,
  Is as CHANGE_EXP,
  hi as CHANGE_FORMATION_ACCESS,
  Si as CHANGE_GOLD,
  Ts as CHANGE_HP,
  Ci as CHANGE_ITEMS,
  Li as CHANGE_MENU_ACCESS,
  us as CHANGE_MP,
  _o as CHANGE_NAME,
  To as CHANGE_NICKNAME,
  ds as CHANGE_PARALLAX,
  Oi as CHANGE_PARTY_MEMBER,
  wi as CHANGE_PLAYER_FOLLOWERS,
  uo as CHANGE_PROFILE,
  Mi as CHANGE_SAVE_ACCESS,
  ms as CHANGE_TILESET,
  Rs as CHANGE_TP,
  Bi as CHANGE_TRANSPARENCY,
  vi as CHANGE_VEHICLE_BGM,
  Ns as CHANGE_VEHICLE_IMAGE,
  be as CHANGE_VICTORY_ME,
  Ni as CHANGE_WEAPONS,
  Di as CHANGE_WINDOW_COLOR,
  St as COLLAPS_BOSS,
  Ct as COLLAPS_INSTANT,
  Nt as COLLAPS_NONE,
  It as COLLAPS_NORMAL,
  xe as COMMENT_BODY,
  He as COMMENT_HEAD,
  lo as COMMON_EVENT,
  Ei as CONDITIONAL_BRANCH,
  yi as CONDITIONAL_BRANCH_ELSE,
  gi as CONTROL_SELF_SWITCH,
  Ao as CONTROL_SWITCHES,
  Ii as CONTROL_TIMER,
  Ri as CONTROL_VARIABLES,
  Zn as DEFAULT_DAMAGE_LABELS,
  vo as DEFAULT_GLOBAL_LABELS,
  Qr as DEFAULT_ITEM_LABELS,
  Jr as DEFAULT_SKILL_LABELS,
  Kc as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Zr as DEFAULT_USABLE_ITEM_LABELS,
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
  hr as EFFECT_SPECIAL,
  Ps as ENEMY_APPEAR,
  Ls as ENEMY_RECOVER_ALL,
  hs as ENEMY_TRANSFORM,
  qi as ERASE_EVENT,
  ts as ERASE_PICTURE,
  _i as EXIT_EVENT_PROCESSING,
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
  ji as FADEIN_SCREEN,
  os as FADEOUT_BGM,
  is as FADEOUT_BGS,
  Yi as FADEOUT_SCREEN,
  va as FILENAME_ACTORS,
  Va as FILENAME_ANIMATIONS,
  ba as FILENAME_ARMORS,
  Fa as FILENAME_CLASSES,
  wa as FILENAME_COMMON_EVENTS,
  Ua as FILENAME_ENEMIES,
  xa as FILENAME_ITEMS,
  Wa as FILENAME_MAP_INFOS,
  Ha as FILENAME_SKILLS,
  Ga as FILENAME_STATES,
  Da as FILENAME_SYSTEM,
  qa as FILENAME_TILESET,
  Ba as FILENAME_TROOPS,
  ka as FILENAME_WEAPONS,
  Dt as FLAG_ID_AUTO_BATTLE,
  vt as FLAG_ID_GUARD,
  Ht as FLAG_ID_PRESERVE_TP,
  Ft as FLAG_ID_SUBSTITUTE,
  Xi as FLASH_SCREEN,
  Ka as FOLDER_AUDIO,
  la as FOLDER_AUDIO_BGM,
  Ta as FOLDER_AUDIO_BGS,
  _a as FOLDER_AUDIO_ME,
  Aa as FOLDER_AUDIO_SE,
  Ya as FOLDER_DATA,
  ja as FOLDER_IMG,
  ua as FOLDER_IMG_BATTLEBACK1,
  Ra as FOLDER_IMG_BATTLEBACK2,
  ga as FOLDER_IMG_CHACTERS,
  Ia as FOLDER_IMG_ENEMIES,
  Sa as FOLDER_IMG_FACES,
  Ca as FOLDER_IMG_PARALLACES,
  Na as FOLDER_IMG_PICTURES,
  fa as FOLDER_IMG_SV_ACTORS,
  Oa as FOLDER_IMG_SV_ENEMIES,
  Ma as FOLDER_IMG_SYSTEM,
  La as FOLDER_IMG_TILESETS,
  Pa as FOLDER_IMG_TITLES1,
  ha as FOLDER_IMG_TITLES2,
  Xa as FOLDER_JS,
  vs as FORCE_ACTION,
  bs as GAME_OVER,
  Wi as GATHER_FOLLOWERS,
  Es as GET_LOCATION_INFO,
  Ui as GET_ONOFF_VEHICLE,
  Mr as HITTYPE_CERTAIN,
  Pr as HITTYPE_MAGICAL,
  Lr as HITTYPE_PHYSICAL,
  Eo as INPUT_NUMBER,
  Ti as LABEL,
  Ir as LABELS_DATA_WEAPON,
  ui as LABEL_JUMP,
  am as LABEL_REGISTRY_JP,
  Jn as LABEL_SET_DATA,
  m as LABEL_SET_ITEM_EFFECT,
  r as LABEL_SET_TRAIT,
  li as LOOP,
  Ai as LOOP_BREAK,
  j as MODULE_DATA,
  K as MODULE_SYSTEM,
  D as MODULE_TRAIT,
  Ji as MOVE_PICTURE,
  Xc as MockSystemLabelDataTypes,
  _s as NAME_INPUT_PROCESSING,
  mi as NO_OPERATION,
  Hs as OPEN_MENU_SCREEN,
  ks as OPEN_SAVE_SCREEN,
  aa as OPERAND_CONSTANT,
  H as OPERAND_GAMEDATA,
  ia as OPERAND_RANDOM,
  sa as OPERAND_SCRIPT,
  ra as OPERAND_VARIABLE,
  Mt as PARTY_ABILITY_CANCEL_SURPRISE,
  ht as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  ft as PARTY_ABILITY_ENCOUNTER_HALF,
  Ot as PARTY_ABILITY_ENCOUNTER_NONE,
  Pt as PARTY_ABILITY_GOLD_DOUBLE,
  Lt as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Be as PLAY_BGM,
  Ge as PLAY_BGS,
  Ve as PLAY_ME,
  cs as PLAY_MOVIE,
  qe as PLAY_SE,
  Bs as PLUGIN_COMMAND_MV,
  Gs as PLUGIN_COMMAND_MZ,
  gs as RECOVER_ALL,
  pe as REGULAR_PARAM_AGI,
  ie as REGULAR_PARAM_ATK,
  se as REGULAR_PARAM_DEF,
  de as REGULAR_PARAM_LUK,
  ce as REGULAR_PARAM_MATK,
  ae as REGULAR_PARAM_MAX_HP,
  re as REGULAR_PARAM_MAX_MP,
  me as REGULAR_PARAM_MDEF,
  rs as RESUME_BGM,
  Us as RETURN_TO_TITLE_SCREEN,
  Zi as ROTATE_PICTURE,
  hc as ROUTE_CHANGE_BLEND_MODE,
  Tc as ROUTE_CHANGE_FREQ,
  Lc as ROUTE_CHANGE_IMAGE,
  Pc as ROUTE_CHANGE_OPACITY,
  _c as ROUTE_CHANGE_SPEED,
  Cc as ROUTE_DIR_FIX_OFF,
  Sc as ROUTE_DIR_FIX_ON,
  Vs as ROUTE_END,
  tc as ROUTE_JUMP,
  Js as ROUTE_MOVE_AWAY,
  ec as ROUTE_MOVE_BACKWARD,
  qs as ROUTE_MOVE_DOWN,
  Zs as ROUTE_MOVE_FORWARD,
  ws as ROUTE_MOVE_LEFT,
  js as ROUTE_MOVE_LOWER_L,
  Ks as ROUTE_MOVE_LOWER_R,
  zs as ROUTE_MOVE_RANDOM,
  Ws as ROUTE_MOVE_RIGHT,
  Qs as ROUTE_MOVE_TOWARD,
  Ys as ROUTE_MOVE_UP,
  Xs as ROUTE_MOVE_UPPER_L,
  $s as ROUTE_MOVE_UPPER_R,
  Dc as ROUTE_PLAY_SE,
  vc as ROUTE_SCRIPT,
  Ic as ROUTE_STEP_ANIME_OFF,
  gc as ROUTE_STEP_ANIME_ON,
  Ac as ROUTE_SWITCH_OFF,
  lc as ROUTE_SWITCH_ON,
  fc as ROUTE_THROUGH_OFF,
  Nc as ROUTE_THROUGH_ON,
  Mc as ROUTE_TRANSPARENT_OFF,
  Oc as ROUTE_TRANSPARENT_ON,
  mc as ROUTE_TURN_180D,
  cc as ROUTE_TURN_90D_L,
  sc as ROUTE_TURN_90D_R,
  pc as ROUTE_TURN_90D_R_L,
  yc as ROUTE_TURN_AWAY,
  oc as ROUTE_TURN_DOWN,
  ac as ROUTE_TURN_LEFT,
  dc as ROUTE_TURN_RANDOM,
  rc as ROUTE_TURN_RIGHT,
  Ec as ROUTE_TURN_TOWARD,
  ic as ROUTE_TURN_UP,
  nc as ROUTE_WAIT,
  Rc as ROUTE_WALK_ANIME_OFF,
  uc as ROUTE_WALK_ANIME_ON,
  as as SAVE_BGM,
  ei as SCHEMA_DAMAGE,
  ln as SCHEMA_DATA_ACTOR,
  An as SCHEMA_DATA_ARMMOR,
  _n as SCHEMA_DATA_CLASS,
  gn as SCHEMA_DATA_ENEMY,
  Sn as SCHEMA_DATA_ITEM,
  Io as SCHEMA_DATA_MAP_INFO,
  In as SCHEMA_DATA_SKILL,
  Tn as SCHEMA_DATA_STATE,
  un as SCHEMA_DATA_WEAPON,
  Yc as SCHEMA_SYSTEM_ADVANCED,
  Ar as SCHEMA_TRAIT,
  we as SCRIPT_EVAL,
  We as SCRIPT_EVAL_BODY,
  ki as SCROLL_MAP,
  pi as SELECT_ITEM,
  xi as SET_EVENT_LOCATION,
  bi as SET_MOVEMENT_ROUTE,
  Hi as SET_VEHICLE_LOCATION,
  ns as SET_WEATHER_EFFECT,
  $i as SHAKE_SCREEN,
  ls as SHOP_PROCESSING,
  As as SHOP_PROCESSING_BODY,
  Gi as SHOW_ANIMATION,
  Vi as SHOW_BALLOON_ICON,
  Ds as SHOW_BATTLE_ANIMATION,
  mo as SHOW_CHOICES,
  po as SHOW_CHOICES_ITEM,
  co as SHOW_MESSAGE,
  ve as SHOW_MESSAGE_BODY,
  Qi as SHOW_PICTURE,
  yo as SHOW_SCROLLING_TEXT,
  Fe as SHOW_SCROLLING_TEXT_BODY,
  di as SKIP,
  Dr as SPECIAL_EFFECT_ESCAPE,
  Ie as SPECIAL_PARAM_EXR,
  ge as SPECIAL_PARAM_FDR,
  ye as SPECIAL_PARAM_GRD,
  _e as SPECIAL_PARAM_MCR,
  Re as SPECIAL_PARAM_MDR,
  ue as SPECIAL_PARAM_PDR,
  Ae as SPECIAL_PARAM_PHA,
  le as SPECIAL_PARAM_REC,
  Te as SPECIAL_PARAM_TCR,
  Ee as SPECIAL_PARAM_TGR,
  Un as SRC_ARMOR_TYPES,
  Wr as SRC_COLOR,
  xr as SRC_DATA_ACTOR,
  Vr as SRC_DATA_ARMOR,
  qr as SRC_DATA_CLASS,
  kn as SRC_DATA_COMMON_EVNET,
  Ur as SRC_DATA_ENEMY,
  Br as SRC_DATA_ITEMS,
  br as SRC_DATA_MAP,
  De as SRC_DATA_SKILL,
  N as SRC_DATA_STATE,
  wr as SRC_DATA_TROOP,
  kr as SRC_DATA_VARIABLE,
  Gr as SRC_DATA_WEAPON,
  Bn as SRC_ELEMENTS,
  Yr as SRC_EQUIP_TYPES,
  Oe as SRC_PARAMS_EXTRA,
  C as SRC_PARAMS_REGULAR,
  Me as SRC_PARAMS_SPECIAL,
  Kr as SRC_SKILL_TYPES,
  jr as SRC_SWITCHES,
  Le as SRC_TRAIT_COLLAPS,
  Pe as SRC_TRAIT_PARTY_ABILITY,
  he as SRC_TRAIT_SPECIAL_FLAG,
  bn as SRC_WEAPON_TYPES,
  ss as STOP_SE,
  es as TINT_PICTURE,
  Ki as TINT_SCREEN,
  Tt as TRAIT_ACTION_PLUS,
  ot as TRAIT_ATTACK_ELEMENT,
  st as TRAIT_ATTACK_SKILL,
  rt as TRAIT_ATTACK_SPEED,
  at as TRAIT_ATTACK_STATE,
  it as TRAIT_ATTACK_TIMES,
  Rt as TRAIT_COLLAPSE_TYPE,
  Qe as TRAIT_DEBUFF_RATE,
  ze as TRAIT_ELEMENT_RATE,
  yt as TRAIT_EQUIP_ARMOR_TYPE,
  lt as TRAIT_EQUIP_LOCK,
  At as TRAIT_EQUIP_SEAL,
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
  Fi as TRANSFER_PLAYER,
  lr as TYPENAME_TRAIT,
  Vt as TraitDescriptor,
  zi as WAIT,
  sr as buildCollapsSource,
  pr as buildExtraParamSource,
  cr as buildPartyAbilitySource,
  mr as buildRegularParamSource,
  Er as buildSpecialFlagSource,
  dr as buildSpecialParamSource,
  wm as cloneChoices,
  Ap as cloneEventCommand,
  da as cloneParameters,
  Pm as convertCommentArrayToObject,
  nm as createActorControlChars,
  F as createControlCharFormat,
  Fc as createEventCommand,
  je as createNoteEntity,
  om as createSystemVariableControlChars,
  jn as defineEffectAddBuff,
  $n as defineEffectAddDebuff,
  Wn as defineEffectAddState,
  Qn as defineEffectCommonEvent,
  wn as defineEffectGainTp,
  zr as defineEffectGrow,
  Xn as defineEffectLearnSkill,
  Vn as defineEffectRecoverHp,
  qn as defineEffectRecoverMp,
  Kn as defineEffectRemoveBuff,
  zn as defineEffectRemoveDebuff,
  Yn as defineEffectRemoveState,
  rr as extraParamName,
  xt as foldCollapsOptions,
  Ut as foldExtraParam,
  kt as foldPartyAbilityOptions,
  bt as foldRegularParam,
  Gt as foldSpecialFlag,
  Bt as foldSpecialParams,
  Xr as formatItemEffectText,
  sp as fromArrayCommonEvent,
  ap as fromArrayControlSwitches,
  Dm as fromArrayInputNumber,
  xm as fromArrayScrollingTextBody,
  Fm as fromArrayScrollingTextHeader,
  Gm as fromArraySetupChoice,
  Um as fromArraySetupChoiceItem,
  Ym as fromArrayShowMessageHeader,
  em as fromStringArray,
  zm as getActorValue,
  nr as getArmorTypes,
  tm as getControlChars,
  Ja as getElementTypes,
  $m as getEnemyValue,
  Za as getEquipTypes,
  Jc as getNoteValue,
  or as getParamNames,
  er as getSkillTypes,
  Qa as getVariableNames,
  tr as getWeaponTypes,
  _p as isCloneableCommand,
  u as isCommandAudio,
  rm as isCommandChangeActorText,
  Ep as isCommandChangeBattleBgm,
  lp as isCommandChangeDefeatMe,
  yp as isCommandChangeVictoryMe,
  Am as isCommandCommentBody,
  lm as isCommandCommentHeader,
  sm as isCommandCommonEvent,
  pm as isCommandInputNumber,
  cp as isCommandPlayBgm,
  mp as isCommandPlayBgs,
  pp as isCommandPlayMe,
  dp as isCommandPlaySe,
  Tm as isCommandScriptBody,
  _m as isCommandScriptHeader,
  im as isCommandScrollTextHead,
  mm as isCommandShowChoiceItem,
  cm as isCommandShowChoices,
  dm as isCommandShowMessage,
  Em as isCommandShowMessageBody,
  ym as isCommandShowScrollingTextBody,
  I as isCommandTextBody,
  oi as isDataActor,
  ai as isDataArmor,
  ci as isDataClass,
  ii as isDataEnemy,
  ti as isDataItem,
  wc as isDataMap,
  qc as isDataMapInfo,
  ni as isDataSkill,
  si as isDataState,
  ri as isDataWeapon,
  Hr as isValid,
  Fr as joinSourceKey,
  _r as makeActorData,
  ur as makeArmorData,
  Im as makeAudioCommand,
  a as makeAudioFileParams,
  Rr as makeClassData,
  A as makeCommandAudioAny,
  um as makeCommandChangeActorName,
  Rm as makeCommandChangeActorNickName,
  gm as makeCommandChangeActorProfile,
  Om as makeCommandChangeBattleBGM,
  Lm as makeCommandChangeDefeatME,
  Mm as makeCommandChangeVictoryME,
  Jo as makeCommandCommentBody,
  Qo as makeCommandCommentHeader,
  ip as makeCommandCommonEvent,
  rp as makeCommandControlSwitches,
  vm as makeCommandInputNumber,
  Sm as makeCommandPlayBGM,
  Cm as makeCommandPlayBGS,
  Nm as makeCommandPlayME,
  fm as makeCommandPlaySE,
  Xm as makeCommandScriptArray,
  oa as makeCommandScriptBody,
  na as makeCommandScriptHeader,
  km as makeCommandScrollingTextBody,
  Hm as makeCommandScrollingTextHeader,
  qm as makeCommandSetupChoice,
  bm as makeCommandShowChoiceItem,
  Wm as makeCommandShowMessage,
  Km as makeCommandShowMessageBody,
  Xe as makeCommentArray,
  hm as makeCommentCommandArray,
  Uc as makeCommonEventData,
  v as makeDamage,
  Rn as makeDropItem,
  Cr as makeEnemyAction,
  Nr as makeEnemyData,
  Ro as makeEventPageCondition,
  fr as makeItemData,
  bc as makeMapData,
  Hc as makeMapEvent,
  go as makeMapEventIamge,
  xc as makeMapEventPage,
  kc as makeMapInfoData,
  M as makeRegex,
  Or as makeSkillData,
  jc as makeSoundsArray,
  gr as makeStateData,
  Wc as makeSystemAdvanced,
  Bc as makeTroopData,
  Vc as makeTroopEventConditions,
  Gc as makeTroopMember,
  Sr as makeWeaponData,
  $a as mergeDomainLabel,
  za as mergeNestedPrimitiveRecords,
  Y as mergeWithDefaults,
  Tr as normalizeDataActor,
  zc as readNote,
  Ke as readNoteEx,
  $c as readNoteObject,
  ar as regularParamName,
  Qc as replaceNote,
  $r as resolveItemEffectLabels,
  yr as resolveTraitLabels,
  vr as sanitizeKey,
  Zc as setNoteValue,
  ir as specialParamName,
  P as testUnknonwKey,
  pa as toArrayCommonEvent,
  ma as toArrayControlSwitches,
  Zo as toArrayInputNumber,
  np as toArrayOperandActorStatus,
  Qm as toArrayOperandConstant,
  op as toArrayOperandEnemyStatus,
  tp as toArrayOperandItemData,
  Zm as toArrayOperandRandom,
  ep as toArrayOperandScript,
  Jm as toArrayOperandVariable,
  ta as toArrayScrollingTextBody,
  ea as toArrayScrollingTextHeader,
  Vm as toArraySetupChoice,
  Bm as toArraySetupChoiceItem,
  jm as toArrayShowMessageHeader,
  g as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
