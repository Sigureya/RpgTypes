import { ColorRGBA } from '../../../../libs';
import { FADEOUT_SCREEN, FLASH_SCREEN, TINT_SCREEN } from '../../../rpg';
import { EventCommandLike } from '../../frame';
export interface Command_TintScreen extends EventCommandLike<typeof TINT_SCREEN> {
    parameters: ParamArray_TintScreen;
}
export interface Command_FlashScreen extends EventCommandLike<typeof FLASH_SCREEN> {
    parameters: [color: ColorRGBA, duration: number, wait: boolean];
}
export interface Command_FadeOutScreen extends EventCommandLike<typeof FADEOUT_SCREEN> {
    parameters: [];
}
export type ParamArray_TintScreen = [
    color: ColorRGBA,
    duration: number,
    wait: boolean
];
