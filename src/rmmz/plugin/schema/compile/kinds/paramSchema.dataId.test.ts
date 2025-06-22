import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { KindOfRpgDataId } from "./core/primitiveParams";
import type { DataKind_RpgUnion } from "./core/rpgData/rpgDataTypesNames";
import { makeParamSchema } from "./paramSchema";

const makeDataParam = (param: Partial<KindOfRpgDataId>): KindOfRpgDataId => {
  return {
    kind: param.kind ?? "actor",
    default: param.default ?? 0,
    text: param.text,
    desc: param.desc,
    parent: param.parent,
  };
};

interface TestCase {
  dataKind: DataKind_RpgUnion;
}

const testFn = ({ dataKind }: TestCase) => {
  describe(`${dataKind} JSON Schema Validation`, () => {
    const ajv = new Ajv({ strict: true, discriminator: true });
    const schema = makeParamSchema();
    const validate = ajv.compile(schema);
    test(`valid case`, () => {
      const mock: KindOfRpgDataId = makeDataParam({
        kind: dataKind,
        default: 1,
        text: `${dataKind} Field`,
        desc: `A ${dataKind} field`,
        parent: "parentId",
      });
      expect(mock).toSatisfy(validate);
    });
    test("", () => {
      const mock: KindOfRpgDataId = {
        kind: dataKind,
        default: 1,
      };
      expect(mock).toSatisfy(validate);
    });
    test("", () => {
      const mock: KindOfRpgDataId = {
        kind: dataKind,
        default: 1,
        desc: undefined,
        text: undefined,
        parent: undefined,
      };
      expect(mock).toSatisfy(validate);
    });
    test("", () => {
      const mock: Record<keyof KindOfRpgDataId, unknown> = {
        kind: dataKind,
        default: 1,
        desc: null,
        text: null,
        parent: null,
      };
      expect(mock).toSatisfy(validate);
    });
  });
};
const dataKinds: DataKind_RpgUnion[] = [
  "actor",
  "item",
  "skill",
  "weapon",
  "armor",
  "enemy",
  "state",
  "class",
  "common_event",
];
describe("RmmzParam_DataId JSON Schema Validation", () => {
  dataKinds.forEach((dataKind) => {
    testFn({ dataKind });
  });
});
