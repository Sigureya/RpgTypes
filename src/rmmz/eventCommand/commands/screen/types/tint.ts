import type { ColorRGBA } from "@RpgTypes/libs";
import type {
  EventCommandLike,
  TINT_SCREEN,
} from "@RpgTypes/libs/eventCommand";

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

export interface ParamObject_TintScreen {
  color: ColorRGBA;
  duration: number;
  wait: boolean;
}
