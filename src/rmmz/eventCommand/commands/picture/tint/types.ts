import type { ColorRGBA } from "@RpgTypes/libs";
import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";
import type { TINT_PICTURE } from "@RpgTypes/rmmz/rpg";

export interface Command_TintPicture
  extends EventCommandLike2<typeof TINT_PICTURE> {
  parameters: ParamArray_TintPicture;
}

export type ParamArray_TintPicture = [
  pictureId: number,
  tone: ColorRGBA,
  duration: number,
  wait: boolean
];
