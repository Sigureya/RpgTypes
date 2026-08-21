import { Rmmz_Variables } from './types';
export declare const operateValue: (variables: Rmmz_Variables, operantion: number, operandType: 0 | 1, operandValue: number) => number;
export interface Provider_Target<T> {
    allMembers: () => T[];
    gameActor: (actorId: number) => T | undefined;
}
