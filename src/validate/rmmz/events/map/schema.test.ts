import { describe, test, expect } from "vitest";
import json from "./map.schema.json";
import { SCHEMA_DATA_MAP } from "./schema";

describe("RMMZ Data_Map Schema", () => {
  test("should match the JSON schema file", () => {
    expect(SCHEMA_DATA_MAP).toEqual(json);
  });
});
