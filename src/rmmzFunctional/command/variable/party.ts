import type {
  Command_ControlVariables_FromParty,
  Command_ControlVariables_FromItem,
  Command_ControlVariables_FromWeapon,
  Command_ControlVariables_FromArmor,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Party, Rmmz_UnitPlayer } from "@RpgTypes/rmmzRuntime";
import type { Provider } from "./types";

export const variableFromParty = (
  command: Command_ControlVariables_FromParty,
  party: Rmmz_Party,
): number => {
  const actor = party.members()[command.parameters[5]];
  return actor ? actor.actorId() : 0;
};

export const variableFromItem = (
  command: Command_ControlVariables_FromItem,
  party: Rmmz_UnitPlayer,
  provider: Provider,
): number => {
  const item = provider.dataItem(command.parameters[5]);
  if (!item) {
    return 0;
  }
  return party.numItems(item);
};

export const variableFromWeapon = (
  command: Command_ControlVariables_FromWeapon,
  party: Rmmz_UnitPlayer,
  provider: Provider,
): number => {
  const weapon = provider.dataWeapon(command.parameters[5]);
  if (!weapon) {
    return 0;
  }
  return party.numItems(weapon);
};

export const variableFromArmor = (
  command: Command_ControlVariables_FromArmor,
  party: Rmmz_UnitPlayer,
  provider: Provider,
): number => {
  const armor = provider.dataArmor(command.parameters[5]);
  if (!armor) {
    return 0;
  }
  return party.numItems(armor);
};
