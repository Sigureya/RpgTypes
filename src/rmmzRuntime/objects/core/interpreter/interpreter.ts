import type { EventCode } from "@RpgTypes/libs/eventCommand";
import type {
  ParamArray_InputNumber,
  ParamArray_SelectItem,
} from "@RpgTypes/rmmz/eventCommand";
import type { WaitMode } from "./constants/types";

export interface Rmmz_EventCommandRunner<Command> {
  checkOverflow(): void;
  clear(): void;
  setup(list: Command[], eventId: number): void;
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
  setWaitMode<Mode extends string = WaitMode>(waitMode: Mode): void;
  wait(duration: number): void;
  fadeSpeed(): number;
  executeCommand(): boolean;
  checkFreeze(): boolean;
  terminate(): void;
  skipBranch(): void;
  currentCommand(): Command | undefined;
  nextEventCode(): EventCode | 0;
  setupItemChoice(params: ParamArray_SelectItem): void;
  setupNumInput(params: ParamArray_InputNumber): void;
  operateValue(operation: number, operandType: number, operand: number): number;
  gameDataOperand(type: number, param1: number, param2: number): number;
}
