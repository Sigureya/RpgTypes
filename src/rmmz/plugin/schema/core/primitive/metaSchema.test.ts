import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { makeSchema3 } from "./metaSchema3";
import type {
  X_Param_DataId,
  X_Param_Number,
  X_ParamInput_Union,
} from "./x-rpg-param";

interface X_MetaParam_Shared {
  kind: string;
  parent?: string | null;
}

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
    const num: X_Param_Number = {
      kind: "number",
      parent: "parentId",
      data: {
        digit: 2,
      },
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
