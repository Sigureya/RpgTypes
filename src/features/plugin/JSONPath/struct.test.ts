import { describe, expect, test } from "vitest";
import type { DropItem, Trait } from "@RpgTypes/rmmz";
import type {
  ClassifiedPluginParams,
  ClassifiedPluginParamsEx,
} from "@RpgTypes/rmmz/plugin/classifyTypes";
import { createPathFromSchema } from "./struct";
import type { ParamJSONPathSturct, ParamJSONPathSturctEx } from "./types/types";

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
  mock: T;
  paths: ParamJSONPathSturctEx<T>;
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
    scalas: [
      {
        parent: "$",
        param: { name: "name", attr: { kind: "string", default: "Shop" } },
        path: "$.name",
      },
    ],
    scalaArrays: [
      {
        parent: "$",
        param: { name: "items", attr: { kind: "number[]", default: [] } },
        path: "$.items[*]",
      },
    ],
    structArrays: [],
  },
};

const enemyTestCase = {
  mock: {
    name: "Gobrin",
    id: 1,
    traits: [{ code: 11, dataId: 81, value: 123 }],
    dropItem: { kind: 1, dataId: 2, denominator: 3 },
    actions: [
      { skillId: 3, conditions: [{ code: 2, value: 275 }] },
      { skillId: 6, conditions: [{ code: 5, value: 320 }] },
    ],
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
    scalaArrays: [],
    scalas: [
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
      {
        parent: "$",
        param: { name: "dataId", attr: { kind: "number", default: 0 } },
        path: "$.traits[*].dataId",
      },
      {
        parent: "$",
        param: { name: "value", attr: { kind: "number", default: 0 } },
        path: "$.traits[*].value",
      },
      {
        parent: "$",
        param: { name: "skillId", attr: { kind: "number", default: 0 } },
        path: "$.actions[*].skillId",
      },
      {
        parent: "$",
        param: { name: "code", attr: { kind: "number", default: 0 } },
        path: "$.actions[*].conditions[*].code",
      },
      {
        parent: "$",
        param: { name: "value", attr: { kind: "number", default: 0 } },
        path: "$.actions[*].conditions[*].value",
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
  paths: {
    struct: "EnemyAction",
    structs: [],
    scalaArrays: [],
    scalas: [
      {
        parent: "$",
        param: { name: "skillId", attr: { kind: "number", default: 0 } },
        path: "$.skillId",
      },
    ],
    structArrays: [
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
    structArrays: [],
    scalaArrays: [],
    structs: [
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
    scalas: [
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
    structs: [],
    scalaArrays: [],
    structArrays: [],
    scalas: [
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
    structs: [],
    scalaArrays: [],
    structArrays: [],
    scalas: [
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
  paths: {
    struct: "DropItem",
    structs: [],
    scalaArrays: [],
    structArrays: [],
    scalas: [
      {
        parent: "$",
        param: { name: "kind", attr: { kind: "number", default: 0 } },
        path: "$.kind",
      },
      {
        parent: "$",
        param: { name: "dataId", attr: { kind: "number", default: 0 } },
        path: "$.dataId",
      },
      {
        parent: "$",
        param: { name: "denominator", attr: { kind: "number", default: 1 } },
        path: "$.denominator",
      },
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

const testCases = [
  conditionTestCase,
  shopTestCase,
  enemyTestCase,
  enemyActionTestCase,
  eventTestCase,
  traitTestCase,
  dropItemTestCase,
];

describe("structToJsonPath2", () => {
  testCases.forEach((testCase) => {
    test.skip("createPath", () => {
      const structPath = createPathFromSchema(
        testCase.schema,
        "$",
        makeStructMap()
      );
      expect(structPath).toEqual(testCase.paths);
    });
  });
});
