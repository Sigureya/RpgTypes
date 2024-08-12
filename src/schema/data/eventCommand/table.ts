import type * as $ from "./codes";
import type { OPERATION, TOGGLE } from "./constants";
import type {
  ControlVariables,
  ChanageActorVariable,
  ShopGoods,
  ShopProcessing,
  ShowPicture,
} from "./paramaters";
import { ValueOf, AudioFileParams } from "../../../types/";

export type CommandParameters = {
  /**
   * @description Show Text
   */
  [$.SHOW_MESSAGE]: [
    facename: string,
    faceIndex: number,
    background: number,
    positionType: number,
    speakerName: string
  ];

  /**
   * @description Show Text (body)
   */
  [$.SHOW_MESSAGE_BODY]: [content: string];
  /**
   * @description Show Choices
   */
  [$.SHOW_CHOICES]: [
    choices: string[],
    cancelType: number,
    defaultType: number,
    positionType: number,
    background: number
    // , number
  ];

  /**
   * @description Show Choices (item)
   */
  [$.SHOW_CHOICES_ITEM]: [index: number, name: string];

  /**
   * @description Input Number
   */
  [$.INPUT_NUMBER]: [variableId: number, maxDigits: number];
  /**
   * @description Select Item
   */
  [$.SELECT_ITEM]: [variableId: number, itemType: number];

  /**
   * @description Show Scrolling Text
   */
  [$.SHOW_SCROLLING_TEXT]: [speed: number, skip: boolean];
  /**
   * @description Show Scrolling Text (body)
   */
  [$.SHOW_SCROLLING_TEXT_BODY]: [content: string];

  /**
   * @description Comment
   */
  [$.COMMENT]: [content: string];
  /**
   * @description note (Comment body)
   */
  [$.COMMENT_BODY]: [content: string];

  [$.SKIP]: [];

  /**
   * @description Conditional Branch
   */
  [$.CONDITIONAL_BRANCH]: [];
  /**
   * @description Else (Conditional Branch)
   */
  [$.CONDITIONAL_BRANCH_ELSE]: [];

  /**
   * @description Loop
   */
  [$.LOOP]: [];

  /**
   * @description Break Loop
   */
  [$.LOOP_BREAK]: [];
  /**
   * @description Exit Event Processing
   */
  [$.EXIT_EVENT_PROCESSING]: [];
  /**
   * @description Common Event
   */
  [$.COMMON_EVENT]: [id: number];
  /**
   * @description Label
   */
  [$.LABEL]: [name: string];

  /**
   * @description Jump to Label
   */
  [$.LABEL_JUMP]: [name: string];

  [$.CONTROL_SWITCHES]: [
    min: number,
    max: number,
    value: ValueOf<typeof TOGGLE>
  ];
  /**
   * @description Control Variables
   * @todo 複雑なので後回し
   */
  [$.CONTROL_VARIABLES]: ControlVariables;

  /**
   * @description Control Self Switch
   */
  [$.CONTROL_SELF_SWITCH]: [key: string, value: ValueOf<typeof TOGGLE>];

  /**
   * @description Control Timer
   */
  [$.CONTROL_TIMER]: [operation: ValueOf<typeof OPERATION>, time: number];

  /**
   * @description Change Gold
   */
  [$.CHANGE_GOLD]: [
    operation: ValueOf<typeof OPERATION>,
    operationType: number,
    value: number
  ];

  /**
   * @description Change Items
   */
  [$.CHANGE_ITEMS]: [
    id: number,
    operation: ValueOf<typeof OPERATION>,
    operationType: number,
    value: number
  ];

  /**
   * @description Change Weapons
   */
  [$.CHANGE_WEAPONS]: [
    id: number,
    operation: ValueOf<typeof OPERATION>,
    operationType: number,
    value: number,
    isEquip: boolean
  ];
  /**
   * @description Change Armors
   */
  [$.CHANGE_ARMORS]: [
    id: number,
    operation: ValueOf<typeof OPERATION>,
    operationType: number,
    value: number,
    isEquip: boolean
  ];
  /**
   * @description Change Party Member
   */
  [$.CHANGE_PARTY_MEMBER]: [
    id: number,
    operation: ValueOf<typeof OPERATION>,
    isInit: boolean
  ];

  /**
   * @description Change Battle BGM
   */
  [$.CHANGE_BATTLE_BGM]: [value: AudioFileParams];

  /**
   * @description Change Victory ME
   */
  [$.CHANGE_VICTORY_ME]: [value: AudioFileParams];

  /**
   * @description Change Save Access
   */
  [$.CHANGE_SAVE_ACCESS]: [value: ValueOf<typeof TOGGLE>];

  /**
   * @description Change Menu Access
   */
  [$.CHANGE_MENU_ACCESS]: [value: ValueOf<typeof TOGGLE>];

  /**
   * @description Change Encounter
   */
  [$.CHANGE_ENCOUNTER]: [value: ValueOf<typeof TOGGLE>];

  /**
   * @description Change Formation Access
   */
  [$.CHANGE_FORMATION_ACCESS]: [value: ValueOf<typeof TOGGLE>];

  [$.SHOW_PICTURE]: ShowPicture;

  [$.PLAY_BGM]: [value: AudioFileParams];
  [$.FADEOUT_BGM]: [duration: number];
  [$.PLAY_BGS]: [value: AudioFileParams];
  [$.PLAY_SE]: [value: AudioFileParams];
  [$.PLAY_ME]: [value: AudioFileParams];

  [$.SAVE_BGM]: [];
  [$.RESUME_BGM]: [];
  [$.SHOP_PROCESSING]: ShopProcessing;
  [$.SHOP_PROCESSING_BODY]: ShopGoods;
  [$.NAME_INPUT_PROCESSING]: [actorId: number, name: string];
  [$.CHANGE_HP]: [...ChanageActorVariable, allowDetah: boolean];
  [$.CHANGE_MP]: ChanageActorVariable;
  [$.CHANGE_TP]: ChanageActorVariable;

  [$.CHANGE_NAME]: [actorId: number, name: string];

  /**
   * @description Change Nickname
   */
  [$.CHANGE_NICKNAME]: [actorId: number, name: string];

  /**
   * @description Change Profile
   */
  [$.CHANGE_PROFILE]: [actorId: number, name: string];

  /**
   * @description  Script Eval
   */
  [$.SCRIPT_EVAL]: [script: string];
  /**
   * @description  Script Eval(body)
   */
  [$.SCRIPT_EVAL_BODY]: [script: string];

  /**
   * @description  Plugin Command (MZ)
   */
  [$.PLUGIN_COMMAND_MV]: [data: string];

  /**
   * @description  Plugin Command (MZ)
   */
  [$.PLUGIN_COMMAND_MZ]: [
    filename: string,
    commandName: string,
    anything: string,
    args: Record<string, string>
  ];
};
