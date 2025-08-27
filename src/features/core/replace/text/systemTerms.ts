import type {
  System_Terms,
  Terms_BasicArray,
  Terms_CommandArray,
  Terms_Messages,
} from "@RpgTypes/rmmz";
import { replaceTextByMap } from "./utils";

export const replaceSystemTerms = (
  terms: System_Terms,
  map: ReadonlyMap<string, string>
): System_Terms => {
  return {
    params: replaceParams(terms.params, map),
    messages: replaceSystemMessages(terms.messages, map),
    commands: replaceCommandsArray(terms.commands, map),
    basic: replaceBasicTerms(terms.basic, map),
  };
};

const replaceBasicTerms = (
  basic: Terms_BasicArray,
  map: ReadonlyMap<string, string>
): Terms_BasicArray => {
  return [
    replaceTextByMap(basic[0], map),
    replaceTextByMap(basic[1], map),
    replaceTextByMap(basic[2], map),
    replaceTextByMap(basic[3], map),
    replaceTextByMap(basic[4], map),
    replaceTextByMap(basic[5], map),
    replaceTextByMap(basic[6], map),
    replaceTextByMap(basic[7], map),
    replaceTextByMap(basic[8], map),
    replaceTextByMap(basic[9], map),
  ];
};

const replaceCommandsArray = (
  commands: Terms_CommandArray,
  map: ReadonlyMap<string, string>
): Terms_CommandArray => {
  return [
    replaceTextByMap(commands[0], map),
    replaceTextByMap(commands[1], map),
    replaceTextByMap(commands[2], map),
    replaceTextByMap(commands[3], map),
    replaceTextByMap(commands[4], map),
    replaceTextByMap(commands[5], map),
    replaceTextByMap(commands[6], map),
    replaceTextByMap(commands[7], map),
    replaceTextByMap(commands[8], map),
    replaceTextByMap(commands[9], map),
    replaceTextByMap(commands[10], map),
    replaceTextByMap(commands[11], map),
    replaceTextByMap(commands[12], map),
    replaceTextByMap(commands[13], map),
    replaceTextByMap(commands[14], map),
    replaceTextByMap(commands[15], map),
    replaceTextByMap(commands[16], map),
    replaceTextByMap(commands[17], map),
    replaceTextByMap(commands[18], map),
    replaceTextByMap(commands[19], map),
    "",
    replaceTextByMap(commands[21], map),
    replaceTextByMap(commands[22], map),
    "",
    replaceTextByMap(commands[24], map),
    replaceTextByMap(commands[25], map),
  ];
};

const replaceParams = (
  params: System_Terms["params"],
  map: ReadonlyMap<string, string>
): System_Terms["params"] => [
  replaceTextByMap(params[0], map),
  replaceTextByMap(params[1], map),
  replaceTextByMap(params[2], map),
  replaceTextByMap(params[3], map),
  replaceTextByMap(params[4], map),
  replaceTextByMap(params[5], map),
  replaceTextByMap(params[6], map),
  replaceTextByMap(params[7], map),
  replaceTextByMap(params[8], map),
  replaceTextByMap(params[9], map),
];

const replaceSystemMessages = (
  messages: Terms_Messages,
  map: ReadonlyMap<string, string>
): Terms_Messages => {
  return {
    actionFailure: replaceTextByMap(messages.actionFailure, map),
    actorDamage: replaceTextByMap(messages.actorDamage, map),
    actorDrain: replaceTextByMap(messages.actorDrain, map),
    actorGain: replaceTextByMap(messages.actorGain, map),
    actorLoss: replaceTextByMap(messages.actorLoss, map),
    actorNoDamage: replaceTextByMap(messages.actorNoDamage, map),
    actorNoHit: replaceTextByMap(messages.actorNoHit, map),
    actorRecovery: replaceTextByMap(messages.actorRecovery, map),
    alwaysDash: replaceTextByMap(messages.alwaysDash, map),
    autosave: replaceTextByMap(messages.autosave, map),
    bgmVolume: replaceTextByMap(messages.bgmVolume, map),
    bgsVolume: replaceTextByMap(messages.bgsVolume, map),
    buffAdd: replaceTextByMap(messages.buffAdd, map),
    buffRemove: replaceTextByMap(messages.buffRemove, map),
    commandRemember: replaceTextByMap(messages.commandRemember, map),
    counterAttack: replaceTextByMap(messages.counterAttack, map),
    criticalToActor: replaceTextByMap(messages.criticalToActor, map),
    criticalToEnemy: replaceTextByMap(messages.criticalToEnemy, map),
    defeat: replaceTextByMap(messages.defeat, map),
    debuffAdd: replaceTextByMap(messages.debuffAdd, map),
    emerge: replaceTextByMap(messages.emerge, map),
    enemyDamage: replaceTextByMap(messages.enemyDamage, map),
    enemyDrain: replaceTextByMap(messages.enemyDrain, map),
    enemyGain: replaceTextByMap(messages.enemyGain, map),
    enemyLoss: replaceTextByMap(messages.enemyLoss, map),
    enemyNoDamage: replaceTextByMap(messages.enemyNoDamage, map),
    enemyNoHit: replaceTextByMap(messages.enemyNoHit, map),
    enemyRecovery: replaceTextByMap(messages.enemyRecovery, map),
    escapeFailure: replaceTextByMap(messages.escapeFailure, map),
    escapeStart: replaceTextByMap(messages.escapeStart, map),
    evasion: replaceTextByMap(messages.evasion, map),
    expNext: replaceTextByMap(messages.expNext, map),
    expTotal: replaceTextByMap(messages.expTotal, map),
    file: replaceTextByMap(messages.file, map),
    loadMessage: replaceTextByMap(messages.loadMessage, map),
    levelUp: replaceTextByMap(messages.levelUp, map),
    magicEvasion: replaceTextByMap(messages.magicEvasion, map),
    magicReflection: replaceTextByMap(messages.magicReflection, map),
    meVolume: replaceTextByMap(messages.meVolume, map),
    obtainExp: replaceTextByMap(messages.obtainExp, map),
    obtainGold: replaceTextByMap(messages.obtainGold, map),
    obtainItem: replaceTextByMap(messages.obtainItem, map),
    obtainSkill: replaceTextByMap(messages.obtainSkill, map),
    partyName: replaceTextByMap(messages.partyName, map),
    possession: replaceTextByMap(messages.possession, map),
    preemptive: replaceTextByMap(messages.preemptive, map),
    saveMessage: replaceTextByMap(messages.saveMessage, map),
    seVolume: replaceTextByMap(messages.seVolume, map),
    substitute: replaceTextByMap(messages.substitute, map),
    surprise: replaceTextByMap(messages.surprise, map),
    touchUI: replaceTextByMap(messages.touchUI, map),
    useItem: replaceTextByMap(messages.useItem, map),
    victory: replaceTextByMap(messages.victory, map),
  };
};
