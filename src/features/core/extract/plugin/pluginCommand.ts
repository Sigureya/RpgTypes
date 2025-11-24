import type { JSONValue } from "@RpgTypes/libs";
import type { Command_PluginCommandMZ } from "@RpgTypes/rmmz";
import { parseDeepRecord } from "@sigureya/rmmz-plugin-schema";
import type {
  CommandArgExtractors,
  CommandExtractResult,
  CommandMapKey,
} from "@sigureya/rmmz-plugin-schema/features";
import { extractPluginCommandArgs } from "@sigureya/rmmz-plugin-schema/features";

export const extractPluginCommandMzArgs = (
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
  const argObject: JSONValue = parseDeepRecord(command.parameters[3]);
  return extractPluginCommandArgs(argObject, extractor);
};
