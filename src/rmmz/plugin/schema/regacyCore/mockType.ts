import type { JSONSchemaType } from "ajv";

export interface Person {
  name: string;
  age: number;
}

export interface CompileResult<T extends object> {
  schema: JSONSchemaType<T>;
  logs: CompileLogItem[];
}

export interface CompileLogItem {
  path: string;
  data: unknown;
}
export interface Family {
  father: Person;
  mother: Person;
}

export interface School {
  name: string;
  students: Person[];
}
