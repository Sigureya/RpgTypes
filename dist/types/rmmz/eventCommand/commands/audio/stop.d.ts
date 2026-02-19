import { EventCommandLike, STOP_SE } from '../../../../libs/eventCommand';
export interface Command_StopSE extends EventCommandLike<typeof STOP_SE, []> {
}
