import { test, expect } from "vitest";
import json from "./enemy.schema.json";
import { SCHEMA_DATA_ENEMY } from "./schema";

test("SCHEMA_DATA_ENEMY matches JSON schema", () => {
  expect(SCHEMA_DATA_ENEMY).toEqual(json);
});
