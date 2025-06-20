import { StructNode_Error } from './errors';
import { AnnotationBaseTexts, AnnotationPrimitiveTypes, BooleanArg, Primitive_Numbers, Primitive_Strings, Primitive_StringsArray, Primitive_NumbersArray } from './primitive';
export type AnnotationTypes = AnnotationPrimitiveTypes | StructNode_Error | StructAnnotationBase_Union | StructAnnotationBase_Array;
export interface StructBasePrimitive {
    structName: string;
    params: ParameterBasePrimitive;
}
export interface ParameterBasePrimitive extends Record<string, AnnotationPrimitiveTypes> {
}
export interface StructBase {
    structName: string;
    params: ParameterBase;
}
export interface ParameterBase extends Record<string, AnnotationTypes> {
}
export interface HasStruct {
    struct: StructBase;
    default?: unknown;
}
type ROOT = "root";
export interface StructAnnotation<T extends object> extends NodeChild_StructWithType<T, ROOT, T> {
}
export interface StructAnnotation_WithDefault<T extends object> extends NodeChild_StructWithDefault<T, ROOT, T> {
}
export interface StructAnnotation_WithType<T extends object> extends NodeChild_StructWithType<T, ROOT, T> {
}
export interface StructAnnotation_WithName<T extends object> extends NodeChild_StructWithName<T, ROOT, T> {
}
export interface StructAnnotation_WithParams<T extends object> extends NodeChild_StructWithParams<T, ROOT, T> {
}
export interface StructAnnotation_Completed<T extends object> extends NodeChild_StructCompleted<T, ROOT, T> {
}
export type StructAnnotation_Union<T extends object> = StructAnnotation<T> | StructAnnotation_WithDefault<T> | StructAnnotation_WithType<T> | StructAnnotation_WithName<T> | StructAnnotation_WithParams<T>;
export type StructAnnotation_Partial<T extends object> = NodeChild_Union<T, "root", T>;
export type StructType_Union<T extends object> = StructType<T> | StructType_WithName<T> | StructType_WithParams<T>;
export interface StructType<T extends object> extends StructBase {
    structName: string;
    params: StructParameters<T>;
}
export interface StructType_WithName<T extends object> {
    structName: string;
    params?: StructParameters<T>;
}
export interface StructType_WithParams<T extends object> {
    structName?: string;
    params: StructParameters<T>;
}
export type StructParameters<T extends object> = NodeParent_StructParameters<T, ROOT, T>;
export type StructAnnotationBase_Union = StructAnnotationBase_WithName | StructAnnotationBase_WithParams | StructAnnotationBase_WithDefault | StructAnnotationBase_WithType | StructAnnotationBase_Completed;
export interface StructAnnotationBase_Partial extends AnnotationBaseTexts {
    type: "struct";
    struct?: {
        structName?: string;
        params?: ParameterBase;
    };
    default?: object;
}
export interface StructAnnotationBase_Completed extends StructAnnotationBase_Partial, HasStruct {
    type: "struct";
    struct: StructBase;
    default: object;
}
export interface StructAnnotationBase_WithType extends StructAnnotationBase_Partial, HasStruct {
    struct: {
        structName: string;
        params: ParameterBase;
    };
    default?: object;
}
export interface StructAnnotationBase_WithName extends StructAnnotationBase_Partial {
    struct: {
        structName: string;
        params?: ParameterBase;
    };
    default?: object;
}
export interface StructAnnotationBase_WithParams extends StructAnnotationBase_Partial {
    struct: {
        structName?: string;
        params: ParameterBase;
    };
    default?: object;
}
export interface StructAnnotationBase_WithDefault extends StructAnnotationBase_Partial {
    default: object;
    struct?: {
        structName?: string;
        params?: ParameterBase;
    };
}
export interface StructAnnotationBase_Array extends HasStruct, AnnotationBaseTexts {
    type: "struct_def[]";
    struct: StructBase;
    default: object[];
}
type NodeParent_StructParameters<T extends object, Path extends string, KnowTypes extends object> = {
    [Key in Extract<keyof T, string>]: NodeChild_ParamType<T[Key], `${Path}.${Key}`, T | KnowTypes>;
};
type NodeChild_ParamType<T, Path extends string, KnowTypes extends object> = T extends boolean ? BooleanArg : T extends number ? Primitive_Numbers : T extends string ? Primitive_Strings : T extends string[] ? Primitive_StringsArray : T extends number[] ? Primitive_NumbersArray : T extends KnowTypes ? StructNode_Error<Path> : T extends KnowTypes[] ? StructNode_Error<`${Path}[]`> : T extends object[] ? NodeChild_Array<T, KnowTypes, Path> : T extends object ? NodeChild_Union<T, Path, KnowTypes> : StructNode_Error<`never:${Path}`>;
interface NodeChild_Array<Array extends object[], KnowTypes extends object, Path extends string> extends StructAnnotationBase_Array {
    type: "struct_def[]";
    default: Array;
    struct: {
        structName: string;
        params: NodeParent_StructParameters<Array[number], `${Path}[]`, Array[number] | KnowTypes>;
    };
}
type NodeChild_Union<T extends object, Path extends string, KnowTypes extends object> = NodeChild_StructWithType<T, Path, KnowTypes> | NodeChild_StructWithName<T, Path, KnowTypes> | NodeChild_StructWithDefault<T, Path, KnowTypes> | NodeChild_StructWithParams<T, Path, KnowTypes>;
interface NodeChild_StructWithType<T extends object, Path extends string, KnowTypes extends object> extends StructAnnotationBase_WithType {
    type: "struct";
    struct: {
        structName: string;
        params: NodeParent_StructParameters<T, Path, KnowTypes>;
    };
    default?: T;
}
interface NodeChild_StructWithName<T extends object, Path extends string, KnowTypes extends object> extends StructAnnotationBase_WithName {
    type: "struct";
    struct: {
        structName: string;
        params?: NodeParent_StructParameters<T, Path, KnowTypes>;
    };
    default?: T;
}
interface NodeChild_StructWithParams<T extends object, Path extends string, KnowTypes extends object> extends StructAnnotationBase_WithParams {
    type: "struct";
    struct: {
        structName?: string;
        params: NodeParent_StructParameters<T, Path, KnowTypes>;
    };
    default?: T;
}
interface NodeChild_StructWithDefault<T extends object, Path extends string, KnowTypes extends object> extends StructAnnotationBase_WithDefault {
    type: "struct";
    default: T;
    struct?: {
        structName?: string;
        params?: NodeParent_StructParameters<T, Path, KnowTypes>;
    };
}
interface NodeChild_StructCompleted<T extends object, Path extends string, KnowTypes extends object> extends StructAnnotationBase_Completed {
    type: "struct";
    struct: {
        structName: string;
        params: NodeParent_StructParameters<T, Path, KnowTypes>;
    };
}
export {};
