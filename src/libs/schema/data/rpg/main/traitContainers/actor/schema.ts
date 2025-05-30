import type { JSONSchemaType } from "ajv";
import type { Data_Actor } from "./types";

export const SCHEMA_DATA_ACTOR = {
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

export const normalizeDataActor = (data: Partial<Data_Actor>): Data_Actor => {
  return {
    name: data.name ?? "",
    id: data.id ?? 0,
    battlerName: data.battlerName ?? "",
    characterName: data.characterName ?? "",
    characterIndex: data.characterIndex ?? 0,
    faceName: data.faceName ?? "",
    faceIndex: data.faceIndex ?? 0,
    traits: [],
    note: data.note ?? "",
    classId: data.classId ?? 0,
    nickname: data.nickname ?? "",
    profile: data.profile ?? "",
    equips: [],
    initialLevel: data.initialLevel ?? 0,
    maxLevel: data.maxLevel ?? 0,
  };
};
