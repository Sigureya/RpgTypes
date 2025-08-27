import type { EventCommand2, EventCommandUnknown } from "@RpgTypes/rmmz";
import type {
  Data_CommonEvent,
  Data_Troop,
  MapEventContainer,
} from "@RpgTypes/rmmz/rpg";
import type { CommandContainer } from "./map/";
import type { ReplaceableEventPage } from "./types";

type EventCommandReplaceFunc = (
  list: ReadonlyArray<EventCommandUnknown>
) => EventCommandUnknown[];

export const replaceEventCommands = <
  T extends CommandContainer<EventCommandUnknown>
>(
  data: T,
  fn: EventCommandReplaceFunc
): T => {
  const newList = fn(data.list);
  return {
    ...data,
    list: newList,
  };
};

export const replacePages = <Pages extends ReplaceableEventPage<EventCommand2>>(
  container: Pages,
  fn: EventCommandReplaceFunc
): Pages => {
  return {
    ...container,
    pages: container.pages.map((page) => replaceEventCommands(page, fn)),
  };
};

export const replaceMapEvents = <Map extends MapEventContainer<EventCommand2>>(
  map: Map,
  fn: EventCommandReplaceFunc
): Map => {
  return {
    ...map,
    events: map.events.map((event) => {
      if (!event) {
        return null;
      }
      return replacePages(event, fn);
    }),
  };
};

export const replaceCommonEvents = (
  events: ReadonlyArray<Data_CommonEvent<EventCommand2>>,
  fn: EventCommandReplaceFunc
): Data_CommonEvent<EventCommand2>[] => {
  return events.map((commonEvent) => replaceEventCommands(commonEvent, fn));
};

export const replaceTroops = (
  list: ReadonlyArray<Data_Troop<EventCommand2>>,
  fn: EventCommandReplaceFunc
): Data_Troop<EventCommand2>[] => {
  return list.map((troop) => replacePages(troop, fn));
};
