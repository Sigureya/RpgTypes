import { describe, test, expect } from "vitest";
import type { Data_Actor } from "./traitContainers";
import { makeActorData } from "./traitContainers";
import { isDataActor } from "./validate";

describe("isDataActor", () => {
  test("Valid actor2", () => {
    const actor: Data_Actor = makeActorData();
    expect(actor).toSatisfy(isDataActor);
  });
  test("Valid actor", () => {
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
      traits: [
        {
          code: 3,
          dataId: 400,
          value: 485,
        },
      ],
    };
    expect(actor).toSatisfy(isDataActor);
  });

  test("Invalid actor", () => {
    const invalidActor = { name: 123 }; // Invalid name
    expect(invalidActor).not.toSatisfy(isDataActor);
    expect({}).not.toSatisfy(isDataActor);
    expect(null).not.toSatisfy(isDataActor);
    expect(undefined).not.toSatisfy(isDataActor);
  });
});
