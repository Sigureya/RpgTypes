import { EventCommandLike2 } from '../../../frame';
export interface Command_ChangeParallax extends EventCommandLike2<284> {
    parameters: ParamArray_ChangeParallax;
}
export type ParamArray_ChangeParallax = [
    parallaxName: string,
    loopX: boolean,
    loopY: boolean,
    sx: number,
    sy: number
];
