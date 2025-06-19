import type { JSONSchemaType } from "ajv";
import type { KindOfNumber } from "./core/kinds/kinds";
import type { PluginCommand } from "./core/kinds/plugin";
import { compilePlugin } from "./plugin";

interface Food {
  name: string;
  price: number;
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

const openTrade: PluginCommand<Comamnd_OpenTrade> = {
  command: "OpenTrade",
  args: {
    items: {
      kind: "struct[]",
      struct: {
        structName: "Drink",
        params: {
          name: { kind: "string" },
          price: { kind: "number" },
          alcohol: { kind: "boolean" },
          id: { kind: "number" },
        },
      },
      default: [],
    },
    message: {
      kind: "string",
      default: "Welcome to the trade!",
    },
  },
};

const checkStock: PluginCommand<Command_CheckDrinkStock> = {
  command: "CheckDrinkStock",
  args: {
    drinkId: { kind: "item", default: 0 },
    amount: { kind: "number", default: 1 },
    variable: { kind: "variable", default: 0 },
  },
};

const params = {};

const mockSchema = {
  //  $schema: "https://json-schema.org/draft/2020-12/schema",
  $defs: {
    plugin: {
      structs: {
        Drink: {
          type: "object",
          properties: {
            id: { type: "number" },
            name: { type: "string" },
            alcohol: { type: "boolean" },
            price: { type: "number" },
          },
          required: ["id", "name", "alcohol", "price"],
          additionalProperties: false,
        } satisfies JSONSchemaType<Drink>,
      },
      commands: {
        openTrade: {
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
        checkStock: {
          type: "string",
          description: "Check the stock of a drink",
          title: "Check Drink Stock",
          default: "CheckDrinkStock",
        } satisfies JSONSchemaType<string>,
        alcohol: {
          Sake: {
            type: "object",
            properties: {
              type: { const: "sake" },
              percent: { type: "number" },
            },
            required: ["type", "percent"],
            additionalProperties: false,
          },
        },
        juice: {
          OrangeJuice: {
            type: "object",
            properties: {
              type: { const: "orange_juice" },
              sugarFree: { type: "boolean" },
            },
            required: ["type", "sugarFree"],
            additionalProperties: false,
          },
        },
        tea: {
          GreenTea: {
            type: "object",
            properties: {
              type: { const: "green_tea" },
              temperature: { type: "number" },
            },
            required: ["type", "temperature"],
            additionalProperties: false,
          },
        },
      },
    },
  },
  type: "object",
  properties: {
    item: {
      oneOf: [
        { $ref: "#/$defs/plugin/vegetable/Carrot" },
        { $ref: "#/$defs/plugin/grain/Rice" },
        { $ref: "#/$defs/plugin/drink/alcohol/Sake" },
        { $ref: "#/$defs/plugin/drink/juice/OrangeJuice" },
        { $ref: "#/$defs/plugin/drink/tea/GreenTea" },
      ],
    },
  },
  required: ["item"],
} as const;

compilePlugin({
  commands: [openTrade, checkStock] satisfies PluginCommand<object>[],
  params: {
    aa: {
      kind: "number",
      default: 0,
    } satisfies KindOfNumber,
  },
  structs: [],
});
