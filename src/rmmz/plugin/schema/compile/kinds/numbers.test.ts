import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import type { KindOfNumber, KindOfNumberArray } from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam } from "./core/x-rpg-param";
import {
  makeNumberArrayField,
  makeNumberArrayFieldWithXParam,
  makeNumberField,
  makeNumberFieldWithXparam,
} from "./numbers";

describe("makeNumberField", () => {
  const data: KindOfNumber = {
    kind: "number",
    default: 42,
    desc: "A number field",
    text: "Number Field",
    parent: "parentStruct",
    digit: 0,
  };
  const expectedSchema: JSONSchemaType<number> = {
    type: "integer",
    default: 42,
    title: "Number Field",
    description: "A number field",
  };

  test("should create a number field schema", () => {
    const schema = makeNumberField(data);
    expect(schema).toEqual(expectedSchema);
  });
});

describe("makeNumberArrayField", () => {
  const data: KindOfNumberArray = {
    kind: "number[]",
    default: [1, 2, 3],
    parent: "parentStruct",
    desc: "An array of numbers",
    text: "Number Array Field",
    digit: 0,
  };
  const expectedSchema: JSONSchemaType<number[]> = {
    type: "array",
    items: { type: "integer" },
    default: [1, 2, 3],
    title: "Number Array Field",
    description: "An array of numbers",
  };
  test("should create a number array field schema", () => {
    const schema = makeNumberArrayField(data);
    expect(schema).toEqual(expectedSchema);
  });
});

describe("makeNumberFieldWithXparam", () => {
  const data: KindOfNumber = {
    kind: "number",
    default: 42,
    desc: "A number field with x-rpg-param",
    text: "Number Field with Xparam",
    digit: 0,
  };
  const expectedXParam: JSONSchemaTypeWithRpgParam<number> = {
    type: "integer",
    default: 42,
    title: "Number Field with Xparam",
    description: "A number field with x-rpg-param",
    "x-rpg-param": {
      kind: "number",
      data: { digit: 0 },
    },
  };
  test("should create a number field schema with x-rpg-param", () => {
    const schema = makeNumberFieldWithXparam(data);
    expect(schema).toEqual(expectedXParam);
  });
});

describe("makeNumberArrayFieldWithXParam", () => {
  const data: KindOfNumberArray = {
    kind: "number[]",
    parent: "parentStruct",
    default: [1, 2, 3],
    desc: "An array of numbers with x-rpg-param",
    text: "Number Array Field with Xparam",
    digit: 0,
  };
  const expectedXParam: JSONSchemaTypeWithRpgParam<number[]> = {
    type: "array",
    items: { type: "integer" },
    default: [1, 2, 3],
    title: "Number Array Field with Xparam",
    description: "An array of numbers with x-rpg-param",
    "x-rpg-param": {
      kind: "number[]",
      parent: "parentStruct",
      data: { digit: 0 },
    },
  };
  test("should create a number array field schema with x-rpg-param", () => {
    const schema = makeNumberArrayFieldWithXParam(data);
    expect(schema).toEqual(expectedXParam);
  });
});
