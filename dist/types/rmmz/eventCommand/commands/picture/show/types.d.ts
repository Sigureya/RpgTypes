import { EventCommandLike2 } from '../../../..';
export type PicutureBlendModeV2 = 0 | 1 | 2 | 3;
export type ParamsArray_ShowPicture = [
    pictureId: number,
    filename: string,
    origin: 0 | 1,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: PicutureBlendModeV2
];
export type ParamsArray_MovePicture = [
    pictureId: number,
    origin: 0 | 1,
    x: number,
    y: number,
    scaleX: number,
    scaleY: number,
    opacity: number,
    blendMode: PicutureBlendModeV2,
    wait: boolean,
    easingType: number
];
export interface ParamObject_ParamsShowPicture {
    pictureId: number;
    name: string;
    origin: 0 | 1;
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    opacity: number;
    blendMode: PicutureBlendModeV2;
}
export interface ParamObject_ParamsMovePicture {
    pictureId: number;
    origin: 0 | 1;
    x: number;
    y: number;
    scaleX: number;
    scaleY: number;
    opacity: number;
    blendMode: PicutureBlendModeV2;
    wait: boolean;
    easingType: number;
}
export interface Command_ShowPicture extends EventCommandLike2<231> {
    parameters: ParamsArray_ShowPicture;
}
export interface Command_MovePicture extends EventCommandLike2<232> {
    parameters: ParamsArray_MovePicture;
}
