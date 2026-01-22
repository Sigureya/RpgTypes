import { describe, test, expect } from "vitest";
import type { EditorSettings } from "@RpgTypes/rmmz";
import Ajv from "ajv";
import { SCHEMA_SYSTEM_EDITOR_SETTINGS } from "./editorSetting";

const ajv = new Ajv({ strict: true });
const validateSettings = ajv.compile(SCHEMA_SYSTEM_EDITOR_SETTINGS);

describe("SCHEMA_SYSTEM_EDITOR_SETTINGS", () => {
  test("valid EditorSettings passes validation", () => {
    const data: EditorSettings = {
      messageWidth1: 500,
      messageWidth2: 600,
      jsonFormatLevel: 2,
    };
    expect(data).toSatisfy(validateSettings);
  });

  test("missing required property fails validation", () => {
    const data = {
      messageWidth1: 500,
      messageWidth2: 600,
      // jsonFormatLevel is missing
    };
    expect(data).not.toSatisfy(validateSettings);
  });

  test("out of range values fail validation", () => {
    const data: EditorSettings = {
      messageWidth1: -1, // invalid: below min
      messageWidth2: 2000, // invalid: above max
      jsonFormatLevel: 5, // invalid: above max
    };
    expect(data).not.toSatisfy(validateSettings);
  });

  test("additional properties are not allowed", () => {
    const data = {
      messageWidth1: 500,
      messageWidth2: 600,
      jsonFormatLevel: 2,
      extra: "not allowed",
    };
    expect(data).not.toSatisfy(validateSettings);
  });
});
