import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { DataIndexArg } from "../numbers";
import type { DataKindUnion } from "./rpgDataTypesNames";
import { rmmzDataTypes } from "./sourceId";
import type { RmmzParamCore_DataId, X_RmmzParamCore_DataId } from "./types";

const srcSys = (x: DataKindUnion): x is "variable" | "switch" =>
  ["variable", "switch"].includes(x);

const xxx = <T extends DataKindUnion>(
  data: RmmzParamCore_DataId<T>
): X_RmmzParamCore_DataId => {
  return data.type === "variable" || data.type === "switch"
    ? { sourceId: { author: "rmmz", module: "data", kind: "actor" } }
    : { sourceId: { author: "rmmz", module: "data", kind: data.type } };
};

export const dataIndexSchema = () =>
  ({
    type: "object",
    required: ["type", "default"],
    properties: {
      default: { type: "integer", default: 0, minimum: 0 },
      type: {
        type: "string",
        enum: rmmzDataTypes(),
      },
    },
  } satisfies Schema & JSONSchemaType<RmmzParamCore_DataId<DataKindUnion>>);

export const makeDataIndexValueSchema = <Name extends DataKindUnion>(
  index: DataIndexArg<Name>
) =>
  ({
    title: index.text,
    default: index.default satisfies number,
    type: "integer",
    minimum: 0,
    "x-rmmzParam": {
      kind: index.type,
      parent: index.parent,
    },
  } satisfies JSONSchemaType<number> & Schema);
