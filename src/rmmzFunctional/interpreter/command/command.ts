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
  FADEOUT_BGM,
  FADEOUT_BGS,
  PLAY_BGM,
  PLAY_BGS,
  PLAY_ME,
  PLAY_SE,
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
import type { Rmmz_Managers } from "@RpgTypes/rmmzRuntime/managers/manager";
import {
  commandFadeOutBgm,
  commandFadeOutBgs,
  commandPlayBgm,
  commandPlayBgs,
  commandPlayMe,
  commandPlaySe,
} from "./audio";
export const executeSideEffectCommand = (
  command: EventCommand,
  objects: Rmmz_GameObjects,
  data: Provider_RpgData,
  manaegers: Rmmz_Managers,
): void => {
  switch (command.code) {
    case CHANGE_GOLD:
      executeChangeGold(command, objects.party, objects.variables);
      return;
    case CHANGE_ITEMS:
      executeChangeItems(command, data, objects.party, objects.variables);
      return;
    case CHANGE_WEAPONS:
      executeChangeWeapons(command, data, objects.party, objects.variables);
      return;
    case CHANGE_ARMORS:
      executeChangeArmors(command, data, objects.party, objects.variables);
      return;
    case CHANGE_DEFEAT_ME:
      commandChangeDefeatMe(command, objects.system);
      return;
    case CHANGE_VICTORY_ME:
      commandChangeVictoryMe(command, objects.system);
      return;
    case CHANGE_BATTLE_BGM:
      commandChangeBattleBgm(command, objects.system);
      return;
    case SAVE_BGM:
      commmandSaveBgm(objects.system);
      return;
    case CHANGE_HP:
      commandChangeActorHp(
        command,
        objects.actors,
        objects.party,
        objects.variables,
      );
      return;
    case CHANGE_MP:
      commandChangeActorMp(
        command,
        objects.actors,
        objects.party,
        objects.variables,
      );
      return;
    case CHANGE_TP:
      commandChangeActorTp(
        command,
        objects.actors,
        objects.party,
        objects.variables,
      );
      return;
    case CHANGE_NAME:
      commandChangeActorName(command, objects.actors);
      return;
    case CHANGE_PROFILE:
      commandChangeActorProfile(command, objects.actors);
      return;
    case CHANGE_NICKNAME:
      commandChangeActorNickName(command, objects.actors);
      return;
    case CHANGE_LEVEL:
      commandChangeActorLevel(
        command,
        objects.actors,
        objects.party,
        objects.variables,
      );
      return;
    case CHANGE_EXP:
      commandChangeActorExp(
        command,
        objects.actors,
        objects.party,
        objects.variables,
      );
      return;
    case CHANGE_CLASS:
      commandChangeActorClass(command, objects.actors);
      return;
    case CHANGE_ACTOR_IMAGES:
      commandChangeActorImages(command, objects.actors, objects.player);
      return;
    case PLAY_BGM:
      commandPlayBgm(command, manaegers.audio);
      return;
    case PLAY_BGS:
      commandPlayBgs(command, manaegers.audio);
      return;
    case PLAY_ME:
      commandPlayMe(command, manaegers.audio);
      return;
    case PLAY_SE:
      commandPlaySe(command, manaegers.audio);
      return;
    case FADEOUT_BGM:
      commandFadeOutBgm(command, manaegers.audio);
      return;
    case FADEOUT_BGS:
      commandFadeOutBgs(command, manaegers.audio);
      return;
    default:
  }
};
