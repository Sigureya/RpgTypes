import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type { KindOfRpgDataId } from "./core/primitiveParams";
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

describe("RmmzParam_DataId JSON Schema Validation", () => {
  const ajv = new Ajv({ strict: true, discriminator: true });
  const schema = makeParamSchema();
  const validate = ajv.compile(schema);

  describe("valid cases", () => {
    test("actor", () => {
      const mock: KindOfRpgDataId = makeDataParam({
        kind: "actor",
        default: 1,
      });
      expect(mock).toSatisfy(validate);
    });
    test("item", () => {
      const mock: KindOfRpgDataId = makeDataParam({
        kind: "item",
        default: 2,
      });
      expect(mock).toSatisfy(validate);
    });
    test("skill", () => {
      const mock: KindOfRpgDataId = makeDataParam({
        kind: "skill",
        default: 3,
      });
      expect(mock).toSatisfy(validate);
    });
    test("weapon", () => {
      const mock: KindOfRpgDataId = makeDataParam({
        kind: "weapon",
        default: 4,
      });
      expect(mock).toSatisfy(validate);
    });
    test("armor", () => {
      const mock: KindOfRpgDataId = makeDataParam({
        kind: "armor",
        default: 5,
      });
      expect(mock).toSatisfy(validate);
    });
    test("enemy", () => {
      const mock: KindOfRpgDataId = makeDataParam({
        kind: "enemy",
        default: 6,
      });
      expect(mock).toSatisfy(validate);
    });
    test("state", () => {
      const mock: KindOfRpgDataId = makeDataParam({
        kind: "state",
        default: 7,
      });
      expect(mock).toSatisfy(validate);
    });
    test("class", () => {
      const mock: KindOfRpgDataId = makeDataParam({
        kind: "class",
        default: 1,
      });
      expect(mock).toSatisfy(validate);
    });
    test("common_event", () => {
      const mock: KindOfRpgDataId = makeDataParam({
        kind: "common_event",
        default: 1,
      });
      expect(mock).toSatisfy(validate);
    });
  });

  describe("invalid cases", () => {
    test("rejects dataId parameter without default value", () => {
      const mock: Omit<KindOfRpgDataId, "default"> = {
        kind: "actor",
        text: "Data ID Field",
        desc: "A data ID field",
      };
      expect(mock).not.toSatisfy(validate);
    });

    test("rejects invalid kind", () => {
      const mock: Omit<KindOfRpgDataId, "kind"> = {
        default: 1,
        text: "Invalid Data ID Field",
        desc: "An invalid data ID field",
      };
      expect(mock).not.toSatisfy(validate);
    });
  });
});
