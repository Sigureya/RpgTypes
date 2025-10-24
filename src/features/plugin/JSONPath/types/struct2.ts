import type { JSONPathJS } from "jsonpath-js";

export interface CCCResult {
  parent: string;
  jsonPath: JSONPathJS;
}

export interface Result3 {
  struct: string;
  scalas: string;
  scalaArrays: string[];
}

export interface Error {
  path: string;
  paramName: string;
  code: string;
}

export interface Result4 {
  items: Result3[];
  errors: Error[];
}
