import type {
  AnnotationPrimitiveTypes,
  StructBase,
  StructAnnotationBase_WithParams,
  StructAnnotationBase_WithType,
  AnnotationTypes,
} from "./core";
import { hasStruct } from "./structHasMember";

export const maxDepth = (
  obj: AnnotationPrimitiveTypes | StructAnnotationBase_WithParams
): number => {
  return traverseStruct(
    obj,
    (s, acc, depth) => {
      return Math.max(depth, acc);
    },
    0
  );
};

export const flatStructs = (
  annotation: AnnotationPrimitiveTypes | StructAnnotationBase_WithType
): Set<StructBase> => {
  return traverseStruct(
    annotation,
    (s, acc) => {
      if (hasStruct(s)) {
        acc.add(s.struct);
      }
      return acc;
    },
    new Set<StructBase>()
  );
};

export const traverseStruct = <
  Result,
  Ant extends AnnotationPrimitiveTypes | StructAnnotationBase_WithParams
>(
  obj: Ant,
  callback: (structName: AnnotationTypes, acc: Result, depth: number) => Result,
  initialValue: Result
) => {
  const x = callback(obj, initialValue, 0);
  return traverseHelper(obj, callback, x);
};

const traverseHelper = <Result>(
  annotation: AnnotationTypes,
  fn: (annotation: AnnotationTypes, value: Result, depth: number) => Result,
  initValue: Result,
  depth: number = 0
): Result => {
  if (depth > 32) {
    throw new Error("Max depth exceeded");
  }
  const newValue = fn(annotation, initValue, depth);
  if (!hasStruct(annotation)) {
    return newValue;
  }
  return Object.entries<AnnotationTypes>(
    annotation.struct.params
  ).reduce<Result>((prev, [, an2]) => {
    return traverseHelper(an2, fn, prev, depth + 1);
  }, newValue);
};
