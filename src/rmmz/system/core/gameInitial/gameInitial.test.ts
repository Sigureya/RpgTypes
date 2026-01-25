import { describe, test, expect } from "vitest";
import { makeGameInitial } from "./gameInitial";
import type { System_GameInitial } from "./types";

describe("makeGameInitial", () => {
  test("default values", () => {
    const gameInitial = makeGameInitial({});
    expect(gameInitial).toMatchObject({
      startMapId: 0,
      startX: 0,
      startY: 0,
      partyMembers: [1],
    } satisfies System_GameInitial);
  });

  test("custom values", () => {
    const param: System_GameInitial = {
      startMapId: 1,
      startX: 2,
      startY: 3,
      partyMembers: [4, 5],
    };
    const gameInitial = makeGameInitial(param);
    expect(gameInitial).toMatchObject(param);
    expect(gameInitial).not.toBe(param); // Ensure it's a new object
  });
});
