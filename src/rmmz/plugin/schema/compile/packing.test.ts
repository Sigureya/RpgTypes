import { describe, expect, test } from "vitest";
import type { JSONSchemaType } from "ajv";
import type { TypePackage as mockTypePackage } from "./packing";
import { compileFromStructPackage, compileFromStrucArray } from "./packing";
import type { PrimitiveStructType } from "./pluginScehamType";

interface Food {
  name: string;
  calories: number;
}

interface Drink {
  name: string;
  volume: number;
}
interface SetMenu {
  food: Food;
  drink: Drink;
  price: number;
}

type Pack = {
  Food: Food;
  Drink: Drink;
  SetMenu: SetMenu;
};

const mockTypePackage = {
  Food: {
    struct: "Food",
    params: {
      name: { kind: "string", default: "" },
      calories: { kind: "number", default: 0 },
    },
  } satisfies PrimitiveStructType<Food>,
  Drink: {
    struct: "Drink",
    params: {
      name: { kind: "string", default: "" },
      volume: { kind: "number", default: 0 },
    },
  } satisfies PrimitiveStructType<Drink>,
  SetMenu: {
    struct: "SetMenu",
    params: {
      food: { kind: "struct", struct: "Food" },
      drink: { kind: "struct", struct: "Drink", default: {} },
      price: { kind: "number", default: 0 },
    },
  } satisfies PrimitiveStructType<SetMenu>,
} satisfies mockTypePackage<Pack>;

const mockSchema = {
  Food: {
    type: "object",
    title: "Food",
    properties: {
      name: { type: "string", default: "" },
      calories: { type: "integer", default: 0 },
    },
    required: ["name", "calories"],
  } satisfies JSONSchemaType<Food>,
  Drink: {
    type: "object",
    title: "Drink",
    properties: {
      name: { type: "string", default: "" },
      volume: { type: "integer", default: 0 },
    },
    required: ["name", "volume"],
  } satisfies JSONSchemaType<Drink>,
  SetMenu: {
    type: "object",
    title: "SetMenu",
    properties: {
      food: { $ref: "#/definitions/Food" },
      drink: { $ref: "#/definitions/Drink" },
      price: { type: "integer", default: 0 },
    },
    required: ["food", "drink", "price"],
  } satisfies JSONSchemaType<SetMenu>,
};
test("", () => {
  const result = compileFromStructPackage({ structs: mockTypePackage });
  expect(result).toEqual(mockSchema);
});
describe("", () => {
  const result = compileFromStrucArray([
    mockTypePackage.Food,
    mockTypePackage.Drink,
  ]);
  test("compileStruct3", () => {
    expect(result).toEqual({
      Food: mockSchema.Food,
      Drink: mockSchema.Drink,
    });
  });
});
