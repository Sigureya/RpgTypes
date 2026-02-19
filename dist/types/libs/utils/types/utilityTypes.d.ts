export type IdentifiedItems<T> = [null, ...T[]];
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Record<string, unknown> ? DeepPartial<T[P]> : T[P];
};
export type MemberFunctions<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => unknown ? {
        fn: K;
        args: Parameters<T[K]>;
    } : never;
}[keyof T];
