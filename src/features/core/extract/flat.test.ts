import { describe, expect, test } from "vitest";
import type { ExtractedTextItem } from "@RpgTypes/libs";
import type { Data_Actor } from "@RpgTypes/rmmz";
import { createDuplicateMap, flattenExtractedItems } from "./flat";
import type {
  ExtractedCommandItem,
  ExtractedNoteItem,
  ExtractedSystemTextItem,
  ExtractedTextBundle,
} from "./text";
import type { ExtractedTextFinalWithNotes } from "./types";

const makeItem = <Key extends string>(
  baseText: string,
  id: number,
  dataKey: Key,
): ExtractedTextItem<string, Key> => ({
  filename: "test.json",
  id,
  uuid: `uuid:${id}`,
  baseText,
  kind: "kind",
  dataKey,
});

const makeNoteItem = (
  baseText: string,
  id: number,
): ExtractedNoteItem<string> => ({
  ...makeItem(baseText, id, "note"),
  otherData: ["actor-key"],
});

const makeCommandItem = (
  baseText: string,
  id: number,
): ExtractedCommandItem<string> => ({
  ...makeItem(baseText, id, "code:101"),
});

const makeSystemItem = (
  baseText: string,
  id: number,
): ExtractedSystemTextItem<string> => ({
  ...makeItem(baseText, id, "gameTitle"),
  kind: "kind.gameTitle",
});

const makeBundle = <T>(
  main: ExtractedTextItem<string, Extract<keyof T, string>>[],
  note: ExtractedNoteItem<string>[],
): ExtractedTextBundle<T, string> => ({
  main,
  note,
});

const createData = (): ExtractedTextFinalWithNotes<string> => {
  const actorNote = makeNoteItem("actor-note", 2);

  const troopItem: ExtractedCommandItem<string, [`page:${number}`]> = {
    ...makeItem("troop", 70, "code:101"),
    otherData: ["page:1"],
  };

  return {
    noteSummaries: [],
    system: {
      gameTitle: "game",
      filename: "System.json",
      texts: [makeSystemItem("system", 0)],
    },
    actors: {
      controlChars: [],
      texts: [
        makeBundle<Data_Actor>(
          [makeItem("actor-main", 1, "name")],
          [actorNote],
        ),
      ],
    },
    skills: [],
    items: [],
    weapons: [],
    armors: [],
    classes: [],
    states: [],
    enemies: [],
    commonEvents: [makeCommandItem("common", 50)],
    map: [makeItem("map", 60, "displayName")],
    troops: [troopItem],
    pluginParams: [],
  };
};

describe("createDuplicateMap", () => {
  test("同一 baseText は最初の index を保持する", () => {
    const list: ExtractedTextItem<unknown>[] = [
      { ...makeItem("dup", 1, "name"), uuid: "u1" },
      { ...makeItem("unique", 2, "name"), uuid: "u2" },
      { ...makeItem("dup", 3, "name"), uuid: "u3" },
    ];

    const result = createDuplicateMap(list);

    expect(result.size).toBe(2);
    expect(result.get("dup")).toBe(0);
    expect(result.get("unique")).toBe(1);
  });
});

describe("flattenExtractedItems", () => {
  test("system -> main/note -> common -> map -> troops の順で平坦化する", () => {
    const data = createData();

    const result = flattenExtractedItems(data);

    expect(result.map((x) => x.baseText)).toEqual([
      "system",
      "actor-main",
      "actor-note",
      "common",
      "map",
      "troop",
    ]);
  });
});
