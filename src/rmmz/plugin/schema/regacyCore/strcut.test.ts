import { describe, test, expect } from "vitest";
import { Ajv, type JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import { fnXX } from "./structFn2";
import type { StructAnnotation } from "./types";
interface Person {
  name: string;
  age: number;
}

interface MockType {
  option: string;
  actorData: number;
  numberArray: number[];
  weaponsData: number[];
  bool: boolean;
  imageFile: string;
  audioFile: string;
  textData: string;
  person: Person;
  personArray: Person[];
}

const paramAnt: StructAnnotation<MockType> = {
  kind: "struct",
  struct: {
    structName: "PPP",
    params: {
      numberArray: {
        kind: "number[]",
        default: [1, 2],
        text: "数値の配列",
        desc: "数値の配列です",
        digit: 4,
      },
      option: {
        kind: "select",
        default: "A",

        options: [
          { option: "a", value: "A" },
          { option: "b", value: "B" },
        ],
      },
      actorData: {
        kind: "number",
        default: 0,
        text: "対象アクター",
        desc: "効果対象のアクターを決めます",
      },
      weaponsData: {
        kind: "number[]",
        default: [1, 2],
        text: "武器データの配列",
      },
      bool: {
        kind: "boolean",
        default: false,
        on: "有効",
        off: "無効",
        parent: "weaponData",
      },
      imageFile: { kind: "string", default: "", parent: "actorData" },
      audioFile: { kind: "string", default: "" },
      textData: { kind: "string", default: "" },
      person: {
        kind: "struct",
        struct: {
          structName: "Person",
          params: {
            name: { kind: "string", default: "" },
            age: { kind: "number", default: 0 },
          },
        },
        default: {
          name: "",
          age: 0,
        },
      },
      personArray: {
        kind: "struct[]",
        default: [],
        struct: {
          structName: "Person",
          params: {
            name: { kind: "string", default: "" },
            age: { kind: "number", default: 0 },
          },
        },
      },
    },
  },
  default: {
    numberArray: [1, 2],
    option: "A",
    actorData: 0,
    weaponsData: [],
    bool: false,
    imageFile: "",
    audioFile: "",
    textData: "",
    person: {
      name: "",
      age: 0,
    },
    personArray: [],
  } satisfies MockType,
};

const personSchemaJson = {
  type: "object",
  properties: {
    numberArray: {
      type: "array",
      items: { type: "number" },
      default: [1, 2],
      title: "数値の配列",
      description: "数値の配列です",
    },
    option: { type: "string", default: "A", enum: ["A", "B"] },
    actorData: {
      type: "number",
      default: 0,
      title: "対象アクター",
      description: "効果対象のアクターを決めます",
    },
    weaponsData: {
      type: "array",
      title: "武器データの配列",
      items: { type: "number" },
      default: [1, 2],
    },
    bool: { type: "boolean", default: false },
    imageFile: { type: "string", default: "" },
    audioFile: { type: "string", default: "" },
    textData: { type: "string", default: "" },
    person: {
      type: "object",
      title: "Person",
      properties: {
        name: { type: "string", default: "" },
        age: { type: "number", default: 0 },
      },
      required: ["name", "age"],
      additionalProperties: false,
    },
    personArray: {
      type: "array",
      items: {
        type: "object",
        title: "Person",
        properties: {
          name: { type: "string", default: "" },
          age: { type: "number", default: 0 },
        },
        required: ["name", "age"],
        additionalProperties: false,
      },
      default: [],
    },
  },
  required: [
    "numberArray",
    "option",
    "actorData",
    "weaponsData",
    "bool",
    "imageFile",
    "audioFile",
    "textData",
    "person",
    "personArray",
  ],
  additionalProperties: false,
} satisfies JSONSchemaType<MockType> & Schema;

describe("", () => {
  const result = fnXX(paramAnt);
  test("", () => {
    expect(result.schema).toEqual(personSchemaJson);
  });
  test("StructAnnotation JSON Schema Validation", () => {
    const ajv = new Ajv({ strict: true });
    const validate = ajv.compile(result.schema);
    const valid = validate(paramAnt.default);
    expect(valid).toBe(true);
  });
  test("", () => {
    const ajv = new Ajv({ strict: true });
    const validate = ajv.compile(personSchemaJson);
    const valid = validate(paramAnt.default);
    expect(valid).toBe(true);
  });
});
