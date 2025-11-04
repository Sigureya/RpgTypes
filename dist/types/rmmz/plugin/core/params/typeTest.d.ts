import { PrimitiveParam, ArrayParam, ParamKinds, ScalaParam, StructRefParam, PluginParam, PluginParamEx, StructArrayRefParam, PrimitiveStringParam, StringArrayParam, ArrayParamTypes, RpgVariableParam, RpgVariableArrayParam, FileParam, FileArrayParam } from './types';
export declare const isArrayParam: <T extends PrimitiveParam>(param: T) => param is Extract<T, ArrayParam>;
export declare const isArrayAttr: <T extends PrimitiveParam>(param: PluginParamEx<T>) => param is PluginParamEx<Extract<T, ArrayParam>>;
export declare const isArrayParamEx: <T extends PrimitiveParam, K extends ParamKinds>(param: T, kind: K) => param is Extract<T, ArrayParam & {
    kind: `${K}[]`;
}>;
export declare const isScalarParam: <T extends PrimitiveParam>(param: T) => param is Extract<T, ScalaParam>;
export declare const isStructParam: (param: PrimitiveParam) => param is StructRefParam;
export declare const hasStructAttr: (param: PluginParam) => param is PluginParamEx<StructRefParam | StructArrayRefParam>;
export declare const isStructArrayParam: (param: PrimitiveParam) => param is StructArrayRefParam;
export declare const isStructArrayAttr: (param: PluginParam) => param is PluginParamEx<StructArrayRefParam>;
export declare const paramHasText: (param: PrimitiveParam) => param is PrimitiveStringParam | StringArrayParam;
export declare const hasTextAttr: <P extends PrimitiveParam>(param: PluginParamEx<P>) => param is PluginParamEx<Extract<P, PrimitiveStringParam | StringArrayParam>>;
export declare const isStringValueParam: (param: ScalaParam) => param is Extract<PrimitiveParam, {
    default: string;
}>;
export declare const isNumberValueParam: (param: PrimitiveParam) => param is Extract<PrimitiveParam, {
    default: number;
}>;
export declare const isNumberValueParamEx: (param: ScalaParam) => param is Extract<PrimitiveParam, {
    default: number;
}>;
export declare const hasNumberValueParam: (param: PrimitiveParam) => param is Extract<PrimitiveParam, {
    default: number | number[];
}>;
export declare const isNumberArrayParam: (param: ArrayParam) => param is Extract<ArrayParam, {
    default: number[];
}>;
export declare const isNumberAttr: (param: PluginParam) => param is PluginParamEx<Extract<PrimitiveParam, {
    default: number[] | number;
}>>;
export declare const isStringArrayParam: (param: ArrayParam) => param is Extract<ArrayParamTypes, {
    default: string[];
}>;
export declare const isVariableAttr: (param: PluginParam) => param is PluginParamEx<RpgVariableParam> | PluginParamEx<RpgVariableArrayParam>;
export declare const isFileAttr: (param: PluginParam) => param is PluginParamEx<FileParam | FileArrayParam>;
