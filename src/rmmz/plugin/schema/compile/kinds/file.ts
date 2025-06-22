import type { JSONSchemaType } from "ajv";
import { withTexts } from "./core/primitive";
import type { KindOfFile } from "./core/primitiveParams";
import type { JSONSchemaTypeWithRpgParam } from "./core/x-rpg-param";
import { xparamBaseData } from "./core/x-rpg-param";
import { withDefault } from "./utils";

export const compileFileField = (data: KindOfFile) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<string>);

export const compileFileFieldWithXparam = (
  data: KindOfFile
): JSONSchemaTypeWithRpgParam<string> => ({
  type: "string",
  ...withDefault(data.default),
  ...withTexts(data),
  ...xparamBaseData(data, {
    dir: data.dir,
  }),
});

export const rmmzSchemaFilePathParam = () =>
  ({
    additionalProperties: false,
    type: "object",
    required: ["kind", "default", "dir"],
    properties: {
      kind: { type: "string", const: "file" },
      default: { type: "string", default: "" },
      dir: { type: "string", default: "" },
      desc: { type: "string", nullable: true },
      text: { type: "string", nullable: true },
      parent: { type: "string", nullable: true },
    },
  } satisfies JSONSchemaType<KindOfFile>);
