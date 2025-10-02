import { describe, test, expect } from "vitest";
import type {
  RpgDataIdParam,
  DataKind_RpgUnion,
} from "@RpgTypes/rmmz/plugin/schema/compile";
import Ajv from "ajv";
import { makePluginParamSchema } from "./paramSchema";

const makeDataParam = (param: Partial<RpgDataIdParam>): RpgDataIdParam => {
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
    const schema = makePluginParamSchema();
    const validate = ajv.compile(schema);
    test(`valid case`, () => {
      const mock: RpgDataIdParam = makeDataParam({
        kind: dataKind,
        default: 1,
        text: `${dataKind} Field`,
        desc: `A ${dataKind} field`,
        parent: "parentId",
      });
      expect(mock).toSatisfy(validate);
    });
    test("", () => {
      const mock: RpgDataIdParam = {
        kind: dataKind,
        default: 1,
      };
      expect(mock).toSatisfy(validate);
    });
    test("", () => {
      const mock: RpgDataIdParam = {
        kind: dataKind,
        default: 1,
        desc: undefined,
        text: undefined,
        parent: undefined,
      };
      expect(mock).toSatisfy(validate);
    });
    test("", () => {
      const mock: Record<keyof RpgDataIdParam, unknown> = {
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
