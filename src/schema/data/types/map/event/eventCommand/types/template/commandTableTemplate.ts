import type { PickByType } from "./filterByValue";

// Tとkeyof T(2個)でcodeとparamを確定させる
export type CommandTableTamplate<
  Rec extends Record<PropertyKey, string | number>,
  T extends object,
  Code extends keyof PickByType<T, ValueOf<Rec>>,
  Param extends keyof PickByType<T, object>,
  Table extends Partial<CommandTableConcept<keyof Rec, T[Param]>>
> = {
  codeKeys: keyof Table;
  codeType: ValueOf<Pick<Rec, keyof Table>>;
} & CreateTable<{ [K in keyof Table]: { code: Rec[K]; parameters: Table[K] } }>;

interface CreateTable<T extends Record<PropertyKey, unknown>> {
  table: T;
  commandType: T[keyof T];
}

type ValueOf<T extends Record<PropertyKey, unknown>> = T[keyof T];

type CommandTableConcept<Key extends PropertyKey, ParamType = unknown> = {
  [K in Key]: ParamType;
};
