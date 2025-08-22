import type {
  BattleEventPage,
  Data_Map,
  Data_Troop,
  EventCommand,
  Data_CommonEvent,
} from "@RpgTypes/rmmz";
import { replaceNote, repleaceEventCommands } from "@RpgTypes/rmmz";
import { replaceEventCommandTexts } from "./eventCommand";
import { replaceTextByMap } from "./utils";

export const replaceMapTexts = (
  map: Data_Map,
  dic: ReadonlyMap<string, string>
): Data_Map => {
  const disiplayName: string = replaceTextByMap(map.displayName, dic);
  const newNote = replaceNote(map.note, (item) =>
    replaceTextByMap(item.value, dic)
  );

  const events = repleaceEventCommands(map, (eventCommands): EventCommand[] =>
    replaceEventCommandTexts(eventCommands, dic)
  );
  const partialMap: Partial<Data_Map> = {
    events: events,
    displayName: disiplayName,
    note: newNote,
  };
  return {
    ...map,
    ...partialMap,
  };
};

export const replaceTroopTexts = (
  troop: Data_Troop,
  dic: ReadonlyMap<string, string>
): Data_Troop => {
  const pages = troop.pages.map(
    (page): BattleEventPage => ({
      list: replaceEventCommandTexts(page.list, dic),
      conditions: page.conditions,
      span: page.span,
    })
  );
  return {
    ...troop,
    pages: pages,
  };
};

export const replaceCommonEventTexts = (
  commonEvent: Data_CommonEvent,
  dic: ReadonlyMap<string, string>
): Data_CommonEvent => {
  return {
    ...commonEvent,
    list: replaceEventCommandTexts(commonEvent.list, dic),
  };
};
