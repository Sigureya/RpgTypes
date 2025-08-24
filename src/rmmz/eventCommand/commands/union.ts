import type {
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
} from "./actor";
import type { Command_ChangeActorImages } from "./actor/changeImages/types";
import type { CommandUnion_AnyAudio } from "./audio";
import type {
  Command_FadeOutScreen,
  Command_ResumeBGM,
  Command_SaveBGM,
} from "./audio/other/types";
import type { Command_ControlTimer } from "./controlTimer";
import type {
  Command_ConditionalBranch,
  Command_ConditionalBranchElse,
} from "./flow/branch/types";
import type { Command_CommonEvent } from "./flow/callCommonEvent";
import type { Command_ControlSwitches } from "./flow/controlSwtches";
import type { Command_ExitEventProcessing } from "./flow/exitEvent/types";
import type { Command_Label, Command_LabelJump } from "./flow/label/types";
import type { Command_Loop, Command_LoopBreak } from "./flow/loop/types";
import type { Command_ControlSelfSwitch } from "./flow/selfSwitch/types";
import type { Command_InputNumber } from "./inputNumber/types";
import type {
  Command_ChangeArmors2,
  Command_ChangeItems2,
  Command_ChangeWeapons2,
} from "./item/change";
import type { Command_SelectItem } from "./item/select/types";
import type { Command_ChangeTileset } from "./mapImage/tileset/types";
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
import type { Command_PlayMovie } from "./movie/types";
import type { Command_PluginCommandMV } from "./mv/pluginCommandMV";
import type {
  Command_GameOver,
  Command_GatherFollowers,
  Command_OpenSaveScreen,
  Command_ReturnToTitleScreen,
  Command_Skip,
  Command_EraseEvent,
  Command_FadeInScreen,
} from "./nonParam/types";
import type { Command_ChangePartyMember } from "./party/changeMember/types";
import type { Command_ChangeGold2 } from "./party/gold/changeGold";
import type { Command_MovePicture2, Command_ShowPicture2 } from "./picture";
import type { Command_ScriptBody, Command_ScriptHeader } from "./script/types";
import type {
  Command_ShopProcessing2,
  Command_ShopProcessingBody2,
} from "./shop/types";
import type { Command_ControlVariables } from "./variable/types";
import type { Command_GetOnOffVehicle } from "./vehicle/types";

export type EventCommand2 =
  | Command_ChangeArmors2
  | Command_ChangeItems2
  | Command_ChangeWeapons2
  | Command_ChangeActorName
  | Command_ChangeActorNickName
  | Command_ChangeActorProfile
  | CommandUnion_AnyAudio
  | Command_EraseEvent
  | Command_ExitEventProcessing
  | Command_FadeInScreen
  | Command_FadeOutScreen
  | Command_GameOver
  | Command_GatherFollowers
  | Command_GetOnOffVehicle
  | Command_Loop
  | Command_LoopBreak
  | Command_OpenSaveScreen
  | Command_ResumeBGM
  | Command_ReturnToTitleScreen
  | Command_SaveBGM
  | Command_Skip
  | Command_ShowPicture2
  | Command_MovePicture2
  | Command_ControlTimer
  | Command_ScriptHeader
  | Command_ScriptBody
  | Command_ControlVariables
  | Command_ChangeMenuAccess
  | Command_ChangeSaveAccess
  | Command_ChangeFormationAccess
  | Command_CommonEvent
  | Command_ControlSwitches
  | Command_ChangeActorImages
  | Command_ControlSelfSwitch
  | Command_InputNumber
  | Command_ChangePartyMember
  | Command_ChangeGold2
  | Command_ShopProcessing2
  | Command_ShopProcessingBody2
  | Command_ShowMessageHeader
  | Command_ShowMessageBody
  | Command_CommentHeader
  | Command_CommentBody
  | Command_ScrollTextHeader
  | Command_ScrollTextBody
  | Command_ShowChoices
  | Command_ShowChoiceWhen
  | Command_PluginCommandMV
  | Command_ConditionalBranchElse
  | Command_ConditionalBranch
  | Command_SelectItem
  | Command_PlayMovie
  | Command_Label
  | Command_LabelJump
  | Command_ChangeTileset;
