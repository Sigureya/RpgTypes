import type { JSONSchemaType } from "ajv";
import type { Data_Actor } from "./types";

const SCHEMA_DATA_ACTOR = {
  type: "object",
  required: [
    "name",
    "id",
    "nickname",
    "battlerName",
    "characterName",
    "characterIndex",
    "faceName",
    "faceIndex",
    "classId",
    "initialLevel",
    "maxLevel",
  ],
  properties: {
    name: { type: "string" },
    battlerName: { type: "string" },
    characterName: { type: "string" },
    characterIndex: { type: "integer" },
    faceName: { type: "string" },
    faceIndex: { type: "integer", minimum: 0, maximum: 7 },
    id: { type: "integer", minimum: 0 },
    nickname: { type: "string" },

    profile: { type: "string" },
    initialLevel: { type: "integer", minimum: 0 },
    maxLevel: { type: "integer" },
    classId: { type: "integer", minimum: 0 },
    equips: { type: "array", items: { type: "integer" } },
    note: { type: "string" },
    traits: {
      type: "array",
      items: {
        type: "object",
        properties: {
          code: { type: "integer" },
          dataId: { type: "integer" },
          value: { type: "integer" },
        },
        required: ["code", "dataId", "value"],
      },
    },
  },
} as const satisfies JSONSchemaType<Data_Actor>;
export default SCHEMA_DATA_ACTOR;
