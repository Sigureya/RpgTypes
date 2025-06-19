import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import { compilePluginStruct } from "./compile";
import type { CompileLogItem } from "./kinds/compileLog";
import type { PluginTitles } from "./kinds/compileOption";
import type { PluginStruct } from "./kinds/struct2";

const titles: PluginTitles = {
  moduleName: "moduleName",
  author: "author",
};
interface Person {
  name: string;
  age: number;
}

interface School {
  name: string;
  students: Person[];
}

describe("person", () => {
  const personStruct = {
    structName: "Person",
    params: {
      name: { kind: "string", default: "bob" },
      age: { kind: "number", default: 0 },
    },
  } as const satisfies PluginStruct<Person>;
  const expected: JSONSchemaType<Person> = {
    title: "Person",
    type: "object",
    properties: {
      name: { type: "string", default: "bob" },
      age: { type: "integer", default: 0 },
    },
    required: ["name", "age"],
    additionalProperties: false,
  };
  const result = compilePluginStruct(titles, personStruct, {});
  test("schema", () => {
    expect(result.schema).toEqual(expected);
  });
  test("", () => {
    expect(result.logs).toContainEqual({
      path: "moduleName.Person.name",
      data: { kind: "string", default: "bob" },
    } satisfies CompileLogItem);
    expect(result.logs).toContainEqual({
      path: "moduleName.Person.age",
      data: { kind: "number", default: 0 },
    } satisfies CompileLogItem);
  });
});

describe("school", () => {
  const mockSchoolStruct = {
    structName: "School",
    params: {
      name: { kind: "string", default: "My School" },

      students: {
        default: [],
        kind: "struct[]",
        struct: {
          structName: "Person",
          params: {
            name: { kind: "string", default: "bob" },
            age: { kind: "number", default: 0 },
          },
        },
      },
    },
  } as const satisfies PluginStruct<School>;
  const mockSchoolSchema: JSONSchemaType<School> = {
    type: "object",
    title: "School",
    properties: {
      name: { type: "string", default: "My School" },
      students: {
        type: "array",
        items: {
          type: "object",
          title: "Person",
          properties: {
            name: { type: "string", default: "bob" },
            age: { type: "integer", default: 0 },
          },
          required: ["name", "age"],
          additionalProperties: false,
        },
        default: [],
      },
    },
    required: ["name", "students"],
    additionalProperties: false,
  };
  test("schema", () => {
    const resultSchool = compilePluginStruct(titles, mockSchoolStruct, {});
    expect(resultSchool.schema).toEqual(mockSchoolSchema);
  });
});
