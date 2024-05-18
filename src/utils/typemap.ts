import { IsSame } from "../types/types";

export type Pair<Key, Value> = { key: Key; value: Value };

type GetType<T, Key, Value> = IsSame<T, Key> extends true ? Value : never;
