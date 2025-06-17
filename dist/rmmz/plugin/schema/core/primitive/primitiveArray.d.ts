import { AnnotationBase } from './oldTypes/annotationBase';
type ValueType<T extends AnnotationBase, Key extends keyof T> = Key extends "type" ? `${T["type"]}[]` : Key extends "default" ? Array<T["default"]> : T[Key];
export type ToArrayAnnotation<T extends AnnotationBase> = {
    [K in keyof T]: ValueType<T, K>;
};
export {};
