import type { JSONSchemaType } from "ajv";
import type { AnnotationTypes, StructAnnotation, StructBase } from "./types";

// --- 型定義 ---
interface SchemaContext {
  required: string[];
}

// --- メイン関数 ---
export const fnXX = <T extends object>(
  annotation: StructAnnotation<T>
): { schema: JSONSchemaType<T>; errors: unknown[] } => ({
  errors: [],
  schema: buildSchemaFromStruct(annotation.struct, {
    required: [],
  }) as JSONSchemaType<T>,
});

// --- ヘルパー関数群 ---
const buildSchemaFromStruct = (
  struct: StructBase,
  ctx: SchemaContext
): Record<string, unknown> => {
  return {
    type: "object",
    properties: Object.entries(struct.params).reduce((acc, [key, val]) => {
      const schema = convertParamToSchema(val as any, ctx);
      return { ...acc, [key]: schema };
    }, {}),
    required: Object.keys(struct.params),
    additionalProperties: false,
  };
};

const copyTitleAndDescription = (a: { text?: string; desc?: string }) => ({
  ...(a.text ? { title: a.text } : {}),
  ...(a.desc ? { description: a.desc } : {}),
});

const convertParamToSchema = (
  param: AnnotationTypes,

  ctx: SchemaContext
): object => {
  if (param.type === "number[]") {
    return {
      type: "array",
      items: { type: "number" },
      default: param.default,
      ...copyTitleAndDescription(param),
    };
  }

  if (param.type === "number") {
    return {
      type: "number",
      default: param.default,
      ...copyTitleAndDescription(param),
    };
  }

  if (param.type === "string") {
    return {
      type: "string",
      default: param.default,
      ...copyTitleAndDescription(param),
    };
  }

  if (param.type === "boolean") {
    return {
      type: "boolean",
      default: param.default,
      ...copyTitleAndDescription(param),
    };
  }

  if (param.type === "select") {
    return {
      type: "string",
      default: param.default,
      enum: param.options.map(({ value }) => value),
      ...copyTitleAndDescription(param),
    };
  }

  if (param.type === "struct") {
    return {
      type: "object",
      title: param.struct.structName,
      properties: Object.entries(param.struct.params).reduce(
        (acc, [key, val]) => {
          const schema = convertParamToSchema(val as any, ctx);
          return { ...acc, [key]: schema };
        },
        {}
      ),
      required: Object.keys(param.struct.params),
      additionalProperties: false,
    };
  }

  if (param.type === "struct[]") {
    return {
      type: "array",
      items: {
        type: "object",
        title: param.struct.structName,
        properties: Object.entries(param.struct.params).reduce(
          (acc, [key, val]) => {
            const schema = convertParamToSchema(val as any, ctx);
            return { ...acc, [key]: schema };
          },
          {}
        ),
        required: Object.keys(param.struct.params),
        additionalProperties: false,
      },
      default: param.default,
    };
  }

  return {};
};
