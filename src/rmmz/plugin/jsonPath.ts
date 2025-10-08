import type { PluginParam, PluginStructSchemaArray } from "./core";
import { isArrayParam } from "./typeTest";

interface PathX {
  kind: string;
  path: string[];
}
export const structToJsonPath2 = (
  params: PluginParam[],
  parentPath: ReadonlyArray<string> = []
) => {
  return params;
};
export const structToJsonPath = (
  params: PluginParam[],
  parentPath: ReadonlyArray<string> = []
): PathX[] => {
  return params.map(
    (p): PathX => ({
      kind: p.attr.kind,
      path: [...parentPath, p.name],
    })
  );
};

const xxxPath = (
  param: PluginParam,
  parentPath: ReadonlyArray<string>
): PathX | undefined => {
  if (isArrayParam(param.attr)) {
    return {
      kind: param.attr.kind,
      path: [...parentPath, param.name, "[*]"],
    };
  }
};
