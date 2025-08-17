import type { PickByTypeKeys } from "./pickByType";

export const mapKeys = <T, R>(
  data: T,
  keyList: ReadonlyArray<PickByTypeKeys<T, string>>,
  fn: (text: T[PickByTypeKeys<T, string>], key: PickByTypeKeys<T, string>) => R
): R[] => {
  return keyList.map((key: PickByTypeKeys<T, string>): R => fn(data[key], key));
};

export const mapKeysToObject = <T>(
  data: T,
  keyList: ReadonlyArray<PickByTypeKeys<T, string>>,
  fn: (
    text: T[PickByTypeKeys<T, string>],
    key: PickByTypeKeys<T, string>
  ) => [key: PickByTypeKeys<T, string>, value: string]
) => {
  return Object.fromEntries<string>(mapKeys(data, keyList, fn)) as Record<
    PickByTypeKeys<T, string>,
    string
  >;
};
