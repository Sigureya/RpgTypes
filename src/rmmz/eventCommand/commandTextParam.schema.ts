import type { JSONSchemaType } from "ajv";
import type { CommandUnion_TextBody } from "./unionTypes";
// enumは意図的に数値直書き。
// importで定数を取り込むと参照解決の問題でエラーになることがある
const SCHEMA_COMMAND_TEXT_BODY = {
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

export default SCHEMA_COMMAND_TEXT_BODY;
