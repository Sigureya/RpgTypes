import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { SourceIdentifier } from "src/namedItemSource";
import type {
  X_Param_DataId,
  X_Param_DataIdInput,
  X_ParamInput_Union,
} from "../../core/primitive/x-rpg-param";
import type { X_RmmzParam } from "./core/paramBase/x-rpg-param";
import { makeSchema3 } from "./x-rpg-param-schema";

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
    const invalidData: X_Param_DataIdInput = {
      kind: "dataId",
      data: { author: "a", module: "m", kind: "k" },
    };
    expect(invalidData).toSatisfy(validator);
  });
  test.skip("", () => {
    const invalidData: X_Param_DataIdInput = {
      kind: "dataId",
      data: { author: "a", module: "m", kind: "k" },
      parent: null,
    };
    expect(invalidData).toSatisfy(validator);
  });
  test.skip("", () => {
    const invalidData: X_Param_DataIdInput = {
      kind: "dataId",
      data: { author: "a", module: "m", kind: "k" },
      parent: undefined,
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
});

describe("DataId Schema Tests", () => {
  test("", () => {
    const validate = makeValidator();
    const dataId: Partial<X_Param_DataId> = {
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
    const dataId: X_ParamInput_Union = {
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
