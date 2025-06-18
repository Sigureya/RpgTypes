import type { JSONSchemaType } from "ajv";
import type { CompileLogItem, CompileResult } from "./mockType";
import type { StructAnnotation } from "./types";

type CompileContext = {
  moduleName: string;
  typeDefs: Record<string, StructAnnotation<any>>;
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
  switch (data.kind as StructKind) {
    case "string":
      return [
        {
          type: "string",
          ...(data.default !== undefined ? { default: data.default } : {}),
        },
        [],
      ];

    case "number":
    case "actor":
    case "weapon":
    case "armor":
      return [
        {
          type: "number",
          ...(data.default !== undefined ? { default: data.default } : {}),
          ...(data.text ? { title: data.text } : {}),
          ...(data.desc ? { description: data.desc } : {}),
        },
        [],
      ];

    case "boolean":
      return [
        {
          type: "boolean",
          ...(data.default !== undefined ? { default: data.default } : {}),
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

const resolveStruct = <T>(
  data: { structName: string; params?: any },
  ctx: CompileContext
): StructAnnotation<T> => {
  return data.params !== undefined
    ? { kind: "struct", struct: data }
    : (ctx.typeDefs[data.structName] as StructAnnotation<T>);
};

export const compile = <T>(
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
