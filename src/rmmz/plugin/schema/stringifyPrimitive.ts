import {
  isArrayAnnotation,
  isTextAnnotation,
  isTextArrayAnnotation,
} from "./annotationTraits";
import type {
  AnnotationArrayTypes,
  AnnotationPrimitiveTypes,
  AnnotationSigleTypes,
  Dictionary,
} from "./core";
import { lookupDictionary } from "./makeAnnotation";

// 基本的な型のアノテーションを取得する関数群
const stringifySingleAnnotation = (
  ant: AnnotationSigleTypes,
  dic: Dictionary = {}
): string => {
  return isTextAnnotation(ant)
    ? lookupDictionary(ant.default, dic)
    : ant.default.toString();
};

const stringifyArrayAnnotation = (
  ant: AnnotationArrayTypes,
  dic: Dictionary = {}
): string => {
  const list: string[] = isTextArrayAnnotation(ant)
    ? ant.default.map<string>((s: string) => lookupDictionary(s, dic))
    : ant.default.map((s: number | string) => s.toString());
  return JSON.stringify(list, null, 0);
};

export const stringifyPrimitiveAnnotation = (
  ant: AnnotationPrimitiveTypes,
  dic: Dictionary = {}
): string => {
  return isArrayAnnotation(ant)
    ? stringifyArrayAnnotation(ant, dic)
    : stringifySingleAnnotation(ant, dic);
};
