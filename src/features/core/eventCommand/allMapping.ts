import * as Code from "@RpgTypes/libs/eventCommand/eventCommandCodes";
import type { EventCommand } from "@RpgTypes/rmmz";
import {
  createMessageGroup,
  createScrollTextGroup,
  createCommentGroup,
  createScriptGroup,
} from "./commandGroup";
import type { PartialMappingObject } from "./mapperType";
import type { CallBackFunc } from "./types/basicCommandsMapper";

export const callHandler = <T, Command extends EventCommand>(
  command: Command,
  index: number,
  array: ReadonlyArray<EventCommand>,
  handler: CallBackFunc<Command, T> | undefined,
  fallback: CallBackFunc<EventCommand, T>,
): T => {
  return handler
    ? handler(command, index, array)
    : fallback(command, index, array);
};

export const mappingCommandList = <T>(
  array: ReadonlyArray<EventCommand>,
  table: PartialMappingObject<T>,
): T[] => {
  return array.map<T>((command, index) => mappingCommand(array, index, table));
};

export const flatMappingCommandList = <T>(
  array: ReadonlyArray<EventCommand>,
  table: PartialMappingObject<T[]>,
): T[] => {
  return array.flatMap((command, index) => mappingCommand(array, index, table));
};

export const mappingCommand = <T>(
  array: ReadonlyArray<EventCommand>,
  index: number,
  table: PartialMappingObject<T>,
): T => {
  const command: EventCommand = array[index];
  switch (command.code) {
    // メッセージ関連
    case Code.SHOW_MESSAGE:
      return table.showMessage
        ? table.showMessage(createMessageGroup(array, index), index, array)
        : table.other(command, index, array);
    case Code.SHOW_MESSAGE_BODY:
      return callHandler(
        command,
        index,
        array,
        table.showMessageBody,
        table.other,
      );
    case Code.SHOW_SCROLLING_TEXT:
      return table.showScrollingText
        ? table.showScrollingText(
            createScrollTextGroup(array, index),
            index,
            array,
          )
        : table.other(command, index, array);
    case Code.SHOW_SCROLLING_TEXT_BODY:
      return callHandler(
        command,
        index,
        array,
        table.showScrollingTextBody,
        table.other,
      );
    case Code.SHOW_CHOICES:
      return callHandler(command, index, array, table.showChoices, table.other);
    case Code.SHOW_CHOICES_ITEM:
      return callHandler(command, index, array, table.choiceWhen, table.other);

    // コメント・スクリプト関連
    case Code.COMMENT_HEAD:
      return table.comment
        ? table.comment(createCommentGroup(array, index), index, array)
        : table.other(command, index, array);
    case Code.COMMENT_BODY:
      return callHandler(command, index, array, table.commentBody, table.other);
    case Code.SCRIPT_EVAL:
      return table.script
        ? table.script(createScriptGroup(array, index), index, array)
        : table.other(command, index, array);
    case Code.SCRIPT_EVAL_BODY:
      return callHandler(command, index, array, table.scriptBody, table.other);

    // 条件・制御系
    case Code.CONDITIONAL_BRANCH:
      return callHandler(
        command,
        index,
        array,
        table.conditionalBranch,
        table.other,
      );
    case Code.CONTROL_SWITCHES:
      return callHandler(
        command,
        index,
        array,
        table.controlSwitch,
        table.other,
      );
    case Code.CONTROL_VARIABLES:
      return callHandler(
        command,
        index,
        array,
        table.controlVariable,
        table.other,
      );
    case Code.CONTROL_SELF_SWITCH:
      return callHandler(
        command,
        index,
        array,
        table.controlSelfSwitch,
        table.other,
      );
    case Code.CONTROL_TIMER:
      return callHandler(
        command,
        index,
        array,
        table.controlTimer,
        table.other,
      );

    case Code.COMMON_EVENT:
      return callHandler(command, index, array, table.commonEvent, table.other);
    // メニュー
    case Code.CHANGE_SAVE_ACCESS:
      return callHandler(
        command,
        index,
        array,
        table.changeSaveAccess,
        table.other,
      );
    case Code.CHANGE_MENU_ACCESS:
      return callHandler(
        command,
        index,
        array,
        table.changeMenuAccess,
        table.other,
      );
    case Code.CHANGE_ENCOUNTER:
      return callHandler(
        command,
        index,
        array,
        table.changeEncounter,
        table.other,
      );
    case Code.CHANGE_FORMATION_ACCESS:
      return callHandler(
        command,
        index,
        array,
        table.changeFormationAccess,
        table.other,
      );

    // キャラクター情報変更
    case Code.CHANGE_NAME:
      return callHandler(command, index, array, table.changeName, table.other);
    case Code.CHANGE_PROFILE:
      return callHandler(
        command,
        index,
        array,
        table.changeProfile,
        table.other,
      );
    case Code.CHANGE_NICKNAME:
      return callHandler(
        command,
        index,
        array,
        table.changeNickname,
        table.other,
      );
    case Code.CHANGE_ACTOR_IMAGES:
      return callHandler(
        command,
        index,
        array,
        table.changeActorImages,
        table.other,
      );
    case Code.CHANGE_VEHICLE_IMAGE:
      return callHandler(
        command,
        index,
        array,
        table.changeVehicleImage,
        table.other,
      );

    // BGM・音楽関連
    case Code.CHANGE_BATTLE_BGM:
      return callHandler(
        command,
        index,
        array,
        table.changeBattleBGM,
        table.other,
      );
    case Code.CHANGE_VICTORY_ME:
      return callHandler(
        command,
        index,
        array,
        table.changeVictoryME,
        table.other,
      );
    case Code.CHANGE_DEFEAT_ME:
      return callHandler(
        command,
        index,
        array,
        table.changeDefeatME,
        table.other,
      );

    case Code.PLAY_BGM:
      return callHandler(command, index, array, table.playBGM, table.other);
    case Code.FADEOUT_BGM:
      return callHandler(command, index, array, table.fadeOutBGM, table.other);
    case Code.PLAY_SE:
      return callHandler(command, index, array, table.playSE, table.other);
    case Code.STOP_SE:
      return callHandler(command, index, array, table.stopSE, table.other);
    case Code.PLAY_ME:
      return callHandler(command, index, array, table.playME, table.other);

    // ラベル・ジャンプ
    case Code.LABEL:
      return callHandler(command, index, array, table.label, table.other);
    case Code.LABEL_JUMP:
      return callHandler(command, index, array, table.labelJump, table.other);

    // 画面演出
    case Code.CHANGE_WINDOW_COLOR:
      return callHandler(
        command,
        index,
        array,
        table.changeWindowColor,
        table.other,
      );
    case Code.TINT_SCREEN:
      return callHandler(command, index, array, table.tintScreen, table.other);
    case Code.FLASH_SCREEN:
      return callHandler(command, index, array, table.flashScreen, table.other);
    case Code.SHAKE_SCREEN:
      return callHandler(command, index, array, table.shakeScreen, table.other);

    // ピクチャー
    case Code.SHOW_PICTURE:
      return callHandler(command, index, array, table.showPicture, table.other);
    case Code.MOVE_PICTURE:
      return callHandler(command, index, array, table.movePicture, table.other);
    case Code.ROTATE_PICTURE:
      return callHandler(
        command,
        index,
        array,
        table.rotatePicture,
        table.other,
      );
    case Code.TINT_PICTURE:
      return callHandler(command, index, array, table.tintPicture, table.other);
    case Code.ERASE_PICTURE:
      return callHandler(
        command,
        index,
        array,
        table.erasePicture,
        table.other,
      );

    // ゲーム進行
    case Code.BATTLE_PROCESSING:
      return callHandler(
        command,
        index,
        array,
        table.battleProcessing,
        table.other,
      );
    case Code.WAIT:
      return callHandler(command, index, array, table.wait, table.other);
    case Code.GAME_OVER:
      return callHandler(command, index, array, table.gameover, table.other);

    // 未整理
    case Code.CHANGE_PARALLAX:
      return callHandler(
        command,
        index,
        array,
        table.changeParallax,
        table.other,
      );
    case Code.CHANGE_BATTLE_BACKGROUND:
      return callHandler(
        command,
        index,
        array,
        table.changeBattleBackground,
        table.other,
      );

    case Code.PLAY_MOVIE:
      return callHandler(command, index, array, table.playMovie, table.other);
    case Code.CHANGE_TRANSPARENCY:
      return callHandler(
        command,
        index,
        array,
        table.changeTransparency,
        table.other,
      );
    case Code.SET_WEATHER_EFFECT:
      return callHandler(
        command,
        index,
        array,
        table.setWeatherEffects,
        table.other,
      );

    case Code.CHANGE_GOLD:
      return callHandler(command, index, array, table.changeGold, table.other);
    case Code.SHOW_ANIMATION:
      return callHandler(
        command,
        index,
        array,
        table.showAnimation,
        table.other,
      );
    case Code.TRANSFER_PLAYER:
      return callHandler(
        command,
        index,
        array,
        table.transferPlayer,
        table.other,
      );
    case Code.SET_VEHICLE_LOCATION:
      return callHandler(
        command,
        index,
        array,
        table.setVehicleLocation,
        table.other,
      );
    case Code.SET_EVENT_LOCATION:
      return callHandler(
        command,
        index,
        array,
        table.setEventLocation,
        table.other,
      );

    default:
      return table.other(command, index, array);
  }
};
