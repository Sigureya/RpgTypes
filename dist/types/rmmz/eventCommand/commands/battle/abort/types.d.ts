import { EventCommandLike } from '../../../frame';
import { ABORT_BATTLE } from '../../../../rpg';
export interface Command_AbortBattle extends EventCommandLike<typeof ABORT_BATTLE> {
    parameters: [];
}
