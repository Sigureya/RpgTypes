import { describe, expect, test } from "vitest";
import { filterStructParam } from "./arraySchemaFilterByParam";
import type { PluginStructSchemaArray3 } from "./arraySchemaTypes";

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
  president: Person;
}

describe("filterStructParam", () => {
  test("scala only", () => {
    const personSchema: PluginStructSchemaArray3<Person> = {
      struct: "Person",
      params: [
        { name: "name", attr: { kind: "string", default: "" } },
        { name: "age", attr: { kind: "number", default: 0 } },
      ],
    };
    const result = filterStructParam(personSchema);
    const expected: PluginStructSchemaArray3<Person> = {
      struct: "Person",
      params: [],
    };
    expect(result).toEqual(expected);
  });
  test("hasStruct", () => {
    const employeeSchema: PluginStructSchemaArray3<Employee> = {
      struct: "Employee",
      params: [
        { name: "employeeId", attr: { kind: "string", default: "" } },
        { name: "person", attr: { kind: "struct", struct: "Person" } },
      ],
    };
    const result = filterStructParam(employeeSchema);
    const expected: PluginStructSchemaArray3<Employee> = {
      struct: "Employee",
      params: [{ name: "person", attr: { kind: "struct", struct: "Person" } }],
    };
    expect(result).toEqual(expected);
  });
  test("hasStructArray", () => {
    const componySchema: PluginStructSchemaArray3<Compony> = {
      struct: "Compony",
      params: [
        { name: "companyId", attr: { kind: "string", default: "" } },
        { name: "employees", attr: { kind: "struct[]", struct: "Employee" } },
        { name: "president", attr: { kind: "struct", struct: "Person" } },
      ],
    };
    const result = filterStructParam(componySchema);
    const expected: PluginStructSchemaArray3<Compony> = {
      struct: "Compony",
      params: [
        { name: "employees", attr: { kind: "struct[]", struct: "Employee" } },
        { name: "president", attr: { kind: "struct", struct: "Person" } },
      ],
    };
    expect(result).toEqual(expected);
  });
});
