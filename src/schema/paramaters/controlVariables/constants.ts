export const OPERAND = {
  CONSTANT: 0 as const,
  VARIABLE: 1 as const,
  RANDOM: 2 as const,
  GAMEDATA: 3 as const,
  SCRIPT: 4 as const,
};

export const GAMEDATA = {
  ITEM: 0 as const,
  WEAPON: 1 as const,
  ARMOR: 2 as const,
  ACTOR: 3 as const,
  ENEMY: 4 as const,
  CHARACTER: 5 as const,
  PARTY: 6 as const,
  OTHER: 7 as const,
  LAST: 8 as const,
};

export const STATUS = {
  LEVEL: 0 as const,
  EXP: 1 as const,
  HP: 2 as const,
  MP: 3 as const,
  MAX_HP: 4 as const,
  MAX_MP: 5 as const,
  ATK: 6 as const,
  DEF: 7 as const,
  MAT: 8 as const,
  MDF: 9 as const,
  AGI: 10 as const,
  LUK: 11 as const,
  TP: 12 as const,
};

export const CHARACTER = {
  X: 0 as const,
  Y: 1 as const,
  DIRECTION: 2 as const,
  SCREEN_X: 3 as const,
  SCREEN_Y: 4 as const,
};

export const LAST = {
  USED_SKILL_ID: 0 as const,
  USED_ITEM_ID: 1 as const,
  ACTION_ACTOR_ID: 2 as const,
  ACTION_ENEMY_INDEX: 3 as const,
  TARGET_ACTOR_ID: 4 as const,
  TARGET_ENEMY_INDEX: 5 as const,
};

export const OTHER = {
  MAP_ID: 0 as const,
  PARTY_MEMBERS: 1 as const,
  GOLD: 2 as const,
  STEPS: 3 as const,
  PLAY_TIME: 4 as const,
  TIMER: 5 as const,
  SAVE_COUNT: 6 as const,
  BATTLE_COUNT: 7 as const,
  WIN_COUNT: 8 as const,
  ESCAPE_COUNT: 9 as const,
};
