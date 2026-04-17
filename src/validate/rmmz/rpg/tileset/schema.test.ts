import { test, expect } from "vitest";
import { SCHEMA_DATA_TILESET } from "./schema";
import json from "./tileset.schema.json";

test("SCHEMA_DATA_TILESET matches JSON schema", () => {
  expect(SCHEMA_DATA_TILESET).toEqual(json);
});
