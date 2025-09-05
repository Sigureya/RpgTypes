import { EventCommandLike } from '../../../frame';
import { EXIT_EVENT_PROCESSING } from '../../../../rpg';
export interface Command_ExitEventProcessing extends EventCommandLike<typeof EXIT_EVENT_PROCESSING> {
    parameters: [];
}
