import { describe, test, expect } from "vitest";
import { Ajv, type JSONSchemaType } from "ajv";
import { compilePrimitiveFiled } from "../compieFiled";
import type { ParamToObject } from "./paramsReduce";
import { reduceParams } from "./paramsReduce";
import type { PrimitiveParams, PrimitiveStructType } from "./pluginScehamType";
import { compileProperties } from "./pluginScehamType";

interface Person {
  age: number;
  name: string;
}

interface Food {
  name: string;
  calories: number;
}

interface MockKnightSchool {
  actor: number;
  armor: number;
  skillArray: number[];
  boolean: boolean;
  string: string;
  strArray: string[];
  number: number;
  numberArray: number[];
  person: Person;
  students: Person[];
}

const mockPersonStruct: PrimitiveStructType<Person> = {
  struct: "Person",
  params: {
    age: { kind: "number", default: 0 },
    name: { kind: "string", default: "" },
  },
};

const mockPersonSchema: JSONSchemaType<Person> = {
  type: "object",
  title: "Person",
  properties: {
    age: { type: "integer", default: 0 },
    name: { type: "string", default: "" },
  },
  required: ["age", "name"],
};

const mockFoodStruct: PrimitiveStructType<Food> = {
  struct: "Food",
  params: {
    name: { kind: "string", default: "" },
    calories: { kind: "number", default: 0 },
  },
};

const mockFoodSchema: JSONSchemaType<Food> = {
  type: "object",
  title: "Food",
  properties: {
    name: { type: "string", default: "" },
    calories: { type: "integer", default: 0 },
  },
  required: ["name", "calories"],
};

const mockSchoolStruct: PrimitiveParams<MockKnightSchool> = {
  actor: { kind: "actor", default: 0 },
  armor: { kind: "armor", default: 0 },
  skillArray: { kind: "skill[]", default: [] },
  boolean: { kind: "boolean", default: false },
  string: { kind: "string", default: "" },
  strArray: { kind: "string[]", default: [] },
  number: { kind: "number", default: 0 },
  numberArray: { kind: "number[]", default: [] },
  person: { kind: "struct", struct: "Person", default: { age: 0, name: "" } },
  students: { kind: "struct[]", struct: "Person", default: [] },
};

const mockSchoolSchema = {
  type: "object",
  properties: {
    actor: { type: "integer", default: 0 },
    armor: { type: "integer", default: 0 },
    skillArray: { type: "array", items: { type: "integer" }, default: [] },
    boolean: { type: "boolean", default: false },
    string: { type: "string", default: "" },
    strArray: { type: "array", items: { type: "string" }, default: [] },
    number: { type: "integer", default: 0 },
    numberArray: { type: "array", items: { type: "integer" }, default: [] },
    person: {
      type: "object",
      $ref: "#/definitions/Person",
    },
    students: {
      type: "array",
      items: {
        type: "object",
        $ref: "#/definitions/Person",
      },
      default: [],
    },
  },
  required: [
    "actor",
    "armor",
    "skillArray",
    "boolean",
    "string",
    "strArray",
    "number",
    "numberArray",
    "person",
    "students",
  ],
  definitions: {
    Person: {
      type: "object",
      properties: {
        age: { type: "integer", default: 0 },
        name: { type: "string", default: "" },
      },
      required: ["age", "name"],
    },
  },
} as const;

const mockSchool: MockKnightSchool = {
  actor: 1,
  armor: 2,
  skillArray: [3, 4],
  boolean: true,
  string: "Knight School",
  strArray: ["Student1", "Student2"],
  number: 42,
  numberArray: [1, 2, 3],
  person: { age: 30, name: "John Doe" },
  students: [
    { age: 20, name: "Alice" },
    { age: 22, name: "Bob" },
  ],
};
describe("", () => {
  test("", () => {
    const ajv = new Ajv({ strict: true });
    const validate = ajv.compile(mockSchoolSchema);
    const valid = validate(mockSchool);
    expect(valid).toBe(true);
  });
});

describe("schema", () => {
  test("varidate", () => {
    const ajv = new Ajv({ strict: true });
    const validate = ajv.compile(mockPersonSchema);
    const valid = validate(mockSchool.person);
    expect(valid).toBe(true);
  });
  test("compile", () => {
    const result = compileProperties(mockPersonStruct, compilePrimitiveFiled);
    expect(result).toEqual(mockPersonSchema);
  });
  test("", () => {
    const xx: ParamToObject<typeof mockPersonStruct.params> = {
      age: 0,
      name: "",
    };
    expect(xx).toEqual({ age: 0, name: "" });
  });
});

describe("compileParams", () => {
  test("compileParams", () => {
    const result = reduceParams(mockPersonStruct.params, compilePrimitiveFiled);
    expect(result).toEqual(mockPersonSchema.properties);
  });
  test("", () => {
    const result = reduceParams(
      {
        f: { kind: "string", default: "test" },
        g: { kind: "struct", struct: "Person", default: { age: 0, name: "" } },
      },
      compilePrimitiveFiled
    );
    expect(result).toEqual({
      f: { type: "string", default: "test" },
      g: { $ref: "#/definitions/Person" },
    });
  });
});
