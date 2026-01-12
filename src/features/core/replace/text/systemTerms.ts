import type {
  System_Terms,
  Terms_BasicArray,
  Terms_CommandArray,
  Terms_Messages,
} from "@RpgTypes/rmmz";
import { replaceTextByFunction, replaceTextByMap } from "./utils";

export const replaceSystemTermsByMap = (
  terms: System_Terms,
  map: ReadonlyMap<string, string>
): System_Terms => {
  return replaceSystemTerms(terms, (text: string): string =>
    replaceTextByMap(text, map)
  );
};

export const replaceSystemTerms = (
  terms: System_Terms,
  newTextFn: (text: string) => string | undefined
): System_Terms => ({
  params: replaceParams(terms.params, (s) =>
    replaceTextByFunction(s, newTextFn)
  ),
  messages: replaceSystemMessages(terms.messages, (s) =>
    replaceTextByFunction(s, newTextFn)
  ),
  basic: replaceBasicTerms(terms.basic, (s) =>
    replaceTextByFunction(s, newTextFn)
  ),
  commands: replaceCommandsArray(terms.commands, (s) =>
    replaceTextByFunction(s, newTextFn)
  ),
});

const replaceBasicTerms = (
  basic: Terms_BasicArray,
  newTextFn: (text: string) => string
): Terms_BasicArray => {
  return [
    newTextFn(basic[0]),
    newTextFn(basic[1]),
    newTextFn(basic[2]),
    newTextFn(basic[3]),
    newTextFn(basic[4]),
    newTextFn(basic[5]),
    newTextFn(basic[6]),
    newTextFn(basic[7]),
    newTextFn(basic[8]),
    newTextFn(basic[9]),
  ];
};

const replaceCommandsArray = (
  commands: Terms_CommandArray,
  newTextFn: (text: string) => string
): Terms_CommandArray => {
  return [
    newTextFn(commands[0]),
    newTextFn(commands[1]),
    newTextFn(commands[2]),
    newTextFn(commands[3]),
    newTextFn(commands[4]),
    newTextFn(commands[5]),
    newTextFn(commands[6]),
    newTextFn(commands[7]),
    newTextFn(commands[8]),
    newTextFn(commands[9]),
    newTextFn(commands[10]),
    newTextFn(commands[11]),
    newTextFn(commands[12]),
    newTextFn(commands[13]),
    newTextFn(commands[14]),
    newTextFn(commands[15]),
    newTextFn(commands[16]),
    newTextFn(commands[17]),
    newTextFn(commands[18]),
    newTextFn(commands[19]),
    "",
    newTextFn(commands[21]),
    newTextFn(commands[22]),
    "",
    newTextFn(commands[24]),
    newTextFn(commands[25]),
  ];
};

const replaceParams = (
  params: System_Terms["params"],
  newTextFn: (text: string) => string
): System_Terms["params"] => [
  newTextFn(params[0]),
  newTextFn(params[1]),
  newTextFn(params[2]),
  newTextFn(params[3]),
  newTextFn(params[4]),
  newTextFn(params[5]),
  newTextFn(params[6]),
  newTextFn(params[7]),
  newTextFn(params[8]),
  newTextFn(params[9]),
];

const replaceSystemMessages = (
  messages: Terms_Messages,
  newTextFn: (text: string) => string
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
