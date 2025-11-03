import { textAndDesc } from "@RpgTypes/rmmz/utils";
import type {
  PluginCommandSchemaArrayEx3,
  PluginCommandTypeEx,
  PluginParam,
  PluginParamEx,
  PluginStructSchemaArray,
  PluginStructType,
  PrimitiveParam,
  ToObjectParams,
} from "./types";

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

export const convertStructSchema = <T extends PluginStructSchemaArray>(
  schema: T
): PluginStructType<object> => {
  return {
    struct: schema.struct,
    params: toObjectPluginParams(schema.params),
  };
};

export const convertPluginCommandSchema = <T extends PluginParam>(
  command: PluginCommandSchemaArrayEx3<T>
): PluginCommandTypeEx<object> => {
  return {
    ...textAndDesc(command),
    command: command.command,
    args: toObjectPluginParams(command.args),
  };
};
