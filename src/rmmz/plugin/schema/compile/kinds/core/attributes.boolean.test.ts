import { describe, expect, test } from "vitest";
import type { ParamSoruceRecord } from "./attributes";
import { compileAttributes } from "./attributes";
import type { BooleanParam } from "./primitiveParams";

describe("compileAttributes - boolean", () => {
  test("minimum set", () => {
    const tokens: ParamSoruceRecord<BooleanParam> = {
      kind: "boolean",
      default: "true",
    };
    const result = compileAttributes(tokens);
    const expected: BooleanParam = {
      default: true,
      kind: "boolean",
    };
    expect(result).toEqual(expected);
  });

  test("full set", () => {
    const tokens: ParamSoruceRecord<BooleanParam> = {
      kind: "boolean",
      default: "false",
      text: "Enabled?",
      desc: "Is this feature enabled?",
      on: "Yes",
      off: "No",
      parent: "Parent Feature",
    };
    const result = compileAttributes(tokens);
    const expected: BooleanParam = {
      default: false,
      text: "Enabled?",
      desc: "Is this feature enabled?",
      on: "Yes",
      off: "No",
      parent: "Parent Feature",
      kind: "boolean",
    };
    expect(result).toEqual(expected);
  });
});
