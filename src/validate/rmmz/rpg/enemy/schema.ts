import type {
  ParamArray,
  Enemy_Action,
  Trait,
  DropItem,
  Data_Enemy,
} from "@RpgTypes/rmmz/rpg";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_DATA_ENEMY = {
  type: "object",
  required: [
    "name",
    "id",
    "battlerName",
    "battlerHue",
    "exp",
    "gold",
    "note",
    "params",
    "dropItems",
    "traits",
    "actions",
  ],

  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    battlerHue: { type: "integer", minimum: 0 },
    battlerName: { type: "string" },
    exp: { type: "integer", minimum: 0 },
    gold: { type: "integer", minimum: 0 },
    note: { type: "string" },

    params: {
      type: "array",
      items: [
        { type: "integer" },
        { type: "integer" },
        { type: "integer" },
        { type: "integer" },
        { type: "integer" },
        { type: "integer" },
        { type: "integer" },
        { type: "integer" },
      ],
      minItems: 8,
      maxItems: 8,
    } as const satisfies JSONSchemaType<ParamArray>,
    actions: {
      type: "array",

      items: {
        type: "object",
        required: [
          "conditionParam1",
          "conditionParam2",
          "conditionType",
          "skillId",
          "rating",
        ],
        properties: {
          conditionParam1: { type: "integer" },
          conditionParam2: { type: "integer" },
          conditionType: { type: "integer" },
          skillId: { type: "integer" },
          rating: { type: "integer" },
        },
      },
    } satisfies JSONSchemaType<Enemy_Action[]>,

    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" },
        },
        required: ["code", "dataId", "value"],
      },
    } satisfies JSONSchemaType<Trait[]>,

    dropItems: {
      type: "array",
      items: {
        type: "object",
        properties: {
          kind: { type: "integer" },
          dataId: { type: "integer" },
          denominator: { type: "integer", minimum: 0 },
          rate: { type: "number" },
        },
        required: ["kind", "dataId", "denominator"],
      },
    } satisfies JSONSchemaType<DropItem[]>,
  },
} as const satisfies JSONSchemaType<Data_Enemy>;
