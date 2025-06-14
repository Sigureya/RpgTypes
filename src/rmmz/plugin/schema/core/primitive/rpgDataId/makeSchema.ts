import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { DataIndexArg } from "../numbers";
import type { DataTypeUnion } from "./rpgDataTypesNames";
import type { RmmzParamCore_DataId } from "./types";

export const rmmzDataTypes = () =>
  [
    "actor",
    "switch",
    "armor",
    "skill",
    "item",
    "weapon",
    "troop",
    "class",
    "state",
    "variable",
    "common_event",
  ] satisfies DataTypeUnion[];

export const rmmzDataTypeArrays = (): `${DataTypeUnion}[]`[] => [
  "actor[]",
  "switch[]",
  "weapon[]",
  "item[]",
  "armor[]",
  "skill[]",
  "state[]",
  "troop[]",
  "class[]",
  "variable[]",
  "common_event[]",
];

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
  } satisfies Schema & JSONSchemaType<RmmzParamCore_DataId<DataTypeUnion>>);

export const makeDataIndexValueSchema = <Name extends DataTypeUnion>(
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
