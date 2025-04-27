const ae = "bgm", se = "se", Ae = "me", _e = "bgs", Ee = "battlebacks1", ce = "battlebacks2", Re = "characters", Te = "enemies", ie = "faces", re = "parallaxes", me = "pictures", Se = "sv_actors", Pe = "sv_enemies", Le = "system", de = "tilesets", Ie = "titles1", Oe = "titles2", pe = "System.json", Me = "data", Ce = "img", Ne = "audio", ue = "js", B = (t, e) => {
  const o = { ...t };
  for (const n in t) {
    const E = e[n];
    typeof E == "string" && (o[n] = E);
  }
  return o;
}, le = (t, e) => ({
  domainName: e.domainName ?? t.domainName,
  options: B(t.options, e.options ?? {})
}), fe = (t, e) => {
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
}), De = (t) => t.variables.map(i), Ue = (t) => t.elements.map(i), Fe = (t) => t.equipTypes.map(i), Ge = (t) => t.skillTypes.map(i), He = (t) => t.weaponTypes.map(i), ge = (t) => t.armorTypes.map(i), Be = (t) => t.terms.params.map(i), r = "rmmz", C = "trait", y = "data", v = "system", ye = 11, ve = 12, he = 13, Ye = 14, ke = 21, Ve = 22, We = 23, Xe = 31, Ke = 32, qe = 33, we = 34, xe = 35, Qe = 41, $e = 42, je = 43, Je = 44, ze = 51, Ze = 52, be = 53, to = 54, eo = 55, oo = 61, no = 62, ao = 63, so = 64, Ao = 0, _o = 1, Eo = 2, co = 3, Ro = 0, To = 1, io = 2, ro = 3, mo = 4, So = 5, Po = 0, Lo = 1, Io = 2, Oo = 3, po = 0, Mo = 1, Co = 2, No = 3, uo = 4, lo = 5, fo = 6, Do = 7, Uo = 8, Fo = 9, Go = 0, Ho = 1, go = 2, Bo = 3, yo = 4, vo = 5, ho = 6, Yo = 7, ko = 0, Vo = 1, Wo = 2, Xo = 3, Ko = 4, qo = 5, wo = 6, xo = 7, Qo = 8, $o = 9, jo = (t, e) => {
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
}, Jo = (t, e) => {
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
}, zo = (t, e) => {
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
], J = (t) => [
  { id: 0, name: t.maxHp },
  { id: 1, name: t.maxMp },
  { id: 2, name: t.atk },
  { id: 3, name: t.def },
  { id: 4, name: t.matk },
  { id: 5, name: t.mdef },
  { id: 6, name: t.agi },
  { id: 7, name: t.luk }
], z = (t) => [
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
}), Zo = (t, e) => S(
  V,
  t,
  (o) => $(o, e)
), bo = (t) => S(W, t, j), tn = (t) => S(L, t, J), en = (t) => S(Y, t, z), on = (t) => S(k, t, Z), nn = (t) => S(X, t, b), A = "{name}", m = "{name} * {value}%", N = "{name} + {value}%", u = "{value}", a = {
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
}, h = /^[a-zA-Z0-9]+$/, an = (t) => h.test(t) ? t : void 0, p = (t) => typeof t == "string" ? h.test(t) : !1, sn = (t) => [t.author, t.module, t.kind].join("."), An = (t) => p(t.author) && p(t.module) && p(t.kind), L = "params", Y = "xparams", k = "sparams", V = "collaps", W = "partyAbiility", X = "sflag", _n = "actors", En = "variables", cn = "map", Rn = "enemy", d = "state", K = "skill", Tn = "items", rn = "weapon", mn = "armor", Sn = "class", tt = "common_event", Pn = "troop", Ln = "colors", et = "weaponTypes", ot = "armorTypes", dn = "equipTypes", In = "switches", On = "skillTypes", nt = "elements", l = "{value}", f = "{name}";
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
const pn = (t) => [
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
  pt(t.equipWeaponType),
  Mt(t.equipArmorType),
  Ct(t.equipLock),
  Nt(t.equipSeal),
  ft(t.slotType),
  Lt(t.actionPlus),
  dt(t.specialFlag),
  It(t.collaps),
  Ot(t.partyAbility)
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
  R(L)
), _t = (t) => s(
  13,
  a.options.stateRate,
  t,
  R(L)
), Et = (t) => s(
  14,
  a.options.stateResist,
  t,
  w(d)
), ct = (t) => s(
  21,
  a.options.regularParam,
  t,
  R(L)
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
  R(d)
), mt = (t) => s(33, a.options.attackSpeed, t), St = (t) => s(34, a.options.attackTimes, t), Pt = (t) => s(
  35,
  a.options.attackSkill,
  t,
  w(K)
), Lt = (t) => s(61, a.options.actionPlus, t), dt = (t) => s(
  62,
  a.options.specialFlag,
  t,
  R(X)
), It = (t) => s(
  63,
  a.options.collaps,
  t,
  R(V)
), Ot = (t) => s(
  64,
  a.options.partyAbility,
  t,
  R(W)
), pt = (t) => s(
  51,
  a.options.equipWeaponType,
  t,
  x(et)
), Mt = (t) => s(
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
), Mn = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Ft = {
  domainName: "ダメージ",
  options: {}
}, Cn = 0, Nn = 1, un = 2, ln = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Gt = "{name} + {value1}", U = "{name} {value1}%", M = "{value1}% + {value2}", F = "{name} {value1}ターン", P = "{name}", _ = {
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
      format: M
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
}, fn = 0, Ht = 11, gt = 12, Bt = 13, yt = 21, vt = 22, ht = 31, Yt = 32, kt = 33, Vt = 34, Dn = 41, Wt = 42, Xt = 43, Kt = 44, G = "{value1}", H = "{value2}", g = "{name}";
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
const Un = (t, e, o) => t.format.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", o), Fn = (t) => [
  wt(t.options.recoverHp),
  xt(t.options.recoverMp),
  Qt(t.options.gainTp),
  $t(t.options.addState),
  jt(t.options.removeState),
  Jt(t.options.addBuff),
  bt(t.options.addDebuff),
  zt(t.options.removeBuff),
  te(t.options.removeDebuff),
  Zt(t.options.learnSkill),
  ee(t.options.commonEvent)
], I = () => ({
  author: r,
  module: C,
  kind: L
}), O = (t) => ({
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
), Qt = (t) => c(Bt, _.options.gainTp, t), Gn = (t) => c(Wt, _.options.grow, t), $t = (t) => c(
  yt,
  _.options.addState,
  t,
  O(d)
), jt = (t) => c(
  vt,
  _.options.removeState,
  t,
  O(d)
), Jt = (t) => c(
  ht,
  _.options.addBuff,
  t,
  I()
), zt = (t) => c(
  kt,
  _.options.removeBuff,
  t,
  I()
), Zt = (t) => c(
  Xt,
  _.options.learnSkill,
  t,
  O(K)
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
  O(tt)
), Hn = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, gn = {
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
}, Bn = 0, yn = 101, vn = 401, hn = 102, Yn = 402, kn = 103, Vn = 104, Wn = 105, Xn = 405, Kn = 108, qn = 408, wn = 109, xn = 111, Qn = 411, $n = 112, jn = 113, Jn = 115, zn = 117, Zn = 118, bn = 119, ta = 121, ea = 122, oa = 123, na = 124, aa = 125, sa = 126, Aa = 127, _a = 128, Ea = 129, ca = 132, Ra = 133, Ta = 134, ia = 135, ra = 136, ma = 137, Sa = 138, Pa = 139, La = 140, da = 201, Ia = 202, Oa = 203, pa = 204, Ma = 205, Ca = 206, Na = 211, ua = 212, la = 213, fa = 214, Da = 216, Ua = 217, Fa = 221, Ga = 222, Ha = 223, ga = 224, Ba = 225, ya = 230, va = 231, ha = 232, Ya = 233, ka = 234, Va = 235, Wa = 236, Xa = 241, Ka = 242, qa = 243, wa = 244, xa = 245, Qa = 246, $a = 249, ja = 250, Ja = 251, za = 261, Za = 282, ba = 283, ts = 284, es = 285, os = 301, ns = 302, as = 605, ss = 303, As = 311, _s = 312, Es = 313, cs = 314, Rs = 315, Ts = 320, is = 321, rs = 322, ms = 323, Ss = 324, Ps = 325, Ls = 331, ds = 332, Is = 333, Os = 334, ps = 335, Ms = 336, Cs = 337, Ns = 339, us = 340, ls = 351, fs = 342, Ds = 352, Us = 353, Fs = 354, Gs = 355, Hs = 655, gs = 356, Bs = 357, ys = 0, vs = 1, hs = 2, Ys = 3, ks = 4, Vs = 5, Ws = 6, Xs = 7, Ks = 8, qs = 9, ws = 10, xs = 11, Qs = 12, $s = 13, js = 14, Js = 15, zs = 16, Zs = 17, bs = 18, tA = 19, eA = 20, oA = 21, nA = 22, aA = 23, sA = 24, AA = 25, _A = 26, EA = 27, cA = 28, RA = 29, TA = 30, iA = 31, rA = 32, mA = 33, SA = 34, PA = 35, LA = 36, dA = 37, IA = 38, OA = 39, pA = 40, MA = 41, CA = 42, NA = 43, uA = 44, lA = 45, fA = {
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
}, DA = {
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
}, UA = {
  rpg: {
    damage: Ft,
    data: oe,
    traits: a,
    itemEffect: _
  },
  global: ne
};
export {
  us as ABORT_BATTLE,
  r as AUTHOR_RMMZ,
  os as BATTLE_PROCESSING,
  rs as CHANGE_ACTOR_IMAGES,
  _a as CHANGE_ARMORS,
  ba as CHANGE_BATTLE_BACKGROUND,
  ca as CHANGE_BATTLE_BGM,
  is as CHANGE_CLASS,
  Pa as CHANGE_DEFEAT_ME,
  ra as CHANGE_ENCOUNTER,
  Ls as CHANGE_ENEMY_HP,
  ds as CHANGE_ENEMY_MP,
  Is as CHANGE_ENEMY_STATE,
  fs as CHANGE_ENEMY_TP,
  Rs as CHANGE_EXP,
  ma as CHANGE_FORMATION_ACCESS,
  aa as CHANGE_GOLD,
  As as CHANGE_HP,
  sa as CHANGE_ITEMS,
  ia as CHANGE_MENU_ACCESS,
  _s as CHANGE_MP,
  Ts as CHANGE_NAME,
  Ss as CHANGE_NICKNAME,
  ts as CHANGE_PARALLAX,
  Ea as CHANGE_PARTY_MEMBER,
  Da as CHANGE_PLAYER_FOLLOWERS,
  Ps as CHANGE_PROFILE,
  Ta as CHANGE_SAVE_ACCESS,
  Za as CHANGE_TILESET,
  Es as CHANGE_TP,
  Na as CHANGE_TRANSPARENCY,
  La as CHANGE_VEHICLE_BGM,
  ms as CHANGE_VEHICLE_IMAGE,
  Ra as CHANGE_VICTORY_ME,
  Aa as CHANGE_WEAPONS,
  Sa as CHANGE_WINDOW_COLOR,
  _o as COLLAPS_BOSS,
  Eo as COLLAPS_INSTANT,
  co as COLLAPS_NONE,
  Ao as COLLAPS_NORMAL,
  Kn as COMMENT,
  qn as COMMENT_BODY,
  zn as COMMON_EVENT,
  xn as CONDITIONAL_BRANCH,
  Qn as CONDITIONAL_BRANCH_ELSE,
  oa as CONTROL_SELF_SWITCH,
  ta as CONTROL_SWITCHES,
  na as CONTROL_TIMER,
  ea as CONTROL_VARIABLES,
  Ft as DEFAULT_DAMAGE_LABELS,
  ne as DEFAULT_GLOBAL_LABELS,
  ln as DEFAULT_ITEM_LABELS,
  Hn as DEFAULT_SKILL_LABELS,
  fA as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  gn as DEFAULT_USABLE_ITEM_LABELS,
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
  Dn as EFFECT_SPECIAL,
  ps as ENEMY_APPEAR,
  Os as ENEMY_RECOVER_ALL,
  Ms as ENEMY_TRANSFORM,
  fa as ERASE_EVENT,
  Va as ERASE_PICTURE,
  Jn as EXIT_EVENT_PROCESSING,
  No as EXTRA_PARAM_CEV,
  fo as EXTRA_PARAM_CNT,
  Co as EXTRA_PARAM_CRI,
  Mo as EXTRA_PARAM_EVA,
  po as EXTRA_PARAM_HIT,
  Do as EXTRA_PARAM_HRG,
  uo as EXTRA_PARAM_MEV,
  lo as EXTRA_PARAM_MRF,
  Uo as EXTRA_PARAM_MRG,
  Fo as EXTRA_PARAM_TRG,
  Ga as FADEIN_SCREEN,
  Ka as FADEOUT_BGM,
  Qa as FADEOUT_BGS,
  Fa as FADEOUT_SCREEN,
  pe as FILENAME_SYSTEM,
  Po as FLAG_ID_AUTO_BATTLE,
  Lo as FLAG_ID_GUARD,
  Oo as FLAG_ID_PRESERVE_TP,
  Io as FLAG_ID_SUBSTITUTE,
  ga as FLASH_SCREEN,
  Ne as FOLDER_AUDIO,
  ae as FOLDER_AUDIO_BGM,
  _e as FOLDER_AUDIO_BGS,
  Ae as FOLDER_AUDIO_ME,
  se as FOLDER_AUDIO_SE,
  Me as FOLDER_DATA,
  Ce as FOLDER_IMG,
  Ee as FOLDER_IMG_BATTLEBACK1,
  ce as FOLDER_IMG_BATTLEBACK2,
  Re as FOLDER_IMG_CHACTERS,
  Te as FOLDER_IMG_ENEMIES,
  ie as FOLDER_IMG_FACES,
  re as FOLDER_IMG_PARALLACES,
  me as FOLDER_IMG_PICTURES,
  Se as FOLDER_IMG_SV_ACTORS,
  Pe as FOLDER_IMG_SV_ENEMIES,
  Le as FOLDER_IMG_SYSTEM,
  de as FOLDER_IMG_TILESETS,
  Ie as FOLDER_IMG_TITLES1,
  Oe as FOLDER_IMG_TITLES2,
  ue as FOLDER_JS,
  Ns as FORCE_ACTION,
  Us as GAME_OVER,
  Ua as GATHER_FOLLOWERS,
  es as GET_LOCATION_INFO,
  Ca as GET_ONOFF_VEHICLE,
  Cn as HITTYPE_CERTAIN,
  un as HITTYPE_MAGICAL,
  Nn as HITTYPE_PHYSICAL,
  kn as INPUT_NUMBER,
  Zn as LABEL,
  Mn as LABELS_DATA_WEAPON,
  bn as LABEL_JUMP,
  UA as LABEL_REGISTRY_JP,
  oe as LABEL_SET_DATA,
  _ as LABEL_SET_ITEM_EFFECT,
  a as LABEL_SET_TRAIT,
  $n as LOOP,
  jn as LOOP_BREAK,
  y as MODULE_DATA,
  v as MODULE_SYSTEM,
  C as MODULE_TRAIT,
  ha as MOVE_PICTURE,
  DA as MockSystemLabelDataTypes,
  ss as NAME_INPUT_PROCESSING,
  Bn as NO_OPERATION,
  ls as OPEN_MENU_SCREEN,
  Ds as OPEN_SAVE_SCREEN,
  io as PARTY_ABILITY_CANCEL_SURPRISE,
  So as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Ro as PARTY_ABILITY_ENCOUNTER_HALF,
  To as PARTY_ABILITY_ENCOUNTER_NONE,
  mo as PARTY_ABILITY_GOLD_DOUBLE,
  ro as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Xa as PLAY_BGM,
  xa as PLAY_BGS,
  $a as PLAY_ME,
  za as PLAY_MOVIE,
  ja as PLAY_SE,
  gs as PLUGIN_COMMAND_MV,
  Bs as PLUGIN_COMMAND_MZ,
  cs as RECOVER_ALL,
  ho as REGULAR_PARAM_AGI,
  go as REGULAR_PARAM_ATK,
  Bo as REGULAR_PARAM_DEF,
  Yo as REGULAR_PARAM_LUK,
  yo as REGULAR_PARAM_MATK,
  Go as REGULAR_PARAM_MAX_HP,
  Ho as REGULAR_PARAM_MAX_MP,
  vo as REGULAR_PARAM_MDEF,
  wa as RESUME_BGM,
  Fs as RETURN_TO_TITLE_SCREEN,
  Ya as ROTATE_PICTURE,
  NA as ROUTE_CHANGE_BLEND_MODE,
  TA as ROUTE_CHANGE_FREQ,
  MA as ROUTE_CHANGE_IMAGE,
  CA as ROUTE_CHANGE_OPACITY,
  RA as ROUTE_CHANGE_SPEED,
  LA as ROUTE_DIR_FIX_OFF,
  PA as ROUTE_DIR_FIX_ON,
  ys as ROUTE_END,
  js as ROUTE_JUMP,
  xs as ROUTE_MOVE_AWAY,
  $s as ROUTE_MOVE_BACKWARD,
  vs as ROUTE_MOVE_DOWN,
  Qs as ROUTE_MOVE_FORWARD,
  hs as ROUTE_MOVE_LEFT,
  Vs as ROUTE_MOVE_LOWER_L,
  Ws as ROUTE_MOVE_LOWER_R,
  qs as ROUTE_MOVE_RANDOM,
  Ys as ROUTE_MOVE_RIGHT,
  ws as ROUTE_MOVE_TOWARD,
  ks as ROUTE_MOVE_UP,
  Xs as ROUTE_MOVE_UPPER_L,
  Ks as ROUTE_MOVE_UPPER_R,
  uA as ROUTE_PLAY_SE,
  lA as ROUTE_SCRIPT,
  SA as ROUTE_STEP_ANIME_OFF,
  mA as ROUTE_STEP_ANIME_ON,
  cA as ROUTE_SWITCH_OFF,
  EA as ROUTE_SWITCH_ON,
  IA as ROUTE_THROUGH_OFF,
  dA as ROUTE_THROUGH_ON,
  pA as ROUTE_TRANSPARENT_OFF,
  OA as ROUTE_TRANSPARENT_ON,
  nA as ROUTE_TURN_180D,
  oA as ROUTE_TURN_90D_L,
  eA as ROUTE_TURN_90D_R,
  aA as ROUTE_TURN_90D_R_L,
  _A as ROUTE_TURN_AWAY,
  zs as ROUTE_TURN_DOWN,
  Zs as ROUTE_TURN_LEFT,
  sA as ROUTE_TURN_RANDOM,
  bs as ROUTE_TURN_RIGHT,
  AA as ROUTE_TURN_TOWARD,
  tA as ROUTE_TURN_UP,
  Js as ROUTE_WAIT,
  rA as ROUTE_WALK_ANIME_OFF,
  iA as ROUTE_WALK_ANIME_ON,
  qa as SAVE_BGM,
  Gs as SCRIPT_EVAL,
  Hs as SCRIPT_EVAL_BODY,
  pa as SCROLL_MAP,
  Vn as SELECT_ITEM,
  Oa as SET_EVENT_LOCATION,
  Ma as SET_MOVEMENT_ROUTE,
  Ia as SET_VEHICLE_LOCATION,
  Wa as SET_WEATHER_EFFECT,
  Ba as SHAKE_SCREEN,
  ns as SHOP_PROCESSING,
  as as SHOP_PROCESSING_BODY,
  ua as SHOW_ANIMATION,
  la as SHOW_BALLOON_ICON,
  Cs as SHOW_BATTLE_ANIMATION,
  hn as SHOW_CHOICES,
  Yn as SHOW_CHOICES_ITEM,
  yn as SHOW_MESSAGE,
  vn as SHOW_MESSAGE_BODY,
  va as SHOW_PICTURE,
  Wn as SHOW_SCROLLING_TEXT,
  Xn as SHOW_SCROLLING_TEXT_BODY,
  wn as SKIP,
  fn as SPECIAL_EFFECT_ESCAPE,
  $o as SPECIAL_PARAM_EXR,
  Qo as SPECIAL_PARAM_FDR,
  Vo as SPECIAL_PARAM_GRD,
  Ko as SPECIAL_PARAM_MCR,
  xo as SPECIAL_PARAM_MDR,
  wo as SPECIAL_PARAM_PDR,
  Xo as SPECIAL_PARAM_PHA,
  Wo as SPECIAL_PARAM_REC,
  qo as SPECIAL_PARAM_TCR,
  ko as SPECIAL_PARAM_TGR,
  ot as SRC_ARMOR_TYPES,
  Ln as SRC_COLOR,
  tt as SRC_COMMON_EVNET,
  _n as SRC_DATA_ACTOR,
  mn as SRC_DATA_ARMOR,
  Sn as SRC_DATA_CLASS,
  Rn as SRC_DATA_ENEMY,
  Tn as SRC_DATA_ITEMS,
  cn as SRC_DATA_MAP,
  K as SRC_DATA_SKILL,
  d as SRC_DATA_STATE,
  En as SRC_DATA_VARIABLE,
  rn as SRC_DATA_WEAPON,
  nt as SRC_ELEMENTS,
  dn as SRC_EQUIP_TYPES,
  Y as SRC_PARAMS_EXTRA,
  L as SRC_PARAMS_REGULAR,
  k as SRC_PARAMS_SPECIAL,
  On as SRC_SKILL_TYPES,
  In as SRC_SWITCHES,
  V as SRC_TRAIT_COLLAPS,
  W as SRC_TRAIT_PARTY_ABILITY,
  X as SRC_TRAIT_SPECIAL_FLAG,
  Pn as SRC_TROOP,
  et as SRC_WEAPON_TYPES,
  Ja as STOP_SE,
  ka as TINT_PICTURE,
  Ha as TINT_SCREEN,
  oo as TRAIT_ACTION_PLUS,
  Xe as TRAIT_ATTACK_ELEMENT,
  xe as TRAIT_ATTACK_SKILL,
  qe as TRAIT_ATTACK_SPEED,
  Ke as TRAIT_ATTACK_STATE,
  we as TRAIT_ATTACK_TIMES,
  ao as TRAIT_COLLAPSE_TYPE,
  ve as TRAIT_DEBUFF_RATE,
  ye as TRAIT_ELEMENT_RATE,
  Ze as TRAIT_EQUIP_ARMOR_TYPE,
  be as TRAIT_EQUIP_LOCK,
  to as TRAIT_EQUIP_SEAL,
  ze as TRAIT_EQUIP_WEAPON_TYPE,
  ke as TRAIT_PARAM,
  so as TRAIT_PARTY_ABILITY,
  je as TRAIT_SKILL_ADD,
  Je as TRAIT_SKILL_SEAL,
  Qe as TRAIT_SKILL_TYPE_ADD,
  $e as TRAIT_SKILL_TYPE_SEAL,
  eo as TRAIT_SLOT_TYPE,
  We as TRAIT_SPARAM,
  no as TRAIT_SPECIAL_FLAG,
  he as TRAIT_STATE_RATE,
  Ye as TRAIT_STATE_RESIST,
  Ve as TRAIT_XPARAM,
  da as TRANSFER_PLAYER,
  at as TraitDescriptor,
  ya as WAIT,
  Zo as buildCollapsSource,
  en as buildExtraParamSource,
  bo as buildPartyAbilitySource,
  tn as buildRegularParamSource,
  nn as buildSpecialFlagSource,
  on as buildSpecialParamSource,
  Jt as defineEffectAddBuff,
  bt as defineEffectAddDebuff,
  $t as defineEffectAddState,
  ee as defineEffectCommonEvent,
  Qt as defineEffectGainTp,
  Gn as defineEffectGrow,
  Zt as defineEffectLearnSkill,
  wt as defineEffectRecoverHp,
  xt as defineEffectRecoverMp,
  zt as defineEffectRemoveBuff,
  te as defineEffectRemoveDebuff,
  jt as defineEffectRemoveState,
  Jo as extraParamName,
  $ as foldCollapsOptions,
  z as foldExtraParam,
  j as foldPartyAbilityOptions,
  J as foldRegularParam,
  b as foldSpecialFlag,
  Z as foldSpecialParams,
  Un as formatItemEffectText,
  ge as getArmorTypes,
  Ue as getElementTypes,
  Fe as getEquipTypes,
  Be as getParamNames,
  Ge as getSkillTypes,
  De as getVariableNames,
  He as getWeaponTypes,
  An as isValid,
  sn as joinSourceKey,
  le as mergeDomainLabel,
  fe as mergeNestedPrimitiveRecords,
  B as mergeWithDefaults,
  jo as regularParamName,
  Fn as resolveItemEffectLabels,
  pn as resolveTraitLabels,
  an as sanitizeKey,
  zo as specialParamName,
  p as testUnknonwKey,
  S as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
