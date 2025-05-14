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
