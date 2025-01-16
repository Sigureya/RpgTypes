import type { Operation, ValueOf } from "./constants";

/**
 * 0 : variable, 1 : constant
 */
export type ConstatnOrVariable =
  | typeof CONSTANT_OR_VARIABLE.VARIABLE
  | typeof CONSTANT_OR_VARIABLE.CONSTANT;

export type OperateValueParams = [
  oparation: ValueOf<Operation>,
  oprandType: ConstatnOrVariable,
  VariableIdOrValue: number
];

export type IterateActorEx = [targetSelect: ConstatnOrVariable, index: number];

export type ChanageActorVariable = [...IterateActorEx, ...OperateValueParams];
