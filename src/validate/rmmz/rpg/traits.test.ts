import { describe, expect, test } from "vitest";
import { SCHEMA_DATA_WEAPON, type Trait } from "@RpgTypes/rmmz";
import type { JSONSchemaType } from "ajv";
import { SCHEMA_DATA_ACTOR } from "./actor/schema";
import { SCHEMA_DATA_ARMMOR } from "./armor/schema";
import { SCHEMA_DATA_CLASS } from "./class/schema";
import { SCHEMA_DATA_ENEMY } from "./enemy/schema";
import { SCHEMA_DATA_STATE } from "./state/schema";

const traitsSchema: JSONSchemaType<Trait[]> = {
  type: "array",
  items: {
    type: "object",
    properties: {
      code: { type: "integer" },
      dataId: { type: "integer" },
      value: { type: "number" },
    },
    required: ["code", "dataId", "value"],
    additionalProperties: false,
  },
};

describe("traitsSchema", () => {
  test("actor", () => {
    expect(SCHEMA_DATA_ACTOR.properties.traits).toEqual(traitsSchema);
  });
  test("armor", () => {
    expect(SCHEMA_DATA_ARMMOR.properties.traits).toEqual(traitsSchema);
  });
  test("class", () => {
    expect(SCHEMA_DATA_CLASS.properties.traits).toEqual(traitsSchema);
  });
  test("enemy", () => {
    expect(SCHEMA_DATA_ENEMY.properties.traits).toEqual(traitsSchema);
  });
  test("state", () => {
    expect(SCHEMA_DATA_STATE.properties.traits).toEqual(traitsSchema);
  });
  test("weapon", () => {
    expect(SCHEMA_DATA_WEAPON.properties.traits).toEqual(traitsSchema);
  });
});
