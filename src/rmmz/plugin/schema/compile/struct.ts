import type { JSONSchemaType } from "ajv";
import type { CompileContext } from "./context";
import type { CompileLogItem, CompileResult } from "./core/kinds/compileLog";
import type {
  PluginCompileOptions,
  PluginTitles,
} from "./core/kinds/compileOption";
import { PLUGIN_COMMAND } from "./core/kinds/constants";
import type {
  PluginCommand,
  PluginStruct,
  StructParam,
  KindOfStruct,
  KindOfStructArray,
} from "./core/kinds/plugin";
import {
  makeArrayField,
  makeBooleanField,
  makeComboField,
  makeFileField,
  makeIdField,
  makeNumberArrayField,
  makeNumberField,
  makeSelectField,
  makeStringField,
  makeStructRef,
  withDefault,
} from "./primitive";

type AnySchema =
  | true
  | JSONSchemaType<number>
  | JSONSchemaType<string>
  | JSONSchemaType<boolean>
  | JSONSchemaType<number[]>
  | JSONSchemaType<string[]>
  | JSONSchemaType<object>
  | JSONSchemaType<object[]>
  | { $ref: string };

interface ResultType {
  schema: AnySchema;
  logs: CompileLogItem[];
}

export const compilePluginCommand = <T extends object>(
  { moduleName }: PluginTitles,
  { args, command }: PluginCommand<T>,
  options: Partial<PluginCompileOptions>
): CompileResult<T> => {
  return compileStructDetail(
    `${moduleName}.${PLUGIN_COMMAND}.${command}`,
    command,
    args,
    { moduleName, options }
  );
};

export const compilePluginStruct = <T extends object>(
  { moduleName }: PluginTitles,
  { params, struct: structName }: PluginStruct<T>,
  options: Partial<PluginCompileOptions>
): CompileResult<T> => {
  return compileStructDetail(
    `${moduleName}.${structName}`,
    structName,
    params,
    { moduleName, options }
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
  logs: CompileLogItem[];
}

const reduceProps = (
  props: Record<string, StructParam>,
  path: string,
  ctx: CompileContext
): PropsAccumulated => {
  return Object.entries<StructParam>(props).reduce<PropsAccumulated>(
    ({ properties: accSchema, logs: accLogs }, [key, value]) => {
      const currentPath: string = `${path}.${key}`;
      const field = compileField(currentPath, value, ctx);
      return {
        properties: field.schema
          ? { ...accSchema, [key]: field.schema }
          : { ...accSchema },
        logs: [...accLogs, ...field.logs, { path: currentPath, data: value }],
      };
    },
    { properties: {}, logs: [] } satisfies PropsAccumulated
  );
};

const compileField = <T extends object>(
  path: string,
  data: StructParam,
  ctx: CompileContext
): ResultType => {
  if (data.kind === "struct") {
    return makeStructKind(path, data, ctx);
  }
  if (data.kind === "struct[]") {
    return makeStructArrayKind(path, data, ctx);
  }
  return { schema: compilePrimitive(data, ctx), logs: [] };
};

const makeStructKind = <T extends object>(
  path: string,
  annotation: KindOfStruct<T>,
  ctx: CompileContext
): ResultType => {
  return compileStructDetail(
    path,
    annotation.struct,
    annotation.params,
    ctx
  ) as unknown as ResultType;
  // 再帰構造のためasが唯一の解となる
};

const makeStructArrayKind = <T extends object>(
  path: string,
  annotation: KindOfStructArray<T>,
  ctx: CompileContext
): ResultType => {
  const item: ResultType = makeStructKind(
    `${path}[]`,
    {
      kind: "struct",
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
  data: Exclude<StructParam, { kind: "struct" | "struct[]" }>,
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
      return makeNumberArrayField(data, ctx);
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
      return makeNumberField(data, ctx);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return makeIdField(data, ctx);
    case "boolean":
      return makeBooleanField(data, ctx);
    case "struct_ref":
      return makeStructRef(data);
    default:
      return true;
  }
};
