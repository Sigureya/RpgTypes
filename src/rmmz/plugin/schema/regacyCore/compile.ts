import type { JSONSchemaType } from "ajv";
import type {
  KindOfBoolean,
  KindOfNumber,
  KindOfNumberArray,
  KindOfRpgDataId,
  KindOfSelect,
  KindOfString,
  KindOfSystemDataId,
  KindOFCombo,
  KindOfFile,
  KindOfStructRef,
  KindBase,
  KindOfStructArray,
} from "./kinds";
import type { CompileLogItem, CompileResult } from "./kinds/compileLog";
import type { PluginTitles } from "./kinds/compileOption";
import type { KindOfStruct, StructParam, PluginStruct } from "./kinds/struct2";

type CompileContext = {
  moduleName: string;
  typeDefs: Record<string, KindOfStruct<object>>;
};
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
export const compile = <T extends object>(
  { moduleName }: PluginTitles,
  struct: KindOfStruct<Record<string, StructParam>>,
  typeDefs: Record<string, KindOfStruct<object>>
): CompileResult<T> => {
  const ctx: CompileContext = { moduleName, typeDefs };
  const { schema, logs } = compileStructDetail(
    `${moduleName}.${struct.struct.structName}`,
    struct.struct.structName,
    struct.struct.params,
    ctx
  );
  return { schema, logs };
};

export const compilePluginStruct = <T extends object>(
  { moduleName }: PluginTitles,
  { params, structName }: PluginStruct<T>,
  typeDefs: Record<string, KindOfStruct<object>>
): CompileResult<T> => {
  const { schema, logs } = compileStructDetail(
    `${moduleName}.${structName}`,
    structName,
    params,
    { moduleName, typeDefs }
  );
  return { schema, logs };
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

const compileField = (
  path: string,
  data: StructParam,
  ctx: CompileContext
): ResultType => {
  if (data.kind === "struct") {
    const { schema, logs } = makeStructKind(path, data, ctx);
    return {
      schema,
      logs,
    };
  }
  if (data.kind === "struct[]") {
    const { schema, logs } = makeStructArrayKind(path, data, ctx);
    return {
      schema,
      logs,
    };
  }
  return { schema: compilePrimitive(data), logs: [] };
};

const compilePrimitive = (
  data: Exclude<StructParam, { kind: "struct" | "struct[]" }>
) => {
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
      return makeIdField(data);
    case "boolean":
      return makeBooleanField(data);
    case "struct_ref":
      return makeStructRef(data);
    default:
      return true;
  }
};

const makeStructKind = <T extends object>(
  path: string,
  annotation: KindOfStruct<T>,
  ctx: CompileContext
): ResultType => {
  return compileStructDetail(
    path,
    annotation.struct.structName,
    annotation.struct.params,
    ctx
  ) as unknown as ResultType;
  // 再帰構造のためasが唯一の解となる
};

const makeStructArrayKind = (
  path: string,
  annotation: KindOfStructArray,
  ctx: CompileContext
): ResultType => {
  const item = makeStructKind(
    `${path}[]`,
    { kind: "struct", struct: annotation.struct },
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

const withTexts = (kind: KindBase) => ({
  ...(typeof kind.text === "string" ? { title: kind.text } : {}),
  ...(typeof kind.desc === "string" ? { description: kind.desc } : {}),
});

const withDefault = <T>(value: T | undefined) =>
  value !== undefined ? { default: value } : {};

// --- 各型ごとの生成関数 ---
const makeStringField = (data: KindOfString) =>
  ({
    type: "string",
    ...(data.default !== undefined ? { default: data.default } : {}),
  } satisfies JSONSchemaType<string>);

const makeSelectField = (data: KindOfSelect) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...(data.options ? { enum: data.options.map((o): string => o.value) } : {}),
  } satisfies JSONSchemaType<string>);

interface KindOfArray<T> {
  kind: `${string}[]`;
  default?: T[];
}

const makeArrayField = <T>(data: KindOfArray<T>, itemType: string) =>
  ({
    type: "array",
    items: { type: itemType },
    ...withDefault(data.default),
  } as JSONSchemaType<T[]>);

const isIntegerKind = (digit: number | undefined) => {
  return digit === undefined || digit === 0;
};

const makeNumberArrayField = (data: KindOfNumberArray) =>
  ({
    type: "array",
    items: {
      type: isIntegerKind(data.digit) ? "integer" : "number",
    },
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<number[]>);

const makeNumberField = (data: KindOfNumber) =>
  ({
    type: isIntegerKind(data.digit) ? "integer" : "number",
    ...withDefault(data.default),
  } satisfies JSONSchemaType<number>);

const makeIdField = (data: KindOfRpgDataId | KindOfSystemDataId) =>
  ({
    type: "integer",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<number>);

const makeBooleanField = (data: KindOfBoolean) =>
  ({
    type: "boolean",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<boolean>);

const makeComboField = (data: KindOFCombo) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<string>);

const makeFileField = (data: KindOfFile) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<string>);

const makeStructRef = (ref: KindOfStructRef) => ({
  $ref: `#/definitions/${ref.structName}`,
  ...withTexts(ref),
});
