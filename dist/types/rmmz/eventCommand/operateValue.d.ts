import { Command_ChangeArmors2 } from './commands/item/types/armor';
import { Command_ChangeItems2 } from './commands/item/types/item';
import { Command_ChangeWeapons2 } from './commands/item/types/weapon';
import { Command_ChangeGold2 } from './commands/party/gold/changeGold';
import { OperateValueHandlers } from './runtime/operateValue/types';
export declare const OPERATION_POSITIVE: 0;
export declare const operateValue: <Result, T>(operation: number, operandType: number, operand: number, handlers: OperateValueHandlers<Result, T>) => Result;
export declare const operateValueChangeGoods: <T, V>({ parameters, }: Command_ChangeArmors2 | Command_ChangeItems2 | Command_ChangeWeapons2, handlers: OperateValueHandlers<T, V>) => T;
export declare const operateValueChangeGold: <T, V>(command: Command_ChangeGold2, handlers: OperateValueHandlers<T, V>) => T;
