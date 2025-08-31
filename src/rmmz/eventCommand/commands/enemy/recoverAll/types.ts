import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { ENEMY_RECOVER_ALL } from "@RpgTypes/rmmz/rpg";

export interface Command_EnemyRecoverAll
  extends EventCommandLike2<typeof ENEMY_RECOVER_ALL> {
  parameters: ParamArray_EnemyRecoverAll;
}

export type ParamArray_EnemyRecoverAll = [];
