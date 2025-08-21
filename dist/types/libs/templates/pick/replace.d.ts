import { PickByTypeKeys } from './pickByType';
export declare const mapKeys: <T, R>(data: T, keyList: ReadonlyArray<PickByTypeKeys<T, string>>, fn: (text: T[PickByTypeKeys<T, string>], key: PickByTypeKeys<T, string>) => R) => R[];
export declare const mapKeysToObject: <T, List extends ReadonlyArray<PickByTypeKeys<T, string>>>(data: T, keyList: List, fn: (text: T[PickByTypeKeys<T, string>], key: PickByTypeKeys<T, string>) => [key: PickByTypeKeys<T, string>, value: string]) => Record<List[number], string>;
