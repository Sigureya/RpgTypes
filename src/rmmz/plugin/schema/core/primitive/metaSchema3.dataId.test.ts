import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { SourceIdentifier } from "src/namedItemSource";
import { makeSchema3 } from "./metaSchema3";
import type { X_Param_DataId } from "./x-rpg-param";
import type { X_RmmzParam } from "./x-rpg-param2/types";

const makeValidator = () => {
  const schema = makeSchema3();
  const ajv = new Ajv({ discriminator: true, strict: true });
  return ajv.compile(schema);
};

describe("", () => {
  const validator = makeValidator();
  test("", () => {
    const validData: X_Param_DataId = {
      kind: "dataId",
      parent: "",
      data: { author: "a", module: "m", kind: "k" },
    };
    expect(validData).toSatisfy(validator);
  });
  test("", () => {
    const invalidData: X_Param_DataId = {
      kind: "dataId",
      data: { author: "a", module: "m", kind: "k" },
      parent: "",
    };
    expect(invalidData).toSatisfy(validator);
  });
  test("", () => {
    const invalidData: X_Param_DataId = {
      kind: "dataId",
      parent: "p",
      data: { author: "a", module: "m", kind: "k" },
    };
    expect(invalidData).toSatisfy(validator);
  });
  test("", () => {
    const invalidData: X_RmmzParam<
      Pick<SourceIdentifier, "author" | "module">,
      "dataId"
    > = {
      kind: "dataId",
      parent: "p",
      data: { author: "a", module: "m" }, // missing 'kind'
    };
    expect(invalidData).not.toSatisfy(validator);
  });
  test("", () => {
    const invalidData: X_RmmzParam<undefined, "dataId"> = {
      kind: "dataId",
      parent: "p",
      data: undefined,
    };
    expect(invalidData).not.toSatisfy(validator);
  });
  test("", () => {
    const invalidData: X_RmmzParam<string, "dataId"> = {
      kind: "dataId",
      parent: "p",
      data: "a.m.k", // should be SourceIdentifier
    };
    expect(invalidData).not.toSatisfy(validator);
  });
});
