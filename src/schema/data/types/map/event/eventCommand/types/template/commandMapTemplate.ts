import type { PickByType } from "./filterByValue";

/**
 * A template for creating a command table with specific code and parameter mappings.
 *
 * @template CodeConstants - A mapping of command names to unique codes.
 * @template Command - The base command object to extend.
 * @template CodeKey - The property of `Command` that represents the command code.
 * @template ParamKey - The property of `Command` that holds the parameters.
 * @template Table - A partial mapping of command codes to parameter types.
 */
export type CommandMapTamplate<
  CodeConstants extends Record<PropertyKey, string | number>,
  Command extends object,
  CodeKey extends keyof PickByType<Command, ValueOf<CodeConstants>>,
  ParamKey extends keyof PickByType<Command, object>,
  Table extends Partial<CommandMapping<keyof CodeConstants, Command[ParamKey]>>
> = ConstructTable<
  CodeConstants,
  {
    [Key in keyof Table]: {
      [Prop in keyof Command]: Prop extends ParamKey
        ? Table[Key]
        : Prop extends CodeKey
        ? CodeConstants[Key]
        : Command[Prop];
    };
  }
>;

/**
 * Constructs a command table type.
 *
 * @template CodeConstants - Command code mappings.
 * @template Table - A mapping of command names to their parameter types.
 */
type ConstructTable<
  CodeConstants extends Record<PropertyKey, string | number>,
  Table extends Record<PropertyKey, object>
> = {
  codeType: ValueOf<Pick<CodeConstants, keyof Table>>;
  commandType: ValueOf<Table>;
  commandTable: Table;
  codeKeys: keyof Table;
};

/** Extracts the value type of a record. */
type ValueOf<T extends Record<PropertyKey, unknown>> = T[keyof T];

/** A mapping of command keys to parameter types. */
type CommandMapping<Key extends PropertyKey, ParamType = unknown> = {
  [K in Key]: ParamType;
};
