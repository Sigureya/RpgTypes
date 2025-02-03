export interface MapEventContainer<Command = unknown, Event extends {
    id: number;
} = {
    id: number;
}> {
    events: Array<(Event & {
        pages: {
            list: Command[];
        }[];
    }) | null>;
}
