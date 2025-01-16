import type { Designation, Operation_AddSub, ValueOf } from "../constants";
/**
 * 0 : variable, 1 : constant
 */
export type ConstatnOrVariable = ValueOf<Designation>;
export type OperateValueParams = [
    oparation: ValueOf<Operation_AddSub>,
    oprandType: ValueOf<Designation>,
    VariableIdOrValue: ValueOf<Designation>
];
export type IterateActorEx = [
    targetSelect: ValueOf<Designation>,
    index: number
];
export type ChanageActorVariable = [...IterateActorEx, ...OperateValueParams];
