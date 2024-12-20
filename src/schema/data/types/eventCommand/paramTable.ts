import type { OPERATION, TOGGLE, DESIGNATION } from "./constants";
import type { CodeTest } from "./codeTest";
import type {
  ControlVariables,
  ChanageActorVariable,
  ShopGoods,
  ShopProcessing,
  ShowPicture,
  MovePicture,
} from "./paramaters";
import type { MoveRouteData } from "../../../map/";
import type { ValueOf, ColorRGBA } from "../../../../types";
import type { Direction8 } from "../../../../game/object/types";
import type { AudioFileParams } from "../members";

export type CommandParameters = {
  NO_OPERATION: [];
  /**
   * @description Show Text
   */
  SHOW_MESSAGE: [
    facename: string,
    faceIndex: number,
    background: number,
    positionType: number,
    speakerName: string
  ];

  /**
   * @description Show Text (body)
   */
  SHOW_MESSAGE_BODY: [content: string];
  /**
   * @description Show Choices
   */
  SHOW_CHOICES: [
    choices: string[],
    cancelType: number,
    defaultType: number,
    positionType: number,
    background: number
  ];

  /**
   * @description Show Choices (item)
   */
  SHOW_CHOICES_ITEM: [index: number, name: string];

  /**
   * @description Input Number
   */
  INPUT_NUMBER: [variableId: number, maxDigits: number];
  /**
   * @description Select Item
   */
  SELECT_ITEM: [variableId: number, itemType: number];

  /**
   * @description Show Scrolling Text
   */
  SHOW_SCROLLING_TEXT: [speed: number, skip: boolean];
  /**
   * @description Show Scrolling Text (body)
   */
  SHOW_SCROLLING_TEXT_BODY: [content: string];

  /**
   * @description Comment
   */
  COMMENT: [content: string];
  /**
   * @description note (Comment body)
   */
  COMMENT_BODY: [content: string];

  SKIP: [];

  /**
   * @description Conditional Branch
   */
  CONDITIONAL_BRANCH: [];
  /**
   * @description Else (Conditional Branch)
   */
  CONDITIONAL_BRANCH_ELSE: [];

  /**
   * @description Loop
   */
  LOOP: [];

  /**
   * @description Break Loop
   */
  LOOP_BREAK: [];
  /**
   * @description Exit Event Processing
   */
  EXIT_EVENT_PROCESSING: [];
  /**
   * @description Common Event
   */
  COMMON_EVENT: [id: number];
  /**
   * @description Label
   */
  LABEL: [name: string];

  /**
   * @description Jump to Label
   */
  LABEL_JUMP: [name: string];

  CONTROL_SWITCHES: [min: number, max: number, value: ValueOf<typeof TOGGLE>];
  /**
   * @description Control Variables
   * @todo 複雑なので後回し
   */
  CONTROL_VARIABLES: ControlVariables;

  /**
   * @description Control Self Switch
   */
  CONTROL_SELF_SWITCH: [key: string, value: ValueOf<typeof TOGGLE>];

  /**
   * @description Control Timer
   */
  CONTROL_TIMER: [operation: ValueOf<typeof OPERATION>, time: number];

  /**
   * @description Change Gold
   */
  CHANGE_GOLD: [
    operation: ValueOf<typeof OPERATION>,
    operationType: number,
    value: number
  ];

  /**
   * @description Change Items
   */
  CHANGE_ITEMS: [
    id: number,
    operation: ValueOf<typeof OPERATION>,
    operationType: number,
    value: number
  ];

  /**
   * @description Change Weapons
   */
  CHANGE_WEAPONS: [
    id: number,
    operation: ValueOf<typeof OPERATION>,
    operationType: number,
    value: number,
    isEquip: boolean
  ];
  /**
   * @description Change Armors
   */
  CHANGE_ARMORS: [
    id: number,
    operation: ValueOf<typeof OPERATION>,
    operationType: number,
    value: number,
    isEquip: boolean
  ];
  /**
   * @description Change Party Member
   */
  CHANGE_PARTY_MEMBER: [
    id: number,
    operation: ValueOf<typeof OPERATION>,
    isInit: boolean
  ];

  /**
   * @description Change Battle BGM
   */
  CHANGE_BATTLE_BGM: [value: AudioFileParams];
  /**
   * @description Change Vheicle ME
   */
  CHANGE_VEHICLE_ME: [value: AudioFileParams];

  /**
   * @description Change Victory ME
   */
  CHANGE_VICTORY_ME: [value: AudioFileParams];

  CHANGE_TILESET: [tileSetId: number];
  CHANGE_BATTLE_BACKGROUND: [battleBack1Name: string, battleBack2name: string];

  BATTLE_PROCESSING: [
    directDesignation: 0,
    troopId: number,
    canEscape: boolean,
    canLose: boolean
  ];

  /**
   * @description Change Save Access
   */
  CHANGE_SAVE_ACCESS: [value: ValueOf<typeof TOGGLE>];

  /**
   * @description Change Menu Access
   */
  CHANGE_MENU_ACCESS: [value: ValueOf<typeof TOGGLE>];

  /**
   * @description Change Encounter
   */
  CHANGE_ENCOUNTER: [value: ValueOf<typeof TOGGLE>];

  /**
   * @description Change Formation Access
   */
  CHANGE_FORMATION_ACCESS: [value: ValueOf<typeof TOGGLE>];

  CHANGE_WINDOW_COLOR: [color: ColorRGBA];
  CHANGE_DEFEAT_ME: [me: AudioFileParams];
  SET_WEATHER_EFFECT: [
    type: string,
    power: number,
    duration: number,
    needsWait: boolean
  ];

  PLAY_BGM: [value: AudioFileParams];
  FADEOUT_BGM: [duration: number];
  PLAY_BGS: [value: AudioFileParams];
  PLAY_SE: [value: AudioFileParams];
  PLAY_ME: [value: AudioFileParams];

  SAVE_BGM: [];
  RESUME_BGM: [];
  SHOP_PROCESSING: ShopProcessing;
  SHOP_PROCESSING_BODY: ShopGoods;
  NAME_INPUT_PROCESSING: [actorId: number, name: string];
  CHANGE_HP: [...ChanageActorVariable, allowDetah: boolean];
  CHANGE_MP: ChanageActorVariable;
  CHANGE_TP: ChanageActorVariable;

  CHANGE_NAME: [actorId: number, name: string];

  CHANGE_PARALLAX: [
    name: string,
    loopX: boolean,
    loopY: boolean,
    sx: number,
    sy: number
  ];
  CHANGE_ACTOR_IMAGES: [
    actorId: number,
    characterImage: string,
    characterIndex: number,
    faceImage: string,
    faceIndex: number,
    battlerImage: string
  ];
  CHANGE_VEHICLE_IMAGE: [
    actorId: number,
    characterImage: string,
    characterIndex: number
  ];

  TRANSFER_PLAYER: [
    designation: ValueOf<typeof DESIGNATION>,
    mapId: number,
    x: number,
    y: number,
    direction: Direction8,
    fadeType: number
  ];

  SET_VEHICLE_LOCATION: [];

  SET_EVENT_LOCATION: [];
  SCROLL_MAP: [];

  SET_MOVEMENT_ROUTE: [characterId: number, movement: MoveRouteData];
  GET_ONOFF_VEHICLE: [];

  CHANGE_TRANSPARENCY: [];
  SHOW_ANIMATION: [];

  SHOW_BALLOON_ICON: [];

  ERASE_EVENT: [];

  CHANGE_PLAYER_FOLLOWERS: [];
  GATHER_FOLLOWERS: [];

  FADEOUT_SCREEN: [];
  FADEIN_SCREEN: [];

  TINT_SCREEN: [];

  FLASH_SCREEN: [];

  SHAKE_SCREEN: [];
  WAIT: [duration: number];

  SHOW_PICTURE: ShowPicture;
  MOVE_PICTURE: MovePicture;
  TINT_PICTURE: [];
  ROTATE_PICTURE: [];
  ERASE_PICTURE: [pictureId: number];

  /**
   * @description Change Nickname
   */
  CHANGE_NICKNAME: [actorId: number, name: string];

  /**
   * @description Change Profile
   */
  CHANGE_PROFILE: [actorId: number, name: string];

  /**
   * @description  Script Eval
   */
  SCRIPT_EVAL: [script: string];
  /**
   * @description  Script Eval(body)
   */
  SCRIPT_EVAL_BODY: [script: string];

  /**
   * @description  Plugin Command (MZ)
   */
  PLUGIN_COMMAND_MV: [data: string];

  /**
   * @description  Plugin Command (MZ)
   */
  PLUGIN_COMMAND_MZ: [
    filename: string,
    commandName: string,
    anything: string,
    args: Record<string, string>
  ];
};

// 宣言忘れの自動検出
type ExecCodeTest = CodeTest<CommandParameters>;
