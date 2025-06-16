import type { JSONSchemaType } from "ajv";
import type { SourceIdentifier } from "src/namedItemSource";
import type { DiscriminatedUnionSchemaType3 } from "src/templates/discriminator/discriminator3";
import { optionsSchema } from "./select/select";
import type { X_Param_DataId } from "./x-rpg-param";

type UnionSchema = DiscriminatedUnionSchemaType3<
  BaseKind,
  string,
  "kind",
  | BooleanKind
  | DataIdKind
  | NumberKind
  | StringKind
  | SelectKind<string>
  | SelectKind<number>
>;

interface BaseKind {
  kind: string;
  parent?: string | null;
}

interface BooleanKind {
  kind: "boolean";
  parent?: string | null;
  data: {
    on?: string | null;
    off?: string | null;
  };
}

interface StringKind {
  kind: "string" | "multiline_string";
  parent?: string | null;
}

interface NumberKind {
  kind: "number";
  parent?: string | null;
  data: {
    digit?: number | null;
  };
}

interface DataIdKind {
  kind: "dataId";
  parent?: string | null;
  data: SourceIdentifier;
}

interface SelectKind<T> {
  kind: "select";
  parent?: string | null;
  data: {
    options: { value: T; option: string }[];
  };
}

interface NullableString {
  type: "string";
  nullable: true;
  maxLength: 100;
}

export const makeSchema3 = () => {
  const nullablString = {
    type: "string",
    nullable: true,
    maxLength: 100,
  } as const satisfies JSONSchemaType<string | null>;
  return {
    type: "object",
    discriminator: {
      propertyName: "kind",
    },
    oneOf: [
      booleanKind(nullablString),
      stringKind(nullablString),
      numberKind(nullablString),
      dataIdKind(nullablString),
      selectKind(optionsSchema({ type: "string" })) satisfies JSONSchemaType<
        SelectKind<string>
      >,
      // selectKind(optionsSchema({ type: "number" })) satisfies JSONSchemaType<
      //   SelectKind<number>
      // >,
    ],
  } satisfies UnionSchema;
};

const numberKind = (nullablString: NullableString) =>
  ({
    type: "object",
    required: ["kind", "data"],
    additionalProperties: false,
    properties: {
      kind: { type: "string", const: "number" },
      parent: nullablString,
      data: {
        type: "object",
        properties: {
          digit: {
            type: "number",
            nullable: true,
            minimum: 0,
            default: 0,
          },
        },
      },
    },
  } satisfies JSONSchemaType<NumberKind>);

const stringKind = (nullablString: NullableString) =>
  ({
    type: "object",
    required: ["kind"],
    additionalProperties: false,
    properties: {
      kind: {
        type: "string",
        enum: ["string", "multiline_string"],
      },
      parent: nullablString,
    },
  } satisfies JSONSchemaType<StringKind>);

const booleanKind = (nullablString: NullableString) =>
  ({
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
  } satisfies JSONSchemaType<BooleanKind>);

const dataIdKind = (nullablString: NullableString) => {
  const dataIdtext = { type: "string", maxLength: 100 } as const;
  return {
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
  } satisfies JSONSchemaType<X_Param_DataId>;
};

const selectKind = <T>(opt: JSONSchemaType<{ value: T; option: string }[]>) => {
  return {
    type: "object",
    required: ["kind", "data"],
    additionalProperties: false,
    properties: {
      kind: { type: "string", const: "select" },
      parent: { type: "string", nullable: true, maxLength: 100 },
      data: {
        type: "object",
        required: ["options"],
        properties: {
          options: opt,
        },
      },
    },
  } satisfies JSONSchemaType<SelectKind<T>>;
};
