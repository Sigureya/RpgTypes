import type { JSONSchemaType } from "ajv";
import type { System_GameInitial } from "./types";

const SCHEMA_SYSTEM_GAME_INITIAL = {
  additionalProperties: false,
  type: "object",
  required: ["startMapId", "startX", "startY", "partyMembersArray"],
  properties: {
    startMapId: { type: "integer", minimum: 0 },
    startX: { type: "integer", minimum: 0 },
    startY: { type: "integer", minimum: 0 },
    partyMembersArray: {
      type: "array",
      items: { type: "integer", minimum: 0 },
    },
  },
} as const satisfies JSONSchemaType<System_GameInitial>;

export default SCHEMA_SYSTEM_GAME_INITIAL;
