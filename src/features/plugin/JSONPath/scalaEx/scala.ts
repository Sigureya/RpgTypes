import type { JSONValue } from "@RpgTypes/libs";
import type { PluginParam, ScalaParam } from "@RpgTypes/rmmz/plugin";
import { JSONPathJS } from "jsonpath-js";

export interface ScalaPathResult {
  value: number | string | boolean;
  param: PluginParam<ScalaParam>;
}

export const ssss = (
  data: JSONValue,
  path: string,
  params: ReadonlyArray<PluginParam<ScalaParam>>
): ScalaPathResult[] => {
  const map = new Map(params.map((param) => [param.name, param.attr] as const));
  const jsonPath = new JSONPathJS(path);
  const values = jsonPath.pathSegments(data);
  return values.reduce<ScalaPathResult[]>((acc, { value, segments }) => {
    if (typeof value === "object") {
      return acc;
    }
    const lastSegment = segments[segments.length - 1];
    if (typeof lastSegment === "number") {
      return acc;
    }
    const schema = map.get(lastSegment);
    if (!schema) {
      return acc;
    }
    acc.push({
      value: value,
      param: {
        name: lastSegment,
        attr: schema,
      },
    });
    return acc;
  }, []);
};
