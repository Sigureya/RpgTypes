import { EventCommandLike, EXIT_EVENT_PROCESSING } from '../../../../../libs/eventCommand';
export interface Command_ExitEventProcessing extends EventCommandLike<typeof EXIT_EVENT_PROCESSING> {
    parameters: [];
}
