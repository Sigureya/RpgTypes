import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { ENEMY_APPEAR } from "@RpgTypes/rmmz/rpg";

export interface Command_EnemyAppear
  extends EventCommandLike<typeof ENEMY_APPEAR> {
  parameters: ParamArray_EnemyAppear;
}

export type ParamArray_EnemyAppear = [enemyIndex: number];
