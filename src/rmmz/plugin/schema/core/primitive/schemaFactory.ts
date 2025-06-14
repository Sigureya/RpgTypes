import { Ajv, type JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { BooleanArg } from "./boolean";
import { booleanMetaParam } from "./boolean";
import { X_RMMZ_PARAM_NUMBER } from "./keyConstants";
import { metaSchemaNumberRmmzParam } from "./numbers/numbers";

const makeAjv = () => {
  return new Ajv({
    strict: true,
    keywords: [
      {
        keyword: X_RMMZ_PARAM_NUMBER,
        metaSchema: metaSchemaNumberRmmzParam(),
      },
    ],
  });
};

export const rmmzParamToSchemaBoolean = (boolArg: BooleanArg) => {
  return {
    title: boolArg.text,
    description: boolArg.desc,
    default: boolArg.default,
    type: "boolean",
    "x-rmmzParam": booleanMetaParam(boolArg),
  } satisfies JSONSchemaType<boolean> & Schema;
};
