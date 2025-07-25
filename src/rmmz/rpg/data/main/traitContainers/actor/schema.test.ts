import { describe, test, expect } from "vitest";
import json from "./actor.schema.json";
import { SCHEMA_DATA_ACTOR } from "./schema";

test("", () => {
  expect(SCHEMA_DATA_ACTOR).toEqual(json);
});
