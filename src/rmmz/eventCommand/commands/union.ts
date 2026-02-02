import type { Command_ChangeSkill, Command_NameInputProcessing } from "./actor";
import type { Command_ChangeClaass } from "./actor/changeClass/types";
import type { Command_ChangeExp } from "./actor/changeExp/types";
import type { Command_ChangeActorImages } from "./actor/changeImages/types";
import type { Command_ChangeActorLevel } from "./actor/changeLevel/types";
import type { Command_ChangeParam } from "./actor/changeParam/types";
import type { Command_ChangeActorState } from "./actor/changeState/types";
import type {
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
} from "./actor/changeText/types";
import type {
  Command_ChangeActorHP,
  Command_ChangeActorMP,
  Command_ChangeActorTP,
} from "./actor/changeValues/types";
import type { Command_RecoverAll } from "./actor/recoverAll/types";
import type { Command_ShowAnimation } from "./animation/types";
import type {
  Command_FadeOutBGM,
  Command_FadeOutBGS,
  Command_ResumeBGM,
  Command_SaveBGM,
} from "./audio/other/types";
import type {
  Command_ChangeBattleBGM,
  Command_ChangeDefeatME,
  Command_ChangeVictoryME,
  Command_PlayBGM,
  Command_PlayBGS,
  Command_PlayME,
  Command_PlaySE,
} from "./audio/play/types";
import type { Command_StopSE } from "./audio/stop";
import type { Command_ShowBalloonIcon } from "./balloon/types";
import type { Command_AbortBattle } from "./battle/abort/types";
import type { Command_ChangeBattleBackground } from "./battle/background/types";
import type { Command_BattleProcessing } from "./battle/battleProcessing/types";
import type { Command_ShowBattleAnimation } from "./battle/showAnimation/types";
import type { Command_ControlTimer } from "./controlTimer/types";
import type { Command_ChangeEncounter } from "./encounter/types";
import type { Command_EnemyAppear } from "./enemy";
import type {
  Command_ChangeEnemyHP,
  Command_ChangeEnemyMP,
  Command_ChangeEnemyTP,
} from "./enemy/change/types";
import type { Command_EnemyRecoverAll } from "./enemy/recoverAll/types";
import type { Command_ChangeEnemyState } from "./enemy/state/types";
import type { Command_EnemyTransform } from "./enemy/transform/types";
import type {
  Command_BranchElse,
  Command_CommonEvent,
  Command_ControlSelfSwitch,
  Command_ControlSwitches,
  Command_ExitEventProcessing,
  Command_Label,
  Command_LabelJump,
  Command_Loop,
  Command_LoopBreak,
} from "./flow";
import type {
  Command_ConditionalBranch,
  Command_ConditionalBranchElse,
} from "./flow/branch/commandTypes";
import type { Command_InputNumber } from "./inputNumber/types";
import type {
  Command_ChangeArmors,
  Command_ChangeItems,
  Command_ChangeWeapons,
} from "./item/change";
import type { Command_SelectItem } from "./item/select/types";
import type { Command_ChangeMapNameDisplay } from "./map/changeMapNameDisplay/types";
import type { Command_ChangeParallax } from "./map/parallax/types";
import type { Command_ScrollMap } from "./map/scroll/types";
import type { Command_EraseEvent } from "./mapEvent/eraseEvent/types";
import type { Command_GetLocationInfo } from "./mapEvent/getLocationInfo/types";
import type { Command_SetEventLocation } from "./mapEvent/setLocation/types";
import type { Command_ChangePlayerFollowers } from "./mapFollwer/types";
import type { Command_TransferPlayer } from "./mapPlayer/transferPlayer/types";
import type { Command_OpenMenu } from "./menu/open/types";
import type { Command_OpenSaveScreen } from "./menu/save/types";
import type {
  Command_ChangeFormationAccess,
  Command_ChangeMenuAccess,
  Command_ChangeSaveAccess,
} from "./menu/types";
import type {
  Command_CommentBody,
  Command_CommentHeader,
} from "./message/comment/types";
import type {
  Command_ScrollTextBody,
  Command_ScrollTextHeader,
} from "./message/scrollText";
import type {
  Command_ShowChoiceWhen,
  Command_ShowChoices,
} from "./message/setupChoice";
import type {
  Command_ShowMessageBody,
  Command_ShowMessageHeader,
} from "./message/showMessage";
import type { Command_SetMovementRoute } from "./movementRoute/command";
import type { Command_PlayMovie } from "./movie/types";
import type { Command_PluginCommandMV } from "./mv/pluginCommandMV";
import type { Command_PluginCommandMZ } from "./mz";
import type {
  Command_GameOver,
  Command_GatherFollowers,
  Command_ReturnToTitleScreen,
  Command_FadeInScreen,
} from "./nonParam/types";
import type { Command_NoOperation } from "./noOperation";
import type { Command_ChangePartyMember, Command_ChangeGold } from "./party";
import type {
  Command_MovePicture,
  Command_RotatePicture,
  Command_ShowPicture,
  Command_TintPicture,
} from "./picture";
import type { Command_ErasePicture } from "./picture/erase/types";
import type {
  Command_FlashScreen,
  Command_TintScreen,
  Command_FadeOutScreen,
  Command_ShakeScreen,
  Command_Weather,
} from "./screen/types";
import type { Command_ScriptBody, Command_ScriptHeader } from "./script/types";
import type {
  Command_ShopProcessing,
  Command_ShopProcessingBody,
} from "./shop/types";
import type { Command_Skip } from "./skip/types";
import type { Command_ChangeTileset } from "./tileset/types";
import type { Command_ChangeTransparency } from "./transparency/types";
import type { Command_ControlVariables } from "./variable/types";
import type {
  Command_ChangeVehicleBGM,
  Command_SetVehicleLocation,
  Command_GetOnOffVehicle,
  Command_ChangeVehicleImage,
} from "./vehicle";
import type { Command_Wait } from "./wait/types";
import type { Command_SetWeatherEffect } from "./weather/types";
import type { Command_ChangeWindowColor } from "./window/changeWindowColor/types";

export type EventCommand = NormalizedEventCommand | Command_ScriptBody;

export type NormalizedEventCommand =
  | Command_ScriptHeader
  | Command_NoOperation
  | Command_ChangePlayerFollowers
  | Command_ChangeWindowColor
  | Command_StopSE
  | Command_ChangeClaass
  | Command_ChangeActorImages
  | Command_ChangeActorName
  | Command_ChangeActorNickName
  | Command_ChangeActorProfile
  | Command_ChangeActorHP
  | Command_ChangeActorMP
  | Command_ChangeActorTP
  | Command_FadeOutBGM
  | Command_FadeOutBGS
  | Command_ResumeBGM
  | Command_SaveBGM
  | Command_ChangeBattleBGM
  | Command_ChangeDefeatME
  | Command_ChangeVehicleBGM
  | Command_ChangeVictoryME
  | Command_PlayBGM
  | Command_PlayBGS
  | Command_PlayME
  | Command_PlaySE
  | Command_ShowBalloonIcon
  | Command_ChangeBattleBackground
  | Command_BattleProcessing
  | Command_ControlTimer
  | Command_ChangeEnemyHP
  | Command_ChangeEnemyMP
  | Command_ChangeEnemyState
  | Command_EnemyTransform
  | Command_ConditionalBranch
  | Command_ConditionalBranchElse
  | Command_CommonEvent
  | Command_ControlSwitches
  | Command_ExitEventProcessing
  | Command_Label
  | Command_LabelJump
  | Command_Loop
  | Command_LoopBreak
  | Command_ControlSelfSwitch
  | Command_InputNumber
  | Command_ChangeArmors
  | Command_ChangeItems
  | Command_ChangeWeapons
  | Command_SelectItem
  | Command_ChangeParallax
  | Command_ScrollMap
  | Command_EraseEvent
  | Command_ChangeTileset
  | Command_OpenSaveScreen
  | Command_ChangeFormationAccess
  | Command_ChangeMenuAccess
  | Command_ChangeSaveAccess
  | Command_CommentBody
  | Command_CommentHeader
  | Command_ScrollTextBody
  | Command_ScrollTextHeader
  | Command_ShowChoiceWhen
  | Command_ShowChoices
  | Command_ShowMessageBody
  | Command_ShowMessageHeader
  | Command_SetMovementRoute
  | Command_PlayMovie
  | Command_PluginCommandMV
  | Command_GameOver
  | Command_GatherFollowers
  | Command_ReturnToTitleScreen
  | Command_FadeInScreen
  | Command_ChangePartyMember
  | Command_ChangeGold
  | Command_MovePicture
  | Command_ShowPicture
  | Command_ErasePicture
  | Command_RotatePicture
  | Command_TintPicture
  | Command_FlashScreen
  | Command_ShakeScreen
  | Command_TintScreen
  | Command_FadeOutScreen
  | Command_ShopProcessing
  | Command_ShopProcessingBody
  | Command_Skip
  | Command_ControlVariables
  | Command_SetVehicleLocation
  | Command_GetOnOffVehicle
  | Command_Wait
  | Command_SetWeatherEffect
  | Command_SetEventLocation
  | Command_ChangeVehicleImage
  | Command_TransferPlayer
  | Command_ShowAnimation
  | Command_ChangeEncounter
  | Command_ChangeTransparency
  | Command_RecoverAll
  | Command_ChangeExp
  | Command_GetLocationInfo
  | Command_ChangeMapNameDisplay
  | Command_ChangeActorState
  | Command_ChangeActorLevel
  | Command_ChangeSkill
  | Command_ChangeParam
  | Command_EnemyRecoverAll
  | Command_EnemyAppear
  | Command_AbortBattle
  | Command_OpenMenu
  | Command_ShowBattleAnimation
  | Command_PluginCommandMZ
  | Command_BranchElse
  | Command_ChangeEnemyTP
  | Command_NameInputProcessing;
