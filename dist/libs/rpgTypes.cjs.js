"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const Ajv = require("ajv");
const makeSystemAdvanced = (advanced = {}) => {
  return {
    gameId: advanced.gameId ?? 0,
    screenWidth: advanced.screenWidth ?? 0,
    screenHeight: advanced.screenHeight ?? 0,
    uiAreaWidth: advanced.uiAreaWidth ?? 0,
    uiAreaHeight: advanced.uiAreaHeight ?? 0,
    windowOpacity: advanced.windowOpacity ?? 0,
    screenScale: advanced.screenScale ?? 1,
    numberFontFilename: advanced.numberFontFilename ?? "",
    mainFontFilename: advanced.mainFontFilename ?? "",
    fallbackFonts: advanced.fallbackFonts ?? "",
    fontSize: advanced.fontSize ?? 28
  };
};
const SCHEMA_SYSTEM_ADVANCED = {
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
    fallbackFonts: { type: "string" },
    fontSize: { type: "integer" }
  },
  required: [
    "gameId",
    "screenWidth",
    "screenHeight",
    "uiAreaWidth",
    "uiAreaHeight",
    "windowOpacity",
    "screenScale",
    "numberFontFilename",
    "mainFontFilename",
    "fallbackFonts",
    "fontSize"
  ],
  additionalProperties: false
};
const makeAudioFileParams = (audioFileParams = {}) => {
  return {
    name: audioFileParams.name ?? "",
    volume: audioFileParams.volume ?? 100,
    pitch: audioFileParams.pitch ?? 100,
    pan: audioFileParams.pan ?? 0
  };
};
const makeSoundsArray = (sounds = {}) => {
  return [
    makeAudioFileParams(sounds.cursor),
    makeAudioFileParams(sounds.ok),
    makeAudioFileParams(sounds.cancel),
    makeAudioFileParams(sounds.buzzer),
    makeAudioFileParams(sounds.equip),
    makeAudioFileParams(sounds.save),
    makeAudioFileParams(sounds.load),
    makeAudioFileParams(sounds.battleStart),
    makeAudioFileParams(sounds.escape),
    makeAudioFileParams(sounds.enemyAttack),
    makeAudioFileParams(sounds.enemyDamage),
    makeAudioFileParams(sounds.enemyCollapse),
    makeAudioFileParams(sounds.bossCollapes1),
    makeAudioFileParams(sounds.bossCollapes2),
    makeAudioFileParams(sounds.actorDamage),
    makeAudioFileParams(sounds.actorCollapse),
    makeAudioFileParams(sounds.playRecovery),
    makeAudioFileParams(sounds.playMiss),
    makeAudioFileParams(sounds.playEvasion),
    makeAudioFileParams(sounds.playMagicEvasion),
    makeAudioFileParams(sounds.playReflection),
    makeAudioFileParams(sounds.shop),
    makeAudioFileParams(sounds.useItem),
    makeAudioFileParams(sounds.useSkill)
  ];
};
const makeSoundsObject = (sounds) => {
  return {
    cursor: sounds[0],
    ok: sounds[1],
    cancel: sounds[2],
    buzzer: sounds[3],
    equip: sounds[4],
    save: sounds[5],
    load: sounds[6],
    battleStart: sounds[7],
    escape: sounds[8],
    enemyAttack: sounds[9],
    enemyDamage: sounds[10],
    enemyCollapse: sounds[11],
    bossCollapes1: sounds[12],
    bossCollapes2: sounds[13],
    actorDamage: sounds[14],
    actorCollapse: sounds[15],
    playRecovery: sounds[16],
    playMiss: sounds[17],
    playEvasion: sounds[18],
    playMagicEvasion: sounds[19],
    playReflection: sounds[20],
    shop: sounds[21],
    useItem: sounds[22],
    useSkill: sounds[23]
  };
};
const makeTermsBasic = (terms) => {
  return [
    terms.level ?? "Level",
    terms.levelA ?? "Level",
    terms.hp ?? "HP",
    terms.hpA ?? "HP",
    terms.mp ?? "MP",
    terms.mpA ?? "MP",
    terms.tp ?? "TP",
    terms.tpA ?? "TP",
    terms.experience ?? "EXP",
    terms.exp ?? "EXP"
  ];
};
const makeTermsBasicFromArray = (array) => {
  return {
    level: array[0],
    levelA: array[1],
    hp: array[2],
    hpA: array[3],
    mp: array[4],
    mpA: array[5],
    tp: array[6],
    tpA: array[7],
    experience: array[8],
    exp: array[9]
  };
};
const makeTermsCommandArray = (param) => {
  return makeTermsCommandArrayWithNulls(param, "");
};
const makeTermsCommandArrayWithNulls = (param, empty) => {
  return [
    param.fight ?? "Fight",
    param.escape ?? "Escape",
    param.attack ?? "Attack",
    param.guard ?? "Guard",
    param.item ?? "Item",
    param.skill ?? "Skill",
    param.equip ?? "Equip",
    param.status ?? "Status",
    param.formation ?? "Formation",
    param.save ?? "Save",
    param.gameEnd ?? "Game End",
    param.options ?? "Options",
    param.weapon ?? "Weapon",
    param.armor ?? "Armor",
    param.keyItem ?? "Key Item",
    param.equip2 ?? "Equip2",
    param.optimize ?? "Optimize",
    param.clear ?? "Clear",
    param.newGame ?? "New Game",
    param.continue_ ?? "Continue",
    empty,
    param.toTitle ?? "To Title",
    param.cancel ?? "Cancel",
    empty,
    param.buy ?? "Buy",
    param.sell ?? "Sell"
  ];
};
const makeTermsCommandFromArray = (param) => {
  return {
    fight: param[0],
    escape: param[1],
    attack: param[2],
    guard: param[3],
    item: param[4],
    skill: param[5],
    equip: param[6],
    status: param[7],
    formation: param[8],
    save: param[9],
    gameEnd: param[10],
    options: param[11],
    weapon: param[12],
    armor: param[13],
    keyItem: param[14],
    equip2: param[15],
    optimize: param[16],
    clear: param[17],
    newGame: param[18],
    continue_: param[19],
    toTitle: param[21],
    cancel: param[22],
    buy: param[24],
    sell: param[25]
  };
};
const validate = (msg, fallback) => {
  return typeof msg === "string" ? msg : fallback;
};
const makeTermsMessages = (msg) => {
  return {
    actionFailure: validate(msg.actionFailure, "Action failed."),
    actorDamage: validate(msg.actorDamage, "%1 took %2 damage."),
    actorRecovery: validate(msg.actorRecovery, "%1 recovered %2 HP."),
    actorGain: validate(msg.actorGain, "%1 gained %2."),
    actorLoss: validate(msg.actorLoss, "%1 lost %2."),
    actorDrain: validate(msg.actorDrain, "%1 drained %2 HP."),
    actorNoDamage: validate(msg.actorNoDamage, "%1 was not damaged."),
    actorNoHit: validate(msg.actorNoHit, "%1 was not hit."),
    alwaysDash: validate(msg.alwaysDash, "Always dash."),
    bgmVolume: validate(msg.bgmVolume, "BGM volume"),
    bgsVolume: validate(msg.bgsVolume, "BGS volume"),
    commandRemember: validate(msg.commandRemember, "Command remember."),
    criticalToActor: validate(msg.criticalToActor, "%1 dealt %2 damage to %3."),
    criticalToEnemy: validate(msg.criticalToEnemy, "%1 dealt %2 damage to %3."),
    counterAttack: validate(msg.counterAttack, "%1 countered!"),
    debuffAdd: validate(msg.debuffAdd, "%1's %2 was lowered."),
    defeat: validate(msg.defeat, "Defeat."),
    enemyDamage: validate(msg.enemyDamage, "%1 took %2 damage."),
    enemyDrain: validate(msg.enemyDrain, "%1 drained %2 HP."),
    enemyGain: validate(msg.enemyGain, "%1 gained %2."),
    enemyLoss: validate(msg.enemyLoss, "%1 lost %2."),
    enemyNoDamage: validate(msg.enemyNoDamage, "%1 was not damaged."),
    enemyNoHit: validate(msg.enemyNoHit, "%1 was not hit."),
    enemyRecovery: validate(msg.enemyRecovery, "%1 recovered %2 HP."),
    evasion: validate(msg.evasion, "%1 evaded the attack!"),
    autosave: validate(msg.autosave, "Autosave"),
    escapeFailure: validate(msg.escapeFailure, "Escape failed."),
    escapeStart: validate(msg.escapeStart, "%1 started to escape!"),
    emerge: validate(msg.emerge, "%1 appeared!"),
    expNext: validate(msg.expNext, "Next level in %1 EXP."),
    expTotal: validate(msg.expTotal, "Total EXP: %1"),
    file: validate(msg.file, "File"),
    buffAdd: validate(msg.buffAdd, "%1's %2 was raised."),
    buffRemove: validate(msg.buffRemove, "%1's %2 was lowered."),
    obtainExp: validate(msg.obtainExp, "%1 EXP obtained."),
    obtainGold: validate(msg.obtainGold, "%1 gold obtained."),
    obtainItem: validate(msg.obtainItem, "%1 obtained %2."),
    obtainSkill: validate(msg.obtainSkill, "%1 learned %2."),
    levelUp: validate(msg.levelUp, "%1 leveled up!"),
    partyName: validate(msg.partyName, "Party"),
    loadMessage: validate(msg.loadMessage, "Load %1?"),
    meVolume: validate(msg.meVolume, "ME volume"),
    possession: validate(msg.possession, "Possession"),
    preemptive: validate(msg.preemptive, "%1 attacked first!"),
    saveMessage: validate(msg.saveMessage, "Save %1?"),
    seVolume: validate(msg.seVolume, "SE volume"),
    magicEvasion: validate(msg.magicEvasion, "%1 evaded the magic!"),
    magicReflection: validate(msg.magicReflection, "%1 reflected the magic!"),
    substitute: validate(msg.substitute, "%1 took the hit!"),
    surprise: validate(msg.surprise, "%1 surprised the enemy!"),
    touchUI: validate(msg.touchUI, "Touch UI"),
    useItem: validate(msg.useItem, "%1 used %2."),
    victory: validate(msg.victory, "Victory!")
  };
};
const makeParamNamesArray = (param) => {
  return [
    param.mhp ?? "",
    param.mmp ?? "",
    param.atk ?? "",
    param.def ?? "",
    param.mat ?? "",
    param.mdf ?? "",
    param.agi ?? "",
    param.luk ?? "",
    param.hit ?? "",
    param.eva ?? ""
  ];
};
const makeVehicleData = (vehicle = {}) => ({
  characterIndex: vehicle.characterIndex ?? 0,
  characterName: vehicle.characterName ?? "",
  bgm: makeAudioFileParams(vehicle.bgm ?? {}),
  startMapId: vehicle.startMapId ?? 0,
  startX: vehicle.startX ?? 0,
  startY: vehicle.startY ?? 0
});
const makeMenuCommandsEnabled = (param = {}) => {
  return [
    param.item ?? true,
    param.skill ?? true,
    param.equip ?? true,
    param.status ?? true,
    param.formation ?? true,
    param.save ?? true
  ];
};
const makeMenuCommandsEnabledFromArray = (array) => {
  return {
    item: array[0],
    skill: array[1],
    equip: array[2],
    status: array[3],
    formation: array[4],
    save: array[5]
  };
};
const makeItemCategories = (param = {}) => {
  return [
    param.item ?? true,
    param.weapon ?? true,
    param.armor ?? true,
    param.keyItem ?? true
  ];
};
const makeItemCategoriesFromArray = (param) => {
  return {
    item: param[0],
    weapon: param[1],
    armor: param[2],
    keyItem: param[3]
  };
};
const makeEditorSetting = (param = {}) => {
  return {
    jsonFormatLevel: param.jsonFormatLevel ?? 0,
    messageWidth1: param.messageWidth1 ?? 816,
    messageWidth2: param.messageWidth2 ?? 816
  };
};
const DEFAULT_SYSTEM_LABELS_BOOLEAN = {
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
};
const DEFAULT_SYSTEM_LABELS_DATA_TYPES = {
  domainName: "タイプ",
  options: {
    armorTypes: "防具タイプ",
    elements: "属性",
    equipTypes: "装備タイプ",
    skillTypes: "スキルタイプ",
    weaponTypes: "武器タイプ",
    switches: "スイッチ",
    variables: "変数",
    magicSkills: "魔法スキル"
  }
};
const makeBooleanOptions = (options = {}) => {
  return {
    optAutosave: options.optAutosave ?? true,
    optDisplayTp: options.optDisplayTp ?? true,
    optDrawTitle: options.optDrawTitle ?? true,
    optExtraExp: options.optExtraExp ?? true,
    optFloorDeath: options.optFloorDeath ?? true,
    optFollowers: options.optFollowers ?? true,
    optKeyItemsNumber: options.optKeyItemsNumber ?? true,
    optSideView: options.optSideView ?? true,
    optSlipDeath: options.optSlipDeath ?? true,
    optTransparent: options.optTransparent ?? true,
    optMessageSkip: options.optMessageSkip ?? true,
    optSplashScreen: options.optSplashScreen ?? true
  };
};
const SCHEMA_SYSTEM_BOOLEAN_OPTIONS = {
  type: "object",
  additionalProperties: true,
  required: [
    "optAutosave",
    "optDisplayTp",
    "optDrawTitle",
    "optExtraExp",
    "optFloorDeath",
    "optFollowers",
    "optKeyItemsNumber",
    "optSideView",
    "optSlipDeath",
    "optTransparent",
    "optMessageSkip",
    "optSplashScreen"
  ],
  properties: {
    optAutosave: { type: "boolean" },
    optDisplayTp: { type: "boolean" },
    optDrawTitle: { type: "boolean" },
    optExtraExp: { type: "boolean" },
    optFloorDeath: { type: "boolean" },
    optFollowers: { type: "boolean" },
    optKeyItemsNumber: { type: "boolean" },
    optSideView: { type: "boolean" },
    optSlipDeath: { type: "boolean" },
    optTransparent: { type: "boolean" },
    optMessageSkip: { type: "boolean" },
    optSplashScreen: { type: "boolean" }
  }
};
const SCHEMA_SYSTEM_TEST_BATTLER = {
  additionalProperties: false,
  type: "object",
  required: ["actorId", "equips", "level"],
  properties: {
    actorId: { type: "integer" },
    level: { type: "integer", minimum: 1 },
    equips: {
      type: "array",
      items: { type: "integer" }
    }
  }
};
const SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION = {
  type: "object",
  additionalProperties: false,
  required: ["type", "weaponImageId"],
  properties: {
    type: { type: "number" },
    weaponImageId: { type: "number" }
  }
};
const SCHEMA_SYSTEM_IMAGE_SIZE = {
  additionalProperties: false,
  type: "object",
  required: ["tileSize", "faceSize", "iconSize"],
  properties: {
    tileSize: { type: "integer", minimum: 0 },
    faceSize: { type: "integer", minimum: 0 },
    iconSize: { type: "integer", minimum: 0 }
  }
};
const ajv$1 = new Ajv({ strict: false });
ajv$1.compile(SCHEMA_SYSTEM_BOOLEAN_OPTIONS);
const testBattler = ajv$1.compile(SCHEMA_SYSTEM_TEST_BATTLER);
const isTestBattler = (data) => {
  return testBattler(data);
};
ajv$1.compile(SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION);
const imageSize = ajv$1.compile(SCHEMA_SYSTEM_IMAGE_SIZE);
const isImageSize = (data) => {
  return imageSize(data);
};
const makeSystemData = (p) => {
  var _a, _b, _c, _d, _e;
  const vehicles = p.vehicles ?? {};
  const dataNames = p.dataNames ?? {};
  const debug = p.debug ?? {};
  const images = p.images ?? {};
  const gameInit = p.gameInit ?? {};
  const bgm = p.bgm ?? {};
  const size = cloneSize(p.size);
  return {
    ...makeBooleanOptions(p.options),
    currencyUnit: ((_a = p.texts) == null ? void 0 : _a.currencyUnit) ?? "",
    gameTitle: ((_b = p.texts) == null ? void 0 : _b.gameTitle) ?? "",
    sounds: makeSoundsArray(p.sounds),
    editor: makeEditorSetting(p.editing),
    advanced: makeSystemAdvanced(p.advanced),
    title1Name: images.title1Name ?? "",
    title2Name: images.title2Name ?? "",
    battleback1Name: images.battleback1Name ?? "",
    battleback2Name: images.battleback2Name ?? "",
    armorTypes: cloneStringArray(dataNames.armorTypes),
    elements: cloneStringArray(dataNames.elements),
    equipTypes: cloneStringArray(dataNames.equipTypes),
    weaponTypes: cloneStringArray(dataNames.weaponTypes),
    skillTypes: cloneStringArray(dataNames.skillTypes),
    switches: cloneStringArray(dataNames.switches),
    variables: cloneStringArray(dataNames.variables),
    magicSkills: cloneStringArray(dataNames.magicSkills),
    airship: makeVehicleData(vehicles.airship),
    boat: makeVehicleData(vehicles.boat),
    ship: makeVehicleData(vehicles.ship),
    defeatMe: makeAudioFileParams((_c = p.me) == null ? void 0 : _c.defeatMe),
    gameoverMe: makeAudioFileParams((_d = p.me) == null ? void 0 : _d.gameoverMe),
    titleBgm: makeAudioFileParams(bgm.titleBgm),
    tileSize: size.tileSize,
    faceSize: size.faceSize,
    iconSize: size.iconSize,
    versionId: 1,
    attackMotions: [],
    testBattlers: cloneObjectArray(debug.testBattlers, cloneTestBattler),
    battleBgm: makeAudioFileParams(bgm.battleBgm),
    victoryMe: makeAudioFileParams((_e = p.me) == null ? void 0 : _e.victoryMe),
    editMapId: debug.editMapId ?? 0,
    locale: "",
    startMapId: gameInit.startMapId ?? 0,
    startX: gameInit.startX ?? 0,
    startY: gameInit.startY ?? 0,
    testTroopId: debug.testTroopId ?? 0,
    windowTone: [0, 0, 0, 0],
    terms: makeTerms(p.terms ?? {}),
    itemCategories: makeItemCategories(p.itemCategories),
    partyMembersArray: cloneNumberArray(gameInit.partyMembersArray),
    battleSystem: 0,
    battlerHue: 0,
    battlerName: debug.battlerName ?? "",
    menuCommands: makeMenuCommandsEnabled(p.menuComamnds)
  };
};
const makeTerms = (terms) => {
  return {
    basic: makeTermsBasic(terms.basic ?? {}),
    commands: makeTermsCommandArray(terms.commands ?? {}),
    params: makeParamNamesArray(terms.params ?? {}),
    messages: makeTermsMessages(terms.messages ?? {})
  };
};
const cloneStringArray = (array) => {
  return array ? [...array] : [];
};
const cloneNumberArray = (array) => {
  return array ? [...array] : [];
};
const cloneSize = (data) => {
  return isImageSize(data) ? {
    tileSize: data.tileSize,
    faceSize: data.faceSize,
    iconSize: data.iconSize
  } : {
    tileSize: 48,
    faceSize: 144,
    iconSize: 32
  };
};
const cloneObjectArray = (array, fn) => {
  return array ? array.map(fn) : [];
};
const cloneTestBattler = (data) => {
  return isTestBattler(data) ? {
    actorId: data.actorId,
    equips: cloneNumberArray(data.equips),
    level: data.level
  } : {
    actorId: 0,
    equips: [],
    level: 1
  };
};
const makeNamedItem = (name, index) => ({
  name,
  id: index
});
const getVariableNames = (system) => {
  return system.variables.map(makeNamedItem);
};
const getElementTypes = (system) => {
  return system.elements.map(makeNamedItem);
};
const getEquipTypes = (system) => {
  return system.equipTypes.map(makeNamedItem);
};
const getSkillTypes = (system) => {
  return system.skillTypes.map(makeNamedItem);
};
const getWeaponTypes = (system) => {
  return system.weaponTypes.map(makeNamedItem);
};
const getArmorTypes = (system) => {
  return system.armorTypes.map(makeNamedItem);
};
const mergeWithDefaults = (defaultLabels, labels) => {
  const reulst = { ...defaultLabels };
  for (const key in defaultLabels) {
    const value = labels[key];
    if (typeof value === "string") {
      reulst[key] = value;
    }
  }
  return reulst;
};
const mergeDomainLabel = (base, override) => {
  return {
    domainName: override.domainName ?? base.domainName,
    options: mergeWithDefaults(base.options, override.options ?? {})
  };
};
const mergeNestedPrimitiveRecords = (base, override) => {
  const result = {};
  for (const domain in base) {
    const domainBase = base[domain];
    const domainOverride = override[domain] ?? {};
    result[domain] = mergeWithDefaults(
      domainBase,
      domainOverride
    );
  }
  return result;
};
const AUTHOR_RMMZ = "rmmz";
const MODULE_DATA = "data";
const MODULE_SYSTEM$1 = "system";
const MODULE_SYSTEM = "system";
const SRC_WEAPON_TYPES$1 = "weaponTypes";
const SRC_ARMOR_TYPES$1 = "armorTypes";
const SRC_EQUIP_TYPES$1 = "equipTypes";
const SRC_SKILL_TYPES$1 = "skillTypes";
const SRC_ELEMENTS$1 = "elements";
const SRC_VARIABLE$1 = "variables";
const SRC_SWITCHES$1 = "switches";
const systemElementsSourceId = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_ELEMENTS$1
});
const systemArmorTypesSourceId = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_ARMOR_TYPES$1
});
const systemEquipTypesSourceId = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_EQUIP_TYPES$1
});
const systemSkillTypesSourceId = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_SKILL_TYPES$1
});
const systemSwitchesSourceId = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_SWITCHES$1
});
const systemVariablesSourceId = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_VARIABLE$1
});
const systemWeaponTypesSourceId = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: SRC_WEAPON_TYPES$1
});
const buildElementTypesSource = (system, label) => ({
  items: getElementTypes(system),
  label: label.elements,
  source: systemElementsSourceId()
});
const buildEquipTypesSource = (system, label) => ({
  items: getEquipTypes(system),
  label: label.equipTypes,
  source: systemEquipTypesSourceId()
});
const buildWeaponTypesSource = (system, label) => ({
  items: getWeaponTypes(system),
  label: label.weaponTypes,
  source: systemWeaponTypesSourceId()
});
const buildSkillTypesSource = (system, label) => ({
  items: getSkillTypes(system),
  label: label.skillTypes,
  source: systemSkillTypesSourceId()
});
const buildArmorTypesSource = (system, label) => ({
  items: getArmorTypes(system),
  label: label.armorTypes,
  source: systemArmorTypesSourceId()
});
const buildVariableNamesSource = (system, label) => ({
  items: getVariableNames(system),
  label: label.variables,
  source: systemSwitchesSourceId()
});
const FOLDER_AUDIO_BGM = "bgm";
const FOLDER_AUDIO_SE = "se";
const FOLDER_AUDIO_ME = "me";
const FOLDER_AUDIO_BGS = "bgs";
const FOLDER_IMG_BATTLEBACK1 = "battlebacks1";
const FOLDER_IMG_BATTLEBACK2 = "battlebacks2";
const FOLDER_IMG_CHACTERS = "characters";
const FOLDER_IMG_ENEMIES = "enemies";
const FOLDER_IMG_FACES = "faces";
const FOLDER_IMG_PARALLACES = "parallaxes";
const FOLDER_IMG_PICTURES = "pictures";
const FOLDER_IMG_SV_ACTORS = "sv_actors";
const FOLDER_IMG_SV_ENEMIES = "sv_enemies";
const FOLDER_IMG_SYSTEM = "system";
const FOLDER_IMG_TILESETS = "tilesets";
const FOLDER_IMG_TITLES1 = "titles1";
const FOLDER_IMG_TITLES2 = "titles2";
const FILENAME_SYSTEM = "System.json";
const FILENAME_ACTORS = "Actors.json";
const FILENAME_CLASSES = "Classes.json";
const FILENAME_SKILLS = "Skills.json";
const FILENAME_ITEMS = "Items.json";
const FILENAME_WEAPONS = "Weapons.json";
const FILENAME_ARMORS = "Armors.json";
const FILENAME_ENEMIES = "Enemies.json";
const FILENAME_TROOPS = "Troops.json";
const FILENAME_STATES = "States.json";
const FILENAME_ANIMATIONS = "Animations.json";
const FILENAME_TILESET = "Tilesets.json";
const FILENAME_COMMON_EVENTS = "CommonEvents.json";
const FILENAME_MAP_INFOS = "MapInfos.json";
const FOLDER_DATA = "data";
const FOLDER_IMG = "img";
const FOLDER_AUDIO = "audio";
const FOLDER_JS = "js";
const validAsciiKey = /^[a-zA-Z0-9]+$/;
const sanitizeKey = (value) => {
  return validAsciiKey.test(value) ? value : void 0;
};
const testUnknonwKey = (value) => {
  return typeof value === "string" ? validAsciiKey.test(value) : false;
};
const joinSourceKey = (key) => {
  return [key.author, key.module, key.kind].join(".");
};
const isValid = (source) => {
  return testUnknonwKey(source.author) && testUnknonwKey(source.module) && testUnknonwKey(source.kind);
};
const SRC_DATA_ACTOR = "actor";
const SRC_DATA_MAP = "map";
const SRC_DATA_ENEMY = "enemy";
const SRC_DATA_STATE = "state";
const SRC_DATA_SKILL = "skill";
const SRC_DATA_ITEMS = "items";
const SRC_DATA_WEAPON = "weapon";
const SRC_DATA_ARMOR = "armor";
const SRC_DATA_CLASS = "class";
const SRC_DATA_COMMON_EVNET = "common_event";
const SRC_DATA_TROOP = "troop";
const SRC_COLOR = "colors";
const SRC_WEAPON_TYPES = "weaponTypes";
const SRC_ARMOR_TYPES = "armorTypes";
const SRC_EQUIP_TYPES = "equipTypes";
const SRC_SKILL_TYPES = "skillTypes";
const SRC_ELEMENTS = "elements";
const SRC_VARIABLE = "variables";
const SRC_SWITCHES = "switches";
const DEFAULT_GLOBAL_LABELS = {
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
};
const FORMAT_NAME$1 = "{name}";
const FORMAT_PARAM_RATE_MUL = "{name} * {value}%";
const FORMAT_PARAM_RATE_PLUS = "{name} + {value}%";
const FORMAT_PARAM_VALUE = "{value}";
const LABEL_SET_TRAIT = {
  domainName: "特徴",
  options: {
    regularParam: {
      domainName: "基本能力値",
      format: FORMAT_PARAM_RATE_MUL,
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
      format: FORMAT_PARAM_RATE_PLUS,
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
      format: FORMAT_PARAM_RATE_MUL,
      options: {
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
      }
    },
    specialFlag: {
      domainName: "特殊フラグ",
      format: FORMAT_NAME$1,
      options: {
        autoBattle: "自動戦闘",
        guard: "防御",
        substitute: "身代わり",
        preventEscape: "逃走防止"
      }
    },
    collaps: {
      domainName: "消滅エフェクト",
      format: FORMAT_NAME$1,
      options: {
        bossCollaps: "ボス崩壊",
        instantCollaps: "即時崩壊",
        noneCollaps: "崩壊なし"
      }
    },
    partyAbility: {
      domainName: "パーティ能力",
      format: FORMAT_NAME$1,
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
      format: FORMAT_PARAM_RATE_MUL
    },
    debuffRate: {
      domainName: "弱体有効度",
      format: FORMAT_PARAM_RATE_MUL
    },
    stateRate: {
      domainName: "ステート有効度",
      format: FORMAT_PARAM_RATE_MUL
    },
    stateResist: {
      domainName: "ステート無効",
      format: FORMAT_NAME$1
    },
    attackElement: {
      domainName: "攻撃属性",
      format: FORMAT_NAME$1
    },
    attackState: {
      domainName: "攻撃ステート",
      format: FORMAT_PARAM_RATE_PLUS
    },
    attackSpeed: {
      domainName: "攻撃速度補正",
      format: FORMAT_PARAM_VALUE
    },
    attackTimes: {
      domainName: "攻撃追加回数",
      format: FORMAT_PARAM_VALUE
    },
    actionPlus: {
      domainName: "行動追加",
      format: FORMAT_PARAM_RATE_MUL
    },
    attackSkill: {
      domainName: "攻撃スキル",
      format: FORMAT_NAME$1
    },
    equipWeaponType: {
      domainName: "装備武器タイプ",
      format: FORMAT_NAME$1
    },
    equipArmorType: {
      domainName: "装備防具タイプ",
      format: FORMAT_NAME$1
    },
    equipLock: {
      domainName: "装備固定",
      format: FORMAT_NAME$1
    },
    equipSeal: {
      domainName: "装備封印",
      format: FORMAT_NAME$1
    },
    slotType: {
      domainName: "スロットタイプ",
      format: FORMAT_NAME$1
    },
    skillAdd: {
      domainName: "スキル追加",
      format: FORMAT_NAME$1
    },
    skillSeal: {
      domainName: "スキルタイプ封印",
      format: FORMAT_NAME$1
    },
    skillTypeAdd: {
      domainName: "スキルタイプ追加",
      format: FORMAT_NAME$1
    },
    skillTypeSeal: {
      domainName: "スキルタイプ封印",
      format: FORMAT_NAME$1
    }
  }
};
const DEFAULT_DAMAGE_LABELS = {
  domainName: "ダメージ",
  options: {}
};
const FORMAT_GROW = "{name} + {value1}";
const FORMAT_STATE = "{name} {value1}%";
const FORMAT_RECOVER = "{value1}% + {value2}";
const FORMAT_ADD_BUFF = "{name} {value1}ターン";
const FORMAT_NAME = "{name}";
const LABEL_SET_ITEM_EFFECT = {
  domainName: "使用効果",
  options: {
    addBuff: {
      desc: "バフを付与する",
      domainName: "バフ付与",
      format: FORMAT_ADD_BUFF
    },
    addDebuff: {
      desc: "デバフを付与する",
      domainName: "デバフ付与",
      format: FORMAT_ADD_BUFF
    },
    gainTp: {
      desc: "TPを指定した量だけ増加させます。",
      domainName: "TP増加",
      format: FORMAT_RECOVER
    },
    grow: {
      desc: "成長効果",
      domainName: "成長効果",
      format: FORMAT_GROW
    },
    learnSkill: {
      desc: "スキルを習得する",
      domainName: "スキル習得",
      format: FORMAT_NAME
    },
    recoverHp: {
      desc: "HPを回復します。最大HPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "HP回復",
      format: FORMAT_RECOVER
    },
    recoverMp: {
      desc: "MPを回復します。最大MPに対する割合と一定値のいずれか一方または両方を指定します。アイテムの場合は、特殊能力値[薬の知識]の倍率が適用されます。",
      domainName: "MP回復",
      format: FORMAT_RECOVER
    },
    removeBuff: {
      desc: "バフを解除する",
      domainName: "バフ解除",
      format: FORMAT_NAME
    },
    removeDebuff: {
      desc: "デバフを解除する",
      domainName: "デバフ解除",
      format: FORMAT_NAME
    },
    removeState: {
      desc: "指定したステートを付加します。",
      domainName: "ステート付加",
      format: FORMAT_STATE
    },
    special: {
      desc: "特殊効果",
      domainName: "特殊効果",
      format: FORMAT_NAME
    },
    addState: {
      desc: "状態異常を解除する",
      domainName: "ステート解除",
      format: FORMAT_STATE
    },
    commonEvent: {
      desc: "コモンイベントを実行する",
      domainName: "コモンイベント",
      format: FORMAT_NAME
    }
  }
};
const LABEL_SET_DATA = {
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
};
const SHOW_MESSAGE = 101;
const SHOW_MESSAGE_BODY = 401;
const SHOW_CHOICES = 102;
const SHOW_CHOICES_ITEM = 402;
const INPUT_NUMBER = 103;
const SHOW_SCROLLING_TEXT = 105;
const SHOW_SCROLLING_TEXT_BODY = 405;
const COMMENT_HEAD = 108;
const COMMENT_BODY = 408;
const COMMON_EVENT = 117;
const CONTROL_SWITCHES = 121;
const CHANGE_BATTLE_BGM = 132;
const CHANGE_VICTORY_ME = 133;
const CHANGE_DEFEAT_ME = 139;
const PLAY_BGM = 241;
const PLAY_BGS = 245;
const PLAY_ME = 249;
const PLAY_SE = 250;
const CHANGE_NAME = 320;
const CHANGE_NICKNAME = 324;
const CHANGE_PROFILE = 325;
const SCRIPT_EVAL = 355;
const SCRIPT_EVAL_BODY = 655;
const LABEL_REGISTRY_JP = {
  rpg: {
    damage: DEFAULT_DAMAGE_LABELS,
    data: LABEL_SET_DATA,
    traits: LABEL_SET_TRAIT,
    itemEffect: LABEL_SET_ITEM_EFFECT
  },
  global: DEFAULT_GLOBAL_LABELS
};
const SCHEMA_COMMAND_TEXT_BODY = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: {
      type: "integer",
      enum: [108, 355, 401, 405, 408, 655]
    },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: [{ type: "string" }]
    }
  },
  additionalProperties: false
};
const SCHEMA_COMMAND_EMPTY_PARAM = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 0, maxItems: 0 },
    code: {
      type: "integer",
      enum: [
        0,
        109,
        112,
        113,
        115,
        204,
        206,
        213,
        214,
        216,
        217,
        221,
        222,
        243,
        244,
        251,
        314,
        315,
        340,
        351,
        352,
        353,
        354,
        411
      ]
    }
  },
  additionalProperties: false
};
const SCHEMA_COMMAND_CHANGE_ACTOR_TEXT = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: {
      type: "integer",
      enum: [320, 324, 325]
    },
    indent: { type: "integer" },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "integer", minimum: 0 },
        // actorId
        { type: "string" }
        // name
      ]
    }
  },
  additionalProperties: false
};
const SCHEMA_COMMAND_ANY_AUDIO = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: {
      type: "integer",
      enum: [132, 133, 139, 241, 245, 249, 250]
    },
    indent: { type: "integer" },
    parameters: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: [
        {
          type: "object",
          properties: {
            name: { type: "string" },
            volume: { type: "integer" },
            pitch: { type: "integer" },
            pan: { type: "integer" }
          },
          required: ["name", "volume", "pitch", "pan"],
          additionalProperties: false
        }
      ]
    }
  },
  additionalProperties: false
};
const SCHEMA_COMMAND_CALL_COMMON_EVENT = {
  type: "object",
  properties: {
    code: { type: "number", const: 117 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: [{ type: "number", minimum: 0, default: 0 }]
    }
  },
  required: ["code", "indent", "parameters"]
};
const SCHEMA_COMMAND_INPUT_NUMBER = {
  type: "object",
  properties: {
    code: { type: "number", const: 103 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "number" },
        // variableId
        { type: "number" }
        // digits
      ]
    }
  },
  required: ["code", "indent", "parameters"]
};
const SCHEMA_COMMAND_SCROLL_TEXT_HEAD = {
  type: "object",
  properties: {
    code: { type: "number", const: 105 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "number" },
        // speed
        { type: "boolean" }
        // skip
      ]
    }
  },
  required: ["code", "indent", "parameters"]
};
const SCHEMA_COMMAND_SHOW_CHOICE_WHEN = {
  type: "object",
  properties: {
    code: { type: "number", const: 402 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 2,
      maxItems: 2,
      items: [
        { type: "integer" },
        // index
        { type: "string" }
        // name
      ]
    }
  },
  required: ["code", "indent", "parameters"]
};
const SCHEMA_COMMAND_SHOW_CHOICES = {
  type: "object",
  properties: {
    code: { type: "number", const: 102 },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 5,
      maxItems: 5,
      items: [
        { type: "array", items: { type: "string" } },
        // choices
        { type: "integer" },
        // cancelType
        { type: "integer" },
        // defaultType
        { type: "integer" },
        // positionType
        { type: "integer" }
        // background
      ]
    }
  },
  required: ["code", "indent", "parameters"]
};
const SCHEMA_COMMAND_SHOW_MESSAGE = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    code: { type: "integer", const: 101 },
    // Assuming 101 is the code for ShowMessage
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      items: [
        { type: "string" },
        // facename
        { type: "integer", minimum: 0, maximum: 7 },
        // faceIndex
        { type: "integer", minimum: 0, maximum: 2 },
        // background
        { type: "integer", minimum: 0, maximum: 2 },
        // positionType
        { type: "string" }
        // speakerName
      ],
      minItems: 5,
      maxItems: 5
    }
  }
};
const ajv = new Ajv();
const changeActorText = ajv.compile(SCHEMA_COMMAND_CHANGE_ACTOR_TEXT);
const isCommandChangeActorText = (data) => {
  return changeActorText(data);
};
const scrollTextHead = ajv.compile(SCHEMA_COMMAND_SCROLL_TEXT_HEAD);
const isCommandScrollTextHead = (data) => {
  return scrollTextHead(data);
};
const audioCommand = ajv.compile(SCHEMA_COMMAND_ANY_AUDIO);
const isCommandAudio = (data) => {
  return audioCommand(data);
};
const emptyParam = ajv.compile(SCHEMA_COMMAND_EMPTY_PARAM);
const isCommandNonParam = (data) => {
  return emptyParam(data);
};
const textBody = ajv.compile(SCHEMA_COMMAND_TEXT_BODY);
const isCommandTextBody = (command) => {
  return textBody(command);
};
const commonVent = ajv.compile(SCHEMA_COMMAND_CALL_COMMON_EVENT);
const isCommandCommonEvent = (data) => {
  return commonVent(data);
};
const showChoices = ajv.compile(SCHEMA_COMMAND_SHOW_CHOICES);
const isCommandShowChoices = (data) => {
  return showChoices(data);
};
const showChoiceItem = ajv.compile(SCHEMA_COMMAND_SHOW_CHOICE_WHEN);
const isCommandShowChoiceItem = (data) => {
  return showChoiceItem(data);
};
const inputNumber = ajv.compile(SCHEMA_COMMAND_INPUT_NUMBER);
const isCommandInputNumber = (data) => {
  return inputNumber(data);
};
const showMessage = ajv.compile(SCHEMA_COMMAND_SHOW_MESSAGE);
const isCommandShowMessage = (data) => {
  return showMessage(data);
};
const isCommandShowMessageBody = (command) => {
  return isCommandTextBody(command) && command.code === SHOW_MESSAGE_BODY;
};
const isCommandShowScrollingTextBody = (command) => {
  return isCommandTextBody(command) && command.code === SHOW_SCROLLING_TEXT_BODY;
};
const isCommandCommentHeader = (command) => {
  return isCommandTextBody(command) && command.code === COMMENT_HEAD;
};
const isCommandCommentBody = (command) => {
  return isCommandTextBody(command) && command.code === COMMENT_BODY;
};
const isCommandScriptHeader = (command) => {
  return isCommandTextBody(command) && command.code === SCRIPT_EVAL;
};
const isCommandScriptBody = (command) => {
  return isCommandTextBody(command) && command.code === SCRIPT_EVAL_BODY;
};
const makeCommandChangeActorName = (param, indent = 0) => ({
  code: CHANGE_NAME,
  parameters: [param.actorId, param.name],
  indent
});
const makeCommandChangeActorNickName = (param, indent = 0) => ({
  code: CHANGE_NICKNAME,
  parameters: [param.actorId, param.nickname],
  indent
});
const makeCommandChangeActorProfile = (param, indent = 0) => ({
  code: CHANGE_PROFILE,
  parameters: [param.actorId, param.profile],
  indent
});
const makeAudioCommand = (code, filename) => {
  return makeCommandAudioAny(code, makeAudioFileParams({ name: filename }));
};
const makeCommandAudioAny = (code, audio, indent = 0) => {
  return {
    code,
    parameters: [makeAudioFileParams(audio)],
    indent
  };
};
const makeCommandPlayBGM = (audio, indent = 0) => makeCommandAudioAny(PLAY_BGM, audio, indent);
const makeCommandPlayBGS = (audio, indent = 0) => makeCommandAudioAny(PLAY_BGS, audio, indent);
const makeCommandPlayME = (audio, indent = 0) => makeCommandAudioAny(PLAY_ME, audio, indent);
const makeCommandPlaySE = (audio, indent = 0) => makeCommandAudioAny(PLAY_SE, audio, indent);
const makeCommandChangeBattleBGM = (audio, indent = 0) => makeCommandAudioAny(CHANGE_BATTLE_BGM, audio, indent);
const makeCommandChangeVictoryME = (audio, indent = 0) => makeCommandAudioAny(CHANGE_VICTORY_ME, audio, indent);
const makeCommandChangeDefeatME = (audio, indent = 0) => makeCommandAudioAny(CHANGE_DEFEAT_ME, audio, indent);
const makeCommentArray = (comment) => {
  return [comment];
};
const convertCommentArrayToObject = (paramArray) => ({
  comment: paramArray[0]
});
const makeCommandCommentHeader = (comment, indent = 0) => ({
  code: COMMENT_HEAD,
  indent,
  parameters: makeCommentArray(comment)
});
const makeCommandCommentBody = (comment, indent = 0) => ({
  code: COMMENT_BODY,
  indent,
  parameters: makeCommentArray(comment)
});
const makeCommentCommandArray = (comments, indent = 0) => {
  return comments.map(
    (comment, index) => index === 0 ? makeCommandCommentHeader(comment, indent) : makeCommandCommentBody(comment, indent)
  );
};
const toArrayInputNumber = (param) => [param.variableId ?? 0, param.digits ?? 0];
const fromArrayInputNumber = (array) => ({
  variableId: array[0],
  digits: array[1]
});
const makeCommandInputNumber = (param, indent = 0) => ({
  code: INPUT_NUMBER,
  indent,
  parameters: toArrayInputNumber(param ?? {})
});
const toArrayScrollingTextHeader = (param = {}) => {
  return [(param == null ? void 0 : param.speed) ?? 4, (param == null ? void 0 : param.skip) ?? false];
};
const fromArrayScrollingTextHeader = (array) => {
  return {
    speed: array[0],
    skip: array[1]
  };
};
const makeCommandScrollingTextHeader = (param = {}, indent = 0) => {
  return {
    code: SHOW_SCROLLING_TEXT,
    indent,
    parameters: toArrayScrollingTextHeader(param)
  };
};
const toArrayScrollingTextBody = (text = "") => {
  return [text];
};
const fromArrayScrollingTextBody = (array) => {
  return {
    content: array[0]
  };
};
const makeCommandScrollingTextBody = (text = "", indent = 0) => {
  return {
    code: SHOW_SCROLLING_TEXT_BODY,
    indent: indent ?? 0,
    parameters: toArrayScrollingTextBody(text)
  };
};
const makeCommandShowChoiceItem = (param, indent = 0) => ({
  code: SHOW_CHOICES_ITEM,
  indent,
  parameters: [(param == null ? void 0 : param.index) ?? 0, (param == null ? void 0 : param.name) ?? ""]
});
const fromArraySetupChoiceItem = (array) => ({
  index: array[0],
  name: array[1]
});
const toArraySetupChoiceItem = (object) => [object.index ?? 0, object.name ?? ""];
const fromArraySetupChoice = (array) => ({
  choices: array[0],
  cancelType: array[1],
  defaultType: array[2],
  positionType: array[3],
  background: array[4]
});
const toArraySetupChoice = (object) => [
  object.choices ?? [],
  object.cancelType ?? 0,
  object.defaultType ?? 0,
  object.positionType ?? 2,
  object.background ?? 0
];
const makeCommandSetupChoice = (param, indent = 0) => ({
  code: SHOW_CHOICES,
  indent,
  parameters: [
    (param == null ? void 0 : param.choices) ?? [],
    (param == null ? void 0 : param.cancelType) ?? 0,
    (param == null ? void 0 : param.defaultType) ?? 0,
    (param == null ? void 0 : param.positionType) ?? 2,
    (param == null ? void 0 : param.background) ?? 0
  ]
});
const cloneChoices = (command) => {
  return {
    code: command.code,
    indent: command.indent,
    parameters: [
      [...command.parameters[0]],
      command.parameters[1],
      command.parameters[2],
      command.parameters[3],
      command.parameters[4]
    ]
  };
};
const makeCommandShowMessage = (param, indent = 0) => ({
  code: SHOW_MESSAGE,
  indent,
  parameters: [
    (param == null ? void 0 : param.facename) ?? "",
    (param == null ? void 0 : param.faceIndex) ?? 0,
    (param == null ? void 0 : param.background) ?? 0,
    (param == null ? void 0 : param.positionType) ?? 2,
    (param == null ? void 0 : param.speakerName) ?? ""
  ]
});
const fromArrayShowMessageHeader = (array) => {
  return {
    facename: array[0],
    faceIndex: array[1],
    background: array[2],
    positionType: array[3],
    speakerName: array[4]
  };
};
const toArrayShowMessageHeader = (object) => {
  return [
    object.facename,
    object.faceIndex,
    object.background,
    object.positionType,
    object.speakerName
  ];
};
const makeCommandShowMessageBody = (text, indent = 0) => ({
  code: SHOW_MESSAGE_BODY,
  indent,
  parameters: [text]
});
const makeCommandScriptHeader = (script, indent = 0) => {
  return {
    code: SCRIPT_EVAL,
    indent,
    parameters: [script]
  };
};
const makeCommandScriptBody = (script, indent = 0) => {
  return {
    code: SCRIPT_EVAL_BODY,
    indent,
    parameters: [script]
  };
};
const makeCommandScriptArray = (lines, indent = 0) => {
  return lines.map(
    (line, index) => index === 0 ? makeCommandScriptHeader(line, indent) : makeCommandScriptBody(line, indent)
  );
};
const OPERAND_CONSTANT = 0;
const OPERAND_VARIABLE = 1;
const OPERAND_RANDOM = 2;
const OPERAND_GAMEDATA = 3;
const OPERAND_SCRIPT = 4;
const getEnemyValue = (enemy, param) => {
  switch (param[6]) {
    case 0:
      return enemy.hp;
    case 1:
      return enemy.mp;
    case 10:
      return enemy.tp;
  }
  if (param[6] >= 2 && param[6] <= 9) {
    return enemy.param(param[6] - 2);
  }
  return 0;
};
const getActorValue = (actor, param) => {
  switch (param[6]) {
    case 0:
      return actor.level;
    case 1:
      return actor.currentExp();
    case 2:
      return actor.hp;
    case 3:
      return actor.mp;
    case 12:
      return actor.tp;
  }
  if (param[6] >= 4 && param[6] <= 11) {
    return actor.param(param[6] - 4);
  }
  return 0;
};
const ENEMY_PARAM_INDEX = {
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
};
const toArrayOperandConstant = (target, value, operation = 0) => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_CONSTANT,
  value.value
];
const toArrayOperandVariable = (target, value, operation = 0) => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_VARIABLE,
  value.variableId
];
const toArrayOperandRandom = (target, value, operation = 0) => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_RANDOM,
  value.min,
  value.max
];
const toArrayOperandScript = (target, value, operation = 0) => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_SCRIPT,
  value.code
];
const toArrayOperandItemData = (target, value, operation = 0) => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  value.type,
  value.itemId
];
const toArrayOperandActorStatus = (target, value, operation = 0) => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  3,
  value.index,
  value.param
];
const toArrayOperandEnemyStatus = (target, value, operation = 0) => [
  target.startId,
  target.endId ?? target.startId,
  operation,
  OPERAND_GAMEDATA,
  4,
  value.index,
  ENEMY_PARAM_INDEX[value.param]
];
const fromArrayControlSwitches = (param) => {
  return {
    min: param[0],
    max: param[1],
    value: param[2]
  };
};
const toArrayControlSwitches = (object) => {
  return [object.min, object.max, object.value];
};
const makeCommandControlSwitches = (param, indent = 0) => ({
  code: CONTROL_SWITCHES,
  indent,
  parameters: toArrayControlSwitches(param)
});
const makeCommandCommonEvent = (param, indent = 0) => ({
  code: COMMON_EVENT,
  indent,
  parameters: toArrayCommonEvent(param ?? {})
});
const fromArrayCommonEvent = (array) => ({
  eventId: array[0]
});
const toArrayCommonEvent = (object) => [object.eventId ?? 0];
const isCommandPlayBgm = (command) => {
  return isCommandAudio(command) && command.code === PLAY_BGM;
};
const isCommandPlayBgs = (command) => {
  return isCommandAudio(command) && command.code === PLAY_BGS;
};
const isCommandPlayMe = (command) => {
  return isCommandAudio(command) && command.code === PLAY_ME;
};
const isCommandPlaySe = (command) => {
  return isCommandAudio(command) && command.code === PLAY_SE;
};
const isCommandChangeBattleBgm = (command) => {
  return isCommandAudio(command) && command.code === CHANGE_BATTLE_BGM;
};
const isCommandChangeVictoryMe = (command) => {
  return isCommandAudio(command) && command.code === CHANGE_VICTORY_ME;
};
const isCommandChangeDefeatMe = (command) => {
  return isCommandAudio(command) && command.code === CHANGE_DEFEAT_ME;
};
const cloneParameters = (param) => {
  return [...param];
};
const cloneEventCommand = (command) => {
  return {
    code: command.code,
    indent: command.indent,
    parameters: cloneParameters(command.parameters)
  };
};
const isPrimitive = (value) => typeof value === "string" || typeof value === "number" || typeof value === "boolean";
const isCloneableCommand = (value) => {
  return value.parameters.every(isPrimitive);
};
exports.AUTHOR_RMMZ = AUTHOR_RMMZ;
exports.DEFAULT_GLOBAL_LABELS = DEFAULT_GLOBAL_LABELS;
exports.DEFAULT_SYSTEM_LABELS_BOOLEAN = DEFAULT_SYSTEM_LABELS_BOOLEAN;
exports.DEFAULT_SYSTEM_LABELS_DATA_TYPES = DEFAULT_SYSTEM_LABELS_DATA_TYPES;
exports.FILENAME_ACTORS = FILENAME_ACTORS;
exports.FILENAME_ANIMATIONS = FILENAME_ANIMATIONS;
exports.FILENAME_ARMORS = FILENAME_ARMORS;
exports.FILENAME_CLASSES = FILENAME_CLASSES;
exports.FILENAME_COMMON_EVENTS = FILENAME_COMMON_EVENTS;
exports.FILENAME_ENEMIES = FILENAME_ENEMIES;
exports.FILENAME_ITEMS = FILENAME_ITEMS;
exports.FILENAME_MAP_INFOS = FILENAME_MAP_INFOS;
exports.FILENAME_SKILLS = FILENAME_SKILLS;
exports.FILENAME_STATES = FILENAME_STATES;
exports.FILENAME_SYSTEM = FILENAME_SYSTEM;
exports.FILENAME_TILESET = FILENAME_TILESET;
exports.FILENAME_TROOPS = FILENAME_TROOPS;
exports.FILENAME_WEAPONS = FILENAME_WEAPONS;
exports.FOLDER_AUDIO = FOLDER_AUDIO;
exports.FOLDER_AUDIO_BGM = FOLDER_AUDIO_BGM;
exports.FOLDER_AUDIO_BGS = FOLDER_AUDIO_BGS;
exports.FOLDER_AUDIO_ME = FOLDER_AUDIO_ME;
exports.FOLDER_AUDIO_SE = FOLDER_AUDIO_SE;
exports.FOLDER_DATA = FOLDER_DATA;
exports.FOLDER_IMG = FOLDER_IMG;
exports.FOLDER_IMG_BATTLEBACK1 = FOLDER_IMG_BATTLEBACK1;
exports.FOLDER_IMG_BATTLEBACK2 = FOLDER_IMG_BATTLEBACK2;
exports.FOLDER_IMG_CHACTERS = FOLDER_IMG_CHACTERS;
exports.FOLDER_IMG_ENEMIES = FOLDER_IMG_ENEMIES;
exports.FOLDER_IMG_FACES = FOLDER_IMG_FACES;
exports.FOLDER_IMG_PARALLACES = FOLDER_IMG_PARALLACES;
exports.FOLDER_IMG_PICTURES = FOLDER_IMG_PICTURES;
exports.FOLDER_IMG_SV_ACTORS = FOLDER_IMG_SV_ACTORS;
exports.FOLDER_IMG_SV_ENEMIES = FOLDER_IMG_SV_ENEMIES;
exports.FOLDER_IMG_SYSTEM = FOLDER_IMG_SYSTEM;
exports.FOLDER_IMG_TILESETS = FOLDER_IMG_TILESETS;
exports.FOLDER_IMG_TITLES1 = FOLDER_IMG_TITLES1;
exports.FOLDER_IMG_TITLES2 = FOLDER_IMG_TITLES2;
exports.FOLDER_JS = FOLDER_JS;
exports.LABEL_REGISTRY_JP = LABEL_REGISTRY_JP;
exports.MODULE_DATA = MODULE_DATA;
exports.MODULE_SYSTEM = MODULE_SYSTEM$1;
exports.OPERAND_CONSTANT = OPERAND_CONSTANT;
exports.OPERAND_GAMEDATA = OPERAND_GAMEDATA;
exports.OPERAND_RANDOM = OPERAND_RANDOM;
exports.OPERAND_SCRIPT = OPERAND_SCRIPT;
exports.OPERAND_VARIABLE = OPERAND_VARIABLE;
exports.SCHEMA_SYSTEM_ADVANCED = SCHEMA_SYSTEM_ADVANCED;
exports.SRC_ARMOR_TYPES = SRC_ARMOR_TYPES;
exports.SRC_COLOR = SRC_COLOR;
exports.SRC_DATA_ACTOR = SRC_DATA_ACTOR;
exports.SRC_DATA_ARMOR = SRC_DATA_ARMOR;
exports.SRC_DATA_CLASS = SRC_DATA_CLASS;
exports.SRC_DATA_COMMON_EVNET = SRC_DATA_COMMON_EVNET;
exports.SRC_DATA_ENEMY = SRC_DATA_ENEMY;
exports.SRC_DATA_ITEMS = SRC_DATA_ITEMS;
exports.SRC_DATA_MAP = SRC_DATA_MAP;
exports.SRC_DATA_SKILL = SRC_DATA_SKILL;
exports.SRC_DATA_STATE = SRC_DATA_STATE;
exports.SRC_DATA_TROOP = SRC_DATA_TROOP;
exports.SRC_DATA_WEAPON = SRC_DATA_WEAPON;
exports.SRC_ELEMENTS = SRC_ELEMENTS;
exports.SRC_EQUIP_TYPES = SRC_EQUIP_TYPES;
exports.SRC_SKILL_TYPES = SRC_SKILL_TYPES;
exports.SRC_SWITCHES = SRC_SWITCHES;
exports.SRC_VARIABLE = SRC_VARIABLE;
exports.SRC_WEAPON_TYPES = SRC_WEAPON_TYPES;
exports.buildArmorTypesSource = buildArmorTypesSource;
exports.buildElementTypesSource = buildElementTypesSource;
exports.buildEquipTypesSource = buildEquipTypesSource;
exports.buildSkillTypesSource = buildSkillTypesSource;
exports.buildVariableNamesSource = buildVariableNamesSource;
exports.buildWeaponTypesSource = buildWeaponTypesSource;
exports.cloneChoices = cloneChoices;
exports.cloneEventCommand = cloneEventCommand;
exports.cloneParameters = cloneParameters;
exports.convertCommentArrayToObject = convertCommentArrayToObject;
exports.fromArrayCommonEvent = fromArrayCommonEvent;
exports.fromArrayControlSwitches = fromArrayControlSwitches;
exports.fromArrayInputNumber = fromArrayInputNumber;
exports.fromArrayScrollingTextBody = fromArrayScrollingTextBody;
exports.fromArrayScrollingTextHeader = fromArrayScrollingTextHeader;
exports.fromArraySetupChoice = fromArraySetupChoice;
exports.fromArraySetupChoiceItem = fromArraySetupChoiceItem;
exports.fromArrayShowMessageHeader = fromArrayShowMessageHeader;
exports.getActorValue = getActorValue;
exports.getEnemyValue = getEnemyValue;
exports.isCloneableCommand = isCloneableCommand;
exports.isCommandAudio = isCommandAudio;
exports.isCommandChangeActorText = isCommandChangeActorText;
exports.isCommandChangeBattleBgm = isCommandChangeBattleBgm;
exports.isCommandChangeDefeatMe = isCommandChangeDefeatMe;
exports.isCommandChangeVictoryMe = isCommandChangeVictoryMe;
exports.isCommandCommentBody = isCommandCommentBody;
exports.isCommandCommentHeader = isCommandCommentHeader;
exports.isCommandCommonEvent = isCommandCommonEvent;
exports.isCommandInputNumber = isCommandInputNumber;
exports.isCommandNonParam = isCommandNonParam;
exports.isCommandPlayBgm = isCommandPlayBgm;
exports.isCommandPlayBgs = isCommandPlayBgs;
exports.isCommandPlayMe = isCommandPlayMe;
exports.isCommandPlaySe = isCommandPlaySe;
exports.isCommandScriptBody = isCommandScriptBody;
exports.isCommandScriptHeader = isCommandScriptHeader;
exports.isCommandScrollTextHead = isCommandScrollTextHead;
exports.isCommandShowChoiceItem = isCommandShowChoiceItem;
exports.isCommandShowChoices = isCommandShowChoices;
exports.isCommandShowMessage = isCommandShowMessage;
exports.isCommandShowMessageBody = isCommandShowMessageBody;
exports.isCommandShowScrollingTextBody = isCommandShowScrollingTextBody;
exports.isCommandTextBody = isCommandTextBody;
exports.isValid = isValid;
exports.joinSourceKey = joinSourceKey;
exports.makeAudioCommand = makeAudioCommand;
exports.makeAudioFileParams = makeAudioFileParams;
exports.makeCommandAudioAny = makeCommandAudioAny;
exports.makeCommandChangeActorName = makeCommandChangeActorName;
exports.makeCommandChangeActorNickName = makeCommandChangeActorNickName;
exports.makeCommandChangeActorProfile = makeCommandChangeActorProfile;
exports.makeCommandChangeBattleBGM = makeCommandChangeBattleBGM;
exports.makeCommandChangeDefeatME = makeCommandChangeDefeatME;
exports.makeCommandChangeVictoryME = makeCommandChangeVictoryME;
exports.makeCommandCommentBody = makeCommandCommentBody;
exports.makeCommandCommentHeader = makeCommandCommentHeader;
exports.makeCommandCommonEvent = makeCommandCommonEvent;
exports.makeCommandControlSwitches = makeCommandControlSwitches;
exports.makeCommandInputNumber = makeCommandInputNumber;
exports.makeCommandPlayBGM = makeCommandPlayBGM;
exports.makeCommandPlayBGS = makeCommandPlayBGS;
exports.makeCommandPlayME = makeCommandPlayME;
exports.makeCommandPlaySE = makeCommandPlaySE;
exports.makeCommandScriptArray = makeCommandScriptArray;
exports.makeCommandScriptBody = makeCommandScriptBody;
exports.makeCommandScriptHeader = makeCommandScriptHeader;
exports.makeCommandScrollingTextBody = makeCommandScrollingTextBody;
exports.makeCommandScrollingTextHeader = makeCommandScrollingTextHeader;
exports.makeCommandSetupChoice = makeCommandSetupChoice;
exports.makeCommandShowChoiceItem = makeCommandShowChoiceItem;
exports.makeCommandShowMessage = makeCommandShowMessage;
exports.makeCommandShowMessageBody = makeCommandShowMessageBody;
exports.makeCommentArray = makeCommentArray;
exports.makeCommentCommandArray = makeCommentCommandArray;
exports.makeEditorSetting = makeEditorSetting;
exports.makeItemCategories = makeItemCategories;
exports.makeItemCategoriesFromArray = makeItemCategoriesFromArray;
exports.makeMenuCommandsEnabled = makeMenuCommandsEnabled;
exports.makeMenuCommandsEnabledFromArray = makeMenuCommandsEnabledFromArray;
exports.makeParamNamesArray = makeParamNamesArray;
exports.makeSoundsArray = makeSoundsArray;
exports.makeSoundsObject = makeSoundsObject;
exports.makeSystemAdvanced = makeSystemAdvanced;
exports.makeSystemData = makeSystemData;
exports.makeTermsBasic = makeTermsBasic;
exports.makeTermsBasicFromArray = makeTermsBasicFromArray;
exports.makeTermsCommand = makeTermsCommandArray;
exports.makeTermsCommandFromArray = makeTermsCommandFromArray;
exports.makeTermsMessages = makeTermsMessages;
exports.makeVehicleData = makeVehicleData;
exports.mergeDomainLabel = mergeDomainLabel;
exports.mergeNestedPrimitiveRecords = mergeNestedPrimitiveRecords;
exports.mergeWithDefaults = mergeWithDefaults;
exports.sanitizeKey = sanitizeKey;
exports.systemArmorTypesSourceId = systemArmorTypesSourceId;
exports.systemElementsSourceId = systemElementsSourceId;
exports.systemEquipTypesSourceId = systemEquipTypesSourceId;
exports.systemSkillTypesSourceId = systemSkillTypesSourceId;
exports.systemSwitchesSourceId = systemSwitchesSourceId;
exports.systemVariablesSourceId = systemVariablesSourceId;
exports.systemWeaponTypesSourceId = systemWeaponTypesSourceId;
exports.testUnknonwKey = testUnknonwKey;
exports.toArrayCommonEvent = toArrayCommonEvent;
exports.toArrayControlSwitches = toArrayControlSwitches;
exports.toArrayInputNumber = toArrayInputNumber;
exports.toArrayOperandActorStatus = toArrayOperandActorStatus;
exports.toArrayOperandConstant = toArrayOperandConstant;
exports.toArrayOperandEnemyStatus = toArrayOperandEnemyStatus;
exports.toArrayOperandItemData = toArrayOperandItemData;
exports.toArrayOperandRandom = toArrayOperandRandom;
exports.toArrayOperandScript = toArrayOperandScript;
exports.toArrayOperandVariable = toArrayOperandVariable;
exports.toArrayScrollingTextBody = toArrayScrollingTextBody;
exports.toArrayScrollingTextHeader = toArrayScrollingTextHeader;
exports.toArraySetupChoice = toArraySetupChoice;
exports.toArraySetupChoiceItem = toArraySetupChoiceItem;
exports.toArrayShowMessageHeader = toArrayShowMessageHeader;
//# sourceMappingURL=rpgTypes.cjs.js.map
