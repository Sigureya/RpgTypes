export interface ParamBase {
    kind: string;
    desc?: string;
    text?: string;
    parent?: string;
}
export interface ArrayParamBase<T> extends ParamBase {
    kind: `${string}[]`;
    default?: T[];
}
