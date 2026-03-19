import { test, expect } from "vitest";
import json from "./class.schema.json";
import { SCHEMA_DATA_CLASS } from "./schema";

test("SCHEMA_DATA_CLASS matches JSON schema", () => {
  expect(SCHEMA_DATA_CLASS).toEqual(json);
});
