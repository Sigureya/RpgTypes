import type {
  Data_Map,
  EventCommand,
  MapEvent,
  MapEventPage,
} from "@RpgTypes/rmmz";

export const repleaceEventCommands = (
  map: Data_Map,
  fn: (list: ReadonlyArray<EventCommand>) => EventCommand[]
): (MapEvent | null)[] => {
  return map.events.map((event): MapEvent | null => {
    if (!event) {
      return null;
    }
    return {
      ...event,
      pages: convertPages(event, fn),
    };
  });
};

const convertPages = (
  mapEvent: MapEvent,
  fn: (list: ReadonlyArray<EventCommand>) => EventCommand[]
): MapEventPage[] => {
  return mapEvent.pages.map(
    (page): MapEventPage => ({
      conditions: page.conditions,
      image: page.image,
      directionFix: page.directionFix,
      moveFrequency: page.moveFrequency,
      moveRoute: page.moveRoute,
      list: fn(page.list),
    })
  );
};
