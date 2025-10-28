import { test, expect, describe, vi } from "vitest";
import type {
  Command_PluginCommandMZ,
  Data_Map,
  EventCommand,
  MapEvent,
} from "@RpgTypes/rmmz";
import {
  makeEventPageCondition,
  makeMapData,
  PLUGIN_COMMAND_MZ,
  readNote,
} from "@RpgTypes/rmmz";
import type { PluginCommandMzParameter } from "./extract/text/eventCommand";
import type { ExtractedMapEventTexts } from "./extract/text/types";
import { extractMapText } from "./extractEventText";

const createMockMap = (): Data_Map<EventCommand> =>
  makeMapData({
    note: "<warp:x=0 y=0>",
    events: [
      null,
      {
        id: 1,
        name: "Test Event",
        note: "",
        x: 4,
        y: 5,
        pages: [],
      },
    ],
  });

describe("extractMapText", () => {
  test("emptyMap", () => {
    const mockMap: Data_Map<EventCommand> = createMockMap();
    const mockFn = vi.fn(() => []);
    const result = extractMapText(mockMap, mockFn);
    expect(mockFn).not.toHaveBeenCalled();
    expect(result.displayedName).toBe(mockMap.displayName);
    expect(result.note).toBe(mockMap.note);
    expect(result.noteItems).toEqual(readNote(mockMap.note));
    const expectedTexts: ExtractedMapEventTexts[] = [];
    expect(result.events).toEqual(expectedTexts);
  });
  test("withEvents", () => {
    const mockPluginCommand: Command_PluginCommandMZ = {
      code: PLUGIN_COMMAND_MZ,
      indent: 0,
      parameters: ["CommandA", "param1", "", { text: "Hello", value: "123" }],
    };
    const mockEvent: MapEvent<EventCommand> = {
      x: 0,
      y: 0,
      id: 1,
      name: "Event1",
      note: "",
      pages: [
        {
          conditions: makeEventPageCondition(),
          directionFix: false,
          image: {
            characterIndex: 0,
            characterName: "",
            direction: 2,
            pattern: 0,
            tileId: 0,
          },
          list: [mockPluginCommand],
          moveFrequency: 3,
          moveRoute: { list: [], repeat: true, skippable: false, wait: false },
        },
      ],
    };
    const mockMap: Data_Map<EventCommand> = makeMapData({
      note: "<mapNote:abc>",
      displayName: "MyMap",
      events: [null, mockEvent],
    });
    const mockFn = vi.fn<
      (cmd: Command_PluginCommandMZ) => PluginCommandMzParameter[]
    >(() => [{ code: 357, value: "PluginCommand", paramIndex: 0 }]);
    const result = extractMapText(mockMap, mockFn);
    expect(mockFn).toHaveBeenCalledWith(mockPluginCommand);
    expect(mockFn).toHaveBeenCalledTimes(1);
    const expectedTexts: ExtractedMapEventTexts[] = [
      {
        eventId: 1,
        name: "Event1",
        pageIndex: 0,
        commands: [{ code: 357, value: "PluginCommand", paramIndex: 0 }],
        note: "",
        noteItems: [],
      },
    ];
    expect(result.events).toEqual(expectedTexts);
    expect(result.displayedName).toBe(mockMap.displayName);
    expect(result.note).toBe(mockMap.note);
    expect(result.noteItems).toEqual(readNote(mockMap.note));
  });
});
