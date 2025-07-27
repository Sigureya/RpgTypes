/**
 * type Example = PickByType<{ age: number; name: string }, string>; // { name: string }
 */
export type PickByType<T, V> = Pick<
  T,
  { [K in keyof T]: T[K] extends V ? K : never }[keyof T]
>;

export type PickByTypeKeys<T, V> = Extract<keyof PickByType<T, V>, string>;

/**
 * @deprecated
 * @see PickByType
 */
export type FilterByValue<T, V> = PickByType<T, V>;

export type OmitByType<T, V> = Omit<
  T,
  { [K in keyof T]: T[K] extends V ? K : never }[keyof T]
>;

/**
 * type Example = StringKeysWithoutNote<{ age: number; name: string; note: string; }>; // { name: string }
 */
export type StringKeysWithoutNote<T> = Exclude<
  keyof PickByType<T, string>,
  "note"
>;

/**
 * type Example = AsRecord<[number,string]>  // { 0: number, 1: string }
 */
export type AsRecord<P extends unknown[]> = {
  [K in Extract<keyof P, `${number}`>]: P[K];
};
