import { test, expect } from "vitest";
import { SCHEMA_DATA_SYSTEM2 } from "./schema";
import json from "./system.schema.json";

test("SCHEMA_DATA_ITEM matches JSON schema", () => {
  expect(SCHEMA_DATA_SYSTEM2).toEqual(json);
});
