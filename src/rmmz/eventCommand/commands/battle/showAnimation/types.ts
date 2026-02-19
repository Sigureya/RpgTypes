import type {
  EventCommandLike,
  SHOW_BATTLE_ANIMATION,
} from "@RpgTypes/libs/eventCommand";

export interface Command_ShowBattleAnimation extends EventCommandLike<
  typeof SHOW_BATTLE_ANIMATION
> {
  parameters: ParamArray_ShowBattleAnimation;
}

export type ParamArray_ShowBattleAnimation = [
  targetEnemyIndex: number,
  animationId: number,
  forAll: boolean,
];
