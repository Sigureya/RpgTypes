import type { PickByType } from "./filterByValue";

export type CommandTableTamplate<
  CodeConstatns extends Record<PropertyKey, string | number>,
  T extends object,
  CodeProp extends keyof PickByType<T, ValueOf<CodeConstatns>>,
  ParamProp extends keyof PickByType<T, object>,
  Table extends Partial<CommandTableConcept<keyof CodeConstatns, T[ParamProp]>>
> = CreateTable<
  CodeConstatns,
  {
    [TableKey in keyof Table]: {
      [key in keyof T]: key extends ParamProp
        ? Table[TableKey]
        : key extends CodeProp
        ? CodeConstatns[TableKey]
        : T[key];
    };
  }
>;

type CreateTable<
  CodeConstatns extends Record<PropertyKey, string | number>,
  Table extends Record<PropertyKey, object>
> = {
  codeType: ValueOf<Pick<CodeConstatns, keyof Table>>;
  commandType: ValueOf<Table>;
  commandTable: Table;
  codeKeys: keyof Table;
};

type ValueOf<T extends Record<PropertyKey, unknown>> = T[keyof T];

type CommandTableConcept<Key extends PropertyKey, ParamType = unknown> = {
  [K in Key]: ParamType;
};
