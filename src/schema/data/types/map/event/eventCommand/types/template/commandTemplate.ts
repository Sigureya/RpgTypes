import type { PickByType } from "./filterByValue";

/**
 * Defines a simplified command template type.
 *
 * @template CommandCodeMapping - A record mapping command codes to their values (e.g., string or number).
 * @template ParameterObject - An object type representing the keys used for command parameters.
 * @template CommandParameterMapping - A record mapping command codes to their parameter types.
 */
export interface CommandTemplateSimple<
  CommandCodeMapping extends Record<PropertyKey, string | number>,
  ParameterObject extends object,
  CommandParameterMapping extends Record<
    keyof CommandCodeMapping,
    ParameterObject
  >
> extends CommandTemplate<
    CommandCodeMapping,
    { code: ValueOf<CommandCodeMapping>; parameters: object },
    "code",
    "parameters",
    CommandParameterMapping
  > {}

/**
 * Defines a command template for structured type mappings.
 *
 * @template CommandCodeMapping - A record mapping command codes to their values.
 * @template Command - An object type representing a command's structure.
 * @template CodePropertyKey - A key representing the command's code property.
 * @template ParameterPropertyKey - A key representing the command's parameter property.
 * @template CommandParameterMapping - A record mapping command codes to their parameter types.
 */
export interface CommandTemplate<
  CommandCodeMapping extends Record<PropertyKey, string | number>,
  Command extends object,
  CodePropertyKey extends keyof PickByType<
    Command,
    ValueOf<CommandCodeMapping>
  >,
  ParameterPropertyKey extends keyof PickByType<Command, object>,
  CommandParameterMapping extends Record<
    keyof CommandCodeMapping,
    Command[ParameterPropertyKey]
  >
> extends ConstructTable<
    CommandCodeMapping,
    {
      // Using `keyof Table` enables editor-friendly navigation to parameter definitions.
      // If `keyof CommandCodeMapping` were used, navigation would lead to constant definitions, which is less practical.
      // Additionally, the `extends keyof CommandCodeMapping` condition removes irrelevant types.
      [Key in keyof CommandParameterMapping]: Key extends keyof CommandCodeMapping
        ? {
            [Prop in keyof Command]: Prop extends ParameterPropertyKey
              ? CommandParameterMapping[Key]
              : Prop extends CodePropertyKey
              ? CommandCodeMapping[Key]
              : Command[Prop];
          }
        : never;
    },
    CodePropertyKey
  > {}

// テーブルの基底インターフェース
// コマンドテンプレートで作成されたインターフェースを利用したいときに使う
export interface C<
  Command extends object,
  MappingKey extends PropertyKey = PropertyKey,
  Code extends string | number = string | number
> {
  commandTypeTable: Record<MappingKey, Command>;
  codeTable: Record<MappingKey, Code>;
  commandByCode: Record<Code, Command>;
  codeType: Code;
  commandType: Command;
  codeKeys: MappingKey;
}

/**
 * Constructs a type representing a command table.
 *
 * @template CommandCodeMapping - A record mapping command codes to their values.
 * @template CommandParameterMapping - A mapping of command codes to their respective parameter types.
 * @template CodeKey - A key used to associate codes with command objects.
 */
interface ConstructTable<
  CommandCodeMapping extends Record<PropertyKey, string | number>,
  CommandParameterMapping extends Record<keyof CommandCodeMapping, object>,
  CodeKey extends keyof CommandCodeMapping
> extends C<object, keyof CommandCodeMapping, ValueOf<CommandCodeMapping>> {
  parameters: "";

  /**
   * @description A mapping of commands to their parameter types.
   **/
  commandTypeTable: CommandParameterMapping;
  /**
   * @description A mapping of command codes to their values.
   */
  codeTable: CommandCodeMapping;
  /**
   * @description A lookup table for commands by their code values.
   **/
  commandByCode: {
    [Code in CommandCodeMapping[keyof CommandCodeMapping]]: Extract<
      ValueOf<CommandParameterMapping>,
      { [Key in CodeKey]: Code }
    >;
  };
  /**
   * @description The union type of command code values.
   */
  codeType: ValueOf<CommandCodeMapping>;
  /**
   * @description The union type of all parameter objects in the command table.
   **/
  commandType: ValueOf<CommandParameterMapping>;
  /**
   * @description Keys representing the commands in the table.
   **/
  codeKeys: keyof CommandParameterMapping;
}

/** Extracts the value type of a record. */
type ValueOf<T extends Record<PropertyKey, unknown>> = T[keyof T];
