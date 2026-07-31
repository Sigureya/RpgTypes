import type { Rmmz_Enemy } from "@RpgTypes/rmmzRuntime";

export type Rmmz_EnemyActionConditionType = Pick<
  Rmmz_Enemy,
  | "turnCount"
  | "hpRate"
  | "mpRate"
  | "isStateAffected"
  | "allTraits"
  | "mp"
  | "tp"
>;
