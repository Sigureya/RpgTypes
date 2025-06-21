import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { rmmzSchemaFilePathParam, rmmzSchemaStringParam } from "./string";
import type { RmmzParamCore_FilePath, RmmzParamCore_String } from "./types";

describe("rmmzSchemaStringParam", () => {
  const ajv = new Ajv({ strict: true });
  const validate = ajv.compile(rmmzSchemaStringParam());

  describe("valid cases", () => {
    test("validates string parameter", () => {
      const mock: RmmzParamCore_String = {
        type: "string",
        default: "default value",
      };
      expect(mock).toSatisfy(validate);
    });

    test("validates multiline string parameter", () => {
      const mock: RmmzParamCore_String = {
        type: "multiline_string",
        default: "default value\nwith newline",
      };
      expect(mock).toSatisfy(validate);
    });
  });
});

describe("rmmzSchemaFilePathParam", () => {
  const ajv = new Ajv({ strict: true });
  const validate = ajv.compile(rmmzSchemaFilePathParam());

  describe("valid cases", () => {
    test("validates file path parameter with directory", () => {
      const mock: RmmzParamCore_FilePath = {
        type: "file",
        default: "default/path/file.txt",
        dir: "default/path/",
      };
      expect(mock).toSatisfy(validate);
    });
  });

  describe("invalid cases", () => {
    test("rejects file path parameter without directory", () => {
      const mock: Omit<RmmzParamCore_FilePath, "dir"> = {
        type: "file",
        default: "file.txt",
      };
      expect(mock).not.toSatisfy(validate);
    });
  });
});
