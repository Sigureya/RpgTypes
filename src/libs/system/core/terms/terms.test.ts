import { describe, expect, test } from "vitest";
import type { Data_NamedItem } from "src/namedItemSource";
import type { System_ParamNames } from "src/system/subset";
import { getParamNames } from "./terms";

const system: System_ParamNames = {
  terms: {
    params: [
      "mhp",
      "mmp",
      "atk",
      "def",
      "mat",
      "mdf",
      "agi",
      "luk",
      "hit",
      "eva",
    ],
  },
};

describe("getParamNames", () => {
  test("should return param names", () => {
    const result: Data_NamedItem[] = getParamNames(system);
    const expected: Data_NamedItem[] = [
      { id: 0, name: "mhp" },
      { id: 1, name: "mmp" },
      { id: 2, name: "atk" },
      { id: 3, name: "def" },
      { id: 4, name: "mat" },
      { id: 5, name: "mdf" },
      { id: 6, name: "agi" },
      { id: 7, name: "luk" },
      { id: 8, name: "hit" },
      { id: 9, name: "eva" },
    ];
    expect(result).toEqual(expected);
  });
});
