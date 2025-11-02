import { describe, expect, test } from "vitest";
import type { SourceIdUnion_RpgData } from "@RpgTypes/rmmz/rpg";
import type {
  SourceId_SystemSwitches,
  SourceId_SystemVariables,
} from "@RpgTypes/rmmz/system";
import type { SourceId_RmmzUnknown } from "./lookupRpgDataKind";
import { lookupKind, isRmmzDataKind } from "./lookupRpgDataKind";
import type { DataKind_SystemUnion, DataKind_RpgUnion } from "./types";

interface TestCase {
  arg: DataKind_RpgUnion | DataKind_SystemUnion;
  expected:
    | SourceIdUnion_RpgData
    | SourceId_SystemSwitches
    | SourceId_SystemVariables
    | SourceId_RmmzUnknown;
}

const testLookupKind = ({ arg, expected }: TestCase) => {
  test(`${arg} - should return correct sourceId`, () => {
    const result = lookupKind(arg);
    expect(result).toEqual(expected);
  });
};

const testCases: TestCase[] = [
  {
    arg: "variable",
    expected: { author: "rmmz", module: "system", kind: "variable" },
  },
  {
    arg: "switch",
    expected: { author: "rmmz", module: "system", kind: "switch" },
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
];

const testErrorCases: TestCase[] = [
  {
    arg: "unknownKind" as DataKind_RpgUnion,
    expected: { author: "rmmz", module: "unknown", kind: "unknownKind" },
  },
  {
    arg: "xyz" as DataKind_RpgUnion,
    expected: { author: "rmmz", module: "unknown", kind: "xyz" },
  },
];

describe("lookupKind Tests", () => {
  testCases.forEach((case_) => {
    testLookupKind(case_);
    test(`${case_.arg}`, () => {
      expect(case_.expected).toSatisfy(isRmmzDataKind);
    });
  });
});
testErrorCases.forEach(testLookupKind);
