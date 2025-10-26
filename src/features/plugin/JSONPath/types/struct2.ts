import type { ArrayParamTypes, PluginParam } from "@RpgTypes/rmmz/plugin";

export interface StructPropertysPath {
  structName: string;
  scalas: string | undefined;
  scalaArrays: PathPair[];
}

export interface PathPair<T = PluginParam> {
  path: string;
  param: T;
}

export interface ArrayPathPair {
  path: string;
  param: PluginParam<ArrayParamTypes>;
}

export interface StructPathError {
  path: string;
  code: string;
}

export interface StructPathResult {
  items: StructPropertysPath[];
  errors: StructPathError[];
}
