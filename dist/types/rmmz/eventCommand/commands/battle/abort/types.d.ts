import { EventCommandLike, ABORT_BATTLE } from '../../../../../libs/eventCommand';
export interface Command_AbortBattle extends EventCommandLike<typeof ABORT_BATTLE> {
    parameters: [];
}
