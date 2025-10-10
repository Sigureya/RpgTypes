import { describe, test, expect } from "vitest";
import type { Trait } from "@RpgTypes/rmmz";
import type { PluginStructSchemaArray3 } from "@RpgTypes/rmmz/plugin";
import { structXXX } from "./jsonPath";
import type { ParamJSONPath } from "./types";
interface Actor {
  name: string;
  id: number;
  traits: Trait[];
}

const mockActor: Actor = {
  name: "Taro",
  id: 1,
  traits: [
    { code: 11, dataId: 81, value: 123 },
    { code: 12, dataId: 66, value: 456 },
  ],
};

const traitSchema = {
  struct: "Trait",
  params: [
    { name: "code", attr: { kind: "number", default: 0 } },
    { name: "dataId", attr: { kind: "number", default: 0 } },
    { name: "value", attr: { kind: "number", default: 0 } },
  ],
} as const satisfies PluginStructSchemaArray3<Trait>;

const actorSchema = {
  struct: "Actor",
  params: [
    { name: "name", attr: { kind: "string", default: "Taro" } },
    { name: "id", attr: { kind: "number", default: 1 } },
    {
      name: "traits",
      attr: { kind: "struct[]", struct: "Trait", default: [] },
    },
  ],
} as const satisfies PluginStructSchemaArray3<Actor>;

describe("trait", () => {
  const expected: ParamJSONPath[] = [
    {
      parent: "$",
      path: "$.code",
      param: { name: "code", attr: { kind: "number", default: 0 } },
    },
    {
      parent: "$",
      param: { name: "dataId", attr: { kind: "number", default: 0 } },
      path: "$.dataId",
    },
    {
      parent: "$",
      param: { name: "value", attr: { kind: "number", default: 0 } },
      path: "$.value",
    },
  ];
  test("", () => {
    const result = structXXX(traitSchema, "$");
    expect(result.params).toEqual(expected);
  });
});
