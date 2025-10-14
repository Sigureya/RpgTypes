import { describe, expect, test } from "vitest";
import type { DropItem, Trait } from "@RpgTypes/rmmz";
import type {
  ClassifiedPluginParams,
  ClassifiedPluginParamsEx,
} from "@RpgTypes/rmmz/plugin/classifyTypes";
import { JSONPathJS } from "jsonpath-js";
import type { StructPathXX } from "./struct";
import { xxxStruct } from "./struct";
import type { JSONPathType } from "./types/jsonPathString";
import type { ParamJSONPathSturct2 } from "./types/types";

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

interface Shop {
  name: string;
  items: number[];
}

interface TestCase<T> {
  schema: ClassifiedPluginParamsEx<T>;
  mock?: T;
  paths?: ParamJSONPathSturct2<T>;
}

const shopTestCase: TestCase<Shop> = {
  mock: { name: "Shop", items: [58, 66, 81] },
  schema: {
    structs: [],
    scalaArrays: [{ name: "items", attr: { kind: "number[]", default: [] } }],
    scalas: [{ name: "name", attr: { kind: "string", default: "Shop" } }],
    structArrays: [],
  },
  paths: {
    struct: "Shop",
    structs: [],
    scala: [
      {
        parent: "$",
        param: { name: "name", attr: { kind: "string", default: "Shop" } },
        path: "$.name",
      },
    ],
  },
};

const enemyTestCase = {
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
  paths: {
    struct: "Enemy",
    scala: [
      {
        parent: "$",
        param: { name: "name", attr: { kind: "string", default: "Gobrin" } },
        path: "$.name",
      },
      {
        parent: "$",
        param: { name: "id", attr: { kind: "number", default: 1 } },
        path: "$.id",
      },
    ],
    structs: [
      {
        parent: "$",
        path: "$.dropItem.dataId",
        param: { name: "dataId", attr: { kind: "number", default: 0 } },
      },
      {
        parent: "$",
        path: "$.dropItem.denominator",
        param: { name: "denominator", attr: { kind: "number", default: 1 } },
      },
      {
        parent: "$",
        param: { name: "kind", attr: { kind: "number", default: 0 } },
        path: "$.dropItem.kind",
      },
    ],
    structArrays: [
      {
        parent: "$",
        param: { name: "code", attr: { kind: "number", default: 0 } },
        path: "$.traits[*].code",
      },
    ],
  },
} as const satisfies TestCase<Enemy>;

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
  mock: { id: 1, name: "Event", condition: { code: 1, value: 20 } },
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
  paths: {
    struct: "MockEvent",
    scala: [
      {
        parent: "$",
        param: { name: "id", attr: { kind: "number", default: 1 } },
        path: "$.id",
      },
      {
        parent: "$",
        param: { name: "name", attr: { kind: "string", default: "Event" } },
        path: "$.name",
      },
      {
        parent: "$",
        param: { name: "code", attr: { kind: "number", default: 0 } },
        path: "$.condition.code",
      },
      {
        parent: "$",
        param: { name: "value", attr: { kind: "number", default: 0 } },
        path: "$.condition.value",
      },
    ],
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
  paths: {
    struct: "Trait",
    scala: [
      {
        parent: "$",
        param: { name: "code", attr: { kind: "number", default: 0 } },
        path: "$.code",
      },
      {
        parent: "$",
        param: { name: "dataId", attr: { kind: "number", default: 0 } },
        path: "$.dataId",
      },
      {
        parent: "$",
        param: { name: "value", attr: { kind: "number", default: 0 } },
        path: "$.value",
      },
    ],
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
  mock: { code: 1, value: 20 },
  paths: {
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
    ["Shop", shopTestCase.schema],
  ]);
};

const runTestCase = <T>(testCase: TestCase<T>) => {
  describe("createPath", () => {
    const structPath: StructPathXX = xxxStruct(
      testCase.schema,
      "$",
      makeStructMap()
    );
  });
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
