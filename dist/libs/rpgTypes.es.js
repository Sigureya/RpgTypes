const $t = "bgm", jt = "se", zt = "me", Jt = "bgs", Zt = "battlebacks1", bt = "battlebacks2", te = "characters", ee = "enemies", oe = "faces", ne = "parallaxes", Ae = "pictures", _e = "sv_actors", ae = "sv_enemies", Ee = "system", se = "tilesets", Re = "titles1", Te = "titles2", ce = "System.json", D = (t, e) => {
  const A = { ...t };
  for (const s in t) {
    const P = e[s];
    typeof P == "string" && (A[s] = P);
  }
  return A;
}, ie = (t, e) => ({
  domainName: e.domainName ?? t.domainName,
  options: D(t.options, e.options ?? {})
}), re = (t, e) => {
  const A = {};
  for (const s in t) {
    const P = t[s], W = e[s] ?? {};
    A[s] = D(
      P,
      W
    );
  }
  return A;
}, T = (t, e) => ({
  name: t,
  id: e
}), me = (t) => t.variables.map(T), Se = (t) => t.elements.map(T), Pe = (t) => t.equipTypes.map(T), Le = (t) => t.skillTypes.map(T), Ie = (t) => t.weaponTypes.map(T), Me = (t) => t.armorTypes.map(T), Oe = (t) => t.terms.params.map(T), c = "rmmz", N = "trait", U = "data", G = "system", Ce = 11, Ne = 12, de = 13, pe = 14, ue = 21, fe = 22, le = 23, De = 31, Ue = 32, Ge = 33, Fe = 34, He = 35, Be = 41, ye = 42, ge = 43, Ye = 44, ke = 51, ve = 52, Ve = 53, Ke = 54, We = 55, Xe = 61, he = 62, qe = 63, we = 64, xe = 0, Qe = 1, $e = 2, je = 3, ze = 0, Je = 1, Ze = 2, be = 3, to = 4, eo = 5, oo = 0, no = 1, Ao = 2, _o = 3, ao = 0, Eo = 1, so = 2, Ro = 3, To = 4, co = 5, io = 6, ro = 7, mo = 8, So = 9, Po = 0, Lo = 1, Io = 2, Mo = 3, Oo = 4, Co = 5, No = 6, po = 7, uo = 0, fo = 1, lo = 2, Do = 3, Uo = 4, Go = 5, Fo = 6, Ho = 7, Bo = 8, yo = 9, go = (t, e) => {
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
}, Yo = (t, e) => {
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
}, ko = (t, e) => {
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
}, X = (t, e) => [
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
], h = (t) => [
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
], q = (t) => [
  { id: 0, name: t.maxHp },
  { id: 1, name: t.maxMp },
  { id: 2, name: t.atk },
  { id: 3, name: t.def },
  { id: 4, name: t.matk },
  { id: 5, name: t.mdef },
  { id: 6, name: t.agi },
  { id: 7, name: t.luk }
], w = (t) => [
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
], x = (t) => [
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
], Q = (t) => [
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
], r = (t, e, A) => ({
  items: A(e.options),
  label: e.domainName,
  source: {
    author: c,
    module: N,
    sourceKey: t
  }
}), vo = (t, e) => r(
  y,
  t,
  (A) => X(A, e)
), Vo = (t) => r(g, t, h), Ko = (t) => r(S, t, q), Wo = (t) => r(H, t, w), Xo = (t) => r(B, t, x), ho = (t) => r(Y, t, Q), _ = "{name}", i = "{name} * {value}%", d = "{name} + {value}%", p = "{value}", o = {
  domainName: "特徴",
  options: {
    regularParam: {
      domainName: "基本能力値",
      format: i,
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
      format: d,
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
      format: i,
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
      format: i
    },
    debuffRate: {
      domainName: "弱体有効度",
      format: i
    },
    stateRate: {
      domainName: "ステート有効度",
      format: i
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
      format: d
    },
    attackSpeed: {
      domainName: "攻撃速度補正",
      format: p
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: p
    },
    actionPlus: {
      domainName: "行動追加",
      format: i
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
}, F = /^[a-zA-Z0-9]+$/, qo = (t) => F.test(t) ? t : void 0, O = (t) => typeof t == "string" ? F.test(t) : !1, wo = (t) => [t.author, t.module, t.sourceKey].join("."), xo = (t) => O(t.author) && O(t.module) && O(t.sourceKey), S = "params", H = "xparams", B = "sparams", y = "collaps", g = "partyAbiility", Y = "sflag", Qo = "actors", $o = "variables", jo = "map", zo = "enemy", L = "state", k = "skill", Jo = "items", Zo = "weapon", bo = "armor", tn = "class", $ = "common_event", en = "troop", on = "colors", j = "weaponTypes", z = "armorTypes", nn = "equipTypes", An = "switches", _n = "skillTypes", J = "elements", an = (t) => [
  Z(t.elementRate),
  b(t.debuffRate),
  tt(t.stateRate),
  et(t.stateResist),
  ot(t.regularParam),
  nt(t.extraParam),
  At(t.specialParam),
  _t(t.attackElement),
  at(t.attackState),
  Et(t.attackSpeed),
  st(t.attackTimes),
  Rt(t.attackSkill),
  Ct(t.skillTypeAdd),
  Nt(t.skillTypeSeal),
  It(t.skillAdd),
  Mt(t.skillSeal),
  mt(t.equipWeaponType),
  St(t.equipArmorType),
  Pt(t.equipLock),
  Lt(t.equipSeal),
  Ot(t.slotType),
  Tt(t.actionPlus),
  ct(t.specialFlag),
  it(t.collaps),
  rt(t.partyAbility)
], En = (t, e, A) => t.format.replaceAll("{value}", e.value.toString()).replaceAll("{name}", A), u = (t, e) => typeof e == "string" ? e : t, n = (t, e, A, s) => ({
  code: t,
  label: u(e.domainName, A.domainName),
  format: u(e.format, A.format),
  dataSource: s
}), v = () => ({
  module: G,
  author: c,
  sourceKey: J
}), V = (t) => ({
  module: U,
  author: c,
  sourceKey: t
}), R = (t) => ({
  author: c,
  module: N,
  sourceKey: t
}), K = (t) => ({
  author: c,
  module: G,
  sourceKey: t
}), Z = (t) => n(
  11,
  o.options.elementRate,
  t,
  v()
), b = (t) => n(
  12,
  o.options.debuffRate,
  t,
  R(S)
), tt = (t) => n(
  13,
  o.options.stateRate,
  t,
  R(S)
), et = (t) => n(
  14,
  o.options.stateResist,
  t,
  V(L)
), ot = (t) => n(
  21,
  o.options.regularParam,
  t,
  R(S)
), nt = (t) => n(
  22,
  o.options.extraParam,
  t,
  R(H)
), At = (t) => n(
  23,
  o.options.specialParam,
  t,
  R(B)
), _t = (t) => n(
  31,
  o.options.attackElement,
  t,
  v()
), at = (t) => n(
  32,
  o.options.attackState,
  t,
  R(L)
), Et = (t) => n(33, o.options.attackSpeed, t), st = (t) => n(34, o.options.attackTimes, t), Rt = (t) => n(
  35,
  o.options.attackSkill,
  t,
  V(k)
), Tt = (t) => n(61, o.options.actionPlus, t), ct = (t) => n(
  62,
  o.options.specialFlag,
  t,
  R(Y)
), it = (t) => n(
  63,
  o.options.collaps,
  t,
  R(y)
), rt = (t) => n(
  64,
  o.options.partyAbility,
  t,
  R(g)
), mt = (t) => n(
  51,
  o.options.equipWeaponType,
  t,
  K(j)
), St = (t) => n(
  52,
  o.options.equipArmorType,
  t,
  K(z)
), Pt = (t) => n(53, o.options.equipLock, t), Lt = (t) => n(54, o.options.equipSeal, t), It = (t) => n(43, o.options.skillAdd, t), Mt = (t) => n(44, o.options.skillSeal, t), Ot = (t) => n(55, o.options.slotType, t), Ct = (t) => n(
  41,
  o.options.skillTypeAdd,
  t
), Nt = (t) => n(
  42,
  o.options.skillTypeSeal,
  t
), dt = {
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
}, pt = {
  domainName: "防具",
  options: {
    armorTypeId: "防具タイプID",
    slotTypeId: "スロットタイプID"
  }
}, ut = {
  domainName: "職業",
  options: {
    params: "パラメータ",
    learnings: "習得スキル",
    expParams: "経験値パラメータ"
  }
}, ft = {
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
}, lt = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Dt = {
  domainName: "敵キャラ",
  options: {
    dropItems: "ドロップアイテム",
    battlerHue: "バトラーヒュー",
    battlerName: "バトラー名",
    gold: "ゴールド"
  }
}, Ut = {
  domainName: "ダメージ",
  options: {}
}, sn = 0, Rn = 1, Tn = 2, Gt = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Ft = "{name} + {value1}", f = "{name} {value1}%", C = "{value1}% + {value2}", l = "{name} {value1}ターン", m = "{name}", a = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: l
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: l
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: C
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: Ft
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: m
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
      format: m
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: m
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: f
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: m
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: f
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: m
    }
  }
}, cn = 0, Ht = 11, Bt = 12, yt = 13, gt = 21, Yt = 22, kt = 31, vt = 32, Vt = 33, Kt = 34, rn = 41, Wt = 42, Xt = 43, ht = 44, mn = (t, e, A) => t.format.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", A), I = () => ({
  author: c,
  module: N,
  sourceKey: S
}), M = (t) => ({
  author: c,
  module: U,
  sourceKey: t
}), E = (t, e, A, s) => ({
  codeId: t,
  label: A.domainName ?? e.domainName,
  format: A.format ?? e.format,
  description: A.desc ?? e.desc,
  dataSource: s
}), Sn = (t) => E(
  Ht,
  a.options.recoverHp,
  t
), Pn = (t) => E(
  Bt,
  a.options.recoverMp,
  t
), Ln = (t) => E(yt, a.options.gainTp, t), In = (t) => E(Wt, a.options.grow, t), Mn = (t) => E(
  gt,
  a.options.addState,
  t,
  M(L)
), On = (t) => E(
  Yt,
  a.options.removeState,
  t,
  M(L)
), Cn = (t) => E(
  kt,
  a.options.addBuff,
  t,
  I()
), Nn = (t) => E(
  Vt,
  a.options.removeBuff,
  t,
  I()
), dn = (t) => E(
  Xt,
  a.options.learnSkill,
  t,
  M(k)
), pn = (t) => E(
  vt,
  a.options.addBuff,
  t,
  I()
), un = (t) => E(
  Kt,
  a.options.removeDebuff,
  t,
  I()
), fn = (t) => E(
  ht,
  a.options.commonEvent,
  t,
  M($)
), qt = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, wt = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, xt = {
  actor: dt,
  class: ut,
  armor: pt,
  enemy: Dt,
  item: Gt,
  skill: qt,
  state: ft,
  weapon: lt,
  usableItem: wt
}, ln = 0, Dn = 101, Un = 401, Gn = 102, Fn = 402, Hn = 103, Bn = 104, yn = 105, gn = 405, Yn = 108, kn = 408, vn = 109, Vn = 111, Kn = 411, Wn = 112, Xn = 113, hn = 115, qn = 117, wn = 118, xn = 119, Qn = 121, $n = 122, jn = 123, zn = 124, Jn = 125, Zn = 126, bn = 127, tA = 128, eA = 129, oA = 132, nA = 133, AA = 134, _A = 135, aA = 136, EA = 137, sA = 138, RA = 139, TA = 140, cA = 201, iA = 202, rA = 203, mA = 204, SA = 205, PA = 206, LA = 211, IA = 212, MA = 213, OA = 214, CA = 216, NA = 217, dA = 221, pA = 222, uA = 223, fA = 224, lA = 225, DA = 230, UA = 231, GA = 232, FA = 233, HA = 234, BA = 235, yA = 236, gA = 241, YA = 242, kA = 243, vA = 244, VA = 245, KA = 246, WA = 249, XA = 250, hA = 251, qA = 261, wA = 282, xA = 283, QA = 284, $A = 285, jA = 301, zA = 302, JA = 605, ZA = 303, bA = 311, t_ = 312, e_ = 313, o_ = 314, n_ = 315, A_ = 320, __ = 321, a_ = 322, E_ = 323, s_ = 324, R_ = 325, T_ = 331, c_ = 332, i_ = 333, r_ = 334, m_ = 335, S_ = 336, P_ = 337, L_ = 339, I_ = 340, M_ = 351, O_ = 342, C_ = 352, N_ = 353, d_ = 354, p_ = 355, u_ = 655, f_ = 356, l_ = 357, D_ = 0, U_ = 1, G_ = 2, F_ = 3, H_ = 4, B_ = 5, y_ = 6, g_ = 7, Y_ = 8, k_ = 9, v_ = 10, V_ = 11, K_ = 12, W_ = 13, X_ = 14, h_ = 15, q_ = 16, w_ = 17, x_ = 18, Q_ = 19, $_ = 20, j_ = 21, z_ = 22, J_ = 23, Z_ = 24, b_ = 25, ta = 26, ea = 27, oa = 28, na = 29, Aa = 30, _a = 31, aa = 32, Ea = 33, sa = 34, Ra = 35, Ta = 36, ca = 37, ia = 38, ra = 39, ma = 40, Sa = 41, Pa = 42, La = 43, Ia = 44, Ma = 45, Oa = {
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
}, Ca = {
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
}, Qt = {
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
}, Na = {
  rpg: {
    damage: Ut,
    data: xt,
    traits: o,
    itemEffect: a
  },
  global: Qt
};
export {
  I_ as ABORT_BATTLE,
  c as AUTHOR_RMMZ,
  jA as BATTLE_PROCESSING,
  a_ as CHANGE_ACTOR_IMAGES,
  tA as CHANGE_ARMORS,
  xA as CHANGE_BATTLE_BACKGROUND,
  oA as CHANGE_BATTLE_BGM,
  __ as CHANGE_CLASS,
  RA as CHANGE_DEFEAT_ME,
  aA as CHANGE_ENCOUNTER,
  T_ as CHANGE_ENEMY_HP,
  c_ as CHANGE_ENEMY_MP,
  i_ as CHANGE_ENEMY_STATE,
  O_ as CHANGE_ENEMY_TP,
  n_ as CHANGE_EXP,
  EA as CHANGE_FORMATION_ACCESS,
  Jn as CHANGE_GOLD,
  bA as CHANGE_HP,
  Zn as CHANGE_ITEMS,
  _A as CHANGE_MENU_ACCESS,
  t_ as CHANGE_MP,
  A_ as CHANGE_NAME,
  s_ as CHANGE_NICKNAME,
  QA as CHANGE_PARALLAX,
  eA as CHANGE_PARTY_MEMBER,
  CA as CHANGE_PLAYER_FOLLOWERS,
  R_ as CHANGE_PROFILE,
  AA as CHANGE_SAVE_ACCESS,
  wA as CHANGE_TILESET,
  e_ as CHANGE_TP,
  LA as CHANGE_TRANSPARENCY,
  TA as CHANGE_VEHICLE_BGM,
  E_ as CHANGE_VEHICLE_IMAGE,
  nA as CHANGE_VICTORY_ME,
  bn as CHANGE_WEAPONS,
  sA as CHANGE_WINDOW_COLOR,
  Qe as COLLAPS_BOSS,
  $e as COLLAPS_INSTANT,
  je as COLLAPS_NONE,
  xe as COLLAPS_NORMAL,
  Yn as COMMENT,
  kn as COMMENT_BODY,
  qn as COMMON_EVENT,
  Vn as CONDITIONAL_BRANCH,
  Kn as CONDITIONAL_BRANCH_ELSE,
  jn as CONTROL_SELF_SWITCH,
  Qn as CONTROL_SWITCHES,
  zn as CONTROL_TIMER,
  $n as CONTROL_VARIABLES,
  Ut as DEFAULT_DAMAGE_LABELS,
  Qt as DEFAULT_GLOBAL_LABELS,
  Gt as DEFAULT_ITEM_LABELS,
  qt as DEFAULT_SKILL_LABELS,
  Oa as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  wt as DEFAULT_USABLE_ITEM_LABELS,
  kt as EFFECT_ADD_BUFF,
  vt as EFFECT_ADD_DEBUFF,
  gt as EFFECT_ADD_STATE,
  ht as EFFECT_COMMON_EVENT,
  yt as EFFECT_GAIN_TP,
  Wt as EFFECT_GROW,
  Xt as EFFECT_LEARN_SKILL,
  Ht as EFFECT_RECOVER_HP,
  Bt as EFFECT_RECOVER_MP,
  Vt as EFFECT_REMOVE_BUFF,
  Kt as EFFECT_REMOVE_DEBUFF,
  Yt as EFFECT_REMOVE_STATE,
  rn as EFFECT_SPECIAL,
  m_ as ENEMY_APPEAR,
  r_ as ENEMY_RECOVER_ALL,
  S_ as ENEMY_TRANSFORM,
  OA as ERASE_EVENT,
  BA as ERASE_PICTURE,
  hn as EXIT_EVENT_PROCESSING,
  Ro as EXTRA_PARAM_CEV,
  io as EXTRA_PARAM_CNT,
  so as EXTRA_PARAM_CRI,
  Eo as EXTRA_PARAM_EVA,
  ao as EXTRA_PARAM_HIT,
  ro as EXTRA_PARAM_HRG,
  To as EXTRA_PARAM_MEV,
  co as EXTRA_PARAM_MRF,
  mo as EXTRA_PARAM_MRG,
  So as EXTRA_PARAM_TRG,
  pA as FADEIN_SCREEN,
  YA as FADEOUT_BGM,
  KA as FADEOUT_BGS,
  dA as FADEOUT_SCREEN,
  ce as FILENAME_SYSTEM,
  oo as FLAG_ID_AUTO_BATTLE,
  no as FLAG_ID_GUARD,
  _o as FLAG_ID_PRESERVE_TP,
  Ao as FLAG_ID_SUBSTITUTE,
  fA as FLASH_SCREEN,
  $t as FOLDER_AUDIO_BGM,
  Jt as FOLDER_AUDIO_BGS,
  zt as FOLDER_AUDIO_ME,
  jt as FOLDER_AUDIO_SE,
  Zt as FOLDER_IMG_BATTLEBACK1,
  bt as FOLDER_IMG_BATTLEBACK2,
  te as FOLDER_IMG_CHACTERS,
  ee as FOLDER_IMG_ENEMIES,
  oe as FOLDER_IMG_FACES,
  ne as FOLDER_IMG_PARALLACES,
  Ae as FOLDER_IMG_PICTURES,
  _e as FOLDER_IMG_SV_ACTORS,
  ae as FOLDER_IMG_SV_ENEMIES,
  Ee as FOLDER_IMG_SYSTEM,
  se as FOLDER_IMG_TILESETS,
  Re as FOLDER_IMG_TITLES1,
  Te as FOLDER_IMG_TITLES2,
  L_ as FORCE_ACTION,
  N_ as GAME_OVER,
  NA as GATHER_FOLLOWERS,
  $A as GET_LOCATION_INFO,
  PA as GET_ONOFF_VEHICLE,
  sn as HITTYPE_CERTAIN,
  Tn as HITTYPE_MAGICAL,
  Rn as HITTYPE_PHYSICAL,
  Hn as INPUT_NUMBER,
  wn as LABEL,
  dt as LABELS_DATA_ACTOR,
  pt as LABELS_DATA_ARMOR,
  ut as LABELS_DATA_CLASS,
  Dt as LABELS_DATA_ENEMY,
  ft as LABELS_DATA_STATE,
  lt as LABELS_DATA_WEAPON,
  xn as LABEL_JUMP,
  Na as LABEL_REGISTRY_JP,
  xt as LABEL_SET_DATA,
  a as LABEL_SET_ITEM_EFFECT,
  o as LABEL_SET_TRAIT,
  Wn as LOOP,
  Xn as LOOP_BREAK,
  U as MODULE_DATA,
  G as MODULE_SYSTEM,
  N as MODULE_TRAIT,
  GA as MOVE_PICTURE,
  Ca as MockSystemLabelDataTypes,
  ZA as NAME_INPUT_PROCESSING,
  ln as NO_OPERATION,
  M_ as OPEN_MENU_SCREEN,
  C_ as OPEN_SAVE_SCREEN,
  Ze as PARTY_ABILITY_CANCEL_SURPRISE,
  eo as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  ze as PARTY_ABILITY_ENCOUNTER_HALF,
  Je as PARTY_ABILITY_ENCOUNTER_NONE,
  to as PARTY_ABILITY_GOLD_DOUBLE,
  be as PARTY_ABILITY_RAISE_PREEMPTIVE,
  gA as PLAY_BGM,
  VA as PLAY_BGS,
  WA as PLAY_ME,
  qA as PLAY_MOVIE,
  XA as PLAY_SE,
  f_ as PLUGIN_COMMAND_MV,
  l_ as PLUGIN_COMMAND_MZ,
  o_ as RECOVER_ALL,
  No as REGULAR_PARAM_AGI,
  Io as REGULAR_PARAM_ATK,
  Mo as REGULAR_PARAM_DEF,
  po as REGULAR_PARAM_LUK,
  Oo as REGULAR_PARAM_MATK,
  Po as REGULAR_PARAM_MAX_HP,
  Lo as REGULAR_PARAM_MAX_MP,
  Co as REGULAR_PARAM_MDEF,
  vA as RESUME_BGM,
  d_ as RETURN_TO_TITLE_SCREEN,
  FA as ROTATE_PICTURE,
  La as ROUTE_CHANGE_BLEND_MODE,
  Aa as ROUTE_CHANGE_FREQ,
  Sa as ROUTE_CHANGE_IMAGE,
  Pa as ROUTE_CHANGE_OPACITY,
  na as ROUTE_CHANGE_SPEED,
  Ta as ROUTE_DIR_FIX_OFF,
  Ra as ROUTE_DIR_FIX_ON,
  D_ as ROUTE_END,
  X_ as ROUTE_JUMP,
  V_ as ROUTE_MOVE_AWAY,
  W_ as ROUTE_MOVE_BACKWARD,
  U_ as ROUTE_MOVE_DOWN,
  K_ as ROUTE_MOVE_FORWARD,
  G_ as ROUTE_MOVE_LEFT,
  B_ as ROUTE_MOVE_LOWER_L,
  y_ as ROUTE_MOVE_LOWER_R,
  k_ as ROUTE_MOVE_RANDOM,
  F_ as ROUTE_MOVE_RIGHT,
  v_ as ROUTE_MOVE_TOWARD,
  H_ as ROUTE_MOVE_UP,
  g_ as ROUTE_MOVE_UPPER_L,
  Y_ as ROUTE_MOVE_UPPER_R,
  Ia as ROUTE_PLAY_SE,
  Ma as ROUTE_SCRIPT,
  sa as ROUTE_STEP_ANIME_OFF,
  Ea as ROUTE_STEP_ANIME_ON,
  oa as ROUTE_SWITCH_OFF,
  ea as ROUTE_SWITCH_ON,
  ia as ROUTE_THROUGH_OFF,
  ca as ROUTE_THROUGH_ON,
  ma as ROUTE_TRANSPARENT_OFF,
  ra as ROUTE_TRANSPARENT_ON,
  z_ as ROUTE_TURN_180D,
  j_ as ROUTE_TURN_90D_L,
  $_ as ROUTE_TURN_90D_R,
  J_ as ROUTE_TURN_90D_R_L,
  ta as ROUTE_TURN_AWAY,
  q_ as ROUTE_TURN_DOWN,
  w_ as ROUTE_TURN_LEFT,
  Z_ as ROUTE_TURN_RANDOM,
  x_ as ROUTE_TURN_RIGHT,
  b_ as ROUTE_TURN_TOWARD,
  Q_ as ROUTE_TURN_UP,
  h_ as ROUTE_WAIT,
  aa as ROUTE_WALK_ANIME_OFF,
  _a as ROUTE_WALK_ANIME_ON,
  kA as SAVE_BGM,
  p_ as SCRIPT_EVAL,
  u_ as SCRIPT_EVAL_BODY,
  mA as SCROLL_MAP,
  Bn as SELECT_ITEM,
  rA as SET_EVENT_LOCATION,
  SA as SET_MOVEMENT_ROUTE,
  iA as SET_VEHICLE_LOCATION,
  yA as SET_WEATHER_EFFECT,
  lA as SHAKE_SCREEN,
  zA as SHOP_PROCESSING,
  JA as SHOP_PROCESSING_BODY,
  IA as SHOW_ANIMATION,
  MA as SHOW_BALLOON_ICON,
  P_ as SHOW_BATTLE_ANIMATION,
  Gn as SHOW_CHOICES,
  Fn as SHOW_CHOICES_ITEM,
  Dn as SHOW_MESSAGE,
  Un as SHOW_MESSAGE_BODY,
  UA as SHOW_PICTURE,
  yn as SHOW_SCROLLING_TEXT,
  gn as SHOW_SCROLLING_TEXT_BODY,
  vn as SKIP,
  cn as SPECIAL_EFFECT_ESCAPE,
  yo as SPECIAL_PARAM_EXR,
  Bo as SPECIAL_PARAM_FDR,
  fo as SPECIAL_PARAM_GRD,
  Uo as SPECIAL_PARAM_MCR,
  Ho as SPECIAL_PARAM_MDR,
  Fo as SPECIAL_PARAM_PDR,
  Do as SPECIAL_PARAM_PHA,
  lo as SPECIAL_PARAM_REC,
  Go as SPECIAL_PARAM_TCR,
  uo as SPECIAL_PARAM_TGR,
  z as SRC_ARMOR_TYPES,
  on as SRC_COLOR,
  $ as SRC_COMMON_EVNET,
  Qo as SRC_DATA_ACTOR,
  bo as SRC_DATA_ARMOR,
  tn as SRC_DATA_CLASS,
  zo as SRC_DATA_ENEMY,
  Jo as SRC_DATA_ITEMS,
  jo as SRC_DATA_MAP,
  k as SRC_DATA_SKILL,
  L as SRC_DATA_STATE,
  $o as SRC_DATA_VARIABLE,
  Zo as SRC_DATA_WEAPON,
  J as SRC_ELEMENTS,
  nn as SRC_EQUIP_TYPES,
  H as SRC_PARAMS_EXTRA,
  S as SRC_PARAMS_REGULAR,
  B as SRC_PARAMS_SPECIAL,
  _n as SRC_SKILL_TYPES,
  An as SRC_SWITCHES,
  y as SRC_TRAIT_COLLAPS,
  g as SRC_TRAIT_PARTY_ABILITY,
  Y as SRC_TRAIT_SPECIAL_FLAG,
  en as SRC_TROOP,
  j as SRC_WEAPON_TYPES,
  hA as STOP_SE,
  HA as TINT_PICTURE,
  uA as TINT_SCREEN,
  Xe as TRAIT_ACTION_PLUS,
  De as TRAIT_ATTACK_ELEMENT,
  He as TRAIT_ATTACK_SKILL,
  Ge as TRAIT_ATTACK_SPEED,
  Ue as TRAIT_ATTACK_STATE,
  Fe as TRAIT_ATTACK_TIMES,
  qe as TRAIT_COLLAPSE_TYPE,
  Ne as TRAIT_DEBUFF_RATE,
  Ce as TRAIT_ELEMENT_RATE,
  ve as TRAIT_EQUIP_ARMOR_TYPE,
  Ve as TRAIT_EQUIP_LOCK,
  Ke as TRAIT_EQUIP_SEAL,
  ke as TRAIT_EQUIP_WEAPON_TYPE,
  ue as TRAIT_PARAM,
  we as TRAIT_PARTY_ABILITY,
  ge as TRAIT_SKILL_ADD,
  Ye as TRAIT_SKILL_SEAL,
  Be as TRAIT_SKILL_TYPE_ADD,
  ye as TRAIT_SKILL_TYPE_SEAL,
  We as TRAIT_SLOT_TYPE,
  le as TRAIT_SPARAM,
  he as TRAIT_SPECIAL_FLAG,
  de as TRAIT_STATE_RATE,
  pe as TRAIT_STATE_RESIST,
  fe as TRAIT_XPARAM,
  cA as TRANSFER_PLAYER,
  DA as WAIT,
  vo as buildCollapsSource,
  Wo as buildExtraParamSource,
  Vo as buildPartyAbilitySource,
  Ko as buildRegularParamSource,
  ho as buildSpecialFlagSource,
  Xo as buildSpecialParamSource,
  E as defineEffect,
  Cn as defineEffectAddBuff,
  pn as defineEffectAddDebuff,
  Mn as defineEffectAddState,
  fn as defineEffectCommonEvent,
  Ln as defineEffectGainTp,
  In as defineEffectGrow,
  dn as defineEffectLearnSkill,
  Sn as defineEffectRecoverHp,
  Pn as defineEffectRecoverMp,
  Nn as defineEffectRemoveBuff,
  un as defineEffectRemoveDebuff,
  On as defineEffectRemoveState,
  Tt as defineTraitActionPlus,
  _t as defineTraitAttackElement,
  Rt as defineTraitAttackSkill,
  Et as defineTraitAttackSpeed,
  at as defineTraitAttackState,
  st as defineTraitAttackTimes,
  it as defineTraitCollapseType,
  b as defineTraitDebuffRate,
  Z as defineTraitElementRate,
  St as defineTraitEquipArmorType,
  Pt as defineTraitEquipLock,
  Lt as defineTraitEquipSeal,
  mt as defineTraitEquipWeaponType,
  nt as defineTraitExtraParam,
  rt as defineTraitPartyAbility,
  ot as defineTraitRegularParam,
  It as defineTraitSkillAdd,
  Mt as defineTraitSkillSeal,
  Ct as defineTraitSkillTypeAdd,
  Nt as defineTraitSkillTypeSeal,
  Ot as defineTraitSlotType,
  ct as defineTraitSpecialFlag,
  At as defineTraitSpecialParam,
  tt as defineTraitStateRate,
  et as defineTraitStateResist,
  Yo as extraParamName,
  X as foldCollapsOptions,
  w as foldExtraParam,
  h as foldPartyAbilityOptions,
  q as foldRegularParam,
  Q as foldSpecialFlag,
  x as foldSpecialParams,
  mn as formatItemEffectText,
  En as formatTraitText,
  Me as getArmorTypes,
  Se as getElementTypes,
  Pe as getEquipTypes,
  Oe as getParamNames,
  Le as getSkillTypes,
  me as getVariableNames,
  Ie as getWeaponTypes,
  xo as isValid,
  wo as joinSourceKey,
  ie as mergeDomainLabel,
  re as mergeNestedPrimitiveRecords,
  D as mergeWithDefaults,
  go as regularParamName,
  an as resolveTraitLabels,
  qo as sanitizeKey,
  ko as specialParamName,
  O as testUnknonwKey,
  r as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
