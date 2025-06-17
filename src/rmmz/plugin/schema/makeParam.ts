import type {
  AnnotationPrimitiveTypes,
  Dictionary,
  StructAnnotationBase_Completed,
} from "./core";
import {
  baseAnnotions,
  booleanAnnotations,
  comboAnnotations,
  fileAnnotations,
  numberAnnotations,
  selectAnnotations,
  typeAnnotation,
} from "./makeAnnotation";
import { makeDefaultValueJSONLike } from "./makeDefault";
import { mapping } from "./mapping";
import type { ParamTexts } from "./paramTexts";

export const uniqueAnnotations = (
  ant: AnnotationPrimitiveTypes | StructAnnotationBase_Completed,
  dic: Dictionary = {}
) => {
  return mapping<`@${string} ${string}`[]>(ant, {
    boolean: (b) => booleanAnnotations(b, dic),
    number: (num) => numberAnnotations(num),
    file: (f) => fileAnnotations(f),
    string: () => [],
    struct: () => [],
    select: (s) => selectAnnotations(s, dic),
    combo: (c) => comboAnnotations(c),
    dataIndex: () => [],
  });
};

export const makeParam = (
  name: string,
  ant: AnnotationPrimitiveTypes | StructAnnotationBase_Completed,
  mode: "@param" | "@arg" = "@param",
  dic: Dictionary = {}
): ParamTexts => {
  return {
    other: uniqueAnnotations(ant, dic),
    default: `@default ${makeDefaultValueJSONLike(ant)}`,
    name: `${mode} ${name}`,
    type: typeAnnotation(ant),
    base: baseAnnotions(ant, dic),
  };
};

export const joinAnntations = (paramTexts: ParamTexts): string[] => {
  return [
    "",
    paramTexts.name,
    paramTexts.type,
    paramTexts.default,
    ...paramTexts.base,
    ...paramTexts.other,
  ];
};
