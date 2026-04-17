import { test, expect } from "vitest";
import { SCHEMA_DATA_TROOP } from "./schema";
import json from "./troop.schema.json";

test("SCHEMA_DATA_TROOP matches JSON schema", () => {
  expect(SCHEMA_DATA_TROOP).toEqual(json);
});
