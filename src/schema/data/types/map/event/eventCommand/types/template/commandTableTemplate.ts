import type { PickByType } from "./filterByValue";

export type CommandTableTamplate<
  CodeConstatns extends Record<PropertyKey, string | number>,
  T extends object,
  CodeProp extends keyof PickByType<T, ValueOf<CodeConstatns>>,
  ParamProp extends keyof PickByType<T, object>,
  Table extends Partial<CommandTableConcept<keyof CodeConstatns, T[ParamProp]>>
> = {
  codeKeys: keyof Table;
  codeType: ValueOf<Pick<CodeConstatns, keyof Table>>;
} & CreateTable<{
  [TableKey in keyof Table]: {
    [key in keyof T]: key extends ParamProp
      ? Table[TableKey]
      : key extends CodeProp
      ? CodeConstatns[TableKey]
      : T[key];
  };
}>;

type CreateTable<T extends Record<PropertyKey, unknown>> = {
  commandType: ValueOf<T>;
  commandTable: T;
};

type ValueOf<T extends Record<PropertyKey, unknown>> = T[keyof T];

type CommandTableConcept<Key extends PropertyKey, ParamType = unknown> = {
  [K in Key]: ParamType;
};
