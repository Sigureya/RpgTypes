import { EventCommandLike2 } from '../../..';
export interface Command_RotatePicture extends EventCommandLike2<233> {
    parameters: [pictureId: number, angle: number];
}
export interface Command_TintPicture extends EventCommandLike2<234> {
    parameters: [
        pictureId: number,
        tone: [number, number, number, number],
        duration: number
    ];
}
export interface Command_ErasePicture extends EventCommandLike2<235> {
    parameters: [pictureId: number];
}
