import { EventCommandLike2 } from './eventComandLike';
import { AudioFileParams, ColorRGBA, Direction8, MoveRouteData } from './types';
import { ControlVariables, MovePicture, ShopGoods, ShowPicture, ValueOf, Toggle, Operation_PlusMinus } from './paramaters';
export interface Command_ShowMessage extends EventCommandLike2<101, [
    facename: string,
    faceIndex: number,
    background: number,
    positionType: number,
    speakerName: string
]> {
}
export interface Command_ShowMessageBody extends EventCommandLike2<401, [content: string]> {
}
export interface Command_ShowChoices extends EventCommandLike2<102, [
    choices: string[],
    cancelType: number,
    defaultType: number,
    positionType: number,
    background: number
]> {
}
export interface Command_ChoiceWhen extends EventCommandLike2<402, [index: number, text: string]> {
}
export interface Command_InputNumber extends EventCommandLike2<103, [variableId: number, digits: number]> {
}
export interface Command_SelectItem extends EventCommandLike2<104, [variableId: number, itemType: number]> {
}
export interface Command_ShowScrollingText extends EventCommandLike2<105, [speed: number, skip: boolean]> {
}
export interface Command_ShowScrollingTextBody extends EventCommandLike2<405, [content: string]> {
}
export interface Command_Comment extends EventCommandLike2<108, [content: string]> {
}
export interface Command_CommentBody extends EventCommandLike2<408, [content: string]> {
}
export interface Command_Skip extends EventCommandLike2<109, []> {
}
export interface Command_ConditionalBranch extends EventCommandLike2<111, [variableId: number, value: number]> {
}
export interface Command_ConditionalBranchElse extends EventCommandLike2<411, []> {
}
export interface Command_Loop extends EventCommandLike2<112, []> {
}
export interface Command_LoopBreak extends EventCommandLike2<113, []> {
}
export interface Command_ExitEventProcessing extends EventCommandLike2<115, []> {
}
export interface Command_CommonEvent extends EventCommandLike2<117, [eventId: number]> {
}
export interface Command_Label extends EventCommandLike2<118, [label: string]> {
}
export interface Command_LabelJump extends EventCommandLike2<119, [label: string]> {
}
export interface Command_ControlSwitches extends EventCommandLike2<121, [
    min: number,
    max: number,
    value: ValueOf<Toggle>
]> {
}
export interface Command_ControlVariables extends EventCommandLike2<122, ControlVariables> {
}
export interface Command_ControlSelfSwitch extends EventCommandLike2<123, [switchId: string, value: ValueOf<Toggle>]> {
}
export interface Command_ControlTimer extends EventCommandLike2<124, [
    operation: ValueOf<Operation_PlusMinus>,
    time: number
]> {
}
export interface Command_ChangeGold extends EventCommandLike2<125, [
    operation: ValueOf<Operation_PlusMinus>,
    value: number
]> {
}
export interface Command_ChangeItems extends EventCommandLike2<126, [
    operation: ValueOf<Operation_PlusMinus>,
    itemId: number,
    value: number
]> {
}
export interface Command_ChangeWeapons extends EventCommandLike2<127, [
    operation: ValueOf<Operation_PlusMinus>,
    weaponId: number,
    value: number
]> {
}
export interface Command_ChangeArmors extends EventCommandLike2<128, [
    operation: ValueOf<Operation_PlusMinus>,
    armorId: number,
    value: number
]> {
}
export interface Command_ChangePartyMember extends EventCommandLike2<129, [
    operation: ValueOf<Operation_PlusMinus>,
    actorId: number
]> {
}
export interface Command_ChangeBattleBGM extends EventCommandLike2<132, [value: AudioFileParams]> {
}
export interface Command_ChangeVictoryME extends EventCommandLike2<133, [value: AudioFileParams]> {
}
export interface Command_ChangeSaveAccess extends EventCommandLike2<134, [value: ValueOf<Toggle>]> {
}
export interface Command_ChangeMenuAccess extends EventCommandLike2<135, []> {
}
export interface Command_ChangeEncounter extends EventCommandLike2<136, [value: ValueOf<Toggle>]> {
}
export interface Command_ChangeFormationAccess extends EventCommandLike2<137, [value: ValueOf<Toggle>]> {
}
export interface Command_ChangeWindowColor extends EventCommandLike2<138, [color: ColorRGBA]> {
}
export interface Command_ChangeDefeatME extends EventCommandLike2<139, [value: AudioFileParams]> {
}
export interface Command_ChangeVehicleME extends EventCommandLike2<140, [value: AudioFileParams]> {
}
export interface Command_TransferPlayer extends EventCommandLike2<201, [
    mapId: number,
    x: number,
    y: number,
    direction: Direction8
]> {
}
export interface Command_SetVehicleLocation extends EventCommandLike2<202, [
    vehicleId: number,
    mapId: number,
    x: number,
    y: number
]> {
}
export interface Command_SetEventLocation extends EventCommandLike2<203, [
    mapId: number,
    eventId: number,
    x: number,
    y: number,
    direction: Direction8
]> {
}
export interface Command_ScrollMap extends EventCommandLike2<204, [
    direction: Direction8,
    distance: number,
    speed: number,
    waiting: boolean
]> {
}
export interface Command_SetMovementRoute extends EventCommandLike2<205, [
    characterId: number,
    movement: MoveRouteData
]> {
}
export interface Command_GetOnOffVehicle extends EventCommandLike2<206, []> {
}
export interface Command_ChangeTransparency extends EventCommandLike2<211, [value: ValueOf<Toggle>]> {
}
export interface Command_ShowAnimation extends EventCommandLike2<212, [
    characterId: number,
    animationId: number,
    waiting: ValueOf<Toggle>
]> {
}
export interface Command_ShowBalloonIcon extends EventCommandLike2<213, [characterId: number, balloonId: number]> {
}
export interface Command_EraseEvent extends EventCommandLike2<214, []> {
}
export interface Command_ChangePlayerFollowers extends EventCommandLike2<216, [value: ValueOf<Toggle>]> {
}
export interface Command_GatherFollowers extends EventCommandLike2<217, []> {
}
export interface Command_FadeOutScreen extends EventCommandLike2<221, []> {
}
export interface Command_FadeInScreen extends EventCommandLike2<222, []> {
}
export interface Command_TintScreen extends EventCommandLike2<223, [
    color: ColorRGBA,
    duration: number,
    wait: boolean
]> {
}
export interface Command_FlashScreen extends EventCommandLike2<224, [
    color: ColorRGBA,
    duration: number,
    wait: boolean
]> {
}
export interface Command_ShakeScreen extends EventCommandLike2<225, [
    power: number,
    speed: number,
    duration: number,
    wait: boolean
]> {
}
export interface Command_Wait extends EventCommandLike2<230, [duration: number]> {
}
export interface Command_ShowPicture extends EventCommandLike2<231, [params: ShowPicture]> {
}
export interface Command_MovePicture extends EventCommandLike2<232, [params: MovePicture]> {
}
export interface Command_RotatePicture extends EventCommandLike2<233, [pictureId: number, speed: number]> {
}
export interface Command_TintPicture extends EventCommandLike2<234, [unknown, unknown, unknown, wait: boolean]> {
}
export interface Command_ErasePicture extends EventCommandLike2<235, [pictureId: number]> {
}
export interface Command_SetWeatherEffect extends EventCommandLike2<236, []> {
}
export interface Command_PlayBGM extends EventCommandLike2<241, [value: AudioFileParams]> {
}
export interface Command_FadeOutBGM extends EventCommandLike2<242, [duration: number]> {
}
export interface Command_SaveBGM extends EventCommandLike2<243, []> {
}
export interface Command_RestoreBGM extends EventCommandLike2<244, []> {
}
export interface Command_PlayBGS extends EventCommandLike2<245, [value: AudioFileParams]> {
}
export interface Command_FadeOutBGS extends EventCommandLike2<246, [duration: number]> {
}
export interface Command_PlayME extends EventCommandLike2<249, [value: AudioFileParams]> {
}
export interface Command_PlaySE extends EventCommandLike2<250, [value: AudioFileParams]> {
}
export interface Command_StopSE extends EventCommandLike2<251, []> {
}
export interface Command_PlayMovie extends EventCommandLike2<261, [filename: string]> {
}
export interface Command_ChangeTileset extends EventCommandLike2<282, [tilesetId: number]> {
}
export interface Command_ChangeBattleBackground extends EventCommandLike2<283, [background1: string, background2: string]> {
}
export interface Command_ChangeParallax extends EventCommandLike2<284, [
    parallaxName: string,
    loopX: boolean,
    loopY: boolean,
    sx: number,
    sy: number
]> {
}
export interface Command_BattleProcessing extends EventCommandLike2<301, [
    0 | 1 | 2,
    troopId: number,
    canEscape: boolean,
    canLose: boolean
]> {
}
export interface Command_ShopProcessingBody extends EventCommandLike2<605, [goods: ShopGoods]> {
}
export interface Command_NameInputProcessing extends EventCommandLike2<303, [actorId: number, maxLength: number]> {
}
export interface Command_ChangeName extends EventCommandLike2<320, [actorId: number, name: string]> {
}
export interface Command_ChangeClaass extends EventCommandLike2<321, [
    actorId: number,
    classId: number,
    keepExp: boolean
]> {
}
export interface Command_ChangeActorImages extends EventCommandLike2<322, [
    actorId: number,
    characterImage: string,
    characterIndex: number,
    faceImage: string,
    faceIndex: number,
    battlerImage: string
]> {
}
export interface Command_ChangeVehicleImage extends EventCommandLike2<323, [
    vehicleId: number,
    characterImage: string,
    characterIndex: number
]> {
}
export interface Command_ChangeNickName extends EventCommandLike2<324, [actorId: number, nickname: string]> {
}
export interface Command_ChangeProfile extends EventCommandLike2<325, [actorId: number, profile: string]> {
}
export interface Command_OpenSaveScreen extends EventCommandLike2<352, []> {
}
export interface Command_GameOver extends EventCommandLike2<353, []> {
}
export interface Command_ReturnToTitleScreen extends EventCommandLike2<354, []> {
}
export interface Command_ScriptHeader extends EventCommandLike2<355, [script: string]> {
}
export interface Command_ScriptBody extends EventCommandLike2<655, [script: string]> {
}
export interface Command_PluginCommandMV extends EventCommandLike2<356, [command: string, args: string]> {
}
export interface Command_PluginCommandMZ extends EventCommandLike2<357, [
    pluginName: string,
    commandName: string,
    infoText: string,
    arg: Record<string, unknown>
]> {
}
