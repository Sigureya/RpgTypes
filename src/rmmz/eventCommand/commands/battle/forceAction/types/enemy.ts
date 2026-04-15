import type { EventCommandLike, FORCE_ACTION } from "@RpgTypes/libs";

export interface Command_EnemyForceAction extends EventCommandLike<
  typeof FORCE_ACTION,
  ParamArray_ForceActionEnemy
> {}

export interface ParamObject_EnemyForceAction {
  enemyIndex: number;
  skillId: number;
  targetIndex: number;
}

export interface ParamObject_EnemyForceActionLastTarget {
  enemyIndex: number;
  skillId: number;
}

export type ParamArray_ForceActionEnemy = [
  subjectEnemy: 0,
  enemyIndex: number,
  skillId: number,
  targetIndex: number,
];

export type ParamArray_ForceActionEnemyLastTarget = [
  subjectEnemy: 0,
  enemyIndex: number,
  skillId: number,
  lastTarget: -2,
];
