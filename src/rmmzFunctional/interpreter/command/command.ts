import type { EventCommand } from "@RpgTypes/rmmz/eventCommand";
import {
  CHANGE_ACTOR_IMAGES,
  CHANGE_ARMORS,
  CHANGE_BATTLE_BACKGROUND,
  CHANGE_BATTLE_BGM,
  CHANGE_CLASS,
  CHANGE_DEFEAT_ME,
  CHANGE_ENCOUNTER,
  CHANGE_ENEMY_HP,
  CHANGE_ENEMY_MP,
  CHANGE_ENEMY_TP,
  CHANGE_EXP,
  CHANGE_FORMATION_ACCESS,
  CHANGE_GOLD,
  CHANGE_HP,
  CHANGE_ITEMS,
  CHANGE_LEVEL,
  CHANGE_MAP_NAME_DISPLAY,
  CHANGE_MENU_ACCESS,
  CHANGE_MP,
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PARALLAX,
  CHANGE_PARTY_MEMBER,
  CHANGE_PROFILE,
  CHANGE_SAVE_ACCESS,
  CHANGE_TILESET,
  CHANGE_TP,
  CHANGE_VEHICLE_BGM,
  CHANGE_VEHICLE_IMAGE,
  CHANGE_VICTORY_ME,
  CHANGE_WEAPONS,
  CHANGE_WINDOW_COLOR,
  CONTROL_SWITCHES,
  CONTROL_TIMER,
  ENEMY_APPEAR,
  ENEMY_RECOVER_ALL,
  ENEMY_TRANSFORM,
  FADEOUT_BGM,
  FADEOUT_BGS,
  FLASH_SCREEN,
  PLAY_BGM,
  PLAY_BGS,
  PLAY_ME,
  PLAY_SE,
  SAVE_BGM,
  SET_VEHICLE_LOCATION,
  SET_WEATHER_EFFECT,
  SHAKE_SCREEN,
  TINT_SCREEN,
} from "@RpgTypes/rmmz/eventCommand";
import type { Rmmz_GameObjects } from "@RpgTypes/rmmzRuntime/objects/objects";
import {
  executeChangeGold,
  executeChangeArmors,
  executeChangeItems,
  executeChangeWeapons,
  commandChangePartyMember,
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
import { commandControlSwitches, commandControlTimer } from "./control";
import {
  commandChangeFormationAccess,
  commandChangeMenuAccess,
  commandChangeSaveAccess,
} from "./menu";
import { commandChangeEncounter } from "./battle";
import { commandChangeWindowColor } from "./window";
import {
  commandChangeBattleBackground,
  commandChangeMapNameDisplay,
  commandChangeParallax,
  commandChangeTileset,
} from "./map";
import {
  commandChangeVehicleBgm,
  commandChangeVehicleImage,
  setVehicleLocation,
} from "./character";
import {
  commandFlashScreen,
  commandSetWeatherEffect,
  commandShakeScreen,
  commandTintScreen,
} from "./screen";
import {
  commandChangeEnemyHp,
  commandChangeEnemyMp,
  commandChangeEnemyTp,
  commandEnemyAppear,
  commandEnemyRecoverAll,
  commandEnemyTransform,
} from "./enemy";

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
    case CHANGE_PARTY_MEMBER:
      commandChangePartyMember(command, objects.actors, objects.party);
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
    case CHANGE_ENEMY_HP:
      commandChangeEnemyHp(command, objects.troop, objects.variables);
      return;
    case CHANGE_ENEMY_MP:
      commandChangeEnemyMp(command, objects.troop, objects.variables);
      return;
    case CHANGE_ENEMY_TP:
      commandChangeEnemyTp(command, objects.troop, objects.variables);
      return;
    case ENEMY_RECOVER_ALL:
      commandEnemyRecoverAll(command, objects.troop);
      return;
    case ENEMY_APPEAR:
      commandEnemyAppear(command, objects.troop);
      return;
    case ENEMY_TRANSFORM:
      commandEnemyTransform(command, objects.troop);
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
    case CONTROL_SWITCHES:
      commandControlSwitches(command, objects.switches);
      return;
    case CONTROL_TIMER:
      commandControlTimer(command, objects.timer);
      return;
    case CHANGE_SAVE_ACCESS:
      commandChangeSaveAccess(command, objects.system);
      return;
    case CHANGE_MENU_ACCESS:
      commandChangeMenuAccess(command, objects.system);
      return;
    case CHANGE_FORMATION_ACCESS:
      commandChangeFormationAccess(command, objects.system);
      return;
    case CHANGE_ENCOUNTER:
      commandChangeEncounter(command, objects.system, objects.player);
      return;
    case CHANGE_WINDOW_COLOR:
      commandChangeWindowColor(command, objects.system);
      return;
    case CHANGE_MAP_NAME_DISPLAY:
      commandChangeMapNameDisplay(command, objects.map);
      return;
    case CHANGE_TILESET:
      commandChangeTileset(command, objects.map);
      return;
    case CHANGE_BATTLE_BACKGROUND:
      commandChangeBattleBackground(command, objects.map);
      return;
    case CHANGE_PARALLAX:
      commandChangeParallax(command, objects.map);
      return;
    case SET_VEHICLE_LOCATION:
      setVehicleLocation(command, objects.map, objects.variables);
      return;
    case CHANGE_VEHICLE_BGM:
      commandChangeVehicleBgm(command, objects.map);
      return;
    case CHANGE_VEHICLE_IMAGE:
      commandChangeVehicleImage(command, objects.map);
      return;
    case TINT_SCREEN:
      commandTintScreen(command, objects.screen);
      return;
    case FLASH_SCREEN:
      commandFlashScreen(command, objects.screen);
      return;
    case SHAKE_SCREEN:
      commandShakeScreen(command, objects.screen);
      return;
    case SET_WEATHER_EFFECT:
      commandSetWeatherEffect(command, objects.screen);
      return;
    default:
  }
};
