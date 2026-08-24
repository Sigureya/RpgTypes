import type {
  EventCommandUnknown,
  MoveRouteCommandUnknown,
} from "@RpgTypes/libs";
import type { Data_MapUnknown } from "../types";
import type { MapEvent } from "./page";

export const mapEvents = <
  CommandType extends EventCommandUnknown,
  MoveRoute extends MoveRouteCommandUnknown,
>(
  map: Pick<Data_MapUnknown<CommandType, MoveRoute>, "events">,
): MapEvent<CommandType, MoveRoute>[] => {
  return map.events.filter(
    (event): event is MapEvent<CommandType, MoveRoute> => !!event,
  );
};

export const mapEvent = <
  CommandType extends EventCommandUnknown,
  MoveRoute extends MoveRouteCommandUnknown,
>(
  map: Pick<Data_MapUnknown<CommandType, MoveRoute>, "events">,
  eventId: number,
): MapEvent<CommandType, MoveRoute> | undefined => {
  return map.events[eventId] ?? undefined;
};

export const mapEventsXy = <
  CommandType extends EventCommandUnknown,
  MoveRoute extends MoveRouteCommandUnknown,
>(
  map: Pick<Data_MapUnknown<CommandType, MoveRoute>, "events">,
  x: number,
  y: number,
): MapEvent<CommandType, MoveRoute>[] => {
  return mapEvents(map).filter((event) => event.x === x && event.y === y);
};

export const mapEventIdXy = <
  CommandType extends EventCommandUnknown,
  MoveRoute extends MoveRouteCommandUnknown,
>(
  map: Pick<Data_MapUnknown<CommandType, MoveRoute>, "events">,
  x: number,
  y: number,
): number => {
  return mapEventsXy(map, x, y)[0]?.id ?? 0;
};
