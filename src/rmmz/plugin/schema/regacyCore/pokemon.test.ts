import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import type {
  CompileLogItem,
  CompileResult,
  Family,
  Person,
  School,
} from "./mockType";
import { compile } from "./pokemon";
import type { StructAnnotation } from "./types";

describe("person", () => {
  const personStruct: StructAnnotation<Person> = {
    kind: "struct",
    struct: {
      structName: "Person",
      params: {
        name: { kind: "string", default: "bob" },
        age: { kind: "number", default: 0 },
      },
    },
  };
  const expected: JSONSchemaType<Person> = {
    type: "object",
    properties: {
      name: { type: "string", default: "bob" },
      age: { type: "number", default: 0 },
    },
    required: ["name", "age"],
    additionalProperties: false,
  };
  const result: CompileResult<Person> = compile("moduleName", personStruct, {});
  test("", () => {
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

describe("family", () => {
  const familyStruct: StructAnnotation<Family> = {
    kind: "struct",
    struct: {
      structName: "Family",
      params: {
        father: { kind: "struct", struct: { structName: "Person" } },
        mother: { kind: "struct", struct: { structName: "Person" } },
      },
    },
  };
  const expectedFamilySchema: JSONSchemaType<Family> = {
    type: "object",
    properties: {
      father: {
        type: "object",
        title: "Person",
        properties: {
          name: { type: "string", default: "bob" },
          age: { type: "number", default: 0 },
        },
        required: ["name", "age"],
        additionalProperties: false,
      },
      mother: {
        type: "object",
        title: "Person",
        properties: {
          name: { type: "string", default: "bob" },
          age: { type: "number", default: 0 },
        },
        required: ["name", "age"],
        additionalProperties: false,
      },
    },
    required: ["father", "mother"],
    additionalProperties: false,
  };
  test("", () => {
    const resultFamily: CompileResult<Family> = compile(
      "moduleName",
      familyStruct,
      {
        Person: {
          kind: "struct",
          struct: {
            structName: "Person",
            params: {
              name: { kind: "string", default: "bob" },
              age: { kind: "number", default: 0 },
            },
          },
        } satisfies StructAnnotation<Person>,
      }
    );
    expect(resultFamily.schema).toEqual(expectedFamilySchema);
  });
  test("", () => {
    const resultFamily: CompileResult<Family> = compile(
      "moduleName",
      familyStruct,
      {
        Person: {
          kind: "struct",
          struct: {
            structName: "Person",
            params: {
              name: { kind: "string", default: "bob" },
              age: { kind: "number", default: 0 },
            },
          },
        } satisfies StructAnnotation<Person>,
      }
    );
    expect(resultFamily.logs).toContainEqual({
      path: "moduleName.Family.father",
      data: { kind: "struct", struct: { structName: "Person" } },
    } satisfies CompileLogItem);
    expect(resultFamily.logs).toContainEqual({
      path: "moduleName.Family.mother",
      data: { kind: "struct", struct: { structName: "Person" } },
    } satisfies CompileLogItem);
  });
});

describe("school", () => {
  const mockSchoolStruct: StructAnnotation<School> = {
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
  };
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
            age: { type: "number", default: 0 },
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
    const resultSchool: CompileResult<School> = compile(
      "moduleName",
      mockSchoolStruct,
      {}
    );
    expect(resultSchool.schema).toEqual(mockSchoolSchema);
  });
});

interface AllTypes {
  numberArray: number[];
  option: "option1" | "option2";
  bool: boolean;
  imageFile: string;
  audioFile: string;
  textData: string;
  person: Person;
  personArray: Person[];
}

interface AllData {
  actor: number;
  weapons: number;
  armor: number;
}

describe("alldata", () => {
  const allDataStruct: StructAnnotation<AllData> = {
    kind: "struct",
    struct: {
      structName: "AllData",
      params: {
        actor: {
          kind: "actor",
          default: 0,
          desc: "actor desc",
          text: "actor text",
        },
        weapons: { kind: "weapon", default: 0, text: "weapon text" },
        armor: { kind: "armor", default: 0, desc: "armor desc" },
      },
    },
  };
  const expectedAllDataSchema: JSONSchemaType<AllData> = {
    title: "AllData",
    type: "object",
    properties: {
      actor: {
        type: "number",
        default: 0,
        title: "actor text",
        description: "actor desc",
      },
      weapons: {
        type: "number",
        default: 0,
        title: "weapon text",
      },
      armor: {
        type: "number",
        default: 0,
        description: "armor desc",
      },
    },
    required: ["actor", "weapons", "armor"],
    additionalProperties: false,
  };
  test("", () => {
    const resultAllData: CompileResult<AllData> = compile(
      "moduleName",
      allDataStruct,
      {}
    );
    expect(resultAllData.schema).toEqual(expectedAllDataSchema);
  });
  test("", () => {
    const resultAllData: CompileResult<AllData> = compile(
      "moduleName",
      allDataStruct,
      {}
    );
    expect(resultAllData.logs).toContainEqual({
      path: "moduleName.AllData.actor",
      data: {
        kind: "actor",
        default: 0,
        desc: "actor desc",
        text: "actor text",
      },
    } satisfies CompileLogItem);
    expect(resultAllData.logs).toContainEqual({
      path: "moduleName.AllData.weapons",
      data: { kind: "weapon", default: 0, text: "weapon text" },
    } satisfies CompileLogItem);
  });
});
