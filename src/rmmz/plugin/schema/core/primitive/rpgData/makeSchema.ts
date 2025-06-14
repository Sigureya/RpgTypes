import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import { makeRmmzParamTextSchemaOld } from "../metaTextField/metaTextField";
import type { DataIndexArg } from "../numbers";
import type { DataTypeUnion } from "./rpgDataTypesNames";
import type { RmmzParam_DataIndex, RmmzParam_DataIndexArray } from "./types";

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
      ...makeRmmzParamTextSchemaOld(),
      default: { type: "integer", default: 0, minimum: 0 },
      type: {
        type: "string",
        enum: rmmzDataTypes(),
      },
    },
  } satisfies Schema & JSONSchemaType<RmmzParam_DataIndex<DataTypeUnion>>);

export const dataIndexArraySchema = () =>
  ({
    type: "object",
    required: ["type", "default"],

    properties: {
      ...makeRmmzParamTextSchemaOld(),
      default: {
        type: "array",
        default: [] as number[],
        items: { type: "integer", minimum: 0, default: 0 },
      },
      type: {
        type: "string",
        enum: rmmzDataTypeArrays(),
      },
    },
  } satisfies Schema & JSONSchemaType<RmmzParam_DataIndexArray<DataTypeUnion>>);

export const makeDataIndexValueSchema = <Name extends DataTypeUnion>(
  index: DataIndexArg<Name>
) => {
  return {
    title: index.text,
    default: index.default satisfies number,
    type: "integer",
    minimum: 0,
    "x-rmmzParam": {
      kind: index.type,
      parent: index.parent,
    },
  } satisfies JSONSchemaType<number> & Schema;
};
