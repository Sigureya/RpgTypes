import { test, expect } from "vitest";
import { SCHEMA_DATA_SKILL } from "./schema";
import json from "./skill.schema.json";

test("SCHEMA_DATA_SKILL matches JSON schema", () => {
  expect(SCHEMA_DATA_SKILL).toEqual(json);
});
