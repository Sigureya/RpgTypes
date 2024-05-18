import type { CommandParameters } from "@schema/paramaters";
import type * as $ from "@schema/paramaters/codes";
import type { EventCommand } from "@schema/types";
import { Game_Actor } from "./Game_Actor";
import { Game_Battler } from "./Game_Battler";
import { OPERAND_TYPE, OPERATION } from "@schema/paramaters/operateValue";

export declare class Game_Interpreter extends Game_EventCommandExecuter {
  constructor(depth: number);
  clear(): void;
  setup(list: EventCommand[], eventId: number): void;
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
    param1: number,
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
    operandType: typeof OPERAND_TYPE.VARIABLE | typeof OPERAND_TYPE.CONSTANT,
    operand: number
  ): number;

  changeHp(target: Game_Battler, value: number, allowDeath: boolean): void;

  setupChoices(params: CommandParameters[typeof $.SHOW_CHOICES]): void;
  setupNumInput(param: CommandParameters[typeof $.INPUT_NUMBER]): void;
  setupItemChoice(param: CommandParameters[typeof $.SELECT_ITEM]): void;

  setupChild(list: EventCommand[], eventId: number): void;
  jumpTo(index: number): void;
  gameDataOperand(type: number, param1: number, param2: number): number;
}

// イベントコマンドの定義用 直接は触れないでほしいのでexportしない
declare class Game_EventCommandExecuter {
  command101(param: CommandParameters[typeof $.SHOW_MESSAGE]): boolean;
  command102(param: CommandParameters[typeof $.SHOW_CHOICES]): boolean;
  command103(param: CommandParameters[typeof $.INPUT_NUMBER]): boolean;
  command104(param: CommandParameters[typeof $.SELECT_ITEM]): boolean;
  command105(param: CommandParameters[typeof $.SHOW_SCROLLING_TEXT]): boolean;
  command108(param: CommandParameters[typeof $.COMMENT]): boolean;

  command109(param: CommandParameters[typeof $.SKIP]): boolean;
  command111(param: CommandParameters[typeof $.CONDITIONAL_BRANCH]): boolean;
  command112(param: CommandParameters[typeof $.LOOP]): boolean;
  command113(param: CommandParameters[typeof $.LOOP_BREAK]): boolean;
  command115(param: CommandParameters[typeof $.EXIT_EVENT_PROCESSING]): boolean;
  command117(param: CommandParameters[typeof $.COMMON_EVENT]): boolean;
  command118(param: CommandParameters[typeof $.LABEL]): boolean;
  command119(param: CommandParameters[typeof $.LABEL_JUMP]): boolean;

  command121(param: CommandParameters[typeof $.CONTROL_SWITCHES]): boolean;
  command122(param: CommandParameters[typeof $.CONTROL_VARIABLES]): boolean;
  command123(param: CommandParameters[typeof $.CONTROL_SELF_SWITCH]): boolean;
  command124(param: CommandParameters[typeof $.CONTROL_TIMER]): boolean;

  command125(param: CommandParameters[typeof $.CHANGE_GOLD]): boolean;
  command126(param: CommandParameters[typeof $.CHANGE_ITEMS]): boolean;
  command127(param: CommandParameters[typeof $.CHANGE_WEAPONS]): boolean;
  command128(param: CommandParameters[typeof $.CHANGE_ARMORS]): boolean;
  command129(param: CommandParameters[typeof $.CHANGE_PARTY_MEMBER]): boolean;
  command132(param: CommandParameters[typeof $.CHANGE_GOLD]): boolean;
  command132(param: CommandParameters[typeof $.CHANGE_BATTLE_BGM]): boolean;
  command133(param: CommandParameters[typeof $.CHANGE_VICTORY_ME]): boolean;
  command134(param: CommandParameters[typeof $.CHANGE_SAVE_ACCESS]): boolean;
  command135(param: CommandParameters[typeof $.CHANGE_MENU_ACCESS]): boolean;
  command136(param: CommandParameters[typeof $.CHANGE_ENCOUNTER]): boolean;
  command137(
    param: CommandParameters[typeof $.CHANGE_FORMATION_ACCESS]
  ): boolean;

  command231(param: CommandParameters[typeof $.CHANGE_GOLD]): boolean;
  command241(param: CommandParameters[typeof $.CHANGE_GOLD]): boolean;
  command250(param: CommandParameters[typeof $.PLAY_SE]): boolean;

  command320(param: CommandParameters[typeof $.CHANGE_NAME]): boolean;
  command324(param: CommandParameters[typeof $.CHANGE_NICKNAME]): boolean;
  command325(param: CommandParameters[typeof $.CHANGE_PROFILE]): boolean;

  command357(param: CommandParameters[typeof $.PLUGIN_COMMAND_MZ]): boolean;
}
