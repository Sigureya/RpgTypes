import { EventCommandLike2 } from '../../../frame';
import { ABORT_BATTLE } from '../../../../rpg';
export interface Command_AbortBattle extends EventCommandLike2<typeof ABORT_BATTLE> {
    parameters: [];
}
