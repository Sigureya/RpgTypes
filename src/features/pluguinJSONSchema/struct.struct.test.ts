import { describe, test, expect } from "vitest";
import type { PluginStructEx } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/pluginEntriesEx";
import type { PluginStructType } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/pluginEntryTypes";
import type { JSONSchemaType } from "ajv";
import type { PluginMeta } from "./meta/compileOption";
import { compilePluginStruct } from "./struct";

const titles: PluginMeta = {
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

describe("compilePluginStruct - person struct", () => {
  const personStruct = {
    struct: "Person",
    params: {
      name: { kind: "string", default: "bob" },
      age: { kind: "number", default: 0 },
    },
  } as const satisfies PluginStructType<Person>;
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
  test("generates correct JSONSchema for Person struct", () => {
    expect(result.schema).toEqual(expected);
  });
  test("logs correct data for each Person property", () => {
    const xxx = result.logs.find(
      (log) => log.path === "moduleName.Person.name"
    );
    expect(xxx?.data).toEqual({ kind: "string", default: "bob" });
    const yyy = result.logs.find((log) => log.path === "moduleName.Person.age");
    expect(yyy?.data).toEqual({ kind: "number", default: 0 });
  });
});

describe("compilePluginStruct - nested struct", () => {
  const mockSchoolStruct = {
    struct: "School",
    params: {
      name: { kind: "string", default: "My School" },

      students: {
        default: [],
        kind: "struct_def[]",
        struct: "Person",
        params: {
          name: { kind: "string", default: "bob" },
          age: { kind: "number", default: 0 },
        },
      },
    },
  } as const satisfies PluginStructEx<School>;
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
  test("resolves nested struct correctly", () => {
    const resultSchool = compilePluginStruct(titles, mockSchoolStruct, {});
    expect(resultSchool.schema).toEqual(mockSchoolSchema);
  });
});
