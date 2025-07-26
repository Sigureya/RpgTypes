import { describe, test, expect } from "vitest";
import type { SourceIdentifier } from "@RpgTypes/libs";
import Ajv from "ajv";
import type { X_RmmzParam, X_RmmzParamBase } from "./paramBase/x-rpg-param";
import SCHEMA_RPG_PARAM_META_SCHEMA from "./x-rpg-param.schema";
import type { X_ParamDataId } from "./x-rpg-paramTypes";

const makeValidator = () => {
  const schema = SCHEMA_RPG_PARAM_META_SCHEMA;
  const ajv = new Ajv({
    discriminator: true,
    strict: true,
    code: { source: false },
  });
  return ajv.compile(schema);
};

describe("", () => {
  const validator = makeValidator();
  test("valid dataId param", () => {
    const validData: X_ParamDataId = {
      kind: "dataId",
      parent: "",
      data: { author: "a", module: "m", kind: "k" },
    };
    expect(validData).toSatisfy(validator);
  });
  test("valid dataId param", () => {
    const validData: X_ParamDataId = {
      kind: "dataId",
      data: { author: "a", module: "m", kind: "k" },
    };
    expect(validData).toSatisfy(validator);
  });
  test("", () => {
    const validData: X_ParamDataId = {
      kind: "dataId",
      data: { author: "a", module: "m", kind: "k" },
      parent: null,
    };
    expect(validData).toSatisfy(validator);
  });
  test("", () => {
    const validData: X_ParamDataId = {
      kind: "dataId",
      data: { author: "a", module: "m", kind: "k" },
      parent: undefined,
    };
    expect(validData).toSatisfy(validator);
  });
  test("", () => {
    const invalidData: X_ParamDataId = {
      kind: "dataId",
      parent: "p",
      data: { author: "a", module: "m", kind: "k" },
    };
    expect(invalidData).toSatisfy(validator);
  });
  describe("Invalid DataId Tests", () => {
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
      const invalidData: Record<keyof X_RmmzParamBase, unknown> = {
        kind: "dataId",
        parent: "p",
        data: undefined,
      };
      expect(invalidData).not.toSatisfy(validator);
    });
    test("", () => {
      const invalidData: Record<keyof X_RmmzParamBase, unknown> = {
        kind: "dataId",
        parent: "p",
        data: "a.m.k", // should be SourceIdentifier
      };
      expect(invalidData).not.toSatisfy(validator);
    });
  });
});

describe("DataId Schema Tests", () => {
  test("", () => {
    const validate = makeValidator();
    const dataId: Partial<X_ParamDataId> = {
      kind: "dataId",
      data: {
        author: "author",
        module: "module",
        kind: "kind",
      },
    };
    expect(dataId).toSatisfy(validate);
  });
  test("", () => {
    const validate = makeValidator();
    const dataId: X_ParamDataId = {
      kind: "dataId",
      data: {
        author: "author",
        module: "module",
        kind: "kind",
      },
    };
    expect(dataId).toSatisfy(validate);
  });
});
