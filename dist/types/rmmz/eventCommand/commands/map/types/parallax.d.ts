import { EventCommandLike, CHANGE_PARALLAX } from '../../../../../libs/eventCommand';
export interface Command_ChangeParallax extends EventCommandLike<typeof CHANGE_PARALLAX> {
    parameters: ParamArray_ChangeParallax;
}
export type ParamArray_ChangeParallax = [
    parallaxName: string,
    loopX: boolean,
    loopY: boolean,
    sx: number,
    sy: number
];
export interface ParamObject_ChangeParallax {
    parallaxName: string;
    loopX: boolean;
    loopY: boolean;
    sx: number;
    sy: number;
}
