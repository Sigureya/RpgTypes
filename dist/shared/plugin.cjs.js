"use strict";
const e = require("ajv"), t = require("./make.cjs.js"), a = (e2, t2) => `\\${e2}[${t2}]`, r = (e2 = {}) => ({
  switch1Id: e2.switch1Id ?? 0,
  switch1Valid: void 0 !== e2.switch1Id,
  switch2Id: e2.switch2Id ?? 0,
  switch2Valid: void 0 !== e2.switch2Id,
  variableId: e2.variableId ?? 0,
  variableValid: void 0 !== e2.variableId,
  variableValue: e2.variableValue ?? 0,
  selfSwitchCh: e2.selfSwitchCh ?? "A",
  selfSwitchValid: void 0 !== e2.selfSwitchCh,
  itemId: e2.itemId ?? 0,
  itemValid: void 0 !== e2.itemId,
  actorId: e2.actorId ?? 0,
  actorValid: void 0 !== e2.actorId
}), o = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), i = {
  type: "object",
  required: ["battleback1Name", "battleback2Name", "note", "width", "height", "x", "y", "parallaxSy", "parallaxSx", "parallaxLoopY", "parallaxLoopX", "disableDashing", "parallaxName", "parallaxShow", "displayName", "data", "autoplayBgm", "bgm", "autoplayBgs", "bgs"],
  properties: {
    data: { type: "array", items: { type: "integer" } },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
    parallaxLoopY: { type: "boolean" },
    parallaxLoopX: {
      type: "boolean"
    },
    parallaxName: { type: "string" },
    parallaxShow: { type: "boolean" },
    parallaxSy: { type: "integer" },
    parallaxSx: { type: "integer" },
    x: { type: "integer", minimum: 0 },
    y: { type: "integer", minimum: 0 },
    width: { type: "integer", minimum: 0 },
    height: { type: "integer", minimum: 0 },
    note: { type: "string" },
    displayName: { type: "string" },
    disableDashing: { type: "boolean" },
    autoplayBgm: { type: "boolean" },
    bgm: { type: "object", required: ["name", "pan", "pitch", "volume"], properties: { name: { type: "string" }, pan: { type: "integer" }, pitch: { type: "integer" }, volume: { type: "integer" } } },
    autoplayBgs: {
      type: "boolean"
    },
    bgs: { type: "object", required: ["name", "pan", "pitch", "volume"], properties: { name: { type: "string" }, pan: { type: "integer" }, pitch: { type: "integer" }, volume: { type: "integer" } } },
    encounterList: { type: "array", items: { type: "object", required: ["regionSet", "troopId", "weight"], properties: {
      regionSet: { type: "array", items: { type: "integer" } },
      troopId: { type: "integer" },
      weight: { type: "integer" }
    } } },
    events: { type: "array", items: { type: "object", required: ["id", "name", "x", "y", "pages"], properties: {
      id: { type: "integer" },
      name: { type: "string" },
      x: { type: "integer" },
      y: { type: "integer" },
      note: { type: "string" },
      pages: { type: "array", items: { type: "object", required: ["image", "moveRoute", "conditions", "directionFix", "moveFrequency"], properties: {
        moveFrequency: { type: "integer" },
        directionFix: { type: "boolean" },
        conditions: {
          type: "object",
          required: ["switch1Id", "switch1Valid", "switch2Id", "switch2Valid", "variableId", "variableValid", "selfSwitchCh", "selfSwitchValid", "variableValue", "itemId", "itemValid", "actorId", "actorValid"],
          properties: { switch1Id: { type: "integer", minimum: 0 }, switch1Valid: { type: "boolean" }, switch2Id: { type: "integer", minimum: 0 }, switch2Valid: { type: "boolean" }, variableId: {
            type: "integer",
            minimum: 0
          }, variableValid: { type: "boolean" }, selfSwitchCh: { type: "string" }, selfSwitchValid: { type: "boolean" }, variableValue: { type: "integer" }, itemId: { type: "integer", minimum: 0 }, itemValid: {
            type: "boolean"
          }, actorId: { type: "integer" }, actorValid: { type: "boolean" } }
        },
        image: { type: "object", required: ["characterIndex", "characterName", "direction", "pattern", "tileId"], properties: {
          characterIndex: { type: "integer", minimum: 0 },
          characterName: { type: "string" },
          direction: { type: "integer", enum: [2, 4, 6, 8] },
          pattern: { type: "integer" },
          tileId: { type: "integer" }
        } },
        moveRoute: {
          type: "object",
          required: ["wait", "repeat", "skippable", "list"],
          properties: { wait: { type: "boolean" }, repeat: { type: "boolean" }, skippable: { type: "boolean" }, list: { type: "array", items: {
            type: "object",
            required: ["code", "parameters"],
            properties: { code: { type: "integer" }, parameters: { type: "array", items: { oneOf: [{ type: "string" }, { type: "number" }, {
              type: "object",
              required: ["name", "pan", "pitch", "volume"],
              properties: { name: { type: "string" }, pan: { type: "integer" }, pitch: { type: "integer" }, volume: { type: "integer" } }
            }] } } }
          } } }
        }
      } } }
    } } }
  }
}, s = new e({
  strict: true
}), n = s.compile({ type: "object", required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"], properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: {
  type: "boolean"
}, order: { type: "integer" }, parentId: { type: "integer" }, scrollX: { type: "number" }, scrollY: { type: "number" } } }), m = s.compile(i), p = { actor: { title: "アクター", options: {
  initialEquipments: "初期装備",
  faceImage: "顔画像",
  characterImage: "キャラクター画像",
  svBattlerImage: "SVバトラー画像",
  nickname: "ニックネーム",
  profile: "プロフィール",
  classId: "職業ID",
  initialLevel: "初期レベル",
  maxLevel: "最大レベル"
} }, class: { title: "職業", options: { params: "パラメータ", learnings: "習得スキル", expParams: "経験値パラメータ" } }, armor: { title: "防具", options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" } }, enemy: {
  title: "敵キャラ",
  options: { dropItems: "ドロップアイテム", battlerHue: "バトラーヒュー", battlerName: "バトラー名", gold: "ゴールド" }
}, item: { title: "アイテム", options: { consumable: "消耗品" } }, skill: { title: "スキル", options: {
  requiredWeaponTypeId1: "必要武器タイプ1",
  requiredWeaponTypeId2: "必要武器タイプ2",
  mpCost: "MP消費",
  tpCost: "TP消費"
} }, state: { title: "ステート", options: {
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
} }, weapon: { title: "武器", options: { weaponTypeId: "武器タイプID" } }, usableItem: { title: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, commonEvent: { title: "コモンイベント", options: { trigger: "トリガー", switchId: "スイッチID", name: "名前", id: "ID", list: "コマンドリスト" } } }, c = { title: "ダメージ", options: {} }, d = (e2 = {}) => ({
  type: e2.type ?? 0,
  elementId: e2.elementId ?? 0,
  formula: e2.formula ?? "",
  variance: e2.variance ?? 0,
  critical: e2.critical ?? false
}), l = (e2 = {}) => ({
  dataId: e2.dataId ?? 0,
  denominator: e2.denominator ?? 0,
  kind: e2.kind ?? 0
}), u = "{name}", y = "{name} * {value}%", x = "{name} + {value}%", g = "{value}", E = { title: "特徴", options: {
  regularParam: { title: "基本能力値", format: y, options: {
    maxHp: "最大HP",
    maxMp: "最大MP",
    atk: "攻撃力",
    def: "防御力",
    matk: "魔法攻撃力",
    mdef: "魔法防御力",
    agi: "敏捷性",
    luk: "運"
  } },
  extraParam: { title: "追加能力値", format: x, options: {
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
  } },
  specialParam: { title: "特殊能力値", format: y, options: {
    targetRate: "狙われ率",
    guardEffectRate: "防御効果率",
    recoveryEffectRate: "回復効果率",
    pharmacology: "薬の知識",
    mpCostRate: "MP消費率",
    tpChargeRate: "TPチャージ率",
    physicalDamageRate: "物理ダメージ率",
    magicDamageRate: "魔法ダメージ率",
    floorDamageRate: "床ダメージ率",
    experienceRate: "経験値率"
  } },
  specialFlag: {
    title: "特殊フラグ",
    format: u,
    options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
  },
  collaps: { title: "消滅エフェクト", format: u, options: {
    bossCollaps: "ボス崩壊",
    instantCollaps: "即時崩壊",
    noneCollaps: "崩壊なし"
  } },
  partyAbility: { title: "パーティ能力", format: u, options: {
    cancelSurprise: "不意打ち無効",
    dropItemDouble: "アイテムドロップ2倍",
    encounterHalf: "エンカウント半減",
    encounterNone: "エンカウントなし",
    goldDouble: "ゴールド2倍",
    raisePreemptive: "先制攻撃率アップ"
  } },
  elementRate: { title: "属性有効度", format: y },
  debuffRate: { title: "弱体有効度", format: y },
  stateRate: { title: "ステート有効度", format: y },
  stateResist: {
    title: "ステート無効",
    format: u
  },
  attackElement: { title: "攻撃属性", format: u },
  attackState: { title: "攻撃ステート", format: x },
  attackSpeed: { title: "攻撃速度補正", format: g },
  attackTimes: { title: "攻撃追加回数", format: g },
  actionPlus: { title: "行動追加", format: y },
  attackSkill: { title: "攻撃スキル", format: u },
  equipWeaponType: { title: "装備武器タイプ", format: u },
  equipArmorType: { title: "装備防具タイプ", format: u },
  equipLock: {
    title: "装備固定",
    format: u
  },
  equipSeal: { title: "装備封印", format: u },
  slotType: { title: "スロットタイプ", format: u },
  skillAdd: { title: "スキル追加", format: u },
  skillSeal: { title: "スキルタイプ封印", format: u },
  skillTypeAdd: {
    title: "スキルタイプ追加",
    format: u
  },
  skillTypeSeal: { title: "スキルタイプ封印", format: u }
} }, I = {
  itemMapper: { placeHolder: "name", dataIdKey: "dataId", kindKey: "code" },
  placeHolder: { numbers: ["value"] }
}, A = "{name} {value1}%", T = "{value1}% + {value2}", b = "{name} {value1}ターン", _ = "{name}", S = { title: "使用効果", options: {
  addBuff: { desc: "バフを付与する", domainName: "バフ付与", format: b },
  addDebuff: {
    desc: "デバフを付与する",
    domainName: "デバフ付与",
    format: b
  },
  gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: T },
  grow: { desc: "成長効果", domainName: "成長効果", format: "{name} + {value1}" },
  learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: _ },
  recoverHp: { desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "HP回復", format: T },
  recoverMp: { desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。", domainName: "MP回復", format: T },
  removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: _ },
  removeDebuff: { desc: "デバフを解除する", domainName: "デバフ解除", format: _ },
  removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: A },
  special: { desc: "特殊効果", domainName: "特殊効果", format: _ },
  addState: { desc: "状態異常を解除する", domainName: "ステート解除", format: A },
  commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: _ }
} }, C = { type: "integer" }, N = { type: "integer", minimum: 0 }, f = {
  type: "string"
}, R = {
  type: "object",
  properties: { type: { type: "integer" }, elementId: N, formula: f, variance: C, critical: { type: "boolean" } },
  required: ["type", "elementId", "formula", "variance", "critical"],
  additionalProperties: false
}, O = {
  type: "object",
  properties: { code: C, dataId: N, value1: C, value2: C },
  required: ["code", "dataId", "value1", "value2"],
  additionalProperties: false
}, v = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "message1", "message2", "messageType", "mpCost", "requiredWtypeId1", "requiredWtypeId2", "stypeId", "tpCost", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "note", "effects"],
  properties: {
    name: f,
    id: N,
    description: f,
    iconIndex: N,
    message1: f,
    message2: f,
    messageType: N,
    mpCost: C,
    requiredWtypeId1: N,
    requiredWtypeId2: N,
    stypeId: N,
    tpCost: C,
    animationId: N,
    hitType: N,
    occasion: { type: "integer" },
    repeats: N,
    scope: C,
    speed: C,
    successRate: C,
    tpGain: C,
    note: f,
    effects: { type: "array", items: O },
    damage: R
  },
  additionalProperties: false
}, h = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "note", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "consumable", "price", "effects"],
  properties: {
    name: f,
    id: N,
    description: f,
    iconIndex: N,
    note: f,
    animationId: N,
    hitType: C,
    occasion: C,
    repeats: C,
    scope: C,
    speed: C,
    successRate: C,
    tpGain: C,
    consumable: { type: "boolean" },
    price: N,
    itypeId: N,
    effects: { type: "array", items: O },
    damage: R
  }
}, k = new e({ strict: true }), M = k.compile(h), P = k.compile(v), L = k.compile({
  type: "object",
  required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "animationId"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    wtypeId: {
      type: "integer",
      minimum: 0
    },
    animationId: { type: "integer", minimum: 0 },
    params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, {
      type: "integer"
    }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 },
    damage: { type: "object", properties: { type: { type: "integer", minimum: 0 }, elementId: { type: "integer", minimum: 0 }, formula: {
      type: "string"
    }, variance: { type: "integer", minimum: 0, maximum: 100 }, critical: { type: "boolean", default: false } }, required: ["type", "elementId", "formula", "variance", "critical"] },
    traits: {
      type: "array",
      items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }, required: ["code", "dataId", "value"] }
    }
  }
}), D = (e2, t2) => `<${e2}:${t2}>`, F = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, w = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, H = {
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
}, G = (e2 = {}) => ({
  gameId: e2.gameId ?? 0,
  screenWidth: e2.screenWidth ?? 0,
  screenHeight: e2.screenHeight ?? 0,
  uiAreaWidth: e2.uiAreaWidth ?? 0,
  uiAreaHeight: e2.uiAreaHeight ?? 0,
  windowOpacity: e2.windowOpacity ?? 0,
  screenScale: e2.screenScale ?? 1,
  numberFontFilename: e2.numberFontFilename ?? "",
  mainFontFilename: e2.mainFontFilename ?? "",
  fallbackFonts: e2.fallbackFonts ?? "",
  fontSize: e2.fontSize ?? 28
}), B = (e2 = {}) => [t.makeAudioFileParams(e2.cursor), t.makeAudioFileParams(e2.ok), t.makeAudioFileParams(e2.cancel), t.makeAudioFileParams(e2.buzzer), t.makeAudioFileParams(e2.equip), t.makeAudioFileParams(e2.save), t.makeAudioFileParams(e2.load), t.makeAudioFileParams(e2.battleStart), t.makeAudioFileParams(e2.escape), t.makeAudioFileParams(e2.enemyAttack), t.makeAudioFileParams(e2.enemyDamage), t.makeAudioFileParams(e2.enemyCollapse), t.makeAudioFileParams(e2.bossCollapes1), t.makeAudioFileParams(e2.bossCollapes2), t.makeAudioFileParams(e2.actorDamage), t.makeAudioFileParams(e2.actorCollapse), t.makeAudioFileParams(e2.playRecovery), t.makeAudioFileParams(e2.playMiss), t.makeAudioFileParams(e2.playEvasion), t.makeAudioFileParams(e2.playMagicEvasion), t.makeAudioFileParams(e2.playReflection), t.makeAudioFileParams(e2.shop), t.makeAudioFileParams(e2.useItem), t.makeAudioFileParams(e2.useSkill)], U = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], q = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], V = {
  required: ["itemCategories", "menuCommands"],
  additionalProperties: false,
  type: "object",
  properties: {
    itemCategories: { type: "array", maxItems: 4, minItems: 4, items: { type: "boolean" } },
    menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } }
  }
}, j = (e2 = {}) => ({
  optAutosave: e2.optAutosave ?? true,
  optDisplayTp: e2.optDisplayTp ?? true,
  optDrawTitle: e2.optDrawTitle ?? true,
  optExtraExp: e2.optExtraExp ?? true,
  optFloorDeath: e2.optFloorDeath ?? true,
  optFollowers: e2.optFollowers ?? true,
  optKeyItemsNumber: e2.optKeyItemsNumber ?? true,
  optSideView: e2.optSideView ?? true,
  optSlipDeath: e2.optSlipDeath ?? true,
  optTransparent: e2.optTransparent ?? true,
  optMessageSkip: e2.optMessageSkip ?? true,
  optSplashScreen: e2.optSplashScreen ?? true
}), W = {
  type: "boolean"
}, Y = {
  type: "object",
  additionalProperties: false,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: W,
    optDisplayTp: W,
    optDrawTitle: W,
    optExtraExp: W,
    optFloorDeath: W,
    optFollowers: W,
    optKeyItemsNumber: W,
    optSideView: W,
    optSlipDeath: W,
    optTransparent: W,
    optMessageSkip: W,
    optSplashScreen: W
  }
}, z = (e2) => ({
  armorTypes: X(e2.armorTypes),
  elements: X(e2.elements),
  equipTypes: X(e2.equipTypes),
  weaponTypes: X(e2.weaponTypes),
  skillTypes: X(e2.skillTypes),
  variables: X(e2.variables),
  switches: X(e2.switches)
}), X = (e2) => e2 ? [...e2] : [], K = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], J = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: t.makeAudioFileParams(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), $ = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), Z = {
  type: "object",
  additionalProperties: false,
  required: ["type", "weaponImageId"],
  properties: { type: { type: "number" }, weaponImageId: { type: "number" } }
}, Q = {
  additionalProperties: false,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: { type: "integer", minimum: 0 }, iconSize: { type: "integer", minimum: 0 } }
}, ee = {
  additionalProperties: false,
  type: "object",
  required: ["actorId", "equips", "level"],
  properties: { actorId: { type: "integer" }, level: { type: "integer", minimum: 1 }, equips: { type: "array", items: {
    type: "integer"
  } } }
}, te = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }, ae = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: te, victoryMe: te, gameoverMe: te, titleBgm: te, defeatMe: te, sounds: {
    type: "array",
    items: te,
    minItems: 24,
    maxItems: 24
  } }
}, re = { type: "object", additionalProperties: false, required: ["magicSkills", "battleSystem"], properties: { magicSkills: {
  type: "array",
  items: { type: "number" },
  minItems: 0,
  uniqueItems: true
}, battleSystem: { type: "number" } } }, oe = { additionalProperties: false, type: "object", required: ["startMapId", "startX", "startY", "partyMembersArray"], properties: {
  startMapId: { type: "integer", minimum: 0 },
  startX: { type: "integer", minimum: 0 },
  startY: { type: "integer", minimum: 0 },
  partyMembersArray: { type: "array", items: { type: "integer", minimum: 0 } }
} }, ie = {
  additionalProperties: false,
  type: "object",
  required: ["title1Name", "title2Name"],
  properties: { title1Name: { type: "string" }, title2Name: { type: "string" } }
}, se = {
  type: "object",
  additionalProperties: false,
  required: ["locale", "versionId", "windowTone"],
  properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
    type: "array",
    items: { type: "number" },
    minItems: 4,
    maxItems: 4
  } }
}, ne = { type: "array", items: { type: "string" } }, me = {
  additionalProperties: false,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: ne,
    skillTypes: ne,
    elements: ne,
    variables: ne,
    equipTypes: ne,
    switches: ne,
    armorTypes: ne
  }
}, pe = { type: "string" }, ce = { type: "string", nullable: true }, de = { type: "string" }, le = {
  required: ["terms", "currencyUnit", "gameTitle"],
  additionalProperties: false,
  type: "object",
  properties: { currencyUnit: { type: "string" }, gameTitle: { type: "string" }, terms: {
    additionalProperties: false,
    type: "object",
    required: ["messages", "commands", "basic", "params"],
    properties: { messages: {
      type: "object",
      additionalProperties: false,
      required: ["actionFailure", "actorDamage", "actorNoDamage", "actorRecovery", "actorGain", "actorLoss", "actorDrain", "alwaysDash", "bgmVolume", "bgsVolume", "commandRemember", "criticalToActor", "criticalToEnemy", "counterAttack", "debuffAdd", "defeat", "enemyDamage", "enemyNoDamage", "enemyRecovery", "enemyGain", "enemyLoss", "enemyDrain", "evasion", "expNext", "expTotal", "escapeFailure", "escapeStart", "file", "loadMessage", "meVolume", "magicEvasion", "magicReflection", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "partyName", "preemptive", "saveMessage", "seVolume", "substitute", "touchUI", "victory", "useItem"],
      properties: {
        actionFailure: de,
        actorDamage: de,
        actorNoDamage: de,
        actorRecovery: de,
        actorGain: de,
        actorLoss: de,
        actorDrain: de,
        alwaysDash: de,
        bgmVolume: de,
        bgsVolume: de,
        commandRemember: de,
        criticalToActor: de,
        criticalToEnemy: de,
        counterAttack: de,
        debuffAdd: de,
        defeat: de,
        enemyDamage: de,
        enemyNoDamage: de,
        enemyRecovery: de,
        enemyGain: de,
        enemyLoss: de,
        enemyDrain: de,
        evasion: de,
        expNext: de,
        expTotal: de,
        escapeFailure: de,
        escapeStart: de,
        file: de,
        loadMessage: de,
        meVolume: de,
        magicEvasion: de,
        magicReflection: de,
        obtainExp: de,
        obtainGold: de,
        obtainItem: de,
        obtainSkill: de,
        partyName: de,
        preemptive: de,
        saveMessage: de,
        seVolume: de,
        substitute: de,
        touchUI: de,
        victory: de,
        useItem: de,
        buffAdd: de,
        buffRemove: de,
        actorNoHit: de,
        enemyNoHit: de,
        autosave: de,
        emerge: de,
        levelUp: de,
        possession: de,
        surprise: de
      }
    }, commands: {
      type: "array",
      items: [pe, pe, pe, pe, pe, pe, pe, pe, pe, pe, pe, pe, pe, pe, pe, pe, pe, pe, pe, pe, ce, pe, pe, ce, pe, pe],
      minItems: 26,
      maxItems: 26
    }, basic: { type: "array", items: { type: "string" }, minItems: 10, maxItems: 10 }, params: {
      type: "array",
      items: { type: "string", minLength: 1 },
      minItems: 10,
      maxItems: 10,
      uniqueItems: true
    } }
  } }
}, ue = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: ee },
    testTroopId: { type: "integer", minimum: 0 },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
    editMapId: { type: "integer", minimum: 0 },
    battlerHue: { type: "integer", minimum: 0 },
    battlerName: { type: "string" },
    editor: { additionalProperties: false, type: "object", required: ["messageWidth1", "messageWidth2", "jsonFormatLevel"], properties: { messageWidth1: {
      type: "integer",
      minimum: 0,
      maximum: 1e3
    }, messageWidth2: { type: "integer", minimum: 0, maximum: 1e3 }, jsonFormatLevel: { type: "integer", minimum: 0, maximum: 4 } } }
  }
}, ye = {
  additionalProperties: false,
  type: "object",
  required: ["characterIndex", "characterName", "bgm", "startMapId", "startX", "startY"],
  properties: {
    characterIndex: { type: "integer", minimum: 0, maximum: 7 },
    characterName: {
      type: "string",
      minLength: 1
    },
    bgm: { type: "object", additionalProperties: false, required: ["name", "volume", "pitch", "pan"], properties: {
      name: { type: "string" },
      volume: { type: "integer", minimum: 0, maximum: 100 },
      pitch: { type: "integer", minimum: 50, maximum: 150 },
      pan: { type: "integer", minimum: -100, maximum: 100 }
    } },
    startMapId: { type: "integer", minimum: 0 },
    startX: { type: "integer", minimum: 0, maximum: 5e3 },
    startY: { type: "integer", minimum: 0, maximum: 5e3 }
  }
}, xe = { additionalProperties: false, required: ["airship", "boat", "ship", "advanced", "attackMotions"], type: "object", properties: {
  airship: ye,
  boat: ye,
  ship: ye,
  advanced: {
    type: "object",
    properties: {
      gameId: { type: "integer" },
      screenWidth: { type: "integer" },
      screenHeight: { type: "integer" },
      uiAreaWidth: { type: "integer" },
      uiAreaHeight: {
        type: "integer"
      },
      windowOpacity: { type: "integer" },
      screenScale: { type: "number" },
      numberFontFilename: { type: "string" },
      mainFontFilename: { type: "string" },
      fallbackFonts: { type: "string" },
      fontSize: { type: "integer" }
    },
    required: ["gameId", "screenWidth", "screenHeight", "uiAreaWidth", "uiAreaHeight", "windowOpacity", "screenScale", "numberFontFilename", "mainFontFilename", "fallbackFonts", "fontSize"],
    additionalProperties: false
  },
  attackMotions: { type: "array", items: Z }
} }, ge = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), {
  required: [],
  properties: {}
}), Ee = new e({ strict: true }), Ie = ((e2) => {
  const t2 = ge(e2);
  return {
    additionalProperties: false,
    type: "object",
    required: Array.from(new Set(t2.required)),
    properties: t2.properties
  };
})([xe, ae, re, V, Y, oe, Q, se, me, le, ie, ue]), Ae = Ee.compile(Ie), Te = Ee.compile(ee);
Ee.compile(Z);
const be = Ee.compile(Q), _e = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], Se = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], Ce = (e2, t2) => "string" == typeof e2 ? e2 : t2, Ne = (e2) => {
  return { basic: _e(e2.basic ?? {}), commands: (a2 = e2.commands ?? {}, Se(a2, "")), params: K(e2.params ?? {}), messages: (t2 = e2.messages ?? {}, {
    actionFailure: Ce(t2.actionFailure, "Action failed."),
    actorDamage: Ce(t2.actorDamage, "%1 took %2 damage."),
    actorRecovery: Ce(t2.actorRecovery, "%1 recovered %2 HP."),
    actorGain: Ce(t2.actorGain, "%1 gained %2."),
    actorLoss: Ce(t2.actorLoss, "%1 lost %2."),
    actorDrain: Ce(t2.actorDrain, "%1 drained %2 HP."),
    actorNoDamage: Ce(t2.actorNoDamage, "%1 was not damaged."),
    actorNoHit: Ce(t2.actorNoHit, "%1 was not hit."),
    alwaysDash: Ce(t2.alwaysDash, "Always dash."),
    bgmVolume: Ce(t2.bgmVolume, "BGM volume"),
    bgsVolume: Ce(t2.bgsVolume, "BGS volume"),
    commandRemember: Ce(t2.commandRemember, "Command remember."),
    criticalToActor: Ce(t2.criticalToActor, "%1 dealt %2 damage to %3."),
    criticalToEnemy: Ce(t2.criticalToEnemy, "%1 dealt %2 damage to %3."),
    counterAttack: Ce(t2.counterAttack, "%1 countered!"),
    debuffAdd: Ce(t2.debuffAdd, "%1's %2 was lowered."),
    defeat: Ce(t2.defeat, "Defeat."),
    enemyDamage: Ce(t2.enemyDamage, "%1 took %2 damage."),
    enemyDrain: Ce(t2.enemyDrain, "%1 drained %2 HP."),
    enemyGain: Ce(t2.enemyGain, "%1 gained %2."),
    enemyLoss: Ce(t2.enemyLoss, "%1 lost %2."),
    enemyNoDamage: Ce(t2.enemyNoDamage, "%1 was not damaged."),
    enemyNoHit: Ce(t2.enemyNoHit, "%1 was not hit."),
    enemyRecovery: Ce(t2.enemyRecovery, "%1 recovered %2 HP."),
    evasion: Ce(t2.evasion, "%1 evaded the attack!"),
    autosave: Ce(t2.autosave, "Autosave"),
    escapeFailure: Ce(t2.escapeFailure, "Escape failed."),
    escapeStart: Ce(t2.escapeStart, "%1 started to escape!"),
    emerge: Ce(t2.emerge, "%1 appeared!"),
    expNext: Ce(t2.expNext, "Next level in %1 EXP."),
    expTotal: Ce(t2.expTotal, "Total EXP: %1"),
    file: Ce(t2.file, "File"),
    buffAdd: Ce(t2.buffAdd, "%1's %2 was raised."),
    buffRemove: Ce(t2.buffRemove, "%1's %2 was lowered."),
    obtainExp: Ce(t2.obtainExp, "%1 EXP obtained."),
    obtainGold: Ce(t2.obtainGold, "%1 gold obtained."),
    obtainItem: Ce(t2.obtainItem, "%1 obtained %2."),
    obtainSkill: Ce(t2.obtainSkill, "%1 learned %2."),
    levelUp: Ce(t2.levelUp, "%1 leveled up!"),
    partyName: Ce(t2.partyName, "Party"),
    loadMessage: Ce(t2.loadMessage, "Load %1?"),
    meVolume: Ce(t2.meVolume, "ME volume"),
    possession: Ce(t2.possession, "Possession"),
    preemptive: Ce(t2.preemptive, "%1 attacked first!"),
    saveMessage: Ce(t2.saveMessage, "Save %1?"),
    seVolume: Ce(t2.seVolume, "SE volume"),
    magicEvasion: Ce(t2.magicEvasion, "%1 evaded the magic!"),
    magicReflection: Ce(t2.magicReflection, "%1 reflected the magic!"),
    substitute: Ce(t2.substitute, "%1 took the hit!"),
    surprise: Ce(t2.surprise, "%1 surprised the enemy!"),
    touchUI: Ce(t2.touchUI, "Touch UI"),
    useItem: Ce(t2.useItem, "%1 used %2."),
    victory: Ce(t2.victory, "Victory!")
  }) };
  var t2, a2;
}, fe = (e2) => e2 ? [...e2] : [], Re = (e2) => ((e3) => be(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Oe = (e2, t2) => e2 ? e2.map(t2) : [], ve = (e2) => ((e3) => Te(e3))(e2) ? { actorId: e2.actorId, equips: fe(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, he = (e2, a2, r2 = 0) => ({ code: e2, parameters: [t.makeAudioFileParams(a2)], indent: r2 }), ke = (e2) => [e2.eventId ?? 0], Me = (e2) => [e2.min, e2.max, e2.value], Pe = (e2) => [e2], Le = (e2, t2 = 0) => ({
  code: 108,
  indent: t2,
  parameters: Pe(e2)
}), De = (e2, t2 = 0) => ({ code: 408, indent: t2, parameters: Pe(e2) }), Fe = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], we = (e2, t2 = 0) => ({
  code: 355,
  indent: t2,
  parameters: [e2]
}), He = (e2, t2 = 0) => ({ code: 655, indent: t2, parameters: [e2] }), Ge = {
  HP: 0,
  MP: 1,
  MHP: 2,
  MMP: 3,
  ATK: 4,
  DEF: 5,
  MAT: 6,
  MDF: 7,
  AGI: 8,
  LUK: 9,
  TP: 10
}, Be = (e2) => [...e2], Ue = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, qe = new e({ strict: true }), Ve = qe.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer", minimum: 0 }, { type: "string" }] } },
  additionalProperties: false
}), je = qe.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "boolean" }]
} }, required: ["code", "indent", "parameters"] }), We = qe.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
  type: "integer",
  enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
} }, additionalProperties: false }), Ye = qe.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), ze = (e2) => Ye(e2), Xe = qe.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), Ke = qe.compile({ type: "object", properties: {
  code: { type: "number", const: 102 },
  indent: { type: "integer", minimum: 0 },
  parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, { type: "integer" }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }] }
}, required: ["code", "indent", "parameters"] }), Je = qe.compile({ type: "object", properties: { code: { type: "number", const: 402 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } }, required: ["code", "indent", "parameters"] }), $e = qe.compile({
  type: "object",
  properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "number" }] } },
  required: ["code", "indent", "parameters"]
}), Ze = qe.compile({ type: "object", required: ["code", "parameters", "indent"], properties: { code: { type: "integer", const: 101 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", items: [{ type: "string" }, { type: "integer", minimum: 0, maximum: 7 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, {
  type: "string"
}], minItems: 5, maxItems: 5 } } }), Qe = (e2, t2) => ({ type: "array", items: t2, ...et(e2), ...tt(e2.default) }), et = (e2) => ({
  ..."string" == typeof e2.text ? { title: e2.text } : {},
  ..."string" == typeof e2.desc ? { description: e2.desc } : {}
}), tt = (e2) => void 0 !== e2 ? { default: e2 } : {}, at = (e2) => void 0 === e2 || 0 === e2, rt = (e2) => Qe(e2, { type: "string" }), ot = (e2) => {
  switch (e2.kind) {
    case "string":
    case "multiline_string":
      return ((e3) => ({ type: "string", ...et(e3), ...tt(e3.default) }))(e2);
    case "file":
    case "combo":
      return ((e3) => ({ type: "string", ...tt(e3.default), ...et(e3) }))(e2);
    case "select":
      return ((e3) => ({ type: "string", ...tt(e3.default), ...et(e3), ...e3.options ? { enum: e3.options.map((e4) => e4.value) } : {} }))(e2);
    case "file[]":
    case "string[]":
    case "multiline_string[]":
      return rt(e2);
    case "number[]":
      return ((e3) => ({ type: "array", items: { type: at(e3.decimals) ? "integer" : "number" }, ...tt(e3.default), ...et(e3) }))(e2);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return ((e3) => Qe(e3, { type: "integer" }))(e2);
    case "number":
      return ((e3) => ({
        type: at(e3.decimals) ? "integer" : "number",
        ...tt(e3.default),
        ...et(e3)
      }))(e2);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ((e3) => ({
        type: "integer",
        ...tt(e3.default),
        ...et(e3)
      }))(e2);
    case "boolean":
      return ((e3) => ({ type: "boolean", ...tt(e3.default), ...et(e3) }))(e2);
    case "struct":
      return { $ref: `#/definitions/${(t2 = e2).struct}`, ...et(t2) };
    default:
      return {};
  }
  var t2;
}, it = (e2, t2) => Object.entries(t2).reduce((t3, [a2, r2]) => {
  if (a2 in e2) {
    const o2 = e2[a2];
    if ("string" == typeof o2) return { ...t3, [a2]: r2(o2) };
  }
  return t3;
}, {}), st = (e2, t2, a2, r2) => ({
  default: t2,
  ...it(a2, r2),
  kind: e2
}), nt = (e2, t2, a2) => ({ default: [], ...it(t2, a2), kind: e2 }), mt = "help", pt = "kind", ct = "text", dt = "struct", lt = (e2) => {
  const t2 = JSON.parse(e2);
  return Array.isArray(t2) ? t2.map(ut) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, ut(t3)])) : t2;
}, ut = (e2) => {
  if ("string" != typeof e2) return e2;
  try {
    const t2 = JSON.parse(e2);
    return Array.isArray(t2) ? t2.map(ut) : "object" == typeof t2 && null !== t2 ? Object.fromEntries(Object.entries(t2).map(([e3, t3]) => [e3, ut(t3)])) : t2;
  } catch {
    return e2;
  }
}, yt = (e2) => {
  if (pt in e2.attr) {
    const t2 = _t[e2.attr.kind];
    if (t2) return t2(e2);
  }
  return st("any", "", e2.attr, Et);
}, xt = (e2) => e2, gt = (e2) => e2.replace("[", "").replace("]", "").split(",").map((e3) => parseFloat(e3.replaceAll('"', "").trim())).filter((e3) => !isNaN(e3)), Et = {
  default: xt,
  text: xt,
  desc: xt,
  parent: xt
}, It = (e2) => st("string", "", e2.attr, Et), At = (e2) => {
  const t2 = { default: (e3) => lt(e3), text: xt, desc: xt, parent: xt };
  return nt("string[]", e2.attr, t2);
}, Tt = (e2, t2) => {
  const a2 = {
    default: gt,
    text: xt,
    desc: xt,
    parent: xt
  };
  return nt(t2, e2.attr, a2);
}, bt = (e2, t2) => {
  const a2 = { default: (e3) => parseInt(e3, 10), text: xt, desc: xt, parent: xt };
  return st(t2, 0, e2.attr, a2);
}, _t = {
  number: (e2) => ((e3) => {
    const t2 = {
      default: (e4) => parseFloat(e4),
      text: xt,
      desc: xt,
      decimals: (e4) => parseInt(e4, 10),
      min: (e4) => parseFloat(e4),
      max: (e4) => parseFloat(e4),
      parent: xt
    };
    return st("number", 0, e3.attr, t2);
  })(e2),
  "number[]": (e2) => {
    const t2 = { default: gt, text: xt, desc: xt, decimals: (e3) => parseInt(e3, 10), min: (e3) => parseFloat(e3), max: (e3) => parseFloat(e3), parent: xt };
    return nt("number[]", e2.attr, t2);
  },
  string: It,
  "string[]": At,
  multiline_string: It,
  "multiline_string[]": At,
  combo: (e2) => {
    var _a;
    const t2 = ((_a = e2.options) == null ? void 0 : _a.map((e3) => e3.option)) ?? [];
    return { ...st("combo", "", e2.attr, Et), options: t2 };
  },
  select: (e2) => {
    var _a;
    const t2 = ((_a = e2.options) == null ? void 0 : _a.map((e3) => ({ option: e3.option, value: e3.value }))) ?? [];
    return { ...st("select", "", e2.attr, Et), options: t2 };
  },
  actor: (e2) => bt(e2, "actor"),
  "actor[]": (e2) => Tt(e2, "actor[]"),
  class: (e2) => bt(e2, "class"),
  "class[]": (e2) => Tt(e2, "class[]"),
  skill: (e2) => bt(e2, "skill"),
  "skill[]": (e2) => Tt(e2, "skill[]"),
  item: (e2) => bt(e2, "item"),
  "item[]": (e2) => Tt(e2, "item[]"),
  weapon: (e2) => bt(e2, "weapon"),
  "weapon[]": (e2) => Tt(e2, "weapon[]"),
  armor: (e2) => bt(e2, "armor"),
  "armor[]": (e2) => Tt(e2, "armor[]"),
  state: (e2) => bt(e2, "state"),
  "state[]": (e2) => Tt(e2, "state[]"),
  enemy: (e2) => bt(e2, "enemy"),
  "enemy[]": (e2) => Tt(e2, "enemy[]"),
  common_event: (e2) => bt(e2, "common_event"),
  "common_event[]": (e2) => Tt(e2, "common_event[]"),
  switch: (e2) => bt(e2, "switch"),
  "switch[]": (e2) => Tt(e2, "switch[]"),
  variable: (e2) => bt(e2, "variable"),
  "variable[]": (e2) => Tt(e2, "variable[]"),
  troop: (e2) => bt(e2, "troop"),
  "troop[]": (e2) => Tt(e2, "troop[]"),
  boolean: (e2) => {
    const t2 = {
      default: (e3) => "true" === e3,
      text: xt,
      desc: xt,
      on: xt,
      off: xt,
      parent: xt
    };
    return st("boolean", true, e2.attr, t2);
  },
  file: (e2) => {
    const t2 = { default: xt, text: xt, desc: xt, parent: xt, dir: xt };
    return { dir: "", ...st("file", "", e2.attr, t2) };
  },
  "file[]": (e2) => {
    const t2 = { default: (e3) => lt(e3), text: xt, desc: xt, parent: xt, dir: xt };
    return { dir: "", ...nt("file[]", e2.attr, t2) };
  }
}, St = "BODY", Ct = "STRUCT", Nt = "NONE", ft = (e2, t2) => {
  const a2 = e2.lines.length > 0 ? Ot(e2) : e2, r2 = t2[1] || void 0;
  return { ...a2, structName: r2, blockType: r2 ? Ct : "INVALID", locale: t2[2], lines: [] };
}, Rt = (e2) => ({
  ...e2.lines.length > 0 ? Ot(e2) : e2,
  blockType: St,
  structName: void 0,
  locale: void 0,
  lines: []
}), Ot = (e2) => e2.blockType === St ? { ...e2, bodies: e2.bodies.concat([{ lines: [...e2.lines] }]), lines: [], blockType: Nt } : e2.structName && e2.blockType === Ct ? {
  ...e2,
  structs: e2.structs.concat([{ struct: e2.structName, locale: e2.locale, lines: [...e2.lines] }]),
  blockType: Nt,
  structName: void 0,
  locale: void 0,
  lines: []
} : {
  ...e2,
  blockType: Nt,
  structName: void 0,
  lines: []
}, vt = (e2) => e2.currentOption ? { items: e2.items.concat({ option: e2.currentOption, value: e2.currentOption }) } : e2, ht = (e2) => ({
  ..."string" == typeof e2.desc ? { desc: e2.desc } : {},
  ..."string" == typeof e2.text ? { text: e2.text } : {}
}), kt = (e2) => {
  const t2 = Mt(e2), a2 = Lt(t2);
  return Pt(a2);
}, Mt = (e2) => {
  if (e2.currentParam && e2.currentOption) {
    const t2 = e2.currentParam.attr.kind;
    if ("select" === t2 || "combo" === t2) return { ...e2, currentParam: { ...e2.currentParam, options: vt(e2.currentOption).items } };
  }
  return e2;
}, Pt = (e2) => e2.currentParam ? {
  ...e2,
  params: [...e2.params, e2.currentParam],
  currentParam: null,
  currentContext: null
} : e2, Lt = (e2) => {
  if (e2.currentCommand) {
    const t2 = e2.currentParam ? [...e2.currentCommand.args, e2.currentParam] : e2.currentCommand.args, a2 = { ...ht(e2.currentCommand), command: e2.currentCommand.command, args: t2 };
    return {
      ...e2,
      commands: [...e2.commands, a2],
      currentCommand: null,
      currentParam: null,
      currentContext: null,
      currentOption: null
    };
  }
  return e2;
}, Dt = (e2, t2) => {
  const a2 = e2.lines.reduce((e3, a3) => {
    const r2 = a3.trim().replace(/^\*\s?/, "");
    if (!r2.startsWith("@")) return e3.currentContext === mt ? { ...e3, helpLines: e3.helpLines.concat(r2) } : e3;
    const [o2, ...i2] = r2.slice(1).split(" "), s2 = i2.join(" ").trim(), n2 = t2[o2];
    return n2 ? n2(e3, s2) : e3;
  }, wt());
  return kt(a2);
}, Ft = (e2, t2) => {
  const a2 = ((e3) => {
    const t3 = e3.split("\n"), a3 = {
      structs: [],
      bodies: [],
      structName: void 0,
      locale: void 0,
      lines: [],
      blockType: Nt
    }, r3 = t3.reduce((e4, t4) => {
      const a4 = t4.trim(), r4 = a4.match(/^\/\*~struct~([A-Za-z0-9_]+)(?::([A-Za-z0-9_-]+))?/);
      return r4 ? ft(e4, r4) : "/*:" === a4 ? Rt(e4) : "*/" === a4 ? e4.lines.length > 0 ? Ot(e4) : e4 : { ...e4, lines: e4.lines.concat([a4]) };
    }, a3);
    return { structs: r3.structs, bodies: r3.bodies };
  })(e2), r2 = a2.structs.map((e3) => ((e4) => {
    const t3 = Dt(e4, Bt);
    return { name: e4.struct, params: t3.params };
  })(e3)), o2 = ((e3) => {
    if (0 !== e3.bodies.length) return e3.bodies[0];
  })(a2);
  if (!o2) return {
    params: [],
    commands: [],
    meta: {},
    helpLines: [],
    structs: r2
  };
  const i2 = Dt(o2, t2);
  return { params: i2.params, commands: i2.commands, meta: i2.meta, helpLines: i2.helpLines, structs: r2 };
}, wt = () => ({
  helpLines: [],
  params: [],
  commands: [],
  currentParam: null,
  currentCommand: null,
  currentContext: null,
  currentOption: null,
  dependencies: { base: [], orderBefore: [], orderAfter: [] },
  meta: {}
}), Ht = (e2, t2, a2) => e2.currentParam && !(t2 in e2.currentParam.attr) ? {
  ...e2,
  currentParam: { ...e2.currentParam, attr: { ...e2.currentParam.attr, [t2]: a2 } }
} : e2, Gt = (e2, t2, a2) => ({ ...e2, meta: { [t2]: a2, ...e2.meta } }), Bt = {
  param: (e2, t2) => {
    const a2 = kt(e2);
    return a2.params.some((e3) => e3.name === t2) ? a2 : { ...a2, currentContext: "param", currentParam: { name: t2, attr: {} } };
  },
  text: (e2, t2) => e2.currentParam ? Ht(e2, ct, t2) : e2.currentCommand && !(ct in e2.currentCommand) ? { ...e2, currentCommand: {
    ...ht(e2.currentCommand),
    command: e2.currentCommand.command,
    args: e2.currentCommand.args,
    [ct]: t2
  } } : e2,
  desc: (e2, t2) => e2.currentParam ? Ht(e2, "desc", t2) : e2.currentCommand ? { ...e2, currentCommand: { ...e2.currentCommand, desc: t2 } } : e2,
  command: (e2, t2) => {
    const a2 = kt(e2);
    return a2.commands.some((e3) => e3.command === t2) ? a2 : { ...a2, currentCommand: { command: t2, args: [] }, currentParam: null };
  },
  arg: (e2, t2) => {
    if (!e2.currentCommand) return e2;
    if (e2.currentParam) {
      const a2 = {
        ...ht(e2.currentCommand),
        command: e2.currentCommand.command,
        args: e2.currentCommand.args.concat(e2.currentParam)
      };
      return {
        ...e2,
        commands: e2.commands,
        currentCommand: a2,
        currentContext: "arg",
        currentParam: { name: t2, attr: {} }
      };
    }
    return { ...e2, currentParam: { name: t2, attr: {} } };
  },
  help: (e2) => ({ ...kt(e2), currentContext: mt }),
  option: (e2, t2) => {
    if (!e2.currentParam) return e2;
    const a2 = ((e3, t3) => e3.currentOption ? { items: e3.items.concat({ option: e3.currentOption, value: e3.currentOption }), currentOption: t3 } : { items: e3.items, currentOption: t3 })(e2.currentOption ?? {
      items: []
    }, t2);
    return { ...e2, currentOption: a2 };
  },
  value: (e2, t2) => {
    if (!e2.currentOption) return e2;
    const a2 = ((e3, t3) => e3.currentOption ? { items: e3.items.concat({ option: e3.currentOption, value: t3 }) } : {
      items: e3.items
    })(e2.currentOption, t2);
    return { ...e2, currentOption: a2 };
  },
  type: (e2, t2) => {
    if (((e3) => e3.endsWith(">") && e3.startsWith("struct<"))(t2)) {
      const a2 = t2.slice(7, -1), r2 = Ht(e2, dt, a2);
      return Ht(r2, pt, dt);
    }
    return e2.currentParam ? Ht(e2, pt, t2) : e2;
  },
  default: (e2, t2) => Ht(e2, "default", t2),
  on: (e2, t2) => Ht(e2, "on", t2),
  off: (e2, t2) => Ht(e2, "off", t2),
  min: (e2, t2) => Ht(e2, "min", t2),
  max: (e2, t2) => Ht(e2, "max", t2),
  base: (e2, t2) => {
    return { ...e2, dependencies: (a2 = e2.dependencies, r2 = t2, { orderAfter: a2.orderAfter, orderBefore: a2.orderBefore, base: a2.base.concat(r2) }) };
    var a2, r2;
  },
  orderAfter: (e2, t2) => {
    return { ...e2, dependencies: (a2 = e2.dependencies, r2 = t2, { base: a2.base, orderBefore: a2.orderBefore, orderAfter: a2.orderAfter.concat(r2) }) };
    var a2, r2;
  },
  orderBefore: (e2, t2) => {
    return {
      ...e2,
      dependencies: (a2 = e2.dependencies, r2 = t2, { base: a2.base, orderAfter: a2.orderAfter, orderBefore: a2.orderBefore.concat(r2) })
    };
    var a2, r2;
  },
  author: (e2, t2) => Gt(e2, "author", t2),
  plugindesc: (e2, t2) => Gt(e2, "plugindesc", t2),
  url: (e2, t2) => Gt(e2, "url", t2)
}, Ut = (e2) => qt(((e3) => Ft(e3, Bt))(e2)), qt = (e2) => ({
  target: "MZ",
  meta: e2.meta,
  commands: jt(e2.commands),
  params: Vt(e2.params)
}), Vt = (e2) => e2.reduce((e3, t2) => ({ [t2.name]: yt(t2), ...e3 }), {}), jt = (e2) => e2.reduce((e3, t2) => {
  const a2 = { desc: t2.desc, text: t2.text, args: Vt(t2.args) };
  return { [t2.command]: a2, ...e3 };
}, {});
exports.ABORT_BATTLE = 340, exports.BATTLE_PROCESSING = 301, exports.CHANGE_ACTOR_IMAGES = 322, exports.CHANGE_ARMORS = 128, exports.CHANGE_BATTLE_BACKGROUND = 283, exports.CHANGE_BATTLE_BGM = 132, exports.CHANGE_CLASS = 321, exports.CHANGE_DEFEAT_ME = 139, exports.CHANGE_ENCOUNTER = 136, exports.CHANGE_ENEMY_HP = 331, exports.CHANGE_ENEMY_MP = 332, exports.CHANGE_ENEMY_STATE = 333, exports.CHANGE_ENEMY_TP = 342, exports.CHANGE_EXP = 315, exports.CHANGE_FORMATION_ACCESS = 137, exports.CHANGE_GOLD = 125, exports.CHANGE_HP = 311, exports.CHANGE_ITEMS = 126, exports.CHANGE_MENU_ACCESS = 135, exports.CHANGE_MP = 312, exports.CHANGE_NAME = 320, exports.CHANGE_NICKNAME = 324, exports.CHANGE_PARALLAX = 284, exports.CHANGE_PARTY_MEMBER = 129, exports.CHANGE_PLAYER_FOLLOWERS = 216, exports.CHANGE_PROFILE = 325, exports.CHANGE_SAVE_ACCESS = 134, exports.CHANGE_TILESET = 282, exports.CHANGE_TP = 313, exports.CHANGE_TRANSPARENCY = 211, exports.CHANGE_VEHICLE_BGM = 140, exports.CHANGE_VEHICLE_IMAGE = 323, exports.CHANGE_VICTORY_ME = 133, exports.CHANGE_WEAPONS = 127, exports.CHANGE_WINDOW_COLOR = 138, exports.COMMENT_BODY = 408, exports.COMMENT_HEAD = 108, exports.COMMON_EVENT = 117, exports.CONDITIONAL_BRANCH = 111, exports.CONDITIONAL_BRANCH_ELSE = 411, exports.CONTROL_SELF_SWITCH = 123, exports.CONTROL_SWITCHES = 121, exports.CONTROL_TIMER = 124, exports.CONTROL_VARIABLES = 122, exports.DEFAULT_DAMAGE_LABELS = c, exports.DEFAULT_GLOBAL_LABELS = H, exports.DEFAULT_ITEM_LABELS = { title: "アイテム", options: { consumable: "消耗品" } }, exports.DEFAULT_SKILL_LABELS = { title: "スキル", options: {
  requiredWeaponTypeId1: "必要武器タイプ1",
  requiredWeaponTypeId2: "必要武器タイプ2",
  mpCost: "MP消費",
  tpCost: "TP消費"
} }, exports.DEFAULT_SYSTEM_LABELS_BOOLEAN = { title: "オプション", options: {
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
} }, exports.DEFAULT_SYSTEM_LABELS_DATA_TYPES = { title: "タイプ", format: "{name}", options: {
  elements: "属性",
  equipTypes: "装備タイプ",
  skillTypes: "スキルタイプ",
  weaponTypes: "武器タイプ",
  armorTypes: "防具タイプ",
  switches: "スイッチ",
  variables: "変数"
} }, exports.DEFAULT_USABLE_ITEM_LABELS = { title: "", options: { scope: "範囲", speed: "速度補正", successRate: "成功率" } }, exports.ENEMY_APPEAR = 335, exports.ENEMY_RECOVER_ALL = 334, exports.ENEMY_TRANSFORM = 336, exports.ERASE_EVENT = 214, exports.ERASE_PICTURE = 235, exports.EXIT_EVENT_PROCESSING = 115, exports.FADEIN_SCREEN = 222, exports.FADEOUT_BGM = 242, exports.FADEOUT_BGS = 246, exports.FADEOUT_SCREEN = 221, exports.FILENAME_ACTORS = "Actors.json", exports.FILENAME_ANIMATIONS = "Animations.json", exports.FILENAME_ARMORS = "Armors.json", exports.FILENAME_CLASSES = "Classes.json", exports.FILENAME_COMMON_EVENTS = "CommonEvents.json", exports.FILENAME_ENEMIES = "Enemies.json", exports.FILENAME_ITEMS = "Items.json", exports.FILENAME_MAP_INFOS = "MapInfos.json", exports.FILENAME_SKILLS = "Skills.json", exports.FILENAME_STATES = "States.json", exports.FILENAME_SYSTEM = "System.json", exports.FILENAME_TILESET = "Tilesets.json", exports.FILENAME_TROOPS = "Troops.json", exports.FILENAME_WEAPONS = "Weapons.json", exports.FLASH_SCREEN = 224, exports.FOLDER_AUDIO = "audio", exports.FOLDER_AUDIO_BGM = "bgm", exports.FOLDER_AUDIO_BGS = "bgs", exports.FOLDER_AUDIO_ME = "me", exports.FOLDER_AUDIO_SE = "se", exports.FOLDER_DATA = "data", exports.FOLDER_IMG = "img", exports.FOLDER_IMG_BATTLEBACK1 = "battlebacks1", exports.FOLDER_IMG_BATTLEBACK2 = "battlebacks2", exports.FOLDER_IMG_CHACTERS = "characters", exports.FOLDER_IMG_ENEMIES = "enemies", exports.FOLDER_IMG_FACES = "faces", exports.FOLDER_IMG_PARALLACES = "parallaxes", exports.FOLDER_IMG_PICTURES = "pictures", exports.FOLDER_IMG_SV_ACTORS = "sv_actors", exports.FOLDER_IMG_SV_ENEMIES = "sv_enemies", exports.FOLDER_IMG_SYSTEM = "system", exports.FOLDER_IMG_TILESETS = "tilesets", exports.FOLDER_IMG_TITLES1 = "titles1", exports.FOLDER_IMG_TITLES2 = "titles2", exports.FOLDER_JS = "js", exports.FORCE_ACTION = 339, exports.GAME_OVER = 353, exports.GATHER_FOLLOWERS = 217, exports.GET_LOCATION_INFO = 285, exports.GET_ONOFF_VEHICLE = 206, exports.HITTYPE_CERTAIN = 0, exports.HITTYPE_MAGICAL = 2, exports.HITTYPE_PHYSICAL = 1, exports.INPUT_NUMBER = 103, exports.LABEL = 118, exports.LABELS_DATA_WEAPON = { title: "武器", options: { weaponTypeId: "武器タイプID" } }, exports.LABELS_SYSTEM_BATTLER_PARAMS = { title: "能力値", options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" } }, exports.LABELS_SYSTEM_GAME_COMMANDS = { title: "コマンド", options: {
  item: "アイテム",
  skill: "スキル",
  equip: "装備",
  status: "ステータス",
  formation: "編成",
  options: "オプション",
  save: "セーブ",
  gameEnd: "ゲーム終了",
  armor: "防具",
  weapon: "武器",
  newGame: "ニューゲーム",
  attack: "攻撃",
  guard: "防御",
  escape: "逃げる",
  fight: "戦う",
  buy: "買う",
  sell: "売る",
  cancel: "キャンセル",
  clear: "クリア",
  continue_: "続きから",
  equip2: "装備2",
  keyItem: "大事なもの",
  optimize: "最強装備",
  toTitle: "タイトルへ戻る"
} }, exports.LABEL_JUMP = 119, exports.LABEL_SET_DATA = p, exports.LABEL_SET_ITEM_EFFECT = S, exports.LABEL_SET_TRAIT = E, exports.LOOP = 112, exports.LOOP_BREAK = 113, exports.MODULE_DATA = "data", exports.MOVE_PICTURE = 232, exports.NAME_INPUT_PROCESSING = 303, exports.NO_OPERATION = 0, exports.OPEN_MENU_SCREEN = 351, exports.OPEN_SAVE_SCREEN = 352, exports.OPERAND_CONSTANT = 0, exports.OPERAND_GAMEDATA = 3, exports.OPERAND_RANDOM = 2, exports.OPERAND_SCRIPT = 4, exports.OPERAND_VARIABLE = 1, exports.PLAY_BGM = 241, exports.PLAY_BGS = 245, exports.PLAY_ME = 249, exports.PLAY_MOVIE = 261, exports.PLAY_SE = 250, exports.PLUGIN_COMMAND_MV = 356, exports.PLUGIN_COMMAND_MZ = 357, exports.RECOVER_ALL = 314, exports.RESUME_BGM = 244, exports.RETURN_TO_TITLE_SCREEN = 354, exports.ROTATE_PICTURE = 233, exports.ROUTE_CHANGE_BLEND_MODE = 43, exports.ROUTE_CHANGE_FREQ = 30, exports.ROUTE_CHANGE_IMAGE = 41, exports.ROUTE_CHANGE_OPACITY = 42, exports.ROUTE_CHANGE_SPEED = 29, exports.ROUTE_DIR_FIX_OFF = 36, exports.ROUTE_DIR_FIX_ON = 35, exports.ROUTE_END = 0, exports.ROUTE_JUMP = 14, exports.ROUTE_MOVE_AWAY = 11, exports.ROUTE_MOVE_BACKWARD = 13, exports.ROUTE_MOVE_DOWN = 1, exports.ROUTE_MOVE_FORWARD = 12, exports.ROUTE_MOVE_LEFT = 2, exports.ROUTE_MOVE_LOWER_L = 5, exports.ROUTE_MOVE_LOWER_R = 6, exports.ROUTE_MOVE_RANDOM = 9, exports.ROUTE_MOVE_RIGHT = 3, exports.ROUTE_MOVE_TOWARD = 10, exports.ROUTE_MOVE_UP = 4, exports.ROUTE_MOVE_UPPER_L = 7, exports.ROUTE_MOVE_UPPER_R = 8, exports.ROUTE_PLAY_SE = 44, exports.ROUTE_SCRIPT = 45, exports.ROUTE_STEP_ANIME_OFF = 34, exports.ROUTE_STEP_ANIME_ON = 33, exports.ROUTE_SWITCH_OFF = 28, exports.ROUTE_SWITCH_ON = 27, exports.ROUTE_THROUGH_OFF = 38, exports.ROUTE_THROUGH_ON = 37, exports.ROUTE_TRANSPARENT_OFF = 40, exports.ROUTE_TRANSPARENT_ON = 39, exports.ROUTE_TURN_180D = 22, exports.ROUTE_TURN_90D_L = 21, exports.ROUTE_TURN_90D_R = 20, exports.ROUTE_TURN_90D_R_L = 23, exports.ROUTE_TURN_AWAY = 26, exports.ROUTE_TURN_DOWN = 16, exports.ROUTE_TURN_LEFT = 17, exports.ROUTE_TURN_RANDOM = 24, exports.ROUTE_TURN_RIGHT = 18, exports.ROUTE_TURN_TOWARD = 25, exports.ROUTE_TURN_UP = 19, exports.ROUTE_WAIT = 15, exports.ROUTE_WALK_ANIME_OFF = 32, exports.ROUTE_WALK_ANIME_ON = 31, exports.SAVE_BGM = 243, exports.SCRIPT_EVAL = 355, exports.SCRIPT_EVAL_BODY = 655, exports.SCROLL_MAP = 204, exports.SELECT_ITEM = 104, exports.SET_EVENT_LOCATION = 203, exports.SET_MOVEMENT_ROUTE = 205, exports.SET_VEHICLE_LOCATION = 202, exports.SET_WEATHER_EFFECT = 236, exports.SHAKE_SCREEN = 225, exports.SHOP_PROCESSING = 302, exports.SHOP_PROCESSING_BODY = 605, exports.SHOW_ANIMATION = 212, exports.SHOW_BALLOON_ICON = 213, exports.SHOW_BATTLE_ANIMATION = 337, exports.SHOW_CHOICES = 102, exports.SHOW_CHOICES_ITEM = 402, exports.SHOW_MESSAGE = 101, exports.SHOW_MESSAGE_BODY = 401, exports.SHOW_PICTURE = 231, exports.SHOW_SCROLLING_TEXT = 105, exports.SHOW_SCROLLING_TEXT_BODY = 405, exports.SKIP = 109, exports.SPECIAL_EFFECT_ESCAPE = 0, exports.SRC_DATA_ACTOR = "actor", exports.SRC_DATA_ARMOR = "armor", exports.SRC_DATA_CLASS = "class", exports.SRC_DATA_COMMON_EVNET = "common_event", exports.SRC_DATA_ENEMY = "enemy", exports.SRC_DATA_ITEMS = "item", exports.SRC_DATA_MAP = "map", exports.SRC_DATA_SKILL = "skill", exports.SRC_DATA_STATE = "state", exports.SRC_DATA_TROOP = "troop", exports.SRC_DATA_WEAPON = "weapon", exports.STOP_SE = 251, exports.TINT_PICTURE = 234, exports.TINT_SCREEN = 223, exports.TRANSFER_PLAYER = 201, exports.WAIT = 230, exports.cloneChoices = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), exports.cloneEventCommand = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: Be(e2.parameters)
}), exports.cloneParameters = Be, exports.convertCommentArrayToObject = (e2) => ({ comment: e2[0] }), exports.createActorControlChars = (e2) => e2.map((e3) => ({
  text: e3.name,
  controlChar: a("N", e3.id)
})), exports.createControlCharFormat = a, exports.createEventCommand = (e2, t2, a2 = 0) => ({ code: e2, indent: a2, parameters: t2 }), exports.createNoteEntity = D, exports.createSystemVariableControlChars = (e2) => e2.variables.map((e3, t2) => ({ text: e3 || "", controlChar: a("V", t2) })).filter((e3) => "" !== e3.text), exports.formatItemEffectText = (e2, t2, a2) => {
  const r2 = a2.find((e3) => e3.id === t2.dataId), o2 = r2 ? r2.name : "Unknown Item";
  return e2.pattern.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", o2);
}, exports.formatTraitText = (e2, a2, r2) => {
  const o2 = t.compileFormatRule(I);
  return t.applyFormatRule(a2, r2, o2, e2.pattern, (e3) => e3.dataId);
}, exports.fromArrayCommonEvent = (e2) => ({ eventId: e2[0] }), exports.fromArrayControlSwitches = (e2) => ({
  min: e2[0],
  max: e2[1],
  value: e2[2]
}), exports.fromArrayInputNumber = (e2) => ({ variableId: e2[0], digits: e2[1] }), exports.fromArraySetupChoice = (e2) => ({
  choices: e2[0],
  cancelType: e2[1],
  defaultType: e2[2],
  positionType: e2[3],
  background: e2[4]
}), exports.fromArraySetupChoiceItem = (e2) => ({ index: e2[0], name: e2[1] }), exports.fromArrayShowMessageHeader = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), exports.fromStringArray = (e2, t2) => t2.map((t3, r2) => ({ text: t3, controlChar: a(e2, r2) })), exports.getActorValue = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.level;
    case 1:
      return e2.currentExp();
    case 2:
      return e2.hp;
    case 3:
      return e2.mp;
    case 12:
      return e2.tp;
  }
  return t2[6] >= 4 && t2[6] <= 11 ? e2.param(t2[6] - 4) : 0;
}, exports.getArmorCategoryEnabled = (e2) => e2.itemCategories[2], exports.getControlChars = (e2) => Array.from(e2.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e3) => ({ char: e3[1], id: parseInt(e3[2], 10) })), exports.getEnemyValue = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, exports.getEquipCommandEnabled = (e2) => e2.menuCommands[2], exports.getFormationCommandEnabled = (e2) => e2.menuCommands[4], exports.getItemCategoryEnabled = (e2) => e2.itemCategories[0], exports.getItemCommandEnabled = (e2) => e2.menuCommands[0], exports.getKeyItemCategoryEnabled = (e2) => e2.itemCategories[3], exports.getNoteValue = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, r2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return r2 ? r2[2] : void 0;
}, exports.getParamNames = (e2) => e2.terms.params.map((e3, t2) => ({
  name: e3,
  id: t2
})), exports.getSaveCommandEnabled = (e2) => e2.menuCommands[5], exports.getSkillCommandEnabled = (e2) => e2.menuCommands[1], exports.getStatusCommandEnabled = (e2) => e2.menuCommands[3], exports.getWeaponCategoryEnabled = (e2) => e2.itemCategories[1], exports.isCloneableCommand = (e2) => e2.parameters.every(Ue), exports.isCommandChangeActorText = (e2) => Ve(e2), exports.isCommandCommentBody = (e2) => ze(e2) && 408 === e2.code, exports.isCommandCommentHeader = (e2) => ze(e2) && 108 === e2.code, exports.isCommandCommonEvent = (e2) => Xe(e2), exports.isCommandInputNumber = (e2) => $e(e2), exports.isCommandNonParam = (e2) => We(e2), exports.isCommandScriptBody = (e2) => ze(e2) && 655 === e2.code, exports.isCommandScriptHeader = (e2) => ze(e2) && 355 === e2.code, exports.isCommandScrollTextHead = (e2) => je(e2), exports.isCommandShowChoiceItem = (e2) => Je(e2), exports.isCommandShowChoices = (e2) => Ke(e2), exports.isCommandShowMessage = (e2) => Ze(e2), exports.isCommandShowMessageBody = (e2) => ze(e2) && 401 === e2.code, exports.isCommandShowScrollingTextBody = (e2) => ze(e2) && 405 === e2.code, exports.isCommandTextBody = ze, exports.isDataItem = (e2) => M(e2), exports.isDataMap = (e2) => m(e2), exports.isDataMapInfo = (e2) => n(e2), exports.isDataSkill = (e2) => P(e2), exports.isDataSystem = (e2) => Ae(e2), exports.isDataWeapon = (e2) => L(e2), exports.labelsRegistry = () => ({ rpg: {
  damage: c,
  data: p,
  traits: E,
  itemEffect: S
}, global: H }), exports.makeActorData = (e2 = {}) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  battlerName: e2.battlerName ?? "",
  characterName: e2.characterName ?? "",
  characterIndex: e2.characterIndex ?? 0,
  faceName: e2.faceName ?? "",
  faceIndex: e2.faceIndex ?? 0,
  traits: [],
  note: e2.note ?? "",
  classId: e2.classId ?? 0,
  nickname: e2.nickname ?? "",
  profile: e2.profile ?? "",
  equips: [],
  initialLevel: e2.initialLevel ?? 0,
  maxLevel: e2.maxLevel ?? 0
}), exports.makeArmorData = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  iconIndex: e2.iconIndex ?? 0,
  description: e2.description ?? "",
  traits: e2.traits ?? [],
  note: e2.note ?? "",
  atypeId: e2.atypeId ?? 0,
  params: e2.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: e2.etypeId ?? 0,
  price: e2.price ?? 0
}), exports.makeAudioCommand = (e2, a2) => he(e2, t.makeAudioFileParams({ name: a2 })), exports.makeBooleanOptions = j, exports.makeClassData = (e2 = {}) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  traits: [],
  note: e2.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e2.learnings ?? [],
  expParams: e2.expParams ?? []
}), exports.makeCommandAudioAny = he, exports.makeCommandChangeActorName = (e2, t2 = 0) => ({
  code: 320,
  parameters: [e2.actorId, e2.name],
  indent: t2
}), exports.makeCommandChangeActorNickName = (e2, t2 = 0) => ({ code: 324, parameters: [e2.actorId, e2.nickname], indent: t2 }), exports.makeCommandChangeActorProfile = (e2, t2 = 0) => ({ code: 325, parameters: [e2.actorId, e2.profile], indent: t2 }), exports.makeCommandChangeBattleBGM = (e2, t2 = 0) => he(132, e2, t2), exports.makeCommandChangeDefeatME = (e2, t2 = 0) => he(139, e2, t2), exports.makeCommandChangeVictoryME = (e2, t2 = 0) => he(133, e2, t2), exports.makeCommandCommentBody = De, exports.makeCommandCommentHeader = Le, exports.makeCommandCommonEvent = (e2, t2 = 0) => ({ code: 117, indent: t2, parameters: ke(e2 ?? {}) }), exports.makeCommandControlSwitches = (e2, t2 = 0) => ({
  code: 121,
  indent: t2,
  parameters: Me(e2)
}), exports.makeCommandInputNumber = (e2, t2 = 0) => ({ code: 103, indent: t2, parameters: Fe(e2 ?? {}) }), exports.makeCommandPlayBGM = (e2, t2 = 0) => he(241, e2, t2), exports.makeCommandPlayBGS = (e2, t2 = 0) => he(245, e2, t2), exports.makeCommandPlayME = (e2, t2 = 0) => he(249, e2, t2), exports.makeCommandPlaySE = (e2, t2 = 0) => he(250, e2, t2), exports.makeCommandScriptArray = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? we(e3, t2) : He(e3, t2)), exports.makeCommandScriptBody = He, exports.makeCommandScriptHeader = we, exports.makeCommandSetupChoice = (e2, t2 = 0) => ({ code: 102, indent: t2, parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0] }), exports.makeCommandShowChoiceItem = (e2, t2 = 0) => ({ code: 402, indent: t2, parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""] }), exports.makeCommandShowMessage = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), exports.makeCommandShowMessageBody = (e2, t2 = 0) => ({
  code: 401,
  indent: t2,
  parameters: [e2]
}), exports.makeCommentArray = Pe, exports.makeCommentCommandArray = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Le(e3, t2) : De(e3, t2)), exports.makeCommonEventData = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  trigger: e2.trigger ?? 0,
  list: e2.list ?? [],
  switchId: e2.switchId ?? 0
}), exports.makeDamage = d, exports.makeDataNames = z, exports.makeDropItem = l, exports.makeEditorSetting = $, exports.makeEnemyAction = (e2 = {}) => ({
  conditionParam1: e2.conditionParam1 ?? 0,
  conditionParam2: e2.conditionParam2 ?? 0,
  conditionType: e2.conditionType ?? 0,
  rating: e2.rating ?? 0,
  skillId: e2.skillId ?? 0
}), exports.makeEnemyData = (e2 = {}) => {
  var _a;
  return {
    name: e2.name ?? "",
    id: e2.id ?? 0,
    battlerName: e2.battlerName ?? "",
    battlerHue: e2.battlerHue ?? 0,
    dropItems: ((_a = e2.dropItems) == null ? void 0 : _a.map(() => l())) ?? [],
    exp: e2.exp ?? 0,
    gold: e2.gold ?? 0,
    traits: [],
    note: e2.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, exports.makeEventPageCondition = r, exports.makeGameInitial = (e2 = {}) => ({
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0,
  partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1]
}), exports.makeItemCategories = U, exports.makeItemCategoriesFromArray = (e2) => ({ item: e2[0], weapon: e2[1], armor: e2[2], keyItem: e2[3] }), exports.makeItemData = (e2 = {}) => ({
  animationId: e2.animationId ?? 0,
  id: e2.id ?? 0,
  name: e2.name ?? "",
  iconIndex: e2.iconIndex ?? 0,
  description: e2.description ?? "",
  itypeId: e2.itypeId ?? 0,
  note: e2.note ?? "",
  consumable: e2.consumable ?? false,
  scope: e2.scope ?? 0,
  occasion: e2.occasion ?? 0,
  speed: e2.speed ?? 0,
  successRate: e2.successRate ?? 0,
  repeats: e2.repeats ?? 0,
  tpGain: e2.tpGain ?? 0,
  hitType: e2.hitType ?? 0,
  damage: d(e2.damage ?? {}),
  effects: [],
  price: 0
}), exports.makeMapData = (e2 = {}) => ({
  data: e2.data ?? [],
  battleback1Name: e2.battleback1Name ?? "",
  battleback2Name: e2.battleback2Name ?? "",
  autoplayBgm: e2.autoplayBgm ?? false,
  autoplayBgs: e2.autoplayBgs ?? false,
  parallaxLoopX: e2.parallaxLoopX ?? false,
  parallaxLoopY: e2.parallaxLoopY ?? false,
  parallaxName: e2.parallaxName ?? "",
  parallaxShow: e2.parallaxShow ?? false,
  parallaxSx: e2.parallaxSx ?? 0,
  parallaxSy: e2.parallaxSy ?? 0,
  x: e2.x ?? 0,
  y: e2.y ?? 0,
  width: e2.width ?? 0,
  height: e2.height ?? 0,
  note: e2.note ?? "",
  bgm: e2.bgm ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  bgs: e2.bgs ?? { name: "", pan: 0, pitch: 100, volume: 100 },
  disableDashing: e2.disableDashing ?? false,
  displayName: e2.displayName ?? "",
  encounterList: e2.encounterList ?? [],
  events: e2.events ?? []
}), exports.makeMapEvent = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), exports.makeMapEventIamge = o, exports.makeMapEventPage = () => ({ conditions: r(), list: [], directionFix: false, image: {
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}, moveFrequency: 5, moveRoute: { list: [], repeat: false, skippable: false, wait: false } }), exports.makeMapInfoData = (e2 = { id: 0 }) => {
  return {
    name: e2.name ?? (t2 = e2.id, t2.toString().padStart(3, "0")),
    id: e2.id,
    expanded: e2.expanded ?? false,
    order: e2.order ?? 0,
    parentId: e2.parentId ?? 0,
    scrollX: e2.scrollX ?? 0,
    scrollY: e2.scrollY ?? 0
  };
  var t2;
}, exports.makeMenuCommandsEnabled = q, exports.makeMenuCommandsEnabledFromArray = (e2) => ({ item: e2[0], skill: e2[1], equip: e2[2], status: e2[3], formation: e2[4], save: e2[5] }), exports.makeParamNamesArray = K, exports.makeRegex = F, exports.makeSkillData = (e2 = {}) => ({
  stypeId: e2.stypeId ?? 0,
  requiredWtypeId1: e2.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e2.requiredWtypeId2 ?? 0,
  animationId: e2.animationId ?? 0,
  damage: d(e2.damage ?? {}),
  description: e2.description ?? "",
  effects: [],
  hitType: e2.hitType ?? 0,
  iconIndex: e2.iconIndex ?? 0,
  id: e2.id ?? 0,
  message1: e2.message1 ?? "",
  message2: e2.message2 ?? "",
  messageType: e2.messageType ?? 0,
  name: e2.name ?? "",
  note: e2.note ?? "",
  mpCost: e2.mpCost ?? 0,
  occasion: e2.occasion ?? 0,
  repeats: e2.repeats ?? 0,
  scope: e2.scope ?? 0,
  speed: e2.speed ?? 0,
  successRate: e2.successRate ?? 0,
  tpCost: e2.tpCost ?? 0,
  tpGain: e2.tpGain ?? 0
}), exports.makeSoundsArray = B, exports.makeSoundsObject = (e2) => ({
  cursor: e2[0],
  ok: e2[1],
  cancel: e2[2],
  buzzer: e2[3],
  equip: e2[4],
  save: e2[5],
  load: e2[6],
  battleStart: e2[7],
  escape: e2[8],
  enemyAttack: e2[9],
  enemyDamage: e2[10],
  enemyCollapse: e2[11],
  bossCollapes1: e2[12],
  bossCollapes2: e2[13],
  actorDamage: e2[14],
  actorCollapse: e2[15],
  playRecovery: e2[16],
  playMiss: e2[17],
  playEvasion: e2[18],
  playMagicEvasion: e2[19],
  playReflection: e2[20],
  shop: e2[21],
  useItem: e2[22],
  useSkill: e2[23]
}), exports.makeStateData = (e2 = {}) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  iconIndex: e2.iconIndex ?? 0,
  message1: e2.message1 ?? "",
  message2: e2.message2 ?? "",
  message3: e2.message3 ?? "",
  message4: e2.message4 ?? "",
  traits: [],
  note: e2.note ?? "",
  messageType: e2.messageType ?? 0,
  releaseByDamage: e2.releaseByDamage ?? false,
  restriction: e2.restriction ?? 0,
  priority: e2.priority ?? 0,
  motion: e2.motion ?? 0,
  overlay: e2.overlay ?? 0,
  removeAtBattleEnd: e2.removeAtBattleEnd ?? false,
  removeByRestriction: e2.removeByRestriction ?? false,
  autoRemovalTiming: e2.autoRemovalTiming ?? 0,
  minTurns: e2.minTurns ?? 0,
  maxTurns: e2.maxTurns ?? 0,
  removeByDamage: e2.removeByDamage ?? false,
  chanceByDamage: e2.chanceByDamage ?? 0,
  removeByWalking: e2.removeByWalking ?? false,
  stepsToRemove: e2.stepsToRemove ?? 0
}), exports.makeSystemAdvanced = G, exports.makeSystemData = (e2) => {
  var _a, _b, _c, _d, _e2, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t2, _u, _v;
  const a2 = Re(e2.size);
  return {
    ...j(e2.options),
    currencyUnit: ((_a = e2.texts) == null ? void 0 : _a.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: B(e2.sounds),
    editor: $(e2.editing),
    advanced: G(e2.advanced),
    title1Name: ((_c = e2.images) == null ? void 0 : _c.title1Name) ?? "",
    title2Name: ((_d = e2.images) == null ? void 0 : _d.title2Name) ?? "",
    ...z(e2.dataNames ?? {}),
    magicSkills: fe([]),
    airship: J((_e2 = e2.vehicles) == null ? void 0 : _e2.airship),
    boat: J((_f = e2.vehicles) == null ? void 0 : _f.boat),
    ship: J((_g = e2.vehicles) == null ? void 0 : _g.ship),
    defeatMe: t.makeAudioFileParams((_h = e2.me) == null ? void 0 : _h.defeatMe),
    gameoverMe: t.makeAudioFileParams((_i = e2.me) == null ? void 0 : _i.gameoverMe),
    titleBgm: t.makeAudioFileParams((_j = e2.bgm) == null ? void 0 : _j.titleBgm),
    tileSize: a2.tileSize,
    faceSize: a2.faceSize,
    iconSize: a2.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((_k = e2.battleTest) == null ? void 0 : _k.battleback1Name) ?? "",
    battleback2Name: ((_l = e2.battleTest) == null ? void 0 : _l.battleback2Name) ?? "",
    testTroopId: ((_m = e2.battleTest) == null ? void 0 : _m.testTroopId) ?? 0,
    testBattlers: Oe((_n = e2.battleTest) == null ? void 0 : _n.testBattlers, ve),
    battleBgm: t.makeAudioFileParams((_o = e2.bgm) == null ? void 0 : _o.battleBgm),
    victoryMe: t.makeAudioFileParams((_p = e2.me) == null ? void 0 : _p.victoryMe),
    editMapId: ((_q = e2.editorTemporary) == null ? void 0 : _q.editMapId) ?? 0,
    battlerName: ((_r = e2.editorTemporary) == null ? void 0 : _r.battlerName) ?? "",
    locale: "",
    startMapId: ((_s = e2.gameInit) == null ? void 0 : _s.startMapId) ?? 0,
    startX: ((_t2 = e2.gameInit) == null ? void 0 : _t2.startX) ?? 0,
    startY: ((_u = e2.gameInit) == null ? void 0 : _u.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Ne(e2.terms ?? {}),
    itemCategories: U(e2.itemCategories),
    partyMembersArray: fe((_v = e2.gameInit) == null ? void 0 : _v.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: q(e2.menuComamnds)
  };
}, exports.makeTitleCommandWindow = (e2) => ({ background: e2.background ?? 0, offsetX: e2.offsetX ?? 0, offsetY: e2.offsetY ?? 0 }), exports.makeTroopData = (e2 = {}) => ({ id: e2.id ?? 0, name: e2.name ?? "", members: e2.members ?? [], pages: e2.pages ?? [] }), exports.makeTroopEventConditions = (e2 = {}) => ({
  actorHp: e2.actorHp ?? 0,
  actorId: e2.actorId ?? 0,
  enemyValid: e2.enemyValid ?? 0,
  switchValid: e2.switchValid ?? 0
}), exports.makeTroopMember = (e2 = {}) => ({ enemyId: e2.enemyId ?? 0, x: e2.x ?? 0, y: e2.y ?? 0, hidden: e2.hidden ?? false }), exports.makeVehicleData = J, exports.makeWeaponData = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  iconIndex: e2.iconIndex ?? 0,
  description: e2.description ?? "",
  traits: e2.traits ?? [],
  note: e2.note ?? "",
  animationId: e2.animationId ?? 0,
  params: e2.params ?? [0, 0, 0, 0, 0, 0, 0, 0],
  etypeId: e2.etypeId ?? 0,
  price: e2.price ?? 0,
  damage: d(e2.damage ?? {}),
  wtypeId: e2.wtypeId ?? 0
}), exports.normalizeDataActor = (e2) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  battlerName: e2.battlerName ?? "",
  characterName: e2.characterName ?? "",
  characterIndex: e2.characterIndex ?? 0,
  faceName: e2.faceName ?? "",
  faceIndex: e2.faceIndex ?? 0,
  traits: [],
  note: e2.note ?? "",
  classId: e2.classId ?? 0,
  nickname: e2.nickname ?? "",
  profile: e2.profile ?? "",
  equips: [],
  initialLevel: e2.initialLevel ?? 0,
  maxLevel: e2.maxLevel ?? 0
}), exports.pluginSourceToJSON = (e2) => Ut(e2), exports.readNote = (e2) => w(e2, (e3, t2) => [e3, t2]), exports.readNoteObject = (e2, t2) => w(e2.note, (a2, r2) => t2(a2, r2, e2)), exports.replaceNote = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (e3, a2, r2) => {
    const o2 = t2(a2, r2);
    if (o2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return D(a2, o2);
  });
}, exports.setNoteValue = (e2, t2, a2) => {
  const r2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(r2, (e3, r3) => r3 === t2 ? D(r3, a2) : e3);
}, exports.structToJSONSchema = (e2) => ((e3) => {
  const t2 = Object.entries(e3).reduce((e4, [t3, a2]) => {
    const r2 = ot(a2);
    return { ...e4, [t3]: r2 };
  }, {});
  return {
    type: "object",
    properties: t2,
    required: Object.keys(t2),
    additionalProperties: false
  };
})(e2), exports.toArrayCommonEvent = ke, exports.toArrayControlSwitches = Me, exports.toArrayInputNumber = Fe, exports.toArrayOperandActorStatus = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], exports.toArrayOperandConstant = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], exports.toArrayOperandEnemyStatus = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, Ge[t2.param]], exports.toArrayOperandItemData = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], exports.toArrayOperandRandom = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], exports.toArrayOperandScript = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], exports.toArrayOperandVariable = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], exports.toArraySetupChoice = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], exports.toArraySetupChoiceItem = (e2) => [e2.index ?? 0, e2.name ?? ""], exports.toArrayShowMessageHeader = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName];
//# sourceMappingURL=plugin.cjs.js.map
