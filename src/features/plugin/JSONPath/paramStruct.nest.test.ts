import { describe, test, expect } from "vitest";
import type {
  ClassifiedPluginParams,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import type { ClassifiedPluginParamsEx } from "@RpgTypes/rmmz/plugin";
import type { PluginParam } from "@RpgTypes/rmmz/plugin/core/types";
import { getPathFromStructParam } from "./paramStruct";
import type { StructPropertysPath, Result4 } from "./types/struct2";

interface Person {
  name: string;
  age: number;
  items: number[];
  nicknames: string[];
}

interface Address {
  street: string;
  city: string;
  zipCode: string;
}

interface Class {
  className: string;
  students: Person[];
  teacher: Person;
}

interface School {
  classrooms: Class[];
  address: Address;
  since: number;
}

const personScheame: ClassifiedPluginParamsEx<Person> = {
  structs: [],
  structArrays: [],
  scalas: [
    { name: "name", attr: { kind: "string", default: "" } },
    { name: "age", attr: { kind: "number", default: 0 } },
  ],
  scalaArrays: [
    { name: "items", attr: { kind: "number[]", default: [] } },
    { name: "nicknames", attr: { kind: "string[]", default: [] } },
  ],
};

const addressSchema: ClassifiedPluginParamsEx<Address> = {
  structs: [],
  structArrays: [],
  scalas: [
    { name: "street", attr: { kind: "string", default: "" } },
    { name: "city", attr: { kind: "string", default: "" } },
    { name: "zipCode", attr: { kind: "string", default: "" } },
  ],
  scalaArrays: [],
};

const classRoomSchema: ClassifiedPluginParamsEx<Class> = {
  scalas: [{ name: "className", attr: { kind: "string", default: "" } }],
  scalaArrays: [],
  structs: [
    {
      name: "teacher",
      attr: { kind: "struct", struct: "Person" },
    },
  ],
  structArrays: [
    {
      name: "students",
      attr: { kind: "struct[]", struct: "Person", default: [] },
    },
  ],
};

const schoolSchema: ClassifiedPluginParamsEx<School> = {
  scalas: [{ name: "since", attr: { kind: "number", default: 0 } }],
  scalaArrays: [],
  structs: [{ name: "address", attr: { kind: "struct", struct: "Address" } }],
  structArrays: [
    {
      name: "classrooms",
      attr: { kind: "struct[]", struct: "Class", default: [] },
    },
  ],
};

const makeMap = (): ReadonlyMap<string, ClassifiedPluginParams> => {
  return new Map<string, ClassifiedPluginParams>([
    ["Person", personScheame],
    ["Address", addressSchema],
    ["Class", classRoomSchema],
    ["School", schoolSchema],
  ]);
};

describe("person", () => {
  const expected: StructPropertysPath[] = [
    {
      scalas: `$.person["name","age"]`,
      scalaArrays: ["$.person.items[*]", "$.person.nicknames[*]"],
      structName: "Person",
    },
  ];
  test("getPathFromStruct", () => {
    const param = {
      name: "person",
      attr: { kind: "struct", struct: "Person" },
    } as const satisfies PluginParam<StructRefParam>;
    const structMap: ReadonlyMap<string, ClassifiedPluginParams> = new Map([
      ["Person", personScheame],
    ]);
    const result: Result4 = getPathFromStructParam([param], "$", structMap);
    expect(result.items).toEqual(expected);
    expect(result.errors).toEqual([]);
  });
});

describe("classroom", () => {
  const expected: StructPropertysPath[] = [
    {
      scalas: `$.classroom["className"]`,
      scalaArrays: [],
      structName: "Class",
    },
    {
      scalas: `$.classroom.teacher["name","age"]`,
      scalaArrays: [
        "$.classroom.teacher.items[*]",
        "$.classroom.teacher.nicknames[*]",
      ],
      structName: "Person",
    },
    {
      scalas: `$.classroom.students[*]["name","age"]`,
      scalaArrays: [
        "$.classroom.students[*].items[*]",
        "$.classroom.students[*].nicknames[*]",
      ],
      structName: "Person",
    },
  ];
  test("getPathFromStruct", () => {
    const param: PluginParam<StructRefParam> = {
      name: "classroom",
      attr: { kind: "struct", struct: "Class" },
    };
    const result: Result4 = getPathFromStructParam([param], "$", makeMap());
    expect(result.items).toEqual(expected);
    expect(result.errors).toEqual([]);
  });
});

describe("school", () => {
  const expected: StructPropertysPath[] = [
    {
      structName: "School",
      scalas: `$.school["since"]`,
      scalaArrays: [],
    },
    {
      structName: "Address",
      scalas: `$.school.address["street","city","zipCode"]`,
      scalaArrays: [],
    },
    {
      structName: "Class",
      scalas: `$.school.classrooms[*]["className"]`,
      scalaArrays: [],
    },
    {
      structName: "Person",
      scalas: `$.school.classrooms[*].teacher["name","age"]`,
      scalaArrays: [
        "$.school.classrooms[*].teacher.items[*]",
        "$.school.classrooms[*].teacher.nicknames[*]",
      ],
    },
    {
      structName: "Person",
      scalas: `$.school.classrooms[*].students[*]["name","age"]`,
      scalaArrays: [
        "$.school.classrooms[*].students[*].items[*]",
        "$.school.classrooms[*].students[*].nicknames[*]",
      ],
    },
  ];

  test("getPathFromStruct", () => {
    const param: PluginParam<StructRefParam> = {
      name: "school",
      attr: { kind: "struct", struct: "School" },
    };
    const result: Result4 = getPathFromStructParam([param], "$", makeMap());
    expect(result.items).toEqual(expected);
    expect(result.errors).toEqual([]);
  });
});
