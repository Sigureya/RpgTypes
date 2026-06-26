import {
  FOLDER_IMG_BATTLEBACK1,
  FOLDER_IMG_BATTLEBACK2,
  FOLDER_IMG_CHACTERS,
  FOLDER_IMG_FACES,
  FOLDER_IMG_PARALLACES,
  FOLDER_IMG_PICTURES,
  FOLDER_IMG_SV_ACTORS,
} from "@RpgTypes/fileio";
import type {
  Command_ChangeActorImages,
  Command_ChangeBattleBackground,
  Command_ChangeParallax,
  Command_ShowPicture,
} from "@RpgTypes/rmmz";
import {
  CHANGE_ACTOR_IMAGES,
  CHANGE_BATTLE_BACKGROUND,
  SHOW_PICTURE,
} from "@RpgTypes/rmmz";
import type { ImageCommandParameter } from "./types";

export const extractPictureImageCommand = (
  command: Command_ShowPicture,
): ImageCommandParameter => {
  return {
    code: SHOW_PICTURE,
    paramIndex: 1,
    dir: FOLDER_IMG_PICTURES,
    value: command.parameters[1],
  };
};

export const extractChangeBattlebackImageCommand = (
  command: Command_ChangeBattleBackground,
): ImageCommandParameter[] => {
  return [
    {
      code: CHANGE_BATTLE_BACKGROUND,
      paramIndex: 0,
      dir: FOLDER_IMG_BATTLEBACK1,
      value: command.parameters[0],
    },
    {
      code: CHANGE_BATTLE_BACKGROUND,
      paramIndex: 1,
      dir: FOLDER_IMG_BATTLEBACK2,
      value: command.parameters[1],
    },
  ];
};

export const extractParalaxImageCommand = (
  command: Command_ChangeParallax,
): ImageCommandParameter => {
  return {
    code: command.code,
    paramIndex: 1,
    dir: FOLDER_IMG_PARALLACES,
    value: command.parameters[0],
  };
};

export const extractActorImageCommand = (
  command: Command_ChangeActorImages,
): ImageCommandParameter[] => {
  return [
    {
      code: CHANGE_ACTOR_IMAGES,
      paramIndex: 1,
      value: command.parameters[1],
      dir: FOLDER_IMG_CHACTERS,
    },
    {
      code: CHANGE_ACTOR_IMAGES,
      paramIndex: 3,
      value: command.parameters[3],
      dir: FOLDER_IMG_FACES,
    },
    {
      code: CHANGE_ACTOR_IMAGES,
      paramIndex: 5,
      value: command.parameters[5],
      dir: FOLDER_IMG_SV_ACTORS,
    },
  ];
};
