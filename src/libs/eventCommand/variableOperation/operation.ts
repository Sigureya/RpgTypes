export const OPERATION_SET = 0 as const;
export const OPERATION_ADD = 1 as const;
export const OPERATION_SUBTRACT = 2 as const;
export const OPERATION_MULTIPLY = 3 as const;
export const OPERATION_DIVIDE = 4 as const;
export const OPERATION_MOD = 5 as const;

export type VariableOperation =
  | typeof OPERATION_SET
  | typeof OPERATION_ADD
  | typeof OPERATION_SUBTRACT
  | typeof OPERATION_MULTIPLY
  | typeof OPERATION_DIVIDE
  | typeof OPERATION_MOD;
