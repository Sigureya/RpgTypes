import { describe, expect, test } from "vitest";
import { SCHEMA_SYSTEM_TEXTS } from "./schema";
import schema from "./terms.schema.json";

describe("RMMZ System Terms Schema", () => {
  test("should match the JSON schema", () => {
    expect(SCHEMA_SYSTEM_TEXTS).toEqual(schema);
  });
});
