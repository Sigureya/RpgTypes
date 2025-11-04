import type { JSONValue } from "@RpgTypes/libs";
import type { PrimitiveParam } from "@RpgTypes/rmmz/plugin";
import { JSONPathJS } from "jsonpath-js";
import type { ScalaPathResult } from "./arrayEx/types/result";
import type { StructPropertysPath } from "./types";

export const rrr = (
  json: JSONValue,
  path: StructPropertysPath
): ScalaPathResult[] => {
  if (!path.scalas) {
    return [];
  }
  const p = new JSONPathJS(path.scalas);
  const seg = p.pathSegments(json);
  return pp(seg, path);
};

interface Seg {
  value: JSONValue;
  segments: (string | number)[];
}

const pp = (
  seg: ReadonlyArray<Seg>,
  path: StructPropertysPath
): ScalaPathResult[] => {
  return seg.reduce<ScalaPathResult[]>((acc, { segments, value }) => {
    if (typeof value === "object") {
      return acc;
    }
    const name = segments[segments.length - 1];
    if (typeof name === "number") {
      return acc;
    }

    const schema: PrimitiveParam | undefined = path.os[name];
    if (!schema) {
      return acc;
    }

    const result: ScalaPathResult = {
      value: value,
      structName: path.structName,
      param: { name, attr: schema },
    };
    return [...acc, result];
  }, []);
};
