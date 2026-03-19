import { describe, expect, test } from "vitest";
import type { ItemEffect } from "@RpgTypes/rmmz";
import type { JSONSchemaType } from "ajv";
import { SCHEMA_DATA_ITEM } from "./item/schema";
import { SCHEMA_DATA_SKILL } from "./skill/schema";

const itemEffectSchema: JSONSchemaType<ItemEffect[]> = {
  type: "array",
  items: {
    type: "object",
    properties: {
      code: { type: "integer" },
      dataId: { type: "integer" },
      value1: { type: "number" },
      value2: { type: "number" },
    },
    required: ["code", "dataId", "value1", "value2"],
    additionalProperties: false,
  },
};

describe("itemEffectSchema", () => {
  test("item", () => {
    expect(SCHEMA_DATA_ITEM.properties.effects).toEqual(itemEffectSchema);
  });
  test("skill", () => {
    expect(SCHEMA_DATA_SKILL.properties.effects).toEqual(itemEffectSchema);
  });
});
