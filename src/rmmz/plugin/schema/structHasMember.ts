import type {
  StructAnnotation_Union,
  StructAnnotation_WithName,
  StructAnnotation_WithParams,
  StructAnnotation_WithDefault,
  AnnotationTypes,
  HasStruct,
  StructType_WithParams,
  AnnotationPrimitiveTypes,
} from "./core";

export const hasStruct = (
  annotation: AnnotationTypes
): annotation is Extract<AnnotationTypes, HasStruct> => {
  return annotation.type === "struct"
    ? hasStructParams(annotation)
    : annotation.type === "struct[]";
};

export const hasStructParams = <T extends object>(
  annotation: StructAnnotation_Union<T>
): annotation is StructAnnotation_WithParams<T> => {
  const st = annotation.struct;
  if (st === undefined) {
    return false;
  }
  return st.params !== undefined;
};

export const hasStructDefault = <T extends object>(
  annotation: StructAnnotation_Union<T>
): annotation is StructAnnotation_WithDefault<T> => {
  return annotation.default !== undefined;
};

export const hasStructName = <T extends object>(
  annotation: StructAnnotation_Union<T>
): annotation is StructAnnotation_WithName<T> => {
  const st = annotation.struct;
  if (st === undefined) {
    return false;
  }
  return st.structName !== undefined;
};

const isError = (ant: AnnotationTypes) => {
  return ant.type === "error";
};
export const isPrimitiveAnnotation = (
  ant: AnnotationTypes
): ant is AnnotationPrimitiveTypes => {
  return !hasStruct(ant) && !isError(ant);
};

export const primitveParams = <T extends object>(
  type: StructType_WithParams<T>
) => {
  return Object.entries<AnnotationTypes>(type.params).filter(([key, p]) =>
    isPrimitiveAnnotation(p)
  );
};
