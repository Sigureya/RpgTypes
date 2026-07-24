import type { MockedObject } from "vitest";
import { describe, expect, test, vi } from "vitest";
import type {
  ParamArray_VariableFromItem,
  ParamArray_VariableFromPartyAt,
  ParamArray_VariableFromWeapon,
  ParamArray_VariableFromArmor,
} from "@RpgTypes/rmmz/eventCommand";
import {
  makeCommandVariableFromItemData,
  makeCommandVariableFromWeapon,
  makeCommandVariableFromArmor,
  makeCommandVariablePartyAt,
} from "@RpgTypes/rmmz/eventCommand";
import type { Data_Armor, Data_Item, Data_Weapon } from "@RpgTypes/rmmz/rpg";
import {
  makeItemData,
  makeArmorData,
  makeWeaponData,
} from "@RpgTypes/rmmz/rpg";
import type { Rmmz_VariableSourceParty } from "@RpgTypes/rmmzRuntime";
import {
  variableFromArmor,
  variableFromItem,
  variableFromPartyAt,
  variableFromWeapon,
} from "./party";
import type { Rmmz_VariableSourceProvider } from "./types";
const MOCK_GOLD = 9800;
const MOCK_STEP = 1234;

const MOCK_NUM_ITEMS = 5;
const MOCK_ACTOR_ID = 3;

const MOCK_ITEM_ID = 151;
const MOCK_WEAPON_ID = 251;
const MOCK_ARMOR_ID = 386;

const MOCK_ITEM: Data_Item = makeItemData({ id: MOCK_ITEM_ID });
const MOCK_WEAPON: Data_Weapon = makeWeaponData({ id: MOCK_WEAPON_ID });
const MOCK_ARMOR: Data_Armor = makeArmorData({ id: MOCK_ARMOR_ID });

const createMockProvider = (): MockedObject<Rmmz_VariableSourceProvider> => {
  return {
    gameActor: vi.fn(() => null),
    gameEnemy: vi.fn(() => null),
    character: vi.fn(() => null),
    dataItem: vi.fn(() => MOCK_ITEM),
    dataWeapon: vi.fn(() => MOCK_WEAPON),
    dataArmor: vi.fn(() => MOCK_ARMOR),
    random: vi.fn(() => 0),
  };
};

const createEmptyProvider = (): MockedObject<Rmmz_VariableSourceProvider> => {
  return {
    gameActor: vi.fn(() => null),
    gameEnemy: vi.fn(() => null),
    character: vi.fn(() => null),
    dataItem: vi.fn(() => null),
    dataWeapon: vi.fn(() => null),
    dataArmor: vi.fn(() => null),
    random: vi.fn(() => 0),
  };
};

const createMockParty = (): MockedObject<Rmmz_VariableSourceParty> => {
  return {
    gold: vi.fn(() => MOCK_GOLD),
    steps: vi.fn(() => MOCK_STEP),
    numItems: vi.fn(() => MOCK_NUM_ITEMS),
    size: vi.fn(() => 0),
    members: vi.fn(() => [
      {
        actorId: () => MOCK_ACTOR_ID,
      },
    ]),
  };
};

describe("variableFromPartyAt", () => {
  const params: ParamArray_VariableFromPartyAt = [
    22, // startId
    22, // endId
    0, // operation
    3, // operandGameData
    6, // typeParty
    0, // memberIndex
  ];
  test("makeCommand", () => {
    const command = makeCommandVariablePartyAt({
      variableId: 22,
      memberIndex: 0,
    });
    expect(command.parameters).toEqual(params);
  });
  test("normal", () => {
    const party = createMockParty();
    const result: number = variableFromPartyAt(params, party);
    expect(result).toBe(MOCK_ACTOR_ID);
    expect(party.members).toHaveBeenCalledOnce();
    expect(party.gold).not.toHaveBeenCalled();
    expect(party.steps).not.toHaveBeenCalled();
    expect(party.numItems).not.toHaveBeenCalled();
    expect(party.size).not.toHaveBeenCalled();
  });
  test("out of range", () => {
    const command = makeCommandVariablePartyAt({
      variableId: 22,
      memberIndex: 10,
    });
    const party = createMockParty();
    const result: number = variableFromPartyAt(command.parameters, party);
    expect(result).toBe(0);
    expect(party.members).toHaveBeenCalledOnce();
    expect(party.gold).not.toHaveBeenCalled();
    expect(party.steps).not.toHaveBeenCalled();
    expect(party.numItems).not.toHaveBeenCalled();
    expect(party.size).not.toHaveBeenCalled();
  });
});

describe("variableFromItem", () => {
  const params: ParamArray_VariableFromItem = [
    22, // startId
    22, // endId
    0, // operation
    3, // operandGameData
    0, // typeItem
    MOCK_ITEM_ID, // itemId
  ];
  test("makeCommand", () => {
    const command = makeCommandVariableFromItemData({
      itemId: MOCK_ITEM_ID,
      variableId: 22,
    });
    expect(command.parameters).toEqual(params);
  });
  test("exec", () => {
    const party = createMockParty();
    const provider = createMockProvider();
    const result: number = variableFromItem(params, party, provider);
    expect(result).toBe(MOCK_NUM_ITEMS);
    expect(provider.dataItem).toHaveBeenCalledOnce();
    expect(provider.dataItem).toHaveBeenCalledWith(MOCK_ITEM_ID);
    expect(party.numItems).toHaveBeenCalledOnce();
    expect(party.numItems).toHaveBeenCalledWith(MOCK_ITEM);
  });

  test("item not found", () => {
    const party = createMockParty();
    const provider = createEmptyProvider();
    const result: number = variableFromItem(params, party, provider);
    expect(result).toBe(0);
    expect(provider.dataItem).toHaveBeenCalledOnce();
    expect(provider.dataItem).toHaveBeenCalledWith(MOCK_ITEM_ID);
    expect(party.numItems).not.toHaveBeenCalled();
  });
});

describe("variableFromWeapon", () => {
  const params: ParamArray_VariableFromWeapon = [
    31, // startId
    31, // endId
    0, // operation
    3, // operandGameData
    1, // typeWeapon
    MOCK_WEAPON_ID, // weaponId
  ];

  test("makeCommand", () => {
    const command = makeCommandVariableFromWeapon({
      startId: 31,
      weaponId: MOCK_WEAPON_ID,
    });
    expect(command.parameters).toEqual(params);
  });

  test("exec", () => {
    const party = createMockParty();
    const provider = createMockProvider();
    const result: number = variableFromWeapon(params, party, provider);
    expect(result).toBe(MOCK_NUM_ITEMS);
    expect(provider.dataWeapon).toHaveBeenCalledOnce();
    expect(provider.dataWeapon).toHaveBeenCalledWith(MOCK_WEAPON_ID);
    expect(party.numItems).toHaveBeenCalledOnce();
    expect(party.numItems).toHaveBeenCalledWith(MOCK_WEAPON);
  });

  test("weapon not found", () => {
    const party = createMockParty();
    const provider = createEmptyProvider();
    const result: number = variableFromWeapon(params, party, provider);
    expect(result).toBe(0);
    expect(provider.dataWeapon).toHaveBeenCalledOnce();
    expect(provider.dataWeapon).toHaveBeenCalledWith(MOCK_WEAPON_ID);
    expect(party.numItems).not.toHaveBeenCalled();
  });
});

describe("variableFromArmor", () => {
  const params: ParamArray_VariableFromArmor = [
    41, // startId
    41, // endId
    0, // operation
    3, // operandGameData
    2, // typeArmor
    MOCK_ARMOR_ID, // armorId
  ];

  test("makeCommand", () => {
    const command = makeCommandVariableFromArmor({
      startId: 41,
      armorId: MOCK_ARMOR_ID,
    });
    expect(command.parameters).toEqual(params);
  });

  test("exec", () => {
    const party = createMockParty();
    const provider = createMockProvider();
    const result: number = variableFromArmor(params, party, provider);
    expect(result).toBe(MOCK_NUM_ITEMS);
    expect(provider.dataArmor).toHaveBeenCalledOnce();
    expect(provider.dataArmor).toHaveBeenCalledWith(MOCK_ARMOR_ID);
    expect(party.numItems).toHaveBeenCalledOnce();
    expect(party.numItems).toHaveBeenCalledWith(MOCK_ARMOR);
  });

  test("armor not found", () => {
    const party = createMockParty();
    const provider = createEmptyProvider();
    const result: number = variableFromArmor(params, party, provider);
    expect(result).toBe(0);
    expect(provider.dataArmor).toHaveBeenCalledOnce();
    expect(provider.dataArmor).toHaveBeenCalledWith(MOCK_ARMOR_ID);
    expect(party.numItems).not.toHaveBeenCalled();
  });
});
