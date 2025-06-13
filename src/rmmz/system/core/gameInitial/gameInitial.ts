import type { System_GameInitial } from "./types";

export const makeGameInitial = (
  gameInitial: Partial<System_GameInitial> = {}
): System_GameInitial => ({
  startMapId: gameInitial.startMapId ?? 0,
  startX: gameInitial.startX ?? 0,
  startY: gameInitial.startY ?? 0,
  partyMembersArray: gameInitial.partyMembersArray
    ? Array.from(gameInitial.partyMembersArray)
    : [1],
});
