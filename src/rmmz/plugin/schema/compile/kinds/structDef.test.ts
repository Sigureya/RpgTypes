import { describe, test, expect } from "vitest";
import type { Schema } from "jsonschema";
import type { X_RmmzParam } from "./core/paramBase/x-rpg-param";
import { X_RPG_PARM } from "./core/paramBase/x-rpg-param";
import type { StructRefParam } from "./core/primitiveParams";
import { makeStructRef, makeStructRefWithXParam } from "./structDef";

describe("StructDef schema generation", () => {
  const mockData: StructRefParam = {
    kind: "struct",
    struct: "MyStruct",
    desc: "A reference to MyStruct",
    text: "My Struct Reference",
  };

  const expectedSchema: Schema = {
    $ref: "#/definitions/MyStruct",
    title: mockData.text,
    description: mockData.desc,
  };

  test("makeStructRef generates correct schema", () => {
    const schema = makeStructRef(mockData);
    expect(schema).toEqual(expectedSchema);
  });

  test("makeStructRefWithXParam generates correct schema with x-rpg-param", () => {
    const schema = makeStructRefWithXParam(mockData);
    expect(schema).toEqual({
      ...expectedSchema,
      [X_RPG_PARM]: {
        kind: "struct",
        data: { struct: mockData.struct },
      } satisfies X_RmmzParam<{ struct: string }>,
    });
  });
});
