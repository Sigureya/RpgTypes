import type {
  Command_ControlVariables_FromAnyGoods,
  Command_ControlVariables_FromArmor,
  Command_ControlVariables_FromItem,
  Command_ControlVariables_FromWeapon,
} from "@RpgTypes/rmmz";
import { resolveItemId } from "@RpgTypes/rmmz";
import type { RmNext_PartyItems } from "./types";

export const numArmors = (
  command: Command_ControlVariables_FromArmor,
  party: RmNext_PartyItems,
): number => {
  return numGoods(command, party.armors);
};

export const numWeapons = (
  command: Command_ControlVariables_FromWeapon,
  party: RmNext_PartyItems,
): number => {
  return numGoods(command, party.weapons);
};

export const numItems = (
  command: Command_ControlVariables_FromItem,
  party: RmNext_PartyItems,
): number => {
  return numGoods(command, party.items);
};

const numGoods = (
  command: Command_ControlVariables_FromAnyGoods,
  list: ReadonlyArray<number>,
): number => {
  const itemId = resolveItemId(command);
  if (itemId < 0) {
    const itemCount = list[itemId];

    return itemCount || 0;
  }
  return 0;
};
