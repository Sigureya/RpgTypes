import { EventCommandLike } from './eventComandLike';
import { AudioFileParams, ColorRGBA, Direction8, MoveRouteData } from './types';
import { ControlVariables, MovePicture, ShopGoods, ShowPicture, ValueOf, Toggle, Operation_PlusMinus } from './paramaters';
import { BranchParameters } from './branchParams';
export interface Command_ShowMessage extends EventCommandLike<101, [
    facename: string,
    faceIndex: number,
    background: number,
    positionType: number,
    speakerName: string
]> {
}
export interface Command_ShowMessageBody extends EventCommandLike<401, [content: string]> {
}
export interface Command_ShowChoices extends EventCommandLike<102, [
    choices: string[],
    cancelType: number,
    defaultType: number,
    positionType: number,
    background: number
]> {
}
export interface Command_ChoiceWhen extends EventCommandLike<402, [index: number, text: string]> {
}
export interface Command_InputNumber extends EventCommandLike<103, [variableId: number, digits: number]> {
}
export interface Command_SelectItem extends EventCommandLike<104, [variableId: number, itemType: number]> {
}
export interface Command_ShowScrollingText extends EventCommandLike<105, [speed: number, skip: boolean]> {
}
export interface Command_ShowScrollingTextBody extends EventCommandLike<405, [content: string]> {
}
export interface Command_Comment extends EventCommandLike<108, [content: string]> {
}
export interface Command_CommentBody extends EventCommandLike<408, [content: string]> {
}
export interface Command_Skip extends EventCommandLike<109, []> {
}
export interface Command_ConditionalBranch extends EventCommandLike<111, BranchParameters> {
}
export interface Command_ConditionalBranchElse extends EventCommandLike<411, []> {
}
export interface Command_Loop extends EventCommandLike<112, []> {
}
export interface Command_LoopBreak extends EventCommandLike<113, []> {
}
export interface Command_ExitEventProcessing extends EventCommandLike<115, []> {
}
export interface Command_CommonEvent extends EventCommandLike<117, [eventId: number]> {
}
export interface Command_Label extends EventCommandLike<118, [label: string]> {
}
export interface Command_LabelJump extends EventCommandLike<119, [label: string]> {
}
export interface Command_ControlSwitches extends EventCommandLike<121, [
    min: number,
    max: number,
    value: ValueOf<Toggle>
]> {
}
export interface Command_ControlVariables extends EventCommandLike<122, ControlVariables> {
}
export interface Command_ControlSelfSwitch extends EventCommandLike<123, [switchId: string, value: ValueOf<Toggle>]> {
}
export interface Command_ControlTimer extends EventCommandLike<124, [
    operation: ValueOf<Operation_PlusMinus>,
    time: number
]> {
}
export interface Command_ChangeGold extends EventCommandLike<125, [
    operation: ValueOf<Operation_PlusMinus>,
    operationType: number,
    value: number
]> {
}
export interface Command_ChangeItems extends EventCommandLike<126, [
    operation: ValueOf<Operation_PlusMinus>,
    itemId: number,
    value: number
]> {
}
export interface Command_ChangeWeapons extends EventCommandLike<127, [
    operation: ValueOf<Operation_PlusMinus>,
    weaponId: number,
    value: number
]> {
}
export interface Command_ChangeArmors extends EventCommandLike<128, [
    operation: ValueOf<Operation_PlusMinus>,
    armorId: number,
    value: number
]> {
}
export interface Command_ChangePartyMember extends EventCommandLike<129, [
    operation: ValueOf<Operation_PlusMinus>,
    actorId: number
]> {
}
export interface Command_ChangeBattleBGM extends EventCommandLike<132, [value: AudioFileParams]> {
}
export interface Command_ChangeVictoryME extends EventCommandLike<133, [value: AudioFileParams]> {
}
export interface Command_ChangeSaveAccess extends EventCommandLike<134, [value: ValueOf<Toggle>]> {
}
export interface Command_ChangeMenuAccess extends EventCommandLike<135, []> {
}
export interface Command_ChangeEncounter extends EventCommandLike<136, [value: ValueOf<Toggle>]> {
}
export interface Command_ChangeFormationAccess extends EventCommandLike<137, [value: ValueOf<Toggle>]> {
}
export interface Command_ChangeWindowColor extends EventCommandLike<138, [color: ColorRGBA]> {
}
export interface Command_ChangeDefeatME extends EventCommandLike<139, [value: AudioFileParams]> {
}
export interface Command_ChangeVehicleME extends EventCommandLike<140, [value: AudioFileParams]> {
}
export interface Command_TransferPlayer extends EventCommandLike<201, [
    mapId: number,
    x: number,
    y: number,
    direction: Direction8
]> {
}
export interface Command_SetVehicleLocation extends EventCommandLike<202, [
    vehicleId: number,
    mapId: number,
    x: number,
    y: number
]> {
}
export interface Command_SetEventLocation extends EventCommandLike<203, [
    mapId: number,
    eventId: number,
    x: number,
    y: number,
    direction: Direction8
]> {
}
export interface Command_ScrollMap extends EventCommandLike<204, [
    direction: Direction8,
    distance: number,
    speed: number,
    waiting: boolean
]> {
}
export interface Command_SetMovementRoute extends EventCommandLike<205, [
    characterId: number,
    movement: MoveRouteData
]> {
}
export interface Command_GetOnOffVehicle extends EventCommandLike<206, []> {
}
export interface Command_ChangeTransparency extends EventCommandLike<211, [value: ValueOf<Toggle>]> {
}
export interface Command_ShowAnimation extends EventCommandLike<212, [
    characterId: number,
    animationId: number,
    waiting: ValueOf<Toggle>
]> {
}
export interface Command_ShowBalloonIcon extends EventCommandLike<213, [characterId: number, balloonId: number]> {
}
export interface Command_EraseEvent extends EventCommandLike<214, []> {
}
export interface Command_ChangePlayerFollowers extends EventCommandLike<216, [value: ValueOf<Toggle>]> {
}
export interface Command_GatherFollowers extends EventCommandLike<217, []> {
}
export interface Command_FadeOutScreen extends EventCommandLike<221, []> {
}
export interface Command_FadeInScreen extends EventCommandLike<222, []> {
}
export interface Command_TintScreen extends EventCommandLike<223, [
    color: ColorRGBA,
    duration: number,
    wait: boolean
]> {
}
export interface Command_FlashScreen extends EventCommandLike<224, [
    color: ColorRGBA,
    duration: number,
    wait: boolean
]> {
}
export interface Command_ShakeScreen extends EventCommandLike<225, [
    power: number,
    speed: number,
    duration: number,
    wait: boolean
]> {
}
export interface Command_Wait extends EventCommandLike<230, [duration: number]> {
}
export interface Command_ShowPicture extends EventCommandLike<231, [params: ShowPicture]> {
}
export interface Command_MovePicture extends EventCommandLike<232, [params: MovePicture]> {
}
export interface Command_RotatePicture extends EventCommandLike<233, [pictureId: number, speed: number]> {
}
export interface Command_TintPicture extends EventCommandLike<234, [unknown, unknown, unknown, wait: boolean]> {
}
export interface Command_ErasePicture extends EventCommandLike<235, [pictureId: number]> {
}
export interface Command_SetWeatherEffect extends EventCommandLike<236, []> {
}
export interface Command_PlayBGM extends EventCommandLike<241, [value: AudioFileParams]> {
}
export interface Command_FadeOutBGM extends EventCommandLike<242, [duration: number]> {
}
export interface Command_SaveBGM extends EventCommandLike<243, []> {
}
export interface Command_RestoreBGM extends EventCommandLike<244, []> {
}
export interface Command_PlayBGS extends EventCommandLike<245, [value: AudioFileParams]> {
}
export interface Command_FadeOutBGS extends EventCommandLike<246, [duration: number]> {
}
export interface Command_PlayME extends EventCommandLike<249, [value: AudioFileParams]> {
}
export interface Command_PlaySE extends EventCommandLike<250, [value: AudioFileParams]> {
}
export interface Command_StopSE extends EventCommandLike<251, []> {
}
export interface Command_PlayMovie extends EventCommandLike<261, [filename: string]> {
}
export interface Command_ChangeTileset extends EventCommandLike<282, [tilesetId: number]> {
}
export interface Command_ChangeBattleBackground extends EventCommandLike<283, [background1: string, background2: string]> {
}
export interface Command_ChangeParallax extends EventCommandLike<284, [
    parallaxName: string,
    loopX: boolean,
    loopY: boolean,
    sx: number,
    sy: number
]> {
}
export interface Command_BattleProcessing extends EventCommandLike<301, [
    0 | 1 | 2,
    troopId: number,
    canEscape: boolean,
    canLose: boolean
]> {
}
export interface Command_ShopProcessingBody extends EventCommandLike<605, [goods: ShopGoods]> {
}
export interface Command_NameInputProcessing extends EventCommandLike<303, [actorId: number, maxLength: number]> {
}
export interface Command_ChangeName extends EventCommandLike<320, [actorId: number, name: string]> {
}
export interface Command_ChangeClaass extends EventCommandLike<321, [
    actorId: number,
    classId: number,
    keepExp: boolean
]> {
}
export interface Command_ChangeActorImages extends EventCommandLike<322, [
    actorId: number,
    characterImage: string,
    characterIndex: number,
    faceImage: string,
    faceIndex: number,
    battlerImage: string
]> {
}
export interface Command_ChangeVehicleImage extends EventCommandLike<323, [
    vehicleId: number,
    characterImage: string,
    characterIndex: number
]> {
}
export interface Command_ChangeNickName extends EventCommandLike<324, [actorId: number, nickname: string]> {
}
export interface Command_ChangeProfile extends EventCommandLike<325, [actorId: number, profile: string]> {
}
export interface Command_OpenSaveScreen extends EventCommandLike<352, []> {
}
export interface Command_GameOver extends EventCommandLike<353, []> {
}
export interface Command_ReturnToTitleScreen extends EventCommandLike<354, []> {
}
export interface Command_ScriptHeader extends EventCommandLike<355, [script: string]> {
}
export interface Command_ScriptBody extends EventCommandLike<655, [script: string]> {
}
export interface Command_PluginCommandMV extends EventCommandLike<356, [command: string, args: string]> {
}
export interface Command_PluginCommandMZ extends EventCommandLike<357, [
    pluginName: string,
    commandName: string,
    infoText: string,
    arg: Record<string, unknown>
]> {
}
