export interface EventCommandBase {
    code: number;
    indent: number;
    parameters: unknown[];
}
export interface EventCommandLike2<Code extends number, Param extends unknown[] = unknown[]> extends EventCommandBase {
    code: Code;
    indent: number;
    parameters: Param;
}
export type ReadonlyEventCommand<T extends EventCommandBase> = {
    readonly code: T["code"];
    readonly indent: number;
    readonly parameters: Readonly<T["parameters"]>;
};
