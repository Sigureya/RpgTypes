import type {
  Operand_EnemyStatus,
  Operand_ActorStatus,
} from "@RpgTypes/schema";
import type { DataOperand_Enemy, DataOperand_Actor } from "./gamteDataTypes";

export const getEnemyValue = (
  enemy: DataOperand_Enemy,
  param: Operand_EnemyStatus
): number => {
  switch (param[6]) {
    case 0:
      return enemy.hp;
    case 1:
      return enemy.mp;
    case 10:
      return enemy.tp;
  }
  if (param[6] >= 2 && param[6] <= 9) {
    return enemy.param(param[6] - 2);
  }
  return 0;
};

export const getActorValue = (
  actor: DataOperand_Actor,
  param: Operand_ActorStatus
) => {
  switch (param[6]) {
    case 0: // Level
      return actor.level;
    case 1: // EXP
      return actor.currentExp();
    case 2: // HP
      return actor.hp;
    case 3: // MP
      return actor.mp;
    case 12: // TP
      return actor.tp;
  }
  if (param[6] >= 4 && param[6] <= 11) {
    return actor.param(param[6] - 4);
  }
  return 0;
};
