import type * as Types from "./core";
export declare const makeDefaultValueJSONLike: (annotation: Types.AnnotationPrimitiveTypes | Types.StructAnnotation_Union<object>, dic?: Types.Dictionary) => string;
export declare const makeDefaultStruct: <T extends object>(annotation: Types.StructAnnotation_Union<T>) => T;
