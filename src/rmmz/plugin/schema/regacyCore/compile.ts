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
import type {
  StructAnnotation,
  StructParam,
  StructType,
} from "./kinds/struct2";

type CompileContext = {
  moduleName: string;
  typeDefs: Record<string, StructAnnotation<object>>;
};

export const compile = <T extends object>(
  moduleName: string,
  struct: StructAnnotation<object>,
  typeDefs: Record<string, StructAnnotation<object>>
): CompileResult<T> => {
  const ctx: CompileContext = { moduleName, typeDefs };
  const [schema, logs] = compileStruct(
    `${moduleName}.${struct.struct.structName}`,
    struct,
    ctx
  );
  return { schema, logs };
};

const isIntegerKind = (kind: string, digit?: number) => {
  if (kind === "number" || kind === "number[]") {
    return digit === undefined || digit === 0;
  }

  return false;
};

const cloneTexts = (kind: KindBase) => ({
  ...(typeof kind.text === "string" ? { title: kind.text } : {}),
  ...(typeof kind.desc === "string" ? { description: kind.desc } : {}),
});

// --- 各型ごとの生成関数 ---
const makeStringField = (data: KindOfString) => ({
  type: "string",
  ...(data.default !== undefined ? { default: data.default } : {}),
});

const makeSelectField = (data: KindOfSelect) => ({
  type: "string",
  ...(data.default !== undefined ? { default: data.default } : {}),
  ...(data.options ? { enum: data.options.map((o): string => o.value) } : {}),
});

const makeArrayField = (data: any, itemType: string) => ({
  type: "array",
  items: { type: itemType },
  ...(data.default !== undefined ? { default: data.default } : {}),
});

const makeNumberArrayField = (data: KindOfNumberArray) => ({
  type: "array",
  items: {
    type: isIntegerKind("number[]", data.digit) ? "integer" : "number",
  },
  ...(data.default !== undefined ? { default: data.default } : {}),
  ...cloneTexts(data),
});

const makeNumberField = (data: KindOfNumber) => ({
  type: isIntegerKind("number", data.digit) ? "integer" : "number",
  ...(data.default !== undefined ? { default: data.default } : {}),
});

const makeIdField = (data: KindOfRpgDataId | KindOfSystemDataId) => ({
  type: "integer",
  ...(data.default !== undefined ? { default: data.default } : {}),
  ...cloneTexts(data),
});

const makeBooleanField = (data: KindOfBoolean) => ({
  type: "boolean",
  ...(data.default !== undefined ? { default: data.default } : {}),
  ...cloneTexts(data),
});

const makeComboField = (data: KindOFCombo) => ({
  type: "string",
  ...(data.default !== undefined ? { default: data.default } : {}),
  ...cloneTexts(data),
});

const makeFileField = (data: KindOfFile) => ({
  type: "string",
  ...(data.default !== undefined ? { default: data.default } : {}),
  ...cloneTexts(data),
});

const makeStructRef = (ref: KindOfStructRef) =>
  ({
    $ref: `#/definitions/${ref.structName}`,
    ...cloneTexts(ref),
  } satisfies Schema);

// --- メイン処理 ---
const compileStruct = <T extends object>(
  path: string,
  annotation: StructAnnotation<T>,
  ctx: CompileContext
): [JSONSchemaType<T>, CompileLogItem[]] => {
  const props = annotation.struct.params;
  type ResultLike = [Record<string, unknown>, CompileLogItem[]];

  const [properties, logs]: ResultLike = Object.entries<StructParam>(
    props
  ).reduce<ResultLike>(
    ([accSchema, accLogs], [key, value]) => {
      const currentPath = `${path}.${key}`;
      const [fieldSchema, fieldLogs] = compileField(currentPath, value, ctx);
      return [
        { ...accSchema, [key]: fieldSchema },
        [...accLogs, ...fieldLogs, { path: currentPath, data: value }],
      ];
    },
    [{}, []] satisfies ResultLike
  );

  const keys = Object.keys(props);
  return [
    {
      type: "object",
      title: annotation.struct.structName,
      properties,
      required: keys,
      additionalProperties: false,
    } as JSONSchemaType<T>,
    logs,
  ];
};

const compileField = (
  path: string,
  data: StructParam,
  ctx: CompileContext
): [object, CompileLogItem[]] => {
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
      return compileStruct(path, resolveStruct(data.struct, ctx), ctx);
    case "struct[]":
      const [itemSchema, itemLogs] = compileStruct(
        `${path}[]`,
        resolveStruct(data.struct, ctx), // 修正
        ctx
      );
      return [
        {
          type: "array",
          items: itemSchema,
          ...(data.default !== undefined ? { default: data.default } : {}),
        },
        itemLogs,
      ];
    default:
      return [{}, []];
  }
};

const resolveStruct = <T extends object>(
  data: StructType<T>,
  ctx: CompileContext
): StructAnnotation<T> => {
  return data.params !== undefined
    ? { kind: "struct", struct: data }
    : (ctx.typeDefs[data.structName] as StructAnnotation<T>);
};
