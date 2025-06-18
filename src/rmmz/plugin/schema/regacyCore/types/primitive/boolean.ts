import type { AnnotationBase } from "./annotationBase";
export interface BooleanArg extends AnnotationBase {
  default: boolean;
  kind: "boolean";
  on?: string;
  off?: string;
}
