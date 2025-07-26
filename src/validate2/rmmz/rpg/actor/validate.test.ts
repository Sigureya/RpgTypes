import { describe, test, expect } from "vitest";
import type { Data_Actor } from "@RpgTypes/rpg";
const validate = require("./actorValidate.cjs"); // Adjust the import based on your setup

const isDataActor = (data: unknown): data is Data_Actor => {
  return validate(data);
};

test("validate actor data", () => {
  const actor: Data_Actor = {
    name: "Hero",
    id: 1,
    nickname: "The Brave",
    battlerName: "Hero_Battler",
    characterName: "Hero_Character",
    characterIndex: 0,
    faceName: "Hero_Face",
    faceIndex: 0,
    classId: 1,
    initialLevel: 1,
    maxLevel: 99,
    equips: [0, 1, 2, 3, 4],
    note: "This is a hero.",
    profile: "A brave hero who fights for justice.",
    traits: [
      { code: 11, dataId: 1, value: 10 },
      { code: 12, dataId: 2, value: 20 },
    ],
  };
  expect(actor).toSatisfy(isDataActor);
});
