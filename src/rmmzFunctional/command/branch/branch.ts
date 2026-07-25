import type { Command_ConditionalBranch } from "@RpgTypes/rmmz/eventCommand";
import type {
  Rmmz_BranchSourceParty,
  Rmmz_SelfSwitches,
  Rmmz_Switches,
  Rmmz_Timer,
  Rmmz_Variables,
} from "@RpgTypes/rmmzRuntime";
import { evaluateActorBranch } from "./actor";
import {
  evaluteBranchByArmor,
  evaluteBranchByGold,
  evaluteBranchByItem,
  evaluteBranchByWeapon,
} from "./party";
import { evaluteSelfSwitchBranch, evaluteSwitchBranch } from "./switch";
import type {
  Rmmz_BranchSourceActor,
  Rmmz_BranchSourceProvider,
} from "./types";
import { evaluteBranchByVariable } from "./variables";

const evaluteBranchCommand = (
  mapEventId: number,
  { parameters }: Command_ConditionalBranch,
  provider: Rmmz_BranchSourceProvider,
  pary: Rmmz_BranchSourceParty<Rmmz_BranchSourceActor>,
  switches: Rmmz_Switches,
  selfFwitches: Rmmz_SelfSwitches,
  variables: Rmmz_Variables,
  timer: Rmmz_Timer,
): boolean => {
  switch (parameters[0]) {
    case 0:
      return evaluteSwitchBranch(parameters, switches);
    case 1:
      return evaluteBranchByVariable(parameters, variables);
    case 2:
      return evaluteSelfSwitchBranch(parameters, selfFwitches, mapEventId);
    case 4:
      return evaluateActorBranch(parameters, pary, provider);
    case 7:
      return evaluteBranchByGold(parameters, pary);
    case 8:
      return evaluteBranchByItem(parameters, pary, (itemId: number) =>
        provider.itemData(itemId),
      );
    case 9:
      return evaluteBranchByWeapon(parameters, pary, (weaponId: number) =>
        provider.weaponData(weaponId),
      );
    case 10:
      return evaluteBranchByArmor(parameters, pary, (armorId: number) =>
        provider.armorData(armorId),
      );
  }
  return false;
};
