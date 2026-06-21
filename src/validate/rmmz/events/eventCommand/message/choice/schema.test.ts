import { test, expect } from "vitest";
import json from "./choice.schema.json";
import { SCHEMA_COMMAND_SHOW_CHOICES } from "./schema";

test("SCHEMA_COMMAND_SHOW_CHOICES matches JSON schema", () => {
  expect(SCHEMA_COMMAND_SHOW_CHOICES).toEqual(json);
});
