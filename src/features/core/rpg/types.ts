import type { EventCommand2, EventCommandUnknown } from "@RpgTypes/rmmz";

export interface ReplaceableEventPage<
  Command extends EventCommandUnknown = EventCommand2
> {
  id: number;
  pages: { readonly list: ReadonlyArray<Command> }[];
}
