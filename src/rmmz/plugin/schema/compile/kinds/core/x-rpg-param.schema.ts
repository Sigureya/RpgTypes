import type { SourceIdentifier } from "@RpgTypes/libs";
import type { DiscriminatedUnionSchemaType3 } from "@RpgTypes/libs/templates/discriminator/discriminator3";
import type { JSONSchemaType } from "ajv";
import type { X_ParamData, X_RmmzParamBase } from "./paramBase/x-rpg-param";
import type {
  BooleanParam,
  ComboParam,
  SelectParam,
  StringParam,
} from "./primitiveParams";
import type { X_ParamDataId, X_ParamNumber } from "./x-rpg-paramTypes";

type UnionSchema = DiscriminatedUnionSchemaType3<
  X_RmmzParamBase,
  string,
  "kind",
  | X_ParamNumber
  | X_ParamDataId
  | X_ParamData<BooleanParam>
  | X_ParamData<StringParam>
  | X_ParamData<SelectParam>
  | X_ParamData<ComboParam>
>;

const nullablString = {
  type: "string",
  nullable: true,
  maxLength: 100,
} as const satisfies JSONSchemaType<string | null>;

const numberKind = {
  type: "object",
  required: ["kind", "data"],
  additionalProperties: false,
  properties: {
    kind: { type: "string", const: "number" },
    parent: nullablString,
    data: {
      type: "object",
      properties: {
        decimals: {
          type: "number",
          nullable: true,
          minimum: 0,
          default: 0,
        },
      },
    },
  },
} satisfies JSONSchemaType<X_ParamNumber>;

const stringKind = {
  type: "object",
  required: ["kind"],
  additionalProperties: false,
  properties: {
    kind: {
      type: "string",
      enum: ["string", "multiline_string"],
    },
    parent: nullablString,
    data: { type: "object", properties: {} },
  },
} as const satisfies JSONSchemaType<X_ParamData<StringParam>>;

const booleanKind = {
  type: "object",
  required: ["kind", "data"],
  additionalProperties: false,
  properties: {
    kind: { type: "string", const: "boolean" },
    parent: nullablString,
    data: {
      type: "object",
      properties: {
        on: nullablString,
        off: nullablString,
      },
    },
  },
} as const satisfies JSONSchemaType<X_ParamData<BooleanParam>>;
const dataIdtext = { type: "string", maxLength: 100 } as const;

const dataIdKind = {
  type: "object",
  required: ["kind", "data"],
  additionalProperties: false,
  properties: {
    kind: { type: "string", const: "dataId" },
    parent: nullablString,
    data: {
      additionalProperties: false,
      type: "object",
      required: ["author", "module", "kind"],
      properties: {
        author: dataIdtext,
        module: dataIdtext,
        kind: dataIdtext,
      },
    } satisfies JSONSchemaType<SourceIdentifier>,
  },
} as const satisfies JSONSchemaType<X_ParamDataId>;
const selectKind = {
  type: "object",
  required: ["kind", "data"],
  additionalProperties: false,
  properties: {
    kind: { type: "string", const: "select" },
    parent: nullablString,
    data: {
      type: "object",
      required: ["options"],
      properties: {
        options: {
          type: "array",
          items: {
            type: "object",
            properties: {
              value: { type: "string", maxLength: 100 },
              option: { type: "string", maxLength: 100 },
            },
            required: ["value", "option"],
            additionalProperties: false,
          },
        },
      },
    },
  },
} as const satisfies JSONSchemaType<X_ParamData<SelectParam>>;

const comboKind = {
  type: "object",
  required: ["kind", "data"],
  additionalProperties: false,
  properties: {
    kind: { type: "string", const: "combo" },
    parent: nullablString,
    data: {
      type: "object",
      required: ["options"],
      properties: {
        options: {
          type: "array",
          items: {
            type: "string",
          },
        },
      },
    },
  },
} as const satisfies JSONSchemaType<X_ParamData<ComboParam>>;

const SCHEMA_RPG_PARAM_META_SCHEMA = {
  type: "object",
  discriminator: {
    propertyName: "kind",
  },
  oneOf: [
    stringKind,
    numberKind,
    dataIdKind,
    selectKind,
    booleanKind,
    comboKind,
  ],
} as const satisfies UnionSchema;

export default SCHEMA_RPG_PARAM_META_SCHEMA;
