import type { EventCommandLike2 } from "@RpgTypes/eventCommand";
import type { EventCommandLike } from "@RpgTypes/schema";
export interface Command_Skip extends EventCommandLike<109> {
  parameters: [];
}
export interface Command_Loop extends EventCommandLike<112> {
  parameters: [];
}
export interface Command_LoopBreak extends EventCommandLike<113> {
  parameters: [];
}

export interface Command_ExitEventProcessing extends EventCommandLike<115> {
  parameters: [];
}
export interface Command_EraseEvent extends EventCommandLike2<214, []> {}

export interface Command_GatherFollowers extends EventCommandLike2<217, []> {}

export interface Command_FadeOutScreen extends EventCommandLike2<221, []> {}

export interface Command_FadeInScreen extends EventCommandLike2<222, []> {}

export interface Command_SaveBGM extends EventCommandLike<243, []> {}

export interface Command_ResumeBGM extends EventCommandLike<244, []> {}
export interface Command_OpenSaveScreen extends EventCommandLike<352, []> {}
export interface Command_GameOver extends EventCommandLike<353, []> {}
