import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import {
  rmmzSchemaComboParam,
  rmmzSchemaFilePathParam,
  rmmzSchemaStringParam,
} from "./string";
import type {
  RmmzParamCore_Combo,
  RmmzParamCore_FilePath,
  RmmzParamCore_String,
} from "./types";

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

describe("rmmzSchemaComboParam", () => {
  const ajv = new Ajv({ strict: true });
  const validate = ajv.compile(rmmzSchemaComboParam());

  describe("valid cases", () => {
    test("validates combo parameter with options", () => {
      const mock: RmmzParamCore_Combo = {
        type: "combo",
        default: "option1",
        options: ["option1", "option2", "option3"],
      };
      expect(mock).toSatisfy(validate);
    });
  });

  describe("invalid cases", () => {
    test("rejects combo parameter without options", () => {
      const mock: Omit<RmmzParamCore_Combo, "options"> = {
        type: "combo",
        default: "option1",
      };
      expect(mock).not.toSatisfy(validate);
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
