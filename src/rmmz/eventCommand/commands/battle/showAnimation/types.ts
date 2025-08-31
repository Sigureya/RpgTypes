import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_ShowBattleAnimation extends EventCommandLike2<339> {
  parameters: ParamArray_ShowBattleAnimation;
}

export type ParamArray_ShowBattleAnimation = [
  targetEnemyIndex: number,
  animationId: number,
  forAll: boolean
];
