import { EventCommandLike2 } from '../../../frame';
export interface Command_ChangeParallax extends EventCommandLike2<284> {
    parameters: [
        parallaxName: string,
        loopX: boolean,
        loopY: boolean,
        sx: number,
        sy: number
    ];
}
