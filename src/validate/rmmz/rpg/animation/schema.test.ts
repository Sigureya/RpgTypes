import { test, expect } from "vitest";
import json from "./animation.schema.json";
import { SCHEMA_DATA_ANIMATION } from "./schema";

test("SCHEMA_DATA_ANIMATION matches JSON schema", () => {
  expect(SCHEMA_DATA_ANIMATION).toEqual(json);
});
