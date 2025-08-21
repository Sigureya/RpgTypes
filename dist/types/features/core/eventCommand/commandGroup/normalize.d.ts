import { EventCommand } from '../../../../rmmz';
export declare const normalizeCommandsForMV: (list: ReadonlyArray<EventCommand>) => ({
    parameters: [];
    code: 0;
    indent: number;
} | {
    parameters: [facename: string, faceIndex: number, background: number, positionType: number, speakerName: string];
    code: 101;
    indent: number;
} | {
    parameters: [content: string];
    code: 401;
    indent: number;
} | {
    parameters: [choices: string[], cancelType: number, defaultType: number, positionType: number, background: number];
    code: 102;
    indent: number;
} | {
    parameters: [index: number, name: string];
    code: 402;
    indent: number;
} | {
    parameters: [variableId: number, maxDigits: number];
    code: 103;
    indent: number;
} | {
    parameters: [variableId: number, itemType: number];
    code: 104;
    indent: number;
} | {
    parameters: [speed: number, skip: boolean];
    code: 105;
    indent: number;
} | {
    parameters: [content: string];
    code: 405;
    indent: number;
} | {
    parameters: [content: string];
    code: 108;
    indent: number;
} | {
    parameters: [content: string];
    code: 408;
    indent: number;
} | {
    parameters: [];
    code: 109;
    indent: number;
} | {
    parameters: import('../../../../rmmz').BranchParameters;
    code: 111;
    indent: number;
} | {
    parameters: [];
    code: 411;
    indent: number;
} | {
    parameters: [];
    code: 112;
    indent: number;
} | {
    parameters: [];
    code: 113;
    indent: number;
} | {
    parameters: [];
    code: 115;
    indent: number;
} | {
    parameters: [id: number];
    code: 117;
    indent: number;
} | {
    parameters: [name: string];
    code: 118;
    indent: number;
} | {
    parameters: [name: string];
    code: 119;
    indent: number;
} | {
    parameters: [min: number, max: number, value: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 121;
    indent: number;
} | {
    parameters: import('../../../../rmmz').ParamArray_ControlVariables;
    code: 122;
    indent: number;
} | {
    parameters: [key: string, value: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 123;
    indent: number;
} | {
    parameters: [operation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, time: number];
    code: 124;
    indent: number;
} | {
    parameters: [operation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, operationType: number, value: number];
    code: 125;
    indent: number;
} | {
    parameters: [id: number, operation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, operationType: number, value: number];
    code: 126;
    indent: number;
} | {
    parameters: [id: number, operation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, operationType: number, value: number, isEquip: boolean];
    code: 127;
    indent: number;
} | {
    parameters: [id: number, operation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, operationType: number, value: number, isEquip: boolean];
    code: 128;
    indent: number;
} | {
    parameters: [id: number, operation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, isInit: boolean];
    code: 129;
    indent: number;
} | {
    parameters: [value: import('../../../..').AudioFileParams];
    code: 132;
    indent: number;
} | {
    parameters: [value: import('../../../..').AudioFileParams];
    code: 140;
    indent: number;
} | {
    parameters: [value: import('../../../..').AudioFileParams];
    code: 133;
    indent: number;
} | {
    parameters: [tileSetId: number];
    code: 282;
    indent: number;
} | {
    parameters: [battleBack1Name: string, battleBack2name: string];
    code: 283;
    indent: number;
} | {
    parameters: [0 | 1 | 2, troopId: number, canEscape: boolean, canLose: boolean];
    code: 301;
    indent: number;
} | {
    parameters: [value: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 134;
    indent: number;
} | {
    parameters: [value: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 135;
    indent: number;
} | {
    parameters: [value: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 136;
    indent: number;
} | {
    parameters: [value: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 137;
    indent: number;
} | {
    parameters: [color: import('../../../..').ColorRGBA];
    code: 138;
    indent: number;
} | {
    parameters: [me: import('../../../..').AudioFileParams];
    code: 139;
    indent: number;
} | {
    parameters: [type: string, power: number, duration: number, needsWait: boolean];
    code: 236;
    indent: number;
} | {
    parameters: [value: import('../../../..').AudioFileParams];
    code: 241;
    indent: number;
} | {
    parameters: [duration: number];
    code: 242;
    indent: number;
} | {
    parameters: [value: import('../../../..').AudioFileParams];
    code: 245;
    indent: number;
} | {
    parameters: [duration: number];
    code: 246;
    indent: number;
} | {
    parameters: [value: import('../../../..').AudioFileParams];
    code: 250;
    indent: number;
} | {
    parameters: [];
    code: 251;
    indent: number;
} | {
    parameters: [value: import('../../../..').AudioFileParams];
    code: 249;
    indent: number;
} | {
    parameters: [filename: string];
    code: 261;
    indent: number;
} | {
    parameters: [];
    code: 243;
    indent: number;
} | {
    parameters: [];
    code: 244;
    indent: number;
} | {
    parameters: import('../../../../rmmz').ShopProcessing;
    code: 302;
    indent: number;
} | {
    parameters: import('../../../../rmmz').ShopGoods;
    code: 605;
    indent: number;
} | {
    parameters: [actorId: number, name: string];
    code: 303;
    indent: number;
} | {
    parameters: [targetSelect: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, index: number, oparation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, oprandType: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, VariableIdOrValue: number, allowDetah: boolean];
    code: 311;
    indent: number;
} | {
    parameters: [targetSelect: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, index: number, oparation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, oprandType: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, VariableIdOrValue: number];
    code: 312;
    indent: number;
} | {
    parameters: [targetSelect: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, index: number, oparation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, oprandType: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, VariableIdOrValue: number];
    code: 313;
    indent: number;
} | {
    parameters: [];
    code: 314;
    indent: number;
} | {
    parameters: import('../../../../rmmz').Param_ChangeEnemyParameters;
    code: 333;
    indent: number;
} | {
    parameters: import('../../../../rmmz').Param_EnemyIterate;
    code: 335;
    indent: number;
} | {
    parameters: import('../../../../rmmz').Param_EnemyIterate;
    code: 334;
    indent: number;
} | {
    parameters: [enemyId: number, newEnemyId: number];
    code: 336;
    indent: number;
} | {
    parameters: [characterId: number, animationId: number];
    code: 337;
    indent: number;
} | {
    parameters: [characterId: number, action: string];
    code: 339;
    indent: number;
} | {
    parameters: [];
    code: 340;
    indent: number;
} | {
    parameters: [];
    code: 351;
    indent: number;
} | {
    parameters: [actorId: number, name: string];
    code: 320;
    indent: number;
} | {
    parameters: [actorId: number, classId: number, keepExp: boolean];
    code: 321;
    indent: number;
} | {
    parameters: [];
    code: 315;
    indent: number;
} | {
    parameters: [name: string, loopX: boolean, loopY: boolean, sx: number, sy: number];
    code: 284;
    indent: number;
} | {
    parameters: [actorId: number, characterImage: string, characterIndex: number, faceImage: string, faceIndex: number, battlerImage: string];
    code: 322;
    indent: number;
} | {
    parameters: [actorId: number, characterImage: string, characterIndex: number];
    code: 323;
    indent: number;
} | {
    parameters: [designation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, mapId: number, x: number, y: number, direction: import('../../../../rmmz').Direction8, fadeType: number];
    code: 201;
    indent: number;
} | {
    parameters: [vehicleId: number, designation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, mapId: number, x: number, y: number];
    code: 202;
    indent: number;
} | {
    parameters: [mapId: number, eventId: number, x: number, y: number, direction: import('../../../../rmmz').Direction8];
    code: 203;
    indent: number;
} | {
    parameters: [];
    code: 204;
    indent: number;
} | {
    parameters: [characterId: number, movement: import('../../../../rmmz').MoveRouteData];
    code: 205;
    indent: number;
} | {
    parameters: [];
    code: 206;
    indent: number;
} | {
    parameters: [value: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 211;
    indent: number;
} | {
    parameters: [characterId: number, animationId: number, waiting: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 212;
    indent: number;
} | {
    parameters: import('../../../../rmmz').Param_ChangeEnemyParameters;
    code: 331;
    indent: number;
} | {
    parameters: [];
    code: 213;
    indent: number;
} | {
    parameters: [];
    code: 214;
    indent: number;
} | {
    parameters: [];
    code: 216;
    indent: number;
} | {
    parameters: [];
    code: 217;
    indent: number;
} | {
    parameters: [];
    code: 221;
    indent: number;
} | {
    parameters: [];
    code: 222;
    indent: number;
} | {
    parameters: [color: import('../../../..').ColorRGBA, duration: number, wait: boolean];
    code: 223;
    indent: number;
} | {
    parameters: [olor: import('../../../..').ColorRGBA, duration: number, wait: boolean];
    code: 224;
    indent: number;
} | {
    parameters: [power: number, speed: number, duration: number, wait: boolean];
    code: 225;
    indent: number;
} | {
    parameters: [duration: number];
    code: 230;
    indent: number;
} | {
    parameters: import('../../../../rmmz').ShowPicture;
    code: 231;
    indent: number;
} | {
    parameters: import('../../../../rmmz').MovePicture;
    code: 232;
    indent: number;
} | {
    parameters: [pictureId: number, color: import('../../../..').ColorRGBA, duration: number, wait: boolean];
    code: 234;
    indent: number;
} | {
    parameters: [pictureId: number, speed: number];
    code: 233;
    indent: number;
} | {
    parameters: [pictureId: number];
    code: 235;
    indent: number;
} | {
    parameters: import('../../../../rmmz').Param_ChangeEnemyParameters;
    code: 332;
    indent: number;
} | {
    parameters: import('../../../../rmmz').Param_ChangeEnemyParameters;
    code: 342;
    indent: number;
} | {
    parameters: [actorId: number, name: string];
    code: 324;
    indent: number;
} | {
    parameters: [variableId: number, mode: number, designation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, x: number, y: number];
    code: 285;
    indent: number;
} | {
    parameters: [actorId: number, name: string];
    code: 325;
    indent: number;
} | {
    parameters: [];
    code: 352;
    indent: number;
} | {
    parameters: [];
    code: 353;
    indent: number;
} | {
    parameters: [];
    code: 354;
    indent: number;
} | {
    parameters: [script: string];
    code: 355;
    indent: number;
} | {
    parameters: [script: string];
    code: 655;
    indent: number;
} | {
    parameters: [data: string];
    code: 356;
    indent: number;
} | {
    parameters: [filename: string, commandName: string, anything: string, args: Record<string, string>];
    code: 357;
    indent: number;
})[];
export declare const normalizeCommands: (list: ReadonlyArray<EventCommand>) => ({
    parameters: [];
    code: 0;
    indent: number;
} | {
    parameters: [facename: string, faceIndex: number, background: number, positionType: number, speakerName: string];
    code: 101;
    indent: number;
} | {
    parameters: [content: string];
    code: 401;
    indent: number;
} | {
    parameters: [choices: string[], cancelType: number, defaultType: number, positionType: number, background: number];
    code: 102;
    indent: number;
} | {
    parameters: [index: number, name: string];
    code: 402;
    indent: number;
} | {
    parameters: [variableId: number, maxDigits: number];
    code: 103;
    indent: number;
} | {
    parameters: [variableId: number, itemType: number];
    code: 104;
    indent: number;
} | {
    parameters: [speed: number, skip: boolean];
    code: 105;
    indent: number;
} | {
    parameters: [content: string];
    code: 405;
    indent: number;
} | {
    parameters: [content: string];
    code: 108;
    indent: number;
} | {
    parameters: [content: string];
    code: 408;
    indent: number;
} | {
    parameters: [];
    code: 109;
    indent: number;
} | {
    parameters: import('../../../../rmmz').BranchParameters;
    code: 111;
    indent: number;
} | {
    parameters: [];
    code: 411;
    indent: number;
} | {
    parameters: [];
    code: 112;
    indent: number;
} | {
    parameters: [];
    code: 113;
    indent: number;
} | {
    parameters: [];
    code: 115;
    indent: number;
} | {
    parameters: [id: number];
    code: 117;
    indent: number;
} | {
    parameters: [name: string];
    code: 118;
    indent: number;
} | {
    parameters: [name: string];
    code: 119;
    indent: number;
} | {
    parameters: [min: number, max: number, value: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 121;
    indent: number;
} | {
    parameters: import('../../../../rmmz').ParamArray_ControlVariables;
    code: 122;
    indent: number;
} | {
    parameters: [key: string, value: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 123;
    indent: number;
} | {
    parameters: [operation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, time: number];
    code: 124;
    indent: number;
} | {
    parameters: [operation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, operationType: number, value: number];
    code: 125;
    indent: number;
} | {
    parameters: [id: number, operation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, operationType: number, value: number];
    code: 126;
    indent: number;
} | {
    parameters: [id: number, operation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, operationType: number, value: number, isEquip: boolean];
    code: 127;
    indent: number;
} | {
    parameters: [id: number, operation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, operationType: number, value: number, isEquip: boolean];
    code: 128;
    indent: number;
} | {
    parameters: [id: number, operation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, isInit: boolean];
    code: 129;
    indent: number;
} | {
    parameters: [value: import('../../../..').AudioFileParams];
    code: 132;
    indent: number;
} | {
    parameters: [value: import('../../../..').AudioFileParams];
    code: 140;
    indent: number;
} | {
    parameters: [value: import('../../../..').AudioFileParams];
    code: 133;
    indent: number;
} | {
    parameters: [tileSetId: number];
    code: 282;
    indent: number;
} | {
    parameters: [battleBack1Name: string, battleBack2name: string];
    code: 283;
    indent: number;
} | {
    parameters: [0 | 1 | 2, troopId: number, canEscape: boolean, canLose: boolean];
    code: 301;
    indent: number;
} | {
    parameters: [value: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 134;
    indent: number;
} | {
    parameters: [value: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 135;
    indent: number;
} | {
    parameters: [value: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 136;
    indent: number;
} | {
    parameters: [value: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 137;
    indent: number;
} | {
    parameters: [color: import('../../../..').ColorRGBA];
    code: 138;
    indent: number;
} | {
    parameters: [me: import('../../../..').AudioFileParams];
    code: 139;
    indent: number;
} | {
    parameters: [type: string, power: number, duration: number, needsWait: boolean];
    code: 236;
    indent: number;
} | {
    parameters: [value: import('../../../..').AudioFileParams];
    code: 241;
    indent: number;
} | {
    parameters: [duration: number];
    code: 242;
    indent: number;
} | {
    parameters: [value: import('../../../..').AudioFileParams];
    code: 245;
    indent: number;
} | {
    parameters: [duration: number];
    code: 246;
    indent: number;
} | {
    parameters: [value: import('../../../..').AudioFileParams];
    code: 250;
    indent: number;
} | {
    parameters: [];
    code: 251;
    indent: number;
} | {
    parameters: [value: import('../../../..').AudioFileParams];
    code: 249;
    indent: number;
} | {
    parameters: [filename: string];
    code: 261;
    indent: number;
} | {
    parameters: [];
    code: 243;
    indent: number;
} | {
    parameters: [];
    code: 244;
    indent: number;
} | {
    parameters: import('../../../../rmmz').ShopProcessing;
    code: 302;
    indent: number;
} | {
    parameters: import('../../../../rmmz').ShopGoods;
    code: 605;
    indent: number;
} | {
    parameters: [actorId: number, name: string];
    code: 303;
    indent: number;
} | {
    parameters: [targetSelect: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, index: number, oparation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, oprandType: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, VariableIdOrValue: number, allowDetah: boolean];
    code: 311;
    indent: number;
} | {
    parameters: [targetSelect: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, index: number, oparation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, oprandType: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, VariableIdOrValue: number];
    code: 312;
    indent: number;
} | {
    parameters: [targetSelect: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, index: number, oparation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Operation_PlusMinus>, oprandType: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, VariableIdOrValue: number];
    code: 313;
    indent: number;
} | {
    parameters: [];
    code: 314;
    indent: number;
} | {
    parameters: import('../../../../rmmz').Param_ChangeEnemyParameters;
    code: 333;
    indent: number;
} | {
    parameters: import('../../../../rmmz').Param_EnemyIterate;
    code: 335;
    indent: number;
} | {
    parameters: import('../../../../rmmz').Param_EnemyIterate;
    code: 334;
    indent: number;
} | {
    parameters: [enemyId: number, newEnemyId: number];
    code: 336;
    indent: number;
} | {
    parameters: [characterId: number, animationId: number];
    code: 337;
    indent: number;
} | {
    parameters: [characterId: number, action: string];
    code: 339;
    indent: number;
} | {
    parameters: [];
    code: 340;
    indent: number;
} | {
    parameters: [];
    code: 351;
    indent: number;
} | {
    parameters: [actorId: number, name: string];
    code: 320;
    indent: number;
} | {
    parameters: [actorId: number, classId: number, keepExp: boolean];
    code: 321;
    indent: number;
} | {
    parameters: [];
    code: 315;
    indent: number;
} | {
    parameters: [name: string, loopX: boolean, loopY: boolean, sx: number, sy: number];
    code: 284;
    indent: number;
} | {
    parameters: [actorId: number, characterImage: string, characterIndex: number, faceImage: string, faceIndex: number, battlerImage: string];
    code: 322;
    indent: number;
} | {
    parameters: [actorId: number, characterImage: string, characterIndex: number];
    code: 323;
    indent: number;
} | {
    parameters: [designation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, mapId: number, x: number, y: number, direction: import('../../../../rmmz').Direction8, fadeType: number];
    code: 201;
    indent: number;
} | {
    parameters: [vehicleId: number, designation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, mapId: number, x: number, y: number];
    code: 202;
    indent: number;
} | {
    parameters: [mapId: number, eventId: number, x: number, y: number, direction: import('../../../../rmmz').Direction8];
    code: 203;
    indent: number;
} | {
    parameters: [];
    code: 204;
    indent: number;
} | {
    parameters: [characterId: number, movement: import('../../../../rmmz').MoveRouteData];
    code: 205;
    indent: number;
} | {
    parameters: [];
    code: 206;
    indent: number;
} | {
    parameters: [value: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 211;
    indent: number;
} | {
    parameters: [characterId: number, animationId: number, waiting: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Toggle>];
    code: 212;
    indent: number;
} | {
    parameters: import('../../../../rmmz').Param_ChangeEnemyParameters;
    code: 331;
    indent: number;
} | {
    parameters: [];
    code: 213;
    indent: number;
} | {
    parameters: [];
    code: 214;
    indent: number;
} | {
    parameters: [];
    code: 216;
    indent: number;
} | {
    parameters: [];
    code: 217;
    indent: number;
} | {
    parameters: [];
    code: 221;
    indent: number;
} | {
    parameters: [];
    code: 222;
    indent: number;
} | {
    parameters: [color: import('../../../..').ColorRGBA, duration: number, wait: boolean];
    code: 223;
    indent: number;
} | {
    parameters: [olor: import('../../../..').ColorRGBA, duration: number, wait: boolean];
    code: 224;
    indent: number;
} | {
    parameters: [power: number, speed: number, duration: number, wait: boolean];
    code: 225;
    indent: number;
} | {
    parameters: [duration: number];
    code: 230;
    indent: number;
} | {
    parameters: import('../../../../rmmz').ShowPicture;
    code: 231;
    indent: number;
} | {
    parameters: import('../../../../rmmz').MovePicture;
    code: 232;
    indent: number;
} | {
    parameters: [pictureId: number, color: import('../../../..').ColorRGBA, duration: number, wait: boolean];
    code: 234;
    indent: number;
} | {
    parameters: [pictureId: number, speed: number];
    code: 233;
    indent: number;
} | {
    parameters: [pictureId: number];
    code: 235;
    indent: number;
} | {
    parameters: import('../../../../rmmz').Param_ChangeEnemyParameters;
    code: 332;
    indent: number;
} | {
    parameters: import('../../../../rmmz').Param_ChangeEnemyParameters;
    code: 342;
    indent: number;
} | {
    parameters: [actorId: number, name: string];
    code: 324;
    indent: number;
} | {
    parameters: [variableId: number, mode: number, designation: import('../../../../libs/templates/valueOf').ValueOf<import('../../../../rmmz').Designation>, x: number, y: number];
    code: 285;
    indent: number;
} | {
    parameters: [actorId: number, name: string];
    code: 325;
    indent: number;
} | {
    parameters: [];
    code: 352;
    indent: number;
} | {
    parameters: [];
    code: 353;
    indent: number;
} | {
    parameters: [];
    code: 354;
    indent: number;
} | {
    parameters: [script: string];
    code: 355;
    indent: number;
} | {
    parameters: [script: string];
    code: 655;
    indent: number;
} | {
    parameters: [data: string];
    code: 356;
    indent: number;
} | {
    parameters: [filename: string, commandName: string, anything: string, args: Record<string, string>];
    code: 357;
    indent: number;
})[];
