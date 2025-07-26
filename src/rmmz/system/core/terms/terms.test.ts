import { describe, expect, test } from "vitest";
import type { Data_NamedItem } from "@RpgTypes/libs";
import { getParamNames } from "./terms";
import type { System_Terms_Params } from "./types";

const system = {
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
} as const satisfies System_Terms_Params;

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
