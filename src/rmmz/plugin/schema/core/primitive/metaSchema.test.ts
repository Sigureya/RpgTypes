import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type {
  X_MetaParam_Boolean,
  X_MetaParam_Number,
  X_MetaParamUnion,
  X_MetaParam_DataId,
} from "./metaSchema";
import { makeUnionSchema } from "./metaSchema";
import type { X_MetaParam_Shared } from "./metaTextField";

const makeValidator = () => {
  const schema = makeUnionSchema();
  const ajv = new Ajv({ strict: true });
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

describe("Union Schema Tests", () => {
  test("", () => {
    const validate = makeValidator();
    const bool: X_MetaParam_Boolean = {
      kind: "boolean",
      data: {
        on: "on",
        off: "off",
      },
    };
    expect(bool).toSatisfy(validate);
  });
  test("", () => {
    const validate = makeValidator();
    const bool: X_MetaParamUnion = {
      kind: "boolean",
      data: {
        on: "on",
        off: "off",
      },
      parent: "parentId",
    };
    expect(bool).toSatisfy(validate);
  });
  describe("Invalid case", () => {
    const validate = makeValidator();
    test("", () => {
      const invalidBool: Record<keyof X_MetaParam_Boolean, unknown> = {
        kind: "boolean",
        data: {
          on: "on",
          off: 0,
        },
        parent: "parentId",
      };
      expect(invalidBool).not.toSatisfy(validate);
    });
    test("", () => {
      const validate = makeValidator();

      const invalidBool: Partial<Record<keyof X_MetaParam_Boolean, unknown>> = {
        kind: "boolean",
        data: {
          on: "on",
          off: 0,
        },
      };
      expect(invalidBool).not.toSatisfy(validate);
    });
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
    const dataId: X_MetaParam_DataId = {
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
    const dataId: X_MetaParamUnion = {
      kind: "dataId",
      data: undefined,
    };
    expect(dataId).toSatisfy(validate);
  });
});
