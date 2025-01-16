import type { Designation, Operation_PlusMinus, ValueOf } from "./constants";
import type { ConstatnOrVariable } from "./operateValue";
export type OperateValueParams = [
    oparation: ValueOf<Operation_PlusMinus>,
    oprandType: ValueOf<Designation>,
    VariableIdOrValue: number
];
export type IterateActorEx = [targetSelect: ConstatnOrVariable, index: number];
export type ChanageActorVariable = [...IterateActorEx, ...OperateValueParams];
