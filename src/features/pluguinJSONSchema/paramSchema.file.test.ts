import { describe, test, expect } from "vitest";
import type {
  FileParam,
  FileArrayParam,
} from "@RpgTypes/rmmz/plugin/schema/compile";
import Ajv from "ajv";
import { makePluginParamSchema } from "./paramSchema";

describe("RmmzParam_File JSON Schema Validation", () => {
  const ajv = new Ajv({
    strict: true,
    discriminator: true,
    code: { source: false },
  });
  const schema = makePluginParamSchema();
  const validate = ajv.compile(schema);

  describe("valid cases", () => {
    test("validates file parameter with default value", () => {
      const mock: FileParam = {
        kind: "file",
        default: "defaultFile.txt",
        text: "File Field",
        dir: "img",
        desc: "A file field",
      };
      expect(mock).toSatisfy(validate);
    });

    test("validates file array parameter with default value", () => {
      const mock: FileArrayParam = {
        kind: "file[]",
        default: ["file1.txt", "file2.txt"],
        text: "File Array Field",
        desc: "A file array field",
        dir: "audio",
      };
      expect(mock).toSatisfy(validate);
    });
  });

  describe("invalid cases", () => {
    test("rejects file parameter without default value", () => {
      const mock: Omit<FileParam, "default"> = {
        kind: "file",
        text: "File Field",
        desc: "A file field",
        dir: "img",
      };
      expect(mock).not.toSatisfy(validate);
    });

    test("rejects file array parameter without default value", () => {
      const mock: Omit<FileArrayParam, "default"> = {
        kind: "file[]",
        text: "File Array Field",
        desc: "A file array field",
        dir: "audio",
      };
      expect(mock).not.toSatisfy(validate);
    });
  });
});
