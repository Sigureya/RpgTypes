import { describe, test, expect } from "vitest";
import { Ajv, type JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { StructAnnotation } from "./struct";
import { fnXX } from "./structFn";
interface Person {
  name: string;
  age: number;
}

interface MockType {
  option: string;
  actorData: number;
  weaponsData: number[];
  bool: boolean;
  imageFile: string;
  audioFile: string;
  textData: string;
  person: Person;
  personArray: Person[];
}

const paramAnt: StructAnnotation<MockType> = {
  type: "struct",
  struct: {
    structName: "PPP",
    params: {
      option: {
        type: "select",
        default: "A",

        options: [
          { option: "a", value: "A" },
          { option: "b", value: "B" },
        ],
      },
      actorData: {
        type: "number",
        default: 0,
        text: "対象アクター",
        desc: "効果対象のアクターを決めます",
      },
      weaponsData: {
        type: "number[]",
        default: [1, 2],
        desc: "武器データの配列",
      },
      bool: {
        type: "boolean",
        default: false,
        on: "有効",
        off: "無効",
        parent: "weaponData",
      },
      imageFile: { type: "string", default: "", parent: "actorData" },
      audioFile: { type: "string", default: "" },
      textData: { type: "string", default: "" },
      person: {
        type: "struct",
        struct: {
          structName: "Person",
          params: {
            name: { type: "string", default: "" },
            age: { type: "number", default: 0 },
          },
        },
      },
      personArray: {
        type: "struct[]",
        default: [],
        struct: {
          structName: "Person",
          params: {
            name: { type: "string", default: "" },
            age: { type: "number", default: 0 },
          },
        },
      },
    },
  },
  default: {
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
  const schema = fnXX(paramAnt);
  test("", () => {
    expect(schema).toEqual(personSchemaJson);
  });
  test("StructAnnotation JSON Schema Validation", () => {
    const ajv = new Ajv({ strict: true });
    const validate = ajv.compile(schema);
    const valid = validate(paramAnt.default);
    expect(valid).toBe(true);
  });
});
