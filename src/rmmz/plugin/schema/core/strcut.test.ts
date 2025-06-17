import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import type { StructAnnotation } from "./struct";
interface Person {
  name: string;
  age: number;
}

type PersonSchema = StructAnnotation<Person>;
const personRmmzSchema: PersonSchema = {
  type: "struct",
  struct: {
    structName: "Person",
    params: {
      name: {
        type: "string",
        desc: "人物の名前を表します",
        text: "名前",
        default: "",
      },
      age: {
        min: 0,
        desc: "人物の年齢を表します",
        text: "年齢",
        type: "number",
        default: 0,
      },
    },
  },
};

const personSchemaJson: JSONSchemaType<Person> = {
  type: "object",
  properties: {
    name: {
      title: "名前",
      description: "人物の名前を表します",
      type: "string",
      default: "",
    },
    age: {
      title: "年齢",
      description: "人物の年齢を表します",
      type: "number",
      default: 0,
    },
  },
  required: ["name", "age"],
  additionalProperties: false,
};

test.skip("", () => {});
