export interface MapEventContainer<
  Command = unknown,
  Event extends object = {}
> {
  events: Array<
    | (Event & {
        id: number;
        pages: { list: Command[] }[];
      })
    | null
  >;
}
