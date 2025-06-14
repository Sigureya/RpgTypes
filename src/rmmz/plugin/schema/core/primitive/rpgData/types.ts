import type { AnnotationBase } from "../annotationBase";

export interface RmmzParam_DataIndex<Name extends string>
  extends AnnotationBase {
  type: Name;
  default: number;
}

export interface RmmzParam_DataIndexArray<Name extends string>
  extends AnnotationBase {
  type: `${Name}[]`;
  default: number[];
}
