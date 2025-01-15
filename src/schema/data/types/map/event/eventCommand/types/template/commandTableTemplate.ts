// Tとkeyof T(2個)でcodeとparamを確定させる
export type CommandTableTamplate<
  Rec extends Record<PropertyKey, string | number>,
  T extends object,
  Code extends keyof T & string,
  Param extends keyof T,
  Table extends Partial<CommandTableConcept<keyof Rec, T[Param]>>
> = {
  codeKeys: keyof Table;
  codeType: ValueOf<Pick<Rec, keyof Table>>;
} & CreateTable<{ [K in keyof Table]: { code: Rec[K]; parameters: Table[K] } }>;

type CreateTable<T extends Record<PropertyKey, unknown>> = {
  table: T;
  commandType: T[keyof T];
};
type ValueOf<T extends Record<PropertyKey, unknown>> = T[keyof T];

type CommandConcept = {
  code: string | number;
  parameters: object;
};
type Command<T extends CommandConcept> = T;

interface GGG {
  codeKey: string;
  paramKey: string;
}
type XXX<Key extends string, Value> = {
  [K in Key]: Value;
};
interface LLL<T, T2 extends T> {}
type Command3<
  NameGGG extends GGG,
  CodeType extends PropertyKey,
  ParamType,
  T extends object = {}
> = {
  [C in NameGGG["codeKey"]]: CodeType;
} & Exclude<T, NameGGG["codeKey"] | NameGGG["paramKey"]>;

type Command2<
  NameGGG extends GGG,
  ParamKey extends PropertyKey,
  ParamType,
  T extends object
> = {
  [K in ParamKey]: ParamType;
} & Exclude<T, ParamKey | NameGGG["codeKey"] | NameGGG["paramKey"]>;

type CommandTableConcept<Key extends PropertyKey, ParamType = unknown> = {
  [K in Key]: ParamType;
};
