import type { JSONSchemaType } from "ajv";
import type { StringArg, StringSelect, ToArrayAnnotation } from "./primitive";
import type { StructAnnotation } from "./struct";

type AnyObject = Record<string, any>;

const makeNumberArray = (
  param: { desc?: string; default?: number[] } & Record<string, unknown>
) => ({
  type: "array",
  items: { type: "number" },
  ...(param.desc && { title: param.desc }),
  ...(param.default !== undefined && { default: param.default }),
});

const makeStringArray = (param: ToArrayAnnotation<StringArg>) => ({
  type: "array",
  items: { type: "string" },
  ...(param.desc && { title: param.desc }),
  ...(param.default !== undefined && { default: param.default }),
});

const makePrimitive = (param: any) => {
  const base: AnyObject = { type: param.type };
  if ("default" in param) {
    base.default = param.default;
  }
  if ("text" in param) {
    base.title = param.text;
  }
  if ("desc" in param) {
    base.description = param.desc;
  }
  if (param.type === "string" && "title" in param) {
    base.title = param.title;
  }
  return base;
};

const makeSelect = (
  param: {
    options: { value: string; option: string }[];
    text?: string;
    desc?: string;
    default?: string;
  } & Record<string, StringSelect>
) => ({
  type: "string",
  ...(param.default !== undefined && { default: param.default }),
  ...(param.text && { title: param.text }),
  ...(param.desc && { description: param.desc }),
  ...(param.options && { enum: param.options.map((o: any) => o.value) }),
});

const makeStruct = (param: any) => ({
  type: "object",
  properties: convertParams(param.struct.params),
  required: Object.keys(param.struct.params),
  additionalProperties: false,
});

const makeStructArray = (param: any) => ({
  type: "array",
  items: {
    type: "object",
    properties: convertParams(param.struct.params),
    required: Object.keys(param.struct.params),
    additionalProperties: false,
  },
  ...(param.default !== undefined && { default: param.default }),
});

function convertParam(param: any) {
  if (
    param.type === "string" ||
    param.type === "number" ||
    param.type === "boolean"
  ) {
    return makePrimitive(param);
  }
  if (param.type === "number[]") {
    return makeNumberArray(param);
  }
  if (param.type === "string[]") {
    return makeStringArray(param);
  }
  if (param.type === "select") {
    return makeSelect(param);
  }
  if (param.type === "struct" && param.struct) {
    return makeStruct(param);
  }
  if (param.type === "struct[]" && param.struct) {
    return makeStructArray(param);
  }
  return {};
}

function convertParams(params: Record<string, any>): Record<string, any> {
  return Object.keys(params).reduce((result, key) => {
    result[key] = convertParam(params[key]);
    return result;
  }, {} as Record<string, any>);
}

export function fnXX<T extends object>(
  paramAnt: StructAnnotation<T>
): JSONSchemaType<T> {
  return {
    type: "object",
    properties: convertParams(paramAnt.struct.params),
    required: Object.keys(paramAnt.struct.params),
    additionalProperties: false,
  } as JSONSchemaType<T>;
}
