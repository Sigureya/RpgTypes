export const OPERATION = {
  ADD: 0,
  SUB: 1,
} as const;
export const CONSTANT_OR_VARIABLE = {
  CONSTANT: 1 as const,
  VARIABLE: 0 as const,
};
/**
 * 0 : variable, 1 : constant
 */
export type ConstatnOrVariable =
  | typeof CONSTANT_OR_VARIABLE.VARIABLE
  | typeof CONSTANT_OR_VARIABLE.CONSTANT;

export type OperateValueParams = [
  oparation: typeof OPERATION.ADD | typeof OPERATION.SUB,
  oprandType: ConstatnOrVariable,
  VariableIdOrValue: number
];

export type IterateActorEx = [targetSelect: ConstatnOrVariable, index: number];

export type ChanageActorVariable = [...IterateActorEx, ...OperateValueParams];
