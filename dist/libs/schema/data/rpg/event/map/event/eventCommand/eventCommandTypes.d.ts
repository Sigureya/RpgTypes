import { EventCommandLike } from './eventComandLike';
import { Direction8, MoveRouteData } from './types';
import { ControlVariables, MovePicture, ShopGoods, ShowPicture, ValueOf, Toggle, Operation_PlusMinus, Designation } from './paramaters';
import { BranchParameters } from './branchParams';
import { Param_ChangeEnemyParameters } from './paramaters/changeBattler';
import { AudioFileParams, ColorRGBA } from '../../../../../../../utils';
export interface Command_ShowMessage extends EventCommandLike<101> {
    parameters: [
        facename: string,
        faceIndex: number,
        background: number,
        positionType: number,
        speakerName: string
    ];
}
export interface Command_ShowMessageBody extends EventCommandLike<401> {
    parameters: [content: string];
}
export interface Command_ShowChoices extends EventCommandLike<102> {
    parameters: [
        choices: string[],
        cancelType: number,
        defaultType: number,
        positionType: number,
        background: number
    ];
}
export interface Command_ChoiceWhen extends EventCommandLike<402> {
    parameters: [index: number, text: string];
}
export interface Command_InputNumber extends EventCommandLike<103> {
    parameters: [variableId: number, digits: number];
}
export interface Command_SelectItem extends EventCommandLike<104> {
    parameters: [variableId: number, itemType: number];
}
export interface Command_ShowScrollingText extends EventCommandLike<105> {
    parameters: [speed: number, skip: boolean];
}
export interface Command_ShowScrollingTextBody extends EventCommandLike<405> {
    parameters: [content: string];
}
export interface Command_Comment extends EventCommandLike<108, [content: string]> {
    parameters: [content: string];
}
export interface Command_CommentBody extends EventCommandLike<408> {
    parameters: [content: string];
}
export interface Command_Skip extends EventCommandLike<109> {
    parameters: [];
}
export interface Command_ConditionalBranch extends EventCommandLike<111, BranchParameters> {
}
export interface Command_ConditionalBranchElse extends EventCommandLike<411> {
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
export interface Command_CommonEvent extends EventCommandLike<117> {
    parameters: [eventId: number];
}
export interface Command_Label extends EventCommandLike<118> {
    parameters: [label: string];
}
export interface Command_LabelJump extends EventCommandLike<119> {
    parameters: [label: string];
}
export interface Command_ControlSwitches extends EventCommandLike<121> {
    parameters: [min: number, max: number, value: ValueOf<Toggle>];
}
export interface Command_ControlVariables<Param extends ControlVariables = ControlVariables> extends EventCommandLike<122, Param> {
    parameters: Param;
}
export interface Command_ControlSelfSwitch extends EventCommandLike<123> {
    parameters: [switchId: string, value: ValueOf<Toggle>];
}
export interface Command_ControlTimer extends EventCommandLike<124> {
    parameters: [operation: ValueOf<Operation_PlusMinus>, time: number];
}
export interface Command_ChangeGold extends EventCommandLike<125> {
    parameters: [
        operation: ValueOf<Operation_PlusMinus>,
        operationType: number,
        value: number
    ];
}
export interface Command_ChangeItems extends EventCommandLike<126> {
    parameters: [
        operation: ValueOf<Operation_PlusMinus>,
        itemId: number,
        value: number
    ];
}
export interface Command_ChangeWeapons extends EventCommandLike<127> {
    parameters: [
        operation: ValueOf<Operation_PlusMinus>,
        weaponId: number,
        value: number
    ];
}
export interface Command_ChangeArmors extends EventCommandLike<128> {
    parameters: [
        operation: ValueOf<Operation_PlusMinus>,
        armorId: number,
        value: number
    ];
}
export interface Command_ChangePartyMember extends EventCommandLike<129> {
    parameters: [operation: ValueOf<Operation_PlusMinus>, actorId: number];
}
export interface Command_ChangeBattleBGM extends EventCommandLike<132> {
    parameters: [value: AudioFileParams];
}
export interface Command_ChangeVictoryME extends EventCommandLike<133> {
    parameters: [value: AudioFileParams];
}
export interface Command_ChangeSaveAccess extends EventCommandLike<134> {
    parameters: [value: ValueOf<Toggle>];
}
export interface Command_ChangeMenuAccess extends EventCommandLike<135> {
    parameters: [value: ValueOf<Toggle>];
}
export interface Command_ChangeEncounter extends EventCommandLike<136> {
    parameters: [value: ValueOf<Toggle>];
}
export interface Command_ChangeFormationAccess extends EventCommandLike<137> {
    parameters: [value: ValueOf<Toggle>];
}
export interface Command_ChangeWindowColor extends EventCommandLike<138> {
    parameters: [color: ColorRGBA];
}
export interface Command_ChangeDefeatME extends EventCommandLike<139> {
    parameters: [value: AudioFileParams];
}
export interface Command_ChangeVehicleBGM extends EventCommandLike<140> {
    parameters: [value: AudioFileParams];
}
export interface Command_TransferPlayer extends EventCommandLike<201> {
    parameters: [
        designation: ValueOf<Designation>,
        mapId: number,
        x: number,
        y: number,
        direction: Direction8,
        fadeType: number
    ];
}
export interface Command_SetVehicleLocation extends EventCommandLike<202> {
    parameters: [
        vehicleId: number,
        designation: ValueOf<Designation>,
        mapId: number,
        x: number,
        y: number
    ];
}
export interface Command_SetEventLocation extends EventCommandLike<203> {
    parameters: [
        mapId: number,
        eventId: number,
        x: number,
        y: number,
        direction: Direction8
    ];
}
export interface Command_ScrollMap extends EventCommandLike<204> {
    parameters: [
        direction: Direction8,
        distance: number,
        speed: number,
        waiting: boolean
    ];
}
export interface Command_SetMovementRoute extends EventCommandLike<205> {
    parameters: [characterId: number, movement: MoveRouteData];
}
export interface Command_GetOnOffVehicle extends EventCommandLike<206, []> {
}
export interface Command_ChangeTransparency extends EventCommandLike<211> {
    parameters: [value: ValueOf<Toggle>];
}
export interface Command_ShowAnimation extends EventCommandLike<212> {
    parameters: [
        characterId: number,
        animationId: number,
        waiting: ValueOf<Toggle>
    ];
}
export interface Command_ShowBalloonIcon extends EventCommandLike<213> {
    parameters: [characterId: number, balloonId: number];
}
export interface Command_EraseEvent extends EventCommandLike<214, []> {
}
export interface Command_ChangePlayerFollowers extends EventCommandLike<216> {
    parameters: [value: ValueOf<Toggle>];
}
export interface Command_GatherFollowers extends EventCommandLike<217, []> {
}
export interface Command_FadeOutScreen extends EventCommandLike<221, []> {
}
export interface Command_FadeInScreen extends EventCommandLike<222, []> {
}
export interface Command_TintScreen extends EventCommandLike<223> {
    parameters: [color: ColorRGBA, duration: number, wait: boolean];
}
export interface Command_FlashScreen extends EventCommandLike<224> {
    parameters: [color: ColorRGBA, duration: number, wait: boolean];
}
export interface Command_ShakeScreen extends EventCommandLike<225> {
    parameters: [power: number, speed: number, duration: number, wait: boolean];
}
export interface Command_Wait extends EventCommandLike<230> {
    parameters: [duration: number];
}
export interface Command_ShowPicture extends EventCommandLike<231, ShowPicture> {
}
export interface Command_MovePicture extends EventCommandLike<232, MovePicture> {
}
export interface Command_RotatePicture extends EventCommandLike<233> {
    parameters: [pictureId: number, speed: number];
}
export interface Command_TintPicture extends EventCommandLike<234> {
    parameters: [
        pictureId: number,
        color: ColorRGBA,
        duration: number,
        wait: boolean
    ];
}
export interface Command_ErasePicture extends EventCommandLike<235> {
    parameters: [pictureId: number];
}
export interface Command_SetWeatherEffect extends EventCommandLike<236> {
    parameters: [
        type: string,
        power: number,
        duration: number,
        needsWait: boolean
    ];
}
export interface Command_PlayBGM extends EventCommandLike<241> {
    parameters: [value: AudioFileParams];
}
export interface Command_FadeOutBGM extends EventCommandLike<242> {
    parameters: [duration: number];
}
export interface Command_SaveBGM extends EventCommandLike<243, []> {
}
export interface Command_ResumeBGM extends EventCommandLike<244, []> {
}
export interface Command_PlayBGS extends EventCommandLike<245> {
    parameters: [value: AudioFileParams];
}
export interface Command_FadeOutBGS extends EventCommandLike<246, [duration: number]> {
}
export interface Command_PlayME extends EventCommandLike<249> {
    parameters: [value: AudioFileParams];
}
export interface Command_PlaySE extends EventCommandLike<250> {
    parameters: [value: AudioFileParams];
}
export interface Command_StopSE extends EventCommandLike<251, []> {
}
export interface Command_PlayMovie extends EventCommandLike<261> {
    parameters: [filename: string];
}
export interface Command_ChangeTileset extends EventCommandLike<282> {
    parameters: [tilesetId: number];
}
export interface Command_ChangeBattleBackground extends EventCommandLike<283> {
    parameters: [background1: string, background2: string];
}
export interface Command_ChangeParallax extends EventCommandLike<284> {
    parameters: [
        parallaxName: string,
        loopX: boolean,
        loopY: boolean,
        sx: number,
        sy: number
    ];
}
export interface Command_GetLocationInfo extends EventCommandLike<285> {
    parameters: [
        variableId: number,
        mode: number,
        designation: ValueOf<Designation>,
        x: number,
        y: number
    ];
}
export interface Command_BattleProcessing extends EventCommandLike<301> {
    parameters: [
        designation: ValueOf<Designation> | 2,
        troopId: number,
        canEscape: boolean,
        canLose: boolean
    ];
}
export interface Command_ShopProcessingBody extends EventCommandLike<605> {
    parameters: [goods: ShopGoods];
}
export interface Command_NameInputProcessing extends EventCommandLike<303> {
    parameters: [actorId: number, maxLength: number];
}
export interface Command_ChangeName extends EventCommandLike<320> {
    parameters: [actorId: number, name: string];
}
export interface Command_ChangeClaass extends EventCommandLike<321> {
    parameters: [actorId: number, classId: number, keepExp: boolean];
}
export interface Command_ChangeActorImages extends EventCommandLike<322> {
    parameters: [
        actorId: number,
        characterImage: string,
        characterIndex: number,
        faceImage: string,
        faceIndex: number,
        battlerImage: string
    ];
}
export interface Command_ChangeVehicleImage extends EventCommandLike<323> {
    parameters: [
        vehicleId: number,
        characterImage: string,
        characterIndex: number
    ];
}
export interface Command_ChangeNickName extends EventCommandLike<324> {
    parameters: [actorId: number, nickname: string];
}
export interface Command_ChangeProfile extends EventCommandLike<325> {
    parameters: [actorId: number, profile: string];
}
export interface Command_ChangeEnemyHP extends EventCommandLike<331> {
    parameters: Param_ChangeEnemyParameters;
}
export interface Command_ChangeEnemyMP extends EventCommandLike<332> {
    parameters: Param_ChangeEnemyParameters;
}
export interface Command_OpenSaveScreen extends EventCommandLike<352, []> {
}
export interface Command_GameOver extends EventCommandLike<353, []> {
}
export interface Command_ReturnToTitleScreen extends EventCommandLike<354, []> {
}
export interface Command_ScriptHeader extends EventCommandLike<355> {
    parameters: [script: string];
}
export interface Command_ScriptBody extends EventCommandLike<655> {
    parameters: [script: string];
}
export interface Command_PluginCommandMV extends EventCommandLike<356> {
    parameters: [command: string, args: string];
}
export interface Command_PluginCommandMZ extends EventCommandLike<357> {
    parameters: [
        pluginName: string,
        commandName: string,
        infoText: string,
        arg: Record<string, unknown>
    ];
}
