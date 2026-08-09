import type {
  BranchParam_Gold,
  BranchParam_Item,
  BranchParam_Weapon,
  BranchParam_Armor,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Party } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_BranchSourceProvider } from "./types";

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
  provider: Rmmz_BranchSourceProvider,
): boolean => {
  const item = provider.itemData(parameters[1]);
  if (!item) {
    return false;
  }
  return party.hasItem(item);
};

export const evaluteBranchByWeapon = (
  parameters: BranchParam_Weapon,
  party: Rmmz_PartyHasItem,
  provider: Rmmz_BranchSourceProvider,
): boolean => {
  const weapon = provider.weaponData(parameters[1]);
  if (!weapon) {
    return false;
  }
  return party.hasItem(weapon, parameters[2]);
};

export const evaluteBranchByArmor = (
  parameters: BranchParam_Armor,
  party: Rmmz_PartyHasItem,
  provider: Rmmz_BranchSourceProvider,
): boolean => {
  const armor = provider.armorData(parameters[1]);
  if (!armor) {
    return false;
  }
  return party.hasItem(armor, parameters[2]);
};
