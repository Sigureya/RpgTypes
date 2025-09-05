import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { SHOW_BATTLE_ANIMATION } from "@RpgTypes/rmmz/rpg";

export interface Command_ShowBattleAnimation
  extends EventCommandLike<typeof SHOW_BATTLE_ANIMATION> {
  parameters: ParamArray_ShowBattleAnimation;
}

export type ParamArray_ShowBattleAnimation = [
  targetEnemyIndex: number,
  animationId: number,
  forAll: boolean
];
