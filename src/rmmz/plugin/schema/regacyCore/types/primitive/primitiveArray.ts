import type { AnnotationBase } from "./annotationBase";

type ValueType<
  T extends AnnotationBase,
  Key extends keyof T
> = Key extends "type"
  ? `${T["type"]}[]`
  : Key extends "default"
  ? Array<T["default"]>
  : T[Key];

export type ToArrayAnnotation<T extends AnnotationBase> = {
  [K in keyof T]: ValueType<T, K>;
};
// Omit<T,"type"|"default">ではダメです。
// 型ごとの個別パラメータが無視されてしまう
