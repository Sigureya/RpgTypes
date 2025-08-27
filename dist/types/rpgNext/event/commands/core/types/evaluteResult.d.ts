export interface EvaluteResultNumber {
    type: "number";
    value: number;
}
export interface EvaluteResultString {
    type: "string";
    value: string;
}
export interface EvaluteResultBoolean {
    type: "boolean";
    value: boolean;
}
export type EvaluteResult = EvaluteResultNumber | EvaluteResultString | EvaluteResultBoolean;
