import { describe, expect, test, vi } from "vitest";
import type { ColorRGBA } from "@RpgTypes/libs";
import { makeAudioFileParams } from "@RpgTypes/libs";
import {
  BATTLE_PROCESSING,
  CHANGE_DEFEAT_ME,
  CHANGE_ENCOUNTER,
  CHANGE_FORMATION_ACCESS,
  CHANGE_GOLD,
  CHANGE_MENU_ACCESS,
  CHANGE_NAME,
  CHANGE_NICKNAME,
  CHANGE_PROFILE,
  CHANGE_SAVE_ACCESS,
  CHANGE_TRANSPARENCY,
  CHANGE_VEHICLE_IMAGE,
  CHANGE_WINDOW_COLOR,
  COMMON_EVENT,
  ERASE_PICTURE,
  FADEOUT_BGM,
  FLASH_SCREEN,
  GAME_OVER,
  LABEL,
  LABEL_JUMP,
  makeCommandChangeActorImages,
  makeCommandChangeBattleBGM,
  makeCommandChangeVictoryME,
  makeCommandMovePicture,
  makeCommandPlayBGM,
  makeCommandPlaySE,
  makeCommandShowPicture,
  PLAY_MOVIE,
  ROTATE_PICTURE,
  SET_EVENT_LOCATION,
  SET_VEHICLE_LOCATION,
  SET_WEATHER_EFFECT,
  SHAKE_SCREEN,
  SHOW_ANIMATION,
  STOP_SE,
  TINT_PICTURE,
  TINT_SCREEN,
  TRANSFER_PLAYER,
  WAIT,
} from "@RpgTypes/rmmz";
import type {
  Command_BattleProcessing,
  Command_ChangeActorImages,
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
  Command_ChangeBattleBGM,
  Command_ChangeDefeatME,
  Command_ChangeEncounter,
  Command_ChangeFormationAccess,
  Command_ChangeGold,
  Command_ChangeMenuAccess,
  Command_ChangeSaveAccess,
  Command_ChangeVehicleImage,
  Command_ChangeVictoryME,
  Command_CommonEvent,
  Command_FlashScreen,
  Command_GameOver,
  Command_Label,
  Command_LabelJump,
  Command_MovePicture,
  Command_PlayBGM,
  Command_PlayMovie,
  Command_PlaySE,
  Command_RotatePicture,
  Command_SetEventLocation,
  Command_SetVehicleLocation,
  Command_SetWeatherEffect,
  Command_ShowAnimation,
  Command_ShowPicture,
  Command_StopSE,
  Command_TintPicture,
  Command_TintScreen,
  Command_Wait,
  EventCommand,
} from "@RpgTypes/rmmz/eventCommand";
import type { Command_FadeOutBGM } from "@RpgTypes/rmmz/eventCommand/commands/audio/other/types";
import type { Command_TransferPlayer } from "@RpgTypes/rmmz/eventCommand/commands/mapPlayer/transferPlayer/types";
import type { Command_ErasePicture } from "@RpgTypes/rmmz/eventCommand/commands/picture/erase/types";
import type { Command_ShakeScreen } from "@RpgTypes/rmmz/eventCommand/commands/screen/types/shake";
import type { Command_ChangeTransparency } from "@RpgTypes/rmmz/eventCommand/commands/transparency/types";
import type { Command_ChangeWindowColor } from "@RpgTypes/rmmz/eventCommand/commands/window/changeWindowColor/types";
import { mappingCommand } from "./allMapping";
import type { BasicMappingObject } from "./types/basicCommandsMapper";

const createMockMapper = <Key extends string & keyof BasicMappingObject<void>>(
  targetKey: Key,
) => {
  return {
    [targetKey]: vi.fn<BasicMappingObject<void>[Key]>(),
    other: vi.fn(),
  };
};

const testMapping = <Command extends EventCommand>(
  key: keyof BasicMappingObject<void>,
  command: Command,
) => {
  test(`${key} should be called with correct arguments`, () => {
    const mapper = createMockMapper(key);
    mappingCommand([command], 0, mapper);
    expect(mapper[key]).toHaveBeenCalledWith(command, 0, [command]);

    // 他の関数が呼ばれていないことを確認
    Object.entries(mapper).forEach(([k, mockFn]) => {
      if (k !== key) {
        expect(mockFn).toHaveBeenCalledTimes(0);
      }
    });
  });
};

describe("mappingCommand", () => {
  const mockColor: ColorRGBA = [0, 0, 0, 0];

  testMapping<Command_Wait>("wait", {
    code: WAIT,
    indent: 0,
    parameters: [0],
  });
  testMapping<Command_CommonEvent>("commonEvent", {
    code: COMMON_EVENT,
    indent: 0,
    parameters: [1],
  });
  testMapping<Command_ChangeBattleBGM>(
    "changeBattleBGM",
    makeCommandChangeBattleBGM(makeAudioFileParams()),
  );
  testMapping<Command_ChangeVictoryME>(
    "changeVictoryME",
    makeCommandChangeVictoryME(makeAudioFileParams()),
  );
  testMapping<Command_ChangeActorName>("changeName", {
    code: CHANGE_NAME,
    indent: 0,
    parameters: [1, "name"],
  });
  testMapping<Command_ChangeActorProfile>("changeProfile", {
    code: CHANGE_PROFILE,
    indent: 0,
    parameters: [1, "profile"],
  });
  testMapping<Command_ChangeActorNickName>("changeNickname", {
    code: CHANGE_NICKNAME,
    indent: 0,
    parameters: [1, "nickname"],
  });
  testMapping<Command_Label>("label", {
    code: LABEL,
    indent: 0,
    parameters: ["label"],
  });
  testMapping<Command_LabelJump>("labelJump", {
    code: LABEL_JUMP,
    indent: 0,
    parameters: ["label"],
  });
  testMapping<Command_ChangeActorImages>(
    "changeActorImages",
    makeCommandChangeActorImages({}),
  );
  testMapping<Command_ChangeWindowColor>("changeWindowColor", {
    code: CHANGE_WINDOW_COLOR,
    indent: 0,
    parameters: [mockColor],
  });
  testMapping<Command_ChangeGold>("changeGold", {
    code: CHANGE_GOLD,
    indent: 0,
    parameters: [0, 0, 0],
  });
  testMapping<Command_ShowAnimation>("showAnimation", {
    code: SHOW_ANIMATION,
    indent: 0,
    parameters: [0, 0, false],
  });

  testMapping<Command_TransferPlayer>("transferPlayer", {
    code: TRANSFER_PLAYER,
    indent: 0,
    parameters: [0, 0, 0, 0, 4, 0],
  });
  testMapping<Command_SetVehicleLocation>("setVehicleLocation", {
    code: SET_VEHICLE_LOCATION,
    indent: 0,
    parameters: [0, 0, 0, 0, 0],
  });
  testMapping<Command_SetEventLocation>("setEventLocation", {
    code: SET_EVENT_LOCATION,
    indent: 0,
    parameters: [0, 0, 0, 0, 6],
  });
  testMapping<Command_GameOver>("gameover", {
    code: GAME_OVER,
    indent: 0,
    parameters: [],
  });
  testMapping<Command_TintScreen>("tintScreen", {
    code: TINT_SCREEN,
    indent: 0,
    parameters: [mockColor, 0, false],
  });
  testMapping<Command_FlashScreen>("flashScreen", {
    code: FLASH_SCREEN,
    indent: 0,
    parameters: [mockColor, 0, false],
  });
  testMapping<Command_ShakeScreen>("shakeScreen", {
    code: SHAKE_SCREEN,
    indent: 0,
    parameters: [0, 0, 0, false],
  });
  testMapping<Command_BattleProcessing>("battleProcessing", {
    code: BATTLE_PROCESSING,
    indent: 0,
    parameters: [0, 0, false, false],
  });
  testMapping<Command_ChangeEncounter>("changeEncounter", {
    code: CHANGE_ENCOUNTER,
    indent: 0,
    parameters: [0],
  });
  testMapping<Command_ChangeFormationAccess>("changeFormationAccess", {
    code: CHANGE_FORMATION_ACCESS,
    indent: 0,
    parameters: [1],
  });
  testMapping<Command_ChangeMenuAccess>("changeMenuAccess", {
    code: CHANGE_MENU_ACCESS,
    indent: 0,
    parameters: [1],
  });
  testMapping<Command_ChangeSaveAccess>("changeSaveAccess", {
    code: CHANGE_SAVE_ACCESS,
    indent: 0,
    parameters: [1],
  });
  testMapping<Command_ChangeDefeatME>("changeDefeatME", {
    code: CHANGE_DEFEAT_ME,
    indent: 0,
    parameters: [makeAudioFileParams()],
  });
  testMapping<Command_ChangeVehicleImage>("changeVehicleImage", {
    code: CHANGE_VEHICLE_IMAGE,
    indent: 0,
    parameters: [0, "image", 2],
  });
  testMapping<Command_ShowPicture>("showPicture", makeCommandShowPicture({}));
  testMapping<Command_MovePicture>(
    "movePicture",
    makeCommandMovePicture({
      pictureId: 0,
      origin: 0,
      x: 0,
      y: 0,
      scaleX: 100,
      scaleY: 100,
      opacity: 255,
      blendMode: 0,
      wait: false,
      easingType: 0,
    }),
  );
  testMapping<Command_RotatePicture>("rotatePicture", {
    code: ROTATE_PICTURE,
    indent: 0,
    parameters: [0, 0],
  });
  testMapping<Command_TintPicture>("tintPicture", {
    code: TINT_PICTURE,
    indent: 0,
    parameters: [0, mockColor, 0, false],
  });
  testMapping<Command_ErasePicture>("erasePicture", {
    code: ERASE_PICTURE,
    indent: 0,
    parameters: [0],
  });
  testMapping<Command_SetWeatherEffect>("setWeatherEffects", {
    code: SET_WEATHER_EFFECT,
    indent: 0,
    parameters: ["", 0, 0, false],
  });
  testMapping<Command_PlayBGM>(
    "playBGM",
    makeCommandPlayBGM(makeAudioFileParams()),
  );
  testMapping<Command_FadeOutBGM>("fadeOutBGM", {
    code: FADEOUT_BGM,
    indent: 0,
    parameters: [0],
  });
  testMapping<Command_PlaySE>(
    "playSE",
    makeCommandPlaySE(makeAudioFileParams()),
  );
  testMapping<Command_StopSE>("stopSE", {
    code: STOP_SE,
    indent: 0,
    parameters: [],
  });
  testMapping<Command_PlayMovie>("playMovie", {
    code: PLAY_MOVIE,
    indent: 0,
    parameters: [""],
  });
  // testMapping<Command_ChangePlayerFollowers>("changePlayerFollowers", {
  //   code: CHANGE_PLAYER_FOLLOWERS,
  //   indent: 0,
  //   parameters: [0, 0],
  // });

  testMapping<Command_ChangeTransparency>("changeTransparency", {
    code: CHANGE_TRANSPARENCY,
    indent: 0,
    parameters: [0],
  });
});
