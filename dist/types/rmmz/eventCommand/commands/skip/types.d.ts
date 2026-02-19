import { EventCommandLike, SKIP } from '../../../../libs/eventCommand';
export interface Command_Skip extends EventCommandLike<typeof SKIP> {
    parameters: [];
}
