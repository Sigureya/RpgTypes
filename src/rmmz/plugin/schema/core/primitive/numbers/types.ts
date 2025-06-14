import type { AnnotationBase } from "../annotationBase";

export interface NumberArg extends AnnotationBase {
  min?: number;
  max?: number;
  digit?: number;
  default: number;
  type: "number";
}
export interface DataIndexArg<Name extends string> extends AnnotationBase {
  type: Name;
  default: number;
}

export interface X_MetaParam_Number {
  digit: number;
}

export interface RmmzParamCore_Number {
  type: "number";
  default: number;
  min?: number;
  max?: number;
  digit?: number;
}
