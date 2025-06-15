import { describe, test, expect } from "vitest";
import type { SourceId_DataSkill, SourceId_DataWeapon } from "@RpgTypes/rpg";
import type { SourceId_SystemVariables } from "@RpgTypes/system";
import Ajv from "ajv";
import {
  dataIndexSchema,
  makeDataIndexValueSchema,
  dataIdMetaParam,
  metaSchemaDataIdParam,
} from "./rpgDataId";
import type { DataKindUnion } from "./rpgDataTypesNames";
import type {
  RmmzParamCore_Skill,
  RmmzParamCore_Weapon,
  RmmzParamCore_Variable,
  RmmzParamCore_DataId,
  X_MetaParam_DataId,
} from "./types";

describe("", () => {
  const ajv = new Ajv({ strict: true });
  const schema = dataIndexSchema();
  const variable = ajv.compile(schema);
  describe("normal case", () => {
    test("", () => {
      const mock: RmmzParamCore_Skill = {
        type: "skill",
        default: 3,
      };
      expect(mock).toSatisfy(variable);
    });
    test("", () => {
      const mock: RmmzParamCore_Weapon = {
        type: "weapon",
        default: 15,
      };
      expect(mock).toSatisfy(variable);
    });
  });
  describe("error case", () => {
    test("", () => {
      const mock: RmmzParamCore_Weapon = {
        type: "weapon",
        default: -1,
      };
      expect(mock).not.toSatisfy(variable);
    });
    test("", () => {
      const mock: RmmzParamCore_Weapon = {
        type: "weapon",
        default: 3.14,
      };
      expect(mock).not.toSatisfy(variable);
    });
  });
});

describe("", () => {
  const mock: RmmzParamCore_Weapon = {
    type: "weapon",
    default: 15,
  };
  const schema = makeDataIndexValueSchema(mock);
  const ajv = new Ajv({ strict: false });
  const validate = ajv.compile(schema);
  test("", () => {
    expect(4).toSatisfy(validate);
  });
  test("", () => {
    expect(0).toSatisfy(validate);
  });
  test("", () => {
    expect(3.14).not.toSatisfy(validate);
  });
  test("", () => {
    expect(-1).not.toSatisfy(validate);
  });
});

interface TestCase {
  caseName: string;
  data: RmmzParamCore_DataId<DataKindUnion>;
  expected: X_MetaParam_DataId;
}

const runTestCases = (testCases: TestCase[]) => {
  const ajv = new Ajv({ strict: true });
  const metaSchema = metaSchemaDataIdParam();
  const validateMetaParam = ajv.compile(metaSchema);

  testCases.forEach(({ caseName, data, expected }) => {
    describe(caseName, () => {
      const result: X_MetaParam_DataId = dataIdMetaParam(data);
      test("", () => {
        expect(result).toEqual(expected);
      });
      test("", () => {
        expect(result).toSatisfy(validateMetaParam);
      });
    });
  });
};

describe("dataIdMetaParam", () => {
  runTestCases([
    {
      caseName: "should return correct sourceId for skill type",
      data: {
        type: "skill",
        default: 1,
      } satisfies RmmzParamCore_Skill,
      expected: {
        sourceId: {
          author: "rmmz",
          module: "data",
          kind: "skill",
        } satisfies SourceId_DataSkill,
      },
    },
    {
      caseName: "should return correct sourceId for weapon type",
      data: {
        type: "weapon",
        default: 2,
      } satisfies RmmzParamCore_Weapon,
      expected: {
        sourceId: {
          author: "rmmz",
          module: "data",
          kind: "weapon",
        } satisfies SourceId_DataWeapon,
      },
    },
    {
      caseName: "should return correct sourceId for variable type",
      data: {
        type: "variable",
        default: 3,
      } satisfies RmmzParamCore_Variable,
      expected: {
        sourceId: {
          author: "rmmz",
          module: "system",
          kind: "variables",
        } satisfies SourceId_SystemVariables,
      },
    },
    {
      caseName: "should return undefined for unknown type",
      data: {
        type: "unknown" as DataKindUnion,
        default: 0,
      } satisfies RmmzParamCore_DataId<DataKindUnion>,
      expected: {
        sourceId: undefined,
      },
    },
  ]);
});
