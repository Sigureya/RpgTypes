import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import type { StructCompileLog } from "./kinds/compileLog";
import type { PluginStructType } from "./kinds/core/pluginEntryTypes";
import type { PluginMeta } from "./kinds/pluginMeta/compileOption";
import { compilePluginStruct } from "./struct";

interface Person {
  name: string;
  age: number;
}
interface Family {
  father: Person;
  mother: Person;
}
const titles: PluginMeta = {
  moduleName: "moduleName",
  author: "author",
};

describe("compilePluginStruct - struct_ref", () => {
  const familyStruct = {
    struct: "Family",
    params: {
      father: { kind: "struct", struct: "Person" },
      mother: { kind: "struct", struct: "Person" },
    },
  } as const satisfies PluginStructType<Family>;
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
  test("generates correct JSONSchema with $ref for struct_ref fields", () => {
    expect(resultFamily.schema).toEqual(expectedFamilySchema);
  });
  test("logs correct data for father struct_ref field", () => {
    const found = resultFamily.logs.find(
      (log) => log.path === "moduleName.Family.father"
    );
    expect(found).toMatchObject({
      data: familyStruct.params.father,
    } satisfies Pick<StructCompileLog, "data">);
  });
  test("logs correct data for mother struct_ref field", () => {
    const found = resultFamily.logs.find(
      (log) => log.path === "moduleName.Family.mother"
    );
    expect(found).toMatchObject({
      data: familyStruct.params.mother,
    } satisfies Pick<StructCompileLog, "data">);
  });
});
