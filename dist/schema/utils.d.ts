import type { EventCommandTable } from "./data/";
export declare const createCommand: <T extends keyof EventCommandTable>(code: T, parameters: EventCommandTable[T]["parameters"], indent?: number) => {
    code: T;
    indent: number;
    parameters: {
        NO_OPERATION: {
            indent: number;
            parameters: [];
            code: 0;
        };
        SHOW_MESSAGE: {
            indent: number;
            parameters: [facename: string, faceIndex: number, background: number, positionType: number, speakerName: string];
            code: 101;
        };
        SHOW_MESSAGE_BODY: {
            indent: number;
            parameters: [content: string];
            code: 401;
        };
        SHOW_CHOICES: {
            indent: number;
            parameters: [choices: string[], cancelType: number, defaultType: number, positionType: number, background: number];
            code: 102;
        };
        SHOW_CHOICES_ITEM: {
            indent: number;
            parameters: [index: number, name: string];
            code: 402;
        };
        INPUT_NUMBER: {
            indent: number;
            parameters: [variableId: number, maxDigits: number];
            code: 103;
        };
        SELECT_ITEM: {
            indent: number;
            parameters: [variableId: number, itemType: number];
            code: 104;
        };
        SHOW_SCROLLING_TEXT: {
            indent: number;
            parameters: [speed: number, skip: boolean];
            code: 105;
        };
        SHOW_SCROLLING_TEXT_BODY: {
            indent: number;
            parameters: [content: string];
            code: 405;
        };
        COMMENT: {
            indent: number;
            parameters: [content: string];
            code: 108;
        };
        COMMENT_BODY: {
            indent: number;
            parameters: [content: string];
            code: 408;
        };
        SKIP: {
            indent: number;
            parameters: [];
            code: 109;
        };
        CONDITIONAL_BRANCH: {
            indent: number;
            parameters: [];
            code: 111;
        };
        CONDITIONAL_BRANCH_ELSE: {
            indent: number;
            parameters: [];
            code: 411;
        };
        LOOP: {
            indent: number;
            parameters: [];
            code: 112;
        };
        LOOP_BREAK: {
            indent: number;
            parameters: [];
            code: 113;
        };
        EXIT_EVENT_PROCESSING: {
            indent: number;
            parameters: [];
            code: 115;
        };
        COMMON_EVENT: {
            indent: number;
            parameters: [id: number];
            code: 117;
        };
        LABEL: {
            indent: number;
            parameters: [name: string];
            code: 118;
        };
        LABEL_JUMP: {
            indent: number;
            parameters: [name: string];
            code: 119;
        };
        CONTROL_SWITCHES: {
            indent: number;
            parameters: [min: number, max: number, value: import(".").ValueOf<{
                ON: 0;
                OFF: 1;
            }>];
            code: 121;
        };
        CONTROL_VARIABLES: {
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
        CONTROL_SELF_SWITCH: {
            indent: number;
            parameters: [key: string, value: import(".").ValueOf<{
                ON: 0;
                OFF: 1;
            }>];
            code: 123;
        };
        CONTROL_TIMER: {
            indent: number;
            parameters: [operation: import(".").ValueOf<{
                readonly ADD: 0;
                readonly SUB: 1;
            }>, time: number];
            code: 124;
        };
        CHANGE_GOLD: {
            indent: number;
            parameters: [operation: import(".").ValueOf<{
                readonly ADD: 0;
                readonly SUB: 1;
            }>, operationType: number, value: number];
            code: 125;
        };
        CHANGE_ITEMS: {
            indent: number;
            parameters: [id: number, operation: import(".").ValueOf<{
                readonly ADD: 0;
                readonly SUB: 1;
            }>, operationType: number, value: number];
            code: 126;
        };
        CHANGE_WEAPONS: {
            indent: number;
            parameters: [id: number, operation: import(".").ValueOf<{
                readonly ADD: 0;
                readonly SUB: 1;
            }>, operationType: number, value: number, isEquip: boolean];
            code: 127;
        };
        CHANGE_ARMORS: {
            indent: number;
            parameters: [id: number, operation: import(".").ValueOf<{
                readonly ADD: 0;
                readonly SUB: 1;
            }>, operationType: number, value: number, isEquip: boolean];
            code: 128;
        };
        CHANGE_PARTY_MEMBER: {
            indent: number;
            parameters: [id: number, operation: import(".").ValueOf<{
                readonly ADD: 0;
                readonly SUB: 1;
            }>, isInit: boolean];
            code: 129;
        };
        CHANGE_BATTLE_BGM: {
            indent: number;
            parameters: [value: import(".").AudioFileParams];
            code: 132;
        };
        CHANGE_VEHICLE_ME: {
            indent: number;
            parameters: [value: import(".").AudioFileParams];
            code: 140;
        };
        CHANGE_VICTORY_ME: {
            indent: number;
            parameters: [value: import(".").AudioFileParams];
            code: 133;
        };
        CHANGE_TILESET: {
            indent: number;
            parameters: [tileSetId: number];
            code: 282;
        };
        CHANGE_BATTLE_BACKGROUND: {
            indent: number;
            parameters: [battleBack1Name: string, battleBack2name: string];
            code: 283;
        };
        BATTLE_PROCESSING: {
            indent: number;
            parameters: [directDesignation: 0, troopId: number, canEscape: boolean, canLose: boolean];
            code: 301;
        };
        CHANGE_SAVE_ACCESS: {
            indent: number;
            parameters: [value: import(".").ValueOf<{
                ON: 0;
                OFF: 1;
            }>];
            code: 134;
        };
        CHANGE_MENU_ACCESS: {
            indent: number;
            parameters: [value: import(".").ValueOf<{
                ON: 0;
                OFF: 1;
            }>];
            code: 135;
        };
        CHANGE_ENCOUNTER: {
            indent: number;
            parameters: [value: import(".").ValueOf<{
                ON: 0;
                OFF: 1;
            }>];
            code: 136;
        };
        CHANGE_FORMATION_ACCESS: {
            indent: number;
            parameters: [value: import(".").ValueOf<{
                ON: 0;
                OFF: 1;
            }>];
            code: 137;
        };
        CHANGE_WINDOW_COLOR: {
            indent: number;
            parameters: [color: import(".").ColorRGBA];
            code: 138;
        };
        CHANGE_DEFEAT_ME: {
            indent: number;
            parameters: [me: import(".").AudioFileParams];
            code: 139;
        };
        SET_WEATHER_EFFECT: {
            indent: number;
            parameters: [type: string, power: number, duration: number, needsWait: boolean];
            code: 236;
        };
        PLAY_BGM: {
            indent: number;
            parameters: [value: import(".").AudioFileParams];
            code: 241;
        };
        FADEOUT_BGM: {
            indent: number;
            parameters: [duration: number];
            code: 242;
        };
        PLAY_BGS: {
            indent: number;
            parameters: [value: import(".").AudioFileParams];
            code: 245;
        };
        PLAY_SE: {
            indent: number;
            parameters: [value: import(".").AudioFileParams];
            code: 250;
        };
        PLAY_ME: {
            indent: number;
            parameters: [value: import(".").AudioFileParams];
            code: 249;
        };
        SAVE_BGM: {
            indent: number;
            parameters: [];
            code: 243;
        };
        RESUME_BGM: {
            indent: number;
            parameters: [];
            code: 244;
        };
        SHOP_PROCESSING: {
            indent: number;
            parameters: import(".").ShopProcessing;
            code: 302;
        };
        SHOP_PROCESSING_BODY: {
            indent: number;
            parameters: import(".").ShopGoods;
            code: 605;
        };
        NAME_INPUT_PROCESSING: {
            indent: number;
            parameters: [actorId: number, name: string];
            code: 303;
        };
        CHANGE_HP: {
            indent: number;
            parameters: [targetSelect: import(".").ConstatnOrVariable, index: number, oparation: 0 | 1, oprandType: import(".").ConstatnOrVariable, VariableIdOrValue: number, allowDetah: boolean];
            code: 311;
        };
        CHANGE_MP: {
            indent: number;
            parameters: [targetSelect: import(".").ConstatnOrVariable, index: number, oparation: 0 | 1, oprandType: import(".").ConstatnOrVariable, VariableIdOrValue: number];
            code: 312;
        };
        CHANGE_TP: {
            indent: number;
            parameters: [targetSelect: import(".").ConstatnOrVariable, index: number, oparation: 0 | 1, oprandType: import(".").ConstatnOrVariable, VariableIdOrValue: number];
            code: 313;
        };
        CHANGE_NAME: {
            indent: number;
            parameters: [actorId: number, name: string];
            code: 320;
        };
        CHANGE_PARALLAX: {
            indent: number;
            parameters: [name: string, loopX: boolean, loopY: boolean, sx: number, sy: number];
            code: 284;
        };
        CHANGE_ACTOR_IMAGES: {
            indent: number;
            parameters: [actorId: number, characterImage: string, characterIndex: number, faceImage: string, faceIndex: number, battlerImage: string];
            code: 322;
        };
        CHANGE_VEHICLE_IMAGE: {
            indent: number;
            parameters: [actorId: number, characterImage: string, characterIndex: number];
            code: 323;
        };
        TRANSFER_PLAYER: {
            indent: number;
            parameters: [designation: import(".").ValueOf<{
                DIRECT: 0;
                VARIABLE: 1;
            }>, mapId: number, x: number, y: number, direction: import(".").Direction8, fadeType: number];
            code: 201;
        };
        SET_VEHICLE_LOCATION: {
            indent: number;
            parameters: [];
            code: 202;
        };
        SET_EVENT_LOCATION: {
            indent: number;
            parameters: [];
            code: 203;
        };
        SCROLL_MAP: {
            indent: number;
            parameters: [];
            code: unknown;
        };
        SET_MOVEMENT_ROUTE: {
            indent: number;
            parameters: [characterId: number, movement: import(".").MoveRouteData];
            code: 205;
        };
        GET_ONOFF_VEHICLE: {
            indent: number;
            parameters: [];
            code: 206;
        };
        CHANGE_TRANSPARENCY: {
            indent: number;
            parameters: [];
            code: 211;
        };
        SHOW_ANIMATION: {
            indent: number;
            parameters: [];
            code: 212;
        };
        SHOW_BALLOON_ICON: {
            indent: number;
            parameters: [];
            code: 213;
        };
        ERASE_EVENT: {
            indent: number;
            parameters: [];
            code: 214;
        };
        CHANGE_PLAYER_FOLLOWERS: {
            indent: number;
            parameters: [];
            code: 216;
        };
        GATHER_FOLLOWERS: {
            indent: number;
            parameters: [];
            code: 217;
        };
        FADEOUT_SCREEN: {
            indent: number;
            parameters: [];
            code: 221;
        };
        FADEIN_SCREEN: {
            indent: number;
            parameters: [];
            code: 222;
        };
        TINT_SCREEN: {
            indent: number;
            parameters: [];
            code: 223;
        };
        FLASH_SCREEN: {
            indent: number;
            parameters: [];
            code: 224;
        };
        SHAKE_SCREEN: {
            indent: number;
            parameters: [];
            code: 225;
        };
        WAIT: {
            indent: number;
            parameters: [duration: number];
            code: 230;
        };
        SHOW_PICTURE: {
            indent: number;
            parameters: import(".").ShowPicture;
            code: 231;
        };
        MOVE_PICTURE: {
            indent: number;
            parameters: [pictureId: number, filename: string, origin: 0 | 1, x: number, y: number, scaleX: number, scaleY: number, opacity: number, blendMode: 0 | 1 | 2 | 3, wait: boolean, easingType: number];
            code: 232;
        };
        TINT_PICTURE: {
            indent: number;
            parameters: [];
            code: 234;
        };
        ROTATE_PICTURE: {
            indent: number;
            parameters: [];
            code: 233;
        };
        ERASE_PICTURE: {
            indent: number;
            parameters: [pictureId: number];
            code: 235;
        };
        CHANGE_NICKNAME: {
            indent: number;
            parameters: [actorId: number, name: string];
            code: 324;
        };
        CHANGE_PROFILE: {
            indent: number;
            parameters: [actorId: number, name: string];
            code: 325;
        };
        SCRIPT_EVAL: {
            indent: number;
            parameters: [script: string];
            code: 355;
        };
        SCRIPT_EVAL_BODY: {
            indent: number;
            parameters: [script: string];
            code: 655;
        };
        PLUGIN_COMMAND_MV: {
            indent: number;
            parameters: [data: string];
            code: 356;
        };
        PLUGIN_COMMAND_MZ: {
            indent: number;
            parameters: [filename: string, commandName: string, anything: string, args: Record<string, string>];
            code: 357;
        };
    }[T]["parameters"];
};
