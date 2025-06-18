import type { AnnotationBase, TypeKey } from "./annotationBase";

type ValueType<
  T extends AnnotationBase,
  Key extends keyof T
> = Key extends TypeKey
  ? `${T[TypeKey]}[]`
  : Key extends "default"
  ? Array<T["default"]>
  : T[Key];

export type ToArrayAnnotation<T extends AnnotationBase> = {
  [K in keyof T]: ValueType<T, K>;
};
// Omit<T,"type"|"default">ではダメです。
// 型ごとの個別パラメータが無視されてしまう
