import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { ENEMY_TRANSFORM } from "@RpgTypes/rmmz/rpg";

export interface Command_EnemyTransform
  extends EventCommandLike<typeof ENEMY_TRANSFORM> {
  parameters: ParamArray_EnemyTransfrom;
}

export type ParamArray_EnemyTransfrom = [enemyId: number, newEnemyId: number];

export interface ParamObject_EnemyTransform {
  enemyId: number;
  newEnemyId: number;
}
