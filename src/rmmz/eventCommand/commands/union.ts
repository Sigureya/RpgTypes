import type {
  Command_ChangeActorName,
  Command_ChangeActorNickName,
  Command_ChangeActorProfile,
} from "./actor";
import type { CommandUnion_AnyAudio } from "./audio";
import type { Command_ControlTimer } from "./controlTimer";
import type {
  Command_ChangeArmors2,
  Command_ChangeItems2,
  Command_ChangeWeapons2,
} from "./item";
import type {
  Command_EraseEvent,
  Command_ExitEventProcessing,
  Command_FadeInScreen,
} from "./nonParam";
import type {
  Command_FadeOutScreen,
  Command_GameOver,
  Command_GatherFollowers,
  Command_GetOnOffVehicle,
  Command_Loop,
  Command_LoopBreak,
  Command_OpenSaveScreen,
  Command_ResumeBGM,
  Command_ReturnToTitleScreen,
  Command_SaveBGM,
  Command_Skip,
} from "./nonParam";
import type { Command_MovePicture2, Command_ShowPicture2 } from "./picture";
import type { Command_ScriptBody, Command_ScriptHeader } from "./script";
import type { Command_ControlVariables } from "./variable";

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
  | Command_ControlVariables;
