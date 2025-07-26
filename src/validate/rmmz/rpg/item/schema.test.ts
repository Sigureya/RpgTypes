import { test, expect } from "vitest";
import json from "./item.schema.json";
import { SCHEMA_DATA_ITEM } from "./schema";

test("SCHEMA_DATA_ITEM matches JSON schema", () => {
  expect(SCHEMA_DATA_ITEM).toEqual(json);
});
