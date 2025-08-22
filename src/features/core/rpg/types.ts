import type { EventCommand } from "@RpgTypes/rmmz";

export interface ReplaceableEventPage {
  id: number;
  pages: { readonly list: ReadonlyArray<EventCommand> }[];
}
