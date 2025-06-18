import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import { compile } from "./compile";
import type { StructAnnotation } from "./kinds";
interface BB {
  bool: boolean;
}

describe("bool", () => {
  const boolStruct = {
    kind: "struct",
    struct: {
      structName: "Bool",
      params: {
        bool: {
          kind: "boolean",
          default: false,
          desc: "bool desc", // descは全てのkindにある。省略されているだけ
          text: "bool text", // textも全てのkindにある。
          off: "off",
          on: "on",
        },
      },
    },
  } as const satisfies StructAnnotation<BB>;
  const expectedBoolSchema: JSONSchemaType<BB> = {
    title: "Bool",
    type: "object",
    properties: {
      bool: {
        type: "boolean",
        default: false,
        title: "bool text",
        description: "bool desc",
      },
    },
    required: ["bool"],
    additionalProperties: false,
  };
  test("schema", () => {
    const resultBool = compile("moduleName", boolStruct, {});
    expect(resultBool.schema).toEqual(expectedBoolSchema);
  });
  test("schema", () => {
    const resultBool = compile("moduleName", boolStruct, {});
    expect(resultBool.logs[0].data).toBe(boolStruct.struct.params.bool);
  });
});
