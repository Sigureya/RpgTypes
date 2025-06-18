import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import { compile } from "./compile";
import type { CompileLogItem } from "./kinds/compileLog";
import type { PluginTitles } from "./kinds/compileOption";
import type { KindOfStruct } from "./kinds/struct2";
import type { Family, Person, School } from "./mockType";

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

interface AllDataArray {
  actor: number[];
  weapons: number[];
  armor: number[];
  skill: number[];
  item: number[];
  enemy: number[];
  state: number[];
}

describe("alldataArray", () => {
  const allDataArrayStruct = {
    kind: "struct",
    struct: {
      structName: "AllDataArray",
      params: {
        actor: { kind: "actor[]", default: [1, 2, 3] },
        weapons: { kind: "weapon[]", default: [1, 2, 3] },
        armor: { kind: "armor[]", default: [1, 2, 3] },
        skill: { kind: "skill[]", default: [1, 2, 3] },
        item: { kind: "item[]", default: [1, 2, 3] },
        enemy: { kind: "enemy[]", default: [1, 2, 3] },
        state: { kind: "state[]", default: [1, 2, 3] },
      },
    },
  } as const satisfies KindOfStruct<AllDataArray>;
  const expectedAllDataArraySchema: JSONSchemaType<AllDataArray> = {
    title: "AllDataArray",
    type: "object",
    properties: {
      actor: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
      weapons: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
      armor: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
      skill: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
      item: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
      enemy: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
      state: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
    },
    required: ["actor", "weapons", "armor", "skill", "item", "enemy", "state"],
    additionalProperties: false,
  };
  test("schema", () => {
    const resultAllDataArray = compile(titles, allDataArrayStruct, {});
    expect(resultAllDataArray.schema).toEqual(expectedAllDataArraySchema);
  });
});
