import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { StructParam } from "./plugin";

export interface CompileResult<T extends object> {
  schema: JSONSchemaType<T>;
  logs: CompileLogItem[];
}

export interface CompileLogItem {
  path: string;
  data: StructParam;
  schema?: Schema;
}

// const mapCompileLogs =(list : CompileLogItem[]): Map<string, StructParam> => {
