import type { JSONSchemaType } from "ajv";
import type {
  CommandUnion_EmptyParam,
  CommandUnion_TextBody,
} from "./unionTypes";
// enumは意図的に数値直書き。
// importで定数を取り込むと参照解決の問題でエラーになることがある
export const SCHEMA_COMMAND_TEXT_BODY = {
  type: "object",
  required: ["code", "parameters", "indent"],

  properties: {
    code: {
      type: "integer",
      enum: [108, 355, 401, 405, 408, 655] satisfies ReadonlyArray<
        CommandUnion_TextBody["code"]
      >,
    },
    indent: { type: "integer", minimum: 0 },
    parameters: {
      type: "array",
      minItems: 1,
      maxItems: 1,
      items: [{ type: "string" }],
    },
  },
  additionalProperties: false,
} as const satisfies JSONSchemaType<CommandUnion_TextBody>;

export const SCHEMA_COMMAND_EMPTY_PARAM = {
  type: "object",
  required: ["code", "parameters", "indent"],
  properties: {
    indent: { type: "integer", minimum: 0 },
    parameters: { type: "array", minItems: 0, maxItems: 0 },
    code: {
      type: "integer",
      enum: [
        0, 109, 112, 113, 115, 204, 206, 213, 214, 216, 217, 221, 222, 243, 244,
        251, 314, 315, 340, 351, 352, 353, 354, 411,
      ] satisfies ReadonlyArray<CommandUnion_EmptyParam["code"]>,
    },
  },
  additionalProperties: false,
} as const;
