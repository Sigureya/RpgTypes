import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import type { CompileLogItem } from "./core/kinds/compileLog";
import type { PluginTitles } from "./core/kinds/compileOption";
import type { PluginStruct } from "./core/kinds/plugin";
import { compilePluginStruct } from "./struct";

interface Person {
  name: string;
  age: number;
}
interface Family {
  father: Person;
  mother: Person;
}
const titles: PluginTitles = {
  moduleName: "moduleName",
  author: "author",
};

describe("family", () => {
  const familyStruct = {
    struct: "Family",
    params: {
      father: { kind: "struct_ref", ref: "Person" },
      mother: { kind: "struct_ref", ref: "Person" },
    },
  } as const satisfies PluginStruct<Family>;
  const expectedFamilySchema: JSONSchemaType<Family> = {
    type: "object",
    title: "Family",
    properties: {
      father: { $ref: "#/definitions/Person" },
      mother: { $ref: "#/definitions/Person" },
    },
    required: ["father", "mother"],
    additionalProperties: false,
  };
  const resultFamily = compilePluginStruct(titles, familyStruct, {});
  test("", () => {
    expect(resultFamily.schema).toEqual(expectedFamilySchema);
  });
  test("", () => {
    expect(resultFamily.logs).toContainEqual({
      path: "moduleName.Family.father",
      data: familyStruct.params.father,
    } satisfies CompileLogItem);
    expect(resultFamily.logs).toContainEqual({
      path: "moduleName.Family.mother",
      data: familyStruct.params.mother,
    } satisfies CompileLogItem);
  });
});
