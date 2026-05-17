import { describe, expect, test, vi } from "vitest";
import { FILENAME_SYSTEM, makeRawTestDataBundle } from "@RpgTypes/fileio";
import type { FileReadBundle, TestRawDataSource } from "@RpgTypes/fileio";
import type { Data_CommonEvent, Data_Map, Data_Troop } from "@RpgTypes/rmmz";
import { createActorControlChars, readNote } from "@RpgTypes/rmmz";
import { buildExtractResultWithNotes } from "./build";
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
  };
};

interface ExtractorWithSpies {
  extractor: EventContainerExtractor;
  spies: Pick<
    EventContainerExtractor,
    "extractMapTexts" | "extractBattleText" | "extractCommonEventText"
  >;
}

const createExtractor = (): ExtractorWithSpies => {
  const extractMapTexts = vi.fn((map: Data_Map): ExtractedMapTexts => {
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
  });

  const extractBattleText = vi.fn((troop: Data_Troop) => [
    {
      eventId: troop.id,
      pageIndex: 0,
      commands: [],
    },
  ]);

  const extractCommonEventText = vi.fn((common: Data_CommonEvent) => ({
    eventId: common.id,
    name: common.name,
    commands: [],
  }));

  return {
    extractor: {
      extractMapTexts,
      extractBattleText,
      extractCommonEventText,
    },
    spies: {
      extractMapTexts,
      extractBattleText,
      extractCommonEventText,
    },
  };
};

const createKinds = (): SystemKinds => {
  return {
    gameTitle: "kind:gameTitle",
    currencyUnit: "kind:currencyUnit",
    equipTypes: "kind:equipTypes",
    armorTypes: "kind:armorTypes",
    weaponTypes: "kind:weaponTypes",
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

describe("buildExtractResultWithNotes", () => {
  test("実依存で結果を組み立てる (vi.mock 不使用)", () => {
    const bundle = createBundle();
    const kinds = createKinds();
    const terms = createTerms();
    const uuidGen = (text: string) => `uuid:${text}`;
    const commandNameFn = () => "command-name";
    const { extractor, spies } = createExtractor();

    const result = buildExtractResultWithNotes(
      bundle,
      kinds,
      terms,
      uuidGen,
      commandNameFn,
      extractor,
    );

    expect(spies.extractMapTexts).toHaveBeenCalledTimes(
      bundle.data.mapFiles.validMaps.length,
    );
    expect(spies.extractBattleText).toHaveBeenCalledTimes(
      bundle.data.troops.data.length,
    );
    expect(spies.extractCommonEventText).toHaveBeenCalledTimes(
      bundle.data.commonEvents.data.length,
    );

    expect(result.map.some((item) => item.dataKey === "note")).toBe(true);
    expect(result.noteSummaries.length).toBeGreaterThan(0);
    expect(result.pluginParams).toEqual([]);
    expect(result.commonEvents).toEqual([]);
    expect(result.troops).toEqual([]);
    expect(result.system).toEqual({
      gameTitle: TEST_SOURCE.text,
      filename: FILENAME_SYSTEM,
      texts: expect.any(Array),
    });
    expect(result.actors).toEqual({
      texts: expect.any(Array),
      controlChars: createActorControlChars(bundle.data.actors.data),
    });
  });

  test("system が null の場合は空 system を返し convertSystemTypes を呼ばない", () => {
    const bundle = createBundle();
    bundle.data.system.system = null;
    bundle.data.system.message = "system missing";
    const kinds = createKinds();
    const terms = createTerms();
    const uuidGen = (text: string) => `uuid:${text}`;
    const commandNameFn = () => "command-name";
    const { extractor } = createExtractor();

    const result = buildExtractResultWithNotes(
      bundle,
      kinds,
      terms,
      uuidGen,
      commandNameFn,
      extractor,
    );

    expect(result.system).toEqual({
      gameTitle: "",
      filename: FILENAME_SYSTEM,
      texts: [],
    });
  });
});
