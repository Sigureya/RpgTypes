import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import { SCHEMA_SYSTEM_IMAGE_SIZE } from "./schema";
import type { System_ImageSize } from "./types";

const ajv = new Ajv({ code: { source: true }, strict: true });
const validate = ajv.compile(SCHEMA_SYSTEM_IMAGE_SIZE);
describe("SCHEMA_SYSTEM_IMAGE_SIZE", () => {
  test("valid System_ImageSize passes validation", () => {
    const data: System_ImageSize = {
      tileSize: 48,
      faceSize: 96,
      iconSize: 32,
    };
    expect(data).toSatisfy(validate);
  });

  test("missing required property fails validation", () => {
    const data = {
      tileSize: 48,
      // faceSize is missing
      iconSize: 32,
    };
    expect(data).not.toSatisfy(validate);
  });

  test("out of range values fail validation", () => {
    const data: System_ImageSize = {
      tileSize: -1, // invalid: below min
      faceSize: 96,
      iconSize: 32,
    };
    expect(data).not.toSatisfy(validate);
  });

  test("additional properties are not allowed", () => {
    const data = {
      tileSize: 48,
      faceSize: 96,
      iconSize: 32,
      extra: "not allowed",
    };
    expect(data).not.toSatisfy(validate);
  });
});
