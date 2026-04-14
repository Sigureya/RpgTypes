export interface Operand {
    mode: "variable" | "direct";
    value: number;
}
export interface TargetEach {
    mode: "each";
}
export interface Target {
    mode: "variable" | "direct";
    value: number;
}
