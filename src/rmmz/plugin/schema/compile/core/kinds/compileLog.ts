import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { StructParam } from "./plugin";

export interface CompileResult<T extends object> {
  schema: JSONSchemaType<T>;
  logs: CompileLogItem[];
}

export interface CompileLogItem<Data extends StructParam = StructParam> {
  path: string;
  data: Data;
  schema: Schema | {};
  structName?: string;
}

// const mapCompileLogs =(list : CompileLogItem[]): Map<string, StructParam> => {
