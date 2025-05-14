export interface EventCommandLike2<Code extends number, Param extends unknown[] = unknown[]> {
    code: Code;
    indent: number;
    parameters: Param;
}
export interface Converter<ParamObject extends {}, ParamArray extends unknown[]> {
    fromArray: (array: ParamArray) => ParamObject;
    toArray: (object: ParamObject) => ParamArray;
    makeCommand(param?: Partial<ParamObject>, indent?: number): EventCommandLike2<number>;
}
