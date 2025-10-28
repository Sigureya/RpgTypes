import { test, expect, describe } from "vitest";
import type { Data_Map, EventCommand } from "@RpgTypes/rmmz";
import { makeMapData, readNote } from "@RpgTypes/rmmz";
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
  const mockMap: Data_Map<EventCommand> = createMockMap();
  const result = extractMapText(mockMap);
  test("", () => {
    expect(result.displayedName).toBe(mockMap.displayName);
  });
  test("note", () => {
    expect(result.note).toBe(mockMap.note);
  });
  test("noteItems", () => {
    expect(result.noteItems).toEqual(readNote(mockMap.note));
  });
  test("commands", () => {
    const expected: ExtractedMapEventTexts[] = [];
    expect(result.events).toEqual(expected);
  });
});
