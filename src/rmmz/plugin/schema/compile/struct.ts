import type { JSONSchemaType } from "ajv";
import type { CompileContext } from "./context";
import {
  makeBooleanField,
  makeBooleanFieldWithXParam,
} from "./core/kinds/boolean";
import type { StructCompileLog, CompileResult } from "./core/kinds/compileLog";
import type {
  PluginCompileOptions,
  PluginMeta,
} from "./core/kinds/compileOption";
import { PLUGIN_COMMAND } from "./core/kinds/constants";
import { makeNumberArrayField, makeNumberField } from "./core/kinds/numbers";
import type {
  PluginCommand,
  PluginStruct,
  StructParam,
  KindOfStructArray,
} from "./core/kinds/plugin";
import {
  withDefault,
  makeArrayField,
  makeStructRef,
} from "./core/kinds/primitive";
import { makeIdField, makeIdFieldWithXParam } from "./core/kinds/rpgDataKind";
import {
  makeStringField,
  makeFileField,
  makeComboField,
  makeSelectField,
} from "./core/kinds/string";
import { isStructDef, isStructDefArray } from "./core/kinds/structDef";

type AnySchema =
  | {}
  | JSONSchemaType<number>
  | JSONSchemaType<string>
  | JSONSchemaType<boolean>
  | JSONSchemaType<number[]>
  | JSONSchemaType<string[]>
  | JSONSchemaType<object>
  | JSONSchemaType<object[]>
  | { $ref: string };

interface SchemaAndLog {
  schema: AnySchema;
  logs: StructCompileLog[];
}

const SEPARATOR = "." as const;

export const compilePluginCommand = <T extends object>(
  titles: PluginMeta,
  { args, command }: PluginCommand<T>,
  options: Partial<PluginCompileOptions>
): CompileResult<T> => {
  return compileStructDetail(
    `${titles.moduleName}${SEPARATOR}${PLUGIN_COMMAND}${SEPARATOR}${command}`,
    command,
    args,
    { meta: titles, options }
  );
};

export const compilePluginStruct = <T extends object>(
  tiles: PluginMeta,
  { params, struct: structName }: PluginStruct<T>,
  options: Partial<PluginCompileOptions>
): CompileResult<T> => {
  return compileStructDetail(
    `${tiles.moduleName}${SEPARATOR}${structName}`,
    structName,
    params,
    { meta: tiles, options }
  );
};

// --- メイン処理 ---
const compileStructDetail = <T>(
  path: string,
  title: string,
  props: Record<string, StructParam>,
  ctx: CompileContext
) => {
  const { properties, logs } = reduceProps(props, path, ctx);

  const keys = Object.keys(props);
  return {
    schema: {
      type: "object",
      title: title,
      properties,
      required: keys,
      additionalProperties: false,
    } satisfies JSONSchemaType<T>,
    logs,
  };
};

interface PropsAccumulated {
  properties: Record<string, AnySchema>;
  logs: StructCompileLog[];
}

const sturctName = (param: StructParam): string => {
  if (param.kind !== "struct_def" && param.kind !== "struct_def[]") {
    return "";
  }

  return param.struct;
};

const accumulateProp = (
  acc: PropsAccumulated,
  [key, value]: [string, StructParam],
  path: string,
  ctx: CompileContext
): PropsAccumulated => {
  const currentPath: string = `${path}.${key}`;
  const field: SchemaAndLog = compileField(currentPath, value, ctx);
  return {
    properties: { ...acc.properties, [key]: field.schema },
    logs: [
      ...acc.logs,
      ...field.logs,
      {
        structName: sturctName(value),
        path: currentPath,
        data: value,
        schema: field.schema,
      } satisfies StructCompileLog,
    ],
  };
};

const reduceProps = (
  props: Record<string, StructParam>,
  path: string,
  ctx: CompileContext
): PropsAccumulated => {
  return Object.entries<StructParam>(props).reduce<PropsAccumulated>(
    (acc, entry) => accumulateProp(acc, entry, path, ctx),
    { properties: {}, logs: [] } satisfies PropsAccumulated
  );
};

const compileField = (
  path: string,
  data: StructParam,
  ctx: CompileContext
): SchemaAndLog => {
  if (isStructDef(data)) {
    return makeStructKind(path, data, ctx);
  }
  if (isStructDefArray(data)) {
    return makeStructArrayKind(path, data, ctx);
  }
  return { schema: compilePrimitive(data, ctx), logs: [] };
};

const makeStructKind = <T extends object>(
  path: string,
  annotation: PluginStruct<T>,
  ctx: CompileContext
): SchemaAndLog => {
  return compileStructDetail(
    path,
    annotation.struct,
    annotation.params,
    ctx
  ) as unknown as SchemaAndLog;
  // 再帰構造のためasが唯一の解となる
};

const makeStructArrayKind = <T extends object>(
  path: string,
  annotation: KindOfStructArray<T>,
  ctx: CompileContext
): SchemaAndLog => {
  const item: SchemaAndLog = makeStructKind(
    `${path}[]`,
    {
      params: annotation.params,
      struct: annotation.struct,
    },
    ctx
  );
  return {
    schema: {
      type: "array",
      ...(item.schema ? { items: item.schema } : {}),
      ...withDefault(annotation.default),
    } as JSONSchemaType<object[]>,
    logs: item.logs,
  };
};

const compilePrimitive = (
  data: Exclude<StructParam, { kind: "struct_def" | "struct[]" }>,
  ctx: CompileContext
): AnySchema => {
  switch (data.kind) {
    case "string":
    case "multiline_string":
      return makeStringField(data);
    case "file":
      return makeFileField(data);
    case "combo":
      return makeComboField(data);
    case "select":
      return makeSelectField(data);
    case "file[]":
      return makeArrayField(data, "string");
    case "string[]":
      return makeArrayField(data, "string");
    case "number[]":
      return makeNumberArrayField(data);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return makeArrayField(data, "integer");
    case "number":
      return makeNumberField(data);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ctx.options.kindData
        ? makeIdFieldWithXParam(data)
        : makeIdField(data);
    case "boolean":
      return ctx.options.kindData
        ? makeBooleanFieldWithXParam(data)
        : makeBooleanField(data);
    case "struct":
      return makeStructRef(data);
    default:
      return {};
  }
};
