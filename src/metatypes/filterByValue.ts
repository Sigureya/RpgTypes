/**
 * type Example = FilterByValue<{ age: number; name: string }, string>; // { name: string }
 */
export type FilterByValue<T, V> = Pick<
  T,
  { [K in keyof T]: T[K] extends V ? K : never }[keyof T]
>;

/**
 * type Example = FilterByValue<{ age: number; name: string; note: string; }>; // { name: string }
 */
export type StringKeysWithoutNote<T> = Exclude<
  keyof FilterByValue<T, string>,
  "note"
>;
