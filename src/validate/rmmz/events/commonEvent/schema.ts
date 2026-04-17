import type { Data_CommonEventLike } from "@RpgTypes/rmmz";

export const SCHEMA_DATA_COMMON_EVENT = {
  type: "object",
  required: [
    "trigger",
    "id",
    "name",
    "list",
    "switchId",
  ] satisfies (keyof Data_CommonEventLike)[],
  properties: {
    trigger: { type: "integer", minimum: 0 },
    id: { type: "integer", minimum: 0 },
    name: { type: "string" },
    list: {
      type: "array",
      items: {
        type: "object",
        required: ["code", "indent", "parameters"],
        properties: {
          code: { type: "integer" },
          indent: { type: "integer" },
          parameters: { type: "array" },
        },
      },
    },
    switchId: { type: "integer", minimum: 0 },
  },
} as const;
