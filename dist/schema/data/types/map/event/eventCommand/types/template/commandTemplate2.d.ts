import type { PickByType } from "./pickByType";
import type { MapRecordToCode } from "./mapRecord";
/**
 * Defines a simplified command template type.
 *
 * @template CommandCodeMapping - A record mapping command codes to their values (e.g., string or number).
 * @template ParameterObject - An object type representing the keys used for command parameters.
 * @template CommandParameterMapping - A record mapping command codes to their parameter types.
 */
export interface CommandTemplateSimple2<CommandCodeMapping extends Record<PropertyKey, string | number>, ParameterObject extends object, CommandParameterMapping extends Record<keyof CommandCodeMapping, ParameterObject>> extends CommandTemplate2<CommandCodeMapping, {
    code: ValueOf<CommandCodeMapping>;
    parameters: object;
}, "code", "parameters", CommandParameterMapping> {
}
/**
 * Defines a command template for structured type mappings.
 *
 * @template CommandCodeMapping - A record mapping command codes to their values.
 * @template Command - An object type representing a command's structure.
 * @template CodePropertyKey - A key representing the command's code property.
 * @template ParameterPropertyKey - A key representing the command's parameter property.
 * @template CommandParameterMapping - A record mapping command codes to their parameter types.
 */
export interface CommandTemplate2<CommandCodeMapping extends Record<PropertyKey, string | number>, Command extends object, CodePropertyKey extends keyof PickByType<Command, ValueOf<CommandCodeMapping>>, ParameterPropertyKey extends keyof PickByType<Command, object>, CommandParameterMapping extends Record<keyof CommandCodeMapping, Command[ParameterPropertyKey] & object>> extends CommandTemplateWrapper<Command, CommandCodeMapping, CommandParameterMapping, {
    [Key in keyof CommandParameterMapping]: Key extends keyof CommandCodeMapping ? {
        [Prop in keyof Command]: Prop extends ParameterPropertyKey ? CommandParameterMapping[Key] : Prop extends CodePropertyKey ? CommandCodeMapping[Key] : Command[Prop];
    } : never;
}> {
}
export interface CommandTemplateWrapper<Command extends object = object, CommandCodeMapping extends Record<PropertyKey, string | number> = Record<PropertyKey, string | number>, CommandParameterMapping extends Record<PropertyKey, object> = Record<PropertyKey, object>, CommandObjectMapping extends Record<PropertyKey, object> = Record<PropertyKey, object>> {
    /**
     * @description A lookup table for commands by their code values.
     **/
    commandByCode: MapRecordToCode<CommandObjectMapping, CommandCodeMapping>;
    parameterTypes: CommandParameterMapping;
    commandTypeTable: CommandObjectMapping;
    /**
     * @description A mapping of command codes to their values.
     */
    codeTable: CommandCodeMapping;
    /**
     * @description The union type of command code values.
     */
    codeType: ValueOf<CommandCodeMapping>;
    /**
     * @description The union type of all parameter objects in the command table.
     **/
    commandType: Command;
}
type ValueOf<T extends Record<PropertyKey, unknown>> = T[keyof T];
export {};
