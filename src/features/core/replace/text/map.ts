import type { Data_Map, EventCommand } from "@RpgTypes/rmmz";
import { repleaceMapEventCommands } from "@RpgTypes/rmmz";
import { replaceEventCommandTexts } from "./eventCommand";
import { replaceNoteTextByFunction } from "./note";
import { replaceTextByFunction } from "./utils";

export const replaceMapDataTexts = (
  mapData: Data_Map<EventCommand>,
  fn: (key: string) => string | undefined
): Data_Map<EventCommand> => {
  const displayName = replaceTextByFunction(mapData.displayName, fn);
  const note = replaceNoteTextByFunction(mapData, fn);
  const events = repleaceMapEventCommands(mapData, (commandList) =>
    commandList.map((command) => replaceEventCommandTexts(command, fn))
  );
  const partial: Partial<Data_Map<EventCommand>> = {
    displayName,
    events,
    note,
  };
  return {
    ...mapData,
    ...partial,
  };
};
