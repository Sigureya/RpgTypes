import type {
  BranchParam_Gold,
  BranchParam_Item,
  BranchParam_Weapon,
  BranchParam_Armor,
} from "@RpgTypes/rmmz/eventCommand";
import type { Data_Item, Data_Weapon, Data_Armor } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Party } from "@RpgTypes/rmmzRuntime";

// TSでのテストの関係で簡略化。C#版ではRmmz_Partyをそのまま使うこと
type Rmmz_PartyHasItem = Pick<Rmmz_Party, "hasItem" | "gold">;

export const evaluteBranchByGold = (
  parameters: BranchParam_Gold,
  party: Rmmz_PartyHasItem,
): boolean => {
  const gold = party.gold();
  const targetGold: number = parameters[1];
  switch (parameters[2]) {
    case 0:
      return gold >= targetGold;
    case 1:
      return gold <= targetGold;
    case 2:
      return gold < targetGold;
  }
};

export const evaluteBranchByItem = (
  parameters: BranchParam_Item,
  party: Rmmz_PartyHasItem,
  fn: (itemId: number) => Data_Item | null | undefined,
): boolean => {
  const item = fn(parameters[1]);
  if (!item) {
    return false;
  }
  return party.hasItem(item);
};

export const evaluteBranchByWeapon = (
  parameters: BranchParam_Weapon,
  party: Rmmz_PartyHasItem,
  fn: (weaponId: number) => Data_Weapon | null | undefined,
): boolean => {
  const weapon = fn(parameters[1]);
  if (!weapon) {
    return false;
  }
  return party.hasItem(weapon, parameters[2]);
};

export const evaluteBranchByArmor = (
  parameters: BranchParam_Armor,
  party: Rmmz_PartyHasItem,
  fn: (armorId: number) => Data_Armor | null | undefined,
): boolean => {
  const armor = fn(parameters[1]);
  if (!armor) {
    return false;
  }
  return party.hasItem(armor, parameters[2]);
};
