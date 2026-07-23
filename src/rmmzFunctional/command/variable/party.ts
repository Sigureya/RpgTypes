import type {
  ParamArray_VariableFromParty,
  ParamArray_VariableFromItem,
  ParamArray_VariableFromArmor,
  ParamArray_VariableFromWeapon,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_Actor } from "@RpgTypes/rmmzRuntime";
import type {
  Rmmz_VariabeSourceParty,
  Rmmz_VariableSourceProvider,
} from "./types";

export const variableFromParty = (
  params: ParamArray_VariableFromParty,
  party: Rmmz_VariabeSourceParty,
): number => {
  const members: Rmmz_Actor[] = party.members();
  const index = params[5];
  const actor = members[index];
  return actor ? actor.actorId() : 0;
};

export const variableFromItem = (
  params: ParamArray_VariableFromItem,
  party: Rmmz_VariabeSourceParty,
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
  party: Rmmz_VariabeSourceParty,
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
  party: Rmmz_VariabeSourceParty,
  provider: Rmmz_VariableSourceProvider,
): number => {
  const armor = provider.dataArmor(params[5]);
  if (!armor) {
    return 0;
  }
  return party.numItems(armor);
};
