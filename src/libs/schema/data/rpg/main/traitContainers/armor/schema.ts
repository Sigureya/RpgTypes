import type { ParamArray } from "../members";
import type { Trait } from "../trait";
import type { Data_Armor } from "./armor";
import type { JSONSchemaType } from "ajv";

export const SCHEMA_DATA_ARMMOR = {
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
    "atypeId",
  ],

  properties: {
    name: { type: "string" },
    id: { type: "integer", minimum: 0 },
    description: { type: "string" },
    iconIndex: { type: "integer", minimum: 0 },
    price: { type: "integer", minimum: 0 },
    note: { type: "string" },
    etypeId: { type: "integer", minimum: 0 },
    atypeId: { type: "integer", minimum: 0 },

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
    } satisfies JSONSchemaType<ParamArray>,

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
  },
} as const satisfies JSONSchemaType<Data_Armor>;
