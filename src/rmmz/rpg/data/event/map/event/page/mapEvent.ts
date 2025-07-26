import type { EventCommandUnknown } from "@RpgTypes/rmmz/eventCommand";
import type { EventCommand } from "./eventCommand";
import type { MapEventPage } from "./page";

export interface MapEvent<T extends EventCommandUnknown = EventCommand> {
  id: number;
  name: string;
  pages: MapEventPage<T>[];
  note: string;
  x: number;
  y: number;
}
