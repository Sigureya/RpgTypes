import { normarizeText } from "@RpgTypes/libs";
import type { MapFileInfo, Data_Map } from "@RpgTypes/rmmz";
import { isValidCommandText } from "./commonEvent";
import type {
  TextCommandParameter,
  GameDataExtractor,
  ExtractedMapTexts,
  ExtractedMapEventTexts,
  ExtractedMapEventNode,
  ExtractedNoteItem,
  ExtractedTextItemG,
  MapTerms,
} from "./text";
import { convertCommandInfo } from "./text/eventCommand/conv";
import type { ExtractedCommandItem } from "./text/eventCommand/types/extracted";

export const extractMapTexts = <UUID>(
  map: MapFileInfo,
  terms: MapTerms,
  uuidGen: (text: string) => UUID,
  commandNameFn: (command: TextCommandParameter) => string,
  extractor: GameDataExtractor,
): ExtractedTextItemG<UUID>[] => {
  const texts: ExtractedMapTexts = extractor.extractMapTexts(map.map);
  return convertExtractedMapTexts(texts, map, terms, uuidGen, commandNameFn);
};

// イベントデータではないので固定値。rootに属するデータを示すために使用。
const NONE_EVENT_DATA_ID = 0 as const;

export const convertExtractedMapTextsFomMapFiles = <UUID>(
  map: MapFileInfo<ExtractedMapTexts>,
  terms: MapTerms,
  uuidGen: (text: string) => UUID,
  commandNameFn: (command: TextCommandParameter) => string,
): MapFileInfo<ExtractedTextItemG<UUID>[]> => {
  return {
    filename: map.filename,
    editingName: map.editingName,
    map: convertExtractedMapTexts(map.map, map, terms, uuidGen, commandNameFn),
  };
};

export const convertExtractedMapTexts = <UUID>(
  map: ExtractedMapTexts,
  mapInfo: MapFileInfo<unknown>,
  terms: MapTerms,
  uuidGen: (text: string) => UUID,
  commandNameFn: (command: TextCommandParameter) => string,
): ExtractedTextItemG<UUID>[] => {
  const events = map.events.map((mapEvent) =>
    extractMapEventTexts(mapEvent, mapInfo, uuidGen, commandNameFn),
  );
  const note = map.noteItems.map(
    (note): ExtractedNoteItem<UUID, [string, string]> => ({
      id: NONE_EVENT_DATA_ID,
      filename: mapInfo.filename,
      uuid: uuidGen(note.value),
      baseText: note.value,
      kind: `note:${note.key}`,
      dataKey: `note`,
      otherData: [mapInfo.editingName, note.key],
    }),
  );
  const normarizedDisplayName = normarizeText(map.displayedName);
  const diplayName: ExtractedTextItemG<UUID, keyof Data_Map> = {
    id: NONE_EVENT_DATA_ID,
    uuid: uuidGen(normarizedDisplayName),
    filename: mapInfo.filename,
    baseText: normarizedDisplayName,
    kind: terms.displayName,
    dataKey: "displayName",
    otherData: [mapInfo.editingName],
  };
  return [diplayName, ...note, ...events.flat(2)];
};

export const extractMapEventTexts = <UUID>(
  event: ExtractedMapEventTexts,
  mapFileInfo: MapFileInfo<unknown>,
  uuidGen: (text: string) => UUID,
  commandNameFn: (command: TextCommandParameter) => string,
): [
  note: ExtractedMapEventNode<UUID>[],
  commands: ExtractedCommandItem<UUID>[],
] => {
  const pageText = `page:${event.pageIndex + 1}` as const;
  const eventNameText: string = eventName(event);
  const noteItems = event.noteItems.map(
    (note): ExtractedMapEventNode<UUID> => ({
      id: event.eventId,
      filename: mapFileInfo.filename,
      baseText: note.value,
      kind: `note:${note.key}`,
      uuid: uuidGen(note.value),
      dataKey: `note`,
      otherData: [mapFileInfo.editingName, eventNameText, note.key],
    }),
  );
  const commands = event.commands
    .filter(isValidCommandText)
    .map(
      (command): ExtractedCommandItem<UUID> =>
        convertCommandInfo(
          command,
          event.eventId,
          mapFileInfo.filename,
          commandNameFn,
          uuidGen,
          [mapFileInfo.editingName, eventNameText, pageText],
        ),
    );

  return [noteItems, commands];
};

const eventName = (e: ExtractedMapEventTexts): string => {
  const str = e.eventId.toString();
  return `${str.padStart(3, "0")}:${e.name}`;
};
