import { describe, expect, test } from "vitest";
import { ssss } from "./arraySchema2";
import type { PluginParam, PluginStructSchemaArray3 } from "./arraySchemaTypes";

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
