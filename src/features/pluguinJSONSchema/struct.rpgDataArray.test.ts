import { describe, test, expect } from "vitest";
import type { PluginStructType } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/pluginEntryTypes";
import type { JSONSchemaType } from "ajv";
import type { PluginMeta } from "./meta/compileOption";
import { compilePluginStruct } from "./struct";

interface AllDataArray {
  actor: number[];
  weapons: number[];
  armor: number[];
  skill: number[];
  item: number[];
  enemy: number[];
  state: number[];
}
const titles: PluginMeta = {
  moduleName: "moduleName",
  author: "author",
};

describe("alldataArray", () => {
  const allDataArrayStruct = {
    struct: "AllDataArray",
    params: {
      actor: { kind: "actor[]", default: [1, 2, 3] },
      weapons: { kind: "weapon[]", default: [1, 2, 3] },
      armor: { kind: "armor[]", default: [1, 2, 3] },
      skill: { kind: "skill[]", default: [1, 2, 3] },
      item: { kind: "item[]", default: [1, 2, 3] },
      enemy: { kind: "enemy[]", default: [1, 2, 3] },
      state: { kind: "state[]", default: [1, 2, 3] },
    },
  } as const satisfies PluginStructType<AllDataArray>;
  const expectedAllDataArraySchema: JSONSchemaType<AllDataArray> = {
    title: "AllDataArray",
    type: "object",
    properties: {
      actor: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
      weapons: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
      armor: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
      skill: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
      item: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
      enemy: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
      state: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
    },
    required: ["actor", "weapons", "armor", "skill", "item", "enemy", "state"],
    additionalProperties: false,
  };
  test("schema", () => {
    const resultAllDataArray = compilePluginStruct(
      titles,
      allDataArrayStruct,
      {}
    );
    expect(resultAllDataArray.schema).toEqual(expectedAllDataArraySchema);
  });
});
