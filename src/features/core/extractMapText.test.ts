import { test, expect, describe } from "vitest";
import type { Data_Map } from "@RpgTypes/rmmz";
import { makeMapData, makeMapEvent, readNote } from "@RpgTypes/rmmz";
import type { ExtractedMapEventTexts } from "./extractMapText";
import { extractMapText } from "./extractMapText";

const createMockMap = () =>
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
  const mockMap: Data_Map = createMockMap();
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
