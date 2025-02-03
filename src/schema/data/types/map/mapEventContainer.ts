export interface MapEventContainer<Command = unknown> {
  events: Array<{
    id: number;
    pages: { list: Command[] }[];
  } | null>;
}
