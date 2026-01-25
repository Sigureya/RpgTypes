import { test, expect, describe } from "vitest";
import { SCHEMA_DATA_SYSTEM } from "./schema";
import json from "./system.schema.json";

describe("SCHEMA_DATA_SYSTEM", () => {
  test("SCHEMA_DATA_ITEM matches JSON schema", () => {
    expect(SCHEMA_DATA_SYSTEM).toEqual(json);
  });
});

interface RequiredAndProperties {
  required: Set<string>;
  properties: Set<string>;
}

const getRequiredPropertySets = (schema: {
  required: ReadonlyArray<string>;
  properties: Record<string, unknown>;
}): RequiredAndProperties => {
  return {
    required: new Set(schema.required),
    properties: new Set(Object.keys(schema.properties)),
  };
};

describe("all properties are required", () => {
  test("System", () => {
    const props = getRequiredPropertySets(SCHEMA_DATA_SYSTEM);
    expect(props.required).toEqual(props.properties);
  });
  test("Audio", () => {
    const props = getRequiredPropertySets(SCHEMA_DATA_SYSTEM.$defs.Audio);
    expect(props.required).toEqual(props.properties);
  });
  test("Vehicle", () => {
    const props = getRequiredPropertySets(SCHEMA_DATA_SYSTEM.$defs.Vehicle);
    expect(props.required).toEqual(props.properties);
  });
  test("System_TestBattler ", () => {
    const props = getRequiredPropertySets(SCHEMA_DATA_SYSTEM.$defs.TestBattler);
    expect(props.required).toEqual(props.properties);
  });
  test("System_AttackMotion", () => {
    const props = getRequiredPropertySets(
      SCHEMA_DATA_SYSTEM.$defs.AttackMotion,
    );
    expect(props.required).toEqual(props.properties);
  });
  test("System_ItemCategories", () => {
    const props = getRequiredPropertySets(
      SCHEMA_DATA_SYSTEM.$defs.TermsMessages,
    );
    expect(props.required).toEqual(props.properties);
  });
});
