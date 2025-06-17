import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type {
  X_MetaParam_Boolean,
  X_MetaParam_Number,
  X_MetaParamUnion,
} from "./metaSchema";
import { makeSchema3 } from "./metaSchema3";
import type { X_MetaParam_Shared } from "./metaTextField";
import type { X_Param_DataId } from "./x-rpg-param";

const makeValidator = () => {
  const schema = makeSchema3();
  const ajv = new Ajv({ discriminator: true, strict: true });
  return ajv.compile(schema);
};

describe("", () => {
  test("", () => {
    const validate = makeValidator();
    const xx: X_MetaParam_Shared = {
      kind: "string",
      parent: "parentId",
    };
    expect(xx).toSatisfy(validate);
  });
  test("", () => {
    const validate = makeValidator();
    const xx: X_MetaParam_Shared = {
      kind: "multiline_string",
      parent: "parentId",
    };
    expect(xx).toSatisfy(validate);
  });
  test("", () => {
    const validate = makeValidator();
    const xx: X_MetaParam_Shared = {
      kind: "unnknown",
      parent: "parentId",
    };
    expect(xx).not.toSatisfy(validate);
  });
});

describe("Number Schema Tests", () => {
  test("", () => {
    const validate = makeValidator();
    const num: X_MetaParam_Number = {
      kind: "number",
      data: {
        digit: 2,
      },
    };
    expect(num).toSatisfy(validate);
  });
  test("", () => {
    const validate = makeValidator();
    const num: X_MetaParamUnion = {
      kind: "number",
      data: {
        digit: 2,
      },
      parent: "parentId",
    };
    expect(num).toSatisfy(validate);
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
  test.skip("", () => {
    const validate = makeValidator();
    const dataId: X_MetaParamUnion = {
      kind: "dataId",
      data: undefined,
    };
    expect(dataId).toSatisfy(validate);
  });
});
