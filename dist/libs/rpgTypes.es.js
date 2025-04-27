const se = "bgm", ae = "se", Ae = "me", _e = "bgs", Ee = "battlebacks1", ce = "battlebacks2", Re = "characters", Te = "enemies", ie = "faces", re = "parallaxes", me = "pictures", Se = "sv_actors", Le = "sv_enemies", Pe = "system", Ie = "tilesets", de = "titles1", Me = "titles2", Oe = "System.json", Ne = "Actors.json", pe = "Classes.json", Ce = "Skills.json", ue = "Items.json", le = "Weapons.json", fe = "Armors.json", De = "Enemies.json", Ue = "Troops.json", Fe = "States.json", Ge = "Animations.json", He = "Tilesets.json", ge = "CommonEvents.json", Be = "MapInfos.json", ye = "data", ve = "img", he = "audio", ke = "js", B = (t, e) => {
  const o = { ...t };
  for (const n in t) {
    const E = e[n];
    typeof E == "string" && (o[n] = E);
  }
  return o;
}, Ye = (t, e) => ({
  domainName: e.domainName ?? t.domainName,
  options: B(t.options, e.options ?? {})
}), Ve = (t, e) => {
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
}), We = (t) => t.variables.map(i), Ke = (t) => t.elements.map(i), Xe = (t) => t.equipTypes.map(i), qe = (t) => t.skillTypes.map(i), we = (t) => t.weaponTypes.map(i), xe = (t) => t.armorTypes.map(i), je = (t) => t.terms.params.map(i), r = "rmmz", p = "trait", y = "data", v = "system", Qe = 11, $e = 12, Je = 13, ze = 14, Ze = 21, be = 22, to = 23, eo = 31, oo = 32, no = 33, so = 34, ao = 35, Ao = 41, _o = 42, Eo = 43, co = 44, Ro = 51, To = 52, io = 53, ro = 54, mo = 55, So = 61, Lo = 62, Po = 63, Io = 64, Mo = 0, Oo = 1, No = 2, po = 3, Co = 0, uo = 1, lo = 2, fo = 3, Do = 4, Uo = 5, Fo = 0, Go = 1, Ho = 2, go = 3, Bo = 0, yo = 1, vo = 2, ho = 3, ko = 4, Yo = 5, Vo = 6, Wo = 7, Ko = 8, Xo = 9, qo = 0, wo = 1, xo = 2, jo = 3, Qo = 4, $o = 5, Jo = 6, zo = 7, Zo = 0, bo = 1, tn = 2, en = 3, on = 4, nn = 5, sn = 6, an = 7, An = 8, _n = 9, En = (t, e) => {
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
}, cn = (t, e) => {
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
}, Rn = (t, e) => {
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
}, Q = (t, e) => [
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
], $ = (t) => [
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
    module: p,
    kind: t
  }
}), Tn = (t, e) => S(
  V,
  t,
  (o) => Q(o, e)
), rn = (t) => S(W, t, $), mn = (t) => S(P, t, J), Sn = (t) => S(k, t, z), Ln = (t) => S(Y, t, Z), Pn = (t) => S(K, t, b), A = "{name}", m = "{name} * {value}%", C = "{name} + {value}%", u = "{value}", s = {
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
      format: C,
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
      format: C
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
}, h = /^[a-zA-Z0-9]+$/, In = (t) => h.test(t) ? t : void 0, O = (t) => typeof t == "string" ? h.test(t) : !1, dn = (t) => [t.author, t.module, t.kind].join("."), Mn = (t) => O(t.author) && O(t.module) && O(t.kind), P = "params", k = "xparams", Y = "sparams", V = "collaps", W = "partyAbiility", K = "sflag", On = "actors", Nn = "variables", pn = "map", Cn = "enemy", I = "state", X = "skill", un = "items", ln = "weapon", fn = "armor", Dn = "class", tt = "common_event", Un = "troop", Fn = "colors", et = "weaponTypes", ot = "armorTypes", Gn = "equipTypes", Hn = "switches", gn = "skillTypes", nt = "elements", l = "{value}", f = "{name}";
class st {
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
const Bn = (t) => [
  at(t.elementRate),
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
  Lt(t.attackSkill),
  Dt(t.skillTypeAdd),
  Ut(t.skillTypeSeal),
  ut(t.skillAdd),
  lt(t.skillSeal),
  Ot(t.equipWeaponType),
  Nt(t.equipArmorType),
  pt(t.equipLock),
  Ct(t.equipSeal),
  ft(t.slotType),
  Pt(t.actionPlus),
  It(t.specialFlag),
  dt(t.collaps),
  Mt(t.partyAbility)
], D = (t, e) => typeof e == "string" ? e : t, a = (t, e, o, n) => {
  const E = D(e.domainName, o.domainName), T = D(e.format, o.format);
  return new st(t, E, T, n);
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
  module: p,
  kind: t
}), x = (t) => ({
  author: r,
  module: v,
  kind: t
}), at = (t) => a(
  11,
  s.options.elementRate,
  t,
  q()
), At = (t) => a(
  12,
  s.options.debuffRate,
  t,
  R(P)
), _t = (t) => a(
  13,
  s.options.stateRate,
  t,
  R(P)
), Et = (t) => a(
  14,
  s.options.stateResist,
  t,
  w(I)
), ct = (t) => a(
  21,
  s.options.regularParam,
  t,
  R(P)
), Rt = (t) => a(
  22,
  s.options.extraParam,
  t,
  R(k)
), Tt = (t) => a(
  23,
  s.options.specialParam,
  t,
  R(Y)
), it = (t) => a(
  31,
  s.options.attackElement,
  t,
  q()
), rt = (t) => a(
  32,
  s.options.attackState,
  t,
  R(I)
), mt = (t) => a(33, s.options.attackSpeed, t), St = (t) => a(34, s.options.attackTimes, t), Lt = (t) => a(
  35,
  s.options.attackSkill,
  t,
  w(X)
), Pt = (t) => a(61, s.options.actionPlus, t), It = (t) => a(
  62,
  s.options.specialFlag,
  t,
  R(K)
), dt = (t) => a(
  63,
  s.options.collaps,
  t,
  R(V)
), Mt = (t) => a(
  64,
  s.options.partyAbility,
  t,
  R(W)
), Ot = (t) => a(
  51,
  s.options.equipWeaponType,
  t,
  x(et)
), Nt = (t) => a(
  52,
  s.options.equipArmorType,
  t,
  x(ot)
), pt = (t) => a(53, s.options.equipLock, t), Ct = (t) => a(54, s.options.equipSeal, t), ut = (t) => a(43, s.options.skillAdd, t), lt = (t) => a(44, s.options.skillSeal, t), ft = (t) => a(55, s.options.slotType, t), Dt = (t) => a(
  41,
  s.options.skillTypeAdd,
  t
), Ut = (t) => a(
  42,
  s.options.skillTypeSeal,
  t
), yn = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Ft = {
  domainName: "ダメージ",
  options: {}
}, vn = 0, hn = 1, kn = 2, Yn = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Gt = "{name} + {value1}", U = "{name} {value1}%", N = "{value1}% + {value2}", F = "{name} {value1}ターン", L = "{name}", _ = {
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
      format: N
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: Gt
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: L
    },
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: N
    },
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: N
    },
    removeBuff: {
      desc: "バフを解除する",
      domainName: "バフ解除",
      format: L
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: L
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: U
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: L
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: U
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: L
    }
  }
}, Vn = 0, Ht = 11, gt = 12, Bt = 13, yt = 21, vt = 22, ht = 31, kt = 32, Yt = 33, Vt = 34, Wn = 41, Wt = 42, Kt = 43, Xt = 44, G = "{value1}", H = "{value2}", g = "{name}";
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
const Kn = (t, e, o) => t.format.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", o), Xn = (t) => [
  wt(t.options.recoverHp),
  xt(t.options.recoverMp),
  jt(t.options.gainTp),
  Qt(t.options.addState),
  $t(t.options.removeState),
  Jt(t.options.addBuff),
  bt(t.options.addDebuff),
  zt(t.options.removeBuff),
  te(t.options.removeDebuff),
  Zt(t.options.learnSkill),
  ee(t.options.commonEvent)
], d = () => ({
  author: r,
  module: p,
  kind: P
}), M = (t) => ({
  author: r,
  module: y,
  kind: t
}), c = (t, e, o, n) => {
  const E = o.domainName ?? e.domainName, T = o.format ?? e.format, j = o.desc ?? e.desc;
  return new qt(t, E, T, j, n);
}, wt = (t) => c(
  Ht,
  _.options.recoverHp,
  t
), xt = (t) => c(
  gt,
  _.options.recoverMp,
  t
), jt = (t) => c(Bt, _.options.gainTp, t), qn = (t) => c(Wt, _.options.grow, t), Qt = (t) => c(
  yt,
  _.options.addState,
  t,
  M(I)
), $t = (t) => c(
  vt,
  _.options.removeState,
  t,
  M(I)
), Jt = (t) => c(
  ht,
  _.options.addBuff,
  t,
  d()
), zt = (t) => c(
  Yt,
  _.options.removeBuff,
  t,
  d()
), Zt = (t) => c(
  Kt,
  _.options.learnSkill,
  t,
  M(X)
), bt = (t) => c(
  kt,
  _.options.addBuff,
  t,
  d()
), te = (t) => c(
  Vt,
  _.options.removeDebuff,
  t,
  d()
), ee = (t) => c(
  Xt,
  _.options.commonEvent,
  t,
  M(tt)
), wn = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, xn = {
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
}, jn = 0, Qn = 101, $n = 401, Jn = 102, zn = 402, Zn = 103, bn = 104, ts = 105, es = 405, os = 108, ns = 408, ss = 109, as = 111, As = 411, _s = 112, Es = 113, cs = 115, Rs = 117, Ts = 118, is = 119, rs = 121, ms = 122, Ss = 123, Ls = 124, Ps = 125, Is = 126, ds = 127, Ms = 128, Os = 129, Ns = 132, ps = 133, Cs = 134, us = 135, ls = 136, fs = 137, Ds = 138, Us = 139, Fs = 140, Gs = 201, Hs = 202, gs = 203, Bs = 204, ys = 205, vs = 206, hs = 211, ks = 212, Ys = 213, Vs = 214, Ws = 216, Ks = 217, Xs = 221, qs = 222, ws = 223, xs = 224, js = 225, Qs = 230, $s = 231, Js = 232, zs = 233, Zs = 234, bs = 235, ta = 236, ea = 241, oa = 242, na = 243, sa = 244, aa = 245, Aa = 246, _a = 249, Ea = 250, ca = 251, Ra = 261, Ta = 282, ia = 283, ra = 284, ma = 285, Sa = 301, La = 302, Pa = 605, Ia = 303, da = 311, Ma = 312, Oa = 313, Na = 314, pa = 315, Ca = 320, ua = 321, la = 322, fa = 323, Da = 324, Ua = 325, Fa = 331, Ga = 332, Ha = 333, ga = 334, Ba = 335, ya = 336, va = 337, ha = 339, ka = 340, Ya = 351, Va = 342, Wa = 352, Ka = 353, Xa = 354, qa = 355, wa = 655, xa = 356, ja = 357, Qa = 0, $a = 1, Ja = 2, za = 3, Za = 4, ba = 5, tA = 6, eA = 7, oA = 8, nA = 9, sA = 10, aA = 11, AA = 12, _A = 13, EA = 14, cA = 15, RA = 16, TA = 17, iA = 18, rA = 19, mA = 20, SA = 21, LA = 22, PA = 23, IA = 24, dA = 25, MA = 26, OA = 27, NA = 28, pA = 29, CA = 30, uA = 31, lA = 32, fA = 33, DA = 34, UA = 35, FA = 36, GA = 37, HA = 38, gA = 39, BA = 40, yA = 41, vA = 42, hA = 43, kA = 44, YA = 45, VA = {
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
}, WA = {
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
}, KA = {
  rpg: {
    damage: Ft,
    data: oe,
    traits: s,
    itemEffect: _
  },
  global: ne
};
export {
  ka as ABORT_BATTLE,
  r as AUTHOR_RMMZ,
  Sa as BATTLE_PROCESSING,
  la as CHANGE_ACTOR_IMAGES,
  Ms as CHANGE_ARMORS,
  ia as CHANGE_BATTLE_BACKGROUND,
  Ns as CHANGE_BATTLE_BGM,
  ua as CHANGE_CLASS,
  Us as CHANGE_DEFEAT_ME,
  ls as CHANGE_ENCOUNTER,
  Fa as CHANGE_ENEMY_HP,
  Ga as CHANGE_ENEMY_MP,
  Ha as CHANGE_ENEMY_STATE,
  Va as CHANGE_ENEMY_TP,
  pa as CHANGE_EXP,
  fs as CHANGE_FORMATION_ACCESS,
  Ps as CHANGE_GOLD,
  da as CHANGE_HP,
  Is as CHANGE_ITEMS,
  us as CHANGE_MENU_ACCESS,
  Ma as CHANGE_MP,
  Ca as CHANGE_NAME,
  Da as CHANGE_NICKNAME,
  ra as CHANGE_PARALLAX,
  Os as CHANGE_PARTY_MEMBER,
  Ws as CHANGE_PLAYER_FOLLOWERS,
  Ua as CHANGE_PROFILE,
  Cs as CHANGE_SAVE_ACCESS,
  Ta as CHANGE_TILESET,
  Oa as CHANGE_TP,
  hs as CHANGE_TRANSPARENCY,
  Fs as CHANGE_VEHICLE_BGM,
  fa as CHANGE_VEHICLE_IMAGE,
  ps as CHANGE_VICTORY_ME,
  ds as CHANGE_WEAPONS,
  Ds as CHANGE_WINDOW_COLOR,
  Oo as COLLAPS_BOSS,
  No as COLLAPS_INSTANT,
  po as COLLAPS_NONE,
  Mo as COLLAPS_NORMAL,
  os as COMMENT,
  ns as COMMENT_BODY,
  Rs as COMMON_EVENT,
  as as CONDITIONAL_BRANCH,
  As as CONDITIONAL_BRANCH_ELSE,
  Ss as CONTROL_SELF_SWITCH,
  rs as CONTROL_SWITCHES,
  Ls as CONTROL_TIMER,
  ms as CONTROL_VARIABLES,
  Ft as DEFAULT_DAMAGE_LABELS,
  ne as DEFAULT_GLOBAL_LABELS,
  Yn as DEFAULT_ITEM_LABELS,
  wn as DEFAULT_SKILL_LABELS,
  VA as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  xn as DEFAULT_USABLE_ITEM_LABELS,
  ht as EFFECT_ADD_BUFF,
  kt as EFFECT_ADD_DEBUFF,
  yt as EFFECT_ADD_STATE,
  Xt as EFFECT_COMMON_EVENT,
  Bt as EFFECT_GAIN_TP,
  Wt as EFFECT_GROW,
  Kt as EFFECT_LEARN_SKILL,
  Ht as EFFECT_RECOVER_HP,
  gt as EFFECT_RECOVER_MP,
  Yt as EFFECT_REMOVE_BUFF,
  Vt as EFFECT_REMOVE_DEBUFF,
  vt as EFFECT_REMOVE_STATE,
  Wn as EFFECT_SPECIAL,
  Ba as ENEMY_APPEAR,
  ga as ENEMY_RECOVER_ALL,
  ya as ENEMY_TRANSFORM,
  Vs as ERASE_EVENT,
  bs as ERASE_PICTURE,
  cs as EXIT_EVENT_PROCESSING,
  ho as EXTRA_PARAM_CEV,
  Vo as EXTRA_PARAM_CNT,
  vo as EXTRA_PARAM_CRI,
  yo as EXTRA_PARAM_EVA,
  Bo as EXTRA_PARAM_HIT,
  Wo as EXTRA_PARAM_HRG,
  ko as EXTRA_PARAM_MEV,
  Yo as EXTRA_PARAM_MRF,
  Ko as EXTRA_PARAM_MRG,
  Xo as EXTRA_PARAM_TRG,
  qs as FADEIN_SCREEN,
  oa as FADEOUT_BGM,
  Aa as FADEOUT_BGS,
  Xs as FADEOUT_SCREEN,
  pe as FILANAME_CLASSES,
  Ne as FILENAME_ACTORS,
  Ge as FILENAME_ANIMATIONS,
  fe as FILENAME_ARMORS,
  ge as FILENAME_COMMON_EVENTS,
  De as FILENAME_ENEMIES,
  ue as FILENAME_ITEMS,
  Be as FILENAME_MAP_INFOS,
  Ce as FILENAME_SKILLS,
  Fe as FILENAME_STATES,
  Oe as FILENAME_SYSTEM,
  He as FILENAME_TILESET,
  Ue as FILENAME_TROOPS,
  le as FILENAME_WEAPONS,
  Fo as FLAG_ID_AUTO_BATTLE,
  Go as FLAG_ID_GUARD,
  go as FLAG_ID_PRESERVE_TP,
  Ho as FLAG_ID_SUBSTITUTE,
  xs as FLASH_SCREEN,
  he as FOLDER_AUDIO,
  se as FOLDER_AUDIO_BGM,
  _e as FOLDER_AUDIO_BGS,
  Ae as FOLDER_AUDIO_ME,
  ae as FOLDER_AUDIO_SE,
  ye as FOLDER_DATA,
  ve as FOLDER_IMG,
  Ee as FOLDER_IMG_BATTLEBACK1,
  ce as FOLDER_IMG_BATTLEBACK2,
  Re as FOLDER_IMG_CHACTERS,
  Te as FOLDER_IMG_ENEMIES,
  ie as FOLDER_IMG_FACES,
  re as FOLDER_IMG_PARALLACES,
  me as FOLDER_IMG_PICTURES,
  Se as FOLDER_IMG_SV_ACTORS,
  Le as FOLDER_IMG_SV_ENEMIES,
  Pe as FOLDER_IMG_SYSTEM,
  Ie as FOLDER_IMG_TILESETS,
  de as FOLDER_IMG_TITLES1,
  Me as FOLDER_IMG_TITLES2,
  ke as FOLDER_JS,
  ha as FORCE_ACTION,
  Ka as GAME_OVER,
  Ks as GATHER_FOLLOWERS,
  ma as GET_LOCATION_INFO,
  vs as GET_ONOFF_VEHICLE,
  vn as HITTYPE_CERTAIN,
  kn as HITTYPE_MAGICAL,
  hn as HITTYPE_PHYSICAL,
  Zn as INPUT_NUMBER,
  Ts as LABEL,
  yn as LABELS_DATA_WEAPON,
  is as LABEL_JUMP,
  KA as LABEL_REGISTRY_JP,
  oe as LABEL_SET_DATA,
  _ as LABEL_SET_ITEM_EFFECT,
  s as LABEL_SET_TRAIT,
  _s as LOOP,
  Es as LOOP_BREAK,
  y as MODULE_DATA,
  v as MODULE_SYSTEM,
  p as MODULE_TRAIT,
  Js as MOVE_PICTURE,
  WA as MockSystemLabelDataTypes,
  Ia as NAME_INPUT_PROCESSING,
  jn as NO_OPERATION,
  Ya as OPEN_MENU_SCREEN,
  Wa as OPEN_SAVE_SCREEN,
  lo as PARTY_ABILITY_CANCEL_SURPRISE,
  Uo as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Co as PARTY_ABILITY_ENCOUNTER_HALF,
  uo as PARTY_ABILITY_ENCOUNTER_NONE,
  Do as PARTY_ABILITY_GOLD_DOUBLE,
  fo as PARTY_ABILITY_RAISE_PREEMPTIVE,
  ea as PLAY_BGM,
  aa as PLAY_BGS,
  _a as PLAY_ME,
  Ra as PLAY_MOVIE,
  Ea as PLAY_SE,
  xa as PLUGIN_COMMAND_MV,
  ja as PLUGIN_COMMAND_MZ,
  Na as RECOVER_ALL,
  Jo as REGULAR_PARAM_AGI,
  xo as REGULAR_PARAM_ATK,
  jo as REGULAR_PARAM_DEF,
  zo as REGULAR_PARAM_LUK,
  Qo as REGULAR_PARAM_MATK,
  qo as REGULAR_PARAM_MAX_HP,
  wo as REGULAR_PARAM_MAX_MP,
  $o as REGULAR_PARAM_MDEF,
  sa as RESUME_BGM,
  Xa as RETURN_TO_TITLE_SCREEN,
  zs as ROTATE_PICTURE,
  hA as ROUTE_CHANGE_BLEND_MODE,
  CA as ROUTE_CHANGE_FREQ,
  yA as ROUTE_CHANGE_IMAGE,
  vA as ROUTE_CHANGE_OPACITY,
  pA as ROUTE_CHANGE_SPEED,
  FA as ROUTE_DIR_FIX_OFF,
  UA as ROUTE_DIR_FIX_ON,
  Qa as ROUTE_END,
  EA as ROUTE_JUMP,
  aA as ROUTE_MOVE_AWAY,
  _A as ROUTE_MOVE_BACKWARD,
  $a as ROUTE_MOVE_DOWN,
  AA as ROUTE_MOVE_FORWARD,
  Ja as ROUTE_MOVE_LEFT,
  ba as ROUTE_MOVE_LOWER_L,
  tA as ROUTE_MOVE_LOWER_R,
  nA as ROUTE_MOVE_RANDOM,
  za as ROUTE_MOVE_RIGHT,
  sA as ROUTE_MOVE_TOWARD,
  Za as ROUTE_MOVE_UP,
  eA as ROUTE_MOVE_UPPER_L,
  oA as ROUTE_MOVE_UPPER_R,
  kA as ROUTE_PLAY_SE,
  YA as ROUTE_SCRIPT,
  DA as ROUTE_STEP_ANIME_OFF,
  fA as ROUTE_STEP_ANIME_ON,
  NA as ROUTE_SWITCH_OFF,
  OA as ROUTE_SWITCH_ON,
  HA as ROUTE_THROUGH_OFF,
  GA as ROUTE_THROUGH_ON,
  BA as ROUTE_TRANSPARENT_OFF,
  gA as ROUTE_TRANSPARENT_ON,
  LA as ROUTE_TURN_180D,
  SA as ROUTE_TURN_90D_L,
  mA as ROUTE_TURN_90D_R,
  PA as ROUTE_TURN_90D_R_L,
  MA as ROUTE_TURN_AWAY,
  RA as ROUTE_TURN_DOWN,
  TA as ROUTE_TURN_LEFT,
  IA as ROUTE_TURN_RANDOM,
  iA as ROUTE_TURN_RIGHT,
  dA as ROUTE_TURN_TOWARD,
  rA as ROUTE_TURN_UP,
  cA as ROUTE_WAIT,
  lA as ROUTE_WALK_ANIME_OFF,
  uA as ROUTE_WALK_ANIME_ON,
  na as SAVE_BGM,
  qa as SCRIPT_EVAL,
  wa as SCRIPT_EVAL_BODY,
  Bs as SCROLL_MAP,
  bn as SELECT_ITEM,
  gs as SET_EVENT_LOCATION,
  ys as SET_MOVEMENT_ROUTE,
  Hs as SET_VEHICLE_LOCATION,
  ta as SET_WEATHER_EFFECT,
  js as SHAKE_SCREEN,
  La as SHOP_PROCESSING,
  Pa as SHOP_PROCESSING_BODY,
  ks as SHOW_ANIMATION,
  Ys as SHOW_BALLOON_ICON,
  va as SHOW_BATTLE_ANIMATION,
  Jn as SHOW_CHOICES,
  zn as SHOW_CHOICES_ITEM,
  Qn as SHOW_MESSAGE,
  $n as SHOW_MESSAGE_BODY,
  $s as SHOW_PICTURE,
  ts as SHOW_SCROLLING_TEXT,
  es as SHOW_SCROLLING_TEXT_BODY,
  ss as SKIP,
  Vn as SPECIAL_EFFECT_ESCAPE,
  _n as SPECIAL_PARAM_EXR,
  An as SPECIAL_PARAM_FDR,
  bo as SPECIAL_PARAM_GRD,
  on as SPECIAL_PARAM_MCR,
  an as SPECIAL_PARAM_MDR,
  sn as SPECIAL_PARAM_PDR,
  en as SPECIAL_PARAM_PHA,
  tn as SPECIAL_PARAM_REC,
  nn as SPECIAL_PARAM_TCR,
  Zo as SPECIAL_PARAM_TGR,
  ot as SRC_ARMOR_TYPES,
  Fn as SRC_COLOR,
  tt as SRC_COMMON_EVNET,
  On as SRC_DATA_ACTOR,
  fn as SRC_DATA_ARMOR,
  Dn as SRC_DATA_CLASS,
  Cn as SRC_DATA_ENEMY,
  un as SRC_DATA_ITEMS,
  pn as SRC_DATA_MAP,
  X as SRC_DATA_SKILL,
  I as SRC_DATA_STATE,
  Nn as SRC_DATA_VARIABLE,
  ln as SRC_DATA_WEAPON,
  nt as SRC_ELEMENTS,
  Gn as SRC_EQUIP_TYPES,
  k as SRC_PARAMS_EXTRA,
  P as SRC_PARAMS_REGULAR,
  Y as SRC_PARAMS_SPECIAL,
  gn as SRC_SKILL_TYPES,
  Hn as SRC_SWITCHES,
  V as SRC_TRAIT_COLLAPS,
  W as SRC_TRAIT_PARTY_ABILITY,
  K as SRC_TRAIT_SPECIAL_FLAG,
  Un as SRC_TROOP,
  et as SRC_WEAPON_TYPES,
  ca as STOP_SE,
  Zs as TINT_PICTURE,
  ws as TINT_SCREEN,
  So as TRAIT_ACTION_PLUS,
  eo as TRAIT_ATTACK_ELEMENT,
  ao as TRAIT_ATTACK_SKILL,
  no as TRAIT_ATTACK_SPEED,
  oo as TRAIT_ATTACK_STATE,
  so as TRAIT_ATTACK_TIMES,
  Po as TRAIT_COLLAPSE_TYPE,
  $e as TRAIT_DEBUFF_RATE,
  Qe as TRAIT_ELEMENT_RATE,
  To as TRAIT_EQUIP_ARMOR_TYPE,
  io as TRAIT_EQUIP_LOCK,
  ro as TRAIT_EQUIP_SEAL,
  Ro as TRAIT_EQUIP_WEAPON_TYPE,
  Ze as TRAIT_PARAM,
  Io as TRAIT_PARTY_ABILITY,
  Eo as TRAIT_SKILL_ADD,
  co as TRAIT_SKILL_SEAL,
  Ao as TRAIT_SKILL_TYPE_ADD,
  _o as TRAIT_SKILL_TYPE_SEAL,
  mo as TRAIT_SLOT_TYPE,
  to as TRAIT_SPARAM,
  Lo as TRAIT_SPECIAL_FLAG,
  Je as TRAIT_STATE_RATE,
  ze as TRAIT_STATE_RESIST,
  be as TRAIT_XPARAM,
  Gs as TRANSFER_PLAYER,
  st as TraitDescriptor,
  Qs as WAIT,
  Tn as buildCollapsSource,
  Sn as buildExtraParamSource,
  rn as buildPartyAbilitySource,
  mn as buildRegularParamSource,
  Pn as buildSpecialFlagSource,
  Ln as buildSpecialParamSource,
  Jt as defineEffectAddBuff,
  bt as defineEffectAddDebuff,
  Qt as defineEffectAddState,
  ee as defineEffectCommonEvent,
  jt as defineEffectGainTp,
  qn as defineEffectGrow,
  Zt as defineEffectLearnSkill,
  wt as defineEffectRecoverHp,
  xt as defineEffectRecoverMp,
  zt as defineEffectRemoveBuff,
  te as defineEffectRemoveDebuff,
  $t as defineEffectRemoveState,
  cn as extraParamName,
  Q as foldCollapsOptions,
  z as foldExtraParam,
  $ as foldPartyAbilityOptions,
  J as foldRegularParam,
  b as foldSpecialFlag,
  Z as foldSpecialParams,
  Kn as formatItemEffectText,
  xe as getArmorTypes,
  Ke as getElementTypes,
  Xe as getEquipTypes,
  je as getParamNames,
  qe as getSkillTypes,
  We as getVariableNames,
  we as getWeaponTypes,
  Mn as isValid,
  dn as joinSourceKey,
  Ye as mergeDomainLabel,
  Ve as mergeNestedPrimitiveRecords,
  B as mergeWithDefaults,
  En as regularParamName,
  Xn as resolveItemEffectLabels,
  Bn as resolveTraitLabels,
  In as sanitizeKey,
  Rn as specialParamName,
  O as testUnknonwKey,
  S as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
