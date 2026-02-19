import { ColorRGBA } from '../../../../../libs';
import { EventCommandLike, FLASH_SCREEN } from '../../../../../libs/eventCommand';
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
