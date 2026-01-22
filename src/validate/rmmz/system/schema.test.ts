import { test, expect, describe } from "vitest";
import { SCHEMA_DATA_SYSTEM } from "./schema";
import json from "./system.schema.json";

describe("SCHEMA_DATA_SYSTEM2", () => {
  test("SCHEMA_DATA_ITEM matches JSON schema", () => {
    expect(SCHEMA_DATA_SYSTEM).toEqual(json);
  });
});
