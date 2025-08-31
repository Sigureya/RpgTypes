import { EventCommandLike2 } from '../../../frame';
export interface Command_RotatePicture extends EventCommandLike2<233> {
    parameters: ParamArray_RotatePicture;
}
export type ParamArray_RotatePicture = [pictureId: number, angle: number];
