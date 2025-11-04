import { textAndDesc } from "@RpgTypes/rmmz/utils";
import type {
  PluginCommandSchemaArrayEx3,
  PluginCommandTypeEx,
  PluginParam,
  PluginParamEx,
  PluginStructSchemaArray,
  PluginStructType,
  PrimitiveParam,
  ObjectParamsV5,
} from "./types";

export function toObjectPluginParams(
  params: ReadonlyArray<PluginParam>
): Record<string, PrimitiveParam> {
  const e = params.map((p): [string, PrimitiveParam] => [p.name, p.attr]);
  return Object.fromEntries(e);
}

export const toArrayPluginParam = <T extends PrimitiveParam, K extends string>(
  params: ObjectParamsV5<K & string, T>
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
