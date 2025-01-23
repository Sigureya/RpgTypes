import type { EventCommandTable } from "./eventCommand";

export type Command_ShowMessage = EventCommandTable["SHOW_MESSAGE"];
export type Command_ShowMessageBody = EventCommandTable["SHOW_MESSAGE_BODY"];
export type Command_ShowChoices = EventCommandTable["SHOW_CHOICES"];
export type Command_ShowChoicesItem = EventCommandTable["SHOW_CHOICES_ITEM"];
export type Command_ShowScrollingText =
  EventCommandTable["SHOW_SCROLLING_TEXT"];
export type Command_ShowScrollingTextBody =
  EventCommandTable["SHOW_SCROLLING_TEXT_BODY"];
export type Command_InputNumber = EventCommandTable["INPUT_NUMBER"];
export type Command_SelectItem = EventCommandTable["SELECT_ITEM"];
export type Command_NoOperation = EventCommandTable["NO_OPERATION"];
export type Command_Comment = EventCommandTable["COMMENT"];
export type Command_CommentBody = EventCommandTable["COMMENT_BODY"];
export type Command_Skip = EventCommandTable["SKIP"];
export type Command_ConditionalBranch = EventCommandTable["CONDITIONAL_BRANCH"];
export type Command_ConditionalBranchElse =
  EventCommandTable["CONDITIONAL_BRANCH_ELSE"];

export type Command_Loop = EventCommandTable["LOOP"];
export type Command_LoopBreak = EventCommandTable["LOOP_BREAK"];
export type Command_ExitEventProcessing =
  EventCommandTable["EXIT_EVENT_PROCESSING"];
export type Command_CommonEvent = EventCommandTable["COMMON_EVENT"];
export type Command_Label = EventCommandTable["LABEL"];
export type Command_LabelJump = EventCommandTable["LABEL_JUMP"];
export type Command_ControlSwitches = EventCommandTable["CONTROL_SWITCHES"];
export type Command_ControlVariables = EventCommandTable["CONTROL_VARIABLES"];
export type Command_ControlSelfSwitch =
  EventCommandTable["CONTROL_SELF_SWITCH"];
export type Command_ControlTimer = EventCommandTable["CONTROL_TIMER"];
export type Command_ChangeGold = EventCommandTable["CHANGE_GOLD"];
export type Command_ChangeItems = EventCommandTable["CHANGE_ITEMS"];
export type Command_ChangeWeapons = EventCommandTable["CHANGE_WEAPONS"];
export type Command_ChangeArmors = EventCommandTable["CHANGE_ARMORS"];
export type Command_ChangePartyMember =
  EventCommandTable["CHANGE_PARTY_MEMBER"];
export type Command_ChangeBattleBGM = EventCommandTable["CHANGE_BATTLE_BGM"];
export type Command_ChangeVictoryME = EventCommandTable["CHANGE_VICTORY_ME"];
export type Command_ChangeSaveAccess = EventCommandTable["CHANGE_SAVE_ACCESS"];
export type Command_ChangeMenuAccess = EventCommandTable["CHANGE_MENU_ACCESS"];
export type Command_ChangeEncounter = EventCommandTable["CHANGE_ENCOUNTER"];
export type Command_ChangeFormationAccess =
  EventCommandTable["CHANGE_FORMATION_ACCESS"];
export type Command_ChangeWindowColor =
  EventCommandTable["CHANGE_WINDOW_COLOR"];
export type Command_ChangeDefeatME = EventCommandTable["CHANGE_DEFEAT_ME"];
export type Command_ChangeVehicleME = EventCommandTable["CHANGE_VEHICLE_ME"];
export type Command_TransferPlayer = EventCommandTable["TRANSFER_PLAYER"];
export type Command_SetVehicleLocation =
  EventCommandTable["SET_VEHICLE_LOCATION"];
export type Command_SetEventLocation = EventCommandTable["SET_EVENT_LOCATION"];
export type Command_ScrollMap = EventCommandTable["SCROLL_MAP"];
export type Command_SetMovementRoute = EventCommandTable["SET_MOVEMENT_ROUTE"];
export type Command_GetOnoffVehicle = EventCommandTable["GET_ONOFF_VEHICLE"];
export type Command_ChangeTransparency =
  EventCommandTable["CHANGE_TRANSPARENCY"];
export type Command_ShowAnimation = EventCommandTable["SHOW_ANIMATION"];
export type Command_ShowBalloonIcon = EventCommandTable["SHOW_BALLOON_ICON"];
export type Command_EraseEvent = EventCommandTable["ERASE_EVENT"];
export type Command_ChangePlayerFollowers =
  EventCommandTable["CHANGE_PLAYER_FOLLOWERS"];
export type Command_GatherFollowers = EventCommandTable["GATHER_FOLLOWERS"];
export type Command_FadeoutScreen = EventCommandTable["FADEOUT_SCREEN"];
export type Command_FadeinScreen = EventCommandTable["FADEIN_SCREEN"];
export type Command_TintScreen = EventCommandTable["TINT_SCREEN"];

export type Command_FlashScreen = EventCommandTable["FLASH_SCREEN"];

export type Command_ShakeScreen = EventCommandTable["SHAKE_SCREEN"];
export type Command_Wait = EventCommandTable["WAIT"];
export type Command_ShowPicture = EventCommandTable["SHOW_PICTURE"];
export type Command_MovePicture = EventCommandTable["MOVE_PICTURE"];
export type Command_TintPicture = EventCommandTable["TINT_PICTURE"];
export type Command_RotatePicture = EventCommandTable["ROTATE_PICTURE"];
export type Command_ErasePicture = EventCommandTable["ERASE_PICTURE"];
export type Command_SetWeatherEffect = EventCommandTable["SET_WEATHER_EFFECT"];
export type Command_PlayBGM = EventCommandTable["PLAY_BGM"];
export type Command_FadeoutBGM = EventCommandTable["FADEOUT_BGM"];
export type Command_SaveBGM = EventCommandTable["SAVE_BGM"];
export type Command_ResumeBGM = EventCommandTable["RESUME_BGM"];
export type Command_PlayBGS = EventCommandTable["PLAY_BGS"];
export type Command_PlayME = EventCommandTable["PLAY_ME"];
export type Command_PlaySE = EventCommandTable["PLAY_SE"];
export type Command_ChangeTileset = EventCommandTable["CHANGE_TILESET"];
export type Command_ChangeBattleBackground =
  EventCommandTable["CHANGE_BATTLE_BACKGROUND"];
export type Command_ChangeParallax = EventCommandTable["CHANGE_PARALLAX"];
export type Command_BattleProcessing = EventCommandTable["BATTLE_PROCESSING"];
export type Command_ShopProcessing = EventCommandTable["SHOP_PROCESSING"];
export type Command_ShopProcessingBody =
  EventCommandTable["SHOP_PROCESSING_BODY"];
export type Command_PluginCommand = EventCommandTable["PLUGIN_COMMAND_MV"];
export type Command_ChangeNickname = EventCommandTable["CHANGE_NICKNAME"];

export type Command_ChangeProfile = EventCommandTable["CHANGE_PROFILE"];
export type Command_ChangeNickName = EventCommandTable["CHANGE_NICKNAME"];
export type Command_ChangeName = EventCommandTable["CHANGE_NAME"];

export type Command_ChangeHP = EventCommandTable["CHANGE_HP"];
export type Command_ChangeMP = EventCommandTable["CHANGE_MP"];
export type Command_ChangeTP = EventCommandTable["CHANGE_TP"];
export type Command_ChangeActorImages =
  EventCommandTable["CHANGE_ACTOR_IMAGES"];
export type Command_ChangeVehicleImage =
  EventCommandTable["CHANGE_VEHICLE_IMAGE"];

export type Command_ScriptEval = EventCommandTable["SCRIPT_EVAL"];
export type Command_ScriptEvalBody = EventCommandTable["SCRIPT_EVAL_BODY"];
export type Command_PluginCommandMZ = EventCommandTable["PLUGIN_COMMAND_MZ"];
