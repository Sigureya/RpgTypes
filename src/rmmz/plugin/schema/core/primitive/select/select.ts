import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { RmmzParamCore_Option, RmmzParamCore_Select } from "./types";

//　このSchemaは頻出するので用意した。書くにしても複雑
export const optionsSchema = <T>(v: JSONSchemaType<T>) =>
  ({
    type: "array",
    maxItems: 50,
    items: {
      additionalProperties: false,
      type: "object",
      required: ["value", "option"],
      properties: {
        option: { type: "string" },
        value: v,
      },
    },
  } as JSONSchemaType<{ value: T; option: string }[]>);
