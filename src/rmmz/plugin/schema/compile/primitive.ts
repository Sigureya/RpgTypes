import type { JSONSchemaType } from "ajv";
import type { CompileContext } from "./context";
import type {
  KindBase,
  KindOfBoolean,
  KindOFCombo,
  KindOfFile,
  KindOfNumber,
  KindOfNumberArray,
  KindOfRpgDataId,
  KindOfSelect,
  KindOfString,
  KindOfStructRef,
  KindOfSystemDataId,
} from "./core/kinds/primitiveParams";
import type { X_RmmzParamBaee } from "./core/kinds/x-rpg-param";
import {
  xparamNumber,
  xparamDataId,
  xparamBoolean,
} from "./core/kinds/x-rpg-param";

interface X_Param {
  "x-rpg-param": X_RmmzParamBaee;
}

export const withTexts = (kind: KindBase) => ({
  ...(typeof kind.text === "string" ? { title: kind.text } : {}),
  ...(typeof kind.desc === "string" ? { description: kind.desc } : {}),
});

export const withDefault = <T>(value: T | undefined) =>
  value !== undefined ? { default: value } : {};

// --- 各型ごとの生成関数 ---
export const makeStringField = (data: KindOfString) =>
  ({
    type: "string",
    ...(data.default !== undefined ? { default: data.default } : {}),
  } satisfies JSONSchemaType<string>);

export const makeSelectField = (data: KindOfSelect) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...(data.options ? { enum: data.options.map((o): string => o.value) } : {}),
  } satisfies JSONSchemaType<string>);

interface KindOfArray<T> {
  kind: `${string}[]`;
  default?: T[];
}

export const makeArrayField = <T>(data: KindOfArray<T>, itemType: string) =>
  ({
    type: "array",
    items: { type: itemType },
    ...withDefault(data.default),
  } as JSONSchemaType<T[]>);

const isIntegerKind = (digit: number | undefined) => {
  return digit === undefined || digit === 0;
};

export const makeNumberField = (data: KindOfNumber, ctx: CompileContext) =>
  ({
    type: isIntegerKind(data.digit) ? "integer" : "number",
    ...withDefault(data.default),
    ...withTexts(data),
    ...(ctx.options.kindData ? (xparamNumber(data) satisfies X_Param) : {}),
  } satisfies JSONSchemaType<number>);

export const makeNumberArrayField = (
  data: KindOfNumberArray,
  ctx: CompileContext
) =>
  ({
    type: "array",
    items: {
      type: isIntegerKind(data.digit) ? "integer" : "number",
    },
    ...withDefault(data.default),
    ...withTexts(data),
    ...(ctx.options.kindData ? xparamNumber(data) : {}),
  } satisfies JSONSchemaType<number[]>);

export const makeIdField = (
  data: KindOfRpgDataId | KindOfSystemDataId,

  ctx: CompileContext
) =>
  ({
    type: "integer",
    ...withDefault(data.default),
    ...withTexts(data),
    ...(ctx.options.kindData ? (xparamDataId(data) satisfies X_Param) : {}),
  } satisfies JSONSchemaType<number>);

export const makeBooleanField = (data: KindOfBoolean, ctx: CompileContext) =>
  ({
    type: "boolean",
    ...withDefault(data.default),
    ...withTexts(data),
    ...(ctx.options.kindData ? (xparamBoolean(data) satisfies X_Param) : {}),
  } satisfies JSONSchemaType<boolean>);

export const makeComboField = (data: KindOFCombo) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<string>);

export const makeFileField = (data: KindOfFile) =>
  ({
    type: "string",
    ...withDefault(data.default),
    ...withTexts(data),
  } satisfies JSONSchemaType<string>);

export const makeStructRef = (ref: KindOfStructRef) => ({
  $ref: `#/definitions/${ref.struct}`,
  ...withTexts(ref),
});
