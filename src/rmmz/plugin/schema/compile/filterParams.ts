import type { CommandArgsSchemaMap, FilteredPluginSchema } from "./filtedTypes";
import type { PrimitiveParam } from "./kinds";
import type {
  PluginStructBody,
  PluginCommandBody,
  PluginJSON,
} from "./kinds/core/pluginJSONTypes";

export const filterPluginSchemaByParam = <T extends PrimitiveParam>(
  p: PluginJSON,
  fn: (param: PrimitiveParam) => param is T
): FilteredPluginSchema<T> => {
  return {
    structs: structs(p.structs, fn),
    params: filterParams(p.params, fn),
    commands: commands(p.commands, fn),
  };
};

const filterParams = <T extends PrimitiveParam>(
  params: Record<string, PrimitiveParam>,
  fn: (param: PrimitiveParam) => param is T
): Record<string, T> => {
  const xx = Object.entries(params).filter((ar): ar is [string, T] =>
    fn(ar[1])
  );
  return Object.fromEntries(xx);
};

const structs = <T extends PrimitiveParam>(
  structs: Record<string, PluginStructBody<PrimitiveParam>>,
  fn: (param: PrimitiveParam) => param is T
): Record<string, PluginStructBody<T>> => {
  return Object.fromEntries(
    Object.entries(structs).map(
      ([name, struct]): [string, PluginStructBody<T>] => [
        name,
        { params: filterParams(struct.params, fn) },
      ]
    )
  );
};

const commands = <T extends PrimitiveParam>(
  commands: Record<string, PluginCommandBody>,
  fn: (param: PrimitiveParam) => param is T
): CommandArgsSchemaMap<T> => {
  return Object.fromEntries(
    Object.entries(commands).map(([name, command]) => [
      name,
      { args: filterParams(command.args, fn) },
    ])
  );
};
