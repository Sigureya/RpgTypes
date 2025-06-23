import type { StructParamPrimitive } from "./primitiveParams";

export const compileParams = <
  K extends string,
  P extends StructParamPrimitive,
  R
>(
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

export const paramToObject = <
  T extends Record<string, StructParamPrimitive & { default: unknown }>
>(
  data: T
): ParamToObject<T> =>
  compileParams(data, (value) => value.default) as ParamToObject<T>;

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
