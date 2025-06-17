import type { AnnotationBase } from "./annotationBase";
import type { BooleanArg } from "./boolean";

type KeyMap<T extends AnnotationBase, Index extends string> = {
  [K in keyof Required<T>]: Index;
};
export type GGG<
  T extends Omit<AnnotationBase, "default">,
  ValueType = string
> = {
  [K in keyof T]: T[K] extends ValueType ? K : never;
}[keyof T];

export type XX = GGG<Required<BooleanArg>>;
