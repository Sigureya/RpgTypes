import { EventCommandLike2, SHAKE_SCREEN } from '../../../..';
export interface Command_ShakeScreen extends EventCommandLike2<typeof SHAKE_SCREEN> {
    parameters: ParamArray_ShakeScreen;
}
export type ParamArray_ShakeScreen = [
    power: number,
    speed: number,
    duration: number,
    wait: boolean
];
