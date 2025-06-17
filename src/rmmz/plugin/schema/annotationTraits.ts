import type { AnnotationPrimitiveTypes, AnnotationTypes } from "./core";

export const isArrayAnnotation = (
  ant: AnnotationPrimitiveTypes
): ant is Extract<AnnotationPrimitiveTypes, { type: `${string}[]` }> => {
  return ant.type.endsWith("[]");
};

export const isTextAnnotation = (
  ant: AnnotationTypes
): ant is Extract<AnnotationTypes, { type: "string" | "multiline_string" }> => {
  return ant.type === "string" || ant.type === "multiline_string";
};

export const isTextArrayAnnotation = (
  ant: AnnotationTypes
): ant is Extract<
  AnnotationTypes,
  { type: "string[]" | "multiline_string[]" }
> => {
  return ant.type === "string[]" || ant.type === "multiline_string[]";
};
