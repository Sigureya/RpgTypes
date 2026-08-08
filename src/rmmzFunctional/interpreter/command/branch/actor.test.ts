import type { MockedObject } from "vitest";
import { vi, describe, test, expect } from "vitest";

import { evaluateActorBranch } from "./actor";
import type {
  Rmmz_BranchSourceActor,
  Rmmz_BranchSourceProvider,
} from "./types";
import type { Data_Weapon, Data_Class, Data_Armor } from "@RpgTypes/rmmz/rpg";
import {
  makeArmorData,
  makeClassData,
  makeWeaponData,
} from "@RpgTypes/rmmz/rpg";
import type { Command_BranchByActor } from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandBranchByActorArmor,
  makeCommandBranchByActorWeapon,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Members } from "@RpgTypes/rmmzRuntime";
const MOCK_ACTOR_ID = 3;
const MOCK_CLASS_ID = 8;

const MOCK_WEAPON_ID = 9;

const MOKE_INVALID_ID = 9999;

const MOCKED_WEAPON: Data_Weapon = makeWeaponData({
  name: "MOCKED_WEAPON",
  id: MOCK_WEAPON_ID,
});

const MOCKED_ARMOR: Data_Armor = makeArmorData({
  name: "MOCKED_ARMOR",
  id: MOCK_WEAPON_ID,
});

const MOCKED_CLASS: Data_Class = makeClassData({
  name: "MOCKED_CLASS",
  id: MOCK_CLASS_ID,
});

const creareMockedParty = <T>(actor: T[]): MockedObject<Rmmz_Members<T>> => {
  return {
    members: vi.fn(() => actor),
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
    itemData: vi.fn().mockThrow(new Error("itemData is not implemented")),
    weaponData: vi.fn((id) => (id === MOCKED_WEAPON.id ? MOCKED_WEAPON : null)),
    armorData: vi.fn((id) => (id === MOCKED_ARMOR.id ? MOCKED_ARMOR : null)),
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
  test("actor name", () => {});
});

interface TestContext {
  provider: MockedObject<Rmmz_BranchSourceProvider>;
  party: MockedObject<Rmmz_Members<Rmmz_BranchSourceActor>>;
  actor: MockedObject<Rmmz_BranchSourceActor>;
}

interface TestCase {
  command: Command_BranchByActor;
  expected: boolean;
  calls: ((context: TestContext) => void)[];
  createActor: () => MockedObject<Rmmz_BranchSourceActor>;
}

const runTestCase = (testCase: TestCase): void => {
  describe("", () => {
    test("actor null", () => {
      const provider = createMockedProvider(null);
      const party = creareMockedParty([]);
      const result = evaluateActorBranch(
        testCase.command.parameters,
        party,
        provider,
      );
      expect(result).toBe(false);
      expect(provider.gameActor).toHaveBeenCalledOnce();
      expect(party.members).not.toHaveBeenCalled();
      expect(provider.classData).not.toHaveBeenCalled();
      expect(provider.weaponData).not.toHaveBeenCalled();
      expect(provider.armorData).not.toHaveBeenCalled();
    });
    test("", () => {
      const actor = testCase.createActor();
      const provider = createMockedProvider(actor);
      const party = creareMockedParty([actor]);
      const result = evaluateActorBranch(
        testCase.command.parameters,
        party,
        provider,
      );
      expect(result).toBe(testCase.expected);
      const context: TestContext = {
        provider,
        party,
        actor,
      };
      testCase.calls.forEach((call) => {
        call(context);
      });
    });
  });
};

const testCases: TestCase[] = [
  {
    command: makeCommandBranchByActorArmor({
      actorId: MOCK_ACTOR_ID,
      armorId: MOCKED_ARMOR.id,
    }),
    expected: true,
    createActor: () => createActor(true),
    calls: [
      (ctx) => {
        expect(ctx.provider.armorData).toHaveBeenCalledOnce();
        expect(ctx.provider.armorData).toHaveBeenCalledWith(MOCKED_ARMOR.id);
        expect(ctx.actor.hasArmor).toHaveBeenCalledOnce();
        expect(ctx.actor.hasArmor).toHaveBeenCalledWith(MOCKED_ARMOR);
      },
    ],
  },
  {
    command: makeCommandBranchByActorArmor({
      actorId: MOCK_ACTOR_ID,
      armorId: MOCKED_ARMOR.id,
    }),
    expected: false,
    createActor: () => createActor(false),
    calls: [
      (ctx) => {
        expect(ctx.provider.armorData).toHaveBeenCalledOnce();
        expect(ctx.provider.armorData).toHaveBeenCalledWith(MOCKED_ARMOR.id);
        expect(ctx.actor.hasArmor).toHaveBeenCalledOnce();
        expect(ctx.actor.hasArmor).toHaveBeenCalledWith(MOCKED_ARMOR);
      },
    ],
  },
  {
    command: makeCommandBranchByActorArmor({
      actorId: MOCK_ACTOR_ID,
      armorId: MOKE_INVALID_ID,
    }),
    expected: true,
    createActor: () => createActor(true),
    calls: [
      (ctx) => {
        expect(ctx.provider.armorData).toHaveBeenCalledOnce();
        expect(ctx.provider.armorData).toHaveBeenCalledWith(MOKE_INVALID_ID);
        expect(ctx.actor.hasArmor).toHaveBeenCalledOnce();
        expect(ctx.actor.hasArmor).toHaveBeenCalledWith(null);
      },
    ],
  },
  {
    command: makeCommandBranchByActorWeapon({
      actorId: MOCK_ACTOR_ID,
      weaponId: MOCKED_WEAPON.id,
    }),
    expected: true,
    createActor: () => createActor(true),
    calls: [
      (ctx) => {
        expect(ctx.provider.weaponData).toHaveBeenCalledOnce();
        expect(ctx.provider.weaponData).toHaveBeenCalledWith(MOCKED_WEAPON.id);
        expect(ctx.actor.hasWeapon).toHaveBeenCalledOnce();
        expect(ctx.actor.hasWeapon).toHaveBeenCalledWith(MOCKED_WEAPON);
      },
    ],
  },
  {
    command: makeCommandBranchByActorWeapon({
      actorId: MOCK_ACTOR_ID,
      weaponId: MOKE_INVALID_ID,
    }),
    expected: true,
    createActor: () => createActor(true),
    calls: [
      (ctx) => {
        expect(ctx.provider.weaponData).toHaveBeenCalledOnce();
        expect(ctx.provider.weaponData).toHaveBeenCalledWith(MOKE_INVALID_ID);
        expect(ctx.actor.hasWeapon).toHaveBeenCalledOnce();
        expect(ctx.actor.hasWeapon).toHaveBeenCalledWith(null);
      },
    ],
  },
];

testCases.forEach(runTestCase);
