import type { EventCommandUnknown } from "@RpgTypes/rmmz";

export interface ReplaceableEventPage<Command extends EventCommandUnknown> {
  id: number;
  pages: { readonly list: ReadonlyArray<Command> }[];
}
