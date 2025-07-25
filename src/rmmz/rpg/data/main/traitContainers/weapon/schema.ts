import type { JSONSchemaType } from "ajv";
import type { Data_Weapon } from "./weapon";

const SCHEMA_DATA_WEAPON = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "price",
    "params",
    "traits",
    "note",
    "etypeId",
    "animationId",
  ],

  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    wtypeId: { type: "integer", minimum: 0 },
    animationId: { type: "integer", minimum: 0 },
    params: {
      type: "array",
      items: [
        { type: "integer" }, // mhp
        { type: "integer" }, // mmp
        { type: "integer" }, // atk
        { type: "integer" }, // def
        { type: "integer" }, // mat
        { type: "integer" }, // mdf
        { type: "integer" }, // agi
        { type: "integer" }, // luk
      ],
      minItems: 8,
      maxItems: 8,
    },
    damage: {
      type: "object",
      properties: {
        type: { type: "integer", minimum: 0 },
        elementId: { type: "integer", minimum: 0 },
        formula: { type: "string" },
        variance: { type: "integer", minimum: 0, maximum: 100 },
        critical: { type: "boolean", default: false },
      },
      required: ["type", "elementId", "formula", "variance", "critical"],
    },
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
    },
  },
} as const satisfies JSONSchemaType<Data_Weapon>;
export default SCHEMA_DATA_WEAPON;
