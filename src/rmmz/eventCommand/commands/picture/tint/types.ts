import type { ColorRGBA } from "@RpgTypes/libs";
import type {
  EventCommandLike,
  TINT_PICTURE,
} from "@RpgTypes/libs/eventCommand";

export interface Command_TintPicture extends EventCommandLike<
  typeof TINT_PICTURE
> {
  parameters: ParamArray_TintPicture;
}

export type ParamArray_TintPicture = [
  pictureId: number,
  tone: ColorRGBA,
  duration: number,
  wait: boolean,
];
