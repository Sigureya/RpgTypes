import type {
  EventCommandLike,
  SHOW_ANIMATION,
} from "@RpgTypes/libs/eventCommand";

export interface Command_ShowAnimation extends EventCommandLike<
  typeof SHOW_ANIMATION
> {
  parameters: ParamArray_ShowAnimation;
}

export type ParamArray_ShowAnimation = [
  characterId: number,
  animationId: number,
  waiting: boolean,
];

export interface ParamObject_ShowAnimation {
  characterId: number;
  animationId: number;
  waiting: boolean;
}
