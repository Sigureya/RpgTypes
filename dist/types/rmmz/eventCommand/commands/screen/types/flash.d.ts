import { ColorRGBA } from '../../../../../libs';
import { EventCommandLike } from '../../../frame';
import { FLASH_SCREEN } from '../../../../rpg';
export interface Command_FlashScreen extends EventCommandLike<typeof FLASH_SCREEN> {
    parameters: ParamArray_FlashScreen;
}
export type ParamArray_FlashScreen = [
    color: ColorRGBA,
    duration: number,
    wait: boolean
];
export interface ParamObject_FlashScreen {
    color: ColorRGBA;
    duration: number;
    wait: boolean;
}
