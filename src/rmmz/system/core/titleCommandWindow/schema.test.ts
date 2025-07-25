import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW from "./schema";
import type { TitleCommandWindow } from "./types";
const ajv = new Ajv({ strict: true });
const validate = ajv.compile(SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW);

describe("SCHEMA_SYSTEM_TITLE_COMMAND_WINDOW", () => {
  test("valid TitleCommandWindow passes validation", () => {
    const data: TitleCommandWindow = {
      background: 1,
      offsetX: 0,
      offsetY: 0,
    };
    expect(data).toSatisfy(validate);
  });

  test("missing required property fails validation", () => {
    const data = {
      // background is missing
      offsetX: 0,
      offsetY: 0,
    };
    expect(data).not.toSatisfy(validate);
  });

  test("out of range values fail validation", () => {
    const data: TitleCommandWindow = {
      background: -1, // invalid: below min
      offsetX: 2000, // invalid: above max
      offsetY: -2000, // invalid: below min
    };
    expect(data).not.toSatisfy(validate);
  });

  test("additional properties are not allowed", () => {
    const data = {
      background: 1,
      offsetX: 0,
      offsetY: 0,
      extra: "not allowed",
    };
    expect(data).not.toSatisfy(validate);
  });
});
