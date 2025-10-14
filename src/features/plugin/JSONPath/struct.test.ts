import { describe, expect, test } from "vitest";
import type { DropItem, Trait } from "@RpgTypes/rmmz";
import type {
  ClassifiedPluginParams,
  ClassifiedPluginParamsEx,
} from "@RpgTypes/rmmz/plugin/classifyTypes";
import { JSONPathJS } from "jsonpath-js";
import type { JSONPathType } from "./jsonPathString";
import type { StructPathXX } from "./struct";
import { xxxStruct } from "./struct";
import type { ParamJSONPathSturct2 } from "./types";

interface Enemy {
  name: string;
  id: number;
  traits: Trait[];
  dropItem: DropItem;
  actions: EnemyAction[];
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

interface TestCase<T> {
  schema: ClassifiedPluginParamsEx<T>;
  mock?: T;
  paths?: ParamJSONPathSturct2<T>;
}

const enemyTestCase: TestCase<Enemy> = {
  mock: {
    name: "Gobrin",
    id: 1,
    traits: [{ code: 11, dataId: 81, value: 123 }],
    dropItem: { kind: 1, dataId: 2, denominator: 3 },
    actions: [{ skillId: 5, conditions: [{ code: 1, value: 20 }] }],
  },
  schema: {
    scalaArrays: [],
    scalas: [
      { name: "name", attr: { kind: "string", default: "Gobrin" } },
      { name: "id", attr: { kind: "number", default: 1 } },
    ],
    structs: [
      {
        name: "dropItem",
        attr: { kind: "struct", struct: "DropItem" },
      },
    ],
    structArrays: [
      {
        name: "traits",
        attr: { kind: "struct[]", struct: "Trait", default: [] },
      },
      {
        name: "actions",
        attr: { kind: "struct[]", struct: "EnemyAction", default: [] },
      },
    ],
  },
};

const enemyActionTestCase: TestCase<EnemyAction> = {
  mock: {
    skillId: 113,
    conditions: [
      { code: 1, value: 20 },
      { code: 2, value: 30 },
    ],
  },
  schema: {
    structs: [],
    scalaArrays: [],
    scalas: [{ name: "skillId", attr: { kind: "number", default: 0 } }],
    structArrays: [
      {
        name: "conditions",
        attr: { kind: "struct[]", struct: "Condition", default: [] },
      },
    ],
  },
};

const eventTestCase: TestCase<MockEvent> = {
  schema: {
    structs: [
      { name: "condition", attr: { kind: "struct", struct: "Condition" } },
    ],
    scalas: [
      { name: "id", attr: { kind: "number", default: 1 } },
      { name: "name", attr: { kind: "string", default: "Event" } },
    ],
    scalaArrays: [],
    structArrays: [],
  },
};

const traitTestCase: TestCase<Trait> = {
  mock: { code: 11, dataId: 81, value: 123 },
  schema: {
    scalas: [
      { name: "code", attr: { kind: "number", default: 0 } },
      { name: "dataId", attr: { kind: "number", default: 0 } },
      { name: "value", attr: { kind: "number", default: 0 } },
    ],
    structs: [],
    scalaArrays: [],
    structArrays: [],
  },
};

const conditionTestCase: TestCase<Condition> = {
  schema: {
    structs: [],
    scalaArrays: [],
    scalas: [
      { name: "code", attr: { kind: "number", default: 0 } },
      { name: "value", attr: { kind: "number", default: 0 } },
    ],
    structArrays: [],
  },
};

const dropItemTestCase: TestCase<DropItem> = {
  mock: { kind: 1, dataId: 2, denominator: 3 },
  schema: {
    structs: [],
    scalaArrays: [],
    structArrays: [],
    scalas: [
      { name: "kind", attr: { kind: "number", default: 0 } },
      { name: "dataId", attr: { kind: "number", default: 0 } },
      { name: "denominator", attr: { kind: "number", default: 1 } },
    ],
  },
};
const makeStructMap = (): ReadonlyMap<string, ClassifiedPluginParams> => {
  return new Map<string, ClassifiedPluginParams>([
    ["Enemy", enemyTestCase.schema],
    ["Trait", traitTestCase.schema],
    ["Condition", conditionTestCase.schema],
    ["EnemyAction", enemyActionTestCase.schema],
    ["MockEvent", eventTestCase.schema],
    ["DropItem", dropItemTestCase.schema],
  ]);
};

describe("Condition", () => {
  const mockCondition = { code: 1, value: 20 } as const satisfies Condition;

  const mockPath: ParamJSONPathSturct2<Condition> = {
    struct: "Condition",
    scala: [
      {
        parent: "$",
        param: { name: "code", attr: { kind: "number", default: 0 } },
        path: "$.code",
      },
      {
        parent: "$",
        param: { name: "value", attr: { kind: "number", default: 0 } },
        path: "$.value",
      },
    ],
  };
  test.skip("createPath", () => {
    const result: StructPathXX = xxxStruct(
      conditionTestCase.schema,
      "$",
      makeStructMap()
    );
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

describe("EnemyAction", () => {
  const mockEnemyAction = {
    skillId: 5,
    conditions: [
      { code: 1, value: 20 },
      { code: 2, value: 30 },
    ],
  } as const satisfies EnemyAction;
  const mockPath: ParamJSONPathSturct2<EnemyAction> = {
    struct: "EnemyAction",
    scala: [
      {
        parent: "$",
        param: { name: "skillId", attr: { kind: "number", default: 0 } },
        path: "$.skillId",
      },
      {
        parent: "$",
        param: { name: "code", attr: { kind: "number", default: 0 } },
        path: "$.conditions[*].code",
      },
      {
        parent: "$",
        param: { name: "value", attr: { kind: "number", default: 0 } },
        path: "$.conditions[*].value",
      },
    ],
  };

  describe.skip("createPath", () => {
    const enemyActionPath: StructPathXX = xxxStruct(
      enemyActionTestCase.schema,
      "$"
    );
    expect(enemyActionPath).toEqual(mockPath);
  });
  describe("find", () => {
    test("skillId", () => {
      const path: JSONPathType<EnemyAction> = "$.skillId";
      const jsonPath = new JSONPathJS(path);
      const value = jsonPath.find(mockEnemyAction);
      expect(value).toEqual([5]);
    });
    test("conditions[*].code", () => {
      const path: JSONPathType<EnemyAction> = `$.conditions[*].code`;
      const jsonPath = new JSONPathJS(path);
      const value = jsonPath.find(mockEnemyAction);
      expect(value).toEqual([1, 2]);
    });
    test("conditions[*].value", () => {
      const path: JSONPathType<EnemyAction> = `$.conditions[*].value`;
      const jsonPath = new JSONPathJS(path);
      const value = jsonPath.find(mockEnemyAction);
      expect(value).toEqual([20, 30]);
    });
  });
});
