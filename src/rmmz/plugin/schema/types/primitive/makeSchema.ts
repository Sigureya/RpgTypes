import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { XXXTexts } from "./annotationBase";
import type { BooleanArg } from "./boolean";
import type {
  Actor,
  DataIndexArg,
  NumberArg,
  Primitive_NumbersArray,
  Weapon,
} from "./numbers";
import type { ToArrayAnnotation } from "./primitiveArray";
import type { DataTypeUnion } from "./rpgDataTypes";

const makeXXXSchema = () =>
  ({
    desc: {
      type: "string",
      maxLength: 250,
      nullable: true as const,
    },
    text: {
      type: "string",
      maxLength: 250,
      nullable: true as const,
    },
    parent: {
      type: "string",
      maxLength: 250,
      nullable: true as const,
    },
  } satisfies Record<keyof XXXTexts, JSONSchemaType<string>>);

const xxx = (): JSONSchemaType<NumberArg> => ({
  type: "object",
  required: ["type", "default"],
  properties: {
    ...makeXXXSchema(),
    digit: { type: "integer", minimum: 0, default: 0, nullable: true },
    min: { type: "number", default: Number.MIN_SAFE_INTEGER, nullable: true },
    max: { type: "number", default: Number.MAX_SAFE_INTEGER, nullable: true },
    default: { type: "number", default: 0 },
    type: { type: "string", enum: ["number"] },
  },
});

const bbb = (): JSONSchemaType<BooleanArg> => ({
  type: "object",
  required: ["type", "default"],
  properties: {
    ...makeXXXSchema(),
    on: { type: "string", default: "ON", nullable: true },
    off: { type: "string", default: "OFF", nullable: true },
    default: { type: "boolean", default: false },
    type: { type: "string", enum: ["boolean"] },
  },
});

const dataXXX = () =>
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

const dataArrayXXX = (): `${DataTypeUnion}[]`[] => [
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

const indexIndex = (): JSONSchemaType<DataIndexArg<string>> => ({
  type: "object",
  required: ["type", "default"],
  properties: {
    ...makeXXXSchema(),
    default: { type: "number", default: 0 },
    type: {
      type: "string",
      enum: dataXXX(),
    },
  },
});
const indexIndex2 = () =>
  ({
    type: "object",
    required: ["type", "default"],
    properties: {
      ...makeXXXSchema(),
      default: {
        type: "array",
        default: [] as number[],
        items: { type: "number", minimum: 0, default: 0 },
      },
      type: {
        type: "string",
        enum: dataArrayXXX(),
      },
    },
  } satisfies Schema);
