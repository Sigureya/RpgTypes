import type { JSONValue } from "@RpgTypes/libs";
import type { Command_PluginCommandMZ } from "@RpgTypes/rmmz";
import { parseDeepJSON } from "@sigureya/rmmz-plugin-schema";
import type {
  CommandArgExtractors,
  CommandExtractResult,
  CommandMapKey,
} from "@sigureya/rmmz-plugin-schema/features";
import { extractPluginCommandArgs } from "@sigureya/rmmz-plugin-schema/features";

export const extractPluginCommandParams = (
  command: Command_PluginCommandMZ,
  commandMap: ReadonlyMap<CommandMapKey, CommandArgExtractors>
): CommandExtractResult => {
  const [pluginName, commandName] = command.parameters;
  const key: CommandMapKey = `${pluginName}:${commandName}`;
  const extractor = commandMap.get(key);
  if (!extractor) {
    return {
      pluginName,
      commandName,
      values: [],
    };
  }
  const argObject: JSONValue = parseArgs(command.parameters[3]);
  return extractPluginCommandArgs(argObject, extractor);
};

const parseArgs = (args: Record<string, string>): Record<string, JSONValue> => {
  const entries = Object.entries(args).map(
    ([key, value]): [string, JSONValue] => [key, parseDeepJSON(value)]
  );
  return Object.fromEntries<JSONValue>(entries);
};
