import type { EventCommandLike } from "@RpgTypes/rmmz/eventCommand";

export interface Command_ErasePicture extends EventCommandLike<235> {
  parameters: ParamArray_ErasePicture;
}

export type ParamArray_ErasePicture = [pictureId: number];
