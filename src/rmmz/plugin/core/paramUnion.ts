import type {
  AnyStringParam,
  ArrayParam,
  BooleanParam,
  ComboParam,
  FileArrayParam,
  FileParam,
  KindOfStructBase,
  NumberArrayParam,
  NumberParam,
  RpgDataIdArrayParam,
  RpgDataIdParam,
  RpgSwitchParam,
  RpgVariableParam,
  SelectParam,
  StringArrayParam,
  StringParam,
  StructArrayRefParam,
  StructRefParam,
  SystemDataIdArrayParam,
  SystemDataIdParam,
} from "./primitiveParams";

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
  | RpgSwitchParam
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
