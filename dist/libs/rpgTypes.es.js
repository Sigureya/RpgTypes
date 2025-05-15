import D from "ajv";
const aa = "bgm", ra = "se", ia = "me", sa = "bgs", ca = "battlebacks1", ma = "battlebacks2", pa = "characters", da = "enemies", Ea = "faces", Aa = "parallaxes", _a = "pictures", Ta = "sv_actors", la = "sv_enemies", ya = "system", ua = "tilesets", Ra = "titles1", Ia = "titles2", ga = "System.json", Sa = "Actors.json", Ca = "Classes.json", Na = "Skills.json", fa = "Items.json", Oa = "Weapons.json", Ma = "Armors.json", La = "Enemies.json", Pa = "Troops.json", Da = "States.json", ha = "Animations.json", va = "Tilesets.json", Fa = "CommonEvents.json", Ha = "MapInfos.json", ka = "data", xa = "img", Ua = "audio", Ba = "js", w = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const s = t[o];
    typeof s == "string" && (n[o] = s);
  }
  return n;
}, Ga = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: w(e.options, t.options ?? {})
}), ba = (e, t) => {
  const n = {};
  for (const o in e) {
    const s = e[o], p = t[o] ?? {};
    n[o] = w(
      s,
      p
    );
  }
  return n;
}, l = (e, t) => ({
  name: e,
  id: t
}), Va = (e) => e.variables.map(l), qa = (e) => e.elements.map(l), Wa = (e) => e.equipTypes.map(l), Ya = (e) => e.skillTypes.map(l), wa = (e) => e.weaponTypes.map(l), ja = (e) => e.armorTypes.map(l), Ka = (e) => e.terms.params.map(l), y = "rmmz", h = "trait", j = "data", K = "system", $e = 11, ze = 12, Qe = 13, Je = 14, Ze = 21, et = 22, tt = 23, nt = 31, ot = 32, at = 33, rt = 34, it = 35, st = 41, ct = 42, mt = 43, pt = 44, dt = 51, Et = 52, At = 53, _t = 54, Tt = 55, lt = 61, yt = 62, ut = 63, Rt = 64, It = 0, gt = 1, St = 2, Ct = 3, Nt = 0, ft = 1, Ot = 2, Mt = 3, Lt = 4, Pt = 5, Dt = 0, ht = 1, vt = 2, Ft = 3, X = 0, $ = 1, z = 2, Q = 3, J = 4, Z = 5, ee = 6, te = 7, ne = 8, oe = 9, ae = 0, re = 1, ie = 2, se = 3, ce = 4, me = 5, pe = 6, de = 7, Ee = 0, Ae = 1, _e = 2, Te = 3, le = 4, ye = 5, ue = 6, Re = 7, Ie = 8, ge = 9, Xa = (e, t) => {
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
}, $a = (e, t) => {
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
}, za = (e, t) => {
  switch (e) {
    case ge:
      return t.experienceRate;
    case Ee:
      return t.targetRate;
    case Ie:
      return t.floorDamageRate;
    case Ae:
      return t.guradEffectRate;
    case le:
      return t.mpCostRate;
    case ye:
      return t.tpChargeRate;
    case ue:
      return t.physicalDamageRate;
    case Re:
      return t.magicDamageRate;
    case Te:
      return t.pharmacology;
    case _e:
      return t.recoveryEffectRate;
  }
  return `?sparams[${e}]`;
}, Ht = (e, t) => [
  {
    id: It,
    name: t.normal
  },
  {
    id: gt,
    name: e.bossCollaps
  },
  {
    id: St,
    name: e.instantCollaps
  },
  {
    id: Ct,
    name: e.noneCollaps
  }
], kt = (e) => [
  {
    id: Nt,
    name: e.encounterHalf
  },
  {
    id: ft,
    name: e.encounterNone
  },
  {
    id: Ot,
    name: e.cancelSurprise
  },
  {
    id: Mt,
    name: e.raisePreemptive
  },
  {
    id: Lt,
    name: e.goldDouble
  },
  {
    id: Pt,
    name: e.dropItemDouble
  }
], xt = (e) => [
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
    id: Ae,
    name: e.guradEffectRate
  },
  {
    id: _e,
    name: e.recoveryEffectRate
  },
  {
    id: Te,
    name: e.pharmacology
  },
  {
    id: le,
    name: e.mpCostRate
  },
  {
    id: ye,
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
    id: Ie,
    name: e.floorDamageRate
  },
  {
    id: ge,
    name: e.experienceRate
  }
], Gt = (e) => [
  {
    id: Dt,
    name: e.autoBattle
  },
  {
    id: ht,
    name: e.guard
  },
  {
    id: vt,
    name: e.substitute
  },
  {
    id: Ft,
    name: e.preventEscape
  }
], I = (e, t, n) => ({
  items: n(t.options),
  label: t.domainName,
  source: {
    author: y,
    module: h,
    kind: e
  }
}), Qa = (e, t) => I(
  Le,
  e,
  (n) => Ht(n, t)
), Ja = (e) => I(Pe, e, kt), Za = (e) => I(C, e, xt), er = (e) => I(Oe, e, Ut), tr = (e) => I(Me, e, Bt), nr = (e) => I(De, e, Gt), c = "{name}", R = "{name} * {value}%", k = "{name} + {value}%", x = "{value}", r = {
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
      format: k,
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
      format: k
    },
    attackSpeed: {
      domainName: "攻撃速度補正",
      format: x
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: x
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
}, U = "{value}", B = "{name}";
class bt {
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
      B,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue() {
    return this.format.includes(U);
  }
  requiresName() {
    return this.format.includes(B);
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
const or = (e) => [
  Vt(e.elementRate),
  qt(e.debuffRate),
  Wt(e.stateRate),
  Yt(e.stateResist),
  wt(e.regularParam),
  jt(e.extraParam),
  Kt(e.specialParam),
  Xt(e.attackElement),
  $t(e.attackState),
  zt(e.attackSpeed),
  Qt(e.attackTimes),
  Jt(e.attackSkill),
  dn(e.skillTypeAdd),
  En(e.skillTypeSeal),
  cn(e.skillAdd),
  mn(e.skillSeal),
  on(e.equipWeaponType),
  an(e.equipArmorType),
  rn(e.equipLock),
  sn(e.equipSeal),
  pn(e.slotType),
  Zt(e.actionPlus),
  en(e.specialFlag),
  tn(e.collaps),
  nn(e.partyAbility)
], G = (e, t) => typeof t == "string" ? t : e, i = (e, t, n, o) => {
  const s = G(t.domainName, n.domainName), p = G(t.format, n.format);
  return new bt(e, s, p, o);
}, Se = () => ({
  module: K,
  author: y,
  kind: Bn
}), Ce = (e) => ({
  module: j,
  author: y,
  kind: e
}), E = (e) => ({
  author: y,
  module: h,
  kind: e
}), Ne = (e) => ({
  author: y,
  module: K,
  kind: e
}), Vt = (e) => i(
  $e,
  r.options.elementRate,
  e,
  Se()
), qt = (e) => i(
  ze,
  r.options.debuffRate,
  e,
  E(C)
), Wt = (e) => i(
  Qe,
  r.options.stateRate,
  e,
  E(C)
), Yt = (e) => i(
  Je,
  r.options.stateResist,
  e,
  Ce(N)
), wt = (e) => i(
  Ze,
  r.options.regularParam,
  e,
  E(C)
), jt = (e) => i(
  et,
  r.options.extraParam,
  e,
  E(Oe)
), Kt = (e) => i(
  tt,
  r.options.specialParam,
  e,
  E(Me)
), Xt = (e) => i(
  nt,
  r.options.attackElement,
  e,
  Se()
), $t = (e) => i(
  ot,
  r.options.attackState,
  e,
  E(N)
), zt = (e) => i(at, r.options.attackSpeed, e), Qt = (e) => i(rt, r.options.attackTimes, e), Jt = (e) => i(
  it,
  r.options.attackSkill,
  e,
  Ce(he)
), Zt = (e) => i(lt, r.options.actionPlus, e), en = (e) => i(
  yt,
  r.options.specialFlag,
  e,
  E(De)
), tn = (e) => i(
  ut,
  r.options.collaps,
  e,
  E(Le)
), nn = (e) => i(
  Rt,
  r.options.partyAbility,
  e,
  E(Pe)
), on = (e) => i(
  dt,
  r.options.equipWeaponType,
  e,
  Ne(xn)
), an = (e) => i(
  Et,
  r.options.equipArmorType,
  e,
  Ne(Un)
), rn = (e) => i(At, r.options.equipLock, e), sn = (e) => i(_t, r.options.equipSeal, e), cn = (e) => i(mt, r.options.skillAdd, e), mn = (e) => i(pt, r.options.skillSeal, e), pn = (e) => i(Tt, r.options.slotType, e), dn = (e) => i(
  st,
  r.options.skillTypeAdd,
  e
), En = (e) => i(
  ct,
  r.options.skillTypeSeal,
  e
), ar = "Trait", rr = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, ir = (e = {}) => ({
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
}, sr = (e) => ({
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
}), cr = (e = {}) => ({
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
}), _n = {
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
}, mr = (e = {}) => ({
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
}), Tn = {
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
}, pr = (e = {}) => ({
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
}), ln = {
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
}, dr = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Er = (e = {}) => ({
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
  damage: v(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), yn = {
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
}, un = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), Ar = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), _r = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => un())) ?? [],
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
}, Rn = {
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
}, Tr = (e = {}) => ({
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
  damage: v(e.damage ?? {}),
  effects: [],
  price: 0
}), lr = (e = {}) => ({
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
}, gn = {
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
}, yr = 0, ur = 1, Rr = 2, Sn = "{name} + {value1}", b = "{name} {value1}%", L = "{value1}% + {value2}", V = "{name} {value1}ターン", S = "{name}", m = {
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
      format: Sn
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
      format: b
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: S
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: b
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: S
    }
  }
}, Cn = 11, Nn = 12, fn = 13, On = 21, Mn = 22, Ln = 31, Pn = 32, Dn = 33, hn = 34, Ir = 41, vn = 42, Fn = 43, Hn = 44, gr = 0, fe = /^[a-zA-Z0-9]+$/, Sr = (e) => fe.test(e) ? e : void 0, P = (e) => typeof e == "string" ? fe.test(e) : !1, Cr = (e) => [e.author, e.module, e.kind].join("."), Nr = (e) => P(e.author) && P(e.module) && P(e.kind), C = "params", Oe = "xparams", Me = "sparams", Le = "collaps", Pe = "partyAbiility", De = "sflag", fr = "actor", Or = "variables", Mr = "map", Lr = "enemy", N = "state", he = "skill", Pr = "items", Dr = "weapon", hr = "armor", vr = "class", kn = "common_event", Fr = "troop", Hr = "colors", xn = "weaponTypes", Un = "armorTypes", kr = "equipTypes", xr = "switches", Ur = "skillTypes", Bn = "elements", q = "{value1}", W = "{value2}", Y = "{name}";
class Gn {
  constructor(t, n, o, s, p) {
    this.codeId = t, this.label = n, this.format = o, this.description = s, this.dataSource = p;
  }
  formatText(t, n) {
    const o = this.format.replaceAll(q, t.value1.toString()).replaceAll(W, t.value2.toString());
    return this.dataSource ? o.replaceAll(
      Y,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue1() {
    return this.format.includes(q);
  }
  requiresValue2() {
    return this.format.includes(W);
  }
  requiresName() {
    return this.format.includes(Y);
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
const Br = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), Gr = (e) => [
  bn(e.options.recoverHp),
  Vn(e.options.recoverMp),
  qn(e.options.gainTp),
  Wn(e.options.addState),
  Yn(e.options.removeState),
  wn(e.options.addBuff),
  Xn(e.options.addDebuff),
  jn(e.options.removeBuff),
  $n(e.options.removeDebuff),
  Kn(e.options.learnSkill),
  zn(e.options.commonEvent)
], f = () => ({
  author: y,
  module: h,
  kind: C
}), O = (e) => ({
  author: y,
  module: j,
  kind: e
}), d = (e, t, n, o) => {
  const s = n.domainName ?? t.domainName, p = n.format ?? t.format, Xe = n.desc ?? t.desc;
  return new Gn(e, s, p, Xe, o);
}, bn = (e) => d(
  Cn,
  m.options.recoverHp,
  e
), Vn = (e) => d(
  Nn,
  m.options.recoverMp,
  e
), qn = (e) => d(fn, m.options.gainTp, e), br = (e) => d(vn, m.options.grow, e), Wn = (e) => d(
  On,
  m.options.addState,
  e,
  O(N)
), Yn = (e) => d(
  Mn,
  m.options.removeState,
  e,
  O(N)
), wn = (e) => d(
  Ln,
  m.options.addBuff,
  e,
  f()
), jn = (e) => d(
  Dn,
  m.options.removeBuff,
  e,
  f()
), Kn = (e) => d(
  Fn,
  m.options.learnSkill,
  e,
  O(he)
), Xn = (e) => d(
  Pn,
  m.options.addBuff,
  e,
  f()
), $n = (e) => d(
  hn,
  m.options.removeDebuff,
  e,
  f()
), zn = (e) => d(
  Hn,
  m.options.commonEvent,
  e,
  O(kn)
), Vr = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, qr = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, Wr = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, Qn = {
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
}, Jn = {
  domainName: "ダメージ",
  options: {}
}, v = (e = {}) => ({
  type: e.type ?? 0,
  elementId: e.elementId ?? 0,
  formula: e.formula ?? "",
  variance: e.variance ?? 0,
  critical: e.critical ?? !1
}), Yr = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, _ = new D(), Zn = _.compile(gn), eo = _.compile(In), to = _.compile(An), no = _.compile(_n), oo = _.compile(yn), ao = _.compile(Rn), ro = _.compile(ln), io = _.compile(Tn), wr = (e) => Zn(e), jr = (e) => eo(e), Kr = (e) => to(e), Xr = (e) => no(e), $r = (e) => oo(e), zr = (e) => ao(e), Qr = (e) => ro(e), Jr = (e) => io(e), Zr = 0, so = 101, ve = 401, co = 102, mo = 402, po = 103, ei = 104, Eo = 105, Fe = 405, He = 108, ke = 408, ti = 109, ni = 111, oi = 411, ai = 112, ri = 113, ii = 115, Ao = 117, si = 118, ci = 119, mi = 121, pi = 122, di = 123, Ei = 124, Ai = 125, _i = 126, Ti = 127, li = 128, yi = 129, xe = 132, Ue = 133, ui = 134, Ri = 135, Ii = 136, gi = 137, Si = 138, Be = 139, Ci = 140, Ni = 201, fi = 202, Oi = 203, Mi = 204, Li = 205, Pi = 206, Di = 211, hi = 212, vi = 213, Fi = 214, Hi = 216, ki = 217, xi = 221, Ui = 222, Bi = 223, Gi = 224, bi = 225, Vi = 230, qi = 231, Wi = 232, Yi = 233, wi = 234, ji = 235, Ki = 236, Ge = 241, Xi = 242, $i = 243, zi = 244, be = 245, Qi = 246, Ve = 249, qe = 250, Ji = 251, Zi = 261, es = 282, ts = 283, ns = 284, os = 285, as = 301, rs = 302, is = 605, ss = 303, cs = 311, ms = 312, ps = 313, ds = 314, Es = 315, _o = 320, As = 321, _s = 322, Ts = 323, To = 324, lo = 325, ls = 331, ys = 332, us = 333, Rs = 334, Is = 335, gs = 336, Ss = 337, Cs = 339, Ns = 340, fs = 351, Os = 342, Ms = 352, Ls = 353, Ps = 354, We = 355, Ye = 655, Ds = 356, hs = 357, vs = 0, Fs = 1, Hs = 2, ks = 3, xs = 4, Us = 5, Bs = 6, Gs = 7, bs = 8, Vs = 9, qs = 10, Ws = 11, Ys = 12, ws = 13, js = 14, Ks = 15, Xs = 16, $s = 17, zs = 18, Qs = 19, Js = 20, Zs = 21, ec = 22, tc = 23, nc = 24, oc = 25, ac = 26, rc = 27, ic = 28, sc = 29, cc = 30, mc = 31, pc = 32, dc = 33, Ec = 34, Ac = 35, _c = 36, Tc = 37, lc = 38, yc = 39, uc = 40, Rc = 41, Ic = 42, gc = 43, Sc = 44, Cc = 45, Nc = (e, t, n = 0) => ({
  code: e,
  indent: n,
  parameters: t
}), fc = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), yo = () => ({
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
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
}), Oc = () => ({
  conditions: uo(),
  list: [],
  directionFix: !1,
  image: yo(),
  moveFrequency: 5,
  moveRoute: {
    list: [],
    repeat: !1,
    skippable: !1,
    wait: !1
  }
}), Ro = {
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
}, Io = (e) => e.toString().padStart(3, "0"), Mc = (e = { id: 0 }) => ({
  name: e.name ?? Io(e.id),
  id: e.id,
  expanded: e.expanded ?? !1,
  order: e.order ?? 0,
  parentId: e.parentId ?? 0,
  scrollX: e.scrollX ?? 0,
  scrollY: e.scrollY ?? 0
}), Lc = (e = {}) => ({
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
}), Pc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), Dc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), hc = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), vc = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), go = new D(), So = go.compile(Ro), Fc = (e) => So(e), Hc = (e = {}) => ({
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
}), kc = {
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
}), xc = (e) => [
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
], Uc = {
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
}, Bc = {
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
}, we = (e, t) => `<${e}:${t}>`, M = () => /<([^<>:]+):([^>]*)>/g, Gc = (e, t) => je(e.note, (n, o) => t(n, o, e)), bc = (e) => je(e, (t, n) => [t, n]), je = (e, t) => {
  const n = M();
  return Array.from(e.matchAll(n), (o) => t(o[1], o[2]));
}, Vc = (e, t) => e.replaceAll(
  M(),
  (n, o, s) => {
    const p = t(o, s);
    return we(o, p);
  }
), qc = (e, t) => {
  const n = M(), o = Array.from(e.matchAll(n)).find(
    (s) => s[1] === t
  );
  return o ? o[2] : void 0;
}, Wc = (e, t, n) => {
  const o = M();
  return e.replaceAll(o, (s, p) => p === t ? we(p, n) : s);
}, F = (e, t) => `\\${e}[${t}]`, Yc = (e, t) => t.map((n, o) => ({
  text: n,
  controlChar: F(e, o)
})), wc = (e) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g;
  return Array.from(e.matchAll(t)).map(
    (n) => ({
      char: n[1],
      id: parseInt(n[2], 10)
    })
  );
}, Co = "N", No = "V", jc = (e) => e.map((t) => ({
  text: t.name,
  controlChar: F(Co, t.id)
})), Kc = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: F(No, n)
})).filter((t) => t.text !== ""), fo = {
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
}, Xc = {
  rpg: {
    damage: Jn,
    data: Qn,
    traits: r,
    itemEffect: m
  },
  global: fo
}, Oo = {
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
}, Mo = {
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
}, Lo = {
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
}, Po = {
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
}, Do = {
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
}, ho = {
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
}, vo = {
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
}, Fo = {
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
}, Ho = {
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
}, A = new D(), ko = A.compile(Ho), xo = A.compile(Lo), Uo = A.compile(Po), Bo = A.compile(ho), Go = A.compile(Mo), bo = A.compile(vo), Vo = A.compile(Oo), qo = A.compile(Do), Wo = A.compile(Fo), $c = (e) => ko(e), zc = (e) => Wo(e), g = (e) => Vo(e), u = (e) => qo(e), Qc = (e) => Uo(e), Jc = (e) => bo(e), Zc = (e) => Bo(e), em = (e) => xo(e), tm = (e) => Go(e), nm = (e) => g(e) && e.code === ve, om = (e) => g(e) && e.code === Fe, am = (e) => g(e) && e.code === He, rm = (e) => g(e) && e.code === ke, im = (e) => g(e) && e.code === We, sm = (e) => g(e) && e.code === Ye, cm = (e, t = 0) => ({
  code: _o,
  parameters: [e.actorId, e.name],
  indent: t
}), mm = (e, t = 0) => ({
  code: To,
  parameters: [e.actorId, e.nickname],
  indent: t
}), pm = (e, t = 0) => ({
  code: lo,
  parameters: [e.actorId, e.profile],
  indent: t
}), dm = (e, t) => T(e, a({ name: t })), T = (e, t, n = 0) => ({
  code: e,
  parameters: [a(t)],
  indent: n
}), Em = (e, t = 0) => T(Ge, e, t), Am = (e, t = 0) => T(be, e, t), _m = (e, t = 0) => T(Ve, e, t), Tm = (e, t = 0) => T(qe, e, t), lm = (e, t = 0) => T(xe, e, t), ym = (e, t = 0) => T(Ue, e, t), um = (e, t = 0) => T(Be, e, t), Rm = (e, t = 0) => ({
  code: Ao,
  indent: t,
  parameters: Yo(e ?? {})
}), Im = (e) => ({
  eventId: e[0]
}), Yo = (e) => [e.eventId ?? 0], Ke = (e) => [e], gm = (e) => ({
  comment: e[0]
}), wo = (e, t = 0) => ({
  code: He,
  indent: t,
  parameters: Ke(e)
}), jo = (e, t = 0) => ({
  code: ke,
  indent: t,
  parameters: Ke(e)
}), Sm = (e, t = 0) => e.map(
  (n, o) => o === 0 ? wo(n, t) : jo(n, t)
), Ko = (e) => [e.variableId ?? 0, e.digits ?? 0], Cm = (e) => ({
  variableId: e[0],
  digits: e[1]
}), Nm = (e, t = 0) => ({
  code: po,
  indent: t,
  parameters: Ko(e ?? {})
}), Xo = (e = {}) => [(e == null ? void 0 : e.speed) ?? 4, (e == null ? void 0 : e.skip) ?? !1], fm = (e) => ({
  speed: e[0],
  skip: e[1]
}), Om = (e = {}, t = 0) => ({
  code: Eo,
  indent: t,
  parameters: Xo(e)
}), $o = (e = "") => [e], Mm = (e) => ({
  content: e[0]
}), Lm = (e = "", t = 0) => ({
  code: Fe,
  indent: t ?? 0,
  parameters: $o(e)
}), Pm = (e, t = 0) => ({
  code: mo,
  indent: t,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), Dm = (e) => ({
  index: e[0],
  name: e[1]
}), hm = (e) => [e.index ?? 0, e.name ?? ""], vm = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Fm = (e) => [
  e.choices ?? [],
  e.cancelType ?? 0,
  e.defaultType ?? 0,
  e.positionType ?? 2,
  e.background ?? 0
], Hm = (e, t = 0) => ({
  code: co,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.choices) ?? [],
    (e == null ? void 0 : e.cancelType) ?? 0,
    (e == null ? void 0 : e.defaultType) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.background) ?? 0
  ]
}), km = (e, t = 0) => ({
  code: so,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.facename) ?? "",
    (e == null ? void 0 : e.faceIndex) ?? 0,
    (e == null ? void 0 : e.background) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.speakerName) ?? ""
  ]
}), xm = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4]
}), Um = (e) => [
  e.facename,
  e.faceIndex,
  e.background,
  e.positionType,
  e.speakerName
], Bm = (e, t = 0) => ({
  code: ve,
  indent: t,
  parameters: [e]
}), zo = (e, t = 0) => ({
  code: We,
  indent: t,
  parameters: [e]
}), Qo = (e, t = 0) => ({
  code: Ye,
  indent: t,
  parameters: [e]
}), Gm = (e, t = 0) => e.map(
  (n, o) => o === 0 ? zo(n, t) : Qo(n, t)
), Jo = 0, Zo = 1, ea = 2, H = 3, ta = 4, bm = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return t[6] >= 2 && t[6] <= 9 ? e.param(t[6] - 2) : 0;
}, Vm = (e, t) => {
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
}, na = {
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
}, qm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  Jo,
  t.value
], Wm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  Zo,
  t.variableId
], Ym = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  ea,
  t.min,
  t.max
], wm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  ta,
  t.code
], jm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  H,
  t.type,
  t.itemId
], Km = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  H,
  3,
  t.index,
  t.param
], Xm = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  H,
  4,
  t.index,
  na[t.param]
], $m = (e) => u(e) && e.code === Ge, zm = (e) => u(e) && e.code === be, Qm = (e) => u(e) && e.code === Ve, Jm = (e) => u(e) && e.code === qe, Zm = (e) => u(e) && e.code === xe, ep = (e) => u(e) && e.code === Ue, tp = (e) => u(e) && e.code === Be;
export {
  Ns as ABORT_BATTLE,
  y as AUTHOR_RMMZ,
  as as BATTLE_PROCESSING,
  _s as CHANGE_ACTOR_IMAGES,
  li as CHANGE_ARMORS,
  ts as CHANGE_BATTLE_BACKGROUND,
  xe as CHANGE_BATTLE_BGM,
  As as CHANGE_CLASS,
  Be as CHANGE_DEFEAT_ME,
  Ii as CHANGE_ENCOUNTER,
  ls as CHANGE_ENEMY_HP,
  ys as CHANGE_ENEMY_MP,
  us as CHANGE_ENEMY_STATE,
  Os as CHANGE_ENEMY_TP,
  Es as CHANGE_EXP,
  gi as CHANGE_FORMATION_ACCESS,
  Ai as CHANGE_GOLD,
  cs as CHANGE_HP,
  _i as CHANGE_ITEMS,
  Ri as CHANGE_MENU_ACCESS,
  ms as CHANGE_MP,
  _o as CHANGE_NAME,
  To as CHANGE_NICKNAME,
  ns as CHANGE_PARALLAX,
  yi as CHANGE_PARTY_MEMBER,
  Hi as CHANGE_PLAYER_FOLLOWERS,
  lo as CHANGE_PROFILE,
  ui as CHANGE_SAVE_ACCESS,
  es as CHANGE_TILESET,
  ps as CHANGE_TP,
  Di as CHANGE_TRANSPARENCY,
  Ci as CHANGE_VEHICLE_BGM,
  Ts as CHANGE_VEHICLE_IMAGE,
  Ue as CHANGE_VICTORY_ME,
  Ti as CHANGE_WEAPONS,
  Si as CHANGE_WINDOW_COLOR,
  gt as COLLAPS_BOSS,
  St as COLLAPS_INSTANT,
  Ct as COLLAPS_NONE,
  It as COLLAPS_NORMAL,
  ke as COMMENT_BODY,
  He as COMMENT_HEAD,
  Ao as COMMON_EVENT,
  ni as CONDITIONAL_BRANCH,
  oi as CONDITIONAL_BRANCH_ELSE,
  di as CONTROL_SELF_SWITCH,
  mi as CONTROL_SWITCHES,
  Ei as CONTROL_TIMER,
  pi as CONTROL_VARIABLES,
  Jn as DEFAULT_DAMAGE_LABELS,
  fo as DEFAULT_GLOBAL_LABELS,
  Vr as DEFAULT_ITEM_LABELS,
  qr as DEFAULT_SKILL_LABELS,
  Uc as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Wr as DEFAULT_USABLE_ITEM_LABELS,
  Ln as EFFECT_ADD_BUFF,
  Pn as EFFECT_ADD_DEBUFF,
  On as EFFECT_ADD_STATE,
  Hn as EFFECT_COMMON_EVENT,
  fn as EFFECT_GAIN_TP,
  vn as EFFECT_GROW,
  Fn as EFFECT_LEARN_SKILL,
  Cn as EFFECT_RECOVER_HP,
  Nn as EFFECT_RECOVER_MP,
  Dn as EFFECT_REMOVE_BUFF,
  hn as EFFECT_REMOVE_DEBUFF,
  Mn as EFFECT_REMOVE_STATE,
  Ir as EFFECT_SPECIAL,
  Is as ENEMY_APPEAR,
  Rs as ENEMY_RECOVER_ALL,
  gs as ENEMY_TRANSFORM,
  Fi as ERASE_EVENT,
  ji as ERASE_PICTURE,
  ii as EXIT_EVENT_PROCESSING,
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
  Ui as FADEIN_SCREEN,
  Xi as FADEOUT_BGM,
  Qi as FADEOUT_BGS,
  xi as FADEOUT_SCREEN,
  Sa as FILENAME_ACTORS,
  ha as FILENAME_ANIMATIONS,
  Ma as FILENAME_ARMORS,
  Ca as FILENAME_CLASSES,
  Fa as FILENAME_COMMON_EVENTS,
  La as FILENAME_ENEMIES,
  fa as FILENAME_ITEMS,
  Ha as FILENAME_MAP_INFOS,
  Na as FILENAME_SKILLS,
  Da as FILENAME_STATES,
  ga as FILENAME_SYSTEM,
  va as FILENAME_TILESET,
  Pa as FILENAME_TROOPS,
  Oa as FILENAME_WEAPONS,
  Dt as FLAG_ID_AUTO_BATTLE,
  ht as FLAG_ID_GUARD,
  Ft as FLAG_ID_PRESERVE_TP,
  vt as FLAG_ID_SUBSTITUTE,
  Gi as FLASH_SCREEN,
  Ua as FOLDER_AUDIO,
  aa as FOLDER_AUDIO_BGM,
  sa as FOLDER_AUDIO_BGS,
  ia as FOLDER_AUDIO_ME,
  ra as FOLDER_AUDIO_SE,
  ka as FOLDER_DATA,
  xa as FOLDER_IMG,
  ca as FOLDER_IMG_BATTLEBACK1,
  ma as FOLDER_IMG_BATTLEBACK2,
  pa as FOLDER_IMG_CHACTERS,
  da as FOLDER_IMG_ENEMIES,
  Ea as FOLDER_IMG_FACES,
  Aa as FOLDER_IMG_PARALLACES,
  _a as FOLDER_IMG_PICTURES,
  Ta as FOLDER_IMG_SV_ACTORS,
  la as FOLDER_IMG_SV_ENEMIES,
  ya as FOLDER_IMG_SYSTEM,
  ua as FOLDER_IMG_TILESETS,
  Ra as FOLDER_IMG_TITLES1,
  Ia as FOLDER_IMG_TITLES2,
  Ba as FOLDER_JS,
  Cs as FORCE_ACTION,
  Ls as GAME_OVER,
  ki as GATHER_FOLLOWERS,
  os as GET_LOCATION_INFO,
  Pi as GET_ONOFF_VEHICLE,
  yr as HITTYPE_CERTAIN,
  Rr as HITTYPE_MAGICAL,
  ur as HITTYPE_PHYSICAL,
  po as INPUT_NUMBER,
  si as LABEL,
  dr as LABELS_DATA_WEAPON,
  ci as LABEL_JUMP,
  Xc as LABEL_REGISTRY_JP,
  Qn as LABEL_SET_DATA,
  m as LABEL_SET_ITEM_EFFECT,
  r as LABEL_SET_TRAIT,
  ai as LOOP,
  ri as LOOP_BREAK,
  j as MODULE_DATA,
  K as MODULE_SYSTEM,
  h as MODULE_TRAIT,
  Wi as MOVE_PICTURE,
  Bc as MockSystemLabelDataTypes,
  ss as NAME_INPUT_PROCESSING,
  Zr as NO_OPERATION,
  fs as OPEN_MENU_SCREEN,
  Ms as OPEN_SAVE_SCREEN,
  Jo as OPERAND_CONSTANT,
  H as OPERAND_GAMEDATA,
  ea as OPERAND_RANDOM,
  ta as OPERAND_SCRIPT,
  Zo as OPERAND_VARIABLE,
  Ot as PARTY_ABILITY_CANCEL_SURPRISE,
  Pt as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Nt as PARTY_ABILITY_ENCOUNTER_HALF,
  ft as PARTY_ABILITY_ENCOUNTER_NONE,
  Lt as PARTY_ABILITY_GOLD_DOUBLE,
  Mt as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Ge as PLAY_BGM,
  be as PLAY_BGS,
  Ve as PLAY_ME,
  Zi as PLAY_MOVIE,
  qe as PLAY_SE,
  Ds as PLUGIN_COMMAND_MV,
  hs as PLUGIN_COMMAND_MZ,
  ds as RECOVER_ALL,
  pe as REGULAR_PARAM_AGI,
  ie as REGULAR_PARAM_ATK,
  se as REGULAR_PARAM_DEF,
  de as REGULAR_PARAM_LUK,
  ce as REGULAR_PARAM_MATK,
  ae as REGULAR_PARAM_MAX_HP,
  re as REGULAR_PARAM_MAX_MP,
  me as REGULAR_PARAM_MDEF,
  zi as RESUME_BGM,
  Ps as RETURN_TO_TITLE_SCREEN,
  Yi as ROTATE_PICTURE,
  gc as ROUTE_CHANGE_BLEND_MODE,
  cc as ROUTE_CHANGE_FREQ,
  Rc as ROUTE_CHANGE_IMAGE,
  Ic as ROUTE_CHANGE_OPACITY,
  sc as ROUTE_CHANGE_SPEED,
  _c as ROUTE_DIR_FIX_OFF,
  Ac as ROUTE_DIR_FIX_ON,
  vs as ROUTE_END,
  js as ROUTE_JUMP,
  Ws as ROUTE_MOVE_AWAY,
  ws as ROUTE_MOVE_BACKWARD,
  Fs as ROUTE_MOVE_DOWN,
  Ys as ROUTE_MOVE_FORWARD,
  Hs as ROUTE_MOVE_LEFT,
  Us as ROUTE_MOVE_LOWER_L,
  Bs as ROUTE_MOVE_LOWER_R,
  Vs as ROUTE_MOVE_RANDOM,
  ks as ROUTE_MOVE_RIGHT,
  qs as ROUTE_MOVE_TOWARD,
  xs as ROUTE_MOVE_UP,
  Gs as ROUTE_MOVE_UPPER_L,
  bs as ROUTE_MOVE_UPPER_R,
  Sc as ROUTE_PLAY_SE,
  Cc as ROUTE_SCRIPT,
  Ec as ROUTE_STEP_ANIME_OFF,
  dc as ROUTE_STEP_ANIME_ON,
  ic as ROUTE_SWITCH_OFF,
  rc as ROUTE_SWITCH_ON,
  lc as ROUTE_THROUGH_OFF,
  Tc as ROUTE_THROUGH_ON,
  uc as ROUTE_TRANSPARENT_OFF,
  yc as ROUTE_TRANSPARENT_ON,
  ec as ROUTE_TURN_180D,
  Zs as ROUTE_TURN_90D_L,
  Js as ROUTE_TURN_90D_R,
  tc as ROUTE_TURN_90D_R_L,
  ac as ROUTE_TURN_AWAY,
  Xs as ROUTE_TURN_DOWN,
  $s as ROUTE_TURN_LEFT,
  nc as ROUTE_TURN_RANDOM,
  zs as ROUTE_TURN_RIGHT,
  oc as ROUTE_TURN_TOWARD,
  Qs as ROUTE_TURN_UP,
  Ks as ROUTE_WAIT,
  pc as ROUTE_WALK_ANIME_OFF,
  mc as ROUTE_WALK_ANIME_ON,
  $i as SAVE_BGM,
  Yr as SCHEMA_DAMAGE,
  An as SCHEMA_DATA_ACTOR,
  _n as SCHEMA_DATA_ARMMOR,
  Tn as SCHEMA_DATA_CLASS,
  Rn as SCHEMA_DATA_ENEMY,
  gn as SCHEMA_DATA_ITEM,
  Ro as SCHEMA_DATA_MAP_INFO,
  In as SCHEMA_DATA_SKILL,
  ln as SCHEMA_DATA_STATE,
  yn as SCHEMA_DATA_WEAPON,
  kc as SCHEMA_SYSTEM_ADVANCED,
  rr as SCHEMA_TRAIT,
  We as SCRIPT_EVAL,
  Ye as SCRIPT_EVAL_BODY,
  Mi as SCROLL_MAP,
  ei as SELECT_ITEM,
  Oi as SET_EVENT_LOCATION,
  Li as SET_MOVEMENT_ROUTE,
  fi as SET_VEHICLE_LOCATION,
  Ki as SET_WEATHER_EFFECT,
  bi as SHAKE_SCREEN,
  rs as SHOP_PROCESSING,
  is as SHOP_PROCESSING_BODY,
  hi as SHOW_ANIMATION,
  vi as SHOW_BALLOON_ICON,
  Ss as SHOW_BATTLE_ANIMATION,
  co as SHOW_CHOICES,
  mo as SHOW_CHOICES_ITEM,
  so as SHOW_MESSAGE,
  ve as SHOW_MESSAGE_BODY,
  qi as SHOW_PICTURE,
  Eo as SHOW_SCROLLING_TEXT,
  Fe as SHOW_SCROLLING_TEXT_BODY,
  ti as SKIP,
  gr as SPECIAL_EFFECT_ESCAPE,
  ge as SPECIAL_PARAM_EXR,
  Ie as SPECIAL_PARAM_FDR,
  Ae as SPECIAL_PARAM_GRD,
  le as SPECIAL_PARAM_MCR,
  Re as SPECIAL_PARAM_MDR,
  ue as SPECIAL_PARAM_PDR,
  Te as SPECIAL_PARAM_PHA,
  _e as SPECIAL_PARAM_REC,
  ye as SPECIAL_PARAM_TCR,
  Ee as SPECIAL_PARAM_TGR,
  Un as SRC_ARMOR_TYPES,
  Hr as SRC_COLOR,
  fr as SRC_DATA_ACTOR,
  hr as SRC_DATA_ARMOR,
  vr as SRC_DATA_CLASS,
  kn as SRC_DATA_COMMON_EVNET,
  Lr as SRC_DATA_ENEMY,
  Pr as SRC_DATA_ITEMS,
  Mr as SRC_DATA_MAP,
  he as SRC_DATA_SKILL,
  N as SRC_DATA_STATE,
  Fr as SRC_DATA_TROOP,
  Or as SRC_DATA_VARIABLE,
  Dr as SRC_DATA_WEAPON,
  Bn as SRC_ELEMENTS,
  kr as SRC_EQUIP_TYPES,
  Oe as SRC_PARAMS_EXTRA,
  C as SRC_PARAMS_REGULAR,
  Me as SRC_PARAMS_SPECIAL,
  Ur as SRC_SKILL_TYPES,
  xr as SRC_SWITCHES,
  Le as SRC_TRAIT_COLLAPS,
  Pe as SRC_TRAIT_PARTY_ABILITY,
  De as SRC_TRAIT_SPECIAL_FLAG,
  xn as SRC_WEAPON_TYPES,
  Ji as STOP_SE,
  wi as TINT_PICTURE,
  Bi as TINT_SCREEN,
  lt as TRAIT_ACTION_PLUS,
  nt as TRAIT_ATTACK_ELEMENT,
  it as TRAIT_ATTACK_SKILL,
  at as TRAIT_ATTACK_SPEED,
  ot as TRAIT_ATTACK_STATE,
  rt as TRAIT_ATTACK_TIMES,
  ut as TRAIT_COLLAPSE_TYPE,
  ze as TRAIT_DEBUFF_RATE,
  $e as TRAIT_ELEMENT_RATE,
  Et as TRAIT_EQUIP_ARMOR_TYPE,
  At as TRAIT_EQUIP_LOCK,
  _t as TRAIT_EQUIP_SEAL,
  dt as TRAIT_EQUIP_WEAPON_TYPE,
  Ze as TRAIT_PARAM,
  Rt as TRAIT_PARTY_ABILITY,
  mt as TRAIT_SKILL_ADD,
  pt as TRAIT_SKILL_SEAL,
  st as TRAIT_SKILL_TYPE_ADD,
  ct as TRAIT_SKILL_TYPE_SEAL,
  Tt as TRAIT_SLOT_TYPE,
  tt as TRAIT_SPARAM,
  yt as TRAIT_SPECIAL_FLAG,
  Qe as TRAIT_STATE_RATE,
  Je as TRAIT_STATE_RESIST,
  et as TRAIT_XPARAM,
  Ni as TRANSFER_PLAYER,
  ar as TYPENAME_TRAIT,
  bt as TraitDescriptor,
  Vi as WAIT,
  Qa as buildCollapsSource,
  er as buildExtraParamSource,
  Ja as buildPartyAbilitySource,
  Za as buildRegularParamSource,
  nr as buildSpecialFlagSource,
  tr as buildSpecialParamSource,
  gm as convertCommentArrayToObject,
  jc as createActorControlChars,
  F as createControlCharFormat,
  Nc as createEventCommand,
  we as createNoteEntity,
  Kc as createSystemVariableControlChars,
  wn as defineEffectAddBuff,
  Xn as defineEffectAddDebuff,
  Wn as defineEffectAddState,
  zn as defineEffectCommonEvent,
  qn as defineEffectGainTp,
  br as defineEffectGrow,
  Kn as defineEffectLearnSkill,
  bn as defineEffectRecoverHp,
  Vn as defineEffectRecoverMp,
  jn as defineEffectRemoveBuff,
  $n as defineEffectRemoveDebuff,
  Yn as defineEffectRemoveState,
  $a as extraParamName,
  Ht as foldCollapsOptions,
  Ut as foldExtraParam,
  kt as foldPartyAbilityOptions,
  xt as foldRegularParam,
  Gt as foldSpecialFlag,
  Bt as foldSpecialParams,
  Br as formatItemEffectText,
  Im as fromArrayCommonEvent,
  Cm as fromArrayInputNumber,
  Mm as fromArrayScrollingTextBody,
  fm as fromArrayScrollingTextHeader,
  vm as fromArraySetupChoice,
  Dm as fromArraySetupChoiceItem,
  xm as fromArrayShowMessageHeader,
  Yc as fromStringArray,
  Vm as getActorValue,
  ja as getArmorTypes,
  wc as getControlChars,
  qa as getElementTypes,
  bm as getEnemyValue,
  Wa as getEquipTypes,
  qc as getNoteValue,
  Ka as getParamNames,
  Ya as getSkillTypes,
  Va as getVariableNames,
  wa as getWeaponTypes,
  u as isCommandAudio,
  $c as isCommandChangeActorText,
  Zm as isCommandChangeBattleBgm,
  tp as isCommandChangeDefeatMe,
  ep as isCommandChangeVictoryMe,
  rm as isCommandCommentBody,
  am as isCommandCommentHeader,
  Qc as isCommandCommonEvent,
  em as isCommandInputNumber,
  $m as isCommandPlayBgm,
  zm as isCommandPlayBgs,
  Qm as isCommandPlayMe,
  Jm as isCommandPlaySe,
  sm as isCommandScriptBody,
  im as isCommandScriptHeader,
  zc as isCommandScrollTextHead,
  Zc as isCommandShowChoiceItem,
  Jc as isCommandShowChoices,
  tm as isCommandShowMessage,
  nm as isCommandShowMessageBody,
  om as isCommandShowScrollingTextBody,
  g as isCommandTextBody,
  Kr as isDataActor,
  Xr as isDataArmor,
  Jr as isDataClass,
  zr as isDataEnemy,
  wr as isDataItem,
  Fc as isDataMapInfo,
  jr as isDataSkill,
  Qr as isDataState,
  $r as isDataWeapon,
  Nr as isValid,
  Cr as joinSourceKey,
  ir as makeActorData,
  cr as makeArmorData,
  dm as makeAudioCommand,
  a as makeAudioFileParams,
  mr as makeClassData,
  Rm as makeCommand2_CommonEvent,
  Pm as makeCommand2_ShowChoiceItem,
  T as makeCommandAudioAny,
  cm as makeCommandChangeActorName,
  mm as makeCommandChangeActorNickName,
  pm as makeCommandChangeActorProfile,
  lm as makeCommandChangeBattleBGM,
  um as makeCommandChangeDefeatME,
  ym as makeCommandChangeVictoryME,
  jo as makeCommandCommentBody,
  wo as makeCommandCommentHeader,
  Nm as makeCommandInputNumber,
  Em as makeCommandPlayBGM,
  Am as makeCommandPlayBGS,
  _m as makeCommandPlayME,
  Tm as makeCommandPlaySE,
  Gm as makeCommandScriptArray,
  Qo as makeCommandScriptBody,
  zo as makeCommandScriptHeader,
  Lm as makeCommandScrollingTextBody,
  Om as makeCommandScrollingTextHeader,
  Hm as makeCommandSetupChoice,
  km as makeCommandShowMessage,
  Bm as makeCommandShowMessageBody,
  Ke as makeCommentArray,
  Sm as makeCommentCommandArray,
  Pc as makeCommonEventData,
  v as makeDamage,
  un as makeDropItem,
  Ar as makeEnemyAction,
  _r as makeEnemyData,
  uo as makeEventPageCondition,
  Tr as makeItemData,
  Lc as makeMapData,
  fc as makeMapEvent,
  yo as makeMapEventIamge,
  Oc as makeMapEventPage,
  Mc as makeMapInfoData,
  M as makeRegex,
  lr as makeSkillData,
  xc as makeSoundsArray,
  pr as makeStateData,
  Hc as makeSystemAdvanced,
  Dc as makeTroopData,
  vc as makeTroopEventConditions,
  hc as makeTroopMember,
  Er as makeWeaponData,
  Ga as mergeDomainLabel,
  ba as mergeNestedPrimitiveRecords,
  w as mergeWithDefaults,
  sr as normalizeDataActor,
  bc as readNote,
  je as readNoteEx,
  Gc as readNoteObject,
  Xa as regularParamName,
  Vc as replaceNote,
  Gr as resolveItemEffectLabels,
  or as resolveTraitLabels,
  Sr as sanitizeKey,
  Wc as setNoteValue,
  za as specialParamName,
  P as testUnknonwKey,
  Yo as toArrayCommonEvent,
  Ko as toArrayInputNumber,
  Km as toArrayOperandActorStatus,
  qm as toArrayOperandConstant,
  Xm as toArrayOperandEnemyStatus,
  jm as toArrayOperandItemData,
  Ym as toArrayOperandRandom,
  wm as toArrayOperandScript,
  Wm as toArrayOperandVariable,
  $o as toArrayScrollingTextBody,
  Xo as toArrayScrollingTextHeader,
  Fm as toArraySetupChoice,
  hm as toArraySetupChoiceItem,
  Um as toArrayShowMessageHeader,
  I as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
