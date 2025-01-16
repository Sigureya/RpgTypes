import type { EventCommandTable } from "./data/";
export declare const createCommand: <T extends keyof EventCommandTable>(code: T, parameters: EventCommandTable[T]["parameters"], indent?: number) => {
    code: T;
    indent: number;
    parameters: {
        0: {
            indent: number;
            parameters: [];
            code: 0;
        };
        101: {
            indent: number;
            parameters: [facename: string, faceIndex: number, background: number, positionType: number, speakerName: string];
            code: 101;
        };
        401: {
            indent: number;
            parameters: [content: string];
            code: 401;
        };
        102: {
            indent: number;
            parameters: [choices: string[], cancelType: number, defaultType: number, positionType: number, background: number];
            code: 102;
        };
        402: {
            indent: number;
            parameters: [index: number, name: string];
            code: 402;
        };
        103: {
            indent: number;
            parameters: [variableId: number, maxDigits: number];
            code: 103;
        };
        104: {
            indent: number;
            parameters: [variableId: number, itemType: number];
            code: 104;
        };
        105: {
            indent: number;
            parameters: [speed: number, skip: boolean];
            code: 105;
        };
        405: {
            indent: number;
            parameters: [content: string];
            code: 405;
        };
        108: {
            indent: number;
            parameters: [content: string];
            code: 108;
        };
        408: {
            indent: number;
            parameters: [content: string];
            code: 408;
        };
        109: {
            indent: number;
            parameters: [];
            code: 109;
        };
        111: {
            indent: number;
            parameters: [];
            code: 111;
        };
        411: {
            indent: number;
            parameters: [];
            code: 411;
        };
        112: {
            indent: number;
            parameters: [];
            code: 112;
        };
        113: {
            indent: number;
            parameters: [];
            code: 113;
        };
        115: {
            indent: number;
            parameters: [];
            code: 115;
        };
        117: {
            indent: number;
            parameters: [id: number];
            code: 117;
        };
        118: {
            indent: number;
            parameters: [name: string];
            code: 118;
        };
        119: {
            indent: number;
            parameters: [name: string];
            code: 119;
        };
        121: {
            indent: number;
            parameters: [min: number, max: number, value: import(".").ValueOf<{
                ON: 0;
                OFF: 1;
            }>];
            code: 121;
        };
        122: {
            indent: number;
            parameters: [startId: number, endId: number, operationType: number, operand: 0, value: number] | [startId: number, endId: number, operationType: number, operand: 1, variableId: number] | [startId: number, endId: number, operationType: number, operand: 2, min: number, max: number] | [startId: number, endId: number, operationType: number, operand: 4, code: string] | [startId: number, endId: number, operationType: number, operand: 3, type: 0 | 1 | 2, itemId: number] | [startId: number, endId: number, operationType: number, operand: 3, type: 3 | 4, index: number, param: import(".").ValueOf<{
                LEVEL: 0;
                EXP: 1;
                HP: 2;
                MP: 3;
                MAX_HP: 4;
                MAX_MP: 5;
                ATK: 6;
                DEF: 7;
                MAT: 8;
                MDF: 9;
                AGI: 10;
                LUK: 11;
                TP: 12;
            }>] | [startId: number, endId: number, operationType: number, operand: 3, type: 5, id: number, param: import(".").ValueOf<{
                X: 0;
                Y: 1;
                DIRECTION: 2;
                SCREEN_X: 3;
                SCREEN_Y: 4;
            }>] | [startId: number, endId: number, operationType: number, operand: 3, type: 6, index: number] | [startId: number, endId: number, operationType: number, operand: 3, type: 7, param: import(".").ValueOf<{
                MAP_ID: 0;
                PARTY_MEMBERS: 1;
                GOLD: 2;
                STEPS: 3;
                PLAY_TIME: 4;
                TIMER: 5;
                SAVE_COUNT: 6;
                BATTLE_COUNT: 7;
                WIN_COUNT: 8;
                ESCAPE_COUNT: 9;
            }>] | [startId: number, endId: number, operationType: number, operand: 3, type: 8, param: import(".").ValueOf<{
                USED_SKILL_ID: 0;
                USED_ITEM_ID: 1;
                ACTION_ACTOR_ID: 2;
                ACTION_ENEMY_INDEX: 3;
                TARGET_ACTOR_ID: 4;
                TARGET_ENEMY_INDEX: 5;
            }>];
            code: 122;
        };
        123: {
            indent: number;
            parameters: [key: string, value: import(".").ValueOf<{
                ON: 0;
                OFF: 1;
            }>];
            code: 123;
        };
        124: {
            indent: number;
            parameters: [operation: import(".").ValueOf<{
                readonly ADD: 0;
                readonly SUB: 1;
            }>, time: number];
            code: 124;
        };
        125: {
            indent: number;
            parameters: [operation: import(".").ValueOf<{
                readonly ADD: 0;
                readonly SUB: 1;
            }>, operationType: number, value: number];
            code: 125;
        };
        126: {
            indent: number;
            parameters: [id: number, operation: import(".").ValueOf<{
                readonly ADD: 0;
                readonly SUB: 1;
            }>, operationType: number, value: number];
            code: 126;
        };
        127: {
            indent: number;
            parameters: [id: number, operation: import(".").ValueOf<{
                readonly ADD: 0;
                readonly SUB: 1;
            }>, operationType: number, value: number, isEquip: boolean];
            code: 127;
        };
        128: {
            indent: number;
            parameters: [id: number, operation: import(".").ValueOf<{
                readonly ADD: 0;
                readonly SUB: 1;
            }>, operationType: number, value: number, isEquip: boolean];
            code: 128;
        };
        129: {
            indent: number;
            parameters: [id: number, operation: import(".").ValueOf<{
                readonly ADD: 0;
                readonly SUB: 1;
            }>, isInit: boolean];
            code: 129;
        };
        132: {
            indent: number;
            parameters: [value: import(".").AudioFileParams];
            code: 132;
        };
        133: {
            indent: number;
            parameters: [value: import(".").AudioFileParams];
            code: 133;
        };
        134: {
            indent: number;
            parameters: [value: import(".").ValueOf<{
                ON: 0;
                OFF: 1;
            }>];
            code: 134;
        };
        135: {
            indent: number;
            parameters: [value: import(".").ValueOf<{
                ON: 0;
                OFF: 1;
            }>];
            code: 135;
        };
        136: {
            indent: number;
            parameters: [value: import(".").ValueOf<{
                ON: 0;
                OFF: 1;
            }>];
            code: 136;
        };
        137: {
            indent: number;
            parameters: [value: import(".").ValueOf<{
                ON: 0;
                OFF: 1;
            }>];
            code: 137;
        };
        138: {
            indent: number;
            parameters: [color: import(".").ColorRGBA];
            code: 138;
        };
        139: {
            indent: number;
            parameters: [me: import(".").AudioFileParams];
            code: 139;
        };
        140: {
            indent: number;
            parameters: [value: import(".").AudioFileParams];
            code: 140;
        };
        201: {
            indent: number;
            parameters: [designation: import(".").ValueOf<{
                DIRECT: 0;
                VARIABLE: 1;
            }>, mapId: number, x: number, y: number, direction: import(".").Direction8, fadeType: number];
            code: 201;
        };
        202: {
            indent: number;
            parameters: [];
            code: 202;
        };
        203: {
            indent: number;
            parameters: [];
            code: 203;
        };
        205: {
            indent: number;
            parameters: [characterId: number, movement: import(".").MoveRouteData];
            code: 205;
        };
        206: {
            indent: number;
            parameters: [];
            code: 206;
        };
        211: {
            indent: number;
            parameters: [];
            code: 211;
        };
        212: {
            indent: number;
            parameters: [];
            code: 212;
        };
        213: {
            indent: number;
            parameters: [];
            code: 213;
        };
        214: {
            indent: number;
            parameters: [];
            code: 214;
        };
        216: {
            indent: number;
            parameters: [];
            code: 216;
        };
        217: {
            indent: number;
            parameters: [];
            code: 217;
        };
        221: {
            indent: number;
            parameters: [];
            code: 221;
        };
        222: {
            indent: number;
            parameters: [];
            code: 222;
        };
        223: {
            indent: number;
            parameters: [];
            code: 223;
        };
        224: {
            indent: number;
            parameters: [];
            code: 224;
        };
        225: {
            indent: number;
            parameters: [];
            code: 225;
        };
        230: {
            indent: number;
            parameters: [duration: number];
            code: 230;
        };
        231: {
            indent: number;
            parameters: import(".").ShowPicture;
            code: 231;
        };
        232: {
            indent: number;
            parameters: [pictureId: number, filename: string, origin: 0 | 1, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: 0 | 1 | 2 | 3, wait: boolean, easingType: number];
            code: 232;
        };
        233: {
            indent: number;
            parameters: [];
            code: 233;
        };
        234: {
            indent: number;
            parameters: [];
            code: 234;
        };
        235: {
            indent: number;
            parameters: [pictureId: number];
            code: 235;
        };
        236: {
            indent: number;
            parameters: [type: string, power: number, duration: number, needsWait: boolean];
            code: 236;
        };
        241: {
            indent: number;
            parameters: [value: import(".").AudioFileParams];
            code: 241;
        };
        242: {
            indent: number;
            parameters: [duration: number];
            code: 242;
        };
        243: {
            indent: number;
            parameters: [];
            code: 243;
        };
        244: {
            indent: number;
            parameters: [];
            code: 244;
        };
        245: {
            indent: number;
            parameters: [value: import(".").AudioFileParams];
            code: 245;
        };
        249: {
            indent: number;
            parameters: [value: import(".").AudioFileParams];
            code: 249;
        };
        250: {
            indent: number;
            parameters: [value: import(".").AudioFileParams];
            code: 250;
        };
        282: {
            indent: number;
            parameters: [tileSetId: number];
            code: 282;
        };
        283: {
            indent: number;
            parameters: [battleBack1Name: string, battleBack2name: string];
            code: 283;
        };
        284: {
            indent: number;
            parameters: [name: string, loopX: boolean, loopY: boolean, sx: number, sy: number];
            code: 284;
        };
        301: {
            indent: number;
            parameters: [directDesignation: 0, troopId: number, canEscape: boolean, canLose: boolean];
            code: 301;
        };
        302: {
            indent: number;
            parameters: import(".").ShopProcessing;
            code: 302;
        };
        605: {
            indent: number;
            parameters: import(".").ShopGoods;
            code: 605;
        };
        303: {
            indent: number;
            parameters: [actorId: number, name: string];
            code: 303;
        };
        311: {
            indent: number;
            parameters: [targetSelect: import(".").ConstatnOrVariable, index: number, oparation: 0 | 1, oprandType: import(".").ConstatnOrVariable, VariableIdOrValue: number, allowDetah: boolean];
            code: 311;
        };
        312: {
            indent: number;
            parameters: [targetSelect: import(".").ConstatnOrVariable, index: number, oparation: 0 | 1, oprandType: import(".").ConstatnOrVariable, VariableIdOrValue: number];
            code: 312;
        };
        313: {
            indent: number;
            parameters: [targetSelect: import(".").ConstatnOrVariable, index: number, oparation: 0 | 1, oprandType: import(".").ConstatnOrVariable, VariableIdOrValue: number];
            code: 313;
        };
        320: {
            indent: number;
            parameters: [actorId: number, name: string];
            code: 320;
        };
        322: {
            indent: number;
            parameters: [actorId: number, characterImage: string, characterIndex: number, faceImage: string, faceIndex: number, battlerImage: string];
            code: 322;
        };
        323: {
            indent: number;
            parameters: [actorId: number, characterImage: string, characterIndex: number];
            code: 323;
        };
        324: {
            indent: number;
            parameters: [actorId: number, name: string];
            code: 324;
        };
        325: {
            indent: number;
            parameters: [actorId: number, name: string];
            code: 325;
        };
        355: {
            indent: number;
            parameters: [script: string];
            code: 355;
        };
        655: {
            indent: number;
            parameters: [script: string];
            code: 655;
        };
        356: {
            indent: number;
            parameters: [data: string];
            code: 356;
        };
        357: {
            indent: number;
            parameters: [filename: string, commandName: string, anything: string, args: Record<string, string>];
            code: 357;
        };
    }[T]["parameters"];
};
