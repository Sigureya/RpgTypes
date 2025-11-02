import type { StructDefParam, StructArrayDefParam } from "./objectSturctDef";
import type {
  StringParam,
  AnyStringParam,
  ComboParam,
  SelectParam,
  BooleanParam,
  NumberParam,
  NumberArrayParam,
  StringArrayParam,
  RpgVariableParam,
  RpgVariableArrayParam,
  RpgSwitchParam,
  RpgSwitchArrayParam,
  FileParam,
  FileArrayParam,
  StructRefParam,
  StructArrayRefParam,
  ArrayParam,
  KindOfStructBase,
} from "./primitive";
import type {
  SystemDataIdParam,
  SystemDataIdArrayParam,
  RpgDataIdParam,
  RpgDataIdArrayParam,
} from "./rpgDataTypes";

export type PrimitiveStringParam =
  | StringParam
  | AnyStringParam
  | ComboParam
  | SelectParam;

export type PrimitiveParam =
  | BooleanParam
  | NumberParam
  | NumberArrayParam
  | RpgDataIdParam
  | RpgDataIdArrayParam
  | ComboParam
  | SelectParam
  | StringParam
  | StringArrayParam
  | SystemDataIdParam
  | SystemDataIdArrayParam
  | RpgVariableParam
  | RpgVariableArrayParam
  | RpgSwitchParam
  | RpgSwitchArrayParam
  | FileParam
  | FileArrayParam
  | StructRefParam
  | StructArrayRefParam
  | AnyStringParam;

export type ParamKinds = Exclude<
  PrimitiveParam,
  ArrayParam | StructArrayRefParam
>["kind"];

export type ScalaParam = Exclude<
  PrimitiveParam,
  ArrayParam | StructArrayRefParam | KindOfStructBase
>;

export type ArrayParamTypes = Extract<PrimitiveParam, ArrayParam>;

// 各パラメータ型のユニオン
export type StructParam =
  | PrimitiveParam
  | StructDefParam<object> // ネスト構造体対応
  | StructArrayDefParam<object>;
