export const LAST_ACTION = {
  SKILL: 0,
  ITEM: 1,
  ACTOR: 2,
  ENEMY: 3,
  TARGET_ACTOR: 4,
  TARGET_ENEMY: 5,
} as const;

export type LAST_ACTION_TYPES = (typeof LAST_ACTION)[keyof typeof LAST_ACTION];
