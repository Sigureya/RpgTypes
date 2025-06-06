import { describe, test, expect } from "vitest";
import { getPlaceHolderKeys } from "./rule";
import type { FormatRule } from "./types";

interface ItemEffect {
  value1: number;
  value2: number;
  dataId: number;
  code: number;
}

describe("getPlaceHolderKeys", () => {
  test("with single item mapper and no item mappers", () => {
    const expectedKeys = new Set(["value1", "value2", "name"]);
    const mockRule: FormatRule<ItemEffect, number> = {
      placeHolders: ["value1", "value2"],
      itemMapper: {
        placeHolder: "name",
        dataIdKey: "dataId",
        kindKey: "code",
        map: [{ kindId: 5, sourceId: 8 }],
      },
      itemMappers: [],
    };
    const keys = getPlaceHolderKeys(mockRule);
    expect(keys).toEqual(expectedKeys);
  });
  test("with multiple item mappers", () => {
    const expectedKeys = new Set(["value1", "value2", "name1", "name2"]);
    const mockRule: FormatRule<ItemEffect, string> = {
      placeHolders: ["value1", "value2"],
      itemMapper: {
        placeHolder: "name1",
        dataIdKey: "dataId",
        kindKey: "code",
        map: [{ kindId: 5, sourceId: "abc" }],
      },
      itemMappers: [
        {
          placeHolder: "name2",
          dataIdKey: "dataId",
          kindKey: "code",
          map: [{ kindId: 200, sourceId: "xyz" }],
        },
      ],
    };
    const keys = getPlaceHolderKeys(mockRule);
    expect(keys).toEqual(expectedKeys);
  });
});
