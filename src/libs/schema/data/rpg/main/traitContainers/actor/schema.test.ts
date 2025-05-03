import { describe, test, expect } from "vitest";

import type { Data_Actor } from "./actor";
import { isDataActor } from "./schema";
describe("", () => {
  const actor: Data_Actor = {
    name: "John Doe",
    id: 1,
    nickname: "Hero",
    battlerName: "Battler",
    characterName: "Character",
    characterIndex: 0,
    faceName: "Face",
    faceIndex: 0,
    classId: 1,
    initialLevel: 1,
    maxLevel: 99,
    profile: "This is a test profile.",
    equips: [],
    note: "This is a test note.",
    traits: [],
  };
  test("", () => {
    expect(isDataActor(actor)).toBe(true);
  });
  test("Invalid actor", () => {
    const invalidActor = { ...actor, name: 123 }; // Invalid name
    expect(isDataActor(invalidActor)).toBe(false);
    expect(isDataActor({})).toBe(false);
    expect(isDataActor(null)).toBe(false);
    expect(isDataActor(undefined)).toBe(false);
  });
});
