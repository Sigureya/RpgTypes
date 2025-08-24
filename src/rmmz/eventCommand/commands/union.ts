import type {
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
} from "./actor";
import type { Command_ChangeActorImages } from "./actor/changeImages/types";
import type { CommandUnion_AnyAudio } from "./audio";
import type { Command_ControlTimer } from "./controlTimer";
import type { Command_CommonEvent } from "./flow/callCommonEvent";
import type { Command_ControlSwitches } from "./flow/controlSwtches";
import type { Command_ExitEventProcessing } from "./flow/exitEvent/types";
import type { Command_Loop, Command_LoopBreak } from "./flow/loop/types";
import type { Command_ControlSelfSwitch } from "./flow/selfSwitch/types";
import type { Command_InputNumber } from "./inputNumber/types";
import type {
  Command_ChangeArmors2,
  Command_ChangeItems2,
  Command_ChangeWeapons2,
} from "./item/change";
import type {
  Command_ChangeFormationAccess,
  Command_ChangeMenuAccess,
  Command_ChangeSaveAccess,
} from "./menu/types";
import type {
  Command_FadeOutScreen,
  Command_GameOver,
  Command_GatherFollowers,
  Command_GetOnOffVehicle,
  Command_OpenSaveScreen,
  Command_ResumeBGM,
  Command_ReturnToTitleScreen,
  Command_SaveBGM,
  Command_Skip,
  Command_EraseEvent,
  Command_FadeInScreen,
} from "./nonParam/types";
import type { Command_ChangePartyMember } from "./party/changeMember/types";
import type { Command_ChangeGold2 } from "./party/gold/changeGold";
import type { Command_MovePicture2, Command_ShowPicture2 } from "./picture";
import type { Command_ScriptBody, Command_ScriptHeader } from "./script/types";
import type { Command_ControlVariables } from "./variable/types";

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
  | Command_ChangeGold2;
