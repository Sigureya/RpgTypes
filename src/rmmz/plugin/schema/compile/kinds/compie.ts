import type { JSONSchemaType } from "ajv";
import { makeBooleanFieldWithXParam, makeBooleanField } from "./boolean";
import type { StructParamPrimitive } from "./core/primitiveParams";
import {
  compileNumberArrayField,
  compileNumberArrayFieldWithXParam,
  compileNumberField,
  compileNumberFieldWithXparam,
} from "./numbers";
import { makeIdFieldWithXParam, makeIdField } from "./rpgDataKind";
import {
  makeStringField,
  makeFileField,
  makeComboField,
  makeSelectField,
  makeFileFieldWithXparam,
  makeComboFieldWithXparam,
  makeSelectFieldWithXparam,
} from "./string";
import { makeStructRef } from "./structDef";
import { makeArrayField } from "./utils";

export type AnyParamSchema =
  | {}
  | JSONSchemaType<number>
  | JSONSchemaType<string>
  | JSONSchemaType<boolean>
  | JSONSchemaType<number[]>
  | JSONSchemaType<string[]>
  | JSONSchemaType<object>
  | JSONSchemaType<object[]>
  | { $ref: string };

const makeStringArrayField = (
  data: Extract<StructParamPrimitive, { default: string[] }>
) => makeArrayField<string>(data, "string");

const makeDataIdArrayField = (
  data: Extract<StructParamPrimitive, { default: number[] }>
) => makeArrayField<number>(data, "integer");

export const compilePrimitiveFiled = (
  data: StructParamPrimitive
): AnyParamSchema => {
  switch (data.kind) {
    case "string":
    case "multiline_string":
      return makeStringField(data);
    case "file":
      return makeFileField(data);
    case "combo":
      return makeComboField(data);
    case "select":
      return makeSelectField(data);
    case "file[]":
      return makeStringArrayField(data);
    case "string[]":
    case "multiline_string[]":
      return makeStringArrayField(data);
    case "number[]":
      return compileNumberArrayField(data);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return makeDataIdArrayField(data);
    case "number":
      return compileNumberField(data);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return makeIdField(data);
    case "boolean":
      return makeBooleanField(data);
    case "struct":
      return makeStructRef(data);
    default:
      return {};
  }
};

export const compilePrimitiveFiledWithXParam = (
  data: StructParamPrimitive
): AnyParamSchema => {
  switch (data.kind) {
    case "string":
    case "multiline_string":
      return makeStringField(data);
    case "file":
      return makeFileFieldWithXparam(data);
    case "combo":
      return makeComboFieldWithXparam(data);
    case "select":
      return makeSelectFieldWithXparam(data);
    case "file[]":
      return makeStringArrayField(data);
    case "string[]":
    case "multiline_string[]":
      return makeStringArrayField(data);
    case "number[]":
      return compileNumberArrayFieldWithXParam(data);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return makeDataIdArrayField(data);
    case "number":
      return compileNumberFieldWithXparam(data);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return makeIdFieldWithXParam(data);
    case "boolean":
      return makeBooleanFieldWithXParam(data);
    case "struct":
      return makeStructRef(data);
    default:
      return {};
  }
};
