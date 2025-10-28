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
  const s2: GGG<T>[] = directs.map((s) => ({
    struct: s.struct,
    params: s.params.filter((p) => predicate(p)),
  }));

  const c2 = cmdEx<T>(schema.commands, indirectsNames, predicate);

  const s3 = indirects.map(filterStructParam);
  return {
    structs: s2,
    commands: c2,
    params: schema.params,
  } satisfies PluginSchemaArray;
}

export const cmdEx = <T extends PluginParam>(
  commands: PluginCommandSchemaArray[],
  structNames: ReadonlySet<string>,
  predicate: (param: PluginParam) => param is T
): PluginCommandSchemaArrayGGG<T | PP>[] => {
  return commands.map(
    (cmd): PluginCommandSchemaArrayGGG<T | PP> => ({
      command: cmd.command,
      desc: cmd.desc,
      text: cmd.text,
      args: cmd.args.filter((param): param is PP | T => {
        return isStructAttr(param)
          ? structNames.has(param.attr.struct)
          : predicate(param);
      }),
    })
  );
};
