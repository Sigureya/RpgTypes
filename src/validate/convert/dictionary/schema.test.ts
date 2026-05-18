import { test, expect } from "vitest";
import json from "./dictionary.schema.json";
import { SCHEMA_RUNTIME_DICTIONARY_DATA } from "./schema";

test("SCHEMA_RUNTIME_DICTIONARY_DATA matches JSON schema", () => {
  expect(SCHEMA_RUNTIME_DICTIONARY_DATA).toEqual(json);
});
