import type { JSONSchemaType } from "ajv";
import type { System_GameInitial } from "./subset";

export const makeGameInitial = (
  gameInitial: Partial<System_GameInitial> = {}
): System_GameInitial => {
  return {
    startMapId: gameInitial.startMapId ?? 0,
    startX: gameInitial.startX ?? 0,
    startY: gameInitial.startY ?? 0,
    partyMembersArray: gameInitial.partyMembersArray
      ? Array.from(gameInitial.partyMembersArray)
      : [1],
  } satisfies System_GameInitial;
};

export const SCHEMA_SYSTEM_GAME_INITIAL = {
  additionalProperties: true,
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
