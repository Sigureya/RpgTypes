import type { PickByType } from "./filterByValue";
/**
 * A simplified template for creating a command table with specific code and parameter mappings.
 *
 * @template CodeConstants - A mapping of command names to unique codes.
 * @template ParamType - The type of parameters associated with the command codes.
 * @template Table - A partial mapping of command codes to their corresponding parameter types.
 */
export type CommandTemplateSimple<CodeConstants extends Record<PropertyKey, string | number>, ParamType extends object, Table extends CommandMapping<keyof CodeConstants, ParamType>> = CommandTemplate<CodeConstants, {
    code: ValueOf<CodeConstants>;
    parameters: object;
}, "code", "parameters", Table>;
type Test<T extends number | string> = {};
/**
 * A template for creating a command table with specific code and parameter mappings.
 *
 * @template CodeConstants - A mapping of command names to unique codes.
 * @template Command - The base command object to extend.
 * @template CodeKey - The property of `Command` that represents the command code.
 * @template ParamKey - The property of `Command` that holds the parameters.
 * @template Table - A partial mapping of command codes to parameter types.
 */
export type CommandTemplate<CodeConstants extends Record<PropertyKey, string | number>, Command extends object, CodeKey extends keyof PickByType<Command, ValueOf<CodeConstants>>, ParamKey extends keyof PickByType<Command, object>, Table extends CommandMapping<keyof CodeConstants, Command[ParamKey]>> = ConstructTable<CodeConstants, {
    [Key in keyof Exclude<Table, undefined>]: {
        [Prop in keyof Command]: Prop extends ParamKey ? Exclude<Table, undefined>[Key] : Prop extends CodeKey ? CodeConstants[Key] : Command[Prop];
    } & Test<CodeConstants[Key]>;
}>;
/**
 * Constructs a command table type.
 *
 * @template CodeConstants - Command code mappings.
 * @template Table - A mapping of command names to their parameter types.
 */
type ConstructTable<CodeConstants extends Record<PropertyKey, string | number>, Table extends Record<keyof CodeConstants, object>> = {
    /**
     * @description Type of the code values from the provided code constants.
     */
    codeType: ValueOf<Pick<CodeConstants, keyof Table>>;
    /**
     * @description Union type of all parameter objects from the table.
     **/
    commandType: ValueOf<Table>;
    /**
     * @description The command table mapping codes to their associated objects.
     **/
    commandTable: Table;
    /**
     * @description Keys used in the command table.
     **/
    codeKeys: keyof Table;
};
/** Extracts the value type of a record. */
type ValueOf<T extends Record<PropertyKey, unknown>> = T[keyof T];
/** A mapping of command keys to parameter types. */
type CommandMapping<Key extends PropertyKey, ParamType = unknown> = {
    [K in Key]: ParamType;
};
export {};
