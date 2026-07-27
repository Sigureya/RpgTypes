import type {
  BranchParam_Character,
  BranchParam_Enemy,
  BranchParam_Timer,
  Command_ConditionalBranch,
} from "@RpgTypes/rmmz/eventCommand";
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

export const evaluteBranchCommand = (
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
    case 3:
      return evaluteBranchByTimer(parameters, timer);
    case 4:
      return evaluateActorBranch(parameters, pary, provider);
    case 5:
      return evaluteBranchByEnemy(parameters, provider);
    case 6:
      return evaluteBranchByCharacter(parameters, provider);
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

export const evaluteBranchByTimer = (
  parameters: BranchParam_Timer,
  timer: Rmmz_Timer,
): boolean => {
  if (!timer.isWorking()) {
    return false;
  }
  const sec = timer.seconds() / 60;
  if (parameters[2] === 0) {
    return sec >= parameters[1];
  }
  return sec <= parameters[1];
};

export const evaluteBranchByEnemy = (
  parameters: BranchParam_Enemy,
  provider: Rmmz_BranchSourceProvider,
): boolean => {
  const enemy = provider.gameEnemy(parameters[1]);
  if (!enemy) {
    return false;
  }

  switch (parameters[2]) {
    case 0:
      return enemy.isAlive();
    case 1:
      return enemy.isStateAffected(parameters[3]);
    default:
      return false;
  }
};

export const evaluteBranchByCharacter = (
  parameters: BranchParam_Character,
  provider: Rmmz_BranchSourceProvider,
): boolean => {
  const character = provider.mapCharacter(parameters[1]);
  if (character) {
    return character.direction() === parameters[2];
  }

  return false;
};
