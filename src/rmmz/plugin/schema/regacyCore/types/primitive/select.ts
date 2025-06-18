import type { AnnotationBase } from "./annotationBase";

interface ValuePair<T> {
  option: string;
  value: T;
}

export interface Select<T extends number | string> extends AnnotationBase {
  kind: "select";
  default: T;
  options: ValuePair<T>[];
}
