import { EventCommandLike2 } from '../../../frame';
import { EXIT_EVENT_PROCESSING } from '../../../../rpg';
export interface Command_ExitEventProcessing extends EventCommandLike2<typeof EXIT_EVENT_PROCESSING> {
    parameters: [];
}
