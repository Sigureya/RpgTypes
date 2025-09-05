import { EventCommandLike } from '../../../frame';
import { CHANGE_EXP } from '../../../../rpg';
import { DIRECT, VARIABLE } from './constants';
export interface Command_ChangeExp extends EventCommandLike<typeof CHANGE_EXP> {
    parameters: ParamArray_ChangeExp;
}
export type ParamArray_ChangeExp = [
    disignation: typeof DIRECT | typeof VARIABLE,
    operation: number,
    valueType: number,
    value: number,
    showMessaage: boolean
];
