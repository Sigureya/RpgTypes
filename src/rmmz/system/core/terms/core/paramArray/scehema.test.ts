import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import SCHEMA_SYSTEM_PARAM_NAMS_ARRAY from "./schema";
import type { Terms_ParamNamesArray } from "./types";

const ajv = new Ajv({ strict: true });
const validate = ajv.compile(SCHEMA_SYSTEM_PARAM_NAMS_ARRAY);
describe("SCHEMA_SYSTEM_PARAM_NAMS_ARRAY", () => {
  const array: Terms_ParamNamesArray = [
    "mhp",
    "mmp",
    "atk",
    "def",
    "mat",
    "mdf",
    "agi",
    "luk",
    "hit",
    "eva",
  ];
  test("validates correct array", () => {
    expect(array).toSatisfy(validate);
  });
});
