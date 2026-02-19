import type { EventCommandUnknown } from "@RpgTypes/libs/eventCommand";
import type { MapEventPage } from "./page";

export interface MapEvent<T extends EventCommandUnknown = EventCommandUnknown> {
  id: number;
  name: string;
  pages: MapEventPage<T>[];
  note: string;
  x: number;
  y: number;
}
