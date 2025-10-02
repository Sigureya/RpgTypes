import { describe, test, expect } from "vitest";
import type { FileParam } from "@RpgTypes/rmmz/plugin/schema/compile";
import type { JSONSchemaType } from "ajv";
import {
  compilePrimitiveField,
  compilePrimitiveFieldWithXParam,
} from "../compileField";
import { compileFileField, compileFileFieldWithXparam } from "./file";
import type { AnyParamSchema } from "./meta/anyParamSchema";
import type { JSONSchemaTypeWithRpgParam } from "./x-param/base/x-rpg-param";
const mockData: FileParam = {
  kind: "file",
  default: "defaultFile",
  desc: "A file field",
  text: "File Field",
  dir: "img/faces",
};

describe("File field schema generation - Basic", () => {
  const expectedSchema: JSONSchemaType<string> = {
    type: "string",
    default: "defaultFile",
    title: "File Field",
    description: "A file field",
  };
  describe("generates schema for KindOfFile", () => {
    test("compileFileField", () => {
      const schema: AnyParamSchema = compileFileField(mockData);
      expect(schema).toEqual(expectedSchema);
    });
    test("via union dispatcher (compilePrimitiveFiled)", () => {
      const schema: AnyParamSchema = compilePrimitiveField(mockData);
      expect(schema).toEqual(expectedSchema);
    });
  });
});

describe("File field schema generation with x-rpg-param", () => {
  const expectedSchema: JSONSchemaTypeWithRpgParam<FileParam> = {
    type: "string",
    default: mockData.default,
    title: mockData.text,
    description: mockData.desc,
    "x-rpg-param": {
      kind: "file",
      data: {
        dir: mockData.dir,
      },
    },
  };
  describe("generates schema for KindOfFile - with x-rpg-param", () => {
    test("compileFileFieldWithXparam", () => {
      const schema: AnyParamSchema = compileFileFieldWithXparam(mockData);
      expect(schema).toEqual(expectedSchema);
    });
    test("via union dispatcher (compilePrimitiveFiledWithXParam)", () => {
      const schema: AnyParamSchema = compilePrimitiveFieldWithXParam(mockData);
      expect(schema).toEqual(expectedSchema);
    });
  });
});
