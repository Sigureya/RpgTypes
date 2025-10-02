import { describe, test, expect } from "vitest";
import type { StructDefParam } from "@RpgTypes/rmmz/plugin/schema/compile/kinds/core/pluginEntriesEx";
import type { JSONSchemaType } from "ajv";
import type { StructCompileLogObjectEntry } from "./compileLog";
import { defineStructs } from "./compileLog";

interface Person {
  name: string;
  age: number;
}

interface Animal {
  species: string;
  habitat: string;
}

const mockPerson = {
  structName: "Person",
  data: {
    kind: "struct_def",
    struct: "Person",
    params: {
      name: {
        kind: "string",
        default: "defaultName",
        desc: "Name of the mock struct",
        text: "Mock Struct Name",
      },
      age: {
        kind: "number",
        default: 30,
        desc: "Age of the person",
        text: "Person Age",
      },
    },
  } satisfies StructDefParam<Person>,
  path: "moduleName.MockStruct",
  schema: {
    type: "object",
    title: "Person",
    properties: {
      name: {
        type: "string",
        default: "defaultName",
        title: "Mock Struct Name",
        description: "Name of the mock struct",
      },
      age: {
        type: "number",
        default: 30,
        title: "Person Age",
        description: "Age of the person",
      },
    },
    required: ["name", "age"],
    additionalProperties: false,
  } satisfies JSONSchemaType<Person>,
} as const satisfies StructCompileLogObjectEntry<Person>;

const mockAnimal = {
  path: "moduleName.MockAnimal",
  structName: "Animal",
  data: {
    kind: "struct_def",
    struct: "dummy",
    params: {
      species: {
        kind: "string",
        default: "Lion",
        desc: "Species of the animal",
        text: "Animal Species",
      },
      habitat: {
        kind: "string",
        default: "Savannah",
        desc: "Habitat of the animal",
        text: "Animal Habitat",
      },
    },
  } satisfies StructDefParam<Animal>,

  schema: {
    type: "object",
    title: "dummy",
    properties: {
      species: {
        type: "string",
        default: "Lion",
        title: "Animal Species",
        description: "Species of the animal",
      },
      habitat: {
        type: "string",
        default: "Savannah",
        title: "Animal Habitat",
        description: "Habitat of the animal",
      },
    },
    required: ["species", "habitat"],
    additionalProperties: false,
  } satisfies JSONSchemaType<Animal>,
} as const satisfies StructCompileLogObjectEntry<Animal>;

describe("defineStructs", () => {
  test("should return an object with struct names as keys and schemas as values", () => {
    const result = defineStructs([mockPerson, mockAnimal]);
    expect(result).toEqual({
      Person: mockPerson.schema,
      Animal: mockAnimal.schema,
    });
  });
});
