import type {
  ParamArray_VariableFromPartyAt,
  ParamArray_VariableFromItem,
  ParamArray_VariableFromArmor,
  ParamArray_VariableFromWeapon,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_VariableSourceParty } from "@RpgTypes/rmmzRuntime";
import type { Rmmz_VariableSourceProvider } from "./types";

export const variableFromPartyAt = (
  params: ParamArray_VariableFromPartyAt,
  party: Rmmz_VariableSourceParty,
): number => {
  const members = party.members();
  const index = params[5];
  const actor = members[index];
  return actor ? actor.actorId() : 0;
};

export const variableFromItem = (
  params: ParamArray_VariableFromItem,
  party: Rmmz_VariableSourceParty,
  provider: Rmmz_VariableSourceProvider,
): number => {
  const item = provider.dataItem(params[5]);
  if (!item) {
    return 0;
  }
  return party.numItems(item);
};

export const variableFromWeapon = (
  params: ParamArray_VariableFromWeapon,
  party: Rmmz_VariableSourceParty,
  provider: Rmmz_VariableSourceProvider,
): number => {
  const weapon = provider.dataWeapon(params[5]);
  if (!weapon) {
    return 0;
  }
  return party.numItems(weapon);
};

export const variableFromArmor = (
  params: ParamArray_VariableFromArmor,
  party: Rmmz_VariableSourceParty,
  provider: Rmmz_VariableSourceProvider,
): number => {
  const armor = provider.dataArmor(params[5]);
  if (!armor) {
    return 0;
  }
  return party.numItems(armor);
};
