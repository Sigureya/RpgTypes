import { describe, expect, test } from "vitest";
import type { EventCommand2 } from "@RpgTypes/rmmz";
import { makeMapData } from "@RpgTypes/rmmz";
import { replaceMapDataTexts } from "./map";
import { replaceNoteTextByMap } from "./utils";

describe("replaceMapDataTexts", () => {
  test("replaces displayName", () => {
    const mapData = makeMapData<EventCommand2>({
      displayName: "Old Name",
      events: [],
    });
    const map = new Map([["Old Name", "New Name"]]);
    const result = replaceMapDataTexts(mapData, map);
    expect(result.displayName).toBe("New Name");
  });
  test("replaces note", () => {
    const mapData = makeMapData<EventCommand2>({
      displayName: "Map",
      note: "<test:foo> and <test:baz> and <test:nochange>",
      events: [],
    });
    const map = new Map([
      ["foo", "bar"],
      ["baz", "qux"],
    ]);
    const result = replaceMapDataTexts(mapData, map);
    const expectedNote = replaceNoteTextByMap({ note: mapData.note }, map);
    expect(result.note).toBe(expectedNote);
  });
});
