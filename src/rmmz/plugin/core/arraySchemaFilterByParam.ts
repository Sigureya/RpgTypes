import { findIndirectsFunctional } from "./arraySchemaFilter";
import type {
  PluginCommandSchemaArray,
  PluginParam,
  PluginParamEx,
  PluginSchemaArray,
  PluginStructSchemaArray,
  PluginStructSchemaArrayEx,
} from "./arraySchemaTypes";
import type { PluginCommandSchemaArrayGGG, PP } from "./arraySchemaTypes2";
import type { PrimitiveParam, PrimitiveStringParam } from "./paramUnion";
import type { StringArrayParam } from "./primitiveParams";
import {
  hasTextAttr,
  isNumberAttr,
  isStructAttr,
  isVariableAttr,
} from "./typeTest";

export const filterPluginSchemaByStringParam = (schema: PluginSchemaArray) => {
  type Type = PrimitiveStringParam | StringArrayParam;
  return cccc2<PluginParamEx<Type>>(schema, hasTextAttr);
};

export const filterPluginSchemaByNumberParam = (schema: PluginSchemaArray) => {
  type Type = Extract<PrimitiveParam, { default: number[] | number }>;
  return cccc2<PluginParamEx<Type>>(schema, isNumberAttr);
};

export const filterPluginSchemaByVariableParam = (
  schema: PluginSchemaArray
) => {
  type Type = Extract<PrimitiveParam, { kind: "variable" | "variable[]" }>;
  return cccc2<PluginParamEx<Type>>(schema, isVariableAttr);
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

function cccc2<T extends PluginParam>(
  schema: PluginSchemaArray,
  predicate: (param: PluginParam) => param is T
) {
  const base = schema.structs.filter((s) => {
    return s.params.some((p) => predicate(p));
  });
  const gg = new Set<string>(base.map((s) => s.struct));
  const s3: Set<string> = findIndirectsFunctional(schema.structs, gg);
  const newStructs = rebuildStructs(schema.structs, s3, predicate);
  return {
    structs: newStructs,
    commands: cmdEx(schema.commands, s3, predicate),
    params: paramsXXX(schema.params, s3, predicate),
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

const rebuildStructs = <T extends PluginParam>(
  structs: ReadonlyArray<PluginStructSchemaArray>,
  structNames: ReadonlySet<string>,
  predicate: (param: PluginParam) => param is T
): PluginStructSchemaArrayEx<T | PP>[] => {
  type XX = PluginStructSchemaArrayEx<T | PP>;
  return structs.reduce<XX[]>((acc, struct) => {
    const params: (T | PP)[] = paramsXXX(struct.params, structNames, predicate);
    if (params.length === 0) {
      return acc;
    }
    acc.push({ struct: struct.struct, params: params });
    return acc;
  }, []);
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
