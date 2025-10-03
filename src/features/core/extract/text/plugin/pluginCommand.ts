import type { FilteredPluginSchema } from "@RpgTypes/features/plugin/pick/filtedTypes";
import type { Command_PluginCommandMZ } from "@RpgTypes/rmmz";
import type { PrimitiveStringParam } from "@RpgTypes/rmmz/plugin";
import type { ExtractedPluginCommandArgs } from "./types";

export const extractPluginCommandArgs = (
  command: Command_PluginCommandMZ,
  pluginSchema: {
    get(s: string): undefined | FilteredPluginSchema<PrimitiveStringParam>;
  }
): ExtractedPluginCommandArgs[] => {
  const pluginName = command.parameters[0];
  const plugin = pluginSchema.get(pluginName);
  if (!plugin) {
    return [];
  }
  const commandName: string = command.parameters[1];
  const commandSchema = plugin.commands[commandName];
  if (!commandSchema) {
    return [];
  }

  return xxxCC(command, commandSchema);
};

const xxxCC = (
  command: Command_PluginCommandMZ,
  schema: { args: Record<string, PrimitiveStringParam> }
): ExtractedPluginCommandArgs[] => {
  return Object.entries(schema.args).map(
    ([argName, paramSchema]): ExtractedPluginCommandArgs => ({
      value: command.parameters[3][argName],
      type: paramSchema.kind,
      kind: paramSchema.text ?? `${command.parameters[1]}.${argName}`,
      desc: paramSchema.desc ?? "",
      commandName: command.parameters[1],
      pluginName: command.parameters[0],
    })
  );
};
