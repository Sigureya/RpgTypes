import { describe, expect, test } from "vitest";
import type { DropItem, Enemy_Action, Learning, Trait } from "@RpgTypes/rmmz";
import type { PluginStructSchemaArray3 } from "@RpgTypes/rmmz/plugin";
import type { ClassifiedPluginParamsEx } from "@RpgTypes/rmmz/plugin/classifyTypes";
import { JSONPathJS } from "jsonpath-js";
import type { JSONPathType } from "./jsonPathString";
import type { StructPathXX } from "./struct";
import { xxxStruct } from "./struct";
interface Enemy {
  name: string;
  id: number;
  traits: Trait[];
  dropItem: DropItem;
}

interface EnemyAction {
  skillId: number;
  conditions: Condition[];
}

interface Condition {
  code: number;
  value: number;
}

interface MockEvent {
  id: number;
  name: string;
  condition: Condition;
}

describe("Condition", () => {
  const mockCondition = { code: 1, value: 20 } as const satisfies Condition;

  const mockPath = {};
  test.skip("createPath", () => {
    const schema: ClassifiedPluginParamsEx<Condition> = {
      structs: [],
      scalaArrays: [],
      scalas: [
        { name: "code", attr: { kind: "number", default: 0 } },
        { name: "value", attr: { kind: "number", default: 0 } },
      ],
      structArrays: [],
    };
    const result: StructPathXX = xxxStruct(schema, "$");
    expect(result).toEqual(mockPath);
  });
  describe("find", () => {
    test("code", () => {
      const path: JSONPathType<Condition> = "$.code";
      const jsonPath = new JSONPathJS(path);
      const value = jsonPath.find(mockCondition);
      expect(value).toEqual([1]);
    });
    test("value", () => {
      const path: JSONPathType<Condition> = "$.value";
      const jsonPath = new JSONPathJS(path);
      const value = jsonPath.find(mockCondition);
      expect(value).toEqual([20]);
    });
  });
});
