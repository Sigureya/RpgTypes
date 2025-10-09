import type {
  PluginParam,
  ScalaParam,
  ArrayParamTypes,
  StructRefParam,
} from "@RpgTypes/rmmz/plugin";
import { isArrayParam } from "@RpgTypes/rmmz/plugin";
import type { ParamJSONPath } from "./types";

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

export const scalaParamPath = (
  param: PluginParam<ScalaParam>,
  parent: string
): ParamJSONPath => {
  return {
    parent: parent,
    path: [parent, ".", param.name].join(""),
    param: param,
  };
};

export const arrayParamPath = (
  param: PluginParam<ArrayParamTypes>,
  parent: string
): ParamJSONPath<PluginParam<ArrayParamTypes>> => {
  return {
    parent: parent,
    path: [parent, ".", param.name, "[*]"].join(""),
    param: param,
  };
};

export const structParamPath = (
  param: PluginParam<StructRefParam>,
  parent: string
): ParamJSONPath<PluginParam<StructRefParam>> => {
  return {
    parent: parent,
    param: param,
    path: "",
  };
};
