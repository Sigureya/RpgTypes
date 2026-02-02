import { ColorRGBA } from '../../../../../libs';
import { EventCommandLike } from '../../../frame';
import { TINT_SCREEN } from '../../../../rpg';
export interface Command_TintScreen extends EventCommandLike<typeof TINT_SCREEN> {
    parameters: ParamArray_TintScreen;
}
export type ParamArray_TintScreen = [
    color: ColorRGBA,
    duration: number,
    wait: boolean
];
export interface ParamObject_TintScreen {
    color: ColorRGBA;
    duration: number;
    wait: boolean;
}
