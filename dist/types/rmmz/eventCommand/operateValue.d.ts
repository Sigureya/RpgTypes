import { Command_ChangeArmors, Command_ChangeItems, Command_ChangeWeapons } from './commands/item/change';
import { Command_ChangeGold } from './commands/party/types/changeGold';
import { OperateValueHandlers } from './runtime/operateValue/types';
export declare const OPERATION_POSITIVE: 0;
export declare const operateValue: <Result, T>(operation: number, operandType: number, operand: number, handlers: OperateValueHandlers<Result, T>) => Result;
export declare const operateValueChangeGoods: <T, V>({ parameters, }: Command_ChangeArmors | Command_ChangeItems | Command_ChangeWeapons, handlers: OperateValueHandlers<T, V>) => T;
export declare const operateValueChangeGold: <T, V>(command: Command_ChangeGold, handlers: OperateValueHandlers<T, V>) => T;
