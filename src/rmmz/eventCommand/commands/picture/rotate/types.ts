import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_RotatePicture extends EventCommandLike<233> {
  parameters: ParamArray_RotatePicture;
}

export type ParamArray_RotatePicture = [pictureId: number, angle: number];
