const Vt = "bgm", Wt = "se", Xt = "me", Kt = "bgs", ht = "battlebacks1", qt = "battlebacks2", wt = "characters", xt = "enemies", Qt = "faces", $t = "parallaxes", jt = "pictures", zt = "sv_actors", Jt = "sv_enemies", Zt = "system", bt = "tilesets", te = "titles1", ee = "titles2", oe = "System.json", D = (t, e) => {
  const A = { ...t };
  for (const s in t) {
    const P = e[s];
    typeof P == "string" && (A[s] = P);
  }
  return A;
}, ne = (t, e) => ({
  domainName: e.domainName ?? t.domainName,
  options: D(t.options, e.options ?? {})
}), Ae = (t, e) => {
  const A = {};
  for (const s in t) {
    const P = t[s], X = e[s] ?? {};
    A[s] = D(
      P,
      X
    );
  }
  return A;
}, T = (t, e) => ({
  name: t,
  id: e
}), _e = (t) => t.variables.map(T), ae = (t) => t.elements.map(T), Ee = (t) => t.equipTypes.map(T), se = (t) => t.skillTypes.map(T), Re = (t) => t.weaponTypes.map(T), Te = (t) => t.armorTypes.map(T), ce = (t) => t.terms.params.map(T), c = "rmmz", C = "trait", U = "data", G = "system", ie = 11, re = 12, me = 13, Se = 14, Pe = 21, Le = 22, Ie = 23, Me = 31, Oe = 32, de = 33, Ce = 34, Ne = 35, pe = 41, ue = 42, fe = 43, le = 44, De = 51, Ue = 52, Ge = 53, Fe = 54, He = 55, Be = 61, ge = 62, ye = 63, Ye = 64, ke = 0, ve = 1, Ve = 2, We = 3, Xe = 0, Ke = 1, he = 2, qe = 3, we = 4, xe = 5, Qe = 0, $e = 1, je = 2, ze = 3, Je = 0, Ze = 1, be = 2, to = 3, eo = 4, oo = 5, no = 6, Ao = 7, _o = 8, ao = 9, Eo = 0, so = 1, Ro = 2, To = 3, co = 4, io = 5, ro = 6, mo = 7, So = 0, Po = 1, Lo = 2, Io = 3, Mo = 4, Oo = 5, Co = 6, No = 7, po = 8, uo = 9, fo = (t, e) => {
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
}, lo = (t, e) => {
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
}, Do = (t, e) => {
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
}, K = (t, e) => [
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
    module: C,
    kind: t
  }
}), Uo = (t, e) => r(
  g,
  t,
  (A) => K(A, e)
), Go = (t) => r(y, t, h), Fo = (t) => r(S, t, q), Ho = (t) => r(H, t, w), Bo = (t) => r(B, t, x), go = (t) => r(Y, t, Q), _ = "{name}", i = "{name} * {value}%", N = "{name} + {value}%", p = "{value}", o = {
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
      format: N
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
}, F = /^[a-zA-Z0-9]+$/, yo = (t) => F.test(t) ? t : void 0, O = (t) => typeof t == "string" ? F.test(t) : !1, Yo = (t) => [t.author, t.module, t.kind].join("."), ko = (t) => O(t.author) && O(t.module) && O(t.kind), S = "params", H = "xparams", B = "sparams", g = "collaps", y = "partyAbiility", Y = "sflag", vo = "actors", Vo = "variables", Wo = "map", Xo = "enemy", L = "state", k = "skill", Ko = "items", ho = "weapon", qo = "armor", wo = "class", $ = "common_event", xo = "troop", Qo = "colors", j = "weaponTypes", z = "armorTypes", $o = "equipTypes", jo = "switches", zo = "skillTypes", J = "elements", Jo = (t) => [
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
  dt(t.skillTypeAdd),
  Ct(t.skillTypeSeal),
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
], Zo = (t, e, A) => t.format.replaceAll("{value}", e.value.toString()).replaceAll("{name}", A), u = (t, e) => typeof e == "string" ? e : t, n = (t, e, A, s) => ({
  code: t,
  label: u(e.domainName, A.domainName),
  format: u(e.format, A.format),
  dataSource: s
}), v = () => ({
  module: G,
  author: c,
  kind: J
}), V = (t) => ({
  module: U,
  author: c,
  kind: t
}), R = (t) => ({
  author: c,
  module: C,
  kind: t
}), W = (t) => ({
  author: c,
  module: G,
  kind: t
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
  R(g)
), rt = (t) => n(
  64,
  o.options.partyAbility,
  t,
  R(y)
), mt = (t) => n(
  51,
  o.options.equipWeaponType,
  t,
  W(j)
), St = (t) => n(
  52,
  o.options.equipArmorType,
  t,
  W(z)
), Pt = (t) => n(53, o.options.equipLock, t), Lt = (t) => n(54, o.options.equipSeal, t), It = (t) => n(43, o.options.skillAdd, t), Mt = (t) => n(44, o.options.skillSeal, t), Ot = (t) => n(55, o.options.slotType, t), dt = (t) => n(
  41,
  o.options.skillTypeAdd,
  t
), Ct = (t) => n(
  42,
  o.options.skillTypeSeal,
  t
), bo = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Nt = {
  domainName: "ダメージ",
  options: {}
}, tn = 0, en = 1, on = 2, nn = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, pt = "{name} + {value1}", f = "{name} {value1}%", d = "{value1}% + {value2}", l = "{name} {value1}ターン", m = "{name}", a = {
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
      format: d
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: pt
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: m
    },
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: d
    },
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: d
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
}, An = 0, ut = 11, ft = 12, lt = 13, Dt = 21, Ut = 22, Gt = 31, Ft = 32, Ht = 33, Bt = 34, _n = 41, gt = 42, yt = 43, Yt = 44, an = (t, e, A) => t.format.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", A), I = () => ({
  author: c,
  module: C,
  kind: S
}), M = (t) => ({
  author: c,
  module: U,
  kind: t
}), E = (t, e, A, s) => ({
  codeId: t,
  label: A.domainName ?? e.domainName,
  format: A.format ?? e.format,
  description: A.desc ?? e.desc,
  dataSource: s
}), En = (t) => E(
  ut,
  a.options.recoverHp,
  t
), sn = (t) => E(
  ft,
  a.options.recoverMp,
  t
), Rn = (t) => E(lt, a.options.gainTp, t), Tn = (t) => E(gt, a.options.grow, t), cn = (t) => E(
  Dt,
  a.options.addState,
  t,
  M(L)
), rn = (t) => E(
  Ut,
  a.options.removeState,
  t,
  M(L)
), mn = (t) => E(
  Gt,
  a.options.addBuff,
  t,
  I()
), Sn = (t) => E(
  Ht,
  a.options.removeBuff,
  t,
  I()
), Pn = (t) => E(
  yt,
  a.options.learnSkill,
  t,
  M(k)
), Ln = (t) => E(
  Ft,
  a.options.addBuff,
  t,
  I()
), In = (t) => E(
  Bt,
  a.options.removeDebuff,
  t,
  I()
), Mn = (t) => E(
  Yt,
  a.options.commonEvent,
  t,
  M($)
), On = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, dn = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, kt = {
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
}, Cn = 0, Nn = 101, pn = 401, un = 102, fn = 402, ln = 103, Dn = 104, Un = 105, Gn = 405, Fn = 108, Hn = 408, Bn = 109, gn = 111, yn = 411, Yn = 112, kn = 113, vn = 115, Vn = 117, Wn = 118, Xn = 119, Kn = 121, hn = 122, qn = 123, wn = 124, xn = 125, Qn = 126, $n = 127, jn = 128, zn = 129, Jn = 132, Zn = 133, bn = 134, tA = 135, eA = 136, oA = 137, nA = 138, AA = 139, _A = 140, aA = 201, EA = 202, sA = 203, RA = 204, TA = 205, cA = 206, iA = 211, rA = 212, mA = 213, SA = 214, PA = 216, LA = 217, IA = 221, MA = 222, OA = 223, dA = 224, CA = 225, NA = 230, pA = 231, uA = 232, fA = 233, lA = 234, DA = 235, UA = 236, GA = 241, FA = 242, HA = 243, BA = 244, gA = 245, yA = 246, YA = 249, kA = 250, vA = 251, VA = 261, WA = 282, XA = 283, KA = 284, hA = 285, qA = 301, wA = 302, xA = 605, QA = 303, $A = 311, jA = 312, zA = 313, JA = 314, ZA = 315, bA = 320, t_ = 321, e_ = 322, o_ = 323, n_ = 324, A_ = 325, __ = 331, a_ = 332, E_ = 333, s_ = 334, R_ = 335, T_ = 336, c_ = 337, i_ = 339, r_ = 340, m_ = 351, S_ = 342, P_ = 352, L_ = 353, I_ = 354, M_ = 355, O_ = 655, d_ = 356, C_ = 357, N_ = 0, p_ = 1, u_ = 2, f_ = 3, l_ = 4, D_ = 5, U_ = 6, G_ = 7, F_ = 8, H_ = 9, B_ = 10, g_ = 11, y_ = 12, Y_ = 13, k_ = 14, v_ = 15, V_ = 16, W_ = 17, X_ = 18, K_ = 19, h_ = 20, q_ = 21, w_ = 22, x_ = 23, Q_ = 24, $_ = 25, j_ = 26, z_ = 27, J_ = 28, Z_ = 29, b_ = 30, ta = 31, ea = 32, oa = 33, na = 34, Aa = 35, _a = 36, aa = 37, Ea = 38, sa = 39, Ra = 40, Ta = 41, ca = 42, ia = 43, ra = 44, ma = 45, Sa = {
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
}, Pa = {
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
}, vt = {
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
}, La = {
  rpg: {
    damage: Nt,
    data: kt,
    traits: o,
    itemEffect: a
  },
  global: vt
};
export {
  r_ as ABORT_BATTLE,
  c as AUTHOR_RMMZ,
  qA as BATTLE_PROCESSING,
  e_ as CHANGE_ACTOR_IMAGES,
  jn as CHANGE_ARMORS,
  XA as CHANGE_BATTLE_BACKGROUND,
  Jn as CHANGE_BATTLE_BGM,
  t_ as CHANGE_CLASS,
  AA as CHANGE_DEFEAT_ME,
  eA as CHANGE_ENCOUNTER,
  __ as CHANGE_ENEMY_HP,
  a_ as CHANGE_ENEMY_MP,
  E_ as CHANGE_ENEMY_STATE,
  S_ as CHANGE_ENEMY_TP,
  ZA as CHANGE_EXP,
  oA as CHANGE_FORMATION_ACCESS,
  xn as CHANGE_GOLD,
  $A as CHANGE_HP,
  Qn as CHANGE_ITEMS,
  tA as CHANGE_MENU_ACCESS,
  jA as CHANGE_MP,
  bA as CHANGE_NAME,
  n_ as CHANGE_NICKNAME,
  KA as CHANGE_PARALLAX,
  zn as CHANGE_PARTY_MEMBER,
  PA as CHANGE_PLAYER_FOLLOWERS,
  A_ as CHANGE_PROFILE,
  bn as CHANGE_SAVE_ACCESS,
  WA as CHANGE_TILESET,
  zA as CHANGE_TP,
  iA as CHANGE_TRANSPARENCY,
  _A as CHANGE_VEHICLE_BGM,
  o_ as CHANGE_VEHICLE_IMAGE,
  Zn as CHANGE_VICTORY_ME,
  $n as CHANGE_WEAPONS,
  nA as CHANGE_WINDOW_COLOR,
  ve as COLLAPS_BOSS,
  Ve as COLLAPS_INSTANT,
  We as COLLAPS_NONE,
  ke as COLLAPS_NORMAL,
  Fn as COMMENT,
  Hn as COMMENT_BODY,
  Vn as COMMON_EVENT,
  gn as CONDITIONAL_BRANCH,
  yn as CONDITIONAL_BRANCH_ELSE,
  qn as CONTROL_SELF_SWITCH,
  Kn as CONTROL_SWITCHES,
  wn as CONTROL_TIMER,
  hn as CONTROL_VARIABLES,
  Nt as DEFAULT_DAMAGE_LABELS,
  vt as DEFAULT_GLOBAL_LABELS,
  nn as DEFAULT_ITEM_LABELS,
  On as DEFAULT_SKILL_LABELS,
  Sa as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  dn as DEFAULT_USABLE_ITEM_LABELS,
  Gt as EFFECT_ADD_BUFF,
  Ft as EFFECT_ADD_DEBUFF,
  Dt as EFFECT_ADD_STATE,
  Yt as EFFECT_COMMON_EVENT,
  lt as EFFECT_GAIN_TP,
  gt as EFFECT_GROW,
  yt as EFFECT_LEARN_SKILL,
  ut as EFFECT_RECOVER_HP,
  ft as EFFECT_RECOVER_MP,
  Ht as EFFECT_REMOVE_BUFF,
  Bt as EFFECT_REMOVE_DEBUFF,
  Ut as EFFECT_REMOVE_STATE,
  _n as EFFECT_SPECIAL,
  R_ as ENEMY_APPEAR,
  s_ as ENEMY_RECOVER_ALL,
  T_ as ENEMY_TRANSFORM,
  SA as ERASE_EVENT,
  DA as ERASE_PICTURE,
  vn as EXIT_EVENT_PROCESSING,
  to as EXTRA_PARAM_CEV,
  no as EXTRA_PARAM_CNT,
  be as EXTRA_PARAM_CRI,
  Ze as EXTRA_PARAM_EVA,
  Je as EXTRA_PARAM_HIT,
  Ao as EXTRA_PARAM_HRG,
  eo as EXTRA_PARAM_MEV,
  oo as EXTRA_PARAM_MRF,
  _o as EXTRA_PARAM_MRG,
  ao as EXTRA_PARAM_TRG,
  MA as FADEIN_SCREEN,
  FA as FADEOUT_BGM,
  yA as FADEOUT_BGS,
  IA as FADEOUT_SCREEN,
  oe as FILENAME_SYSTEM,
  Qe as FLAG_ID_AUTO_BATTLE,
  $e as FLAG_ID_GUARD,
  ze as FLAG_ID_PRESERVE_TP,
  je as FLAG_ID_SUBSTITUTE,
  dA as FLASH_SCREEN,
  Vt as FOLDER_AUDIO_BGM,
  Kt as FOLDER_AUDIO_BGS,
  Xt as FOLDER_AUDIO_ME,
  Wt as FOLDER_AUDIO_SE,
  ht as FOLDER_IMG_BATTLEBACK1,
  qt as FOLDER_IMG_BATTLEBACK2,
  wt as FOLDER_IMG_CHACTERS,
  xt as FOLDER_IMG_ENEMIES,
  Qt as FOLDER_IMG_FACES,
  $t as FOLDER_IMG_PARALLACES,
  jt as FOLDER_IMG_PICTURES,
  zt as FOLDER_IMG_SV_ACTORS,
  Jt as FOLDER_IMG_SV_ENEMIES,
  Zt as FOLDER_IMG_SYSTEM,
  bt as FOLDER_IMG_TILESETS,
  te as FOLDER_IMG_TITLES1,
  ee as FOLDER_IMG_TITLES2,
  i_ as FORCE_ACTION,
  L_ as GAME_OVER,
  LA as GATHER_FOLLOWERS,
  hA as GET_LOCATION_INFO,
  cA as GET_ONOFF_VEHICLE,
  tn as HITTYPE_CERTAIN,
  on as HITTYPE_MAGICAL,
  en as HITTYPE_PHYSICAL,
  ln as INPUT_NUMBER,
  Wn as LABEL,
  bo as LABELS_DATA_WEAPON,
  Xn as LABEL_JUMP,
  La as LABEL_REGISTRY_JP,
  kt as LABEL_SET_DATA,
  a as LABEL_SET_ITEM_EFFECT,
  o as LABEL_SET_TRAIT,
  Yn as LOOP,
  kn as LOOP_BREAK,
  U as MODULE_DATA,
  G as MODULE_SYSTEM,
  C as MODULE_TRAIT,
  uA as MOVE_PICTURE,
  Pa as MockSystemLabelDataTypes,
  QA as NAME_INPUT_PROCESSING,
  Cn as NO_OPERATION,
  m_ as OPEN_MENU_SCREEN,
  P_ as OPEN_SAVE_SCREEN,
  he as PARTY_ABILITY_CANCEL_SURPRISE,
  xe as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Xe as PARTY_ABILITY_ENCOUNTER_HALF,
  Ke as PARTY_ABILITY_ENCOUNTER_NONE,
  we as PARTY_ABILITY_GOLD_DOUBLE,
  qe as PARTY_ABILITY_RAISE_PREEMPTIVE,
  GA as PLAY_BGM,
  gA as PLAY_BGS,
  YA as PLAY_ME,
  VA as PLAY_MOVIE,
  kA as PLAY_SE,
  d_ as PLUGIN_COMMAND_MV,
  C_ as PLUGIN_COMMAND_MZ,
  JA as RECOVER_ALL,
  ro as REGULAR_PARAM_AGI,
  Ro as REGULAR_PARAM_ATK,
  To as REGULAR_PARAM_DEF,
  mo as REGULAR_PARAM_LUK,
  co as REGULAR_PARAM_MATK,
  Eo as REGULAR_PARAM_MAX_HP,
  so as REGULAR_PARAM_MAX_MP,
  io as REGULAR_PARAM_MDEF,
  BA as RESUME_BGM,
  I_ as RETURN_TO_TITLE_SCREEN,
  fA as ROTATE_PICTURE,
  ia as ROUTE_CHANGE_BLEND_MODE,
  b_ as ROUTE_CHANGE_FREQ,
  Ta as ROUTE_CHANGE_IMAGE,
  ca as ROUTE_CHANGE_OPACITY,
  Z_ as ROUTE_CHANGE_SPEED,
  _a as ROUTE_DIR_FIX_OFF,
  Aa as ROUTE_DIR_FIX_ON,
  N_ as ROUTE_END,
  k_ as ROUTE_JUMP,
  g_ as ROUTE_MOVE_AWAY,
  Y_ as ROUTE_MOVE_BACKWARD,
  p_ as ROUTE_MOVE_DOWN,
  y_ as ROUTE_MOVE_FORWARD,
  u_ as ROUTE_MOVE_LEFT,
  D_ as ROUTE_MOVE_LOWER_L,
  U_ as ROUTE_MOVE_LOWER_R,
  H_ as ROUTE_MOVE_RANDOM,
  f_ as ROUTE_MOVE_RIGHT,
  B_ as ROUTE_MOVE_TOWARD,
  l_ as ROUTE_MOVE_UP,
  G_ as ROUTE_MOVE_UPPER_L,
  F_ as ROUTE_MOVE_UPPER_R,
  ra as ROUTE_PLAY_SE,
  ma as ROUTE_SCRIPT,
  na as ROUTE_STEP_ANIME_OFF,
  oa as ROUTE_STEP_ANIME_ON,
  J_ as ROUTE_SWITCH_OFF,
  z_ as ROUTE_SWITCH_ON,
  Ea as ROUTE_THROUGH_OFF,
  aa as ROUTE_THROUGH_ON,
  Ra as ROUTE_TRANSPARENT_OFF,
  sa as ROUTE_TRANSPARENT_ON,
  w_ as ROUTE_TURN_180D,
  q_ as ROUTE_TURN_90D_L,
  h_ as ROUTE_TURN_90D_R,
  x_ as ROUTE_TURN_90D_R_L,
  j_ as ROUTE_TURN_AWAY,
  V_ as ROUTE_TURN_DOWN,
  W_ as ROUTE_TURN_LEFT,
  Q_ as ROUTE_TURN_RANDOM,
  X_ as ROUTE_TURN_RIGHT,
  $_ as ROUTE_TURN_TOWARD,
  K_ as ROUTE_TURN_UP,
  v_ as ROUTE_WAIT,
  ea as ROUTE_WALK_ANIME_OFF,
  ta as ROUTE_WALK_ANIME_ON,
  HA as SAVE_BGM,
  M_ as SCRIPT_EVAL,
  O_ as SCRIPT_EVAL_BODY,
  RA as SCROLL_MAP,
  Dn as SELECT_ITEM,
  sA as SET_EVENT_LOCATION,
  TA as SET_MOVEMENT_ROUTE,
  EA as SET_VEHICLE_LOCATION,
  UA as SET_WEATHER_EFFECT,
  CA as SHAKE_SCREEN,
  wA as SHOP_PROCESSING,
  xA as SHOP_PROCESSING_BODY,
  rA as SHOW_ANIMATION,
  mA as SHOW_BALLOON_ICON,
  c_ as SHOW_BATTLE_ANIMATION,
  un as SHOW_CHOICES,
  fn as SHOW_CHOICES_ITEM,
  Nn as SHOW_MESSAGE,
  pn as SHOW_MESSAGE_BODY,
  pA as SHOW_PICTURE,
  Un as SHOW_SCROLLING_TEXT,
  Gn as SHOW_SCROLLING_TEXT_BODY,
  Bn as SKIP,
  An as SPECIAL_EFFECT_ESCAPE,
  uo as SPECIAL_PARAM_EXR,
  po as SPECIAL_PARAM_FDR,
  Po as SPECIAL_PARAM_GRD,
  Mo as SPECIAL_PARAM_MCR,
  No as SPECIAL_PARAM_MDR,
  Co as SPECIAL_PARAM_PDR,
  Io as SPECIAL_PARAM_PHA,
  Lo as SPECIAL_PARAM_REC,
  Oo as SPECIAL_PARAM_TCR,
  So as SPECIAL_PARAM_TGR,
  z as SRC_ARMOR_TYPES,
  Qo as SRC_COLOR,
  $ as SRC_COMMON_EVNET,
  vo as SRC_DATA_ACTOR,
  qo as SRC_DATA_ARMOR,
  wo as SRC_DATA_CLASS,
  Xo as SRC_DATA_ENEMY,
  Ko as SRC_DATA_ITEMS,
  Wo as SRC_DATA_MAP,
  k as SRC_DATA_SKILL,
  L as SRC_DATA_STATE,
  Vo as SRC_DATA_VARIABLE,
  ho as SRC_DATA_WEAPON,
  J as SRC_ELEMENTS,
  $o as SRC_EQUIP_TYPES,
  H as SRC_PARAMS_EXTRA,
  S as SRC_PARAMS_REGULAR,
  B as SRC_PARAMS_SPECIAL,
  zo as SRC_SKILL_TYPES,
  jo as SRC_SWITCHES,
  g as SRC_TRAIT_COLLAPS,
  y as SRC_TRAIT_PARTY_ABILITY,
  Y as SRC_TRAIT_SPECIAL_FLAG,
  xo as SRC_TROOP,
  j as SRC_WEAPON_TYPES,
  vA as STOP_SE,
  lA as TINT_PICTURE,
  OA as TINT_SCREEN,
  Be as TRAIT_ACTION_PLUS,
  Me as TRAIT_ATTACK_ELEMENT,
  Ne as TRAIT_ATTACK_SKILL,
  de as TRAIT_ATTACK_SPEED,
  Oe as TRAIT_ATTACK_STATE,
  Ce as TRAIT_ATTACK_TIMES,
  ye as TRAIT_COLLAPSE_TYPE,
  re as TRAIT_DEBUFF_RATE,
  ie as TRAIT_ELEMENT_RATE,
  Ue as TRAIT_EQUIP_ARMOR_TYPE,
  Ge as TRAIT_EQUIP_LOCK,
  Fe as TRAIT_EQUIP_SEAL,
  De as TRAIT_EQUIP_WEAPON_TYPE,
  Pe as TRAIT_PARAM,
  Ye as TRAIT_PARTY_ABILITY,
  fe as TRAIT_SKILL_ADD,
  le as TRAIT_SKILL_SEAL,
  pe as TRAIT_SKILL_TYPE_ADD,
  ue as TRAIT_SKILL_TYPE_SEAL,
  He as TRAIT_SLOT_TYPE,
  Ie as TRAIT_SPARAM,
  ge as TRAIT_SPECIAL_FLAG,
  me as TRAIT_STATE_RATE,
  Se as TRAIT_STATE_RESIST,
  Le as TRAIT_XPARAM,
  aA as TRANSFER_PLAYER,
  NA as WAIT,
  Uo as buildCollapsSource,
  Ho as buildExtraParamSource,
  Go as buildPartyAbilitySource,
  Fo as buildRegularParamSource,
  go as buildSpecialFlagSource,
  Bo as buildSpecialParamSource,
  E as defineEffect,
  mn as defineEffectAddBuff,
  Ln as defineEffectAddDebuff,
  cn as defineEffectAddState,
  Mn as defineEffectCommonEvent,
  Rn as defineEffectGainTp,
  Tn as defineEffectGrow,
  Pn as defineEffectLearnSkill,
  En as defineEffectRecoverHp,
  sn as defineEffectRecoverMp,
  Sn as defineEffectRemoveBuff,
  In as defineEffectRemoveDebuff,
  rn as defineEffectRemoveState,
  lo as extraParamName,
  K as foldCollapsOptions,
  w as foldExtraParam,
  h as foldPartyAbilityOptions,
  q as foldRegularParam,
  Q as foldSpecialFlag,
  x as foldSpecialParams,
  an as formatItemEffectText,
  Zo as formatTraitText,
  Te as getArmorTypes,
  ae as getElementTypes,
  Ee as getEquipTypes,
  ce as getParamNames,
  se as getSkillTypes,
  _e as getVariableNames,
  Re as getWeaponTypes,
  ko as isValid,
  Yo as joinSourceKey,
  ne as mergeDomainLabel,
  Ae as mergeNestedPrimitiveRecords,
  D as mergeWithDefaults,
  fo as regularParamName,
  Jo as resolveTraitLabels,
  yo as sanitizeKey,
  Do as specialParamName,
  O as testUnknonwKey,
  r as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
