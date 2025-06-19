import { StructAnnotation_Union, StructAnnotation_WithName, StructAnnotation_WithParams, StructAnnotation_WithDefault, AnnotationTypes, HasStruct, StructType_WithParams, AnnotationPrimitiveTypes } from './core';
export declare const hasStruct: (annotation: AnnotationTypes) => annotation is Extract<AnnotationTypes, HasStruct>;
export declare const hasStructParams: <T extends object>(annotation: StructAnnotation_Union<T>) => annotation is StructAnnotation_WithParams<T>;
export declare const hasStructDefault: <T extends object>(annotation: StructAnnotation_Union<T>) => annotation is StructAnnotation_WithDefault<T>;
export declare const hasStructName: <T extends object>(annotation: StructAnnotation_Union<T>) => annotation is StructAnnotation_WithName<T>;
export declare const isPrimitiveAnnotation: (ant: AnnotationTypes) => ant is AnnotationPrimitiveTypes;
export declare const primitveParams: <T extends object>(type: StructType_WithParams<T>) => [string, AnnotationTypes][];
