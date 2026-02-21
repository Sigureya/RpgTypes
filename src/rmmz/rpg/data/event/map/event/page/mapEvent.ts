import type { EventCommandUnknown } from "@RpgTypes/libs/eventCommand";
import type { MoveRouteDataUnkwnown } from "@RpgTypes/rmmz/eventCommand";
import type { MapEventPage } from "./page";

export interface MapEvent<
  T extends EventCommandUnknown = EventCommandUnknown,
  R extends MoveRouteDataUnkwnown = MoveRouteDataUnkwnown,
> {
  id: number;
  name: string;
  pages: MapEventPage<T, R>[];
  note: string;
  x: number;
  y: number;
}
