import { EventCommandLike2 } from '../../..';
export interface Command_ErasePicture extends EventCommandLike2<235> {
    parameters: ParamArray_ErasePicture;
}
export type ParamArray_ErasePicture = [pictureId: number];
