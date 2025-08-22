import { EventCommand } from '../../../rmmz';
export interface ReplaceableEventPage {
    id: number;
    pages: {
        readonly list: ReadonlyArray<EventCommand>;
    }[];
}
