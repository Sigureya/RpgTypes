import { describe, test, expect } from "vitest";
import type {
  ClassifiedPluginParams,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import type { ClassifiedPluginParamsEx } from "@RpgTypes/rmmz/plugin";
import type { PluginParam } from "@RpgTypes/rmmz/plugin/core/types";
import { getPathFromStructParam } from "./paramStruct";
import type { Result3 } from "./types/struct2";

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

describe("classroom", () => {
  const expected: Result3[] = [
    {
      scalas: `$.classroom["className"]`,
      scalaArrays: [],
    },
    {
      scalas: `$.classroom.teacher["name","age"]`,
      scalaArrays: [
        "$.classroom.teacher.items[*]",
        "$.classroom.teacher.nicknames[*]",
      ],
    },
    {
      scalas: `$.classroom.students[*]["name","age"]`,
      scalaArrays: [
        "$.classroom.students[*].items[*]",
        "$.classroom.students[*].nicknames[*]",
      ],
    },
  ];
  test("getPathFromStruct", () => {
    const param: PluginParam<StructRefParam> = {
      name: "classroom",
      attr: { kind: "struct", struct: "Class" },
    };
    const result: Result3[] = getPathFromStructParam([param], "$", makeMap());
    expect(result).toEqual(expected);
  });
});

describe("school", () => {
  const expected: Result3[] = [
    {
      scalas: `$.school["since"]`,
      scalaArrays: [],
    },
    {
      scalas: `$.school.address["street","city","zipCode"]`,
      scalaArrays: [],
    },
    {
      scalas: `$.school.classrooms[*]["className"]`,
      scalaArrays: [],
    },
    {
      scalas: `$.school.classrooms[*].teacher["name","age"]`,
      scalaArrays: [
        "$.school.classrooms[*].teacher.items[*]",
        "$.school.classrooms[*].teacher.nicknames[*]",
      ],
    },
    {
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
    const result: Result3[] = getPathFromStructParam([param], "$", makeMap());
    expect(result).toEqual(expected);
  });
});
