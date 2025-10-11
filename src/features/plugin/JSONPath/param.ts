import type {
  PluginParam,
  ScalaParam,
  ArrayParamTypes,
  StructRefParam,
  StructArrayRefParam,
} from "@RpgTypes/rmmz/plugin";
import type { ParamJSONPath } from "./types";

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
    path: `${parent}.${param.name}`,
  };
};

export const structArrayParamPath = (
  param: PluginParam<StructArrayRefParam>,
  parent: string
): ParamJSONPath<PluginParam<StructArrayRefParam>> => {
  return {
    parent: parent,
    param: param,
    path: `${parent}.${param.name}[*]`,
  };
};
