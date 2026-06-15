import type {
  SystemLabels_TermsParamNames,
  Terms_Basic,
  Terms_GameCommands,
  Terms_Messages,
} from "./core";
import {
  makeTermsBasicFromArray,
  makeTermsCommandFromArray,
  makeTermsMessages,
  makeParamNamesFromArray,
  makeItemCategoriesFromArray,
  makeMenuCommandsEnabledFromArray,
  makeSoundsObject,
} from "./core";
import type { SystemTexts } from "./core/types";
import { makeSystemData } from "./makeSystem";
import type { Data_System } from "./system";

export const replaceSystemTextDictionary = (
  text: SystemTexts,
  fn: (text: string) => string | undefined,
): SystemTexts => {
  const fn2 = (text: string): string => fn(text) ?? text;
  return {
    gameTitle: fn2(text.gameTitle),
    currencyUnit: fn2(text.currencyUnit),
    equipTypes: text.equipTypes.map(fn2),
    armorTypes: text.armorTypes.map(fn2),
    weaponTypes: text.weaponTypes.map(fn2),
    elements: text.elements.map(fn2),
    skillTypes: text.skillTypes.map(fn2),
    terms: {
      messages: replaceSystemMessages(text.terms.messages, fn2),
      basic: replaceBasicTerms(text.terms.basic, fn2),
      params: replaceParams(text.terms.params, fn2),
      commands: replaceCommands(text.terms.commands, fn2),
    },
  };
};

const replaceBasicTerms = (
  basic: Terms_Basic,
  newTextFn: (text: string) => string,
): Terms_Basic => {
  return {
    level: newTextFn(basic.level),
    levelA: newTextFn(basic.levelA),
    hp: newTextFn(basic.hp),
    hpA: newTextFn(basic.hpA),
    mp: newTextFn(basic.mp),
    mpA: newTextFn(basic.mpA),
    tp: newTextFn(basic.tp),
    tpA: newTextFn(basic.tpA),
    experience: newTextFn(basic.experience),
    exp: newTextFn(basic.exp),
  };
};

const replaceParams = (
  params: SystemLabels_TermsParamNames,
  fn: (text: string) => string,
): SystemLabels_TermsParamNames => {
  return {
    mhp: fn(params.mhp),
    mmp: fn(params.mmp),
    atk: fn(params.atk),
    def: fn(params.def),
    mat: fn(params.mat),
    mdf: fn(params.mdf),
    agi: fn(params.agi),
    luk: fn(params.luk),
    hit: fn(params.hit),
    eva: fn(params.eva),
  };
};

const replaceCommands = (
  command: Terms_GameCommands,
  fn: (text: string) => string,
): Terms_GameCommands => {
  return {
    item: fn(command.item),
    skill: fn(command.skill),
    equip: fn(command.equip),
    status: fn(command.status),
    formation: fn(command.formation),
    save: fn(command.save),
    gameEnd: fn(command.gameEnd),
    options: fn(command.options),
    weapon: fn(command.weapon),
    armor: fn(command.armor),
    keyItem: fn(command.keyItem),
    equip2: fn(command.equip2),
    optimize: fn(command.optimize),
    clear: fn(command.clear),
    newGame: fn(command.newGame),
    continueGame: fn(command.continueGame),
    toTitle: fn(command.toTitle),
    cancel: fn(command.cancel),
    buy: fn(command.buy),
    sell: fn(command.sell),
    attack: fn(command.attack),
    guard: fn(command.guard),
    escape: fn(command.escape),
    fight: fn(command.fight),
  };
};

export const extractTextFromSystem = (system: Data_System): SystemTexts => {
  return {
    gameTitle: system.gameTitle,
    currencyUnit: system.currencyUnit,
    equipTypes: [...system.equipTypes],
    armorTypes: [...system.armorTypes],
    weaponTypes: [...system.weaponTypes],
    elements: [...system.elements],
    skillTypes: [...system.skillTypes],
    terms: {
      basic: makeTermsBasicFromArray(system.terms.basic),
      commands: makeTermsCommandFromArray(system.terms.commands),
      messages: makeTermsMessages(system.terms.messages),
      params: makeParamNamesFromArray(system.terms.params),
    },
  };
};

export const replaceSystemTextData = (
  system: Data_System,
  texts: SystemTexts,
): Data_System => {
  return makeSystemData({
    locale: system.locale,
    versionId: system.versionId,
    options: system,
    advanced: system.advanced,
    vehicles: system,
    editing: system.editor,
    sounds: makeSoundsObject(system.sounds),
    images: {
      title1Name: system.title1Name,
      title2Name: system.title2Name,
    },
    bgm: {
      titleBgm: system.titleBgm,
      battleBgm: system.battleBgm,
    },
    me: {
      defeatMe: system.defeatMe,
      gameoverMe: system.gameoverMe,
      victoryMe: system.victoryMe,
    },
    texts: {
      gameTitle: texts.gameTitle,
      currencyUnit: texts.currencyUnit,
    },
    dataNames: {
      variables: system.variables,
      switches: system.switches,
      armorTypes: texts.armorTypes,
      elements: texts.elements,
      equipTypes: texts.equipTypes,
      weaponTypes: texts.weaponTypes,
      skillTypes: texts.skillTypes,
    },
    terms: {
      basic: texts.terms.basic,
      commands: texts.terms.commands,
      messages: texts.terms.messages,
      params: texts.terms.params,
    },
    itemCategories: makeItemCategoriesFromArray(system.itemCategories),
    menuCommands: makeMenuCommandsEnabledFromArray(system.menuCommands),
    titleCommandWindow: system.titleCommandWindow,
    size: {
      tileSize: system.tileSize,
      faceSize: system.faceSize,
      iconSize: system.iconSize,
    },
    gameInit: {
      startMapId: system.startMapId,
      startX: system.startX,
      startY: system.startY,
      partyMembers: system.partyMembers,
    },
    editorTemporary: {
      editMapId: system.editMapId,
      battlerName: system.battlerName,
    },
    attackMotion: system.attackMotions,
    battle: {
      battleSystem: system.battleSystem,
      magicSkills: system.magicSkills,
    },
    battleTest: {
      battleback1Name: system.battleback1Name,
      battleback2Name: system.battleback2Name,
      testBattlers: system.testBattlers,
      testTroopId: system.testTroopId,
    },
  });
};

export const replaceSystemMessages = (
  messages: Terms_Messages,
  newTextFn: (text: string) => string,
): Terms_Messages => {
  return {
    actionFailure: newTextFn(messages.actionFailure),
    actorDamage: newTextFn(messages.actorDamage),
    actorDrain: newTextFn(messages.actorDrain),
    actorGain: newTextFn(messages.actorGain),
    actorLoss: newTextFn(messages.actorLoss),
    actorNoDamage: newTextFn(messages.actorNoDamage),
    actorNoHit: newTextFn(messages.actorNoHit),
    actorRecovery: newTextFn(messages.actorRecovery),
    alwaysDash: newTextFn(messages.alwaysDash),
    autosave: newTextFn(messages.autosave),
    bgmVolume: newTextFn(messages.bgmVolume),
    bgsVolume: newTextFn(messages.bgsVolume),
    buffAdd: newTextFn(messages.buffAdd),
    buffRemove: newTextFn(messages.buffRemove),
    commandRemember: newTextFn(messages.commandRemember),
    counterAttack: newTextFn(messages.counterAttack),
    criticalToActor: newTextFn(messages.criticalToActor),
    criticalToEnemy: newTextFn(messages.criticalToEnemy),
    defeat: newTextFn(messages.defeat),
    debuffAdd: newTextFn(messages.debuffAdd),
    emerge: newTextFn(messages.emerge),
    enemyDamage: newTextFn(messages.enemyDamage),
    enemyDrain: newTextFn(messages.enemyDrain),
    enemyGain: newTextFn(messages.enemyGain),
    enemyLoss: newTextFn(messages.enemyLoss),
    enemyNoDamage: newTextFn(messages.enemyNoDamage),
    enemyNoHit: newTextFn(messages.enemyNoHit),
    enemyRecovery: newTextFn(messages.enemyRecovery),
    escapeFailure: newTextFn(messages.escapeFailure),
    escapeStart: newTextFn(messages.escapeStart),
    evasion: newTextFn(messages.evasion),
    expNext: newTextFn(messages.expNext),
    expTotal: newTextFn(messages.expTotal),
    file: newTextFn(messages.file),
    loadMessage: newTextFn(messages.loadMessage),
    levelUp: newTextFn(messages.levelUp),
    magicEvasion: newTextFn(messages.magicEvasion),
    magicReflection: newTextFn(messages.magicReflection),
    meVolume: newTextFn(messages.meVolume),
    obtainExp: newTextFn(messages.obtainExp),
    obtainGold: newTextFn(messages.obtainGold),
    obtainItem: newTextFn(messages.obtainItem),
    obtainSkill: newTextFn(messages.obtainSkill),
    partyName: newTextFn(messages.partyName),
    possession: newTextFn(messages.possession),
    preemptive: newTextFn(messages.preemptive),
    saveMessage: newTextFn(messages.saveMessage),
    seVolume: newTextFn(messages.seVolume),
    substitute: newTextFn(messages.substitute),
    surprise: newTextFn(messages.surprise),
    touchUI: newTextFn(messages.touchUI),
    useItem: newTextFn(messages.useItem),
    victory: newTextFn(messages.victory),
  };
};
