import { test, expect } from "vitest";
import json from "./actor.schema.json";
import { SCHEMA_DATA_ACTOR } from "./schema";

test("SCHEMA_DATA_ACTOR matches JSON schema", () => {
  expect(SCHEMA_DATA_ACTOR).toEqual(json);
});
