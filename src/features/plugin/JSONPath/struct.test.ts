import { describe, test, expect } from "vitest";
import type { Trait, DropItem } from "@RpgTypes/rmmz";
import type {
  ClassifiedPluginParamsEx,
  ClassifiedPluginParams,
} from "@RpgTypes/rmmz/plugin";
import { extractPluginParamValues } from "./extractValues";
import { createPathFromSchema } from "./struct";
import type {
  ParamJSONPathSturctEx,
  JSONValue,
  ParamJSONPathSturct,
  PluginParamExtractedValue,
} from "./types";

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
  caseName: string;
  schema: ClassifiedPluginParamsEx<T>;
  mock: T;
  paths: ParamJSONPathSturctEx<T>;
  ppValues: PPValue[];
}

interface PPValue {
  name: string;
  value: JSONValue;
  kind: string;
}

const shopTestCase = {
  caseName: "Shop",
  mock: { name: "Shop", items: [58, 66, 81] },
  ppValues: [
    { name: "name", value: "Shop", kind: "string" },
    { name: "items", value: 58, kind: "number[]" },
    { name: "items", value: 66, kind: "number[]" },
    { name: "items", value: 81, kind: "number[]" },
  ],
  schema: {
    structs: [],
    scalaArrays: [{ name: "items", attr: { kind: "number[]", default: [] } }],
    scalas: [{ name: "name", attr: { kind: "string", default: "Shop" } }],
    structArrays: [],
  },
  paths: {
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
} as const satisfies TestCase<Shop>;

const enemyTestCase = {
  caseName: "Enemy",
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
  ppValues: [
    { name: "name", value: "Gobrin", kind: "string" },
    { name: "id", value: 1, kind: "number" },
    { name: "code", value: 11, kind: "number" },
    { name: "dataId", value: 81, kind: "number" },
    { name: "value", value: 123, kind: "number" },
    { name: "kind", value: 1, kind: "number" },
  ],
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
        param: { name: "kind", attr: { kind: "number", default: 0 } },
        path: "$.dropItem.kind",
      },
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

const enemyActionTestCase = {
  caseName: "EnemyAction",
  mock: {
    skillId: 113,
    conditions: [
      { code: 1, value: 20 },
      { code: 2, value: 30 },
    ],
  },
  ppValues: [
    { name: "skillId", value: 113, kind: "number" },
    { name: "code", value: 1, kind: "number" },
    { name: "value", value: 20, kind: "number" },
    { name: "code", value: 2, kind: "number" },
    { name: "value", value: 30, kind: "number" },
  ],
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
} as const satisfies TestCase<EnemyAction>;

const eventTestCase = {
  caseName: "MockEvent",
  mock: { id: 1, name: "Event", condition: { code: 1, value: 20 } },
  ppValues: [
    { name: "id", value: 1, kind: "number" },
    { name: "name", value: "Event", kind: "string" },
    { name: "code", value: 1, kind: "number" },
    { name: "value", value: 20, kind: "number" },
  ],
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
} as const satisfies TestCase<MockEvent>;

const traitTestCase = {
  caseName: "Trait",
  mock: { code: 11, dataId: 81, value: 123 },
  ppValues: [
    { name: "code", value: 11, kind: "number" },
    { name: "dataId", value: 81, kind: "number" },
    { name: "value", value: 123, kind: "number" },
  ],
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
} as const satisfies TestCase<Trait>;

const conditionTestCase = {
  caseName: "Condition",
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
  ppValues: [
    { name: "code", value: 1, kind: "number" },
    { name: "value", value: 20, kind: "number" },
  ],
  paths: {
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
} as const satisfies TestCase<Condition>;

const dropItemTestCase = {
  caseName: "DropItem",
  mock: { kind: 1, dataId: 2, denominator: 3 },
  ppValues: [
    { name: "kind", value: 1, kind: "number" },
    { name: "dataId", value: 2, kind: "number" },
    { name: "denominator", value: 3, kind: "number" },
  ],
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
} as const satisfies TestCase<DropItem>;

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
  //  enemyTestCase,
  enemyActionTestCase,
  eventTestCase,
  traitTestCase,
  dropItemTestCase,
];

describe("structToJsonPath", () => {
  testCases.forEach((testCase) => {
    describe(testCase.caseName, () => {
      test("createPath", () => {
        const structPath: ParamJSONPathSturct = createPathFromSchema(
          testCase.schema,
          "$",
          makeStructMap()
        );
        expect(structPath.scalaArrays).toEqual(testCase.paths.scalaArrays);
        expect(structPath.scalas).toEqual(testCase.paths.scalas);
        expect(structPath.structs).toEqual(testCase.paths.structs);
        expect(structPath.structArrays).toEqual(testCase.paths.structArrays);
        expect(structPath).toEqual(testCase.paths);
      });
      test("extract values", () => {
        const extracted: PluginParamExtractedValue[] = extractPluginParamValues(
          testCase.mock,
          testCase.paths
        );
        const maped = extracted.map(
          (v: PluginParamExtractedValue): PPValue => ({
            name: v.name,
            value: v.value,
            kind: v.param.kind,
          })
        );
        expect(maped).toEqual(testCase.ppValues);
      });
    });
  });
});
