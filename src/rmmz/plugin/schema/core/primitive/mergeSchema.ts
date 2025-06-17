import type {
  NewRmmzParam_Boolean,
  NewRmmzParam_DataId,
  NewRmmzParam_Number,
  NewRmmzParam_String,
  NewRmmzParam_Unknown,
} from "./newParamType";
import { isRmmzDataKind } from "./rpgDataId/lookup";
import type {
  X_Param_Boolean,
  X_Param_DataId,
  X_Param_Number,
  X_Param_String,
} from "./x-rpg-param";
import type { SchemaDescriptionFields } from "./x-rpg-param2";

export const makeBooleanParam = (
  schema: SchemaDescriptionFields<boolean>,
  xparam: X_Param_Boolean
): Required<NewRmmzParam_Boolean> => ({
  type: "boolean",
  default: schema.default,
  desc: schema.description,
  text: schema.title,
  on: xparam.data.on ?? "",
  off: xparam.data.off ?? "",
  parent: xparam.parent ?? "",
});

export const makeNumberParam = (
  schema: SchemaDescriptionFields<number> & {
    maximum?: number;
    minimum?: number;
  },
  xparam: X_Param_Number
): Required<NewRmmzParam_Number> => ({
  type: "number",
  default: Number.isNaN(schema.default) ? 0 : schema.default,
  desc: schema.description,
  text: schema.title,
  max: schema.maximum ?? Number.MAX_SAFE_INTEGER,
  min: schema.minimum ?? Number.MIN_SAFE_INTEGER,
  parent: xparam.parent ?? "",
  digit: xparam.data.digit ?? 0,
});

export const makeDataIdStringParam = (
  schema: SchemaDescriptionFields<string>,
  xparam: X_Param_String
): Required<NewRmmzParam_String> => ({
  type: xparam.kind,
  default: schema.default,
  desc: schema.description,
  text: schema.title,
  parent: xparam.parent ?? "",
});

export const makeDataIdParam = (
  schema: SchemaDescriptionFields<number>,
  xparam: X_Param_DataId
): Required<NewRmmzParam_DataId> | NewRmmzParam_Unknown<number> => ({
  // 解決失敗の場合は空文字列にする。ツクールMZの構文上、正当な処理として扱える
  type: isRmmzDataKind(xparam.data) ? xparam.data.kind : "",
  default: schema.default,
  desc: schema.description,
  text: schema.title,
  parent: xparam.parent ?? "",
});
