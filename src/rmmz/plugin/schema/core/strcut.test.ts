import { describe, test, expect } from "vitest";
import { Ajv, type JSONSchemaType } from "ajv";
import type { StructAnnotation } from "./struct";
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
      },
      weaponsData: { type: "number[]", default: [], desc: "武器データの配列" },
      bool: {
        type: "boolean",
        default: false,
        on: "有効",
        off: "無効",
        parent: "weaponData",
      },
      imageFile: { type: "string", default: "" },
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
        default: [
          { age: 0, name: "alice" },
          { age: 1, name: "bob" },
        ],
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
    option: "",
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

const personSchemaJson: JSONSchemaType<MockType> = {
  type: "object",
  properties: {
    option: { type: "string", default: "" },
    actorData: { type: "number", default: 0 },
    weaponsData: { type: "array", items: { type: "number" }, default: [] },
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
};
describe("", () => {
  test("", () => {
    const ajv = new Ajv();
    const validate = ajv.compile(personSchemaJson);
    test("StructAnnotation JSON Schema Validation", () => {
      const valid = validate(paramAnt.default);
      expect(valid).toBe(true);
    });
  });
});
