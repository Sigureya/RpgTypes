import type { JSONSchemaType, Schema } from "ajv";
import { makeXXXSchema } from "../makeXXX";
import type { DataIndexArg } from "../numbers";
import type { DataTypeUnion } from "../rpgDataTypes";

export const dataXXX = () =>
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
    "common_event",
  ] satisfies DataTypeUnion[];

export const dataArrayXXX = (): `${DataTypeUnion}[]`[] => [
  "actor[]",
  "weapon[]",
  "item[]",
  "armor[]",
  "skill[]",
  "state[]",
  "troop[]",
  "class[]",
  "common_event[]",
];

export const indexIndex = () =>
  ({
    type: "object",
    required: ["type", "default"],
    properties: {
      ...makeXXXSchema(),
      default: { type: "integer", default: 0, minimum: 0 },
      type: {
        type: "string",
        enum: dataXXX(),
      },
    },
  } satisfies JSONSchemaType<DataIndexArg<DataTypeUnion>>);

export const indexIndex2 = () =>
  ({
    type: "object",
    required: ["type", "default"],
    properties: {
      ...makeXXXSchema(),
      default: {
        type: "array",
        default: [] as number[],
        items: { type: "integer", minimum: 0, default: 0 },
      },
      type: {
        type: "string",
        enum: dataArrayXXX(),
      },
    },
  } satisfies Schema);
