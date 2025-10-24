import type { JSONPathJS } from "jsonpath-js";

export interface CCCResult {
  parent: string;
  jsonPath: JSONPathJS;
}

export interface StructPropertysPath {
  structName: string;
  scalas: string | null;
  scalaArrays: string[];
}

export interface StructPathError {
  path: string;
  code: string;
}

export interface Result4 {
  items: StructPropertysPath[];
  errors: StructPathError[];
}
