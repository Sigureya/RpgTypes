import type { JSONSchemaType } from "ajv";
import type { ParamArray } from "./types";

const SCHEMA_PARAM_ARRAY = {
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
} as const satisfies JSONSchemaType<ParamArray>;

export default SCHEMA_PARAM_ARRAY;
