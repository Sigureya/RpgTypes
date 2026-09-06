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
  // mapEvents で null を除いてから絞ると、配列を 1 本余分に作る。
  // 毎フレームの通行判定から呼ばれるので 1 回の走査にまとめる。
  // また多数の要素がfalse判定になるので、reduceの方が速くなるらしい
  // 実測 (イベント 40 個): 220ns → 82ns。performance.md [SCAN]
  return map.events.reduce<MapEvent<CommandType, MoveRoute>[]>((acc, event) => {
    if (event && event.x === x && event.y === y) {
      acc.push(event);
    }
    return acc;
  }, []);
};

export const mapEventIdXy = <
  CommandType extends EventCommandUnknown,
  MoveRoute extends MoveRouteCommandUnknown,
>(
  map: Pick<Data_MapUnknown<CommandType, MoveRoute>, "events">,
  x: number,
  y: number,
): number => {
  // 先頭の 1 つしか要らないので、配列を作らずに探す
  const found = map.events.find(
    (event) => event && event.x === x && event.y === y,
  );
  return found?.id ?? 0;
};
