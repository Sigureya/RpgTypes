import { test, expect } from "vitest";
import json from "./mapinfo.schema.json";
import { SCHEMA_DATA_MAPINFO } from "./schema";
test("SCHEMA_DATA_MAPINFO matches JSON schema", () => {
  expect(SCHEMA_DATA_MAPINFO).toEqual(json);
});
