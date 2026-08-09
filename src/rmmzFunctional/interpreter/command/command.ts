import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import {
  CHANGE_ACTOR_IMAGES,
  CHANGE_ARMORS,
  CHANGE_BATTLE_BGM,
  CHANGE_CLASS,
  CHANGE_DEFEAT_ME,
  CHANGE_EXP,
  CHANGE_GOLD,
  CHANGE_HP,
  CHANGE_ITEMS,
  CHANGE_LEVEL,
  CHANGE_MP,
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  CHANGE_TP,
  CHANGE_VICTORY_ME,
  CHANGE_WEAPONS,
  SAVE_BGM,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_GameObjects } from "@RpgTypes/rmmzRuntime/objects/objects";
import {
  executeChangeGold,
  executeChangeArmors,
  executeChangeItems,
  executeChangeWeapons,
} from "./party";
import type { Provider_RpgData } from "@RpgTypes/rmmz/rpg";
import {
  commandChangeDefeatMe,
  commandChangeBattleBgm,
  commandChangeVictoryMe,
  commmandSaveBgm,
} from "./sounds";
import {
  commandChangeActorClass,
  commandChangeActorExp,
  commandChangeActorHp,
  commandChangeActorImages,
  commandChangeActorLevel,
  commandChangeActorMp,
  commandChangeActorName,
  commandChangeActorNickName,
  commandChangeActorProfile,
  commandChangeActorTp,
} from "./actor";

export const executeSideEffectCommand = (
  command: EventCommand,
  objects: Rmmz_GameObjects,
  data: Provider_RpgData,
): boolean => {
  switch (command.code) {
    case CHANGE_GOLD:
      return executeChangeGold(command, objects.party, objects.variables);
    case CHANGE_ITEMS:
      return executeChangeItems(
        command,
        data,
        objects.party,
        objects.variables,
      );
    case CHANGE_WEAPONS:
      return executeChangeWeapons(
        command,
        data,
        objects.party,
        objects.variables,
      );
    case CHANGE_ARMORS:
      return executeChangeArmors(
        command,
        data,
        objects.party,
        objects.variables,
      );
    case CHANGE_DEFEAT_ME:
      return commandChangeDefeatMe(command, objects.system);
    case CHANGE_VICTORY_ME:
      return commandChangeVictoryMe(command, objects.system);
    case CHANGE_BATTLE_BGM:
      return commandChangeBattleBgm(command, objects.system);
    case SAVE_BGM:
      return commmandSaveBgm(objects.system);
    case CHANGE_HP:
      return commandChangeActorHp(
        command,
        objects.actors,
        objects.party,
        objects.variables,
      );
    case CHANGE_MP:
      return commandChangeActorMp(
        command,
        objects.actors,
        objects.party,
        objects.variables,
      );
    case CHANGE_TP:
      return commandChangeActorTp(
        command,
        objects.actors,
        objects.party,
        objects.variables,
      );
    case CHANGE_NAME:
      return commandChangeActorName(command, objects.actors);
    case CHANGE_PROFILE:
      return commandChangeActorProfile(command, objects.actors);
    case CHANGE_NICKNAME:
      return commandChangeActorNickName(command, objects.actors);
    case CHANGE_LEVEL:
      return commandChangeActorLevel(
        command,
        objects.actors,
        objects.party,
        objects.variables,
      );
    case CHANGE_EXP:
      return commandChangeActorExp(
        command,
        objects.actors,
        objects.party,
        objects.variables,
      );
    case CHANGE_CLASS:
      return commandChangeActorClass(command, objects.actors);
    case CHANGE_ACTOR_IMAGES:
      return commandChangeActorImages(command, objects.actors, objects.player);
    default:
      return true;
  }
};
