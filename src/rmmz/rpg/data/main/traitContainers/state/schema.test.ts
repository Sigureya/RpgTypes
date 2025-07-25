import { test, expect } from "vitest";
import { SCHEMA_DATA_STATE } from "./schema";
import json from "./state.schema.json";

test("SCHEMA_DATA_STATE matches JSON schema", () => {
  expect(SCHEMA_DATA_STATE).toEqual(json);
});
