export type OPERAND = {
  CONSTANT: 0;
  VARIABLE: 1;
  RANDOM: 2;
  GAMEDATA: 3;
  SCRIPT: 4;
};

export type GAMEDATA = {
  ITEM: 0;
  WEAPON: 1;
  ARMOR: 2;
  ACTOR: 3;
  ENEMY: 4;
  CHARACTER: 5;
  PARTY: 6;
  OTHER: 7;
  LAST: 8;
};

export type STATUS = {
  LEVEL: 0;
  EXP: 1;
  HP: 2;
  MP: 3;
  MAX_HP: 4;
  MAX_MP: 5;
  ATK: 6;
  DEF: 7;
  MAT: 8;
  MDF: 9;
  AGI: 10;
  LUK: 11;
  TP: 12;
};

export type LAST = {
  USED_SKILL_ID: 0;
  USED_ITEM_ID: 1;
  ACTION_ACTOR_ID: 2;
  ACTION_ENEMY_INDEX: 3;
  TARGET_ACTOR_ID: 4;
  TARGET_ENEMY_INDEX: 5;
};

export type OTHER = {
  MAP_ID: 0;
  PARTY_MEMBERS: 1;
  GOLD: 2;
  STEPS: 3;
  PLAY_TIME: 4;
  TIMER: 5;
  SAVE_COUNT: 6;
  BATTLE_COUNT: 7;
  WIN_COUNT: 8;
  ESCAPE_COUNT: 9;
};
