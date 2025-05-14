export interface ParamObject_WritingTarget {
    startId: number;
    endId?: number;
}
export interface ParamObject_Operand_Constant {
    value: number;
}
export interface ParamObject_Operand_Variable {
    operand: 1;
    variableId: number;
}
export interface ParamObject_Operand_Random {
    min: number;
    max: number;
}
export interface ParamObject_Operand_ItemData {
    type: 0 | 1 | 2;
    itemId: number;
}
export interface ParamObject_Operand_PartyData {
    type: 6;
    index: number;
}
export interface ParamObject_Operand_OtherData {
    type: 7;
    param: number;
}
