import type { MapEventPage } from "@RpgTypes/rmmz";
import type { Schema } from "ajv";
import { SCHEMA_MAP_EVENT_PAGE_CONDITION } from "./condition";
import { SCHEMA_MAP_EVENT_IMAGE } from "./image";
import { SCHEMA_MOVEROUTE_DATA } from "./moveRoute";

export const SCHEMA_MAP_EVENT_PAGE = {
  type: "object",
  additionalProperties: false,
  required: [
    "conditions",
    "image",
    "list",
    "moveRoute",
    "directionFix",
    "priorityType",
    "moveFrequency",
  ],
  properties: {
    priorityType: { type: "integer" },
    directionFix: { type: "boolean" },
    moveFrequency: { type: "integer" },
    conditions: SCHEMA_MAP_EVENT_PAGE_CONDITION,
    list: {
      type: "array",
      items: {
        type: "object",
        required: ["code", "parameters", "indent"],
        properties: {
          code: { type: "integer" },
          indent: { type: "integer" },
          parameters: {
            type: "array",
            items: {},
          },
        },
      },
    },
    stepAnime: { type: "boolean" },
    walkAnime: { type: "boolean" },
    through: { type: "boolean" },
    image: SCHEMA_MAP_EVENT_IMAGE,
    moveRoute: SCHEMA_MOVEROUTE_DATA,
  } as const satisfies Record<keyof MapEventPage, Schema>,
};
