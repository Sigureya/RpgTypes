import type { EventCommandUnknown } from "@RpgTypes/libs/eventCommand";
import type { MapEvent, MapEventPage } from "./event";

export const repleaceMapEventCommands = <
  Command extends EventCommandUnknown,
  RC extends EventCommandUnknown = Command,
>(
  map: (MapEvent<Command> | null)[],
  fn: (list: ReadonlyArray<Command>) => RC[],
): (MapEvent<RC> | null)[] => {
  return map.map((event): MapEvent<RC> | null => {
    if (!event) {
      return null;
    }
    return {
      ...event,
      pages: convertPages(event, fn),
    };
  });
};

const convertPages = <
  Command extends EventCommandUnknown,
  RC extends EventCommandUnknown = Command,
>(
  mapEvent: MapEvent<Command>,
  fn: (list: ReadonlyArray<Command>) => RC[],
): MapEventPage<RC>[] => {
  return mapEvent.pages.map(
    (page): MapEventPage<RC> => ({
      ...page,
      //     conditions: page.conditions,
      // image: page.image,
      // directionFix: page.directionFix,
      // moveFrequency: page.moveFrequency,
      // moveRoute: page.moveRoute,
      list: fn(page.list),
    }),
  );
};
