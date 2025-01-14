export interface System_Terms {
  messages: System_Message;
  commands: System_Command;
  params: System_ParamNamesArray;
  basic: BasicTerms;
}

export type BasicTerms = [
  level: string,
  levelA: string,
  hp: string,
  hpA: string,
  mp: string,
  mpA: string,
  tp: string,
  tpA: string,
  experience: string,
  exp: string
];

export type System_Command = [
  fight: string,
  escape: string,
  attack: string,
  guard: string,
  item: string,
  skill: string,
  equip: string,
  status: string,
  formation: string,
  save: string,
  gameEnd: string,
  options: string,
  weapon: string,
  armor: string,
  keyItem: string,
  equip2: string,
  optimize: string,
  clear: string,
  newGame: string,
  continue_: string,
  notUsed20: string,
  toTitle: string,
  cancel: string,
  notUsed23: string,
  buy: string,
  sell: string
];

export type System_ParamNamesArray = [
  mhp: string,
  mmp: string,
  atk: string,
  def: string,
  mat: string,
  mdf: string,
  agi: string,
  luk: string,
  hit: string,
  eva: string
];

export interface System_Message {
  alwaysDash: string;
  commandRemember: string;
  touchUI: string;
  bgmVolume: string;
  bgsVolume: string;
  meVolume: string;
  seVolume: string;
  possession: string;
  expTotal: string;
  expNext: string;
  saveMessage: string;
  loadMessage: string;
  file: string;
  autosave: string;
  partyName: string;
  emerge: string;
  preemptive: string;
  surprise: string;
  escapeStart: string;
  escapeFailure: string;
  victory: string;
  defeat: string;
  obtainExp: string;
  obtainGold: string;
  obtainItem: string;
  levelUp: string;
  obtainSkill: string;
  useItem: string;
  criticalToEnemy: string;
  criticalToActor: string;
  actorDamage: string;
  actorRecovery: string;
  actorGain: string;
  actorLoss: string;
  actorDrain: string;
  actorNoDamage: string;
  actorNoHit: string;
  enemyDamage: string;
  enemyRecovery: string;
  enemyGain: string;
  enemyLoss: string;
  enemyDrain: string;
  enemyNoDamage: string;
  enemyNoHit: string;
  evasion: string;
  magicEvasion: string;
  magicReflection: string;
  counterAttack: string;
  substitute: string;
  buffAdd: string;
  debuffAdd: string;
  buffRemove: string;
  actionFailure: string;
}
