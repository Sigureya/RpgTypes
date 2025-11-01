import { findIndirectsFunctional } from "./arraySchemaFilter";
import type {
  PluginCommandSchemaArray,
  PluginParam,
  PluginParamEx,
  PluginSchemaArray,
  PluginStructSchemaArray,
  PluginStructSchemaArrayEx,
} from "./arraySchemaTypes";
import type {
  PluginCommandSchemaArrayEx,
  PluginFileParamsSchema,
  PluginVariableSchema,
  StructPluginParam,
  PluginSchemaArrayEx,
} from "./arraySchemaTypes2";
import type { PrimitiveParam, PrimitiveStringParam } from "./paramUnion";
import type {
  FileArrayParam,
  FileParam,
  RpgVariableArrayParam,
} from "./primitiveParams";
import type { RpgVariableParam, StringArrayParam } from "./primitiveParams";
import {
  hasTextAttr,
  isFileAttr,
  isNumberAttr,
  isStructAttr,
  isVariableAttr,
} from "./typeTest";

export const filterPluginSchemaByStringParam = (schema: PluginSchemaArray) => {
  type Type = PrimitiveStringParam | StringArrayParam;
  return buildFilteredSchema<PluginParamEx<Type>>(schema, hasTextAttr);
};

export const filterPluginSchemaByNumberParam = (schema: PluginSchemaArray) => {
  type Type = Extract<PrimitiveParam, { default: number[] | number }>;
  return buildFilteredSchema<PluginParamEx<Type>>(schema, isNumberAttr);
};

export const filterPluginSchemaByVariableParam = (
  schema: PluginSchemaArray
): PluginVariableSchema => {
  type Type = RpgVariableParam | RpgVariableArrayParam;
  return buildFilteredSchema<PluginParamEx<Type>>(schema, isVariableAttr);
};

export const filterPluginSchemaByFileParam = (
  schema: PluginSchemaArray
): PluginFileParamsSchema => {
  type Type = FileParam | FileArrayParam;
  return buildFilteredSchema<PluginParamEx<Type>>(schema, isFileAttr);
};

export function filterPluginSchemaByParam<T extends PluginParam>(
  schema: PluginSchemaArray,
  predicate: (param: PluginParam) => param is T
): PluginSchemaArrayEx<T>;

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
  return buildFilteredSchema<T>(
    schema,
    predicate as (param: PluginParam) => param is T
  );
}

const buildFilteredSchema = <T extends PluginParam>(
  schema: PluginSchemaArray,
  predicate: (param: PluginParam) => param is T
): PluginSchemaArrayEx<T> => {
  const base: PluginStructSchemaArray[] = schema.structs.filter((s) => {
    return s.params.some((p) => predicate(p));
  });
  const directTypeNames = new Set<string>(base.map((s) => s.struct));
  const depTypesName: Set<string> = findIndirectsFunctional(
    schema.structs,
    directTypeNames
  );
  const newStructs: PluginStructSchemaArrayEx<T | StructPluginParam>[] =
    rebuildStructs(schema.structs, depTypesName, predicate);
  return {
    structs: newStructs,
    commands: rebuildCommands(schema.commands, depTypesName, predicate),
    params: rebuildParams(schema.params, depTypesName, predicate),
  } satisfies PluginSchemaArray;
};

const rebuildParams = <T extends PluginParam>(
  params: ReadonlyArray<PluginParam>,
  structNames: ReadonlySet<string>,
  predicate: (param: PluginParam) => param is T
): (T | StructPluginParam)[] => {
  return params.filter((param): param is T | StructPluginParam => {
    return isStructAttr(param)
      ? structNames.has(param.attr.struct)
      : predicate(param);
  });
};

const rebuildStructs = <T extends PluginParam>(
  structs: ReadonlyArray<PluginStructSchemaArray>,
  structNames: ReadonlySet<string>,
  predicate: (param: PluginParam) => param is T
): PluginStructSchemaArrayEx<T | StructPluginParam>[] => {
  type XX = PluginStructSchemaArrayEx<T | StructPluginParam>;
  return structs.reduce<XX[]>((acc, struct) => {
    const params: (T | StructPluginParam)[] = rebuildParams(
      struct.params,
      structNames,
      predicate
    );
    if (params.length === 0) {
      return acc;
    }
    acc.push({ struct: struct.struct, params: params });
    return acc;
  }, []);
};

export const rebuildCommands = <T extends PluginParam>(
  commands: ReadonlyArray<PluginCommandSchemaArray>,
  structNames: ReadonlySet<string>,
  predicate: (param: PluginParam) => param is T
): PluginCommandSchemaArrayEx<T | StructPluginParam>[] => {
  type R = PluginCommandSchemaArrayEx<T | StructPluginParam>;
  return commands.reduce<R[]>((acc, cmd): R[] => {
    const args: (T | StructPluginParam)[] = rebuildParams(
      cmd.args,
      structNames,
      predicate
    );
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
