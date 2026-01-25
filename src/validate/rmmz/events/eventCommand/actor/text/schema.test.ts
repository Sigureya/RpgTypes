import { test, expect } from "vitest";
import json from "./chageActorText.schema.json";
import { SCHEMA_COMMAND_ACTOR } from "./schema";

test("SCHEMA_COMMAND_ANY_AUDIO matches JSON schema", () => {
  expect(SCHEMA_COMMAND_ACTOR).toEqual(json);
});
