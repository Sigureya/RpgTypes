import { filterStructs } from "./arraySchemaFilter";
import type {
  PluginStructSchemaArrayEx,
  PluginCommandSchemaArray,
  PluginParam,
  PluginSchemaArray,
  PluginStructSchemaArray,
} from "./arraySchemaTypes";
import type {
  PluginCommandSchemaArrayGGG,
  PP,
  SSSS,
} from "./arraySchemaTypes2";
import { isStructAttr } from "./arraySchemaUtils";
import { isNumberValueParam, paramHasText } from "./typeTest";

export const filterStructParam = (struct: PluginStructSchemaArray): SSSS => ({
  struct: struct.struct,
  params: struct.params.filter(isStructAttr),
});

export const filterPluginSchemaByStringParam = (schema: PluginSchemaArray) => {
  return filterPluginSchemaByParam(schema, (param) => paramHasText(param.attr));
};

export const filterPluginSchemaByNumberParam = (schema: PluginSchemaArray) => {
  return filterPluginSchemaByParam(schema, (param) =>
    isNumberValueParam(param.attr)
  );
};

export function filterPluginSchemaByParam<T extends PluginParam>(
  schema: PluginSchemaArray,
  predicate: (param: PluginParam) => param is T
): PluginSchemaArray;

export function filterPluginSchemaByParam(
  schema: PluginSchemaArray,
  predicate: (param: PluginParam) => boolean
): PluginSchemaArray;

export function filterPluginSchemaByParam<T extends PluginParam>(
  schema: PluginSchemaArray,
  predicate:
    | ((param: PluginParam) => param is T)
    | ((param: PluginParam) => boolean)
) {
  return cccc2<T>(schema, predicate as (param: PluginParam) => param is T);
}

const pickStructParams = <T extends PluginParam>(
  structs: PluginStructSchemaArray[],
  predicate: (param: PluginParam) => param is T
): PluginStructSchemaArrayEx<T>[] => {
  return structs.reduce<PluginStructSchemaArrayEx<T>[]>((acc, s) => {
    const params: T[] = s.params.filter((p): p is T => predicate(p));
    if (params.length === 0) {
      return acc;
    }
    acc.push({ struct: s.struct, params });
    return acc;
  }, []);
};

function cccc2<T extends PluginParam>(
  schema: PluginSchemaArray,
  predicate: (param: PluginParam) => param is T
) {
  const { directs, indirectsNames } = filterStructs(schema.structs, predicate);
  const newStructs: PluginStructSchemaArrayEx<T>[] = pickStructParams<T>(
    directs,
    predicate
  );
  const newCommands = cmdEx<T>(schema.commands, indirectsNames, predicate);

  return {
    structs: newStructs,
    commands: newCommands,
    params: paramsXXX(schema.params, indirectsNames, predicate),
  };
}

const paramsXXX = <T extends PluginParam>(
  params: ReadonlyArray<PluginParam>,
  structNames: ReadonlySet<string>,
  predicate: (param: PluginParam) => param is T
): (T | PP)[] => {
  return params.filter((param): param is T | PP => {
    return isStructAttr(param)
      ? structNames.has(param.attr.struct)
      : predicate(param);
  });
};

export const cmdEx = <T extends PluginParam>(
  commands: ReadonlyArray<PluginCommandSchemaArray>,
  structNames: ReadonlySet<string>,
  predicate: (param: PluginParam) => param is T
): PluginCommandSchemaArrayGGG<T | PP>[] => {
  type R = PluginCommandSchemaArrayGGG<T | PP>;
  return commands.reduce<R[]>((acc, cmd): R[] => {
    const args: (T | PP)[] = paramsXXX(cmd.args, structNames, predicate);
    if (args.length === 0) {
      return acc;
    }
    acc.push({
      ...(cmd.desc ? { desc: cmd.desc } : {}),
      ...(cmd.text ? { text: cmd.text } : {}),
      command: cmd.command,
      args: args,
    });
    return acc;
  }, []);
};
