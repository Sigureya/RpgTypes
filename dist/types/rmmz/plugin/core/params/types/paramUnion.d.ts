import { StructDefParam, StructArrayDefParam } from './objectSturctDef';
import { StringParam, AnyStringParam, ComboParam, SelectParam, BooleanParam, NumberParam, NumberArrayParam, StringArrayParam, RpgVariableParam, RpgVariableArrayParam, RpgSwitchParam, RpgSwitchArrayParam, FileParam, FileArrayParam, StructRefParam, StructArrayRefParam, ArrayParam, KindOfStructBase } from './primitive';
import { SystemDataIdParam, SystemDataIdArrayParam, RpgDataIdParam, RpgDataIdArrayParam } from './rpgDataTypes';
export type PrimitiveStringParam = StringParam | AnyStringParam | ComboParam | SelectParam;
export type PrimitiveParam = BooleanParam | NumberParam | NumberArrayParam | RpgDataIdParam | RpgDataIdArrayParam | ComboParam | SelectParam | StringParam | StringArrayParam | SystemDataIdParam | SystemDataIdArrayParam | RpgVariableParam | RpgVariableArrayParam | RpgSwitchParam | RpgSwitchArrayParam | FileParam | FileArrayParam | StructRefParam | StructArrayRefParam | AnyStringParam;
export type ParamKinds = Exclude<PrimitiveParam, ArrayParam | StructArrayRefParam>["kind"];
export type ScalaParam = Exclude<PrimitiveParam, ArrayParam | StructArrayRefParam | KindOfStructBase>;
export type ArrayParamTypes = Extract<PrimitiveParam, ArrayParam>;
export type StructParam = PrimitiveParam | StructDefParam<object> | StructArrayDefParam<object>;
