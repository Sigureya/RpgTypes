import { filterStructs } from "./arraySchemaFilter";
import type {
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

interface GGG<T extends PluginParam> {
  struct: string;
  params: T[];
}

export const filterStructParam = (struct: PluginStructSchemaArray): SSSS => ({
  struct: struct.struct,
  params: struct.params.filter(isStructAttr),
});

export const filterStructParamEx = <T extends PluginParam>(
  struct: PluginStructSchemaArray,
  predicate: (param: PluginParam) => param is Extract<PluginParam, T>
) => ({
  struct: struct.struct,
  params: struct.params.filter((param): param is T => {
    return predicate(param);
  }),
});

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

const ggg = <T extends PluginParam>(
  structs: PluginStructSchemaArray[],
  predicate: (param: PluginParam) => param is T
): GGG<T>[] => {
  return structs.reduce<GGG<T>[]>((acc, s) => {
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
): PluginSchemaArray {
  const { directs, indirectsNames } = filterStructs(schema.structs, predicate);
  const s2: GGG<T>[] = ggg<T>(directs, predicate);
  const newCommands = cmdEx<T>(schema.commands, indirectsNames, predicate);

  return {
    structs: s2,
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
  commands: PluginCommandSchemaArray[],
  structNames: ReadonlySet<string>,
  predicate: (param: PluginParam) => param is T
): PluginCommandSchemaArrayGGG<T | PP>[] => {
  return commands
    .map(
      (cmd): PluginCommandSchemaArrayGGG<T | PP> => ({
        ...(cmd.desc ? { desc: cmd.desc } : {}),
        ...(cmd.text ? { text: cmd.text } : {}),
        command: cmd.command,
        args: paramsXXX(cmd.args, structNames, predicate),
      })
    )
    .filter((cmd) => cmd.args.length > 0);
};
