import e from "ajv";
const t = (e2 = {}) => ({
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
}), a = {
  type: "object",
  properties: {
    gameId: { type: "integer" },
    screenWidth: { type: "integer" },
    screenHeight: { type: "integer" },
    uiAreaWidth: { type: "integer" },
    uiAreaHeight: { type: "integer" },
    windowOpacity: { type: "integer" },
    screenScale: { type: "number" },
    numberFontFilename: { type: "string" },
    mainFontFilename: { type: "string" },
    fallbackFonts: {
      type: "string"
    },
    fontSize: { type: "integer" }
  },
  required: ["gameId", "screenWidth", "screenHeight", "uiAreaWidth", "uiAreaHeight", "windowOpacity", "screenScale", "numberFontFilename", "mainFontFilename", "fallbackFonts", "fontSize"],
  additionalProperties: false
}, i = { type: "object", additionalProperties: false, required: ["type", "weaponImageId"], properties: { type: { type: "number" }, weaponImageId: { type: "number" } } }, r = (e2 = {}) => ({
  name: e2.name ?? "",
  volume: e2.volume ?? 100,
  pitch: e2.pitch ?? 100,
  pan: e2.pan ?? 0
}), n = (e2 = {}) => [r(e2.cursor), r(e2.ok), r(e2.cancel), r(e2.buzzer), r(e2.equip), r(e2.save), r(e2.load), r(e2.battleStart), r(e2.escape), r(e2.enemyAttack), r(e2.enemyDamage), r(e2.enemyCollapse), r(e2.bossCollapes1), r(e2.bossCollapes2), r(e2.actorDamage), r(e2.actorCollapse), r(e2.playRecovery), r(e2.playMiss), r(e2.playEvasion), r(e2.playMagicEvasion), r(e2.playReflection), r(e2.shop), r(e2.useItem), r(e2.useSkill)], m = (e2) => ({
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
}), o = { type: "object", properties: { name: { type: "string" }, volume: { type: "integer", minimum: 0, maximum: 100 }, pitch: { type: "integer", minimum: 0, maximum: 100 }, pan: {
  type: "integer",
  minimum: -100,
  maximum: 100
} }, required: ["name", "volume", "pitch", "pan"], additionalProperties: false }, s = {
  additionalProperties: false,
  type: "object",
  required: ["battleBgm", "victoryMe", "gameoverMe", "titleBgm", "defeatMe", "sounds"],
  properties: { battleBgm: o, victoryMe: o, gameoverMe: o, titleBgm: o, defeatMe: o, sounds: {
    type: "array",
    items: o,
    minItems: 24,
    maxItems: 24
  } }
}, p = {
  type: "object",
  additionalProperties: false,
  required: ["magicSkills", "battleSystem"],
  properties: { magicSkills: {
    type: "array",
    items: { type: "number" },
    minItems: 0,
    uniqueItems: true
  }, battleSystem: { type: "number" } }
}, d = (e2) => e2.menuCommands[0], l = (e2) => e2.menuCommands[1], c = (e2) => e2.menuCommands[2], y = (e2) => e2.menuCommands[3], u = (e2) => e2.menuCommands[4], g = (e2) => e2.menuCommands[5], b = (e2) => e2.itemCategories[0], I = (e2) => e2.itemCategories[1], h = (e2) => e2.itemCategories[2], v = (e2) => e2.itemCategories[3], f = (e2 = {}) => [e2.item ?? true, e2.weapon ?? true, e2.armor ?? true, e2.keyItem ?? true], k = (e2) => ({
  item: e2[0],
  weapon: e2[1],
  armor: e2[2],
  keyItem: e2[3]
}), x = (e2 = {}) => [e2.item ?? true, e2.skill ?? true, e2.equip ?? true, e2.status ?? true, e2.formation ?? true, e2.save ?? true], N = (e2) => ({
  item: e2[0],
  skill: e2[1],
  equip: e2[2],
  status: e2[3],
  formation: e2[4],
  save: e2[5]
}), T = { required: ["itemCategories", "menuCommands"], additionalProperties: false, type: "object", properties: { itemCategories: {
  type: "array",
  maxItems: 4,
  minItems: 4,
  items: { type: "boolean" }
}, menuCommands: { type: "array", maxItems: 6, minItems: 6, items: { type: "boolean" } } } }, S = (e2 = {}) => ({
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
}), w = { type: "boolean" }, q = {
  type: "object",
  additionalProperties: false,
  required: ["optAutosave", "optDisplayTp", "optDrawTitle", "optExtraExp", "optFloorDeath", "optFollowers", "optKeyItemsNumber", "optSideView", "optSlipDeath", "optTransparent", "optMessageSkip", "optSplashScreen"],
  properties: {
    optAutosave: w,
    optDisplayTp: w,
    optDrawTitle: w,
    optExtraExp: w,
    optFloorDeath: w,
    optFollowers: w,
    optKeyItemsNumber: w,
    optSideView: w,
    optSlipDeath: w,
    optTransparent: w,
    optMessageSkip: w,
    optSplashScreen: w
  }
}, R = (e2 = {}) => ({
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0,
  partyMembersArray: e2.partyMembersArray ? Array.from(e2.partyMembersArray) : [1]
}), P = {
  additionalProperties: false,
  type: "object",
  required: ["startMapId", "startX", "startY", "partyMembersArray"],
  properties: { startMapId: { type: "integer", minimum: 0 }, startX: { type: "integer", minimum: 0 }, startY: { type: "integer", minimum: 0 }, partyMembersArray: { type: "array", items: {
    type: "integer",
    minimum: 0
  } } }
}, M = { additionalProperties: false, type: "object", required: ["tileSize", "faceSize", "iconSize"], properties: { tileSize: { type: "integer", minimum: 0 }, faceSize: {
  type: "integer",
  minimum: 0
}, iconSize: { type: "integer", minimum: 0 } } }, D = { additionalProperties: false, type: "object", required: ["title1Name", "title2Name"], properties: { title1Name: { type: "string" }, title2Name: {
  type: "string"
} } }, A = { type: "object", additionalProperties: false, required: ["locale", "versionId", "windowTone"], properties: { locale: { type: "string" }, versionId: { type: "number" }, windowTone: {
  type: "array",
  items: { type: "number" },
  minItems: 4,
  maxItems: 4
} } }, j = (e2, t2) => ({
  name: e2,
  id: t2
}), z = (e2) => e2.variables.map(j), E = (e2) => e2.elements.map(j), C = (e2) => e2.equipTypes.map(j), H = (e2) => e2.skillTypes.map(j), F = (e2) => e2.weaponTypes.map(j), B = (e2) => e2.armorTypes.map(j), L = (e2) => e2.switches.map(j), V = (e2, t2) => [G(e2, t2), X(e2, t2), U(e2, t2), Y(e2, t2), W(e2, t2), K(e2, t2), $(e2, t2)], W = (e2, t2) => ({
  items: B(e2),
  label: t2.options.armorTypes,
  source: { author: "rmmz", module: "system", kind: "armorTypes" }
}), G = (e2, t2) => ({ items: E(e2), label: t2.options.elements, source: {
  author: "rmmz",
  module: "system",
  kind: "elements"
} }), X = (e2, t2) => ({ items: C(e2), label: t2.options.equipTypes, source: { author: "rmmz", module: "system", kind: "equipTypes" } }), Y = (e2, t2) => ({
  items: H(e2),
  label: t2.options.skillTypes,
  source: { author: "rmmz", module: "system", kind: "skillTypes" }
}), K = (e2, t2) => ({ items: z(e2), label: t2.options.variables, source: {
  author: "rmmz",
  module: "system",
  kind: "variables"
} }), $ = (e2, t2) => ({ items: L(e2), label: t2.options.switches, source: { author: "rmmz", module: "system", kind: "switches" } }), U = (e2, t2) => ({
  items: F(e2),
  label: t2.options.weaponTypes,
  source: { author: "rmmz", module: "system", kind: "weaponTypes" }
}), O = { type: "array", items: { type: "string" } }, _ = {
  additionalProperties: false,
  type: "object",
  required: ["weaponTypes", "skillTypes", "elements", "variables", "equipTypes", "switches", "armorTypes"],
  properties: {
    weaponTypes: O,
    skillTypes: O,
    elements: O,
    variables: O,
    equipTypes: O,
    switches: O,
    armorTypes: O
  }
}, Z = (e2) => ({
  armorTypes: J(e2.armorTypes),
  elements: J(e2.elements),
  equipTypes: J(e2.equipTypes),
  weaponTypes: J(e2.weaponTypes),
  skillTypes: J(e2.skillTypes),
  variables: J(e2.variables),
  switches: J(e2.switches)
}), J = (e2) => e2 ? [...e2] : [], Q = (e2) => [e2.level ?? "Level", e2.levelA ?? "Level", e2.hp ?? "HP", e2.hpA ?? "HP", e2.mp ?? "MP", e2.mpA ?? "MP", e2.tp ?? "TP", e2.tpA ?? "TP", e2.experience ?? "EXP", e2.exp ?? "EXP"], ee = (e2) => ({
  level: e2[0],
  levelA: e2[1],
  hp: e2[2],
  hpA: e2[3],
  mp: e2[4],
  mpA: e2[5],
  tp: e2[6],
  tpA: e2[7],
  experience: e2[8],
  exp: e2[9]
}), te = (e2) => ae(e2, ""), ae = (e2, t2) => [e2.fight ?? "Fight", e2.escape ?? "Escape", e2.attack ?? "Attack", e2.guard ?? "Guard", e2.item ?? "Item", e2.skill ?? "Skill", e2.equip ?? "Equip", e2.status ?? "Status", e2.formation ?? "Formation", e2.save ?? "Save", e2.gameEnd ?? "Game End", e2.options ?? "Options", e2.weapon ?? "Weapon", e2.armor ?? "Armor", e2.keyItem ?? "Key Item", e2.equip2 ?? "Equip2", e2.optimize ?? "Optimize", e2.clear ?? "Clear", e2.newGame ?? "New Game", e2.continue_ ?? "Continue", t2, e2.toTitle ?? "To Title", e2.cancel ?? "Cancel", t2, e2.buy ?? "Buy", e2.sell ?? "Sell"], ie = (e2) => ({
  fight: e2[0],
  escape: e2[1],
  attack: e2[2],
  guard: e2[3],
  item: e2[4],
  skill: e2[5],
  equip: e2[6],
  status: e2[7],
  formation: e2[8],
  save: e2[9],
  gameEnd: e2[10],
  options: e2[11],
  weapon: e2[12],
  armor: e2[13],
  keyItem: e2[14],
  equip2: e2[15],
  optimize: e2[16],
  clear: e2[17],
  newGame: e2[18],
  continue_: e2[19],
  toTitle: e2[21],
  cancel: e2[22],
  buy: e2[24],
  sell: e2[25]
}), re = (e2, t2) => "string" == typeof e2 ? e2 : t2, ne = (e2) => ({
  actionFailure: re(e2.actionFailure, "Action failed."),
  actorDamage: re(e2.actorDamage, "%1 took %2 damage."),
  actorRecovery: re(e2.actorRecovery, "%1 recovered %2 HP."),
  actorGain: re(e2.actorGain, "%1 gained %2."),
  actorLoss: re(e2.actorLoss, "%1 lost %2."),
  actorDrain: re(e2.actorDrain, "%1 drained %2 HP."),
  actorNoDamage: re(e2.actorNoDamage, "%1 was not damaged."),
  actorNoHit: re(e2.actorNoHit, "%1 was not hit."),
  alwaysDash: re(e2.alwaysDash, "Always dash."),
  bgmVolume: re(e2.bgmVolume, "BGM volume"),
  bgsVolume: re(e2.bgsVolume, "BGS volume"),
  commandRemember: re(e2.commandRemember, "Command remember."),
  criticalToActor: re(e2.criticalToActor, "%1 dealt %2 damage to %3."),
  criticalToEnemy: re(e2.criticalToEnemy, "%1 dealt %2 damage to %3."),
  counterAttack: re(e2.counterAttack, "%1 countered!"),
  debuffAdd: re(e2.debuffAdd, "%1's %2 was lowered."),
  defeat: re(e2.defeat, "Defeat."),
  enemyDamage: re(e2.enemyDamage, "%1 took %2 damage."),
  enemyDrain: re(e2.enemyDrain, "%1 drained %2 HP."),
  enemyGain: re(e2.enemyGain, "%1 gained %2."),
  enemyLoss: re(e2.enemyLoss, "%1 lost %2."),
  enemyNoDamage: re(e2.enemyNoDamage, "%1 was not damaged."),
  enemyNoHit: re(e2.enemyNoHit, "%1 was not hit."),
  enemyRecovery: re(e2.enemyRecovery, "%1 recovered %2 HP."),
  evasion: re(e2.evasion, "%1 evaded the attack!"),
  autosave: re(e2.autosave, "Autosave"),
  escapeFailure: re(e2.escapeFailure, "Escape failed."),
  escapeStart: re(e2.escapeStart, "%1 started to escape!"),
  emerge: re(e2.emerge, "%1 appeared!"),
  expNext: re(e2.expNext, "Next level in %1 EXP."),
  expTotal: re(e2.expTotal, "Total EXP: %1"),
  file: re(e2.file, "File"),
  buffAdd: re(e2.buffAdd, "%1's %2 was raised."),
  buffRemove: re(e2.buffRemove, "%1's %2 was lowered."),
  obtainExp: re(e2.obtainExp, "%1 EXP obtained."),
  obtainGold: re(e2.obtainGold, "%1 gold obtained."),
  obtainItem: re(e2.obtainItem, "%1 obtained %2."),
  obtainSkill: re(e2.obtainSkill, "%1 learned %2."),
  levelUp: re(e2.levelUp, "%1 leveled up!"),
  partyName: re(e2.partyName, "Party"),
  loadMessage: re(e2.loadMessage, "Load %1?"),
  meVolume: re(e2.meVolume, "ME volume"),
  possession: re(e2.possession, "Possession"),
  preemptive: re(e2.preemptive, "%1 attacked first!"),
  saveMessage: re(e2.saveMessage, "Save %1?"),
  seVolume: re(e2.seVolume, "SE volume"),
  magicEvasion: re(e2.magicEvasion, "%1 evaded the magic!"),
  magicReflection: re(e2.magicReflection, "%1 reflected the magic!"),
  substitute: re(e2.substitute, "%1 took the hit!"),
  surprise: re(e2.surprise, "%1 surprised the enemy!"),
  touchUI: re(e2.touchUI, "Touch UI"),
  useItem: re(e2.useItem, "%1 used %2."),
  victory: re(e2.victory, "Victory!")
}), me = { type: "string" }, oe = {
  type: "string",
  nullable: true
}, se = { type: "string" }, pe = { required: ["terms", "currencyUnit", "gameTitle"], additionalProperties: false, type: "object", properties: {
  currencyUnit: { type: "string" },
  gameTitle: { type: "string" },
  terms: { additionalProperties: false, type: "object", required: ["messages", "commands", "basic", "params"], properties: { messages: {
    type: "object",
    additionalProperties: false,
    required: ["actionFailure", "actorDamage", "actorNoDamage", "actorRecovery", "actorGain", "actorLoss", "actorDrain", "alwaysDash", "bgmVolume", "bgsVolume", "commandRemember", "criticalToActor", "criticalToEnemy", "counterAttack", "debuffAdd", "defeat", "enemyDamage", "enemyNoDamage", "enemyRecovery", "enemyGain", "enemyLoss", "enemyDrain", "evasion", "expNext", "expTotal", "escapeFailure", "escapeStart", "file", "loadMessage", "meVolume", "magicEvasion", "magicReflection", "obtainExp", "obtainGold", "obtainItem", "obtainSkill", "partyName", "preemptive", "saveMessage", "seVolume", "substitute", "touchUI", "victory", "useItem"],
    properties: {
      actionFailure: se,
      actorDamage: se,
      actorNoDamage: se,
      actorRecovery: se,
      actorGain: se,
      actorLoss: se,
      actorDrain: se,
      alwaysDash: se,
      bgmVolume: se,
      bgsVolume: se,
      commandRemember: se,
      criticalToActor: se,
      criticalToEnemy: se,
      counterAttack: se,
      debuffAdd: se,
      defeat: se,
      enemyDamage: se,
      enemyNoDamage: se,
      enemyRecovery: se,
      enemyGain: se,
      enemyLoss: se,
      enemyDrain: se,
      evasion: se,
      expNext: se,
      expTotal: se,
      escapeFailure: se,
      escapeStart: se,
      file: se,
      loadMessage: se,
      meVolume: se,
      magicEvasion: se,
      magicReflection: se,
      obtainExp: se,
      obtainGold: se,
      obtainItem: se,
      obtainSkill: se,
      partyName: se,
      preemptive: se,
      saveMessage: se,
      seVolume: se,
      substitute: se,
      touchUI: se,
      victory: se,
      useItem: se,
      buffAdd: se,
      buffRemove: se,
      actorNoHit: se,
      enemyNoHit: se,
      autosave: se,
      emerge: se,
      levelUp: se,
      possession: se,
      surprise: se
    }
  }, commands: {
    type: "array",
    items: [me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, me, oe, me, me, oe, me, me],
    minItems: 26,
    maxItems: 26
  }, basic: { type: "array", items: { type: "string" }, minItems: 10, maxItems: 10 }, params: {
    type: "array",
    items: { type: "string", minLength: 1 },
    minItems: 10,
    maxItems: 10,
    uniqueItems: true
  } } }
} }, de = (e2) => [e2.mhp ?? "", e2.mmp ?? "", e2.atk ?? "", e2.def ?? "", e2.mat ?? "", e2.mdf ?? "", e2.agi ?? "", e2.luk ?? "", e2.hit ?? "", e2.eva ?? ""], le = (e2) => e2.terms.params.map((e3, t2) => ({
  name: e3,
  id: t2
})), ce = (e2) => ({ background: e2.background ?? 0, offsetX: e2.offsetX ?? 0, offsetY: e2.offsetY ?? 0 }), ye = {
  additionalProperties: false,
  type: "object",
  required: ["background", "offsetX", "offsetY"],
  properties: { background: { type: "integer", minimum: 0, maximum: 1e3 }, offsetX: { type: "integer", minimum: -1e3, maximum: 1e3 }, offsetY: { type: "integer", minimum: -1e3, maximum: 1e3 } }
}, ue = (e2 = {}) => ({
  characterIndex: e2.characterIndex ?? 0,
  characterName: e2.characterName ?? "",
  bgm: r(e2.bgm ?? {}),
  startMapId: e2.startMapId ?? 0,
  startX: e2.startX ?? 0,
  startY: e2.startY ?? 0
}), ge = {
  additionalProperties: false,
  type: "object",
  required: ["characterIndex", "characterName", "bgm", "startMapId", "startX", "startY"],
  properties: { characterIndex: {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, characterName: { type: "string", minLength: 1 }, bgm: { type: "object", additionalProperties: false, required: ["name", "volume", "pitch", "pan"], properties: { name: { type: "string" }, volume: {
    type: "integer",
    minimum: 0,
    maximum: 100
  }, pitch: { type: "integer", minimum: 50, maximum: 150 }, pan: { type: "integer", minimum: -100, maximum: 100 } } }, startMapId: { type: "integer", minimum: 0 }, startX: {
    type: "integer",
    minimum: 0,
    maximum: 5e3
  }, startY: { type: "integer", minimum: 0, maximum: 5e3 } }
}, be = (e2 = {}) => ({
  jsonFormatLevel: e2.jsonFormatLevel ?? 0,
  messageWidth1: e2.messageWidth1 ?? 816,
  messageWidth2: e2.messageWidth2 ?? 816
}), Ie = { additionalProperties: false, type: "object", required: ["actorId", "equips", "level"], properties: { actorId: { type: "integer" }, level: {
  type: "integer",
  minimum: 1
}, equips: { type: "array", items: { type: "integer" } } } }, he = {
  additionalProperties: false,
  type: "object",
  required: ["battleback1Name", "battleback2Name", "battlerHue", "battlerName", "editMapId", "editor", "testBattlers", "testTroopId"],
  properties: {
    testBattlers: { type: "array", items: Ie },
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
}, ve = { domainName: "オプション", options: {
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
} }, fe = {
  domainName: "タイプ",
  format: "{name}",
  options: { elements: "属性", equipTypes: "装備タイプ", skillTypes: "スキルタイプ", weaponTypes: "武器タイプ", armorTypes: "防具タイプ", switches: "スイッチ", variables: "変数" }
}, ke = {
  domainName: "能力値",
  options: { agi: "敏捷", atk: "攻撃力", def: "防御力", eva: "回避", hit: "命中", luk: "運", mat: "魔法攻撃力", mdf: "魔法防御力", mhp: "最大HP", mmp: "最大MP" }
}, xe = { domainName: "コマンド", options: {
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
} }, Ne = {
  additionalProperties: false,
  required: ["airship", "boat", "ship", "advanced", "attackMotions"],
  type: "object",
  properties: { airship: ge, boat: ge, ship: ge, advanced: a, attackMotions: { type: "array", items: i } }
}, Te = (e2) => e2.reduce((e3, t2) => ({ required: [...e3.required, ...t2.required], properties: { ...e3.properties, ...t2.properties } }), { required: [], properties: {} }), Se = new e({ strict: true }), we = ((e2) => {
  const t2 = Te(e2);
  return { additionalProperties: false, type: "object", required: Array.from(new Set(t2.required)), properties: t2.properties };
})([Ne, s, p, T, q, P, M, A, _, pe, D, he]), qe = Se.compile(we), Re = (e2) => qe(e2), Pe = Se.compile(Ie);
Se.compile(i);
const Me = Se.compile(M), De = (e2) => {
  var _a2, _b, _c, _d2, _e2, _f, _g, _h, _i2, _j, _k, _l, _m2, _n2, _o2, _p2, _q, _r2, _s2, _t2, _u, _v;
  const a2 = ze(e2.size);
  return {
    ...S(e2.options),
    currencyUnit: ((_a2 = e2.texts) == null ? void 0 : _a2.currencyUnit) ?? "",
    gameTitle: ((_b = e2.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: n(e2.sounds),
    editor: be(e2.editing),
    advanced: t(e2.advanced),
    title1Name: ((_c = e2.images) == null ? void 0 : _c.title1Name) ?? "",
    title2Name: ((_d2 = e2.images) == null ? void 0 : _d2.title2Name) ?? "",
    ...Z(e2.dataNames ?? {}),
    magicSkills: je([]),
    airship: ue((_e2 = e2.vehicles) == null ? void 0 : _e2.airship),
    boat: ue((_f = e2.vehicles) == null ? void 0 : _f.boat),
    ship: ue((_g = e2.vehicles) == null ? void 0 : _g.ship),
    defeatMe: r((_h = e2.me) == null ? void 0 : _h.defeatMe),
    gameoverMe: r((_i2 = e2.me) == null ? void 0 : _i2.gameoverMe),
    titleBgm: r((_j = e2.bgm) == null ? void 0 : _j.titleBgm),
    tileSize: a2.tileSize,
    faceSize: a2.faceSize,
    iconSize: a2.iconSize,
    versionId: 1,
    attackMotions: [],
    battleback1Name: ((_k = e2.battleTest) == null ? void 0 : _k.battleback1Name) ?? "",
    battleback2Name: ((_l = e2.battleTest) == null ? void 0 : _l.battleback2Name) ?? "",
    testTroopId: ((_m2 = e2.battleTest) == null ? void 0 : _m2.testTroopId) ?? 0,
    testBattlers: Ee((_n2 = e2.battleTest) == null ? void 0 : _n2.testBattlers, Ce),
    battleBgm: r((_o2 = e2.bgm) == null ? void 0 : _o2.battleBgm),
    victoryMe: r((_p2 = e2.me) == null ? void 0 : _p2.victoryMe),
    editMapId: ((_q = e2.editorTemporary) == null ? void 0 : _q.editMapId) ?? 0,
    battlerName: ((_r2 = e2.editorTemporary) == null ? void 0 : _r2.battlerName) ?? "",
    locale: "",
    startMapId: ((_s2 = e2.gameInit) == null ? void 0 : _s2.startMapId) ?? 0,
    startX: ((_t2 = e2.gameInit) == null ? void 0 : _t2.startX) ?? 0,
    startY: ((_u = e2.gameInit) == null ? void 0 : _u.startY) ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: Ae(e2.terms ?? {}),
    itemCategories: f(e2.itemCategories),
    partyMembersArray: je((_v = e2.gameInit) == null ? void 0 : _v.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    menuCommands: x(e2.menuComamnds)
  };
}, Ae = (e2) => ({
  basic: Q(e2.basic ?? {}),
  commands: te(e2.commands ?? {}),
  params: de(e2.params ?? {}),
  messages: ne(e2.messages ?? {})
}), je = (e2) => e2 ? [...e2] : [], ze = (e2) => ((e3) => Me(e3))(e2) ? {
  tileSize: e2.tileSize,
  faceSize: e2.faceSize,
  iconSize: e2.iconSize
} : { tileSize: 48, faceSize: 144, iconSize: 32 }, Ee = (e2, t2) => e2 ? e2.map(t2) : [], Ce = (e2) => ((e3) => Pe(e3))(e2) ? { actorId: e2.actorId, equips: je(e2.equips), level: e2.level } : {
  actorId: 0,
  equips: [],
  level: 1
}, He = "rmmz", Fe = "colors", Be = (e2) => e2.map((e3) => ({ dataKey: e3, placeHolder: `{${e3}}` })), Le = (e2) => ({ dataKey: e2.dataIdKey, placeHolder: `{${e2.dataIdKey}}`, sourceId: {
  author: e2.sourceId.author,
  kind: e2.sourceId.kind,
  module: e2.sourceId.module
} }), Ve = (e2) => `${e2.author}.${e2.module}.${e2.kind}`, We = (e2) => {
  const t2 = e2.itemMappers ?? [];
  return e2.itemMapper ? [...t2, e2.itemMapper] : [...t2];
}, Ge = (e2, t2 = []) => {
  return { itemMappers: [...We(e2), ...t2].map(Xe), fallbackFormat: { text: Ye(e2), label: Ke(e2) }, properties: (a2 = e2.placeHolder ?? {}, {
    numbers: a2.numbers ? Be(a2.numbers) : [],
    strings: a2.strings ? Be(a2.strings) : []
  }), arrayIndex: e2.arrayIndex ? e2.arrayIndex.map(Le) : [] };
  var a2;
}, Xe = (e2) => ({
  placeHolder: `{${e2.placeHolder}}`,
  kindKey: e2.kindKey,
  dataIdKey: e2.dataIdKey
}), Ye = (e2) => {
  if (e2.fallbackFormat && void 0 !== e2.fallbackFormat.text) return e2.fallbackFormat.text;
  const t2 = ((e3) => {
    var _a2;
    const t3 = new Set(((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? []);
    return e3.itemMapper && t3.add(e3.itemMapper.kindKey), e3.itemMappers && e3.itemMappers.forEach((e4) => {
      t3.add(e4.kindKey);
    }), t3;
  })(e2);
  return 0 === t2.size ? "value not found" : Array.from(t2).map((e3) => `${e3}:{${e3}}`).join(", ");
}, Ke = (e2) => {
  var _a2;
  return void 0 !== ((_a2 = e2.fallbackFormat) == null ? void 0 : _a2.label) ? e2.fallbackFormat.label : "unknown key:{key}";
}, $e = (e2, t2, a2) => {
  const i2 = t2[a2.dataKey];
  return null == i2 ? e2 : e2.replaceAll(a2.placeHolder, String(i2));
}, Ue = (e2, t2, a2, i2 = { placeHolderMaxLength: 50, formatMaxLength: 200 }) => e2.pattern.length >= i2.formatMaxLength ? { formatLabel: e2.label, syntaxErrors: [{
  message: a2.formatVeryLong,
  reason: e2.pattern.slice(0, i2.formatMaxLength)
}], semanticErrors: [] } : {
  formatLabel: e2.label,
  semanticErrors: _e(e2, t2, a2),
  syntaxErrors: Oe(e2.pattern, t2, a2, i2.placeHolderMaxLength)
}, Oe = (e2, t2, a2, i2) => {
  const r2 = Array.from(e2.matchAll(/\{([.a-zA-Z0-9]+)\}/g)), n2 = ((e3) => {
    var _a2;
    const t3 = new Set(((_a2 = e3.placeHolder) == null ? void 0 : _a2.numbers) ?? []);
    return e3.itemMapper && t3.add(e3.itemMapper.placeHolder), e3.itemMappers && e3.itemMappers.forEach((e4) => {
      t3.add(e4.placeHolder);
    }), t3;
  })(t2);
  return r2.reduce((e3, t3) => {
    const r3 = t3[1];
    return 0 === r3.length ? e3 : r3.length > i2 ? (e3.push({
      message: a2.longPlaceHolder,
      reason: r3.slice(0, i2)
    }), e3) : (n2.has(r3) || e3.push({ message: a2.extraPlaceHolder, reason: r3 }), e3);
  }, []);
}, _e = (e2, t2, a2) => We(t2).reduce((t3, i2) => {
  const r2 = Ze(e2, i2, a2);
  return r2 && t3.push(r2), t3;
}, []), Ze = (e2, t2, a2) => {
  const i2 = e2.pattern.includes(t2.placeHolder), r2 = !!e2.dataSource;
  return !i2 && r2 ? { message: a2.missingName, reason: t2.placeHolder } : i2 && !r2 ? {
    message: a2.missingSourceId,
    reason: t2.placeHolder
  } : void 0;
}, Je = (e2, t2) => {
  const a2 = tt(t2);
  return e2.reduce((e3, t3) => {
    const i2 = Qe(t3, a2);
    return e3.set(t3.kindId, i2), e3;
  }, /* @__PURE__ */ new Map());
}, Qe = (e2, t2) => {
  const a2 = et(e2.dataSource, t2);
  return {
    patternCompiled: e2.pattern,
    label: e2.label,
    data: a2 ? a2.items : void 0
  };
}, et = (e2, t2) => {
  if (e2) return t2.get(Ve(e2));
}, tt = (e2) => e2.reduce((e3, t2) => {
  const a2 = {
    items: at(t2.items),
    source: t2.source,
    label: t2.label
  };
  return e3.set(Ve(t2.source), a2), e3;
}, /* @__PURE__ */ new Map()), at = (e2) => e2.map((e3) => ({ id: e3.id, name: e3.name })), it = (e2, t2, a2, i2, r2) => {
  const n2 = ((e3, t3, a3) => {
    const i3 = a3.properties.numbers.reduce((e4, a4) => $e(e4, t3, a4), e3);
    return a3.properties.strings.reduce((e4, a4) => $e(e4, t3, a4), i3);
  })(i2, e2, a2);
  return t2 ? rt(n2, e2, a2, t2, r2) : n2;
}, rt = (e2, t2, a2, i2, r2) => {
  const n2 = ((e3, t3) => {
    const a3 = ((e4, t4) => {
      const a4 = t4[e4];
      return a4 && a4.id === e4 ? a4 : t4.find((t5) => t5.id === e4);
    })(t3, e3);
    return a3 ? a3.name : `?data[${t3}]`;
  })(i2, r2(t2));
  return a2.itemMappers.reduce((e3, t3) => e3.replaceAll(t3.placeHolder, n2), e2);
}, nt = (e2, t2) => `\\${e2}[${t2}]`, mt = (e2, t2) => t2.map((t3, a2) => ({
  text: t3,
  controlChar: nt(e2, a2)
})), ot = (e2) => Array.from(e2.matchAll(/\\([A-Za-z]+)\[(\d+)]/g)).map((e3) => ({ char: e3[1], id: parseInt(e3[2], 10) })), st = (e2) => e2.map((e3) => ({
  text: e3.name,
  controlChar: nt("N", e3.id)
})), pt = (e2) => e2.variables.map((e3, t2) => ({ text: e3 || "", controlChar: nt("V", t2) })).filter((e3) => "" !== e3.text), dt = (e2 = {}) => ({
  id: e2.id ?? 0,
  name: e2.name ?? "",
  trigger: e2.trigger ?? 0,
  list: e2.list ?? [],
  switchId: e2.switchId ?? 0
}), lt = (e2 = {}) => ({ id: e2.id ?? 0, name: e2.name ?? "", members: e2.members ?? [], pages: e2.pages ?? [] }), ct = (e2 = {}) => ({
  enemyId: e2.enemyId ?? 0,
  x: e2.x ?? 0,
  y: e2.y ?? 0,
  hidden: e2.hidden ?? false
}), yt = (e2 = {}) => ({ actorHp: e2.actorHp ?? 0, actorId: e2.actorId ?? 0, enemyValid: e2.enemyValid ?? 0, switchValid: e2.switchValid ?? 0 }), ut = (e2 = {}) => ({
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
}), gt = 0, bt = 101, It = 401, ht = 102, vt = 402, ft = 103, kt = 104, xt = 105, Nt = 405, Tt = 108, St = 408, wt = 109, qt = 111, Rt = 411, Pt = 112, Mt = 113, Dt = 115, At = 117, jt = 118, zt = 119, Et = 121, Ct = 122, Ht = 123, Ft = 124, Bt = 125, Lt = 126, Vt = 127, Wt = 128, Gt = 129, Xt = 132, Yt = 133, Kt = 134, $t = 135, Ut = 136, Ot = 137, _t = 138, Zt = 139, Jt = 140, Qt = 201, ea = 202, ta = 203, aa = 204, ia = 205, ra = 206, na = 211, ma = 212, oa = 213, sa = 214, pa = 216, da = 217, la = 221, ca = 222, ya = 223, ua = 224, ga = 225, ba = 230, Ia = 231, ha = 232, va = 233, fa = 234, ka = 235, xa = 236, Na = 241, Ta = 242, Sa = 243, wa = 244, qa = 245, Ra = 246, Pa = 249, Ma = 250, Da = 251, Aa = 261, ja = 282, za = 283, Ea = 284, Ca = 285, Ha = 301, Fa = 302, Ba = 605, La = 303, Va = 311, Wa = 312, Ga = 313, Xa = 314, Ya = 315, Ka = 320, $a = 321, Ua = 322, Oa = 323, _a = 324, Za = 325, Ja = 331, Qa = 332, ei = 333, ti = 334, ai = 335, ii = 336, ri = 337, ni = 339, mi = 340, oi = 351, si = 342, pi = 352, di = 353, li = 354, ci = 355, yi = 655, ui = 356, gi = 357, bi = (e2, t2, a2 = 0) => ({
  code: e2,
  indent: a2,
  parameters: t2
}), Ii = 0, hi = 1, vi = 2, fi = 3, ki = 4, xi = 5, Ni = 6, Ti = 7, Si = 8, wi = 9, qi = 10, Ri = 11, Pi = 12, Mi = 13, Di = 14, Ai = 15, ji = 16, zi = 17, Ei = 18, Ci = 19, Hi = 20, Fi = 21, Bi = 22, Li = 23, Vi = 24, Wi = 25, Gi = 26, Xi = 27, Yi = 28, Ki = 29, $i = 30, Ui = 31, Oi = 32, _i = 33, Zi = 34, Ji = 35, Qi = 36, er = 37, tr = 38, ar = 39, ir = 40, rr = 41, nr = 42, mr = 43, or = 44, sr = 45, pr = () => ({
  id: 1,
  name: "",
  pages: [],
  note: "",
  x: 0,
  y: 0
}), dr = () => ({ characterIndex: 0, characterName: "", direction: 2, pattern: 0, tileId: 0 }), lr = () => ({ conditions: ut(), list: [], directionFix: false, image: {
  characterIndex: 0,
  characterName: "",
  direction: 2,
  pattern: 0,
  tileId: 0
}, moveFrequency: 5, moveRoute: { list: [], repeat: false, skippable: false, wait: false } }), cr = (e2 = {}) => ({
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
}), yr = (e2 = { id: 0 }) => {
  return { name: e2.name ?? (t2 = e2.id, t2.toString().padStart(3, "0")), id: e2.id, expanded: e2.expanded ?? false, order: e2.order ?? 0, parentId: e2.parentId ?? 0, scrollX: e2.scrollX ?? 0, scrollY: e2.scrollY ?? 0 };
  var t2;
}, ur = {
  type: "object",
  required: ["name", "id", "expanded", "order", "parentId", "scrollX", "scrollY"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, expanded: { type: "boolean" }, order: {
    type: "integer"
  }, parentId: { type: "integer" }, scrollX: { type: "integer" }, scrollY: { type: "integer" } }
}, gr = {
  type: "object",
  required: ["image", "moveRoute", "conditions", "directionFix", "moveFrequency"],
  properties: { moveFrequency: { type: "integer" }, directionFix: { type: "boolean" }, conditions: {
    type: "object",
    required: ["switch1Id", "switch1Valid", "switch2Id", "switch2Valid", "variableId", "variableValid", "selfSwitchCh", "selfSwitchValid", "variableValue", "itemId", "itemValid", "actorId", "actorValid"],
    properties: { switch1Id: { type: "integer", minimum: 0 }, switch1Valid: { type: "boolean" }, switch2Id: { type: "integer", minimum: 0 }, switch2Valid: { type: "boolean" }, variableId: {
      type: "integer",
      minimum: 0
    }, variableValid: { type: "boolean" }, selfSwitchCh: { type: "string" }, selfSwitchValid: { type: "boolean" }, variableValue: { type: "integer" }, itemId: { type: "integer", minimum: 0 }, itemValid: {
      type: "boolean"
    }, actorId: { type: "integer" }, actorValid: { type: "boolean" } }
  }, image: { type: "object", required: ["characterIndex", "characterName", "direction", "pattern", "tileId"], properties: {
    characterIndex: { type: "integer", minimum: 0 },
    characterName: { type: "string" },
    direction: { type: "integer", enum: [2, 4, 6, 8] },
    pattern: { type: "integer" },
    tileId: { type: "integer" }
  } }, moveRoute: {
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
  } }
}, br = {
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
      pages: { type: "array", items: gr }
    } } }
  }
}, Ir = new e(), hr = Ir.compile(ur), vr = Ir.compile(br), fr = (e2) => hr(e2), kr = (e2) => vr(e2), xr = (e2, t2) => [Nr(e2.skills, t2), Tr(e2.actors, t2), Sr(e2.states, t2), wr(e2.armors, t2), qr(e2.classes, t2), Rr(e2.enemies, t2), Pr(e2.items, t2), Mr(e2.weapons, t2), Dr(e2.commonEvents, t2)], Nr = (e2, t2) => ({
  label: t2.skill.domainName,
  items: e2,
  source: { author: "rmmz", module: "data", kind: "skill" }
}), Tr = (e2, t2) => ({
  items: e2,
  label: t2.actor.domainName,
  source: { author: "rmmz", module: "data", kind: "actor" }
}), Sr = (e2, t2) => ({ items: e2, label: t2.state.domainName, source: { author: "rmmz", module: "data", kind: "state" } }), wr = (e2, t2) => ({ items: e2, label: t2.armor.domainName, source: {
  author: "rmmz",
  kind: "armor",
  module: "data"
} }), qr = (e2, t2) => ({ items: e2, label: t2.class.domainName, source: { author: "rmmz", module: "data", kind: "class" } }), Rr = (e2, t2) => ({ items: e2, label: t2.enemy.domainName, source: {
  author: "rmmz",
  module: "data",
  kind: "enemy"
} }), Pr = (e2, t2) => ({ items: e2, label: t2.item.domainName, source: { author: "rmmz", module: "data", kind: "item" } }), Mr = (e2, t2) => ({
  items: e2,
  label: t2.weapon.domainName,
  source: { author: "rmmz", module: "data", kind: "weapon" }
}), Dr = (e2, t2) => ({ items: e2, label: t2.commonEvent.domainName, source: {
  author: "rmmz",
  module: "data",
  kind: "common_event"
} }), Ar = {
  actor: { domainName: "アクター", options: {
    initialEquipments: "初期装備",
    faceImage: "顔画像",
    characterImage: "キャラクター画像",
    svBattlerImage: "SVバトラー画像",
    nickname: "ニックネーム",
    profile: "プロフィール",
    classId: "職業ID",
    initialLevel: "初期レベル",
    maxLevel: "最大レベル"
  } },
  class: { domainName: "職業", options: { params: "パラメータ", learnings: "習得スキル", expParams: "経験値パラメータ" } },
  armor: {
    domainName: "防具",
    options: { armorTypeId: "防具タイプID", slotTypeId: "スロットタイプID" }
  },
  enemy: {
    domainName: "敵キャラ",
    options: { dropItems: "ドロップアイテム", battlerHue: "バトラーヒュー", battlerName: "バトラー名", gold: "ゴールド" }
  },
  item: { domainName: "アイテム", options: { consumable: "消耗品" } },
  skill: { domainName: "スキル", options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  } },
  state: { domainName: "ステート", options: {
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
  } },
  weapon: { domainName: "武器", options: { weaponTypeId: "武器タイプID" } },
  usableItem: { domainName: "", options: { scope: "範囲", speed: "速度補正", successRate: "成功率" } },
  commonEvent: { domainName: "コモンイベント", options: {
    trigger: "トリガー",
    switchId: "スイッチID",
    name: "名前",
    id: "ID",
    list: "コマンドリスト"
  } }
}, jr = { domainName: "ダメージ", options: {} }, zr = (e2 = {}) => ({
  type: e2.type ?? 0,
  elementId: e2.elementId ?? 0,
  formula: e2.formula ?? "",
  variance: e2.variance ?? 0,
  critical: e2.critical ?? false
}), Er = { type: "object", required: ["type", "elementId", "formula", "variance", "critical"], properties: {
  type: { type: "integer", minimum: 0 },
  elementId: { type: "integer", minimum: 0 },
  formula: { type: "string" },
  variance: { type: "integer" },
  critical: { type: "boolean" }
} }, Cr = (e2 = {}) => ({
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
}), Hr = (e2) => ({
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
}), Fr = {
  type: "object",
  required: ["name", "id", "nickname", "battlerName", "characterName", "characterIndex", "faceName", "faceIndex", "classId", "initialLevel", "maxLevel"],
  properties: {
    name: { type: "string" },
    battlerName: { type: "string" },
    characterName: { type: "string" },
    characterIndex: { type: "integer" },
    faceName: { type: "string" },
    faceIndex: { type: "integer", minimum: 0, maximum: 7 },
    id: {
      type: "integer",
      minimum: 0
    },
    nickname: { type: "string" },
    profile: { type: "string" },
    initialLevel: { type: "integer", minimum: 0 },
    maxLevel: { type: "integer" },
    classId: { type: "integer", minimum: 0 },
    equips: { type: "array", items: { type: "integer" } },
    note: { type: "string" },
    traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: {
      type: "integer"
    } }, required: ["code", "dataId", "value"] } }
  }
}, Br = (e2 = {}) => ({
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
}), Lr = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "price", "params", "traits", "note", "etypeId", "atypeId"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: {
      type: "string"
    },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    atypeId: { type: "integer", minimum: 0 },
    params: {
      type: "array",
      items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }],
      minItems: 8,
      maxItems: 8
    },
    traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }, required: ["code", "dataId", "value"] } }
  }
}, Vr = {
  type: "object",
  required: ["name", "id", "note", "expParams", "params", "learnings", "traits"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    note: { type: "string" },
    expParams: { type: "array", items: { type: "integer" } },
    params: { type: "array", items: [{ type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, {
      type: "integer"
    }, { type: "integer" }], minItems: 8, maxItems: 8 },
    learnings: { type: "array", items: { type: "object", properties: { level: { type: "integer" }, skillId: { type: "integer" }, note: {
      type: "string"
    } }, required: ["level", "skillId"], additionalProperties: false } },
    traits: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: {
      type: "integer"
    } }, required: ["code", "dataId", "value"], additionalProperties: false } }
  },
  additionalProperties: false
}, Wr = (e2 = {}) => ({
  name: e2.name ?? "",
  id: e2.id ?? 0,
  traits: [],
  note: e2.note ?? "",
  params: [0, 0, 0, 0, 0, 0, 0, 0],
  learnings: e2.learnings ?? [],
  expParams: e2.expParams ?? []
}), Gr = {
  type: "object",
  required: ["name", "id", "battlerName", "battlerHue", "exp", "gold", "note", "params", "dropItems", "traits", "actions"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    battlerHue: { type: "integer", minimum: 0 },
    battlerName: { type: "string" },
    exp: { type: "integer", minimum: 0 },
    gold: { type: "integer", minimum: 0 },
    note: { type: "string" },
    params: { type: "array", items: [{
      type: "integer"
    }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }, { type: "integer" }], minItems: 8, maxItems: 8 },
    actions: {
      type: "array",
      items: { type: "object", required: ["conditionParam1", "conditionParam2", "conditionType", "skillId", "rating"], properties: { conditionParam1: { type: "integer" }, conditionParam2: {
        type: "integer"
      }, conditionType: { type: "integer" }, skillId: { type: "integer" }, rating: { type: "integer" } } }
    },
    traits: { type: "array", items: { type: "object", properties: {
      code: { type: "integer" },
      dataId: { type: "integer" },
      value: { type: "integer" }
    }, required: ["code", "dataId", "value"] } },
    dropItems: { type: "array", items: { type: "object", properties: { kind: { type: "integer" }, dataId: {
      type: "integer"
    }, denominator: { type: "integer", minimum: 0 }, rate: { type: "number" } }, required: ["kind", "dataId", "denominator"] } }
  }
}, Xr = (e2 = {}) => ({
  dataId: e2.dataId ?? 0,
  denominator: e2.denominator ?? 0,
  kind: e2.kind ?? 0
}), Yr = (e2 = {}) => ({
  conditionParam1: e2.conditionParam1 ?? 0,
  conditionParam2: e2.conditionParam2 ?? 0,
  conditionType: e2.conditionType ?? 0,
  rating: e2.rating ?? 0,
  skillId: e2.skillId ?? 0
}), Kr = (e2 = {}) => {
  var _a2;
  return {
    name: e2.name ?? "",
    id: e2.id ?? 0,
    battlerName: e2.battlerName ?? "",
    battlerHue: e2.battlerHue ?? 0,
    dropItems: ((_a2 = e2.dropItems) == null ? void 0 : _a2.map(() => Xr())) ?? [],
    exp: e2.exp ?? 0,
    gold: e2.gold ?? 0,
    traits: [],
    note: e2.note ?? "",
    params: [0, 0, 0, 0, 0, 0, 0, 0],
    actions: []
  };
}, $r = {
  type: "object",
  required: ["name", "id", "iconIndex", "message1", "message2", "message3", "message4", "restriction", "priority", "motion", "overlay", "removeAtBattleEnd", "removeByDamage", "removeByWalking", "removeByRestriction", "autoRemovalTiming", "minTurns", "maxTurns", "chanceByDamage", "stepsToRemove", "note"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    iconIndex: { type: "integer", minimum: 0 },
    message1: { type: "string" },
    message2: { type: "string" },
    message3: { type: "string" },
    message4: { type: "string" },
    restriction: { type: "integer" },
    priority: { type: "integer" },
    motion: { type: "integer" },
    overlay: { type: "integer" },
    removeAtBattleEnd: { type: "boolean" },
    removeByDamage: {
      type: "boolean"
    },
    removeByWalking: { type: "boolean" },
    removeByRestriction: { type: "boolean" },
    messageType: { type: "integer" },
    releaseByDamage: { type: "boolean" },
    autoRemovalTiming: {
      type: "integer"
    },
    minTurns: { type: "integer" },
    maxTurns: { type: "integer" },
    chanceByDamage: { type: "integer" },
    stepsToRemove: { type: "integer" },
    note: { type: "string" },
    traits: { type: "array", items: {
      type: "object",
      properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } },
      required: ["code", "dataId", "value"]
    } }
  }
}, Ur = (e2 = {}) => ({
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
}), Or = 11, _r = 12, Zr = 13, Jr = 14, Qr = 21, en = 22, tn = 23, an = 31, rn = 32, nn = 33, mn = 34, on = 35, sn = 41, pn = 42, dn = 43, ln = 44, cn = 51, yn = 52, un = 53, gn = 54, bn = 55, In = 61, hn = 62, vn = 63, fn = 64, kn = 0, xn = 1, Nn = 2, Tn = 3, Sn = (e2, t2) => ({
  items: wn(e2.options, t2),
  label: e2.domainName,
  source: { author: "rmmz", module: "trait", kind: "collaps" }
}), wn = (e2, t2) => [{ id: 0, name: t2.normal }, { id: 1, name: e2.bossCollaps }, {
  id: 2,
  name: e2.instantCollaps
}, { id: 3, name: e2.noneCollaps }], qn = 0, Rn = 1, Pn = 2, Mn = 3, Dn = 4, An = 5, jn = 6, zn = 7, En = 8, Cn = 9, Hn = (e2) => ({ items: Fn(e2.options), label: e2.domainName, source: {
  author: "rmmz",
  module: "trait",
  kind: "xparams"
} }), Fn = (e2) => [{ id: 0, name: e2.hitRate }, { id: 1, name: e2.evasionRate }, { id: 2, name: e2.criticalRate }, { id: 3, name: e2.criticalEvasionRate }, {
  id: 4,
  name: e2.magicEvasionRate
}, { id: 5, name: e2.magicReflectionRate }, { id: 6, name: e2.counterAttackRate }, { id: 7, name: e2.hpRegenerationRate }, { id: 8, name: e2.mpRegenerationRate }, { id: 9, name: e2.tpRegenerationRate }], Bn = (e2, t2) => {
  switch (e2) {
    case 3:
      return t2.criticalEvasionRate;
    case 1:
      return t2.evasionRate;
    case 6:
      return t2.counterAttackRate;
    case 2:
      return t2.criticalRate;
    case 0:
      return t2.hitRate;
    case 7:
      return t2.hpRegenerationRate;
    case 4:
      return t2.magicEvasionRate;
    case 5:
      return t2.magicReflectionRate;
    case 8:
      return t2.mpRegenerationRate;
    case 9:
      return t2.tpRegenerationRate;
  }
  return `?xparams[${e2}]`;
}, Ln = 0, Vn = 1, Wn = 2, Gn = 3, Xn = 4, Yn = 5, Kn = 6, $n = 7, Un = (e2) => ({ items: On(e2.options), label: e2.domainName, source: { author: "rmmz", module: "trait", kind: "params" } }), On = (e2) => [{
  id: 0,
  name: e2.maxHp
}, { id: 1, name: e2.maxMp }, { id: 2, name: e2.atk }, { id: 3, name: e2.def }, { id: 4, name: e2.matk }, { id: 5, name: e2.mdef }, { id: 6, name: e2.agi }, { id: 7, name: e2.luk }], _n = (e2, t2) => {
  switch (e2) {
    case 0:
      return t2.maxHp;
    case 1:
      return t2.maxMp;
    case 2:
      return t2.atk;
    case 3:
      return t2.def;
    case 4:
      return t2.matk;
    case 5:
      return t2.mdef;
    case 6:
      return t2.agi;
    case 7:
      return t2.luk;
    default:
      return `?rparams[${e2}]`;
  }
}, Zn = 0, Jn = 1, Qn = 2, em = 3, tm = 4, am = 5, im = 6, rm = 7, nm = 8, mm = 9, om = (e2) => ({
  items: sm(e2.options),
  label: e2.domainName,
  source: { author: "rmmz", module: "trait", kind: "sparams" }
}), sm = (e2) => [{ id: 0, name: e2.targetRate }, { id: 1, name: e2.guardEffectRate }, { id: 2, name: e2.recoveryEffectRate }, { id: 3, name: e2.pharmacology }, { id: 4, name: e2.mpCostRate }, { id: 5, name: e2.tpChargeRate }, {
  id: 6,
  name: e2.physicalDamageRate
}, { id: 7, name: e2.magicDamageRate }, { id: 8, name: e2.floorDamageRate }, { id: 9, name: e2.experienceRate }], pm = (e2, t2) => {
  switch (e2) {
    case 9:
      return t2.experienceRate;
    case 0:
      return t2.targetRate;
    case 8:
      return t2.floorDamageRate;
    case 1:
      return t2.guardEffectRate;
    case 4:
      return t2.mpCostRate;
    case 5:
      return t2.tpChargeRate;
    case 6:
      return t2.physicalDamageRate;
    case 7:
      return t2.magicDamageRate;
    case 3:
      return t2.pharmacology;
    case 2:
      return t2.recoveryEffectRate;
  }
  return `?sparams[${e2}]`;
}, dm = 0, lm = 1, cm = 2, ym = 3, um = 4, gm = 5, bm = (e2) => ({ items: Im(e2.options), label: e2.domainName, source: { author: "rmmz", module: "trait", kind: "partyAbility" } }), Im = (e2) => [{ id: 0, name: e2.encounterHalf }, {
  id: 1,
  name: e2.encounterNone
}, { id: 2, name: e2.cancelSurprise }, { id: 3, name: e2.raisePreemptive }, { id: 4, name: e2.goldDouble }, { id: 5, name: e2.dropItemDouble }], hm = 0, vm = 1, fm = 2, km = 3, xm = (e2) => ({
  items: Nm(e2.options),
  label: e2.domainName,
  source: { author: "rmmz", module: "trait", kind: "sflag" }
}), Nm = (e2) => [{ id: 0, name: e2.autoBattle }, { id: 1, name: e2.guard }, { id: 2, name: e2.substitute }, {
  id: 3,
  name: e2.preventEscape
}], Tm = "{name}", Sm = "{name} * {value}%", wm = "{name} + {value}%", qm = "{value}", Rm = { domainName: "特徴", options: { regularParam: { domainName: "基本能力値", format: Sm, options: {
  maxHp: "最大HP",
  maxMp: "最大MP",
  atk: "攻撃力",
  def: "防御力",
  matk: "魔法攻撃力",
  mdef: "魔法防御力",
  agi: "敏捷性",
  luk: "運"
} }, extraParam: { domainName: "追加能力値", format: wm, options: {
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
} }, specialParam: { domainName: "特殊能力値", format: Sm, options: {
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
} }, specialFlag: {
  domainName: "特殊フラグ",
  format: Tm,
  options: { autoBattle: "自動戦闘", guard: "防御", substitute: "身代わり", preventEscape: "逃走防止" }
}, collaps: { domainName: "消滅エフェクト", format: Tm, options: {
  bossCollaps: "ボス崩壊",
  instantCollaps: "即時崩壊",
  noneCollaps: "崩壊なし"
} }, partyAbility: { domainName: "パーティ能力", format: Tm, options: {
  cancelSurprise: "不意打ち無効",
  dropItemDouble: "アイテムドロップ2倍",
  encounterHalf: "エンカウント半減",
  encounterNone: "エンカウントなし",
  goldDouble: "ゴールド2倍",
  raisePreemptive: "先制攻撃率アップ"
} }, elementRate: { domainName: "属性有効度", format: Sm }, debuffRate: { domainName: "弱体有効度", format: Sm }, stateRate: {
  domainName: "ステート有効度",
  format: Sm
}, stateResist: { domainName: "ステート無効", format: Tm }, attackElement: { domainName: "攻撃属性", format: Tm }, attackState: { domainName: "攻撃ステート", format: wm }, attackSpeed: {
  domainName: "攻撃速度補正",
  format: qm
}, attackTimes: { domainName: "攻撃追加回数", format: qm }, actionPlus: { domainName: "行動追加", format: Sm }, attackSkill: { domainName: "攻撃スキル", format: Tm }, equipWeaponType: {
  domainName: "装備武器タイプ",
  format: Tm
}, equipArmorType: { domainName: "装備防具タイプ", format: Tm }, equipLock: { domainName: "装備固定", format: Tm }, equipSeal: { domainName: "装備封印", format: Tm }, slotType: {
  domainName: "スロットタイプ",
  format: Tm
}, skillAdd: { domainName: "スキル追加", format: Tm }, skillSeal: { domainName: "スキルタイプ封印", format: Tm }, skillTypeAdd: { domainName: "スキルタイプ追加", format: Tm }, skillTypeSeal: {
  domainName: "スキルタイプ封印",
  format: Tm
} } }, Pm = (e2, t2) => [Un(e2.regularParam), Hn(e2.extraParam), om(e2.specialParam), Sn(e2.collaps, t2), xm(e2.specialFlag), bm(e2.partyAbility)], Mm = "Trait", Dm = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: { code: { type: "integer" }, dataId: { type: "integer" }, value: { type: "integer" } }
}, Am = { itemMapper: {
  placeHolder: "name",
  dataIdKey: "dataId",
  kindKey: "code"
}, placeHolder: { numbers: ["value"] } }, jm = (e2, t2, a2) => {
  const i2 = Ge(Am);
  return it(t2, a2, i2, e2.pattern, (e3) => e3.dataId);
}, zm = (e2 = {}) => ({
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
  damage: zr(e2.damage ?? {}),
  wtypeId: e2.wtypeId ?? 0
}), Em = {
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
}, Cm = {
  domainName: "武器",
  options: { weaponTypeId: "武器タイプID" }
}, Hm = 0, Fm = 1, Bm = 2, Lm = 11, Vm = 12, Wm = 13, Gm = 21, Xm = 22, Ym = 31, Km = 32, $m = 33, Um = 34, Om = 41, _m = 42, Zm = 43, Jm = 44, Qm = (e2) => [ao(e2), io(e2), ro(e2), no(e2), mo(e2), oo(e2), so(e2), po(e2), lo(e2), to(e2), co(e2), yo(e2), uo(e2)], eo = (e2, t2, a2) => ({
  kindId: e2,
  label: t2.domainName,
  pattern: t2.format,
  description: t2.desc,
  dataSource: a2
}), to = (e2) => eo(41, e2.special), ao = (e2) => eo(11, e2.recoverHp), io = (e2) => eo(12, e2.recoverMp), ro = (e2) => eo(13, e2.gainTp), no = (e2) => eo(21, e2.addState, {
  author: "rmmz",
  module: "data",
  kind: "state"
}), mo = (e2) => eo(22, e2.removeState, { author: "rmmz", module: "data", kind: "state" }), oo = (e2) => eo(31, e2.addBuff, { author: "rmmz", module: "trait", kind: "params" }), so = (e2) => eo(32, e2.addDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), po = (e2) => eo(33, e2.removeBuff, { author: "rmmz", module: "trait", kind: "params" }), lo = (e2) => eo(34, e2.removeDebuff, {
  author: "rmmz",
  module: "trait",
  kind: "params"
}), co = (e2) => eo(42, e2.grow, { author: "rmmz", module: "trait", kind: "params" }), yo = (e2) => eo(43, e2.learnSkill, { author: "rmmz", module: "data", kind: "skill" }), uo = (e2) => eo(44, e2.commonEvent, {
  author: "rmmz",
  module: "data",
  kind: "common_event"
}), go = "{name} {value1}%", bo = "{value1}% + {value2}", Io = "{name} {value1}ターン", ho = "{name}", vo = { domainName: "使用効果", options: { addBuff: {
  desc: "バフを付与する",
  domainName: "バフ付与",
  format: Io
}, addDebuff: { desc: "デバフを付与する", domainName: "デバフ付与", format: Io }, gainTp: { desc: "TPを指定した量だけ増加させます。", domainName: "TP増加", format: bo }, grow: {
  desc: "成長効果",
  domainName: "成長効果",
  format: "{name} + {value1}"
}, learnSkill: { desc: "スキルを習得する", domainName: "スキル習得", format: ho }, recoverHp: {
  desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "HP回復",
  format: bo
}, recoverMp: {
  desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
  domainName: "MP回復",
  format: bo
}, removeBuff: { desc: "バフを解除する", domainName: "バフ解除", format: ho }, removeDebuff: {
  desc: "デバフを解除する",
  domainName: "デバフ解除",
  format: ho
}, removeState: { desc: "指定したステートを付加します。", domainName: "ステート付加", format: go }, special: { desc: "特殊効果", domainName: "特殊効果", format: ho }, addState: {
  desc: "状態異常を解除する",
  domainName: "ステート解除",
  format: go
}, commonEvent: { desc: "コモンイベントを実行する", domainName: "コモンイベント", format: ho } } }, fo = 0, ko = (e2, t2, a2) => {
  const i2 = a2.find((e3) => e3.id === t2.dataId), r2 = i2 ? i2.name : "Unknown Item";
  return e2.pattern.replaceAll("{value1}", t2.value1.toString()).replaceAll("{value2}", t2.value2.toString()).replaceAll("{name}", r2);
}, xo = {
  domainName: "アイテム",
  options: { consumable: "消耗品" }
}, No = { domainName: "スキル", options: { requiredWeaponTypeId1: "必要武器タイプ1", requiredWeaponTypeId2: "必要武器タイプ2", mpCost: "MP消費", tpCost: "TP消費" } }, To = { domainName: "", options: {
  scope: "範囲",
  speed: "速度補正",
  successRate: "成功率"
} }, So = () => ({ author: He, module: ts, kind: os }), wo = (e2 = {}) => ({
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
  damage: zr(e2.damage ?? {}),
  effects: [],
  price: 0
}), qo = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "message1", "message2", "messageType", "mpCost", "requiredWtypeId1", "requiredWtypeId2", "stypeId", "tpCost", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "note", "effects"],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    message1: { type: "string" },
    message2: { type: "string" },
    messageType: { type: "integer" },
    mpCost: { type: "integer" },
    requiredWtypeId1: { type: "integer" },
    requiredWtypeId2: { type: "integer" },
    stypeId: { type: "integer" },
    tpCost: { type: "integer" },
    animationId: { type: "integer", minimum: 0 },
    hitType: { type: "integer" },
    occasion: { type: "integer" },
    repeats: { type: "integer" },
    scope: { type: "integer" },
    speed: { type: "integer" },
    successRate: {
      type: "integer"
    },
    tpGain: { type: "integer" },
    note: { type: "string" },
    effects: { type: "array", items: { type: "object", properties: { code: { type: "integer" }, dataId: { type: "integer" }, value1: {
      type: "integer"
    }, value2: { type: "integer" } }, required: ["code", "dataId", "value1", "value2"], additionalProperties: false } },
    damage: { type: "object", properties: { type: { type: "integer" }, elementId: {
      type: "integer"
    }, formula: { type: "string" }, variance: { type: "integer" }, critical: { type: "boolean" } }, required: ["type", "elementId", "formula", "variance", "critical"], additionalProperties: false }
  },
  additionalProperties: false
}, Ro = {
  type: "object",
  required: ["name", "id", "description", "iconIndex", "note", "animationId", "hitType", "occasion", "repeats", "scope", "speed", "successRate", "tpGain", "consumable", "price", "effects"],
  properties: { name: { type: "string" }, id: { type: "integer", minimum: 0 }, description: { type: "string" }, iconIndex: { type: "integer", minimum: 0 }, note: { type: "string" }, animationId: {
    type: "integer",
    minimum: 0
  }, hitType: { type: "integer" }, occasion: { type: "integer" }, repeats: { type: "integer" }, scope: { type: "integer" }, speed: { type: "integer" }, successRate: { type: "integer" }, tpGain: {
    type: "integer"
  }, consumable: { type: "boolean" }, price: { type: "integer", minimum: 0 }, itypeId: { type: "integer" }, effects: { type: "array", items: { type: "object", properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value1: { type: "integer" },
    value2: { type: "integer" }
  }, required: ["code", "dataId", "value1", "value2"], additionalProperties: false } }, damage: {
    type: "object",
    properties: {
      type: { type: "integer" },
      elementId: { type: "integer" },
      formula: { type: "string" },
      variance: { type: "integer" },
      critical: { type: "boolean" }
    },
    required: ["type", "elementId", "formula", "variance", "critical"],
    additionalProperties: false
  } }
}, Po = (e2 = {}) => ({
  stypeId: e2.stypeId ?? 0,
  requiredWtypeId1: e2.requiredWtypeId1 ?? 0,
  requiredWtypeId2: e2.requiredWtypeId2 ?? 0,
  animationId: e2.animationId ?? 0,
  damage: zr(e2.damage ?? {}),
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
}), Mo = new e(), Do = Mo.compile(Ro), Ao = Mo.compile(qo), jo = Mo.compile(Fr), zo = Mo.compile(Lr), Eo = Mo.compile(Em), Co = Mo.compile(Gr), Ho = Mo.compile($r), Fo = Mo.compile(Vr), Bo = (e2) => Do(e2), Lo = (e2) => Ao(e2), Vo = (e2) => jo(e2), Wo = (e2) => zo(e2), Go = (e2) => Eo(e2), Xo = (e2) => Co(e2), Yo = (e2) => Ho(e2), Ko = (e2) => Fo(e2), $o = (e2, t2) => `<${e2}:${t2}>`, Uo = () => /<([^<>:]{1,100}):([^>]{1,1000})>/g, Oo = (e2, t2) => Zo(e2.note, (a2, i2) => t2(a2, i2, e2)), _o = (e2) => Zo(e2, (e3, t2) => [e3, t2]), Zo = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return Array.from(e2.matchAll(a2), (e3) => t2(e3[1], e3[2]));
}, Jo = (e2, t2) => {
  if (e2.length >= 3e3) throw new Error("Note text is too long. Please shorten it.");
  return e2.replaceAll(/<([^<>:]{1,100}):([^>]{1,1000})>/g, (e3, a2, i2) => {
    const r2 = t2(a2, i2);
    if (r2.length >= 1e3) throw new Error("Note text is too long. Please shorten it.");
    return $o(a2, r2);
  });
}, Qo = (e2, t2) => {
  const a2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g, i2 = Array.from(e2.matchAll(a2)).find((e3) => e3[1] === t2);
  return i2 ? i2[2] : void 0;
}, es = (e2, t2, a2) => {
  const i2 = /<([^<>:]{1,100}):([^>]{1,1000})>/g;
  return e2.replace(i2, (e3, i3) => i3 === t2 ? $o(i3, a2) : e3);
}, ts = "data", as = "actor", is = "map", rs = "enemy", ns = "state", ms = "skill", os = "item", ss = "weapon", ps = "armor", ds = "class", ls = "common_event", cs = "troop", ys = (e2) => [us(e2.elementRate), gs(e2.debuffRate), bs(e2.stateRate), Is(e2.stateResist), hs(e2.regularParam), vs(e2.extraParam), fs(e2.specialParam), ks(e2.attackElement), xs(e2.attackState), Ns(e2.attackSpeed), Ts(e2.attackTimes), Ss(e2.attackSkill), ws(e2.skillTypeAdd), qs(e2.skillTypeSeal), Rs(e2.skillAdd), Ps(e2.skillSeal), Ms(e2.equipWeaponType), Ds(e2.equipArmorType), As(e2.equipLock), js(e2.equipSeal), zs(e2.slotType), Es(e2.actionPlus), Cs(e2.specialFlag), Hs(e2.collaps), Fs(e2.partyAbility)], us = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 11,
  dataSource: Vs()
}), gs = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 12,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), bs = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 13, dataSource: Bs() }), Is = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 14, dataSource: Bs() }), hs = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 21,
  dataSource: { author: "rmmz", module: "trait", kind: "params" }
}), vs = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 22, dataSource: {
  author: "rmmz",
  module: "trait",
  kind: "xparams"
} }), fs = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 23, dataSource: { author: "rmmz", module: "trait", kind: "sparams" } }), ks = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 31,
  dataSource: Vs()
}), xs = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 32, dataSource: Bs() }), Ns = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 33
}), Ts = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 34 }), Ss = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 35, dataSource: Ls() }), ws = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 41,
  dataSource: Ws()
}), qs = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 42, dataSource: Ws() }), Rs = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 43, dataSource: Ls() }), Ps = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 44,
  dataSource: Ls()
}), Ms = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 51, dataSource: Gs() }), Ds = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 52,
  dataSource: Xs()
}), As = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 53, dataSource: Ys() }), js = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 54, dataSource: Ys() }), zs = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 55,
  dataSource: Ys()
}), Es = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 61 }), Cs = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 62,
  dataSource: { author: "rmmz", module: "trait", kind: "sflag" }
}), Hs = (e2) => ({ pattern: e2.format, label: e2.domainName, kindId: 63, dataSource: { author: "rmmz", module: "trait", kind: "collaps" } }), Fs = (e2) => ({
  pattern: e2.format,
  label: e2.domainName,
  kindId: 64,
  dataSource: { author: "rmmz", module: "trait", kind: "partyAbility" }
}), Bs = () => ({ author: "rmmz", module: "data", kind: "state" }), Ls = () => ({
  author: "rmmz",
  module: "data",
  kind: "skill"
}), Vs = () => ({ author: "rmmz", module: "system", kind: "elements" }), Ws = () => ({ author: "rmmz", module: "system", kind: "skillTypes" }), Gs = () => ({
  author: "rmmz",
  module: "system",
  kind: "weaponTypes"
}), Xs = () => ({ author: "rmmz", module: "system", kind: "armorTypes" }), Ys = () => ({ author: "rmmz", module: "system", kind: "equipTypes" }), Ks = {
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
}, $s = () => ({
  rpg: { damage: jr, data: Ar, traits: Rm, itemEffect: vo },
  global: Ks
}), Us = (e2, t2, a2, i2, r2, n2) => [...Pm(a2, i2), ...xr(e2, t2), ...V(r2, n2)], Os = (e2, t2) => Je(ys(t2), e2), _s = (e2, t2, a2) => {
  const i2 = Qm(t2);
  return Je(a2 ? [...i2, ...a2] : i2, e2);
}, Zs = (e2) => Object.entries(e2).map(([, e3]) => e3.domainName), Js = (e2, t2 = 0) => ({ code: 320, parameters: [e2.actorId, e2.name], indent: t2 }), Qs = (e2, t2 = 0) => ({
  code: 324,
  parameters: [e2.actorId, e2.nickname],
  indent: t2
}), ep = (e2, t2 = 0) => ({ code: 325, parameters: [e2.actorId, e2.profile], indent: t2 }), tp = (e2, t2) => ap(e2, r({ name: t2 })), ap = (e2, t2, a2 = 0) => ({
  code: e2,
  parameters: [r(t2)],
  indent: a2
}), ip = (e2, t2 = 0) => ap(241, e2, t2), rp = (e2, t2 = 0) => ap(245, e2, t2), np = (e2, t2 = 0) => ap(249, e2, t2), mp = (e2, t2 = 0) => ap(250, e2, t2), op = (e2, t2 = 0) => ap(132, e2, t2), sp = (e2, t2 = 0) => ap(133, e2, t2), pp = (e2, t2 = 0) => ap(139, e2, t2), dp = (e2, t2 = 0) => ({
  code: 117,
  indent: t2,
  parameters: cp(e2 ?? {})
}), lp = (e2) => ({ eventId: e2[0] }), cp = (e2) => [e2.eventId ?? 0], yp = (e2) => ({ min: e2[0], max: e2[1], value: e2[2] }), up = (e2) => [e2.min, e2.max, e2.value], gp = (e2, t2 = 0) => ({
  code: 121,
  indent: t2,
  parameters: up(e2)
}), bp = (e2) => [e2], Ip = (e2) => ({ comment: e2[0] }), hp = (e2, t2 = 0) => ({ code: 108, indent: t2, parameters: bp(e2) }), vp = (e2, t2 = 0) => ({
  code: 408,
  indent: t2,
  parameters: bp(e2)
}), fp = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? hp(e3, t2) : vp(e3, t2)), kp = (e2) => [e2.variableId ?? 0, e2.digits ?? 0], xp = (e2) => ({ variableId: e2[0], digits: e2[1] }), Np = (e2, t2 = 0) => ({
  code: 103,
  indent: t2,
  parameters: kp(e2 ?? {})
}), Tp = (e2 = {}) => [(e2 == null ? void 0 : e2.speed) ?? 4, (e2 == null ? void 0 : e2.skip) ?? false], Sp = (e2) => ({ speed: e2[0], skip: e2[1] }), wp = (e2 = {}, t2 = 0) => ({ code: 105, indent: t2, parameters: Tp(e2) }), qp = (e2 = "") => [e2], Rp = (e2) => ({ content: e2[0] }), Pp = (e2 = "", t2 = 0) => ({
  code: 405,
  indent: t2 ?? 0,
  parameters: qp(e2)
}), Mp = (e2, t2 = 0) => ({ code: 402, indent: t2, parameters: [(e2 == null ? void 0 : e2.index) ?? 0, (e2 == null ? void 0 : e2.name) ?? ""] }), Dp = (e2) => ({ index: e2[0], name: e2[1] }), Ap = (e2) => [e2.index ?? 0, e2.name ?? ""], jp = (e2) => ({
  choices: e2[0],
  cancelType: e2[1],
  defaultType: e2[2],
  positionType: e2[3],
  background: e2[4]
}), zp = (e2) => [e2.choices ?? [], e2.cancelType ?? 0, e2.defaultType ?? 0, e2.positionType ?? 2, e2.background ?? 0], Ep = (e2, t2 = 0) => ({
  code: 102,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.choices) ?? [], (e2 == null ? void 0 : e2.cancelType) ?? 0, (e2 == null ? void 0 : e2.defaultType) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.background) ?? 0]
}), Cp = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: [[...e2.parameters[0]], e2.parameters[1], e2.parameters[2], e2.parameters[3], e2.parameters[4]]
}), Hp = (e2, t2 = 0) => ({
  code: 101,
  indent: t2,
  parameters: [(e2 == null ? void 0 : e2.facename) ?? "", (e2 == null ? void 0 : e2.faceIndex) ?? 0, (e2 == null ? void 0 : e2.background) ?? 0, (e2 == null ? void 0 : e2.positionType) ?? 2, (e2 == null ? void 0 : e2.speakerName) ?? ""]
}), Fp = (e2) => ({
  facename: e2[0],
  faceIndex: e2[1],
  background: e2[2],
  positionType: e2[3],
  speakerName: e2[4]
}), Bp = (e2) => [e2.facename, e2.faceIndex, e2.background, e2.positionType, e2.speakerName], Lp = (e2, t2 = 0) => ({ code: 401, indent: t2, parameters: [e2] }), Vp = (e2, t2 = 0) => ({
  code: 355,
  indent: t2,
  parameters: [e2]
}), Wp = (e2, t2 = 0) => ({ code: 655, indent: t2, parameters: [e2] }), Gp = (e2, t2 = 0) => e2.map((e3, a2) => 0 === a2 ? Vp(e3, t2) : Wp(e3, t2)), Xp = 0, Yp = 1, Kp = 2, $p = 3, Up = 4, Op = {
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
}, _p = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 0, t2.value], Zp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 1, t2.variableId], Jp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 2, t2.min, t2.max], Qp = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 4, t2.code], ed = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, t2.type, t2.itemId], td = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 3, t2.index, t2.param], ad = (e2, t2, a2 = 0) => [e2.startId, e2.endId ?? e2.startId, a2, 3, 4, t2.index, Op[t2.param]], id = (e2, t2) => {
  switch (t2[6]) {
    case 0:
      return e2.hp;
    case 1:
      return e2.mp;
    case 10:
      return e2.tp;
  }
  return t2[6] >= 2 && t2[6] <= 9 ? e2.param(t2[6] - 2) : 0;
}, rd = (e2, t2) => {
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
}, nd = (e2) => [...e2], md = (e2) => ({
  code: e2.code,
  indent: e2.indent,
  parameters: nd(e2.parameters)
}), od = (e2) => "string" == typeof e2 || "number" == typeof e2 || "boolean" == typeof e2, sd = (e2) => e2.parameters.every(od), pd = new e(), dd = pd.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [320, 324, 325] }, indent: { type: "integer" }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{
    type: "integer",
    minimum: 0
  }, { type: "string" }] } },
  additionalProperties: false
}), ld = (e2) => dd(e2), cd = pd.compile({ type: "object", properties: { code: { type: "number", const: 105 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "number" }, { type: "boolean" }] } }, required: ["code", "indent", "parameters"] }), yd = (e2) => cd(e2), ud = pd.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [132, 133, 139, 241, 245, 249, 250] }, indent: { type: "integer" }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{
      type: "object",
      properties: { name: { type: "string" }, volume: { type: "integer" }, pitch: { type: "integer" }, pan: { type: "integer" } },
      required: ["name", "volume", "pitch", "pan"],
      additionalProperties: false
    }]
  } },
  additionalProperties: false
}), gd = (e2) => ud(e2), bd = pd.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 0, maxItems: 0 }, code: {
    type: "integer",
    enum: [0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244, 251, 314, 315, 340, 351, 352, 353, 354, 411]
  } },
  additionalProperties: false
}), Id = (e2) => bd(e2), hd = pd.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", enum: [108, 355, 401, 405, 408, 655] }, indent: { type: "integer", minimum: 0 }, parameters: {
    type: "array",
    minItems: 1,
    maxItems: 1,
    items: [{ type: "string" }]
  } },
  additionalProperties: false
}), vd = (e2) => hd(e2), fd = pd.compile({ type: "object", properties: { code: { type: "number", const: 117 }, indent: {
  type: "integer",
  minimum: 0
}, parameters: { type: "array", minItems: 1, maxItems: 1, items: [{ type: "number", minimum: 0, default: 0 }] } }, required: ["code", "indent", "parameters"] }), kd = (e2) => fd(e2), xd = pd.compile({
  type: "object",
  properties: { code: { type: "number", const: 102 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 5, maxItems: 5, items: [{ type: "array", items: { type: "string" } }, {
    type: "integer"
  }, { type: "integer" }, { type: "integer" }, { type: "integer" }] } },
  required: ["code", "indent", "parameters"]
}), Nd = (e2) => xd(e2), Td = pd.compile({
  type: "object",
  properties: { code: {
    type: "number",
    const: 402
  }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", minItems: 2, maxItems: 2, items: [{ type: "integer" }, { type: "string" }] } },
  required: ["code", "indent", "parameters"]
}), Sd = (e2) => Td(e2), wd = pd.compile({ type: "object", properties: { code: { type: "number", const: 103 }, indent: { type: "integer", minimum: 0 }, parameters: {
  type: "array",
  minItems: 2,
  maxItems: 2,
  items: [{ type: "number" }, { type: "number" }]
} }, required: ["code", "indent", "parameters"] }), qd = (e2) => wd(e2), Rd = pd.compile({
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: { code: { type: "integer", const: 101 }, indent: { type: "integer", minimum: 0 }, parameters: { type: "array", items: [{ type: "string" }, {
    type: "integer",
    minimum: 0,
    maximum: 7
  }, { type: "integer", minimum: 0, maximum: 2 }, { type: "integer", minimum: 0, maximum: 2 }, { type: "string" }], minItems: 5, maxItems: 5 } }
}), Pd = (e2) => Rd(e2), Md = (e2) => gd(e2) && 241 === e2.code, Dd = (e2) => gd(e2) && 245 === e2.code, Ad = (e2) => gd(e2) && 249 === e2.code, jd = (e2) => gd(e2) && 250 === e2.code, zd = (e2) => gd(e2) && 132 === e2.code, Ed = (e2) => gd(e2) && 133 === e2.code, Cd = (e2) => gd(e2) && 139 === e2.code, Hd = (e2) => vd(e2) && 401 === e2.code, Fd = (e2) => vd(e2) && 405 === e2.code, Bd = (e2) => vd(e2) && 108 === e2.code, Ld = (e2) => vd(e2) && 408 === e2.code, Vd = (e2) => vd(e2) && 355 === e2.code, Wd = (e2) => vd(e2) && 655 === e2.code, Gd = "bgm", Xd = "se", Yd = "me", Kd = "bgs", $d = "battlebacks1", Ud = "battlebacks2", Od = "characters", _d = "enemies", Zd = "faces", Jd = "parallaxes", Qd = "pictures", el = "sv_actors", tl = "sv_enemies", al = "system", il = "tilesets", rl = "titles1", nl = "titles2", ml = "System.json", ol = "Actors.json", sl = "Classes.json", pl = "Skills.json", dl = "Items.json", ll = "Weapons.json", cl = "Armors.json", yl = "Enemies.json", ul = "Troops.json", gl = "States.json", bl = "Animations.json", Il = "Tilesets.json", hl = "CommonEvents.json", vl = "MapInfos.json", fl = "data", kl = "img", xl = "audio", Nl = "js";
export {
  mi as ABORT_BATTLE,
  He as AUTHOR_RMMZ,
  Ha as BATTLE_PROCESSING,
  Ua as CHANGE_ACTOR_IMAGES,
  Wt as CHANGE_ARMORS,
  za as CHANGE_BATTLE_BACKGROUND,
  Xt as CHANGE_BATTLE_BGM,
  $a as CHANGE_CLASS,
  Zt as CHANGE_DEFEAT_ME,
  Ut as CHANGE_ENCOUNTER,
  Ja as CHANGE_ENEMY_HP,
  Qa as CHANGE_ENEMY_MP,
  ei as CHANGE_ENEMY_STATE,
  si as CHANGE_ENEMY_TP,
  Ya as CHANGE_EXP,
  Ot as CHANGE_FORMATION_ACCESS,
  Bt as CHANGE_GOLD,
  Va as CHANGE_HP,
  Lt as CHANGE_ITEMS,
  $t as CHANGE_MENU_ACCESS,
  Wa as CHANGE_MP,
  Ka as CHANGE_NAME,
  _a as CHANGE_NICKNAME,
  Ea as CHANGE_PARALLAX,
  Gt as CHANGE_PARTY_MEMBER,
  pa as CHANGE_PLAYER_FOLLOWERS,
  Za as CHANGE_PROFILE,
  Kt as CHANGE_SAVE_ACCESS,
  ja as CHANGE_TILESET,
  Ga as CHANGE_TP,
  na as CHANGE_TRANSPARENCY,
  Jt as CHANGE_VEHICLE_BGM,
  Oa as CHANGE_VEHICLE_IMAGE,
  Yt as CHANGE_VICTORY_ME,
  Vt as CHANGE_WEAPONS,
  _t as CHANGE_WINDOW_COLOR,
  xn as COLLAPS_BOSS,
  Nn as COLLAPS_INSTANT,
  Tn as COLLAPS_NONE,
  kn as COLLAPS_NORMAL,
  St as COMMENT_BODY,
  Tt as COMMENT_HEAD,
  At as COMMON_EVENT,
  qt as CONDITIONAL_BRANCH,
  Rt as CONDITIONAL_BRANCH_ELSE,
  Ht as CONTROL_SELF_SWITCH,
  Et as CONTROL_SWITCHES,
  Ft as CONTROL_TIMER,
  Ct as CONTROL_VARIABLES,
  jr as DEFAULT_DAMAGE_LABELS,
  Ks as DEFAULT_GLOBAL_LABELS,
  xo as DEFAULT_ITEM_LABELS,
  No as DEFAULT_SKILL_LABELS,
  ve as DEFAULT_SYSTEM_LABELS_BOOLEAN,
  fe as DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  To as DEFAULT_USABLE_ITEM_LABELS,
  Ym as EFFECT_ADD_BUFF,
  Km as EFFECT_ADD_DEBUFF,
  Gm as EFFECT_ADD_STATE,
  Jm as EFFECT_COMMON_EVENT,
  Wm as EFFECT_GAIN_TP,
  _m as EFFECT_GROW,
  Zm as EFFECT_LEARN_SKILL,
  Lm as EFFECT_RECOVER_HP,
  Vm as EFFECT_RECOVER_MP,
  $m as EFFECT_REMOVE_BUFF,
  Um as EFFECT_REMOVE_DEBUFF,
  Xm as EFFECT_REMOVE_STATE,
  Om as EFFECT_SPECIAL,
  ai as ENEMY_APPEAR,
  ti as ENEMY_RECOVER_ALL,
  ii as ENEMY_TRANSFORM,
  sa as ERASE_EVENT,
  ka as ERASE_PICTURE,
  Dt as EXIT_EVENT_PROCESSING,
  Mn as EXTRA_PARAM_CEV,
  jn as EXTRA_PARAM_CNT,
  Pn as EXTRA_PARAM_CRI,
  Rn as EXTRA_PARAM_EVA,
  qn as EXTRA_PARAM_HIT,
  zn as EXTRA_PARAM_HRG,
  Dn as EXTRA_PARAM_MEV,
  An as EXTRA_PARAM_MRF,
  En as EXTRA_PARAM_MRG,
  Cn as EXTRA_PARAM_TRG,
  ca as FADEIN_SCREEN,
  Ta as FADEOUT_BGM,
  Ra as FADEOUT_BGS,
  la as FADEOUT_SCREEN,
  ol as FILENAME_ACTORS,
  bl as FILENAME_ANIMATIONS,
  cl as FILENAME_ARMORS,
  sl as FILENAME_CLASSES,
  hl as FILENAME_COMMON_EVENTS,
  yl as FILENAME_ENEMIES,
  dl as FILENAME_ITEMS,
  vl as FILENAME_MAP_INFOS,
  pl as FILENAME_SKILLS,
  gl as FILENAME_STATES,
  ml as FILENAME_SYSTEM,
  Il as FILENAME_TILESET,
  ul as FILENAME_TROOPS,
  ll as FILENAME_WEAPONS,
  hm as FLAG_ID_AUTO_BATTLE,
  vm as FLAG_ID_GUARD,
  km as FLAG_ID_PRESERVE_TP,
  fm as FLAG_ID_SUBSTITUTE,
  ua as FLASH_SCREEN,
  xl as FOLDER_AUDIO,
  Gd as FOLDER_AUDIO_BGM,
  Kd as FOLDER_AUDIO_BGS,
  Yd as FOLDER_AUDIO_ME,
  Xd as FOLDER_AUDIO_SE,
  fl as FOLDER_DATA,
  kl as FOLDER_IMG,
  $d as FOLDER_IMG_BATTLEBACK1,
  Ud as FOLDER_IMG_BATTLEBACK2,
  Od as FOLDER_IMG_CHACTERS,
  _d as FOLDER_IMG_ENEMIES,
  Zd as FOLDER_IMG_FACES,
  Jd as FOLDER_IMG_PARALLACES,
  Qd as FOLDER_IMG_PICTURES,
  el as FOLDER_IMG_SV_ACTORS,
  tl as FOLDER_IMG_SV_ENEMIES,
  al as FOLDER_IMG_SYSTEM,
  il as FOLDER_IMG_TILESETS,
  rl as FOLDER_IMG_TITLES1,
  nl as FOLDER_IMG_TITLES2,
  Nl as FOLDER_JS,
  ni as FORCE_ACTION,
  di as GAME_OVER,
  da as GATHER_FOLLOWERS,
  Ca as GET_LOCATION_INFO,
  ra as GET_ONOFF_VEHICLE,
  Hm as HITTYPE_CERTAIN,
  Bm as HITTYPE_MAGICAL,
  Fm as HITTYPE_PHYSICAL,
  ft as INPUT_NUMBER,
  jt as LABEL,
  Cm as LABELS_DATA_WEAPON,
  ke as LABELS_SYSTEM_BATTLER_PARAMS,
  xe as LABELS_SYSTEM_GAME_COMMANDS,
  zt as LABEL_JUMP,
  Ar as LABEL_SET_DATA,
  vo as LABEL_SET_ITEM_EFFECT,
  Rm as LABEL_SET_TRAIT,
  Pt as LOOP,
  Mt as LOOP_BREAK,
  ts as MODULE_DATA,
  ha as MOVE_PICTURE,
  La as NAME_INPUT_PROCESSING,
  gt as NO_OPERATION,
  oi as OPEN_MENU_SCREEN,
  pi as OPEN_SAVE_SCREEN,
  Xp as OPERAND_CONSTANT,
  $p as OPERAND_GAMEDATA,
  Kp as OPERAND_RANDOM,
  Up as OPERAND_SCRIPT,
  Yp as OPERAND_VARIABLE,
  cm as PARTY_ABILITY_CANCEL_SURPRISE,
  gm as PARTY_ABILITY_DROP_ITEM_DOUBLE,
  dm as PARTY_ABILITY_ENCOUNTER_HALF,
  lm as PARTY_ABILITY_ENCOUNTER_NONE,
  um as PARTY_ABILITY_GOLD_DOUBLE,
  ym as PARTY_ABILITY_RAISE_PREEMPTIVE,
  Na as PLAY_BGM,
  qa as PLAY_BGS,
  Pa as PLAY_ME,
  Aa as PLAY_MOVIE,
  Ma as PLAY_SE,
  ui as PLUGIN_COMMAND_MV,
  gi as PLUGIN_COMMAND_MZ,
  Xa as RECOVER_ALL,
  Kn as REGULAR_PARAM_AGI,
  Wn as REGULAR_PARAM_ATK,
  Gn as REGULAR_PARAM_DEF,
  $n as REGULAR_PARAM_LUK,
  Xn as REGULAR_PARAM_MATK,
  Ln as REGULAR_PARAM_MAX_HP,
  Vn as REGULAR_PARAM_MAX_MP,
  Yn as REGULAR_PARAM_MDEF,
  wa as RESUME_BGM,
  li as RETURN_TO_TITLE_SCREEN,
  va as ROTATE_PICTURE,
  mr as ROUTE_CHANGE_BLEND_MODE,
  $i as ROUTE_CHANGE_FREQ,
  rr as ROUTE_CHANGE_IMAGE,
  nr as ROUTE_CHANGE_OPACITY,
  Ki as ROUTE_CHANGE_SPEED,
  Qi as ROUTE_DIR_FIX_OFF,
  Ji as ROUTE_DIR_FIX_ON,
  Ii as ROUTE_END,
  Di as ROUTE_JUMP,
  Ri as ROUTE_MOVE_AWAY,
  Mi as ROUTE_MOVE_BACKWARD,
  hi as ROUTE_MOVE_DOWN,
  Pi as ROUTE_MOVE_FORWARD,
  vi as ROUTE_MOVE_LEFT,
  xi as ROUTE_MOVE_LOWER_L,
  Ni as ROUTE_MOVE_LOWER_R,
  wi as ROUTE_MOVE_RANDOM,
  fi as ROUTE_MOVE_RIGHT,
  qi as ROUTE_MOVE_TOWARD,
  ki as ROUTE_MOVE_UP,
  Ti as ROUTE_MOVE_UPPER_L,
  Si as ROUTE_MOVE_UPPER_R,
  or as ROUTE_PLAY_SE,
  sr as ROUTE_SCRIPT,
  Zi as ROUTE_STEP_ANIME_OFF,
  _i as ROUTE_STEP_ANIME_ON,
  Yi as ROUTE_SWITCH_OFF,
  Xi as ROUTE_SWITCH_ON,
  tr as ROUTE_THROUGH_OFF,
  er as ROUTE_THROUGH_ON,
  ir as ROUTE_TRANSPARENT_OFF,
  ar as ROUTE_TRANSPARENT_ON,
  Bi as ROUTE_TURN_180D,
  Fi as ROUTE_TURN_90D_L,
  Hi as ROUTE_TURN_90D_R,
  Li as ROUTE_TURN_90D_R_L,
  Gi as ROUTE_TURN_AWAY,
  ji as ROUTE_TURN_DOWN,
  zi as ROUTE_TURN_LEFT,
  Vi as ROUTE_TURN_RANDOM,
  Ei as ROUTE_TURN_RIGHT,
  Wi as ROUTE_TURN_TOWARD,
  Ci as ROUTE_TURN_UP,
  Ai as ROUTE_WAIT,
  Oi as ROUTE_WALK_ANIME_OFF,
  Ui as ROUTE_WALK_ANIME_ON,
  Sa as SAVE_BGM,
  Er as SCHEMA_DAMAGE,
  Fr as SCHEMA_DATA_ACTOR,
  Lr as SCHEMA_DATA_ARMMOR,
  Vr as SCHEMA_DATA_CLASS,
  Gr as SCHEMA_DATA_ENEMY,
  Ro as SCHEMA_DATA_ITEM,
  ur as SCHEMA_DATA_MAP_INFO,
  qo as SCHEMA_DATA_SKILL,
  $r as SCHEMA_DATA_STATE,
  Em as SCHEMA_DATA_WEAPON,
  a as SCHEMA_SYSTEM_ADVANCED,
  s as SCHEMA_SYSTEM_AUDIOFILES,
  p as SCHEMA_SYSTEM_BATTLE_RULE_RMMZ,
  T as SCHEMA_SYSTEM_BOOLEAN_GAMEMENU_OPTIONS,
  q as SCHEMA_SYSTEM_BOOLEAN_OPTIONS,
  he as SCHEMA_SYSTEM_GAME_EDITOR_BUNDLE,
  P as SCHEMA_SYSTEM_GAME_INITIAL,
  M as SCHEMA_SYSTEM_IMAGE_SIZE,
  i as SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION,
  A as SCHEMA_SYSTEM_OTHER_DATA,
  _ as SCHEMA_SYSTEM_RPG_DATA_NAMES,
  pe as SCHEMA_SYSTEM_TERMS_BUNDLE,
  ye as SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW,
  D as SCHEMA_SYSTEM_TITLE_IMAGES,
  ge as SCHEMA_SYSTEM_VEHICLE,
  Dm as SCHEMA_TRAIT,
  ci as SCRIPT_EVAL,
  yi as SCRIPT_EVAL_BODY,
  aa as SCROLL_MAP,
  kt as SELECT_ITEM,
  ta as SET_EVENT_LOCATION,
  ia as SET_MOVEMENT_ROUTE,
  ea as SET_VEHICLE_LOCATION,
  xa as SET_WEATHER_EFFECT,
  ga as SHAKE_SCREEN,
  Fa as SHOP_PROCESSING,
  Ba as SHOP_PROCESSING_BODY,
  ma as SHOW_ANIMATION,
  oa as SHOW_BALLOON_ICON,
  ri as SHOW_BATTLE_ANIMATION,
  ht as SHOW_CHOICES,
  vt as SHOW_CHOICES_ITEM,
  bt as SHOW_MESSAGE,
  It as SHOW_MESSAGE_BODY,
  Ia as SHOW_PICTURE,
  xt as SHOW_SCROLLING_TEXT,
  Nt as SHOW_SCROLLING_TEXT_BODY,
  wt as SKIP,
  fo as SPECIAL_EFFECT_ESCAPE,
  mm as SPECIAL_PARAM_EXR,
  nm as SPECIAL_PARAM_FDR,
  Jn as SPECIAL_PARAM_GRD,
  tm as SPECIAL_PARAM_MCR,
  rm as SPECIAL_PARAM_MDR,
  im as SPECIAL_PARAM_PDR,
  em as SPECIAL_PARAM_PHA,
  Qn as SPECIAL_PARAM_REC,
  am as SPECIAL_PARAM_TCR,
  Zn as SPECIAL_PARAM_TGR,
  Fe as SRC_COLOR,
  as as SRC_DATA_ACTOR,
  ps as SRC_DATA_ARMOR,
  ds as SRC_DATA_CLASS,
  ls as SRC_DATA_COMMON_EVNET,
  rs as SRC_DATA_ENEMY,
  os as SRC_DATA_ITEMS,
  is as SRC_DATA_MAP,
  ms as SRC_DATA_SKILL,
  ns as SRC_DATA_STATE,
  cs as SRC_DATA_TROOP,
  ss as SRC_DATA_WEAPON,
  Da as STOP_SE,
  fa as TINT_PICTURE,
  ya as TINT_SCREEN,
  In as TRAIT_ACTION_PLUS,
  an as TRAIT_ATTACK_ELEMENT,
  on as TRAIT_ATTACK_SKILL,
  nn as TRAIT_ATTACK_SPEED,
  rn as TRAIT_ATTACK_STATE,
  mn as TRAIT_ATTACK_TIMES,
  vn as TRAIT_COLLAPSE_TYPE,
  _r as TRAIT_DEBUFF_RATE,
  Or as TRAIT_ELEMENT_RATE,
  yn as TRAIT_EQUIP_ARMOR_TYPE,
  un as TRAIT_EQUIP_LOCK,
  gn as TRAIT_EQUIP_SEAL,
  cn as TRAIT_EQUIP_WEAPON_TYPE,
  Qr as TRAIT_PARAM,
  fn as TRAIT_PARTY_ABILITY,
  dn as TRAIT_SKILL_ADD,
  ln as TRAIT_SKILL_SEAL,
  sn as TRAIT_SKILL_TYPE_ADD,
  pn as TRAIT_SKILL_TYPE_SEAL,
  bn as TRAIT_SLOT_TYPE,
  tn as TRAIT_SPARAM,
  hn as TRAIT_SPECIAL_FLAG,
  Zr as TRAIT_STATE_RATE,
  Jr as TRAIT_STATE_RESIST,
  en as TRAIT_XPARAM,
  Qt as TRANSFER_PLAYER,
  Mm as TYPENAME_TRAIT,
  ba as WAIT,
  it as applyFormatRule,
  Us as buildReferenceItemSources,
  Cp as cloneChoices,
  md as cloneEventCommand,
  nd as cloneParameters,
  wn as collapsOptionsToArray,
  Ge as compileFormatRule,
  _s as compileItemEffectDisplayData,
  Os as compileTraitDisplayData,
  Ip as convertCommentArrayToObject,
  st as createActorControlChars,
  nt as createControlCharFormat,
  bi as createEventCommand,
  $o as createNoteEntity,
  pt as createSystemVariableControlChars,
  xr as defineGameDataSources,
  V as defineSystemItems,
  Sn as defineTraitCollapseType,
  Hn as defineTraitExtraParam,
  Pm as defineTraitItems,
  bm as defineTraitPartyAbility,
  Un as defineTraitRegularParam,
  xm as defineTraitSpecialFlag,
  om as defineTraitSpecialParam,
  Ue as detectFormatErrors,
  Zs as domainNames,
  Bn as extraParamName,
  Fn as extraParamsToArray,
  ko as formatItemEffectText,
  jm as formatTraitText,
  lp as fromArrayCommonEvent,
  yp as fromArrayControlSwitches,
  xp as fromArrayInputNumber,
  Rp as fromArrayScrollingTextBody,
  Sp as fromArrayScrollingTextHeader,
  jp as fromArraySetupChoice,
  Dp as fromArraySetupChoiceItem,
  Fp as fromArrayShowMessageHeader,
  mt as fromStringArray,
  rd as getActorValue,
  h as getArmorCategoryEnabled,
  B as getArmorTypes,
  ot as getControlChars,
  E as getElementTypes,
  id as getEnemyValue,
  c as getEquipCommandEnabled,
  C as getEquipTypes,
  u as getFormationCommandEnabled,
  b as getItemCategoryEnabled,
  d as getItemCommandEnabled,
  v as getKeyItemCategoryEnabled,
  Qo as getNoteValue,
  le as getParamNames,
  g as getSaveCommandEnabled,
  l as getSkillCommandEnabled,
  H as getSkillTypes,
  y as getStatusCommandEnabled,
  L as getSwitches,
  z as getVariableNames,
  I as getWeaponCategoryEnabled,
  F as getWeaponTypes,
  sd as isCloneableCommand,
  gd as isCommandAudio,
  ld as isCommandChangeActorText,
  zd as isCommandChangeBattleBgm,
  Cd as isCommandChangeDefeatMe,
  Ed as isCommandChangeVictoryMe,
  Ld as isCommandCommentBody,
  Bd as isCommandCommentHeader,
  kd as isCommandCommonEvent,
  qd as isCommandInputNumber,
  Id as isCommandNonParam,
  Md as isCommandPlayBgm,
  Dd as isCommandPlayBgs,
  Ad as isCommandPlayMe,
  jd as isCommandPlaySe,
  Wd as isCommandScriptBody,
  Vd as isCommandScriptHeader,
  yd as isCommandScrollTextHead,
  Sd as isCommandShowChoiceItem,
  Nd as isCommandShowChoices,
  Pd as isCommandShowMessage,
  Hd as isCommandShowMessageBody,
  Fd as isCommandShowScrollingTextBody,
  vd as isCommandTextBody,
  Vo as isDataActor,
  Wo as isDataArmor,
  Ko as isDataClass,
  Xo as isDataEnemy,
  Bo as isDataItem,
  kr as isDataMap,
  fr as isDataMapInfo,
  Lo as isDataSkill,
  Yo as isDataState,
  Re as isDataSystem,
  Go as isDataWeapon,
  So as itemSourceId,
  $s as labelsRegistry,
  Cr as makeActorData,
  Br as makeArmorData,
  tp as makeAudioCommand,
  r as makeAudioFileParams,
  S as makeBooleanOptions,
  Wr as makeClassData,
  ap as makeCommandAudioAny,
  Js as makeCommandChangeActorName,
  Qs as makeCommandChangeActorNickName,
  ep as makeCommandChangeActorProfile,
  op as makeCommandChangeBattleBGM,
  pp as makeCommandChangeDefeatME,
  sp as makeCommandChangeVictoryME,
  vp as makeCommandCommentBody,
  hp as makeCommandCommentHeader,
  dp as makeCommandCommonEvent,
  gp as makeCommandControlSwitches,
  Np as makeCommandInputNumber,
  ip as makeCommandPlayBGM,
  rp as makeCommandPlayBGS,
  np as makeCommandPlayME,
  mp as makeCommandPlaySE,
  Gp as makeCommandScriptArray,
  Wp as makeCommandScriptBody,
  Vp as makeCommandScriptHeader,
  Pp as makeCommandScrollingTextBody,
  wp as makeCommandScrollingTextHeader,
  Ep as makeCommandSetupChoice,
  Mp as makeCommandShowChoiceItem,
  Hp as makeCommandShowMessage,
  Lp as makeCommandShowMessageBody,
  bp as makeCommentArray,
  fp as makeCommentCommandArray,
  dt as makeCommonEventData,
  zr as makeDamage,
  Z as makeDataNames,
  Xr as makeDropItem,
  be as makeEditorSetting,
  Yr as makeEnemyAction,
  Kr as makeEnemyData,
  ut as makeEventPageCondition,
  R as makeGameInitial,
  f as makeItemCategories,
  k as makeItemCategoriesFromArray,
  wo as makeItemData,
  cr as makeMapData,
  pr as makeMapEvent,
  dr as makeMapEventIamge,
  lr as makeMapEventPage,
  yr as makeMapInfoData,
  x as makeMenuCommandsEnabled,
  N as makeMenuCommandsEnabledFromArray,
  de as makeParamNamesArray,
  Uo as makeRegex,
  Po as makeSkillData,
  n as makeSoundsArray,
  m as makeSoundsObject,
  Ur as makeStateData,
  t as makeSystemAdvanced,
  De as makeSystemData,
  Q as makeTermsBasic,
  ee as makeTermsBasicFromArray,
  te as makeTermsCommand,
  ie as makeTermsCommandFromArray,
  ne as makeTermsMessages,
  ce as makeTitleCommandWindow,
  lt as makeTroopData,
  yt as makeTroopEventConditions,
  ct as makeTroopMember,
  ue as makeVehicleData,
  zm as makeWeaponData,
  Je as mergeItemsSource,
  Hr as normalizeDataActor,
  Im as partyAbilityToArray,
  _o as readNote,
  Oo as readNoteObject,
  _n as regularParamName,
  On as regularParamsToArray,
  Jo as replaceNote,
  Qm as resolveItemEffectLabels,
  ys as resolveTraitLabels,
  es as setNoteValue,
  Nm as specialFlagToArray,
  pm as specialParamName,
  sm as specialParamsToArray,
  cp as toArrayCommonEvent,
  up as toArrayControlSwitches,
  kp as toArrayInputNumber,
  td as toArrayOperandActorStatus,
  _p as toArrayOperandConstant,
  ad as toArrayOperandEnemyStatus,
  ed as toArrayOperandItemData,
  Jp as toArrayOperandRandom,
  Qp as toArrayOperandScript,
  Zp as toArrayOperandVariable,
  qp as toArrayScrollingTextBody,
  Tp as toArrayScrollingTextHeader,
  zp as toArraySetupChoice,
  Ap as toArraySetupChoiceItem,
  Bp as toArrayShowMessageHeader
};
//# sourceMappingURL=rpgTypes.es.js.map
