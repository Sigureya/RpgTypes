import type { JSONSchemaType } from "ajv";
import type { RmmzParamCore_Option } from "./types";

//　このSchemaは頻出するので用意した。書くにしても複雑
export const optionsSchema = () =>
  ({
    type: "array",
    maxItems: 50,
    items: {
      additionalProperties: false,
      type: "object",
      required: ["value", "option"],
      properties: {
        option: { type: "string" },
        value: { type: "string" },
      },
    },
  } as JSONSchemaType<RmmzParamCore_Option[]>);
