import type { JSONSchemaType } from "ajv";

export interface CompileResult<T extends object> {
  schema: JSONSchemaType<T>;
  logs: CompileLogItem[];
}

export interface CompileLogItem {
  path: string;
  data: unknown;
}
