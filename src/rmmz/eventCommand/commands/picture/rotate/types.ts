import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand/frame";

export interface Command_RotatePicture extends EventCommandLike2<233> {
  parameters: ParamArray_RotatePicture;
}

export type ParamArray_RotatePicture = [pictureId: number, angle: number];
