export interface VariableParam {
  code: number;
  variableId: number;
}

export interface VVV {
  write: VariableParam[];
  read: VariableParam[];
}
