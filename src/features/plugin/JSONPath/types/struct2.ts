import type { JSONPathJS } from "jsonpath-js";

export interface CCCResult {
  parent: string;
  jsonPath: JSONPathJS;
}

export interface StructPropertysPath {
  structName: string;
  scalas: string;
  scalaArrays: string[];
}

export interface Error {
  path: string;
  code: string;
}

export interface Result4 {
  items: StructPropertysPath[];
  errors: Error[];
}
