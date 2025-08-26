import type { Data_Map, EventCommand2 } from "@RpgTypes/rmmz";
import { repleaceMapEventCommands } from "@RpgTypes/rmmz";
import { replaceEventCommandTexts } from "./eventCommand";
import { replaceNoteTextByMap, replaceTextByMap } from "./utils";

export const replaceMapDataTexts = (
  mapData: Data_Map<EventCommand2>,
  map: ReadonlyMap<string, string>
): Data_Map<EventCommand2> => {
  const displayName = replaceTextByMap(mapData.displayName, map);
  const note = replaceNoteTextByMap(mapData, map);
  const events = repleaceMapEventCommands(mapData, (commandList) =>
    replaceEventCommandTexts(commandList, map)
  );
  const partial: Partial<Data_Map<EventCommand2>> = {
    displayName,
    events,
    note,
  };
  return {
    ...mapData,
    ...partial,
  };
};
