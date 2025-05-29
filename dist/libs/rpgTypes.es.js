import Ajv from "ajv";
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
const validate$1 = (msg, fallback) => {
  return typeof msg === "string" ? msg : fallback;
};
const makeTermsMessages = (msg) => {
  return {
    actionFailure: validate$1(msg.actionFailure, "Action failed."),
    actorDamage: validate$1(msg.actorDamage, "%1 took %2 damage."),
    actorRecovery: validate$1(msg.actorRecovery, "%1 recovered %2 HP."),
    actorGain: validate$1(msg.actorGain, "%1 gained %2."),
    actorLoss: validate$1(msg.actorLoss, "%1 lost %2."),
    actorDrain: validate$1(msg.actorDrain, "%1 drained %2 HP."),
    actorNoDamage: validate$1(msg.actorNoDamage, "%1 was not damaged."),
    actorNoHit: validate$1(msg.actorNoHit, "%1 was not hit."),
    alwaysDash: validate$1(msg.alwaysDash, "Always dash."),
    bgmVolume: validate$1(msg.bgmVolume, "BGM volume"),
    bgsVolume: validate$1(msg.bgsVolume, "BGS volume"),
    commandRemember: validate$1(msg.commandRemember, "Command remember."),
    criticalToActor: validate$1(msg.criticalToActor, "%1 dealt %2 damage to %3."),
    criticalToEnemy: validate$1(msg.criticalToEnemy, "%1 dealt %2 damage to %3."),
    counterAttack: validate$1(msg.counterAttack, "%1 countered!"),
    debuffAdd: validate$1(msg.debuffAdd, "%1's %2 was lowered."),
    defeat: validate$1(msg.defeat, "Defeat."),
    enemyDamage: validate$1(msg.enemyDamage, "%1 took %2 damage."),
    enemyDrain: validate$1(msg.enemyDrain, "%1 drained %2 HP."),
    enemyGain: validate$1(msg.enemyGain, "%1 gained %2."),
    enemyLoss: validate$1(msg.enemyLoss, "%1 lost %2."),
    enemyNoDamage: validate$1(msg.enemyNoDamage, "%1 was not damaged."),
    enemyNoHit: validate$1(msg.enemyNoHit, "%1 was not hit."),
    enemyRecovery: validate$1(msg.enemyRecovery, "%1 recovered %2 HP."),
    evasion: validate$1(msg.evasion, "%1 evaded the attack!"),
    autosave: validate$1(msg.autosave, "Autosave"),
    escapeFailure: validate$1(msg.escapeFailure, "Escape failed."),
    escapeStart: validate$1(msg.escapeStart, "%1 started to escape!"),
    emerge: validate$1(msg.emerge, "%1 appeared!"),
    expNext: validate$1(msg.expNext, "Next level in %1 EXP."),
    expTotal: validate$1(msg.expTotal, "Total EXP: %1"),
    file: validate$1(msg.file, "File"),
    buffAdd: validate$1(msg.buffAdd, "%1's %2 was raised."),
    buffRemove: validate$1(msg.buffRemove, "%1's %2 was lowered."),
    obtainExp: validate$1(msg.obtainExp, "%1 EXP obtained."),
    obtainGold: validate$1(msg.obtainGold, "%1 gold obtained."),
    obtainItem: validate$1(msg.obtainItem, "%1 obtained %2."),
    obtainSkill: validate$1(msg.obtainSkill, "%1 learned %2."),
    levelUp: validate$1(msg.levelUp, "%1 leveled up!"),
    partyName: validate$1(msg.partyName, "Party"),
    loadMessage: validate$1(msg.loadMessage, "Load %1?"),
    meVolume: validate$1(msg.meVolume, "ME volume"),
    possession: validate$1(msg.possession, "Possession"),
    preemptive: validate$1(msg.preemptive, "%1 attacked first!"),
    saveMessage: validate$1(msg.saveMessage, "Save %1?"),
    seVolume: validate$1(msg.seVolume, "SE volume"),
    magicEvasion: validate$1(msg.magicEvasion, "%1 evaded the magic!"),
    magicReflection: validate$1(msg.magicReflection, "%1 reflected the magic!"),
    substitute: validate$1(msg.substitute, "%1 took the hit!"),
    surprise: validate$1(msg.surprise, "%1 surprised the enemy!"),
    touchUI: validate$1(msg.touchUI, "Touch UI"),
    useItem: validate$1(msg.useItem, "%1 used %2."),
    victory: validate$1(msg.victory, "Victory!")
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
const ajv$3 = new Ajv({ strict: false });
ajv$3.compile(SCHEMA_SYSTEM_BOOLEAN_OPTIONS);
const testBattler = ajv$3.compile(SCHEMA_SYSTEM_TEST_BATTLER);
const isTestBattler = (data) => {
  return testBattler(data);
};
ajv$3.compile(SCHEMA_SYSTEM_MEMBERS_ATTACK_MOTION);
const imageSize = ajv$3.compile(SCHEMA_SYSTEM_IMAGE_SIZE);
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
const getParamNames = (system) => {
  return system.terms.params.map(makeNamedItem);
};
const AUTHOR_RMMZ = "rmmz";
const MODULE_TRAIT = "trait";
const MODULE_DATA = "data";
const MODULE_SYSTEM = "system";
const TRAIT_ELEMENT_RATE = 11;
const TRAIT_DEBUFF_RATE = 12;
const TRAIT_STATE_RATE = 13;
const TRAIT_STATE_RESIST = 14;
const TRAIT_PARAM = 21;
const TRAIT_XPARAM = 22;
const TRAIT_SPARAM = 23;
const TRAIT_ATTACK_ELEMENT = 31;
const TRAIT_ATTACK_STATE = 32;
const TRAIT_ATTACK_SPEED = 33;
const TRAIT_ATTACK_TIMES = 34;
const TRAIT_ATTACK_SKILL = 35;
const TRAIT_SKILL_TYPE_ADD = 41;
const TRAIT_SKILL_TYPE_SEAL = 42;
const TRAIT_SKILL_ADD = 43;
const TRAIT_SKILL_SEAL = 44;
const TRAIT_EQUIP_WEAPON_TYPE = 51;
const TRAIT_EQUIP_ARMOR_TYPE = 52;
const TRAIT_EQUIP_LOCK = 53;
const TRAIT_EQUIP_SEAL = 54;
const TRAIT_SLOT_TYPE = 55;
const TRAIT_ACTION_PLUS = 61;
const TRAIT_SPECIAL_FLAG = 62;
const TRAIT_COLLAPSE_TYPE = 63;
const TRAIT_PARTY_ABILITY = 64;
const COLLAPS_NORMAL = 0;
const COLLAPS_BOSS = 1;
const COLLAPS_INSTANT = 2;
const COLLAPS_NONE = 3;
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
const SRC_PARAMS_REGULAR = "params";
const SRC_PARAMS_EXTRA = "xparams";
const SRC_PARAMS_SPECIAL = "sparams";
const SRC_TRAIT_COLLAPS = "collaps";
const SRC_TRAIT_PARTY_ABILITY = "partyAbiility";
const SRC_TRAIT_SPECIAL_FLAG = "sflag";
const SRC_DATA_ACTOR = "actor";
const SRC_DATA_VARIABLE = "variables";
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
const SRC_SWITCHES = "switches";
const SRC_SKILL_TYPES = "skillTypes";
const SRC_ELEMENTS = "elements";
const collapsSourceId = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  kind: SRC_TRAIT_COLLAPS
});
const collapsOptionsToArray = (options, global) => {
  return [
    {
      id: COLLAPS_NORMAL,
      name: global.normal
    },
    {
      id: COLLAPS_BOSS,
      name: options.bossCollaps
    },
    {
      id: COLLAPS_INSTANT,
      name: options.instantCollaps
    },
    {
      id: COLLAPS_NONE,
      name: options.noneCollaps
    }
  ];
};
const PARTY_ABILITY_ENCOUNTER_HALF = 0;
const PARTY_ABILITY_ENCOUNTER_NONE = 1;
const PARTY_ABILITY_CANCEL_SURPRISE = 2;
const PARTY_ABILITY_RAISE_PREEMPTIVE = 3;
const PARTY_ABILITY_GOLD_DOUBLE = 4;
const PARTY_ABILITY_DROP_ITEM_DOUBLE = 5;
const partyAbilitySourceId = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  kind: SRC_TRAIT_PARTY_ABILITY
});
const partyAbilityToArray = (options) => {
  return [
    {
      id: PARTY_ABILITY_ENCOUNTER_HALF,
      name: options.encounterHalf
    },
    {
      id: PARTY_ABILITY_ENCOUNTER_NONE,
      name: options.encounterNone
    },
    {
      id: PARTY_ABILITY_CANCEL_SURPRISE,
      name: options.cancelSurprise
    },
    {
      id: PARTY_ABILITY_RAISE_PREEMPTIVE,
      name: options.raisePreemptive
    },
    {
      id: PARTY_ABILITY_GOLD_DOUBLE,
      name: options.goldDouble
    },
    {
      id: PARTY_ABILITY_DROP_ITEM_DOUBLE,
      name: options.dropItemDouble
    }
  ];
};
const FLAG_ID_AUTO_BATTLE = 0;
const FLAG_ID_GUARD = 1;
const FLAG_ID_SUBSTITUTE = 2;
const FLAG_ID_PRESERVE_TP = 3;
const specialFlagSourceId = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  kind: SRC_TRAIT_SPECIAL_FLAG
});
const specialFlagToArray = (label) => {
  return [
    {
      id: FLAG_ID_AUTO_BATTLE,
      name: label.autoBattle
    },
    {
      id: FLAG_ID_GUARD,
      name: label.guard
    },
    {
      id: FLAG_ID_SUBSTITUTE,
      name: label.substitute
    },
    {
      id: FLAG_ID_PRESERVE_TP,
      name: label.preventEscape
    }
  ];
};
const EXTRA_PARAM_HIT = 0;
const EXTRA_PARAM_EVA = 1;
const EXTRA_PARAM_CRI = 2;
const EXTRA_PARAM_CEV = 3;
const EXTRA_PARAM_MEV = 4;
const EXTRA_PARAM_MRF = 5;
const EXTRA_PARAM_CNT = 6;
const EXTRA_PARAM_HRG = 7;
const EXTRA_PARAM_MRG = 8;
const EXTRA_PARAM_TRG = 9;
const extraParamSourceId = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  kind: SRC_PARAMS_SPECIAL
});
const extraParamsToArray = (xparam) => {
  return [
    {
      id: EXTRA_PARAM_HIT,
      name: xparam.hitRate
    },
    {
      id: EXTRA_PARAM_EVA,
      name: xparam.evasionRate
    },
    {
      id: EXTRA_PARAM_CRI,
      name: xparam.criticalRate
    },
    {
      id: EXTRA_PARAM_CEV,
      name: xparam.criticalEvasionRate
    },
    {
      id: EXTRA_PARAM_MEV,
      name: xparam.magicEvasionRate
    },
    {
      id: EXTRA_PARAM_MRF,
      name: xparam.magicReflectionRate
    },
    {
      id: EXTRA_PARAM_CNT,
      name: xparam.counterAttackRate
    },
    {
      id: EXTRA_PARAM_HRG,
      name: xparam.hpRegenerationRate
    },
    {
      id: EXTRA_PARAM_MRG,
      name: xparam.mpRegenerationRate
    },
    {
      id: EXTRA_PARAM_TRG,
      name: xparam.tpRegenerationRate
    }
  ];
};
const extraParamName = (paramIndex, labels) => {
  switch (paramIndex) {
    case EXTRA_PARAM_CEV:
      return labels.criticalEvasionRate;
    case EXTRA_PARAM_EVA:
      return labels.evasionRate;
    case EXTRA_PARAM_CNT:
      return labels.counterAttackRate;
    case EXTRA_PARAM_CRI:
      return labels.criticalRate;
    case EXTRA_PARAM_HIT:
      return labels.hitRate;
    case EXTRA_PARAM_HRG:
      return labels.hpRegenerationRate;
    case EXTRA_PARAM_MEV:
      return labels.magicEvasionRate;
    case EXTRA_PARAM_MRF:
      return labels.magicReflectionRate;
    case EXTRA_PARAM_MRG:
      return labels.mpRegenerationRate;
    case EXTRA_PARAM_TRG:
      return labels.tpRegenerationRate;
  }
  return `?xparams[${paramIndex}]`;
};
const REGULAR_PARAM_MAX_HP = 0;
const REGULAR_PARAM_MAX_MP = 1;
const REGULAR_PARAM_ATK = 2;
const REGULAR_PARAM_DEF = 3;
const REGULAR_PARAM_MATK = 4;
const REGULAR_PARAM_MDEF = 5;
const REGULAR_PARAM_AGI = 6;
const REGULAR_PARAM_LUK = 7;
const regularParamSourceId = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  kind: SRC_PARAMS_REGULAR
});
const regularParamsToArray = (param) => {
  return [
    { id: REGULAR_PARAM_MAX_HP, name: param.maxHp },
    { id: REGULAR_PARAM_MAX_MP, name: param.maxMp },
    { id: REGULAR_PARAM_ATK, name: param.atk },
    { id: REGULAR_PARAM_DEF, name: param.def },
    { id: REGULAR_PARAM_MATK, name: param.matk },
    { id: REGULAR_PARAM_MDEF, name: param.mdef },
    { id: REGULAR_PARAM_AGI, name: param.agi },
    { id: REGULAR_PARAM_LUK, name: param.luk }
  ];
};
const regularParamName = (paramIndex, labels) => {
  switch (paramIndex) {
    case REGULAR_PARAM_MAX_HP:
      return labels.maxHp;
    case REGULAR_PARAM_MAX_MP:
      return labels.maxMp;
    case REGULAR_PARAM_ATK:
      return labels.atk;
    case REGULAR_PARAM_DEF:
      return labels.def;
    case REGULAR_PARAM_MATK:
      return labels.matk;
    case REGULAR_PARAM_MDEF:
      return labels.mdef;
    case REGULAR_PARAM_AGI:
      return labels.agi;
    case REGULAR_PARAM_LUK:
      return labels.luk;
    default:
      return `?rparams[${paramIndex}]`;
  }
};
const SPECIAL_PARAM_TGR = 0;
const SPECIAL_PARAM_GRD = 1;
const SPECIAL_PARAM_REC = 2;
const SPECIAL_PARAM_PHA = 3;
const SPECIAL_PARAM_MCR = 4;
const SPECIAL_PARAM_TCR = 5;
const SPECIAL_PARAM_PDR = 6;
const SPECIAL_PARAM_MDR = 7;
const SPECIAL_PARAM_FDR = 8;
const SPECIAL_PARAM_EXR = 9;
const sparamSourceId = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  kind: SRC_PARAMS_SPECIAL
});
const specialParamsToArray = (specialParams) => {
  return [
    {
      id: SPECIAL_PARAM_TGR,
      name: specialParams.targetRate
    },
    {
      id: SPECIAL_PARAM_GRD,
      name: specialParams.guardEffectRate
    },
    {
      id: SPECIAL_PARAM_REC,
      name: specialParams.recoveryEffectRate
    },
    {
      id: SPECIAL_PARAM_PHA,
      name: specialParams.pharmacology
    },
    {
      id: SPECIAL_PARAM_MCR,
      name: specialParams.mpCostRate
    },
    {
      id: SPECIAL_PARAM_TCR,
      name: specialParams.tpChargeRate
    },
    {
      id: SPECIAL_PARAM_PDR,
      name: specialParams.physicalDamageRate
    },
    {
      id: SPECIAL_PARAM_MDR,
      name: specialParams.magicDamageRate
    },
    {
      id: SPECIAL_PARAM_FDR,
      name: specialParams.floorDamageRate
    },
    {
      id: SPECIAL_PARAM_EXR,
      name: specialParams.experienceRate
    }
  ];
};
const specialParamName = (paramIndex, labels) => {
  switch (paramIndex) {
    case SPECIAL_PARAM_EXR:
      return labels.experienceRate;
    case SPECIAL_PARAM_TGR:
      return labels.targetRate;
    case SPECIAL_PARAM_FDR:
      return labels.floorDamageRate;
    case SPECIAL_PARAM_GRD:
      return labels.guardEffectRate;
    case SPECIAL_PARAM_MCR:
      return labels.mpCostRate;
    case SPECIAL_PARAM_TCR:
      return labels.tpChargeRate;
    case SPECIAL_PARAM_PDR:
      return labels.physicalDamageRate;
    case SPECIAL_PARAM_MDR:
      return labels.magicDamageRate;
    case SPECIAL_PARAM_PHA:
      return labels.pharmacology;
    case SPECIAL_PARAM_REC:
      return labels.recoveryEffectRate;
  }
  return `?sparams[${paramIndex}]`;
};
const traitDomain = (sourceKey, labels, fn) => {
  return {
    items: fn(labels.options),
    label: labels.domainName,
    source: {
      author: AUTHOR_RMMZ,
      module: MODULE_TRAIT,
      kind: sourceKey
    }
  };
};
const buildCollapsSource = (labels, global) => {
  return traitDomain(
    SRC_TRAIT_COLLAPS,
    labels,
    (col) => collapsOptionsToArray(col, global)
  );
};
const buildPartyAbilitySource = (labels) => {
  return traitDomain(SRC_TRAIT_PARTY_ABILITY, labels, partyAbilityToArray);
};
const buildRegularParamSource = (label) => {
  return traitDomain(SRC_PARAMS_REGULAR, label, regularParamsToArray);
};
const buildExtraParamSource = (label) => {
  return traitDomain(SRC_PARAMS_EXTRA, label, extraParamsToArray);
};
const buildSpecialParamSource = (label) => {
  return traitDomain(SRC_PARAMS_SPECIAL, label, specialParamsToArray);
};
const buildSpecialFlagSource = (label) => {
  return traitDomain(SRC_TRAIT_SPECIAL_FLAG, label, specialFlagToArray);
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
const PLACEHOLDER_VALUE = "{value}";
const PLACEHOLDER_NAME$1 = "{name}";
class TraitDescriptor {
  constructor(code, label, format, dataSource) {
    this.code = code;
    this.label = label;
    this.format = format;
    this.dataSource = dataSource;
  }
  match(trait) {
    return this.code === trait.code;
  }
  testTraitCode(trait) {
    if (this.match(trait)) {
      return;
    }
  }
  formatText(trait, resolveName) {
    this.testTraitCode(trait);
    const text = this.format.replaceAll(
      PLACEHOLDER_VALUE,
      trait.value.toString()
    );
    if (!this.dataSource) {
      return text;
    }
    return text.replaceAll(
      PLACEHOLDER_NAME$1,
      resolveName(this.dataSource, trait.dataId)
    );
  }
  requiresValue() {
    return this.format.includes(PLACEHOLDER_VALUE);
  }
  requiresName() {
    return this.format.includes(PLACEHOLDER_NAME$1);
  }
  invalidPlaceHolder() {
    const allowed = ["value", "name"];
    const matches = [
      ...this.format.matchAll(/\{([^}]+)\}/g)
    ];
    return matches.map((m) => m[1]).filter((key) => !allowed.includes(key));
  }
  isFormatValidForDataSource() {
    if (this.dataSource && !this.requiresName()) {
      return false;
    }
    return true;
  }
  diagnose() {
    const soruceError = !this.isFormatValidForDataSource();
    const nameError = this.requiresName() && !this.dataSource;
    const invalidPlaceHolder = this.invalidPlaceHolder();
    return {
      code: this.code,
      label: this.label,
      format: this.format,
      hasError: soruceError || nameError || invalidPlaceHolder.length > 0,
      missingDataSourceError: soruceError,
      sourceMismatchError: nameError,
      invalidPlaceHolders: invalidPlaceHolder
    };
  }
}
const resolveTraitLabels = (labels) => {
  return [
    defineTraitElementRate(labels.elementRate),
    defineTraitDebuffRate(labels.debuffRate),
    defineTraitStateRate(labels.stateRate),
    defineTraitStateResist(labels.stateResist),
    defineTraitRegularParam(labels.regularParam),
    defineTraitExtraParam(labels.extraParam),
    defineTraitSpecialParam(labels.specialParam),
    defineTraitAttackElement(labels.attackElement),
    defineTraitAttackState(labels.attackState),
    defineTraitAttackSpeed(labels.attackSpeed),
    defineTraitAttackTimes(labels.attackTimes),
    defineTraitAttackSkill(labels.attackSkill),
    defineTraitSkillTypeAdd(labels.skillTypeAdd),
    defineTraitSkillTypeSeal(labels.skillTypeSeal),
    defineTraitSkillAdd(labels.skillAdd),
    defineTraitSkillSeal(labels.skillSeal),
    defineTraitEquipWeaponType(labels.equipWeaponType),
    defineTraitEquipArmorType(labels.equipArmorType),
    defineTraitEquipLock(labels.equipLock),
    defineTraitEquipSeal(labels.equipSeal),
    defineTraitSlotType(labels.slotType),
    defineTraitActionPlus(labels.actionPlus),
    defineTraitSpecialFlag(labels.specialFlag),
    defineTraitCollapseType(labels.collaps),
    defineTraitPartyAbility(labels.partyAbility)
  ];
};
const validate = (base, override) => typeof override === "string" ? override : base;
const defineTrait = (code, base, override, dataSource) => {
  const label = validate(base.domainName, override.domainName);
  const format = validate(base.format, override.format);
  return new TraitDescriptor(code, label, format, dataSource);
};
const srcElement = () => {
  return {
    module: MODULE_SYSTEM,
    author: AUTHOR_RMMZ,
    kind: SRC_ELEMENTS
  };
};
const srcData$1 = (key) => {
  return {
    module: MODULE_DATA,
    author: AUTHOR_RMMZ,
    kind: key
  };
};
const srcTrait = (src) => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  kind: src
});
const srcSystem = (src) => ({
  author: AUTHOR_RMMZ,
  module: MODULE_SYSTEM,
  kind: src
});
const defineTraitElementRate = (label) => defineTrait(
  TRAIT_ELEMENT_RATE,
  LABEL_SET_TRAIT.options.elementRate,
  label,
  srcElement()
);
const defineTraitDebuffRate = (label) => defineTrait(
  TRAIT_DEBUFF_RATE,
  LABEL_SET_TRAIT.options.debuffRate,
  label,
  srcTrait(SRC_PARAMS_REGULAR)
);
const defineTraitStateRate = (label) => defineTrait(
  TRAIT_STATE_RATE,
  LABEL_SET_TRAIT.options.stateRate,
  label,
  srcTrait(SRC_PARAMS_REGULAR)
);
const defineTraitStateResist = (label) => defineTrait(
  TRAIT_STATE_RESIST,
  LABEL_SET_TRAIT.options.stateResist,
  label,
  srcData$1(SRC_DATA_STATE)
);
const defineTraitRegularParam = (label) => defineTrait(
  TRAIT_PARAM,
  LABEL_SET_TRAIT.options.regularParam,
  label,
  srcTrait(SRC_PARAMS_REGULAR)
);
const defineTraitExtraParam = (label) => defineTrait(
  TRAIT_XPARAM,
  LABEL_SET_TRAIT.options.extraParam,
  label,
  srcTrait(SRC_PARAMS_EXTRA)
);
const defineTraitSpecialParam = (label) => defineTrait(
  TRAIT_SPARAM,
  LABEL_SET_TRAIT.options.specialParam,
  label,
  srcTrait(SRC_PARAMS_SPECIAL)
);
const defineTraitAttackElement = (label) => defineTrait(
  TRAIT_ATTACK_ELEMENT,
  LABEL_SET_TRAIT.options.attackElement,
  label,
  srcElement()
);
const defineTraitAttackState = (label) => defineTrait(
  TRAIT_ATTACK_STATE,
  LABEL_SET_TRAIT.options.attackState,
  label,
  srcTrait(SRC_DATA_STATE)
);
const defineTraitAttackSpeed = (label) => defineTrait(TRAIT_ATTACK_SPEED, LABEL_SET_TRAIT.options.attackSpeed, label);
const defineTraitAttackTimes = (label) => defineTrait(TRAIT_ATTACK_TIMES, LABEL_SET_TRAIT.options.attackTimes, label);
const defineTraitAttackSkill = (label) => defineTrait(
  TRAIT_ATTACK_SKILL,
  LABEL_SET_TRAIT.options.attackSkill,
  label,
  srcData$1(SRC_DATA_SKILL)
);
const defineTraitActionPlus = (label) => defineTrait(TRAIT_ACTION_PLUS, LABEL_SET_TRAIT.options.actionPlus, label);
const defineTraitSpecialFlag = (label) => defineTrait(
  TRAIT_SPECIAL_FLAG,
  LABEL_SET_TRAIT.options.specialFlag,
  label,
  srcTrait(SRC_TRAIT_SPECIAL_FLAG)
);
const defineTraitCollapseType = (label) => defineTrait(
  TRAIT_COLLAPSE_TYPE,
  LABEL_SET_TRAIT.options.collaps,
  label,
  srcTrait(SRC_TRAIT_COLLAPS)
);
const defineTraitPartyAbility = (label) => defineTrait(
  TRAIT_PARTY_ABILITY,
  LABEL_SET_TRAIT.options.partyAbility,
  label,
  srcTrait(SRC_TRAIT_PARTY_ABILITY)
);
const defineTraitEquipWeaponType = (label) => defineTrait(
  TRAIT_EQUIP_WEAPON_TYPE,
  LABEL_SET_TRAIT.options.equipWeaponType,
  label,
  srcSystem(SRC_WEAPON_TYPES)
);
const defineTraitEquipArmorType = (label) => defineTrait(
  TRAIT_EQUIP_ARMOR_TYPE,
  LABEL_SET_TRAIT.options.equipArmorType,
  label,
  srcSystem(SRC_ARMOR_TYPES)
);
const defineTraitEquipLock = (label) => defineTrait(TRAIT_EQUIP_LOCK, LABEL_SET_TRAIT.options.equipLock, label);
const defineTraitEquipSeal = (label) => defineTrait(TRAIT_EQUIP_SEAL, LABEL_SET_TRAIT.options.equipSeal, label);
const defineTraitSkillAdd = (label) => defineTrait(TRAIT_SKILL_ADD, LABEL_SET_TRAIT.options.skillAdd, label);
const defineTraitSkillSeal = (label) => defineTrait(TRAIT_SKILL_SEAL, LABEL_SET_TRAIT.options.skillSeal, label);
const defineTraitSlotType = (label) => defineTrait(TRAIT_SLOT_TYPE, LABEL_SET_TRAIT.options.slotType, label);
const defineTraitSkillTypeAdd = (label) => defineTrait(
  TRAIT_SKILL_TYPE_ADD,
  LABEL_SET_TRAIT.options.skillTypeAdd,
  label
);
const defineTraitSkillTypeSeal = (label) => defineTrait(
  TRAIT_SKILL_TYPE_SEAL,
  LABEL_SET_TRAIT.options.skillTypeSeal,
  label
);
const TYPENAME_TRAIT = "Trait";
const SCHEMA_TRAIT = {
  type: "object",
  required: ["code", "dataId", "value"],
  properties: {
    code: { type: "integer" },
    dataId: { type: "integer" },
    value: { type: "integer" }
  }
};
const formatTraitText = (format, trait, items) => {
  const item2 = items[trait.dataId];
  const itemName = item2 ? item2.name : `?data[${trait.dataId}]`;
  return format.replaceAll(FORMAT_PARAM_VALUE, trait.value.toString()).replaceAll(FORMAT_NAME$1, itemName);
};
const makeActorData = (actor2 = {}) => ({
  name: actor2.name ?? "",
  id: actor2.id ?? 0,
  battlerName: actor2.battlerName ?? "",
  characterName: actor2.characterName ?? "",
  characterIndex: actor2.characterIndex ?? 0,
  faceName: actor2.faceName ?? "",
  faceIndex: actor2.faceIndex ?? 0,
  traits: [],
  note: actor2.note ?? "",
  classId: actor2.classId ?? 0,
  nickname: actor2.nickname ?? "",
  profile: actor2.profile ?? "",
  equips: [],
  initialLevel: actor2.initialLevel ?? 0,
  maxLevel: actor2.maxLevel ?? 0
});
const makeActorSourceIdentifier = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_DATA,
  kind: SRC_DATA_ACTOR
});
const SCHEMA_DATA_ACTOR = {
  type: "object",
  required: [
    "name",
    "id",
    "nickname",
    "battlerName",
    "characterName",
    "characterIndex",
    "faceName",
    "faceIndex",
    "classId",
    "initialLevel",
    "maxLevel"
  ],
  properties: {
    name: { type: "string" },
    battlerName: { type: "string" },
    characterName: { type: "string" },
    characterIndex: { type: "integer" },
    faceName: { type: "string" },
    faceIndex: { type: "integer", minimum: 0, maximum: 7 },
    id: { type: "integer", minimum: 0 },
    nickname: { type: "string" },
    profile: { type: "string" },
    initialLevel: { type: "integer", minimum: 0 },
    maxLevel: { type: "integer" },
    classId: { type: "integer", minimum: 0 },
    equips: { type: "array", items: { type: "integer" } },
    note: { type: "string" },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"]
      }
    }
  }
};
const makeArmorData = (armor2 = {}) => ({
  id: armor2.id ?? 0,
  name: armor2.name ?? "",
  iconIndex: armor2.iconIndex ?? 0,
  description: armor2.description ?? "",
  traits: armor2.traits ?? [],
  note: armor2.note ?? "",
  atypeId: armor2.atypeId ?? 0,
  params: armor2.params ?? [
    0,
    // maxhp
    0,
    // maxmp
    0,
    // atk
    0,
    // def
    0,
    // mat
    0,
    // mdf
    0,
    // agi
    0
    // luk
  ],
  etypeId: armor2.etypeId ?? 0,
  price: armor2.price ?? 0
});
const makeArmorSourceIdentifier = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_DATA,
  kind: SRC_DATA_ARMOR
});
const SCHEMA_DATA_ARMMOR = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "price",
    "params",
    "traits",
    "note",
    "etypeId",
    "atypeId"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    atypeId: { type: "integer", minimum: 0 },
    params: {
      type: "array",
      items: [
        { type: "integer" },
        // mhp
        { type: "integer" },
        // mmp
        { type: "integer" },
        // atk
        { type: "integer" },
        // def
        { type: "integer" },
        // mat
        { type: "integer" },
        // mdf
        { type: "integer" },
        // agi
        { type: "integer" }
        // luk
      ],
      minItems: 8,
      maxItems: 8
    },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"]
      }
    }
  }
};
const makeClassData = (data = {}) => ({
  name: data.name ?? "",
  id: data.id ?? 0,
  traits: [],
  note: data.note ?? "",
  params: [
    0,
    // maxhp
    0,
    // maxmp
    0,
    // atk
    0,
    // def
    0,
    // mat
    0,
    // mdf
    0,
    // agi
    0
    // luk
  ],
  learnings: data.learnings ?? [],
  expParams: data.expParams ?? []
});
const makeClassSourceIdentifier = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_DATA,
  kind: SRC_DATA_CLASS
});
const SCHEMA_DATA_CLASS = {
  type: "object",
  required: [
    "name",
    "id",
    "note",
    "expParams",
    "params",
    "learnings",
    "traits"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    note: { type: "string" },
    expParams: {
      type: "array",
      items: { type: "integer" }
    },
    params: {
      type: "array",
      items: [
        { type: "integer" },
        // mhp
        { type: "integer" },
        // mmp
        { type: "integer" },
        // atk
        { type: "integer" },
        // def
        { type: "integer" },
        // mat
        { type: "integer" },
        // mdf
        { type: "integer" },
        // agi
        { type: "integer" }
        // luk
      ],
      minItems: 8,
      maxItems: 8
    },
    learnings: {
      type: "array",
      items: {
        type: "object",
        properties: {
          level: { type: "integer" },
          skillId: { type: "integer" },
          note: { type: "string" }
        },
        required: ["level", "skillId"],
        additionalProperties: false
      }
    },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"],
        additionalProperties: false
      }
    }
  },
  additionalProperties: false
};
const makeStateData = (data = {}) => ({
  name: data.name ?? "",
  id: data.id ?? 0,
  iconIndex: data.iconIndex ?? 0,
  message1: data.message1 ?? "",
  message2: data.message2 ?? "",
  message3: data.message3 ?? "",
  message4: data.message4 ?? "",
  traits: [],
  note: data.note ?? "",
  messageType: data.messageType ?? 0,
  releaseByDamage: data.releaseByDamage ?? false,
  restriction: data.restriction ?? 0,
  priority: data.priority ?? 0,
  motion: data.motion ?? 0,
  overlay: data.overlay ?? 0,
  removeAtBattleEnd: data.removeAtBattleEnd ?? false,
  removeByRestriction: data.removeByRestriction ?? false,
  autoRemovalTiming: data.autoRemovalTiming ?? 0,
  minTurns: data.minTurns ?? 0,
  maxTurns: data.maxTurns ?? 0,
  removeByDamage: data.removeByDamage ?? false,
  chanceByDamage: data.chanceByDamage ?? 0,
  removeByWalking: data.removeByWalking ?? false,
  stepsToRemove: data.stepsToRemove ?? 0
});
const makeStateSourceIdentifier = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_DATA,
  kind: SRC_DATA_ACTOR
});
const SCHEMA_DATA_STATE = {
  type: "object",
  required: [
    "name",
    "id",
    "iconIndex",
    "message1",
    "message2",
    "message3",
    "message4",
    "restriction",
    "priority",
    "motion",
    "overlay",
    "removeAtBattleEnd",
    "removeByDamage",
    "removeByWalking",
    "removeByRestriction",
    "autoRemovalTiming",
    "minTurns",
    "maxTurns",
    "chanceByDamage",
    "stepsToRemove",
    "note"
  ],
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
    removeByDamage: { type: "boolean" },
    removeByWalking: { type: "boolean" },
    removeByRestriction: { type: "boolean" },
    messageType: { type: "integer" },
    releaseByDamage: { type: "boolean" },
    autoRemovalTiming: { type: "integer" },
    minTurns: { type: "integer" },
    maxTurns: { type: "integer" },
    chanceByDamage: { type: "integer" },
    stepsToRemove: { type: "integer" },
    note: { type: "string" },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"]
      }
    }
  }
};
const LABELS_DATA_WEAPON = {
  domainName: "武器",
  options: {
    weaponTypeId: "武器タイプID"
  }
};
const makeWeaponData = (weapon2 = {}) => ({
  id: weapon2.id ?? 0,
  name: weapon2.name ?? "",
  iconIndex: weapon2.iconIndex ?? 0,
  description: weapon2.description ?? "",
  traits: weapon2.traits ?? [],
  note: weapon2.note ?? "",
  animationId: weapon2.animationId ?? 0,
  params: weapon2.params ?? [
    0,
    // maxhp
    0,
    // maxmp
    0,
    // atk
    0,
    // def
    0,
    // mat
    0,
    // mdf
    0,
    // agi
    0
    // luk
  ],
  etypeId: weapon2.etypeId ?? 0,
  price: weapon2.price ?? 0,
  damage: makeDamage(weapon2.damage ?? {}),
  wtypeId: weapon2.wtypeId ?? 0
});
const SCHEMA_DATA_WEAPON = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "price",
    "params",
    "traits",
    "note",
    "etypeId",
    "animationId"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    wtypeId: { type: "integer", minimum: 0 },
    animationId: { type: "integer", minimum: 0 },
    params: {
      type: "array",
      items: [
        { type: "integer" },
        // mhp
        { type: "integer" },
        // mmp
        { type: "integer" },
        // atk
        { type: "integer" },
        // def
        { type: "integer" },
        // mat
        { type: "integer" },
        // mdf
        { type: "integer" },
        // agi
        { type: "integer" }
        // luk
      ],
      minItems: 8,
      maxItems: 8
    },
    damage: {
      type: "object",
      properties: {
        type: { type: "integer", minimum: 0 },
        elementId: { type: "integer", minimum: 0 },
        formula: { type: "string" },
        variance: { type: "integer", minimum: 0, maximum: 100 },
        critical: { type: "boolean", default: false }
      },
      required: ["type", "elementId", "formula", "variance", "critical"]
    },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"]
      }
    }
  }
};
const makeDropItem = (dropItem = {}) => ({
  dataId: dropItem.dataId ?? 0,
  denominator: dropItem.denominator ?? 0,
  kind: dropItem.kind ?? 0
});
const makeEnemyAction = (action = {}) => ({
  conditionParam1: action.conditionParam1 ?? 0,
  conditionParam2: action.conditionParam2 ?? 0,
  conditionType: action.conditionType ?? 0,
  rating: action.rating ?? 0,
  skillId: action.skillId ?? 0
});
const makeEnemyData = (data = {}) => {
  var _a;
  return {
    name: data.name ?? "",
    id: data.id ?? 0,
    battlerName: data.battlerName ?? "",
    battlerHue: data.battlerHue ?? 0,
    dropItems: ((_a = data.dropItems) == null ? void 0 : _a.map(() => makeDropItem())) ?? [],
    exp: data.exp ?? 0,
    gold: data.gold ?? 0,
    traits: [],
    note: data.note ?? "",
    params: [
      0,
      // maxhp
      0,
      // maxmp
      0,
      // atk
      0,
      // def
      0,
      // mat
      0,
      // mdf
      0,
      // agi
      0
      // luk
    ],
    actions: []
  };
};
const makeEnemySourceIdentifier = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_DATA,
  kind: SRC_DATA_ENEMY
});
const SCHEMA_DATA_ENEMY = {
  type: "object",
  required: [
    "name",
    "id",
    "battlerName",
    "battlerHue",
    "exp",
    "gold",
    "note",
    "params",
    "dropItems",
    "traits",
    "actions"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    battlerHue: { type: "integer", minimum: 0 },
    battlerName: { type: "string" },
    exp: { type: "integer", minimum: 0 },
    gold: { type: "integer", minimum: 0 },
    note: { type: "string" },
    params: {
      type: "array",
      items: [
        { type: "integer" },
        // mhp
        { type: "integer" },
        // mmp
        { type: "integer" },
        // atk
        { type: "integer" },
        // def
        { type: "integer" },
        // mat
        { type: "integer" },
        // mdf
        { type: "integer" },
        // agi
        { type: "integer" }
        // luk
      ],
      minItems: 8,
      maxItems: 8
    },
    actions: {
      type: "array",
      items: {
        type: "object",
        required: [
          "conditionParam1",
          "conditionParam2",
          "conditionType",
          "skillId",
          "rating"
        ],
        properties: {
          conditionParam1: { type: "integer" },
          conditionParam2: { type: "integer" },
          conditionType: { type: "integer" },
          skillId: { type: "integer" },
          rating: { type: "integer" }
        }
      }
    },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" }
        },
        required: ["code", "dataId", "value"]
      }
    },
    dropItems: {
      type: "array",
      items: {
        type: "object",
        properties: {
          kind: { type: "integer" },
          dataId: { type: "integer" },
          denominator: { type: "integer", minimum: 0 },
          rate: { type: "number" }
        },
        required: ["kind", "dataId", "denominator"]
      }
    }
  }
};
const makeItemData = (item2 = {}) => ({
  animationId: item2.animationId ?? 0,
  id: item2.id ?? 0,
  name: item2.name ?? "",
  iconIndex: item2.iconIndex ?? 0,
  description: item2.description ?? "",
  itypeId: item2.itypeId ?? 0,
  note: item2.note ?? "",
  consumable: item2.consumable ?? false,
  scope: item2.scope ?? 0,
  occasion: item2.occasion ?? 0,
  speed: item2.speed ?? 0,
  successRate: item2.successRate ?? 0,
  repeats: item2.repeats ?? 0,
  tpGain: item2.tpGain ?? 0,
  hitType: item2.hitType ?? 0,
  damage: makeDamage(item2.damage ?? {}),
  effects: [],
  price: 0
});
const makeSkillData = (skill2 = {}) => ({
  stypeId: skill2.stypeId ?? 0,
  requiredWtypeId1: skill2.requiredWtypeId1 ?? 0,
  requiredWtypeId2: skill2.requiredWtypeId2 ?? 0,
  animationId: skill2.animationId ?? 0,
  damage: makeDamage(skill2.damage ?? {}),
  description: skill2.description ?? "",
  effects: [],
  hitType: skill2.hitType ?? 0,
  iconIndex: skill2.iconIndex ?? 0,
  id: skill2.id ?? 0,
  message1: skill2.message1 ?? "",
  message2: skill2.message2 ?? "",
  messageType: skill2.messageType ?? 0,
  name: skill2.name ?? "",
  note: skill2.note ?? "",
  mpCost: skill2.mpCost ?? 0,
  occasion: skill2.occasion ?? 0,
  repeats: skill2.repeats ?? 0,
  scope: skill2.scope ?? 0,
  speed: skill2.speed ?? 0,
  successRate: skill2.successRate ?? 0,
  tpCost: skill2.tpCost ?? 0,
  tpGain: skill2.tpGain ?? 0
});
const SCHEMA_DATA_SKILL = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "message1",
    "message2",
    "messageType",
    "mpCost",
    "requiredWtypeId1",
    "requiredWtypeId2",
    "stypeId",
    "tpCost",
    "animationId",
    "hitType",
    "occasion",
    "repeats",
    "scope",
    "speed",
    "successRate",
    "tpGain",
    "note",
    "effects"
  ],
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
    successRate: { type: "integer" },
    tpGain: { type: "integer" },
    note: { type: "string" },
    effects: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value1: { type: "integer" },
          value2: { type: "integer" }
        },
        required: ["code", "dataId", "value1", "value2"],
        additionalProperties: false
      }
    },
    damage: {
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
    }
  },
  additionalProperties: false
};
const SCHEMA_DATA_ITEM = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "note",
    "animationId",
    "hitType",
    "occasion",
    "repeats",
    "scope",
    "speed",
    "successRate",
    "tpGain",
    "consumable",
    "price",
    "effects"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    note: { type: "string" },
    animationId: { type: "integer", minimum: 0 },
    hitType: { type: "integer" },
    occasion: { type: "integer" },
    repeats: { type: "integer" },
    scope: { type: "integer" },
    speed: { type: "integer" },
    successRate: { type: "integer" },
    tpGain: { type: "integer" },
    consumable: { type: "boolean" },
    price: { type: "integer", minimum: 0 },
    itypeId: { type: "integer" },
    effects: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value1: { type: "integer" },
          value2: { type: "integer" }
        },
        required: ["code", "dataId", "value1", "value2"],
        additionalProperties: false
      }
    },
    damage: {
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
    }
  }
};
const HITTYPE_CERTAIN = 0;
const HITTYPE_PHYSICAL = 1;
const HITTYPE_MAGICAL = 2;
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
const EFFECT_RECOVER_HP = 11;
const EFFECT_RECOVER_MP = 12;
const EFFECT_GAIN_TP = 13;
const EFFECT_ADD_STATE = 21;
const EFFECT_REMOVE_STATE = 22;
const EFFECT_ADD_BUFF = 31;
const EFFECT_ADD_DEBUFF = 32;
const EFFECT_REMOVE_BUFF = 33;
const EFFECT_REMOVE_DEBUFF = 34;
const EFFECT_SPECIAL = 41;
const EFFECT_GROW = 42;
const EFFECT_LEARN_SKILL = 43;
const EFFECT_COMMON_EVENT = 44;
const SPECIAL_EFFECT_ESCAPE = 0;
const PLACEHOLDER_VALUE1 = "{value1}";
const PLACEHOLDER_VALUE2 = "{value2}";
const PLACEHOLDER_NAME = "{name}";
class ItemEffectDescriptor {
  constructor(codeId, label, format, description, dataSource) {
    this.codeId = codeId;
    this.label = label;
    this.format = format;
    this.description = description;
    this.dataSource = dataSource;
  }
  formatText(effect, resolveName) {
    const text = this.format.replaceAll(PLACEHOLDER_VALUE1, effect.value1.toString()).replaceAll(PLACEHOLDER_VALUE2, effect.value2.toString());
    if (!this.dataSource) {
      return text;
    }
    return text.replaceAll(
      PLACEHOLDER_NAME,
      resolveName(this.dataSource, effect.dataId)
    );
  }
  requiresValue1() {
    return this.format.includes(PLACEHOLDER_VALUE1);
  }
  requiresValue2() {
    return this.format.includes(PLACEHOLDER_VALUE2);
  }
  requiresName() {
    return this.format.includes(PLACEHOLDER_NAME);
  }
  invalidPlaceHolder() {
    const allowed = ["value1", "value2", "name"];
    const matches = [
      ...this.format.matchAll(/\{([^}]+)\}/g)
    ];
    return matches.map((m) => m[1]).filter((key) => !allowed.includes(key));
  }
  isFormatValidForDataSource() {
    if (this.dataSource && !this.requiresName()) {
      return false;
    }
    return true;
  }
}
const formatItemEffectText = (effectDefine, effect, name) => {
  return effectDefine.format.replaceAll(`{value1}`, effect.value1.toString()).replaceAll(`{value2}`, effect.value2.toString()).replaceAll("{name}", name);
};
const resolveItemEffectLabels = (label) => {
  return [
    defineEffectRecoverHp(label.options.recoverHp),
    defineEffectRecoverMp(label.options.recoverMp),
    defineEffectGainTp(label.options.gainTp),
    defineEffectAddState(label.options.addState),
    defineEffectRemoveState(label.options.removeState),
    defineEffectAddBuff(label.options.addBuff),
    defineEffectAddDebuff(label.options.addDebuff),
    defineEffectRemoveBuff(label.options.removeBuff),
    defineEffectRemoveDebuff(label.options.removeDebuff),
    defineEffectLearnSkill(label.options.learnSkill),
    defineEffectCommonEvent(label.options.commonEvent)
  ];
};
const regularParam = () => ({
  author: AUTHOR_RMMZ,
  module: MODULE_TRAIT,
  kind: SRC_PARAMS_REGULAR
});
const srcData = (sourceKey) => ({
  author: AUTHOR_RMMZ,
  module: MODULE_DATA,
  kind: sourceKey
});
const defineEffect = (code, baseLabel, override, dataSource) => {
  const label = override.domainName ?? baseLabel.domainName;
  const format = override.format ?? baseLabel.format;
  const description = override.desc ?? baseLabel.desc;
  return new ItemEffectDescriptor(code, label, format, description, dataSource);
};
const defineEffectRecoverHp = (labels) => defineEffect(
  EFFECT_RECOVER_HP,
  LABEL_SET_ITEM_EFFECT.options.recoverHp,
  labels
);
const defineEffectRecoverMp = (labels) => defineEffect(
  EFFECT_RECOVER_MP,
  LABEL_SET_ITEM_EFFECT.options.recoverMp,
  labels
);
const defineEffectGainTp = (labels) => defineEffect(EFFECT_GAIN_TP, LABEL_SET_ITEM_EFFECT.options.gainTp, labels);
const defineEffectGrow = (labels) => defineEffect(EFFECT_GROW, LABEL_SET_ITEM_EFFECT.options.grow, labels);
const defineEffectAddState = (labels) => defineEffect(
  EFFECT_ADD_STATE,
  LABEL_SET_ITEM_EFFECT.options.addState,
  labels,
  srcData(SRC_DATA_STATE)
);
const defineEffectRemoveState = (labels) => defineEffect(
  EFFECT_REMOVE_STATE,
  LABEL_SET_ITEM_EFFECT.options.removeState,
  labels,
  srcData(SRC_DATA_STATE)
);
const defineEffectAddBuff = (labels) => defineEffect(
  EFFECT_ADD_BUFF,
  LABEL_SET_ITEM_EFFECT.options.addBuff,
  labels,
  regularParam()
);
const defineEffectRemoveBuff = (labels) => defineEffect(
  EFFECT_REMOVE_BUFF,
  LABEL_SET_ITEM_EFFECT.options.removeBuff,
  labels,
  regularParam()
);
const defineEffectLearnSkill = (labels) => defineEffect(
  EFFECT_LEARN_SKILL,
  LABEL_SET_ITEM_EFFECT.options.learnSkill,
  labels,
  srcData(SRC_DATA_SKILL)
);
const defineEffectAddDebuff = (labels) => defineEffect(
  EFFECT_ADD_DEBUFF,
  LABEL_SET_ITEM_EFFECT.options.addBuff,
  labels,
  regularParam()
);
const defineEffectRemoveDebuff = (labels) => defineEffect(
  EFFECT_REMOVE_DEBUFF,
  LABEL_SET_ITEM_EFFECT.options.removeDebuff,
  labels,
  regularParam()
);
const defineEffectCommonEvent = (labels) => defineEffect(
  EFFECT_COMMON_EVENT,
  LABEL_SET_ITEM_EFFECT.options.commonEvent,
  labels,
  srcData(SRC_DATA_COMMON_EVNET)
);
const DEFAULT_ITEM_LABELS = {
  domainName: "アイテム",
  options: {
    consumable: "消耗品"
  }
};
const DEFAULT_SKILL_LABELS = {
  domainName: "スキル",
  options: {
    requiredWeaponTypeId1: "必要武器タイプ1",
    requiredWeaponTypeId2: "必要武器タイプ2",
    mpCost: "MP消費",
    tpCost: "TP消費"
  }
};
const DEFAULT_USABLE_ITEM_LABELS = {
  domainName: "",
  options: {
    scope: "範囲",
    speed: "速度補正",
    successRate: "成功率"
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
const DEFAULT_DAMAGE_LABELS = {
  domainName: "ダメージ",
  options: {}
};
const makeDamage = (damage = {}) => ({
  type: damage.type ?? 0,
  elementId: damage.elementId ?? 0,
  formula: damage.formula ?? "",
  variance: damage.variance ?? 0,
  critical: damage.critical ?? false
});
const SCHEMA_DAMAGE = {
  type: "object",
  required: ["type", "elementId", "formula", "variance", "critical"],
  properties: {
    type: { type: "integer", minimum: 0 },
    elementId: { type: "integer", minimum: 0 },
    formula: { type: "string" },
    variance: { type: "integer" },
    critical: { type: "boolean" }
  }
};
const ajv$2 = new Ajv();
const item = ajv$2.compile(SCHEMA_DATA_ITEM);
const skill = ajv$2.compile(SCHEMA_DATA_SKILL);
const actor = ajv$2.compile(SCHEMA_DATA_ACTOR);
const armor = ajv$2.compile(SCHEMA_DATA_ARMMOR);
const weapon = ajv$2.compile(SCHEMA_DATA_WEAPON);
const enemy = ajv$2.compile(SCHEMA_DATA_ENEMY);
const state = ajv$2.compile(SCHEMA_DATA_STATE);
const class_ = ajv$2.compile(SCHEMA_DATA_CLASS);
const isDataItem = (data) => {
  return item(data);
};
const isDataSkill = (data) => {
  return skill(data);
};
const isDataActor = (data) => {
  return actor(data);
};
const isDataArmor = (data) => {
  return armor(data);
};
const isDataWeapon = (data) => {
  return weapon(data);
};
const isDataEnemy = (data) => {
  return enemy(data);
};
const isDataState = (data) => {
  return state(data);
};
const isDataClass = (data) => {
  return class_(data);
};
const NO_OPERATION = 0;
const SHOW_MESSAGE = 101;
const SHOW_MESSAGE_BODY = 401;
const SHOW_CHOICES = 102;
const SHOW_CHOICES_ITEM = 402;
const INPUT_NUMBER = 103;
const SELECT_ITEM = 104;
const SHOW_SCROLLING_TEXT = 105;
const SHOW_SCROLLING_TEXT_BODY = 405;
const COMMENT_HEAD = 108;
const COMMENT_BODY = 408;
const SKIP = 109;
const CONDITIONAL_BRANCH = 111;
const CONDITIONAL_BRANCH_ELSE = 411;
const LOOP = 112;
const LOOP_BREAK = 113;
const EXIT_EVENT_PROCESSING = 115;
const COMMON_EVENT = 117;
const LABEL = 118;
const LABEL_JUMP = 119;
const CONTROL_SWITCHES = 121;
const CONTROL_VARIABLES = 122;
const CONTROL_SELF_SWITCH = 123;
const CONTROL_TIMER = 124;
const CHANGE_GOLD = 125;
const CHANGE_ITEMS = 126;
const CHANGE_WEAPONS = 127;
const CHANGE_ARMORS = 128;
const CHANGE_PARTY_MEMBER = 129;
const CHANGE_BATTLE_BGM = 132;
const CHANGE_VICTORY_ME = 133;
const CHANGE_SAVE_ACCESS = 134;
const CHANGE_MENU_ACCESS = 135;
const CHANGE_ENCOUNTER = 136;
const CHANGE_FORMATION_ACCESS = 137;
const CHANGE_WINDOW_COLOR = 138;
const CHANGE_DEFEAT_ME = 139;
const CHANGE_VEHICLE_BGM = 140;
const TRANSFER_PLAYER = 201;
const SET_VEHICLE_LOCATION = 202;
const SET_EVENT_LOCATION = 203;
const SCROLL_MAP = 204;
const SET_MOVEMENT_ROUTE = 205;
const GET_ONOFF_VEHICLE = 206;
const CHANGE_TRANSPARENCY = 211;
const SHOW_ANIMATION = 212;
const SHOW_BALLOON_ICON = 213;
const ERASE_EVENT = 214;
const CHANGE_PLAYER_FOLLOWERS = 216;
const GATHER_FOLLOWERS = 217;
const FADEOUT_SCREEN = 221;
const FADEIN_SCREEN = 222;
const TINT_SCREEN = 223;
const FLASH_SCREEN = 224;
const SHAKE_SCREEN = 225;
const WAIT = 230;
const SHOW_PICTURE = 231;
const MOVE_PICTURE = 232;
const ROTATE_PICTURE = 233;
const TINT_PICTURE = 234;
const ERASE_PICTURE = 235;
const SET_WEATHER_EFFECT = 236;
const PLAY_BGM = 241;
const FADEOUT_BGM = 242;
const SAVE_BGM = 243;
const RESUME_BGM = 244;
const PLAY_BGS = 245;
const FADEOUT_BGS = 246;
const PLAY_ME = 249;
const PLAY_SE = 250;
const STOP_SE = 251;
const PLAY_MOVIE = 261;
const CHANGE_TILESET = 282;
const CHANGE_BATTLE_BACKGROUND = 283;
const CHANGE_PARALLAX = 284;
const GET_LOCATION_INFO = 285;
const BATTLE_PROCESSING = 301;
const SHOP_PROCESSING = 302;
const SHOP_PROCESSING_BODY = 605;
const NAME_INPUT_PROCESSING = 303;
const CHANGE_HP = 311;
const CHANGE_MP = 312;
const CHANGE_TP = 313;
const RECOVER_ALL = 314;
const CHANGE_EXP = 315;
const CHANGE_NAME = 320;
const CHANGE_CLASS = 321;
const CHANGE_ACTOR_IMAGES = 322;
const CHANGE_VEHICLE_IMAGE = 323;
const CHANGE_NICKNAME = 324;
const CHANGE_PROFILE = 325;
const CHANGE_ENEMY_HP = 331;
const CHANGE_ENEMY_MP = 332;
const CHANGE_ENEMY_STATE = 333;
const ENEMY_RECOVER_ALL = 334;
const ENEMY_APPEAR = 335;
const ENEMY_TRANSFORM = 336;
const SHOW_BATTLE_ANIMATION = 337;
const FORCE_ACTION = 339;
const ABORT_BATTLE = 340;
const OPEN_MENU_SCREEN = 351;
const CHANGE_ENEMY_TP = 342;
const OPEN_SAVE_SCREEN = 352;
const GAME_OVER = 353;
const RETURN_TO_TITLE_SCREEN = 354;
const SCRIPT_EVAL = 355;
const SCRIPT_EVAL_BODY = 655;
const PLUGIN_COMMAND_MV = 356;
const PLUGIN_COMMAND_MZ = 357;
const ROUTE_END = 0;
const ROUTE_MOVE_DOWN = 1;
const ROUTE_MOVE_LEFT = 2;
const ROUTE_MOVE_RIGHT = 3;
const ROUTE_MOVE_UP = 4;
const ROUTE_MOVE_LOWER_L = 5;
const ROUTE_MOVE_LOWER_R = 6;
const ROUTE_MOVE_UPPER_L = 7;
const ROUTE_MOVE_UPPER_R = 8;
const ROUTE_MOVE_RANDOM = 9;
const ROUTE_MOVE_TOWARD = 10;
const ROUTE_MOVE_AWAY = 11;
const ROUTE_MOVE_FORWARD = 12;
const ROUTE_MOVE_BACKWARD = 13;
const ROUTE_JUMP = 14;
const ROUTE_WAIT = 15;
const ROUTE_TURN_DOWN = 16;
const ROUTE_TURN_LEFT = 17;
const ROUTE_TURN_RIGHT = 18;
const ROUTE_TURN_UP = 19;
const ROUTE_TURN_90D_R = 20;
const ROUTE_TURN_90D_L = 21;
const ROUTE_TURN_180D = 22;
const ROUTE_TURN_90D_R_L = 23;
const ROUTE_TURN_RANDOM = 24;
const ROUTE_TURN_TOWARD = 25;
const ROUTE_TURN_AWAY = 26;
const ROUTE_SWITCH_ON = 27;
const ROUTE_SWITCH_OFF = 28;
const ROUTE_CHANGE_SPEED = 29;
const ROUTE_CHANGE_FREQ = 30;
const ROUTE_WALK_ANIME_ON = 31;
const ROUTE_WALK_ANIME_OFF = 32;
const ROUTE_STEP_ANIME_ON = 33;
const ROUTE_STEP_ANIME_OFF = 34;
const ROUTE_DIR_FIX_ON = 35;
const ROUTE_DIR_FIX_OFF = 36;
const ROUTE_THROUGH_ON = 37;
const ROUTE_THROUGH_OFF = 38;
const ROUTE_TRANSPARENT_ON = 39;
const ROUTE_TRANSPARENT_OFF = 40;
const ROUTE_CHANGE_IMAGE = 41;
const ROUTE_CHANGE_OPACITY = 42;
const ROUTE_CHANGE_BLEND_MODE = 43;
const ROUTE_PLAY_SE = 44;
const ROUTE_SCRIPT = 45;
const createEventCommand = (code, param, indent = 0) => {
  return {
    code,
    indent,
    parameters: param
  };
};
const makeEventPageCondition = (arg = {}) => {
  return {
    switch1Id: arg.switch1Id ?? 0,
    switch1Valid: arg.switch1Id !== void 0,
    switch2Id: arg.switch2Id ?? 0,
    switch2Valid: arg.switch2Id !== void 0,
    variableId: arg.variableId ?? 0,
    variableValid: arg.variableId !== void 0,
    variableValue: arg.variableValue ?? 0,
    selfSwitchCh: arg.selfSwitchCh ?? "A",
    selfSwitchValid: arg.selfSwitchCh !== void 0,
    itemId: arg.itemId ?? 0,
    itemValid: arg.itemId !== void 0,
    actorId: arg.actorId ?? 0,
    actorValid: arg.actorId !== void 0
  };
};
const makeMapEvent = () => {
  return {
    id: 1,
    name: "",
    pages: [],
    note: "",
    x: 0,
    y: 0
  };
};
const makeMapEventIamge = () => {
  return {
    characterIndex: 0,
    characterName: "",
    direction: 2,
    pattern: 0,
    tileId: 0
  };
};
const makeMapEventPage = () => {
  return {
    conditions: makeEventPageCondition(),
    list: [],
    directionFix: false,
    image: makeMapEventIamge(),
    moveFrequency: 5,
    moveRoute: {
      list: [],
      repeat: false,
      skippable: false,
      wait: false
    }
  };
};
const SCHEMA_DATA_MAP_INFO = {
  type: "object",
  required: [
    "name",
    "id",
    "expanded",
    "order",
    "parentId",
    "scrollX",
    "scrollY"
  ],
  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    expanded: { type: "boolean" },
    order: { type: "integer" },
    parentId: { type: "integer" },
    scrollX: { type: "integer" },
    scrollY: { type: "integer" }
  }
};
const makeMapName = (mapId) => {
  return mapId.toString().padStart(3, "0");
};
const makeMapInfoData = (info = { id: 0 }) => {
  return {
    name: info.name ?? makeMapName(info.id),
    id: info.id,
    expanded: info.expanded ?? false,
    order: info.order ?? 0,
    parentId: info.parentId ?? 0,
    scrollX: info.scrollX ?? 0,
    scrollY: info.scrollY ?? 0
  };
};
const makeMapData = (map = {}) => {
  return {
    data: map.data ?? [],
    battleback1Name: map.battleback1Name ?? "",
    battleback2Name: map.battleback2Name ?? "",
    autoplayBgm: map.autoplayBgm ?? false,
    autoplayBgs: map.autoplayBgs ?? false,
    parallaxLoopX: map.parallaxLoopX ?? false,
    parallaxLoopY: map.parallaxLoopY ?? false,
    parallaxName: map.parallaxName ?? "",
    parallaxShow: map.parallaxShow ?? false,
    parallaxSx: map.parallaxSx ?? 0,
    parallaxSy: map.parallaxSy ?? 0,
    x: map.x ?? 0,
    y: map.y ?? 0,
    width: map.width ?? 0,
    height: map.height ?? 0,
    note: map.note ?? "",
    bgm: map.bgm ?? { name: "", pan: 0, pitch: 100, volume: 100 },
    bgs: map.bgs ?? { name: "", pan: 0, pitch: 100, volume: 100 },
    disableDashing: map.disableDashing ?? false,
    displayName: map.displayName ?? "",
    encounterList: map.encounterList ?? [],
    events: map.events ?? []
  };
};
const makeCommonEventData = (data = {}) => ({
  id: data.id ?? 0,
  name: data.name ?? "",
  trigger: data.trigger ?? 0,
  list: data.list ?? [],
  switchId: data.switchId ?? 0
});
const makeTroopData = (data = {}) => ({
  id: data.id ?? 0,
  name: data.name ?? "",
  members: data.members ?? [],
  pages: data.pages ?? []
});
const makeTroopMember = (data = {}) => ({
  enemyId: data.enemyId ?? 0,
  x: data.x ?? 0,
  y: data.y ?? 0,
  hidden: data.hidden ?? false
});
const makeTroopEventConditions = (data = {}) => ({
  actorHp: data.actorHp ?? 0,
  actorId: data.actorId ?? 0,
  enemyValid: data.enemyValid ?? 0,
  switchValid: data.switchValid ?? 0
});
const SCHEMA_MOVEROUTE_DATA = {
  type: "object",
  required: ["wait", "repeat", "skippable", "list"],
  properties: {
    wait: { type: "boolean" },
    repeat: { type: "boolean" },
    skippable: { type: "boolean" },
    list: {
      type: "array",
      items: {
        type: "object",
        required: ["code", "parameters"],
        properties: {
          code: { type: "integer" },
          parameters: {
            type: "array",
            items: {
              oneOf: [
                { type: "string" },
                { type: "number" },
                {
                  type: "object",
                  required: ["name", "pan", "pitch", "volume"],
                  properties: {
                    name: { type: "string" },
                    pan: { type: "integer" },
                    pitch: { type: "integer" },
                    volume: { type: "integer" }
                  }
                }
              ]
            }
          }
        }
      }
    }
  }
};
const SCHEMA_MAP_EVENT_PAGE_CONDITION = {
  type: "object",
  required: [
    "switch1Id",
    "switch1Valid",
    "switch2Id",
    "switch2Valid",
    "variableId",
    "variableValid",
    "selfSwitchCh",
    "selfSwitchValid",
    "variableValue",
    "itemId",
    "itemValid",
    "actorId",
    "actorValid"
  ],
  properties: {
    switch1Id: { type: "integer", minimum: 0 },
    switch1Valid: { type: "boolean" },
    switch2Id: { type: "integer", minimum: 0 },
    switch2Valid: { type: "boolean" },
    variableId: { type: "integer", minimum: 0 },
    variableValid: { type: "boolean" },
    selfSwitchCh: { type: "string" },
    selfSwitchValid: { type: "boolean" },
    variableValue: { type: "integer" },
    itemId: { type: "integer", minimum: 0 },
    itemValid: { type: "boolean" },
    actorId: { type: "integer" },
    actorValid: { type: "boolean" }
  }
};
const SCHEMA_MAP_EVENT_IMAGE = {
  type: "object",
  required: [
    "characterIndex",
    "characterName",
    "direction",
    "pattern",
    "tileId"
  ],
  properties: {
    characterIndex: { type: "integer", minimum: 0 },
    characterName: { type: "string" },
    direction: { type: "integer", enum: [2, 4, 6, 8] },
    pattern: { type: "integer" },
    tileId: { type: "integer" }
  }
};
const SCHEMA_MAP_EVENT_PAGE = {
  type: "object",
  required: [
    "image",
    "moveRoute",
    "conditions",
    "directionFix",
    "moveFrequency"
  ],
  properties: {
    moveFrequency: { type: "integer" },
    directionFix: { type: "boolean" },
    conditions: SCHEMA_MAP_EVENT_PAGE_CONDITION,
    image: SCHEMA_MAP_EVENT_IMAGE,
    moveRoute: SCHEMA_MOVEROUTE_DATA
    // list: {
    //   type: "array",
    //   items: {
    //     type: "object",
    //     required: ["code", "indent", "parameters"],
    //     properties: {
    //       code: { type: "integer" },
    //       indent: { type: "integer" },
    //       parameters: {
    //         type: "array",
    //         items: {},
    //       },
    //     },
    //   },
    // },
  }
};
const SCHEMA_DATA_MAP = {
  type: "object",
  required: [
    "battleback1Name",
    "battleback2Name",
    "note",
    "width",
    "height",
    "x",
    "y",
    "parallaxSy",
    "parallaxSx",
    "parallaxLoopY",
    "parallaxLoopX",
    "disableDashing",
    "parallaxName",
    "parallaxShow",
    "displayName",
    "data",
    "autoplayBgm",
    "bgm",
    "autoplayBgs",
    "bgs"
  ],
  properties: {
    data: { type: "array", items: { type: "integer" } },
    battleback1Name: { type: "string" },
    battleback2Name: { type: "string" },
    parallaxLoopY: { type: "boolean" },
    parallaxLoopX: { type: "boolean" },
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
    bgm: {
      type: "object",
      required: ["name", "pan", "pitch", "volume"],
      properties: {
        name: { type: "string" },
        pan: { type: "integer" },
        pitch: { type: "integer" },
        volume: { type: "integer" }
      }
    },
    autoplayBgs: { type: "boolean" },
    bgs: {
      type: "object",
      required: ["name", "pan", "pitch", "volume"],
      properties: {
        name: { type: "string" },
        pan: { type: "integer" },
        pitch: { type: "integer" },
        volume: { type: "integer" }
      }
    },
    encounterList: {
      type: "array",
      items: {
        type: "object",
        required: ["regionSet", "troopId", "weight"],
        properties: {
          regionSet: { type: "array", items: { type: "integer" } },
          troopId: { type: "integer" },
          weight: { type: "integer" }
        }
      }
    },
    events: {
      type: "array",
      items: {
        type: "object",
        required: [
          "id",
          "name",
          "x",
          "y",
          "pages"
        ],
        properties: {
          id: { type: "integer" },
          name: { type: "string" },
          x: { type: "integer" },
          y: { type: "integer" },
          note: { type: "string" },
          pages: {
            type: "array",
            items: SCHEMA_MAP_EVENT_PAGE
          }
        }
      }
    }
  }
  // satisfies Record<keyof Data_Map, unknown>,
};
const ajv$1 = new Ajv();
const mapInfo = ajv$1.compile(SCHEMA_DATA_MAP_INFO);
const mapData = ajv$1.compile(SCHEMA_DATA_MAP);
const isDataMapInfo = (data) => {
  return mapInfo(data);
};
const isDataMap = (data) => {
  return mapData(data);
};
const createNoteEntity = (key, value) => {
  return `<${key}:${value}>`;
};
const makeRegex = () => /<([^<>:]+):([^>]*)>/g;
const readNoteObject = (data, fn) => readNoteEx(data.note, (key, value) => fn(key, value, data));
const readNote = (note) => {
  return readNoteEx(note, (key, value) => [key, value]);
};
const readNoteEx = (note, fn) => {
  const regex = makeRegex();
  return Array.from(note.matchAll(regex), (match) => fn(match[1], match[2]));
};
const replaceNote = (note, transformFunction) => {
  return note.replaceAll(
    makeRegex(),
    (_subString, key, value) => {
      const newText = transformFunction(key, value);
      return createNoteEntity(key, newText);
    }
  );
};
const getNoteValue = (note, targetKey) => {
  const regex = makeRegex();
  const match = Array.from(note.matchAll(regex)).find(
    (m) => m[1] === targetKey
  );
  return match ? match[2] : void 0;
};
const setNoteValue = (note, targetKey, newValue) => {
  const regex = makeRegex();
  return note.replace(regex, (match, key) => {
    if (key === targetKey) {
      return createNoteEntity(key, newValue);
    }
    return match;
  });
};
const createControlCharFormat = (char, id) => {
  return `\\${char}[${id}]`;
};
const fromStringArray = (char, array) => {
  return array.map((text, index) => ({
    text,
    controlChar: createControlCharFormat(char, index)
  }));
};
const getControlChars = (text) => {
  const regex = /\\([A-Za-z]+)\[(\d+)]/g;
  return Array.from(text.matchAll(regex)).map(
    (match) => ({
      char: match[1],
      id: parseInt(match[2], 10)
    })
  );
};
const CTRL_CHAR_ACTOR = "N";
const CTRL_CHAR_VARIABLE = "V";
const createActorControlChars = (actors) => {
  return actors.map((actor2) => ({
    text: actor2.name,
    controlChar: createControlCharFormat(CTRL_CHAR_ACTOR, actor2.id)
  }));
};
const createSystemVariableControlChars = (system) => {
  return system.variables.map((name, index) => ({
    text: name || "",
    controlChar: createControlCharFormat(CTRL_CHAR_VARIABLE, index)
  })).filter((pair) => pair.text !== "");
};
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
const getEnemyValue = (enemy2, param) => {
  switch (param[6]) {
    case 0:
      return enemy2.hp;
    case 1:
      return enemy2.mp;
    case 10:
      return enemy2.tp;
  }
  if (param[6] >= 2 && param[6] <= 9) {
    return enemy2.param(param[6] - 2);
  }
  return 0;
};
const getActorValue = (actor2, param) => {
  switch (param[6]) {
    case 0:
      return actor2.level;
    case 1:
      return actor2.currentExp();
    case 2:
      return actor2.hp;
    case 3:
      return actor2.mp;
    case 12:
      return actor2.tp;
  }
  if (param[6] >= 4 && param[6] <= 11) {
    return actor2.param(param[6] - 4);
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
export {
  ABORT_BATTLE,
  AUTHOR_RMMZ,
  BATTLE_PROCESSING,
  CHANGE_ACTOR_IMAGES,
  CHANGE_ARMORS,
  CHANGE_BATTLE_BACKGROUND,
  CHANGE_BATTLE_BGM,
  CHANGE_CLASS,
  CHANGE_DEFEAT_ME,
  CHANGE_ENCOUNTER,
  CHANGE_ENEMY_HP,
  CHANGE_ENEMY_MP,
  CHANGE_ENEMY_STATE,
  CHANGE_ENEMY_TP,
  CHANGE_EXP,
  CHANGE_FORMATION_ACCESS,
  CHANGE_GOLD,
  CHANGE_HP,
  CHANGE_ITEMS,
  CHANGE_MENU_ACCESS,
  CHANGE_MP,
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PARALLAX,
  CHANGE_PARTY_MEMBER,
  CHANGE_PLAYER_FOLLOWERS,
  CHANGE_PROFILE,
  CHANGE_SAVE_ACCESS,
  CHANGE_TILESET,
  CHANGE_TP,
  CHANGE_TRANSPARENCY,
  CHANGE_VEHICLE_BGM,
  CHANGE_VEHICLE_IMAGE,
  CHANGE_VICTORY_ME,
  CHANGE_WEAPONS,
  CHANGE_WINDOW_COLOR,
  COLLAPS_BOSS,
  COLLAPS_INSTANT,
  COLLAPS_NONE,
  COLLAPS_NORMAL,
  COMMENT_BODY,
  COMMENT_HEAD,
  COMMON_EVENT,
  CONDITIONAL_BRANCH,
  CONDITIONAL_BRANCH_ELSE,
  CONTROL_SELF_SWITCH,
  CONTROL_SWITCHES,
  CONTROL_TIMER,
  CONTROL_VARIABLES,
  DEFAULT_DAMAGE_LABELS,
  DEFAULT_GLOBAL_LABELS,
  DEFAULT_ITEM_LABELS,
  DEFAULT_SKILL_LABELS,
  DEFAULT_SYSTEM_LABELS_BOOLEAN,
  DEFAULT_SYSTEM_LABELS_DATA_TYPES,
  DEFAULT_USABLE_ITEM_LABELS,
  EFFECT_ADD_BUFF,
  EFFECT_ADD_DEBUFF,
  EFFECT_ADD_STATE,
  EFFECT_COMMON_EVENT,
  EFFECT_GAIN_TP,
  EFFECT_GROW,
  EFFECT_LEARN_SKILL,
  EFFECT_RECOVER_HP,
  EFFECT_RECOVER_MP,
  EFFECT_REMOVE_BUFF,
  EFFECT_REMOVE_DEBUFF,
  EFFECT_REMOVE_STATE,
  EFFECT_SPECIAL,
  ENEMY_APPEAR,
  ENEMY_RECOVER_ALL,
  ENEMY_TRANSFORM,
  ERASE_EVENT,
  ERASE_PICTURE,
  EXIT_EVENT_PROCESSING,
  EXTRA_PARAM_CEV,
  EXTRA_PARAM_CNT,
  EXTRA_PARAM_CRI,
  EXTRA_PARAM_EVA,
  EXTRA_PARAM_HIT,
  EXTRA_PARAM_HRG,
  EXTRA_PARAM_MEV,
  EXTRA_PARAM_MRF,
  EXTRA_PARAM_MRG,
  EXTRA_PARAM_TRG,
  FADEIN_SCREEN,
  FADEOUT_BGM,
  FADEOUT_BGS,
  FADEOUT_SCREEN,
  FILENAME_ACTORS,
  FILENAME_ANIMATIONS,
  FILENAME_ARMORS,
  FILENAME_CLASSES,
  FILENAME_COMMON_EVENTS,
  FILENAME_ENEMIES,
  FILENAME_ITEMS,
  FILENAME_MAP_INFOS,
  FILENAME_SKILLS,
  FILENAME_STATES,
  FILENAME_SYSTEM,
  FILENAME_TILESET,
  FILENAME_TROOPS,
  FILENAME_WEAPONS,
  FLAG_ID_AUTO_BATTLE,
  FLAG_ID_GUARD,
  FLAG_ID_PRESERVE_TP,
  FLAG_ID_SUBSTITUTE,
  FLASH_SCREEN,
  FOLDER_AUDIO,
  FOLDER_AUDIO_BGM,
  FOLDER_AUDIO_BGS,
  FOLDER_AUDIO_ME,
  FOLDER_AUDIO_SE,
  FOLDER_DATA,
  FOLDER_IMG,
  FOLDER_IMG_BATTLEBACK1,
  FOLDER_IMG_BATTLEBACK2,
  FOLDER_IMG_CHACTERS,
  FOLDER_IMG_ENEMIES,
  FOLDER_IMG_FACES,
  FOLDER_IMG_PARALLACES,
  FOLDER_IMG_PICTURES,
  FOLDER_IMG_SV_ACTORS,
  FOLDER_IMG_SV_ENEMIES,
  FOLDER_IMG_SYSTEM,
  FOLDER_IMG_TILESETS,
  FOLDER_IMG_TITLES1,
  FOLDER_IMG_TITLES2,
  FOLDER_JS,
  FORCE_ACTION,
  GAME_OVER,
  GATHER_FOLLOWERS,
  GET_LOCATION_INFO,
  GET_ONOFF_VEHICLE,
  HITTYPE_CERTAIN,
  HITTYPE_MAGICAL,
  HITTYPE_PHYSICAL,
  INPUT_NUMBER,
  LABEL,
  LABELS_DATA_WEAPON,
  LABEL_JUMP,
  LABEL_REGISTRY_JP,
  LABEL_SET_DATA,
  LABEL_SET_ITEM_EFFECT,
  LABEL_SET_TRAIT,
  LOOP,
  LOOP_BREAK,
  MODULE_DATA,
  MODULE_SYSTEM,
  MODULE_TRAIT,
  MOVE_PICTURE,
  NAME_INPUT_PROCESSING,
  NO_OPERATION,
  OPEN_MENU_SCREEN,
  OPEN_SAVE_SCREEN,
  OPERAND_CONSTANT,
  OPERAND_GAMEDATA,
  OPERAND_RANDOM,
  OPERAND_SCRIPT,
  OPERAND_VARIABLE,
  PARTY_ABILITY_CANCEL_SURPRISE,
  PARTY_ABILITY_DROP_ITEM_DOUBLE,
  PARTY_ABILITY_ENCOUNTER_HALF,
  PARTY_ABILITY_ENCOUNTER_NONE,
  PARTY_ABILITY_GOLD_DOUBLE,
  PARTY_ABILITY_RAISE_PREEMPTIVE,
  PLAY_BGM,
  PLAY_BGS,
  PLAY_ME,
  PLAY_MOVIE,
  PLAY_SE,
  PLUGIN_COMMAND_MV,
  PLUGIN_COMMAND_MZ,
  RECOVER_ALL,
  REGULAR_PARAM_AGI,
  REGULAR_PARAM_ATK,
  REGULAR_PARAM_DEF,
  REGULAR_PARAM_LUK,
  REGULAR_PARAM_MATK,
  REGULAR_PARAM_MAX_HP,
  REGULAR_PARAM_MAX_MP,
  REGULAR_PARAM_MDEF,
  RESUME_BGM,
  RETURN_TO_TITLE_SCREEN,
  ROTATE_PICTURE,
  ROUTE_CHANGE_BLEND_MODE,
  ROUTE_CHANGE_FREQ,
  ROUTE_CHANGE_IMAGE,
  ROUTE_CHANGE_OPACITY,
  ROUTE_CHANGE_SPEED,
  ROUTE_DIR_FIX_OFF,
  ROUTE_DIR_FIX_ON,
  ROUTE_END,
  ROUTE_JUMP,
  ROUTE_MOVE_AWAY,
  ROUTE_MOVE_BACKWARD,
  ROUTE_MOVE_DOWN,
  ROUTE_MOVE_FORWARD,
  ROUTE_MOVE_LEFT,
  ROUTE_MOVE_LOWER_L,
  ROUTE_MOVE_LOWER_R,
  ROUTE_MOVE_RANDOM,
  ROUTE_MOVE_RIGHT,
  ROUTE_MOVE_TOWARD,
  ROUTE_MOVE_UP,
  ROUTE_MOVE_UPPER_L,
  ROUTE_MOVE_UPPER_R,
  ROUTE_PLAY_SE,
  ROUTE_SCRIPT,
  ROUTE_STEP_ANIME_OFF,
  ROUTE_STEP_ANIME_ON,
  ROUTE_SWITCH_OFF,
  ROUTE_SWITCH_ON,
  ROUTE_THROUGH_OFF,
  ROUTE_THROUGH_ON,
  ROUTE_TRANSPARENT_OFF,
  ROUTE_TRANSPARENT_ON,
  ROUTE_TURN_180D,
  ROUTE_TURN_90D_L,
  ROUTE_TURN_90D_R,
  ROUTE_TURN_90D_R_L,
  ROUTE_TURN_AWAY,
  ROUTE_TURN_DOWN,
  ROUTE_TURN_LEFT,
  ROUTE_TURN_RANDOM,
  ROUTE_TURN_RIGHT,
  ROUTE_TURN_TOWARD,
  ROUTE_TURN_UP,
  ROUTE_WAIT,
  ROUTE_WALK_ANIME_OFF,
  ROUTE_WALK_ANIME_ON,
  SAVE_BGM,
  SCHEMA_DAMAGE,
  SCHEMA_DATA_ACTOR,
  SCHEMA_DATA_ARMMOR,
  SCHEMA_DATA_CLASS,
  SCHEMA_DATA_ENEMY,
  SCHEMA_DATA_ITEM,
  SCHEMA_DATA_MAP_INFO,
  SCHEMA_DATA_SKILL,
  SCHEMA_DATA_STATE,
  SCHEMA_DATA_WEAPON,
  SCHEMA_SYSTEM_ADVANCED,
  SCHEMA_TRAIT,
  SCRIPT_EVAL,
  SCRIPT_EVAL_BODY,
  SCROLL_MAP,
  SELECT_ITEM,
  SET_EVENT_LOCATION,
  SET_MOVEMENT_ROUTE,
  SET_VEHICLE_LOCATION,
  SET_WEATHER_EFFECT,
  SHAKE_SCREEN,
  SHOP_PROCESSING,
  SHOP_PROCESSING_BODY,
  SHOW_ANIMATION,
  SHOW_BALLOON_ICON,
  SHOW_BATTLE_ANIMATION,
  SHOW_CHOICES,
  SHOW_CHOICES_ITEM,
  SHOW_MESSAGE,
  SHOW_MESSAGE_BODY,
  SHOW_PICTURE,
  SHOW_SCROLLING_TEXT,
  SHOW_SCROLLING_TEXT_BODY,
  SKIP,
  SPECIAL_EFFECT_ESCAPE,
  SPECIAL_PARAM_EXR,
  SPECIAL_PARAM_FDR,
  SPECIAL_PARAM_GRD,
  SPECIAL_PARAM_MCR,
  SPECIAL_PARAM_MDR,
  SPECIAL_PARAM_PDR,
  SPECIAL_PARAM_PHA,
  SPECIAL_PARAM_REC,
  SPECIAL_PARAM_TCR,
  SPECIAL_PARAM_TGR,
  SRC_ARMOR_TYPES,
  SRC_COLOR,
  SRC_DATA_ACTOR,
  SRC_DATA_ARMOR,
  SRC_DATA_CLASS,
  SRC_DATA_COMMON_EVNET,
  SRC_DATA_ENEMY,
  SRC_DATA_ITEMS,
  SRC_DATA_MAP,
  SRC_DATA_SKILL,
  SRC_DATA_STATE,
  SRC_DATA_TROOP,
  SRC_DATA_VARIABLE,
  SRC_DATA_WEAPON,
  SRC_ELEMENTS,
  SRC_EQUIP_TYPES,
  SRC_PARAMS_EXTRA,
  SRC_PARAMS_REGULAR,
  SRC_PARAMS_SPECIAL,
  SRC_SKILL_TYPES,
  SRC_SWITCHES,
  SRC_TRAIT_COLLAPS,
  SRC_TRAIT_PARTY_ABILITY,
  SRC_TRAIT_SPECIAL_FLAG,
  SRC_WEAPON_TYPES,
  STOP_SE,
  TINT_PICTURE,
  TINT_SCREEN,
  TRAIT_ACTION_PLUS,
  TRAIT_ATTACK_ELEMENT,
  TRAIT_ATTACK_SKILL,
  TRAIT_ATTACK_SPEED,
  TRAIT_ATTACK_STATE,
  TRAIT_ATTACK_TIMES,
  TRAIT_COLLAPSE_TYPE,
  TRAIT_DEBUFF_RATE,
  TRAIT_ELEMENT_RATE,
  TRAIT_EQUIP_ARMOR_TYPE,
  TRAIT_EQUIP_LOCK,
  TRAIT_EQUIP_SEAL,
  TRAIT_EQUIP_WEAPON_TYPE,
  TRAIT_PARAM,
  TRAIT_PARTY_ABILITY,
  TRAIT_SKILL_ADD,
  TRAIT_SKILL_SEAL,
  TRAIT_SKILL_TYPE_ADD,
  TRAIT_SKILL_TYPE_SEAL,
  TRAIT_SLOT_TYPE,
  TRAIT_SPARAM,
  TRAIT_SPECIAL_FLAG,
  TRAIT_STATE_RATE,
  TRAIT_STATE_RESIST,
  TRAIT_XPARAM,
  TRANSFER_PLAYER,
  TYPENAME_TRAIT,
  TraitDescriptor,
  WAIT,
  buildCollapsSource,
  buildExtraParamSource,
  buildPartyAbilitySource,
  buildRegularParamSource,
  buildSpecialFlagSource,
  buildSpecialParamSource,
  cloneChoices,
  cloneEventCommand,
  cloneParameters,
  collapsOptionsToArray,
  collapsSourceId,
  convertCommentArrayToObject,
  createActorControlChars,
  createControlCharFormat,
  createEventCommand,
  createNoteEntity,
  createSystemVariableControlChars,
  defineEffectAddBuff,
  defineEffectAddDebuff,
  defineEffectAddState,
  defineEffectCommonEvent,
  defineEffectGainTp,
  defineEffectGrow,
  defineEffectLearnSkill,
  defineEffectRecoverHp,
  defineEffectRecoverMp,
  defineEffectRemoveBuff,
  defineEffectRemoveDebuff,
  defineEffectRemoveState,
  extraParamName,
  extraParamSourceId,
  extraParamsToArray,
  formatItemEffectText,
  formatTraitText,
  fromArrayCommonEvent,
  fromArrayControlSwitches,
  fromArrayInputNumber,
  fromArrayScrollingTextBody,
  fromArrayScrollingTextHeader,
  fromArraySetupChoice,
  fromArraySetupChoiceItem,
  fromArrayShowMessageHeader,
  fromStringArray,
  getActorValue,
  getArmorTypes,
  getControlChars,
  getElementTypes,
  getEnemyValue,
  getEquipTypes,
  getNoteValue,
  getParamNames,
  getSkillTypes,
  getVariableNames,
  getWeaponTypes,
  isCloneableCommand,
  isCommandAudio,
  isCommandChangeActorText,
  isCommandChangeBattleBgm,
  isCommandChangeDefeatMe,
  isCommandChangeVictoryMe,
  isCommandCommentBody,
  isCommandCommentHeader,
  isCommandCommonEvent,
  isCommandInputNumber,
  isCommandNonParam,
  isCommandPlayBgm,
  isCommandPlayBgs,
  isCommandPlayMe,
  isCommandPlaySe,
  isCommandScriptBody,
  isCommandScriptHeader,
  isCommandScrollTextHead,
  isCommandShowChoiceItem,
  isCommandShowChoices,
  isCommandShowMessage,
  isCommandShowMessageBody,
  isCommandShowScrollingTextBody,
  isCommandTextBody,
  isDataActor,
  isDataArmor,
  isDataClass,
  isDataEnemy,
  isDataItem,
  isDataMap,
  isDataMapInfo,
  isDataSkill,
  isDataState,
  isDataWeapon,
  isValid,
  joinSourceKey,
  makeActorData,
  makeActorSourceIdentifier,
  makeArmorData,
  makeArmorSourceIdentifier,
  makeAudioCommand,
  makeAudioFileParams,
  makeClassData,
  makeClassSourceIdentifier,
  makeCommandAudioAny,
  makeCommandChangeActorName,
  makeCommandChangeActorNickName,
  makeCommandChangeActorProfile,
  makeCommandChangeBattleBGM,
  makeCommandChangeDefeatME,
  makeCommandChangeVictoryME,
  makeCommandCommentBody,
  makeCommandCommentHeader,
  makeCommandCommonEvent,
  makeCommandControlSwitches,
  makeCommandInputNumber,
  makeCommandPlayBGM,
  makeCommandPlayBGS,
  makeCommandPlayME,
  makeCommandPlaySE,
  makeCommandScriptArray,
  makeCommandScriptBody,
  makeCommandScriptHeader,
  makeCommandScrollingTextBody,
  makeCommandScrollingTextHeader,
  makeCommandSetupChoice,
  makeCommandShowChoiceItem,
  makeCommandShowMessage,
  makeCommandShowMessageBody,
  makeCommentArray,
  makeCommentCommandArray,
  makeCommonEventData,
  makeDamage,
  makeDropItem,
  makeEditorSetting,
  makeEnemyAction,
  makeEnemyData,
  makeEnemySourceIdentifier,
  makeEventPageCondition,
  makeItemCategories,
  makeItemCategoriesFromArray,
  makeItemData,
  makeMapData,
  makeMapEvent,
  makeMapEventIamge,
  makeMapEventPage,
  makeMapInfoData,
  makeMenuCommandsEnabled,
  makeMenuCommandsEnabledFromArray,
  makeParamNamesArray,
  makeRegex,
  makeSkillData,
  makeSoundsArray,
  makeSoundsObject,
  makeStateData,
  makeStateSourceIdentifier,
  makeSystemAdvanced,
  makeSystemData,
  makeTermsBasic,
  makeTermsBasicFromArray,
  makeTermsCommandArray as makeTermsCommand,
  makeTermsCommandFromArray,
  makeTermsMessages,
  makeTroopData,
  makeTroopEventConditions,
  makeTroopMember,
  makeVehicleData,
  makeWeaponData,
  mergeDomainLabel,
  mergeNestedPrimitiveRecords,
  mergeWithDefaults,
  partyAbilitySourceId,
  partyAbilityToArray,
  readNote,
  readNoteEx,
  readNoteObject,
  regularParamName,
  regularParamSourceId,
  regularParamsToArray,
  replaceNote,
  resolveItemEffectLabels,
  resolveTraitLabels,
  sanitizeKey,
  setNoteValue,
  sparamSourceId,
  specialFlagSourceId,
  specialFlagToArray,
  specialParamName,
  specialParamsToArray,
  testUnknonwKey,
  toArrayCommonEvent,
  toArrayControlSwitches,
  toArrayInputNumber,
  toArrayOperandActorStatus,
  toArrayOperandConstant,
  toArrayOperandEnemyStatus,
  toArrayOperandItemData,
  toArrayOperandRandom,
  toArrayOperandScript,
  toArrayOperandVariable,
  toArrayScrollingTextBody,
  toArrayScrollingTextHeader,
  toArraySetupChoice,
  toArraySetupChoiceItem,
  toArrayShowMessageHeader,
  traitDomain
};
//# sourceMappingURL=rpgTypes.es.js.map
