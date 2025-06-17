import type { Schema } from "jsonschema";
import type { NewRmmzParam_Boolean, NewRmmzParam_Number } from "./newParamType";
import type { X_Param_Boolean, X_Param_Number } from "./x-rpg-param";
import type { SchemaDescriptionFields } from "./x-rpg-param2";

const bbb = (
  schema: SchemaDescriptionFields<boolean>,
  xparam: X_Param_Boolean
) =>
  ({
    type: "boolean",
    default: schema.default,
    desc: schema.description,
    text: schema.title,
    on: xparam.data.on ?? "",
    off: xparam.data.off ?? "",
    parent: xparam.parent ?? "",
  } satisfies Required<NewRmmzParam_Boolean>);

export const mergeNumebrSchema = (
  schema: SchemaDescriptionFields<number> & {
    maximum?: number;
    minimum?: number;
  },
  xparam: X_Param_Number
) =>
  ({
    type: "number",
    default: Number.isNaN(schema.default) ? 0 : schema.default,
    desc: schema.description,
    text: schema.title,
    max: schema.maximum ?? Number.MAX_SAFE_INTEGER,
    min: schema.minimum ?? Number.MIN_SAFE_INTEGER,
    parent: xparam.parent ?? "",
    digit: xparam.data.digit ?? 0,
  } satisfies Required<NewRmmzParam_Number>);
