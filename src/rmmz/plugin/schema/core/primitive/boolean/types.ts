import type { AnnotationBase } from "../annotationBase";
export interface BooleanArg extends AnnotationBase {
  default: boolean;
  type: "boolean";
  on?: string;
  off?: string;
}

export interface MetaParam_Boolean {
  on: string;
  off: string;
}

export interface X_MetaParamCore_Boolean {
  on: string;
  off: string;
}

export interface RmmzParamCore_Boolean {
  default: boolean;
  type: "boolean";
  on?: string;
  off?: string;
}
