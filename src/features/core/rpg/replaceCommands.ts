import type { EventCommandUnknown } from "@RpgTypes/libs/eventCommand";
import type { EventCommand } from "@RpgTypes/rmmz";
import type {
  Data_CommonEventUnknown,
  Data_TroopUnknonw,
  MapEventContainer,
} from "@RpgTypes/rmmz/rpg";
import type { CommandContainer } from "./map/";
import type { ReplaceableEventPage } from "./types";

type EventCommandReplaceFunc = <Command extends EventCommandUnknown>(
  list: ReadonlyArray<Command>,
) => Command[];

export const replaceEventCommands = <
  Command extends EventCommandUnknown,
  T extends CommandContainer<Command> = CommandContainer<Command>,
>(
  data: T,
  fn: EventCommandReplaceFunc,
): T => {
  const newList = fn(data.list);
  return {
    ...data,
    list: newList,
  };
};

export const replacePages = <Pages extends ReplaceableEventPage<EventCommand>>(
  container: Pages,
  fn: EventCommandReplaceFunc,
): Pages => {
  return {
    ...container,
    pages: container.pages.map((page) => replaceEventCommands(page, fn)),
  };
};

export const replaceMapEvents = <Map extends MapEventContainer<EventCommand>>(
  map: Map,
  fn: EventCommandReplaceFunc,
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
  events: ReadonlyArray<Data_CommonEventUnknown<EventCommand>>,
  fn: EventCommandReplaceFunc,
): Data_CommonEventUnknown<EventCommand>[] => {
  return events.map((commonEvent) => replaceEventCommands(commonEvent, fn));
};

export const replaceTroops = (
  list: ReadonlyArray<Data_TroopUnknonw<EventCommand>>,
  fn: EventCommandReplaceFunc,
): Data_TroopUnknonw<EventCommand>[] => {
  return list.map((troop) => replacePages(troop, fn));
};
