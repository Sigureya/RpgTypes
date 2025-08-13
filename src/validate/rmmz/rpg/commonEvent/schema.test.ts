import { test, expect } from "vitest";
import json from "./commonEvent.schema.json";
import { SCHEMA_DATA_COMMON_EVENT } from "./schema";

test("SCHEMA_DATA_COMMON_EVENT matches JSON schema", () => {
  expect(SCHEMA_DATA_COMMON_EVENT).toEqual(json);
});
