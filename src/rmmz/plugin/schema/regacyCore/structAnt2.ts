export type StructKind =
  | "string"
  | "number"
  | "boolean"
  | "actor"
  | "weapon"
  | "armor"
  | "struct"
  | "struct[]";

type BaseAnnotation = {
  kind: StructKind;
  default?: any;
  desc?: string;
  text?: string;
};

type StringAnnotation = BaseAnnotation & {
  kind: "string";
  default?: string;
};

type NumberAnnotation = BaseAnnotation & {
  kind: "number" | "actor" | "weapon" | "armor";
  default?: number;
};

type BooleanAnnotation = BaseAnnotation & {
  kind: "boolean";
  default?: boolean;
};

type StructReference = {
  structName: string;
};

type InlineStruct<T> = {
  structName: string;
  params: StructParams<T>;
};

type StructAnnotationInline<T> = {
  kind: "struct";
  struct: InlineStruct<T>;
};

type StructAnnotationReference = {
  kind: "struct";
  struct: StructReference;
};

type StructArrayAnnotation<T> = {
  kind: "struct[]";
  struct: InlineStruct<T>;
  default?: T[];
};

type StructParams<T> = {
  [K in keyof T]: StructAnnotation<T[K]>;
};

export type StructAnnotation<T> =
  | StringAnnotation
  | NumberAnnotation
  | BooleanAnnotation
  | StructAnnotationInline<T>
  | StructAnnotationReference
  | StructArrayAnnotation<any>;
