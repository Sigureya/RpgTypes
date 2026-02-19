import type {
  EventCommandLike,
  ROTATE_PICTURE,
} from "@RpgTypes/libs/eventCommand";

export interface Command_RotatePicture extends EventCommandLike<
  typeof ROTATE_PICTURE
> {
  parameters: ParamArray_RotatePicture;
}

export type ParamArray_RotatePicture = [pictureId: number, angle: number];
