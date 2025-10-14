export interface SetPair<K extends string> {
    single: ReadonlySet<K>;
    array: ReadonlySet<`${K}[]`>;
}
export declare const makeKindsSet: <K extends string>(kinds: ReadonlyArray<K>) => SetPair<K>;
