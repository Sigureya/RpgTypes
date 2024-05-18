export const OPERATION = {
  ADD: 0,
  SUB: 1,
} as const;
export const OPERAND_TYPE = {
  CONSTANT: 1 as const,
  VARIABLE: 0 as const,
};

export type OperateValueParams = [
  oparation: typeof OPERATION.ADD | typeof OPERATION.SUB,
  oprandType: typeof OPERAND_TYPE.VARIABLE | typeof OPERAND_TYPE.CONSTANT,
  VariableIdOrValue: number
];

export type ChanageActorVariable = [
  actorId: number,
  variableId: number,
  ...OperateValueParams
];
