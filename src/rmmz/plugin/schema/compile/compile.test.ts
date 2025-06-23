import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import type {
  PluginCommand,
  PluginStructEx,
  StructParam,
} from "./kinds/core/pluginEntriesEx";
import { compilePluginStruct } from "./struct";
interface PluginXX {
  commands: PluginCommand<object>[];
  structs: PluginStructEx<object>[];
  params: Record<string, StructParam>;
}

interface Drink {
  name: string;
  id: number;
  price: number;
  alcohol: boolean;
}

interface Comamnd_OpenTrade {
  items: Drink[];
  message: string;
}
interface Command_CheckDrinkStock {
  drinkId: number;
  amount: number;
  variable: number;
}

const mockPlugin = {
  commands: [
    {
      command: "OpenTrade",
      args: {
        items: {
          kind: "struct_def[]",
          struct: "Drink",
          params: {
            id: { kind: "number" },
            name: { kind: "string" },
            alcohol: { kind: "boolean" },
            price: { kind: "number" },
          },
          default: [],
        },
        message: {
          kind: "string",
          default: "Welcome to the trade!",
        },
      },
    } satisfies PluginCommand<Comamnd_OpenTrade>,
    {
      command: "CheckDrinkStock",
      args: {
        drinkId: { kind: "item", default: 0 },
        amount: { kind: "number", default: 1 },
        variable: { kind: "variable", default: 0 },
      },
    } satisfies PluginCommand<Command_CheckDrinkStock>,
  ],
  structs: [],
  params: {
    checkStockText: {
      kind: "string",
      text: "Check Drink Stock",
      default: "Check the stock of a drink",
      desc: "Check the stock of a drink",
    },
  },
} satisfies PluginXX;

const mockSchema = {
  //  $schema: "https://json-schema.org/draft/2020-12/schema",
  $defs: {
    plugin: {
      structs: {
        Drink: {
          type: "object",
          properties: {
            id: { type: "integer" },
            name: { type: "string" },
            alcohol: { type: "boolean" },
            price: { type: "integer" },
          },
          required: ["id", "name", "alcohol", "price"],
          additionalProperties: false,
        } satisfies JSONSchemaType<Drink>,
      },
      commands: {
        OpenTrade: {
          type: "object",
          properties: {
            items: {
              type: "array",
              items: {
                $ref: "#/$defs/plugin/structs/Drink",
              },
            },
            message: { type: "string" },
          },
          required: ["items", "message"] satisfies (keyof Comamnd_OpenTrade)[],
          additionalProperties: false,
        } as const,
      },
      params: {
        checkStockText: {
          type: "string",
          description: mockPlugin.params.checkStockText.desc,
          title: mockPlugin.params.checkStockText.text,
          default: mockPlugin.params.checkStockText,
        } satisfies JSONSchemaType<string>,
      },
    },
  },
} as const;

// describe("Plugin Schema Compilation", () => {
//   const result = compilePlugin(mockPlugin);
//   test("should compile plugin schema correctly", () => {
//     expect(result.schema).toEqual(mockSchema);
//   });
// });

describe("", () => {
  const result = compilePluginStruct<Drink>(
    {
      moduleName: "plugin",
      author: "Author",
    },
    {
      struct: "Drink",
      params: {
        name: { kind: "string", default: "Default Drink" },
        price: { kind: "number", default: 100 },
        alcohol: { kind: "boolean", default: false },
        id: { kind: "number", default: 0 },
      },
    },
    {}
  );
  test("", () => {
    expect(result.schema).toEqual({
      type: "object",
      title: "Drink",
      properties: {
        name: { type: "string", default: "Default Drink" },
        price: { type: "integer", default: 100 },
        alcohol: { type: "boolean", default: false },
        id: { type: "integer", default: 0 },
      },
      required: ["name", "price", "alcohol", "id"],
      additionalProperties: false,
    } satisfies JSONSchemaType<Drink>);
  });
});
