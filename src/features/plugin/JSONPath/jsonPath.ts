import type {
  PluginParam,
  ScalaParam,
  ArrayParamTypes,
  StructRefParam,
  PluginStructSchemaArray,
  StructArrayRefParam,
} from "@RpgTypes/rmmz/plugin";
import {
  isArrayParam,
  isStructArrayParam,
  isStructParam,
} from "@RpgTypes/rmmz/plugin";
import type { ParamJSONPath, ParamJSONPathSturct } from "./types";

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

export const structXXX = (
  structSchema: PluginStructSchemaArray,
  parent: string
): ParamJSONPathSturct => {
  const params: ParamJSONPath[] = structSchema.params.map(({ attr, name }) => {
    if (isStructArrayParam(attr)) {
      return structArrayParamPath({ attr, name }, parent);
    }
    if (isArrayParam(attr)) {
      return arrayParamPath({ attr, name }, parent);
    }
    if (isStructParam(attr)) {
      return structParamPath({ attr, name }, parent);
    }
    return scalaParamPath({ attr, name }, parent);
  });

  return {
    struct: structSchema.struct,
    params: params,
  };
};
