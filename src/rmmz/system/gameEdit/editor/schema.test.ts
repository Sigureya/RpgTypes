import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import {
  SCHEMA_SYSTEM_EDITOR_SETTINGS,
  SCHEMA_SYSTEM_EDITOR_SETTINGS_LABELS,
} from "./schema";
import type { EditorSettings, EditorSettingLables } from "./types";

const ajv = new Ajv();
const validateSettings = ajv.compile(SCHEMA_SYSTEM_EDITOR_SETTINGS);
const validateLabels = ajv.compile(SCHEMA_SYSTEM_EDITOR_SETTINGS_LABELS);

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

describe("SCHEMA_SYSTEM_EDITOR_SETTINGS_LABELS", () => {
  test("valid EditorSettingLables passes validation", () => {
    const data: EditorSettingLables = {
      messageWidth1: "Width 1",
      messageWidth2: "Width 2",
      jsonFormatLevel: "Format Level",
    };
    expect(data).toSatisfy(validateLabels);
  });

  test("missing required property fails validation", () => {
    const data = {
      messageWidth1: "Width 1",
      messageWidth2: "Width 2",
      // jsonFormatLevel is missing
    };
    expect(data).not.toSatisfy(validateLabels);
  });

  test("non-string property fails validation", () => {
    const data = {
      messageWidth1: "Width 1",
      messageWidth2: 123, // invalid: not a string
      jsonFormatLevel: "Format Level",
    };
    expect(data).not.toSatisfy(validateLabels);
  });

  test("additional properties are not allowed", () => {
    const data = {
      messageWidth1: "Width 1",
      messageWidth2: "Width 2",
      jsonFormatLevel: "Format Level",
      extra: "not allowed",
    };
    expect(data).not.toSatisfy(validateLabels);
  });
});
