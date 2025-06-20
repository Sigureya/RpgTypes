import type { AnySchema } from "ajv";
import type { CompileContext } from "../context";
import { makeBooleanFieldWithXParam, makeBooleanField } from "./boolean";
import type { StructParamPrimitive } from "./core/primitiveParams";
import { makeNumberArrayField, makeNumberField } from "./numbers";
import { makeIdFieldWithXParam, makeIdField } from "./rpgDataKind";
import {
  makeStringField,
  makeFileField,
  makeComboField,
  makeSelectField,
} from "./string";
import { makeStructRef } from "./structDef";
import { makeArrayField } from "./utils";

export const compilePrimitive = (
  data: StructParamPrimitive,
  ctx: CompileContext
): AnySchema => {
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
      return makeArrayField(data, "string");
    case "string[]":
      return makeArrayField(data, "string");
    case "number[]":
      return makeNumberArrayField(data);
    case "actor[]":
    case "weapon[]":
    case "armor[]":
    case "skill[]":
    case "item[]":
    case "enemy[]":
    case "state[]":
    case "class[]":
    case "troop[]":
      return makeArrayField(data, "integer");
    case "number":
      return makeNumberField(data);
    case "actor":
    case "weapon":
    case "armor":
    case "skill":
    case "item":
    case "enemy":
    case "state":
    case "class":
    case "troop":
      return ctx.options.kindData
        ? makeIdFieldWithXParam(data)
        : makeIdField(data);
    case "boolean":
      return ctx.options.kindData
        ? makeBooleanFieldWithXParam(data)
        : makeBooleanField(data);
    case "struct":
      return makeStructRef(data);
    default:
      return {};
  }
};
