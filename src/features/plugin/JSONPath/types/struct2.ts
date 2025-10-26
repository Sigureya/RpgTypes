import type { PluginParam } from "@RpgTypes/rmmz/plugin";

export interface StructPropertysPath {
  structName: string;
  scalas: string | undefined;
  scalaArrays: PathPair[];
}

export interface PathPair<T = PluginParam> {
  path: string;
  param: T;
}

export interface StructPathError {
  path: string;
  code: string;
}

export interface StructPathResult {
  items: StructPropertysPath[];
  errors: StructPathError[];
}
