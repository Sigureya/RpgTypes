import type { OPERATION, CONSTANT_OR_VARIABLE } from "./constants";
export * from "./constants";
/**
 * 0 : variable, 1 : constant
 */
export type ConstatnOrVariable = typeof CONSTANT_OR_VARIABLE.VARIABLE | typeof CONSTANT_OR_VARIABLE.CONSTANT;
export type OperateValueParams = [
    oparation: typeof OPERATION.ADD | typeof OPERATION.SUB,
    oprandType: ConstatnOrVariable,
    VariableIdOrValue: number
];
export type IterateActorEx = [targetSelect: ConstatnOrVariable, index: number];
export type ChanageActorVariable = [...IterateActorEx, ...OperateValueParams];
