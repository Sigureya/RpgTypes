import { describe, test, expect } from "vitest";
import type { JSONSchemaType } from "ajv";
import { defineStructs } from "./core/kinds/compileLog";
import type { PluginStruct } from "./core/kinds/plugin";
import { compilePluginStruct } from "./struct";

interface Carrot {
  kind: "carrot";
  color: string;
}
interface Rice {
  kind: "rice";
  origin: string;
}
interface Sake {
  type: "sake";
  percent: number;
}
interface OrangeJuice {
  type: "orange_juice";
  sugarFree: boolean;
}
interface GreenTea {
  type: "green_tea";
  temperature: number;
}
interface Drink {
  alocohol: Sake;
  juice: OrangeJuice;
  tea: GreenTea;
}
interface Food {
  vegetable: Carrot;
  grain: Rice;
  drink: Drink;
}

const foodSchema = {
  title: "Food",
  type: "object",
  properties: {
    vegetable: {
      title: "Carrot",
      type: "object",
      properties: {
        kind: { type: "string", default: "carrot" },
        color: { type: "string", default: "orange" },
      },
      required: ["kind", "color"],
      additionalProperties: false,
    },
    grain: {
      title: "Rice",
      type: "object",
      properties: {
        kind: { type: "string", default: "rice" },
        origin: { type: "string", default: "Japan" },
      },
      required: ["kind", "origin"],
      additionalProperties: false,
    },
    drink: {
      title: "Drink",
      type: "object",
      properties: {
        alocohol: {
          title: "Sake",
          type: "object",
          properties: {
            type: { type: "string", default: "sake" },
            percent: { type: "integer", default: 15 },
          },
          required: ["type", "percent"],
          additionalProperties: false,
        },
        juice: {
          title: "OrangeJuice",
          type: "object",
          properties: {
            type: { type: "string", default: "orange_juice" },
            sugarFree: { type: "boolean", default: true },
          },
          required: ["type", "sugarFree"],
          additionalProperties: false,
        },
        tea: {
          title: "GreenTea",
          type: "object",
          properties: {
            type: { type: "string", default: "green_tea" },
            temperature: { type: "integer", default: 80 },
          },
          required: ["type", "temperature"],
          additionalProperties: false,
        },
      },
      required: ["alocohol", "juice", "tea"],
      additionalProperties: false,
    },
  },
  required: ["vegetable", "grain", "drink"],
  additionalProperties: false,
} as const satisfies JSONSchemaType<Food>;

const foodStruct: PluginStruct<Food> = {
  struct: "Food",
  params: {
    vegetable: {
      kind: "struct",
      struct: "Carrot",
      params: {
        kind: { kind: "string", default: "carrot" },
        color: { kind: "string", default: "orange" },
      },
    },
    grain: {
      kind: "struct",
      struct: "Rice",
      params: {
        kind: { kind: "string", default: "rice" },
        origin: { kind: "string", default: "Japan" },
      },
    },
    drink: {
      kind: "struct",
      struct: "Drink",
      params: {
        alocohol: {
          kind: "struct",
          struct: "Sake",
          params: {
            type: { kind: "string", default: "sake" },
            percent: { kind: "number", default: 15 },
          },
        },
        juice: {
          kind: "struct",
          struct: "OrangeJuice",
          params: {
            type: { kind: "string", default: "orange_juice" },
            sugarFree: { kind: "boolean", default: true },
          },
        },
        tea: {
          kind: "struct",
          struct: "GreenTea",
          params: {
            type: { kind: "string", default: "green_tea" },
            temperature: { kind: "number", default: 80 },
          },
        },
      },
    },
  },
};

const expectedStructs = {
  Drink: foodSchema.properties.drink,
  OrangeJuice: foodSchema.properties.drink.properties.juice,
  GreenTea: foodSchema.properties.drink.properties.tea,
  Rice: foodSchema.properties.grain,
  Sake: foodSchema.properties.drink.properties.alocohol,
  Carrot: foodSchema.properties.vegetable,
};
describe("", () => {
  const result = compilePluginStruct(
    {
      moduleName: "FoodModule",
      author: "FoodAuthor",
    },
    foodStruct,
    {}
  );
  test("", () => {
    expect(result.schema).toEqual(foodSchema);
  });
  test("", () => {
    const table = defineStructs(result.logs);
    expect(table).toEqual(expectedStructs);
  });
});
