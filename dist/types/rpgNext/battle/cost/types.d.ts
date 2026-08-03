export interface ActionTotalCost {
    hp: number;
    mp: number;
    tp: number;
    variable: CustomCost[];
}
export interface CustomCost {
    costType: number;
    value: number;
    dataId: number;
}
export interface ActionCost {
    code: number;
    value: number;
    dataId: number;
}
