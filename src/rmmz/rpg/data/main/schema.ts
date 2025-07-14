import type { JSONSchemaType } from "ajv";
import type { Damage } from "./members";
import type { Data_Item, Data_Skill, ItemEffect } from "./usableItems";

const SCHEMA_STRING = {
  type: "string",
} as const satisfies JSONSchemaType<string>;

const SCHEMA_INTEGER = {
  type: "integer",
} as const satisfies JSONSchemaType<number>;
const SCHEMA_POSITIVE_INTEGER = {
  type: "integer",
  minimum: 0,
} as const satisfies JSONSchemaType<number>;

const SCHEMA_DAMATE = {
  type: "object",
  properties: {
    type: { type: "integer" },
    elementId: SCHEMA_POSITIVE_INTEGER,
    formula: SCHEMA_STRING,
    variance: SCHEMA_INTEGER,
    critical: { type: "boolean" },
  },
  required: ["type", "elementId", "formula", "variance", "critical"],
  additionalProperties: false,
} as const satisfies JSONSchemaType<Damage>;

const SCHEMA_EFFECT = {
  type: "object",
  properties: {
    code: SCHEMA_INTEGER,
    dataId: SCHEMA_POSITIVE_INTEGER,
    value1: SCHEMA_INTEGER,
    value2: SCHEMA_INTEGER,
  },
  required: ["code", "dataId", "value1", "value2"],
  additionalProperties: false,
} as const satisfies JSONSchemaType<ItemEffect>;

export const SCHEMA_DATA_SKILL = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "message1",
    "message2",
    "messageType",
    "mpCost",
    "requiredWtypeId1",
    "requiredWtypeId2",
    "stypeId",
    "tpCost",
    "animationId",
    "hitType",
    "occasion",
    "repeats",
    "scope",
    "speed",
    "successRate",
    "tpGain",
    "note",
    "effects",
  ],

  properties: {
    name: SCHEMA_STRING,
    id: SCHEMA_POSITIVE_INTEGER,
    description: SCHEMA_STRING,
    iconIndex: SCHEMA_POSITIVE_INTEGER,
    message1: SCHEMA_STRING,
    message2: SCHEMA_STRING,

    messageType: SCHEMA_POSITIVE_INTEGER,
    mpCost: SCHEMA_INTEGER,
    requiredWtypeId1: SCHEMA_POSITIVE_INTEGER,
    requiredWtypeId2: SCHEMA_POSITIVE_INTEGER,
    stypeId: SCHEMA_POSITIVE_INTEGER,
    tpCost: SCHEMA_INTEGER,

    animationId: SCHEMA_POSITIVE_INTEGER,
    hitType: SCHEMA_POSITIVE_INTEGER,
    occasion: { type: "integer" },
    repeats: SCHEMA_POSITIVE_INTEGER,
    scope: SCHEMA_INTEGER,
    speed: SCHEMA_INTEGER,
    successRate: SCHEMA_INTEGER,
    tpGain: SCHEMA_INTEGER,

    note: SCHEMA_STRING,

    effects: {
      type: "array",
      items: SCHEMA_EFFECT,
    } satisfies JSONSchemaType<Data_Item["effects"]>,
    damage: SCHEMA_DAMATE,
  },

  additionalProperties: false,
} as const satisfies JSONSchemaType<Data_Skill>;

export const SCHEMA_DATA_ITEM = {
  type: "object",
  required: [
    "name",
    "id",
    "description",
    "iconIndex",
    "note",
    "animationId",
    "hitType",
    "occasion",
    "repeats",
    "scope",
    "speed",
    "successRate",
    "tpGain",
    "consumable",
    "price",
    "effects",
  ],

  properties: {
    name: SCHEMA_STRING,
    id: SCHEMA_POSITIVE_INTEGER,
    description: SCHEMA_STRING,
    iconIndex: SCHEMA_POSITIVE_INTEGER,
    note: SCHEMA_STRING,
    animationId: SCHEMA_POSITIVE_INTEGER,
    hitType: SCHEMA_INTEGER,
    occasion: SCHEMA_INTEGER,
    repeats: SCHEMA_INTEGER,
    scope: SCHEMA_INTEGER,
    speed: SCHEMA_INTEGER,
    successRate: SCHEMA_INTEGER,
    tpGain: SCHEMA_INTEGER,
    consumable: { type: "boolean" },
    price: SCHEMA_POSITIVE_INTEGER,
    itypeId: SCHEMA_POSITIVE_INTEGER,
    effects: {
      type: "array",
      items: SCHEMA_EFFECT,
    } satisfies JSONSchemaType<Data_Item["effects"]>,
    damage: SCHEMA_DAMATE,
  },
} as const satisfies JSONSchemaType<Data_Item>;
