import type { PluginParamEx, PrimitiveParam, ToObjectParams } from "./types";

export function toObjectPluginParams<
  T extends PrimitiveParam,
  K extends string
>(params: ReadonlyArray<PluginParamEx<T, K>>): ToObjectParams<T, K> {
  const e = params.map((p): [K, T] => [p.name, p.attr]);
  return Object.fromEntries<T>(e) as ToObjectParams<T, K>;
}

export const toArrayPluginParam = <T extends PrimitiveParam, K extends string>(
  params: ToObjectParams<T, K & string>
): PluginParamEx<T, string & K>[] => {
  return Object.entries<T>(params as Record<string & K, T>).map(
    ([name, attr]): PluginParamEx<T, K & string> => {
      return {
        name: name as Extract<K, string>,
        attr: attr,
      };
    }
  );
};
