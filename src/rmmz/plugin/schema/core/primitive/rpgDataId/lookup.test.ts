import { describe, expect, test } from "vitest";
import type { SourceIdUnion_RpgData } from "@RpgTypes/rpg";
import type {
  SourceId_SystemSwitches,
  SourceId_SystemVariables,
} from "@RpgTypes/system";
import { lookupKind } from "./lookup";
import type { DataKindUnion } from "./rpgDataTypesNames";

interface TestCase {
  arg: DataKindUnion;
  expected:
    | SourceIdUnion_RpgData
    | SourceId_SystemSwitches
    | SourceId_SystemVariables
    | undefined;
}

const testLookupKind = ({ arg, expected }: TestCase) => {
  describe(`lookupKind(${arg})`, () => {
    const result = lookupKind(arg);
    test("should return correct sourceId", () => {
      expect(result).toEqual(expected);
    });
  });
};

const testCases: TestCase[] = [
  {
    arg: "variable",
    expected: { author: "rmmz", module: "system", kind: "variables" },
  },
  {
    arg: "switch",
    expected: { author: "rmmz", module: "system", kind: "switches" },
  },
  {
    arg: "actor",
    expected: { author: "rmmz", module: "data", kind: "actor" },
  },
  {
    arg: "item",
    expected: { author: "rmmz", module: "data", kind: "item" },
  },
  {
    arg: "weapon",
    expected: { author: "rmmz", module: "data", kind: "weapon" },
  },
  {
    arg: "armor",
    expected: { author: "rmmz", module: "data", kind: "armor" },
  },
  {
    arg: "skill",
    expected: { author: "rmmz", module: "data", kind: "skill" },
  },
  {
    arg: "enemy",
    expected: { author: "rmmz", module: "data", kind: "enemy" },
  },
  {
    arg: "class",
    expected: { author: "rmmz", module: "data", kind: "class" },
  },
  {
    arg: "state",
    expected: { author: "rmmz", module: "data", kind: "state" },
  },
  {
    arg: "troop",
    expected: { author: "rmmz", module: "data", kind: "troop" },
  },
  {
    arg: "common_event",
    expected: { author: "rmmz", module: "data", kind: "common_event" },
  },
  {
    arg: "unknown" as DataKindUnion,
    expected: undefined,
  },
];
testCases.forEach(testLookupKind);
