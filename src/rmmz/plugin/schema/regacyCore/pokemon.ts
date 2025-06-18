import type { JSONSchemaType } from "ajv";
import type { CompileLogItem, CompileResult } from "./mockType";
import type { StructAnnotation } from "./structAnt2";

type CompileContext = {
  moduleName: string;
  typeDefs: Record<string, StructAnnotation<any>>;
};

const isIntegerKind = (kind: string, digit?: number) => {
  // RPGツクールのactor/weapon/armor/skill/item/enemy/stateは整数
  if (
    [
      "actor",
      "weapon",
      "armor",
      "skill",
      "item",
      "enemy",
      "state",
      "actor[]",
      "weapon[]",
      "armor[]",
      "skill[]",
      "item[]",
      "enemy[]",
      "state[]",
    ].includes(kind)
  ) {
    return true;
  }
  if (digit === undefined) {
    return true;
  }
  if (kind === "number" && digit === 0) {
    return true;
  }
  if (kind === "number[]" && digit === 0) {
    return true;
  }
  return false;
};

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
      return [
        {
          type: "string",
          ...(data.default !== undefined ? { default: data.default } : {}),
        },
        [],
      ];
    case "multiline_string":
      return [
        {
          type: "string",
          ...(data.default !== undefined ? { default: data.default } : {}),
        },
        [],
      ];
    case "file":
      return [
        {
          type: "string",
          ...(data.default !== undefined ? { default: data.default } : {}),
        },
        [],
      ];
    case "combo":
      return [
        {
          type: "string",
          ...(data.default !== undefined ? { default: data.default } : {}),
        },
        [],
      ];
    case "select":
      return [
        {
          type: "string",
          ...(data.default !== undefined ? { default: data.default } : {}),
          ...(data.options
            ? { enum: data.options.map((o: any) => o.value) }
            : {}),
        },
        [],
      ];
    case "file[]":
      return [
        {
          type: "array",
          items: { type: "string" },
          ...(data.default !== undefined ? { default: data.default } : {}),
        },
        [],
      ];
    case "string[]":
      return [
        {
          type: "array",
          items: { type: "string" },
          ...(data.default !== undefined ? { default: data.default } : {}),
        },
        [],
      ];
    case "number[]":
      return [
        {
          type: "array",
          items: {
            type: data.digit === 0 ? "integer" : "number",
          },
          ...(data.default !== undefined ? { default: data.default } : {}),
        },
        [],
      ];
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
      return [
        {
          type: "array",
          items: { type: "integer" },
          ...(data.default !== undefined ? { default: data.default } : {}),
        },
        [],
      ];
    case "number":
      return [
        {
          type: data.digit === 0 ? "integer" : "number",
          ...(data.default !== undefined ? { default: data.default } : {}),
        },
        [],
      ];
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
      return [
        {
          type: "integer",
          ...(data.default !== undefined ? { default: data.default } : {}),
          ...(data.text !== undefined ? { title: data.text } : {}),
          ...(data.desc !== undefined ? { description: data.desc } : {}),
        },
        [],
      ];
    case "boolean":
      return [
        {
          type: "boolean",
          ...(data.default !== undefined ? { default: data.default } : {}),
          ...(data.text !== undefined ? { title: data.text } : {}),
          ...(data.desc !== undefined ? { description: data.desc } : {}),
        },
        [],
      ];
    case "struct":
      return compileStruct(path, resolveStruct(data.struct, ctx), ctx);
    case "struct[]":
      const [itemSchema, itemLogs] = compileStruct(
        `${path}[]`,
        data.struct,
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
