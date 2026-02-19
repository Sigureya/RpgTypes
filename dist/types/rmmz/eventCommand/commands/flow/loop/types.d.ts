import { EventCommandLike, LOOP, LOOP_BREAK } from '../../../../../libs/eventCommand';
export interface Command_Loop extends EventCommandLike<typeof LOOP, []> {
}
export interface Command_LoopBreak extends EventCommandLike<typeof LOOP_BREAK, [
]> {
}
