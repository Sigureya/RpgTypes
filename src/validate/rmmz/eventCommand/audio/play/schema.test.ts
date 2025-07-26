import { test, expect } from "vitest";
import json from "./playAudio.schema.json";
import { SCHEMA_COMMAND_ANY_AUDIO } from "./schema";

test("SCHEMA_COMMAND_ANY_AUDIO matches JSON schema", () => {
  expect(SCHEMA_COMMAND_ANY_AUDIO).toEqual(json);
});
