import type { Data_Map, EventCommand } from "@RpgTypes/rmmz";
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
