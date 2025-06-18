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
  struct: KindOfStruct<object>,
  typeDefs: Record<string, KindOfStruct<object>>
): CompileResult<T> => {
  const ctx: CompileContext = { moduleName, typeDefs };
  const [schema, logs] = compileStruct(
    `${moduleName}.${struct.struct.structName}`,
    struct,
    ctx
  );
  return { schema, logs };
};

interface PropsAccumulated {
  properties: Record<string, AnySchema | object>;
  logs: CompileLogItem[];
}

const compileProps = (
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

// --- メイン処理 ---
const compileStruct = <T extends object>(
  path: string,
  annotation: KindOfStruct<T>,
  ctx: CompileContext
): [JSONSchemaType<T>, CompileLogItem[]] => {
  const props = annotation.struct.params;

  const { properties, logs } = compileProps(props, path, ctx);

  const keys = Object.keys(props);
  return [
    {
      type: "object",
      title: annotation.struct.structName,
      properties,
      required: keys,
      additionalProperties: false,
    } satisfies JSONSchemaType<T>,
    logs,
  ];
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
      return compileStruct(path, resolveStruct(data.struct), ctx);
    case "struct[]":
      const [itemSchema, itemLogs] = compileStruct(
        `${path}[]`,
        resolveStruct(data.struct),
        ctx
      );
      return [
        {
          type: "array",
          items: itemSchema,
          ...withDefault(data.default),
        },
        itemLogs,
      ];
    default:
      return [{}, []];
  }
};

const resolveStruct = <T extends object>(
  data: PluginStruct<T>
): KindOfStruct<T> => {
  return { kind: "struct", struct: data };
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
