import type { EventCommandUnknown } from "@RpgTypes/libs/eventCommand";
import type { EventCommand } from "@RpgTypes/rmmz";

export interface ReplaceableEventPage<
  Command extends EventCommandUnknown = EventCommand,
> {
  id: number;
  pages: { readonly list: ReadonlyArray<Command> }[];
}
