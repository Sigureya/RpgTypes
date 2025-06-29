import { describe, expect, test } from "vitest";
import type { ParamSoruceRecord } from "./paramAttributeBuild2";
import { compileAttributes2 } from "./paramAttributeBuild2";
import type { BooleanParam } from "./primitiveParams";

describe("compileAttributes - boolean", () => {
  test("minimum set", () => {
    const tokens: ParamSoruceRecord<BooleanParam> = {
      kind: "boolean",
      default: "true",
    };
    const result = compileAttributes2(tokens);
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
    const result = compileAttributes2(tokens);
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
