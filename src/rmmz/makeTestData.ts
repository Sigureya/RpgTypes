import type { TestDataSourceWithNote } from "@RpgTypes/libs";
import type {
  CommandUnion_AnyAudio,
  NormalizedEventCommand,
} from "./eventCommand";
import { makeTestAudioCommands } from "./eventCommand";
import { makeTestCommands } from "./eventCommand/makeTestCommands";
import type { Data_Map, MapEventPage } from "./rpg/data/event";
import { makeMapData, makeMapEventPage } from "./rpg/data/event";

export const makeMapDataFromTestDataSource = (
  soruce: TestDataSourceWithNote,
): Data_Map<NormalizedEventCommand> => {
  return makeMapData({
    note: soruce.note,
    displayName: soruce.text,
    bgm: { name: soruce.audio, pan: 0, pitch: 100, volume: 100 },
    bgs: { name: soruce.audio, pan: 0, pitch: 100, volume: 100 },
    battleback1Name: soruce.image,
    battleback2Name: soruce.image,
    parallaxName: soruce.image,
    events: [
      null,
      {
        id: 1,
        name: "",
        note: soruce.note,
        x: 0,
        y: 0,
        pages: [makeSoundPage(soruce), makeTextPage(soruce)],
      },
    ],
  });
};

const makeSoundPage = (
  soruce: TestDataSourceWithNote,
): MapEventPage<CommandUnion_AnyAudio> => {
  return makeMapEventPage({
    image: {
      characterName: soruce.image,
      tileId: 0,
      characterIndex: 0,
      direction: 2,
      pattern: 0,
    },
    list: makeTestAudioCommands(soruce),
  });
};

const makeTextPage = (
  soruce: TestDataSourceWithNote,
): MapEventPage<NormalizedEventCommand> => {
  return makeMapEventPage({
    image: {
      characterIndex: 0,
      characterName: soruce.image,
      tileId: 0,
      direction: 4,
      pattern: 0,
    },
    list: makeTestCommands(soruce),
  });
};
