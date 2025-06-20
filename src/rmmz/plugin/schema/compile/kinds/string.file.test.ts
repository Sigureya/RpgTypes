import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import type { AnyParamSchema } from "./compie";
import {
  compilePrimitiveFiled,
  compilePrimitiveFiledWithXParam,
} from "./compie";
import type { KindOfFile } from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam } from "./core/x-rpg-param";
import { compileFileField, compileFileFieldWithXparam } from "./string";

describe("File field schema generation", () => {
  describe("Basic", () => {
    const data: KindOfFile = {
      kind: "file",
      default: "defaultFile",
      desc: "A file field",
      text: "File Field",
      dir: "img/faces",
    };
    const expectedSchema: JSONSchemaType<string> = {
      type: "string",
      default: "defaultFile",
      title: "File Field",
      description: "A file field",
    };
    describe("generates schema for KindOfFile", () => {
      test("compileFileField", () => {
        const schema: AnyParamSchema = compileFileField(data);
        expect(schema).toEqual(expectedSchema);
      });
      test("via union dispatcher (compilePrimitiveFiled)", () => {
        const schema: AnyParamSchema = compilePrimitiveFiled(data);
        expect(schema).toEqual(expectedSchema);
      });
    });
  });

  describe("with x-rpg-param", () => {
    const data: KindOfFile = {
      kind: "file",
      default: "defaultFile",
      desc: "A file field with x-rpg-param",
      text: "File Field with Xparam",
      dir: "img/faces",
    };
    const expectedSchema: JSONSchemaTypeWithRpgParam<string> = {
      type: "string",
      default: "defaultFile",
      title: "File Field with Xparam",
      description: "A file field with x-rpg-param",
      "x-rpg-param": {
        kind: "file",
        data: {},
      },
    };
    describe("generates schema for KindOfFile with x-rpg-param", () => {
      test("compileFileFieldWithXparam", () => {
        const schema: AnyParamSchema = compileFileFieldWithXparam(data);
        expect(schema).toEqual(expectedSchema);
      });
      test("via union dispatcher (compilePrimitiveFiledWithXParam)", () => {
        const schema: AnyParamSchema = compilePrimitiveFiledWithXParam(data);
        expect(schema).toEqual(expectedSchema);
      });
    });
  });
});
