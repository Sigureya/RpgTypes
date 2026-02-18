import { test, expect, describe } from "vitest";
import { SCHEMA_DATA_SYSTEM_MV } from "./schemaMV";
import json from "./systemMV.schema.json";

describe("SCHEMA_DATA_SYSTEM_MV", () => {
  test("matches JSON schema", () => {
    expect(SCHEMA_DATA_SYSTEM_MV).toEqual(json);
  });
});
