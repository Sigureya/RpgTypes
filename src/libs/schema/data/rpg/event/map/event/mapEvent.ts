import type { EventCommandUnknown } from "@RpgTypes/eventCommand";
import type { MapEventPage } from "./page";
import type { EventCommand } from "./eventCommand";

export interface MapEvent<T extends EventCommandUnknown = EventCommand> {
  id: number;
  name: string;
  pages: MapEventPage<T>[];
  note: string;
  x: number;
  y: number;
}
