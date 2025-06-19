export declare const stringlfyArray: (array: ReadonlyArray<string | number | boolean | object>) => string;
export declare const stringlfyArrayImple: (array: ReadonlyArray<string | number | boolean | object>, knows?: Set<object>) => string[];
export declare const stringlfyObject: <T extends object>(object: Exclude<T, unknown[]>) => string;
