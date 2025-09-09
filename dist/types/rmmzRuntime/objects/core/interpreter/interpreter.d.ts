import { EventCode } from '../../../../rmmz/rpg';
import { WaitMode } from './constants/types';
import { InterpreterMapper } from './types/interpreterMethods';
export interface Rmmz_Interpreter<Coomand> extends InterpreterMapper {
    checkOverflow(): void;
    clear(): void;
    setup(list: Coomand[], eventId: number): void;
    loadImage(): void;
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
}
