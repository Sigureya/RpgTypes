import { EventCommandLike, MOVE_PICTURE, SHOW_PICTURE } from '../../../../../libs/eventCommand';
export interface Command_ShowPicture extends EventCommandLike<typeof SHOW_PICTURE> {
    parameters: ParamsArray_ShowPicture;
}
export interface Command_MovePicture extends EventCommandLike<typeof MOVE_PICTURE> {
    parameters: ParamsArray_MovePicture;
}
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
