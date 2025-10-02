import { describe, test, expect } from "vitest";
import type { PluginStructEx } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/pluginEntriesEx";
import type { PluginStructType } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/pluginEntryTypes";
import type { JSONSchemaType } from "ajv";
import type { PluginMeta } from "./meta/compileOption";
import { compilePluginStruct } from "./struct";

// kind:"number"とは異なる処理が必要。別々に作ること
interface AllData {
  actor: number;
  weapons: number;
  armor: number;
  skill: number;
  item: number;
  enemy: number;
  state: number;
}
const titles: PluginMeta = {
  moduleName: "moduleName",
  author: "author",
};

describe("compilePluginStruct - RPG data fields with text", () => {
  const allDataStruct = {
    struct: "AllData",
    params: {
      actor: {
        kind: "actor",
        default: 0,
        desc: "actor desc",
        text: "actor text",
      },
      weapons: { kind: "weapon", default: 0, text: "weapon text", desc: "" },
      armor: { kind: "armor", default: 0, desc: "armor desc", text: "" },
      skill: { kind: "skill", default: 0, text: "", desc: "" },
      item: { kind: "item", default: 0, text: "", desc: "" },
      enemy: { kind: "enemy", default: 0, text: "", desc: "" },
      state: { kind: "state", default: 0, text: "", desc: "" },
    },
  } as const satisfies PluginStructType<AllData>;
  const expectedAllDataSchema: JSONSchemaType<AllData> = {
    title: "AllData",
    type: "object",
    properties: {
      actor: {
        type: "integer",
        default: 0,
        title: "actor text",
        description: "actor desc",
      },
      weapons: {
        type: "integer",
        default: 0,
        title: "weapon text",
        description: "",
      },
      armor: {
        type: "integer",
        default: 0,
        description: "armor desc",
        title: "",
      },
      skill: { type: "integer", default: 0, title: "", description: "" },
      item: { type: "integer", default: 0, title: "", description: "" },
      enemy: { type: "integer", default: 0, title: "", description: "" },
      state: { type: "integer", default: 0, title: "", description: "" },
    },
    required: ["actor", "weapons", "armor", "skill", "item", "enemy", "state"],
    additionalProperties: false,
  };
  test("generates correct JSONSchema for RPG data fields with text", () => {
    const resultAllData = compilePluginStruct(titles, allDataStruct, {});
    expect(resultAllData.schema).toEqual(expectedAllDataSchema);
  });
  describe("log", () => {
    const resultAllData = compilePluginStruct(titles, allDataStruct, {});
    const map = new Map(
      resultAllData.logs.map((log) => {
        return [log.path, log.data] as const;
      })
    );
    test("logs correct data for actor field", () =>
      expect(map.get("moduleName.AllData.actor")).toEqual({
        kind: "actor",
        default: 0,
        desc: "actor desc",
        text: "actor text",
      }));
    test("logs correct data for armor field", () => {
      expect(map.get("moduleName.AllData.armor")).toEqual({
        kind: "armor",
        default: 0,
        desc: "armor desc",
        text: "",
      });
    });
  });
});

describe("compilePluginStruct - RPG data fields without text", () => {
  const allDataStruct = {
    struct: "AllData",
    params: {
      actor: {
        kind: "actor",
        default: 0,
      },
      weapons: { kind: "weapon", default: 0 },
      armor: { kind: "armor", default: 0 },
      skill: { kind: "skill", default: 0 },
      item: { kind: "item", default: 0 },
      enemy: { kind: "enemy", default: 0 },
      state: { kind: "state", default: 0 },
    },
  } as const satisfies PluginStructEx<AllData>;
  const expectedAllDataSchema = {
    title: "AllData",
    type: "object",
    properties: {
      actor: {
        type: "integer",
        default: 0,
      },
      weapons: {
        type: "integer",
        default: 0,
      },
      armor: {
        type: "integer",
        default: 0,
      },
      skill: { type: "integer", default: 0 },
      item: { type: "integer", default: 0 },
      enemy: { type: "integer", default: 0 },
      state: { type: "integer", default: 0 },
    },
    required: ["actor", "weapons", "armor", "skill", "item", "enemy", "state"],
    additionalProperties: false,
  } as const satisfies JSONSchemaType<AllData>;
  test("generates correct JSONSchema for RPG data fields without text", () => {
    const resultAllData = compilePluginStruct(titles, allDataStruct, {});
    expect(resultAllData.schema).toEqual(expectedAllDataSchema);
  });
});
