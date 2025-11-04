import type {
  ArrayParamTypes,
  PluginParamEx,
  ClassifiedPluginParams,
  PrimitiveParam,
} from "@RpgTypes/rmmz/plugin";

export interface StructPropertysPath {
  structName: string;
  scalas: string | undefined;
  scalaArrays: PathPair[];
  objectSchema: Record<string, PrimitiveParam>;
  arraySchema: Record<string, PrimitiveParam>;
}

export interface StructPropertysPathV2<T> {
  structName: string;
  scalas: string | undefined;
  scalaArrays: PathPair[];
  struct?: null | ClassifiedPluginParams;
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
