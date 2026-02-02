import type { ColorRGBA } from "@RpgTypes/libs";
import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";
import type { FLASH_SCREEN } from "@RpgTypes/rmmz/rpg";

export interface Command_FlashScreen extends EventCommandLike<
  typeof FLASH_SCREEN
> {
  parameters: ParamArray_FlashScreen;
}

export type ParamArray_FlashScreen = [
  color: ColorRGBA,
  duration: number,
  wait: boolean,
];

export interface ParamObject_FlashScreen {
  color: ColorRGBA;
  duration: number;
  wait: boolean;
}
