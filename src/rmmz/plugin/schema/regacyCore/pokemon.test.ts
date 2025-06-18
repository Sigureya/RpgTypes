import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import type { StructAnnotation as Struct2 } from "./kinds/struct2";
import type {
  CompileLogItem,
  CompileResult,
  Family,
  Person,
  School,
} from "./mockType";
import { compile } from "./pokemon";
import type { StructAnnotation } from "./types";
interface BB {
  bool: boolean;
}

describe("bool", () => {
  const boolStruct = {
    kind: "struct",
    struct: {
      structName: "Bool",
      params: {
        bool: {
          kind: "boolean",
          default: false,
          desc: "bool desc", // descは全てのkindにある。省略されているだけ
          text: "bool text", // textも全てのkindにある。
          off: "off",
          on: "on",
        },
      },
    },
  } as const satisfies StructAnnotation<BB>;
  const expectedBoolSchema: JSONSchemaType<BB> = {
    title: "Bool",
    type: "object",
    properties: {
      bool: {
        type: "boolean",
        default: false,
        title: "bool text",
        description: "bool desc",
      },
    },
    required: ["bool"],
    additionalProperties: false,
  };
  test("schema", () => {
    const resultBool = compile("moduleName", boolStruct, {});
    expect(resultBool.schema).toEqual(expectedBoolSchema);
  });
  test("schema", () => {
    const resultBool = compile("moduleName", boolStruct, {});
    expect(resultBool.logs[0].data).toBe(boolStruct.struct.params.bool);
  });
});

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
  } as const satisfies StructAnnotation<Person>;
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
  const result = compile("moduleName", personStruct, {});
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

describe("family", () => {
  const familyStruct = {
    kind: "struct",
    struct: {
      structName: "Family",
      params: {
        father: { kind: "struct_ref", structName: "Person" },
        mother: { kind: "struct_ref", structName: "Person" },
      },
    },
  } as const satisfies Struct2<Family>;
  const expectedFamilySchema: JSONSchemaType<Family> = {
    type: "object",
    title: "Family",
    properties: {
      father: {
        type: "object",
        title: "Person",
        properties: {
          name: { type: "string", default: "bob" },
          age: { type: "integer", default: 0 },
        },
        required: ["name", "age"],
        additionalProperties: false,
      },
      mother: {
        type: "object",
        title: "Person",
        properties: {
          name: { type: "string", default: "bob" },
          age: { type: "integer", default: 0 },
        },
        required: ["name", "age"],
        additionalProperties: false,
      },
    },
    required: ["father", "mother"],
    additionalProperties: false,
  };
  test("", () => {
    const resultFamily = compile("moduleName", familyStruct, {
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
    });
    expect(resultFamily.schema).toEqual(expectedFamilySchema);
  });
  test("", () => {
    const resultFamily = compile("moduleName", familyStruct, {
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
    } as const);
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
  } as const satisfies StructAnnotation<School>;
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
    const resultSchool = compile("moduleName", mockSchoolStruct, {});
    expect(resultSchool.schema).toEqual(mockSchoolSchema);
  });
});

// kind:"number"とは異なる処理が必要。別々に作ること
interface AllData {
  actor: number;
  weapons: number;
  armor: number;
  skill: number;
  item: number;
  enemy: number;
  state: number;
}

describe("alldata", () => {
  const allDataStruct = {
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
        weapons: { kind: "weapon", default: 0, text: "weapon text", desc: "" },
        armor: { kind: "armor", default: 0, desc: "armor desc", text: "" },
        skill: { kind: "skill", default: 0, text: "", desc: "" },
        item: { kind: "item", default: 0, text: "", desc: "" },
        enemy: { kind: "enemy", default: 0, text: "", desc: "" },
        state: { kind: "state", default: 0, text: "", desc: "" },
      },
    },
  } as const satisfies StructAnnotation<AllData>;
  const expectedAllDataSchema: JSONSchemaType<AllData> = {
    title: "AllData",
    type: "object",
    properties: {
      actor: {
        type: "integer",
        default: 0,
        title: "actor text",
        description: "actor desc",
      },
      weapons: {
        type: "integer",
        default: 0,
        title: "weapon text",
        description: "",
      },
      armor: {
        type: "integer",
        default: 0,
        description: "armor desc",
        title: "",
      },
      skill: { type: "integer", default: 0, title: "", description: "" },
      item: { type: "integer", default: 0, title: "", description: "" },
      enemy: { type: "integer", default: 0, title: "", description: "" },
      state: { type: "integer", default: 0, title: "", description: "" },
    },
    required: ["actor", "weapons", "armor", "skill", "item", "enemy", "state"],
    additionalProperties: false,
  };
  test("schema", () => {
    const resultAllData = compile("moduleName", allDataStruct, {});
    expect(resultAllData.schema).toEqual(expectedAllDataSchema);
  });
  describe("log", () => {
    const resultAllData = compile("moduleName", allDataStruct, {});
    const map = new Map(
      resultAllData.logs.map((log) => {
        return [log.path, log.data] as const;
      })
    );
    test("log actor", () =>
      expect(map.get("moduleName.AllData.actor")).toEqual({
        kind: "actor",
        default: 0,
        desc: "actor desc",
        text: "actor text",
      }));
    test("log weapons", () => {
      expect(map.get("moduleName.AllData.armor")).toEqual({
        kind: "armor",
        default: 0,
        desc: "armor desc",
        text: "",
      });
    });
  });
});
describe("alldataArray", () => {
  const allDataStruct = {
    kind: "struct",
    struct: {
      structName: "AllData",
      params: {
        actor: {
          kind: "actor",
          default: 0,
        },
        weapons: { kind: "weapon", default: 0 },
        armor: { kind: "armor", default: 0 },
        skill: { kind: "skill", default: 0 },
        item: { kind: "item", default: 0 },
        enemy: { kind: "enemy", default: 0 },
        state: { kind: "state", default: 0 },
      },
    },
  } as const satisfies StructAnnotation<AllData>;
  const expectedAllDataSchema = {
    title: "AllData",
    type: "object",
    properties: {
      actor: {
        type: "integer",
        default: 0,
      },
      weapons: {
        type: "integer",
        default: 0,
      },
      armor: {
        type: "integer",
        default: 0,
      },
      skill: { type: "integer", default: 0 },
      item: { type: "integer", default: 0 },
      enemy: { type: "integer", default: 0 },
      state: { type: "integer", default: 0 },
    },
    required: ["actor", "weapons", "armor", "skill", "item", "enemy", "state"],
    additionalProperties: false,
  } as const satisfies JSONSchemaType<AllData>;
  test("schema", () => {
    const resultAllData = compile("moduleName", allDataStruct, {});
    expect(resultAllData.schema).toEqual(expectedAllDataSchema);
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
  } as const satisfies StructAnnotation<AllDataArray>;
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
    const resultAllDataArray = compile("moduleName", allDataArrayStruct, {});
    expect(resultAllDataArray.schema).toEqual(expectedAllDataArraySchema);
  });
});

interface Numbers {
  floating: number;
  integer1: number;
  integer2: number;
  numberArray: number[];
  floatArray: number[];
}

describe("numbers", () => {
  const numbersStruct = {
    kind: "struct",
    struct: {
      structName: "Numbers",
      params: {
        floating: { kind: "number", default: 0.5, digit: 2 },
        integer1: { kind: "number", default: 42 },
        integer2: { kind: "number", default: 42, digit: 0 },
        numberArray: { kind: "number[]", default: [1, 2, 3], digit: 0 },
        floatArray: { kind: "number[]", default: [1.1, 2.2, 3.3], digit: 2 },
      },
    },
  } as const satisfies StructAnnotation<Numbers>;
  const expectedNumbersSchema: JSONSchemaType<Numbers> = {
    title: "Numbers",
    type: "object",
    properties: {
      floating: { type: "number", default: 0.5 },
      integer1: { type: "integer", default: 42 },
      integer2: { type: "integer", default: 42 },
      numberArray: {
        type: "array",
        items: { type: "integer" },
        default: [1, 2, 3],
      },
      floatArray: {
        type: "array",
        items: { type: "number" },
        default: [1.1, 2.2, 3.3],
      },
    },
    required: ["floating", "integer1", "integer2", "numberArray", "floatArray"],
    additionalProperties: false,
  };
  describe("compile", () => {
    const resultNumbers = compile("moduleName", numbersStruct, {});
    test("logs", () => {
      expect(resultNumbers.logs.length).toBe(5);
    });
    test("schema", () => {
      expect(resultNumbers.schema).toEqual(expectedNumbersSchema);
    });
  });
});

interface StringTypes {
  select: string;
  file: string;
  combo: string;
  multiLIne: string;
  strList: string[];
  fileList: string[];
}

describe("stringTypes", () => {
  const stringTypesStruct = {
    kind: "struct",
    struct: {
      structName: "StringTypes",
      params: {
        select: {
          kind: "select",
          default: "option1",
          options: [
            { value: "val1", option: "Option 1" },
            { value: "val2", option: "Option 2" },
          ],
        },
        file: { kind: "file", dir: "img/pictures", default: "filename" },
        combo: {
          kind: "combo",
          default: "combo1",
          options: ["aaa", "bbb", "ccc"],
        },
        multiLIne: {
          kind: "multiline_string",
          default: "multiline\nstring",
        },
        strList: {
          kind: "string[]",
          default: ["str1", "str2", "str3"],
        },
        fileList: {
          kind: "file[]",
          dir: "img/pictures",
          default: ["file1.png", "file2.png"],
        },
      },
    },
  } satisfies Struct2<StringTypes>;
  const expectedStringTypesSchema: JSONSchemaType<StringTypes> = {
    title: "StringTypes",
    type: "object",
    properties: {
      select: {
        type: "string",
        default: "option1",
        enum: ["val1", "val2"],
      },
      file: { type: "string", default: "filename" },
      combo: {
        type: "string",
        default: "combo1",
      },
      multiLIne: {
        type: "string",
        default: "multiline\nstring",
      },
      strList: {
        type: "array",
        items: { type: "string" },
        default: ["str1", "str2", "str3"],
      },
      fileList: {
        type: "array",

        items: { type: "string" },
        default: ["file1.png", "file2.png"],
      },
    },
    required: ["select", "file", "combo", "multiLIne", "strList", "fileList"],
    additionalProperties: false,
  };
  test("schema", () => {
    const resultStringTypes = compile("moduleName", stringTypesStruct, {});
    expect(resultStringTypes.schema).toEqual(expectedStringTypesSchema);
  });
});
