import type { PrimitiveParam } from "@RpgTypes/rmmz/plugin/schema/compile";
import { compileArrayField } from "./scala/base/basicMetaField";
import {
  compileBooleanFieldWithXParam,
  compileBooleanField,
} from "./scala/boolean";
import { compileComboField, compileComboFieldWithXparam } from "./scala/combo";
import { compileFileField, compileFileFieldWithXparam } from "./scala/file";
import type { AnyParamSchema } from "./scala/meta/anyParamSchema";
import {
  compileNumberArrayField,
  compileNumberArrayFieldWithXParam,
  compileNumberField,
  compileNumberFieldWithXparam,
} from "./scala/numbers";
import { makeRpgIdField, makeRpgIdFieldWithXParam } from "./scala/rpgDataKind";
import {
  compileSelectField,
  compileSelectFieldWithXparam,
} from "./scala/select";
import {
  compileStringField,
  compileStringFieldWithXparam,
} from "./scala/string";
import { makeStructRef } from "./scala/structDef";

const makeStringArrayField = (
  data: Extract<PrimitiveParam, { default: string[] }>
) => compileArrayField(data, { type: "string" });

const makeDataIdArrayField = (
  data: Extract<PrimitiveParam, { default: number[] }>
) => compileArrayField(data, { type: "integer" });

export const compilePrimitiveField = (data: PrimitiveParam): AnyParamSchema => {
  switch (data.kind) {
    case "string":
    case "multiline_string":
      return compileStringField(data);
    case "file":
      return compileFileField(data);
    case "combo":
      return compileComboField(data);
    case "select":
      return compileSelectField(data);
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
      return makeRpgIdField(data);
    case "boolean":
      return compileBooleanField(data);
    case "struct":
      return makeStructRef(data);
    default:
      return {};
  }
};

export const compilePrimitiveFieldWithXParam = (
  data: PrimitiveParam
): AnyParamSchema => {
  switch (data.kind) {
    case "string":
    case "multiline_string":
      return compileStringFieldWithXparam(data);
    case "file":
      return compileFileFieldWithXparam(data);
    case "combo":
      return compileComboFieldWithXparam(data);
    case "select":
      return compileSelectFieldWithXparam(data);
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
      return makeRpgIdFieldWithXParam(data);
    case "boolean":
      return compileBooleanFieldWithXParam(data);
    case "struct":
      return makeStructRef(data);
    default:
      return {};
  }
};
