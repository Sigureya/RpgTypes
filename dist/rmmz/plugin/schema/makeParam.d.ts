import { AnnotationPrimitiveTypes, Dictionary, StructAnnotationBase_Completed } from './core';
import { ParamTexts } from './paramTexts';
export declare const uniqueAnnotations: (ant: AnnotationPrimitiveTypes | StructAnnotationBase_Completed, dic?: Dictionary) => `@${string} ${string}`[];
export declare const makeParam: (name: string, ant: AnnotationPrimitiveTypes | StructAnnotationBase_Completed, mode?: "@param" | "@arg", dic?: Dictionary) => ParamTexts;
export declare const joinAnntations: (paramTexts: ParamTexts) => string[];
