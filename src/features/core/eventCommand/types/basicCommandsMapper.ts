import type { Command_ShowMessageHeader } from "@RpgTypes/rmmz";
import type * as RpgTypes from "@RpgTypes/rmmz";
import type {
  Command_FlashScreen,
  Command_ShowChoices,
  Command_StopSE,
  Command_TintScreen,
} from "@RpgTypes/rmmz/eventCommand";
import type { Command_ChangeActorImages } from "@RpgTypes/rmmz/eventCommand/commands/actor/changeImages/types";
import type { Command_ShowAnimation } from "@RpgTypes/rmmz/eventCommand/commands/animation/types";
import type {
  Command_FadeOutBGM,
  Command_FadeOutBGS,
  Command_ResumeBGM,
  Command_SaveBGM,
} from "@RpgTypes/rmmz/eventCommand/commands/audio/other/types";
import type { Command_ChangeBattleBackground } from "@RpgTypes/rmmz/eventCommand/commands/battle/background/types";
import type { Command_BattleProcessing } from "@RpgTypes/rmmz/eventCommand/commands/battle/battleProcessing/types";
import type { Command_ControlTimer } from "@RpgTypes/rmmz/eventCommand/commands/controlTimer";
import type { Command_ChangeEncounter } from "@RpgTypes/rmmz/eventCommand/commands/encounter/types";
import type { Command_ConditionalBranch } from "@RpgTypes/rmmz/eventCommand/commands/flow/branch/commandTypes";
import type {
  Command_ChangeArmors,
  Command_ChangeWeapons,
} from "@RpgTypes/rmmz/eventCommand/commands/item/change";
import type { Command_ChangeParallax } from "@RpgTypes/rmmz/eventCommand/commands/map/parallax/types";
import type { Command_ScrollMap } from "@RpgTypes/rmmz/eventCommand/commands/map/scroll/types";
import type { Command_GetLocationInfo } from "@RpgTypes/rmmz/eventCommand/commands/mapEvent/getLocationInfo/types";
import type { Command_SetEventLocation } from "@RpgTypes/rmmz/eventCommand/commands/mapEvent/setLocation/types";
import type { Command_ChangePlayerFollowers } from "@RpgTypes/rmmz/eventCommand/commands/mapFollwer/types";
import type { Command_TransferPlayer } from "@RpgTypes/rmmz/eventCommand/commands/mapPlayer/transferPlayer/types";
import type {
  Command_ChangeFormationAccess,
  Command_ChangeMenuAccess,
  Command_ChangeSaveAccess,
} from "@RpgTypes/rmmz/eventCommand/commands/menu/types";
import type { Command_SetMovementRoute } from "@RpgTypes/rmmz/eventCommand/commands/movementRoute/command";
import type { Command_PlayMovie } from "@RpgTypes/rmmz/eventCommand/commands/movie/types";
import type { Command_ChangeGold } from "@RpgTypes/rmmz/eventCommand/commands/party/types/changeGold";
import type { Command_ChangePartyMember } from "@RpgTypes/rmmz/eventCommand/commands/party/types/changeMember";
import type { Command_ErasePicture } from "@RpgTypes/rmmz/eventCommand/commands/picture/erase/types";
import type { Command_ShakeScreen } from "@RpgTypes/rmmz/eventCommand/commands/screen/types/shake";
import type { Command_ChangeTileset } from "@RpgTypes/rmmz/eventCommand/commands/tileset/types";
import type { Command_ChangeTransparency } from "@RpgTypes/rmmz/eventCommand/commands/transparency/types";
import type { Command_Wait } from "@RpgTypes/rmmz/eventCommand/commands/wait/types";
import type { Command_SetWeatherEffect } from "@RpgTypes/rmmz/eventCommand/commands/weather/types";
import type { Command_ChangeWindowColor } from "@RpgTypes/rmmz/eventCommand/commands/window/changeWindowColor/types";

export type CallBackFunc<
  Command extends RpgTypes.EventCommandUnknown,
  Reulst = void,
> = (
  command: Readonly<Command>,
  index: number,
  list: ReadonlyArray<Readonly<RpgTypes.EventCommand>>,
) => Reulst;

export interface FallbackMapper<T> {
  other: CallBackFunc<RpgTypes.EventCommand, T>;
}

export interface BasicMappingObject<T> extends FallbackMapper<T> {
  showMessageHeader: CallBackFunc<Command_ShowMessageHeader, T>;
  showMessageBody: CallBackFunc<RpgTypes.Command_ShowMessageBody, T>;

  showScrollingTextBody: CallBackFunc<RpgTypes.Command_ScrollTextBody, T>;
  commentHedder: CallBackFunc<RpgTypes.Command_CommentHeader, T>;
  commentBody: CallBackFunc<RpgTypes.Command_CommentBody, T>;

  scriptHedder: CallBackFunc<RpgTypes.Command_ScriptHeader, T>;
  scriptBody: CallBackFunc<RpgTypes.Command_ScriptBody, T>;

  controlSwitch: CallBackFunc<RpgTypes.Command_ControlSwitches, T>;
  controlVariable: CallBackFunc<RpgTypes.Command_ControlVariables, T>;
  controlSelfSwitch: CallBackFunc<RpgTypes.Command_ControlSelfSwitch, T>;
  controlTimer: CallBackFunc<Command_ControlTimer, T>;
  conditionalBranch: CallBackFunc<Command_ConditionalBranch, T>;

  battleProcessing: CallBackFunc<Command_BattleProcessing, T>;
  showChoices: CallBackFunc<Command_ShowChoices, T>;
  choiceWhen: CallBackFunc<RpgTypes.Command_ShowChoiceWhen, T>;
  changeName: CallBackFunc<RpgTypes.Command_ChangeActorName, T>;
  changeProfile: CallBackFunc<RpgTypes.Command_ChangeActorProfile, T>;
  changeNickname: CallBackFunc<RpgTypes.Command_ChangeActorNickName, T>;

  label: CallBackFunc<RpgTypes.Command_Label, T>;
  labelJump: CallBackFunc<RpgTypes.Command_LabelJump, T>;
  commonEvent: CallBackFunc<RpgTypes.Command_CommonEvent, T>;
  changeBattleBGM: CallBackFunc<RpgTypes.Command_ChangeBattleBGM, T>;
  changeVictoryME: CallBackFunc<RpgTypes.Command_ChangeVictoryME, T>;
  changeDefeatME: CallBackFunc<RpgTypes.Command_ChangeDefeatME, T>;
  changeSaveAccess: CallBackFunc<Command_ChangeSaveAccess, T>;
  changeMenuAccess: CallBackFunc<Command_ChangeMenuAccess, T>;
  changeEncounter: CallBackFunc<Command_ChangeEncounter, T>;
  changeFormationAccess: CallBackFunc<Command_ChangeFormationAccess, T>;
  changeWindowColor: CallBackFunc<Command_ChangeWindowColor, T>;
  changeGold: CallBackFunc<Command_ChangeGold, T>;

  showAnimation: CallBackFunc<Command_ShowAnimation, T>;
  transferPlayer: CallBackFunc<Command_TransferPlayer, T>;
  setVehicleLocation: CallBackFunc<RpgTypes.Command_SetVehicleLocation, T>;
  setEventLocation: CallBackFunc<Command_SetEventLocation, T>;
  scrollMap: CallBackFunc<Command_ScrollMap, T>;
  setMovementRoute: CallBackFunc<Command_SetMovementRoute, T>;
  gettingOnOffVehicle: CallBackFunc<RpgTypes.Command_GetOnOffVehicle, T>;
  changeTransparency: CallBackFunc<Command_ChangeTransparency, T>;
  showPicture: CallBackFunc<RpgTypes.Command_ShowPicture, T>;
  movePicture: CallBackFunc<RpgTypes.Command_MovePicture, T>;
  rotatePicture: CallBackFunc<RpgTypes.Command_RotatePicture, T>;
  tintPicture: CallBackFunc<RpgTypes.Command_TintPicture, T>;
  erasePicture: CallBackFunc<Command_ErasePicture, T>;
  setWeatherEffects: CallBackFunc<Command_SetWeatherEffect, T>;
  playBGM: CallBackFunc<RpgTypes.Command_PlayBGM, T>;
  fadeOutBGM: CallBackFunc<Command_FadeOutBGM, T>;
  saveBGM: CallBackFunc<Command_SaveBGM, T>;
  resumeBGM: CallBackFunc<Command_ResumeBGM, T>;
  playBGS: CallBackFunc<RpgTypes.Command_PlayBGS, T>;
  fadeOutBGS: CallBackFunc<Command_FadeOutBGS, T>;
  playME: CallBackFunc<RpgTypes.Command_PlayME, T>;
  playSE: CallBackFunc<RpgTypes.Command_PlaySE, T>;
  stopSE: CallBackFunc<Command_StopSE, T>;
  playMovie: CallBackFunc<Command_PlayMovie, T>;
  changePlayerFollowers: CallBackFunc<Command_ChangePlayerFollowers, T>;
  gameover: CallBackFunc<RpgTypes.Command_GameOver, T>;
  wait: CallBackFunc<Command_Wait, T>;
  shonAnimation: CallBackFunc<Command_ShowAnimation, T>;
  gatherFollowers: CallBackFunc<RpgTypes.Command_GatherFollowers, T>;
  changeWeapon: CallBackFunc<Command_ChangeWeapons, T>;
  changeArmor: CallBackFunc<Command_ChangeArmors, T>;
  changePartyMember: CallBackFunc<Command_ChangePartyMember, T>;
  changeActorImages: CallBackFunc<Command_ChangeActorImages, T>;

  changeTileset: CallBackFunc<Command_ChangeTileset, T>;
  changeBattleBackground: CallBackFunc<Command_ChangeBattleBackground, T>;
  changeParallax: CallBackFunc<Command_ChangeParallax, T>;
  getLocationsInfo: CallBackFunc<Command_GetLocationInfo, T>;

  changeVehicleImage: CallBackFunc<RpgTypes.Command_ChangeVehicleImage, T>;

  tintScreen: CallBackFunc<Command_TintScreen, T>;
  flashScreen: CallBackFunc<Command_FlashScreen, T>;
  shakeScreen: CallBackFunc<Command_ShakeScreen, T>;
}
