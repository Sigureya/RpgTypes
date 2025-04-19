const e = {
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
}, a = {
  domainName: "職業",
  options: {
    params: "パラメータ",
    learnings: "習得スキル",
    expParams: "経験値パラメータ"
  }
}, o = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
}, t = {
  domainName: "基本能力値",
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
}, s = {
  domainName: "追加能力値",
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
}, n = {
  domainName: "特殊能力値",
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
}, i = {
  domainName: "パーティ能力",
  options: {
    cancelSurprise: "不意打ち無効",
    dropItemDouble: "アイテムドロップ2倍",
    encounterHalf: "エンカウント半減",
    encounterNone: "エンカウントなし",
    goldDouble: "ゴールド2倍",
    raisePreemptive: "先制攻撃率アップ"
  }
}, m = {
  domainName: "消滅エフェクト",
  options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  }
}, c = {
  domainName: "特殊フラグ",
  options: {
    autoBattle: "自動戦闘",
    guard: "防御",
    substitute: "身代わり",
    preventEscape: "逃走防止"
  }
}, l = {
  domainName: "敵キャラ",
  options: {
    dropItems: "ドロップアイテム",
    battlerHue: "バトラーヒュー",
    battlerName: "バトラー名",
    gold: "ゴールド"
  }
}, r = {
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
}, p = {
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
}, d = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
  }
}, g = {
  domainName: "防具",
  options: {
    armorTypeId: "防具タイプID",
    slotTypeId: "スロットタイプID"
  }
}, R = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
}, u = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
}, b = {
  rpg: {
    actor: e,
    armor: g,
    skill: o,
    damage: {
      domainName: "ダメージ",
      options: {}
    },
    item: u,
    class: a,
    enemy: l,
    collaps: m,
    paramExtra: s,
    paramSpecial: n,
    paramRegular: t,
    partyAbility: i,
    weapon: R,
    usableItem: d,
    state: p,
    specialFlag: c
  },
  global: r
};
export {
  e as MockActorLabels,
  g as MockArmorLabels,
  a as MockClassLables,
  m as MockCollapsLabels,
  l as MockEnemyLabels,
  r as MockGlobalLabels,
  u as MockItemLabels,
  b as MockLabelRegistry,
  s as MockParamExtra,
  t as MockParamRegularLabels,
  n as MockParamSpecialLabels,
  i as MockPartyAbility,
  o as MockSkillLabels,
  c as MockSpecialFlagLabels,
  p as MockStateLabels,
  d as MockUsableItem,
  R as MockWeaponLabels
};
//# sourceMappingURL=rpgMocks.es.js.map
