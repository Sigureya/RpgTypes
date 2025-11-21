import { test, expect, describe } from "vitest";
import type { PluginSchema } from "@sigureya/rmmz-plugin-schema";
import { pluginSourceToArraySchema } from "@sigureya/rmmz-plugin-schema";
import type {
  CommandArgExtractors,
  CommandExtractResult,
  CommandMapKey,
} from "@sigureya/rmmz-plugin-schema/features";
import {
  compileCommandExtractorsFromPlugins,
  extractCommandArgsByKey,
} from "@sigureya/rmmz-plugin-schema/features";
import { JSONPathJS } from "jsonpath-js";

interface AddItemCommandArgs {
  itemId: number;
  quantity: number;
}

const pluginAnnoations: string[] = [
  "/*:",
  "@command AddItem",
  "@arg itemId",
  "@type item",
  "@default 0",
  "@arg quantity",
  "@type number",
  "@default 1",
  "@desc Adds an item to the inventory.",
  "*/",
];

const schema: PluginSchema = {
  meta: {},
  pluginName: "MockPlugin",
  target: "MZ",
  schema: {
    params: [],
    structs: [],
    commands: [
      {
        command: "AddItem",
        desc: undefined,
        text: undefined,
        args: [
          {
            attr: {
              default: 0,
              kind: "item",
            },
            name: "itemId",
          },
          {
            attr: {
              default: 1,
              desc: "Adds an item to the inventory.",
              kind: "number",
            },
            name: "quantity",
          },
        ],
      },
    ],
  },
};

describe("JSONPath", () => {
  test("pluginSourceToArraySchema", () => {
    const result: PluginSchema = pluginSourceToArraySchema(
      "MockPlugin",
      pluginAnnoations.join("\n")
    );
    expect(result).toEqual(schema);
  });
  test("extractCommandArgsByKey", () => {
    type MapType = Map<CommandMapKey, CommandArgExtractors>;
    const r: MapType = compileCommandExtractorsFromPlugins(
      [schema],
      (path) => new JSONPathJS(path)
    );
    const args = {
      itemId: 5,
      quantity: 10,
    } as const satisfies AddItemCommandArgs;
    const values: CommandExtractResult = {
      pluginName: "MockPlugin",
      commandName: "AddItem",
      values: [
        {
          category: "struct",
          name: "item",
          param: {
            name: "itemId",
            attr: {
              kind: "item",
              default: 0,
            },
          },
          roootName: "AddItem",
          rootType: "args",
          value: 5,
        },
        {
          category: "struct",
          name: "number",
          param: {
            name: "quantity",
            attr: {
              default: 1,
              kind: "number",
              desc: "Adds an item to the inventory.",
            },
          },
          roootName: "AddItem",
          rootType: "args",
          value: 10,
        },
      ],
    };
    const result = extractCommandArgsByKey(args, "MockPlugin:AddItem", r);
    expect(result).not.toBeUndefined();
    expect(result?.commandName).toBe("AddItem");
    expect(result?.pluginName).toBe("MockPlugin");
    expect(result).toEqual(values);
  });
});
