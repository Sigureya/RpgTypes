import type { JSONSchemaType } from "ajv";
import type { StructParam } from "./plugin";

export interface CompileResult<T extends object> {
  schema: JSONSchemaType<T>;
  logs: CompileLogItem[];
}

export interface CompileLogItem {
  path: string;
  data: StructParam;
}
