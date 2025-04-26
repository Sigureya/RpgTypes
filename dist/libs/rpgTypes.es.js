const Xt = "bgm", Kt = "se", qt = "me", wt = "bgs", xt = "battlebacks1", Qt = "battlebacks2", $t = "characters", jt = "enemies", zt = "faces", Jt = "parallaxes", Zt = "pictures", bt = "sv_actors", te = "sv_enemies", ee = "system", oe = "tilesets", ne = "titles1", ae = "titles2", Ae = "System.json", G = (t, e) => {
  const o = { ...t };
  for (const A in t) {
    const R = e[A];
    typeof R == "string" && (o[A] = R);
  }
  return o;
}, _e = (t, e) => ({
  domainName: e.domainName ?? t.domainName,
  options: G(t.options, e.options ?? {})
}), se = (t, e) => {
  const o = {};
  for (const A in t) {
    const R = t[A], M = e[A] ?? {};
    o[A] = G(
      R,
      M
    );
  }
  return o;
}, T = (t, e) => ({
  name: t,
  id: e
}), Ee = (t) => t.variables.map(T), ce = (t) => t.elements.map(T), Re = (t) => t.equipTypes.map(T), Te = (t) => t.skillTypes.map(T), ie = (t) => t.weaponTypes.map(T), re = (t) => t.armorTypes.map(T), me = (t) => t.terms.params.map(T), i = "rmmz", N = "trait", H = "data", g = "system", Se = 11, Pe = 12, Le = 13, Ie = 14, de = 21, Me = 22, Oe = 23, Ce = 31, Ne = 32, pe = 33, ue = 34, le = 35, fe = 41, De = 42, Ue = 43, Fe = 44, Ge = 51, He = 52, ge = 53, Be = 54, ye = 55, Ye = 61, ke = 62, ve = 63, he = 64, Ve = 0, We = 1, Xe = 2, Ke = 3, qe = 0, we = 1, xe = 2, Qe = 3, $e = 4, je = 5, ze = 0, Je = 1, Ze = 2, be = 3, to = 0, eo = 1, oo = 2, no = 3, ao = 4, Ao = 5, _o = 6, so = 7, Eo = 8, co = 9, Ro = 0, To = 1, io = 2, ro = 3, mo = 4, So = 5, Po = 6, Lo = 7, Io = 0, Mo = 1, Oo = 2, Co = 3, No = 4, po = 5, uo = 6, lo = 7, fo = 8, Do = 9, Uo = (t, e) => {
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
}, Fo = (t, e) => {
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
}, Go = (t, e) => {
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
}, q = (t, e) => [
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
], w = (t) => [
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
], x = (t) => [
  { id: 0, name: t.maxHp },
  { id: 1, name: t.maxMp },
  { id: 2, name: t.atk },
  { id: 3, name: t.def },
  { id: 4, name: t.matk },
  { id: 5, name: t.mdef },
  { id: 6, name: t.agi },
  { id: 7, name: t.luk }
], Q = (t) => [
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
], $ = (t) => [
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
], j = (t) => [
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
], m = (t, e, o) => ({
  items: o(e.options),
  label: e.domainName,
  source: {
    author: i,
    module: N,
    kind: t
  }
}), Ho = (t, e) => m(
  k,
  t,
  (o) => q(o, e)
), go = (t) => m(v, t, w), Bo = (t) => m(P, t, x), yo = (t) => m(y, t, Q), Yo = (t) => m(Y, t, $), ko = (t) => m(h, t, j), _ = "{name}", r = "{name} * {value}%", p = "{name} + {value}%", u = "{value}", n = {
  domainName: "特徴",
  options: {
    regularParam: {
      domainName: "基本能力値",
      format: r,
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
      format: p,
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
      format: r,
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
      format: _,
      options: {
        autoBattle: "自動戦闘",
        guard: "防御",
        substitute: "身代わり",
        preventEscape: "逃走防止"
      }
    },
    collaps: {
      domainName: "消滅エフェクト",
      format: _,
      options: {
        bossCollaps: "ボス崩壊",
        instantCollaps: "即時崩壊",
        noneCollaps: "崩壊なし"
      }
    },
    partyAbility: {
      domainName: "パーティ能力",
      format: _,
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
      format: r
    },
    debuffRate: {
      domainName: "弱体有効度",
      format: r
    },
    stateRate: {
      domainName: "ステート有効度",
      format: r
    },
    stateResist: {
      domainName: "ステート無効",
      format: _
    },
    attackElement: {
      domainName: "攻撃属性",
      format: _
    },
    attackState: {
      domainName: "攻撃ステート",
      format: p
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
      format: r
    },
    attackSkill: {
      domainName: "攻撃スキル",
      format: _
    },
    equipWeaponType: {
      domainName: "装備武器タイプ",
      format: _
    },
    equipArmorType: {
      domainName: "装備防具タイプ",
      format: _
    },
    equipLock: {
      domainName: "装備固定",
      format: _
    },
    equipSeal: {
      domainName: "装備封印",
      format: _
    },
    slotType: {
      domainName: "スロットタイプ",
      format: _
    },
    skillAdd: {
      domainName: "スキル追加",
      format: _
    },
    skillSeal: {
      domainName: "スキルタイプ封印",
      format: _
    },
    skillTypeAdd: {
      domainName: "スキルタイプ追加",
      format: _
    },
    skillTypeSeal: {
      domainName: "スキルタイプ封印",
      format: _
    }
  }
}, B = /^[a-zA-Z0-9]+$/, vo = (t) => B.test(t) ? t : void 0, O = (t) => typeof t == "string" ? B.test(t) : !1, ho = (t) => [t.author, t.module, t.kind].join("."), Vo = (t) => O(t.author) && O(t.module) && O(t.kind), P = "params", y = "xparams", Y = "sparams", k = "collaps", v = "partyAbiility", h = "sflag", Wo = "actors", Xo = "variables", Ko = "map", qo = "enemy", L = "state", V = "skill", wo = "items", xo = "weapon", Qo = "armor", $o = "class", z = "common_event", jo = "troop", zo = "colors", J = "weaponTypes", Z = "armorTypes", Jo = "equipTypes", Zo = "switches", bo = "skillTypes", b = "elements", l = "{value}", f = "{name}";
class tt {
  constructor(e, o, A, R) {
    this.code = e, this.label = o, this.format = A, this.dataSource = R;
  }
  match(e) {
    return this.code === e.code;
  }
  testTraitCode(e) {
    if (!this.match(e))
      throw new Error(
        `${this.label} Trait code mismatch.  this.code:${this.code} trait.code:${e.code}`
      );
  }
  formatText(e, o) {
    this.testTraitCode(e);
    const A = this.format.replaceAll(
      l,
      e.value.toString()
    );
    return this.dataSource ? A.replaceAll(
      f,
      o(this.dataSource, e.dataId)
    ) : A;
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
    ].map((A) => A[1]).filter((A) => !e.includes(A));
  }
  isFormatValidForDataSource() {
    return !(this.dataSource && !this.requiresName());
  }
  diagnose() {
    const e = !this.isFormatValidForDataSource(), o = this.requiresName() && !this.dataSource, A = this.invalidPlaceHolder();
    return {
      code: this.code,
      label: this.label,
      format: this.format,
      hasError: e || o || A.length > 0,
      missingDataSourceError: e,
      sourceMismatchError: o,
      invalidPlaceHolders: A
    };
  }
}
const tn = (t) => [
  et(t.elementRate),
  ot(t.debuffRate),
  nt(t.stateRate),
  at(t.stateResist),
  At(t.regularParam),
  _t(t.extraParam),
  st(t.specialParam),
  Et(t.attackElement),
  ct(t.attackState),
  Rt(t.attackSpeed),
  Tt(t.attackTimes),
  it(t.attackSkill),
  pt(t.skillTypeAdd),
  ut(t.skillTypeSeal),
  Ot(t.skillAdd),
  Ct(t.skillSeal),
  Lt(t.equipWeaponType),
  It(t.equipArmorType),
  dt(t.equipLock),
  Mt(t.equipSeal),
  Nt(t.slotType),
  rt(t.actionPlus),
  mt(t.specialFlag),
  St(t.collaps),
  Pt(t.partyAbility)
], en = (t, e, o) => t.format.replaceAll("{value}", e.value.toString()).replaceAll("{name}", o), D = (t, e) => typeof e == "string" ? e : t, a = (t, e, o, A) => {
  const R = D(e.domainName, o.domainName), M = D(e.format, o.format);
  return new tt(t, R, M, A);
}, W = () => ({
  module: g,
  author: i,
  kind: b
}), X = (t) => ({
  module: H,
  author: i,
  kind: t
}), c = (t) => ({
  author: i,
  module: N,
  kind: t
}), K = (t) => ({
  author: i,
  module: g,
  kind: t
}), et = (t) => a(
  11,
  n.options.elementRate,
  t,
  W()
), ot = (t) => a(
  12,
  n.options.debuffRate,
  t,
  c(P)
), nt = (t) => a(
  13,
  n.options.stateRate,
  t,
  c(P)
), at = (t) => a(
  14,
  n.options.stateResist,
  t,
  X(L)
), At = (t) => a(
  21,
  n.options.regularParam,
  t,
  c(P)
), _t = (t) => a(
  22,
  n.options.extraParam,
  t,
  c(y)
), st = (t) => a(
  23,
  n.options.specialParam,
  t,
  c(Y)
), Et = (t) => a(
  31,
  n.options.attackElement,
  t,
  W()
), ct = (t) => a(
  32,
  n.options.attackState,
  t,
  c(L)
), Rt = (t) => a(33, n.options.attackSpeed, t), Tt = (t) => a(34, n.options.attackTimes, t), it = (t) => a(
  35,
  n.options.attackSkill,
  t,
  X(V)
), rt = (t) => a(61, n.options.actionPlus, t), mt = (t) => a(
  62,
  n.options.specialFlag,
  t,
  c(h)
), St = (t) => a(
  63,
  n.options.collaps,
  t,
  c(k)
), Pt = (t) => a(
  64,
  n.options.partyAbility,
  t,
  c(v)
), Lt = (t) => a(
  51,
  n.options.equipWeaponType,
  t,
  K(J)
), It = (t) => a(
  52,
  n.options.equipArmorType,
  t,
  K(Z)
), dt = (t) => a(53, n.options.equipLock, t), Mt = (t) => a(54, n.options.equipSeal, t), Ot = (t) => a(43, n.options.skillAdd, t), Ct = (t) => a(44, n.options.skillSeal, t), Nt = (t) => a(55, n.options.slotType, t), pt = (t) => a(
  41,
  n.options.skillTypeAdd,
  t
), ut = (t) => a(
  42,
  n.options.skillTypeSeal,
  t
), on = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, lt = {
  domainName: "ダメージ",
  options: {}
}, nn = 0, an = 1, An = 2, _n = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, ft = "{name} + {value1}", U = "{name} {value1}%", C = "{value1}% + {value2}", F = "{name} {value1}ターン", S = "{name}", s = {
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
      format: C
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: ft
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: S
    },
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: C
    },
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: C
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
      format: U
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: S
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: U
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: S
    }
  }
}, sn = 0, Dt = 11, Ut = 12, Ft = 13, Gt = 21, Ht = 22, gt = 31, Bt = 32, yt = 33, Yt = 34, En = 41, kt = 42, vt = 43, ht = 44, cn = (t, e, o) => t.format.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", o), I = () => ({
  author: i,
  module: N,
  kind: P
}), d = (t) => ({
  author: i,
  module: H,
  kind: t
}), E = (t, e, o, A) => ({
  codeId: t,
  label: o.domainName ?? e.domainName,
  format: o.format ?? e.format,
  description: o.desc ?? e.desc,
  dataSource: A
}), Rn = (t) => E(
  Dt,
  s.options.recoverHp,
  t
), Tn = (t) => E(
  Ut,
  s.options.recoverMp,
  t
), rn = (t) => E(Ft, s.options.gainTp, t), mn = (t) => E(kt, s.options.grow, t), Sn = (t) => E(
  Gt,
  s.options.addState,
  t,
  d(L)
), Pn = (t) => E(
  Ht,
  s.options.removeState,
  t,
  d(L)
), Ln = (t) => E(
  gt,
  s.options.addBuff,
  t,
  I()
), In = (t) => E(
  yt,
  s.options.removeBuff,
  t,
  I()
), dn = (t) => E(
  vt,
  s.options.learnSkill,
  t,
  d(V)
), Mn = (t) => E(
  Bt,
  s.options.addBuff,
  t,
  I()
), On = (t) => E(
  Yt,
  s.options.removeDebuff,
  t,
  I()
), Cn = (t) => E(
  ht,
  s.options.commonEvent,
  t,
  d(z)
), Nn = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, pn = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, Vt = {
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
}, un = 0, ln = 101, fn = 401, Dn = 102, Un = 402, Fn = 103, Gn = 104, Hn = 105, gn = 405, Bn = 108, yn = 408, Yn = 109, kn = 111, vn = 411, hn = 112, Vn = 113, Wn = 115, Xn = 117, Kn = 118, qn = 119, wn = 121, xn = 122, Qn = 123, $n = 124, jn = 125, zn = 126, Jn = 127, Zn = 128, bn = 129, ta = 132, ea = 133, oa = 134, na = 135, aa = 136, Aa = 137, _a = 138, sa = 139, Ea = 140, ca = 201, Ra = 202, Ta = 203, ia = 204, ra = 205, ma = 206, Sa = 211, Pa = 212, La = 213, Ia = 214, da = 216, Ma = 217, Oa = 221, Ca = 222, Na = 223, pa = 224, ua = 225, la = 230, fa = 231, Da = 232, Ua = 233, Fa = 234, Ga = 235, Ha = 236, ga = 241, Ba = 242, ya = 243, Ya = 244, ka = 245, va = 246, ha = 249, Va = 250, Wa = 251, Xa = 261, Ka = 282, qa = 283, wa = 284, xa = 285, Qa = 301, $a = 302, ja = 605, za = 303, Ja = 311, Za = 312, ba = 313, tA = 314, eA = 315, oA = 320, nA = 321, aA = 322, AA = 323, _A = 324, sA = 325, EA = 331, cA = 332, RA = 333, TA = 334, iA = 335, rA = 336, mA = 337, SA = 339, PA = 340, LA = 351, IA = 342, dA = 352, MA = 353, OA = 354, CA = 355, NA = 655, pA = 356, uA = 357, lA = 0, fA = 1, DA = 2, UA = 3, FA = 4, GA = 5, HA = 6, gA = 7, BA = 8, yA = 9, YA = 10, kA = 11, vA = 12, hA = 13, VA = 14, WA = 15, XA = 16, KA = 17, qA = 18, wA = 19, xA = 20, QA = 21, $A = 22, jA = 23, zA = 24, JA = 25, ZA = 26, bA = 27, t_ = 28, e_ = 29, o_ = 30, n_ = 31, a_ = 32, A_ = 33, __ = 34, s_ = 35, E_ = 36, c_ = 37, R_ = 38, T_ = 39, i_ = 40, r_ = 41, m_ = 42, S_ = 43, P_ = 44, L_ = 45, I_ = {
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
}, d_ = {
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
}, Wt = {
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
}, M_ = {
  rpg: {
    damage: lt,
    data: Vt,
    traits: n,
    itemEffect: s
  },
  global: Wt
};
export {
  PA as ABORT_BATTLE,
  i as AUTHOR_RMMZ,
  Qa as BATTLE_PROCESSING,
  aA as CHANGE_ACTOR_IMAGES,
  Zn as CHANGE_ARMORS,
  qa as CHANGE_BATTLE_BACKGROUND,
  ta as CHANGE_BATTLE_BGM,
  nA as CHANGE_CLASS,
  sa as CHANGE_DEFEAT_ME,
  aa as CHANGE_ENCOUNTER,
  EA as CHANGE_ENEMY_HP,
  cA as CHANGE_ENEMY_MP,
  RA as CHANGE_ENEMY_STATE,
  IA as CHANGE_ENEMY_TP,
  eA as CHANGE_EXP,
  Aa as CHANGE_FORMATION_ACCESS,
  jn as CHANGE_GOLD,
  Ja as CHANGE_HP,
  zn as CHANGE_ITEMS,
  na as CHANGE_MENU_ACCESS,
  Za as CHANGE_MP,
  oA as CHANGE_NAME,
  _A as CHANGE_NICKNAME,
  wa as CHANGE_PARALLAX,
  bn as CHANGE_PARTY_MEMBER,
  da as CHANGE_PLAYER_FOLLOWERS,
  sA as CHANGE_PROFILE,
  oa as CHANGE_SAVE_ACCESS,
  Ka as CHANGE_TILESET,
  ba as CHANGE_TP,
  Sa as CHANGE_TRANSPARENCY,
  Ea as CHANGE_VEHICLE_BGM,
  AA as CHANGE_VEHICLE_IMAGE,
  ea as CHANGE_VICTORY_ME,
  Jn as CHANGE_WEAPONS,
  _a as CHANGE_WINDOW_COLOR,
  We as COLLAPS_BOSS,
  Xe as COLLAPS_INSTANT,
  Ke as COLLAPS_NONE,
  Ve as COLLAPS_NORMAL,
  Bn as COMMENT,
  yn as COMMENT_BODY,
  Xn as COMMON_EVENT,
  kn as CONDITIONAL_BRANCH,
  vn as CONDITIONAL_BRANCH_ELSE,
  Qn as CONTROL_SELF_SWITCH,
  wn as CONTROL_SWITCHES,
  $n as CONTROL_TIMER,
  xn as CONTROL_VARIABLES,
  lt as DEFAULT_DAMAGE_LABELS,
  Wt as DEFAULT_GLOBAL_LABELS,
  _n as DEFAULT_ITEM_LABELS,
  Nn as DEFAULT_SKILL_LABELS,
  I_ as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  pn as DEFAULT_USABLE_ITEM_LABELS,
  gt as EFFECT_ADD_BUFF,
  Bt as EFFECT_ADD_DEBUFF,
  Gt as EFFECT_ADD_STATE,
  ht as EFFECT_COMMON_EVENT,
  Ft as EFFECT_GAIN_TP,
  kt as EFFECT_GROW,
  vt as EFFECT_LEARN_SKILL,
  Dt as EFFECT_RECOVER_HP,
  Ut as EFFECT_RECOVER_MP,
  yt as EFFECT_REMOVE_BUFF,
  Yt as EFFECT_REMOVE_DEBUFF,
  Ht as EFFECT_REMOVE_STATE,
  En as EFFECT_SPECIAL,
  iA as ENEMY_APPEAR,
  TA as ENEMY_RECOVER_ALL,
  rA as ENEMY_TRANSFORM,
  Ia as ERASE_EVENT,
  Ga as ERASE_PICTURE,
  Wn as EXIT_EVENT_PROCESSING,
  no as EXTRA_PARAM_CEV,
  _o as EXTRA_PARAM_CNT,
  oo as EXTRA_PARAM_CRI,
  eo as EXTRA_PARAM_EVA,
  to as EXTRA_PARAM_HIT,
  so as EXTRA_PARAM_HRG,
  ao as EXTRA_PARAM_MEV,
  Ao as EXTRA_PARAM_MRF,
  Eo as EXTRA_PARAM_MRG,
  co as EXTRA_PARAM_TRG,
  Ca as FADEIN_SCREEN,
  Ba as FADEOUT_BGM,
  va as FADEOUT_BGS,
  Oa as FADEOUT_SCREEN,
  Ae as FILENAME_SYSTEM,
  ze as FLAG_ID_AUTO_BATTLE,
  Je as FLAG_ID_GUARD,
  be as FLAG_ID_PRESERVE_TP,
  Ze as FLAG_ID_SUBSTITUTE,
  pa as FLASH_SCREEN,
  Xt as FOLDER_AUDIO_BGM,
  wt as FOLDER_AUDIO_BGS,
  qt as FOLDER_AUDIO_ME,
  Kt as FOLDER_AUDIO_SE,
  xt as FOLDER_IMG_BATTLEBACK1,
  Qt as FOLDER_IMG_BATTLEBACK2,
  $t as FOLDER_IMG_CHACTERS,
  jt as FOLDER_IMG_ENEMIES,
  zt as FOLDER_IMG_FACES,
  Jt as FOLDER_IMG_PARALLACES,
  Zt as FOLDER_IMG_PICTURES,
  bt as FOLDER_IMG_SV_ACTORS,
  te as FOLDER_IMG_SV_ENEMIES,
  ee as FOLDER_IMG_SYSTEM,
  oe as FOLDER_IMG_TILESETS,
  ne as FOLDER_IMG_TITLES1,
  ae as FOLDER_IMG_TITLES2,
  SA as FORCE_ACTION,
  MA as GAME_OVER,
  Ma as GATHER_FOLLOWERS,
  xa as GET_LOCATION_INFO,
  ma as GET_ONOFF_VEHICLE,
  nn as HITTYPE_CERTAIN,
  An as HITTYPE_MAGICAL,
  an as HITTYPE_PHYSICAL,
  Fn as INPUT_NUMBER,
  Kn as LABEL,
  on as LABELS_DATA_WEAPON,
  qn as LABEL_JUMP,
  M_ as LABEL_REGISTRY_JP,
  Vt as LABEL_SET_DATA,
  s as LABEL_SET_ITEM_EFFECT,
  n as LABEL_SET_TRAIT,
  hn as LOOP,
  Vn as LOOP_BREAK,
  H as MODULE_DATA,
  g as MODULE_SYSTEM,
  N as MODULE_TRAIT,
  Da as MOVE_PICTURE,
  d_ as MockSystemLabelDataTypes,
  za as NAME_INPUT_PROCESSING,
  un as NO_OPERATION,
  LA as OPEN_MENU_SCREEN,
  dA as OPEN_SAVE_SCREEN,
  xe as PARTY_ABILITY_CANCEL_SURPRISE,
  je as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  qe as PARTY_ABILITY_ENCOUNTER_HALF,
  we as PARTY_ABILITY_ENCOUNTER_NONE,
  $e as PARTY_ABILITY_GOLD_DOUBLE,
  Qe as PARTY_ABILITY_RAISE_PREEMPTIVE,
  ga as PLAY_BGM,
  ka as PLAY_BGS,
  ha as PLAY_ME,
  Xa as PLAY_MOVIE,
  Va as PLAY_SE,
  pA as PLUGIN_COMMAND_MV,
  uA as PLUGIN_COMMAND_MZ,
  tA as RECOVER_ALL,
  Po as REGULAR_PARAM_AGI,
  io as REGULAR_PARAM_ATK,
  ro as REGULAR_PARAM_DEF,
  Lo as REGULAR_PARAM_LUK,
  mo as REGULAR_PARAM_MATK,
  Ro as REGULAR_PARAM_MAX_HP,
  To as REGULAR_PARAM_MAX_MP,
  So as REGULAR_PARAM_MDEF,
  Ya as RESUME_BGM,
  OA as RETURN_TO_TITLE_SCREEN,
  Ua as ROTATE_PICTURE,
  S_ as ROUTE_CHANGE_BLEND_MODE,
  o_ as ROUTE_CHANGE_FREQ,
  r_ as ROUTE_CHANGE_IMAGE,
  m_ as ROUTE_CHANGE_OPACITY,
  e_ as ROUTE_CHANGE_SPEED,
  E_ as ROUTE_DIR_FIX_OFF,
  s_ as ROUTE_DIR_FIX_ON,
  lA as ROUTE_END,
  VA as ROUTE_JUMP,
  kA as ROUTE_MOVE_AWAY,
  hA as ROUTE_MOVE_BACKWARD,
  fA as ROUTE_MOVE_DOWN,
  vA as ROUTE_MOVE_FORWARD,
  DA as ROUTE_MOVE_LEFT,
  GA as ROUTE_MOVE_LOWER_L,
  HA as ROUTE_MOVE_LOWER_R,
  yA as ROUTE_MOVE_RANDOM,
  UA as ROUTE_MOVE_RIGHT,
  YA as ROUTE_MOVE_TOWARD,
  FA as ROUTE_MOVE_UP,
  gA as ROUTE_MOVE_UPPER_L,
  BA as ROUTE_MOVE_UPPER_R,
  P_ as ROUTE_PLAY_SE,
  L_ as ROUTE_SCRIPT,
  __ as ROUTE_STEP_ANIME_OFF,
  A_ as ROUTE_STEP_ANIME_ON,
  t_ as ROUTE_SWITCH_OFF,
  bA as ROUTE_SWITCH_ON,
  R_ as ROUTE_THROUGH_OFF,
  c_ as ROUTE_THROUGH_ON,
  i_ as ROUTE_TRANSPARENT_OFF,
  T_ as ROUTE_TRANSPARENT_ON,
  $A as ROUTE_TURN_180D,
  QA as ROUTE_TURN_90D_L,
  xA as ROUTE_TURN_90D_R,
  jA as ROUTE_TURN_90D_R_L,
  ZA as ROUTE_TURN_AWAY,
  XA as ROUTE_TURN_DOWN,
  KA as ROUTE_TURN_LEFT,
  zA as ROUTE_TURN_RANDOM,
  qA as ROUTE_TURN_RIGHT,
  JA as ROUTE_TURN_TOWARD,
  wA as ROUTE_TURN_UP,
  WA as ROUTE_WAIT,
  a_ as ROUTE_WALK_ANIME_OFF,
  n_ as ROUTE_WALK_ANIME_ON,
  ya as SAVE_BGM,
  CA as SCRIPT_EVAL,
  NA as SCRIPT_EVAL_BODY,
  ia as SCROLL_MAP,
  Gn as SELECT_ITEM,
  Ta as SET_EVENT_LOCATION,
  ra as SET_MOVEMENT_ROUTE,
  Ra as SET_VEHICLE_LOCATION,
  Ha as SET_WEATHER_EFFECT,
  ua as SHAKE_SCREEN,
  $a as SHOP_PROCESSING,
  ja as SHOP_PROCESSING_BODY,
  Pa as SHOW_ANIMATION,
  La as SHOW_BALLOON_ICON,
  mA as SHOW_BATTLE_ANIMATION,
  Dn as SHOW_CHOICES,
  Un as SHOW_CHOICES_ITEM,
  ln as SHOW_MESSAGE,
  fn as SHOW_MESSAGE_BODY,
  fa as SHOW_PICTURE,
  Hn as SHOW_SCROLLING_TEXT,
  gn as SHOW_SCROLLING_TEXT_BODY,
  Yn as SKIP,
  sn as SPECIAL_EFFECT_ESCAPE,
  Do as SPECIAL_PARAM_EXR,
  fo as SPECIAL_PARAM_FDR,
  Mo as SPECIAL_PARAM_GRD,
  No as SPECIAL_PARAM_MCR,
  lo as SPECIAL_PARAM_MDR,
  uo as SPECIAL_PARAM_PDR,
  Co as SPECIAL_PARAM_PHA,
  Oo as SPECIAL_PARAM_REC,
  po as SPECIAL_PARAM_TCR,
  Io as SPECIAL_PARAM_TGR,
  Z as SRC_ARMOR_TYPES,
  zo as SRC_COLOR,
  z as SRC_COMMON_EVNET,
  Wo as SRC_DATA_ACTOR,
  Qo as SRC_DATA_ARMOR,
  $o as SRC_DATA_CLASS,
  qo as SRC_DATA_ENEMY,
  wo as SRC_DATA_ITEMS,
  Ko as SRC_DATA_MAP,
  V as SRC_DATA_SKILL,
  L as SRC_DATA_STATE,
  Xo as SRC_DATA_VARIABLE,
  xo as SRC_DATA_WEAPON,
  b as SRC_ELEMENTS,
  Jo as SRC_EQUIP_TYPES,
  y as SRC_PARAMS_EXTRA,
  P as SRC_PARAMS_REGULAR,
  Y as SRC_PARAMS_SPECIAL,
  bo as SRC_SKILL_TYPES,
  Zo as SRC_SWITCHES,
  k as SRC_TRAIT_COLLAPS,
  v as SRC_TRAIT_PARTY_ABILITY,
  h as SRC_TRAIT_SPECIAL_FLAG,
  jo as SRC_TROOP,
  J as SRC_WEAPON_TYPES,
  Wa as STOP_SE,
  Fa as TINT_PICTURE,
  Na as TINT_SCREEN,
  Ye as TRAIT_ACTION_PLUS,
  Ce as TRAIT_ATTACK_ELEMENT,
  le as TRAIT_ATTACK_SKILL,
  pe as TRAIT_ATTACK_SPEED,
  Ne as TRAIT_ATTACK_STATE,
  ue as TRAIT_ATTACK_TIMES,
  ve as TRAIT_COLLAPSE_TYPE,
  Pe as TRAIT_DEBUFF_RATE,
  Se as TRAIT_ELEMENT_RATE,
  He as TRAIT_EQUIP_ARMOR_TYPE,
  ge as TRAIT_EQUIP_LOCK,
  Be as TRAIT_EQUIP_SEAL,
  Ge as TRAIT_EQUIP_WEAPON_TYPE,
  de as TRAIT_PARAM,
  he as TRAIT_PARTY_ABILITY,
  Ue as TRAIT_SKILL_ADD,
  Fe as TRAIT_SKILL_SEAL,
  fe as TRAIT_SKILL_TYPE_ADD,
  De as TRAIT_SKILL_TYPE_SEAL,
  ye as TRAIT_SLOT_TYPE,
  Oe as TRAIT_SPARAM,
  ke as TRAIT_SPECIAL_FLAG,
  Le as TRAIT_STATE_RATE,
  Ie as TRAIT_STATE_RESIST,
  Me as TRAIT_XPARAM,
  ca as TRANSFER_PLAYER,
  tt as TraitLabelDescriptor,
  la as WAIT,
  Ho as buildCollapsSource,
  yo as buildExtraParamSource,
  go as buildPartyAbilitySource,
  Bo as buildRegularParamSource,
  ko as buildSpecialFlagSource,
  Yo as buildSpecialParamSource,
  E as defineEffect,
  Ln as defineEffectAddBuff,
  Mn as defineEffectAddDebuff,
  Sn as defineEffectAddState,
  Cn as defineEffectCommonEvent,
  rn as defineEffectGainTp,
  mn as defineEffectGrow,
  dn as defineEffectLearnSkill,
  Rn as defineEffectRecoverHp,
  Tn as defineEffectRecoverMp,
  In as defineEffectRemoveBuff,
  On as defineEffectRemoveDebuff,
  Pn as defineEffectRemoveState,
  Fo as extraParamName,
  q as foldCollapsOptions,
  Q as foldExtraParam,
  w as foldPartyAbilityOptions,
  x as foldRegularParam,
  j as foldSpecialFlag,
  $ as foldSpecialParams,
  cn as formatItemEffectText,
  en as formatTraitText,
  re as getArmorTypes,
  ce as getElementTypes,
  Re as getEquipTypes,
  me as getParamNames,
  Te as getSkillTypes,
  Ee as getVariableNames,
  ie as getWeaponTypes,
  Vo as isValid,
  ho as joinSourceKey,
  _e as mergeDomainLabel,
  se as mergeNestedPrimitiveRecords,
  G as mergeWithDefaults,
  Uo as regularParamName,
  tn as resolveTraitLabels,
  vo as sanitizeKey,
  Go as specialParamName,
  O as testUnknonwKey,
  m as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
