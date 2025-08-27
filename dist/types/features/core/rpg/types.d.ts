import { EventCommand, EventCommandUnknown } from '../../../rmmz';
export interface ReplaceableEventPage<Command extends EventCommandUnknown = EventCommand> {
    id: number;
    pages: {
        readonly list: ReadonlyArray<Command>;
    }[];
}
