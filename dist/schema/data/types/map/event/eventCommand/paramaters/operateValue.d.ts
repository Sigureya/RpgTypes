import type { Designation, Operation_PlusMinus, ValueOf } from "./constants";
export type OperateValueParams = [
    oparation: ValueOf<Operation_PlusMinus>,
    oprandType: ValueOf<Designation>,
    VariableIdOrValue: number
];
export type IterateActorEx = [
    targetSelect: ValueOf<Designation>,
    index: number
];
export type ChanageActorVariable = [...IterateActorEx, ...OperateValueParams];
