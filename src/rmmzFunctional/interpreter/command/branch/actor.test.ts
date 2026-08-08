import type { MockedObject } from "vitest";
import { vi, describe, test, expect } from "vitest";

import { evaluateActorBranch } from "./actor";
import type {
  Rmmz_BranchSourceActor,
  Rmmz_BranchSourceProvider,
} from "./types";
import type { Data_Weapon, Data_Class } from "@RpgTypes/rmmz/rpg";
import { makeClassData, makeWeaponData } from "@RpgTypes/rmmz/rpg";
import {
  makeCommandBranchByActorArmor,
  makeCommandBranchByActorWeapon,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Members } from "@RpgTypes/rmmzRuntime";
const MOCKED_ACTOR_ID = 3;
const MOCKED_CLASS_ID = 8;

const MOCKED_WEAPON_ID = 9;

const MOKE_INVALID_ID = 9999;

const MOCKED_WEAPON: Data_Weapon = makeWeaponData({
  name: "MOCKED_WEAPON",
  id: MOCKED_WEAPON_ID,
});

const MOCKED_CLASS: Data_Class = makeClassData({
  name: "MOCKED_CLASS",
  id: MOCKED_CLASS_ID,
});

const creareMockedParty = <T>(actor: T): MockedObject<Rmmz_Members<T>> => {
  return {
    members: vi.fn().mockReturnValue([actor]),
  };
};

const createMockedProvider = (
  actor: MockedObject<Rmmz_BranchSourceActor> | null | undefined,
): MockedObject<Rmmz_BranchSourceProvider> => {
  return {
    gameActor: vi.fn().mockReturnValue(actor),
    gameEnemy: vi.fn().mockThrow(new Error("gameEnemy is not implemented")),
    mapCharacter: vi.fn(() => {
      new Error("mapCharacter is not implemented");
    }),
    classData: vi.fn((id) => (id === MOCKED_CLASS.id ? MOCKED_CLASS : null)),
    armorData: vi.fn().mockThrow(new Error("armorData is not implemented")),
    itemData: vi.fn().mockThrow(new Error("itemData is not implemented")),
    weaponData: vi.fn((id) => (id === MOCKED_WEAPON.id ? MOCKED_WEAPON : null)),
  };
};

const createActor = (b: boolean): MockedObject<Rmmz_BranchSourceActor> => {
  return {
    hasArmor: vi.fn().mockReturnValue(b),
    hasSkill: vi.fn().mockReturnValue(b),
    hasWeapon: vi.fn().mockReturnValue(b),
    isClass: vi.fn().mockReturnValue(b),
    isStateAffected: vi.fn().mockReturnValue(b),
    name: vi.fn().mockReturnValue("MOCKED_ACTOR"),
  };
};

describe("evaluateActorBranch", () => {
  describe("weapon", () => {
    test("valid weapon id", () => {
      const command = makeCommandBranchByActorWeapon({
        actorId: MOCKED_ACTOR_ID,
        weaponId: MOCKED_WEAPON_ID,
      });
      const actor = createActor(true);
      const provider = createMockedProvider(actor);
      const party = creareMockedParty(actor);
      const result = evaluateActorBranch(command.parameters, party, provider);
      expect(result).toBe(true);
      expect(provider.gameActor).toHaveBeenCalledOnce();
      expect(provider.gameActor).toHaveBeenCalledWith(MOCKED_ACTOR_ID);
      expect(provider.weaponData).toHaveBeenCalledOnce();
      expect(provider.weaponData).toHaveBeenCalledWith(MOCKED_WEAPON_ID);
      expect(actor.hasArmor).toHaveBeenCalledOnce();
      expect(actor.hasArmor).toHaveBeenCalledWith(MOCKED_WEAPON);
    });
    test("invalid weapon id", () => {
      const command = makeCommandBranchByActorWeapon({
        actorId: MOCKED_ACTOR_ID,
        weaponId: MOKE_INVALID_ID,
      });
      const actor = createActor(true);
      const provider = createMockedProvider(actor);
      const party = creareMockedParty(actor);
      const result = evaluateActorBranch(command.parameters, party, provider);
      expect(result).toBe(false);
      expect(provider.gameActor).toHaveBeenCalledOnce();
      expect(provider.gameActor).toHaveBeenCalledWith(MOCKED_ACTOR_ID);
      expect(provider.weaponData).toHaveBeenCalledOnce();
      expect(provider.weaponData).toHaveBeenCalledWith(MOKE_INVALID_ID);
      expect(actor.hasArmor).toHaveBeenCalledOnce();
      expect(actor.hasArmor).toHaveBeenCalledWith(null);
    });
  });
  describe("armor", () => {
    test("valid armor id", () => {
      const command = makeCommandBranchByActorArmor({
        actorId: MOCKED_ACTOR_ID,
        armorId: MOCKED_WEAPON_ID,
      });
      const actor = createActor(false);
      const provider = createMockedProvider(actor);
      const party = creareMockedParty(actor);
      const result = evaluateActorBranch(command.parameters, party, provider);
      expect(result).toBe(false);
      expect(provider.gameActor).toHaveBeenCalledOnce();
      expect(provider.gameActor).toHaveBeenCalledWith(MOCKED_ACTOR_ID);
      expect(actor.hasArmor).toHaveBeenCalledOnce();
      expect(actor.hasArmor).toHaveBeenCalledWith(MOCKED_WEAPON);
    });
    test("invalid armor id", () => {
      const command = makeCommandBranchByActorArmor({
        actorId: MOCKED_ACTOR_ID,
        armorId: MOKE_INVALID_ID,
      });
      const actor = createActor(false);
      const provider = createMockedProvider(actor);
      const party = creareMockedParty(actor);
      const result = evaluateActorBranch(command.parameters, party, provider);
      expect(result).toBe(false);
      expect(provider.gameActor).toHaveBeenCalledOnce();
      expect(provider.gameActor).toHaveBeenCalledWith(MOCKED_ACTOR_ID);
      expect(actor.hasArmor).toHaveBeenCalledOnce();
      expect(actor.hasArmor).toHaveBeenCalledWith(null);
    });
  });
});
