import h from "ajv";
const _a = "bgm", Ta = "se", ua = "me", ga = "bgs", Ra = "battlebacks1", Ia = "battlebacks2", Sa = "characters", Ca = "enemies", Na = "faces", fa = "parallaxes", Oa = "pictures", Ma = "sv_actors", La = "sv_enemies", Pa = "system", ha = "tilesets", Da = "titles1", va = "titles2", Fa = "System.json", Ha = "Actors.json", xa = "Classes.json", ka = "Skills.json", ba = "Items.json", Ua = "Weapons.json", Ba = "Armors.json", Ga = "Enemies.json", Va = "Troops.json", qa = "States.json", wa = "Animations.json", Wa = "Tilesets.json", Ya = "CommonEvents.json", ja = "MapInfos.json", Ka = "data", Xa = "img", $a = "audio", za = "js", ae = (e, t) => {
  const n = { ...e };
  for (const o in e) {
    const s = t[o];
    typeof s == "string" && (n[o] = s);
  }
  return n;
}, Qa = (e, t) => ({
  domainName: t.domainName ?? e.domainName,
  options: ae(e.options, t.options ?? {})
}), Ja = (e, t) => {
  const n = {};
  for (const o in e) {
    const s = e[o], p = t[o] ?? {};
    n[o] = ae(
      s,
      p
    );
  }
  return n;
}, _ = (e, t) => ({
  name: e,
  id: t
}), Za = (e) => e.variables.map(_), er = (e) => e.elements.map(_), tr = (e) => e.equipTypes.map(_), nr = (e) => e.skillTypes.map(_), or = (e) => e.weaponTypes.map(_), ar = (e) => e.armorTypes.map(_), rr = (e) => e.terms.params.map(_), T = "rmmz", D = "trait", re = "data", ie = "system", ze = 11, Qe = 12, Je = 13, Ze = 14, et = 21, tt = 22, nt = 23, ot = 31, at = 32, rt = 33, it = 34, st = 35, ct = 41, mt = 42, pt = 43, dt = 44, Et = 51, yt = 52, lt = 53, At = 54, _t = 55, Tt = 61, ut = 62, gt = 63, Rt = 64, It = 0, St = 1, Ct = 2, Nt = 3, ft = 0, Ot = 1, Mt = 2, Lt = 3, Pt = 4, ht = 5, Dt = 0, vt = 1, Ft = 2, Ht = 3, se = 0, ce = 1, me = 2, pe = 3, de = 4, Ee = 5, ye = 6, le = 7, Ae = 8, _e = 9, Te = 0, ue = 1, ge = 2, Re = 3, Ie = 4, Se = 5, Ce = 6, Ne = 7, fe = 0, Oe = 1, Me = 2, Le = 3, Pe = 4, he = 5, De = 6, ve = 7, Fe = 8, He = 9, ir = (e, t) => {
  switch (e) {
    case Te:
      return t.maxHp;
    case ue:
      return t.maxMp;
    case ge:
      return t.atk;
    case Re:
      return t.def;
    case Ie:
      return t.matk;
    case Se:
      return t.mdef;
    case Ce:
      return t.agi;
    case Ne:
      return t.luk;
    default:
      return `?rparams[${e}]`;
  }
}, sr = (e, t) => {
  switch (e) {
    case pe:
      return t.criticalEvasionRate;
    case ce:
      return t.evasionRate;
    case ye:
      return t.counterAttackRate;
    case me:
      return t.criticalRate;
    case se:
      return t.hitRate;
    case le:
      return t.hpRegenerationRate;
    case de:
      return t.magicEvasionRate;
    case Ee:
      return t.magicReflectionRate;
    case Ae:
      return t.mpRegenerationRate;
    case _e:
      return t.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, cr = (e, t) => {
  switch (e) {
    case He:
      return t.experienceRate;
    case fe:
      return t.targetRate;
    case Fe:
      return t.floorDamageRate;
    case Oe:
      return t.guradEffectRate;
    case Pe:
      return t.mpCostRate;
    case he:
      return t.tpChargeRate;
    case De:
      return t.physicalDamageRate;
    case ve:
      return t.magicDamageRate;
    case Le:
      return t.pharmacology;
    case Me:
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
  { id: Te, name: e.maxHp },
  { id: ue, name: e.maxMp },
  { id: ge, name: e.atk },
  { id: Re, name: e.def },
  { id: Ie, name: e.matk },
  { id: Se, name: e.mdef },
  { id: Ce, name: e.agi },
  { id: Ne, name: e.luk }
], Ut = (e) => [
  {
    id: se,
    name: e.hitRate
  },
  {
    id: ce,
    name: e.evasionRate
  },
  {
    id: me,
    name: e.criticalRate
  },
  {
    id: pe,
    name: e.criticalEvasionRate
  },
  {
    id: de,
    name: e.magicEvasionRate
  },
  {
    id: Ee,
    name: e.magicReflectionRate
  },
  {
    id: ye,
    name: e.counterAttackRate
  },
  {
    id: le,
    name: e.hpRegenerationRate
  },
  {
    id: Ae,
    name: e.mpRegenerationRate
  },
  {
    id: _e,
    name: e.tpRegenerationRate
  }
], Bt = (e) => [
  {
    id: fe,
    name: e.targetRate
  },
  {
    id: Oe,
    name: e.guradEffectRate
  },
  {
    id: Me,
    name: e.recoveryEffectRate
  },
  {
    id: Le,
    name: e.pharmacology
  },
  {
    id: Pe,
    name: e.mpCostRate
  },
  {
    id: he,
    name: e.tpChargeRate
  },
  {
    id: De,
    name: e.physicalDamageRate
  },
  {
    id: ve,
    name: e.magicDamageRate
  },
  {
    id: Fe,
    name: e.floorDamageRate
  },
  {
    id: He,
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
], R = (e, t, n) => ({
  items: n(t.options),
  label: t.domainName,
  source: {
    author: T,
    module: D,
    kind: e
  }
}), mr = (e, t) => R(
  Ve,
  e,
  (n) => xt(n, t)
), pr = (e) => R(qe, e, kt), dr = (e) => R(C, e, bt), Er = (e) => R(Be, e, Ut), yr = (e) => R(Ge, e, Bt), lr = (e) => R(we, e, Gt), c = "{name}", g = "{name} * {value}%", X = "{name} + {value}%", $ = "{value}", r = {
  domainName: "特徴",
  options: {
    regularParam: {
      domainName: "基本能力値",
      format: g,
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
      format: X,
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
      format: g,
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
      format: g
    },
    debuffRate: {
      domainName: "弱体有効度",
      format: g
    },
    stateRate: {
      domainName: "ステート有効度",
      format: g
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
      format: X
    },
    attackSpeed: {
      domainName: "攻撃速度補正",
      format: $
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: $
    },
    actionPlus: {
      domainName: "行動追加",
      format: g
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
}, z = "{value}", Q = "{name}";
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
      z,
      t.value.toString()
    );
    return this.dataSource ? o.replaceAll(
      Q,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue() {
    return this.format.includes(z);
  }
  requiresName() {
    return this.format.includes(Q);
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
const Ar = (e) => [
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
], J = (e, t) => typeof t == "string" ? t : e, i = (e, t, n, o) => {
  const s = J(t.domainName, n.domainName), p = J(t.format, n.format);
  return new Vt(e, s, p, o);
}, xe = () => ({
  module: ie,
  author: T,
  kind: Bn
}), ke = (e) => ({
  module: re,
  author: T,
  kind: e
}), y = (e) => ({
  author: T,
  module: D,
  kind: e
}), be = (e) => ({
  author: T,
  module: ie,
  kind: e
}), qt = (e) => i(
  ze,
  r.options.elementRate,
  e,
  xe()
), wt = (e) => i(
  Qe,
  r.options.debuffRate,
  e,
  y(C)
), Wt = (e) => i(
  Je,
  r.options.stateRate,
  e,
  y(C)
), Yt = (e) => i(
  Ze,
  r.options.stateResist,
  e,
  ke(N)
), jt = (e) => i(
  et,
  r.options.regularParam,
  e,
  y(C)
), Kt = (e) => i(
  tt,
  r.options.extraParam,
  e,
  y(Be)
), Xt = (e) => i(
  nt,
  r.options.specialParam,
  e,
  y(Ge)
), $t = (e) => i(
  ot,
  r.options.attackElement,
  e,
  xe()
), zt = (e) => i(
  at,
  r.options.attackState,
  e,
  y(N)
), Qt = (e) => i(rt, r.options.attackSpeed, e), Jt = (e) => i(it, r.options.attackTimes, e), Zt = (e) => i(
  st,
  r.options.attackSkill,
  e,
  ke(We)
), en = (e) => i(Tt, r.options.actionPlus, e), tn = (e) => i(
  ut,
  r.options.specialFlag,
  e,
  y(we)
), nn = (e) => i(
  gt,
  r.options.collaps,
  e,
  y(Ve)
), on = (e) => i(
  Rt,
  r.options.partyAbility,
  e,
  y(qe)
), an = (e) => i(
  Et,
  r.options.equipWeaponType,
  e,
  be(bn)
), rn = (e) => i(
  yt,
  r.options.equipArmorType,
  e,
  be(Un)
), sn = (e) => i(lt, r.options.equipLock, e), cn = (e) => i(At, r.options.equipSeal, e), mn = (e) => i(pt, r.options.skillAdd, e), pn = (e) => i(dt, r.options.skillSeal, e), dn = (e) => i(_t, r.options.slotType, e), En = (e) => i(
  ct,
  r.options.skillTypeAdd,
  e
), yn = (e) => i(
  mt,
  r.options.skillTypeSeal,
  e
), _r = "Trait", Tr = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, ur = (e = {}) => ({
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
}, gr = (e) => ({
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
}), Rr = (e = {}) => ({
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
}, Ir = (e = {}) => ({
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
}, Sr = (e = {}) => ({
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
}, Cr = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Nr = (e = {}) => ({
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
}, gn = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), fr = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), Or = (e = {}) => {
  var t;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((t = e.dropItems) == null ? void 0 : t.map(() => gn())) ?? [],
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
}, Mr = (e = {}) => ({
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
}), Lr = (e = {}) => ({
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
}, Pr = 0, hr = 1, Dr = 2, Cn = "{name} + {value1}", Z = "{name} {value1}%", L = "{value1}% + {value2}", ee = "{name} {value1}ターン", S = "{name}", m = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: ee
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: ee
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
      format: Z
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: S
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: Z
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: S
    }
  }
}, Nn = 11, fn = 12, On = 13, Mn = 21, Ln = 22, Pn = 31, hn = 32, Dn = 33, vn = 34, vr = 41, Fn = 42, Hn = 43, xn = 44, Fr = 0, Ue = /^[a-zA-Z0-9]+$/, Hr = (e) => Ue.test(e) ? e : void 0, P = (e) => typeof e == "string" ? Ue.test(e) : !1, xr = (e) => [e.author, e.module, e.kind].join("."), kr = (e) => P(e.author) && P(e.module) && P(e.kind), C = "params", Be = "xparams", Ge = "sparams", Ve = "collaps", qe = "partyAbiility", we = "sflag", br = "actor", Ur = "variables", Br = "map", Gr = "enemy", N = "state", We = "skill", Vr = "items", qr = "weapon", wr = "armor", Wr = "class", kn = "common_event", Yr = "troop", jr = "colors", bn = "weaponTypes", Un = "armorTypes", Kr = "equipTypes", Xr = "switches", $r = "skillTypes", Bn = "elements", te = "{value1}", ne = "{value2}", oe = "{name}";
class Gn {
  constructor(t, n, o, s, p) {
    this.codeId = t, this.label = n, this.format = o, this.description = s, this.dataSource = p;
  }
  formatText(t, n) {
    const o = this.format.replaceAll(te, t.value1.toString()).replaceAll(ne, t.value2.toString());
    return this.dataSource ? o.replaceAll(
      oe,
      n(this.dataSource, t.dataId)
    ) : o;
  }
  requiresValue1() {
    return this.format.includes(te);
  }
  requiresValue2() {
    return this.format.includes(ne);
  }
  requiresName() {
    return this.format.includes(oe);
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
const zr = (e, t, n) => e.format.replaceAll("{value1}", t.value1.toString()).replaceAll("{value2}", t.value2.toString()).replaceAll("{name}", n), Qr = (e) => [
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
  module: re,
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
), wn = (e) => d(On, m.options.gainTp, e), Jr = (e) => d(Fn, m.options.grow, e), Wn = (e) => d(
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
  O(We)
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
), Zr = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, ei = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, ti = {
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
}), ni = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
}, l = new h(), eo = l.compile(Sn), to = l.compile(In), no = l.compile(ln), oo = l.compile(An), ao = l.compile(un), ro = l.compile(Rn), io = l.compile(Tn), so = l.compile(_n), oi = (e) => eo(e), ai = (e) => to(e), ri = (e) => no(e), ii = (e) => oo(e), si = (e) => ao(e), ci = (e) => ro(e), mi = (e) => io(e), pi = (e) => so(e), di = 0, co = 101, F = 401, mo = 102, po = 402, Eo = 103, Ei = 104, yo = 105, H = 405, x = 108, k = 408, yi = 109, li = 111, Ai = 411, _i = 112, Ti = 113, ui = 115, lo = 117, gi = 118, Ri = 119, Ao = 121, Ii = 122, Si = 123, Ci = 124, Ni = 125, fi = 126, Oi = 127, Mi = 128, Li = 129, b = 132, U = 133, Pi = 134, hi = 135, Di = 136, vi = 137, Fi = 138, B = 139, Hi = 140, xi = 201, ki = 202, bi = 203, Ui = 204, Bi = 205, Gi = 206, Vi = 211, qi = 212, wi = 213, Wi = 214, Yi = 216, ji = 217, Ki = 221, Xi = 222, $i = 223, zi = 224, Qi = 225, Ji = 230, Zi = 231, es = 232, ts = 233, ns = 234, os = 235, as = 236, G = 241, rs = 242, is = 243, ss = 244, V = 245, cs = 246, q = 249, w = 250, ms = 251, ps = 261, ds = 282, Es = 283, ys = 284, ls = 285, As = 301, _s = 302, Ts = 605, us = 303, gs = 311, Rs = 312, Is = 313, Ss = 314, Cs = 315, _o = 320, Ns = 321, fs = 322, Os = 323, To = 324, uo = 325, Ms = 331, Ls = 332, Ps = 333, hs = 334, Ds = 335, vs = 336, Fs = 337, Hs = 339, xs = 340, ks = 351, bs = 342, Us = 352, Bs = 353, Gs = 354, W = 355, Y = 655, Vs = 356, qs = 357, ws = 0, Ws = 1, Ys = 2, js = 3, Ks = 4, Xs = 5, $s = 6, zs = 7, Qs = 8, Js = 9, Zs = 10, ec = 11, tc = 12, nc = 13, oc = 14, ac = 15, rc = 16, ic = 17, sc = 18, cc = 19, mc = 20, pc = 21, dc = 22, Ec = 23, yc = 24, lc = 25, Ac = 26, _c = 27, Tc = 28, uc = 29, gc = 30, Rc = 31, Ic = 32, Sc = 33, Cc = 34, Nc = 35, fc = 36, Oc = 37, Mc = 38, Lc = 39, Pc = 40, hc = 41, Dc = 42, vc = 43, Fc = 44, Hc = 45, xc = (e, t, n = 0) => ({
  code: e,
  indent: n,
  parameters: t
}), go = (e = {}) => ({
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
}), kc = () => ({
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
}), bc = () => ({
  conditions: go(),
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
}, So = (e) => e.toString().padStart(3, "0"), Uc = (e = { id: 0 }) => ({
  name: e.name ?? So(e.id),
  id: e.id,
  expanded: e.expanded ?? !1,
  order: e.order ?? 0,
  parentId: e.parentId ?? 0,
  scrollX: e.scrollX ?? 0,
  scrollY: e.scrollY ?? 0
}), Bc = (e = {}) => ({
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
}), Gc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), Vc = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), qc = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), wc = (e = {}) => ({
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
}, Ye = new h(), Lo = Ye.compile(Io), Po = Ye.compile(Mo), Wc = (e) => Lo(e), Yc = (e) => Po(e), jc = (e = {}) => ({
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
}), Kc = {
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
}), Xc = (e) => [
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
], $c = {
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
}, zc = {
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
}, je = (e, t) => `<${e}:${t}>`, M = () => /<([^<>:]+):([^>]*)>/g, Qc = (e, t) => Ke(e.note, (n, o) => t(n, o, e)), Jc = (e) => Ke(e, (t, n) => [t, n]), Ke = (e, t) => {
  const n = M();
  return Array.from(e.matchAll(n), (o) => t(o[1], o[2]));
}, Zc = (e, t) => e.replaceAll(
  M(),
  (n, o, s) => {
    const p = t(o, s);
    return je(o, p);
  }
), em = (e, t) => {
  const n = M(), o = Array.from(e.matchAll(n)).find(
    (s) => s[1] === t
  );
  return o ? o[2] : void 0;
}, tm = (e, t, n) => {
  const o = M();
  return e.replace(o, (s, p) => p === t ? je(p, n) : s);
}, j = (e, t) => `\\${e}[${t}]`, nm = (e, t) => t.map((n, o) => ({
  text: n,
  controlChar: j(e, o)
})), om = (e) => {
  const t = /\\([A-Za-z]+)\[(\d+)]/g;
  return Array.from(e.matchAll(t)).map(
    (n) => ({
      char: n[1],
      id: parseInt(n[2], 10)
    })
  );
}, ho = "N", Do = "V", am = (e) => e.map((t) => ({
  text: t.name,
  controlChar: j(ho, t.id)
})), rm = (e) => e.variables.map((t, n) => ({
  text: t || "",
  controlChar: j(Do, n)
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
}, im = {
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
  required: ["code", "parameters", "indent"],
  properties: {
    code: {
      type: "integer",
      enum: [
        b,
        U,
        B,
        G,
        V,
        q,
        w
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
}, ko = {
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
}, bo = {
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
}, Uo = {
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
}, Bo = {
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
}, Go = {
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
}, Vo = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: {
      type: "integer",
      enum: [
        x,
        k,
        W,
        Y,
        F,
        H
      ]
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
}, qo = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 0, maxItems: 0 },
    code: {
      type: "integer",
      enum: [
        0,
        109,
        112,
        113,
        115,
        204,
        206,
        213,
        214,
        216,
        217,
        221,
        222,
        243,
        244,
        251,
        314,
        315,
        340,
        351,
        352,
        353,
        354,
        411
      ]
    }
  },
  additionalProperties: !1
}, E = new h(), wo = E.compile(Bo), Wo = E.compile(Ho), Yo = E.compile(Go), jo = E.compile(ko), Ko = E.compile(Fo), Xo = E.compile(bo), $o = E.compile(Vo), zo = E.compile(xo), Qo = E.compile(Uo), Jo = E.compile(qo), sm = (e) => Jo(e), cm = (e) => wo(e), mm = (e) => Qo(e), I = (e) => $o(e), u = (e) => zo(e), pm = (e) => Yo(e), dm = (e) => Xo(e), Em = (e) => jo(e), ym = (e) => Wo(e), lm = (e) => Ko(e), Am = (e) => I(e) && e.code === F, _m = (e) => I(e) && e.code === H, Tm = (e) => I(e) && e.code === x, um = (e) => I(e) && e.code === k, gm = (e) => I(e) && e.code === W, Rm = (e) => I(e) && e.code === Y, Im = (e, t = 0) => ({
  code: _o,
  parameters: [e.actorId, e.name],
  indent: t
}), Sm = (e, t = 0) => ({
  code: To,
  parameters: [e.actorId, e.nickname],
  indent: t
}), Cm = (e, t = 0) => ({
  code: uo,
  parameters: [e.actorId, e.profile],
  indent: t
}), Nm = (e, t) => A(e, a({ name: t })), A = (e, t, n = 0) => ({
  code: e,
  parameters: [a(t)],
  indent: n
}), fm = (e, t = 0) => A(G, e, t), Om = (e, t = 0) => A(V, e, t), Mm = (e, t = 0) => A(q, e, t), Lm = (e, t = 0) => A(w, e, t), Pm = (e, t = 0) => A(b, e, t), hm = (e, t = 0) => A(U, e, t), Dm = (e, t = 0) => A(B, e, t), Xe = (e) => [e], vm = (e) => ({
  comment: e[0]
}), Zo = (e, t = 0) => ({
  code: x,
  indent: t,
  parameters: Xe(e)
}), ea = (e, t = 0) => ({
  code: k,
  indent: t,
  parameters: Xe(e)
}), Fm = (e, t = 0) => e.map(
  (n, o) => o === 0 ? Zo(n, t) : ea(n, t)
), ta = (e) => [e.variableId ?? 0, e.digits ?? 0], Hm = (e) => ({
  variableId: e[0],
  digits: e[1]
}), xm = (e, t = 0) => ({
  code: Eo,
  indent: t,
  parameters: ta(e ?? {})
}), na = (e = {}) => [(e == null ? void 0 : e.speed) ?? 4, (e == null ? void 0 : e.skip) ?? !1], km = (e) => ({
  speed: e[0],
  skip: e[1]
}), bm = (e = {}, t = 0) => ({
  code: yo,
  indent: t,
  parameters: na(e)
}), oa = (e = "") => [e], Um = (e) => ({
  content: e[0]
}), Bm = (e = "", t = 0) => ({
  code: H,
  indent: t ?? 0,
  parameters: oa(e)
}), Gm = (e, t = 0) => ({
  code: po,
  indent: t,
  parameters: [(e == null ? void 0 : e.index) ?? 0, (e == null ? void 0 : e.name) ?? ""]
}), Vm = (e) => ({
  index: e[0],
  name: e[1]
}), qm = (e) => [e.index ?? 0, e.name ?? ""], wm = (e) => ({
  choices: e[0],
  cancelType: e[1],
  defaultType: e[2],
  positionType: e[3],
  background: e[4]
}), Wm = (e) => [
  e.choices ?? [],
  e.cancelType ?? 0,
  e.defaultType ?? 0,
  e.positionType ?? 2,
  e.background ?? 0
], Ym = (e, t = 0) => ({
  code: mo,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.choices) ?? [],
    (e == null ? void 0 : e.cancelType) ?? 0,
    (e == null ? void 0 : e.defaultType) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.background) ?? 0
  ]
}), jm = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: [
    [...e.parameters[0]],
    e.parameters[1],
    e.parameters[2],
    e.parameters[3],
    e.parameters[4]
  ]
}), Km = (e, t = 0) => ({
  code: co,
  indent: t,
  parameters: [
    (e == null ? void 0 : e.facename) ?? "",
    (e == null ? void 0 : e.faceIndex) ?? 0,
    (e == null ? void 0 : e.background) ?? 0,
    (e == null ? void 0 : e.positionType) ?? 2,
    (e == null ? void 0 : e.speakerName) ?? ""
  ]
}), Xm = (e) => ({
  facename: e[0],
  faceIndex: e[1],
  background: e[2],
  positionType: e[3],
  speakerName: e[4]
}), $m = (e) => [
  e.facename,
  e.faceIndex,
  e.background,
  e.positionType,
  e.speakerName
], zm = (e, t = 0) => ({
  code: F,
  indent: t,
  parameters: [e]
}), aa = (e, t = 0) => ({
  code: W,
  indent: t,
  parameters: [e]
}), ra = (e, t = 0) => ({
  code: Y,
  indent: t,
  parameters: [e]
}), Qm = (e, t = 0) => e.map(
  (n, o) => o === 0 ? aa(n, t) : ra(n, t)
), ia = 0, sa = 1, ca = 2, K = 3, ma = 4, Jm = (e, t) => {
  switch (t[6]) {
    case 0:
      return e.hp;
    case 1:
      return e.mp;
    case 10:
      return e.tp;
  }
  return t[6] >= 2 && t[6] <= 9 ? e.param(t[6] - 2) : 0;
}, Zm = (e, t) => {
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
}, pa = {
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
}, ep = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  ia,
  t.value
], tp = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  sa,
  t.variableId
], np = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  ca,
  t.min,
  t.max
], op = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  ma,
  t.code
], ap = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  K,
  t.type,
  t.itemId
], rp = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  K,
  3,
  t.index,
  t.param
], ip = (e, t, n = 0) => [
  e.startId,
  e.endId ?? e.startId,
  n,
  K,
  4,
  t.index,
  pa[t.param]
], sp = (e) => ({
  min: e[0],
  max: e[1],
  value: e[2]
}), da = (e) => [e.min, e.max, e.value], cp = (e, t = 0) => ({
  code: Ao,
  indent: t,
  parameters: da(e)
}), mp = (e, t = 0) => ({
  code: lo,
  indent: t,
  parameters: Ea(e ?? {})
}), pp = (e) => ({
  eventId: e[0]
}), Ea = (e) => [e.eventId ?? 0], dp = (e) => u(e) && e.code === G, Ep = (e) => u(e) && e.code === V, yp = (e) => u(e) && e.code === q, lp = (e) => u(e) && e.code === w, Ap = (e) => u(e) && e.code === b, _p = (e) => u(e) && e.code === U, Tp = (e) => u(e) && e.code === B, ya = (e) => [...e], up = (e) => ({
  code: e.code,
  indent: e.indent,
  parameters: ya(e.parameters)
}), la = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean", gp = (e) => e.parameters.every(la);
export {
  xs as ABORT_BATTLE,
  T as AUTHOR_RMMZ,
  As as BATTLE_PROCESSING,
  fs as CHANGE_ACTOR_IMAGES,
  Mi as CHANGE_ARMORS,
  Es as CHANGE_BATTLE_BACKGROUND,
  b as CHANGE_BATTLE_BGM,
  Ns as CHANGE_CLASS,
  B as CHANGE_DEFEAT_ME,
  Di as CHANGE_ENCOUNTER,
  Ms as CHANGE_ENEMY_HP,
  Ls as CHANGE_ENEMY_MP,
  Ps as CHANGE_ENEMY_STATE,
  bs as CHANGE_ENEMY_TP,
  Cs as CHANGE_EXP,
  vi as CHANGE_FORMATION_ACCESS,
  Ni as CHANGE_GOLD,
  gs as CHANGE_HP,
  fi as CHANGE_ITEMS,
  hi as CHANGE_MENU_ACCESS,
  Rs as CHANGE_MP,
  _o as CHANGE_NAME,
  To as CHANGE_NICKNAME,
  ys as CHANGE_PARALLAX,
  Li as CHANGE_PARTY_MEMBER,
  Yi as CHANGE_PLAYER_FOLLOWERS,
  uo as CHANGE_PROFILE,
  Pi as CHANGE_SAVE_ACCESS,
  ds as CHANGE_TILESET,
  Is as CHANGE_TP,
  Vi as CHANGE_TRANSPARENCY,
  Hi as CHANGE_VEHICLE_BGM,
  Os as CHANGE_VEHICLE_IMAGE,
  U as CHANGE_VICTORY_ME,
  Oi as CHANGE_WEAPONS,
  Fi as CHANGE_WINDOW_COLOR,
  St as COLLAPS_BOSS,
  Ct as COLLAPS_INSTANT,
  Nt as COLLAPS_NONE,
  It as COLLAPS_NORMAL,
  k as COMMENT_BODY,
  x as COMMENT_HEAD,
  lo as COMMON_EVENT,
  li as CONDITIONAL_BRANCH,
  Ai as CONDITIONAL_BRANCH_ELSE,
  Si as CONTROL_SELF_SWITCH,
  Ao as CONTROL_SWITCHES,
  Ci as CONTROL_TIMER,
  Ii as CONTROL_VARIABLES,
  Zn as DEFAULT_DAMAGE_LABELS,
  vo as DEFAULT_GLOBAL_LABELS,
  Zr as DEFAULT_ITEM_LABELS,
  ei as DEFAULT_SKILL_LABELS,
  $c as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  ti as DEFAULT_USABLE_ITEM_LABELS,
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
  vr as EFFECT_SPECIAL,
  Ds as ENEMY_APPEAR,
  hs as ENEMY_RECOVER_ALL,
  vs as ENEMY_TRANSFORM,
  Wi as ERASE_EVENT,
  os as ERASE_PICTURE,
  ui as EXIT_EVENT_PROCESSING,
  pe as EXTRA_PARAM_CEV,
  ye as EXTRA_PARAM_CNT,
  me as EXTRA_PARAM_CRI,
  ce as EXTRA_PARAM_EVA,
  se as EXTRA_PARAM_HIT,
  le as EXTRA_PARAM_HRG,
  de as EXTRA_PARAM_MEV,
  Ee as EXTRA_PARAM_MRF,
  Ae as EXTRA_PARAM_MRG,
  _e as EXTRA_PARAM_TRG,
  Xi as FADEIN_SCREEN,
  rs as FADEOUT_BGM,
  cs as FADEOUT_BGS,
  Ki as FADEOUT_SCREEN,
  Ha as FILENAME_ACTORS,
  wa as FILENAME_ANIMATIONS,
  Ba as FILENAME_ARMORS,
  xa as FILENAME_CLASSES,
  Ya as FILENAME_COMMON_EVENTS,
  Ga as FILENAME_ENEMIES,
  ba as FILENAME_ITEMS,
  ja as FILENAME_MAP_INFOS,
  ka as FILENAME_SKILLS,
  qa as FILENAME_STATES,
  Fa as FILENAME_SYSTEM,
  Wa as FILENAME_TILESET,
  Va as FILENAME_TROOPS,
  Ua as FILENAME_WEAPONS,
  Dt as FLAG_ID_AUTO_BATTLE,
  vt as FLAG_ID_GUARD,
  Ht as FLAG_ID_PRESERVE_TP,
  Ft as FLAG_ID_SUBSTITUTE,
  zi as FLASH_SCREEN,
  $a as FOLDER_AUDIO,
  _a as FOLDER_AUDIO_BGM,
  ga as FOLDER_AUDIO_BGS,
  ua as FOLDER_AUDIO_ME,
  Ta as FOLDER_AUDIO_SE,
  Ka as FOLDER_DATA,
  Xa as FOLDER_IMG,
  Ra as FOLDER_IMG_BATTLEBACK1,
  Ia as FOLDER_IMG_BATTLEBACK2,
  Sa as FOLDER_IMG_CHACTERS,
  Ca as FOLDER_IMG_ENEMIES,
  Na as FOLDER_IMG_FACES,
  fa as FOLDER_IMG_PARALLACES,
  Oa as FOLDER_IMG_PICTURES,
  Ma as FOLDER_IMG_SV_ACTORS,
  La as FOLDER_IMG_SV_ENEMIES,
  Pa as FOLDER_IMG_SYSTEM,
  ha as FOLDER_IMG_TILESETS,
  Da as FOLDER_IMG_TITLES1,
  va as FOLDER_IMG_TITLES2,
  za as FOLDER_JS,
  Hs as FORCE_ACTION,
  Bs as GAME_OVER,
  ji as GATHER_FOLLOWERS,
  ls as GET_LOCATION_INFO,
  Gi as GET_ONOFF_VEHICLE,
  Pr as HITTYPE_CERTAIN,
  Dr as HITTYPE_MAGICAL,
  hr as HITTYPE_PHYSICAL,
  Eo as INPUT_NUMBER,
  gi as LABEL,
  Cr as LABELS_DATA_WEAPON,
  Ri as LABEL_JUMP,
  im as LABEL_REGISTRY_JP,
  Jn as LABEL_SET_DATA,
  m as LABEL_SET_ITEM_EFFECT,
  r as LABEL_SET_TRAIT,
  _i as LOOP,
  Ti as LOOP_BREAK,
  re as MODULE_DATA,
  ie as MODULE_SYSTEM,
  D as MODULE_TRAIT,
  es as MOVE_PICTURE,
  zc as MockSystemLabelDataTypes,
  us as NAME_INPUT_PROCESSING,
  di as NO_OPERATION,
  ks as OPEN_MENU_SCREEN,
  Us as OPEN_SAVE_SCREEN,
  ia as OPERAND_CONSTANT,
  K as OPERAND_GAMEDATA,
  ca as OPERAND_RANDOM,
  ma as OPERAND_SCRIPT,
  sa as OPERAND_VARIABLE,
  Mt as PARTY_ABILITY_CANCEL_SURPRISE,
  ht as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  ft as PARTY_ABILITY_ENCOUNTER_HALF,
  Ot as PARTY_ABILITY_ENCOUNTER_NONE,
  Pt as PARTY_ABILITY_GOLD_DOUBLE,
  Lt as PARTY_ABILITY_RAISE_PREEMPTIVE,
  G as PLAY_BGM,
  V as PLAY_BGS,
  q as PLAY_ME,
  ps as PLAY_MOVIE,
  w as PLAY_SE,
  Vs as PLUGIN_COMMAND_MV,
  qs as PLUGIN_COMMAND_MZ,
  Ss as RECOVER_ALL,
  Ce as REGULAR_PARAM_AGI,
  ge as REGULAR_PARAM_ATK,
  Re as REGULAR_PARAM_DEF,
  Ne as REGULAR_PARAM_LUK,
  Ie as REGULAR_PARAM_MATK,
  Te as REGULAR_PARAM_MAX_HP,
  ue as REGULAR_PARAM_MAX_MP,
  Se as REGULAR_PARAM_MDEF,
  ss as RESUME_BGM,
  Gs as RETURN_TO_TITLE_SCREEN,
  ts as ROTATE_PICTURE,
  vc as ROUTE_CHANGE_BLEND_MODE,
  gc as ROUTE_CHANGE_FREQ,
  hc as ROUTE_CHANGE_IMAGE,
  Dc as ROUTE_CHANGE_OPACITY,
  uc as ROUTE_CHANGE_SPEED,
  fc as ROUTE_DIR_FIX_OFF,
  Nc as ROUTE_DIR_FIX_ON,
  ws as ROUTE_END,
  oc as ROUTE_JUMP,
  ec as ROUTE_MOVE_AWAY,
  nc as ROUTE_MOVE_BACKWARD,
  Ws as ROUTE_MOVE_DOWN,
  tc as ROUTE_MOVE_FORWARD,
  Ys as ROUTE_MOVE_LEFT,
  Xs as ROUTE_MOVE_LOWER_L,
  $s as ROUTE_MOVE_LOWER_R,
  Js as ROUTE_MOVE_RANDOM,
  js as ROUTE_MOVE_RIGHT,
  Zs as ROUTE_MOVE_TOWARD,
  Ks as ROUTE_MOVE_UP,
  zs as ROUTE_MOVE_UPPER_L,
  Qs as ROUTE_MOVE_UPPER_R,
  Fc as ROUTE_PLAY_SE,
  Hc as ROUTE_SCRIPT,
  Cc as ROUTE_STEP_ANIME_OFF,
  Sc as ROUTE_STEP_ANIME_ON,
  Tc as ROUTE_SWITCH_OFF,
  _c as ROUTE_SWITCH_ON,
  Mc as ROUTE_THROUGH_OFF,
  Oc as ROUTE_THROUGH_ON,
  Pc as ROUTE_TRANSPARENT_OFF,
  Lc as ROUTE_TRANSPARENT_ON,
  dc as ROUTE_TURN_180D,
  pc as ROUTE_TURN_90D_L,
  mc as ROUTE_TURN_90D_R,
  Ec as ROUTE_TURN_90D_R_L,
  Ac as ROUTE_TURN_AWAY,
  rc as ROUTE_TURN_DOWN,
  ic as ROUTE_TURN_LEFT,
  yc as ROUTE_TURN_RANDOM,
  sc as ROUTE_TURN_RIGHT,
  lc as ROUTE_TURN_TOWARD,
  cc as ROUTE_TURN_UP,
  ac as ROUTE_WAIT,
  Ic as ROUTE_WALK_ANIME_OFF,
  Rc as ROUTE_WALK_ANIME_ON,
  is as SAVE_BGM,
  ni as SCHEMA_DAMAGE,
  ln as SCHEMA_DATA_ACTOR,
  An as SCHEMA_DATA_ARMMOR,
  _n as SCHEMA_DATA_CLASS,
  Rn as SCHEMA_DATA_ENEMY,
  Sn as SCHEMA_DATA_ITEM,
  Io as SCHEMA_DATA_MAP_INFO,
  In as SCHEMA_DATA_SKILL,
  Tn as SCHEMA_DATA_STATE,
  un as SCHEMA_DATA_WEAPON,
  Kc as SCHEMA_SYSTEM_ADVANCED,
  Tr as SCHEMA_TRAIT,
  W as SCRIPT_EVAL,
  Y as SCRIPT_EVAL_BODY,
  Ui as SCROLL_MAP,
  Ei as SELECT_ITEM,
  bi as SET_EVENT_LOCATION,
  Bi as SET_MOVEMENT_ROUTE,
  ki as SET_VEHICLE_LOCATION,
  as as SET_WEATHER_EFFECT,
  Qi as SHAKE_SCREEN,
  _s as SHOP_PROCESSING,
  Ts as SHOP_PROCESSING_BODY,
  qi as SHOW_ANIMATION,
  wi as SHOW_BALLOON_ICON,
  Fs as SHOW_BATTLE_ANIMATION,
  mo as SHOW_CHOICES,
  po as SHOW_CHOICES_ITEM,
  co as SHOW_MESSAGE,
  F as SHOW_MESSAGE_BODY,
  Zi as SHOW_PICTURE,
  yo as SHOW_SCROLLING_TEXT,
  H as SHOW_SCROLLING_TEXT_BODY,
  yi as SKIP,
  Fr as SPECIAL_EFFECT_ESCAPE,
  He as SPECIAL_PARAM_EXR,
  Fe as SPECIAL_PARAM_FDR,
  Oe as SPECIAL_PARAM_GRD,
  Pe as SPECIAL_PARAM_MCR,
  ve as SPECIAL_PARAM_MDR,
  De as SPECIAL_PARAM_PDR,
  Le as SPECIAL_PARAM_PHA,
  Me as SPECIAL_PARAM_REC,
  he as SPECIAL_PARAM_TCR,
  fe as SPECIAL_PARAM_TGR,
  Un as SRC_ARMOR_TYPES,
  jr as SRC_COLOR,
  br as SRC_DATA_ACTOR,
  wr as SRC_DATA_ARMOR,
  Wr as SRC_DATA_CLASS,
  kn as SRC_DATA_COMMON_EVNET,
  Gr as SRC_DATA_ENEMY,
  Vr as SRC_DATA_ITEMS,
  Br as SRC_DATA_MAP,
  We as SRC_DATA_SKILL,
  N as SRC_DATA_STATE,
  Yr as SRC_DATA_TROOP,
  Ur as SRC_DATA_VARIABLE,
  qr as SRC_DATA_WEAPON,
  Bn as SRC_ELEMENTS,
  Kr as SRC_EQUIP_TYPES,
  Be as SRC_PARAMS_EXTRA,
  C as SRC_PARAMS_REGULAR,
  Ge as SRC_PARAMS_SPECIAL,
  $r as SRC_SKILL_TYPES,
  Xr as SRC_SWITCHES,
  Ve as SRC_TRAIT_COLLAPS,
  qe as SRC_TRAIT_PARTY_ABILITY,
  we as SRC_TRAIT_SPECIAL_FLAG,
  bn as SRC_WEAPON_TYPES,
  ms as STOP_SE,
  ns as TINT_PICTURE,
  $i as TINT_SCREEN,
  Tt as TRAIT_ACTION_PLUS,
  ot as TRAIT_ATTACK_ELEMENT,
  st as TRAIT_ATTACK_SKILL,
  rt as TRAIT_ATTACK_SPEED,
  at as TRAIT_ATTACK_STATE,
  it as TRAIT_ATTACK_TIMES,
  gt as TRAIT_COLLAPSE_TYPE,
  Qe as TRAIT_DEBUFF_RATE,
  ze as TRAIT_ELEMENT_RATE,
  yt as TRAIT_EQUIP_ARMOR_TYPE,
  lt as TRAIT_EQUIP_LOCK,
  At as TRAIT_EQUIP_SEAL,
  Et as TRAIT_EQUIP_WEAPON_TYPE,
  et as TRAIT_PARAM,
  Rt as TRAIT_PARTY_ABILITY,
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
  xi as TRANSFER_PLAYER,
  _r as TYPENAME_TRAIT,
  Vt as TraitDescriptor,
  Ji as WAIT,
  mr as buildCollapsSource,
  Er as buildExtraParamSource,
  pr as buildPartyAbilitySource,
  dr as buildRegularParamSource,
  lr as buildSpecialFlagSource,
  yr as buildSpecialParamSource,
  jm as cloneChoices,
  up as cloneEventCommand,
  ya as cloneParameters,
  vm as convertCommentArrayToObject,
  am as createActorControlChars,
  j as createControlCharFormat,
  xc as createEventCommand,
  je as createNoteEntity,
  rm as createSystemVariableControlChars,
  jn as defineEffectAddBuff,
  $n as defineEffectAddDebuff,
  Wn as defineEffectAddState,
  Qn as defineEffectCommonEvent,
  wn as defineEffectGainTp,
  Jr as defineEffectGrow,
  Xn as defineEffectLearnSkill,
  Vn as defineEffectRecoverHp,
  qn as defineEffectRecoverMp,
  Kn as defineEffectRemoveBuff,
  zn as defineEffectRemoveDebuff,
  Yn as defineEffectRemoveState,
  sr as extraParamName,
  xt as foldCollapsOptions,
  Ut as foldExtraParam,
  kt as foldPartyAbilityOptions,
  bt as foldRegularParam,
  Gt as foldSpecialFlag,
  Bt as foldSpecialParams,
  zr as formatItemEffectText,
  pp as fromArrayCommonEvent,
  sp as fromArrayControlSwitches,
  Hm as fromArrayInputNumber,
  Um as fromArrayScrollingTextBody,
  km as fromArrayScrollingTextHeader,
  wm as fromArraySetupChoice,
  Vm as fromArraySetupChoiceItem,
  Xm as fromArrayShowMessageHeader,
  nm as fromStringArray,
  Zm as getActorValue,
  ar as getArmorTypes,
  om as getControlChars,
  er as getElementTypes,
  Jm as getEnemyValue,
  tr as getEquipTypes,
  em as getNoteValue,
  rr as getParamNames,
  nr as getSkillTypes,
  Za as getVariableNames,
  or as getWeaponTypes,
  gp as isCloneableCommand,
  u as isCommandAudio,
  cm as isCommandChangeActorText,
  Ap as isCommandChangeBattleBgm,
  Tp as isCommandChangeDefeatMe,
  _p as isCommandChangeVictoryMe,
  um as isCommandCommentBody,
  Tm as isCommandCommentHeader,
  pm as isCommandCommonEvent,
  ym as isCommandInputNumber,
  sm as isCommandNonParam,
  dp as isCommandPlayBgm,
  Ep as isCommandPlayBgs,
  yp as isCommandPlayMe,
  lp as isCommandPlaySe,
  Rm as isCommandScriptBody,
  gm as isCommandScriptHeader,
  mm as isCommandScrollTextHead,
  Em as isCommandShowChoiceItem,
  dm as isCommandShowChoices,
  lm as isCommandShowMessage,
  Am as isCommandShowMessageBody,
  _m as isCommandShowScrollingTextBody,
  I as isCommandTextBody,
  ri as isDataActor,
  ii as isDataArmor,
  pi as isDataClass,
  ci as isDataEnemy,
  oi as isDataItem,
  Yc as isDataMap,
  Wc as isDataMapInfo,
  ai as isDataSkill,
  mi as isDataState,
  si as isDataWeapon,
  kr as isValid,
  xr as joinSourceKey,
  ur as makeActorData,
  Rr as makeArmorData,
  Nm as makeAudioCommand,
  a as makeAudioFileParams,
  Ir as makeClassData,
  A as makeCommandAudioAny,
  Im as makeCommandChangeActorName,
  Sm as makeCommandChangeActorNickName,
  Cm as makeCommandChangeActorProfile,
  Pm as makeCommandChangeBattleBGM,
  Dm as makeCommandChangeDefeatME,
  hm as makeCommandChangeVictoryME,
  ea as makeCommandCommentBody,
  Zo as makeCommandCommentHeader,
  mp as makeCommandCommonEvent,
  cp as makeCommandControlSwitches,
  xm as makeCommandInputNumber,
  fm as makeCommandPlayBGM,
  Om as makeCommandPlayBGS,
  Mm as makeCommandPlayME,
  Lm as makeCommandPlaySE,
  Qm as makeCommandScriptArray,
  ra as makeCommandScriptBody,
  aa as makeCommandScriptHeader,
  Bm as makeCommandScrollingTextBody,
  bm as makeCommandScrollingTextHeader,
  Ym as makeCommandSetupChoice,
  Gm as makeCommandShowChoiceItem,
  Km as makeCommandShowMessage,
  zm as makeCommandShowMessageBody,
  Xe as makeCommentArray,
  Fm as makeCommentCommandArray,
  Gc as makeCommonEventData,
  v as makeDamage,
  gn as makeDropItem,
  fr as makeEnemyAction,
  Or as makeEnemyData,
  go as makeEventPageCondition,
  Mr as makeItemData,
  Bc as makeMapData,
  kc as makeMapEvent,
  Ro as makeMapEventIamge,
  bc as makeMapEventPage,
  Uc as makeMapInfoData,
  M as makeRegex,
  Lr as makeSkillData,
  Xc as makeSoundsArray,
  Sr as makeStateData,
  jc as makeSystemAdvanced,
  Vc as makeTroopData,
  wc as makeTroopEventConditions,
  qc as makeTroopMember,
  Nr as makeWeaponData,
  Qa as mergeDomainLabel,
  Ja as mergeNestedPrimitiveRecords,
  ae as mergeWithDefaults,
  gr as normalizeDataActor,
  Jc as readNote,
  Ke as readNoteEx,
  Qc as readNoteObject,
  ir as regularParamName,
  Zc as replaceNote,
  Qr as resolveItemEffectLabels,
  Ar as resolveTraitLabels,
  Hr as sanitizeKey,
  tm as setNoteValue,
  cr as specialParamName,
  P as testUnknonwKey,
  Ea as toArrayCommonEvent,
  da as toArrayControlSwitches,
  ta as toArrayInputNumber,
  rp as toArrayOperandActorStatus,
  ep as toArrayOperandConstant,
  ip as toArrayOperandEnemyStatus,
  ap as toArrayOperandItemData,
  np as toArrayOperandRandom,
  op as toArrayOperandScript,
  tp as toArrayOperandVariable,
  oa as toArrayScrollingTextBody,
  na as toArrayScrollingTextHeader,
  Wm as toArraySetupChoice,
  qm as toArraySetupChoiceItem,
  $m as toArrayShowMessageHeader,
  R as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
