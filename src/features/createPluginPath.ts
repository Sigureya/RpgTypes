import type { RawGameEventData } from "@RpgTypes/fileio";
import type { Command_PluginCommandMZ } from "@RpgTypes/rmmz";
import type {
  AnyStringParam,
  PluginReplacePathData,
  PluginSchema,
} from "@sigureya/rmmz-plugin-schema";
import type { PluginCommandMapKey, AnyParamTextPredicate } from "./pluginMap";
import {
  collectPluginCommands,
  createPluginCommandKey,
  createPluginTextPathDictionaries,
  groupPluginCommandsByKey,
  isTextAnyParamStrict,
} from "./pluginMap";

type PluginTextSource = Pick<PluginSchema, "pluginName" | "schema">;

export interface PluginCommandPathDictionaryEntry {
  key: PluginCommandMapKey;
  pluginName: string;
  commandName: string;
  argsPath: string[][];
  commands: Command_PluginCommandMZ[];
}

export interface PluginPathBuildResult {
  params: PluginReplacePathData[];
  commandPaths: PluginCommandPathDictionaryEntry[];
  groupedCommands: ReadonlyMap<PluginCommandMapKey, Command_PluginCommandMZ[]>;
}

export const buildPluginParamPathDictionaries = (
  plugins: ReadonlyArray<PluginTextSource>,
  anyParamFn: AnyParamTextPredicate = isTextAnyParamStrict,
): PluginReplacePathData[] => {
  return createPluginTextPathDictionaries(plugins, anyParamFn);
};

export const buildPluginCommandPathDictionaries = (
  events: RawGameEventData,
  plugins: ReadonlyArray<PluginTextSource>,
  anyParamFn: AnyParamTextPredicate = isTextAnyParamStrict,
): PluginCommandPathDictionaryEntry[] => {
  const params = buildPluginParamPathDictionaries(plugins, anyParamFn);
  const groupedCommands = collectAndGroupPluginCommands(events);

  return params
    .flatMap((plugin): PluginCommandPathDictionaryEntry[] =>
      plugin.commands.map((command) => {
        const key = createPluginCommandKey(
          plugin.pluginName,
          command.commandName,
        );
        return {
          key,
          pluginName: plugin.pluginName,
          commandName: command.commandName,
          argsPath: command.argsPath,
          commands: groupedCommands.get(key) ?? [],
        };
      }),
    )
    .filter((entry) => entry.commands.length > 0);
};

export const collectAndGroupPluginCommands = (
  events: RawGameEventData,
): ReadonlyMap<PluginCommandMapKey, Command_PluginCommandMZ[]> => {
  const commands = collectPluginCommands(events);
  return groupPluginCommandsByKey(commands);
};

export const buildPluginPathDictionaries = (
  events: RawGameEventData,
  plugins: ReadonlyArray<PluginTextSource>,
  anyParamFn: (
    param: AnyStringParam,
    name: string,
  ) => boolean = isTextAnyParamStrict,
): PluginPathBuildResult => {
  const params = buildPluginParamPathDictionaries(plugins, anyParamFn);
  const groupedCommands = collectAndGroupPluginCommands(events);

  const commandPaths = params
    .flatMap((plugin): PluginCommandPathDictionaryEntry[] =>
      plugin.commands.map((command) => {
        const key = createPluginCommandKey(
          plugin.pluginName,
          command.commandName,
        );
        return {
          key,
          pluginName: plugin.pluginName,
          commandName: command.commandName,
          argsPath: command.argsPath,
          commands: groupedCommands.get(key) ?? [],
        };
      }),
    )
    .filter((entry) => entry.commands.length > 0);

  return {
    params,
    commandPaths,
    groupedCommands,
  };
};
