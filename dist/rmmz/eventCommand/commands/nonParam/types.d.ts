import { EventCommandLike } from '../../../rpg';
export interface Command_Skip extends EventCommandLike<109> {
    parameters: [];
}
export interface Command_Loop extends EventCommandLike<112> {
    parameters: [];
}
export interface Command_LoopBreak extends EventCommandLike<113> {
    parameters: [];
}
export interface Command_GetOnOffVehicle extends EventCommandLike<206, []> {
}
export interface Command_ExitEventProcessing extends EventCommandLike<115> {
    parameters: [];
}
export interface Command_EraseEvent extends EventCommandLike<214, []> {
}
export interface Command_GatherFollowers extends EventCommandLike<217, []> {
}
export interface Command_FadeOutScreen extends EventCommandLike<221, []> {
}
export interface Command_FadeInScreen extends EventCommandLike<222, []> {
}
export interface Command_SaveBGM extends EventCommandLike<243, []> {
}
export interface Command_ResumeBGM extends EventCommandLike<244, []> {
}
export interface Command_OpenSaveScreen extends EventCommandLike<352, []> {
}
export interface Command_GameOver extends EventCommandLike<353, []> {
}
export interface Command_ReturnToTitleScreen extends EventCommandLike<354, []> {
}
