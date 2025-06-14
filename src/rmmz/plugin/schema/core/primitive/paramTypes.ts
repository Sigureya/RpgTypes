import type { AnnotationBase } from "./annotationBase";
import type { RmmzParamCore_DataIndex } from "./rpgData";

export type Actor = RmmzParamCore_DataIndex<"actor"> & AnnotationBase;
