export interface MapEventContainer<Command = unknown> {
    events: Array<{
        id: number;
        pages: {
            list: Command[];
        }[];
    } | null>;
}
export interface ReadonlyMapEventContainer<Command = unknown> {
    readonly events: ReadonlyArray<{
        readonly id: number;
        readonly pages: ReadonlyArray<{
            readonly list: ReadonlyArray<Command>;
        }>;
    } | null>;
}
