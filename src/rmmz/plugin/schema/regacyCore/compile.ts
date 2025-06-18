import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
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
  | JSONSchemaType<number>
  | JSONSchemaType<string>
  | JSONSchemaType<boolean>
  | JSONSchemaType<number[]>
  | JSONSchemaType<string[]>
  | JSONSchemaType<object>
  | JSONSchemaType<object[]>;

export const compile = <T extends object>(
  { moduleName }: PluginTitles,
  struct: KindOfStruct<Record<string, StructParam>>,
  typeDefs: Record<string, KindOfStruct<object>>
): CompileResult<T> => {
  const ctx: CompileContext = { moduleName, typeDefs };
  const [schema, logs] = compileStructDetail(
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
  const [schema, logs] = compileStructDetail(
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
): [JSONSchemaType<T>, CompileLogItem[]] => {
  const { properties, logs } = reduceProps(props, path, ctx);

  const keys = Object.keys(props);
  return [
    {
      type: "object",
      title: title,
      properties,
      required: keys,
      additionalProperties: false,
    } satisfies JSONSchemaType<T>,
    logs,
  ];
};

interface PropsAccumulated {
  properties: Record<string, AnySchema | object>;
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
      const [fieldSchema, fieldLogs] = compileField(currentPath, value, ctx);
      return {
        properties: { ...accSchema, [key]: fieldSchema },
        logs: [...accLogs, ...fieldLogs, { path: currentPath, data: value }],
      };
    },
    { properties: {}, logs: [] } satisfies PropsAccumulated
  );
};

const compileField = (
  path: string,
  data: StructParam,
  ctx: CompileContext
): [AnySchema | object, CompileLogItem[]] => {
  switch (data.kind) {
    case "string":
    case "multiline_string":
      return [makeStringField(data), []];
    case "file":
      return [makeFileField(data), []];
    case "combo":
      return [makeComboField(data), []];
    case "select":
      return [makeSelectField(data), []];
    case "file[]":
      return [makeArrayField(data, "string"), []];
    case "string[]":
      return [makeArrayField(data, "string"), []];
    case "number[]":
      return [makeNumberArrayField(data), []];
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
      return [makeArrayField(data, "integer"), []];
    case "number":
      return [makeNumberField(data), []];
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
      return [makeIdField(data), []];
    case "boolean":
      return [makeBooleanField(data), []];
    case "struct_ref":
      return [makeStructRef(data), []];
    case "struct":
      return makeStructKind(path, data, ctx);
    case "struct[]":
      return makeStructArrayKind(path, data, ctx);
    default:
      return [{}, []];
  }
};
const resolveStruct = <T extends object>(
  data: PluginStruct<T>
): KindOfStruct<T> => {
  return { kind: "struct", struct: data };
};

const makeStructKind = <T extends object>(
  path: string,
  annotation: KindOfStruct<T>,
  ctx: CompileContext
): [JSONSchemaType<T>, CompileLogItem[]] => {
  return compileStructDetail(
    path,
    annotation.struct.structName,
    annotation.struct.params,
    ctx
  );
};

const makeStructArrayKind = (
  path: string,
  annotation: KindOfStructArray,
  ctx: CompileContext
): [JSONSchemaType<object[]>, CompileLogItem[]] => {
  const [itemSchema, itemLogs] = makeStructKind(
    `${path}[]`,
    resolveStruct(annotation.struct),
    ctx
  );
  return [
    {
      type: "array",
      items: itemSchema,
      ...withDefault(annotation.default),
    } satisfies JSONSchemaType<object[]>,
    itemLogs,
  ];
};

const isIntegerKind = (digit: number | undefined) => {
  return digit === undefined || digit === 0;
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

const makeArrayField = <T>(data: KindOfArray<T>, itemType: string) => ({
  type: "array",
  items: { type: itemType },
  ...withDefault(data.default),
});
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

const makeStructRef = (ref: KindOfStructRef) =>
  ({
    $ref: `#/definitions/${ref.structName}`,
    ...withTexts(ref),
  } satisfies Schema);
