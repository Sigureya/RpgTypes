import type {
  Command_BranchByItem,
  Command_BranchByWeapon,
  Command_BranchByArmor,
  Command_BranchByGold,
} from "@RpgTypes/rmmz/eventCommand";
import type { Data_Item, Data_Weapon, Data_Armor } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_Party } from "@RpgTypes/rmmzRuntime";

// TSでのテストの関係で簡略化。C#版ではRmmz_Partyをそのまま使うこと
type Rmmz_PartyHasItem = Pick<Rmmz_Party, "hasItem" | "gold">;

export const evaluteBranchByGold = (
  command: Command_BranchByGold,
  party: Rmmz_PartyHasItem,
): boolean => {
  const gold = party.gold();
  const targetGold: number = command.parameters[1];
  switch (command.parameters[2]) {
    case 0:
      return gold >= targetGold;
    case 1:
      return gold <= targetGold;
    case 2:
      return gold < targetGold;
  }
};

export const evaluteBranchByItem = (
  command: Command_BranchByItem,
  party: Rmmz_PartyHasItem,
  fn: (itemId: number) => Data_Item | null | undefined,
): boolean => {
  const item = fn(command.parameters[1]);
  if (!item) {
    return false;
  }
  return party.hasItem(item);
};

export const evaluteBranchByWeapon = (
  command: Command_BranchByWeapon,
  party: Rmmz_PartyHasItem,
  fn: (weaponId: number) => Data_Weapon | null | undefined,
): boolean => {
  const weapon = fn(command.parameters[1]);
  if (!weapon) {
    return false;
  }
  return party.hasItem(weapon, command.parameters[2]);
};

export const evaluteBranchByArmor = (
  command: Command_BranchByArmor,
  party: Rmmz_PartyHasItem,
  fn: (armorId: number) => Data_Armor | null | undefined,
): boolean => {
  const armor = fn(command.parameters[1]);
  if (!armor) {
    return false;
  }
  return party.hasItem(armor, command.parameters[2]);
};
