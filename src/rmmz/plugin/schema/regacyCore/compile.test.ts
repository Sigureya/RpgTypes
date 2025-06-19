import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import { compile } from "./compile";
import type { CompileLogItem } from "./kinds/compileLog";
import type { PluginTitles } from "./kinds/compileOption";
import type { KindOfStruct } from "./kinds/struct2";
import type { Person, School } from "./mockType";

const titles: PluginTitles = {
  moduleName: "moduleName",
  author: "author",
};

describe("person", () => {
  const personStruct = {
    kind: "struct",
    struct: {
      structName: "Person",
      params: {
        name: { kind: "string", default: "bob" },
        age: { kind: "number", default: 0 },
      },
    },
  } as const satisfies KindOfStruct<Person>;
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
  const result = compile(titles, personStruct, {});
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
    kind: "struct",
    struct: {
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
    },
  } as const satisfies KindOfStruct<School>;
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
    const resultSchool = compile(titles, mockSchoolStruct, {});
    expect(resultSchool.schema).toEqual(mockSchoolSchema);
  });
});
