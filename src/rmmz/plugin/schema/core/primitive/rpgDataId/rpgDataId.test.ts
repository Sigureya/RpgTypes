import { describe, test, expect } from "vitest";
import type { SourceId_DataSkill, SourceId_DataWeapon } from "@RpgTypes/rpg";
import type { SourceId_SystemVariables } from "@RpgTypes/system";
import Ajv from "ajv";
import type { SourceIdentifier } from "src/namedItemSource";
import { dataIndexSchema, dataIdMetaParam } from "./rpgDataId";
import type { DataKindUnion } from "./rpgDataTypesNames";
import type {
  RmmzParamCore_Skill,
  RmmzParamCore_Weapon,
  RmmzParamCore_Variable,
  RmmzParamCore_DataId,
} from "./types";

describe("dataIndexSchema validation", () => {
  const ajv = new Ajv({ strict: true });
  const schema = dataIndexSchema();
  const variable = ajv.compile(schema);
  describe("valid cases", () => {
    test("should validate skill type with integer default", () => {
      const mock: RmmzParamCore_Skill = {
        type: "skill",
        default: 3,
      };
      expect(mock).toSatisfy(variable);
    });
    test("should validate weapon type with integer default", () => {
      const mock: RmmzParamCore_Weapon = {
        type: "weapon",
        default: 15,
      };
      expect(mock).toSatisfy(variable);
    });
  });
  describe("invalid cases", () => {
    test("should not validate weapon type with negative default", () => {
      const mock: RmmzParamCore_Weapon = {
        type: "weapon",
        default: -1,
      };
      expect(mock).not.toSatisfy(variable);
    });
    test("should not validate weapon type with float default", () => {
      const mock: RmmzParamCore_Weapon = {
        type: "weapon",
        default: 3.14,
      };
      expect(mock).not.toSatisfy(variable);
    });
  });
});

interface TestCase {
  caseName: string;
  data: RmmzParamCore_DataId<DataKindUnion>;
  expected: SourceIdentifier | undefined;
}

const runTestCases = (testCases: TestCase[]) => {
  testCases.forEach(({ caseName, data, expected }) => {
    describe(caseName, () => {
      const result = dataIdMetaParam(data);
      test("should return the expected meta parameter", () => {
        expect(result).toEqual(expected);
      });
    });
  });
};

describe("dataIdMetaParam meta parameter extraction", () => {
  runTestCases([
    {
      caseName: "returns correct sourceId for skill type",
      data: {
        type: "skill",
        default: 1,
      } satisfies RmmzParamCore_Skill,
      expected: {
        author: "rmmz",
        module: "data",
        kind: "skill",
      } satisfies SourceId_DataSkill,
    },
    {
      caseName: "returns correct sourceId for weapon type",
      data: {
        type: "weapon",
        default: 2,
      } satisfies RmmzParamCore_Weapon,
      expected: {
        author: "rmmz",
        module: "data",
        kind: "weapon",
      } satisfies SourceId_DataWeapon,
    },
    {
      caseName: "returns correct sourceId for variable type",
      data: {
        type: "variable",
        default: 3,
      } satisfies RmmzParamCore_Variable,
      expected: {
        author: "rmmz",
        module: "system",
        kind: "variables",
      } satisfies SourceId_SystemVariables,
    },
    {
      caseName: "returns undefined sourceId for unknown type",
      data: {
        type: "unknownKind" as DataKindUnion,
        default: 0,
      } satisfies RmmzParamCore_DataId<DataKindUnion>,
      expected: {
        author: "rmmz",
        module: "unknown",
        kind: "unknownKind",
      },
    },
    {
      caseName: "returns undefined sourceId for unknown type",
      data: {
        type: "xyz" as DataKindUnion,
        default: 0,
      } satisfies RmmzParamCore_DataId<DataKindUnion>,
      expected: {
        author: "rmmz",
        module: "unknown",
        kind: "xyz",
      },
    },
  ]);
});
