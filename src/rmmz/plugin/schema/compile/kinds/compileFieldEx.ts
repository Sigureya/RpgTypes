import type { JSONSchemaType } from "ajv";
import {
  compilePrimitiveFiledWithXParam,
  compilePrimitiveFiled,
} from "./compieFiled";
import type { StructCompileLog } from "./compileLog";
import type { AnyParamSchema } from "./core/anyPluginSchema";
import type { CompileContext } from "./core/context";
import type { StructParam, PluginStruct, KindOfStructArray } from "./plugin";
import { isStructDef, isStructDefArray } from "./structDef";
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
  properties: Record<string, AnyParamSchema>;
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
  return {
    schema: ctx.options.kindData
      ? compilePrimitiveFiledWithXParam(data)
      : compilePrimitiveFiled(data),
    logs: [],
  };
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
