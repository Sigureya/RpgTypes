const dt = "bgm", pt = "se", lt = "me", ft = "bgs", ut = "battlebacks1", Dt = "battlebacks2", Ut = "characters", Gt = "enemies", Ft = "faces", Ht = "parallaxes", Bt = "pictures", yt = "sv_actors", gt = "sv_enemies", Yt = "system", vt = "tilesets", Vt = "titles1", kt = "titles2", Kt = "System.json", D = (t, e) => {
  const A = { ...t };
  for (const s in t) {
    const P = e[s];
    typeof P == "string" && (A[s] = P);
  }
  return A;
}, Wt = (t, e) => ({
  domainName: e.domainName ?? t.domainName,
  options: D(t.options, e.options ?? {})
}), Xt = (t, e) => {
  const A = {};
  for (const s in t) {
    const P = t[s], K = e[s] ?? {};
    A[s] = D(
      P,
      K
    );
  }
  return A;
}, T = (t, e) => ({
  name: t,
  id: e
}), ht = (t) => t.variables.map(T), qt = (t) => t.elements.map(T), wt = (t) => t.equipTypes.map(T), xt = (t) => t.skillTypes.map(T), bt = (t) => t.weaponTypes.map(T), Qt = (t) => t.armorTypes.map(T), $t = (t) => t.terms.params.map(T), c = "rmmz", N = "trait", U = "data", G = "system", jt = 11, zt = 12, Jt = 13, Zt = 14, te = 21, ee = 22, oe = 23, ne = 31, Ae = 32, _e = 33, Ee = 34, ae = 35, se = 41, Re = 42, Te = 43, ce = 44, ie = 51, re = 52, me = 53, Se = 54, Pe = 55, Le = 61, Ie = 62, Me = 63, Oe = 64, Ce = 0, Ne = 1, de = 2, pe = 3, le = 0, fe = 1, ue = 2, De = 3, Ue = 4, Ge = 5, Fe = 0, He = 1, Be = 2, ye = 3, ge = 0, Ye = 1, ve = 2, Ve = 3, ke = 4, Ke = 5, We = 6, Xe = 7, he = 8, qe = 9, we = 0, xe = 1, be = 2, Qe = 3, $e = 4, je = 5, ze = 6, Je = 7, Ze = 0, to = 1, eo = 2, oo = 3, no = 4, Ao = 5, _o = 6, Eo = 7, ao = 8, so = 9, Ro = (t, e) => {
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
}, To = (t, e) => {
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
}, co = (t, e) => {
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
}, W = (t, e) => [
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
], X = (t) => [
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
], h = (t) => [
  { id: 0, name: t.maxHp },
  { id: 1, name: t.maxMp },
  { id: 2, name: t.atk },
  { id: 3, name: t.def },
  { id: 4, name: t.matk },
  { id: 5, name: t.mdef },
  { id: 6, name: t.agi },
  { id: 7, name: t.luk }
], q = (t) => [
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
], w = (t) => [
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
], m = (t, e, A) => ({
  items: A(e.options),
  label: e.domainName,
  source: {
    author: c,
    module: N,
    sourceKey: t
  }
}), io = (t, e) => m(
  y,
  t,
  (A) => W(A, e)
), ro = (t) => m(g, t, X), mo = (t) => m(S, t, h), So = (t) => m(H, t, q), Po = (t) => m(B, t, w), _ = "{name}", i = "{name} * {value}%", d = "{name} + {value}%", p = "{value}", o = {
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
}, F = /^[a-zA-Z0-9]+$/, Lo = (t) => F.test(t) ? t : void 0, O = (t) => typeof t == "string" ? F.test(t) : !1, Io = (t) => [t.author, t.module, t.sourceKey].join("."), Mo = (t) => O(t.author) && O(t.module) && O(t.sourceKey), S = "params", H = "xparams", B = "sparams", y = "collaps", g = "partyAbiility", x = "sflag", Oo = "actors", Co = "variables", No = "map", po = "enemy", L = "state", Y = "skill", lo = "items", fo = "weapon", uo = "armor", Do = "class", b = "common_event", Uo = "troop", Go = "colors", Q = "weaponTypes", $ = "armorTypes", Fo = "equipTypes", Ho = "switches", Bo = "skillTypes", j = "elements", yo = (t, e, A) => t.format.replaceAll("{value}", e.value.toString()).replaceAll("{name}", A), l = (t, e) => typeof e == "string" ? e : t, n = (t, e, A, s) => ({
  code: t,
  label: l(e.domainName, A.domainName),
  format: l(e.format, A.format),
  dataSource: s
}), v = () => ({
  module: G,
  author: c,
  sourceKey: j
}), V = (t) => ({
  module: U,
  author: c,
  sourceKey: t
}), R = (t) => ({
  author: c,
  module: N,
  sourceKey: t
}), k = (t) => ({
  author: c,
  module: G,
  sourceKey: t
}), z = (t) => n(
  11,
  o.options.elementRate,
  t,
  v()
), go = (t) => n(
  12,
  o.options.debuffRate,
  t,
  R(S)
), Yo = (t) => n(
  13,
  o.options.stateRate,
  t,
  R(S)
), vo = (t) => n(
  14,
  o.options.stateResist,
  t,
  V(L)
), Vo = (t) => n(
  21,
  o.options.regularParam,
  t,
  R(S)
), ko = (t) => n(
  22,
  o.options.extraParam,
  t,
  R(H)
), Ko = (t) => n(
  23,
  o.options.specialParam,
  t,
  R(B)
), Wo = (t) => n(
  31,
  o.options.attackElement,
  t,
  v()
), Xo = (t) => n(
  32,
  o.options.attackState,
  t,
  R(L)
), ho = (t) => n(33, o.options.attackSpeed, t), qo = (t) => n(34, o.options.attackTimes, t), wo = (t) => n(
  35,
  o.options.attackSkill,
  t,
  V(Y)
), xo = (t) => n(61, o.options.actionPlus, t), bo = (t) => n(
  62,
  o.options.specialFlag,
  t,
  R(x)
), Qo = (t) => n(
  63,
  o.options.collaps,
  t,
  R(y)
), $o = (t) => n(
  64,
  o.options.partyAbility,
  t,
  R(g)
), jo = (t) => n(
  51,
  o.options.equipWeaponType,
  t,
  k(Q)
), zo = (t) => n(
  52,
  o.options.equipArmorType,
  t,
  k($)
), Jo = (t) => n(53, o.options.equipLock, t), Zo = (t) => n(54, o.options.equipSeal, t), tn = (t) => n(43, o.options.skillAdd, t), en = (t) => n(44, o.options.skillSeal, t), on = (t) => n(55, o.options.slotType, t), nn = (t) => n(
  41,
  o.options.skillTypeAdd,
  t
), An = (t) => n(
  42,
  o.options.skillTypeSeal,
  t
), _n = (t) => [
  z(t.elementRate)
  // DEF.defineTraitAttackElement(labels.attackElement),
  // DEF.defineTraitAttackSkill(labels.attackSkill),
  // DEF.defineTraitAttackSpeed(labels.attackSpeed),
  // DEF.defineTraitAttackTimes(labels.attackTimes),
  // DEF.defineTraitAttackState(labels.attackState),
  // DEF.defineTraitStateRate(labels.stateRate),
  // DEF.defineTraitStateResist(labels.stateResist),
  // DEF.defineTraitDebuffRate(labels.debuffRate),
  // DEF.defineTraitEquipWeaponType(labels.equipWeaponType),
  // DEF.defineTraitEquipArmorType(labels.equipArmorType),
  // DEF.defineTraitEquipLock(labels.equipLock),
  // DEF.defineTraitEquipSeal(labels.equipSeal),
  // DEF.defineTraitSkillAdd(labels.skillAdd),
  // DEF.defineTraitSkillSeal(labels.skillSeal),
  // DEF.defineTraitSkillTypeAdd(labels.skillTypeAdd),
  // DEF.defineTraitSkillTypeSeal(labels.skillTypeSeal),
  // DEF.defineTraitSlotType(labels.slotType),
  // DEF.defineTraitActionPlus(labels.actionPlus),
  // DEF.defineTraitRegularParam(labels.regularParam),
  // DEF.defineTraitSpecialParam(labels.specialParam),
  // DEF.defineTraitExtraParam(labels.extraParam),
  // DEF.defineTraitPartyAbility(labels.partyAbility),
  // DEF.defineTraitCollapseType(labels.collaps),
  // DEF.defineTraitSpecialFlag(labels.specialFlag),
  // DEF.defineTraitAttackState(labels.attackState),
  // DEF.defineTraitAttackTimes(labels.attackTimes),
  // DEF.defineTraitAttackElement(labels.attackElement),
  // DEF.defineTraitAttackSkill(labels.attackSkill),
  // DEF.defineTraitAttackSpeed(labels.attackSpeed),
  // DEF.defineTraitStateRate(labels.stateRate),
  // DEF.defineTraitStateResist(labels.stateResist),
  // DEF.defineTraitDebuffRate(labels.debuffRate),
  // DEF.defineTraitEquipWeaponType(labels.equipWeaponType),
  // DEF.defineTraitEquipArmorType(labels.equipArmorType),
  // DEF.defineTraitEquipLock(labels.equipLock),
  // DEF.defineTraitEquipSeal(labels.equipSeal),
  // DEF.defineTraitSkillAdd(labels.skillAdd),
  // DEF.defineTraitSkillSeal(labels.skillSeal),
  // DEF.defineTraitSkillTypeAdd(labels.skillTypeAdd),
  // DEF.defineTraitSkillTypeSeal(labels.skillTypeSeal),
  // DEF.defineTraitSlotType(labels.slotType),
  // DEF.defineTraitActionPlus(labels.actionPlus),
  // DEF.defineTraitRegularParam(labels.regularParam),
  // DEF.defineTraitSpecialParam(labels.specialParam),
], J = {
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
}, Z = {
  domainName: "防具",
  options: {
    armorTypeId: "防具タイプID",
    slotTypeId: "スロットタイプID"
  }
}, tt = {
  domainName: "職業",
  options: {
    params: "パラメータ",
    learnings: "習得スキル",
    expParams: "経験値パラメータ"
  }
}, et = {
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
}, ot = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, nt = {
  domainName: "敵キャラ",
  options: {
    dropItems: "ドロップアイテム",
    battlerHue: "バトラーヒュー",
    battlerName: "バトラー名",
    gold: "ゴールド"
  }
}, At = {
  domainName: "ダメージ",
  options: {}
}, En = 0, an = 1, sn = 2, _t = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, Et = "{name} + {value1}", f = "{name} {value1}%", C = "{value1}% + {value2}", u = "{name} {value1}ターン", r = "{name}", E = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: u
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: u
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: C
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: Et
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: r
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
      format: r
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: r
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: f
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: r
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: f
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: r
    }
  }
}, Rn = 0, at = 11, st = 12, Rt = 13, Tt = 21, ct = 22, it = 31, rt = 32, mt = 33, St = 34, Tn = 41, Pt = 42, Lt = 43, It = 44, cn = (t, e, A) => t.format.replaceAll("{value1}", e.value1.toString()).replaceAll("{value2}", e.value2.toString()).replaceAll("{name}", A), I = () => ({
  author: c,
  module: N,
  sourceKey: S
}), M = (t) => ({
  author: c,
  module: U,
  sourceKey: t
}), a = (t, e, A, s) => ({
  codeId: t,
  label: A.domainName ?? e.domainName,
  format: A.format ?? e.format,
  description: A.desc ?? e.desc,
  dataSource: s
}), rn = (t) => a(
  at,
  E.options.recoverHp,
  t
), mn = (t) => a(
  st,
  E.options.recoverMp,
  t
), Sn = (t) => a(Rt, E.options.gainTp, t), Pn = (t) => a(Pt, E.options.grow, t), Ln = (t) => a(
  Tt,
  E.options.addState,
  t,
  M(L)
), In = (t) => a(
  ct,
  E.options.removeState,
  t,
  M(L)
), Mn = (t) => a(
  it,
  E.options.addBuff,
  t,
  I()
), On = (t) => a(
  mt,
  E.options.removeBuff,
  t,
  I()
), Cn = (t) => a(
  Lt,
  E.options.learnSkill,
  t,
  M(Y)
), Nn = (t) => a(
  rt,
  E.options.addBuff,
  t,
  I()
), dn = (t) => a(
  St,
  E.options.removeDebuff,
  t,
  I()
), pn = (t) => a(
  It,
  E.options.commonEvent,
  t,
  M(b)
), Mt = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, Ot = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, Ct = {
  actor: J,
  class: tt,
  armor: Z,
  enemy: nt,
  item: _t,
  skill: Mt,
  state: et,
  weapon: ot,
  usableItem: Ot
}, ln = 0, fn = 101, un = 401, Dn = 102, Un = 402, Gn = 103, Fn = 104, Hn = 105, Bn = 405, yn = 108, gn = 408, Yn = 109, vn = 111, Vn = 411, kn = 112, Kn = 113, Wn = 115, Xn = 117, hn = 118, qn = 119, wn = 121, xn = 122, bn = 123, Qn = 124, $n = 125, jn = 126, zn = 127, Jn = 128, Zn = 129, tA = 132, eA = 133, oA = 134, nA = 135, AA = 136, _A = 137, EA = 138, aA = 139, sA = 140, RA = 201, TA = 202, cA = 203, iA = 204, rA = 205, mA = 206, SA = 211, PA = 212, LA = 213, IA = 214, MA = 216, OA = 217, CA = 221, NA = 222, dA = 223, pA = 224, lA = 225, fA = 230, uA = 231, DA = 232, UA = 233, GA = 234, FA = 235, HA = 236, BA = 241, yA = 242, gA = 243, YA = 244, vA = 245, VA = 246, kA = 249, KA = 250, WA = 251, XA = 261, hA = 282, qA = 283, wA = 284, xA = 285, bA = 301, QA = 302, $A = 605, jA = 303, zA = 311, JA = 312, ZA = 313, t_ = 314, e_ = 315, o_ = 320, n_ = 321, A_ = 322, __ = 323, E_ = 324, a_ = 325, s_ = 331, R_ = 332, T_ = 333, c_ = 334, i_ = 335, r_ = 336, m_ = 337, S_ = 339, P_ = 340, L_ = 351, I_ = 342, M_ = 352, O_ = 353, C_ = 354, N_ = 355, d_ = 655, p_ = 356, l_ = 357, f_ = 0, u_ = 1, D_ = 2, U_ = 3, G_ = 4, F_ = 5, H_ = 6, B_ = 7, y_ = 8, g_ = 9, Y_ = 10, v_ = 11, V_ = 12, k_ = 13, K_ = 14, W_ = 15, X_ = 16, h_ = 17, q_ = 18, w_ = 19, x_ = 20, b_ = 21, Q_ = 22, $_ = 23, j_ = 24, z_ = 25, J_ = 26, Z_ = 27, tE = 28, eE = 29, oE = 30, nE = 31, AE = 32, _E = 33, EE = 34, aE = 35, sE = 36, RE = 37, TE = 38, cE = 39, iE = 40, rE = 41, mE = 42, SE = 43, PE = 44, LE = 45, IE = {
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
}, ME = {
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
}, Nt = {
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
}, OE = {
  rpg: {
    damage: At,
    data: Ct,
    traits: o,
    itemEffect: E
  },
  global: Nt
};
export {
  P_ as ABORT_BATTLE,
  c as AUTHOR_RMMZ,
  bA as BATTLE_PROCESSING,
  A_ as CHANGE_ACTOR_IMAGES,
  Jn as CHANGE_ARMORS,
  qA as CHANGE_BATTLE_BACKGROUND,
  tA as CHANGE_BATTLE_BGM,
  n_ as CHANGE_CLASS,
  aA as CHANGE_DEFEAT_ME,
  AA as CHANGE_ENCOUNTER,
  s_ as CHANGE_ENEMY_HP,
  R_ as CHANGE_ENEMY_MP,
  T_ as CHANGE_ENEMY_STATE,
  I_ as CHANGE_ENEMY_TP,
  e_ as CHANGE_EXP,
  _A as CHANGE_FORMATION_ACCESS,
  $n as CHANGE_GOLD,
  zA as CHANGE_HP,
  jn as CHANGE_ITEMS,
  nA as CHANGE_MENU_ACCESS,
  JA as CHANGE_MP,
  o_ as CHANGE_NAME,
  E_ as CHANGE_NICKNAME,
  wA as CHANGE_PARALLAX,
  Zn as CHANGE_PARTY_MEMBER,
  MA as CHANGE_PLAYER_FOLLOWERS,
  a_ as CHANGE_PROFILE,
  oA as CHANGE_SAVE_ACCESS,
  hA as CHANGE_TILESET,
  ZA as CHANGE_TP,
  SA as CHANGE_TRANSPARENCY,
  sA as CHANGE_VEHICLE_BGM,
  __ as CHANGE_VEHICLE_IMAGE,
  eA as CHANGE_VICTORY_ME,
  zn as CHANGE_WEAPONS,
  EA as CHANGE_WINDOW_COLOR,
  Ne as COLLAPS_BOSS,
  de as COLLAPS_INSTANT,
  pe as COLLAPS_NONE,
  Ce as COLLAPS_NORMAL,
  yn as COMMENT,
  gn as COMMENT_BODY,
  Xn as COMMON_EVENT,
  vn as CONDITIONAL_BRANCH,
  Vn as CONDITIONAL_BRANCH_ELSE,
  bn as CONTROL_SELF_SWITCH,
  wn as CONTROL_SWITCHES,
  Qn as CONTROL_TIMER,
  xn as CONTROL_VARIABLES,
  At as DEFAULT_DAMAGE_LABELS,
  Nt as DEFAULT_GLOBAL_LABELS,
  _t as DEFAULT_ITEM_LABELS,
  Mt as DEFAULT_SKILL_LABELS,
  IE as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  Ot as DEFAULT_USABLE_ITEM_LABELS,
  it as EFFECT_ADD_BUFF,
  rt as EFFECT_ADD_DEBUFF,
  Tt as EFFECT_ADD_STATE,
  It as EFFECT_COMMON_EVENT,
  Rt as EFFECT_GAIN_TP,
  Pt as EFFECT_GROW,
  Lt as EFFECT_LEARN_SKILL,
  at as EFFECT_RECOVER_HP,
  st as EFFECT_RECOVER_MP,
  mt as EFFECT_REMOVE_BUFF,
  St as EFFECT_REMOVE_DEBUFF,
  ct as EFFECT_REMOVE_STATE,
  Tn as EFFECT_SPECIAL,
  i_ as ENEMY_APPEAR,
  c_ as ENEMY_RECOVER_ALL,
  r_ as ENEMY_TRANSFORM,
  IA as ERASE_EVENT,
  FA as ERASE_PICTURE,
  Wn as EXIT_EVENT_PROCESSING,
  Ve as EXTRA_PARAM_CEV,
  We as EXTRA_PARAM_CNT,
  ve as EXTRA_PARAM_CRI,
  Ye as EXTRA_PARAM_EVA,
  ge as EXTRA_PARAM_HIT,
  Xe as EXTRA_PARAM_HRG,
  ke as EXTRA_PARAM_MEV,
  Ke as EXTRA_PARAM_MRF,
  he as EXTRA_PARAM_MRG,
  qe as EXTRA_PARAM_TRG,
  NA as FADEIN_SCREEN,
  yA as FADEOUT_BGM,
  VA as FADEOUT_BGS,
  CA as FADEOUT_SCREEN,
  Kt as FILENAME_SYSTEM,
  Fe as FLAG_ID_AUTO_BATTLE,
  He as FLAG_ID_GUARD,
  ye as FLAG_ID_PRESERVE_TP,
  Be as FLAG_ID_SUBSTITUTE,
  pA as FLASH_SCREEN,
  dt as FOLDER_AUDIO_BGM,
  ft as FOLDER_AUDIO_BGS,
  lt as FOLDER_AUDIO_ME,
  pt as FOLDER_AUDIO_SE,
  ut as FOLDER_IMG_BATTLEBACK1,
  Dt as FOLDER_IMG_BATTLEBACK2,
  Ut as FOLDER_IMG_CHACTERS,
  Gt as FOLDER_IMG_ENEMIES,
  Ft as FOLDER_IMG_FACES,
  Ht as FOLDER_IMG_PARALLACES,
  Bt as FOLDER_IMG_PICTURES,
  yt as FOLDER_IMG_SV_ACTORS,
  gt as FOLDER_IMG_SV_ENEMIES,
  Yt as FOLDER_IMG_SYSTEM,
  vt as FOLDER_IMG_TILESETS,
  Vt as FOLDER_IMG_TITLES1,
  kt as FOLDER_IMG_TITLES2,
  S_ as FORCE_ACTION,
  O_ as GAME_OVER,
  OA as GATHER_FOLLOWERS,
  xA as GET_LOCATION_INFO,
  mA as GET_ONOFF_VEHICLE,
  En as HITTYPE_CERTAIN,
  sn as HITTYPE_MAGICAL,
  an as HITTYPE_PHYSICAL,
  Gn as INPUT_NUMBER,
  hn as LABEL,
  J as LABELS_DATA_ACTOR,
  Z as LABELS_DATA_ARMOR,
  tt as LABELS_DATA_CLASS,
  nt as LABELS_DATA_ENEMY,
  et as LABELS_DATA_STATE,
  ot as LABELS_DATA_WEAPON,
  qn as LABEL_JUMP,
  OE as LABEL_REGISTRY_JP,
  Ct as LABEL_SET_DATA,
  E as LABEL_SET_ITEM_EFFECT,
  o as LABEL_SET_TRAIT,
  kn as LOOP,
  Kn as LOOP_BREAK,
  U as MODULE_DATA,
  G as MODULE_SYSTEM,
  N as MODULE_TRAIT,
  DA as MOVE_PICTURE,
  ME as MockSystemLabelDataTypes,
  jA as NAME_INPUT_PROCESSING,
  ln as NO_OPERATION,
  L_ as OPEN_MENU_SCREEN,
  M_ as OPEN_SAVE_SCREEN,
  ue as PARTY_ABILITY_CANCEL_SURPRISE,
  Ge as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  le as PARTY_ABILITY_ENCOUNTER_HALF,
  fe as PARTY_ABILITY_ENCOUNTER_NONE,
  Ue as PARTY_ABILITY_GOLD_DOUBLE,
  De as PARTY_ABILITY_RAISE_PREEMPTIVE,
  BA as PLAY_BGM,
  vA as PLAY_BGS,
  kA as PLAY_ME,
  XA as PLAY_MOVIE,
  KA as PLAY_SE,
  p_ as PLUGIN_COMMAND_MV,
  l_ as PLUGIN_COMMAND_MZ,
  t_ as RECOVER_ALL,
  ze as REGULAR_PARAM_AGI,
  be as REGULAR_PARAM_ATK,
  Qe as REGULAR_PARAM_DEF,
  Je as REGULAR_PARAM_LUK,
  $e as REGULAR_PARAM_MATK,
  we as REGULAR_PARAM_MAX_HP,
  xe as REGULAR_PARAM_MAX_MP,
  je as REGULAR_PARAM_MDEF,
  YA as RESUME_BGM,
  C_ as RETURN_TO_TITLE_SCREEN,
  UA as ROTATE_PICTURE,
  SE as ROUTE_CHANGE_BLEND_MODE,
  oE as ROUTE_CHANGE_FREQ,
  rE as ROUTE_CHANGE_IMAGE,
  mE as ROUTE_CHANGE_OPACITY,
  eE as ROUTE_CHANGE_SPEED,
  sE as ROUTE_DIR_FIX_OFF,
  aE as ROUTE_DIR_FIX_ON,
  f_ as ROUTE_END,
  K_ as ROUTE_JUMP,
  v_ as ROUTE_MOVE_AWAY,
  k_ as ROUTE_MOVE_BACKWARD,
  u_ as ROUTE_MOVE_DOWN,
  V_ as ROUTE_MOVE_FORWARD,
  D_ as ROUTE_MOVE_LEFT,
  F_ as ROUTE_MOVE_LOWER_L,
  H_ as ROUTE_MOVE_LOWER_R,
  g_ as ROUTE_MOVE_RANDOM,
  U_ as ROUTE_MOVE_RIGHT,
  Y_ as ROUTE_MOVE_TOWARD,
  G_ as ROUTE_MOVE_UP,
  B_ as ROUTE_MOVE_UPPER_L,
  y_ as ROUTE_MOVE_UPPER_R,
  PE as ROUTE_PLAY_SE,
  LE as ROUTE_SCRIPT,
  EE as ROUTE_STEP_ANIME_OFF,
  _E as ROUTE_STEP_ANIME_ON,
  tE as ROUTE_SWITCH_OFF,
  Z_ as ROUTE_SWITCH_ON,
  TE as ROUTE_THROUGH_OFF,
  RE as ROUTE_THROUGH_ON,
  iE as ROUTE_TRANSPARENT_OFF,
  cE as ROUTE_TRANSPARENT_ON,
  Q_ as ROUTE_TURN_180D,
  b_ as ROUTE_TURN_90D_L,
  x_ as ROUTE_TURN_90D_R,
  $_ as ROUTE_TURN_90D_R_L,
  J_ as ROUTE_TURN_AWAY,
  X_ as ROUTE_TURN_DOWN,
  h_ as ROUTE_TURN_LEFT,
  j_ as ROUTE_TURN_RANDOM,
  q_ as ROUTE_TURN_RIGHT,
  z_ as ROUTE_TURN_TOWARD,
  w_ as ROUTE_TURN_UP,
  W_ as ROUTE_WAIT,
  AE as ROUTE_WALK_ANIME_OFF,
  nE as ROUTE_WALK_ANIME_ON,
  gA as SAVE_BGM,
  N_ as SCRIPT_EVAL,
  d_ as SCRIPT_EVAL_BODY,
  iA as SCROLL_MAP,
  Fn as SELECT_ITEM,
  cA as SET_EVENT_LOCATION,
  rA as SET_MOVEMENT_ROUTE,
  TA as SET_VEHICLE_LOCATION,
  HA as SET_WEATHER_EFFECT,
  lA as SHAKE_SCREEN,
  QA as SHOP_PROCESSING,
  $A as SHOP_PROCESSING_BODY,
  PA as SHOW_ANIMATION,
  LA as SHOW_BALLOON_ICON,
  m_ as SHOW_BATTLE_ANIMATION,
  Dn as SHOW_CHOICES,
  Un as SHOW_CHOICES_ITEM,
  fn as SHOW_MESSAGE,
  un as SHOW_MESSAGE_BODY,
  uA as SHOW_PICTURE,
  Hn as SHOW_SCROLLING_TEXT,
  Bn as SHOW_SCROLLING_TEXT_BODY,
  Yn as SKIP,
  Rn as SPECIAL_EFFECT_ESCAPE,
  so as SPECIAL_PARAM_EXR,
  ao as SPECIAL_PARAM_FDR,
  to as SPECIAL_PARAM_GRD,
  no as SPECIAL_PARAM_MCR,
  Eo as SPECIAL_PARAM_MDR,
  _o as SPECIAL_PARAM_PDR,
  oo as SPECIAL_PARAM_PHA,
  eo as SPECIAL_PARAM_REC,
  Ao as SPECIAL_PARAM_TCR,
  Ze as SPECIAL_PARAM_TGR,
  $ as SRC_ARMOR_TYPES,
  Go as SRC_COLOR,
  b as SRC_COMMON_EVNET,
  Oo as SRC_DATA_ACTOR,
  uo as SRC_DATA_ARMOR,
  Do as SRC_DATA_CLASS,
  po as SRC_DATA_ENEMY,
  lo as SRC_DATA_ITEMS,
  No as SRC_DATA_MAP,
  Y as SRC_DATA_SKILL,
  L as SRC_DATA_STATE,
  Co as SRC_DATA_VARIABLE,
  fo as SRC_DATA_WEAPON,
  j as SRC_ELEMENTS,
  Fo as SRC_EQUIP_TYPES,
  H as SRC_PARAMS_EXTRA,
  S as SRC_PARAMS_REGULAR,
  B as SRC_PARAMS_SPECIAL,
  Bo as SRC_SKILL_TYPES,
  Ho as SRC_SWITCHES,
  y as SRC_TRAIT_COLLAPS,
  g as SRC_TRAIT_PARTY_ABILITY,
  x as SRC_TRAIT_SPECIAL_FLAG,
  Uo as SRC_TROOP,
  Q as SRC_WEAPON_TYPES,
  WA as STOP_SE,
  GA as TINT_PICTURE,
  dA as TINT_SCREEN,
  Le as TRAIT_ACTION_PLUS,
  ne as TRAIT_ATTACK_ELEMENT,
  ae as TRAIT_ATTACK_SKILL,
  _e as TRAIT_ATTACK_SPEED,
  Ae as TRAIT_ATTACK_STATE,
  Ee as TRAIT_ATTACK_TIMES,
  Me as TRAIT_COLLAPSE_TYPE,
  zt as TRAIT_DEBUFF_RATE,
  jt as TRAIT_ELEMENT_RATE,
  re as TRAIT_EQUIP_ARMOR_TYPE,
  me as TRAIT_EQUIP_LOCK,
  Se as TRAIT_EQUIP_SEAL,
  ie as TRAIT_EQUIP_WEAPON_TYPE,
  te as TRAIT_PARAM,
  Oe as TRAIT_PARTY_ABILITY,
  Te as TRAIT_SKILL_ADD,
  ce as TRAIT_SKILL_SEAL,
  se as TRAIT_SKILL_TYPE_ADD,
  Re as TRAIT_SKILL_TYPE_SEAL,
  Pe as TRAIT_SLOT_TYPE,
  oe as TRAIT_SPARAM,
  Ie as TRAIT_SPECIAL_FLAG,
  Jt as TRAIT_STATE_RATE,
  Zt as TRAIT_STATE_RESIST,
  ee as TRAIT_XPARAM,
  RA as TRANSFER_PLAYER,
  fA as WAIT,
  io as buildCollapsSource,
  So as buildExtraParamSource,
  ro as buildPartyAbilitySource,
  mo as buildRegularParamSource,
  Po as buildSpecialParamSource,
  a as defineEffect,
  Mn as defineEffectAddBuff,
  Nn as defineEffectAddDebuff,
  Ln as defineEffectAddState,
  pn as defineEffectCommonEvent,
  Sn as defineEffectGainTp,
  Pn as defineEffectGrow,
  Cn as defineEffectLearnSkill,
  rn as defineEffectRecoverHp,
  mn as defineEffectRecoverMp,
  On as defineEffectRemoveBuff,
  dn as defineEffectRemoveDebuff,
  In as defineEffectRemoveState,
  xo as defineTraitActionPlus,
  Wo as defineTraitAttackElement,
  wo as defineTraitAttackSkill,
  ho as defineTraitAttackSpeed,
  Xo as defineTraitAttackState,
  qo as defineTraitAttackTimes,
  Qo as defineTraitCollapseType,
  go as defineTraitDebuffRate,
  z as defineTraitElementRate,
  zo as defineTraitEquipArmorType,
  Jo as defineTraitEquipLock,
  Zo as defineTraitEquipSeal,
  jo as defineTraitEquipWeaponType,
  ko as defineTraitExtraParam,
  $o as defineTraitPartyAbility,
  Vo as defineTraitRegularParam,
  tn as defineTraitSkillAdd,
  en as defineTraitSkillSeal,
  nn as defineTraitSkillTypeAdd,
  An as defineTraitSkillTypeSeal,
  on as defineTraitSlotType,
  bo as defineTraitSpecialFlag,
  Ko as defineTraitSpecialParam,
  Yo as defineTraitStateRate,
  vo as defineTraitStateResist,
  To as extraParamName,
  W as foldCollapsOptions,
  q as foldExtraParam,
  X as foldPartyAbilityOptions,
  h as foldRegularParam,
  w as foldSpecialParams,
  cn as formatItemEffectText,
  yo as formatTraitText,
  Qt as getArmorTypes,
  qt as getElementTypes,
  wt as getEquipTypes,
  $t as getParamNames,
  xt as getSkillTypes,
  ht as getVariableNames,
  bt as getWeaponTypes,
  Mo as isValid,
  Io as joinSourceKey,
  Wt as mergeDomainLabel,
  Xt as mergeNestedPrimitiveRecords,
  D as mergeWithDefaults,
  Ro as regularParamName,
  _n as resolveTraitLabel,
  Lo as sanitizeKey,
  co as specialParamName,
  O as testUnknonwKey,
  m as traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
