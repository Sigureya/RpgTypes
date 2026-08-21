import { Command_InputNumber, Command_ShowChoices } from '../../rmmz';
import { InterpreterState2 } from './types';
import { Rmmz_Message } from '../../rmmzRuntime';
export declare const setupChoiceNN: (state: InterpreterState2, command: Command_ShowChoices, message: Rmmz_Message) => InterpreterState2 | undefined;
export declare const setupNumberInputNN: (state: InterpreterState2, command: Command_InputNumber, message: Rmmz_Message) => InterpreterState2 | undefined;
