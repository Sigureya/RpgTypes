const ae = "bgm", se = "se", Ae = "me", _e = "bgs", Ee = "battlebacks1", ce = "battlebacks2", Re = "characters", Te = "enemies", ie = "faces", re = "parallaxes", me = "pictures", Se = "sv_actors", Pe = "sv_enemies", de = "system", Le = "tilesets", Ie = "titles1", pe = "titles2", Me = "System.json", B = (t, e) => {
  const o = { ...t };
  for (const n in t) {
    const E = e[n];
    typeof E == "string" && (o[n] = E);
  }
  return o;
}, Oe = (t, e) => ({
  domainName: e.domainName ?? t.domainName,
  options: B(t.options, e.options ?? {})
}), Ce = (t, e) => {
  const o = {};
  for (const n in t) {
    const E = t[n], T = e[n] ?? {};
    o[n] = B(
      E,
      T
    );
  }
  return o;
}, i = (t, e) => ({
  name: t,
  id: e
}), Ne = (t) => t.variables.map(i), ue = (t) => t.elements.map(i), le = (t) => t.equipTypes.map(i), fe = (t) => t.skillTypes.map(i), De = (t) => t.weaponTypes.map(i), Ue = (t) => t.armorTypes.map(i), Fe = (t) => t.terms.params.map(i), r = "rmmz", C = "trait", y = "data", v = "system", Ge = 11, He = 12, ge = 13, Be = 14, ye = 21, ve = 22, he = 23, Ye = 31, ke = 32, Ve = 33, We = 34, Xe = 35, Ke = 41, qe = 42, we = 43, xe = 44, Qe = 51, $e = 52, je = 53, ze = 54, Je = 55, Ze = 61, be = 62, to = 63, eo = 64, oo = 0, no = 1, ao = 2, so = 3, Ao = 0, _o = 1, Eo = 2, co = 3, Ro = 4, To = 5, io = 0, ro = 1, mo = 2, So = 3, Po = 0, Lo = 1, Io = 2, po = 3, Mo = 4, Oo = 5, Co = 6, No = 7, uo = 8, lo = 9, fo = 0, Do = 1, Uo = 2, Fo = 3, Go = 4, Ho = 5, go = 6, Bo = 7, yo = 0, vo = 1, ho = 2, Yo = 3, ko = 4, Vo = 5, Wo = 6, Xo = 7, Ko = 8, qo = 9, wo = (t, e) => {
  switch (t) {
    case 0:
      return e.maxHp;
    case 1:
      return e.maxMp;
    case 2:
      return e.atk;
    case 3:
      return e.def;
    case 4:
      return e.matk;
    case 5:
      return e.mdef;
    case 6:
      return e.agi;
    case 7:
      return e.luk;
    default:
      return `?rparams[${t}]`;
  }
}, xo = (t, e) => {
  switch (t) {
    case 3:
      return e.criticalEvasionRate;
    case 1:
      return e.evasionRate;
    case 6:
      return e.counterAttackRate;
    case 2:
      return e.criticalRate;
    case 0:
      return e.hitRate;
    case 7:
      return e.hpRegenerationRate;
    case 4:
      return e.magicEvasionRate;
    case 5:
      return e.magicReflectionRate;
    case 8:
      return e.mpRegenerationRate;
    case 9:
      return e.tpRegenerationRate;
  }
  return `?xparams[${t}]`;
}, Qo = (t, e) => {
  switch (t) {
    case 9:
      return e.experienceRate;
    case 0:
      return e.targetRate;
    case 8:
      return e.floorDamageRate;
    case 1:
      return e.guradEffectRate;
    case 4:
      return e.mpCostRate;
    case 5:
      return e.tpChargeRate;
    case 6:
      return e.physicalDamageRate;
    case 7:
      return e.magicDamageRate;
    case 3:
      return e.pharmacology;
    case 2:
      return e.recoveryEffectRate;
  }
  return `?sparams[${t}]`;
}, $ = (t, e) => [
  {
    id: 0,
    name: e.normal
  },
  {
    id: 1,
    name: t.bossCollaps
  },
  {
    id: 2,
    name: t.instantCollaps
  },
  {
    id: 3,
    name: t.noneCollaps
  }
], j = (t) => [
  {
    id: 0,
    name: t.encounterHalf
  },
  {
    id: 1,
    name: t.encounterNone
  },
  {
    id: 2,
    name: t.cancelSurprise
  },
  {
    id: 3,
    name: t.raisePreemptive
  },
  {
    id: 4,
    name: t.goldDouble
  },
  {
    id: 5,
    name: t.dropItemDouble
  }
], z = (t) => [
  { id: 0, name: t.maxHp },
  { id: 1, name: t.maxMp },
  { id: 2, name: t.atk },
  { id: 3, name: t.def },
  { id: 4, name: t.matk },
  { id: 5, name: t.mdef },
  { id: 6, name: t.agi },
  { id: 7, name: t.luk }
], J = (t) => [
  {
    id: 0,
    name: t.hitRate
  },
  {
    id: 1,
    name: t.evasionRate
  },
  {
    id: 2,
    name: t.criticalRate
  },
  {
    id: 3,
    name: t.criticalEvasionRate
  },
  {
    id: 4,
    name: t.magicEvasionRate
  },
  {
    id: 5,
    name: t.magicReflectionRate
  },
  {
    id: 6,
    name: t.counterAttackRate
  },
  {
    id: 7,
    name: t.hpRegenerationRate
  },
  {
    id: 8,
    name: t.mpRegenerationRate
  },
  {
    id: 9,
    name: t.tpRegenerationRate
  }
], Z = (t) => [
  {
    id: 0,
    name: t.targetRate
  },
  {
    id: 1,
    name: t.guradEffectRate
  },
  {
    id: 2,
    name: t.recoveryEffectRate
  },
  {
    id: 3,
    name: t.pharmacology
  },
  {
    id: 4,
    name: t.mpCostRate
  },
  {
    id: 5,
    name: t.tpChargeRate
  },
  {
    id: 6,
    name: t.physicalDamageRate
  },
  {
    id: 7,
    name: t.magicDamageRate
  },
  {
    id: 8,
    name: t.floorDamageRate
  },
  {
    id: 9,
    name: t.experienceRate
  }
], b = (t) => [
  {
    id: 0,
    name: t.autoBattle
  },
  {
    id: 1,
    name: t.guard
  },
  {
    id: 2,
    name: t.substitute
  },
  {
    id: 3,
    name: t.preventEscape
  }
], S = (t, e, o) => ({
  items: o(e.options),
  label: e.domainName,
  source: {
    author: r,
    module: C,
    kind: t
  }
}), $o = (t, e) => S(
  V,
  t,
  (o) => $(o, e)
), jo = (t) => S(W, t, j), zo = (t) => S(d, t, z), Jo = (t) => S(Y, t, J), Zo = (t) => S(k, t, Z), bo = (t) => S(X, t, b), A = "{name}", m = "{name} * {value}%", N = "{name} + {value}%", u = "{value}", a = {
  domainName: "特徴",
  options: {
    regularParam: {
      domainName: "基本能力値",
      format: m,
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
      format: N,
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
      format: m,
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
      format: A,
      options: {
        autoBattle: "自動戦闘",
        guard: "防御",
        substitute: "身代わり",
        preventEscape: "逃走防止"
      }
    },
    collaps: {
      domainName: "消滅エフェクト",
      format: A,
      options: {
        bossCollaps: "ボス崩壊",
        instantCollaps: "即時崩壊",
        noneCollaps: "崩壊なし"
      }
    },
    partyAbility: {
      domainName: "パーティ能力",
      format: A,
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
      format: m
    },
    debuffRate: {
      domainName: "弱体有効度",
      format: m
    },
    stateRate: {
      domainName: "ステート有効度",
      format: m
    },
    stateResist: {
      domainName: "ステート無効",
      format: A
    },
    attackElement: {
      domainName: "攻撃属性",
      format: A
    },
    attackState: {
      domainName: "攻撃ステート",
      format: N
    },
    attackSpeed: {
      domainName: "攻撃速度補正",
      format: u
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: u
    },
    actionPlus: {
      domainName: "行動追加",
      format: m
    },
    attackSkill: {
      domainName: "攻撃スキル",
      format: A
    },
    equipWeaponType: {
      domainName: "装備武器タイプ",
      format: A
    },
    equipArmorType: {
      domainName: "装備防具タイプ",
      format: A
    },
    equipLock: {
      domainName: "装備固定",
      format: A
    },
    equipSeal: {
      domainName: "装備封印",
      format: A
    },
    slotType: {
      domainName: "スロットタイプ",
      format: A
    },
    skillAdd: {
      domainName: "スキル追加",
      format: A
    },
    skillSeal: {
      domainName: "スキルタイプ封印",
      format: A
    },
    skillTypeAdd: {
      domainName: "スキルタイプ追加",
      format: A
    },
    skillTypeSeal: {
      domainName: "スキルタイプ封印",
      format: A
    }
  }
}, h = /^[a-zA-Z0-9]+$/, tn = (t) => h.test(t) ? t : void 0, M = (t) => typeof t == "string" ? h.test(t) : !1, en = (t) => [t.author, t.module, t.kind].join("."), on = (t) => M(t.author) && M(t.module) && M(t.kind), d = "params", Y = "xparams", k = "sparams", V = "collaps", W = "partyAbiility", X = "sflag", nn = "actors", an = "variables", sn = "map", An = "enemy", L = "state", K = "skill", _n = "items", En = "weapon", cn = "armor", Rn = "class", tt = "common_event", Tn = "troop", rn = "colors", et = "weaponTypes", ot = "armorTypes", mn = "equipTypes", Sn = "switches", Pn = "skillTypes", nt = "elements", l = "{value}", f = "{name}";
class at {
  constructor(e, o, n, E) {
    this.code = e, this.label = o, this.format = n, this.dataSource = E;
  }
  match(e) {
    return this.code === e.code;
  }
  testTraitCode(e) {
    this.match(e);
  }
  formatText(e, o) {
    this.testTraitCode(e);
    const n = this.format.replaceAll(
      l,
      e.value.toString()
    );
    return this.dataSource ? n.replaceAll(
      f,
      o(this.dataSource, e.dataId)
    ) : n;
  }
  requiresValue() {
    return this.format.includes(l);
  }
  requiresName() {
    return this.format.includes(f);
  }
  invalidPlaceHolder() {
    const e = ["value", "name"];
    return [
      ...this.format.matchAll(/\{([^}]+)\}/g)
    ].map((n) => n[1]).filter((n) => !e.includes(n));
  }
  isFormatValidForDataSource() {
    return !(this.dataSource && !this.requiresName());
  }
  diagnose() {
    const e = !this.isFormatValidForDataSource(), o = this.requiresName() && !this.dataSource, n = this.invalidPlaceHolder();
    return {
      code: this.code,
      label: this.label,
      format: this.format,
      hasError: e || o || n.length > 0,
      missingDataSourceError: e,
      sourceMismatchError: o,
      invalidPlaceHolders: n
    };
  }
}
const dn = (t) => [
  st(t.elementRate),
  At(t.debuffRate),
  _t(t.stateRate),
  Et(t.stateResist),
  ct(t.regularParam),
  Rt(t.extraParam),
  Tt(t.specialParam),
  it(t.attackElement),
  rt(t.attackState),
  mt(t.attackSpeed),
  St(t.attackTimes),
  Pt(t.attackSkill),
  Dt(t.skillTypeAdd),
  Ut(t.skillTypeSeal),
  ut(t.skillAdd),
  lt(t.skillSeal),
  Mt(t.equipWeaponType),
  Ot(t.equipArmorType),
  Ct(t.equipLock),
  Nt(t.equipSeal),
  ft(t.slotType),
  dt(t.actionPlus),
  Lt(t.specialFlag),
  It(t.collaps),
  pt(t.partyAbility)
], D = (t, e) => typeof e == "string" ? e : t, s = (t, e, o, n) => {
  const E = D(e.domainName, o.domainName), T = D(e.format, o.format);
  return new at(t, E, T, n);
}, q = () => ({
  module: v,
  author: r,
  kind: nt
}), w = (t) => ({
  module: y,
  author: r,
  kind: t
}), R = (t) => ({
  author: r,
  module: C,
  kind: t
}), x = (t) => ({
  author: r,
  module: v,
  kind: t
}), st = (t) => s(
  11,
  a.options.elementRate,
  t,
  q()
), At = (t) => s(
  12,
  a.options.debuffRate,
  t,
  R(d)
), _t = (t) => s(
  13,
  a.options.stateRate,
  t,
  R(d)
), Et = (t) => s(
  14,
  a.options.stateResist,
  t,
  w(L)
), ct = (t) => s(
  21,
  a.options.regularParam,
  t,
  R(d)
), Rt = (t) => s(
  22,
  a.options.extraParam,
  t,
  R(Y)
), Tt = (t) => s(
  23,
  a.options.specialParam,
  t,
  R(k)
), it = (t) => s(
  31,
  a.options.attackElement,
  t,
  q()
), rt = (t) => s(
  32,
  a.options.attackState,
  t,
  R(L)
), mt = (t) => s(33, a.options.attackSpeed, t), St = (t) => s(34, a.options.attackTimes, t), Pt = (t) => s(
  35,
  a.options.attackSkill,
  t,
  w(K)
), dt = (t) => s(61, a.options.actionPlus, t), Lt = (t) => s(
  62,
  a.options.specialFlag,
  t,
  R(X)
), It = (t) => s(
  63,
  a.options.collaps,
  t,
  R(V)
), pt = (t) => s(
  64,
  a.options.partyAbility,
  t,
  R(W)
), Mt = (t) => s(
  51,
  a.options.equipWeaponType,
  t,
  x(et)
), Ot = (t) => s(
  52,
  a.options.equipArmorType,
  t,
  x(ot)
), Ct = (t) => s(53, a.options.equipLock, t), Nt = (t) => s(54, a.options.equipSeal, t), ut = (t) => s(43, a.options.skillAdd, t), lt = (t) => s(44, a.options.skillSeal, t), ft = (t) => s(55, a.options.slotType, t), Dt = (t) => s(
  41,
  a.options.skillTypeAdd,
  t
), Ut = (t) => s(
  42,
  a.options.skillTypeSeal,
  t
), Ln = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Ft = {
  domainName: "ダメージ",
  options: {}
}, In = 0, pn = 1, Mn = 2, On = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Gt = "{name} + {value1}", U = "{name} {value1}%", O = "{value1}% + {value2}", F = "{name} {value1}ターン", P = "{name}", _ = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: F
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: F
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: O
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: Gt
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: P
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
      format: P
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: P
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: U
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: P
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: U
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: P
    }
  }
}, Cn = 0, Ht = 11, gt = 12, Bt = 13, yt = 21, vt = 22, ht = 31, Yt = 32, kt = 33, Vt = 34, Nn = 41, Wt = 42, Xt = 43, Kt = 44, G = "{value1}", H = "{value2}", g = "{name}";
class qt {
  constructor(e, o, n, E, T) {
    this.codeId = e, this.label = o, this.format = n, this.description = E, this.dataSource = T;
  }
  formatText(e, o) {
    const n = this.format.replaceAll(G, e.value1.toString()).replaceAll(H, e.value2.toString());
    return this.dataSource ? n.replaceAll(
      g,
      o(this.dataSource, e.dataId)
    ) : n;
  }
  requiresValue1() {
    return this.format.includes(G);
  }
  requiresValue2() {
    return this.format.includes(H);
  }
  requiresName() {
    return this.format.includes(g);
  }
  invalidPlaceHolder() {
    const e = ["value1", "value2", "name"];
    return [
      ...this.format.matchAll(/\{([^}]+)\}/g)
    ].map((n) => n[1]).filter((n) => !e.includes(n));
  }
  isFormatValidForDataSource() {
    return !(this.dataSource && !this.requiresName());
  }
}
const un = (t, e, o) => t.format.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", o), ln = (t) => [
  wt(t.options.recoverHp),
  xt(t.options.recoverMp),
  Qt(t.options.gainTp),
  $t(t.options.addState),
  jt(t.options.removeState),
  zt(t.options.addBuff),
  bt(t.options.addDebuff),
  Jt(t.options.removeBuff),
  te(t.options.removeDebuff),
  Zt(t.options.learnSkill),
  ee(t.options.commonEvent)
], I = () => ({
  author: r,
  module: C,
  kind: d
}), p = (t) => ({
  author: r,
  module: y,
  kind: t
}), c = (t, e, o, n) => {
  const E = o.domainName ?? e.domainName, T = o.format ?? e.format, Q = o.desc ?? e.desc;
  return new qt(t, E, T, Q, n);
}, wt = (t) => c(
  Ht,
  _.options.recoverHp,
  t
), xt = (t) => c(
  gt,
  _.options.recoverMp,
  t
), Qt = (t) => c(Bt, _.options.gainTp, t), fn = (t) => c(Wt, _.options.grow, t), $t = (t) => c(
  yt,
  _.options.addState,
  t,
  p(L)
), jt = (t) => c(
  vt,
  _.options.removeState,
  t,
  p(L)
), zt = (t) => c(
  ht,
  _.options.addBuff,
  t,
  I()
), Jt = (t) => c(
  kt,
  _.options.removeBuff,
  t,
  I()
), Zt = (t) => c(
  Xt,
  _.options.learnSkill,
  t,
  p(K)
), bt = (t) => c(
  Yt,
  _.options.addBuff,
  t,
  I()
), te = (t) => c(
  Vt,
  _.options.removeDebuff,
  t,
  I()
), ee = (t) => c(
  Kt,
  _.options.commonEvent,
  t,
  p(tt)
), Dn = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, Un = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, oe = {
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
}, Fn = 0, Gn = 101, Hn = 401, gn = 102, Bn = 402, yn = 103, vn = 104, hn = 105, Yn = 405, kn = 108, Vn = 408, Wn = 109, Xn = 111, Kn = 411, qn = 112, wn = 113, xn = 115, Qn = 117, $n = 118, jn = 119, zn = 121, Jn = 122, Zn = 123, bn = 124, ta = 125, ea = 126, oa = 127, na = 128, aa = 129, sa = 132, Aa = 133, _a = 134, Ea = 135, ca = 136, Ra = 137, Ta = 138, ia = 139, ra = 140, ma = 201, Sa = 202, Pa = 203, da = 204, La = 205, Ia = 206, pa = 211, Ma = 212, Oa = 213, Ca = 214, Na = 216, ua = 217, la = 221, fa = 222, Da = 223, Ua = 224, Fa = 225, Ga = 230, Ha = 231, ga = 232, Ba = 233, ya = 234, va = 235, ha = 236, Ya = 241, ka = 242, Va = 243, Wa = 244, Xa = 245, Ka = 246, qa = 249, wa = 250, xa = 251, Qa = 261, $a = 282, ja = 283, za = 284, Ja = 285, Za = 301, ba = 302, ts = 605, es = 303, os = 311, ns = 312, as = 313, ss = 314, As = 315, _s = 320, Es = 321, cs = 322, Rs = 323, Ts = 324, is = 325, rs = 331, ms = 332, Ss = 333, Ps = 334, ds = 335, Ls = 336, Is = 337, ps = 339, Ms = 340, Os = 351, Cs = 342, Ns = 352, us = 353, ls = 354, fs = 355, Ds = 655, Us = 356, Fs = 357, Gs = 0, Hs = 1, gs = 2, Bs = 3, ys = 4, vs = 5, hs = 6, Ys = 7, ks = 8, Vs = 9, Ws = 10, Xs = 11, Ks = 12, qs = 13, ws = 14, xs = 15, Qs = 16, $s = 17, js = 18, zs = 19, Js = 20, Zs = 21, bs = 22, tA = 23, eA = 24, oA = 25, nA = 26, aA = 27, sA = 28, AA = 29, _A = 30, EA = 31, cA = 32, RA = 33, TA = 34, iA = 35, rA = 36, mA = 37, SA = 38, PA = 39, dA = 40, LA = 41, IA = 42, pA = 43, MA = 44, OA = 45, CA = {
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
}, NA = {
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
}, ne = {
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
}, uA = {
  rpg: {
    damage: Ft,
    data: oe,
    traits: a,
    itemEffect: _
  },
  global: ne
};
export {
  Ms as ABORT_BATTLE,
  r as AUTHOR_RMMZ,
  Za as BATTLE_PROCESSING,
  cs as CHANGE_ACTOR_IMAGES,
  na as CHANGE_ARMORS,
  ja as CHANGE_BATTLE_BACKGROUND,
  sa as CHANGE_BATTLE_BGM,
  Es as CHANGE_CLASS,
  ia as CHANGE_DEFEAT_ME,
  ca as CHANGE_ENCOUNTER,
  rs as CHANGE_ENEMY_HP,
  ms as CHANGE_ENEMY_MP,
  Ss as CHANGE_ENEMY_STATE,
  Cs as CHANGE_ENEMY_TP,
  As as CHANGE_EXP,
  Ra as CHANGE_FORMATION_ACCESS,
  ta as CHANGE_GOLD,
  os as CHANGE_HP,
  ea as CHANGE_ITEMS,
  Ea as CHANGE_MENU_ACCESS,
  ns as CHANGE_MP,
  _s as CHANGE_NAME,
  Ts as CHANGE_NICKNAME,
  za as CHANGE_PARALLAX,
  aa as CHANGE_PARTY_MEMBER,
  Na as CHANGE_PLAYER_FOLLOWERS,
  is as CHANGE_PROFILE,
  _a as CHANGE_SAVE_ACCESS,
  $a as CHANGE_TILESET,
  as as CHANGE_TP,
  pa as CHANGE_TRANSPARENCY,
  ra as CHANGE_VEHICLE_BGM,
  Rs as CHANGE_VEHICLE_IMAGE,
  Aa as CHANGE_VICTORY_ME,
  oa as CHANGE_WEAPONS,
  Ta as CHANGE_WINDOW_COLOR,
  no as COLLAPS_BOSS,
  ao as COLLAPS_INSTANT,
  so as COLLAPS_NONE,
  oo as COLLAPS_NORMAL,
  kn as COMMENT,
  Vn as COMMENT_BODY,
  Qn as COMMON_EVENT,
  Xn as CONDITIONAL_BRANCH,
  Kn as CONDITIONAL_BRANCH_ELSE,
  Zn as CONTROL_SELF_SWITCH,
  zn as CONTROL_SWITCHES,
  bn as CONTROL_TIMER,
  Jn as CONTROL_VARIABLES,
  Ft as DEFAULT_DAMAGE_LABELS,
  ne as DEFAULT_GLOBAL_LABELS,
  On as DEFAULT_ITEM_LABELS,
  Dn as DEFAULT_SKILL_LABELS,
  CA as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Un as DEFAULT_USABLE_ITEM_LABELS,
  ht as EFFECT_ADD_BUFF,
  Yt as EFFECT_ADD_DEBUFF,
  yt as EFFECT_ADD_STATE,
  Kt as EFFECT_COMMON_EVENT,
  Bt as EFFECT_GAIN_TP,
  Wt as EFFECT_GROW,
  Xt as EFFECT_LEARN_SKILL,
  Ht as EFFECT_RECOVER_HP,
  gt as EFFECT_RECOVER_MP,
  kt as EFFECT_REMOVE_BUFF,
  Vt as EFFECT_REMOVE_DEBUFF,
  vt as EFFECT_REMOVE_STATE,
  Nn as EFFECT_SPECIAL,
  ds as ENEMY_APPEAR,
  Ps as ENEMY_RECOVER_ALL,
  Ls as ENEMY_TRANSFORM,
  Ca as ERASE_EVENT,
  va as ERASE_PICTURE,
  xn as EXIT_EVENT_PROCESSING,
  po as EXTRA_PARAM_CEV,
  Co as EXTRA_PARAM_CNT,
  Io as EXTRA_PARAM_CRI,
  Lo as EXTRA_PARAM_EVA,
  Po as EXTRA_PARAM_HIT,
  No as EXTRA_PARAM_HRG,
  Mo as EXTRA_PARAM_MEV,
  Oo as EXTRA_PARAM_MRF,
  uo as EXTRA_PARAM_MRG,
  lo as EXTRA_PARAM_TRG,
  fa as FADEIN_SCREEN,
  ka as FADEOUT_BGM,
  Ka as FADEOUT_BGS,
  la as FADEOUT_SCREEN,
  Me as FILENAME_SYSTEM,
  io as FLAG_ID_AUTO_BATTLE,
  ro as FLAG_ID_GUARD,
  So as FLAG_ID_PRESERVE_TP,
  mo as FLAG_ID_SUBSTITUTE,
  Ua as FLASH_SCREEN,
  ae as FOLDER_AUDIO_BGM,
  _e as FOLDER_AUDIO_BGS,
  Ae as FOLDER_AUDIO_ME,
  se as FOLDER_AUDIO_SE,
  Ee as FOLDER_IMG_BATTLEBACK1,
  ce as FOLDER_IMG_BATTLEBACK2,
  Re as FOLDER_IMG_CHACTERS,
  Te as FOLDER_IMG_ENEMIES,
  ie as FOLDER_IMG_FACES,
  re as FOLDER_IMG_PARALLACES,
  me as FOLDER_IMG_PICTURES,
  Se as FOLDER_IMG_SV_ACTORS,
  Pe as FOLDER_IMG_SV_ENEMIES,
  de as FOLDER_IMG_SYSTEM,
  Le as FOLDER_IMG_TILESETS,
  Ie as FOLDER_IMG_TITLES1,
  pe as FOLDER_IMG_TITLES2,
  ps as FORCE_ACTION,
  us as GAME_OVER,
  ua as GATHER_FOLLOWERS,
  Ja as GET_LOCATION_INFO,
  Ia as GET_ONOFF_VEHICLE,
  In as HITTYPE_CERTAIN,
  Mn as HITTYPE_MAGICAL,
  pn as HITTYPE_PHYSICAL,
  yn as INPUT_NUMBER,
  $n as LABEL,
  Ln as LABELS_DATA_WEAPON,
  jn as LABEL_JUMP,
  uA as LABEL_REGISTRY_JP,
  oe as LABEL_SET_DATA,
  _ as LABEL_SET_ITEM_EFFECT,
  a as LABEL_SET_TRAIT,
  qn as LOOP,
  wn as LOOP_BREAK,
  y as MODULE_DATA,
  v as MODULE_SYSTEM,
  C as MODULE_TRAIT,
  ga as MOVE_PICTURE,
  NA as MockSystemLabelDataTypes,
  es as NAME_INPUT_PROCESSING,
  Fn as NO_OPERATION,
  Os as OPEN_MENU_SCREEN,
  Ns as OPEN_SAVE_SCREEN,
  Eo as PARTY_ABILITY_CANCEL_SURPRISE,
  To as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Ao as PARTY_ABILITY_ENCOUNTER_HALF,
  _o as PARTY_ABILITY_ENCOUNTER_NONE,
  Ro as PARTY_ABILITY_GOLD_DOUBLE,
  co as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Ya as PLAY_BGM,
  Xa as PLAY_BGS,
  qa as PLAY_ME,
  Qa as PLAY_MOVIE,
  wa as PLAY_SE,
  Us as PLUGIN_COMMAND_MV,
  Fs as PLUGIN_COMMAND_MZ,
  ss as RECOVER_ALL,
  go as REGULAR_PARAM_AGI,
  Uo as REGULAR_PARAM_ATK,
  Fo as REGULAR_PARAM_DEF,
  Bo as REGULAR_PARAM_LUK,
  Go as REGULAR_PARAM_MATK,
  fo as REGULAR_PARAM_MAX_HP,
  Do as REGULAR_PARAM_MAX_MP,
  Ho as REGULAR_PARAM_MDEF,
  Wa as RESUME_BGM,
  ls as RETURN_TO_TITLE_SCREEN,
  Ba as ROTATE_PICTURE,
  pA as ROUTE_CHANGE_BLEND_MODE,
  _A as ROUTE_CHANGE_FREQ,
  LA as ROUTE_CHANGE_IMAGE,
  IA as ROUTE_CHANGE_OPACITY,
  AA as ROUTE_CHANGE_SPEED,
  rA as ROUTE_DIR_FIX_OFF,
  iA as ROUTE_DIR_FIX_ON,
  Gs as ROUTE_END,
  ws as ROUTE_JUMP,
  Xs as ROUTE_MOVE_AWAY,
  qs as ROUTE_MOVE_BACKWARD,
  Hs as ROUTE_MOVE_DOWN,
  Ks as ROUTE_MOVE_FORWARD,
  gs as ROUTE_MOVE_LEFT,
  vs as ROUTE_MOVE_LOWER_L,
  hs as ROUTE_MOVE_LOWER_R,
  Vs as ROUTE_MOVE_RANDOM,
  Bs as ROUTE_MOVE_RIGHT,
  Ws as ROUTE_MOVE_TOWARD,
  ys as ROUTE_MOVE_UP,
  Ys as ROUTE_MOVE_UPPER_L,
  ks as ROUTE_MOVE_UPPER_R,
  MA as ROUTE_PLAY_SE,
  OA as ROUTE_SCRIPT,
  TA as ROUTE_STEP_ANIME_OFF,
  RA as ROUTE_STEP_ANIME_ON,
  sA as ROUTE_SWITCH_OFF,
  aA as ROUTE_SWITCH_ON,
  SA as ROUTE_THROUGH_OFF,
  mA as ROUTE_THROUGH_ON,
  dA as ROUTE_TRANSPARENT_OFF,
  PA as ROUTE_TRANSPARENT_ON,
  bs as ROUTE_TURN_180D,
  Zs as ROUTE_TURN_90D_L,
  Js as ROUTE_TURN_90D_R,
  tA as ROUTE_TURN_90D_R_L,
  nA as ROUTE_TURN_AWAY,
  Qs as ROUTE_TURN_DOWN,
  $s as ROUTE_TURN_LEFT,
  eA as ROUTE_TURN_RANDOM,
  js as ROUTE_TURN_RIGHT,
  oA as ROUTE_TURN_TOWARD,
  zs as ROUTE_TURN_UP,
  xs as ROUTE_WAIT,
  cA as ROUTE_WALK_ANIME_OFF,
  EA as ROUTE_WALK_ANIME_ON,
  Va as SAVE_BGM,
  fs as SCRIPT_EVAL,
  Ds as SCRIPT_EVAL_BODY,
  da as SCROLL_MAP,
  vn as SELECT_ITEM,
  Pa as SET_EVENT_LOCATION,
  La as SET_MOVEMENT_ROUTE,
  Sa as SET_VEHICLE_LOCATION,
  ha as SET_WEATHER_EFFECT,
  Fa as SHAKE_SCREEN,
  ba as SHOP_PROCESSING,
  ts as SHOP_PROCESSING_BODY,
  Ma as SHOW_ANIMATION,
  Oa as SHOW_BALLOON_ICON,
  Is as SHOW_BATTLE_ANIMATION,
  gn as SHOW_CHOICES,
  Bn as SHOW_CHOICES_ITEM,
  Gn as SHOW_MESSAGE,
  Hn as SHOW_MESSAGE_BODY,
  Ha as SHOW_PICTURE,
  hn as SHOW_SCROLLING_TEXT,
  Yn as SHOW_SCROLLING_TEXT_BODY,
  Wn as SKIP,
  Cn as SPECIAL_EFFECT_ESCAPE,
  qo as SPECIAL_PARAM_EXR,
  Ko as SPECIAL_PARAM_FDR,
  vo as SPECIAL_PARAM_GRD,
  ko as SPECIAL_PARAM_MCR,
  Xo as SPECIAL_PARAM_MDR,
  Wo as SPECIAL_PARAM_PDR,
  Yo as SPECIAL_PARAM_PHA,
  ho as SPECIAL_PARAM_REC,
  Vo as SPECIAL_PARAM_TCR,
  yo as SPECIAL_PARAM_TGR,
  ot as SRC_ARMOR_TYPES,
  rn as SRC_COLOR,
  tt as SRC_COMMON_EVNET,
  nn as SRC_DATA_ACTOR,
  cn as SRC_DATA_ARMOR,
  Rn as SRC_DATA_CLASS,
  An as SRC_DATA_ENEMY,
  _n as SRC_DATA_ITEMS,
  sn as SRC_DATA_MAP,
  K as SRC_DATA_SKILL,
  L as SRC_DATA_STATE,
  an as SRC_DATA_VARIABLE,
  En as SRC_DATA_WEAPON,
  nt as SRC_ELEMENTS,
  mn as SRC_EQUIP_TYPES,
  Y as SRC_PARAMS_EXTRA,
  d as SRC_PARAMS_REGULAR,
  k as SRC_PARAMS_SPECIAL,
  Pn as SRC_SKILL_TYPES,
  Sn as SRC_SWITCHES,
  V as SRC_TRAIT_COLLAPS,
  W as SRC_TRAIT_PARTY_ABILITY,
  X as SRC_TRAIT_SPECIAL_FLAG,
  Tn as SRC_TROOP,
  et as SRC_WEAPON_TYPES,
  xa as STOP_SE,
  ya as TINT_PICTURE,
  Da as TINT_SCREEN,
  Ze as TRAIT_ACTION_PLUS,
  Ye as TRAIT_ATTACK_ELEMENT,
  Xe as TRAIT_ATTACK_SKILL,
  Ve as TRAIT_ATTACK_SPEED,
  ke as TRAIT_ATTACK_STATE,
  We as TRAIT_ATTACK_TIMES,
  to as TRAIT_COLLAPSE_TYPE,
  He as TRAIT_DEBUFF_RATE,
  Ge as TRAIT_ELEMENT_RATE,
  $e as TRAIT_EQUIP_ARMOR_TYPE,
  je as TRAIT_EQUIP_LOCK,
  ze as TRAIT_EQUIP_SEAL,
  Qe as TRAIT_EQUIP_WEAPON_TYPE,
  ye as TRAIT_PARAM,
  eo as TRAIT_PARTY_ABILITY,
  we as TRAIT_SKILL_ADD,
  xe as TRAIT_SKILL_SEAL,
  Ke as TRAIT_SKILL_TYPE_ADD,
  qe as TRAIT_SKILL_TYPE_SEAL,
  Je as TRAIT_SLOT_TYPE,
  he as TRAIT_SPARAM,
  be as TRAIT_SPECIAL_FLAG,
  ge as TRAIT_STATE_RATE,
  Be as TRAIT_STATE_RESIST,
  ve as TRAIT_XPARAM,
  ma as TRANSFER_PLAYER,
  at as TraitDescriptor,
  Ga as WAIT,
  $o as buildCollapsSource,
  Jo as buildExtraParamSource,
  jo as buildPartyAbilitySource,
  zo as buildRegularParamSource,
  bo as buildSpecialFlagSource,
  Zo as buildSpecialParamSource,
  zt as defineEffectAddBuff,
  bt as defineEffectAddDebuff,
  $t as defineEffectAddState,
  ee as defineEffectCommonEvent,
  Qt as defineEffectGainTp,
  fn as defineEffectGrow,
  Zt as defineEffectLearnSkill,
  wt as defineEffectRecoverHp,
  xt as defineEffectRecoverMp,
  Jt as defineEffectRemoveBuff,
  te as defineEffectRemoveDebuff,
  jt as defineEffectRemoveState,
  xo as extraParamName,
  $ as foldCollapsOptions,
  J as foldExtraParam,
  j as foldPartyAbilityOptions,
  z as foldRegularParam,
  b as foldSpecialFlag,
  Z as foldSpecialParams,
  un as formatItemEffectText,
  Ue as getArmorTypes,
  ue as getElementTypes,
  le as getEquipTypes,
  Fe as getParamNames,
  fe as getSkillTypes,
  Ne as getVariableNames,
  De as getWeaponTypes,
  on as isValid,
  en as joinSourceKey,
  Oe as mergeDomainLabel,
  Ce as mergeNestedPrimitiveRecords,
  B as mergeWithDefaults,
  wo as regularParamName,
  ln as resolveItemEffectLabels,
  dn as resolveTraitLabels,
  tn as sanitizeKey,
  Qo as specialParamName,
  M as testUnknonwKey,
  S as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
