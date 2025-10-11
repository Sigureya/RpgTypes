import { describe, test, expect } from "vitest";
import type { Trait } from "@RpgTypes/rmmz";
import type { PluginStructSchemaArray3 } from "@RpgTypes/rmmz/plugin";
import type { JsonValueEx } from "./deep";
import { deep2 } from "./deep";
import type { ParamJSONPathSturct } from "./types";

interface Actor {
  name: string;
  id: number;
  traits: Trait[];
}

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

describe("deep2", () => {
  const actorPath: ParamJSONPathSturct = {
    struct: "Actor",
    scala: [],
    params: [
      {
        parent: "$",
        path: "$.name",
        param: { name: "name", attr: { kind: "string", default: "Taro" } },
      },
      {
        parent: "$",
        param: { name: "id", attr: { kind: "number", default: 1 } },
        path: "$.id",
      },
      {
        parent: "$",
        param: { name: "code", attr: { kind: "number", default: 0 } },
        path: "$.traits[*].code",
      },
    ],
  };
  test("", () => {
    const actor = {
      name: "Taro",
      id: 1,
      traits: [
        { code: 11, dataId: 81, value: 123 },
        { code: 12, dataId: 66, value: 456 },
      ],
    } as const satisfies Actor;
    const result = deep2(actorPath, actor);
    const expected: JsonValueEx[] = [
      {
        value: ["Taro"],
        schema: {
          parent: "$",
          path: "$.name",
          param: { name: "name", attr: { kind: "string", default: "Taro" } },
        },
      },
      {
        value: [1],
        schema: {
          parent: "$",
          path: "$.id",
          param: { name: "id", attr: { kind: "number", default: 1 } },
        },
      },
      {
        value: [11, 12],
        schema: {
          parent: "$",
          param: { name: "code", attr: { kind: "number", default: 0 } },
          path: "$.traits[*].code",
        },
      },
    ];
    expect(result[0]).toEqual(expected[0]);
    expect(result[1]).toEqual(expected[1]);
    expect(result[2]).toEqual(expected[2]);
  });
});
