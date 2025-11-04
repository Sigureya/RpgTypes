import { describe, test, expect } from "vitest";
import {
  toObjectPluginParams,
  type ClassifiedPluginParams,
  type ClassifiedPluginParamsEx,
  type PluginParamEx,
  type StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import type { ScalaPathResult } from "./arrayEx/types/result";
import { getPathFromStructParam } from "./paramStruct";
import type { StructPathResult, StructPropertysPath } from "./types";

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

const personScheame = {
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
} as const satisfies ClassifiedPluginParamsEx<Person>;

const addressSchema = {
  structs: [],
  structArrays: [],
  scalas: [
    { name: "street", attr: { kind: "string", default: "" } },
    { name: "city", attr: { kind: "string", default: "" } },
    { name: "zipCode", attr: { kind: "string", default: "" } },
  ],
  scalaArrays: [],
} as const satisfies ClassifiedPluginParamsEx<Address>;

const classRoomSchema = {
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
} as const satisfies ClassifiedPluginParamsEx<Class>;

const schoolSchema = {
  scalas: [{ name: "since", attr: { kind: "number", default: 0 } }],
  scalaArrays: [],
  structs: [{ name: "address", attr: { kind: "struct", struct: "Address" } }],
  structArrays: [
    {
      name: "classrooms",
      attr: { kind: "struct[]", struct: "Class", default: [] },
    },
  ],
} as const satisfies ClassifiedPluginParamsEx<School>;

const makeMap = (): ReadonlyMap<string, ClassifiedPluginParams> => {
  return new Map<string, ClassifiedPluginParams>([
    ["Person", personScheame],
    ["Address", addressSchema],
    ["Class", classRoomSchema],
    ["School", schoolSchema],
  ]);
};

describe("address", () => {
  const path = [
    {
      scalas: `$.address["street","city","zipCode"]`,
      scalaArrays: [],
      structName: "Address",
      os: toObjectPluginParams(addressSchema.scalas),
    },
  ] as const satisfies StructPropertysPath[];
  const paramSchema = {
    name: "address",
    attr: { kind: "struct", struct: "Address" },
  } as const satisfies PluginParamEx<StructRefParam>;
  test("getPathFromStruct", () => {
    const structMap: ReadonlyMap<string, ClassifiedPluginParams> = new Map([
      ["Address", addressSchema],
    ]);
    const result = getPathFromStructParam([paramSchema], "$", structMap);
    expect(result.items).toEqual(path);
    expect(result.errors).toEqual([]);
  });
  test.skip("", () => {
    const paramObject = {
      address: {
        city: "Sample City",
        street: "123 Sample St",
        zipCode: "12345",
      } as const satisfies Address,
    };
    const expectedValues: ScalaPathResult[] = [
      {
        value: "Sample City",
        param: { name: "street", attr: { kind: "string", default: "" } },
      },
      //      { value: "123 Sample St", param: path[0].scalas[0] },
    ];

    // const result = extractScalaParams(paramObject, path[0].scalas, [
    //   paramSchema,
    // ]);
  });
});

describe("person", () => {
  const expected: StructPropertysPath[] = [
    {
      scalas: `$.person["name","age"]`,
      scalaArrays: [
        { path: "$.person.items[*]", param: personScheame.scalaArrays[0] },
        { path: "$.person.nicknames[*]", param: personScheame.scalaArrays[1] },
      ],
      structName: "Person",
      os: toObjectPluginParams(personScheame.scalas),
    },
  ];
  test("getPathFromStruct", () => {
    const param = {
      name: "person",
      attr: { kind: "struct", struct: "Person" },
    } as const satisfies PluginParamEx<StructRefParam>;
    const structMap: ReadonlyMap<string, ClassifiedPluginParams> = new Map([
      ["Person", personScheame],
    ]);
    const result: StructPathResult = getPathFromStructParam(
      [param],
      "$",
      structMap
    );
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
      os: toObjectPluginParams(classRoomSchema.scalas),
    },
    {
      scalas: `$.classroom.teacher["name","age"]`,
      scalaArrays: [
        {
          path: "$.classroom.teacher.items[*]",
          param: personScheame.scalaArrays[0],
        },
        {
          path: "$.classroom.teacher.nicknames[*]",
          param: personScheame.scalaArrays[1],
        },
      ],
      structName: "Person",
      os: toObjectPluginParams(personScheame.scalas),
    },
    {
      scalas: `$.classroom.students[*]["name","age"]`,
      scalaArrays: [
        {
          path: "$.classroom.students[*].items[*]",
          param: personScheame.scalaArrays[0],
        },
        {
          path: "$.classroom.students[*].nicknames[*]",
          param: personScheame.scalaArrays[1],
        },
      ],
      structName: "Person",
      os: toObjectPluginParams(personScheame.scalas),
    },
  ];
  test("getPathFromStruct", () => {
    const param: PluginParamEx<StructRefParam> = {
      name: "classroom",
      attr: { kind: "struct", struct: "Class" },
    };
    const result: StructPathResult = getPathFromStructParam(
      [param],
      "$",
      makeMap()
    );
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
      os: toObjectPluginParams(schoolSchema.scalas),
    },
    {
      structName: "Address",
      scalas: `$.school.address["street","city","zipCode"]`,
      scalaArrays: [],
      os: toObjectPluginParams(addressSchema.scalas),
    },
    {
      structName: "Class",
      scalas: `$.school.classrooms[*]["className"]`,
      scalaArrays: [],
      os: toObjectPluginParams(classRoomSchema.scalas),
    },
    {
      os: toObjectPluginParams(personScheame.scalas),
      structName: "Person",
      scalas: `$.school.classrooms[*].teacher["name","age"]`,
      scalaArrays: [
        {
          path: "$.school.classrooms[*].teacher.items[*]",
          param: personScheame.scalaArrays[0],
        },
        {
          path: "$.school.classrooms[*].teacher.nicknames[*]",
          param: personScheame.scalaArrays[1],
        },
      ],
    },
    {
      structName: "Person",
      scalas: `$.school.classrooms[*].students[*]["name","age"]`,
      scalaArrays: [
        {
          path: "$.school.classrooms[*].students[*].items[*]",
          param: personScheame.scalaArrays[0],
        },
        {
          path: "$.school.classrooms[*].students[*].nicknames[*]",
          param: personScheame.scalaArrays[1],
        },
      ],
      os: toObjectPluginParams(personScheame.scalas),
    },
  ];

  const structMap = makeMap();
  test("getPathFromStruct", () => {
    const param: PluginParamEx<StructRefParam> = {
      name: "school",
      attr: { kind: "struct", struct: "School" },
    };
    const result: StructPathResult = getPathFromStructParam(
      [param],
      "$",
      structMap
    );
    expect(result.items).toEqual(expected);
    expect(result.errors).toEqual([]);
  });
});
