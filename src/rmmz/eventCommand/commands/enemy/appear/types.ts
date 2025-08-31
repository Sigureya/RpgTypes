import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { ENEMY_APPEAR } from "@RpgTypes/rmmz/rpg";

export interface Command_EnemyAppear
  extends EventCommandLike2<typeof ENEMY_APPEAR> {
  parameters: ParamArray_EnemyAppear;
}

export type ParamArray_EnemyAppear = [enemyIndex: number];
