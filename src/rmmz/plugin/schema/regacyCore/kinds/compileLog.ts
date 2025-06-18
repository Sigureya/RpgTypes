import type { JSONSchemaType } from "ajv";
import type { StructParam } from "./struct2";

export interface CompileResult<T extends object> {
  schema: JSONSchemaType<T>;
  logs: CompileLogItem[];
}

export interface CompileLogItem {
  path: string;
  data: StructParam;
}
