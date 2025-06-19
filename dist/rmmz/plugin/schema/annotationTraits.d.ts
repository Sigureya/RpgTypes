import { AnnotationPrimitiveTypes, AnnotationTypes } from './core';
export declare const isArrayAnnotation: (ant: AnnotationPrimitiveTypes) => ant is Extract<AnnotationPrimitiveTypes, {
    type: `${string}[]`;
}>;
export declare const isTextAnnotation: (ant: AnnotationTypes) => ant is Extract<AnnotationTypes, {
    type: "string" | "multiline_string";
}>;
export declare const isTextArrayAnnotation: (ant: AnnotationTypes) => ant is Extract<AnnotationTypes, {
    type: "string[]" | "multiline_string[]";
}>;
