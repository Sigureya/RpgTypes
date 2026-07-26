import type {
  Command_ChangeArmors,
  Command_ChangeItems,
  Command_ChangeWeapons,
} from "@RpgTypes/rmmz/eventCommand";
import type { Provider_RpgItems } from "@RpgTypes/rmmz/rpg";
import type { Rmmz_UnitPlayer, Rmmz_Variables } from "@RpgTypes/rmmzRuntime";
import { operateValue } from "@RpgTypes/rmmzRuntime";

export const executeChangeGold = (
  command: Command_ChangeItems,
  party: Rmmz_UnitPlayer,
  variables: Rmmz_Variables,
): boolean => {
  const amount = operateValue(
    variables,
    command.parameters[0],
    command.parameters[1],
    command.parameters[3],
  );
  party.gainGold(amount);
  return true;
};

export const executeChangeItems = (
  command: Command_ChangeItems,
  provider: Provider_RpgItems,
  party: Rmmz_UnitPlayer,
  variables: Rmmz_Variables,
): boolean => {
  const item = provider.dataItem(command.parameters[0]);
  if (item) {
    const amount = resolveItemAmount(command, variables);
    party.gainItem(item, amount, false);
  }

  return true;
};

export const executeChangeWeapons = (
  command: Command_ChangeWeapons,
  provider: Provider_RpgItems,
  party: Rmmz_UnitPlayer,
  variables: Rmmz_Variables,
): boolean => {
  const weapon = provider.dataWeapon(command.parameters[0]);
  if (weapon) {
    const amount = resolveItemAmount(command, variables);
    party.gainItem(weapon, amount, false);
  }

  return true;
};

export const executeChangeArmors = (
  command: Command_ChangeArmors,
  provider: Provider_RpgItems,
  party: Rmmz_UnitPlayer,
  variables: Rmmz_Variables,
): boolean => {
  const armor = provider.dataArmor(command.parameters[0]);
  if (armor) {
    const amount = resolveItemAmount(command, variables);
    party.gainItem(armor, amount, false);
  }
  return true;
};

export const resolveItemAmount = (
  command: Command_ChangeItems | Command_ChangeWeapons | Command_ChangeArmors,
  variables: Rmmz_Variables,
): number => {
  return operateValue(
    variables,
    command.parameters[1],
    command.parameters[2],
    command.parameters[3],
  );
};
