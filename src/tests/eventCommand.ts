import type { EventCommandsMapper } from "../schema";

// const mockMapper: EventCommandsMapper = {
//   codeTable: {
//     NO_OPERATION: 0,
//     SHOW_MESSAGE: 101,
//     SHOW_MESSAGE_BODY: 401,
//     SHOW_CHOICES: 102,

//     CONTROL_VARIABLES: 122,
//     CONTROL_SWITCHES: 121,
//     SHOW_CHOICES_ITEM: 402,
//     INPUT_NUMBER: 103,
//     SELECT_ITEM: 104,
//     SHOW_SCROLLING_TEXT: 105,
//     SHOW_SCROLLING_TEXT_BODY: 405,
//     COMMENT: 108,
//     COMMENT_BODY: 408,
//     SKIP: 109,
//     CONDITIONAL_BRANCH: 111,
//     CONDITIONAL_BRANCH_ELSE: 411,
//     LOOP: 112,
//     LOOP_BREAK: 113,
//     EXIT_EVENT_PROCESSING: 115,
//     COMMON_EVENT: 117,
//     LABEL: 118,
//     LABEL_JUMP: 119,
//     CONTROL_SELF_SWITCH: 123,
//     CONTROL_TIMER: 124,
//     CHANGE_GOLD: 125,
//     CHANGE_ITEMS: 126,
//     CHANGE_WEAPONS: 127,
//     CHANGE_ARMORS: 128,
//     CHANGE_PARTY_MEMBER: 129,
//     CHANGE_BATTLE_BGM: 132,
//     CHANGE_VICTORY_ME: 133,
//     CHANGE_SAVE_ACCESS: 134,
//     CHANGE_MENU_ACCESS: 135,
//     CHANGE_ENCOUNTER: 136,
//     CHANGE_FORMATION_ACCESS: 137,
//     CHANGE_WINDOW_COLOR: 138,
//     CHANGE_DEFEAT_ME: 139,
//     CHANGE_VEHICLE_ME: 140,
//     TRANSFER_PLAYER: 201,
//     SET_VEHICLE_LOCATION: 202,
//     SET_EVENT_LOCATION: 203,
//     SCROLL_MAP: 204,
//     SET_MOVEMENT_ROUTE: 205,
//     GET_ONOFF_VEHICLE: 206,
//     CHANGE_TRANSPARENCY: 211,
//     SHOW_ANIMATION: 212,
//     SHOW_BALLOON_ICON: 213,
//     ERASE_EVENT: 214,
//     CHANGE_PLAYER_FOLLOWERS: 216,
//     GATHER_FOLLOWERS: 217,
//     FADEOUT_SCREEN: 221,
//     FADEIN_SCREEN: 222,
//     TINT_SCREEN: 223,
//     FLASH_SCREEN: 224,
//     SHAKE_SCREEN: 225,
//     WAIT: 230,
//     SHOW_PICTURE: 231,
//     MOVE_PICTURE: 232,
//     ROTATE_PICTURE: 233,
//     TINT_PICTURE: 234,
//     ERASE_PICTURE: 235,
//     SET_WEATHER_EFFECT: 236,
//     PLAY_BGM: 241,
//     FADEOUT_BGM: 242,
//     SAVE_BGM: 243,
//     RESUME_BGM: 244,
//     PLAY_BGS: 245,
//     PLAY_ME: 249,
//     PLAY_SE: 250,
//     CHANGE_TILESET: 282,
//     CHANGE_BATTLE_BACKGROUND: 283,
//     CHANGE_PARALLAX: 284,
//     BATTLE_PROCESSING: 301,
//     SHOP_PROCESSING: 302,
//     SHOP_PROCESSING_BODY: 605,
//     NAME_INPUT_PROCESSING: 303,
//     CHANGE_HP: 311,
//     CHANGE_MP: 312,
//     CHANGE_TP: 313,
//     CHANGE_NAME: 320,
//     CHANGE_ACTOR_IMAGES: 322,
//     CHANGE_VEHICLE_IMAGE: 323,
//     CHANGE_NICKNAME: 324,
//     CHANGE_PROFILE: 325,
//     SCRIPT_EVAL: 355,
//     SCRIPT_EVAL_BODY: 655,
//     PLUGIN_COMMAND_MV: 356,
//     PLUGIN_COMMAND_MZ: 357,
//   },
//   commandType: {
//     code: 0,
//     indent: 0,
//     parameters: [],
//   },
//   commandTypeTable: {
//     NO_OPERATION: {
//       code: 0,
//       parameters: [],
//       indent: 0,
//     },
//     SHOW_MESSAGE: {
//       code: 101,
//       parameters: ["", 0, 0, 0, ""],
//       indent: 0,
//     },
//     SHOW_MESSAGE_BODY: {
//       code: 401,
//       parameters: [""],
//       indent: 0,
//     },
//     SHOW_CHOICES: {
//       code: 102,
//       parameters: [
//         [], // choices: string[]
//         0, // cancelType: number
//         0, // defaultType: number
//         0, // positionType: number
//         0, // background: number
//       ],
//       indent: 0,
//     },
//     SHOW_CHOICES_ITEM: {
//       code: 402,
//       parameters: [
//         0, // index: number
//         "", // name: string
//       ],
//       indent: 0,
//     },
//     INPUT_NUMBER: {
//       code: 103,
//       parameters: [0, 0],
//       indent: 0,
//     },
//     SELECT_ITEM: {
//       code: 104,
//       parameters: [0, 0],
//       indent: 0,
//     },
//     SHOW_SCROLLING_TEXT: {
//       code: 105,
//       parameters: [
//         0, // speed: number
//         false, // skip: boolean
//       ],
//       indent: 0,
//     },
//     SHOW_SCROLLING_TEXT_BODY: {
//       code: 405,
//       parameters: [""],
//       indent: 0,
//     },
//     COMMENT: {
//       code: 108,
//       parameters: [""],
//       indent: 0,
//     },
//     COMMENT_BODY: {
//       code: 408,
//       parameters: [""],
//       indent: 0,
//     },
//     SKIP: {
//       code: 109,
//       parameters: [],
//       indent: 0,
//     },
//     CONDITIONAL_BRANCH: {
//       code: 111,
//       parameters: [0, 0, 0],
//       indent: 0,
//     },
//     CONDITIONAL_BRANCH_ELSE: {
//       code: 411,
//       parameters: [],
//       indent: 0,
//     },
//     LOOP: {
//       code: 112,
//       parameters: [],
//       indent: 0,
//     },
//     LOOP_BREAK: {
//       code: 113,
//       parameters: [],
//       indent: 0,
//     },
//     EXIT_EVENT_PROCESSING: {
//       code: 115,
//       parameters: [],
//       indent: 0,
//     },
//     COMMON_EVENT: {
//       code: 117,
//       parameters: [0],
//       indent: 0,
//     },
//     LABEL: {
//       code: 118,
//       parameters: [""],
//       indent: 0,
//     },
//     LABEL_JUMP: {
//       code: 119,
//       parameters: [""],
//       indent: 0,
//     },
//     CONTROL_SELF_SWITCH: {
//       code: 123,
//       parameters: ["", 0],
//       indent: 0,
//     },
//     CONTROL_TIMER: {
//       code: 124,
//       parameters: [0, 0],
//       indent: 0,
//     },
//     CHANGE_GOLD: {
//       code: 125,
//       parameters: [0, 0, 0],
//       indent: 0,
//     },
//     CHANGE_ITEMS: {
//       code: 126,
//       parameters: [0, 0, 0, 0],
//       indent: 0,
//     },
//     CHANGE_WEAPONS: {
//       code: 127,
//       parameters: [0, 0, 0, 0, false],
//       indent: 0,
//     },
//     CHANGE_ARMORS: {
//       code: 128,
//       parameters: [0, 0, 0, 0, false],
//       indent: 0,
//     },
//     CHANGE_PARTY_MEMBER: {
//       code: 129,
//       parameters: [0, 0, false],
//       indent: 0,
//     },
//     CHANGE_BATTLE_BGM: {
//       code: 132,
//       parameters: [
//         {
//           name: "",
//           volume: 0,
//           pitch: 0,
//           pan: 0,
//         },
//       ],
//       indent: 0,
//     },
//     CHANGE_VICTORY_ME: {
//       code: 133,
//       parameters: [
//         {
//           name: "",
//           volume: 0,
//           pitch: 0,
//           pan: 0,
//         },
//       ],
//       indent: 0,
//     },
//     CHANGE_SAVE_ACCESS: {
//       code: 134,
//       parameters: [0],
//       indent: 0,
//     },
//     CHANGE_MENU_ACCESS: {
//       code: 135,
//       parameters: [0],
//       indent: 0,
//     },
//     CHANGE_ENCOUNTER: {
//       code: 136,
//       parameters: [0],
//       indent: 0,
//     },
//     CHANGE_FORMATION_ACCESS: {
//       code: 137,
//       parameters: [0],
//       indent: 0,
//     },
//     CHANGE_WINDOW_COLOR: {
//       code: 138,
//       parameters: [[0, 0, 0, 0]],
//       indent: 0,
//     },
//     CHANGE_DEFEAT_ME: {
//       code: 139,
//       parameters: [
//         {
//           name: "",
//           volume: 0,
//           pitch: 0,
//           pan: 0,
//         },
//       ],
//       indent: 0,
//     },
//     CHANGE_VEHICLE_ME: {
//       code: 140,
//       parameters: [
//         {
//           name: "",
//           volume: 0,
//           pitch: 0,
//           pan: 0,
//         },
//       ],
//       indent: 0,
//     },
//     TRANSFER_PLAYER: {
//       code: 201,
//       parameters: [0, 0, 0, 0, 2, 0],
//       indent: 0,
//     },
//     SET_VEHICLE_LOCATION: {
//       code: 202,
//       parameters: [],
//       indent: 0,
//     },
//     SET_EVENT_LOCATION: {
//       code: 203,
//       parameters: [],
//       indent: 0,
//     },
//     SCROLL_MAP: {
//       code: 204,
//       parameters: [],
//       indent: 0,
//     },
//     SET_MOVEMENT_ROUTE: {
//       code: 205,
//       parameters: [
//         0,
//         {
//           repeat: false,
//           skippable: false,
//           wait: false,
//           list: [],
//         },
//       ],
//       indent: 0,
//     },
//     GET_ONOFF_VEHICLE: {
//       code: 206,
//       parameters: [],
//       indent: 0,
//     },
//     CHANGE_TRANSPARENCY: {
//       code: 211,
//       parameters: [],
//       indent: 0,
//     },
//     SHOW_ANIMATION: {
//       code: 212,
//       parameters: [],
//       indent: 0,
//     },
//     SHOW_BALLOON_ICON: {
//       code: 213,
//       parameters: [],
//       indent: 0,
//     },
//     ERASE_EVENT: {
//       code: 214,
//       parameters: [],
//       indent: 0,
//     },
//     CHANGE_PLAYER_FOLLOWERS: {
//       code: 216,
//       parameters: [],
//       indent: 0,
//     },
//     GATHER_FOLLOWERS: {
//       code: 217,
//       parameters: [],
//       indent: 0,
//     },
//     FADEOUT_SCREEN: {
//       code: 221,
//       parameters: [],
//       indent: 0,
//     },
//     FADEIN_SCREEN: {
//       code: 222,
//       parameters: [],
//       indent: 0,
//     },
//     TINT_SCREEN: {
//       code: 223,
//       parameters: [],
//       indent: 0,
//     },
//     FLASH_SCREEN: {
//       code: 224,
//       parameters: [],
//       indent: 0,
//     },
//     SHAKE_SCREEN: {
//       code: 225,
//       parameters: [],
//       indent: 0,
//     },
//     WAIT: {
//       code: 230,
//       parameters: [0],
//       indent: 0,
//     },
//     SHOW_PICTURE: {
//       code: 231,
//       parameters: [0, "", 0, 0, 0, 0, 0, 0, 0],
//       indent: 0,
//     },
//     MOVE_PICTURE: {
//       code: 232,
//       parameters: [0, "", 0, 0, 0, 0, 0, 0, 0, false, 0],
//       indent: 0,
//     },
//     ROTATE_PICTURE: {
//       code: 233,
//       parameters: [],
//       indent: 0,
//     },
//     TINT_PICTURE: {
//       code: 234,
//       parameters: [],
//       indent: 0,
//     },
//     ERASE_PICTURE: {
//       code: 235,
//       parameters: [0],
//       indent: 0,
//     },
//     SET_WEATHER_EFFECT: {
//       code: 236,
//       parameters: ["", 0, 0, false],
//       indent: 0,
//     },
//     PLAY_BGM: {
//       code: 241,
//       parameters: [
//         {
//           name: "",
//           volume: 0,
//           pitch: 0,
//           pan: 0,
//         },
//       ],
//       indent: 0,
//     },
//     FADEOUT_BGM: {
//       code: 242,
//       parameters: [0],
//       indent: 0,
//     },
//     SAVE_BGM: {
//       code: 243,
//       parameters: [],
//       indent: 0,
//     },
//     RESUME_BGM: {
//       code: 244,
//       parameters: [],
//       indent: 0,
//     },
//     PLAY_BGS: {
//       code: 245,
//       parameters: [
//         {
//           name: "",
//           volume: 0,
//           pitch: 0,
//           pan: 0,
//         },
//       ],
//       indent: 0,
//     },
//     PLAY_ME: {
//       code: 249,
//       parameters: [
//         {
//           name: "",
//           volume: 0,
//           pitch: 0,
//           pan: 0,
//         },
//       ],
//       indent: 0,
//     },
//     PLAY_SE: {
//       code: 250,
//       parameters: [
//         {
//           name: "",
//           volume: 0,
//           pitch: 0,
//           pan: 0,
//         },
//       ],
//       indent: 0,
//     },
//     CHANGE_TILESET: {
//       code: 282,
//       parameters: [0],
//       indent: 0,
//     },
//     CHANGE_BATTLE_BACKGROUND: {
//       code: 283,
//       parameters: ["", ""],
//       indent: 0,
//     },
//     CHANGE_PARALLAX: {
//       code: 284,
//       parameters: ["", false, false, 0, 0],
//       indent: 0,
//     },
//     BATTLE_PROCESSING: {
//       code: 301,
//       parameters: [0, 0, false, false],
//       indent: 0,
//     },
//     SHOP_PROCESSING: {
//       code: 302,
//       parameters: [0, 0, 0, 0, false],
//       indent: 0,
//     },
//     SHOP_PROCESSING_BODY: {
//       code: 605,
//       parameters: [0, 0, 0, 0],
//       indent: 0,
//     },
//     NAME_INPUT_PROCESSING: {
//       code: 303,
//       parameters: [0, ""],
//       indent: 0,
//     },
//     CHANGE_HP: {
//       code: 311,
//       parameters: [0, 0, 0, 0, 0, false],
//       indent: 0,
//     },
//     CHANGE_MP: {
//       code: 312,
//       parameters: [0, 0, 0, 0, 0],
//       indent: 0,
//     },
//     CHANGE_TP: {
//       code: 313,
//       parameters: [0, 0, 0, 0, 0],
//       indent: 0,
//     },
//     CHANGE_NAME: {
//       code: 320,
//       parameters: [0, ""],
//       indent: 0,
//     },
//     CHANGE_ACTOR_IMAGES: {
//       code: 322,
//       parameters: [0, "", 0, "", 0, ""],
//       indent: 0,
//     },
//     CHANGE_VEHICLE_IMAGE: {
//       code: 323,
//       parameters: [0, "", 0],
//       indent: 0,
//     },
//     CHANGE_NICKNAME: {
//       code: 324,
//       parameters: [0, ""],
//       indent: 0,
//     },
//     CHANGE_PROFILE: {
//       code: 325,
//       parameters: [0, ""],
//       indent: 0,
//     },
//     SCRIPT_EVAL: {
//       code: 355,
//       parameters: [""],
//       indent: 0,
//     },
//     SCRIPT_EVAL_BODY: {
//       code: 655,
//       parameters: [""],
//       indent: 0,
//     },
//     PLUGIN_COMMAND_MV: {
//       code: 356,
//       parameters: [""],
//       indent: 0,
//     },
//     PLUGIN_COMMAND_MZ: {
//       code: 357,
//       parameters: ["", "", "", {}],

//       indent: 0,
//     },
//     CONTROL_SWITCHES: {
//       code: 121,
//       parameters: [0, 0, 0],
//       indent: 0,
//     },
//     CONTROL_VARIABLES: {
//       code: 122,
//       parameters: [0, 0, 0, 0, 0],
//       indent: 0,
//     },
//   },
// };
//  parameterTable: "parameterTable",
// commandByCode: "commandByCode";
