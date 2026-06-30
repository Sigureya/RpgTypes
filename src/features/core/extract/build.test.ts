import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import { FILENAME_SYSTEM, makeRawTestDataBundle } from "@RpgTypes/fileio";
import type { FileReadBundle, TestRawDataSource } from "@RpgTypes/fileio";
import type { Data_CommonEvent, Data_Map, Data_Troop } from "@RpgTypes/rmmz";
import {
  createActorControlChars,
  makeTestSystemData,
  readNote,
} from "@RpgTypes/rmmz";
import { buildExtractResult } from "./build";
import type {
  ExtractedMapTexts,
  EventContainerExtractor,
  RmmzTextPropertys,
  SystemKinds,
} from "./text";

const TEST_SOURCE: TestRawDataSource = {
  text: "Text",
  image: "Image",
  audio: "Audio",
  note: "<Target:Text>",
  message: "ok",
  systemText: "SystemText",
  nonReplaceableText: "NON",
  switches: "Switch",
  variables: "Variable",
};

const createBundle = (): FileReadBundle => {
  return {
    data: makeRawTestDataBundle(TEST_SOURCE),
    audioFiles: {
      bgm: new Set<string>(),
      bgs: new Set<string>(),
      me: new Set<string>(),
      se: new Set<string>(),
    },
    imageFiles: {
      characters: new Set<string>(),
      faces: new Set<string>(),
      svEnemy: new Set<string>(),
      svActors: new Set<string>(),
      enemies: new Set<string>(),
      picutures: new Set<string>(),
      tilesets: new Set<string>(),
    },
    otherFiles: {
      movies: new Set<string>(),
    },
    system: {
      message: TEST_SOURCE.systemText,
      system: makeTestSystemData(TEST_SOURCE),
    },
  };
};

const createExtractor2 = (): MockedObject<EventContainerExtractor> => {
  return {
    extractMapTexts: vi.fn((map: Data_Map): ExtractedMapTexts => {
      const events = map.events.flatMap((event) => {
        if (!event) {
          return [];
        }
        return [
          {
            eventId: event.id,
            name: event.name,
            pageIndex: 0,
            commands: [],
            note: event.note,
            noteItems: readNote(event.note),
          },
        ];
      });
      return {
        displayedName: map.displayName,
        note: map.note,
        noteItems: readNote(map.note),
        events,
      };
    }),
    extractBattleText: vi.fn((troop: Data_Troop) => [
      {
        pageIndex: 0,
        eventId: troop.id,
        commands: [],
      },
    ]),
    extractCommonEventText: vi.fn((common: Data_CommonEvent) => ({
      eventId: common.id,
      name: common.name,
      commands: [],
    })),
  };
};

const createKinds = (): SystemKinds => {
  return {
    gameTitle: "kind:gameTitle",
    currencyUnit: "kind:currencyUnit",
    equipTypes: "kind:equipTypes",
    armorTypes: "kind:armorTypes",
    weaponTypes: "kind:weaponTypes",
    elements: "kind:elements",
    skillTypes: "kind:skillTypes",
  };
};

const createTerms = (): RmmzTextPropertys => {
  return {
    description: "kind:description",
    name: "kind:name",
    displayName: "kind:displayName",
    message1: "kind:message1",
    message2: "kind:message2",
    currencyUnit: "kind:currencyUnit",
    equipTypes: "kind:equipTypes",
    armorTypes: "kind:armorTypes",
    weaponTypes: "kind:weaponTypes",
    note: "kind:note",
    nickname: "kind:nickname",
    gameTitle: "kind:gameTitle",
    profile: "kind:profile",
    faceName: "kind:faceName",
    battlerName: "kind:battlerName",
    characterName: "kind:characterName",
    state: {
      message1: "kind:stateMessage1",
      message2: "kind:stateMessage2",
      message3: "kind:stateMessage3",
      message4: "kind:stateMessage4",
    },
  };
};

describe("buildExtractResult", () => {
  describe("result", () => {
    const bundle = createBundle();
    const kinds = createKinds();
    const terms = createTerms();
    test("main", () => {
      const uuidGen = (text: string) => `uuid:${text}`;
      const commandNameFn = () => "command-name";
      const extractor = createExtractor2();

      const result = buildExtractResult(
        bundle,
        [],
        kinds,
        terms,
        uuidGen,
        commandNameFn,
        extractor,
      );

      expect(result.map.some((item) => item.dataKey === "note")).toBe(true);
      expect(result.noteSummaries.length).toBeGreaterThan(0);
      expect(result.commonEvents).toEqual([]);
      expect(result.troops).toEqual([]);
      expect(result.actors).toEqual({
        texts: expect.any(Array),
        controlChars: createActorControlChars(bundle.data.actors.data),
      });
    });
    test("system", () => {
      const uuidGen = (text: string) => `uuid:${text}`;
      const commandNameFn = () => "command-name";
      const extractor = createExtractor2();

      const result = buildExtractResult(
        bundle,
        [],
        kinds,
        terms,
        uuidGen,
        commandNameFn,
        extractor,
      );
      expect(result.system.filename).toBe(FILENAME_SYSTEM);
      expect(result.system.gameTitle).toBe(TEST_SOURCE.systemText);
      result.system.texts.forEach((item) => {
        expect(item.baseText).toBe(TEST_SOURCE.systemText);
      });
    });
  });
  test("call", () => {
    const bundle = createBundle();
    const kinds = createKinds();
    const terms = createTerms();
    const uuidGen = (text: string) => `uuid:${text}`;
    const commandNameFn = () => "command-name";
    const extractor = createExtractor2();

    buildExtractResult(
      bundle,
      [],
      kinds,
      terms,
      uuidGen,
      commandNameFn,
      extractor,
    );

    expect(extractor.extractMapTexts).toHaveBeenCalledTimes(
      bundle.data.mapFiles.validMaps.length,
    );
    bundle.data.mapFiles.validMaps.forEach((mapFile) => {
      expect(extractor.extractMapTexts).toHaveBeenCalledWith(mapFile.map);
    });
    expect(extractor.extractBattleText).toHaveBeenCalledTimes(
      bundle.data.troops.data.length,
    );
    bundle.data.troops.data.forEach((troop) => {
      expect(extractor.extractBattleText).toHaveBeenCalledWith(troop);
    });
    expect(extractor.extractCommonEventText).toHaveBeenCalledTimes(
      bundle.data.commonEvents.data.length,
    );
    bundle.data.commonEvents.data.forEach((common) => {
      expect(extractor.extractCommonEventText).toHaveBeenCalledWith(common);
    });
  });
});
