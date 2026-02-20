import type { EventCode } from "@RpgTypes/libs/eventCommand";
import type { WaitMode } from "./constants/types";

export interface Rmmz_Interpreter<Coomand> {
  checkOverflow(): void;
  clear(): void;
  setup(list: Coomand[], eventId: number): void;
  loadImages(): void;
  eventId(): number;
  isOnCurrentMap(): boolean;
  setupReservedCommonEvent(): boolean;
  operateValue(operation: number, operandType: number, operand: number): number;
  changeHp(target: unknown, value: number, allowDeath: boolean): void;
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
  currentCommand(): Coomand | undefined;
  nextEventCode(): EventCode | 0;
  setupItemChoice(params: unknown): void;
  setupNumInput(params: unknown): void;
  gameDataOperand(type: number, param1: number, param2: number): number;
}
