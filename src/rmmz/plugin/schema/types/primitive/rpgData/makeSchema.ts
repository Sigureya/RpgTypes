import type { JSONSchemaType, Schema } from "ajv";
import { makeRmmzParamTextSchema } from "../makeTextField";
import type { DataIndexArg } from "../numbers";
import type { DataTypeUnion } from "../rpgDataTypes";

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
      ...makeRmmzParamTextSchema(),
      default: { type: "integer", default: 0, minimum: 0 },
      type: {
        type: "string",
        enum: rmmzDataTypes(),
      },
    },
  } satisfies JSONSchemaType<DataIndexArg<DataTypeUnion>>);

export const dataIndexArraySchema = () =>
  ({
    type: "object",
    required: ["type", "default"],
    properties: {
      ...makeRmmzParamTextSchema(),
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
  } satisfies Schema);

export const makeDataIndexValueSchema = <Name extends DataTypeUnion>(
  index: DataIndexArg<Name>
) => {
  return {
    title: index.text,
    default: index.default satisfies number,
    type: "integer",
    "x-rmmzParam": {
      kind: index.type,
      parent: index.parent,
    },
  } satisfies JSONSchemaType<number> & Schema;
};
