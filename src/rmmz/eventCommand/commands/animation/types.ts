import type { ValueOf } from "@RpgTypes/libs/templates/valueOf";
import type { Toggle } from "@RpgTypes/rmmz/utils";
import type { EventCommandLike } from "../../frame";

export interface Command_ShowAnimation extends EventCommandLike<212> {
  parameters: ParamArray_ShowAnimation;
}

export type ParamArray_ShowAnimation = [
  characterId: number,
  animationId: number,
  waiting: ValueOf<Toggle>
];
