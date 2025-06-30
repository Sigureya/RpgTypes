import type { PrimitiveParam } from "./primitiveParams";

export const reduceParams = <K extends string, P extends PrimitiveParam, R>(
  params: Record<K, P>,
  fn: (value: P, key: string) => R
): Record<K, R> => {
  const entries = Object.entries<P>(params).map(([key, value]) => ({
    [key]: fn(value, key),
  }));
  return entries.reduce<Record<K, R>>(
    (acc, curr) => ({ ...acc, ...curr }),
    {} as Record<K, R>
  );
};

export const paramsToObject = <
  T extends Record<string, PrimitiveParam & { default: unknown }>
>(
  data: T
): ParamToObject<T> =>
  reduceParams(data, (value) => value.default) as ParamToObject<T>;

export type ParamToObject<
  T extends Record<
    string,
    {
      default: unknown;
    }
  >
> = {
  [K in keyof T]: T[K] extends { default: infer D } ? D : never;
};
