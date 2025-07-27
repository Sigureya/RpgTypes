import { PickByType } from './pickByType';
export type PickableRecordType<T, Value> = Record<string & keyof PickByType<T, Value>, Value>;
export declare const pickPropertys: <Result, Value, T extends PickableRecordType<T, Value>>(data: T, keyList: ReadonlyArray<keyof PickableRecordType<T, string>>, fn: (key: string, value: Value, data: T) => Result) => Result[];
export declare const pickString: <Result, T extends PickableRecordType<T, string>>(data: T, keyList: ReadonlyArray<keyof PickableRecordType<T, string>>, fn: (key: string, value: string, data: T) => Result) => Result[];
