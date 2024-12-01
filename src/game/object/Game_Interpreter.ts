import type {
  ConstatnOrVariable,
  OPERATION,
  CommandParameters,
  EventCommand,
} from "../../schema";
import type { Game_Actor } from "./Game_Actor";
import type { Game_Battler } from "./Game_Battler";

export declare class Game_Interpreter extends Game_EventCommandExecuter {
  constructor(depth: number);
  constructor();
  clear(): void;
  setup(list: EventCommand[], eventId: number): void;
  setup(list: EventCommand[]): void;
  loadImages(): void;
  eventId(): number;
  isOnCurrentMap(): boolean;
  setupReservedCommonEvent(): boolean;
  isRunning(): boolean;
  update(): void;
  updateChild(): boolean;
  updateWait(): boolean;
  updateWaitCount(): boolean;
  updateWaitMode(): boolean;
  setWaitMode(waitMode: string): void;
  wait(duration: number): void;
  fadeSpeed(): number;
  executeCommand(): boolean;
  checkFreeze(): boolean;
  terminate(): void;
  skipBranch(): void;
  currentCommand(): EventCommand | undefined;
  nextEventCode(): keyof CommandParameters;

  iterateActorId(param: number, callback: (actor: Game_Actor) => void): void;
  iterateActorEx(
    param1: ConstatnOrVariable,
    param2: number,
    callback: (actor: Game_Actor) => void
  ): void;
  iterateActorIndex(param: number, callback: (actor: Game_Actor) => void): void;
  iterateBattler(
    param1: number,
    param2: number,
    callback: (battler: Game_Battler) => void
  ): void;
  character(param: number): void;
  /**
   *
   * @param operation 0 : Add , 1 : Sub
   * @param operandType
   * @param operand
   */
  operateValue(
    operation: typeof OPERATION.ADD | typeof OPERATION.SUB,
    operandType: ConstatnOrVariable,
    operand: number
  ): number;

  changeHp(target: Game_Battler, value: number, allowDeath: boolean): void;

  setupChoices(params: CommandParameters["SHOW_CHOICES"]): void;
  setupNumInput(param: CommandParameters["INPUT_NUMBER"]): void;
  setupItemChoice(param: CommandParameters["SELECT_ITEM"]): void;

  setupChild(list: EventCommand[], eventId: number): void;
  jumpTo(index: number): void;
  gameDataOperand(type: number, param1: number, param2: number): number;
}

// イベントコマンドの定義用 直接は触れないでほしいのでexportしない
declare class Game_EventCommandExecuter {
  command101(param: CommandParameters["SHOW_MESSAGE"]): boolean;
  command102(param: CommandParameters["SHOW_CHOICES"]): boolean;
  command103(param: CommandParameters["INPUT_NUMBER"]): boolean;
  command104(param: CommandParameters["SELECT_ITEM"]): boolean;
  command105(param: CommandParameters["SHOW_SCROLLING_TEXT"]): boolean;
  command108(param: CommandParameters["COMMENT"]): boolean;

  command109(param: CommandParameters["SKIP"]): boolean;
  command111(param: CommandParameters["CONDITIONAL_BRANCH"]): boolean;
  command112(param: CommandParameters["LOOP"]): boolean;
  command113(param: CommandParameters["LOOP_BREAK"]): boolean;
  command115(param: CommandParameters["EXIT_EVENT_PROCESSING"]): boolean;
  command117(param: CommandParameters["COMMON_EVENT"]): boolean;
  command118(param: CommandParameters["LABEL"]): boolean;
  command119(param: CommandParameters["LABEL_JUMP"]): boolean;

  command121(param: CommandParameters["CONTROL_SWITCHES"]): boolean;
  command122(param: CommandParameters["CONTROL_VARIABLES"]): boolean;
  command123(param: CommandParameters["CONTROL_SELF_SWITCH"]): boolean;
  command124(param: CommandParameters["CONTROL_TIMER"]): boolean;

  command125(param: CommandParameters["CHANGE_GOLD"]): boolean;
  command126(param: CommandParameters["CHANGE_ITEMS"]): boolean;
  command127(param: CommandParameters["CHANGE_WEAPONS"]): boolean;
  command128(param: CommandParameters["CHANGE_ARMORS"]): boolean;
  command129(param: CommandParameters["CHANGE_PARTY_MEMBER"]): boolean;
  command132(param: CommandParameters["CHANGE_GOLD"]): boolean;
  command132(param: CommandParameters["CHANGE_BATTLE_BGM"]): boolean;
  command133(param: CommandParameters["CHANGE_VICTORY_ME"]): boolean;
  command134(param: CommandParameters["CHANGE_SAVE_ACCESS"]): boolean;
  command135(param: CommandParameters["CHANGE_MENU_ACCESS"]): boolean;
  command136(param: CommandParameters["CHANGE_ENCOUNTER"]): boolean;
  command137(param: CommandParameters["CHANGE_FORMATION_ACCESS"]): boolean;

  command231(param: CommandParameters["SHOW_PICTURE"]): boolean;
  command241(param: CommandParameters["PLAY_BGM"]): boolean;
  command250(param: CommandParameters["PLAY_SE"]): boolean;
  command311(param: CommandParameters["CHANGE_HP"]): boolean;
  command312(param: CommandParameters["CHANGE_MP"]): boolean;
  command313(param: CommandParameters["CHANGE_TP"]): boolean;

  command320(param: CommandParameters["CHANGE_NAME"]): boolean;
  command324(param: CommandParameters["CHANGE_NICKNAME"]): boolean;
  command325(param: CommandParameters["CHANGE_PROFILE"]): boolean;

  command357(param: CommandParameters["PLUGIN_COMMAND_MZ"]): boolean;
}
