import type { JSONSchemaType } from "ajv";
import {
  compilePrimitiveFieldWithXParam,
  compilePrimitiveField,
} from "./compileField";
import type { StructCompileLog } from "./compileLog";
import type {
  StructParam,
  PluginStructEx,
  StructArrayDefParam,
  StructDefParam,
} from "./core/pluginEntriesEx";
import type { AnyParamSchema } from "./pluginMeta/anyParamSchema";
import type { CompileContext } from "./pluginMeta/compileOption";
import { withDefault } from "./utils";

interface SchemaAndLog {
  schema: AnyParamSchema;
  logs: StructCompileLog[];
}

// --- メイン処理 ---
export const compileStructDetail = <T>(
  path: string,
  title: string,
  props: Record<string, StructParam>,
  ctx: CompileContext
) => {
  const { properties, logs } = reduceProps(props, path, ctx);

  return {
    schema: {
      type: "object",
      title: title,
      properties,
      required: Object.keys(props),
      additionalProperties: false,
    } satisfies JSONSchemaType<T>,
    logs,
  };
};

interface PropsAccumulated {
  properties: Record<string, AnyParamSchema>;
  logs: StructCompileLog[];
}

const sturctName = (param: StructParam): string => {
  if (isStructDefArray(param)) {
    return param.struct;
  }
  if (isStructDef(param)) {
    return param.struct;
  }
  return "";
};

const isStructDef = (value: StructParam): value is StructDefParam<object> => {
  return value.kind === "struct_def";
};
const isStructDefArray = (
  value: StructParam
): value is StructArrayDefParam<object> => {
  return value.kind === "struct_def[]";
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
  return {
    schema: ctx.options.kindData
      ? compilePrimitiveFieldWithXParam(data)
      : compilePrimitiveField(data),
    logs: [],
  };
};

const makeStructKind = <T extends object>(
  path: string,
  annotation: PluginStructEx<T>,
  ctx: CompileContext
): SchemaAndLog => {
  return compileStructDetail<T>(
    path,
    annotation.struct,
    annotation.params,
    ctx
  );
};

const makeStructArrayKind = <T extends object>(
  path: string,
  annotation: StructArrayDefParam<T>,
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
    },
    logs: item.logs,
  };
};
