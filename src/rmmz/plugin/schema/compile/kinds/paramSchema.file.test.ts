import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { KindOfFile, KindOfFileArray } from "./core/primitiveParams";
import { makeParamSchema } from "./paramSchema";

describe("RmmzParam_File JSON Schema Validation", () => {
  const ajv = new Ajv({ strict: true, discriminator: true });
  const schema = makeParamSchema();
  const validate = ajv.compile(schema);

  describe("valid cases", () => {
    test("validates file parameter with default value", () => {
      const mock: KindOfFile = {
        kind: "file",
        default: "defaultFile.txt",
        text: "File Field",
        dir: "img",
        desc: "A file field",
      };
      expect(mock).toSatisfy(validate);
    });

    test("validates file array parameter with default value", () => {
      const mock: KindOfFileArray = {
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
      const mock: Omit<KindOfFile, "default"> = {
        kind: "file",
        text: "File Field",
        desc: "A file field",
        dir: "img",
      };
      expect(mock).not.toSatisfy(validate);
    });

    test("rejects file array parameter without default value", () => {
      const mock: Omit<KindOfFileArray, "default"> = {
        kind: "file[]",
        text: "File Array Field",
        desc: "A file array field",
        dir: "audio",
      };
      expect(mock).not.toSatisfy(validate);
    });
  });
});
