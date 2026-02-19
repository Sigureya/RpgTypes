import type {
  EventCommandLike,
  ERASE_PICTURE,
} from "@RpgTypes/libs/eventCommand";

export interface Command_ErasePicture extends EventCommandLike<
  typeof ERASE_PICTURE
> {
  parameters: ParamArray_ErasePicture;
}

export type ParamArray_ErasePicture = [pictureId: number];
