import type {
  EventCommandUnknown,
  MoveRouteCommandUnknown,
} from "@RpgTypes/libs";
import type { MapEventPage } from "./page";

export interface MapEvent<
  T extends EventCommandUnknown = EventCommandUnknown,
  R extends MoveRouteCommandUnknown = MoveRouteCommandUnknown,
> {
  id: number;
  name: string;
  pages: MapEventPage<T, R>[];
  note: string;
  x: number;
  y: number;
}
