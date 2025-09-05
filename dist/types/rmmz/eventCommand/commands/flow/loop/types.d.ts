import { EventCommandLike } from '../../../frame';
import { LOOP, LOOP_BREAK } from '../../../../rpg';
export interface Command_Loop extends EventCommandLike<typeof LOOP, []> {
}
export interface Command_LoopBreak extends EventCommandLike<typeof LOOP_BREAK, []> {
}
