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
