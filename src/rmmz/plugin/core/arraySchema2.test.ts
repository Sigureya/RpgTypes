import { describe, expect, test } from "vitest";
import { isStructAttr, ssss } from "./arraySchema2";
import type { PluginParam, PluginStructSchemaArray3 } from "./arraySchemaTypes";
import type {
  StructArrayRefParam,
  StructRefParam,
  NumberParam,
} from "./primitiveParams";

describe("isStructAttr", () => {
  test("returns true for struct param", () => {
    const param: PluginParam<StructRefParam> = {
      name: "example",
      attr: { kind: "struct", struct: "MyStruct" },
    };
    expect(param).toSatisfy(isStructAttr);
    expect(isStructAttr(param)).toBe(true);
  });
  test("returns true for struct array param", () => {
    const param: PluginParam<StructArrayRefParam> = {
      name: "exampleArray",
      attr: { kind: "struct[]", struct: "MyStruct" },
    };
    expect(param).toSatisfy(isStructAttr);
    expect(isStructAttr(param)).toBe(true);
  });
  test("returns false for non-struct param", () => {
    const param: PluginParam<NumberParam> = {
      name: "exampleNumber",
      attr: { kind: "number", default: 0 },
    };
    expect(param).not.toSatisfy(isStructAttr);
    expect(isStructAttr(param)).toBe(false);
  });
});

interface Person {
  name: string;
  age: number;
}

interface Employee {
  employeeId: string;
  person: Person;
}

interface Compony {
  companyId: string;
  employees: Employee[];
}

const personSchema: PluginStructSchemaArray3<Person> = {
  struct: "Person",
  params: [
    { name: "name", attr: { kind: "string", default: "" } },
    { name: "age", attr: { kind: "number", default: 0 } },
  ],
};

const employeeSchema: PluginStructSchemaArray3<Employee> = {
  struct: "Employee",
  params: [
    { name: "employeeId", attr: { kind: "string", default: "" } },
    { name: "person", attr: { kind: "struct", struct: "Person" } },
  ],
};

const componySchema: PluginStructSchemaArray3<Compony> = {
  struct: "Compony",
  params: [
    { name: "companyId", attr: { kind: "string", default: "" } },
    { name: "employees", attr: { kind: "struct[]", struct: "Employee" } },
  ],
};

describe("s", () => {
  test("e", () => {
    const result = ssss(employeeSchema);
    const expected: PluginStructSchemaArray3<Employee> = {
      struct: "Employee",
      params: [{ name: "person", attr: { kind: "struct", struct: "Person" } }],
    };
    expect(result).toEqual(expected);
  });
  test("p", () => {
    const result = ssss(personSchema);
    const expected: PluginStructSchemaArray3<Person> = {
      struct: "Person",
      params: [],
    };
    expect(result).toEqual(expected);
  });
  test("c", () => {
    const result = ssss(componySchema);
    const expected: PluginStructSchemaArray3<Compony> = {
      struct: "Compony",
      params: [
        { name: "employees", attr: { kind: "struct[]", struct: "Employee" } },
      ],
    };
    expect(result).toEqual(expected);
  });
});
