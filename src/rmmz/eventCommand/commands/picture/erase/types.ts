import type { EventCommandLike2 } from "@RpgTypes/rmmz/eventCommand";

export interface Command_ErasePicture extends EventCommandLike2<235> {
  parameters: ParamArray_ErasePicture;
}

export type ParamArray_ErasePicture = [pictureId: number];
