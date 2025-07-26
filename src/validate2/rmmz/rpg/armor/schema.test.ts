import { test, expect } from "vitest";
import json from "./armor.schema.json";
import { SCHEMA_DATA_ARMMOR } from "./schema";

test("SCHEMA_DATA_ARMMOR matches JSON schema", () => {
  expect(SCHEMA_DATA_ARMMOR).toEqual(json);
});
