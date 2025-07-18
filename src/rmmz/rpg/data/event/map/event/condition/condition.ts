export interface MapEvent_PageCondition {
  switch1Id: number;
  switch1Valid: boolean;
  switch2Id: number;
  switch2Valid: boolean;
  variableId: number;
  variableValid: boolean;
  variableValue: number;
  selfSwitchCh: string;
  selfSwitchValid: boolean;
  itemId: number;
  itemValid: boolean;
  actorId: number;
  actorValid: boolean;
}

export interface PageConditionArg {
  switch1Id: number;
  switch2Id: number;
  variableId: number;
  variableValue: number;
  selfSwitchCh: string;
  itemId: number;
  actorId: number;
}
