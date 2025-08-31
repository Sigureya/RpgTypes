import { EventCommandLike2 } from '../../frame';
export interface Command_ShowBalloonIcon extends EventCommandLike2<213> {
    parameters: ParamArray_ShowBalloonIcon;
}
export type ParamArray_ShowBalloonIcon = [
    characterId: number,
    balloonId: number
];
