const Mo = "bgm", Lo = "se", Do = "me", ko = "bgs", jo = "battlebacks1", qo = "battlebacks2", Uo = "characters", Fo = "enemies", Vo = "faces", Go = "parallaxes", Ho = "pictures", Ko = "sv_actors", Bo = "sv_enemies", zo = "system", Yo = "tilesets", Wo = "titles1", Xo = "titles2", Jo = "System.json", xo = "Actors.json", Qo = "Classes.json", Zo = "Skills.json", ei = "Items.json", ti = "Weapons.json", ri = "Armors.json", ni = "Enemies.json", si = "Troops.json", ai = "States.json", oi = "Animations.json", ii = "Tilesets.json", ci = "CommonEvents.json", ui = "MapInfos.json", di = "data", li = "img", fi = "audio", mi = "js", On = (e, r) => {
  const y = { ...e };
  for (const c in e) {
    const E = r[c];
    typeof E == "string" && (y[c] = E);
  }
  return y;
}, pi = (e, r) => ({
  domainName: r.domainName ?? e.domainName,
  options: On(e.options, r.options ?? {})
}), hi = (e, r) => {
  const y = {};
  for (const c in e) {
    const E = e[c], o = r[c] ?? {};
    y[c] = On(
      E,
      o
    );
  }
  return y;
}, Oe = (e, r) => ({
  name: e,
  id: r
}), _i = (e) => e.variables.map(Oe), yi = (e) => e.elements.map(Oe), Ei = (e) => e.equipTypes.map(Oe), gi = (e) => e.skillTypes.map(Oe), vi = (e) => e.weaponTypes.map(Oe), Ai = (e) => e.armorTypes.map(Oe), Ri = (e) => e.terms.params.map(Oe), we = "rmmz", xt = "trait", wn = "data", bn = "system", Ti = 11, $i = 12, Si = 13, Pi = 14, Ii = 21, Ni = 22, Oi = 23, wi = 31, bi = 32, Ci = 33, Mi = 34, Li = 35, Di = 41, ki = 42, ji = 43, qi = 44, Ui = 51, Fi = 52, Vi = 53, Gi = 54, Hi = 55, Ki = 61, Bi = 62, zi = 63, Yi = 64, Wi = 0, Xi = 1, Ji = 2, xi = 3, Qi = 0, Zi = 1, ec = 2, tc = 3, rc = 4, nc = 5, sc = 0, ac = 1, oc = 2, ic = 3, cc = 0, uc = 1, dc = 2, lc = 3, fc = 4, mc = 5, pc = 6, hc = 7, _c = 8, yc = 9, Ec = 0, gc = 1, vc = 2, Ac = 3, Rc = 4, Tc = 5, $c = 6, Sc = 7, Pc = 0, Ic = 1, Nc = 2, Oc = 3, wc = 4, bc = 5, Cc = 6, Mc = 7, Lc = 8, Dc = 9, kc = (e, r) => {
  switch (e) {
    case 0:
      return r.maxHp;
    case 1:
      return r.maxMp;
    case 2:
      return r.atk;
    case 3:
      return r.def;
    case 4:
      return r.matk;
    case 5:
      return r.mdef;
    case 6:
      return r.agi;
    case 7:
      return r.luk;
    default:
      return `?rparams[${e}]`;
  }
}, jc = (e, r) => {
  switch (e) {
    case 3:
      return r.criticalEvasionRate;
    case 1:
      return r.evasionRate;
    case 6:
      return r.counterAttackRate;
    case 2:
      return r.criticalRate;
    case 0:
      return r.hitRate;
    case 7:
      return r.hpRegenerationRate;
    case 4:
      return r.magicEvasionRate;
    case 5:
      return r.magicReflectionRate;
    case 8:
      return r.mpRegenerationRate;
    case 9:
      return r.tpRegenerationRate;
  }
  return `?xparams[${e}]`;
}, qc = (e, r) => {
  switch (e) {
    case 9:
      return r.experienceRate;
    case 0:
      return r.targetRate;
    case 8:
      return r.floorDamageRate;
    case 1:
      return r.guradEffectRate;
    case 4:
      return r.mpCostRate;
    case 5:
      return r.tpChargeRate;
    case 6:
      return r.physicalDamageRate;
    case 7:
      return r.magicDamageRate;
    case 3:
      return r.pharmacology;
    case 2:
      return r.recoveryEffectRate;
  }
  return `?sparams[${e}]`;
}, Xn = (e, r) => [
  {
    id: 0,
    name: r.normal
  },
  {
    id: 1,
    name: e.bossCollaps
  },
  {
    id: 2,
    name: e.instantCollaps
  },
  {
    id: 3,
    name: e.noneCollaps
  }
], Jn = (e) => [
  {
    id: 0,
    name: e.encounterHalf
  },
  {
    id: 1,
    name: e.encounterNone
  },
  {
    id: 2,
    name: e.cancelSurprise
  },
  {
    id: 3,
    name: e.raisePreemptive
  },
  {
    id: 4,
    name: e.goldDouble
  },
  {
    id: 5,
    name: e.dropItemDouble
  }
], xn = (e) => [
  { id: 0, name: e.maxHp },
  { id: 1, name: e.maxMp },
  { id: 2, name: e.atk },
  { id: 3, name: e.def },
  { id: 4, name: e.matk },
  { id: 5, name: e.mdef },
  { id: 6, name: e.agi },
  { id: 7, name: e.luk }
], Qn = (e) => [
  {
    id: 0,
    name: e.hitRate
  },
  {
    id: 1,
    name: e.evasionRate
  },
  {
    id: 2,
    name: e.criticalRate
  },
  {
    id: 3,
    name: e.criticalEvasionRate
  },
  {
    id: 4,
    name: e.magicEvasionRate
  },
  {
    id: 5,
    name: e.magicReflectionRate
  },
  {
    id: 6,
    name: e.counterAttackRate
  },
  {
    id: 7,
    name: e.hpRegenerationRate
  },
  {
    id: 8,
    name: e.mpRegenerationRate
  },
  {
    id: 9,
    name: e.tpRegenerationRate
  }
], Zn = (e) => [
  {
    id: 0,
    name: e.targetRate
  },
  {
    id: 1,
    name: e.guradEffectRate
  },
  {
    id: 2,
    name: e.recoveryEffectRate
  },
  {
    id: 3,
    name: e.pharmacology
  },
  {
    id: 4,
    name: e.mpCostRate
  },
  {
    id: 5,
    name: e.tpChargeRate
  },
  {
    id: 6,
    name: e.physicalDamageRate
  },
  {
    id: 7,
    name: e.magicDamageRate
  },
  {
    id: 8,
    name: e.floorDamageRate
  },
  {
    id: 9,
    name: e.experienceRate
  }
], es = (e) => [
  {
    id: 0,
    name: e.autoBattle
  },
  {
    id: 1,
    name: e.guard
  },
  {
    id: 2,
    name: e.substitute
  },
  {
    id: 3,
    name: e.preventEscape
  }
], De = (e, r, y) => ({
  items: y(r.options),
  label: r.domainName,
  source: {
    author: we,
    module: xt,
    kind: e
  }
}), Uc = (e, r) => De(
  qn,
  e,
  (y) => Xn(y, r)
), Fc = (e) => De(Un, e, Jn), Vc = (e) => De(Ve, e, xn), Gc = (e) => De(kn, e, Qn), Hc = (e) => De(jn, e, Zn), Kc = (e) => De(Fn, e, es), ae = "{name}", Ce = "{name} * {value}%", sr = "{name} + {value}%", ar = "{value}", Z = {
  domainName: "特徴",
  options: {
    regularParam: {
      domainName: "基本能力値",
      format: Ce,
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
      format: sr,
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
      format: Ce,
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
      format: ae,
      options: {
        autoBattle: "自動戦闘",
        guard: "防御",
        substitute: "身代わり",
        preventEscape: "逃走防止"
      }
    },
    collaps: {
      domainName: "消滅エフェクト",
      format: ae,
      options: {
        bossCollaps: "ボス崩壊",
        instantCollaps: "即時崩壊",
        noneCollaps: "崩壊なし"
      }
    },
    partyAbility: {
      domainName: "パーティ能力",
      format: ae,
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
      format: Ce
    },
    debuffRate: {
      domainName: "弱体有効度",
      format: Ce
    },
    stateRate: {
      domainName: "ステート有効度",
      format: Ce
    },
    stateResist: {
      domainName: "ステート無効",
      format: ae
    },
    attackElement: {
      domainName: "攻撃属性",
      format: ae
    },
    attackState: {
      domainName: "攻撃ステート",
      format: sr
    },
    attackSpeed: {
      domainName: "攻撃速度補正",
      format: ar
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: ar
    },
    actionPlus: {
      domainName: "行動追加",
      format: Ce
    },
    attackSkill: {
      domainName: "攻撃スキル",
      format: ae
    },
    equipWeaponType: {
      domainName: "装備武器タイプ",
      format: ae
    },
    equipArmorType: {
      domainName: "装備防具タイプ",
      format: ae
    },
    equipLock: {
      domainName: "装備固定",
      format: ae
    },
    equipSeal: {
      domainName: "装備封印",
      format: ae
    },
    slotType: {
      domainName: "スロットタイプ",
      format: ae
    },
    skillAdd: {
      domainName: "スキル追加",
      format: ae
    },
    skillSeal: {
      domainName: "スキルタイプ封印",
      format: ae
    },
    skillTypeAdd: {
      domainName: "スキルタイプ追加",
      format: ae
    },
    skillTypeSeal: {
      domainName: "スキルタイプ封印",
      format: ae
    }
  }
}, or = "{value}", ir = "{name}";
class ts {
  constructor(r, y, c, E) {
    this.code = r, this.label = y, this.format = c, this.dataSource = E;
  }
  match(r) {
    return this.code === r.code;
  }
  testTraitCode(r) {
    this.match(r);
  }
  formatText(r, y) {
    this.testTraitCode(r);
    const c = this.format.replaceAll(
      or,
      r.value.toString()
    );
    return this.dataSource ? c.replaceAll(
      ir,
      y(this.dataSource, r.dataId)
    ) : c;
  }
  requiresValue() {
    return this.format.includes(or);
  }
  requiresName() {
    return this.format.includes(ir);
  }
  invalidPlaceHolder() {
    const r = ["value", "name"];
    return [
      ...this.format.matchAll(/\{([^}]+)\}/g)
    ].map((c) => c[1]).filter((c) => !r.includes(c));
  }
  isFormatValidForDataSource() {
    return !(this.dataSource && !this.requiresName());
  }
  diagnose() {
    const r = !this.isFormatValidForDataSource(), y = this.requiresName() && !this.dataSource, c = this.invalidPlaceHolder();
    return {
      code: this.code,
      label: this.label,
      format: this.format,
      hasError: r || y || c.length > 0,
      missingDataSourceError: r,
      sourceMismatchError: y,
      invalidPlaceHolders: c
    };
  }
}
const Bc = (e) => [
  rs(e.elementRate),
  ns(e.debuffRate),
  ss(e.stateRate),
  as(e.stateResist),
  os(e.regularParam),
  is(e.extraParam),
  cs(e.specialParam),
  us(e.attackElement),
  ds(e.attackState),
  ls(e.attackSpeed),
  fs(e.attackTimes),
  ms(e.attackSkill),
  Ss(e.skillTypeAdd),
  Ps(e.skillTypeSeal),
  Rs(e.skillAdd),
  Ts(e.skillSeal),
  Es(e.equipWeaponType),
  gs(e.equipArmorType),
  vs(e.equipLock),
  As(e.equipSeal),
  $s(e.slotType),
  ps(e.actionPlus),
  hs(e.specialFlag),
  _s(e.collaps),
  ys(e.partyAbility)
], cr = (e, r) => typeof r == "string" ? r : e, ee = (e, r, y, c) => {
  const E = cr(r.domainName, y.domainName), o = cr(r.format, y.format);
  return new ts(e, E, o, c);
}, Cn = () => ({
  module: bn,
  author: we,
  kind: Qs
}), Mn = (e) => ({
  module: wn,
  author: we,
  kind: e
}), Ae = (e) => ({
  author: we,
  module: xt,
  kind: e
}), Ln = (e) => ({
  author: we,
  module: bn,
  kind: e
}), rs = (e) => ee(
  11,
  Z.options.elementRate,
  e,
  Cn()
), ns = (e) => ee(
  12,
  Z.options.debuffRate,
  e,
  Ae(Ve)
), ss = (e) => ee(
  13,
  Z.options.stateRate,
  e,
  Ae(Ve)
), as = (e) => ee(
  14,
  Z.options.stateResist,
  e,
  Mn(Nt)
), os = (e) => ee(
  21,
  Z.options.regularParam,
  e,
  Ae(Ve)
), is = (e) => ee(
  22,
  Z.options.extraParam,
  e,
  Ae(kn)
), cs = (e) => ee(
  23,
  Z.options.specialParam,
  e,
  Ae(jn)
), us = (e) => ee(
  31,
  Z.options.attackElement,
  e,
  Cn()
), ds = (e) => ee(
  32,
  Z.options.attackState,
  e,
  Ae(Nt)
), ls = (e) => ee(33, Z.options.attackSpeed, e), fs = (e) => ee(34, Z.options.attackTimes, e), ms = (e) => ee(
  35,
  Z.options.attackSkill,
  e,
  Mn(Vn)
), ps = (e) => ee(61, Z.options.actionPlus, e), hs = (e) => ee(
  62,
  Z.options.specialFlag,
  e,
  Ae(Fn)
), _s = (e) => ee(
  63,
  Z.options.collaps,
  e,
  Ae(qn)
), ys = (e) => ee(
  64,
  Z.options.partyAbility,
  e,
  Ae(Un)
), Es = (e) => ee(
  51,
  Z.options.equipWeaponType,
  e,
  Ln(Js)
), gs = (e) => ee(
  52,
  Z.options.equipArmorType,
  e,
  Ln(xs)
), vs = (e) => ee(53, Z.options.equipLock, e), As = (e) => ee(54, Z.options.equipSeal, e), Rs = (e) => ee(43, Z.options.skillAdd, e), Ts = (e) => ee(44, Z.options.skillSeal, e), $s = (e) => ee(55, Z.options.slotType, e), Ss = (e) => ee(
  41,
  Z.options.skillTypeAdd,
  e
), Ps = (e) => ee(
  42,
  Z.options.skillTypeSeal,
  e
), zc = "Trait", Yc = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
}, Wc = (e = {}) => ({
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
}), Is = {
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
}, Xc = (e) => ({
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
}), Jc = (e = {}) => ({
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
}), Ns = {
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
}, xc = (e = {}) => ({
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
}), Os = {
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
}, Qc = (e = {}) => ({
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
}), ws = {
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
}, Zc = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, eu = (e = {}) => ({
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
  damage: Qt(e.damage ?? {}),
  wtypeId: e.wtypeId ?? 0
}), bs = {
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
}, Cs = (e = {}) => ({
  dataId: e.dataId ?? 0,
  denominator: e.denominator ?? 0,
  kind: e.kind ?? 0
}), tu = (e = {}) => ({
  conditionParam1: e.conditionParam1 ?? 0,
  conditionParam2: e.conditionParam2 ?? 0,
  conditionType: e.conditionType ?? 0,
  rating: e.rating ?? 0,
  skillId: e.skillId ?? 0
}), ru = (e = {}) => {
  var r;
  return {
    name: e.name ?? "",
    id: e.id ?? 0,
    battlerName: e.battlerName ?? "",
    battlerHue: e.battlerHue ?? 0,
    dropItems: ((r = e.dropItems) == null ? void 0 : r.map(() => Cs())) ?? [],
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
}, Ms = {
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
}, nu = (e = {}) => ({
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
  damage: Qt(e.damage ?? {}),
  effects: [],
  price: 0
}), su = (e = {}) => ({
  stypeId: e.stypeId ?? 0,
  requiredWtypeId1: e.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e.requiredWtypeId2 ?? 0,
  animationId: e.animationId ?? 0,
  damage: Qt(e.damage ?? {}),
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
}), Ls = {
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
}, Ds = {
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
}, au = 0, ou = 1, iu = 2, ks = "{name} + {value1}", ur = "{name} {value1}%", qt = "{value1}% + {value2}", dr = "{name} {value1}ターン", je = "{name}", de = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: dr
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: dr
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: qt
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: ks
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: je
    },
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: qt
    },
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: qt
    },
    removeBuff: {
      desc: "バフを解除する",
      domainName: "バフ解除",
      format: je
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: je
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: ur
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: je
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: ur
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: je
    }
  }
}, js = 11, qs = 12, Us = 13, Fs = 21, Vs = 22, Gs = 31, Hs = 32, Ks = 33, Bs = 34, cu = 41, zs = 42, Ys = 43, Ws = 44, uu = 0, Dn = /^[a-zA-Z0-9]+$/, du = (e) => Dn.test(e) ? e : void 0, Ut = (e) => typeof e == "string" ? Dn.test(e) : !1, lu = (e) => [e.author, e.module, e.kind].join("."), fu = (e) => Ut(e.author) && Ut(e.module) && Ut(e.kind), Ve = "params", kn = "xparams", jn = "sparams", qn = "collaps", Un = "partyAbiility", Fn = "sflag", mu = "actors", pu = "variables", hu = "map", _u = "enemy", Nt = "state", Vn = "skill", yu = "items", Eu = "weapon", gu = "armor", vu = "class", Xs = "common_event", Au = "troop", Ru = "colors", Js = "weaponTypes", xs = "armorTypes", Tu = "equipTypes", $u = "switches", Su = "skillTypes", Qs = "elements", lr = "{value1}", fr = "{value2}", mr = "{name}";
class Zs {
  constructor(r, y, c, E, o) {
    this.codeId = r, this.label = y, this.format = c, this.description = E, this.dataSource = o;
  }
  formatText(r, y) {
    const c = this.format.replaceAll(lr, r.value1.toString()).replaceAll(fr, r.value2.toString());
    return this.dataSource ? c.replaceAll(
      mr,
      y(this.dataSource, r.dataId)
    ) : c;
  }
  requiresValue1() {
    return this.format.includes(lr);
  }
  requiresValue2() {
    return this.format.includes(fr);
  }
  requiresName() {
    return this.format.includes(mr);
  }
  invalidPlaceHolder() {
    const r = ["value1", "value2", "name"];
    return [
      ...this.format.matchAll(/\{([^}]+)\}/g)
    ].map((c) => c[1]).filter((c) => !r.includes(c));
  }
  isFormatValidForDataSource() {
    return !(this.dataSource && !this.requiresName());
  }
}
const Pu = (e, r, y) => e.format.replaceAll("{value1}", r.value1.toString()).replaceAll("{value2}", r.value2.toString()).replaceAll("{name}", y), Iu = (e) => [
  ea(e.options.recoverHp),
  ta(e.options.recoverMp),
  ra(e.options.gainTp),
  na(e.options.addState),
  sa(e.options.removeState),
  aa(e.options.addBuff),
  ca(e.options.addDebuff),
  oa(e.options.removeBuff),
  ua(e.options.removeDebuff),
  ia(e.options.learnSkill),
  da(e.options.commonEvent)
], Ot = () => ({
  author: we,
  module: xt,
  kind: Ve
}), wt = (e) => ({
  author: we,
  module: wn,
  kind: e
}), fe = (e, r, y, c) => {
  const E = y.domainName ?? r.domainName, o = y.format ?? r.format, m = y.desc ?? r.desc;
  return new Zs(e, E, o, m, c);
}, ea = (e) => fe(
  js,
  de.options.recoverHp,
  e
), ta = (e) => fe(
  qs,
  de.options.recoverMp,
  e
), ra = (e) => fe(Us, de.options.gainTp, e), Nu = (e) => fe(zs, de.options.grow, e), na = (e) => fe(
  Fs,
  de.options.addState,
  e,
  wt(Nt)
), sa = (e) => fe(
  Vs,
  de.options.removeState,
  e,
  wt(Nt)
), aa = (e) => fe(
  Gs,
  de.options.addBuff,
  e,
  Ot()
), oa = (e) => fe(
  Ks,
  de.options.removeBuff,
  e,
  Ot()
), ia = (e) => fe(
  Ys,
  de.options.learnSkill,
  e,
  wt(Vn)
), ca = (e) => fe(
  Hs,
  de.options.addBuff,
  e,
  Ot()
), ua = (e) => fe(
  Bs,
  de.options.removeDebuff,
  e,
  Ot()
), da = (e) => fe(
  Ws,
  de.options.commonEvent,
  e,
  wt(Xs)
), Ou = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, wu = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, bu = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, la = {
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
}, fa = {
  domainName: "ダメージ",
  options: {}
}, Qt = (e = {}) => ({
  type: e.type ?? 0,
  elementId: e.elementId ?? 0,
  formula: e.formula ?? "",
  variance: e.variance ?? 0,
  critical: e.critical ?? !1
}), Cu = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
};
function ma(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ge = { exports: {} }, Ft = {}, Ee = {}, Pe = {}, Vt = {}, Gt = {}, Ht = {}, pr;
function Pt() {
  return pr || (pr = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.regexpCode = e.getEsmExportName = e.getProperty = e.safeStringify = e.stringify = e.strConcat = e.addCodeArg = e.str = e._ = e.nil = e._Code = e.Name = e.IDENTIFIER = e._CodeOrName = void 0;
    class r {
    }
    e._CodeOrName = r, e.IDENTIFIER = /^[a-z$_][a-z$_0-9]*$/i;
    class y extends r {
      constructor(t) {
        if (super(), !e.IDENTIFIER.test(t))
          throw new Error("CodeGen: name must be a valid identifier");
        this.str = t;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        return !1;
      }
      get names() {
        return { [this.str]: 1 };
      }
    }
    e.Name = y;
    class c extends r {
      constructor(t) {
        super(), this._items = typeof t == "string" ? [t] : t;
      }
      toString() {
        return this.str;
      }
      emptyStr() {
        if (this._items.length > 1)
          return !1;
        const t = this._items[0];
        return t === "" || t === '""';
      }
      get str() {
        var t;
        return (t = this._str) !== null && t !== void 0 ? t : this._str = this._items.reduce((n, d) => `${n}${d}`, "");
      }
      get names() {
        var t;
        return (t = this._names) !== null && t !== void 0 ? t : this._names = this._items.reduce((n, d) => (d instanceof y && (n[d.str] = (n[d.str] || 0) + 1), n), {});
      }
    }
    e._Code = c, e.nil = new c("");
    function E(s, ...t) {
      const n = [s[0]];
      let d = 0;
      for (; d < t.length; )
        u(n, t[d]), n.push(s[++d]);
      return new c(n);
    }
    e._ = E;
    const o = new c("+");
    function m(s, ...t) {
      const n = [S(s[0])];
      let d = 0;
      for (; d < t.length; )
        n.push(o), u(n, t[d]), n.push(o, S(s[++d]));
      return p(n), new c(n);
    }
    e.str = m;
    function u(s, t) {
      t instanceof c ? s.push(...t._items) : t instanceof y ? s.push(t) : s.push(T(t));
    }
    e.addCodeArg = u;
    function p(s) {
      let t = 1;
      for (; t < s.length - 1; ) {
        if (s[t] === o) {
          const n = g(s[t - 1], s[t + 1]);
          if (n !== void 0) {
            s.splice(t - 1, 3, n);
            continue;
          }
          s[t++] = "+";
        }
        t++;
      }
    }
    function g(s, t) {
      if (t === '""')
        return s;
      if (s === '""')
        return t;
      if (typeof s == "string")
        return t instanceof y || s[s.length - 1] !== '"' ? void 0 : typeof t != "string" ? `${s.slice(0, -1)}${t}"` : t[0] === '"' ? s.slice(0, -1) + t.slice(1) : void 0;
      if (typeof t == "string" && t[0] === '"' && !(s instanceof y))
        return `"${s}${t.slice(1)}`;
    }
    function _(s, t) {
      return t.emptyStr() ? s : s.emptyStr() ? t : m`${s}${t}`;
    }
    e.strConcat = _;
    function T(s) {
      return typeof s == "number" || typeof s == "boolean" || s === null ? s : S(Array.isArray(s) ? s.join(",") : s);
    }
    function P(s) {
      return new c(S(s));
    }
    e.stringify = P;
    function S(s) {
      return JSON.stringify(s).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
    }
    e.safeStringify = S;
    function R(s) {
      return typeof s == "string" && e.IDENTIFIER.test(s) ? new c(`.${s}`) : E`[${s}]`;
    }
    e.getProperty = R;
    function h(s) {
      if (typeof s == "string" && e.IDENTIFIER.test(s))
        return new c(`${s}`);
      throw new Error(`CodeGen: invalid export name: ${s}, use explicit $id name mapping`);
    }
    e.getEsmExportName = h;
    function a(s) {
      return new c(s.toString());
    }
    e.regexpCode = a;
  }(Ht)), Ht;
}
var Kt = {}, hr;
function _r() {
  return hr || (hr = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.ValueScope = e.ValueScopeName = e.Scope = e.varKinds = e.UsedValueState = void 0;
    const r = Pt();
    class y extends Error {
      constructor(g) {
        super(`CodeGen: "code" for ${g} not defined`), this.value = g.value;
      }
    }
    var c;
    (function(p) {
      p[p.Started = 0] = "Started", p[p.Completed = 1] = "Completed";
    })(c || (e.UsedValueState = c = {})), e.varKinds = {
      const: new r.Name("const"),
      let: new r.Name("let"),
      var: new r.Name("var")
    };
    class E {
      constructor({ prefixes: g, parent: _ } = {}) {
        this._names = {}, this._prefixes = g, this._parent = _;
      }
      toName(g) {
        return g instanceof r.Name ? g : this.name(g);
      }
      name(g) {
        return new r.Name(this._newName(g));
      }
      _newName(g) {
        const _ = this._names[g] || this._nameGroup(g);
        return `${g}${_.index++}`;
      }
      _nameGroup(g) {
        var _, T;
        if (!((T = (_ = this._parent) === null || _ === void 0 ? void 0 : _._prefixes) === null || T === void 0) && T.has(g) || this._prefixes && !this._prefixes.has(g))
          throw new Error(`CodeGen: prefix "${g}" is not allowed in this scope`);
        return this._names[g] = { prefix: g, index: 0 };
      }
    }
    e.Scope = E;
    class o extends r.Name {
      constructor(g, _) {
        super(_), this.prefix = g;
      }
      setValue(g, { property: _, itemIndex: T }) {
        this.value = g, this.scopePath = (0, r._)`.${new r.Name(_)}[${T}]`;
      }
    }
    e.ValueScopeName = o;
    const m = (0, r._)`\n`;
    class u extends E {
      constructor(g) {
        super(g), this._values = {}, this._scope = g.scope, this.opts = { ...g, _n: g.lines ? m : r.nil };
      }
      get() {
        return this._scope;
      }
      name(g) {
        return new o(g, this._newName(g));
      }
      value(g, _) {
        var T;
        if (_.ref === void 0)
          throw new Error("CodeGen: ref must be passed in value");
        const P = this.toName(g), { prefix: S } = P, R = (T = _.key) !== null && T !== void 0 ? T : _.ref;
        let h = this._values[S];
        if (h) {
          const t = h.get(R);
          if (t)
            return t;
        } else
          h = this._values[S] = /* @__PURE__ */ new Map();
        h.set(R, P);
        const a = this._scope[S] || (this._scope[S] = []), s = a.length;
        return a[s] = _.ref, P.setValue(_, { property: S, itemIndex: s }), P;
      }
      getValue(g, _) {
        const T = this._values[g];
        if (T)
          return T.get(_);
      }
      scopeRefs(g, _ = this._values) {
        return this._reduceValues(_, (T) => {
          if (T.scopePath === void 0)
            throw new Error(`CodeGen: name "${T}" has no value`);
          return (0, r._)`${g}${T.scopePath}`;
        });
      }
      scopeCode(g = this._values, _, T) {
        return this._reduceValues(g, (P) => {
          if (P.value === void 0)
            throw new Error(`CodeGen: name "${P}" has no value`);
          return P.value.code;
        }, _, T);
      }
      _reduceValues(g, _, T = {}, P) {
        let S = r.nil;
        for (const R in g) {
          const h = g[R];
          if (!h)
            continue;
          const a = T[R] = T[R] || /* @__PURE__ */ new Map();
          h.forEach((s) => {
            if (a.has(s))
              return;
            a.set(s, c.Started);
            let t = _(s);
            if (t) {
              const n = this.opts.es5 ? e.varKinds.var : e.varKinds.const;
              S = (0, r._)`${S}${n} ${s} = ${t};${this.opts._n}`;
            } else if (t = P == null ? void 0 : P(s))
              S = (0, r._)`${S}${t}${this.opts._n}`;
            else
              throw new y(s);
            a.set(s, c.Completed);
          });
        }
        return S;
      }
    }
    e.ValueScope = u;
  }(Kt)), Kt;
}
var yr;
function z() {
  return yr || (yr = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.or = e.and = e.not = e.CodeGen = e.operators = e.varKinds = e.ValueScopeName = e.ValueScope = e.Scope = e.Name = e.regexpCode = e.stringify = e.getProperty = e.nil = e.strConcat = e.str = e._ = void 0;
    const r = Pt(), y = _r();
    var c = Pt();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return c._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return c.str;
    } }), Object.defineProperty(e, "strConcat", { enumerable: !0, get: function() {
      return c.strConcat;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return c.nil;
    } }), Object.defineProperty(e, "getProperty", { enumerable: !0, get: function() {
      return c.getProperty;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return c.stringify;
    } }), Object.defineProperty(e, "regexpCode", { enumerable: !0, get: function() {
      return c.regexpCode;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return c.Name;
    } });
    var E = _r();
    Object.defineProperty(e, "Scope", { enumerable: !0, get: function() {
      return E.Scope;
    } }), Object.defineProperty(e, "ValueScope", { enumerable: !0, get: function() {
      return E.ValueScope;
    } }), Object.defineProperty(e, "ValueScopeName", { enumerable: !0, get: function() {
      return E.ValueScopeName;
    } }), Object.defineProperty(e, "varKinds", { enumerable: !0, get: function() {
      return E.varKinds;
    } }), e.operators = {
      GT: new r._Code(">"),
      GTE: new r._Code(">="),
      LT: new r._Code("<"),
      LTE: new r._Code("<="),
      EQ: new r._Code("==="),
      NEQ: new r._Code("!=="),
      NOT: new r._Code("!"),
      OR: new r._Code("||"),
      AND: new r._Code("&&"),
      ADD: new r._Code("+")
    };
    class o {
      optimizeNodes() {
        return this;
      }
      optimizeNames(i, A) {
        return this;
      }
    }
    class m extends o {
      constructor(i, A, b) {
        super(), this.varKind = i, this.name = A, this.rhs = b;
      }
      render({ es5: i, _n: A }) {
        const b = i ? y.varKinds.var : this.varKind, q = this.rhs === void 0 ? "" : ` = ${this.rhs}`;
        return `${b} ${this.name}${q};` + A;
      }
      optimizeNames(i, A) {
        if (i[this.name.str])
          return this.rhs && (this.rhs = W(this.rhs, i, A)), this;
      }
      get names() {
        return this.rhs instanceof r._CodeOrName ? this.rhs.names : {};
      }
    }
    class u extends o {
      constructor(i, A, b) {
        super(), this.lhs = i, this.rhs = A, this.sideEffects = b;
      }
      render({ _n: i }) {
        return `${this.lhs} = ${this.rhs};` + i;
      }
      optimizeNames(i, A) {
        if (!(this.lhs instanceof r.Name && !i[this.lhs.str] && !this.sideEffects))
          return this.rhs = W(this.rhs, i, A), this;
      }
      get names() {
        const i = this.lhs instanceof r.Name ? {} : { ...this.lhs.names };
        return G(i, this.rhs);
      }
    }
    class p extends u {
      constructor(i, A, b, q) {
        super(i, b, q), this.op = A;
      }
      render({ _n: i }) {
        return `${this.lhs} ${this.op}= ${this.rhs};` + i;
      }
    }
    class g extends o {
      constructor(i) {
        super(), this.label = i, this.names = {};
      }
      render({ _n: i }) {
        return `${this.label}:` + i;
      }
    }
    class _ extends o {
      constructor(i) {
        super(), this.label = i, this.names = {};
      }
      render({ _n: i }) {
        return `break${this.label ? ` ${this.label}` : ""};` + i;
      }
    }
    class T extends o {
      constructor(i) {
        super(), this.error = i;
      }
      render({ _n: i }) {
        return `throw ${this.error};` + i;
      }
      get names() {
        return this.error.names;
      }
    }
    class P extends o {
      constructor(i) {
        super(), this.code = i;
      }
      render({ _n: i }) {
        return `${this.code};` + i;
      }
      optimizeNodes() {
        return `${this.code}` ? this : void 0;
      }
      optimizeNames(i, A) {
        return this.code = W(this.code, i, A), this;
      }
      get names() {
        return this.code instanceof r._CodeOrName ? this.code.names : {};
      }
    }
    class S extends o {
      constructor(i = []) {
        super(), this.nodes = i;
      }
      render(i) {
        return this.nodes.reduce((A, b) => A + b.render(i), "");
      }
      optimizeNodes() {
        const { nodes: i } = this;
        let A = i.length;
        for (; A--; ) {
          const b = i[A].optimizeNodes();
          Array.isArray(b) ? i.splice(A, 1, ...b) : b ? i[A] = b : i.splice(A, 1);
        }
        return i.length > 0 ? this : void 0;
      }
      optimizeNames(i, A) {
        const { nodes: b } = this;
        let q = b.length;
        for (; q--; ) {
          const V = b[q];
          V.optimizeNames(i, A) || (te(i, V.names), b.splice(q, 1));
        }
        return b.length > 0 ? this : void 0;
      }
      get names() {
        return this.nodes.reduce((i, A) => H(i, A.names), {});
      }
    }
    class R extends S {
      render(i) {
        return "{" + i._n + super.render(i) + "}" + i._n;
      }
    }
    class h extends S {
    }
    class a extends R {
    }
    a.kind = "else";
    class s extends R {
      constructor(i, A) {
        super(A), this.condition = i;
      }
      render(i) {
        let A = `if(${this.condition})` + super.render(i);
        return this.else && (A += "else " + this.else.render(i)), A;
      }
      optimizeNodes() {
        super.optimizeNodes();
        const i = this.condition;
        if (i === !0)
          return this.nodes;
        let A = this.else;
        if (A) {
          const b = A.optimizeNodes();
          A = this.else = Array.isArray(b) ? new a(b) : b;
        }
        if (A)
          return i === !1 ? A instanceof s ? A : A.nodes : this.nodes.length ? this : new s(_e(i), A instanceof s ? [A] : A.nodes);
        if (!(i === !1 || !this.nodes.length))
          return this;
      }
      optimizeNames(i, A) {
        var b;
        if (this.else = (b = this.else) === null || b === void 0 ? void 0 : b.optimizeNames(i, A), !!(super.optimizeNames(i, A) || this.else))
          return this.condition = W(this.condition, i, A), this;
      }
      get names() {
        const i = super.names;
        return G(i, this.condition), this.else && H(i, this.else.names), i;
      }
    }
    s.kind = "if";
    class t extends R {
    }
    t.kind = "for";
    class n extends t {
      constructor(i) {
        super(), this.iteration = i;
      }
      render(i) {
        return `for(${this.iteration})` + super.render(i);
      }
      optimizeNames(i, A) {
        if (super.optimizeNames(i, A))
          return this.iteration = W(this.iteration, i, A), this;
      }
      get names() {
        return H(super.names, this.iteration.names);
      }
    }
    class d extends t {
      constructor(i, A, b, q) {
        super(), this.varKind = i, this.name = A, this.from = b, this.to = q;
      }
      render(i) {
        const A = i.es5 ? y.varKinds.var : this.varKind, { name: b, from: q, to: V } = this;
        return `for(${A} ${b}=${q}; ${b}<${V}; ${b}++)` + super.render(i);
      }
      get names() {
        const i = G(super.names, this.from);
        return G(i, this.to);
      }
    }
    class f extends t {
      constructor(i, A, b, q) {
        super(), this.loop = i, this.varKind = A, this.name = b, this.iterable = q;
      }
      render(i) {
        return `for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})` + super.render(i);
      }
      optimizeNames(i, A) {
        if (super.optimizeNames(i, A))
          return this.iterable = W(this.iterable, i, A), this;
      }
      get names() {
        return H(super.names, this.iterable.names);
      }
    }
    class l extends R {
      constructor(i, A, b) {
        super(), this.name = i, this.args = A, this.async = b;
      }
      render(i) {
        return `${this.async ? "async " : ""}function ${this.name}(${this.args})` + super.render(i);
      }
    }
    l.kind = "func";
    class v extends S {
      render(i) {
        return "return " + super.render(i);
      }
    }
    v.kind = "return";
    class w extends R {
      render(i) {
        let A = "try" + super.render(i);
        return this.catch && (A += this.catch.render(i)), this.finally && (A += this.finally.render(i)), A;
      }
      optimizeNodes() {
        var i, A;
        return super.optimizeNodes(), (i = this.catch) === null || i === void 0 || i.optimizeNodes(), (A = this.finally) === null || A === void 0 || A.optimizeNodes(), this;
      }
      optimizeNames(i, A) {
        var b, q;
        return super.optimizeNames(i, A), (b = this.catch) === null || b === void 0 || b.optimizeNames(i, A), (q = this.finally) === null || q === void 0 || q.optimizeNames(i, A), this;
      }
      get names() {
        const i = super.names;
        return this.catch && H(i, this.catch.names), this.finally && H(i, this.finally.names), i;
      }
    }
    class L extends R {
      constructor(i) {
        super(), this.error = i;
      }
      render(i) {
        return `catch(${this.error})` + super.render(i);
      }
    }
    L.kind = "catch";
    class j extends R {
      render(i) {
        return "finally" + super.render(i);
      }
    }
    j.kind = "finally";
    class U {
      constructor(i, A = {}) {
        this._values = {}, this._blockStarts = [], this._constants = {}, this.opts = { ...A, _n: A.lines ? `
` : "" }, this._extScope = i, this._scope = new y.Scope({ parent: i }), this._nodes = [new h()];
      }
      toString() {
        return this._root.render(this.opts);
      }
      // returns unique name in the internal scope
      name(i) {
        return this._scope.name(i);
      }
      // reserves unique name in the external scope
      scopeName(i) {
        return this._extScope.name(i);
      }
      // reserves unique name in the external scope and assigns value to it
      scopeValue(i, A) {
        const b = this._extScope.value(i, A);
        return (this._values[b.prefix] || (this._values[b.prefix] = /* @__PURE__ */ new Set())).add(b), b;
      }
      getScopeValue(i, A) {
        return this._extScope.getValue(i, A);
      }
      // return code that assigns values in the external scope to the names that are used internally
      // (same names that were returned by gen.scopeName or gen.scopeValue)
      scopeRefs(i) {
        return this._extScope.scopeRefs(i, this._values);
      }
      scopeCode() {
        return this._extScope.scopeCode(this._values);
      }
      _def(i, A, b, q) {
        const V = this._scope.toName(A);
        return b !== void 0 && q && (this._constants[V.str] = b), this._leafNode(new m(i, V, b)), V;
      }
      // `const` declaration (`var` in es5 mode)
      const(i, A, b) {
        return this._def(y.varKinds.const, i, A, b);
      }
      // `let` declaration with optional assignment (`var` in es5 mode)
      let(i, A, b) {
        return this._def(y.varKinds.let, i, A, b);
      }
      // `var` declaration with optional assignment
      var(i, A, b) {
        return this._def(y.varKinds.var, i, A, b);
      }
      // assignment code
      assign(i, A, b) {
        return this._leafNode(new u(i, A, b));
      }
      // `+=` code
      add(i, A) {
        return this._leafNode(new p(i, e.operators.ADD, A));
      }
      // appends passed SafeExpr to code or executes Block
      code(i) {
        return typeof i == "function" ? i() : i !== r.nil && this._leafNode(new P(i)), this;
      }
      // returns code for object literal for the passed argument list of key-value pairs
      object(...i) {
        const A = ["{"];
        for (const [b, q] of i)
          A.length > 1 && A.push(","), A.push(b), (b !== q || this.opts.es5) && (A.push(":"), (0, r.addCodeArg)(A, q));
        return A.push("}"), new r._Code(A);
      }
      // `if` clause (or statement if `thenBody` and, optionally, `elseBody` are passed)
      if(i, A, b) {
        if (this._blockNode(new s(i)), A && b)
          this.code(A).else().code(b).endIf();
        else if (A)
          this.code(A).endIf();
        else if (b)
          throw new Error('CodeGen: "else" body without "then" body');
        return this;
      }
      // `else if` clause - invalid without `if` or after `else` clauses
      elseIf(i) {
        return this._elseNode(new s(i));
      }
      // `else` clause - only valid after `if` or `else if` clauses
      else() {
        return this._elseNode(new a());
      }
      // end `if` statement (needed if gen.if was used only with condition)
      endIf() {
        return this._endBlockNode(s, a);
      }
      _for(i, A) {
        return this._blockNode(i), A && this.code(A).endFor(), this;
      }
      // a generic `for` clause (or statement if `forBody` is passed)
      for(i, A) {
        return this._for(new n(i), A);
      }
      // `for` statement for a range of values
      forRange(i, A, b, q, V = this.opts.es5 ? y.varKinds.var : y.varKinds.let) {
        const J = this._scope.toName(i);
        return this._for(new d(V, J, A, b), () => q(J));
      }
      // `for-of` statement (in es5 mode replace with a normal for loop)
      forOf(i, A, b, q = y.varKinds.const) {
        const V = this._scope.toName(i);
        if (this.opts.es5) {
          const J = A instanceof r.Name ? A : this.var("_arr", A);
          return this.forRange("_i", 0, (0, r._)`${J}.length`, (Y) => {
            this.var(V, (0, r._)`${J}[${Y}]`), b(V);
          });
        }
        return this._for(new f("of", q, V, A), () => b(V));
      }
      // `for-in` statement.
      // With option `ownProperties` replaced with a `for-of` loop for object keys
      forIn(i, A, b, q = this.opts.es5 ? y.varKinds.var : y.varKinds.const) {
        if (this.opts.ownProperties)
          return this.forOf(i, (0, r._)`Object.keys(${A})`, b);
        const V = this._scope.toName(i);
        return this._for(new f("in", q, V, A), () => b(V));
      }
      // end `for` loop
      endFor() {
        return this._endBlockNode(t);
      }
      // `label` statement
      label(i) {
        return this._leafNode(new g(i));
      }
      // `break` statement
      break(i) {
        return this._leafNode(new _(i));
      }
      // `return` statement
      return(i) {
        const A = new v();
        if (this._blockNode(A), this.code(i), A.nodes.length !== 1)
          throw new Error('CodeGen: "return" should have one node');
        return this._endBlockNode(v);
      }
      // `try` statement
      try(i, A, b) {
        if (!A && !b)
          throw new Error('CodeGen: "try" without "catch" and "finally"');
        const q = new w();
        if (this._blockNode(q), this.code(i), A) {
          const V = this.name("e");
          this._currNode = q.catch = new L(V), A(V);
        }
        return b && (this._currNode = q.finally = new j(), this.code(b)), this._endBlockNode(L, j);
      }
      // `throw` statement
      throw(i) {
        return this._leafNode(new T(i));
      }
      // start self-balancing block
      block(i, A) {
        return this._blockStarts.push(this._nodes.length), i && this.code(i).endBlock(A), this;
      }
      // end the current self-balancing block
      endBlock(i) {
        const A = this._blockStarts.pop();
        if (A === void 0)
          throw new Error("CodeGen: not in self-balancing block");
        const b = this._nodes.length - A;
        if (b < 0 || i !== void 0 && b !== i)
          throw new Error(`CodeGen: wrong number of nodes: ${b} vs ${i} expected`);
        return this._nodes.length = A, this;
      }
      // `function` heading (or definition if funcBody is passed)
      func(i, A = r.nil, b, q) {
        return this._blockNode(new l(i, A, b)), q && this.code(q).endFunc(), this;
      }
      // end function definition
      endFunc() {
        return this._endBlockNode(l);
      }
      optimize(i = 1) {
        for (; i-- > 0; )
          this._root.optimizeNodes(), this._root.optimizeNames(this._root.names, this._constants);
      }
      _leafNode(i) {
        return this._currNode.nodes.push(i), this;
      }
      _blockNode(i) {
        this._currNode.nodes.push(i), this._nodes.push(i);
      }
      _endBlockNode(i, A) {
        const b = this._currNode;
        if (b instanceof i || A && b instanceof A)
          return this._nodes.pop(), this;
        throw new Error(`CodeGen: not in block "${A ? `${i.kind}/${A.kind}` : i.kind}"`);
      }
      _elseNode(i) {
        const A = this._currNode;
        if (!(A instanceof s))
          throw new Error('CodeGen: "else" without "if"');
        return this._currNode = A.else = i, this;
      }
      get _root() {
        return this._nodes[0];
      }
      get _currNode() {
        const i = this._nodes;
        return i[i.length - 1];
      }
      set _currNode(i) {
        const A = this._nodes;
        A[A.length - 1] = i;
      }
    }
    e.CodeGen = U;
    function H(O, i) {
      for (const A in i)
        O[A] = (O[A] || 0) + (i[A] || 0);
      return O;
    }
    function G(O, i) {
      return i instanceof r._CodeOrName ? H(O, i.names) : O;
    }
    function W(O, i, A) {
      if (O instanceof r.Name)
        return b(O);
      if (!q(O))
        return O;
      return new r._Code(O._items.reduce((V, J) => (J instanceof r.Name && (J = b(J)), J instanceof r._Code ? V.push(...J._items) : V.push(J), V), []));
      function b(V) {
        const J = A[V.str];
        return J === void 0 || i[V.str] !== 1 ? V : (delete i[V.str], J);
      }
      function q(V) {
        return V instanceof r._Code && V._items.some((J) => J instanceof r.Name && i[J.str] === 1 && A[J.str] !== void 0);
      }
    }
    function te(O, i) {
      for (const A in i)
        O[A] = (O[A] || 0) - (i[A] || 0);
    }
    function _e(O) {
      return typeof O == "boolean" || typeof O == "number" || O === null ? !O : (0, r._)`!${M(O)}`;
    }
    e.not = _e;
    const ye = I(e.operators.AND);
    function Q(...O) {
      return O.reduce(ye);
    }
    e.and = Q;
    const Re = I(e.operators.OR);
    function D(...O) {
      return O.reduce(Re);
    }
    e.or = D;
    function I(O) {
      return (i, A) => i === r.nil ? A : A === r.nil ? i : (0, r._)`${M(i)} ${O} ${M(A)}`;
    }
    function M(O) {
      return O instanceof r.Name ? O : (0, r._)`(${O})`;
    }
  }(Gt)), Gt;
}
var K = {}, Er;
function X() {
  if (Er) return K;
  Er = 1, Object.defineProperty(K, "__esModule", { value: !0 }), K.checkStrictMode = K.getErrorPath = K.Type = K.useFunc = K.setEvaluated = K.evaluatedPropsToName = K.mergeEvaluated = K.eachItem = K.unescapeJsonPointer = K.escapeJsonPointer = K.escapeFragment = K.unescapeFragment = K.schemaRefOrVal = K.schemaHasRulesButRef = K.schemaHasRules = K.checkUnknownRules = K.alwaysValidSchema = K.toHash = void 0;
  const e = z(), r = Pt();
  function y(f) {
    const l = {};
    for (const v of f)
      l[v] = !0;
    return l;
  }
  K.toHash = y;
  function c(f, l) {
    return typeof l == "boolean" ? l : Object.keys(l).length === 0 ? !0 : (E(f, l), !o(l, f.self.RULES.all));
  }
  K.alwaysValidSchema = c;
  function E(f, l = f.schema) {
    const { opts: v, self: w } = f;
    if (!v.strictSchema || typeof l == "boolean")
      return;
    const L = w.RULES.keywords;
    for (const j in l)
      L[j] || d(f, `unknown keyword: "${j}"`);
  }
  K.checkUnknownRules = E;
  function o(f, l) {
    if (typeof f == "boolean")
      return !f;
    for (const v in f)
      if (l[v])
        return !0;
    return !1;
  }
  K.schemaHasRules = o;
  function m(f, l) {
    if (typeof f == "boolean")
      return !f;
    for (const v in f)
      if (v !== "$ref" && l.all[v])
        return !0;
    return !1;
  }
  K.schemaHasRulesButRef = m;
  function u({ topSchemaRef: f, schemaPath: l }, v, w, L) {
    if (!L) {
      if (typeof v == "number" || typeof v == "boolean")
        return v;
      if (typeof v == "string")
        return (0, e._)`${v}`;
    }
    return (0, e._)`${f}${l}${(0, e.getProperty)(w)}`;
  }
  K.schemaRefOrVal = u;
  function p(f) {
    return T(decodeURIComponent(f));
  }
  K.unescapeFragment = p;
  function g(f) {
    return encodeURIComponent(_(f));
  }
  K.escapeFragment = g;
  function _(f) {
    return typeof f == "number" ? `${f}` : f.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  K.escapeJsonPointer = _;
  function T(f) {
    return f.replace(/~1/g, "/").replace(/~0/g, "~");
  }
  K.unescapeJsonPointer = T;
  function P(f, l) {
    if (Array.isArray(f))
      for (const v of f)
        l(v);
    else
      l(f);
  }
  K.eachItem = P;
  function S({ mergeNames: f, mergeToName: l, mergeValues: v, resultToName: w }) {
    return (L, j, U, H) => {
      const G = U === void 0 ? j : U instanceof e.Name ? (j instanceof e.Name ? f(L, j, U) : l(L, j, U), U) : j instanceof e.Name ? (l(L, U, j), j) : v(j, U);
      return H === e.Name && !(G instanceof e.Name) ? w(L, G) : G;
    };
  }
  K.mergeEvaluated = {
    props: S({
      mergeNames: (f, l, v) => f.if((0, e._)`${v} !== true && ${l} !== undefined`, () => {
        f.if((0, e._)`${l} === true`, () => f.assign(v, !0), () => f.assign(v, (0, e._)`${v} || {}`).code((0, e._)`Object.assign(${v}, ${l})`));
      }),
      mergeToName: (f, l, v) => f.if((0, e._)`${v} !== true`, () => {
        l === !0 ? f.assign(v, !0) : (f.assign(v, (0, e._)`${v} || {}`), h(f, v, l));
      }),
      mergeValues: (f, l) => f === !0 ? !0 : { ...f, ...l },
      resultToName: R
    }),
    items: S({
      mergeNames: (f, l, v) => f.if((0, e._)`${v} !== true && ${l} !== undefined`, () => f.assign(v, (0, e._)`${l} === true ? true : ${v} > ${l} ? ${v} : ${l}`)),
      mergeToName: (f, l, v) => f.if((0, e._)`${v} !== true`, () => f.assign(v, l === !0 ? !0 : (0, e._)`${v} > ${l} ? ${v} : ${l}`)),
      mergeValues: (f, l) => f === !0 ? !0 : Math.max(f, l),
      resultToName: (f, l) => f.var("items", l)
    })
  };
  function R(f, l) {
    if (l === !0)
      return f.var("props", !0);
    const v = f.var("props", (0, e._)`{}`);
    return l !== void 0 && h(f, v, l), v;
  }
  K.evaluatedPropsToName = R;
  function h(f, l, v) {
    Object.keys(v).forEach((w) => f.assign((0, e._)`${l}${(0, e.getProperty)(w)}`, !0));
  }
  K.setEvaluated = h;
  const a = {};
  function s(f, l) {
    return f.scopeValue("func", {
      ref: l,
      code: a[l.code] || (a[l.code] = new r._Code(l.code))
    });
  }
  K.useFunc = s;
  var t;
  (function(f) {
    f[f.Num = 0] = "Num", f[f.Str = 1] = "Str";
  })(t || (K.Type = t = {}));
  function n(f, l, v) {
    if (f instanceof e.Name) {
      const w = l === t.Num;
      return v ? w ? (0, e._)`"[" + ${f} + "]"` : (0, e._)`"['" + ${f} + "']"` : w ? (0, e._)`"/" + ${f}` : (0, e._)`"/" + ${f}.replace(/~/g, "~0").replace(/\\//g, "~1")`;
    }
    return v ? (0, e.getProperty)(f).toString() : "/" + _(f);
  }
  K.getErrorPath = n;
  function d(f, l, v = f.opts.strictSchema) {
    if (v) {
      if (l = `strict mode: ${l}`, v === !0)
        throw new Error(l);
      f.self.logger.warn(l);
    }
  }
  return K.checkStrictMode = d, K;
}
var He = {}, gr;
function $e() {
  if (gr) return He;
  gr = 1, Object.defineProperty(He, "__esModule", { value: !0 });
  const e = z(), r = {
    // validation function arguments
    data: new e.Name("data"),
    // data passed to validation function
    // args passed from referencing schema
    valCxt: new e.Name("valCxt"),
    // validation/data context - should not be used directly, it is destructured to the names below
    instancePath: new e.Name("instancePath"),
    parentData: new e.Name("parentData"),
    parentDataProperty: new e.Name("parentDataProperty"),
    rootData: new e.Name("rootData"),
    // root data - same as the data passed to the first/top validation function
    dynamicAnchors: new e.Name("dynamicAnchors"),
    // used to support recursiveRef and dynamicRef
    // function scoped variables
    vErrors: new e.Name("vErrors"),
    // null or array of validation errors
    errors: new e.Name("errors"),
    // counter of validation errors
    this: new e.Name("this"),
    // "globals"
    self: new e.Name("self"),
    scope: new e.Name("scope"),
    // JTD serialize/parse name for JSON string and position
    json: new e.Name("json"),
    jsonPos: new e.Name("jsonPos"),
    jsonLen: new e.Name("jsonLen"),
    jsonPart: new e.Name("jsonPart")
  };
  return He.default = r, He;
}
var vr;
function bt() {
  return vr || (vr = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.extendErrors = e.resetErrorsCount = e.reportExtraError = e.reportError = e.keyword$DataError = e.keywordError = void 0;
    const r = z(), y = X(), c = $e();
    e.keywordError = {
      message: ({ keyword: a }) => (0, r.str)`must pass "${a}" keyword validation`
    }, e.keyword$DataError = {
      message: ({ keyword: a, schemaType: s }) => s ? (0, r.str)`"${a}" keyword must be ${s} ($data)` : (0, r.str)`"${a}" keyword is invalid ($data)`
    };
    function E(a, s = e.keywordError, t, n) {
      const { it: d } = a, { gen: f, compositeRule: l, allErrors: v } = d, w = T(a, s, t);
      n ?? (l || v) ? p(f, w) : g(d, (0, r._)`[${w}]`);
    }
    e.reportError = E;
    function o(a, s = e.keywordError, t) {
      const { it: n } = a, { gen: d, compositeRule: f, allErrors: l } = n, v = T(a, s, t);
      p(d, v), f || l || g(n, c.default.vErrors);
    }
    e.reportExtraError = o;
    function m(a, s) {
      a.assign(c.default.errors, s), a.if((0, r._)`${c.default.vErrors} !== null`, () => a.if(s, () => a.assign((0, r._)`${c.default.vErrors}.length`, s), () => a.assign(c.default.vErrors, null)));
    }
    e.resetErrorsCount = m;
    function u({ gen: a, keyword: s, schemaValue: t, data: n, errsCount: d, it: f }) {
      if (d === void 0)
        throw new Error("ajv implementation error");
      const l = a.name("err");
      a.forRange("i", d, c.default.errors, (v) => {
        a.const(l, (0, r._)`${c.default.vErrors}[${v}]`), a.if((0, r._)`${l}.instancePath === undefined`, () => a.assign((0, r._)`${l}.instancePath`, (0, r.strConcat)(c.default.instancePath, f.errorPath))), a.assign((0, r._)`${l}.schemaPath`, (0, r.str)`${f.errSchemaPath}/${s}`), f.opts.verbose && (a.assign((0, r._)`${l}.schema`, t), a.assign((0, r._)`${l}.data`, n));
      });
    }
    e.extendErrors = u;
    function p(a, s) {
      const t = a.const("err", s);
      a.if((0, r._)`${c.default.vErrors} === null`, () => a.assign(c.default.vErrors, (0, r._)`[${t}]`), (0, r._)`${c.default.vErrors}.push(${t})`), a.code((0, r._)`${c.default.errors}++`);
    }
    function g(a, s) {
      const { gen: t, validateName: n, schemaEnv: d } = a;
      d.$async ? t.throw((0, r._)`new ${a.ValidationError}(${s})`) : (t.assign((0, r._)`${n}.errors`, s), t.return(!1));
    }
    const _ = {
      keyword: new r.Name("keyword"),
      schemaPath: new r.Name("schemaPath"),
      // also used in JTD errors
      params: new r.Name("params"),
      propertyName: new r.Name("propertyName"),
      message: new r.Name("message"),
      schema: new r.Name("schema"),
      parentSchema: new r.Name("parentSchema")
    };
    function T(a, s, t) {
      const { createErrors: n } = a.it;
      return n === !1 ? (0, r._)`{}` : P(a, s, t);
    }
    function P(a, s, t = {}) {
      const { gen: n, it: d } = a, f = [
        S(d, t),
        R(a, t)
      ];
      return h(a, s, f), n.object(...f);
    }
    function S({ errorPath: a }, { instancePath: s }) {
      const t = s ? (0, r.str)`${a}${(0, y.getErrorPath)(s, y.Type.Str)}` : a;
      return [c.default.instancePath, (0, r.strConcat)(c.default.instancePath, t)];
    }
    function R({ keyword: a, it: { errSchemaPath: s } }, { schemaPath: t, parentSchema: n }) {
      let d = n ? s : (0, r.str)`${s}/${a}`;
      return t && (d = (0, r.str)`${d}${(0, y.getErrorPath)(t, y.Type.Str)}`), [_.schemaPath, d];
    }
    function h(a, { params: s, message: t }, n) {
      const { keyword: d, data: f, schemaValue: l, it: v } = a, { opts: w, propertyName: L, topSchemaRef: j, schemaPath: U } = v;
      n.push([_.keyword, d], [_.params, typeof s == "function" ? s(a) : s || (0, r._)`{}`]), w.messages && n.push([_.message, typeof t == "function" ? t(a) : t]), w.verbose && n.push([_.schema, l], [_.parentSchema, (0, r._)`${j}${U}`], [c.default.data, f]), L && n.push([_.propertyName, L]);
    }
  }(Vt)), Vt;
}
var Ar;
function pa() {
  if (Ar) return Pe;
  Ar = 1, Object.defineProperty(Pe, "__esModule", { value: !0 }), Pe.boolOrEmptySchema = Pe.topBoolOrEmptySchema = void 0;
  const e = bt(), r = z(), y = $e(), c = {
    message: "boolean schema is false"
  };
  function E(u) {
    const { gen: p, schema: g, validateName: _ } = u;
    g === !1 ? m(u, !1) : typeof g == "object" && g.$async === !0 ? p.return(y.default.data) : (p.assign((0, r._)`${_}.errors`, null), p.return(!0));
  }
  Pe.topBoolOrEmptySchema = E;
  function o(u, p) {
    const { gen: g, schema: _ } = u;
    _ === !1 ? (g.var(p, !1), m(u)) : g.var(p, !0);
  }
  Pe.boolOrEmptySchema = o;
  function m(u, p) {
    const { gen: g, data: _ } = u, T = {
      gen: g,
      keyword: "false schema",
      data: _,
      schema: !1,
      schemaCode: !1,
      schemaValue: !1,
      params: {},
      it: u
    };
    (0, e.reportError)(T, c, void 0, p);
  }
  return Pe;
}
var se = {}, Ie = {}, Rr;
function Gn() {
  if (Rr) return Ie;
  Rr = 1, Object.defineProperty(Ie, "__esModule", { value: !0 }), Ie.getRules = Ie.isJSONType = void 0;
  const e = ["string", "number", "integer", "boolean", "null", "object", "array"], r = new Set(e);
  function y(E) {
    return typeof E == "string" && r.has(E);
  }
  Ie.isJSONType = y;
  function c() {
    const E = {
      number: { type: "number", rules: [] },
      string: { type: "string", rules: [] },
      array: { type: "array", rules: [] },
      object: { type: "object", rules: [] }
    };
    return {
      types: { ...E, integer: !0, boolean: !0, null: !0 },
      rules: [{ rules: [] }, E.number, E.string, E.array, E.object],
      post: { rules: [] },
      all: {},
      keywords: {}
    };
  }
  return Ie.getRules = c, Ie;
}
var ge = {}, Tr;
function Hn() {
  if (Tr) return ge;
  Tr = 1, Object.defineProperty(ge, "__esModule", { value: !0 }), ge.shouldUseRule = ge.shouldUseGroup = ge.schemaHasRulesForType = void 0;
  function e({ schema: c, self: E }, o) {
    const m = E.RULES.types[o];
    return m && m !== !0 && r(c, m);
  }
  ge.schemaHasRulesForType = e;
  function r(c, E) {
    return E.rules.some((o) => y(c, o));
  }
  ge.shouldUseGroup = r;
  function y(c, E) {
    var o;
    return c[E.keyword] !== void 0 || ((o = E.definition.implements) === null || o === void 0 ? void 0 : o.some((m) => c[m] !== void 0));
  }
  return ge.shouldUseRule = y, ge;
}
var $r;
function It() {
  if ($r) return se;
  $r = 1, Object.defineProperty(se, "__esModule", { value: !0 }), se.reportTypeError = se.checkDataTypes = se.checkDataType = se.coerceAndCheckDataType = se.getJSONTypes = se.getSchemaTypes = se.DataType = void 0;
  const e = Gn(), r = Hn(), y = bt(), c = z(), E = X();
  var o;
  (function(t) {
    t[t.Correct = 0] = "Correct", t[t.Wrong = 1] = "Wrong";
  })(o || (se.DataType = o = {}));
  function m(t) {
    const n = u(t.type);
    if (n.includes("null")) {
      if (t.nullable === !1)
        throw new Error("type: null contradicts nullable: false");
    } else {
      if (!n.length && t.nullable !== void 0)
        throw new Error('"nullable" cannot be used without "type"');
      t.nullable === !0 && n.push("null");
    }
    return n;
  }
  se.getSchemaTypes = m;
  function u(t) {
    const n = Array.isArray(t) ? t : t ? [t] : [];
    if (n.every(e.isJSONType))
      return n;
    throw new Error("type must be JSONType or JSONType[]: " + n.join(","));
  }
  se.getJSONTypes = u;
  function p(t, n) {
    const { gen: d, data: f, opts: l } = t, v = _(n, l.coerceTypes), w = n.length > 0 && !(v.length === 0 && n.length === 1 && (0, r.schemaHasRulesForType)(t, n[0]));
    if (w) {
      const L = R(n, f, l.strictNumbers, o.Wrong);
      d.if(L, () => {
        v.length ? T(t, n, v) : a(t);
      });
    }
    return w;
  }
  se.coerceAndCheckDataType = p;
  const g = /* @__PURE__ */ new Set(["string", "number", "integer", "boolean", "null"]);
  function _(t, n) {
    return n ? t.filter((d) => g.has(d) || n === "array" && d === "array") : [];
  }
  function T(t, n, d) {
    const { gen: f, data: l, opts: v } = t, w = f.let("dataType", (0, c._)`typeof ${l}`), L = f.let("coerced", (0, c._)`undefined`);
    v.coerceTypes === "array" && f.if((0, c._)`${w} == 'object' && Array.isArray(${l}) && ${l}.length == 1`, () => f.assign(l, (0, c._)`${l}[0]`).assign(w, (0, c._)`typeof ${l}`).if(R(n, l, v.strictNumbers), () => f.assign(L, l))), f.if((0, c._)`${L} !== undefined`);
    for (const U of d)
      (g.has(U) || U === "array" && v.coerceTypes === "array") && j(U);
    f.else(), a(t), f.endIf(), f.if((0, c._)`${L} !== undefined`, () => {
      f.assign(l, L), P(t, L);
    });
    function j(U) {
      switch (U) {
        case "string":
          f.elseIf((0, c._)`${w} == "number" || ${w} == "boolean"`).assign(L, (0, c._)`"" + ${l}`).elseIf((0, c._)`${l} === null`).assign(L, (0, c._)`""`);
          return;
        case "number":
          f.elseIf((0, c._)`${w} == "boolean" || ${l} === null
              || (${w} == "string" && ${l} && ${l} == +${l})`).assign(L, (0, c._)`+${l}`);
          return;
        case "integer":
          f.elseIf((0, c._)`${w} === "boolean" || ${l} === null
              || (${w} === "string" && ${l} && ${l} == +${l} && !(${l} % 1))`).assign(L, (0, c._)`+${l}`);
          return;
        case "boolean":
          f.elseIf((0, c._)`${l} === "false" || ${l} === 0 || ${l} === null`).assign(L, !1).elseIf((0, c._)`${l} === "true" || ${l} === 1`).assign(L, !0);
          return;
        case "null":
          f.elseIf((0, c._)`${l} === "" || ${l} === 0 || ${l} === false`), f.assign(L, null);
          return;
        case "array":
          f.elseIf((0, c._)`${w} === "string" || ${w} === "number"
              || ${w} === "boolean" || ${l} === null`).assign(L, (0, c._)`[${l}]`);
      }
    }
  }
  function P({ gen: t, parentData: n, parentDataProperty: d }, f) {
    t.if((0, c._)`${n} !== undefined`, () => t.assign((0, c._)`${n}[${d}]`, f));
  }
  function S(t, n, d, f = o.Correct) {
    const l = f === o.Correct ? c.operators.EQ : c.operators.NEQ;
    let v;
    switch (t) {
      case "null":
        return (0, c._)`${n} ${l} null`;
      case "array":
        v = (0, c._)`Array.isArray(${n})`;
        break;
      case "object":
        v = (0, c._)`${n} && typeof ${n} == "object" && !Array.isArray(${n})`;
        break;
      case "integer":
        v = w((0, c._)`!(${n} % 1) && !isNaN(${n})`);
        break;
      case "number":
        v = w();
        break;
      default:
        return (0, c._)`typeof ${n} ${l} ${t}`;
    }
    return f === o.Correct ? v : (0, c.not)(v);
    function w(L = c.nil) {
      return (0, c.and)((0, c._)`typeof ${n} == "number"`, L, d ? (0, c._)`isFinite(${n})` : c.nil);
    }
  }
  se.checkDataType = S;
  function R(t, n, d, f) {
    if (t.length === 1)
      return S(t[0], n, d, f);
    let l;
    const v = (0, E.toHash)(t);
    if (v.array && v.object) {
      const w = (0, c._)`typeof ${n} != "object"`;
      l = v.null ? w : (0, c._)`!${n} || ${w}`, delete v.null, delete v.array, delete v.object;
    } else
      l = c.nil;
    v.number && delete v.integer;
    for (const w in v)
      l = (0, c.and)(l, S(w, n, d, f));
    return l;
  }
  se.checkDataTypes = R;
  const h = {
    message: ({ schema: t }) => `must be ${t}`,
    params: ({ schema: t, schemaValue: n }) => typeof t == "string" ? (0, c._)`{type: ${t}}` : (0, c._)`{type: ${n}}`
  };
  function a(t) {
    const n = s(t);
    (0, y.reportError)(n, h);
  }
  se.reportTypeError = a;
  function s(t) {
    const { gen: n, data: d, schema: f } = t, l = (0, E.schemaRefOrVal)(t, f, "type");
    return {
      gen: n,
      keyword: "type",
      data: d,
      schema: f.type,
      schemaCode: l,
      schemaValue: l,
      parentSchema: f,
      params: {},
      it: t
    };
  }
  return se;
}
var qe = {}, Sr;
function ha() {
  if (Sr) return qe;
  Sr = 1, Object.defineProperty(qe, "__esModule", { value: !0 }), qe.assignDefaults = void 0;
  const e = z(), r = X();
  function y(E, o) {
    const { properties: m, items: u } = E.schema;
    if (o === "object" && m)
      for (const p in m)
        c(E, p, m[p].default);
    else o === "array" && Array.isArray(u) && u.forEach((p, g) => c(E, g, p.default));
  }
  qe.assignDefaults = y;
  function c(E, o, m) {
    const { gen: u, compositeRule: p, data: g, opts: _ } = E;
    if (m === void 0)
      return;
    const T = (0, e._)`${g}${(0, e.getProperty)(o)}`;
    if (p) {
      (0, r.checkStrictMode)(E, `default is ignored for: ${T}`);
      return;
    }
    let P = (0, e._)`${T} === undefined`;
    _.useDefaults === "empty" && (P = (0, e._)`${P} || ${T} === null || ${T} === ""`), u.if(P, (0, e._)`${T} = ${(0, e.stringify)(m)}`);
  }
  return qe;
}
var pe = {}, x = {}, Pr;
function he() {
  if (Pr) return x;
  Pr = 1, Object.defineProperty(x, "__esModule", { value: !0 }), x.validateUnion = x.validateArray = x.usePattern = x.callValidateCode = x.schemaProperties = x.allSchemaProperties = x.noPropertyInData = x.propertyInData = x.isOwnProperty = x.hasPropFunc = x.reportMissingProp = x.checkMissingProp = x.checkReportMissingProp = void 0;
  const e = z(), r = X(), y = $e(), c = X();
  function E(t, n) {
    const { gen: d, data: f, it: l } = t;
    d.if(_(d, f, n, l.opts.ownProperties), () => {
      t.setParams({ missingProperty: (0, e._)`${n}` }, !0), t.error();
    });
  }
  x.checkReportMissingProp = E;
  function o({ gen: t, data: n, it: { opts: d } }, f, l) {
    return (0, e.or)(...f.map((v) => (0, e.and)(_(t, n, v, d.ownProperties), (0, e._)`${l} = ${v}`)));
  }
  x.checkMissingProp = o;
  function m(t, n) {
    t.setParams({ missingProperty: n }, !0), t.error();
  }
  x.reportMissingProp = m;
  function u(t) {
    return t.scopeValue("func", {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      ref: Object.prototype.hasOwnProperty,
      code: (0, e._)`Object.prototype.hasOwnProperty`
    });
  }
  x.hasPropFunc = u;
  function p(t, n, d) {
    return (0, e._)`${u(t)}.call(${n}, ${d})`;
  }
  x.isOwnProperty = p;
  function g(t, n, d, f) {
    const l = (0, e._)`${n}${(0, e.getProperty)(d)} !== undefined`;
    return f ? (0, e._)`${l} && ${p(t, n, d)}` : l;
  }
  x.propertyInData = g;
  function _(t, n, d, f) {
    const l = (0, e._)`${n}${(0, e.getProperty)(d)} === undefined`;
    return f ? (0, e.or)(l, (0, e.not)(p(t, n, d))) : l;
  }
  x.noPropertyInData = _;
  function T(t) {
    return t ? Object.keys(t).filter((n) => n !== "__proto__") : [];
  }
  x.allSchemaProperties = T;
  function P(t, n) {
    return T(n).filter((d) => !(0, r.alwaysValidSchema)(t, n[d]));
  }
  x.schemaProperties = P;
  function S({ schemaCode: t, data: n, it: { gen: d, topSchemaRef: f, schemaPath: l, errorPath: v }, it: w }, L, j, U) {
    const H = U ? (0, e._)`${t}, ${n}, ${f}${l}` : n, G = [
      [y.default.instancePath, (0, e.strConcat)(y.default.instancePath, v)],
      [y.default.parentData, w.parentData],
      [y.default.parentDataProperty, w.parentDataProperty],
      [y.default.rootData, y.default.rootData]
    ];
    w.opts.dynamicRef && G.push([y.default.dynamicAnchors, y.default.dynamicAnchors]);
    const W = (0, e._)`${H}, ${d.object(...G)}`;
    return j !== e.nil ? (0, e._)`${L}.call(${j}, ${W})` : (0, e._)`${L}(${W})`;
  }
  x.callValidateCode = S;
  const R = (0, e._)`new RegExp`;
  function h({ gen: t, it: { opts: n } }, d) {
    const f = n.unicodeRegExp ? "u" : "", { regExp: l } = n.code, v = l(d, f);
    return t.scopeValue("pattern", {
      key: v.toString(),
      ref: v,
      code: (0, e._)`${l.code === "new RegExp" ? R : (0, c.useFunc)(t, l)}(${d}, ${f})`
    });
  }
  x.usePattern = h;
  function a(t) {
    const { gen: n, data: d, keyword: f, it: l } = t, v = n.name("valid");
    if (l.allErrors) {
      const L = n.let("valid", !0);
      return w(() => n.assign(L, !1)), L;
    }
    return n.var(v, !0), w(() => n.break()), v;
    function w(L) {
      const j = n.const("len", (0, e._)`${d}.length`);
      n.forRange("i", 0, j, (U) => {
        t.subschema({
          keyword: f,
          dataProp: U,
          dataPropType: r.Type.Num
        }, v), n.if((0, e.not)(v), L);
      });
    }
  }
  x.validateArray = a;
  function s(t) {
    const { gen: n, schema: d, keyword: f, it: l } = t;
    if (!Array.isArray(d))
      throw new Error("ajv implementation error");
    if (d.some((j) => (0, r.alwaysValidSchema)(l, j)) && !l.opts.unevaluated)
      return;
    const w = n.let("valid", !1), L = n.name("_valid");
    n.block(() => d.forEach((j, U) => {
      const H = t.subschema({
        keyword: f,
        schemaProp: U,
        compositeRule: !0
      }, L);
      n.assign(w, (0, e._)`${w} || ${L}`), t.mergeValidEvaluated(H, L) || n.if((0, e.not)(w));
    })), t.result(w, () => t.reset(), () => t.error(!0));
  }
  return x.validateUnion = s, x;
}
var Ir;
function _a() {
  if (Ir) return pe;
  Ir = 1, Object.defineProperty(pe, "__esModule", { value: !0 }), pe.validateKeywordUsage = pe.validSchemaType = pe.funcKeywordCode = pe.macroKeywordCode = void 0;
  const e = z(), r = $e(), y = he(), c = bt();
  function E(P, S) {
    const { gen: R, keyword: h, schema: a, parentSchema: s, it: t } = P, n = S.macro.call(t.self, a, s, t), d = g(R, h, n);
    t.opts.validateSchema !== !1 && t.self.validateSchema(n, !0);
    const f = R.name("valid");
    P.subschema({
      schema: n,
      schemaPath: e.nil,
      errSchemaPath: `${t.errSchemaPath}/${h}`,
      topSchemaRef: d,
      compositeRule: !0
    }, f), P.pass(f, () => P.error(!0));
  }
  pe.macroKeywordCode = E;
  function o(P, S) {
    var R;
    const { gen: h, keyword: a, schema: s, parentSchema: t, $data: n, it: d } = P;
    p(d, S);
    const f = !n && S.compile ? S.compile.call(d.self, s, t, d) : S.validate, l = g(h, a, f), v = h.let("valid");
    P.block$data(v, w), P.ok((R = S.valid) !== null && R !== void 0 ? R : v);
    function w() {
      if (S.errors === !1)
        U(), S.modifying && m(P), H(() => P.error());
      else {
        const G = S.async ? L() : j();
        S.modifying && m(P), H(() => u(P, G));
      }
    }
    function L() {
      const G = h.let("ruleErrs", null);
      return h.try(() => U((0, e._)`await `), (W) => h.assign(v, !1).if((0, e._)`${W} instanceof ${d.ValidationError}`, () => h.assign(G, (0, e._)`${W}.errors`), () => h.throw(W))), G;
    }
    function j() {
      const G = (0, e._)`${l}.errors`;
      return h.assign(G, null), U(e.nil), G;
    }
    function U(G = S.async ? (0, e._)`await ` : e.nil) {
      const W = d.opts.passContext ? r.default.this : r.default.self, te = !("compile" in S && !n || S.schema === !1);
      h.assign(v, (0, e._)`${G}${(0, y.callValidateCode)(P, l, W, te)}`, S.modifying);
    }
    function H(G) {
      var W;
      h.if((0, e.not)((W = S.valid) !== null && W !== void 0 ? W : v), G);
    }
  }
  pe.funcKeywordCode = o;
  function m(P) {
    const { gen: S, data: R, it: h } = P;
    S.if(h.parentData, () => S.assign(R, (0, e._)`${h.parentData}[${h.parentDataProperty}]`));
  }
  function u(P, S) {
    const { gen: R } = P;
    R.if((0, e._)`Array.isArray(${S})`, () => {
      R.assign(r.default.vErrors, (0, e._)`${r.default.vErrors} === null ? ${S} : ${r.default.vErrors}.concat(${S})`).assign(r.default.errors, (0, e._)`${r.default.vErrors}.length`), (0, c.extendErrors)(P);
    }, () => P.error());
  }
  function p({ schemaEnv: P }, S) {
    if (S.async && !P.$async)
      throw new Error("async keyword in sync schema");
  }
  function g(P, S, R) {
    if (R === void 0)
      throw new Error(`keyword "${S}" failed to compile`);
    return P.scopeValue("keyword", typeof R == "function" ? { ref: R } : { ref: R, code: (0, e.stringify)(R) });
  }
  function _(P, S, R = !1) {
    return !S.length || S.some((h) => h === "array" ? Array.isArray(P) : h === "object" ? P && typeof P == "object" && !Array.isArray(P) : typeof P == h || R && typeof P > "u");
  }
  pe.validSchemaType = _;
  function T({ schema: P, opts: S, self: R, errSchemaPath: h }, a, s) {
    if (Array.isArray(a.keyword) ? !a.keyword.includes(s) : a.keyword !== s)
      throw new Error("ajv implementation error");
    const t = a.dependencies;
    if (t != null && t.some((n) => !Object.prototype.hasOwnProperty.call(P, n)))
      throw new Error(`parent schema must have dependencies of ${s}: ${t.join(",")}`);
    if (a.validateSchema && !a.validateSchema(P[s])) {
      const d = `keyword "${s}" value is invalid at path "${h}": ` + R.errorsText(a.validateSchema.errors);
      if (S.validateSchema === "log")
        R.logger.error(d);
      else
        throw new Error(d);
    }
  }
  return pe.validateKeywordUsage = T, pe;
}
var ve = {}, Nr;
function ya() {
  if (Nr) return ve;
  Nr = 1, Object.defineProperty(ve, "__esModule", { value: !0 }), ve.extendSubschemaMode = ve.extendSubschemaData = ve.getSubschema = void 0;
  const e = z(), r = X();
  function y(o, { keyword: m, schemaProp: u, schema: p, schemaPath: g, errSchemaPath: _, topSchemaRef: T }) {
    if (m !== void 0 && p !== void 0)
      throw new Error('both "keyword" and "schema" passed, only one allowed');
    if (m !== void 0) {
      const P = o.schema[m];
      return u === void 0 ? {
        schema: P,
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(m)}`,
        errSchemaPath: `${o.errSchemaPath}/${m}`
      } : {
        schema: P[u],
        schemaPath: (0, e._)`${o.schemaPath}${(0, e.getProperty)(m)}${(0, e.getProperty)(u)}`,
        errSchemaPath: `${o.errSchemaPath}/${m}/${(0, r.escapeFragment)(u)}`
      };
    }
    if (p !== void 0) {
      if (g === void 0 || _ === void 0 || T === void 0)
        throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');
      return {
        schema: p,
        schemaPath: g,
        topSchemaRef: T,
        errSchemaPath: _
      };
    }
    throw new Error('either "keyword" or "schema" must be passed');
  }
  ve.getSubschema = y;
  function c(o, m, { dataProp: u, dataPropType: p, data: g, dataTypes: _, propertyName: T }) {
    if (g !== void 0 && u !== void 0)
      throw new Error('both "data" and "dataProp" passed, only one allowed');
    const { gen: P } = m;
    if (u !== void 0) {
      const { errorPath: R, dataPathArr: h, opts: a } = m, s = P.let("data", (0, e._)`${m.data}${(0, e.getProperty)(u)}`, !0);
      S(s), o.errorPath = (0, e.str)`${R}${(0, r.getErrorPath)(u, p, a.jsPropertySyntax)}`, o.parentDataProperty = (0, e._)`${u}`, o.dataPathArr = [...h, o.parentDataProperty];
    }
    if (g !== void 0) {
      const R = g instanceof e.Name ? g : P.let("data", g, !0);
      S(R), T !== void 0 && (o.propertyName = T);
    }
    _ && (o.dataTypes = _);
    function S(R) {
      o.data = R, o.dataLevel = m.dataLevel + 1, o.dataTypes = [], m.definedProperties = /* @__PURE__ */ new Set(), o.parentData = m.data, o.dataNames = [...m.dataNames, R];
    }
  }
  ve.extendSubschemaData = c;
  function E(o, { jtdDiscriminator: m, jtdMetadata: u, compositeRule: p, createErrors: g, allErrors: _ }) {
    p !== void 0 && (o.compositeRule = p), g !== void 0 && (o.createErrors = g), _ !== void 0 && (o.allErrors = _), o.jtdDiscriminator = m, o.jtdMetadata = u;
  }
  return ve.extendSubschemaMode = E, ve;
}
var oe = {}, Bt, Or;
function Kn() {
  return Or || (Or = 1, Bt = function e(r, y) {
    if (r === y) return !0;
    if (r && y && typeof r == "object" && typeof y == "object") {
      if (r.constructor !== y.constructor) return !1;
      var c, E, o;
      if (Array.isArray(r)) {
        if (c = r.length, c != y.length) return !1;
        for (E = c; E-- !== 0; )
          if (!e(r[E], y[E])) return !1;
        return !0;
      }
      if (r.constructor === RegExp) return r.source === y.source && r.flags === y.flags;
      if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === y.valueOf();
      if (r.toString !== Object.prototype.toString) return r.toString() === y.toString();
      if (o = Object.keys(r), c = o.length, c !== Object.keys(y).length) return !1;
      for (E = c; E-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(y, o[E])) return !1;
      for (E = c; E-- !== 0; ) {
        var m = o[E];
        if (!e(r[m], y[m])) return !1;
      }
      return !0;
    }
    return r !== r && y !== y;
  }), Bt;
}
var zt = { exports: {} }, wr;
function Ea() {
  if (wr) return zt.exports;
  wr = 1;
  var e = zt.exports = function(c, E, o) {
    typeof E == "function" && (o = E, E = {}), o = E.cb || o;
    var m = typeof o == "function" ? o : o.pre || function() {
    }, u = o.post || function() {
    };
    r(E, m, u, c, "", c);
  };
  e.keywords = {
    additionalItems: !0,
    items: !0,
    contains: !0,
    additionalProperties: !0,
    propertyNames: !0,
    not: !0,
    if: !0,
    then: !0,
    else: !0
  }, e.arrayKeywords = {
    items: !0,
    allOf: !0,
    anyOf: !0,
    oneOf: !0
  }, e.propsKeywords = {
    $defs: !0,
    definitions: !0,
    properties: !0,
    patternProperties: !0,
    dependencies: !0
  }, e.skipKeywords = {
    default: !0,
    enum: !0,
    const: !0,
    required: !0,
    maximum: !0,
    minimum: !0,
    exclusiveMaximum: !0,
    exclusiveMinimum: !0,
    multipleOf: !0,
    maxLength: !0,
    minLength: !0,
    pattern: !0,
    format: !0,
    maxItems: !0,
    minItems: !0,
    uniqueItems: !0,
    maxProperties: !0,
    minProperties: !0
  };
  function r(c, E, o, m, u, p, g, _, T, P) {
    if (m && typeof m == "object" && !Array.isArray(m)) {
      E(m, u, p, g, _, T, P);
      for (var S in m) {
        var R = m[S];
        if (Array.isArray(R)) {
          if (S in e.arrayKeywords)
            for (var h = 0; h < R.length; h++)
              r(c, E, o, R[h], u + "/" + S + "/" + h, p, u, S, m, h);
        } else if (S in e.propsKeywords) {
          if (R && typeof R == "object")
            for (var a in R)
              r(c, E, o, R[a], u + "/" + S + "/" + y(a), p, u, S, m, a);
        } else (S in e.keywords || c.allKeys && !(S in e.skipKeywords)) && r(c, E, o, R, u + "/" + S, p, u, S, m);
      }
      o(m, u, p, g, _, T, P);
    }
  }
  function y(c) {
    return c.replace(/~/g, "~0").replace(/\//g, "~1");
  }
  return zt.exports;
}
var br;
function Ct() {
  if (br) return oe;
  br = 1, Object.defineProperty(oe, "__esModule", { value: !0 }), oe.getSchemaRefs = oe.resolveUrl = oe.normalizeId = oe._getFullPath = oe.getFullPath = oe.inlineRef = void 0;
  const e = X(), r = Kn(), y = Ea(), c = /* @__PURE__ */ new Set([
    "type",
    "format",
    "pattern",
    "maxLength",
    "minLength",
    "maxProperties",
    "minProperties",
    "maxItems",
    "minItems",
    "maximum",
    "minimum",
    "uniqueItems",
    "multipleOf",
    "required",
    "enum",
    "const"
  ]);
  function E(h, a = !0) {
    return typeof h == "boolean" ? !0 : a === !0 ? !m(h) : a ? u(h) <= a : !1;
  }
  oe.inlineRef = E;
  const o = /* @__PURE__ */ new Set([
    "$ref",
    "$recursiveRef",
    "$recursiveAnchor",
    "$dynamicRef",
    "$dynamicAnchor"
  ]);
  function m(h) {
    for (const a in h) {
      if (o.has(a))
        return !0;
      const s = h[a];
      if (Array.isArray(s) && s.some(m) || typeof s == "object" && m(s))
        return !0;
    }
    return !1;
  }
  function u(h) {
    let a = 0;
    for (const s in h) {
      if (s === "$ref")
        return 1 / 0;
      if (a++, !c.has(s) && (typeof h[s] == "object" && (0, e.eachItem)(h[s], (t) => a += u(t)), a === 1 / 0))
        return 1 / 0;
    }
    return a;
  }
  function p(h, a = "", s) {
    s !== !1 && (a = T(a));
    const t = h.parse(a);
    return g(h, t);
  }
  oe.getFullPath = p;
  function g(h, a) {
    return h.serialize(a).split("#")[0] + "#";
  }
  oe._getFullPath = g;
  const _ = /#\/?$/;
  function T(h) {
    return h ? h.replace(_, "") : "";
  }
  oe.normalizeId = T;
  function P(h, a, s) {
    return s = T(s), h.resolve(a, s);
  }
  oe.resolveUrl = P;
  const S = /^[a-z_][-a-z0-9._]*$/i;
  function R(h, a) {
    if (typeof h == "boolean")
      return {};
    const { schemaId: s, uriResolver: t } = this.opts, n = T(h[s] || a), d = { "": n }, f = p(t, n, !1), l = {}, v = /* @__PURE__ */ new Set();
    return y(h, { allKeys: !0 }, (j, U, H, G) => {
      if (G === void 0)
        return;
      const W = f + U;
      let te = d[G];
      typeof j[s] == "string" && (te = _e.call(this, j[s])), ye.call(this, j.$anchor), ye.call(this, j.$dynamicAnchor), d[U] = te;
      function _e(Q) {
        const Re = this.opts.uriResolver.resolve;
        if (Q = T(te ? Re(te, Q) : Q), v.has(Q))
          throw L(Q);
        v.add(Q);
        let D = this.refs[Q];
        return typeof D == "string" && (D = this.refs[D]), typeof D == "object" ? w(j, D.schema, Q) : Q !== T(W) && (Q[0] === "#" ? (w(j, l[Q], Q), l[Q] = j) : this.refs[Q] = W), Q;
      }
      function ye(Q) {
        if (typeof Q == "string") {
          if (!S.test(Q))
            throw new Error(`invalid anchor "${Q}"`);
          _e.call(this, `#${Q}`);
        }
      }
    }), l;
    function w(j, U, H) {
      if (U !== void 0 && !r(j, U))
        throw L(H);
    }
    function L(j) {
      return new Error(`reference "${j}" resolves to more than one schema`);
    }
  }
  return oe.getSchemaRefs = R, oe;
}
var Cr;
function Mt() {
  if (Cr) return Ee;
  Cr = 1, Object.defineProperty(Ee, "__esModule", { value: !0 }), Ee.getData = Ee.KeywordCxt = Ee.validateFunctionCode = void 0;
  const e = pa(), r = It(), y = Hn(), c = It(), E = ha(), o = _a(), m = ya(), u = z(), p = $e(), g = Ct(), _ = X(), T = bt();
  function P($) {
    if (f($) && (v($), d($))) {
      a($);
      return;
    }
    S($, () => (0, e.topBoolOrEmptySchema)($));
  }
  Ee.validateFunctionCode = P;
  function S({ gen: $, validateName: N, schema: C, schemaEnv: k, opts: F }, B) {
    F.code.es5 ? $.func(N, (0, u._)`${p.default.data}, ${p.default.valCxt}`, k.$async, () => {
      $.code((0, u._)`"use strict"; ${t(C, F)}`), h($, F), $.code(B);
    }) : $.func(N, (0, u._)`${p.default.data}, ${R(F)}`, k.$async, () => $.code(t(C, F)).code(B));
  }
  function R($) {
    return (0, u._)`{${p.default.instancePath}="", ${p.default.parentData}, ${p.default.parentDataProperty}, ${p.default.rootData}=${p.default.data}${$.dynamicRef ? (0, u._)`, ${p.default.dynamicAnchors}={}` : u.nil}}={}`;
  }
  function h($, N) {
    $.if(p.default.valCxt, () => {
      $.var(p.default.instancePath, (0, u._)`${p.default.valCxt}.${p.default.instancePath}`), $.var(p.default.parentData, (0, u._)`${p.default.valCxt}.${p.default.parentData}`), $.var(p.default.parentDataProperty, (0, u._)`${p.default.valCxt}.${p.default.parentDataProperty}`), $.var(p.default.rootData, (0, u._)`${p.default.valCxt}.${p.default.rootData}`), N.dynamicRef && $.var(p.default.dynamicAnchors, (0, u._)`${p.default.valCxt}.${p.default.dynamicAnchors}`);
    }, () => {
      $.var(p.default.instancePath, (0, u._)`""`), $.var(p.default.parentData, (0, u._)`undefined`), $.var(p.default.parentDataProperty, (0, u._)`undefined`), $.var(p.default.rootData, p.default.data), N.dynamicRef && $.var(p.default.dynamicAnchors, (0, u._)`{}`);
    });
  }
  function a($) {
    const { schema: N, opts: C, gen: k } = $;
    S($, () => {
      C.$comment && N.$comment && G($), j($), k.let(p.default.vErrors, null), k.let(p.default.errors, 0), C.unevaluated && s($), w($), W($);
    });
  }
  function s($) {
    const { gen: N, validateName: C } = $;
    $.evaluated = N.const("evaluated", (0, u._)`${C}.evaluated`), N.if((0, u._)`${$.evaluated}.dynamicProps`, () => N.assign((0, u._)`${$.evaluated}.props`, (0, u._)`undefined`)), N.if((0, u._)`${$.evaluated}.dynamicItems`, () => N.assign((0, u._)`${$.evaluated}.items`, (0, u._)`undefined`));
  }
  function t($, N) {
    const C = typeof $ == "object" && $[N.schemaId];
    return C && (N.code.source || N.code.process) ? (0, u._)`/*# sourceURL=${C} */` : u.nil;
  }
  function n($, N) {
    if (f($) && (v($), d($))) {
      l($, N);
      return;
    }
    (0, e.boolOrEmptySchema)($, N);
  }
  function d({ schema: $, self: N }) {
    if (typeof $ == "boolean")
      return !$;
    for (const C in $)
      if (N.RULES.all[C])
        return !0;
    return !1;
  }
  function f($) {
    return typeof $.schema != "boolean";
  }
  function l($, N) {
    const { schema: C, gen: k, opts: F } = $;
    F.$comment && C.$comment && G($), U($), H($);
    const B = k.const("_errs", p.default.errors);
    w($, B), k.var(N, (0, u._)`${B} === ${p.default.errors}`);
  }
  function v($) {
    (0, _.checkUnknownRules)($), L($);
  }
  function w($, N) {
    if ($.opts.jtd)
      return _e($, [], !1, N);
    const C = (0, r.getSchemaTypes)($.schema), k = (0, r.coerceAndCheckDataType)($, C);
    _e($, C, !k, N);
  }
  function L($) {
    const { schema: N, errSchemaPath: C, opts: k, self: F } = $;
    N.$ref && k.ignoreKeywordsWithRef && (0, _.schemaHasRulesButRef)(N, F.RULES) && F.logger.warn(`$ref: keywords ignored in schema at path "${C}"`);
  }
  function j($) {
    const { schema: N, opts: C } = $;
    N.default !== void 0 && C.useDefaults && C.strictSchema && (0, _.checkStrictMode)($, "default is ignored in the schema root");
  }
  function U($) {
    const N = $.schema[$.opts.schemaId];
    N && ($.baseId = (0, g.resolveUrl)($.opts.uriResolver, $.baseId, N));
  }
  function H($) {
    if ($.schema.$async && !$.schemaEnv.$async)
      throw new Error("async schema in sync schema");
  }
  function G({ gen: $, schemaEnv: N, schema: C, errSchemaPath: k, opts: F }) {
    const B = C.$comment;
    if (F.$comment === !0)
      $.code((0, u._)`${p.default.self}.logger.log(${B})`);
    else if (typeof F.$comment == "function") {
      const re = (0, u.str)`${k}/$comment`, me = $.scopeValue("root", { ref: N.root });
      $.code((0, u._)`${p.default.self}.opts.$comment(${B}, ${re}, ${me}.schema)`);
    }
  }
  function W($) {
    const { gen: N, schemaEnv: C, validateName: k, ValidationError: F, opts: B } = $;
    C.$async ? N.if((0, u._)`${p.default.errors} === 0`, () => N.return(p.default.data), () => N.throw((0, u._)`new ${F}(${p.default.vErrors})`)) : (N.assign((0, u._)`${k}.errors`, p.default.vErrors), B.unevaluated && te($), N.return((0, u._)`${p.default.errors} === 0`));
  }
  function te({ gen: $, evaluated: N, props: C, items: k }) {
    C instanceof u.Name && $.assign((0, u._)`${N}.props`, C), k instanceof u.Name && $.assign((0, u._)`${N}.items`, k);
  }
  function _e($, N, C, k) {
    const { gen: F, schema: B, data: re, allErrors: me, opts: ie, self: ce } = $, { RULES: ne } = ce;
    if (B.$ref && (ie.ignoreKeywordsWithRef || !(0, _.schemaHasRulesButRef)(B, ne))) {
      F.block(() => q($, "$ref", ne.all.$ref.definition));
      return;
    }
    ie.jtd || Q($, N), F.block(() => {
      for (const le of ne.rules)
        be(le);
      be(ne.post);
    });
    function be(le) {
      (0, y.shouldUseGroup)(B, le) && (le.type ? (F.if((0, c.checkDataType)(le.type, re, ie.strictNumbers)), ye($, le), N.length === 1 && N[0] === le.type && C && (F.else(), (0, c.reportTypeError)($)), F.endIf()) : ye($, le), me || F.if((0, u._)`${p.default.errors} === ${k || 0}`));
    }
  }
  function ye($, N) {
    const { gen: C, schema: k, opts: { useDefaults: F } } = $;
    F && (0, E.assignDefaults)($, N.type), C.block(() => {
      for (const B of N.rules)
        (0, y.shouldUseRule)(k, B) && q($, B.keyword, B.definition, N.type);
    });
  }
  function Q($, N) {
    $.schemaEnv.meta || !$.opts.strictTypes || (Re($, N), $.opts.allowUnionTypes || D($, N), I($, $.dataTypes));
  }
  function Re($, N) {
    if (N.length) {
      if (!$.dataTypes.length) {
        $.dataTypes = N;
        return;
      }
      N.forEach((C) => {
        O($.dataTypes, C) || A($, `type "${C}" not allowed by context "${$.dataTypes.join(",")}"`);
      }), i($, N);
    }
  }
  function D($, N) {
    N.length > 1 && !(N.length === 2 && N.includes("null")) && A($, "use allowUnionTypes to allow union type keyword");
  }
  function I($, N) {
    const C = $.self.RULES.all;
    for (const k in C) {
      const F = C[k];
      if (typeof F == "object" && (0, y.shouldUseRule)($.schema, F)) {
        const { type: B } = F.definition;
        B.length && !B.some((re) => M(N, re)) && A($, `missing type "${B.join(",")}" for keyword "${k}"`);
      }
    }
  }
  function M($, N) {
    return $.includes(N) || N === "number" && $.includes("integer");
  }
  function O($, N) {
    return $.includes(N) || N === "integer" && $.includes("number");
  }
  function i($, N) {
    const C = [];
    for (const k of $.dataTypes)
      O(N, k) ? C.push(k) : N.includes("integer") && k === "number" && C.push("integer");
    $.dataTypes = C;
  }
  function A($, N) {
    const C = $.schemaEnv.baseId + $.errSchemaPath;
    N += ` at "${C}" (strictTypes)`, (0, _.checkStrictMode)($, N, $.opts.strictTypes);
  }
  class b {
    constructor(N, C, k) {
      if ((0, o.validateKeywordUsage)(N, C, k), this.gen = N.gen, this.allErrors = N.allErrors, this.keyword = k, this.data = N.data, this.schema = N.schema[k], this.$data = C.$data && N.opts.$data && this.schema && this.schema.$data, this.schemaValue = (0, _.schemaRefOrVal)(N, this.schema, k, this.$data), this.schemaType = C.schemaType, this.parentSchema = N.schema, this.params = {}, this.it = N, this.def = C, this.$data)
        this.schemaCode = N.gen.const("vSchema", Y(this.$data, N));
      else if (this.schemaCode = this.schemaValue, !(0, o.validSchemaType)(this.schema, C.schemaType, C.allowUndefined))
        throw new Error(`${k} value must be ${JSON.stringify(C.schemaType)}`);
      ("code" in C ? C.trackErrors : C.errors !== !1) && (this.errsCount = N.gen.const("_errs", p.default.errors));
    }
    result(N, C, k) {
      this.failResult((0, u.not)(N), C, k);
    }
    failResult(N, C, k) {
      this.gen.if(N), k ? k() : this.error(), C ? (this.gen.else(), C(), this.allErrors && this.gen.endIf()) : this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    pass(N, C) {
      this.failResult((0, u.not)(N), void 0, C);
    }
    fail(N) {
      if (N === void 0) {
        this.error(), this.allErrors || this.gen.if(!1);
        return;
      }
      this.gen.if(N), this.error(), this.allErrors ? this.gen.endIf() : this.gen.else();
    }
    fail$data(N) {
      if (!this.$data)
        return this.fail(N);
      const { schemaCode: C } = this;
      this.fail((0, u._)`${C} !== undefined && (${(0, u.or)(this.invalid$data(), N)})`);
    }
    error(N, C, k) {
      if (C) {
        this.setParams(C), this._error(N, k), this.setParams({});
        return;
      }
      this._error(N, k);
    }
    _error(N, C) {
      (N ? T.reportExtraError : T.reportError)(this, this.def.error, C);
    }
    $dataError() {
      (0, T.reportError)(this, this.def.$dataError || T.keyword$DataError);
    }
    reset() {
      if (this.errsCount === void 0)
        throw new Error('add "trackErrors" to keyword definition');
      (0, T.resetErrorsCount)(this.gen, this.errsCount);
    }
    ok(N) {
      this.allErrors || this.gen.if(N);
    }
    setParams(N, C) {
      C ? Object.assign(this.params, N) : this.params = N;
    }
    block$data(N, C, k = u.nil) {
      this.gen.block(() => {
        this.check$data(N, k), C();
      });
    }
    check$data(N = u.nil, C = u.nil) {
      if (!this.$data)
        return;
      const { gen: k, schemaCode: F, schemaType: B, def: re } = this;
      k.if((0, u.or)((0, u._)`${F} === undefined`, C)), N !== u.nil && k.assign(N, !0), (B.length || re.validateSchema) && (k.elseIf(this.invalid$data()), this.$dataError(), N !== u.nil && k.assign(N, !1)), k.else();
    }
    invalid$data() {
      const { gen: N, schemaCode: C, schemaType: k, def: F, it: B } = this;
      return (0, u.or)(re(), me());
      function re() {
        if (k.length) {
          if (!(C instanceof u.Name))
            throw new Error("ajv implementation error");
          const ie = Array.isArray(k) ? k : [k];
          return (0, u._)`${(0, c.checkDataTypes)(ie, C, B.opts.strictNumbers, c.DataType.Wrong)}`;
        }
        return u.nil;
      }
      function me() {
        if (F.validateSchema) {
          const ie = N.scopeValue("validate$data", { ref: F.validateSchema });
          return (0, u._)`!${ie}(${C})`;
        }
        return u.nil;
      }
    }
    subschema(N, C) {
      const k = (0, m.getSubschema)(this.it, N);
      (0, m.extendSubschemaData)(k, this.it, N), (0, m.extendSubschemaMode)(k, N);
      const F = { ...this.it, ...k, items: void 0, props: void 0 };
      return n(F, C), F;
    }
    mergeEvaluated(N, C) {
      const { it: k, gen: F } = this;
      k.opts.unevaluated && (k.props !== !0 && N.props !== void 0 && (k.props = _.mergeEvaluated.props(F, N.props, k.props, C)), k.items !== !0 && N.items !== void 0 && (k.items = _.mergeEvaluated.items(F, N.items, k.items, C)));
    }
    mergeValidEvaluated(N, C) {
      const { it: k, gen: F } = this;
      if (k.opts.unevaluated && (k.props !== !0 || k.items !== !0))
        return F.if(C, () => this.mergeEvaluated(N, u.Name)), !0;
    }
  }
  Ee.KeywordCxt = b;
  function q($, N, C, k) {
    const F = new b($, C, N);
    "code" in C ? C.code(F, k) : F.$data && C.validate ? (0, o.funcKeywordCode)(F, C) : "macro" in C ? (0, o.macroKeywordCode)(F, C) : (C.compile || C.validate) && (0, o.funcKeywordCode)(F, C);
  }
  const V = /^\/(?:[^~]|~0|~1)*$/, J = /^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;
  function Y($, { dataLevel: N, dataNames: C, dataPathArr: k }) {
    let F, B;
    if ($ === "")
      return p.default.rootData;
    if ($[0] === "/") {
      if (!V.test($))
        throw new Error(`Invalid JSON-pointer: ${$}`);
      F = $, B = p.default.rootData;
    } else {
      const ce = J.exec($);
      if (!ce)
        throw new Error(`Invalid JSON-pointer: ${$}`);
      const ne = +ce[1];
      if (F = ce[2], F === "#") {
        if (ne >= N)
          throw new Error(ie("property/index", ne));
        return k[N - ne];
      }
      if (ne > N)
        throw new Error(ie("data", ne));
      if (B = C[N - ne], !F)
        return B;
    }
    let re = B;
    const me = F.split("/");
    for (const ce of me)
      ce && (B = (0, u._)`${B}${(0, u.getProperty)((0, _.unescapeJsonPointer)(ce))}`, re = (0, u._)`${re} && ${B}`);
    return re;
    function ie(ce, ne) {
      return `Cannot access ${ce} ${ne} levels up, current level is ${N}`;
    }
  }
  return Ee.getData = Y, Ee;
}
var Ke = {}, Mr;
function Zt() {
  if (Mr) return Ke;
  Mr = 1, Object.defineProperty(Ke, "__esModule", { value: !0 });
  class e extends Error {
    constructor(y) {
      super("validation failed"), this.errors = y, this.ajv = this.validation = !0;
    }
  }
  return Ke.default = e, Ke;
}
var Be = {}, Lr;
function Lt() {
  if (Lr) return Be;
  Lr = 1, Object.defineProperty(Be, "__esModule", { value: !0 });
  const e = Ct();
  class r extends Error {
    constructor(c, E, o, m) {
      super(m || `can't resolve reference ${o} from id ${E}`), this.missingRef = (0, e.resolveUrl)(c, E, o), this.missingSchema = (0, e.normalizeId)((0, e.getFullPath)(c, this.missingRef));
    }
  }
  return Be.default = r, Be;
}
var ue = {}, Dr;
function er() {
  if (Dr) return ue;
  Dr = 1, Object.defineProperty(ue, "__esModule", { value: !0 }), ue.resolveSchema = ue.getCompilingSchema = ue.resolveRef = ue.compileSchema = ue.SchemaEnv = void 0;
  const e = z(), r = Zt(), y = $e(), c = Ct(), E = X(), o = Mt();
  class m {
    constructor(s) {
      var t;
      this.refs = {}, this.dynamicAnchors = {};
      let n;
      typeof s.schema == "object" && (n = s.schema), this.schema = s.schema, this.schemaId = s.schemaId, this.root = s.root || this, this.baseId = (t = s.baseId) !== null && t !== void 0 ? t : (0, c.normalizeId)(n == null ? void 0 : n[s.schemaId || "$id"]), this.schemaPath = s.schemaPath, this.localRefs = s.localRefs, this.meta = s.meta, this.$async = n == null ? void 0 : n.$async, this.refs = {};
    }
  }
  ue.SchemaEnv = m;
  function u(a) {
    const s = _.call(this, a);
    if (s)
      return s;
    const t = (0, c.getFullPath)(this.opts.uriResolver, a.root.baseId), { es5: n, lines: d } = this.opts.code, { ownProperties: f } = this.opts, l = new e.CodeGen(this.scope, { es5: n, lines: d, ownProperties: f });
    let v;
    a.$async && (v = l.scopeValue("Error", {
      ref: r.default,
      code: (0, e._)`require("ajv/dist/runtime/validation_error").default`
    }));
    const w = l.scopeName("validate");
    a.validateName = w;
    const L = {
      gen: l,
      allErrors: this.opts.allErrors,
      data: y.default.data,
      parentData: y.default.parentData,
      parentDataProperty: y.default.parentDataProperty,
      dataNames: [y.default.data],
      dataPathArr: [e.nil],
      // TODO can its length be used as dataLevel if nil is removed?
      dataLevel: 0,
      dataTypes: [],
      definedProperties: /* @__PURE__ */ new Set(),
      topSchemaRef: l.scopeValue("schema", this.opts.code.source === !0 ? { ref: a.schema, code: (0, e.stringify)(a.schema) } : { ref: a.schema }),
      validateName: w,
      ValidationError: v,
      schema: a.schema,
      schemaEnv: a,
      rootId: t,
      baseId: a.baseId || t,
      schemaPath: e.nil,
      errSchemaPath: a.schemaPath || (this.opts.jtd ? "" : "#"),
      errorPath: (0, e._)`""`,
      opts: this.opts,
      self: this
    };
    let j;
    try {
      this._compilations.add(a), (0, o.validateFunctionCode)(L), l.optimize(this.opts.code.optimize);
      const U = l.toString();
      j = `${l.scopeRefs(y.default.scope)}return ${U}`, this.opts.code.process && (j = this.opts.code.process(j, a));
      const G = new Function(`${y.default.self}`, `${y.default.scope}`, j)(this, this.scope.get());
      if (this.scope.value(w, { ref: G }), G.errors = null, G.schema = a.schema, G.schemaEnv = a, a.$async && (G.$async = !0), this.opts.code.source === !0 && (G.source = { validateName: w, validateCode: U, scopeValues: l._values }), this.opts.unevaluated) {
        const { props: W, items: te } = L;
        G.evaluated = {
          props: W instanceof e.Name ? void 0 : W,
          items: te instanceof e.Name ? void 0 : te,
          dynamicProps: W instanceof e.Name,
          dynamicItems: te instanceof e.Name
        }, G.source && (G.source.evaluated = (0, e.stringify)(G.evaluated));
      }
      return a.validate = G, a;
    } catch (U) {
      throw delete a.validate, delete a.validateName, j && this.logger.error("Error compiling schema, function code:", j), U;
    } finally {
      this._compilations.delete(a);
    }
  }
  ue.compileSchema = u;
  function p(a, s, t) {
    var n;
    t = (0, c.resolveUrl)(this.opts.uriResolver, s, t);
    const d = a.refs[t];
    if (d)
      return d;
    let f = P.call(this, a, t);
    if (f === void 0) {
      const l = (n = a.localRefs) === null || n === void 0 ? void 0 : n[t], { schemaId: v } = this.opts;
      l && (f = new m({ schema: l, schemaId: v, root: a, baseId: s }));
    }
    if (f !== void 0)
      return a.refs[t] = g.call(this, f);
  }
  ue.resolveRef = p;
  function g(a) {
    return (0, c.inlineRef)(a.schema, this.opts.inlineRefs) ? a.schema : a.validate ? a : u.call(this, a);
  }
  function _(a) {
    for (const s of this._compilations)
      if (T(s, a))
        return s;
  }
  ue.getCompilingSchema = _;
  function T(a, s) {
    return a.schema === s.schema && a.root === s.root && a.baseId === s.baseId;
  }
  function P(a, s) {
    let t;
    for (; typeof (t = this.refs[s]) == "string"; )
      s = t;
    return t || this.schemas[s] || S.call(this, a, s);
  }
  function S(a, s) {
    const t = this.opts.uriResolver.parse(s), n = (0, c._getFullPath)(this.opts.uriResolver, t);
    let d = (0, c.getFullPath)(this.opts.uriResolver, a.baseId, void 0);
    if (Object.keys(a.schema).length > 0 && n === d)
      return h.call(this, t, a);
    const f = (0, c.normalizeId)(n), l = this.refs[f] || this.schemas[f];
    if (typeof l == "string") {
      const v = S.call(this, a, l);
      return typeof (v == null ? void 0 : v.schema) != "object" ? void 0 : h.call(this, t, v);
    }
    if (typeof (l == null ? void 0 : l.schema) == "object") {
      if (l.validate || u.call(this, l), f === (0, c.normalizeId)(s)) {
        const { schema: v } = l, { schemaId: w } = this.opts, L = v[w];
        return L && (d = (0, c.resolveUrl)(this.opts.uriResolver, d, L)), new m({ schema: v, schemaId: w, root: a, baseId: d });
      }
      return h.call(this, t, l);
    }
  }
  ue.resolveSchema = S;
  const R = /* @__PURE__ */ new Set([
    "properties",
    "patternProperties",
    "enum",
    "dependencies",
    "definitions"
  ]);
  function h(a, { baseId: s, schema: t, root: n }) {
    var d;
    if (((d = a.fragment) === null || d === void 0 ? void 0 : d[0]) !== "/")
      return;
    for (const v of a.fragment.slice(1).split("/")) {
      if (typeof t == "boolean")
        return;
      const w = t[(0, E.unescapeFragment)(v)];
      if (w === void 0)
        return;
      t = w;
      const L = typeof t == "object" && t[this.opts.schemaId];
      !R.has(v) && L && (s = (0, c.resolveUrl)(this.opts.uriResolver, s, L));
    }
    let f;
    if (typeof t != "boolean" && t.$ref && !(0, E.schemaHasRulesButRef)(t, this.RULES)) {
      const v = (0, c.resolveUrl)(this.opts.uriResolver, s, t.$ref);
      f = S.call(this, n, v);
    }
    const { schemaId: l } = this.opts;
    if (f = f || new m({ schema: t, schemaId: l, root: n, baseId: s }), f.schema !== f.root.schema)
      return f;
  }
  return ue;
}
const ga = "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#", va = "Meta-schema for $data reference (JSON AnySchema extension proposal)", Aa = "object", Ra = ["$data"], Ta = { $data: { type: "string", anyOf: [{ format: "relative-json-pointer" }, { format: "json-pointer" }] } }, $a = !1, Sa = {
  $id: ga,
  description: va,
  type: Aa,
  required: Ra,
  properties: Ta,
  additionalProperties: $a
};
var ze = {}, Ue = { exports: {} }, Yt, kr;
function Pa() {
  return kr || (kr = 1, Yt = {
    HEX: {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      a: 10,
      A: 10,
      b: 11,
      B: 11,
      c: 12,
      C: 12,
      d: 13,
      D: 13,
      e: 14,
      E: 14,
      f: 15,
      F: 15
    }
  }), Yt;
}
var Wt, jr;
function Ia() {
  if (jr) return Wt;
  jr = 1;
  const { HEX: e } = Pa(), r = /^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u;
  function y(h) {
    if (u(h, ".") < 3)
      return { host: h, isIPV4: !1 };
    const a = h.match(r) || [], [s] = a;
    return s ? { host: m(s, "."), isIPV4: !0 } : { host: h, isIPV4: !1 };
  }
  function c(h, a = !1) {
    let s = "", t = !0;
    for (const n of h) {
      if (e[n] === void 0) return;
      n !== "0" && t === !0 && (t = !1), t || (s += n);
    }
    return a && s.length === 0 && (s = "0"), s;
  }
  function E(h) {
    let a = 0;
    const s = { error: !1, address: "", zone: "" }, t = [], n = [];
    let d = !1, f = !1, l = !1;
    function v() {
      if (n.length) {
        if (d === !1) {
          const w = c(n);
          if (w !== void 0)
            t.push(w);
          else
            return s.error = !0, !1;
        }
        n.length = 0;
      }
      return !0;
    }
    for (let w = 0; w < h.length; w++) {
      const L = h[w];
      if (!(L === "[" || L === "]"))
        if (L === ":") {
          if (f === !0 && (l = !0), !v())
            break;
          if (a++, t.push(":"), a > 7) {
            s.error = !0;
            break;
          }
          w - 1 >= 0 && h[w - 1] === ":" && (f = !0);
          continue;
        } else if (L === "%") {
          if (!v())
            break;
          d = !0;
        } else {
          n.push(L);
          continue;
        }
    }
    return n.length && (d ? s.zone = n.join("") : l ? t.push(n.join("")) : t.push(c(n))), s.address = t.join(""), s;
  }
  function o(h) {
    if (u(h, ":") < 2)
      return { host: h, isIPV6: !1 };
    const a = E(h);
    if (a.error)
      return { host: h, isIPV6: !1 };
    {
      let s = a.address, t = a.address;
      return a.zone && (s += "%" + a.zone, t += "%25" + a.zone), { host: s, escapedHost: t, isIPV6: !0 };
    }
  }
  function m(h, a) {
    let s = "", t = !0;
    const n = h.length;
    for (let d = 0; d < n; d++) {
      const f = h[d];
      f === "0" && t ? (d + 1 <= n && h[d + 1] === a || d + 1 === n) && (s += f, t = !1) : (f === a ? t = !0 : t = !1, s += f);
    }
    return s;
  }
  function u(h, a) {
    let s = 0;
    for (let t = 0; t < h.length; t++)
      h[t] === a && s++;
    return s;
  }
  const p = /^\.\.?\//u, g = /^\/\.(?:\/|$)/u, _ = /^\/\.\.(?:\/|$)/u, T = /^\/?(?:.|\n)*?(?=\/|$)/u;
  function P(h) {
    const a = [];
    for (; h.length; )
      if (h.match(p))
        h = h.replace(p, "");
      else if (h.match(g))
        h = h.replace(g, "/");
      else if (h.match(_))
        h = h.replace(_, "/"), a.pop();
      else if (h === "." || h === "..")
        h = "";
      else {
        const s = h.match(T);
        if (s) {
          const t = s[0];
          h = h.slice(t.length), a.push(t);
        } else
          throw new Error("Unexpected dot segment condition");
      }
    return a.join("");
  }
  function S(h, a) {
    const s = a !== !0 ? escape : unescape;
    return h.scheme !== void 0 && (h.scheme = s(h.scheme)), h.userinfo !== void 0 && (h.userinfo = s(h.userinfo)), h.host !== void 0 && (h.host = s(h.host)), h.path !== void 0 && (h.path = s(h.path)), h.query !== void 0 && (h.query = s(h.query)), h.fragment !== void 0 && (h.fragment = s(h.fragment)), h;
  }
  function R(h) {
    const a = [];
    if (h.userinfo !== void 0 && (a.push(h.userinfo), a.push("@")), h.host !== void 0) {
      let s = unescape(h.host);
      const t = y(s);
      if (t.isIPV4)
        s = t.host;
      else {
        const n = o(t.host);
        n.isIPV6 === !0 ? s = `[${n.escapedHost}]` : s = h.host;
      }
      a.push(s);
    }
    return (typeof h.port == "number" || typeof h.port == "string") && (a.push(":"), a.push(String(h.port))), a.length ? a.join("") : void 0;
  }
  return Wt = {
    recomposeAuthority: R,
    normalizeComponentEncoding: S,
    removeDotSegments: P,
    normalizeIPv4: y,
    normalizeIPv6: o,
    stringArrayToHexStripped: c
  }, Wt;
}
var Xt, qr;
function Na() {
  if (qr) return Xt;
  qr = 1;
  const e = /^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu, r = /([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu;
  function y(t) {
    return typeof t.secure == "boolean" ? t.secure : String(t.scheme).toLowerCase() === "wss";
  }
  function c(t) {
    return t.host || (t.error = t.error || "HTTP URIs must have a host."), t;
  }
  function E(t) {
    const n = String(t.scheme).toLowerCase() === "https";
    return (t.port === (n ? 443 : 80) || t.port === "") && (t.port = void 0), t.path || (t.path = "/"), t;
  }
  function o(t) {
    return t.secure = y(t), t.resourceName = (t.path || "/") + (t.query ? "?" + t.query : ""), t.path = void 0, t.query = void 0, t;
  }
  function m(t) {
    if ((t.port === (y(t) ? 443 : 80) || t.port === "") && (t.port = void 0), typeof t.secure == "boolean" && (t.scheme = t.secure ? "wss" : "ws", t.secure = void 0), t.resourceName) {
      const [n, d] = t.resourceName.split("?");
      t.path = n && n !== "/" ? n : void 0, t.query = d, t.resourceName = void 0;
    }
    return t.fragment = void 0, t;
  }
  function u(t, n) {
    if (!t.path)
      return t.error = "URN can not be parsed", t;
    const d = t.path.match(r);
    if (d) {
      const f = n.scheme || t.scheme || "urn";
      t.nid = d[1].toLowerCase(), t.nss = d[2];
      const l = `${f}:${n.nid || t.nid}`, v = s[l];
      t.path = void 0, v && (t = v.parse(t, n));
    } else
      t.error = t.error || "URN can not be parsed.";
    return t;
  }
  function p(t, n) {
    const d = n.scheme || t.scheme || "urn", f = t.nid.toLowerCase(), l = `${d}:${n.nid || f}`, v = s[l];
    v && (t = v.serialize(t, n));
    const w = t, L = t.nss;
    return w.path = `${f || n.nid}:${L}`, n.skipEscape = !0, w;
  }
  function g(t, n) {
    const d = t;
    return d.uuid = d.nss, d.nss = void 0, !n.tolerant && (!d.uuid || !e.test(d.uuid)) && (d.error = d.error || "UUID is not valid."), d;
  }
  function _(t) {
    const n = t;
    return n.nss = (t.uuid || "").toLowerCase(), n;
  }
  const T = {
    scheme: "http",
    domainHost: !0,
    parse: c,
    serialize: E
  }, P = {
    scheme: "https",
    domainHost: T.domainHost,
    parse: c,
    serialize: E
  }, S = {
    scheme: "ws",
    domainHost: !0,
    parse: o,
    serialize: m
  }, R = {
    scheme: "wss",
    domainHost: S.domainHost,
    parse: S.parse,
    serialize: S.serialize
  }, s = {
    http: T,
    https: P,
    ws: S,
    wss: R,
    urn: {
      scheme: "urn",
      parse: u,
      serialize: p,
      skipNormalize: !0
    },
    "urn:uuid": {
      scheme: "urn:uuid",
      parse: g,
      serialize: _,
      skipNormalize: !0
    }
  };
  return Xt = s, Xt;
}
var Ur;
function Oa() {
  if (Ur) return Ue.exports;
  Ur = 1;
  const { normalizeIPv6: e, normalizeIPv4: r, removeDotSegments: y, recomposeAuthority: c, normalizeComponentEncoding: E } = Ia(), o = Na();
  function m(a, s) {
    return typeof a == "string" ? a = _(R(a, s), s) : typeof a == "object" && (a = R(_(a, s), s)), a;
  }
  function u(a, s, t) {
    const n = Object.assign({ scheme: "null" }, t), d = p(R(a, n), R(s, n), n, !0);
    return _(d, { ...n, skipEscape: !0 });
  }
  function p(a, s, t, n) {
    const d = {};
    return n || (a = R(_(a, t), t), s = R(_(s, t), t)), t = t || {}, !t.tolerant && s.scheme ? (d.scheme = s.scheme, d.userinfo = s.userinfo, d.host = s.host, d.port = s.port, d.path = y(s.path || ""), d.query = s.query) : (s.userinfo !== void 0 || s.host !== void 0 || s.port !== void 0 ? (d.userinfo = s.userinfo, d.host = s.host, d.port = s.port, d.path = y(s.path || ""), d.query = s.query) : (s.path ? (s.path.charAt(0) === "/" ? d.path = y(s.path) : ((a.userinfo !== void 0 || a.host !== void 0 || a.port !== void 0) && !a.path ? d.path = "/" + s.path : a.path ? d.path = a.path.slice(0, a.path.lastIndexOf("/") + 1) + s.path : d.path = s.path, d.path = y(d.path)), d.query = s.query) : (d.path = a.path, s.query !== void 0 ? d.query = s.query : d.query = a.query), d.userinfo = a.userinfo, d.host = a.host, d.port = a.port), d.scheme = a.scheme), d.fragment = s.fragment, d;
  }
  function g(a, s, t) {
    return typeof a == "string" ? (a = unescape(a), a = _(E(R(a, t), !0), { ...t, skipEscape: !0 })) : typeof a == "object" && (a = _(E(a, !0), { ...t, skipEscape: !0 })), typeof s == "string" ? (s = unescape(s), s = _(E(R(s, t), !0), { ...t, skipEscape: !0 })) : typeof s == "object" && (s = _(E(s, !0), { ...t, skipEscape: !0 })), a.toLowerCase() === s.toLowerCase();
  }
  function _(a, s) {
    const t = {
      host: a.host,
      scheme: a.scheme,
      userinfo: a.userinfo,
      port: a.port,
      path: a.path,
      query: a.query,
      nid: a.nid,
      nss: a.nss,
      uuid: a.uuid,
      fragment: a.fragment,
      reference: a.reference,
      resourceName: a.resourceName,
      secure: a.secure,
      error: ""
    }, n = Object.assign({}, s), d = [], f = o[(n.scheme || t.scheme || "").toLowerCase()];
    f && f.serialize && f.serialize(t, n), t.path !== void 0 && (n.skipEscape ? t.path = unescape(t.path) : (t.path = escape(t.path), t.scheme !== void 0 && (t.path = t.path.split("%3A").join(":")))), n.reference !== "suffix" && t.scheme && d.push(t.scheme, ":");
    const l = c(t);
    if (l !== void 0 && (n.reference !== "suffix" && d.push("//"), d.push(l), t.path && t.path.charAt(0) !== "/" && d.push("/")), t.path !== void 0) {
      let v = t.path;
      !n.absolutePath && (!f || !f.absolutePath) && (v = y(v)), l === void 0 && (v = v.replace(/^\/\//u, "/%2F")), d.push(v);
    }
    return t.query !== void 0 && d.push("?", t.query), t.fragment !== void 0 && d.push("#", t.fragment), d.join("");
  }
  const T = Array.from({ length: 127 }, (a, s) => /[^!"$&'()*+,\-.;=_`a-z{}~]/u.test(String.fromCharCode(s)));
  function P(a) {
    let s = 0;
    for (let t = 0, n = a.length; t < n; ++t)
      if (s = a.charCodeAt(t), s > 126 || T[s])
        return !0;
    return !1;
  }
  const S = /^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;
  function R(a, s) {
    const t = Object.assign({}, s), n = {
      scheme: void 0,
      userinfo: void 0,
      host: "",
      port: void 0,
      path: "",
      query: void 0,
      fragment: void 0
    }, d = a.indexOf("%") !== -1;
    let f = !1;
    t.reference === "suffix" && (a = (t.scheme ? t.scheme + ":" : "") + "//" + a);
    const l = a.match(S);
    if (l) {
      if (n.scheme = l[1], n.userinfo = l[3], n.host = l[4], n.port = parseInt(l[5], 10), n.path = l[6] || "", n.query = l[7], n.fragment = l[8], isNaN(n.port) && (n.port = l[5]), n.host) {
        const w = r(n.host);
        if (w.isIPV4 === !1) {
          const L = e(w.host);
          n.host = L.host.toLowerCase(), f = L.isIPV6;
        } else
          n.host = w.host, f = !0;
      }
      n.scheme === void 0 && n.userinfo === void 0 && n.host === void 0 && n.port === void 0 && n.query === void 0 && !n.path ? n.reference = "same-document" : n.scheme === void 0 ? n.reference = "relative" : n.fragment === void 0 ? n.reference = "absolute" : n.reference = "uri", t.reference && t.reference !== "suffix" && t.reference !== n.reference && (n.error = n.error || "URI is not a " + t.reference + " reference.");
      const v = o[(t.scheme || n.scheme || "").toLowerCase()];
      if (!t.unicodeSupport && (!v || !v.unicodeSupport) && n.host && (t.domainHost || v && v.domainHost) && f === !1 && P(n.host))
        try {
          n.host = URL.domainToASCII(n.host.toLowerCase());
        } catch (w) {
          n.error = n.error || "Host's domain name can not be converted to ASCII: " + w;
        }
      (!v || v && !v.skipNormalize) && (d && n.scheme !== void 0 && (n.scheme = unescape(n.scheme)), d && n.host !== void 0 && (n.host = unescape(n.host)), n.path && (n.path = escape(unescape(n.path))), n.fragment && (n.fragment = encodeURI(decodeURIComponent(n.fragment)))), v && v.parse && v.parse(n, t);
    } else
      n.error = n.error || "URI can not be parsed.";
    return n;
  }
  const h = {
    SCHEMES: o,
    normalize: m,
    resolve: u,
    resolveComponents: p,
    equal: g,
    serialize: _,
    parse: R
  };
  return Ue.exports = h, Ue.exports.default = h, Ue.exports.fastUri = h, Ue.exports;
}
var Fr;
function wa() {
  if (Fr) return ze;
  Fr = 1, Object.defineProperty(ze, "__esModule", { value: !0 });
  const e = Oa();
  return e.code = 'require("ajv/dist/runtime/uri").default', ze.default = e, ze;
}
var Vr;
function ba() {
  return Vr || (Vr = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.CodeGen = e.Name = e.nil = e.stringify = e.str = e._ = e.KeywordCxt = void 0;
    var r = Mt();
    Object.defineProperty(e, "KeywordCxt", { enumerable: !0, get: function() {
      return r.KeywordCxt;
    } });
    var y = z();
    Object.defineProperty(e, "_", { enumerable: !0, get: function() {
      return y._;
    } }), Object.defineProperty(e, "str", { enumerable: !0, get: function() {
      return y.str;
    } }), Object.defineProperty(e, "stringify", { enumerable: !0, get: function() {
      return y.stringify;
    } }), Object.defineProperty(e, "nil", { enumerable: !0, get: function() {
      return y.nil;
    } }), Object.defineProperty(e, "Name", { enumerable: !0, get: function() {
      return y.Name;
    } }), Object.defineProperty(e, "CodeGen", { enumerable: !0, get: function() {
      return y.CodeGen;
    } });
    const c = Zt(), E = Lt(), o = Gn(), m = er(), u = z(), p = Ct(), g = It(), _ = X(), T = Sa, P = wa(), S = (D, I) => new RegExp(D, I);
    S.code = "new RegExp";
    const R = ["removeAdditional", "useDefaults", "coerceTypes"], h = /* @__PURE__ */ new Set([
      "validate",
      "serialize",
      "parse",
      "wrapper",
      "root",
      "schema",
      "keyword",
      "pattern",
      "formats",
      "validate$data",
      "func",
      "obj",
      "Error"
    ]), a = {
      errorDataPath: "",
      format: "`validateFormats: false` can be used instead.",
      nullable: '"nullable" keyword is supported by default.',
      jsonPointers: "Deprecated jsPropertySyntax can be used instead.",
      extendRefs: "Deprecated ignoreKeywordsWithRef can be used instead.",
      missingRefs: "Pass empty schema with $id that should be ignored to ajv.addSchema.",
      processCode: "Use option `code: {process: (code, schemaEnv: object) => string}`",
      sourceCode: "Use option `code: {source: true}`",
      strictDefaults: "It is default now, see option `strict`.",
      strictKeywords: "It is default now, see option `strict`.",
      uniqueItems: '"uniqueItems" keyword is always validated.',
      unknownFormats: "Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",
      cache: "Map is used as cache, schema object as key.",
      serialize: "Map is used as cache, schema object as key.",
      ajvErrors: "It is default now."
    }, s = {
      ignoreKeywordsWithRef: "",
      jsPropertySyntax: "",
      unicode: '"minLength"/"maxLength" account for unicode characters by default.'
    }, t = 200;
    function n(D) {
      var I, M, O, i, A, b, q, V, J, Y, $, N, C, k, F, B, re, me, ie, ce, ne, be, le, Dt, kt;
      const ke = D.strict, jt = (I = D.code) === null || I === void 0 ? void 0 : I.optimize, rr = jt === !0 || jt === void 0 ? 1 : jt || 0, nr = (O = (M = D.code) === null || M === void 0 ? void 0 : M.regExp) !== null && O !== void 0 ? O : S, Wn = (i = D.uriResolver) !== null && i !== void 0 ? i : P.default;
      return {
        strictSchema: (b = (A = D.strictSchema) !== null && A !== void 0 ? A : ke) !== null && b !== void 0 ? b : !0,
        strictNumbers: (V = (q = D.strictNumbers) !== null && q !== void 0 ? q : ke) !== null && V !== void 0 ? V : !0,
        strictTypes: (Y = (J = D.strictTypes) !== null && J !== void 0 ? J : ke) !== null && Y !== void 0 ? Y : "log",
        strictTuples: (N = ($ = D.strictTuples) !== null && $ !== void 0 ? $ : ke) !== null && N !== void 0 ? N : "log",
        strictRequired: (k = (C = D.strictRequired) !== null && C !== void 0 ? C : ke) !== null && k !== void 0 ? k : !1,
        code: D.code ? { ...D.code, optimize: rr, regExp: nr } : { optimize: rr, regExp: nr },
        loopRequired: (F = D.loopRequired) !== null && F !== void 0 ? F : t,
        loopEnum: (B = D.loopEnum) !== null && B !== void 0 ? B : t,
        meta: (re = D.meta) !== null && re !== void 0 ? re : !0,
        messages: (me = D.messages) !== null && me !== void 0 ? me : !0,
        inlineRefs: (ie = D.inlineRefs) !== null && ie !== void 0 ? ie : !0,
        schemaId: (ce = D.schemaId) !== null && ce !== void 0 ? ce : "$id",
        addUsedSchema: (ne = D.addUsedSchema) !== null && ne !== void 0 ? ne : !0,
        validateSchema: (be = D.validateSchema) !== null && be !== void 0 ? be : !0,
        validateFormats: (le = D.validateFormats) !== null && le !== void 0 ? le : !0,
        unicodeRegExp: (Dt = D.unicodeRegExp) !== null && Dt !== void 0 ? Dt : !0,
        int32range: (kt = D.int32range) !== null && kt !== void 0 ? kt : !0,
        uriResolver: Wn
      };
    }
    class d {
      constructor(I = {}) {
        this.schemas = {}, this.refs = {}, this.formats = {}, this._compilations = /* @__PURE__ */ new Set(), this._loading = {}, this._cache = /* @__PURE__ */ new Map(), I = this.opts = { ...I, ...n(I) };
        const { es5: M, lines: O } = this.opts.code;
        this.scope = new u.ValueScope({ scope: {}, prefixes: h, es5: M, lines: O }), this.logger = H(I.logger);
        const i = I.validateFormats;
        I.validateFormats = !1, this.RULES = (0, o.getRules)(), f.call(this, a, I, "NOT SUPPORTED"), f.call(this, s, I, "DEPRECATED", "warn"), this._metaOpts = j.call(this), I.formats && w.call(this), this._addVocabularies(), this._addDefaultMetaSchema(), I.keywords && L.call(this, I.keywords), typeof I.meta == "object" && this.addMetaSchema(I.meta), v.call(this), I.validateFormats = i;
      }
      _addVocabularies() {
        this.addKeyword("$async");
      }
      _addDefaultMetaSchema() {
        const { $data: I, meta: M, schemaId: O } = this.opts;
        let i = T;
        O === "id" && (i = { ...T }, i.id = i.$id, delete i.$id), M && I && this.addMetaSchema(i, i[O], !1);
      }
      defaultMeta() {
        const { meta: I, schemaId: M } = this.opts;
        return this.opts.defaultMeta = typeof I == "object" ? I[M] || I : void 0;
      }
      validate(I, M) {
        let O;
        if (typeof I == "string") {
          if (O = this.getSchema(I), !O)
            throw new Error(`no schema with key or ref "${I}"`);
        } else
          O = this.compile(I);
        const i = O(M);
        return "$async" in O || (this.errors = O.errors), i;
      }
      compile(I, M) {
        const O = this._addSchema(I, M);
        return O.validate || this._compileSchemaEnv(O);
      }
      compileAsync(I, M) {
        if (typeof this.opts.loadSchema != "function")
          throw new Error("options.loadSchema should be a function");
        const { loadSchema: O } = this.opts;
        return i.call(this, I, M);
        async function i(Y, $) {
          await A.call(this, Y.$schema);
          const N = this._addSchema(Y, $);
          return N.validate || b.call(this, N);
        }
        async function A(Y) {
          Y && !this.getSchema(Y) && await i.call(this, { $ref: Y }, !0);
        }
        async function b(Y) {
          try {
            return this._compileSchemaEnv(Y);
          } catch ($) {
            if (!($ instanceof E.default))
              throw $;
            return q.call(this, $), await V.call(this, $.missingSchema), b.call(this, Y);
          }
        }
        function q({ missingSchema: Y, missingRef: $ }) {
          if (this.refs[Y])
            throw new Error(`AnySchema ${Y} is loaded but ${$} cannot be resolved`);
        }
        async function V(Y) {
          const $ = await J.call(this, Y);
          this.refs[Y] || await A.call(this, $.$schema), this.refs[Y] || this.addSchema($, Y, M);
        }
        async function J(Y) {
          const $ = this._loading[Y];
          if ($)
            return $;
          try {
            return await (this._loading[Y] = O(Y));
          } finally {
            delete this._loading[Y];
          }
        }
      }
      // Adds schema to the instance
      addSchema(I, M, O, i = this.opts.validateSchema) {
        if (Array.isArray(I)) {
          for (const b of I)
            this.addSchema(b, void 0, O, i);
          return this;
        }
        let A;
        if (typeof I == "object") {
          const { schemaId: b } = this.opts;
          if (A = I[b], A !== void 0 && typeof A != "string")
            throw new Error(`schema ${b} must be string`);
        }
        return M = (0, p.normalizeId)(M || A), this._checkUnique(M), this.schemas[M] = this._addSchema(I, O, M, i, !0), this;
      }
      // Add schema that will be used to validate other schemas
      // options in META_IGNORE_OPTIONS are alway set to false
      addMetaSchema(I, M, O = this.opts.validateSchema) {
        return this.addSchema(I, M, !0, O), this;
      }
      //  Validate schema against its meta-schema
      validateSchema(I, M) {
        if (typeof I == "boolean")
          return !0;
        let O;
        if (O = I.$schema, O !== void 0 && typeof O != "string")
          throw new Error("$schema must be a string");
        if (O = O || this.opts.defaultMeta || this.defaultMeta(), !O)
          return this.logger.warn("meta-schema not available"), this.errors = null, !0;
        const i = this.validate(O, I);
        if (!i && M) {
          const A = "schema is invalid: " + this.errorsText();
          if (this.opts.validateSchema === "log")
            this.logger.error(A);
          else
            throw new Error(A);
        }
        return i;
      }
      // Get compiled schema by `key` or `ref`.
      // (`key` that was passed to `addSchema` or full schema reference - `schema.$id` or resolved id)
      getSchema(I) {
        let M;
        for (; typeof (M = l.call(this, I)) == "string"; )
          I = M;
        if (M === void 0) {
          const { schemaId: O } = this.opts, i = new m.SchemaEnv({ schema: {}, schemaId: O });
          if (M = m.resolveSchema.call(this, i, I), !M)
            return;
          this.refs[I] = M;
        }
        return M.validate || this._compileSchemaEnv(M);
      }
      // Remove cached schema(s).
      // If no parameter is passed all schemas but meta-schemas are removed.
      // If RegExp is passed all schemas with key/id matching pattern but meta-schemas are removed.
      // Even if schema is referenced by other schemas it still can be removed as other schemas have local references.
      removeSchema(I) {
        if (I instanceof RegExp)
          return this._removeAllSchemas(this.schemas, I), this._removeAllSchemas(this.refs, I), this;
        switch (typeof I) {
          case "undefined":
            return this._removeAllSchemas(this.schemas), this._removeAllSchemas(this.refs), this._cache.clear(), this;
          case "string": {
            const M = l.call(this, I);
            return typeof M == "object" && this._cache.delete(M.schema), delete this.schemas[I], delete this.refs[I], this;
          }
          case "object": {
            const M = I;
            this._cache.delete(M);
            let O = I[this.opts.schemaId];
            return O && (O = (0, p.normalizeId)(O), delete this.schemas[O], delete this.refs[O]), this;
          }
          default:
            throw new Error("ajv.removeSchema: invalid parameter");
        }
      }
      // add "vocabulary" - a collection of keywords
      addVocabulary(I) {
        for (const M of I)
          this.addKeyword(M);
        return this;
      }
      addKeyword(I, M) {
        let O;
        if (typeof I == "string")
          O = I, typeof M == "object" && (this.logger.warn("these parameters are deprecated, see docs for addKeyword"), M.keyword = O);
        else if (typeof I == "object" && M === void 0) {
          if (M = I, O = M.keyword, Array.isArray(O) && !O.length)
            throw new Error("addKeywords: keyword must be string or non-empty array");
        } else
          throw new Error("invalid addKeywords parameters");
        if (W.call(this, O, M), !M)
          return (0, _.eachItem)(O, (A) => te.call(this, A)), this;
        ye.call(this, M);
        const i = {
          ...M,
          type: (0, g.getJSONTypes)(M.type),
          schemaType: (0, g.getJSONTypes)(M.schemaType)
        };
        return (0, _.eachItem)(O, i.type.length === 0 ? (A) => te.call(this, A, i) : (A) => i.type.forEach((b) => te.call(this, A, i, b))), this;
      }
      getKeyword(I) {
        const M = this.RULES.all[I];
        return typeof M == "object" ? M.definition : !!M;
      }
      // Remove keyword
      removeKeyword(I) {
        const { RULES: M } = this;
        delete M.keywords[I], delete M.all[I];
        for (const O of M.rules) {
          const i = O.rules.findIndex((A) => A.keyword === I);
          i >= 0 && O.rules.splice(i, 1);
        }
        return this;
      }
      // Add format
      addFormat(I, M) {
        return typeof M == "string" && (M = new RegExp(M)), this.formats[I] = M, this;
      }
      errorsText(I = this.errors, { separator: M = ", ", dataVar: O = "data" } = {}) {
        return !I || I.length === 0 ? "No errors" : I.map((i) => `${O}${i.instancePath} ${i.message}`).reduce((i, A) => i + M + A);
      }
      $dataMetaSchema(I, M) {
        const O = this.RULES.all;
        I = JSON.parse(JSON.stringify(I));
        for (const i of M) {
          const A = i.split("/").slice(1);
          let b = I;
          for (const q of A)
            b = b[q];
          for (const q in O) {
            const V = O[q];
            if (typeof V != "object")
              continue;
            const { $data: J } = V.definition, Y = b[q];
            J && Y && (b[q] = Re(Y));
          }
        }
        return I;
      }
      _removeAllSchemas(I, M) {
        for (const O in I) {
          const i = I[O];
          (!M || M.test(O)) && (typeof i == "string" ? delete I[O] : i && !i.meta && (this._cache.delete(i.schema), delete I[O]));
        }
      }
      _addSchema(I, M, O, i = this.opts.validateSchema, A = this.opts.addUsedSchema) {
        let b;
        const { schemaId: q } = this.opts;
        if (typeof I == "object")
          b = I[q];
        else {
          if (this.opts.jtd)
            throw new Error("schema must be object");
          if (typeof I != "boolean")
            throw new Error("schema must be object or boolean");
        }
        let V = this._cache.get(I);
        if (V !== void 0)
          return V;
        O = (0, p.normalizeId)(b || O);
        const J = p.getSchemaRefs.call(this, I, O);
        return V = new m.SchemaEnv({ schema: I, schemaId: q, meta: M, baseId: O, localRefs: J }), this._cache.set(V.schema, V), A && !O.startsWith("#") && (O && this._checkUnique(O), this.refs[O] = V), i && this.validateSchema(I, !0), V;
      }
      _checkUnique(I) {
        if (this.schemas[I] || this.refs[I])
          throw new Error(`schema with key or id "${I}" already exists`);
      }
      _compileSchemaEnv(I) {
        if (I.meta ? this._compileMetaSchema(I) : m.compileSchema.call(this, I), !I.validate)
          throw new Error("ajv implementation error");
        return I.validate;
      }
      _compileMetaSchema(I) {
        const M = this.opts;
        this.opts = this._metaOpts;
        try {
          m.compileSchema.call(this, I);
        } finally {
          this.opts = M;
        }
      }
    }
    d.ValidationError = c.default, d.MissingRefError = E.default, e.default = d;
    function f(D, I, M, O = "error") {
      for (const i in D) {
        const A = i;
        A in I && this.logger[O](`${M}: option ${i}. ${D[A]}`);
      }
    }
    function l(D) {
      return D = (0, p.normalizeId)(D), this.schemas[D] || this.refs[D];
    }
    function v() {
      const D = this.opts.schemas;
      if (D)
        if (Array.isArray(D))
          this.addSchema(D);
        else
          for (const I in D)
            this.addSchema(D[I], I);
    }
    function w() {
      for (const D in this.opts.formats) {
        const I = this.opts.formats[D];
        I && this.addFormat(D, I);
      }
    }
    function L(D) {
      if (Array.isArray(D)) {
        this.addVocabulary(D);
        return;
      }
      this.logger.warn("keywords option as map is deprecated, pass array");
      for (const I in D) {
        const M = D[I];
        M.keyword || (M.keyword = I), this.addKeyword(M);
      }
    }
    function j() {
      const D = { ...this.opts };
      for (const I of R)
        delete D[I];
      return D;
    }
    const U = { log() {
    }, warn() {
    }, error() {
    } };
    function H(D) {
      if (D === !1)
        return U;
      if (D === void 0)
        return console;
      if (D.log && D.warn && D.error)
        return D;
      throw new Error("logger must implement log, warn and error methods");
    }
    const G = /^[a-z_$][a-z0-9_$:-]*$/i;
    function W(D, I) {
      const { RULES: M } = this;
      if ((0, _.eachItem)(D, (O) => {
        if (M.keywords[O])
          throw new Error(`Keyword ${O} is already defined`);
        if (!G.test(O))
          throw new Error(`Keyword ${O} has invalid name`);
      }), !!I && I.$data && !("code" in I || "validate" in I))
        throw new Error('$data keyword must have "code" or "validate" function');
    }
    function te(D, I, M) {
      var O;
      const i = I == null ? void 0 : I.post;
      if (M && i)
        throw new Error('keyword with "post" flag cannot have "type"');
      const { RULES: A } = this;
      let b = i ? A.post : A.rules.find(({ type: V }) => V === M);
      if (b || (b = { type: M, rules: [] }, A.rules.push(b)), A.keywords[D] = !0, !I)
        return;
      const q = {
        keyword: D,
        definition: {
          ...I,
          type: (0, g.getJSONTypes)(I.type),
          schemaType: (0, g.getJSONTypes)(I.schemaType)
        }
      };
      I.before ? _e.call(this, b, q, I.before) : b.rules.push(q), A.all[D] = q, (O = I.implements) === null || O === void 0 || O.forEach((V) => this.addKeyword(V));
    }
    function _e(D, I, M) {
      const O = D.rules.findIndex((i) => i.keyword === M);
      O >= 0 ? D.rules.splice(O, 0, I) : (D.rules.push(I), this.logger.warn(`rule ${M} is not defined`));
    }
    function ye(D) {
      let { metaSchema: I } = D;
      I !== void 0 && (D.$data && this.opts.$data && (I = Re(I)), D.validateSchema = this.compile(I, !0));
    }
    const Q = {
      $ref: "https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"
    };
    function Re(D) {
      return { anyOf: [D, Q] };
    }
  }(Ft)), Ft;
}
var Ye = {}, We = {}, Xe = {}, Gr;
function Ca() {
  if (Gr) return Xe;
  Gr = 1, Object.defineProperty(Xe, "__esModule", { value: !0 });
  const e = {
    keyword: "id",
    code() {
      throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID');
    }
  };
  return Xe.default = e, Xe;
}
var Te = {}, Hr;
function Ma() {
  if (Hr) return Te;
  Hr = 1, Object.defineProperty(Te, "__esModule", { value: !0 }), Te.callRef = Te.getValidate = void 0;
  const e = Lt(), r = he(), y = z(), c = $e(), E = er(), o = X(), m = {
    keyword: "$ref",
    schemaType: "string",
    code(g) {
      const { gen: _, schema: T, it: P } = g, { baseId: S, schemaEnv: R, validateName: h, opts: a, self: s } = P, { root: t } = R;
      if ((T === "#" || T === "#/") && S === t.baseId)
        return d();
      const n = E.resolveRef.call(s, t, S, T);
      if (n === void 0)
        throw new e.default(P.opts.uriResolver, S, T);
      if (n instanceof E.SchemaEnv)
        return f(n);
      return l(n);
      function d() {
        if (R === t)
          return p(g, h, R, R.$async);
        const v = _.scopeValue("root", { ref: t });
        return p(g, (0, y._)`${v}.validate`, t, t.$async);
      }
      function f(v) {
        const w = u(g, v);
        p(g, w, v, v.$async);
      }
      function l(v) {
        const w = _.scopeValue("schema", a.code.source === !0 ? { ref: v, code: (0, y.stringify)(v) } : { ref: v }), L = _.name("valid"), j = g.subschema({
          schema: v,
          dataTypes: [],
          schemaPath: y.nil,
          topSchemaRef: w,
          errSchemaPath: T
        }, L);
        g.mergeEvaluated(j), g.ok(L);
      }
    }
  };
  function u(g, _) {
    const { gen: T } = g;
    return _.validate ? T.scopeValue("validate", { ref: _.validate }) : (0, y._)`${T.scopeValue("wrapper", { ref: _ })}.validate`;
  }
  Te.getValidate = u;
  function p(g, _, T, P) {
    const { gen: S, it: R } = g, { allErrors: h, schemaEnv: a, opts: s } = R, t = s.passContext ? c.default.this : y.nil;
    P ? n() : d();
    function n() {
      if (!a.$async)
        throw new Error("async schema referenced by sync schema");
      const v = S.let("valid");
      S.try(() => {
        S.code((0, y._)`await ${(0, r.callValidateCode)(g, _, t)}`), l(_), h || S.assign(v, !0);
      }, (w) => {
        S.if((0, y._)`!(${w} instanceof ${R.ValidationError})`, () => S.throw(w)), f(w), h || S.assign(v, !1);
      }), g.ok(v);
    }
    function d() {
      g.result((0, r.callValidateCode)(g, _, t), () => l(_), () => f(_));
    }
    function f(v) {
      const w = (0, y._)`${v}.errors`;
      S.assign(c.default.vErrors, (0, y._)`${c.default.vErrors} === null ? ${w} : ${c.default.vErrors}.concat(${w})`), S.assign(c.default.errors, (0, y._)`${c.default.vErrors}.length`);
    }
    function l(v) {
      var w;
      if (!R.opts.unevaluated)
        return;
      const L = (w = T == null ? void 0 : T.validate) === null || w === void 0 ? void 0 : w.evaluated;
      if (R.props !== !0)
        if (L && !L.dynamicProps)
          L.props !== void 0 && (R.props = o.mergeEvaluated.props(S, L.props, R.props));
        else {
          const j = S.var("props", (0, y._)`${v}.evaluated.props`);
          R.props = o.mergeEvaluated.props(S, j, R.props, y.Name);
        }
      if (R.items !== !0)
        if (L && !L.dynamicItems)
          L.items !== void 0 && (R.items = o.mergeEvaluated.items(S, L.items, R.items));
        else {
          const j = S.var("items", (0, y._)`${v}.evaluated.items`);
          R.items = o.mergeEvaluated.items(S, j, R.items, y.Name);
        }
    }
  }
  return Te.callRef = p, Te.default = m, Te;
}
var Kr;
function La() {
  if (Kr) return We;
  Kr = 1, Object.defineProperty(We, "__esModule", { value: !0 });
  const e = Ca(), r = Ma(), y = [
    "$schema",
    "$id",
    "$defs",
    "$vocabulary",
    { keyword: "$comment" },
    "definitions",
    e.default,
    r.default
  ];
  return We.default = y, We;
}
var Je = {}, xe = {}, Br;
function Da() {
  if (Br) return xe;
  Br = 1, Object.defineProperty(xe, "__esModule", { value: !0 });
  const e = z(), r = e.operators, y = {
    maximum: { okStr: "<=", ok: r.LTE, fail: r.GT },
    minimum: { okStr: ">=", ok: r.GTE, fail: r.LT },
    exclusiveMaximum: { okStr: "<", ok: r.LT, fail: r.GTE },
    exclusiveMinimum: { okStr: ">", ok: r.GT, fail: r.LTE }
  }, c = {
    message: ({ keyword: o, schemaCode: m }) => (0, e.str)`must be ${y[o].okStr} ${m}`,
    params: ({ keyword: o, schemaCode: m }) => (0, e._)`{comparison: ${y[o].okStr}, limit: ${m}}`
  }, E = {
    keyword: Object.keys(y),
    type: "number",
    schemaType: "number",
    $data: !0,
    error: c,
    code(o) {
      const { keyword: m, data: u, schemaCode: p } = o;
      o.fail$data((0, e._)`${u} ${y[m].fail} ${p} || isNaN(${u})`);
    }
  };
  return xe.default = E, xe;
}
var Qe = {}, zr;
function ka() {
  if (zr) return Qe;
  zr = 1, Object.defineProperty(Qe, "__esModule", { value: !0 });
  const e = z(), y = {
    keyword: "multipleOf",
    type: "number",
    schemaType: "number",
    $data: !0,
    error: {
      message: ({ schemaCode: c }) => (0, e.str)`must be multiple of ${c}`,
      params: ({ schemaCode: c }) => (0, e._)`{multipleOf: ${c}}`
    },
    code(c) {
      const { gen: E, data: o, schemaCode: m, it: u } = c, p = u.opts.multipleOfPrecision, g = E.let("res"), _ = p ? (0, e._)`Math.abs(Math.round(${g}) - ${g}) > 1e-${p}` : (0, e._)`${g} !== parseInt(${g})`;
      c.fail$data((0, e._)`(${m} === 0 || (${g} = ${o}/${m}, ${_}))`);
    }
  };
  return Qe.default = y, Qe;
}
var Ze = {}, et = {}, Yr;
function ja() {
  if (Yr) return et;
  Yr = 1, Object.defineProperty(et, "__esModule", { value: !0 });
  function e(r) {
    const y = r.length;
    let c = 0, E = 0, o;
    for (; E < y; )
      c++, o = r.charCodeAt(E++), o >= 55296 && o <= 56319 && E < y && (o = r.charCodeAt(E), (o & 64512) === 56320 && E++);
    return c;
  }
  return et.default = e, e.code = 'require("ajv/dist/runtime/ucs2length").default', et;
}
var Wr;
function qa() {
  if (Wr) return Ze;
  Wr = 1, Object.defineProperty(Ze, "__esModule", { value: !0 });
  const e = z(), r = X(), y = ja(), E = {
    keyword: ["maxLength", "minLength"],
    type: "string",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: o, schemaCode: m }) {
        const u = o === "maxLength" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${u} than ${m} characters`;
      },
      params: ({ schemaCode: o }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { keyword: m, data: u, schemaCode: p, it: g } = o, _ = m === "maxLength" ? e.operators.GT : e.operators.LT, T = g.opts.unicode === !1 ? (0, e._)`${u}.length` : (0, e._)`${(0, r.useFunc)(o.gen, y.default)}(${u})`;
      o.fail$data((0, e._)`${T} ${_} ${p}`);
    }
  };
  return Ze.default = E, Ze;
}
var tt = {}, Xr;
function Ua() {
  if (Xr) return tt;
  Xr = 1, Object.defineProperty(tt, "__esModule", { value: !0 });
  const e = he(), r = z(), c = {
    keyword: "pattern",
    type: "string",
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: E }) => (0, r.str)`must match pattern "${E}"`,
      params: ({ schemaCode: E }) => (0, r._)`{pattern: ${E}}`
    },
    code(E) {
      const { data: o, $data: m, schema: u, schemaCode: p, it: g } = E, _ = g.opts.unicodeRegExp ? "u" : "", T = m ? (0, r._)`(new RegExp(${p}, ${_}))` : (0, e.usePattern)(E, u);
      E.fail$data((0, r._)`!${T}.test(${o})`);
    }
  };
  return tt.default = c, tt;
}
var rt = {}, Jr;
function Fa() {
  if (Jr) return rt;
  Jr = 1, Object.defineProperty(rt, "__esModule", { value: !0 });
  const e = z(), y = {
    keyword: ["maxProperties", "minProperties"],
    type: "object",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: c, schemaCode: E }) {
        const o = c === "maxProperties" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${E} properties`;
      },
      params: ({ schemaCode: c }) => (0, e._)`{limit: ${c}}`
    },
    code(c) {
      const { keyword: E, data: o, schemaCode: m } = c, u = E === "maxProperties" ? e.operators.GT : e.operators.LT;
      c.fail$data((0, e._)`Object.keys(${o}).length ${u} ${m}`);
    }
  };
  return rt.default = y, rt;
}
var nt = {}, xr;
function Va() {
  if (xr) return nt;
  xr = 1, Object.defineProperty(nt, "__esModule", { value: !0 });
  const e = he(), r = z(), y = X(), E = {
    keyword: "required",
    type: "object",
    schemaType: "array",
    $data: !0,
    error: {
      message: ({ params: { missingProperty: o } }) => (0, r.str)`must have required property '${o}'`,
      params: ({ params: { missingProperty: o } }) => (0, r._)`{missingProperty: ${o}}`
    },
    code(o) {
      const { gen: m, schema: u, schemaCode: p, data: g, $data: _, it: T } = o, { opts: P } = T;
      if (!_ && u.length === 0)
        return;
      const S = u.length >= P.loopRequired;
      if (T.allErrors ? R() : h(), P.strictRequired) {
        const t = o.parentSchema.properties, { definedProperties: n } = o.it;
        for (const d of u)
          if ((t == null ? void 0 : t[d]) === void 0 && !n.has(d)) {
            const f = T.schemaEnv.baseId + T.errSchemaPath, l = `required property "${d}" is not defined at "${f}" (strictRequired)`;
            (0, y.checkStrictMode)(T, l, T.opts.strictRequired);
          }
      }
      function R() {
        if (S || _)
          o.block$data(r.nil, a);
        else
          for (const t of u)
            (0, e.checkReportMissingProp)(o, t);
      }
      function h() {
        const t = m.let("missing");
        if (S || _) {
          const n = m.let("valid", !0);
          o.block$data(n, () => s(t, n)), o.ok(n);
        } else
          m.if((0, e.checkMissingProp)(o, u, t)), (0, e.reportMissingProp)(o, t), m.else();
      }
      function a() {
        m.forOf("prop", p, (t) => {
          o.setParams({ missingProperty: t }), m.if((0, e.noPropertyInData)(m, g, t, P.ownProperties), () => o.error());
        });
      }
      function s(t, n) {
        o.setParams({ missingProperty: t }), m.forOf(t, p, () => {
          m.assign(n, (0, e.propertyInData)(m, g, t, P.ownProperties)), m.if((0, r.not)(n), () => {
            o.error(), m.break();
          });
        }, r.nil);
      }
    }
  };
  return nt.default = E, nt;
}
var st = {}, Qr;
function Ga() {
  if (Qr) return st;
  Qr = 1, Object.defineProperty(st, "__esModule", { value: !0 });
  const e = z(), y = {
    keyword: ["maxItems", "minItems"],
    type: "array",
    schemaType: "number",
    $data: !0,
    error: {
      message({ keyword: c, schemaCode: E }) {
        const o = c === "maxItems" ? "more" : "fewer";
        return (0, e.str)`must NOT have ${o} than ${E} items`;
      },
      params: ({ schemaCode: c }) => (0, e._)`{limit: ${c}}`
    },
    code(c) {
      const { keyword: E, data: o, schemaCode: m } = c, u = E === "maxItems" ? e.operators.GT : e.operators.LT;
      c.fail$data((0, e._)`${o}.length ${u} ${m}`);
    }
  };
  return st.default = y, st;
}
var at = {}, ot = {}, Zr;
function tr() {
  if (Zr) return ot;
  Zr = 1, Object.defineProperty(ot, "__esModule", { value: !0 });
  const e = Kn();
  return e.code = 'require("ajv/dist/runtime/equal").default', ot.default = e, ot;
}
var en;
function Ha() {
  if (en) return at;
  en = 1, Object.defineProperty(at, "__esModule", { value: !0 });
  const e = It(), r = z(), y = X(), c = tr(), o = {
    keyword: "uniqueItems",
    type: "array",
    schemaType: "boolean",
    $data: !0,
    error: {
      message: ({ params: { i: m, j: u } }) => (0, r.str)`must NOT have duplicate items (items ## ${u} and ${m} are identical)`,
      params: ({ params: { i: m, j: u } }) => (0, r._)`{i: ${m}, j: ${u}}`
    },
    code(m) {
      const { gen: u, data: p, $data: g, schema: _, parentSchema: T, schemaCode: P, it: S } = m;
      if (!g && !_)
        return;
      const R = u.let("valid"), h = T.items ? (0, e.getSchemaTypes)(T.items) : [];
      m.block$data(R, a, (0, r._)`${P} === false`), m.ok(R);
      function a() {
        const d = u.let("i", (0, r._)`${p}.length`), f = u.let("j");
        m.setParams({ i: d, j: f }), u.assign(R, !0), u.if((0, r._)`${d} > 1`, () => (s() ? t : n)(d, f));
      }
      function s() {
        return h.length > 0 && !h.some((d) => d === "object" || d === "array");
      }
      function t(d, f) {
        const l = u.name("item"), v = (0, e.checkDataTypes)(h, l, S.opts.strictNumbers, e.DataType.Wrong), w = u.const("indices", (0, r._)`{}`);
        u.for((0, r._)`;${d}--;`, () => {
          u.let(l, (0, r._)`${p}[${d}]`), u.if(v, (0, r._)`continue`), h.length > 1 && u.if((0, r._)`typeof ${l} == "string"`, (0, r._)`${l} += "_"`), u.if((0, r._)`typeof ${w}[${l}] == "number"`, () => {
            u.assign(f, (0, r._)`${w}[${l}]`), m.error(), u.assign(R, !1).break();
          }).code((0, r._)`${w}[${l}] = ${d}`);
        });
      }
      function n(d, f) {
        const l = (0, y.useFunc)(u, c.default), v = u.name("outer");
        u.label(v).for((0, r._)`;${d}--;`, () => u.for((0, r._)`${f} = ${d}; ${f}--;`, () => u.if((0, r._)`${l}(${p}[${d}], ${p}[${f}])`, () => {
          m.error(), u.assign(R, !1).break(v);
        })));
      }
    }
  };
  return at.default = o, at;
}
var it = {}, tn;
function Ka() {
  if (tn) return it;
  tn = 1, Object.defineProperty(it, "__esModule", { value: !0 });
  const e = z(), r = X(), y = tr(), E = {
    keyword: "const",
    $data: !0,
    error: {
      message: "must be equal to constant",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValue: ${o}}`
    },
    code(o) {
      const { gen: m, data: u, $data: p, schemaCode: g, schema: _ } = o;
      p || _ && typeof _ == "object" ? o.fail$data((0, e._)`!${(0, r.useFunc)(m, y.default)}(${u}, ${g})`) : o.fail((0, e._)`${_} !== ${u}`);
    }
  };
  return it.default = E, it;
}
var ct = {}, rn;
function Ba() {
  if (rn) return ct;
  rn = 1, Object.defineProperty(ct, "__esModule", { value: !0 });
  const e = z(), r = X(), y = tr(), E = {
    keyword: "enum",
    schemaType: "array",
    $data: !0,
    error: {
      message: "must be equal to one of the allowed values",
      params: ({ schemaCode: o }) => (0, e._)`{allowedValues: ${o}}`
    },
    code(o) {
      const { gen: m, data: u, $data: p, schema: g, schemaCode: _, it: T } = o;
      if (!p && g.length === 0)
        throw new Error("enum must have non-empty array");
      const P = g.length >= T.opts.loopEnum;
      let S;
      const R = () => S ?? (S = (0, r.useFunc)(m, y.default));
      let h;
      if (P || p)
        h = m.let("valid"), o.block$data(h, a);
      else {
        if (!Array.isArray(g))
          throw new Error("ajv implementation error");
        const t = m.const("vSchema", _);
        h = (0, e.or)(...g.map((n, d) => s(t, d)));
      }
      o.pass(h);
      function a() {
        m.assign(h, !1), m.forOf("v", _, (t) => m.if((0, e._)`${R()}(${u}, ${t})`, () => m.assign(h, !0).break()));
      }
      function s(t, n) {
        const d = g[n];
        return typeof d == "object" && d !== null ? (0, e._)`${R()}(${u}, ${t}[${n}])` : (0, e._)`${u} === ${d}`;
      }
    }
  };
  return ct.default = E, ct;
}
var nn;
function za() {
  if (nn) return Je;
  nn = 1, Object.defineProperty(Je, "__esModule", { value: !0 });
  const e = Da(), r = ka(), y = qa(), c = Ua(), E = Fa(), o = Va(), m = Ga(), u = Ha(), p = Ka(), g = Ba(), _ = [
    // number
    e.default,
    r.default,
    // string
    y.default,
    c.default,
    // object
    E.default,
    o.default,
    // array
    m.default,
    u.default,
    // any
    { keyword: "type", schemaType: ["string", "array"] },
    { keyword: "nullable", schemaType: "boolean" },
    p.default,
    g.default
  ];
  return Je.default = _, Je;
}
var ut = {}, Me = {}, sn;
function Bn() {
  if (sn) return Me;
  sn = 1, Object.defineProperty(Me, "__esModule", { value: !0 }), Me.validateAdditionalItems = void 0;
  const e = z(), r = X(), c = {
    keyword: "additionalItems",
    type: "array",
    schemaType: ["boolean", "object"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: o } }) => (0, e.str)`must NOT have more than ${o} items`,
      params: ({ params: { len: o } }) => (0, e._)`{limit: ${o}}`
    },
    code(o) {
      const { parentSchema: m, it: u } = o, { items: p } = m;
      if (!Array.isArray(p)) {
        (0, r.checkStrictMode)(u, '"additionalItems" is ignored when "items" is not an array of schemas');
        return;
      }
      E(o, p);
    }
  };
  function E(o, m) {
    const { gen: u, schema: p, data: g, keyword: _, it: T } = o;
    T.items = !0;
    const P = u.const("len", (0, e._)`${g}.length`);
    if (p === !1)
      o.setParams({ len: m.length }), o.pass((0, e._)`${P} <= ${m.length}`);
    else if (typeof p == "object" && !(0, r.alwaysValidSchema)(T, p)) {
      const R = u.var("valid", (0, e._)`${P} <= ${m.length}`);
      u.if((0, e.not)(R), () => S(R)), o.ok(R);
    }
    function S(R) {
      u.forRange("i", m.length, P, (h) => {
        o.subschema({ keyword: _, dataProp: h, dataPropType: r.Type.Num }, R), T.allErrors || u.if((0, e.not)(R), () => u.break());
      });
    }
  }
  return Me.validateAdditionalItems = E, Me.default = c, Me;
}
var dt = {}, Le = {}, an;
function zn() {
  if (an) return Le;
  an = 1, Object.defineProperty(Le, "__esModule", { value: !0 }), Le.validateTuple = void 0;
  const e = z(), r = X(), y = he(), c = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "array", "boolean"],
    before: "uniqueItems",
    code(o) {
      const { schema: m, it: u } = o;
      if (Array.isArray(m))
        return E(o, "additionalItems", m);
      u.items = !0, !(0, r.alwaysValidSchema)(u, m) && o.ok((0, y.validateArray)(o));
    }
  };
  function E(o, m, u = o.schema) {
    const { gen: p, parentSchema: g, data: _, keyword: T, it: P } = o;
    h(g), P.opts.unevaluated && u.length && P.items !== !0 && (P.items = r.mergeEvaluated.items(p, u.length, P.items));
    const S = p.name("valid"), R = p.const("len", (0, e._)`${_}.length`);
    u.forEach((a, s) => {
      (0, r.alwaysValidSchema)(P, a) || (p.if((0, e._)`${R} > ${s}`, () => o.subschema({
        keyword: T,
        schemaProp: s,
        dataProp: s
      }, S)), o.ok(S));
    });
    function h(a) {
      const { opts: s, errSchemaPath: t } = P, n = u.length, d = n === a.minItems && (n === a.maxItems || a[m] === !1);
      if (s.strictTuples && !d) {
        const f = `"${T}" is ${n}-tuple, but minItems or maxItems/${m} are not specified or different at path "${t}"`;
        (0, r.checkStrictMode)(P, f, s.strictTuples);
      }
    }
  }
  return Le.validateTuple = E, Le.default = c, Le;
}
var on;
function Ya() {
  if (on) return dt;
  on = 1, Object.defineProperty(dt, "__esModule", { value: !0 });
  const e = zn(), r = {
    keyword: "prefixItems",
    type: "array",
    schemaType: ["array"],
    before: "uniqueItems",
    code: (y) => (0, e.validateTuple)(y, "items")
  };
  return dt.default = r, dt;
}
var lt = {}, cn;
function Wa() {
  if (cn) return lt;
  cn = 1, Object.defineProperty(lt, "__esModule", { value: !0 });
  const e = z(), r = X(), y = he(), c = Bn(), o = {
    keyword: "items",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    error: {
      message: ({ params: { len: m } }) => (0, e.str)`must NOT have more than ${m} items`,
      params: ({ params: { len: m } }) => (0, e._)`{limit: ${m}}`
    },
    code(m) {
      const { schema: u, parentSchema: p, it: g } = m, { prefixItems: _ } = p;
      g.items = !0, !(0, r.alwaysValidSchema)(g, u) && (_ ? (0, c.validateAdditionalItems)(m, _) : m.ok((0, y.validateArray)(m)));
    }
  };
  return lt.default = o, lt;
}
var ft = {}, un;
function Xa() {
  if (un) return ft;
  un = 1, Object.defineProperty(ft, "__esModule", { value: !0 });
  const e = z(), r = X(), c = {
    keyword: "contains",
    type: "array",
    schemaType: ["object", "boolean"],
    before: "uniqueItems",
    trackErrors: !0,
    error: {
      message: ({ params: { min: E, max: o } }) => o === void 0 ? (0, e.str)`must contain at least ${E} valid item(s)` : (0, e.str)`must contain at least ${E} and no more than ${o} valid item(s)`,
      params: ({ params: { min: E, max: o } }) => o === void 0 ? (0, e._)`{minContains: ${E}}` : (0, e._)`{minContains: ${E}, maxContains: ${o}}`
    },
    code(E) {
      const { gen: o, schema: m, parentSchema: u, data: p, it: g } = E;
      let _, T;
      const { minContains: P, maxContains: S } = u;
      g.opts.next ? (_ = P === void 0 ? 1 : P, T = S) : _ = 1;
      const R = o.const("len", (0, e._)`${p}.length`);
      if (E.setParams({ min: _, max: T }), T === void 0 && _ === 0) {
        (0, r.checkStrictMode)(g, '"minContains" == 0 without "maxContains": "contains" keyword ignored');
        return;
      }
      if (T !== void 0 && _ > T) {
        (0, r.checkStrictMode)(g, '"minContains" > "maxContains" is always invalid'), E.fail();
        return;
      }
      if ((0, r.alwaysValidSchema)(g, m)) {
        let n = (0, e._)`${R} >= ${_}`;
        T !== void 0 && (n = (0, e._)`${n} && ${R} <= ${T}`), E.pass(n);
        return;
      }
      g.items = !0;
      const h = o.name("valid");
      T === void 0 && _ === 1 ? s(h, () => o.if(h, () => o.break())) : _ === 0 ? (o.let(h, !0), T !== void 0 && o.if((0, e._)`${p}.length > 0`, a)) : (o.let(h, !1), a()), E.result(h, () => E.reset());
      function a() {
        const n = o.name("_valid"), d = o.let("count", 0);
        s(n, () => o.if(n, () => t(d)));
      }
      function s(n, d) {
        o.forRange("i", 0, R, (f) => {
          E.subschema({
            keyword: "contains",
            dataProp: f,
            dataPropType: r.Type.Num,
            compositeRule: !0
          }, n), d();
        });
      }
      function t(n) {
        o.code((0, e._)`${n}++`), T === void 0 ? o.if((0, e._)`${n} >= ${_}`, () => o.assign(h, !0).break()) : (o.if((0, e._)`${n} > ${T}`, () => o.assign(h, !1).break()), _ === 1 ? o.assign(h, !0) : o.if((0, e._)`${n} >= ${_}`, () => o.assign(h, !0)));
      }
    }
  };
  return ft.default = c, ft;
}
var Jt = {}, dn;
function Ja() {
  return dn || (dn = 1, function(e) {
    Object.defineProperty(e, "__esModule", { value: !0 }), e.validateSchemaDeps = e.validatePropertyDeps = e.error = void 0;
    const r = z(), y = X(), c = he();
    e.error = {
      message: ({ params: { property: p, depsCount: g, deps: _ } }) => {
        const T = g === 1 ? "property" : "properties";
        return (0, r.str)`must have ${T} ${_} when property ${p} is present`;
      },
      params: ({ params: { property: p, depsCount: g, deps: _, missingProperty: T } }) => (0, r._)`{property: ${p},
    missingProperty: ${T},
    depsCount: ${g},
    deps: ${_}}`
      // TODO change to reference
    };
    const E = {
      keyword: "dependencies",
      type: "object",
      schemaType: "object",
      error: e.error,
      code(p) {
        const [g, _] = o(p);
        m(p, g), u(p, _);
      }
    };
    function o({ schema: p }) {
      const g = {}, _ = {};
      for (const T in p) {
        if (T === "__proto__")
          continue;
        const P = Array.isArray(p[T]) ? g : _;
        P[T] = p[T];
      }
      return [g, _];
    }
    function m(p, g = p.schema) {
      const { gen: _, data: T, it: P } = p;
      if (Object.keys(g).length === 0)
        return;
      const S = _.let("missing");
      for (const R in g) {
        const h = g[R];
        if (h.length === 0)
          continue;
        const a = (0, c.propertyInData)(_, T, R, P.opts.ownProperties);
        p.setParams({
          property: R,
          depsCount: h.length,
          deps: h.join(", ")
        }), P.allErrors ? _.if(a, () => {
          for (const s of h)
            (0, c.checkReportMissingProp)(p, s);
        }) : (_.if((0, r._)`${a} && (${(0, c.checkMissingProp)(p, h, S)})`), (0, c.reportMissingProp)(p, S), _.else());
      }
    }
    e.validatePropertyDeps = m;
    function u(p, g = p.schema) {
      const { gen: _, data: T, keyword: P, it: S } = p, R = _.name("valid");
      for (const h in g)
        (0, y.alwaysValidSchema)(S, g[h]) || (_.if(
          (0, c.propertyInData)(_, T, h, S.opts.ownProperties),
          () => {
            const a = p.subschema({ keyword: P, schemaProp: h }, R);
            p.mergeValidEvaluated(a, R);
          },
          () => _.var(R, !0)
          // TODO var
        ), p.ok(R));
    }
    e.validateSchemaDeps = u, e.default = E;
  }(Jt)), Jt;
}
var mt = {}, ln;
function xa() {
  if (ln) return mt;
  ln = 1, Object.defineProperty(mt, "__esModule", { value: !0 });
  const e = z(), r = X(), c = {
    keyword: "propertyNames",
    type: "object",
    schemaType: ["object", "boolean"],
    error: {
      message: "property name must be valid",
      params: ({ params: E }) => (0, e._)`{propertyName: ${E.propertyName}}`
    },
    code(E) {
      const { gen: o, schema: m, data: u, it: p } = E;
      if ((0, r.alwaysValidSchema)(p, m))
        return;
      const g = o.name("valid");
      o.forIn("key", u, (_) => {
        E.setParams({ propertyName: _ }), E.subschema({
          keyword: "propertyNames",
          data: _,
          dataTypes: ["string"],
          propertyName: _,
          compositeRule: !0
        }, g), o.if((0, e.not)(g), () => {
          E.error(!0), p.allErrors || o.break();
        });
      }), E.ok(g);
    }
  };
  return mt.default = c, mt;
}
var pt = {}, fn;
function Yn() {
  if (fn) return pt;
  fn = 1, Object.defineProperty(pt, "__esModule", { value: !0 });
  const e = he(), r = z(), y = $e(), c = X(), o = {
    keyword: "additionalProperties",
    type: ["object"],
    schemaType: ["boolean", "object"],
    allowUndefined: !0,
    trackErrors: !0,
    error: {
      message: "must NOT have additional properties",
      params: ({ params: m }) => (0, r._)`{additionalProperty: ${m.additionalProperty}}`
    },
    code(m) {
      const { gen: u, schema: p, parentSchema: g, data: _, errsCount: T, it: P } = m;
      if (!T)
        throw new Error("ajv implementation error");
      const { allErrors: S, opts: R } = P;
      if (P.props = !0, R.removeAdditional !== "all" && (0, c.alwaysValidSchema)(P, p))
        return;
      const h = (0, e.allSchemaProperties)(g.properties), a = (0, e.allSchemaProperties)(g.patternProperties);
      s(), m.ok((0, r._)`${T} === ${y.default.errors}`);
      function s() {
        u.forIn("key", _, (l) => {
          !h.length && !a.length ? d(l) : u.if(t(l), () => d(l));
        });
      }
      function t(l) {
        let v;
        if (h.length > 8) {
          const w = (0, c.schemaRefOrVal)(P, g.properties, "properties");
          v = (0, e.isOwnProperty)(u, w, l);
        } else h.length ? v = (0, r.or)(...h.map((w) => (0, r._)`${l} === ${w}`)) : v = r.nil;
        return a.length && (v = (0, r.or)(v, ...a.map((w) => (0, r._)`${(0, e.usePattern)(m, w)}.test(${l})`))), (0, r.not)(v);
      }
      function n(l) {
        u.code((0, r._)`delete ${_}[${l}]`);
      }
      function d(l) {
        if (R.removeAdditional === "all" || R.removeAdditional && p === !1) {
          n(l);
          return;
        }
        if (p === !1) {
          m.setParams({ additionalProperty: l }), m.error(), S || u.break();
          return;
        }
        if (typeof p == "object" && !(0, c.alwaysValidSchema)(P, p)) {
          const v = u.name("valid");
          R.removeAdditional === "failing" ? (f(l, v, !1), u.if((0, r.not)(v), () => {
            m.reset(), n(l);
          })) : (f(l, v), S || u.if((0, r.not)(v), () => u.break()));
        }
      }
      function f(l, v, w) {
        const L = {
          keyword: "additionalProperties",
          dataProp: l,
          dataPropType: c.Type.Str
        };
        w === !1 && Object.assign(L, {
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }), m.subschema(L, v);
      }
    }
  };
  return pt.default = o, pt;
}
var ht = {}, mn;
function Qa() {
  if (mn) return ht;
  mn = 1, Object.defineProperty(ht, "__esModule", { value: !0 });
  const e = Mt(), r = he(), y = X(), c = Yn(), E = {
    keyword: "properties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: m, schema: u, parentSchema: p, data: g, it: _ } = o;
      _.opts.removeAdditional === "all" && p.additionalProperties === void 0 && c.default.code(new e.KeywordCxt(_, c.default, "additionalProperties"));
      const T = (0, r.allSchemaProperties)(u);
      for (const a of T)
        _.definedProperties.add(a);
      _.opts.unevaluated && T.length && _.props !== !0 && (_.props = y.mergeEvaluated.props(m, (0, y.toHash)(T), _.props));
      const P = T.filter((a) => !(0, y.alwaysValidSchema)(_, u[a]));
      if (P.length === 0)
        return;
      const S = m.name("valid");
      for (const a of P)
        R(a) ? h(a) : (m.if((0, r.propertyInData)(m, g, a, _.opts.ownProperties)), h(a), _.allErrors || m.else().var(S, !0), m.endIf()), o.it.definedProperties.add(a), o.ok(S);
      function R(a) {
        return _.opts.useDefaults && !_.compositeRule && u[a].default !== void 0;
      }
      function h(a) {
        o.subschema({
          keyword: "properties",
          schemaProp: a,
          dataProp: a
        }, S);
      }
    }
  };
  return ht.default = E, ht;
}
var _t = {}, pn;
function Za() {
  if (pn) return _t;
  pn = 1, Object.defineProperty(_t, "__esModule", { value: !0 });
  const e = he(), r = z(), y = X(), c = X(), E = {
    keyword: "patternProperties",
    type: "object",
    schemaType: "object",
    code(o) {
      const { gen: m, schema: u, data: p, parentSchema: g, it: _ } = o, { opts: T } = _, P = (0, e.allSchemaProperties)(u), S = P.filter((d) => (0, y.alwaysValidSchema)(_, u[d]));
      if (P.length === 0 || S.length === P.length && (!_.opts.unevaluated || _.props === !0))
        return;
      const R = T.strictSchema && !T.allowMatchingProperties && g.properties, h = m.name("valid");
      _.props !== !0 && !(_.props instanceof r.Name) && (_.props = (0, c.evaluatedPropsToName)(m, _.props));
      const { props: a } = _;
      s();
      function s() {
        for (const d of P)
          R && t(d), _.allErrors ? n(d) : (m.var(h, !0), n(d), m.if(h));
      }
      function t(d) {
        for (const f in R)
          new RegExp(d).test(f) && (0, y.checkStrictMode)(_, `property ${f} matches pattern ${d} (use allowMatchingProperties)`);
      }
      function n(d) {
        m.forIn("key", p, (f) => {
          m.if((0, r._)`${(0, e.usePattern)(o, d)}.test(${f})`, () => {
            const l = S.includes(d);
            l || o.subschema({
              keyword: "patternProperties",
              schemaProp: d,
              dataProp: f,
              dataPropType: c.Type.Str
            }, h), _.opts.unevaluated && a !== !0 ? m.assign((0, r._)`${a}[${f}]`, !0) : !l && !_.allErrors && m.if((0, r.not)(h), () => m.break());
          });
        });
      }
    }
  };
  return _t.default = E, _t;
}
var yt = {}, hn;
function eo() {
  if (hn) return yt;
  hn = 1, Object.defineProperty(yt, "__esModule", { value: !0 });
  const e = X(), r = {
    keyword: "not",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    code(y) {
      const { gen: c, schema: E, it: o } = y;
      if ((0, e.alwaysValidSchema)(o, E)) {
        y.fail();
        return;
      }
      const m = c.name("valid");
      y.subschema({
        keyword: "not",
        compositeRule: !0,
        createErrors: !1,
        allErrors: !1
      }, m), y.failResult(m, () => y.reset(), () => y.error());
    },
    error: { message: "must NOT be valid" }
  };
  return yt.default = r, yt;
}
var Et = {}, _n;
function to() {
  if (_n) return Et;
  _n = 1, Object.defineProperty(Et, "__esModule", { value: !0 });
  const r = {
    keyword: "anyOf",
    schemaType: "array",
    trackErrors: !0,
    code: he().validateUnion,
    error: { message: "must match a schema in anyOf" }
  };
  return Et.default = r, Et;
}
var gt = {}, yn;
function ro() {
  if (yn) return gt;
  yn = 1, Object.defineProperty(gt, "__esModule", { value: !0 });
  const e = z(), r = X(), c = {
    keyword: "oneOf",
    schemaType: "array",
    trackErrors: !0,
    error: {
      message: "must match exactly one schema in oneOf",
      params: ({ params: E }) => (0, e._)`{passingSchemas: ${E.passing}}`
    },
    code(E) {
      const { gen: o, schema: m, parentSchema: u, it: p } = E;
      if (!Array.isArray(m))
        throw new Error("ajv implementation error");
      if (p.opts.discriminator && u.discriminator)
        return;
      const g = m, _ = o.let("valid", !1), T = o.let("passing", null), P = o.name("_valid");
      E.setParams({ passing: T }), o.block(S), E.result(_, () => E.reset(), () => E.error(!0));
      function S() {
        g.forEach((R, h) => {
          let a;
          (0, r.alwaysValidSchema)(p, R) ? o.var(P, !0) : a = E.subschema({
            keyword: "oneOf",
            schemaProp: h,
            compositeRule: !0
          }, P), h > 0 && o.if((0, e._)`${P} && ${_}`).assign(_, !1).assign(T, (0, e._)`[${T}, ${h}]`).else(), o.if(P, () => {
            o.assign(_, !0), o.assign(T, h), a && E.mergeEvaluated(a, e.Name);
          });
        });
      }
    }
  };
  return gt.default = c, gt;
}
var vt = {}, En;
function no() {
  if (En) return vt;
  En = 1, Object.defineProperty(vt, "__esModule", { value: !0 });
  const e = X(), r = {
    keyword: "allOf",
    schemaType: "array",
    code(y) {
      const { gen: c, schema: E, it: o } = y;
      if (!Array.isArray(E))
        throw new Error("ajv implementation error");
      const m = c.name("valid");
      E.forEach((u, p) => {
        if ((0, e.alwaysValidSchema)(o, u))
          return;
        const g = y.subschema({ keyword: "allOf", schemaProp: p }, m);
        y.ok(m), y.mergeEvaluated(g);
      });
    }
  };
  return vt.default = r, vt;
}
var At = {}, gn;
function so() {
  if (gn) return At;
  gn = 1, Object.defineProperty(At, "__esModule", { value: !0 });
  const e = z(), r = X(), c = {
    keyword: "if",
    schemaType: ["object", "boolean"],
    trackErrors: !0,
    error: {
      message: ({ params: o }) => (0, e.str)`must match "${o.ifClause}" schema`,
      params: ({ params: o }) => (0, e._)`{failingKeyword: ${o.ifClause}}`
    },
    code(o) {
      const { gen: m, parentSchema: u, it: p } = o;
      u.then === void 0 && u.else === void 0 && (0, r.checkStrictMode)(p, '"if" without "then" and "else" is ignored');
      const g = E(p, "then"), _ = E(p, "else");
      if (!g && !_)
        return;
      const T = m.let("valid", !0), P = m.name("_valid");
      if (S(), o.reset(), g && _) {
        const h = m.let("ifClause");
        o.setParams({ ifClause: h }), m.if(P, R("then", h), R("else", h));
      } else g ? m.if(P, R("then")) : m.if((0, e.not)(P), R("else"));
      o.pass(T, () => o.error(!0));
      function S() {
        const h = o.subschema({
          keyword: "if",
          compositeRule: !0,
          createErrors: !1,
          allErrors: !1
        }, P);
        o.mergeEvaluated(h);
      }
      function R(h, a) {
        return () => {
          const s = o.subschema({ keyword: h }, P);
          m.assign(T, P), o.mergeValidEvaluated(s, T), a ? m.assign(a, (0, e._)`${h}`) : o.setParams({ ifClause: h });
        };
      }
    }
  };
  function E(o, m) {
    const u = o.schema[m];
    return u !== void 0 && !(0, r.alwaysValidSchema)(o, u);
  }
  return At.default = c, At;
}
var Rt = {}, vn;
function ao() {
  if (vn) return Rt;
  vn = 1, Object.defineProperty(Rt, "__esModule", { value: !0 });
  const e = X(), r = {
    keyword: ["then", "else"],
    schemaType: ["object", "boolean"],
    code({ keyword: y, parentSchema: c, it: E }) {
      c.if === void 0 && (0, e.checkStrictMode)(E, `"${y}" without "if" is ignored`);
    }
  };
  return Rt.default = r, Rt;
}
var An;
function oo() {
  if (An) return ut;
  An = 1, Object.defineProperty(ut, "__esModule", { value: !0 });
  const e = Bn(), r = Ya(), y = zn(), c = Wa(), E = Xa(), o = Ja(), m = xa(), u = Yn(), p = Qa(), g = Za(), _ = eo(), T = to(), P = ro(), S = no(), R = so(), h = ao();
  function a(s = !1) {
    const t = [
      // any
      _.default,
      T.default,
      P.default,
      S.default,
      R.default,
      h.default,
      // object
      m.default,
      u.default,
      o.default,
      p.default,
      g.default
    ];
    return s ? t.push(r.default, c.default) : t.push(e.default, y.default), t.push(E.default), t;
  }
  return ut.default = a, ut;
}
var Tt = {}, $t = {}, Rn;
function io() {
  if (Rn) return $t;
  Rn = 1, Object.defineProperty($t, "__esModule", { value: !0 });
  const e = z(), y = {
    keyword: "format",
    type: ["number", "string"],
    schemaType: "string",
    $data: !0,
    error: {
      message: ({ schemaCode: c }) => (0, e.str)`must match format "${c}"`,
      params: ({ schemaCode: c }) => (0, e._)`{format: ${c}}`
    },
    code(c, E) {
      const { gen: o, data: m, $data: u, schema: p, schemaCode: g, it: _ } = c, { opts: T, errSchemaPath: P, schemaEnv: S, self: R } = _;
      if (!T.validateFormats)
        return;
      u ? h() : a();
      function h() {
        const s = o.scopeValue("formats", {
          ref: R.formats,
          code: T.code.formats
        }), t = o.const("fDef", (0, e._)`${s}[${g}]`), n = o.let("fType"), d = o.let("format");
        o.if((0, e._)`typeof ${t} == "object" && !(${t} instanceof RegExp)`, () => o.assign(n, (0, e._)`${t}.type || "string"`).assign(d, (0, e._)`${t}.validate`), () => o.assign(n, (0, e._)`"string"`).assign(d, t)), c.fail$data((0, e.or)(f(), l()));
        function f() {
          return T.strictSchema === !1 ? e.nil : (0, e._)`${g} && !${d}`;
        }
        function l() {
          const v = S.$async ? (0, e._)`(${t}.async ? await ${d}(${m}) : ${d}(${m}))` : (0, e._)`${d}(${m})`, w = (0, e._)`(typeof ${d} == "function" ? ${v} : ${d}.test(${m}))`;
          return (0, e._)`${d} && ${d} !== true && ${n} === ${E} && !${w}`;
        }
      }
      function a() {
        const s = R.formats[p];
        if (!s) {
          f();
          return;
        }
        if (s === !0)
          return;
        const [t, n, d] = l(s);
        t === E && c.pass(v());
        function f() {
          if (T.strictSchema === !1) {
            R.logger.warn(w());
            return;
          }
          throw new Error(w());
          function w() {
            return `unknown format "${p}" ignored in schema at path "${P}"`;
          }
        }
        function l(w) {
          const L = w instanceof RegExp ? (0, e.regexpCode)(w) : T.code.formats ? (0, e._)`${T.code.formats}${(0, e.getProperty)(p)}` : void 0, j = o.scopeValue("formats", { key: p, ref: w, code: L });
          return typeof w == "object" && !(w instanceof RegExp) ? [w.type || "string", w.validate, (0, e._)`${j}.validate`] : ["string", w, j];
        }
        function v() {
          if (typeof s == "object" && !(s instanceof RegExp) && s.async) {
            if (!S.$async)
              throw new Error("async format in sync schema");
            return (0, e._)`await ${d}(${m})`;
          }
          return typeof n == "function" ? (0, e._)`${d}(${m})` : (0, e._)`${d}.test(${m})`;
        }
      }
    }
  };
  return $t.default = y, $t;
}
var Tn;
function co() {
  if (Tn) return Tt;
  Tn = 1, Object.defineProperty(Tt, "__esModule", { value: !0 });
  const r = [io().default];
  return Tt.default = r, Tt;
}
var Ne = {}, $n;
function uo() {
  return $n || ($n = 1, Object.defineProperty(Ne, "__esModule", { value: !0 }), Ne.contentVocabulary = Ne.metadataVocabulary = void 0, Ne.metadataVocabulary = [
    "title",
    "description",
    "default",
    "deprecated",
    "readOnly",
    "writeOnly",
    "examples"
  ], Ne.contentVocabulary = [
    "contentMediaType",
    "contentEncoding",
    "contentSchema"
  ]), Ne;
}
var Sn;
function lo() {
  if (Sn) return Ye;
  Sn = 1, Object.defineProperty(Ye, "__esModule", { value: !0 });
  const e = La(), r = za(), y = oo(), c = co(), E = uo(), o = [
    e.default,
    r.default,
    (0, y.default)(),
    c.default,
    E.metadataVocabulary,
    E.contentVocabulary
  ];
  return Ye.default = o, Ye;
}
var St = {}, Fe = {}, Pn;
function fo() {
  if (Pn) return Fe;
  Pn = 1, Object.defineProperty(Fe, "__esModule", { value: !0 }), Fe.DiscrError = void 0;
  var e;
  return function(r) {
    r.Tag = "tag", r.Mapping = "mapping";
  }(e || (Fe.DiscrError = e = {})), Fe;
}
var In;
function mo() {
  if (In) return St;
  In = 1, Object.defineProperty(St, "__esModule", { value: !0 });
  const e = z(), r = fo(), y = er(), c = Lt(), E = X(), m = {
    keyword: "discriminator",
    type: "object",
    schemaType: "object",
    error: {
      message: ({ params: { discrError: u, tagName: p } }) => u === r.DiscrError.Tag ? `tag "${p}" must be string` : `value of tag "${p}" must be in oneOf`,
      params: ({ params: { discrError: u, tag: p, tagName: g } }) => (0, e._)`{error: ${u}, tag: ${g}, tagValue: ${p}}`
    },
    code(u) {
      const { gen: p, data: g, schema: _, parentSchema: T, it: P } = u, { oneOf: S } = T;
      if (!P.opts.discriminator)
        throw new Error("discriminator: requires discriminator option");
      const R = _.propertyName;
      if (typeof R != "string")
        throw new Error("discriminator: requires propertyName");
      if (_.mapping)
        throw new Error("discriminator: mapping is not supported");
      if (!S)
        throw new Error("discriminator: requires oneOf keyword");
      const h = p.let("valid", !1), a = p.const("tag", (0, e._)`${g}${(0, e.getProperty)(R)}`);
      p.if((0, e._)`typeof ${a} == "string"`, () => s(), () => u.error(!1, { discrError: r.DiscrError.Tag, tag: a, tagName: R })), u.ok(h);
      function s() {
        const d = n();
        p.if(!1);
        for (const f in d)
          p.elseIf((0, e._)`${a} === ${f}`), p.assign(h, t(d[f]));
        p.else(), u.error(!1, { discrError: r.DiscrError.Mapping, tag: a, tagName: R }), p.endIf();
      }
      function t(d) {
        const f = p.name("valid"), l = u.subschema({ keyword: "oneOf", schemaProp: d }, f);
        return u.mergeEvaluated(l, e.Name), f;
      }
      function n() {
        var d;
        const f = {}, l = w(T);
        let v = !0;
        for (let U = 0; U < S.length; U++) {
          let H = S[U];
          if (H != null && H.$ref && !(0, E.schemaHasRulesButRef)(H, P.self.RULES)) {
            const W = H.$ref;
            if (H = y.resolveRef.call(P.self, P.schemaEnv.root, P.baseId, W), H instanceof y.SchemaEnv && (H = H.schema), H === void 0)
              throw new c.default(P.opts.uriResolver, P.baseId, W);
          }
          const G = (d = H == null ? void 0 : H.properties) === null || d === void 0 ? void 0 : d[R];
          if (typeof G != "object")
            throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${R}"`);
          v = v && (l || w(H)), L(G, U);
        }
        if (!v)
          throw new Error(`discriminator: "${R}" must be required`);
        return f;
        function w({ required: U }) {
          return Array.isArray(U) && U.includes(R);
        }
        function L(U, H) {
          if (U.const)
            j(U.const, H);
          else if (U.enum)
            for (const G of U.enum)
              j(G, H);
          else
            throw new Error(`discriminator: "properties/${R}" must have "const" or "enum"`);
        }
        function j(U, H) {
          if (typeof U != "string" || U in f)
            throw new Error(`discriminator: "${R}" values must be unique strings`);
          f[U] = H;
        }
      }
    }
  };
  return St.default = m, St;
}
const po = "http://json-schema.org/draft-07/schema#", ho = "http://json-schema.org/draft-07/schema#", _o = "Core schema meta-schema", yo = { schemaArray: { type: "array", minItems: 1, items: { $ref: "#" } }, nonNegativeInteger: { type: "integer", minimum: 0 }, nonNegativeIntegerDefault0: { allOf: [{ $ref: "#/definitions/nonNegativeInteger" }, { default: 0 }] }, simpleTypes: { enum: ["array", "boolean", "integer", "null", "number", "object", "string"] }, stringArray: { type: "array", items: { type: "string" }, uniqueItems: !0, default: [] } }, Eo = ["object", "boolean"], go = { $id: { type: "string", format: "uri-reference" }, $schema: { type: "string", format: "uri" }, $ref: { type: "string", format: "uri-reference" }, $comment: { type: "string" }, title: { type: "string" }, description: { type: "string" }, default: !0, readOnly: { type: "boolean", default: !1 }, examples: { type: "array", items: !0 }, multipleOf: { type: "number", exclusiveMinimum: 0 }, maximum: { type: "number" }, exclusiveMaximum: { type: "number" }, minimum: { type: "number" }, exclusiveMinimum: { type: "number" }, maxLength: { $ref: "#/definitions/nonNegativeInteger" }, minLength: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, pattern: { type: "string", format: "regex" }, additionalItems: { $ref: "#" }, items: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/schemaArray" }], default: !0 }, maxItems: { $ref: "#/definitions/nonNegativeInteger" }, minItems: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, uniqueItems: { type: "boolean", default: !1 }, contains: { $ref: "#" }, maxProperties: { $ref: "#/definitions/nonNegativeInteger" }, minProperties: { $ref: "#/definitions/nonNegativeIntegerDefault0" }, required: { $ref: "#/definitions/stringArray" }, additionalProperties: { $ref: "#" }, definitions: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, properties: { type: "object", additionalProperties: { $ref: "#" }, default: {} }, patternProperties: { type: "object", additionalProperties: { $ref: "#" }, propertyNames: { format: "regex" }, default: {} }, dependencies: { type: "object", additionalProperties: { anyOf: [{ $ref: "#" }, { $ref: "#/definitions/stringArray" }] } }, propertyNames: { $ref: "#" }, const: !0, enum: { type: "array", items: !0, minItems: 1, uniqueItems: !0 }, type: { anyOf: [{ $ref: "#/definitions/simpleTypes" }, { type: "array", items: { $ref: "#/definitions/simpleTypes" }, minItems: 1, uniqueItems: !0 }] }, format: { type: "string" }, contentMediaType: { type: "string" }, contentEncoding: { type: "string" }, if: { $ref: "#" }, then: { $ref: "#" }, else: { $ref: "#" }, allOf: { $ref: "#/definitions/schemaArray" }, anyOf: { $ref: "#/definitions/schemaArray" }, oneOf: { $ref: "#/definitions/schemaArray" }, not: { $ref: "#" } }, vo = {
  $schema: po,
  $id: ho,
  title: _o,
  definitions: yo,
  type: Eo,
  properties: go,
  default: !0
};
var Nn;
function Ao() {
  return Nn || (Nn = 1, function(e, r) {
    Object.defineProperty(r, "__esModule", { value: !0 }), r.MissingRefError = r.ValidationError = r.CodeGen = r.Name = r.nil = r.stringify = r.str = r._ = r.KeywordCxt = r.Ajv = void 0;
    const y = ba(), c = lo(), E = mo(), o = vo, m = ["/properties"], u = "http://json-schema.org/draft-07/schema";
    class p extends y.default {
      _addVocabularies() {
        super._addVocabularies(), c.default.forEach((R) => this.addVocabulary(R)), this.opts.discriminator && this.addKeyword(E.default);
      }
      _addDefaultMetaSchema() {
        if (super._addDefaultMetaSchema(), !this.opts.meta)
          return;
        const R = this.opts.$data ? this.$dataMetaSchema(o, m) : o;
        this.addMetaSchema(R, u, !1), this.refs["http://json-schema.org/schema"] = u;
      }
      defaultMeta() {
        return this.opts.defaultMeta = super.defaultMeta() || (this.getSchema(u) ? u : void 0);
      }
    }
    r.Ajv = p, e.exports = r = p, e.exports.Ajv = p, Object.defineProperty(r, "__esModule", { value: !0 }), r.default = p;
    var g = Mt();
    Object.defineProperty(r, "KeywordCxt", { enumerable: !0, get: function() {
      return g.KeywordCxt;
    } });
    var _ = z();
    Object.defineProperty(r, "_", { enumerable: !0, get: function() {
      return _._;
    } }), Object.defineProperty(r, "str", { enumerable: !0, get: function() {
      return _.str;
    } }), Object.defineProperty(r, "stringify", { enumerable: !0, get: function() {
      return _.stringify;
    } }), Object.defineProperty(r, "nil", { enumerable: !0, get: function() {
      return _.nil;
    } }), Object.defineProperty(r, "Name", { enumerable: !0, get: function() {
      return _.Name;
    } }), Object.defineProperty(r, "CodeGen", { enumerable: !0, get: function() {
      return _.CodeGen;
    } });
    var T = Zt();
    Object.defineProperty(r, "ValidationError", { enumerable: !0, get: function() {
      return T.default;
    } });
    var P = Lt();
    Object.defineProperty(r, "MissingRefError", { enumerable: !0, get: function() {
      return P.default;
    } });
  }(Ge, Ge.exports)), Ge.exports;
}
var Ro = Ao();
const To = /* @__PURE__ */ ma(Ro), Se = new To(), $o = Se.compile(Ds), So = Se.compile(Ls), Po = Se.compile(Is), Io = Se.compile(Ns), No = Se.compile(bs), Oo = Se.compile(Ms), wo = Se.compile(ws), bo = Se.compile(Os), Mu = (e) => $o(e), Lu = (e) => So(e), Du = (e) => Po(e), ku = (e) => Io(e), ju = (e) => No(e), qu = (e) => Oo(e), Uu = (e) => wo(e), Fu = (e) => bo(e), Vu = 0, Gu = 101, Hu = 401, Ku = 102, Bu = 402, zu = 103, Yu = 104, Wu = 105, Xu = 405, Ju = 108, xu = 408, Qu = 109, Zu = 111, ed = 411, td = 112, rd = 113, nd = 115, sd = 117, ad = 118, od = 119, id = 121, cd = 122, ud = 123, dd = 124, ld = 125, fd = 126, md = 127, pd = 128, hd = 129, _d = 132, yd = 133, Ed = 134, gd = 135, vd = 136, Ad = 137, Rd = 138, Td = 139, $d = 140, Sd = 201, Pd = 202, Id = 203, Nd = 204, Od = 205, wd = 206, bd = 211, Cd = 212, Md = 213, Ld = 214, Dd = 216, kd = 217, jd = 221, qd = 222, Ud = 223, Fd = 224, Vd = 225, Gd = 230, Hd = 231, Kd = 232, Bd = 233, zd = 234, Yd = 235, Wd = 236, Xd = 241, Jd = 242, xd = 243, Qd = 244, Zd = 245, el = 246, tl = 249, rl = 250, nl = 251, sl = 261, al = 282, ol = 283, il = 284, cl = 285, ul = 301, dl = 302, ll = 605, fl = 303, ml = 311, pl = 312, hl = 313, _l = 314, yl = 315, El = 320, gl = 321, vl = 322, Al = 323, Rl = 324, Tl = 325, $l = 331, Sl = 332, Pl = 333, Il = 334, Nl = 335, Ol = 336, wl = 337, bl = 339, Cl = 340, Ml = 351, Ll = 342, Dl = 352, kl = 353, jl = 354, ql = 355, Ul = 655, Fl = 356, Vl = 357, Gl = 0, Hl = 1, Kl = 2, Bl = 3, zl = 4, Yl = 5, Wl = 6, Xl = 7, Jl = 8, xl = 9, Ql = 10, Zl = 11, ef = 12, tf = 13, rf = 14, nf = 15, sf = 16, af = 17, of = 18, cf = 19, uf = 20, df = 21, lf = 22, ff = 23, mf = 24, pf = 25, hf = 26, _f = 27, yf = 28, Ef = 29, gf = 30, vf = 31, Af = 32, Rf = 33, Tf = 34, $f = 35, Sf = 36, Pf = 37, If = 38, Nf = 39, Of = 40, wf = 41, bf = 42, Cf = 43, Mf = 44, Lf = 45, Df = {
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
}, kf = (e = {}) => ({
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
}), jf = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  trigger: e.trigger ?? 0,
  list: e.list ?? [],
  switchId: e.switchId ?? 0
}), qf = (e = {}) => ({
  id: e.id ?? 0,
  name: e.name ?? "",
  members: e.members ?? [],
  pages: e.pages ?? []
}), Uf = (e = {}) => ({
  enemyId: e.enemyId ?? 0,
  x: e.x ?? 0,
  y: e.y ?? 0,
  hidden: e.hidden ?? !1
}), Ff = (e = {}) => ({
  actorHp: e.actorHp ?? 0,
  actorId: e.actorId ?? 0,
  enemyValid: e.enemyValid ?? 0,
  switchValid: e.switchValid ?? 0
}), Vf = {
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
}, Gf = {
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
}, Co = {
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
}, Hf = {
  rpg: {
    damage: fa,
    data: la,
    traits: Z,
    itemEffect: de
  },
  global: Co
}, Kf = (e) => ({
  name: e.name ?? "",
  volume: e.volume ?? 100,
  pitch: e.pitch ?? 100,
  pan: e.pan ?? 0
});
export {
  Cl as ABORT_BATTLE,
  we as AUTHOR_RMMZ,
  ul as BATTLE_PROCESSING,
  vl as CHANGE_ACTOR_IMAGES,
  pd as CHANGE_ARMORS,
  ol as CHANGE_BATTLE_BACKGROUND,
  _d as CHANGE_BATTLE_BGM,
  gl as CHANGE_CLASS,
  Td as CHANGE_DEFEAT_ME,
  vd as CHANGE_ENCOUNTER,
  $l as CHANGE_ENEMY_HP,
  Sl as CHANGE_ENEMY_MP,
  Pl as CHANGE_ENEMY_STATE,
  Ll as CHANGE_ENEMY_TP,
  yl as CHANGE_EXP,
  Ad as CHANGE_FORMATION_ACCESS,
  ld as CHANGE_GOLD,
  ml as CHANGE_HP,
  fd as CHANGE_ITEMS,
  gd as CHANGE_MENU_ACCESS,
  pl as CHANGE_MP,
  El as CHANGE_NAME,
  Rl as CHANGE_NICKNAME,
  il as CHANGE_PARALLAX,
  hd as CHANGE_PARTY_MEMBER,
  Dd as CHANGE_PLAYER_FOLLOWERS,
  Tl as CHANGE_PROFILE,
  Ed as CHANGE_SAVE_ACCESS,
  al as CHANGE_TILESET,
  hl as CHANGE_TP,
  bd as CHANGE_TRANSPARENCY,
  $d as CHANGE_VEHICLE_BGM,
  Al as CHANGE_VEHICLE_IMAGE,
  yd as CHANGE_VICTORY_ME,
  md as CHANGE_WEAPONS,
  Rd as CHANGE_WINDOW_COLOR,
  Xi as COLLAPS_BOSS,
  Ji as COLLAPS_INSTANT,
  xi as COLLAPS_NONE,
  Wi as COLLAPS_NORMAL,
  Ju as COMMENT,
  xu as COMMENT_BODY,
  sd as COMMON_EVENT,
  Zu as CONDITIONAL_BRANCH,
  ed as CONDITIONAL_BRANCH_ELSE,
  ud as CONTROL_SELF_SWITCH,
  id as CONTROL_SWITCHES,
  dd as CONTROL_TIMER,
  cd as CONTROL_VARIABLES,
  fa as DEFAULT_DAMAGE_LABELS,
  Co as DEFAULT_GLOBAL_LABELS,
  Ou as DEFAULT_ITEM_LABELS,
  wu as DEFAULT_SKILL_LABELS,
  Vf as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  bu as DEFAULT_USABLE_ITEM_LABELS,
  Gs as EFFECT_ADD_BUFF,
  Hs as EFFECT_ADD_DEBUFF,
  Fs as EFFECT_ADD_STATE,
  Ws as EFFECT_COMMON_EVENT,
  Us as EFFECT_GAIN_TP,
  zs as EFFECT_GROW,
  Ys as EFFECT_LEARN_SKILL,
  js as EFFECT_RECOVER_HP,
  qs as EFFECT_RECOVER_MP,
  Ks as EFFECT_REMOVE_BUFF,
  Bs as EFFECT_REMOVE_DEBUFF,
  Vs as EFFECT_REMOVE_STATE,
  cu as EFFECT_SPECIAL,
  Nl as ENEMY_APPEAR,
  Il as ENEMY_RECOVER_ALL,
  Ol as ENEMY_TRANSFORM,
  Ld as ERASE_EVENT,
  Yd as ERASE_PICTURE,
  nd as EXIT_EVENT_PROCESSING,
  lc as EXTRA_PARAM_CEV,
  pc as EXTRA_PARAM_CNT,
  dc as EXTRA_PARAM_CRI,
  uc as EXTRA_PARAM_EVA,
  cc as EXTRA_PARAM_HIT,
  hc as EXTRA_PARAM_HRG,
  fc as EXTRA_PARAM_MEV,
  mc as EXTRA_PARAM_MRF,
  _c as EXTRA_PARAM_MRG,
  yc as EXTRA_PARAM_TRG,
  qd as FADEIN_SCREEN,
  Jd as FADEOUT_BGM,
  el as FADEOUT_BGS,
  jd as FADEOUT_SCREEN,
  Qo as FILANAME_CLASSES,
  xo as FILENAME_ACTORS,
  oi as FILENAME_ANIMATIONS,
  ri as FILENAME_ARMORS,
  ci as FILENAME_COMMON_EVENTS,
  ni as FILENAME_ENEMIES,
  ei as FILENAME_ITEMS,
  ui as FILENAME_MAP_INFOS,
  Zo as FILENAME_SKILLS,
  ai as FILENAME_STATES,
  Jo as FILENAME_SYSTEM,
  ii as FILENAME_TILESET,
  si as FILENAME_TROOPS,
  ti as FILENAME_WEAPONS,
  sc as FLAG_ID_AUTO_BATTLE,
  ac as FLAG_ID_GUARD,
  ic as FLAG_ID_PRESERVE_TP,
  oc as FLAG_ID_SUBSTITUTE,
  Fd as FLASH_SCREEN,
  fi as FOLDER_AUDIO,
  Mo as FOLDER_AUDIO_BGM,
  ko as FOLDER_AUDIO_BGS,
  Do as FOLDER_AUDIO_ME,
  Lo as FOLDER_AUDIO_SE,
  di as FOLDER_DATA,
  li as FOLDER_IMG,
  jo as FOLDER_IMG_BATTLEBACK1,
  qo as FOLDER_IMG_BATTLEBACK2,
  Uo as FOLDER_IMG_CHACTERS,
  Fo as FOLDER_IMG_ENEMIES,
  Vo as FOLDER_IMG_FACES,
  Go as FOLDER_IMG_PARALLACES,
  Ho as FOLDER_IMG_PICTURES,
  Ko as FOLDER_IMG_SV_ACTORS,
  Bo as FOLDER_IMG_SV_ENEMIES,
  zo as FOLDER_IMG_SYSTEM,
  Yo as FOLDER_IMG_TILESETS,
  Wo as FOLDER_IMG_TITLES1,
  Xo as FOLDER_IMG_TITLES2,
  mi as FOLDER_JS,
  bl as FORCE_ACTION,
  kl as GAME_OVER,
  kd as GATHER_FOLLOWERS,
  cl as GET_LOCATION_INFO,
  wd as GET_ONOFF_VEHICLE,
  au as HITTYPE_CERTAIN,
  iu as HITTYPE_MAGICAL,
  ou as HITTYPE_PHYSICAL,
  zu as INPUT_NUMBER,
  ad as LABEL,
  Zc as LABELS_DATA_WEAPON,
  od as LABEL_JUMP,
  Hf as LABEL_REGISTRY_JP,
  la as LABEL_SET_DATA,
  de as LABEL_SET_ITEM_EFFECT,
  Z as LABEL_SET_TRAIT,
  td as LOOP,
  rd as LOOP_BREAK,
  wn as MODULE_DATA,
  bn as MODULE_SYSTEM,
  xt as MODULE_TRAIT,
  Kd as MOVE_PICTURE,
  Gf as MockSystemLabelDataTypes,
  fl as NAME_INPUT_PROCESSING,
  Vu as NO_OPERATION,
  Ml as OPEN_MENU_SCREEN,
  Dl as OPEN_SAVE_SCREEN,
  ec as PARTY_ABILITY_CANCEL_SURPRISE,
  nc as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Qi as PARTY_ABILITY_ENCOUNTER_HALF,
  Zi as PARTY_ABILITY_ENCOUNTER_NONE,
  rc as PARTY_ABILITY_GOLD_DOUBLE,
  tc as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Xd as PLAY_BGM,
  Zd as PLAY_BGS,
  tl as PLAY_ME,
  sl as PLAY_MOVIE,
  rl as PLAY_SE,
  Fl as PLUGIN_COMMAND_MV,
  Vl as PLUGIN_COMMAND_MZ,
  _l as RECOVER_ALL,
  $c as REGULAR_PARAM_AGI,
  vc as REGULAR_PARAM_ATK,
  Ac as REGULAR_PARAM_DEF,
  Sc as REGULAR_PARAM_LUK,
  Rc as REGULAR_PARAM_MATK,
  Ec as REGULAR_PARAM_MAX_HP,
  gc as REGULAR_PARAM_MAX_MP,
  Tc as REGULAR_PARAM_MDEF,
  Qd as RESUME_BGM,
  jl as RETURN_TO_TITLE_SCREEN,
  Bd as ROTATE_PICTURE,
  Cf as ROUTE_CHANGE_BLEND_MODE,
  gf as ROUTE_CHANGE_FREQ,
  wf as ROUTE_CHANGE_IMAGE,
  bf as ROUTE_CHANGE_OPACITY,
  Ef as ROUTE_CHANGE_SPEED,
  Sf as ROUTE_DIR_FIX_OFF,
  $f as ROUTE_DIR_FIX_ON,
  Gl as ROUTE_END,
  rf as ROUTE_JUMP,
  Zl as ROUTE_MOVE_AWAY,
  tf as ROUTE_MOVE_BACKWARD,
  Hl as ROUTE_MOVE_DOWN,
  ef as ROUTE_MOVE_FORWARD,
  Kl as ROUTE_MOVE_LEFT,
  Yl as ROUTE_MOVE_LOWER_L,
  Wl as ROUTE_MOVE_LOWER_R,
  xl as ROUTE_MOVE_RANDOM,
  Bl as ROUTE_MOVE_RIGHT,
  Ql as ROUTE_MOVE_TOWARD,
  zl as ROUTE_MOVE_UP,
  Xl as ROUTE_MOVE_UPPER_L,
  Jl as ROUTE_MOVE_UPPER_R,
  Mf as ROUTE_PLAY_SE,
  Lf as ROUTE_SCRIPT,
  Tf as ROUTE_STEP_ANIME_OFF,
  Rf as ROUTE_STEP_ANIME_ON,
  yf as ROUTE_SWITCH_OFF,
  _f as ROUTE_SWITCH_ON,
  If as ROUTE_THROUGH_OFF,
  Pf as ROUTE_THROUGH_ON,
  Of as ROUTE_TRANSPARENT_OFF,
  Nf as ROUTE_TRANSPARENT_ON,
  lf as ROUTE_TURN_180D,
  df as ROUTE_TURN_90D_L,
  uf as ROUTE_TURN_90D_R,
  ff as ROUTE_TURN_90D_R_L,
  hf as ROUTE_TURN_AWAY,
  sf as ROUTE_TURN_DOWN,
  af as ROUTE_TURN_LEFT,
  mf as ROUTE_TURN_RANDOM,
  of as ROUTE_TURN_RIGHT,
  pf as ROUTE_TURN_TOWARD,
  cf as ROUTE_TURN_UP,
  nf as ROUTE_WAIT,
  Af as ROUTE_WALK_ANIME_OFF,
  vf as ROUTE_WALK_ANIME_ON,
  xd as SAVE_BGM,
  Cu as SCHEMA_DAMAGE,
  Is as SCHEMA_DATA_ACTOR,
  Ns as SCHEMA_DATA_ARMMOR,
  Os as SCHEMA_DATA_CLASS,
  Ms as SCHEMA_DATA_ENEMY,
  Ds as SCHEMA_DATA_ITEM,
  Df as SCHEMA_DATA_MAP_INFO,
  Ls as SCHEMA_DATA_SKILL,
  ws as SCHEMA_DATA_STATE,
  bs as SCHEMA_DATA_WEAPON,
  Yc as SCHEMA_TRAIT,
  ql as SCRIPT_EVAL,
  Ul as SCRIPT_EVAL_BODY,
  Nd as SCROLL_MAP,
  Yu as SELECT_ITEM,
  Id as SET_EVENT_LOCATION,
  Od as SET_MOVEMENT_ROUTE,
  Pd as SET_VEHICLE_LOCATION,
  Wd as SET_WEATHER_EFFECT,
  Vd as SHAKE_SCREEN,
  dl as SHOP_PROCESSING,
  ll as SHOP_PROCESSING_BODY,
  Cd as SHOW_ANIMATION,
  Md as SHOW_BALLOON_ICON,
  wl as SHOW_BATTLE_ANIMATION,
  Ku as SHOW_CHOICES,
  Bu as SHOW_CHOICES_ITEM,
  Gu as SHOW_MESSAGE,
  Hu as SHOW_MESSAGE_BODY,
  Hd as SHOW_PICTURE,
  Wu as SHOW_SCROLLING_TEXT,
  Xu as SHOW_SCROLLING_TEXT_BODY,
  Qu as SKIP,
  uu as SPECIAL_EFFECT_ESCAPE,
  Dc as SPECIAL_PARAM_EXR,
  Lc as SPECIAL_PARAM_FDR,
  Ic as SPECIAL_PARAM_GRD,
  wc as SPECIAL_PARAM_MCR,
  Mc as SPECIAL_PARAM_MDR,
  Cc as SPECIAL_PARAM_PDR,
  Oc as SPECIAL_PARAM_PHA,
  Nc as SPECIAL_PARAM_REC,
  bc as SPECIAL_PARAM_TCR,
  Pc as SPECIAL_PARAM_TGR,
  xs as SRC_ARMOR_TYPES,
  Ru as SRC_COLOR,
  Xs as SRC_COMMON_EVNET,
  mu as SRC_DATA_ACTOR,
  gu as SRC_DATA_ARMOR,
  vu as SRC_DATA_CLASS,
  _u as SRC_DATA_ENEMY,
  yu as SRC_DATA_ITEMS,
  hu as SRC_DATA_MAP,
  Vn as SRC_DATA_SKILL,
  Nt as SRC_DATA_STATE,
  pu as SRC_DATA_VARIABLE,
  Eu as SRC_DATA_WEAPON,
  Qs as SRC_ELEMENTS,
  Tu as SRC_EQUIP_TYPES,
  kn as SRC_PARAMS_EXTRA,
  Ve as SRC_PARAMS_REGULAR,
  jn as SRC_PARAMS_SPECIAL,
  Su as SRC_SKILL_TYPES,
  $u as SRC_SWITCHES,
  qn as SRC_TRAIT_COLLAPS,
  Un as SRC_TRAIT_PARTY_ABILITY,
  Fn as SRC_TRAIT_SPECIAL_FLAG,
  Au as SRC_TROOP,
  Js as SRC_WEAPON_TYPES,
  nl as STOP_SE,
  zd as TINT_PICTURE,
  Ud as TINT_SCREEN,
  Ki as TRAIT_ACTION_PLUS,
  wi as TRAIT_ATTACK_ELEMENT,
  Li as TRAIT_ATTACK_SKILL,
  Ci as TRAIT_ATTACK_SPEED,
  bi as TRAIT_ATTACK_STATE,
  Mi as TRAIT_ATTACK_TIMES,
  zi as TRAIT_COLLAPSE_TYPE,
  $i as TRAIT_DEBUFF_RATE,
  Ti as TRAIT_ELEMENT_RATE,
  Fi as TRAIT_EQUIP_ARMOR_TYPE,
  Vi as TRAIT_EQUIP_LOCK,
  Gi as TRAIT_EQUIP_SEAL,
  Ui as TRAIT_EQUIP_WEAPON_TYPE,
  Ii as TRAIT_PARAM,
  Yi as TRAIT_PARTY_ABILITY,
  ji as TRAIT_SKILL_ADD,
  qi as TRAIT_SKILL_SEAL,
  Di as TRAIT_SKILL_TYPE_ADD,
  ki as TRAIT_SKILL_TYPE_SEAL,
  Hi as TRAIT_SLOT_TYPE,
  Oi as TRAIT_SPARAM,
  Bi as TRAIT_SPECIAL_FLAG,
  Si as TRAIT_STATE_RATE,
  Pi as TRAIT_STATE_RESIST,
  Ni as TRAIT_XPARAM,
  Sd as TRANSFER_PLAYER,
  zc as TYPENAME_TRAIT,
  ts as TraitDescriptor,
  Gd as WAIT,
  Uc as buildCollapsSource,
  Gc as buildExtraParamSource,
  Fc as buildPartyAbilitySource,
  Vc as buildRegularParamSource,
  Kc as buildSpecialFlagSource,
  Hc as buildSpecialParamSource,
  aa as defineEffectAddBuff,
  ca as defineEffectAddDebuff,
  na as defineEffectAddState,
  da as defineEffectCommonEvent,
  ra as defineEffectGainTp,
  Nu as defineEffectGrow,
  ia as defineEffectLearnSkill,
  ea as defineEffectRecoverHp,
  ta as defineEffectRecoverMp,
  oa as defineEffectRemoveBuff,
  ua as defineEffectRemoveDebuff,
  sa as defineEffectRemoveState,
  jc as extraParamName,
  Xn as foldCollapsOptions,
  Qn as foldExtraParam,
  Jn as foldPartyAbilityOptions,
  xn as foldRegularParam,
  es as foldSpecialFlag,
  Zn as foldSpecialParams,
  Pu as formatItemEffectText,
  Ai as getArmorTypes,
  yi as getElementTypes,
  Ei as getEquipTypes,
  Ri as getParamNames,
  gi as getSkillTypes,
  _i as getVariableNames,
  vi as getWeaponTypes,
  Du as isDataActor,
  ku as isDataArmor,
  Fu as isDataClass,
  qu as isDataEnemy,
  Mu as isDataItem,
  Lu as isDataSkill,
  Uu as isDataState,
  ju as isDataWeapon,
  fu as isValid,
  lu as joinSourceKey,
  Wc as makeActor,
  Jc as makeArmor,
  Kf as makeAudioFileParams,
  xc as makeClass,
  jf as makeCommonEventData,
  Qt as makeDamage,
  Cs as makeDropItem,
  ru as makeEnemy,
  tu as makeEnemyAction,
  nu as makeItem,
  kf as makeMapData,
  su as makeSkill,
  Qc as makeState,
  qf as makeTroopData,
  Ff as makeTroopEventConditions,
  Uf as makeTroopMember,
  eu as makeWeapon,
  pi as mergeDomainLabel,
  hi as mergeNestedPrimitiveRecords,
  On as mergeWithDefaults,
  Xc as normalizeDataActor,
  kc as regularParamName,
  Iu as resolveItemEffectLabels,
  Bc as resolveTraitLabels,
  du as sanitizeKey,
  qc as specialParamName,
  Ut as testUnknonwKey,
  De as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
