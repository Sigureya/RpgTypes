import { ValueOf } from 'src/libs/templates/valueOf';
import { ColorRGBA } from 'src/libs/utils/types';
import { BranchParameters } from './branchParams';
import { EventCommandLike } from './eventComandLike';
import { MovePicture, ShopGoods, ShowPicture, Toggle, Operation_PlusMinus, Designation } from './paramaters';
import { Param_ChangeEnemyParameters } from './paramaters/changeBattler';
import { Direction8, MoveRouteData } from './types';
/**
 * @deprecated
 * Use `Command_ShowMessageHeader` instead.
 */
export interface Command_ShowMessage extends EventCommandLike<101> {
    parameters: [
        facename: string,
        faceIndex: number,
        background: number,
        positionType: number,
        speakerName: string
    ];
}
export interface Command_SelectItem extends EventCommandLike<104> {
    parameters: [variableId: number, itemType: number];
}
export interface Command_ConditionalBranch extends EventCommandLike<111, BranchParameters> {
}
export interface Command_Label extends EventCommandLike<118> {
    parameters: [label: string];
}
export interface Command_LabelJump extends EventCommandLike<119> {
    parameters: [label: string];
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
export interface Command_ChangePlayerFollowers extends EventCommandLike<216> {
    parameters: [value: ValueOf<Toggle>];
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
export interface Command_FadeOutBGM extends EventCommandLike<242> {
    parameters: [duration: number];
}
export interface Command_FadeOutBGS extends EventCommandLike<246, [duration: number]> {
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
export interface Command_ChangeEnemyHP extends EventCommandLike<331> {
    parameters: Param_ChangeEnemyParameters;
}
export interface Command_ChangeEnemyMP extends EventCommandLike<332> {
    parameters: Param_ChangeEnemyParameters;
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
