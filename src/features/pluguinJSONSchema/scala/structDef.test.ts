import { describe, test, expect } from "vitest";
import type { StructRefParam } from "@RpgTypes/rmmz/plugin/schema/compile";
import type { Schema } from "jsonschema";
import { makeStructRef, makeStructRefWithXParam } from "./structDef";
import type { X_RmmzParam } from "./x-param/base/x-rpg-param";
import { X_RPG_PARM } from "./x-param/base/x-rpg-param";

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
