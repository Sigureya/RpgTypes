import type { JSONSchemaType } from "ajv";
import type { Schema } from "jsonschema";
import type { KindOfStruct, KindOfStructArray, StructParam } from "./plugin";

export interface CompileResult<T extends object> {
  schema: JSONSchemaType<T>;
  logs: CompileLogItem[];
}

export interface CompileLogItem<Data extends StructParam = StructParam> {
  path: string;
  data: Data;
  schema: Schema | {};
  structName: string;
}

export interface CompileLogSturct<T extends object> {
  path: string;
  data: KindOfStruct<T>;
  schema: JSONSchemaType<T>;
  structName: string;
}

const isStructParam = (
  log: CompileLogItem<StructParam>
): log is CompileLogItem<KindOfStruct<object> | KindOfStructArray<object>> => {
  return log.data.kind === "struct" || log.data.kind === "struct[]";
};

export const defineStructs = (
  log: ReadonlyArray<CompileLogItem>
): Record<string, JSONSchemaType<object>> => {
  return log
    .filter((x) => isStructParam(x))
    .reduce((acc, item) => {
      return {
        ...acc,
        [item.structName]: item.schema,
      };
    }, {});
};
