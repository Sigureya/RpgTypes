import type { ColorRGBA } from "@RpgTypes/libs";
import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { TINT_SCREEN } from "@RpgTypes/rmmz/rpg";

export interface Command_TintScreen extends EventCommandLike<
  typeof TINT_SCREEN
> {
  parameters: ParamArray_TintScreen;
}

export type ParamArray_TintScreen = [
  color: ColorRGBA,
  duration: number,
  wait: boolean,
];
