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

export function cccc<T extends PluginParam>(
  schema: PluginSchemaArray,
  predicate: (param: PluginParam) => param is T
): PluginSchemaArray;

export function cccc(
  schema: PluginSchemaArray,
  predicate: (param: PluginParam) => boolean
): PluginSchemaArray;

export function cccc<T extends PluginParam>(
  schema: PluginSchemaArray,
  predicate:
    | ((param: PluginParam) => param is T)
    | ((param: PluginParam) => boolean)
) {
  return cccc2<T>(schema, predicate as (param: PluginParam) => param is T);
}

function cccc2<T extends PluginParam>(
  schema: PluginSchemaArray,
  predicate: (param: PluginParam) => param is T
): PluginSchemaArray {
  const { directs, indirects, indirectsNames } = filterStructs(
    schema.structs,
    predicate
  );
  const s3 = pxpx(indirects, (param): param is T | PP =>
    isStructAttr(param)
      ? indirectsNames.has(param.attr.struct)
      : predicate(param)
  );

  const s2: GGG<T>[] = directs
    .map((s) => ({
      struct: s.struct,
      params: s.params.filter((p) => predicate(p)),
    }))
    .filter((s) => s.params.length > 0);

  const newCommands = cmdEx<T>(schema.commands, indirectsNames, predicate);

  return {
    structs: s2,
    commands: newCommands,
    params: schema.params,
  } satisfies PluginSchemaArray;
}

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
        args: cmd.args.filter((param): param is PP | T => {
          return isStructAttr(param)
            ? structNames.has(param.attr.struct)
            : predicate(param);
        }),
      })
    )
    .filter((cmd) => cmd.args.length > 0);
};

const pxpx = <T extends PluginParam>(
  structs: PluginStructSchemaArray[],
  fn: (param: PluginParam) => param is T
): PluginStructSchemaArray[] => {
  return structs.reduce<PluginStructSchemaArray[]>((acc, struct) => {
    const newParams: T[] = struct.params.filter((p) => fn(p));
    if (newParams.length === 0) {
      return acc;
    }

    acc.push({
      struct: struct.struct,
      params: newParams,
    });
    return acc;
  }, []);
};
