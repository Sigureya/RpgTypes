import type { EventCommandUnknown } from "@RpgTypes/rmmz/eventCommand";
import type { MapEvent, MapEventPage } from "./event";
import type { Data_Map } from "./map";

export const repleaceEventCommands = <Command extends EventCommandUnknown>(
  map: Data_Map<Command>,
  fn: (list: ReadonlyArray<Command>) => Command[]
): (MapEvent<Command> | null)[] => {
  return map.events.map((event): MapEvent<Command> | null => {
    if (!event) {
      return null;
    }
    return {
      ...event,
      pages: convertPages(event, fn),
    };
  });
};

const convertPages = <Command extends EventCommandUnknown>(
  mapEvent: MapEvent<Command>,
  fn: (list: ReadonlyArray<Command>) => Command[]
): MapEventPage<Command>[] => {
  return mapEvent.pages.map(
    (page): MapEventPage<Command> => ({
      conditions: page.conditions,
      image: page.image,
      directionFix: page.directionFix,
      moveFrequency: page.moveFrequency,
      moveRoute: page.moveRoute,
      list: fn(page.list),
    })
  );
};
