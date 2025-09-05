import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { ENEMY_RECOVER_ALL } from "@RpgTypes/rmmz/rpg";

export interface Command_EnemyRecoverAll
  extends EventCommandLike<typeof ENEMY_RECOVER_ALL> {
  parameters: ParamArray_EnemyRecoverAll;
}

export type ParamArray_EnemyRecoverAll = [];
