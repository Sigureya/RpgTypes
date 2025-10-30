import type { ArrayParamTypes, PluginParamEx } from "@RpgTypes/rmmz/plugin";

export interface StructPropertysPath {
  structName: string;
  scalas: string | undefined;
  scalaArrays: PathPair[];
}

export interface PathPair {
  path: string;
  param: PluginParamEx<ArrayParamTypes>;
}

export interface StructPathError {
  path: string;
  code: string;
}

export interface StructPathResult {
  items: StructPropertysPath[];
  errors: StructPathError[];
}
