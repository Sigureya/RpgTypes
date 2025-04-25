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
], u = (t, e) => typeof e == "string" ? e : t, n = (t, e, A, s) => ({
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
), Zo = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, Nt = {
  domainName: "ダメージ",
  options: {}
}, bo = 0, tn = 1, en = 2, on = {
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
}, nn = 0, ut = 11, ft = 12, lt = 13, Dt = 21, Ut = 22, Gt = 31, Ft = 32, Ht = 33, Bt = 34, An = 41, gt = 42, yt = 43, Yt = 44, _n = (t, e, A) => t.format.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", A), I = () => ({
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
}), an = (t) => E(
  ut,
  a.options.recoverHp,
  t
), En = (t) => E(
  ft,
  a.options.recoverMp,
  t
), sn = (t) => E(lt, a.options.gainTp, t), Rn = (t) => E(gt, a.options.grow, t), Tn = (t) => E(
  Dt,
  a.options.addState,
  t,
  M(L)
), cn = (t) => E(
  Ut,
  a.options.removeState,
  t,
  M(L)
), rn = (t) => E(
  Gt,
  a.options.addBuff,
  t,
  I()
), mn = (t) => E(
  Ht,
  a.options.removeBuff,
  t,
  I()
), Sn = (t) => E(
  yt,
  a.options.learnSkill,
  t,
  M(k)
), Pn = (t) => E(
  Ft,
  a.options.addBuff,
  t,
  I()
), Ln = (t) => E(
  Bt,
  a.options.removeDebuff,
  t,
  I()
), In = (t) => E(
  Yt,
  a.options.commonEvent,
  t,
  M($)
), Mn = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, On = {
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
}, dn = 0, Cn = 101, Nn = 401, pn = 102, un = 402, fn = 103, ln = 104, Dn = 105, Un = 405, Gn = 108, Fn = 408, Hn = 109, Bn = 111, gn = 411, yn = 112, Yn = 113, kn = 115, vn = 117, Vn = 118, Wn = 119, Xn = 121, Kn = 122, hn = 123, qn = 124, wn = 125, xn = 126, Qn = 127, $n = 128, jn = 129, zn = 132, Jn = 133, Zn = 134, bn = 135, tA = 136, eA = 137, oA = 138, nA = 139, AA = 140, _A = 201, aA = 202, EA = 203, sA = 204, RA = 205, TA = 206, cA = 211, iA = 212, rA = 213, mA = 214, SA = 216, PA = 217, LA = 221, IA = 222, MA = 223, OA = 224, dA = 225, CA = 230, NA = 231, pA = 232, uA = 233, fA = 234, lA = 235, DA = 236, UA = 241, GA = 242, FA = 243, HA = 244, BA = 245, gA = 246, yA = 249, YA = 250, kA = 251, vA = 261, VA = 282, WA = 283, XA = 284, KA = 285, hA = 301, qA = 302, wA = 605, xA = 303, QA = 311, $A = 312, jA = 313, zA = 314, JA = 315, ZA = 320, bA = 321, t_ = 322, e_ = 323, o_ = 324, n_ = 325, A_ = 331, __ = 332, a_ = 333, E_ = 334, s_ = 335, R_ = 336, T_ = 337, c_ = 339, i_ = 340, r_ = 351, m_ = 342, S_ = 352, P_ = 353, L_ = 354, I_ = 355, M_ = 655, O_ = 356, d_ = 357, C_ = 0, N_ = 1, p_ = 2, u_ = 3, f_ = 4, l_ = 5, D_ = 6, U_ = 7, G_ = 8, F_ = 9, H_ = 10, B_ = 11, g_ = 12, y_ = 13, Y_ = 14, k_ = 15, v_ = 16, V_ = 17, W_ = 18, X_ = 19, K_ = 20, h_ = 21, q_ = 22, w_ = 23, x_ = 24, Q_ = 25, $_ = 26, j_ = 27, z_ = 28, J_ = 29, Z_ = 30, b_ = 31, ta = 32, ea = 33, oa = 34, na = 35, Aa = 36, _a = 37, aa = 38, Ea = 39, sa = 40, Ra = 41, Ta = 42, ca = 43, ia = 44, ra = 45, ma = {
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
}, Sa = {
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
}, Pa = {
  rpg: {
    damage: Nt,
    data: kt,
    traits: o,
    itemEffect: a
  },
  global: vt
};
export {
  i_ as ABORT_BATTLE,
  c as AUTHOR_RMMZ,
  hA as BATTLE_PROCESSING,
  t_ as CHANGE_ACTOR_IMAGES,
  $n as CHANGE_ARMORS,
  WA as CHANGE_BATTLE_BACKGROUND,
  zn as CHANGE_BATTLE_BGM,
  bA as CHANGE_CLASS,
  nA as CHANGE_DEFEAT_ME,
  tA as CHANGE_ENCOUNTER,
  A_ as CHANGE_ENEMY_HP,
  __ as CHANGE_ENEMY_MP,
  a_ as CHANGE_ENEMY_STATE,
  m_ as CHANGE_ENEMY_TP,
  JA as CHANGE_EXP,
  eA as CHANGE_FORMATION_ACCESS,
  wn as CHANGE_GOLD,
  QA as CHANGE_HP,
  xn as CHANGE_ITEMS,
  bn as CHANGE_MENU_ACCESS,
  $A as CHANGE_MP,
  ZA as CHANGE_NAME,
  o_ as CHANGE_NICKNAME,
  XA as CHANGE_PARALLAX,
  jn as CHANGE_PARTY_MEMBER,
  SA as CHANGE_PLAYER_FOLLOWERS,
  n_ as CHANGE_PROFILE,
  Zn as CHANGE_SAVE_ACCESS,
  VA as CHANGE_TILESET,
  jA as CHANGE_TP,
  cA as CHANGE_TRANSPARENCY,
  AA as CHANGE_VEHICLE_BGM,
  e_ as CHANGE_VEHICLE_IMAGE,
  Jn as CHANGE_VICTORY_ME,
  Qn as CHANGE_WEAPONS,
  oA as CHANGE_WINDOW_COLOR,
  ve as COLLAPS_BOSS,
  Ve as COLLAPS_INSTANT,
  We as COLLAPS_NONE,
  ke as COLLAPS_NORMAL,
  Gn as COMMENT,
  Fn as COMMENT_BODY,
  vn as COMMON_EVENT,
  Bn as CONDITIONAL_BRANCH,
  gn as CONDITIONAL_BRANCH_ELSE,
  hn as CONTROL_SELF_SWITCH,
  Xn as CONTROL_SWITCHES,
  qn as CONTROL_TIMER,
  Kn as CONTROL_VARIABLES,
  Nt as DEFAULT_DAMAGE_LABELS,
  vt as DEFAULT_GLOBAL_LABELS,
  on as DEFAULT_ITEM_LABELS,
  Mn as DEFAULT_SKILL_LABELS,
  ma as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  On as DEFAULT_USABLE_ITEM_LABELS,
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
  An as EFFECT_SPECIAL,
  s_ as ENEMY_APPEAR,
  E_ as ENEMY_RECOVER_ALL,
  R_ as ENEMY_TRANSFORM,
  mA as ERASE_EVENT,
  lA as ERASE_PICTURE,
  kn as EXIT_EVENT_PROCESSING,
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
  IA as FADEIN_SCREEN,
  GA as FADEOUT_BGM,
  gA as FADEOUT_BGS,
  LA as FADEOUT_SCREEN,
  oe as FILENAME_SYSTEM,
  Qe as FLAG_ID_AUTO_BATTLE,
  $e as FLAG_ID_GUARD,
  ze as FLAG_ID_PRESERVE_TP,
  je as FLAG_ID_SUBSTITUTE,
  OA as FLASH_SCREEN,
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
  c_ as FORCE_ACTION,
  P_ as GAME_OVER,
  PA as GATHER_FOLLOWERS,
  KA as GET_LOCATION_INFO,
  TA as GET_ONOFF_VEHICLE,
  bo as HITTYPE_CERTAIN,
  en as HITTYPE_MAGICAL,
  tn as HITTYPE_PHYSICAL,
  fn as INPUT_NUMBER,
  Vn as LABEL,
  Zo as LABELS_DATA_WEAPON,
  Wn as LABEL_JUMP,
  Pa as LABEL_REGISTRY_JP,
  kt as LABEL_SET_DATA,
  a as LABEL_SET_ITEM_EFFECT,
  o as LABEL_SET_TRAIT,
  yn as LOOP,
  Yn as LOOP_BREAK,
  U as MODULE_DATA,
  G as MODULE_SYSTEM,
  C as MODULE_TRAIT,
  pA as MOVE_PICTURE,
  Sa as MockSystemLabelDataTypes,
  xA as NAME_INPUT_PROCESSING,
  dn as NO_OPERATION,
  r_ as OPEN_MENU_SCREEN,
  S_ as OPEN_SAVE_SCREEN,
  he as PARTY_ABILITY_CANCEL_SURPRISE,
  xe as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  Xe as PARTY_ABILITY_ENCOUNTER_HALF,
  Ke as PARTY_ABILITY_ENCOUNTER_NONE,
  we as PARTY_ABILITY_GOLD_DOUBLE,
  qe as PARTY_ABILITY_RAISE_PREEMPTIVE,
  UA as PLAY_BGM,
  BA as PLAY_BGS,
  yA as PLAY_ME,
  vA as PLAY_MOVIE,
  YA as PLAY_SE,
  O_ as PLUGIN_COMMAND_MV,
  d_ as PLUGIN_COMMAND_MZ,
  zA as RECOVER_ALL,
  ro as REGULAR_PARAM_AGI,
  Ro as REGULAR_PARAM_ATK,
  To as REGULAR_PARAM_DEF,
  mo as REGULAR_PARAM_LUK,
  co as REGULAR_PARAM_MATK,
  Eo as REGULAR_PARAM_MAX_HP,
  so as REGULAR_PARAM_MAX_MP,
  io as REGULAR_PARAM_MDEF,
  HA as RESUME_BGM,
  L_ as RETURN_TO_TITLE_SCREEN,
  uA as ROTATE_PICTURE,
  ca as ROUTE_CHANGE_BLEND_MODE,
  Z_ as ROUTE_CHANGE_FREQ,
  Ra as ROUTE_CHANGE_IMAGE,
  Ta as ROUTE_CHANGE_OPACITY,
  J_ as ROUTE_CHANGE_SPEED,
  Aa as ROUTE_DIR_FIX_OFF,
  na as ROUTE_DIR_FIX_ON,
  C_ as ROUTE_END,
  Y_ as ROUTE_JUMP,
  B_ as ROUTE_MOVE_AWAY,
  y_ as ROUTE_MOVE_BACKWARD,
  N_ as ROUTE_MOVE_DOWN,
  g_ as ROUTE_MOVE_FORWARD,
  p_ as ROUTE_MOVE_LEFT,
  l_ as ROUTE_MOVE_LOWER_L,
  D_ as ROUTE_MOVE_LOWER_R,
  F_ as ROUTE_MOVE_RANDOM,
  u_ as ROUTE_MOVE_RIGHT,
  H_ as ROUTE_MOVE_TOWARD,
  f_ as ROUTE_MOVE_UP,
  U_ as ROUTE_MOVE_UPPER_L,
  G_ as ROUTE_MOVE_UPPER_R,
  ia as ROUTE_PLAY_SE,
  ra as ROUTE_SCRIPT,
  oa as ROUTE_STEP_ANIME_OFF,
  ea as ROUTE_STEP_ANIME_ON,
  z_ as ROUTE_SWITCH_OFF,
  j_ as ROUTE_SWITCH_ON,
  aa as ROUTE_THROUGH_OFF,
  _a as ROUTE_THROUGH_ON,
  sa as ROUTE_TRANSPARENT_OFF,
  Ea as ROUTE_TRANSPARENT_ON,
  q_ as ROUTE_TURN_180D,
  h_ as ROUTE_TURN_90D_L,
  K_ as ROUTE_TURN_90D_R,
  w_ as ROUTE_TURN_90D_R_L,
  $_ as ROUTE_TURN_AWAY,
  v_ as ROUTE_TURN_DOWN,
  V_ as ROUTE_TURN_LEFT,
  x_ as ROUTE_TURN_RANDOM,
  W_ as ROUTE_TURN_RIGHT,
  Q_ as ROUTE_TURN_TOWARD,
  X_ as ROUTE_TURN_UP,
  k_ as ROUTE_WAIT,
  ta as ROUTE_WALK_ANIME_OFF,
  b_ as ROUTE_WALK_ANIME_ON,
  FA as SAVE_BGM,
  I_ as SCRIPT_EVAL,
  M_ as SCRIPT_EVAL_BODY,
  sA as SCROLL_MAP,
  ln as SELECT_ITEM,
  EA as SET_EVENT_LOCATION,
  RA as SET_MOVEMENT_ROUTE,
  aA as SET_VEHICLE_LOCATION,
  DA as SET_WEATHER_EFFECT,
  dA as SHAKE_SCREEN,
  qA as SHOP_PROCESSING,
  wA as SHOP_PROCESSING_BODY,
  iA as SHOW_ANIMATION,
  rA as SHOW_BALLOON_ICON,
  T_ as SHOW_BATTLE_ANIMATION,
  pn as SHOW_CHOICES,
  un as SHOW_CHOICES_ITEM,
  Cn as SHOW_MESSAGE,
  Nn as SHOW_MESSAGE_BODY,
  NA as SHOW_PICTURE,
  Dn as SHOW_SCROLLING_TEXT,
  Un as SHOW_SCROLLING_TEXT_BODY,
  Hn as SKIP,
  nn as SPECIAL_EFFECT_ESCAPE,
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
  kA as STOP_SE,
  fA as TINT_PICTURE,
  MA as TINT_SCREEN,
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
  _A as TRANSFER_PLAYER,
  CA as WAIT,
  Uo as buildCollapsSource,
  Ho as buildExtraParamSource,
  Go as buildPartyAbilitySource,
  Fo as buildRegularParamSource,
  go as buildSpecialFlagSource,
  Bo as buildSpecialParamSource,
  E as defineEffect,
  rn as defineEffectAddBuff,
  Pn as defineEffectAddDebuff,
  Tn as defineEffectAddState,
  In as defineEffectCommonEvent,
  sn as defineEffectGainTp,
  Rn as defineEffectGrow,
  Sn as defineEffectLearnSkill,
  an as defineEffectRecoverHp,
  En as defineEffectRecoverMp,
  mn as defineEffectRemoveBuff,
  Ln as defineEffectRemoveDebuff,
  cn as defineEffectRemoveState,
  lo as extraParamName,
  K as foldCollapsOptions,
  w as foldExtraParam,
  h as foldPartyAbilityOptions,
  q as foldRegularParam,
  Q as foldSpecialFlag,
  x as foldSpecialParams,
  _n as formatItemEffectText,
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
