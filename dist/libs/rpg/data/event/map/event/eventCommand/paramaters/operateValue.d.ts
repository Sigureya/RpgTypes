import { ValueOf } from '../../../../../../../templates/valueOf';
import { Designation, Operation_PlusMinus } from './constants';
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
