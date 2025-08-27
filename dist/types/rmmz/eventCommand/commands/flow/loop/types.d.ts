import { EventCommandLike2 } from '../../../frame';
import { LOOP, LOOP_BREAK } from '../../../../rpg';
export interface Command_Loop extends EventCommandLike2<typeof LOOP, []> {
}
export interface Command_LoopBreak extends EventCommandLike2<typeof LOOP_BREAK, []> {
}
