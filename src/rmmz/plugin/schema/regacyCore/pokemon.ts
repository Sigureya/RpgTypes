import type { JSONSchemaType } from "ajv";
import type { CompileLogItem, CompileResult } from "./mockType";
import type { StructAnnotation } from "./structAnt2";
import type { StringSelect } from "./types";

type CompileContext = {
  moduleName: string;
  typeDefs: Record<string, StructAnnotation<any>>;
};

const isIntegerKind = (kind: string, digit?: number) => {
  if (kind === "number" || kind === "number[]") {
    return digit === undefined || digit === 0;
  }

  return false;
};

// --- 各型ごとの生成関数 ---
const makeStringField = (data: any) => ({
  type: "string",
  ...(data.default !== undefined ? { default: data.default } : {}),
});

const makeSelectField = (data: StringSelect) => ({
  type: "string",
  ...(data.default !== undefined ? { default: data.default } : {}),
  ...(data.options ? { enum: data.options.map((o): string => o.value) } : {}),
});

const makeArrayField = (data: any, itemType: string) => ({
  type: "array",
  items: { type: itemType },
  ...(data.default !== undefined ? { default: data.default } : {}),
});

const makeNumberArrayField = (data: any) => ({
  type: "array",
  items: {
    type: isIntegerKind("number[]", data.digit) ? "integer" : "number",
  },
  ...(data.default !== undefined ? { default: data.default } : {}),
});

const makeNumberField = (data: any) => ({
  type: isIntegerKind("number", data.digit) ? "integer" : "number",
  ...(data.default !== undefined ? { default: data.default } : {}),
});

const makeIdField = (data: any) => ({
  type: "integer",
  ...(data.default !== undefined ? { default: data.default } : {}),
  ...(data.text !== undefined ? { title: data.text } : {}),
  ...(data.desc !== undefined ? { description: data.desc } : {}),
});

const makeBooleanField = (data: any) => ({
  type: "boolean",
  ...(data.default !== undefined ? { default: data.default } : {}),
  ...(data.text !== undefined ? { title: data.text } : {}),
  ...(data.desc !== undefined ? { description: data.desc } : {}),
});

// --- メイン処理 ---
const compileStruct = <T extends object>(
  path: string,
  annotation: StructAnnotation<T>,
  ctx: CompileContext
): [JSONSchemaType<T>, CompileLogItem[]] => {
  const props = annotation.struct.params;

  const [properties, logs]: [Record<string, any>, CompileLogItem[]] =
    Object.entries(props).reduce(
      ([accSchema, accLogs], [key, value]) => {
        const currentPath = `${path}.${key}`;
        const [fieldSchema, fieldLogs] = compileField(currentPath, value, ctx);
        return [
          { ...accSchema, [key]: fieldSchema },
          [...accLogs, ...fieldLogs, { path: currentPath, data: value }],
        ];
      },
      [{}, []]
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
  data: any,
  ctx: CompileContext
): [any, CompileLogItem[]] => {
  switch (data.kind) {
    case "string":
    case "multiline_string":
    case "file":
    case "combo":
      return [makeStringField(data), []];
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
  data: { structName: string; params?: any },
  ctx: CompileContext
): StructAnnotation<T> => {
  return data.params !== undefined
    ? { kind: "struct", struct: data }
    : (ctx.typeDefs[data.structName] as StructAnnotation<T>);
};

export const compile = <T extends object>(
  moduleName: string,
  struct: StructAnnotation<T>,
  typeDefs: Record<string, StructAnnotation<any>>
): CompileResult<T> => {
  const ctx: CompileContext = { moduleName, typeDefs };
  const [schema, logs] = compileStruct(
    `${moduleName}.${struct.struct.structName}`,
    struct,
    ctx
  );
  return { schema, logs };
};
