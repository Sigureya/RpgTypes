export interface ActionVariableSchema {
  key: string;
  initialValue: number;
  id: number;
  name: string;
  min: number;
  max: number;
}

export interface VariableCodeTable {
  add: number;
  subtract: number;
  multiply: number;
  set: number;
}

export interface ParamObject_GetEnemyVariable {
  dataId: number;
  fallbackValue: number;
}
