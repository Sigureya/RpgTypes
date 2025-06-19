import { AnnotationPrimitiveTypes, StructBase, StructAnnotationBase_WithParams, StructAnnotationBase_WithType, AnnotationTypes } from './core';
export declare const maxDepth: (obj: AnnotationPrimitiveTypes | StructAnnotationBase_WithParams) => number;
export declare const flatStructs: (annotation: AnnotationPrimitiveTypes | StructAnnotationBase_WithType) => Set<StructBase>;
export declare const traverseStruct: <Result, Ant extends AnnotationPrimitiveTypes | StructAnnotationBase_WithParams>(obj: Ant, callback: (structName: AnnotationTypes, acc: Result, depth: number) => Result, initialValue: Result) => Result;
