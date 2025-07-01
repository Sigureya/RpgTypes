import { describe, test, expect } from "vitest";
import Ajv from "ajv";
import type {
  StructRefParam,
  StructArrayRefParam,
} from "./core/primitiveParams";
import { makePluginParamSchema } from "./paramSchema";
const ajv = new Ajv({
  strict: true,
  discriminator: true,
});
const schema = makePluginParamSchema();
const validate = ajv.compile(schema);

interface Person {
  name: string;
  value: number;
}

const invalidStructNames = [
  "struct<Person>",
  ".person",
  "Person.",
  "Person[]",
  "@person",
  "Person@",
];

describe("KindOfStructRef schema validation", () => {
  test("accepts valid KindOfStructRef", () => {
    const validStruct: StructRefParam = {
      kind: "struct",
      default: {
        name: "Alice",
        value: 100,
      } satisfies Person,
      struct: "Person",
    };
    expect(validStruct).toSatisfy(validate);
  });
  test("accepts valid KindOfStructRef", () => {
    const validStruct: StructRefParam = {
      kind: "struct",
      struct: "Person",
    };
    expect(validStruct).toSatisfy(validate);
  });
  describe("", () => {
    test("rejects KindOfStructRef without struct", () => {
      const invalidStruct: Omit<StructRefParam, "struct"> = {
        kind: "struct",
        default: {
          name: "Alice",
          value: 100,
        } satisfies Person,
      };
      expect(invalidStruct).not.toSatisfy(validate);
    });
    test.each(invalidStructNames)("rejects invalid struct name %s", (name) => {
      const invalidStruct: StructRefParam = {
        kind: "struct",
        struct: name,
      };
      expect(invalidStruct).not.toSatisfy(validate);
    });
  });
});

describe("KindOfStructArrayRef schema validation", () => {
  test("accepts valid KindOfStructArrayRef", () => {
    const validArray: StructArrayRefParam = {
      kind: "struct[]",
      default: [
        { name: "Alice", value: 1 },
        { name: "Bob", value: 2 },
      ] satisfies Person[],
      struct: "Person",
    };
    expect(validArray).toSatisfy(validate);
  });
});
