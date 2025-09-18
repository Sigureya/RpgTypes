import { describe, test, expect } from "vitest";
import type { PrimitiveParam } from "./compile/kinds";
import { paramHasText } from "./hasText";
const stringParams: PrimitiveParam[] = [
  {
    kind: "string",
    default: "abc",
  },
  {
    kind: "multiline_string",
    default: "abc",
  },
  {
    kind: "select",
    default: "a",
    options: [{ option: "apple", value: "a" }],
  },
];

const nonStringParams: PrimitiveParam[] = [
  { kind: "combo", default: "a", options: ["a", "b"] },
  { kind: "number", default: 123 },
  { kind: "boolean", default: true },
  { kind: "file", dir: "audio", default: "bgm" },
  { kind: "actor", default: 1 },
  { kind: "class", default: 1 },
  { kind: "skill", default: 1 },
  { kind: "item", default: 1 },
  { kind: "weapon", default: 1 },
  { kind: "armor", default: 1 },
];

describe("paramHasText", () => {
  describe("returns true for params that can contain text", () => {
    stringParams.forEach((param) => {
      test(`kind: ${param.kind}`, () => {
        expect(param).toSatisfy(paramHasText);
      });
    });
  });
  describe("returns false for params that cannot contain text or are arrays of text", () => {
    nonStringParams.forEach((param) => {
      test(`kind: ${param.kind}`, () => {
        expect(param).not.toSatisfy(paramHasText);
      });
    });
  });
});
