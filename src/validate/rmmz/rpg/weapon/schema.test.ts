import { test, expect } from "vitest";
import { SCHEMA_DATA_WEAPON } from "./schema";
import json from "./weapon.schema.json";

test("SCHEMA_DATA_WEAPON matches JSON schema", () => {
  expect(SCHEMA_DATA_WEAPON).toEqual(json);
});
